define([
  "require",
  "exports",
  "../tsSupport/assignHelper",
  "../Error",
  "../global"
], function(e, r, b, c, t) {
  var p;
  Object.defineProperty(r, "__esModule", { value: !0 }),
    (r.execute = function(u, l) {
      void 0 === l && (l = {});
      var i = l.responseType;
      return (
        i
          ? "json" !== i &&
            "text" !== i &&
            "blob" !== i &&
            "array-buffer" !== i &&
            (i = "text")
          : (i = "json"),
        t
          .invokeStaticMessage("request", { url: u, options: l })
          .then(function(e) {
            var r,
              t,
              s,
              o,
              n = e.data;
            if (
              n &&
              !(
                ("json" !== i && "text" !== i && "blob" !== i) ||
                ((r = new Blob([n])),
                ("json" !== i && "text" !== i) ||
                  (p || (p = new FileReaderSync()),
                  (t = p.readAsText(r)),
                  "json" !== i))
              )
            ) {
              try {
                s = JSON.parse(t || null);
              } catch (e) {
                var a = b({}, e, { url: u, requestOptions: l });
                throw new c("request:server", e.message, a);
              }
              if (s.error)
                throw ((a = b({}, s.error, { url: u, requestOptions: l })),
                new c("request:server", s.error.message, a));
            }
            switch (i) {
              case "json":
                o = s;
                break;
              case "text":
                o = t;
                break;
              case "blob":
                o = r;
                break;
              default:
                o = n;
            }
            return { data: o, requestOptions: l, ssl: e.ssl, url: u };
          })
      );
    });
});
