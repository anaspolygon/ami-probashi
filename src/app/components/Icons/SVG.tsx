import React from "react";

interface Props {
  children: React.ReactNode;
}
const SVG = ({ children }: Props) => {
  return (
    <div className="p-3 bg-secondary rounded-lg border border-tertiary hover:bg-primary icon social">
      {children}
    </div>
  );
};

export default SVG;
