(window.webpackJsonp = window.webpackJsonp || []).push([
  [26],
  {
    1962: function(e, t, r) {
      var i, n;
      (i = [
        r.dj.c(e.i),
        t,
        r(5),
        r(0),
        r(17),
        r(11),
        r(9),
        r(1),
        r(20),
        r(35),
        r(2011),
        r(2045),
        r(2027),
        r(7),
        r(92),
        r(73),
        r(262),
        r(185),
        r(137),
        r(2008)
      ]),
        void 0 ===
          (n = function(
            e,
            t,
            r,
            i,
            n,
            a,
            o,
            s,
            l,
            d,
            p,
            h,
            u,
            c,
            y,
            g,
            f,
            m,
            v,
            w
          ) {
            var x = a.getLogger("esri.views.3d.layers.DynamicLayerView3D"),
              _ = (function(e) {
                function t() {
                  var t = (null !== e && e.apply(this, arguments)) || this;
                  return (
                    (t.supportsDraping = !0),
                    (t.hasDraped = !0),
                    (t.fullExtentInLocalViewSpatialReference = null),
                    (t.overlayUpdating = !1),
                    (t.maximumDataResolution = null),
                    (t._handles = new n()),
                    (t._images = []),
                    (t._extents = []),
                    t
                  );
                }
                return (
                  r(t, e),
                  Object.defineProperty(t.prototype, "drawingOrder", {
                    get: function() {
                      return this._get("drawingOrder");
                    },
                    set: function(e) {
                      if (e !== this._get("drawingOrder")) {
                        this._set("drawingOrder", e);
                        var t = new Set();
                        this._images.forEach(function(r) {
                          r &&
                            r.material &&
                            ((r.material.renderPriority = e),
                            t.add(r.material.id));
                        }),
                          t.size > 0 &&
                            (this.view._stage
                              .getDrapedTextureRenderer()
                              .updateRenderOrder(t),
                            this.emit("draped-data-change"));
                      }
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  (t.prototype.initialize = function() {
                    var e = this;
                    (this.drawingOrder = this.view.getDrawingOrder(
                      this.layer.uid
                    )),
                      this.addResolvingPromise(
                        u.toViewIfLocal(this).then(function(t) {
                          return e._set(
                            "fullExtentInLocalViewSpatialReference",
                            t
                          );
                        })
                      ),
                      this._handles.add(
                        this.watch("suspended", function() {
                          return e._suspendedChangeHandler();
                        })
                      );
                    var t = this.notifyChange.bind(this, "suspended");
                    this._handles.add(
                      this.view.resourceController.registerIdleFrameWorker({
                        idleBegin: function() {
                          e._isScaleRangeActive() && t();
                        }
                      })
                    ),
                      this._isScaleRangeLayer() &&
                        this._handles.add(
                          [
                            this.layer.watch("minScale", t),
                            this.layer.watch("maxScale", t)
                          ],
                          "layer"
                        ),
                      this._handles.add(
                        [
                          this.watch(
                            "fullOpacity",
                            this._opacityChangeHandler.bind(this)
                          ),
                          this.layer.on(
                            "redraw",
                            this._layerRedrawHandler.bind(this)
                          )
                        ],
                        "layer"
                      );
                  }),
                  (t.prototype.destroy = function() {
                    this.clear(), this._handles.destroy();
                  }),
                  (t.prototype.setDrapingExtent = function(e, t, r, i, n) {
                    var a = this._extentAndSizeAtResolution(t, r, i),
                      o = a.size,
                      s = a.extent;
                    if (
                      "imageMaxWidth" in this.layer ||
                      "imageMaxHeight" in this.layer
                    ) {
                      var l = this.layer.imageMaxWidth,
                        p = this.layer.imageMaxHeight;
                      o.width > l &&
                        ((o.height = Math.floor((o.height * l) / o.width)),
                        (o.width = l)),
                        o.height > p &&
                          ((o.width = Math.floor((o.width * p) / o.height)),
                          (o.height = p));
                    }
                    var h = this._extents[e];
                    (h &&
                      d.equals(h.extent, s) &&
                      !this._imageSizeDiffers(s, r, h.imageSize, o)) ||
                      ((this._extents[e] = {
                        extent: d.create(s),
                        spatialReference: r,
                        imageSize: o,
                        renderLocalOrigin: n
                      }),
                      this.suspended || this._fetch(e));
                  }),
                  (t.prototype.getGraphicFromGraphicUid = function(e) {
                    return o.reject();
                  }),
                  (t.prototype.clear = function() {
                    for (var e = 0; e < this._images.length; e++)
                      this._clearImage(e);
                  }),
                  (t.prototype.doRefresh = function() {
                    this.suspended || this.refetch();
                  }),
                  (t.prototype.canResume = function() {
                    if (!this.inherited(arguments)) return !1;
                    if (this._isScaleRangeLayer()) {
                      var e = this.layer,
                        t = e.minScale,
                        r = e.maxScale;
                      if (t > 0 || r > 0) {
                        var i = this.view.scale;
                        if (i < r || (t > 0 && i > t)) return !1;
                      }
                    }
                    return !0;
                  }),
                  (t.prototype.isUpdating = function() {
                    if (this.overlayUpdating) return !0;
                    for (var e = 0, t = this._images; e < t.length; e++)
                      if (t[e].loadingPromise) return !0;
                    return !1;
                  }),
                  (t.prototype.processResult = function(e, t) {
                    (t instanceof HTMLImageElement ||
                      t instanceof HTMLCanvasElement) &&
                      (e.image = t);
                  }),
                  (t.prototype.updateImage = function(e) {
                    return !1;
                  }),
                  (t.prototype.refetch = function() {
                    for (var e = 0; e < this._extents.length; e++)
                      this._extents[e] && this._fetch(e);
                  }),
                  (t.prototype.beforeFetch = function() {}),
                  (t.prototype.findExtentInfoAt = function(e) {
                    for (var t = 0, r = this._extents; t < r.length; t++) {
                      var i = r[t],
                        n = i.extent;
                      if (
                        new l(
                          n[0],
                          n[1],
                          n[2],
                          n[3],
                          i.spatialReference
                        ).contains(e)
                      )
                        return i;
                    }
                    return null;
                  }),
                  (t.prototype._imageSizeDiffers = function(e, t, r, i) {
                    if (!this.maximumDataResolution) return !0;
                    if (y.TESTS_DISABLE_UPDATE_THROTTLE_THRESHOLDS) return !0;
                    var n = d.width(e) / this.maximumDataResolution.x,
                      a = d.height(e) / this.maximumDataResolution.y,
                      o = n / r.width,
                      s = a / r.height,
                      l = n / i.width,
                      p = a / i.height,
                      h = Math.abs(o - l),
                      u = Math.abs(s - p);
                    return h > 1.5 || u > 1.5;
                  }),
                  (t.prototype._fetch = function(e) {
                    var t = this;
                    if (!this.suspended) {
                      this.beforeFetch();
                      var r = this._extents[e],
                        i = r.extent,
                        n = new l(i[0], i[1], i[2], i[3], r.spatialReference);
                      this._images[e] ||
                        (this._images[e] = {
                          texture: null,
                          material: null,
                          rendergeometry: null,
                          loadingPromise: null,
                          image: null,
                          pixelData: null,
                          renderExtent: d.create(i)
                        });
                      var a = this._images[e];
                      if (
                        (a.loadingPromise && a.loadingPromise.cancel(),
                        0 === n.width || 0 === n.height)
                      )
                        return void this._clearImage(e);
                      (a.loadingPromise = this.layer.fetchImage(
                        n,
                        r.imageSize.width,
                        r.imageSize.height,
                        { allowImageDataAccess: !0 }
                      )),
                        a.loadingPromise
                          .then(function(r) {
                            d.set(a.renderExtent, i),
                              t.processResult(a, r),
                              t._createStageObjects(e, a.image),
                              0 === e &&
                                t._images[1] &&
                                t._images[1].rendergeometry &&
                                t._createStageObjects(1, null),
                              t.notifyChange("updating"),
                              t.emit("draped-data-change");
                          })
                          .catch(function(e) {
                            e &&
                              "CancelError" !== e.name &&
                              "cancel" !== e.dojoType &&
                              x.error(e),
                              t.notifyChange("updating");
                          })
                          .always(function() {
                            a.loadingPromise = null;
                          }),
                        this.notifyChange("updating");
                    }
                  }),
                  (t.prototype._clearImage = function(e) {
                    var t = this._images[e],
                      r = this.view._stage;
                    t &&
                      (t.rendergeometry &&
                        (r
                          .getDrapedTextureRenderer()
                          .removeRenderGeometries([t.rendergeometry]),
                        (t.rendergeometry = null)),
                      t.texture &&
                        (r.remove(g.ModelContentType.TEXTURE, t.texture.id),
                        (t.texture = null)),
                      t.material &&
                        (r.remove(g.ModelContentType.MATERIAL, t.material.id),
                        (t.material = null)),
                      t.loadingPromise &&
                        (t.loadingPromise.cancel(), (t.loadingPromise = null)),
                      (t.image = null),
                      (t.pixelData = null));
                  }),
                  (t.prototype._createStageObjects = function(e, t) {
                    var r = this.view._stage,
                      i = r.getDrapedTextureRenderer(),
                      n = this._images[e];
                    t &&
                      (n.texture &&
                        r.remove(g.ModelContentType.TEXTURE, n.texture.id),
                      (n.texture = new m(t, "dynamicLayer", {
                        width: t.width,
                        height: t.height,
                        wrapClamp: !0
                      })),
                      r.add(g.ModelContentType.TEXTURE, n.texture)),
                      n.material
                        ? t &&
                          n.material.setParameterValues({
                            textureId: n.texture.id
                          })
                        : ((n.material = new v(
                            {
                              ambient: [1, 1, 1],
                              diffuse: [0, 0, 0],
                              transparent: !0,
                              opacity: this.fullOpacity,
                              textureId: n.texture.id,
                              receiveSSAO: !1
                            },
                            "dynamicLayer"
                          )),
                          (n.material.renderPriority = this.drawingOrder),
                          r.add(g.ModelContentType.MATERIAL, n.material));
                    var a,
                      o = this._extents[e].renderLocalOrigin;
                    if (0 === e)
                      a = h.createGeometryForExtent(n.renderExtent, -1);
                    else {
                      if (1 !== e)
                        return void console.error(
                          "DynamicLayerView3D._createStageObjects: Invalid extent idx"
                        );
                      var s = this._images[0].renderExtent;
                      if (!s) return;
                      a = h.createOuterImageGeometry(s, n.renderExtent, -1);
                    }
                    var l = new f(a);
                    (l.material = n.material),
                      (l.origin = o),
                      (l.transformation = c.mat4d.identity()),
                      (l.name = "dynamicLayer"),
                      (l.uniqueName = "dynamicLayer#" + a.id),
                      i.addRenderGeometries([l]),
                      n.rendergeometry &&
                        i.removeRenderGeometries([n.rendergeometry]),
                      (n.rendergeometry = l);
                  }),
                  (t.prototype._isScaleRangeLayer = function() {
                    return "minScale" in this.layer && "maxScale" in this.layer;
                  }),
                  (t.prototype._isScaleRangeActive = function() {
                    return (
                      !!this._isScaleRangeLayer() &&
                      (this.layer.minScale > 0 || this.layer.maxScale > 0)
                    );
                  }),
                  (t.prototype._extentAndSizeAtResolution = function(e, t, r) {
                    var i = d.width(e) / d.height(e),
                      n = { width: r, height: r };
                    i > 1.0001
                      ? (n.height = r / i)
                      : i < 0.9999 && (n.width = r * i);
                    var a = this._clippedExtent(e, t, O);
                    return (
                      (n.width = Math.round(
                        n.width / (d.width(e) / d.width(a))
                      )),
                      (n.height = Math.round(
                        n.height / (d.height(e) / d.height(a))
                      )),
                      { size: n, extent: a }
                    );
                  }),
                  (t.prototype._clippedExtent = function(e, t, r) {
                    if ("local" !== this.view.viewingMode) return d.set(r, e);
                    var i = this.view.basemapTerrain,
                      n = i.extent;
                    return i.ready && n ? d.intersection(e, n, r) : d.set(r, e);
                  }),
                  (t.prototype._opacityChangeHandler = function(e) {
                    for (var t = 0, r = this._images; t < r.length; t++) {
                      var i = r[t];
                      i &&
                        i.material &&
                        i.material.setParameterValues({ opacity: e });
                    }
                    this.emit("draped-data-change");
                  }),
                  (t.prototype._layerRedrawHandler = function() {
                    for (var e = !1, t = 0; t < this._images.length; t++) {
                      var r = this._images[t];
                      this.updateImage(r) &&
                        ((e = !0), this._createStageObjects(t, r.image));
                    }
                    e && this.emit("draped-data-change");
                  }),
                  (t.prototype._suspendedChangeHandler = function() {
                    if (this.suspended)
                      this.clear(), this.emit("draped-data-change");
                    else
                      for (var e = 0; e < this._extents.length; e++)
                        this._fetch(e);
                  }),
                  i([s.property()], t.prototype, "layer", void 0),
                  i(
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
                  i(
                    [s.property({ type: Boolean })],
                    t.prototype,
                    "supportsDraping",
                    void 0
                  ),
                  i(
                    [s.property({ type: Boolean })],
                    t.prototype,
                    "hasDraped",
                    void 0
                  ),
                  i(
                    [s.property({ value: 0, type: Number })],
                    t.prototype,
                    "drawingOrder",
                    null
                  ),
                  i(
                    [s.property({ readOnly: !0 })],
                    t.prototype,
                    "fullExtentInLocalViewSpatialReference",
                    void 0
                  ),
                  i([s.property()], t.prototype, "overlayUpdating", void 0),
                  i(
                    [s.property({ dependsOn: ["overlayUpdating"] })],
                    t.prototype,
                    "updating",
                    void 0
                  ),
                  i([s.subclass("esri.views.3d.layers.DynamicLayerView3D")], t)
                );
              })(s.declared(p, w)),
              O = d.create();
            return _;
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
          (n = function(e, t, r, i, n, a, o, s, l, d, p, h) {
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
                r(t, e),
                (t.prototype.initialize = function() {
                  var e = this;
                  this.addResolvingPromise(this.layer),
                    this.when().catch(function(t) {
                      if ("layerview:create-error" !== t.name) {
                        var r = (e.layer && e.layer.id) || "no id",
                          i = (e.layer && e.layer.title) || "no title";
                        return (
                          l
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
                i([h.property()], t.prototype, "layer", void 0),
                i([h.property()], t.prototype, "parent", void 0),
                i(
                  [
                    h.property({
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
                    h.property({
                      type: Boolean,
                      dependsOn: ["suspended"],
                      readOnly: !0
                    })
                  ],
                  t.prototype,
                  "updating",
                  null
                ),
                i([h.property()], t.prototype, "view", void 0),
                i(
                  [h.property({ dependsOn: ["layer.visible"] })],
                  t.prototype,
                  "visible",
                  null
                ),
                i(
                  [
                    h.property({
                      dependsOn: ["layer.opacity", "parent.fullOpacity"]
                    })
                  ],
                  t.prototype,
                  "fullOpacity",
                  null
                ),
                i([h.subclass("esri.views.layers.LayerView")], t)
              );
            })(h.declared(n, a, s, d));
          }.apply(null, i)) || (e.exports = n);
    },
    2008: function(e, t, r) {
      var i, n;
      (i = [r.dj.c(e.i), t, r(2), r(0), r(3), r(1)]),
        void 0 ===
          (n = function(e, t, r, i, n, a) {
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
                i([a.property()], t.prototype, "layer", void 0),
                i(
                  [a.aliasOf("layer.refreshInterval")],
                  t.prototype,
                  "refreshInterval",
                  void 0
                ),
                i(
                  [a.property({ readOnly: !0 })],
                  t.prototype,
                  "refreshTimestamp",
                  void 0
                ),
                i([a.subclass("esri.layers.mixins.RefreshableLayerView")], t)
              );
            })(a.declared(n));
          }.apply(null, i)) || (e.exports = n);
    },
    2011: function(e, t, r) {
      var i, n;
      (i = [r.dj.c(e.i), t, r(2), r(0), r(9), r(26), r(1), r(416), r(2006)]),
        void 0 ===
          (n = function(e, t, r, i, n, a, o, s, l) {
            return (function(e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t.supportsHeightUnitConversion = !1), t;
              }
              return (
                r(t, e),
                (t.prototype.postscript = function(e) {
                  this.inherited(arguments),
                    s.mayHaveHeightModelInfo(this.layer) &&
                      this.addResolvingPromise(this._validateHeightModelInfo());
                }),
                (t.prototype._validateHeightModelInfo = function() {
                  var e = this;
                  return n.create(function(t, r) {
                    a.whenFalseOnce(
                      e.view.defaultsFromMap,
                      "isHeightModelInfoSearching",
                      function() {
                        var i = s.rejectLayerError(
                          e.layer,
                          e.view.heightModelInfo,
                          e.supportsHeightUnitConversion
                        );
                        i ? r(i) : t();
                      }
                    );
                  });
                }),
                i([o.property()], t.prototype, "view", void 0),
                i([o.subclass("esri.views.3d.layers.LayerView3D")], t)
              );
            })(o.declared(l));
          }.apply(null, i)) || (e.exports = n);
    },
    2027: function(e, t, r) {
      var i, n;
      (i = [r.dj.c(e.i), t, r(9), r(37), r(312)]),
        void 0 ===
          (n = function(e, t, r, i, n) {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.toViewIfLocal = function(e) {
                var t = e.view.spatialReference,
                  a = e.layer.fullExtent,
                  o = a && a.spatialReference;
                return o
                  ? o.equals(t)
                    ? r.resolve(a.clone())
                    : i.canProject(o, t)
                      ? r.resolve(i.project(a, t))
                      : e.view.state.isLocal
                        ? n
                            .projectGeometry(a, t, e.layer.portalItem)
                            .then(function(t) {
                              if (!e.destroyed && t) return t;
                            })
                            .catch(function() {
                              return null;
                            })
                        : r.resolve(null)
                  : r.resolve(null);
              });
          }.apply(null, i)) || (e.exports = n);
    },
    2045: function(e, t, r) {
      var i, n;
      (i = [r.dj.c(e.i), t, r(35), r(157), r(186), r(14)]),
        void 0 ===
          (n = function(e, t, r, i, n, a) {
            function o(e, t) {
              var r = [
                [e[0], e[1], t],
                [e[2], e[1], t],
                [e[2], e[3], t],
                [e[0], e[3], t]
              ];
              return n.createSquareGeometry(r);
            }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var s = new Float32Array([0, 0, 1]);
            (t.createGeometryForExtent = o),
              (t.createOuterImageGeometry = function(e, t, n) {
                if (!r.intersects(e, t)) return o(t, n);
                for (
                  var l = [
                      e[1] - t[1],
                      Math.min(e[3], t[3]) - Math.max(e[1], t[1]),
                      t[3] - e[3],
                      123456
                    ],
                    d = [
                      e[0] - t[0],
                      Math.min(e[2], t[2]) - Math.max(e[0], t[0]),
                      t[2] - e[2],
                      123456
                    ],
                    p = t[2] - t[0],
                    h = t[3] - t[1],
                    u = d[0] > 0 && d[2] > 0 ? 3 : 2,
                    c = l[0] > 0 && l[2] > 0 ? 3 : 2,
                    y = (c + 1) * (u + 1),
                    g = new Float32Array(3 * y),
                    f = new Float32Array(2 * y),
                    m = new Uint32Array(6 * (c * u - 1)),
                    v = 0,
                    w = 0,
                    x = 0,
                    _ = 0,
                    O = 0,
                    R = 0;
                  R < 4;
                  R++
                ) {
                  var b = l[R];
                  if (!(b <= 0)) {
                    for (var S = 0, L = 0; L < 4; L++) {
                      var I = d[L];
                      I <= 0 ||
                        ((g[w++] = t[0] + S),
                        (g[w++] = t[1] + v),
                        (g[w++] = n),
                        (f[x++] = S / p),
                        (f[x++] = v / h),
                        L < 3 &&
                          R < 3 &&
                          (1 !== L || 1 !== R) &&
                          ((m[O++] = _),
                          (m[O++] = _ + 1),
                          (m[O++] = _ + u + 1),
                          (m[O++] = _ + 1),
                          (m[O++] = _ + u + 2),
                          (m[O++] = _ + u + 1)),
                        _++,
                        (S += I));
                    }
                    v += b;
                  }
                }
                var M = {};
                (M[a.VertexAttrConstants.POSITION] = { size: 3, data: g }),
                  (M[a.VertexAttrConstants.NORMAL] = { size: 3, data: s }),
                  (M[a.VertexAttrConstants.UV0] = { size: 2, data: f });
                for (
                  var E = {}, D = new Uint32Array(m.length), T = 0;
                  T < D.length;
                  T++
                )
                  D[T] = 0;
                return (
                  (E[a.VertexAttrConstants.POSITION] = m),
                  (E[a.VertexAttrConstants.NORMAL] = D),
                  (E[a.VertexAttrConstants.UV0] = m),
                  new i(M, E)
                );
              });
          }.apply(null, i)) || (e.exports = n);
    }
  }
]),
  (function() {
    (this || window).webpackJsonp.registerAbsMids({
      "esri/views/3d/layers/DynamicLayerView3D": 1962,
      "esri/views/layers/LayerView": 2006,
      "esri/views/layers/RefreshableLayerView": 2008,
      "esri/views/3d/layers/LayerView3D": 2011,
      "esri/views/3d/layers/support/projectExtentUtils": 2027,
      "esri/views/3d/layers/support/overlayImageUtils": 2045
    });
  })();
