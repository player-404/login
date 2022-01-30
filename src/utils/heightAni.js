export default function heightAni(el) {
  const startHeight = el.offsetHeight;
  el.style.height = "auto";
  const targetHeight = el.offsetHeight;
  el.style.height = startHeight + "px";
  el.offsetWidth;
  el.style.transition = "all .5s";
  el.style.height = targetHeight + "px";
}
