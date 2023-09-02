/**
 * closure is a function to test typescript knowldge
 * @param {string} name 
 * @param {string} lastname 
 * @param {function }callback 
 * @returns 
 */
import { Result } from './closure.type'

export function closure(name, lastname, callback: (result: Result) => void): Result {
	const result: Result = {
		fullName: `${name} ${lastname}`,
		uppercase() {
			return name.toUpperCase()
		}
	}
	callback(result)
	return result
}