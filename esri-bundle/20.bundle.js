(window.webpackJsonp = window.webpackJsonp || []).push([
  [20],
  {
    1969: function(e, t, i) {
      var o, r;
      (o = [i(87), i(8)]),
        void 0 ===
          (r = function(e, t) {
            return t.createSubclass({
              declaredClass: "esri.portal.Bookmark",
              properties: {
                description: { type: String, json: { write: !0 } },
                thumbnailSource: { type: String, json: { write: !0 } },
                title: { type: String, json: { write: !0 } },
                viewpoint: { type: e, json: { write: !0 } }
              }
            });
          }.apply(null, o)) || (e.exports = r);
    }
  }
]),
  (function() {
    (this || window).webpackJsonp.registerAbsMids({
      "esri/portal/Bookmark": 1969
    });
  })();