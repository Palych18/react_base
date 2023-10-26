export const Text = (props) => {
  return (
    <p className={props.className}>
      {props.children}
    </p>
  );
};

/*
  <Text className="text">
    Children example
  </Text>
*/
