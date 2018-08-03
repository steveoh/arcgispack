define(["require", "exports", "dojo/has", "../global", "./utils"], function(
  t,
  e,
  n,
  i,
  l
) {
  var r = function() {
      var e = this,
        t = document.createDocumentFragment();
      ["addEventListener", "dispatchEvent", "removeEventListener"].forEach(
        function(s) {
          e[s] = function() {
            for (var e = [], r = 0; r < arguments.length; r++)
              e[r] = arguments[r];
            return t[s].apply(t, e);
          };
        }
      );
    },
    o = i.MutationObserver || i.WebKitMutationObserver,
    a = (function() {
      var e;
      if (i.process && i.process.nextTick)
        e = function(e) {
          i.process.nextTick(e);
        };
      else if (i.Promise)
        e = function(e) {
          i.Promise.resolve().then(e);
        };
      else if (o) {
        var r = [],
          s = document.createElement("div");
        new o(function() {
          for (; 0 < r.length; ) r.shift()();
        }).observe(s, { attributes: !0 }),
          (e = function(e) {
            r.push(e), s.setAttribute("queueStatus", "1");
          });
      }
      return e;
    })();
  return (function() {
    function e() {
      (this._dispatcher = new r()),
        (this._isInitialized = !1),
        this._workerPostMessage({ type: l.MessageType.HANDSHAKE });
    }
    return (
      (e.prototype.terminate = function() {}),
      Object.defineProperty(e.prototype, "onmessage", {
        get: function() {
          return this._onmessageHandler;
        },
        set: function(e) {
          this._onmessageHandler &&
            this.removeEventListener("message", this._onmessageHandler),
            (this._onmessageHandler = e) && this.addEventListener("message", e);
        },
        enumerable: !0,
        configurable: !0
      }),
      Object.defineProperty(e.prototype, "onerror", {
        get: function() {
          return this._onerrorHandler;
        },
        set: function(e) {
          this._onerrorHandler &&
            this.removeEventListener("error", this._onerrorHandler),
            (this._onerrorHandler = e) && this.addEventListener("error", e);
        },
        enumerable: !0,
        configurable: !0
      }),
      (e.prototype.postMessage = function(e, r) {
        var s = this;
        a(function() {
          s._workerMessageHandler(new MessageEvent("message", { data: e }));
        });
      }),
      (e.prototype.dispatchEvent = function(e) {
        return this._dispatcher.dispatchEvent(e);
      }),
      (e.prototype.addEventListener = function(e, r, s) {
        this._dispatcher.addEventListener(e, r, s);
      }),
      (e.prototype.removeEventListener = function(e, r, s) {
        this._dispatcher.removeEventListener(e, r, s);
      }),
      (e.prototype._workerPostMessage = function(e, r) {
        var s = this;
        a(function() {
          s.dispatchEvent(new MessageEvent("message", { data: e }));
        });
      }),
      (e.prototype._workerMessageHandler = function(e) {
        var u = this,
          r = l.receiveMessage(e);
        if (r) {
          var p = r.jobId;
          switch (r.type) {
            case l.MessageType.CONFIGURE:
              this._isInitialized ||
                this._workerPostMessage({ type: l.MessageType.CONFIGURED });
              break;
            case l.MessageType.OPEN:
              var s = r.modulePath;
              n("esri-webpack")
                ? t(
                    [
                      "esri/core/workers/RemoteClient",
                      "esri/views/vectorTiles/WorkerTileHandler",
                      "esri/views/2d/layers/features/Pipeline",
                      "esri/views/3d/layers/PointCloudWorker",
                      "esri/views/3d/layers/SceneLayerWorker",
                      "esri/layers/graphics/sources/support/CSVSourceWorker",
                      "esri/views/3d/webgl-engine/lib/edgeRendering/EdgeProcessingWorker",
                      s
                    ],
                    function(e, r, s, t, n, i, o, a) {
                      var c;
                      switch (a) {
                        case "esri/views/vectorTiles/WorkerTileHandler":
                          c = r;
                          break;
                        case "esri/views/2d/layers/features/Pipeline":
                          c = s;
                          break;
                        case "esri/views/3d/layers/PointCloudWorker":
                          c = t;
                          break;
                        case "esri/views/3d/layers/SceneLayerWorker":
                          c = n;
                          break;
                        case "esri/layers/graphics/sources/support/CSVSourceWorker":
                          c = i;
                          break;
                        case "esri/views/3d/webgl-engine/lib/edgeRendering/EdgeProcessingWorker":
                          c = o;
                          break;
                        default:
                          c = a;
                      }
                      var d = e.connect(c);
                      u._workerPostMessage({
                        type: l.MessageType.OPENED,
                        jobId: p,
                        data: d
                      });
                    }
                  )
                : t(["esri/core/workers/RemoteClient", s], function(e, r) {
                    var s = e.connect(r);
                    u._workerPostMessage({
                      type: l.MessageType.OPENED,
                      jobId: p,
                      data: s
                    });
                  });
          }
        }
      }),
      e
    );
  })();
});
