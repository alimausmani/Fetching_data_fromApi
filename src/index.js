import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Fetch from "./data";
import FetchData from "./useEffect";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* <App /> */}
    {/* <Fetch /> */}
    <FetchData />
  </StrictMode>
);
