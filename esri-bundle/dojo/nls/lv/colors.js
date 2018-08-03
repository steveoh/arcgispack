define(//begin v1.x content
{
  // local representation of all CSS3 named colors, companion to dojo.colors.  To be used where descriptive information
  // is required for each color, such as a palette widget, and not for specifying color programatically.

  //Note: due to the SVG 1.0 spec additions, some of these are alternate spellings for the same color (e.g. gray / grey).
  //TODO: should we be using unique rgb values as keys instead and avoid these duplicates, or rely on the caller to do the reverse mapping?
  aliceblue: "zaļgani zila",
  antiquewhite: "antīki balta",
  aqua: "ūdenszila",
  aquamarine: "akvamarīna",
  azure: "debeszila",
  beige: "bēša",
  bisque: "sārti dzeltenīga",
  black: "melns",
  blanchedalmond: "blanšētu mandeļu",
  blue: "zils",
  blueviolet: "zili violeta",
  brown: "brūns",
  burlywood: "smilšbrūna",
  cadetblue: "zaļganzila",
  chartreuse: "gaiši dzeltenzaļa",
  chocolate: "šokolādes",
  coral: "koraļļu",
  cornflowerblue: "rudzupuķu zils",
  cornsilk: "kukurūzas krāsa",
  crimson: "aveņsarkana",
  cyan: "ciāna",
  darkblue: "tumši zila",
  darkcyan: "tumša ciāna",
  darkgoldenrod: "tumša zelta",
  darkgray: "tumši pelēka",
  darkgreen: "tumši zaļa",
  darkgrey: "tumši pelēka", // same as darkgray
  darkkhaki: "tumša haki",
  darkmagenta: "tumša fuksīna",
  darkolivegreen: "tumša olīvzaļa",
  darkorange: "tumši oranža",
  darkorchid: "tumši violeti sārta",
  darkred: "tumši sarkana",
  darksalmon: "tumši lašsārta",
  darkseagreen: "tumša jūraszaļa",
  darkslateblue: "tumši pelēkzila",
  darkslategray: "tumša zilpelēka",
  darkslategrey: "tumša zilpelēka", // same as darkslategray
  darkturquoise: "tumša tirkīzzila",
  darkviolet: "tumši violeta",
  deeppink: "spilgti rozā",
  deepskyblue: "spilgti debeszila",
  dimgray: "netīri pelēka",
  dimgrey: "netīri pelēka", // same as dimgray
  dodgerblue: "kukurūzas ziedu zila",
  firebrick: "ķieģeļsarkana",
  floralwhite: "ziedu balta",
  forestgreen: "tumši egļu zaļa",
  fuchsia: "fuksīna",
  gainsboro: "zilpelēka",
  ghostwhite: "rēgu balta",
  gold: "zelts",
  goldenrod: "zeltaina",
  gray: "pelēks",
  green: "zaļš",
  greenyellow: "zaļi dzeltena",
  grey: "pelēks", // same as gray
  honeydew: "meloņdzeltena",
  hotpink: "spilgti rozā",
  indianred: "dzelzs krāsa",
  indigo: "indigo",
  ivory: "ziloņkaula",
  khaki: "haki",
  lavender: "mēļa",
  lavenderblush: "mēļi sārta",
  lawngreen: "mauriņa zaļa",
  lemonchiffon: "citronu",
  lightblue: "gaišzila",
  lightcoral: "gaiša koraļļu",
  lightcyan: "gaiša ciāna",
  lightgoldenrodyellow: "gaiši zeltaina",
  lightgray: "gaiši pelēka",
  lightgreen: "gaiši zaļa",
  lightgrey: "gaiši pelēka", // same as lightgray
  lightpink: "gaiši rozā",
  lightsalmon: "gaiši lašsārta",
  lightseagreen: "gaiši jūraszaļa",
  lightskyblue: "gaiši debeszila",
  lightslategray: "gaiši zilpelēka",
  lightslategrey: "gaiši zilpelēka", // same as lightslategray
  lightsteelblue: "gaiši tēraudzila",
  lightyellow: "gaiši dzeltena",
  lime: "laima",
  limegreen: "laima zaļa",
  linen: "linu",
  magenta: "fuksīna",
  maroon: "sarkanbrūna",
  mediumaquamarine: "vidēji akvamarīna",
  mediumblue: "vidēji zila",
  mediumorchid: "vidēji violeti sārta",
  mediumpurple: "vidēji violeta",
  mediumseagreen: "vidēji jūraszaļa",
  mediumslateblue: "vidēji pelēkzila",
  mediumspringgreen: "vidēji spilgti zaļa",
  mediumturquoise: "vidēji tirkīza",
  mediumvioletred: "vidēji violeti sarkana",
  midnightblue: "nakts zila",
  mintcream: "krēmkrāsa",
  mistyrose: "tumša rožu",
  moccasin: "oldzeltena",
  navajowhite: "oranži balta",
  navy: "tumšzila",
  oldlace: "bāla miesaskrāsa",
  olive: "olīvu",
  olivedrab: "olīvu dzeltenpelēka",
  orange: "oranžs",
  orangered: "oranži sarkana",
  orchid: "sārti violeta",
  palegoldenrod: "blāvi zeltaina",
  palegreen: "blāvi zaļa",
  paleturquoise: "blāvi tirkīza",
  palevioletred: "blāvi violeti sarkana",
  papayawhip: "pasteļa dzeltensārta",
  peachpuff: "dzeltensārta",
  peru: "dzeltenbrūna",
  pink: "rozā",
  plum: "tumši purpursarkana",
  powderblue: "dūmakaini zila",
  purple: "violeta",
  red: "sarkans",
  rosybrown: "rožaini brūna",
  royalblue: "tumši zila",
  saddlebrown: "tumši brūna",
  salmon: "lašsārta",
  sandybrown: "smilšbrūna",
  seagreen: "jūraszaļa",
  seashell: "perlamutra",
  sienna: "gaiši brūna",
  silver: "sudrabota",
  skyblue: "debeszila",
  slateblue: "pelēkzila",
  slategray: "pelēkzila",
  slategrey: "pelēkzila", // same as slategray
  snow: "sniegs",
  springgreen: "spilgti zaļa",
  steelblue: "tēraudzila",
  tan: "dzeltenbrūna",
  teal: "zilganzaļa",
  thistle: "bāli violeta",
  tomato: "tomātsarkana",
  transparent: "caurspīdīgs",
  turquoise: "tirkīza",
  violet: "violets",
  wheat: "kviešu dzeltena",
  white: "balts",
  whitesmoke: "baltu dūmu",
  yellow: "dzeltens",
  yellowgreen: "dzeltenzaļa"
});
//end v1.x content
