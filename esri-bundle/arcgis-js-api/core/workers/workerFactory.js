define([
  "require",
  "exports",
  "../tsSupport/assignHelper",
  "dojo/_base/kernel",
  "../../config",
  "../../request",
  "../Logger",
  "../promiseUtils",
  "../sniff",
  "../urlUtils",
  "./loaderConfig",
  "./utils",
  "./WorkerFallback"
], function(e, r, o, i, l, t, a, n, c, s, u, f, d) {
  function p(s) {
    return n.create(function(t) {
      function a(e) {
        var r = f.receiveMessage(e);
        if (r)
          switch (r.type) {
            case y:
              !(function(e) {
                var r,
                  t = l.workers.loaderUrl || u.DEFAULT_LOADER_URL;
                if (null != l.default) {
                  var a = o({}, l);
                  delete a.default, (r = JSON.parse(JSON.stringify(a)));
                } else r = JSON.parse(JSON.stringify(l));
                var n = l.workers.loaderConfig,
                  s = u.default({
                    baseUrl: n.baseUrl,
                    locale: i.locale,
                    has: o(
                      {
                        "config-deferredInstrumentation": 0,
                        "dojo-test-sniff": 0,
                        "esri-cors": 1,
                        "esri-secure-context": c("esri-secure-context"),
                        "esri-workers-supports-transfer-arraybuffer": c(
                          "esri-workers-supports-transfer-arraybuffer"
                        ),
                        "events-keypress-typed": 0,
                        "host-webworker": 1
                      },
                      n.has
                    ),
                    map: o({}, n.map),
                    paths: o({}, n.paths),
                    packages: n.packages || []
                  });
                e.postMessage({
                  type: h,
                  configure: { esriConfig: r, loaderUrl: t, loaderConfig: s }
                });
              })(s);
              break;
            case w:
              s.removeEventListener("message", a),
                s.removeEventListener("error", n),
                t(s);
          }
      }
      function n(e) {
        e.preventDefault(),
          s.removeEventListener("message", a),
          s.removeEventListener("error", n),
          k.warn(
            "Failed to create Worker. Fallback to execute module in main thread",
            e
          ),
          (s = new d()).addEventListener("message", a),
          s.addEventListener("error", n);
      }
      s.addEventListener("message", a), s.addEventListener("error", n);
    });
  }
  Object.defineProperty(r, "__esModule", { value: !0 });
  var g = s.normalize(e.toUrl("./worker.js")),
    v = !s.hasSameOrigin(g, location.href),
    k = a.getLogger("esri.core.workers"),
    m = null,
    w = f.MessageType.CONFIGURED,
    h = f.MessageType.CONFIGURE,
    y = f.MessageType.HANDSHAKE;
  r.createWorker = function() {
    if (!c("esri-workers")) return p(new d());
    if (!v) {
      var r = void 0;
      try {
        r = new Worker(g);
      } catch (e) {
        k.warn(
          "Failed to create Worker. Fallback to execute module in main thread",
          event
        ),
          (r = new d());
      }
      return p(r);
    }
    return (
      m || (m = t(g, { responseType: "text" })),
      m
        .then(function(e) {
          return new Worker(
            URL.createObjectURL(new Blob([e.data], { type: "text/javascript" }))
          );
        })
        .catch(function(e) {
          return (
            k.warn(
              "Failed to create Worker. Fallback to execute module in main thread",
              e
            ),
            new d()
          );
        })
        .then(function(e) {
          return p(e);
        })
    );
  };
});