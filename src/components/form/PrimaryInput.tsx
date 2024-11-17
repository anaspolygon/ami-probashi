import { InputProps } from "@/types";
import React, { ChangeEvent } from "react";

const PrimaryInput = ({
  label,
  type = "text",
  placeholder,
  name,
  value,
  errorMsg,
  onChange,
}: InputProps) => {
  return (
    <div>
      {label && (
        <label className="barlow font-semibold text-base md:text-xl leading-[19.2px] md:leading-6 text-[#1E293B] mb-2 md:mb-3 block">
          {label}
        </label>
      )}
      <input
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          if (typeof onChange === "function") {
            onChange({
              name: name || "",
              value: String(e.target.value || "").trim(),
            });
          }
        }}
        value={value}
        type={type}
        placeholder={placeholder}
        className="roboto font-normal w-full rounded-lg placeholder:barlow 
              placeholder:text-sm md:placeholder:text-base focus:outline-none placeholder:text-[#64748B] border border-[#A7B8D1] bg-[#F8FAFC] pt-3.5 px-[11px] pb-4 md:py-3 md:px-4"
      />

      {errorMsg && (
        <p
          className="barlow font-semibold text-sm mt-1 md:mb-3 block"
          style={{ color: "#c53030" }}
        >
          {errorMsg}
        </p>
      )}
    </div>
  );
};

export default PrimaryInput;
