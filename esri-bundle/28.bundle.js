(window.webpackJsonp = window.webpackJsonp || []).push([
  [28],
  {
    1978: function(t, e, r) {
      var o, n;
      (o = [
        r.dj.c(t.i),
        e,
        r(2),
        r(0),
        r(43),
        r(3),
        r(24),
        r(10),
        r(180),
        r(9),
        r(1),
        r(261),
        r(326)
      ]),
        void 0 ===
          (n = function(t, e, o, n, i, a, u, s, p, c, l, y, h) {
            var d;
            return (
              (function(t) {
                (t[(t.Snapshot = 0)] = "Snapshot"),
                  (t[(t.OnDemand = 1)] = "OnDemand");
              })(d || (d = {})),
              (function(t) {
                function e() {
                  var e = (null !== t && t.apply(this, arguments)) || this;
                  return (
                    (e.maxPointCountForAuto = 4e3),
                    (e.maxRecordCountForAuto = 2e3),
                    (e.maxVertexCountForAuto = 25e4),
                    e
                  );
                }
                return (
                  o(e, t),
                  (e.prototype.initialize = function() {
                    var t = this,
                      e = this.layer
                        .when(function() {
                          t._verifyCapabilities();
                        })
                        .then(function() {
                          return t._figureOutMode().then(function(e) {
                            return t._createController(e);
                          });
                        })
                        .then(function(e) {
                          return t._set("activeController", e);
                        });
                    this.addResolvingPromise(e);
                  }),
                  (e.prototype.destroy = function() {
                    this.activeController &&
                      (this.activeController.destroy(),
                      this._set("activeController", null));
                  }),
                  Object.defineProperty(e.prototype, "countThresholdForAuto", {
                    get: function() {
                      var t,
                        e = this.layer.geometryType;
                      return (
                        "polyline" === e ||
                        "polygon" === e ||
                        "multipoint" === e
                          ? (t = this.maxRecordCountForAuto)
                          : "point" === e && (t = this.maxPointCountForAuto),
                        t
                      );
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  Object.defineProperty(e.prototype, "updating", {
                    get: function() {
                      return (
                        !1 === this.isFulfilled() ||
                        !0 === this.get("activeController.updating")
                      );
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  (e.prototype._figureOutMode = function() {
                    return this._isStatisticsSupported()
                      ? this._checkByStatistics()
                      : this._checkByCount();
                  }),
                  (e.prototype._isStatisticsSupported = function() {
                    return (
                      !!this.layer.source.parsedUrl &&
                      /(https?:)?\/\/services.*\.arcgis\.com/i.test(
                        this.layer.source.parsedUrl.path
                      )
                    );
                  }),
                  (e.prototype._checkByStatistics = function() {
                    var t = this,
                      e = this.layer,
                      r = e.source.parsedUrl.path,
                      o = e.createQuery();
                    return (
                      (o.outStatistics = [
                        new h({
                          statisticType: "exceedslimit",
                          maxPointCount: this.maxPointCountForAuto,
                          maxRecordCount: this.maxRecordCountForAuto,
                          maxVertexCount: this.maxVertexCountForAuto,
                          outStatisticFieldName: "exceedslimit"
                        })
                      ]),
                      new y({ url: r + "/query" }).execute(o).then(function(e) {
                        var r = e && e.features && e.features[0];
                        if (
                          0 === (r && r.attributes && r.attributes.exceedslimit)
                        ) {
                          var o = t.layer,
                            n = o.maxRecordCount;
                          if (
                            o.get("capabilities.query.supportsPagination") ||
                            n >= t.countThresholdForAuto
                          )
                            return d.Snapshot;
                        }
                        return d.OnDemand;
                      })
                    );
                  }),
                  (e.prototype._checkByCount = function() {
                    var t = this,
                      e = this.layer;
                    return e.queryFeatureCount().then(function(r) {
                      return r <= t.countThresholdForAuto &&
                        r <= e.maxRecordCount
                        ? d.Snapshot
                        : d.OnDemand;
                    });
                  }),
                  (e.prototype._createController = function(t) {
                    var e = this;
                    return (t === d.OnDemand
                      ? c.create(function(t) {
                          return r
                            .e(50)
                            .then(
                              function() {
                                var e = [r(2294)];
                                t.apply(null, e);
                              }.bind(this)
                            )
                            .catch(r.oe);
                        })
                      : c.create(function(t) {
                          return r
                            .e(5)
                            .then(
                              function() {
                                var e = [r(1966)];
                                t.apply(null, e);
                              }.bind(this)
                            )
                            .catch(r.oe);
                        })
                    )
                      .then(function(t) {
                        return new t({
                          layer: e.layer,
                          layerView: e.layerView,
                          graphics: e.graphics
                        });
                      })
                      .catch(function(e) {
                        throw new Error(
                          "Module path not found for controller type: " +
                            (t === d.Snapshot ? "snapshot" : "on demand")
                        );
                      });
                  }),
                  (e.prototype._verifyCapabilities = function() {
                    if (
                      !this.layer.get("capabilities.operations.supportsQuery")
                    )
                      throw new s(
                        "graphicscontroller:query-capability-required",
                        "Service requires query capabilities to be used as a feature layer",
                        { layer: this.layer }
                      );
                  }),
                  n([l.property()], e.prototype, "activeController", void 0),
                  n(
                    [l.property({ dependsOn: ["layer.geometryType"] })],
                    e.prototype,
                    "countThresholdForAuto",
                    null
                  ),
                  n(
                    [l.property({ type: u.ofType(i) })],
                    e.prototype,
                    "graphics",
                    void 0
                  ),
                  n([l.property()], e.prototype, "layer", void 0),
                  n([l.property()], e.prototype, "layerView", void 0),
                  n(
                    [l.property({ dependsOn: ["activeController.updating"] })],
                    e.prototype,
                    "updating",
                    null
                  ),
                  n(
                    [l.aliasOf("activeController.update")],
                    e.prototype,
                    "update",
                    void 0
                  ),
                  n(
                    [
                      l.subclass(
                        "esri.layers.graphics.controllers.AutoController2D"
                      )
                    ],
                    e
                  )
                );
              })(l.declared(a, p))
            );
          }.apply(null, o)) || (t.exports = n);
    }
  }
]),
  (function() {
    (this || window).webpackJsonp.registerAbsMids({
      "esri/layers/graphics/controllers/AutoController2D": 1978
    });
  })();
