if (!("hasOwn" in Object)) {
  (Object as any).hasOwn = (obj: any, prop: PropertyKey) =>
    Object.prototype.hasOwnProperty.call(obj, prop);
}

import { createRoot, hydrateRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";

const rootElement = document.getElementById("root")!;
const app = (
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

if (rootElement.children.length > 0) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}
