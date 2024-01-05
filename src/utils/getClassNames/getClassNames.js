/**
 * @typedef {import('./types').ConditionalClassNames} CondClassNames
 */

/**
 * @function getClassNames
 * @param {string} baseClassName
 * @param {CondClassNames} condClassNames
 * @param {string[] | []} otherClassNames
 * @return {string}
 */

export const getClassNames = (
  baseClassName,
  condClassNames = {},
  otherClassNames = [],
) => [
  baseClassName,
  ...Object.entries(condClassNames)
    .filter((tuple) => Boolean(tuple[1]))
    .map((tuple) => tuple[0]),
  ...otherClassNames.filter(Boolean),
].join(' ');
