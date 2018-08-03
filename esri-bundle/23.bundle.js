(window.webpackJsonp = window.webpackJsonp || []).push([
  [23],
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
          (i = function(e, t, r, n, i, o, a, s, l) {
            var u = (function() {
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
                          l = [a.scaleX, a.scaleY, a.scaleZ],
                          u = n.length / 3,
                          c = new Float64Array(3 * u),
                          f = 0;
                        f < u;
                        f++
                      )
                        (c[3 * f] = n[3 * f] * l[0] + s[0]),
                          (c[3 * f + 1] = n[3 * f + 1] * l[1] + s[1]),
                          (c[3 * f + 2] = n[3 * f + 2] * l[2] + s[2]);
                      return c;
                    }
                    if ("lepcc-xyz" === e.encoding)
                      return o.decodeXYZ(t).result;
                  }),
                  (e.prototype._transformCoordinates = function(e, t, r, n) {
                    var i = e.length / 3;
                    if (!l.bufferToBuffer(e, r, 0, e, n, 0, i))
                      throw Error("Can't reproject");
                    var o = s.vec3.createFrom(
                        t.center[0],
                        t.center[1],
                        t.center[2]
                      ),
                      a = s.vec3.create(),
                      u = s.vec3.create();
                    s.quat4.conjugate(t.quaternion, c);
                    for (var f = new Float32Array(3 * i), d = 0; d < i; d++)
                      (a[0] = e[3 * d] - o[0]),
                        (a[1] = e[3 * d + 1] - o[1]),
                        (a[2] = e[3 * d + 2] - o[2]),
                        s.quat4.multiplyVec3(c, a, u),
                        (t.halfSize[0] = Math.max(
                          t.halfSize[0],
                          Math.abs(u[0])
                        )),
                        (t.halfSize[1] = Math.max(
                          t.halfSize[1],
                          Math.abs(u[1])
                        )),
                        (t.halfSize[2] = Math.max(
                          t.halfSize[2],
                          Math.abs(u[2])
                        )),
                        (f[3 * d] = a[0]),
                        (f[3 * d + 1] = a[1]),
                        (f[3 * d + 2] = a[2]);
                    return f;
                  }),
                  (e.prototype._applyElevationOffsetInPlace = function(e, t) {
                    var r = e.length / 3;
                    if (0 !== t) for (var n = 0; n < r; n++) e[3 * n + 2] += t;
                  }),
                  e
                );
              })(),
              c = s.quat4.create();
            return u;
          }.apply(null, n)) || (e.exports = i);
    },
    1965: function(e, t, r) {
      var n, i;
      (n = [
        r.dj.c(e.i),
        t,
        r(9),
        r(21),
        r(2087),
        r(2088),
        r(7),
        r(782),
        r(2029),
        r(41),
        r(791),
        r(14)
      ]),
        void 0 ===
          (i = function(e, t, r, n, i, o, a, s, l, u, c, f) {
            var d = (function() {
                function e() {}
                return (
                  (e.prototype.process = function(e) {
                    var t = [e.geometryBuffer];
                    return r.resolve({
                      result: this.transform(e, t),
                      transferList: t
                    });
                  }),
                  (e.prototype.transform = function(e, t) {
                    var r = n.fromJSON(e.indexSR),
                      d = n.fromJSON(e.vertexSR),
                      p = n.fromJSON(e.renderSR),
                      v = !1,
                      y = 0,
                      m = [],
                      x = e.obb
                        ? null
                        : l.create([0, 0, 0], [-1, -1, -1], [0, 0, 0, 1]);
                    a.vec3d.set(e.center, h), (h[2] += e.elevationOffset);
                    var g = a.mat4d.create();
                    u.computeLinearTransformation(r, h, g, p);
                    for (var _ = 0, b = e.geometryData; _ < b.length; _++)
                      for (
                        var I = b[_],
                          w = I.geometries,
                          B = I.componentOffsets,
                          T = 0,
                          D = w;
                        T < D.length;
                        T++
                      ) {
                        var P = D[T],
                          V = e.layouts[y];
                        ++y;
                        var S = [
                            {
                              name: f.VertexAttrConstants.COLOR,
                              byteValue: 255
                            }
                          ],
                          M = [
                            f.VertexAttrConstants.NORMAL,
                            f.VertexAttrConstants.NORMALCOMPRESSED,
                            f.VertexAttrConstants.SYMBOLCOLOR,
                            f.VertexAttrConstants.COMPONENTINDEX
                          ],
                          C = i.interleaveGeometryBuffer(
                            P,
                            e.geometryBuffer,
                            V,
                            S,
                            M
                          ),
                          E = new c(new Float32Array(C), V),
                          A = E.getAttribute(f.VertexAttrConstants.POSITION),
                          z = o.reprojectPoints(
                            A,
                            e.center,
                            e.elevationOffset,
                            r,
                            d,
                            p
                          );
                        if ((x && this._updateObb(x, A, g), e.needNormals)) {
                          var N = {
                            normals: E.getAttribute(
                              f.VertexAttrConstants.NORMALCOMPRESSED
                            ),
                            positions: A,
                            normalInd: E.getIndices(
                              f.VertexAttrConstants.NORMALCOMPRESSED
                            ),
                            positionInd: E.getIndices(
                              f.VertexAttrConstants.POSITION
                            )
                          };
                          i.processAndInterleaveNormals(
                            e.normalReferenceFrame,
                            P,
                            e.geometryBuffer,
                            z.globalTrafo,
                            N
                          );
                        }
                        var F = E.getAttribute(
                          f.VertexAttrConstants.COMPONENTINDEX
                        );
                        F && this._createComponentNumbers(F, B);
                        var O = E.getAttribute(f.VertexAttrConstants.COLOR);
                        O && !v && (v = this._hasColors(O));
                        var L = V[0].stride,
                          k = 1 - (0.8 * L) / (L + 4),
                          j = s.deduplicate(C, L / 4, k);
                        if (null != j) {
                          var U =
                              j.uniqueCount < 65536
                                ? new Uint16Array(j.indices)
                                : j.indices,
                            R = i.extractPositionData(j.buffer, V, U);
                          m.push({
                            layout: V,
                            interleavedVertexData: j.buffer,
                            indices: U,
                            corMatrices: z,
                            hasColors: v,
                            positionData: R
                          }),
                            t &&
                              (t.push(j.buffer),
                              t.push(U.buffer),
                              t.push(R.data.buffer),
                              t.push(R.indices.buffer));
                        } else {
                          R = i.extractPositionData(C, V);
                          m.push({
                            layout: V,
                            interleavedVertexData: C,
                            corMatrices: z,
                            hasColors: v,
                            positionData: R
                          }),
                            t &&
                              (t.push(C),
                              t.push(R.data.buffer),
                              t.push(R.indices.buffer));
                        }
                      }
                    return (
                      x &&
                        (a.mat4d.multiplyVec3(g, x.center, x.center),
                        u.vectorToVector(x.center, p, x.center, d),
                        (x.center[2] -= e.elevationOffset)),
                      {
                        geometryBuffer: e.geometryBuffer,
                        transformedGeometries: m,
                        obb: x
                      }
                    );
                  }),
                  (e.prototype._hasColors = function(e) {
                    for (
                      var t = e.data,
                        r = e.size,
                        n = e.offsetIdx,
                        i = e.strideIdx,
                        o = n;
                      o < t.length;
                      o += i
                    )
                      for (var a = 0; a < r; a++)
                        if (255 !== t[o + a]) return !0;
                    return !1;
                  }),
                  (e.prototype._createComponentNumbers = function(e, t) {
                    for (
                      var r = e.data,
                        n = e.offsetIdx,
                        i = e.strideIdx,
                        o = r.length / i,
                        a = 0,
                        s = n,
                        l = 0;
                      l < o;
                      l++
                    )
                      l >= t[a + 1] && a++, (r[s] = a), (s += i);
                  }),
                  (e.prototype._updateObb = function(e, t, r) {
                    if (e.halfSize[0] > 0) {
                      a.vec3.subtract(e.center, e.halfSize, h),
                        a.vec3.add(e.center, e.halfSize, p);
                      for (
                        var n = t.offsetIdx;
                        n < t.data.length;
                        n += t.strideIdx
                      )
                        (h[0] = Math.min(h[0], t.data[n])),
                          (h[1] = Math.min(h[1], t.data[n + 1])),
                          (h[2] = Math.min(h[2], t.data[n + 2])),
                          (p[0] = Math.max(p[0], t.data[n])),
                          (p[1] = Math.max(p[1], t.data[n + 1])),
                          (p[2] = Math.max(p[2], t.data[n + 2]));
                      a.vec3.subtract(p, h, e.halfSize),
                        a.vec3d.scale(e.halfSize, 0.5),
                        a.vec3d.add(h, p, e.center),
                        a.vec3d.scale(e.center, 0.5);
                    } else {
                      l.compute(t, e);
                      var i = 2 * Math.sqrt(1 + r[0] + r[5] + r[10]);
                      (v[0] = (r[9] - r[6]) / i),
                        (v[1] = (r[2] - r[8]) / i),
                        (v[2] = (r[4] - r[1]) / i),
                        (v[3] = 0.25 * i),
                        a.quat4.conjugate(v),
                        a.quat4.multiply(v, e.quaternion, e.quaternion);
                    }
                  }),
                  e
                );
              })(),
              h = a.vec3d.create(),
              p = a.vec3d.create(),
              v = a.quat4.create();
            return d;
          }.apply(null, n)) || (e.exports = i);
    },
    1972: function(e, t, r) {
      var n, i;
      (n = [r.dj.c(e.i), t, r(34), r(9), r(772), r(2158), r(814)]),
        void 0 ===
          (i = function(e, t, r, n, i, o, a) {
            return (function() {
              function e() {
                (this._tiles = new Map()),
                  (this._spriteInfo = {}),
                  (this._glyphInfo = {});
              }
              return (
                (e.prototype.reset = function() {
                  var e = new r();
                  (this._spriteInfo = {}), (this._glyphInfo = {});
                  var t = this._tiles;
                  return (
                    t.forEach(function(e) {
                      return e.setObsolete();
                    }),
                    t.clear(),
                    e.resolve(),
                    e.promise
                  );
                }),
                (e.prototype.getLayers = function() {
                  return this._layers;
                }),
                (e.prototype.setLayers = function(e) {
                  var t = new a(e);
                  return (this._layers = t.layers), n.resolve({ data: "" });
                }),
                (e.prototype.getTile = function(e, t) {
                  var r = this,
                    a = e.key,
                    s = o.pool.acquire();
                  s.initialize(e.key, e.refKey, this, e.rotation);
                  var l = e.cacheTile;
                  return t
                    .invoke("fetchTileData", e.refKey)
                    .then(function(e) {
                      return s
                        .setDataAndParse(e, t)
                        .then(function(e) {
                          return (
                            l &&
                              s.status !== i.TileStatus.INVALID &&
                              r._tiles.set(a, s),
                            e
                          );
                        })
                        .catch(function(e) {
                          return (
                            s.setObsolete(),
                            o.pool.release(s),
                            r._tiles.delete(s.tileKey),
                            n.reject(e)
                          );
                        });
                    })
                    .catch(function(e) {
                      return (
                        s.setObsolete(),
                        r._tiles.has(s.tileKey) && r._tiles.delete(s.tileKey),
                        n.reject(e)
                      );
                    })
                    .always(function(e) {
                      return l || o.pool.release(s), e;
                    });
                }),
                (e.prototype.update = function(e) {
                  var t = this._tiles.get(e.key);
                  return t ? t.updateSymbols(e.rotation) : n.reject();
                }),
                (e.prototype.destructTileData = function(e) {
                  return (
                    this._tiles.has(e) &&
                      (o.pool.release(this._tiles.get(e)),
                      this._tiles.delete(e)),
                    n.resolve()
                  );
                }),
                (e.prototype.fetchSprites = function(e, t) {
                  var r = [],
                    i = this._spriteInfo;
                  return (
                    e.forEach(function(e) {
                      void 0 === i[e] && r.push(e);
                    }),
                    0 === r.length
                      ? n.resolve()
                      : t.invoke("getSprites", r).then(function(e) {
                          for (var t in e) {
                            var r = e[t];
                            i[t] = r;
                          }
                        })
                  );
                }),
                (e.prototype.getSpriteItems = function() {
                  return this._spriteInfo;
                }),
                (e.prototype.fetchGlyphs = function(e, t, r, i) {
                  var o = [],
                    a = this._glyphInfo[t];
                  return (
                    a
                      ? r.forEach(function(e) {
                          a[e] || o.push(e);
                        })
                      : ((a = this._glyphInfo[t] = []),
                        r.forEach(function(e) {
                          return o.push(e);
                        })),
                    0 === o.length
                      ? n.resolve()
                      : i
                          .invoke("getGlyphs", {
                            tileID: e,
                            font: t,
                            codePoints: o
                          })
                          .then(function(e) {
                            for (var t in e) a[t] = e[t];
                          })
                  );
                }),
                (e.prototype.getGlyphItems = function(e) {
                  return this._glyphInfo[e];
                }),
                e
              );
            })();
          }.apply(null, n)) || (e.exports = i);
    },
    1973: function(e, t, r) {
      var n, i;
      (n = [
        r.dj.c(e.i),
        t,
        r(2),
        r(0),
        r(3),
        r(9),
        r(1),
        r(124),
        r(774),
        r(2085),
        r(2165),
        r(2166)
      ]),
        void 0 ===
          (i = function(e, t, r, n, i, o, a, s, l, u, c, f) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var d = (function(e) {
              function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                  (t.controller = null),
                  (t.processor = null),
                  (t.remoteClient = null),
                  (t.serviceAndViewInfo = null),
                  (t.tileStore = null),
                  (t.viewState = null),
                  t
                );
              }
              return (
                r(t, e),
                (t.prototype.initialize = function() {
                  var e = this;
                  this.watch("updating", function(t) {
                    e.remoteClient.invoke("setUpdating", t);
                  });
                }),
                (t.prototype.destroy = function() {
                  this.controller && this.controller.destroy(),
                    this.processor && this.processor.destroy();
                }),
                Object.defineProperty(t.prototype, "updating", {
                  get: function() {
                    var e = this.controller,
                      t = this.processor;
                    return !e || !t || e.updating || t.updating || !1;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (t.prototype.startup = function(e) {
                  var t = s.fromJSON(e.tileInfo);
                  (this.serviceAndViewInfo = e),
                    (this.tileStore = new f.default(t));
                }),
                (t.prototype.configure = function(e) {
                  var t = this,
                    r = this.controller,
                    n = this.processor,
                    i = e.controller,
                    a = e.processor,
                    s = [null, null];
                  return (
                    i &&
                      (s[0] = u.createController(i.type, {
                        remoteClient: this.remoteClient,
                        tileStore: this.tileStore,
                        serviceAndViewInfo: this.serviceAndViewInfo
                      })),
                    a &&
                      (s[1] = c.createProcessor(a.type, {
                        remoteClient: this.remoteClient,
                        tileStore: this.tileStore,
                        serviceAndViewInfo: this.serviceAndViewInfo
                      })),
                    o.all(s).then(function(e) {
                      var o = e[0],
                        s = e[1];
                      o &&
                        (r && r === t.controller && r.destroy(),
                        (t.controller = o),
                        (o.configuration = i),
                        o.setViewState(t.viewState),
                        s || (o.processor = t.processor)),
                        s &&
                          (n && n === t.processor && n.destroy(),
                          (t.processor = s),
                          (s.configuration = a),
                          (r.processor = s));
                    })
                  );
                }),
                (t.prototype.setViewState = function(e) {
                  var t = l.fromJSON(e);
                  this._set("viewState", t),
                    this.tileStore.setViewState(t),
                    this.controller && this.controller.setViewState(t);
                }),
                n([a.property()], t.prototype, "controller", void 0),
                n([a.property()], t.prototype, "processor", void 0),
                n(
                  [
                    a.property({
                      dependsOn: ["controller.updating", "processor.updating"]
                    })
                  ],
                  t.prototype,
                  "updating",
                  null
                ),
                n([a.property()], t.prototype, "viewState", void 0),
                n([a.subclass()], t)
              );
            })(a.declared(i));
            t.default = d;
          }.apply(null, n)) || (e.exports = i);
    },
    1974: function(e, t, r) {
      var n, i;
      (n = [
        r.dj.c(e.i),
        t,
        r(109),
        r(2026),
        r(15),
        r(226),
        r(2167),
        r(38),
        r(18),
        r(10),
        r(9),
        r(27),
        r(783),
        r(98),
        r(37),
        r(780),
        r(2129),
        r(135)
      ]),
        void 0 ===
          (i = function(e, t, r, n, i, o, a, s, l, u, c, f, d, h, p, v, y, m) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var x = [
                "esriFieldTypeSmallInteger",
                "esriFieldTypeInteger",
                "esriFieldTypeSingle",
                "esriFieldTypeDouble",
                "esriFieldTypeLong"
              ],
              g = [
                "lat",
                "latitude",
                "y",
                "ycenter",
                "latitude83",
                "latdecdeg",
                "POINT-Y"
              ],
              _ = [
                "lon",
                "lng",
                "long",
                "longitude",
                "x",
                "xcenter",
                "longitude83",
                "longdecdeg",
                "POINT-X"
              ],
              b = [",", " ", ";", "|", "\t"],
              I = /^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,
              w = [0, 0],
              B = (function() {
                return function(e, t) {
                  (this.x = e), (this.y = t);
                };
              })(),
              T = (function() {
                var e = o._parseInfo(),
                  t = new RegExp("^" + e.regexp + "$"),
                  r = new RegExp("[" + e.group + "\\s\\xa0]", "g"),
                  n = e.factor;
                return function(i) {
                  var o = t.exec(i);
                  if (((e.factor = n), !o)) return NaN;
                  var a = o[1];
                  if (!o[1]) {
                    if (!o[2]) return NaN;
                    (a = o[2]), (e.factor *= -1);
                  }
                  return (
                    +(a = a.replace(r, "").replace(e.decimal, ".")) * e.factor
                  );
                };
              })(),
              D = (function() {
                function e() {
                  this._store = null;
                }
                return (
                  (e.prototype.load = function(e) {
                    var t = this;
                    return c
                      .all([this._fetch(e.url), this._checkProjection(e)])
                      .then(function(r) {
                        var n = r[0],
                          i = t._parse(n, e.parsing);
                        return (
                          (t._store = t._createStore(n, i)),
                          t._store.executeQueryForExtent().then(function(e) {
                            return (i.layerDefinition.extent = e.extent), i;
                          })
                        );
                      });
                  }),
                  (e.prototype.queryFeatures = function(e) {
                    return this._store.executeQuery(m.fromJSON(e));
                  }),
                  (e.prototype.queryFeatureCount = function(e) {
                    return this._store.executeQueryForCount(m.fromJSON(e));
                  }),
                  (e.prototype.queryObjectIds = function(e) {
                    return this._store.executeQueryForIds(m.fromJSON(e));
                  }),
                  (e.prototype.queryExtent = function(e) {
                    return this._store.executeQueryForExtent(m.fromJSON(e));
                  }),
                  (e.prototype._fetch = function(e) {
                    if (!e)
                      return c.reject(
                        new u("csv-source:invalid-source", "url not defined")
                      );
                    var t = f.urlToObject(e);
                    return l(t.path, {
                      query: t.query,
                      responseType: "text"
                    }).then(function(e) {
                      return e.data;
                    });
                  }),
                  (e.prototype._parse = function(e, t) {
                    var r = {
                        columnDelimiter: t.columnDelimiter,
                        layerDefinition: null,
                        locationInfo: {
                          latitudeFieldName: t.latitudeField,
                          longitudeFieldName: t.longitudeField
                        }
                      },
                      n = this._readFirstLine(e);
                    if (!n) throw new u("csv", "CSV is empty");
                    if (!t.columnDelimiter) {
                      var i = this._inferDelimiter(n);
                      if (!i)
                        throw new u(
                          "csv",
                          "Unable to detect the delimiter from CSV"
                        );
                      r.columnDelimiter = i;
                    }
                    var o = n.split(r.columnDelimiter),
                      a = (r.layerDefinition = {
                        name: "csv",
                        geometryType: "esriGeometryPoint",
                        objectIdField: null,
                        fields: [],
                        extent: {
                          xmin: Number.POSITIVE_INFINITY,
                          ymin: Number.POSITIVE_INFINITY,
                          xmax: Number.NEGATIVE_INFINITY,
                          ymax: Number.NEGATIVE_INFINITY,
                          spatialReference: t.spatialReference || {
                            wkid: 102100
                          }
                        }
                      });
                    if (!t.latitudeField || !t.longitudeField) {
                      var s = this._inferLocationInfo(o);
                      if (
                        (!t.longitudeField && !s.longitudeFieldName) ||
                        (!t.latitudeField && !s.latitudeFieldName)
                      )
                        throw new u(
                          "csv",
                          "Unable to identify latitudeField and/or longitudeField from CSV"
                        );
                      r.locationInfo = {
                        longitudeFieldName:
                          t.longitudeField || s.longitudeFieldName,
                        latitudeFieldName:
                          t.latitudeField || s.latitudeFieldName
                      };
                    }
                    return (
                      t.fields && t.fields.length
                        ? (a.fields = t.fields)
                        : (a.fields = this._inferFields(
                            e,
                            r.columnDelimiter,
                            o,
                            r.locationInfo
                          )),
                      a.fields.some(function(e) {
                        return (
                          "esriFieldTypeOID" === e.type &&
                          ((a.objectIdField = e.name), !0)
                        );
                      }) ||
                        ((a.objectIdField = "__OBJECTID"),
                        a.fields.unshift({
                          name: "__OBJECTID",
                          alias: "__OBJECTID",
                          type: "esriFieldTypeOID",
                          domain: null
                        })),
                      r
                    );
                  }),
                  (e.prototype._inferLocationInfo = function(e) {
                    var t = null,
                      r = null;
                    return (
                      e.forEach(function(e) {
                        var n = e.toLowerCase();
                        -1 === g.indexOf(n) || r || (r = e),
                          -1 === _.indexOf(n) || t || (t = e);
                      }),
                      { longitudeFieldName: t, latitudeFieldName: r }
                    );
                  }),
                  (e.prototype._inferFields = function(e, t, r, n) {
                    for (
                      var i = [],
                        o = this._sampleLines(e).map(function(e) {
                          return e.split(t).map(function(e) {
                            return e.trim();
                          });
                        }),
                        a = this,
                        s = 0;
                      s < r.length;
                      s++
                    )
                      !(function(e) {
                        var t = r[e];
                        if (
                          t === n.longitudeFieldName ||
                          t === n.latitudeFieldName
                        )
                          i.push({
                            name: t,
                            alias: t,
                            type: "esriFieldTypeDouble",
                            domain: null
                          });
                        else {
                          var s = o.map(function(t) {
                              return t[e];
                            }),
                            l = a._inferFieldType(s),
                            u = {
                              name: t.replace(/[\s\'’‘\.\-\/\(\)]+/g, "_"),
                              type: null,
                              alias: t,
                              domain: null,
                              editable: !0,
                              nullable: !0
                            };
                          switch (l) {
                            case "integer":
                              u.type = "esriFieldTypeInteger";
                              break;
                            case "double":
                              u.type = "esriFieldTypeDouble";
                              break;
                            case "date":
                              (u.type = "esriFieldTypeDate"), (u.length = 36);
                              break;
                            default:
                              (u.type = "esriFieldTypeString"),
                                (u.length = 255);
                          }
                          i.push(u);
                        }
                      })(s);
                    return i;
                  }),
                  (e.prototype._inferFieldType = function(e) {
                    var t = this,
                      r = /[^+-.,0-9]/;
                    return e
                      .map(function(e) {
                        var n = !1;
                        if ("" === e || r.test(e)) n = !0;
                        else {
                          var i = T(e);
                          if (!isNaN(i))
                            return /[.,]/.test(e)
                              ? "double"
                              : i > 214783647 || i < -214783648
                                ? "double"
                                : "integer";
                          if (-1 === e.indexOf("E")) n = !0;
                          else {
                            if (((i = Number(e)), !isNaN(i))) return "double";
                            if (-1 === e.indexOf(",")) n = !0;
                            else {
                              if (
                                ((e = e.replace(",", ".")),
                                (i = Number(e)),
                                !isNaN(i))
                              )
                                return "double";
                              n = !0;
                            }
                          }
                        }
                        if (n) {
                          if (/^[-]?\d*[.,]?\d*$/.test(e)) return "string";
                          var o = new Date(e);
                          return t._isValidDate(o, e) ? "date" : "string";
                        }
                        return "string";
                      })
                      .reduce(function(e, t) {
                        return e === t
                          ? t
                          : "string" === e || "string" === t
                            ? "string"
                            : "double" === e || "double" === t
                              ? "double"
                              : void 0;
                      });
                  }),
                  (e.prototype._isValidDate = function(e, t) {
                    if (
                      !e ||
                      "[object Date]" !== Object.prototype.toString.call(e) ||
                      isNaN(e.getTime())
                    )
                      return !1;
                    var r = !0;
                    if (i("chrome") && /\d+\W*$/.test(t)) {
                      var n = t.match(/[a-zA-Z]{2,}/);
                      if (n) {
                        for (var o = !1, a = 0; !o && a <= n.length; )
                          (o = !I.test(n[a])), a++;
                        r = !o;
                      }
                    }
                    return r;
                  }),
                  (e.prototype._readFirstLine = function(e) {
                    return e.substring(0, e.indexOf("\n")).trim();
                  }),
                  (e.prototype._sampleLines = function(e, t) {
                    void 0 === t && (t = 10);
                    for (
                      var r = !1, n = [], i = e.indexOf("\n") + 1;
                      !r && n.length < t;

                    ) {
                      var o = e.indexOf("\n", i);
                      -1 === o && (r = !0);
                      var a;
                      (a =
                        -1 === o && i < e.length - 1
                          ? e.substring(i).trim()
                          : e.substring(i, o).trim()) && n.push(a),
                        (i = o + 1);
                    }
                    return n;
                  }),
                  (e.prototype._inferDelimiter = function(e) {
                    var t = 0,
                      r = "";
                    return (
                      b.forEach(function(n) {
                        var i = e.split(n).length;
                        i > t && ((t = i), (r = n));
                      }),
                      "" === r ? null : r
                    );
                  }),
                  (e.prototype._createStore = function(e, t) {
                    for (
                      var r,
                        i = t.locationInfo,
                        o = i.latitudeFieldName,
                        l = i.longitudeFieldName,
                        u = t.layerDefinition,
                        c = u.objectIdField,
                        f = u.fields,
                        m = u.extent,
                        g = [],
                        _ = [],
                        b = new n.Set(),
                        I = new n.Set(),
                        D = [],
                        P = 0,
                        V = f;
                      P < V.length;
                      P++
                    ) {
                      var S = V[P],
                        M = S.name,
                        C = S.type;
                      "esriFieldTypeDate" === C
                        ? b.add(M)
                        : x.indexOf(C) > -1 && I.add(M),
                        M !== c && D.push(M);
                    }
                    var E = new a();
                    (E.delimiter = t.columnDelimiter),
                      (E.fieldNames = D),
                      (E.newline = "\n");
                    var A = E.parse(e),
                      z = 0;
                    A.shift();
                    for (var N = 0, F = A; N < F.length; N++) {
                      var O = F[N],
                        L = this._parseCoordinateValue(O[o]),
                        k = this._parseCoordinateValue(O[l]);
                      if (null != k && null != L && !isNaN(L) && !isNaN(k)) {
                        for (var j in O)
                          if (j !== o && j !== l)
                            if (b.has(j)) {
                              var U = new Date(O[j]);
                              O[j] = this._isValidDate(U, O[j])
                                ? U.getTime()
                                : null;
                            } else if (I.has(j)) {
                              var R = T(O[j]);
                              isNaN(R) ? (O[j] = null) : (O[j] = R);
                            }
                        (O[c] = z), z++, g.push(new B(k, L)), _.push(O);
                      }
                    }
                    if (!h.equals({ wkid: 4326 }, m.spatialReference))
                      if (h.isWebMercator(m.spatialReference))
                        for (var Y = 0, G = g; Y < G.length; Y++) {
                          var q = G[Y];
                          (r = p.lngLatToXY(q.x, q.y, w)),
                            (q.x = r[0]),
                            (q.y = r[1]);
                        }
                      else
                        g = d.projectMany(
                          g,
                          s.SpatialReference.WGS84,
                          m.spatialReference,
                          null,
                          !0
                        );
                    for (
                      var J = new y.default({
                          fields: t.layerDefinition.fields,
                          geometryType: "esriGeometryPoint",
                          hasM: !1,
                          hasZ: !1,
                          objectIdField: c,
                          spatialReference: m.spatialReference || {
                            wkid: 4326
                          },
                          cacheSpatialQueries: !0
                        }),
                        Z = [],
                        X = 0;
                      X < g.length;
                      X++
                    ) {
                      var H = g[X],
                        W = H.x,
                        K = H.y,
                        Q = _[X];
                      (Q[c] = X + 1),
                        Z.push(
                          new v.OptimizedFeature(
                            new v.OptimizedGeometry([], [W, K]),
                            Q
                          )
                        );
                    }
                    return J.load(Z), J;
                  }),
                  (e.prototype._parseCoordinateValue = function(e) {
                    if (null == e || "" === e) return null;
                    var t = T(e);
                    return (
                      (isNaN(t) || Math.abs(t) > 181) && (t = parseFloat(e)), t
                    );
                  }),
                  (e.prototype._checkProjection = function(e) {
                    var t = e.parsing.spatialReference;
                    return !t || p.canProject(s.SpatialReference.WGS84, t)
                      ? c.resolve()
                      : d.isSupported()
                        ? d.load()
                        : c.reject(
                            new u("csv-layer", "Projection not supported")
                          );
                  }),
                  e
                );
              })();
            t.default = D;
          }.apply(null, n)) || (e.exports = i);
    },
    2012: function(e, t, r) {
      var n, i;
      (n = [r.dj.c(e.i), t]),
        void 0 ===
          (i = function(e, t) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var r = (function() {
              function e() {
                this._listeners = {};
              }
              return (
                (e.prototype.on = function(e, t) {
                  var r = this;
                  null == this._listeners[e] &&
                    (this._listeners[e] = new Map());
                  var n = {};
                  return (
                    this._listeners[e].set(n, t),
                    {
                      remove: function() {
                        return r._listeners[e].delete(n);
                      }
                    }
                  );
                }),
                (e.prototype.once = function(e, t) {
                  var r = this.on(e, function(e) {
                    r.remove(), t(e);
                  });
                  return r;
                }),
                (e.prototype.emit = function(e, t) {
                  this.hasEventListener(e) &&
                    this._listeners[e].forEach(function(e) {
                      return e(t);
                    });
                }),
                (e.prototype.hasEventListener = function(e) {
                  return (
                    null != this._listeners[e] && this._listeners[e].size > 0
                  );
                }),
                e
              );
            })();
            t.default = r;
          }.apply(null, n)) || (e.exports = i);
    },
    2023: function(e, t, r) {
      var n, i;
      (n = [r.dj.c(e.i), t, r(5), r(772), r(259)]),
        void 0 ===
          (i = function(e, t, r, n, i) {
            function o(e, t) {
              e.delete(t);
            }
            var a = new i(0, 0, 0, 0),
              s = new Map(),
              l = [],
              u = [];
            return (function() {
              function e(e) {
                (this._previousResolution = Number.POSITIVE_INFINITY),
                  (this.cachePolicy = "keep"),
                  (this.tileIndex = new Map()),
                  (this.tiles = []),
                  (this.buffer = 192),
                  (this.acquireTile = e.acquireTile),
                  (this.releaseTile = e.releaseTile),
                  (this.tileInfoView = e.tileInfoView),
                  e.cachePolicy && (this.cachePolicy = e.cachePolicy),
                  null != e.buffer && (this.buffer = e.buffer);
              }
              return (
                (e.prototype.destroy = function() {
                  this.tileIndex.clear();
                }),
                (e.prototype.update = function(e) {
                  var t = this,
                    r = this.tileIndex,
                    i = this.tileInfoView.getTileCoverage(e.state, this.buffer);
                  if (i) {
                    var c = i.spans,
                      f = i.lodInfo,
                      d = f.level,
                      h = e.state.resolution,
                      p = !e.stationary && h > this._previousResolution;
                    (this._previousResolution = h),
                      r.forEach(function(e) {
                        return (e.visible = !0);
                      }),
                      (this.tiles.length = 0),
                      s.clear();
                    var v = 0,
                      y = 0;
                    if (c.length > 0)
                      for (var m = 0, x = c; m < x.length; m++)
                        for (
                          var g = x[m],
                            _ = g.row,
                            b = g.colFrom,
                            I = g.colTo,
                            w = b;
                          w <= I;
                          w++
                        ) {
                          v++;
                          var B = a.set(
                            d,
                            _,
                            f.normalizeCol(w),
                            f.getWorldForColumn(w)
                          ).id;
                          if (r.has(B)) {
                            if (
                              ((T = r.get(B)).status !==
                                n.TileStatus.INITIALIZED && y++,
                              T.attached)
                            ) {
                              s.set(B, T);
                              continue;
                            }
                            T.attached || p || this._addParentTile(B, s);
                          } else {
                            var T = this.acquireTile(a);
                            this.tileIndex.set(B, T),
                              p || this._addParentTile(B, s);
                          }
                        }
                    var D = y === v;
                    (u.length = 0),
                      (l.length = 0),
                      r.forEach(function(e, r) {
                        if ((a.set(r), !s.has(r))) {
                          var o = t.tileInfoView.intersects(i, a);
                          !o || (!p && D)
                            ? "purge" === t.cachePolicy &&
                              e.status !== n.TileStatus.MODIFIED &&
                              e.status !== n.TileStatus.READY
                              ? l.push(r)
                              : (a.level > d || !o) && l.push(r)
                            : e.attached
                              ? u.push(r)
                              : a.level > d && l.push(r);
                        }
                      });
                    for (var P = 0, V = u; P < V.length; P++) {
                      B = V[P];
                      (T = r.get(B)) && T.attached && s.set(B, T);
                    }
                    for (var S = 0, M = l; S < M.length; S++) {
                      (B = M[S]), (T = r.get(B));
                      this.releaseTile(T), o(r, B);
                    }
                    s.forEach(function(e) {
                      return t.tiles.push(e);
                    }),
                      r.forEach(function(e) {
                        s.has(e.key.id) || (e.visible = !1);
                      }),
                      (u.length = 0),
                      (l.length = 0),
                      s.clear();
                  }
                }),
                (e.prototype.clear = function() {
                  var e = this,
                    t = this.tileIndex;
                  t.forEach(function(t) {
                    e.releaseTile(t);
                  }),
                    t.clear();
                }),
                (e.prototype._addParentTile = function(e, t) {
                  for (
                    var r = e, n = null;
                    (r = this.tileInfoView.getTileParentId(r));

                  )
                    if (
                      this.tileIndex.has(r) &&
                      (n = this.tileIndex.get(r)) &&
                      n.attached
                    ) {
                      t.has(n.key.id) || t.set(n.key.id, n);
                      break;
                    }
                }),
                e
              );
            })();
          }.apply(null, n)) || (e.exports = i);
    },
    2029: function(e, t, r) {
      var n, i;
      (n = [r.dj.c(e.i), t, r(48), r(7), r(2089), r(99)]),
        void 0 ===
          (i = function(e, t, r, n, i, o) {
            function a(e, t, r) {
              return {
                center: n.vec3d.createFrom(e[0], e[1], e[2]),
                halfSize: c.createFrom(t[0], t[1], t[2]),
                quaternion: u.createFrom(r[0], r[1], r[2], r[3])
              };
            }
            function s(e, t) {
              var r = o.plane.distance(t, e.center),
                n = l(e, t);
              return r > n ? 1 : r < -n ? -1 : 0;
            }
            function l(e, t) {
              u.conjugate(e.quaternion, d), u.multiplyVec3(d, t, h);
              var r = e.halfSize;
              return (
                Math.abs(h[0] * r[0]) +
                Math.abs(h[1] * r[1]) +
                Math.abs(h[2] * r[2])
              );
            }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var u = n.quat4,
              c = n.vec3,
              f = n.mat3d,
              d = u.create(),
              h = c.create(),
              p = c.create(),
              v = f.create(),
              y = (function() {
                return function(e) {
                  var t = 56 * e;
                  (this.buffer = new ArrayBuffer(t)),
                    (this.obbs = new Array(e));
                  for (var r = 0; r < e; r++)
                    this.obbs[r] = {
                      center: new Float64Array(this.buffer, 56 * r + 0, 3),
                      halfSize: new Float32Array(this.buffer, 56 * r + 24, 3),
                      quaternion: new Float32Array(this.buffer, 56 * r + 36, 4)
                    };
                };
              })();
            (t.ObbArray = y),
              (t.create = a),
              (t.clone = function(e) {
                return a(e.center, e.halfSize, e.quaternion);
              }),
              (t.set = function(e, t) {
                n.vec3d.set(e.center, t.center),
                  n.vec3.set(e.halfSize, t.halfSize),
                  n.quat4.set(e.quaternion, t.quaternion);
              }),
              (t.compute = function(e, t) {
                return (
                  t || (t = a([0, 0, 0], [-1, -1, -1], [0, 0, 0, 1])),
                  i.computeOBB(e, t),
                  t
                );
              }),
              (t.intersectPlane = s),
              (t.toAaBoundingBox = function(e, t) {
                t || (t = r.create());
                var n = u.toMat3(e.quaternion, v),
                  i =
                    e.halfSize[0] * Math.abs(n[0]) +
                    e.halfSize[1] * Math.abs(n[3]) +
                    e.halfSize[2] * Math.abs(n[6]),
                  o =
                    e.halfSize[0] * Math.abs(n[1]) +
                    e.halfSize[1] * Math.abs(n[4]) +
                    e.halfSize[2] * Math.abs(n[7]),
                  a =
                    e.halfSize[0] * Math.abs(n[2]) +
                    e.halfSize[1] * Math.abs(n[5]) +
                    e.halfSize[2] * Math.abs(n[8]);
                return (
                  (t[0] = e.center[0] - i),
                  (t[1] = e.center[1] - o),
                  (t[2] = e.center[2] - a),
                  (t[3] = e.center[0] + i),
                  (t[4] = e.center[1] + o),
                  (t[5] = e.center[2] + a),
                  t
                );
              }),
              (t.minimumDistancePlane = function(e, t) {
                return o.plane.distance(t, e.center) - l(e, t);
              }),
              (t.maximumDistancePlane = function(e, t) {
                return o.plane.distance(t, e.center) + l(e, t);
              }),
              (t.isVisible = function(e, t) {
                return (
                  s(e, t[0]) <= 0 &&
                  s(e, t[1]) <= 0 &&
                  s(e, t[2]) <= 0 &&
                  s(e, t[3]) <= 0 &&
                  s(e, t[4]) <= 0 &&
                  s(e, t[5]) <= 0
                );
              }),
              (t.intersectLine = function(e, t, r, i) {
                void 0 === i && (i = 0),
                  u.conjugate(e.quaternion, d),
                  n.vec3.subtract(t, e.center, h);
                for (
                  var o = u.multiplyVec3(d, h, h),
                    a = u.multiplyVec3(d, r, p),
                    s = -1 / 0,
                    l = 1 / 0,
                    c = 0;
                  c < 3;
                  c++
                )
                  if (Math.abs(a[c]) > 1e-6) {
                    var f = (i + e.halfSize[c] - o[c]) / a[c],
                      v = (-i - e.halfSize[c] - o[c]) / a[c];
                    (s = Math.max(s, Math.min(f, v))),
                      (l = Math.min(l, Math.max(f, v)));
                  } else if (
                    o[c] > e.halfSize[c] + i ||
                    o[c] < -e.halfSize[c] - i
                  )
                    return !1;
                return s <= l;
              });
          }.apply(null, n)) || (e.exports = i);
    },
    2032: function(e, t, r) {
      var n, i;
      (n = [r.dj.c(e.i), t, r(10), r(4), r(11), r(2058)]),
        void 0 ===
          (i = function(e, t, r, n, i, o) {
            function a(e, t, n) {
              for (var i = "", o = 0; o < n; ) {
                var a = e[t + o];
                if (a < 128) (i += String.fromCharCode(a)), o++;
                else if (a >= 192 && a < 224) {
                  if (o + 1 >= n)
                    throw new r(
                      "utf8-decode-error",
                      "UTF-8 Decode failed. Two byte character was truncated."
                    );
                  var s = ((31 & a) << 6) | (63 & e[t + o + 1]);
                  (i += String.fromCharCode(s)), (o += 2);
                } else if (a >= 224 && a < 240) {
                  if (o + 2 >= n)
                    throw new r(
                      "utf8-decode-error",
                      "UTF-8 Decode failed. Multi byte character was truncated."
                    );
                  s =
                    ((15 & a) << 12) |
                    ((63 & e[t + o + 1]) << 6) |
                    (63 & e[t + o + 2]);
                  (i += String.fromCharCode(s)), (o += 3);
                } else {
                  if (!(a >= 240 && a < 248))
                    throw new r(
                      "utf8-decode-error",
                      "UTF-8 Decode failed. Invalid multi byte sequence."
                    );
                  if (o + 3 >= n)
                    throw new r(
                      "utf8-decode-error",
                      "UTF-8 Decode failed. Multi byte character was truncated."
                    );
                  if (
                    (s =
                      ((7 & a) << 18) |
                      ((63 & e[t + o + 1]) << 12) |
                      ((63 & e[t + o + 2]) << 6) |
                      (63 & e[t + o + 3])) >= 65536
                  ) {
                    var l = 55296 + ((s - 65536) >> 10),
                      u = 56320 + (1023 & s);
                    i += String.fromCharCode(l, u);
                  } else i += String.fromCharCode(s);
                  o += 4;
                }
              }
              return i;
            }
            function s(e, r) {
              for (
                var n = {
                    byteOffset: 0,
                    byteCount: 0,
                    fields: Object.create(null)
                  },
                  i = 0,
                  o = 0;
                o < r.length;
                o++
              ) {
                var a = r[o],
                  s = a.valueType || a.type,
                  l = t.valueType2ArrayBufferReader[s];
                (n.fields[a.property] = l(e, i)),
                  (i += t.valueType2TypedArrayClassMap[s].BYTES_PER_ELEMENT);
              }
              return (n.byteCount = i), n;
            }
            function l(e, t, n) {
              var i,
                o,
                s = [],
                l = 0;
              for (o = 0; o < e; o += 1) {
                if ((i = t[o]) > 0) {
                  if ((s.push(a(n, l, i - 1)), 0 !== n[l + i - 1]))
                    throw new r(
                      "string-array-error",
                      "Invalid string array: missing null termination."
                    );
                } else s.push(null);
                l += i;
              }
              return s;
            }
            function u(e, r) {
              return new (0, t.valueType2TypedArrayClassMap[r.valueType])(
                e,
                r.byteOffset,
                r.count * r.valuesPerElement
              );
            }
            function c(e, t) {
              return new Uint8Array(e, t.byteOffset, t.byteCount);
            }
            function f(e, t, i) {
              for (
                var o =
                    null != t.header
                      ? s(e, t.header)
                      : { byteOffset: 0, byteCount: 0, fields: { count: i } },
                  a = {
                    header: o,
                    byteOffset: o.byteCount,
                    byteCount: 0,
                    entries: Object.create(null)
                  },
                  l = o.byteCount,
                  u = 0;
                u < t.ordering.length;
                u++
              ) {
                var c = t.ordering[u],
                  f = n.clone(t[c]);
                if (((f.count = o.fields.count), "String" === f.valueType)) {
                  if (
                    ((f.byteOffset = l),
                    (f.byteCount = o.fields[c + "ByteCount"]),
                    "UTF-8" !== f.encoding)
                  )
                    throw new r(
                      "unsupported-encoding",
                      "Unsupported String encoding.",
                      { encoding: f.encoding }
                    );
                } else {
                  if (!h(f.valueType))
                    throw new r(
                      "unsupported-value-type",
                      "Unsupported binary valueType",
                      { valueType: f.valueType }
                    );
                  var d = p(f.valueType);
                  (l += l % d != 0 ? d - (l % d) : 0),
                    (f.byteOffset = l),
                    (f.byteCount = d * f.valuesPerElement * f.count);
                }
                (l += f.byteCount), (a.entries[c] = f);
              }
              return (a.byteCount = l - a.byteOffset), a;
            }
            function d(e, t, n) {
              if (
                (t !== e &&
                  v.error(
                    "Invalid " +
                      n +
                      " buffer size\n expected: " +
                      e +
                      ", actual: " +
                      t +
                      ")"
                  ),
                t < e)
              )
                throw new r("buffer-too-small", "Binary buffer is too small", {
                  expectedSize: e,
                  actualSize: t
                });
            }
            function h(e) {
              return t.valueType2TypedArrayClassMap.hasOwnProperty(e);
            }
            function p(e) {
              return (
                h(e) && t.valueType2TypedArrayClassMap[e].BYTES_PER_ELEMENT
              );
            }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var v = i.getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");
            (t.readHeader = s),
              (t.readStringArray = l),
              (t.createTypedView = u),
              (t.createRawView = c),
              (t.createAttributeDataIndex = f),
              (t.createGeometryDataIndex = function(e, t, r) {
                var i = s(e, t && t.header),
                  o = i.byteCount,
                  a = {
                    header: i,
                    byteOffset: i.byteCount,
                    byteCount: 0,
                    vertexAttributes: n.clone(t.vertexAttributes)
                  },
                  l = a.vertexAttributes;
                r || null == l.region || delete l.region;
                for (
                  var u = i.fields,
                    c = null != u.vertexCount ? u.vertexCount : u.count,
                    f = 0;
                  f < t.ordering.length;
                  f++
                ) {
                  var h = t.ordering[f];
                  null != l[h] &&
                    ((l[h].byteOffset = o),
                    (l[h].count = c),
                    (o += p(l[h].valueType) * l[h].valuesPerElement * c));
                }
                var v = u.faceCount;
                if (t.faces && v) {
                  a.faces = n.clone(t.faces);
                  var y = a.faces;
                  for (f = 0; f < t.ordering.length; f++) {
                    var m = t.ordering[f];
                    null != y[m] &&
                      ((y[m].byteOffset = o),
                      (y[m].count = v),
                      (o += p(y[m].valueType) * y[m].valuesPerElement * v));
                  }
                }
                var x = u.featureCount;
                if (t.featureAttributes && t.featureAttributeOrder && x) {
                  a.featureAttributes = n.clone(t.featureAttributes);
                  var g = a.featureAttributes;
                  for (f = 0; f < t.featureAttributeOrder.length; f++) {
                    var _ = t.featureAttributeOrder[f];
                    (g[_].byteOffset = o), (g[_].count = x);
                    var b = p(g[_].valueType);
                    "UInt64" === g[_].valueType && (b = 8),
                      (o += b * g[_].valuesPerElement * x);
                  }
                }
                return (
                  d(o, e.byteLength, "geometry"),
                  (a.byteCount = o - a.byteOffset),
                  a
                );
              }),
              (t.readBinaryAttribute = function(e, t, n) {
                if ("lepcc-rgb" === e.encoding) return o.decodeRGB(t);
                if ("lepcc-intensity" === e.encoding)
                  return o.decodeIntensity(t);
                if (null != e.encoding && "" !== e.encoding)
                  throw new r(
                    "unknown-attribute-storage-info-encoding",
                    "Unknown Attribute Storage Info Encoding"
                  );
                e["attributeByteCounts "] &&
                  !e.attributeByteCounts &&
                  (v.warn("Warning: Trailing space in 'attributeByteCounts '."),
                  (e.attributeByteCounts = e["attributeByteCounts "])),
                  "ObjectIds" === e.ordering[0] &&
                    e.hasOwnProperty("objectIds") &&
                    (v.warn("Warning: Case error in objectIds"),
                    (e.ordering[0] = "objectIds"));
                var i = f(t, e, n);
                d(i.byteOffset + i.byteCount, t.byteLength, "attribute");
                var a = i.entries.attributeValues || i.entries.objectIds;
                if (a) {
                  if ("String" === a.valueType) {
                    var s = i.entries.attributeByteCounts,
                      h = u(t, s),
                      p = c(t, a);
                    return l(s.count, h, p);
                  }
                  return u(t, a);
                }
                throw new r(
                  "bad-attribute-storage-info",
                  "Bad attributeStorageInfo specification."
                );
              }),
              (t.valueType2TypedArrayClassMap = {
                Float32: Float32Array,
                Float64: Float64Array,
                UInt8: Uint8Array,
                Int8: Int8Array,
                UInt16: Uint16Array,
                Int16: Int16Array,
                UInt32: Uint32Array,
                Int32: Int32Array
              }),
              (t.valueType2ArrayBufferReader = {
                Float32: function(e, t) {
                  return new DataView(e, 0).getFloat32(t, !0);
                },
                Float64: function(e, t) {
                  return new DataView(e, 0).getFloat64(t, !0);
                },
                UInt8: function(e, t) {
                  return new DataView(e, 0).getUint8(t);
                },
                Int8: function(e, t) {
                  return new DataView(e, 0).getInt8(t);
                },
                UInt16: function(e, t) {
                  return new DataView(e, 0).getUint16(t, !0);
                },
                Int16: function(e, t) {
                  return new DataView(e, 0).getInt16(t, !0);
                },
                UInt32: function(e, t) {
                  return new DataView(e, 0).getUint32(t, !0);
                },
                Int32: function(e, t) {
                  return new DataView(e, 0).getInt32(t, !0);
                }
              }),
              (t.isValueType = h),
              (t.getBytesPerValue = p);
          }.apply(null, n)) || (e.exports = i);
    },
    2043: function(e, t, r) {
      var n, i;
      (n = [r.dj.c(e.i), t]),
        void 0 ===
          (i = function(e, t) {
            function r(e, t) {
              return (e %= t) >= 0 ? e : e + t;
            }
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.C_INFINITY = Number.POSITIVE_INFINITY),
              (t.C_PI = Math.PI),
              (t.C_2PI = 2 * t.C_PI),
              (t.C_PI_BY_2 = t.C_PI / 2),
              (t.C_RAD_TO_256 = 128 / t.C_PI),
              (t.C_256_TO_RAD = t.C_PI / 128),
              (t.C_DEG_TO_256 = 256 / 360),
              (t.C_DEG_TO_RAD = t.C_PI / 180),
              (t.C_SQRT2 = 1.414213562),
              (t.C_SQRT2_INV = 1 / t.C_SQRT2);
            var n = 1 / Math.LN2;
            (t.positiveMod = r),
              (t.radToByte = function(e) {
                return r(e * t.C_RAD_TO_256, 256);
              }),
              (t.degToByte = function(e) {
                return r(e * t.C_DEG_TO_256, 256);
              }),
              (t.log2 = function(e) {
                return Math.log(e) * n;
              }),
              (t.sqr = function(e) {
                return e * e;
              }),
              (t.clamp = function(e, t, r) {
                return Math.min(Math.max(e, t), r);
              }),
              (t.interpolate = function(e, t, r) {
                return e * (1 - r) + t * r;
              }),
              (t.between = function(e, t, r) {
                return (e >= t && e <= r) || (e >= r && e <= t);
              });
          }.apply(null, n)) || (e.exports = i);
    },
    2057: function(e, t, r) {
      var n, i;
      (n = [r.dj.c(e.i), t]),
        void 0 ===
          (i = function(e, t) {
            return (function() {
              function e(e, t) {
                (this.layerExtent = 4096),
                  (this._features = []),
                  (this.layer = e),
                  (this.zoom = t),
                  (this._filter = e.getFeatureFilter());
              }
              return (
                (e.prototype.pushFeature = function(e) {
                  this._filter.filter(e) && this._features.push(e);
                }),
                (e.prototype.hasFeatures = function() {
                  return this._features.length > 0;
                }),
                (e.prototype.processFeatures = function(e, t) {}),
                (e.prototype.assignBufferInfo = function(e) {}),
                e
              );
            })();
          }.apply(null, n)) || (e.exports = i);
    },
    2058: function(e, t, r) {
      var n, i;
      (n = [r.dj.c(e.i), t, r(10)]),
        void 0 ===
          (i = function(e, t, r) {
            function n(e, t, r) {
              return {
                identifier: String.fromCharCode.apply(
                  null,
                  new Uint8Array(e, r + c.identifierOffset, c.identifierLength)
                ),
                version: t.getUint16(r + c.versionOffset, u),
                checksum: t.getUint32(r + c.checksumOffset, u)
              };
            }
            function i(e, t) {
              return {
                sizeLo: e.getUint32(t + f.sizeLo, u),
                sizeHi: e.getUint32(t + f.sizeHi, u),
                minX: e.getFloat64(t + f.minX, u),
                minY: e.getFloat64(t + f.minY, u),
                minZ: e.getFloat64(t + f.minZ, u),
                maxX: e.getFloat64(t + f.maxX, u),
                maxY: e.getFloat64(t + f.maxY, u),
                maxZ: e.getFloat64(t + f.maxZ, u),
                errorX: e.getFloat64(t + f.errorX, u),
                errorY: e.getFloat64(t + f.errorY, u),
                errorZ: e.getFloat64(t + f.errorZ, u),
                count: e.getUint32(t + f.count, u),
                reserved: e.getUint32(t + f.reserved, u)
              };
            }
            function o(e, t, r) {
              var n = [];
              t = a(e, t, n);
              for (var i = [], o = 0; o < n.length; o++) {
                (i.length = 0), (t = a(e, t, i));
                for (var s = 0; s < i.length; s++) r.push(i[s] + n[o]);
              }
              return t;
            }
            function a(e, t, n) {
              var i = new DataView(e, t),
                o = i.getUint8(0),
                a = 31 & o,
                s = !!(32 & o),
                l = (192 & o) >> 6,
                c = 0;
              if (0 === l) (c = i.getUint32(1, u)), (t += 5);
              else if (1 === l) (c = i.getUint16(1, u)), (t += 3);
              else {
                if (2 !== l)
                  throw new r("lepcc-decode-error", "Bad count type");
                (c = i.getUint8(1)), (t += 2);
              }
              if (s) throw new r("lepcc-decode-error", "LUT not implemented");
              for (
                var f = Math.ceil((c * a) / 8),
                  d = new Uint8Array(e, t, f),
                  h = 0,
                  p = 0,
                  v = 0,
                  y = -1 >>> (32 - a),
                  m = 0;
                m < c;
                m++
              ) {
                for (; p < a; ) (h |= d[v] << p), (p += 8), (v += 1);
                (n[m] = h & y),
                  (h >>>= a),
                  (p -= a) + a > 32 && (h |= d[v - 1] >> (8 - p));
              }
              return t + v;
            }
            function s(e, t) {
              return {
                sizeLo: e.getUint32(t + d.sizeLo, u),
                sizeHi: e.getUint32(t + d.sizeHi, u),
                count: e.getUint32(t + d.count, u),
                colorMapCount: e.getUint16(t + d.colorMapCount, u),
                lookupMethod: e.getUint8(t + d.lookupMethod),
                compressionMethod: e.getUint8(t + d.compressionMethod)
              };
            }
            function l(e, t) {
              return {
                sizeLo: e.getUint32(t + h.sizeLo, u),
                sizeHi: e.getUint32(t + h.sizeHi, u),
                count: e.getUint32(t + h.count, u),
                scaleFactor: e.getUint16(t + h.scaleFactor, u),
                bitsPerPoint: e.getUint8(t + h.bitsPerPoint),
                reserved: e.getUint8(t + h.reserved)
              };
            }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var u = !0,
              c = {
                identifierOffset: 0,
                identifierLength: 10,
                versionOffset: 10,
                checksumOffset: 12,
                byteCount: 16
              },
              f = {
                sizeLo: 0,
                sizeHi: 4,
                minX: 8,
                minY: 16,
                minZ: 24,
                maxX: 32,
                maxY: 40,
                maxZ: 48,
                errorX: 56,
                errorY: 64,
                errorZ: 72,
                count: 80,
                reserved: 84,
                byteCount: 88
              };
            t.decodeXYZ = function(e) {
              var t = new DataView(e, 0),
                a = 0,
                s = n(e, t, a),
                l = s.identifier,
                u = s.version;
              if (((a += c.byteCount), "LEPCC     " !== l))
                throw new r("lepcc-decode-error", "Bad identifier");
              if (u > 1) throw new r("lepcc-decode-error", "Unknown version");
              var d = i(t, a);
              if (
                ((a += f.byteCount),
                d.sizeHi * Math.pow(2, 32) + d.sizeLo !== e.byteLength)
              )
                throw new r("lepcc-decode-error", "Bad size");
              var h = new Float64Array(3 * d.count),
                p = [],
                v = [],
                y = [],
                m = [];
              if (
                (a = o(
                  e,
                  (a = o(e, (a = o(e, (a = o(e, a, p)), v)), y)),
                  m
                )) !== e.byteLength
              )
                throw new r("lepcc-decode-error", "Bad length");
              for (var x = 0, g = 0, _ = 0; _ < p.length; _++) {
                g += p[_];
                for (var b = 0, I = 0; I < v[_]; I++) {
                  b += y[x];
                  var w = m[x];
                  (h[3 * x] = Math.min(d.maxX, d.minX + 2 * d.errorX * b)),
                    (h[3 * x + 1] = Math.min(
                      d.maxY,
                      d.minY + 2 * d.errorY * g
                    )),
                    (h[3 * x + 2] = Math.min(
                      d.maxZ,
                      d.minZ + 2 * d.errorZ * w
                    )),
                    x++;
                }
              }
              return {
                errorX: d.errorX,
                errorY: d.errorY,
                errorZ: d.errorZ,
                result: h
              };
            };
            var d = {
              sizeLo: 0,
              sizeHi: 4,
              count: 8,
              colorMapCount: 12,
              lookupMethod: 14,
              compressionMethod: 15,
              byteCount: 16
            };
            t.decodeRGB = function(e) {
              var t = new DataView(e, 0),
                i = 0,
                o = n(e, t, i),
                a = o.identifier,
                l = o.version;
              if (((i += c.byteCount), "ClusterRGB" !== a))
                throw new r("lepcc-decode-error", "Bad identifier");
              if (l > 1) throw new r("lepcc-decode-error", "Unknown version");
              var u = s(t, i);
              if (
                ((i += d.byteCount),
                u.sizeHi * Math.pow(2, 32) + u.sizeLo !== e.byteLength)
              )
                throw new r("lepcc-decode-error", "Bad size");
              if (
                (2 !== u.lookupMethod && 1 !== u.lookupMethod) ||
                0 !== u.compressionMethod
              ) {
                if (0 === u.lookupMethod && 0 === u.compressionMethod) {
                  if (3 * u.count + i !== e.byteLength || 0 !== u.colorMapCount)
                    throw new r("lepcc-decode-error", "Bad count");
                  return new Uint8Array(e, i).slice();
                }
                if (u.lookupMethod <= 2 && 1 === u.compressionMethod) {
                  if (i + 3 !== e.byteLength || 1 !== u.colorMapCount)
                    throw new r("lepcc-decode-error", "Bad count");
                  for (
                    var f = t.getUint8(i),
                      h = t.getUint8(i + 1),
                      p = t.getUint8(i + 2),
                      v = new Uint8Array(3 * u.count),
                      y = 0;
                    y < u.count;
                    y++
                  )
                    (v[3 * y] = f), (v[3 * y + 1] = h), (v[3 * y + 2] = p);
                  return v;
                }
                throw new r(
                  "lepcc-decode-error",
                  "Bad method " + u.lookupMethod + "," + u.compressionMethod
                );
              }
              if (
                3 * u.colorMapCount + u.count + i !== e.byteLength ||
                u.colorMapCount > 256
              )
                throw new r("lepcc-decode-error", "Bad count");
              var m = new Uint8Array(e, i, 3 * u.colorMapCount),
                x = new Uint8Array(e, i + 3 * u.colorMapCount, u.count);
              for (v = new Uint8Array(3 * u.count), y = 0; y < u.count; y++) {
                var g = x[y];
                (v[3 * y] = m[3 * g]),
                  (v[3 * y + 1] = m[3 * g + 1]),
                  (v[3 * y + 2] = m[3 * g + 2]);
              }
              return v;
            };
            var h = {
              sizeLo: 0,
              sizeHi: 4,
              count: 8,
              scaleFactor: 12,
              bitsPerPoint: 14,
              reserved: 15,
              byteCount: 16
            };
            t.decodeIntensity = function(e) {
              var t = new DataView(e, 0),
                i = 0,
                o = n(e, t, i),
                s = o.identifier,
                u = o.version;
              if (((i += c.byteCount), "Intensity " !== s))
                throw new r("lepcc-decode-error", "Bad identifier");
              if (u > 1) throw new r("lepcc-decode-error", "Unknown version");
              var f = l(t, i);
              if (
                ((i += h.byteCount),
                f.sizeHi * Math.pow(2, 32) + f.sizeLo !== e.byteLength)
              )
                throw new r("lepcc-decode-error", "Bad size");
              var d = new Uint16Array(f.count);
              if (8 === f.bitsPerPoint) {
                if (f.count + i !== e.byteLength)
                  throw new r("lepcc-decode-error", "Bad size");
                for (
                  var p = new Uint8Array(e, i, f.count), v = 0;
                  v < f.count;
                  v++
                )
                  d[v] = p[v] * f.scaleFactor;
              } else if (16 === f.bitsPerPoint) {
                if (2 * f.count + i !== e.byteLength)
                  throw new r("lepcc-decode-error", "Bad size");
                for (
                  p = new Uint16Array(e, i, f.count), v = 0;
                  v < f.count;
                  v++
                )
                  d[v] = p[v] * f.scaleFactor;
              } else {
                if (a(e, i, (p = [])) !== e.byteLength)
                  throw new r("lepcc-decode-error", "Bad size");
                for (v = 0; v < f.count; v++) d[v] = p[v] * f.scaleFactor;
              }
              return d;
            };
          }.apply(null, n)) || (e.exports = i);
    },
    2075: function(e, t, r) {
      var n, i;
      (n = [r.dj.c(e.i), t]),
        void 0 ===
          (i = function(e, t) {
            return (function() {
              function e(e) {
                (this._array = []),
                  e <= 0 && console.error("strideInBytes must be positive!"),
                  (this._stride = e);
              }
              return (
                Object.defineProperty(e.prototype, "array", {
                  get: function() {
                    return this._array;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(e.prototype, "index", {
                  get: function() {
                    return (4 * this._array.length) / this._stride;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(e.prototype, "itemSize", {
                  get: function() {
                    return this._stride;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(e.prototype, "sizeInBytes", {
                  get: function() {
                    return 4 * this._array.length;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (e.prototype.reset = function() {
                  this.array.length = 0;
                }),
                (e.prototype.toBuffer = function() {
                  return new Uint32Array(this._array).buffer;
                }),
                (e.i1616to32 = function(e, t) {
                  return (65535 & e) | (t << 16);
                }),
                (e.i8888to32 = function(e, t, r, n) {
                  return (
                    (255 & e) | ((255 & t) << 8) | ((255 & r) << 16) | (n << 24)
                  );
                }),
                (e.i8816to32 = function(e, t, r) {
                  return (255 & e) | ((255 & t) << 8) | (r << 16);
                }),
                e
              );
            })();
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
            function l(e, t, r, n) {
              if (e && e.useElevation) {
                for (var i = new Float64Array(n), a = 0; a < n; a++)
                  i[a] = r[3 * a + 2];
                return i;
              }
              return e && t ? o.readBinaryAttribute(e.storageInfo, t, n) : null;
            }
            function u(e) {
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
                var l = null;
                return (
                  t &&
                    t.colorModulation &&
                    (l = s(e.attributeStorageInfo, t.colorModulation.field)),
                  {
                    rendererJSON: n,
                    isRGBRenderer: o,
                    primaryAttribute: i,
                    modulationAttribute: l
                  }
                );
              }),
              (t.evaluateRenderer = function(e, t, o, a, s) {
                var c = e.rendererJSON,
                  f = e.isRGBRenderer,
                  d = e.primaryAttribute,
                  h = e.modulationAttribute,
                  p = l(d, t, a, s),
                  v = l(h, o, a, s),
                  y = null,
                  m = null;
                if (p && f) y = p;
                else if (p && "pointCloudUniqueValueRenderer" === c.type) {
                  var x = (m = i.fromJSON(c)).colorUniqueValueInfos;
                  y = new Uint8Array(3 * s);
                  for (var g = u(m.fieldTransformType), _ = 0; _ < s; _++)
                    for (
                      var b = (B = g ? g(p[_]) : p[_]) + "", I = 0;
                      I < x.length;
                      I++
                    )
                      if (x[I].values.indexOf(b) >= 0) {
                        (y[3 * _] = x[I].color.r),
                          (y[3 * _ + 1] = x[I].color.g),
                          (y[3 * _ + 2] = x[I].color.b);
                        break;
                      }
                } else if (p && "pointCloudStretchRenderer" === c.type) {
                  var w = (m = n.fromJSON(c)).stops;
                  for (
                    y = new Uint8Array(3 * s),
                      g = u(m.fieldTransformType),
                      _ = 0;
                    _ < s;
                    _++
                  ) {
                    var B = g ? g(p[_]) : p[_],
                      T = w.length - 1;
                    if (B < w[0].value)
                      (y[3 * _] = w[0].color.r),
                        (y[3 * _ + 1] = w[0].color.g),
                        (y[3 * _ + 2] = w[0].color.b);
                    else if (B >= w[T].value)
                      (y[3 * _] = w[T].color.r),
                        (y[3 * _ + 1] = w[T].color.g),
                        (y[3 * _ + 2] = w[T].color.b);
                    else
                      for (I = 1; I < w.length; I++)
                        if (B < w[I].value) {
                          var D =
                            (B - w[I - 1].value) /
                            (w[I].value - w[I - 1].value);
                          (y[3 * _] =
                            w[I].color.r * D + w[I - 1].color.r * (1 - D)),
                            (y[3 * _ + 1] =
                              w[I].color.g * D + w[I - 1].color.g * (1 - D)),
                            (y[3 * _ + 2] =
                              w[I].color.b * D + w[I - 1].color.b * (1 - D));
                          break;
                        }
                  }
                } else if (p && "pointCloudClassBreaksRenderer" === c.type) {
                  var P = (m = r.fromJSON(c)).colorClassBreakInfos;
                  for (
                    y = new Uint8Array(3 * s),
                      g = u(m.fieldTransformType),
                      _ = 0;
                    _ < s;
                    _++
                  )
                    for (B = g ? g(p[_]) : p[_], I = 0; I < P.length; I++)
                      if (B >= P[I].minValue && B <= P[I].maxValue) {
                        (y[3 * _] = P[I].color.r),
                          (y[3 * _ + 1] = P[I].color.g),
                          (y[3 * _ + 2] = P[I].color.b);
                        break;
                      }
                } else
                  for (y = new Uint8Array(3 * s), _ = 0; _ < y.length; _++)
                    y[_] = 255;
                if (v && m && m.colorModulation) {
                  var V = m.colorModulation.minValue,
                    S = m.colorModulation.maxValue;
                  for (_ = 0; _ < s; _++) {
                    var M =
                      (B = v[_]) >= S
                        ? 1
                        : B <= V
                          ? 0.3
                          : 0.3 + (0.7 * (B - V)) / (S - V);
                    (y[3 * _] = M * y[3 * _]),
                      (y[3 * _ + 1] = M * y[3 * _ + 1]),
                      (y[3 * _ + 2] = M * y[3 * _ + 2]);
                  }
                }
                return y;
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
    2085: function(e, t, r) {
      var n, i;
      (n = [r.dj.c(e.i), t, r(13), r(10), r(9)]),
        void 0 ===
          (i = function(e, t, n, i, o) {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.getControllerConfiguration = function(e) {
                var t = e.source;
                return e.capabilities.operations.supportsQuery
                  ? (function(e) {
                      return (
                        e &&
                        "esri.layers.graphics.sources.CSVSource" ===
                          e.declaredClass
                      );
                    })(t)
                    ? o.resolve().then(function() {
                        return {
                          type: "memory",
                          processing:
                            (e.processing && e.processing.toWorker()) || null
                        };
                      })
                    : o.resolve({
                        type: "on-demand",
                        gdbVersion: e.gdbVersion,
                        historicMoment:
                          e.historicMoment && e.historicMoment.getTime(),
                        processing:
                          (e.processing && e.processing.toWorker()) || null
                      })
                  : o.reject(
                      new i(
                        "graphicscontroller:query-capability-required",
                        "Service requires query capabilities to be used as a feature layer",
                        { layer: e }
                      )
                    );
              }),
              (t.createController = function(e, t) {
                return ("memory" === e
                  ? o.create(function(e) {
                      return r
                        .e(47)
                        .then(
                          function() {
                            var t = [r(2145)];
                            e.apply(null, t);
                          }.bind(this)
                        )
                        .catch(r.oe);
                    })
                  : o.create(function(e) {
                      return Promise.all([r.e(7), r.e(15), r.e(48)])
                        .then(
                          function() {
                            var t = [r(2146)];
                            e.apply(null, t);
                          }.bind(this)
                        )
                        .catch(r.oe);
                    })
                )
                  .then(function(e) {
                    return e.default;
                  })
                  .then(function(e) {
                    var r = t.serviceAndViewInfo,
                      i = t.remoteClient,
                      o = t.tileStore;
                    return new e(n({}, r, { tileStore: o, remoteClient: i }));
                  });
              });
          }.apply(null, n)) || (e.exports = i);
    },
    2087: function(e, t, r) {
      var n, i;
      (n = [r.dj.c(e.i), t, r(2032), r(782), r(31), r(14)]),
        void 0 ===
          (i = function(e, t, r, n, i, o) {
            function a(e, t, r, n, i, o, a) {
              switch (r) {
                case 1:
                  for (var s = 0; s < a; s++) (n[i] = e[t]), (t += 1), (i += o);
                  break;
                case 2:
                  for (s = 0; s < a; s++)
                    (n[i] = e[t]), (n[i + 1] = e[t + 1]), (t += 2), (i += o);
                  break;
                case 3:
                  for (s = 0; s < a; s++)
                    (n[i] = e[t]),
                      (n[i + 1] = e[t + 1]),
                      (n[i + 2] = e[t + 2]),
                      (t += 3),
                      (i += o);
                  break;
                case 4:
                  for (s = 0; s < a; s++)
                    (n[i] = e[t]),
                      (n[i + 1] = e[t + 1]),
                      (n[i + 2] = e[t + 2]),
                      (n[i + 3] = e[t + 3]),
                      (t += 4),
                      (i += o);
                  break;
                default:
                  throw d("Unhandled stride size " + r);
              }
            }
            function s(e, t, r, n, i, o) {
              switch (t) {
                case 1:
                  for (var a = 0; a < o; a++) (r[n] = e), (n += i);
                  break;
                case 2:
                  for (a = 0; a < o; a++) (r[n] = e), (r[n + 1] = e), (n += i);
                  break;
                case 3:
                  for (a = 0; a < o; a++)
                    (r[n] = e), (r[n + 1] = e), (r[n + 2] = e), (n += i);
                  break;
                case 4:
                  for (a = 0; a < o; a++)
                    (r[n] = e),
                      (r[n + 1] = e),
                      (r[n + 2] = e),
                      (r[n + 3] = e),
                      (n += i);
                  break;
                default:
                  throw d("Unhandled stride size " + t);
              }
            }
            function l(e) {
              switch (e) {
                case 5120:
                  return Int8Array;
                case 5126:
                  return Float32Array;
                case 5124:
                  return Int32Array;
                case 5122:
                  return Int16Array;
                case 5121:
                  return Uint8Array;
                case 5125:
                  return Uint32Array;
                case 5123:
                  return Uint16Array;
              }
              throw new Error("Unhandled data type: " + e);
            }
            function u(e) {
              switch (e) {
                case 5120:
                  return "Int8";
                case 5126:
                  return "Float32";
                case 5124:
                  return "Int32";
                case 5122:
                  return "Int16";
                case 5121:
                  return "UInt8";
                case 5125:
                  return "UInt32";
                case 5123:
                  return "UInt16";
              }
              throw new Error("Unhandled data type: " + e);
            }
            function c(e) {
              return e % Uint32Array.BYTES_PER_ELEMENT == 0;
            }
            function f(e) {
              return e > 0 && e % Uint32Array.BYTES_PER_ELEMENT == 0;
            }
            function d(e) {
              return new Error("I3SGeometryUtil processing failed: " + e);
            }
            function h(e) {
              var t = e.normals,
                r = e.positions,
                n = e.normalInd,
                a = e.positionInd;
              o.assert(e.normalInd.length === e.positionInd.length);
              for (
                var s = i.vec3.create(),
                  l = i.vec3.create(),
                  u = i.vec2.create(),
                  c = r.data,
                  f = r.offsetIdx,
                  d = r.strideIdx,
                  h = t.data,
                  p = t.offsetIdx,
                  v = t.strideIdx,
                  y = 0;
                y < a.length;
                y += 3
              ) {
                var m = a[y],
                  x = f + d * m,
                  g = c[x],
                  _ = c[x + 1],
                  b = c[x + 2];
                (x = f + d * (m = a[y + 1])),
                  (s[0] = c[x] - g),
                  (s[1] = c[x + 1] - _),
                  (s[2] = c[x + 2] - b),
                  (x = f + d * (m = a[y + 2])),
                  (l[0] = c[x] - g),
                  (l[1] = c[x + 1] - _),
                  (l[2] = c[x + 2] - b),
                  i.vec3.cross(s, l, s),
                  o.encodeNormal(s, u);
                for (var I = 0; I < 3; I++) {
                  var w = p + v * n[y + I];
                  (h[w] = o.encodeInt16(u[0])),
                    (h[w + 1] = o.encodeInt16(u[1]));
                }
              }
            }
            function p(e, t, r) {
              var n = e.length / 3,
                i = t.data,
                a = t.offsetIdx,
                s = t.strideIdx;
              if (null != r)
                for (
                  var l = r,
                    u = l[0],
                    c = l[1],
                    f = l[2],
                    d = l[4],
                    h = l[5],
                    p = l[6],
                    v = l[8],
                    y = l[9],
                    g = l[10],
                    _ = 0;
                  _ < n;
                  _++
                ) {
                  var b = e[3 * _],
                    I = e[3 * _ + 1],
                    w = e[3 * _ + 2];
                  (m[0] = u * b + c * I + f * w),
                    (m[1] = d * b + h * I + p * w),
                    (m[2] = v * b + y * I + g * w),
                    o.encodeNormal(m, x),
                    (i[a + _ * s] = o.encodeInt16(x[0])),
                    (i[a + _ * s + 1] = o.encodeInt16(x[1]));
                }
              else
                for (_ = 0; _ < n; _++)
                  (m[0] = e[3 * _]),
                    (m[1] = e[3 * _ + 1]),
                    (m[2] = e[3 * _ + 2]),
                    o.encodeNormal(m, x),
                    (i[a + _ * s] = o.encodeInt16(x[0])),
                    (i[a + _ * s + 1] = o.encodeInt16(x[1]));
            }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var v = new Uint8Array(64);
            (t.interleaveGeometryBuffer = function(e, t, r, n, i) {
              void 0 === n && (n = []), void 0 === i && (i = []);
              var o = e.params.vertexAttributes,
                h = o.position.count;
              if (!f(r[0].stride))
                throw d(
                  "Layout stride must use " +
                    Uint32Array.BYTES_PER_ELEMENT +
                    "-byte words"
                );
              for (
                var p = r[0].stride / Uint32Array.BYTES_PER_ELEMENT,
                  y = new Uint32Array(p * h),
                  m = 0,
                  x = (r = r.slice(0).sort(function(e, t) {
                    return e.offset - t.offset;
                  }));
                m < x.length;
                m++
              )
                !(function(e) {
                  if (-1 !== i.indexOf(e.name)) return "continue";
                  var r = o[e.name],
                    p = l(e.type),
                    m = void 0,
                    x = !1;
                  if (null == r) {
                    var g = n.filter(function(t) {
                      return t.name === e.name;
                    })[0];
                    if (!g) throw d("Geometry definition is missing attribute");
                    r = {
                      valueType: u(e.type),
                      byteOffset: 0,
                      count: h,
                      valuesPerElement: e.count
                    };
                    for (var _ = 0; _ < v.length; _++) v[_] = g.byteValue;
                    (m = v.buffer), (x = !0);
                  } else m = t;
                  if (u(e.type) !== r.valueType)
                    throw d(
                      "Geometry definition type must match attribute type"
                    );
                  if (!c(r.byteOffset) || !c(e.offset))
                    throw d(
                      e.name +
                        " offset must use " +
                        Uint32Array.BYTES_PER_ELEMENT +
                        "-byte words"
                    );
                  if (
                    !f(r.valuesPerElement * p.BYTES_PER_ELEMENT) ||
                    !f(e.count * p.BYTES_PER_ELEMENT)
                  )
                    throw d(
                      e.name +
                        " data must use " +
                        Uint32Array.BYTES_PER_ELEMENT +
                        "-byte words"
                    );
                  var b = new Uint32Array(m),
                    I = r.byteOffset / Uint32Array.BYTES_PER_ELEMENT,
                    w =
                      (r.valuesPerElement * p.BYTES_PER_ELEMENT) /
                      Uint32Array.BYTES_PER_ELEMENT,
                    B = e.offset / Uint32Array.BYTES_PER_ELEMENT,
                    T = e.stride / Uint32Array.BYTES_PER_ELEMENT;
                  x ? s(b[0], w, y, B, T, h) : a(b, I, w, y, B, T, h);
                })(x[m]);
              return y.buffer;
            }),
              (t.processAndInterleaveNormals = function(e, t, n, i, o) {
                if ("none" === e) h(o);
                else {
                  var a = r.createTypedView(
                      n,
                      t.params.vertexAttributes.normal
                    ),
                    s = "earth-centered" === e ? i : null;
                  p(a, o.normals, s);
                }
              });
            var y = 65536;
            t.extractPositionData = function(e, t, r) {
              var i = t[0];
              if (null == i || "position" !== i.name || 5126 !== i.type)
                return null;
              for (
                var o = new Float32Array(e),
                  a = i.stride / 4,
                  s = (3 * o.length) / a,
                  l = new Float32Array(s),
                  u = 0;
                u < s / 3;
                u++
              )
                (l[3 * u] = o[u * a + i.offset]),
                  (l[3 * u + 1] = o[u * a + i.offset + 1]),
                  (l[3 * u + 2] = o[u * a + i.offset + 2]);
              var c,
                f = n.deduplicate(l.buffer, 3),
                d = f.uniqueCount < y;
              if (r)
                for (
                  c = new (d ? Uint16Array : Uint32Array)(r.length), u = 0;
                  u < r.length;
                  u++
                )
                  c[u] = f.indices[r[u]];
              else c = d ? new Uint16Array(f.indices) : f.indices;
              return { data: new Float32Array(f.buffer), indices: c };
            };
            var m = i.vec3.create(),
              x = i.vec2.create();
          }.apply(null, n)) || (e.exports = i);
    },
    2088: function(e, t, r) {
      var n, i;
      (n = [r.dj.c(e.i), t, r(7), r(41)]),
        void 0 ===
          (i = function(e, t, r, n) {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.ReprojectionTypes = {
                PER_VERTEX: "perVertex",
                NO_REPROJECTION: "noReprojection"
              });
            var i = 1e3,
              o = new Float64Array(3 * i),
              a = r.vec3d.create();
            t.reprojectPoints = function(e, t, s, l, u, c) {
              var f = e.data,
                d = e.offsetIdx,
                h = e.strideIdx;
              r.vec3d.set(t, a), (a[2] += s);
              var p = r.mat4d.create();
              n.computeLinearTransformation(l, a, p, c);
              var v = r.mat4d.create();
              r.mat4d.inverse(p, v);
              var y = r.mat4d.create();
              r.mat4d.identity(y);
              var m = [0, 0, 0],
                x = f.length / h;
              n.vectorToVector(a, l, m, u);
              for (var g = 0; g < x; g += i) {
                for (var _ = Math.min(i, x - g), b = 0; b < _; b++) {
                  var I = d + h * (g + b);
                  (o[3 * b] = f[I] + m[0]),
                    (o[3 * b + 1] = f[I + 1] + m[1]),
                    (o[3 * b + 2] = f[I + 2] + m[2]);
                }
                for (n.bufferToBuffer(o, u, 0, o, c, 0, _), b = 0; b < _; b++) {
                  var w = o[3 * b],
                    B = o[3 * b + 1],
                    T = o[3 * b + 2],
                    D = d + h * (g + b);
                  (f[D] = v[0] * w + v[4] * B + v[8] * T + v[12]),
                    (f[D + 1] = v[1] * w + v[5] * B + v[9] * T + v[13]),
                    (f[D + 2] = v[2] * w + v[6] * B + v[10] * T + v[14]);
                }
              }
              return { localTrafo: y, globalTrafo: p };
            };
          }.apply(null, n)) || (e.exports = i);
    },
    2089: function(e, t, r) {
      var n, i;
      (n = [r.dj.c(e.i), t, r(7)]),
        void 0 ===
          (i = function(e, t, r) {
            function n(e, t, n, i, o, s, l, u, c, f, d) {
              return (
                (function(e, t, n) {
                  for (
                    var i = r.vec3d.dist2(e.maxVert[0], e.minVert[0]),
                      o = 0,
                      a = 1;
                    a < 7;
                    ++a
                  ) {
                    var s = r.vec3d.dist2(e.maxVert[a], e.minVert[a]);
                    s > i && ((i = s), (o = a));
                  }
                  r.vec3d.set(e.minVert[o], t), r.vec3d.set(e.maxVert[o], n);
                })(e, i, o),
                r.vec3d.dist2(i, o) < h
                  ? 1
                  : (r.vec3d.subtract(i, o, l),
                    r.vec3d.normalize(l),
                    (function(e, t, n, i) {
                      for (
                        var o = e.data,
                          a = e.offsetIdx,
                          s = e.strideIdx,
                          l = Number.NEGATIVE_INFINITY,
                          u = 0,
                          c = a;
                        c < o.length;
                        c += s
                      ) {
                        r.vec3d.set3(
                          o[c] - t[0],
                          o[c + 1] - t[1],
                          o[c + 2] - t[2],
                          B
                        );
                        var f = n[0] * B[0] + n[1] * B[1] + n[2] * B[2],
                          d = r.vec3d.length2(n),
                          h = r.vec3d.length2(B) - (f * f) / d;
                        h > l && ((l = h), (u = c));
                      }
                      return r.vec3d.set3(o[u], o[u + 1], o[u + 2], i), l;
                    })(t, i, l, s) < h
                      ? 2
                      : (r.vec3d.subtract(o, s, u),
                        r.vec3d.normalize(u),
                        r.vec3d.subtract(s, i, c),
                        r.vec3d.normalize(c),
                        r.vec3d.cross(u, l, n),
                        r.vec3d.normalize(n),
                        a(t, n, l, u, c, f),
                        0))
              );
            }
            function i(e, t, n, i, s, l, u, c, f, d) {
              o(e, t, n, i, s, y, m),
                void 0 !== y[0] &&
                  (r.vec3d.subtract(y, n, x),
                  r.vec3d.normalize(x),
                  r.vec3d.subtract(y, i, g),
                  r.vec3d.normalize(g),
                  r.vec3d.subtract(y, s, _),
                  r.vec3d.normalize(_),
                  r.vec3d.cross(g, l, b),
                  r.vec3d.normalize(b),
                  r.vec3d.cross(_, u, I),
                  r.vec3d.normalize(I),
                  r.vec3d.cross(x, c, w),
                  r.vec3d.normalize(w),
                  a(e, b, l, g, x, f),
                  a(e, I, u, _, g, f),
                  a(e, w, c, x, _, f)),
                void 0 !== m[0] &&
                  (r.vec3d.subtract(m, n, x),
                  r.vec3d.normalize(x),
                  r.vec3d.subtract(m, i, g),
                  r.vec3d.normalize(g),
                  r.vec3d.subtract(m, s, _),
                  r.vec3d.normalize(_),
                  r.vec3d.cross(g, l, b),
                  r.vec3d.normalize(b),
                  r.vec3d.cross(_, u, I),
                  r.vec3d.normalize(I),
                  r.vec3d.cross(x, c, w),
                  r.vec3d.normalize(w),
                  a(e, b, l, g, x, f),
                  a(e, I, u, _, g, f),
                  a(e, w, c, x, _, f));
            }
            function o(e, t, n, i, o, a, s) {
              !(function(e, t, n, i, o) {
                var a = e.data,
                  s = e.offsetIdx,
                  l = e.strideIdx;
                r.vec3d.set3(a[s], a[s + 1], a[s + 2], i),
                  r.vec3d.set(i, o),
                  (n[0] = r.vec3d.dot(E, t)),
                  (n[1] = n[0]);
                for (var u = s + l; u < a.length; u += l) {
                  r.vec3d.set3(a[u], a[u + 1], a[u + 2], E);
                  var c = r.vec3d.dot(E, t);
                  c < n[0] && ((n[0] = c), r.vec3d.set(E, i)),
                    c > n[1] && ((n[1] = c), r.vec3d.set(E, o));
                }
              })(e, t, T, s, a);
              var l = r.vec3.dot(n, t);
              T[1] - h <= l && (a[0] = void 0),
                T[0] + h >= l && (s[0] = void 0);
            }
            function a(e, t, n, i, o, a) {
              if (!(r.vec3d.length2(t) < h)) {
                r.vec3d.cross(n, t, D),
                  r.vec3d.cross(i, t, P),
                  r.vec3d.cross(o, t, V),
                  s(e, t, T),
                  (M[1] = T[0]),
                  (S[1] = T[1]),
                  (C[1] = S[1] - M[1]);
                for (var l = [n, i, o], u = [D, P, V], c = 0; c < 3; ++c) {
                  s(e, l[c], T),
                    (M[0] = T[0]),
                    (S[0] = T[1]),
                    s(e, u[c], T),
                    (M[2] = T[0]),
                    (S[2] = T[1]),
                    (C[0] = S[0] - M[0]),
                    (C[2] = S[2] - M[2]);
                  var f = d(C);
                  f < a.quality &&
                    (r.vec3d.set(l[c], a.b0),
                    r.vec3d.set(t, a.b1),
                    r.vec3d.set(u[c], a.b2),
                    (a.quality = f));
                }
              }
            }
            function s(e, t, r) {
              var n = e.data,
                i = e.offsetIdx,
                o = e.strideIdx;
              (r[0] = Number.POSITIVE_INFINITY),
                (r[1] = Number.NEGATIVE_INFINITY);
              for (var a = i; a < n.length; a += o) {
                var s = n[a] * t[0] + n[a + 1] * t[1] + n[a + 2] * t[2];
                (r[0] = Math.min(r[0], s)), (r[1] = Math.max(r[1], s));
              }
            }
            function l(e, t, n) {
              r.vec3d.set(e, n.center),
                r.vec3d.scale(t, 0.5, n.halfSize),
                r.quat4.identity(n.quaternion);
            }
            function u(e, t, n) {
              r.vec3d.set(t, A),
                Math.abs(t[0]) > Math.abs(t[1]) &&
                Math.abs(t[0]) > Math.abs(t[2])
                  ? (A[0] = 0)
                  : Math.abs(t[1]) > Math.abs(t[2])
                    ? (A[1] = 0)
                    : (A[2] = 0),
                r.vec3d.length2(A) < h && (A[0] = A[1] = A[2] = 1),
                r.vec3d.cross(t, A, z),
                r.vec3d.normalize(z),
                r.vec3d.cross(t, z, N),
                r.vec3d.normalize(N),
                c(e, t, z, N, F, O),
                r.vec3d.subtract(O, F, L),
                f(t, z, N, F, O, L, n);
            }
            function c(e, t, r, n, i, o) {
              s(e, t, T),
                (i[0] = T[0]),
                (o[0] = T[1]),
                s(e, r, T),
                (i[1] = T[0]),
                (o[1] = T[1]),
                s(e, n, T),
                (i[2] = T[0]),
                (o[2] = T[1]);
            }
            function f(e, t, n, i, o, a, s) {
              (j[0] = e[0]),
                (j[3] = e[1]),
                (j[6] = e[2]),
                (j[1] = t[0]),
                (j[4] = t[1]),
                (j[7] = t[2]),
                (j[2] = n[0]),
                (j[5] = n[1]),
                (j[8] = n[2]),
                r.quat4.fromRotationMatrix(j, s.quaternion),
                r.vec3d.add(i, o, U),
                r.vec3d.scale(U, 0.5),
                r.vec3d.scale(e, U[0], s.center),
                r.vec3d.scale(t, U[1], k),
                r.vec3d.add(s.center, k),
                r.vec3d.scale(n, U[2], k),
                r.vec3d.add(s.center, k),
                r.vec3d.scale(a, 0.5, s.halfSize);
            }
            function d(e) {
              return e[0] * e[1] + e[0] * e[2] + e[1] * e[2];
            }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var h = 1e-6,
              p = r.vec3d.create(),
              v = r.vec3d.create();
            t.computeOBB = function(e, t) {
              var o = e.data,
                a = e.strideIdx,
                s = o.length / a;
              if (!(s <= 0)) {
                var h = new R(e);
                r.vec3d.add(h.minProj, h.maxProj, p),
                  r.vec3d.scale(p, 0.5),
                  r.vec3d.subtract(h.maxProj, h.minProj, v);
                var y = d(v),
                  m = new Y();
                (m.quality = y),
                  s < 14 &&
                    (e = {
                      data: new Float64Array(h.buffer, 112, 42),
                      size: 3,
                      offsetIdx: 0,
                      strideIdx: 3
                    });
                var x = r.vec3d.create(),
                  g = r.vec3d.create(),
                  _ = r.vec3d.create(),
                  b = r.vec3d.create(),
                  I = r.vec3d.create(),
                  w = r.vec3d.create(),
                  B = r.vec3d.create();
                switch (n(h, e, B, x, g, _, b, I, w, m)) {
                  case 1:
                    return void l(p, v, t);
                  case 2:
                    return void u(e, b, t);
                }
                i(e, B, x, g, _, b, I, w, m), c(e, m.b0, m.b1, m.b2, F, O);
                var T = r.vec3d.create();
                r.vec3d.subtract(O, F, T),
                  (m.quality = d(T)),
                  m.quality < y ? f(m.b0, m.b1, m.b2, F, O, T, t) : l(p, v, t);
              }
            };
            var y = r.vec3d.create(),
              m = r.vec3d.create(),
              x = r.vec3d.create(),
              g = r.vec3d.create(),
              _ = r.vec3d.create(),
              b = r.vec3d.create(),
              I = r.vec3d.create(),
              w = r.vec3d.create(),
              B = r.vec3d.create(),
              T = r.vec2d.create(),
              D = r.vec3d.create(),
              P = r.vec3d.create(),
              V = r.vec3d.create(),
              S = r.vec3d.create(),
              M = r.vec3d.create(),
              C = r.vec3d.create(),
              E = r.vec3d.create(),
              A = r.vec3d.create(),
              z = r.vec3d.create(),
              N = r.vec3d.create(),
              F = r.vec3d.create(),
              O = r.vec3d.create(),
              L = r.vec3d.create(),
              k = r.vec3d.create(),
              j = r.mat3d.create(),
              U = r.vec3d.create(),
              R = (function() {
                return function(e) {
                  (this.minVert = []),
                    (this.maxVert = []),
                    (this.buffer = new ArrayBuffer(448));
                  var t = 0;
                  for (
                    this.minProj = new Float64Array(this.buffer, t, 7),
                      t += 56,
                      this.maxProj = new Float64Array(this.buffer, t, 7),
                      t += 56;
                    this.minVert.length < 7;

                  )
                    this.minVert.push(new Float64Array(this.buffer, t, 3)),
                      (t += 24);
                  for (; this.maxVert.length < 7; )
                    this.maxVert.push(new Float64Array(this.buffer, t, 3)),
                      (t += 24);
                  for (var n = 0; n < 7; ++n)
                    (this.minProj[n] = Number.POSITIVE_INFINITY),
                      (this.maxProj[n] = Number.NEGATIVE_INFINITY);
                  var i = [],
                    o = [],
                    a = e.data,
                    s = e.offsetIdx,
                    l = e.strideIdx;
                  for (n = s; n < a.length; n += l) {
                    var u = a[n];
                    u < this.minProj[0] && ((this.minProj[0] = u), (i[0] = n)),
                      u > this.maxProj[0] &&
                        ((this.maxProj[0] = u), (o[0] = n)),
                      (u = a[n + 1]) < this.minProj[1] &&
                        ((this.minProj[1] = u), (i[1] = n)),
                      u > this.maxProj[1] &&
                        ((this.maxProj[1] = u), (o[1] = n)),
                      (u = a[n + 2]) < this.minProj[2] &&
                        ((this.minProj[2] = u), (i[2] = n)),
                      u > this.maxProj[2] &&
                        ((this.maxProj[2] = u), (o[2] = n)),
                      (u = a[n] + a[n + 1] + a[n + 2]) < this.minProj[3] &&
                        ((this.minProj[3] = u), (i[3] = n)),
                      u > this.maxProj[3] &&
                        ((this.maxProj[3] = u), (o[3] = n)),
                      (u = a[n] + a[n + 1] - a[n + 2]) < this.minProj[4] &&
                        ((this.minProj[4] = u), (i[4] = n)),
                      u > this.maxProj[4] &&
                        ((this.maxProj[4] = u), (o[4] = n)),
                      (u = a[n] - a[n + 1] + a[n + 2]) < this.minProj[5] &&
                        ((this.minProj[5] = u), (i[5] = n)),
                      u > this.maxProj[5] &&
                        ((this.maxProj[5] = u), (o[5] = n)),
                      (u = a[n] - a[n + 1] - a[n + 2]) < this.minProj[6] &&
                        ((this.minProj[6] = u), (i[6] = n)),
                      u > this.maxProj[6] &&
                        ((this.maxProj[6] = u), (o[6] = n));
                  }
                  for (n = 0; n < 7; ++n) {
                    var c = i[n];
                    r.vec3d.set3(a[c], a[c + 1], a[c + 2], this.minVert[n]),
                      (c = o[n]),
                      r.vec3d.set3(a[c], a[c + 1], a[c + 2], this.maxVert[n]);
                  }
                };
              })(),
              Y = (function() {
                return function() {
                  (this.b0 = r.vec3d.createFrom(1, 0, 0)),
                    (this.b1 = r.vec3d.createFrom(0, 1, 0)),
                    (this.b2 = r.vec3d.createFrom(0, 0, 1)),
                    (this.quality = 0);
                };
              })();
          }.apply(null, n)) || (e.exports = i);
    },
    2120: function(e, t, r) {
      var n, i;
      (n = [r.dj.c(e.i), t, r(5), r(0), r(224), r(316), r(2037), r(2057)]),
        void 0 ===
          (i = function(e, t, r, n, i, o, a, s) {
            return (function(e) {
              function t(t, r, n, i, o, a) {
                var s = e.call(this, t, r) || this;
                if (t.hasDataDrivenFill !== n.isDataDriven())
                  throw new Error("incompatible fill buffer");
                if (t.hasDataDrivenOutline !== o.isDataDriven())
                  throw new Error("incompatible outline buffer");
                return (
                  (s._fillVertexBuffer = n),
                  (s._fillIndexBuffer = i),
                  (s._outlineVertexBuffer = o),
                  (s._outlineIndexBuffer = a),
                  s
                );
              }
              return (
                r(t, e),
                Object.defineProperty(t.prototype, "fillIndexStart", {
                  get: function() {
                    return this._fillIndexStart;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(t.prototype, "fillIndexCount", {
                  get: function() {
                    return this._fillIndexCount;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(t.prototype, "outlineIndexStart", {
                  get: function() {
                    return this._outlineIndexStart;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(t.prototype, "outlineIndexCount", {
                  get: function() {
                    return this._outlineIndexCount;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (t.prototype.assignBufferInfo = function(e) {
                  var t = e;
                  (t._fillIndexStart = this._fillIndexStart),
                    (t._fillIndexCount = this._fillIndexCount),
                    e.layer.getPaintProperty("fill-outline-color")
                      ? ((t._outlineIndexStart = this._outlineIndexStart),
                        (t._outlineIndexCount = this._outlineIndexCount))
                      : ((t._outlineIndexStart = 0),
                        (t._outlineIndexCount = 0));
                }),
                (t.prototype.processFeatures = function(e, t) {
                  (this._fillIndexStart = this._fillIndexBuffer.index),
                    (this._fillIndexCount = 0),
                    (this._outlineIndexStart = this._outlineIndexBuffer.index),
                    (this._outlineIndexCount = 0);
                  var r = this.layer,
                    n = this.zoom,
                    i = r.hasDataDrivenFill,
                    o = r.hasDataDrivenOutline;
                  e && e.setExtent(this.layerExtent);
                  var a = r.getPaintValue("fill-pattern", n),
                    s = r.getPaintValue("fill-antialias", n) && void 0 === a,
                    l = [1, 1, 1, 1],
                    u = [1, 1, 1, 1],
                    c = 1;
                  if (r.outlineUsesFillColor) {
                    if (s && !r.hasDataDrivenOpacity) {
                      var f = r.getPaintValue("fill-opacity", n),
                        d = r.getPaintValue("fill-opacity", n + 1);
                      f < 1 && d < 1 && (s = !1);
                    }
                    if (s && !r.hasDataDrivenColor) {
                      var h = r.getPaintValue("fill-color", n),
                        p = r.getPaintValue("fill-color", n + 1);
                      h[3] < 1 && p[3] < 1 && (s = !1);
                    }
                  }
                  for (var v = 0, y = this._features; v < y.length; v++) {
                    var m = y[v];
                    !a &&
                      r.hasDataDrivenColor &&
                      (l = r.getPaintValue("fill-color", n, m)),
                      r.hasDataDrivenOpacity &&
                        (c = r.getPaintValue("fill-opacity", n, m)),
                      !a &&
                        r.hasDataDrivenOutlineColor &&
                        (u = r.getPaintValue("fill-outline-color", n, m));
                    var x = void 0;
                    i && (x = { color: l, opacity: c });
                    var g = void 0;
                    o &&
                      (g = {
                        color: r.outlineUsesFillColor ? l : u,
                        opacity: c
                      });
                    var _ = m.getGeometry(e);
                    this._processFeature(_, s, r.outlineUsesFillColor, x, g);
                  }
                }),
                (t.prototype._processFeature = function(e, r, n, i, o) {
                  if (e) {
                    var a = e.length;
                    if (r && (!n || !o || o.color[3] * o.opacity == 1))
                      for (var s = 0; s < a; s++) this._processOutline(e[s], o);
                    var l;
                    for (s = 0; s < a; s++) {
                      var u = t._area(e[s]);
                      u > 128
                        ? (void 0 !== l && this._processFill(e, l, i),
                          (l = [s]))
                        : u < -128 && void 0 !== l && l.push(s);
                    }
                    void 0 !== l && this._processFill(e, l, i);
                  }
                }),
                (t.prototype._processOutline = function(e, t) {
                  var r,
                    n,
                    i,
                    o = this._outlineVertexBuffer,
                    s = this._outlineIndexBuffer,
                    l = s.index,
                    u = new a.Point(0, 0),
                    c = new a.Point(0, 0),
                    f = new a.Point(0, 0),
                    d = -1,
                    h = -1,
                    p = -1,
                    v = -1,
                    y = -1,
                    m = !1,
                    x = e.length;
                  if (!(x < 2)) {
                    for (var g = e[0], _ = e[x - 1]; x && _.isEqual(g); )
                      _ = e[--x - 1];
                    if (!(x - 0 < 2)) {
                      for (var b = 0; b < x; ++b) {
                        0 === b
                          ? ((r = e[x - 1]),
                            (n = e[0]),
                            (i = e[1]),
                            u.assignSub(n, r),
                            u.normalize(),
                            u.rightPerpendicular())
                          : ((r = n),
                            (n = i),
                            (i = b !== x - 1 ? e[b + 1] : e[0]),
                            u.assign(c));
                        var I = this._isClipEdge(r, n);
                        -1 === v && (m = I),
                          c.assignSub(i, n),
                          c.normalize(),
                          c.rightPerpendicular();
                        var w = u.x * c.y - u.y * c.x;
                        f.assignAdd(u, c), f.normalize();
                        var B = -f.x * -u.x + -f.y * -u.y,
                          T = Math.abs(0 !== B ? 1 / B : 1);
                        T > 8 && (T = 8),
                          w >= 0
                            ? ((p = o.add(n.x, n.y, u.x, u.y, 0, 1, t)),
                              -1 === v && (v = p),
                              d >= 0 &&
                                h >= 0 &&
                                p >= 0 &&
                                !I &&
                                s.add(d, h, p),
                              (h = o.add(
                                n.x,
                                n.y,
                                T * -f.x,
                                T * -f.y,
                                0,
                                -1,
                                t
                              )),
                              -1 === y && (y = h),
                              d >= 0 &&
                                h >= 0 &&
                                p >= 0 &&
                                !I &&
                                s.add(d, h, p),
                              (d = h),
                              (h = p),
                              (p = o.add(n.x, n.y, f.x, f.y, 0, 1, t)),
                              d >= 0 &&
                                h >= 0 &&
                                p >= 0 &&
                                !I &&
                                s.add(d, h, p),
                              (h = o.add(n.x, n.y, c.x, c.y, 0, 1, t)),
                              d >= 0 &&
                                h >= 0 &&
                                p >= 0 &&
                                !I &&
                                s.add(d, h, p))
                            : ((p = o.add(n.x, n.y, T * f.x, T * f.y, 0, 1, t)),
                              -1 === v && (v = p),
                              d >= 0 &&
                                h >= 0 &&
                                p >= 0 &&
                                !I &&
                                s.add(d, h, p),
                              (h = o.add(n.x, n.y, -u.x, -u.y, 0, -1, t)),
                              -1 === y && (y = h),
                              d >= 0 &&
                                h >= 0 &&
                                p >= 0 &&
                                !I &&
                                s.add(d, h, p),
                              (d = h),
                              (h = p),
                              (p = o.add(n.x, n.y, -f.x, -f.y, 0, -1, t)),
                              d >= 0 &&
                                h >= 0 &&
                                p >= 0 &&
                                !I &&
                                s.add(d, h, p),
                              (d = o.add(n.x, n.y, -c.x, -c.y, 0, -1, t)) >=
                                0 &&
                                h >= 0 &&
                                p >= 0 &&
                                !I &&
                                s.add(d, h, p));
                      }
                      d >= 0 && h >= 0 && v >= 0 && !m && s.add(d, h, v),
                        d >= 0 && v >= 0 && y >= 0 && !m && s.add(d, y, v),
                        (this._outlineIndexCount += 3 * (s.index - l));
                    }
                  }
                }),
                (t.prototype._processFill = function(e, t, r) {
                  var n;
                  t.length > 1 && (n = []);
                  for (var a = 0, s = 0, l = t; s < l.length; s++) {
                    var u = l[s];
                    0 !== a && n.push(a), (a += e[u].length);
                  }
                  for (
                    var c = 2 * a, f = i.acquire(), d = 0, h = t;
                    d < h.length;
                    d++
                  )
                    for (var p = e[(u = h[d])], v = p.length, y = 0; y < v; ++y)
                      f.push(p[y].x), f.push(p[y].y);
                  var m = o(f, n, 2),
                    x = m.length;
                  if (x > 0) {
                    for (var g = this._fillVertexBuffer.index, _ = 0; _ < c; )
                      this._fillVertexBuffer.add(f[_++], f[_++], r);
                    for (var b = 0; b < x; )
                      this._fillIndexBuffer.add(
                        g + m[b++],
                        g + m[b++],
                        g + m[b++]
                      );
                    this._fillIndexCount += x;
                  }
                  i.release(f);
                }),
                (t.prototype._isClipEdge = function(e, t) {
                  return e.x === t.x
                    ? e.x <= -64 || e.x >= 4160
                    : e.y === t.y && (e.y <= -64 || e.y >= 4160);
                }),
                (t._area = function(e) {
                  for (var t = 0, r = e.length - 1, n = 0; n < r; n++)
                    t += (e[n].x - e[n + 1].x) * (e[n].y + e[n + 1].y);
                  return 0.5 * (t + (e[r].x - e[0].x) * (e[r].y + e[0].y));
                }),
                t
              );
            })(s);
          }.apply(null, n)) || (e.exports = i);
    },
    2121: function(e, t, r) {
      var n, i;
      (n = [r.dj.c(e.i), t, r(15), r(793), r(159), r(9)]),
        void 0 ===
          (i = function(e, t, r, n, i, o) {
            function a() {
              var e = 0 === l.length;
              if (!e) {
                for (var t = i(); !e && i() - t < s; ) {
                  var r = l[c];
                  if (r) {
                    if (!0 === r()) {
                      var o = u.get(r);
                      (l[c] = null), u.delete(r), o();
                    }
                    c = (c + 1) % l.length;
                  } else
                    l.splice(c, 1),
                      (e = 0 === l.length) ? (c = 0) : (c %= l.length);
                }
                e || n(a);
              }
            }
            var s = r("host-browser") ? 6 : 200,
              l = [],
              u = new Map(),
              c = 0;
            return function(e) {
              return e
                ? o.create(
                    function(t) {
                      l.push(e), u.set(e, t), 1 === l.length && n(a);
                    },
                    function() {
                      (l[l.indexOf(e)] = null), u.delete(e);
                    }
                  )
                : o.reject(new TypeError("callback is not a function"));
            };
          }.apply(null, n)) || (e.exports = i);
    },
    2122: function(e, t, r) {
      var n, i;
      (n = [r.dj.c(e.i), t, r(5), r(0), r(2057)]),
        void 0 ===
          (i = function(e, t, r, n, i) {
            return (function(e) {
              function t(t, r) {
                return e.call(this, t, r) || this;
              }
              return r(t, e), t;
            })(i);
          }.apply(null, n)) || (e.exports = i);
    },
    2123: function(e, t, r) {
      var n, i;
      (n = [r.dj.c(e.i), t, r(5), r(0), r(2057)]),
        void 0 ===
          (i = function(e, t, r, n, i) {
            return (function(e) {
              function t(t, r, n, i) {
                var o = e.call(this, t, r) || this;
                return (
                  (o._circleVertexBuffer = n), (o._circleIndexBuffer = i), o
                );
              }
              return (
                r(t, e),
                Object.defineProperty(t.prototype, "circleIndexStart", {
                  get: function() {
                    return this._circleIndexStart;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(t.prototype, "circleIndexCount", {
                  get: function() {
                    return this._circleIndexCount;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (t.prototype.assignBufferInfo = function(e) {
                  var t = e;
                  (t._circleIndexStart = this._circleIndexStart),
                    (t._circleIndexCount = this._circleIndexCount);
                }),
                (t.prototype.processFeatures = function(e, t) {
                  var r = this._circleVertexBuffer,
                    n = this._circleIndexBuffer;
                  (this._circleIndexStart = n.index),
                    (this._circleIndexCount = 0);
                  var i = this.layer,
                    o = this.zoom;
                  e && e.setExtent(this.layerExtent);
                  for (
                    var a = 1,
                      s = [1, 1, 1, 1],
                      l = 1,
                      u = 0,
                      c = 1,
                      f = [1, 1, 1, 1],
                      d = 1,
                      h = 0,
                      p = this._features;
                    h < p.length;
                    h++
                  ) {
                    var v = p[h],
                      y = v.getGeometry(e);
                    if (y) {
                      i.hasDataDrivenRadius &&
                        (a = i.getPaintValue("circle-radius", o, v)),
                        i.hasDataDrivenColor &&
                          (s = i.getPaintValue("circle-color", o, v)),
                        i.hasDataDrivenOpacity &&
                          (l = i.getPaintValue("circle-opacity", o, v)),
                        i.hasDataDrivenStrokeWidth &&
                          (c = i.getPaintValue("circle-stroke-width", o, v)),
                        i.hasDataDrivenStrokeColor &&
                          (f = i.getPaintValue("circle-stroke-color", o, v)),
                        i.hasDataDrivenStrokeOpacity &&
                          (d = i.getPaintValue("circle-stroke-opacity", o, v)),
                        i.hasDataDrivenBlur &&
                          (u = i.getPaintValue("circle-blur", o, v));
                      for (var m = 0, x = y; m < x.length; m++) {
                        var g = x[m];
                        if (g)
                          for (var _ = 0, b = g; _ < b.length; _++) {
                            var I = b[_],
                              w = r.index;
                            r.add(I.x, I.y, 0, 0, a, s, l, u, c, f, d),
                              r.add(I.x, I.y, 0, 1, a, s, l, u, c, f, d),
                              r.add(I.x, I.y, 1, 0, a, s, l, u, c, f, d),
                              r.add(I.x, I.y, 1, 1, a, s, l, u, c, f, d),
                              n.add(w + 0, w + 1, w + 2),
                              n.add(w + 1, w + 2, w + 3),
                              (this._circleIndexCount += 6);
                          }
                      }
                    }
                  }
                }),
                t
              );
            })(i);
          }.apply(null, n)) || (e.exports = i);
    },
    2124: function(e, t, r) {
      var n, i;
      (n = [r.dj.c(e.i), t, r(5), r(0), r(2125), r(2057), r(797)]),
        void 0 ===
          (i = function(e, t, r, n, i, o, a) {
            var s = 20,
              l = new i.Tessellator({ distanceAlongCorrection: !0 });
            return (function(e) {
              function t(t, r, n, o) {
                var a = e.call(this, t, r) || this;
                if (
                  ((a.extrudeVectorsDoubleBuffer = [
                    i.allocExtrudeVectors(),
                    i.allocExtrudeVectors()
                  ]),
                  (a.firstExtrudeVectors = i.allocExtrudeVectors()),
                  (a.recycledTriangleBridge = i.allocTriangles(s)),
                  (a.recycledTrianglePie = i.allocTriangles(s)),
                  t.hasDataDrivenLine !== n.isDataDriven())
                )
                  throw new Error("incompatible line buffer");
                return (a._lineVertexBuffer = n), (a._lineIndexBuffer = o), a;
              }
              return (
                r(t, e),
                Object.defineProperty(t.prototype, "lineIndexStart", {
                  get: function() {
                    return this._lineIndexStart;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(t.prototype, "lineIndexCount", {
                  get: function() {
                    return this._lineIndexCount;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (t.prototype.assignBufferInfo = function(e) {
                  var t = e;
                  (t._lineIndexStart = this._lineIndexStart),
                    (t._lineIndexCount = this._lineIndexCount);
                }),
                (t.prototype.processFeatures = function(e, t) {
                  (this._lineIndexStart = this._lineIndexBuffer.index),
                    (this._lineIndexCount = 0);
                  var r = this.layer,
                    n = this.zoom,
                    i = r.hasDataDrivenLine;
                  e && e.setExtent(this.layerExtent);
                  for (
                    var o = r.getPaintValue("line-pattern", n),
                      s = [1, 1, 1, 1],
                      l = 1,
                      u = 1,
                      c = 0,
                      f = this._features;
                    c < f.length;
                    c++
                  ) {
                    var d = f[c],
                      h = new a.LineLayout(r, n, d);
                    !o &&
                      r.hasDataDrivenColor &&
                      (s = r.getPaintValue("line-color", n, d)),
                      r.hasDataDrivenOpacity &&
                        (l = r.getPaintValue("line-opacity", n, d)),
                      r.hasDataDrivenWidth &&
                        (u = r.getPaintValue("line-width", n, d));
                    var p = void 0;
                    if (
                      !(
                        i &&
                        ((p = {
                          color: s,
                          opacity: l,
                          size: Math.max(Math.min(u, 256), 0)
                        }),
                        p.size <= 0 || p.opacity <= 0 || p.color[3] <= 0)
                      )
                    ) {
                      var v = d.getGeometry(e);
                      this._processFeature(h, v, p);
                    }
                  }
                }),
                (t.prototype._processFeature = function(e, t, r) {
                  if (t)
                    for (var n = t.length, i = 0; i < n; i++)
                      this._processGeometry(t[i], e, r);
                }),
                (t.prototype._processGeometry = function(e, t, r) {
                  if (!(e.length < 2)) {
                    for (
                      var n = e[0],
                        o = e[e.length - 1],
                        a = o.x - n.x,
                        s = o.y - n.y,
                        l = a * a + s * s < 1e-6,
                        u = e[0],
                        c = 1;
                      c < e.length;

                    )
                      (a = e[c].x - u.x) * a + (s = e[c].y - u.y) * s < 1e-6
                        ? e.splice(c, 1)
                        : ((u = e[c]), ++c);
                    if (!(e.length < 2)) {
                      (this.vertices = e),
                        (this.verticesLen = e.length),
                        (this.isClosed = l),
                        (this.cap = t.cap),
                        (this.join = t.join),
                        (this.almostParallelRads = 0.05),
                        (this.veryShallowRads = 0.1),
                        (this.miterSafeRads = i.MITER_SAFE_RADS),
                        (this.miterLimitMag = Math.min(
                          t.miterLimit,
                          i.SYSTEM_MAG_LIMIT
                        )),
                        (this.roundLimitRads = Math.min(t.roundLimit, 0.5)),
                        (this.newRoundJoinsSafeRads = 2.3);
                      for (
                        var f = this._lineIndexBuffer.index,
                          d = 0,
                          h = void 0,
                          p = this.verticesLen,
                          v = 0;
                        v < p;
                        ++v
                      ) {
                        var y = e[v],
                          m = e[(v + p - 1) % p],
                          x = l && this._isClipEdge(m, y),
                          g =
                            h === this.extrudeVectorsDoubleBuffer[v % 2]
                              ? this.extrudeVectorsDoubleBuffer[(v + 1) % 2]
                              : this.extrudeVectorsDoubleBuffer[v % 2];
                        if (
                          (v < p - 1 || !l || this.hasPattern
                            ? (this._computeExtrudeVectors(g, v),
                              this._writeGPUVertices(y.x, y.y, d, g, r),
                              !g.capCenter ||
                                (l && v === p - 1) ||
                                this._writeGPUPieElements(g, x),
                              l &&
                                0 === v &&
                                !this.hasPattern &&
                                i.copyExtrudeVectors(
                                  this.firstExtrudeVectors,
                                  g
                                ))
                            : i.copyExtrudeVectors(g, this.firstExtrudeVectors),
                          h && this._writeGPUBridgeElements(h, g, x),
                          v < p - 1)
                        ) {
                          var _ = e[v + 1];
                          d += i.length([_.x - y.x, _.y - y.y]);
                        }
                        h = g;
                      }
                      this._lineIndexCount +=
                        3 * (this._lineIndexBuffer.index - f);
                    }
                  }
                }),
                (t.prototype._computeExtrudeVectors = function(e, t) {
                  var r = this.vertices,
                    n = this.verticesLen,
                    o = this.isClosed,
                    a = r[t],
                    s = [void 0, void 0],
                    l = [void 0, void 0];
                  if (t > 0 && t < n - 1) {
                    var u = r[(t + n - 1) % n],
                      c = r[(t + 1) % n];
                    i.normalize(s, [a.x - u.x, a.y - u.y]),
                      i.normalize(l, [c.x - a.x, c.y - a.y]);
                  } else if (0 === t) {
                    c = r[(t + 1) % n];
                    if ((i.normalize(l, [c.x - a.x, c.y - a.y]), o)) {
                      var f = r[n - 2];
                      i.normalize(s, [a.x - f.x, a.y - f.y]);
                    } else s = l;
                  } else {
                    if (t !== n - 1)
                      return void console.error(
                        "Vertex index 'i' out of range."
                      );
                    u = r[(t + n - 1) % n];
                    if ((i.normalize(s, [a.x - u.x, a.y - u.y]), o)) {
                      var d = r[1];
                      i.normalize(l, [d.x - a.x, d.y - a.y]);
                    } else l = s;
                  }
                  o || 0 !== t
                    ? o || t !== n - 1
                      ? this._computeJoinExtrudeVectors(e, s, l)
                      : this._computeCapExtrudeVectors(
                          e,
                          s,
                          l,
                          i.CapPosition.END
                        )
                    : this._computeCapExtrudeVectors(
                        e,
                        s,
                        l,
                        i.CapPosition.START
                      );
                }),
                (t.prototype._computeCapExtrudeVectors = function(e, t, r, n) {
                  0 === this.cap
                    ? l.buttCap(e, t, r)
                    : 1 === this.cap
                      ? l.roundCap(
                          e,
                          t,
                          r,
                          n,
                          i.getNumberOfSlices(Math.PI),
                          n === i.CapPosition.START ? -1 : 1
                        )
                      : 2 === this.cap
                        ? l.squareCap(e, t, r, n)
                        : l.buttCap(e, t, r);
                }),
                (t.prototype._computeJoinExtrudeVectors = function(e, t, r) {
                  var n = i.getRads(t, r);
                  if (n > Math.PI - this.almostParallelRads)
                    l.rectJoin(e, t, r);
                  else if (0 === this.join && n >= this.veryShallowRads)
                    l.bevelJoin(e, t, r, 1);
                  else if (1 === this.join && n >= this.veryShallowRads) {
                    var o = i.getNumberOfSlices(n);
                    n < this.newRoundJoinsSafeRads
                      ? o < 2 || n < this.roundLimitRads
                        ? l.bevelJoin(e, t, r, 1)
                        : l.roundJoin(e, t, r, o)
                      : l.unitRoundJoin(e, t, r, o);
                  } else
                    n < this.almostParallelRads
                      ? l.fastMiterJoin(e, t, r)
                      : n < this.miterSafeRads
                        ? l.miterJoin(e, t, r)
                        : l.bevelJoin(e, t, r, this.miterLimitMag);
                }),
                (t.prototype._writeGPUVertices = function(e, t, r, n, i) {
                  for (var o = 0; o < n.vectors.count; ++o) {
                    var a = n.vectors.items[o].vector[0],
                      s = n.vectors.items[o].vector[1],
                      l = n.vectors.items[o].texCoords[0],
                      u = n.vectors.items[o].texCoords[1];
                    (n.vectors.items[o].base = this._lineVertexBuffer.index),
                      this._lineVertexBuffer.add(e, t, a, s, l, u, r, i);
                  }
                }),
                (t.prototype._writeGPUBridgeElements = function(e, t, r) {
                  if ((l.bridge(this.recycledTriangleBridge, e, t), !r))
                    for (
                      var n = 0;
                      n < this.recycledTriangleBridge.count;
                      ++n
                    ) {
                      var i = this.recycledTriangleBridge.items[n];
                      this._lineIndexBuffer.add(
                        i.v1.base,
                        i.v2.base,
                        i.v3.base
                      );
                    }
                }),
                (t.prototype._writeGPUPieElements = function(e, t) {
                  if ((l.pie(this.recycledTrianglePie, e), !t))
                    for (var r = 0; r < this.recycledTrianglePie.count; ++r) {
                      var n = this.recycledTrianglePie.items[r];
                      this._lineIndexBuffer.add(
                        n.v1.base,
                        n.v2.base,
                        n.v3.base
                      );
                    }
                }),
                (t.prototype._isClipEdge = function(e, t) {
                  return e.x === t.x
                    ? e.x <= -64 || e.x >= 4160
                    : e.y === t.y && (e.y <= -64 || e.y >= 4160);
                }),
                t
              );
            })(o);
          }.apply(null, n)) || (e.exports = i);
    },
    2126: function(e, t, r) {
      var n, i;
      (n = [r.dj.c(e.i), t, r(2037), r(2160), r(415)]),
        void 0 ===
          (i = function(e, t, r, n, i) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var o = (function() {
              return function(e, t, r, n, i) {
                void 0 === r && (r = 0),
                  void 0 === n && (n = -1),
                  void 0 === i && (i = u),
                  (this.x = e),
                  (this.y = t),
                  (this.angle = r),
                  (this.segment = n),
                  (this.minzoom = i);
              };
            })();
            t.Anchor = o;
            var a = (function() {
                return function(e, t, r, n, o, a, s) {
                  void 0 === o && (o = !1),
                    void 0 === a && (a = u),
                    void 0 === s && (s = i.C_INFINITY),
                    (this.anchor = e),
                    (this.labelAngle = t),
                    (this.glyphAngle = r),
                    (this.page = n),
                    (this.upsideDown = o),
                    (this.minzoom = a),
                    (this.maxzoom = s);
                };
              })(),
              s = (function() {
                return function(e, t, r, n, i, o, a, s, l, u) {
                  (this.tl = e),
                    (this.tr = t),
                    (this.bl = r),
                    (this.br = n),
                    (this.mosaicRect = i),
                    (this.labelAngle = o),
                    (this.anchor = a),
                    (this.minzoom = s),
                    (this.maxzoom = l),
                    (this.page = u);
                };
              })();
            t.PlacedSymbol = s;
            var l = (function() {
              return function(e, t) {
                (this.footprint = e), (this.shapes = t);
              };
            })();
            t.Placement = l;
            var u = 0.5,
              c = (function() {
                function e() {
                  (this.mapAngle = 0),
                    (this._conflictEngine = new n.ConflictEngine());
                }
                return (
                  (e.prototype.reset = function() {
                    this._conflictEngine.reset();
                  }),
                  (e.prototype.setAngle = function(e) {
                    (this.mapAngle = e), this._conflictEngine.setAngle(e);
                  }),
                  (e.prototype.getIconPlacement = function(
                    e,
                    t,
                    o,
                    a,
                    c,
                    f,
                    d
                  ) {
                    var h = o.width / o.pixelRatio,
                      p = o.height / o.pixelRatio,
                      v = f.offset[0] - h / 2,
                      y = f.offset[1] - p / 2,
                      m = v + h,
                      x = y + p,
                      g = o.rect,
                      _ = o.sdf ? 17 : 2,
                      b = v - _,
                      I = y - _,
                      w = b + g.width / o.pixelRatio,
                      B = I + g.height / o.pixelRatio,
                      T = new r.Point(b, I),
                      D = new r.Point(w, B),
                      P = new r.Point(b, B),
                      V = new r.Point(w, I),
                      S = f.rotate * i.C_DEG_TO_RAD,
                      M = 1 === f.rotationAlignment;
                    if ((e.segment >= 0 && !M && (S += e.angle), 0 !== S)) {
                      var C = Math.cos(S),
                        E = Math.sin(S);
                      T.rotate(C, E),
                        D.rotate(C, E),
                        P.rotate(C, E),
                        V.rotate(C, E);
                    }
                    var A = 8 * f.padding,
                      z = new r.Point(e.x, e.y),
                      N = new n.Footprint(this.mapAngle, A, M);
                    N.addBox(
                      z,
                      new n.Box(v, y, m, x),
                      a,
                      S,
                      t,
                      u,
                      i.C_INFINITY
                    );
                    var F = new s(T, V, P, D, g, 0, z, u, i.C_INFINITY, 0),
                      O = new l(N, [F]),
                      L = u;
                    return (
                      f.allowOverlap ||
                        (L = this._conflictEngine.getMinZoom(
                          O.footprint,
                          L,
                          d,
                          M
                        )),
                      (N.minzoom = L),
                      O
                    );
                  }),
                  (e.prototype.getTextPlacement = function(
                    e,
                    t,
                    o,
                    c,
                    f,
                    d,
                    h,
                    p
                  ) {
                    for (
                      var v,
                        y = new r.Point(e.x, e.y),
                        m = h.rotate * i.C_DEG_TO_RAD,
                        x = 0 === h.rotationAlignment,
                        g = h.keepUpright,
                        _ = u,
                        b = !x,
                        I = b ? 0 : e.angle,
                        w = e.segment >= 0 && x,
                        B = 8 * h.padding,
                        T = new n.Footprint(this.mapAngle, B, b),
                        D = [],
                        P = !w,
                        V = Number.POSITIVE_INFINITY,
                        S = Number.NEGATIVE_INFINITY,
                        M = V,
                        C = S,
                        E = w ? g : x && g,
                        A = 0,
                        z = c;
                      A < z.length;
                      A++
                    ) {
                      var N = z[A],
                        F = N.glyphMosaicItem;
                      if (F && !F.rect.isEmpty) {
                        var O = F.rect,
                          L = F.metrics,
                          k = F.page;
                        P &&
                          (v &&
                            v !== N.y &&
                            (T.addBox(
                              y,
                              new n.Box(V, M, S, C),
                              f,
                              m,
                              t,
                              u,
                              i.C_INFINITY
                            ),
                            (M = V = Number.POSITIVE_INFINITY),
                            (C = S = Number.NEGATIVE_INFINITY)),
                          (v = N.y));
                        var j = [];
                        if (w) {
                          var U = 0.5 * F.metrics.width,
                            R = (o.x + N.x + L.left - 4 + U) * f;
                          if (
                            ((_ = this._placeGlyph(
                              e,
                              _,
                              R,
                              d,
                              e.segment,
                              1,
                              k,
                              j
                            )),
                            g &&
                              (_ = this._placeGlyph(
                                e,
                                _,
                                R,
                                d,
                                e.segment,
                                -1,
                                k,
                                j
                              )),
                            _ >= 2)
                          )
                            break;
                        } else
                          j.push(new a(y, I, I, k)),
                            x &&
                              g &&
                              j.push(new a(y, I + i.C_PI, I + i.C_PI, k, !0));
                        for (
                          var Y = N.x + o.x + L.left,
                            G = N.y + o.y - L.top,
                            q = Y + L.width,
                            J = G + L.height,
                            Z = new r.Point(Y - 4, G - 4),
                            X = new r.Point(Z.x + O.width, Z.y + O.height),
                            H = new r.Point(Z.x, X.y),
                            W = new r.Point(X.x, Z.y),
                            K = 0,
                            Q = j;
                          K < Q.length;
                          K++
                        ) {
                          var $ = Q[K],
                            ee = Z.clone(),
                            te = H.clone(),
                            re = W.clone(),
                            ne = X.clone(),
                            ie = G,
                            oe = J,
                            ae = $.glyphAngle + m;
                          if (0 !== ae) {
                            var se = Math.cos(ae),
                              le = Math.sin(ae);
                            ee.rotate(se, le),
                              ne.rotate(se, le),
                              te.rotate(se, le),
                              re.rotate(se, le);
                          }
                          D.push(
                            new s(
                              ee,
                              re,
                              te,
                              ne,
                              O,
                              $.labelAngle,
                              $.anchor,
                              $.minzoom,
                              $.maxzoom,
                              $.page
                            )
                          ),
                            (E && !this._legible($.labelAngle)) ||
                              (P
                                ? (Y < V && (V = Y),
                                  ie < M && (M = ie),
                                  q > S && (S = q),
                                  oe > C && (C = oe))
                                : $.minzoom < 2 &&
                                  T.addBox(
                                    $.anchor,
                                    new n.Box(Y, ie, q, oe),
                                    f,
                                    ae,
                                    t,
                                    $.minzoom,
                                    $.maxzoom
                                  ));
                        }
                      }
                    }
                    if (_ >= 2) return null;
                    P &&
                      T.addBox(
                        y,
                        new n.Box(V, M, S, C),
                        f,
                        m,
                        t,
                        u,
                        i.C_INFINITY
                      );
                    var ue = new l(T, D);
                    return (
                      h.allowOverlap ||
                        (_ = this._conflictEngine.getMinZoom(
                          ue.footprint,
                          _,
                          p,
                          b
                        )),
                      (T.minzoom = _),
                      ue
                    );
                  }),
                  (e.prototype.add = function(e) {
                    this._conflictEngine.add(e.footprint);
                  }),
                  (e.prototype._legible = function(e) {
                    var t = i.radToByte(e);
                    return t < 65 || t >= 193;
                  }),
                  (e.prototype._placeGlyph = function(e, t, n, o, s, l, u, c) {
                    var f = l,
                      d =
                        f < 0
                          ? i.positiveMod(e.angle + i.C_PI, i.C_2PI)
                          : e.angle,
                      h = this._legible(d),
                      p = 0;
                    n < 0 && ((f *= -1), (n *= -1), (p = i.C_PI)), f > 0 && ++s;
                    var v = new r.Point(e.x, e.y),
                      y = o[s],
                      m = i.C_INFINITY;
                    if (o.length <= s) return m;
                    for (;;) {
                      var x = y.x - v.x,
                        g = y.y - v.y,
                        _ = Math.sqrt(x * x + g * g),
                        b = Math.max(n / _, t),
                        I = x / _,
                        w = g / _,
                        B = i.positiveMod(Math.atan2(w, I) + p, i.C_2PI);
                      if ((c.push(new a(v, d, B, u, h, b, m)), b <= t))
                        return b;
                      v = y.clone();
                      do {
                        if (((s += f), o.length <= s || s < 0)) return b;
                        y = o[s];
                      } while (v.isEqual(y));
                      var T = y.x - v.x,
                        D = y.y - v.y,
                        P = Math.sqrt(T * T + D * D);
                      (T *= _ / P),
                        (D *= _ / P),
                        (v.x -= T),
                        (v.y -= D),
                        (m = b);
                    }
                  }),
                  e
                );
              })();
            t.PlacementEngine = c;
          }.apply(null, n)) || (e.exports = i);
    },
    2127: function(e, t, r) {
      var n, i;
      (n = [
        r.dj.c(e.i),
        t,
        r(5),
        r(0),
        r(2076),
        r(2037),
        r(2083),
        r(2057),
        r(415),
        r(2126),
        r(797)
      ]),
        void 0 ===
          (i = function(e, t, r, n, i, o, a, s, l, u, c) {
            function f(e, t) {
              return e.iconMosaicItem && t.iconMosaicItem
                ? e.iconMosaicItem.page === t.iconMosaicItem.page
                  ? 0
                  : e.iconMosaicItem.page < t.iconMosaicItem.page
                    ? -1
                    : 1
                : e.iconMosaicItem && !t.iconMosaicItem
                  ? 1
                  : !e.iconMosaicItem && t.iconMosaicItem
                    ? -1
                    : 0;
            }
            return (function(e) {
              function t(t, r, n, i, o, a, s, l) {
                var u = e.call(this, t, r) || this;
                if (
                  ((u._markerMap = new Map()),
                  (u._glyphMap = new Map()),
                  (u._glyphBufferDataStorage = new Map()),
                  (u._sdfMarkers = !1),
                  t.hasDataDrivenIcon !== n.isDataDriven())
                )
                  throw new Error("incompatible icon buffer");
                if (t.hasDataDrivenText !== o.isDataDriven())
                  throw new Error("incompatible text buffer");
                return (
                  (u._iconVertexBuffer = n),
                  (u._iconIndexBuffer = i),
                  (u._textVertexBuffer = o),
                  (u._textIndexBuffer = a),
                  (u._placementEngine = s),
                  (u._workerTileHandler = l),
                  u
                );
              }
              return (
                r(t, e),
                Object.defineProperty(t.prototype, "markerPageMap", {
                  get: function() {
                    return this._markerMap;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(t.prototype, "glyphsPageMap", {
                  get: function() {
                    return this._glyphMap;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                Object.defineProperty(t.prototype, "sdfMarker", {
                  get: function() {
                    return this._sdfMarkers;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (t.prototype.copy = function(e, r, n, i, o) {
                  var a = new t(
                    this.layer,
                    this.zoom,
                    e,
                    r,
                    n,
                    i,
                    o,
                    this._workerTileHandler
                  );
                  return (
                    (a.layerIndex = this.layerIndex),
                    (a.layerExtent = this.layerExtent),
                    (a._iconIndexStart = r.index),
                    (a._textIndexStart = i.index),
                    (a._iconIndexCount = 0),
                    (a._textIndexCount = 0),
                    (a._symbolInstances = this._symbolInstances),
                    (a._workerTileHandler = this._workerTileHandler),
                    (a._fontArray = this._fontArray),
                    (a._textLayout = this._textLayout),
                    (a._iconLayout = this._iconLayout),
                    (a._isLinePlacement = this._isLinePlacement),
                    (a._avoidEdges = this._avoidEdges),
                    a
                  );
                }),
                (t.prototype.getResources = function(e, r, n) {
                  var i = this.layer,
                    o = this.zoom,
                    a = i.hasDataDrivenIcon,
                    s = i.hasDataDrivenText;
                  e && e.setExtent(this.layerExtent);
                  for (
                    var l = i.getLayoutProperty("icon-image"),
                      u = i.getLayoutProperty("text-field"),
                      c = i.getLayoutValue("text-font", o),
                      f = i.getLayoutValue("text-transform", o),
                      d = [],
                      h = [1, 1, 1, 1],
                      p = 1,
                      v = 1,
                      y = [1, 1, 1, 1],
                      m = 1,
                      x = 1,
                      g = 0,
                      _ = this._features;
                    g < _.length;
                    g++
                  ) {
                    var b = _[g],
                      I = b.getGeometry(e);
                    if (I && 0 !== I.length) {
                      var w = void 0;
                      l &&
                        ((w = i.getLayoutValue("icon-image", o, b)),
                        l.isDataDriven || (w = this._replaceKeys(w, b.values)),
                        w && r.add(w));
                      var B = void 0,
                        T = !1;
                      if (
                        u &&
                        ((B = i.getLayoutValue("text-field", o, b)),
                        u.isDataDriven || (B = this._replaceKeys(B, b.values)),
                        (B = B.replace(/\\n/g, "\n")))
                      ) {
                        switch (f) {
                          case 2:
                            B = B.toLowerCase();
                            break;
                          case 1:
                            B = B.toUpperCase();
                        }
                        if (t._bidiEngine.hasBidiChar(B)) {
                          var D;
                          (D =
                            "rtl" === t._bidiEngine.checkContextual(B)
                              ? "IDNNN"
                              : "ICNNN"),
                            (B = t._bidiEngine.bidiTransform(B, D, "VLYSN")),
                            (T = !0);
                        }
                        var P = B.length;
                        if (P > 0)
                          for (var V = 0, S = c; V < S.length; V++) {
                            var M = S[V],
                              C = n[M];
                            C || (C = n[M] = new Set());
                            for (var E = 0; E < P; E++) {
                              var A = B.charCodeAt(E);
                              C.add(A);
                            }
                          }
                      }
                      if (w || B) {
                        var z = i.getLayoutValue("icon-size", o, b),
                          N = i.getLayoutValue("text-size", o, b);
                        i.hasDataDrivenIconColor &&
                          (h = i.getPaintValue("icon-color", o, b)),
                          i.hasDataDrivenIconOpacity &&
                            (p = i.getPaintValue("icon-opacity", o, b)),
                          i.hasDataDrivenIconSize && (v = z),
                          i.hasDataDrivenTextColor &&
                            (y = i.getPaintValue("text-color", o, b)),
                          i.hasDataDrivenTextOpacity &&
                            (m = i.getPaintValue("text-opacity", o, b)),
                          i.hasDataDrivenTextSize && (x = N);
                        var F = {
                          sprite: w,
                          label: B,
                          rtl: T,
                          type: b.type,
                          geometry: I,
                          iconSize: z,
                          iconRotate: i.getLayoutValue("icon-rotate", o, b),
                          ddIconValues: a
                            ? { color: h, opacity: p, size: v }
                            : null,
                          textSize: N,
                          textRotate: i.getLayoutValue("text-rotate", o, b),
                          ddTextValues: s
                            ? { color: y, opacity: m, size: x }
                            : null
                        };
                        d.push(F);
                      }
                    }
                  }
                  this._symbolFeatures = d;
                }),
                (t.prototype.processFeatures = function(e, r) {
                  e && e.setExtent(this.layerExtent);
                  var n,
                    i,
                    o,
                    s,
                    d,
                    h = this.layer,
                    p = this.zoom,
                    v = (this._isLinePlacement =
                      1 === h.getLayoutValue("symbol-placement", p)),
                    y = (this._avoidEdges =
                      h.getLayoutValue("symbol-avoid-edges", p) && !v),
                    m = 8 * h.getLayoutValue("symbol-spacing", p),
                    x = h.getLayoutProperty("icon-image"),
                    g = h.getLayoutProperty("text-field"),
                    _ = this._workerTileHandler;
                  if (
                    (x &&
                      ((this._iconLayout = new c.IconLayout(h, p, v)),
                      (n = _.getSpriteItems()),
                      (i = this._getTranslate(!0))),
                    g)
                  ) {
                    var b = (this._textLayout = new c.TextLayout(h, p, v));
                    this._fontArray = b.fontArray;
                    var I = 0.5;
                    switch (b.anchor) {
                      case 5:
                      case 1:
                      case 7:
                        I = 0;
                        break;
                      case 6:
                      case 2:
                      case 8:
                        I = 1;
                    }
                    var w = 0.5;
                    switch (b.anchor) {
                      case 5:
                      case 3:
                      case 6:
                        w = 0;
                        break;
                      case 7:
                      case 4:
                      case 8:
                        w = 1;
                    }
                    var B = 0.5;
                    switch (b.justify) {
                      case 0:
                        B = 0;
                        break;
                      case 2:
                        B = 1;
                    }
                    var T = 24 * b.letterSpacing,
                      D = v ? 0 : 24 * b.maxWidth,
                      P = 24 * b.lineHeight,
                      V = [24 * b.offset[0], 24 * b.offset[1]];
                    (o = this._fontArray.map(function(e) {
                      return _.getGlyphItems(e);
                    })),
                      (s = new a(o, D, P, T, V, I, w, B)),
                      (d = this._getTranslate(!1));
                  }
                  (this._iconIndexStart = this._iconIndexBuffer.index),
                    (this._textIndexStart = this._textIndexBuffer.index),
                    (this._iconIndexCount = 0),
                    (this._textIndexCount = 0),
                    this._markerMap.clear(),
                    this._glyphMap.clear();
                  var S = [];
                  this._symbolInstances = S;
                  var M = this._textLayout,
                    C = 1;
                  M && M.size && (C = M.size / 24);
                  for (
                    var E = M ? M.maxAngle * l.C_DEG_TO_RAD : 0,
                      A = M ? 8 * M.size : 0,
                      z = 0,
                      N = this._symbolFeatures;
                    z < N.length;
                    z++
                  ) {
                    var F = N[z],
                      O = void 0;
                    F.sprite &&
                      (O = n[F.sprite]) &&
                      O.sdf &&
                      (this._sdfMarkers = !0);
                    var L = void 0,
                      k = F.label,
                      j = 0;
                    if (k && (L = s.getShaping(k, F.rtl)) && L.length > 0) {
                      for (
                        var U = 1e30, R = -1e30, Y = 0, G = L;
                        Y < G.length;
                        Y++
                      ) {
                        var q = G[Y];
                        (U = Math.min(U, q.x)), (R = Math.max(R, q.x));
                      }
                      j = (R - U + 48) * C * 8;
                    }
                    for (var J = 0, Z = F.geometry; J < Z.length; J++) {
                      var X = Z[J],
                        H = void 0;
                      if (v) {
                        if (L && L.length > 0 && M && M.size) {
                          var W =
                            8 *
                            M.size *
                            (2 + Math.min(2, 4 * Math.abs(M.offset[1])));
                          t._smoothVertices(X, W);
                        }
                        H = t._findAnchors(X, m, j);
                      } else
                        H =
                          3 === F.type
                            ? t._findCentroid(X)
                            : [new u.Anchor(X[0].x, X[0].y)];
                      for (var K = 0, Q = H; K < Q.length; K++) {
                        var $ = Q[K];
                        $.x < 0 ||
                          $.x > 4096 ||
                          $.y < 0 ||
                          $.y > 4096 ||
                          (v &&
                            j > 0 &&
                            0 === M.rotationAlignment &&
                            !t._honorsTextMaxAngle(X, $, j, E, A)) ||
                          S.push({
                            shaping: L,
                            line: X,
                            iconMosaicItem: O,
                            anchor: $,
                            iconSize: F.iconSize,
                            iconRotate: F.iconRotate,
                            ddIconValues: F.ddIconValues,
                            textSize: F.textSize,
                            textRotate: F.textRotate,
                            ddTextValues: F.ddTextValues
                          });
                      }
                    }
                  }
                  S.sort(f);
                  for (var ee = 0, te = S; ee < te.length; ee++) {
                    var re = te[ee];
                    this._processFeature(re, i, d, y);
                  }
                  this._addPlacedGlyphs();
                }),
                (t.prototype.updateSymbols = function() {
                  (this._iconIndexStart = this._iconIndexBuffer.index),
                    (this._textIndexStart = this._textIndexBuffer.index),
                    (this._iconIndexCount = 0),
                    (this._textIndexCount = 0),
                    this._markerMap.clear(),
                    this._glyphMap.clear();
                  var e,
                    t,
                    r = this._avoidEdges,
                    n = this.layer;
                  n.getLayoutProperty("icon-image") &&
                    (e = this._getTranslate(!0)),
                    n.getLayoutProperty("text-field") &&
                      (t = this._getTranslate(!1));
                  for (
                    var i = 0, o = this._symbolInstances;
                    i < o.length;
                    i++
                  ) {
                    var a = o[i];
                    this._processFeature(a, e, t, r);
                  }
                  this._addPlacedGlyphs();
                }),
                (t.prototype._getTranslate = function(e) {
                  var t = this.layer.getPaintValue(
                    e ? "icon-translate" : "text-translate",
                    this.zoom
                  );
                  if (0 !== t[0] || 0 !== t[1]) {
                    var r = this._placementEngine.mapAngle;
                    if (
                      0 !== r &&
                      0 ===
                        this.layer.getPaintValue(
                          e ? "icon-translate-anchor" : "text-translate-anchor",
                          this.zoom
                        )
                    ) {
                      var n = Math.sin(r),
                        i = Math.cos(r);
                      return [
                        8 * (t[0] * i - t[1] * n),
                        8 * (t[0] * n + t[1] * i)
                      ];
                    }
                    return [8 * t[0], 8 * t[1]];
                  }
                }),
                (t.prototype._replaceKeys = function(e, t) {
                  return e.replace(/{([^{}]+)}/g, function(e, r) {
                    return r in t ? t[r] : "";
                  });
                }),
                (t.prototype._processFeature = function(e, t, r, n) {
                  var i = e.line,
                    a = e.iconMosaicItem,
                    s = e.shaping,
                    u = e.anchor,
                    c = this._iconLayout,
                    f = c && !!a,
                    d = !0,
                    h = 1;
                  f &&
                    ((c.size = e.iconSize),
                    (c.rotate = e.iconRotate),
                    (h = 8 * c.size),
                    (d = c.optional || !a));
                  var p = this._textLayout,
                    v = p && s && s.length > 0,
                    y = 1,
                    m = y,
                    x = !0;
                  v &&
                    ((p.size = e.textSize),
                    (p.rotate = e.textRotate),
                    (m = 8 * (y = p.size / 24)),
                    (x = p.optional || !s || 0 === s.length));
                  var g,
                    _,
                    b = new o.Point(0, -17);
                  if (
                    (f &&
                      ((g = this._placementEngine.getIconPlacement(
                        u,
                        t,
                        a,
                        h,
                        i,
                        c,
                        n
                      )),
                      u.minzoom > g.footprint.minzoom &&
                        (g.footprint.minzoom = u.minzoom),
                      g.footprint.minzoom === l.C_INFINITY && (g = null)),
                    g || d) &&
                    (v &&
                      (_ = this._placementEngine.getTextPlacement(
                        u,
                        r,
                        b,
                        s,
                        m,
                        i,
                        p,
                        n
                      )) &&
                      (u.minzoom > _.footprint.minzoom &&
                        (_.footprint.minzoom = u.minzoom),
                      _.footprint.minzoom === l.C_INFINITY && (_ = null)),
                    _ || x)
                  ) {
                    if (
                      ((g && _) ||
                        (x || d
                          ? x || _
                            ? d || g || (_ = null)
                            : (g = null)
                          : ((g = null), (_ = null))),
                      g && _ && !x && !d)
                    ) {
                      var I = Math.max(
                        g.footprint.minzoom,
                        _.footprint.minzoom
                      );
                      (g.footprint.minzoom = I), (_.footprint.minzoom = I);
                    }
                    _ &&
                      (p.ignorePlacement || this._placementEngine.add(_),
                      this._storePlacedGlyphs(
                        _.shapes,
                        _.footprint.minzoom,
                        this.zoom,
                        e.ddTextValues
                      )),
                      g &&
                        (c.ignorePlacement || this._placementEngine.add(g),
                        this._addPlacedIcons(
                          g.shapes,
                          g.footprint.minzoom,
                          this.zoom,
                          a.page,
                          e.ddIconValues
                        ));
                  }
                }),
                (t.prototype._addPlacedIcons = function(e, t, r, n, i) {
                  for (
                    var o = Math.max(r + l.log2(t), 0),
                      a = this._iconVertexBuffer,
                      s = this._iconIndexBuffer,
                      u = 0,
                      c = e;
                    u < c.length;
                    u++
                  ) {
                    var f = c[u],
                      d = Math.max(r + l.log2(f.minzoom), o),
                      h = Math.min(r + l.log2(f.maxzoom), 25);
                    if (!(h <= d)) {
                      var p = f.tl,
                        v = f.tr,
                        y = f.bl,
                        m = f.br,
                        x = f.mosaicRect,
                        g = f.labelAngle,
                        _ = f.anchor,
                        b = a.index,
                        I = x.x,
                        w = x.y,
                        B = I + x.width,
                        T = w + x.height;
                      a.add(_.x, _.y, p.x, p.y, I, w, g, d, h, o, i),
                        a.add(_.x, _.y, v.x, v.y, B, w, g, d, h, o, i),
                        a.add(_.x, _.y, y.x, y.y, I, T, g, d, h, o, i),
                        a.add(_.x, _.y, m.x, m.y, B, T, g, d, h, o, i),
                        s.add(b + 0, b + 1, b + 2),
                        s.add(b + 1, b + 2, b + 3),
                        this._markerMap.has(n)
                          ? (this._markerMap.get(n)[1] += 6)
                          : this._markerMap.set(n, [
                              this._iconIndexStart + this._iconIndexCount,
                              6
                            ]),
                        (this._iconIndexCount += 2);
                    }
                  }
                }),
                (t.prototype._addPlacedGlyphs = function() {
                  var e = this,
                    t = this._textVertexBuffer,
                    r = this._textIndexBuffer;
                  this._glyphBufferDataStorage.forEach(function(n, i) {
                    for (var o = 0, a = n; o < a.length; o++) {
                      var s = a[o],
                        l = t.index;
                      t.add(
                        s.glyphAnchor[0],
                        s.glyphAnchor[1],
                        s.tl[0],
                        s.tl[1],
                        s.xmin,
                        s.ymin,
                        s.labelAngle,
                        s.minLod,
                        s.maxLod,
                        s.placementLod,
                        s.ddValues
                      ),
                        t.add(
                          s.glyphAnchor[0],
                          s.glyphAnchor[1],
                          s.tr[0],
                          s.tr[1],
                          s.xmax,
                          s.ymin,
                          s.labelAngle,
                          s.minLod,
                          s.maxLod,
                          s.placementLod,
                          s.ddValues
                        ),
                        t.add(
                          s.glyphAnchor[0],
                          s.glyphAnchor[1],
                          s.bl[0],
                          s.bl[1],
                          s.xmin,
                          s.ymax,
                          s.labelAngle,
                          s.minLod,
                          s.maxLod,
                          s.placementLod,
                          s.ddValues
                        ),
                        t.add(
                          s.glyphAnchor[0],
                          s.glyphAnchor[1],
                          s.br[0],
                          s.br[1],
                          s.xmax,
                          s.ymax,
                          s.labelAngle,
                          s.minLod,
                          s.maxLod,
                          s.placementLod,
                          s.ddValues
                        ),
                        r.add(l + 0, l + 1, l + 2),
                        r.add(l + 1, l + 2, l + 3),
                        e._glyphMap.has(i)
                          ? (e._glyphMap.get(i)[1] += 6)
                          : e._glyphMap.set(i, [
                              e._textIndexStart + e._textIndexCount,
                              6
                            ]),
                        (e._textIndexCount += 2);
                    }
                  }),
                    this._glyphBufferDataStorage.clear();
                }),
                (t.prototype._storePlacedGlyphs = function(e, t, r, n) {
                  for (
                    var i = Math.max(r + l.log2(t), 0), o = 0, a = e;
                    o < a.length;
                    o++
                  ) {
                    var s = a[o],
                      u = Math.max(r + l.log2(s.minzoom), i),
                      c = Math.min(r + l.log2(s.maxzoom), 25);
                    if (!(c <= u)) {
                      var f = s.tl,
                        d = s.tr,
                        h = s.bl,
                        p = s.br,
                        v = s.labelAngle,
                        y = s.anchor,
                        m = s.mosaicRect;
                      this._glyphBufferDataStorage.has(s.page) ||
                        this._glyphBufferDataStorage.set(s.page, []),
                        this._glyphBufferDataStorage
                          .get(s.page)
                          .push({
                            glyphAnchor: [y.x, y.y],
                            tl: [f.x, f.y],
                            tr: [d.x, d.y],
                            bl: [h.x, h.y],
                            br: [p.x, p.y],
                            xmin: m.x,
                            ymin: m.y,
                            xmax: m.x + m.width,
                            ymax: m.y + m.height,
                            labelAngle: v,
                            minLod: u,
                            maxLod: c,
                            placementLod: i,
                            ddValues: n
                          });
                    }
                  }
                }),
                (t._findAnchors = function(e, t, r) {
                  t += r;
                  for (var n = 0, i = e.length - 1, a = 0; a < i; a++)
                    n += o.Point.distance(e[a], e[a + 1]);
                  var s = r || t;
                  if (n <= (s *= 0.5)) return [];
                  var c = s / n,
                    f = 0,
                    d = -(t = n / Math.max(Math.round(n / t), 1)) / 2,
                    h = [],
                    p = e.length - 1;
                  for (a = 0; a < p; a++) {
                    for (
                      var v = e[a],
                        y = e[a + 1],
                        m = y.x - v.x,
                        x = y.y - v.y,
                        g = Math.sqrt(m * m + x * x),
                        _ = void 0;
                      d + t < f + g;

                    ) {
                      var b = ((d += t) - f) / g,
                        I = l.interpolate(v.x, y.x, b),
                        w = l.interpolate(v.y, y.y, b);
                      void 0 === _ && (_ = Math.atan2(x, m)),
                        h.push(new u.Anchor(I, w, _, a, c));
                    }
                    f += g;
                  }
                  return h;
                }),
                (t._deviation = function(e, t, r) {
                  var n = (t.x - e.x) * (r.x - t.x) + (t.y - e.y) * (r.y - t.y),
                    i = (t.x - e.x) * (r.y - t.y) - (t.y - e.y) * (r.x - t.x);
                  return Math.atan2(i, n);
                }),
                (t._honorsTextMaxAngle = function(e, t, r, n, i) {
                  for (
                    var a = 0,
                      s = r / 2,
                      l = new o.Point(t.x, t.y),
                      u = t.segment + 1;
                    a > -s;

                  ) {
                    if (--u < 0) return !1;
                    (a -= o.Point.distance(e[u], l)), (l = e[u]);
                  }
                  a += o.Point.distance(e[u], e[u + 1]);
                  for (var c = [], f = 0, d = e.length; a < s; ) {
                    var h = e[u],
                      p = u,
                      v = void 0;
                    do {
                      if (++p === d) return !1;
                      v = e[p];
                    } while (v.isEqual(h));
                    var y = p,
                      m = void 0;
                    do {
                      if (++y === d) return !1;
                      m = e[y];
                    } while (m.isEqual(v));
                    var x = this._deviation(h, v, m);
                    for (
                      c.push({ deviation: x, distToAnchor: a }), f += x;
                      a - c[0].distToAnchor > i;

                    )
                      f -= c.shift().deviation;
                    if (Math.abs(f) > n) return !1;
                    (a += o.Point.distance(v, m)), (u = p);
                  }
                  return !0;
                }),
                (t._smoothVertices = function(e, t) {
                  if (!(t <= 0)) {
                    var r = e.length;
                    if (!(r < 3)) {
                      var n = [],
                        i = 0;
                      n.push(0);
                      for (var a = 1; a < r; a++)
                        (i += o.Point.distance(e[a], e[a - 1])), n.push(i);
                      t = Math.min(t, 0.2 * i);
                      var s = [];
                      s.push(e[0].x), s.push(e[0].y);
                      var l = e[r - 1].x,
                        u = e[r - 1].y,
                        c = o.Point.sub(e[0], e[1]);
                      c.normalize(),
                        (e[0].x += t * c.x),
                        (e[0].y += t * c.y),
                        c.assignSub(e[r - 1], e[r - 2]),
                        c.normalize(),
                        (e[r - 1].x += t * c.x),
                        (e[r - 1].y += t * c.y);
                      for (a = 1; a < r; a++) n[a] += t;
                      n[r - 1] += t;
                      var f = 0.5 * t;
                      for (a = 1; a < r - 1; a++) {
                        for (
                          var d = 0, h = 0, p = 0, v = a - 1;
                          v >= 0 && !(n[v + 1] < n[a] - f);
                          v--
                        ) {
                          var y = f + n[v + 1] - n[a],
                            m = n[v + 1] - n[v],
                            x = n[a] - n[v] < f ? 1 : y / m;
                          if (Math.abs(x) < 1e-6) break;
                          var g = x * y - 0.5 * (B = x * x) * m,
                            _ = (x * m) / t,
                            b = e[v + 1],
                            I = e[v].x - b.x,
                            w = e[v].y - b.y;
                          (d +=
                            (_ / g) *
                            (b.x * x * y +
                              0.5 * B * (y * I - m * b.x) -
                              (B * x * m * I) / 3)),
                            (h +=
                              (_ / g) *
                              (b.y * x * y +
                                0.5 * B * (y * w - m * b.y) -
                                (B * x * m * w) / 3)),
                            (p += _);
                        }
                        for (v = a + 1; v < r && !(n[v - 1] > n[a] + f); v++) {
                          (y = f - n[v - 1] + n[a]),
                            (m = n[v] - n[v - 1]),
                            (x = n[v] - n[a] < f ? 1 : y / m);
                          if (Math.abs(x) < 1e-6) break;
                          var B;
                          (g = x * y - 0.5 * (B = x * x) * m),
                            (_ = (x * m) / t),
                            (b = e[v - 1]),
                            (I = e[v].x - b.x),
                            (w = e[v].y - b.y);
                          (d +=
                            (_ / g) *
                            (b.x * x * y +
                              0.5 * B * (y * I - m * b.x) -
                              (B * x * m * I) / 3)),
                            (h +=
                              (_ / g) *
                              (b.y * x * y +
                                0.5 * B * (y * w - m * b.y) -
                                (B * x * m * w) / 3)),
                            (p += _);
                        }
                        s.push(d / p), s.push(h / p);
                      }
                      s.push(l), s.push(u);
                      for (a = 0, v = 0; a < r; a++)
                        (e[a].x = s[v++]), (e[a].y = s[v++]);
                    }
                  }
                }),
                (t._findCentroid = function(e) {
                  var t = e.length - 1,
                    r = 0,
                    n = 0,
                    i = 0,
                    o = e[0].x,
                    a = e[0].y;
                  o > 4096 && (o = 4096),
                    o < 0 && (o = 0),
                    a > 4096 && (a = 4096),
                    a < 0 && (a = 0);
                  for (var s = 1; s < t; s++) {
                    var l = e[s].x,
                      c = e[s].y,
                      f = e[s + 1].x,
                      d = e[s + 1].y;
                    l > 4096 && (l = 4096),
                      l < 0 && (l = 0),
                      c > 4096 && (c = 4096),
                      c < 0 && (c = 0),
                      f > 4096 && (f = 4096),
                      f < 0 && (f = 0),
                      d > 4096 && (d = 4096),
                      d < 0 && (d = 0);
                    var h = (l - o) * (d - a) - (f - o) * (c - a);
                    (r += h * (o + l + f)), (n += h * (a + c + d)), (i += h);
                  }
                  return (
                    (r /= 3 * i),
                    (n /= 3 * i),
                    isNaN(r) || isNaN(n) ? [] : [new u.Anchor(r, n)]
                  );
                }),
                (t._bidiEngine = new i()),
                t
              );
            })(s);
          }.apply(null, n)) || (e.exports = i);
    },
    2158: function(e, t, r) {
      var n, i;
      (n = [
        r.dj.c(e.i),
        t,
        r(34),
        r(2121),
        r(59),
        r(9),
        r(772),
        r(2122),
        r(2123),
        r(2120),
        r(415),
        r(2159),
        r(2124),
        r(2126),
        r(2127),
        r(2161),
        r(2164)
      ]),
        void 0 ===
          (i = function(e, t, r, n, i, o, a, s, l, u, c, f, d, h, p, v, y) {
            return (function() {
              function e() {
                (this.rotation = 0),
                  (this.status = a.TileStatus.INITIALIZED),
                  (this._symbolBuckets = []),
                  (this.placementEngine = new h.PlacementEngine()),
                  (this.fillVertexBuffer = new y.FillVertexBuffer(!1)),
                  (this.fillDDVertexBuffer = new y.FillVertexBuffer(!0)),
                  (this.fillIndexBuffer = new f.TriangleIndexBuffer()),
                  (this.outlineVertexBuffer = new y.OutlineVertexBuffer(!1)),
                  (this.outlineDDVertexBuffer = new y.OutlineVertexBuffer(!0)),
                  (this.outlineIndexBuffer = new f.TriangleIndexBuffer()),
                  (this.lineVertexBuffer = new y.LineVertexBuffer(!1)),
                  (this.lineDDVertexBuffer = new y.LineVertexBuffer(!0)),
                  (this.lineIndexBuffer = new f.TriangleIndexBuffer()),
                  (this.iconVertexBuffer = new y.SymbolVertexBuffer(!1)),
                  (this.iconDDVertexBuffer = new y.SymbolVertexBuffer(!0)),
                  (this.iconIndexBuffer = new f.TriangleIndexBuffer()),
                  (this.textVertexBuffer = new y.SymbolVertexBuffer(!1)),
                  (this.textDDVertexBuffer = new y.SymbolVertexBuffer(!0)),
                  (this.textIndexBuffer = new f.TriangleIndexBuffer()),
                  (this.circleVertexBuffer = new y.CircleVertexBuffer()),
                  (this.circleIndexBuffer = new f.TriangleIndexBuffer());
              }
              return (
                (e.prototype.initialize = function(e, t, r, n) {
                  void 0 === n && (n = 0),
                    (this.tileKey = e),
                    (this.refKey = t),
                    (this._workerTileHandler = r),
                    (this.rotation = n),
                    this.placementEngine.setAngle(c.C_DEG_TO_RAD * n);
                }),
                (e.prototype.release = function() {
                  (this.tileKey = this.refKey = ""),
                    (this.status = a.TileStatus.INITIALIZED),
                    (this.rotation = 0),
                    this.fillVertexBuffer.reset(),
                    this.fillDDVertexBuffer.reset(),
                    this.fillIndexBuffer.reset(),
                    this.outlineVertexBuffer.reset(),
                    this.outlineDDVertexBuffer.reset(),
                    this.outlineIndexBuffer.reset(),
                    this.lineVertexBuffer.reset(),
                    this.lineDDVertexBuffer.reset(),
                    this.lineIndexBuffer.reset(),
                    this.iconVertexBuffer.reset(),
                    this.iconDDVertexBuffer.reset(),
                    this.iconIndexBuffer.reset(),
                    this.textVertexBuffer.reset(),
                    this.textDDVertexBuffer.reset(),
                    this.textIndexBuffer.reset(),
                    this.circleVertexBuffer.reset(),
                    this.circleIndexBuffer.reset(),
                    this.placementEngine.reset(),
                    (this._symbolBuckets.length = 0),
                    (this._workerTileHandler = null);
                }),
                (e.prototype.setDataAndParse = function(e, t) {
                  var n = this,
                    i = new r(function(e) {
                      n.status = a.TileStatus.INVALID;
                    });
                  return (
                    this._parse(e, t).then(function(e) {
                      n.status = a.TileStatus.READY;
                      for (
                        var t = [
                            1,
                            n.fillVertexBuffer.sizeInBytes,
                            2,
                            n.fillDDVertexBuffer.sizeInBytes,
                            3,
                            n.fillIndexBuffer.sizeInBytes,
                            4,
                            n.outlineVertexBuffer.sizeInBytes,
                            5,
                            n.outlineDDVertexBuffer.sizeInBytes,
                            6,
                            n.outlineIndexBuffer.sizeInBytes,
                            7,
                            n.lineVertexBuffer.sizeInBytes,
                            8,
                            n.lineDDVertexBuffer.sizeInBytes,
                            9,
                            n.lineIndexBuffer.sizeInBytes,
                            10,
                            n.iconVertexBuffer.sizeInBytes,
                            11,
                            n.iconDDVertexBuffer.sizeInBytes,
                            12,
                            n.iconIndexBuffer.sizeInBytes,
                            13,
                            n.textVertexBuffer.sizeInBytes,
                            14,
                            n.textDDVertexBuffer.sizeInBytes,
                            15,
                            n.textIndexBuffer.sizeInBytes,
                            16,
                            n.circleVertexBuffer.sizeInBytes,
                            17,
                            n.circleIndexBuffer.sizeInBytes
                          ],
                          r = new Uint32Array(t),
                          o = [],
                          c = e.length,
                          f = 0;
                        f < c;
                        f++
                      ) {
                        var h = e[f];
                        if (h instanceof u)
                          o.push(h.layerIndex),
                            o.push(1),
                            o.push(h.fillIndexStart),
                            o.push(h.fillIndexCount),
                            o.push(h.outlineIndexStart),
                            o.push(h.outlineIndexCount);
                        else if (h instanceof d)
                          o.push(h.layerIndex),
                            o.push(2),
                            o.push(h.lineIndexStart),
                            o.push(h.lineIndexCount);
                        else if (h instanceof p) {
                          o.push(h.layerIndex),
                            o.push(3),
                            o.push(h.sdfMarker ? 1 : 0);
                          var v = h.markerPageMap;
                          o.push(v.size),
                            v.forEach(function(e, t) {
                              o.push(t), o.push(e[0]), o.push(e[1]);
                            });
                          var y = h.glyphsPageMap;
                          o.push(y.size),
                            y.forEach(function(e, t) {
                              o.push(t), o.push(e[0]), o.push(e[1]);
                            });
                        } else
                          h instanceof l
                            ? (o.push(h.layerIndex),
                              o.push(4),
                              o.push(h.circleIndexStart),
                              o.push(h.circleIndexCount))
                            : h instanceof s &&
                              (o.push(h.layerIndex), o.push(0));
                      }
                      var m = new Uint32Array(o),
                        x = n.fillVertexBuffer.toBuffer(),
                        g = n.fillDDVertexBuffer.toBuffer(),
                        _ = n.fillIndexBuffer.toBuffer(),
                        b = n.outlineVertexBuffer.toBuffer(),
                        I = n.outlineDDVertexBuffer.toBuffer(),
                        w = n.outlineIndexBuffer.toBuffer(),
                        B = n.lineVertexBuffer.toBuffer(),
                        T = n.lineDDVertexBuffer.toBuffer(),
                        D = n.lineIndexBuffer.toBuffer(),
                        P = n.iconVertexBuffer.toBuffer(),
                        V = n.iconDDVertexBuffer.toBuffer(),
                        S = n.iconIndexBuffer.toBuffer(),
                        M = n.textVertexBuffer.toBuffer(),
                        C = n.textDDVertexBuffer.toBuffer(),
                        E = n.textIndexBuffer.toBuffer(),
                        A = n.circleVertexBuffer.toBuffer(),
                        z = n.circleIndexBuffer.toBuffer();
                      i.resolve({
                        result: {
                          bufferDataInfo: r.buffer,
                          bucketDataInfo: m.buffer,
                          bufferData: [
                            x,
                            g,
                            _,
                            b,
                            I,
                            w,
                            B,
                            T,
                            D,
                            P,
                            V,
                            S,
                            M,
                            C,
                            E,
                            A,
                            z
                          ]
                        },
                        transferList: [
                          x,
                          g,
                          _,
                          b,
                          I,
                          w,
                          B,
                          T,
                          D,
                          P,
                          V,
                          S,
                          M,
                          C,
                          E,
                          A,
                          z,
                          r.buffer,
                          m.buffer
                        ]
                      });
                    }),
                    i.promise
                  );
                }),
                (e.prototype.addBucket = function(e) {
                  this._symbolBuckets.push(e);
                }),
                (e.prototype.updateSymbols = function(e) {
                  var t = this,
                    r = this._symbolBuckets;
                  if (!r || 0 === r.length) return o.resolve();
                  this.rotation = e;
                  var i = this.placementEngine;
                  i.reset(), i.setAngle((e / 256) * 360 * c.C_DEG_TO_RAD);
                  var s = this.iconVertexBuffer;
                  s.reset();
                  var l = this.iconDDVertexBuffer;
                  l.reset();
                  var u = this.iconIndexBuffer;
                  u.reset();
                  var f = this.textVertexBuffer;
                  f.reset();
                  var d = this.textDDVertexBuffer;
                  d.reset();
                  var h = this.textIndexBuffer;
                  h.reset();
                  var p = [],
                    v = r.length,
                    y = 0;
                  return n(function() {
                    if (
                      t.status === a.TileStatus.INVALID ||
                      t.status === a.TileStatus.INITIALIZED
                    )
                      return !0;
                    if (y < v) {
                      var e = r[y++],
                        n = e.layer,
                        o = e.copy(
                          n.hasDataDrivenIcon ? l : s,
                          u,
                          n.hasDataDrivenText ? d : f,
                          h,
                          i
                        );
                      o && (p.push(o), o.updateSymbols());
                    }
                    return y >= v;
                  })
                    .then(function() {
                      if (
                        t.status === a.TileStatus.INVALID ||
                        t.status === a.TileStatus.INITIALIZED ||
                        (0 === s.sizeInBytes &&
                          0 === l.sizeInBytes &&
                          0 === u.sizeInBytes &&
                          0 === f.sizeInBytes &&
                          0 === d.sizeInBytes &&
                          0 === h.sizeInBytes)
                      )
                        return { result: null, transferList: null };
                      var e = [
                          10,
                          s.sizeInBytes,
                          11,
                          l.sizeInBytes,
                          12,
                          u.sizeInBytes,
                          13,
                          f.sizeInBytes,
                          14,
                          d.sizeInBytes,
                          15,
                          h.sizeInBytes
                        ],
                        r = new Uint32Array(e),
                        n = [];
                      v = p.length;
                      for (var i = 0; i < v; i++) {
                        var o = p[i];
                        n.push(o.layerIndex),
                          n.push(3),
                          n.push(o.sdfMarker ? 1 : 0);
                        var c = o.markerPageMap;
                        n.push(c.size),
                          c.forEach(function(e, t) {
                            n.push(t), n.push(e[0]), n.push(e[1]);
                          });
                        var y = o.glyphsPageMap;
                        n.push(y.size),
                          y.forEach(function(e, t) {
                            n.push(t), n.push(e[0]), n.push(e[1]);
                          });
                      }
                      var m = new Uint32Array(n),
                        x = s.toBuffer(),
                        g = l.toBuffer(),
                        _ = u.toBuffer(),
                        b = f.toBuffer(),
                        I = d.toBuffer(),
                        w = h.toBuffer();
                      return {
                        result: {
                          bufferDataInfo: r.buffer,
                          bucketDataInfo: m.buffer,
                          bufferData: [x, g, _, b, I, w]
                        },
                        transferList: [x, g, _, b, I, w, r.buffer, m.buffer]
                      };
                    })
                    .catch(function() {
                      return null;
                    });
                }),
                (e.prototype.setObsolete = function() {
                  this.status = a.TileStatus.INVALID;
                }),
                (e.prototype.getLayers = function() {
                  return this._workerTileHandler.getLayers();
                }),
                (e.prototype.getWorkerTileHandler = function() {
                  return this._workerTileHandler;
                }),
                (e.prototype._parse = function(e, t) {
                  return e && 0 !== e.byteLength
                    ? ((this.status = a.TileStatus.MODIFIED),
                      new v(e, this, t).parse())
                    : o.resolve([]);
                }),
                (e.pool = new i(e)),
                e
              );
            })();
          }.apply(null, n)) || (e.exports = i);
    },
    2159: function(e, t, r) {
      var n, i;
      (n = [r.dj.c(e.i), t, r(5), r(0), r(2075)]),
        void 0 ===
          (i = function(e, t, r, n, i) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var o = (function(e) {
              function t() {
                return e.call(this, 12) || this;
              }
              return (
                r(t, e),
                (t.prototype.add = function(e, t, r) {
                  var n = this.array;
                  n.push(e), n.push(t), n.push(r);
                }),
                t
              );
            })(i);
            t.TriangleIndexBuffer = o;
            var a = (function(e) {
              function t() {
                return e.call(this, 4) || this;
              }
              return (
                r(t, e),
                (t.prototype.add = function(e) {
                  this.array.push(e);
                }),
                t
              );
            })(i);
            t.PointElementMemoryBuffer = a;
          }.apply(null, n)) || (e.exports = i);
    },
    2160: function(e, t, r) {
      var n, i;
      (n = [r.dj.c(e.i), t, r(2037), r(415)]),
        void 0 ===
          (i = function(e, t, r, n) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = (function() {
              function e(e, t, r, n) {
                (this.left = e),
                  (this.top = t),
                  (this.right = r),
                  (this.bottom = n);
              }
              return (
                (e.prototype.clone = function() {
                  return new e(this.left, this.top, this.right, this.bottom);
                }),
                (e.prototype.move = function(e, t) {
                  (this.left += e),
                    (this.top += t),
                    (this.right += e),
                    (this.bottom += t);
                }),
                (e.prototype.rotate = function(e, t) {
                  var r = this.left,
                    n = this.right,
                    i = this.top,
                    o = this.bottom,
                    a = r * e - i * t,
                    s = r * t + i * e,
                    l = n * e - i * t,
                    u = n * t + i * e,
                    c = r * e - o * t,
                    f = r * t + o * e,
                    d = n * e - o * t,
                    h = n * t + o * e;
                  (this.left = Math.min(a, l, c, d)),
                    (this.top = Math.min(s, u, f, h)),
                    (this.right = Math.max(a, l, c, d)),
                    (this.bottom = Math.max(s, u, f, h));
                }),
                (e.overlaps = function(e, t) {
                  return (
                    e.right > t.left &&
                    e.left < t.right &&
                    e.bottom > t.top &&
                    e.top < t.bottom
                  );
                }),
                e
              );
            })();
            t.Box = i;
            var o = (function() {
              function e(e, t, r, n) {
                (this.anchor = e),
                  (this.corners = t),
                  (this.minzoom = r),
                  (this.maxzoom = n);
              }
              return (
                (e.prototype.left = function() {
                  return this.corners[0].x;
                }),
                (e.prototype.right = function() {
                  return this.corners[2].x;
                }),
                (e.prototype.top = function() {
                  return this.corners[1].y;
                }),
                (e.prototype.bottom = function() {
                  return this.corners[3].y;
                }),
                e
              );
            })();
            t.Obstacle = o;
            var a = (function() {
              function e(e, t, r) {
                (this.obstacles = []),
                  (this.mapAngle = e),
                  (this.padding = t),
                  (this.isScreenAligned = r),
                  (this.minzoom = s);
              }
              return (
                (e.prototype.addBox = function(e, t, n, i, a, s, l) {
                  var u = t.left * n - this.padding,
                    c = t.top * n - this.padding,
                    f = t.right * n + this.padding,
                    d = t.bottom * n + this.padding,
                    h = [
                      new r.Point(u, c),
                      new r.Point(f, c),
                      new r.Point(f, d),
                      new r.Point(u, d)
                    ];
                  if (0 !== this.mapAngle) {
                    var p = Math.cos(this.mapAngle),
                      v = Math.sin(this.mapAngle);
                    (e = e.clone()).rotate(p, v);
                  }
                  if ((this.isScreenAligned || (i += this.mapAngle), 0 !== i)) {
                    (p = Math.cos(i)), (v = Math.sin(i));
                    h[0].rotate(p, v),
                      h[1].rotate(p, v),
                      h[2].rotate(p, v),
                      h[3].rotate(p, v);
                    for (var y = 0, m = 1; m < 4; m++)
                      h[m].x < h[y].x
                        ? (y = m)
                        : h[m].x === h[y].x && h[m].y < h[y].y && (y = m);
                    if (y) {
                      var x = [];
                      for (m = 0; m < 4; m++) x.push(h[(m + y) % 4]);
                      h = x;
                    }
                  }
                  if (a)
                    for (var g = 0, _ = h; g < _.length; g++) {
                      _[g].move(a[0], a[1]);
                    }
                  this.obstacles.push(new o(e, h, s, l));
                }),
                e
              );
            })();
            t.Footprint = a;
            var s = 0.5,
              l = (function() {
                function e() {
                  this._grid = [];
                }
                return (
                  (e.prototype.setAngle = function(e) {}),
                  (e.prototype.reset = function() {
                    this._grid = [];
                  }),
                  (e.prototype.add = function(t) {
                    for (
                      var r = this._grid, n = 0, i = t.obstacles;
                      n < i.length;
                      n++
                    )
                      for (
                        var o = i[n],
                          a = o.anchor,
                          s = e._gridClamp(Math.min(o.left() + a.x, a.x)),
                          l = e._gridClamp(Math.max(o.right() + a.x, a.x)),
                          u = e._gridClamp(Math.min(o.top() + a.y, a.y)),
                          c = e._gridClamp(Math.max(o.bottom() + a.y, a.y)),
                          f = u;
                        f <= c;
                        f++
                      )
                        for (var d = s; d <= l; d++) {
                          var h = r[16 * f + d];
                          h || (h = r[16 * f + d] = []), h.push(o);
                        }
                  }),
                  (e.prototype.getMinZoom = function(t, r, i, o) {
                    if (0 === t.obstacles.length) return n.C_INFINITY;
                    for (
                      var a = r, s = this._grid, l = 0, u = t.obstacles;
                      l < u.length;
                      l++
                    )
                      for (
                        var c = u[l],
                          f = c.anchor,
                          d = e._gridClamp(Math.min(c.left() + f.x, f.x)),
                          h = e._gridClamp(Math.max(c.right() + f.x, f.x)),
                          p = e._gridClamp(Math.min(c.top() + f.y, f.y)),
                          v = e._gridClamp(Math.max(c.bottom() + f.y, f.y)),
                          y = p;
                        y <= v;
                        y++
                      )
                        for (var m = d; m <= h; m++) {
                          var x = s[16 * y + m];
                          if (x)
                            for (var g = 0, _ = x; g < _.length; g++) {
                              var b = _[g];
                              if (
                                !(
                                  c.minzoom >= b.maxzoom ||
                                  b.minzoom >= c.maxzoom
                                ) &&
                                (a = e._calcPlacementZoom(c, b, a)) >= 2
                              )
                                return n.C_INFINITY;
                            }
                        }
                    return a < 2 ? a : n.C_INFINITY;
                  }),
                  (e._gridClamp = function(e) {
                    return n.clamp(e >> 9, -7, 8);
                  }),
                  (e._calcPlacementZoom = function(t, r, i) {
                    var o = r.anchor.x - t.anchor.x;
                    if (
                      0 === o &&
                      (t.right() < r.left() || r.right() < t.left())
                    )
                      return i;
                    var a = r.anchor.y - t.anchor.y;
                    if (
                      0 === a &&
                      (t.bottom() < r.top() || r.bottom() < t.top())
                    )
                      return i;
                    var s = n.C_INFINITY;
                    if (0 !== o) {
                      var l =
                        (o > 0 ? t.right() - r.left() : t.left() - r.right()) /
                        o;
                      l < s && (s = l);
                      var u =
                        o > 0
                          ? e._calcExtZoomX(t, r, l)
                          : e._calcExtZoomX(r, t, l);
                      u < s && (s = u);
                    }
                    if (0 !== a) {
                      var c =
                        (a > 0 ? t.bottom() - r.top() : t.top() - r.bottom()) /
                        a;
                      c < s && (s = c);
                      var f =
                        a > 0
                          ? e._calcExtZoomY(t, r, c)
                          : e._calcExtZoomY(r, t, c);
                      f < s && (s = f);
                    }
                    return s < t.minzoom || s < r.minzoom
                      ? i
                      : ((s = Math.min(s, t.maxzoom, r.maxzoom)) < i && (s = i),
                        s);
                  }),
                  (e._calcExtZoomX = function(e, t, r) {
                    var n, i, o, a;
                    if (
                      e.anchor.y + e.corners[2].y / r <
                      t.anchor.y + t.corners[0].y / r
                    ) {
                      var s = e.corners[2].x - e.corners[3].x,
                        l = e.corners[2].y - e.corners[3].y,
                        u = t.corners[1].x - t.corners[0].x;
                      s * (t.corners[1].y - t.corners[0].y) - l * u >= 0
                        ? e.anchor.y + e.corners[3].y / r <
                          t.anchor.y + t.corners[0].y / r
                          ? ((n = e.corners[3]),
                            (i = t.corners[0]),
                            (o = t.corners[1]),
                            (a = 1))
                          : ((n = t.corners[0]),
                            (i = e.corners[3]),
                            (o = e.corners[2]),
                            (a = -1))
                        : e.anchor.y + e.corners[2].y / r >
                          t.anchor.y + t.corners[1].y / r
                          ? ((n = e.corners[2]),
                            (i = t.corners[0]),
                            (o = t.corners[1]),
                            (a = 1))
                          : ((n = t.corners[1]),
                            (i = e.corners[3]),
                            (o = e.corners[2]),
                            (a = -1));
                    } else {
                      (s = e.corners[2].x - e.corners[1].x),
                        (l = e.corners[2].y - e.corners[1].y),
                        (u = t.corners[3].x - t.corners[0].x);
                      s * (t.corners[3].y - t.corners[0].y) - l * u < 0
                        ? e.anchor.y + e.corners[1].y / r >
                          t.anchor.y + t.corners[0].y / r
                          ? ((n = e.corners[1]),
                            (i = t.corners[0]),
                            (o = t.corners[3]),
                            (a = 1))
                          : ((n = t.corners[0]),
                            (i = e.corners[1]),
                            (o = e.corners[2]),
                            (a = -1))
                        : e.anchor.y + e.corners[2].y / r <
                          t.anchor.y + t.corners[3].y / r
                          ? ((n = e.corners[2]),
                            (i = t.corners[0]),
                            (o = t.corners[3]),
                            (a = 1))
                          : ((n = t.corners[3]),
                            (i = e.corners[1]),
                            (o = e.corners[2]),
                            (a = -1));
                    }
                    var c = o.x - i.x,
                      f = o.y - i.y;
                    return (
                      (a * ((n.y - i.y) * c - (n.x - i.x) * f)) /
                      ((e.anchor.x - t.anchor.x) * f -
                        (e.anchor.y - t.anchor.y) * c)
                    );
                  }),
                  (e._calcExtZoomY = function(e, t, r) {
                    var n, i, o, a;
                    if (
                      e.anchor.x + e.corners[3].x / r <
                      t.anchor.x + t.corners[1].x / r
                    ) {
                      var s = e.corners[3].x - e.corners[2].x,
                        l = e.corners[3].y - e.corners[2].y,
                        u = t.corners[0].x - t.corners[1].x;
                      s * (t.corners[0].y - t.corners[1].y) - l * u < 0
                        ? e.anchor.x + e.corners[2].x / r <
                          t.anchor.x + t.corners[1].x / r
                          ? ((n = e.corners[2]),
                            (i = t.corners[1]),
                            (o = t.corners[0]),
                            (a = 1))
                          : ((n = t.corners[1]),
                            (i = e.corners[2]),
                            (o = e.corners[3]),
                            (a = -1))
                        : e.anchor.x + e.corners[3].x / r >
                          t.anchor.x + t.corners[0].x / r
                          ? ((n = e.corners[3]),
                            (i = t.corners[1]),
                            (o = t.corners[0]),
                            (a = 1))
                          : ((n = t.corners[0]),
                            (i = e.corners[2]),
                            (o = e.corners[3]),
                            (a = -1));
                    } else {
                      (s = e.corners[3].x - e.corners[0].x),
                        (l = e.corners[3].y - e.corners[0].y),
                        (u = t.corners[2].x - t.corners[1].x);
                      s * (t.corners[2].y - t.corners[1].y) - l * u > 0
                        ? e.anchor.x + e.corners[0].x / r >
                          t.anchor.x + t.corners[1].x / r
                          ? ((n = e.corners[0]),
                            (i = t.corners[1]),
                            (o = t.corners[2]),
                            (a = 1))
                          : ((n = t.corners[1]),
                            (i = e.corners[0]),
                            (o = e.corners[3]),
                            (a = -1))
                        : e.anchor.x + e.corners[3].x / r <
                          t.anchor.x + t.corners[2].x / r
                          ? ((n = e.corners[3]),
                            (i = t.corners[1]),
                            (o = t.corners[2]),
                            (a = 1))
                          : ((n = t.corners[2]),
                            (i = e.corners[0]),
                            (o = e.corners[3]),
                            (a = -1));
                    }
                    var c = o.x - i.x,
                      f = o.y - i.y;
                    return (
                      (a * ((n.y - i.y) * c - (n.x - i.x) * f)) /
                      ((e.anchor.x - t.anchor.x) * f -
                        (e.anchor.y - t.anchor.y) * c)
                    );
                  }),
                  e
                );
              })();
            t.ConflictEngine = l;
          }.apply(null, n)) || (e.exports = i);
    },
    2161: function(e, t, r) {
      var n, i;
      (n = [
        r.dj.c(e.i),
        t,
        r(108),
        r(2121),
        r(784),
        r(9),
        r(2084),
        r(772),
        r(2122),
        r(2123),
        r(2162),
        r(2120),
        r(2124),
        r(2163),
        r(2127)
      ]),
        void 0 ===
          (i = function(e, t, r, n, i, o, a, s, l, u, c, f, d, h, p) {
            return (function() {
              function e(e, t, r) {
                (this._pbfTile = new i(new Uint8Array(e), new DataView(e))),
                  (this._tile = t),
                  (this._connection = r),
                  (this._layers = t.getLayers());
                var n = t.tileKey.split("/").map(parseFloat),
                  o = n[0],
                  s = n[1],
                  l = n[2];
                if (((this._level = o), t.refKey)) {
                  var u = o - t.refKey.split("/").map(parseFloat)[0];
                  if (u > 0) {
                    var c = (1 << u) - 1,
                      f = s & c,
                      d = l & c;
                    this._tileClipper = new a.TileClipper(u, f, d);
                  }
                }
                this._tileClipper ||
                  (this._tileClipper = new a.SimpleBuilder());
              }
              return (
                (e.prototype.parse = function() {
                  for (
                    var e,
                      t = this,
                      i = this._parseTileData(this._pbfTile),
                      a = this._layers,
                      l = a.length,
                      u = this._level,
                      f = [],
                      d = {},
                      h = new Set(),
                      p = l - 1;
                    p >= 0;
                    p--
                  )
                    if (
                      !(
                        ((e = a[p]).minzoom && u < e.minzoom) ||
                        (e.maxzoom && u >= e.maxzoom) ||
                        (e.layout && "none" === e.layout.visibility)
                      )
                    )
                      if (0 !== e.type) {
                        var v = e.sourceLayer,
                          y = i[v];
                        if (y)
                          if ((h.add(v), (x = this._createBucket(e)))) {
                            (x.layerIndex = p), (x.layerExtent = y.extent);
                            var m = d[v];
                            m || (m = d[v] = []), m.push(x);
                          }
                      } else {
                        var x;
                        ((x = this._createBucket(e)).layerIndex = p), f.push(x);
                      }
                  var g = 10 * this._level,
                    _ = 10 * (this._level + 1),
                    b = [],
                    I = [],
                    w = [],
                    B = [],
                    T = this._tileClipper,
                    D = new Set(),
                    P = {},
                    V = [];
                  h.forEach(function(e) {
                    return V.push(e);
                  });
                  var S = 0,
                    M = 0,
                    C = V.length;
                  return n(function() {
                    if (t._tile.status === s.TileStatus.INVALID) return !0;
                    switch (S) {
                      case 0:
                        if (M < C) {
                          var e = V[M++],
                            r = i[e];
                          if (!(v = d[e]) || 0 === v.length) break;
                          for (var n = r.getData(); n.next(2); ) {
                            var o = new c(n.getMessage(), r),
                              a = o.values;
                            if (a) {
                              var l = a._minzoom;
                              if (l && l >= _) continue;
                              var u = a._maxzoom;
                              if (u && u <= g) continue;
                            }
                            for (var f = 0, h = v; f < h.length; f++) {
                              (x = h[f]).pushFeature(o);
                            }
                          }
                        } else {
                          var p = t._tile;
                          for (var e in d)
                            for (
                              var v, y = 0, m = (v = d[e]);
                              y < m.length;
                              y++
                            ) {
                              var x;
                              (x = m[y]).hasFeatures() &&
                                (3 === x.layer.type
                                  ? (b.push(x), p.addBucket(x))
                                  : x.layer.refLayerId
                                    ? w.push(x)
                                    : (I.push(x), (B[x.layer.id] = x)));
                            }
                          (S = 1), (M = 0), (C = b.length);
                        }
                        break;
                      case 1:
                        M < C ? b[M++].getResources(T, D, P) : (S = 2);
                    }
                    return 2 === S;
                  })
                    .then(function() {
                      if (t._tile.status === s.TileStatus.INVALID) return [];
                      var e,
                        i,
                        a = [],
                        l = t._tile.getWorkerTileHandler();
                      for (var u in (D.size > 0 &&
                        ((e = l.fetchSprites(D, t._connection)), a.push(e)),
                      P)) {
                        var c = P[u];
                        c.size > 0 &&
                          ((i = l.fetchGlyphs(
                            t._tile.tileKey,
                            u,
                            c,
                            t._connection
                          )),
                          a.push(i));
                      }
                      return r(a)
                        .then(function(e) {
                          if (t._tile.status === s.TileStatus.INVALID)
                            return [];
                          var r = 0,
                            i = 0,
                            o = I.length;
                          return n(function() {
                            if (t._tile.status === s.TileStatus.INVALID)
                              return !0;
                            switch (r) {
                              case 0:
                                if (i < o)
                                  (a = I[i++]).processFeatures(T, t._tile),
                                    f.push(a);
                                else (r = 1), (i = 0), (o = w.length);
                                break;
                              case 1:
                                for (var e = 0, n = w; e < n.length; e++) {
                                  var a = n[e],
                                    l = B[a.layer.refLayerId];
                                  l && (l.assignBufferInfo(a), f.push(a));
                                }
                                (r = 2), (i = 0), (o = b.length);
                                break;
                              case 2:
                                if (i < o)
                                  (a = b[i++]).processFeatures(T, t._tile),
                                    f.push(a);
                                else r = 3;
                            }
                            return 3 === r;
                          }).then(function() {
                            return (
                              f.sort(function(e, t) {
                                return e.layerIndex - t.layerIndex;
                              }),
                              f
                            );
                          });
                        })
                        .catch(function(e) {
                          return o.reject(new Error(e));
                        });
                    })
                    .catch(function(e) {
                      return o.reject(new Error(e));
                    });
                }),
                (e.prototype._parseTileData = function(e) {
                  for (var t = {}; e.next(); )
                    switch (e.tag()) {
                      case 3:
                        var r = new h(e.getMessage());
                        t[r.name] = r;
                        break;
                      default:
                        e.skip();
                    }
                  return t;
                }),
                (e.prototype._createBucket = function(e) {
                  switch (e.type) {
                    case 0:
                      return this._createBackgroundBucket(e);
                    case 1:
                      return this._createFillBucket(e);
                    case 2:
                      return this._createLineBucket(e);
                    case 4:
                      return this._createCircleBucket(e);
                    case 3:
                      return this._createSymbolBucket(e);
                  }
                }),
                (e.prototype._createBackgroundBucket = function(e) {
                  return new l(e, this._level);
                }),
                (e.prototype._createFillBucket = function(e) {
                  var t = this._tile;
                  return new f(
                    e,
                    this._level,
                    e.hasDataDrivenFill
                      ? t.fillDDVertexBuffer
                      : t.fillVertexBuffer,
                    t.fillIndexBuffer,
                    e.hasDataDrivenOutline
                      ? t.outlineDDVertexBuffer
                      : t.outlineVertexBuffer,
                    t.outlineIndexBuffer
                  );
                }),
                (e.prototype._createLineBucket = function(e) {
                  var t = this._tile;
                  return new d(
                    e,
                    this._level,
                    e.hasDataDrivenLine
                      ? t.lineDDVertexBuffer
                      : t.lineVertexBuffer,
                    t.lineIndexBuffer
                  );
                }),
                (e.prototype._createCircleBucket = function(e) {
                  var t = this._tile;
                  return new u(
                    e,
                    this._level,
                    t.circleVertexBuffer,
                    t.circleIndexBuffer
                  );
                }),
                (e.prototype._createSymbolBucket = function(e) {
                  var t = this._tile;
                  return new p(
                    e,
                    this._level,
                    e.hasDataDrivenIcon
                      ? t.iconDDVertexBuffer
                      : t.iconVertexBuffer,
                    t.iconIndexBuffer,
                    e.hasDataDrivenText
                      ? t.textDDVertexBuffer
                      : t.textVertexBuffer,
                    t.textIndexBuffer,
                    t.placementEngine,
                    t.getWorkerTileHandler()
                  );
                }),
                e
              );
            })();
          }.apply(null, n)) || (e.exports = i);
    },
    2162: function(e, t, r) {
      var n, i;
      (n = [r.dj.c(e.i), t, r(2037)]),
        void 0 ===
          (i = function(e, t, r) {
            return (function() {
              function e(e, t) {
                this.values = {};
                for (var r = t.keys, n = t.values; e.next(); )
                  switch (e.tag()) {
                    case 1:
                      this.id = e.getUInt64();
                      break;
                    case 2:
                      for (
                        var i = e.getMessage(), o = this.values;
                        !i.empty();

                      ) {
                        var a = i.getUInt32(),
                          s = i.getUInt32();
                        o[r[a]] = n[s];
                      }
                      break;
                    case 3:
                      this.type = e.getUInt32();
                      break;
                    case 4:
                      this._pbfGeometry = e.getMessage();
                      break;
                    default:
                      e.skip();
                  }
              }
              return (
                (e.prototype.getGeometry = function(e) {
                  if (void 0 !== this._geometry) return this._geometry;
                  var t,
                    n,
                    i,
                    o = this._pbfGeometry;
                  e ? e.reset(this.type) : (t = []);
                  for (var a = 1, s = 0, l = 0, u = 0; !o.empty(); ) {
                    if (0 === s) {
                      var c = o.getUInt32();
                      (a = 7 & c), (s = c >> 3);
                    }
                    switch ((s--, a)) {
                      case 1:
                        (l += o.getSInt32()),
                          (u += o.getSInt32()),
                          e
                            ? e.moveTo(l, u)
                            : (n && t.push(n),
                              (n = []).push(new r.Point(l, u)));
                        break;
                      case 2:
                        (l += o.getSInt32()),
                          (u += o.getSInt32()),
                          e ? e.lineTo(l, u) : n.push(new r.Point(l, u));
                        break;
                      case 7:
                        e
                          ? e.close()
                          : n && !n[0].equals(l, u) && n.push(n[0].clone());
                        break;
                      default:
                        throw new Error("Invalid path operation");
                    }
                  }
                  return (
                    e ? (i = e.result()) : (n && t.push(n), (i = t)),
                    (this._geometry = i),
                    i
                  );
                }),
                e
              );
            })();
          }.apply(null, n)) || (e.exports = i);
    },
    2163: function(e, t, r) {
      var n, i;
      (n = [r.dj.c(e.i), t]),
        void 0 ===
          (i = function(e, t) {
            return (function() {
              function e(t) {
                for (
                  this.extent = 4096,
                    this.keys = [],
                    this.values = [],
                    this._pbfLayer = t.clone();
                  t.next();

                )
                  switch (t.tag()) {
                    case 1:
                      this.name = t.getString();
                      break;
                    case 3:
                      this.keys.push(t.getString());
                      break;
                    case 4:
                      this.values.push(e._parseValue(t.getMessage()));
                      break;
                    case 5:
                      this.extent = t.getUInt32();
                      break;
                    default:
                      t.skip();
                  }
              }
              return (
                (e.prototype.getData = function() {
                  return this._pbfLayer;
                }),
                (e._parseValue = function(e) {
                  for (; e.next(); )
                    switch (e.tag()) {
                      case 1:
                        return e.getString();
                      case 2:
                        return e.getFloat();
                      case 3:
                        return e.getDouble();
                      case 4:
                        return e.getInt64();
                      case 5:
                        return e.getUInt64();
                      case 6:
                        return e.getSInt64();
                      case 7:
                        return e.getBool();
                      default:
                        e.skip();
                    }
                  return null;
                }),
                e
              );
            })();
          }.apply(null, n)) || (e.exports = i);
    },
    2164: function(e, t, r) {
      var n, i;
      (n = [r.dj.c(e.i), t, r(5), r(0), r(415), r(2075)]),
        void 0 ===
          (i = function(e, t, r, n, i, o) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var a = new Float32Array(1),
              s = new Uint32Array(a.buffer),
              l = (function(e) {
                function t(t) {
                  var r = e.call(this, t ? 20 : 12) || this;
                  return (r._isDataDriven = t), r;
                }
                return (
                  r(t, e),
                  (t.prototype.isDataDriven = function() {
                    return this._isDataDriven;
                  }),
                  (t.prototype.add = function(e, t, r, n, i, l, u, c) {
                    var f = this.array,
                      d = o.i1616to32(e, t);
                    if (
                      (f.push(d),
                      (d = o.i8888to32(
                        Math.round(31 * r),
                        Math.round(31 * n),
                        Math.round(31 * i),
                        Math.round(31 * l)
                      )),
                      f.push(d),
                      (d = o.i1616to32(u, 0)),
                      f.push(d),
                      this._isDataDriven)
                    ) {
                      if (!c) throw new Error("Expecting data driven values.");
                      var h = c.color,
                        p = h[3] * c.opacity * 255;
                      f.push(o.i8888to32(h[0] * p, h[1] * p, h[2] * p, p)),
                        (a[0] = c.size),
                        f.push(s[0]);
                    }
                  }),
                  t
                );
              })(o);
            t.LineVertexBuffer = l;
            var u = (function(e) {
              function t(t) {
                var r = e.call(this, t ? 8 : 4) || this;
                return (r._isDataDriven = t), r;
              }
              return (
                r(t, e),
                (t.prototype.isDataDriven = function() {
                  return this._isDataDriven;
                }),
                (t.prototype.add = function(e, t, r) {
                  var n = this.array;
                  if ((n.push(o.i1616to32(e, t)), this._isDataDriven)) {
                    if (!r) throw new Error("Expecting data driven values.");
                    var i = r.color,
                      a = i[3] * r.opacity * 255;
                    n.push(o.i8888to32(i[0] * a, i[1] * a, i[2] * a, a));
                  }
                }),
                t
              );
            })(o);
            t.FillVertexBuffer = u;
            var c = (function(e) {
              function t(t) {
                var r = e.call(this, t ? 12 : 8) || this;
                return (r._isDataDriven = t), r;
              }
              return (
                r(t, e),
                (t.prototype.isDataDriven = function() {
                  return this._isDataDriven;
                }),
                (t.prototype.add = function(e, t, r, n, i, a, s) {
                  var l = this.array,
                    u = this.index,
                    c = o.i1616to32(e, t);
                  if (
                    (l.push(c),
                    (c = o.i8888to32(
                      Math.round(15 * r),
                      Math.round(15 * n),
                      i,
                      a
                    )),
                    l.push(c),
                    this._isDataDriven)
                  ) {
                    if (!s) throw new Error("Expecting data driven values.");
                    var f = s.color,
                      d = f[3] * s.opacity * 255;
                    l.push(o.i8888to32(f[0] * d, f[1] * d, f[2] * d, d));
                  }
                  return u;
                }),
                t
              );
            })(o);
            t.OutlineVertexBuffer = c;
            var f = (function(e) {
              function t(t) {
                var r = e.call(this, t ? 24 : 16) || this;
                return (r._isDataDriven = t), r;
              }
              return (
                r(t, e),
                (t.prototype.isDataDriven = function() {
                  return this._isDataDriven;
                }),
                (t.prototype.add = function(e, t, r, n, l, u, c, f, d, h, p) {
                  var v = this.array,
                    y = o.i1616to32(e, t);
                  if (
                    (v.push(y),
                    (y = o.i1616to32(Math.round(8 * r), Math.round(8 * n))),
                    v.push(y),
                    (y = o.i8888to32(l / 4, u / 4, 0, 0)),
                    v.push(y),
                    (y = o.i8888to32(
                      Math.ceil(10 * h),
                      i.radToByte(c),
                      10 * f,
                      Math.min(10 * d, 255)
                    )),
                    v.push(y),
                    this._isDataDriven)
                  ) {
                    if (!p) throw new Error("Expecting data driven values.");
                    var m = p.color,
                      x = m[3] * p.opacity * 255;
                    v.push(o.i8888to32(m[0] * x, m[1] * x, m[2] * x, x)),
                      (a[0] = p.size),
                      v.push(s[0]);
                  }
                }),
                t
              );
            })(o);
            t.SymbolVertexBuffer = f;
            var d = (function(e) {
              function t() {
                return e.call(this, 16) || this;
              }
              return (
                r(t, e),
                (t.prototype.add = function(e, t, r, n, i, a, s, l, u, c, f) {
                  var d = this.array,
                    h = o.i1616to32(2 * e + r, 2 * t + n);
                  d.push(h);
                  var p = a[3] * s * 255;
                  (h = o.i8888to32(a[0] * p, a[1] * p, a[2] * p, p)), d.push(h);
                  var v = c[3] * f * 255;
                  (h = o.i8888to32(c[0] * v, c[1] * v, c[2] * v, v)),
                    d.push(h),
                    (h = o.i8888to32(
                      Math.min(32 * l, 255),
                      Math.min(4 * u, 255),
                      Math.min(i, 255),
                      0
                    )),
                    d.push(h);
                }),
                t
              );
            })(o);
            t.CircleVertexBuffer = d;
          }.apply(null, n)) || (e.exports = i);
    },
    2165: function(e, t, r) {
      var n, i;
      (n = [r.dj.c(e.i), t, r(13), r(9)]),
        void 0 ===
          (i = function(e, t, n, i) {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.createProcessor = function(e, t) {
                var o;
                return (
                  "heatmap" === e
                    ? (o = i.create(function(e) {
                        return r
                          .e(49)
                          .then(
                            function() {
                              var t = [r(2282)];
                              e.apply(null, t);
                            }.bind(this)
                          )
                          .catch(r.oe);
                      }))
                    : "symbol" === e &&
                      (o = i.create(function(e) {
                        return Promise.all([r.e(14), r.e(55)])
                          .then(
                            function() {
                              var t = [r(2283)];
                              e.apply(null, t);
                            }.bind(this)
                          )
                          .catch(r.oe);
                      })),
                  o
                    .then(function(e) {
                      return e.default;
                    })
                    .then(function(e) {
                      var r = t.serviceAndViewInfo,
                        i = t.remoteClient,
                        o = t.tileStore;
                      return new e(n({}, r, { tileStore: o, remoteClient: i }));
                    })
                );
              });
          }.apply(null, n)) || (e.exports = i);
    },
    2166: function(e, t, r) {
      var n, i;
      (n = [
        r.dj.c(e.i),
        t,
        r(5),
        r(0),
        r(2026),
        r(15),
        r(2128),
        r(2052),
        r(2086),
        r(2012),
        r(259)
      ]),
        void 0 ===
          (i = function(e, t, r, n, i, o, a, s, l, u, c) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var f = { added: [], removed: [] },
              d = new i.default(),
              h = new c(0, 0, 0, 0),
              p = (function(e) {
                function t(t) {
                  var r = e.call(this) || this;
                  return (
                    (r._tiles = new Map()),
                    (r._index = a(
                      9,
                      o("csp-restrictions")
                        ? function(e) {
                            return {
                              minX: e.bounds[0],
                              minY: e.bounds[1],
                              maxX: e.bounds[2],
                              maxY: e.bounds[3]
                            };
                          }
                        : [
                            ".bounds[0]",
                            ".bounds[1]",
                            ".bounds[2]",
                            ".bounds[3]"
                          ]
                    )),
                    (r.tiles = []),
                    (r.tileInfo = t),
                    (r._tileInfoView = new s.TileInfoView(t)),
                    (r.spatialReference = t.spatialReference),
                    r
                  );
                }
                return (
                  r(t, e),
                  (t.prototype.destroy = function() {
                    this._tiles.clear();
                  }),
                  (t.prototype.has = function(e) {
                    return this._tiles.has(e);
                  }),
                  (t.prototype.get = function(e) {
                    return this._tiles.get(e);
                  }),
                  (t.prototype.findByKey = function(e) {
                    return this._tiles.get(e.id);
                  }),
                  (t.prototype.intersections = function(e, t) {
                    var r = "string" == typeof e ? this.get(e) : e;
                    if (!r) return [];
                    for (
                      var n = t * r.resolution,
                        i = r.bounds[0] - n,
                        o = r.bounds[1] - n,
                        a = r.bounds[2] + n,
                        s = r.bounds[3] + n,
                        l = [],
                        u = 0,
                        c = this._index.search({
                          minX: i,
                          minY: o,
                          maxX: a,
                          maxY: s
                        });
                      u < c.length;
                      u++
                    ) {
                      var f = c[u],
                        d = f.bounds.slice();
                      (d[0] = Math.max(d[0], i)),
                        (d[1] = Math.max(d[1], o)),
                        (d[2] = Math.min(d[2], a)),
                        (d[3] = Math.min(d[3], s)),
                        d[2] - d[0] > 0 &&
                          d[3] - d[1] > 0 &&
                          l.push({ bounds: d, tile: f });
                    }
                    return l;
                  }),
                  (t.prototype.setViewState = function(e) {
                    var t = this._tileInfoView.getTileCoverage(e, 0);
                    if (t) {
                      var r = t.spans,
                        n = t.lodInfo,
                        i = n.level;
                      if (r.length > 0)
                        for (var o = 0, a = r; o < a.length; o++)
                          for (
                            var s = a[o],
                              u = s.row,
                              c = s.colFrom,
                              p = s.colTo,
                              v = c;
                            v <= p;
                            v++
                          ) {
                            var y = h.set(
                              i,
                              u,
                              n.normalizeCol(v),
                              n.getWorldForColumn(v)
                            ).id;
                            if ((d.add(y), !this.has(y))) {
                              var m = new l.default(this._tileInfoView, y);
                              this._tiles.set(y, m),
                                this._index.insert(m),
                                this.tiles.push(m),
                                f.added.push(m);
                            }
                          }
                      for (var x = this.tiles.length - 1; x >= 0; x--) {
                        m = this.tiles[x];
                        d.has(m.id) ||
                          (this._tiles.delete(m.id),
                          this.tiles.splice(x, 1),
                          this._index.remove(m),
                          f.removed.push(m));
                      }
                      (f.added.length || f.removed.length) &&
                        this.emit("update", f),
                        d.clear(),
                        (f.added.length = 0),
                        (f.removed.length = 0);
                    }
                  }),
                  t
                );
              })(u.default);
            t.default = p;
          }.apply(null, n)) || (e.exports = i);
    },
    2167: function(e, t, r) {
      var n, i;
      (n = [r(12), r(28)]),
        void 0 ===
          (i = function(e, t) {
            var r = /^\s*"([\S\s]*)"\s*$/,
              n = /""/g,
              i = /"/g;
            function o(e, t) {
              var r,
                n = {},
                i = e.length;
              for (r = 0; r < i; r++) n[e[r]] = t[r];
              return n;
            }
            return t(null, {
              fieldNames: null,
              delimiter: ",",
              newline: "\r\n",
              trim: !1,
              parse: function(t) {
                var i,
                  a,
                  s,
                  l,
                  u,
                  c,
                  f,
                  d,
                  h = [],
                  p = t.split(this.newline),
                  v = this.fieldNames,
                  y = 0,
                  m = [],
                  x = "",
                  g = "";
                e: for (c = 0, s = p.length; c < s; c++)
                  if (e.trim(p[c])) {
                    for (
                      f = 0, l = (i = p[c].split(this.delimiter)).length;
                      f < l;
                      f++
                    ) {
                      for (
                        d = -1, x += g + (a = i[f]), g = "";
                        (d = a.indexOf('"', d + 1)) >= 0;

                      )
                        y++;
                      if (y % 2 == 0) {
                        if (y > 0) {
                          if (!(u = r.exec(x))) {
                            console.warn(
                              "Csv: discarding row with invalid value: " + x
                            ),
                              (m = []),
                              (x = ""),
                              (y = 0);
                            continue e;
                          }
                          m.push(u[1].replace(n, '"'));
                        } else m.push(this.trim || !v ? e.trim(x) : x);
                        (x = ""), (y = 0);
                      } else g = this.delimiter;
                    }
                    0 === y
                      ? (v ? h.push(o(v, m)) : (v = this.fieldNames = m),
                        (m = []))
                      : (g = this.newline);
                  }
                return h;
              },
              toCsv: function(e) {
                return this.stringify(this.data, e);
              },
              stringify: function(e, t) {
                var r,
                  n,
                  o,
                  a,
                  s = (t = t || {}).alwaysQuote,
                  l = this.fieldNames,
                  u = this.delimiter,
                  c = this.newline,
                  f = "";
                for (r = -1; r < e.length; r++)
                  for (r > -1 && (f += c), n = 0; n < l.length; n++)
                    (null !== (o = r < 0 ? l[n] : e[r][l[n]]) &&
                      void 0 !== o) ||
                      (o = ""),
                      "string" != typeof o && (o = o.toString()),
                      (a = s || o.indexOf('"') >= 0 || o.indexOf(u) >= 0),
                      (f +=
                        (n > 0 ? u : "") +
                        (a ? '"' + o.replace(i, '""') + '"' : o));
                return t.trailingNewline && (f += c), f;
              }
            });
          }.apply(null, n)) || (e.exports = i);
    }
  }
]),
  (function() {
    (this || window).webpackJsonp.registerAbsMids({
      "esri/views/3d/layers/PointCloudWorker": 1964,
      "esri/views/3d/layers/SceneLayerWorker": 1965,
      "esri/views/vectorTiles/WorkerTileHandler": 1972,
      "esri/views/2d/layers/features/Pipeline": 1973,
      "esri/layers/graphics/sources/support/CSVSourceWorker": 1974,
      "esri/views/2d/support/Evented": 2012,
      "esri/views/2d/tiling/TileStrategy": 2023,
      "esri/views/3d/support/orientedBoundingBox": 2029,
      "esri/views/3d/layers/i3s/I3SBinaryReader": 2032,
      "esri/views/2d/engine/webgl/GeometryUtils": 2043,
      "esri/views/vectorTiles/Bucket": 2057,
      "esri/views/3d/layers/i3s/LEPCC": 2058,
      "esri/views/vectorTiles/MemoryBuffer": 2075,
      "esri/views/3d/layers/i3s/PointCloudRendererUtil": 2077,
      "esri/views/2d/layers/features/controllers": 2085,
      "esri/views/3d/layers/i3s/I3SGeometryUtil": 2087,
      "esri/views/3d/layers/i3s/I3SProjectionUtil": 2088,
      "esri/views/3d/support/dito": 2089,
      "esri/views/vectorTiles/FillBucket": 2120,
      "esri/core/executeAsync": 2121,
      "esri/views/vectorTiles/BackgroundBucket": 2122,
      "esri/views/vectorTiles/CircleBucket": 2123,
      "esri/views/vectorTiles/LineBucket": 2124,
      "esri/views/vectorTiles/Placement": 2126,
      "esri/views/vectorTiles/SymbolBucket": 2127,
      "esri/views/vectorTiles/WorkerTile": 2158,
      "esri/views/vectorTiles/IndexMemoryBuffer": 2159,
      "esri/views/vectorTiles/Conflict": 2160,
      "esri/views/vectorTiles/TileParser": 2161,
      "esri/views/vectorTiles/Feature": 2162,
      "esri/views/vectorTiles/SourceLayerData": 2163,
      "esri/views/vectorTiles/VertexMemoryBuffer": 2164,
      "esri/views/2d/layers/features/processors": 2165,
      "esri/views/2d/layers/features/support/TileStore": 2166,
      "dstore/Csv": 2167
    });
  })();
