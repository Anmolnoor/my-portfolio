import { useState } from "react";
import { getDots } from "./helper";

interface Props {
  text: string;
  length?: number;
}

export const GetDescription = ({ text, length = 80 }: Props) => {
  const [show, setShow] = useState(false);
  const lengthOfText = text.length;

  const ToggleBtn = (
    <span
      className="cursor-pointer pl-2 italic"
      onClick={() => setShow(!show)}
    >
      {show ? " show less" : "show more"}
    </span>
  );

  if (lengthOfText <= length || show) {
    return (
      <p className="text-foreground">
        {text.charAt(0).toUpperCase() +
          text.slice(1, show ? lengthOfText : length)}
        {show && ToggleBtn}
      </p>
    );
  }

  return (
    <p className="text-foreground">
      {text.charAt(0).toUpperCase() +
        text.slice(1, length) +
        getDots(text.length)}
      {ToggleBtn}
    </p>
  );
};
