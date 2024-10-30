'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  // write code here
  let newState = { ...state };
  const array = [];

  for (const value of actions) {
    switch (value.type) {
      case 'addProperties':
        const editObj = { ...newState, ...value.extraData };

        newState = { ...editObj };
        array.push(editObj);
        break;

      case 'removeProperties':
        for (const key of value.keysToRemove) {
          delete newState[key];
        }
        array.push(newState);
        break;

      case 'clear':
        newState = {};
        array.push({});

        break;

      default:
        break;
    }
  }

  return array;
}

module.exports = transformStateWithClones;
