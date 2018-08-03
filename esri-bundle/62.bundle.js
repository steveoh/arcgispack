(window.webpackJsonp = window.webpackJsonp || []).push([
  [62],
  {
    1986: function(e, t, i) {
      var r, n;
      (r = [
        i.dj.c(e.i),
        t,
        i(2),
        i(0),
        i(15),
        i(138),
        i(108),
        i(3),
        i(63),
        i(53),
        i(17),
        i(11),
        i(111),
        i(180),
        i(9),
        i(26),
        i(1),
        i(2130),
        i(48),
        i(317),
        i(327),
        i(806),
        i(2181),
        i(2182),
        i(2183),
        i(2048),
        i(2184),
        i(2098),
        i(7),
        i(41),
        i(271)
      ]),
        void 0 ===
          (n = function(
            e,
            t,
            i,
            r,
            n,
            o,
            s,
            a,
            d,
            l,
            u,
            h,
            c,
            p,
            f,
            _,
            g,
            y,
            v,
            m,
            b,
            x,
            w,
            D,
            L,
            N,
            I,
            C,
            F,
            S,
            O
          ) {
            function E(e, t) {
              return (
                e.length === t.length &&
                e.every(function(e) {
                  return M(t, e.name) >= 0;
                })
              );
            }
            function M(e, t) {
              for (var i = t.toLowerCase(), r = 0; r < e.length; r++)
                if (e[r].name.toLowerCase() === i) return r;
              return -1;
            }
            var P = h.getLogger(
                "esri.layers.graphics.controllers.I3SOnDemandController"
              ),
              V = (function(e) {
                function t(t) {
                  var i = e.call(this) || this;
                  return (
                    (i.nodeIndex = {}),
                    (i.screenSizeFactor = 0),
                    (i.featureTarget = 5e4),
                    (i.updating = !0),
                    (i.updatingPercentage = 0),
                    (i.leafsReached = !1),
                    (i._lodFactorProperty = null),
                    (i._featureLOD = 1),
                    (i._stableFeatureLOD = !1),
                    (i._isIdle = !1),
                    (i._cameraDirty = !0),
                    (i._hasFeatures = !1),
                    (i._alwaysLoadEverythingModeEnabled = !1),
                    (i._uncompressedTextureDownsamplingEnabled = !1),
                    (i._downloadingNodes = new Set()),
                    (i._loadingNodes = new Set()),
                    (i._updatingNodes = new Map()),
                    (i._progressMaxNumNodes = 1),
                    (i._poi = null),
                    (i._requiredAttributesDirty = !0),
                    (i._updatesDisabled = !1),
                    (i.disableCache = !1),
                    (i._restartNodeLoading = !1),
                    (i._fields = null),
                    (i._attributeStorageInfo = null),
                    (i._handles = new u()),
                    (i._idleQueue = new C.IdleQueue()),
                    (i._errorCount = 0),
                    i
                  );
                }
                return (
                  i(t, e),
                  Object.defineProperty(t.prototype, "isMeshPyramid", {
                    get: function() {
                      return (
                        "mesh-pyramids" === this.layer.profile ||
                        "MeshPyramid" === this.layer.store.lodType
                      );
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  Object.defineProperty(t.prototype, "streamDataSupplier", {
                    get: function() {
                      return this.layerView.view.resourceController.getStreamDataSupplier(
                        O.ClientType.SCENE,
                        { trackRequests: !0 }
                      );
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  Object.defineProperty(
                    t.prototype,
                    "parsedDefinitionExpression",
                    {
                      get: function() {
                        if (
                          !(
                            this.layer instanceof b &&
                            this.layer.definitionExpression
                          )
                        )
                          return null;
                        try {
                          var e = y.create(this.layer.definitionExpression);
                          if (!e.isStandardized())
                            return (
                              P.error(
                                "definitionExpression is using non standard function"
                              ),
                              null
                            );
                          var t = [],
                            i = e.getFields();
                          return (
                            N.findFieldsCaseInsensitive(i, this.layer.fields, {
                              missingFields: t
                            }),
                            t.length > 0
                              ? (P.error(
                                  "definitionExpression references unknown fields: " +
                                    t.join(", ")
                                ),
                                null)
                              : e
                          );
                        } catch (e) {
                          return (
                            P.error(
                              "Failed to parse definitionExpression: " + e
                            ),
                            null
                          );
                        }
                      },
                      enumerable: !0,
                      configurable: !0
                    }
                  ),
                  Object.defineProperty(
                    t.prototype,
                    "definitionExpressionFields",
                    {
                      get: function() {
                        if (this.parsedDefinitionExpression) {
                          var e = this.parsedDefinitionExpression.getFields();
                          return N.findFieldsCaseInsensitive(e, this._fields);
                        }
                        return null;
                      },
                      enumerable: !0,
                      configurable: !0
                    }
                  ),
                  Object.defineProperty(t.prototype, "crsVertex", {
                    get: function() {
                      return N.getVertexCrs(this.layer);
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  Object.defineProperty(t.prototype, "crsIndex", {
                    get: function() {
                      return N.getIndexCrs(this.layer);
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  Object.defineProperty(t.prototype, "rootNodeVisible", {
                    get: function() {
                      var e =
                        this._rootNodeId && this.nodeIndex[this._rootNodeId];
                      return (
                        !e ||
                        !this._viewportQueries ||
                        this._viewportQueries.isNodeVisible(e)
                      );
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  (t.prototype.initialize = function() {
                    var e = this;
                    (this.updateEventListener = {
                      needsUpdate: function() {
                        return !1;
                      },
                      idleBegin: function() {
                        e._updateIdleState(!0);
                      },
                      idleEnd: function() {
                        e._updateIdleState(!1);
                      }
                    }),
                      (this.updateEventListenerWhileSuspended = {
                        idleBegin: function() {
                          return e._startNodeLoadingWhileSuspended();
                        }
                      }),
                      (this._lodHandling = new D(
                        this.layerViewRequiredFunctions,
                        this.layerViewOptionalFunctions,
                        function() {
                          return e.updatingChanged();
                        }
                      )),
                      (this.layerView._controller = this);
                    var t = this.layer;
                    (this._defaultGeometrySchema =
                      t.store.defaultGeometrySchema),
                      (this._rootNodeUrl = t.store.rootNode);
                    var i = this._rootNodeUrl.split("/");
                    (this._rootNodeId = i[i.length - 1]),
                      (this.disableCache = n("disable-feature:idb-cache")),
                      t instanceof b
                        ? ("mesh" === t.geometryType
                            ? (this._lodFactorProperty =
                                "qualitySettings.sceneService.3dObject.lodFactor")
                            : "point" === t.geometryType &&
                              (this._lodFactorProperty =
                                "qualitySettings.sceneService.point.lodFactor"),
                          (this._fields = t.fields),
                          (this._attributeStorageInfo = t.attributeStorageInfo))
                        : t instanceof m &&
                          (this._lodFactorProperty =
                            "qualitySettings.sceneService.integratedMesh.lodFactor");
                    var r = s([this.layer.when(), this.layerView.when()]).then(
                      function() {
                        if (
                          !e.destroyed &&
                          e.layerView &&
                          !e.layerView.destroyed
                        ) {
                          var t = e.layerView.view;
                          e.setClippingArea(t.clippingArea);
                          var i = t.pointsOfInterest;
                          (e._centerOnSurface = i.centerOnSurfaceFrequent),
                            e._handles.add(
                              e._centerOnSurface.watch(
                                "renderLocation",
                                function() {
                                  return e._pointOfInterestChanged();
                                }
                              )
                            );
                          var r = e.layerView.view.resourceController;
                          r.memoryEvents.on("quality-changed", function() {
                            return e._setCameraDirty();
                          }),
                            e._handles.add(
                              _.init(e.layerView, "suspended", function(t) {
                                e._idleFrameWorker &&
                                  (e._idleFrameWorker.remove(),
                                  (e._idleFrameWorker = null),
                                  e.restartNodeLoading()),
                                  e._frameWorker &&
                                    (e._frameWorker.remove(),
                                    (e._frameWorker = null)),
                                  t
                                    ? (e._idleFrameWorker = r.registerIdleFrameWorker(
                                        e.updateEventListenerWhileSuspended
                                      ))
                                    : ((e._idleFrameWorker = r.registerIdleFrameWorker(
                                        e.updateEventListener
                                      )),
                                      (e._frameWorker = r.registerFrameWorker(
                                        function(t) {
                                          return e._frame(t);
                                        }
                                      )));
                              }),
                              "layerview"
                            ),
                            e._handles.add(
                              e.layer.watch("elevationInfo", function(t) {
                                return e._elevationInfoChanged(t);
                              }),
                              "layer"
                            ),
                            e.layerView instanceof x &&
                              e._handles.add(
                                [
                                  _.init(
                                    e.layerView,
                                    "alwaysLoadEverythingModeEnabled",
                                    function(t) {
                                      (e._alwaysLoadEverythingModeEnabled = t),
                                        e.restartNodeLoading();
                                    }
                                  ),
                                  _.init(
                                    e.layerView,
                                    "uncompressedTextureDownsamplingEnabled",
                                    function(t) {
                                      (e._uncompressedTextureDownsamplingEnabled = t),
                                        e.restartNodeLoading();
                                    }
                                  )
                                ],
                                "layer"
                              ),
                            e._handles.add(
                              t.state.watch("camera", function() {
                                return e._setCameraDirty();
                              })
                            ),
                            e._handles.add(
                              e.watch("featureTarget", function() {
                                e._stableFeatureLOD = !1;
                              })
                            ),
                            e._lodFactorProperty &&
                              e._handles.add(
                                e.layerView.view.watch(
                                  e._lodFactorProperty,
                                  function() {
                                    return e._setCameraDirty();
                                  }
                                ),
                                "quality"
                              );
                        }
                      }
                    );
                    this.addResolvingPromise(r),
                      this.when(function() {
                        return e._startNodeLoading();
                      });
                  }),
                  (t.prototype.destroy = function() {
                    this._idleFrameWorker &&
                      (this._idleFrameWorker.remove(),
                      (this._idleFrameWorker = null)),
                      this._frameWorker &&
                        (this._frameWorker.remove(),
                        (this._frameWorker = null)),
                      this._handles.destroy(),
                      (this._nodeLoader = null);
                  }),
                  (t.prototype._getRequiredAttributes = function() {
                    if (
                      !(
                        null != this._attributeStorageInfo &&
                        this.layer instanceof b &&
                        this._fields
                      )
                    )
                      return [];
                    var e = Object.create(null);
                    if (
                      (this.layer.renderer &&
                        this.layer.renderer.collectRequiredFields(e),
                      this.layer.labelsVisible &&
                        this.layer.labelingInfo &&
                        this.layer.labelingInfo.forEach(function(t) {
                          t._collectRequiredFields(e);
                        }),
                      null != this.definitionExpressionFields)
                    )
                      for (
                        var t = 0, i = this.definitionExpressionFields;
                        t < i.length;
                        t++
                      ) {
                        var r = i[t];
                        e[r] = !0;
                      }
                    var n = this._attributeStorageInfo,
                      o = this._fields,
                      s = this.layer.objectIdField;
                    return Object.keys(e)
                      .map(function(e) {
                        var t = M(n, e),
                          i = M(o, e);
                        return t >= 0 && i >= 0
                          ? {
                              index: t,
                              name: o[i].name,
                              field: o[i],
                              attributeStorageInfo: n[t]
                            }
                          : null;
                      })
                      .filter(function(e) {
                        return null != e && e.name !== s;
                      })
                      .sort(function(e, t) {
                        return t.index - e.index;
                      })
                      .filter(function(e, t, i) {
                        return 0 === t || i[t - 1].index !== e.index;
                      });
                  }),
                  (t.prototype._requiredFieldsChange = function() {
                    (this._requiredAttributesDirty = !0),
                      this.restartNodeLoading();
                  }),
                  (t.prototype._labelingChanged = function() {
                    E(
                      this._requiredAttributes,
                      this._getRequiredAttributes()
                    ) || this._requiredFieldsChange();
                  }),
                  (t.prototype.setClippingArea = function(e) {
                    var t = v.create();
                    S.extentToBoundingBox(
                      e,
                      t,
                      this.layerView.view.renderSpatialReference
                    )
                      ? (this._clippingArea = t)
                      : (this._clippingArea = null);
                  }),
                  (t.prototype._pointOfInterestChanged = function() {
                    this._poi &&
                      (this._calculatePointOfInterest(this._poi),
                      this._viewportQueries &&
                        (this._viewportQueries.updatePointOfInterest(this._poi),
                        this._index &&
                          ((this._index.progressiveLoadPenalty =
                            A.distancePenalty *
                            this._viewportQueries.distCameraToPOI()),
                          this._index.requestReload())));
                  }),
                  (t.prototype._calculatePointOfInterest = function(e) {
                    void 0 === e && (e = F.vec3d.create());
                    var t = this._centerOnSurface.renderLocation,
                      i = F.vec3d.create();
                    F.vec3d.subtract(t, this.camPos, i), F.vec3d.normalize(i);
                    var r = this.layerView.view.renderCoordsHelper,
                      n = F.vec3d.create();
                    r.worldUpAtPosition(t, n);
                    var o = Math.acos(F.vec3d.dot(n, i)) - 0.5 * Math.PI;
                    return (
                      F.vec3d.lerp(
                        this.camPos,
                        t,
                        Math.max(0, Math.min(1, o / (0.5 * Math.PI))),
                        e
                      ),
                      e
                    );
                  }),
                  (t.prototype.updateClippingArea = function(e) {
                    this.setClippingArea(e),
                      (this._cameraDirty = !0),
                      this._viewportQueries &&
                        this._viewportQueries.updateExtent(this._clippingArea);
                  }),
                  (t.prototype._setCameraDirty = function() {
                    (this._cameraDirty = !0), this.updatingChanged();
                  }),
                  (t.prototype.getBaseUrl = function() {
                    return this.layer.parsedUrl.path;
                  }),
                  (t.prototype.updateElevationChanged = function(e, t, i) {
                    N.findIntersectingNodes(
                      e,
                      t,
                      this.nodeIndex.root,
                      this.crsIndex,
                      this.nodeIndex,
                      function(e) {
                        i.push(e);
                      }
                    );
                    for (var r = 0; r < i.length; r++) {
                      var n = i.data[r];
                      this._viewportQueries.invalidateCache(n.id),
                        n.id === this._rootNodeId &&
                          this.notifyChange("rootNodeVisible");
                    }
                    i.length && this.restartNodeLoading();
                  }),
                  (t.prototype._elevationInfoChanged = function(e) {
                    this._viewportQueries.invalidateCache(),
                      this._initViewData();
                  }),
                  (t.prototype.restartNodeLoading = function() {
                    (this._restartNodeLoading = !0), this.updatingChanged();
                  }),
                  (t.prototype.schedule = function(e, t) {
                    var i = this;
                    return this._idleQueue.push(t).then(function(t) {
                      if (!i._loadingNodes.has(e) && !i._updatingNodes.has(e))
                        throw new o();
                      return t;
                    });
                  }),
                  (t.prototype.getUnloadedMemoryEstimate = function() {
                    return this._index
                      ? this._index.getUnloadedMemoryEstimate() *
                          this._getLodDropFactor()
                      : 0;
                  }),
                  (t.prototype._frame = function(e) {
                    null !== this._viewportQueries &&
                      this._viewportQueries.setCameraIdle(!this._cameraDirty),
                      this.layerView.visible && this._processLogError(e, !1);
                  }),
                  (t.prototype._processLogError = function(e, t) {
                    void 0 === t && (t = !0);
                    try {
                      this._process(e, t);
                    } catch (e) {
                      this._errorCount < 50
                        ? P.error("Error during processing: " + e)
                        : 50 === this._errorCount &&
                          P.error(
                            "Too many errors for this layer. Further errors will not be displayed."
                          ),
                        this._errorCount++;
                    }
                  }),
                  (t.prototype._process = function(e, t) {
                    if (
                      (this._restartNodeLoading &&
                        (this.cancelNodeLoading(), this._startNodeLoading()),
                      null != this._nodeLoader && null != this._index)
                    ) {
                      for (
                        this._updateViewData() && (t = !1),
                          !this._processIndex() || (!t && e.done()) || (t = !1),
                          t = this._processNodes(e, t);
                        this._idleQueue.length() > 0 && (t || !e.done());

                      )
                        (t = !1), this._idleQueue.process();
                      this._updateFeatureLOD(),
                        e.done() || this._prefetchIndex(),
                        this.updatingChanged(),
                        this._lodHandling.lodGlobalHandling();
                    }
                  }),
                  (t.prototype._processIndex = function() {
                    var e = Math.min(
                      10 - this._index.getIndexLoading(),
                      this._getAvailableLoadTokens(1)
                    );
                    this._index.update(d.keysOfSet(this._loadingNodes));
                    var t = this._index.getFeatureEstimate().leafsReached;
                    return (
                      this._index.isLoading() ||
                        t === this._get("leafsReached") ||
                        this._set("leafsReached", t),
                      this._index.load(e)
                    );
                  }),
                  (t.prototype._prefetchIndex = function() {
                    if (!(this._loadingNodes.size > 0)) {
                      var e = Math.min(
                        10 - this._index.getIndexLoading(),
                        this._getAvailableLoadTokens(1)
                      );
                      this._index.prefetch(e);
                    }
                  }),
                  (t.prototype._updateFeatureLOD = function() {
                    var e = this._index.getFeatureEstimate(),
                      t =
                        (this.featureTarget * this._getLOD()) /
                        this._featureLOD;
                    if (e.estimate) {
                      var i = !this._index.isLoading();
                      if (
                        !i &&
                        !this._index.isPrefetching() &&
                        this._index.getIndexMissing() > 500
                      ) {
                        if (this._featureLOD <= 1e-4) return;
                        (this._featureLOD /= 1.5),
                          (this._stableFeatureLOD = !1);
                      } else if (i && e.estimate < t) {
                        if (
                          this._featureLOD >= 1e4 ||
                          e.leafsReached ||
                          this._stableFeatureLOD
                        )
                          return;
                        var r = this._featureLOD,
                          n = Math.min(0.1 * (t / e.estimate - 1), 0.1);
                        if (
                          ((this._featureLOD *= 1 + n),
                          !this._index.checkFeatureTarget(t, this._getLOD()))
                        )
                          return (
                            (this._featureLOD = r),
                            void (this._stableFeatureLOD = !0)
                          );
                      } else {
                        if (!(e.estimate > 1.2 * t || (i && e.estimate > t)))
                          return;
                        if (this._featureLOD <= 1e-4) return;
                        (this._featureLOD /= 1 + 0.25 * (e.estimate / t - 1)),
                          (this._stableFeatureLOD = !1);
                      }
                      (this._featureLOD = Math.min(
                        1e4,
                        Math.max(1e-4, this._featureLOD)
                      )),
                        this._viewportQueries.updateScreenSpaceErrorBias(
                          this._getLOD()
                        ),
                        this._index.requestReload();
                    }
                  }),
                  (t.prototype._processNodes = function(e, t) {
                    var i = this,
                      r = (this._isIdle ? 100 : 2) - this._loadingNodes.size,
                      n = this._index.getUpdates(r);
                    return (
                      n.cancel.forEach(this._cancelNodeIdLoading, this),
                      n.update.forEach(function(r) {
                        (!t && e.done()) || ((t = !1), i._updateLoadedNode(r));
                      }),
                      n.add.forEach(function(r) {
                        (!t && e.done()) || ((t = !1), i._loadNode(r));
                      }),
                      t
                    );
                  }),
                  (t.prototype._cancelNodeLoading = function() {
                    var e = this;
                    this._loadingNodes.clear(),
                      this._downloadingNodes.clear(),
                      this._updatingNodes.forEach(function(t, i) {
                        return e._updatingNodes.get(i).cancel();
                      }),
                      this._updatingNodes.clear();
                  }),
                  (t.prototype._cancelNodeIdLoading = function(e) {
                    this._loadingNodes.delete(e),
                      this._downloadingNodes.delete(e);
                  }),
                  (t.prototype._getAvailableLoadTokens = function(e) {
                    return Math.floor(
                      (12 -
                        1 * this._index.getIndexLoading() -
                        2 * this._downloadingNodes.size) /
                        e
                    );
                  }),
                  (t.prototype._hasNodeLoadToken = function() {
                    var e = this._isIdle ? 5 : 2;
                    return (
                      !(this._downloadingNodes.size >= e) &&
                      this._getAvailableLoadTokens(2) > 0
                    );
                  }),
                  (t.prototype.updatingChanged = function() {
                    var e =
                        (this._index ? this._index.getIndexMissing() : 0) +
                        3 * (this._index ? this._index.getNodesMissing() : 0) +
                        2 * this._loadingNodes.size,
                      t = !(
                        !(
                          e > 0 ||
                          this._updatingNodes.size > 0 ||
                          (this._index && this._index.isPrefetching()) ||
                          this._restartNodeLoading ||
                          this._cameraDirty ||
                          this._idleQueue.length() > 0 ||
                          (this._lodHandling &&
                            this._lodHandling.requiresLODGlobalHandling)
                        ) && this._isIdle
                      );
                    0 === e && (this._progressMaxNumNodes = 1),
                      (this._progressMaxNumNodes = Math.max(
                        e,
                        this._progressMaxNumNodes
                      )),
                      t !== this._get("updating") && this._set("updating", t);
                    var i = (100 * e) / this._progressMaxNumNodes;
                    i !== this._get("updatingPercentage") &&
                      this._set("updatingPercentage", i);
                  }),
                  (t.prototype._initViewData = function() {
                    var e = this.layerView.view,
                      t = e.state.camera,
                      i = e.renderCoordsHelper;
                    (this.camPos = F.vec3d.create(
                      e.pointsOfInterest.renderPointOfView
                    )),
                      (this.screenSizeFactor = 1 / t.perPixelRatio),
                      (this._poi = this._calculatePointOfInterest());
                    var r = this._getLOD();
                    (this._viewportQueries = new I(
                      this.crsIndex,
                      i,
                      t,
                      this._poi,
                      this._clippingArea,
                      e.elevationProvider,
                      this.layer.elevationInfo,
                      {
                        progressiveLoadFactor: this._getProgressiveLoadFactor(
                          this.layer,
                          r
                        ),
                        screenspaceErrorBias: r,
                        angleDependentLoD: r < 0.5,
                        disableLod: this._alwaysLoadEverythingModeEnabled
                      }
                    )),
                      (this._cameraDirty = !1),
                      this.notifyChange("rootNodeVisible");
                  }),
                  (t.prototype._updateViewData = function() {
                    if (!this._cameraDirty || !this._index) return !1;
                    var e = this.layerView.view,
                      t = e.state.camera;
                    (this.camPos = F.vec3d.create(
                      e.pointsOfInterest.renderPointOfView
                    )),
                      (this.screenSizeFactor = 1 / t.perPixelRatio),
                      (this._poi = this._calculatePointOfInterest(this._poi)),
                      this._viewportQueries.updateCamera(t),
                      this._viewportQueries.updatePointOfInterest(this._poi);
                    var i = this._getLOD();
                    this._viewportQueries.updateScreenSpaceErrorBias(i),
                      (this._index.progressiveLoadPenalty =
                        A.distancePenalty *
                        this._viewportQueries.distCameraToPOI()),
                      this._index.requestReload(),
                      (this._stableFeatureLOD = !1);
                    var r =
                      !this._alwaysLoadEverythingModeEnabled &&
                      this._removeInvisibleNodes();
                    return (
                      (this._cameraDirty = !1),
                      this.notifyChange("rootNodeVisible"),
                      r
                    );
                  }),
                  (t.prototype._getProgressiveLoadFactor = function(e, t) {
                    return e instanceof b && "mesh" === e.geometryType
                      ? t >= 1 && n("enable-feature:progressive-3dobject")
                        ? A.factor3dObject
                        : 1
                      : e instanceof m &&
                        (t >= 1 && !n("disable-feature:progressive-im"))
                        ? A.factorIM
                        : 1;
                  }),
                  (t.prototype._getLOD = function() {
                    return (
                      ((this._lodFactorProperty &&
                        this.layerView.view.get(this._lodFactorProperty)) ||
                        1) *
                      this.layerView.view.resourceController.memoryFactor *
                      this._featureLOD
                    );
                  }),
                  (t.prototype._getLodDropFactor = function() {
                    return (
                      Math.min(
                        this.layerView.view.resourceController.memoryFactor,
                        0.5
                      ) / 0.5
                    );
                  }),
                  (t.prototype._startNodeLoadingWhileSuspended = function() {
                    this._initViewData(),
                      (this._alwaysLoadEverythingModeEnabled &&
                        this.layerView.visible &&
                        !this.layerView.get("parent.suspended")) ||
                        this._removeInvisibleNodes();
                  }),
                  (t.prototype.isGeometryVisible = function(e) {
                    return this._viewportQueries.isGeometryVisible(e);
                  }),
                  (t.prototype.updateVisibility = function(e) {
                    return this._viewportQueries.updateNode(e);
                  }),
                  (t.prototype._shouldLoadNode = function(e) {
                    if (!this._lodHandling.shouldLoadNode(e)) return !1;
                    var t = this._getLodDropFactor();
                    return (
                      !(
                        t > 0 &&
                        this._viewportQueries.maxDistance > 0 &&
                        this._lodHandling.childrenEmpty(e) &&
                        this._viewportQueries.distToPOI(e) >
                          this._viewportQueries.maxDistance * t
                      ) &&
                      (!e.obb || this._viewportQueries.isGeometryVisible(e))
                    );
                  }),
                  (t.prototype._startNodeLoading = function() {
                    var e = this;
                    if (
                      ((this._restartNodeLoading = !1),
                      !this._updatesDisabled && null != this.streamDataSupplier)
                    ) {
                      this._initViewData(),
                        this._requiredAttributesDirty &&
                          ((this._requiredAttributes = this._getRequiredAttributes()),
                          (this._requiredAttributesDirty = !1),
                          this._handles.add(
                            [
                              this.layer.watch("renderer", function() {
                                return e._requiredFieldsChange();
                              }),
                              this.layer.watch(
                                "definitionExpression",
                                function() {
                                  return e._requiredFieldsChange();
                                }
                              ),
                              this.layer.watch("labelsVisible", function() {
                                return e._labelingChanged();
                              }),
                              this.layer.watch("labelingInfo", function() {
                                return e._labelingChanged();
                              })
                            ],
                            "requiredAttributes"
                          ));
                      var t = this.layerViewOptionalFunctions.textureOptions,
                        i = L.TextureFormat.Normal;
                      t && t.useCompressedTextures
                        ? (i = L.TextureFormat.Compressed)
                        : this._uncompressedTextureDownsamplingEnabled &&
                          (i = L.TextureFormat.Downsampled);
                      var r = this._defaultGeometrySchema,
                        n = {
                          textureFormat: i,
                          loadTextureData:
                            this.layerView instanceof x &&
                            this.layerView.rendererNeedsTextures,
                          loadFeatureData:
                            !this.isMeshPyramid ||
                            null == r ||
                            null == r.ordering
                        };
                      this._nodeLoader = new L(
                        this.streamDataSupplier,
                        P,
                        r,
                        this._requiredAttributes,
                        n
                      );
                      var o =
                        A.distancePenalty *
                        this._viewportQueries.distCameraToPOI();
                      (this._index = new w(
                        this.getBaseUrl(),
                        this._rootNodeUrl,
                        this._rootNodeId,
                        o,
                        this.nodeIndex,
                        this.streamDataSupplier,
                        this._viewportQueries,
                        P,
                        function(t) {
                          return e.layerViewRequiredFunctions.isNodeLoaded(t);
                        },
                        function(t) {
                          return e._shouldLoadNode(t);
                        },
                        function(t) {
                          return e._needsUpdate(t);
                        }
                      )),
                        this._alwaysLoadEverythingModeEnabled ||
                          this._removeInvisibleNodes(),
                        this._lodHandling.startNodeLoading(
                          function(t) {
                            return e._viewportQueries.isNodeVisible(t);
                          },
                          function(t) {
                            return e._viewportQueries.isGeometryVisible(t);
                          },
                          function(t) {
                            return e._index.nodeTraversalState(t);
                          },
                          this.nodeIndex,
                          this._rootNodeId,
                          { maxLodLevel: this._viewportQueries.maxLodLevel }
                        ),
                        this.updatingChanged();
                    }
                  }),
                  (t.prototype.isNodeLoading = function() {
                    return null != this._nodeLoader && null != this._index;
                  }),
                  (t.prototype.cancelNodeLoading = function() {
                    this.isNodeLoading() &&
                      (this._nodeLoader.cancelAll(),
                      this.streamDataSupplier.cancelAll(),
                      this._idleQueue.cancelAll(),
                      this._cancelNodeLoading(),
                      (this._nodeLoader = null),
                      (this._index = null),
                      (this._poi = null),
                      this.layerViewOptionalFunctions
                        .additionalCancelNodeLoadingHandler &&
                        this.layerViewOptionalFunctions.additionalCancelNodeLoadingHandler(),
                      this.updatingChanged());
                  }),
                  (t.prototype._removeInvisibleNodes = function() {
                    var e = this.layerViewRequiredFunctions.getLoadedNodeIDs(),
                      t = this._getLodDropFactor(),
                      i = this._viewportQueries.maxDistance * t,
                      r = t > 0 && i > 0;
                    T.clear();
                    for (var n = 0; n < e.length; n++) {
                      var o = this.nodeIndex[e[n]];
                      (!this._viewportQueries.isGeometryVisible(o) ||
                        (r &&
                          this._lodHandling.childrenEmpty(o) &&
                          this._viewportQueries.distToPOI(o) > i)) &&
                        (this._lodHandling.setLodGlobalDirty(), T.push(o));
                    }
                    return (
                      T.length > 0 &&
                      (this.layerViewRequiredFunctions.removeNodeData(T),
                      T.clear(),
                      !0)
                    );
                  }),
                  (t.prototype._needsUpdate = function(e) {
                    if (
                      null == e.featureData ||
                      0 === e.featureData.length ||
                      this._updatingNodes.has(e.id)
                    )
                      return !1;
                    var t = this.layerViewRequiredFunctions.getLoadedAttributes(
                      e
                    );
                    return null != t && t !== this._requiredAttributes;
                  }),
                  (t.prototype._updateLoadedNode = function(e) {
                    var t = this,
                      i = e.baseUrl,
                      r = E(
                        this.layerViewRequiredFunctions.getLoadedAttributes(e),
                        this._requiredAttributes
                      )
                        ? f.resolve(
                            this.layerViewRequiredFunctions.getAttributeData(e)
                          )
                        : this._nodeLoader.loadAttributes(
                            e,
                            i,
                            this._requiredAttributes
                          );
                    this._updatingNodes.set(e.id, r),
                      r
                        .then(function(i) {
                          return t.schedule(e.id).then(function() {
                            return t.layerViewRequiredFunctions.setAttributeData(
                              e,
                              t._requiredAttributes,
                              i
                            );
                          });
                        })
                        .catch(function(i) {
                          i instanceof o ||
                            t.layerViewRequiredFunctions.setAttributeData(
                              e,
                              t._requiredAttributes,
                              {}
                            );
                        })
                        .always(function() {
                          t._updatingNodes.delete(e.id), t.updatingChanged();
                        }),
                      this.updatingChanged();
                  }),
                  (t.prototype._loadNode = function(e) {
                    var t = this;
                    (e.notInCache && !this._hasNodeLoadToken()) ||
                      (this._loadingNodes.add(e.id),
                      this.updatingChanged(),
                      this._loadAndAddBundle(e).always(function() {
                        t._loadingNodes.delete(e.id),
                          (t._hasFeatures = t._hasFeatures || !!e.numFeatures),
                          t.updatingChanged();
                      }));
                  }),
                  (t.prototype._loadAndAddBundle = function(e) {
                    return (
                      1 !== e.featureData.length &&
                        P.warn(
                          "Node ${node.id} has ${node.featureData.length} bundles. Only the first bundle will be loaded."
                        ),
                      e.notInCache
                        ? this._loadUncached(e)
                        : this._loadCached(e)
                            .then(function(t) {
                              t || (e.notInCache = !0);
                            })
                            .catch(function(t) {
                              t instanceof o || (e.notInCache = !0);
                            })
                    );
                  }),
                  (t.prototype._loadCached = function(e) {
                    var t = this,
                      i = this.disableCache
                        ? null
                        : this.layerViewOptionalFunctions.loadCachedNodeData,
                      r = this.disableCache
                        ? null
                        : this.layerViewOptionalFunctions.addCachedNodeData;
                    return i && r
                      ? this.schedule(e.id)
                          .then(function() {
                            return i(e, function(e, i) {
                              return t._nodeLoader.loadTextures(e, i);
                            });
                          })
                          .then(function(i) {
                            if (null == i) return !1;
                            var n = t._requiredAttributes;
                            return (function(e) {
                              return (
                                null != e.loadedAttributes &&
                                null != e.attributeData
                              );
                            })(i) && E(i.loadedAttributes, n)
                              ? t
                                  .schedule(e.id)
                                  .then(function() {
                                    return r(e, i, i);
                                  })
                                  .then(function() {
                                    return (
                                      t._lodHandling.lodSwapBundleLoaded(e), !0
                                    );
                                  })
                              : t
                                  .schedule(e.id)
                                  .then(function() {
                                    return t._nodeLoader.loadAttributes(
                                      e,
                                      e.baseUrl,
                                      n
                                    );
                                  })
                                  .then(function(i) {
                                    return t.schedule(e.id, {
                                      loadedAttributes: n,
                                      attributeData: i
                                    });
                                  })
                                  .then(function(t) {
                                    return r(e, i, t);
                                  })
                                  .then(function() {
                                    return (
                                      t._lodHandling.lodSwapBundleLoaded(e), !0
                                    );
                                  });
                          })
                      : f.resolve(!1);
                  }),
                  (t.prototype._loadUncached = function(e) {
                    var t = this;
                    return (
                      this._downloadingNodes.add(e.id),
                      this._nodeLoader
                        .loadBundleData(e, 0)
                        .then(function(i) {
                          return (
                            t._downloadingNodes.delete(e.id),
                            t.schedule(e.id, i)
                          );
                        })
                        .then(function(i) {
                          return t.layerViewRequiredFunctions.addNodeData(e, i);
                        })
                        .then(function() {
                          t._lodHandling.lodSwapBundleLoaded(e),
                            (e.notInCache = !1);
                        })
                        .catch(function(t) {
                          t instanceof o ||
                            (P.error(
                              "Failed to load node '" +
                                e.id +
                                "' bundle 0: " +
                                t
                            ),
                            (e.failed = !0));
                        })
                    );
                  }),
                  (t.prototype._updateIdleState = function(e) {
                    e !== this._isIdle &&
                      ((this._isIdle = e),
                      this._viewportQueries &&
                        this._viewportQueries.setCameraIdle(!0),
                      this.updatingChanged());
                  }),
                  (t.prototype.updateStats = function(e) {
                    (e.index = Object.keys(this.nodeIndex).length),
                      this._hasFeatures &&
                        ((e.detail = this._featureLOD),
                        (e.target = Math.round(
                          (this.featureTarget * this._getLOD()) /
                            this._featureLOD
                        ))),
                      this._index && this._index.updateStats(e);
                  }),
                  r(
                    [g.property({ readOnly: !0 })],
                    t.prototype,
                    "isMeshPyramid",
                    null
                  ),
                  r(
                    [g.property({ readOnly: !0 })],
                    t.prototype,
                    "streamDataSupplier",
                    null
                  ),
                  r(
                    [
                      g.property({
                        readOnly: !0,
                        dependsOn: ["layer.definitionExpression"]
                      })
                    ],
                    t.prototype,
                    "parsedDefinitionExpression",
                    null
                  ),
                  r(
                    [
                      g.property({
                        readOnly: !0,
                        dependsOn: ["parsedDefinitionExpression"]
                      })
                    ],
                    t.prototype,
                    "definitionExpressionFields",
                    null
                  ),
                  r(
                    [g.property({ readOnly: !0 })],
                    t.prototype,
                    "crsVertex",
                    null
                  ),
                  r(
                    [g.property({ readOnly: !0 })],
                    t.prototype,
                    "crsIndex",
                    null
                  ),
                  r(
                    [g.property({ readOnly: !0 })],
                    t.prototype,
                    "nodeIndex",
                    void 0
                  ),
                  r([g.property()], t.prototype, "camPos", void 0),
                  r([g.property()], t.prototype, "screenSizeFactor", void 0),
                  r([g.property()], t.prototype, "featureTarget", void 0),
                  r([g.property()], t.prototype, "layerView", void 0),
                  r(
                    [g.property()],
                    t.prototype,
                    "layerViewRequiredFunctions",
                    void 0
                  ),
                  r(
                    [g.property()],
                    t.prototype,
                    "layerViewOptionalFunctions",
                    void 0
                  ),
                  r([g.property()], t.prototype, "layer", void 0),
                  r(
                    [g.property({ readOnly: !0 })],
                    t.prototype,
                    "updating",
                    void 0
                  ),
                  r(
                    [g.property({ readOnly: !0 })],
                    t.prototype,
                    "updatingPercentage",
                    void 0
                  ),
                  r(
                    [g.property({ readOnly: !0 })],
                    t.prototype,
                    "leafsReached",
                    void 0
                  ),
                  r(
                    [g.property({ readOnly: !0 })],
                    t.prototype,
                    "rootNodeVisible",
                    null
                  ),
                  r(
                    [
                      g.subclass(
                        "esri.layers.graphics.controllers.I3SOnDemandController"
                      )
                    ],
                    t
                  )
                );
              })(g.declared(a, p, l)),
              T = new c(),
              A = { factorIM: 0.2, factor3dObject: 0.05, distancePenalty: 10 };
            return V;
          }.apply(null, r)) || (e.exports = n);
    },
    2098: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t, i(34)]),
        void 0 ===
          (n = function(e, t, i) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var r = (function() {
              function e() {
                (this._deferreds = []), (this._values = []);
              }
              return (
                (e.prototype.push = function(e) {
                  var t = new i();
                  return (
                    this._deferreds.push(t), this._values.push(e), t.promise
                  );
                }),
                (e.prototype.length = function() {
                  return this._deferreds.length;
                }),
                (e.prototype.process = function() {
                  this._deferreds.shift().resolve(this._values.shift());
                }),
                (e.prototype.cancelAll = function() {
                  for (var e = 0, t = this._deferreds; e < t.length; e++)
                    t[e].cancel();
                  (this._deferreds.length = 0), (this._values.length = 0);
                }),
                e
              );
            })();
            t.IdleQueue = r;
          }.apply(null, r)) || (e.exports = n);
    },
    2181: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t, i(13), i(111), i(27), i(2048), i(2029)]),
        void 0 ===
          (n = function(e, t, i, r, n, o, s) {
            var a = [
                "version",
                "level",
                "sharedResource",
                "attributeData",
                "geometryData",
                "textureData",
                "lodSelection"
              ],
              d = (function() {
                function e(e, t, i, o, s, a, d, u, h, c, p) {
                  var f = this;
                  (this.rootId = i),
                    (this.progressiveLoadPenalty = o),
                    (this.nodeIndex = s),
                    (this.streamDataSupplier = a),
                    (this.viewportQueries = d),
                    (this.logger = u),
                    (this._isLoaded = h),
                    (this._needsLoading = c),
                    (this._needsUpdate = p),
                    (this._dirty = !0),
                    (this._loading = !0),
                    (this._prefetching = !0),
                    (this._loadingNodes = new Set()),
                    (this._indexMissing = 1),
                    (this._nodesMissing = 0),
                    (this._maxUnloadedPrio = Number.NEGATIVE_INFINITY),
                    (this._nodeTraversalState = {}),
                    (this._version = 0),
                    (this._featureEstimate = { estimate: 0, leafsReached: !1 }),
                    (this._unloadedMemoryEstimate = 0),
                    (this._missing = new r()),
                    (this._prefetch = new r()),
                    (this._updates = new l()),
                    (this.ignoreServiceOBB = !1),
                    (this._maxLodLevel = this.viewportQueries.maxLodLevel),
                    (this.rootUrl = n.makeAbsolute(t, e)),
                    this.traverseVisible(function(e, t) {
                      return f.nodeTraversalState(t);
                    });
                }
                return (
                  (e.prototype.requestReload = function() {
                    (this._dirty = !0),
                      (this._loading = !0),
                      (this._prefetching = !0),
                      ++this._version;
                  }),
                  (e.prototype.update = function(e) {
                    var t = this;
                    if (this._dirty) {
                      (this._indexMissing = 0),
                        (this._nodesMissing = 0),
                        (this._maxUnloadedPrio = Number.NEGATIVE_INFINITY),
                        this._missing.clear(),
                        this._prefetch.clear(),
                        this._updates.reset(e),
                        (this._loading = !1),
                        (this._prefetching = !1);
                      var r = !0,
                        n = new u(),
                        o = new u();
                      if (
                        (this.traverseVisible(function(s, a, d) {
                          if ((t._updateFeatureEstimate(a, o), !a))
                            return (
                              ++t._indexMissing,
                              (t._loading = !0),
                              (t._prefetching = !1),
                              void (
                                t._loadingNodes.has(s.id) ||
                                t._missing.push(i({}, s, { baseUrl: d }))
                              )
                            );
                          if (0 === t._missing.length && a.children)
                            for (var l = 0, u = a.children; l < u.length; l++) {
                              var h = u[l];
                              t.nodeIndex[h.id] ||
                                ((t._prefetching = !0),
                                t._loadingNodes.has(h.id) ||
                                  t._prefetch.push(
                                    i({}, h, { baseUrl: a.baseUrl })
                                  ));
                            }
                          if (
                            !a.failed &&
                            a.featureData &&
                            0 !== a.featureData.length
                          ) {
                            if (t._isLoaded(a))
                              return (
                                (n.known += a.memory),
                                ++n.knownNodes,
                                t._needsLoading(a)
                                  ? a.children && (r = !1)
                                  : ((n.unremoved += a.memory), (r = !1)),
                                void (
                                  t._needsUpdate(a) && t._updates.update.push(a)
                                )
                              );
                            if (
                              (a.memory &&
                                ((n.known += a.memory), ++n.knownNodes),
                              t._needsLoading(a))
                            ) {
                              if (
                                (++t._nodesMissing,
                                a.children && (r = !1),
                                a.memory
                                  ? ((n.missing += a.memory),
                                    (n.known += a.memory),
                                    ++n.knownNodes)
                                  : ++n.missingNodes,
                                e.indexOf(a.id) >= 0)
                              )
                                return void (t._updates.cancel = t._updates.cancel.filter(
                                  function(e) {
                                    return e !== a.id;
                                  }
                                ));
                              t._updates.add.push(a);
                            }
                          }
                        }),
                        (this._unloadedMemoryEstimate =
                          n.missing - n.unremoved),
                        n.knownNodes > 3 &&
                          (this._unloadedMemoryEstimate +=
                            (n.missingNodes * n.known) / n.knownNodes),
                        (this._unloadedMemoryEstimate =
                          0.8 * Math.max(0, this._unloadedMemoryEstimate)),
                        (this._featureEstimate.estimate = o.known - o.missing),
                        (this._featureEstimate.leafsReached = r),
                        o.knownNodes > 0)
                      ) {
                        var s = o.known / o.knownNodes,
                          a = o.missing - o.unremoved + o.missingNodes * s;
                        this._featureEstimate.estimate + a > 0 &&
                          (this._featureEstimate.estimate += a);
                      }
                      this._dirty =
                        this._indexMissing > 0 ||
                        this._nodesMissing > 0 ||
                        this._updates.add.length > 0 ||
                        this._updates.update.length > 0 ||
                        this._updates.cancel.length > 0;
                    }
                  }),
                  (e.prototype.checkFeatureTarget = function(e, t) {
                    var i = this,
                      r = this.viewportQueries.updateScreenSpaceErrorBias(t);
                    ++this._version;
                    var n = new u();
                    this.traverseVisible(function(e, t) {
                      return i._updateFeatureEstimate(t, n);
                    });
                    var o = n.known - n.missing;
                    if (n.knownNodes > 0) {
                      var s = n.known / n.knownNodes,
                        a = n.missing - n.unremoved + n.missingNodes * s;
                      o + a > 0 && (o += a);
                    }
                    return (
                      this.viewportQueries.updateScreenSpaceErrorBias(r),
                      ++this._version,
                      o <= e
                    );
                  }),
                  (e.prototype._updateFeatureEstimate = function(e, t) {
                    if (
                      e &&
                      !e.failed &&
                      e.featureData &&
                      0 !== e.featureData.length
                    )
                      return this._isLoaded(e)
                        ? ((t.known += e.numFeatures),
                          ++t.knownNodes,
                          void (
                            this._needsLoading(e) ||
                            (t.unremoved += e.numFeatures)
                          ))
                        : void (
                            this._needsLoading(e) &&
                            (e.numFeatures
                              ? ((t.missing += e.numFeatures),
                                (t.known += e.numFeatures),
                                ++t.knownNodes)
                              : ++t.missingNodes)
                          );
                  }),
                  (e.prototype.load = function(e) {
                    var t = this;
                    return (
                      o.buildTopNodeMap(this._missing, e, function(e) {
                        return t.entryPriority(e);
                      }),
                      this._missing.length <= 0
                        ? this._loading
                        : ((this._maxUnloadedPrio = this.entryPriority(
                            this._missing.front()
                          )),
                          this._missing.forEach(function(e) {
                            return t._loadNode(e);
                          }),
                          this._missing.clear(),
                          this._loading)
                    );
                  }),
                  (e.prototype.prefetch = function(e) {
                    var t = this;
                    o.buildTopNodeMap(this._prefetch, e, function(e) {
                      return t.entryPriority(e);
                    }),
                      this._prefetch.forEach(function(e) {
                        return t._loadNode(e);
                      }),
                      this._prefetch.clear();
                  }),
                  (e.prototype.isLoading = function() {
                    return this._loading;
                  }),
                  (e.prototype.isPrefetching = function() {
                    return this._prefetching;
                  }),
                  (e.prototype.getIndexLoading = function() {
                    return this._loadingNodes.size;
                  }),
                  (e.prototype.getIndexMissing = function() {
                    return this._indexMissing;
                  }),
                  (e.prototype.getUnloadedMemoryEstimate = function() {
                    return this._unloadedMemoryEstimate;
                  }),
                  (e.prototype.getNodesMissing = function() {
                    return this._nodesMissing;
                  }),
                  (e.prototype.getUpdates = function(e) {
                    var t = this;
                    return (
                      o.buildTopNodeMap(
                        this._updates.add,
                        e,
                        function(e) {
                          return t.entryPriority(e);
                        },
                        this._maxUnloadedPrio
                      ),
                      o.buildTopNodeMap(
                        this._updates.update,
                        Number.POSITIVE_INFINITY,
                        function(e) {
                          return t.entryPriority(e);
                        }
                      ),
                      this._updates
                    );
                  }),
                  (e.prototype.getFeatureEstimate = function() {
                    return this._featureEstimate;
                  }),
                  (e.prototype.nodeTraversalState = function(e) {
                    if (!e) return null;
                    var t = this._nodeTraversalState[e.id];
                    if (t && t.version === this._version) return t;
                    var i = this.viewportQueries.getLodLevel(e),
                      r = this.viewportQueries.hasLOD(e),
                      n = !0;
                    if (r)
                      if (e.parentNode) {
                        var o = this.nodeIndex[e.parentNode.id];
                        if (null == o) return null;
                        var s = this._nodeTraversalState[o.id];
                        n = s && i > s.lodLevel;
                      } else n = i > 0;
                    return t
                      ? ((t.lodLevel = i),
                        (t.isChosen = n),
                        (t.version = this._version),
                        t)
                      : ((this._nodeTraversalState[e.id] = {
                          nodeHasLOD: r,
                          lodLevel: i,
                          isChosen: n,
                          version: this._version
                        }),
                        this._nodeTraversalState[e.id]);
                  }),
                  (e.prototype._loadNode = function(e) {
                    var t = this;
                    this._loadingNodes.add(e.id);
                    var i = n.makeAbsolute(e.href, e.baseUrl);
                    this.streamDataSupplier.request(i, "json").then(
                      function(e, i) {
                        var r = i,
                          n = {
                            id: r.id,
                            mbs: r.mbs,
                            parentNode: r.parentNode,
                            children: r.children,
                            featureData: r.featureData
                          };
                        a.forEach(function(e) {
                          n[e] = r.hasOwnProperty(e) ? r[e] : null;
                        }),
                          r.hasOwnProperty("obb") &&
                            !t.ignoreServiceOBB &&
                            ((n.obb = s.clone(r.obb)),
                            (n.hasServiceOBB = !0),
                            t.viewportQueries.updateNode(n.id)),
                          (t.nodeIndex[n.id] = n),
                          (n.baseUrl = e),
                          n.featureData &&
                            1 === n.featureData.length &&
                            n.featureData[0].featureRange &&
                            (n.numFeatures =
                              n.featureData[0].featureRange[1] -
                              n.featureData[0].featureRange[0] +
                              1),
                          t.nodeTraversalState(n),
                          t._loadingNodes.delete(n.id),
                          (t._dirty = !0);
                      },
                      function(r) {
                        t.loadErrorCallback(i),
                          t._loadingNodes.delete(e.id),
                          (t._dirty = !0);
                      }
                    );
                  }),
                  (e.prototype.entryPriority = function(e) {
                    if (e.id === this.rootId) return 0;
                    var t = 0,
                      i = this.nodeIndex[e.id];
                    if (null != i && null != i.parentNode) {
                      var r = this._nodeTraversalState[i.parentNode.id];
                      null != r && (t = r.lodLevel);
                    }
                    for (
                      var n = this.progressiveLoadPenalty, o = i;
                      o;
                      o = o.parentNode ? this.nodeIndex[o.parentNode.id] : null
                    )
                      if (this._isLoaded(o)) {
                        n = 0;
                        break;
                      }
                    var s = this.viewportQueries.distToPOI(e);
                    return -s - t * (s + this.progressiveLoadPenalty) + n;
                  }),
                  (e.prototype.traverseVisible = function(e) {
                    var t = this.nodeIndex[this.rootId];
                    t
                      ? this._traverse(
                          { id: this.rootId, mbs: t.mbs, href: this.rootUrl },
                          t,
                          e,
                          ""
                        )
                      : e(
                          { id: this.rootId, mbs: null, href: this.rootUrl },
                          null,
                          ""
                        );
                  }),
                  (e.prototype._traverse = function(e, t, i, r) {
                    if (t.children && 0 !== t.children.length) {
                      if (this.viewportQueries.isNodeVisible(t)) {
                        i(e, t, r);
                        var n = this.nodeTraversalState(t);
                        if (!n.nodeHasLOD || n.lodLevel !== this._maxLodLevel)
                          for (var o = 0, s = t.children; o < s.length; o++) {
                            var a = s[o],
                              d = this.nodeIndex[a.id];
                            d
                              ? this._traverse(a, d, i, t.baseUrl)
                              : this.viewportQueries.isNodeVisible(a) &&
                                i(a, null, t.baseUrl);
                          }
                      }
                    } else
                      this.viewportQueries.isGeometryVisible(t) && i(e, t, r);
                  }),
                  (e.prototype.loadErrorCallback = function(e) {
                    this.logger.warn("Error loading node: " + e);
                  }),
                  (e.prototype.updateStats = function(e) {
                    if (
                      (this._nodesMissing &&
                        (e.nodes += " + " + Math.round(this._nodesMissing)),
                      this._indexMissing &&
                        (e.index += " + " + this._indexMissing),
                      this._featureEstimate.estimate)
                    ) {
                      var t = this._featureEstimate.estimate - e.features;
                      t > 0
                        ? (e.features += " + " + t)
                        : t < 0 && (e.features += " - " + -t);
                    }
                  }),
                  e
                );
              })(),
              l = (function() {
                function e() {
                  (this.update = new r()), (this.add = new r());
                }
                return (
                  (e.prototype.reset = function(e) {
                    this.add.clear(), this.update.clear(), (this.cancel = e);
                  }),
                  e
                );
              })(),
              u = (function() {
                return function() {
                  (this.known = 0),
                    (this.knownNodes = 0),
                    (this.missing = 0),
                    (this.missingNodes = 0),
                    (this.unremoved = 0);
                };
              })();
            return d;
          }.apply(null, r)) || (e.exports = n);
    },
    2182: function(e, t, i) {
      var r, n;
      (r = [i.dj.c(e.i), t, i(111)]),
        void 0 ===
          (n = function(e, t, i) {
            var r = (function() {
                function e(e, t, i) {
                  (this.layerViewRequiredFunctions = e),
                    (this.layerViewOptionalFunctions = t),
                    (this.lodGlobalDirtyChanged = i);
                }
                return (
                  (e.prototype.startNodeLoading = function(e, t, i, r, n, o) {
                    (this._lodGlobalDirty = !1),
                      (this._maxLodLevel = o.maxLodLevel),
                      (this._nodeIndex = r),
                      (this._rootId = n),
                      (this._nodeTraversalState = i),
                      (this._isNodeVisible = e),
                      (this._isGeometryVisible = t),
                      this.lodGlobalDirtyChanged(this._lodGlobalDirty);
                  }),
                  (e.prototype.shouldLoadNode = function(e) {
                    var t = this._nodeTraversalState(e);
                    return (
                      !!t.isChosen &&
                      (t.lodLevel === this._maxLodLevel ||
                        this.childrenEmpty(e))
                    );
                  }),
                  (e.prototype.setLodGlobalDirty = function() {
                    (this._lodGlobalDirty = !0),
                      this.lodGlobalDirtyChanged(this._lodGlobalDirty);
                  }),
                  (e.prototype.lodSwapBundleLoaded = function(e) {
                    this.setLodGlobalDirty();
                  }),
                  Object.defineProperty(
                    e.prototype,
                    "requiresLODGlobalHandling",
                    {
                      get: function() {
                        return (
                          null != this._rootId &&
                          (!0 === this._lodGlobalDirty ||
                            this.layerViewRequiredFunctions.getMemoryUsage() >
                              1.1)
                        );
                      },
                      enumerable: !0,
                      configurable: !0
                    }
                  ),
                  (e.prototype.lodGlobalHandling = function() {
                    if (this.requiresLODGlobalHandling) {
                      var e = this._rootId,
                        t = this.layerViewRequiredFunctions.getMemoryUsage(),
                        i = Math.max(0, Math.floor(10 * (t - 1)));
                      n.clear(),
                        this._lodGlobalHandlingRecursion(e, i),
                        this.layerViewRequiredFunctions.removeNodeData(n),
                        n.clear(),
                        (this._lodGlobalDirty = !1),
                        this.lodGlobalDirtyChanged(this._lodGlobalDirty);
                    }
                  }),
                  (e.prototype._lodGlobalHandlingRecursion = function(e, t) {
                    var i = this._nodeIndex[e];
                    if (null == i) return !1;
                    var r = this._nodeTraversalState(i),
                      o =
                        r.isChosen &&
                        (!r.nodeHasLOD || r.lodLevel === this._maxLodLevel),
                      s = this.layerViewRequiredFunctions.isNodeLoaded(i);
                    if (
                      s &&
                      null != this.layerViewOptionalFunctions.setPolygonOffset
                    ) {
                      var a = !o;
                      this.layerViewOptionalFunctions.setPolygonOffset(i, a);
                    }
                    if (o && s) return this._removeChildrenRecursive(i), !0;
                    var d = !1;
                    if (null != i.children && 0 !== i.children.length) {
                      d = !0;
                      for (var l = 0, u = i.children; l < u.length; l++) {
                        var h = u[l],
                          c = this._nodeIndex[h.id];
                        if (
                          c
                            ? this._isGeometryVisible(c)
                            : this._isNodeVisible(h)
                        ) {
                          var p = this._lodGlobalHandlingRecursion(h.id, t);
                          d = d && p;
                        }
                      }
                    }
                    s && !o && (d || n.length < t) && (n.push(i), (s = !1));
                    var f = !i.featureData || 0 === i.featureData.length;
                    return d || s || f;
                  }),
                  (e.prototype._removeChildrenRecursive = function(e) {
                    if (null != e.children)
                      for (var t = 0, i = e.children; t < i.length; t++) {
                        var r = i[t],
                          o = this._nodeIndex[r.id];
                        null != o &&
                          (this._removeChildrenRecursive(o), n.push(o));
                      }
                  }),
                  (e.prototype._subtreeEmpty = function(e) {
                    return (
                      !this.layerViewRequiredFunctions.isNodeLoaded(e) &&
                      this.childrenEmpty(e)
                    );
                  }),
                  (e.prototype.childrenEmpty = function(e) {
                    if (null == e.children) return !0;
                    for (var t = 0, i = e.children; t < i.length; t++) {
                      var r = i[t];
                      if (this._isNodeVisible(r)) {
                        var n = this._nodeIndex[r.id];
                        if (null != n && !this._subtreeEmpty(n)) return !1;
                      }
                    }
                    return !0;
                  }),
                  e
                );
              })(),
              n = new i();
            return r;
          }.apply(null, r)) || (e.exports = n);
    },
    2183: function(e, t, i) {
      var r, n;
      (r = [
        i.dj.c(e.i),
        t,
        i(34),
        i(138),
        i(4),
        i(9),
        i(27),
        i(2032),
        i(2048),
        i(14)
      ]),
        void 0 ===
          (n = function(e, t, i, r, n, o, s, a, d, l) {
            var u = (function() {
              function e(t, i, r, n, a) {
                (this.loader = t),
                  (this.logger = i),
                  (this.defaultGeometrySchema = r),
                  (this.requiredAttributes = n),
                  (this.options = a),
                  (this.cancelled = !1),
                  (this.loadShared = function(t) {
                    if (null == t.sharedResource) return o.resolve({});
                    var i = s.makeAbsolute(t.sharedResource.href, t.baseUrl);
                    return this.load(i, "json").then(function(t) {
                      return (
                        e.fixTextureEncodings(t),
                        e.addAbsoluteHrefTexture(t, i),
                        t
                      );
                    });
                  });
              }
              return (
                (e.prototype.cancelAll = function() {
                  this.cancelled = !0;
                }),
                (e.prototype.load = function(e, t) {
                  var r = this.loader.request(e, t),
                    n = new i();
                  return (
                    r.then(
                      function(e, t) {
                        n.resolve(t);
                      },
                      function(t) {
                        n.reject(new Error("Failed to load: " + e));
                      }
                    ),
                    n.promise
                  );
                }),
                (e.prototype.loadAttribute = function(e, t, i) {
                  var r = s.makeAbsolute(i, e);
                  return this.load(r, "binary").then(function(e) {
                    return a.readBinaryAttribute(t, e);
                  });
                }),
                (e.prototype.loadAttributes = function(e, t, i) {
                  var r = this,
                    n = i.map(function(i) {
                      return null == e.attributeData ||
                        null == e.attributeData[i.index]
                        ? (r.logger.error(
                            "Missing attributeData for '" +
                              i.name +
                              "' on node '" +
                              e.id +
                              "'"
                          ),
                          o.resolve(null))
                        : r
                            .loadAttribute(
                              t,
                              i.attributeStorageInfo,
                              e.attributeData[i.index].href
                            )
                            .catch(function(t) {
                              return (
                                r.logger.error(
                                  "Failed to load attributeData for '" +
                                    i.name +
                                    "' on node '" +
                                    e.id +
                                    "'"
                                ),
                                null
                              );
                            });
                    });
                  return o.all(n).then(function(e) {
                    for (var t = {}, r = 0; r < i.length; ++r)
                      e[r] && (t[i[r].name] = e[r]);
                    return t;
                  });
                }),
                (e.prototype.prepareBinaryGeometryData = function(e, t, i, r) {
                  var o = e.geometries[0];
                  if (
                    (n.mixin(o.params, i),
                    r ||
                      null != i.vertexAttributes.region ||
                      delete i.vertexAttributes.region,
                    null != i.featureAttributes)
                  ) {
                    var s = i.featureAttributes;
                    if (s.faceRange) {
                      var l = a.createTypedView(t, s.faceRange),
                        u = s.faceRange.valuesPerElement,
                        h = i.header.fields.featureCount;
                      e.componentOffsets = d.convertFlatRangesToOffsets(
                        l,
                        h,
                        u
                      );
                    }
                    if (s.id) {
                      e.featureIds = [];
                      var c = 1,
                        p = a.valueType2TypedArrayClassMap[s.id.valueType];
                      "UInt64" === s.id.valueType &&
                        ((p = Uint32Array), (c = 2));
                      for (
                        var f = new p(
                            t,
                            s.id.byteOffset,
                            s.id.count * s.id.valuesPerElement * c
                          ),
                          _ = 0;
                        _ < i.header.fields.featureCount;
                        _++
                      )
                        if (
                          ((e.featureIds[_] = f[_ * s.id.valuesPerElement * c]),
                          2 === c)
                        ) {
                          var g = f[_ * s.id.valuesPerElement * c + 1];
                          if (g >= 2097150)
                            throw new Error(
                              "ID exceeded maximum range supported by javascript (max = 53bit-1 = 9007199254740991)"
                            );
                          e.featureIds[_] += 4294967296 * g;
                        }
                    }
                  }
                }),
                (e.prototype.loadBundleData = function(e, t) {
                  var i = this,
                    r = e.baseUrl,
                    n = null,
                    d = this.loadShared(e),
                    l = null;
                  null != this.requiredAttributes &&
                    (l = this.loadAttributes(e, r, this.requiredAttributes));
                  var u = null;
                  if (null != e.geometryData) {
                    var h = e.geometryData[t],
                      c = s.makeAbsolute(h.href, r);
                    u = this.load(c, "binary");
                  }
                  return d.then(function(r) {
                    return (
                      i.handleCancelled(),
                      (i.options.loadFeatureData
                        ? i.loadFeatureData(e, t)
                        : o.resolve(null)
                      )
                        .then(function(t) {
                          i.handleCancelled();
                          var s,
                            d = i.options.loadFeatureData
                              ? i.collectGeometries(e, t, r)
                              : i.meshPyramidGeometryData(e, r);
                          s =
                            null != u
                              ? u.then(function(e) {
                                  n = e;
                                  var t = Object.keys(r.materialDefinitions)[0],
                                    o =
                                      r.materialDefinitions[t].params
                                        .vertexRegions,
                                    s = a.createGeometryDataIndex(
                                      e,
                                      i.defaultGeometrySchema,
                                      o
                                    );
                                  return (
                                    i.prepareBinaryGeometryData(d[0], e, s, o),
                                    d
                                  );
                                })
                              : o.resolve(d);
                          var h = i.loadTextures(d, r);
                          return o.all([h, s, l]);
                        })
                        .then(function(e) {
                          var t = e[0],
                            o = e[1],
                            s = e[2];
                          i.handleCancelled();
                          var a = null;
                          return (
                            s &&
                              (a = {
                                attributeData: s,
                                loadedAttributes: i.requiredAttributes
                              }),
                            {
                              allGeometryData: o,
                              attributeDataInfo: a,
                              geometryBuffer: n,
                              sharedResource: r,
                              textureData: t
                            }
                          );
                        })
                    );
                  });
                }),
                (e.addAbsoluteHrefTexture = function(e, t) {
                  var i = e.textureDefinitions;
                  if (null != i)
                    for (var r = 0, n = Object.keys(i); r < n.length; r++)
                      for (var o = 0, a = i[n[r]].images; o < a.length; o++) {
                        var d = a[o];
                        Array.isArray(d.href)
                          ? (d.hrefConcat = d.href.map(function(e) {
                              return s.makeAbsolute(e, t);
                            }))
                          : (d.hrefConcat = s.makeAbsolute(d.href, t));
                      }
                }),
                (e.fixTextureEncodings = function(e) {
                  var t = e.textureDefinitions;
                  if (null != t)
                    for (var i in t) {
                      var r = t[i];
                      if (Array.isArray(r.encoding))
                        for (var n = 0; n < r.encoding.length; n++) {
                          var o;
                          "data:" === (o = r.encoding[n]).substring(0, 5) &&
                            (r.encoding[n] = o.substring(5));
                        }
                      else
                        "data:" === (o = r.encoding).substring(0, 5) &&
                          (r.encoding = o.substring(5));
                    }
                }),
                (e.prototype.loadTexture = function(e, t, i, r) {
                  var n = this;
                  return r === d.DDS_ENCODING_STRING
                    ? this.load(e, "binary").then(function(e) {
                        return (
                          n.handleCancelled(),
                          { i3sTexId: t, data: e, encoding: r }
                        );
                      })
                    : this.load(e, "image").then(function(e) {
                        var o = e;
                        if (
                          (n.handleCancelled(), i && e.width * e.height >= 4096)
                        ) {
                          var s = Math.ceil(e.width / 2),
                            a = Math.ceil(e.height / 2),
                            d = document.createElement("canvas");
                          (d.width = s),
                            (d.height = a),
                            d.getContext("2d").drawImage(e, 0, 0, s, a),
                            (o = d);
                        }
                        return { i3sTexId: t, data: o, encoding: r };
                      });
                }),
                (e.prototype.loadTextures = function(t, i) {
                  for (var r = [], n = 0; n < t.length; n++) {
                    var s = t[n].geometries;
                    if (null != s)
                      for (var a = 0, u = s; a < u.length; a++) {
                        var h = u[a].params.textureID || "none";
                        if ("none" !== h) {
                          (null != i.textureDefinitions &&
                            null != i.textureDefinitions[h]) ||
                            this.logger.warn(
                              "textureDefinitions missing in shared resource. i3sTexId: " +
                                h
                            );
                          var c = i.textureDefinitions[h];
                          if (
                            (l.assert(
                              void 0 !== c,
                              "geometry wants unknown texture " + h
                            ),
                            0 === c.images.length)
                          )
                            continue;
                          var p = c.images.length - 1,
                            f = c.images[p],
                            _ =
                              this.options.textureFormat ===
                              e.TextureFormat.Compressed,
                            g =
                              this.options.textureFormat ===
                              e.TextureFormat.Downsampled,
                            y = d.getAppropriateTextureEncoding(c.encoding, _),
                            v = y > -1 ? c.encoding[y] : c.encoding,
                            m = y > -1 ? f.hrefConcat[y] : f.hrefConcat;
                          this.options.loadTextureData
                            ? r.push(this.loadTexture(m, h, g, v))
                            : r.push({ i3sTexId: h, encoding: v, data: null });
                        }
                      }
                  }
                  return o.all(r);
                }),
                (e.prototype.meshPyramidGeometryData = function(e, t) {
                  return [
                    {
                      featureIds: [],
                      geometries: [
                        {
                          type: "ArrayBufferView",
                          params: {
                            materialID: t.materialDefinitions
                              ? Object.keys(t.materialDefinitions)[0]
                              : null,
                            textureID: t.textureDefinitions
                              ? Object.keys(t.textureDefinitions)[0]
                              : null
                          }
                        }
                      ],
                      featureDataPosition: [0, 0, 0]
                    }
                  ];
                }),
                (e.prototype.collectGeometries = function(e, t, i) {
                  for (
                    var r = [], n = 0, o = t.featureData;
                    n < o.length;
                    n++
                  ) {
                    var s = o[n],
                      a = s.geometries;
                    if (null != a)
                      for (var d = 0; d < a.length; d++) {
                        var l = s.geometries[d];
                        r.push({
                          featureIds: [s.id],
                          featureDataPosition: s.position,
                          geometries: [l]
                        });
                      }
                    else
                      null != s.position &&
                        r.push({
                          featureIds: [s.id],
                          featureDataPosition: s.position,
                          geometries: null
                        });
                  }
                  return r;
                }),
                (e.prototype.loadFeatureData = function(e, t) {
                  var i = s.makeAbsolute(e.featureData[t].href, e.baseUrl);
                  return this.load(i, "json");
                }),
                (e.prototype.handleCancelled = function() {
                  if (this.cancelled) throw new r();
                }),
                e
              );
            })();
            return (
              (function(e) {
                !(function(e) {
                  (e[(e.Compressed = 0)] = "Compressed"),
                    (e[(e.Normal = 1)] = "Normal"),
                    (e[(e.Downsampled = 2)] = "Downsampled");
                })(e.TextureFormat || (e.TextureFormat = {}));
              })(u || (u = {})),
              u
            );
          }.apply(null, r)) || (e.exports = n);
    },
    2184: function(e, t, i) {
      var r, n;
      (r = [
        i.dj.c(e.i),
        t,
        i(23),
        i(442),
        i(193),
        i(96),
        i(2048),
        i(7),
        i(99),
        i(2029),
        i(41),
        i(14)
      ]),
        void 0 ===
          (n = function(e, t, i, r, n, o, s, a, d, l, u, h) {
            return (function() {
              function e(e, t, o, s, l, u, h, c) {
                void 0 === c && (c = {}),
                  (this.indexSR = e),
                  (this._renderCoordsHelper = t),
                  (this.extent = l),
                  (this.elevationProvider = u),
                  (this.options = c),
                  (this._computedOBBs = {}),
                  (this._computedMBSs = {}),
                  (this._isNodeVisibleCached = {}),
                  (this.fp = []),
                  (this._idleCamera = !0),
                  (this.maxDistance = 0),
                  (this.maxLodLevel = 2),
                  (this._tmp1 = [0, 0, 0]),
                  (this._tmp2 = [0, 0, 0]),
                  (this._tmp3 = [0, 0, 0]),
                  (this._tmp0 = [0, 0, 0]),
                  (this.supportedMetrics = [
                    "maxScreenThreshold",
                    "screenSpaceRelative",
                    "removedFeatureDiameter",
                    "distanceRangeFromDefaultCamera"
                  ]),
                  (this.screenspaceErrorBias = c.screenspaceErrorBias || 1),
                  (this.progressiveLoadFactor = c.progressiveLoadFactor || 1),
                  (this.enableLoD = !c.disableLod);
                for (var p = 0; p < 8; ++p) this.fp[p] = d.plane.create();
                this.updateCamera(o),
                  (this._poi = a.vec3d.create(s)),
                  (this.engineSR = this._renderCoordsHelper.spatialReference),
                  h
                    ? ((this._elevationContext = new r()),
                      (this._elevationContext.featureExpressionInfoContext = n.createContext(
                        n.extractExpressionInfo(h, !1)
                      )),
                      this._elevationContext.mixinApi(h))
                    : (this._elevationContext = null),
                  (this.tmpPoint = new i({
                    x: 0,
                    y: 0,
                    z: 0,
                    spatialReference: e
                  }));
              }
              return (
                (e.prototype.updateCamera = function(e) {
                  h.matrixToFrustumPlanes(
                    e.viewMatrix,
                    e.projectionMatrix,
                    this.fp
                  ),
                    (this._screenSizeFactor = 1 / e.perPixelRatio),
                    (this._camPos = e.eye),
                    (this._isNodeVisibleCached = {});
                }),
                (e.prototype.updateNode = function(e) {
                  delete this._isNodeVisibleCached[e];
                }),
                (e.prototype.updatePointOfInterest = function(e) {
                  a.vec3d.set(e, this._poi), (this.maxDistance = 0);
                }),
                (e.prototype.updateScreenSpaceErrorBias = function(e) {
                  var t = this.screenspaceErrorBias;
                  return (this.screenspaceErrorBias = e), t;
                }),
                (e.prototype.setCameraIdle = function(e) {
                  this._idleCamera !== e &&
                    ((this._idleCamera = e), (this._isNodeVisibleCached = {}));
                }),
                (e.prototype.updateExtent = function(e) {
                  (this.extent = e), (this._isNodeVisibleCached = {});
                }),
                (e.prototype.computeMbs = function(e) {
                  var t = this._computedMBSs[e.id];
                  return (
                    t ||
                      ((t = a.vec4d.createFrom(
                        e.mbs[0],
                        e.mbs[1],
                        e.mbs[2],
                        -1
                      )),
                      (this._computedMBSs[e.id] = t)),
                    t[3] < 0 &&
                      (a.vec4d.set(e.mbs, t),
                      this._elevationContext &&
                        t[3] < 1e5 &&
                        ((this.tmpPoint.x = t[0]),
                        (this.tmpPoint.y = t[1]),
                        (this.tmpPoint.z = t[2]),
                        (t[2] = o.computeElevation(
                          this.elevationProvider,
                          this.tmpPoint,
                          this._elevationContext,
                          this._renderCoordsHelper,
                          null
                        ))),
                      u.mbsToMbs(t, this.indexSR, t, this.engineSR)),
                    t
                  );
                }),
                (e.prototype.computeObb = function(e) {
                  if (e.obb && !(e.obb.halfSize[0] < 0)) {
                    var t = this._computedOBBs[e.id];
                    return (
                      t ||
                        (((t = l.clone(e.obb)).halfSize[0] = -1),
                        (this._computedOBBs[e.id] = t)),
                      t.halfSize[0] < 0 &&
                        ((t.halfSize[0] = e.obb.halfSize[0]),
                        a.vec3d.set(e.obb.center, t.center),
                        this._elevationContext &&
                          e.mbs[3] < 1e5 &&
                          ((this.tmpPoint.x = e.obb.center[0]),
                          (this.tmpPoint.y = e.obb.center[1]),
                          (this.tmpPoint.z = e.obb.center[2]),
                          (t.center[2] = o.computeElevation(
                            this.elevationProvider,
                            this.tmpPoint,
                            this._elevationContext,
                            this._renderCoordsHelper,
                            null
                          ))),
                        u.bufferToBuffer(
                          t.center,
                          this.indexSR,
                          0,
                          t.center,
                          this.engineSR,
                          0,
                          1
                        )),
                      t
                    );
                  }
                }),
                (e.prototype._isNodeVisible = function(e) {
                  var t = this.computeMbs(e);
                  if (!this.isMBSinExtent(t)) return !1;
                  if (e.hasServiceOBB && e.obb) {
                    var i = this.computeObb(e);
                    return l.isVisible(i, this.fp);
                  }
                  return this.isMBSVisible(t);
                }),
                (e.prototype.isNodeVisible = function(e) {
                  return (
                    !this.enableLoD ||
                    (this._idleCamera
                      ? null != this._isNodeVisibleCached[e.id]
                        ? this._isNodeVisibleCached[e.id]
                        : ((this._isNodeVisibleCached[
                            e.id
                          ] = this._isNodeVisible(e)),
                          this._isNodeVisibleCached[e.id])
                      : this._isNodeVisible(e))
                  );
                }),
                (e.prototype.isGeometryVisible = function(e) {
                  if (!this.isNodeVisible(e)) return !1;
                  if (e.hasServiceOBB) return !0;
                  var t = this.computeObb(e);
                  return !t || l.isVisible(t, this.fp);
                }),
                (e.prototype.invalidateCache = function(e) {
                  if (null == e) {
                    for (
                      var t = 0, i = Object.keys(this._computedMBSs);
                      t < i.length;
                      t++
                    ) {
                      var r = i[t];
                      this._computedMBSs[r][3] = -1;
                    }
                    for (
                      var n = 0, o = Object.keys(this._computedOBBs);
                      n < o.length;
                      n++
                    ) {
                      r = o[n];
                      this._computedOBBs[r].halfSize[0] = -1;
                    }
                  } else
                    this._computedMBSs[e] && (this._computedMBSs[e][3] = -1),
                      this._computedOBBs[e] &&
                        (this._computedOBBs[e].halfSize[0] = -1);
                }),
                (e.prototype.isMBSinExtent = function(e) {
                  return (
                    !this.extent ||
                    0 !== s.intersectBoundingBoxWithMbs(this.extent, e)
                  );
                }),
                (e.prototype.isMBSVisible = function(e) {
                  var t = e[0],
                    i = e[1],
                    r = e[2],
                    n = e[3],
                    o = this.fp;
                  return (
                    o[0][0] * t + o[0][1] * i + o[0][2] * r + o[0][3] <= n &&
                    o[1][0] * t + o[1][1] * i + o[1][2] * r + o[1][3] <= n &&
                    o[2][0] * t + o[2][1] * i + o[2][2] * r + o[2][3] <= n &&
                    o[3][0] * t + o[3][1] * i + o[3][2] * r + o[3][3] <= n &&
                    o[4][0] * t + o[4][1] * i + o[4][2] * r + o[4][3] <= n &&
                    o[5][0] * t + o[5][1] * i + o[5][2] * r + o[5][3] <= n
                  );
                }),
                (e.prototype.calcScreenSpaceSize = function(e, t) {
                  var i = this.computeMbs(e),
                    r = i[3],
                    n = a.vec3d.dist2(i, this._camPos) - r * r;
                  return n < 0
                    ? 0.5 * Number.MAX_VALUE
                    : (t / Math.sqrt(n)) * this._screenSizeFactor;
                }),
                (e.prototype.calcCameraDistance = function(e) {
                  var t = this.computeMbs(e);
                  return Math.max(0, a.vec3d.dist(t, this._camPos) - t[3]);
                }),
                (e.prototype.calcAngleDependentLoD = function(e) {
                  var t = this.computeMbs(e),
                    i = t[3],
                    r =
                      (Math.abs(
                        t[0] * (t[0] - this._camPos[0]) +
                          t[1] * (t[1] - this._camPos[1]) +
                          t[2] * (t[2] - this._camPos[2])
                      ) /
                        a.vec3d.length(t) +
                        i) /
                      a.vec3d.dist(t, this._camPos);
                  return Math.min(1, r);
                }),
                (e.prototype.hasLOD = function(e) {
                  return null != e.lodSelection;
                }),
                (e.prototype.hasFeatures = function(e) {
                  return null != e.featureData;
                }),
                (e.prototype.getDistancePlanarMode = function(e, t, i) {
                  var r = e[0] - t[0],
                    n = e[1] - t[1],
                    o = e[2] - t[2],
                    s = r + r + n * n;
                  if (s <= i * i) return Math.abs(o);
                  var a = Math.sqrt(s) - i;
                  return Math.sqrt(o * o + a * a);
                }),
                (e.prototype.getDistanceGlobeMode = function(e, t, i) {
                  var r = a.vec3d.length(t),
                    n = a.vec3d.length(e) - r;
                  if (
                    (a.vec3d.scale(
                      e,
                      a.vec3d.dot(e, t) / a.vec3d.length2(e),
                      this._tmp0
                    ),
                    a.vec3d.dist2(t, this._tmp0) <= i * i)
                  )
                    return Math.abs(n);
                  var o = a.vec3d.scale(t, 1 / r, this._tmp0),
                    s = i,
                    d = r,
                    l = (s * s) / 2 / d,
                    u = a.vec3d.scale(o, d - l, this._tmp1),
                    h = e,
                    c = a.vec3d.subtract(h, u, this._tmp2),
                    p = a.vec3d.subtract(
                      c,
                      a.vec3d.scale(o, a.vec3d.dot(o, c), this._tmp3),
                      this._tmp2
                    ),
                    f = a.vec3d.add(
                      u,
                      a.vec3d.scale(p, s / a.vec3d.length(p), this._tmp2),
                      this._tmp2
                    ),
                    _ = a.vec3d.dist(h, f);
                  if (n >= 2e5) {
                    var g = a.vec3d.subtract(h, f, this._tmp1),
                      y = a.vec3d.dot(g, o) / a.vec3d.length(g);
                    y < 0.08 && (y = 1e-4), (_ /= y);
                  }
                  return _;
                }),
                (e.prototype.getDistance = function(e, t, i) {
                  return this.engineSR === u.SphericalECEFSpatialReference
                    ? this.getDistanceGlobeMode(e, t, i)
                    : this.getDistancePlanarMode(e, t, i);
                }),
                (e.prototype._selectErrorMetric = function(e) {
                  for (var t = 0; t < e.length; t++)
                    if (this.supportedMetrics.indexOf(e[t].metricType) >= 0)
                      return e[t];
                  return null;
                }),
                (e.prototype.getLodLevel = function(e) {
                  if (
                    !e.lodSelection ||
                    e.lodSelection.length <= 0 ||
                    !1 === this.hasFeatures(e)
                  )
                    return 0;
                  if (null == e.children || 0 === e.children.length)
                    return this.maxLodLevel;
                  var t = this.enableLoD
                    ? this._selectErrorMetric(e.lodSelection)
                    : null;
                  if (null == t) return 0;
                  if (this.progressiveLoadFactor < 1) {
                    var i =
                        this.progressiveLoadFactor * this.screenspaceErrorBias,
                      r = this.screenspaceErrorBias;
                    return this.evaluateLODmetric(e, i, t)
                      ? this.evaluateLODmetric(e, r, t)
                        ? 2
                        : 1
                      : 0;
                  }
                  return this.evaluateLODmetric(e, this.screenspaceErrorBias, t)
                    ? this.maxLodLevel
                    : 0;
                }),
                (e.prototype.evaluateLODmetric = function(e, t, i) {
                  switch (i.metricType) {
                    case "screenSpaceRelative":
                      var r = this.computeMbs(e),
                        n =
                          (2 * this.getDistance(this._camPos, r, r[3])) /
                          this._screenSizeFactor;
                      return i.maxError * t <= n;
                    case "maxScreenThreshold":
                      var o = this.calcScreenSpaceSize(e, e.mbs[3] * t);
                      return (
                        this.options.angleDependentLoD &&
                          (o *= this.calcAngleDependentLoD(e)),
                        o < i.maxError
                      );
                    case "removedFeatureDiameter":
                      return this.calcScreenSpaceSize(e, i.maxError) * t < 10;
                    case "distanceRangeFromDefaultCamera":
                      return this.calcCameraDistance(e) > i.maxError * t;
                  }
                  return !1;
                }),
                (e.prototype.distToPOI = function(e) {
                  var t = this.computeMbs(e),
                    i = a.vec3d.dist(t, this._poi) - t[3];
                  return (this.maxDistance = Math.max(this.maxDistance, i)), i;
                }),
                (e.prototype.distCameraToPOI = function() {
                  return a.vec3d.dist(this._camPos, this._poi);
                }),
                e
              );
            })();
          }.apply(null, r)) || (e.exports = n);
    }
  }
]),
  (function() {
    (this || window).webpackJsonp.registerAbsMids({
      "esri/layers/graphics/controllers/I3SOnDemandController": 1986,
      "esri/views/3d/layers/i3s/IdleQueue": 2098,
      "esri/views/3d/layers/i3s/I3SIndex": 2181,
      "esri/views/3d/layers/i3s/I3SLodHandling": 2182,
      "esri/views/3d/layers/i3s/I3SNodeLoader": 2183,
      "esri/views/3d/layers/i3s/I3SViewportQueries": 2184
    });
  })();