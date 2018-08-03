(window.webpackJsonp = window.webpackJsonp || []).push([
  [16],
  {
    1967: function(e, t, r) {
      var i, n;
      (i = [
        r.dj.c(e.i),
        t,
        r(2),
        r(0),
        r(65),
        r(15),
        r(43),
        r(24),
        r(10),
        r(17),
        r(9),
        r(1),
        r(794),
        r(2094),
        r(779),
        r(2061),
        r(2009),
        r(2063),
        r(2008)
      ]),
        void 0 ===
          (n = function(
            e,
            t,
            i,
            n,
            o,
            a,
            s,
            u,
            l,
            p,
            c,
            d,
            y,
            f,
            h,
            _,
            v,
            E,
            g
          ) {
            function V(e) {
              return e && null != e._proxy;
            }
            function m(e) {
              return e && null != e.update;
            }
            return (function(e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t._handles = new p()), (t.container = new h()), t;
              }
              return (
                i(t, e),
                Object.defineProperty(t.prototype, "labelsVisible", {
                  get: function() {
                    return (
                      !this.suspended &&
                      this.layer.labelingInfo &&
                      this.layer.labelsVisible
                    );
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (t.prototype.highlight = function(e, t) {
                  var r,
                    i = this,
                    n = this.featuresView;
                  return (
                    e instanceof s
                      ? (r = [e.getAttribute(this.layer.objectIdField)])
                      : "number" == typeof e
                        ? (r = [e])
                        : u.isCollection(e)
                          ? (r = e
                              .map(function(e) {
                                return e.getAttribute(i.layer.objectIdField);
                              })
                              .toArray())
                          : Array.isArray(e) &&
                            e.length > 0 &&
                            (r =
                              "number" == typeof e[0]
                                ? e
                                : e.map(function(e) {
                                    return e.getAttribute(
                                      i.layer.objectIdField
                                    );
                                  })),
                    r &&
                    r.length &&
                    (function(e) {
                      return e && null != e.highlight;
                    })(n)
                      ? n.highlight(r)
                      : { remove: function() {} }
                  );
                }),
                (t.prototype.queryGraphics = function() {
                  return this._queryEngine
                    ? this._queryEngine.queryFeatures()
                    : this._rejectQuery();
                }),
                (t.prototype.queryFeatures = function(e) {
                  return V(this.featuresView)
                    ? this.featuresView.queryFeatures(e)
                    : this._queryEngine
                      ? this._queryEngine.queryFeatures(e)
                      : this._rejectQuery();
                }),
                (t.prototype.queryFeaturesJSON = function(e) {
                  return V(this.featuresView)
                    ? this.featuresView.queryFeaturesJSON(e)
                    : this._queryEngine
                      ? this._queryEngine.queryFeatures(e).then(function(e) {
                          return e.toJSON();
                        })
                      : this._rejectQuery();
                }),
                (t.prototype.queryObjectIds = function(e) {
                  return V(this.featuresView)
                    ? this.featuresView.queryObjectIds(e)
                    : this._queryEngine
                      ? this._queryEngine.queryObjectIds(e)
                      : this._rejectQuery();
                }),
                (t.prototype.queryFeatureCount = function(e) {
                  return V(this.featuresView)
                    ? this.featuresView.queryFeatureCount(e)
                    : this._queryEngine
                      ? this._queryEngine.queryFeatureCount(e)
                      : this._rejectQuery();
                }),
                (t.prototype.queryExtent = function(e) {
                  return V(this.featuresView)
                    ? this.featuresView.queryExtent(e)
                    : this._queryEngine
                      ? this._queryEngine.queryExtent(e)
                      : this._rejectQuery();
                }),
                (t.prototype.hitTest = function(e, t) {
                  return this.suspended || !this.featuresView
                    ? c.resolve()
                    : this.featuresView.hitTest(e, t);
                }),
                (t.prototype.update = function(e) {
                  m(this.controller)
                    ? this.controller.update(e)
                    : m(this.featuresView) && this.featuresView.update(e);
                }),
                (t.prototype.attach = function() {
                  var e = this;
                  this._canUseWebGL()
                    ? c
                        .create(function(e) {
                          return r
                            .e(51)
                            .then(
                              function() {
                                var t = [r(2296)];
                                e.apply(null, t);
                              }.bind(this)
                            )
                            .catch(r.oe);
                        })
                        .then(function(t) {
                          if (e.attached)
                            return new t({
                              layer: e.layer,
                              view: e.view
                            }).when();
                        })
                        .then(function(t) {
                          (e.featuresView = t),
                            e.container.addChild(t.container),
                            (t.attached = !0),
                            t.attach();
                        })
                    : this.layer
                        .createGraphicsController({ layerView: this })
                        .then(function(t) {
                          if (e.attached) {
                            e._set("controller", t), e.requestUpdate();
                            var r = new E();
                            (r.mapView = e.view),
                              (r.graphics = t.graphics),
                              (r.layer = e.layer),
                              (r.renderer = e.layer.renderer),
                              e._handles.add(
                                e.layer.watch("renderer", function() {
                                  r.renderer = e.layer.renderer;
                                })
                              ),
                              e._handles.add(
                                e.layer.on("graphic-update", function(e) {
                                  return r.graphicUpdateHandler(e);
                                })
                              ),
                              (e.featuresView = r),
                              (e._queryEngine = new y({
                                layer: e.layer,
                                dataSpatialReference: e.view.spatialReference,
                                objectIdField: e.layer.objectIdField
                              })),
                              (e._queryEngine.features = t.graphics),
                              (e._queryEngine.objectIdField =
                                e.layer.objectIdField),
                              e.container.addChild(r.container);
                          }
                        });
                }),
                (t.prototype.detach = function() {
                  this.container.removeAllChildren(),
                    this._handles.removeAll(),
                    this.featuresView &&
                      (this.featuresView.destroy(), (this.featuresView = null)),
                    this.controller &&
                      (this.controller.destroy && this.controller.destroy(),
                      this._set("controller", null));
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
                (t.prototype.takeScreenshot = function(e, t) {
                  return V(this.featuresView) &&
                    this.featuresView.tileRenderer.featuresView
                    ? this.featuresView.tileRenderer.featuresView._stage.takeScreenshot(
                        e
                      )
                    : c.reject(
                        new l(
                          "featurelayerview:screenshot-unavailable",
                          "takeScreenshot() is not available"
                        )
                      );
                }),
                (t.prototype.doRefresh = function() {
                  this.updateRequested ||
                    this.suspended ||
                    (this.controller &&
                      f.isRefreshable(this.controller.activeController) &&
                      this.controller.activeController.refresh());
                }),
                (t.prototype.isUpdating = function() {
                  return (
                    null == this.featuresView ||
                    !0 === this.get("controller.updating") ||
                    !0 === this.featuresView.updateRequested ||
                    (m(this.featuresView) && this.featuresView.updating)
                  );
                }),
                (t.prototype._canUseWebGL = function() {
                  var e = this;
                  return (
                    a("esri-featurelayer-webgl") &&
                    a("esri-webgl") &&
                    _.isRendererWebGLCompatible(this.layer.renderer) &&
                    ((e.layer.capabilities.query.supportsQuantization &&
                      ("polygon" !== e.layer.geometryType ||
                        e.layer.capabilities.query.supportsCentroid)) ||
                      (e.layer.source &&
                        "esri.layers.graphics.sources.CSVSource" ===
                          e.layer.source.declaredClass))
                  );
                }),
                (t.prototype._rejectQuery = function() {
                  return c.reject(
                    new l("FeatureLayerView2D", "Not ready to execute query")
                  );
                }),
                n(
                  [d.property({ readOnly: !0 })],
                  t.prototype,
                  "controller",
                  void 0
                ),
                n([d.property()], t.prototype, "featuresView", void 0),
                n(
                  [
                    d.property({
                      dependsOn: [
                        "suspended",
                        "layer.labelingInfo",
                        "layer.labelsVisible"
                      ]
                    })
                  ],
                  t.prototype,
                  "labelsVisible",
                  null
                ),
                n(
                  [
                    d.property({
                      dependsOn: [
                        "controller.updating",
                        "featuresView",
                        "featuresView.updating"
                      ]
                    })
                  ],
                  t.prototype,
                  "updating",
                  void 0
                ),
                n([d.subclass("esri.views.2d.layers.FeatureLayerView2D")], t)
              );
            })(d.declared(v, g));
          }.apply(null, i)) || (e.exports = n);
    },
    2006: function(e, t, r) {
      var i, n;
      (i = [
        r.dj.c(e.i),
        t,
        r(2),
        r(0),
        r(3),
        r(53),
        r(17),
        r(308),
        r(11),
        r(180),
        r(9),
        r(1)
      ]),
        void 0 ===
          (n = function(e, t, r, i, n, o, a, s, u, l, p, c) {
            return (function(e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                  (t.handles = new a()),
                  (t.layer = null),
                  (t.parent = null),
                  (t.view = null),
                  t
                );
              }
              return (
                r(t, e),
                (t.prototype.initialize = function() {
                  var e = this;
                  this.addResolvingPromise(this.layer),
                    this.when().catch(function(t) {
                      if ("layerview:create-error" !== t.name) {
                        var r = (e.layer && e.layer.id) || "no id",
                          i = (e.layer && e.layer.title) || "no title";
                        return (
                          u
                            .getLogger(e.declaredClass)
                            .error(
                              "#resolve()",
                              "Failed to resolve layer view (layer title: '" +
                                i +
                                "', id: '" +
                                r +
                                "')",
                              t
                            ),
                          p.reject(t)
                        );
                      }
                    });
                }),
                (t.prototype.destroy = function() {
                  this.layer = this.view = this.parent = null;
                }),
                Object.defineProperty(t.prototype, "suspended", {
                  get: function() {
                    return !this.canResume();
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(t.prototype, "updating", {
                  get: function() {
                    return !this.suspended && this.isUpdating();
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(t.prototype, "visible", {
                  get: function() {
                    return !0 === this.get("layer.visible");
                  },
                  set: function(e) {
                    void 0 !== e
                      ? this._override("visible", e)
                      : this._clearOverride("visible");
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(t.prototype, "fullOpacity", {
                  get: function() {
                    var e = function(e) {
                      return null != e ? e : 1;
                    };
                    return (
                      e(this.get("layer.opacity")) *
                      e(this.get("parent.fullOpacity"))
                    );
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (t.prototype.canResume = function() {
                  return (
                    (!this.get("parent.suspended") &&
                      this.get("view.ready") &&
                      this.get("layer.loaded") &&
                      this.visible) ||
                    !1
                  );
                }),
                (t.prototype.isUpdating = function() {
                  return !1;
                }),
                i([c.property()], t.prototype, "layer", void 0),
                i([c.property()], t.prototype, "parent", void 0),
                i(
                  [
                    c.property({
                      readOnly: !0,
                      dependsOn: [
                        "view",
                        "visible",
                        "layer.loaded",
                        "parent.suspended"
                      ]
                    })
                  ],
                  t.prototype,
                  "suspended",
                  null
                ),
                i(
                  [
                    c.property({
                      type: Boolean,
                      dependsOn: ["suspended"],
                      readOnly: !0
                    })
                  ],
                  t.prototype,
                  "updating",
                  null
                ),
                i([c.property()], t.prototype, "view", void 0),
                i(
                  [c.property({ dependsOn: ["layer.visible"] })],
                  t.prototype,
                  "visible",
                  null
                ),
                i(
                  [
                    c.property({
                      dependsOn: ["layer.opacity", "parent.fullOpacity"]
                    })
                  ],
                  t.prototype,
                  "fullOpacity",
                  null
                ),
                i([c.subclass("esri.views.layers.LayerView")], t)
              );
            })(c.declared(n, o, s, l));
          }.apply(null, i)) || (e.exports = n);
    },
    2007: function(e, t, r) {
      var i, n;
      (i = [r.dj.c(e.i), t]),
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
          }.apply(null, i)) || (e.exports = n);
    },
    2008: function(e, t, r) {
      var i, n;
      (i = [r.dj.c(e.i), t, r(2), r(0), r(3), r(1)]),
        void 0 ===
          (n = function(e, t, r, i, n, o) {
            return (function(e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t.refreshTimestamp = null), t;
              }
              return (
                r(t, e),
                (t.prototype.refresh = function(e) {
                  void 0 === e && (e = Date.now()),
                    this._set("refreshTimestamp", e),
                    this.doRefresh && this.doRefresh();
                }),
                i([o.property()], t.prototype, "layer", void 0),
                i(
                  [o.aliasOf("layer.refreshInterval")],
                  t.prototype,
                  "refreshInterval",
                  void 0
                ),
                i(
                  [o.property({ readOnly: !0 })],
                  t.prototype,
                  "refreshTimestamp",
                  void 0
                ),
                i([o.subclass("esri.layers.mixins.RefreshableLayerView")], t)
              );
            })(o.declared(n));
          }.apply(null, i)) || (e.exports = n);
    },
    2009: function(e, t, r) {
      var i, n;
      (i = [r.dj.c(e.i), t, r(5), r(0), r(26), r(1), r(2006)]),
        void 0 ===
          (n = function(e, t, r, i, n, o, a) {
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
                r(t, e),
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
                    var r = this.view.scale,
                      i = t.minScale,
                      n = t.maxScale,
                      o = !i,
                      a = !n;
                    !o && r <= i && (o = !0),
                      !a && r >= n && (a = !0),
                      (e = o && a);
                  }
                  return e;
                }),
                i([o.property()], t.prototype, "attached", void 0),
                i([o.property()], t.prototype, "container", void 0),
                i([o.property()], t.prototype, "moving", void 0),
                i(
                  [o.property({ dependsOn: ["moving"] })],
                  t.prototype,
                  "rendering",
                  null
                ),
                i(
                  [
                    o.property({
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
                i(
                  [o.property({ readOnly: !0 })],
                  t.prototype,
                  "updateParameters",
                  void 0
                ),
                i([o.property()], t.prototype, "updateRequested", void 0),
                i(
                  [o.property({ dependsOn: ["updateRequested", "attached"] })],
                  t.prototype,
                  "updating",
                  null
                ),
                i([o.property()], t.prototype, "view", void 0),
                i([o.subclass("esri.views.2d.layers.LayerView2D")], t)
              );
            })(o.declared(a));
          }.apply(null, i)) || (e.exports = n);
    },
    2010: function(e, t, r) {
      var i, n;
      (i = [
        r.dj.c(e.i),
        t,
        r(222),
        r(184),
        r(10),
        r(11),
        r(39),
        r(136),
        r(2024),
        r(2007),
        r(2062)
      ]),
        void 0 ===
          (n = function(e, t, r, i, n, o, a, s, u, l, p) {
            function c(e) {
              for (var t = {}, r = 0, i = e; r < i.length; r++) {
                var n = i[r];
                t[n.name] = n.strideInBytes;
              }
              return t;
            }
            function d(e) {
              switch (e) {
                case l.WGLGeometryType.MARKER:
                  return I;
                case l.WGLGeometryType.FILL:
                  return S;
                case l.WGLGeometryType.LINE:
                  return b;
                case l.WGLGeometryType.TEXT:
                  return O;
                case l.WGLGeometryType.LABEL:
                  return L;
              }
              return null;
            }
            function y(e) {
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
            function f(e) {
              var t = y(e.type);
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
            function h(e) {
              var t = y(e.type);
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
            function _(e) {
              var t = y(e.type);
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
            function v(e) {
              var t = y(e.type);
              if (t) {
                switch (t) {
                  case "text":
                  case "CIMTextSymbol":
                    return !0;
                }
                return !1;
              }
            }
            function E(e, t) {
              return !1;
            }
            function g(e) {
              return (e && e.length) || 0;
            }
            function V(e) {
              return "string" == typeof e;
            }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var m,
              T = o.getLogger("esri.views.2d.engine.webgl.Utils");
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
              (t.C_ICON_STRIDE_SPEC = c(t.C_ICON_VERTEX_DEF)),
              (t.C_ICON_STRIDE_SPEC_VV = c(t.C_ICON_VERTEX_DEF_VV)),
              (t.C_ICON_STRIDE_SPEC_HEATMAP = c(t.C_ICON_HEATMAP)),
              (t.C_FILL_STRIDE_SPEC = c(t.C_FILL_VERTEX_DEF)),
              (t.C_FILL_STRIDE_SPEC_VV = c(t.C_FILL_VERTEX_DEF_VV)),
              (t.C_LINE_STRIDE_SPEC = c(t.C_LINE_VERTEX_DEF)),
              (t.C_LINE_STRIDE_SPEC_VV = c(t.C_LINE_VERTEX_DEF_VV)),
              (t.C_TEXT_STRIDE_SPEC = c(t.C_TEXT_VERTEX_DEF)),
              (t.C_TEXT_STRIDE_SPEC_VV = c(t.C_TEXT_VERTEX_DEF_VV)),
              (t.C_LABEL_STRIDE_SPEC = c(t.C_LABEL_VERTEX_DEF)),
              (t.getStrides = function(e, r, i) {
                switch ((void 0 === i && (i = !1), e)) {
                  case l.WGLGeometryType.MARKER:
                    return r
                      ? t.C_ICON_STRIDE_SPEC_VV
                      : i
                        ? t.C_ICON_STRIDE_SPEC_HEATMAP
                        : t.C_ICON_STRIDE_SPEC;
                  case l.WGLGeometryType.FILL:
                    return r ? t.C_FILL_STRIDE_SPEC_VV : t.C_FILL_STRIDE_SPEC;
                  case l.WGLGeometryType.LINE:
                    return r ? t.C_LINE_STRIDE_SPEC_VV : t.C_LINE_STRIDE_SPEC;
                  case l.WGLGeometryType.TEXT:
                    return r ? t.C_TEXT_STRIDE_SPEC_VV : t.C_TEXT_STRIDE_SPEC;
                  case l.WGLGeometryType.LABEL:
                    return t.C_LABEL_STRIDE_SPEC;
                }
                return null;
              });
            var I = [t.C_VBO_GEOMETRY],
              S = [t.C_VBO_GEOMETRY],
              b = [t.C_VBO_GEOMETRY],
              O = [t.C_VBO_GEOMETRY, t.C_VBO_VISIBILITY],
              L = [
                t.C_VBO_GEOMETRY,
                t.C_VBO_VISIBILITY,
                t.C_VBO_VISIBILITY_RANGE
              ];
            (t.getNamedBuffers = d),
              (t.getSymbolGeometryType = function(e) {
                return f(e)
                  ? l.WGLGeometryType.MARKER
                  : _(e)
                    ? l.WGLGeometryType.LINE
                    : h(e)
                      ? l.WGLGeometryType.FILL
                      : v(e)
                        ? l.WGLGeometryType.TEXT
                        : l.WGLGeometryType.UNKNOWN;
              }),
              (t.normalizeSymbolType = y),
              (t.isMarkerSymbol = f),
              (t.isFillSymbol = h),
              (t.isLineSymbol = _),
              (t.isPictureSymbol = function(e) {
                var t = y(e.type);
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
              (t.isTextSymbol = v),
              (t.getTextProperties = function(e) {
                return p.TextProperties.pool.acquire(
                  e.color
                    ? u.copyAndPremultiply(e.color)
                    : [255, 255, 255, 255],
                  e.haloColor
                    ? u.copyAndPremultiply(e.haloColor)
                    : [255, 255, 255, 255],
                  a.pt2px(e.haloSize),
                  a.pt2px(e.font.size),
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
              (t.isSameUniformValue = E),
              (t.isSameMaterialInfo = function(e, t) {
                if (e.materialKey !== t.materialKey) return !1;
                if (g(e.texBindingInfo) !== g(t.texBindingInfo)) return !1;
                if (g(e.materialParams) !== g(t.materialParams)) return !1;
                for (var r = e.texBindingInfo.length, i = 0; i < r; ++i) {
                  var n = e.texBindingInfo[i],
                    o = t.texBindingInfo[i];
                  if (
                    n.unit !== o.unit ||
                    n.pageId !== o.pageId ||
                    n.semantic !== o.semantic
                  )
                    return !1;
                }
                var a = e.materialParams.length;
                for (i = 0; i < a; ++i) {
                  var s = e.materialParams[i],
                    u = t.materialParams[i];
                  if (s.name !== u.name || (s.value, u.value, 1)) return !1;
                }
                return !0;
              }),
              (t.serializeString = function(e, t, r) {
                for (var i = 0, n = e.length, o = 0; o < n; ++o)
                  t && (t[r + i] = e.charCodeAt(o)), ++i;
                return t && (t[r + i] = 0), ++i;
              }),
              (t.deserializeString = function(e, t, r) {
                var i = 0;
                e.s = "";
                for (var n = !0; n; ) {
                  var o = t[r + i];
                  ++i, 0 !== o ? (e.s += String.fromCharCode(o)) : (n = !1);
                }
                return i;
              }),
              (t.isDefined = function(e) {
                return null !== e && void 0 !== e;
              }),
              (t.isNumber = function(e) {
                return "number" == typeof e;
              }),
              (t.isString = V),
              (t.isStringOrNull = function(e) {
                return null == e || V(e);
              }),
              (t.lerp = function(e, t, r) {
                return e + (t - e) * r;
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
            var C = (function() {
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
            (t.ValuesGetter = C),
              (t.getCapType = function(e) {
                switch (e) {
                  case "butt":
                    return l.CapType.BUTT;
                  case "round":
                    return l.CapType.ROUND;
                  case "square":
                    return l.CapType.SQUARE;
                  default:
                    return (
                      T.error(
                        new n(
                          "mapview-invalid-type",
                          "Cap type " +
                            e +
                            " is not a valid option. Defaulting to round"
                        )
                      ),
                      l.CapType.ROUND
                    );
                }
              }),
              (t.getJoinType = function(e) {
                switch (e) {
                  case "miter":
                    return l.JoinType.MITER;
                  case "bevel":
                    return l.JoinType.BEVEL;
                  case "round":
                    return l.JoinType.ROUND;
                  default:
                    return (
                      T.error(
                        new n(
                          "mapview-invalid-type",
                          "Join type " +
                            e +
                            " is not a valid option. Defaulting to round"
                        )
                      ),
                      l.JoinType.ROUND
                    );
                }
              }),
              (t.getVVType = function(e) {
                switch (e) {
                  case "opacity":
                    return l.VVType.OPACITY;
                  case "color":
                    return l.VVType.COLOR;
                  case "rotation":
                    return l.VVType.ROTATION;
                  case "size":
                    return l.VVType.SIZE;
                  default:
                    return T.error("Cannot interpret unknown vv: " + e), null;
                }
              }),
              (t.createArcadeFunction = function(e, t) {
                var n = e.valueExpression,
                  o = e.spatialReference,
                  a = e.layer,
                  u = s.createFunction(n),
                  l = new i();
                return function(e, i) {
                  l.repurposeFromGraphicLikeObject(e.geometry, e.attributes, a);
                  var n =
                      i &&
                      new r({ viewingMode: i.viewingMode, scale: i.scale }),
                    p = {
                      vars: { $feature: l, $view: n || {} },
                      spatialReference: o
                    },
                    c = s.executeFunction(u, p);
                  return t ? t(c) : c;
                };
              }),
              (t.copyMeshData = function(e, t, r, i, n, o, a) {
                for (var s in o)
                  for (
                    var u = o[s].stride,
                      l = o[s].data,
                      p = r[s].data,
                      c = (u * n.vertexCount) / 4,
                      d = (u * e) / 4,
                      y = (u * n.vertexFrom) / 4,
                      f = 0;
                    f < c;
                    ++f
                  )
                    p[f + d] = l[f + y];
                var h = n.indexCount;
                for (f = 0; f < h; ++f)
                  i[f + t] = a[f + n.indexFrom] - n.vertexFrom + e;
              }),
              (t.C_VBO_INFO = (((m = {})[t.C_VBO_GEOMETRY] = 35044),
              (m[t.C_VBO_VISIBILITY] = 35044),
              (m[t.C_VBO_VISIBILITY_RANGE] = 35048),
              m)),
              (t.createGeometryData = function(e, t) {
                for (var r = [], i = 0; i < 5; ++i) {
                  for (var n = {}, o = 0, a = d(i); o < a.length; o++) {
                    var s = a[o];
                    n[s] = { data: t(i, s) };
                  }
                  r.push({ data: e(i), buffers: n });
                }
                return r;
              });
          }.apply(null, i)) || (e.exports = n);
    },
    2024: function(e, t, r) {
      var i, n;
      (i = [r.dj.c(e.i), t, r(2028)]),
        void 0 ===
          (n = function(e, t, r) {
            function i(e, t) {
              return (
                Array.isArray(t)
                  ? ((e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), (e[3] = t[3]))
                  : ((e[0] = t.r), (e[1] = t.g), (e[2] = t.b), (e[3] = t.a)),
                e
              );
            }
            function n(e, t, r) {
              void 0 === t && (t = 0), void 0 === r && (r = !1);
              var i = e[t + 3];
              return (
                (e[t + 0] *= i),
                (e[t + 1] *= i),
                (e[t + 2] *= i),
                r || (e[t + 3] *= 255),
                e
              );
            }
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.white = [255, 255, 255, 1]);
            var o = [0, 0, 0, 0];
            (t.premultiplyAlpha = n),
              (t.copyAndPremultiply = function(e) {
                return n(i([], e));
              }),
              (t.premultiplyAlphaUint32 = function(e) {
                return n(i(o, e)), r.i8888to32(o[0], o[1], o[2], o[3]);
              }),
              (t.premultiplyAlphaRGBA = function(e) {
                var t = e.r,
                  i = e.g,
                  n = e.b,
                  o = e.a,
                  a = t * o,
                  s = i * o,
                  u = n * o,
                  l = 255 * o;
                return r.i8888to32(a, s, u, l);
              });
          }.apply(null, i)) || (e.exports = n);
    },
    2028: function(e, t, r) {
      var i, n;
      (i = [r.dj.c(e.i), t]),
        void 0 ===
          (n = function(e, t) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var r = new Float32Array(1),
              i = new Uint32Array(r.buffer);
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
                return (r[0] = e), i[0];
              }),
              (t.i1616to32 = function(e, t) {
                return (65535 & e) | (t << 16);
              }),
              (t.i8888to32 = function(e, t, r, i) {
                return (
                  (255 & e) | ((255 & t) << 8) | ((255 & r) << 16) | (i << 24)
                );
              }),
              (t.i8816to32 = function(e, t, r) {
                return (255 & e) | ((255 & t) << 8) | (r << 16);
              }),
              (t.numTo32 = function(e) {
                return 0 | e;
              });
          }.apply(null, i)) || (e.exports = n);
    },
    2033: function(e, t, r) {
      var i, n;
      (i = [r.dj.c(e.i), t]),
        void 0 ===
          (n = function(e, t) {
            function r(e, t) {
              if (!e || e.symbol) return null;
              var r = t.renderer;
              return e && r && r.getObservationRenderer
                ? r.getObservationRenderer(e)
                : r;
            }
            function i(e, t) {
              if (e.symbol) return e.symbol;
              var i = r(e, t);
              return i && i.getSymbol(e, t);
            }
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.getRenderer = r),
              (t.getSymbol = i),
              (t.getRenderingInfo = function(e, t) {
                var n = r(e, t),
                  o = i(e, t);
                if (!o) return null;
                var a = { renderer: n, symbol: o };
                if (n) {
                  if (
                    (n.colorInfo && (a.color = n.getColor(e).toRgba()),
                    n.sizeInfo)
                  ) {
                    var s = n.getSize(e);
                    a.size = [s, s, s];
                  }
                  if (n.visualVariables) {
                    s = ["proportional", "proportional", "proportional"];
                    for (
                      var u = 0, l = n.getVisualVariableValues(e, t);
                      u < l.length;
                      u++
                    ) {
                      var p = l[u],
                        c = p.variable,
                        d = p.value;
                      if ("color" === c.type) a.color = d.toRgba();
                      else if ("size" === c.type)
                        if ("outline" === c.target) a.outlineSize = d;
                        else {
                          var y = c.axis,
                            f = c.useSymbolValue ? "symbolValue" : d;
                          "width" === y
                            ? (s[0] = f)
                            : "depth" === y
                              ? (s[1] = f)
                              : "height" === y
                                ? (s[2] = f)
                                : (s[0] = s[1] =
                                    "width-and-depth" === y ? f : (s[2] = f));
                        }
                      else
                        "opacity" === c.type
                          ? (a.opacity = d)
                          : "rotation" === c.type && "tilt" === c.axis
                            ? (a.tilt = d)
                            : "rotation" === c.type && "roll" === c.axis
                              ? (a.roll = d)
                              : "rotation" === c.type && (a.heading = d);
                    }
                    (isFinite(s[0]) || isFinite(s[1]) || isFinite(s[2])) &&
                      (a.size = s);
                  }
                }
                return a;
              });
          }.apply(null, i)) || (e.exports = n);
    },
    2053: function(e, t, r) {
      var i, n;
      (i = [r.dj.c(e.i), t, r(39), r(2024), r(2007), r(2010), r(322)]),
        void 0 ===
          (n = function(e, t, r, i, n, o, a) {
            function s(e) {
              return o.isNumber(e.minDataValue) &&
                o.isNumber(e.maxDataValue) &&
                null != e.minSize &&
                null != e.maxSize
                ? n.WGLVVFlag.SIZE_MINMAX_VALUE
                : ((e.expression && "view.scale" === e.expression) ||
                    (e.valueExpression &&
                      "$view.scale" === e.valueExpression)) &&
                  Array.isArray(e.stops)
                  ? n.WGLVVFlag.SIZE_SCALE_STOPS
                  : (null != e.field ||
                      (e.expression && "view.scale" !== e.expression) ||
                      (e.valueExpression &&
                        "$view.scale" !== e.valueExpression)) &&
                    Array.isArray(e.stops)
                    ? n.WGLVVFlag.SIZE_FIELD_STOPS
                    : (null != e.field ||
                        (e.expression && "view.scale" !== e.expression) ||
                        (e.valueExpression &&
                          "$view.scale" !== e.valueExpression)) &&
                      null != e.valueUnit
                      ? n.WGLVVFlag.SIZE_UNIT_VALUE
                      : n.WGLVVFlag.NONE;
            }
            function u(e) {
              return { value: e.value, size: r.toPt(e.size) };
            }
            function l(e) {
              return e.map(function(e) {
                return u(e);
              });
            }
            function p(e) {
              if ("string" == typeof e || "number" == typeof e)
                return r.toPt(e);
              var t = e;
              return {
                type: "size",
                expression: t.expression,
                stops: l(t.stops)
              };
            }
            function c(e) {
              var t = {
                values: [0, 0, 0, 0, 0, 0, 0, 0],
                opacities: [0, 0, 0, 0, 0, 0, 0, 0]
              };
              if (o.isString(e.field))
                if (e.stops) {
                  if (e.stops.length > 8) return null;
                  for (var r = e.stops, i = 0; i < 8; ++i) {
                    var n = r[Math.min(i, r.length - 1)];
                    (t.values[i] = n.value), (t.opacities[i] = n.opacity);
                  }
                } else {
                  if (!e.opacityValues) return null;
                  if (
                    !o.isDefined(e.minDataValue) ||
                    !o.isDefined(e.maxDataValue)
                  )
                    return null;
                  if (2 !== e.opacityValues.length) return null;
                  (t.values[0] = e.minDataValue),
                    (t.opacities[0] = e.opacityValues[0]),
                    (t.values[1] = e.maxDataValue),
                    (t.opacities[1] = e.opacityValues[1]);
                  for (i = 2; i < 8; ++i)
                    (t.values[i] = e.maxDataValue),
                      (t.opacities[i] = e.opacityValues[1]);
                }
              else {
                if (
                  !(
                    (e.stops && e.stops.length >= 0) ||
                    (e.opacityValues && e.opacityValues.length >= 0)
                  )
                )
                  return null;
                var a =
                  e.stops && e.stops.length >= 0
                    ? e.stops[0].opacity
                    : e.opacityValues[0];
                for (i = 0; i < 8; i++)
                  (t.values[i] = 1 / 0), (t.opacities[i] = a);
              }
              return t;
            }
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.getTypeOfSizeVisualVariable = s),
              (t.getVisualVariableSizeValueRepresentationRatio = function(
                e,
                t
              ) {
                if (!e || !t) return e;
                switch (t) {
                  case "radius":
                  case "distance":
                    return 2 * e;
                  case "diameter":
                  case "width":
                    return e;
                  case "area":
                    return Math.sqrt(e);
                }
                return e;
              }),
              (t.stopToSizeStop = u),
              (t.normalizeSizeStops = l),
              (t.normalizeSizeElement = p),
              (t.getVisualVariablesFields = function(e) {
                var t = e && e.length > 0 ? {} : null;
                return (
                  t &&
                    e.forEach(function(e) {
                      var r = e.type;
                      e.field && (t[r] = e.field);
                    }),
                  t
                );
              }),
              (t.convertVisualVariables = function(e) {
                var t = e && e.length > 0 ? {} : null,
                  o = t ? {} : null;
                if (!t) return { vvFields: t, vvRanges: o };
                for (var u = 0, d = e; u < d.length; u++) {
                  var y = d[u],
                    f = y.type;
                  if ((y.field && (t[f] = y.field), "size" === f)) {
                    o.size || (o.size = {});
                    var h = y;
                    switch (s(h)) {
                      case n.WGLVVFlag.SIZE_MINMAX_VALUE:
                        o.size.minMaxValue = {
                          minDataValue: h.minDataValue,
                          maxDataValue: h.maxDataValue,
                          minSize: p(h.minSize),
                          maxSize: p(h.maxSize)
                        };
                        break;
                      case n.WGLVVFlag.SIZE_SCALE_STOPS:
                        o.size.scaleStops = { stops: l(h.stops) };
                        break;
                      case n.WGLVVFlag.SIZE_FIELD_STOPS:
                        for (
                          var _ = [],
                            v = [],
                            E = l(h.stops),
                            g = E.length,
                            V = 0;
                          V < 6;
                          V++
                        ) {
                          var m = E[Math.min(V, g - 1)];
                          _.push(m.value), v.push(r.pt2px(m.size));
                        }
                        o.size.fieldStops = { values: _, sizes: v };
                        break;
                      case n.WGLVVFlag.SIZE_UNIT_VALUE:
                        o.size.unitValue = {
                          unit: h.valueUnit,
                          valueRepresentation: h.valueRepresentation
                        };
                    }
                  } else if ("color" === f) {
                    var T = a.convertVisualVariables([y], {
                      modelSize: null,
                      symbolSize: null,
                      unitInMeters: 1,
                      transformation: null
                    });
                    for (o.color = T.color, V = 0; V < 32; V += 4)
                      i.premultiplyAlpha(o.color.colors, V, !0);
                  } else if ("opacity" === f) o.opacity = c(y);
                  else if ("rotation" === f) {
                    var I = y;
                    o.rotation = { type: I.rotationType };
                  }
                }
                return { vvFields: t, vvRanges: o };
              });
          }.apply(null, i)) || (e.exports = n);
    },
    2061: function(e, t, r) {
      var i, n;
      (i = [r.dj.c(e.i), t, r(13), r(43), r(184), r(136), r(2007), r(2053)]),
        void 0 ===
          (n = function(e, t, r, i, n, o, a, s) {
            function u(e, t, n) {
              if (!e) return null;
              var a = 0,
                s = {},
                u = e.clone(),
                p = u.visualVariables,
                c = null;
              if ("simple" !== u.type) {
                var d = u.field,
                  y = u.valueExpression;
                if (!d && y) {
                  var f = "$$fake" + a++,
                    h = o.createFunction(y);
                  (s[f] = function(e, r) {
                    return (
                      l.repurposeFromGraphicLikeObject(
                        e.geometry,
                        e.attributes,
                        n
                      ),
                      o.executeFunction(h, {
                        vars: { $feature: l, $view: o.getViewInfo(r) },
                        spatialReference: t
                      })
                    );
                  }),
                    (u.field = f),
                    (u.valueExpression = null),
                    (c = function(e, t) {
                      return (
                        (t.attributes[f] = s[f](t)),
                        e.valueExpression
                          ? e.getSymbol(i.fromJSON(t))
                          : e.getSymbol(t)
                      );
                    });
                }
              }
              return (
                p &&
                  (u.visualVariables = p.map(function(e) {
                    if (e.normalizationField) {
                      var i = e.field,
                        u = e.normalizationField,
                        p = "$$fake" + a++;
                      return (
                        (s[p] = function(e, t) {
                          return e.attributes[i] / e.attributes[u];
                        }),
                        ((c = r({}, e)).field = p),
                        delete c.normalizationField,
                        c
                      );
                    }
                    if (
                      e.valueExpression &&
                      "$view.scale" !== e.valueExpression
                    ) {
                      var c,
                        d = e.valueExpression,
                        y = ((p = "$$fake" + a++), o.createFunction(d));
                      return (
                        (s[p] = function(e, r) {
                          return (
                            l.repurposeFromGraphicLikeObject(
                              e.geometry,
                              e.attributes,
                              n
                            ),
                            o.executeFunction(y, {
                              vars: { $feature: l, $view: o.getViewInfo(r) },
                              spatialReference: t
                            })
                          );
                        }),
                        ((c = r({}, e)).field = p),
                        delete c.valueExpression,
                        c
                      );
                    }
                    return e;
                  })),
                { renderer: u, normalizingFunctions: s, getSymbolFunction: c }
              );
            }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var l = new n();
            (t.createRendererInfo = function(e, t, r) {
              var i = u(e, t, r) || {
                  renderer: null,
                  normalizingFunctions: null,
                  getSymbolFunction: null
                },
                n = i && i.normalizingFunctions,
                o = i && i.getSymbolFunction;
              e = (i && i.renderer) || e;
              var a = s.convertVisualVariables(e.visualVariables);
              return {
                renderer: e,
                vvFields: a.vvFields,
                vvRanges: a.vvRanges,
                getValue: function(e, t) {
                  var r = n[t];
                  return r ? r(e) : e.attributes[t];
                },
                getSymbol: function(e) {
                  return o
                    ? o(this.renderer, e)
                    : this.renderer.getSymbol
                      ? this.renderer.getSymbol.call(this.renderer, e)
                      : null;
                }
              };
            }),
              (t.getNormalizedRenderer = function(e, t, r) {
                var i = u(e, t, r) || {
                  renderer: null,
                  normalizingFunctions: null,
                  getSymbolFunction: null
                };
                return (i && i.renderer) || e;
              }),
              (t.getSymbol = function(e, t) {
                return e.getSymbol(t);
              }),
              (t.isRendererWebGLCompatible = function(e) {
                if (!e) return !1;
                if (
                  -1 ===
                  ["simple", "class-breaks", "unique-value", "heatmap"].indexOf(
                    e.type
                  )
                )
                  return !1;
                if (e.visualVariables)
                  for (var t = 0, r = e.visualVariables; t < r.length; t++) {
                    var i = r[t];
                    switch (i.type) {
                      case "color":
                      case "opacity":
                        if (i.stops && i.stops.length > 8) return !1;
                        break;
                      case "size":
                        if (
                          s.getTypeOfSizeVisualVariable(i) ===
                            a.WGLVVFlag.SIZE_FIELD_STOPS &&
                          i.stops &&
                          i.stops.length > 6
                        )
                          return !1;
                    }
                  }
                return !0;
              });
          }.apply(null, i)) || (e.exports = n);
    },
    2062: function(e, t, r) {
      var i, n;
      (i = [r.dj.c(e.i), t, r(59)]),
        void 0 ===
          (n = function(e, t, r) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = (function() {
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
                (e.prototype.acquire = function(e, t, r, i, n, o, a, s, u) {
                  (this.color = e),
                    (this.haloColor = t),
                    (this.haloSize = r),
                    (this.size = i),
                    (this.angle = n),
                    (this.offsetX = o),
                    (this.offsetY = a),
                    (this.hAnchor = s),
                    (this.vAnchor = u);
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
                (e.pool = new r(e)),
                e
              );
            })();
            t.TextProperties = i;
          }.apply(null, i)) || (e.exports = n);
    },
    2063: function(e, t, r) {
      var i, n;
      (i = [
        r.dj.c(e.i),
        t,
        r(2),
        r(0),
        r(43),
        r(24),
        r(17),
        r(11),
        r(9),
        r(1),
        r(2033),
        r(125),
        r(788),
        r(789),
        r(790),
        r(422)
      ]),
        void 0 ===
          (n = function(e, t, r, i, n, o, a, s, u, l, p, c, d, y, f, h) {
            var _ = s.getLogger("esri.views.2d.layers.support.FeaturesView2D");
            return (function(e) {
              function t() {
                for (var t = [], r = 0; r < arguments.length; r++)
                  t[r] = arguments[r];
                var i = e.apply(this, t) || this;
                return (
                  (i._handles = new a()),
                  (i._backgroundGroup = new d()),
                  (i._frontGroup = new d()),
                  (i._frontObjects = new Map()),
                  (i._backgroundObjects = new Map()),
                  (i._scale = 0),
                  (i.container = new f()),
                  (i.layer = null),
                  i.container.addChild(i._backgroundGroup),
                  i.container.addChild(i._frontGroup),
                  i.watch("graphics", function() {
                    return i._reset();
                  }),
                  i.watch("renderer", function() {
                    return i._resymbolize();
                  }),
                  i.watch("mapView.scale, mapView.stationary", function() {
                    return i._applyScale();
                  }),
                  i
                );
              }
              return (
                r(t, e),
                (t.prototype.destroy = function() {
                  (this.graphics = null), (this.renderer = null);
                }),
                (t.prototype.hitTest = function(e, t) {
                  (e += this.mapView.position[0] - window.pageXOffset),
                    (t += this.mapView.position[1] - window.pageYOffset);
                  var r = this.container.hitTest(e, t);
                  return r ? u.resolve(r.graphic) : u.resolve();
                }),
                (t.prototype.graphicUpdateHandler = function(e) {}),
                (t.prototype._reset = function() {
                  var e = this;
                  this._handles.remove("graphics"),
                    this.graphics &&
                      (this.graphics.forEach(this._add, this),
                      this._handles.add(
                        this.graphics.on("change", function(t) {
                          return e._graphicsChangeHandler(t);
                        }),
                        "graphics"
                      ));
                }),
                (t.prototype._applyScale = function() {
                  var e = this.get("mapView.scale"),
                    t = this.get("mapView.stationary");
                  e !== this._scale &&
                    t &&
                    ((this._scale = e), this._resymbolize());
                }),
                (t.prototype._resymbolize = function() {
                  var e = this;
                  this.graphics &&
                    this.graphics.forEach(function(t) {
                      return e._resymbolizeGraphic(t);
                    });
                }),
                (t.prototype._add = function(e) {
                  if (e && !this._frontObjects.has(e)) {
                    var t = p.getRenderingInfo(e, {
                      renderer: this.renderer,
                      viewingMode: "map",
                      scale: this.mapView.state.scale,
                      resolution: this.mapView.state.resolution,
                      spatialReference: this.mapView.spatialReference
                    });
                    if (t) {
                      if (t.symbol instanceof c)
                        return void _.error(
                          "3D symbols are not supported with MapView"
                        );
                      var r = new y();
                      (r.graphic = e),
                        (r.renderingInfo = t),
                        this._frontObjects.set(e, r),
                        this._frontGroup.addChild(r);
                      var i = t.renderer && t.renderer.backgroundFillSymbol;
                      if (i && r.isPolygonMarkerSymbol) {
                        var n = new y();
                        (n.graphic = e),
                          null != t.outlineSize
                            ? (n.renderingInfo = {
                                symbol: i,
                                size: [
                                  t.outlineSize,
                                  t.outlineSize,
                                  t.outlineSize
                                ]
                              })
                            : (n.renderingInfo = { symbol: i }),
                          this._backgroundObjects.set(e, n),
                          this._backgroundGroup.addChild(n);
                      }
                    }
                  }
                }),
                (t.prototype._remove = function(e) {
                  var t = this._frontObjects.get(e);
                  if (
                    t &&
                    (this._frontObjects.delete(e),
                    this._frontGroup.removeChild(t),
                    this._backgroundObjects.has(e))
                  ) {
                    var r = this._backgroundObjects.get(e);
                    this._backgroundObjects.delete(e),
                      this._backgroundGroup.removeChild(r);
                  }
                }),
                (t.prototype._resymbolizeGraphic = function(e) {
                  if (this._frontObjects.has(e)) {
                    var t = p.getRenderingInfo(e, {
                      renderer: this.renderer,
                      viewingMode: "map",
                      scale: this.mapView.state.scale,
                      resolution: this.mapView.state.resolution,
                      spatialReference: this.mapView.spatialReference
                    });
                    if (t) {
                      if (t.symbol instanceof c)
                        return void _.error(
                          "3D symbols are not supported with MapView"
                        );
                      var r = this._frontObjects.get(e);
                      r && (r.renderingInfo = t);
                      var i = t.renderer && t.renderer.backgroundFillSymbol,
                        n = this._backgroundObjects.get(e);
                      i && r.isPolygonMarkerSymbol
                        ? (n ||
                            (((n = new y()).graphic = e),
                            this._backgroundObjects.set(e, n),
                            this._backgroundGroup.addChild(n)),
                          null != t.outlineSize
                            ? (n.renderingInfo = {
                                symbol: i,
                                size: [
                                  t.outlineSize,
                                  t.outlineSize,
                                  t.outlineSize
                                ]
                              })
                            : (n.renderingInfo = { symbol: i }))
                        : !i &&
                          n &&
                          (this._backgroundObjects.delete(e),
                          this._backgroundGroup.removeChild(n));
                    }
                  }
                }),
                (t.prototype._graphicsChangeHandler = function(e) {
                  for (
                    var t = e.added, r = e.removed, i = 0, n = t;
                    i < n.length;
                    i++
                  ) {
                    var o = n[i];
                    this._add(o);
                  }
                  for (var a = 0, s = r; a < s.length; a++) {
                    o = s[a];
                    this._remove(o);
                  }
                }),
                i([l.property()], t.prototype, "container", void 0),
                i(
                  [l.property(), l.cast(o.ofType(n))],
                  t.prototype,
                  "graphics",
                  void 0
                ),
                i([l.property()], t.prototype, "layer", void 0),
                i([l.property()], t.prototype, "mapView", void 0),
                i(
                  [l.subclass("esri.views.2d.layers.support.FeaturesView2D")],
                  t
                )
              );
            })(l.declared(h));
          }.apply(null, i)) || (e.exports = n);
    },
    2094: function(e, t, r) {
      var i, n;
      (i = [r.dj.c(e.i), t]),
        void 0 ===
          (n = function(e, t) {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.isRefreshable = function(e) {
                return e && e.refresh;
              });
          }.apply(null, i)) || (e.exports = n);
    }
  }
]),
  (function() {
    (this || window).webpackJsonp.registerAbsMids({
      "esri/views/2d/layers/FeatureLayerView2D": 1967,
      "esri/views/layers/LayerView": 2006,
      "esri/views/2d/engine/webgl/enums": 2007,
      "esri/views/layers/RefreshableLayerView": 2008,
      "esri/views/2d/layers/LayerView2D": 2009,
      "esri/views/2d/engine/webgl/Utils": 2010,
      "esri/views/2d/engine/webgl/color": 2024,
      "esri/views/2d/engine/webgl/number": 2028,
      "esri/renderers/support/renderingInfoUtils": 2033,
      "esri/views/2d/engine/webgl/visualVariablesUtils": 2053,
      "esri/views/2d/engine/webgl/rendererInfoUtils": 2061,
      "esri/views/2d/engine/webgl/SymbolProperties": 2062,
      "esri/views/2d/layers/support/FeaturesView2D": 2063,
      "esri/layers/graphics/controllers/support/controllerUtils": 2094
    });
  })();
