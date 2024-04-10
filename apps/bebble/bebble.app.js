var calendar = [];
var current = [];
var next = [];

Graphics.prototype.setFontRighteousRegular = function() {
  // Actual height 75 (81 - 7)
  return this.setFontCustom(
    E.toString(require('heatshrink').decompress(atob('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'))),
    46,
    atob("GjFAIDk7Pzs+ND4+HA=="),
    100|65536
  );
}

Graphics.prototype.setFontLECO1976Regular22 = function(scale) {
  // Actual height 22 (21 - 0)
  g.setFontCustom(atob("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/nA/+cD/5wP/nAAAAAAAAPwAA/gAD+AAPwAAAAAD+AAP4AA/gAAAAAAAAAAAAAcOAP//A//8D//wP//AHDgAcOAP//A//8D//wP//AHDgAAAAAAAAH/jgf+OB/44H/jj8OP/w4//Dj/8OPxw/4HD/gcP+Bw/4AAAAAAAP+AA/8AD/wQOHHA4c8D//wP/8A//gAD4AAfAAH/8A//wP//A84cDjhwIP/AA/8AB/wAAAAAAAD//wP//A//8D//wOHHA4ccDhxwOHHA4f8Dh/wOH/A4f8ABwAAAAAAAAD8AAP4AA/gAD8AAAAAAAAAAAEAAD+AB//A///v/D//gB/wABwAAAAAADgAA/wAf/4P8///wf/4AP8AAOAAAAAAAAAyAAHcAAPwAD/gAP/AA/8AA/AAH8AAMwAAAAAAAAAAAAADgAAOAAA4AAf8AD/wAP/AA/8AAOAAA4AADgAAAAAAAAAAD8AAfwAB/AAD8AAAAAAAADgAAOAAA4AADgAAOAAA4AADgAAAAAAAAAADgAAOAAA4AADgAAAAAAAAABwAB/AA/8A//gP/gA/wADwAAIAAAAAAD//wP//A//8D//wOAHA4AcDgBwOAHA//8D//wP//A//8AAAAAAAA4AcDgBwOAHA//8D//wP//A//8AABwAAHAAAcAAAAAAAA+f8D5/wPn/A+f8DhxwOHHA4ccDhxwP/HA/8cD/xwP/HAAAAAAAAOAHA4AcDhxwOHHA4ccDhxwOHHA4ccD//wP//A//8D//wAAAAAAAD/wAP/AA/8AD/wAAHAAAcAABwAAHAA//8D//wP//A//8AAAAAAAA/98D/3wP/fA/98DhxwOHHA4ccDhxwOH/A4f8Dh/wOH/AAAAAAAAP//A//8D//wP//A4ccDhxwOHHA4ccDh/wOH/A4f8Dh/wAAAAAAAD4AAPgAA+AADgAAOAAA4AADgAAP//A//8D//wP//AAAAAAAAP//A//8D//wP//A4ccDhxwOHHA4ccD//wP//A//8D//wAAAAAAAD/xwP/HA/8cD/xwOHHA4ccDhxwOHHA//8D//wP//A//8AAAAAAAAOA4A4DgDgOAOA4AAAAAAAAOA/A4H8DgfwOA/AAAAAAAAB4AAPwAA/AAD8AAf4ABzgAPPAA8cAHh4AAAAAAAAAAAAHHAAccABxwAHHAAccABxwAHHAAccABxwAHHAAAAAAAAAOHAA4cADzwAPPAAf4AB/gAD8AAPwAAeAAB4AAAAAAAAA+AAD4AAPgAA+ecDh9wOH3A4fcDhwAP/AA/8AD/wAP/AAAAAAAAAP//4///j//+P//44ADjn/OOf845/zjnHOP8c4//zj//OP/84AAAAAAAP//A//8D//wP//A4cADhwAOHAA4cAD//wP//A//8D//wAAAAAAAD//wP//A//8D//wOHHA4ccDhxwOHHA//8D//wP9/A/j8AAAAAAAA//8D//wP//A//8DgBwOAHA4AcDgBwOAHA4AcDgBwOAHAAAAAAAAP//A//8D//wP//A4AcDgBwOAHA8A8D//wH/+AP/wAf+AAAAAAAAD//wP//A//8D//wOHHA4ccDhxwOHHA4ccDhxwOAHA4AcAAAAAAAA//8D//wP//A//8DhwAOHAA4cADhwAOHAA4cADgAAOAAAAAAD//wP//A//8D//wOAHA4ccDhxwOHHA4f8Dh/wOH/A4f8AAAAAAAA//8D//wP//A//8ABwAAHAAAcAABwAP//A//8D//wP//AAAAAAAAP//A//8D//wP//AAAAAAAAOAHA4AcDgBwOAHA4AcDgBwOAHA//8D//wP//A//8AAAAAAAA//8D//wP//A//8AHwAA/AAP8AB/wAPn/A8f8DB/wIH/AAAAAAAAP//A//8D//wP//AAAcAABwAAHAAAcAABwAAHAAAAAAAAP//A//8D//wP//Af8AAP+AAH/AAD8AAHwAD/AB/wAf8AP+AA//8D//wP//AAAAAAAAP//A//8D//wP//AfwAAfwAAfwAAfwAAfwP//A//8D//wAAAAAAAAAAAP//A//8D//wP//A4AcDgBwOAHA4AcD//wP//A//8D//wAAAAAAAD//wP//A//8D//wOHAA4cADhwAOHAA/8AD/wAP/AA/8AAAAAP//A//8D//wP//A4AcDgBwOAHA4AcD//+P//4///j//+AAA4AADgAAAP//A//8D//wP//A4eADh+AOH8A4f4D/3wP/HA/8MD/wQAAAAAAAD/xwP/HA/8cD/xwOHHA4ccDhxwOHHA4f8Dh/wOH/A4f8AAAAAAAA4AADgAAOAAA//8D//wP//A//8DgAAOAAA4AADgAAAAAA//8D//wP//A//8AABwAAHAAAcAABwP//A//8D//wP//AAAADAAAPgAA/wAD/4AB/8AA/8AAfwAB/AA/8Af+AP/AA/wAD4AAMAAA4AAD+AAP/gA//8AH/wAB/AAf8Af/wP/4A/4AD/gAP/4AH/8AB/wAB/AB/8D//wP/gA/gADgAAIABA4AcDwDwPw/Afn4Af+AA/wAD/AA//AH5+A/D8DwDwOAHAgAEAAAAP/AA/8AD/wAP/AAAf8AB/wAH/AAf8D/wAP/AA/8AD/wAAAAAAAADh/wOH/A4f8Dh/wOHHA4ccDhxwOHHA/8cD/xwP/HA/8cAAAAAAAAf//9///3///f//9wAA3AADcAAMAAAOAAA/gAD/wAH/8AB/8AA/wAAPAAAEAAAAHAADcAANwAB3///f//9///wAA"), 32, atob("BwYLDg4UDwYJCQwMBgkGCQ4MDg4ODg4NDg4GBgwMDA4PDg4ODg4NDg4GDQ4MEg8ODQ8ODgwODhQODg4ICQg="), 22+(scale<<8)+(1<<16));
};


