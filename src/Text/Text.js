/**
 * @typedef {import('./types').TextProps} TextProps
 */

/**
 * @function Text
 * @param {TextProps} props
 * @returns
 */

export const Text = (props) => {
  return (
    <p className={props.className}>
      {props.children}
    </p>
  );
};
