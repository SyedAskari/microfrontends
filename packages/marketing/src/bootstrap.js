/**
 * Mount function to start up the app
 * If in development and in isolation call mount immediately
 * Otherwise we are running through the container and we should export the mount function
 */

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const mount = (htmlElement) => {
  ReactDOM.render(<App />, htmlElement);
};

if (process.env.NODE_ENV === "development") {
  const element = document.querySelector("#marketing-dev-root");
  if (element) {
    mount(element);
  }
}

export { mount };
