import React, { useMemo } from "react";
import AnimatedCursor from "react-animated-cursor"
import { useCustomThemeMounted } from "../../hook/useCustomThemeMounted";

const Cursor = () => {
  const { theme, mounted} = useCustomThemeMounted();

  const getCustomColor = useMemo(() => {
    if (theme === "dark") {
      return '255, 255, 0';
    } else if (theme === "light") {
      return "0,99,166";
    }
  }, [theme]);

  return (
    <>
      {mounted && (
        <AnimatedCursor
          innerSize={15}
          outerSize={5}
          color={getCustomColor}
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link'
          ]}
        />
      )}
    </>
  );
};

export default Cursor;
