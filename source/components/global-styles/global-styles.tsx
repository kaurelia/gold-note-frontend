import { css, Global, useTheme } from "@emotion/react";
import { useMemo } from "react";

const GlobalStyles = () => {
  const theme = useTheme();
  const globalStyles = useMemo(() => {
    return css`
      *,
      *::after,
      *::before {
        box-sizing: border-box;
        margin: 0;
      }
      body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${theme.colors.primary};
        background: ${theme.colors.primary};
        #root {
          min-height: 100vh;
        }
      }
    `;
  }, [theme]);

  return <Global styles={globalStyles} />;
};
export default GlobalStyles;
