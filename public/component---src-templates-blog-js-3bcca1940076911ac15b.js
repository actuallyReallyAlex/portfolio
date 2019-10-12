(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    292: function(e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, "query", function() {
          return d;
        });
      var n = t(0),
        c = t.n(n),
        l = t(288),
        r = t(289),
        o = t(312),
        s = t(310),
        i = t(343),
        m = t.n(i),
        u = t(290),
        d = "2298225412";
      a.default = function(e) {
        var a = e.data.contentfulBlogPost,
          t = a.title,
          n = a.excerpt,
          i = a.publishedDate,
          d = a.content;
        return c.a.createElement(
          l.a,
          { displayHeader: !0 },
          c.a.createElement(
            o.a,
            { className: m.a.container },
            c.a.createElement(r.a, { title: t }),
            c.a.createElement(s.a, { variant: "h1" }, t),
            c.a.createElement(
              o.a,
              { className: m.a.medSpace, fontStyle: "italic" },
              c.a.createElement(s.a, { variant: "subtitle1" }, n)
            ),
            c.a.createElement(
              o.a,
              { className: m.a.medSpace },
              c.a.createElement(s.a, null, i)
            ),
            c.a.createElement("hr", null),
            Object(u.documentToReactComponents)(d.json, {})
          )
        );
      };
    }
  }
]);
//# sourceMappingURL=component---src-templates-blog-js-3bcca1940076911ac15b.js.map
