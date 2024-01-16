import { createRoot } from "react-dom/client";
import App from "./App";

const wrapper = document.getElementById("root");

const root = createRoot(wrapper);

root.render(<App />);
