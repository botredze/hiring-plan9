import fs from 'fs';
const aggregates = {};

export async function aggregateDocs(fetchJson) {
	const data = await fetchJson;

	if (data.name) {
		const lastName = data.name.toLowerCase();
		const fullName = data.name;
		if (!aggregates[lastName]) {
			aggregates[lastName] = 0;
		}
		aggregates[lastName]++;
		saveAggregatesDebounced();
	}
}

export function saveAggregates() {
	fs.writeFileSync('./.aggregates.json', JSON.stringify(aggregates));
}

let saveAggregatesTimeout;

export function saveAggregatesDebounced() {
	if (!saveAggregatesTimeout) {
		saveAggregatesTimeout = setTimeout(() => {
			saveAggregates();
			saveAggregatesTimeout = null;
		}, 5000); 
	}
}
