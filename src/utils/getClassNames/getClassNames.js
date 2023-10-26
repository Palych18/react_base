/**
 * @typedef {import('./types').ConditionalClassNames} ModClassNames
 */

/**
 * @function getClassNames
 * @param {string} baseClassName
 * @param {ModClassNames} modClassNames
 * @param {any[]} otherClassNames
 * @return {string}
 */

export const getClassNames = (
  baseClassName,
  modClassNames = {},
  otherClassNames = [],
) => {
  const arrClassNames = [];

  if (typeof baseClassName === 'string') {
    arrClassNames.push(baseClassName);
  }
  if (typeof modClassNames === 'object' && modClassNames !== null) {
    for (const key in modClassNames) {
      if (modClassNames[ key ]) {
        arrClassNames.push(key);
      }
    }
  }
  if (Array.isArray(otherClassNames)) {
    arrClassNames.push(otherClassNames);
  }
  const classNames = arrClassNames.length > 1
    ? arrClassNames.join(' ')
    : arrClassNames[0];

  return `${classNames}`;
};
