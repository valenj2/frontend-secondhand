import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRoutes from "./secondhand/routes/Routes";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  </StrictMode>
);
