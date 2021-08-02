// import cache from "./cache";
// import { $ } from "./jQurey";
//
// export const SunAttr = {
//   "--back": "#1d1d1d",
//   "--text": "#1d1d1d",
//   "--white-text": "white",
//   "--app": "white",
// };
//
// export const MoonAttr = {
//   "--back": "white",
//   "--text": "#12fff7",
//   "--white-text": "#12fff7",
//   "--app": "#1d1d1d",
// };
//
// export const setVAll = (Attr: any) => {
//   const body = document.querySelector("body");
//   if (body) {
//     for (const param of Object.keys(Attr)) {
//       $(body).val(param, Attr[param]);
//     }
//   }
// };
//
// export const setBefore = () => {
//   const attr = cache.get("attr");
//   if (attr) {
//     setVAll(attr);
//   }
//   const dark = cache.get("dark");
//   if (dark) {
//     setVAll(dark);
//   }
// };
//
// export const setMode = () => {
//   const mode = cache.get("mode");
//   const darkSun = $("#dark-sun").get();
//   const darkMoon = $("#dark-moon").get();
//   if (darkSun && darkMoon) {
//     if (mode) {
//       if (mode === "sun") {
//         darkSun.classList.add("isNotDisplay");
//       } else {
//         darkMoon.classList.add("isNotDisplay");
//       }
//     } else {
//       darkSun.classList.add("isNotDisplay");
//     }
//   }
// };
