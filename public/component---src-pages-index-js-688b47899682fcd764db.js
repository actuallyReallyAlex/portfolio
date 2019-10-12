(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    295: function(e, a, t) {
      "use strict";
      t.r(a);
      var n = t(0),
        o = t.n(n),
        r = t(288),
        i = t(312),
        c = t(310),
        l = t(348),
        s = t.n(l),
        d = (t(18), t(1)),
        u = t(308),
        m = t(309),
        p = !1;
      var f = function(e) {
          var a =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            t = Object(u.a)(),
            n = Object(m.a)({ theme: t, name: "MuiUseMediaQuery", props: {} }),
            r = "function" == typeof e ? e(t) : e;
          r = r.replace(/^@media( ?)/m, "");
          var i = "undefined" != typeof window && void 0 !== window.matchMedia,
            c = Object(d.a)({}, n, {}, a),
            l = c.defaultMatches,
            s = void 0 !== l && l,
            f = c.noSsr,
            g = void 0 !== f && f,
            h = c.ssrMatchMedia,
            b = void 0 === h ? null : h,
            v = o.a.useState(function() {
              return (p || g) && i
                ? window.matchMedia(r).matches
                : b
                ? b(r).matches
                : s;
            }),
            y = v[0],
            E = v[1];
          return (
            o.a.useEffect(
              function() {
                var e = !0;
                if (((p = !0), i)) {
                  var a = window.matchMedia(r),
                    t = function() {
                      e && E(a.matches);
                    };
                  return (
                    t(),
                    a.addListener(t),
                    function() {
                      (e = !1), a.removeListener(t);
                    }
                  );
                }
              },
              [r, i]
            ),
            y
          );
        },
        g = t(313),
        h = t(350),
        b = t(349),
        v = t.n(b),
        y = {
          mail: "mailto:alex@alexlee.dev",
          github: "https://github.com/alexlee-dev/",
          npm: "https://www.npmjs.com/~alexlee-dev",
          twitter: "https://twitter.com/alexlee_dev",
          linkedin: "https://www.linkedin.com/in/alexlee-dev"
        },
        E = function(e) {
          return window.open(y[e], "_blank");
        },
        w = function() {
          return o.a.createElement(
            i.a,
            { className: v.a.container },
            o.a.createElement(
              g.a,
              {
                className: v.a.socialButton,
                onClick: function() {
                  return E("mail");
                }
              },
              o.a.createElement(h.a, { className: "far fa-envelope-open-text" })
            ),
            o.a.createElement(
              g.a,
              {
                className: v.a.socialButton,
                onClick: function() {
                  return E("github");
                }
              },
              o.a.createElement(h.a, { className: "fab fa-github" })
            ),
            o.a.createElement(
              g.a,
              {
                className: v.a.socialButton,
                onClick: function() {
                  return E("npm");
                }
              },
              o.a.createElement(h.a, { className: "fab fa-npm" })
            ),
            o.a.createElement(
              g.a,
              {
                className: v.a.socialButton,
                onClick: function() {
                  return E("twitter");
                }
              },
              o.a.createElement(h.a, { className: "fab fa-twitter" })
            ),
            o.a.createElement(
              g.a,
              {
                className: v.a.socialButton,
                onClick: function() {
                  return E("linkedin");
                }
              },
              o.a.createElement(h.a, { className: "fab fa-linkedin" })
            )
          );
        },
        k = function() {
          var e = f("(max-width:820px)"),
            a = f("(max-width:575px)");
          return o.a.createElement(
            i.a,
            { className: s.a.container },
            o.a.createElement(
              i.a,
              { className: s.a.typographyContainer },
              o.a.createElement(
                c.a,
                {
                  className: a ? s.a.smallest : e ? s.a.smaller : void 0,
                  variant: "h4"
                },
                "HELLO, WORLD."
              ),
              o.a.createElement(
                c.a,
                {
                  className: a ? s.a.smallest : e ? s.a.smaller : void 0,
                  variant: "h1"
                },
                "I'm Alex Lee"
              ),
              o.a.createElement(
                c.a,
                {
                  className: a ? s.a.smallest : e ? s.a.smaller : void 0,
                  variant: "h3"
                },
                "WEB DEVELOPER"
              )
            ),
            o.a.createElement(w, null)
          );
        },
        N = t(351),
        S = t(354),
        C = t(352),
        x = t.n(C),
        j = t(319),
        O = t(290),
        B = t(353),
        T = t.n(B),
        z = function() {
          var e = N.data;
          return o.a.createElement(
            i.a,
            { className: x.a.container },
            o.a.createElement(j.a, { heading: "About" }),
            o.a.createElement(S.a, { className: x.a.avatar, src: T.a }),
            Object(O.documentToReactComponents)(
              e.allContentfulAboutCopy.edges[0].node.content.json
            )
          );
        },
        A = t(355),
        F = t(326),
        I = t.n(F),
        R = t(321),
        D = t(60),
        L = function() {
          var e = A.data;
          return o.a.createElement(
            i.a,
            { className: I.a.container },
            o.a.createElement(
              i.a,
              { className: I.a.innerContainer },
              o.a.createElement(j.a, { heading: "Works" }),
              e.allContentfulPortfolioWork.edges
                .filter(function(e) {
                  return e.node.showcase;
                })
                .map(function(e) {
                  var a = e.node;
                  return o.a.createElement(R.a, {
                    description: a.description,
                    iconBackground: a.iconBackground,
                    iconString: a.iconString,
                    key: a.id,
                    slug: a.slug,
                    title: a.title
                  });
                }),
              o.a.createElement(
                D.a,
                { className: I.a.plainLink, to: "/works" },
                o.a.createElement(
                  g.a,
                  { variant: "contained" },
                  "View all works"
                )
              )
            )
          );
        },
        M = t(289);
      a.default = function() {
        return o.a.createElement(
          r.a,
          null,
          o.a.createElement(M.a, { title: "Home" }),
          o.a.createElement(k, null),
          o.a.createElement(z, null),
          o.a.createElement(L, null)
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
        p = t(24),
        f = t(143),
        g = t(100),
        h = o.a.forwardRef(function(e, a) {
          var t = e.classes,
            n = e.className,
            r = e.color,
            i = void 0 === r ? "primary" : r,
            c = e.component,
            p = void 0 === c ? "a" : c,
            h = e.onBlur,
            b = e.onFocus,
            v = e.TypographyClasses,
            y = e.underline,
            E = void 0 === y ? "hover" : y,
            w = e.variant,
            k = void 0 === w ? "inherit" : w,
            N = Object(d.a)(e, [
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
            S = Object(f.a)(),
            C = S.isFocusVisible,
            x = S.onBlurVisible,
            j = S.ref,
            O = o.a.useState(!1),
            B = O[0],
            T = O[1],
            z = Object(g.a)(a, j);
          return o.a.createElement(
            l.a,
            Object(s.a)(
              {
                className: Object(u.a)(
                  t.root,
                  t["underline".concat(Object(m.a)(E))],
                  n,
                  B && t.focusVisible,
                  { button: t.button }[p]
                ),
                classes: v,
                color: i,
                component: p,
                onBlur: function(e) {
                  B && (x(), T(!1)), h && h(e);
                },
                onFocus: function(e) {
                  C(e) && T(!0), b && b(e);
                },
                ref: z,
                variant: k
              },
              N
            )
          );
        }),
        b = Object(p.a)(
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
        )(h),
        v = t(327),
        y = t.n(v);
      a.a = function(e) {
        var a = e.description,
          t = e.iconBackground,
          n = e.iconString,
          s = e.slug,
          d = e.title;
        return o.a.createElement(
          r.a,
          { className: y.a.container },
          o.a.createElement(
            i.a,
            { className: y.a.avatar, style: { background: t } },
            o.a.createElement(c.a, { className: n + " " + y.a.icon })
          ),
          o.a.createElement(
            r.a,
            null,
            o.a.createElement(l.a, { className: y.a.title, variant: "h4" }, d),
            o.a.createElement(l.a, null, a),
            o.a.createElement(
              l.a,
              { className: y.a.link },
              o.a.createElement(b, { href: "/works/" + s }, "Learn More")
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
            p = e.fontSize,
            f = void 0 === p ? "default" : p,
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
                  "default" !== f && t["fontSize".concat(Object(s.a)(f))]
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
    351: function(e) {
      e.exports = JSON.parse(
        '{"data":{"allContentfulAboutCopy":{"edges":[{"node":{"content":{"json":{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[{"type":"bold"}],"value":"Hi. I\'m Alex, an Application Developer based in San Diego. I deliver optimized solutions to complex problems.","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"I aim to create purposeful and functional applications that go beyond the expectations of the user.","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"Currently, I\'m helping to develop the future of the online banking industry with U.S. Bank.","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"In my personal life, I love surfing and camping, and spending time with my dog Copper.","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"document"}}}}]}}}'
      );
    },
    353: function(e, a, t) {
      e.exports = t.p + "static/self-29b31f81673ab4a36a5da0a55724c3fd.jpg";
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
            p = e.sizes,
            f = e.src,
            g = e.srcSet,
            h = Object(o.a)(e, [
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
            b = null,
            v = f || g;
          return (
            (b = v
              ? i.a.createElement(
                  "img",
                  Object(n.a)(
                    { alt: t, src: f, srcSet: g, sizes: p, className: l.img },
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
                h
              ),
              b
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
    355: function(e) {
      e.exports = JSON.parse(
        '{"data":{"allContentfulPortfolioWork":{"edges":[{"node":{"id":"34ee8aeb-a400-5b61-a760-d9a91d4f2e2b","title":"Contractor Tool","description":"A tool used to contract employees. Ability to export important information in a specific format. A part of the Staffing Dashboard.","slug":"contractor-tool","iconString":"far fa-id-card","iconBackground":"linear-gradient( 135deg, #FCCF31 10%, #F55555 100%)","showcase":true}},{"node":{"id":"429fc224-14d2-5c60-b73e-a161ee9f2e5c","title":"Reposier","description":"Tasty CLI on the outside, simple integration with GitHub\'s API on the inside.","slug":"reposier","iconString":"far fa-code-merge","iconBackground":"linear-gradient( 135deg, #90F7EC 10%, #32CCBC 100%)","showcase":true}},{"node":{"id":"e7c14ea1-a1b5-59d3-a098-33bde7b5f377","title":"Hermes","description":"A game about space and junk.","slug":"hermes","iconString":"far fa-user-astronaut","iconBackground":"linear-gradient( 135deg, #CE9FFC 10%, #7367F0 100%)","showcase":true}},{"node":{"id":"78c9702f-1a0a-55f5-ac5d-32d40a32aad8","title":"SuperCamp Facilitator Page","description":"A staff showcase for SuperCamp. Used to show clients the staff of SuperCamp, and their credentials. Successful marketing campaign.","slug":"facilitator-page","iconString":"far fa-clipboard-user","iconBackground":"linear-gradient( 135deg, #43CBFF 10%, #9708CC 100%)","showcase":true}}]}}}'
      );
    }
  }
]);
//# sourceMappingURL=component---src-pages-index-js-688b47899682fcd764db.js.map
