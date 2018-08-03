(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
  {
    1968: function(e, t, r) {
      var i, s;
      (i = [
        r(44),
        r(34),
        r(3),
        r(180),
        r(24),
        r(17),
        r(53),
        r(9),
        r(10),
        r(2192),
        r(43),
        r(51),
        r(135)
      ]),
        void 0 ===
          (s = function(e, t, r, i, s, n, a, o, h, u, l, c, d) {
            return e([r, i, a], {
              declaredClass:
                "esri.layers.graphics.controllers.StreamController",
              constructor: function() {
                (this._addFeatures = this._addFeatures.bind(this)),
                  (this._handleMessage = this._handleMessage.bind(this)),
                  (this._handles = new n()),
                  (this._nextId = 0);
              },
              initialize: function() {
                var e = this.layer
                  .when(
                    function() {
                      var e = s.ofType(l);
                      return (
                        (this.source = this.layer.source),
                        (this.graphics = this.graphics || new e()),
                        this._initializeFilter(),
                        new u(this).when()
                      );
                    }.bind(this)
                  )
                  .then(
                    function(e) {
                      return (this.purger = e), this._makeConnection();
                    }.bind(this)
                  )
                  .catch(
                    function(e) {
                      throw new h(
                        "stream-controller:initialize",
                        "Error during initialization process",
                        e.message
                      );
                    }.bind(this)
                  );
                this.addResolvingPromise(e);
              },
              destroy: function() {
                this.connection &&
                  (this.connection.disconnect(), this._set("connection", null)),
                  this.purger && (this.purger.destroy(), (this.purger = null)),
                  (this.graphics = null),
                  this._handles &&
                    (this._handles.destroy(), (this._handles = null));
              },
              properties: {
                connection: { readOnly: !0, value: null },
                graphics: {
                  type: s.ofType(l),
                  set: function(e) {
                    this._get("graphics") !== e &&
                      (this._handles.remove("graphics"),
                      e &&
                        (this._collectionChanged({ added: e.toArray() }),
                        this._handles.add(
                          e.on("change", this._collectionChanged.bind(this)),
                          "graphics"
                        )),
                      this._set("graphics", e));
                  }
                },
                layerView: {},
                type: { readOnly: !0, value: "stream" },
                filter: {
                  value: { geometry: null, where: null },
                  readOnly: !0
                },
                definitionExpression: {
                  value: null,
                  get: function() {
                    return (
                      console.warn(
                        "StreamController.definitionExpression is deprecated. Access the filter.where property"
                      ),
                      this.filter.where
                    );
                  },
                  set: function(e) {
                    console.warn(
                      "StreamController.definitionExpression is deprecated. Use the updateFilter method to change the attribute filter"
                    );
                    var t = { where: e };
                    this.updateFilter(t);
                  }
                },
                geometryDefinition: {
                  value: null,
                  get: function() {
                    return (
                      console.warn(
                        "StreamController.geometryDefinition is deprecated. Access the filter.geometry property"
                      ),
                      this.filter.geometry
                    );
                  },
                  set: function(e) {
                    console.warn(
                      "StreamController.geometryDefinition is deprecated. Use the updateFilter method to change the spatial filter"
                    );
                    var t = { geometry: e };
                    this.updateFilter(t);
                  }
                },
                layer: { value: {} },
                purger: {
                  set: function(e) {
                    this._get("purger") !== e && this._set("purger", e);
                  }
                },
                updating: {
                  value: !1,
                  readOnly: !0,
                  dependsOn: ["connection", "connection.connectionStatus"],
                  get: function() {
                    return (
                      !this.connection ||
                      "connected" === this.connection.connectionStatus
                    );
                  }
                }
              },
              updateFilter: function(e) {
                return this._filterValid(e)
                  ? this._filterChanged(e)
                    ? this._setFilter(e)
                    : o.resolve({ filter: this.filter })
                  : o.reject(
                      new Error(
                        "Invalid properties in filter. geometry must be an extent and where must be a string"
                      )
                    );
              },
              _makeConnection: function() {
                return (
                  this._handles.remove("websocket"),
                  this._addBuddiedServiceFeatures(!0)
                    .then(
                      function() {
                        return this._addBuddiedServiceFeatures(!1);
                      }.bind(this),
                      function(e) {
                        return o.reject(
                          new Error(
                            "Error fetching related features. Layer cannot be created"
                          )
                        );
                      }.bind(this)
                    )
                    .then(
                      function(e) {
                        var t = this.layerView.view.spatialReference;
                        return this.source.createWebSocketConnector(t);
                      }.bind(this)
                    )
                    .then(
                      function(e) {
                        return (
                          this._set("connection", e),
                          this._handles.add(
                            e.on(
                              "data-received",
                              function(e) {
                                this._handleMessage(e);
                              }.bind(this)
                            ),
                            "websocket"
                          ),
                          e.connect()
                        );
                      }.bind(this)
                    )
                );
              },
              _handleMessage: function(e) {
                var t,
                  r = JSON.parse(e);
                this.emit("data-received", r),
                  r.filter ||
                    ((t = r instanceof Array ? r : [r]), this._addFeatures(t));
              },
              _addFeatures: function(e) {
                if (e) {
                  for (
                    var t = this.layer.objectIdField,
                      r = [],
                      i = 0,
                      s = e.length;
                    i < s;
                    i++
                  ) {
                    var n,
                      a = e[i];
                    !a.geometry ||
                      (a.geometry.hasOwnProperty("x") && !a.geometry.x) ||
                      ((a.attributes &&
                        (a.attributes[t] || 0 === a.attributes[t])) ||
                        ((a.attributes = a.attributes || {}),
                        (a.attributes[t] = this._nextId++)),
                      (n = a.declaredClass ? a : l.fromJSON(a)),
                      r.push(n));
                  }
                  this.purger.addMany(r);
                }
              },
              _collectionChanged: function(e) {
                var t, r, i;
                if ((i = e.added))
                  for (t = 0; (r = i[t]); t++)
                    (r.layer = this.layer), (r.sourceLayer = this.layer);
                if ((i = e.removed))
                  for (t = 0; (r = i[t]); t++)
                    (r.layer = null), (r.sourceLayer = null);
              },
              _initializeFilter: function() {
                var e = this.layer;
                e &&
                  e.filter &&
                  this._set("filter", {
                    where: e.filter.where || null,
                    geometry: e.filter.geometry || null
                  }),
                  this._handles.add(
                    this.watch(
                      "layer.filter",
                      function(e) {
                        this._setFilter(e);
                      }.bind(this)
                    )
                  );
              },
              _filterChanged: function(e) {
                var t,
                  r = !1,
                  i = !1;
                return (
                  (t = e
                    ? this.source.makeFilter(e)
                    : { geometry: null, where: null }).hasOwnProperty(
                    "geometry"
                  ) &&
                    (r = t.geometry
                      ? !t.geometry.equals(this.filter.geometry)
                      : t.geometry !== this.filter.geometry),
                  t.hasOwnProperty("where") &&
                    (i = t.where !== this.filter.where),
                  r || i
                );
              },
              _filterValid: function(e) {
                var t = !0;
                return (
                  e &&
                    (e.hasOwnProperty("geometry") &&
                      e.geometry &&
                      ((e.geometry.type && "extent" === e.geometry.type) ||
                        (t = !1)),
                    t &&
                      e.hasOwnProperty("where") &&
                      e.where &&
                      "string" != typeof e.where &&
                      (t = !1)),
                  t
                );
              },
              _setFilter: function(e) {
                var r = null,
                  i = new t();
                e &&
                  ((r = this.source.makeFilter(e)).geometry &&
                    "string" != typeof r.geometry &&
                    (r.geometry = r.geometry.toJSON
                      ? JSON.stringify(r.geometry.toJSON())
                      : JSON.stringify(r.geometry)));
                var s = { filter: r },
                  n = this.connection.on(
                    "data-received",
                    function(e) {
                      if ((e = JSON.parse(e)).hasOwnProperty("filter")) {
                        n.remove();
                        var t = this._processFilterMessage(e);
                        t.error
                          ? i.reject(t.error)
                          : i.resolve({ filter: this.filter });
                      }
                    }.bind(this)
                  );
                return this.connection.send(s), i.promise;
              },
              _processFilterMessage: function(e) {
                var t,
                  r,
                  i = {};
                return (
                  e.error
                    ? ((i.error = new Error(e.error.join(","))),
                      (i.filter = {
                        where: this.filter.where,
                        geometry: this.filter.geometry
                      }))
                    : ((e.filter = e.filter || {}),
                      (t = e.filter.geometry) &&
                        ("string" == typeof t && (t = JSON.parse(t)),
                        (t = c.fromJSON(t))),
                      (r = {
                        where: e.filter.where || null,
                        geometry: t || null
                      }),
                      this._set("filter", r),
                      this.notifyChange("geometryDefinition"),
                      this.notifyChange("definitionExpression"),
                      (i.filter = r)),
                  i
                );
              },
              _addBuddiedServiceFeatures: function(e) {
                var t, r, i;
                if (e) {
                  if (!this.source.relatedFeaturesInfo) return o.resolve();
                  (t = this.source.relatedFeaturesQueryTask),
                    (r = this.source.relatedLayerDefinition),
                    (i = this._createQuery(r, !0));
                } else {
                  if (!this.source.latestUrl) return o.resolve();
                  (t = this.source.latestQueryTask),
                    (r = this.source.archivedLayerDefinition),
                    (i = this._createQuery(r, !1));
                }
                return (
                  !!(r.advancedQueryCapabilities || {}).supportsPagination &&
                    (i.num = r.maxRecordCount),
                  this._query({ query: i, queryTask: t }).then(
                    function(e) {
                      if (e) {
                        var t = this._fixFieldNameCasing(this.source.layer, e);
                        (e.features = t), this._addFeatures(e.features);
                      }
                      return o.resolve();
                    }.bind(this),
                    function(e) {
                      return o.reject(e);
                    },
                    function(e) {
                      e && this._addFeatures(e.features);
                    }.bind(this)
                  )
                );
              },
              _query: function(e) {
                var r = e.query,
                  i = e.queryTask,
                  s = new t();
                r.num && (r.start = 0);
                var n = function(e) {
                    (e || 0 === e) && (r.start = e),
                      i.execute(r).then(a, function(e) {
                        s.reject(e);
                      });
                  },
                  a = function(e) {
                    e.exceededTransferLimit && r.num
                      ? (n(r.start + r.num), s.progress(e))
                      : s.resolve(e);
                  };
                return n(r.start), s.promise;
              },
              _createQuery: function(e, t) {
                var r,
                  i = this.layer,
                  s = this.layerView;
                if (!e)
                  return new d({
                    where: "1=1",
                    returnGeometry: !0,
                    outFields: ["*"]
                  });
                r = (r = t
                  ? this.source.relatedFeaturesInfo &&
                    this.source.relatedFeaturesInfo.outFields
                  : i.outFields)
                  ? r.slice(0)
                  : ["*"];
                var n = this.filter.where || "1=1";
                if (t) {
                  var a = this._getFieldsNotShared(e, this.layer.fields);
                  (r = this._removeInvalidOutfields(a, r)),
                    "1=1" !== n &&
                      this._checkForInvalidFieldInWhere(a, n) &&
                      (n = "1=1");
                }
                return (
                  (r = this._addObjectIdFieldToOutfields(e, r)),
                  new d({
                    where: n,
                    geometry: this.filter.geometry,
                    outFields: r,
                    outSpatialReference: s.view.spatialReference,
                    returnGeometry: !0
                  })
                );
              },
              _addObjectIdFieldToOutfields: function(e, t) {
                if ("*" !== (t = t || ["*"])[0]) {
                  var r = this._getObjectIdFieldName(e);
                  r &&
                    (t.some(function(e) {
                      return e.toLowerCase() === r.toLowerCase();
                    }) ||
                      t.push(r));
                }
                return t;
              },
              _removeInvalidOutfields: function(e, t) {
                var r;
                return (
                  "*" !== (t = t || ["*"])[0] &&
                    (r = t.filter(function(t) {
                      if (-1 === e.indexOf(t)) return t;
                    })),
                  r && 0 !== r.length ? r : ["*"]
                );
              },
              _checkForInvalidFieldInWhere: function(e, t) {
                return (
                  !(!t || "1=1" === t) &&
                  e.some(function(e) {
                    return new RegExp("\\s*" + e + "\\b", "i").test(t);
                  })
                );
              },
              _getObjectIdFieldName: function(e) {
                var t = null;
                return (
                  e.fields.some(function(e) {
                    return "esriFieldTypeOID" === e.type && ((t = e.name), !0);
                  }),
                  t
                );
              },
              _getFieldsNotShared: function(e, t) {
                var r = e.fields.map(function(e) {
                    return e.name.toLowerCase();
                  }),
                  i = [];
                return (
                  t.forEach(function(e) {
                    var t = e.name;
                    -1 === r.indexOf(t.toLowerCase()) && i.push(t);
                  }),
                  i
                );
              },
              _fixFieldNameCasing: function(e, t) {
                var r,
                  i,
                  s = [];
                if (!e)
                  throw new Error(
                    "streamLayer is a required argument for _fixFieldNameCasingmethod"
                  );
                if (
                  (e && (r = e.fields),
                  t && ((s = t.features || []), (i = t.fields)),
                  !i || !s.length || !r)
                )
                  return s;
                for (
                  var n,
                    a,
                    o = this._mapFieldNameDifferences(r, i),
                    h = [],
                    u = 0,
                    l = t.features.length;
                  u < l;
                  u++
                )
                  (n = s[u]),
                    (a = this._swizzleResponseAttributes(n.attributes, o)),
                    (n.attributes = a),
                    h.push(n);
                return h;
              },
              _mapFieldNameDifferences: function(e, t) {
                var r,
                  i,
                  s = [],
                  n = {};
                for (e = e || [], r = 0, i = (t = t || []).length; r < i; r++)
                  s.push(t[r].name);
                for (r = 0, i = e.length; r < i; r++) {
                  var a = e[r].name,
                    o = this._checkForStreamFieldName(a, s);
                  o && (n[o] = a);
                }
                return n;
              },
              _checkForStreamFieldName: function(e, t) {
                var r, i, s;
                if (t && t.length) {
                  if (e && e.toLowerCase) {
                    r = e.toLowerCase();
                    for (var n = 0, a = t.length; n < a; n++)
                      if ((i = t[n]).toLowerCase && i.toLowerCase() === r) {
                        s = i;
                        break;
                      }
                  }
                  return s;
                }
              },
              _swizzleResponseAttributes: function(e, t) {
                var r = {};
                for (var i in e)
                  if (e.hasOwnProperty(i)) {
                    var s = e[i];
                    t.hasOwnProperty(i) ? (r[t[i]] = s) : (r[i] = s);
                  }
                return r;
              }
            });
          }.apply(null, i)) || (e.exports = s);
    },
    2192: function(e, t, r) {
      var i, s;
      (i = [r(44), r(4), r(9), r(3), r(180), r(34)]),
        void 0 ===
          (s = function(e, t, r, i, s, n) {
            return e([i, s], {
              declaredClass: "esri.layers.support.StreamPurger",
              constructor: function() {
                (this._featuresByTime = {}),
                  (this._lastEndTimeCheck = null),
                  (this._trackIds = {}),
                  (this._affectedTrackIds = []),
                  (this._doTimePurge = !1),
                  (this._doTrackPurge = !1),
                  (this._watchHandlers = []),
                  (this._processQueue = []),
                  (this._flushQueueTimer = null);
              },
              normalizeCtorArgs: function(e) {
                return (e = e || {}).controller || (e = { controller: e }), e;
              },
              getDefaults: function() {
                return t.mixin(this.inherited(arguments), {
                  idField: "uid",
                  parentField: "parent"
                });
              },
              initialize: function() {
                var e;
                if (this.controller && this.controller.layer)
                  try {
                    (this.graphics = this.controller.graphics),
                      (this.layer = this.controller.layer);
                    var t = this.get("layer.trackIdField");
                    t && ((this.trackIdField = t), (this._doTrackPurge = !0)),
                      (this.maximumTrackPoints = this.get(
                        "layer.maximumTrackPoints"
                      )),
                      this._watchHandlers.push(
                        this.layer.watch(
                          "maximumTrackPoints",
                          function(e) {
                            this.set("maximumTrackPoints", e);
                          }.bind(this)
                        )
                      ),
                      this.get("layer.purgeOptions.age") &&
                        this.set("maxFeatureAge", this.layer.purgeOptions.age),
                      (this.get("layer.timeInfo.endTimeField") ||
                        this.maxFeatureAge) &&
                        ((this._doTimePurge = !0),
                        (this._lastEndTimeCheck =
                          1e3 * Math.ceil(Date.now() / 1e3))),
                      (this.displayCount = this.get(
                        "layer.purgeOptions.displayCount"
                      )),
                      this._watchHandlers.push(
                        this.layer.watch(
                          "purgeOptions",
                          function(e) {
                            e.hasOwnProperty("displayCount") &&
                              this.set("displayCount", e.displayCount),
                              e.hasOwnProperty("age") &&
                                this.set("maxFeatureAge", e.age);
                          }.bind(this)
                        )
                      );
                  } catch (t) {
                    (e = new n()),
                      this.addResolvingPromise(e.promise),
                      e.reject(t);
                  }
                else
                  (e = new n()),
                    this.addResolvingPromise(e.promise),
                    e.reject(
                      new Error(
                        "A controller with a layer is required for StreamPurger constructor"
                      )
                    );
              },
              destroy: function() {
                this._flushQueueTimer &&
                  (clearTimeout(this._flushQueueTimer),
                  (this._flushQueueTimer = null)),
                  (this._processQueue = null),
                  (this._affectedTrackIds = null);
                for (var e = 0, t = this._watchHandlers.length; e < t; e++)
                  this._watchHandlers[e].remove();
              },
              properties: {
                graphics: null,
                controller: null,
                idField: null,
                layer: null,
                trackIdField: null,
                maximumTrackPoints: {
                  set: function(e) {
                    var t = this.maximumTrackPoints;
                    t !== e &&
                      (this._set("maximumTrackPoints", e),
                      this._doTrackPurge &&
                        (0 === t || (0 !== e && e < t)) &&
                        this._purgeByTracks());
                  }
                },
                parentField: null,
                displayCount: {
                  set: function(e) {
                    var t = this.displayCount;
                    t !== e &&
                      (this._set("displayCount", e),
                      e < t && this._purgeByDisplayCount());
                  }
                },
                maxFeatureAge: {
                  value: 0,
                  set: function(e) {
                    this.maxFeatureAge !== e &&
                      (this._set("maxFeatureAge", Math.ceil(6e4 * e)),
                      this.maxFeatureAge
                        ? ((this._doTimePurge = !0),
                          (this._lastEndTimeCheck =
                            1e3 * Math.ceil(Date.now() / 1e3)))
                        : (this._doTimePurge = !1));
                  }
                }
              },
              addMany: function(e) {
                var t,
                  r,
                  i,
                  s,
                  n,
                  a,
                  o = this._featuresByTime;
                for (t = 0, r = e.length; t < r; t++)
                  (n = null),
                    (i = e[t]),
                    this._doTrackPurge &&
                      ((n = i.attributes[this.trackIdField]),
                      (i[this.parentField] = n),
                      this._trackIds.hasOwnProperty(n)
                        ? (this._trackIds[n] += 1)
                        : (this._trackIds[n] = 1),
                      -1 === this._affectedTrackIds.indexOf(n) &&
                        this._affectedTrackIds.push(n)),
                    this._doTimePurge &&
                      (a = this._getExpireTimeOfItem(i)) &&
                      ((s = { id: i[this.idField] }),
                      null !== n && (s.trackId = n),
                      o[(a = 1e3 * Math.ceil(a / 1e3))]
                        ? o[a].push(s)
                        : (o[a] = [s])),
                    this._processQueue.push(i);
                this._flushQueueTimer ||
                  (this._flushQueueTimer = setTimeout(
                    this._flushProcessQueue.bind(this),
                    200
                  ));
              },
              purge: function(e) {
                this._doTimePurge && this._purgeByTime(),
                  this._doTrackPurge && this._purgeByTracks(e),
                  this._purgeByDisplayCount();
              },
              _flushProcessQueue: function() {
                return (
                  clearTimeout(this._flushQueueTimer),
                  (this._flushQueueTimer = null),
                  r.resolve(this._processQueue.splice(0)).then(
                    function(e) {
                      this.graphics.addMany(e);
                      var t = this._affectedTrackIds.splice(0);
                      return this.purge(t);
                    }.bind(this)
                  )
                );
              },
              _getExpireTimeOfItem: function(e) {
                var t,
                  r = this.layer.timeInfo || {};
                return (
                  !(t = r.endTimeField && e.attributes[r.endTimeField]) &&
                    this.maxFeatureAge &&
                    (t =
                      r.startTimeField && e.attributes[r.startTimeField]
                        ? e.attributes[r.startTimeField] + this.maxFeatureAge
                        : Date.now() + this.maxFeatureAge),
                  t
                );
              },
              _getIndexOfItem: function(e) {
                var t,
                  r,
                  i = this.idField;
                return (
                  (t = "object" == typeof e ? e[i] : e),
                  (r = function(e) {
                    return e[i] === t;
                  }),
                  this.graphics.findIndex(r, this)
                );
              },
              _getItemsByParent: function(e) {
                return this.graphics.filter(function(t) {
                  return t[this.parentField] === e;
                }, this);
              },
              _processRemovedTrackFeatures: function(e) {
                if (this._doTrackPurge && e && e.length)
                  for (var t, r = 0, i = e.length; r < i; r++)
                    (t = e[r]),
                      (this._trackIds[t] -= 1),
                      0 === this._trackIds[t] && delete this._trackIds[t];
              },
              _purgeByDisplayCount: function() {
                var e,
                  t,
                  r = [],
                  i = this.displayCount;
                if ((e = this.graphics.length - i) > 0) {
                  for (var s = 0; s < e; s++)
                    this._doTrackPurge &&
                      ((t = this.graphics.getItemAt(0)[this.parentField]),
                      r.push(t)),
                      this.graphics.removeAt(0);
                  this._processRemovedTrackFeatures(r);
                }
              },
              _purgeByTime: function() {
                if (
                  this._featuresByTime &&
                  0 !== Object.getOwnPropertyNames(this._featuresByTime).length
                ) {
                  var e,
                    t,
                    r,
                    i,
                    s = [],
                    n = [];
                  if (
                    ((this.layer.timeInfo || {}).endTimeField ||
                      this.maxFeatureAge) &&
                    ((e = 1e3 * Math.floor(this._lastEndTimeCheck / 1e3)),
                    (t = 1e3 * Math.ceil(Date.now() / 1e3)),
                    (this._lastEndTimeCheck = t),
                    e && e !== t)
                  ) {
                    for (i = this._featuresByTime, r = e; r <= t; r += 1e3)
                      i[r] && ((s = s.concat(i[r])), delete i[r]);
                    for (var a = 0, o = s.length; a < o; a++) {
                      var h = s[a],
                        u = this._getIndexOfItem(h.id);
                      -1 !== u &&
                        (this.graphics.removeAt(u),
                        (h.trackId || 0 === h.trackId) && n.push(h.trackId));
                    }
                    this._processRemovedTrackFeatures(n);
                  }
                }
              },
              _purgeByTracks: function(e) {
                function t(e) {
                  var t, r;
                  if ((r = (t = this._getItemsByParent(e)).length - i) > 0) {
                    for (var s = 0; s < r; s++)
                      this._removeItemFromCollection(t.getItemAt(s));
                    this._trackIds[e] = i;
                  }
                }
                if (((e = e || []), this.maximumTrackPoints)) {
                  var r,
                    i = this.maximumTrackPoints;
                  if (e.length)
                    for (var s = 0, n = e.length; s < n; s++)
                      (r = e[s]), this._trackIds[r] > i && t.call(this, r);
                  else
                    for (r in (e = this._trackIds)) e[r] > i && t.call(this, r);
                }
              },
              _removeItemFromCollection: function(e) {
                var t,
                  r = e[this.idField];
                if (void 0 !== r)
                  return (
                    -1 !== (t = this._getIndexOfItem(e)) &&
                      this.graphics.removeAt(t),
                    { index: t, id: r, parent: e[this.parentField] }
                  );
              }
            });
          }.apply(null, i)) || (e.exports = s);
    }
  }
]),
  (function() {
    (this || window).webpackJsonp.registerAbsMids({
      "esri/layers/graphics/controllers/StreamController": 1968,
      "esri/layers/support/StreamPurger": 2192
    });
  })();