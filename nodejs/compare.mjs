/**
 * compare the doc against query criterias
 * @param {object} doc
 * @param {object} query
 * @returns {boolean}
 */
export function compare(doc = {}, query = {}) {
	for (const key in query) {
		if (query.hasOwnProperty(key)) {
			const queryValue = query[key];
			const docValue = getNestedValue(doc, key);

			if (typeof queryValue === 'object' && !Array.isArray(queryValue)) {
				if (!compare(docValue, queryValue)) {
					return false;
				}
			} else if (docValue !== queryValue) {
				return false;
			}
		}
	}

	return true;
}

function getNestedValue(obj, path) {
	const keys = path.split('.');
	let value = obj;

	for (const key of keys) {
		if (value && value.hasOwnProperty(key)) {
			value = value[key];
		} else {
			return undefined;
		}
	}

	return value;
}

