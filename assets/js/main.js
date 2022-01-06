// to open/close the mobile menu
function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}

// configuration for wave background
const effect = VANTA.WAVES({
  el: '#wave-background',
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  color: 0x0,
  waveHeight: 20,
  shininess: 50,
  waveSpeed: 1,
  zoom: 0.75
})

// work to check FPS for the background...seems to remove itself on mobile tho...
let before = Date.now();
let now;
let fps = 0;

// requestAnimationFrame(function loop() {
//   now = Date.now();
//   fps = Math.round(1000 / (now - before));
//   before = now;
//   requestAnimationFrame(loop);
//   // console.log('Current FPS: ', fps);
//
//   if(fps < 20) {
//     effect.setOptions({
//       waveSpeed: 0.00
//     })
//   }
// })
