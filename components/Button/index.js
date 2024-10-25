import React from "react";
import data from "../../data/portfolio.json";
import { useCustomThemeMounted } from "../../hook/useCustomThemeMounted";

const Button = ({ children, type, onClick, classes }) => {
  const { mounted, theme } = useCustomThemeMounted();
  if (type === "primary") {
    return (
        <>
            {
                mounted && <button
                  onClick={onClick}
                  type="button"
                  className={`text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg ${
                     theme === "dark" ? "bg-white text-black" : "bg-black text-white"
                    } transition-all duration-300 ease-out first:ml-0 hover:scale-105 active:scale-100 link ${
                     data.showCursor && "cursor-none"
                    } ${classes}`}
                >
                  {children}
                </button>
            }
        </>
    );
  }
  return (
    <>
        {mounted && <button
            onClick={onClick}
            type="button"
            className={`text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-300 ${
                theme === "dark"
                    ? "hover:bg-slate-600 text-white"
                    : "hover:bg-slate-100"
            } hover:scale-105 active:scale-100  tablet:first:ml-0  ${
                data.showCursor && "cursor-none"
            } ${classes} link`}
        >
            {children}
        </button>}
    </>
  );
};

export default Button;
