import { useState, useEffect } from "react";
import { SCREEN_SM, SCREEN_MD, SCREEN_LG } from "../Const/ScreenWidth";

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = (event) => {
      setTimeout(() => {
        setWidth(event.target.innerWidth);
      }, 1500);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    width,
    isScreenSm: width >= SCREEN_SM,
    isScreenMd: width > SCREEN_MD,
    isScreenLg: width > SCREEN_LG,
  };
};
