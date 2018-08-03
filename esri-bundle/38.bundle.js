(window.webpackJsonp = window.webpackJsonp || []).push([
  [38],
  {
    1990: function(e, t, r) {
      var i, n;
      (i = [r.dj.c(e.i), t, r(2), r(0), r(9), r(1), r(779), r(2009), r(2063)]),
        void 0 ===
          (n = function(e, t, r, i, n, o, s, a, p) {
            return (function(e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                  (t._popupTemplates = new Map()),
                  (t.container = new s()),
                  (t.featuresViews = []),
                  t
                );
              }
              return (
                r(t, e),
                (t.prototype.hitTest = function(e, t) {
                  var r = this;
                  if (this.suspended || !this.featuresViews.length)
                    return n.resolve();
                  var i = this.featuresViews.map(function(r) {
                    return r.hitTest(e, t);
                  });
                  return n.all(i).then(function(e) {
                    return (
                      e.filter(function(e, t) {
                        return (
                          e &&
                            ((e.popupTemplate = r._popupTemplates.get(
                              r.featuresViews[t]
                            )),
                            (e.layer = r.layer),
                            (e.sourceLayer = r.layer)),
                          !!e
                        );
                      })[0] || null
                    );
                  });
                }),
                (t.prototype.update = function(e) {}),
                (t.prototype.attach = function() {
                  var e = this;
                  this.layer.featureCollections.forEach(function(t) {
                    var r = new p();
                    (r.graphics = t.source),
                      (r.mapView = e.view),
                      (r.renderer = t.renderer),
                      e._popupTemplates.set(r, t.popupTemplate),
                      e.featuresViews.push(r),
                      e.container.addChild(r.container);
                  });
                }),
                (t.prototype.detach = function() {
                  this.container.removeAllChildren(),
                    this.featuresViews.forEach(function(e) {
                      (e.graphics = null),
                        (e.mapView = null),
                        (e.renderer = null),
                        (e = null);
                    }),
                    (this._popupTemplates = null);
                }),
                (t.prototype.moveStart = function() {}),
                (t.prototype.viewChange = function() {}),
                (t.prototype.moveEnd = function() {}),
                i([o.subclass("esri.views.2d.layers.MapNotesLayerView2D")], t)
              );
            })(o.declared(a));
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
          (n = function(e, t, r, i, n, o, s, a, p, l, u, d) {
            return (function(e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                  (t.handles = new s()),
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
                          p
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
                          u.reject(t)
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
                i([d.property()], t.prototype, "layer", void 0),
                i([d.property()], t.prototype, "parent", void 0),
                i(
                  [
                    d.property({
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
                    d.property({
                      type: Boolean,
                      dependsOn: ["suspended"],
                      readOnly: !0
                    })
                  ],
                  t.prototype,
                  "updating",
                  null
                ),
                i([d.property()], t.prototype, "view", void 0),
                i(
                  [d.property({ dependsOn: ["layer.visible"] })],
                  t.prototype,
                  "visible",
                  null
                ),
                i(
                  [
                    d.property({
                      dependsOn: ["layer.opacity", "parent.fullOpacity"]
                    })
                  ],
                  t.prototype,
                  "fullOpacity",
                  null
                ),
                i([d.subclass("esri.views.layers.LayerView")], t)
              );
            })(d.declared(n, o, a, l));
          }.apply(null, i)) || (e.exports = n);
    },
    2009: function(e, t, r) {
      var i, n;
      (i = [r.dj.c(e.i), t, r(5), r(0), r(26), r(1), r(2006)]),
        void 0 ===
          (n = function(e, t, r, i, n, o, s) {
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
                      s = !n;
                    !o && r <= i && (o = !0),
                      !s && r >= n && (s = !0),
                      (e = o && s);
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
            })(o.declared(s));
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
                var s = { renderer: n, symbol: o };
                if (n) {
                  if (
                    (n.colorInfo && (s.color = n.getColor(e).toRgba()),
                    n.sizeInfo)
                  ) {
                    var a = n.getSize(e);
                    s.size = [a, a, a];
                  }
                  if (n.visualVariables) {
                    a = ["proportional", "proportional", "proportional"];
                    for (
                      var p = 0, l = n.getVisualVariableValues(e, t);
                      p < l.length;
                      p++
                    ) {
                      var u = l[p],
                        d = u.variable,
                        c = u.value;
                      if ("color" === d.type) s.color = c.toRgba();
                      else if ("size" === d.type)
                        if ("outline" === d.target) s.outlineSize = c;
                        else {
                          var h = d.axis,
                            y = d.useSymbolValue ? "symbolValue" : c;
                          "width" === h
                            ? (a[0] = y)
                            : "depth" === h
                              ? (a[1] = y)
                              : "height" === h
                                ? (a[2] = y)
                                : (a[0] = a[1] =
                                    "width-and-depth" === h ? y : (a[2] = y));
                        }
                      else
                        "opacity" === d.type
                          ? (s.opacity = c)
                          : "rotation" === d.type && "tilt" === d.axis
                            ? (s.tilt = c)
                            : "rotation" === d.type && "roll" === d.axis
                              ? (s.roll = c)
                              : "rotation" === d.type && (s.heading = c);
                    }
                    (isFinite(a[0]) || isFinite(a[1]) || isFinite(a[2])) &&
                      (s.size = a);
                  }
                }
                return s;
              });
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
          (n = function(e, t, r, i, n, o, s, a, p, l, u, d, c, h, y, f) {
            var v = a.getLogger("esri.views.2d.layers.support.FeaturesView2D");
            return (function(e) {
              function t() {
                for (var t = [], r = 0; r < arguments.length; r++)
                  t[r] = arguments[r];
                var i = e.apply(this, t) || this;
                return (
                  (i._handles = new s()),
                  (i._backgroundGroup = new c()),
                  (i._frontGroup = new c()),
                  (i._frontObjects = new Map()),
                  (i._backgroundObjects = new Map()),
                  (i._scale = 0),
                  (i.container = new y()),
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
                  return r ? p.resolve(r.graphic) : p.resolve();
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
                    var t = u.getRenderingInfo(e, {
                      renderer: this.renderer,
                      viewingMode: "map",
                      scale: this.mapView.state.scale,
                      resolution: this.mapView.state.resolution,
                      spatialReference: this.mapView.spatialReference
                    });
                    if (t) {
                      if (t.symbol instanceof d)
                        return void v.error(
                          "3D symbols are not supported with MapView"
                        );
                      var r = new h();
                      (r.graphic = e),
                        (r.renderingInfo = t),
                        this._frontObjects.set(e, r),
                        this._frontGroup.addChild(r);
                      var i = t.renderer && t.renderer.backgroundFillSymbol;
                      if (i && r.isPolygonMarkerSymbol) {
                        var n = new h();
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
                    var t = u.getRenderingInfo(e, {
                      renderer: this.renderer,
                      viewingMode: "map",
                      scale: this.mapView.state.scale,
                      resolution: this.mapView.state.resolution,
                      spatialReference: this.mapView.spatialReference
                    });
                    if (t) {
                      if (t.symbol instanceof d)
                        return void v.error(
                          "3D symbols are not supported with MapView"
                        );
                      var r = this._frontObjects.get(e);
                      r && (r.renderingInfo = t);
                      var i = t.renderer && t.renderer.backgroundFillSymbol,
                        n = this._backgroundObjects.get(e);
                      i && r.isPolygonMarkerSymbol
                        ? (n ||
                            (((n = new h()).graphic = e),
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
                  for (var s = 0, a = r; s < a.length; s++) {
                    o = a[s];
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
            })(l.declared(f));
          }.apply(null, i)) || (e.exports = n);
    }
  }
]),
  (function() {
    (this || window).webpackJsonp.registerAbsMids({
      "esri/views/2d/layers/MapNotesLayerView2D": 1990,
      "esri/views/layers/LayerView": 2006,
      "esri/views/2d/layers/LayerView2D": 2009,
      "esri/renderers/support/renderingInfoUtils": 2033,
      "esri/views/2d/layers/support/FeaturesView2D": 2063
    });
  })();
