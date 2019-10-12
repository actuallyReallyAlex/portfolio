(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    294: function(e, a, t) {
      "use strict";
      t.r(a);
      var n = t(356),
        o = t(0),
        r = t.n(o),
        i = t(288),
        c = t(312),
        l = t(319),
        s = t(326),
        d = t.n(s),
        u = t(321),
        m = t(289);
      a.default = function() {
        var e = n.data;
        return r.a.createElement(
          i.a,
          { displayHeader: !0 },
          r.a.createElement(m.a, { title: "Works" }),
          r.a.createElement(
            c.a,
            { className: d.a.container },
            r.a.createElement(
              c.a,
              null,
              r.a.createElement(l.a, { heading: "Works" }),
              e.allContentfulPortfolioWork.edges.map(function(e) {
                var a = e.node;
                return r.a.createElement(u.a, {
                  description: a.description,
                  iconBackground: a.iconBackground,
                  iconString: a.iconString,
                  key: a.id,
                  slug: a.slug,
                  title: a.title
                });
              })
            )
          )
        );
      };
    },
    319: function(e, a, t) {
      "use strict";
      var n = t(0),
        o = t.n(n),
        r = t(312),
        i = t(310),
        c = t(325),
        l = t.n(c);
      a.a = function(e) {
        var a = e.heading;
        return o.a.createElement(
          r.a,
          { className: l.a.container },
          o.a.createElement(i.a, { variant: "h2" }, a)
        );
      };
    },
    321: function(e, a, t) {
      "use strict";
      t(139);
      var n = t(0),
        o = t.n(n),
        r = t(312),
        i = t(354),
        c = t(350),
        l = t(310),
        s = t(1),
        d = t(3),
        u = (t(10), t(9)),
        m = t(28),
        f = t(24),
        p = t(143),
        g = t(100),
        b = o.a.forwardRef(function(e, a) {
          var t = e.classes,
            n = e.className,
            r = e.color,
            i = void 0 === r ? "primary" : r,
            c = e.component,
            f = void 0 === c ? "a" : c,
            b = e.onBlur,
            h = e.onFocus,
            v = e.TypographyClasses,
            S = e.underline,
            y = void 0 === S ? "hover" : S,
            k = e.variant,
            C = void 0 === k ? "inherit" : k,
            E = Object(d.a)(e, [
              "classes",
              "className",
              "color",
              "component",
              "onBlur",
              "onFocus",
              "TypographyClasses",
              "underline",
              "variant"
            ]),
            j = Object(p.a)(),
            w = j.isFocusVisible,
            N = j.onBlurVisible,
            O = j.ref,
            F = o.a.useState(!1),
            z = F[0],
            x = F[1],
            B = Object(g.a)(a, O);
          return o.a.createElement(
            l.a,
            Object(s.a)(
              {
                className: Object(u.a)(
                  t.root,
                  t["underline".concat(Object(m.a)(y))],
                  n,
                  z && t.focusVisible,
                  { button: t.button }[f]
                ),
                classes: v,
                color: i,
                component: f,
                onBlur: function(e) {
                  z && (N(), x(!1)), b && b(e);
                },
                onFocus: function(e) {
                  w(e) && x(!0), h && h(e);
                },
                ref: B,
                variant: C
              },
              E
            )
          );
        }),
        h = Object(f.a)(
          {
            root: {},
            underlineNone: { textDecoration: "none" },
            underlineHover: {
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" }
            },
            underlineAlways: { textDecoration: "underline" },
            button: {
              position: "relative",
              WebkitTapHighlightColor: "transparent",
              backgroundColor: "transparent",
              outline: 0,
              border: 0,
              margin: 0,
              borderRadius: 0,
              padding: 0,
              cursor: "pointer",
              userSelect: "none",
              verticalAlign: "middle",
              "-moz-appearance": "none",
              "-webkit-appearance": "none",
              "&::-moz-focus-inner": { borderStyle: "none" },
              "&$focusVisible": { outline: "auto" }
            },
            focusVisible: {}
          },
          { name: "MuiLink" }
        )(b),
        v = t(327),
        S = t.n(v);
      a.a = function(e) {
        var a = e.description,
          t = e.iconBackground,
          n = e.iconString,
          s = e.slug,
          d = e.title;
        return o.a.createElement(
          r.a,
          { className: S.a.container },
          o.a.createElement(
            i.a,
            { className: S.a.avatar, style: { background: t } },
            o.a.createElement(c.a, { className: n + " " + S.a.icon })
          ),
          o.a.createElement(
            r.a,
            null,
            o.a.createElement(l.a, { className: S.a.title, variant: "h4" }, d),
            o.a.createElement(l.a, null, a),
            o.a.createElement(
              l.a,
              { className: S.a.link },
              o.a.createElement(h, { href: "/works/" + s }, "Learn More")
            )
          )
        );
      };
    },
    350: function(e, a, t) {
      "use strict";
      var n = t(1),
        o = t(3),
        r = t(0),
        i = t.n(r),
        c = (t(10), t(9)),
        l = t(24),
        s = t(28),
        d = i.a.forwardRef(function(e, a) {
          var t = e.classes,
            r = e.className,
            l = e.color,
            d = void 0 === l ? "inherit" : l,
            u = e.component,
            m = void 0 === u ? "span" : u,
            f = e.fontSize,
            p = void 0 === f ? "default" : f,
            g = Object(o.a)(e, [
              "classes",
              "className",
              "color",
              "component",
              "fontSize"
            ]);
          return i.a.createElement(
            m,
            Object(n.a)(
              {
                className: Object(c.a)(
                  "material-icons",
                  t.root,
                  r,
                  "inherit" !== d && t["color".concat(Object(s.a)(d))],
                  "default" !== p && t["fontSize".concat(Object(s.a)(p))]
                ),
                "aria-hidden": !0,
                ref: a
              },
              g
            )
          );
        });
      (d.muiName = "Icon"),
        (a.a = Object(l.a)(
          function(e) {
            return {
              root: {
                userSelect: "none",
                fontSize: e.typography.pxToRem(24),
                width: "1em",
                height: "1em",
                overflow: "hidden",
                flexShrink: 0
              },
              colorPrimary: { color: e.palette.primary.main },
              colorSecondary: { color: e.palette.secondary.main },
              colorAction: { color: e.palette.action.active },
              colorError: { color: e.palette.error.main },
              colorDisabled: { color: e.palette.action.disabled },
              fontSizeInherit: { fontSize: "inherit" },
              fontSizeSmall: { fontSize: e.typography.pxToRem(20) },
              fontSizeLarge: { fontSize: e.typography.pxToRem(36) }
            };
          },
          { name: "MuiIcon" }
        )(d));
    },
    354: function(e, a, t) {
      "use strict";
      var n = t(1),
        o = t(3),
        r = t(0),
        i = t.n(r),
        c = (t(10), t(9)),
        l = t(24),
        s = i.a.forwardRef(function(e, a) {
          var t = e.alt,
            r = e.children,
            l = e.classes,
            s = e.className,
            d = e.component,
            u = void 0 === d ? "div" : d,
            m = e.imgProps,
            f = e.sizes,
            p = e.src,
            g = e.srcSet,
            b = Object(o.a)(e, [
              "alt",
              "children",
              "classes",
              "className",
              "component",
              "imgProps",
              "sizes",
              "src",
              "srcSet"
            ]),
            h = null,
            v = p || g;
          return (
            (h = v
              ? i.a.createElement(
                  "img",
                  Object(n.a)(
                    { alt: t, src: p, srcSet: g, sizes: f, className: l.img },
                    m
                  )
                )
              : r),
            i.a.createElement(
              u,
              Object(n.a)(
                {
                  className: Object(c.a)(
                    l.root,
                    l.system,
                    s,
                    !v && l.colorDefault
                  ),
                  ref: a
                },
                b
              ),
              h
            )
          );
        });
      a.a = Object(l.a)(
        function(e) {
          return {
            root: {
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              width: 40,
              height: 40,
              fontFamily: e.typography.fontFamily,
              fontSize: e.typography.pxToRem(20),
              lineHeight: 1,
              borderRadius: "50%",
              overflow: "hidden",
              userSelect: "none"
            },
            colorDefault: {
              color: e.palette.background.default,
              backgroundColor:
                "light" === e.palette.type
                  ? e.palette.grey[400]
                  : e.palette.grey[600]
            },
            img: {
              width: "100%",
              height: "100%",
              textAlign: "center",
              objectFit: "cover"
            }
          };
        },
        { name: "MuiAvatar" }
      )(s);
    },
    356: function(e) {
      e.exports = JSON.parse(
        '{"data":{"allContentfulPortfolioWork":{"edges":[{"node":{"id":"34ee8aeb-a400-5b61-a760-d9a91d4f2e2b","title":"Contractor Tool","description":"A tool used to contract employees. Ability to export important information in a specific format. A part of the Staffing Dashboard.","slug":"contractor-tool","iconString":"far fa-id-card","iconBackground":"linear-gradient( 135deg, #FCCF31 10%, #F55555 100%)"}},{"node":{"id":"429fc224-14d2-5c60-b73e-a161ee9f2e5c","title":"Reposier","description":"Tasty CLI on the outside, simple integration with GitHub\'s API on the inside.","slug":"reposier","iconString":"far fa-code-merge","iconBackground":"linear-gradient( 135deg, #90F7EC 10%, #32CCBC 100%)"}},{"node":{"id":"e7c14ea1-a1b5-59d3-a098-33bde7b5f377","title":"Hermes","description":"A game about space and junk.","slug":"hermes","iconString":"far fa-user-astronaut","iconBackground":"linear-gradient( 135deg, #CE9FFC 10%, #7367F0 100%)"}},{"node":{"id":"78c9702f-1a0a-55f5-ac5d-32d40a32aad8","title":"SuperCamp Facilitator Page","description":"A staff showcase for SuperCamp. Used to show clients the staff of SuperCamp, and their credentials. Successful marketing campaign.","slug":"facilitator-page","iconString":"far fa-clipboard-user","iconBackground":"linear-gradient( 135deg, #43CBFF 10%, #9708CC 100%)"}}]}}}'
      );
    }
  }
]);
//# sourceMappingURL=component---src-pages-works-js-747fef8433f0bff75604.js.map
