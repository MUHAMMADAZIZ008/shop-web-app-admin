import { createRoot } from "react-dom/client";
import "./index.css";
import "antd/dist/reset.css";
import App from "./App.tsx";
import AntProvider from "./providers/antd.tsx";
import { MemoryRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <MemoryRouter>
    <AntProvider>
      <App />
    </AntProvider>
  </MemoryRouter>
);
