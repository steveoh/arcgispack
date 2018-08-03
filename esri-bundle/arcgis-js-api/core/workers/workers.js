define([
  "require",
  "exports",
  "dojo/sniff",
  "dojo/promise/all",
  "../Logger",
  "../promiseUtils",
  "./Connection",
  "./RemoteClient",
  "./WorkerOwner"
], function(i, a, e, r, n, c, t, o, u) {
  function l() {
    if (h) return h;
    for (var e = s + d, t = [], n = 0; n < e; n++)
      !(function(n) {
        var e = u.create(n).then(function(e) {
          return (g[n] = e);
        });
        t.push(e);
      })(n);
    return (h = r(t).then(function() {}));
  }
  Object.defineProperty(a, "__esModule", { value: !0 }),
    (a.Connection = t),
    (a.RemoteClient = o);
  var f = e("host-browser") ? navigator.hardwareConcurrency : 0;
  f || (f = (e("safari") && e("mac")) || e("trident") ? 8 : 2);
  var s = e("esri-workers-debug") ? 1 : Math.max(1, Math.ceil(f / 2)),
    d = e("esri-workers-debug") ? 1 : Math.max(1, Math.floor(f / 2)),
    m = n.getLogger("esri.core.workers"),
    w = 0,
    g = [];
  (a.initialize = function() {
    l();
  }),
    (a.open = function(t, n, e) {
      if ((void 0 === n && (n = {}), Array.isArray(t)))
        return new a.Connection(
          t.map(function(e) {
            return new a.RemoteClient(e, n.client);
          })
        );
      if ("string" != typeof t) {
        m.warn(
          "workers-open:signature-deprecated",
          "DEPRECATED: workers.open() changed signature."
        );
        var r = t;
        (t = n), (n = { client: r, strategy: e ? "dedicated" : "distributed" });
      }
      var o = n.strategy || "distributed";
      return "local" === o
        ? c
            .create(function(n) {
              i([t], function(e) {
                n(a.RemoteClient.connect(e));
              });
            })
            .then(function(e) {
              return new a.Connection([new a.RemoteClient(e, n.client)]);
            })
        : l().then(function() {
            if ("dedicated" === o) {
              var e = s + w++;
              return (
                (w %= d),
                g[e].open(t).then(function(e) {
                  return new a.Connection([new a.RemoteClient(e, n.client)]);
                })
              );
            }
            return c
              .all(
                g.map(function(e) {
                  return e.open(t);
                })
              )
              .then(function(e) {
                return new a.Connection(
                  e.map(function(e) {
                    return new a.RemoteClient(e, n.client);
                  })
                );
              });
          });
    }),
    (a.terminate = function() {
      h && (h.cancel(), (h = null));
      for (var e = 0; e < g.length; e++) g[e] && g[e].terminate();
      g.length = 0;
    });
  var h = null;
});
