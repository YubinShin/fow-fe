/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./constants/theme";

import CertificationModal from "./components/CertificationModal";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div
        css={css`
          width: 100%;
          height: 100vh;
          background-color: grey;
        `}
      >
        Hellow World!
        <CertificationModal />
      </div>
    </ThemeProvider>
  );
}

export default App;
