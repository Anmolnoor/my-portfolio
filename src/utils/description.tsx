import { useState } from "react";
import { getDots } from "./helper";
import { Text } from "@mantine/core";

interface Props {
  text: string;
  length?: number;
}

/**
 *
 * @param text - text to be converted to dotted string
 * @param length - length of the string to be returned
 * @returns - dotted string of the given length with the first letter capitalized and the rest in lower case along with a show more button.
 */
export const GetDescription = ({ text, length = 80 }: Props) => {
  const [show, setShow] = useState(false);
  const lengthOFText = text.length;

  const getBtn = (
    <span
      style={{
        cursor: "pointer",
        paddingLeft: "10px",
        fontStyle: "italic",
      }}
      onClick={() => setShow(!show)}
    >
      {show ? " show less" : "show more"}
    </span>
  );

  if (lengthOFText <= length || show) {
    return (
      <Text>
        {text.charAt(0).toUpperCase() +
          text.slice(1, show ? lengthOFText : length)}
        {show && getBtn}
      </Text>
    );
  }
  return (
    <Text>
      {text.charAt(0).toUpperCase() +
        text.slice(1, length) +
        getDots(text.length)}
      {getBtn}
    </Text>
  );
};