const SETTINGS_FILE = "pebble.json";
let settings;
let theme;
let drawTimeout;

let loadSettings = function() {
  settings = require("Storage").readJSON(SETTINGS_FILE,1)|| {'bg': '#0f0', 'color': 'Green', 'theme':'System', 'showlock':false};
};

const img = require("heatshrink").decompress(atob("oFAwkEogA/AH4A/AH4A/AH4A/AE8AAAoeXoAfeDQUBmcyD7A+Dh///8QD649CiAfaHwUvD4sEHy0DDYIfEICg+Cn4fHICY+DD4nxcgojOHwgfEIAYfRCIQaDD4ZAFD5r7DH4//kAfRCIZ/GAAnwD5p9DX44fTHgYSBf4ofVDAQEBl4fFUAgfOXoQzBgIfFBAIfPP4RAEAoYAB+cRiK/SG4h/WIBAfXIA7CBAAswD55AHn6fUIBMCD65AHl4gCmcziAfQQJqfQQJpiDgk0IDXxQLRAEECaBM+QgRYRYgUIA0CD4ggSQJiDCiAKBICszAAswD55AHABKBVD7BAFABIqBD5pAFABPxD55AOD6BADiIAJQAyxLABwf/gaAPAH4A/AH4ARA=="));
const t = 2;
const h = g.getHeight();
const w = g.getWidth();
const ha = 2*h/5 - 4;
const h2 = 3*h/5 - 10;
const h3 = 7*h/8;

let batteryWarning = false;
function isActive(event) {
  var timeActive = getTime() - event.timestamp;
  if (event.allDay) {
    return false;
  }
  return timeActive >= 0 && timeActive <= event.durationInSeconds;
}

function buzzForEvents() {
  calendar = require("Storage").readJSON("android.calendar.json",true)||[];
  calendar = calendar.filter(e => isActive(e) || getTime() <= e.timestamp);
  calendar.sort((a,b) => a.timestamp - b.timestamp);

  current = calendar.filter(isActive);
  next = calendar.filter(e=>!isActive(e));

  let nextEvent = next[0]; if (!nextEvent) return null;
  let minToEvent = Math.round((nextEvent.timestamp - getTime()) / 60.0);
  switch (minToEvent) {
    case 5: Bangle.buzz(4000, .5); break;
    case 0: Bangle.buzz(4000, 1); break;
  }
  if (minToEvent <= 30) {
    return nextEvent.title;
  } else {
    return null;
  }
}

