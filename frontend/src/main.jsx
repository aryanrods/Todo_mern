import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";

function Main() {
  return (
    <StrictMode>
      <App />
    </StrictMode>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<Main />);
