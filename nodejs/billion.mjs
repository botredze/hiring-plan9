import { fetch, aggregateDocs } from './aggregateDocs.mjs'
import { saveAggregatesDebounced } from './aggregateDocs.mjs'

export async function billion() {
	const totalRequests = 100000;

	let successRequest = 0

	for (let i = 0; i < totalRequests; i++) {


		try {
			const response = await fetch("http://localhost:3000")
			const data = await response.json();

			aggregateDocs(data);
			successRequest++;
		} catch (error) {
			console.log("An error occurred")
		}
	}

	console.log(`Total successfully requests: ${successRequest}`)

	await saveAggregatesDebounced();
}

billion();