(window.webpackJsonp = window.webpackJsonp || []).push([
  [60],
  {
    1964: function(e, t, r) {
      var n, i;
      (n = [
        r.dj.c(e.i),
        t,
        r(9),
        r(21),
        r(2032),
        r(2058),
        r(2077),
        r(7),
        r(41)
      ]),
        void 0 ===
          (i = function(e, t, r, n, i, o, a, s, d) {
            var l = (function() {
                function e() {}
                return (
                  (e.prototype.process = function(e) {
                    var t = this.transform(e);
                    return r.resolve({ result: t, transferList: [t.rgb] });
                  }),
                  (e.prototype.transform = function(e) {
                    var t = this.readGeometry(e.schema, e.geometryBuffer),
                      r = a.evaluateRenderer(
                        e.rendererInfo,
                        e.primaryAttribute,
                        e.modulationAttribute,
                        t,
                        t.length / 3
                      );
                    this._applyElevationOffsetInPlace(t, e.elevationOffset);
                    var i = this._transformCoordinates(
                      t,
                      e.obb,
                      n.fromJSON(e.inSR),
                      n.fromJSON(e.outSR)
                    );
                    return { obb: e.obb, points: i, rgb: r.buffer };
                  }),
                  (e.prototype.readGeometry = function(e, t) {
                    if (null == e.encoding || "" === e.encoding) {
                      for (
                        var r = i.createGeometryDataIndex(t, e, !1),
                          n = i.createTypedView(t, r.vertexAttributes.position),
                          a = r.header.fields,
                          s = [a.offsetX, a.offsetY, a.offsetZ],
                          d = [a.scaleX, a.scaleY, a.scaleZ],
                          l = n.length / 3,
                          u = new Float64Array(3 * l),
                          p = 0;
                        p < l;
                        p++
                      )
                        (u[3 * p] = n[3 * p] * d[0] + s[0]),
                          (u[3 * p + 1] = n[3 * p + 1] * d[1] + s[1]),
                          (u[3 * p + 2] = n[3 * p + 2] * d[2] + s[2]);
                      return u;
                    }
                    if ("lepcc-xyz" === e.encoding)
                      return o.decodeXYZ(t).result;
                  }),
                  (e.prototype._transformCoordinates = function(e, t, r, n) {
                    var i = e.length / 3;
                    if (!d.bufferToBuffer(e, r, 0, e, n, 0, i))
                      throw Error("Can't reproject");
                    var o = s.vec3.createFrom(
                        t.center[0],
                        t.center[1],
                        t.center[2]
                      ),
                      a = s.vec3.create(),
                      l = s.vec3.create();
                    s.quat4.conjugate(t.quaternion, u);
                    for (var p = new Float32Array(3 * i), c = 0; c < i; c++)
                      (a[0] = e[3 * c] - o[0]),
                        (a[1] = e[3 * c + 1] - o[1]),
                        (a[2] = e[3 * c + 2] - o[2]),
                        s.quat4.multiplyVec3(u, a, l),
                        (t.halfSize[0] = Math.max(
                          t.halfSize[0],
                          Math.abs(l[0])
                        )),
                        (t.halfSize[1] = Math.max(
                          t.halfSize[1],
                          Math.abs(l[1])
                        )),
                        (t.halfSize[2] = Math.max(
                          t.halfSize[2],
                          Math.abs(l[2])
                        )),
                        (p[3 * c] = a[0]),
                        (p[3 * c + 1] = a[1]),
                        (p[3 * c + 2] = a[2]);
                    return p;
                  }),
                  (e.prototype._applyElevationOffsetInPlace = function(e, t) {
                    var r = e.length / 3;
                    if (0 !== t) for (var n = 0; n < r; n++) e[3 * n + 2] += t;
                  }),
                  e
                );
              })(),
              u = s.quat4.create();
            return l;
          }.apply(null, n)) || (e.exports = i);
    },
    1991: function(e, t, r) {
      var n, i;
      (n = [
        r.dj.c(e.i),
        t,
        r(5),
        r(0),
        r(138),
        r(108),
        r(18),
        r(63),
        r(63),
        r(17),
        r(11),
        r(9),
        r(313),
        r(39),
        r(26),
        r(260),
        r(1),
        r(48),
        r(84),
        r(428),
        r(2011),
        r(1964),
        r(2048),
        r(2098),
        r(2185),
        r(2186),
        r(2077),
        r(2187),
        r(2025),
        r(7),
        r(99),
        r(2029),
        r(41),
        r(52),
        r.dj.m(e)
      ]),
        void 0 ===
          (i = function(
            e,
            t,
            r,
            n,
            i,
            o,
            a,
            s,
            d,
            l,
            u,
            p,
            c,
            h,
            f,
            _,
            g,
            v,
            m,
            y,
            S,
            b,
            x,
            P,
            w,
            z,
            R,
            N,
            C,
            M,
            k,
            I,
            O,
            A,
            F
          ) {
            var W = u.getLogger("esri.views.3d.layers.PointCloudLayerView3D"),
              V = k.plane.create();
            return (function(t) {
              function u() {
                var e = (null !== t && t.apply(this, arguments)) || this;
                return (
                  (e.maximumPointCount = 4e6),
                  (e._renderer = null),
                  (e._rendererAdded = !1),
                  (e._renderedNodes = new Set()),
                  (e._updateViewNeeded = !0),
                  (e._idleUpdatesEnabled = !0),
                  (e._lodFactor = 1),
                  (e._worker = new b()),
                  (e._workerThread = null),
                  (e._maxLoggedBoxWarnings = 5),
                  (e._pageMultiplier = 1),
                  (e._handles = new l()),
                  (e._indexQueue = []),
                  (e._workQueue = []),
                  (e._idleQueue = new P.IdleQueue()),
                  (e._indexPagesLoading = new Map()),
                  (e._loadingNodes = new Map()),
                  (e._layerIsVisible = !1),
                  (e._totalWork = 0),
                  (e._index = null),
                  (e._loadingInitNodePage = !1),
                  (e._nodeIdArray = []),
                  e
                );
              }
              return (
                r(u, t),
                Object.defineProperty(u.prototype, "pointScale", {
                  get: function() {
                    var e = R.getSplatSizeAlgorithm(this.layer.renderer);
                    return e && null != e.scaleFactor ? e.scaleFactor : 1;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(u.prototype, "useRealWorldSymbolSizes", {
                  get: function() {
                    var e = R.getFixedSizeAlgorithm(this.layer.renderer);
                    return (
                      !(!e || null == e.useRealWorldSymbolSizes) &&
                      e.useRealWorldSymbolSizes
                    );
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(u.prototype, "pointSize", {
                  get: function() {
                    var e = R.getFixedSizeAlgorithm(this.layer.renderer);
                    return e && null != e.size ? e.size : 0;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(u.prototype, "inverseDensity", {
                  get: function() {
                    return this.layer.renderer
                      ? 96 / this.layer.renderer.pointsPerInch
                      : 5;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(u.prototype, "_clippingBox", {
                  get: function() {
                    var e = v.create(),
                      t = this.view.renderSpatialReference;
                    return O.extentToBoundingBox(this.view.clippingArea, e, t)
                      ? e
                      : null;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(u.prototype, "_elevationOffset", {
                  get: function() {
                    var e = this.layer.elevationInfo;
                    if (e && "absolute-height" === e.mode) {
                      var t = m.getMetersPerVerticalUnitForSR(
                          this.layer.spatialReference
                        ),
                        r = y.getMetersPerUnit(e.unit);
                      return ((e.offset || 0) * r) / t;
                    }
                    return 0;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (u.prototype.initialize = function() {
                  var t = this;
                  x.checkPointCloudLayerValid(this.layer),
                    x.checkPointCloudLayerCompatibleWithView(
                      this.layer,
                      this.view
                    ),
                    this._initRenderer();
                  var r = this._initNodePages(),
                    n = {
                      idleBegin: function() {
                        return t._idleBegin();
                      },
                      idleEnd: function() {
                        return t._idleEnd();
                      },
                      needsUpdate: function() {
                        return !0;
                      },
                      idleFrame: function(e) {
                        return t._process(e);
                      }
                    },
                    i = {
                      idleBegin: function() {
                        return t._idleBegin();
                      },
                      idleEnd: function() {
                        return t._idleEnd();
                      },
                      needsUpdate: function() {
                        return t._updateViewNeeded || t._workQueue.length > 0;
                      },
                      idleFrame: function(e) {
                        return t._processWhileSuspended(e);
                      }
                    };
                  _.open(c.getAbsMid("./PointCloudWorker", e, F), {
                    client: this
                  }).then(function(e) {
                    t.destroyed ? e.close() : (t._workerThread = e);
                  }),
                    this._handles.add(
                      f.init(this, "_clippingBox", function() {
                        return t._setUpdateViewNeeded();
                      })
                    ),
                    this._handles.add(
                      f.init(this.layer, "elevationInfo", function() {
                        return t._elevationInfoChanged();
                      })
                    ),
                    this._handles.add(
                      f.init(this, "_elevationOffset", function() {
                        return t._elevationOffsetChanged();
                      })
                    ),
                    this._handles.add(
                      f.init(this.layer, "renderer", function() {
                        return t._rendererChanged();
                      })
                    ),
                    this._handles.add(
                      f.init(this, "clippingArea", function() {
                        t._setUpdateViewNeeded();
                      })
                    ),
                    this._handles.add(
                      this.view.state.watch("camera", function() {
                        t._setUpdateViewNeeded();
                      })
                    ),
                    this.view.resourceController.memoryEvents.on(
                      "quality-changed",
                      function() {
                        return t._setUpdateViewNeeded();
                      }
                    ),
                    this.addResolvingPromise(r),
                    this.when(function() {
                      t._handles.add(
                        t.view.resourceController.registerFrameWorker(function(
                          e
                        ) {
                          return t._frame(e);
                        })
                      ),
                        t._handles.add(
                          f.init(t, "suspended", function(e) {
                            t._idleFrameWorker &&
                              (t._idleFrameWorker.remove(),
                              (t._idleFrameWorker = null)),
                              (t._idleFrameWorker = e
                                ? t.view.resourceController.registerIdleFrameWorker(
                                    i
                                  )
                                : t.view.resourceController.registerIdleFrameWorker(
                                    n
                                  ));
                          })
                        );
                    });
                }),
                (u.prototype._setUpdateViewNeeded = function() {
                  (this._updateViewNeeded = !0), this._updateLoading();
                }),
                (u.prototype.destroy = function() {
                  this._cancelNodeLoading(),
                    this._workerThread &&
                      (this._workerThread.close(), (this._workerThread = null)),
                    this._idleFrameWorker &&
                      (this._idleFrameWorker.remove(),
                      (this._idleFrameWorker = null)),
                    this._handles.destroy(),
                    this._destroyRenderer();
                }),
                (u.prototype._initRenderer = function() {
                  var e = this;
                  (this._renderer = new N()),
                    (this._renderer.layerUid = this.layer.uid),
                    this._handles.add(
                      f.init(this, "_clippingBox", function(t) {
                        e._renderer.clippingBox = t;
                      })
                    ),
                    this._handles.add(
                      f.init(this, "_clippingBox", function(t) {
                        e._renderer.clippingBox = t;
                      })
                    ),
                    this._handles.add(
                      f.init(this, "suspended", function(t) {
                        e._setPointsVisible(!t);
                      })
                    ),
                    this._handles.add(
                      f.init(this, "pointScale", function(t) {
                        e._renderer.scaleFactor = t;
                      })
                    ),
                    (this._renderer.minSizePx = Math.sqrt(2)),
                    this._handles.add(
                      f.init(this, "useRealWorldSymbolSizes", function(t) {
                        e._renderer.useRealWorldSymbolSizes = t;
                      })
                    ),
                    this._handles.add(
                      f.init(this, "pointSize", function(t) {
                        var r = h.pt2px(t);
                        (e._renderer.size = t), (e._renderer.sizePx = r);
                      })
                    ),
                    this._handles.add(
                      f.init(
                        this,
                        ["inverseDensity", "maximumPointCount"],
                        function() {
                          e._setUpdateViewNeeded();
                        }
                      )
                    ),
                    this._handles.add(
                      f.init(
                        this.view,
                        "qualitySettings.sceneService.pointCloud.lodFactor",
                        function(t) {
                          (e._lodFactor = t), e._setUpdateViewNeeded();
                        }
                      )
                    );
                }),
                (u.prototype._destroyRenderer = function() {
                  this._setPointsVisible(!1);
                }),
                (u.prototype._setPointsVisible = function(e) {
                  e && !this._rendererAdded
                    ? (this.view._stage.addExternalRenderer(
                        [A.OPAQUE_EXTERNAL],
                        this._renderer
                      ),
                      (this._rendererAdded = !0))
                    : !e &&
                      this._rendererAdded &&
                      (this.view._stage.removeExternalRenderer(this._renderer),
                      (this._rendererAdded = !1));
                }),
                (u.prototype._rendererChanged = function() {
                  this._clearNodeState(),
                    (this._renderer.useFixedSizes = R.rendererUsesFixedSizes(
                      this.layer.renderer
                    )),
                    this._setUpdateViewNeeded();
                }),
                (u.prototype._elevationInfoChanged = function() {
                  var e =
                    this.layer.elevationInfo && this.layer.elevationInfo.unit;
                  e &&
                    !y.supportsUnit(e) &&
                    W.warn(
                      "elevationInfo.unit",
                      "'" + e + "' is not a valid unit"
                    );
                }),
                (u.prototype._elevationOffsetChanged = function() {
                  this._clearNodeState(), this._initNodePages();
                }),
                (u.prototype.displayNodes = function(e) {
                  (this._workQueue = w.nodeDiff(
                    d.keysOfSet(this._renderedNodes),
                    e,
                    this._index
                  )),
                    w.sortFrontToBack(
                      this._workQueue,
                      this.view.state.camera.viewForward,
                      this._index
                    ),
                    w.splitWorkEntries(this._workQueue, 8, this._index),
                    this._updateQueues(),
                    (this._totalWork = this._computeWork()),
                    this._updateLoading(),
                    (this._layerIsVisible =
                      e.length > 0 || this._loadingInitNodePage),
                    this.notifyChange("suspended");
                }),
                (u.prototype.cancelLoading = function() {
                  this._cancelNodeLoading(), this._cancelIndexLoading();
                }),
                (u.prototype._cancelNodeLoading = function() {
                  var e = [];
                  this._loadingNodes.forEach(function(t) {
                    return e.push(t);
                  }),
                    this._loadingNodes.clear();
                  for (var t = 0, r = e; t < r.length; t++) r[t].cancel();
                  (this._workQueue = []),
                    this._idleQueue.cancelAll(),
                    (this._totalWork = this._computeWork()),
                    this._updateLoading();
                }),
                (u.prototype._updateQueues = function() {
                  var e = this,
                    t = new Set();
                  this._workQueue.forEach(function(e) {
                    e.load.forEach(function(e) {
                      t.add(e);
                    });
                  });
                  var r = [],
                    n = new Map();
                  this._loadingNodes.forEach(function(e, i) {
                    t.has(i) ? n.set(i, e) : r.push(e);
                  }),
                    (this._loadingNodes = n);
                  for (var i = 0, o = r; i < o.length; i++) o[i].cancel();
                  (this._workQueue = this._workQueue.filter(function(t) {
                    for (var r = 0, n = t.load; r < n.length; r++) {
                      var i = n[r];
                      if (e._loadingNodes.has(i)) return !1;
                    }
                    return !0;
                  })),
                    (this._totalWork = this._computeWork()),
                    this._updateLoading();
                }),
                (u.prototype._cancelIndexLoading = function() {
                  (this._indexQueue = []),
                    this._indexPagesLoading.forEach(function(e) {
                      return e.cancel();
                    }),
                    this._indexPagesLoading.clear(),
                    (this._totalWork = this._computeWork()),
                    this._updateLoading();
                }),
                (u.prototype._clearNodeState = function() {
                  var e = this;
                  this._renderedNodes.forEach(function(t) {
                    return e._removeFromRenderer(t);
                  }),
                    this._cancelNodeLoading();
                }),
                (u.prototype._idleBegin = function() {
                  this._setUpdateViewNeeded();
                }),
                (u.prototype._idleEnd = function() {
                  this._setUpdateViewNeeded();
                }),
                (u.prototype._frame = function(e) {
                  this.suspended
                    ? this._processWhileSuspended(e)
                    : this._process(e);
                }),
                (u.prototype._process = function(e) {
                  if (this._idleUpdatesEnabled) {
                    for (
                      this._updateViewNeeded &&
                      !e.done() &&
                      this._updateWorkQueues();
                      this._indexQueue.length > 0 && !e.done();

                    )
                      this._processIndexQueue();
                    for (
                      this._processWorkQueue(e);
                      this._idleQueue.length() > 0 && !e.done();

                    )
                      this._idleQueue.process();
                  }
                }),
                (u.prototype._processWhileSuspended = function(e) {
                  if (this._idleUpdatesEnabled)
                    for (
                      this._cancelNodeLoading(),
                        this._updateViewNeeded &&
                          !e.done() &&
                          this._updateWorkQueues();
                      this._workQueue.length > 0 && !e.done();

                    )
                      this._processWorkQueueRemoveOnly();
                }),
                (u.prototype._processIndexQueue = function() {
                  var e = this,
                    t = this._indexQueue.shift();
                  this._indexPagesLoading.set(t, this._loadNodePage(t)),
                    this._indexPagesLoading
                      .get(t)
                      .then(function(r) {
                        e._index.addPage(t, r, e._elevationOffset),
                          e._setUpdateViewNeeded();
                      })
                      .always(function() {
                        e._indexPagesLoading.delete(t);
                      });
                }),
                (u.prototype._processWorkQueue = function(e) {
                  for (; !e.done(); ) {
                    var t = this._scheduleWorkEntry();
                    if (!t) return;
                    this._processWorkEntry(t);
                  }
                }),
                (u.prototype._scheduleWorkEntry = function() {
                  var e = this;
                  if (this._loadingNodes.size >= 8) return null;
                  for (var t = 0; t < this._workQueue.length; ++t) {
                    var r = this._workQueue[t];
                    if (
                      !s.find(r.remove, function(t) {
                        return !e._renderedNodes.has(t);
                      })
                    ) {
                      for (var n = t; n > 0; --n)
                        this._workQueue[n] = this._workQueue[n - 1];
                      return this._workQueue.shift(), r;
                    }
                  }
                  return null;
                }),
                (u.prototype._processWorkEntry = function(e) {
                  var t = this;
                  if (0 !== e.load.length)
                    o(
                      e.load.map(function(e) {
                        return (
                          t._loadingNodes.has(e) ||
                            t._loadingNodes.set(e, t.loadNode(e)),
                          t._loadingNodes.get(e)
                        );
                      })
                    )
                      .then(function(r) {
                        for (var n = 0; n < e.load.length; n++)
                          t._addToRenderer(e.load[n], r[n]);
                        for (n = 0; n < e.remove.length; n++)
                          t._removeFromRenderer(e.remove[n]);
                      })
                      .always(function() {
                        for (var r = 0; r < e.load.length; r++)
                          t._loadingNodes.delete(e.load[r]);
                        t._updateLoading();
                      }),
                      this._updateLoading();
                  else
                    for (var r = 0; r < e.remove.length; r++)
                      this._removeFromRenderer(e.remove[r]);
                }),
                (u.prototype._processWorkQueueRemoveOnly = function() {
                  for (
                    var e = this._workQueue.shift(), t = 0;
                    t < e.remove.length;
                    t++
                  )
                    this._removeFromRenderer(e.remove[t]);
                  this._updateLoading();
                }),
                (u.prototype._computeWork = function() {
                  for (var e = 0, t = 0; t < this._workQueue.length; t++)
                    e += this._workQueue[t].load.length;
                  return (
                    (e += this._loadingNodes.size),
                    (e +=
                      (this._indexQueue.length + this._indexPagesLoading.size) *
                      this._index.pageSize),
                    (e += this._loadingInitNodePage ? 100 : 0) +
                      (this._updateViewNeeded ? 100 : 0)
                  );
                }),
                Object.defineProperty(u.prototype, "updatingPercentageValue", {
                  get: function() {
                    var e = this._computeWork();
                    return (
                      (100 * Math.min(this._totalWork, e)) / this._totalWork
                    );
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (u.prototype._updateLoading = function() {
                  this.notifyChange("updating"),
                    this.notifyChange("updatingPercentageValue");
                }),
                (u.prototype.canResume = function() {
                  return this.inherited(arguments) && this._layerIsVisible;
                }),
                (u.prototype.isUpdating = function() {
                  return this._computeWork() > 0;
                }),
                (u.prototype._initNodePages = function() {
                  var e = this,
                    t = this.layer.store.index,
                    r = t.nodesPerPage || t.nodePerIndexBlock;
                  return (
                    (this._index = new z(
                      this.layer.spatialReference,
                      this.view.renderCoordsHelper.spatialReference,
                      r
                    )),
                    this._cancelIndexLoading(),
                    (this._traverseVisible = this._index.createVisibilityTraverse()),
                    (this._loadingInitNodePage = !0),
                    (this._layerIsVisible = !0),
                    this.notifyChange("suspended"),
                    this._updateLoading(),
                    (this._pageMultiplier =
                      null != t.nodesPerPage ? 1 : t.nodePerIndexBlock),
                    this._loadNodePage(0).then(function(t) {
                      e._index.addPage(0, t, e._elevationOffset),
                        (e._loadingInitNodePage = !1),
                        e._setUpdateViewNeeded();
                    })
                  );
                }),
                (u.prototype._loadNodePage = function(e) {
                  var t = this,
                    r = this.baseUrl + "/nodepages/" + e * this._pageMultiplier;
                  return this._requestJSON(r).then(function(r) {
                    return r.data.nodes.map(function(r, n) {
                      return {
                        resourceId:
                          null != r.resourceId
                            ? r.resourceId
                            : e * t._index.pageSize + n,
                        obb: r.obb,
                        firstChild: r.firstChild,
                        childCount: r.childCount,
                        vertexCount:
                          null != r.vertexCount ? r.vertexCount : r.pointCount,
                        lodThreshold:
                          null != r.lodThreshold
                            ? r.lodThreshold
                            : r.effectiveArea
                      };
                    });
                  });
                }),
                (u.prototype._updateWorkQueues = function() {
                  for (
                    var e =
                        (this.inverseDensity / this._lodFactor) *
                        this._getLodMemoryFactor(),
                      t =
                        this.maximumPointCount *
                        this._lodFactor *
                        this._getLodMemoryFactor(),
                      r = this._computeNodesForMinimumDensity(e),
                      n = this._computePointCount(r),
                      i = Math.sqrt(n / (0.75 * t));
                    n > t;

                  )
                    (e *= i),
                      (r = this._computeNodesForMinimumDensity(e)),
                      (n = this._computePointCount(r)),
                      (i = Math.sqrt(2));
                  this.displayNodes(r),
                    (this._updateViewNeeded = !1),
                    this._updateLoading();
                }),
                (u.prototype._computePointCount = function(e) {
                  for (var t = 0, r = 0; r < e.length; r++) {
                    var n = this._index.getNode(e[r]);
                    n && (t += n.vertexCount);
                  }
                  return t;
                }),
                (u.prototype._getLodMemoryFactor = function() {
                  return this.view.resourceController.memoryFactor;
                }),
                (u.prototype._computeNodesForMinimumDensity = function(e) {
                  var t = this,
                    r = this.view.state.camera,
                    n = r.frustumPlanes,
                    i = this._clippingBox,
                    o = r.viewForward,
                    a = M.vec3d.dot(o, r.eye),
                    s = k.plane.fromNormalAndOffset(o, -a, V),
                    d = r.perPixelRatio,
                    l = e * e,
                    u = this._nodeIdArray;
                  return (
                    (u.length = 0),
                    this._traverseVisible(
                      { frustumPlanes: n, clippingBox: i },
                      {
                        predicate: function(e, r, n) {
                          if (!n) return !1;
                          if (0 === r.childCount) return u.push(e), !1;
                          var i = t._index.getRenderObb(e);
                          return !(
                            t._computeAveragePixelArea(
                              i,
                              r.lodThreshold,
                              r.vertexCount,
                              s,
                              d
                            ) <= l && (u.push(e), 1)
                          );
                        },
                        pageMiss: function(e, r) {
                          u.push(e),
                            t._indexQueue.indexOf(r) < 0 &&
                              t._indexQueue.push(r);
                        }
                      }
                    ),
                    u
                  );
                }),
                (u.prototype._computeAveragePixelArea = function(
                  e,
                  t,
                  r,
                  n,
                  i
                ) {
                  var o = Math.max(1e-7, I.minimumDistancePlane(e, n));
                  return t / (o * o) / (4 * i * i) / r;
                }),
                (u.prototype.loadNode = function(e) {
                  var t = this,
                    r = this._index.getNode(e),
                    n = R.getRendererInfo(this.layer),
                    a = [];
                  return this._idleQueue
                    .push()
                    .then(function() {
                      var e = r.resourceId,
                        i = t.loadGeometry(e),
                        s = t.loadAttribute(e, n.primaryAttribute),
                        d = t.loadAttribute(e, n.modulationAttribute);
                      return o((a = [i, s, d]));
                    })
                    .then(function(r) {
                      var i = r[0],
                        o = r[1],
                        a = r[2],
                        s = [i];
                      o && s.push(o), a && s.push(a);
                      var d = {
                        geometryBuffer: i,
                        primaryAttribute: o,
                        modulationAttribute: a,
                        schema: t.layer.store.defaultGeometrySchema,
                        rendererInfo: n,
                        obb: t._index.getRenderObb(e),
                        elevationOffset: t._elevationOffset,
                        inSR: t.layer.spatialReference.toJSON(),
                        outSR: t.view.renderCoordsHelper.spatialReference.toJSON()
                      };
                      return t._workerThread
                        ? t._workerThread.invoke("process", d, s)
                        : p.resolve(t._worker.transform(d));
                    })
                    .catch(function(e) {
                      if (e instanceof i)
                        for (var t = 0, r = a; t < r.length; t++) {
                          r[t].cancel();
                        }
                      else console.error(e);
                      return p.reject(e);
                    });
                }),
                (u.prototype.loadGeometry = function(e) {
                  var t = this.baseUrl + "/nodes/" + e + "/geometries/0";
                  return this._requestBinary(t).then(function(e) {
                    return e.data;
                  });
                }),
                (u.prototype.loadAttribute = function(e, t) {
                  if (!t || !t.storageInfo) return p.resolve(null);
                  var r = t.storageInfo.key,
                    n = this.baseUrl + "/nodes/" + e + "/attributes/" + r;
                  return this._requestBinary(n).then(function(e) {
                    return e.data;
                  });
                }),
                (u.prototype._requestJSON = function(e) {
                  return a(e, { query: { f: "json" }, responseType: "json" });
                }),
                (u.prototype._requestBinary = function(e) {
                  return a(e, { responseType: "array-buffer" });
                }),
                (u.prototype._removeFromRenderer = function(e) {
                  this._renderedNodes.has(e) &&
                    (this._renderer.removeNode("" + e),
                    this._renderedNodes.delete(e));
                }),
                (u.prototype._addToRenderer = function(e, t) {
                  if (!this._renderedNodes.has(e)) {
                    this._renderedNodes.add(e);
                    var r = this._index.getNode(e),
                      n = this._index.getRenderObb(e);
                    (t.obb.halfSize[0] > n.halfSize[0] ||
                      t.obb.halfSize[1] > n.halfSize[1] ||
                      t.obb.halfSize[2] > n.halfSize[2]) &&
                      (this._maxLoggedBoxWarnings > 0 &&
                        (W.warn(
                          "Node",
                          e,
                          "reported bounding box too small, got",
                          n,
                          "but points cover",
                          t.obb
                        ),
                        0 == --this._maxLoggedBoxWarnings &&
                          W.warn(
                            "  Too many bounding box errors, stopping reporting for this layer."
                          )),
                      this._index.setRenderObb(e, t.obb));
                    var i = Math.sqrt(r.lodThreshold / r.vertexCount);
                    this._renderer.addNode({
                      id: "" + e,
                      coordinates: t.points,
                      origin: n.center,
                      rgb: t.rgb,
                      splatSize: i,
                      obb: n,
                      isLeaf: 0 === r.childCount
                    });
                  }
                }),
                (u.prototype.removeCachedData = function() {
                  var e = this;
                  this.suspended &&
                    this._renderedNodes.forEach(function(t) {
                      return e._removeFromRenderer(t);
                    });
                }),
                (u.prototype.getCachedMemory = function() {
                  return 0;
                }),
                (u.prototype.getUsedMemory = function() {
                  var e = this;
                  return (
                    d.keysOfSet(this._renderedNodes).reduce(function(t, r) {
                      return t + 15 * e._index.getNode(r).vertexCount + 128;
                    }, 0) /
                    1024 /
                    1024
                  );
                }),
                (u.prototype.getUnloadedMemory = function() {
                  var e = this,
                    t = this._renderedNodes.size;
                  if (t < 4) return 0;
                  for (
                    var r = d
                        .keysOfSet(this._renderedNodes)
                        .reduce(function(t, r) {
                          return t + e._index.getNode(r).vertexCount;
                        }),
                      n = this._loadingNodes.size,
                      i = 0;
                    i < this._workQueue.length;
                    i++
                  )
                    (n += this._workQueue[i].load.length),
                      (n -= this._workQueue[i].remove.length);
                  return n < 0
                    ? 0
                    : (((n * r) / t) * 15 + 128 * n) / 1024 / 1024;
                }),
                (u.prototype.getStats = function() {
                  var e = this;
                  return {
                    "Rendered Nodes": this._renderedNodes.size,
                    "Rendered Points": d
                      .keysOfSet(this._renderedNodes)
                      .reduce(function(t, r) {
                        return t + e._index.getNode(r).vertexCount;
                      }, 0),
                    "Loading Nodes": this._loadingNodes.size,
                    "Index Queue": this._indexQueue.length,
                    "Work Queue": this._workQueue.length,
                    "Idle Queue": this._idleQueue.length()
                  };
                }),
                n([g.property()], u.prototype, "layer", void 0),
                n(
                  [
                    g.property({
                      readOnly: !0,
                      aliasOf: "layer.parsedUrl.path"
                    })
                  ],
                  u.prototype,
                  "baseUrl",
                  void 0
                ),
                n(
                  [g.property({ readOnly: !0, dependsOn: ["layer.renderer"] })],
                  u.prototype,
                  "pointScale",
                  null
                ),
                n(
                  [g.property({ readOnly: !0, dependsOn: ["layer.renderer"] })],
                  u.prototype,
                  "useRealWorldSymbolSizes",
                  null
                ),
                n(
                  [g.property({ readOnly: !0, dependsOn: ["layer.renderer"] })],
                  u.prototype,
                  "pointSize",
                  null
                ),
                n(
                  [g.property({ readOnly: !0, dependsOn: ["layer.renderer"] })],
                  u.prototype,
                  "inverseDensity",
                  null
                ),
                n([g.property()], u.prototype, "maximumPointCount", void 0),
                n(
                  [
                    g.property({
                      readOnly: !0,
                      dependsOn: ["view.clippingArea"]
                    })
                  ],
                  u.prototype,
                  "_clippingBox",
                  null
                ),
                n(
                  [
                    g.property({
                      readOnly: !0,
                      dependsOn: ["layer.elevationInfo"]
                    })
                  ],
                  u.prototype,
                  "_elevationOffset",
                  null
                ),
                n(
                  [g.property(C.updatingPercentage)],
                  u.prototype,
                  "updatingPercentage",
                  void 0
                ),
                n(
                  [g.property({ readOnly: !0 })],
                  u.prototype,
                  "updatingPercentageValue",
                  null
                ),
                n([g.subclass("esri.views.3d.layers.PointCloudLayerView3D")], u)
              );
            })(g.declared(S));
          }.apply(null, n)) || (e.exports = i);
    },
    2077: function(e, t, r) {
      var n, i;
      (n = [r.dj.c(e.i), t, r(318), r(319), r(320), r(2032)]),
        void 0 ===
          (i = function(e, t, r, n, i, o) {
            function a(e, t) {
              for (var r = 0, n = e; r < n.length; r++) {
                var i = n[r];
                if (
                  i.name === t &&
                  null != i.attributeValues &&
                  "UInt8" === i.attributeValues.valueType &&
                  3 === i.attributeValues.valuesPerElement
                )
                  return { storageInfo: i, useElevation: !1 };
              }
              return null;
            }
            function s(e, t) {
              for (var r = 0, n = e; r < n.length; r++) {
                var i = n[r];
                if (i.name === t) {
                  var o = "embedded-elevation" === i.encoding;
                  return { storageInfo: o ? null : i, useElevation: o };
                }
              }
              return "elevation" === t.toLowerCase()
                ? { storageInfo: null, useElevation: !0 }
                : null;
            }
            function d(e, t, r, n) {
              if (e && e.useElevation) {
                for (var i = new Float64Array(n), a = 0; a < n; a++)
                  i[a] = r[3 * a + 2];
                return i;
              }
              return e && t ? o.readBinaryAttribute(e.storageInfo, t, n) : null;
            }
            function l(e) {
              return null == e || "none" === e
                ? null
                : "low-four-bit" === e
                  ? function(e) {
                      return 15 & e;
                    }
                  : "high-four-bit" === e
                    ? function(e) {
                        return (240 & e) >> 4;
                      }
                    : "absolute-value" === e
                      ? function(e) {
                          return Math.abs(e);
                        }
                      : "modulo-ten" === e
                        ? function(e) {
                            return e % 10;
                          }
                        : null;
            }
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.getRendererInfo = function(e) {
                var t = e.renderer,
                  r = t && t.type,
                  n = (t && e.renderer.toJSON()) || null,
                  i = null,
                  o = !1;
                "point-cloud-unique-value" === r
                  ? (i = s(e.attributeStorageInfo, t.field))
                  : "point-cloud-stretch" === r
                    ? (i = s(e.attributeStorageInfo, t.field))
                    : "point-cloud-class-breaks" === r
                      ? (i = s(e.attributeStorageInfo, t.field))
                      : (o =
                          "point-cloud-rgb" === r
                            ? null != (i = a(e.attributeStorageInfo, t.field))
                            : null != (i = a(e.attributeStorageInfo, "RGB")));
                var d = null;
                return (
                  t &&
                    t.colorModulation &&
                    (d = s(e.attributeStorageInfo, t.colorModulation.field)),
                  {
                    rendererJSON: n,
                    isRGBRenderer: o,
                    primaryAttribute: i,
                    modulationAttribute: d
                  }
                );
              }),
              (t.evaluateRenderer = function(e, t, o, a, s) {
                var u = e.rendererJSON,
                  p = e.isRGBRenderer,
                  c = e.primaryAttribute,
                  h = e.modulationAttribute,
                  f = d(c, t, a, s),
                  _ = d(h, o, a, s),
                  g = null,
                  v = null;
                if (f && p) g = f;
                else if (f && "pointCloudUniqueValueRenderer" === u.type) {
                  var m = (v = i.fromJSON(u)).colorUniqueValueInfos;
                  g = new Uint8Array(3 * s);
                  for (var y = l(v.fieldTransformType), S = 0; S < s; S++)
                    for (
                      var b = (w = y ? y(f[S]) : f[S]) + "", x = 0;
                      x < m.length;
                      x++
                    )
                      if (m[x].values.indexOf(b) >= 0) {
                        (g[3 * S] = m[x].color.r),
                          (g[3 * S + 1] = m[x].color.g),
                          (g[3 * S + 2] = m[x].color.b);
                        break;
                      }
                } else if (f && "pointCloudStretchRenderer" === u.type) {
                  var P = (v = n.fromJSON(u)).stops;
                  for (
                    g = new Uint8Array(3 * s),
                      y = l(v.fieldTransformType),
                      S = 0;
                    S < s;
                    S++
                  ) {
                    var w = y ? y(f[S]) : f[S],
                      z = P.length - 1;
                    if (w < P[0].value)
                      (g[3 * S] = P[0].color.r),
                        (g[3 * S + 1] = P[0].color.g),
                        (g[3 * S + 2] = P[0].color.b);
                    else if (w >= P[z].value)
                      (g[3 * S] = P[z].color.r),
                        (g[3 * S + 1] = P[z].color.g),
                        (g[3 * S + 2] = P[z].color.b);
                    else
                      for (x = 1; x < P.length; x++)
                        if (w < P[x].value) {
                          var R =
                            (w - P[x - 1].value) /
                            (P[x].value - P[x - 1].value);
                          (g[3 * S] =
                            P[x].color.r * R + P[x - 1].color.r * (1 - R)),
                            (g[3 * S + 1] =
                              P[x].color.g * R + P[x - 1].color.g * (1 - R)),
                            (g[3 * S + 2] =
                              P[x].color.b * R + P[x - 1].color.b * (1 - R));
                          break;
                        }
                  }
                } else if (f && "pointCloudClassBreaksRenderer" === u.type) {
                  var N = (v = r.fromJSON(u)).colorClassBreakInfos;
                  for (
                    g = new Uint8Array(3 * s),
                      y = l(v.fieldTransformType),
                      S = 0;
                    S < s;
                    S++
                  )
                    for (w = y ? y(f[S]) : f[S], x = 0; x < N.length; x++)
                      if (w >= N[x].minValue && w <= N[x].maxValue) {
                        (g[3 * S] = N[x].color.r),
                          (g[3 * S + 1] = N[x].color.g),
                          (g[3 * S + 2] = N[x].color.b);
                        break;
                      }
                } else
                  for (g = new Uint8Array(3 * s), S = 0; S < g.length; S++)
                    g[S] = 255;
                if (_ && v && v.colorModulation) {
                  var C = v.colorModulation.minValue,
                    M = v.colorModulation.maxValue;
                  for (S = 0; S < s; S++) {
                    var k =
                      (w = _[S]) >= M
                        ? 1
                        : w <= C
                          ? 0.3
                          : 0.3 + (0.7 * (w - C)) / (M - C);
                    (g[3 * S] = k * g[3 * S]),
                      (g[3 * S + 1] = k * g[3 * S + 1]),
                      (g[3 * S + 2] = k * g[3 * S + 2]);
                  }
                }
                return g;
              }),
              (t.getSplatSizeAlgorithm = function(e) {
                var t = e && e.pointSizeAlgorithm;
                return t && "splat" === t.type ? t : null;
              }),
              (t.getFixedSizeAlgorithm = function(e) {
                var t = e && e.pointSizeAlgorithm;
                return t && "fixed-size" === t.type ? t : null;
              }),
              (t.rendererUsesFixedSizes = function(e) {
                var t = e && e.pointSizeAlgorithm;
                return !(!t || !t.type) && "fixed-size" === t.type;
              });
          }.apply(null, n)) || (e.exports = i);
    },
    2098: function(e, t, r) {
      var n, i;
      (n = [r.dj.c(e.i), t, r(34)]),
        void 0 ===
          (i = function(e, t, r) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var n = (function() {
              function e() {
                (this._deferreds = []), (this._values = []);
              }
              return (
                (e.prototype.push = function(e) {
                  var t = new r();
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
            t.IdleQueue = n;
          }.apply(null, n)) || (e.exports = i);
    },
    2185: function(e, t, r) {
      var n, i;
      (n = [r.dj.c(e.i), t, r(7)]),
        void 0 ===
          (i = function(e, t, r) {
            function n(e, t, r) {
              for (var n = e; n > 0; ) {
                var i = t.indexOf(n);
                if (i >= 0) return i;
                n = r.getParentId(n);
              }
              return t.indexOf(n);
            }
            function i(e, t) {
              for (var r = [e.remove[0]], n = []; 1 === r.length; ) {
                var i = r.pop();
                n.length = 0;
                for (var o = 0; o < e.load.length; o++) {
                  for (var a = e.load[o], s = t.getParentId(a); s !== i; )
                    (a = s), (s = t.getParentId(a));
                  var d = r.indexOf(a);
                  d < 0 && ((d = r.length), r.push(a), n.push([])),
                    n[d].push(e.load[o]);
                }
              }
              var l = [];
              l.push({ remove: e.remove, load: r });
              for (o = 0; o < r.length; o++)
                n[o].length > 1
                  ? l.push({ remove: [r[o]], load: n[o] })
                  : (r[o] = n[o][0]);
              return l;
            }
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.nodeDiff = function(e, t, r) {
                for (var i = 0; i < t.length; i++) (s[i] = !1), (d[i] = null);
                for (i = 0; i < e.length; i++) (o[i] = !1), (a[i] = null);
                for (i = 0; i < t.length; i++)
                  (l = n(t[i], e, r)) >= 0 &&
                    ((s[i] = !0),
                    null != a[l] ? a[l].push(t[i]) : (a[l] = [t[i]]));
                for (i = 0; i < e.length; i++) {
                  var l;
                  (l = n(e[i], t, r)) >= 0 &&
                    ((o[i] = !0),
                    null != d[l] ? d[l].push(e[i]) : (d[l] = [e[i]]));
                }
                var u = [];
                for (i = 0; i < e.length; i++)
                  null != a[i] || o[i] || u.push({ load: [], remove: [e[i]] });
                for (i = 0; i < t.length; i++)
                  null != d[i] || s[i] || u.push({ load: [t[i]], remove: [] });
                for (i = 0; i < t.length; i++)
                  null != d[i] &&
                    (d[i].length > 1 || d[i][0] !== t[i]) &&
                    u.push({ load: [t[i]], remove: d[i] });
                for (i = 0; i < e.length; i++)
                  null != a[i] &&
                    (a[i].length > 1 || a[i][0] !== e[i]) &&
                    u.push({ load: a[i], remove: [e[i]] });
                return u;
              });
            var o = [!1],
              a = [null],
              s = [!1],
              d = [null];
            (t.sortFrontToBack = function(e, t, n) {
              return e.sort(function(e, i) {
                if (0 === e.load.length && 0 === i.load.length) return 0;
                if (0 === e.load.length) return -1;
                if (0 === i.load.length) return 1;
                if (0 === e.remove.length && 0 === i.remove.length) {
                  var o = n.getRenderCenter(e.load[0]),
                    a = n.getRenderCenter(i.load[0]);
                  return r.vec3d.dot(o, t) - r.vec3d.dot(a, t);
                }
                return 0 === e.remove.length
                  ? -1
                  : 0 === i.remove.length
                    ? 1
                    : 1 === e.load.length && 1 === i.load.length
                      ? ((o = n.getRenderCenter(e.load[0])),
                        (a = n.getRenderCenter(i.load[0])),
                        r.vec3d.dot(o, t) - r.vec3d.dot(a, t))
                      : 1 === e.load.length
                        ? -1
                        : 1 === i.load.length
                          ? 1
                          : ((o = n.getRenderCenter(e.remove[0])),
                            (a = n.getRenderCenter(i.remove[0])),
                            r.vec3d.dot(o, t) - r.vec3d.dot(a, t));
              });
            }),
              (t.splitWorkEntries = function(e, t, r) {
                for (var n = 0; n < e.length; ++n) {
                  var o = e[n];
                  if (o.load.length > t && 1 === o.remove.length) {
                    var a = i(o, r);
                    e[n] = a[0];
                    for (var s = 1; s < a.length; s++) e.push(a[s]);
                  }
                }
              }),
              (t.splitWorkEntry = i);
          }.apply(null, n)) || (e.exports = i);
    },
    2186: function(e, t, r) {
      var n, i;
      (n = [r.dj.c(e.i), t, r(48), r(7), r(2029), r(41)]),
        void 0 ===
          (i = function(e, t, r, n, i, o) {
            function a(e, t, n) {
              var o = e.index;
              if (o.hasNodes(0, 1)) {
                var a = e.queue;
                (a.length = 0), a.push(0);
                var s = e.masks;
                for (s.length = 0, s.push(0); a.length > 0; ) {
                  var l = a.pop(),
                    u = s.pop(),
                    p = o.getNode(l),
                    c = o.getRenderObb(l),
                    h = !0;
                  if (null != t.clippingBox)
                    if (0 == (u & (g = 1 << t.frustumPlanes.length))) {
                      var f = i.toAaBoundingBox(c, e.tempAabb);
                      r.contains(t.clippingBox, f)
                        ? (u |= g)
                        : r.intersects(t.clippingBox, f) || (h = !1);
                    }
                  for (var _ = 0; _ < t.frustumPlanes.length && h; _++) {
                    var g;
                    if (0 == (u & (g = 1 << _))) {
                      var v = i.intersectPlane(c, t.frustumPlanes[_]);
                      v > 0 ? (h = !1) : v < 0 && (u |= g);
                    }
                  }
                  if (n.predicate(l, p, h)) {
                    for (
                      var m = p.firstChild,
                        y = p.childCount,
                        S = !1,
                        b = d(m, o.pageSize),
                        x = d(m + y - 1, o.pageSize),
                        P = b;
                      P <= x;
                      P++
                    )
                      if (!o.hasPage(P)) {
                        n.pageMiss(l, P), (S = !0);
                        break;
                      }
                    if (!S) for (_ = 0; _ < y; _++) a.push(m + _), s.push(u);
                  }
                }
              }
            }
            function s(e, t, r, a) {
              for (var s = new i.ObbArray(e.length), d = 0; d < e.length; d++) {
                var l = e[d].obb,
                  p = s.obbs[d];
                if (
                  (i.set(l, p),
                  n.vec3.set3(l.center[0], l.center[1], l.center[2] + a, u),
                  !t.isGeographic && r === o.SphericalECEFSpatialReference)
                ) {
                  o.computeLinearTransformation(t, u, c, r);
                  var f = 2 * Math.sqrt(1 + c[0] + c[5] + c[10]);
                  (h[0] = (c[9] - c[6]) / f),
                    (h[1] = (c[2] - c[8]) / f),
                    (h[2] = (c[4] - c[1]) / f),
                    (h[3] = 0.25 * f),
                    n.quat4.conjugate(h),
                    n.quat4.multiply(h, p.quaternion, p.quaternion);
                }
                o.bufferToBuffer(u, t, 0, p.center, r, 0, 1);
              }
              return s.obbs;
            }
            function d(e, t) {
              return (e / t) | 0;
            }
            function l(e, t) {
              return e % t;
            }
            var u = n.vec3d.create(),
              p = (function() {
                function e(e, t, r) {
                  (this._pages = []),
                    (this.pageSize = 0),
                    (this._nodeSR = null),
                    (this._renderSR = null),
                    (this._nodeSR = e),
                    (this._renderSR = t),
                    (this.pageSize = r);
                }
                return (
                  (e.prototype.addPage = function(e, t, r) {
                    for (void 0 === r && (r = 0); this._pages.length < e; )
                      this._pages.push(null);
                    var n = s(t, this._nodeSR, this._renderSR, r);
                    (this._pages[e] = {
                      nodes: t,
                      renderObbs: n,
                      parents: new Uint32Array(this.pageSize)
                    }),
                      (function(e, t) {
                        for (var r = [0]; r.length; )
                          for (
                            var n = r.pop(),
                              i = e[d(n, t)].nodes[l(n, t)],
                              o = 0;
                            o < i.childCount;
                            o++
                          ) {
                            var a = i.firstChild + o;
                            null != e[d(a, t)] &&
                              ((e[d(a, t)].parents[l(a, t)] = n), r.push(a));
                          }
                      })(this._pages, this.pageSize);
                  }),
                  (e.prototype.hasPage = function(e) {
                    return !!this._pages[e];
                  }),
                  (e.prototype.getNode = function(e) {
                    var t = this.pageSize;
                    return this._pages[d(e, t)].nodes[l(e, t)];
                  }),
                  (e.prototype.getRenderObb = function(e) {
                    var t = this.pageSize;
                    return this._pages[d(e, t)].renderObbs[l(e, t)];
                  }),
                  (e.prototype.getRenderCenter = function(e) {
                    return this.getRenderObb(e).center;
                  }),
                  (e.prototype.setRenderObb = function(e, t) {
                    var r = this.pageSize;
                    i.set(t, this._pages[d(e, r)].renderObbs[l(e, r)]);
                  }),
                  (e.prototype.getParentId = function(e) {
                    var t = this.pageSize;
                    return this._pages[d(e, t)].parents[l(e, t)];
                  }),
                  (e.prototype.hasNodes = function(e, t) {
                    for (
                      var r = d(e, this.pageSize),
                        n = d(e + t - 1, this.pageSize),
                        i = r;
                      i <= n;
                      i++
                    )
                      if (null == this._pages[i]) return !1;
                    return !0;
                  }),
                  (e.prototype.createVisibilityTraverse = function() {
                    var e = {
                      index: this,
                      queue: [],
                      masks: [],
                      tempAabb: r.create()
                    };
                    return function(t, r) {
                      return a(e, t, r);
                    };
                  }),
                  e
                );
              })(),
              c = n.mat4d.create(),
              h = n.quat4.create();
            return p;
          }.apply(null, n)) || (e.exports = i);
    },
    2187: function(e, t, r) {
      var n, i;
      (n = [
        r.dj.c(e.i),
        t,
        r(2188),
        r(48),
        r(99),
        r(2029),
        r(31),
        r(95),
        r(77),
        r(72),
        r(91)
      ]),
        void 0 ===
          (i = function(e, t, r, n, i, o, a, s, d, l, u) {
            function p(e) {
              return e ? 256 : 64;
            }
            function c(e, t, r, n, i) {
              if (r.drawScreenSpace) return r.fixedSize * t * n;
              var o = p(i) * t * n;
              return r.drawFixedSize
                ? Math.min(r.fixedSize / 2, o)
                : r.screenMinSize > 0
                  ? Math.min(Math.max(r.screenMinSize * t * n, e / 2), o)
                  : Math.min(e / 2, o);
            }
            function h(e, t, r, n, i) {
              return r.drawScreenSpace ? 0 : c(e, t, r, n, i);
            }
            function f(e, t, r) {
              return (
                null == r && (r = a.vec3d.create()),
                (r[0] = e.origin[0] + e.coordinates[3 * t]),
                (r[1] = e.origin[1] + e.coordinates[3 * t + 1]),
                (r[2] = e.origin[2] + e.coordinates[3 * t + 2]),
                r
              );
            }
            var _ = { aPosition: 0, aColor: 1 },
              g = {
                positions: [
                  {
                    name: "aPosition",
                    count: 3,
                    type: 5126,
                    offset: 0,
                    stride: 12,
                    normalized: !1
                  }
                ],
                colors: [
                  {
                    name: "aColor",
                    count: 3,
                    type: 5121,
                    offset: 0,
                    stride: 3,
                    normalized: !0
                  }
                ]
              };
            return (function() {
              function e() {
                (this.didRender = !1),
                  (this.needsRender = !0),
                  (this.layerUid = ""),
                  (this._useFixedSizes = !1),
                  (this._scaleFactor = 1),
                  (this._minSizePx = 0),
                  (this._useRealWorldSymbolSizes = !1),
                  (this._size = 0),
                  (this._sizePx = 0),
                  (this._clipBox = n.create(n.POSITIVE_INFINITY)),
                  (this._programWorld = null),
                  (this._programScreen = null),
                  (this._programWorldDepth = null),
                  (this._programScreenDepth = null),
                  (this.tempMatrix4 = a.mat4.create()),
                  (this.tempVec3 = a.vec3.create()),
                  (this.nodes = []);
              }
              return (
                (e.prototype.initializeRenderContext = function(e) {
                  e.shaderSnippets.fsPointCloudPointRenderer ||
                    e.shaderSnippets._parse(r);
                  var t = e.shaderSnippets.vsPointCloudPointRenderer,
                    n = e.shaderSnippets.fsPointCloudPointRenderer;
                  (this._programWorld = new l(e.rctx, t, n, _, [])),
                    (this._programScreen = new l(e.rctx, t, n, _, [
                      "DRAW_SCREEN_SIZE"
                    ])),
                    (this._programWorldDepth = new l(e.rctx, t, n, _, [
                      "DEPTH_PASS"
                    ])),
                    (this._programScreenDepth = new l(e.rctx, t, n, _, [
                      "DRAW_SCREEN_SIZE",
                      "DEPTH_PASS"
                    ])),
                    (this.needsRender = !0);
                }),
                (e.prototype.uninitializeRenderContext = function(e) {
                  this._programWorld && this._programWorld.dispose(),
                    this._programScreen && this._programScreen.dispose(),
                    this._programWorldDepth &&
                      this._programWorldDepth.dispose(),
                    this._programScreenDepth &&
                      this._programScreenDepth.dispose(),
                    (this._programWorld = null),
                    (this._programScreen = null),
                    (this._programWorldDepth = null),
                    (this._programScreenDepth = null);
                }),
                (e.prototype.intersect = function(e, t, r, s) {
                  var d = a.vec3d.create(),
                    l = a.vec3d.create(),
                    u = a.vec3d.create(),
                    p = a.vec3d.create(),
                    _ = i.plane.create(),
                    g = e.camera.perPixelRatio,
                    v = e.camera.near,
                    m = this._getSizeParams();
                  a.vec3d.subtract(r, t, l);
                  var y = 1 / a.vec3d.length(l);
                  a.vec3d.scale(l, y, l),
                    a.vec3d.negate(l, u),
                    a.vec4d.set4(l[0], l[1], l[2], -a.vec3d.dot(l, t), _);
                  var S = {},
                    b = {},
                    x = n.create(),
                    P = n.create(this._clipBox);
                  n.offset(P, -t[0], -t[1], -t[2], P);
                  for (var w = 0, z = this.nodes; w < z.length; w++) {
                    var R = z[w],
                      N = R.splatSize * this._scaleFactor,
                      C = o.minimumDistancePlane(R.obb, _),
                      M = o.maximumDistancePlane(R.obb, _);
                    C -= h(N, C + v, m, g, R.isLeaf);
                    var k = (M -= h(N, M + v, m, g, R.isLeaf)) < 0,
                      I =
                        null != S.dist &&
                        null != b.dist &&
                        S.dist < C * y &&
                        b.dist > M * y;
                    if (!k && !I) {
                      var O = c(N, M + v, m, g, R.isLeaf);
                      if (o.intersectLine(R.obb, t, l, O)) {
                        var A = O * O;
                        o.toAaBoundingBox(R.obb, x),
                          n.offset(x, -t[0], -t[1], -t[2], x);
                        var F = !n.contains(P, x);
                        a.vec3d.subtract(R.origin, t, p);
                        for (var W = 0; W < R.pointCount; W++)
                          if (
                            ((d[0] = p[0] + R.coordinates[3 * W]),
                            (d[1] = p[1] + R.coordinates[3 * W + 1]),
                            (d[2] = p[2] + R.coordinates[3 * W + 2]),
                            !F || n.containsPoint(P, d))
                          ) {
                            var V = a.vec3d.dot(d, l),
                              E = V + v,
                              U = h(N, E, m, g, R.isLeaf);
                            if (!(V - U < 0)) {
                              var L = a.vec3d.length2(d) - V * V;
                              if (!(L > A)) {
                                var T = c(N, (E -= U), m, g, R.isLeaf);
                                if (!(L > T * T)) {
                                  var Q = this.layerUid + "/" + R.id + "/" + W,
                                    B = (V - U) * y;
                                  (null == S.dist || B < S.dist) &&
                                    ((S.point = f(R, W, S.point)),
                                    (S.dist = B),
                                    (S.normal = u),
                                    (S.pointId = Q),
                                    (S.layerUid = this.layerUid)),
                                    (null == b.dist || B > b.dist) &&
                                      ((b.point = f(R, W, b.point)),
                                      (b.dist = B),
                                      (b.normal = u),
                                      (b.pointId = Q),
                                      (b.layerUid = this.layerUid));
                                }
                              }
                            }
                          }
                      }
                    }
                  }
                  if (null != S.dist) {
                    var D = e.getMinResult();
                    if (null == D.dist || S.dist < D.dist) {
                      var j = {
                        type: "external",
                        point: S.point,
                        metadata: { pointId: S.pointId, layerUid: S.layerUid }
                      };
                      D.set(j, S.pointId, S.dist, S.normal, void 0),
                        D.setIntersector("PointRenderer");
                    }
                  }
                  if (null != b.dist) {
                    var q = e.getMaxResult();
                    if (null == q.dist || b.dist > q.dist) {
                      j = {
                        type: "external",
                        point: b.point,
                        metadata: { pointId: b.pointId, layerUid: b.layerUid }
                      };
                      q.set(j, b.pointId, b.dist, b.normal, void 0),
                        q.setIntersector("PointRenderer");
                    }
                  }
                }),
                (e.prototype.render = function(e) {
                  if (e.pass !== s.MATERIAL && e.pass !== s.MATERIAL_DEPTH)
                    return !1;
                  for (
                    var t = e.pass === s.MATERIAL_DEPTH,
                      r = e.rctx,
                      i = 0,
                      o = this.nodes;
                    i < o.length;
                    i++
                  ) {
                    null == (g = o[i]).vao && this._initNode(e, g);
                  }
                  var d = this._getSizeParams(),
                    l = t
                      ? d.drawScreenSpace
                        ? this._programScreenDepth
                        : this._programWorldDepth
                      : d.drawScreenSpace
                        ? this._programScreen
                        : this._programWorld;
                  if (null == l || 0 === this.nodes.length) return !0;
                  var u = this._clipBox,
                    c = !n.equals(u, n.POSITIVE_INFINITY, function(e, t) {
                      return e === t;
                    });
                  c ||
                    (a.vec3.set3(-1 / 0, -1 / 0, -1 / 0, this.tempVec3),
                    l.setUniform3fv("uClipMin", this.tempVec3),
                    a.vec3.set3(1 / 0, 1 / 0, 1 / 0, this.tempVec3),
                    l.setUniform3fv("uClipMax", this.tempVec3)),
                    r.setDepthTestEnabled(!0),
                    r.bindProgram(l);
                  var h = e.camera.projectionMatrix;
                  l.setUniformMatrix4fv("uProjectionMatrix", h),
                    t && l.setUniform2f("nearFar", e.camera.near, e.camera.far),
                    d.drawFixedSize &&
                      l.setUniform2f(
                        "uPointScale",
                        d.fixedSize,
                        e.camera.fullHeight
                      );
                  for (var f = 0, _ = this.nodes; f < _.length; f++) {
                    var g = _[f];
                    if (
                      (l.setUniform2f(
                        "uScreenMinMaxSize",
                        d.screenMinSize,
                        p(g.isLeaf)
                      ),
                      !d.drawFixedSize)
                    ) {
                      var v = g.splatSize * this._scaleFactor;
                      l.setUniform2f("uPointScale", v, e.camera.fullHeight);
                    }
                    var m = g.origin;
                    c &&
                      (a.vec3.set3(
                        u[0] - m[0],
                        u[1] - m[1],
                        u[2] - m[2],
                        this.tempVec3
                      ),
                      l.setUniform3fv("uClipMin", this.tempVec3),
                      a.vec3.set3(
                        u[3] - m[0],
                        u[4] - m[1],
                        u[5] - m[2],
                        this.tempVec3
                      ),
                      l.setUniform3fv("uClipMax", this.tempVec3)),
                      a.mat4.identity(this.tempMatrix4),
                      a.mat4.translate(this.tempMatrix4, m, this.tempMatrix4),
                      a.mat4.multiply(
                        e.camera.viewMatrix,
                        this.tempMatrix4,
                        this.tempMatrix4
                      ),
                      l.setUniformMatrix4fv(
                        "uModelViewMatrix",
                        this.tempMatrix4
                      ),
                      r.bindVAO(g.vao),
                      r.drawArrays(0, 0, g.pointCount);
                  }
                  return !0;
                }),
                Object.defineProperty(e.prototype, "useFixedSizes", {
                  get: function() {
                    return this._useFixedSizes;
                  },
                  set: function(e) {
                    this._useFixedSizes !== e &&
                      ((this._useFixedSizes = e), this._requestRender());
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(e.prototype, "scaleFactor", {
                  get: function() {
                    return this._scaleFactor;
                  },
                  set: function(e) {
                    this._scaleFactor !== e &&
                      ((this._scaleFactor = e), this._requestRender());
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(e.prototype, "minSizePx", {
                  get: function() {
                    return this._minSizePx;
                  },
                  set: function(e) {
                    this._minSizePx !== e &&
                      ((this._minSizePx = e), this._requestRender());
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(e.prototype, "useRealWorldSymbolSizes", {
                  get: function() {
                    return this._useRealWorldSymbolSizes;
                  },
                  set: function(e) {
                    this._useRealWorldSymbolSizes !== e &&
                      ((this._useRealWorldSymbolSizes = e),
                      this._requestRender());
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(e.prototype, "size", {
                  get: function() {
                    return this._size;
                  },
                  set: function(e) {
                    this._size !== e &&
                      ((this._size = e), this._requestRender());
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(e.prototype, "sizePx", {
                  get: function() {
                    return this._sizePx;
                  },
                  set: function(e) {
                    this._sizePx !== e &&
                      ((this._sizePx = e), this._requestRender());
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(e.prototype, "clippingBox", {
                  set: function(e) {
                    n.set(this._clipBox, e || n.POSITIVE_INFINITY);
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (e.prototype.addNode = function(e) {
                  this.nodes.push({
                    id: e.id,
                    splatSize: e.splatSize,
                    obb: e.obb,
                    origin: a.vec3.create(e.origin),
                    coordinates: e.coordinates,
                    pointCount: e.coordinates.length / 3,
                    rgb: e.rgb,
                    vao: null,
                    isLeaf: e.isLeaf
                  }),
                    this._requestRender();
                }),
                (e.prototype.removeNode = function(e) {
                  (this.nodes = this.nodes.filter(function(t) {
                    return (
                      t.id === e &&
                        t.vao &&
                        (t.vao.dispose(!0), (t.vao = null)),
                      t.id !== e
                    );
                  })),
                    this._requestRender();
                }),
                (e.prototype.removeAll = function() {
                  this.nodes.forEach(function(e) {
                    e.vao && (e.vao.dispose(!0), (e.vao = null));
                  }),
                    (this.nodes = []),
                    this._requestRender();
                }),
                (e.prototype._initNode = function(e, t) {
                  var r = e.rctx;
                  t.vao = new u(r, _, g, {
                    positions: d.createVertex(r, 35044, t.coordinates),
                    colors: d.createVertex(r, 35044, t.rgb)
                  });
                }),
                (e.prototype._requestRender = function() {
                  (this.didRender = !1), (this.needsRender = !0);
                }),
                (e.prototype._getSizeParams = function() {
                  var e = this._useFixedSizes,
                    t = e && !this._useRealWorldSymbolSizes,
                    r = t ? this._sizePx : this._size,
                    n = this._minSizePx;
                  return (
                    e && (n = 0),
                    {
                      drawScreenSpace: t,
                      drawFixedSize: e,
                      fixedSize: r,
                      screenMinSize: n
                    }
                  );
                }),
                e
              );
            })();
          }.apply(null, n)) || (e.exports = i);
    },
    2188: function(e, t) {
      e.exports =
        '<?xml version="1.0" encoding="UTF-8"?>\n\n<snippets>\n\n<snippet name="vsPointCloudPointRenderer"><![CDATA[\n$vsprecisionf\n\nattribute vec3 aPosition;\nattribute vec3 aColor;\n\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform vec2 uScreenMinMaxSize;\nuniform vec2 uPointScale;\nuniform vec3 uClipMin;\nuniform vec3 uClipMax;\n\n#ifdef DEPTH_PASS\nuniform vec2 nearFar;\n\nvarying float depth;\n#else\nvarying vec3 vColor;\n#endif\n\nvoid main(void) {\n\n  // Move clipped points outside of clipspace\n  if (aPosition.x < uClipMin.x || aPosition.y < uClipMin.y || aPosition.z < uClipMin.z ||\n      aPosition.x > uClipMax.x || aPosition.y > uClipMax.y || aPosition.z > uClipMax.z) {\n    gl_Position = vec4(0.0,0.0,0.0,2.0);\n    gl_PointSize = 0.0;\n    return;\n  }\n\n  // Position in camera space\n  vec4 camera = uModelViewMatrix * vec4(aPosition, 1.0);\n\n  float pointSize = uPointScale.x;\n  vec4 position = uProjectionMatrix * camera;\n\n  // Calculate Size\n  #ifdef DRAW_SCREEN_SIZE\n    float clampedScreenSize = pointSize;\n  #else\n    float pointRadius = 0.5 * pointSize;\n    vec4 cameraOffset = camera + vec4(0.0, pointRadius, 0.0, 0.0);\n    vec4 positionOffset = uProjectionMatrix * cameraOffset;\n    float radius = abs(positionOffset.y - position.y);\n\n    float viewHeight = uPointScale.y;\n\n    // screen diameter = (2 * r / w) * (h / 2)\n    float screenPointSize = (radius / position.w) * viewHeight;\n    float clampedScreenSize = clamp(screenPointSize, uScreenMinMaxSize.x, uScreenMinMaxSize.y);\n\n    // Shift towards camera, to move rendered point out of terrain i.e. to\n    // the camera-facing end of the virtual point when considering it as a\n    // 3D sphere.\n    camera.xyz -= normalize(camera.xyz) * pointRadius * clampedScreenSize / screenPointSize;\n    position = uProjectionMatrix * camera;\n  #endif\n\n  gl_PointSize = clampedScreenSize;\n  gl_Position = position;\n\n  #ifdef DEPTH_PASS\n  depth = (-camera.z - nearFar[0]) / (nearFar[1] - nearFar[0]);\n  #else\n  vColor = aColor;\n  #endif\n}\n]]></snippet>\n\n<snippet name="fsPointCloudPointRenderer"><![CDATA[\n$fsprecisionf\n\n#ifdef DEPTH_PASS\n$float2rgba\n\nvarying float depth;\n#else\nvarying vec3 vColor;\n#endif\n\nvoid main(void) {\n  vec2 vOffset = gl_PointCoord - vec2(0.5, 0.5);\n  float r2 = dot(vOffset, vOffset);\n\n  if (r2 > 0.25) {\n    discard;\n  }\n\n  #ifdef DEPTH_PASS\n  gl_FragColor = float2rgba(depth);\n  #else\n  gl_FragColor = vec4(vColor, 1.0);\n  #endif\n}\n]]></snippet>\n\n</snippets>\n';
    }
  }
]),
  (function() {
    (this || window).webpackJsonp.registerAbsMids({
      "esri/views/3d/layers/PointCloudWorker": 1964,
      "esri/views/3d/layers/PointCloudLayerView3D": 1991,
      "esri/views/3d/layers/i3s/PointCloudRendererUtil": 2077,
      "esri/views/3d/layers/i3s/IdleQueue": 2098,
      "esri/views/3d/layers/i3s/LoDUtil": 2185,
      "esri/views/3d/layers/i3s/PagedNodeIndex": 2186,
      "esri/views/3d/layers/i3s/PointRenderer": 2187,
      "dojo/text!esri/views/3d/layers/i3s/PointCloudPointRenderer.xml": 2188
    });
  })();
