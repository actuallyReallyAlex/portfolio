(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    291: function(e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "query", function() {
          return f;
        });
      a(75);
      var n = a(0),
        r = a.n(n),
        c = a(288),
        o = a(290),
        i = a(312),
        l = a(310),
        s = a(313),
        d = a(289),
        u = a(342),
        m = a.n(u),
        f = "3520865454";
      t.default = function(e) {
        var t = {
            renderNode: {
              "embedded-asset-block": function(e) {
                var t = e.data.target.fields.title,
                  a = e.data.target.fields.file["en-US"],
                  n = a.contentType,
                  c = a.url;
                if (n.match(/(image)/))
                  return r.a.createElement("img", { alt: t, src: c });
              }
            }
          },
          a = e.data.contentfulPortfolioWork,
          n = a.contentLink,
          u = a.description,
          f = a.screenshot,
          p = a.sourceLink,
          E = a.title;
        return r.a.createElement(
          c.a,
          { displayHeader: !0 },
          r.a.createElement(
            i.a,
            { className: m.a.container },
            r.a.createElement(d.a, { title: E }),
            r.a.createElement(l.a, { variant: "h1" }, E),
            r.a.createElement(
              i.a,
              { className: m.a.medSpace, fontStyle: "italic" },
              r.a.createElement(l.a, { variant: "subtitle1" }, u)
            ),
            r.a.createElement(
              i.a,
              { className: m.a.buttonContainer + " " + m.a.medSpace },
              n &&
                r.a.createElement(
                  s.a,
                  {
                    color: "primary",
                    onClick: function() {
                      return window.open(n, "_blank");
                    },
                    variant: "contained"
                  },
                  "See it in action"
                ),
              p &&
                r.a.createElement(
                  s.a,
                  {
                    color: "secondary",
                    onClick: function() {
                      return window.open(p, "_blank");
                    },
                    variant: "contained"
                  },
                  "View source"
                )
            ),
            r.a.createElement("img", { alt: f.title, src: f.file.url }),
            r.a.createElement("hr", null),
            Object(o.documentToReactComponents)(
              e.data.contentfulPortfolioWork.caseStudy.json,
              t
            )
          )
        );
      };
    }
  }
]);
//# sourceMappingURL=component---src-templates-case-study-js-6aef3156f01f0de5f7b0.js.map
