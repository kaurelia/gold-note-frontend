import { StrictMode } from "react";
import { createRoot, Root } from "react-dom/client";
import App from "./components/app/app";

const rootElement: HTMLDivElement | null = document.querySelector("#root");
if (rootElement) {
  const root: Root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
