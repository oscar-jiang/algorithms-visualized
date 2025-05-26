// Inspired by Martin Leitner-Ankerl
// https://martin.ankerl.com/2009/12/09/how-to-create-random-colors-programmatically/

let h = Math.random(); 
const goldenRatio = 0.618033988749895;

// HSV Values to RGB
function hvsToRGB(h, s, v) {
  let h_i = Math.floor(h*6);
  f = (h*6) - h_i;
  p = v * (1-s);
  q = v * (1-f*s);
  t = v * (1 - ( 1 - f) * s);

  let r;
  let g;
  let b; 

  switch (h_i % 6) {
    case 0: 
      r = v; g = t; b = p; 
      break;
    case 1: 
      r = q; g = v; b = p; 
      break;
    case 2: 
      r = p; g = v; b = t; 
      break;
    case 3: 
      r = p; g = q; b = v; 
      break;
    case 4: 
      r = t; g = p; b = v; 
      break;
    case 5: 
      r = v; g = p; b = q; 
      break;
  }

  return [Math.floor(r * 256), Math.floor(g * 256), Math.floor(b * 256)];
}

// Convert RGB to HEX
// Constraint values are between [0,255]
// RGB => '#RRGGBB'
function rgbToHex(r,g,b) {
  return `#${ ((r << 16) + (g << 8) + (b)).toString(16).toUpperCase().padStart(6, '0')}`
}

// Get the next colour
function getNextColour() {
  h = h + goldenRatio;
  h = h % 1;
  const [r,g,b] = hvsToRGB(h, 0.5, 0.95);
  return rgbToHex(r,g,b);
}