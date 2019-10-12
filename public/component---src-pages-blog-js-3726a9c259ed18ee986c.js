(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    296: function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a(345),
        o = a(0),
        r = a.n(o),
        s = a(289),
        l = a(288),
        p = a(310),
        d = a(60),
        i = a(346),
        c = a.n(i),
        u = function(e) {
          var t = e.publishedDate,
            a = e.slug,
            n = e.title;
          return r.a.createElement(
            "li",
            { className: c.a.post },
            r.a.createElement(
              d.a,
              { to: "/blog/" + a },
              r.a.createElement(p.a, { variant: "h2" }, n),
              r.a.createElement(p.a, { variant: "caption" }, t)
            )
          );
        },
        m = a(347),
        y = a.n(m),
        h = a(312);
      t.default = function() {
        var e = n.data;
        return r.a.createElement(
          l.a,
          { displayHeader: !0 },
          r.a.createElement(s.a, { title: "Blog" }),
          r.a.createElement(
            h.a,
            { className: y.a.container },
            r.a.createElement(
              "ol",
              { className: y.a.posts },
              e.allContentfulBlogPost.edges.map(function(e) {
                var t = e.node,
                  a = t.publishedDate,
                  n = t.title,
                  o = t.slug;
                return r.a.createElement(u, {
                  key: o,
                  publishedDate: a,
                  slug: o,
                  title: n
                });
              })
            )
          )
        );
      };
    },
    345: function(e) {
      e.exports = JSON.parse(
        '{"data":{"allContentfulBlogPost":{"edges":[{"node":{"title":"The Great Gatsby","slug":"gatsby","publishedDate":"October 10th, 2019","excerpt":"My experience creating a Gatsby site for the first time.","content":{"json":{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"It\'s pretty damn great!","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"I enjoyed learning more about GraphQL first hand. I like that it\'s easy to hook up any Gatsby plugin, and there are so many.","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"Converting this portfolio from a regular React site over to a Gatsby React site proved to be easier than I thought.","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"I\'m using ","nodeType":"text"},{"data":{"uri":"https://www.contentful.com/"},"content":[{"data":{},"marks":[],"value":"Contentful","nodeType":"text"}],"nodeType":"hyperlink"},{"data":{},"marks":[],"value":" to generate the content on this site.","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"Keep a lookout for more (and better) posts coming soon!","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"document"}}}}]}}}'
      );
    }
  }
]);
//# sourceMappingURL=component---src-pages-blog-js-3726a9c259ed18ee986c.js.map
