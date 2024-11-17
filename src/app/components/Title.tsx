"use client";
import React, { useEffect } from "react";

type Props = {
  title: string;
};

const Title = ({ title }: Props) => {
  useEffect(() => {
    document.title = title;
  }, []);
  return null;
};

export default Title;
