(window.webpackJsonp = window.webpackJsonp || []).push([
  [57],
  {
    1996: function(e, t, i) {
      var r, n;
      (r = [
        i.dj.c(e.i),
        t,
        i(5),
        i(0),
        i(15),
        i(43),
        i(17),
        i(9),
        i(1),
        i(2134),
        i(2009),
        i(2221),
        i(259),
        i(2014),
        i(2023),
        i(310),
        i(2135),
        i(2227),
        i(267)
      ]),
        void 0 ===
          (n = function(
            e,
            t,
            i,
            r,
            n,
            s,
            o,
            a,
            l,
            u,
            c,
            h,
            p,
            _,
            d,
            f,
            y,
            T,
            v
          ) {
            return (function(e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                  (t._handles = new o()),
                  (t._fetchQueue = null),
                  (t._tileRequests = new Map()),
                  (t.container = new u()),
                  t
                );
              }
              return (
                i(t, e),
                (t.prototype.initialize = function() {
                  this.container.useContextVersion(
                    this.view ? this.view.renderContext : null
                  );
                }),
                (t.prototype.hitTest = function(e, t) {
                  var i = this;
                  return this.visible && this._vectorTileContainer
                    ? this._vectorTileContainer.hittest(e, t).then(function(e) {
                        var t = i._tileHandler.getStyleRepository().layers;
                        if (null === e || e < 0 || e >= t.length) return null;
                        var r = t[e],
                          n = new s({
                            attributes: { layerId: e, layerName: r.id }
                          });
                        return (
                          (n.layer = i.layer), (n.sourceLayer = i.layer), n
                        );
                      })
                    : a.resolve(null);
                }),
                (t.prototype.update = function(e) {
                  if (
                    this._tileHandlerPromise &&
                    this._tileHandlerPromise.isFulfilled()
                  ) {
                    if (e.pixelRatio !== this._tileHandler.devicePixelRatio)
                      return void this._start();
                    this._fetchQueue.pause(),
                      (this._fetchQueue.state = e.state),
                      this._tileStrategy.update(e),
                      this._fetchQueue.resume();
                    for (
                      var t = 0, i = this._vectorTileContainer.children;
                      t < i.length;
                      t++
                    ) {
                      var r = i[t];
                      this._tileHandler.updateTile(r, e);
                    }
                    this.notifyChange("updating");
                  }
                }),
                (t.prototype.attach = function() {
                  this._tileHandlerPromise = this._start();
                }),
                (t.prototype.detach = function() {
                  this._stop();
                }),
                (t.prototype.moveStart = function() {
                  this.requestUpdate();
                }),
                (t.prototype.viewChange = function() {
                  this.requestUpdate();
                }),
                (t.prototype.moveEnd = function() {
                  this.requestUpdate();
                }),
                (t.prototype.destroy = function() {
                  this.container.dispose(),
                    this._vectorTileContainer.destroy(),
                    this._tileHandler.destroy();
                }),
                (t.prototype.takeScreenshot = function(e, t) {
                  return this.container
                    ? ((e = f.adjustScreenshotSettings(e, t)),
                      this.container.takeScreenshot(e))
                    : a.reject(
                        "Could not find an object capable of capturing screenshot!"
                      );
                }),
                (t.prototype.isUpdating = function() {
                  var e = !0;
                  return (
                    this._tileRequests.forEach(function(t) {
                      e = e && t.isFulfilled();
                    }),
                    !e
                  );
                }),
                (t.prototype.acquireTile = function(e) {
                  var t = this,
                    i = p.pool.acquire();
                  i.set(e.level, e.row, e.col, e.world);
                  var r = this.updateParameters.state.rotation,
                    n = this._tileHandler.getStyleRepository(),
                    s = v.pool.acquire(i, i, this.layer.tileInfo, n, r);
                  return (
                    this._tileHandlerPromise.then(function() {
                      var e = t._tileHandler.getRefKey(i).then(function(e) {
                        return e
                          ? ((s.refKey = e),
                            t._fetchQueue.push(s.key).then(function(e) {
                              s.setData(e.tileData, e.client),
                                s.once("attach", function() {
                                  return t.requestUpdate();
                                }),
                                t._vectorTileContainer.addChild(s),
                                t.notifyChange("updating");
                            }))
                          : (s.setData(null, null),
                            s.once("attach", function() {
                              return t.requestUpdate();
                            }),
                            void t._vectorTileContainer.addChild(s));
                      });
                      t._tileRequests.set(i.id, e), t.notifyChange("updating");
                    }),
                    s
                  );
                }),
                (t.prototype.releaseTile = function(e) {
                  var t = e.key.id,
                    i = this._tileRequests.get(t);
                  i.isFulfilled() || i.cancel(),
                    this._tileRequests.delete(t),
                    this._vectorTileContainer.removeChild(e),
                    this.requestUpdate(),
                    e.once("detach", function() {
                      return v.pool.release(e);
                    }),
                    this.notifyChange("updating");
                }),
                (t.prototype._stop = function() {
                  this._tileHandlerPromise &&
                    !this._tileHandlerPromise.isFulfilled() &&
                    this._tileHandlerPromise.cancel(),
                    this._handles.removeAll(),
                    this._tileStrategy && this._tileStrategy.destroy(),
                    this._vectorTileContainer &&
                      (this._vectorTileContainer.removeAllChildren(),
                      this.container.removeChild(this._vectorTileContainer)),
                    this._tileHandler && this._tileHandler.stop(),
                    v.pool.prune(),
                    (this._vectorTileContainer = this._tileHandler = this._tileStrategy = this._tileInfoView = null);
                }),
                (t.prototype._start = function() {
                  var e = this;
                  return n("esri-webgl")
                    ? (this._stop(),
                      this._handles.add(
                        this.watch("layer.currentStyleInfo", function() {
                          return e.attach();
                        })
                      ),
                      (this._vectorTileContainer = new T()),
                      this.container.addChild(this._vectorTileContainer),
                      (this._tileInfoView = new h(
                        this.layer.tileInfo,
                        this.layer.fullExtent
                      )),
                      (this._tileHandler = new y(
                        this.layer,
                        function() {
                          return e.requestUpdate();
                        },
                        window.devicePixelRatio || 1,
                        !0,
                        this._tileInfoView
                      )),
                      this._tileHandler.start().then(function() {
                        (e._tileStrategy = new d({
                          cachePolicy: "keep",
                          acquireTile: function(t) {
                            return e.acquireTile(t);
                          },
                          releaseTile: function(t) {
                            return e.releaseTile(t);
                          },
                          tileInfoView: e._tileInfoView
                        })),
                          (e._fetchQueue = new _({
                            tileInfoView: e._tileInfoView,
                            process: function(t) {
                              return e._getTileData(t);
                            }
                          })),
                          e._vectorTileContainer.initialize(
                            e._tileHandler.spriteMosaic,
                            e._tileHandler.glyphMosaic,
                            e.layer.tileInfo,
                            e._tileInfoView
                          ),
                          e.requestUpdate();
                      }))
                    : a.reject("WebGL is required but not supported!");
                }),
                (t.prototype._getTileData = function(e) {
                  return this._tileHandler.getTileData(
                    e,
                    this.updateParameters.state.rotation
                  );
                }),
                r([l.subclass("esri.views.2d.layers.VectorTileLayerView2D")], t)
              );
            })(l.declared(c));
          }.apply(null, r)) || (e.exports = n);
    },
    2007: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t]),
        void 0 ===
          (n = function(e, t) {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (function(e) {
                (e[(e.FILL = 0)] = "FILL"),
                  (e[(e.LINE = 1)] = "LINE"),
                  (e[(e.MARKER = 2)] = "MARKER"),
                  (e[(e.TEXT = 3)] = "TEXT"),
                  (e[(e.LABEL = 4)] = "LABEL"),
                  (e[(e.NONE = 5)] = "NONE"),
                  (e[(e.UNKNOWN = 6)] = "UNKNOWN"),
                  (e[(e.COUNT = 7)] = "COUNT");
              })(t.WGLGeometryType || (t.WGLGeometryType = {})),
              (function(e) {
                (e[(e.SUCCEEDED = 0)] = "SUCCEEDED"),
                  (e[(e.FAILED_OUT_OF_MEMORY = 1)] = "FAILED_OUT_OF_MEMORY");
              })(
                t.WGLGeometryTransactionStatus ||
                  (t.WGLGeometryTransactionStatus = {})
              ),
              (function(e) {
                (e[(e.NONE = 0)] = "NONE"),
                  (e[(e.FILL = 1)] = "FILL"),
                  (e[(e.LINE = 2)] = "LINE"),
                  (e[(e.MARKER = 4)] = "MARKER"),
                  (e[(e.TEXT = 8)] = "TEXT"),
                  (e[(e.LABEL = 16)] = "LABEL"),
                  (e[(e.LABEL_ALPHA = 32)] = "LABEL_ALPHA"),
                  (e[(e.HITTEST = 64)] = "HITTEST"),
                  (e[(e.HIGHLIGHT = 128)] = "HIGHLIGHT"),
                  (e[(e.CLIP = 256)] = "CLIP"),
                  (e[(e.DEBUG = 512)] = "DEBUG"),
                  (e[(e.NUM_DRAW_PHASES = 12)] = "NUM_DRAW_PHASES");
              })(t.WGLDrawPhase || (t.WGLDrawPhase = {})),
              (function(e) {
                (e[(e.SIZE = 0)] = "SIZE"),
                  (e[(e.COLOR = 1)] = "COLOR"),
                  (e[(e.OPACITY = 2)] = "OPACITY"),
                  (e[(e.ROTATION = 3)] = "ROTATION");
              })(t.VVType || (t.VVType = {})),
              (function(e) {
                (e[(e.NONE = 0)] = "NONE"),
                  (e[(e.OPACITY = 1)] = "OPACITY"),
                  (e[(e.COLOR = 2)] = "COLOR"),
                  (e[(e.ROTATION = 4)] = "ROTATION"),
                  (e[(e.SIZE_MINMAX_VALUE = 8)] = "SIZE_MINMAX_VALUE"),
                  (e[(e.SIZE_SCALE_STOPS = 16)] = "SIZE_SCALE_STOPS"),
                  (e[(e.SIZE_FIELD_STOPS = 32)] = "SIZE_FIELD_STOPS"),
                  (e[(e.SIZE_UNIT_VALUE = 64)] = "SIZE_UNIT_VALUE");
              })(t.WGLVVFlag || (t.WGLVVFlag = {})),
              (function(e) {
                (e[(e.MINMAX_TARGETS_OUTLINE = 128)] =
                  "MINMAX_TARGETS_OUTLINE"),
                  (e[(e.SCALE_TARGETS_OUTLINE = 256)] =
                    "SCALE_TARGETS_OUTLINE"),
                  (e[(e.FIELD_TARGETS_OUTLINE = 512)] =
                    "FIELD_TARGETS_OUTLINE"),
                  (e[(e.UNIT_TARGETS_OUTLINE = 1024)] = "UNIT_TARGETS_OUTLINE");
              })(t.WGLVVTarget || (t.WGLVVTarget = {})),
              (function(e) {
                (e[(e.UNKNOWN = 0)] = "UNKNOWN"),
                  (e[(e.BUTT = 1)] = "BUTT"),
                  (e[(e.ROUND = 2)] = "ROUND"),
                  (e[(e.SQUARE = 3)] = "SQUARE");
              })(t.CapType || (t.CapType = {})),
              (function(e) {
                (e[(e.UNKNOWN = 0)] = "UNKNOWN"),
                  (e[(e.MITER = 1)] = "MITER"),
                  (e[(e.BEVEL = 2)] = "BEVEL"),
                  (e[(e.ROUND = 3)] = "ROUND");
              })(t.JoinType || (t.JoinType = {})),
              (function(e) {
                (e.SIMPLE_MARKER = "esriSMS"),
                  (e.SIMPLE_LINE = "esriSLS"),
                  (e.SIMPLE_FILL = "esriSFS"),
                  (e.PICTURE_MARKER = "esriPMS"),
                  (e.PICTURE_FILL = "esriPFS"),
                  (e.TEXT = "esriTS");
              })(t.EsriSymbolType || (t.EsriSymbolType = {})),
              (function(e) {
                (e.SIMPLE_MARKER = "simple-marker"),
                  (e.SIMPLE_LINE = "simple-line"),
                  (e.SIMPLE_FILL = "simple-fill"),
                  (e.PICTURE_MARKER = "picture-marker"),
                  (e.PICTURE_FILL = "picture-fill"),
                  (e.TEXT = "text");
              })(t.EsriSymbolTypeKebab || (t.EsriSymbolTypeKebab = {}));
          }.apply(null, r)) || (e.exports = n);
    },
    2009: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t, i(5), i(0), i(26), i(1), i(2006)]),
        void 0 ===
          (n = function(e, t, i, r, n, s, o) {
            return (function(e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                  (t.attached = !1),
                  (t.lastUpdateId = -1),
                  (t.moving = !1),
                  (t.updateRequested = !1),
                  t
                );
              }
              return (
                i(t, e),
                (t.prototype.initialize = function() {
                  var e = this;
                  this.when(function() {
                    e.requestUpdate();
                  }),
                    n.init(
                      this,
                      "suspended",
                      function(t) {
                        (e.container.visible = !t),
                          !t &&
                            e.updateRequested &&
                            e.view.requestLayerViewUpdate(e);
                      },
                      !0
                    ),
                    n.init(
                      this,
                      "fullOpacity",
                      function(t) {
                        e.container.opacity = t;
                      },
                      !0
                    );
                  var t = function() {
                    this.notifyChange("rendering");
                  }.bind(this);
                  this.container.on("post-render", t),
                    this.container.on("will-render", t);
                }),
                (t.prototype.destroy = function() {
                  this.attached && ((this.attached = !1), this.detach()),
                    (this.updateRequested = !1),
                    (this.layer = null);
                }),
                Object.defineProperty(t.prototype, "rendering", {
                  get: function() {
                    return this.isRendering();
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(t.prototype, "updating", {
                  get: function() {
                    return (
                      !this.suspended &&
                      (!this.attached ||
                        this.updateRequested ||
                        this.isUpdating())
                    );
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (t.prototype.requestUpdate = function() {
                  this.updateRequested ||
                    ((this.updateRequested = !0),
                    this.suspended || this.view.requestLayerViewUpdate(this));
                }),
                (t.prototype.processUpdate = function(e) {
                  !this.isFulfilled() || this.isResolved()
                    ? (this._set("updateParameters", e),
                      this.updateRequested &&
                        !this.suspended &&
                        ((this.updateRequested = !1), this.update(e)))
                    : (this.updateRequested = !1);
                }),
                (t.prototype.isUpdating = function() {
                  return !1;
                }),
                (t.prototype.isRendering = function() {
                  return (
                    this.attached &&
                    (this.moving || this.container.renderRequested)
                  );
                }),
                (t.prototype.canResume = function() {
                  var e = this.inherited(arguments),
                    t = this.layer;
                  if (e && null != t.minScale && null != t.minScale) {
                    var i = this.view.scale,
                      r = t.minScale,
                      n = t.maxScale,
                      s = !r,
                      o = !n;
                    !s && i <= r && (s = !0),
                      !o && i >= n && (o = !0),
                      (e = s && o);
                  }
                  return e;
                }),
                r([s.property()], t.prototype, "attached", void 0),
                r([s.property()], t.prototype, "container", void 0),
                r([s.property()], t.prototype, "moving", void 0),
                r(
                  [s.property({ dependsOn: ["moving"] })],
                  t.prototype,
                  "rendering",
                  null
                ),
                r(
                  [
                    s.property({
                      dependsOn: [
                        "view.scale",
                        "layer.minScale",
                        "layer.maxScale"
                      ]
                    })
                  ],
                  t.prototype,
                  "suspended",
                  void 0
                ),
                r(
                  [s.property({ readOnly: !0 })],
                  t.prototype,
                  "updateParameters",
                  void 0
                ),
                r([s.property()], t.prototype, "updateRequested", void 0),
                r(
                  [s.property({ dependsOn: ["updateRequested", "attached"] })],
                  t.prototype,
                  "updating",
                  null
                ),
                r([s.property()], t.prototype, "view", void 0),
                r([s.subclass("esri.views.2d.layers.LayerView2D")], t)
              );
            })(s.declared(o));
          }.apply(null, r)) || (e.exports = n);
    },
    2010: function(e, t, i) {
      var r, n;
      (r = [
        i.dj.c(e.i),
        t,
        i(222),
        i(184),
        i(10),
        i(11),
        i(39),
        i(136),
        i(2024),
        i(2007),
        i(2062)
      ]),
        void 0 ===
          (n = function(e, t, i, r, n, s, o, a, l, u, c) {
            function h(e) {
              for (var t = {}, i = 0, r = e; i < r.length; i++) {
                var n = r[i];
                t[n.name] = n.strideInBytes;
              }
              return t;
            }
            function p(e) {
              switch (e) {
                case u.WGLGeometryType.MARKER:
                  return C;
                case u.WGLGeometryType.FILL:
                  return S;
                case u.WGLGeometryType.LINE:
                  return R;
                case u.WGLGeometryType.TEXT:
                  return L;
                case u.WGLGeometryType.LABEL:
                  return V;
              }
              return null;
            }
            function _(e) {
              switch (e) {
                case "esriSMS":
                  return "simple-marker";
                case "esriPMS":
                  return "picture-marker";
                case "esriSLS":
                  return "simple-line";
                case "esriPLS":
                  return "picture-line";
                case "esriSFS":
                  return "simple-fill";
                case "esriPFS":
                  return "picture-fill";
                case "esriTS":
                  return "text";
              }
              return e;
            }
            function d(e) {
              var t = _(e.type);
              if (t) {
                switch (t) {
                  case "simple-marker":
                  case "picture-marker":
                  case "CIMPointSymbol":
                    return !0;
                }
                return !1;
              }
            }
            function f(e) {
              var t = _(e.type);
              if (t) {
                switch (t) {
                  case "simple-fill":
                  case "picture-fill":
                  case "CIMPolygonSymbol":
                    return !0;
                }
                return !1;
              }
            }
            function y(e) {
              var t = _(e.type);
              if (t) {
                switch (t) {
                  case "simple-line":
                  case "picture-line":
                  case "CIMLineSymbol":
                    return !0;
                }
                return !1;
              }
            }
            function T(e) {
              var t = _(e.type);
              if (t) {
                switch (t) {
                  case "text":
                  case "CIMTextSymbol":
                    return !0;
                }
                return !1;
              }
            }
            function v(e, t) {
              return !1;
            }
            function E(e) {
              return (e && e.length) || 0;
            }
            function I(e) {
              return "string" == typeof e;
            }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var g,
              m = s.getLogger("esri.views.2d.engine.webgl.Utils");
            (t.C_HITTEST_SEARCH_SIZE = 4),
              (t.C_VBO_GEOMETRY = "geometry"),
              (t.C_VBO_PERINSTANCE = "per_instance"),
              (t.C_VBO_PERINSTANCE_VV = "per_instance_vv"),
              (t.C_VBO_VISIBILITY = "visibility"),
              (t.C_VBO_VISIBILITY_RANGE = "visibilityRange"),
              (t.C_ICON_VERTEX_DEF = [
                { name: t.C_VBO_GEOMETRY, strideInBytes: 24, divisor: 0 }
              ]),
              (t.C_ICON_VERTEX_DEF_VV = [
                { name: t.C_VBO_GEOMETRY, strideInBytes: 40, divisor: 0 }
              ]),
              (t.C_ICON_HEATMAP = [
                { name: t.C_VBO_GEOMETRY, strideInBytes: 28, divisor: 0 }
              ]),
              (t.C_FILL_VERTEX_DEF = [
                { name: t.C_VBO_GEOMETRY, strideInBytes: 24, divisor: 0 }
              ]),
              (t.C_FILL_VERTEX_DEF_VV = [
                { name: t.C_VBO_GEOMETRY, strideInBytes: 32, divisor: 0 }
              ]),
              (t.C_LINE_VERTEX_DEF = [
                { name: t.C_VBO_GEOMETRY, strideInBytes: 32, divisor: 0 }
              ]),
              (t.C_LINE_VERTEX_DEF_VV = [
                { name: t.C_VBO_GEOMETRY, strideInBytes: 44, divisor: 0 }
              ]),
              (t.C_TEXT_VERTEX_DEF = [
                { name: t.C_VBO_GEOMETRY, strideInBytes: 20, divisor: 0 },
                { name: t.C_VBO_VISIBILITY, strideInBytes: 1, divisor: 0 }
              ]),
              (t.C_TEXT_VERTEX_DEF_VV = [
                { name: t.C_VBO_GEOMETRY, strideInBytes: 36, divisor: 0 },
                { name: t.C_VBO_VISIBILITY, strideInBytes: 1, divisor: 0 }
              ]),
              (t.C_LABEL_VERTEX_DEF = [
                { name: t.C_VBO_GEOMETRY, strideInBytes: 20, divisor: 0 },
                { name: t.C_VBO_VISIBILITY, strideInBytes: 1, divisor: 0 },
                { name: t.C_VBO_VISIBILITY_RANGE, strideInBytes: 2, divisor: 0 }
              ]),
              (t.C_ICON_STRIDE_SPEC = h(t.C_ICON_VERTEX_DEF)),
              (t.C_ICON_STRIDE_SPEC_VV = h(t.C_ICON_VERTEX_DEF_VV)),
              (t.C_ICON_STRIDE_SPEC_HEATMAP = h(t.C_ICON_HEATMAP)),
              (t.C_FILL_STRIDE_SPEC = h(t.C_FILL_VERTEX_DEF)),
              (t.C_FILL_STRIDE_SPEC_VV = h(t.C_FILL_VERTEX_DEF_VV)),
              (t.C_LINE_STRIDE_SPEC = h(t.C_LINE_VERTEX_DEF)),
              (t.C_LINE_STRIDE_SPEC_VV = h(t.C_LINE_VERTEX_DEF_VV)),
              (t.C_TEXT_STRIDE_SPEC = h(t.C_TEXT_VERTEX_DEF)),
              (t.C_TEXT_STRIDE_SPEC_VV = h(t.C_TEXT_VERTEX_DEF_VV)),
              (t.C_LABEL_STRIDE_SPEC = h(t.C_LABEL_VERTEX_DEF)),
              (t.getStrides = function(e, i, r) {
                switch ((void 0 === r && (r = !1), e)) {
                  case u.WGLGeometryType.MARKER:
                    return i
                      ? t.C_ICON_STRIDE_SPEC_VV
                      : r
                        ? t.C_ICON_STRIDE_SPEC_HEATMAP
                        : t.C_ICON_STRIDE_SPEC;
                  case u.WGLGeometryType.FILL:
                    return i ? t.C_FILL_STRIDE_SPEC_VV : t.C_FILL_STRIDE_SPEC;
                  case u.WGLGeometryType.LINE:
                    return i ? t.C_LINE_STRIDE_SPEC_VV : t.C_LINE_STRIDE_SPEC;
                  case u.WGLGeometryType.TEXT:
                    return i ? t.C_TEXT_STRIDE_SPEC_VV : t.C_TEXT_STRIDE_SPEC;
                  case u.WGLGeometryType.LABEL:
                    return t.C_LABEL_STRIDE_SPEC;
                }
                return null;
              });
            var C = [t.C_VBO_GEOMETRY],
              S = [t.C_VBO_GEOMETRY],
              R = [t.C_VBO_GEOMETRY],
              L = [t.C_VBO_GEOMETRY, t.C_VBO_VISIBILITY],
              V = [
                t.C_VBO_GEOMETRY,
                t.C_VBO_VISIBILITY,
                t.C_VBO_VISIBILITY_RANGE
              ];
            (t.getNamedBuffers = p),
              (t.getSymbolGeometryType = function(e) {
                return d(e)
                  ? u.WGLGeometryType.MARKER
                  : y(e)
                    ? u.WGLGeometryType.LINE
                    : f(e)
                      ? u.WGLGeometryType.FILL
                      : T(e)
                        ? u.WGLGeometryType.TEXT
                        : u.WGLGeometryType.UNKNOWN;
              }),
              (t.normalizeSymbolType = _),
              (t.isMarkerSymbol = d),
              (t.isFillSymbol = f),
              (t.isLineSymbol = y),
              (t.isPictureSymbol = function(e) {
                var t = _(e.type);
                if (t) {
                  switch (t) {
                    case "picture-marker":
                    case "picture-line":
                    case "picture-fill":
                      return !0;
                  }
                  return !1;
                }
                return !1;
              }),
              (t.isTextSymbol = T),
              (t.getTextProperties = function(e) {
                return c.TextProperties.pool.acquire(
                  e.color
                    ? l.copyAndPremultiply(e.color)
                    : [255, 255, 255, 255],
                  e.haloColor
                    ? l.copyAndPremultiply(e.haloColor)
                    : [255, 255, 255, 255],
                  o.pt2px(e.haloSize),
                  o.pt2px(e.font.size),
                  (e.angle * Math.PI) / 180,
                  e.xoffset / e.font.size,
                  e.yoffset / e.font.size,
                  "left" === e.horizontalAlignment
                    ? 0
                    : "right" === e.horizontalAlignment
                      ? 1
                      : 0.5,
                  "top" === e.verticalAlignment
                    ? 0
                    : "bottom" === e.verticalAlignment
                      ? 1
                      : 0.5
                );
              }),
              (t.isSameUniformValue = v),
              (t.isSameMaterialInfo = function(e, t) {
                if (e.materialKey !== t.materialKey) return !1;
                if (E(e.texBindingInfo) !== E(t.texBindingInfo)) return !1;
                if (E(e.materialParams) !== E(t.materialParams)) return !1;
                for (var i = e.texBindingInfo.length, r = 0; r < i; ++r) {
                  var n = e.texBindingInfo[r],
                    s = t.texBindingInfo[r];
                  if (
                    n.unit !== s.unit ||
                    n.pageId !== s.pageId ||
                    n.semantic !== s.semantic
                  )
                    return !1;
                }
                var o = e.materialParams.length;
                for (r = 0; r < o; ++r) {
                  var a = e.materialParams[r],
                    l = t.materialParams[r];
                  if (a.name !== l.name || (a.value, l.value, 1)) return !1;
                }
                return !0;
              }),
              (t.serializeString = function(e, t, i) {
                for (var r = 0, n = e.length, s = 0; s < n; ++s)
                  t && (t[i + r] = e.charCodeAt(s)), ++r;
                return t && (t[i + r] = 0), ++r;
              }),
              (t.deserializeString = function(e, t, i) {
                var r = 0;
                e.s = "";
                for (var n = !0; n; ) {
                  var s = t[i + r];
                  ++r, 0 !== s ? (e.s += String.fromCharCode(s)) : (n = !1);
                }
                return r;
              }),
              (t.isDefined = function(e) {
                return null !== e && void 0 !== e;
              }),
              (t.isNumber = function(e) {
                return "number" == typeof e;
              }),
              (t.isString = I),
              (t.isStringOrNull = function(e) {
                return null == e || I(e);
              }),
              (t.lerp = function(e, t, i) {
                return e + (t - e) * i;
              });
            var w = (function() {
              function e() {
                (this._arr = []), (this._push = this._push.bind(this));
              }
              return (
                (e.prototype._push = function(e, t) {
                  this._arr.push(t);
                }),
                (e.prototype.getKeys = function(e) {
                  return (
                    (this._arr.length = 0),
                    e && e.forEach(this._push),
                    this._arr
                  );
                }),
                e
              );
            })();
            t.KeysGetter = w;
            var O = (function() {
              function e() {
                (this._arr = []), (this._push = this._push.bind(this));
              }
              return (
                (e.prototype._push = function(e, t) {
                  this._arr.push(e);
                }),
                (e.prototype.getValues = function(e) {
                  return (
                    (this._arr.length = 0),
                    e && e.forEach(this._push),
                    this._arr
                  );
                }),
                e
              );
            })();
            (t.ValuesGetter = O),
              (t.getCapType = function(e) {
                switch (e) {
                  case "butt":
                    return u.CapType.BUTT;
                  case "round":
                    return u.CapType.ROUND;
                  case "square":
                    return u.CapType.SQUARE;
                  default:
                    return (
                      m.error(
                        new n(
                          "mapview-invalid-type",
                          "Cap type " +
                            e +
                            " is not a valid option. Defaulting to round"
                        )
                      ),
                      u.CapType.ROUND
                    );
                }
              }),
              (t.getJoinType = function(e) {
                switch (e) {
                  case "miter":
                    return u.JoinType.MITER;
                  case "bevel":
                    return u.JoinType.BEVEL;
                  case "round":
                    return u.JoinType.ROUND;
                  default:
                    return (
                      m.error(
                        new n(
                          "mapview-invalid-type",
                          "Join type " +
                            e +
                            " is not a valid option. Defaulting to round"
                        )
                      ),
                      u.JoinType.ROUND
                    );
                }
              }),
              (t.getVVType = function(e) {
                switch (e) {
                  case "opacity":
                    return u.VVType.OPACITY;
                  case "color":
                    return u.VVType.COLOR;
                  case "rotation":
                    return u.VVType.ROTATION;
                  case "size":
                    return u.VVType.SIZE;
                  default:
                    return m.error("Cannot interpret unknown vv: " + e), null;
                }
              }),
              (t.createArcadeFunction = function(e, t) {
                var n = e.valueExpression,
                  s = e.spatialReference,
                  o = e.layer,
                  l = a.createFunction(n),
                  u = new r();
                return function(e, r) {
                  u.repurposeFromGraphicLikeObject(e.geometry, e.attributes, o);
                  var n =
                      r &&
                      new i({ viewingMode: r.viewingMode, scale: r.scale }),
                    c = {
                      vars: { $feature: u, $view: n || {} },
                      spatialReference: s
                    },
                    h = a.executeFunction(l, c);
                  return t ? t(h) : h;
                };
              }),
              (t.copyMeshData = function(e, t, i, r, n, s, o) {
                for (var a in s)
                  for (
                    var l = s[a].stride,
                      u = s[a].data,
                      c = i[a].data,
                      h = (l * n.vertexCount) / 4,
                      p = (l * e) / 4,
                      _ = (l * n.vertexFrom) / 4,
                      d = 0;
                    d < h;
                    ++d
                  )
                    c[d + p] = u[d + _];
                var f = n.indexCount;
                for (d = 0; d < f; ++d)
                  r[d + t] = o[d + n.indexFrom] - n.vertexFrom + e;
              }),
              (t.C_VBO_INFO = (((g = {})[t.C_VBO_GEOMETRY] = 35044),
              (g[t.C_VBO_VISIBILITY] = 35044),
              (g[t.C_VBO_VISIBILITY_RANGE] = 35048),
              g)),
              (t.createGeometryData = function(e, t) {
                for (var i = [], r = 0; r < 5; ++r) {
                  for (var n = {}, s = 0, o = p(r); s < o.length; s++) {
                    var a = o[s];
                    n[a] = { data: t(r, a) };
                  }
                  i.push({ data: e(r), buffers: n });
                }
                return i;
              });
          }.apply(null, r)) || (e.exports = n);
    },
    2014: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t, i(2015), i(181)]),
        void 0 ===
          (n = function(e, t, i, r) {
            var n = new Set(),
              s = [],
              o = new Map(),
              a = [0, 0];
            return (function() {
              function e(e) {
                var t = this;
                (this._keysToRequests = new Map()), (this.tileInfoView = null);
                var r =
                  e.strategy && "scale-first" !== e.strategy
                    ? this._peekByCenterFirst.bind(this)
                    : this._peekByScaleFirst.bind(this);
                (this.tileInfoView = e.tileInfoView),
                  e.tileServers && e.tileServers.length > 0
                    ? (this._queues = e.tileServers.map(function(n) {
                        return new i({
                          concurrency: e.concurrency || 6,
                          process: function(i) {
                            var r = t._keysToRequests.get(i);
                            return e.process(r, n);
                          },
                          peeker: r
                        });
                      }))
                    : (this._queues = [
                        new i({
                          concurrency: e.concurrency || 6,
                          process: function(i) {
                            var r = t._keysToRequests.get(i);
                            return e.process(r);
                          },
                          peeker: r
                        })
                      ]);
              }
              return (
                Object.defineProperty(e.prototype, "length", {
                  get: function() {
                    return this._queues.reduce(function(e, t) {
                      return e + t.length;
                    }, 0);
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(e.prototype, "onGoingCount", {
                  get: function() {
                    return this._keysToRequests.size;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (e.prototype.clear = function() {
                  for (var e = 0, t = this._queues; e < t.length; e++)
                    t[e].clear();
                  this._keysToRequests.clear();
                }),
                (e.prototype.find = function(e, t) {
                  for (
                    var i = this, r = 0, n = this._queues;
                    r < n.length;
                    r++
                  ) {
                    var s = n[r].find(function(t) {
                      return e(i._keysToRequests.get(t).key);
                    });
                    if (s) return s;
                  }
                }),
                (e.prototype.get = function(e) {
                  for (
                    var t = "string" == typeof e ? e : e.id,
                      i = 0,
                      r = this._queues;
                    i < r.length;
                    i++
                  ) {
                    var n = r[i].get(t);
                    if (n) return n;
                  }
                }),
                (e.prototype.getRequest = function(e) {
                  var t = "string" == typeof e ? e : e.id;
                  return this._keysToRequests.get(t);
                }),
                (e.prototype.has = function(e) {
                  return "string" == typeof e
                    ? this._keysToRequests.has(e)
                    : this._keysToRequests.has(e.id);
                }),
                (e.prototype.isOngoing = function(e) {
                  var t = "string" == typeof e ? e : e.id;
                  return (
                    this.has(t) &&
                    this._queues.some(function(e) {
                      return e.isOngoing(t);
                    })
                  );
                }),
                (e.prototype.pause = function() {
                  for (var e = 0, t = this._queues; e < t.length; e++)
                    t[e].pause();
                }),
                (e.prototype.push = function(e) {
                  var t = this,
                    i = e.key.id;
                  if (this.has(i)) return this.get(i);
                  var r = this._queues[e.key.row % this._queues.length].push(i),
                    n = function() {
                      return t._keysToRequests.delete(i);
                    };
                  return this._keysToRequests.set(i, e), r.then(n, n), r;
                }),
                (e.prototype.reset = function() {
                  for (var e = 0, t = this._queues; e < t.length; e++)
                    t[e].reset();
                }),
                (e.prototype.resume = function() {
                  for (var e = 0, t = this._queues; e < t.length; e++)
                    t[e].resume();
                }),
                (e.prototype._peekByScaleFirst = function(e) {
                  if (!this.state) return e[0];
                  for (
                    var t = this.tileInfoView,
                      i = Number.NEGATIVE_INFINITY,
                      r = Number.POSITIVE_INFINITY,
                      a = 0,
                      l = e;
                    a < l.length;
                    a++
                  ) {
                    var u = l[a],
                      c = this._keysToRequests.get(u),
                      h = this.tileInfoView.getTileScale(c.key);
                    o.has(h) ||
                      (o.set(h, []),
                      (i = Math.max(h, i)),
                      (r = Math.min(h, r))),
                      o.get(h).push(c.key),
                      n.add(h);
                  }
                  var p = this.state.scale;
                  o.has(p) ||
                    ((function(e, t) {
                      (e.length = 0),
                        t.forEach(function(t) {
                          return e.push(t);
                        });
                    })(s, n),
                    s.sort(),
                    (p = s.reduce(function(e, t, i, r) {
                      return Math.abs(t - p) < Math.abs(e - p) ? t : e;
                    }, s[0]))),
                    (p = Math.min(p, i)),
                    (p = Math.max(p, r));
                  var _ = o.get(p),
                    d = t.getClosestInfoForScale(p),
                    f = d.getColumnForX(this.state.center[0]),
                    y = d.getRowForY(this.state.center[1]);
                  return (
                    _.sort(function(e, t) {
                      var i = d.denormalizeCol(e.col, e.world),
                        r = d.denormalizeCol(t.col, t.world);
                      return (
                        Math.sqrt(
                          (f - i) * (f - i) + (y - e.row) * (y - e.row)
                        ) -
                        Math.sqrt((f - r) * (f - r) + (y - t.row) * (y - t.row))
                      );
                    }),
                    n.clear(),
                    o.clear(),
                    _[0].id
                  );
                }),
                (e.prototype._peekByCenterFirst = function(e) {
                  if (!this.state) return e[0];
                  for (
                    var t = this.tileInfoView,
                      i = this.state.center,
                      n = Number.POSITIVE_INFINITY,
                      s = null,
                      o = 0,
                      l = e;
                    o < l.length;
                    o++
                  ) {
                    var u = l[o],
                      c = this._keysToRequests.get(u);
                    t.getTileCoords(a, c.key);
                    var h = r.distance(a, i);
                    h < n && ((n = h), (s = c.key));
                  }
                  return s.id;
                }),
                e
              );
            })();
          }.apply(null, r)) || (e.exports = n);
    },
    2015: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t, i(34), i(2016), i(55)]),
        void 0 ===
          (n = function(e, t, i, r, n) {
            return (function() {
              function e(e) {
                (this._apiPromises = new Map()),
                  (this._processingItems = new Map()),
                  (this._isPaused = !1),
                  (this._scheduledNextHandle = null),
                  (this.concurrency = 1),
                  (this.ordered = !1),
                  e.concurrency && (this.concurrency = e.concurrency),
                  (this.ordered = !!e.ordered),
                  (this._queue = new r(
                    e.peeker ? { peeker: e.peeker } : void 0
                  )),
                  (this.process = e.process);
              }
              return (
                Object.defineProperty(e.prototype, "length", {
                  get: function() {
                    return this._processingItems.size + this._queue.length;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (e.prototype.clear = function() {
                  this._queue.clear();
                  var e = [];
                  this._processingItems.forEach(function(t) {
                    return e.push(t.resultPromise);
                  }),
                    this._processingItems.clear(),
                    e.forEach(function(e) {
                      return e.cancel();
                    }),
                    (e.length = 0),
                    this._apiPromises.forEach(function(t) {
                      return e.push(t);
                    }),
                    this._apiPromises.clear(),
                    e.forEach(function(e) {
                      return e.cancel();
                    }),
                    this._cancelNext();
                }),
                (e.prototype.find = function(e, t) {
                  var i = this,
                    r = void 0;
                  return (
                    this._apiPromises.forEach(function(n, s) {
                      e.call(t, s) && (r = i._apiPromises.get(s).promise);
                    }),
                    r
                  );
                }),
                (e.prototype.get = function(e) {
                  var t = this._apiPromises.get(e);
                  return (t && t.promise) || void 0;
                }),
                (e.prototype.isOngoing = function(e) {
                  return this._processingItems.has(e);
                }),
                (e.prototype.has = function(e) {
                  return this._apiPromises.has(e);
                }),
                (e.prototype.pause = function() {
                  this._isPaused || ((this._isPaused = !0), this._cancelNext());
                }),
                (e.prototype.push = function(e) {
                  var t = this;
                  if (this._apiPromises.has(e))
                    return this._apiPromises.get(e).promise;
                  var r = new i(function(i) {
                    var r = t._processingItems.get(e);
                    r
                      ? r.resultPromise.cancel(i)
                      : (t._remove(e), t._scheduleNext());
                  });
                  return this._add(e, r), this._scheduleNext(), r.promise;
                }),
                (e.prototype.reset = function() {
                  var e = [];
                  this._processingItems.forEach(function(t) {
                    return e.push(t);
                  }),
                    this._processingItems.clear();
                  for (var t = 0, i = e; t < i.length; t++) {
                    var r = i[t];
                    r.resultPromise.isFulfilled()
                      ? this._processReset(r)
                      : ((r.isReset = !0), r.resultPromise.cancel());
                  }
                }),
                (e.prototype.resume = function() {
                  this._isPaused &&
                    ((this._isPaused = !1), this._scheduleNext());
                }),
                (e.prototype._scheduleNext = function() {
                  var e = this;
                  this._isPaused ||
                    this._scheduledNextHandle ||
                    (this._scheduledNextHandle = n.schedule(function() {
                      (e._scheduledNextHandle = null), e._next();
                    }));
                }),
                (e.prototype._next = function() {
                  for (
                    ;
                    this._queue.length > 0 &&
                    this._processingItems.size < this.concurrency;

                  )
                    this._process(this._queue.pop());
                }),
                (e.prototype._processResult = function(e, t) {
                  this._remove(e.item), this._scheduleNext(), e.dfd.resolve(t);
                }),
                (e.prototype._processError = function(e, t) {
                  e.isReset
                    ? this._processReset(e)
                    : (this._remove(e.item),
                      this._scheduleNext(),
                      e.dfd.reject(t));
                }),
                (e.prototype._processReset = function(e) {
                  this._remove(e.item),
                    this._add(e.item, e.dfd),
                    this._scheduleNext();
                }),
                (e.prototype._processOrdered = function(e, t) {
                  var i = this,
                    r = !1;
                  if (e.isReset) this._processReset(e);
                  else {
                    (e.result = t),
                      this._itemsToProcess || (this._itemsToProcess = []),
                      this._processingItems.forEach(function(e) {
                        r || (e.result ? i._itemsToProcess.push(e) : (r = !0));
                      });
                    for (
                      var n = 0, s = this._itemsToProcess;
                      n < s.length;
                      n++
                    ) {
                      var o = s[n];
                      !1 === o.result.ok
                        ? this._processError(o, o.result.error)
                        : this._processResult(o, o.result.value);
                    }
                    this._itemsToProcess.length = 0;
                  }
                }),
                (e.prototype._process = function(e) {
                  var t = this;
                  if (null != e) {
                    var i = this._apiPromises.get(e),
                      r = this.process(e);
                    if (
                      (function(e) {
                        return e && "function" == typeof e.then;
                      })(r)
                    ) {
                      var n = {
                        item: e,
                        resultPromise: r,
                        result: null,
                        dfd: i,
                        isReset: !1
                      };
                      this._processingItems.set(e, n),
                        this.ordered
                          ? r.then(
                              function(e) {
                                return t._processOrdered(n, {
                                  ok: !0,
                                  value: e
                                });
                              },
                              function(e) {
                                return t._processOrdered(n, {
                                  ok: !1,
                                  error: e
                                });
                              }
                            )
                          : r.then(
                              function(e) {
                                return t._processResult(n, e);
                              },
                              function(e) {
                                return t._processError(n, e);
                              }
                            );
                    } else i.resolve(r), this._remove(e);
                  }
                }),
                (e.prototype._add = function(e, t) {
                  this._apiPromises.set(e, t), this._queue.push(e);
                }),
                (e.prototype._remove = function(e) {
                  this._queue.remove(e),
                    this._apiPromises.delete(e),
                    this._processingItems.delete(e);
                }),
                (e.prototype._cancelNext = function() {
                  this._scheduledNextHandle &&
                    (this._scheduledNextHandle.remove(),
                    (this._scheduledNextHandle = null));
                }),
                e
              );
            })();
          }.apply(null, r)) || (e.exports = n);
    },
    2016: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t]),
        void 0 ===
          (n = function(e, t) {
            return (function() {
              function e(e) {
                (this._items = []),
                  (this._itemSet = new Set()),
                  (this._peeker = function(e) {
                    return e[0];
                  }),
                  (this._length = 0),
                  e && e.peeker && (this._peeker = e.peeker);
              }
              return (
                Object.defineProperty(e.prototype, "length", {
                  get: function() {
                    return this._length;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (e.prototype.clear = function() {
                  this._itemSet.clear(),
                    (this._items.length = 0),
                    (this._length = 0);
                }),
                (e.prototype.peek = function() {
                  if (0 !== this._length) return this._peeker(this._items);
                }),
                (e.prototype.push = function(e) {
                  this.contains(e) || this._add(e);
                }),
                (e.prototype.contains = function(e) {
                  return this._length > 0 && this._itemSet.has(e);
                }),
                (e.prototype.pop = function() {
                  if (0 !== this._length) {
                    var e = this.peek();
                    return this._remove(e), e;
                  }
                }),
                (e.prototype.remove = function(e) {
                  this.contains(e) && this._remove(e);
                }),
                (e.prototype._add = function(e) {
                  this._items.push(e), this._itemSet.add(e), this._length++;
                }),
                (e.prototype._remove = function(e) {
                  this._itemSet.delete(e),
                    this._items.splice(this._items.indexOf(e), 1),
                    this._length--;
                }),
                e
              );
            })();
          }.apply(null, r)) || (e.exports = n);
    },
    2023: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t, i(5), i(772), i(259)]),
        void 0 ===
          (n = function(e, t, i, r, n) {
            function s(e, t) {
              e.delete(t);
            }
            var o = new n(0, 0, 0, 0),
              a = new Map(),
              l = [],
              u = [];
            return (function() {
              function e(e) {
                (this._previousResolution = Number.POSITIVE_INFINITY),
                  (this.cachePolicy = "keep"),
                  (this.tileIndex = new Map()),
                  (this.tiles = []),
                  (this.buffer = 192),
                  (this.acquireTile = e.acquireTile),
                  (this.releaseTile = e.releaseTile),
                  (this.tileInfoView = e.tileInfoView),
                  e.cachePolicy && (this.cachePolicy = e.cachePolicy),
                  null != e.buffer && (this.buffer = e.buffer);
              }
              return (
                (e.prototype.destroy = function() {
                  this.tileIndex.clear();
                }),
                (e.prototype.update = function(e) {
                  var t = this,
                    i = this.tileIndex,
                    n = this.tileInfoView.getTileCoverage(e.state, this.buffer);
                  if (n) {
                    var c = n.spans,
                      h = n.lodInfo,
                      p = h.level,
                      _ = e.state.resolution,
                      d = !e.stationary && _ > this._previousResolution;
                    (this._previousResolution = _),
                      i.forEach(function(e) {
                        return (e.visible = !0);
                      }),
                      (this.tiles.length = 0),
                      a.clear();
                    var f = 0,
                      y = 0;
                    if (c.length > 0)
                      for (var T = 0, v = c; T < v.length; T++)
                        for (
                          var E = v[T],
                            I = E.row,
                            g = E.colFrom,
                            m = E.colTo,
                            C = g;
                          C <= m;
                          C++
                        ) {
                          f++;
                          var S = o.set(
                            p,
                            I,
                            h.normalizeCol(C),
                            h.getWorldForColumn(C)
                          ).id;
                          if (i.has(S)) {
                            if (
                              ((R = i.get(S)).status !==
                                r.TileStatus.INITIALIZED && y++,
                              R.attached)
                            ) {
                              a.set(S, R);
                              continue;
                            }
                            R.attached || d || this._addParentTile(S, a);
                          } else {
                            var R = this.acquireTile(o);
                            this.tileIndex.set(S, R),
                              d || this._addParentTile(S, a);
                          }
                        }
                    var L = y === f;
                    (u.length = 0),
                      (l.length = 0),
                      i.forEach(function(e, i) {
                        if ((o.set(i), !a.has(i))) {
                          var s = t.tileInfoView.intersects(n, o);
                          !s || (!d && L)
                            ? "purge" === t.cachePolicy &&
                              e.status !== r.TileStatus.MODIFIED &&
                              e.status !== r.TileStatus.READY
                              ? l.push(i)
                              : (o.level > p || !s) && l.push(i)
                            : e.attached
                              ? u.push(i)
                              : o.level > p && l.push(i);
                        }
                      });
                    for (var V = 0, w = u; V < w.length; V++) {
                      S = w[V];
                      (R = i.get(S)) && R.attached && a.set(S, R);
                    }
                    for (var O = 0, P = l; O < P.length; O++) {
                      (S = P[O]), (R = i.get(S));
                      this.releaseTile(R), s(i, S);
                    }
                    a.forEach(function(e) {
                      return t.tiles.push(e);
                    }),
                      i.forEach(function(e) {
                        a.has(e.key.id) || (e.visible = !1);
                      }),
                      (u.length = 0),
                      (l.length = 0),
                      a.clear();
                  }
                }),
                (e.prototype.clear = function() {
                  var e = this,
                    t = this.tileIndex;
                  t.forEach(function(t) {
                    e.releaseTile(t);
                  }),
                    t.clear();
                }),
                (e.prototype._addParentTile = function(e, t) {
                  for (
                    var i = e, r = null;
                    (i = this.tileInfoView.getTileParentId(i));

                  )
                    if (
                      this.tileIndex.has(i) &&
                      (r = this.tileIndex.get(i)) &&
                      r.attached
                    ) {
                      t.has(r.key.id) || t.set(r.key.id, r);
                      break;
                    }
                }),
                e
              );
            })();
          }.apply(null, r)) || (e.exports = n);
    },
    2024: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t, i(2028)]),
        void 0 ===
          (n = function(e, t, i) {
            function r(e, t) {
              return (
                Array.isArray(t)
                  ? ((e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), (e[3] = t[3]))
                  : ((e[0] = t.r), (e[1] = t.g), (e[2] = t.b), (e[3] = t.a)),
                e
              );
            }
            function n(e, t, i) {
              void 0 === t && (t = 0), void 0 === i && (i = !1);
              var r = e[t + 3];
              return (
                (e[t + 0] *= r),
                (e[t + 1] *= r),
                (e[t + 2] *= r),
                i || (e[t + 3] *= 255),
                e
              );
            }
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.white = [255, 255, 255, 1]);
            var s = [0, 0, 0, 0];
            (t.premultiplyAlpha = n),
              (t.copyAndPremultiply = function(e) {
                return n(r([], e));
              }),
              (t.premultiplyAlphaUint32 = function(e) {
                return n(r(s, e)), i.i8888to32(s[0], s[1], s[2], s[3]);
              }),
              (t.premultiplyAlphaRGBA = function(e) {
                var t = e.r,
                  r = e.g,
                  n = e.b,
                  s = e.a,
                  o = t * s,
                  a = r * s,
                  l = n * s,
                  u = 255 * s;
                return i.i8888to32(o, a, l, u);
              });
          }.apply(null, r)) || (e.exports = n);
    },
    2028: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t]),
        void 0 ===
          (n = function(e, t) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = new Float32Array(1),
              r = new Uint32Array(i.buffer);
            (t.nextHighestPowerOfTwo = function(e) {
              var t = e;
              return (
                t--,
                (t |= t >> 1),
                (t |= t >> 2),
                (t |= t >> 4),
                (t |= t >> 8),
                (t |= t >> 16),
                ++t
              );
            }),
              (t.toUint32 = function(e) {
                return (i[0] = e), r[0];
              }),
              (t.i1616to32 = function(e, t) {
                return (65535 & e) | (t << 16);
              }),
              (t.i8888to32 = function(e, t, i, r) {
                return (
                  (255 & e) | ((255 & t) << 8) | ((255 & i) << 16) | (r << 24)
                );
              }),
              (t.i8816to32 = function(e, t, i) {
                return (255 & e) | ((255 & t) << 8) | (i << 16);
              }),
              (t.numTo32 = function(e) {
                return 0 | e;
              });
          }.apply(null, r)) || (e.exports = n);
    },
    2062: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t, i(59)]),
        void 0 ===
          (n = function(e, t, i) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var r = (function() {
              function e() {
                (this.color = [0, 0, 0, 0]),
                  (this.haloColor = [0, 0, 0, 0]),
                  (this.haloSize = 0),
                  (this.size = 12),
                  (this.angle = 0),
                  (this.offsetX = 0),
                  (this.offsetY = 0),
                  (this.hAnchor = 0),
                  (this.vAnchor = 0);
              }
              return (
                (e.prototype.acquire = function(e, t, i, r, n, s, o, a, l) {
                  (this.color = e),
                    (this.haloColor = t),
                    (this.haloSize = i),
                    (this.size = r),
                    (this.angle = n),
                    (this.offsetX = s),
                    (this.offsetY = o),
                    (this.hAnchor = a),
                    (this.vAnchor = l);
                }),
                (e.prototype.release = function() {
                  (this.color[0] = this.color[1] = this.color[2] = this.color[3] = 0),
                    (this.haloColor[0] = this.haloColor[1] = this.haloColor[2] = this.haloColor[3] = 0),
                    (this.haloSize = 0),
                    (this.size = 0),
                    (this.angle = 0),
                    (this.offsetX = 0),
                    (this.offsetY = 0),
                    (this.hAnchor = 0),
                    (this.vAnchor = 0);
                }),
                (e.pool = new i(e)),
                e
              );
            })();
            t.TextProperties = r;
          }.apply(null, r)) || (e.exports = n);
    },
    2221: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t, i(5), i(0), i(773), i(259)]),
        void 0 ===
          (n = function(e, t, i, r, n, s) {
            return (function(e) {
              function t() {
                return (null !== e && e.apply(this, arguments)) || this;
              }
              return (
                i(t, e),
                (t.prototype.getTileParentId = function(e) {
                  var t = s.pool.acquire(e),
                    i =
                      0 === t.level
                        ? null
                        : s.getId(t.level - 1, t.row >> 1, t.col >> 1, t.world);
                  return s.pool.release(t), i;
                }),
                (t.prototype.getTileIdAtParent = function(e, t) {
                  var i = s.pool.acquire(t),
                    r = this._infoByLevel[i.level];
                  if (e.resolution < r.resolution)
                    throw (s.pool.release(i),
                    new Error(
                      "Cannot calculate parent tile. destination LOD's resolution " +
                        e.resolution +
                        " is not a parent resolution of " +
                        r.resolution
                    ));
                  if (e.resolution === r.resolution) {
                    var n = i.id;
                    return s.pool.release(i), n;
                  }
                  var o = i.level - e.level;
                  if (o < 0)
                    throw (s.pool.release(i), new Error("Wrong way...!"));
                  var a = s.getId(e.level, i.row >> o, i.col >> o, i.world);
                  return s.pool.release(i), a;
                }),
                (t.prototype.getTileCoverage = function(t) {
                  var i = e.prototype.getTileCoverage.call(this, t);
                  if (!i) return i;
                  var r = 1 << i.lodInfo.level;
                  return (
                    (i.spans = i.spans.filter(function(e) {
                      return e.row >= 0 && e.row < r;
                    })),
                    i
                  );
                }),
                t
              );
            })(n);
          }.apply(null, r)) || (e.exports = n);
    },
    2227: function(e, t, i) {
      var r, n;
      (r = [
        i.dj.c(e.i),
        t,
        i(5),
        i(15),
        i(9),
        i(417),
        i(776),
        i(309),
        i(2007),
        i(2101),
        i(415),
        i(2137)
      ]),
        void 0 ===
          (n = function(e, t, i, r, n, s, o, a, l, u, c, h) {
            return (function(e) {
              function t() {
                var t = e.call(this) || this;
                return (
                  (t.isInitialized = !1),
                  (t._displayWidth = 0),
                  (t._displayHeight = 0),
                  (t._pointToCallbacks = new Map()),
                  (t._tileCoordinateScale = o.create()),
                  (t._orientationVec = o.create()),
                  (t._displayScale = o.create()),
                  t._orientationVec.set([0, 0, 1]),
                  (t._defaultTransform = s.create()),
                  t
                );
              }
              return (
                i(t, e),
                (t.prototype.initialize = function(e, t, i, r) {
                  (this._renderer = new h()),
                    this._renderer.initialize(e, t),
                    (this._tileInfoView = r),
                    (this._tileInfo = i),
                    (this.isInitialized = !0);
                }),
                (t.prototype.destroy = function() {
                  this._renderer &&
                    (this._renderer.dispose(), (this._renderer = null));
                }),
                (t.prototype.hittest = function(e, t) {
                  var i = this,
                    r = [e, t];
                  return n.create(
                    function(e, t) {
                      i._pointToCallbacks.set(r, { resolve: e, reject: t }),
                        i.requestRender();
                    },
                    function() {
                      i._pointToCallbacks.has(r) &&
                        i._pointToCallbacks.delete(r);
                    }
                  );
                }),
                (t.prototype.prepareChildrenRenderParameters = function(e) {
                  var t = e.state;
                  if (!t || !this._tileInfo || !this.isInitialized) return e;
                  var i = e;
                  return (
                    (i.displayLevel = this._tileInfo.scaleToZoom(t.scale)),
                    (i.requiredLevel = this._tileInfoView.getClosestInfoForScale(
                      t.scale
                    ).level),
                    (i.renderer = this._renderer),
                    i
                  );
                }),
                (t.prototype.renderChildren = function(t) {
                  var i = this;
                  if (
                    0 !== this.children.length &&
                    this.isInitialized &&
                    t &&
                    t.state
                  ) {
                    var n = u.default.toWGLDrawPhases(t.drawPhase);
                    if (!(n.length > 0 && n[0] === l.WGLDrawPhase.LABEL)) {
                      this.sortChildren(function(e, t) {
                        return e.key.level - t.key.level;
                      });
                      for (var s = this.children.length, o = 1; o <= s; o++) {
                        var a = this.children[o - 1];
                        a.attached &&
                          ((a.stencilData.reference = o),
                          (a.stencilData.mask = 255));
                      }
                      this._updateTilesTransform(
                        t.state,
                        this._tileInfoView.getClosestInfoForScale(t.state.scale)
                          .level,
                        this.children
                      );
                      var c = t.context;
                      if (
                        (c.setDepthWriteEnabled(!0),
                        this._renderer.setStateParams(
                          t.state,
                          t.pixelRatio,
                          t.displayLevel
                        ),
                        this._renderer.drawClippingMasks(c, this.children),
                        c.setStencilWriteMask(0),
                        c.setBlendFunctionSeparate(1, 771, 1, 771),
                        c.setStencilOp(7680, 7680, 7681),
                        c.setDepthFunction(515),
                        c.setBlendingEnabled(!1),
                        c.setStencilTestEnabled(!0),
                        c.setDepthTestEnabled(!0),
                        c.setDepthWriteEnabled(!0),
                        (t.drawphase = 0),
                        e.prototype.renderChildren.call(this, t),
                        c.setDepthWriteEnabled(!1),
                        c.setBlendingEnabled(!0),
                        (t.drawphase = 1),
                        e.prototype.renderChildren.call(this, t),
                        (t.drawphase = 2),
                        e.prototype.renderChildren.call(this, t),
                        c.setStencilTestEnabled(!1),
                        c.setDepthTestEnabled(!1),
                        r("esri-vector-tiles-debug"))
                      )
                        for (var h = 0, p = this.children; h < p.length; h++) {
                          var _ = p[h];
                          _.attached &&
                            _.visible &&
                            this._renderer.renderTileInfo(c, _);
                        }
                      this._pointToCallbacks.size > 0 &&
                        (this._pointToCallbacks.forEach(function(e, r) {
                          e.resolve(i._hitTest(t, r[0], r[1]));
                        }),
                        this._pointToCallbacks.clear()),
                        this._renderer.needsRedraw() && this.requestRender();
                    }
                  }
                }),
                (t.prototype.removeAllChildren = function() {
                  for (var t = 0; t < this.children.length; t++)
                    this.children[t].dispose();
                  e.prototype.removeAllChildren.call(this);
                }),
                (t.prototype._hitTest = function(e, t, i) {
                  var r = this._tileInfoView.getClosestInfoForScale(
                      e.state.scale
                    ).level,
                    n = [0, 0];
                  e.state.toMap(n, [t, i]);
                  var s = e.state.clone(),
                    o = s.viewpoint.clone(),
                    a = o.targetGeometry;
                  (a.x = n[0]),
                    (a.y = n[1]),
                    (o.targetGeometry = a),
                    (s.viewpoint = o),
                    (s.size = [3, 3]),
                    this._renderer.setStateParams(
                      s,
                      e.pixelRatio,
                      e.displayLevel
                    );
                  var l = {
                      drawPhase: 0,
                      pixelRatio: e.pixelRatio,
                      stationary: e.stationary,
                      opacity: e.opacity,
                      context: e.context,
                      displayLevel: e.displayLevel,
                      requiredLevel: e.requiredLevel,
                      renderer: e.renderer,
                      layerOpacity: e.layerOpacity,
                      state: s,
                      drawphase: 3,
                      painter: null
                    },
                    u = this._renderer.hitTest(
                      l,
                      t,
                      i,
                      this.children,
                      r,
                      3,
                      this._updateTilesTransform.bind(this)
                    );
                  return u && 0 !== u.length ? u[0] : null;
                }),
                (t.prototype._updateTilesTransform = function(e, t, i) {
                  var r = 1 / e.width,
                    n = 1 / e.height,
                    s = [0, 0];
                  this._calculateRelativeViewProjMat(
                    this._tileInfo.lodAt(t).resolution,
                    e.resolution,
                    e.rotation,
                    this._tileInfo.size[1],
                    4096,
                    e.width,
                    e.height,
                    this._defaultTransform
                  );
                  for (var o = 0, a = i; o < a.length; o++) {
                    var l = a[o];
                    e.toScreen(s, l.coords),
                      (s[1] = e.height - s[1]),
                      (l.tileTransform.displayCoord[0] = 2 * s[0] * r - 1),
                      (l.tileTransform.displayCoord[1] = 2 * s[1] * n - 1),
                      l.key.level === t && 4096 === l.coordRange
                        ? l.tileTransform.transform.set(this._defaultTransform)
                        : this._calculateRelativeViewProjMat(
                            this._tileInfo.lodAt(l.key.level).resolution,
                            e.resolution,
                            e.rotation,
                            this._tileInfo.size[1],
                            l.coordRange,
                            e.width,
                            e.height,
                            l.tileTransform.transform
                          );
                  }
                }),
                (t.prototype._calculateRelativeViewProjMat = function(
                  e,
                  t,
                  i,
                  r,
                  n,
                  o,
                  a,
                  l
                ) {
                  var u = 0.125;
                  512 !== r && 4096 !== n && (u = r / n);
                  var h = u * (e / t);
                  this._tileCoordinateScale.set([h, h, 1]),
                    (o === this._displayWidth && a === this._displayHeight) ||
                      (this._displayScale.set([2 / o, -2 / a, 1]),
                      (this._displayWidth = o),
                      (this._displayHeight = a)),
                    s.identity(l),
                    s.scale(l, l, this._tileCoordinateScale),
                    s.rotate(l, l, -i * c.C_DEG_TO_RAD, this._orientationVec),
                    s.scale(l, l, this._displayScale),
                    s.transpose(l, l);
                }),
                t
              );
            })(a);
          }.apply(null, r)) || (e.exports = n);
    }
  }
]),
  (function() {
    (this || window).webpackJsonp.registerAbsMids({
      "esri/views/2d/layers/VectorTileLayerView2D": 1996,
      "esri/views/2d/engine/webgl/enums": 2007,
      "esri/views/2d/layers/LayerView2D": 2009,
      "esri/views/2d/engine/webgl/Utils": 2010,
      "esri/views/2d/tiling/TileQueue": 2014,
      "esri/core/QueueProcessor": 2015,
      "esri/core/Queue": 2016,
      "esri/views/2d/tiling/TileStrategy": 2023,
      "esri/views/2d/engine/webgl/color": 2024,
      "esri/views/2d/engine/webgl/number": 2028,
      "esri/views/2d/engine/webgl/SymbolProperties": 2062,
      "esri/views/2d/tiling/TileInfoViewPOT": 2221,
      "esri/views/vectorTiles/VectorTileContainer": 2227
    });
  })();
