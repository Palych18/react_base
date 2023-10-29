/**
 * @typedef {import('./types').ConditionalClassNames} ModClassNames
 */

/**
 * @function getClassNames
 * @param {string} baseClassName
 * @param {ModClassNames} modClassNames
 * @param {string[] | []} otherClassNames
 * @return {string}
 */

export const getClassNames = (
  baseClassName,
  modClassNames = {},
  otherClassNames = [],
) => [
  baseClassName,
  ...Object.entries(modClassNames)
    .filter((mod) => Boolean(mod[1]))
    .map((mod) => mod[0]),
  ...otherClassNames.filter(Boolean),
].join(' ');

// export const getClassNames = (
//   baseClassName,
//   modClassNames = {},
//   otherClassNames = [],
// ) => {
//   let /** @type {string[] | []} */ arrClassNames = [];

//   if (typeof baseClassName === 'string') {
//     arrClassNames = [baseClassName];
//   }
//   if (typeof modClassNames === 'object' && modClassNames !== null) {
//     for (const key in modClassNames) {
//       if (modClassNames[ key ]) {
//         arrClassNames = [...arrClassNames, key];
//       }
//     }
//   }
//   if (Array.isArray(otherClassNames)) {
//     arrClassNames = [...arrClassNames, ...otherClassNames];
//   }
//   const classNames = arrClassNames.length > 1
//     ? arrClassNames.join(' ')
//     : arrClassNames[0];

//   return classNames;
// };
