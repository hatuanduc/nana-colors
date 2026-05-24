import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import NanaColors from "../NanaColors.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NanaColors />
  </StrictMode>
);
