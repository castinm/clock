const fps = 60; // 60 frames per second
const interval = 1000 / fps;
let last_time = 0;

function tick() {
  const now = performance.now();
  const time_elapsed = now - last_time;

  if (time_elapsed < interval)
    return requestAnimationFrame(tick)

  last_time = now;
  const date = new Date();
  const h = date.getHours();
  const m= date.getMinutes();
  const s= date.getSeconds();

  update('analog', { h, m, s });
  return requestAnimationFrame(tick)
}

function update(clock_style, { h, m, s }) {
  const hnode = document.querySelector(`.${clock_style} .h`);
  const mnode = document.querySelector(`.${clock_style} .m`);
  const snode = document.querySelector(`.${clock_style} .s`);

  hnode.style.transform = `rotate(${ (h/ 24) * 360 }deg)`;
  mnode.style.transform = `rotate(${ (m/ 60) * 360 }deg)`;
  snode.style.transform = `rotate(${ (s/ 60) * 360 }deg)`;
}

requestAnimationFrame(tick)
