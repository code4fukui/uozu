import { rnd } from "https://js.sabae.cc/rnd.js";
import { hsv2rgb } from "https://js.sabae.cc/hsv2rgb.js";

export const box = (x, y, z, w, h, d, col) => {
  const box = document.createElement("a-box");
  document.querySelector("a-scene").appendChild(box);
  box.setAttribute("position", { x: x - w / 2, y: y + h / 2, z: z + d / 2 });
  box.setAttribute("width", w);
  box.setAttribute("height", h);
  box.setAttribute("depth", d);
  if (!col) {
    col = hsv2rgb(rnd(360), .8, .9);
  }
  box.setAttribute("color", col);
};
