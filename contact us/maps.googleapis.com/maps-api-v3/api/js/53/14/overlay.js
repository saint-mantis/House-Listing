google.maps.__gjsload__('overlay', function(_) {
    var Ty = function(a) {
            this.g = a
        },
        Roa = function() {},
        Uy = function(a) {
            a.Qq = a.Qq || new Roa;
            return a.Qq
        },
        Soa = function(a) {
            this.Ba = new _.ak(function() {
                var b = a.Qq;
                if (a.getPanes()) {
                    if (a.getProjection()) {
                        if (!b.lp && a.onAdd) a.onAdd();
                        b.lp = !0;
                        a.draw()
                    }
                } else {
                    if (b.lp)
                        if (a.onRemove) a.onRemove();
                        else a.remove();
                    b.lp = !1
                }
            }, 0)
        },
        Toa = function(a, b) {
            function c() {
                return _.bk(e.Ba)
            }
            var d = Uy(a),
                e = d.bo;
            e || (e = d.bo = new Soa(a));
            _.xb(d.Na || [], _.xh);
            var f = d.Wa = d.Wa || new _.yw,
                g = b.__gm;
            f.bindTo("zoom", g);
            f.bindTo("offset", g);
            f.bindTo("center",
                g, "projectionCenterQ");
            f.bindTo("projection", b);
            f.bindTo("projectionTopLeft", g);
            f = d.Ov = d.Ov || new Ty(f);
            f.bindTo("zoom", g);
            f.bindTo("offset", g);
            f.bindTo("projection", b);
            f.bindTo("projectionTopLeft", g);
            a.bindTo("projection", f, "outProjection");
            a.bindTo("panes", g);
            d.Na = [_.M(a, "panes_changed", c), _.M(g, "zoom_changed", c), _.M(g, "offset_changed", c), _.M(b, "projection_changed", c), _.M(g, "projectioncenterq_changed", c)];
            c();
            b instanceof _.Vh ? (_.Q(b, "Ox"), _.P(b, 148440)) : b instanceof _.mj && (_.Q(b, "Oxs"), _.P(b, 181451))
        },
        Xoa = function(a) {
            if (a) {
                var b = a.getMap();
                if (Uoa(a) !== b && b && b instanceof _.Vh) {
                    var c = b.__gm;
                    c.overlayLayer ? a.__gmop = new Voa(b, a, c.overlayLayer) : c.h.then(function(d) {
                        d = d.ha;
                        var e = new Vy(b, d);
                        d.ub(e);
                        c.overlayLayer = e;
                        Woa(a);
                        Xoa(a)
                    })
                }
            }
        },
        Woa = function(a) {
            if (a) {
                var b = a.__gmop;
                b && (a.__gmop = null, b.g.unbindAll(), b.g.set("panes", null), b.g.set("projection", null), b.j.Gd(b), b.h && (b.h = !1, b.g.onRemove ? b.g.onRemove() : b.g.remove()))
            }
        },
        Uoa = function(a) {
            return (a = a.__gmop) ? a.map : null
        },
        Voa = function(a, b, c) {
            this.map = a;
            this.g =
                b;
            this.j = c;
            this.h = !1;
            _.Q(this.map, "Ox");
            _.P(this.map, 148440);
            c.pd(this)
        },
        Yoa = function(a, b) {
            a.g.get("projection") != b && (a.g.bindTo("panes", a.map.__gm), a.g.set("projection", b))
        },
        Vy = function(a, b) {
            this.o = a;
            this.j = b;
            this.g = null;
            this.h = []
        };
    _.Va(Ty, _.O);
    Ty.prototype.changed = function(a) {
        "outProjection" != a && (a = !!(this.get("offset") && this.get("projectionTopLeft") && this.get("projection") && _.rg(this.get("zoom"))), a == !this.get("outProjection") && this.set("outProjection", a ? this.g : null))
    };
    var Wy = {};
    _.Va(Soa, _.O);
    Wy.pd = function(a) {
        if (a) {
            var b = a.getMap();
            (Uy(a).wv || null) !== b && (b && Toa(a, b), Uy(a).wv = b)
        }
    };
    Wy.Gd = function(a) {
        var b = Uy(a),
            c = b.Wa;
        c && c.unbindAll();
        (c = b.Ov) && c.unbindAll();
        a.unbindAll();
        a.set("panes", null);
        a.set("projection", null);
        b.Na && _.xb(b.Na, _.xh);
        b.Na = null;
        b.bo && (b.bo.Ba.wc(), b.bo = null);
        delete Uy(a).wv
    };
    var Xy = {};
    Voa.prototype.draw = function() {
        this.h || (this.h = !0, this.g.onAdd && this.g.onAdd());
        this.g.draw && this.g.draw()
    };
    Vy.prototype.dispose = function() {};
    Vy.prototype.Jb = function(a, b, c, d, e, f, g, h) {
        var k = this.g = this.g || new _.sr(this.o, this.j, function() {});
        k.Jb(a, b, c, d, e, f, g, h);
        a = _.A(this.h);
        for (b = a.next(); !b.done; b = a.next()) b = b.value, Yoa(b, k), b.draw()
    };
    Vy.prototype.pd = function(a) {
        this.h.push(a);
        this.g && Yoa(a, this.g);
        this.j.refresh()
    };
    Vy.prototype.Gd = function(a) {
        _.Ab(this.h, a)
    };
    Xy.pd = Xoa;
    Xy.Gd = Woa;
    _.oh("overlay", {
        Js: function(a) {
            if (a) {
                (0, Wy.Gd)(a);
                (0, Xy.Gd)(a);
                var b = a.getMap();
                b && (b instanceof _.Vh ? (0, Xy.pd)(a) : (0, Wy.pd)(a))
            }
        },
        preventMapHitsFrom: function(a) {
            _.Vr(a, {
                Ad: function(b) {
                    _.Po(b.event.Ea)
                },
                xc: function(b) {
                    return _.Ar(b)
                },
                Lh: function(b) {
                    return _.Br(b)
                },
                fd: function(b) {
                    return _.Br(b)
                },
                Ec: function(b) {
                    return _.Cr(b)
                }
            }).Yi(!0)
        },
        preventMapHitsAndGesturesFrom: function(a) {
            a.addEventListener("click", _.th);
            a.addEventListener("contextmenu", _.th);
            a.addEventListener("dblclick", _.th);
            a.addEventListener("mousedown",
                _.th);
            a.addEventListener("mousemove", _.th);
            a.addEventListener("MSPointerDown", _.th);
            a.addEventListener("pointerdown", _.th);
            a.addEventListener("touchstart", _.th);
            a.addEventListener("wheel", _.th)
        }
    });
});