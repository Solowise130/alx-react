// 0-fromjs.js
import { fromJS } from 'immutable';

/**
 * Transforms an object into an immutable Map using fromJS of the Immutable.js library
 * @param {Object} obj - The object to transform
 * @returns {Map} - The immutable Map
 */
function getImmutableObject(obj) {
    return fromJS(obj);
}

// Export the function for external usage
export default getImmutableObject;
