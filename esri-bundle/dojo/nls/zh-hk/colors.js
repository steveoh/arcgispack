define({
  // local representation of all CSS3 named colors, companion to dojo.colors.  To be used where descriptive information
  // is required for each color, such as a palette widget, and not for specifying color programatically.
  //Note: due to the SVG 1.0 spec additions, some of these are alternate spellings for the same color (e.g. gray / grey).
  //TODO: should we be using unique rgb values as keys instead and avoid these duplicates, or rely on the caller to do the reverse mapping?
  aliceblue: "愛麗絲藍",
  antiquewhite: "米白色",
  aqua: "水色",
  aquamarine: "碧綠色",
  azure: "天藍色",
  beige: "灰棕色",
  bisque: "橘黃色",
  black: "黑色",
  blanchedalmond: "杏仁白",
  blue: "藍色",
  blueviolet: "藍紫色",
  brown: "褐色",
  burlywood: "實木色",
  cadetblue: "軍服藍",
  chartreuse: "淡黃綠色",
  chocolate: "巧克力色",
  coral: "珊瑚紅",
  cornflowerblue: "矢車菊藍",
  cornsilk: "玉米黃",
  crimson: "暗深紅色",
  cyan: "青色",
  darkblue: "暗藍色",
  darkcyan: "暗青色",
  darkgoldenrod: "暗金菊色",
  darkgray: "暗灰色",
  darkgreen: "暗綠色",
  darkgrey: "暗灰色", // same as darkgray
  darkkhaki: "暗卡其色",
  darkmagenta: "暗紫紅色",
  darkolivegreen: "暗橄欖綠",
  darkorange: "暗橙色",
  darkorchid: "暗蘭花色",
  darkred: "暗紅色",
  darksalmon: "暗鮭紅",
  darkseagreen: "暗海綠色",
  darkslateblue: "暗岩藍色",
  darkslategray: "暗岩灰色",
  darkslategrey: "暗岩灰色", // same as darkslategray
  darkturquoise: "暗松石綠",
  darkviolet: "暗紫羅蘭色",
  deeppink: "深粉紅色",
  deepskyblue: "深天藍色",
  dimgray: "昏灰色",
  dimgrey: "昏灰色", // same as dimgray
  dodgerblue: "道奇藍",
  firebrick: "紅磚色",
  floralwhite: "花卉白",
  forestgreen: "森綠色",
  fuchsia: "海棠紅",
  gainsboro: "石板灰",
  ghostwhite: "幽靈色",
  gold: "金色",
  goldenrod: "金菊色",
  gray: "灰色",
  green: "綠色",
  greenyellow: "綠黃色",
  grey: "灰色", // same as gray
  honeydew: "密瓜色",
  hotpink: "暖粉紅色",
  indianred: "印度紅",
  indigo: "靛藍色",
  ivory: "象牙色",
  khaki: "卡其色",
  lavender: "薰衣草紫",
  lavenderblush: "薰衣草紫紅",
  lawngreen: "草綠色",
  lemonchiffon: "奶油黃",
  lightblue: "淡藍色",
  lightcoral: "淡珊瑚紅",
  lightcyan: "淡青色",
  lightgoldenrodyellow: "淡金菊黃",
  lightgray: "淡灰色",
  lightgreen: "淡綠色",
  lightgrey: "淡灰色", // same as lightgray
  lightpink: "淡粉紅色",
  lightsalmon: "淡鮭紅",
  lightseagreen: "淡海綠色",
  lightskyblue: "淡天藍色",
  lightslategray: "淡岩灰色",
  lightslategrey: "淡岩灰色", // same as lightslategray
  lightsteelblue: "淡鐵藍色",
  lightyellow: "淡黃色",
  lime: "檸檬色",
  limegreen: "檸檬綠",
  linen: "亞麻色",
  magenta: "紫紅色",
  maroon: "栗色",
  mediumaquamarine: "中碧綠色",
  mediumblue: "中藍色",
  mediumorchid: "中蘭紫色",
  mediumpurple: "中紫色",
  mediumseagreen: "中海綠色",
  mediumslateblue: "中岩藍色",
  mediumspringgreen: "中春綠色",
  mediumturquoise: "中松石綠",
  mediumvioletred: "中紫羅蘭紅",
  midnightblue: "午夜藍",
  mintcream: "薄荷乳白色",
  mistyrose: "霧玫瑰色",
  moccasin: "鹿皮黃色",
  navajowhite: "印地安黃色",
  navy: "海軍藍",
  oldlace: "舊蕾絲色",
  olive: "橄欖色",
  olivedrab: "橄欖綠",
  orange: "橙色",
  orangered: "橙紅色",
  orchid: "蘭花色",
  palegoldenrod: "灰金菊色",
  palegreen: "灰綠色",
  paleturquoise: "灰松石綠",
  palevioletred: "灰紫羅蘭紅",
  papayawhip: "番木瓜色",
  peachpuff: "粉撲桃色",
  peru: "祕魯色",
  pink: "粉紅色",
  plum: "李紫色",
  powderblue: "粉藍色",
  purple: "紫色",
  red: "紅色",
  rosybrown: "玫瑰褐",
  royalblue: "品藍色",
  saddlebrown: "鞍褐色",
  salmon: "鮭紅色",
  sandybrown: "沙褐色",
  seagreen: "海綠色",
  seashell: "海貝色",
  sienna: "黃土赭色",
  silver: "銀色",
  skyblue: "天藍色",
  slateblue: "岩藍色",
  slategray: "岩灰色",
  slategrey: "岩灰色", // same as slategray
  snow: "雪白色",
  springgreen: "春綠色",
  steelblue: "鐵藍色",
  tan: "皮革色",
  teal: "深藍綠色",
  thistle: "薊色",
  tomato: "蕃茄紅",
  transparent: "透明",
  turquoise: "松石綠",
  violet: "紫羅蘭色",
  wheat: "小麥色",
  white: "白色",
  whitesmoke: "白煙色",
  yellow: "黃色",
  yellowgreen: "黃綠色"
});
