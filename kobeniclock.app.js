require("Font7x11Numeric7Seg").add(Graphics);

const X = 140, Y = 80;
const MS_PER_UPDATE = 60000;

function kobeniImg() {
  return require("heatshrink").decompress(atob("yHAgJC/AH4A/AH4A/AH4A/AH4A/AH4A/AH4A/AH4A/ACUD//8CJ0f///wARNv4RB8AQMgIQB//4CJkHCIX+CKH/LB5aOn4RD4ARQNhh8CAAPwCJYQDPxiODAALHLaoIADSBYRFSBagECL0PCIq0KCMboEbBgRqfhU/CKn9CKH5//fCJ34CKN/v4RPj/zCJ8O+4RN/fwgI1OCIMALJ35CINfCJn3CKHn+P+AoI1N8Nj8ARN93gkEMCJuH4EAhE/AYIRK/3Agf/CJv/4EP+EZCJf+jnAhlwi2ACJX8jwEB7EUCJk2CKEcAgNwgIRMAYMCAQIROAAQRL/AFDggRQhIQJCI0ZCKEDCJ8EgwjQhgRQv4QJhU+vEAgIRC8ARIiMenAjER5IRBngGD+4RJjGemgGD8fpCJEIz0ymAFBgPj+AkICISgD8fQCJUxgEHwARB6JIJp1wwEf4EH8fxCBEEplwoARBh4RNkChBj4RNiAFBm/j8QRJklwjgFBsYRKgUkvEeRwMzsYRMjIEBm8ikgRL/FAgkjkVkCJEBil5xEgiEk4VECJMcv8Ih/glnC5gRJhARBgeACIOICJEdgF/jAFBnFCCJMjgF+CIUwoamCAA0DEYMMAoMgoIWCAA0hCIOEAoNgoERCJAJBn1iAoPAoEBwARHuGOn+BwAOBCJUB/8/4HwJgIHB8ARHwuB39gnkOgEckH8EQ/EwH/gEHNAOQkV/Pg/i+AKBgOggHgCIPACIsH+ecCIME9xsBkl/JA0P/cSj+Aj3PgHH9l//ARFj/kqARBn//gMF/H/LQ0/8FwCIkA7IRI+EwR4IRBwMArf//wRHEwQRBweAoQRL6ARBw2AsARIMIN/5Ev/2MRgIRL80n/2d4DfBCJFE//hCIPhCJX8hH/8Hv/1B8ARM+FH/1D8EDCJIcB/kH/mD+ARJ+hkB+eH/sD/GDCJHzgO/GoP7wf4oV/UJHCNwMj/EH9FDv7XGj/4jk//IhBCIKWBCJCSCoYRB8kICJhXBg/iiARL/kT/EP8Pg/4JBCIoZBDgIjBh/wSwIRGh5zBUIMPCIShBCI//aAUH/Ef+AIB+ARFg//wIRBgf8CIMfCJPjCIn4n4RJAAIRD/oGBI5AACfYIzBCJ4zBCJAcDCKWHCJY1ECIN/CKh9K//HCKQFDCIzgBCJHgCJXnCK3ACJbVCEZwRQ+4EDCJgAFCP4AHR5YRXwARFgIRbCAoRSgAQI/wRZAH4AV"));
}

function draw() {
  var d = new Date();
  var h = d.getHours();
  var meridiem = h < 12 ? 'AM' : 'PM';
  h = h % 12;
  h = h !== 0 ? h : 12;
  m = d.getMinutes();
  var time = `${h}`.slice(-2) + ":" + `${m}`.padStart(2, 0);
  g.reset();
  g.clearRect(0, Y - 50, 200, Y);
  g.setFont("7x11Numeric7Seg", 4);
  g.setFontAlign(1, 1);
  g.drawString(time, X, Y, true);
  g.setFont("4x6", 3);
  g.drawString(meridiem, X + 30, Y, true);
}

g.clear();
g.drawImage(kobeniImg(), 20, 35);
draw();
var timer = setInterval(draw, MS_PER_UPDATE);
Bangle.on('lcdPower', on => {
  if (timer)
    clearInterval(timer);
  timer = undefined;
  if (on) {
    timer = setInterval(draw, MS_PER_UPDATE);
    draw();
  }
});

Bangle.setUI('clock');
Bangle.loadWidgets();
Bangle.drawWidgets();