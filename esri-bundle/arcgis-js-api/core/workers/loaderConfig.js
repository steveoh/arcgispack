define([
  "require",
  "exports",
  "../tsSupport/assignHelper",
  "dojo/has",
  "../urlUtils"
], function(a, l, o, e, m) {
  function i(e) {
    return m.removeQueryParameters(a.toUrl(e));
  }
  Object.defineProperty(l, "__esModule", { value: !0 });
  var s,
    t = e("esri-built") ? "dojo/dojo-lite.js" : "dojo/dojo.js";
  (l.DEFAULT_LOADER_URL = m.makeAbsolute(i(t))),
    (l.DEFAULT_CONFIG = {
      baseUrl: ((s = i("dojo/x.js")), m.makeAbsolute(s.slice(0, s.length - 5))),
      packages: [
        { name: "esri" },
        { name: "dojo" },
        { name: "dojox" },
        { name: "dstore" },
        { name: "moment", main: "moment" },
        { name: "@dojo" },
        { name: "cldrjs", main: "dist/cldr" },
        { name: "globalize", main: "dist/globalize" },
        { name: "maquette", main: "dist/maquette.umd" },
        {
          name: "maquette-css-transitions",
          main: "dist/maquette-css-transitions.umd"
        },
        { name: "maquette-jsx", main: "dist/maquette-jsx.umd" },
        { name: "tslib", main: "tslib" }
      ],
      map: {
        globalize: {
          cldr: "cldrjs/dist/cldr",
          "cldr/event": "cldrjs/dist/cldr/event",
          "cldr/supplemental": "cldrjs/dist/cldr/supplemental",
          "cldr/unresolved": "cldrjs/dist/cldr/unresolved"
        }
      }
    }),
    (l.default = function(e) {
      var a = {
        async: e.async,
        isDebug: e.isDebug,
        locale: e.locale,
        baseUrl: e.baseUrl,
        has: o({}, e.has),
        map: o({}, e.map),
        packages: (e.packages && e.packages.concat()) || [],
        paths: o({}, e.paths)
      };
      e.hasOwnProperty("async") || (a.async = !0),
        e.hasOwnProperty("isDebug") || (a.isDebug = !1),
        e.baseUrl || (a.baseUrl = l.DEFAULT_CONFIG.baseUrl),
        l.DEFAULT_CONFIG.packages.forEach(function(e) {
          !(function(e, a) {
            for (var s = 0, t = e; s < t.length; s++)
              if (t[s].name === a.name) return;
            var n = o({}, a),
              r = i(n.name + "/x.js"),
              l = r.slice(0, r.length - 5);
            (n.location = m.makeAbsolute(l)), e.push(n);
          })(a.packages, e);
        });
      for (
        var s = (a.map = a.map || {}),
          t = 0,
          n = Object.keys(l.DEFAULT_CONFIG.map);
        t < n.length;
        t++
      ) {
        var r = n[t];
        s[r] || (s[r] = l.DEFAULT_CONFIG.map[r]);
      }
      return a;
    });
});
