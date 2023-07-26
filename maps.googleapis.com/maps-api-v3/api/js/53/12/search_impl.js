google.maps.__gjsload__('search_impl', function(_) {
    var Okb = function(a) {
            _.H.call(this, a)
        },
        Qkb = function(a) {
            a = a.toArray();
            Pkb || (Pkb = {
                J: "sssM",
                N: ["ss"]
            });
            return _.rd(a, Pkb, 1)
        },
        Rkb = function(a, b) {
            _.D(a.m, 3, b)
        },
        Skb = function(a) {
            _.H.call(this, a)
        },
        Tkb = function() {
            var a = _.Mk,
                b = _.Tj;
            this.h = _.Cd;
            this.g = _.Sl(_.Jv, a, _.yw + "/maps/api/js/LayersService.GetFeature", b)
        },
        Wkb = function(a, b, c) {
            var d = _.EG(new Tkb);
            c.Fi = (0, _.Ra)(d.load, d);
            c.clickable = 0 != a.get("clickable");
            _.PGa(c, _.tO(b));
            var e = [];
            e.push(_.M(c, "click", (0, _.Ra)(Ukb, null, a)));
            _.pb(["mouseover", "mouseout", "mousemove"],
                function(f) {
                    e.push(_.M(c, f, (0, _.Ra)(Vkb, null, a, f)))
                });
            e.push(_.M(a, "clickable_changed", function() {
                a.g.clickable = 0 != a.get("clickable")
            }));
            a.h = e
        },
        Ukb = function(a, b, c, d, e) {
            var f = null;
            if (e && (f = {
                    status: e.getStatus()
                }, 0 == e.getStatus())) {
                f.location = _.S(e.m, 2) ? new _.Ge(_.bo(_.J(e.m, 2, _.io).m, 1), _.bo(_.J(e.m, 2, _.io).m, 2)) : null;
                f.fields = {};
                for (var g = _.E(e.m, 3), h = 0; h < g; ++h) {
                    var k = _.gm(e.m, 3, _.zO, h);
                    f.fields[k.getKey()] = k.Ea()
                }
            }
            _.N(a, "click", b, c, d, f)
        },
        Vkb = function(a, b, c, d, e, f, g) {
            var h = null;
            f && (h = {
                title: f[1].title,
                snippet: f[1].snippet
            });
            _.N(a, b, c, d, e, h, g)
        },
        Xkb = function() {};
    _.B(Okb, _.H);
    Okb.prototype.Mb = function() {
        return _.L(this.m, 2)
    };
    var Pkb;
    _.B(Skb, _.H);
    Skb.prototype.getStatus = function() {
        return _.F(this.m, 1, -1)
    };
    Tkb.prototype.load = function(a, b) {
        function c(g) {
            g = new Skb(g);
            b(g)
        }
        var d = new Okb;
        _.D(d.m, 1, a.layerId.split("|")[0]);
        _.D(d.m, 2, a.featureId);
        Rkb(d, _.zd(_.Bd(this.h)));
        for (var e in a.parameters) {
            var f = _.ud(d.m, 4, _.zO);
            _.D(f.m, 1, e);
            _.D(f.m, 2, a.parameters[e])
        }
        a = Qkb(d);
        this.g(a, c, c);
        return a
    };
    Tkb.prototype.cancel = function() {
        throw Error("Not implemented");
    };
    Xkb.prototype.ty = function(a) {
        if (_.bj[15]) {
            var b = a.o,
                c = a.o = a.getMap();
            b && a.g && (a.j ? (b = b.__gm.j, b.set(b.get().Mf(a.g))) : a.g && _.kHa(a.g, b) && (_.pb(a.h || [], _.nf), a.h = null));
            if (c) {
                var d = a.get("layerId"),
                    e = a.get("spotlightDescription"),
                    f = a.get("paintExperimentIds"),
                    g = a.get("styler"),
                    h = a.get("mapsApiLayer"),
                    k = a.get("darkLaunch"),
                    l = a.get("mapFeatures"),
                    m = a.get("clickableCities"),
                    p = a.get("travelMapRequest"),
                    q = a.get("searchPipeMetadata"),
                    r = a.get("overlayLayer"),
                    t = a.get("caseExperimentIds"),
                    v = a.get("airQualityPipeMetadata"),
                    x = a.get("directionsPipeParameters");
                b = new _.uv;
                d = d.split("|");
                b.layerId = d[0];
                for (var z = 1; z < d.length; ++z) {
                    var y = _.A(d[z].split(":")),
                        G = y.next().value;
                    y = _.na(y);
                    b.parameters[G] = y.join(":")
                }
                e && (b.spotlightDescription = new _.Tt(e));
                f && (b.paintExperimentIds = f.slice(0));
                g && (b.styler = new _.qu(g));
                p && (b.travelMapRequest = new _.fv(p));
                h && (b.mapsApiLayer = new _.im(h));
                l && (b.mapFeatures = l);
                m && (b.clickableCities = m);
                q && (b.searchPipeMetadata = new _.Op(q));
                r && (b.overlayLayer = new _.Lt(r));
                t && (b.caseExperimentIds = t.slice(0));
                v && (b.airQualityPipeMetadata = new _.Ct(v));
                x && (b.directionsPipeParameters = new _.zt(x));
                b.darkLaunch = !!k;
                a.g = b;
                a.j = a.get("renderOnBaseMap");
                a.j ? (a = c.__gm.j, a.set(a.get().Td(b))) : Wkb(a, c, b);
                _.Q(c, "Lg");
                _.P(c, 148282)
            }
        }
    };
    _.df("search_impl", new Xkb);
});