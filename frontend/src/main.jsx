import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/index.js";

import App from "./App.jsx";

function Main() {
  return (
    <Provider store={store}>
      <StrictMode>
        <App />
      </StrictMode>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<Main />);
