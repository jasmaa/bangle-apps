function iconImg() {
  return require("heatshrink").decompress(atob("mEwgI/8jwFEkMAhEIAoUYApQREDophCBYUBiARBygFBDoXcBYmcC4gFBEYoAMgfgAocP/AFDj/8Aoc//wFE/4FDv4FL74FE44FEoYFEhYFDu0QAodwJogFGgQFDqEHAomFwAFDhoFDikFCIcYhIFEFImYgEgAgMG7FknAFCjPg3kAA=="));
}

require("Storage").write("kobeniclock.img", iconImg());

require("Storage").write('kobeniclock.info', {
  "id": "kobeniclock",
  "version": "0.1.0",
  "icon": "kobeniclock.img",
  "name": "Kobeni Clock",
  "type": "clock",
  "src": "kobeniclock.app.js"
});