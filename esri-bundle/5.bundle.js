(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    1966: function(e, t, i) {
      var r, n;
      (r = [
        i.dj.c(e.i),
        t,
        i(2),
        i(0),
        i(13),
        i(3),
        i(10),
        i(53),
        i(17),
        i(11),
        i(180),
        i(9),
        i(1),
        i(84),
        i(2093),
        i(2060)
      ]),
        void 0 ===
          (n = function(e, t, i, r, n, a, s, o, h, u, l, d, c, p, y, f) {
            var g = u.getLogger(
              "esri.layers.graphics.controllers.SnapshotController"
            );
            return (function(e) {
              function t(t) {
                var i = e.call(this) || this;
                return (
                  (i.type = "snapshot"),
                  (i._gManager = null),
                  (i._verticalScale = null),
                  (i._handles = new h()),
                  (i._source = null),
                  (i._started = !1),
                  (i._pendingQueries = new Map()),
                  (i.extent = null),
                  (i.hasAllFeatures = !1),
                  (i.hasFeatures = !1),
                  (i.layer = null),
                  (i.layerView = null),
                  (i.maxPageSize = null),
                  (i.defaultReturnZ = void 0),
                  (i.defaultReturnM = void 0),
                  (i.pageSize = null),
                  (i.paginationEnabled = !1),
                  i
                );
              }
              return (
                i(t, e),
                (t.prototype.initialize = function() {
                  var e = this,
                    t = this.layer
                      .when(function() {
                        return e._verifyCapabilities();
                      })
                      .then(function() {
                        return e._init();
                      });
                  this.addResolvingPromise(t);
                }),
                (t.prototype.destroy = function() {
                  this.cancelQuery(),
                    this._gManager &&
                      (this._gManager.destroy(), (this._gManager = null)),
                    this._handles.destroy(),
                    (this._handles = null),
                    (this._pendingQueries = null);
                }),
                Object.defineProperty(t.prototype, "updating", {
                  get: function() {
                    return !!(
                      this._pendingQueries && this._pendingQueries.size > 0
                    );
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(t.prototype, "graphics", {
                  set: function(e) {
                    var t = this._get("graphics");
                    t !== e &&
                      (this._handles.remove("graphics"),
                      e &&
                        (this._collectionChanged({
                          added: e.toArray(),
                          removed: t && t.toArray()
                        }),
                        this._handles.add(
                          e.on("change", this._collectionChanged.bind(this)),
                          "graphics"
                        )),
                      this._set("graphics", e));
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (t.prototype.cancelQuery = function() {
                  var e = this;
                  this._pendingQueries &&
                    (this._pendingQueries.forEach(function(t, i) {
                      t.isFulfilled() || t.cancel(new Error(e._cancelErrorMsg));
                    }),
                    this._pendingQueries.clear(),
                    this.notifyChange("updating"));
                }),
                (t.prototype.refresh = function() {
                  this.isResolved() && this._started && this._queryFeatures();
                }),
                (t.prototype.startup = function() {
                  this._started ||
                    ((this._started = !0),
                    (this._resolutionParams = this._getResolutionParams()),
                    this._queryFeatures());
                }),
                (t.prototype.update = function() {
                  this.startup();
                }),
                (t.prototype._init = function() {
                  var e = this.layer;
                  (this.paginationEnabled = !!e.get(
                    "capabilities.query.supportsPagination"
                  )),
                    (this._source = e.source);
                  var t = e.maxRecordCount || 4e3;
                  (this.pageSize =
                    null == this.maxPageSize
                      ? t
                      : Math.min(t, this.maxPageSize)),
                    (this._gManager = new y({
                      graphics: this.graphics,
                      objectIdField: e.objectIdField
                    })),
                    (this._verticalScale = new f({
                      sourceSpatialReference: e.spatialReference,
                      destSpatialReference: this.layerView.view.spatialReference
                    })),
                    this._setupStateWatchers();
                }),
                (t.prototype._getResolutionParams = function() {
                  var e,
                    t = this.layer,
                    i = t.get("capabilities.query.supportsQuantization");
                  if (
                    "polyline" === t.geometryType ||
                    "polygon" === t.geometryType
                  ) {
                    var r = p.getMetersPerUnit(
                      this.layerView.view.spatialReference
                    );
                    if (null == r);
                    else {
                      var n = this._featureResolution.scale,
                        a = this._featureResolution.value / r;
                      (n = t.maxScale
                        ? t.maxScale
                        : t.minScale
                          ? Math.min(n, t.minScale)
                          : Math.min(
                              n,
                              p.getScale(this.layerView.view, t.fullExtent)
                            )),
                        (e = (a / this._featureResolution.scale) * n);
                    }
                  }
                  return e
                    ? {
                        maxAllowableOffset: i ? null : e,
                        quantizationParameters: i
                          ? {
                              mode: "view",
                              originPosition: "upperLeft",
                              tolerance: e,
                              extent: t.fullExtent
                            }
                          : null
                      }
                    : null;
                }),
                (t.prototype._setupStateWatchers = function() {
                  var e = this;
                  this._handles.add([
                    this.watch("extent", this.refresh.bind(this)),
                    this.layer.watch("outFields", function(t, i) {
                      if (t && i) {
                        if (-1 !== i.indexOf("*")) return;
                        t.sort(),
                          i.sort(),
                          JSON.stringify(t) !== JSON.stringify(i) &&
                            e.refresh();
                      } else e.refresh();
                    }),
                    this.layer.watch(
                      "definitionExpression, historicMoment",
                      this.refresh.bind(this)
                    ),
                    this.layer.on("edits", this._editsHandler.bind(this))
                  ]);
                }),
                (t.prototype._createQueryParams = function() {
                  var e = this.layer,
                    t = this.layerView,
                    i = e.createQuery();
                  (i.outSpatialReference = t.view.spatialReference),
                    (i.geometry = this.extent);
                  var r = e.capabilities && e.capabilities.data;
                  return (
                    r &&
                      r.supportsZ &&
                      null == i.returnZ &&
                      null != this.defaultReturnZ &&
                      (i.returnZ = this.defaultReturnZ),
                    r &&
                      r.supportsM &&
                      null == i.returnM &&
                      null != this.defaultReturnM &&
                      (i.returnM = this.defaultReturnM),
                    i.set(this._resolutionParams),
                    this.paginationEnabled &&
                      ((i.start = 0), (i.num = this.pageSize)),
                    i
                  );
                }),
                (t.prototype._queryFeatures = function() {
                  this.cancelQuery(),
                    (this.hasAllFeatures = this.hasFeatures = !1),
                    this._gManager.beginPagedUpdate(),
                    this.emit("query-start"),
                    this._executeQuery(this._createQueryParams());
                }),
                (t.prototype._executeQuery = function(e) {
                  var t = this,
                    i = this._source.queryFeatures(e),
                    r = this._gManager.createIntentToAdd();
                  this._querySetup(r, i),
                    i
                      .then(this._processFeatureSet.bind(this, e, r))
                      .catch(function(e) {
                        return t._queryError(r, e);
                      })
                      .always(function() {
                        return t._queryTeardown(r);
                      });
                }),
                (t.prototype._processFeatureSet = function(e, t, i) {
                  var r = i.exceededTransferLimit,
                    n = i.features,
                    a = this._maxFeatures[this.layer.geometryType] || 0,
                    s = n ? n.length : 0,
                    o = this._gManager.numGraphics + s,
                    h = o >= a;
                  if (h) {
                    g.warn(
                      'Feature limit exceeded on layer "',
                      this.layer.title,
                      '". Not all features are shown.'
                    );
                    var u = o - a;
                    u && n.splice(s - u, u);
                  }
                  var l =
                    !(!r || !this.paginationEnabled || h) &&
                    this._queryNextPage(e);
                  return (
                    this._verticalScale.adjust(n),
                    n && this._gManager.addPage(n, t),
                    (this.hasFeatures = !0),
                    l ||
                      (this._gManager.endPagedUpdate(),
                      (this.hasAllFeatures = !r),
                      this.emit("query-end", { success: !0 })),
                    i
                  );
                }),
                (t.prototype._queryNextPage = function(e) {
                  return (e.start += this.pageSize), this._executeQuery(e), !0;
                }),
                (t.prototype._queryError = function(e, t) {
                  if (
                    (t && "cancel" === t.dojoType && !this.hasFeatures
                      ? this._gManager.revertPagedUpdate()
                      : this._gManager.endPagedUpdate(),
                    this.emit("query-end", { success: !1 }),
                    t && "cancel" === t.dojoType)
                  )
                    return d.reject(t);
                  var i = new s(
                    "snapshotcontroller:tile-request-failed",
                    "Failed to query for features",
                    { error: t }
                  );
                  return g.error(i), d.reject(i);
                }),
                (t.prototype._querySetup = function(e, t) {
                  this._pendingQueries.set(e, t), this.notifyChange("updating");
                }),
                (t.prototype._queryTeardown = function(e) {
                  this._gManager.removeIntent(e),
                    this._pendingQueries.delete(e),
                    this.notifyChange("updating");
                }),
                (t.prototype._processRefetch = function(e, t) {
                  var i = t.features;
                  i && this._gManager.add(i, e);
                }),
                (t.prototype._refetchError = function(e, t) {}),
                (t.prototype._verifyCapabilities = function() {
                  if (!this.layer.get("capabilities.operations.supportsQuery"))
                    throw new s(
                      "graphicscontroller:query-capability-required",
                      "Service requires query capabilities to be used as a feature layer",
                      { layer: this.layer }
                    );
                }),
                (t.prototype._collectionChanged = function(e) {
                  var t = e.added;
                  if (t)
                    for (var i = 0; i < t.length; i++)
                      (t[i].layer = this.layer),
                        (t[i].sourceLayer = this.layer);
                  if ((t = e.removed))
                    for (i = 0; i < t.length; i++)
                      (t[i].layer = null), (t[i].sourceLayer = null);
                }),
                (t.prototype._editsHandler = function(e) {
                  var t = function(e) {
                      return e.objectId;
                    },
                    i = e.deletedFeatures.map(t);
                  this._gManager.delete(i);
                  var r = e.addedFeatures.concat(e.updatedFeatures).map(t);
                  if (r.length) {
                    var n = this._createQueryParams();
                    n.objectIds = r;
                    var a = this._source.queryFeatures(n),
                      s = this._gManager.createIntentToAdd(r);
                    this._querySetup(s, a),
                      a
                        .then(this._processRefetch.bind(this, s))
                        .catch(this._refetchError.bind(this, s))
                        .always(this._queryTeardown.bind(this, s));
                  }
                }),
                r(
                  [c.shared("SnapshotController: query cancelled")],
                  t.prototype,
                  "_cancelErrorMsg",
                  void 0
                ),
                r([c.property({ readOnly: !0 })], t.prototype, "type", void 0),
                r(
                  [c.shared({ value: 0.25, scale: 945 })],
                  t.prototype,
                  "_featureResolution",
                  void 0
                ),
                r(
                  [
                    c.shared({
                      point: 16e3,
                      multipoint: 8e3,
                      polyline: 4e3,
                      polygon: 4e3,
                      multipatch: 4e3
                    })
                  ],
                  t.prototype,
                  "_maxFeatures",
                  void 0
                ),
                r([c.property()], t.prototype, "_pendingQueries", void 0),
                r(
                  [c.property({ dependsOn: ["_pendingQueries"] })],
                  t.prototype,
                  "updating",
                  null
                ),
                r([c.property()], t.prototype, "graphics", null),
                r([c.property()], t.prototype, "extent", void 0),
                r([c.property()], t.prototype, "hasAllFeatures", void 0),
                r([c.property()], t.prototype, "hasFeatures", void 0),
                r([c.property()], t.prototype, "layer", void 0),
                r([c.property()], t.prototype, "layerView", void 0),
                r([c.property()], t.prototype, "maxPageSize", void 0),
                r([c.property()], t.prototype, "defaultReturnZ", void 0),
                r([c.property()], t.prototype, "defaultReturnM", void 0),
                r([c.property()], t.prototype, "pageSize", void 0),
                r([c.property()], t.prototype, "paginationEnabled", void 0),
                r(
                  [
                    c.subclass(
                      "esri.layers.graphics.controllers.SnapshotController"
                    )
                  ],
                  t
                )
              );
            })(c.declared(a, l, o));
          }.apply(null, r)) || (e.exports = n);
    },
    2060: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t, i(84), i(85)]),
        void 0 ===
          (n = function(e, t, i, r) {
            return (function() {
              function e(e) {
                (this.sourceSpatialReference = e.sourceSpatialReference),
                  (this.destSpatialReference = e.destSpatialReference);
              }
              return (
                (e.prototype.adjust = function(e) {
                  var t = this._getVerticalUnitScale();
                  1 !== t && this._scaleVerticalUnits(e, t);
                }),
                (e.prototype._getVerticalUnitScale = function() {
                  return this.sourceSpatialReference &&
                    !this.sourceSpatialReference.equals(
                      this.destSpatialReference
                    )
                    ? i.getMetersPerVerticalUnitForSR(
                        this.sourceSpatialReference
                      ) /
                        i.getMetersPerVerticalUnitForSR(
                          this.destSpatialReference
                        )
                    : 1;
                }),
                (e.prototype._vertexListsScaleZ = function(e, t) {
                  for (var i = 0; i < e.length; ++i)
                    for (var r = e[i], n = 0; n < r.length; ++n) {
                      r[n][2] *= t;
                    }
                }),
                (e.prototype._scaleVerticalUnits = function(e, t) {
                  for (var i = 0; i < e.length; ++i) {
                    var n = e[i].geometry;
                    n &&
                      r.hasZ(n) &&
                      (this._geometryIsPoint(n)
                        ? null !== n.z && (n.z *= t)
                        : this._geometryIsPolyline(n)
                          ? this._vertexListsScaleZ(n.paths, t)
                          : this._geometryIsPolygon(n) &&
                            this._vertexListsScaleZ(n.rings, t));
                  }
                }),
                (e.prototype._geometryIsPoint = function(e) {
                  return "point" === e.type;
                }),
                (e.prototype._geometryIsPolygon = function(e) {
                  return "polygon" === e.type;
                }),
                (e.prototype._geometryIsPolyline = function(e) {
                  return "polyline" === e.type;
                }),
                e
              );
            })();
          }.apply(null, r)) || (e.exports = n);
    },
    2093: function(e, t, i) {
      var r, n;
      (r = [i(3)]),
        void 0 ===
          (n = function(e) {
            var t = 0;
            return e.createSubclass({
              constructor: function() {
                (this._deletedGraphicsIndex = new Set()),
                  (this._intentsIndex = new Map());
              },
              destroy: function() {
                this.removeAll(),
                  (this._deletedGraphicsIndex = null),
                  (this._intentsIndex = null);
              },
              properties: {
                graphics: null,
                indexById: {
                  value: null,
                  dependsOn: ["graphics", "objectIdField"],
                  get: function() {
                    return this._createIndexById(
                      this.graphics && this.graphics.toArray(),
                      this.objectIdField
                    );
                  }
                },
                numGraphics: {
                  value: 0,
                  dependsOn: ["indexById"],
                  get: function() {
                    return this.indexById ? this.indexById.size : 0;
                  }
                },
                objectIdField: null,
                updating: {
                  value: !1,
                  dependsOn: ["_intentsIndex"],
                  get: function() {
                    return !!(
                      this._intentsIndex && this._intentsIndex.size > 0
                    );
                  }
                },
                _intentsIndex: { value: null }
              },
              _oldIndex: null,
              _deletedGraphicsIndex: null,
              beginPagedUpdate: function() {
                (this._oldIndex = this.indexById),
                  (this.indexById = null),
                  this.notifyChange("numGraphics");
              },
              addPage: function(e, t) {
                this.add(e, t);
              },
              revertPagedUpdate: function() {
                var e = this._removeLeftOnly(this.indexById, this._oldIndex);
                (this.indexById = this._oldIndex),
                  (this._oldIndex = null),
                  this.graphics.removeMany(e),
                  this.notifyChange("numGraphics");
              },
              endPagedUpdate: function() {
                var e = this._removeLeftOnly(this._oldIndex, this.indexById);
                (this._oldIndex = null),
                  this.graphics.removeMany(e),
                  this.notifyChange("numGraphics");
              },
              findGraphic: function(e) {
                var t = this.indexById && this.indexById.get(e);
                return t && t.graphic;
              },
              removeAll: function() {
                (this.indexById = this._oldIndex = null),
                  this.graphics.removeAll(),
                  this.notifyChange("numGraphics");
              },
              add: function(e, t) {
                if (e && e.length) {
                  for (
                    var i = this.objectIdField,
                      r = (this.indexById = this.indexById || new Map()),
                      n = this._oldIndex,
                      a = this._createIndexById(e, i),
                      s = this._extractObjectIds(a),
                      o = this._extractObjectIds(r),
                      h = this._extractObjectIds(n),
                      u = o.concat(h),
                      l = [],
                      d = u.length,
                      c = 0;
                    c < d;
                    c++
                  ) {
                    var p = u[c];
                    s.indexOf(p) > -1 && l.push(p);
                  }
                  l.length && this._remove(l, !1);
                  var y = this.findIntent(t),
                    f = new Map(),
                    g = e.length;
                  for (c = 0; c < g; c++) {
                    var _ = e[c];
                    _ && _.attributes && f.set(_.attributes[i], y);
                  }
                  e.length && this._add(e, f);
                }
              },
              remove: function(e) {
                this._remove(e, !1);
              },
              delete: function(e) {
                this._remove(e, !0);
              },
              isDeleted: function(e) {
                return this._deletedGraphicsIndex.has(e);
              },
              createIntentToAdd: function(e) {
                e &&
                  this._intentsIndex.forEach(function(t, i) {
                    e.forEach(function(e) {
                      t.ignoredIds.add(e);
                    });
                  }, this);
                var i = t++;
                return (
                  this._intentsIndex.set(i, { ignoredIds: new Set() }),
                  this.notifyChange("updating"),
                  i
                );
              },
              findIntent: function(e) {
                return this._intentsIndex.get(e);
              },
              removeIntent: function(e) {
                this._intentsIndex.delete(e), this.notifyChange("updating");
              },
              update: function(e, t) {
                if (e && e.length) {
                  for (
                    var i = this.objectIdField,
                      r = (this.indexById = this.indexById || new Map()),
                      n = this._oldIndex,
                      a = this._createIndexById(e, i),
                      s = this._extractObjectIds(a),
                      o = this._extractObjectIds(r),
                      h = this._extractObjectIds(n),
                      u = o.concat(h),
                      l = [],
                      d = u.length,
                      c = 0;
                    c < d;
                    c++
                  ) {
                    var p = u[c];
                    if (-1 === s.indexOf(p)) l.push(p);
                    else {
                      var y = r.get(p) || n.get(p),
                        f = y && y.graphic && y.graphic._ts,
                        g = a.get(p);
                      (g && g.graphic && g.graphic._ts) > f && l.push(p);
                    }
                  }
                  var _ = [],
                    v = s.length;
                  for (c = 0; c < v; c++) {
                    p = s[c];
                    (-1 === u.indexOf(p) || l.indexOf(p) > -1) && _.push(p);
                  }
                  l.length && this._remove(l, !1),
                    _.length && this._add(this._extractGraphics(_, a), t);
                }
              },
              _createIndexById: function(e, t) {
                var i, r, n, a;
                if (e && e.length && t)
                  for (i = new Map(), r = 0; (n = e[r]); r++)
                    null != (a = n.attributes && n.attributes[t]) &&
                      i.set(a, { graphic: n, refCount: 1 });
                return i;
              },
              _add: function(e, t) {
                var i = this.objectIdField;
                e.forEach(function(e) {
                  var r = e.attributes && e.attributes[i],
                    n = t.get(r);
                  this._addToIndex(e, this.indexById, n);
                }, this),
                  this.graphics.addMany(e),
                  this.notifyChange("numGraphics");
              },
              _addToIndex: function(e, t, i) {
                var r = e.attributes && e.attributes[this.objectIdField];
                if (t && null != r)
                  if (t.has(r)) {
                    if (!i || !i.ignoredIds.has(r)) {
                      var n = t.get(r);
                      t.set(r, { graphic: e, refCount: n.refCount + 1 });
                    }
                  } else
                    this.isDeleted(r) || t.set(r, { graphic: e, refCount: 1 });
              },
              _remove: function(e, t) {
                var i;
                i =
                  "object" == typeof (e = e || [])[0]
                    ? e.map(
                        function(e) {
                          return (
                            e.attributes && e.attributes[this.objectIdField]
                          );
                        }.bind(this)
                      )
                    : e;
                var r = this._extractGraphics(i, this._oldIndex),
                  n = this._extractGraphics(i, this.indexById);
                i.forEach(
                  function(e) {
                    t && this._deletedGraphicsIndex.add(e),
                      this._removeFromIndex(e, this._oldIndex, t),
                      this._removeFromIndex(e, this.indexById, t);
                  }.bind(this)
                ),
                  this.graphics.removeMany(r.concat(n)),
                  this.notifyChange("numGraphics");
              },
              _removeFromIndex: function(e, t, i) {
                if (t && t.has(e))
                  if (i) t.delete(e);
                  else {
                    var r = t.get(e),
                      n = r.refCount - 1;
                    0 === n ? t.delete(e) : (r.refCount = n);
                  }
              },
              _removeLeftOnly: function(e, t) {
                var i = [];
                return (
                  e &&
                    e.forEach(function(r, n) {
                      var a = r.graphic;
                      !a ||
                        (t && t.has(n)) ||
                        ((r.refCount = r.refCount - 1),
                        0 === r.refCount && e.delete(n),
                        i.push(a));
                    }),
                  i
                );
              },
              _extractGraphics: function(e, t) {
                return e && t
                  ? e.map(function(e) {
                      var i = t.get(e);
                      return i && i.graphic;
                    })
                  : [];
              },
              _extractObjectIds: function(e) {
                var t = [];
                return (
                  e &&
                    e.forEach(function(e, i) {
                      t.push(i);
                    }),
                  t
                );
              }
            });
          }.apply(null, r)) || (e.exports = n);
    }
  }
]),
  (function() {
    (this || window).webpackJsonp.registerAbsMids({
      "esri/layers/graphics/controllers/SnapshotController": 1966,
      "esri/views/3d/layers/graphics/Graphics3DVerticalScale": 2060,
      "esri/layers/support/GraphicsManager": 2093
    });
  })();
