import { createRoot } from "react-dom/client";
import "./index.css";
import "antd/dist/reset.css";
import App from "./App.tsx";
import AntProvider from "./providers/antd.tsx";
import { HashRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <AntProvider>
      <App />
    </AntProvider>
  </HashRouter>
);
