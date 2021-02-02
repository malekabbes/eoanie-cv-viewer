/*
 * File: Home.tsx
 * Project: cv-viewer
 * Version 0.1.0
 * File Created: Tuesday, 26th January 2021 1:09:55 pm
 * Author: Eoan O'Dea (eoan@web-space.design)
 * -----
 * File Description:
 * Last Modified: Tuesday, 2nd February 2021 2:47:30 pm
 * Modified By: Eoan O'Dea (eoan@web-space.design>)
 * -----
 * Copyright 2021 WebSpace, WebSpace
 */

import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import AllPages from "../components/pdf/AllPages";

interface IProps {
  lang: string;
}

const CV = ({ lang }: IProps) => {
  const [isEnglish, setIsEnglish] = React.useState(true);

  useEffect(() => {
    console.log("props!, ", lang);
  }, [lang]);

  return (
    <AllPages pdf="http://wspace.ie/files/CVTECH-JAN2021V21-DEUTSCH.pdf" />
  );
};

export default CV;