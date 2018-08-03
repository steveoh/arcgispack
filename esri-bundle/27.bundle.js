(window.webpackJsonp = window.webpackJsonp || []).push([
  [27],
  {
    1977: function(e, t, r) {
      var s, a;
      (s = [r(86), r(439), r(3), r(180), r(4), r(27), r(10), r(18), r(261)]),
        void 0 ===
          (a = function(e, t, r, s, a, i, u, n, l) {
            return r.createSubclass([s], {
              getDefaults: function(e) {
                var t = this.inherited(arguments),
                  r = e.layer;
                return (
                  r &&
                    (t = a.mixin(t, {
                      url: r.url,
                      layerId: r.layerId,
                      gdbVersion: r.gdbVersion,
                      dynamicDataSource: r.dynamicDataSource
                    })),
                  t
                );
              },
              initialize: function() {
                this.addResolvingPromise(this._fetchService());
              },
              properties: {
                dynamicDataSource: {},
                layer: {},
                layerId: {},
                gdbVersion: {
                  dependsOn: ["layer.gdbVersion"],
                  get: function() {
                    return this.layer.gdbVersion;
                  }
                },
                parsedUrl: {
                  dependsOn: ["url", "layerId"],
                  get: function() {
                    var e = this.url ? i.urlToObject(this.url) : null;
                    if (null != e)
                      if (null != this.layerId)
                        e.path = i.join(e.path, this.layerId.toString());
                      else if (null != this.dynamicDataSource) {
                        var r = {
                          source: t.sourceToJSON(this.dynamicDataSource)
                        };
                        e.query = { layer: JSON.stringify(r) };
                      }
                    return e;
                  }
                },
                queryTask: {
                  dependsOn: ["parsedUrl", "gdbVersion"],
                  get: function() {
                    var t =
                      this.parsedUrl.path +
                      "?" +
                      e.objectToQuery(this.parsedUrl.query);
                    return new l({
                      url:
                        null != this.dynamicDataSource
                          ? t
                          : this.parsedUrl.path,
                      gdbVersion: this.gdbVersion
                    });
                  }
                },
                url: {}
              },
              applyEdits: function(e) {
                var t = e.addFeatures.map(this._serializeFeature.bind(this)),
                  r = e.updateFeatures.map(this._serializeFeature.bind(this)),
                  s = this._getFeatureIds(e.deleteFeatures),
                  a = {
                    f: "json",
                    adds: t.length ? JSON.stringify(t) : null,
                    updates: r.length ? JSON.stringify(r) : null,
                    deletes: s.length ? s.join(",") : null
                  };
                return n(this.parsedUrl.path + "/applyEdits", {
                  query: a,
                  method: "post",
                  responseType: "json",
                  callbackParamName: "callback"
                }).then(this._createEditsResult.bind(this));
              },
              queryFeatures: function(e, t) {
                return this.queryTask.execute(e, t);
              },
              queryFeaturesJSON: function(e, t) {
                return this.queryTask.executeJSON(e, t);
              },
              queryObjectIds: function(e, t) {
                return this.queryTask.executeForIds(e, t);
              },
              queryFeatureCount: function(e, t) {
                return this.queryTask.executeForCount(e, t);
              },
              queryExtent: function(e, t) {
                return this.queryTask.executeForExtent(e, t);
              },
              _updateUrl: function(e) {
                e && (this.url = this.url.replace(/^http:/i, "https:"));
              },
              _fetchService: function() {
                return null == this.layerId && null == this.dynamicDataSource
                  ? n(this.url, {
                      query: { f: "json" },
                      responseType: "json",
                      callbackParamName: "callback"
                    }).then(
                      function(e) {
                        this._updateUrl(e.ssl);
                        var t = e.data;
                        return (
                          t &&
                            t.layers &&
                            t.layers[0] &&
                            (this.layerId = t.layers[0].id),
                          this._fetchServiceLayer()
                        );
                      }.bind(this)
                    )
                  : this._fetchServiceLayer();
              },
              _fetchServiceLayer: function() {
                return n(this.parsedUrl.path, {
                  query: a.mixin({ f: "json" }, this.parsedUrl.query),
                  responseType: "json",
                  callbackParamName: "callback"
                }).then(
                  function(e) {
                    this._updateUrl(e.ssl);
                    var t = e.data;
                    this.layerDefinition = t;
                  }.bind(this)
                );
              },
              _serializeFeature: function(e) {
                var t = e.geometry,
                  r = e.attributes;
                return { geometry: t && t.toJSON(), attributes: r };
              },
              _getFeatureIds: function(e) {
                var t = this.layer.objectIdField,
                  r = e[0],
                  s = !(!r || null == r.objectId),
                  a = !(!r || !r.attributes);
                return e.map(function(e) {
                  var r = null;
                  return (
                    s
                      ? (r = e.objectId)
                      : a && (r = e.attributes && e.attributes[t]),
                    r
                  );
                }, this);
              },
              _createEditsResult: function(e) {
                var t = {},
                  r = e.data;
                return (
                  (t.addFeatureResults = r.addResults
                    ? r.addResults.map(this._createFeatureEditResult.bind(this))
                    : []),
                  (t.updateFeatureResults = r.updateResults
                    ? r.updateResults.map(
                        this._createFeatureEditResult.bind(this)
                      )
                    : []),
                  (t.deleteFeatureResults = r.deleteResults
                    ? r.deleteResults.map(
                        this._createFeatureEditResult.bind(this)
                      )
                    : []),
                  t
                );
              },
              _createFeatureEditResult: function(e) {
                var t = e.success ? null : e.error || {};
                return {
                  objectId: e.objectId,
                  globalId: e.globalId,
                  error: t
                    ? new u(
                        "feature-layer-source:edit-failure",
                        t.description,
                        { code: t.code }
                      )
                    : null
                };
              }
            });
          }.apply(null, s)) || (e.exports = a);
    }
  }
]),
  (function() {
    (this || window).webpackJsonp.registerAbsMids({
      "esri/layers/graphics/sources/FeatureLayerSource": 1977
    });
  })();
