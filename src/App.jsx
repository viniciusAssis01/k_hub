import { RoutesMain } from "./routes/index";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Reset } from "./styles/Reset";
import { Typography } from "./styles/Typography";

export function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Typography />
      <RoutesMain />
    </>
  );
}
