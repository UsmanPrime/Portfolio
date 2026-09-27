import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";

/** Build the same component tree that the browser hydrates, without browser effects. */
export function render() {
  return renderToString(<StaticRouter location="/"><App /></StaticRouter>);
}
