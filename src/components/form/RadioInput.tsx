import { RadioInputProps } from "@/types";
import React, { FC } from "react";

const RadioInput: FC<RadioInputProps> = ({
  label,
  predefinedVale,
  name,
  checked,
  onChange,
}) => {
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange({ name: name as string, value: predefinedVale });
    }
  };

  return (
    <>
      <input
        name={name}
        type="radio"
        checked={checked}
        onChange={handleChange}
      />
      <label className={`barlow ${checked ? "font-semibold":"font-medium"} text-base md:text-xl leading-[22px]`}>
        {label}
      </label>
    </>
  );
};

export default RadioInput;
