(window.webpackJsonp = window.webpackJsonp || []).push([
  [63],
  {
    1971: function(e, t, i) {
      var r, a;
      (r = [i.dj.c(e.i), t, i(2156), i(2157)]),
        void 0 ===
          (a = function(e, t, i, r) {
            function a(e) {
              if (
                (function(e) {
                  return null != (e && e.allowedValues);
                })(e.params)
              ) {
                var t = e.params.allowedValues;
                if (t) {
                  if (
                    (t = t.map(function(e) {
                      return JSON.stringify(e);
                    })).length > l
                  ) {
                    var i = "(" + (t.length - l) + " more...)";
                    (t = t.slice(0, l)).push(i);
                  }
                  e.message = "should be equal to one of: " + t.join(", ");
                }
              } else
                (function(e) {
                  return null != (e && e.additionalProperty);
                })(e.params) &&
                  (e.message =
                    "should NOT have additional property: " +
                    e.params.additionalProperty);
              return e;
            }
            function n(e) {
              var t = i.json.definitions[o(e)];
              if (!t)
                throw new Error(
                  "invalid schema name to validate against '" + e + "'"
                );
              var r = {};
              for (var a in t) r[a] = t[a];
              return (r.definitions = i.json.definitions), r;
            }
            function o(e) {
              return e ? e + "_schema.json" : "webScene_schema.json";
            }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var s = new r({ allErrors: !0, extendRefs: !0 });
            s.addSchema(i.json, o());
            var l = 5,
              d = 10;
            t.validate = function(e, t) {
              if (
                ((function(e) {
                  var t = o(e);
                  if (!s.getSchema(t)) {
                    var i = n(e);
                    s.addSchema(i, t);
                  }
                })(t),
                !s.validate(o(t), e))
              ) {
                var i = {},
                  r = s.errors
                    .map(a)
                    .map(function(e, t) {
                      return { e: e, i: t };
                    })
                    .sort(function(e, t) {
                      var i = e.e,
                        r = e.i,
                        a = t.e,
                        n = t.i,
                        o = i.dataPath ? i.dataPath.split(".").length : 0,
                        s = a.dataPath ? a.dataPath.split(".").length : 0;
                      return o === s ? r - n : s - o;
                    })
                    .map(function(e) {
                      var t = e.e;
                      return (t.dataPath ? t.dataPath + ": " : "") + t.message;
                    })
                    .filter(function(e) {
                      var t = !i[e];
                      return (i[e] = !0), t;
                    });
                if (r.length > d) {
                  var l = "(" + (r.length - d) + " more...)";
                  (r = r.slice(0, d)).push(l);
                }
                return r;
              }
              return [];
            };
          }.apply(null, r)) || (e.exports = a);
    },
    2156: function(e, t, i) {
      var r, a;
      (r = [i.dj.c(e.i), t]),
        void 0 ===
          (a = function(e, t) {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.json = {
                title: "Webscene",
                type: "object",
                $schema: "http://json-schema.org/draft-04/schema",
                description:
                  "The web scene data lists the basemap, operational layers, and presentation slides to be used in the web scene. It also contains information about pop-up windows and layer styling overrides to be used in the web scene. A version property allows you to supply the version of the web scene JSON format being used.",
                properties: {
                  applicationProperties: {
                    type: "object",
                    $ref: "#/definitions/applicationProperties_schema.json"
                  },
                  authoringApp: {
                    type: "string",
                    description:
                      "String value indicating the application which authored the webmap"
                  },
                  authoringAppVersion: {
                    type: "string",
                    description:
                      "String value indicating the authoring App's version number."
                  },
                  baseMap: {
                    type: "object",
                    description:
                      "Basemaps give the web scene a geographic context.",
                    $ref: "#/definitions/baseMap_schema.json"
                  },
                  clippingArea: {
                    type: "object",
                    $ref: "#/definitions/clippingArea_schema.json"
                  },
                  ground: {
                    type: "object",
                    $ref: "#/definitions/ground_schema.json"
                  },
                  heightModelInfo: {
                    type: "object",
                    $ref: "#/definitions/heightModelInfo_schema.json"
                  },
                  initialState: {
                    type: "object",
                    description:
                      "An envelope object defines the initial state at which to open the scene.",
                    $ref: "#/definitions/initialState_schema.json"
                  },
                  mapRangeInfo: {
                    type: "object",
                    description: "Map Range Information",
                    $ref: "#/definitions/mapRangeInfo_schema.json"
                  },
                  operationalLayers: {
                    type: "array",
                    description:
                      "Operational layers contain business data which are used to make thematic scenes.",
                    items: {
                      type: "object",
                      $ref: "#/definitions/operationalLayers_schema.json"
                    },
                    uniqueItems: !0
                  },
                  presentation: {
                    type: "object",
                    $ref: "#/definitions/presentation_schema.json"
                  },
                  spatialReference: {
                    type: "object",
                    description:
                      "An object used to specify the spatial reference of the given geometry.",
                    $ref: "#/definitions/spatialReference_schema.json"
                  },
                  tables: {
                    type: "array",
                    description: "An array of table objects.",
                    items: {
                      type: "object",
                      $ref: "#/definitions/table_schema.json"
                    }
                  },
                  version: {
                    type: "string",
                    description:
                      "Root element in the web scene specifying a string value indicating the web scene version.",
                    $ref: "#/definitions/version_schema.json"
                  },
                  viewingMode: { type: "string", enum: ["global", "local"] },
                  widgets: {
                    type: "object",
                    description:
                      "the widgets object contains widgets that should be exposed to the user.",
                    $ref: "#/definitions/widgets_schema.json"
                  }
                },
                required: [
                  "ground",
                  "operationalLayers",
                  "spatialReference",
                  "version",
                  "viewingMode"
                ],
                additionalProperties: !1,
                definitions: {
                  "applicationProperties_schema.json": {
                    title: "applicationProperties",
                    type: "object",
                    description:
                      "Configuration of application and UI elements.",
                    properties: {
                      viewing: {
                        type: "object",
                        $ref: "#/definitions/viewing_schema.json"
                      }
                    },
                    additionalProperties: !1
                  },
                  "baseMap_schema.json": {
                    title: "baseMap",
                    type: "object",
                    description:
                      "The basemap provides geographic context to the map and scene.",
                    properties: {
                      baseMapLayers: {
                        type: "array",
                        description:
                          "An array of baseMapLayer objects defining the basemaps used in the web scene.",
                        items: {
                          type: "object",
                          $ref: "#/definitions/baseMapLayer_schema.json"
                        },
                        uniqueItems: !0
                      },
                      elevationLayers: {
                        type: "array",
                        description:
                          '<em>Deprecated, use `ground.layers` instead <a href="#elevationLayers"><sup>1</sup></a>.</em> An array of elevationLayer objects defining the basemaps used in the web scene.',
                        items: {
                          type: "object",
                          $ref: "#/definitions/elevationLayer_schema.json"
                        },
                        uniqueItems: !0
                      },
                      id: {
                        type: "string",
                        description:
                          "A unique identifying string for the basemap."
                      },
                      title: {
                        type: "string",
                        description:
                          "Required string title for the basemap that can be used in a table of contents."
                      },
                      transparency: {
                        type: "number",
                        description:
                          "The degree of transparency applied to the basemap on the client side, where 0 is fully opaque and 1 is fully transparent."
                      }
                    },
                    required: ["baseMapLayers", "title"],
                    additionalProperties: !1
                  },
                  "clippingArea_schema.json": {
                    title: "clippingArea",
                    type: "object",
                    description: "Defines area to be clipped for display.",
                    properties: {
                      clip: {
                        type: "boolean",
                        description: "enable / disable clipping"
                      },
                      geometry: {
                        type: "object",
                        description: "envelope of clip area",
                        $ref: "#/definitions/extent_schema.json"
                      }
                    }
                  },
                  "ground_schema.json": {
                    title: "Ground",
                    type: "object",
                    description:
                      "Ground defines the main surface of the web scene, based on elevation layers.",
                    properties: {
                      layers: {
                        type: "array",
                        description:
                          "An array of elevationLayer objects defining the elevation of the ground in the web scene.",
                        items: {
                          type: "object",
                          $ref: "#/definitions/elevationLayer_schema.json"
                        },
                        uniqueItems: !0
                      },
                      navigationConstraint: {
                        description:
                          "Object determining whether the camera is constrained to navigate only above, or also under the ground surface. If not specified, navigation is constrained to above ground.",
                        $ref: "#/definitions/navigationConstraint_schema.json"
                      },
                      surfaceColor: {
                        description:
                          "Defines the color of the ground surface, displayed underneath the basemap. If no color, the default grid is shown.",
                        $ref: "#/definitions/color_schema.json"
                      },
                      transparency: {
                        type: "integer",
                        description:
                          "The transparency of the ground surface. It is used for seeing through the ground, therefore this property also changes the transparency of the basemap. Draped operational layers are not affected by this property. The value has to lie between `100` (full transparency) and `0` (full opacity).",
                        minimum: 0,
                        maximum: 100
                      }
                    },
                    required: ["layers"],
                    additionalProperties: !1
                  },
                  "heightModelInfo_schema.json": {
                    title: "heightModelInfo",
                    type: "object",
                    description:
                      "An object that defines the characteristics of the vertical coordinate system used by the web scene.",
                    properties: {
                      heightModel: {
                        type: "string",
                        description:
                          "The surface type or height model of the vertical coordinate system.",
                        enum: ["ellipsoidal", "gravity_related_height"],
                        default: "ellipsoidal"
                      },
                      heightUnit: {
                        type: "string",
                        description:
                          'The unit of the vertical coordinate system.<a href="#heightUnit"><sup>1</sup></a>'
                      },
                      vertCRS: {
                        type: "string",
                        description:
                          "(Optional) The datum realization of the vertical coordinate system."
                      }
                    },
                    required: ["heightModel", "heightUnit"],
                    additionalProperties: !1
                  },
                  "initialState_schema.json": {
                    title: "initialState",
                    type: "object",
                    description:
                      "Defines the initial state when opening web scene.",
                    properties: {
                      environment: {
                        type: "object",
                        $ref: "#/definitions/environment_schema.json"
                      },
                      viewpoint: {
                        type: "object",
                        description:
                          "Describes a point of view for a 2D or 3D view. In a 3D view, it is determined using a camera position.",
                        $ref: "#/definitions/viewpoint_schema.json"
                      }
                    },
                    required: ["environment", "viewpoint"],
                    additionalProperties: !1
                  },
                  "mapRangeInfo_schema.json": {
                    title: "Map Range Information",
                    description: "Map range information",
                    properties: {
                      activeRangeName: {
                        type: "string",
                        description:
                          "Active range ID that slider/picker acts upon."
                      },
                      currentRangeExtent: {
                        type: "array",
                        description: "Current range for the active range.",
                        items: { type: "number" },
                        minItems: 2,
                        maxItems: 2
                      },
                      fullRangeExtent: {
                        type: "array",
                        description:
                          "Full range extent for the active range to be presented in the UI.",
                        items: { type: "number" },
                        minItems: 2,
                        maxItems: 2
                      }
                    },
                    required: ["activeRangeName"],
                    additionalProperties: !1
                  },
                  "operationalLayers_schema.json": {
                    title: "operationalLayers",
                    type: "object",
                    description:
                      "Operational layers contain your data. Usually, a basemap sits beneath your operational layers to give them geographic context.",
                    oneOf: [
                      { $ref: "#/definitions/csvLayer_schema.json" },
                      { $ref: "#/definitions/featureLayer_schema.json" },
                      { $ref: "#/definitions/groupLayer_schema.json" },
                      { $ref: "#/definitions/imageServiceLayer_schema.json" },
                      { $ref: "#/definitions/integratedMeshLayer_schema.json" },
                      { $ref: "#/definitions/mapServiceLayer_schema.json" },
                      { $ref: "#/definitions/pointCloudLayer_schema.json" },
                      { $ref: "#/definitions/sceneLayer_schema.json" },
                      {
                        $ref: "#/definitions/tiledImageServiceLayer_schema.json"
                      },
                      {
                        $ref: "#/definitions/tiledMapServiceLayer_schema.json"
                      },
                      { $ref: "#/definitions/vectorTileLayer_schema.json" },
                      { $ref: "#/definitions/webTiledLayer_schema.json" },
                      { $ref: "#/definitions/wmsLayer_schema.json" }
                    ]
                  },
                  "presentation_schema.json": {
                    title: "presentation",
                    type: "object",
                    description:
                      "A presentation consists of multiple slides, where each slide is a specific view into the web scene.",
                    properties: {
                      slides: {
                        type: "array",
                        description: "Array of slide objects.",
                        items: {
                          type: "object",
                          $ref: "#/definitions/slide_schema.json"
                        }
                      }
                    },
                    additionalProperties: !1
                  },
                  "spatialReference_schema.json": {
                    title: "spatialReference",
                    type: "object",
                    description:
                      "The spatialReference object is located at the top level of the JSON hierarchy. In addition to this, it is also available within the operationalLayer and basemap objects.\n\nMany predefined spatial references have already been defined and are available for use. A spatial reference can be defined using a well-known ID (WKID) or well-known text (WKT). The default tolerance and resolution values for the associated coordinate system are used.\n\nA spatial reference can optionally include a definition for a vertical coordinate system (VCS), which is used to interpret the z values of a geometry.",
                    properties: {
                      latestVcsWkid: {
                        type: "number",
                        description:
                          "(Optional) The current wkid value of the vertical coordinate system."
                      },
                      latestWkid: {
                        type: "number",
                        description:
                          "(Optional) Identifies the current wkid value associated with the same spatial reference. For example a WKID of '102100' (Web Mercator) has a latestWKid of '3857'."
                      },
                      vcsWkid: {
                        type: "number",
                        description:
                          "(Optional) The wkid value of the vertical coordinate system."
                      },
                      wkid: {
                        type: "number",
                        description:
                          "The well-known ID (WKID) of the coordinate system. Specify either WKID or the well-known text (WKT) of the coordinate system.",
                        default: 102100
                      },
                      wkt: {
                        type: "string",
                        description:
                          "The well-known text (WKT) of the coordinate system. Specify either WKT or WKID of the coordinate system."
                      }
                    },
                    oneOf: [{ required: ["wkt"] }, { required: ["wkid"] }],
                    additionalProperties: !1
                  },
                  "table_schema.json": {
                    title: "table",
                    type: "object",
                    description:
                      "Root element in the web scene specifying an array of table objects.",
                    properties: {
                      capabilities: {
                        type: "string",
                        description:
                          "A comma-separated string listing which editing operations are allowed on an editable feature service. Available operations include: 'Create', 'Delete', 'Query', 'Update', and 'Editing'."
                      },
                      definitionEditor: {
                        type: "object",
                        description:
                          "Object indicating the definitionEditor used as a layer's interactive filter.",
                        $ref: "#/definitions/definitionEditor_schema.json"
                      },
                      id: {
                        type: "string",
                        description: "Unique string identifier for the table."
                      },
                      itemId: {
                        type: "string",
                        description:
                          "Unique string value indicating an item registered in ArcGIS Online or your organization's portal."
                      },
                      layerDefinition: {
                        type: "object",
                        description:
                          "A layerDefinition object defining a definition expression for the table.",
                        $ref: "#/definitions/layerDefinition_schema.json"
                      },
                      popupInfo: {
                        type: "object",
                        description:
                          "An object defining the content of popup windows when you query a record and the sort option for child related records.",
                        $ref: "#/definitions/popupInfo_schema.json"
                      },
                      title: {
                        type: "string",
                        description: "String value for the title of the table."
                      },
                      url: {
                        type: "string",
                        description:
                          "String value indicating the URL reference of the hosted table."
                      }
                    },
                    additionalProperties: !1
                  },
                  "version_schema.json": {
                    title: "version",
                    type: "string",
                    description:
                      "Root element in the web scene specifying a string value indicating the web scene version.",
                    enum: ["1.8", "1.9", "1.10", "1.11"]
                  },
                  "widgets_schema.json": {
                    title: "widgets",
                    type: "object",
                    description:
                      "The widgets object contains widgets that should be exposed to the user.",
                    properties: {
                      range: {
                        type: "object",
                        description: "Active range.",
                        $ref: "#/definitions/range_schema.json"
                      }
                    },
                    additionalProperties: !1
                  },
                  "viewing_schema.json": {
                    title: "viewing",
                    type: "object",
                    description:
                      "View-specific properties of application and UI elements.",
                    properties: {
                      search: {
                        type: "object",
                        $ref: "#/definitions/search_schema.json"
                      }
                    },
                    additionalProperties: !1
                  },
                  "baseMapLayer_schema.json": {
                    title: "baseMapLayer",
                    type: "object",
                    description:
                      "A basemap layer is a layer that provides geographic context to the scene. The following is a list of possible basemap layer types.",
                    oneOf: [
                      { $ref: "#/definitions/imageServiceLayer_schema.json" },
                      { $ref: "#/definitions/mapServiceLayer_schema.json" },
                      { $ref: "#/definitions/openStreetMapLayer_schema.json" },
                      {
                        $ref: "#/definitions/tiledImageServiceLayer_schema.json"
                      },
                      {
                        $ref: "#/definitions/tiledMapServiceLayer_schema.json"
                      },
                      { $ref: "#/definitions/vectorTileLayer_schema.json" },
                      { $ref: "#/definitions/webTiledLayer_schema.json" },
                      { $ref: "#/definitions/wmsLayer_schema.json" }
                    ]
                  },
                  "elevationLayer_schema.json": {
                    title: "elevationLayer",
                    type: "object",
                    description:
                      "ElevationLayer is a tile layer used for rendering elevation in web scenes.",
                    properties: {
                      id: {
                        type: "string",
                        description: "A unique identifying string for the layer"
                      },
                      itemId: {
                        type: "string",
                        description:
                          "Optional string containing the item ID of the service if it's registered on ArcGIS Online or your organization's portal."
                      },
                      layerType: {
                        type: "string",
                        description: "String indicating the layer type",
                        enum: ["ArcGISTiledElevationServiceLayer"]
                      },
                      listMode: {
                        type: "string",
                        description:
                          "To show or hide the elevation layer in the layer list",
                        enum: ["show", "hide"]
                      },
                      title: {
                        type: "string",
                        description:
                          "A user-friendly string title for the layer that can be used in a table of contents. If this is not included, a title is derived from the service."
                      },
                      url: {
                        type: "string",
                        description:
                          "The URL to the layer.If the layer is not from a web service but rather a feature collection, then the url property is omitted",
                        format: "uri"
                      },
                      visibility: {
                        type: "boolean",
                        description:
                          "Boolean property determining whether the layer is initially visible in the web scene.",
                        default: !0
                      }
                    },
                    required: ["id", "layerType", "title", "url"],
                    additionalProperties: !1
                  },
                  "extent_schema.json": {
                    title: "extent",
                    type: "object",
                    description:
                      "This object defines the bounding geometry given the lower-left and upper-right corners of the bounding box. A [spatial reference](spatialReference.md) is also required.",
                    properties: {
                      spatialReference: {
                        type: "object",
                        description:
                          "An object used to specify the spatial reference of the given geometry.",
                        $ref: "#/definitions/spatialReference_schema.json"
                      },
                      xmax: {
                        type: "number",
                        description:
                          "A numeric value indicating the top-right X-coordinate of an extent envelope."
                      },
                      xmin: {
                        description:
                          "A numeric value indicating the bottom-left X-coordinate of an extent envelope.",
                        oneOf: [
                          { type: "number" },
                          { type: "null" },
                          { type: "string", enum: ["NaN"] }
                        ]
                      },
                      ymax: {
                        type: "number",
                        description:
                          "A numeric value indicating the top-right Y-coordinate of an extent envelope."
                      },
                      ymin: {
                        type: "number",
                        description:
                          "A numeric value indicating the bottom-left Y-coordinate of an extent envelope."
                      }
                    },
                    additionalProperties: !1
                  },
                  "navigationConstraint_schema.json": {
                    title: "Navigation Constraint",
                    type: "object",
                    description:
                      "Object determining whether the camera is constrained to navigate only above, or also under the ground surface.",
                    properties: {
                      type: { type: "string", enum: ["none", "stayAbove"] }
                    },
                    required: ["type"],
                    additionalProperties: !1
                  },
                  "color_schema.json": {
                    title: "color",
                    type: "array",
                    description:
                      "Color is represented as a three or four-element array. The four elements represent values for red, green, blue, and alpha in that order. Values range from 0 through 255. If color is undefined for a symbol, the color value is null.",
                    items: { type: "integer", minimum: 0, maximum: 255 },
                    minItems: 3,
                    maxItems: 4,
                    additionalProperties: !1
                  },
                  "environment_schema.json": {
                    title: "environment",
                    type: "object",
                    description:
                      "Represents settings that affect the environment in which the web scene is displayed. It is entirely stored as part of the initial state of the web scene, and partially in the slides in the presentation.",
                    properties: {
                      atmosphereEnabled: {
                        type: "boolean",
                        description:
                          "Whether the atmosphere should be visualized. This includes sky and haze effects.",
                        default: !0
                      },
                      background: {
                        type: "object",
                        description:
                          "The background is what is displayed behind any scene objects, stars and atmosphere.",
                        $ref:
                          "#/definitions/environment_background_color_schema.json"
                      },
                      lighting: {
                        type: "object",
                        $ref: "#/definitions/lighting_schema.json"
                      },
                      starsEnabled: {
                        type: "boolean",
                        description:
                          "Whether stars should be displayed in the sky.",
                        default: !0
                      }
                    },
                    additionalProperties: !1
                  },
                  "viewpoint_schema.json": {
                    title: "viewpoint",
                    type: "object",
                    description:
                      "The location or camera position from which to view the scene.",
                    properties: {
                      camera: {
                        type: "object",
                        $ref: "#/definitions/camera_schema.json"
                      },
                      rotation: {
                        type: "number",
                        description:
                          "The rotation of due north in relation to the top of the view in degrees.",
                        minimum: 0,
                        maximum: 360
                      },
                      scale: {
                        type: "number",
                        description: "The scale of the viewpoint."
                      },
                      targetGeometry: {
                        type: "object",
                        description:
                          "The target geometry framed by the viewpoint.",
                        oneOf: [
                          {
                            description: "",
                            $ref: "#/definitions/geometry_schema.json"
                          },
                          {
                            description: "",
                            $ref: "#/definitions/extent_schema.json"
                          }
                        ]
                      }
                    },
                    required: ["camera"],
                    additionalProperties: !1
                  },
                  "csvLayer_schema.json": {
                    title: "CSV Layer (CSV)",
                    type: "object",
                    description:
                      "The CSV layer type references a CSV or TXT file from a publically-accessible web server. It then dynamically loads into the scene at run time. The CSV layer will maintain a reference to the CSV resource.",
                    properties: {
                      columnDelimiter: {
                        type: "string",
                        description:
                          "A string defining the character used to separate columns in a CSV file.",
                        enum: [",", " ", ";", "|", "\t"]
                      },
                      disablePopup: {
                        type: "boolean",
                        description:
                          "Indicates whether to allow a client to ignore popups defined by the service item."
                      },
                      id: {
                        type: "string",
                        description:
                          "A unique identifying string for the layer."
                      },
                      layerDefinition: {
                        description:
                          "Additional properties that define drawing information and other configurations for the layer.",
                        allOf: [
                          { $ref: "#/definitions/layerDefinition_schema.json" },
                          {
                            properties: {
                              definitionExpression: {},
                              drawingInfo: {},
                              elevationInfo: {},
                              featureReduction: {},
                              fields: {},
                              maxScale: {},
                              minScale: {},
                              name: {},
                              type: {},
                              typeIdField: {},
                              types: {}
                            },
                            additionalProperties: !1
                          }
                        ]
                      },
                      layerType: {
                        type: "string",
                        description: "String indicating the layer type.",
                        enum: ["CSV"]
                      },
                      listMode: {
                        type: "string",
                        description:
                          "To show or hide the layer in the layer list",
                        enum: ["show", "hide"]
                      },
                      locationInfo: {
                        type: "object",
                        description:
                          "A locationInfo object defining how location information will be retrieved from a CSV file.",
                        $ref: "#/definitions/locationInfo_schema.json"
                      },
                      opacity: {
                        type: "number",
                        description:
                          "The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.",
                        minimum: 0,
                        maximum: 1,
                        default: 1
                      },
                      popupInfo: {
                        type: "object",
                        description:
                          "A popupInfo object defining the content of popup windows when you click or query a feature.",
                        $ref: "#/definitions/popupInfo_schema.json"
                      },
                      refreshInterval: {
                        type: "number",
                        description:
                          "Refresh interval of the layer in minutes. Non-zero value indicates automatic layer refresh at the specified interval. Value of 0 indicates auto refresh is not enabled.",
                        default: 0
                      },
                      screenSizePerspective: {
                        type: "boolean",
                        description:
                          "Apply [perspective scaling](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#screenSizePerspectiveEnabled) to screen-size symbols.",
                        default: !1
                      },
                      showLabels: {
                        type: "boolean",
                        description:
                          "Labels will display if this property is set to `true` and the layer also has a [labelingInfo](labelingInfo.md) property associated with it. This property can get stored in the web scene config.",
                        default: !1
                      },
                      showLegend: {
                        type: "boolean",
                        description:
                          "Boolean value indicating whether to display the layer in the legend. Default value is `true`.",
                        default: !0
                      },
                      title: {
                        type: "string",
                        description:
                          "A user-friendly string title for the layer that can be used in a table of contents."
                      },
                      url: {
                        type: "string",
                        description: "The URL to the layer.",
                        format: "uri"
                      },
                      visibility: {
                        type: "boolean",
                        description:
                          "Boolean property determining whether the layer is initially visible in the web scene.",
                        default: !0
                      }
                    },
                    required: ["id", "layerType", "title", "url"],
                    additionalProperties: !1
                  },
                  "featureLayer_schema.json": {
                    title: "Feature Layer (ArcGISFeatureLayer)",
                    type: "object",
                    description:
                      "Feature layers can be created by referencing a layer from either a map service or a feature service. Use a map service if you just want to retrieve geometries and attributes from the server and symbolize them yourself. Use a feature service if you want to take advantage of symbols from the service's source map document. Also, use a feature service if you plan on doing editing with the feature layer. Feature layers honor any feature templates configured in the source map document. Feature collection objects are used to create a feature layer based on the supplied definition.",
                    properties: {
                      disablePopup: {
                        type: "boolean",
                        description:
                          "Indicates whether to allow a client to ignore popups defined by the service item."
                      },
                      id: {
                        type: "string",
                        description:
                          "A unique identifying string for the layer."
                      },
                      itemId: {
                        type: "string",
                        description:
                          "Optional string containing the item ID of the service if it's registered on ArcGIS Online or your organization's portal."
                      },
                      layerDefinition: {
                        description:
                          "Additional properties that define drawing information and other configurations for the layer.",
                        allOf: [
                          { $ref: "#/definitions/layerDefinition_schema.json" },
                          {
                            properties: {
                              capabilities: {},
                              definitionExpression: {},
                              drawingInfo: {},
                              elevationInfo: {},
                              featureReduction: {},
                              maxScale: {},
                              minScale: {}
                            },
                            additionalProperties: !1
                          }
                        ]
                      },
                      layerType: {
                        type: "string",
                        description: "String indicating the layer type.",
                        enum: ["ArcGISFeatureLayer"]
                      },
                      listMode: {
                        type: "string",
                        description: "To show or hide layers in the layer list",
                        enum: ["show", "hide"]
                      },
                      mode: {
                        type: "integer",
                        description:
                          "0 is snapshot mode. 1 is on-demand mode. 2 is selection-only mode. Used with ArcGIS feature services and individual layers in ArcGIS map services.",
                        minimum: 0,
                        maximum: 2
                      },
                      opacity: {
                        type: "number",
                        description:
                          "The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.",
                        minimum: 0,
                        maximum: 1,
                        default: 1
                      },
                      popupInfo: {
                        type: "object",
                        description:
                          "A popupInfo object defining the content of popup windows when you click or query a feature.",
                        $ref: "#/definitions/popupInfo_schema.json"
                      },
                      refreshInterval: {
                        type: "number",
                        description:
                          "Refresh interval of the layer in minutes. Non-zero value indicates automatic layer refresh at the specified interval. Value of 0 indicates auto refresh is not enabled.",
                        default: 0
                      },
                      screenSizePerspective: {
                        type: "boolean",
                        description:
                          "Apply [perspective scaling](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#screenSizePerspectiveEnabled) to screen-size symbols.",
                        default: !1
                      },
                      showLabels: {
                        type: "boolean",
                        description:
                          "Labels will display if this property is set to `true` and the layer also has a [labelingInfo](labelingInfo.md) property associated with it. This property can get stored in the web scene config and in the item/data.",
                        default: !1
                      },
                      showLegend: {
                        type: "boolean",
                        description:
                          "Boolean value indicating whether to display the layer in the legend. Default value is `true`.",
                        default: !0
                      },
                      title: {
                        type: "string",
                        description:
                          "A user-friendly string title for the layer that can be used in a table of contents."
                      },
                      url: {
                        type: "string",
                        description:
                          "The URL to the layer. If the layer is not from a web service but rather a feature collection, then the url property is omitted.",
                        format: "uri"
                      },
                      visibility: {
                        type: "boolean",
                        description:
                          "Boolean property determining whether the layer is initially visible in the web scene.",
                        default: !0
                      }
                    },
                    required: ["id", "layerType", "title"],
                    additionalProperties: !1
                  },
                  "groupLayer_schema.json": {
                    title: "Group Layer",
                    type: "object",
                    description:
                      "GroupLayer provides the ability to organize several sublayers into one common layer. Suppose there are several FeatureLayers that all represent water features in different dimensions. For example, wells (points), streams (lines), and lakes (polygons). The GroupLayer provides the functionality to treat them as one layer called Water Features even though they are stored as separate feature layers.",
                    properties: {
                      id: {
                        type: "string",
                        description: "A unique identifying string for the layer"
                      },
                      layerType: {
                        type: "string",
                        description: "String indicating the layer type",
                        enum: ["GroupLayer"]
                      },
                      layers: {
                        type: "array",
                        description: "list of child operationalLayers",
                        items: {
                          type: "object",
                          $ref: "#/definitions/operationalLayers_schema.json"
                        },
                        uniqueItems: !0
                      },
                      listMode: {
                        type: "string",
                        description:
                          "To show or hide the group layer in the layer list",
                        enum: ["show", "hide", "hide-children"]
                      },
                      opacity: {
                        type: "number",
                        description:
                          "The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency."
                      },
                      title: {
                        type: "string",
                        description:
                          "A user-friendly string title for the layer that can be used in a table of contents. If this is not included, a title is derived from the service"
                      },
                      visibility: {
                        type: "boolean",
                        description:
                          "Boolean property determining whether the layer is initially visible in the web scene",
                        default: !0
                      },
                      visibilityMode: {
                        type: "string",
                        description:
                          "How visibility of children is affected:independent, exclusive, inherited",
                        enum: ["independent", "exclusive", "inherited"]
                      }
                    },
                    required: ["id", "layerType", "title"],
                    additionalProperties: !1
                  },
                  "imageServiceLayer_schema.json": {
                    title: "Image Service Layer (ArcGISImageServiceLayer)",
                    type: "object",
                    description:
                      "An image service provides access to raster data through a web service. Multiple rasters can be served as one image service through mosaic dataset technology, dynamically processed and mosaicked on the fly. An image service supports accessing both the mosaicked image and its catalog, as well as individual rasters in the catalog. Also, image services can be cached (tiled) or uncached (dynamic). This object specifically details properties within uncached image services.",
                    properties: {
                      bandIds: {
                        type: "array",
                        description:
                          "An array of bandIds that are visible, can specify bands to export or rearrange band order(from image service).",
                        items: { type: "integer" }
                      },
                      compressionQuality: {
                        type: "number",
                        description:
                          "Controls how much loss the image will be subjected to by the compression algorithm (from image service).",
                        minimum: 0,
                        maximum: 100
                      },
                      disablePopup: {
                        type: "boolean",
                        description:
                          "Boolean property indicating whether to ignore popups defined by the service item.",
                        default: !1
                      },
                      format: {
                        type: "string",
                        description: "String value representing image format.",
                        enum: [
                          "jpgpng",
                          "png",
                          "png8",
                          "png24",
                          "jpg",
                          "bmp",
                          "gif",
                          "tiff",
                          "png32"
                        ],
                        default: "png"
                      },
                      id: {
                        type: "string",
                        description:
                          "A unique identifying string for the layer."
                      },
                      interpolation: {
                        type: "string",
                        description: "The algorithm used for interpolation.",
                        enum: [
                          "RSP_BilinearInterpolation",
                          "RSP_CubicConvolution",
                          "RSP_Majority",
                          "RSP_NearestNeighbor"
                        ]
                      },
                      isReference: {
                        type: "boolean",
                        description:
                          "This is applicable if used as a baseMapLayer. A boolean value indicating whether or not the baseMapLayer draws on top (true) of other layers, including operationalLayers , or below (false).",
                        default: !1
                      },
                      itemId: {
                        type: "string",
                        description:
                          "Optional string containing the item ID of the service if it's registered on ArcGIS Online or your organization's portal."
                      },
                      layerDefinition: {
                        allOf: [
                          { $ref: "#/definitions/layerDefinition_schema.json" },
                          {
                            properties: { definitionExpression: {} },
                            additionalProperties: !1
                          }
                        ]
                      },
                      layerType: {
                        type: "string",
                        description: "String indicating the layer type.",
                        enum: ["ArcGISImageServiceLayer"]
                      },
                      listMode: {
                        type: "string",
                        description: "To show or hide layers in the layer list",
                        enum: ["show", "hide"],
                        default: "show"
                      },
                      maxScale: {
                        type: "number",
                        description:
                          "A number representing the maximum scale at which the layer will be visible. The number is the scale's denominator.",
                        minimum: 0
                      },
                      minScale: {
                        type: "number",
                        description:
                          "A number representing the minimum scale at which the layer will be visible. The number is the scale's denominator.",
                        minimum: 0
                      },
                      mosaicRule: {
                        type: "object",
                        description:
                          "Specifies the mosaic rule when defining how individual images should be mosaicked.",
                        $ref: "#/definitions/mosaicRule_schema.json"
                      },
                      noData: {
                        type: "integer",
                        description:
                          "The pixel value that represents no information."
                      },
                      noDataInterpretation: {
                        type: "string",
                        description:
                          "A string value of interpretation of noData setting. Default is 'esriNoDataMatchAny' when noData is a number, and 'esriNoDataMatchAll' when noData is an array.",
                        enum: ["esriNoDataMatchAny", "esriNoDataMatchAll"],
                        default: "esriNoDataMatchAny"
                      },
                      opacity: {
                        type: "number",
                        description:
                          "The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.",
                        minimum: 0,
                        maximum: 1,
                        default: 1
                      },
                      pixelType: {
                        type: "string",
                        description:
                          "Pertains to the type of values stored in the raster, such as signed integer, unsigned integer, or floating point.",
                        enum: [
                          "C128",
                          "C64",
                          "F32",
                          "F64",
                          "S16",
                          "S32",
                          "S8",
                          "U1",
                          "U16",
                          "U2",
                          "U32",
                          "U4",
                          "U8",
                          "UNKNOWN"
                        ]
                      },
                      popupInfo: {
                        type: "object",
                        description:
                          "A popupInfo object defining the content of popup windows when you click or query a feature.",
                        $ref: "#/definitions/popupInfo_schema.json"
                      },
                      refreshInterval: {
                        type: "number",
                        description:
                          "Refresh interval of the layer in minutes. Non-zero value indicates automatic layer refresh at the specified interval. Value of 0 indicates auto refresh is not enabled.",
                        default: 0
                      },
                      renderingRule: {
                        type: "object",
                        description:
                          "Specifies the rendering rule for how the requested image should be rendered.",
                        $ref: "#/definitions/renderingRule_schema.json"
                      },
                      showLegend: {
                        type: "boolean",
                        description:
                          "Indicates whether to allow map authors the ability to control what layers should be shown in a client's legend control.",
                        default: !0
                      },
                      title: {
                        type: "string",
                        description:
                          "A user-friendly string title for the layer that can be used in a table of contents."
                      },
                      url: {
                        type: "string",
                        description: "The URL to the layer.",
                        format: "uri"
                      },
                      visibility: {
                        type: "boolean",
                        description:
                          "Boolean property determining whether the layer is initially visible in the web map.",
                        default: !0
                      }
                    },
                    required: ["layerType", "title", "url"],
                    additionalProperties: !1
                  },
                  "integratedMeshLayer_schema.json": {
                    title: "Integrated Mesh Layer (IntegratedMeshLayer)",
                    type: "object",
                    description:
                      "An integrated mesh can represent built and natural 3D features, such as building walls, trees, valleys, and cliffs, with realistic textures and includes elevation information.",
                    properties: {
                      id: {
                        type: "string",
                        description:
                          "A unique identifying string for the layer."
                      },
                      itemId: {
                        type: "string",
                        description:
                          "Optional string containing the item ID of the service if it's registered on ArcGIS Online or your organization's portal."
                      },
                      layerDefinition: {
                        type: "object",
                        description:
                          "A layerDefinition object defining the attribute schema and drawing information for the layer.",
                        allOf: [
                          { $ref: "#/definitions/layerDefinition_schema.json" },
                          {
                            properties: { elevationInfo: {} },
                            additionalProperties: !1
                          }
                        ]
                      },
                      layerType: {
                        type: "string",
                        description: "String indicating the layer type.",
                        enum: ["IntegratedMeshLayer"]
                      },
                      listMode: { type: "string", enum: ["show", "hide"] },
                      opacity: {
                        type: "number",
                        description:
                          "The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.",
                        minimum: 0,
                        maximum: 1,
                        default: 1
                      },
                      title: {
                        type: "string",
                        description:
                          "A user-friendly string title for the layer that can be used in a table of contents. If this is not included, a title is derived from the service."
                      },
                      url: {
                        type: "string",
                        description:
                          "The URL to the layer. If the layer is not from a web service but rather a feature collection, then the url property is omitted.",
                        format: "uri"
                      },
                      visibility: {
                        type: "boolean",
                        description:
                          "Boolean property determining whether the layer is initially visible in the web scene.",
                        default: !0
                      }
                    },
                    required: ["id", "layerType", "title", "url"],
                    additionalProperties: !1
                  },
                  "mapServiceLayer_schema.json": {
                    title: "Map Service Layer (ArcGISMapServiceLayer)",
                    type: "object",
                    description:
                      "Map services can be cached (tiled) or uncached (dynamic). This object specifically details properties within uncached map services.",
                    properties: {
                      id: {
                        type: "string",
                        description:
                          "A unique identifying string for the layer."
                      },
                      isReference: {
                        type: "boolean",
                        description:
                          "This is applicable if used as a baseMapLayer. A boolean value indicating whether or not the baseMapLayer draws on top (true) of other layers, including operationalLayers, or below (false).",
                        default: !1
                      },
                      itemId: {
                        type: "string",
                        description:
                          "Optional string containing the item ID of the service if it's registered on ArcGIS Online or your organization's portal."
                      },
                      layerType: {
                        type: "string",
                        description: "String indicating the layer type.",
                        enum: ["ArcGISMapServiceLayer"]
                      },
                      layers: {
                        type: "array",
                        description:
                          "An array of layer objects defining the styling, geometry, and attribute information for the features.",
                        items: {
                          type: "object",
                          $ref: "#/definitions/layer_schema.json"
                        },
                        uniqueItems: !0
                      },
                      maxScale: {
                        type: "number",
                        description:
                          "A number representing the maximum scale at which the layer will be visible. The number is the scale's denominator.",
                        minimum: 0
                      },
                      minScale: {
                        type: "number",
                        description:
                          "A number representing the minimum scale at which the layer will be visible. The number is the scale's denominator.",
                        minimum: 0
                      },
                      opacity: {
                        type: "number",
                        description:
                          "The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.",
                        minimum: 0,
                        maximum: 1,
                        default: 1
                      },
                      refreshInterval: {
                        type: "number",
                        description:
                          "Refresh interval of the layer in minutes. Non-zero value indicates automatic layer refresh at the specified interval. Value of 0 indicates auto refresh is not enabled.",
                        default: 0
                      },
                      showLegend: {
                        type: "boolean",
                        description:
                          "Boolean value indicating whether to display the layer in the legend. Default value is `true`.",
                        default: !0
                      },
                      timeAnimation: {
                        type: "boolean",
                        description:
                          "This property is applicable to layers that support time. If 'true', timeAnimation is enabled.",
                        default: !0
                      },
                      title: {
                        type: "string",
                        description:
                          "A user-friendly string title for the layer that can be used in a table of contents."
                      },
                      url: {
                        type: "string",
                        description: "The URL to the layer.",
                        format: "uri"
                      },
                      visibility: {
                        type: "boolean",
                        description:
                          "Boolean property determining whether the layer is initially visible in the web scene.",
                        default: !0
                      },
                      visibleLayers: {
                        type: "array",
                        description:
                          "An array of sublayer ids that should appear visible. Used with map service layers that are not tiled.",
                        items: { type: "integer" },
                        uniqueItems: !0
                      }
                    },
                    required: ["id", "layerType", "title", "url"],
                    additionalProperties: !1
                  },
                  "pointCloudLayer_schema.json": {
                    title: "PointCloud Layer",
                    type: "object",
                    description:
                      "Point cloud data is post-processed spatially organized lidar data that consists of large collections of 3D points. Elevations for the ground, buildings, forest canopy, highway overpasses, and anything else encountered during the lidar survey make up the point cloud data. Point cloud layers allow for fast visualisation of point cloud data in the browser.",
                    properties: {
                      id: {
                        type: "string",
                        description: "A unique identifying string for the layer"
                      },
                      itemId: {
                        type: "string",
                        description:
                          "Optional string containing the item ID of the service if it's registered on ArcGIS Online or your organization's portal"
                      },
                      layerDefinition: {
                        type: "object",
                        description:
                          "A layerDefinition object defining the attribute schema and drawing information for the layer.",
                        allOf: [
                          { $ref: "#/definitions/layerDefinition_schema.json" },
                          {
                            properties: {
                              drawingInfo: {},
                              elevationInfo: {},
                              filters: {}
                            },
                            additionalProperties: !1
                          }
                        ]
                      },
                      layerType: {
                        type: "string",
                        description: "String indicating the layer type",
                        enum: ["PointCloudLayer"]
                      },
                      listMode: {
                        type: "string",
                        description:
                          "To show or hide the layer in the layer list",
                        enum: ["show", "hide"]
                      },
                      showLegend: {
                        type: "boolean",
                        description:
                          "Boolean value indicating whether to display the layer in the legend. Default value is `true`.",
                        default: !0
                      },
                      title: {
                        type: "string",
                        description:
                          "A user-friendly string title for the layer that can be used in a table of contents. If this is not included, a title is derived from the service"
                      },
                      url: {
                        type: "string",
                        description: "The URL to the layer.",
                        format: "uri"
                      },
                      visibility: {
                        type: "boolean",
                        description:
                          "Boolean property determining whether the layer is initially visible",
                        default: !0
                      }
                    },
                    required: ["id", "layerType", "title", "url"],
                    additionalProperties: !1
                  },
                  "sceneLayer_schema.json": {
                    title: "Scene Layer (ArcGISSceneServiceLayer)",
                    type: "object",
                    description:
                      "The SceneLayer is a layer type designed for on-demand streaming and displaying large amounts of data in a SceneView. SceneLayers support two geometry types: Point and 3D Objects (e.g. buildings). The SceneLayer displays data published to a Scene Service. Scene Services can hold large volumes of features in an open format that is suitable for web streaming. The SceneLayer loads these features progressively, starting from coarse representations and refines them to higher detail as necessary for close-up views.",
                    properties: {
                      disablePopup: {
                        type: "boolean",
                        description:
                          "disablePopups allows a client to ignore popups defined by the service item."
                      },
                      id: {
                        type: "string",
                        description:
                          "A unique identifying string for the layer."
                      },
                      itemId: {
                        type: "string",
                        description:
                          "Optional string containing the item ID of the service if it's registered on ArcGIS Online or your organization's portal."
                      },
                      layerDefinition: {
                        type: "object",
                        description:
                          "A layerDefinition object defining the attribute schema and drawing information for the layer.",
                        $ref: "#/definitions/layerDefinition_schema.json"
                      },
                      layerType: {
                        type: "string",
                        description: "String indicating the layer type.",
                        enum: ["ArcGISSceneServiceLayer"]
                      },
                      listMode: {
                        type: "string",
                        description: "To show or hide layers in the layer list",
                        enum: ["show", "hide"]
                      },
                      opacity: {
                        type: "number",
                        description:
                          "The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.",
                        minimum: 0,
                        maximum: 1,
                        default: 1
                      },
                      popupInfo: {
                        type: "object",
                        description:
                          "A popupInfo object defining the content of pop-up windows when you click or query a feature.",
                        $ref: "#/definitions/popupInfo_schema.json"
                      },
                      screenSizePerspective: {
                        type: "boolean",
                        description:
                          "Apply [perspective scaling](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#screenSizePerspectiveEnabled) to screen-size symbols.",
                        default: !1
                      },
                      showLabels: {
                        type: "boolean",
                        description:
                          "If the layer has a labelingInfo property then labels show on the scene only if the showLabels property it true.",
                        default: !1
                      },
                      showLegend: {
                        type: "boolean",
                        description:
                          "Boolean value indicating whether to display the layer in the legend. Default value is `true`.",
                        default: !0
                      },
                      title: {
                        type: "string",
                        description:
                          "A user-friendly string title for the layer that can be used in a table of contents."
                      },
                      url: {
                        type: "string",
                        description: "The URL to the service.",
                        format: "uri"
                      },
                      visibility: {
                        type: "boolean",
                        description:
                          "Boolean property determining whether the layer is initially visible in the web scene",
                        default: !0
                      }
                    },
                    required: ["id", "layerType", "title", "url"],
                    additionalProperties: !1
                  },
                  "tiledImageServiceLayer_schema.json": {
                    title:
                      "Tiled Image Service Layer (ArcGISTiledImageServiceLayer)",
                    type: "object",
                    description:
                      "An ArcGIS Tiled Image Service layer displays content from an ArcGIS Server Image service that has been cached (tiled).",
                    properties: {
                      id: {
                        type: "string",
                        description:
                          "A string containing the item ID of the service if it's registered on ArcGIS Online or your organization's portal."
                      },
                      isReference: {
                        type: "boolean",
                        description:
                          "Applicable if used as a baseMapLayer. A boolean value indicating whether or not the baseMapLayer draws on top (true) of other layers, including operationalLayers , or below (false)."
                      },
                      layerType: {
                        type: "string",
                        description: "String indicating the layer type.",
                        enum: ["ArcGISTiledImageServiceLayer"]
                      },
                      opacity: {
                        type: "number",
                        description:
                          "The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.",
                        minimum: 0,
                        maximum: 1,
                        default: 1
                      },
                      refreshInterval: {
                        type: "number",
                        description:
                          "Refresh interval of the layer in minutes. Non-zero value indicates automatic layer refresh at the specified interval. Value of 0 indicates auto refresh is not enabled.",
                        default: 0
                      },
                      showLegend: {
                        type: "boolean",
                        description:
                          "Boolean value indicating whether to display the layer in the legend. Default value is `true`.",
                        default: !0
                      },
                      title: {
                        type: "string",
                        description:
                          "A user-friendly string title for the layer that can be used in a table of contents."
                      },
                      url: {
                        type: "string",
                        description: "URL to the ArcGIS Server Image Service."
                      },
                      visibility: {
                        type: "boolean",
                        description:
                          "Boolean property determining whether the layer is initially visible in the web scene."
                      }
                    },
                    required: ["id", "layerType", "title", "url"],
                    additionalProperties: !1
                  },
                  "tiledMapServiceLayer_schema.json": {
                    title:
                      "Tiled Map Service Layer (ArcGISTiledMapServiceLayer)",
                    type: "object",
                    description:
                      "An ArcGIS Tiled Map Service layer displays map content from an ArcGIS Server Map service that has been cached (tiled).",
                    properties: {
                      id: {
                        type: "string",
                        description:
                          "A unique identifying string for the layer."
                      },
                      isReference: {
                        type: "boolean",
                        description:
                          "This property is applicable if used as a baseMapLayer. A boolean value indicating whether or not the baseMapLayer draws on top (true) of other layers, including operationalLayers , or below (false)."
                      },
                      itemId: {
                        type: "string",
                        description:
                          "Optional string containing the item ID of the service if it's registered on ArcGIS Online or your organization's portal."
                      },
                      layerType: {
                        type: "string",
                        description: "String indicating the layer type.",
                        enum: ["ArcGISTiledMapServiceLayer"]
                      },
                      listMode: { type: "string", enum: ["show", "hide"] },
                      maxScale: {
                        type: "number",
                        description:
                          "A number representing the maximum scale at which the layer will be visible. The number is the scale's denominator.",
                        minimum: 0
                      },
                      minScale: {
                        type: "number",
                        description:
                          "A number representing the minimum scale at which the layer will be visible. The number is the scale's denominator.",
                        minimum: 0
                      },
                      opacity: {
                        type: "number",
                        description:
                          "The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.",
                        minimum: 0,
                        maximum: 1,
                        default: 1
                      },
                      refreshInterval: {
                        type: "number",
                        description:
                          "Refresh interval of the layer in minutes. Non-zero value indicates automatic layer refresh at the specified interval. Value of 0 indicates auto refresh is not enabled."
                      },
                      showLegend: {
                        type: "boolean",
                        description:
                          "Boolean value indicating whether to display the layer in the legend. Default value is `true`.",
                        default: !0
                      },
                      title: {
                        type: "string",
                        description:
                          "A user-friendly string title for the layer that can be used in a table of contents. If this is not included, a title is derived from the service."
                      },
                      url: {
                        type: "string",
                        description:
                          "URL to the ArcGIS Server tiled Map Service"
                      },
                      visibility: {
                        type: "boolean",
                        description:
                          "Boolean property determining whether the layer is initially visible in the web scene.",
                        default: !0
                      }
                    },
                    required: ["id", "layerType", "title", "url"],
                    additionalProperties: !1
                  },
                  "vectorTileLayer_schema.json": {
                    title: "Vector Tile Layer (VectorTileLayer)",
                    type: "object",
                    description:
                      "A vector tile layer references a set of web-accessible vector tiles and the corresponding style for how those tiles should be drawn.",
                    properties: {
                      id: {
                        type: "string",
                        description:
                          "A unique identifying string for the layer."
                      },
                      isReference: {
                        type: "boolean",
                        description:
                          "Applicable if used as a baseMapLayer. A boolean value indicating whether or not the baseMapLayer draws on top (true) of other layers, including operationalLayers , or below (false)."
                      },
                      itemId: {
                        type: "string",
                        description:
                          "Optional string containing the item ID of the service if it's registered on ArcGIS Online or your organization's portal."
                      },
                      layerType: {
                        type: "string",
                        description: "String indicating the layer type.",
                        enum: ["VectorTileLayer"]
                      },
                      listMode: {
                        type: "string",
                        description:
                          "To show or hide the layer in the layer list",
                        enum: ["show", "hide"]
                      },
                      maxScale: {
                        type: "number",
                        description:
                          "A number representing the maximum scale at which the layer will be visible. The number is the scale's denominator."
                      },
                      minScale: {
                        type: "number",
                        description:
                          "A number representing the minimum scale at which the layer will be visible. The number is the scale's denominator."
                      },
                      opacity: {
                        type: "number",
                        description:
                          "The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.",
                        minimum: 0,
                        maximum: 1,
                        default: 1
                      },
                      styleUrl: {
                        type: "string",
                        description:
                          "A url to a JSON file containing the stylesheet information used to render the layer. You may also pass an object containing the stylesheet information identical to the JSON file."
                      },
                      title: {
                        type: "string",
                        description:
                          "A user-friendly string title for the layer that can be used in a table of contents."
                      },
                      visibility: {
                        type: "boolean",
                        description:
                          "Boolean property determining whether the layer is initially visible in the web scene."
                      }
                    },
                    required: ["id", "layerType", "styleUrl", "title"],
                    additionalProperties: !1
                  },
                  "webTiledLayer_schema.json": {
                    title: "WebTiledLayer",
                    type: "object",
                    description:
                      "A tile layer is a derived from a set of web-accessible tiles which reside on a server. The tiles are accessed by a direct URL request from the web browser. Because the tiles in a tile layer are not available as a service, they must be in a specific format for a web app such as the ArcGIS.com scene viewer to display the layer on a scene.",
                    properties: {
                      copyright: {
                        type: "string",
                        description:
                          "Attribution to the Web Tiled Layer provider. It is displayed in the attribution on the web scene. Input required by the user when the layer is added to the web scene."
                      },
                      fullExtent: {
                        type: "object",
                        description:
                          "An extent object representing the full extent envelope for the layer.",
                        $ref: "#/definitions/extent_schema.json"
                      },
                      id: {
                        type: "string",
                        description:
                          "A unique identifying string for the layer."
                      },
                      isReference: {
                        type: "boolean",
                        description:
                          "This is applicable if used as a basesceneLayer. A boolean value indicating whether or not the basesceneLayer draws on top (true) of other layers, including operationalLayers , or below (false)."
                      },
                      itemId: {
                        type: "string",
                        description:
                          "Unique string value indicating an item registered in ArcGIS Online or your organization's portal."
                      },
                      layerType: {
                        type: "string",
                        description: "String indicating the layer type.",
                        enum: ["WebTiledLayer"]
                      },
                      listMode: {
                        type: "string",
                        description:
                          "To show or hide the layer in the layer list",
                        enum: ["show", "hide"]
                      },
                      maxScale: {
                        type: "number",
                        description:
                          "A number representing the maximum scale at which the layer will be visible. The number is the scale's denominator.",
                        minimum: 0
                      },
                      minScale: {
                        type: "number",
                        description:
                          "A number representing the minimum scale at which the layer will be visible. The number is the scale's denominator.",
                        minimum: 0
                      },
                      opacity: {
                        type: "number",
                        description:
                          "The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.",
                        minimum: 0,
                        maximum: 1,
                        default: 1
                      },
                      refreshInterval: {
                        type: "number",
                        description:
                          "Refresh interval of the layer in minutes. Non-zero value indicates automatic layer refresh at the specified interval. Value of 0 indicates auto refresh is not enabled.",
                        default: 0
                      },
                      subDomains: {
                        type: "array",
                        description:
                          "If subdomains are detected, they must be specified. The scene viewer detects if the Web Tiled Layer has subdomains by parsing the templateURL value for {subDomain}.",
                        items: { type: "string" }
                      },
                      templateUrl: {
                        type: "string",
                        description:
                          "URL to the Web Tiled Layer. Input required by the user when the layer is added to the web scene. The template URL contains a parameterized URL. The URL can contain the following templated parameters: 'level', 'col', 'row', and 'subDomain'.",
                        format: "uri"
                      },
                      tileInfo: {
                        type: "object",
                        description:
                          "Contains the spatial reference and the tiling scheme of the layer. Typically retrieved from a WMTS OGC Web Service. If missing the layer must be in the WGS 1984 Web Mercator (Auxiliary Sphere) tiling scheme.",
                        $ref: "#/definitions/tileInfo_schema.json"
                      },
                      title: {
                        type: "string",
                        description:
                          "A user-friendly string title for the layer that can be used in a table of contents."
                      },
                      visibility: {
                        type: "boolean",
                        description:
                          "Boolean property determining whether the layer is initially visible in the web scene.",
                        default: !0
                      },
                      wmtsInfo: {
                        type: "object",
                        description:
                          "Object containing information about the chosen WMTS service layer and tiling schema.",
                        $ref: "#/definitions/wmtsInfo_schema.json"
                      }
                    },
                    required: ["id", "layerType", "title"],
                    additionalProperties: !1
                  },
                  "wmsLayer_schema.json": {
                    title: "WMS Layer (WMS)",
                    type: "object",
                    description:
                      "A layer consuming a Web Map Service (WMS). The WMS specification is an international specification for serving and consuming dynamic maps on the web.",
                    properties: {
                      copyright: {
                        type: "string",
                        description:
                          "A string containing copyright and access information for a WMS layer. This is copied from the capabilities document exposed by the WMS service."
                      },
                      customLayerParameters: {
                        type: "object",
                        description:
                          "A sequence of custom parameters to WMS layer requests. These parameters are applied to `GetMap` and `GetFeatureInfo` requests. The `customLayerParameters` property takes precedence if `customParameters` is also present.",
                        patternProperties: { ".*": { type: "string" } }
                      },
                      customParameters: {
                        type: "object",
                        description:
                          "A sequence of custom parameters to all WMS requests. These parameters are applied to `GetCapabilities`, `GetMap`, and `GetFeatureinfo` requests. If used with the `customLayerParameters` property, `customParameters` will not take precedence.",
                        patternProperties: { ".*": { type: "string" } }
                      },
                      extent: {
                        type: "array",
                        description:
                          "The rectangular map extent that should be requested from the service.",
                        items: {
                          type: "array",
                          items: { type: "number" },
                          minItems: 2,
                          maxItems: 2
                        },
                        minItems: 2,
                        maxItems: 2
                      },
                      featureInfoFormat: {
                        type: "string",
                        description: "Format of the feature, e.g.`text/plain`"
                      },
                      featureInfoUrl: {
                        type: "string",
                        description: "The URL for the WMS GetFeatureInfo call."
                      },
                      format: {
                        type: "string",
                        description:
                          "A string containing the image format to be requested from a WMS service.",
                        default: "png"
                      },
                      id: {
                        type: "string",
                        description:
                          "A unique identifying string for the layer."
                      },
                      isReference: {
                        type: "boolean",
                        description:
                          "This is applicable if used as a baseMapLayer. A boolean value indicating whether or not the baseMapLayer draws on top (true) of other layers, including operationalLayers, or below (false).",
                        default: !1
                      },
                      itemId: {
                        type: "string",
                        description:
                          "Unique string value indicating an item registered in ArcGIS Online or your organization's portal."
                      },
                      layerType: {
                        type: "string",
                        description: "String indicating the layer type.",
                        enum: ["WMS"]
                      },
                      layers: {
                        type: "array",
                        description:
                          "An array of layer objects from the WMS service.",
                        items: {
                          type: "object",
                          $ref: "#/definitions/wmsLayer_layer_schema.json"
                        },
                        uniqueItems: !0
                      },
                      listMode: {
                        type: "string",
                        description: "To show or hide layers in the layer list",
                        enum: ["show", "hide"]
                      },
                      mapUrl: {
                        type: "string",
                        description:
                          "A string containing the URL of the WMS map. When using a WMS layer, you should also supply the url property. `mapUrl` is the URL returned by the capabilities to be used for the getMap requests.",
                        format: "uri"
                      },
                      maxHeight: {
                        type: "number",
                        description:
                          "A number defining the maximum height, in pixels, that should be requested from the service."
                      },
                      maxScale: {
                        type: "number",
                        description:
                          "A number representing the maximum scale at which the layer will be visible. The number is the scale's denominator.",
                        minimum: 0
                      },
                      maxWidth: {
                        type: "number",
                        description:
                          "A number defining the maximum width, in pixels, that should be requested from the service."
                      },
                      minScale: {
                        type: "number",
                        description:
                          "A number representing the minimum scale at which the layer will be visible. The number is the scale's denominator.",
                        minimum: 0
                      },
                      opacity: {
                        type: "number",
                        description:
                          "The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.",
                        minimum: 0,
                        maximum: 1,
                        default: 1
                      },
                      refreshInterval: {
                        type: "number",
                        description:
                          "Refresh interval of the layer in minutes. Non-zero value indicates automatic layer refresh at the specified interval. Value of 0 indicates auto refresh is not enabled.",
                        default: 0
                      },
                      showLegend: {
                        type: "boolean",
                        description:
                          "Boolean value indicating whether to display the layer in the legend."
                      },
                      spatialReferences: {
                        type: "array",
                        description:
                          "An array of numbers containing well-known IDs for spatial references supported by the service.",
                        items: { type: "number", description: "well-known ID" }
                      },
                      title: {
                        type: "string",
                        description:
                          "A user-friendly string title for the layer that can be used in a table of contents."
                      },
                      url: {
                        type: "string",
                        description:
                          "The URL to the WMS service (`getCapabilities` URL).",
                        format: "uri"
                      },
                      version: {
                        type: "string",
                        description:
                          "A string containing the version number of the service."
                      },
                      visibility: {
                        type: "boolean",
                        description:
                          "Boolean property determining whether the layer is initially visible in the web map.",
                        default: !0
                      },
                      visibleLayers: {
                        type: "array",
                        description:
                          "An array of layers that should appear visible. The array contains the names of the visible layers.",
                        items: { type: "string" },
                        uniqueItems: !0
                      }
                    },
                    required: ["layerType", "title"],
                    additionalProperties: !1
                  },
                  "slide_schema.json": {
                    title: "slide",
                    type: "object",
                    description: "A slide object used within a presentation.",
                    properties: {
                      baseMap: {
                        description:
                          "The basemap to be displayed on the slide.",
                        allOf: [
                          { $ref: "#/definitions/baseMap_schema.json" },
                          {
                            properties: {
                              baseMapLayers: {},
                              title: {},
                              id: {},
                              transparency: {}
                            },
                            additionalProperties: !1
                          }
                        ]
                      },
                      description: {
                        type: "object",
                        description:
                          "Text description of the individual presentation slide.",
                        $ref: "#/definitions/description_schema.json"
                      },
                      environment: {
                        type: "object",
                        description:
                          "Represents settings that affect the environment in which the web scene is displayed.",
                        allOf: [
                          { $ref: "#/definitions/environment_schema.json" },
                          {
                            properties: { lighting: {} },
                            additionalProperties: !1
                          }
                        ]
                      },
                      ground: {
                        description:
                          "The ground properties to be set in the slide.",
                        $ref: "#/definitions/slide_ground_schema.json"
                      },
                      id: {
                        type: "string",
                        description:
                          "The unique id of a slide within the slides property of a Presentation."
                      },
                      thumbnail: {
                        type: "object",
                        $ref: "#/definitions/thumbnail_schema.json"
                      },
                      title: {
                        type: "object",
                        $ref: "#/definitions/title_schema.json"
                      },
                      viewpoint: {
                        type: "object",
                        $ref: "#/definitions/viewpoint_schema.json"
                      },
                      visibleLayers: {
                        type: "array",
                        description:
                          "An array of objects used to indicate the visible layers of the web scene.",
                        items: {
                          type: "object",
                          $ref: "#/definitions/visibleLayer_schema.json"
                        }
                      }
                    },
                    required: [
                      "id",
                      "thumbnail",
                      "title",
                      "viewpoint",
                      "visibleLayers"
                    ],
                    additionalProperties: !1
                  },
                  "definitionEditor_schema.json": {
                    title: "definitionEditor",
                    type: "object",
                    description:
                      "The definitionEditor stores interactive filters at the same level as layerDefinition.",
                    properties: {
                      inputs: {
                        type: "array",
                        description: "An array of input objects.",
                        items: {
                          type: "object",
                          $ref: "#/definitions/input_schema.json"
                        }
                      },
                      parameterizedExpression: {
                        type: "string",
                        description:
                          "A string value representing the where clause for the interactive filter."
                      }
                    },
                    additionalProperties: !1
                  },
                  "layerDefinition_schema.json": {
                    title: "layerDefinition",
                    type: "object",
                    description:
                      "An object that defines the attribute schema and drawing information for a layer drawn using client-side graphics.",
                    properties: {
                      allowGeometryUpdates: {
                        type: "boolean",
                        description:
                          "Boolean value indicating whether the geometry of the features in the layer can be edited."
                      },
                      capabilities: {
                        type: "string",
                        description:
                          "A comma separated list of supported capabilities, e.g. `Query,Editing`."
                      },
                      copyrightText: {
                        type: "string",
                        description:
                          "String value for the copyright text information for the layer."
                      },
                      currentVersion: {
                        type: "number",
                        description:
                          "Numeric value indicating the server version of the layer."
                      },
                      defaultVisibility: {
                        type: "boolean",
                        description:
                          "Boolean value indicating whether the layer's visibility is turned on."
                      },
                      definitionExpression: {
                        type: "string",
                        description:
                          "SQL-based definition expression string that narrows the data to be displayed in the layer."
                      },
                      description: {
                        type: "string",
                        description:
                          "String value of the layer as defined in the map service."
                      },
                      displayField: {
                        type: "string",
                        description:
                          "A string value that summarizes the feature."
                      },
                      drawingInfo: {
                        type: "object",
                        description:
                          "Contains the drawing and labeling information.",
                        $ref: "#/definitions/drawingInfo_schema.json"
                      },
                      elevationInfo: {
                        type: "object",
                        $ref: "#/definitions/elevationInfo_schema.json"
                      },
                      extent: {
                        description: "An object defining the rectangular area.",
                        oneOf: [
                          { $ref: "#/definitions/extent_schema.json" },
                          { type: "null" }
                        ]
                      },
                      featureReduction: {
                        type: "object",
                        description:
                          "An object that specifies how features are reduced or aggregated, with the goal of decluttering the view or presenting the user with an aggregate visualization. If unset, every feature is rendered individually.",
                        $ref:
                          "#/definitions/featureReduction_select_schema.json"
                      },
                      fields: {
                        type: "array",
                        description:
                          "An array of field objects containing information about the attribute fields for the feature collection or layer.",
                        items: {
                          type: "object",
                          $ref: "#/definitions/field_schema.json"
                        },
                        uniqueItems: !0
                      },
                      filters: {
                        type: "array",
                        description: "Filters for PointCloud layers",
                        items: {
                          type: "object",
                          $ref: "#/definitions/pointCloudFilter_schema.json"
                        }
                      },
                      geometryType: {
                        type: "string",
                        description:
                          "A string defining the type of geometry. Possible geometry types are: `esriGeometryPoint`, `esriGeometryMultipoint`, `esriGeometryPolyline`, `esriGeometryPolygon`, and `esriGeometryEnvelope`."
                      },
                      globalIdField: {
                        type: "string",
                        description:
                          "The unique identifier for a feature or table row within a geodatabase."
                      },
                      hasAttachments: {
                        type: "boolean",
                        description:
                          "Indicates whether attachments should be loaded for the layer."
                      },
                      hasM: {
                        type: "boolean",
                        description:
                          "Boolean value indicating whether layer has M values."
                      },
                      hasStaticData: {
                        type: "boolean",
                        description:
                          "Boolean value indicating whether data changes. True if it does not."
                      },
                      hasZ: {
                        type: "boolean",
                        description:
                          "Boolean value indicating whether layer has Z values."
                      },
                      htmlPopupType: {
                        type: "string",
                        description:
                          "String value indicating the HTML popup type.",
                        enum: [
                          "esriServerHTMLPopupTypeNone",
                          "esriServerHTMLPopupTypeAsURL",
                          "esriServerHTMLPopupTypeAsHTMLText"
                        ]
                      },
                      id: {
                        type: "number",
                        description: "The identifier assigned to the layer."
                      },
                      isDataVersioned: {
                        type: "boolean",
                        description:
                          "Boolean value indicating whether the data is versioned."
                      },
                      maxRecordCount: {
                        type: "number",
                        description:
                          "Numeric value indicating tbe maximum number of records that will be returned at once for a query."
                      },
                      maxScale: {
                        type: "number",
                        description:
                          "Represents the maximum scale at which the layer definition will be applied."
                      },
                      minScale: {
                        type: "number",
                        description:
                          "Represents the minimum scale at which the layer definition will be applied."
                      },
                      name: {
                        type: "string",
                        description:
                          "Contains a unique name for the layer that can be displayed in a legend."
                      },
                      objectIdField: {
                        type: "string",
                        description:
                          "Indicates the name of the object ID field in the dataset."
                      },
                      overrideSymbols: {
                        type: "boolean",
                        description:
                          "Dictates whether a client can support having an end user modify symbols on individual features."
                      },
                      rangeInfos: {
                        type: "array",
                        description: "Indicates range information",
                        items: {
                          type: "object",
                          $ref: "#/definitions/rangeInfo_schema.json"
                        },
                        minItems: 1
                      },
                      source: {
                        type: "object",
                        description:
                          "An object indicating the layerDefinition's layer source.",
                        $ref: "#/definitions/source_schema.json"
                      },
                      spatialReference: {
                        type: "object",
                        description:
                          "An object containing the WKID or WKT identifying the spatial reference of the layer's geometry.",
                        $ref: "#/definitions/spatialReference_schema.json"
                      },
                      supportedQueryFormats: {
                        type: "string",
                        description:
                          "String value indicating the output formats that are supported in a query."
                      },
                      supportsAdvancedQueries: {
                        type: "boolean",
                        description:
                          "Boolean value indicating whether the layer supports orderByFields in a query operation."
                      },
                      supportsAttachmentsByUploadId: {
                        type: "boolean",
                        description:
                          "Boolean value indicating whether the layer supports uploading attachments with the Uploads operation. This can then be used in the Add Attachment and Update Attachment operations."
                      },
                      supportsCalculate: {
                        type: "boolean",
                        description:
                          "Boolean value indicating whether the layer supports the Calculate REST operation when updating features."
                      },
                      supportsRollbackOnFailureParameter: {
                        type: "boolean",
                        description:
                          "Boolean value indicating whether the layer supports rolling back edits made on a feature layer if some of the edits fail."
                      },
                      supportsStatistics: {
                        type: "boolean",
                        description:
                          "Boolean value indicating whether feature layer query operations support statistical functions."
                      },
                      supportsValidateSql: {
                        type: "boolean",
                        description:
                          "Boolean value indicating whether the validateSQL operation is supported across a feature service layer."
                      },
                      type: {
                        type: "string",
                        description:
                          "Indicates whether the layerDefinition applies to a Feature Layer or a Table.",
                        enum: ["Feature Layer", "Table"],
                        default: "Feature Layer"
                      },
                      typeIdField: {
                        type: "string",
                        description:
                          "Contains the name of the field holding the type ID for the features."
                      },
                      types: {
                        type: "array",
                        description:
                          "Contains information about an attribute field.",
                        items: {
                          type: "object",
                          $ref: "#/definitions/type_schema.json"
                        },
                        uniqueItems: !0
                      },
                      visibilityField: {
                        type: "string",
                        description:
                          "String value indicating the attribute field that is used to control the visibility of a feature. If applicable, when rendering a feature the client should use this field to control visibility. The field's values are 0 = do not display, 1 = display."
                      }
                    },
                    additionalProperties: !1
                  },
                  "popupInfo_schema.json": {
                    title: "popupInfo",
                    type: "object",
                    description:
                      "Defines the look and feel of popup windows when a user clicks or queries a feature.",
                    properties: {
                      description: {
                        description:
                          "A string that appears in the body of the popup window as a description. It is also possible to specify the description as HTML-formatted content.",
                        oneOf: [{ type: "string" }, { type: "null" }]
                      },
                      expressionInfos: {
                        type: "array",
                        description:
                          "List of Arcade expressions added to the pop-up.",
                        items: {
                          type: "object",
                          $ref: "#/definitions/popupExpressionInfo_schema.json"
                        }
                      },
                      fieldInfos: {
                        type: "array",
                        description:
                          "Array of fieldInfo information properties. This information is provided by the service layer definition.",
                        items: {
                          type: "object",
                          $ref: "#/definitions/fieldInfo_schema.json"
                        }
                      },
                      layerOptions: {
                        type: "object",
                        description:
                          "Additional options that can be defined for the popup layer.",
                        $ref: "#/definitions/popupLayerOptions_schema.json"
                      },
                      mediaInfos: {
                        type: "array",
                        description:
                          "Array of various mediaInfo to display. Can be of type `image`, `piechart`, `barchart`, `columnchart`, or `linechart`. The order given is the order in which it displays.",
                        items: {
                          type: "object",
                          $ref: "#/definitions/mediaInfo_schema.json"
                        }
                      },
                      popupElements: {
                        type: "array",
                        description:
                          "An array of popupElement objects that represent an ordered list of popup elements.",
                        items: {
                          type: "object",
                          $ref: "#/definitions/popupElement_schema.json"
                        }
                      },
                      relatedRecordsInfo: {
                        type: "object",
                        description:
                          "Indicates whether to enable related records if they exist on a layer.",
                        $ref: "#/definitions/relatedRecordsInfo_schema.json"
                      },
                      showAttachments: {
                        type: "boolean",
                        description:
                          "Indicates whether attachments will be loaded for feature layers that have attachments."
                      },
                      title: {
                        type: "string",
                        description:
                          "A string that appears at the top of the popup window as a title."
                      }
                    },
                    additionalProperties: !1
                  },
                  "range_schema.json": {
                    title: "Range",
                    description: "Range object",
                    properties: {
                      interactionMode: {
                        type: "string",
                        description:
                          "Indicates the mode in which the active range should be presented to the user.",
                        enum: ["slider", "picker"]
                      },
                      numberOfStops: {
                        type: "number",
                        description:
                          "This is used to generate the activeRangeValues if activeRangeValues are not specified."
                      },
                      stopInterval: {
                        type: "number",
                        description:
                          "Interval in which stops should be generated."
                      }
                    },
                    oneOf: [
                      { required: ["interactionMode", "numberOfStops"] },
                      { required: ["interactionMode", "stopInterval"] }
                    ],
                    additionalProperties: !1
                  },
                  "search_schema.json": {
                    title: "search",
                    type: "object",
                    description:
                      "An object specifying the search parameters set within the web scene.",
                    properties: {
                      enabled: {
                        type: "boolean",
                        description:
                          "A boolean value indicating whether search functionality is enabled in the web scene.",
                        default: !0
                      },
                      hintText: {
                        type: "string",
                        description:
                          "A string value used to indicate the hint provided with the search dialog."
                      },
                      layers: {
                        type: "array",
                        description:
                          "An array of layers to be included in search.",
                        items: {
                          type: "object",
                          $ref: "#/definitions/search_layer_schema.json"
                        },
                        minItems: 1,
                        uniqueItems: !0
                      }
                    },
                    required: ["layers"],
                    additionalProperties: !1
                  },
                  "openStreetMapLayer_schema.json": {
                    title: "OpenStreetMap Layer (OpenStreetMap)",
                    type: "object",
                    description:
                      "Allows use of OpenStreetMap data for use in basemaps only.",
                    properties: {
                      id: {
                        type: "string",
                        description:
                          "An identifying string for the layer, unique per scene.",
                        default: "defaultBasemap"
                      },
                      isReference: {
                        type: "boolean",
                        description:
                          "Applicable if used as a baseMapLayer. A boolean value indicating whether or not the baseMapLayer draws on top (true) of other layers, including operationalLayers , or below (false)."
                      },
                      itemId: {
                        type: "string",
                        description:
                          "String containing the item ID of the service if it's registered on ArcGIS Online or your organization's portal."
                      },
                      layerType: {
                        type: "string",
                        description: "String indicating the layer type.",
                        enum: ["OpenStreetMap"]
                      },
                      maxScale: {
                        type: "number",
                        description:
                          "A numeric property used to determine the maximum scale at which the layer is displayed.",
                        minimum: 0,
                        exclusiveMinimum: !0
                      },
                      minScale: {
                        type: "number",
                        description:
                          "A numeric property used to determine the minimum scale at which the layer is displayed.",
                        minimum: 0,
                        exclusiveMinimum: !0
                      },
                      opacity: {
                        type: "number",
                        description:
                          "The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.",
                        minimum: 0,
                        maximum: 1,
                        default: 1
                      },
                      title: {
                        type: "string",
                        description: "String title for the basemap layer."
                      },
                      type: {
                        type: "string",
                        description:
                          "<em>Deprecated, use layerType instead.</em>"
                      },
                      visibility: {
                        type: "boolean",
                        description:
                          "Boolean property determining whether the layer is initially visible.",
                        default: !0
                      }
                    },
                    required: ["id", "layerType", "title"],
                    additionalProperties: !1
                  },
                  "environment_background_color_schema.json": {
                    title: "color background",
                    type: "object",
                    description:
                      "Specifies a single color to fill the background of the scene with. The scene background is displayed behind any scene objects, stars and atmosphere.",
                    properties: {
                      color: { $ref: "#/definitions/color_schema.json" },
                      transparency: {
                        type: "integer",
                        description:
                          "The value has to lie between `100` (full transparency) and `0` (full opacity).",
                        minimum: 0,
                        maximum: 100
                      },
                      type: {
                        type: "string",
                        description: "The type of background.",
                        enum: ["color"]
                      }
                    },
                    required: ["color", "type"],
                    default: { type: "color", color: [0, 0, 0] },
                    additionalProperties: !1
                  },
                  "lighting_schema.json": {
                    title: "lighting",
                    description:
                      "Object containing information on how the scene is lit.",
                    properties: {
                      datetime: {
                        type: "number",
                        description:
                          "The current date and time of the simulated sun. It is a number representing the number of milliseconds since 1 January, 1970 UTC."
                      },
                      directShadows: {
                        type: "boolean",
                        description:
                          "Indicates whether to show shadows cast by the sun.",
                        default: !1
                      },
                      displayUTCOffset: {
                        type: "number",
                        description:
                          "UTC offset in decimal hours. Not to be applied to datetime for sun position, only to adjust display of datetime in UI. If displayUTCOffset is null, offset is calculated for the current location (approximate only)."
                      }
                    },
                    additionalProperties: !1
                  },
                  "camera_schema.json": {
                    title: "Camera",
                    type: "object",
                    description:
                      "The camera defines the position, tilt, and heading of the point from which the SceneView's visible extent is observed.",
                    properties: {
                      heading: {
                        type: "number",
                        description:
                          "The heading of the camera in degrees. Heading is zero when north is the top of the screen. It increases as the view rotates clockwise."
                      },
                      position: {
                        description:
                          "The position of the camera defined by a map point.",
                        $ref: "#/definitions/point_geometry_schema.json"
                      },
                      tilt: {
                        type: "number",
                        description:
                          "The tilt of the camera in degrees with respect to the surface as projected down from the camera position. Tilt is zero when looking straight down at the surface and 90 degrees when the camera is looking parallel to the surface."
                      }
                    },
                    required: ["heading", "position", "tilt"],
                    additionalProperties: !1
                  },
                  "geometry_schema.json": {
                    title: "geometry",
                    type: "object",
                    description:
                      "Please refer to the links below for objects which define the JSON formats of geometry and spatial reference objects.",
                    oneOf: [
                      { $ref: "#/definitions/multipoint_geometry_schema.json" },
                      { $ref: "#/definitions/point_geometry_schema.json" },
                      { $ref: "#/definitions/polygon_geometry_schema.json" },
                      { $ref: "#/definitions/polyline_geometry_schema.json" }
                    ]
                  },
                  "locationInfo_schema.json": {
                    title: "locationInfo",
                    type: "object",
                    description:
                      "Defines how location information will be retrieved from a [CSV](csvLayer.md) file referenced through the web, ie. referenced by URL.",
                    properties: {
                      latitudeFieldName: {
                        type: "string",
                        description:
                          "A string defining the field name that holds the latitude (Y) coordinate."
                      },
                      locationType: {
                        type: "string",
                        description: "String value indicating location type.",
                        enum: ["coordinates"]
                      },
                      longitudeFieldName: {
                        type: "string",
                        description:
                          "A string defining the field name that holds the longitude (X) coordinate."
                      }
                    },
                    required: ["locationType"],
                    additionalProperties: !1
                  },
                  "mosaicRule_schema.json": {
                    title: "mosaicRule",
                    type: "object",
                    description:
                      "The image service uses a mosaic rule to mosaick multiple rasters on the fly. The mosaic rule parameter is used by many image service operations, for example, export image and identify operations.",
                    properties: {
                      ascending: {
                        type: "boolean",
                        description:
                          "Indicate whether to use ascending or descending order.",
                        default: !0
                      },
                      fids: {
                        type: "array",
                        description:
                          "A list that defines a subset of rasters used in the mosaic, be aware that the rasters may not be visible at all scales.",
                        items: { type: "number" }
                      },
                      itemRenderingRule: {
                        type: "string",
                        description:
                          "The rendering rule applies on items before mosaicking."
                      },
                      lockRasterIds: {
                        type: "array",
                        description:
                          "Lock a few rasters in the image service. Used together with `esriMosaicLockRaster`.",
                        items: { type: "number" }
                      },
                      mosaicMethod: {
                        type: "string",
                        description:
                          "A string value that determines how the selected rasters are ordered.",
                        enum: [
                          "esriMosaicNone",
                          "esriMosaicCenter",
                          "esriMosaicNadir",
                          "esriMosaicViewpoint",
                          "esriMosaicAttribute",
                          "esriMosaicLockRaster",
                          "esriMosaicNorthwest",
                          "esriMosaicSeamline"
                        ]
                      },
                      mosaicOperation: {
                        type: "string",
                        description:
                          "Use the mosaic operation to resolve overlap pixel values: from first or last raster, use the min, max or mean of the pixel values, or blend them.",
                        enum: [
                          "MT_FIRST",
                          "MT_LAST",
                          "MT_MIN",
                          "MT_MAX",
                          "MT_MEAN",
                          "MT_BLEND",
                          "MT_SUM"
                        ],
                        default: "MT_FIRST"
                      },
                      multidimensionalDefinition: {
                        type: "array",
                        description:
                          "Definition of multidimentional variables.",
                        items: {
                          type: "object",
                          $ref:
                            "#/definitions/multidimensionalDefinition_schema.json"
                        }
                      },
                      sortField: {
                        type: "string",
                        description:
                          "The field name used together with `esriMosaicAttribute` method."
                      },
                      sortValue: {
                        description:
                          "The base sort value used together with `esriMosaicAttribute` method and `sortField` parameter.",
                        oneOf: [
                          { type: "number", default: 0 },
                          { type: "string" },
                          { type: "null" }
                        ]
                      },
                      viewpoint: {
                        type: "object",
                        description:
                          "Use a view point along with `esriMosaicViewpoint`.",
                        $ref: "#/definitions/point_geometry_schema.json"
                      },
                      where: {
                        type: "string",
                        description:
                          "Deprecated. Use `layerDefinition.definitionExpression` instead."
                      }
                    },
                    required: ["mosaicMethod"],
                    additionalProperties: !1
                  },
                  "renderingRule_schema.json": {
                    title: "renderingRule",
                    type: "object",
                    description:
                      "Specifies the rendering rule for how the requested image should be rendered.",
                    properties: {
                      outputPixelType: {
                        type: "string",
                        description:
                          "the output pixel type defines the output image's pixel type.",
                        enum: [
                          "C128",
                          "C64",
                          "F32",
                          "F64",
                          "S16",
                          "S32",
                          "S8",
                          "U1",
                          "U16",
                          "U2",
                          "U32",
                          "U4",
                          "U8",
                          "UNKNOWN"
                        ],
                        default: "UNKNOWN"
                      },
                      rasterFunction: {
                        type: "string",
                        description:
                          "The raster function name identifies the processing or rendering to be performed. For a list of possible types, please see the [Raster Functions](http://resources.arcgis.com/en/help/arcgis-rest-api/#/Raster_Function_Objects/02r3000000rv000000/) help topic for additional information on this."
                      },
                      rasterFunctionArguments: {
                        type: "object",
                        description:
                          "The arguments for the referenced `rasterFunction`. For a description of arguments per raster function type, please see the [Raster Functions](http://resources.arcgis.com/en/help/arcgis-rest-api/#/Raster_Function_Objects/02r3000000rv000000/) help topic for additional information on this."
                      },
                      variableName: {
                        type: "string",
                        description: "Variable name for the raster function."
                      }
                    },
                    additionalProperties: !1
                  },
                  "layer_schema.json": {
                    title: "layer",
                    type: "object",
                    description:
                      "A layer object may allow overrides on popup content and drawing behavior for individual layers of a web service. This object also contains geographic features and their attributes when used in a feature collection.",
                    properties: {
                      defaultVisibility: {
                        type: "boolean",
                        description:
                          "Default visibility of the layers in the map service."
                      },
                      definitionEditor: {
                        type: "object",
                        description:
                          "An object that provides interactive filters.",
                        $ref: "#/definitions/definitionEditor_schema.json"
                      },
                      featureSet: {
                        type: "object",
                        description:
                          "A featureSet object containing the geometry and attributes of the features in the layer. Used with feature collections only.",
                        $ref: "#/definitions/featureSet_schema.json"
                      },
                      field: {
                        type: "object",
                        description:
                          "Information about each field in a layer. Used with feature collections.",
                        $ref: "#/definitions/field_schema.json"
                      },
                      id: {
                        type: "string",
                        description:
                          "A string indicating the index position of the layer in the map service or feature collection."
                      },
                      layerDefinition: {
                        type: "object",
                        description:
                          "The layerDefinition object defines the attribute schema and drawing information for the layer.",
                        $ref: "#/definitions/layerDefinition_schema.json"
                      },
                      layerUrl: {
                        type: "string",
                        description:
                          "A string URL to a service that should be used for all queries against the layer. Used with hosted tiled map services on ArcGIS Online when there is an associated feature service that allows for queries."
                      },
                      maxScale: {
                        type: "number",
                        description:
                          "Represents the maximum scale at which the layer definition will be applied."
                      },
                      minScale: {
                        type: "number",
                        description:
                          "Represents the minimum scale at which the layer definition will be applied."
                      },
                      parentLayerId: {
                        type: "number",
                        description:
                          "If working with nested layers, this is the numeric value indicating the layer id of the next layer (parent) directly above the current referenced layer."
                      },
                      popupInfo: {
                        type: "object",
                        description:
                          "A popupInfo object defining the popup window content for the layer.",
                        $ref: "#/definitions/popupInfo_schema.json"
                      },
                      showLegend: {
                        type: "boolean",
                        description:
                          "Indicates whether to allow map authors the ability to control what layers should be shown in a client's legend.",
                        default: !0
                      },
                      subLayer: {
                        type: "integer",
                        description: "Integer value indicating the layer id."
                      },
                      subLayerIds: {
                        type: "array",
                        description:
                          "If the layer is a parent layer, it will have one or more sub layers included in an array.",
                        items: { type: "integer" }
                      },
                      title: {
                        type: "string",
                        description:
                          "A user-friendly string title for the layer that can be used in a table of contents."
                      }
                    },
                    additionalProperties: !1
                  },
                  "tileInfo_schema.json": {
                    title: "tileInfo",
                    type: "object",
                    description:
                      "Tile information, returned from the WMTS OGC Web Service. The tileInfo will contain the spatial reference of the layer. tileInfo is the same json representation as the ArcGIS Map/Image service tileInfo except that it may contain a levelValue on the lod objects that should be used instead of the level in the templateUrl.",
                    properties: {
                      cols: {
                        type: "integer",
                        description: "Requested tile's column."
                      },
                      compressionQuality: {
                        type: "number",
                        description: "Compression quality of the tile.",
                        minimum: 0,
                        maximum: 100
                      },
                      dpi: {
                        type: "number",
                        description: "The dpi of the tiling scheme."
                      },
                      format: {
                        type: "string",
                        description: "Image format of the cached tiles.",
                        enum: [
                          "jpg",
                          "png",
                          "png24",
                          "png32",
                          "png8",
                          "pdf",
                          "bmp",
                          "gif",
                          "svg",
                          "svgz",
                          "emf",
                          "ps",
                          "mixed",
                          "lerc"
                        ]
                      },
                      lods: {
                        type: "array",
                        description:
                          "An array of levels of detail that define the tiling scheme.",
                        items: {
                          type: "object",
                          $ref: "#/definitions/lod_schema.json"
                        },
                        uniqueItems: !0
                      },
                      origin: {
                        type: "object",
                        description: "The tiling scheme origin.",
                        $ref: "#/definitions/point_geometry_schema.json"
                      },
                      rows: {
                        type: "integer",
                        description: "Requested tile's row."
                      },
                      spatialReference: {
                        type: "object",
                        description:
                          "The spatial reference of the tiling schema.",
                        $ref: "#/definitions/spatialReference_schema.json"
                      }
                    },
                    additionalProperties: !1
                  },
                  "wmtsInfo_schema.json": {
                    title: "Web Map Tile Service Info",
                    type: "object",
                    description:
                      "Object defines and provides information about layers in a [WMTSLayer](webTiledLayer.md) service.",
                    properties: {
                      customLayerParameters: {
                        type: "object",
                        description:
                          "A sequence of parameters used to append different custom parameters to a WMTS tile request. These parameters are applied to `GetTile`. The `customLayerParameters` property takes precedence if `customParameters` is also present.",
                        patternProperties: { ".*": { type: "string" } }
                      },
                      customParameters: {
                        type: "object",
                        description:
                          "A sequence of parameters used to append custom parameters to all WMTS requests. These parameters are applied to `GetCapabilities` and `GetTile`. If used with the `customLayerParameters` property, `customParameters` will not take precedence.",
                        patternProperties: { ".*": { type: "string" } }
                      },
                      layerIdentifier: {
                        type: "string",
                        description:
                          "Identifier for the specific layer used in the WMTS service. Required input by the user."
                      },
                      tileMatrixSet: {
                        type: "string",
                        description: "Tiling schema, set by the WMTS service."
                      },
                      url: {
                        type: "string",
                        description:
                          "URL to the WMTS web service. Required input by the user.",
                        format: "uri"
                      }
                    },
                    additionalProperties: !1
                  },
                  "wmsLayer_layer_schema.json": {
                    title: "WMSLayer layer",
                    type: "object",
                    description:
                      "A layer object may allow overrides on popup content and drawing behavior for individual layers of a web service.",
                    properties: {
                      legendUrl: {
                        type: "string",
                        description:
                          "A string URL to a legend graphic for the layer."
                      },
                      name: {
                        type: "string",
                        description:
                          "A string containing a unique name for the layer."
                      },
                      queryable: {
                        type: "boolean",
                        description:
                          "Boolean specifying whether a layer is queryable or not."
                      },
                      showPopup: {
                        type: "boolean",
                        description:
                          "Boolean specifying whether to display popup or not."
                      },
                      title: {
                        type: "string",
                        description:
                          "A user-friendly string title for the layer that can be used in a table of contents."
                      }
                    },
                    additionalProperties: !1
                  },
                  "description_schema.json": {
                    title: "description",
                    type: "object",
                    description: "Description object with text.",
                    properties: {
                      text: {
                        type: "string",
                        description: "Text to display as slide description."
                      }
                    },
                    required: ["text"],
                    additionalProperties: !1
                  },
                  "slide_ground_schema.json": {
                    title: "Ground",
                    type: "object",
                    description:
                      "Ground defines the main surface of the web scene, based on elevation layers. This object defines the ground properties to be set in the slides.",
                    properties: {
                      transparency: {
                        type: "integer",
                        description:
                          "The transparency of the ground surface (including basemap). The value has to lie between `100` (full transparency) and `0` (full opacity).",
                        minimum: 0,
                        maximum: 100
                      }
                    },
                    additionalProperties: !1
                  },
                  "thumbnail_schema.json": {
                    title: "thumbnail",
                    type: "object",
                    description: "Object contains a thumbnail image.",
                    properties: {
                      url: {
                        type: "string",
                        description:
                          "The URI pointing to the thumbnail image. Typically a base64-encoded data URI."
                      }
                    },
                    required: ["url"],
                    additionalProperties: !1
                  },
                  "title_schema.json": {
                    title: "title",
                    type: "object",
                    description: "Text for the title of the individual slide.",
                    properties: {
                      text: {
                        type: "string",
                        description: "Text to display as slide title."
                      }
                    },
                    required: ["text"],
                    additionalProperties: !1
                  },
                  "visibleLayer_schema.json": {
                    title: "visibleLayer",
                    type: "object",
                    description:
                      "Object with layer id, used to indicate layer visibility in a slide.",
                    properties: {
                      id: {
                        type: "string",
                        description:
                          "The id of the layer as listed on the operational layer."
                      }
                    },
                    additionalProperties: !1
                  },
                  "input_schema.json": {
                    title: "input",
                    type: "object",
                    description:
                      "The input objects specified by the [definitionEditor](definitionEditor.md).",
                    properties: {
                      hint: {
                        type: "string",
                        description:
                          "A string value representing a hint for the input."
                      },
                      parameters: {
                        type: "array",
                        description: "An array of parameter objects.",
                        items: {
                          type: "object",
                          $ref: "#/definitions/parameter_schema.json"
                        }
                      },
                      prompt: {
                        type: "string",
                        description:
                          "A string value representing the prompt for the input."
                      }
                    },
                    additionalProperties: !1
                  },
                  "drawingInfo_schema.json": {
                    title: "drawingInfo",
                    type: "object",
                    description:
                      "The drawingInfo object contains drawing information for a feature layer.",
                    properties: {
                      labelingInfo: {
                        type: "array",
                        description:
                          "An object defining the properties used for labeling the layer.",
                        items: {
                          type: "object",
                          $ref: "#/definitions/labelingInfo_schema.json"
                        }
                      },
                      renderer: {
                        type: "object",
                        description:
                          "An object defined which provides the symbology for the layer.",
                        $ref: "#/definitions/renderer_schema.json"
                      },
                      transparency: {
                        type: "number",
                        description:
                          "Number value ranging between 0 (no transparency) to 100 (completely transparent).",
                        minimum: 0,
                        maximum: 100
                      }
                    },
                    additionalProperties: !1
                  },
                  "elevationInfo_schema.json": {
                    title: "elevationInfo",
                    type: "object",
                    description:
                      "Elevation info defines how features are aligned to ground or other layers.",
                    properties: {
                      featureExpression: {
                        type: "object",
                        description:
                          '<em>Deprecated with 1.8, use `featureExpressionInfo` instead</em>. `{"value":0}` ignores geometry z-values.',
                        properties: { value: { type: "number", enum: [0] } },
                        minProperties: 1,
                        additionalProperties: !1
                      },
                      featureExpressionInfo: {
                        type: "object",
                        description:
                          "An object that defines an expression for per-feature elevation. If not set, geometry.z values are used for elevation. `unit` is applied to the resulting expression value.",
                        $ref: "#/definitions/featureExpressionInfo_schema.json"
                      },
                      mode: {
                        type: "string",
                        description:
                          "Determines how the service elevation values are combined with the elevation of the scene.",
                        enum: [
                          "relativeToGround",
                          "absoluteHeight",
                          "onTheGround",
                          "relativeToScene"
                        ]
                      },
                      offset: {
                        type: "number",
                        description:
                          "Offset is always added to the result of the above logic except for onTheGround where offset is ignored."
                      },
                      unit: {
                        type: "string",
                        description:
                          'A string value indicating the unit for the values in elevationInfo. Applies to both `offset` and `featureExpressionInfo`. Defaults to `meter` if not set. <a href="#unit"><sup>1</sup></a>',
                        default: "meter"
                      }
                    },
                    required: ["mode"],
                    additionalProperties: !1
                  },
                  "featureReduction_select_schema.json": {
                    title: "Feature Reduction: Selection",
                    type: "object",
                    description:
                      "Feature reduction of type 'selection' declutters the screen by hiding features that would otherwise intersect with other features on screen. The default behavior of this feature reduction type is to select features by depth order, i.e. hide all features that would otherwise be overlapped by at least one other feature which is closer to the viewer.",
                    properties: {
                      type: {
                        type: "string",
                        description:
                          "A string value indicating the feature reduction type.",
                        enum: ["selection"]
                      }
                    }
                  },
                  "field_schema.json": {
                    title: "field",
                    type: "object",
                    description:
                      "Contains information about an attribute field.",
                    properties: {
                      alias: {
                        type: "string",
                        description: "A string defining the field alias."
                      },
                      domain: {
                        type: "object",
                        description: "The domain objects if applicable.",
                        $ref: "#/definitions/domain_schema.json"
                      },
                      editable: {
                        type: "boolean",
                        description:
                          "A Boolean defining whether this field is editable."
                      },
                      exactMatch: {
                        type: "boolean",
                        description:
                          "A Boolean defining whether or not the field is an exact match."
                      },
                      length: {
                        type: "integer",
                        description:
                          "A number defining how many characters are allowed in a string field."
                      },
                      name: {
                        type: "string",
                        description: "A string defining the field name."
                      },
                      nullable: {
                        type: "boolean",
                        description:
                          "A Boolean defining whether this field can have a null value."
                      },
                      type: {
                        type: "string",
                        description: "A string defining the field type.",
                        enum: [
                          "esriFieldTypeBlob",
                          "esriFieldTypeDate",
                          "esriFieldTypeDouble",
                          "esriFieldTypeGeometry",
                          "esriFieldTypeGlobalID",
                          "esriFieldTypeGUID",
                          "esriFieldTypeInteger",
                          "esriFieldTypeOID",
                          "esriFieldTypeRaster",
                          "esriFieldTypeSingle",
                          "esriFieldTypeSmallInteger",
                          "esriFieldTypeString",
                          "esriFieldTypeXML"
                        ]
                      }
                    },
                    additionalProperties: !1
                  },
                  "pointCloudFilter_schema.json": {
                    title: "PointCloud Filter",
                    type: "object",
                    description:
                      "Filters applied to the pointCloud which will hide a point.",
                    oneOf: [
                      {
                        $ref:
                          "#/definitions/pointCloudBitfieldFilter_schema.json"
                      },
                      {
                        $ref: "#/definitions/pointCloudReturnFilter_schema.json"
                      },
                      {
                        $ref: "#/definitions/pointCloudValueFilter_schema.json"
                      }
                    ]
                  },
                  "rangeInfo_schema.json": {
                    title: "Range Information",
                    description: "Range Information",
                    properties: {
                      currentRangeExtent: {
                        type: "array",
                        description:
                          "Contains the min and max values within which the features are visible.",
                        items: { type: "number" },
                        minItems: 2,
                        maxItems: 2
                      },
                      field: {
                        type: "string",
                        description: "Field name to used for the range."
                      },
                      fullRangeExtent: {
                        type: "array",
                        description:
                          "Contains the min and max values of all the features for this rangeInfo.",
                        items: { type: "number" },
                        minItems: 2,
                        maxItems: 2
                      },
                      name: {
                        type: "string",
                        description:
                          "A unique name that can be referenced by webMap.activeRanges."
                      },
                      type: {
                        type: "string",
                        description: "Type of range object.",
                        enum: ["rangeInfo"]
                      }
                    },
                    required: ["field", "name", "type"],
                    additionalProperties: !1
                  },
                  "source_schema.json": {
                    title: "source",
                    type: "object",
                    description:
                      "Contains [dynamicDataLayer](dynamicDataLayer_source.md) object and [dynamicMapLayer](dynamicDataLayer_source.md) object. If the service supports dynamic layers, the [layerDefinition's ](layerDefinition.md) source property must be specified.",
                    oneOf: [
                      {
                        $ref:
                          "#/definitions/dynamicDataLayer_source_schema.json"
                      },
                      {
                        $ref: "#/definitions/dynamicMapLayer_source_schema.json"
                      }
                    ]
                  },
                  "type_schema.json": {
                    title: "type",
                    type: "object",
                    description:
                      "Contains information about an attribute field.",
                    properties: {
                      domains: {
                        type: "object",
                        description:
                          "A comma-delimited series of domain objects for each domain in the type.",
                        patternProperties: {
                          ".*": {
                            type: "object",
                            $ref: "#/definitions/domain_schema.json"
                          }
                        }
                      },
                      id: {
                        description:
                          "A unique string or numerical ID for the type.",
                        oneOf: [{ type: "string" }, { type: "number" }]
                      },
                      name: {
                        type: "string",
                        description: "A user-friendly name for the type."
                      },
                      templates: {
                        type: "array",
                        description:
                          "Defined as a property of the layer definition when there are no types defined; otherwise, templates are defined as properties of the types.",
                        items: {
                          type: "object",
                          $ref: "#/definitions/template_schema.json"
                        },
                        uniqueItems: !0
                      }
                    },
                    required: ["id"],
                    additionalProperties: !1
                  },
                  "popupExpressionInfo_schema.json": {
                    title: "popupExpressionInfo",
                    description: "Arcade expression added to the pop-up.",
                    properties: {
                      expression: {
                        type: "string",
                        description: "The Arcade expression."
                      },
                      name: {
                        type: "string",
                        description: "Unique identifier for the expression."
                      },
                      returnType: {
                        type: "string",
                        description:
                          "Return type of the Arcade expression, can be number or string. Defaults to string value. Number values are assumed to be `double`. This can be determined by the authoring client by executing the expression using a sample feature(s), although it can be corrected by the user. Knowing the returnType allows the authoring client to present fields in relevant contexts. For example, numeric fields in numeric contexts such as charts.",
                        enum: ["number", "string"]
                      },
                      title: {
                        type: "string",
                        description: "Title of the expression."
                      }
                    },
                    additionalProperties: !1
                  },
                  "fieldInfo_schema.json": {
                    title: "fieldInfo",
                    type: "object",
                    description:
                      "Defines how a field in the dataset participates (or does not participate) in a popup window.",
                    properties: {
                      fieldName: {
                        type: "string",
                        description:
                          "A string containing the field name as defined by the service. Anywhere that a fieldname is referenced as `{field-name} in popupInfo, an Arcade expression can also be referenced as `{expression/<expression-name>}`."
                      },
                      format: {
                        type: "object",
                        description:
                          "A format object used with numerical or date fields to provide more detail about how the value should be displayed in a popup window.",
                        $ref: "#/definitions/format_schema.json"
                      },
                      isEditable: {
                        type: "boolean",
                        description:
                          "A Boolean determining whether users can edit this field. Not applicable to Arcade expressions."
                      },
                      label: {
                        type: "string",
                        description:
                          "A string containing the field alias. This can be overridden by the web map author. Not applicable to Arcade expressions as `title` is used instead."
                      },
                      statisticType: {
                        type: "string",
                        description:
                          "Used in a 1:many or many:many relationship to compute the statistics on the field to show in the popup.",
                        enum: ["avg", "count", "max", "min", "stddev", "sum"]
                      },
                      stringFieldOption: {
                        type: "string",
                        description:
                          "A string determining what type of input box editors see when editing the field. Applies only to string fields. Not applicable to Arcade expressions.",
                        enum: ["textbox", "textarea", "richtext"]
                      },
                      tooltip: {
                        type: "string",
                        description:
                          "A string providing an editing hint for editors of the field. Not applicable to Arcade expressions."
                      },
                      visible: {
                        type: "boolean",
                        description:
                          "A Boolean determining whether the field is visible in the popup window."
                      }
                    },
                    additionalProperties: !1
                  },
                  "popupLayerOptions_schema.json": {
                    title: "Layer Options",
                    type: "object",
                    description:
                      "Additional options available for the popup layer.",
                    properties: {
                      showNoDataRecords: {
                        type: "boolean",
                        description:
                          "Indicates whether or not the NoData records should be displayed."
                      }
                    }
                  },
                  "mediaInfo_schema.json": {
                    title: "mediaInfo",
                    type: "object",
                    description:
                      "Defines an image or a chart to be displayed in a popup window.",
                    properties: {
                      caption: {
                        type: "string",
                        description: "A string caption describing the media."
                      },
                      refreshInterval: {
                        type: "number",
                        description:
                          "Refresh interval of the layer in minutes. Non-zero value indicates automatic layer refresh at the specified interval. Value of 0 indicates auto refresh is not enabled. If the property does not exist, it's equivalent to having a value of 0. Only applicable when `type` is set to `image`.",
                        default: 0
                      },
                      title: {
                        description: "A string title for the media.",
                        oneOf: [{ type: "string" }, { type: "null" }]
                      },
                      type: {
                        type: "string",
                        description: "A string defining the type of media.",
                        enum: [
                          "image",
                          "barchart",
                          "columnchart",
                          "linechart",
                          "piechart"
                        ]
                      },
                      value: {
                        description:
                          "A value object containing information about how the image should be retrieved or how the chart should be constructed.",
                        oneOf: [
                          { $ref: "#/definitions/value_schema.json" },
                          { type: "null" }
                        ]
                      }
                    },
                    additionalProperties: !1
                  },
                  "popupElement_schema.json": {
                    title: "popupElement",
                    type: "object",
                    description:
                      "Popup elements allow users to author popups, using multiple elements such as tabular views, string description, media (charts and images), and attachments of the attributes and control the order in which they appear. Specifically, popupElements do the following: 1) provide the ability to explicitly add a field/ value table in addition to a description, 2) allow adding multiple description elements, and 3) allow a user to author and consume elements of a popup in the order of their choosing.",
                    properties: {
                      displayType: {
                        type: "string",
                        description:
                          "This property applies to elements of type `attachments`. A string value indicating how to display the attachment. Possible values are, `preview`, and `list`. If `list` is specified, attachments show as links."
                      },
                      fieldInfos: {
                        type: "array",
                        description:
                          "This property applies to elements of type `fields`.  It is an array of [popupInfo.fieldInfo](fieldInfo.md) objects representing a field/value pair displayed as a table within the popupElement. If the `fieldInfos` property is not provided, the popupElement will display whatever is specified directly in the [popupInfo.fieldInfos](popupInfo.md) property.",
                        items: {
                          type: "object",
                          $ref: "#/definitions/fieldInfo_schema.json"
                        }
                      },
                      mediaInfos: {
                        type: "array",
                        description:
                          "This property applies to elements of type `media`. An array of [popupInfo.mediaInfo](popupInfo.md) objects representing an image or chart for display. If no `mediaInfos` property is provided, the popupElement will display whatever is specified in the [popupInfo.mediaInfo](popupInfo.md) property.",
                        items: {
                          type: "object",
                          $ref: "#/definitions/mediaInfo_schema.json"
                        }
                      },
                      text: {
                        type: "string",
                        description:
                          "This property applies to elements of type `text`. This is string value indicating the text to be displayed within the popupElement. If no `text` property is provided, the popupElement will display whatever is specified in the [popupInfo.description](popupInfo.md) property."
                      },
                      type: {
                        type: "string",
                        description:
                          "String value indicating which elements to use.",
                        enum: ["text", "fields", "media", "attachments"]
                      }
                    }
                  },
                  "relatedRecordsInfo_schema.json": {
                    title: "relatedRecordsInfo",
                    type: "object",
                    description:
                      "The sort in the popupInfo for the parent feature. This impacts the sorting order for the returned child records.",
                    properties: {
                      orderByFields: {
                        type: "array",
                        description:
                          "Array of orderByFields objects indicating the field display order for the related records and whether they should be sorted in ascending <code>'asc'</code> or descending <code>'desc'</code> order.",
                        items: {
                          type: "object",
                          $ref: "#/definitions/orderByFields_schema.json"
                        }
                      },
                      showRelatedRecords: {
                        type: "boolean",
                        description:
                          "Required boolean value indicating whether to display related records. If <code>true</code>, client should let the user navigate to the related records. Defaults to <code>true</code> if the layer participates in a relationship AND the related layer/table has already been added to the scene (either as an operationalLayer or as a table)."
                      }
                    }
                  },
                  "search_layer_schema.json": {
                    title: "search layer",
                    type: "object",
                    description: "Layer configuration for search.",
                    properties: {
                      field: {
                        allOf: [
                          { $ref: "#/definitions/field_schema.json" },
                          {
                            properties: { name: {}, exactMatch: {}, type: {} },
                            additionalProperties: !1
                          }
                        ]
                      },
                      id: {
                        type: "string",
                        description: "A string identifying the layer."
                      },
                      subLayer: {
                        type: "integer",
                        description: "Optional index for a sublayer."
                      }
                    },
                    required: ["field", "id"],
                    additionalProperties: !1
                  },
                  "point_geometry_schema.json": {
                    title: "pointGeometry",
                    type: "object",
                    description:
                      "Defines the JSON formats of the point and spatial reference objects.",
                    properties: {
                      m: {
                        type: "number",
                        description:
                          "M coordinate which contains measures used for linear referencing."
                      },
                      spatialReference: {
                        type: "object",
                        description:
                          "The spatial reference can be defined using a well-known ID (WKID) or well-known text (WKT).",
                        $ref: "#/definitions/spatialReference_schema.json"
                      },
                      x: {
                        description:
                          "X coordinate which is measured along the east/west axis.",
                        oneOf: [
                          { type: "number" },
                          { type: "null" },
                          { type: "string", enum: ["NaN"] }
                        ]
                      },
                      y: {
                        type: "number",
                        description:
                          "Y coordinate which is measured along the north/south axis."
                      },
                      z: {
                        type: "number",
                        description:
                          "Z coordinate which measures height or elevation."
                      }
                    },
                    required: ["x"],
                    additionalProperties: !1
                  },
                  "multipoint_geometry_schema.json": {
                    title: "multipointGeometry",
                    type: "object",
                    description:
                      "Contains an array of points, along with a spatial reference field.",
                    properties: {
                      hasM: {
                        type: "boolean",
                        description:
                          "Indicates whether the geometry contains M coordinate values."
                      },
                      hasZ: {
                        type: "boolean",
                        description:
                          "Indicates whether the geometry contains Z coordinate values."
                      },
                      points: {
                        type: "array",
                        description:
                          "An array that corresponds to 2D and 3D points.",
                        items: {
                          type: "array",
                          items: { type: "number" },
                          minItems: 2,
                          maxItems: 4
                        }
                      },
                      spatialReference: {
                        type: "object",
                        description:
                          "The spatial reference can be defined using a well-known ID (WKID) or well-known text (WKT).",
                        $ref: "#/definitions/spatialReference_schema.json"
                      }
                    },
                    required: ["points"],
                    additionalProperties: !1
                  },
                  "polygon_geometry_schema.json": {
                    title: "polygonGeometry",
                    type: "object",
                    description:
                      "A polygon contains an array of rings and a spatial reference.",
                    properties: {
                      hasM: {
                        type: "boolean",
                        description:
                          "Indicates whether the geometry contains M coordinate values."
                      },
                      hasZ: {
                        type: "boolean",
                        description:
                          "Indicates whether the geometry contains Z coordinate values."
                      },
                      rings: {
                        type: "array",
                        description:
                          "Represents an array of rings. Each ring is an array of points.",
                        items: {
                          type: "array",
                          items: {
                            type: "array",
                            items: { type: "number" },
                            minItems: 2,
                            maxItems: 4
                          },
                          minItems: 3
                        }
                      },
                      spatialReference: {
                        type: "object",
                        description:
                          "The spatial reference can be defined using a well-known ID (WKID) or well-known text (WKT).",
                        $ref: "#/definitions/spatialReference_schema.json"
                      }
                    },
                    required: ["rings"],
                    additionalProperties: !1
                  },
                  "polyline_geometry_schema.json": {
                    title: "polylineGeometry",
                    type: "object",
                    description:
                      "Contains an array of paths and a spatialReference.",
                    properties: {
                      hasM: {
                        type: "boolean",
                        description:
                          "Indicates whether the geometry contains M coordinate values."
                      },
                      hasZ: {
                        type: "boolean",
                        description:
                          "Indicates whether the geometry contains Z coordinate values."
                      },
                      paths: {
                        type: "array",
                        description:
                          "Three nested array levels describing a polyline. The first level describes individual paths; the second describes the points of these paths; and the third gives the coordinates of the points.",
                        items: {
                          type: "array",
                          items: {
                            type: "array",
                            items: { type: "number" },
                            minItems: 2,
                            maxItems: 4
                          },
                          minItems: 2
                        }
                      },
                      spatialReference: {
                        type: "object",
                        description:
                          "The spatial reference can be defined using a well-known ID (WKID) or well-known text (WKT).",
                        $ref: "#/definitions/spatialReference_schema.json"
                      }
                    },
                    required: ["paths"],
                    additionalProperties: !1
                  },
                  "multidimensionalDefinition_schema.json": {
                    title: "Multi-dimensional Definition",
                    type: "object",
                    properties: {
                      dimensionName: {
                        type: "string",
                        description:
                          "Type of dimension being used (ex. StdTime)."
                      },
                      isSlice: {
                        type: "boolean",
                        description: "Is slice?",
                        default: !0
                      },
                      values: {
                        type: "array",
                        description: "Numerical array of associated values.",
                        items: { type: "number" }
                      },
                      variableName: {
                        type: "string",
                        description: "Name of the variable."
                      }
                    },
                    anyOf: [
                      { required: ["variableName"] },
                      { required: ["dimensionName", "values"] }
                    ],
                    additionalProperties: !1,
                    dependencies: {
                      dimensionName: ["values"],
                      values: ["dimensionName"]
                    }
                  },
                  "featureSet_schema.json": {
                    title: "featureSet",
                    type: "object",
                    description:
                      "A featureSet object contains the geometry and attributes of features in a layer. This object is used with feature collections only.",
                    properties: {
                      features: {
                        type: "array",
                        description:
                          "An array of feature objects containing geometry and a set of attributes.",
                        items: {
                          type: "object",
                          $ref: "#/definitions/feature_schema.json"
                        },
                        uniqueItems: !0
                      },
                      geometryType: {
                        type: "string",
                        description: "The type of geometry.",
                        enum: [
                          "esriGeometryPoint",
                          "esriGeometryMultipoint",
                          "esriGeometryPolyline",
                          "esriGeometryPolygon",
                          "esriGeometryEnvelope"
                        ]
                      }
                    },
                    required: ["features", "geometryType"],
                    additionalProperties: !1
                  },
                  "lod_schema.json": {
                    title: "lod",
                    type: "object",
                    properties: {
                      level: {
                        type: "integer",
                        description: "ID for each level."
                      },
                      levelValue: {
                        type: "string",
                        description:
                          "String to be used when constructing URL to access a tile from this LOD."
                      },
                      resolution: {
                        type: "number",
                        description:
                          "Resolution in map units of each pixel in a tile for each level."
                      },
                      scale: {
                        type: "number",
                        description: "Scale for each level."
                      }
                    },
                    additionalProperties: !1
                  },
                  "parameter_schema.json": {
                    title: "parameter",
                    type: "object",
                    description:
                      "Objects defined by a [definitionEditor](definitionEditor.md) input.",
                    properties: {
                      defaultValue: {
                        description:
                          "The default value that is automatically given if nothing is provided.",
                        oneOf: [
                          {
                            type: "number",
                            description:
                              "Value given automatically if none provided."
                          },
                          { type: "string" }
                        ]
                      },
                      fieldName: {
                        type: "string",
                        description:
                          "A string value representing the name of the field to query."
                      },
                      parameterId: {
                        type: "integer",
                        description:
                          "Number given to uniquely identify the specified parameter."
                      },
                      type: {
                        type: "string",
                        description:
                          "The field type for the specified field parameter.",
                        enum: [
                          "esriFieldTypeBlob",
                          "esriFieldTypeDate",
                          "esriFieldTypeDouble",
                          "esriFieldTypeGeometry",
                          "esriFieldTypeGlobalID",
                          "esriFieldTypeGUID",
                          "esriFieldTypeInteger",
                          "esriFieldTypeOID",
                          "esriFieldTypeRaster",
                          "esriFieldTypeSingle",
                          "esriFieldTypeSmallInteger",
                          "esriFieldTypeString",
                          "esriFieldTypeXML"
                        ]
                      },
                      utcValue: {
                        type: "integer",
                        description:
                          "An integer value representing exact UNIX time used when `defaultValue` is a date string."
                      }
                    },
                    additionalProperties: !1
                  },
                  "labelingInfo_schema.json": {
                    title: "labelingInfo",
                    type: "object",
                    description:
                      "The labelingInfo object specifies the label definition for a layer.",
                    properties: {
                      labelExpression: {
                        type: "string",
                        description:
                          "Defines the expression for text of labels. Deprecated on FeatureLayer, Use `labelExpressionInfo` instead."
                      },
                      labelExpressionInfo: {
                        type: "object",
                        $ref: "#/definitions/labelExpressionInfo_schema.json"
                      },
                      labelPlacement: {
                        type: "string",
                        description:
                          "This string property specifies the label placement with respect to that of its feature. A list of label placement values categorized by feature geometry types.",
                        enum: [
                          "esriServerPointLabelPlacementAboveCenter",
                          "esriServerPointLabelPlacementBelowCenter",
                          "esriServerPointLabelPlacementCenterCenter",
                          "esriServerPointLabelPlacementAboveLeft",
                          "esriServerPointLabelPlacementBelowLeft",
                          "esriServerPointLabelPlacementCenterLeft",
                          "esriServerPointLabelPlacementAboveRight",
                          "esriServerPointLabelPlacementBelowRight",
                          "esriServerPointLabelPlacementCenterRight",
                          "esriServerLinePlacementAboveAfter",
                          "esriServerLinePlacementAboveStart",
                          "esriServerLinePlacementBelowAfter",
                          "esriServerLinePlacementBelowStart",
                          "esriServerLinePlacementCenterAfter",
                          "esriServerLinePlacementCenterStart",
                          "esriServerLinePlacementAboveAlong",
                          "esriServerLinePlacementAboveEnd",
                          "esriServerLinePlacementBelowAlong",
                          "esriServerLinePlacementBelowEnd",
                          "esriServerLinePlacementCenterAlong",
                          "esriServerLinePlacementCenterEnd",
                          "esriServerLinePlacementAboveBefore",
                          "esriServerLinePlacementBelowBefore",
                          "esriServerLinePlacementCenterBefore",
                          "esriServerPolygonPlacementAlwaysHorizontal"
                        ]
                      },
                      maxScale: {
                        type: "number",
                        description:
                          "Represents the maximum scale at which the layer definition will be applied."
                      },
                      minScale: {
                        type: "number",
                        description:
                          "Represents the minimum scale at which the layer definition will be applied."
                      },
                      name: {
                        type: "string",
                        description: "The name of the label class."
                      },
                      symbol: {
                        type: "object",
                        description: "The text symbol used to label.",
                        $ref: "#/definitions/labelSymbol3D_schema.json"
                      },
                      useCodedValues: {
                        type: "boolean",
                        description:
                          "Boolean value indicating whether to display the coded values for the specified field name(s)."
                      },
                      where: {
                        type: "string",
                        description:
                          "String template used to determine which features to label."
                      }
                    },
                    additionalProperties: !1
                  },
                  "renderer_schema.json": {
                    title: "renderer",
                    type: "object",
                    description:
                      "The renderer object contains the drawing information for the operationalLayer. This is a list of links to all the renderer objects.",
                    oneOf: [
                      { $ref: "#/definitions/classBreaksRenderer_schema.json" },
                      { $ref: "#/definitions/pointCloudRenderers_schema.json" },
                      { $ref: "#/definitions/rasterRenderers_schema.json" },
                      { $ref: "#/definitions/simpleRenderer_schema.json" },
                      {
                        $ref:
                          "#/definitions/uniqueValueFromStyleRenderer_schema.json"
                      },
                      { $ref: "#/definitions/uniqueValueRenderer_schema.json" }
                    ]
                  },
                  "featureExpressionInfo_schema.json": {
                    title: "featureExpressionInfo",
                    type: "object",
                    description:
                      "An object that defines an expression for per-feature elevation.",
                    properties: {
                      expression: {
                        type: "string",
                        description:
                          "An [Arcade expression](https://developers.arcgis.com/arcade/) evaluating to a number.",
                        minLength: 1
                      },
                      title: {
                        type: "string",
                        description: "Title of the expression.",
                        minLength: 1
                      }
                    },
                    required: ["expression"],
                    additionalProperties: !1
                  },
                  "domain_schema.json": {
                    title: "domain",
                    type: "object",
                    description:
                      "Domains specify the set of valid values for a field. The links below are the available domains.",
                    oneOf: [
                      { $ref: "#/definitions/codedValue_domain_schema.json" },
                      { $ref: "#/definitions/inherited_domain_schema.json" },
                      { $ref: "#/definitions/range_domain_schema.json" }
                    ]
                  },
                  "pointCloudBitfieldFilter_schema.json": {
                    title: "PointCloud Bitfield Filter",
                    type: "object",
                    description:
                      "Filters points based on the value of the specified bitfield attribute.",
                    properties: {
                      field: {
                        type: "string",
                        description:
                          "The name of the field that is used for the filter."
                      },
                      requiredClearBits: {
                        type: "array",
                        description:
                          "List ALL bit numbers that must cleared (=0) for the point to be kept. bit 0 is LSB.",
                        items: { type: "number" }
                      },
                      requiredSetBits: {
                        type: "array",
                        description:
                          " List ALL bit numbers that must set (=1) for the point to be kept. bit 0 is LSB.",
                        items: { type: "number" }
                      },
                      type: {
                        type: "string",
                        enum: ["pointCloudBitfieldFilter"]
                      }
                    },
                    anyOf: [
                      { required: ["requiredClearBits"] },
                      { required: ["requiredSetBits"] }
                    ],
                    required: ["field", "type"],
                    additionalProperties: !1
                  },
                  "pointCloudReturnFilter_schema.json": {
                    title: "PointCloud Return Filter",
                    type: "object",
                    description:
                      "Filters points based on the value of the return number/return count.",
                    properties: {
                      field: {
                        type: "string",
                        description:
                          "The name of the field that is used for the filter."
                      },
                      includedReturns: {
                        type: "array",
                        description:
                          "All points with at least one specified return status will be kept. Status values: `last`, `firstOfMany`, `lastOfMany`, `single`",
                        items: {
                          type: "string",
                          enum: ["last", "firstOfMany", "lastOfMany", "single"]
                        }
                      },
                      type: { type: "string", enum: ["pointCloudReturnFilter"] }
                    },
                    required: ["field", "includedReturns", "type"],
                    additionalProperties: !1
                  },
                  "pointCloudValueFilter_schema.json": {
                    title: "PointCloud Value Filter",
                    type: "object",
                    description:
                      "Filters points based on the value of an specified attribute.",
                    properties: {
                      field: {
                        type: "string",
                        description:
                          "The name of the field that is used for the filter."
                      },
                      mode: {
                        type: "string",
                        description:
                          "Defines if values should be included or excluded.",
                        enum: ["exclude", "include"]
                      },
                      type: {
                        type: "string",
                        description:
                          "Filters points based on the value of an specified attribute.",
                        enum: ["pointCloudValueFilter"]
                      },
                      values: {
                        type: "array",
                        description: "list of values",
                        items: { type: "number" }
                      }
                    },
                    required: ["field", "mode", "type", "values"],
                    additionalProperties: !1
                  },
                  "dynamicDataLayer_source_schema.json": {
                    title: "Dynamic data layer",
                    type: "object",
                    description:
                      "A dynamic data layer derived from a registered workspace. More information on this can be found in the [ArcGIS REST API help](http://resources.arcgis.com/en/help/rest/apiref/layersource.html).",
                    properties: {
                      dataSource: {
                        type: "object",
                        description: "The layer's data source.",
                        $ref: "#/definitions/dataSource_schema.json"
                      },
                      fields: {
                        type: "array",
                        description:
                          "An array of objects specifying information about an attribute field.",
                        items: {
                          type: "object",
                          $ref: "#/definitions/field_schema.json"
                        },
                        uniqueItems: !0
                      },
                      type: {
                        type: "string",
                        description: "A string value indicating the type.",
                        enum: ["dataLayer"]
                      }
                    },
                    required: ["dataSource", "type"],
                    additionalProperties: !1
                  },
                  "dynamicMapLayer_source_schema.json": {
                    title: "Dynamic map layer",
                    type: "object",
                    description:
                      "A dynamic map layer refers to a layer in the current map service. More information on this can be found in the [ArcGIS REST API help](http://resources.arcgis.com/en/help/rest/apiref/layersource.html).",
                    properties: {
                      gdbVersion: {
                        type: "string",
                        description:
                          "If applicable, specify this to use an alternate geodatabase version."
                      },
                      mapLayerId: {
                        type: "integer",
                        description: "The current map layer's id."
                      },
                      type: {
                        type: "string",
                        description: "A string value indicating the type.",
                        enum: ["mapLayer"]
                      }
                    },
                    required: ["mapLayerId", "type"],
                    additionalProperties: !1
                  },
                  "template_schema.json": {
                    title: "template",
                    type: "object",
                    description:
                      "Templates describe features that can be created in a layer. They are generally used with feature collections and editable web-based CSV layers. Templates are not used with ArcGIS feature services as these already have templates defined in the service. They are also defined as properties of the layer definition when there are no defined types. Otherwise, templates are defined as properties of the types.",
                    properties: {
                      description: {
                        type: "string",
                        description:
                          "A string value containing a detailed description of the template."
                      },
                      drawingTool: {
                        type: "string",
                        description:
                          "An optional string that can define a client-side drawing tool to be used with this feature.",
                        enum: [
                          "esriFeatureEditToolAutoCompletePolygon",
                          "esriFeatureEditToolPolygon",
                          "esriFeatureEditToolTriangle",
                          "esriFeatureEditToolRectangle",
                          "esriFeatureEditToolLeftArrow",
                          "esriFeatureEditToolRightArrow",
                          "esriFeatureEditToolEllipse",
                          "esriFeatureEditToolUpArrow",
                          "esriFeatureEditToolDownArrow",
                          "esriFeatureEditToolCircle",
                          "esriFeatureEditToolFreehand",
                          "esriFeatureEditToolLine",
                          "esriFeatureEditToolNone",
                          "esriFeatureEditToolText",
                          "esriFeatureEditToolPoint"
                        ]
                      },
                      name: {
                        type: "string",
                        description:
                          "A string containing a user-friendly name for the template."
                      },
                      prototype: {
                        type: "object",
                        description:
                          "A feature object representing a prototypical feature for the template.",
                        $ref: "#/definitions/feature_schema.json"
                      }
                    },
                    additionalProperties: !1
                  },
                  "format_schema.json": {
                    title: "format",
                    type: "object",
                    description:
                      "The format object can be used with numerical or date fields to provide more detail about how values should be displayed in popup windows.",
                    properties: {
                      dateFormat: {
                        type: "string",
                        description:
                          "A string used with date fields to specify how the date should appear in popup windows.",
                        enum: [
                          "shortDate",
                          "shortDateLE",
                          "longMonthDayYear",
                          "dayShortMonthYear",
                          "longDate",
                          "shortDateShortTime",
                          "shortDateLEShortTime",
                          "shortDateShortTime24",
                          "shortDateLEShortTime24",
                          "shortDateLongTime",
                          "shortDateLELongTime",
                          "shortDateLongTime24",
                          "shortDateLELongTime24",
                          "longMonthYear",
                          "shortMonthYear",
                          "year"
                        ]
                      },
                      digitSeparator: {
                        type: "boolean",
                        description:
                          "A Boolean used with numerical fields. A value of true allows the number to have a digit (or thousands) separator when the value appears in popup windows. Depending on the locale, this separator is a decimal point or a comma. A value of false means that no separator will be used."
                      },
                      places: {
                        type: "integer",
                        description:
                          "An integer used with numerical fields to specify the number of supported decimal places that should appear in popup windows. Any places beyond this value are rounded."
                      }
                    },
                    additionalProperties: !1
                  },
                  "value_schema.json": {
                    title: "value",
                    type: "object",
                    description:
                      "The value object contains information for popup windows about how images should be retrieved or charts constructed.",
                    properties: {
                      fields: {
                        type: "array",
                        description:
                          "Used with charts. An array of strings, with each string containing the name of a field to display in the chart.",
                        items: { type: "string" },
                        uniqueItems: !0
                      },
                      linkURL: {
                        type: "string",
                        description:
                          "Used with images. A string containing a URL to be launched in a browser when a user clicks the image."
                      },
                      normalizeField: {
                        type: "string",
                        description:
                          "Used with charts. An optional string containing the name of a field. The values of all fields in the chart will be normalized (divided) by the value of this field."
                      },
                      sourceURL: {
                        type: "string",
                        description:
                          "Used with images. A string containing the URL to the image."
                      },
                      tooltipField: {
                        type: "string",
                        description:
                          "String value indicating the tooltip for a chart specified from another field. This field is needed when related records are not sued. It is used for showing tooltips from another field in the same layer or related layer/table."
                      }
                    },
                    additionalProperties: !1
                  },
                  "orderByFields_schema.json": {
                    title: "orderByFields",
                    type: "object",
                    description:
                      "Object indicating the field display order for the related records and whether they should be sorted in ascending or descending order.",
                    properties: {
                      field: {
                        type: "string",
                        description:
                          "The attribute value of the field selected that will drive the sorting of related records."
                      },
                      order: {
                        type: "string",
                        description:
                          "Set the ascending or descending sort order of the returned related records.",
                        enum: ["asc", "desc"]
                      }
                    }
                  },
                  "feature_schema.json": {
                    title: "feature",
                    type: "object",
                    description:
                      "Contains information about an attribute field and feature geometry.",
                    properties: {
                      attributes: {
                        type: "object",
                        description:
                          "The feature attributes. A JSON object that contains a dictionary of name-value pairs. The names are the feature field names. The values are the field values, and they can be any of the standard JSON types: string, number, and boolean. Note that date values are encoded as numbers. The number represents the number of milliseconds since epoch (January 1, 1970) in UTC."
                      },
                      geometry: {
                        type: "object",
                        description:
                          "It can be any of the supported geometry types.",
                        $ref: "#/definitions/geometry_schema.json"
                      },
                      symbol: {
                        type: "object",
                        description: "Symbol used for drawing the feature.",
                        $ref: "#/definitions/symbol3D_schema.json"
                      }
                    },
                    additionalProperties: !1
                  },
                  "labelExpressionInfo_schema.json": {
                    title: "labelExpressionInfo",
                    type: "object",
                    description:
                      "An object that defines an expression for text of labels",
                    properties: {
                      expression: {
                        type: "string",
                        description:
                          "An [Arcade expression](https://developers.arcgis.com/arcade/) evaluating to either a string or a number."
                      }
                    },
                    additionalProperties: !1
                  },
                  "labelSymbol3D_schema.json": {
                    title: "LabelSymbol3D",
                    type: "object",
                    description:
                      "LabelSymbol3D is used to render labels for features from a FeatureLayer in a 3D SceneView.",
                    properties: {
                      callout: { $ref: "#/definitions/callout_schema.json" },
                      symbolLayers: {
                        type: "array",
                        description:
                          "A Collection of Symbol3DLayer objects used to visualize the graphic or feature.",
                        items: {
                          oneOf: [
                            {
                              $ref:
                                "#/definitions/textSymbol3DLayer_schema.json"
                            }
                          ]
                        }
                      },
                      type: {
                        type: "string",
                        description: "Specifies the type of symbol used.",
                        enum: ["LabelSymbol3D"]
                      },
                      verticalOffset: {
                        $ref: "#/definitions/verticalOffset_schema.json"
                      }
                    },
                    required: ["symbolLayers", "type"],
                    additionalProperties: !1
                  },
                  "classBreaksRenderer_schema.json": {
                    title: "ClassBreaks Renderer",
                    type: "object",
                    description:
                      "A class breaks renderer symbolizes based on the value of some numeric attribute. The classBreakInfo define the values at which the symbology changes.",
                    properties: {
                      authoringInfo: {
                        type: "object",
                        description:
                          "An object containing metadata about the authoring process for creating a renderer object. This allows the authoring clients to save specific overridable settings so that next time it is accessed via the UI, their selections are remembered. Non-authoring clients can ignore it.",
                        $ref: "#/definitions/authoringInfo_schema.json"
                      },
                      backgroundFillSymbol: {
                        type: "object",
                        description: "Supported only for polygon features.",
                        $ref: "#/definitions/polygonSymbol3D_schema.json"
                      },
                      classBreakInfos: {
                        type: "array",
                        description: "Array of classBreakInfo objects.",
                        items: {
                          type: "object",
                          $ref: "#/definitions/classBreakInfo_schema.json"
                        }
                      },
                      defaultLabel: {
                        type: "string",
                        description:
                          "Label for the default symbol used to draw unspecified values."
                      },
                      defaultSymbol: {
                        type: "object",
                        description:
                          "Symbol used when a value cannot be classified.",
                        $ref: "#/definitions/symbol3D_schema.json"
                      },
                      field: {
                        type: "string",
                        description: "Attribute field used for renderer."
                      },
                      legendOptions: {
                        type: "object",
                        description:
                          "A legend containing one title, which is a string describing the renderer in the legend.",
                        $ref: "#/definitions/rendererLegendOptions_schema.json"
                      },
                      minValue: {
                        type: "number",
                        description:
                          "The minimum numeric data value needed to begin class breaks."
                      },
                      normalizationField: {
                        type: "string",
                        description:
                          "Used when normalizationType is field. The string value indicating the attribute field by which the data value is normalized."
                      },
                      normalizationTotal: {
                        type: "number",
                        description:
                          "Used when normalizationType is percent-of-total, this number property contains the total of all data values."
                      },
                      normalizationType: {
                        type: "string",
                        description: "Determine how the data was normalized.",
                        enum: [
                          "esriNormalizeByField",
                          "esriNormalizeByLog",
                          "esriNormalizeByPercentOfTotal"
                        ]
                      },
                      type: {
                        type: "string",
                        description: "Specifies the type of renderer used.",
                        enum: ["classBreaks"]
                      },
                      valueExpression: {
                        type: "string",
                        description:
                          "An [Arcade expression](https://developers.arcgis.com/arcade/) evaluating to a number."
                      },
                      valueExpressionTitle: {
                        type: "string",
                        description:
                          "The title identifying and describing the associated [Arcade](https://developers.arcgis.com/arcade/) expression as defined in the `valueExpression` property."
                      },
                      visualVariables: {
                        type: "array",
                        description:
                          "An array of objects used to set rendering properties.",
                        items: {
                          type: "object",
                          $ref: "#/definitions/visualVariable_schema.json"
                        }
                      }
                    },
                    required: ["classBreakInfos", "type"],
                    additionalProperties: !1
                  },
                  "pointCloudRenderers_schema.json": {
                    title: "PointCloud Renderers",
                    type: "object",
                    description: "Renderers for PointCloud Layers.",
                    oneOf: [
                      {
                        $ref:
                          "#/definitions/pointCloudClassBreaksRenderer_schema.json"
                      },
                      {
                        $ref: "#/definitions/pointCloudRGBRenderer_schema.json"
                      },
                      {
                        $ref:
                          "#/definitions/pointCloudStretchRenderer_schema.json"
                      },
                      {
                        $ref:
                          "#/definitions/pointCloudUniqueValueRenderer_schema.json"
                      }
                    ]
                  },
                  "rasterRenderers_schema.json": {
                    title: "Raster Renderers",
                    type: "object",
                    description: "Renderers for Raster Layers.",
                    oneOf: [
                      {
                        $ref:
                          "#/definitions/rasterClassBreaksRenderer_schema.json"
                      },
                      {
                        $ref: "#/definitions/rasterStretchRenderer_schema.json"
                      },
                      {
                        $ref:
                          "#/definitions/rasterUniqueValueRenderer_schema.json"
                      }
                    ]
                  },
                  "simpleRenderer_schema.json": {
                    title: "Simple Renderer",
                    type: "object",
                    description:
                      "A simple renderer is a renderer that uses one symbol only.",
                    properties: {
                      authoringInfo: {
                        type: "object",
                        description:
                          "An object containing metadata about the authoring process for creating a renderer object. This allows the authoring clients to save specific overridable settings so that next time it is accessed via the UI, their selections are remembered. Non-authoring clients can ignore it.",
                        $ref: "#/definitions/authoringInfo_schema.json"
                      },
                      description: {
                        type: "string",
                        description: "Description of the renderer."
                      },
                      label: {
                        type: "string",
                        description:
                          "The text string that is displayed in the table of contents."
                      },
                      symbol: {
                        type: "object",
                        description:
                          "An object that represents how all features will be drawn.",
                        $ref: "#/definitions/symbol3D_schema.json"
                      },
                      type: {
                        type: "string",
                        description: "Specifies the type of renderer used.",
                        enum: ["simple"]
                      },
                      visualVariables: {
                        type: "array",
                        description:
                          "An array of objects used to set rendering properties.",
                        items: {
                          type: "object",
                          $ref: "#/definitions/visualVariable_schema.json"
                        }
                      }
                    },
                    required: ["symbol", "type"],
                    additionalProperties: !1
                  },
                  "uniqueValueFromStyleRenderer_schema.json": {
                    title: "UniqueValueFromStyle Renderer",
                    type: "object",
                    description:
                      "This is a special version of UniqueValue Renderer, which loads uniqueValue infos from a style definition.",
                    properties: {
                      defaultLabel: {
                        type: "string",
                        description:
                          "Default string for the default symbol used to draw unspecified values."
                      },
                      defaultSymbol: {
                        description:
                          "The defaultSymbol on the renderer that get assigned to features with no value or features that do not fall within the configured data.",
                        $ref: "#/definitions/symbol3D_schema.json"
                      },
                      field1: {
                        type: "string",
                        description:
                          "String value specifying the first field used to render matching values."
                      },
                      styleName: {
                        type: "string",
                        description:
                          "A registered web style name. Can not be used in conjunction with styleUrl."
                      },
                      styleUrl: {
                        type: "string",
                        description:
                          "URL that points to the web style definition. Can not be used in conjunction with styleName.",
                        format: "uri"
                      },
                      type: {
                        type: "string",
                        description: "Specifies the type of renderer used.",
                        enum: ["uniqueValue"]
                      },
                      visualVariables: {
                        type: "array",
                        description:
                          "An array of visualVariable objects used for continuous color or size, simple, and unique values with feature opacity.",
                        items: {
                          $ref: "#/definitions/visualVariable_schema.json"
                        }
                      }
                    },
                    oneOf: [
                      { required: ["type", "styleName"] },
                      { required: ["type", "styleUrl"] }
                    ],
                    additionalProperties: !1
                  },
                  "uniqueValueRenderer_schema.json": {
                    title: "UniqueValue Renderer",
                    type: "object",
                    description:
                      "A unique value renderer symbolizes based on the value of an attribute.",
                    properties: {
                      authoringInfo: {
                        type: "object",
                        description:
                          "An object containing metadata about the authoring process for creating a renderer object. This allows the authoring clients to save specific overridable settings so that next time it is accessed via the UI, their selections are remembered. Non-authoring clients can ignore it.",
                        $ref: "#/definitions/authoringInfo_schema.json"
                      },
                      backgroundFillSymbol: {
                        type: "object",
                        description:
                          "Used for polygon features. It can only be used for bivariate types and size rendering.",
                        $ref: "#/definitions/polygonSymbol3D_schema.json"
                      },
                      defaultLabel: {
                        type: "string",
                        description:
                          "Default label for the default symbol used to draw unspecified values."
                      },
                      defaultSymbol: {
                        description:
                          "The defaultSymbol on the renderer that get assigned to features with no value or features that do not fall within the configured data.",
                        $ref: "#/definitions/symbol3D_schema.json"
                      },
                      field1: {
                        type: "string",
                        description:
                          "Attribute field renderer uses to match values."
                      },
                      field2: {
                        type: "string",
                        description:
                          "If needed, specify an additional attribute field the renderer uses to match values."
                      },
                      field3: {
                        type: "string",
                        description:
                          "If needed, specify an additional attribute field the renderer uses to match values."
                      },
                      fieldDelimiter: {
                        type: "string",
                        description:
                          "String inserted between the values if multiple attribute fields are specified.",
                        default: ", "
                      },
                      legendOptions: {
                        type: "object",
                        description:
                          "A legend containing one title, which is a string describing the renderer in the legend.",
                        $ref: "#/definitions/rendererLegendOptions_schema.json"
                      },
                      type: {
                        type: "string",
                        description: "Specifies the type of renderer used.",
                        enum: ["uniqueValue"]
                      },
                      uniqueValueInfos: {
                        type: "array",
                        description: "An array of uniqueValueInfo objects.",
                        items: {
                          type: "object",
                          $ref: "#/definitions/uniqueValueInfo_schema.json"
                        }
                      },
                      valueExpression: {
                        type: "string",
                        description:
                          "An [Arcade expression](https://developers.arcgis.com/arcade/) evaluating to either a string or a number."
                      },
                      valueExpressionTitle: {
                        type: "string",
                        description:
                          "The title identifying and describing the associated [Arcade](https://developers.arcgis.com/arcade/) expression as defined in the `valueExpression` property."
                      },
                      visualVariables: {
                        type: "array",
                        description:
                          "An array of objects used to set rendering properties.",
                        items: {
                          type: "object",
                          $ref: "#/definitions/visualVariable_schema.json"
                        }
                      }
                    },
                    required: ["type", "uniqueValueInfos"],
                    additionalProperties: !1
                  },
                  "codedValue_domain_schema.json": {
                    title: "codedValue",
                    type: "object",
                    description:
                      "The coded value domain includes both the actual value that is stored in a database and a description of what the code value means.",
                    properties: {
                      codedValues: {
                        type: "array",
                        description: "A set of valid values with unique names.",
                        items: {
                          type: "object",
                          $ref: "#/definitions/codedValue_schema.json"
                        },
                        uniqueItems: !0
                      },
                      name: { type: "string", description: "The domain name." },
                      type: {
                        type: "string",
                        description:
                          "String value representing the domain type.",
                        enum: ["codedValue"]
                      }
                    },
                    required: ["codedValues", "type"],
                    additionalProperties: !1
                  },
                  "inherited_domain_schema.json": {
                    title: "inheritedDomain",
                    type: "object",
                    description:
                      "This domain applies to domains on subtypes. It implies that the domain for a field at the subtype level is the same as the domain for the field at the layer level.",
                    properties: {
                      type: {
                        type: "string",
                        description:
                          "String value representing the domain type.",
                        enum: ["inherited"]
                      }
                    },
                    required: ["type"],
                    additionalProperties: !1
                  },
                  "range_domain_schema.json": {
                    title: "rangeDomain",
                    type: "object",
                    description:
                      "Range domain specifies a range of valid values for a field",
                    properties: {
                      name: { type: "string", description: "The domain name." },
                      range: {
                        type: "array",
                        description:
                          "The first element is the minValue and the second element is the maxValue.",
                        items: { type: "number" },
                        minItems: 2,
                        maxItems: 2,
                        uniqueItems: !0
                      },
                      type: {
                        type: "string",
                        description:
                          "String value representing the domain type.",
                        enum: ["range"]
                      }
                    },
                    required: ["range", "type"],
                    additionalProperties: !1
                  },
                  "dataSource_schema.json": {
                    title: "dataSource",
                    type: "object",
                    description:
                      "This object applies if the [layerDefinition](layerDefinition.md) source is set to `DynamicDataLayer`.",
                    oneOf: [
                      { $ref: "#/definitions/joinTableDataSource_schema.json" },
                      {
                        $ref: "#/definitions/queryTableDataSource_schema.json"
                      },
                      { $ref: "#/definitions/rasterDataSource_schema.json" },
                      { $ref: "#/definitions/tableDataSource_schema.json" }
                    ]
                  },
                  "symbol3D_schema.json": {
                    title: "Symbol3D",
                    type: "object",
                    description:
                      "Symbol3D is the base class for all 3D symbols. It is used to render 2D Point, Polyline, and Polygon features in a FeatureLayer and 3D mesh features in a SceneLayer. All 3D symbols must be used in a SceneView instance; there is no support for 3D rendering in MapViews.",
                    oneOf: [
                      { $ref: "#/definitions/lineSymbol3D_schema.json" },
                      { $ref: "#/definitions/meshSymbol3D_schema.json" },
                      { $ref: "#/definitions/pointSymbol3D_schema.json" },
                      { $ref: "#/definitions/polygonSymbol3D_schema.json" },
                      { $ref: "#/definitions/styleSymbolReference_schema.json" }
                    ]
                  },
                  "callout_schema.json": {
                    title: "Callout",
                    type: "object",
                    description: "Callout configuration for a symbol.",
                    properties: {
                      border: { $ref: "#/definitions/border_schema.json" },
                      color: {
                        description: "The color of the line.",
                        $ref: "#/definitions/color_schema.json"
                      },
                      size: {
                        type: "number",
                        description: "The width of the line in points.",
                        minimum: 0
                      },
                      transparency: {
                        type: "integer",
                        description:
                          "A value between `100` (full transparency) and `0` (full opacity).",
                        minimum: 0,
                        maximum: 100,
                        default: 0
                      },
                      type: {
                        type: "string",
                        description:
                          "The type of the callout. A callout of type `line` connects an offset symbol or label with its location.",
                        enum: ["line"]
                      }
                    },
                    required: ["color", "size", "type"],
                    additionalProperties: !1
                  },
                  "textSymbol3DLayer_schema.json": {
                    title: "TextSymbol3DLayer",
                    type: "object",
                    description: "Symbol layer for text and font definitions.",
                    properties: {
                      enable: { type: "boolean" },
                      font: { $ref: "#/definitions/font_schema.json" },
                      halo: { $ref: "#/definitions/halo_schema.json" },
                      material: { $ref: "#/definitions/material_schema.json" },
                      size: {
                        type: "number",
                        description: "Font size in points, positive only",
                        minimum: 0
                      },
                      text: {
                        type: "string",
                        description:
                          "Text content in the label. Typically this property is not set, as text content is read from labeling field."
                      },
                      type: {
                        type: "string",
                        description: "Specifies the type of symbol used.",
                        enum: ["Text"]
                      }
                    },
                    required: ["type"],
                    additionalProperties: !1
                  },
                  "verticalOffset_schema.json": {
                    title: "verticalOffset",
                    type: "object",
                    description:
                      "Shifts the symbol along the vertical world axis by a given length. The length is set in screen space units.",
                    properties: {
                      maxWorldLength: {
                        type: "number",
                        description:
                          "The maximum vertical symbol lift in world units. It acts as an upper bound to avoid lift becoming too big."
                      },
                      minWorldLength: {
                        type: "number",
                        description:
                          "The minimum vertical symbol lift in world units. It acts as a lower bound to avoid lift becoming too small.",
                        default: 0
                      },
                      screenLength: {
                        type: "number",
                        description: "Maximal screen length of lift in points."
                      }
                    },
                    required: ["screenLength"],
                    additionalProperties: !1
                  },
                  "authoringInfo_schema.json": {
                    title: "authoringInfo",
                    type: "object",
                    description:
                      "The authoringInfo is an object containing metadata about the authoring process for creating a renderer object. This allows the authoring clients to save specific overridable settings so that next time it is accessed via an authoring client, their selections are remembered. Non-authoring clients can ignore it. Properties for color/size/transparency sliders, theme selection, classification information, and additional properties are saved within this object.",
                    properties: {
                      classificationMethod: {
                        type: "string",
                        description:
                          "Used for classed color or size. The default value is `esriClassifyManual`.",
                        enum: [
                          "esriClassifyDefinedInterval",
                          "esriClassifyNaturalBreaks",
                          "esriClassifyEqualInterval",
                          "esriClassifyQuantile",
                          "esriClassifyStandardDeviation",
                          "esriClassifyManual"
                        ],
                        default: "esriClassifyManual"
                      },
                      colorRamp: {
                        type: "object",
                        $ref: "#/definitions/colorRamp_schema.json"
                      },
                      fields: {
                        type: "array",
                        description:
                          "An array of string values representing field names used for creating predominance renderers.",
                        items: { type: "string" }
                      },
                      lengthUnit: {
                        type: "string",
                        description:
                          "Unit used in user interfaces to display world/map sizes and distances",
                        enum: [
                          "inches",
                          "feet",
                          "yards",
                          "miles",
                          "nautical-miles",
                          "millimeters",
                          "centimeters",
                          "decimeters",
                          "meters",
                          "kilometers",
                          "decimal-degrees"
                        ]
                      },
                      standardDeviationInterval: {
                        type: "number",
                        description:
                          "Use this property if the classificationMethod is `esriClassifyStandardDeviation`.",
                        enum: [1, 0.5, 0.33, 0.25]
                      },
                      type: {
                        type: "string",
                        enum: [
                          "classedSize",
                          "classedColor",
                          "predominance",
                          "univariateColorSize"
                        ]
                      },
                      visualVariables: {
                        type: "array",
                        description:
                          "An array of visualVariable objects containing additional information needed when authoring the renderer.",
                        items: {
                          type: "object",
                          $ref:
                            "#/definitions/authoringInfo_visualVariable_schema.json"
                        }
                      }
                    },
                    additionalProperties: !1
                  },
                  "polygonSymbol3D_schema.json": {
                    title: "PolygonSymbol3D",
                    type: "object",
                    description:
                      "PolygonSymbol3D is used to render features with Polygon geometry in a 3D SceneView. Polygon features may also be rendered as points with icons or objects at the centroid of each polygon.",
                    properties: {
                      styleOrigin: {
                        $ref: "#/definitions/styleOrigin_schema.json"
                      },
                      symbolLayers: {
                        type: "array",
                        description:
                          "A Collection of Symbol3DLayer objects used to visualize the graphic or feature.",
                        items: {
                          oneOf: [
                            {
                              $ref:
                                "#/definitions/fillSymbol3DLayer_schema.json"
                            },
                            {
                              $ref:
                                "#/definitions/extrudeSymbol3DLayer_schema.json"
                            },
                            {
                              $ref:
                                "#/definitions/iconSymbol3DLayer_schema.json"
                            },
                            {
                              $ref:
                                "#/definitions/objectSymbol3DLayer_schema.json"
                            },
                            {
                              description:
                                "<em>Deprecated</em>, use [fillSymbol3DLayer with outline](fillSymbol3DLayer.md) instead",
                              $ref:
                                "#/definitions/lineSymbol3DLayer_schema.json"
                            }
                          ]
                        }
                      },
                      type: {
                        type: "string",
                        description: "Specifies the type of symbol used.",
                        enum: ["PolygonSymbol3D"]
                      }
                    },
                    required: ["symbolLayers", "type"],
                    additionalProperties: !1
                  },
                  "classBreakInfo_schema.json": {
                    title: "classBreakInfo",
                    type: "object",
                    description:
                      "The classBreaksInfo object provides information about the class breaks associated with the renderer.",
                    properties: {
                      classMaxValue: {
                        type: "number",
                        description:
                          "A numeric value used to specify the maximum value for a break."
                      },
                      classMinValue: {
                        type: "number",
                        description:
                          "A numeric value used to specify discontinuous class breaks. If this value is null or is missing, the map server will calculate the minimum value based on the preceding class' maximum value."
                      },
                      description: {
                        type: "string",
                        description:
                          "String value used to describe the drawn symbol."
                      },
                      label: {
                        type: "string",
                        description:
                          "String value used to label the drawn symbol."
                      },
                      symbol: {
                        type: "object",
                        description: "An object used to display the value.",
                        $ref: "#/definitions/symbol3D_schema.json"
                      }
                    },
                    required: ["symbol"],
                    additionalProperties: !1
                  },
                  "rendererLegendOptions_schema.json": {
                    title: "Renderer Legend Options",
                    type: "object",
                    description: "Options available for the renderer legend.",
                    properties: {
                      title: {
                        type: "string",
                        description: "The title of the legend."
                      }
                    }
                  },
                  "visualVariable_schema.json": {
                    title: "visualVariable",
                    type: "object",
                    description:
                      "An object used to set rendering options. Please see the individual visual variable for specific information on how it is used.",
                    oneOf: [
                      {
                        $ref:
                          "#/definitions/colorInfo_visualVariable_schema.json"
                      },
                      {
                        $ref:
                          "#/definitions/rotationInfo_visualVariable_schema.json"
                      },
                      {
                        $ref:
                          "#/definitions/sizeInfo_visualVariable_schema.json"
                      },
                      {
                        $ref:
                          "#/definitions/transparencyInfo_visualVariable_schema.json"
                      }
                    ]
                  },
                  "pointCloudClassBreaksRenderer_schema.json": {
                    title: "PointCloud ClassBreaks Renderer",
                    type: "object",
                    description:
                      "PointCloudClassBreaksRenderer defines the color of each point in a PointCloudLayer based on the value of a numeric attribute. Colors are assigned based on classes or ranges of data. Each point is assigned a symbol based on the class break in which the value of the attribute falls.",
                    properties: {
                      colorClassBreakInfos: {
                        type: "array",
                        description:
                          "Each element in the array is an object that provides information about a class break associated with the renderer.",
                        items: {
                          type: "object",
                          $ref: "#/definitions/colorClassBreakInfo_schema.json"
                        }
                      },
                      colorModulation: {
                        $ref: "#/definitions/colorModulationInfo_schema.json"
                      },
                      field: {
                        type: "string",
                        description:
                          "  The name of the field that is used for the renderer."
                      },
                      fieldTransformType: {
                        type: "string",
                        description:
                          "A transform that is applied to the field value before evaluating the renderer.",
                        enum: [
                          "none",
                          "lowFourBit",
                          "highFourBit",
                          "absoluteValue",
                          "moduloTen"
                        ]
                      },
                      legendOptions: {
                        type: "object",
                        description:
                          "A legend containing one title, which is a string describing the renderer in the legend.",
                        $ref: "#/definitions/rendererLegendOptions_schema.json"
                      },
                      pointSizeAlgorithm: {
                        $ref: "#/definitions/pointSizeAlgorithm_schema.json"
                      },
                      pointsPerInch: {
                        type: "number",
                        description: "Number of point to draw per display inch."
                      },
                      type: {
                        type: "string",
                        description: "Specifies the type of renderer used.",
                        enum: ["pointCloudClassBreaksRenderer"]
                      }
                    },
                    required: ["colorClassBreakInfos", "field", "type"],
                    additionalProperties: !1
                  },
                  "pointCloudRGBRenderer_schema.json": {
                    title: "PointCloud RGB Renderer",
                    type: "object",
                    description:
                      "PointCloudRGBRenderer defines the color of each point in a PointCloudLayer based on the value of a color attribute.",
                    properties: {
                      colorModulation: {
                        description: "",
                        $ref: "#/definitions/colorModulationInfo_schema.json"
                      },
                      field: {
                        type: "string",
                        description:
                          "The name of the field that is used for the renderer."
                      },
                      fieldTransformType: {
                        type: "string",
                        description:
                          "A transform that is applied to the field value before evaluating the renderer.",
                        enum: [
                          "none",
                          "lowFourBit",
                          "highFourBit",
                          "absoluteValue",
                          "moduloTen"
                        ]
                      },
                      pointSizeAlgorithm: {
                        description: "",
                        $ref: "#/definitions/pointSizeAlgorithm_schema.json"
                      },
                      pointsPerInch: {
                        type: "number",
                        description: "Number of point to draw per display inch."
                      },
                      type: {
                        type: "string",
                        description: "Specifies the type of renderer used.",
                        enum: ["pointCloudRGBRenderer"]
                      }
                    },
                    required: ["field", "type"],
                    additionalProperties: !1
                  },
                  "pointCloudStretchRenderer_schema.json": {
                    title: "PointCloud Stretch Renderer",
                    type: "object",
                    description:
                      "PointCloudStretchRenderer defines the color of each point in a PointCloudLayer based on the value of a numeric attribute. They allow you to easily map continuous color ramps to minimum and maximum data values of one of the layer's numeric attribute fields.",
                    properties: {
                      colorModulation: {
                        description: "",
                        $ref: "#/definitions/colorModulationInfo_schema.json"
                      },
                      field: {
                        type: "string",
                        description:
                          "The name of the field that is used for the renderer."
                      },
                      fieldTransformType: {
                        type: "string",
                        description:
                          "A transform that is applied to the field value before evaluating the renderer.",
                        enum: [
                          "none",
                          "lowFourBit",
                          "highFourBit",
                          "absoluteValue",
                          "moduloTen"
                        ]
                      },
                      legendOptions: {
                        type: "object",
                        description:
                          "A legend containing one title, which is a string describing the renderer in the legend.",
                        $ref: "#/definitions/rendererLegendOptions_schema.json"
                      },
                      pointSizeAlgorithm: {
                        description: "",
                        $ref: "#/definitions/pointSizeAlgorithm_schema.json"
                      },
                      pointsPerInch: {
                        type: "number",
                        description:
                          "Number of points to draw per display inch."
                      },
                      stops: {
                        type: "array",
                        description: "An array of color value pairs.",
                        items: {
                          type: "object",
                          $ref: "#/definitions/colorStop_schema.json"
                        }
                      },
                      type: {
                        type: "string",
                        description: "Specifies the type of renderer used.",
                        enum: ["pointCloudStretchRenderer"]
                      }
                    },
                    required: ["field", "stops", "type"],
                    additionalProperties: !1
                  },
                  "pointCloudUniqueValueRenderer_schema.json": {
                    title: "PointCloud UniqueValue Renderer",
                    type: "object",
                    description:
                      "PointCloudUniqueValueRenderer allows you to colorize points in a PointCloudLayer based on an attribute. This is done by using unique colors to represent points with equal attribute values.",
                    properties: {
                      colorModulation: {
                        description: "",
                        $ref: "#/definitions/colorModulationInfo_schema.json"
                      },
                      colorUniqueValueInfos: {
                        type: "array",
                        description: "Unique value infos.",
                        items: {
                          type: "object",
                          $ref: "#/definitions/colorUniqueValueInfo_schema.json"
                        }
                      },
                      field: {
                        type: "string",
                        description:
                          "The name of the field that is used for the renderer."
                      },
                      fieldTransformType: {
                        type: "string",
                        description:
                          "A transform that is applied to the field value before evaluating the renderer.",
                        enum: [
                          "none",
                          "lowFourBit",
                          "highFourBit",
                          "absoluteValue",
                          "moduloTen"
                        ]
                      },
                      legendOptions: {
                        type: "object",
                        description:
                          "A legend containing one title, which is a string describing the renderer in the legend.",
                        $ref: "#/definitions/rendererLegendOptions_schema.json"
                      },
                      pointSizeAlgorithm: {
                        description: "",
                        $ref: "#/definitions/pointSizeAlgorithm_schema.json"
                      },
                      pointsPerInch: {
                        type: "number",
                        description:
                          "Number of points to draw per display inch."
                      },
                      type: {
                        type: "string",
                        description: "Specifies the type of renderer used.",
                        enum: ["pointCloudUniqueValueRenderer"]
                      }
                    },
                    required: ["colorUniqueValueInfos", "field", "type"],
                    additionalProperties: !1
                  },
                  "rasterClassBreaksRenderer_schema.json": {
                    title: "Raster ClassBreaks Renderer",
                    type: "object",
                    description:
                      "Defines the color of each raster cell based on the value of a numeric attribute. Colors are assigned based on classed ranges of data.",
                    properties: {
                      authoringInfo: {
                        type: "object",
                        description:
                          "An object containing metadata about the authoring process for creating a renderer object. This allows the authoring clients to save specific overridable settings so that next time it is accessed via the UI, their selections are remembered. Non-authoring clients can ignore it.",
                        $ref: "#/definitions/authoringInfo_schema.json"
                      },
                      colorClassBreakInfos: {
                        type: "array",
                        description:
                          "Each element in the array is an object that provides information about a class break associated with the renderer.",
                        items: {
                          type: "object",
                          $ref: "#/definitions/colorClassBreakInfo_schema.json"
                        }
                      },
                      defaultColor: {
                        description:
                          "The defaultColor on the renderer that get assigned to features with no value or features that do not fall within the configured data.",
                        $ref: "#/definitions/color_schema.json"
                      },
                      defaultLabel: {
                        type: "string",
                        description:
                          "Default label for the default symbol used to draw unspecified values."
                      },
                      field: {
                        type: "string",
                        description:
                          "The name of the field that is used for the renderer."
                      },
                      legendOptions: {
                        type: "object",
                        description:
                          "A legend containing one title, which is a string describing the renderer in the legend.",
                        $ref: "#/definitions/rendererLegendOptions_schema.json"
                      },
                      normalizationField: {
                        type: "string",
                        description:
                          "Used when normalizationType is field. The string value indicating the attribute field by which the data value is normalized."
                      },
                      normalizationTotal: {
                        type: "number",
                        description:
                          "Used when normalizationType is percent-of-total, this number property contains the total of all data values."
                      },
                      normalizationType: {
                        type: "string",
                        description: "Determine how the data was normalized.",
                        enum: [
                          "esriNormalizeByField",
                          "esriNormalizeByLog",
                          "esriNormalizeByPercentOfTotal"
                        ]
                      },
                      type: {
                        type: "string",
                        description: "Specifies the type of renderer used.",
                        enum: ["rasterClassBreaksRenderer"]
                      }
                    },
                    required: ["colorClassBreakInfos", "field", "type"],
                    additionalProperties: !1
                  },
                  "rasterStretchRenderer_schema.json": {
                    title: "Raster Stretch Renderer",
                    description:
                      "Displays continuous raster cell values across a gradual ramp of colors. Use this renderer to draw a single band of continuous data. This renderer works well when you have a large range of values to display, such as with imagery or scientific data.",
                    properties: {
                      colorRamp: {
                        type: "object",
                        $ref: "#/definitions/colorRamp_schema.json"
                      },
                      computeGamma: {
                        type: "boolean",
                        description:
                          "Indicates if gamma values should be computed by default."
                      },
                      dra: {
                        type: "boolean",
                        description:
                          "Indicates if Dynamic Range Adjustment should be applied."
                      },
                      gamma: {
                        type: "array",
                        description: "The list of Gamma value(s).",
                        items: { type: "number" }
                      },
                      max: {
                        type: "number",
                        description: "The current maximum output value."
                      },
                      maxPercent: {
                        type: "number",
                        description: "The current maximum percent value."
                      },
                      min: {
                        type: "number",
                        description: "The current minimum output value."
                      },
                      minPercent: {
                        type: "number",
                        description: "The current minimum percent value."
                      },
                      numberOfStandardDeviations: {
                        type: "integer",
                        description:
                          "The number of standard deviations for standard deviation stretch."
                      },
                      sigmoidStrengthLevel: {
                        type: "number",
                        description:
                          "Set this from (1 to 6) to adjust the curvature of Sigmoid curve used in color stretch."
                      },
                      statistics: {
                        type: "array",
                        description: "The custom raster stretch statistics.",
                        items: {
                          type: "array",
                          items: { type: "number", minItems: 4, maxItems: 4 }
                        }
                      },
                      stretchType: {
                        type: "string",
                        description:
                          "The stretch types for stretch raster function.",
                        enum: [
                          "none",
                          "standardDeviation",
                          "histogramEqualization",
                          "minMax",
                          "percentClip",
                          "sigmoid"
                        ]
                      },
                      type: {
                        type: "string",
                        description: "Specifies the type of renderer used.",
                        enum: ["rasterStretch"]
                      },
                      useGamma: {
                        type: "boolean",
                        description:
                          "Indicates if the renderer applies Gamma stretch."
                      }
                    },
                    additionalProperties: !1
                  },
                  "rasterUniqueValueRenderer_schema.json": {
                    title: "Raster UniqueValue Renderer",
                    type: "object",
                    description:
                      "Defines the color of each raster cell based on an attribute. This is done by using unique colors to represent cells with equal attribute values.",
                    properties: {
                      authoringInfo: {
                        type: "object",
                        description:
                          "An object containing metadata about the authoring process for creating a renderer object. This allows the authoring clients to save specific overridable settings so that next time it is accessed via the UI, their selections are remembered. Non-authoring clients can ignore it.",
                        $ref: "#/definitions/authoringInfo_schema.json"
                      },
                      colorUniqueValueInfos: {
                        type: "array",
                        description: "Unique value infos.",
                        items: {
                          type: "object",
                          $ref: "#/definitions/colorUniqueValueInfo_schema.json"
                        }
                      },
                      defaultColor: {
                        description:
                          "The defaultColor on the renderer that get assigned to features with no value or features that do not fall within the configured data.",
                        $ref: "#/definitions/color_schema.json"
                      },
                      defaultLabel: {
                        type: "string",
                        description:
                          "Default label for the default symbol used to draw unspecified values."
                      },
                      field: {
                        type: "string",
                        description:
                          "The name of the field that is used for the renderer."
                      },
                      legendOptions: {
                        type: "object",
                        description:
                          "A legend containing one title, which is a string describing the renderer in the legend.",
                        $ref: "#/definitions/rendererLegendOptions_schema.json"
                      },
                      type: {
                        type: "string",
                        description: "Specifies the type of renderer used.",
                        enum: ["rasterUniqueValueRenderer"]
                      }
                    },
                    required: ["colorUniqueValueInfos", "field", "type"],
                    additionalProperties: !1
                  },
                  "uniqueValueInfo_schema.json": {
                    title: "uniqueValueInfo",
                    type: "object",
                    description:
                      "Info item for the Unique Value Renderer. Its symbol gets selected if the feature's field matches its value.",
                    properties: {
                      description: {
                        type: "string",
                        description:
                          "String value used to describe the drawn symbol."
                      },
                      label: {
                        type: "string",
                        description:
                          "String value used to label the drawn symbol."
                      },
                      symbol: {
                        type: "object",
                        description: "An object used to display the value.",
                        $ref: "#/definitions/symbol3D_schema.json"
                      },
                      value: {
                        type: "string",
                        description: "String value indicating the unique value."
                      }
                    },
                    additionalProperties: !1
                  },
                  "codedValue_schema.json": {
                    title: "codedValue",
                    type: "object",
                    description:
                      "A set of valid coded values with unique names.",
                    properties: {
                      code: {
                        type: "string",
                        description:
                          "String value indicating which unqiue code is used to identify the feature attribute."
                      },
                      name: {
                        type: "string",
                        description:
                          "A string value given for the coded domain."
                      }
                    },
                    required: ["code", "name"],
                    additionalProperties: !1
                  },
                  "joinTableDataSource_schema.json": {
                    title: "Join Table DataSource",
                    type: "object",
                    description:
                      "Join Table data source is the result of a join operation. Nested joins are supported. To use nested joins, set either leftTableSource or rightTableSource to be a joinTable.",
                    properties: {
                      joinType: {
                        type: "string",
                        description:
                          "The type of join (left outer or left inner).",
                        enum: ["esriLeftOuterJoin", "esriLeftInnerJoin"]
                      },
                      leftTableKey: {
                        type: "string",
                        description: "Field name from the left table."
                      },
                      leftTableSource: {
                        type: "object",
                        description:
                          "The left source. If the leftTableSource is a table, the resulting joinTable is a table. If the leftTableSource is a layer, the resulting joinTable is a layer.",
                        $ref: "#/definitions/source_schema.json"
                      },
                      rightTableKey: {
                        type: "string",
                        description: "Field name from the right table."
                      },
                      rightTableSource: {
                        type: "object",
                        description: "The right table source.",
                        $ref: "#/definitions/source_schema.json"
                      },
                      type: {
                        type: "string",
                        description:
                          "String value indicating the type for the dataSource.",
                        enum: ["joinTable"]
                      }
                    },
                    required: ["type"],
                    additionalProperties: !1
                  },
                  "queryTableDataSource_schema.json": {
                    title: "Query Table DataSource",
                    type: "object",
                    description:
                      "Query table data source is a layer/table that is defined by a SQL query.",
                    properties: {
                      geometryType: {
                        type: "string",
                        description:
                          "The geometry type. When querying a table that does not have a geometry column, do not include geometryType.",
                        enum: [
                          "esriGeometryPoint",
                          "esriGeometryMultipoint",
                          "esriGeometryPolyline",
                          "esriGeometryPolygon"
                        ]
                      },
                      oidFields: {
                        type: "string",
                        description:
                          "Comma separated list of identifier fields. There are only certain field types that can be used as a unique identifier. These field types include integer, string, GUID, and date. If a single integer field is specified, map server uses the values in that field directly to uniquely identify all features and rows returned from a queryTable. However, if a single string field or a group of fields is used as the unique identifier, map server maps those unique values to an integer."
                      },
                      query: { type: "string", description: "The SQL query." },
                      spatialReference: {
                        type: "object",
                        description:
                          "The spatial reference of the geometry column. When querying a table that does not have a geometry column, do not include spatialReference.",
                        $ref: "#/definitions/spatialReference_schema.json"
                      },
                      type: {
                        type: "string",
                        description:
                          "String value indicating the type for the dataSource.",
                        enum: ["queryTable"]
                      },
                      workspaceId: {
                        type: "string",
                        description:
                          "The unique string value used to identify the datasource's workspace."
                      }
                    },
                    required: ["type"],
                    additionalProperties: !1
                  },
                  "rasterDataSource_schema.json": {
                    title: "Raster DataSource",
                    type: "object",
                    description:
                      "Raster data source is a file-based raster that resides in a registered raster workspace.",
                    properties: {
                      dataSourceName: {
                        type: "string",
                        description: "The raster datasource's name."
                      },
                      type: {
                        type: "string",
                        description:
                          "String value indicating the type for the dataSource.",
                        enum: ["raster"]
                      },
                      workspaceId: {
                        type: "string",
                        description:
                          "The unique string value used to identify the datasource's workspace."
                      }
                    },
                    required: ["type"],
                    additionalProperties: !1
                  },
                  "tableDataSource_schema.json": {
                    title: "Table DataSource",
                    type: "object",
                    description:
                      "Table data source is a table, feature class, or raster that resides in a registered workspace (either a folder or geodatabase). In the case of a geodatabase, if versioned, use version to switch to an alternate geodatabase version. If version is empty or missing, the registered geodatabase version will be used.",
                    properties: {
                      dataSourceName: {
                        type: "string",
                        description:
                          "The fully-qualified string value used to specify where the dataSource is derived."
                      },
                      gdbVersion: {
                        type: "string",
                        description:
                          "If applicable, the value indicating the version of the geodatabase."
                      },
                      type: {
                        type: "string",
                        description:
                          "String value indicating the type for the dataSource. The value for a Table DataSource is `table`.",
                        enum: ["table"]
                      },
                      workspaceId: {
                        type: "string",
                        description:
                          "The unique string value used to identify the datasource's workspace."
                      }
                    },
                    required: ["type"],
                    additionalProperties: !1
                  },
                  "lineSymbol3D_schema.json": {
                    title: "LineSymbol3D",
                    type: "object",
                    description:
                      "LineSymbol3D is used to render features with Polyline geometry in a 3D SceneView.",
                    properties: {
                      styleOrigin: {
                        $ref: "#/definitions/styleOrigin_schema.json"
                      },
                      symbolLayers: {
                        type: "array",
                        description:
                          "A Collection of Symbol3DLayer objects used to visualize the graphic or feature.",
                        items: {
                          oneOf: [
                            {
                              $ref:
                                "#/definitions/lineSymbol3DLayer_schema.json"
                            },
                            {
                              $ref:
                                "#/definitions/pathSymbol3DLayer_schema.json"
                            }
                          ]
                        }
                      },
                      type: {
                        type: "string",
                        description: "Specifies the type of symbol used.",
                        enum: ["LineSymbol3D"]
                      }
                    },
                    required: ["symbolLayers", "type"],
                    additionalProperties: !1
                  },
                  "meshSymbol3D_schema.json": {
                    title: "MeshSymbol3D",
                    type: "object",
                    description:
                      "MeshSymbol3D is used to render 3D mesh features in a SceneLayer in a 3D SceneView.",
                    properties: {
                      styleOrigin: {
                        $ref: "#/definitions/styleOrigin_schema.json"
                      },
                      symbolLayers: {
                        type: "array",
                        description:
                          "A Collection of Symbol3DLayer objects used to visualize the graphic or feature.",
                        items: {
                          oneOf: [
                            {
                              $ref:
                                "#/definitions/fillSymbol3DLayer_schema.json"
                            }
                          ]
                        }
                      },
                      type: {
                        type: "string",
                        description: "Specifies the type of symbol used",
                        enum: ["MeshSymbol3D"]
                      }
                    },
                    required: ["symbolLayers", "type"],
                    additionalProperties: !1
                  },
                  "pointSymbol3D_schema.json": {
                    title: "PointSymbol3D",
                    type: "object",
                    description:
                      "PointSymbol3D is used to render features with Point geometry in a 3D SceneView.",
                    properties: {
                      callout: { $ref: "#/definitions/callout_schema.json" },
                      styleOrigin: {
                        $ref: "#/definitions/styleOrigin_schema.json"
                      },
                      symbolLayers: {
                        type: "array",
                        description:
                          "A Collection of Symbol3DLayer objects used to visualize the graphic or feature.",
                        items: {
                          oneOf: [
                            {
                              $ref:
                                "#/definitions/iconSymbol3DLayer_schema.json"
                            },
                            {
                              $ref:
                                "#/definitions/objectSymbol3DLayer_schema.json"
                            }
                          ]
                        }
                      },
                      type: {
                        type: "string",
                        description: "Specifies the type of symbol used",
                        enum: ["PointSymbol3D"]
                      },
                      verticalOffset: {
                        $ref: "#/definitions/verticalOffset_schema.json"
                      }
                    },
                    required: ["symbolLayers", "type"],
                    additionalProperties: !1
                  },
                  "styleSymbolReference_schema.json": {
                    title: "StyleSymbolReference",
                    type: "object",
                    description:
                      "The StyleSymbolReference is used to reference a symbol from a portal styleItem",
                    properties: {
                      name: {
                        type: "string",
                        description: "Identifies a symbol in the style by name."
                      },
                      styleName: {
                        type: "string",
                        description:
                          "A registered web style name, such as `EsriThematicTreesStyle`"
                      },
                      styleUrl: {
                        type: "string",
                        description: "URL to a style definition."
                      },
                      type: {
                        type: "string",
                        description: "The type of the symbol",
                        enum: ["styleSymbolReference"]
                      }
                    },
                    oneOf: [
                      { required: ["type", "name", "styleUrl"] },
                      { required: ["type", "name", "styleName"] }
                    ],
                    additionalProperties: !1
                  },
                  "border_schema.json": {
                    title: "border",
                    type: "object",
                    description:
                      "Optional border on the line that is used to improve the contrast of the line color against various background colors.",
                    properties: {
                      color: { $ref: "#/definitions/color_schema.json" },
                      transparency: {
                        type: "integer",
                        description:
                          "A value between `100` (full transparency) and `0` (full opacity).",
                        minimum: 0,
                        maximum: 100,
                        default: 0
                      }
                    },
                    required: ["color"],
                    additionalProperties: !1
                  },
                  "font_schema.json": {
                    title: "font",
                    type: "object",
                    description: "Font used for text symbols.",
                    properties: {
                      decoration: {
                        type: "string",
                        description: "The text decoration.",
                        enum: ["line-through", "underline", "none"],
                        default: "none"
                      },
                      family: {
                        type: "string",
                        description: "The font family."
                      },
                      size: {
                        type: "number",
                        description:
                          "The font size in points. Ignored when font is used on TextSymbol3DLayer."
                      },
                      style: {
                        type: "string",
                        description: "The text style.",
                        enum: ["italic", "normal", "oblique"],
                        default: "normal"
                      },
                      weight: {
                        type: "string",
                        description: "The text weight.",
                        enum: ["bold", "bolder", "lighter", "normal"],
                        default: "normal"
                      }
                    },
                    additionalProperties: !1
                  },
                  "halo_schema.json": {
                    title: "halo",
                    type: "object",
                    description: "Halo definition.",
                    properties: {
                      color: { $ref: "#/definitions/color_schema.json" },
                      size: {
                        type: "number",
                        description: "Width of the halo in points."
                      },
                      transparency: {
                        type: "integer",
                        description:
                          "A value between `100` (full transparency) and `0` (full opacity).",
                        minimum: 0,
                        maximum: 100,
                        default: 0
                      }
                    },
                    additionalProperties: !1
                  },
                  "material_schema.json": {
                    title: "Material",
                    type: "object",
                    description: "The material used to shade the geometry.",
                    properties: {
                      color: { $ref: "#/definitions/color_schema.json" },
                      colorMixMode: {
                        type: "string",
                        description:
                          "Controls how symbolLayer or visualVariable color is applied onto the underlying geometry color/texture. This property only applies to FillSymbol3DLayer within MeshSymbol3D.<br><ul><li>`tint`: the feature's appearance (in terms of color) should be altered to match the symbol / visual variable color.</li><li>`replace`: the feature's color is replaced with the symbol / visual variable color.</li><li>`multiply`: the feature's color is multiplied with the symbol color.</li></ul>",
                        enum: ["tint", "replace", "multiply"],
                        default: "tint"
                      },
                      transparency: {
                        type: "integer",
                        minimum: 0,
                        maximum: 100
                      }
                    },
                    additionalProperties: !1
                  },
                  "colorRamp_schema.json": {
                    title: "Color Ramp",
                    description:
                      "A colorRamp object is used to specify a range of colors that are applied to a group of symbols.",
                    properties: {
                      algorithm: {
                        type: "string",
                        description: "Algorithm used for calculating the ramp.",
                        enum: [
                          "esriHSVAlgorithm",
                          "esriCIELabAlgorithm",
                          "esriLabLChAlgorithm"
                        ]
                      },
                      colorRamps: {
                        type: "array",
                        description:
                          "A multipart color ramp is defined by a list of constituent color ramps.",
                        items: {
                          type: "object",
                          $ref: "#/definitions/colorRamp_schema.json"
                        }
                      },
                      fromColor: {
                        description:
                          "Array representing the initial color to start the ramp from.",
                        $ref: "#/definitions/color_schema.json"
                      },
                      toColor: {
                        description:
                          "Array representing the final color to end the ramp with.",
                        $ref: "#/definitions/color_schema.json"
                      },
                      type: {
                        type: "string",
                        description: "Value indicating the type of colorRamp.",
                        enum: ["algorithmic", "multipart"]
                      }
                    },
                    additionalProperties: !1
                  },
                  "authoringInfo_visualVariable_schema.json": {
                    title: "AuthoringInfo Visual Variable",
                    type: "object",
                    description:
                      "This visual variable is different from `sizeInfo`, `colorInfo`, `transparencyInfo`, and `rotationInfo` as it is an array of visual variables pertaining specifically to authoringInfo and not directly on the [renderer](renderer.md).",
                    properties: {
                      endTime: {
                        description:
                          "A Unix stamp. Both `startTime` or `endTime` can be fields. If this is the case, their names must be different.",
                        oneOf: [{ type: "number" }, { type: "string" }]
                      },
                      field: {
                        type: "string",
                        description:
                          "The attribute field the user chose in the Smart Mapping gallery. Must be the same as in either `startTime` or `endTime`."
                      },
                      maxSliderValue: {
                        type: "number",
                        description:
                          "A numeric value indicating the maximum value displayed."
                      },
                      minSliderValue: {
                        type: "number",
                        description:
                          "A numeric value indicating the minimum value displayed."
                      },
                      startTime: {
                        description:
                          "A Unix time stamp. Both `startTime` or `endTime` can be fields. If this is the case, their names must be different.",
                        oneOf: [{ type: "number" }, { type: "string" }]
                      },
                      style: {
                        type: "string",
                        description:
                          "(This property is used for comparison rendering). It is used to map the ratio between two numbers. It is possible to express that relationship as percentages, simple ratios, or an overall percentage.",
                        enum: ["percent", "ratio", "percentTotal"]
                      },
                      theme: {
                        type: "string",
                        description:
                          "Theme to be used only when working with visual variables of type `colorInfo`. Default is `high-to-low`.",
                        enum: [
                          "high-to-low",
                          "above-and-below",
                          "centered-on",
                          "extremes"
                        ]
                      },
                      type: {
                        type: "string",
                        description:
                          "A string value specifying the type of renderer's visual variable.",
                        enum: [
                          "colorInfo",
                          "sizeInfo",
                          "transparencyInfo",
                          "rotationInfo"
                        ]
                      },
                      units: {
                        type: "string",
                        description:
                          "(This property is used only with age renderers.) Units for startTime and endTime.",
                        enum: [
                          "seconds",
                          "minutes",
                          "hours",
                          "days",
                          "months",
                          "years"
                        ]
                      }
                    },
                    additionalProperties: !1
                  },
                  "styleOrigin_schema.json": {
                    title: "styleOrigin",
                    type: "object",
                    description:
                      "The origin of the style from which the symbol was originally referenced. A reference to the style origin can be either by styleName or by styleUrl (but not both). It may be used to understand where a symbol was originally sourced from, but does not affect actual appearance or rendering of the symbol.",
                    properties: {
                      name: {
                        type: "string",
                        description: "Identifies a symbol in the style by name."
                      },
                      styleName: {
                        type: "string",
                        description:
                          "A registered web style name, such as `EsriThematicShapesStyle`"
                      },
                      styleUrl: {
                        description: "URL to a style definition.",
                        oneOf: [
                          {
                            type: "string",
                            format: "uri",
                            description: "An absolute URL"
                          },
                          {
                            type: "string",
                            description: "A relative path starting with ./",
                            pattern: "^\\./.+$"
                          }
                        ]
                      }
                    },
                    oneOf: [
                      { required: ["name", "styleName"] },
                      { required: ["name", "styleUrl"] }
                    ],
                    additionalProperties: !1
                  },
                  "fillSymbol3DLayer_schema.json": {
                    title: "FillSymbol3DLayer",
                    type: "object",
                    description:
                      "FillSymbol3DLayer is used to render the surfaces of flat 2D Polygon geometries and 3D volumetric meshes in a SceneView.",
                    properties: {
                      edges: {
                        type: "object",
                        description:
                          "Specifies an edge visualization style. Only affects MeshSymbol3D.",
                        $ref: "#/definitions/edges_schema.json"
                      },
                      enable: { type: "boolean" },
                      material: { $ref: "#/definitions/material_schema.json" },
                      outline: { $ref: "#/definitions/outline_schema.json" },
                      type: {
                        type: "string",
                        description: "Specifies the type of symbol used.",
                        enum: ["Fill"]
                      }
                    },
                    required: ["material", "type"],
                    additionalProperties: !1
                  },
                  "extrudeSymbol3DLayer_schema.json": {
                    title: "ExtrudeSymbol3DLayer",
                    type: "object",
                    description:
                      "ExtrudeSymbol3DLayer is used to render Polygon geometries by extruding them upward from the ground, creating a 3D volumetric object.",
                    properties: {
                      edges: {
                        type: "object",
                        description: "Specifies an edge visualization style.",
                        $ref: "#/definitions/edges_schema.json"
                      },
                      enable: { type: "boolean" },
                      material: { $ref: "#/definitions/material_schema.json" },
                      size: {
                        type: "number",
                        description: "Extrusion height in meters."
                      },
                      type: {
                        type: "string",
                        description: "Specifies the type of symbol used.",
                        enum: ["Extrude"]
                      }
                    },
                    required: ["size", "type"],
                    additionalProperties: !1
                  },
                  "iconSymbol3DLayer_schema.json": {
                    title: "IconSymbol3DLayer",
                    type: "object",
                    description:
                      "IconSymbol3DLayer is used to render Point geometries using a flat 2D icon (e.g. a circle) with a PointSymbol3D in a SceneView.",
                    properties: {
                      anchor: {
                        type: "string",
                        enum: [
                          "center",
                          "left",
                          "right",
                          "top",
                          "bottom",
                          "topLeft",
                          "topRight",
                          "bottomLeft",
                          "bottomRight"
                        ],
                        default: "center"
                      },
                      enable: { type: "boolean" },
                      material: { $ref: "#/definitions/material_schema.json" },
                      outline: { $ref: "#/definitions/outline_schema.json" },
                      resource: {
                        $ref:
                          "#/definitions/iconSymbol3DLayer_resource_schema.json"
                      },
                      size: {
                        type: "number",
                        description: "Icon size in points, positive only",
                        minimum: 0
                      },
                      type: {
                        type: "string",
                        description: "Specifies the type of symbol used.",
                        enum: ["Icon"]
                      }
                    },
                    required: ["size", "type"],
                    additionalProperties: !1
                  },
                  "objectSymbol3DLayer_schema.json": {
                    title: "ObjectSymbol3DLayer",
                    type: "object",
                    description:
                      "ObjectSymbol3DLayer is used to render Point geometries using a volumetric 3D shape (e.g., a sphere or cylinder) with a Symbol3D in a SceneView.",
                    properties: {
                      anchor: {
                        type: "string",
                        description:
                          "The positioning of the object relative to the geometry.",
                        enum: ["center", "bottom", "origin", "top"],
                        default: "origin"
                      },
                      depth: {
                        type: "number",
                        description: "Object depth in meters, positive only",
                        minimum: 0
                      },
                      enable: { type: "boolean" },
                      heading: {
                        type: "number",
                        description:
                          "Rotation angle around Z axis in degrees. At 0 degrees, the model points in the direction of the Y-axis. Positive values indicate clockwise rotation (when looked at from the top). [Detailed description](static/objectSymbolLayerOrientation.md)."
                      },
                      height: {
                        type: "number",
                        description: "Object height in meters, positive only",
                        minimum: 0
                      },
                      material: { $ref: "#/definitions/material_schema.json" },
                      resource: {
                        $ref:
                          "#/definitions/objectSymbol3DLayer_resource_schema.json"
                      },
                      roll: {
                        type: "number",
                        description:
                          "Rotation angle around Y axis in degrees. At 0 degrees, the model is level. A positive value lifts the left part and lowers the right part of the model. [Detailed description](static/objectSymbolLayerOrientation.md)."
                      },
                      tilt: {
                        type: "number",
                        description:
                          "Rotation angle around X axis in degrees. At 0 degrees, the model is level. A positive value lifts the front and lowers the back of the model. [Detailed description](static/objectSymbolLayerOrientation.md)."
                      },
                      type: {
                        type: "string",
                        description: "Specifies the type of symbol used.",
                        enum: ["Object"]
                      },
                      width: {
                        type: "number",
                        description: "Object width in meters, positive only",
                        minimum: 0
                      }
                    },
                    required: ["type"],
                    additionalProperties: !1
                  },
                  "lineSymbol3DLayer_schema.json": {
                    title: "LineSymbol3DLayer",
                    type: "object",
                    description:
                      "LineSymbol3DLayer renders Polyline geometries using a flat 2D line with a LineSymbol3D in a 3D SceneView.",
                    properties: {
                      enable: { type: "boolean" },
                      material: { $ref: "#/definitions/material_schema.json" },
                      size: {
                        type: "number",
                        description: "Line width in points, positive only",
                        minimum: 0
                      },
                      type: {
                        type: "string",
                        description: "Specifies the type of symbol used.",
                        enum: ["Line"]
                      }
                    },
                    required: ["size", "type"],
                    additionalProperties: !1
                  },
                  "colorInfo_visualVariable_schema.json": {
                    title: "ColorInfo Visual Variable",
                    type: "object",
                    description:
                      "The colorInfo visual variable defines how a continuous color ramp is applied to features based on the values of a numeric field attribute.",
                    properties: {
                      field: {
                        type: "string",
                        description:
                          "Attribute field used for color rendering if no valueExpression is provided."
                      },
                      legendOptions: {
                        type: "object",
                        $ref:
                          "#/definitions/visualVariableLegendOptions_schema.json"
                      },
                      normalizationField: {
                        type: "string",
                        description:
                          "Attribute field used to normalize the data."
                      },
                      stops: {
                        type: "array",
                        description: "An array of stop objects.",
                        items: {
                          type: "object",
                          $ref: "#/definitions/colorStop_schema.json"
                        }
                      },
                      type: {
                        type: "string",
                        description: "Specifies the type of visual variable.",
                        enum: ["colorInfo"]
                      },
                      valueExpression: {
                        type: "string",
                        description:
                          "An [Arcade expression](https://developers.arcgis.com/arcade/) that computes a value in lieu of a value provided by an attribute `field`."
                      },
                      valueExpressionTitle: {
                        type: "string",
                        description:
                          "The title identifying and describing the associated [Arcade](https://developers.arcgis.com/arcade/) expression as defined in the `valueExpression` property."
                      }
                    },
                    required: ["type"],
                    additionalProperties: !1
                  },
                  "rotationInfo_visualVariable_schema.json": {
                    title: "RotationInfo Visual Variable",
                    type: "object",
                    description:
                      "The rotation visual variable defines how features rendered with marker symbols are rotated. The rotation value is determined by a value in a field or an Arcade expression calculating a value. Use either the `field` property or `valueExpression` when specifying rotation values.",
                    properties: {
                      axis: {
                        type: "string",
                        description:
                          "Defines the rotation axis the visual variable should be applied to when rendering features with an ObjectSymbol3DLayer. [Detailed description](static/objectSymbolLayerOrientation.md).",
                        enum: ["heading", "tilt", "roll"],
                        default: "heading"
                      },
                      field: {
                        type: "string",
                        description:
                          "Attribute field used for setting the rotation of a symbol if no `valueExpression` is provided."
                      },
                      legendOptions: {
                        type: "object",
                        $ref:
                          "#/definitions/visualVariableLegendOptions_schema.json"
                      },
                      rotationType: {
                        type: "string",
                        description:
                          "Defines the origin and direction of rotation depending on how the angle of rotation was measured. Possible values are `geographic` which rotates the symbol from the north in a clockwise direction and `arithmetic` which rotates the symbol from the east in a counter-clockwise direction.",
                        enum: ["geographic", "arithmetic"],
                        default: "geographic"
                      },
                      type: {
                        type: "string",
                        description:
                          "A string value indicating the type of visual variable used for the renderer.",
                        enum: ["rotationInfo"]
                      },
                      valueExpression: {
                        type: "string",
                        description:
                          "An [Arcade expression](https://developers.arcgis.com/arcade/) evaluating to a number."
                      },
                      valueExpressionTitle: {
                        type: "string",
                        description:
                          "The title identifying and describing the associated [Arcade expression] (https://developers.arcgis.com/arcade/) as defined in the `valueExpression` property."
                      }
                    },
                    required: ["type"],
                    additionalProperties: !1
                  },
                  "sizeInfo_visualVariable_schema.json": {
                    title: "SizeInfo Visual Variable",
                    type: "object",
                    description:
                      "The sizeInfo visual variable defines how size is applied to features based on the values of a numeric field attribute. The minimum and maximum values of the data should be indicated along with their respective size values. You must specify either `minSize` and `maxSize`, or `stops`, or `valueUnit` to construct the size ramp. All features with values falling in between the specified min and max data values (or stops) will be scaled proportionally between the provided min and max sizes.",
                    properties: {
                      axis: {
                        type: "string",
                        description:
                          "Defines the axis the size visual variable should be applied to when rendering features with an ObjectSymbol3DLayer.",
                        enum: [
                          "width",
                          "height",
                          "depth",
                          "widthAndDepth",
                          "all"
                        ]
                      },
                      field: {
                        type: "string",
                        description:
                          "Attribute field used for size rendering if no valueExpression is provided."
                      },
                      legendOptions: {
                        type: "object",
                        $ref:
                          "#/definitions/visualVariableLegendOptions_schema.json"
                      },
                      maxDataValue: {
                        type: "number",
                        description: "The maximum data value."
                      },
                      maxSize: {
                        type: "number",
                        description:
                          "Specifies the maximum size to be applied to the symbol. This is required if valueUnit is set to `unknown`."
                      },
                      minDataValue: {
                        type: "number",
                        description: "The minimum data value."
                      },
                      minSize: {
                        type: "number",
                        description:
                          "Specifies the minimum size to be applied to the symbol. This is required if valueUnit is set to `unknown`."
                      },
                      normalizationField: {
                        type: "string",
                        description:
                          "Attribute field used to normalize the data."
                      },
                      stops: {
                        type: "array",
                        description:
                          "An array of objects that defines the thematic size ramp in a sequence of data or expression stops. At least two stops are required. The stops must be listed in ascending order based on the value of the `value` property in each stop. This property is required if `minDataValue`, `maxDataValue`, `minSize`, and `maxSize` are not defined.",
                        items: {
                          type: "object",
                          $ref: "#/definitions/sizeStop_schema.json"
                        }
                      },
                      target: {
                        type: "string",
                        description:
                          "Only used when sizeInfo is used for polygon outlines.",
                        enum: ["outline"]
                      },
                      type: {
                        type: "string",
                        description: "Specifies the type of visual variable.",
                        enum: ["sizeInfo"]
                      },
                      useSymbolValue: {
                        type: "boolean",
                        description:
                          "When setting a size visual variable on a renderer using an ObjectSymbol3DLayer, this property indicates whether to apply the value defined by the height, width, or depth properties to the corresponding axis of this visual variable instead of proportionally scaling this axis' value after other axes."
                      },
                      valueExpression: {
                        type: "string",
                        description:
                          "An [Arcade expression](https://developers.arcgis.com/arcade/) evaluating to a number."
                      },
                      valueExpressionTitle: {
                        type: "string",
                        description:
                          "The title identifying and describing the associated [Arcade](https://developers.arcgis.com/arcade/) expression as defined in the `valueExpression` property."
                      },
                      valueRepresentation: {
                        type: "string",
                        description:
                          "Specifies how to apply the data value when mapping real-world sizes. See table below for supported values.",
                        enum: [
                          "radius",
                          "diameter",
                          "area",
                          "width",
                          "distance"
                        ]
                      },
                      valueUnit: {
                        type: "string",
                        description:
                          "A string value indicating the unit of measurement. Defaults to `meters` if not set.",
                        enum: [
                          "unknown",
                          "inches",
                          "feet",
                          "yards",
                          "miles",
                          "nautical-miles",
                          "millimeters",
                          "centimeters",
                          "decimeters",
                          "meters",
                          "kilometers",
                          "decimal-degrees"
                        ]
                      }
                    },
                    required: ["type"],
                    additionalProperties: !1
                  },
                  "transparencyInfo_visualVariable_schema.json": {
                    title: "TransparencyInfo Visual Variable",
                    type: "object",
                    description:
                      "The transparencyInfo visual variable defines the transparency, or opacity, of each feature's symbol based on a numeric attribute field value.",
                    properties: {
                      field: {
                        type: "string",
                        description:
                          "Attribute field used for setting the transparency of a feature if no `valueExpression` is provided."
                      },
                      legendOptions: {
                        type: "object",
                        $ref:
                          "#/definitions/visualVariableLegendOptions_schema.json"
                      },
                      normalizationField: {
                        type: "string",
                        description:
                          "Attribute field used to normalize the data."
                      },
                      stops: {
                        type: "array",
                        description: "An array of transparencyStop objects.",
                        items: {
                          type: "object",
                          $ref: "#/definitions/transparencyStop_schema.json"
                        }
                      },
                      type: {
                        type: "string",
                        description: "Specifies the type of visual variable.",
                        enum: ["transparencyInfo"]
                      },
                      valueExpression: {
                        type: "string",
                        description:
                          "An [Arcade expression](https://developers.arcgis.com/arcade/) evaluating to a number."
                      },
                      valueExpressionTitle: {
                        type: "string",
                        description:
                          "The title identifying and describing the associated [Arcade](https://developers.arcgis.com/arcade/) expression as defined in the `valueExpression` property."
                      }
                    },
                    required: ["type"],
                    additionalProperties: !1
                  },
                  "colorClassBreakInfo_schema.json": {
                    title: "colorClassBreakInfo",
                    type: "object",
                    description:
                      "The classBreaksInfo object provides information about the class breaks associated with the renderer.",
                    properties: {
                      classMaxValue: {
                        type: "number",
                        description:
                          "A numeric value used to specify the maximum value for a break."
                      },
                      classMinValue: {
                        type: "number",
                        description:
                          "A numeric value used to specify discontinuous class breaks. If this value is null or is missing, the map server will calculate the minimum value based on the preceding class' maximum value."
                      },
                      color: { $ref: "#/definitions/color_schema.json" },
                      description: {
                        type: "string",
                        description: "String value used to describe the class."
                      },
                      label: {
                        type: "string",
                        description: "String value used to label the class."
                      }
                    },
                    required: ["classMaxValue", "classMinValue", "color"],
                    additionalProperties: !1
                  },
                  "colorModulationInfo_schema.json": {
                    title: "colorModulationInfo",
                    type: "object",
                    description:
                      "Indicates whether modulation should be used to render the point.",
                    properties: {
                      field: {
                        type: "string",
                        description:
                          "the attribute to use as a source for the modulation amplitude"
                      },
                      maxValue: {
                        type: "number",
                        description:
                          "maximum value to compute modulation linear mapping"
                      },
                      minValue: {
                        type: "number",
                        description:
                          "minimum value to compute modulation linear mapping"
                      }
                    },
                    required: ["field", "maxValue", "minValue"],
                    additionalProperties: !1
                  },
                  "pointSizeAlgorithm_schema.json": {
                    title: "PointCloud Size Algorithm",
                    type: "object",
                    description: "Size algorithms for point cloud performance.",
                    oneOf: [
                      {
                        $ref:
                          "#/definitions/pointCloudFixedSizeAlgorithm_schema.json"
                      },
                      {
                        $ref:
                          "#/definitions/pointCloudSplatAlgorithm_schema.json"
                      }
                    ]
                  },
                  "colorStop_schema.json": {
                    title: "colorStop",
                    description:
                      "A colorStop object describes the renderer's color ramp with more specificity than just colors.",
                    properties: {
                      color: {
                        description:
                          "A CSS color string or an array of rbga values. The color to place at the stop indicated by either a ratio or value.",
                        $ref: "#/definitions/color_schema.json"
                      },
                      label: {
                        type: "string",
                        description:
                          "Value if a label is needed on the legend for a stop."
                      },
                      value: {
                        type: "number",
                        description:
                          "The pixel intensity value. Describes the pixel intensity value that the color should be associated with. Just like in colorInfo, using value will ignore `maxPixelIntensity` and `minPixelIntensity` properties. It will actually set those properties to maximum and minimum values you set in the colorStops array. The hard values are converted to ratios to create the color gradient that is used in the heatmap calculations. Setting `minPixelIntensity` or `maxPixelIntensity`, after setting colorStops with values, removes the hard link between the color ramp and the pixel intensity values that were used to create it."
                      }
                    },
                    required: ["color", "value"]
                  },
                  "colorUniqueValueInfo_schema.json": {
                    title: "colorUniqueValueInfo",
                    type: "object",
                    description:
                      "The colorUniqueValueInfo object matches a unique value with a specific color.",
                    properties: {
                      color: { $ref: "#/definitions/color_schema.json" },
                      description: {
                        type: "string",
                        description: "String value used to describe the class."
                      },
                      label: {
                        type: "string",
                        description: "String value used to label the class."
                      },
                      values: {
                        type: "array",
                        description:
                          "List of string or number values used to classifiy points.",
                        items: {
                          oneOf: [{ type: "string" }, { type: "number" }]
                        }
                      }
                    },
                    required: ["color", "values"],
                    additionalProperties: !1
                  },
                  "pathSymbol3DLayer_schema.json": {
                    title: "PathSymbol3DLayer",
                    type: "object",
                    description:
                      "PathSymbol3DLayer renders Polyline geometries using a volumetric 3D tube with a LineSymbol3D in a SceneView.",
                    properties: {
                      enable: { type: "boolean" },
                      material: { $ref: "#/definitions/material_schema.json" },
                      size: {
                        type: "number",
                        description:
                          "Path size (diameter) in meters, positive only",
                        minimum: 0
                      },
                      type: {
                        type: "string",
                        description: "Specifies the type of symbol used.",
                        enum: ["Path"]
                      },
                      width: {
                        type: "number",
                        description: "Path width in meters"
                      }
                    },
                    oneOf: [
                      { required: ["type", "size"] },
                      { required: ["type", "width"] }
                    ],
                    additionalProperties: !1
                  },
                  "edges_schema.json": {
                    title: "Edges",
                    type: "object",
                    description:
                      "Edges describe additional styles applied to visually important edges of 3D objects.",
                    oneOf: [
                      { $ref: "#/definitions/sketchEdges_schema.json" },
                      { $ref: "#/definitions/solidEdges_schema.json" }
                    ]
                  },
                  "outline_schema.json": {
                    title: "Outline",
                    type: "object",
                    description: "The outline of the symbol layer.",
                    properties: {
                      color: { $ref: "#/definitions/color_schema.json" },
                      size: {
                        type: "number",
                        description: "Outline size in points, positive only",
                        minimum: 0
                      },
                      transparency: {
                        type: "integer",
                        description:
                          "The value has to lie between `100` (full transparency) and `0` (full opacity).",
                        minimum: 0,
                        maximum: 100
                      }
                    },
                    required: ["color", "size"],
                    additionalProperties: !1
                  },
                  "iconSymbol3DLayer_resource_schema.json": {
                    title: "IconSymbol3DLayer Resource",
                    type: "object",
                    description:
                      "The shape (primitive) or image URL (href) used to visualize the features.",
                    properties: {
                      dataURI: {
                        type: "string",
                        description:
                          "an image encoded as base64 string, starting with `data:image/`",
                        pattern: "^data:image/(.|\\n|\\r)+$"
                      },
                      href: {
                        description: "URL to the returned image.",
                        oneOf: [
                          {
                            type: "string",
                            description: "An absolute URL",
                            pattern: "^https?://.+$"
                          },
                          {
                            type: "string",
                            description: "A relative path starting with ./",
                            pattern: "^\\./.+$"
                          }
                        ]
                      },
                      primitive: {
                        type: "string",
                        description: "Specifies the type of symbol used.",
                        enum: ["circle", "square", "cross", "x", "kite"]
                      }
                    },
                    oneOf: [
                      { required: ["primitive"] },
                      { required: ["href"] },
                      { required: ["dataURI"] }
                    ],
                    additionalProperties: !1
                  },
                  "objectSymbol3DLayer_resource_schema.json": {
                    title: "ObjectSymbol3DLayer Resource",
                    type: "object",
                    description:
                      "The primitive shape (primitive) or external 3D model (href) used to visualize the points.",
                    properties: {
                      href: {
                        oneOf: [
                          {
                            type: "string",
                            description: "An absolute URL",
                            pattern: "^https?://.+$"
                          },
                          {
                            type: "string",
                            description: "A relative path starting with ./",
                            pattern: "^\\./.+$"
                          }
                        ]
                      },
                      primitive: {
                        type: "string",
                        enum: [
                          "sphere",
                          "cylinder",
                          "cube",
                          "cone",
                          "invertedCone",
                          "diamond",
                          "tetrahedron"
                        ]
                      }
                    },
                    oneOf: [
                      { required: ["primitive"] },
                      { required: ["href"] }
                    ],
                    additionalProperties: !1
                  },
                  "visualVariableLegendOptions_schema.json": {
                    title: "Visual Variable Legend Options",
                    type: "object",
                    description:
                      "Options available for the legend for visual variables.",
                    properties: {
                      showLegend: {
                        type: "boolean",
                        description:
                          "Indicates whether to show the color/size/opacity ramp in the legend."
                      },
                      title: {
                        type: "string",
                        description: "The title of the legend."
                      }
                    }
                  },
                  "sizeStop_schema.json": {
                    title: "sizeStop",
                    description:
                      "A `sizeStop` object describes the size of the symbol at various values of the expression.",
                    properties: {
                      size: {
                        type: "number",
                        description:
                          "Specifies the marker size to use for the specified value."
                      },
                      value: {
                        type: "number",
                        description: "The value to be mapped to a size."
                      }
                    },
                    required: ["size", "value"],
                    additionalProperties: !1
                  },
                  "transparencyStop_schema.json": {
                    title: "transparencyStop",
                    description:
                      "The transparencyStop object defines the thematic opacity ramp in a sequence of stops. At least two stops are required. The stops must be listed in ascending order based on the value of the `value` property in each stop.",
                    properties: {
                      label: {
                        type: "string",
                        description:
                          "A string value used to label the stop in the legend."
                      },
                      transparency: {
                        type: "integer",
                        description:
                          "A numeric transparancy value for a stop ranging from 0-100, where 0 is opaque and 100 is 100% transparent.",
                        minimum: 0,
                        maximum: 100
                      },
                      value: {
                        type: "number",
                        description:
                          "The pixel intensity value. Describes the pixel intensity value that the color should be associated with."
                      }
                    },
                    required: ["transparency", "value"],
                    additionalProperties: !1
                  },
                  "pointCloudFixedSizeAlgorithm_schema.json": {
                    title: "PointCloud FixedSize Algorithm",
                    type: "object",
                    description:
                      "Render points with fixed real world or screen space size.",
                    properties: {
                      size: {
                        type: "number",
                        description:
                          "Symbol size in real world units or display unit"
                      },
                      type: {
                        type: "string",
                        enum: ["pointCloudFixedSizeAlgorithm"]
                      },
                      useRealWorldSymbolSizes: {
                        type: "boolean",
                        description:
                          " If true symbol size is in meters, display unit (pt) otherwise"
                      }
                    },
                    required: ["size", "type"],
                    additionalProperties: !1
                  },
                  "pointCloudSplatAlgorithm_schema.json": {
                    title: "PointCloud Splat Algorithm",
                    type: "object",
                    description:
                      "Render points using sizes depending on point density.",
                    properties: {
                      minSize: {
                        type: "number",
                        description:
                          "Minimum display space point size in points"
                      },
                      scaleFactor: {
                        type: "number",
                        description:
                          "Scale factor to applied to the computed point size (in real world)"
                      },
                      type: {
                        type: "string",
                        enum: ["pointCloudSplatAlgorithm"]
                      }
                    },
                    required: ["scaleFactor", "type"],
                    additionalProperties: !1
                  },
                  "sketchEdges_schema.json": {
                    title: "Sketch Edges",
                    type: "object",
                    description:
                      "The sketch edge rendering configuration of a symbol layer. Edges of type `sketch` are rendered with a hand-drawn look in mind.",
                    properties: {
                      color: { $ref: "#/definitions/color_schema.json" },
                      extensionLength: {
                        type: "number",
                        description:
                          "A size in points by which to extend edges beyond their original end points."
                      },
                      size: {
                        type: "number",
                        description: "Edge size in points, positive only",
                        minimum: 0
                      },
                      transparency: {
                        type: "integer",
                        description:
                          "The value has to lie between `100` (full transparency) and `0` (full opacity).",
                        minimum: 0,
                        maximum: 100
                      },
                      type: {
                        type: "string",
                        description: "The type of edge visualization.",
                        enum: ["sketch"]
                      }
                    },
                    required: ["color", "type"],
                    additionalProperties: !1
                  },
                  "solidEdges_schema.json": {
                    title: "Solid Edges",
                    type: "object",
                    description:
                      "The solid edge rendering configuration of a symbol layer. Edges of type `solid` are rendered in a single color, unaffected by scene lighting.",
                    properties: {
                      color: { $ref: "#/definitions/color_schema.json" },
                      extensionLength: {
                        type: "number",
                        description:
                          "A size in points by which to extend edges beyond their original end points."
                      },
                      size: {
                        type: "number",
                        description: "Edge size in points, positive only",
                        minimum: 0
                      },
                      transparency: {
                        type: "integer",
                        description:
                          "The value has to lie between `100` (full transparency) and `0` (full opacity).",
                        minimum: 0,
                        maximum: 100
                      },
                      type: {
                        type: "string",
                        description: "The type of edge visualization.",
                        enum: ["solid"]
                      }
                    },
                    required: ["color", "type"],
                    additionalProperties: !1
                  }
                }
              });
          }.apply(null, r)) || (e.exports = a);
    },
    2157: function(e, t, i) {
      var r;
      e.exports = (function e(t, i, a) {
        function n(s, l) {
          if (!i[s]) {
            if (!t[s]) {
              var d = "function" == typeof r && r;
              if (!l && d) return r(s, !0);
              if (o) return o(s, !0);
              var p = new Error("Cannot find module '" + s + "'");
              throw ((p.code = "MODULE_NOT_FOUND"), p);
            }
            var c = (i[s] = { exports: {} });
            t[s][0].call(
              c.exports,
              function(e) {
                var i = t[s][1][e];
                return n(i || e);
              },
              c,
              c.exports,
              e,
              t,
              i,
              a
            );
          }
          return i[s].exports;
        }
        for (var o = "function" == typeof r && r, s = 0; s < a.length; s++)
          n(a[s]);
        return n;
      })(
        {
          1: [
            function(e, t, i) {
              "use strict";
              function r(e, t) {
                try {
                  return new Function("(function*(){})()")(), !0;
                } catch (e) {
                  if (t) throw new Error("generators not supported");
                }
              }
              function a(e) {
                return o.compile(e).code;
              }
              function n(e) {
                return s.compile(e, "", { promises: !0, sourcemap: !1 }).code;
              }
              t.exports = {
                setup: function e(t, i) {
                  !1 !== i && (i = !0);
                  var r,
                    a = t.async,
                    n = t.transpile;
                  switch (typeof n) {
                    case "string":
                      var o = p[n];
                      if (!o) throw new Error("bad transpiler: " + n);
                      return (t._transpileFunc = o(t, i));
                    case "undefined":
                    case "boolean":
                      if ("string" == typeof a) {
                        if (!(r = d[a]))
                          throw new Error("bad async mode: " + a);
                        return (t.transpile = r(t, i));
                      }
                      for (var s = 0; s < c.length; s++) {
                        var h = c[s];
                        if (e(h, !1)) return l.copy(h, t), t.transpile;
                      }
                      throw new Error(
                        "generators, nodent and regenerator are not available"
                      );
                    case "function":
                      return (t._transpileFunc = t.transpile);
                    default:
                      throw new Error("bad transpiler: " + n);
                  }
                },
                compile: function(e, t) {
                  var i,
                    r = this;
                  try {
                    i = this._addSchema(e);
                  } catch (e) {
                    return void setTimeout(function() {
                      t(e);
                    });
                  }
                  if (i.validate)
                    setTimeout(function() {
                      t(null, i.validate);
                    });
                  else {
                    if ("function" != typeof this._opts.loadSchema)
                      throw new Error(
                        "options.loadSchema should be a function"
                      );
                    !(function e(t, i, a) {
                      function n(e, t) {
                        if (!a) return i(e, t);
                        setTimeout(function() {
                          i(e, t);
                        });
                      }
                      var o;
                      try {
                        o = r.compile(t);
                      } catch (a) {
                        return void (a.missingSchema
                          ? (function(a) {
                              function n(a, n) {
                                if (a) return i(a);
                                if (!r._refs[o] && !r._schemas[o])
                                  try {
                                    r.addSchema(n, o);
                                  } catch (e) {
                                    return void i(e);
                                  }
                                e(t, i);
                              }
                              var o = a.missingSchema;
                              if (r._refs[o] || r._schemas[o])
                                return i(
                                  new Error(
                                    "Schema " +
                                      o +
                                      " is loaded but " +
                                      a.missingRef +
                                      " cannot be resolved"
                                  )
                                );
                              var s = r._loadingSchemas[o];
                              s
                                ? "function" == typeof s
                                  ? (r._loadingSchemas[o] = [s, n])
                                  : (s[s.length] = n)
                                : ((r._loadingSchemas[o] = n),
                                  r._opts.loadSchema(o, function(e, t) {
                                    var i = r._loadingSchemas[o];
                                    if (
                                      (delete r._loadingSchemas[o],
                                      "function" == typeof i)
                                    )
                                      i(e, t);
                                    else
                                      for (var a = 0; a < i.length; a++)
                                        i[a](e, t);
                                  }));
                            })(a)
                          : n(a));
                      }
                      n(null, o);
                    })(e, t, !0);
                  }
                }
              };
              var o,
                s,
                l = e("./compile/util"),
                d = {
                  "*": r,
                  "co*": r,
                  es7: function(e, t) {
                    try {
                      return new Function("(async function(){})()")(), !0;
                    } catch (e) {
                      if (t)
                        throw new Error("es7 async functions not supported");
                    }
                  }
                },
                p = {
                  nodent: function(t, i) {
                    try {
                      return (
                        s ||
                          (s = e("nodent")({
                            log: !1,
                            dontInstallRequireHook: !0
                          })),
                        "es7" != t.async &&
                          (t.async &&
                            !0 !== t.async &&
                            console.warn(
                              "nodent transpiles only es7 async functions"
                            ),
                          (t.async = "es7")),
                        n
                      );
                    } catch (e) {
                      if (i) throw new Error("nodent not available");
                    }
                  },
                  regenerator: function(t, i) {
                    try {
                      return (
                        o || (o = e("regenerator")).runtime(),
                        (t.async && !0 !== t.async) || (t.async = "es7"),
                        a
                      );
                    } catch (e) {
                      if (i) throw new Error("regenerator not available");
                    }
                  }
                },
                c = [
                  { async: "co*" },
                  { async: "es7", transpile: "nodent" },
                  { async: "co*", transpile: "regenerator" }
                ];
            },
            { "./compile/util": 11 }
          ],
          2: [
            function(e, t, i) {
              "use strict";
              var r = (t.exports = function() {
                this._cache = {};
              });
              (r.prototype.put = function(e, t) {
                this._cache[e] = t;
              }),
                (r.prototype.get = function(e) {
                  return this._cache[e];
                }),
                (r.prototype.del = function(e) {
                  delete this._cache[e];
                }),
                (r.prototype.clear = function() {
                  this._cache = {};
                });
            },
            {}
          ],
          3: [
            function(e, t, i) {
              "use strict";
              t.exports = {
                $ref: e("../dotjs/ref"),
                allOf: e("../dotjs/allOf"),
                anyOf: e("../dotjs/anyOf"),
                dependencies: e("../dotjs/dependencies"),
                enum: e("../dotjs/enum"),
                format: e("../dotjs/format"),
                items: e("../dotjs/items"),
                maximum: e("../dotjs/_limit"),
                minimum: e("../dotjs/_limit"),
                maxItems: e("../dotjs/_limitItems"),
                minItems: e("../dotjs/_limitItems"),
                maxLength: e("../dotjs/_limitLength"),
                minLength: e("../dotjs/_limitLength"),
                maxProperties: e("../dotjs/_limitProperties"),
                minProperties: e("../dotjs/_limitProperties"),
                multipleOf: e("../dotjs/multipleOf"),
                not: e("../dotjs/not"),
                oneOf: e("../dotjs/oneOf"),
                pattern: e("../dotjs/pattern"),
                properties: e("../dotjs/properties"),
                required: e("../dotjs/required"),
                uniqueItems: e("../dotjs/uniqueItems"),
                validate: e("../dotjs/validate")
              };
            },
            {
              "../dotjs/_limit": 14,
              "../dotjs/_limitItems": 15,
              "../dotjs/_limitLength": 16,
              "../dotjs/_limitProperties": 17,
              "../dotjs/allOf": 18,
              "../dotjs/anyOf": 19,
              "../dotjs/dependencies": 22,
              "../dotjs/enum": 23,
              "../dotjs/format": 24,
              "../dotjs/items": 25,
              "../dotjs/multipleOf": 26,
              "../dotjs/not": 27,
              "../dotjs/oneOf": 28,
              "../dotjs/pattern": 29,
              "../dotjs/properties": 31,
              "../dotjs/ref": 32,
              "../dotjs/required": 33,
              "../dotjs/uniqueItems": 35,
              "../dotjs/validate": 36
            }
          ],
          4: [
            function(e, t, i) {
              "use strict";
              t.exports = function e(t, i) {
                if (t === i) return !0;
                var r,
                  a = Array.isArray(t),
                  n = Array.isArray(i);
                if (a && n) {
                  if (t.length != i.length) return !1;
                  for (r = 0; r < t.length; r++) if (!e(t[r], i[r])) return !1;
                  return !0;
                }
                if (a != n) return !1;
                if (t && i && "object" == typeof t && "object" == typeof i) {
                  var o = Object.keys(t);
                  if (o.length !== Object.keys(i).length) return !1;
                  var s = t instanceof Date,
                    l = i instanceof Date;
                  if (s && l) return t.getTime() == i.getTime();
                  if (s != l) return !1;
                  var d = t instanceof RegExp,
                    p = i instanceof RegExp;
                  if (d && p) return t.toString() == i.toString();
                  if (d != p) return !1;
                  for (r = 0; r < o.length; r++)
                    if (!Object.prototype.hasOwnProperty.call(i, o[r]))
                      return !1;
                  for (r = 0; r < o.length; r++)
                    if (!e(t[o[r]], i[o[r]])) return !1;
                  return !0;
                }
                return !1;
              };
            },
            {}
          ],
          5: [
            function(e, t, i) {
              "use strict";
              function r(e) {
                e = "full" == e ? "full" : "fast";
                var t = d.copy(r[e]);
                for (var i in r.compare)
                  t[i] = { validate: t[i], compare: r.compare[i] };
                return t;
              }
              function a(e) {
                var t = e.match(p);
                if (!t) return !1;
                var i = +t[1],
                  r = +t[2];
                return i >= 1 && i <= 12 && r >= 1 && r <= c[i];
              }
              function n(e, t) {
                var i = e.match(h);
                if (!i) return !1;
                var r = i[1],
                  a = i[2],
                  n = i[3],
                  o = i[5];
                return r <= 23 && a <= 59 && n <= 59 && (!t || o);
              }
              function o(e) {
                try {
                  return new RegExp(e), !0;
                } catch (e) {
                  return !1;
                }
              }
              function s(e, t) {
                if (e && t)
                  return e > t ? 1 : e < t ? -1 : e === t ? 0 : void 0;
              }
              function l(e, t) {
                if (e && t && ((e = e.match(h)), (t = t.match(h)), e && t))
                  return (
                    (e = e[1] + e[2] + e[3] + (e[4] || "")),
                    (t = t[1] + t[2] + t[3] + (t[4] || "")),
                    e > t ? 1 : e < t ? -1 : e === t ? 0 : void 0
                  );
              }
              var d = e("./util"),
                p = /^\d\d\d\d-(\d\d)-(\d\d)$/,
                c = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                h = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d:\d\d)?$/i,
                u = /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*$/i,
                f = /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@\/?]|%[0-9a-f]{2})*)?(?:\#(?:[a-z0-9\-._~!$&'()*+,;=:@\/?]|%[0-9a-f]{2})*)?$/i,
                m = /^(?:urn\:uuid\:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,
                y = /^(?:\/(?:[^~\/]|~0|~1)*)*$|^\#(?:\/(?:[a-z0-9_\-\.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,
                g = /^(?:0|[1-9][0-9]*)(?:\#|(?:\/(?:[^~\/]|~0|~1)*)*)$/;
              (t.exports = r),
                (r.fast = {
                  date: /^\d\d\d\d-[0-1]\d-[0-3]\d$/,
                  time: /^[0-2]\d:[0-5]\d:[0-5]\d(?:\.\d+)?(?:z|[+-]\d\d:\d\d)?$/i,
                  "date-time": /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s][0-2]\d:[0-5]\d:[0-5]\d(?:\.\d+)?(?:z|[+-]\d\d:\d\d)$/i,
                  uri: /^(?:[a-z][a-z0-9+-.]*)?(?:\:|\/)\/?[^\s]*$/i,
                  email: /^[a-z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i,
                  hostname: u,
                  ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
                  ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,
                  regex: o,
                  uuid: m,
                  "json-pointer": y,
                  "relative-json-pointer": g
                }),
                (r.full = {
                  date: a,
                  time: n,
                  "date-time": function(e) {
                    var t = e.split(v);
                    return 2 == t.length && a(t[0]) && n(t[1], !0);
                  },
                  uri: function(e) {
                    return b.test(e) && f.test(e);
                  },
                  email: /^[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&''*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
                  hostname: function(e) {
                    return e.length <= 255 && u.test(e);
                  },
                  ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
                  ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,
                  regex: o,
                  uuid: m,
                  "json-pointer": y,
                  "relative-json-pointer": g
                }),
                (r.compare = {
                  date: s,
                  time: l,
                  "date-time": function(e, t) {
                    if (e && t) {
                      (e = e.split(v)), (t = t.split(v));
                      var i = s(e[0], t[0]);
                      if (void 0 !== i) return i || l(e[1], t[1]);
                    }
                  }
                });
              var v = /t|\s/i,
                b = /\/|\:/;
            },
            { "./util": 11 }
          ],
          6: [
            function(e, t, i) {
              "use strict";
              function r() {
                if (void 0 === h)
                  try {
                    h = e("js-beautify").js_beautify;
                  } catch (e) {
                    h = !1;
                  }
              }
              function a(e, t, i) {
                var r = o.call(this, e, t, i);
                return r >= 0
                  ? { index: r, compiling: !0 }
                  : ((r = this._compilations.length),
                    (this._compilations[r] = { schema: e, root: t, baseId: i }),
                    { index: r, compiling: !1 });
              }
              function n(e, t, i) {
                var r = o.call(this, e, t, i);
                r >= 0 && this._compilations.splice(r, 1);
              }
              function o(e, t, i) {
                for (var r = 0; r < this._compilations.length; r++) {
                  var a = this._compilations[r];
                  if (a.schema == e && a.root == t && a.baseId == i) return r;
                }
                return -1;
              }
              function s(e, t) {
                return (
                  "var pattern" +
                  e +
                  " = new RegExp(" +
                  f.toQuotedString(t[e]) +
                  ");"
                );
              }
              function l(e) {
                return "var default" + e + " = defaults[" + e + "];";
              }
              function d(e, t) {
                return t[e] ? "var refVal" + e + " = refVal[" + e + "];" : "";
              }
              function p(e) {
                return "var customRule" + e + " = customRules[" + e + "];";
              }
              function c(e, t) {
                if (!e.length) return "";
                for (var i = "", r = 0; r < e.length; r++) i += t(r, e);
                return i;
              }
              var h,
                u = e("./resolve"),
                f = e("./util"),
                m = e("json-stable-stringify"),
                y = e("../async"),
                g = e("../dotjs/validate"),
                v = e("co"),
                b = f.ucs2length,
                j = e("./equal"),
                w = e("./validation_error");
              t.exports = function e(t, i, o, P) {
                function S(t, a, n, o) {
                  var m = !a || (a && a.schema == t);
                  if (a.schema != i.schema) return e.call($, t, a, n, o);
                  var P = !0 === t.$async;
                  P && !L.transpile && y.setup(L);
                  var S = g({
                    isTop: !0,
                    schema: t,
                    isRoot: m,
                    baseId: o,
                    root: a,
                    schemaPath: "",
                    errSchemaPath: "#",
                    errorPath: '""',
                    RULES: N,
                    validate: g,
                    util: f,
                    resolve: u,
                    resolveRef: _,
                    usePattern: A,
                    useDefault: x,
                    useCustomRule: E,
                    opts: L,
                    formats: F,
                    self: $
                  });
                  (S = c(R, d) + c(O, s) + c(k, l) + c(C, p) + S),
                    L.beautify &&
                      (r(),
                      h
                        ? (S = h(S, L.beautify))
                        : console.error(
                            '"npm install js-beautify" to use beautify option'
                          ));
                  var I,
                    T,
                    q = L._transpileFunc;
                  try {
                    (T = P && q ? q(S) : S),
                      (I = new Function(
                        "self",
                        "RULES",
                        "formats",
                        "root",
                        "refVal",
                        "defaults",
                        "customRules",
                        "co",
                        "equal",
                        "ucs2length",
                        "ValidationError",
                        T
                      )($, N, F, i, R, k, C, v, j, b, w)),
                      (R[0] = I);
                  } catch (t) {
                    throw (console.error(
                      "Error compiling schema, function code:",
                      T
                    ),
                    t);
                  }
                  return (
                    (I.schema = t),
                    (I.errors = null),
                    (I.refs = D),
                    (I.refVal = R),
                    (I.root = m ? I : a),
                    P && (I.$async = !0),
                    z && (I.sourceCode = S),
                    !0 === L.sourceCode &&
                      (I.source = { patterns: O, defaults: k }),
                    I
                  );
                }
                function _(t, r, a) {
                  r = u.url(t, r);
                  var n,
                    s,
                    l = D[r];
                  if (void 0 !== l)
                    return T((n = R[l]), (s = "refVal[" + l + "]"));
                  if (!a && i.refs) {
                    var d = i.refs[r];
                    if (void 0 !== d)
                      return (n = i.refVal[d]), (s = I(r, n)), T(n, s);
                  }
                  s = I(r);
                  var p = u.call($, S, i, r);
                  if (!p) {
                    var c = o && o[r];
                    c &&
                      (p = u.inlineRef(c, L.inlineRefs)
                        ? c
                        : e.call($, c, i, o, t));
                  }
                  return p
                    ? ((function(e, t) {
                        var i = D[e];
                        R[i] = t;
                      })(r, p),
                      T(p, s))
                    : void 0;
                }
                function I(e, t) {
                  var i = R.length;
                  return (R[i] = t), (D[e] = i), "refVal" + i;
                }
                function T(e, t) {
                  return "object" == typeof e
                    ? { code: t, schema: e, inline: !0 }
                    : { code: t, $async: e && e.$async };
                }
                function A(e) {
                  var t = q[e];
                  return (
                    void 0 === t && ((t = q[e] = O.length), (O[t] = e)),
                    "pattern" + t
                  );
                }
                function x(e) {
                  switch (typeof e) {
                    case "boolean":
                    case "number":
                      return "" + e;
                    case "string":
                      return f.toQuotedString(e);
                    case "object":
                      if (null === e) return "null";
                      var t = m(e),
                        i = M[t];
                      return (
                        void 0 === i && ((i = M[t] = k.length), (k[i] = e)),
                        "default" + i
                      );
                  }
                }
                function E(e, t, i, r) {
                  var a = e.definition.validateSchema;
                  if (a && !1 !== $._opts.validateSchema && !a(t)) {
                    var n =
                      "keyword schema is invalid: " + $.errorsText(a.errors);
                    if ("log" != $._opts.validateSchema) throw new Error(n);
                    console.error(n);
                  }
                  var o,
                    s = e.definition.compile,
                    l = e.definition.inline,
                    d = e.definition.macro;
                  s
                    ? (o = s.call($, t, i, r))
                    : d
                      ? ((o = d.call($, t, i, r)),
                        !1 !== L.validateSchema && $.validateSchema(o, !0))
                      : (o = l
                          ? l.call($, r, e.keyword, t, i)
                          : e.definition.validate);
                  var p = C.length;
                  return (C[p] = o), { code: "customRule" + p, validate: o };
                }
                var $ = this,
                  L = this._opts,
                  R = [void 0],
                  D = {},
                  O = [],
                  q = {},
                  k = [],
                  M = {},
                  C = [],
                  z = !1 !== L.sourceCode;
                i = i || { schema: t, refVal: R, refs: D };
                var V = a.call(this, t, i, P),
                  U = this._compilations[V.index];
                if (V.compiling)
                  return (U.callValidate = function e() {
                    var t = U.validate,
                      i = t.apply(null, arguments);
                    return (e.errors = t.errors), i;
                  });
                var F = this._formats,
                  N = this.RULES;
                try {
                  var B = S(t, i, o, P);
                  U.validate = B;
                  var G = U.callValidate;
                  return (
                    G &&
                      ((G.schema = B.schema),
                      (G.errors = null),
                      (G.refs = B.refs),
                      (G.refVal = B.refVal),
                      (G.root = B.root),
                      (G.$async = B.$async),
                      z && (G.sourceCode = B.sourceCode)),
                    B
                  );
                } finally {
                  n.call(this, t, i, P);
                }
              };
            },
            {
              "../async": 1,
              "../dotjs/validate": 36,
              "./equal": 4,
              "./resolve": 7,
              "./util": 11,
              "./validation_error": 12,
              co: 41,
              "json-stable-stringify": 42
            }
          ],
          7: [
            function(e, t, i) {
              "use strict";
              function r(e, t, i) {
                var n = this._refs[i];
                if ("string" == typeof n) {
                  if (!this._refs[n]) return r.call(this, e, t, n);
                  n = this._refs[n];
                }
                if ((n = n || this._schemas[i]) instanceof m)
                  return s(n.schema, this._opts.inlineRefs)
                    ? n.schema
                    : n.validate || this._compile(n);
                var o,
                  l,
                  d,
                  p = a.call(this, t, i);
                return (
                  p && ((o = p.schema), (t = p.root), (d = p.baseId)),
                  o instanceof m
                    ? (l = o.validate || e.call(this, o.schema, t, void 0, d))
                    : o &&
                      (l = s(o, this._opts.inlineRefs)
                        ? o
                        : e.call(this, o, t, void 0, d)),
                  l
                );
              }
              function a(e, t) {
                var i = h.parse(t, !1, !0),
                  r = d(i),
                  a = l(e.schema.id);
                if (r !== a) {
                  var s = p(r),
                    c = this._refs[s];
                  if ("string" == typeof c) return n.call(this, e, c, i);
                  if (c instanceof m) c.validate || this._compile(c), (e = c);
                  else {
                    if (!((c = this._schemas[s]) instanceof m)) return;
                    if ((c.validate || this._compile(c), s == p(t)))
                      return { schema: c, root: e, baseId: a };
                    e = c;
                  }
                  if (!e.schema) return;
                  a = l(e.schema.id);
                }
                return o.call(this, i, a, e.schema, e);
              }
              function n(e, t, i) {
                var r = a.call(this, e, t);
                if (r) {
                  var n = r.schema,
                    s = r.baseId;
                  return (
                    (e = r.root),
                    n.id && (s = c(s, n.id)),
                    o.call(this, i, s, n, e)
                  );
                }
              }
              function o(e, t, i, r) {
                if (((e.hash = e.hash || ""), "#/" == e.hash.slice(0, 2))) {
                  for (var n = e.hash.split("/"), o = 1; o < n.length; o++) {
                    var s = n[o];
                    if (s) {
                      if (((s = f.unescapeFragment(s)), !(i = i[s]))) break;
                      if ((i.id && !y[s] && (t = c(t, i.id)), i.$ref)) {
                        var l = c(t, i.$ref),
                          d = a.call(this, r, l);
                        d && ((i = d.schema), (r = d.root), (t = d.baseId));
                      }
                    }
                  }
                  return i && i != r.schema
                    ? { schema: i, root: r, baseId: t }
                    : void 0;
                }
              }
              function s(e, t) {
                return (
                  !1 !== t &&
                  (void 0 === t || !0 === t
                    ? (function e(t) {
                        var i;
                        if (Array.isArray(t)) {
                          for (var r = 0; r < t.length; r++)
                            if ("object" == typeof (i = t[r]) && !e(i))
                              return !1;
                        } else
                          for (var a in t) {
                            if ("$ref" == a) return !1;
                            if ("object" == typeof (i = t[a]) && !e(i))
                              return !1;
                          }
                        return !0;
                      })(e)
                    : t
                      ? (function e(t) {
                          var i,
                            r = 0;
                          if (Array.isArray(t)) {
                            for (var a = 0; a < t.length; a++)
                              if (
                                ("object" == typeof (i = t[a]) && (r += e(i)),
                                r == 1 / 0)
                              )
                                return 1 / 0;
                          } else
                            for (var n in t) {
                              if ("$ref" == n) return 1 / 0;
                              if (g[n]) r++;
                              else if (
                                ("object" == typeof (i = t[n]) &&
                                  (r += e(i) + 1),
                                r == 1 / 0)
                              )
                                return 1 / 0;
                            }
                          return r;
                        })(e) <= t
                      : void 0)
                );
              }
              function l(e, t) {
                return !1 !== t && (e = p(e)), d(h.parse(e, !1, !0));
              }
              function d(e) {
                var t = e.protocol || "//" == e.href.slice(0, 2) ? "//" : "";
                return (
                  (e.protocol || "") + t + (e.host || "") + (e.path || "") + "#"
                );
              }
              function p(e) {
                return e ? e.replace(v, "") : "";
              }
              function c(e, t) {
                return (t = p(t)), h.resolve(e, t);
              }
              var h = e("url"),
                u = e("./equal"),
                f = e("./util"),
                m = e("./schema_obj");
              (t.exports = r),
                (r.normalizeId = p),
                (r.fullPath = l),
                (r.url = c),
                (r.ids = function(e) {
                  var t = p(e.id),
                    i = {};
                  return (
                    function e(t, r, a) {
                      if (Array.isArray(t))
                        for (var n = 0; n < t.length; n++)
                          e.call(this, t[n], r + "/" + n, a);
                      else if (t && "object" == typeof t) {
                        if ("string" == typeof t.id) {
                          var o = (a = a ? h.resolve(a, t.id) : t.id);
                          o = p(o);
                          var s = this._refs[o];
                          if (
                            ("string" == typeof s && (s = this._refs[s]),
                            s && s.schema)
                          ) {
                            if (!u(t, s.schema))
                              throw new Error(
                                'id "' +
                                  o +
                                  '" resolves to more than one schema'
                              );
                          } else if (o != p(r))
                            if ("#" == o[0]) {
                              if (i[o] && !u(t, i[o]))
                                throw new Error(
                                  'id "' +
                                    o +
                                    '" resolves to more than one schema'
                                );
                              i[o] = t;
                            } else this._refs[o] = r;
                        }
                        for (var l in t)
                          e.call(this, t[l], r + "/" + f.escapeFragment(l), a);
                      }
                    }.call(this, e, l(t, !1), t),
                    i
                  );
                }),
                (r.inlineRef = s),
                (r.schema = a);
              var y = f.toHash([
                  "properties",
                  "patternProperties",
                  "enum",
                  "dependencies",
                  "definitions"
                ]),
                g = f.toHash([
                  "type",
                  "format",
                  "pattern",
                  "maxLength",
                  "minLength",
                  "maxProperties",
                  "minProperties",
                  "maxItems",
                  "minItems",
                  "maximum",
                  "minimum",
                  "uniqueItems",
                  "multipleOf",
                  "required",
                  "enum"
                ]),
                v = /#\/?$/;
            },
            { "./equal": 4, "./schema_obj": 9, "./util": 11, url: 50 }
          ],
          8: [
            function(e, t, i) {
              "use strict";
              var r = e("./_rules"),
                a = e("./util").toHash;
              t.exports = function() {
                var e = [
                    {
                      type: "number",
                      rules: ["maximum", "minimum", "multipleOf"]
                    },
                    {
                      type: "string",
                      rules: ["maxLength", "minLength", "pattern", "format"]
                    },
                    {
                      type: "array",
                      rules: ["maxItems", "minItems", "uniqueItems", "items"]
                    },
                    {
                      type: "object",
                      rules: [
                        "maxProperties",
                        "minProperties",
                        "required",
                        "dependencies",
                        "properties"
                      ]
                    },
                    {
                      rules: ["$ref", "enum", "not", "anyOf", "oneOf", "allOf"]
                    }
                  ],
                  t = ["type", "additionalProperties", "patternProperties"];
                return (
                  (e.all = a(t)),
                  e.forEach(function(i) {
                    i.rules = i.rules.map(function(i) {
                      return t.push(i), (e.all[i] = { keyword: i, code: r[i] });
                    });
                  }),
                  (e.keywords = a(
                    t.concat([
                      "additionalItems",
                      "$schema",
                      "id",
                      "title",
                      "description",
                      "default"
                    ])
                  )),
                  (e.types = a([
                    "number",
                    "integer",
                    "string",
                    "array",
                    "object",
                    "boolean",
                    "null"
                  ])),
                  (e.custom = {}),
                  e
                );
              };
            },
            { "./_rules": 3, "./util": 11 }
          ],
          9: [
            function(e, t, i) {
              "use strict";
              var r = e("./util");
              t.exports = function(e) {
                r.copy(e, this);
              };
            },
            { "./util": 11 }
          ],
          10: [
            function(e, t, i) {
              "use strict";
              t.exports = function(e) {
                for (var t, i = 0, r = e.length, a = 0; a < r; )
                  i++,
                    (t = e.charCodeAt(a++)) >= 55296 &&
                      t <= 56319 &&
                      a < r &&
                      56320 == (64512 & (t = e.charCodeAt(a))) &&
                      a++;
                return i;
              };
            },
            {}
          ],
          11: [
            function(e, t, i) {
              "use strict";
              function r(e, t, i) {
                var r = i ? " !== " : " === ",
                  a = i ? " || " : " && ",
                  n = i ? "!" : "",
                  o = i ? "" : "!";
                switch (e) {
                  case "null":
                    return t + r + "null";
                  case "array":
                    return n + "Array.isArray(" + t + ")";
                  case "object":
                    return (
                      "(" +
                      n +
                      t +
                      a +
                      "typeof " +
                      t +
                      r +
                      '"object"' +
                      a +
                      o +
                      "Array.isArray(" +
                      t +
                      "))"
                    );
                  case "integer":
                    return (
                      "(typeof " +
                      t +
                      r +
                      '"number"' +
                      a +
                      o +
                      "(" +
                      t +
                      " % 1)" +
                      a +
                      t +
                      r +
                      t +
                      ")"
                    );
                  default:
                    return "typeof " + t + r + '"' + e + '"';
                }
              }
              function a(e) {
                for (var t = {}, i = 0; i < e.length; i++) t[e[i]] = !0;
                return t;
              }
              function n(e) {
                return "number" == typeof e
                  ? "[" + e + "]"
                  : h.test(e)
                    ? "." + e
                    : "['" + o(e) + "']";
              }
              function o(e) {
                return e
                  .replace(u, "\\$&")
                  .replace(/\n/g, "\\n")
                  .replace(/\r/g, "\\r")
                  .replace(/\f/g, "\\f")
                  .replace(/\t/g, "\\t");
              }
              function s(e) {
                return "'" + o(e) + "'";
              }
              function l(e, t) {
                return '""' == e ? t : (e + " + " + t).replace(/' \+ '/g, "");
              }
              function d(e) {
                return e.replace(/~/g, "~0").replace(/\//g, "~1");
              }
              function p(e) {
                return e.replace(/~1/g, "/").replace(/~0/g, "~");
              }
              t.exports = {
                copy: function(e, t) {
                  for (var i in ((t = t || {}), e)) t[i] = e[i];
                  return t;
                },
                checkDataType: r,
                checkDataTypes: function(e, t) {
                  switch (e.length) {
                    case 1:
                      return r(e[0], t, !0);
                    default:
                      var i = "",
                        n = a(e);
                      for (var o in (n.array &&
                        n.object &&
                        ((i = n.null ? "(" : "(!" + t + " || "),
                        (i += "typeof " + t + ' !== "object")'),
                        delete n.null,
                        delete n.array,
                        delete n.object),
                      n.number && delete n.integer,
                      n))
                        i += (i ? " && " : "") + r(o, t, !0);
                      return i;
                  }
                },
                coerceToTypes: function(e, t) {
                  if (Array.isArray(t)) {
                    for (var i = [], r = 0; r < t.length; r++) {
                      var a = t[r];
                      c[a]
                        ? (i[i.length] = a)
                        : "array" === e && "array" === a && (i[i.length] = a);
                    }
                    if (i.length) return i;
                  } else {
                    if (c[t]) return [t];
                    if ("array" === e && "array" === t) return ["array"];
                  }
                },
                toHash: a,
                getProperty: n,
                escapeQuotes: o,
                ucs2length: e("./ucs2length"),
                varOccurences: function(e, t) {
                  t += "[^0-9]";
                  var i = e.match(new RegExp(t, "g"));
                  return i ? i.length : 0;
                },
                varReplace: function(e, t, i) {
                  return (
                    (t += "([^0-9])"),
                    (i = i.replace(/\$/g, "$$$$")),
                    e.replace(new RegExp(t, "g"), i + "$1")
                  );
                },
                cleanUpCode: function(e) {
                  return e
                    .replace(f, "")
                    .replace(m, "")
                    .replace(y, "if (!($1))");
                },
                cleanUpVarErrors: function(e, t) {
                  var i = e.match(g);
                  return i && 2 === i.length
                    ? t
                      ? e.replace(b, "").replace(P, S)
                      : e.replace(v, "").replace(j, w)
                    : e;
                },
                schemaHasRules: function(e, t) {
                  for (var i in e) if (t[i]) return !0;
                },
                schemaHasRulesExcept: function(e, t, i) {
                  for (var r in e) if (r != i && t[r]) return !0;
                },
                stableStringify: e("json-stable-stringify"),
                toQuotedString: s,
                getPathExpr: function(e, t, i, r) {
                  return l(
                    e,
                    i
                      ? "'/' + " +
                        t +
                        (r ? "" : ".replace(/~/g, '~0').replace(/\\//g, '~1')")
                      : r
                        ? "'[' + " + t + " + ']'"
                        : "'[\\'' + " + t + " + '\\']'"
                  );
                },
                getPath: function(e, t, i) {
                  return l(e, s(i ? "/" + d(t) : n(t)));
                },
                getData: function(e, t, i) {
                  var r, a, o, s;
                  if ("" === e) return "rootData";
                  if ("/" == e[0]) {
                    if (!_.test(e))
                      throw new Error("Invalid JSON-pointer: " + e);
                    (a = e), (o = "rootData");
                  } else {
                    if (!(s = e.match(I)))
                      throw new Error("Invalid JSON-pointer: " + e);
                    if (((r = +s[1]), "#" == (a = s[2]))) {
                      if (r >= t)
                        throw new Error(
                          "Cannot access property/index " +
                            r +
                            " levels up, current level is " +
                            t
                        );
                      return i[t - r];
                    }
                    if (r > t)
                      throw new Error(
                        "Cannot access data " +
                          r +
                          " levels up, current level is " +
                          t
                      );
                    if (((o = "data" + (t - r || "")), !a)) return o;
                  }
                  for (var l = o, d = a.split("/"), c = 0; c < d.length; c++) {
                    var h = d[c];
                    h && ((o += n(p(h))), (l += " && " + o));
                  }
                  return l;
                },
                unescapeFragment: function(e) {
                  return p(decodeURIComponent(e));
                },
                escapeFragment: function(e) {
                  return encodeURIComponent(d(e));
                },
                escapeJsonPointer: d
              };
              var c = a(["string", "number", "integer", "boolean", "null"]),
                h = /^[a-z$_][a-z$_0-9]*$/i,
                u = /'|\\/g,
                f = /else\s*{\s*}/g,
                m = /if\s*\([^)]+\)\s*\{\s*\}(?!\s*else)/g,
                y = /if\s*\(([^)]+)\)\s*\{\s*\}\s*else(?!\s*if)/g,
                g = /[^v\.]errors/g,
                v = /var errors = 0;|var vErrors = null;|validate.errors = vErrors;/g,
                b = /var errors = 0;|var vErrors = null;/g,
                j = "return errors === 0;",
                w = "validate.errors = null; return true;",
                P = /if \(errors === 0\) return true;\s*else throw new ValidationError\(vErrors\);/,
                S = "return true;",
                _ = /^\/(?:[^~]|~0|~1)*$/,
                I = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
            },
            { "./ucs2length": 10, "json-stable-stringify": 42 }
          ],
          12: [
            function(e, t, i) {
              "use strict";
              function r(e) {
                (this.message = "validation failed"),
                  (this.errors = e),
                  (this.ajv = this.validation = !0);
              }
              (t.exports = r),
                (r.prototype = Object.create(Error.prototype)),
                (r.prototype.constructor = r);
            },
            {}
          ],
          13: [
            function(e, t, i) {
              "use strict";
              t.exports = function(e, t) {
                var i = " ",
                  r = e.level,
                  a = e.dataLevel,
                  n = e.schema[t],
                  o = e.schemaPath + e.util.getProperty(t),
                  s = e.errSchemaPath + "/" + t,
                  l = !e.opts.allErrors,
                  d = "data" + (a || ""),
                  p = "valid" + r;
                if (((i += "var " + p + " = undefined;"), !1 === e.opts.format))
                  return (i += " " + p + " = true; ");
                var c = e.schema.format,
                  h = e.opts.v5 && c.$data,
                  u = "";
                if (h) {
                  var f = e.util.getData(c.$data, a, e.dataPathArr),
                    m = "format" + r,
                    y = "compare" + r;
                  i +=
                    " var " +
                    m +
                    " = formats[" +
                    f +
                    "] , " +
                    y +
                    " = " +
                    m +
                    " && " +
                    m +
                    ".compare;";
                } else {
                  var m = e.formats[c];
                  if (!m || !m.compare) return (i += "  " + p + " = true; ");
                  var y = "formats" + e.util.getProperty(c) + ".compare";
                }
                var g,
                  v = "formatMaximum" == t,
                  b = "formatExclusive" + (v ? "Maximum" : "Minimum"),
                  j = e.schema[b],
                  w = e.opts.v5 && j && j.$data,
                  P = v ? "<" : ">",
                  S = "result" + r,
                  _ = e.opts.v5 && n && n.$data;
                if (
                  (_
                    ? ((i +=
                        " var schema" +
                        r +
                        " = " +
                        e.util.getData(n.$data, a, e.dataPathArr) +
                        "; "),
                      (g = "schema" + r))
                    : (g = n),
                  w)
                ) {
                  var I = e.util.getData(j.$data, a, e.dataPathArr),
                    T = "exclusive" + r,
                    A = "op" + r,
                    x = "' + " + A + " + '";
                  (i += " var schemaExcl" + r + " = " + I + "; "),
                    (i +=
                      " if (typeof " +
                      (I = "schemaExcl" + r) +
                      " != 'boolean' && " +
                      I +
                      " !== undefined) { " +
                      p +
                      " = false; ");
                  var E = b,
                    $ = $ || [];
                  $.push(i),
                    (i = ""),
                    !1 !== e.createErrors
                      ? ((i +=
                          " { keyword: '" +
                          (E || "_formatExclusiveLimit") +
                          "' , dataPath: (dataPath || '') + " +
                          e.errorPath +
                          " , schemaPath: " +
                          e.util.toQuotedString(s) +
                          " , params: {} "),
                        !1 !== e.opts.messages &&
                          (i += " , message: '" + b + " should be boolean' "),
                        e.opts.verbose &&
                          (i +=
                            " , schema: validate.schema" +
                            o +
                            " , parentSchema: validate.schema" +
                            e.schemaPath +
                            " , data: " +
                            d +
                            " "),
                        (i += " } "))
                      : (i += " {} ");
                  var L = i;
                  (i = $.pop()),
                    !e.compositeRule && l
                      ? e.async
                        ? (i += " throw new ValidationError([" + L + "]); ")
                        : (i +=
                            " validate.errors = [" + L + "]; return false; ")
                      : (i +=
                          " var err = " +
                          L +
                          ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "),
                    (i += " }  "),
                    l && ((u += "}"), (i += " else { ")),
                    _ &&
                      ((i +=
                        " if (" +
                        g +
                        " === undefined) " +
                        p +
                        " = true; else if (typeof " +
                        g +
                        " != 'string') " +
                        p +
                        " = false; else { "),
                      (u += "}")),
                    h &&
                      ((i += " if (!" + y + ") " + p + " = true; else { "),
                      (u += "}")),
                    (i += " var " + S + " = " + y + "(" + d + ",  "),
                    (i += _ ? "" + g : "" + e.util.toQuotedString(n)),
                    (i +=
                      " ); if (" +
                      S +
                      " === undefined) " +
                      p +
                      " = false; var " +
                      T +
                      " = " +
                      I +
                      " === true; if (" +
                      p +
                      " === undefined) { " +
                      p +
                      " = " +
                      T +
                      " ? " +
                      S +
                      " " +
                      P +
                      " 0 : " +
                      S +
                      " " +
                      P +
                      "= 0; } if (!" +
                      p +
                      ") var op" +
                      r +
                      " = " +
                      T +
                      " ? '" +
                      P +
                      "' : '" +
                      P +
                      "=';");
                } else {
                  var T = !0 === j,
                    x = P;
                  T || (x += "=");
                  var A = "'" + x + "'";
                  _ &&
                    ((i +=
                      " if (" +
                      g +
                      " === undefined) " +
                      p +
                      " = true; else if (typeof " +
                      g +
                      " != 'string') " +
                      p +
                      " = false; else { "),
                    (u += "}")),
                    h &&
                      ((i += " if (!" + y + ") " + p + " = true; else { "),
                      (u += "}")),
                    (i += " var " + S + " = " + y + "(" + d + ",  "),
                    (i += _ ? "" + g : "" + e.util.toQuotedString(n)),
                    (i +=
                      " ); if (" +
                      S +
                      " === undefined) " +
                      p +
                      " = false; if (" +
                      p +
                      " === undefined) " +
                      p +
                      " = " +
                      S +
                      " " +
                      P),
                    T || (i += "="),
                    (i += " 0;");
                }
                i += u + "if (!" + p + ") { ";
                var E = t,
                  $ = $ || [];
                $.push(i),
                  (i = ""),
                  !1 !== e.createErrors
                    ? ((i +=
                        " { keyword: '" +
                        (E || "_formatLimit") +
                        "' , dataPath: (dataPath || '') + " +
                        e.errorPath +
                        " , schemaPath: " +
                        e.util.toQuotedString(s) +
                        " , params: { comparison: " +
                        A +
                        ", limit:  "),
                      (i += _ ? "" + g : "" + e.util.toQuotedString(n)),
                      (i += " , exclusive: " + T + " } "),
                      !1 !== e.opts.messages &&
                        ((i += " , message: 'should be " + x + ' "'),
                        (i += _
                          ? "' + " + g + " + '"
                          : "" + e.util.escapeQuotes(n)),
                        (i += "\"' ")),
                      e.opts.verbose &&
                        ((i += " , schema:  "),
                        (i += _
                          ? "validate.schema" + o
                          : "" + e.util.toQuotedString(n)),
                        (i +=
                          "         , parentSchema: validate.schema" +
                          e.schemaPath +
                          " , data: " +
                          d +
                          " ")),
                      (i += " } "))
                    : (i += " {} ");
                var L = i;
                return (
                  (i = $.pop()),
                  !e.compositeRule && l
                    ? e.async
                      ? (i += " throw new ValidationError([" + L + "]); ")
                      : (i += " validate.errors = [" + L + "]; return false; ")
                    : (i +=
                        " var err = " +
                        L +
                        ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "),
                  (i += "}")
                );
              };
            },
            {}
          ],
          14: [
            function(e, t, i) {
              "use strict";
              t.exports = function(e, t) {
                var i,
                  r = " ",
                  a = e.level,
                  n = e.dataLevel,
                  o = e.schema[t],
                  s = e.schemaPath + e.util.getProperty(t),
                  l = e.errSchemaPath + "/" + t,
                  d = !e.opts.allErrors,
                  p = "data" + (n || ""),
                  c = e.opts.v5 && o && o.$data;
                c
                  ? ((r +=
                      " var schema" +
                      a +
                      " = " +
                      e.util.getData(o.$data, n, e.dataPathArr) +
                      "; "),
                    (i = "schema" + a))
                  : (i = o);
                var h = "maximum" == t,
                  u = h ? "exclusiveMaximum" : "exclusiveMinimum",
                  f = e.schema[u],
                  m = e.opts.v5 && f && f.$data,
                  y = h ? "<" : ">",
                  g = h ? ">" : "<";
                if (m) {
                  var v = e.util.getData(f.$data, n, e.dataPathArr),
                    b = "exclusive" + a,
                    j = "op" + a,
                    w = "' + " + j + " + '";
                  (r += " var schemaExcl" + a + " = " + v + "; "),
                    (r +=
                      " var exclusive" +
                      a +
                      "; if (typeof " +
                      (v = "schemaExcl" + a) +
                      " != 'boolean' && typeof " +
                      v +
                      " != 'undefined') { ");
                  var P = u,
                    S = S || [];
                  S.push(r),
                    (r = ""),
                    !1 !== e.createErrors
                      ? ((r +=
                          " { keyword: '" +
                          (P || "_exclusiveLimit") +
                          "' , dataPath: (dataPath || '') + " +
                          e.errorPath +
                          " , schemaPath: " +
                          e.util.toQuotedString(l) +
                          " , params: {} "),
                        !1 !== e.opts.messages &&
                          (r += " , message: '" + u + " should be boolean' "),
                        e.opts.verbose &&
                          (r +=
                            " , schema: validate.schema" +
                            s +
                            " , parentSchema: validate.schema" +
                            e.schemaPath +
                            " , data: " +
                            p +
                            " "),
                        (r += " } "))
                      : (r += " {} ");
                  var _ = r;
                  (r = S.pop()),
                    !e.compositeRule && d
                      ? e.async
                        ? (r += " throw new ValidationError([" + _ + "]); ")
                        : (r +=
                            " validate.errors = [" + _ + "]; return false; ")
                      : (r +=
                          " var err = " +
                          _ +
                          ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "),
                    (r += " } else if( "),
                    c &&
                      (r +=
                        " (" +
                        i +
                        " !== undefined && typeof " +
                        i +
                        " != 'number') || "),
                    (r +=
                      " ((exclusive" +
                      a +
                      " = " +
                      v +
                      " === true) ? " +
                      p +
                      " " +
                      g +
                      "= " +
                      i +
                      " : " +
                      p +
                      " " +
                      g +
                      " " +
                      i +
                      ") || " +
                      p +
                      " !== " +
                      p +
                      ") { var op" +
                      a +
                      " = exclusive" +
                      a +
                      " ? '" +
                      y +
                      "' : '" +
                      y +
                      "=';");
                } else {
                  var b = !0 === f,
                    w = y;
                  b || (w += "=");
                  var j = "'" + w + "'";
                  (r += " if ( "),
                    c &&
                      (r +=
                        " (" +
                        i +
                        " !== undefined && typeof " +
                        i +
                        " != 'number') || "),
                    (r += " " + p + " " + g),
                    b && (r += "="),
                    (r += " " + i + " || " + p + " !== " + p + ") {");
                }
                var P = t,
                  S = S || [];
                S.push(r),
                  (r = ""),
                  !1 !== e.createErrors
                    ? ((r +=
                        " { keyword: '" +
                        (P || "_limit") +
                        "' , dataPath: (dataPath || '') + " +
                        e.errorPath +
                        " , schemaPath: " +
                        e.util.toQuotedString(l) +
                        " , params: { comparison: " +
                        j +
                        ", limit: " +
                        i +
                        ", exclusive: " +
                        b +
                        " } "),
                      !1 !== e.opts.messages &&
                        ((r += " , message: 'should be " + w + " "),
                        (r += c ? "' + " + i : o + "'")),
                      e.opts.verbose &&
                        ((r += " , schema:  "),
                        (r += c ? "validate.schema" + s : "" + o),
                        (r +=
                          "         , parentSchema: validate.schema" +
                          e.schemaPath +
                          " , data: " +
                          p +
                          " ")),
                      (r += " } "))
                    : (r += " {} ");
                var _ = r;
                return (
                  (r = S.pop()),
                  !e.compositeRule && d
                    ? e.async
                      ? (r += " throw new ValidationError([" + _ + "]); ")
                      : (r += " validate.errors = [" + _ + "]; return false; ")
                    : (r +=
                        " var err = " +
                        _ +
                        ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "),
                  (r += " } "),
                  d && (r += " else { "),
                  r
                );
              };
            },
            {}
          ],
          15: [
            function(e, t, i) {
              "use strict";
              t.exports = function(e, t) {
                var i,
                  r = " ",
                  a = e.level,
                  n = e.dataLevel,
                  o = e.schema[t],
                  s = e.schemaPath + e.util.getProperty(t),
                  l = e.errSchemaPath + "/" + t,
                  d = !e.opts.allErrors,
                  p = "data" + (n || ""),
                  c = e.opts.v5 && o && o.$data;
                c
                  ? ((r +=
                      " var schema" +
                      a +
                      " = " +
                      e.util.getData(o.$data, n, e.dataPathArr) +
                      "; "),
                    (i = "schema" + a))
                  : (i = o);
                var h = "maxItems" == t ? ">" : "<";
                (r += "if ( "),
                  c &&
                    (r +=
                      " (" +
                      i +
                      " !== undefined && typeof " +
                      i +
                      " != 'number') || "),
                  (r += " " + p + ".length " + h + " " + i + ") { ");
                var u = t,
                  f = f || [];
                f.push(r),
                  (r = ""),
                  !1 !== e.createErrors
                    ? ((r +=
                        " { keyword: '" +
                        (u || "_limitItems") +
                        "' , dataPath: (dataPath || '') + " +
                        e.errorPath +
                        " , schemaPath: " +
                        e.util.toQuotedString(l) +
                        " , params: { limit: " +
                        i +
                        " } "),
                      !1 !== e.opts.messages &&
                        ((r += " , message: 'should NOT have "),
                        (r += "maxItems" == t ? "more" : "less"),
                        (r += " than "),
                        (r += c ? "' + " + i + " + '" : "" + o),
                        (r += " items' ")),
                      e.opts.verbose &&
                        ((r += " , schema:  "),
                        (r += c ? "validate.schema" + s : "" + o),
                        (r +=
                          "         , parentSchema: validate.schema" +
                          e.schemaPath +
                          " , data: " +
                          p +
                          " ")),
                      (r += " } "))
                    : (r += " {} ");
                var m = r;
                return (
                  (r = f.pop()),
                  !e.compositeRule && d
                    ? e.async
                      ? (r += " throw new ValidationError([" + m + "]); ")
                      : (r += " validate.errors = [" + m + "]; return false; ")
                    : (r +=
                        " var err = " +
                        m +
                        ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "),
                  (r += "} "),
                  d && (r += " else { "),
                  r
                );
              };
            },
            {}
          ],
          16: [
            function(e, t, i) {
              "use strict";
              t.exports = function(e, t) {
                var i,
                  r = " ",
                  a = e.level,
                  n = e.dataLevel,
                  o = e.schema[t],
                  s = e.schemaPath + e.util.getProperty(t),
                  l = e.errSchemaPath + "/" + t,
                  d = !e.opts.allErrors,
                  p = "data" + (n || ""),
                  c = e.opts.v5 && o && o.$data;
                c
                  ? ((r +=
                      " var schema" +
                      a +
                      " = " +
                      e.util.getData(o.$data, n, e.dataPathArr) +
                      "; "),
                    (i = "schema" + a))
                  : (i = o);
                var h = "maxLength" == t ? ">" : "<";
                (r += "if ( "),
                  c &&
                    (r +=
                      " (" +
                      i +
                      " !== undefined && typeof " +
                      i +
                      " != 'number') || "),
                  !1 === e.opts.unicode
                    ? (r += " " + p + ".length ")
                    : (r += " ucs2length(" + p + ") "),
                  (r += " " + h + " " + i + ") { ");
                var u = t,
                  f = f || [];
                f.push(r),
                  (r = ""),
                  !1 !== e.createErrors
                    ? ((r +=
                        " { keyword: '" +
                        (u || "_limitLength") +
                        "' , dataPath: (dataPath || '') + " +
                        e.errorPath +
                        " , schemaPath: " +
                        e.util.toQuotedString(l) +
                        " , params: { limit: " +
                        i +
                        " } "),
                      !1 !== e.opts.messages &&
                        ((r += " , message: 'should NOT be "),
                        (r += "maxLength" == t ? "longer" : "shorter"),
                        (r += " than "),
                        (r += c ? "' + " + i + " + '" : "" + o),
                        (r += " characters' ")),
                      e.opts.verbose &&
                        ((r += " , schema:  "),
                        (r += c ? "validate.schema" + s : "" + o),
                        (r +=
                          "         , parentSchema: validate.schema" +
                          e.schemaPath +
                          " , data: " +
                          p +
                          " ")),
                      (r += " } "))
                    : (r += " {} ");
                var m = r;
                return (
                  (r = f.pop()),
                  !e.compositeRule && d
                    ? e.async
                      ? (r += " throw new ValidationError([" + m + "]); ")
                      : (r += " validate.errors = [" + m + "]; return false; ")
                    : (r +=
                        " var err = " +
                        m +
                        ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "),
                  (r += "} "),
                  d && (r += " else { "),
                  r
                );
              };
            },
            {}
          ],
          17: [
            function(e, t, i) {
              "use strict";
              t.exports = function(e, t) {
                var i,
                  r = " ",
                  a = e.level,
                  n = e.dataLevel,
                  o = e.schema[t],
                  s = e.schemaPath + e.util.getProperty(t),
                  l = e.errSchemaPath + "/" + t,
                  d = !e.opts.allErrors,
                  p = "data" + (n || ""),
                  c = e.opts.v5 && o && o.$data;
                c
                  ? ((r +=
                      " var schema" +
                      a +
                      " = " +
                      e.util.getData(o.$data, n, e.dataPathArr) +
                      "; "),
                    (i = "schema" + a))
                  : (i = o);
                var h = "maxProperties" == t ? ">" : "<";
                (r += "if ( "),
                  c &&
                    (r +=
                      " (" +
                      i +
                      " !== undefined && typeof " +
                      i +
                      " != 'number') || "),
                  (r +=
                    " Object.keys(" + p + ").length " + h + " " + i + ") { ");
                var u = t,
                  f = f || [];
                f.push(r),
                  (r = ""),
                  !1 !== e.createErrors
                    ? ((r +=
                        " { keyword: '" +
                        (u || "_limitProperties") +
                        "' , dataPath: (dataPath || '') + " +
                        e.errorPath +
                        " , schemaPath: " +
                        e.util.toQuotedString(l) +
                        " , params: { limit: " +
                        i +
                        " } "),
                      !1 !== e.opts.messages &&
                        ((r += " , message: 'should NOT have "),
                        (r += "maxProperties" == t ? "more" : "less"),
                        (r += " than "),
                        (r += c ? "' + " + i + " + '" : "" + o),
                        (r += " properties' ")),
                      e.opts.verbose &&
                        ((r += " , schema:  "),
                        (r += c ? "validate.schema" + s : "" + o),
                        (r +=
                          "         , parentSchema: validate.schema" +
                          e.schemaPath +
                          " , data: " +
                          p +
                          " ")),
                      (r += " } "))
                    : (r += " {} ");
                var m = r;
                return (
                  (r = f.pop()),
                  !e.compositeRule && d
                    ? e.async
                      ? (r += " throw new ValidationError([" + m + "]); ")
                      : (r += " validate.errors = [" + m + "]; return false; ")
                    : (r +=
                        " var err = " +
                        m +
                        ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "),
                  (r += "} "),
                  d && (r += " else { "),
                  r
                );
              };
            },
            {}
          ],
          18: [
            function(e, t, i) {
              "use strict";
              t.exports = function(e, t) {
                var i = " ",
                  r = e.schema[t],
                  a = e.schemaPath + e.util.getProperty(t),
                  n = e.errSchemaPath + "/" + t,
                  o = !e.opts.allErrors,
                  s = e.util.copy(e),
                  l = "";
                s.level++;
                var d = "valid" + s.level,
                  p = s.baseId,
                  c = !0,
                  h = r;
                if (h)
                  for (var u, f = -1, m = h.length - 1; f < m; )
                    (u = h[(f += 1)]),
                      e.util.schemaHasRules(u, e.RULES.all) &&
                        ((c = !1),
                        (s.schema = u),
                        (s.schemaPath = a + "[" + f + "]"),
                        (s.errSchemaPath = n + "/" + f),
                        (i += "  " + e.validate(s) + " "),
                        (s.baseId = p),
                        o && ((i += " if (" + d + ") { "), (l += "}")));
                return (
                  o && (i += c ? " if (true) { " : " " + l.slice(0, -1) + " "),
                  (i = e.util.cleanUpCode(i))
                );
              };
            },
            {}
          ],
          19: [
            function(e, t, i) {
              "use strict";
              t.exports = function(e, t) {
                var i = " ",
                  r = e.level,
                  a = e.dataLevel,
                  n = e.schema[t],
                  o = e.schemaPath + e.util.getProperty(t),
                  s = e.errSchemaPath + "/" + t,
                  l = !e.opts.allErrors,
                  d = "data" + (a || ""),
                  p = "valid" + r,
                  c = "errs__" + r,
                  h = e.util.copy(e),
                  u = "";
                h.level++;
                var f = "valid" + h.level;
                if (
                  n.every(function(t) {
                    return e.util.schemaHasRules(t, e.RULES.all);
                  })
                ) {
                  var m = h.baseId;
                  i += " var " + c + " = errors; var " + p + " = false;  ";
                  var y = e.compositeRule;
                  e.compositeRule = h.compositeRule = !0;
                  var g = n;
                  if (g)
                    for (var v, b = -1, j = g.length - 1; b < j; )
                      (v = g[(b += 1)]),
                        (h.schema = v),
                        (h.schemaPath = o + "[" + b + "]"),
                        (h.errSchemaPath = s + "/" + b),
                        (i += "  " + e.validate(h) + " "),
                        (h.baseId = m),
                        (i +=
                          " " +
                          p +
                          " = " +
                          p +
                          " || " +
                          f +
                          "; if (!" +
                          p +
                          ") { "),
                        (u += "}");
                  (e.compositeRule = h.compositeRule = y),
                    (i += " " + u + " if (!" + p + ") {  var err =   "),
                    !1 !== e.createErrors
                      ? ((i +=
                          " { keyword: 'anyOf' , dataPath: (dataPath || '') + " +
                          e.errorPath +
                          " , schemaPath: " +
                          e.util.toQuotedString(s) +
                          " , params: {} "),
                        !1 !== e.opts.messages &&
                          (i +=
                            " , message: 'should match some schema in anyOf' "),
                        e.opts.verbose &&
                          (i +=
                            " , schema: validate.schema" +
                            o +
                            " , parentSchema: validate.schema" +
                            e.schemaPath +
                            " , data: " +
                            d +
                            " "),
                        (i += " } "))
                      : (i += " {} "),
                    (i +=
                      ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else {  errors = " +
                      c +
                      "; if (vErrors !== null) { if (" +
                      c +
                      ") vErrors.length = " +
                      c +
                      "; else vErrors = null; } "),
                    e.opts.allErrors && (i += " } "),
                    (i = e.util.cleanUpCode(i));
                } else l && (i += " if (true) { ");
                return i;
              };
            },
            {}
          ],
          20: [
            function(e, t, i) {
              "use strict";
              t.exports = function(e, t) {
                var i = " ",
                  r = e.level,
                  a = e.dataLevel,
                  n = e.schema[t],
                  o = e.schemaPath + e.util.getProperty(t),
                  s = e.errSchemaPath + "/" + t,
                  l = !e.opts.allErrors,
                  d = "data" + (a || ""),
                  p = "valid" + r,
                  c = e.opts.v5 && n && n.$data;
                c &&
                  (i +=
                    " var schema" +
                    r +
                    " = " +
                    e.util.getData(n.$data, a, e.dataPathArr) +
                    "; "),
                  c ||
                    (i += " var schema" + r + " = validate.schema" + o + ";"),
                  (i +=
                    "var " +
                    p +
                    " = equal(" +
                    d +
                    ", schema" +
                    r +
                    "); if (!" +
                    p +
                    ") {   ");
                var h = h || [];
                h.push(i),
                  (i = ""),
                  !1 !== e.createErrors
                    ? ((i +=
                        " { keyword: 'constant' , dataPath: (dataPath || '') + " +
                        e.errorPath +
                        " , schemaPath: " +
                        e.util.toQuotedString(s) +
                        " , params: {} "),
                      !1 !== e.opts.messages &&
                        (i += " , message: 'should be equal to constant' "),
                      e.opts.verbose &&
                        (i +=
                          " , schema: validate.schema" +
                          o +
                          " , parentSchema: validate.schema" +
                          e.schemaPath +
                          " , data: " +
                          d +
                          " "),
                      (i += " } "))
                    : (i += " {} ");
                var u = i;
                return (
                  (i = h.pop()),
                  !e.compositeRule && l
                    ? e.async
                      ? (i += " throw new ValidationError([" + u + "]); ")
                      : (i += " validate.errors = [" + u + "]; return false; ")
                    : (i +=
                        " var err = " +
                        u +
                        ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "),
                  (i += " }")
                );
              };
            },
            {}
          ],
          21: [
            function(e, t, i) {
              "use strict";
              t.exports = function(e, t) {
                var i,
                  r,
                  a = " ",
                  n = e.level,
                  o = e.dataLevel,
                  s = e.schema[t],
                  l = e.schemaPath + e.util.getProperty(t),
                  d = e.errSchemaPath + "/" + t,
                  p = !e.opts.allErrors,
                  c = "data" + (o || ""),
                  h = "valid" + n,
                  u = "errs__" + n,
                  f = e.opts.v5 && s && s.$data;
                f
                  ? ((a +=
                      " var schema" +
                      n +
                      " = " +
                      e.util.getData(s.$data, o, e.dataPathArr) +
                      "; "),
                    (r = "schema" + n))
                  : (r = s);
                var m,
                  y,
                  g,
                  v,
                  b,
                  j = this,
                  w = "definition" + n,
                  P = j.definition;
                if (f && P.$data) {
                  b = "keywordValidate" + n;
                  var S = P.validateSchema;
                  a +=
                    " var " +
                    w +
                    " = RULES.custom['" +
                    t +
                    "'].definition; var " +
                    b +
                    " = " +
                    w +
                    ".validate;";
                } else
                  (v = e.useCustomRule(j, s, e.schema, e)),
                    (r = "validate.schema" + l),
                    (b = v.code),
                    (m = P.compile),
                    (y = P.inline),
                    (g = P.macro);
                var _ = b + ".errors",
                  I = "i" + n,
                  T = "ruleErr" + n,
                  A = P.async;
                if (A && !e.async)
                  throw new Error("async keyword in sync schema");
                if (
                  (y || g || (a += _ + " = null;"),
                  (a += "var " + u + " = errors;var " + h + ";"),
                  S &&
                    (a +=
                      " " +
                      h +
                      " = " +
                      w +
                      ".validateSchema(" +
                      r +
                      "); if (" +
                      h +
                      ") {"),
                  y)
                )
                  P.statements
                    ? (a += " " + v.validate + " ")
                    : (a += " " + h + " = " + v.validate + "; ");
                else if (g) {
                  var x = e.util.copy(e);
                  x.level++;
                  var E = "valid" + x.level;
                  (x.schema = v.validate), (x.schemaPath = "");
                  var $ = e.compositeRule;
                  e.compositeRule = x.compositeRule = !0;
                  var L = e.validate(x).replace(/validate\.schema/g, b);
                  (e.compositeRule = x.compositeRule = $), (a += " " + L);
                } else {
                  var R = R || [];
                  R.push(a),
                    (a = ""),
                    (a += "  " + b + ".call( "),
                    e.opts.passContext ? (a += "this") : (a += "self"),
                    m || !1 === P.schema
                      ? (a += " , " + c + " ")
                      : (a +=
                          " , " +
                          r +
                          " , " +
                          c +
                          " , validate.schema" +
                          e.schemaPath +
                          " "),
                    (a += " , (dataPath || '')"),
                    '""' != e.errorPath && (a += " + " + e.errorPath);
                  var D = o ? "data" + (o - 1 || "") : "parentData",
                    O = o ? e.dataPathArr[o] : "parentDataProperty",
                    q = (a += " , " + D + " , " + O + " , rootData )  ");
                  (a = R.pop()),
                    !1 === P.errors
                      ? ((a += " " + h + " = "),
                        A && (a += "" + e.yieldAwait),
                        (a += q + "; "))
                      : (a += A
                          ? " var " +
                            (_ = "customErrors" + n) +
                            " = null; try { " +
                            h +
                            " = " +
                            e.yieldAwait +
                            q +
                            "; } catch (e) { " +
                            h +
                            " = false; if (e instanceof ValidationError) " +
                            _ +
                            " = e.errors; else throw e; } "
                          : " " + _ + " = null; " + h + " = " + q + "; ");
                }
                if (
                  (P.modifying && (a += " " + c + " = " + D + "[" + O + "];"),
                  S && (a += " }"),
                  P.valid)
                )
                  p && (a += " if (true) { ");
                else {
                  (a += " if ( "),
                    void 0 === P.valid
                      ? ((a += " !"), (a += g ? "" + E : "" + h))
                      : (a += " " + !P.valid + " "),
                    (a += ") { "),
                    (i = j.keyword);
                  var R = R || [];
                  R.push(a), (a = "");
                  var R = R || [];
                  R.push(a),
                    (a = ""),
                    !1 !== e.createErrors
                      ? ((a +=
                          " { keyword: '" +
                          (i || "custom") +
                          "' , dataPath: (dataPath || '') + " +
                          e.errorPath +
                          " , schemaPath: " +
                          e.util.toQuotedString(d) +
                          " , params: { keyword: '" +
                          j.keyword +
                          "' } "),
                        !1 !== e.opts.messages &&
                          (a +=
                            " , message: 'should pass \"" +
                            j.keyword +
                            "\" keyword validation' "),
                        e.opts.verbose &&
                          (a +=
                            " , schema: validate.schema" +
                            l +
                            " , parentSchema: validate.schema" +
                            e.schemaPath +
                            " , data: " +
                            c +
                            " "),
                        (a += " } "))
                      : (a += " {} ");
                  var k = a;
                  (a = R.pop()),
                    !e.compositeRule && p
                      ? e.async
                        ? (a += " throw new ValidationError([" + k + "]); ")
                        : (a +=
                            " validate.errors = [" + k + "]; return false; ")
                      : (a +=
                          " var err = " +
                          k +
                          ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ");
                  var M = a;
                  (a = R.pop()),
                    y
                      ? P.errors
                        ? "full" != P.errors &&
                          ((a +=
                            "  for (var " +
                            I +
                            "=" +
                            u +
                            "; " +
                            I +
                            "<errors; " +
                            I +
                            "++) { var " +
                            T +
                            " = vErrors[" +
                            I +
                            "]; if (" +
                            T +
                            ".dataPath === undefined) " +
                            T +
                            ".dataPath = (dataPath || '') + " +
                            e.errorPath +
                            "; if (" +
                            T +
                            ".schemaPath === undefined) { " +
                            T +
                            '.schemaPath = "' +
                            d +
                            '"; } '),
                          e.opts.verbose &&
                            (a +=
                              " " +
                              T +
                              ".schema = " +
                              r +
                              "; " +
                              T +
                              ".data = " +
                              c +
                              "; "),
                          (a += " } "))
                        : !1 === P.errors
                          ? (a += " " + M + " ")
                          : ((a +=
                              " if (" +
                              u +
                              " == errors) { " +
                              M +
                              " } else {  for (var " +
                              I +
                              "=" +
                              u +
                              "; " +
                              I +
                              "<errors; " +
                              I +
                              "++) { var " +
                              T +
                              " = vErrors[" +
                              I +
                              "]; if (" +
                              T +
                              ".dataPath === undefined) " +
                              T +
                              ".dataPath = (dataPath || '') + " +
                              e.errorPath +
                              "; if (" +
                              T +
                              ".schemaPath === undefined) { " +
                              T +
                              '.schemaPath = "' +
                              d +
                              '"; } '),
                            e.opts.verbose &&
                              (a +=
                                " " +
                                T +
                                ".schema = " +
                                r +
                                "; " +
                                T +
                                ".data = " +
                                c +
                                "; "),
                            (a += " } } "))
                      : g
                        ? ((a += "   var err =   "),
                          !1 !== e.createErrors
                            ? ((a +=
                                " { keyword: '" +
                                (i || "custom") +
                                "' , dataPath: (dataPath || '') + " +
                                e.errorPath +
                                " , schemaPath: " +
                                e.util.toQuotedString(d) +
                                " , params: { keyword: '" +
                                j.keyword +
                                "' } "),
                              !1 !== e.opts.messages &&
                                (a +=
                                  " , message: 'should pass \"" +
                                  j.keyword +
                                  "\" keyword validation' "),
                              e.opts.verbose &&
                                (a +=
                                  " , schema: validate.schema" +
                                  l +
                                  " , parentSchema: validate.schema" +
                                  e.schemaPath +
                                  " , data: " +
                                  c +
                                  " "),
                              (a += " } "))
                            : (a += " {} "),
                          (a +=
                            ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "),
                          !e.compositeRule &&
                            p &&
                            (e.async
                              ? (a += " throw new ValidationError(vErrors); ")
                              : (a +=
                                  " validate.errors = vErrors; return false; ")))
                        : !1 === P.errors
                          ? (a += " " + M + " ")
                          : ((a +=
                              " if (Array.isArray(" +
                              _ +
                              ")) { if (vErrors === null) vErrors = " +
                              _ +
                              "; else vErrors = vErrors.concat(" +
                              _ +
                              "); errors = vErrors.length;  for (var " +
                              I +
                              "=" +
                              u +
                              "; " +
                              I +
                              "<errors; " +
                              I +
                              "++) { var " +
                              T +
                              " = vErrors[" +
                              I +
                              "]; if (" +
                              T +
                              ".dataPath === undefined) " +
                              T +
                              ".dataPath = (dataPath || '') + " +
                              e.errorPath +
                              ";  " +
                              T +
                              '.schemaPath = "' +
                              d +
                              '";  '),
                            e.opts.verbose &&
                              (a +=
                                " " +
                                T +
                                ".schema = " +
                                r +
                                "; " +
                                T +
                                ".data = " +
                                c +
                                "; "),
                            (a += " } } else { " + M + " } ")),
                    (a += " } "),
                    p && (a += " else { ");
                }
                return a;
              };
            },
            {}
          ],
          22: [
            function(e, t, i) {
              "use strict";
              t.exports = function(e, t) {
                var i = " ",
                  r = e.level,
                  a = e.dataLevel,
                  n = e.schema[t],
                  o = e.schemaPath + e.util.getProperty(t),
                  s = e.errSchemaPath + "/" + t,
                  l = !e.opts.allErrors,
                  d = "data" + (a || ""),
                  p = "errs__" + r,
                  c = e.util.copy(e),
                  h = "";
                c.level++;
                var u = "valid" + c.level,
                  f = {},
                  m = {};
                for (b in n) {
                  var y = n[b],
                    g = Array.isArray(y) ? m : f;
                  g[b] = y;
                }
                i += "var " + p + " = errors;";
                var v = e.errorPath;
                for (var b in ((i += "var missing" + r + ";"), m)) {
                  if (
                    ((g = m[b]),
                    (i +=
                      " if (" + d + e.util.getProperty(b) + " !== undefined "),
                    l)
                  ) {
                    i += " && ( ";
                    var j = g;
                    if (j)
                      for (var w, P = -1, S = j.length - 1; P < S; ) {
                        (w = j[(P += 1)]), P && (i += " || ");
                        var _ = e.util.getProperty(w);
                        i +=
                          " ( " +
                          d +
                          _ +
                          " === undefined && (missing" +
                          r +
                          " = " +
                          e.util.toQuotedString(e.opts.jsonPointers ? w : _) +
                          ") ) ";
                      }
                    i += ")) {  ";
                    var I = "missing" + r,
                      T = "' + " + I + " + '";
                    e.opts._errorDataPathProperty &&
                      (e.errorPath = e.opts.jsonPointers
                        ? e.util.getPathExpr(v, I, !0)
                        : v + " + " + I);
                    var A = A || [];
                    A.push(i),
                      (i = ""),
                      !1 !== e.createErrors
                        ? ((i +=
                            " { keyword: 'dependencies' , dataPath: (dataPath || '') + " +
                            e.errorPath +
                            " , schemaPath: " +
                            e.util.toQuotedString(s) +
                            " , params: { property: '" +
                            e.util.escapeQuotes(b) +
                            "', missingProperty: '" +
                            T +
                            "', depsCount: " +
                            g.length +
                            ", deps: '" +
                            e.util.escapeQuotes(
                              1 == g.length ? g[0] : g.join(", ")
                            ) +
                            "' } "),
                          !1 !== e.opts.messages &&
                            ((i += " , message: 'should have "),
                            1 == g.length
                              ? (i += "property " + e.util.escapeQuotes(g[0]))
                              : (i +=
                                  "properties " +
                                  e.util.escapeQuotes(g.join(", "))),
                            (i +=
                              " when property " +
                              e.util.escapeQuotes(b) +
                              " is present' ")),
                          e.opts.verbose &&
                            (i +=
                              " , schema: validate.schema" +
                              o +
                              " , parentSchema: validate.schema" +
                              e.schemaPath +
                              " , data: " +
                              d +
                              " "),
                          (i += " } "))
                        : (i += " {} ");
                    var x = i;
                    (i = A.pop()),
                      !e.compositeRule && l
                        ? e.async
                          ? (i += " throw new ValidationError([" + x + "]); ")
                          : (i +=
                              " validate.errors = [" + x + "]; return false; ")
                        : (i +=
                            " var err = " +
                            x +
                            ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ");
                  } else {
                    i += " ) { ";
                    var E = g;
                    if (E)
                      for (var $, L = -1, R = E.length - 1; L < R; ) {
                        $ = E[(L += 1)];
                        var _ = e.util.getProperty($),
                          T = e.util.escapeQuotes($);
                        e.opts._errorDataPathProperty &&
                          (e.errorPath = e.util.getPath(
                            v,
                            $,
                            e.opts.jsonPointers
                          )),
                          (i +=
                            " if (" +
                            d +
                            _ +
                            " === undefined) {  var err =   "),
                          !1 !== e.createErrors
                            ? ((i +=
                                " { keyword: 'dependencies' , dataPath: (dataPath || '') + " +
                                e.errorPath +
                                " , schemaPath: " +
                                e.util.toQuotedString(s) +
                                " , params: { property: '" +
                                e.util.escapeQuotes(b) +
                                "', missingProperty: '" +
                                T +
                                "', depsCount: " +
                                g.length +
                                ", deps: '" +
                                e.util.escapeQuotes(
                                  1 == g.length ? g[0] : g.join(", ")
                                ) +
                                "' } "),
                              !1 !== e.opts.messages &&
                                ((i += " , message: 'should have "),
                                1 == g.length
                                  ? (i +=
                                      "property " + e.util.escapeQuotes(g[0]))
                                  : (i +=
                                      "properties " +
                                      e.util.escapeQuotes(g.join(", "))),
                                (i +=
                                  " when property " +
                                  e.util.escapeQuotes(b) +
                                  " is present' ")),
                              e.opts.verbose &&
                                (i +=
                                  " , schema: validate.schema" +
                                  o +
                                  " , parentSchema: validate.schema" +
                                  e.schemaPath +
                                  " , data: " +
                                  d +
                                  " "),
                              (i += " } "))
                            : (i += " {} "),
                          (i +=
                            ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ");
                      }
                  }
                  (i += " }   "), l && ((h += "}"), (i += " else { "));
                }
                e.errorPath = v;
                var D = c.baseId;
                for (var b in f) {
                  var y = f[b];
                  e.util.schemaHasRules(y, e.RULES.all) &&
                    ((i +=
                      " " +
                      u +
                      " = true; if (" +
                      d +
                      e.util.getProperty(b) +
                      " !== undefined) { "),
                    (c.schema = y),
                    (c.schemaPath = o + e.util.getProperty(b)),
                    (c.errSchemaPath = s + "/" + e.util.escapeFragment(b)),
                    (i += "  " + e.validate(c) + " "),
                    (c.baseId = D),
                    (i += " }  "),
                    l && ((i += " if (" + u + ") { "), (h += "}")));
                }
                return (
                  l && (i += "   " + h + " if (" + p + " == errors) {"),
                  (i = e.util.cleanUpCode(i))
                );
              };
            },
            {}
          ],
          23: [
            function(e, t, i) {
              "use strict";
              t.exports = function(e, t) {
                var i = " ",
                  r = e.level,
                  a = e.dataLevel,
                  n = e.schema[t],
                  o = e.schemaPath + e.util.getProperty(t),
                  s = e.errSchemaPath + "/" + t,
                  l = !e.opts.allErrors,
                  d = "data" + (a || ""),
                  p = "valid" + r,
                  c = e.opts.v5 && n && n.$data;
                c &&
                  (i +=
                    " var schema" +
                    r +
                    " = " +
                    e.util.getData(n.$data, a, e.dataPathArr) +
                    "; ");
                var h = "i" + r,
                  u = "schema" + r;
                c || (i += " var " + u + " = validate.schema" + o + ";"),
                  (i += "var " + p + ";"),
                  c &&
                    (i +=
                      " if (schema" +
                      r +
                      " === undefined) " +
                      p +
                      " = true; else if (!Array.isArray(schema" +
                      r +
                      ")) " +
                      p +
                      " = false; else {"),
                  (i +=
                    p +
                    " = false;for (var " +
                    h +
                    "=0; " +
                    h +
                    "<" +
                    u +
                    ".length; " +
                    h +
                    "++) if (equal(" +
                    d +
                    ", " +
                    u +
                    "[" +
                    h +
                    "])) { " +
                    p +
                    " = true; break; }"),
                  c && (i += "  }  "),
                  (i += " if (!" + p + ") {   ");
                var f = f || [];
                f.push(i),
                  (i = ""),
                  !1 !== e.createErrors
                    ? ((i +=
                        " { keyword: 'enum' , dataPath: (dataPath || '') + " +
                        e.errorPath +
                        " , schemaPath: " +
                        e.util.toQuotedString(s) +
                        " , params: { allowedValues: schema" +
                        r +
                        " } "),
                      !1 !== e.opts.messages &&
                        (i +=
                          " , message: 'should be equal to one of the allowed values' "),
                      e.opts.verbose &&
                        (i +=
                          " , schema: validate.schema" +
                          o +
                          " , parentSchema: validate.schema" +
                          e.schemaPath +
                          " , data: " +
                          d +
                          " "),
                      (i += " } "))
                    : (i += " {} ");
                var m = i;
                return (
                  (i = f.pop()),
                  !e.compositeRule && l
                    ? e.async
                      ? (i += " throw new ValidationError([" + m + "]); ")
                      : (i += " validate.errors = [" + m + "]; return false; ")
                    : (i +=
                        " var err = " +
                        m +
                        ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "),
                  (i += " }"),
                  l && (i += " else { "),
                  i
                );
              };
            },
            {}
          ],
          24: [
            function(e, t, i) {
              "use strict";
              t.exports = function(e, t) {
                var i = " ",
                  r = e.level,
                  a = e.dataLevel,
                  n = e.schema[t],
                  o = e.schemaPath + e.util.getProperty(t),
                  s = e.errSchemaPath + "/" + t,
                  l = !e.opts.allErrors,
                  d = "data" + (a || "");
                if (!1 === e.opts.format) return l && (i += " if (true) { "), i;
                var p,
                  c = e.opts.v5 && n && n.$data;
                c
                  ? ((i +=
                      " var schema" +
                      r +
                      " = " +
                      e.util.getData(n.$data, a, e.dataPathArr) +
                      "; "),
                    (p = "schema" + r))
                  : (p = n);
                var h = e.opts.unknownFormats,
                  u = Array.isArray(h);
                if (c) {
                  var f = "format" + r;
                  (i +=
                    " var " +
                    f +
                    " = formats[" +
                    p +
                    "]; var isObject" +
                    r +
                    " = typeof " +
                    f +
                    " == 'object' && !(" +
                    f +
                    " instanceof RegExp) && " +
                    f +
                    ".validate; if (isObject" +
                    r +
                    ") { "),
                    e.async && (i += " var async" + r + " = " + f + ".async; "),
                    (i += " " + f + " = " + f + ".validate; } if (  "),
                    c &&
                      (i +=
                        " (" +
                        p +
                        " !== undefined && typeof " +
                        p +
                        " != 'string') || "),
                    (i += " ("),
                    (!0 === h || u) &&
                      ((i += " (" + p + " && !" + f + " "),
                      u &&
                        (i +=
                          " && self._opts.unknownFormats.indexOf(" +
                          p +
                          ") == -1 "),
                      (i += ") || ")),
                    (i += " (" + f + " && !(typeof " + f + " == 'function' ? "),
                    e.async
                      ? (i +=
                          " (async" +
                          r +
                          " ? " +
                          e.yieldAwait +
                          " " +
                          f +
                          "(" +
                          d +
                          ") : " +
                          f +
                          "(" +
                          d +
                          ")) ")
                      : (i += " " + f + "(" + d + ") "),
                    (i += " : " + f + ".test(" + d + "))))) {");
                } else {
                  var f = e.formats[n];
                  if (!f) {
                    if (!0 === h || (u && -1 == h.indexOf(n)))
                      throw new Error(
                        'unknown format "' +
                          n +
                          '" is used in schema at path "' +
                          e.errSchemaPath +
                          '"'
                      );
                    return (
                      u ||
                        (console.warn(
                          'unknown format "' +
                            n +
                            '" ignored in schema at path "' +
                            e.errSchemaPath +
                            '"'
                        ),
                        "ignore" !== h &&
                          console.warn(
                            "In the next major version it will throw exception. See option unknownFormats for more information"
                          )),
                      l && (i += " if (true) { "),
                      i
                    );
                  }
                  var m =
                    "object" == typeof f &&
                    !(f instanceof RegExp) &&
                    f.validate;
                  if (m) {
                    var y = !0 === f.async;
                    f = f.validate;
                  }
                  if (y) {
                    if (!e.async)
                      throw new Error("async format in sync schema");
                    var g = "formats" + e.util.getProperty(n) + ".validate";
                    i +=
                      " if (!(" + e.yieldAwait + " " + g + "(" + d + "))) { ";
                  } else {
                    i += " if (! ";
                    var g = "formats" + e.util.getProperty(n);
                    m && (g += ".validate"),
                      (i +=
                        "function" == typeof f
                          ? " " + g + "(" + d + ") "
                          : " " + g + ".test(" + d + ") "),
                      (i += ") { ");
                  }
                }
                var v = v || [];
                v.push(i),
                  (i = ""),
                  !1 !== e.createErrors
                    ? ((i +=
                        " { keyword: 'format' , dataPath: (dataPath || '') + " +
                        e.errorPath +
                        " , schemaPath: " +
                        e.util.toQuotedString(s) +
                        " , params: { format:  "),
                      (i += c ? "" + p : "" + e.util.toQuotedString(n)),
                      (i += "  } "),
                      !1 !== e.opts.messages &&
                        ((i += " , message: 'should match format \""),
                        (i += c
                          ? "' + " + p + " + '"
                          : "" + e.util.escapeQuotes(n)),
                        (i += "\"' ")),
                      e.opts.verbose &&
                        ((i += " , schema:  "),
                        (i += c
                          ? "validate.schema" + o
                          : "" + e.util.toQuotedString(n)),
                        (i +=
                          "         , parentSchema: validate.schema" +
                          e.schemaPath +
                          " , data: " +
                          d +
                          " ")),
                      (i += " } "))
                    : (i += " {} ");
                var b = i;
                return (
                  (i = v.pop()),
                  !e.compositeRule && l
                    ? e.async
                      ? (i += " throw new ValidationError([" + b + "]); ")
                      : (i += " validate.errors = [" + b + "]; return false; ")
                    : (i +=
                        " var err = " +
                        b +
                        ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "),
                  (i += " } "),
                  l && (i += " else { "),
                  i
                );
              };
            },
            {}
          ],
          25: [
            function(e, t, i) {
              "use strict";
              t.exports = function(e, t) {
                var i = " ",
                  r = e.level,
                  a = e.dataLevel,
                  n = e.schema[t],
                  o = e.schemaPath + e.util.getProperty(t),
                  s = e.errSchemaPath + "/" + t,
                  l = !e.opts.allErrors,
                  d = "data" + (a || ""),
                  p = "valid" + r,
                  c = "errs__" + r,
                  h = e.util.copy(e),
                  u = "";
                h.level++;
                var f = "valid" + h.level,
                  m = "i" + r,
                  y = (h.dataLevel = e.dataLevel + 1),
                  g = "data" + y,
                  v = e.baseId;
                if (
                  ((i += "var " + c + " = errors;var " + p + ";"),
                  Array.isArray(n))
                ) {
                  var b = e.schema.additionalItems;
                  if (!1 === b) {
                    i += " " + p + " = " + d + ".length <= " + n.length + "; ";
                    var j = s;
                    (s = e.errSchemaPath + "/additionalItems"),
                      (i += "  if (!" + p + ") {   ");
                    var w = w || [];
                    w.push(i),
                      (i = ""),
                      !1 !== e.createErrors
                        ? ((i +=
                            " { keyword: 'additionalItems' , dataPath: (dataPath || '') + " +
                            e.errorPath +
                            " , schemaPath: " +
                            e.util.toQuotedString(s) +
                            " , params: { limit: " +
                            n.length +
                            " } "),
                          !1 !== e.opts.messages &&
                            (i +=
                              " , message: 'should NOT have more than " +
                              n.length +
                              " items' "),
                          e.opts.verbose &&
                            (i +=
                              " , schema: false , parentSchema: validate.schema" +
                              e.schemaPath +
                              " , data: " +
                              d +
                              " "),
                          (i += " } "))
                        : (i += " {} ");
                    var P = i;
                    (i = w.pop()),
                      !e.compositeRule && l
                        ? e.async
                          ? (i += " throw new ValidationError([" + P + "]); ")
                          : (i +=
                              " validate.errors = [" + P + "]; return false; ")
                        : (i +=
                            " var err = " +
                            P +
                            ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "),
                      (i += " } "),
                      (s = j),
                      l && ((u += "}"), (i += " else { "));
                  }
                  var S = n;
                  if (S)
                    for (var _, I = -1, T = S.length - 1; I < T; )
                      if (
                        ((_ = S[(I += 1)]),
                        e.util.schemaHasRules(_, e.RULES.all))
                      ) {
                        i +=
                          " " +
                          f +
                          " = true; if (" +
                          d +
                          ".length > " +
                          I +
                          ") { ";
                        var A = d + "[" + I + "]";
                        (h.schema = _),
                          (h.schemaPath = o + "[" + I + "]"),
                          (h.errSchemaPath = s + "/" + I),
                          (h.errorPath = e.util.getPathExpr(
                            e.errorPath,
                            I,
                            e.opts.jsonPointers,
                            !0
                          )),
                          (h.dataPathArr[y] = I);
                        var x = e.validate(h);
                        (h.baseId = v),
                          e.util.varOccurences(x, g) < 2
                            ? (i += " " + e.util.varReplace(x, g, A) + " ")
                            : (i += " var " + g + " = " + A + "; " + x + " "),
                          (i += " }  "),
                          l && ((i += " if (" + f + ") { "), (u += "}"));
                      }
                  if (
                    "object" == typeof b &&
                    e.util.schemaHasRules(b, e.RULES.all)
                  ) {
                    (h.schema = b),
                      (h.schemaPath = e.schemaPath + ".additionalItems"),
                      (h.errSchemaPath = e.errSchemaPath + "/additionalItems"),
                      (i +=
                        " " +
                        f +
                        " = true; if (" +
                        d +
                        ".length > " +
                        n.length +
                        ") {  for (var " +
                        m +
                        " = " +
                        n.length +
                        "; " +
                        m +
                        " < " +
                        d +
                        ".length; " +
                        m +
                        "++) { "),
                      (h.errorPath = e.util.getPathExpr(
                        e.errorPath,
                        m,
                        e.opts.jsonPointers,
                        !0
                      ));
                    var A = d + "[" + m + "]";
                    h.dataPathArr[y] = m;
                    var x = e.validate(h);
                    (h.baseId = v),
                      e.util.varOccurences(x, g) < 2
                        ? (i += " " + e.util.varReplace(x, g, A) + " ")
                        : (i += " var " + g + " = " + A + "; " + x + " "),
                      l && (i += " if (!" + f + ") break; "),
                      (i += " } }  "),
                      l && ((i += " if (" + f + ") { "), (u += "}"));
                  }
                } else if (e.util.schemaHasRules(n, e.RULES.all)) {
                  (h.schema = n),
                    (h.schemaPath = o),
                    (h.errSchemaPath = s),
                    (i +=
                      "  for (var " +
                      m +
                      " = 0; " +
                      m +
                      " < " +
                      d +
                      ".length; " +
                      m +
                      "++) { "),
                    (h.errorPath = e.util.getPathExpr(
                      e.errorPath,
                      m,
                      e.opts.jsonPointers,
                      !0
                    ));
                  var A = d + "[" + m + "]";
                  h.dataPathArr[y] = m;
                  var x = e.validate(h);
                  (h.baseId = v),
                    e.util.varOccurences(x, g) < 2
                      ? (i += " " + e.util.varReplace(x, g, A) + " ")
                      : (i += " var " + g + " = " + A + "; " + x + " "),
                    l && (i += " if (!" + f + ") break; "),
                    (i += " }  "),
                    l && ((i += " if (" + f + ") { "), (u += "}"));
                }
                return (
                  l && (i += " " + u + " if (" + c + " == errors) {"),
                  (i = e.util.cleanUpCode(i))
                );
              };
            },
            {}
          ],
          26: [
            function(e, t, i) {
              "use strict";
              t.exports = function(e, t) {
                var i,
                  r = " ",
                  a = e.level,
                  n = e.dataLevel,
                  o = e.schema[t],
                  s = e.schemaPath + e.util.getProperty(t),
                  l = e.errSchemaPath + "/" + t,
                  d = !e.opts.allErrors,
                  p = "data" + (n || ""),
                  c = e.opts.v5 && o && o.$data;
                c
                  ? ((r +=
                      " var schema" +
                      a +
                      " = " +
                      e.util.getData(o.$data, n, e.dataPathArr) +
                      "; "),
                    (i = "schema" + a))
                  : (i = o),
                  (r += "var division" + a + ";if ("),
                  c &&
                    (r +=
                      " " +
                      i +
                      " !== undefined && ( typeof " +
                      i +
                      " != 'number' || "),
                  (r += " (division" + a + " = " + p + " / " + i + ", "),
                  e.opts.multipleOfPrecision
                    ? (r +=
                        " Math.abs(Math.round(division" +
                        a +
                        ") - division" +
                        a +
                        ") > 1e-" +
                        e.opts.multipleOfPrecision +
                        " ")
                    : (r +=
                        " division" + a + " !== parseInt(division" + a + ") "),
                  (r += " ) "),
                  c && (r += "  )  "),
                  (r += " ) {   ");
                var h = h || [];
                h.push(r),
                  (r = ""),
                  !1 !== e.createErrors
                    ? ((r +=
                        " { keyword: 'multipleOf' , dataPath: (dataPath || '') + " +
                        e.errorPath +
                        " , schemaPath: " +
                        e.util.toQuotedString(l) +
                        " , params: { multipleOf: " +
                        i +
                        " } "),
                      !1 !== e.opts.messages &&
                        ((r += " , message: 'should be multiple of "),
                        (r += c ? "' + " + i : o + "'")),
                      e.opts.verbose &&
                        ((r += " , schema:  "),
                        (r += c ? "validate.schema" + s : "" + o),
                        (r +=
                          "         , parentSchema: validate.schema" +
                          e.schemaPath +
                          " , data: " +
                          p +
                          " ")),
                      (r += " } "))
                    : (r += " {} ");
                var u = r;
                return (
                  (r = h.pop()),
                  !e.compositeRule && d
                    ? e.async
                      ? (r += " throw new ValidationError([" + u + "]); ")
                      : (r += " validate.errors = [" + u + "]; return false; ")
                    : (r +=
                        " var err = " +
                        u +
                        ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "),
                  (r += "} "),
                  d && (r += " else { "),
                  r
                );
              };
            },
            {}
          ],
          27: [
            function(e, t, i) {
              "use strict";
              t.exports = function(e, t) {
                var i = " ",
                  r = e.level,
                  a = e.dataLevel,
                  n = e.schema[t],
                  o = e.schemaPath + e.util.getProperty(t),
                  s = e.errSchemaPath + "/" + t,
                  l = !e.opts.allErrors,
                  d = "data" + (a || ""),
                  p = "errs__" + r,
                  c = e.util.copy(e);
                c.level++;
                var h = "valid" + c.level;
                if (e.util.schemaHasRules(n, e.RULES.all)) {
                  (c.schema = n),
                    (c.schemaPath = o),
                    (c.errSchemaPath = s),
                    (i += " var " + p + " = errors;  ");
                  var u,
                    f = e.compositeRule;
                  (e.compositeRule = c.compositeRule = !0),
                    (c.createErrors = !1),
                    c.opts.allErrors &&
                      ((u = c.opts.allErrors), (c.opts.allErrors = !1)),
                    (i += " " + e.validate(c) + " "),
                    (c.createErrors = !0),
                    u && (c.opts.allErrors = u),
                    (e.compositeRule = c.compositeRule = f),
                    (i += " if (" + h + ") {   ");
                  var m = m || [];
                  m.push(i),
                    (i = ""),
                    !1 !== e.createErrors
                      ? ((i +=
                          " { keyword: 'not' , dataPath: (dataPath || '') + " +
                          e.errorPath +
                          " , schemaPath: " +
                          e.util.toQuotedString(s) +
                          " , params: {} "),
                        !1 !== e.opts.messages &&
                          (i += " , message: 'should NOT be valid' "),
                        e.opts.verbose &&
                          (i +=
                            " , schema: validate.schema" +
                            o +
                            " , parentSchema: validate.schema" +
                            e.schemaPath +
                            " , data: " +
                            d +
                            " "),
                        (i += " } "))
                      : (i += " {} ");
                  var y = i;
                  (i = m.pop()),
                    !e.compositeRule && l
                      ? e.async
                        ? (i += " throw new ValidationError([" + y + "]); ")
                        : (i +=
                            " validate.errors = [" + y + "]; return false; ")
                      : (i +=
                          " var err = " +
                          y +
                          ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "),
                    (i +=
                      " } else {  errors = " +
                      p +
                      "; if (vErrors !== null) { if (" +
                      p +
                      ") vErrors.length = " +
                      p +
                      "; else vErrors = null; } "),
                    e.opts.allErrors && (i += " } ");
                } else
                  (i += "  var err =   "),
                    !1 !== e.createErrors
                      ? ((i +=
                          " { keyword: 'not' , dataPath: (dataPath || '') + " +
                          e.errorPath +
                          " , schemaPath: " +
                          e.util.toQuotedString(s) +
                          " , params: {} "),
                        !1 !== e.opts.messages &&
                          (i += " , message: 'should NOT be valid' "),
                        e.opts.verbose &&
                          (i +=
                            " , schema: validate.schema" +
                            o +
                            " , parentSchema: validate.schema" +
                            e.schemaPath +
                            " , data: " +
                            d +
                            " "),
                        (i += " } "))
                      : (i += " {} "),
                    (i +=
                      ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "),
                    l && (i += " if (false) { ");
                return i;
              };
            },
            {}
          ],
          28: [
            function(e, t, i) {
              "use strict";
              t.exports = function(e, t) {
                var i = " ",
                  r = e.level,
                  a = e.dataLevel,
                  n = e.schema[t],
                  o = e.schemaPath + e.util.getProperty(t),
                  s = e.errSchemaPath + "/" + t,
                  l = !e.opts.allErrors,
                  d = "data" + (a || ""),
                  p = "valid" + r,
                  c = "errs__" + r,
                  h = e.util.copy(e),
                  u = "";
                h.level++;
                var f = "valid" + h.level;
                i +=
                  "var " +
                  c +
                  " = errors;var prevValid" +
                  r +
                  " = false;var " +
                  p +
                  " = false;";
                var m = h.baseId,
                  y = e.compositeRule;
                e.compositeRule = h.compositeRule = !0;
                var g = n;
                if (g)
                  for (var v, b = -1, j = g.length - 1; b < j; )
                    (v = g[(b += 1)]),
                      e.util.schemaHasRules(v, e.RULES.all)
                        ? ((h.schema = v),
                          (h.schemaPath = o + "[" + b + "]"),
                          (h.errSchemaPath = s + "/" + b),
                          (i += "  " + e.validate(h) + " "),
                          (h.baseId = m))
                        : (i += " var " + f + " = true; "),
                      b &&
                        ((i +=
                          " if (" +
                          f +
                          " && prevValid" +
                          r +
                          ") " +
                          p +
                          " = false; else { "),
                        (u += "}")),
                      (i +=
                        " if (" +
                        f +
                        ") " +
                        p +
                        " = prevValid" +
                        r +
                        " = true;");
                (e.compositeRule = h.compositeRule = y),
                  (i += u + "if (!" + p + ") {   ");
                var w = w || [];
                w.push(i),
                  (i = ""),
                  !1 !== e.createErrors
                    ? ((i +=
                        " { keyword: 'oneOf' , dataPath: (dataPath || '') + " +
                        e.errorPath +
                        " , schemaPath: " +
                        e.util.toQuotedString(s) +
                        " , params: {} "),
                      !1 !== e.opts.messages &&
                        (i +=
                          " , message: 'should match exactly one schema in oneOf' "),
                      e.opts.verbose &&
                        (i +=
                          " , schema: validate.schema" +
                          o +
                          " , parentSchema: validate.schema" +
                          e.schemaPath +
                          " , data: " +
                          d +
                          " "),
                      (i += " } "))
                    : (i += " {} ");
                var P = i;
                return (
                  (i = w.pop()),
                  !e.compositeRule && l
                    ? e.async
                      ? (i += " throw new ValidationError([" + P + "]); ")
                      : (i += " validate.errors = [" + P + "]; return false; ")
                    : (i +=
                        " var err = " +
                        P +
                        ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "),
                  (i +=
                    "} else {  errors = " +
                    c +
                    "; if (vErrors !== null) { if (" +
                    c +
                    ") vErrors.length = " +
                    c +
                    "; else vErrors = null; }"),
                  e.opts.allErrors && (i += " } "),
                  i
                );
              };
            },
            {}
          ],
          29: [
            function(e, t, i) {
              "use strict";
              t.exports = function(e, t) {
                var i,
                  r = " ",
                  a = e.level,
                  n = e.dataLevel,
                  o = e.schema[t],
                  s = e.schemaPath + e.util.getProperty(t),
                  l = e.errSchemaPath + "/" + t,
                  d = !e.opts.allErrors,
                  p = "data" + (n || ""),
                  c = e.opts.v5 && o && o.$data;
                c
                  ? ((r +=
                      " var schema" +
                      a +
                      " = " +
                      e.util.getData(o.$data, n, e.dataPathArr) +
                      "; "),
                    (i = "schema" + a))
                  : (i = o);
                var h = c ? "(new RegExp(" + i + "))" : e.usePattern(o);
                (r += "if ( "),
                  c &&
                    (r +=
                      " (" +
                      i +
                      " !== undefined && typeof " +
                      i +
                      " != 'string') || "),
                  (r += " !" + h + ".test(" + p + ") ) {   ");
                var u = u || [];
                u.push(r),
                  (r = ""),
                  !1 !== e.createErrors
                    ? ((r +=
                        " { keyword: 'pattern' , dataPath: (dataPath || '') + " +
                        e.errorPath +
                        " , schemaPath: " +
                        e.util.toQuotedString(l) +
                        " , params: { pattern:  "),
                      (r += c ? "" + i : "" + e.util.toQuotedString(o)),
                      (r += "  } "),
                      !1 !== e.opts.messages &&
                        ((r += " , message: 'should match pattern \""),
                        (r += c
                          ? "' + " + i + " + '"
                          : "" + e.util.escapeQuotes(o)),
                        (r += "\"' ")),
                      e.opts.verbose &&
                        ((r += " , schema:  "),
                        (r += c
                          ? "validate.schema" + s
                          : "" + e.util.toQuotedString(o)),
                        (r +=
                          "         , parentSchema: validate.schema" +
                          e.schemaPath +
                          " , data: " +
                          p +
                          " ")),
                      (r += " } "))
                    : (r += " {} ");
                var f = r;
                return (
                  (r = u.pop()),
                  !e.compositeRule && d
                    ? e.async
                      ? (r += " throw new ValidationError([" + f + "]); ")
                      : (r += " validate.errors = [" + f + "]; return false; ")
                    : (r +=
                        " var err = " +
                        f +
                        ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "),
                  (r += "} "),
                  d && (r += " else { "),
                  r
                );
              };
            },
            {}
          ],
          30: [
            function(e, t, i) {
              "use strict";
              t.exports = function(e, t) {
                var i = " ",
                  r = e.level,
                  a = e.dataLevel,
                  n = e.schema[t],
                  o = e.schemaPath + e.util.getProperty(t),
                  s = e.errSchemaPath + "/" + t,
                  l = !e.opts.allErrors,
                  d = "data" + (a || ""),
                  p = "valid" + r,
                  c = "key" + r,
                  h = "patternMatched" + r,
                  u = "",
                  f = e.opts.ownProperties;
                i += "var " + p + " = true;";
                var m = n;
                if (m)
                  for (var y, g = -1, v = m.length - 1; g < v; ) {
                    (y = m[(g += 1)]),
                      (i +=
                        " var " +
                        h +
                        " = false; for (var " +
                        c +
                        " in " +
                        d +
                        ") {  "),
                      f &&
                        (i +=
                          " if (!Object.prototype.hasOwnProperty.call(" +
                          d +
                          ", " +
                          c +
                          ")) continue; "),
                      (i +=
                        " " +
                        h +
                        " = " +
                        e.usePattern(y) +
                        ".test(" +
                        c +
                        "); if (" +
                        h +
                        ") break; } ");
                    var b = e.util.escapeQuotes(y);
                    (i +=
                      " if (!" + h + ") { " + p + " = false;  var err =   "),
                      !1 !== e.createErrors
                        ? ((i +=
                            " { keyword: 'patternRequired' , dataPath: (dataPath || '') + " +
                            e.errorPath +
                            " , schemaPath: " +
                            e.util.toQuotedString(s) +
                            " , params: { missingPattern: '" +
                            b +
                            "' } "),
                          !1 !== e.opts.messages &&
                            (i +=
                              " , message: 'should have property matching pattern \\'" +
                              b +
                              "\\'' "),
                          e.opts.verbose &&
                            (i +=
                              " , schema: validate.schema" +
                              o +
                              " , parentSchema: validate.schema" +
                              e.schemaPath +
                              " , data: " +
                              d +
                              " "),
                          (i += " } "))
                        : (i += " {} "),
                      (i +=
                        ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; }   "),
                      l && ((u += "}"), (i += " else { "));
                  }
                return (i += "" + u);
              };
            },
            {}
          ],
          31: [
            function(e, t, i) {
              "use strict";
              t.exports = function(e, t) {
                var i = " ",
                  r = e.level,
                  a = e.dataLevel,
                  n = e.schema[t],
                  o = e.schemaPath + e.util.getProperty(t),
                  s = e.errSchemaPath + "/" + t,
                  l = !e.opts.allErrors,
                  d = "data" + (a || ""),
                  p = "valid" + r,
                  c = "errs__" + r,
                  h = e.util.copy(e),
                  u = "";
                h.level++;
                var f = "valid" + h.level,
                  m = "key" + r,
                  y = (h.dataLevel = e.dataLevel + 1),
                  g = "data" + y,
                  v = Object.keys(n || {}),
                  b = e.schema.patternProperties || {},
                  j = Object.keys(b),
                  w = e.schema.additionalProperties,
                  P = v.length || j.length,
                  S = !1 === w,
                  _ = "object" == typeof w && Object.keys(w).length,
                  I = e.opts.removeAdditional,
                  T = S || _ || I,
                  A = e.opts.ownProperties,
                  x = e.baseId,
                  E = e.schema.required;
                if (
                  E &&
                  (!e.opts.v5 || !E.$data) &&
                  E.length < e.opts.loopRequired
                )
                  var $ = e.util.toHash(E);
                if (e.opts.v5)
                  var L = e.schema.patternGroups || {},
                    R = Object.keys(L);
                if (
                  ((i += "var " + c + " = errors;var " + f + " = true;"), T)
                ) {
                  if (
                    ((i += " for (var " + m + " in " + d + ") {  "),
                    A &&
                      (i +=
                        " if (!Object.prototype.hasOwnProperty.call(" +
                        d +
                        ", " +
                        m +
                        ")) continue; "),
                    P)
                  ) {
                    if (
                      ((i += " var isAdditional" + r + " = !(false "), v.length)
                    )
                      if (v.length > 5)
                        i += " || validate.schema" + o + "[" + m + "] ";
                      else {
                        var D = v;
                        if (D)
                          for (var O = -1, q = D.length - 1; O < q; )
                            (Y = D[(O += 1)]),
                              (i +=
                                " || " +
                                m +
                                " == " +
                                e.util.toQuotedString(Y) +
                                " ");
                      }
                    if (j.length) {
                      var k = j;
                      if (k)
                        for (var M = -1, C = k.length - 1; M < C; )
                          (oe = k[(M += 1)]),
                            (i +=
                              " || " + e.usePattern(oe) + ".test(" + m + ") ");
                    }
                    if (e.opts.v5 && R && R.length) {
                      var z = R;
                      if (z)
                        for (var M = -1, V = z.length - 1; M < V; )
                          (pe = z[(M += 1)]),
                            (i +=
                              " || " + e.usePattern(pe) + ".test(" + m + ") ");
                    }
                    i += " ); if (isAdditional" + r + ") { ";
                  }
                  if ("all" == I) i += " delete " + d + "[" + m + "]; ";
                  else {
                    var U = e.errorPath,
                      F = "' + " + m + " + '";
                    if (
                      (e.opts._errorDataPathProperty &&
                        (e.errorPath = e.util.getPathExpr(
                          e.errorPath,
                          m,
                          e.opts.jsonPointers
                        )),
                      S)
                    )
                      if (I) i += " delete " + d + "[" + m + "]; ";
                      else {
                        i += " " + f + " = false; ";
                        var N = s;
                        s = e.errSchemaPath + "/additionalProperties";
                        var B = B || [];
                        B.push(i),
                          (i = ""),
                          !1 !== e.createErrors
                            ? ((i +=
                                " { keyword: 'additionalProperties' , dataPath: (dataPath || '') + " +
                                e.errorPath +
                                " , schemaPath: " +
                                e.util.toQuotedString(s) +
                                " , params: { additionalProperty: '" +
                                F +
                                "' } "),
                              !1 !== e.opts.messages &&
                                (i +=
                                  " , message: 'should NOT have additional properties' "),
                              e.opts.verbose &&
                                (i +=
                                  " , schema: false , parentSchema: validate.schema" +
                                  e.schemaPath +
                                  " , data: " +
                                  d +
                                  " "),
                              (i += " } "))
                            : (i += " {} ");
                        var G = i;
                        (i = B.pop()),
                          !e.compositeRule && l
                            ? e.async
                              ? (i +=
                                  " throw new ValidationError([" + G + "]); ")
                              : (i +=
                                  " validate.errors = [" +
                                  G +
                                  "]; return false; ")
                            : (i +=
                                " var err = " +
                                G +
                                ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "),
                          (s = N),
                          l && (i += " break; ");
                      }
                    else if (_)
                      if ("failing" == I) {
                        i += " var " + c + " = errors;  ";
                        var Q = e.compositeRule;
                        (e.compositeRule = h.compositeRule = !0),
                          (h.schema = w),
                          (h.schemaPath =
                            e.schemaPath + ".additionalProperties"),
                          (h.errSchemaPath =
                            e.errSchemaPath + "/additionalProperties"),
                          (h.errorPath = e.opts._errorDataPathProperty
                            ? e.errorPath
                            : e.util.getPathExpr(
                                e.errorPath,
                                m,
                                e.opts.jsonPointers
                              ));
                        var W = d + "[" + m + "]";
                        h.dataPathArr[y] = m;
                        var H = e.validate(h);
                        (h.baseId = x),
                          e.util.varOccurences(H, g) < 2
                            ? (i += " " + e.util.varReplace(H, g, W) + " ")
                            : (i += " var " + g + " = " + W + "; " + H + " "),
                          (i +=
                            " if (!" +
                            f +
                            ") { errors = " +
                            c +
                            "; if (validate.errors !== null) { if (errors) validate.errors.length = errors; else validate.errors = null; } delete " +
                            d +
                            "[" +
                            m +
                            "]; }  "),
                          (e.compositeRule = h.compositeRule = Q);
                      } else {
                        (h.schema = w),
                          (h.schemaPath =
                            e.schemaPath + ".additionalProperties"),
                          (h.errSchemaPath =
                            e.errSchemaPath + "/additionalProperties"),
                          (h.errorPath = e.opts._errorDataPathProperty
                            ? e.errorPath
                            : e.util.getPathExpr(
                                e.errorPath,
                                m,
                                e.opts.jsonPointers
                              ));
                        var W = d + "[" + m + "]";
                        h.dataPathArr[y] = m;
                        var H = e.validate(h);
                        (h.baseId = x),
                          e.util.varOccurences(H, g) < 2
                            ? (i += " " + e.util.varReplace(H, g, W) + " ")
                            : (i += " var " + g + " = " + W + "; " + H + " "),
                          l && (i += " if (!" + f + ") break; ");
                      }
                    e.errorPath = U;
                  }
                  P && (i += " } "),
                    (i += " }  "),
                    l && ((i += " if (" + f + ") { "), (u += "}"));
                }
                var K = e.opts.useDefaults && !e.compositeRule;
                if (v.length) {
                  var J = v;
                  if (J)
                    for (var Y, Z = -1, X = J.length - 1; Z < X; ) {
                      Y = J[(Z += 1)];
                      var ee = n[Y];
                      if (e.util.schemaHasRules(ee, e.RULES.all)) {
                        var te = e.util.getProperty(Y),
                          W = d + te,
                          ie = K && void 0 !== ee.default;
                        (h.schema = ee),
                          (h.schemaPath = o + te),
                          (h.errSchemaPath =
                            s + "/" + e.util.escapeFragment(Y)),
                          (h.errorPath = e.util.getPath(
                            e.errorPath,
                            Y,
                            e.opts.jsonPointers
                          )),
                          (h.dataPathArr[y] = e.util.toQuotedString(Y));
                        var H = e.validate(h);
                        if (((h.baseId = x), e.util.varOccurences(H, g) < 2)) {
                          H = e.util.varReplace(H, g, W);
                          var re = W;
                        } else {
                          var re = g;
                          i += " var " + g + " = " + W + "; ";
                        }
                        if (ie) i += " " + H + " ";
                        else {
                          if ($ && $[Y]) {
                            i +=
                              " if (" +
                              re +
                              " === undefined) { " +
                              f +
                              " = false; ";
                            var U = e.errorPath,
                              N = s,
                              ae = e.util.escapeQuotes(Y);
                            e.opts._errorDataPathProperty &&
                              (e.errorPath = e.util.getPath(
                                U,
                                Y,
                                e.opts.jsonPointers
                              )),
                              (s = e.errSchemaPath + "/required");
                            var B = B || [];
                            B.push(i),
                              (i = ""),
                              !1 !== e.createErrors
                                ? ((i +=
                                    " { keyword: 'required' , dataPath: (dataPath || '') + " +
                                    e.errorPath +
                                    " , schemaPath: " +
                                    e.util.toQuotedString(s) +
                                    " , params: { missingProperty: '" +
                                    ae +
                                    "' } "),
                                  !1 !== e.opts.messages &&
                                    ((i += " , message: '"),
                                    e.opts._errorDataPathProperty
                                      ? (i += "is a required property")
                                      : (i +=
                                          "should have required property \\'" +
                                          ae +
                                          "\\'"),
                                    (i += "' ")),
                                  e.opts.verbose &&
                                    (i +=
                                      " , schema: validate.schema" +
                                      o +
                                      " , parentSchema: validate.schema" +
                                      e.schemaPath +
                                      " , data: " +
                                      d +
                                      " "),
                                  (i += " } "))
                                : (i += " {} ");
                            var G = i;
                            (i = B.pop()),
                              !e.compositeRule && l
                                ? e.async
                                  ? (i +=
                                      " throw new ValidationError([" +
                                      G +
                                      "]); ")
                                  : (i +=
                                      " validate.errors = [" +
                                      G +
                                      "]; return false; ")
                                : (i +=
                                    " var err = " +
                                    G +
                                    ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "),
                              (s = N),
                              (e.errorPath = U),
                              (i += " } else { ");
                          } else
                            i += l
                              ? " if (" +
                                re +
                                " === undefined) { " +
                                f +
                                " = true; } else { "
                              : " if (" + re + " !== undefined) { ";
                          i += " " + H + " } ";
                        }
                      }
                      l && ((i += " if (" + f + ") { "), (u += "}"));
                    }
                }
                var ne = j;
                if (ne)
                  for (var oe, se = -1, le = ne.length - 1; se < le; ) {
                    oe = ne[(se += 1)];
                    var ee = b[oe];
                    if (e.util.schemaHasRules(ee, e.RULES.all)) {
                      (h.schema = ee),
                        (h.schemaPath =
                          e.schemaPath +
                          ".patternProperties" +
                          e.util.getProperty(oe)),
                        (h.errSchemaPath =
                          e.errSchemaPath +
                          "/patternProperties/" +
                          e.util.escapeFragment(oe)),
                        (i += " for (var " + m + " in " + d + ") {  "),
                        A &&
                          (i +=
                            " if (!Object.prototype.hasOwnProperty.call(" +
                            d +
                            ", " +
                            m +
                            ")) continue; "),
                        (i +=
                          " if (" + e.usePattern(oe) + ".test(" + m + ")) { "),
                        (h.errorPath = e.util.getPathExpr(
                          e.errorPath,
                          m,
                          e.opts.jsonPointers
                        ));
                      var W = d + "[" + m + "]";
                      h.dataPathArr[y] = m;
                      var H = e.validate(h);
                      (h.baseId = x),
                        e.util.varOccurences(H, g) < 2
                          ? (i += " " + e.util.varReplace(H, g, W) + " ")
                          : (i += " var " + g + " = " + W + "; " + H + " "),
                        l && (i += " if (!" + f + ") break; "),
                        (i += " } "),
                        l && (i += " else " + f + " = true; "),
                        (i += " }  "),
                        l && ((i += " if (" + f + ") { "), (u += "}"));
                    }
                  }
                if (e.opts.v5) {
                  var de = R;
                  if (de)
                    for (var pe, ce = -1, he = de.length - 1; ce < he; ) {
                      pe = de[(ce += 1)];
                      var ue = L[pe],
                        ee = ue.schema;
                      if (e.util.schemaHasRules(ee, e.RULES.all)) {
                        (h.schema = ee),
                          (h.schemaPath =
                            e.schemaPath +
                            ".patternGroups" +
                            e.util.getProperty(pe) +
                            ".schema"),
                          (h.errSchemaPath =
                            e.errSchemaPath +
                            "/patternGroups/" +
                            e.util.escapeFragment(pe) +
                            "/schema"),
                          (i +=
                            " var pgPropCount" +
                            r +
                            " = 0; for (var " +
                            m +
                            " in " +
                            d +
                            ") {  "),
                          A &&
                            (i +=
                              " if (!Object.prototype.hasOwnProperty.call(" +
                              d +
                              ", " +
                              m +
                              ")) continue; "),
                          (i +=
                            " if (" +
                            e.usePattern(pe) +
                            ".test(" +
                            m +
                            ")) { pgPropCount" +
                            r +
                            "++; "),
                          (h.errorPath = e.util.getPathExpr(
                            e.errorPath,
                            m,
                            e.opts.jsonPointers
                          ));
                        var W = d + "[" + m + "]";
                        h.dataPathArr[y] = m;
                        var H = e.validate(h);
                        (h.baseId = x),
                          e.util.varOccurences(H, g) < 2
                            ? (i += " " + e.util.varReplace(H, g, W) + " ")
                            : (i += " var " + g + " = " + W + "; " + H + " "),
                          l && (i += " if (!" + f + ") break; "),
                          (i += " } "),
                          l && (i += " else " + f + " = true; "),
                          (i += " }  "),
                          l && ((i += " if (" + f + ") { "), (u += "}"));
                        var fe = ue.minimum,
                          me = ue.maximum;
                        if (void 0 !== fe || void 0 !== me) {
                          i += " var " + p + " = true; ";
                          var N = s;
                          if (void 0 !== fe) {
                            var ye = fe,
                              ge = "minimum",
                              ve = "less";
                            (i +=
                              " " +
                              p +
                              " = pgPropCount" +
                              r +
                              " >= " +
                              fe +
                              "; "),
                              (s = e.errSchemaPath + "/patternGroups/minimum"),
                              (i += "  if (!" + p + ") {   ");
                            var B = B || [];
                            B.push(i),
                              (i = ""),
                              !1 !== e.createErrors
                                ? ((i +=
                                    " { keyword: 'patternGroups' , dataPath: (dataPath || '') + " +
                                    e.errorPath +
                                    " , schemaPath: " +
                                    e.util.toQuotedString(s) +
                                    " , params: { reason: '" +
                                    ge +
                                    "', limit: " +
                                    ye +
                                    ", pattern: '" +
                                    e.util.escapeQuotes(pe) +
                                    "' } "),
                                  !1 !== e.opts.messages &&
                                    (i +=
                                      " , message: 'should NOT have " +
                                      ve +
                                      " than " +
                                      ye +
                                      ' properties matching pattern "' +
                                      e.util.escapeQuotes(pe) +
                                      "\"' "),
                                  e.opts.verbose &&
                                    (i +=
                                      " , schema: validate.schema" +
                                      o +
                                      " , parentSchema: validate.schema" +
                                      e.schemaPath +
                                      " , data: " +
                                      d +
                                      " "),
                                  (i += " } "))
                                : (i += " {} ");
                            var G = i;
                            (i = B.pop()),
                              !e.compositeRule && l
                                ? e.async
                                  ? (i +=
                                      " throw new ValidationError([" +
                                      G +
                                      "]); ")
                                  : (i +=
                                      " validate.errors = [" +
                                      G +
                                      "]; return false; ")
                                : (i +=
                                    " var err = " +
                                    G +
                                    ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "),
                              (i += " } "),
                              void 0 !== me && (i += " else ");
                          }
                          if (void 0 !== me) {
                            var ye = me,
                              ge = "maximum",
                              ve = "more";
                            (i +=
                              " " +
                              p +
                              " = pgPropCount" +
                              r +
                              " <= " +
                              me +
                              "; "),
                              (s = e.errSchemaPath + "/patternGroups/maximum"),
                              (i += "  if (!" + p + ") {   ");
                            var B = B || [];
                            B.push(i),
                              (i = ""),
                              !1 !== e.createErrors
                                ? ((i +=
                                    " { keyword: 'patternGroups' , dataPath: (dataPath || '') + " +
                                    e.errorPath +
                                    " , schemaPath: " +
                                    e.util.toQuotedString(s) +
                                    " , params: { reason: '" +
                                    ge +
                                    "', limit: " +
                                    ye +
                                    ", pattern: '" +
                                    e.util.escapeQuotes(pe) +
                                    "' } "),
                                  !1 !== e.opts.messages &&
                                    (i +=
                                      " , message: 'should NOT have " +
                                      ve +
                                      " than " +
                                      ye +
                                      ' properties matching pattern "' +
                                      e.util.escapeQuotes(pe) +
                                      "\"' "),
                                  e.opts.verbose &&
                                    (i +=
                                      " , schema: validate.schema" +
                                      o +
                                      " , parentSchema: validate.schema" +
                                      e.schemaPath +
                                      " , data: " +
                                      d +
                                      " "),
                                  (i += " } "))
                                : (i += " {} ");
                            var G = i;
                            (i = B.pop()),
                              !e.compositeRule && l
                                ? e.async
                                  ? (i +=
                                      " throw new ValidationError([" +
                                      G +
                                      "]); ")
                                  : (i +=
                                      " validate.errors = [" +
                                      G +
                                      "]; return false; ")
                                : (i +=
                                    " var err = " +
                                    G +
                                    ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "),
                              (i += " } ");
                          }
                          (s = N),
                            l && ((i += " if (" + p + ") { "), (u += "}"));
                        }
                      }
                    }
                }
                return (
                  l && (i += " " + u + " if (" + c + " == errors) {"),
                  (i = e.util.cleanUpCode(i))
                );
              };
            },
            {}
          ],
          32: [
            function(e, t, i) {
              "use strict";
              t.exports = function(e, t) {
                var i,
                  r,
                  a = " ",
                  n = e.level,
                  o = e.dataLevel,
                  s = e.schema[t],
                  l = e.errSchemaPath + "/" + t,
                  d = !e.opts.allErrors,
                  p = "data" + (o || ""),
                  c = "valid" + n;
                if ("#" == s || "#/" == s)
                  e.isRoot
                    ? ((i = e.async), (r = "validate"))
                    : ((i = !0 === e.root.schema.$async),
                      (r = "root.refVal[0]"));
                else {
                  var h = e.resolveRef(e.baseId, s, e.isRoot);
                  if (void 0 === h) {
                    var u =
                      "can't resolve reference " + s + " from id " + e.baseId;
                    if ("fail" == e.opts.missingRefs) {
                      console.log(u);
                      var f = f || [];
                      f.push(a),
                        (a = ""),
                        !1 !== e.createErrors
                          ? ((a +=
                              " { keyword: '$ref' , dataPath: (dataPath || '') + " +
                              e.errorPath +
                              " , schemaPath: " +
                              e.util.toQuotedString(l) +
                              " , params: { ref: '" +
                              e.util.escapeQuotes(s) +
                              "' } "),
                            !1 !== e.opts.messages &&
                              (a +=
                                " , message: 'can\\'t resolve reference " +
                                e.util.escapeQuotes(s) +
                                "' "),
                            e.opts.verbose &&
                              (a +=
                                " , schema: " +
                                e.util.toQuotedString(s) +
                                " , parentSchema: validate.schema" +
                                e.schemaPath +
                                " , data: " +
                                p +
                                " "),
                            (a += " } "))
                          : (a += " {} ");
                      var m = a;
                      (a = f.pop()),
                        !e.compositeRule && d
                          ? e.async
                            ? (a += " throw new ValidationError([" + m + "]); ")
                            : (a +=
                                " validate.errors = [" +
                                m +
                                "]; return false; ")
                          : (a +=
                              " var err = " +
                              m +
                              ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "),
                        d && (a += " if (false) { ");
                    } else {
                      if ("ignore" != e.opts.missingRefs) {
                        var y = new Error(u);
                        throw ((y.missingRef = e.resolve.url(e.baseId, s)),
                        (y.missingSchema = e.resolve.normalizeId(
                          e.resolve.fullPath(y.missingRef)
                        )),
                        y);
                      }
                      console.log(u), d && (a += " if (true) { ");
                    }
                  } else if (h.inline) {
                    var g = e.util.copy(e);
                    g.level++;
                    var v = "valid" + g.level;
                    (g.schema = h.schema),
                      (g.schemaPath = ""),
                      (g.errSchemaPath = s);
                    var b = e.validate(g).replace(/validate\.schema/g, h.code);
                    (a += " " + b + " "), d && (a += " if (" + v + ") { ");
                  } else (i = !0 === h.$async), (r = h.code);
                }
                if (r) {
                  var f = f || [];
                  f.push(a),
                    (a = ""),
                    e.opts.passContext
                      ? (a += " " + r + ".call(this, ")
                      : (a += " " + r + "( "),
                    (a += " " + p + ", (dataPath || '')"),
                    '""' != e.errorPath && (a += " + " + e.errorPath);
                  var j = (a +=
                    " , " +
                    (o ? "data" + (o - 1 || "") : "parentData") +
                    " , " +
                    (o ? e.dataPathArr[o] : "parentDataProperty") +
                    ", rootData)  ");
                  if (((a = f.pop()), i)) {
                    if (!e.async)
                      throw new Error("async schema referenced by sync schema");
                    (a += " try { "),
                      d && (a += "var " + c + " ="),
                      (a +=
                        " " +
                        e.yieldAwait +
                        " " +
                        j +
                        "; } catch (e) { if (!(e instanceof ValidationError)) throw e; if (vErrors === null) vErrors = e.errors; else vErrors = vErrors.concat(e.errors); errors = vErrors.length; } "),
                      d && (a += " if (" + c + ") { ");
                  } else
                    (a +=
                      " if (!" +
                      j +
                      ") { if (vErrors === null) vErrors = " +
                      r +
                      ".errors; else vErrors = vErrors.concat(" +
                      r +
                      ".errors); errors = vErrors.length; } "),
                      d && (a += " else { ");
                }
                return a;
              };
            },
            {}
          ],
          33: [
            function(e, t, i) {
              "use strict";
              t.exports = function(e, t) {
                var i = " ",
                  r = e.level,
                  a = e.dataLevel,
                  n = e.schema[t],
                  o = e.schemaPath + e.util.getProperty(t),
                  s = e.errSchemaPath + "/" + t,
                  l = !e.opts.allErrors,
                  d = "data" + (a || ""),
                  p = "valid" + r,
                  c = e.opts.v5 && n && n.$data;
                c &&
                  (i +=
                    " var schema" +
                    r +
                    " = " +
                    e.util.getData(n.$data, a, e.dataPathArr) +
                    "; ");
                var h = "schema" + r;
                if (!c)
                  if (
                    n.length < e.opts.loopRequired &&
                    e.schema.properties &&
                    Object.keys(e.schema.properties).length
                  ) {
                    var u = [],
                      f = n;
                    if (f)
                      for (var m, y = -1, g = f.length - 1; y < g; ) {
                        m = f[(y += 1)];
                        var v = e.schema.properties[m];
                        (v && e.util.schemaHasRules(v, e.RULES.all)) ||
                          (u[u.length] = m);
                      }
                  } else var u = n;
                if (c || u.length) {
                  var b = e.errorPath,
                    j = c || u.length >= e.opts.loopRequired;
                  if (l)
                    if (((i += " var missing" + r + "; "), j)) {
                      c || (i += " var " + h + " = validate.schema" + o + "; ");
                      var w = "i" + r,
                        P = "schema" + r + "[" + w + "]",
                        S = "' + " + P + " + '";
                      e.opts._errorDataPathProperty &&
                        (e.errorPath = e.util.getPathExpr(
                          b,
                          P,
                          e.opts.jsonPointers
                        )),
                        (i += " var " + p + " = true; "),
                        c &&
                          (i +=
                            " if (schema" +
                            r +
                            " === undefined) " +
                            p +
                            " = true; else if (!Array.isArray(schema" +
                            r +
                            ")) " +
                            p +
                            " = false; else {"),
                        (i +=
                          " for (var " +
                          w +
                          " = 0; " +
                          w +
                          " < " +
                          h +
                          ".length; " +
                          w +
                          "++) { " +
                          p +
                          " = " +
                          d +
                          "[" +
                          h +
                          "[" +
                          w +
                          "]] !== undefined; if (!" +
                          p +
                          ") break; } "),
                        c && (i += "  }  "),
                        (i += "  if (!" + p + ") {   ");
                      var _ = _ || [];
                      _.push(i),
                        (i = ""),
                        !1 !== e.createErrors
                          ? ((i +=
                              " { keyword: 'required' , dataPath: (dataPath || '') + " +
                              e.errorPath +
                              " , schemaPath: " +
                              e.util.toQuotedString(s) +
                              " , params: { missingProperty: '" +
                              S +
                              "' } "),
                            !1 !== e.opts.messages &&
                              ((i += " , message: '"),
                              e.opts._errorDataPathProperty
                                ? (i += "is a required property")
                                : (i +=
                                    "should have required property \\'" +
                                    S +
                                    "\\'"),
                              (i += "' ")),
                            e.opts.verbose &&
                              (i +=
                                " , schema: validate.schema" +
                                o +
                                " , parentSchema: validate.schema" +
                                e.schemaPath +
                                " , data: " +
                                d +
                                " "),
                            (i += " } "))
                          : (i += " {} ");
                      var I = i;
                      (i = _.pop()),
                        !e.compositeRule && l
                          ? e.async
                            ? (i += " throw new ValidationError([" + I + "]); ")
                            : (i +=
                                " validate.errors = [" +
                                I +
                                "]; return false; ")
                          : (i +=
                              " var err = " +
                              I +
                              ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "),
                        (i += " } else { ");
                    } else {
                      i += " if ( ";
                      var T = u;
                      if (T)
                        for (var A, w = -1, x = T.length - 1; w < x; ) {
                          (A = T[(w += 1)]), w && (i += " || ");
                          var E = e.util.getProperty(A);
                          i +=
                            " ( " +
                            d +
                            E +
                            " === undefined && (missing" +
                            r +
                            " = " +
                            e.util.toQuotedString(e.opts.jsonPointers ? A : E) +
                            ") ) ";
                        }
                      i += ") {  ";
                      var P = "missing" + r,
                        S = "' + " + P + " + '";
                      e.opts._errorDataPathProperty &&
                        (e.errorPath = e.opts.jsonPointers
                          ? e.util.getPathExpr(b, P, !0)
                          : b + " + " + P);
                      var _ = _ || [];
                      _.push(i),
                        (i = ""),
                        !1 !== e.createErrors
                          ? ((i +=
                              " { keyword: 'required' , dataPath: (dataPath || '') + " +
                              e.errorPath +
                              " , schemaPath: " +
                              e.util.toQuotedString(s) +
                              " , params: { missingProperty: '" +
                              S +
                              "' } "),
                            !1 !== e.opts.messages &&
                              ((i += " , message: '"),
                              e.opts._errorDataPathProperty
                                ? (i += "is a required property")
                                : (i +=
                                    "should have required property \\'" +
                                    S +
                                    "\\'"),
                              (i += "' ")),
                            e.opts.verbose &&
                              (i +=
                                " , schema: validate.schema" +
                                o +
                                " , parentSchema: validate.schema" +
                                e.schemaPath +
                                " , data: " +
                                d +
                                " "),
                            (i += " } "))
                          : (i += " {} ");
                      var I = i;
                      (i = _.pop()),
                        !e.compositeRule && l
                          ? e.async
                            ? (i += " throw new ValidationError([" + I + "]); ")
                            : (i +=
                                " validate.errors = [" +
                                I +
                                "]; return false; ")
                          : (i +=
                              " var err = " +
                              I +
                              ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "),
                        (i += " } else { ");
                    }
                  else if (j) {
                    c || (i += " var " + h + " = validate.schema" + o + "; ");
                    var w = "i" + r,
                      P = "schema" + r + "[" + w + "]",
                      S = "' + " + P + " + '";
                    e.opts._errorDataPathProperty &&
                      (e.errorPath = e.util.getPathExpr(
                        b,
                        P,
                        e.opts.jsonPointers
                      )),
                      c &&
                        ((i +=
                          " if (" +
                          h +
                          " && !Array.isArray(" +
                          h +
                          ")) {  var err =   "),
                        !1 !== e.createErrors
                          ? ((i +=
                              " { keyword: 'required' , dataPath: (dataPath || '') + " +
                              e.errorPath +
                              " , schemaPath: " +
                              e.util.toQuotedString(s) +
                              " , params: { missingProperty: '" +
                              S +
                              "' } "),
                            !1 !== e.opts.messages &&
                              ((i += " , message: '"),
                              e.opts._errorDataPathProperty
                                ? (i += "is a required property")
                                : (i +=
                                    "should have required property \\'" +
                                    S +
                                    "\\'"),
                              (i += "' ")),
                            e.opts.verbose &&
                              (i +=
                                " , schema: validate.schema" +
                                o +
                                " , parentSchema: validate.schema" +
                                e.schemaPath +
                                " , data: " +
                                d +
                                " "),
                            (i += " } "))
                          : (i += " {} "),
                        (i +=
                          ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else if (" +
                          h +
                          " !== undefined) { ")),
                      (i +=
                        " for (var " +
                        w +
                        " = 0; " +
                        w +
                        " < " +
                        h +
                        ".length; " +
                        w +
                        "++) { if (" +
                        d +
                        "[" +
                        h +
                        "[" +
                        w +
                        "]] === undefined) {  var err =   "),
                      !1 !== e.createErrors
                        ? ((i +=
                            " { keyword: 'required' , dataPath: (dataPath || '') + " +
                            e.errorPath +
                            " , schemaPath: " +
                            e.util.toQuotedString(s) +
                            " , params: { missingProperty: '" +
                            S +
                            "' } "),
                          !1 !== e.opts.messages &&
                            ((i += " , message: '"),
                            e.opts._errorDataPathProperty
                              ? (i += "is a required property")
                              : (i +=
                                  "should have required property \\'" +
                                  S +
                                  "\\'"),
                            (i += "' ")),
                          e.opts.verbose &&
                            (i +=
                              " , schema: validate.schema" +
                              o +
                              " , parentSchema: validate.schema" +
                              e.schemaPath +
                              " , data: " +
                              d +
                              " "),
                          (i += " } "))
                        : (i += " {} "),
                      (i +=
                        ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } } "),
                      c && (i += "  }  ");
                  } else {
                    var $ = u;
                    if ($)
                      for (var L, R = -1, D = $.length - 1; R < D; ) {
                        L = $[(R += 1)];
                        var E = e.util.getProperty(L),
                          S = e.util.escapeQuotes(L);
                        e.opts._errorDataPathProperty &&
                          (e.errorPath = e.util.getPath(
                            b,
                            L,
                            e.opts.jsonPointers
                          )),
                          (i +=
                            " if (" +
                            d +
                            E +
                            " === undefined) {  var err =   "),
                          !1 !== e.createErrors
                            ? ((i +=
                                " { keyword: 'required' , dataPath: (dataPath || '') + " +
                                e.errorPath +
                                " , schemaPath: " +
                                e.util.toQuotedString(s) +
                                " , params: { missingProperty: '" +
                                S +
                                "' } "),
                              !1 !== e.opts.messages &&
                                ((i += " , message: '"),
                                e.opts._errorDataPathProperty
                                  ? (i += "is a required property")
                                  : (i +=
                                      "should have required property \\'" +
                                      S +
                                      "\\'"),
                                (i += "' ")),
                              e.opts.verbose &&
                                (i +=
                                  " , schema: validate.schema" +
                                  o +
                                  " , parentSchema: validate.schema" +
                                  e.schemaPath +
                                  " , data: " +
                                  d +
                                  " "),
                              (i += " } "))
                            : (i += " {} "),
                          (i +=
                            ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ");
                      }
                  }
                  e.errorPath = b;
                } else l && (i += " if (true) {");
                return i;
              };
            },
            {}
          ],
          34: [
            function(e, t, i) {
              "use strict";
              t.exports = function(e, t) {
                var i = " ",
                  r = e.level,
                  a = e.dataLevel,
                  n = e.schema[t],
                  o = e.schemaPath + e.util.getProperty(t),
                  s = e.errSchemaPath + "/" + t,
                  l = !e.opts.allErrors,
                  d = "data" + (a || ""),
                  p = "valid" + r,
                  c = "errs__" + r,
                  h = e.util.copy(e),
                  u = "";
                h.level++;
                var f,
                  m = "valid" + h.level,
                  y = "ifPassed" + e.level,
                  g = h.baseId;
                i += "var " + y + ";";
                var v = n;
                if (v)
                  for (var b, j = -1, w = v.length - 1; j < w; ) {
                    if (
                      ((b = v[(j += 1)]),
                      j && !f && ((i += " if (!" + y + ") { "), (u += "}")),
                      b.if && e.util.schemaHasRules(b.if, e.RULES.all))
                    ) {
                      i += " var " + c + " = errors;   ";
                      var P = e.compositeRule;
                      if (
                        ((e.compositeRule = h.compositeRule = !0),
                        (h.createErrors = !1),
                        (h.schema = b.if),
                        (h.schemaPath = o + "[" + j + "].if"),
                        (h.errSchemaPath = s + "/" + j + "/if"),
                        (i += "  " + e.validate(h) + " "),
                        (h.baseId = g),
                        (h.createErrors = !0),
                        (e.compositeRule = h.compositeRule = P),
                        (i += " " + y + " = " + m + "; if (" + y + ") {  "),
                        "boolean" == typeof b.then)
                      ) {
                        if (!1 === b.then) {
                          var S = S || [];
                          S.push(i),
                            (i = ""),
                            !1 !== e.createErrors
                              ? ((i +=
                                  " { keyword: 'switch' , dataPath: (dataPath || '') + " +
                                  e.errorPath +
                                  " , schemaPath: " +
                                  e.util.toQuotedString(s) +
                                  " , params: { caseIndex: " +
                                  j +
                                  " } "),
                                !1 !== e.opts.messages &&
                                  (i +=
                                    " , message: 'should pass \"switch\" keyword validation' "),
                                e.opts.verbose &&
                                  (i +=
                                    " , schema: validate.schema" +
                                    o +
                                    " , parentSchema: validate.schema" +
                                    e.schemaPath +
                                    " , data: " +
                                    d +
                                    " "),
                                (i += " } "))
                              : (i += " {} ");
                          var _ = i;
                          (i = S.pop()),
                            !e.compositeRule && l
                              ? e.async
                                ? (i +=
                                    " throw new ValidationError([" + _ + "]); ")
                                : (i +=
                                    " validate.errors = [" +
                                    _ +
                                    "]; return false; ")
                              : (i +=
                                  " var err = " +
                                  _ +
                                  ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ");
                        }
                        i += " var " + m + " = " + b.then + "; ";
                      } else
                        (h.schema = b.then),
                          (h.schemaPath = o + "[" + j + "].then"),
                          (h.errSchemaPath = s + "/" + j + "/then"),
                          (i += "  " + e.validate(h) + " "),
                          (h.baseId = g);
                      i +=
                        "  } else {  errors = " +
                        c +
                        "; if (vErrors !== null) { if (" +
                        c +
                        ") vErrors.length = " +
                        c +
                        "; else vErrors = null; } } ";
                    } else if (
                      ((i += " " + y + " = true;  "),
                      "boolean" == typeof b.then)
                    ) {
                      if (!1 === b.then) {
                        var S = S || [];
                        S.push(i),
                          (i = ""),
                          !1 !== e.createErrors
                            ? ((i +=
                                " { keyword: 'switch' , dataPath: (dataPath || '') + " +
                                e.errorPath +
                                " , schemaPath: " +
                                e.util.toQuotedString(s) +
                                " , params: { caseIndex: " +
                                j +
                                " } "),
                              !1 !== e.opts.messages &&
                                (i +=
                                  " , message: 'should pass \"switch\" keyword validation' "),
                              e.opts.verbose &&
                                (i +=
                                  " , schema: validate.schema" +
                                  o +
                                  " , parentSchema: validate.schema" +
                                  e.schemaPath +
                                  " , data: " +
                                  d +
                                  " "),
                              (i += " } "))
                            : (i += " {} ");
                        var _ = i;
                        (i = S.pop()),
                          !e.compositeRule && l
                            ? e.async
                              ? (i +=
                                  " throw new ValidationError([" + _ + "]); ")
                              : (i +=
                                  " validate.errors = [" +
                                  _ +
                                  "]; return false; ")
                            : (i +=
                                " var err = " +
                                _ +
                                ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ");
                      }
                      i += " var " + m + " = " + b.then + "; ";
                    } else
                      (h.schema = b.then),
                        (h.schemaPath = o + "[" + j + "].then"),
                        (h.errSchemaPath = s + "/" + j + "/then"),
                        (i += "  " + e.validate(h) + " "),
                        (h.baseId = g);
                    f = b.continue;
                  }
                return (
                  (i += u + "var " + p + " = " + m + "; "),
                  (i = e.util.cleanUpCode(i))
                );
              };
            },
            {}
          ],
          35: [
            function(e, t, i) {
              "use strict";
              t.exports = function(e, t) {
                var i,
                  r = " ",
                  a = e.level,
                  n = e.dataLevel,
                  o = e.schema[t],
                  s = e.schemaPath + e.util.getProperty(t),
                  l = e.errSchemaPath + "/" + t,
                  d = !e.opts.allErrors,
                  p = "data" + (n || ""),
                  c = "valid" + a,
                  h = e.opts.v5 && o && o.$data;
                if (
                  (h
                    ? ((r +=
                        " var schema" +
                        a +
                        " = " +
                        e.util.getData(o.$data, n, e.dataPathArr) +
                        "; "),
                      (i = "schema" + a))
                    : (i = o),
                  (o || h) && !1 !== e.opts.uniqueItems)
                ) {
                  h &&
                    (r +=
                      " var " +
                      c +
                      "; if (" +
                      i +
                      " === false || " +
                      i +
                      " === undefined) " +
                      c +
                      " = true; else if (typeof " +
                      i +
                      " != 'boolean') " +
                      c +
                      " = false; else { "),
                    (r +=
                      " var " +
                      c +
                      " = true; if (" +
                      p +
                      ".length > 1) { var i = " +
                      p +
                      ".length, j; outer: for (;i--;) { for (j = i; j--;) { if (equal(" +
                      p +
                      "[i], " +
                      p +
                      "[j])) { " +
                      c +
                      " = false; break outer; } } } } "),
                    h && (r += "  }  "),
                    (r += " if (!" + c + ") {   ");
                  var u = u || [];
                  u.push(r),
                    (r = ""),
                    !1 !== e.createErrors
                      ? ((r +=
                          " { keyword: 'uniqueItems' , dataPath: (dataPath || '') + " +
                          e.errorPath +
                          " , schemaPath: " +
                          e.util.toQuotedString(l) +
                          " , params: { i: i, j: j } "),
                        !1 !== e.opts.messages &&
                          (r +=
                            " , message: 'should NOT have duplicate items (items ## ' + j + ' and ' + i + ' are identical)' "),
                        e.opts.verbose &&
                          ((r += " , schema:  "),
                          (r += h ? "validate.schema" + s : "" + o),
                          (r +=
                            "         , parentSchema: validate.schema" +
                            e.schemaPath +
                            " , data: " +
                            p +
                            " ")),
                        (r += " } "))
                      : (r += " {} ");
                  var f = r;
                  (r = u.pop()),
                    !e.compositeRule && d
                      ? e.async
                        ? (r += " throw new ValidationError([" + f + "]); ")
                        : (r +=
                            " validate.errors = [" + f + "]; return false; ")
                      : (r +=
                          " var err = " +
                          f +
                          ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "),
                    (r += " } "),
                    d && (r += " else { ");
                } else d && (r += " if (true) { ");
                return r;
              };
            },
            {}
          ],
          36: [
            function(e, t, i) {
              "use strict";
              t.exports = function(e, t) {
                function i(t) {
                  return (
                    void 0 !== e.schema[t.keyword] ||
                    ("properties" == t.keyword &&
                      (!1 === e.schema.additionalProperties ||
                        "object" == typeof e.schema.additionalProperties ||
                        (e.schema.patternProperties &&
                          Object.keys(e.schema.patternProperties).length) ||
                        (e.opts.v5 &&
                          e.schema.patternGroups &&
                          Object.keys(e.schema.patternGroups).length)))
                  );
                }
                var r = "",
                  a = !0 === e.schema.$async;
                if (e.isTop) {
                  var n = e.isTop,
                    o = (e.level = 0),
                    s = (e.dataLevel = 0),
                    l = "data";
                  if (
                    ((e.rootId = e.resolve.fullPath(e.root.schema.id)),
                    (e.baseId = e.baseId || e.rootId),
                    a)
                  ) {
                    e.async = !0;
                    var d = "es7" == e.opts.async;
                    e.yieldAwait = d ? "await" : "yield";
                  }
                  delete e.isTop,
                    (e.dataPathArr = [void 0]),
                    (r += " var validate = "),
                    a
                      ? d
                        ? (r += " (async function ")
                        : ("co*" == e.opts.async && (r += "co.wrap"),
                          (r += "(function* "))
                      : (r += " (function "),
                    (r +=
                      " (data, dataPath, parentData, parentDataProperty, rootData) { 'use strict'; var vErrors = null; "),
                    (r += " var errors = 0;     "),
                    (r += " if (rootData === undefined) rootData = data;");
                } else {
                  var o = e.level,
                    s = e.dataLevel,
                    l = "data" + (s || "");
                  if (
                    (e.schema.id &&
                      (e.baseId = e.resolve.url(e.baseId, e.schema.id)),
                    a && !e.async)
                  )
                    throw new Error("async schema in sync schema");
                  r += " var errs_" + o + " = errors;";
                }
                var p,
                  c = "valid" + o,
                  h = !e.opts.allErrors,
                  u = "",
                  f = "",
                  m = e.schema.type,
                  y = Array.isArray(m);
                if (m && e.opts.coerceTypes) {
                  var g = e.util.coerceToTypes(e.opts.coerceTypes, m);
                  if (g) {
                    var v = e.schemaPath + ".type",
                      b = e.errSchemaPath + "/type",
                      j = y ? "checkDataTypes" : "checkDataType";
                    r += " if (" + e.util[j](m, l, !0) + ") {  ";
                    var w = "dataType" + o,
                      P = "coerced" + o;
                    (r += " var " + w + " = typeof " + l + "; "),
                      "array" == e.opts.coerceTypes &&
                        (r +=
                          " if (" +
                          w +
                          " == 'object' && Array.isArray(" +
                          l +
                          ")) " +
                          w +
                          " = 'array'; "),
                      (r += " var " + P + " = undefined; ");
                    var S = "",
                      _ = g;
                    if (_)
                      for (var I, T = -1, A = _.length - 1; T < A; )
                        (I = _[(T += 1)]),
                          T &&
                            ((r += " if (" + P + " === undefined) { "),
                            (S += "}")),
                          "array" == e.opts.coerceTypes &&
                            "array" != I &&
                            (r +=
                              " if (" +
                              w +
                              " == 'array' && " +
                              l +
                              ".length == 1) { " +
                              P +
                              " = " +
                              l +
                              " = " +
                              l +
                              "[0]; " +
                              w +
                              " = typeof " +
                              l +
                              ";  } "),
                          "string" == I
                            ? (r +=
                                " if (" +
                                w +
                                " == 'number' || " +
                                w +
                                " == 'boolean') " +
                                P +
                                " = '' + " +
                                l +
                                "; else if (" +
                                l +
                                " === null) " +
                                P +
                                " = ''; ")
                            : "number" == I || "integer" == I
                              ? ((r +=
                                  " if (" +
                                  w +
                                  " == 'boolean' || " +
                                  l +
                                  " === null || (" +
                                  w +
                                  " == 'string' && " +
                                  l +
                                  " && " +
                                  l +
                                  " == +" +
                                  l +
                                  " "),
                                "integer" == I && (r += " && !(" + l + " % 1)"),
                                (r += ")) " + P + " = +" + l + "; "))
                              : "boolean" == I
                                ? (r +=
                                    " if (" +
                                    l +
                                    " === 'false' || " +
                                    l +
                                    " === 0 || " +
                                    l +
                                    " === null) " +
                                    P +
                                    " = false; else if (" +
                                    l +
                                    " === 'true' || " +
                                    l +
                                    " === 1) " +
                                    P +
                                    " = true; ")
                                : "null" == I
                                  ? (r +=
                                      " if (" +
                                      l +
                                      " === '' || " +
                                      l +
                                      " === 0 || " +
                                      l +
                                      " === false) " +
                                      P +
                                      " = null; ")
                                  : "array" == e.opts.coerceTypes &&
                                    "array" == I &&
                                    (r +=
                                      " if (" +
                                      w +
                                      " == 'string' || " +
                                      w +
                                      " == 'number' || " +
                                      w +
                                      " == 'boolean' || " +
                                      l +
                                      " == null) " +
                                      P +
                                      " = [" +
                                      l +
                                      "]; ");
                    r += " " + S + " if (" + P + " === undefined) {   ";
                    var x = x || [];
                    x.push(r),
                      (r = ""),
                      !1 !== e.createErrors
                        ? ((r +=
                            " { keyword: 'type' , dataPath: (dataPath || '') + " +
                            e.errorPath +
                            " , schemaPath: " +
                            e.util.toQuotedString(b) +
                            " , params: { type: '"),
                          (r += y ? "" + m.join(",") : "" + m),
                          (r += "' } "),
                          !1 !== e.opts.messages &&
                            ((r += " , message: 'should be "),
                            (r += y ? "" + m.join(",") : "" + m),
                            (r += "' ")),
                          e.opts.verbose &&
                            (r +=
                              " , schema: validate.schema" +
                              v +
                              " , parentSchema: validate.schema" +
                              e.schemaPath +
                              " , data: " +
                              l +
                              " "),
                          (r += " } "))
                        : (r += " {} ");
                    var E = r;
                    (r = x.pop()),
                      !e.compositeRule && h
                        ? e.async
                          ? (r += " throw new ValidationError([" + E + "]); ")
                          : (r +=
                              " validate.errors = [" + E + "]; return false; ")
                        : (r +=
                            " var err = " +
                            E +
                            ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "),
                      (r += " } else {  ");
                    var $ = s ? "data" + (s - 1 || "") : "parentData",
                      L = s ? e.dataPathArr[s] : "parentDataProperty";
                    (r += " " + l + " = " + P + "; "),
                      s || (r += "if (" + $ + " !== undefined)"),
                      (r += " " + $ + "[" + L + "] = " + P + "; } } ");
                  }
                }
                if (
                  e.schema.$ref &&
                  (p = e.util.schemaHasRulesExcept(
                    e.schema,
                    e.RULES.all,
                    "$ref"
                  ))
                ) {
                  if ("fail" == e.opts.extendRefs)
                    throw new Error(
                      '$ref: validation keywords used in schema at path "' +
                        e.errSchemaPath +
                        '"'
                    );
                  "ignore" == e.opts.extendRefs
                    ? ((p = !1),
                      console.log(
                        '$ref: keywords ignored in schema at path "' +
                          e.errSchemaPath +
                          '"'
                      ))
                    : !0 !== e.opts.extendRefs &&
                      console.log(
                        '$ref: all keywords used in schema at path "' +
                          e.errSchemaPath +
                          '". It will change in the next major version, see issue #260. Use option { extendRefs: true } to keep current behaviour'
                      );
                }
                if (e.schema.$ref && !p)
                  (r += " " + e.RULES.all.$ref.code(e, "$ref") + " "),
                    h &&
                      ((r += " } if (errors === "),
                      (r += n ? "0" : "errs_" + o),
                      (r += ") { "),
                      (f += "}"));
                else {
                  var R = e.RULES;
                  if (R)
                    for (var D, O = -1, q = R.length - 1; O < q; )
                      if (
                        (function(e) {
                          for (var t = 0; t < e.rules.length; t++)
                            if (i(e.rules[t])) return !0;
                        })((D = R[(O += 1)]))
                      ) {
                        if (
                          (D.type &&
                            (r +=
                              " if (" +
                              e.util.checkDataType(D.type, l) +
                              ") { "),
                          e.opts.useDefaults && !e.compositeRule)
                        )
                          if ("object" == D.type && e.schema.properties) {
                            var k = e.schema.properties,
                              M = Object.keys(k),
                              C = M;
                            if (C)
                              for (var z, V = -1, U = C.length - 1; V < U; ) {
                                z = C[(V += 1)];
                                var F = k[z];
                                if (void 0 !== F.default) {
                                  var N = l + e.util.getProperty(z);
                                  (r +=
                                    "  if (" +
                                    N +
                                    " === undefined) " +
                                    N +
                                    " = "),
                                    "shared" == e.opts.useDefaults
                                      ? (r +=
                                          " " + e.useDefault(F.default) + " ")
                                      : (r +=
                                          " " +
                                          JSON.stringify(F.default) +
                                          " "),
                                    (r += "; ");
                                }
                              }
                          } else if (
                            "array" == D.type &&
                            Array.isArray(e.schema.items)
                          ) {
                            var B = e.schema.items;
                            if (B)
                              for (var T = -1, G = B.length - 1; T < G; )
                                if (void 0 !== (F = B[(T += 1)]).default) {
                                  var N = l + "[" + T + "]";
                                  (r +=
                                    "  if (" +
                                    N +
                                    " === undefined) " +
                                    N +
                                    " = "),
                                    "shared" == e.opts.useDefaults
                                      ? (r +=
                                          " " + e.useDefault(F.default) + " ")
                                      : (r +=
                                          " " +
                                          JSON.stringify(F.default) +
                                          " "),
                                    (r += "; ");
                                }
                          }
                        var Q = D.rules;
                        if (Q)
                          for (var W, H = -1, K = Q.length - 1; H < K; )
                            i((W = Q[(H += 1)])) &&
                              ((r += " " + W.code(e, W.keyword) + " "),
                              h && (u += "}"));
                        if (
                          (h && ((r += " " + u + " "), (u = "")),
                          D.type && ((r += " } "), m && m === D.type && !g))
                        ) {
                          var J = !0;
                          r += " else { ";
                          var v = e.schemaPath + ".type",
                            b = e.errSchemaPath + "/type",
                            x = x || [];
                          x.push(r),
                            (r = ""),
                            !1 !== e.createErrors
                              ? ((r +=
                                  " { keyword: 'type' , dataPath: (dataPath || '') + " +
                                  e.errorPath +
                                  " , schemaPath: " +
                                  e.util.toQuotedString(b) +
                                  " , params: { type: '"),
                                (r += y ? "" + m.join(",") : "" + m),
                                (r += "' } "),
                                !1 !== e.opts.messages &&
                                  ((r += " , message: 'should be "),
                                  (r += y ? "" + m.join(",") : "" + m),
                                  (r += "' ")),
                                e.opts.verbose &&
                                  (r +=
                                    " , schema: validate.schema" +
                                    v +
                                    " , parentSchema: validate.schema" +
                                    e.schemaPath +
                                    " , data: " +
                                    l +
                                    " "),
                                (r += " } "))
                              : (r += " {} ");
                          var E = r;
                          (r = x.pop()),
                            !e.compositeRule && h
                              ? e.async
                                ? (r +=
                                    " throw new ValidationError([" + E + "]); ")
                                : (r +=
                                    " validate.errors = [" +
                                    E +
                                    "]; return false; ")
                              : (r +=
                                  " var err = " +
                                  E +
                                  ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "),
                            (r += " } ");
                        }
                        h &&
                          ((r += " if (errors === "),
                          (r += n ? "0" : "errs_" + o),
                          (r += ") { "),
                          (f += "}"));
                      }
                }
                if (m && !J && !g) {
                  var v = e.schemaPath + ".type",
                    b = e.errSchemaPath + "/type",
                    j = y ? "checkDataTypes" : "checkDataType";
                  r += " if (" + e.util[j](m, l, !0) + ") {   ";
                  var x = x || [];
                  x.push(r),
                    (r = ""),
                    !1 !== e.createErrors
                      ? ((r +=
                          " { keyword: 'type' , dataPath: (dataPath || '') + " +
                          e.errorPath +
                          " , schemaPath: " +
                          e.util.toQuotedString(b) +
                          " , params: { type: '"),
                        (r += y ? "" + m.join(",") : "" + m),
                        (r += "' } "),
                        !1 !== e.opts.messages &&
                          ((r += " , message: 'should be "),
                          (r += y ? "" + m.join(",") : "" + m),
                          (r += "' ")),
                        e.opts.verbose &&
                          (r +=
                            " , schema: validate.schema" +
                            v +
                            " , parentSchema: validate.schema" +
                            e.schemaPath +
                            " , data: " +
                            l +
                            " "),
                        (r += " } "))
                      : (r += " {} ");
                  var E = r;
                  (r = x.pop()),
                    !e.compositeRule && h
                      ? e.async
                        ? (r += " throw new ValidationError([" + E + "]); ")
                        : (r +=
                            " validate.errors = [" + E + "]; return false; ")
                      : (r +=
                          " var err = " +
                          E +
                          ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "),
                    (r += " }");
                }
                return (
                  h && (r += " " + f + " "),
                  n
                    ? (a
                        ? ((r += " if (errors === 0) return true;           "),
                          (r += " else throw new ValidationError(vErrors); "))
                        : ((r += " validate.errors = vErrors; "),
                          (r += " return errors === 0;       ")),
                      (r += " }); return validate;"))
                    : (r += " var " + c + " = errors === errs_" + o + ";"),
                  (r = e.util.cleanUpCode(r)),
                  n && h && (r = e.util.cleanUpVarErrors(r, a)),
                  r
                );
              };
            },
            {}
          ],
          37: [
            function(e, t, i) {
              "use strict";
              var r = /^[a-z_$][a-z0-9_$\-]*$/i,
                a = e("./dotjs/custom");
              t.exports = {
                add: function(e, t) {
                  function i(e, t, i) {
                    for (var r, n = 0; n < o.length; n++) {
                      var s = o[n];
                      if (s.type == t) {
                        r = s;
                        break;
                      }
                    }
                    r || ((r = { type: t, rules: [] }), o.push(r));
                    var l = { keyword: e, definition: i, custom: !0, code: a };
                    r.rules.push(l), (o.custom[e] = l);
                  }
                  function n(e) {
                    if (!o.types[e]) throw new Error("Unknown type " + e);
                  }
                  var o = this.RULES;
                  if (o.keywords[e])
                    throw new Error("Keyword " + e + " is already defined");
                  if (!r.test(e))
                    throw new Error(
                      "Keyword " + e + " is not a valid identifier"
                    );
                  if (t) {
                    if (t.macro && void 0 !== t.valid)
                      throw new Error(
                        '"valid" option cannot be used with macro keywords'
                      );
                    var s = t.type;
                    if (Array.isArray(s)) {
                      var l,
                        d = s.length;
                      for (l = 0; l < d; l++) n(s[l]);
                      for (l = 0; l < d; l++) i(e, s[l], t);
                    } else s && n(s), i(e, s, t);
                    var p = !0 === t.$data && this._opts.v5;
                    if (p && !t.validate)
                      throw new Error(
                        '$data support: "validate" function is not defined'
                      );
                    var c = t.metaSchema;
                    c &&
                      (p &&
                        (c = {
                          anyOf: [
                            c,
                            {
                              $ref:
                                "https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/json-schema-v5.json#/definitions/$data"
                            }
                          ]
                        }),
                      (t.validateSchema = this.compile(c, !0)));
                  }
                  o.keywords[e] = o.all[e] = !0;
                },
                get: function(e) {
                  var t = this.RULES.custom[e];
                  return t ? t.definition : this.RULES.keywords[e] || !1;
                },
                remove: function(e) {
                  var t = this.RULES;
                  delete t.keywords[e], delete t.all[e], delete t.custom[e];
                  for (var i = 0; i < t.length; i++)
                    for (var r = t[i].rules, a = 0; a < r.length; a++)
                      if (r[a].keyword == e) {
                        r.splice(a, 1);
                        break;
                      }
                }
              };
            },
            { "./dotjs/custom": 21 }
          ],
          38: [
            function(e, t, i) {
              t.exports = {
                id: "http://json-schema.org/draft-04/schema#",
                $schema: "http://json-schema.org/draft-04/schema#",
                description: "Core schema meta-schema",
                definitions: {
                  schemaArray: {
                    type: "array",
                    minItems: 1,
                    items: { $ref: "#" }
                  },
                  positiveInteger: { type: "integer", minimum: 0 },
                  positiveIntegerDefault0: {
                    allOf: [
                      { $ref: "#/definitions/positiveInteger" },
                      { default: 0 }
                    ]
                  },
                  simpleTypes: {
                    enum: [
                      "array",
                      "boolean",
                      "integer",
                      "null",
                      "number",
                      "object",
                      "string"
                    ]
                  },
                  stringArray: {
                    type: "array",
                    items: { type: "string" },
                    minItems: 1,
                    uniqueItems: !0
                  }
                },
                type: "object",
                properties: {
                  id: { type: "string", format: "uri" },
                  $schema: { type: "string", format: "uri" },
                  title: { type: "string" },
                  description: { type: "string" },
                  default: {},
                  multipleOf: {
                    type: "number",
                    minimum: 0,
                    exclusiveMinimum: !0
                  },
                  maximum: { type: "number" },
                  exclusiveMaximum: { type: "boolean", default: !1 },
                  minimum: { type: "number" },
                  exclusiveMinimum: { type: "boolean", default: !1 },
                  maxLength: { $ref: "#/definitions/positiveInteger" },
                  minLength: { $ref: "#/definitions/positiveIntegerDefault0" },
                  pattern: { type: "string", format: "regex" },
                  additionalItems: {
                    anyOf: [{ type: "boolean" }, { $ref: "#" }],
                    default: {}
                  },
                  items: {
                    anyOf: [
                      { $ref: "#" },
                      { $ref: "#/definitions/schemaArray" }
                    ],
                    default: {}
                  },
                  maxItems: { $ref: "#/definitions/positiveInteger" },
                  minItems: { $ref: "#/definitions/positiveIntegerDefault0" },
                  uniqueItems: { type: "boolean", default: !1 },
                  maxProperties: { $ref: "#/definitions/positiveInteger" },
                  minProperties: {
                    $ref: "#/definitions/positiveIntegerDefault0"
                  },
                  required: { $ref: "#/definitions/stringArray" },
                  additionalProperties: {
                    anyOf: [{ type: "boolean" }, { $ref: "#" }],
                    default: {}
                  },
                  definitions: {
                    type: "object",
                    additionalProperties: { $ref: "#" },
                    default: {}
                  },
                  properties: {
                    type: "object",
                    additionalProperties: { $ref: "#" },
                    default: {}
                  },
                  patternProperties: {
                    type: "object",
                    additionalProperties: { $ref: "#" },
                    default: {}
                  },
                  dependencies: {
                    type: "object",
                    additionalProperties: {
                      anyOf: [
                        { $ref: "#" },
                        { $ref: "#/definitions/stringArray" }
                      ]
                    }
                  },
                  enum: { type: "array", minItems: 1, uniqueItems: !0 },
                  type: {
                    anyOf: [
                      { $ref: "#/definitions/simpleTypes" },
                      {
                        type: "array",
                        items: { $ref: "#/definitions/simpleTypes" },
                        minItems: 1,
                        uniqueItems: !0
                      }
                    ]
                  },
                  allOf: { $ref: "#/definitions/schemaArray" },
                  anyOf: { $ref: "#/definitions/schemaArray" },
                  oneOf: { $ref: "#/definitions/schemaArray" },
                  not: { $ref: "#" }
                },
                dependencies: {
                  exclusiveMaximum: ["maximum"],
                  exclusiveMinimum: ["minimum"]
                },
                default: {}
              };
            },
            {}
          ],
          39: [
            function(e, t, i) {
              t.exports = {
                id:
                  "https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/json-schema-v5.json#",
                $schema: "http://json-schema.org/draft-04/schema#",
                description: "Core schema meta-schema (v5 proposals)",
                definitions: {
                  schemaArray: {
                    type: "array",
                    minItems: 1,
                    items: { $ref: "#" }
                  },
                  positiveInteger: { type: "integer", minimum: 0 },
                  positiveIntegerDefault0: {
                    allOf: [
                      { $ref: "#/definitions/positiveInteger" },
                      { default: 0 }
                    ]
                  },
                  simpleTypes: {
                    enum: [
                      "array",
                      "boolean",
                      "integer",
                      "null",
                      "number",
                      "object",
                      "string"
                    ]
                  },
                  stringArray: {
                    type: "array",
                    items: { type: "string" },
                    minItems: 1,
                    uniqueItems: !0
                  },
                  $data: {
                    type: "object",
                    required: ["$data"],
                    properties: {
                      $data: {
                        type: "string",
                        anyOf: [
                          { format: "relative-json-pointer" },
                          { format: "json-pointer" }
                        ]
                      }
                    },
                    additionalProperties: !1
                  }
                },
                type: "object",
                properties: {
                  id: { type: "string", format: "uri" },
                  $schema: { type: "string", format: "uri" },
                  title: { type: "string" },
                  description: { type: "string" },
                  default: {},
                  multipleOf: {
                    anyOf: [
                      { type: "number", minimum: 0, exclusiveMinimum: !0 },
                      { $ref: "#/definitions/$data" }
                    ]
                  },
                  maximum: {
                    anyOf: [{ type: "number" }, { $ref: "#/definitions/$data" }]
                  },
                  exclusiveMaximum: {
                    anyOf: [
                      { type: "boolean", default: !1 },
                      { $ref: "#/definitions/$data" }
                    ]
                  },
                  minimum: {
                    anyOf: [{ type: "number" }, { $ref: "#/definitions/$data" }]
                  },
                  exclusiveMinimum: {
                    anyOf: [
                      { type: "boolean", default: !1 },
                      { $ref: "#/definitions/$data" }
                    ]
                  },
                  maxLength: {
                    anyOf: [
                      { $ref: "#/definitions/positiveInteger" },
                      { $ref: "#/definitions/$data" }
                    ]
                  },
                  minLength: {
                    anyOf: [
                      { $ref: "#/definitions/positiveIntegerDefault0" },
                      { $ref: "#/definitions/$data" }
                    ]
                  },
                  pattern: {
                    anyOf: [
                      { type: "string", format: "regex" },
                      { $ref: "#/definitions/$data" }
                    ]
                  },
                  additionalItems: {
                    anyOf: [
                      { type: "boolean" },
                      { $ref: "#" },
                      { $ref: "#/definitions/$data" }
                    ],
                    default: {}
                  },
                  items: {
                    anyOf: [
                      { $ref: "#" },
                      { $ref: "#/definitions/schemaArray" }
                    ],
                    default: {}
                  },
                  maxItems: {
                    anyOf: [
                      { $ref: "#/definitions/positiveInteger" },
                      { $ref: "#/definitions/$data" }
                    ]
                  },
                  minItems: {
                    anyOf: [
                      { $ref: "#/definitions/positiveIntegerDefault0" },
                      { $ref: "#/definitions/$data" }
                    ]
                  },
                  uniqueItems: {
                    anyOf: [
                      { type: "boolean", default: !1 },
                      { $ref: "#/definitions/$data" }
                    ]
                  },
                  maxProperties: {
                    anyOf: [
                      { $ref: "#/definitions/positiveInteger" },
                      { $ref: "#/definitions/$data" }
                    ]
                  },
                  minProperties: {
                    anyOf: [
                      { $ref: "#/definitions/positiveIntegerDefault0" },
                      { $ref: "#/definitions/$data" }
                    ]
                  },
                  required: {
                    anyOf: [
                      { $ref: "#/definitions/stringArray" },
                      { $ref: "#/definitions/$data" }
                    ]
                  },
                  additionalProperties: {
                    anyOf: [
                      { type: "boolean" },
                      { $ref: "#" },
                      { $ref: "#/definitions/$data" }
                    ],
                    default: {}
                  },
                  definitions: {
                    type: "object",
                    additionalProperties: { $ref: "#" },
                    default: {}
                  },
                  properties: {
                    type: "object",
                    additionalProperties: { $ref: "#" },
                    default: {}
                  },
                  patternProperties: {
                    type: "object",
                    additionalProperties: { $ref: "#" },
                    default: {}
                  },
                  dependencies: {
                    type: "object",
                    additionalProperties: {
                      anyOf: [
                        { $ref: "#" },
                        { $ref: "#/definitions/stringArray" }
                      ]
                    }
                  },
                  enum: {
                    anyOf: [
                      { type: "array", minItems: 1, uniqueItems: !0 },
                      { $ref: "#/definitions/$data" }
                    ]
                  },
                  type: {
                    anyOf: [
                      { $ref: "#/definitions/simpleTypes" },
                      {
                        type: "array",
                        items: { $ref: "#/definitions/simpleTypes" },
                        minItems: 1,
                        uniqueItems: !0
                      }
                    ]
                  },
                  allOf: { $ref: "#/definitions/schemaArray" },
                  anyOf: { $ref: "#/definitions/schemaArray" },
                  oneOf: { $ref: "#/definitions/schemaArray" },
                  not: { $ref: "#" },
                  format: {
                    anyOf: [{ type: "string" }, { $ref: "#/definitions/$data" }]
                  },
                  formatMaximum: {
                    anyOf: [{ type: "string" }, { $ref: "#/definitions/$data" }]
                  },
                  formatMinimum: {
                    anyOf: [{ type: "string" }, { $ref: "#/definitions/$data" }]
                  },
                  formatExclusiveMaximum: {
                    anyOf: [
                      { type: "boolean", default: !1 },
                      { $ref: "#/definitions/$data" }
                    ]
                  },
                  formatExclusiveMinimum: {
                    anyOf: [
                      { type: "boolean", default: !1 },
                      { $ref: "#/definitions/$data" }
                    ]
                  },
                  constant: { anyOf: [{}, { $ref: "#/definitions/$data" }] },
                  contains: { $ref: "#" },
                  patternGroups: {
                    type: "object",
                    additionalProperties: {
                      type: "object",
                      required: ["schema"],
                      properties: {
                        maximum: {
                          anyOf: [
                            { $ref: "#/definitions/positiveInteger" },
                            { $ref: "#/definitions/$data" }
                          ]
                        },
                        minimum: {
                          anyOf: [
                            { $ref: "#/definitions/positiveIntegerDefault0" },
                            { $ref: "#/definitions/$data" }
                          ]
                        },
                        schema: { $ref: "#" }
                      },
                      additionalProperties: !1
                    },
                    default: {}
                  },
                  switch: {
                    type: "array",
                    items: {
                      required: ["then"],
                      properties: {
                        if: { $ref: "#" },
                        then: { anyOf: [{ type: "boolean" }, { $ref: "#" }] },
                        continue: { type: "boolean" }
                      },
                      additionalProperties: !1,
                      dependencies: { continue: ["if"] }
                    }
                  }
                },
                dependencies: {
                  exclusiveMaximum: ["maximum"],
                  exclusiveMinimum: ["minimum"],
                  formatMaximum: ["format"],
                  formatMinimum: ["format"],
                  formatExclusiveMaximum: ["formatMaximum"],
                  formatExclusiveMinimum: ["formatMinimum"]
                },
                default: {}
              };
            },
            {}
          ],
          40: [
            function(e, t, i) {
              "use strict";
              function r(e) {
                return { not: { items: { not: e } } };
              }
              var a =
                "https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/json-schema-v5.json";
              t.exports = {
                enable: function(t) {
                  function i(e, i, r) {
                    var a = {
                      inline: r || n[e],
                      statements: !0,
                      errors: "full"
                    };
                    i && (a.type = i), t.addKeyword(e, a);
                  }
                  var n = {
                    switch: e("./dotjs/switch"),
                    constant: e("./dotjs/constant"),
                    _formatLimit: e("./dotjs/_formatLimit"),
                    patternRequired: e("./dotjs/patternRequired")
                  };
                  if (!1 !== t._opts.meta) {
                    var o = e("./refs/json-schema-v5.json");
                    t.addMetaSchema(o, a);
                  }
                  i("constant"),
                    t.addKeyword("contains", { type: "array", macro: r }),
                    i("formatMaximum", "string", n._formatLimit),
                    i("formatMinimum", "string", n._formatLimit),
                    t.addKeyword("formatExclusiveMaximum"),
                    t.addKeyword("formatExclusiveMinimum"),
                    t.addKeyword("patternGroups"),
                    i("patternRequired", "object"),
                    i("switch");
                },
                META_SCHEMA_ID: a
              };
            },
            {
              "./dotjs/_formatLimit": 13,
              "./dotjs/constant": 20,
              "./dotjs/patternRequired": 30,
              "./dotjs/switch": 34,
              "./refs/json-schema-v5.json": 39
            }
          ],
          41: [
            function(e, t, i) {
              function r(e) {
                var t = this,
                  i = s.call(arguments, 1);
                return new Promise(function(r, o) {
                  function s(t) {
                    var i;
                    try {
                      i = e.next(t);
                    } catch (e) {
                      return o(e);
                    }
                    d(i);
                  }
                  function l(t) {
                    var i;
                    try {
                      i = e.throw(t);
                    } catch (e) {
                      return o(e);
                    }
                    d(i);
                  }
                  function d(e) {
                    if (e.done) return r(e.value);
                    var i = a.call(t, e.value);
                    return i && n(i)
                      ? i.then(s, l)
                      : l(
                          new TypeError(
                            'You may only yield a function, promise, generator, array, or object, but the following object was passed: "' +
                              String(e.value) +
                              '"'
                          )
                        );
                  }
                  if (
                    ("function" == typeof e && (e = e.apply(t, i)),
                    !e || "function" != typeof e.next)
                  )
                    return r(e);
                  s();
                });
              }
              function a(e) {
                return e
                  ? n(e)
                    ? e
                    : (function(e) {
                        var t = e.constructor;
                        return (
                          !!t &&
                          ("GeneratorFunction" === t.name ||
                            "GeneratorFunction" === t.displayName ||
                            o(t.prototype))
                        );
                      })(e) || o(e)
                      ? r.call(this, e)
                      : "function" == typeof e
                        ? function(e) {
                            var t = this;
                            return new Promise(function(i, r) {
                              e.call(t, function(e, t) {
                                if (e) return r(e);
                                arguments.length > 2 &&
                                  (t = s.call(arguments, 1)),
                                  i(t);
                              });
                            });
                          }.call(this, e)
                        : Array.isArray(e)
                          ? function(e) {
                              return Promise.all(e.map(a, this));
                            }.call(this, e)
                          : (function(e) {
                              return Object == e.constructor;
                            })(e)
                            ? function(e) {
                                for (
                                  var t = new e.constructor(),
                                    i = Object.keys(e),
                                    r = [],
                                    o = 0;
                                  o < i.length;
                                  o++
                                ) {
                                  var s = i[o],
                                    l = a.call(this, e[s]);
                                  l && n(l)
                                    ? (function(e, i) {
                                        (t[i] = void 0),
                                          r.push(
                                            e.then(function(e) {
                                              t[i] = e;
                                            })
                                          );
                                      })(l, s)
                                    : (t[s] = e[s]);
                                }
                                return Promise.all(r).then(function() {
                                  return t;
                                });
                              }.call(this, e)
                            : e
                  : e;
              }
              function n(e) {
                return "function" == typeof e.then;
              }
              function o(e) {
                return (
                  "function" == typeof e.next && "function" == typeof e.throw
                );
              }
              var s = Array.prototype.slice;
              (t.exports = r.default = r.co = r),
                (r.wrap = function(e) {
                  function t() {
                    return r.call(this, e.apply(this, arguments));
                  }
                  return (t.__generatorFunction__ = e), t;
                });
            },
            {}
          ],
          42: [
            function(e, t, i) {
              var r = "undefined" != typeof JSON ? JSON : e("jsonify");
              t.exports = function(e, t) {
                t || (t = {}), "function" == typeof t && (t = { cmp: t });
                var i = t.space || "";
                "number" == typeof i && (i = Array(i + 1).join(" "));
                var o = "boolean" == typeof t.cycles && t.cycles,
                  s =
                    t.replacer ||
                    function(e, t) {
                      return t;
                    },
                  l =
                    t.cmp &&
                    (function(e) {
                      return function(t) {
                        return function(i, r) {
                          var a = { key: i, value: t[i] },
                            n = { key: r, value: t[r] };
                          return e(a, n);
                        };
                      };
                    })(t.cmp),
                  d = [];
                return (function e(t, p, c, h) {
                  var u = i ? "\n" + new Array(h + 1).join(i) : "",
                    f = i ? ": " : ":";
                  if (
                    (c &&
                      c.toJSON &&
                      "function" == typeof c.toJSON &&
                      (c = c.toJSON()),
                    void 0 !== (c = s.call(t, p, c)))
                  ) {
                    if ("object" != typeof c || null === c)
                      return r.stringify(c);
                    if (a(c)) {
                      for (var m = [], y = 0; y < c.length; y++) {
                        var g = e(c, y, c[y], h + 1) || r.stringify(null);
                        m.push(u + i + g);
                      }
                      return "[" + m.join(",") + u + "]";
                    }
                    if (-1 !== d.indexOf(c)) {
                      if (o) return r.stringify("__cycle__");
                      throw new TypeError(
                        "Converting circular structure to JSON"
                      );
                    }
                    d.push(c);
                    for (
                      var v = n(c).sort(l && l(c)), m = [], y = 0;
                      y < v.length;
                      y++
                    ) {
                      var p = v[y],
                        b = e(c, p, c[p], h + 1);
                      if (b) {
                        var j = r.stringify(p) + f + b;
                        m.push(u + i + j);
                      }
                    }
                    return (
                      d.splice(d.indexOf(c), 1), "{" + m.join(",") + u + "}"
                    );
                  }
                })({ "": e }, "", e, 0);
              };
              var a =
                  Array.isArray ||
                  function(e) {
                    return "[object Array]" === {}.toString.call(e);
                  },
                n =
                  Object.keys ||
                  function(e) {
                    var t =
                        Object.prototype.hasOwnProperty ||
                        function() {
                          return !0;
                        },
                      i = [];
                    for (var r in e) t.call(e, r) && i.push(r);
                    return i;
                  };
            },
            { jsonify: 43 }
          ],
          43: [
            function(e, t, i) {
              (i.parse = e("./lib/parse")),
                (i.stringify = e("./lib/stringify"));
            },
            { "./lib/parse": 44, "./lib/stringify": 45 }
          ],
          44: [
            function(e, t, i) {
              var r,
                a,
                n,
                o,
                s = {
                  '"': '"',
                  "\\": "\\",
                  "/": "/",
                  b: "\b",
                  f: "\f",
                  n: "\n",
                  r: "\r",
                  t: "\t"
                },
                l = function(e) {
                  throw { name: "SyntaxError", message: e, at: r, text: n };
                },
                d = function(e) {
                  return (
                    e &&
                      e !== a &&
                      l("Expected '" + e + "' instead of '" + a + "'"),
                    (a = n.charAt(r)),
                    (r += 1),
                    a
                  );
                },
                p = function() {
                  var e,
                    t = "";
                  for ("-" === a && ((t = "-"), d("-")); a >= "0" && a <= "9"; )
                    (t += a), d();
                  if ("." === a)
                    for (t += "."; d() && a >= "0" && a <= "9"; ) t += a;
                  if ("e" === a || "E" === a)
                    for (
                      t += a, d(), ("-" !== a && "+" !== a) || ((t += a), d());
                      a >= "0" && a <= "9";

                    )
                      (t += a), d();
                  if (((e = +t), isFinite(e))) return e;
                  l("Bad number");
                },
                c = function() {
                  var e,
                    t,
                    i,
                    r = "";
                  if ('"' === a)
                    for (; d(); ) {
                      if ('"' === a) return d(), r;
                      if ("\\" === a)
                        if ((d(), "u" === a)) {
                          for (
                            i = 0, t = 0;
                            t < 4 && ((e = parseInt(d(), 16)), isFinite(e));
                            t += 1
                          )
                            i = 16 * i + e;
                          r += String.fromCharCode(i);
                        } else {
                          if ("string" != typeof s[a]) break;
                          r += s[a];
                        }
                      else r += a;
                    }
                  l("Bad string");
                },
                h = function() {
                  for (; a && a <= " "; ) d();
                };
              (o = function() {
                switch ((h(), a)) {
                  case "{":
                    return (function() {
                      var e,
                        t = {};
                      if ("{" === a) {
                        if ((d("{"), h(), "}" === a)) return d("}"), t;
                        for (; a; ) {
                          if (
                            ((e = c()),
                            h(),
                            d(":"),
                            Object.hasOwnProperty.call(t, e) &&
                              l('Duplicate key "' + e + '"'),
                            (t[e] = o()),
                            h(),
                            "}" === a)
                          )
                            return d("}"), t;
                          d(","), h();
                        }
                      }
                      l("Bad object");
                    })();
                  case "[":
                    return (function() {
                      var e = [];
                      if ("[" === a) {
                        if ((d("["), h(), "]" === a)) return d("]"), e;
                        for (; a; ) {
                          if ((e.push(o()), h(), "]" === a)) return d("]"), e;
                          d(","), h();
                        }
                      }
                      l("Bad array");
                    })();
                  case '"':
                    return c();
                  case "-":
                    return p();
                  default:
                    return a >= "0" && a <= "9"
                      ? p()
                      : (function() {
                          switch (a) {
                            case "t":
                              return d("t"), d("r"), d("u"), d("e"), !0;
                            case "f":
                              return d("f"), d("a"), d("l"), d("s"), d("e"), !1;
                            case "n":
                              return d("n"), d("u"), d("l"), d("l"), null;
                          }
                          l("Unexpected '" + a + "'");
                        })();
                }
              }),
                (t.exports = function(e, t) {
                  var i;
                  return (
                    (n = e),
                    (r = 0),
                    (a = " "),
                    (i = o()),
                    h(),
                    a && l("Syntax error"),
                    "function" == typeof t
                      ? (function e(i, r) {
                          var a,
                            n,
                            o = i[r];
                          if (o && "object" == typeof o)
                            for (a in o)
                              Object.prototype.hasOwnProperty.call(o, a) &&
                                (void 0 !== (n = e(o, a))
                                  ? (o[a] = n)
                                  : delete o[a]);
                          return t.call(i, r, o);
                        })({ "": i }, "")
                      : i
                  );
                });
            },
            {}
          ],
          45: [
            function(e, t, i) {
              function r(e) {
                return (
                  (l.lastIndex = 0),
                  l.test(e)
                    ? '"' +
                      e.replace(l, function(e) {
                        var t = d[e];
                        return "string" == typeof t
                          ? t
                          : "\\u" +
                              ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
                      }) +
                      '"'
                    : '"' + e + '"'
                );
              }
              function a(e, t) {
                var i,
                  l,
                  d,
                  p,
                  c,
                  h = n,
                  u = t[e];
                switch (
                  (u &&
                    "object" == typeof u &&
                    "function" == typeof u.toJSON &&
                    (u = u.toJSON(e)),
                  "function" == typeof s && (u = s.call(t, e, u)),
                  typeof u)
                ) {
                  case "string":
                    return r(u);
                  case "number":
                    return isFinite(u) ? String(u) : "null";
                  case "boolean":
                  case "null":
                    return String(u);
                  case "object":
                    if (!u) return "null";
                    if (
                      ((n += o),
                      (c = []),
                      "[object Array]" === Object.prototype.toString.apply(u))
                    ) {
                      for (p = u.length, i = 0; i < p; i += 1)
                        c[i] = a(i, u) || "null";
                      return (
                        (d =
                          0 === c.length
                            ? "[]"
                            : n
                              ? "[\n" + n + c.join(",\n" + n) + "\n" + h + "]"
                              : "[" + c.join(",") + "]"),
                        (n = h),
                        d
                      );
                    }
                    if (s && "object" == typeof s)
                      for (p = s.length, i = 0; i < p; i += 1)
                        "string" == typeof (l = s[i]) &&
                          (d = a(l, u)) &&
                          c.push(r(l) + (n ? ": " : ":") + d);
                    else
                      for (l in u)
                        Object.prototype.hasOwnProperty.call(u, l) &&
                          (d = a(l, u)) &&
                          c.push(r(l) + (n ? ": " : ":") + d);
                    return (
                      (d =
                        0 === c.length
                          ? "{}"
                          : n
                            ? "{\n" + n + c.join(",\n" + n) + "\n" + h + "}"
                            : "{" + c.join(",") + "}"),
                      (n = h),
                      d
                    );
                }
              }
              var n,
                o,
                s,
                l = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                d = {
                  "\b": "\\b",
                  "\t": "\\t",
                  "\n": "\\n",
                  "\f": "\\f",
                  "\r": "\\r",
                  '"': '\\"',
                  "\\": "\\\\"
                };
              t.exports = function(e, t, i) {
                var r;
                if (((n = ""), (o = ""), "number" == typeof i))
                  for (r = 0; r < i; r += 1) o += " ";
                else "string" == typeof i && (o = i);
                if (
                  ((s = t),
                  t &&
                    "function" != typeof t &&
                    ("object" != typeof t || "number" != typeof t.length))
                )
                  throw new Error("JSON.stringify");
                return a("", { "": e });
              };
            },
            {}
          ],
          46: [
            function(e, t, i) {
              (function(e) {
                !(function(r) {
                  function a(e) {
                    throw new RangeError(L[e]);
                  }
                  function n(e, t) {
                    for (var i = e.length, r = []; i--; ) r[i] = t(e[i]);
                    return r;
                  }
                  function o(e, t) {
                    var i = e.split("@"),
                      r = "";
                    return (
                      i.length > 1 && ((r = i[0] + "@"), (e = i[1])),
                      (e = e.replace($, ".")),
                      r + n(e.split("."), t).join(".")
                    );
                  }
                  function s(e) {
                    for (var t, i, r = [], a = 0, n = e.length; a < n; )
                      (t = e.charCodeAt(a++)) >= 55296 && t <= 56319 && a < n
                        ? 56320 == (64512 & (i = e.charCodeAt(a++)))
                          ? r.push(((1023 & t) << 10) + (1023 & i) + 65536)
                          : (r.push(t), a--)
                        : r.push(t);
                    return r;
                  }
                  function l(e) {
                    return n(e, function(e) {
                      var t = "";
                      return (
                        e > 65535 &&
                          ((t += O((((e -= 65536) >>> 10) & 1023) | 55296)),
                          (e = 56320 | (1023 & e))),
                        (t += O(e))
                      );
                    }).join("");
                  }
                  function d(e) {
                    return e - 48 < 10
                      ? e - 22
                      : e - 65 < 26
                        ? e - 65
                        : e - 97 < 26
                          ? e - 97
                          : j;
                  }
                  function p(e, t) {
                    return e + 22 + 75 * (e < 26) - ((0 != t) << 5);
                  }
                  function c(e, t, i) {
                    var r = 0;
                    for (
                      e = i ? D(e / _) : e >> 1, e += D(e / t);
                      e > (R * P) >> 1;
                      r += j
                    )
                      e = D(e / R);
                    return D(r + ((R + 1) * e) / (e + S));
                  }
                  function h(e) {
                    var t,
                      i,
                      r,
                      n,
                      o,
                      s,
                      p,
                      h,
                      u,
                      f,
                      m = [],
                      y = e.length,
                      g = 0,
                      v = T,
                      S = I;
                    for (
                      (i = e.lastIndexOf(A)) < 0 && (i = 0), r = 0;
                      r < i;
                      ++r
                    )
                      e.charCodeAt(r) >= 128 && a("not-basic"),
                        m.push(e.charCodeAt(r));
                    for (n = i > 0 ? i + 1 : 0; n < y; ) {
                      for (
                        o = g, s = 1, p = j;
                        n >= y && a("invalid-input"),
                          ((h = d(e.charCodeAt(n++))) >= j ||
                            h > D((b - g) / s)) &&
                            a("overflow"),
                          (g += h * s),
                          !(h < (u = p <= S ? w : p >= S + P ? P : p - S));
                        p += j
                      )
                        s > D(b / (f = j - u)) && a("overflow"), (s *= f);
                      (t = m.length + 1),
                        (S = c(g - o, t, 0 == o)),
                        D(g / t) > b - v && a("overflow"),
                        (v += D(g / t)),
                        (g %= t),
                        m.splice(g++, 0, v);
                    }
                    return l(m);
                  }
                  function u(e) {
                    var t,
                      i,
                      r,
                      n,
                      o,
                      l,
                      d,
                      h,
                      u,
                      f,
                      m,
                      y,
                      g,
                      v,
                      S,
                      _ = [];
                    for (
                      e = s(e), y = e.length, t = T, i = 0, o = I, l = 0;
                      l < y;
                      ++l
                    )
                      (m = e[l]) < 128 && _.push(O(m));
                    for (r = n = _.length, n && _.push(A); r < y; ) {
                      for (d = b, l = 0; l < y; ++l)
                        (m = e[l]) >= t && m < d && (d = m);
                      for (
                        d - t > D((b - i) / (g = r + 1)) && a("overflow"),
                          i += (d - t) * g,
                          t = d,
                          l = 0;
                        l < y;
                        ++l
                      )
                        if (
                          ((m = e[l]) < t && ++i > b && a("overflow"), m == t)
                        ) {
                          for (
                            h = i, u = j;
                            !(h < (f = u <= o ? w : u >= o + P ? P : u - o));
                            u += j
                          )
                            (S = h - f),
                              (v = j - f),
                              _.push(O(p(f + (S % v), 0))),
                              (h = D(S / v));
                          _.push(O(p(h, 0))),
                            (o = c(i, g, r == n)),
                            (i = 0),
                            ++r;
                        }
                      ++i, ++t;
                    }
                    return _.join("");
                  }
                  var f = "object" == typeof i && i && !i.nodeType && i,
                    m = "object" == typeof t && t && !t.nodeType && t,
                    y = "object" == typeof e && e;
                  (y.global !== y && y.window !== y && y.self !== y) || (r = y);
                  var g,
                    v,
                    b = 2147483647,
                    j = 36,
                    w = 1,
                    P = 26,
                    S = 38,
                    _ = 700,
                    I = 72,
                    T = 128,
                    A = "-",
                    x = /^xn--/,
                    E = /[^\x20-\x7E]/,
                    $ = /[\x2E\u3002\uFF0E\uFF61]/g,
                    L = {
                      overflow:
                        "Overflow: input needs wider integers to process",
                      "not-basic":
                        "Illegal input >= 0x80 (not a basic code point)",
                      "invalid-input": "Invalid input"
                    },
                    R = j - w,
                    D = Math.floor,
                    O = String.fromCharCode;
                  if (
                    ((g = {
                      version: "1.4.1",
                      ucs2: { decode: s, encode: l },
                      decode: h,
                      encode: u,
                      toASCII: function(e) {
                        return o(e, function(e) {
                          return E.test(e) ? "xn--" + u(e) : e;
                        });
                      },
                      toUnicode: function(e) {
                        return o(e, function(e) {
                          return x.test(e) ? h(e.slice(4).toLowerCase()) : e;
                        });
                      }
                    }),
                    f && m)
                  )
                    if (t.exports == f) m.exports = g;
                    else for (v in g) g.hasOwnProperty(v) && (f[v] = g[v]);
                  else r.punycode = g;
                })(this);
              }.call(
                this,
                "undefined" != typeof global
                  ? global
                  : "undefined" != typeof self
                    ? self
                    : "undefined" != typeof window
                      ? window
                      : {}
              ));
            },
            {}
          ],
          47: [
            function(e, t, i) {
              function r(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
              }
              t.exports = function(e, t, i, n) {
                (t = t || "&"), (i = i || "=");
                var o = {};
                if ("string" != typeof e || 0 === e.length) return o;
                var s = /\+/g;
                e = e.split(t);
                var l = 1e3;
                n && "number" == typeof n.maxKeys && (l = n.maxKeys);
                var d = e.length;
                l > 0 && d > l && (d = l);
                for (var p = 0; p < d; ++p) {
                  var c,
                    h,
                    u,
                    f,
                    m = e[p].replace(s, "%20"),
                    y = m.indexOf(i);
                  y >= 0
                    ? ((c = m.substr(0, y)), (h = m.substr(y + 1)))
                    : ((c = m), (h = "")),
                    (u = decodeURIComponent(c)),
                    (f = decodeURIComponent(h)),
                    r(o, u)
                      ? a(o[u])
                        ? o[u].push(f)
                        : (o[u] = [o[u], f])
                      : (o[u] = f);
                }
                return o;
              };
              var a =
                Array.isArray ||
                function(e) {
                  return "[object Array]" === Object.prototype.toString.call(e);
                };
            },
            {}
          ],
          48: [
            function(e, t, i) {
              function r(e, t) {
                if (e.map) return e.map(t);
                for (var i = [], r = 0; r < e.length; r++) i.push(t(e[r], r));
                return i;
              }
              var a = function(e) {
                switch (typeof e) {
                  case "string":
                    return e;
                  case "boolean":
                    return e ? "true" : "false";
                  case "number":
                    return isFinite(e) ? e : "";
                  default:
                    return "";
                }
              };
              t.exports = function(e, t, i, s) {
                return (
                  (t = t || "&"),
                  (i = i || "="),
                  null === e && (e = void 0),
                  "object" == typeof e
                    ? r(o(e), function(o) {
                        var s = encodeURIComponent(a(o)) + i;
                        return n(e[o])
                          ? r(e[o], function(e) {
                              return s + encodeURIComponent(a(e));
                            }).join(t)
                          : s + encodeURIComponent(a(e[o]));
                      }).join(t)
                    : s
                      ? encodeURIComponent(a(s)) + i + encodeURIComponent(a(e))
                      : ""
                );
              };
              var n =
                  Array.isArray ||
                  function(e) {
                    return (
                      "[object Array]" === Object.prototype.toString.call(e)
                    );
                  },
                o =
                  Object.keys ||
                  function(e) {
                    var t = [];
                    for (var i in e)
                      Object.prototype.hasOwnProperty.call(e, i) && t.push(i);
                    return t;
                  };
            },
            {}
          ],
          49: [
            function(e, t, i) {
              "use strict";
              (i.decode = i.parse = e("./decode")),
                (i.encode = i.stringify = e("./encode"));
            },
            { "./decode": 47, "./encode": 48 }
          ],
          50: [
            function(e, t, i) {
              function r() {
                (this.protocol = null),
                  (this.slashes = null),
                  (this.auth = null),
                  (this.host = null),
                  (this.port = null),
                  (this.hostname = null),
                  (this.hash = null),
                  (this.search = null),
                  (this.query = null),
                  (this.pathname = null),
                  (this.path = null),
                  (this.href = null);
              }
              function a(e, t, i) {
                if (e && o.isObject(e) && e instanceof r) return e;
                var a = new r();
                return a.parse(e, t, i), a;
              }
              var n = e("punycode"),
                o = e("./util");
              (i.parse = a),
                (i.resolve = function(e, t) {
                  return a(e, !1, !0).resolve(t);
                }),
                (i.resolveObject = function(e, t) {
                  return e ? a(e, !1, !0).resolveObject(t) : t;
                }),
                (i.format = function(e) {
                  return (
                    o.isString(e) && (e = a(e)),
                    e instanceof r ? e.format() : r.prototype.format.call(e)
                  );
                }),
                (i.Url = r);
              var s = /^([a-z0-9.+-]+:)/i,
                l = /:[0-9]*$/,
                d = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
                p = ["{", "}", "|", "\\", "^", "`"].concat([
                  "<",
                  ">",
                  '"',
                  "`",
                  " ",
                  "\r",
                  "\n",
                  "\t"
                ]),
                c = ["'"].concat(p),
                h = ["%", "/", "?", ";", "#"].concat(c),
                u = ["/", "?", "#"],
                f = /^[+a-z0-9A-Z_-]{0,63}$/,
                m = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
                y = { javascript: !0, "javascript:": !0 },
                g = { javascript: !0, "javascript:": !0 },
                v = {
                  http: !0,
                  https: !0,
                  ftp: !0,
                  gopher: !0,
                  file: !0,
                  "http:": !0,
                  "https:": !0,
                  "ftp:": !0,
                  "gopher:": !0,
                  "file:": !0
                },
                b = e("querystring");
              (r.prototype.parse = function(e, t, i) {
                if (!o.isString(e))
                  throw new TypeError(
                    "Parameter 'url' must be a string, not " + typeof e
                  );
                var r = e.indexOf("?"),
                  a = -1 !== r && r < e.indexOf("#") ? "?" : "#",
                  l = e.split(a);
                l[0] = l[0].replace(/\\/g, "/");
                var p = (e = l.join(a));
                if (((p = p.trim()), !i && 1 === e.split("#").length)) {
                  var j = d.exec(p);
                  if (j)
                    return (
                      (this.path = p),
                      (this.href = p),
                      (this.pathname = j[1]),
                      j[2]
                        ? ((this.search = j[2]),
                          (this.query = t
                            ? b.parse(this.search.substr(1))
                            : this.search.substr(1)))
                        : t && ((this.search = ""), (this.query = {})),
                      this
                    );
                }
                var w = s.exec(p);
                if (w) {
                  var P = (w = w[0]).toLowerCase();
                  (this.protocol = P), (p = p.substr(w.length));
                }
                if (i || w || p.match(/^\/\/[^@\/]+@[^@\/]+/)) {
                  var S = "//" === p.substr(0, 2);
                  !S || (w && g[w]) || ((p = p.substr(2)), (this.slashes = !0));
                }
                if (!g[w] && (S || (w && !v[w]))) {
                  for (var _ = -1, I = 0; I < u.length; I++) {
                    var T = p.indexOf(u[I]);
                    -1 !== T && (-1 === _ || T < _) && (_ = T);
                  }
                  var A, x;
                  -1 !==
                    (x =
                      -1 === _ ? p.lastIndexOf("@") : p.lastIndexOf("@", _)) &&
                    ((A = p.slice(0, x)),
                    (p = p.slice(x + 1)),
                    (this.auth = decodeURIComponent(A))),
                    (_ = -1);
                  for (var I = 0; I < h.length; I++) {
                    var T = p.indexOf(h[I]);
                    -1 !== T && (-1 === _ || T < _) && (_ = T);
                  }
                  -1 === _ && (_ = p.length),
                    (this.host = p.slice(0, _)),
                    (p = p.slice(_)),
                    this.parseHost(),
                    (this.hostname = this.hostname || "");
                  var E =
                    "[" === this.hostname[0] &&
                    "]" === this.hostname[this.hostname.length - 1];
                  if (!E)
                    for (
                      var $ = this.hostname.split(/\./), I = 0, L = $.length;
                      I < L;
                      I++
                    ) {
                      var R = $[I];
                      if (R && !R.match(f)) {
                        for (var D = "", O = 0, q = R.length; O < q; O++)
                          R.charCodeAt(O) > 127 ? (D += "x") : (D += R[O]);
                        if (!D.match(f)) {
                          var k = $.slice(0, I),
                            M = $.slice(I + 1),
                            C = R.match(m);
                          C && (k.push(C[1]), M.unshift(C[2])),
                            M.length && (p = "/" + M.join(".") + p),
                            (this.hostname = k.join("."));
                          break;
                        }
                      }
                    }
                  this.hostname.length > 255
                    ? (this.hostname = "")
                    : (this.hostname = this.hostname.toLowerCase()),
                    E || (this.hostname = n.toASCII(this.hostname));
                  var z = this.port ? ":" + this.port : "",
                    V = this.hostname || "";
                  (this.host = V + z),
                    (this.href += this.host),
                    E &&
                      ((this.hostname = this.hostname.substr(
                        1,
                        this.hostname.length - 2
                      )),
                      "/" !== p[0] && (p = "/" + p));
                }
                if (!y[P])
                  for (var I = 0, L = c.length; I < L; I++) {
                    var U = c[I];
                    if (-1 !== p.indexOf(U)) {
                      var F = encodeURIComponent(U);
                      F === U && (F = escape(U)), (p = p.split(U).join(F));
                    }
                  }
                var N = p.indexOf("#");
                -1 !== N && ((this.hash = p.substr(N)), (p = p.slice(0, N)));
                var B = p.indexOf("?");
                if (
                  (-1 !== B
                    ? ((this.search = p.substr(B)),
                      (this.query = p.substr(B + 1)),
                      t && (this.query = b.parse(this.query)),
                      (p = p.slice(0, B)))
                    : t && ((this.search = ""), (this.query = {})),
                  p && (this.pathname = p),
                  v[P] &&
                    this.hostname &&
                    !this.pathname &&
                    (this.pathname = "/"),
                  this.pathname || this.search)
                ) {
                  var z = this.pathname || "",
                    G = this.search || "";
                  this.path = z + G;
                }
                return (this.href = this.format()), this;
              }),
                (r.prototype.format = function() {
                  var e = this.auth || "";
                  e &&
                    ((e = (e = encodeURIComponent(e)).replace(/%3A/i, ":")),
                    (e += "@"));
                  var t = this.protocol || "",
                    i = this.pathname || "",
                    r = this.hash || "",
                    a = !1,
                    n = "";
                  this.host
                    ? (a = e + this.host)
                    : this.hostname &&
                      ((a =
                        e +
                        (-1 === this.hostname.indexOf(":")
                          ? this.hostname
                          : "[" + this.hostname + "]")),
                      this.port && (a += ":" + this.port)),
                    this.query &&
                      o.isObject(this.query) &&
                      Object.keys(this.query).length &&
                      (n = b.stringify(this.query));
                  var s = this.search || (n && "?" + n) || "";
                  return (
                    t && ":" !== t.substr(-1) && (t += ":"),
                    this.slashes || ((!t || v[t]) && !1 !== a)
                      ? ((a = "//" + (a || "")),
                        i && "/" !== i.charAt(0) && (i = "/" + i))
                      : a || (a = ""),
                    r && "#" !== r.charAt(0) && (r = "#" + r),
                    s && "?" !== s.charAt(0) && (s = "?" + s),
                    (i = i.replace(/[?#]/g, function(e) {
                      return encodeURIComponent(e);
                    })),
                    (s = s.replace("#", "%23")),
                    t + a + i + s + r
                  );
                }),
                (r.prototype.resolve = function(e) {
                  return this.resolveObject(a(e, !1, !0)).format();
                }),
                (r.prototype.resolveObject = function(e) {
                  if (o.isString(e)) {
                    var t = new r();
                    t.parse(e, !1, !0), (e = t);
                  }
                  for (
                    var i = new r(), a = Object.keys(this), n = 0;
                    n < a.length;
                    n++
                  ) {
                    var s = a[n];
                    i[s] = this[s];
                  }
                  if (((i.hash = e.hash), "" === e.href))
                    return (i.href = i.format()), i;
                  if (e.slashes && !e.protocol) {
                    for (var l = Object.keys(e), d = 0; d < l.length; d++) {
                      var p = l[d];
                      "protocol" !== p && (i[p] = e[p]);
                    }
                    return (
                      v[i.protocol] &&
                        i.hostname &&
                        !i.pathname &&
                        (i.path = i.pathname = "/"),
                      (i.href = i.format()),
                      i
                    );
                  }
                  if (e.protocol && e.protocol !== i.protocol) {
                    if (!v[e.protocol]) {
                      for (var c = Object.keys(e), h = 0; h < c.length; h++) {
                        var u = c[h];
                        i[u] = e[u];
                      }
                      return (i.href = i.format()), i;
                    }
                    if (((i.protocol = e.protocol), e.host || g[e.protocol]))
                      i.pathname = e.pathname;
                    else {
                      for (
                        var f = (e.pathname || "").split("/");
                        f.length && !(e.host = f.shift());

                      );
                      e.host || (e.host = ""),
                        e.hostname || (e.hostname = ""),
                        "" !== f[0] && f.unshift(""),
                        f.length < 2 && f.unshift(""),
                        (i.pathname = f.join("/"));
                    }
                    if (
                      ((i.search = e.search),
                      (i.query = e.query),
                      (i.host = e.host || ""),
                      (i.auth = e.auth),
                      (i.hostname = e.hostname || e.host),
                      (i.port = e.port),
                      i.pathname || i.search)
                    ) {
                      var m = i.pathname || "",
                        y = i.search || "";
                      i.path = m + y;
                    }
                    return (
                      (i.slashes = i.slashes || e.slashes),
                      (i.href = i.format()),
                      i
                    );
                  }
                  var b = i.pathname && "/" === i.pathname.charAt(0),
                    j = e.host || (e.pathname && "/" === e.pathname.charAt(0)),
                    w = j || b || (i.host && e.pathname),
                    P = w,
                    S = (i.pathname && i.pathname.split("/")) || [],
                    f = (e.pathname && e.pathname.split("/")) || [],
                    _ = i.protocol && !v[i.protocol];
                  if (
                    (_ &&
                      ((i.hostname = ""),
                      (i.port = null),
                      i.host &&
                        ("" === S[0] ? (S[0] = i.host) : S.unshift(i.host)),
                      (i.host = ""),
                      e.protocol &&
                        ((e.hostname = null),
                        (e.port = null),
                        e.host &&
                          ("" === f[0] ? (f[0] = e.host) : f.unshift(e.host)),
                        (e.host = null)),
                      (w = w && ("" === f[0] || "" === S[0]))),
                    j)
                  )
                    (i.host = e.host || "" === e.host ? e.host : i.host),
                      (i.hostname =
                        e.hostname || "" === e.hostname
                          ? e.hostname
                          : i.hostname),
                      (i.search = e.search),
                      (i.query = e.query),
                      (S = f);
                  else if (f.length)
                    S || (S = []),
                      S.pop(),
                      (S = S.concat(f)),
                      (i.search = e.search),
                      (i.query = e.query);
                  else if (!o.isNullOrUndefined(e.search)) {
                    if (_) {
                      i.hostname = i.host = S.shift();
                      var I =
                        !!(i.host && i.host.indexOf("@") > 0) &&
                        i.host.split("@");
                      I &&
                        ((i.auth = I.shift()),
                        (i.host = i.hostname = I.shift()));
                    }
                    return (
                      (i.search = e.search),
                      (i.query = e.query),
                      (o.isNull(i.pathname) && o.isNull(i.search)) ||
                        (i.path =
                          (i.pathname ? i.pathname : "") +
                          (i.search ? i.search : "")),
                      (i.href = i.format()),
                      i
                    );
                  }
                  if (!S.length)
                    return (
                      (i.pathname = null),
                      i.search ? (i.path = "/" + i.search) : (i.path = null),
                      (i.href = i.format()),
                      i
                    );
                  for (
                    var T = S.slice(-1)[0],
                      A =
                        ((i.host || e.host || S.length > 1) &&
                          ("." === T || ".." === T)) ||
                        "" === T,
                      x = 0,
                      E = S.length;
                    E >= 0;
                    E--
                  )
                    "." === (T = S[E])
                      ? S.splice(E, 1)
                      : ".." === T
                        ? (S.splice(E, 1), x++)
                        : x && (S.splice(E, 1), x--);
                  if (!w && !P) for (; x--; x) S.unshift("..");
                  !w ||
                    "" === S[0] ||
                    (S[0] && "/" === S[0].charAt(0)) ||
                    S.unshift(""),
                    A && "/" !== S.join("/").substr(-1) && S.push("");
                  var $ = "" === S[0] || (S[0] && "/" === S[0].charAt(0));
                  if (_) {
                    i.hostname = i.host = $ ? "" : S.length ? S.shift() : "";
                    var I =
                      !!(i.host && i.host.indexOf("@") > 0) &&
                      i.host.split("@");
                    I &&
                      ((i.auth = I.shift()), (i.host = i.hostname = I.shift()));
                  }
                  return (
                    (w = w || (i.host && S.length)) && !$ && S.unshift(""),
                    S.length
                      ? (i.pathname = S.join("/"))
                      : ((i.pathname = null), (i.path = null)),
                    (o.isNull(i.pathname) && o.isNull(i.search)) ||
                      (i.path =
                        (i.pathname ? i.pathname : "") +
                        (i.search ? i.search : "")),
                    (i.auth = e.auth || i.auth),
                    (i.slashes = i.slashes || e.slashes),
                    (i.href = i.format()),
                    i
                  );
                }),
                (r.prototype.parseHost = function() {
                  var e = this.host,
                    t = l.exec(e);
                  t &&
                    (":" !== (t = t[0]) && (this.port = t.substr(1)),
                    (e = e.substr(0, e.length - t.length))),
                    e && (this.hostname = e);
                });
            },
            { "./util": 51, punycode: 46, querystring: 49 }
          ],
          51: [
            function(e, t, i) {
              "use strict";
              t.exports = {
                isString: function(e) {
                  return "string" == typeof e;
                },
                isObject: function(e) {
                  return "object" == typeof e && null !== e;
                },
                isNull: function(e) {
                  return null === e;
                },
                isNullOrUndefined: function(e) {
                  return null == e;
                }
              };
            },
            {}
          ],
          ajv: [
            function(e, t, i) {
              "use strict";
              function r(e) {
                return v.test(e);
              }
              function a(t) {
                function i(e, t) {
                  var i;
                  if ("string" == typeof e) {
                    if (!(i = P(e)))
                      throw new Error('no schema with key or ref "' + e + '"');
                  } else {
                    var r = I(e);
                    i = r.validate || T(r);
                  }
                  var a = i(t);
                  return !0 === i.$async
                    ? "*" == $._opts.async
                      ? m(a)
                      : a
                    : (($.errors = i.errors), a);
                }
                function y(e, t, i, r) {
                  if (Array.isArray(e))
                    for (var a = 0; a < e.length; a++) y(e[a], void 0, i, r);
                  else
                    E((t = o.normalizeId(t || e.id))),
                      ($._schemas[t] = I(e, i, r, !0));
                }
                function j(e, t, i) {
                  y(e, t, i, !0);
                }
                function w(e, t) {
                  var a,
                    n =
                      e.$schema ||
                      $._opts.defaultMeta ||
                      (function() {
                        var e = $._opts.meta;
                        return (
                          ($._opts.defaultMeta =
                            "object" == typeof e
                              ? e.id || e
                              : $._opts.v5
                                ? h.META_SCHEMA_ID
                                : g),
                          $._opts.defaultMeta
                        );
                      })(),
                    o = $._formats.uri;
                  $._formats.uri = "function" == typeof o ? r : v;
                  try {
                    a = i(n, e);
                  } finally {
                    $._formats.uri = o;
                  }
                  if (!a && t) {
                    var s = "schema is invalid: " + A();
                    if ("log" != $._opts.validateSchema) throw new Error(s);
                    console.error(s);
                  }
                  return a;
                }
                function P(e) {
                  var t = S(e);
                  switch (typeof t) {
                    case "object":
                      return t.validate || T(t);
                    case "string":
                      return P(t);
                    case "undefined":
                      return (function(e) {
                        var t = o.schema.call($, { schema: {} }, e);
                        if (t) {
                          var i = t.schema,
                            r = t.root,
                            a = t.baseId,
                            s = n.call($, i, r, void 0, a);
                          return (
                            ($._fragments[e] = new l({
                              ref: e,
                              fragment: !0,
                              schema: i,
                              root: r,
                              baseId: a,
                              validate: s
                            })),
                            s
                          );
                        }
                      })(e);
                  }
                }
                function S(e) {
                  return (
                    (e = o.normalizeId(e)),
                    $._schemas[e] || $._refs[e] || $._fragments[e]
                  );
                }
                function _(e, t) {
                  for (var i in e) {
                    var r = e[i];
                    r.meta ||
                      (t && !t.test(i)) ||
                      ($._cache.del(r.jsonStr), delete e[i]);
                  }
                }
                function I(e, t, i, r) {
                  if ("object" != typeof e)
                    throw new Error("schema should be object");
                  var a = d(e),
                    n = $._cache.get(a);
                  if (n) return n;
                  r = r || !1 !== $._opts.addUsedSchema;
                  var s = o.normalizeId(e.id);
                  s && r && E(s);
                  var p,
                    c = !1 !== $._opts.validateSchema && !t;
                  c && !(p = e.id && e.id == e.$schema) && w(e, !0);
                  var h = o.ids.call($, e),
                    u = new l({
                      id: s,
                      schema: e,
                      localRefs: h,
                      jsonStr: a,
                      meta: i
                    });
                  return (
                    "#" != s[0] && r && ($._refs[s] = u),
                    $._cache.put(a, u),
                    c && p && w(e, !0),
                    u
                  );
                }
                function T(e, t) {
                  function i() {
                    var t = e.validate,
                      r = t.apply(null, arguments);
                    return (i.errors = t.errors), r;
                  }
                  if (e.compiling)
                    return (
                      (e.validate = i),
                      (i.schema = e.schema),
                      (i.errors = null),
                      (i.root = t || i),
                      !0 === e.schema.$async && (i.$async = !0),
                      i
                    );
                  var r, a;
                  (e.compiling = !0),
                    e.meta && ((r = $._opts), ($._opts = $._metaOpts));
                  try {
                    a = n.call($, e.schema, t, e.localRefs);
                  } finally {
                    (e.compiling = !1), e.meta && ($._opts = r);
                  }
                  return (
                    (e.validate = a),
                    (e.refs = a.refs),
                    (e.refVal = a.refVal),
                    (e.root = a.root),
                    a
                  );
                }
                function A(e, t) {
                  if (!(e = e || $.errors)) return "No errors";
                  for (
                    var i =
                        void 0 === (t = t || {}).separator ? ", " : t.separator,
                      r = void 0 === t.dataVar ? "data" : t.dataVar,
                      a = "",
                      n = 0;
                    n < e.length;
                    n++
                  ) {
                    var o = e[n];
                    o && (a += r + o.dataPath + " " + o.message + i);
                  }
                  return a.slice(0, -i.length);
                }
                function x(e, t) {
                  "string" == typeof t && (t = new RegExp(t)),
                    ($._formats[e] = t);
                }
                function E(e) {
                  if ($._schemas[e] || $._refs[e])
                    throw new Error(
                      'schema with key or id "' + e + '" already exists'
                    );
                }
                if (!(this instanceof a)) return new a(t);
                var $ = this;
                (t = this._opts = u.copy(t) || {}),
                  (this._schemas = {}),
                  (this._refs = {}),
                  (this._fragments = {}),
                  (this._formats = p(t.format)),
                  (this._cache = t.cache || new s()),
                  (this._loadingSchemas = {}),
                  (this._compilations = []),
                  (this.RULES = c()),
                  (this.validate = i),
                  (this.compile = function(e, t) {
                    var i = I(e, void 0, t);
                    return i.validate || T(i);
                  }),
                  (this.addSchema = y),
                  (this.addMetaSchema = j),
                  (this.validateSchema = w),
                  (this.getSchema = P),
                  (this.removeSchema = function(e) {
                    if (e instanceof RegExp)
                      return _($._schemas, e), void _($._refs, e);
                    switch (typeof e) {
                      case "undefined":
                        return _($._schemas), _($._refs), void $._cache.clear();
                      case "string":
                        var t = S(e);
                        return (
                          t && $._cache.del(t.jsonStr),
                          delete $._schemas[e],
                          void delete $._refs[e]
                        );
                      case "object":
                        var i = d(e);
                        $._cache.del(i);
                        var r = e.id;
                        r &&
                          ((r = o.normalizeId(r)),
                          delete $._schemas[r],
                          delete $._refs[r]);
                    }
                  }),
                  (this.addFormat = x),
                  (this.errorsText = A),
                  (this._addSchema = I),
                  (this._compile = T),
                  (t.loopRequired = t.loopRequired || 1 / 0),
                  (t.async || t.transpile) && f.setup(t),
                  !0 === t.beautify && (t.beautify = { indent_size: 2 }),
                  "property" == t.errorDataPath &&
                    (t._errorDataPathProperty = !0),
                  (this._metaOpts = (function() {
                    for (var e = u.copy($._opts), t = 0; t < b.length; t++)
                      delete e[b[t]];
                    return e;
                  })()),
                  t.formats &&
                    (function() {
                      for (var e in $._opts.formats) x(e, $._opts.formats[e]);
                    })(),
                  !1 !== $._opts.meta &&
                    (j(e("./refs/json-schema-draft-04.json"), g, !0),
                    ($._refs["http://json-schema.org/schema"] = g)),
                  t.v5 && h.enable(this),
                  "object" == typeof t.meta && j(t.meta),
                  (function() {
                    var e = $._opts.schemas;
                    if (e)
                      if (Array.isArray(e)) y(e);
                      else for (var t in e) y(e[t], t);
                  })();
              }
              var n = e("./compile"),
                o = e("./compile/resolve"),
                s = e("./cache"),
                l = e("./compile/schema_obj"),
                d = e("json-stable-stringify"),
                p = e("./compile/formats"),
                c = e("./compile/rules"),
                h = e("./v5"),
                u = e("./compile/util"),
                f = e("./async"),
                m = e("co");
              (t.exports = a), (a.prototype.compileAsync = f.compile);
              var y = e("./keyword");
              (a.prototype.addKeyword = y.add),
                (a.prototype.getKeyword = y.get),
                (a.prototype.removeKeyword = y.remove),
                (a.ValidationError = e("./compile/validation_error"));
              var g = "http://json-schema.org/draft-04/schema",
                v = /^(?:(?:[a-z][a-z0-9+-.]*:)?\/\/)?[^\s]*$/i,
                b = ["removeAdditional", "useDefaults", "coerceTypes"];
            },
            {
              "./async": 1,
              "./cache": 2,
              "./compile": 6,
              "./compile/formats": 5,
              "./compile/resolve": 7,
              "./compile/rules": 8,
              "./compile/schema_obj": 9,
              "./compile/util": 11,
              "./compile/validation_error": 12,
              "./keyword": 37,
              "./refs/json-schema-draft-04.json": 38,
              "./v5": 40,
              co: 41,
              "json-stable-stringify": 42
            }
          ]
        },
        {},
        []
      )("ajv");
    }
  }
]),
  (function() {
    (this || window).webpackJsonp.registerAbsMids({
      "esri/webscene/validator": 1971,
      "esri/webscene/schema": 2156,
      "esri/webscene/libs/ajv/ajv.bundle": 2157
    });
  })();