let draw = function() {
  let locale = require("locale");
  let date = new Date();
  let dayOfWeek = locale.dow(date, 1).toUpperCase();
  let dayOfMonth = date.getDate();
  let time = locale.time(date, 1);
  let steps = Bangle.getHealthStatus("day").steps;


  batteryWarning = E.getBattery() <= 10;

  g.reset();

  var eventTitle = buzzForEvents();
  g.setColor(settings.bg);
  g.fillRect(0, 0, w, h2 - t);

  // contrast bar
  g.setColor(theme.fg);
  g.fillRect(0, h2 - t, w, h2);

  // day and steps
  g.setColor(theme.day);
  g.setFontLECO1976Regular22();
  g.setFontAlign(0, -1);
  g.drawString(dayOfWeek, w/4, ha);
  g.drawString(steps, 3*w/4, ha);

  // time
  // white on red for battery warning
  g.setColor(!batteryWarning ? theme.bg : '#f00');
  g.fillRect(0, h2, w, h3);

  g.setFontRighteousRegular();
  g.setFontAlign(0, -1);
  g.setColor(!batteryWarning ? settings.bg : '#fff');
  g.drawString(time, w/2, h2 + 8);

  // contrast bar
  g.setColor(theme.fg);
  g.fillRect(0, h3, w, h3 + t);
  // the bottom
  g.setColor(settings.bg);
  g.fillRect(0, h3 + t, w, h);


  g.setColor(settings.bg);
  g.drawImage(img, w/2 + ((w/2) - 64)/2, 1, { scale: 1 });
  drawCalendar(((w/2) - 42)/2, 14, 42, 4, dayOfMonth);

  if (eventTitle !== null) {
    g.setFontAlign(-1,-1).setFont("Vector",20);
    g.setColor(theme.day);
    g.drawString(eventTitle, 0, h3+t);
  }


  drawLock();
  // queue next draw
  if (drawTimeout) clearTimeout(drawTimeout);
  drawTimeout = setTimeout(function() {
    drawTimeout = undefined;
    draw();
  }, 60000 - (Date.now() % 60000));
};

// at x,y width:wi thicknes:th
let drawCalendar = function(x,y,wi,th,str) {
  g.setColor(theme.fg);
  g.fillRect(x, y, x + wi, y + wi);
  g.setColor(theme.bg);
  g.fillRect(x + th, y + th, x + wi - th, y + wi - th);
  g.setColor(theme.fg);

  let hook_t = 6;
  // first calendar hook, one third in
  g.fillRect(x + (wi/3) - (th/2), y - hook_t, x + wi/3 + th - (th/2), y + hook_t);
  // second calendar hook, two thirds in
  g.fillRect(x + (2*wi/3) -(th/2), y - hook_t, x + 2*wi/3 + th - (th/2), y + hook_t);

  g.setFontLECO1976Regular22();
  g.setFontAlign(0, 0);
  g.drawString(str, x + wi/2, y + wi/2 + th);
};

let loadThemeColors = function() {
  theme = {fg: g.theme.fg, bg: g.theme.bg, day: g.toColor(0,0,0)};
  if (settings.theme === "Dark") {
    theme.fg = g.toColor(1,1,1);
    theme.bg = g.toColor(0,0,0);
  } else if (settings.theme === "Light") {
    theme.fg = g.toColor(0,0,0);
    theme.bg = g.toColor(1,1,1);
  }
  // day and steps
  if (settings.color == 'Blue' || settings.color == 'Red')
    theme.day = g.toColor(1,1,1); // white on blue or red best contrast
};

let drawLock = function(){
  if (settings.showlock) {
    if (Bangle.isLocked()){
      g.setColor(theme.day);
      g.setBgColor(settings.bg);
      g.drawImage(atob("DhABH+D/wwMMDDAwwMf/v//4f+H/h/8//P/z///f/g=="), 1, 4);
    } else {
      g.setColor(settings.bg);
      g.fillRect(0, 0, 20, 20);
    }
  }
};

Bangle.on('lock', drawLock);

// Show launcher when middle button pressed
Bangle.setUI({
  mode : "clock",
  remove : function() {
    // Called to unload all of the clock app
    Bangle.removeListener('lock', drawLock);
    if (drawTimeout) clearTimeout(drawTimeout);
    drawTimeout = undefined;
    delete Graphics.prototype.setFontLECO1976Regular22;
    delete Graphics.prototype.setFontRighteousRegular;
    require("widget_utils").show(); // re-show widgets
  }});

g.clear();
Bangle.loadWidgets();
require("widget_utils").swipeOn(); // hide widgets, make them visible with a swipe

loadSettings();
loadThemeColors();
draw();
