(window.webpackJsonp = window.webpackJsonp || []).push([
  [32],
  {
    1982: function(e, t, i) {
      var r, n;
      (r = [
        i.dj.c(e.i),
        t,
        i(2),
        i(0),
        i(43),
        i(24),
        i(9),
        i(26),
        i(1),
        i(2011),
        i(2064),
        i(816),
        i(2065),
        i(56),
        i(2096),
        i(2027)
      ]),
        void 0 ===
          (n = function(e, t, i, r, n, s, o, a, p, h, u, l, d, c, y, g) {
            return (function(e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                  (t.highlights = new d()),
                  (t.frustumVisibility = new u()),
                  (t.supportsDraping = !0),
                  (t.overlayUpdating = !1),
                  (t.suspendResumeExtent = null),
                  (t.fullExtentInLocalViewSpatialReference = null),
                  (t.frameWorker = null),
                  t
                );
              }
              return (
                i(t, e),
                (t.prototype.initialize = function() {
                  var e = this;
                  this._set(
                    "graphics3d",
                    new l({
                      owner: this,
                      layer: this.layer,
                      scaleVisibilityEnabled: !0
                    })
                  ),
                    this.graphics3d.setup(),
                    this.frustumVisibility.setup(this),
                    this.highlights.setup(this.graphics3d.graphicsCore),
                    this.setupSuspendResumeExtent(),
                    this.handles.add(
                      this.watch("fullOpacity", function() {
                        return e.graphics3d.graphicsCore.opacityChange();
                      })
                    ),
                    this.handles.add(
                      this.layer.on("graphic-update", function(t) {
                        return e.graphics3d.graphicsCore.graphicUpdateHandler(
                          t
                        );
                      })
                    ),
                    (this.frameWorker = this.view.resourceController.registerIdleFrameWorker(
                      {
                        needsUpdate: function() {
                          return e.frustumVisibility.needsIdleUpdate();
                        },
                        idleFrame: function(t) {
                          return e.frustumVisibility.idleUpdate(t);
                        }
                      }
                    ));
                  var t = g.toViewIfLocal(this).then(function(t) {
                    e.fullExtentInLocalViewSpatialReference = t;
                  });
                  t && this.addResolvingPromise(t),
                    (this.drawingOrder = this.view.getDrawingOrder(
                      this.layer.uid
                    )),
                    this.handles.add(
                      a.whenTrueOnce(
                        this.view,
                        "basemapTerrain.ready",
                        function() {
                          return e.notifyChange("updating");
                        }
                      )
                    );
                }),
                (t.prototype.destroy = function() {
                  this.frameWorker &&
                    (this.frameWorker.remove(), (this.frameWorker = null)),
                    this.frustumVisibility &&
                      (this.frustumVisibility.destroy(),
                      this._set("frustumVisibility", null)),
                    this.graphics3d &&
                      (this.graphics3d.destroy(),
                      this._set("graphics3d", null)),
                    this.highlights &&
                      (this.highlights.destroy(), (this.highlights = null));
                }),
                Object.defineProperty(t.prototype, "drawingOrder", {
                  set: function(e) {
                    this.graphics3d.graphicsCore.setDrawingOrder(e),
                      this._set("drawingOrder", e);
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(t.prototype, "graphics3DGraphics", {
                  get: function() {
                    return this.graphics3d.graphicsCore.graphics3DGraphics;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(t.prototype, "graphics3DGraphicsKeys", {
                  get: function() {
                    return this.graphics3d.graphicsCore.graphics3DGraphicsKeys;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(t.prototype, "symbolUpdateType", {
                  get: function() {
                    return this.graphics3d.graphicsCore.symbolUpdateType;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (t.prototype.getRenderingInfo = function(e) {
                  return { symbol: e.symbol || null };
                }),
                (t.prototype.getGraphicFromGraphicUid = function(e) {
                  return this.graphics3d.getGraphicFromGraphicUid(e);
                }),
                (t.prototype.whenGraphicBounds = function(e, t) {
                  return this.graphics3d.whenGraphicBounds(e, t);
                }),
                (t.prototype.queryGraphics = function() {
                  return o.resolve(this.loadedGraphics);
                }),
                (t.prototype.highlight = function(e, t) {
                  if (e instanceof n) return this.highlight([e], t);
                  if (
                    (e instanceof s && (e = e.toArray()),
                    Array.isArray(e) && e.length > 0 && e[0] instanceof n)
                  ) {
                    var i = e.map(function(e) {
                        return e.uid;
                      }),
                      r = this.highlights.acquireSet(t, null),
                      o = r.set,
                      a = r.handle;
                    return this.highlights.setUids(o, i), a;
                  }
                  return { remove: function() {} };
                }),
                (t.prototype.getStats = function() {
                  var e = y.stats(this, this.graphics3d.graphicsCore);
                  return (
                    (e.elevationUpdating = this.graphics3d.elevationAlignment.updating),
                    (e.visibilityFrustum = !this.frustumVisibility.suspended),
                    (e.visibilityScale = !0),
                    e
                  );
                }),
                (t.prototype.canResume = function() {
                  return !(
                    !this.inherited(arguments) ||
                    (this.frustumVisibility &&
                      this.frustumVisibility.suspended) ||
                    this.graphics3d.suspended
                  );
                }),
                (t.prototype.isUpdating = function() {
                  return !(
                    !(
                      this.overlayUpdating ||
                      (this.graphics3d && this.graphics3d.updating) ||
                      (this.frustumVisibility &&
                        this.frustumVisibility.updating)
                    ) &&
                    this.view.basemapTerrain &&
                    this.view.basemapTerrain.ready
                  );
                }),
                (t.prototype.setupSuspendResumeExtent = function() {
                  var e = this;
                  a.init(
                    this.graphics3d.graphicsCore,
                    "computedExtent",
                    function(t) {
                      (e.suspendResumeExtent = c.enlargeExtent(
                        t,
                        e.suspendResumeExtent,
                        1.2
                      )),
                        e.frustumVisibility.setExtent(e.suspendResumeExtent);
                    },
                    !0
                  );
                }),
                r(
                  [p.property({ aliasOf: "layer.graphics" })],
                  t.prototype,
                  "loadedGraphics",
                  void 0
                ),
                r(
                  [
                    p.property({
                      dependsOn: [
                        "frustumVisibility.suspended",
                        "graphics3d.suspended"
                      ]
                    })
                  ],
                  t.prototype,
                  "suspended",
                  void 0
                ),
                r(
                  [
                    p.property({
                      dependsOn: [
                        "frustumVisibility.updating",
                        "graphics3d.updating",
                        "overlayUpdating"
                      ]
                    })
                  ],
                  t.prototype,
                  "updating",
                  void 0
                ),
                r([p.property()], t.prototype, "layer", void 0),
                r([p.property()], t.prototype, "highlights", void 0),
                r(
                  [p.property({ readOnly: !0 })],
                  t.prototype,
                  "frustumVisibility",
                  void 0
                ),
                r(
                  [p.property({ readOnly: !0 })],
                  t.prototype,
                  "graphics3d",
                  void 0
                ),
                r(
                  [
                    p.property({ aliasOf: "graphics3d.graphicsCore.hasDraped" })
                  ],
                  t.prototype,
                  "hasDraped",
                  void 0
                ),
                r(
                  [p.property({ type: Boolean })],
                  t.prototype,
                  "supportsDraping",
                  void 0
                ),
                r(
                  [p.property({ type: Boolean })],
                  t.prototype,
                  "overlayUpdating",
                  void 0
                ),
                r([p.property()], t.prototype, "drawingOrder", null),
                r([p.subclass("esri.views.3d.layers.GraphicsLayerView3D")], t)
              );
            })(p.declared(h));
          }.apply(null, r)) || (e.exports = n);
    },
    2006: function(e, t, i) {
      var r, n;
      (r = [
        i.dj.c(e.i),
        t,
        i(2),
        i(0),
        i(3),
        i(53),
        i(17),
        i(308),
        i(11),
        i(180),
        i(9),
        i(1)
      ]),
        void 0 ===
          (n = function(e, t, i, r, n, s, o, a, p, h, u, l) {
            return (function(e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                  (t.handles = new o()),
                  (t.layer = null),
                  (t.parent = null),
                  (t.view = null),
                  t
                );
              }
              return (
                i(t, e),
                (t.prototype.initialize = function() {
                  var e = this;
                  this.addResolvingPromise(this.layer),
                    this.when().catch(function(t) {
                      if ("layerview:create-error" !== t.name) {
                        var i = (e.layer && e.layer.id) || "no id",
                          r = (e.layer && e.layer.title) || "no title";
                        return (
                          p
                            .getLogger(e.declaredClass)
                            .error(
                              "#resolve()",
                              "Failed to resolve layer view (layer title: '" +
                                r +
                                "', id: '" +
                                i +
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
                r([l.property()], t.prototype, "layer", void 0),
                r([l.property()], t.prototype, "parent", void 0),
                r(
                  [
                    l.property({
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
                r(
                  [
                    l.property({
                      type: Boolean,
                      dependsOn: ["suspended"],
                      readOnly: !0
                    })
                  ],
                  t.prototype,
                  "updating",
                  null
                ),
                r([l.property()], t.prototype, "view", void 0),
                r(
                  [l.property({ dependsOn: ["layer.visible"] })],
                  t.prototype,
                  "visible",
                  null
                ),
                r(
                  [
                    l.property({
                      dependsOn: ["layer.opacity", "parent.fullOpacity"]
                    })
                  ],
                  t.prototype,
                  "fullOpacity",
                  null
                ),
                r([l.subclass("esri.views.layers.LayerView")], t)
              );
            })(l.declared(n, s, a, h));
          }.apply(null, r)) || (e.exports = n);
    },
    2011: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t, i(2), i(0), i(9), i(26), i(1), i(416), i(2006)]),
        void 0 ===
          (n = function(e, t, i, r, n, s, o, a, p) {
            return (function(e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t.supportsHeightUnitConversion = !1), t;
              }
              return (
                i(t, e),
                (t.prototype.postscript = function(e) {
                  this.inherited(arguments),
                    a.mayHaveHeightModelInfo(this.layer) &&
                      this.addResolvingPromise(this._validateHeightModelInfo());
                }),
                (t.prototype._validateHeightModelInfo = function() {
                  var e = this;
                  return n.create(function(t, i) {
                    s.whenFalseOnce(
                      e.view.defaultsFromMap,
                      "isHeightModelInfoSearching",
                      function() {
                        var r = a.rejectLayerError(
                          e.layer,
                          e.view.heightModelInfo,
                          e.supportsHeightUnitConversion
                        );
                        r ? i(r) : t();
                      }
                    );
                  });
                }),
                r([o.property()], t.prototype, "view", void 0),
                r([o.subclass("esri.views.3d.layers.LayerView3D")], t)
              );
            })(o.declared(p));
          }.apply(null, r)) || (e.exports = n);
    },
    2027: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t, i(9), i(37), i(312)]),
        void 0 ===
          (n = function(e, t, i, r, n) {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.toViewIfLocal = function(e) {
                var t = e.view.spatialReference,
                  s = e.layer.fullExtent,
                  o = s && s.spatialReference;
                return o
                  ? o.equals(t)
                    ? i.resolve(s.clone())
                    : r.canProject(o, t)
                      ? i.resolve(r.project(s, t))
                      : e.view.state.isLocal
                        ? n
                            .projectGeometry(s, t, e.layer.portalItem)
                            .then(function(t) {
                              if (!e.destroyed && t) return t;
                            })
                            .catch(function() {
                              return null;
                            })
                        : i.resolve(null)
                  : i.resolve(null);
              });
          }.apply(null, r)) || (e.exports = n);
    },
    2047: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t]),
        void 0 ===
          (n = function(e, t) {
            return (function() {
              function e() {
                this.items = [];
              }
              return (
                (e.prototype.addObject = function(e, t) {
                  this.items.push({
                    type: "object",
                    highlightId: t,
                    object: e
                  });
                }),
                (e.prototype.addRenderGeometry = function(e, t, i) {
                  this.items.push({
                    type: "renderGeometry",
                    highlightId: i,
                    renderGeometry: e,
                    renderer: t
                  });
                }),
                (e.prototype.addExternal = function(e, t) {
                  this.items.push({
                    type: "external",
                    highlightId: t,
                    remove: e
                  });
                }),
                (e.prototype.remove = function(e) {
                  for (var t = this.items.length - 1; t >= 0; --t) {
                    var i = this.items[t];
                    i.highlightId === e &&
                      (this.removeHighlight(i), this.items.splice(t, 1));
                  }
                }),
                (e.prototype.removeObject = function(e) {
                  for (var t = this.items.length - 1; t >= 0; --t) {
                    var i = this.items[t];
                    "object" === i.type &&
                      i.object === e &&
                      (this.removeHighlight(i), this.items.splice(t, 1));
                  }
                }),
                (e.prototype.removeRenderGeometry = function(e) {
                  for (var t = this.items.length - 1; t >= 0; --t) {
                    var i = this.items[t];
                    "renderGeometry" === i.type &&
                      i.renderGeometry === e &&
                      (this.removeHighlight(i), this.items.splice(t, 1));
                  }
                }),
                (e.prototype.removeAll = function() {
                  var e = this;
                  this.items.forEach(function(t) {
                    e.removeHighlight(t);
                  }),
                    (this.items = []);
                }),
                (e.prototype.removeHighlight = function(e) {
                  switch (e.type) {
                    case "object":
                      e.object.removeHighlights(e.highlightId);
                      break;
                    case "renderGeometry":
                      e.renderer.removeRenderGeometryHighlight(
                        e.renderGeometry,
                        e.highlightId
                      );
                      break;
                    case "external":
                      e.remove(e.highlightId);
                  }
                }),
                e
              );
            })();
          }.apply(null, r)) || (e.exports = n);
    },
    2064: function(e, t, i) {
      var r, n;
      (r = [
        i.dj.c(e.i),
        t,
        i(2),
        i(0),
        i(3),
        i(17),
        i(26),
        i(1),
        i(60),
        i(792)
      ]),
        void 0 ===
          (n = function(e, t, i, r, n, s, o, a, p, h) {
            var u = -0.3 * p.earthRadius;
            return (function(e) {
              function t() {
                var t = e.call(this) || this;
                return (
                  (t.suspended = !0),
                  (t._frustumVisibilityDirty = !0),
                  (t.extent = null),
                  (t.extentIntersectionDirty = !0),
                  (t._isVisibleBelowSurface = !1),
                  (t.handles = new s()),
                  (t.layerView = null),
                  t
                );
              }
              return (
                i(t, e),
                Object.defineProperty(t.prototype, "frustumVisibilityDirty", {
                  get: function() {
                    return this._frustumVisibilityDirty;
                  },
                  set: function(e) {
                    e !== this._frustumVisibilityDirty &&
                      ((this._frustumVisibilityDirty = e),
                      this.notifyChange("updating"));
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(t.prototype, "updating", {
                  get: function() {
                    return this.frustumVisibilityDirty;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (t.prototype.setup = function(e) {
                  var t = this;
                  (this.layerView = e),
                    (this.extentIntersection = new h.FrustumExtentIntersection({
                      renderCoordsHelper: e.view.renderCoordsHelper
                    }));
                  var i = e.view,
                    r = i.basemapTerrain;
                  this.handles.add([
                    i.on("resize", function() {
                      return t.viewChange();
                    }),
                    i.state.watch(
                      "camera",
                      function() {
                        return t.viewChange();
                      },
                      !0
                    ),
                    r.on("elevation-bounds-change", function() {
                      return t.elevationBoundsChange();
                    })
                  ]),
                    "local" === i.viewingMode
                      ? (this.isVisibleBelowSurface = !0)
                      : this.handles.add(
                          o.init(r, ["opacity", "wireframe"], function() {
                            return (t.isVisibleBelowSurface = r.isSeeThrough());
                          })
                        );
                }),
                (t.prototype.destroy = function() {
                  (this.layerView = null),
                    (this.extent = null),
                    (this.extentIntersection = null),
                    this.handles &&
                      (this.handles.destroy(), (this.handles = null));
                }),
                (t.prototype.needsIdleUpdate = function() {
                  return this.frustumVisibilityDirty;
                }),
                (t.prototype.setExtent = function(e) {
                  (this.extent = e),
                    (this.extentIntersectionDirty = !0),
                    (this.frustumVisibilityDirty = !0);
                }),
                (t.prototype.viewChange = function() {
                  this.frustumVisibilityDirty = !0;
                }),
                (t.prototype.elevationBoundsChange = function() {
                  (this.frustumVisibilityDirty = !0),
                    (this.extentIntersectionDirty = !0);
                }),
                Object.defineProperty(t.prototype, "isVisibleBelowSurface", {
                  set: function(e) {
                    (this._isVisibleBelowSurface = e),
                      (this.frustumVisibilityDirty = !0),
                      (this.extentIntersectionDirty = !0);
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (t.prototype.idleUpdate = function(e) {
                  e.done() ||
                    (this.frustumVisibilityDirty &&
                      (this.updateSuspendFrustumVisible(),
                      (this.frustumVisibilityDirty = !1)));
                }),
                (t.prototype.updateExtentIntersection = function() {
                  if (this.extentIntersectionDirty) {
                    this.extentIntersectionDirty = !1;
                    var e,
                      t = this.layerView.view;
                    if (this._isVisibleBelowSurface) e = u;
                    else {
                      var i = t.basemapTerrain.getElevationBounds(),
                        r = i[0],
                        n = i[1];
                      e = r - Math.max(1, (n - r) * (1.2 - 1));
                    }
                    this.extentIntersection.update(
                      this.extent,
                      t.spatialReference,
                      e
                    );
                  }
                }),
                (t.prototype.updateSuspendFrustumVisible = function() {
                  if (this.extent) {
                    this.updateExtentIntersection();
                    var e = this.layerView.view.frustum;
                    this._set(
                      "suspended",
                      !this.extentIntersection.isVisibleInFrustum(e)
                    );
                  } else this._set("suspended", !1);
                }),
                r(
                  [a.property({ readOnly: !0 })],
                  t.prototype,
                  "suspended",
                  void 0
                ),
                r(
                  [a.property({ readOnly: !0 })],
                  t.prototype,
                  "updating",
                  null
                ),
                r(
                  [
                    a.subclass(
                      "esri.views.3d.layers.graphics.Graphics3DFrustumVisibility"
                    )
                  ],
                  t
                )
              );
            })(a.declared(n));
          }.apply(null, r)) || (e.exports = n);
    },
    2065: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t, i(2066)]),
        void 0 ===
          (n = function(e, t, i) {
            return (function() {
              function e() {
                (this.graphicsCore = null), (this.highlights = []);
              }
              return (
                (e.prototype.destroy = function() {
                  this.highlights.forEach(function(e) {
                    return e.highlightSet.removeAll();
                  }),
                    (this.highlights = null);
                }),
                (e.prototype.setup = function(e) {
                  this.graphicsCore = e;
                }),
                (e.prototype.acquireSet = function(e, t) {
                  var r = this,
                    n = new i(e, t);
                  return (
                    this.highlights.push(n),
                    {
                      set: n,
                      handle: {
                        remove: function() {
                          return r.releaseSet(n);
                        }
                      }
                    }
                  );
                }),
                (e.prototype.releaseSet = function(e) {
                  e.highlightSet.removeAll();
                  var t = this.highlights ? this.highlights.indexOf(e) : -1;
                  -1 !== t && this.highlights.splice(t, 1);
                }),
                (e.prototype.setUids = function(e, t) {
                  var i = this.graphicsCore.graphics;
                  t.forEach(function(t) {
                    e.ids.add(t);
                    var r = i[t];
                    r && r.addHighlight(e.highlightSet, e.options);
                  });
                }),
                (e.prototype.setObjectIds = function(e, t) {
                  var i = this.graphicsCore.graphics;
                  for (var r in (t.forEach(function(t) {
                    return e.ids.add(t);
                  }),
                  i)) {
                    var n = i[r];
                    n &&
                      e.hasGraphic(n) &&
                      n.addHighlight(e.highlightSet, e.options);
                  }
                }),
                (e.prototype.graphicCreated = function(e) {
                  this.highlights.forEach(function(t) {
                    t.hasGraphic(e) &&
                      e.addHighlight(t.highlightSet, t.options);
                  });
                }),
                (e.prototype.graphicDeleted = function(e) {
                  this.highlights.forEach(function(t) {
                    t.hasGraphic(e) && e.removeHighlight(t.highlightSet);
                  });
                }),
                (e.prototype.allGraphicsDeleted = function() {
                  this.highlights.forEach(function(e) {
                    return e.highlightSet.removeAll();
                  });
                }),
                e
              );
            })();
          }.apply(null, r)) || (e.exports = n);
    },
    2066: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t, i(2047)]),
        void 0 ===
          (n = function(e, t, i) {
            return (function() {
              function e(e, t) {
                (this.highlightSet = new i()),
                  (this.ids = new Set()),
                  (this.options = e),
                  (this.objectIdField = t);
              }
              return (
                (e.prototype.hasGraphic = function(e) {
                  if (this.objectIdField) {
                    var t = e.graphic.attributes[this.objectIdField];
                    return this.ids.has(t);
                  }
                  return this.ids.has(e.graphic.uid);
                }),
                e
              );
            })();
          }.apply(null, r)) || (e.exports = n);
    },
    2096: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t]),
        void 0 ===
          (n = function(e, t) {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.stats = function(e, t) {
                var i = t.graphics3DGraphics,
                  r = "null",
                  n = e.suspendResumeExtent;
                n &&
                  (r = [n[0], n[1], n[2], n[3]]
                    .map(function(e) {
                      return e.toPrecision(4);
                    })
                    .join(", "));
                var s = "null",
                  o = t.computedExtent;
                return (
                  o &&
                    (s = [o.xmin, o.ymin, o.xmax, o.ymax]
                      .map(function(e) {
                        return e.toPrecision(4);
                      })
                      .join(", ")),
                  {
                    numCollection: e.loadedGraphics.length,
                    numGraphics: Object.keys(i).length,
                    graphicsUpdating: t.updating,
                    resumeExtent: r,
                    computedExtent: s,
                    updating: e.updating,
                    suspended: e.suspended
                  }
                );
              });
          }.apply(null, r)) || (e.exports = n);
    }
  }
]),
  (function() {
    (this || window).webpackJsonp.registerAbsMids({
      "esri/views/3d/layers/GraphicsLayerView3D": 1982,
      "esri/views/layers/LayerView": 2006,
      "esri/views/3d/layers/LayerView3D": 2011,
      "esri/views/3d/layers/support/projectExtentUtils": 2027,
      "esri/views/3d/webgl-engine/lib/HighlightSet": 2047,
      "esri/views/3d/layers/graphics/Graphics3DFrustumVisibility": 2064,
      "esri/views/3d/layers/graphics/Graphics3DHighlights": 2065,
      "esri/views/3d/layers/graphics/Graphics3DHighlightSet": 2066,
      "esri/views/3d/layers/graphics/stats": 2096
    });
  })();