(window.webpackJsonp = window.webpackJsonp || []).push([
  [21],
  {
    1963: function(e, r, t) {
      var n, a;
      (n = [
        t.dj.c(e.i),
        r,
        t(13),
        t(18),
        t(24),
        t(10),
        t(9),
        t(781),
        t(126),
        t(2074)
      ]),
        void 0 ===
          (a = function(e, r, t, n, a, o, s, u, i, l) {
            function c(e) {
              switch (e.type) {
                case "Map Service":
                  return (function(e) {
                    return p(e).then(function(e) {
                      return e
                        ? { className: "TileLayer" }
                        : { className: "MapImageLayer" };
                    });
                  })(e);
                case "Feature Service":
                  return (function(e) {
                    return f(e).then(function(e) {
                      if ("object" == typeof e) {
                        var r = { outFields: ["*"] };
                        return (
                          null != e.id && (r.layerId = e.id),
                          { className: "FeatureLayer", properties: r }
                        );
                      }
                      return { className: "GroupLayer" };
                    });
                  })(e);
                case "Feature Collection":
                  return (function(e) {
                    return e
                      .load()
                      .then(function() {
                        return e.fetchData();
                      })
                      .then(function(e) {
                        if (e && Array.isArray(e.layers)) {
                          if (l.isMapNotesLayer(e))
                            return { className: "MapNotesLayer" };
                          if (1 === e.layers.length)
                            return { className: "FeatureLayer" };
                        }
                        return { className: "GroupLayer" };
                      });
                  })(e);
                case "Scene Service":
                  return (function(e) {
                    return f(e).then(function(r) {
                      if ("object" == typeof r) {
                        var t = {},
                          n = void 0;
                        if (
                          (null != r.id
                            ? ((t.layerId = r.id),
                              (n = e.url + "/layers/" + r.id))
                            : (n = e.url),
                          Array.isArray(e.typeKeywords) &&
                            e.typeKeywords.length > 0)
                        )
                          for (
                            var a = {
                                IntegratedMesh: "IntegratedMeshLayer",
                                "3DObject": "SceneLayer",
                                Point: "SceneLayer",
                                PointCloud: "PointCloudLayer"
                              },
                              o = 0,
                              s = Object.keys(a);
                            o < s.length;
                            o++
                          ) {
                            var u = s[o];
                            if (-1 !== e.typeKeywords.indexOf(u))
                              return { className: a[u] };
                          }
                        return d(n).then(function(e) {
                          var r = "SceneLayer";
                          return (
                            null != e && "IntegratedMesh" === e.layerType
                              ? (r = "IntegratedMeshLayer")
                              : null != e &&
                                "PointCloud" === e.layerType &&
                                (r = "PointCloudLayer"),
                            { className: r, properties: t }
                          );
                        });
                      }
                      return { className: "GroupLayer" };
                    });
                  })(e);
                case "Image Service":
                  return (function(e) {
                    return p(e).then(function(r) {
                      var t = new a(e.typeKeywords);
                      return r
                        ? t.find(function(e) {
                            return "elevation 3d layer" === e.toLowerCase();
                          })
                          ? { className: "ElevationLayer" }
                          : { className: "TileLayer" }
                        : { className: "ImageryLayer" };
                    });
                  })(e);
                case "Stream Service":
                  return { className: "StreamLayer" };
                case "Vector Tile Service":
                  return { className: "VectorTileLayer" };
                case "KML":
                  return { className: "KMLLayer" };
                case "WMTS":
                  return { className: "WMTSLayer" };
                case "WMS":
                  return { className: "WMSLayer" };
                default:
                  return s.reject(
                    new o(
                      "portal:unknown-item-type",
                      "Unknown item type '${type}'",
                      { type: e.type }
                    )
                  );
              }
            }
            function y(e) {
              return (0, u.layerLookupMap[e.className])().then(function(r) {
                return { constructor: r, properties: e.properties };
              });
            }
            function p(e) {
              return d(e.url).then(function(e) {
                return e.tileInfo;
              });
            }
            function f(e) {
              return !e.url || e.url.match(/\/\d+$/)
                ? s.resolve({})
                : e
                    .load()
                    .then(function() {
                      return e.fetchData();
                    })
                    .then(function(r) {
                      return r && Array.isArray(r.layers)
                        ? 1 === r.layers.length && { id: r.layers[0].id }
                        : d(e.url).then(function(e) {
                            return e && Array.isArray(e.layers)
                              ? 1 === e.layers.length && { id: e.layers[0].id }
                              : {};
                          });
                    });
            }
            function d(e) {
              return n(e, {
                responseType: "json",
                callbackParamName: "callback",
                query: { f: "json" }
              }).then(function(e) {
                return e.data;
              });
            }
            Object.defineProperty(r, "__esModule", { value: !0 }),
              (r.fromItem = function(e) {
                return (
                  !e.portalItem ||
                    e.portalItem instanceof i ||
                    (e.portalItem.constructor &&
                      e.portalItem.constructor._meta) ||
                    (e = t({}, e, { portalItem: new i(e.portalItem) })),
                  (function(e) {
                    return e
                      .load()
                      .then(c)
                      .then(y);
                  })(e.portalItem).then(function(r) {
                    var n = t({ portalItem: e.portalItem }, r.properties),
                      a = r.constructor;
                    return (
                      "esri.layers.FeatureLayer" === a.declaredClass &&
                        (n.outFields = ["*"]),
                      s.resolve(new a(n))
                    );
                  })
                );
              }),
              (r.selectLayerClassPath = c);
          }.apply(null, n)) || (e.exports = a);
    },
    2074: function(e, r, t) {
      var n, a;
      (n = [t.dj.c(e.i), r]),
        void 0 ===
          (a = function(e, r) {
            Object.defineProperty(r, "__esModule", { value: !0 }),
              (r.isMapNotesLayer = function(e) {
                var r = ["TITLE", "DESCRIPTION", "IMAGE_URL", "IMAGE_LINK_URL"],
                  t =
                    e.layers ||
                    (e.featureCollection && e.featureCollection.layers);
                if (t && Array.isArray(t)) {
                  var n = t[0];
                  return (
                    n.layerDefinition.fields &&
                      n.layerDefinition.fields.forEach(function(e) {
                        var t = r.indexOf(e.name);
                        t > -1 && r.splice(t, 1);
                      }),
                    !r.length
                  );
                }
              });
          }.apply(null, n)) || (e.exports = a);
    }
  }
]),
  (function() {
    (this || window).webpackJsonp.registerAbsMids({
      "esri/portal/support/portalLayers": 1963,
      "esri/portal/support/mapNotesUtils": 2074
    });
  })();