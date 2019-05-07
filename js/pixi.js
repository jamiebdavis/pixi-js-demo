/*!
 * pixi.js - v5.0.1
 * Compiled Mon, 06 May 2019 04:28:08 UTC
 *
 * pixi.js is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */
var PIXI = function (t) {
    "use strict";
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function i(t) {
        return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
    }

    function r(t, e) {
        return t(e = {exports: {}}, e.exports), e.exports
    }

    var n = r(function (t, i) {
            !function (t) {
                var e = t.Promise, r = e && "resolve" in e && "reject" in e && "all" in e && "race" in e && function () {
                    var t;
                    return new e(function (e) {
                        t = e
                    }), "function" == typeof t
                }();
                i ? (i.Promise = r ? e : E, i.Polyfill = E) : r || (t.Promise = E);
                var n = "pending", o = "sealed", s = "fulfilled", a = "rejected", h = function () {
                };

                function u(t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                }

                var l, c = "undefined" != typeof setImmediate ? setImmediate : setTimeout, d = [];

                function p() {
                    for (var t = 0; t < d.length; t++) d[t][0](d[t][1]);
                    d = [], l = !1
                }

                function f(t, e) {
                    d.push([t, e]), l || (l = !0, c(p, 0))
                }

                function v(t) {
                    var e = t.owner, i = e.state_, r = e.data_, n = t[i], o = t.then;
                    if ("function" == typeof n) {
                        i = s;
                        try {
                            r = n(r)
                        } catch (t) {
                            _(o, t)
                        }
                    }
                    g(o, r) || (i === s && m(o, r), i === a && _(o, r))
                }

                function g(t, e) {
                    var i;
                    try {
                        if (t === e) throw new TypeError("A promises callback cannot return that same promise.");
                        if (e && ("function" == typeof e || "object" == typeof e)) {
                            var r = e.then;
                            if ("function" == typeof r) return r.call(e, function (r) {
                                i || (i = !0, e !== r ? m(t, r) : y(t, r))
                            }, function (e) {
                                i || (i = !0, _(t, e))
                            }), !0
                        }
                    } catch (e) {
                        return i || _(t, e), !0
                    }
                    return !1
                }

                function m(t, e) {
                    t !== e && g(t, e) || y(t, e)
                }

                function y(t, e) {
                    t.state_ === n && (t.state_ = o, t.data_ = e, f(b, t))
                }

                function _(t, e) {
                    t.state_ === n && (t.state_ = o, t.data_ = e, f(T, t))
                }

                function x(t) {
                    var e = t.then_;
                    t.then_ = void 0;
                    for (var i = 0; i < e.length; i++) v(e[i])
                }

                function b(t) {
                    t.state_ = s, x(t)
                }

                function T(t) {
                    t.state_ = a, x(t)
                }

                function E(t) {
                    if ("function" != typeof t) throw new TypeError("Promise constructor takes a function argument");
                    if (this instanceof E == !1) throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
                    this.then_ = [], function (t, e) {
                        function i(t) {
                            _(e, t)
                        }

                        try {
                            t(function (t) {
                                m(e, t)
                            }, i)
                        } catch (t) {
                            i(t)
                        }
                    }(t, this)
                }

                E.prototype = {
                    constructor: E, state_: n, then_: null, data_: void 0, then: function (t, e) {
                        var i = {owner: this, then: new this.constructor(h), fulfilled: t, rejected: e};
                        return this.state_ === s || this.state_ === a ? f(v, i) : this.then_.push(i), i.then
                    }, catch: function (t) {
                        return this.then(null, t)
                    }
                }, E.all = function (t) {
                    if (!u(t)) throw new TypeError("You must pass an array to Promise.all().");
                    return new this(function (e, i) {
                        var r = [], n = 0;

                        function o(t) {
                            return n++, function (i) {
                                r[t] = i, --n || e(r)
                            }
                        }

                        for (var s, a = 0; a < t.length; a++) (s = t[a]) && "function" == typeof s.then ? s.then(o(a), i) : r[a] = s;
                        n || e(r)
                    })
                }, E.race = function (t) {
                    if (!u(t)) throw new TypeError("You must pass an array to Promise.race().");
                    return new this(function (e, i) {
                        for (var r, n = 0; n < t.length; n++) (r = t[n]) && "function" == typeof r.then ? r.then(e, i) : e(r)
                    })
                }, E.resolve = function (t) {
                    return t && "object" == typeof t && t.constructor === this ? t : new this(function (e) {
                        e(t)
                    })
                }, E.reject = function (t) {
                    return new this(function (e, i) {
                        i(t)
                    })
                }
            }("undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : e)
        }), o = (n.Promise, n.Polyfill), s = Object.getOwnPropertySymbols, a = Object.prototype.hasOwnProperty,
        h = Object.prototype.propertyIsEnumerable;
    var u = function () {
        try {
            if (!Object.assign) return !1;
            var t = new String("abc");
            if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
            for (var e = {}, i = 0; i < 10; i++) e["_" + String.fromCharCode(i)] = i;
            if ("0123456789" !== Object.getOwnPropertyNames(e).map(function (t) {
                return e[t]
            }).join("")) return !1;
            var r = {};
            return "abcdefghijklmnopqrst".split("").forEach(function (t) {
                r[t] = t
            }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
        } catch (t) {
            return !1
        }
    }() ? Object.assign : function (t, e) {
        for (var i, r, n = arguments, o = function (t) {
            if (null == t) throw new TypeError("Object.assign cannot be called with null or undefined");
            return Object(t)
        }(t), u = 1; u < arguments.length; u++) {
            for (var l in i = Object(n[u])) a.call(i, l) && (o[l] = i[l]);
            if (s) {
                r = s(i);
                for (var c = 0; c < r.length; c++) h.call(i, r[c]) && (o[r[c]] = i[r[c]])
            }
        }
        return o
    };
    window.Promise || (window.Promise = o), Object.assign || (Object.assign = u);
    var l = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    if (Date.now && Date.prototype.getTime || (Date.now = function () {
        return (new Date).getTime()
    }), !l.performance || !l.performance.now) {
        var c = Date.now();
        l.performance || (l.performance = {}), l.performance.now = function () {
            return Date.now() - c
        }
    }
    for (var d = Date.now(), p = ["ms", "moz", "webkit", "o"], f = 0; f < p.length && !l.requestAnimationFrame; ++f) {
        var v = p[f];
        l.requestAnimationFrame = l[v + "RequestAnimationFrame"], l.cancelAnimationFrame = l[v + "CancelAnimationFrame"] || l[v + "CancelRequestAnimationFrame"]
    }
    l.requestAnimationFrame || (l.requestAnimationFrame = function (t) {
        if ("function" != typeof t) throw new TypeError(t + "is not a function");
        var e = Date.now(), i = 16 + d - e;
        return i < 0 && (i = 0), d = e, setTimeout(function () {
            d = Date.now(), t(performance.now())
        }, i)
    }), l.cancelAnimationFrame || (l.cancelAnimationFrame = function (t) {
        return clearTimeout(t)
    }), Math.sign || (Math.sign = function (t) {
        return 0 === (t = Number(t)) || isNaN(t) ? t : t > 0 ? 1 : -1
    }), Number.isInteger || (Number.isInteger = function (t) {
        return "number" == typeof t && isFinite(t) && Math.floor(t) === t
    }), window.ArrayBuffer || (window.ArrayBuffer = Array), window.Float32Array || (window.Float32Array = Array), window.Uint32Array || (window.Uint32Array = Array), window.Uint16Array || (window.Uint16Array = Array), window.Uint8Array || (window.Uint8Array = Array), window.Int32Array || (window.Int32Array = Array);
    var g = r(function (t) {
        !function (e) {
            var i = /iPhone/i, r = /iPod/i, n = /iPad/i, o = /\bAndroid(?:.+)Mobile\b/i, s = /Android/i,
                a = /\bAndroid(?:.+)SD4930UR\b/i, h = /\bAndroid(?:.+)(?:KF[A-Z]{2,4})\b/i, u = /Windows Phone/i,
                l = /\bWindows(?:.+)ARM\b/i, c = /BlackBerry/i, d = /BB10/i, p = /Opera Mini/i,
                f = /\b(CriOS|Chrome)(?:.+)Mobile/i, v = /\Mobile(?:.+)Firefox\b/i;

            function g(t, e) {
                return t.test(e)
            }

            function m(t) {
                var e = t || ("undefined" != typeof navigator ? navigator.userAgent : ""), m = e.split("[FBAN");
                void 0 !== m[1] && (e = m[0]), void 0 !== (m = e.split("Twitter"))[1] && (e = m[0]);
                var y = {
                    apple: {
                        phone: g(i, e) && !g(u, e),
                        ipod: g(r, e),
                        tablet: !g(i, e) && g(n, e) && !g(u, e),
                        device: (g(i, e) || g(r, e) || g(n, e)) && !g(u, e)
                    },
                    amazon: {phone: g(a, e), tablet: !g(a, e) && g(h, e), device: g(a, e) || g(h, e)},
                    android: {
                        phone: !g(u, e) && g(a, e) || !g(u, e) && g(o, e),
                        tablet: !g(u, e) && !g(a, e) && !g(o, e) && (g(h, e) || g(s, e)),
                        device: !g(u, e) && (g(a, e) || g(h, e) || g(o, e) || g(s, e))
                    },
                    windows: {phone: g(u, e), tablet: g(l, e), device: g(u, e) || g(l, e)},
                    other: {
                        blackberry: g(c, e),
                        blackberry10: g(d, e),
                        opera: g(p, e),
                        firefox: g(v, e),
                        chrome: g(f, e),
                        device: g(c, e) || g(d, e) || g(p, e) || g(v, e) || g(f, e)
                    }
                };
                return y.any = y.apple.device || y.android.device || y.windows.device || y.other.device, y.phone = y.apple.phone || y.android.phone || y.windows.phone, y.tablet = y.apple.tablet || y.android.tablet || y.windows.tablet, y
            }

            t.exports && "undefined" == typeof window ? t.exports = m : t.exports && "undefined" != typeof window ? t.exports = m() : e.isMobile = m()
        }(e)
    });
    var m = {
        MIPMAP_TEXTURES: 1,
        RESOLUTION: 1,
        FILTER_RESOLUTION: 1,
        SPRITE_MAX_TEXTURES: function (t) {
            var e = !0;
            if (g.tablet || g.phone) {
                if (e = !1, g.apple.device) {
                    var i = navigator.userAgent.match(/OS (\d+)_(\d+)?/);
                    i && parseInt(i[1], 10) >= 11 && (e = !0)
                }
                if (g.android.device) {
                    var r = navigator.userAgent.match(/Android\s([0-9.]*)/);
                    r && parseInt(r[1], 10) >= 7 && (e = !0)
                }
            }
            return e ? t : 4
        }(32),
        SPRITE_BATCH_SIZE: 4096,
        RENDER_OPTIONS: {
            view: null,
            antialias: !1,
            forceFXAA: !1,
            autoDensity: !1,
            transparent: !1,
            backgroundColor: 0,
            clearBeforeRender: !0,
            preserveDrawingBuffer: !1,
            width: 800,
            height: 600,
            legacy: !1
        },
        GC_MODE: 0,
        GC_MAX_IDLE: 3600,
        GC_MAX_CHECK_COUNT: 600,
        WRAP_MODE: 33071,
        SCALE_MODE: 1,
        PRECISION_VERTEX: "highp",
        PRECISION_FRAGMENT: g.apple.device ? "highp" : "mediump",
        CAN_UPLOAD_SAME_BUFFER: !g.apple.device,
        CREATE_IMAGE_BITMAP: !1,
        ROUND_PIXELS: !1
    }, y = r(function (t) {
        var e = Object.prototype.hasOwnProperty, i = "~";

        function r() {
        }

        function n(t, e, i) {
            this.fn = t, this.context = e, this.once = i || !1
        }

        function o(t, e, r, o, s) {
            if ("function" != typeof r) throw new TypeError("The listener must be a function");
            var a = new n(r, o || t, s), h = i ? i + e : e;
            return t._events[h] ? t._events[h].fn ? t._events[h] = [t._events[h], a] : t._events[h].push(a) : (t._events[h] = a, t._eventsCount++), t
        }

        function s(t, e) {
            0 == --t._eventsCount ? t._events = new r : delete t._events[e]
        }

        function a() {
            this._events = new r, this._eventsCount = 0
        }

        Object.create && (r.prototype = Object.create(null), (new r).__proto__ || (i = !1)), a.prototype.eventNames = function () {
            var t, r, n = [];
            if (0 === this._eventsCount) return n;
            for (r in t = this._events) e.call(t, r) && n.push(i ? r.slice(1) : r);
            return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(t)) : n
        }, a.prototype.listeners = function (t) {
            var e = i ? i + t : t, r = this._events[e];
            if (!r) return [];
            if (r.fn) return [r.fn];
            for (var n = 0, o = r.length, s = new Array(o); n < o; n++) s[n] = r[n].fn;
            return s
        }, a.prototype.listenerCount = function (t) {
            var e = i ? i + t : t, r = this._events[e];
            return r ? r.fn ? 1 : r.length : 0
        }, a.prototype.emit = function (t, e, r, n, o, s) {
            var a = arguments, h = i ? i + t : t;
            if (!this._events[h]) return !1;
            var u, l, c = this._events[h], d = arguments.length;
            if (c.fn) {
                switch (c.once && this.removeListener(t, c.fn, void 0, !0), d) {
                    case 1:
                        return c.fn.call(c.context), !0;
                    case 2:
                        return c.fn.call(c.context, e), !0;
                    case 3:
                        return c.fn.call(c.context, e, r), !0;
                    case 4:
                        return c.fn.call(c.context, e, r, n), !0;
                    case 5:
                        return c.fn.call(c.context, e, r, n, o), !0;
                    case 6:
                        return c.fn.call(c.context, e, r, n, o, s), !0
                }
                for (l = 1, u = new Array(d - 1); l < d; l++) u[l - 1] = a[l];
                c.fn.apply(c.context, u)
            } else {
                var p, f = c.length;
                for (l = 0; l < f; l++) switch (c[l].once && this.removeListener(t, c[l].fn, void 0, !0), d) {
                    case 1:
                        c[l].fn.call(c[l].context);
                        break;
                    case 2:
                        c[l].fn.call(c[l].context, e);
                        break;
                    case 3:
                        c[l].fn.call(c[l].context, e, r);
                        break;
                    case 4:
                        c[l].fn.call(c[l].context, e, r, n);
                        break;
                    default:
                        if (!u) for (p = 1, u = new Array(d - 1); p < d; p++) u[p - 1] = a[p];
                        c[l].fn.apply(c[l].context, u)
                }
            }
            return !0
        }, a.prototype.on = function (t, e, i) {
            return o(this, t, e, i, !1)
        }, a.prototype.once = function (t, e, i) {
            return o(this, t, e, i, !0)
        }, a.prototype.removeListener = function (t, e, r, n) {
            var o = i ? i + t : t;
            if (!this._events[o]) return this;
            if (!e) return s(this, o), this;
            var a = this._events[o];
            if (a.fn) a.fn !== e || n && !a.once || r && a.context !== r || s(this, o); else {
                for (var h = 0, u = [], l = a.length; h < l; h++) (a[h].fn !== e || n && !a[h].once || r && a[h].context !== r) && u.push(a[h]);
                u.length ? this._events[o] = 1 === u.length ? u[0] : u : s(this, o)
            }
            return this
        }, a.prototype.removeAllListeners = function (t) {
            var e;
            return t ? (e = i ? i + t : t, this._events[e] && s(this, e)) : (this._events = new r, this._eventsCount = 0), this
        }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = i, a.EventEmitter = a, t.exports = a
    }), _ = b, x = b;

    function b(t, e, i) {
        i = i || 2;
        var r, n, o, s, a, h, u, l = e && e.length, c = l ? e[0] * i : t.length, d = T(t, 0, c, i, !0), p = [];
        if (!d || d.next === d.prev) return p;
        if (l && (d = function (t, e, i, r) {
            var n, o, s, a, h, u = [];
            for (n = 0, o = e.length; n < o; n++) s = e[n] * r, a = n < o - 1 ? e[n + 1] * r : t.length, (h = T(t, s, a, r, !1)) === h.next && (h.steiner = !0), u.push(D(h));
            for (u.sort(O), n = 0; n < u.length; n++) C(u[n], i), i = E(i, i.next);
            return i
        }(t, e, d, i)), t.length > 80 * i) {
            r = o = t[0], n = s = t[1];
            for (var f = i; f < c; f += i) (a = t[f]) < r && (r = a), (h = t[f + 1]) < n && (n = h), a > o && (o = a), h > s && (s = h);
            u = 0 !== (u = Math.max(o - r, s - n)) ? 1 / u : 0
        }
        return w(d, p, i, r, n, u), p
    }

    function T(t, e, i, r, n) {
        var o, s;
        if (n === H(t, e, i, r) > 0) for (o = e; o < i; o += r) s = X(o, t[o], t[o + 1], s); else for (o = i - r; o >= e; o -= r) s = X(o, t[o], t[o + 1], s);
        return s && N(s, s.next) && (j(s), s = s.next), s
    }

    function E(t, e) {
        if (!t) return t;
        e || (e = t);
        var i, r = t;
        do {
            if (i = !1, r.steiner || !N(r, r.next) && 0 !== F(r.prev, r, r.next)) r = r.next; else {
                if (j(r), (r = e = r.prev) === r.next) break;
                i = !0
            }
        } while (i || r !== e);
        return e
    }

    function w(t, e, i, r, n, o, s) {
        if (t) {
            !s && o && function (t, e, i, r) {
                var n = t;
                do {
                    null === n.z && (n.z = M(n.x, n.y, e, i, r)), n.prevZ = n.prev, n.nextZ = n.next, n = n.next
                } while (n !== t);
                n.prevZ.nextZ = null, n.prevZ = null, function (t) {
                    var e, i, r, n, o, s, a, h, u = 1;
                    do {
                        for (i = t, t = null, o = null, s = 0; i;) {
                            for (s++, r = i, a = 0, e = 0; e < u && (a++, r = r.nextZ); e++) ;
                            for (h = u; a > 0 || h > 0 && r;) 0 !== a && (0 === h || !r || i.z <= r.z) ? (n = i, i = i.nextZ, a--) : (n = r, r = r.nextZ, h--), o ? o.nextZ = n : t = n, n.prevZ = o, o = n;
                            i = r
                        }
                        o.nextZ = null, u *= 2
                    } while (s > 1)
                }(n)
            }(t, r, n, o);
            for (var a, h, u = t; t.prev !== t.next;) if (a = t.prev, h = t.next, o ? P(t, r, n, o) : S(t)) e.push(a.i / i), e.push(t.i / i), e.push(h.i / i), j(t), t = h.next, u = h.next; else if ((t = h) === u) {
                s ? 1 === s ? w(t = I(t, e, i), e, i, r, n, o, 2) : 2 === s && A(t, e, i, r, n, o) : w(E(t), e, i, r, n, o, 1);
                break
            }
        }
    }

    function S(t) {
        var e = t.prev, i = t, r = t.next;
        if (F(e, i, r) >= 0) return !1;
        for (var n = t.next.next; n !== t.prev;) {
            if (R(e.x, e.y, i.x, i.y, r.x, r.y, n.x, n.y) && F(n.prev, n, n.next) >= 0) return !1;
            n = n.next
        }
        return !0
    }

    function P(t, e, i, r) {
        var n = t.prev, o = t, s = t.next;
        if (F(n, o, s) >= 0) return !1;
        for (var a = n.x < o.x ? n.x < s.x ? n.x : s.x : o.x < s.x ? o.x : s.x, h = n.y < o.y ? n.y < s.y ? n.y : s.y : o.y < s.y ? o.y : s.y, u = n.x > o.x ? n.x > s.x ? n.x : s.x : o.x > s.x ? o.x : s.x, l = n.y > o.y ? n.y > s.y ? n.y : s.y : o.y > s.y ? o.y : s.y, c = M(a, h, e, i, r), d = M(u, l, e, i, r), p = t.prevZ, f = t.nextZ; p && p.z >= c && f && f.z <= d;) {
            if (p !== t.prev && p !== t.next && R(n.x, n.y, o.x, o.y, s.x, s.y, p.x, p.y) && F(p.prev, p, p.next) >= 0) return !1;
            if (p = p.prevZ, f !== t.prev && f !== t.next && R(n.x, n.y, o.x, o.y, s.x, s.y, f.x, f.y) && F(f.prev, f, f.next) >= 0) return !1;
            f = f.nextZ
        }
        for (; p && p.z >= c;) {
            if (p !== t.prev && p !== t.next && R(n.x, n.y, o.x, o.y, s.x, s.y, p.x, p.y) && F(p.prev, p, p.next) >= 0) return !1;
            p = p.prevZ
        }
        for (; f && f.z <= d;) {
            if (f !== t.prev && f !== t.next && R(n.x, n.y, o.x, o.y, s.x, s.y, f.x, f.y) && F(f.prev, f, f.next) >= 0) return !1;
            f = f.nextZ
        }
        return !0
    }

    function I(t, e, i) {
        var r = t;
        do {
            var n = r.prev, o = r.next.next;
            !N(n, o) && U(n, r, r.next, o) && B(n, o) && B(o, n) && (e.push(n.i / i), e.push(r.i / i), e.push(o.i / i), j(r), j(r.next), r = t = o), r = r.next
        } while (r !== t);
        return r
    }

    function A(t, e, i, r, n, o) {
        var s = t;
        do {
            for (var a = s.next.next; a !== s.prev;) {
                if (s.i !== a.i && L(s, a)) {
                    var h = k(s, a);
                    return s = E(s, s.next), h = E(h, h.next), w(s, e, i, r, n, o), void w(h, e, i, r, n, o)
                }
                a = a.next
            }
            s = s.next
        } while (s !== t)
    }

    function O(t, e) {
        return t.x - e.x
    }

    function C(t, e) {
        if (e = function (t, e) {
            var i, r = e, n = t.x, o = t.y, s = -1 / 0;
            do {
                if (o <= r.y && o >= r.next.y && r.next.y !== r.y) {
                    var a = r.x + (o - r.y) * (r.next.x - r.x) / (r.next.y - r.y);
                    if (a <= n && a > s) {
                        if (s = a, a === n) {
                            if (o === r.y) return r;
                            if (o === r.next.y) return r.next
                        }
                        i = r.x < r.next.x ? r : r.next
                    }
                }
                r = r.next
            } while (r !== e);
            if (!i) return null;
            if (n === s) return i.prev;
            var h, u = i, l = i.x, c = i.y, d = 1 / 0;
            r = i.next;
            for (; r !== u;) n >= r.x && r.x >= l && n !== r.x && R(o < c ? n : s, o, l, c, o < c ? s : n, o, r.x, r.y) && ((h = Math.abs(o - r.y) / (n - r.x)) < d || h === d && r.x > i.x) && B(r, t) && (i = r, d = h), r = r.next;
            return i
        }(t, e)) {
            var i = k(e, t);
            E(i, i.next)
        }
    }

    function M(t, e, i, r, n) {
        return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - i) * n) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - r) * n) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1
    }

    function D(t) {
        var e = t, i = t;
        do {
            (e.x < i.x || e.x === i.x && e.y < i.y) && (i = e), e = e.next
        } while (e !== t);
        return i
    }

    function R(t, e, i, r, n, o, s, a) {
        return (n - s) * (e - a) - (t - s) * (o - a) >= 0 && (t - s) * (r - a) - (i - s) * (e - a) >= 0 && (i - s) * (o - a) - (n - s) * (r - a) >= 0
    }

    function L(t, e) {
        return t.next.i !== e.i && t.prev.i !== e.i && !function (t, e) {
            var i = t;
            do {
                if (i.i !== t.i && i.next.i !== t.i && i.i !== e.i && i.next.i !== e.i && U(i, i.next, t, e)) return !0;
                i = i.next
            } while (i !== t);
            return !1
        }(t, e) && B(t, e) && B(e, t) && function (t, e) {
            var i = t, r = !1, n = (t.x + e.x) / 2, o = (t.y + e.y) / 2;
            do {
                i.y > o != i.next.y > o && i.next.y !== i.y && n < (i.next.x - i.x) * (o - i.y) / (i.next.y - i.y) + i.x && (r = !r), i = i.next
            } while (i !== t);
            return r
        }(t, e)
    }

    function F(t, e, i) {
        return (e.y - t.y) * (i.x - e.x) - (e.x - t.x) * (i.y - e.y)
    }

    function N(t, e) {
        return t.x === e.x && t.y === e.y
    }

    function U(t, e, i, r) {
        return !!(N(t, e) && N(i, r) || N(t, r) && N(i, e)) || F(t, e, i) > 0 != F(t, e, r) > 0 && F(i, r, t) > 0 != F(i, r, e) > 0
    }

    function B(t, e) {
        return F(t.prev, t, t.next) < 0 ? F(t, e, t.next) >= 0 && F(t, t.prev, e) >= 0 : F(t, e, t.prev) < 0 || F(t, t.next, e) < 0
    }

    function k(t, e) {
        var i = new G(t.i, t.x, t.y), r = new G(e.i, e.x, e.y), n = t.next, o = e.prev;
        return t.next = e, e.prev = t, i.next = n, n.prev = i, r.next = i, i.prev = r, o.next = r, r.prev = o, r
    }

    function X(t, e, i, r) {
        var n = new G(t, e, i);
        return r ? (n.next = r.next, n.prev = r, r.next.prev = n, r.next = n) : (n.prev = n, n.next = n), n
    }

    function j(t) {
        t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), t.nextZ && (t.nextZ.prevZ = t.prevZ)
    }

    function G(t, e, i) {
        this.i = t, this.x = e, this.y = i, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
    }

    function H(t, e, i, r) {
        for (var n = 0, o = e, s = i - r; o < i; o += r) n += (t[s] - t[o]) * (t[o + 1] + t[s + 1]), s = o;
        return n
    }

    b.deviation = function (t, e, i, r) {
        var n = e && e.length, o = n ? e[0] * i : t.length, s = Math.abs(H(t, 0, o, i));
        if (n) for (var a = 0, h = e.length; a < h; a++) {
            var u = e[a] * i, l = a < h - 1 ? e[a + 1] * i : t.length;
            s -= Math.abs(H(t, u, l, i))
        }
        var c = 0;
        for (a = 0; a < r.length; a += 3) {
            var d = r[a] * i, p = r[a + 1] * i, f = r[a + 2] * i;
            c += Math.abs((t[d] - t[f]) * (t[p + 1] - t[d + 1]) - (t[d] - t[p]) * (t[f + 1] - t[d + 1]))
        }
        return 0 === s && 0 === c ? 0 : Math.abs((c - s) / s)
    }, b.flatten = function (t) {
        for (var e = t[0][0].length, i = {vertices: [], holes: [], dimensions: e}, r = 0, n = 0; n < t.length; n++) {
            for (var o = 0; o < t[n].length; o++) for (var s = 0; s < e; s++) i.vertices.push(t[n][o][s]);
            n > 0 && (r += t[n - 1].length, i.holes.push(r))
        }
        return i
    }, _.default = x;
    var Y = r(function (t, i) {
        !function (r) {
            var n = i && !i.nodeType && i, o = t && !t.nodeType && t, s = "object" == typeof e && e;
            s.global !== s && s.window !== s && s.self !== s || (r = s);
            var a, h, u = 2147483647, l = 36, c = 1, d = 26, p = 38, f = 700, v = 72, g = 128, m = "-", y = /^xn--/,
                _ = /[^\x20-\x7E]/, x = /[\x2E\u3002\uFF0E\uFF61]/g, b = {
                    overflow: "Overflow: input needs wider integers to process",
                    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                    "invalid-input": "Invalid input"
                }, T = l - c, E = Math.floor, w = String.fromCharCode;

            function S(t) {
                throw RangeError(b[t])
            }

            function P(t, e) {
                for (var i = t.length, r = []; i--;) r[i] = e(t[i]);
                return r
            }

            function I(t, e) {
                var i = t.split("@"), r = "";
                return i.length > 1 && (r = i[0] + "@", t = i[1]), r + P((t = t.replace(x, ".")).split("."), e).join(".")
            }

            function A(t) {
                for (var e, i, r = [], n = 0, o = t.length; n < o;) (e = t.charCodeAt(n++)) >= 55296 && e <= 56319 && n < o ? 56320 == (64512 & (i = t.charCodeAt(n++))) ? r.push(((1023 & e) << 10) + (1023 & i) + 65536) : (r.push(e), n--) : r.push(e);
                return r
            }

            function O(t) {
                return P(t, function (t) {
                    var e = "";
                    return t > 65535 && (e += w((t -= 65536) >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), e += w(t)
                }).join("")
            }

            function C(t, e) {
                return t + 22 + 75 * (t < 26) - ((0 != e) << 5)
            }

            function M(t, e, i) {
                var r = 0;
                for (t = i ? E(t / f) : t >> 1, t += E(t / e); t > T * d >> 1; r += l) t = E(t / T);
                return E(r + (T + 1) * t / (t + p))
            }

            function D(t) {
                var e, i, r, n, o, s, a, h, p, f, y, _ = [], x = t.length, b = 0, T = g, w = v;
                for ((i = t.lastIndexOf(m)) < 0 && (i = 0), r = 0; r < i; ++r) t.charCodeAt(r) >= 128 && S("not-basic"), _.push(t.charCodeAt(r));
                for (n = i > 0 ? i + 1 : 0; n < x;) {
                    for (o = b, s = 1, a = l; n >= x && S("invalid-input"), ((h = (y = t.charCodeAt(n++)) - 48 < 10 ? y - 22 : y - 65 < 26 ? y - 65 : y - 97 < 26 ? y - 97 : l) >= l || h > E((u - b) / s)) && S("overflow"), b += h * s, !(h < (p = a <= w ? c : a >= w + d ? d : a - w)); a += l) s > E(u / (f = l - p)) && S("overflow"), s *= f;
                    w = M(b - o, e = _.length + 1, 0 == o), E(b / e) > u - T && S("overflow"), T += E(b / e), b %= e, _.splice(b++, 0, T)
                }
                return O(_)
            }

            function R(t) {
                var e, i, r, n, o, s, a, h, p, f, y, _, x, b, T, P = [];
                for (_ = (t = A(t)).length, e = g, i = 0, o = v, s = 0; s < _; ++s) (y = t[s]) < 128 && P.push(w(y));
                for (r = n = P.length, n && P.push(m); r < _;) {
                    for (a = u, s = 0; s < _; ++s) (y = t[s]) >= e && y < a && (a = y);
                    for (a - e > E((u - i) / (x = r + 1)) && S("overflow"), i += (a - e) * x, e = a, s = 0; s < _; ++s) if ((y = t[s]) < e && ++i > u && S("overflow"), y == e) {
                        for (h = i, p = l; !(h < (f = p <= o ? c : p >= o + d ? d : p - o)); p += l) T = h - f, b = l - f, P.push(w(C(f + T % b, 0))), h = E(T / b);
                        P.push(w(C(h, 0))), o = M(i, x, r == n), i = 0, ++r
                    }
                    ++i, ++e
                }
                return P.join("")
            }

            if (a = {
                version: "1.3.2", ucs2: {decode: A, encode: O}, decode: D, encode: R, toASCII: function (t) {
                    return I(t, function (t) {
                        return _.test(t) ? "xn--" + R(t) : t
                    })
                }, toUnicode: function (t) {
                    return I(t, function (t) {
                        return y.test(t) ? D(t.slice(4).toLowerCase()) : t
                    })
                }
            }, n && o) if (t.exports == n) o.exports = a; else for (h in a) a.hasOwnProperty(h) && (n[h] = a[h]); else r.punycode = a
        }(e)
    }), z = {
        isString: function (t) {
            return "string" == typeof t
        }, isObject: function (t) {
            return "object" == typeof t && null !== t
        }, isNull: function (t) {
            return null === t
        }, isNullOrUndefined: function (t) {
            return null == t
        }
    };
    z.isString, z.isObject, z.isNull, z.isNullOrUndefined;

    function V(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }

    var W = function (t, e, i, r) {
        e = e || "&", i = i || "=";
        var n = {};
        if ("string" != typeof t || 0 === t.length) return n;
        var o = /\+/g;
        t = t.split(e);
        var s = 1e3;
        r && "number" == typeof r.maxKeys && (s = r.maxKeys);
        var a = t.length;
        s > 0 && a > s && (a = s);
        for (var h = 0; h < a; ++h) {
            var u, l, c, d, p = t[h].replace(o, "%20"), f = p.indexOf(i);
            f >= 0 ? (u = p.substr(0, f), l = p.substr(f + 1)) : (u = p, l = ""), c = decodeURIComponent(u), d = decodeURIComponent(l), V(n, c) ? Array.isArray(n[c]) ? n[c].push(d) : n[c] = [n[c], d] : n[c] = d
        }
        return n
    }, q = function (t) {
        switch (typeof t) {
            case"string":
                return t;
            case"boolean":
                return t ? "true" : "false";
            case"number":
                return isFinite(t) ? t : "";
            default:
                return ""
        }
    }, Z = function (t, e, i, r) {
        return e = e || "&", i = i || "=", null === t && (t = void 0), "object" == typeof t ? Object.keys(t).map(function (r) {
            var n = encodeURIComponent(q(r)) + i;
            return Array.isArray(t[r]) ? t[r].map(function (t) {
                return n + encodeURIComponent(q(t))
            }).join(e) : n + encodeURIComponent(q(t[r]))
        }).join(e) : r ? encodeURIComponent(q(r)) + i + encodeURIComponent(q(t)) : ""
    }, K = r(function (t, e) {
        e.decode = e.parse = W, e.encode = e.stringify = Z
    }), J = (K.decode, K.parse, K.encode, K.stringify, vt), Q = function (t, e) {
        return vt(t, !1, !0).resolve(e)
    }, $ = function (t, e) {
        if (!t) return e;
        return vt(t, !1, !0).resolveObject(e)
    }, tt = function (t) {
        z.isString(t) && (t = vt(t));
        if (!(t instanceof it)) return it.prototype.format.call(t);
        return t.format()
    }, et = it;

    function it() {
        this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
    }

    var rt = /^([a-z0-9.+-]+:)/i, nt = /:[0-9]*$/, ot = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
        st = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]), at = ["'"].concat(st),
        ht = ["%", "/", "?", ";", "#"].concat(at), ut = ["/", "?", "#"], lt = /^[+a-z0-9A-Z_-]{0,63}$/,
        ct = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, dt = {javascript: !0, "javascript:": !0},
        pt = {javascript: !0, "javascript:": !0}, ft = {
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
        };

    function vt(t, e, i) {
        if (t && z.isObject(t) && t instanceof it) return t;
        var r = new it;
        return r.parse(t, e, i), r
    }

    it.prototype.parse = function (t, e, i) {
        if (!z.isString(t)) throw new TypeError("Parameter 'url' must be a string, not " + typeof t);
        var r = t.indexOf("?"), n = -1 !== r && r < t.indexOf("#") ? "?" : "#", o = t.split(n);
        o[0] = o[0].replace(/\\/g, "/");
        var s = t = o.join(n);
        if (s = s.trim(), !i && 1 === t.split("#").length) {
            var a = ot.exec(s);
            if (a) return this.path = s, this.href = s, this.pathname = a[1], a[2] ? (this.search = a[2], this.query = e ? K.parse(this.search.substr(1)) : this.search.substr(1)) : e && (this.search = "", this.query = {}), this
        }
        var h = rt.exec(s);
        if (h) {
            var u = (h = h[0]).toLowerCase();
            this.protocol = u, s = s.substr(h.length)
        }
        if (i || h || s.match(/^\/\/[^@\/]+@[^@\/]+/)) {
            var l = "//" === s.substr(0, 2);
            !l || h && pt[h] || (s = s.substr(2), this.slashes = !0)
        }
        if (!pt[h] && (l || h && !ft[h])) {
            for (var c, d, p = -1, f = 0; f < ut.length; f++) {
                -1 !== (v = s.indexOf(ut[f])) && (-1 === p || v < p) && (p = v)
            }
            -1 !== (d = -1 === p ? s.lastIndexOf("@") : s.lastIndexOf("@", p)) && (c = s.slice(0, d), s = s.slice(d + 1), this.auth = decodeURIComponent(c)), p = -1;
            for (f = 0; f < ht.length; f++) {
                var v;
                -1 !== (v = s.indexOf(ht[f])) && (-1 === p || v < p) && (p = v)
            }
            -1 === p && (p = s.length), this.host = s.slice(0, p), s = s.slice(p), this.parseHost(), this.hostname = this.hostname || "";
            var g = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
            if (!g) for (var m = this.hostname.split(/\./), y = (f = 0, m.length); f < y; f++) {
                var _ = m[f];
                if (_ && !_.match(lt)) {
                    for (var x = "", b = 0, T = _.length; b < T; b++) _.charCodeAt(b) > 127 ? x += "x" : x += _[b];
                    if (!x.match(lt)) {
                        var E = m.slice(0, f), w = m.slice(f + 1), S = _.match(ct);
                        S && (E.push(S[1]), w.unshift(S[2])), w.length && (s = "/" + w.join(".") + s), this.hostname = E.join(".");
                        break
                    }
                }
            }
            this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), g || (this.hostname = Y.toASCII(this.hostname));
            var P = this.port ? ":" + this.port : "", I = this.hostname || "";
            this.host = I + P, this.href += this.host, g && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== s[0] && (s = "/" + s))
        }
        if (!dt[u]) for (f = 0, y = at.length; f < y; f++) {
            var A = at[f];
            if (-1 !== s.indexOf(A)) {
                var O = encodeURIComponent(A);
                O === A && (O = escape(A)), s = s.split(A).join(O)
            }
        }
        var C = s.indexOf("#");
        -1 !== C && (this.hash = s.substr(C), s = s.slice(0, C));
        var M = s.indexOf("?");
        if (-1 !== M ? (this.search = s.substr(M), this.query = s.substr(M + 1), e && (this.query = K.parse(this.query)), s = s.slice(0, M)) : e && (this.search = "", this.query = {}), s && (this.pathname = s), ft[u] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
            P = this.pathname || "";
            var D = this.search || "";
            this.path = P + D
        }
        return this.href = this.format(), this
    }, it.prototype.format = function () {
        var t = this.auth || "";
        t && (t = (t = encodeURIComponent(t)).replace(/%3A/i, ":"), t += "@");
        var e = this.protocol || "", i = this.pathname || "", r = this.hash || "", n = !1, o = "";
        this.host ? n = t + this.host : this.hostname && (n = t + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (n += ":" + this.port)), this.query && z.isObject(this.query) && Object.keys(this.query).length && (o = K.stringify(this.query));
        var s = this.search || o && "?" + o || "";
        return e && ":" !== e.substr(-1) && (e += ":"), this.slashes || (!e || ft[e]) && !1 !== n ? (n = "//" + (n || ""), i && "/" !== i.charAt(0) && (i = "/" + i)) : n || (n = ""), r && "#" !== r.charAt(0) && (r = "#" + r), s && "?" !== s.charAt(0) && (s = "?" + s), e + n + (i = i.replace(/[?#]/g, function (t) {
            return encodeURIComponent(t)
        })) + (s = s.replace("#", "%23")) + r
    }, it.prototype.resolve = function (t) {
        return this.resolveObject(vt(t, !1, !0)).format()
    }, it.prototype.resolveObject = function (t) {
        if (z.isString(t)) {
            var e = new it;
            e.parse(t, !1, !0), t = e
        }
        for (var i = new it, r = Object.keys(this), n = 0; n < r.length; n++) {
            var o = r[n];
            i[o] = this[o]
        }
        if (i.hash = t.hash, "" === t.href) return i.href = i.format(), i;
        if (t.slashes && !t.protocol) {
            for (var s = Object.keys(t), a = 0; a < s.length; a++) {
                var h = s[a];
                "protocol" !== h && (i[h] = t[h])
            }
            return ft[i.protocol] && i.hostname && !i.pathname && (i.path = i.pathname = "/"), i.href = i.format(), i
        }
        if (t.protocol && t.protocol !== i.protocol) {
            if (!ft[t.protocol]) {
                for (var u = Object.keys(t), l = 0; l < u.length; l++) {
                    var c = u[l];
                    i[c] = t[c]
                }
                return i.href = i.format(), i
            }
            if (i.protocol = t.protocol, t.host || pt[t.protocol]) i.pathname = t.pathname; else {
                for (var d = (t.pathname || "").split("/"); d.length && !(t.host = d.shift());) ;
                t.host || (t.host = ""), t.hostname || (t.hostname = ""), "" !== d[0] && d.unshift(""), d.length < 2 && d.unshift(""), i.pathname = d.join("/")
            }
            if (i.search = t.search, i.query = t.query, i.host = t.host || "", i.auth = t.auth, i.hostname = t.hostname || t.host, i.port = t.port, i.pathname || i.search) {
                var p = i.pathname || "", f = i.search || "";
                i.path = p + f
            }
            return i.slashes = i.slashes || t.slashes, i.href = i.format(), i
        }
        var v = i.pathname && "/" === i.pathname.charAt(0), g = t.host || t.pathname && "/" === t.pathname.charAt(0),
            m = g || v || i.host && t.pathname, y = m, _ = i.pathname && i.pathname.split("/") || [],
            x = (d = t.pathname && t.pathname.split("/") || [], i.protocol && !ft[i.protocol]);
        if (x && (i.hostname = "", i.port = null, i.host && ("" === _[0] ? _[0] = i.host : _.unshift(i.host)), i.host = "", t.protocol && (t.hostname = null, t.port = null, t.host && ("" === d[0] ? d[0] = t.host : d.unshift(t.host)), t.host = null), m = m && ("" === d[0] || "" === _[0])), g) i.host = t.host || "" === t.host ? t.host : i.host, i.hostname = t.hostname || "" === t.hostname ? t.hostname : i.hostname, i.search = t.search, i.query = t.query, _ = d; else if (d.length) _ || (_ = []), _.pop(), _ = _.concat(d), i.search = t.search, i.query = t.query; else if (!z.isNullOrUndefined(t.search)) {
            if (x) i.hostname = i.host = _.shift(), (S = !!(i.host && i.host.indexOf("@") > 0) && i.host.split("@")) && (i.auth = S.shift(), i.host = i.hostname = S.shift());
            return i.search = t.search, i.query = t.query, z.isNull(i.pathname) && z.isNull(i.search) || (i.path = (i.pathname ? i.pathname : "") + (i.search ? i.search : "")), i.href = i.format(), i
        }
        if (!_.length) return i.pathname = null, i.search ? i.path = "/" + i.search : i.path = null, i.href = i.format(), i;
        for (var b = _.slice(-1)[0], T = (i.host || t.host || _.length > 1) && ("." === b || ".." === b) || "" === b, E = 0, w = _.length; w >= 0; w--) "." === (b = _[w]) ? _.splice(w, 1) : ".." === b ? (_.splice(w, 1), E++) : E && (_.splice(w, 1), E--);
        if (!m && !y) for (; E--; E) _.unshift("..");
        !m || "" === _[0] || _[0] && "/" === _[0].charAt(0) || _.unshift(""), T && "/" !== _.join("/").substr(-1) && _.push("");
        var S, P = "" === _[0] || _[0] && "/" === _[0].charAt(0);
        x && (i.hostname = i.host = P ? "" : _.length ? _.shift() : "", (S = !!(i.host && i.host.indexOf("@") > 0) && i.host.split("@")) && (i.auth = S.shift(), i.host = i.hostname = S.shift()));
        return (m = m || i.host && _.length) && !P && _.unshift(""), _.length ? i.pathname = _.join("/") : (i.pathname = null, i.path = null), z.isNull(i.pathname) && z.isNull(i.search) || (i.path = (i.pathname ? i.pathname : "") + (i.search ? i.search : "")), i.auth = t.auth || i.auth, i.slashes = i.slashes || t.slashes, i.href = i.format(), i
    }, it.prototype.parseHost = function () {
        var t = this.host, e = nt.exec(t);
        e && (":" !== (e = e[0]) && (this.port = e.substr(1)), t = t.substr(0, t.length - e.length)), t && (this.hostname = t)
    };
    var gt = {parse: J, resolve: Q, resolveObject: $, format: tt, Url: et}, mt = {WEBGL_LEGACY: 0, WEBGL: 1, WEBGL2: 2},
        yt = {UNKNOWN: 0, WEBGL: 1, CANVAS: 2}, _t = {
            NORMAL: 0,
            ADD: 1,
            MULTIPLY: 2,
            SCREEN: 3,
            OVERLAY: 4,
            DARKEN: 5,
            LIGHTEN: 6,
            COLOR_DODGE: 7,
            COLOR_BURN: 8,
            HARD_LIGHT: 9,
            SOFT_LIGHT: 10,
            DIFFERENCE: 11,
            EXCLUSION: 12,
            HUE: 13,
            SATURATION: 14,
            COLOR: 15,
            LUMINOSITY: 16,
            NORMAL_NPM: 17,
            ADD_NPM: 18,
            SCREEN_NPM: 19,
            NONE: 20,
            SRC_OVER: 0,
            SRC_IN: 21,
            SRC_OUT: 22,
            SRC_ATOP: 23,
            DST_OVER: 24,
            DST_IN: 25,
            DST_OUT: 26,
            DST_ATOP: 27,
            ERASE: 26,
            SUBTRACT: 28
        }, xt = {POINTS: 0, LINES: 1, LINE_LOOP: 2, LINE_STRIP: 3, TRIANGLES: 4, TRIANGLE_STRIP: 5, TRIANGLE_FAN: 6}, bt = {
            RGBA: 6408,
            RGB: 6407,
            ALPHA: 6406,
            LUMINANCE: 6409,
            LUMINANCE_ALPHA: 6410,
            DEPTH_COMPONENT: 6402,
            DEPTH_STENCIL: 34041
        }, Tt = {
            TEXTURE_2D: 3553,
            TEXTURE_CUBE_MAP: 34067,
            TEXTURE_2D_ARRAY: 35866,
            TEXTURE_CUBE_MAP_POSITIVE_X: 34069,
            TEXTURE_CUBE_MAP_NEGATIVE_X: 34070,
            TEXTURE_CUBE_MAP_POSITIVE_Y: 34071,
            TEXTURE_CUBE_MAP_NEGATIVE_Y: 34072,
            TEXTURE_CUBE_MAP_POSITIVE_Z: 34073,
            TEXTURE_CUBE_MAP_NEGATIVE_Z: 34074
        }, Et = {
            UNSIGNED_BYTE: 5121,
            UNSIGNED_SHORT: 5123,
            UNSIGNED_SHORT_5_6_5: 33635,
            UNSIGNED_SHORT_4_4_4_4: 32819,
            UNSIGNED_SHORT_5_5_5_1: 32820,
            FLOAT: 5126,
            HALF_FLOAT: 36193
        }, wt = {LINEAR: 1, NEAREST: 0}, St = {CLAMP: 33071, REPEAT: 10497, MIRRORED_REPEAT: 33648},
        Pt = {OFF: 0, POW2: 1, ON: 2}, It = {AUTO: 0, MANUAL: 1}, At = {LOW: "lowp", MEDIUM: "mediump", HIGH: "highp"};
    m.RETINA_PREFIX = /@([0-9\.]+)x/;
    var Ot, Ct = !1, Mt = "5.0.1";

    function Dt(t) {
        if (!Ct) {
            if (navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
                var e = ["\n %c %c %c PixiJS " + Mt + " - âœ° " + t + " âœ°  %c  %c  http://www.pixijs.com/  %c %c â™¥%câ™¥%câ™¥ \n\n", "background: #ff66a5; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "color: #ff66a5; background: #030307; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "background: #ffc3dc; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;"];
                window.console.log.apply(console, e)
            } else window.console && window.console.log("PixiJS " + Mt + " - " + t + " - http://www.pixijs.com/");
            Ct = !0
        }
    }

    function Rt() {
        return void 0 === Ot && (Ot = function () {
            var t = {stencil: !0, failIfMajorPerformanceCaveat: !0};
            try {
                if (!window.WebGLRenderingContext) return !1;
                var e = document.createElement("canvas"),
                    i = e.getContext("webgl", t) || e.getContext("experimental-webgl", t),
                    r = !(!i || !i.getContextAttributes().stencil);
                if (i) {
                    var n = i.getExtension("WEBGL_lose_context");
                    n && n.loseContext()
                }
                return i = null, r
            } catch (t) {
                return !1
            }
        }()), Ot
    }

    function Lt(t, e) {
        return (e = e || [])[0] = (t >> 16 & 255) / 255, e[1] = (t >> 8 & 255) / 255, e[2] = (255 & t) / 255, e
    }

    function Ft(t) {
        return t = t.toString(16), "#" + (t = "000000".substr(0, 6 - t.length) + t)
    }

    function Nt(t) {
        return "string" == typeof t && "#" === t[0] && (t = t.substr(1)), parseInt(t, 16)
    }

    var Ut = function () {
        for (var t = [], e = [], i = 0; i < 32; i++) t[i] = i, e[i] = i;
        t[_t.NORMAL_NPM] = _t.NORMAL, t[_t.ADD_NPM] = _t.ADD, t[_t.SCREEN_NPM] = _t.SCREEN, e[_t.NORMAL] = _t.NORMAL_NPM, e[_t.ADD] = _t.ADD_NPM, e[_t.SCREEN] = _t.SCREEN_NPM;
        var r = [];
        return r.push(e), r.push(t), r
    }();

    function Bt(t, e) {
        return Ut[e ? 1 : 0][t]
    }

    function kt(t, e, i, r) {
        return i = i || new Float32Array(4), r || void 0 === r ? (i[0] = t[0] * e, i[1] = t[1] * e, i[2] = t[2] * e) : (i[0] = t[0], i[1] = t[1], i[2] = t[2]), i[3] = e, i
    }

    function Xt(t, e) {
        if (1 === e) return (255 * e << 24) + t;
        if (0 === e) return 0;
        var i = t >> 16 & 255, r = t >> 8 & 255, n = 255 & t;
        return (255 * e << 24) + ((i = i * e + .5 | 0) << 16) + ((r = r * e + .5 | 0) << 8) + (n = n * e + .5 | 0)
    }

    function jt(t, e, i, r) {
        return (i = i || new Float32Array(4))[0] = (t >> 16 & 255) / 255, i[1] = (t >> 8 & 255) / 255, i[2] = (255 & t) / 255, (r || void 0 === r) && (i[0] *= e, i[1] *= e, i[2] *= e), i[3] = e, i
    }

    function Gt(t) {
        for (var e = 6 * t, i = new Uint16Array(e), r = 0, n = 0; r < e; r += 6, n += 4) i[r + 0] = n + 0, i[r + 1] = n + 1, i[r + 2] = n + 2, i[r + 3] = n + 0, i[r + 4] = n + 2, i[r + 5] = n + 3;
        return i
    }

    function Ht(t, e, i) {
        var r, n = t.length;
        if (!(e >= n || 0 === i)) {
            var o = n - (i = e + i > n ? n - e : i);
            for (r = e; r < o; ++r) t[r] = t[r + i];
            t.length = o
        }
    }

    var Yt = 0;

    function zt() {
        return ++Yt
    }

    function Vt(t) {
        return 0 === t ? 0 : t < 0 ? -1 : 1
    }

    function Wt(t) {
        return t += 0 === t, --t, t |= t >>> 1, t |= t >>> 2, t |= t >>> 4, t |= t >>> 8, (t |= t >>> 16) + 1
    }

    function qt(t) {
        return !(t & t - 1 || !t)
    }

    function Zt(t) {
        var e = (t > 65535) << 4, i = ((t >>>= e) > 255) << 3;
        return e |= i, e |= i = ((t >>>= i) > 15) << 2, (e |= i = ((t >>>= i) > 3) << 1) | (t >>>= i) >> 1
    }

    var Kt = {}, Jt = Object.create(null), Qt = Object.create(null);

    function $t(t) {
        var e, i, r, n = t.width, o = t.height, s = t.getContext("2d"), a = s.getImageData(0, 0, n, o).data,
            h = a.length, u = {top: null, left: null, right: null, bottom: null}, l = null;
        for (e = 0; e < h; e += 4) 0 !== a[e + 3] && (i = e / 4 % n, r = ~~(e / 4 / n), null === u.top && (u.top = r), null === u.left ? u.left = i : i < u.left && (u.left = i), null === u.right ? u.right = i + 1 : u.right < i && (u.right = i + 1), null === u.bottom ? u.bottom = r : u.bottom < r && (u.bottom = r));
        return null !== u.top && (n = u.right - u.left, o = u.bottom - u.top + 1, l = s.getImageData(u.left, u.top, n, o)), {
            height: o,
            width: n,
            data: l
        }
    }

    var te = function (t, e, i) {
        this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.resolution = i || m.RESOLUTION, this.resize(t, e)
    }, ee = {width: {configurable: !0}, height: {configurable: !0}};
    te.prototype.clear = function () {
        this.context.setTransform(1, 0, 0, 1, 0, 0), this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }, te.prototype.resize = function (t, e) {
        this.canvas.width = t * this.resolution, this.canvas.height = e * this.resolution
    }, te.prototype.destroy = function () {
        this.context = null, this.canvas = null
    }, ee.width.get = function () {
        return this.canvas.width
    }, ee.width.set = function (t) {
        this.canvas.width = t
    }, ee.height.get = function () {
        return this.canvas.height
    }, ee.height.set = function (t) {
        this.canvas.height = t
    }, Object.defineProperties(te.prototype, ee);
    var ie, re = /^\s*data:(?:([\w-]+)\/([\w+.-]+))?(?:;charset=([\w-]+))?(?:;(base64))?,(.*)/i;

    function ne(t) {
        var e = re.exec(t);
        if (e) return {
            mediaType: e[1] ? e[1].toLowerCase() : void 0,
            subType: e[2] ? e[2].toLowerCase() : void 0,
            charset: e[3] ? e[3].toLowerCase() : void 0,
            encoding: e[4] ? e[4].toLowerCase() : void 0,
            data: e[5]
        }
    }

    function oe(t, e) {
        if (void 0 === e && (e = window.location), 0 === t.indexOf("data:")) return "";
        e = e || window.location, ie || (ie = document.createElement("a")), ie.href = t;
        var i = !(t = gt.parse(ie.href)).port && "" === e.port || t.port === e.port;
        return t.hostname === e.hostname && i && t.protocol === e.protocol ? "" : "anonymous"
    }

    function se(t, e) {
        var i = m.RETINA_PREFIX.exec(t);
        return i ? parseFloat(i[1]) : void 0 !== e ? e : 1
    }

    var ae = {};

    function he(t, e, i) {
        if (void 0 === i && (i = 3), !ae[e]) {
            var r = (new Error).stack;
            void 0 === r ? console.warn("PixiJS Deprecation Warning: ", e + "\nDeprecated since v" + t) : (r = r.split("\n").splice(i).join("\n"), console.groupCollapsed ? (console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s", "color:#614108;background:#fffbe6", "font-weight:normal;color:#614108;background:#fffbe6", e + "\nDeprecated since v" + t), console.warn(r), console.groupEnd()) : (console.warn("PixiJS Deprecation Warning: ", e + "\nDeprecated since v" + t), console.warn(r))), ae[e] = !0
        }
    }

    var ue = {
        BaseTextureCache: Qt,
        CanvasRenderTarget: te,
        DATA_URI: re,
        ProgramCache: Kt,
        TextureCache: Jt,
        clearTextureCache: function () {
            var t;
            for (t in Jt) delete Jt[t];
            for (t in Qt) delete Qt[t]
        },
        correctBlendMode: Bt,
        createIndicesForQuads: Gt,
        decomposeDataUri: ne,
        deprecation: he,
        destroyTextureCache: function () {
            var t;
            for (t in Jt) Jt[t].destroy();
            for (t in Qt) Qt[t].destroy()
        },
        determineCrossOrigin: oe,
        getResolutionOfUrl: se,
        hex2rgb: Lt,
        hex2string: Ft,
        isPow2: qt,
        isWebGLSupported: Rt,
        log2: Zt,
        nextPow2: Wt,
        premultiplyBlendMode: Ut,
        premultiplyRgba: kt,
        premultiplyTint: Xt,
        premultiplyTintToRgba: jt,
        removeItems: Ht,
        rgb2hex: function (t) {
            return (255 * t[0] << 16) + (255 * t[1] << 8) + (255 * t[2] | 0)
        },
        sayHello: Dt,
        sign: Vt,
        skipHello: function () {
            Ct = !0
        },
        string2hex: Nt,
        trimCanvas: $t,
        uid: zt,
        isMobile: g,
        EventEmitter: y,
        earcut: _,
        url: gt
    }, le = function (t, e) {
        void 0 === t && (t = 0), void 0 === e && (e = 0), this.x = t, this.y = e
    };
    le.prototype.clone = function () {
        return new le(this.x, this.y)
    }, le.prototype.copyFrom = function (t) {
        return this.set(t.x, t.y), this
    }, le.prototype.copyTo = function (t) {
        return t.set(this.x, this.y), t
    }, le.prototype.equals = function (t) {
        return t.x === this.x && t.y === this.y
    }, le.prototype.set = function (t, e) {
        this.x = t || 0, this.y = e || (0 !== e ? this.x : 0)
    };
    var ce = function (t, e, i, r) {
        void 0 === i && (i = 0), void 0 === r && (r = 0), this._x = i, this._y = r, this.cb = t, this.scope = e
    }, de = {x: {configurable: !0}, y: {configurable: !0}};
    ce.prototype.clone = function (t, e) {
        void 0 === t && (t = null), void 0 === e && (e = null);
        var i = t || this.cb, r = e || this.scope;
        return new ce(i, r, this._x, this._y)
    }, ce.prototype.set = function (t, e) {
        var i = t || 0, r = e || (0 !== e ? i : 0);
        this._x === i && this._y === r || (this._x = i, this._y = r, this.cb.call(this.scope))
    }, ce.prototype.copyFrom = function (t) {
        return this._x === t.x && this._y === t.y || (this._x = t.x, this._y = t.y, this.cb.call(this.scope)), this
    }, ce.prototype.copyTo = function (t) {
        return t.set(this._x, this._y), t
    }, ce.prototype.equals = function (t) {
        return t.x === this._x && t.y === this._y
    }, de.x.get = function () {
        return this._x
    }, de.x.set = function (t) {
        this._x !== t && (this._x = t, this.cb.call(this.scope))
    }, de.y.get = function () {
        return this._y
    }, de.y.set = function (t) {
        this._y !== t && (this._y = t, this.cb.call(this.scope))
    }, Object.defineProperties(ce.prototype, de);
    var pe = 2 * Math.PI, fe = 180 / Math.PI, ve = Math.PI / 180, ge = {POLY: 0, RECT: 1, CIRC: 2, ELIP: 3, RREC: 4},
        me = function (t, e, i, r, n, o) {
            void 0 === t && (t = 1), void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === r && (r = 1), void 0 === n && (n = 0), void 0 === o && (o = 0), this.a = t, this.b = e, this.c = i, this.d = r, this.tx = n, this.ty = o, this.array = null
        }, ye = {IDENTITY: {configurable: !0}, TEMP_MATRIX: {configurable: !0}};
    me.prototype.fromArray = function (t) {
        this.a = t[0], this.b = t[1], this.c = t[3], this.d = t[4], this.tx = t[2], this.ty = t[5]
    }, me.prototype.set = function (t, e, i, r, n, o) {
        return this.a = t, this.b = e, this.c = i, this.d = r, this.tx = n, this.ty = o, this
    }, me.prototype.toArray = function (t, e) {
        this.array || (this.array = new Float32Array(9));
        var i = e || this.array;
        return t ? (i[0] = this.a, i[1] = this.b, i[2] = 0, i[3] = this.c, i[4] = this.d, i[5] = 0, i[6] = this.tx, i[7] = this.ty, i[8] = 1) : (i[0] = this.a, i[1] = this.c, i[2] = this.tx, i[3] = this.b, i[4] = this.d, i[5] = this.ty, i[6] = 0, i[7] = 0, i[8] = 1), i
    }, me.prototype.apply = function (t, e) {
        e = e || new le;
        var i = t.x, r = t.y;
        return e.x = this.a * i + this.c * r + this.tx, e.y = this.b * i + this.d * r + this.ty, e
    }, me.prototype.applyInverse = function (t, e) {
        e = e || new le;
        var i = 1 / (this.a * this.d + this.c * -this.b), r = t.x, n = t.y;
        return e.x = this.d * i * r + -this.c * i * n + (this.ty * this.c - this.tx * this.d) * i, e.y = this.a * i * n + -this.b * i * r + (-this.ty * this.a + this.tx * this.b) * i, e
    }, me.prototype.translate = function (t, e) {
        return this.tx += t, this.ty += e, this
    }, me.prototype.scale = function (t, e) {
        return this.a *= t, this.d *= e, this.c *= t, this.b *= e, this.tx *= t, this.ty *= e, this
    }, me.prototype.rotate = function (t) {
        var e = Math.cos(t), i = Math.sin(t), r = this.a, n = this.c, o = this.tx;
        return this.a = r * e - this.b * i, this.b = r * i + this.b * e, this.c = n * e - this.d * i, this.d = n * i + this.d * e, this.tx = o * e - this.ty * i, this.ty = o * i + this.ty * e, this
    }, me.prototype.append = function (t) {
        var e = this.a, i = this.b, r = this.c, n = this.d;
        return this.a = t.a * e + t.b * r, this.b = t.a * i + t.b * n, this.c = t.c * e + t.d * r, this.d = t.c * i + t.d * n, this.tx = t.tx * e + t.ty * r + this.tx, this.ty = t.tx * i + t.ty * n + this.ty, this
    }, me.prototype.setTransform = function (t, e, i, r, n, o, s, a, h) {
        return this.a = Math.cos(s + h) * n, this.b = Math.sin(s + h) * n, this.c = -Math.sin(s - a) * o, this.d = Math.cos(s - a) * o, this.tx = t - (i * this.a + r * this.c), this.ty = e - (i * this.b + r * this.d), this
    }, me.prototype.prepend = function (t) {
        var e = this.tx;
        if (1 !== t.a || 0 !== t.b || 0 !== t.c || 1 !== t.d) {
            var i = this.a, r = this.c;
            this.a = i * t.a + this.b * t.c, this.b = i * t.b + this.b * t.d, this.c = r * t.a + this.d * t.c, this.d = r * t.b + this.d * t.d
        }
        return this.tx = e * t.a + this.ty * t.c + t.tx, this.ty = e * t.b + this.ty * t.d + t.ty, this
    }, me.prototype.decompose = function (t) {
        var e = this.a, i = this.b, r = this.c, n = this.d, o = -Math.atan2(-r, n), s = Math.atan2(i, e),
            a = Math.abs(o + s);
        return a < 1e-5 || Math.abs(pe - a) < 1e-5 ? (t.rotation = s, t.skew.x = t.skew.y = 0) : (t.rotation = 0, t.skew.x = o, t.skew.y = s), t.scale.x = Math.sqrt(e * e + i * i), t.scale.y = Math.sqrt(r * r + n * n), t.position.x = this.tx, t.position.y = this.ty, t
    }, me.prototype.invert = function () {
        var t = this.a, e = this.b, i = this.c, r = this.d, n = this.tx, o = t * r - e * i;
        return this.a = r / o, this.b = -e / o, this.c = -i / o, this.d = t / o, this.tx = (i * this.ty - r * n) / o, this.ty = -(t * this.ty - e * n) / o, this
    }, me.prototype.identity = function () {
        return this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0, this
    }, me.prototype.clone = function () {
        var t = new me;
        return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t
    }, me.prototype.copyTo = function (t) {
        return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t
    }, me.prototype.copyFrom = function (t) {
        return this.a = t.a, this.b = t.b, this.c = t.c, this.d = t.d, this.tx = t.tx, this.ty = t.ty, this
    }, ye.IDENTITY.get = function () {
        return new me
    }, ye.TEMP_MATRIX.get = function () {
        return new me
    }, Object.defineProperties(me, ye);
    var _e = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1],
        xe = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1],
        be = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1],
        Te = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1], Ee = [], we = [];

    function Se(t) {
        return t < 0 ? -1 : t > 0 ? 1 : 0
    }

    !function () {
        for (var t = 0; t < 16; t++) {
            var e = [];
            we.push(e);
            for (var i = 0; i < 16; i++) for (var r = Se(_e[t] * _e[i] + be[t] * xe[i]), n = Se(xe[t] * _e[i] + Te[t] * xe[i]), o = Se(_e[t] * be[i] + be[t] * Te[i]), s = Se(xe[t] * be[i] + Te[t] * Te[i]), a = 0; a < 16; a++) if (_e[a] === r && xe[a] === n && be[a] === o && Te[a] === s) {
                e.push(a);
                break
            }
        }
        for (var h = 0; h < 16; h++) {
            var u = new me;
            u.set(_e[h], xe[h], be[h], Te[h], 0, 0), Ee.push(u)
        }
    }();
    var Pe = {
        E: 0,
        SE: 1,
        S: 2,
        SW: 3,
        W: 4,
        NW: 5,
        N: 6,
        NE: 7,
        MIRROR_VERTICAL: 8,
        MIRROR_HORIZONTAL: 12,
        uX: function (t) {
            return _e[t]
        },
        uY: function (t) {
            return xe[t]
        },
        vX: function (t) {
            return be[t]
        },
        vY: function (t) {
            return Te[t]
        },
        inv: function (t) {
            return 8 & t ? 15 & t : 7 & -t
        },
        add: function (t, e) {
            return we[t][e]
        },
        sub: function (t, e) {
            return we[t][Pe.inv(e)]
        },
        rotate180: function (t) {
            return 4 ^ t
        },
        isVertical: function (t) {
            return 2 == (3 & t)
        },
        byDirection: function (t, e) {
            return 2 * Math.abs(t) <= Math.abs(e) ? e >= 0 ? Pe.S : Pe.N : 2 * Math.abs(e) <= Math.abs(t) ? t > 0 ? Pe.E : Pe.W : e > 0 ? t > 0 ? Pe.SE : Pe.SW : t > 0 ? Pe.NE : Pe.NW
        },
        matrixAppendRotationInv: function (t, e, i, r) {
            void 0 === i && (i = 0), void 0 === r && (r = 0);
            var n = Ee[Pe.inv(e)];
            n.tx = i, n.ty = r, t.append(n)
        }
    }, Ie = function () {
        this.worldTransform = new me, this.localTransform = new me, this.position = new ce(this.onChange, this, 0, 0), this.scale = new ce(this.onChange, this, 1, 1), this.pivot = new ce(this.onChange, this, 0, 0), this.skew = new ce(this.updateSkew, this, 0, 0), this._rotation = 0, this._cx = 1, this._sx = 0, this._cy = 0, this._sy = 1, this._localID = 0, this._currentLocalID = 0, this._worldID = 0, this._parentID = 0
    }, Ae = {rotation: {configurable: !0}};
    Ie.prototype.onChange = function () {
        this._localID++
    }, Ie.prototype.updateSkew = function () {
        this._cx = Math.cos(this._rotation + this.skew._y), this._sx = Math.sin(this._rotation + this.skew._y), this._cy = -Math.sin(this._rotation - this.skew._x), this._sy = Math.cos(this._rotation - this.skew._x), this._localID++
    }, Ie.prototype.updateLocalTransform = function () {
        var t = this.localTransform;
        this._localID !== this._currentLocalID && (t.a = this._cx * this.scale._x, t.b = this._sx * this.scale._x, t.c = this._cy * this.scale._y, t.d = this._sy * this.scale._y, t.tx = this.position._x - (this.pivot._x * t.a + this.pivot._y * t.c), t.ty = this.position._y - (this.pivot._x * t.b + this.pivot._y * t.d), this._currentLocalID = this._localID, this._parentID = -1)
    }, Ie.prototype.updateTransform = function (t) {
        var e = this.localTransform;
        if (this._localID !== this._currentLocalID && (e.a = this._cx * this.scale._x, e.b = this._sx * this.scale._x, e.c = this._cy * this.scale._y, e.d = this._sy * this.scale._y, e.tx = this.position._x - (this.pivot._x * e.a + this.pivot._y * e.c), e.ty = this.position._y - (this.pivot._x * e.b + this.pivot._y * e.d), this._currentLocalID = this._localID, this._parentID = -1), this._parentID !== t._worldID) {
            var i = t.worldTransform, r = this.worldTransform;
            r.a = e.a * i.a + e.b * i.c, r.b = e.a * i.b + e.b * i.d, r.c = e.c * i.a + e.d * i.c, r.d = e.c * i.b + e.d * i.d, r.tx = e.tx * i.a + e.ty * i.c + i.tx, r.ty = e.tx * i.b + e.ty * i.d + i.ty, this._parentID = t._worldID, this._worldID++
        }
    }, Ie.prototype.setFromMatrix = function (t) {
        t.decompose(this), this._localID++
    }, Ae.rotation.get = function () {
        return this._rotation
    }, Ae.rotation.set = function (t) {
        this._rotation !== t && (this._rotation = t, this.updateSkew())
    }, Object.defineProperties(Ie.prototype, Ae), Ie.IDENTITY = new Ie;
    var Oe = function (t, e, i, r) {
            void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === r && (r = 0), this.x = Number(t), this.y = Number(e), this.width = Number(i), this.height = Number(r), this.type = ge.RECT
        }, Ce = {left: {configurable: !0}, right: {configurable: !0}, top: {configurable: !0}, bottom: {configurable: !0}},
        Me = {EMPTY: {configurable: !0}};
    Ce.left.get = function () {
        return this.x
    }, Ce.right.get = function () {
        return this.x + this.width
    }, Ce.top.get = function () {
        return this.y
    }, Ce.bottom.get = function () {
        return this.y + this.height
    }, Me.EMPTY.get = function () {
        return new Oe(0, 0, 0, 0)
    }, Oe.prototype.clone = function () {
        return new Oe(this.x, this.y, this.width, this.height)
    }, Oe.prototype.copyFrom = function (t) {
        return this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height, this
    }, Oe.prototype.copyTo = function (t) {
        return t.x = this.x, t.y = this.y, t.width = this.width, t.height = this.height, t
    }, Oe.prototype.contains = function (t, e) {
        return !(this.width <= 0 || this.height <= 0) && (t >= this.x && t < this.x + this.width && e >= this.y && e < this.y + this.height)
    }, Oe.prototype.pad = function (t, e) {
        t = t || 0, e = e || (0 !== e ? t : 0), this.x -= t, this.y -= e, this.width += 2 * t, this.height += 2 * e
    }, Oe.prototype.fit = function (t) {
        var e = Math.max(this.x, t.x), i = Math.min(this.x + this.width, t.x + t.width), r = Math.max(this.y, t.y),
            n = Math.min(this.y + this.height, t.y + t.height);
        this.x = e, this.width = Math.max(i - e, 0), this.y = r, this.height = Math.max(n - r, 0)
    }, Oe.prototype.ceil = function (t, e) {
        void 0 === t && (t = 1), void 0 === e && (e = .001);
        var i = Math.ceil((this.x + this.width - e) * t) / t, r = Math.ceil((this.y + this.height - e) * t) / t;
        this.x = Math.floor((this.x + e) * t) / t, this.y = Math.floor((this.y + e) * t) / t, this.width = i - this.x, this.height = r - this.y
    }, Oe.prototype.enlarge = function (t) {
        var e = Math.min(this.x, t.x), i = Math.max(this.x + this.width, t.x + t.width), r = Math.min(this.y, t.y),
            n = Math.max(this.y + this.height, t.y + t.height);
        this.x = e, this.width = i - e, this.y = r, this.height = n - r
    }, Object.defineProperties(Oe.prototype, Ce), Object.defineProperties(Oe, Me);
    var De = function (t, e, i) {
        void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 0), this.x = t, this.y = e, this.radius = i, this.type = ge.CIRC
    };
    De.prototype.clone = function () {
        return new De(this.x, this.y, this.radius)
    }, De.prototype.contains = function (t, e) {
        if (this.radius <= 0) return !1;
        var i = this.radius * this.radius, r = this.x - t, n = this.y - e;
        return (r *= r) + (n *= n) <= i
    }, De.prototype.getBounds = function () {
        return new Oe(this.x - this.radius, this.y - this.radius, 2 * this.radius, 2 * this.radius)
    };
    var Re = function (t, e, i, r) {
        void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === r && (r = 0), this.x = t, this.y = e, this.width = i, this.height = r, this.type = ge.ELIP
    };
    Re.prototype.clone = function () {
        return new Re(this.x, this.y, this.width, this.height)
    }, Re.prototype.contains = function (t, e) {
        if (this.width <= 0 || this.height <= 0) return !1;
        var i = (t - this.x) / this.width, r = (e - this.y) / this.height;
        return (i *= i) + (r *= r) <= 1
    }, Re.prototype.getBounds = function () {
        return new Oe(this.x - this.width, this.y - this.height, this.width, this.height)
    };
    var Le = function () {
        for (var t = arguments, e = [], i = arguments.length; i--;) e[i] = t[i];
        if (Array.isArray(e[0]) && (e = e[0]), e[0] instanceof le) {
            for (var r = [], n = 0, o = e.length; n < o; n++) r.push(e[n].x, e[n].y);
            e = r
        }
        this.points = e, this.type = ge.POLY, this.closeStroke = !0
    };
    Le.prototype.clone = function () {
        var t = new Le(this.points.slice());
        return t.closeStroke = this.closeStroke, t
    }, Le.prototype.contains = function (t, e) {
        for (var i = !1, r = this.points.length / 2, n = 0, o = r - 1; n < r; o = n++) {
            var s = this.points[2 * n], a = this.points[2 * n + 1], h = this.points[2 * o], u = this.points[2 * o + 1];
            a > e != u > e && t < (e - a) / (u - a) * (h - s) + s && (i = !i)
        }
        return i
    };
    var Fe = function (t, e, i, r, n) {
        void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === r && (r = 0), void 0 === n && (n = 20), this.x = t, this.y = e, this.width = i, this.height = r, this.radius = n, this.type = ge.RREC
    };
    Fe.prototype.clone = function () {
        return new Fe(this.x, this.y, this.width, this.height, this.radius)
    }, Fe.prototype.contains = function (t, e) {
        if (this.width <= 0 || this.height <= 0) return !1;
        if (t >= this.x && t <= this.x + this.width && e >= this.y && e <= this.y + this.height) {
            if (e >= this.y + this.radius && e <= this.y + this.height - this.radius || t >= this.x + this.radius && t <= this.x + this.width - this.radius) return !0;
            var i = t - (this.x + this.radius), r = e - (this.y + this.radius), n = this.radius * this.radius;
            if (i * i + r * r <= n) return !0;
            if ((i = t - (this.x + this.width - this.radius)) * i + r * r <= n) return !0;
            if (i * i + (r = e - (this.y + this.height - this.radius)) * r <= n) return !0;
            if ((i = t - (this.x + this.radius)) * i + r * r <= n) return !0
        }
        return !1
    }, m.SORTABLE_CHILDREN = !1;
    var Ne = function () {
        this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0, this.rect = null
    };
    Ne.prototype.isEmpty = function () {
        return this.minX > this.maxX || this.minY > this.maxY
    }, Ne.prototype.clear = function () {
        this.updateID++, this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0
    }, Ne.prototype.getRectangle = function (t) {
        return this.minX > this.maxX || this.minY > this.maxY ? Oe.EMPTY : ((t = t || new Oe(0, 0, 1, 1)).x = this.minX, t.y = this.minY, t.width = this.maxX - this.minX, t.height = this.maxY - this.minY, t)
    }, Ne.prototype.addPoint = function (t) {
        this.minX = Math.min(this.minX, t.x), this.maxX = Math.max(this.maxX, t.x), this.minY = Math.min(this.minY, t.y), this.maxY = Math.max(this.maxY, t.y)
    }, Ne.prototype.addQuad = function (t) {
        var e = this.minX, i = this.minY, r = this.maxX, n = this.maxY, o = t[0], s = t[1];
        e = o < e ? o : e, i = s < i ? s : i, r = o > r ? o : r, n = s > n ? s : n, e = (o = t[2]) < e ? o : e, i = (s = t[3]) < i ? s : i, r = o > r ? o : r, n = s > n ? s : n, e = (o = t[4]) < e ? o : e, i = (s = t[5]) < i ? s : i, r = o > r ? o : r, n = s > n ? s : n, e = (o = t[6]) < e ? o : e, i = (s = t[7]) < i ? s : i, r = o > r ? o : r, n = s > n ? s : n, this.minX = e, this.minY = i, this.maxX = r, this.maxY = n
    }, Ne.prototype.addFrame = function (t, e, i, r, n) {
        var o = t.worldTransform, s = o.a, a = o.b, h = o.c, u = o.d, l = o.tx, c = o.ty, d = this.minX, p = this.minY,
            f = this.maxX, v = this.maxY, g = s * e + h * i + l, m = a * e + u * i + c;
        d = g < d ? g : d, p = m < p ? m : p, f = g > f ? g : f, v = m > v ? m : v, d = (g = s * r + h * i + l) < d ? g : d, p = (m = a * r + u * i + c) < p ? m : p, f = g > f ? g : f, v = m > v ? m : v, d = (g = s * e + h * n + l) < d ? g : d, p = (m = a * e + u * n + c) < p ? m : p, f = g > f ? g : f, v = m > v ? m : v, d = (g = s * r + h * n + l) < d ? g : d, p = (m = a * r + u * n + c) < p ? m : p, f = g > f ? g : f, v = m > v ? m : v, this.minX = d, this.minY = p, this.maxX = f, this.maxY = v
    }, Ne.prototype.addVertexData = function (t, e, i) {
        for (var r = this.minX, n = this.minY, o = this.maxX, s = this.maxY, a = e; a < i; a += 2) {
            var h = t[a], u = t[a + 1];
            r = h < r ? h : r, n = u < n ? u : n, o = h > o ? h : o, s = u > s ? u : s
        }
        this.minX = r, this.minY = n, this.maxX = o, this.maxY = s
    }, Ne.prototype.addVertices = function (t, e, i, r) {
        for (var n = t.worldTransform, o = n.a, s = n.b, a = n.c, h = n.d, u = n.tx, l = n.ty, c = this.minX, d = this.minY, p = this.maxX, f = this.maxY, v = i; v < r; v += 2) {
            var g = e[v], m = e[v + 1], y = o * g + a * m + u, _ = h * m + s * g + l;
            c = y < c ? y : c, d = _ < d ? _ : d, p = y > p ? y : p, f = _ > f ? _ : f
        }
        this.minX = c, this.minY = d, this.maxX = p, this.maxY = f
    }, Ne.prototype.addBounds = function (t) {
        var e = this.minX, i = this.minY, r = this.maxX, n = this.maxY;
        this.minX = t.minX < e ? t.minX : e, this.minY = t.minY < i ? t.minY : i, this.maxX = t.maxX > r ? t.maxX : r, this.maxY = t.maxY > n ? t.maxY : n
    }, Ne.prototype.addBoundsMask = function (t, e) {
        var i = t.minX > e.minX ? t.minX : e.minX, r = t.minY > e.minY ? t.minY : e.minY,
            n = t.maxX < e.maxX ? t.maxX : e.maxX, o = t.maxY < e.maxY ? t.maxY : e.maxY;
        if (i <= n && r <= o) {
            var s = this.minX, a = this.minY, h = this.maxX, u = this.maxY;
            this.minX = i < s ? i : s, this.minY = r < a ? r : a, this.maxX = n > h ? n : h, this.maxY = o > u ? o : u
        }
    }, Ne.prototype.addBoundsArea = function (t, e) {
        var i = t.minX > e.x ? t.minX : e.x, r = t.minY > e.y ? t.minY : e.y,
            n = t.maxX < e.x + e.width ? t.maxX : e.x + e.width, o = t.maxY < e.y + e.height ? t.maxY : e.y + e.height;
        if (i <= n && r <= o) {
            var s = this.minX, a = this.minY, h = this.maxX, u = this.maxY;
            this.minX = i < s ? i : s, this.minY = r < a ? r : a, this.maxX = n > h ? n : h, this.maxY = o > u ? o : u
        }
    };
    var Ue = function (t) {
        function e() {
            t.call(this), this.tempDisplayObjectParent = null, this.transform = new Ie, this.alpha = 1, this.visible = !0, this.renderable = !0, this.parent = null, this.worldAlpha = 1, this._lastSortedIndex = 0, this._zIndex = 0, this.filterArea = null, this.filters = null, this._enabledFilters = null, this._bounds = new Ne, this._boundsID = 0, this._lastBoundsID = -1, this._boundsRect = null, this._localBoundsRect = null, this._mask = null, this._destroyed = !1, this.isSprite = !1
        }

        t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
        var i = {
            _tempDisplayObjectParent: {configurable: !0},
            x: {configurable: !0},
            y: {configurable: !0},
            worldTransform: {configurable: !0},
            localTransform: {configurable: !0},
            position: {configurable: !0},
            scale: {configurable: !0},
            pivot: {configurable: !0},
            skew: {configurable: !0},
            rotation: {configurable: !0},
            angle: {configurable: !0},
            zIndex: {configurable: !0},
            worldVisible: {configurable: !0},
            mask: {configurable: !0}
        };
        return e.mixin = function (t) {
            for (var i = Object.keys(t), r = 0; r < i.length; ++r) {
                var n = i[r];
                Object.defineProperty(e.prototype, n, Object.getOwnPropertyDescriptor(t, n))
            }
        }, i._tempDisplayObjectParent.get = function () {
            return null === this.tempDisplayObjectParent && (this.tempDisplayObjectParent = new e), this.tempDisplayObjectParent
        }, e.prototype.updateTransform = function () {
            this.transform.updateTransform(this.parent.transform), this.worldAlpha = this.alpha * this.parent.worldAlpha, this._bounds.updateID++
        }, e.prototype._recursivePostUpdateTransform = function () {
            this.parent ? (this.parent._recursivePostUpdateTransform(), this.transform.updateTransform(this.parent.transform)) : this.transform.updateTransform(this._tempDisplayObjectParent.transform)
        }, e.prototype.getBounds = function (t, e) {
            return t || (this.parent ? (this._recursivePostUpdateTransform(), this.updateTransform()) : (this.parent = this._tempDisplayObjectParent, this.updateTransform(), this.parent = null)), this._boundsID !== this._lastBoundsID && this.calculateBounds(), e || (this._boundsRect || (this._boundsRect = new Oe), e = this._boundsRect), this._bounds.getRectangle(e)
        }, e.prototype.getLocalBounds = function (t) {
            var e = this.transform, i = this.parent;
            this.parent = null, this.transform = this._tempDisplayObjectParent.transform, t || (this._localBoundsRect || (this._localBoundsRect = new Oe), t = this._localBoundsRect);
            var r = this.getBounds(!1, t);
            return this.parent = i, this.transform = e, r
        }, e.prototype.toGlobal = function (t, e, i) {
            return void 0 === i && (i = !1), i || (this._recursivePostUpdateTransform(), this.parent ? this.displayObjectUpdateTransform() : (this.parent = this._tempDisplayObjectParent, this.displayObjectUpdateTransform(), this.parent = null)), this.worldTransform.apply(t, e)
        }, e.prototype.toLocal = function (t, e, i, r) {
            return e && (t = e.toGlobal(t, i, r)), r || (this._recursivePostUpdateTransform(), this.parent ? this.displayObjectUpdateTransform() : (this.parent = this._tempDisplayObjectParent, this.displayObjectUpdateTransform(), this.parent = null)), this.worldTransform.applyInverse(t, i)
        }, e.prototype.render = function (t) {
        }, e.prototype.setParent = function (t) {
            if (!t || !t.addChild) throw new Error("setParent: Argument must be a Container");
            return t.addChild(this), t
        }, e.prototype.setTransform = function (t, e, i, r, n, o, s, a, h) {
            return void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 1), void 0 === r && (r = 1), void 0 === n && (n = 0), void 0 === o && (o = 0), void 0 === s && (s = 0), void 0 === a && (a = 0), void 0 === h && (h = 0), this.position.x = t, this.position.y = e, this.scale.x = i || 1, this.scale.y = r || 1, this.rotation = n, this.skew.x = o, this.skew.y = s, this.pivot.x = a, this.pivot.y = h, this
        }, e.prototype.destroy = function () {
            this.removeAllListeners(), this.parent && this.parent.removeChild(this), this.transform = null, this.parent = null, this._bounds = null, this._currentBounds = null, this._mask = null, this.filterArea = null, this.interactive = !1, this.interactiveChildren = !1, this._destroyed = !0
        }, i.x.get = function () {
            return this.position.x
        }, i.x.set = function (t) {
            this.transform.position.x = t
        }, i.y.get = function () {
            return this.position.y
        }, i.y.set = function (t) {
            this.transform.position.y = t
        }, i.worldTransform.get = function () {
            return this.transform.worldTransform
        }, i.localTransform.get = function () {
            return this.transform.localTransform
        }, i.position.get = function () {
            return this.transform.position
        }, i.position.set = function (t) {
            this.transform.position.copyFrom(t)
        }, i.scale.get = function () {
            return this.transform.scale
        }, i.scale.set = function (t) {
            this.transform.scale.copyFrom(t)
        }, i.pivot.get = function () {
            return this.transform.pivot
        }, i.pivot.set = function (t) {
            this.transform.pivot.copyFrom(t)
        }, i.skew.get = function () {
            return this.transform.skew
        }, i.skew.set = function (t) {
            this.transform.skew.copyFrom(t)
        }, i.rotation.get = function () {
            return this.transform.rotation
        }, i.rotation.set = function (t) {
            this.transform.rotation = t
        }, i.angle.get = function () {
            return this.transform.rotation * fe
        }, i.angle.set = function (t) {
            this.transform.rotation = t * ve
        }, i.zIndex.get = function () {
            return this._zIndex
        }, i.zIndex.set = function (t) {
            this._zIndex = t, this.parent && (this.parent.sortDirty = !0)
        }, i.worldVisible.get = function () {
            var t = this;
            do {
                if (!t.visible) return !1;
                t = t.parent
            } while (t);
            return !0
        }, i.mask.get = function () {
            return this._mask
        }, i.mask.set = function (t) {
            this._mask && (this._mask.renderable = !0, this._mask.isMask = !1), this._mask = t, this._mask && (this._mask.renderable = !1, this._mask.isMask = !0)
        }, Object.defineProperties(e.prototype, i), e
    }(y);

    function Be(t, e) {
        return t.zIndex === e.zIndex ? t._lastSortedIndex - e._lastSortedIndex : t.zIndex - e.zIndex
    }

    Ue.prototype.displayObjectUpdateTransform = Ue.prototype.updateTransform;
    var ke = function (t) {
        function e() {
            t.call(this), this.children = [], this.sortableChildren = m.SORTABLE_CHILDREN, this.sortDirty = !1
        }

        t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
        var i = {width: {configurable: !0}, height: {configurable: !0}};
        return e.prototype.onChildrenChange = function () {
        }, e.prototype.addChild = function (t) {
            var e = arguments, i = arguments.length;
            if (i > 1) for (var r = 0; r < i; r++) this.addChild(e[r]); else t.parent && t.parent.removeChild(t), t.parent = this, this.sortDirty = !0, t.transform._parentID = -1, this.children.push(t), this._boundsID++, this.onChildrenChange(this.children.length - 1), this.emit("childAdded", t, this, this.children.length - 1), t.emit("added", this);
            return t
        }, e.prototype.addChildAt = function (t, e) {
            if (e < 0 || e > this.children.length) throw new Error(t + "addChildAt: The index " + e + " supplied is out of bounds " + this.children.length);
            return t.parent && t.parent.removeChild(t), t.parent = this, this.sortDirty = !0, t.transform._parentID = -1, this.children.splice(e, 0, t), this._boundsID++, this.onChildrenChange(e), t.emit("added", this), this.emit("childAdded", t, this, e), t
        }, e.prototype.swapChildren = function (t, e) {
            if (t !== e) {
                var i = this.getChildIndex(t), r = this.getChildIndex(e);
                this.children[i] = e, this.children[r] = t, this.onChildrenChange(i < r ? i : r)
            }
        }, e.prototype.getChildIndex = function (t) {
            var e = this.children.indexOf(t);
            if (-1 === e) throw new Error("The supplied DisplayObject must be a child of the caller");
            return e
        }, e.prototype.setChildIndex = function (t, e) {
            if (e < 0 || e >= this.children.length) throw new Error("The index " + e + " supplied is out of bounds " + this.children.length);
            var i = this.getChildIndex(t);
            Ht(this.children, i, 1), this.children.splice(e, 0, t), this.onChildrenChange(e)
        }, e.prototype.getChildAt = function (t) {
            if (t < 0 || t >= this.children.length) throw new Error("getChildAt: Index (" + t + ") does not exist.");
            return this.children[t]
        }, e.prototype.removeChild = function (t) {
            var e = arguments, i = arguments.length;
            if (i > 1) for (var r = 0; r < i; r++) this.removeChild(e[r]); else {
                var n = this.children.indexOf(t);
                if (-1 === n) return null;
                t.parent = null, t.transform._parentID = -1, Ht(this.children, n, 1), this._boundsID++, this.onChildrenChange(n), t.emit("removed", this), this.emit("childRemoved", t, this, n)
            }
            return t
        }, e.prototype.removeChildAt = function (t) {
            var e = this.getChildAt(t);
            return e.parent = null, e.transform._parentID = -1, Ht(this.children, t, 1), this._boundsID++, this.onChildrenChange(t), e.emit("removed", this), this.emit("childRemoved", e, this, t), e
        }, e.prototype.removeChildren = function (t, e) {
            void 0 === t && (t = 0);
            var i, r = t, n = "number" == typeof e ? e : this.children.length, o = n - r;
            if (o > 0 && o <= n) {
                i = this.children.splice(r, o);
                for (var s = 0; s < i.length; ++s) i[s].parent = null, i[s].transform && (i[s].transform._parentID = -1);
                this._boundsID++, this.onChildrenChange(t);
                for (var a = 0; a < i.length; ++a) i[a].emit("removed", this), this.emit("childRemoved", i[a], this, a);
                return i
            }
            if (0 === o && 0 === this.children.length) return [];
            throw new RangeError("removeChildren: numeric values are outside the acceptable range.")
        }, e.prototype.sortChildren = function () {
            for (var t = !1, e = 0, i = this.children.length; e < i; ++e) {
                var r = this.children[e];
                r._lastSortedIndex = e, t || 0 === r.zIndex || (t = !0)
            }
            t && this.children.length > 1 && this.children.sort(Be), this.sortDirty = !1
        }, e.prototype.updateTransform = function () {
            this.sortableChildren && this.sortDirty && this.sortChildren(), this._boundsID++, this.transform.updateTransform(this.parent.transform), this.worldAlpha = this.alpha * this.parent.worldAlpha;
            for (var t = 0, e = this.children.length; t < e; ++t) {
                var i = this.children[t];
                i.visible && i.updateTransform()
            }
        }, e.prototype.calculateBounds = function () {
            this._bounds.clear(), this._calculateBounds();
            for (var t = 0; t < this.children.length; t++) {
                var e = this.children[t];
                e.visible && e.renderable && (e.calculateBounds(), e._mask ? (e._mask.calculateBounds(), this._bounds.addBoundsMask(e._bounds, e._mask._bounds)) : e.filterArea ? this._bounds.addBoundsArea(e._bounds, e.filterArea) : this._bounds.addBounds(e._bounds))
            }
            this._lastBoundsID = this._boundsID
        }, e.prototype._calculateBounds = function () {
        }, e.prototype.render = function (t) {
            if (this.visible && !(this.worldAlpha <= 0) && this.renderable) if (this._mask || this.filters) this.renderAdvanced(t); else {
                this._render(t);
                for (var e = 0, i = this.children.length; e < i; ++e) this.children[e].render(t)
            }
        }, e.prototype.renderAdvanced = function (t) {
            t.batch.flush();
            var e = this.filters, i = this._mask;
            if (e) {
                this._enabledFilters || (this._enabledFilters = []), this._enabledFilters.length = 0;
                for (var r = 0; r < e.length; r++) e[r].enabled && this._enabledFilters.push(e[r]);
                this._enabledFilters.length && t.filter.push(this, this._enabledFilters)
            }
            i && t.mask.push(this, this._mask), this._render(t);
            for (var n = 0, o = this.children.length; n < o; n++) this.children[n].render(t);
            t.batch.flush(), i && t.mask.pop(this, this._mask), e && this._enabledFilters && this._enabledFilters.length && t.filter.pop()
        }, e.prototype._render = function (t) {
        }, e.prototype.destroy = function (e) {
            t.prototype.destroy.call(this), this.sortDirty = !1;
            var i = "boolean" == typeof e ? e : e && e.children, r = this.removeChildren(0, this.children.length);
            if (i) for (var n = 0; n < r.length; ++n) r[n].destroy(e)
        }, i.width.get = function () {
            return this.scale.x * this.getLocalBounds().width
        }, i.width.set = function (t) {
            var e = this.getLocalBounds().width;
            this.scale.x = 0 !== e ? t / e : 1, this._width = t
        }, i.height.get = function () {
            return this.scale.y * this.getLocalBounds().height
        }, i.height.set = function (t) {
            var e = this.getLocalBounds().height;
            this.scale.y = 0 !== e ? t / e : 1, this._height = t
        }, Object.defineProperties(e.prototype, i), e
    }(Ue);
    ke.prototype.containerUpdateTransform = ke.prototype.updateTransform;
    var Xe = {
        accessible: !1,
        accessibleTitle: null,
        accessibleHint: null,
        tabIndex: 0,
        _accessibleActive: !1,
        _accessibleDiv: !1
    };
    Ue.mixin(Xe);
    var je = function (t) {
        this._hookDiv = null, (g.tablet || g.phone) && this.createTouchHook();
        var e = document.createElement("div");
        e.style.width = "100px", e.style.height = "100px", e.style.position = "absolute", e.style.top = "0px", e.style.left = "0px", e.style.zIndex = 2, this.div = e, this.pool = [], this.renderId = 0, this.debug = !1, this.renderer = t, this.children = [], this._onKeyDown = this._onKeyDown.bind(this), this._onMouseMove = this._onMouseMove.bind(this), this.isActive = !1, this.isMobileAccessibility = !1, window.addEventListener("keydown", this._onKeyDown, !1)
    };
    je.prototype.createTouchHook = function () {
        var t = this, e = document.createElement("button");
        e.style.width = "1px", e.style.height = "1px", e.style.position = "absolute", e.style.top = "-1000px", e.style.left = "-1000px", e.style.zIndex = 2, e.style.backgroundColor = "#FF0000", e.title = "HOOK DIV", e.addEventListener("focus", function () {
            t.isMobileAccessibility = !0, t.activate(), t.destroyTouchHook()
        }), document.body.appendChild(e), this._hookDiv = e
    }, je.prototype.destroyTouchHook = function () {
        this._hookDiv && (document.body.removeChild(this._hookDiv), this._hookDiv = null)
    }, je.prototype.activate = function () {
        this.isActive || (this.isActive = !0, window.document.addEventListener("mousemove", this._onMouseMove, !0), window.removeEventListener("keydown", this._onKeyDown, !1), this.renderer.on("postrender", this.update, this), this.renderer.view.parentNode && this.renderer.view.parentNode.appendChild(this.div))
    }, je.prototype.deactivate = function () {
        this.isActive && !this.isMobileAccessibility && (this.isActive = !1, window.document.removeEventListener("mousemove", this._onMouseMove, !0), window.addEventListener("keydown", this._onKeyDown, !1), this.renderer.off("postrender", this.update), this.div.parentNode && this.div.parentNode.removeChild(this.div))
    }, je.prototype.updateAccessibleObjects = function (t) {
        if (t.visible) {
            t.accessible && t.interactive && (t._accessibleActive || this.addChild(t), t.renderId = this.renderId);
            for (var e = t.children, i = 0; i < e.length; i++) this.updateAccessibleObjects(e[i])
        }
    }, je.prototype.update = function () {
        if (this.renderer.renderingToScreen) {
            this.updateAccessibleObjects(this.renderer._lastObjectRendered);
            var t = this.renderer.view.getBoundingClientRect(), e = t.width / this.renderer.width,
                i = t.height / this.renderer.height, r = this.div;
            r.style.left = t.left + "px", r.style.top = t.top + "px", r.style.width = this.renderer.width + "px", r.style.height = this.renderer.height + "px";
            for (var n = 0; n < this.children.length; n++) {
                var o = this.children[n];
                if (o.renderId !== this.renderId) o._accessibleActive = !1, Ht(this.children, n, 1), this.div.removeChild(o._accessibleDiv), this.pool.push(o._accessibleDiv), o._accessibleDiv = null, n--, 0 === this.children.length && this.deactivate(); else {
                    r = o._accessibleDiv;
                    var s = o.hitArea, a = o.worldTransform;
                    o.hitArea ? (r.style.left = (a.tx + s.x * a.a) * e + "px", r.style.top = (a.ty + s.y * a.d) * i + "px", r.style.width = s.width * a.a * e + "px", r.style.height = s.height * a.d * i + "px") : (s = o.getBounds(), this.capHitArea(s), r.style.left = s.x * e + "px", r.style.top = s.y * i + "px", r.style.width = s.width * e + "px", r.style.height = s.height * i + "px", r.title !== o.accessibleTitle && null !== o.accessibleTitle && (r.title = o.accessibleTitle), r.getAttribute("aria-label") !== o.accessibleHint && null !== o.accessibleHint && r.setAttribute("aria-label", o.accessibleHint))
                }
            }
            this.renderId++
        }
    }, je.prototype.capHitArea = function (t) {
        t.x < 0 && (t.width += t.x, t.x = 0), t.y < 0 && (t.height += t.y, t.y = 0), t.x + t.width > this.renderer.width && (t.width = this.renderer.width - t.x), t.y + t.height > this.renderer.height && (t.height = this.renderer.height - t.y)
    }, je.prototype.addChild = function (t) {
        var e = this.pool.pop();
        e || ((e = document.createElement("button")).style.width = "100px", e.style.height = "100px", e.style.backgroundColor = this.debug ? "rgba(255,0,0,0.5)" : "transparent", e.style.position = "absolute", e.style.zIndex = 2, e.style.borderStyle = "none", navigator.userAgent.toLowerCase().indexOf("chrome") > -1 ? e.setAttribute("aria-live", "off") : e.setAttribute("aria-live", "polite"), navigator.userAgent.match(/rv:.*Gecko\//) ? e.setAttribute("aria-relevant", "additions") : e.setAttribute("aria-relevant", "text"), e.addEventListener("click", this._onClick.bind(this)), e.addEventListener("focus", this._onFocus.bind(this)), e.addEventListener("focusout", this._onFocusOut.bind(this))), t.accessibleTitle && null !== t.accessibleTitle ? e.title = t.accessibleTitle : t.accessibleHint && null !== t.accessibleHint || (e.title = "displayObject " + t.tabIndex), t.accessibleHint && null !== t.accessibleHint && e.setAttribute("aria-label", t.accessibleHint), t._accessibleActive = !0, t._accessibleDiv = e, e.displayObject = t, this.children.push(t), this.div.appendChild(t._accessibleDiv), t._accessibleDiv.tabIndex = t.tabIndex
    }, je.prototype._onClick = function (t) {
        var e = this.renderer.plugins.interaction;
        e.dispatchEvent(t.target.displayObject, "click", e.eventData)
    }, je.prototype._onFocus = function (t) {
        t.target.getAttribute("aria-live", "off") || t.target.setAttribute("aria-live", "assertive");
        var e = this.renderer.plugins.interaction;
        e.dispatchEvent(t.target.displayObject, "mouseover", e.eventData)
    }, je.prototype._onFocusOut = function (t) {
        t.target.getAttribute("aria-live", "off") || t.target.setAttribute("aria-live", "polite");
        var e = this.renderer.plugins.interaction;
        e.dispatchEvent(t.target.displayObject, "mouseout", e.eventData)
    }, je.prototype._onKeyDown = function (t) {
        9 === t.keyCode && this.activate()
    }, je.prototype._onMouseMove = function (t) {
        0 === t.movementX && 0 === t.movementY || this.deactivate()
    }, je.prototype.destroy = function () {
        this.destroyTouchHook(), this.div = null;
        for (var t = 0; t < this.children.length; t++) this.children[t].div = null;
        window.document.removeEventListener("mousemove", this._onMouseMove, !0), window.removeEventListener("keydown", this._onKeyDown), this.pool = null, this.children = null, this.renderer = null
    };
    var Ge = {AccessibilityManager: je, accessibleTarget: Xe}, He = function (t) {
        this.items = [], this._name = t
    }, Ye = {empty: {configurable: !0}, name: {configurable: !0}};
    He.prototype.emit = function (t, e, i, r, n, o, s, a) {
        if (arguments.length > 8) throw new Error("max arguments reached");
        for (var h = this.name, u = this.items, l = 0, c = u.length; l < c; l++) u[l][h](t, e, i, r, n, o, s, a);
        return this
    }, He.prototype.add = function (t) {
        return t[this._name] && (this.remove(t), this.items.push(t)), this
    }, He.prototype.remove = function (t) {
        var e = this.items.indexOf(t);
        return -1 !== e && this.items.splice(e, 1), this
    }, He.prototype.contains = function (t) {
        return -1 !== this.items.indexOf(t)
    }, He.prototype.removeAll = function () {
        return this.items.length = 0, this
    }, He.prototype.destroy = function () {
        this.removeAll(), this.items = null, this._name = null
    }, Ye.empty.get = function () {
        return 0 === this.items.length
    }, Ye.name.get = function () {
        return this._name
    }, Object.defineProperties(He.prototype, Ye), He.prototype.dispatch = He.prototype.emit, He.prototype.run = He.prototype.emit, m.TARGET_FPMS = .06;
    var ze = {INTERACTION: 50, HIGH: 25, NORMAL: 0, LOW: -25, UTILITY: -50}, Ve = function (t, e, i, r) {
        void 0 === e && (e = null), void 0 === i && (i = 0), void 0 === r && (r = !1), this.fn = t, this.context = e, this.priority = i, this.once = r, this.next = null, this.previous = null, this._destroyed = !1
    };
    Ve.prototype.match = function (t, e) {
        return e = e || null, this.fn === t && this.context === e
    }, Ve.prototype.emit = function (t) {
        this.fn && (this.context ? this.fn.call(this.context, t) : this.fn(t));
        var e = this.next;
        return this.once && this.destroy(!0), this._destroyed && (this.next = null), e
    }, Ve.prototype.connect = function (t) {
        this.previous = t, t.next && (t.next.previous = this), this.next = t.next, t.next = this
    }, Ve.prototype.destroy = function (t) {
        void 0 === t && (t = !1), this._destroyed = !0, this.fn = null, this.context = null, this.previous && (this.previous.next = this.next), this.next && (this.next.previous = this.previous);
        var e = this.next;
        return this.next = t ? null : e, this.previous = null, e
    };
    var We = function () {
            var t = this;
            this._head = new Ve(null, null, 1 / 0), this._requestId = null, this._maxElapsedMS = 100, this._minElapsedMS = 0, this.autoStart = !1, this.deltaTime = 1, this.deltaMS = 1 / m.TARGET_FPMS, this.elapsedMS = 1 / m.TARGET_FPMS, this.lastTime = -1, this.speed = 1, this.started = !1, this._protected = !1, this._tick = function (e) {
                t._requestId = null, t.started && (t.update(e), t.started && null === t._requestId && t._head.next && (t._requestId = requestAnimationFrame(t._tick)))
            }
        }, qe = {FPS: {configurable: !0}, minFPS: {configurable: !0}, maxFPS: {configurable: !0}},
        Ze = {shared: {configurable: !0}, system: {configurable: !0}};
    We.prototype._requestIfNeeded = function () {
        null === this._requestId && this._head.next && (this.lastTime = performance.now(), this._requestId = requestAnimationFrame(this._tick))
    }, We.prototype._cancelIfNeeded = function () {
        null !== this._requestId && (cancelAnimationFrame(this._requestId), this._requestId = null)
    }, We.prototype._startIfPossible = function () {
        this.started ? this._requestIfNeeded() : this.autoStart && this.start()
    }, We.prototype.add = function (t, e, i) {
        return void 0 === i && (i = ze.NORMAL), this._addListener(new Ve(t, e, i))
    }, We.prototype.addOnce = function (t, e, i) {
        return void 0 === i && (i = ze.NORMAL), this._addListener(new Ve(t, e, i, !0))
    }, We.prototype._addListener = function (t) {
        var e = this._head.next, i = this._head;
        if (e) {
            for (; e;) {
                if (t.priority > e.priority) {
                    t.connect(i);
                    break
                }
                i = e, e = e.next
            }
            t.previous || t.connect(i)
        } else t.connect(i);
        return this._startIfPossible(), this
    }, We.prototype.remove = function (t, e) {
        for (var i = this._head.next; i;) i = i.match(t, e) ? i.destroy() : i.next;
        return this._head.next || this._cancelIfNeeded(), this
    }, We.prototype.start = function () {
        this.started || (this.started = !0, this._requestIfNeeded())
    }, We.prototype.stop = function () {
        this.started && (this.started = !1, this._cancelIfNeeded())
    }, We.prototype.destroy = function () {
        if (!this._protected) {
            this.stop();
            for (var t = this._head.next; t;) t = t.destroy(!0);
            this._head.destroy(), this._head = null
        }
    }, We.prototype.update = function (t) {
        var e;
        if (void 0 === t && (t = performance.now()), t > this.lastTime) {
            if ((e = this.elapsedMS = t - this.lastTime) > this._maxElapsedMS && (e = this._maxElapsedMS), e *= this.speed, this._minElapsedMS && e + 1 < this._minElapsedMS) return;
            this.deltaMS = e, this.deltaTime = this.deltaMS * m.TARGET_FPMS;
            for (var i = this._head, r = i.next; r;) r = r.emit(this.deltaTime);
            i.next || this._cancelIfNeeded()
        } else this.deltaTime = this.deltaMS = this.elapsedMS = 0;
        this.lastTime = t
    }, qe.FPS.get = function () {
        return 1e3 / this.elapsedMS
    }, qe.minFPS.get = function () {
        return 1e3 / this._maxElapsedMS
    }, qe.minFPS.set = function (t) {
        var e = Math.min(this.maxFPS, t), i = Math.min(Math.max(0, e) / 1e3, m.TARGET_FPMS);
        this._maxElapsedMS = 1 / i
    }, qe.maxFPS.get = function () {
        return this._minElapsedMS ? 1e3 / this._minElapsedMS : 1e3 * m.TARGET_FPMS
    }, qe.maxFPS.set = function (t) {
        if (t / 1e3 >= m.TARGET_FPMS) this._minElapsedMS = 0; else {
            var e = Math.max(this.minFPS, t), i = Math.min(Math.max(1, e) / 1e3, m.TARGET_FPMS);
            this._minElapsedMS = 1 / i
        }
    }, Ze.shared.get = function () {
        if (!We._shared) {
            var t = We._shared = new We;
            t.autoStart = !0, t._protected = !0
        }
        return We._shared
    }, Ze.system.get = function () {
        if (!We._system) {
            var t = We._system = new We;
            t.autoStart = !0, t._protected = !0
        }
        return We._system
    }, Object.defineProperties(We.prototype, qe), Object.defineProperties(We, Ze);
    var Ke = function () {
    };
    Ke.init = function (t) {
        var e = this;
        t = Object.assign({
            autoStart: !0,
            sharedTicker: !1
        }, t), Object.defineProperty(this, "ticker", {
            set: function (t) {
                this._ticker && this._ticker.remove(this.render, this), this._ticker = t, t && t.add(this.render, this, ze.LOW)
            }, get: function () {
                return this._ticker
            }
        }), this.stop = function () {
            e._ticker.stop()
        }, this.start = function () {
            e._ticker.start()
        }, this._ticker = null, this.ticker = t.sharedTicker ? We.shared : new We, t.autoStart && this.start()
    }, Ke.destroy = function () {
        if (this._ticker) {
            var t = this._ticker;
            this.ticker = null, t.destroy()
        }
    };
    var Je = function (t, e) {
        void 0 === t && (t = 0), void 0 === e && (e = 0), this._width = t, this._height = e, this.destroyed = !1, this.internal = !1, this.onResize = new He("setRealSize", 2), this.onUpdate = new He("update")
    }, Qe = {valid: {configurable: !0}, width: {configurable: !0}, height: {configurable: !0}};
    Je.prototype.bind = function (t) {
        this.onResize.add(t), this.onUpdate.add(t), (this._width || this._height) && this.onResize.run(this._width, this._height)
    }, Je.prototype.unbind = function (t) {
        this.onResize.remove(t), this.onUpdate.remove(t)
    }, Je.prototype.resize = function (t, e) {
        t === this._width && e === this._height || (this._width = t, this._height = e, this.onResize.run(t, e))
    }, Qe.valid.get = function () {
        return !!this._width && !!this._height
    }, Je.prototype.update = function () {
        this.destroyed || this.onUpdate.run()
    }, Je.prototype.load = function () {
        return Promise.resolve()
    }, Qe.width.get = function () {
        return this._width
    }, Qe.height.get = function () {
        return this._height
    }, Je.prototype.upload = function (t, e, i) {
        return !1
    }, Je.prototype.style = function (t, e, i) {
        return !1
    }, Je.prototype.dispose = function () {
    }, Je.prototype.destroy = function () {
        this.destroyed || (this.onResize.removeAll(), this.onResize = null, this.onUpdate.removeAll(), this.onUpdate = null, this.destroyed = !0, this.dispose())
    }, Object.defineProperties(Je.prototype, Qe);
    var $e = function (t) {
        function e(e) {
            t.call(this, e.width, e.height), this.source = e
        }

        return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.crossOrigin = function (t, e, i) {
            void 0 === i && 0 !== e.indexOf("data:") ? t.crossOrigin = oe(e) : !1 !== i && (t.crossOrigin = "string" == typeof i ? i : "anonymous")
        }, e.prototype.upload = function (t, e, i, r) {
            var n = t.gl, o = e.realWidth, s = e.realHeight;
            return r = r || this.source, n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.premultiplyAlpha), e.target === n.TEXTURE_2D && i.width === o && i.height === s ? n.texSubImage2D(n.TEXTURE_2D, 0, 0, 0, e.format, e.type, r) : (i.width = o, i.height = s, n.texImage2D(e.target, 0, e.format, e.format, e.type, r)), !0
        }, e.prototype.update = function () {
            this.destroyed || (this.resize(this.source.width, this.source.height), t.prototype.update.call(this))
        }, e.prototype.dispose = function () {
            this.source = null
        }, e
    }(Je), ti = function (t) {
        function e(e, i) {
            if (i = i || {}, !(e instanceof HTMLImageElement)) {
                var r = new Image;
                t.crossOrigin(r, e, i.crossorigin), r.src = e, e = r
            }
            t.call(this, e), this.url = e.src, this._process = null, this.preserveBitmap = !1, this.createBitmap = (void 0 !== i.createBitmap ? i.createBitmap : m.CREATE_IMAGE_BITMAP) && !!window.createImageBitmap, this.premultiplyAlpha = !1 !== i.premultiplyAlpha, this.bitmap = null, this._load = null, !1 !== i.autoLoad && this.load()
        }

        return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.load = function (t) {
            var e = this;
            return void 0 !== t && (this.createBitmap = t), this._load ? this._load : (this._load = new Promise(function (t) {
                e.url = e.source.src;
                var i = e.source, r = function () {
                    e.destroyed || (i.onload = null, i.onerror = null, e.resize(i.width, i.height), e._load = null, e.createBitmap ? t(e.process()) : t(e))
                };
                i.complete && i.src ? r() : i.onload = r
            }), this._load)
        }, e.prototype.process = function () {
            var t = this;
            return null !== this._process ? this._process : null === this.bitmap && window.createImageBitmap ? (this._process = window.createImageBitmap(this.source, 0, 0, this.source.width, this.source.height, {premultiplyAlpha: this.premultiplyAlpha ? "premultiply" : "none"}).then(function (e) {
                return t.destroyed ? Promise.reject() : (t.bitmap = e, t.update(), t._process = null, Promise.resolve(t))
            }), this._process) : Promise.resolve(this)
        }, e.prototype.upload = function (e, i, r) {
            if (i.premultiplyAlpha = this.premultiplyAlpha, !this.createBitmap) return t.prototype.upload.call(this, e, i, r);
            if (!this.bitmap && (this.process(), !this.bitmap)) return !1;
            if (t.prototype.upload.call(this, e, i, r, this.bitmap), !this.preserveBitmap) {
                var n = !0;
                for (var o in i._glTextures) {
                    var s = i._glTextures[o];
                    if (s !== r && s.dirtyId !== i.dirtyId) {
                        n = !1;
                        break
                    }
                }
                n && (this.bitmap.close && this.bitmap.close(), this.bitmap = null)
            }
            return !0
        }, e.prototype.dispose = function () {
            t.prototype.dispose.call(this), this.bitmap && (this.bitmap.close(), this.bitmap = null), this._process = null, this._load = null
        }, e
    }($e), ei = [];

    function ii(t, e) {
        if (!t) return null;
        var i = "";
        if ("string" == typeof t) {
            var r = /\.(\w{3,4})(?:$|\?|#)/i.exec(t);
            r && (i = r[1].toLowerCase())
        }
        for (var n = ei.length - 1; n >= 0; --n) {
            var o = ei[n];
            if (o.test && o.test(t, i)) return new o(t, e)
        }
        return new ti(t, e)
    }

    var ri = function (t) {
        function e(e, i) {
            var r = i || {}, n = r.width, o = r.height;
            if (!n || !o) throw new Error("BufferResource width or height invalid");
            t.call(this, n, o), this.data = e
        }

        return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.upload = function (t, e, i) {
            var r = t.gl;
            if (r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.premultiplyAlpha), i.width === e.width && i.height === e.height) r.texSubImage2D(e.target, 0, 0, 0, e.width, e.height, e.format, e.type, this.data); else {
                i.width = e.width, i.height = e.height;
                var n = e.format;
                2 === t.context.webGLVersion && e.type === t.gl.FLOAT && e.format === t.gl.RGBA && (n = t.gl.RGBA32F), r.texImage2D(e.target, 0, n, e.width, e.height, 0, e.format, e.type, this.data)
            }
            return !0
        }, e.prototype.dispose = function () {
            this.data = null
        }, e.test = function (t) {
            return t instanceof Float32Array || t instanceof Uint8Array || t instanceof Uint32Array
        }, e
    }(Je), ni = {scaleMode: wt.NEAREST, format: bt.RGBA, premultiplyAlpha: !1}, oi = function (t) {
        function e(e, i) {
            void 0 === e && (e = null), void 0 === i && (i = null), t.call(this);
            var r = (i = i || {}).premultiplyAlpha, n = i.mipmap, o = i.scaleMode, s = i.width, a = i.height,
                h = i.wrapMode, u = i.format, l = i.type, c = i.target, d = i.resolution, p = i.resourceOptions;
            !e || e instanceof Je || ((e = ii(e, p)).internal = !0), this.width = s || 0, this.height = a || 0, this.resolution = d || m.RESOLUTION, this.mipmap = void 0 !== n ? n : m.MIPMAP_TEXTURES, this.wrapMode = h || m.WRAP_MODE, this.scaleMode = void 0 !== o ? o : m.SCALE_MODE, this.format = u || bt.RGBA, this.type = l || Et.UNSIGNED_BYTE, this.target = c || Tt.TEXTURE_2D, this.premultiplyAlpha = !1 !== r, this.uid = zt(), this.touched = 0, this.isPowerOfTwo = !1, this._refreshPOT(), this._glTextures = {}, this.dirtyId = 0, this.dirtyStyleId = 0, this.cacheId = null, this.valid = s > 0 && a > 0, this.textureCacheIds = [], this.destroyed = !1, this.resource = null, this._batchEnabled = 0, this.setResource(e)
        }

        t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
        var i = {realWidth: {configurable: !0}, realHeight: {configurable: !0}};
        return i.realWidth.get = function () {
            return this.width * this.resolution
        }, i.realHeight.get = function () {
            return this.height * this.resolution
        }, e.prototype.setStyle = function (t, e) {
            var i;
            return void 0 !== t && t !== this.scaleMode && (this.scaleMode = t, i = !0), void 0 !== e && e !== this.mipmap && (this.mipmap = e, i = !0), i && this.dirtyStyleId++, this
        }, e.prototype.setSize = function (t, e, i) {
            return this.resolution = i || this.resolution, this.width = t, this.height = e, this._refreshPOT(), this.update(), this
        }, e.prototype.setRealSize = function (t, e, i) {
            return this.resolution = i || this.resolution, this.width = t / this.resolution, this.height = e / this.resolution, this._refreshPOT(), this.update(), this
        }, e.prototype._refreshPOT = function () {
            this.isPowerOfTwo = qt(this.realWidth) && qt(this.realHeight)
        }, e.prototype.setResolution = function (t) {
            var e = this.resolution;
            return e === t ? this : (this.resolution = t, this.valid && (this.width = this.width * e / t, this.height = this.height * e / t, this.emit("update", this)), this._refreshPOT(), this)
        }, e.prototype.setResource = function (t) {
            if (this.resource === t) return this;
            if (this.resource) throw new Error("Resource can be set only once");
            return t.bind(this), this.resource = t, this
        }, e.prototype.update = function () {
            this.valid ? (this.dirtyId++, this.dirtyStyleId++, this.emit("update", this)) : this.width > 0 && this.height > 0 && (this.valid = !0, this.emit("loaded", this), this.emit("update", this))
        }, e.prototype.destroy = function () {
            this.resource && (this.resource.unbind(this), this.resource.internal && this.resource.destroy(), this.resource = null), this.cacheId && (delete Qt[this.cacheId], delete Jt[this.cacheId], this.cacheId = null), this.dispose(), e.removeFromCache(this), this.textureCacheIds = null, this.destroyed = !0
        }, e.prototype.dispose = function () {
            this.emit("dispose", this)
        }, e.from = function (t, i) {
            var r = null;
            "string" == typeof t ? r = t : (t._pixiId || (t._pixiId = "pixiid_" + zt()), r = t._pixiId);
            var n = Qt[r];
            return n || ((n = new e(t, i)).cacheId = r, e.addToCache(n, r)), n
        }, e.fromBuffer = function (t, i, r, n) {
            t = t || new Float32Array(i * r * 4);
            var o = new ri(t, {width: i, height: r}), s = t instanceof Float32Array ? Et.FLOAT : Et.UNSIGNED_BYTE;
            return new e(o, Object.assign(ni, n || {width: i, height: r, type: s}))
        }, e.addToCache = function (t, e) {
            e && (-1 === t.textureCacheIds.indexOf(e) && t.textureCacheIds.push(e), Qt[e] && console.warn("BaseTexture added to the cache with an id [" + e + "] that already had an entry"), Qt[e] = t)
        }, e.removeFromCache = function (t) {
            if ("string" == typeof t) {
                var e = Qt[t];
                if (e) {
                    var i = e.textureCacheIds.indexOf(t);
                    return i > -1 && e.textureCacheIds.splice(i, 1), delete Qt[t], e
                }
            } else if (t && t.textureCacheIds) {
                for (var r = 0; r < t.textureCacheIds.length; ++r) delete Qt[t.textureCacheIds[r]];
                return t.textureCacheIds.length = 0, t
            }
            return null
        }, Object.defineProperties(e.prototype, i), e
    }(y);
    oi._globalBatch = 0;
    var si = function (t) {
        function e(e, i) {
            var r;
            i = i || {};
            var n = e;
            Array.isArray(e) && (r = e, n = e.length), t.call(this, i.width, i.height), this.items = [], this.itemDirtyIds = [];
            for (var o = 0; o < n; o++) {
                var s = new oi;
                this.items.push(s), this.itemDirtyIds.push(-1)
            }
            if (this.length = n, this._load = null, r) for (var a = 0; a < n; a++) this.addResourceAt(ii(r[a], i), a)
        }

        return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.dispose = function () {
            for (var t = 0, e = this.length; t < e; t++) this.items[t].destroy();
            this.items = null, this.itemDirtyIds = null, this._load = null
        }, e.prototype.addResourceAt = function (t, e) {
            if (!this.items[e]) throw new Error("Index " + e + " is out of bounds");
            return t.valid && !this.valid && this.resize(t.width, t.height), this.items[e].setResource(t), this
        }, e.prototype.bind = function (e) {
            t.prototype.bind.call(this, e), e.target = Tt.TEXTURE_2D_ARRAY;
            for (var i = 0; i < this.length; i++) this.items[i].on("update", e.update, e)
        }, e.prototype.unbind = function (e) {
            t.prototype.unbind.call(this, e);
            for (var i = 0; i < this.length; i++) this.items[i].off("update", e.update, e)
        }, e.prototype.load = function () {
            var t = this;
            if (this._load) return this._load;
            var e = this.items.map(function (t) {
                return t.resource
            }), i = e.map(function (t) {
                return t.load()
            });
            return this._load = Promise.all(i).then(function () {
                var i = e[0], r = i.width, n = i.height;
                return t.resize(r, n), Promise.resolve(t)
            }), this._load
        }, e.prototype.upload = function (t, e, i) {
            var r = this.length, n = this.itemDirtyIds, o = this.items, s = t.gl;
            i.dirtyId < 0 && s.texImage3D(s.TEXTURE_2D_ARRAY, 0, e.format, this._width, this._height, r, 0, e.format, e.type, null);
            for (var a = 0; a < r; a++) {
                var h = o[a];
                n[a] < h.dirtyId && (n[a] = h.dirtyId, h.valid && s.texSubImage3D(s.TEXTURE_2D_ARRAY, 0, 0, 0, a, h.resource.width, h.resource.height, 1, e.format, e.type, h.resource.source))
            }
            return !0
        }, e
    }(Je), ai = function (t) {
        function e() {
            t.apply(this, arguments)
        }

        return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.test = function (t) {
            return t instanceof HTMLCanvasElement
        }, e
    }($e), hi = function (t) {
        function e(i, r) {
            if (r = r || {}, t.call(this, i, r), this.length !== e.SIDES) throw new Error("Invalid length. Got " + this.length + ", expected 6");
            for (var n = 0; n < e.SIDES; n++) this.items[n].target = Tt.TEXTURE_CUBE_MAP_POSITIVE_X + n;
            !1 !== r.autoLoad && this.load()
        }

        return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.bind = function (e) {
            t.prototype.bind.call(this, e), e.target = Tt.TEXTURE_CUBE_MAP
        }, e.prototype.upload = function (t, i, r) {
            for (var n = this.itemDirtyIds, o = 0; o < e.SIDES; o++) {
                var s = this.items[o];
                n[o] < s.dirtyId && (n[o] = s.dirtyId, s.valid && s.resource.upload(t, s, r))
            }
            return !0
        }, e
    }(si);
    hi.SIDES = 6;
    var ui = function (t) {
        function e(e, i) {
            i = i || {}, t.call(this, document.createElement("canvas")), this.svg = e, this.scale = i.scale || 1, this._resolve = null, this._load = null, !1 !== i.autoLoad && this.load()
        }

        return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.load = function () {
            var t = this;
            return this._load ? this._load : (this._load = new Promise(function (e) {
                t._resolve = function () {
                    t.resize(t.source.width, t.source.height), e(t)
                }, /^\<svg/.test(t.svg.trim()) && (t.svg = "data:image/svg+xml;utf8," + t.svg);
                var i = ne(t.svg);
                i ? t._loadDataUri(i) : t._loadXhr()
            }), this._load)
        }, e.prototype._loadDataUri = function (t) {
            var e;
            if ("base64" === t.encoding) {
                if (!atob) throw new Error("Your browser doesn't support base64 conversions.");
                e = atob(t.data)
            } else e = t.data;
            this._loadString(e)
        }, e.prototype._loadXhr = function () {
            var t = this, e = new XMLHttpRequest;
            e.onload = function () {
                if (e.readyState !== e.DONE || 200 !== e.status) throw new Error("Failed to load SVG using XHR.");
                t._loadString(e.response)
            }, e.open("GET", this.svg, !0), e.send()
        }, e.prototype._loadString = function (t) {
            var i = this, r = e.getSize(t), n = new Image;
            n.src = "data:image/svg+xml," + t, n.onerror = function () {
                throw new Error("Unable to load image from: " + n.src)
            }, n.onload = function () {
                var t = r.width, e = r.height;
                if (!t || !e) throw new Error("The SVG image must have width and height defined (in pixels), canvas API needs them.");
                i._width = Math.round(t * i.scale), i._height = Math.round(e * i.scale);
                var o = i.source;
                o.width = i._width, o.height = i._height, o._pixiId = "canvas_" + zt(), o.getContext("2d").drawImage(n, 0, 0, t, e, 0, 0, i.width, i.height), i._resolve(), i._resolve = null
            }
        }, e.getSize = function (t) {
            var i = e.SVG_SIZE.exec(t), r = {};
            return i && (r[i[1]] = Math.round(parseFloat(i[3])), r[i[5]] = Math.round(parseFloat(i[7]))), r
        }, e.prototype.dispose = function () {
            t.prototype.dispose.call(this), this._resolve = null
        }, e.test = function (t, e) {
            return "svg" === e || "string" == typeof t && 0 === t.indexOf("data:image/svg+xml")
        }, e
    }($e);
    ui.SVG_SIZE = /<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i;
    var li = function (t) {
        function e(e, i) {
            if (i = i || {}, !(e instanceof HTMLVideoElement)) {
                var r = document.createElement("video");
                r.setAttribute("webkit-playsinline", ""), r.setAttribute("playsinline", ""), "string" == typeof e && (e = [e]), t.crossOrigin(r, e[0].src || e[0], i.crossorigin);
                for (var n = 0; n < e.length; ++n) {
                    var o = document.createElement("source"), s = e[n], a = s.src, h = s.mime,
                        u = (a = a || e[n]).split("?").shift().toLowerCase(), l = u.substr(u.lastIndexOf(".") + 1);
                    h = h || "video/" + l, o.src = a, o.type = h, r.appendChild(o)
                }
                e = r
            }
            t.call(this, e), this._autoUpdate = !0, this._isAutoUpdating = !1, this._updateFPS = i.updateFPS || 0, this._msToNextUpdate = 0, this.autoPlay = !1 !== i.autoPlay, this._load = null, this._resolve = null, this._onCanPlay = this._onCanPlay.bind(this), !1 !== i.autoLoad && this.load()
        }

        t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
        var i = {autoUpdate: {configurable: !0}, updateFPS: {configurable: !0}};
        return e.prototype.update = function (e) {
            if (void 0 === e && (e = 0), !this.destroyed) {
                var i = We.shared.elapsedMS * this.source.playbackRate;
                this._msToNextUpdate = Math.floor(this._msToNextUpdate - i), (!this._updateFPS || this._msToNextUpdate <= 0) && (t.prototype.update.call(this, e), this._msToNextUpdate = this._updateFPS ? Math.floor(1e3 / this._updateFPS) : 0)
            }
        }, e.prototype.load = function () {
            var t = this;
            if (this._load) return this._load;
            var e = this.source;
            return (e.readyState === e.HAVE_ENOUGH_DATA || e.readyState === e.HAVE_FUTURE_DATA) && e.width && e.height && (e.complete = !0), e.addEventListener("play", this._onPlayStart.bind(this)), e.addEventListener("pause", this._onPlayStop.bind(this)), this._isSourceReady() ? this._onCanPlay() : (e.addEventListener("canplay", this._onCanPlay), e.addEventListener("canplaythrough", this._onCanPlay)), this._load = new Promise(function (i) {
                t.valid ? i(t) : (t._resolve = i, e.load())
            }), this._load
        }, e.prototype._isSourcePlaying = function () {
            var t = this.source;
            return t.currentTime > 0 && !1 === t.paused && !1 === t.ended && t.readyState > 2
        }, e.prototype._isSourceReady = function () {
            return 3 === this.source.readyState || 4 === this.source.readyState
        }, e.prototype._onPlayStart = function () {
            this.valid || this._onCanPlay(), !this._isAutoUpdating && this.autoUpdate && (We.shared.add(this.update, this), this._isAutoUpdating = !0)
        }, e.prototype._onPlayStop = function () {
            this._isAutoUpdating && (We.shared.remove(this.update, this), this._isAutoUpdating = !1)
        }, e.prototype._onCanPlay = function () {
            var t = this.source;
            t.removeEventListener("canplay", this._onCanPlay), t.removeEventListener("canplaythrough", this._onCanPlay);
            var e = this.valid;
            this.resize(t.videoWidth, t.videoHeight), !e && this._resolve && (this._resolve(this), this._resolve = null), this._isSourcePlaying() ? this._onPlayStart() : this.autoPlay && t.play()
        }, e.prototype.dispose = function () {
            this._isAutoUpdating && We.shared.remove(this.update, this), this.source && (this.source.pause(), this.source.src = "", this.source.load()), t.prototype.dispose.call(this)
        }, i.autoUpdate.get = function () {
            return this._autoUpdate
        }, i.autoUpdate.set = function (t) {
            t !== this._autoUpdate && (this._autoUpdate = t, !this._autoUpdate && this._isAutoUpdating ? (We.shared.remove(this.update, this), this._isAutoUpdating = !1) : this._autoUpdate && !this._isAutoUpdating && (We.shared.add(this.update, this), this._isAutoUpdating = !0))
        }, i.updateFPS.get = function () {
            return this._updateFPS
        }, i.updateFPS.set = function (t) {
            t !== this._updateFPS && (this._updateFPS = t)
        }, e.test = function (t, i) {
            return t instanceof HTMLVideoElement || e.TYPES.indexOf(i) > -1
        }, Object.defineProperties(e.prototype, i), e
    }($e);
    li.TYPES = ["mp4", "m4v", "webm", "ogg", "ogv", "h264", "avi", "mov"], ei.push(ti, ai, li, ui, ri, hi, si);
    var ci = {
        INSTALLED: ei,
        autoDetectResource: ii,
        ArrayResource: si,
        BufferResource: ri,
        CanvasResource: ai,
        CubeResource: hi,
        ImageResource: ti,
        SVGResource: ui,
        VideoResource: li,
        Resource: Je,
        BaseImageResource: $e
    }, di = function (t) {
        this.renderer = t, this.renderer.runners.contextChange.add(this)
    };
    di.prototype.contextChange = function (t) {
    }, di.prototype.destroy = function () {
        this.renderer.runners.contextChange.remove(this), this.renderer = null
    };
    var pi = function (t) {
        function e() {
            t.apply(this, arguments)
        }

        return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.upload = function (t, e, i) {
            var r = t.gl;
            return r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.premultiplyAlpha), i.width === e.width && i.height === e.height ? r.texSubImage2D(e.target, 0, 0, 0, e.width, e.height, e.format, e.type, this.data) : (i.width = e.width, i.height = e.height, r.texImage2D(e.target, 0, r.DEPTH_COMPONENT16, e.width, e.height, 0, e.format, e.type, this.data)), !0
        }, e
    }(ri), fi = function (t, e) {
        this.width = Math.ceil(t || 100), this.height = Math.ceil(e || 100), this.stencil = !1, this.depth = !1, this.dirtyId = 0, this.dirtyFormat = 0, this.dirtySize = 0, this.depthTexture = null, this.colorTextures = [], this.glFramebuffers = {}, this.disposeRunner = new He("disposeFramebuffer", 2)
    }, vi = {colorTexture: {configurable: !0}};
    vi.colorTexture.get = function () {
        return this.colorTextures[0]
    }, fi.prototype.addColorTexture = function (t, e) {
        return void 0 === t && (t = 0), this.colorTextures[t] = e || new oi(null, {
            scaleMode: 0,
            resolution: 1,
            mipmap: !1,
            width: this.width,
            height: this.height
        }), this.dirtyId++, this.dirtyFormat++, this
    }, fi.prototype.addDepthTexture = function (t) {
        return this.depthTexture = t || new oi(new pi(null, {width: this.width, height: this.height}), {
            scaleMode: 0,
            resolution: 1,
            width: this.width,
            height: this.height,
            mipmap: !1,
            format: bt.DEPTH_COMPONENT,
            type: Et.UNSIGNED_SHORT
        }), this.dirtyId++, this.dirtyFormat++, this
    }, fi.prototype.enableDepth = function () {
        return this.depth = !0, this.dirtyId++, this.dirtyFormat++, this
    }, fi.prototype.enableStencil = function () {
        return this.stencil = !0, this.dirtyId++, this.dirtyFormat++, this
    }, fi.prototype.resize = function (t, e) {
        if (t = Math.ceil(t), e = Math.ceil(e), t !== this.width || e !== this.height) {
            this.width = t, this.height = e, this.dirtyId++, this.dirtySize++;
            for (var i = 0; i < this.colorTextures.length; i++) {
                var r = this.colorTextures[i], n = r.resolution;
                r.setSize(t / n, e / n)
            }
            if (this.depthTexture) {
                var o = this.depthTexture.resolution;
                this.depthTexture.setSize(t / o, e / o)
            }
        }
    }, fi.prototype.dispose = function () {
        this.disposeRunner.run(this, !1)
    }, Object.defineProperties(fi.prototype, vi);
    var gi = function (t) {
        function e(e) {
            "number" == typeof e && (e = {
                width: arguments[0],
                height: arguments[1],
                scaleMode: arguments[2],
                resolution: arguments[3]
            });
            t.call(this, null, e);
            var i = e || {}, r = i.width, n = i.height;
            this.mipmap = !1, this.width = Math.ceil(r) || 100, this.height = Math.ceil(n) || 100, this.valid = !0, this._canvasRenderTarget = null, this.clearColor = [0, 0, 0, 0], this.framebuffer = new fi(this.width * this.resolution, this.height * this.resolution).addColorTexture(0, this).enableStencil(), this.stencilMaskStack = [], this.filterStack = [{}]
        }

        return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.resize = function (t, e) {
            t = Math.ceil(t), e = Math.ceil(e), this.framebuffer.resize(t * this.resolution, e * this.resolution)
        }, e.prototype.dispose = function () {
            this.framebuffer.dispose(), t.prototype.dispose.call(this)
        }, e.prototype.destroy = function () {
            t.prototype.destroy.call(this, !0), this.framebuffer = null, this.renderer = null
        }, e
    }(oi), mi = function () {
        this.x0 = 0, this.y0 = 0, this.x1 = 1, this.y1 = 0, this.x2 = 1, this.y2 = 1, this.x3 = 0, this.y3 = 1, this.uvsFloat32 = new Float32Array(8)
    };
    mi.prototype.set = function (t, e, i) {
        var r = e.width, n = e.height;
        if (i) {
            var o = t.width / 2 / r, s = t.height / 2 / n, a = t.x / r + o, h = t.y / n + s;
            i = Pe.add(i, Pe.NW), this.x0 = a + o * Pe.uX(i), this.y0 = h + s * Pe.uY(i), i = Pe.add(i, 2), this.x1 = a + o * Pe.uX(i), this.y1 = h + s * Pe.uY(i), i = Pe.add(i, 2), this.x2 = a + o * Pe.uX(i), this.y2 = h + s * Pe.uY(i), i = Pe.add(i, 2), this.x3 = a + o * Pe.uX(i), this.y3 = h + s * Pe.uY(i)
        } else this.x0 = t.x / r, this.y0 = t.y / n, this.x1 = (t.x + t.width) / r, this.y1 = t.y / n, this.x2 = (t.x + t.width) / r, this.y2 = (t.y + t.height) / n, this.x3 = t.x / r, this.y3 = (t.y + t.height) / n;
        this.uvsFloat32[0] = this.x0, this.uvsFloat32[1] = this.y0, this.uvsFloat32[2] = this.x1, this.uvsFloat32[3] = this.y1, this.uvsFloat32[4] = this.x2, this.uvsFloat32[5] = this.y2, this.uvsFloat32[6] = this.x3, this.uvsFloat32[7] = this.y3
    };
    var yi = new mi, _i = function (t) {
        function e(i, r, n, o, s, a) {
            if (t.call(this), this.noFrame = !1, r || (this.noFrame = !0, r = new Oe(0, 0, 1, 1)), i instanceof e && (i = i.baseTexture), this.baseTexture = i, this._frame = r, this.trim = o, this.valid = !1, this.requiresUpdate = !1, this._uvs = yi, this.uvMatrix = null, this.orig = n || r, this._rotate = Number(s || 0), !0 === s) this._rotate = 2; else if (this._rotate % 2 != 0) throw new Error("attempt to use diamond-shaped UVs. If you are sure, set rotation manually");
            this.defaultAnchor = a ? new le(a.x, a.y) : new le(0, 0), this._updateID = 0, this.textureCacheIds = [], this.noFrame ? (i.valid && this.onBaseTextureUpdated(i), i.on("update", this.onBaseTextureUpdated, this)) : i.valid ? this.frame = r : i.once("loaded", this.onBaseTextureUpdated, this)
        }

        t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
        var i = {
            frame: {configurable: !0},
            rotate: {configurable: !0},
            width: {configurable: !0},
            height: {configurable: !0}
        };
        return e.prototype.update = function () {
            this.baseTexture.resource && this.baseTexture.resource.update()
        }, e.prototype.onBaseTextureUpdated = function (t) {
            if (this.noFrame) {
                if (!this.baseTexture.valid) return;
                this._frame.width = t.width, this._frame.height = t.height, this.valid = !0, this.updateUvs()
            } else this.frame = this._frame;
            this.emit("update", this)
        }, e.prototype.destroy = function (t) {
            if (this.baseTexture) {
                if (t) {
                    var i = this.baseTexture.resource;
                    i && Jt[i.url] && e.removeFromCache(i.url), this.baseTexture.destroy()
                }
                this.baseTexture.off("update", this.onBaseTextureUpdated, this), this.baseTexture = null
            }
            this._frame = null, this._uvs = null, this.trim = null, this.orig = null, this.valid = !1, e.removeFromCache(this), this.textureCacheIds = null
        }, e.prototype.clone = function () {
            return new e(this.baseTexture, this.frame, this.orig, this.trim, this.rotate, this.defaultAnchor)
        }, e.prototype.updateUvs = function () {
            this._uvs === yi && (this._uvs = new mi), this._uvs.set(this._frame, this.baseTexture, this.rotate), this._updateID++
        }, e.from = function (t, i) {
            void 0 === i && (i = {});
            var r = null;
            "string" == typeof t ? r = t : (t._pixiId || (t._pixiId = "pixiid_" + zt()), r = t._pixiId);
            var n = Jt[r];
            return n || (i.resolution || (i.resolution = se(t)), (n = new e(new oi(t, i))).baseTexture.cacheId = r, oi.addToCache(n.baseTexture, r), e.addToCache(n, r)), n
        }, e.fromBuffer = function (t, i, r, n) {
            return new e(oi.fromBuffer(t, i, r, n))
        }, e.fromLoader = function (t, i, r) {
            var n = new ti(t);
            n.url = i;
            var o = new e(new oi(n, {scaleMode: m.SCALE_MODE, resolution: se(i)}));
            return r || (r = i), oi.addToCache(o.baseTexture, r), e.addToCache(o, r), r !== i && (oi.addToCache(o.baseTexture, i), e.addToCache(o, i)), o
        }, e.addToCache = function (t, e) {
            e && (-1 === t.textureCacheIds.indexOf(e) && t.textureCacheIds.push(e), Jt[e] && console.warn("Texture added to the cache with an id [" + e + "] that already had an entry"), Jt[e] = t)
        }, e.removeFromCache = function (t) {
            if ("string" == typeof t) {
                var e = Jt[t];
                if (e) {
                    var i = e.textureCacheIds.indexOf(t);
                    return i > -1 && e.textureCacheIds.splice(i, 1), delete Jt[t], e
                }
            } else if (t && t.textureCacheIds) {
                for (var r = 0; r < t.textureCacheIds.length; ++r) Jt[t.textureCacheIds[r]] === t && delete Jt[t.textureCacheIds[r]];
                return t.textureCacheIds.length = 0, t
            }
            return null
        }, i.frame.get = function () {
            return this._frame
        }, i.frame.set = function (t) {
            this._frame = t, this.noFrame = !1;
            var e = t.x, i = t.y, r = t.width, n = t.height, o = e + r > this.baseTexture.width,
                s = i + n > this.baseTexture.height;
            if (o || s) {
                var a = o && s ? "and" : "or",
                    h = "X: " + e + " + " + r + " = " + (e + r) + " > " + this.baseTexture.width,
                    u = "Y: " + i + " + " + n + " = " + (i + n) + " > " + this.baseTexture.height;
                throw new Error("Texture Error: frame does not fit inside the base Texture dimensions: " + h + " " + a + " " + u)
            }
            this.valid = r && n && this.baseTexture.valid, this.trim || this.rotate || (this.orig = t), this.valid && this.updateUvs()
        }, i.rotate.get = function () {
            return this._rotate
        }, i.rotate.set = function (t) {
            this._rotate = t, this.valid && this.updateUvs()
        }, i.width.get = function () {
            return this.orig.width
        }, i.height.get = function () {
            return this.orig.height
        }, Object.defineProperties(e.prototype, i), e
    }(y);

    function xi(t) {
        t.destroy = function () {
        }, t.on = function () {
        }, t.once = function () {
        }, t.emit = function () {
        }
    }

    _i.EMPTY = new _i(new oi), xi(_i.EMPTY), xi(_i.EMPTY.baseTexture), _i.WHITE = function () {
        var t = document.createElement("canvas");
        t.width = 16, t.height = 16;
        var e = t.getContext("2d");
        return e.fillStyle = "white", e.fillRect(0, 0, 16, 16), new _i(new oi(new ai(t)))
    }(), xi(_i.WHITE), xi(_i.WHITE.baseTexture);
    var bi = function (t) {
        function e(e, i) {
            var r = null;
            if (!(e instanceof gi)) {
                var n = arguments[1], o = arguments[2], s = arguments[3], a = arguments[4];
                console.warn("Please use RenderTexture.create(" + n + ", " + o + ") instead of the ctor directly."), r = arguments[0], i = null, e = new gi({
                    width: n,
                    height: o,
                    scaleMode: s,
                    resolution: a
                })
            }
            t.call(this, e, i), this.legacyRenderer = r, this.valid = !0, this.filterFrame = null, this.filterPoolKey = null, this.updateUvs()
        }

        return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.resize = function (t, e, i) {
            void 0 === i && (i = !0), t = Math.ceil(t), e = Math.ceil(e), this.valid = t > 0 && e > 0, this._frame.width = this.orig.width = t, this._frame.height = this.orig.height = e, i && this.baseTexture.resize(t, e), this.updateUvs()
        }, e.create = function (t) {
            return "number" == typeof t && (t = {
                width: t,
                height: arguments[1],
                scaleMode: arguments[2],
                resolution: arguments[3]
            }), new e(new gi(t))
        }, e
    }(_i), Ti = function (t, e, i, r, n, o, s) {
        void 0 === i && (i = !1), void 0 === r && (r = 5126), this.buffer = t, this.size = e, this.normalized = i, this.type = r, this.stride = n, this.start = o, this.instance = s
    };
    Ti.prototype.destroy = function () {
        this.buffer = null
    }, Ti.from = function (t, e, i, r, n) {
        return new Ti(t, e, i, r, n)
    };
    var Ei = 0, wi = function (t, e, i) {
        void 0 === e && (e = !0), void 0 === i && (i = !1), this.data = t || new Float32Array(1), this._glBuffers = {}, this._updateID = 0, this.index = i, this.static = e, this.id = Ei++, this.disposeRunner = new He("disposeBuffer", 2)
    };

    function Si(t) {
        if (4 === t.BYTES_PER_ELEMENT) return t instanceof Float32Array ? "Float32Array" : t instanceof Uint32Array ? "Uint32Array" : "Int32Array";
        if (2 === t.BYTES_PER_ELEMENT) {
            if (t instanceof Uint16Array) return "Uint16Array"
        } else if (1 === t.BYTES_PER_ELEMENT && t instanceof Uint8Array) return "Uint8Array";
        return null
    }

    wi.prototype.update = function (t) {
        this.data = t || this.data, this._updateID++
    }, wi.prototype.dispose = function () {
        this.disposeRunner.run(this, !1)
    }, wi.prototype.destroy = function () {
        this.dispose(), this.data = null
    }, wi.from = function (t) {
        return t instanceof Array && (t = new Float32Array(t)), new wi(t)
    };
    var Pi = {Float32Array: Float32Array, Uint32Array: Uint32Array, Int32Array: Int32Array, Uint8Array: Uint8Array};
    var Ii = {5126: 4, 5123: 2, 5121: 1}, Ai = 0, Oi = {
        Float32Array: Float32Array,
        Uint32Array: Uint32Array,
        Int32Array: Int32Array,
        Uint8Array: Uint8Array,
        Uint16Array: Uint16Array
    }, Ci = function (t, e) {
        void 0 === t && (t = []), void 0 === e && (e = {}), this.buffers = t, this.indexBuffer = null, this.attributes = e, this.glVertexArrayObjects = {}, this.id = Ai++, this.instanced = !1, this.instanceCount = 1, this._size = null, this.disposeRunner = new He("disposeGeometry", 2), this.refCount = 0
    };
    Ci.prototype.addAttribute = function (t, e, i, r, n, o, s, a) {
        if (void 0 === r && (r = !1), void 0 === a && (a = !1), !e) throw new Error("You must pass a buffer when creating an attribute");
        e.data || (e instanceof Array && (e = new Float32Array(e)), e = new wi(e));
        var h = t.split("|");
        if (h.length > 1) {
            for (var u = 0; u < h.length; u++) this.addAttribute(h[u], e, i, r, n);
            return this
        }
        var l = this.buffers.indexOf(e);
        return -1 === l && (this.buffers.push(e), l = this.buffers.length - 1), this.attributes[t] = new Ti(l, i, r, n, o, s, a), this.instanced = this.instanced || a, this
    }, Ci.prototype.getAttribute = function (t) {
        return this.attributes[t]
    }, Ci.prototype.getBuffer = function (t) {
        return this.buffers[this.getAttribute(t).buffer]
    }, Ci.prototype.addIndex = function (t) {
        return t.data || (t instanceof Array && (t = new Uint16Array(t)), t = new wi(t)), t.index = !0, this.indexBuffer = t, -1 === this.buffers.indexOf(t) && this.buffers.push(t), this
    }, Ci.prototype.getIndex = function () {
        return this.indexBuffer
    }, Ci.prototype.interleave = function () {
        if (1 === this.buffers.length || 2 === this.buffers.length && this.indexBuffer) return this;
        var t, e = [], i = [], r = new wi;
        for (t in this.attributes) {
            var n = this.attributes[t], o = this.buffers[n.buffer];
            e.push(o.data), i.push(n.size * Ii[n.type] / 4), n.buffer = 0
        }
        for (r.data = function (t, e) {
            for (var i = 0, r = 0, n = {}, o = 0; o < t.length; o++) r += e[o], i += t[o].length;
            for (var s = new ArrayBuffer(4 * i), a = null, h = 0, u = 0; u < t.length; u++) {
                var l = e[u], c = t[u], d = Si(c);
                n[d] || (n[d] = new Pi[d](s)), a = n[d];
                for (var p = 0; p < c.length; p++) a[(p / l | 0) * r + h + p % l] = c[p];
                h += l
            }
            return new Float32Array(s)
        }(e, i), t = 0; t < this.buffers.length; t++) this.buffers[t] !== this.indexBuffer && this.buffers[t].destroy();
        return this.buffers = [r], this.indexBuffer && this.buffers.push(this.indexBuffer), this
    }, Ci.prototype.getSize = function () {
        for (var t in this.attributes) {
            var e = this.attributes[t];
            return this.buffers[e.buffer].data.length / (e.stride / 4 || e.size)
        }
        return 0
    }, Ci.prototype.dispose = function () {
        this.disposeRunner.run(this, !1)
    }, Ci.prototype.destroy = function () {
        this.dispose(), this.buffers = null, this.indexBuffer.destroy(), this.attributes = null
    }, Ci.prototype.clone = function () {
        for (var t = new Ci, e = 0; e < this.buffers.length; e++) t.buffers[e] = new wi(this.buffers[e].data.slice());
        for (var i in this.attributes) {
            var r = this.attributes[i];
            t.attributes[i] = new Ti(r.buffer, r.size, r.normalized, r.type, r.stride, r.start, r.instance)
        }
        return this.indexBuffer && (t.indexBuffer = t.buffers[this.buffers.indexOf(this.indexBuffer)], t.indexBuffer.index = !0), t
    }, Ci.merge = function (t) {
        for (var e, i = new Ci, r = [], n = [], o = [], s = 0; s < t.length; s++) {
            e = t[s];
            for (var a = 0; a < e.buffers.length; a++) n[a] = n[a] || 0, n[a] += e.buffers[a].data.length, o[a] = 0
        }
        for (var h = 0; h < e.buffers.length; h++) r[h] = new (Oi[Si(e.buffers[h].data)])(n[h]), i.buffers[h] = new wi(r[h]);
        for (var u = 0; u < t.length; u++) {
            e = t[u];
            for (var l = 0; l < e.buffers.length; l++) r[l].set(e.buffers[l].data, o[l]), o[l] += e.buffers[l].data.length
        }
        if (i.attributes = e.attributes, e.indexBuffer) {
            i.indexBuffer = i.buffers[e.buffers.indexOf(e.indexBuffer)], i.indexBuffer.index = !0;
            for (var c = 0, d = 0, p = 0, f = 0, v = 0; v < e.buffers.length; v++) if (e.buffers[v] !== e.indexBuffer) {
                f = v;
                break
            }
            for (var g in e.attributes) {
                var m = e.attributes[g];
                (0 | m.buffer) === f && (d += m.size * Ii[m.type] / 4)
            }
            for (var y = 0; y < t.length; y++) {
                for (var _ = t[y].indexBuffer.data, x = 0; x < _.length; x++) i.indexBuffer.data[x + p] += c;
                c += e.buffers[f].data.length / d, p += _.length
            }
        }
        return i
    };
    var Mi = function (t) {
        function e() {
            t.call(this), this.addAttribute("aVertexPosition", [0, 0, 1, 0, 1, 1, 0, 1]).addIndex([0, 1, 3, 2])
        }

        return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
    }(Ci), Di = function (t) {
        function e() {
            t.call(this), this.vertices = new Float32Array([-1, -1, 1, -1, 1, 1, -1, 1]), this.uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), this.vertexBuffer = new wi(this.vertices), this.uvBuffer = new wi(this.uvs), this.addAttribute("aVertexPosition", this.vertexBuffer).addAttribute("aTextureCoord", this.uvBuffer).addIndex([0, 1, 2, 0, 2, 3])
        }

        return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.map = function (t, e) {
            var i = 0, r = 0;
            return this.uvs[0] = i, this.uvs[1] = r, this.uvs[2] = i + e.width / t.width, this.uvs[3] = r, this.uvs[4] = i + e.width / t.width, this.uvs[5] = r + e.height / t.height, this.uvs[6] = i, this.uvs[7] = r + e.height / t.height, i = e.x, r = e.y, this.vertices[0] = i, this.vertices[1] = r, this.vertices[2] = i + e.width, this.vertices[3] = r, this.vertices[4] = i + e.width, this.vertices[5] = r + e.height, this.vertices[6] = i, this.vertices[7] = r + e.height, this.invalidate(), this
        }, e.prototype.invalidate = function () {
            return this.vertexBuffer._updateID++, this.uvBuffer._updateID++, this
        }, e
    }(Ci), Ri = 0, Li = function (t, e) {
        this.uniforms = t, this.group = !0, this.syncUniforms = {}, this.dirtyId = 0, this.id = Ri++, this.static = !!e
    };
    Li.prototype.update = function () {
        this.dirtyId++
    }, Li.prototype.add = function (t, e, i) {
        this.uniforms[t] = new Li(e, i)
    }, Li.from = function (t, e) {
        return new Li(t, e)
    };
    var Fi = function () {
        this.renderTexture = null, this.target = null, this.legacy = !1, this.resolution = 1, this.sourceFrame = new Oe, this.destinationFrame = new Oe, this.filters = []
    };
    Fi.prototype.clear = function () {
        this.target = null, this.filters = null, this.renderTexture = null
    };
    var Ni = function (t) {
        function e(e) {
            t.call(this, e), this.defaultFilterStack = [{}], this.texturePool = {}, this.statePool = [], this.quad = new Mi, this.quadUv = new Di, this.tempRect = new Oe, this.activeState = {}, this.globalUniforms = new Li({
                outputFrame: this.tempRect,
                inputSize: new Float32Array(4),
                inputPixel: new Float32Array(4),
                inputClamp: new Float32Array(4),
                resolution: 1,
                filterArea: new Float32Array(4),
                filterClamp: new Float32Array(4)
            }, !0), this._pixelsWidth = e.view.width, this._pixelsHeight = e.view.height
        }

        return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.push = function (t, e) {
            for (var i = this.renderer, r = this.defaultFilterStack, n = this.statePool.pop() || new Fi, o = e[0].resolution, s = e[0].padding, a = e[0].autoFit, h = e[0].legacy, u = 1; u < e.length; u++) {
                var l = e[u];
                o = Math.min(o, l.resolution), s = Math.max(s, l.padding), a = a || l.autoFit, h = h || l.legacy
            }
            1 === r.length && (this.defaultFilterStack[0].renderTexture = i.renderTexture.current), r.push(n), n.resolution = o, n.legacy = h, n.target = t, n.sourceFrame.copyFrom(t.filterArea || t.getBounds(!0)), n.sourceFrame.pad(s), a && n.sourceFrame.fit(this.renderer.renderTexture.sourceFrame), n.sourceFrame.ceil(o), n.renderTexture = this.getOptimalFilterTexture(n.sourceFrame.width, n.sourceFrame.height, o), n.filters = e, n.destinationFrame.width = n.renderTexture.width, n.destinationFrame.height = n.renderTexture.height, n.renderTexture.filterFrame = n.sourceFrame, i.renderTexture.bind(n.renderTexture, n.sourceFrame), i.renderTexture.clear()
        }, e.prototype.pop = function () {
            var t = this.defaultFilterStack, e = t.pop(), i = e.filters;
            this.activeState = e;
            var r = this.globalUniforms.uniforms;
            r.outputFrame = e.sourceFrame, r.resolution = e.resolution;
            var n = r.inputSize, o = r.inputPixel, s = r.inputClamp;
            if (n[0] = e.destinationFrame.width, n[1] = e.destinationFrame.height, n[2] = 1 / n[0], n[3] = 1 / n[1], o[0] = n[0] * e.resolution, o[1] = n[1] * e.resolution, o[2] = 1 / o[0], o[3] = 1 / o[1], s[0] = .5 * o[2], s[1] = .5 * o[3], s[2] = e.sourceFrame.width * n[2] - .5 * o[2], s[3] = e.sourceFrame.height * n[3] - .5 * o[3], e.legacy) {
                var a = r.filterArea;
                a[0] = e.destinationFrame.width, a[1] = e.destinationFrame.height, a[2] = e.sourceFrame.x, a[3] = e.sourceFrame.y, r.filterClamp = r.inputClamp
            }
            this.globalUniforms.update();
            var h = t[t.length - 1];
            if (1 === i.length) i[0].apply(this, e.renderTexture, h.renderTexture, !1, e), this.returnFilterTexture(e.renderTexture); else {
                var u = e.renderTexture, l = this.getOptimalFilterTexture(u.width, u.height, e.resolution);
                l.filterFrame = u.filterFrame;
                var c = 0;
                for (c = 0; c < i.length - 1; ++c) {
                    i[c].apply(this, u, l, !0, e);
                    var d = u;
                    u = l, l = d
                }
                i[c].apply(this, u, h.renderTexture, !1, e), this.returnFilterTexture(u), this.returnFilterTexture(l)
            }
            e.clear(), this.statePool.push(e)
        }, e.prototype.applyFilter = function (t, e, i, r) {
            var n = this.renderer;
            n.renderTexture.bind(i, i ? i.filterFrame : null), r && n.renderTexture.clear(), t.uniforms.uSampler = e, t.uniforms.filterGlobals = this.globalUniforms, n.state.setState(t.state), n.shader.bind(t), t.legacy ? (this.quadUv.map(e._frame, e.filterFrame), n.geometry.bind(this.quadUv), n.geometry.draw(xt.TRIANGLES)) : (n.geometry.bind(this.quad), n.geometry.draw(xt.TRIANGLE_STRIP))
        }, e.prototype.calculateSpriteMatrix = function (t, e) {
            var i = this.activeState, r = i.sourceFrame, n = i.destinationFrame, o = e._texture.orig,
                s = t.set(n.width, 0, 0, n.height, r.x, r.y), a = e.worldTransform.copyTo(me.TEMP_MATRIX);
            return a.invert(), s.prepend(a), s.scale(1 / o.width, 1 / o.height), s.translate(e.anchor.x, e.anchor.y), s
        }, e.prototype.destroy = function (t) {
            void 0 === t && (t = !1), t ? this.texturePool = {} : this.emptyPool()
        }, e.prototype.getOptimalFilterTexture = function (t, e, i) {
            void 0 === i && (i = 1);
            var r = "screen";
            e *= i, (t *= i) === this._pixelsWidth && e === this._pixelsHeight || (r = (65535 & (t = Wt(t))) << 16 | 65535 & (e = Wt(e))), this.texturePool[r] || (this.texturePool[r] = []);
            var n = this.texturePool[r].pop();
            return n || (n = bi.create({width: t / i, height: e / i, resolution: i})), n.filterPoolKey = r, n
        }, e.prototype.getFilterTexture = function (t) {
            var e = this.activeState.renderTexture,
                i = this.getOptimalFilterTexture(e.width, e.height, t || e.baseTexture.resolution);
            return i.filterFrame = e.filterFrame, i
        }, e.prototype.returnFilterTexture = function (t) {
            var e = t.filterPoolKey;
            t.filterFrame = null, this.texturePool[e].push(t)
        }, e.prototype.emptyPool = function () {
            for (var t in this.texturePool) {
                var e = this.texturePool[t];
                if (e) for (var i = 0; i < e.length; i++) e[i].destroy(!0)
            }
            this.texturePool = {}
        }, e.prototype.resize = function () {
            var t = this.texturePool.screen;
            if (t) for (var e = 0; e < t.length; e++) t[e].destroy(!0);
            this.texturePool.screen = [], this._pixelsWidth = this.renderer.view.width, this._pixelsHeight = this.renderer.view.height
        }, e
    }(di), Ui = function (t) {
        function e() {
            t.apply(this, arguments)
        }

        return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.start = function () {
        }, e.prototype.stop = function () {
            this.flush()
        }, e.prototype.flush = function () {
        }, e.prototype.render = function (t) {
        }, e
    }(di), Bi = function (t) {
        function e(e) {
            t.call(this, e), this.emptyRenderer = new Ui(e), this.currentRenderer = this.emptyRenderer
        }

        return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.setObjectRenderer = function (t) {
            this.currentRenderer !== t && (this.currentRenderer.stop(), this.currentRenderer = t, this.currentRenderer.start())
        }, e.prototype.flush = function () {
            this.setObjectRenderer(this.emptyRenderer)
        }, e.prototype.reset = function () {
            this.setObjectRenderer(this.emptyRenderer)
        }, e
    }(di);
    m.PREFER_ENV = g.any ? mt.WEBGL : mt.WEBGL2;
    var ki = 0, Xi = function (t) {
        function e(e) {
            t.call(this, e), this.webGLVersion = 1, this.extensions = {}, this.handleContextLost = this.handleContextLost.bind(this), this.handleContextRestored = this.handleContextRestored.bind(this), e.view.addEventListener("webglcontextlost", this.handleContextLost, !1), e.view.addEventListener("webglcontextrestored", this.handleContextRestored, !1)
        }

        t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
        var i = {isLost: {configurable: !0}};
        return i.isLost.get = function () {
            return !this.gl || this.gl.isContextLost()
        }, e.prototype.contextChange = function (t) {
            this.gl = t, t.isContextLost() && t.getExtension("WEBGL_lose_context") && t.getExtension("WEBGL_lose_context").restoreContext()
        }, e.prototype.initFromContext = function (t) {
            this.gl = t, this.validateContext(t), this.renderer.gl = t, this.renderer.CONTEXT_UID = ki++, this.renderer.runners.contextChange.run(t)
        }, e.prototype.initFromOptions = function (t) {
            var e = this.createContext(this.renderer.view, t);
            this.initFromContext(e)
        }, e.prototype.createContext = function (t, e) {
            var i;
            if (m.PREFER_ENV >= mt.WEBGL2 && (i = t.getContext("webgl2", e)), i) this.webGLVersion = 2; else if (this.webGLVersion = 1, !(i = t.getContext("webgl", e) || t.getContext("experimental-webgl", e))) throw new Error("This browser does not support WebGL. Try using the canvas renderer");
            return this.gl = i, this.getExtensions(), i
        }, e.prototype.getExtensions = function () {
            var t = this.gl;
            1 === this.webGLVersion && Object.assign(this.extensions, {
                drawBuffers: t.getExtension("WEBGL_draw_buffers"),
                depthTexture: t.getExtension("WEBKIT_WEBGL_depth_texture"),
                floatTexture: t.getExtension("OES_texture_float"),
                loseContext: t.getExtension("WEBGL_lose_context"),
                vertexArrayObject: t.getExtension("OES_vertex_array_object") || t.getExtension("MOZ_OES_vertex_array_object") || t.getExtension("WEBKIT_OES_vertex_array_object")
            })
        }, e.prototype.handleContextLost = function (t) {
            t.preventDefault()
        }, e.prototype.handleContextRestored = function () {
            this.renderer.runners.contextChange.run(this.gl)
        }, e.prototype.destroy = function () {
            var t = this.renderer.view;
            t.removeEventListener("webglcontextlost", this.handleContextLost), t.removeEventListener("webglcontextrestored", this.handleContextRestored), this.gl.useProgram(null), this.extensions.loseContext && this.extensions.loseContext.loseContext()
        }, e.prototype.postrender = function () {
            this.gl.flush()
        }, e.prototype.validateContext = function (t) {
            t.getContextAttributes().stencil || console.warn("Provided WebGL context does not have a stencil buffer, masks may not render correctly")
        }, Object.defineProperties(e.prototype, i), e
    }(di), ji = function (t) {
        function e(e) {
            t.call(this, e), this.managedFramebuffers = [], this.unknownFramebuffer = new fi(10, 10)
        }

        t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
        var i = {size: {configurable: !0}};
        return e.prototype.contextChange = function () {
            var t = this.gl = this.renderer.gl;
            if (this.CONTEXT_UID = this.renderer.CONTEXT_UID, this.current = this.unknownFramebuffer, this.viewport = new Oe, this.hasMRT = !0, this.writeDepthTexture = !0, this.disposeAll(!0), 1 === this.renderer.context.webGLVersion) {
                var e = this.renderer.context.extensions.drawBuffers, i = this.renderer.context.extensions.depthTexture;
                m.PREFER_ENV === mt.WEBGL_LEGACY && (e = null, i = null), e ? t.drawBuffers = function (t) {
                    return e.drawBuffersWEBGL(t)
                } : (this.hasMRT = !1, t.drawBuffers = function () {
                }), i || (this.writeDepthTexture = !1)
            }
        }, e.prototype.bind = function (t, e) {
            var i = this.gl;
            if (t) {
                var r = t.glFramebuffers[this.CONTEXT_UID] || this.initFramebuffer(t);
                this.current !== t && (this.current = t, i.bindFramebuffer(i.FRAMEBUFFER, r.framebuffer)), r.dirtyId !== t.dirtyId && (r.dirtyId = t.dirtyId, r.dirtyFormat !== t.dirtyFormat ? (r.dirtyFormat = t.dirtyFormat, this.updateFramebuffer(t)) : r.dirtySize !== t.dirtySize && (r.dirtySize = t.dirtySize, this.resizeFramebuffer(t)));
                for (var n = 0; n < t.colorTextures.length; n++) t.colorTextures[n].texturePart ? this.renderer.texture.unbind(t.colorTextures[n].texture) : this.renderer.texture.unbind(t.colorTextures[n]);
                t.depthTexture && this.renderer.texture.unbind(t.depthTexture), e ? this.setViewport(e.x, e.y, e.width, e.height) : this.setViewport(0, 0, t.width, t.height)
            } else this.current && (this.current = null, i.bindFramebuffer(i.FRAMEBUFFER, null)), e ? this.setViewport(e.x, e.y, e.width, e.height) : this.setViewport(0, 0, this.renderer.width, this.renderer.height)
        }, e.prototype.setViewport = function (t, e, i, r) {
            var n = this.viewport;
            n.width === i && n.height === r && n.x === t && n.y === e || (n.x = t, n.y = e, n.width = i, n.height = r, this.gl.viewport(t, e, i, r))
        }, i.size.get = function () {
            return this.current ? {x: 0, y: 0, width: this.current.width, height: this.current.height} : {
                x: 0,
                y: 0,
                width: this.renderer.width,
                height: this.renderer.height
            }
        }, e.prototype.clear = function (t, e, i, r) {
            var n = this.gl;
            n.clearColor(t, e, i, r), n.clear(n.COLOR_BUFFER_BIT | n.DEPTH_BUFFER_BIT)
        }, e.prototype.initFramebuffer = function (t) {
            var e = {framebuffer: this.gl.createFramebuffer(), stencil: null, dirtyId: 0, dirtyFormat: 0, dirtySize: 0};
            return t.glFramebuffers[this.CONTEXT_UID] = e, this.managedFramebuffers.push(t), t.disposeRunner.add(this), e
        }, e.prototype.resizeFramebuffer = function (t) {
            var e = this.gl, i = t.glFramebuffers[this.CONTEXT_UID];
            i.stencil && (e.bindRenderbuffer(e.RENDERBUFFER, i.stencil), e.renderbufferStorage(e.RENDERBUFFER, e.DEPTH_STENCIL, t.width, t.height));
            for (var r = t.colorTextures, n = 0; n < r.length; n++) this.renderer.texture.bind(r[n], 0);
            t.depthTexture && this.renderer.texture.bind(t.depthTexture, 0)
        }, e.prototype.updateFramebuffer = function (t) {
            var e = this.gl, i = t.glFramebuffers[this.CONTEXT_UID], r = t.colorTextures.length;
            e.drawBuffers || (r = Math.min(r, 1));
            for (var n = [], o = 0; o < r; o++) {
                var s = t.colorTextures[o];
                s.texturePart ? (this.renderer.texture.bind(s.texture, 0), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + o, e.TEXTURE_CUBE_MAP_NEGATIVE_X + s.side, s.texture._glTextures[this.CONTEXT_UID].texture, 0)) : (this.renderer.texture.bind(s, 0), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + o, e.TEXTURE_2D, s._glTextures[this.CONTEXT_UID].texture, 0)), n.push(e.COLOR_ATTACHMENT0 + o)
            }
            if ((n.length > 1 && e.drawBuffers(n), t.depthTexture) && this.writeDepthTexture) {
                var a = t.depthTexture;
                this.renderer.texture.bind(a, 0), e.framebufferTexture2D(e.FRAMEBUFFER, e.DEPTH_ATTACHMENT, e.TEXTURE_2D, a._glTextures[this.CONTEXT_UID].texture, 0)
            }
            i.stencil || !t.stencil && !t.depth || (i.stencil = e.createRenderbuffer(), e.bindRenderbuffer(e.RENDERBUFFER, i.stencil), t.depthTexture || e.framebufferRenderbuffer(e.FRAMEBUFFER, e.DEPTH_STENCIL_ATTACHMENT, e.RENDERBUFFER, i.stencil), e.renderbufferStorage(e.RENDERBUFFER, e.DEPTH_STENCIL, t.width, t.height))
        }, e.prototype.disposeFramebuffer = function (t, e) {
            var i = t.glFramebuffers[this.CONTEXT_UID], r = this.gl;
            if (i) {
                delete t.glFramebuffers[this.CONTEXT_UID];
                var n = this.managedFramebuffers.indexOf(t);
                n >= 0 && this.managedFramebuffers.splice(n, 1), t.disposeRunner.remove(this), e || (r.deleteFramebuffer(i.framebuffer), i.stencil && r.deleteRenderbuffer(i.stencil))
            }
        }, e.prototype.disposeAll = function (t) {
            var e = this.managedFramebuffers;
            this.managedFramebuffers = [];
            for (var i = 0; i < e.count; i++) this.disposeFramebuffer(e[i], t)
        }, e.prototype.reset = function () {
            this.current = this.unknownFramebuffer, this.viewport = new Oe
        }, Object.defineProperties(e.prototype, i), e
    }(di), Gi = function (t) {
        this.buffer = t, this.updateID = -1, this.byteLength = -1, this.refCount = 0
    }, Hi = {5126: 4, 5123: 2, 5121: 1}, Yi = function (t) {
        function e(e) {
            t.call(this, e), this._activeGeometry = null, this._activeVao = null, this.hasVao = !0, this.hasInstance = !0, this.boundBuffers = {}, this.managedGeometries = {}, this.managedBuffers = {}
        }

        return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.contextChange = function () {
            this.disposeAll(!0);
            var t = this.gl = this.renderer.gl;
            if (this.CONTEXT_UID = this.renderer.CONTEXT_UID, !t.createVertexArray) {
                var e = this.renderer.context.extensions.vertexArrayObject;
                m.PREFER_ENV === mt.WEBGL_LEGACY && (e = null), e ? (t.createVertexArray = function () {
                    return e.createVertexArrayOES()
                }, t.bindVertexArray = function (t) {
                    return e.bindVertexArrayOES(t)
                }, t.deleteVertexArray = function (t) {
                    return e.deleteVertexArrayOES(t)
                }) : (this.hasVao = !1, t.createVertexArray = function () {
                }, t.bindVertexArray = function () {
                }, t.deleteVertexArray = function () {
                })
            }
            if (!t.vertexAttribDivisor) {
                var i = t.getExtension("ANGLE_instanced_arrays");
                i ? (t.vertexAttribDivisor = function (t, e) {
                    return i.vertexAttribDivisorANGLE(t, e)
                }, t.drawElementsInstanced = function (t, e, r, n, o) {
                    return i.drawElementsInstancedANGLE(t, e, r, n, o)
                }, t.drawArraysInstanced = function (t, e, r, n) {
                    return i.drawArraysInstancedANGLE(t, e, r, n)
                }) : this.hasInstance = !1
            }
        }, e.prototype.bind = function (t, e) {
            e = e || this.renderer.shader.shader;
            var i = this.gl, r = t.glVertexArrayObjects[this.CONTEXT_UID];
            r || (this.managedGeometries[t.id] = t, t.disposeRunner.add(this), t.glVertexArrayObjects[this.CONTEXT_UID] = r = {});
            var n = r[e.program.id] || this.initGeometryVao(t, e.program);
            this._activeGeometry = t, this._activeVao !== n && (this._activeVao = n, this.hasVao ? i.bindVertexArray(n) : this.activateVao(t, e.program)), this.updateBuffers()
        }, e.prototype.reset = function () {
            this.unbind()
        }, e.prototype.updateBuffers = function () {
            for (var t = this._activeGeometry, e = this.gl, i = 0; i < t.buffers.length; i++) {
                var r = t.buffers[i], n = r._glBuffers[this.CONTEXT_UID];
                if (r._updateID !== n.updateID) {
                    n.updateID = r._updateID;
                    var o = r.index ? e.ELEMENT_ARRAY_BUFFER : e.ARRAY_BUFFER;
                    if (e.bindBuffer(o, n.buffer), this._boundBuffer = n, n.byteLength >= r.data.byteLength) e.bufferSubData(o, 0, r.data); else {
                        var s = r.static ? e.STATIC_DRAW : e.DYNAMIC_DRAW;
                        n.byteLength = r.data.byteLength, e.bufferData(o, r.data, s)
                    }
                }
            }
        }, e.prototype.checkCompatibility = function (t, e) {
            var i = t.attributes, r = e.attributeData;
            for (var n in r) if (!i[n]) throw new Error('shader and geometry incompatible, geometry missing the "' + n + '" attribute')
        }, e.prototype.getSignature = function (t, e) {
            var i = t.attributes, r = e.attributeData, n = ["g", t.id];
            for (var o in i) r[o] && n.push(o);
            return n.join("-")
        }, e.prototype.initGeometryVao = function (t, e) {
            this.checkCompatibility(t, e);
            var i = this.gl, r = this.CONTEXT_UID, n = this.getSignature(t, e),
                o = t.glVertexArrayObjects[this.CONTEXT_UID], s = o[n];
            if (s) return o[e.id] = s, s;
            var a = t.buffers, h = t.attributes, u = {}, l = {};
            for (var c in a) u[c] = 0, l[c] = 0;
            for (var d in h) !h[d].size && e.attributeData[d] ? h[d].size = e.attributeData[d].size : h[d].size || console.warn("PIXI Geometry attribute '" + d + "' size cannot be determined (likely the bound shader does not have the attribute)"), u[h[d].buffer] += h[d].size * Hi[h[d].type];
            for (var p in h) {
                var f = h[p], v = f.size;
                void 0 === f.stride && (u[f.buffer] === v * Hi[f.type] ? f.stride = 0 : f.stride = u[f.buffer]), void 0 === f.start && (f.start = l[f.buffer], l[f.buffer] += v * Hi[f.type])
            }
            s = i.createVertexArray(), i.bindVertexArray(s);
            for (var g = 0; g < a.length; g++) {
                var m = a[g];
                m._glBuffers[r] || (m._glBuffers[r] = new Gi(i.createBuffer()), this.managedBuffers[m.id] = m, m.disposeRunner.add(this)), m._glBuffers[r].refCount++
            }
            return this.activateVao(t, e), this._activeVao = s, o[e.id] = s, o[n] = s, s
        }, e.prototype.disposeBuffer = function (t, e) {
            if (this.managedBuffers[t.id]) {
                delete this.managedBuffers[t.id];
                var i = t._glBuffers[this.CONTEXT_UID], r = this.gl;
                t.disposeRunner.remove(this), i && (e || r.deleteBuffer(i.buffer), delete t._glBuffers[this.CONTEXT_UID])
            }
        }, e.prototype.disposeGeometry = function (t, e) {
            if (this.managedGeometries[t.id]) {
                delete this.managedGeometries[t.id];
                var i = t.glVertexArrayObjects[this.CONTEXT_UID], r = this.gl, n = t.buffers;
                if (t.disposeRunner.remove(this), i) {
                    for (var o = 0; o < n.length; o++) {
                        var s = n[o]._glBuffers[this.CONTEXT_UID];
                        s.refCount--, 0 !== s.refCount || e || this.disposeBuffer(n[o], e)
                    }
                    if (!e) for (var a in i) if ("g" === a[0]) {
                        var h = i[a];
                        this._activeVao === h && this.unbind(), r.deleteVertexArray(h)
                    }
                    delete t.glVertexArrayObjects[this.CONTEXT_UID]
                }
            }
        }, e.prototype.disposeAll = function (t) {
            for (var e = Object.keys(this.managedGeometries), i = 0; i < e.length; i++) this.disposeGeometry(this.managedGeometries[e[i]], t);
            e = Object.keys(this.managedBuffers);
            for (var r = 0; r < e.length; r++) this.disposeBuffer(this.managedBuffers[e[r]], t)
        }, e.prototype.activateVao = function (t, e) {
            var i = this.gl, r = this.CONTEXT_UID, n = t.buffers, o = t.attributes;
            t.indexBuffer && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, t.indexBuffer._glBuffers[r].buffer);
            var s = null;
            for (var a in o) {
                var h = o[a], u = n[h.buffer]._glBuffers[r];
                if (e.attributeData[a]) {
                    s !== u && (i.bindBuffer(i.ARRAY_BUFFER, u.buffer), s = u);
                    var l = e.attributeData[a].location;
                    if (i.enableVertexAttribArray(l), i.vertexAttribPointer(l, h.size, h.type || i.FLOAT, h.normalized, h.stride, h.start), h.instance) {
                        if (!this.hasInstance) throw new Error("geometry error, GPU Instancing is not supported on this device");
                        i.vertexAttribDivisor(l, 1)
                    }
                }
            }
        }, e.prototype.draw = function (t, e, i, r) {
            var n = this.gl, o = this._activeGeometry;
            return o.indexBuffer ? o.instanced ? n.drawElementsInstanced(t, e || o.indexBuffer.data.length, n.UNSIGNED_SHORT, 2 * (i || 0), r || 1) : n.drawElements(t, e || o.indexBuffer.data.length, n.UNSIGNED_SHORT, 2 * (i || 0)) : o.instanced ? n.drawArraysInstanced(t, i, e || o.getSize(), r || 1) : n.drawArrays(t, i, e || o.getSize()), this
        }, e.prototype.unbind = function () {
            this.gl.bindVertexArray(null), this._activeVao = null, this._activeGeometry = null
        }, e
    }(di);

    function zi(t, e, i, r) {
        var n = Vi(t, t.VERTEX_SHADER, e), o = Vi(t, t.FRAGMENT_SHADER, i), s = t.createProgram();
        if (t.attachShader(s, n), t.attachShader(s, o), r) for (var a in r) t.bindAttribLocation(s, r[a], a);
        return t.linkProgram(s), t.getProgramParameter(s, t.LINK_STATUS) || (console.error("Pixi.js Error: Could not initialize shader."), console.error("gl.VALIDATE_STATUS", t.getProgramParameter(s, t.VALIDATE_STATUS)), console.error("gl.getError()", t.getError()), "" !== t.getProgramInfoLog(s) && console.warn("Pixi.js Warning: gl.getProgramInfoLog()", t.getProgramInfoLog(s)), t.deleteProgram(s), s = null), t.deleteShader(n), t.deleteShader(o), s
    }

    function Vi(t, e, i) {
        var r = t.createShader(e);
        return t.shaderSource(r, i), t.compileShader(r), t.getShaderParameter(r, t.COMPILE_STATUS) ? r : (console.warn(i), console.error(t.getShaderInfoLog(r)), null)
    }

    function Wi(t, e) {
        switch (t) {
            case"float":
                return 0;
            case"vec2":
                return new Float32Array(2 * e);
            case"vec3":
                return new Float32Array(3 * e);
            case"vec4":
                return new Float32Array(4 * e);
            case"int":
            case"sampler2D":
            case"sampler2DArray":
                return 0;
            case"ivec2":
                return new Int32Array(2 * e);
            case"ivec3":
                return new Int32Array(3 * e);
            case"ivec4":
                return new Int32Array(4 * e);
            case"bool":
                return !1;
            case"bvec2":
                return qi(2 * e);
            case"bvec3":
                return qi(3 * e);
            case"bvec4":
                return qi(4 * e);
            case"mat2":
                return new Float32Array([1, 0, 0, 1]);
            case"mat3":
                return new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
            case"mat4":
                return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
        }
        return null
    }

    function qi(t) {
        for (var e = new Array(t), i = 0; i < e.length; i++) e[i] = !1;
        return e
    }

    var Zi, Ki = null;

    function Ji() {
        if (!Ki) {
            var t, e = document.createElement("canvas");
            if (m.PREFER_ENV >= mt.WEBGL2 && (t = e.getContext("webgl2", {})), !t) {
                if (!(t = e.getContext("webgl", {}) || e.getContext("experimental-webgl", {}))) throw new Error("This browser does not support WebGL. Try using the canvas renderer");
                t.getExtension("WEBGL_draw_buffers")
            }
            return Ki = t, t
        }
        return Ki
    }

    function Qi(t, e, i) {
        if ("precision" !== t.substring(0, 9)) {
            var r = e;
            return e === At.HIGH && i !== At.HIGH && (r = At.MEDIUM), "precision " + r + " float;\n" + t
        }
        return i !== At.HIGH && "precision highp" === t.substring(0, 15) ? t.replace("precision highp", "precision mediump") : t
    }

    var $i = {
        float: 1,
        vec2: 2,
        vec3: 3,
        vec4: 4,
        int: 1,
        ivec2: 2,
        ivec3: 3,
        ivec4: 4,
        bool: 1,
        bvec2: 2,
        bvec3: 3,
        bvec4: 4,
        mat2: 4,
        mat3: 9,
        mat4: 16,
        sampler2D: 1
    };

    function tr(t) {
        return $i[t]
    }

    var er = null, ir = {
        FLOAT: "float",
        FLOAT_VEC2: "vec2",
        FLOAT_VEC3: "vec3",
        FLOAT_VEC4: "vec4",
        INT: "int",
        INT_VEC2: "ivec2",
        INT_VEC3: "ivec3",
        INT_VEC4: "ivec4",
        BOOL: "bool",
        BOOL_VEC2: "bvec2",
        BOOL_VEC3: "bvec3",
        BOOL_VEC4: "bvec4",
        FLOAT_MAT2: "mat2",
        FLOAT_MAT3: "mat3",
        FLOAT_MAT4: "mat4",
        SAMPLER_2D: "sampler2D",
        SAMPLER_CUBE: "samplerCube",
        SAMPLER_2D_ARRAY: "sampler2DArray"
    };

    function rr(t, e) {
        if (!er) {
            var i = Object.keys(ir);
            er = {};
            for (var r = 0; r < i.length; ++r) {
                var n = i[r];
                er[t[n]] = ir[n]
            }
        }
        return er[e]
    }

    var nr = {
        float: "\n    if(cv !== v)\n    {\n        cv.v = v;\n        gl.uniform1f(location, v)\n    }",
        vec2: "\n    if(cv[0] !== v[0] || cv[1] !== v[1])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        gl.uniform2f(location, v[0], v[1])\n    }",
        vec3: "\n    if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n\n        gl.uniform3f(location, v[0], v[1], v[2])\n    }",
        vec4: "gl.uniform4f(location, v[0], v[1], v[2], v[3])",
        int: "gl.uniform1i(location, v)",
        ivec2: "gl.uniform2i(location, v[0], v[1])",
        ivec3: "gl.uniform3i(location, v[0], v[1], v[2])",
        ivec4: "gl.uniform4i(location, v[0], v[1], v[2], v[3])",
        bool: "gl.uniform1i(location, v)",
        bvec2: "gl.uniform2i(location, v[0], v[1])",
        bvec3: "gl.uniform3i(location, v[0], v[1], v[2])",
        bvec4: "gl.uniform4i(location, v[0], v[1], v[2], v[3])",
        mat2: "gl.uniformMatrix2fv(location, false, v)",
        mat3: "gl.uniformMatrix3fv(location, false, v)",
        mat4: "gl.uniformMatrix4fv(location, false, v)",
        sampler2D: "gl.uniform1i(location, v)",
        samplerCube: "gl.uniform1i(location, v)",
        sampler2DArray: "gl.uniform1i(location, v)"
    }, or = {
        float: "gl.uniform1fv(location, v)",
        vec2: "gl.uniform2fv(location, v)",
        vec3: "gl.uniform3fv(location, v)",
        vec4: "gl.uniform4fv(location, v)",
        mat4: "gl.uniformMatrix4fv(location, false, v)",
        mat3: "gl.uniformMatrix3fv(location, false, v)",
        mat2: "gl.uniformMatrix2fv(location, false, v)",
        int: "gl.uniform1iv(location, v)",
        ivec2: "gl.uniform2iv(location, v)",
        ivec3: "gl.uniform3iv(location, v)",
        ivec4: "gl.uniform4iv(location, v)",
        bool: "gl.uniform1iv(location, v)",
        bvec2: "gl.uniform2iv(location, v)",
        bvec3: "gl.uniform3iv(location, v)",
        bvec4: "gl.uniform4iv(location, v)",
        sampler2D: "gl.uniform1iv(location, v)",
        samplerCube: "gl.uniform1iv(location, v)",
        sampler2DArray: "gl.uniform1iv(location, v)"
    };
    var sr,
        ar = ["precision mediump float;", "void main(void){", "float test = 0.1;", "%forloop%", "gl_FragColor = vec4(0.0);", "}"].join("\n");

    function hr(t, e) {
        if (0 === t) throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");
        for (var i = e.createShader(e.FRAGMENT_SHADER); ;) {
            var r = ar.replace(/%forloop%/gi, ur(t));
            if (e.shaderSource(i, r), e.compileShader(i), e.getShaderParameter(i, e.COMPILE_STATUS)) break;
            t = t / 2 | 0
        }
        return t
    }

    function ur(t) {
        for (var e = "", i = 0; i < t; ++i) i > 0 && (e += "\nelse "), i < t - 1 && (e += "if(test == " + i + ".0){}");
        return e
    }

    var lr = 0, cr = {}, dr = function t(e, i, r) {
        void 0 === r && (r = "pixi-shader"), this.id = lr++, this.vertexSrc = e || t.defaultVertexSrc, this.fragmentSrc = i || t.defaultFragmentSrc, this.vertexSrc = this.vertexSrc.trim(), this.fragmentSrc = this.fragmentSrc.trim(), "#version" !== this.vertexSrc.substring(0, 8) && (r = r.replace(/\s+/g, "-"), cr[r] ? (cr[r]++, r += "-" + cr[r]) : cr[r] = 1, this.vertexSrc = "#define SHADER_NAME " + r + "\n" + this.vertexSrc, this.fragmentSrc = "#define SHADER_NAME " + r + "\n" + this.fragmentSrc, this.vertexSrc = Qi(this.vertexSrc, m.PRECISION_VERTEX, At.HIGH), this.fragmentSrc = Qi(this.fragmentSrc, m.PRECISION_FRAGMENT, function () {
            if (!Zi) {
                Zi = At.MEDIUM;
                var t = Ji();
                if (t && t.getShaderPrecisionFormat) {
                    var e = t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT);
                    Zi = e.precision ? At.HIGH : At.MEDIUM
                }
            }
            return Zi
        }())), this.extractData(this.vertexSrc, this.fragmentSrc), this.glPrograms = {}, this.syncUniforms = null
    }, pr = {defaultVertexSrc: {configurable: !0}, defaultFragmentSrc: {configurable: !0}};
    dr.prototype.extractData = function (t, e) {
        var i = Ji();
        if (i) {
            var r = zi(i, t, e);
            this.attributeData = this.getAttributeData(r, i), this.uniformData = this.getUniformData(r, i), i.deleteProgram(r)
        } else this.uniformData = {}, this.attributeData = {}
    }, dr.prototype.getAttributeData = function (t, e) {
        for (var i = {}, r = [], n = e.getProgramParameter(t, e.ACTIVE_ATTRIBUTES), o = 0; o < n; o++) {
            var s = e.getActiveAttrib(t, o), a = rr(e, s.type), h = {type: a, name: s.name, size: tr(a), location: 0};
            i[s.name] = h, r.push(h)
        }
        r.sort(function (t, e) {
            return t.name > e.name ? 1 : -1
        });
        for (var u = 0; u < r.length; u++) r[u].location = u;
        return i
    }, dr.prototype.getUniformData = function (t, e) {
        for (var i = {}, r = e.getProgramParameter(t, e.ACTIVE_UNIFORMS), n = 0; n < r; n++) {
            var o = e.getActiveUniform(t, n), s = o.name.replace(/\[.*?\]/, ""), a = o.name.match(/\[.*?\]/, ""),
                h = rr(e, o.type);
            i[s] = {type: h, size: o.size, isArray: a, value: Wi(h, o.size)}
        }
        return i
    }, pr.defaultVertexSrc.get = function () {
        return "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void){\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n}\n"
    }, pr.defaultFragmentSrc.get = function () {
        return "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n   gl_FragColor *= texture2D(uSampler, vTextureCoord);\n}"
    }, dr.from = function (t, e, i) {
        var r = t + e, n = Kt[r];
        return n || (Kt[r] = n = new dr(t, e, i)), n
    }, Object.defineProperties(dr, pr);
    var fr = function (t, e) {
        for (var i in this.program = t, this.uniformGroup = e ? e instanceof Li ? e : new Li(e) : new Li({}), t.uniformData) this.uniformGroup.uniforms[i] instanceof Array && (this.uniformGroup.uniforms[i] = new Float32Array(this.uniformGroup.uniforms[i]))
    }, vr = {uniforms: {configurable: !0}};
    fr.prototype.checkUniformExists = function (t, e) {
        if (e.uniforms[t]) return !0;
        for (var i in e.uniforms) {
            var r = e.uniforms[i];
            if (r.group && this.checkUniformExists(t, r)) return !0
        }
        return !1
    }, fr.prototype.destroy = function () {
        this.uniformGroup = null
    }, vr.uniforms.get = function () {
        return this.uniformGroup.uniforms
    }, fr.from = function (t, e, i) {
        var r = dr.from(t, e);
        return new fr(r, i)
    }, Object.defineProperties(fr.prototype, vr);
    var gr = function () {
        this.data = 0, this.blendMode = _t.NORMAL, this.polygonOffset = 0, this.blend = !0
    }, mr = {
        blend: {configurable: !0},
        offsets: {configurable: !0},
        culling: {configurable: !0},
        depthTest: {configurable: !0},
        clockwiseFrontFace: {configurable: !0},
        blendMode: {configurable: !0},
        polygonOffset: {configurable: !0}
    };
    mr.blend.get = function () {
        return !!(1 & this.data)
    }, mr.blend.set = function (t) {
        !!(1 & this.data) !== t && (this.data ^= 1)
    }, mr.offsets.get = function () {
        return !!(2 & this.data)
    }, mr.offsets.set = function (t) {
        !!(2 & this.data) !== t && (this.data ^= 2)
    }, mr.culling.get = function () {
        return !!(4 & this.data)
    }, mr.culling.set = function (t) {
        !!(4 & this.data) !== t && (this.data ^= 4)
    }, mr.depthTest.get = function () {
        return !!(8 & this.data)
    }, mr.depthTest.set = function (t) {
        !!(8 & this.data) !== t && (this.data ^= 8)
    }, mr.clockwiseFrontFace.get = function () {
        return !!(16 & this.data)
    }, mr.clockwiseFrontFace.set = function (t) {
        !!(16 & this.data) !== t && (this.data ^= 16)
    }, mr.blendMode.get = function () {
        return this._blendMode
    }, mr.blendMode.set = function (t) {
        this.blend = t !== _t.NONE, this._blendMode = t
    }, mr.polygonOffset.get = function () {
        return this._polygonOffset
    }, mr.polygonOffset.set = function (t) {
        this.offsets = !!t, this._polygonOffset = t
    }, gr.for2d = function () {
        var t = new gr;
        return t.depthTest = !1, t.blend = !0, t
    }, Object.defineProperties(gr.prototype, mr);
    var yr = function (t) {
        function e(i, r, n) {
            var o = dr.from(i || e.defaultVertexSrc, r || e.defaultFragmentSrc);
            t.call(this, o, n), this.padding = 0, this.resolution = m.FILTER_RESOLUTION, this.enabled = !0, this.autoFit = !0, this.legacy = !!this.program.attributeData.aTextureCoord, this.state = new gr
        }

        t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
        var i = {blendMode: {configurable: !0}},
            r = {defaultVertexSrc: {configurable: !0}, defaultFragmentSrc: {configurable: !0}};
        return e.prototype.apply = function (t, e, i, r, n) {
            t.applyFilter(this, e, i, r, n)
        }, i.blendMode.get = function () {
            return this.state.blendMode
        }, i.blendMode.set = function (t) {
            this.state.blendMode = t
        }, r.defaultVertexSrc.get = function () {
            return "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n}\n"
        }, r.defaultFragmentSrc.get = function () {
            return "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n   gl_FragColor = texture2D(uSampler, vTextureCoord);\n}\n"
        }, Object.defineProperties(e.prototype, i), Object.defineProperties(e, r), e
    }(fr);
    yr.SOURCE_KEY_MAP = {};
    var _r = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n}\n",
        xr = "varying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform sampler2D mask;\nuniform float alpha;\nuniform float npmAlpha;\nuniform vec4 maskClamp;\n\nvoid main(void)\n{\n    float clip = step(3.5,\n        step(maskClamp.x, vMaskCoord.x) +\n        step(maskClamp.y, vMaskCoord.y) +\n        step(vMaskCoord.x, maskClamp.z) +\n        step(vMaskCoord.y, maskClamp.w));\n\n    vec4 original = texture2D(uSampler, vTextureCoord);\n    vec4 masky = texture2D(mask, vMaskCoord);\n    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);\n\n    original *= (alphaMul * masky.r * alpha * clip);\n\n    gl_FragColor = original;\n}\n",
        br = new me, Tr = function (t, e) {
            this._texture = t, this.mapCoord = new me, this.uClampFrame = new Float32Array(4), this.uClampOffset = new Float32Array(2), this._updateID = -1, this.clampOffset = 0, this.clampMargin = void 0 === e ? .5 : e, this.isSimple = !1
        }, Er = {texture: {configurable: !0}};
    Er.texture.get = function () {
        return this._texture
    }, Er.texture.set = function (t) {
        this._texture = t, this._updateID = -1
    }, Tr.prototype.multiplyUvs = function (t, e) {
        void 0 === e && (e = t);
        for (var i = this.mapCoord, r = 0; r < t.length; r += 2) {
            var n = t[r], o = t[r + 1];
            e[r] = n * i.a + o * i.c + i.tx, e[r + 1] = n * i.b + o * i.d + i.ty
        }
        return e
    }, Tr.prototype.update = function (t) {
        var e = this._texture;
        if (!e || !e.valid) return !1;
        if (!t && this._updateID === e._updateID) return !1;
        this._updateID = e._updateID;
        var i = e._uvs;
        this.mapCoord.set(i.x1 - i.x0, i.y1 - i.y0, i.x3 - i.x0, i.y3 - i.y0, i.x0, i.y0);
        var r = e.orig, n = e.trim;
        n && (br.set(r.width / n.width, 0, 0, r.height / n.height, -n.x / n.width, -n.y / n.height), this.mapCoord.append(br));
        var o = e.baseTexture, s = this.uClampFrame, a = this.clampMargin / o.resolution, h = this.clampOffset;
        return s[0] = (e._frame.x + a + h) / o.width, s[1] = (e._frame.y + a + h) / o.height, s[2] = (e._frame.x + e._frame.width - a + h) / o.width, s[3] = (e._frame.y + e._frame.height - a + h) / o.height, this.uClampOffset[0] = h / o.realWidth, this.uClampOffset[1] = h / o.realHeight, this.isSimple = e._frame.width === o.width && e._frame.height === o.height && 0 === e.rotate, !0
    }, Object.defineProperties(Tr.prototype, Er);
    var wr = function (t) {
        function e(e) {
            var i = new me;
            t.call(this, _r, xr), e.renderable = !1, this.maskSprite = e, this.maskMatrix = i
        }

        return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.apply = function (t, e, i, r) {
            var n = this.maskSprite, o = this.maskSprite.texture;
            o.valid && (o.transform || (o.transform = new Tr(o, 0)), o.transform.update(), this.uniforms.npmAlpha = o.baseTexture.premultiplyAlpha ? 0 : 1, this.uniforms.mask = o, this.uniforms.otherMatrix = t.calculateSpriteMatrix(this.maskMatrix, n).prepend(o.transform.mapCoord), this.uniforms.alpha = n.worldAlpha, this.uniforms.maskClamp = o.transform.uClampFrame, t.applyFilter(this, e, i, r))
        }, e
    }(yr), Sr = function (t) {
        function e(e) {
            t.call(this, e), this.scissor = !1, this.scissorData = null, this.scissorRenderTarget = null, this.enableScissor = !1, this.alphaMaskPool = [], this.alphaMaskIndex = 0
        }

        return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.push = function (t, e) {
            if (e.isSprite) this.pushSpriteMask(t, e); else if (this.enableScissor && !this.scissor && this.renderer._activeRenderTarget.root && !this.renderer.stencil.stencilMaskStack.length && e.isFastRect()) {
                var i = e.worldTransform, r = Math.atan2(i.b, i.a);
                (r = Math.round(r * (180 / Math.PI))) % 90 ? this.pushStencilMask(e) : this.pushScissorMask(t, e)
            } else this.pushStencilMask(e)
        }, e.prototype.pop = function (t, e) {
            e.isSprite ? this.popSpriteMask(t, e) : this.enableScissor && !this.renderer.stencil.stencilMaskStack.length ? this.popScissorMask(t, e) : this.popStencilMask(t, e)
        }, e.prototype.pushSpriteMask = function (t, e) {
            var i = this.alphaMaskPool[this.alphaMaskIndex];
            i || (i = this.alphaMaskPool[this.alphaMaskIndex] = [new wr(e)]), i[0].resolution = this.renderer.resolution, i[0].maskSprite = e;
            var r = t.filterArea;
            t.filterArea = e.getBounds(!0), this.renderer.filter.push(t, i), t.filterArea = r, this.alphaMaskIndex++
        }, e.prototype.popSpriteMask = function () {
            this.renderer.filter.pop(), this.alphaMaskIndex--
        }, e.prototype.pushStencilMask = function (t) {
            this.renderer.batch.flush(), this.renderer.stencil.pushStencil(t)
        }, e.prototype.popStencilMask = function () {
            this.renderer.stencil.popStencil()
        }, e.prototype.pushScissorMask = function (t, e) {
            e.renderable = !0;
            var i = this.renderer._activeRenderTarget, r = e.getBounds();
            r.fit(i.size), e.renderable = !1, this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST);
            var n = this.renderer.resolution;
            this.renderer.gl.scissor(r.x * n, (i.root ? i.size.height - r.y - r.height : r.y) * n, r.width * n, r.height * n), this.scissorRenderTarget = i, this.scissorData = e, this.scissor = !0
        }, e.prototype.popScissorMask = function () {
            this.scissorRenderTarget = null, this.scissorData = null, this.scissor = !1;
            var t = this.renderer.gl;
            t.disable(t.SCISSOR_TEST)
        }, e
    }(di), Pr = function (t) {
        function e(e) {
            t.call(this, e), this.stencilMaskStack = []
        }

        return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.setMaskStack = function (t) {
            var e = this.renderer.gl;
            t.length !== this.stencilMaskStack.length && (0 === t.length ? e.disable(e.STENCIL_TEST) : e.enable(e.STENCIL_TEST)), this.stencilMaskStack = t
        }, e.prototype.pushStencil = function (t) {
            var e = this.renderer.gl, i = this.stencilMaskStack.length;
            0 === i && e.enable(e.STENCIL_TEST), this.stencilMaskStack.push(t), e.colorMask(!1, !1, !1, !1), e.stencilFunc(e.EQUAL, i, this._getBitwiseMask()), e.stencilOp(e.KEEP, e.KEEP, e.INCR), t.renderable = !0, t.render(this.renderer), this.renderer.batch.flush(), t.renderable = !1, this._useCurrent()
        }, e.prototype.popStencil = function () {
            var t = this.renderer.gl, e = this.stencilMaskStack.pop();
            0 === this.stencilMaskStack.length ? (t.disable(t.STENCIL_TEST), t.clear(t.STENCIL_BUFFER_BIT), t.clearStencil(0)) : (t.colorMask(!1, !1, !1, !1), t.stencilOp(t.KEEP, t.KEEP, t.DECR), e.renderable = !0, e.render(this.renderer), this.renderer.batch.flush(), e.renderable = !1, this._useCurrent())
        }, e.prototype._useCurrent = function () {
            var t = this.renderer.gl;
            t.colorMask(!0, !0, !0, !0), t.stencilFunc(t.EQUAL, this.stencilMaskStack.length, this._getBitwiseMask()), t.stencilOp(t.KEEP, t.KEEP, t.KEEP)
        }, e.prototype._getBitwiseMask = function () {
            return (1 << this.stencilMaskStack.length) - 1
        }, e.prototype.destroy = function () {
            t.prototype.destroy.call(this, this), this.stencilMaskStack = null
        }, e
    }(di), Ir = function (t) {
        function e(e) {
            t.call(this, e), this.destinationFrame = null, this.sourceFrame = null, this.defaultFrame = null, this.projectionMatrix = new me, this.transform = null
        }

        return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.update = function (t, e, i, r) {
            this.destinationFrame = t || this.destinationFrame || this.defaultFrame, this.sourceFrame = e || this.sourceFrame || t, this.calculateProjection(this.destinationFrame, this.sourceFrame, i, r), this.transform && this.projectionMatrix.append(this.transform);
            var n = this.renderer;
            n.globalUniforms.uniforms.projectionMatrix = this.projectionMatrix, n.globalUniforms.update(), n.shader.shader && n.shader.syncUniformGroup(n.shader.shader.uniforms.globals)
        }, e.prototype.calculateProjection = function (t, e, i, r) {
            var n = this.projectionMatrix;
            r ? (n.a = 1 / t.width * 2 * i, n.d = -1 / t.height * 2 * i, n.tx = -1 - e.x * n.a, n.ty = 1 - e.y * n.d) : (n.a = 1 / t.width * 2 * i, n.d = 1 / t.height * 2 * i, n.tx = -1 - e.x * n.a, n.ty = -1 - e.y * n.d)
        }, e.prototype.setTransform = function () {
        }, e
    }(di), Ar = new Oe, Or = function (t) {
        function e(e) {
            t.call(this, e), this.clearColor = e._backgroundColorRgba, this.defaultMaskStack = [], this.current = null, this.sourceFrame = new Oe, this.destinationFrame = new Oe
        }

        return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.bind = function (t, e, i) {
            void 0 === t && (t = null), this.current = t;
            var r, n = this.renderer;
            if (t) {
                var o = t.baseTexture;
                r = o.resolution, i || (Ar.width = o.realWidth, Ar.height = o.realHeight, i = Ar), e || (e = i), this.renderer.framebuffer.bind(o.framebuffer, i), this.renderer.projection.update(i, e, r, !1), this.renderer.stencil.setMaskStack(o.stencilMaskStack)
            } else r = this.renderer.resolution, i || (Ar.width = n.width, Ar.height = n.height, i = Ar), e || (e = i), n.framebuffer.bind(null, i), this.renderer.projection.update(i, e, r, !0), this.renderer.stencil.setMaskStack(this.defaultMaskStack);
            this.sourceFrame.copyFrom(e), this.destinationFrame.x = i.x / r, this.destinationFrame.y = i.y / r, this.destinationFrame.width = i.width / r, this.destinationFrame.height = i.height / r
        }, e.prototype.clear = function (t) {
            t = this.current ? t || this.current.baseTexture.clearColor : t || this.clearColor, this.renderer.framebuffer.clear(t[0], t[1], t[2], t[3])
        }, e.prototype.resize = function () {
            this.bind(null)
        }, e.prototype.reset = function () {
            this.bind(null)
        }, e
    }(di), Cr = function (t, e) {
        this.program = t, this.uniformData = e, this.uniformGroups = {}
    };
    Cr.prototype.destroy = function () {
        this.uniformData = null, this.uniformGroups = null, this.program = null
    };
    var Mr = 0, Dr = function (t) {
        function e(e) {
            t.call(this, e), this.systemCheck(), this.gl = null, this.shader = null, this.program = null, this.cache = {}, this.id = Mr++
        }

        return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.systemCheck = function () {
            if (!function () {
                if ("boolean" == typeof sr) return sr;
                try {
                    var t = new Function("param1", "param2", "param3", "return param1[param2] === param3;");
                    sr = !0 === t({a: "b"}, "a", "b")
                } catch (t) {
                    sr = !1
                }
                return sr
            }()) throw new Error("Current environment does not allow unsafe-eval, please use @pixi/unsafe-eval module to enable support.")
        }, e.prototype.contextChange = function (t) {
            this.gl = t
        }, e.prototype.bind = function (t, e) {
            t.uniforms.globals = this.renderer.globalUniforms;
            var i = t.program, r = i.glPrograms[this.renderer.CONTEXT_UID] || this.generateShader(t);
            return this.shader = t, this.program !== i && (this.program = i, this.gl.useProgram(r.program)), e || this.syncUniformGroup(t.uniformGroup), r
        }, e.prototype.setUniforms = function (t) {
            var e = this.shader.program, i = e.glPrograms[this.renderer.CONTEXT_UID];
            e.syncUniforms(i.uniformData, t, this.renderer)
        }, e.prototype.syncUniformGroup = function (t) {
            var e = this.getglProgram();
            t.static && t.dirtyId === e.uniformGroups[t.id] || (e.uniformGroups[t.id] = t.dirtyId, this.syncUniforms(t, e))
        }, e.prototype.syncUniforms = function (t, e) {
            (t.syncUniforms[this.shader.program.id] || this.createSyncGroups(t))(e.uniformData, t.uniforms, this.renderer)
        }, e.prototype.createSyncGroups = function (t) {
            var e = this.getSignature(t, this.shader.program.uniformData);
            return this.cache[e] || (this.cache[e] = function (t, e) {
                var i = 0, r = "var v = null;\n    var cv = null\n    var gl = renderer.gl";
                for (var n in t.uniforms) {
                    var o = e[n];
                    o ? "float" === o.type && 1 === o.size ? r += "\n            if(uv." + n + " !== ud." + n + ".value)\n            {\n                ud." + n + ".value = uv." + n + "\n                gl.uniform1f(ud." + n + ".location, uv." + n + ")\n            }\n" : "sampler2D" !== o.type && "samplerCube" !== o.type && "sampler2DArray" !== o.type || 1 !== o.size || o.isArray ? "mat3" === o.type && 1 === o.size ? void 0 !== t.uniforms[n].a ? r += "\n                gl.uniformMatrix3fv(ud." + n + ".location, false, uv." + n + ".toArray(true));\n                \n" : r += "\n                gl.uniformMatrix3fv(ud." + n + ".location, false, uv." + n + ");\n                \n" : "vec2" === o.type && 1 === o.size ? void 0 !== t.uniforms[n].x ? r += "\n                cv = ud." + n + ".value;\n                v = uv." + n + ";\n\n                if(cv[0] !== v.x || cv[1] !== v.y)\n                {\n                    cv[0] = v.x;\n                    cv[1] = v.y;\n                    gl.uniform2f(ud." + n + ".location, v.x, v.y);\n                }\n" : r += "\n                cv = ud." + n + ".value;\n                v = uv." + n + ";\n\n                if(cv[0] !== v[0] || cv[1] !== v[1])\n                {\n                    cv[0] = v[0];\n                    cv[1] = v[1];\n                    gl.uniform2f(ud." + n + ".location, v[0], v[1]);\n                }\n                \n" : "vec4" === o.type && 1 === o.size ? void 0 !== t.uniforms[n].width ? r += "\n                cv = ud." + n + ".value;\n                v = uv." + n + ";\n\n                if(cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height)\n                {\n                    cv[0] = v.x;\n                    cv[1] = v.y;\n                    cv[2] = v.width;\n                    cv[3] = v.height;\n                    gl.uniform4f(ud." + n + ".location, v.x, v.y, v.width, v.height)\n                }\n" : r += "\n                cv = ud." + n + ".value;\n                v = uv." + n + ";\n\n                if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])\n                {\n                    cv[0] = v[0];\n                    cv[1] = v[1];\n                    cv[2] = v[2];\n                    cv[3] = v[3];\n\n                    gl.uniform4f(ud." + n + ".location, v[0], v[1], v[2], v[3])\n                }\n                \n" : r += "\n            cv = ud." + n + ".value;\n            v = uv." + n + ";\n            " + (1 === o.size ? nr : or)[o.type].replace("location", "ud." + n + ".location") + ";\n" : (r += "\n            renderer.texture.bind(uv." + n + ", " + i + ");\n\n            if(ud." + n + ".value !== " + i + ")\n            {\n                ud." + n + ".value = " + i + ";\n                gl.uniform1i(ud." + n + ".location, " + i + ");\n; // eslint-disable-line max-len\n            }\n", i++) : t.uniforms[n].group && (r += "\n                    renderer.shader.syncUniformGroup(uv." + n + ");\n                ")
                }
                return new Function("ud", "uv", "renderer", r)
            }(t, this.shader.program.uniformData)), t.syncUniforms[this.shader.program.id] = this.cache[e], t.syncUniforms[this.shader.program.id]
        }, e.prototype.getSignature = function (t, e) {
            var i = t.uniforms, r = [];
            for (var n in i) r.push(n), e[n] && r.push(e[n].type);
            return r.join("-")
        }, e.prototype.getglProgram = function () {
            return this.shader ? this.shader.program.glPrograms[this.renderer.CONTEXT_UID] : null
        }, e.prototype.generateShader = function (t) {
            var e = this.gl, i = t.program, r = {};
            for (var n in i.attributeData) r[n] = i.attributeData[n].location;
            var o = zi(e, i.vertexSrc, i.fragmentSrc, r), s = {};
            for (var a in i.uniformData) {
                var h = i.uniformData[a];
                s[a] = {location: e.getUniformLocation(o, a), value: Wi(h.type, h.size)}
            }
            var u = new Cr(o, s);
            return i.glPrograms[this.renderer.CONTEXT_UID] = u, u
        }, e.prototype.reset = function () {
            this.program = null, this.shader = null
        }, e.prototype.destroy = function () {
            this.destroyed = !0
        }, e
    }(di);
    var Rr = 0, Lr = 1, Fr = 2, Nr = 3, Ur = 4, Br = function (t) {
        function e(e) {
            t.call(this, e), this.gl = null, this.stateId = 0, this.polygonOffset = 0, this.blendMode = _t.NONE, this._blendEq = !1, this.map = [], this.map[Rr] = this.setBlend, this.map[Lr] = this.setOffset, this.map[Fr] = this.setCullFace, this.map[Nr] = this.setDepthTest, this.map[Ur] = this.setFrontFace, this.checks = [], this.defaultState = new gr, this.defaultState.blend = !0, this.defaultState.depth = !0
        }

        return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.contextChange = function (t) {
            this.gl = t, this.blendModes = function (t, e) {
                return void 0 === e && (e = []), e[_t.NORMAL] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[_t.ADD] = [t.ONE, t.DST_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA], e[_t.MULTIPLY] = [t.DST_COLOR, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA], e[_t.SCREEN] = [t.ONE, t.ONE_MINUS_SRC_COLOR, t.ONE, t.ONE_MINUS_SRC_ALPHA], e[_t.OVERLAY] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[_t.DARKEN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[_t.LIGHTEN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[_t.COLOR_DODGE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[_t.COLOR_BURN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[_t.HARD_LIGHT] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[_t.SOFT_LIGHT] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[_t.DIFFERENCE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[_t.EXCLUSION] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[_t.HUE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[_t.SATURATION] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[_t.COLOR] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[_t.LUMINOSITY] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[_t.NONE] = [0, 0], e[_t.NORMAL_NPM] = [t.SRC_ALPHA, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA], e[_t.ADD_NPM] = [t.SRC_ALPHA, t.DST_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA], e[_t.SCREEN_NPM] = [t.SRC_ALPHA, t.ONE_MINUS_SRC_COLOR, t.ONE, t.ONE_MINUS_SRC_ALPHA], e[_t.SRC_IN] = [t.DST_ALPHA, t.ZERO], e[_t.SRC_OUT] = [t.ONE_MINUS_DST_ALPHA, t.ZERO], e[_t.SRC_ATOP] = [t.DST_ALPHA, t.ONE_MINUS_SRC_ALPHA], e[_t.DST_OVER] = [t.ONE_MINUS_DST_ALPHA, t.ONE], e[_t.DST_IN] = [t.ZERO, t.SRC_ALPHA], e[_t.DST_OUT] = [t.ZERO, t.ONE_MINUS_SRC_ALPHA], e[_t.DST_ATOP] = [t.ONE_MINUS_DST_ALPHA, t.SRC_ALPHA], e[_t.SUBTRACT] = [t.ONE, t.ONE, t.ONE, t.ONE, t.FUNC_REVERSE_SUBTRACT, t.FUNC_ADD], e
            }(t), this.setState(this.defaultState), this.reset()
        }, e.prototype.setState = function (t) {
            if (t = t || this.defaultState, this.stateId !== t.data) {
                for (var e = this.stateId ^ t.data, i = 0; e;) 1 & e && this.map[i].call(this, !!(t.data & 1 << i)), e >>= 1, i++;
                this.stateId = t.data
            }
            for (var r = 0; r < this.checks.length; r++) this.checks[r](this, t)
        }, e.prototype.forceState = function (t) {
            t = t || this.defaultState;
            for (var e = 0; e < this.map.length; e++) this.map[e].call(this, !!(t.data & 1 << e));
            for (var i = 0; i < this.checks.length; i++) this.checks[i](this, t);
            this.stateId = t.data
        }, e.prototype.setBlend = function (t) {
            this.updateCheck(e.checkBlendMode, t), this.gl[t ? "enable" : "disable"](this.gl.BLEND)
        }, e.prototype.setOffset = function (t) {
            this.gl[t ? "enable" : "disable"](this.gl.POLYGON_OFFSET_FILL)
        }, e.prototype.setDepthTest = function (t) {
            this.gl[t ? "enable" : "disable"](this.gl.DEPTH_TEST)
        }, e.prototype.setCullFace = function (t) {
            this.gl[t ? "enable" : "disable"](this.gl.CULL_FACE)
        }, e.prototype.setFrontFace = function (t) {
            this.gl.frontFace(this.gl[t ? "CW" : "CCW"])
        }, e.prototype.setBlendMode = function (t) {
            if (t !== this.blendMode) {
                this.blendMode = t;
                var e = this.blendModes[t], i = this.gl;
                2 === e.length ? i.blendFunc(e[0], e[1]) : i.blendFuncSeparate(e[0], e[1], e[2], e[3]), 6 === e.length ? (this._blendEq = !0, i.blendEquationSeparate(e[4], e[5])) : this._blendEq && (this._blendEq = !1, i.blendEquationSeparate(i.FUNC_ADD, i.FUNC_ADD))
            }
        }, e.prototype.setPolygonOffset = function (t, e) {
            this.gl.polygonOffset(t, e)
        }, e.prototype.reset = function () {
            this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, !1), this.forceState(0), this._blendEq = !0, this.blendMode = -1, this.setBlendMode(0)
        }, e.prototype.updateCheck = function (t, e) {
            var i = this.checks.indexOf(t);
            e && -1 === i ? this.checks.push(t) : e || -1 === i || this.checks.splice(i, 1)
        }, e.checkBlendMode = function (t, e) {
            t.setBlendMode(e.blendMode)
        }, e
    }(di), kr = function (t) {
        function e(e) {
            t.call(this, e), this.count = 0, this.checkCount = 0, this.maxIdle = m.GC_MAX_IDLE, this.checkCountMax = m.GC_MAX_CHECK_COUNT, this.mode = m.GC_MODE
        }

        return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.postrender = function () {
            this.count++, this.mode !== It.MANUAL && (this.checkCount++, this.checkCount > this.checkCountMax && (this.checkCount = 0, this.run()))
        }, e.prototype.run = function () {
            for (var t = this.renderer.texture, e = t.managedTextures, i = !1, r = 0; r < e.length; r++) {
                var n = e[r];
                !n.framebuffer && this.count - n.touched > this.maxIdle && (t.destroyTexture(n, !0), e[r] = null, i = !0)
            }
            if (i) {
                for (var o = 0, s = 0; s < e.length; s++) null !== e[s] && (e[o++] = e[s]);
                e.length = o
            }
        }, e.prototype.unload = function (t) {
            var e = this.renderer.textureSystem;
            t._texture && t._texture._glRenderTargets && e.destroyTexture(t._texture);
            for (var i = t.children.length - 1; i >= 0; i--) this.unload(t.children[i])
        }, e
    }(di), Xr = function (t) {
        this.texture = t, this.width = -1, this.height = -1, this.dirtyId = -1, this.dirtyStyleId = -1, this.mipmap = !1, this.wrapMode = 33071
    }, jr = function (t) {
        function e(e) {
            t.call(this, e), this.boundTextures = [], this.currentLocation = -1, this.managedTextures = [], this._unknownBoundTextures = !1, this.unknownTexture = new oi
        }

        return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.contextChange = function () {
            var t = this.gl = this.renderer.gl;
            this.CONTEXT_UID = this.renderer.CONTEXT_UID, this.webGLVersion = this.renderer.context.webGLVersion;
            var e = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS);
            this.boundTextures.length = e;
            for (var i = 0; i < e; i++) this.boundTextures[i] = null;
            this.emptyTextures = {};
            var r = new Xr(t.createTexture());
            t.bindTexture(t.TEXTURE_2D, r.texture), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, new Uint8Array(4)), this.emptyTextures[t.TEXTURE_2D] = r, this.emptyTextures[t.TEXTURE_CUBE_MAP] = new Xr(t.createTexture()), t.bindTexture(t.TEXTURE_CUBE_MAP, this.emptyTextures[t.TEXTURE_CUBE_MAP].texture);
            for (var n = 0; n < 6; n++) t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + n, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, null);
            t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_MAG_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_MIN_FILTER, t.LINEAR);
            for (var o = 0; o < this.boundTextures.length; o++) this.bind(null, o)
        }, e.prototype.bind = function (t, e) {
            void 0 === e && (e = 0);
            var i = this.gl;
            if (t) {
                if ((t = t.baseTexture || t).valid) {
                    t.touched = this.renderer.textureGC.count;
                    var r = t._glTextures[this.CONTEXT_UID] || this.initTexture(t);
                    this.currentLocation !== e && (this.currentLocation = e, i.activeTexture(i.TEXTURE0 + e)), this.boundTextures[e] !== t && i.bindTexture(t.target, r.texture), r.dirtyId !== t.dirtyId && this.updateTexture(t), this.boundTextures[e] = t
                }
            } else this.currentLocation !== e && (this.currentLocation = e, i.activeTexture(i.TEXTURE0 + e)), i.bindTexture(i.TEXTURE_2D, this.emptyTextures[i.TEXTURE_2D].texture), this.boundTextures[e] = null
        }, e.prototype.reset = function () {
            this._unknownBoundTextures = !0, this.currentLocation = -1;
            for (var t = 0; t < this.boundTextures.length; t++) this.boundTextures[t] = this.unknownTexture
        }, e.prototype.unbind = function (t) {
            var e = this.gl, i = this.boundTextures;
            if (this._unknownBoundTextures) {
                this._unknownBoundTextures = !1;
                for (var r = 0; r < i.length; r++) i[r] === this.unknownTexture && this.bind(null, r)
            }
            for (var n = 0; n < i.length; n++) i[n] === t && (this.currentLocation !== n && (e.activeTexture(e.TEXTURE0 + n), this.currentLocation = n), e.bindTexture(e.TEXTURE_2D, this.emptyTextures[t.target].texture), i[n] = null)
        }, e.prototype.initTexture = function (t) {
            var e = new Xr(this.gl.createTexture());
            return e.dirtyId = -1, t._glTextures[this.CONTEXT_UID] = e, this.managedTextures.push(t), t.on("dispose", this.destroyTexture, this), e
        }, e.prototype.updateTexture = function (t) {
            var e = t._glTextures[this.CONTEXT_UID], i = this.renderer;
            if (t.resource && t.resource.upload(i, t, e)) ; else {
                var r = t.realWidth, n = t.realHeight, o = i.gl;
                (e.width !== r || e.height !== n || e.dirtyId < 0) && (e.width = r, e.height = n, o.texImage2D(t.target, 0, t.format, r, n, 0, t.format, t.type, null))
            }
            t.dirtyStyleId !== e.dirtyStyleId && this.updateTextureStyle(t), e.dirtyId = t.dirtyId
        }, e.prototype.destroyTexture = function (t, e) {
            var i = this.gl;
            if ((t = t.baseTexture || t)._glTextures[this.CONTEXT_UID] && (this.unbind(t), i.deleteTexture(t._glTextures[this.CONTEXT_UID].texture), t.off("dispose", this.destroyTexture, this), delete t._glTextures[this.CONTEXT_UID], !e)) {
                var r = this.managedTextures.indexOf(t);
                -1 !== r && Ht(this.managedTextures, r, 1)
            }
        }, e.prototype.updateTextureStyle = function (t) {
            var e = t._glTextures[this.CONTEXT_UID];
            e && (t.mipmap !== Pt.POW2 && 2 === this.webGLVersion || t.isPowerOfTwo ? (e.mipmap = t.mipmap >= 1, e.wrapMode = t.wrapMode) : (e.mipmap = 0, e.wrapMode = St.CLAMP), t.resource && t.resource.style(this.renderer, t, e) || this.setStyle(t, e), e.dirtyStyleId = t.dirtyStyleId)
        }, e.prototype.setStyle = function (t, e) {
            var i = this.gl;
            e.mipmap && i.generateMipmap(t.target), i.texParameteri(t.target, i.TEXTURE_WRAP_S, e.wrapMode), i.texParameteri(t.target, i.TEXTURE_WRAP_T, e.wrapMode), e.mipmap ? i.texParameteri(t.target, i.TEXTURE_MIN_FILTER, t.scaleMode ? i.LINEAR_MIPMAP_LINEAR : i.NEAREST_MIPMAP_NEAREST) : i.texParameteri(t.target, i.TEXTURE_MIN_FILTER, t.scaleMode ? i.LINEAR : i.NEAREST), i.texParameteri(t.target, i.TEXTURE_MAG_FILTER, t.scaleMode ? i.LINEAR : i.NEAREST)
        }, e
    }(di), Gr = {
        FilterSystem: Ni,
        BatchSystem: Bi,
        ContextSystem: Xi,
        FramebufferSystem: ji,
        GeometrySystem: Yi,
        MaskSystem: Sr,
        StencilSystem: Pr,
        ProjectionSystem: Ir,
        RenderTextureSystem: Or,
        ShaderSystem: Dr,
        StateSystem: Br,
        TextureGCSystem: kr,
        TextureSystem: jr
    }, Hr = new me, Yr = function (t) {
        function e(e, i) {
            t.call(this), (i = Object.assign({}, m.RENDER_OPTIONS, i)).roundPixels && (m.ROUND_PIXELS = i.roundPixels, he("5.0.0", "Renderer roundPixels option is deprecated, please use PIXI.settings.ROUND_PIXELS", 2)), this.options = i, this.type = yt.UNKNOWN, this.screen = new Oe(0, 0, i.width, i.height), this.view = i.view || document.createElement("canvas"), this.resolution = i.resolution || m.RESOLUTION, this.transparent = i.transparent, this.autoDensity = i.autoDensity || i.autoResize || !1, this.preserveDrawingBuffer = i.preserveDrawingBuffer, this.clearBeforeRender = i.clearBeforeRender, this._backgroundColor = 0, this._backgroundColorRgba = [0, 0, 0, 0], this._backgroundColorString = "#000000", this.backgroundColor = i.backgroundColor || this._backgroundColor, this._tempDisplayObjectParent = new ke, this._lastObjectRendered = this._tempDisplayObjectParent, this.plugins = {}
        }

        t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
        var i = {width: {configurable: !0}, height: {configurable: !0}, backgroundColor: {configurable: !0}};
        return e.prototype.initPlugins = function (t) {
            for (var e in t) this.plugins[e] = new t[e](this)
        }, i.width.get = function () {
            return this.view.width
        }, i.height.get = function () {
            return this.view.height
        }, e.prototype.resize = function (t, e) {
            this.screen.width = t, this.screen.height = e, this.view.width = t * this.resolution, this.view.height = e * this.resolution, this.autoDensity && (this.view.style.width = t + "px", this.view.style.height = e + "px")
        }, e.prototype.generateTexture = function (t, e, i, r) {
            0 === (r = r || t.getLocalBounds()).width && (r.width = 1), 0 === r.height && (r.height = 1);
            var n = bi.create(0 | r.width, 0 | r.height, e, i);
            return Hr.tx = -r.x, Hr.ty = -r.y, this.render(t, n, !1, Hr, !!t.parent), n
        }, e.prototype.destroy = function (t) {
            for (var e in this.plugins) this.plugins[e].destroy(), this.plugins[e] = null;
            t && this.view.parentNode && this.view.parentNode.removeChild(this.view), this.plugins = null, this.type = yt.UNKNOWN, this.view = null, this.screen = null, this.resolution = 0, this.transparent = !1, this.autoDensity = !1, this.blendModes = null, this.options = null, this.preserveDrawingBuffer = !1, this.clearBeforeRender = !1, this._backgroundColor = 0, this._backgroundColorRgba = null, this._backgroundColorString = null, this._tempDisplayObjectParent = null, this._lastObjectRendered = null
        }, i.backgroundColor.get = function () {
            return this._backgroundColor
        }, i.backgroundColor.set = function (t) {
            this._backgroundColor = t, this._backgroundColorString = Ft(t), Lt(t, this._backgroundColorRgba)
        }, Object.defineProperties(e.prototype, i), e
    }(y), zr = function (t) {
        function e(i) {
            void 0 === i && (i = {}), t.call(this, "WebGL", i), i = this.options, this.type = yt.WEBGL, this.gl = null, this.CONTEXT_UID = 0, this.runners = {
                destroy: new He("destroy"),
                contextChange: new He("contextChange", 1),
                reset: new He("reset"),
                update: new He("update"),
                postrender: new He("postrender"),
                prerender: new He("prerender"),
                resize: new He("resize", 2)
            }, this.globalUniforms = new Li({projectionMatrix: new me}, !0), this.addSystem(Sr, "mask").addSystem(Xi, "context").addSystem(Br, "state").addSystem(Dr, "shader").addSystem(jr, "texture").addSystem(Yi, "geometry").addSystem(ji, "framebuffer").addSystem(Pr, "stencil").addSystem(Ir, "projection").addSystem(kr, "textureGC").addSystem(Ni, "filter").addSystem(Or, "renderTexture").addSystem(Bi, "batch"), this.initPlugins(e.__plugins), i.context ? this.context.initFromContext(i.context) : this.context.initFromOptions({
                alpha: this.transparent,
                antialias: i.antialias,
                premultipliedAlpha: this.transparent && "notMultiplied" !== this.transparent,
                stencil: !0,
                preserveDrawingBuffer: i.preserveDrawingBuffer,
                powerPreference: this.options.powerPreference
            }), this.renderingToScreen = !0, Dt(2 === this.context.webGLVersion ? "WebGL 2" : "WebGL 1"), this.resize(this.options.width, this.options.height)
        }

        return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.create = function (t) {
            if (Rt()) return new e(t);
            throw new Error('WebGL unsupported in this browser, use "pixi.js-legacy" for fallback canvas2d support.')
        }, e.prototype.addSystem = function (t, e) {
            e || (e = t.name);
            var i = new t(this);
            if (this[e]) throw new Error('Whoops! The name "' + e + '" is already in use');
            for (var r in this[e] = i, this.runners) this.runners[r].add(i);
            return this
        }, e.prototype.render = function (t, e, i, r, n) {
            if (this.renderingToScreen = !e, this.runners.prerender.run(), this.emit("prerender"), this.projection.transform = r, !this.context.isLost) {
                if (e || (this._lastObjectRendered = t), !n) {
                    var o = t.parent;
                    t.parent = this._tempDisplayObjectParent, t.updateTransform(), t.parent = o
                }
                this.renderTexture.bind(e), this.batch.currentRenderer.start(), (void 0 !== i ? i : this.clearBeforeRender) && this.renderTexture.clear(), t.render(this), this.batch.currentRenderer.flush(), e && e.baseTexture.update(), this.runners.postrender.run(), this.projection.transform = null, this.emit("postrender")
            }
        }, e.prototype.resize = function (e, i) {
            t.prototype.resize.call(this, e, i), this.runners.resize.run(e, i)
        }, e.prototype.reset = function () {
            return this.runners.reset.run(), this
        }, e.prototype.clear = function () {
            this.framebuffer.bind(), this.framebuffer.clear()
        }, e.prototype.destroy = function (e) {
            this.runners.destroy.run(), t.prototype.destroy.call(this, e), this.gl = null
        }, e.registerPlugin = function (t, i) {
            e.__plugins = e.__plugins || {}, e.__plugins[t] = i
        }, e
    }(Yr);

    function Vr(t) {
        return zr.create(t)
    }

    var Wr = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}",
        qr = "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n}\n",
        Zr = function (t) {
            function e() {
                t.apply(this, arguments)
            }

            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.from = function (t, i) {
                return new e(new hi(t, i))
            }, e
        }(oi), Kr = function (t) {
            function e(e) {
                void 0 === e && (e = !1), t.call(this), this._buffer = new wi(null, e, !1), this._indexBuffer = new wi(null, e, !0), this.addAttribute("aVertexPosition", this._buffer, 2, !1, Et.FLOAT).addAttribute("aTextureCoord", this._buffer, 2, !1, Et.FLOAT).addAttribute("aColor", this._buffer, 4, !0, Et.UNSIGNED_BYTE).addAttribute("aTextureId", this._buffer, 1, !0, Et.FLOAT).addIndex(this._indexBuffer)
            }

            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
        }(Ci), Jr = function () {
            this.textures = [], this.ids = [], this.blend = 0, this.textureCount = 0, this.start = 0, this.size = 0, this.type = 4
        }, Qr = function (t) {
            this.vertices = new ArrayBuffer(t), this.float32View = new Float32Array(this.vertices), this.uint32View = new Uint32Array(this.vertices)
        };
    Qr.prototype.destroy = function () {
        this.vertices = null, this.float32View = null, this.uint32View = null
    };
    var $r = "precision highp float;\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\nattribute float aTextureId;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform vec4 tint;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\n\nvoid main(void){\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vTextureId = aTextureId;\n    vColor = aColor * tint;\n}\n",
        tn = ["varying vec2 vTextureCoord;", "varying vec4 vColor;", "varying float vTextureId;", "uniform sampler2D uSamplers[%count%];", "void main(void){", "vec4 color;", "%forloop%", "gl_FragColor = color * vColor;", "}"].join("\n"),
        en = {}, rn = {};

    function nn(t, e) {
        if (!rn[e]) {
            for (var i = new Int32Array(e), r = 0; r < e; r++) i[r] = r;
            en[e] = Li.from({uSamplers: i}, !0);
            var n = tn;
            n = (n = n.replace(/%count%/gi, e)).replace(/%forloop%/gi, function (t) {
                var e = "";
                e += "\n", e += "\n";
                for (var i = 0; i < t; i++) i > 0 && (e += "\nelse "), i < t - 1 && (e += "if(vTextureId < " + i + ".5)"), e += "\n{", e += "\n\tcolor = texture2D(uSamplers[" + i + "], vTextureCoord);", e += "\n}";
                return e += "\n", e += "\n"
            }(e)), rn[e] = new dr($r, n)
        }
        var o = {tint: new Float32Array([1, 1, 1, 1]), translationMatrix: new me, default: en[e]};
        return new fr(rn[e], o)
    }

    var on = function (t) {
        function e(e) {
            t.call(this, e), this.vertSize = 6, this.vertByteSize = 4 * this.vertSize, this.size = 8e3, this.currentSize = 0, this.currentIndexSize = 0, this.attributeBuffers = {}, this.aBuffers = {}, this.iBuffers = {}, this.onlySprites = !1, this.shader = null, this.currentIndex = 0, this.groups = [];
            for (var i = 0; i < this.size / 4; i++) this.groups[i] = new Jr;
            this.elements = [], this.vaos = [], this.vaoMax = 2, this.vertexCount = 0, this.renderer.on("prerender", this.onPrerender, this), this.state = gr.for2d()
        }

        return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.contextChange = function () {
            var t = this.renderer.gl;
            m.PREFER_ENV === mt.WEBGL_LEGACY ? this.MAX_TEXTURES = 1 : (this.MAX_TEXTURES = Math.min(t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS), m.SPRITE_MAX_TEXTURES), this.MAX_TEXTURES = hr(this.MAX_TEXTURES, t)), this.shader = nn(0, this.MAX_TEXTURES);
            for (var e = 0; e < this.vaoMax; e++) this.vaos[e] = new Kr
        }, e.prototype.onPrerender = function () {
            this.vertexCount = 0
        }, e.prototype.render = function (t) {
            t._texture.valid && (this.currentSize + t.vertexData.length / 2 > this.size && this.flush(), this.elements[this.currentIndex++] = t, this.currentSize += t.vertexData.length / 2, this.currentIndexSize += t.indices.length)
        }, e.prototype.getIndexBuffer = function (t) {
            var e = Wt(Math.ceil(t / 12)), i = Zt(e), r = 12 * e;
            this.iBuffers.length <= i && (this.iBuffers.length = i + 1);
            var n = this.iBuffers[i];
            return n || (this.iBuffers[i] = n = new Uint16Array(r)), n
        }, e.prototype.getAttributeBuffer = function (t) {
            var e = Wt(Math.ceil(t / 8)), i = Zt(e), r = 8 * e;
            this.aBuffers.length <= i && (this.iBuffers.length = i + 1);
            var n = this.aBuffers[r];
            return n || (this.aBuffers[r] = n = new Qr(r * this.vertByteSize)), n
        }, e.prototype.flush = function () {
            if (0 !== this.currentSize) {
                var t, e, i = this.renderer.gl, r = this.MAX_TEXTURES, n = this.getAttributeBuffer(this.currentSize),
                    o = this.getIndexBuffer(this.currentIndexSize), s = this.elements, a = this.groups,
                    h = n.float32View, u = n.uint32View, l = this.renderer.textureGC.count, c = 0, d = 0, p = 0, f = 0,
                    v = a[0], g = -1;
                v.textureCount = 0, v.start = 0, v.blend = g;
                var y, _ = ++oi._globalBatch;
                for (y = 0; y < this.currentIndex; ++y) {
                    var x = s[y];
                    s[y] = null, t = x._texture.baseTexture;
                    var b = Ut[t.premultiplyAlpha ? 1 : 0][x.blendMode];
                    g !== b && (g = b, e = null, f = r, _++), e !== t && (e = t, t._batchEnabled !== _ && (f === r && (_++, f = 0, v.size = d - v.start, (v = a[p++]).textureCount = 0, v.blend = g, v.start = d), t.touched = l, t._batchEnabled = _, t._id = f, v.textures[v.textureCount++] = t, f++)), this.packGeometry(x, h, u, o, c, d), c += x.vertexData.length / 2 * this.vertSize, d += x.indices.length
                }
                oi._globalBatch = _, v.size = d - v.start, m.CAN_UPLOAD_SAME_BUFFER ? (this.vaos[this.vertexCount]._buffer.update(n.vertices, 0), this.vaos[this.vertexCount]._indexBuffer.update(o, 0), this.renderer.geometry.updateBuffers()) : (this.vaoMax <= this.vertexCount && (this.vaoMax++, this.vaos[this.vertexCount] = new Kr), this.vaos[this.vertexCount]._buffer.update(n.vertices, 0), this.vaos[this.vertexCount]._indexBuffer.update(o, 0), this.renderer.geometry.bind(this.vaos[this.vertexCount]), this.renderer.geometry.updateBuffers(), this.vertexCount++);
                var T = this.renderer.texture, E = this.renderer.state;
                for (y = 0; y < p; y++) {
                    for (var w = a[y], S = w.textureCount, P = 0; P < S; P++) T.bind(w.textures[P], P), w.textures[P] = null;
                    E.setBlendMode(w.blend), i.drawElements(w.type, w.size, i.UNSIGNED_SHORT, 2 * w.start)
                }
                this.currentIndex = 0, this.currentSize = 0, this.currentIndexSize = 0
            }
        }, e.prototype.packGeometry = function (t, e, i, r, n, o) {
            for (var s = n / this.vertSize, a = t.uvs, h = t.indices, u = t.vertexData, l = t._texture.baseTexture._id, c = Math.min(t.worldAlpha, 1), d = c < 1 && t._texture.baseTexture.premultiplyAlpha ? Xt(t._tintRGB, c) : t._tintRGB + (255 * c << 24), p = 0; p < u.length; p += 2) e[n++] = u[p], e[n++] = u[p + 1], e[n++] = a[p], e[n++] = a[p + 1], i[n++] = d, e[n++] = l;
            for (var f = 0; f < h.length; f++) r[o++] = s + h[f]
        }, e.prototype.start = function () {
            this.renderer.state.setState(this.state), this.renderer.shader.bind(this.shader), m.CAN_UPLOAD_SAME_BUFFER && this.renderer.geometry.bind(this.vaos[this.vertexCount])
        }, e.prototype.stop = function () {
            this.flush()
        }, e.prototype.destroy = function () {
            for (var e = 0; e < this.vaoMax; e++) this.vaos[e] && this.vaos[e].destroy();
            this.indexBuffer && this.indexBuffer.destroy(), this.renderer.off("prerender", this.onPrerender, this), this.shader && (this.shader.destroy(), this.shader = null), this.vaos = null, this.indexBuffer = null, this.indices = null, this.sprites = null, t.prototype.destroy.call(this)
        }, e
    }(Ui), sn = new Oe, an = function (t) {
        this.renderer = t, t.extract = this
    };
    an.prototype.image = function (t, e, i) {
        var r = new Image;
        return r.src = this.base64(t, e, i), r
    }, an.prototype.base64 = function (t, e, i) {
        return this.canvas(t).toDataURL(e, i)
    }, an.prototype.canvas = function (t) {
        var e, i, r, n = this.renderer, o = !1, s = !1;
        t && (t instanceof bi ? r = t : (r = this.renderer.generateTexture(t), s = !0)), r ? (e = r.baseTexture.resolution, i = r.frame, o = !1, n.renderTexture.bind(r)) : (e = this.renderer.resolution, o = !0, (i = sn).width = this.renderer.width, i.height = this.renderer.height, n.renderTexture.bind(null));
        var a = i.width * e, h = i.height * e, u = new te(a, h, 1), l = new Uint8Array(4 * a * h), c = n.gl;
        c.readPixels(i.x * e, i.y * e, a, h, c.RGBA, c.UNSIGNED_BYTE, l);
        var d = u.context.getImageData(0, 0, a, h);
        return d.data.set(l), u.context.putImageData(d, 0, 0), o && (u.context.scale(1, -1), u.context.drawImage(u.canvas, 0, -h)), s && r.destroy(!0), u.canvas
    }, an.prototype.pixels = function (t) {
        var e, i, r, n = this.renderer, o = !1;
        t && (t instanceof bi ? r = t : (r = this.renderer.generateTexture(t), o = !0)), r ? (e = r.baseTexture.resolution, i = r.frame, n.renderTexture.bind(r)) : (e = n.resolution, (i = sn).width = n.width, i.height = n.height, n.renderTexture.bind(null));
        var s = i.width * e, a = i.height * e, h = new Uint8Array(4 * s * a), u = n.gl;
        return u.readPixels(i.x * e, i.y * e, s, a, u.RGBA, u.UNSIGNED_BYTE, h), o && r.destroy(!0), h
    }, an.prototype.destroy = function () {
        this.renderer.extract = null, this.renderer = null
    };
    var hn = {Extract: an}, un = function () {
        this.global = new le, this.target = null, this.originalEvent = null, this.identifier = null, this.isPrimary = !1, this.button = 0, this.buttons = 0, this.width = 0, this.height = 0, this.tiltX = 0, this.tiltY = 0, this.pointerType = null, this.pressure = 0, this.rotationAngle = 0, this.twist = 0, this.tangentialPressure = 0
    }, ln = {pointerId: {configurable: !0}};
    ln.pointerId.get = function () {
        return this.identifier
    }, un.prototype.getLocalPosition = function (t, e, i) {
        return t.worldTransform.applyInverse(i || this.global, e)
    }, un.prototype.copyEvent = function (t) {
        t.isPrimary && (this.isPrimary = !0), this.button = t.button, this.buttons = Number.isInteger(t.buttons) ? t.buttons : t.which, this.width = t.width, this.height = t.height, this.tiltX = t.tiltX, this.tiltY = t.tiltY, this.pointerType = t.pointerType, this.pressure = t.pressure, this.rotationAngle = t.rotationAngle, this.twist = t.twist || 0, this.tangentialPressure = t.tangentialPressure || 0
    }, un.prototype.reset = function () {
        this.isPrimary = !1
    }, Object.defineProperties(un.prototype, ln);
    var cn = function () {
        this.stopped = !1, this.target = null, this.currentTarget = null, this.type = null, this.data = null
    };
    cn.prototype.stopPropagation = function () {
        this.stopped = !0
    }, cn.prototype.reset = function () {
        this.stopped = !1, this.currentTarget = null, this.target = null
    };
    var dn = function t(e) {
        this._pointerId = e, this._flags = t.FLAGS.NONE
    }, pn = {
        pointerId: {configurable: !0},
        flags: {configurable: !0},
        none: {configurable: !0},
        over: {configurable: !0},
        rightDown: {configurable: !0},
        leftDown: {configurable: !0}
    };
    dn.prototype._doSet = function (t, e) {
        this._flags = e ? this._flags | t : this._flags & ~t
    }, pn.pointerId.get = function () {
        return this._pointerId
    }, pn.flags.get = function () {
        return this._flags
    }, pn.flags.set = function (t) {
        this._flags = t
    }, pn.none.get = function () {
        return this._flags === this.constructor.FLAGS.NONE
    }, pn.over.get = function () {
        return 0 != (this._flags & this.constructor.FLAGS.OVER)
    }, pn.over.set = function (t) {
        this._doSet(this.constructor.FLAGS.OVER, t)
    }, pn.rightDown.get = function () {
        return 0 != (this._flags & this.constructor.FLAGS.RIGHT_DOWN)
    }, pn.rightDown.set = function (t) {
        this._doSet(this.constructor.FLAGS.RIGHT_DOWN, t)
    }, pn.leftDown.get = function () {
        return 0 != (this._flags & this.constructor.FLAGS.LEFT_DOWN)
    }, pn.leftDown.set = function (t) {
        this._doSet(this.constructor.FLAGS.LEFT_DOWN, t)
    }, Object.defineProperties(dn.prototype, pn), dn.FLAGS = Object.freeze({
        NONE: 0,
        OVER: 1,
        LEFT_DOWN: 2,
        RIGHT_DOWN: 4
    });
    var fn = {
        interactive: !1, interactiveChildren: !0, hitArea: null, get buttonMode() {
            return "pointer" === this.cursor
        }, set buttonMode(t) {
            t ? this.cursor = "pointer" : "pointer" === this.cursor && (this.cursor = null)
        }, cursor: null, get trackedPointers() {
            return void 0 === this._trackedPointers && (this._trackedPointers = {}), this._trackedPointers
        }, _trackedPointers: void 0
    };
    Ue.mixin(fn);
    var vn = 1, gn = {target: null, data: {global: null}}, mn = function (t) {
        function e(e, i) {
            t.call(this), i = i || {}, this.renderer = e, this.autoPreventDefault = void 0 === i.autoPreventDefault || i.autoPreventDefault, this.interactionFrequency = i.interactionFrequency || 10, this.mouse = new un, this.mouse.identifier = vn, this.mouse.global.set(-999999), this.activeInteractionData = {}, this.activeInteractionData[vn] = this.mouse, this.interactionDataPool = [], this.eventData = new cn, this.interactionDOMElement = null, this.moveWhenInside = !1, this.eventsAdded = !1, this.mouseOverRenderer = !1, this.supportsTouchEvents = "ontouchstart" in window, this.supportsPointerEvents = !!window.PointerEvent, this.onPointerUp = this.onPointerUp.bind(this), this.processPointerUp = this.processPointerUp.bind(this), this.onPointerCancel = this.onPointerCancel.bind(this), this.processPointerCancel = this.processPointerCancel.bind(this), this.onPointerDown = this.onPointerDown.bind(this), this.processPointerDown = this.processPointerDown.bind(this), this.onPointerMove = this.onPointerMove.bind(this), this.processPointerMove = this.processPointerMove.bind(this), this.onPointerOut = this.onPointerOut.bind(this), this.processPointerOverOut = this.processPointerOverOut.bind(this), this.onPointerOver = this.onPointerOver.bind(this), this.cursorStyles = {
                default: "inherit",
                pointer: "pointer"
            }, this.currentCursorMode = null, this.cursor = null, this._tempPoint = new le, this.resolution = 1, this.setTargetElement(this.renderer.view, this.renderer.resolution)
        }

        return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.hitTest = function (t, e) {
            return gn.target = null, gn.data.global = t, e || (e = this.renderer._lastObjectRendered), this.processInteractive(gn, e, null, !0), gn.target
        }, e.prototype.setTargetElement = function (t, e) {
            void 0 === e && (e = 1), this.removeEvents(), this.interactionDOMElement = t, this.resolution = e, this.addEvents()
        }, e.prototype.addEvents = function () {
            this.interactionDOMElement && (We.system.add(this.update, this, ze.INTERACTION), window.navigator.msPointerEnabled ? (this.interactionDOMElement.style["-ms-content-zooming"] = "none", this.interactionDOMElement.style["-ms-touch-action"] = "none") : this.supportsPointerEvents && (this.interactionDOMElement.style["touch-action"] = "none"), this.supportsPointerEvents ? (window.document.addEventListener("pointermove", this.onPointerMove, !0), this.interactionDOMElement.addEventListener("pointerdown", this.onPointerDown, !0), this.interactionDOMElement.addEventListener("pointerleave", this.onPointerOut, !0), this.interactionDOMElement.addEventListener("pointerover", this.onPointerOver, !0), window.addEventListener("pointercancel", this.onPointerCancel, !0), window.addEventListener("pointerup", this.onPointerUp, !0)) : (window.document.addEventListener("mousemove", this.onPointerMove, !0), this.interactionDOMElement.addEventListener("mousedown", this.onPointerDown, !0), this.interactionDOMElement.addEventListener("mouseout", this.onPointerOut, !0), this.interactionDOMElement.addEventListener("mouseover", this.onPointerOver, !0), window.addEventListener("mouseup", this.onPointerUp, !0)), this.supportsTouchEvents && (this.interactionDOMElement.addEventListener("touchstart", this.onPointerDown, !0), this.interactionDOMElement.addEventListener("touchcancel", this.onPointerCancel, !0), this.interactionDOMElement.addEventListener("touchend", this.onPointerUp, !0), this.interactionDOMElement.addEventListener("touchmove", this.onPointerMove, !0)), this.eventsAdded = !0)
        }, e.prototype.removeEvents = function () {
            this.interactionDOMElement && (We.system.remove(this.update, this), window.navigator.msPointerEnabled ? (this.interactionDOMElement.style["-ms-content-zooming"] = "", this.interactionDOMElement.style["-ms-touch-action"] = "") : this.supportsPointerEvents && (this.interactionDOMElement.style["touch-action"] = ""), this.supportsPointerEvents ? (window.document.removeEventListener("pointermove", this.onPointerMove, !0), this.interactionDOMElement.removeEventListener("pointerdown", this.onPointerDown, !0), this.interactionDOMElement.removeEventListener("pointerleave", this.onPointerOut, !0), this.interactionDOMElement.removeEventListener("pointerover", this.onPointerOver, !0), window.removeEventListener("pointercancel", this.onPointerCancel, !0), window.removeEventListener("pointerup", this.onPointerUp, !0)) : (window.document.removeEventListener("mousemove", this.onPointerMove, !0), this.interactionDOMElement.removeEventListener("mousedown", this.onPointerDown, !0), this.interactionDOMElement.removeEventListener("mouseout", this.onPointerOut, !0), this.interactionDOMElement.removeEventListener("mouseover", this.onPointerOver, !0), window.removeEventListener("mouseup", this.onPointerUp, !0)), this.supportsTouchEvents && (this.interactionDOMElement.removeEventListener("touchstart", this.onPointerDown, !0), this.interactionDOMElement.removeEventListener("touchcancel", this.onPointerCancel, !0), this.interactionDOMElement.removeEventListener("touchend", this.onPointerUp, !0), this.interactionDOMElement.removeEventListener("touchmove", this.onPointerMove, !0)), this.interactionDOMElement = null, this.eventsAdded = !1)
        }, e.prototype.update = function (t) {
            if (this._deltaTime += t, !(this._deltaTime < this.interactionFrequency) && (this._deltaTime = 0, this.interactionDOMElement)) if (this.didMove) this.didMove = !1; else {
                for (var e in this.cursor = null, this.activeInteractionData) if (this.activeInteractionData.hasOwnProperty(e)) {
                    var i = this.activeInteractionData[e];
                    if (i.originalEvent && "touch" !== i.pointerType) {
                        var r = this.configureInteractionEventForDOMEvent(this.eventData, i.originalEvent, i);
                        this.processInteractive(r, this.renderer._lastObjectRendered, this.processPointerOverOut, !0)
                    }
                }
                this.setCursorMode(this.cursor)
            }
        }, e.prototype.setCursorMode = function (t) {
            if (t = t || "default", this.currentCursorMode !== t) {
                this.currentCursorMode = t;
                var e = this.cursorStyles[t];
                if (e) switch (typeof e) {
                    case"string":
                        this.interactionDOMElement.style.cursor = e;
                        break;
                    case"function":
                        e(t);
                        break;
                    case"object":
                        Object.assign(this.interactionDOMElement.style, e)
                } else "string" != typeof t || Object.prototype.hasOwnProperty.call(this.cursorStyles, t) || (this.interactionDOMElement.style.cursor = t)
            }
        }, e.prototype.dispatchEvent = function (t, e, i) {
            i.stopped || (i.currentTarget = t, i.type = e, t.emit(e, i), t[e] && t[e](i))
        }, e.prototype.mapPositionToPoint = function (t, e, i) {
            var r;
            r = this.interactionDOMElement.parentElement ? this.interactionDOMElement.getBoundingClientRect() : {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            };
            var n = 1 / this.resolution;
            t.x = (e - r.left) * (this.interactionDOMElement.width / r.width) * n, t.y = (i - r.top) * (this.interactionDOMElement.height / r.height) * n
        }, e.prototype.processInteractive = function (t, e, i, r, n) {
            if (!e || !e.visible) return !1;
            var o = t.data.global, s = !1, a = n = e.interactive || n, h = !0;
            if (e.hitArea ? (r && (e.worldTransform.applyInverse(o, this._tempPoint), e.hitArea.contains(this._tempPoint.x, this._tempPoint.y) ? s = !0 : (r = !1, h = !1)), a = !1) : e._mask && r && (e._mask.containsPoint && e._mask.containsPoint(o) || (r = !1)), h && e.interactiveChildren && e.children) for (var u = e.children, l = u.length - 1; l >= 0; l--) {
                var c = u[l], d = this.processInteractive(t, c, i, r, a);
                if (d) {
                    if (!c.parent) continue;
                    a = !1, d && (t.target && (r = !1), s = !0)
                }
            }
            return n && (r && !t.target && !e.hitArea && e.containsPoint && e.containsPoint(o) && (s = !0), e.interactive && (s && !t.target && (t.target = e), i && i(t, e, !!s))), s
        }, e.prototype.onPointerDown = function (t) {
            if (!this.supportsTouchEvents || "touch" !== t.pointerType) {
                var e = this.normalizeToPointerData(t);
                if (this.autoPreventDefault && e[0].isNormalized) (t.cancelable || !("cancelable" in t)) && t.preventDefault();
                for (var i = e.length, r = 0; r < i; r++) {
                    var n = e[r], o = this.getInteractionDataForPointerId(n),
                        s = this.configureInteractionEventForDOMEvent(this.eventData, n, o);
                    if (s.data.originalEvent = t, this.processInteractive(s, this.renderer._lastObjectRendered, this.processPointerDown, !0), this.emit("pointerdown", s), "touch" === n.pointerType) this.emit("touchstart", s); else if ("mouse" === n.pointerType || "pen" === n.pointerType) {
                        var a = 2 === n.button;
                        this.emit(a ? "rightdown" : "mousedown", this.eventData)
                    }
                }
            }
        }, e.prototype.processPointerDown = function (t, e, i) {
            var r = t.data, n = t.data.identifier;
            if (i) if (e.trackedPointers[n] || (e.trackedPointers[n] = new dn(n)), this.dispatchEvent(e, "pointerdown", t), "touch" === r.pointerType) this.dispatchEvent(e, "touchstart", t); else if ("mouse" === r.pointerType || "pen" === r.pointerType) {
                var o = 2 === r.button;
                o ? e.trackedPointers[n].rightDown = !0 : e.trackedPointers[n].leftDown = !0, this.dispatchEvent(e, o ? "rightdown" : "mousedown", t)
            }
        }, e.prototype.onPointerComplete = function (t, e, i) {
            for (var r = this.normalizeToPointerData(t), n = r.length, o = t.target !== this.interactionDOMElement ? "outside" : "", s = 0; s < n; s++) {
                var a = r[s], h = this.getInteractionDataForPointerId(a),
                    u = this.configureInteractionEventForDOMEvent(this.eventData, a, h);
                if (u.data.originalEvent = t, this.processInteractive(u, this.renderer._lastObjectRendered, i, e || !o), this.emit(e ? "pointercancel" : "pointerup" + o, u), "mouse" === a.pointerType || "pen" === a.pointerType) {
                    var l = 2 === a.button;
                    this.emit(l ? "rightup" + o : "mouseup" + o, u)
                } else "touch" === a.pointerType && (this.emit(e ? "touchcancel" : "touchend" + o, u), this.releaseInteractionDataForPointerId(a.pointerId, h))
            }
        }, e.prototype.onPointerCancel = function (t) {
            this.supportsTouchEvents && "touch" === t.pointerType || this.onPointerComplete(t, !0, this.processPointerCancel)
        }, e.prototype.processPointerCancel = function (t, e) {
            var i = t.data, r = t.data.identifier;
            void 0 !== e.trackedPointers[r] && (delete e.trackedPointers[r], this.dispatchEvent(e, "pointercancel", t), "touch" === i.pointerType && this.dispatchEvent(e, "touchcancel", t))
        }, e.prototype.onPointerUp = function (t) {
            this.supportsTouchEvents && "touch" === t.pointerType || this.onPointerComplete(t, !1, this.processPointerUp)
        }, e.prototype.processPointerUp = function (t, e, i) {
            var r = t.data, n = t.data.identifier, o = e.trackedPointers[n], s = "touch" === r.pointerType,
                a = "mouse" === r.pointerType || "pen" === r.pointerType, h = !1;
            if (a) {
                var u = 2 === r.button, l = dn.FLAGS, c = u ? l.RIGHT_DOWN : l.LEFT_DOWN,
                    d = void 0 !== o && o.flags & c;
                i ? (this.dispatchEvent(e, u ? "rightup" : "mouseup", t), d && (this.dispatchEvent(e, u ? "rightclick" : "click", t), h = !0)) : d && this.dispatchEvent(e, u ? "rightupoutside" : "mouseupoutside", t), o && (u ? o.rightDown = !1 : o.leftDown = !1)
            }
            i ? (this.dispatchEvent(e, "pointerup", t), s && this.dispatchEvent(e, "touchend", t), o && (a && !h || this.dispatchEvent(e, "pointertap", t), s && (this.dispatchEvent(e, "tap", t), o.over = !1))) : o && (this.dispatchEvent(e, "pointerupoutside", t), s && this.dispatchEvent(e, "touchendoutside", t)), o && o.none && delete e.trackedPointers[n]
        }, e.prototype.onPointerMove = function (t) {
            if (!this.supportsTouchEvents || "touch" !== t.pointerType) {
                var e = this.normalizeToPointerData(t);
                "mouse" !== e[0].pointerType && "pen" !== e[0].pointerType || (this.didMove = !0, this.cursor = null);
                for (var i = e.length, r = 0; r < i; r++) {
                    var n = e[r], o = this.getInteractionDataForPointerId(n),
                        s = this.configureInteractionEventForDOMEvent(this.eventData, n, o);
                    s.data.originalEvent = t;
                    var a = "touch" !== n.pointerType || this.moveWhenInside;
                    this.processInteractive(s, this.renderer._lastObjectRendered, this.processPointerMove, a), this.emit("pointermove", s), "touch" === n.pointerType && this.emit("touchmove", s), "mouse" !== n.pointerType && "pen" !== n.pointerType || this.emit("mousemove", s)
                }
                "mouse" === e[0].pointerType && this.setCursorMode(this.cursor)
            }
        }, e.prototype.processPointerMove = function (t, e, i) {
            var r = t.data, n = "touch" === r.pointerType, o = "mouse" === r.pointerType || "pen" === r.pointerType;
            o && this.processPointerOverOut(t, e, i), this.moveWhenInside && !i || (this.dispatchEvent(e, "pointermove", t), n && this.dispatchEvent(e, "touchmove", t), o && this.dispatchEvent(e, "mousemove", t))
        }, e.prototype.onPointerOut = function (t) {
            if (!this.supportsTouchEvents || "touch" !== t.pointerType) {
                var e = this.normalizeToPointerData(t)[0];
                "mouse" === e.pointerType && (this.mouseOverRenderer = !1, this.setCursorMode(null));
                var i = this.getInteractionDataForPointerId(e),
                    r = this.configureInteractionEventForDOMEvent(this.eventData, e, i);
                r.data.originalEvent = e, this.processInteractive(r, this.renderer._lastObjectRendered, this.processPointerOverOut, !1), this.emit("pointerout", r), "mouse" === e.pointerType || "pen" === e.pointerType ? this.emit("mouseout", r) : this.releaseInteractionDataForPointerId(i.identifier)
            }
        }, e.prototype.processPointerOverOut = function (t, e, i) {
            var r = t.data, n = t.data.identifier, o = "mouse" === r.pointerType || "pen" === r.pointerType,
                s = e.trackedPointers[n];
            i && !s && (s = e.trackedPointers[n] = new dn(n)), void 0 !== s && (i && this.mouseOverRenderer ? (s.over || (s.over = !0, this.dispatchEvent(e, "pointerover", t), o && this.dispatchEvent(e, "mouseover", t)), o && null === this.cursor && (this.cursor = e.cursor)) : s.over && (s.over = !1, this.dispatchEvent(e, "pointerout", this.eventData), o && this.dispatchEvent(e, "mouseout", t), s.none && delete e.trackedPointers[n]))
        }, e.prototype.onPointerOver = function (t) {
            var e = this.normalizeToPointerData(t)[0], i = this.getInteractionDataForPointerId(e),
                r = this.configureInteractionEventForDOMEvent(this.eventData, e, i);
            r.data.originalEvent = e, "mouse" === e.pointerType && (this.mouseOverRenderer = !0), this.emit("pointerover", r), "mouse" !== e.pointerType && "pen" !== e.pointerType || this.emit("mouseover", r)
        }, e.prototype.getInteractionDataForPointerId = function (t) {
            var e, i = t.pointerId;
            return i === vn || "mouse" === t.pointerType ? e = this.mouse : this.activeInteractionData[i] ? e = this.activeInteractionData[i] : ((e = this.interactionDataPool.pop() || new un).identifier = i, this.activeInteractionData[i] = e), e.copyEvent(t), e
        }, e.prototype.releaseInteractionDataForPointerId = function (t) {
            var e = this.activeInteractionData[t];
            e && (delete this.activeInteractionData[t], e.reset(), this.interactionDataPool.push(e))
        }, e.prototype.configureInteractionEventForDOMEvent = function (t, e, i) {
            return t.data = i, this.mapPositionToPoint(i.global, e.clientX, e.clientY), "touch" === e.pointerType && (e.globalX = i.global.x, e.globalY = i.global.y), i.originalEvent = e, t.reset(), t
        }, e.prototype.normalizeToPointerData = function (t) {
            var e = [];
            if (this.supportsTouchEvents && t instanceof TouchEvent) for (var i = 0, r = t.changedTouches.length; i < r; i++) {
                var n = t.changedTouches[i];
                void 0 === n.button && (n.button = t.touches.length ? 1 : 0), void 0 === n.buttons && (n.buttons = t.touches.length ? 1 : 0), void 0 === n.isPrimary && (n.isPrimary = 1 === t.touches.length && "touchstart" === t.type), void 0 === n.width && (n.width = n.radiusX || 1), void 0 === n.height && (n.height = n.radiusY || 1), void 0 === n.tiltX && (n.tiltX = 0), void 0 === n.tiltY && (n.tiltY = 0), void 0 === n.pointerType && (n.pointerType = "touch"), void 0 === n.pointerId && (n.pointerId = n.identifier || 0), void 0 === n.pressure && (n.pressure = n.force || .5), void 0 === n.twist && (n.twist = 0), void 0 === n.tangentialPressure && (n.tangentialPressure = 0), void 0 === n.layerX && (n.layerX = n.offsetX = n.clientX), void 0 === n.layerY && (n.layerY = n.offsetY = n.clientY), n.isNormalized = !0, e.push(n)
            } else !(t instanceof MouseEvent) || this.supportsPointerEvents && t instanceof window.PointerEvent ? e.push(t) : (void 0 === t.isPrimary && (t.isPrimary = !0), void 0 === t.width && (t.width = 1), void 0 === t.height && (t.height = 1), void 0 === t.tiltX && (t.tiltX = 0), void 0 === t.tiltY && (t.tiltY = 0), void 0 === t.pointerType && (t.pointerType = "mouse"), void 0 === t.pointerId && (t.pointerId = vn), void 0 === t.pressure && (t.pressure = .5), void 0 === t.twist && (t.twist = 0), void 0 === t.tangentialPressure && (t.tangentialPressure = 0), t.isNormalized = !0, e.push(t));
            return e
        }, e.prototype.destroy = function () {
            this.removeEvents(), this.removeAllListeners(), this.renderer = null, this.mouse = null, this.eventData = null, this.interactionDOMElement = null, this.onPointerDown = null, this.processPointerDown = null, this.onPointerUp = null, this.processPointerUp = null, this.onPointerCancel = null, this.processPointerCancel = null, this.onPointerMove = null, this.processPointerMove = null, this.onPointerOut = null, this.processPointerOverOut = null, this.onPointerOver = null, this._tempPoint = null
        }, e
    }(y), yn = {
        InteractionData: un,
        InteractionEvent: cn,
        InteractionManager: mn,
        InteractionTrackingData: dn,
        interactiveTarget: fn
    }, _n = {
        adaptive: !0, maxLength: 10, minSegments: 8, maxSegments: 2048, _segmentsCount: function (t, e) {
            if (void 0 === e && (e = 20), !this.adaptive) return e;
            var i = Math.ceil(t / this.maxLength);
            return i < this.minSegments ? i = this.minSegments : i > this.maxSegments && (i = this.maxSegments), i
        }
    }, xn = function () {
        this.reset()
    };
    xn.prototype.clone = function () {
        var t = new xn;
        return t.color = this.color, t.alpha = this.alpha, t.texture = this.texture, t.matrix = this.matrix, t.visible = this.visible, t
    }, xn.prototype.reset = function () {
        this.color = 16777215, this.alpha = 1, this.texture = _i.WHITE, this.matrix = null, this.visible = !1
    }, xn.prototype.destroy = function () {
        this.texture = null, this.matrix = null
    };
    var bn = function (t, e, i, r) {
        void 0 === e && (e = null), void 0 === i && (i = null), void 0 === r && (r = null), this.shape = t, this.lineStyle = i, this.fillStyle = e, this.matrix = r, this.type = t.type, this.points = [], this.holes = []
    };
    bn.prototype.clone = function () {
        return new bn(this.shape, this.fillStyle, this.lineStyle, this.matrix)
    }, bn.prototype.destroy = function () {
        this.shape = null, this.holes.length = 0, this.holes = null, this.points.length = 0, this.points = null, this.lineStyle = null, this.fillStyle = null
    };
    var Tn = {
        build: function (t) {
            var e, i, r = t.shape, n = t.points, o = r.x, s = r.y;
            if (n.length = 0, t.type === ge.CIRC ? (e = r.radius, i = r.radius) : (e = r.width, i = r.height), 0 !== e && 0 !== i) {
                var a = Math.floor(30 * Math.sqrt(r.radius)) || Math.floor(15 * Math.sqrt(r.width + r.height));
                a /= 2.3;
                for (var h = 2 * Math.PI / a, u = 0; u < a; u++) n.push(o + Math.sin(-h * u) * e, s + Math.cos(-h * u) * i);
                n.push(n[0], n[1])
            }
        }, triangulate: function (t, e) {
            var i = t.points, r = e.points, n = e.indices, o = r.length / 2, s = o;
            r.push(t.shape.x, t.shape.y);
            for (var a = 0; a < i.length; a += 2) r.push(i[a], i[a + 1]), n.push(o++, s, o)
        }
    };

    function En(t, e) {
        t.lineStyle.native ? function (t, e) {
            var i = 0, r = t.points || t.shape.points;
            if (0 === r.length) return;
            var n = e.points, o = e.indices, s = r.length / 2, a = n.length / 2;
            for (i = 1; i < s; i++) {
                var h = r[2 * (i - 1)], u = r[2 * (i - 1) + 1], l = r[2 * i], c = r[2 * i + 1];
                n.push(h, u), n.push(l, c), o.push(a++, a++)
            }
        }(t, e) : function (t, e) {
            var i = t.shape, r = t.points || i.points.slice();
            if (0 === r.length) return;
            var n = t.lineStyle, o = new le(r[0], r[1]), s = new le(r[r.length - 2], r[r.length - 1]),
                a = i.type !== ge.POLY || i.closeStroke, h = o.x === s.x && o.y === s.y;
            if (a) {
                r = r.slice(), h && (r.pop(), r.pop(), s.set(r[r.length - 2], r[r.length - 1]));
                var u = s.x + .5 * (o.x - s.x), l = s.y + .5 * (o.y - s.y);
                r.unshift(u, l), r.push(u, l)
            }
            var c = e.points, d = r.length / 2, p = r.length, f = c.length / 2, v = n.width / 2, g = r[0], m = r[1],
                y = r[2], _ = r[3], x = 0, b = 0, T = -(m - _), E = g - y, w = 0, S = 0, P = 0, I = 0,
                A = Math.sqrt(T * T + E * E);
            T /= A, E /= A, T *= v, E *= v;
            var O = n.alignment, C = 2 * (1 - O), M = 2 * O;
            c.push(g - T * C, m - E * C), c.push(g + T * M, m + E * M);
            for (var D = 1; D < d - 1; ++D) {
                g = r[2 * (D - 1)], m = r[2 * (D - 1) + 1], y = r[2 * D], _ = r[2 * D + 1], x = r[2 * (D + 1)], b = r[2 * (D + 1) + 1], T = -(m - _), E = g - y, A = Math.sqrt(T * T + E * E), T /= A, E /= A, T *= v, E *= v, w = -(_ - b), S = y - x, A = Math.sqrt(w * w + S * S), w /= A, S /= A;
                var R = -E + m - (-E + _), L = -T + y - (-T + g), F = (-T + g) * (-E + _) - (-T + y) * (-E + m),
                    N = -(S *= v) + b - (-S + _), U = -(w *= v) + y - (-w + x),
                    B = (-w + x) * (-S + _) - (-w + y) * (-S + b), k = R * U - N * L;
                if (Math.abs(k) < .1) k += 10.1, c.push(y - T * C, _ - E * C), c.push(y + T * M, _ + E * M); else {
                    var X = (L * B - U * F) / k, j = (N * F - R * B) / k, G = (X - y) * (X - y) + (j - _) * (j - _);
                    G > 196 * v * v ? (P = T - w, I = E - S, A = Math.sqrt(P * P + I * I), P /= A, I /= A, P *= v, I *= v, c.push(y - P * C, _ - I * C), c.push(y + P * M, _ + I * M), c.push(y - P * M * C, _ - I * C), p++) : (c.push(y + (X - y) * C, _ + (j - _) * C), c.push(y - (X - y) * M, _ - (j - _) * M))
                }
            }
            g = r[2 * (d - 2)], m = r[2 * (d - 2) + 1], y = r[2 * (d - 1)], _ = r[2 * (d - 1) + 1], T = -(m - _), E = g - y, A = Math.sqrt(T * T + E * E), T /= A, E /= A, T *= v, E *= v, c.push(y - T * C, _ - E * C), c.push(y + T * M, _ + E * M);
            for (var H = e.indices, Y = 0; Y < p - 2; ++Y) H.push(f, f + 1, f + 2), f++
        }(t, e)
    }

    var wn = {
        build: function (t) {
            t.points = t.shape.points.slice()
        }, triangulate: function (t, e) {
            var i = t.points, r = t.holes, n = e.points, o = e.indices;
            if (i.length >= 6) {
                for (var s = [], a = 0; a < r.length; a++) {
                    var h = r[a];
                    s.push(i.length / 2), i = i.concat(h.points)
                }
                var u = _(i, s, 2);
                if (!u) return;
                for (var l = n.length / 2, c = 0; c < u.length; c += 3) o.push(u[c] + l), o.push(u[c + 1] + l), o.push(u[c + 2] + l);
                for (var d = 0; d < i.length; d++) n.push(i[d])
            }
        }
    }, Sn = {
        build: function (t) {
            var e = t.shape, i = t.points, r = e.x, n = e.y, o = e.width, s = e.height, a = e.radius;
            i.length = 0, In(r, n + a, r, n, r + a, n, i), In(r + o - a, n, r + o, n, r + o, n + a, i), In(r + o, n + s - a, r + o, n + s, r + o - a, n + s, i), In(r + a, n + s, r, n + s, r, n + s - a, i)
        }, triangulate: function (t, e) {
            for (var i = t.points, r = e.points, n = e.indices, o = r.length / 2, s = _(i, null, 2), a = 0, h = s.length; a < h; a += 3) n.push(s[a] + o), n.push(s[a + 1] + o), n.push(s[a + 2] + o);
            for (var u = 0, l = i.length; u < l; u++) r.push(i[u], i[++u])
        }
    };

    function Pn(t, e, i) {
        return t + (e - t) * i
    }

    function In(t, e, i, r, n, o, s) {
        void 0 === s && (s = []);
        for (var a = s, h = 0, u = 0, l = 0, c = 0, d = 0, p = 0, f = 0, v = 0; f <= 20; ++f) h = Pn(t, i, v = f / 20), u = Pn(e, r, v), l = Pn(i, n, v), c = Pn(r, o, v), d = Pn(h, l, v), p = Pn(u, c, v), a.push(d, p);
        return a
    }

    var An = [], On = [], Cn = {};
    Cn[ge.POLY] = wn, Cn[ge.CIRC] = Tn, Cn[ge.ELIP] = Tn, Cn[ge.RECT] = {
        build: function (t) {
            var e = t.shape, i = e.x, r = e.y, n = e.width, o = e.height, s = t.points;
            s.length = 0, s.push(i, r, i + n, r, i + n, r + o, i, r + o)
        }, triangulate: function (t, e) {
            var i = t.points, r = e.points, n = r.length / 2;
            r.push(i[0], i[1], i[2], i[3], i[6], i[7], i[4], i[5]), e.indices.push(n, n + 1, n + 2, n + 1, n + 2, n + 3)
        }
    }, Cn[ge.RREC] = Sn;
    var Mn = function () {
        this.style = null, this.size = 0, this.start = 0, this.attribStart = 0, this.attribSize = 0
    }, Dn = function (t) {
        function e() {
            t.call(this), this.points = [], this.colors = [], this.uvs = [], this.indices = [], this.textureIds = [], this.graphicsData = [], this.dirty = 0, this.batchDirty = -1, this.cacheDirty = -1, this.clearDirty = 0, this.drawCalls = [], this.batches = [], this.shapeIndex = 0, this._bounds = new Ne, this.boundsDirty = -1, this.boundsPadding = 0, this.batchable = !1, this.indicesUint16 = null, this.uvsFloat32 = null
        }

        t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
        var i = {bounds: {configurable: !0}};
        return i.bounds.get = function () {
            return this.boundsDirty !== this.dirty && (this.boundsDirty = this.dirty, this.calculateBounds()), this._bounds
        }, e.prototype.clear = function () {
            if (this.graphicsData.length > 0) {
                this.boundsDirty = -1, this.dirty++, this.clearDirty++, this.batchDirty++, this.graphicsData.length = 0, this.shapeIndex = 0, this.points.length = 0, this.colors.length = 0, this.uvs.length = 0, this.indices.length = 0, this.textureIds.length = 0;
                for (var t = 0; t < this.drawCalls.length; t++) this.drawCalls[t].textures.length = 0, On.push(this.drawCalls[t]);
                this.drawCalls.length = 0;
                for (var e = 0; e < this.batches.length; e++) {
                    var i = this.batches[e];
                    i.start = 0, i.attribStart = 0, i.style = null, An.push(i)
                }
                this.batches.length = 0
            }
            return this
        }, e.prototype.drawShape = function (t, e, i, r) {
            var n = new bn(t, e, i, r);
            return this.graphicsData.push(n), this.dirty++, this
        }, e.prototype.drawHole = function (t, e) {
            if (!this.graphicsData.length) return null;
            var i = new bn(t, null, null, e), r = this.graphicsData[this.graphicsData.length - 1];
            return i.lineStyle = r.lineStyle, r.holes.push(i), this.dirty++, i
        }, e.prototype.destroy = function (e) {
            t.prototype.destroy.call(this, e);
            for (var i = 0; i < this.graphicsData.length; ++i) this.graphicsData[i].destroy();
            this.points.length = 0, this.points = null, this.colors.length = 0, this.colors = null, this.uvs.length = 0, this.uvs = null, this.indices.length = 0, this.indices = null, this.indexBuffer.destroy(), this.indexBuffer = null, this.graphicsData.length = 0, this.graphicsData = null, this.drawCalls.length = 0, this.drawCalls = null, this.batches.length = 0, this.batches = null, this._bounds = null
        }, e.prototype.containsPoint = function (t) {
            for (var e = this.graphicsData, i = 0; i < e.length; ++i) {
                var r = e[i];
                if (r.fillStyle.visible && (r.shape && r.shape.contains(t.x, t.y))) {
                    if (r.holes) for (var n = 0; n < r.holes.length; n++) {
                        if (r.holes[n].shape.contains(t.x, t.y)) return !1
                    }
                    return !0
                }
            }
            return !1
        }, e.prototype.updateBatches = function () {
            if (this.dirty !== this.cacheDirty && 0 !== this.graphicsData.length) {
                if (this.dirty !== this.cacheDirty) for (var t = 0; t < this.graphicsData.length; t++) {
                    var e = this.graphicsData[t];
                    if (e.fillStyle && !e.fillStyle.texture.baseTexture.valid) return;
                    if (e.lineStyle && !e.lineStyle.texture.baseTexture.valid) return
                }
                this.cacheDirty = this.dirty;
                var i = this.uvs, r = this.batches.pop() || An.pop() || new Mn;
                r.style = r.style || this.graphicsData[0].fillStyle || this.graphicsData[0].lineStyle;
                var n = r.style.texture.baseTexture, o = r.style.color + r.style.alpha;
                this.batches.push(r);
                for (var s = this.shapeIndex; s < this.graphicsData.length; s++) {
                    this.shapeIndex++;
                    var a = this.graphicsData[s], h = Cn[a.type], u = a.fillStyle, l = a.lineStyle;
                    h.build(a), a.matrix && this.transformPoints(a.points, a.matrix);
                    for (var c = 0; c < 2; c++) {
                        var d = 0 === c ? u : l;
                        if (d.visible) {
                            var p = d.texture.baseTexture;
                            if (n !== p || d.color + d.alpha !== o) {
                                p.wrapMode = 10497, n = p, o = d.color + d.alpha;
                                var f = this.indices.length, v = this.points.length / 2;
                                r.size = f - r.start, r.attribSize = v - r.attribStart, r.size > 0 && (r = An.pop() || new Mn, this.batches.push(r)), r.style = d, r.start = f, r.attribStart = v
                            }
                            var g = this.points.length / 2;
                            if (0 === c) a.holes.length ? (this.processHoles(a.holes), wn.triangulate(a, this)) : h.triangulate(a, this); else {
                                En(a, this);
                                for (var m = 0; m < a.holes.length; m++) En(a.holes[m], this)
                            }
                            var y = this.points.length / 2 - g;
                            this.addUvs(this.points, i, d.texture, g, y, d.matrix)
                        }
                    }
                }
                var _ = this.indices.length, x = this.points.length / 2;
                if (r.size = _ - r.start, r.attribSize = x - r.attribStart, this.indicesUint16 = new Uint16Array(this.indices), this.batchable = this.isBatchable(), this.batchable) {
                    this.batchDirty++, this.uvsFloat32 = new Float32Array(this.uvs);
                    for (var b = 0; b < this.batches.length; b++) for (var T = this.batches[b], E = 0; E < T.size; E++) {
                        var w = T.start + E;
                        this.indicesUint16[w] = this.indicesUint16[w] - T.attribStart
                    }
                } else this.buildDrawCalls()
            }
        }, e.prototype.isBatchable = function () {
            for (var t = this.batches, i = 0; i < t.length; i++) if (t[i].style.native) return !1;
            return this.points.length < 2 * e.BATCHABLE_SIZE
        }, e.prototype.buildDrawCalls = function () {
            for (var t = ++oi._globalBatch, e = 0; e < this.drawCalls.length; e++) this.drawCalls[e].textures.length = 0, On.push(this.drawCalls[e]);
            this.drawCalls.length = 0;
            var i = this.uvs, r = this.colors, n = this.textureIds, o = On.pop() || new Jr;
            o.textureCount = 0, o.start = 0, o.size = 0, o.type = xt.TRIANGLES;
            var s = 0, a = null, h = 0, u = !1, l = xt.TRIANGLES, c = 0;
            this.drawCalls.push(o);
            for (var d = 0; d < this.batches.length; d++) {
                var p = this.batches[d], f = p.style, v = f.texture.baseTexture;
                u !== f.native && (l = (u = f.native) ? xt.LINES : xt.TRIANGLES, a = null, s = 8, t++), a !== v && (a = v, v._batchEnabled !== t && (8 === s && (t++, s = 0, o.size > 0 && (o = On.pop() || new Jr, this.drawCalls.push(o)), o.start = c, o.size = 0, o.textureCount = 0, o.type = l), v.touched = 1, v._batchEnabled = t, v._id = s, v.wrapMode = 10497, o.textures[o.textureCount++] = v, s++)), o.size += p.size, c += p.size, h = v._id, this.addColors(r, f.color, f.alpha, p.attribSize), this.addTextureIds(n, h, p.attribSize)
            }
            oi._globalBatch = t;
            for (var g = this.points, m = new ArrayBuffer(3 * g.length * 4), y = new Float32Array(m), _ = new Uint32Array(m), x = 0, b = 0; b < g.length / 2; b++) y[x++] = g[2 * b], y[x++] = g[2 * b + 1], y[x++] = i[2 * b], y[x++] = i[2 * b + 1], _[x++] = r[b], y[x++] = n[b];
            this._buffer.update(m), this._indexBuffer.update(this.indicesUint16)
        }, e.prototype.processHoles = function (t) {
            for (var e = 0; e < t.length; e++) {
                var i = t[e];
                Cn[i.type].build(i), i.matrix && this.transformPoints(i.points, i.matrix)
            }
        }, e.prototype.calculateBounds = function () {
            var t = 1 / 0, e = -1 / 0, i = 1 / 0, r = -1 / 0;
            if (this.graphicsData.length) for (var n = null, o = 0, s = 0, a = 0, h = 0, u = 0; u < this.graphicsData.length; u++) {
                var l = this.graphicsData[u], c = l.type, d = l.lineStyle ? l.lineStyle.width : 0;
                if (n = l.shape, c === ge.RECT || c === ge.RREC) o = n.x - d / 2, s = n.y - d / 2, t = o < t ? o : t, e = o + (a = n.width + d) > e ? o + a : e, i = s < i ? s : i, r = s + (h = n.height + d) > r ? s + h : r; else if (c === ge.CIRC) o = n.x, s = n.y, t = o - (a = n.radius + d / 2) < t ? o - a : t, e = o + a > e ? o + a : e, i = s - (h = n.radius + d / 2) < i ? s - h : i, r = s + h > r ? s + h : r; else if (c === ge.ELIP) o = n.x, s = n.y, t = o - (a = n.width + d / 2) < t ? o - a : t, e = o + a > e ? o + a : e, i = s - (h = n.height + d / 2) < i ? s - h : i, r = s + h > r ? s + h : r; else for (var p = n.points, f = 0, v = 0, g = 0, m = 0, y = 0, _ = 0, x = 0, b = 0, T = 0; T + 2 < p.length; T += 2) o = p[T], s = p[T + 1], f = p[T + 2], v = p[T + 3], g = Math.abs(f - o), m = Math.abs(v - s), h = d, (a = Math.sqrt(g * g + m * m)) < 1e-9 || (t = (x = (f + o) / 2) - (y = (h / a * m + g) / 2) < t ? x - y : t, e = x + y > e ? x + y : e, i = (b = (v + s) / 2) - (_ = (h / a * g + m) / 2) < i ? b - _ : i, r = b + _ > r ? b + _ : r)
            } else t = 0, e = 0, i = 0, r = 0;
            var E = this.boundsPadding;
            this._bounds.minX = t - E, this._bounds.maxX = e + E, this._bounds.minY = i - E, this._bounds.maxY = r + E
        }, e.prototype.transformPoints = function (t, e) {
            for (var i = 0; i < t.length / 2; i++) {
                var r = t[2 * i], n = t[2 * i + 1];
                t[2 * i] = e.a * r + e.c * n + e.tx, t[2 * i + 1] = e.b * r + e.d * n + e.ty
            }
        }, e.prototype.addColors = function (t, e, i, r) {
            for (var n = Xt((e >> 16) + (65280 & e) + ((255 & e) << 16), i); r-- > 0;) t.push(n)
        }, e.prototype.addTextureIds = function (t, e, i) {
            for (; i-- > 0;) t.push(e)
        }, e.prototype.addUvs = function (t, e, i, r, n, o) {
            for (var s = 0, a = e.length, h = i.frame; s < n;) {
                var u = t[2 * (r + s)], l = t[2 * (r + s) + 1];
                if (o) {
                    var c = o.a * u + o.c * l + o.tx;
                    l = o.b * u + o.d * l + o.ty, u = c
                }
                s++, e.push(u / h.width, l / h.height)
            }
            var d = i.baseTexture;
            (h.width < d.width || h.height < d.height) && this.adjustUvs(e, i, a, n)
        }, e.prototype.adjustUvs = function (t, e, i, r) {
            for (var n = e.baseTexture, o = i + 2 * r, s = e.frame, a = s.width / n.width, h = s.height / n.height, u = s.x / s.width, l = s.y / s.height, c = Math.floor(t[i] + 1e-6), d = Math.floor(t[i + 1] + 1e-6), p = i + 2; p < o; p += 2) c = Math.min(c, Math.floor(t[p] + 1e-6)), d = Math.min(d, Math.floor(t[p + 1] + 1e-6));
            u -= c, l -= d;
            for (var f = i; f < o; f += 2) t[f] = (t[f] + u) * a, t[f + 1] = (t[f + 1] + l) * h
        }, Object.defineProperties(e.prototype, i), e
    }(Kr);
    Dn.BATCHABLE_SIZE = 100;
    var Rn = function (t) {
        function e() {
            t.apply(this, arguments)
        }

        return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.clone = function () {
            var t = new e;
            return t.color = this.color, t.alpha = this.alpha, t.texture = this.texture, t.matrix = this.matrix, t.visible = this.visible, t.width = this.width, t.alignment = this.alignment, t.native = this.native, t
        }, e.prototype.reset = function () {
            t.prototype.reset.call(this), this.color = 0, this.width = 0, this.alignment = .5, this.native = !1
        }, e
    }(xn), Ln = function () {
    };
    Ln.curveLength = function (t, e, i, r, n, o, s, a) {
        for (var h = 0, u = 0, l = 0, c = 0, d = 0, p = 0, f = 0, v = 0, g = 0, m = 0, y = 0, _ = t, x = e, b = 1; b <= 10; ++b) m = _ - (v = (f = (p = (d = 1 - (u = b / 10)) * d) * d) * t + 3 * p * u * i + 3 * d * (l = u * u) * n + (c = l * u) * s), y = x - (g = f * e + 3 * p * u * r + 3 * d * l * o + c * a), _ = v, x = g, h += Math.sqrt(m * m + y * y);
        return h
    }, Ln.curveTo = function (t, e, i, r, n, o, s) {
        var a = s[s.length - 2], h = s[s.length - 1];
        s.length -= 2;
        var u = _n._segmentsCount(Ln.curveLength(a, h, t, e, i, r, n, o)), l = 0, c = 0, d = 0, p = 0, f = 0;
        s.push(a, h);
        for (var v = 1, g = 0; v <= u; ++v) d = (c = (l = 1 - (g = v / u)) * l) * l, f = (p = g * g) * g, s.push(d * a + 3 * c * g * t + 3 * l * p * i + f * n, d * h + 3 * c * g * e + 3 * l * p * r + f * o)
    };
    var Fn = function () {
    };
    Fn.curveLength = function (t, e, i, r, n, o) {
        var s = t - 2 * i + n, a = e - 2 * r + o, h = 2 * i - 2 * t, u = 2 * r - 2 * e, l = 4 * (s * s + a * a),
            c = 4 * (s * h + a * u), d = h * h + u * u, p = 2 * Math.sqrt(l + c + d), f = Math.sqrt(l), v = 2 * l * f,
            g = 2 * Math.sqrt(d), m = c / f;
        return (v * p + f * c * (p - g) + (4 * d * l - c * c) * Math.log((2 * f + m + p) / (m + g))) / (4 * v)
    }, Fn.curveTo = function (t, e, i, r, n) {
        for (var o = n[n.length - 2], s = n[n.length - 1], a = _n._segmentsCount(Fn.curveLength(o, s, t, e, i, r)), h = 0, u = 0, l = 1; l <= a; ++l) {
            var c = l / a;
            h = o + (t - o) * c, u = s + (e - s) * c, n.push(h + (t + (i - t) * c - h) * c, u + (e + (r - e) * c - u) * c)
        }
    };
    var Nn = function () {
    };
    Nn.curveTo = function (t, e, i, r, n, o) {
        var s = o[o.length - 2], a = o[o.length - 1] - e, h = s - t, u = r - e, l = i - t, c = Math.abs(a * l - h * u);
        if (c < 1e-8 || 0 === n) return o[o.length - 2] === t && o[o.length - 1] === e || o.push(t, e), null;
        var d = a * a + h * h, p = u * u + l * l, f = a * u + h * l, v = n * Math.sqrt(d) / c, g = n * Math.sqrt(p) / c,
            m = v * f / d, y = g * f / p, _ = v * l + g * h, x = v * u + g * a, b = h * (g + m), T = a * (g + m),
            E = l * (v + y), w = u * (v + y);
        return {
            cx: _ + t,
            cy: x + e,
            radius: n,
            startAngle: Math.atan2(T - x, b - _),
            endAngle: Math.atan2(w - x, E - _),
            anticlockwise: h * u > l * a
        }
    }, Nn.arc = function (t, e, i, r, n, o, s, a, h) {
        for (var u = s - o, l = _n._segmentsCount(Math.abs(u) * n, 40 * Math.ceil(Math.abs(u) / pe)), c = u / (2 * l), d = 2 * c, p = Math.cos(c), f = Math.sin(c), v = l - 1, g = v % 1 / v, m = 0; m <= v; ++m) {
            var y = c + o + d * (m + g * m), _ = Math.cos(y), x = -Math.sin(y);
            h.push((p * _ + f * x) * n + i, (p * -x + f * _) * n + r)
        }
    };
    var Un = function (t) {
        function e(e, i, r, n, o, s) {
            o = o || n / 2;
            for (var a = -1 * Math.PI / 2 + s, h = 2 * r, u = pe / h, l = [], c = 0; c < h; c++) {
                var d = c % 2 ? o : n, p = c * u + a;
                l.push(e + d * Math.cos(p), i + d * Math.sin(p))
            }
            t.call(this, l)
        }

        return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
    }(Le), Bn = new Float32Array(3), kn = null, Xn = function (t) {
        function e(e) {
            void 0 === e && (e = null), t.call(this), this.geometry = e || new Dn, this.geometry.refCount++, this.shader = null, this.state = gr.for2d(), this._fillStyle = new xn, this._lineStyle = new Rn, this._matrix = null, this._holeMode = !1, this.currentPath = null, this.batches = [], this.batchTint = -1, this.vertexData = null, this._transformID = -1, this.batchDirty = -1, this.tint = 16777215, this.blendMode = _t.NORMAL
        }

        t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
        var i = {
            blendMode: {configurable: !0},
            tint: {configurable: !0},
            fill: {configurable: !0},
            line: {configurable: !0}
        };
        return e.prototype.clone = function () {
            return this.finishPoly(), new e(this.geometry)
        }, i.blendMode.set = function (t) {
            this.state.blendMode = t
        }, i.blendMode.get = function () {
            return this.state.blendMode
        }, i.tint.get = function () {
            return this._tint
        }, i.tint.set = function (t) {
            this._tint = t
        }, i.fill.get = function () {
            return this._fillStyle
        }, i.line.get = function () {
            return this._lineStyle
        }, e.prototype.lineStyle = function (t, e, i, r, n) {
            return void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 1), void 0 === r && (r = .5), void 0 === n && (n = !1), this.lineTextureStyle(t, _i.WHITE, e, i, null, r, n), this
        }, e.prototype.lineTextureStyle = function (t, e, i, r, n, o, s) {
            void 0 === t && (t = 0), void 0 === e && (e = _i.WHITE), void 0 === i && (i = 16777215), void 0 === r && (r = 1), void 0 === n && (n = null), void 0 === o && (o = .5), void 0 === s && (s = !1), this.currentPath && this.startPoly();
            var a = t > 0 && r > 0;
            return a ? (n && (n = n.clone()).invert(), Object.assign(this._lineStyle, {
                color: i,
                width: t,
                alpha: r,
                matrix: n,
                texture: e,
                alignment: o,
                native: s,
                visible: a
            })) : this._lineStyle.reset(), this
        }, e.prototype.startPoly = function () {
            if (this.currentPath) {
                var t = this.currentPath.points, e = this.currentPath.points.length;
                e > 2 && (this.drawShape(this.currentPath), this.currentPath = new Le, this.currentPath.closeStroke = !1, this.currentPath.points.push(t[e - 2], t[e - 1]))
            } else this.currentPath = new Le, this.currentPath.closeStroke = !1
        }, e.prototype.finishPoly = function () {
            this.currentPath && (this.currentPath.points.length > 2 ? (this.drawShape(this.currentPath), this.currentPath = null) : this.currentPath.points.length = 0)
        }, e.prototype.moveTo = function (t, e) {
            return this.startPoly(), this.currentPath.points[0] = t, this.currentPath.points[1] = e, this
        }, e.prototype.lineTo = function (t, e) {
            this.currentPath || this.moveTo(0, 0);
            var i = this.currentPath.points, r = i[i.length - 2], n = i[i.length - 1];
            return r === t && n === e || i.push(t, e), this
        }, e.prototype._initCurve = function (t, e) {
            void 0 === t && (t = 0), void 0 === e && (e = 0), this.currentPath ? 0 === this.currentPath.points.length && (this.currentPath.points = [t, e]) : this.moveTo(t, e)
        }, e.prototype.quadraticCurveTo = function (t, e, i, r) {
            this._initCurve();
            var n = this.currentPath.points;
            return 0 === n.length && this.moveTo(0, 0), Fn.curveTo(t, e, i, r, n), this
        }, e.prototype.bezierCurveTo = function (t, e, i, r, n, o) {
            return this._initCurve(), Ln.curveTo(t, e, i, r, n, o, this.currentPath.points), this
        }, e.prototype.arcTo = function (t, e, i, r, n) {
            this._initCurve(t, e);
            var o = this.currentPath.points, s = Nn.curveTo(t, e, i, r, n, o);
            if (s) {
                var a = s.cx, h = s.cy, u = s.radius, l = s.startAngle, c = s.endAngle, d = s.anticlockwise;
                this.arc(a, h, u, l, c, d)
            }
            return this
        }, e.prototype.arc = function (t, e, i, r, n, o) {
            if (void 0 === o && (o = !1), r === n) return this;
            if (!o && n <= r ? n += pe : o && r <= n && (r += pe), 0 === n - r) return this;
            var s = t + Math.cos(r) * i, a = e + Math.sin(r) * i, h = this.currentPath ? this.currentPath.points : null;
            if (h) {
                var u = Math.abs(h[h.length - 2] - s), l = Math.abs(h[h.length - 1] - a);
                u < .001 && l < .001 || h.push(s, a)
            } else this.moveTo(s, a), h = this.currentPath.points;
            return Nn.arc(s, a, t, e, i, r, n, o, h), this
        }, e.prototype.beginFill = function (t, e) {
            return void 0 === t && (t = 0), void 0 === e && (e = 1), this.beginTextureFill(_i.WHITE, t, e)
        }, e.prototype.beginTextureFill = function (t, e, i, r) {
            void 0 === t && (t = _i.WHITE), void 0 === e && (e = 16777215), void 0 === i && (i = 1), void 0 === r && (r = null), this.currentPath && this.startPoly();
            var n = i > 0;
            return n ? (r && (r = r.clone()).invert(), Object.assign(this._fillStyle, {
                color: e,
                alpha: i,
                texture: t,
                matrix: r,
                visible: n
            })) : this._fillStyle.reset(), this
        }, e.prototype.endFill = function () {
            return this.finishPoly(), this._fillStyle.reset(), this
        }, e.prototype.drawRect = function (t, e, i, r) {
            return this.drawShape(new Oe(t, e, i, r))
        }, e.prototype.drawRoundedRect = function (t, e, i, r, n) {
            return this.drawShape(new Fe(t, e, i, r, n))
        }, e.prototype.drawCircle = function (t, e, i) {
            return this.drawShape(new De(t, e, i))
        }, e.prototype.drawEllipse = function (t, e, i, r) {
            return this.drawShape(new Re(t, e, i, r))
        }, e.prototype.drawPolygon = function (t) {
            var e = arguments, i = t, r = !0;
            if (i.points && (r = i.closeStroke, i = i.points), !Array.isArray(i)) {
                i = new Array(arguments.length);
                for (var n = 0; n < i.length; ++n) i[n] = e[n]
            }
            var o = new Le(i);
            return o.closeStroke = r, this.drawShape(o), this
        }, e.prototype.drawShape = function (t) {
            return this._holeMode ? this.geometry.drawHole(t, this._matrix) : this.geometry.drawShape(t, this._fillStyle.clone(), this._lineStyle.clone(), this._matrix), this
        }, e.prototype.drawStar = function (t, e, i, r, n, o) {
            return void 0 === o && (o = 0), this.drawPolygon(new Un(t, e, i, r, n, o))
        }, e.prototype.clear = function () {
            return this.geometry.clear(), this._matrix = null, this._holeMode = !1, this.currentPath = null, this._spriteRect = null, this
        }, e.prototype.isFastRect = function () {
            return !1
        }, e.prototype._render = function (t) {
            this.finishPoly();
            var e = this.geometry;
            if (e.updateBatches(), e.batchable) {
                if (this.batchDirty !== e.batchDirty) {
                    this.batches = [], this.batchTint = -1, this._transformID = -1, this.batchDirty = e.batchDirty, this.vertexData = new Float32Array(e.points);
                    for (var i = this.blendMode, r = 0; r < e.batches.length; r++) {
                        var n = e.batches[r], o = n.style.color,
                            s = new Float32Array(this.vertexData.buffer, 4 * n.attribStart * 2, 2 * n.attribSize),
                            a = new Float32Array(e.uvsFloat32.buffer, 4 * n.attribStart * 2, 2 * n.attribSize), h = {
                                vertexData: s,
                                blendMode: i,
                                indices: new Uint16Array(e.indicesUint16.buffer, 2 * n.start, n.size),
                                uvs: a,
                                _batchRGB: Lt(o),
                                _tintRGB: o,
                                _texture: n.style.texture,
                                alpha: n.style.alpha,
                                worldAlpha: 1
                            };
                        this.batches[r] = h
                    }
                }
                if (t.batch.setObjectRenderer(t.plugins.batch), this.batches.length) {
                    this.calculateVertices(), this.calculateTints();
                    for (var u = 0; u < this.batches.length; u++) {
                        var l = this.batches[u];
                        l.worldAlpha = this.worldAlpha * l.alpha, t.plugins.batch.render(l)
                    }
                }
            } else {
                if (t.batch.flush(), !this.shader) {
                    if (!kn) {
                        for (var c = new Int32Array(16), d = 0; d < 16; d++) c[d] = d;
                        var p = {
                            tint: new Float32Array([1, 1, 1, 1]),
                            translationMatrix: new me,
                            default: Li.from({uSamplers: c}, !0)
                        }, f = t.plugins.batch.shader.program;
                        kn = new fr(f, p)
                    }
                    this.shader = kn
                }
                var v = this.shader.uniforms;
                v.translationMatrix = this.transform.worldTransform;
                var g = this.tint, m = this.worldAlpha;
                v.tint[0] = (g >> 16 & 255) / 255 * m, v.tint[1] = (g >> 8 & 255) / 255 * m, v.tint[2] = (255 & g) / 255 * m, v.tint[3] = m, t.shader.bind(this.shader), t.geometry.bind(e, this.shader), t.state.setState(this.state);
                for (var y = 0; y < e.drawCalls.length; y++) {
                    for (var _ = e.drawCalls[y], x = _.textureCount, b = 0; b < x; b++) t.texture.bind(_.textures[b], b);
                    t.geometry.draw(_.type, _.size, _.start)
                }
            }
        }, e.prototype._calculateBounds = function () {
            this.finishPoly();
            var t = this.geometry.bounds;
            this._bounds.addFrame(this.transform, t.minX, t.minY, t.maxX, t.maxY)
        }, e.prototype.containsPoint = function (t) {
            return this.worldTransform.applyInverse(t, e._TEMP_POINT), this.geometry.containsPoint(e._TEMP_POINT)
        }, e.prototype.calculateTints = function () {
            if (this.batchTint !== this.tint) {
                this.batchTint = this.tint;
                for (var t = Lt(this.tint, Bn), e = 0; e < this.batches.length; e++) {
                    var i = this.batches[e], r = i._batchRGB,
                        n = (t[0] * r[0] * 255 << 16) + (t[1] * r[1] * 255 << 8) + (0 | t[2] * r[2] * 255);
                    i._tintRGB = (n >> 16) + (65280 & n) + ((255 & n) << 16)
                }
            }
        }, e.prototype.calculateVertices = function () {
            if (this._transformID !== this.transform._worldID) {
                this._transformID = this.transform._worldID;
                for (var t = this.transform.worldTransform, e = t.a, i = t.b, r = t.c, n = t.d, o = t.tx, s = t.ty, a = this.geometry.points, h = this.vertexData, u = 0, l = 0; l < a.length; l += 2) {
                    var c = a[l], d = a[l + 1];
                    h[u++] = e * c + r * d + o, h[u++] = n * d + i * c + s
                }
            }
        }, e.prototype.closePath = function () {
            var t = this.currentPath;
            return t && (t.closeStroke = !0), this
        }, e.prototype.setMatrix = function (t) {
            return this._matrix = t, this
        }, e.prototype.beginHole = function () {
            return this.finishPoly(), this._holeMode = !0, this
        }, e.prototype.endHole = function () {
            return this.finishPoly(), this._holeMode = !1, this
        }, e.prototype.destroy = function (e) {
            t.prototype.destroy.call(this, e), this.geometry.refCount--, 0 === this.geometry.refCount && this.geometry.dispose(), this._matrix = null, this.currentPath = null, this._lineStyle.destroy(), this._lineStyle = null, this._fillStyle.destroy(), this._fillStyle = null, this.geometry = null, this.shader = null, this.vertexData = null, this.batches.length = 0, this.batches = null, t.prototype.destroy.call(this, e)
        }, Object.defineProperties(e.prototype, i), e
    }(ke);
    Xn._TEMP_POINT = new le;
    var jn = new le, Gn = new Uint16Array([0, 1, 2, 0, 2, 3]), Hn = function (t) {
        function e(e) {
            t.call(this), this._anchor = new ce(this._onAnchorUpdate, this, e ? e.defaultAnchor.x : 0, e ? e.defaultAnchor.y : 0), this._texture = null, this._width = 0, this._height = 0, this._tint = null, this._tintRGB = null, this.tint = 16777215, this.blendMode = _t.NORMAL, this.shader = null, this.cachedTint = 16777215, this.uvs = null, this.texture = e || _i.EMPTY, this.vertexData = new Float32Array(8), this.vertexTrimmedData = null, this._transformID = -1, this._textureID = -1, this._transformTrimmedID = -1, this._textureTrimmedID = -1, this.indices = Gn, this.size = 4, this.start = 0, this.pluginName = "batch", this.isSprite = !0, this._roundPixels = m.ROUND_PIXELS
        }

        t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
        var i = {
            roundPixels: {configurable: !0},
            width: {configurable: !0},
            height: {configurable: !0},
            anchor: {configurable: !0},
            tint: {configurable: !0},
            texture: {configurable: !0}
        };
        return e.prototype._onTextureUpdate = function () {
            this._textureID = -1, this._textureTrimmedID = -1, this.cachedTint = 16777215, this.uvs = this._texture._uvs.uvsFloat32, this._width && (this.scale.x = Vt(this.scale.x) * this._width / this._texture.orig.width), this._height && (this.scale.y = Vt(this.scale.y) * this._height / this._texture.orig.height)
        }, e.prototype._onAnchorUpdate = function () {
            this._transformID = -1, this._transformTrimmedID = -1
        }, e.prototype.calculateVertices = function () {
            var t = this._texture;
            if (this._transformID !== this.transform._worldID || this._textureID !== t._updateID) {
                this._transformID = this.transform._worldID, this._textureID = t._updateID;
                var e = this.transform.worldTransform, i = e.a, r = e.b, n = e.c, o = e.d, s = e.tx, a = e.ty,
                    h = this.vertexData, u = t.trim, l = t.orig, c = this._anchor, d = 0, p = 0, f = 0, v = 0;
                if (u ? (d = (p = u.x - c._x * l.width) + u.width, f = (v = u.y - c._y * l.height) + u.height) : (d = (p = -c._x * l.width) + l.width, f = (v = -c._y * l.height) + l.height), h[0] = i * p + n * v + s, h[1] = o * v + r * p + a, h[2] = i * d + n * v + s, h[3] = o * v + r * d + a, h[4] = i * d + n * f + s, h[5] = o * f + r * d + a, h[6] = i * p + n * f + s, h[7] = o * f + r * p + a, this._roundPixels) for (var g = 0; g < 8; g++) h[g] = Math.round(h[g])
            }
        }, e.prototype.calculateTrimmedVertices = function () {
            if (this.vertexTrimmedData) {
                if (this._transformTrimmedID === this.transform._worldID && this._textureTrimmedID === this._texture._updateID) return
            } else this.vertexTrimmedData = new Float32Array(8);
            this._transformTrimmedID = this.transform._worldID, this._textureTrimmedID = this._texture._updateID;
            var t = this._texture, e = this.vertexTrimmedData, i = t.orig, r = this._anchor,
                n = this.transform.worldTransform, o = n.a, s = n.b, a = n.c, h = n.d, u = n.tx, l = n.ty,
                c = -r._x * i.width, d = c + i.width, p = -r._y * i.height, f = p + i.height;
            e[0] = o * c + a * p + u, e[1] = h * p + s * c + l, e[2] = o * d + a * p + u, e[3] = h * p + s * d + l, e[4] = o * d + a * f + u, e[5] = h * f + s * d + l, e[6] = o * c + a * f + u, e[7] = h * f + s * c + l
        }, e.prototype._render = function (t) {
            this.calculateVertices(), t.batch.setObjectRenderer(t.plugins[this.pluginName]), t.plugins[this.pluginName].render(this)
        }, e.prototype._calculateBounds = function () {
            var t = this._texture.trim, e = this._texture.orig;
            !t || t.width === e.width && t.height === e.height ? (this.calculateVertices(), this._bounds.addQuad(this.vertexData)) : (this.calculateTrimmedVertices(), this._bounds.addQuad(this.vertexTrimmedData))
        }, e.prototype.getLocalBounds = function (e) {
            return 0 === this.children.length ? (this._bounds.minX = this._texture.orig.width * -this._anchor._x, this._bounds.minY = this._texture.orig.height * -this._anchor._y, this._bounds.maxX = this._texture.orig.width * (1 - this._anchor._x), this._bounds.maxY = this._texture.orig.height * (1 - this._anchor._y), e || (this._localBoundsRect || (this._localBoundsRect = new Oe), e = this._localBoundsRect), this._bounds.getRectangle(e)) : t.prototype.getLocalBounds.call(this, e)
        }, e.prototype.containsPoint = function (t) {
            this.worldTransform.applyInverse(t, jn);
            var e = this._texture.orig.width, i = this._texture.orig.height, r = -e * this.anchor.x, n = 0;
            return jn.x >= r && jn.x < r + e && (n = -i * this.anchor.y, jn.y >= n && jn.y < n + i)
        }, e.prototype.destroy = function (e) {
            if (t.prototype.destroy.call(this, e), this._texture.off("update", this._onTextureUpdate, this), this._anchor = null, "boolean" == typeof e ? e : e && e.texture) {
                var i = "boolean" == typeof e ? e : e && e.baseTexture;
                this._texture.destroy(!!i)
            }
            this._texture = null, this.shader = null
        }, e.from = function (t, i) {
            return new e(t instanceof _i ? t : new _i.from(t, i))
        }, i.roundPixels.set = function (t) {
            this._roundPixels !== t && (this._transformID = -1), this._roundPixels = t
        }, i.roundPixels.get = function () {
            return this._roundPixels
        }, i.width.get = function () {
            return Math.abs(this.scale.x) * this._texture.orig.width
        }, i.width.set = function (t) {
            var e = Vt(this.scale.x) || 1;
            this.scale.x = e * t / this._texture.orig.width, this._width = t
        }, i.height.get = function () {
            return Math.abs(this.scale.y) * this._texture.orig.height
        }, i.height.set = function (t) {
            var e = Vt(this.scale.y) || 1;
            this.scale.y = e * t / this._texture.orig.height, this._height = t
        }, i.anchor.get = function () {
            return this._anchor
        }, i.anchor.set = function (t) {
            this._anchor.copyFrom(t)
        }, i.tint.get = function () {
            return this._tint
        }, i.tint.set = function (t) {
            this._tint = t, this._tintRGB = (t >> 16) + (65280 & t) + ((255 & t) << 16)
        }, i.texture.get = function () {
            return this._texture
        }, i.texture.set = function (t) {
            this._texture !== t && (this._texture = t || _i.EMPTY, this.cachedTint = 16777215, this._textureID = -1, this._textureTrimmedID = -1, t && (t.baseTexture.valid ? this._onTextureUpdate() : t.once("update", this._onTextureUpdate, this)))
        }, Object.defineProperties(e.prototype, i), e
    }(ke), Yn = {LINEAR_VERTICAL: 0, LINEAR_HORIZONTAL: 1}, zn = {
        align: "left",
        breakWords: !1,
        dropShadow: !1,
        dropShadowAlpha: 1,
        dropShadowAngle: Math.PI / 6,
        dropShadowBlur: 0,
        dropShadowColor: "black",
        dropShadowDistance: 5,
        fill: "black",
        fillGradientType: Yn.LINEAR_VERTICAL,
        fillGradientStops: [],
        fontFamily: "Arial",
        fontSize: 26,
        fontStyle: "normal",
        fontVariant: "normal",
        fontWeight: "normal",
        letterSpacing: 0,
        lineHeight: 0,
        lineJoin: "miter",
        miterLimit: 10,
        padding: 0,
        stroke: "black",
        strokeThickness: 0,
        textBaseline: "alphabetic",
        trim: !1,
        whiteSpace: "pre",
        wordWrap: !1,
        wordWrapWidth: 100,
        leading: 0
    }, Vn = ["serif", "sans-serif", "monospace", "cursive", "fantasy", "system-ui"], Wn = function (t) {
        this.styleID = 0, this.reset(), Jn(this, t, t)
    }, qn = {
        align: {configurable: !0},
        breakWords: {configurable: !0},
        dropShadow: {configurable: !0},
        dropShadowAlpha: {configurable: !0},
        dropShadowAngle: {configurable: !0},
        dropShadowBlur: {configurable: !0},
        dropShadowColor: {configurable: !0},
        dropShadowDistance: {configurable: !0},
        fill: {configurable: !0},
        fillGradientType: {configurable: !0},
        fillGradientStops: {configurable: !0},
        fontFamily: {configurable: !0},
        fontSize: {configurable: !0},
        fontStyle: {configurable: !0},
        fontVariant: {configurable: !0},
        fontWeight: {configurable: !0},
        letterSpacing: {configurable: !0},
        lineHeight: {configurable: !0},
        leading: {configurable: !0},
        lineJoin: {configurable: !0},
        miterLimit: {configurable: !0},
        padding: {configurable: !0},
        stroke: {configurable: !0},
        strokeThickness: {configurable: !0},
        textBaseline: {configurable: !0},
        trim: {configurable: !0},
        whiteSpace: {configurable: !0},
        wordWrap: {configurable: !0},
        wordWrapWidth: {configurable: !0}
    };

    function Zn(t) {
        return "number" == typeof t ? Ft(t) : ("string" == typeof t && 0 === t.indexOf("0x") && (t = t.replace("0x", "#")), t)
    }

    function Kn(t) {
        if (Array.isArray(t)) {
            for (var e = 0; e < t.length; ++e) t[e] = Zn(t[e]);
            return t
        }
        return Zn(t)
    }

    function Jn(t, e, i) {
        for (var r in i) Array.isArray(e[r]) ? t[r] = e[r].slice() : t[r] = e[r]
    }

    Wn.prototype.clone = function () {
        var t = {};
        return Jn(t, this, zn), new Wn(t)
    }, Wn.prototype.reset = function () {
        Jn(this, zn, zn)
    }, qn.align.get = function () {
        return this._align
    }, qn.align.set = function (t) {
        this._align !== t && (this._align = t, this.styleID++)
    }, qn.breakWords.get = function () {
        return this._breakWords
    }, qn.breakWords.set = function (t) {
        this._breakWords !== t && (this._breakWords = t, this.styleID++)
    }, qn.dropShadow.get = function () {
        return this._dropShadow
    }, qn.dropShadow.set = function (t) {
        this._dropShadow !== t && (this._dropShadow = t, this.styleID++)
    }, qn.dropShadowAlpha.get = function () {
        return this._dropShadowAlpha
    }, qn.dropShadowAlpha.set = function (t) {
        this._dropShadowAlpha !== t && (this._dropShadowAlpha = t, this.styleID++)
    }, qn.dropShadowAngle.get = function () {
        return this._dropShadowAngle
    }, qn.dropShadowAngle.set = function (t) {
        this._dropShadowAngle !== t && (this._dropShadowAngle = t, this.styleID++)
    }, qn.dropShadowBlur.get = function () {
        return this._dropShadowBlur
    }, qn.dropShadowBlur.set = function (t) {
        this._dropShadowBlur !== t && (this._dropShadowBlur = t, this.styleID++)
    }, qn.dropShadowColor.get = function () {
        return this._dropShadowColor
    }, qn.dropShadowColor.set = function (t) {
        var e = Kn(t);
        this._dropShadowColor !== e && (this._dropShadowColor = e, this.styleID++)
    }, qn.dropShadowDistance.get = function () {
        return this._dropShadowDistance
    }, qn.dropShadowDistance.set = function (t) {
        this._dropShadowDistance !== t && (this._dropShadowDistance = t, this.styleID++)
    }, qn.fill.get = function () {
        return this._fill
    }, qn.fill.set = function (t) {
        var e = Kn(t);
        this._fill !== e && (this._fill = e, this.styleID++)
    }, qn.fillGradientType.get = function () {
        return this._fillGradientType
    }, qn.fillGradientType.set = function (t) {
        this._fillGradientType !== t && (this._fillGradientType = t, this.styleID++)
    }, qn.fillGradientStops.get = function () {
        return this._fillGradientStops
    }, qn.fillGradientStops.set = function (t) {
        (function (t, e) {
            if (!Array.isArray(t) || !Array.isArray(e)) return !1;
            if (t.length !== e.length) return !1;
            for (var i = 0; i < t.length; ++i) if (t[i] !== e[i]) return !1;
            return !0
        })(this._fillGradientStops, t) || (this._fillGradientStops = t, this.styleID++)
    }, qn.fontFamily.get = function () {
        return this._fontFamily
    }, qn.fontFamily.set = function (t) {
        this.fontFamily !== t && (this._fontFamily = t, this.styleID++)
    }, qn.fontSize.get = function () {
        return this._fontSize
    }, qn.fontSize.set = function (t) {
        this._fontSize !== t && (this._fontSize = t, this.styleID++)
    }, qn.fontStyle.get = function () {
        return this._fontStyle
    }, qn.fontStyle.set = function (t) {
        this._fontStyle !== t && (this._fontStyle = t, this.styleID++)
    }, qn.fontVariant.get = function () {
        return this._fontVariant
    }, qn.fontVariant.set = function (t) {
        this._fontVariant !== t && (this._fontVariant = t, this.styleID++)
    }, qn.fontWeight.get = function () {
        return this._fontWeight
    }, qn.fontWeight.set = function (t) {
        this._fontWeight !== t && (this._fontWeight = t, this.styleID++)
    }, qn.letterSpacing.get = function () {
        return this._letterSpacing
    }, qn.letterSpacing.set = function (t) {
        this._letterSpacing !== t && (this._letterSpacing = t, this.styleID++)
    }, qn.lineHeight.get = function () {
        return this._lineHeight
    }, qn.lineHeight.set = function (t) {
        this._lineHeight !== t && (this._lineHeight = t, this.styleID++)
    }, qn.leading.get = function () {
        return this._leading
    }, qn.leading.set = function (t) {
        this._leading !== t && (this._leading = t, this.styleID++)
    }, qn.lineJoin.get = function () {
        return this._lineJoin
    }, qn.lineJoin.set = function (t) {
        this._lineJoin !== t && (this._lineJoin = t, this.styleID++)
    }, qn.miterLimit.get = function () {
        return this._miterLimit
    }, qn.miterLimit.set = function (t) {
        this._miterLimit !== t && (this._miterLimit = t, this.styleID++)
    }, qn.padding.get = function () {
        return this._padding
    }, qn.padding.set = function (t) {
        this._padding !== t && (this._padding = t, this.styleID++)
    }, qn.stroke.get = function () {
        return this._stroke
    }, qn.stroke.set = function (t) {
        var e = Kn(t);
        this._stroke !== e && (this._stroke = e, this.styleID++)
    }, qn.strokeThickness.get = function () {
        return this._strokeThickness
    }, qn.strokeThickness.set = function (t) {
        this._strokeThickness !== t && (this._strokeThickness = t, this.styleID++)
    }, qn.textBaseline.get = function () {
        return this._textBaseline
    }, qn.textBaseline.set = function (t) {
        this._textBaseline !== t && (this._textBaseline = t, this.styleID++)
    }, qn.trim.get = function () {
        return this._trim
    }, qn.trim.set = function (t) {
        this._trim !== t && (this._trim = t, this.styleID++)
    }, qn.whiteSpace.get = function () {
        return this._whiteSpace
    }, qn.whiteSpace.set = function (t) {
        this._whiteSpace !== t && (this._whiteSpace = t, this.styleID++)
    }, qn.wordWrap.get = function () {
        return this._wordWrap
    }, qn.wordWrap.set = function (t) {
        this._wordWrap !== t && (this._wordWrap = t, this.styleID++)
    }, qn.wordWrapWidth.get = function () {
        return this._wordWrapWidth
    }, qn.wordWrapWidth.set = function (t) {
        this._wordWrapWidth !== t && (this._wordWrapWidth = t, this.styleID++)
    }, Wn.prototype.toFontString = function () {
        var t = "number" == typeof this.fontSize ? this.fontSize + "px" : this.fontSize, e = this.fontFamily;
        Array.isArray(this.fontFamily) || (e = this.fontFamily.split(","));
        for (var i = e.length - 1; i >= 0; i--) {
            var r = e[i].trim();
            !/([\"\'])[^\'\"]+\1/.test(r) && Vn.indexOf(r) < 0 && (r = '"' + r + '"'), e[i] = r
        }
        return this.fontStyle + " " + this.fontVariant + " " + this.fontWeight + " " + t + " " + e.join(",")
    }, Object.defineProperties(Wn.prototype, qn);
    var Qn = function (t, e, i, r, n, o, s, a, h) {
        this.text = t, this.style = e, this.width = i, this.height = r, this.lines = n, this.lineWidths = o, this.lineHeight = s, this.maxLineWidth = a, this.fontProperties = h
    };
    Qn.measureText = function (t, e, i, r) {
        void 0 === r && (r = Qn._canvas), i = null == i ? e.wordWrap : i;
        var n = e.toFontString(), o = Qn.measureFont(n);
        0 === o.fontSize && (o.fontSize = e.fontSize, o.ascent = e.fontSize);
        var s = r.getContext("2d");
        s.font = n;
        for (var a = (i ? Qn.wordWrap(t, e, r) : t).split(/(?:\r\n|\r|\n)/), h = new Array(a.length), u = 0, l = 0; l < a.length; l++) {
            var c = s.measureText(a[l]).width + (a[l].length - 1) * e.letterSpacing;
            h[l] = c, u = Math.max(u, c)
        }
        var d = u + e.strokeThickness;
        e.dropShadow && (d += e.dropShadowDistance);
        var p = e.lineHeight || o.fontSize + e.strokeThickness,
            f = Math.max(p, o.fontSize + e.strokeThickness) + (a.length - 1) * (p + e.leading);
        return e.dropShadow && (f += e.dropShadowDistance), new Qn(t, e, d, f, a, h, p + e.leading, u, o)
    }, Qn.wordWrap = function (t, e, i) {
        void 0 === i && (i = Qn._canvas);
        for (var r = i.getContext("2d"), n = 0, o = "", s = "", a = {}, h = e.letterSpacing, u = e.whiteSpace, l = Qn.collapseSpaces(u), c = Qn.collapseNewlines(u), d = !l, p = e.wordWrapWidth + h, f = Qn.tokenize(t), v = 0; v < f.length; v++) {
            var g = f[v];
            if (Qn.isNewline(g)) {
                if (!c) {
                    s += Qn.addLine(o), d = !l, o = "", n = 0;
                    continue
                }
                g = " "
            }
            if (l) {
                var m = Qn.isBreakingSpace(g), y = Qn.isBreakingSpace(o[o.length - 1]);
                if (m && y) continue
            }
            var _ = Qn.getFromCache(g, h, a, r);
            if (_ > p) if ("" !== o && (s += Qn.addLine(o), o = "", n = 0), Qn.canBreakWords(g, e.breakWords)) for (var x = g.split(""), b = 0; b < x.length; b++) {
                for (var T = x[b], E = 1; x[b + E];) {
                    var w = x[b + E], S = T[T.length - 1];
                    if (Qn.canBreakChars(S, w, g, b, e.breakWords)) break;
                    T += w, E++
                }
                b += T.length - 1;
                var P = Qn.getFromCache(T, h, a, r);
                P + n > p && (s += Qn.addLine(o), d = !1, o = "", n = 0), o += T, n += P
            } else {
                o.length > 0 && (s += Qn.addLine(o), o = "", n = 0);
                var I = v === f.length - 1;
                s += Qn.addLine(g, !I), d = !1, o = "", n = 0
            } else _ + n > p && (d = !1, s += Qn.addLine(o), o = "", n = 0), (o.length > 0 || !Qn.isBreakingSpace(g) || d) && (o += g, n += _)
        }
        return s += Qn.addLine(o, !1)
    }, Qn.addLine = function (t, e) {
        return void 0 === e && (e = !0), t = Qn.trimRight(t), t = e ? t + "\n" : t
    }, Qn.getFromCache = function (t, e, i, r) {
        var n = i[t];
        if (void 0 === n) {
            var o = t.length * e;
            n = r.measureText(t).width + o, i[t] = n
        }
        return n
    }, Qn.collapseSpaces = function (t) {
        return "normal" === t || "pre-line" === t
    }, Qn.collapseNewlines = function (t) {
        return "normal" === t
    }, Qn.trimRight = function (t) {
        if ("string" != typeof t) return "";
        for (var e = t.length - 1; e >= 0; e--) {
            var i = t[e];
            if (!Qn.isBreakingSpace(i)) break;
            t = t.slice(0, -1)
        }
        return t
    }, Qn.isNewline = function (t) {
        return "string" == typeof t && Qn._newlines.indexOf(t.charCodeAt(0)) >= 0
    }, Qn.isBreakingSpace = function (t) {
        return "string" == typeof t && Qn._breakingSpaces.indexOf(t.charCodeAt(0)) >= 0
    }, Qn.tokenize = function (t) {
        var e = [], i = "";
        if ("string" != typeof t) return e;
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            Qn.isBreakingSpace(n) || Qn.isNewline(n) ? ("" !== i && (e.push(i), i = ""), e.push(n)) : i += n
        }
        return "" !== i && e.push(i), e
    }, Qn.canBreakWords = function (t, e) {
        return e
    }, Qn.canBreakChars = function (t, e, i, r, n) {
        return !0
    }, Qn.measureFont = function (t) {
        if (Qn._fonts[t]) return Qn._fonts[t];
        var e = {}, i = Qn._canvas, r = Qn._context;
        r.font = t;
        var n = Qn.METRICS_STRING + Qn.BASELINE_SYMBOL, o = Math.ceil(r.measureText(n).width),
            s = Math.ceil(r.measureText(Qn.BASELINE_SYMBOL).width), a = 2 * s;
        s = s * Qn.BASELINE_MULTIPLIER | 0, i.width = o, i.height = a, r.fillStyle = "#f00", r.fillRect(0, 0, o, a), r.font = t, r.textBaseline = "alphabetic", r.fillStyle = "#000", r.fillText(n, 0, s);
        var h = r.getImageData(0, 0, o, a).data, u = h.length, l = 4 * o, c = 0, d = 0, p = !1;
        for (c = 0; c < s; ++c) {
            for (var f = 0; f < l; f += 4) if (255 !== h[d + f]) {
                p = !0;
                break
            }
            if (p) break;
            d += l
        }
        for (e.ascent = s - c, d = u - l, p = !1, c = a; c > s; --c) {
            for (var v = 0; v < l; v += 4) if (255 !== h[d + v]) {
                p = !0;
                break
            }
            if (p) break;
            d -= l
        }
        return e.descent = c - s, e.fontSize = e.ascent + e.descent, Qn._fonts[t] = e, e
    }, Qn.clearMetrics = function (t) {
        void 0 === t && (t = ""), t ? delete Qn._fonts[t] : Qn._fonts = {}
    };
    var $n = document.createElement("canvas");
    $n.width = $n.height = 10, Qn._canvas = $n, Qn._context = $n.getContext("2d"), Qn._fonts = {}, Qn.METRICS_STRING = "|Ã‰qÃ…", Qn.BASELINE_SYMBOL = "M", Qn.BASELINE_MULTIPLIER = 1.4, Qn._newlines = [10, 13], Qn._breakingSpaces = [9, 32, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8200, 8201, 8202, 8287, 12288];
    var to = {texture: !0, children: !1, baseTexture: !0}, eo = function (t) {
        function e(e, i, r) {
            (r = r || document.createElement("canvas")).width = 3, r.height = 3;
            var n = _i.from(r);
            n.orig = new Oe, n.trim = new Oe, t.call(this, n), this.canvas = r, this.context = this.canvas.getContext("2d"), this._resolution = m.RESOLUTION, this._autoResolution = !0, this._text = null, this._style = null, this._styleListener = null, this._font = "", this.text = e, this.style = i, this.localStyleID = -1
        }

        t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
        var i = {
            width: {configurable: !0},
            height: {configurable: !0},
            style: {configurable: !0},
            text: {configurable: !0},
            resolution: {configurable: !0}
        };
        return e.prototype.updateText = function (t) {
            var e = this._style;
            if (this.localStyleID !== e.styleID && (this.dirty = !0, this.localStyleID = e.styleID), this.dirty || !t) {
                this._font = this._style.toFontString();
                var i, r, n = this.context,
                    o = Qn.measureText(this._text || " ", this._style, this._style.wordWrap, this.canvas), s = o.width,
                    a = o.height, h = o.lines, u = o.lineHeight, l = o.lineWidths, c = o.maxLineWidth,
                    d = o.fontProperties;
                if (this.canvas.width = Math.ceil((Math.max(1, s) + 2 * e.padding) * this._resolution), this.canvas.height = Math.ceil((Math.max(1, a) + 2 * e.padding) * this._resolution), n.scale(this._resolution, this._resolution), n.clearRect(0, 0, this.canvas.width, this.canvas.height), n.font = this._font, n.strokeStyle = e.stroke, n.lineWidth = e.strokeThickness, n.textBaseline = e.textBaseline, n.lineJoin = e.lineJoin, n.miterLimit = e.miterLimit, e.dropShadow) {
                    var p = e.dropShadowColor, f = Lt("number" == typeof p ? p : Nt(p));
                    n.shadowColor = "rgba(" + 255 * f[0] + "," + 255 * f[1] + "," + 255 * f[2] + "," + e.dropShadowAlpha + ")", n.shadowBlur = e.dropShadowBlur, n.shadowOffsetX = Math.cos(e.dropShadowAngle) * e.dropShadowDistance, n.shadowOffsetY = Math.sin(e.dropShadowAngle) * e.dropShadowDistance
                } else n.shadowColor = 0, n.shadowBlur = 0, n.shadowOffsetX = 0, n.shadowOffsetY = 0;
                n.fillStyle = this._generateFillStyle(e, h);
                for (var v = 0; v < h.length; v++) i = e.strokeThickness / 2, r = e.strokeThickness / 2 + v * u + d.ascent, "right" === e.align ? i += c - l[v] : "center" === e.align && (i += (c - l[v]) / 2), e.stroke && e.strokeThickness && this.drawLetterSpacing(h[v], i + e.padding, r + e.padding, !0), e.fill && this.drawLetterSpacing(h[v], i + e.padding, r + e.padding);
                this.updateTexture()
            }
        }, e.prototype.drawLetterSpacing = function (t, e, i, r) {
            void 0 === r && (r = !1);
            var n = this._style.letterSpacing;
            if (0 !== n) for (var o = e, s = Array.from ? Array.from(t) : t.split(""), a = 0; a < s.length; ++a) {
                var h = s[a];
                r ? this.context.strokeText(h, o, i) : this.context.fillText(h, o, i), o += this.context.measureText(h).width + n
            } else r ? this.context.strokeText(t, e, i) : this.context.fillText(t, e, i)
        }, e.prototype.updateTexture = function () {
            var t = this.canvas;
            if (this._style.trim) {
                var e = $t(t);
                e.data && (t.width = e.width, t.height = e.height, this.context.putImageData(e.data, 0, 0))
            }
            var i = this._texture, r = this._style, n = r.trim ? 0 : r.padding, o = i.baseTexture;
            i.trim.width = i._frame.width = t.width / this._resolution, i.trim.height = i._frame.height = t.height / this._resolution, i.trim.x = -n, i.trim.y = -n, i.orig.width = i._frame.width - 2 * n, i.orig.height = i._frame.height - 2 * n, this._onTextureUpdate(), o.setRealSize(t.width, t.height, this._resolution), this.dirty = !1
        }, e.prototype.render = function (e) {
            this._autoResolution && this._resolution !== e.resolution && (this._resolution = e.resolution, this.dirty = !0), this.updateText(!0), t.prototype.render.call(this, e)
        }, e.prototype._renderCanvas = function (e) {
            this._autoResolution && this._resolution !== e.resolution && (this._resolution = e.resolution, this.dirty = !0), this.updateText(!0), t.prototype._renderCanvas.call(this, e)
        }, e.prototype.getLocalBounds = function (e) {
            return this.updateText(!0), t.prototype.getLocalBounds.call(this, e)
        }, e.prototype._calculateBounds = function () {
            this.updateText(!0), this.calculateVertices(), this._bounds.addQuad(this.vertexData)
        }, e.prototype._onStyleChange = function () {
            this.dirty = !0
        }, e.prototype._generateFillStyle = function (t, e) {
            if (!Array.isArray(t.fill)) return t.fill;
            var i, r, n, o, s = this.canvas.width / this._resolution, a = this.canvas.height / this._resolution,
                h = t.fill.slice(), u = t.fillGradientStops.slice();
            if (!u.length) for (var l = h.length + 1, c = 1; c < l; ++c) u.push(c / l);
            if (h.unshift(t.fill[0]), u.unshift(0), h.push(t.fill[t.fill.length - 1]), u.push(1), t.fillGradientType === Yn.LINEAR_VERTICAL) {
                i = this.context.createLinearGradient(s / 2, 0, s / 2, a), r = (h.length + 1) * e.length, n = 0;
                for (var d = 0; d < e.length; d++) {
                    n += 1;
                    for (var p = 0; p < h.length; p++) o = "number" == typeof u[p] ? u[p] / e.length + d / e.length : n / r, i.addColorStop(o, h[p]), n++
                }
            } else {
                i = this.context.createLinearGradient(0, a / 2, s, a / 2), r = h.length + 1, n = 1;
                for (var f = 0; f < h.length; f++) o = "number" == typeof u[f] ? u[f] : n / r, i.addColorStop(o, h[f]), n++
            }
            return i
        }, e.prototype.destroy = function (e) {
            "boolean" == typeof e && (e = {children: e}), e = Object.assign({}, to, e), t.prototype.destroy.call(this, e), this.context = null, this.canvas = null, this._style = null
        }, i.width.get = function () {
            return this.updateText(!0), Math.abs(this.scale.x) * this._texture.orig.width
        }, i.width.set = function (t) {
            this.updateText(!0);
            var e = Vt(this.scale.x) || 1;
            this.scale.x = e * t / this._texture.orig.width, this._width = t
        }, i.height.get = function () {
            return this.updateText(!0), Math.abs(this.scale.y) * this._texture.orig.height
        }, i.height.set = function (t) {
            this.updateText(!0);
            var e = Vt(this.scale.y) || 1;
            this.scale.y = e * t / this._texture.orig.height, this._height = t
        }, i.style.get = function () {
            return this._style
        }, i.style.set = function (t) {
            t = t || {}, this._style = t instanceof Wn ? t : new Wn(t), this.localStyleID = -1, this.dirty = !0
        }, i.text.get = function () {
            return this._text
        }, i.text.set = function (t) {
            t = String(null == t ? "" : t), this._text !== t && (this._text = t, this.dirty = !0)
        }, i.resolution.get = function () {
            return this._resolution
        }, i.resolution.set = function (t) {
            this._autoResolution = !1, this._resolution !== t && (this._resolution = t, this.dirty = !0)
        }, Object.defineProperties(e.prototype, i), e
    }(Hn);
    m.UPLOADS_PER_FRAME = 4;
    var io = function (t) {
        this.maxItemsPerFrame = t, this.itemsLeft = 0
    };
    io.prototype.beginFrame = function () {
        this.itemsLeft = this.maxItemsPerFrame
    }, io.prototype.allowedToUpload = function () {
        return this.itemsLeft-- > 0
    };
    var ro = function (t) {
        var e = this;
        this.limiter = new io(m.UPLOADS_PER_FRAME), this.renderer = t, this.uploadHookHelper = null, this.queue = [], this.addHooks = [], this.uploadHooks = [], this.completes = [], this.ticking = !1, this.delayedTick = function () {
            e.queue && e.prepareItems()
        }, this.registerFindHook(uo), this.registerFindHook(lo), this.registerFindHook(no), this.registerFindHook(oo), this.registerFindHook(so), this.registerUploadHook(ao), this.registerUploadHook(ho)
    };

    function no(t, e) {
        var i = !1;
        if (t && t._textures && t._textures.length) for (var r = 0; r < t._textures.length; r++) if (t._textures[r] instanceof _i) {
            var n = t._textures[r].baseTexture;
            -1 === e.indexOf(n) && (e.push(n), i = !0)
        }
        return i
    }

    function oo(t, e) {
        return t instanceof oi && (-1 === e.indexOf(t) && e.push(t), !0)
    }

    function so(t, e) {
        if (t._texture && t._texture instanceof _i) {
            var i = t._texture.baseTexture;
            return -1 === e.indexOf(i) && e.push(i), !0
        }
        return !1
    }

    function ao(t, e) {
        return e instanceof eo && (e.updateText(!0), !0)
    }

    function ho(t, e) {
        if (e instanceof Wn) {
            var i = e.toFontString();
            return Qn.measureFont(i), !0
        }
        return !1
    }

    function uo(t, e) {
        if (t instanceof eo) {
            -1 === e.indexOf(t.style) && e.push(t.style), -1 === e.indexOf(t) && e.push(t);
            var i = t._texture.baseTexture;
            return -1 === e.indexOf(i) && e.push(i), !0
        }
        return !1
    }

    function lo(t, e) {
        return t instanceof Wn && (-1 === e.indexOf(t) && e.push(t), !0)
    }

    ro.prototype.upload = function (t, e) {
        "function" == typeof t && (e = t, t = null), t && this.add(t), this.queue.length ? (e && this.completes.push(e), this.ticking || (this.ticking = !0, We.system.addOnce(this.tick, this, ze.UTILITY))) : e && e()
    }, ro.prototype.tick = function () {
        setTimeout(this.delayedTick, 0)
    }, ro.prototype.prepareItems = function () {
        for (this.limiter.beginFrame(); this.queue.length && this.limiter.allowedToUpload();) {
            var t = this.queue[0], e = !1;
            if (t && !t._destroyed) for (var i = 0, r = this.uploadHooks.length; i < r; i++) if (this.uploadHooks[i](this.uploadHookHelper, t)) {
                this.queue.shift(), e = !0;
                break
            }
            e || this.queue.shift()
        }
        if (this.queue.length) We.system.addOnce(this.tick, this, ze.UTILITY); else {
            this.ticking = !1;
            var n = this.completes.slice(0);
            this.completes.length = 0;
            for (var o = 0, s = n.length; o < s; o++) n[o]()
        }
    }, ro.prototype.registerFindHook = function (t) {
        return t && this.addHooks.push(t), this
    }, ro.prototype.registerUploadHook = function (t) {
        return t && this.uploadHooks.push(t), this
    }, ro.prototype.add = function (t) {
        for (var e = 0, i = this.addHooks.length; e < i && !this.addHooks[e](t, this.queue); e++) ;
        if (t instanceof ke) for (var r = t.children.length - 1; r >= 0; r--) this.add(t.children[r]);
        return this
    }, ro.prototype.destroy = function () {
        this.ticking && We.system.remove(this.tick, this), this.ticking = !1, this.addHooks = null, this.uploadHooks = null, this.renderer = null, this.completes = null, this.queue = null, this.limiter = null, this.uploadHookHelper = null
    };
    var co = function (t) {
        function e(e) {
            t.call(this, e), this.uploadHookHelper = this.renderer, this.registerFindHook(vo), this.registerUploadHook(po), this.registerUploadHook(fo)
        }

        return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
    }(ro);

    function po(t, e) {
        return e instanceof oi && (e._glTextures[t.CONTEXT_UID] || t.textureManager.updateTexture(e), !0)
    }

    function fo(t, e) {
        return e instanceof Xn && ((e.dirty || e.clearDirty || !e._webGL[t.plugins.graphics.CONTEXT_UID]) && t.plugins.graphics.updateGraphics(e), !0)
    }

    function vo(t, e) {
        return t instanceof Xn && (e.push(t), !0)
    }

    var go = function (t) {
        this.maxMilliseconds = t, this.frameStart = 0
    };
    go.prototype.beginFrame = function () {
        this.frameStart = Date.now()
    }, go.prototype.allowedToUpload = function () {
        return Date.now() - this.frameStart < this.maxMilliseconds
    };
    var mo = {BasePrepare: ro, CountLimiter: io, Prepare: co, TimeLimiter: go}, yo = function t(e) {
        var i = this;
        e = Object.assign({forceCanvas: !1}, e), this.renderer = Vr(e), this.stage = new ke, t._plugins.forEach(function (t) {
            t.init.call(i, e)
        })
    }, _o = {view: {configurable: !0}, screen: {configurable: !0}};
    yo.registerPlugin = function (t) {
        yo._plugins.push(t)
    }, yo.prototype.render = function () {
        this.renderer.render(this.stage)
    }, _o.view.get = function () {
        return this.renderer.view
    }, _o.screen.get = function () {
        return this.renderer.screen
    }, yo.prototype.destroy = function (t) {
        var e = this, i = yo._plugins.slice(0);
        i.reverse(), i.forEach(function (t) {
            t.destroy.call(e)
        }), this.stage.destroy(), this.stage = null, this.renderer.destroy(t), this.renderer = null, this._options = null
    }, Object.defineProperties(yo.prototype, _o), yo._plugins = [];
    var xo = function () {
    };
    xo.init = function (t) {
        var e = this;
        Object.defineProperty(this, "resizeTo", {
            set: function (t) {
                window.removeEventListener("resize", this.resize), this._resizeTo = t, t && (window.addEventListener("resize", this.resize), this.resize())
            }, get: function () {
                return this._resizeTo
            }
        }), this.resize = function () {
            e._resizeTo && (e._resizeTo === window ? e.renderer.resize(window.innerWidth, window.innerHeight) : e.renderer.resize(e._resizeTo.clientWidth, e._resizeTo.clientHeight))
        }, this._resizeTo = null, this.resizeTo = t.resizeTo || null
    }, xo.destroy = function () {
        this.resizeTo = null, this.resize = null
    }, yo.registerPlugin(xo);
    var bo = r(function (t, e) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var i = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var r = e[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            return function (e, i, r) {
                return i && t(e.prototype, i), r && t(e, r), e
            }
        }();

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        var n = function () {
            function t(e, i, n) {
                void 0 === i && (i = !1), r(this, t), this._fn = e, this._once = i, this._thisArg = n, this._next = this._prev = this._owner = null
            }

            return i(t, [{
                key: "detach", value: function () {
                    return null !== this._owner && (this._owner.detach(this), !0)
                }
            }]), t
        }();

        function o(t, e) {
            return t._head ? (t._tail._next = e, e._prev = t._tail, t._tail = e) : (t._head = e, t._tail = e), e._owner = t, e
        }

        var s = function () {
            function t() {
                r(this, t), this._head = this._tail = void 0
            }

            return i(t, [{
                key: "handlers", value: function () {
                    var t = !(arguments.length <= 0 || void 0 === arguments[0]) && arguments[0], e = this._head;
                    if (t) return !!e;
                    for (var i = []; e;) i.push(e), e = e._next;
                    return i
                }
            }, {
                key: "has", value: function (t) {
                    if (!(t instanceof n)) throw new Error("MiniSignal#has(): First arg must be a MiniSignalBinding object.");
                    return t._owner === this
                }
            }, {
                key: "dispatch", value: function () {
                    var t = arguments, e = this._head;
                    if (!e) return !1;
                    for (; e;) e._once && this.detach(e), e._fn.apply(e._thisArg, t), e = e._next;
                    return !0
                }
            }, {
                key: "add", value: function (t) {
                    var e = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1];
                    if ("function" != typeof t) throw new Error("MiniSignal#add(): First arg must be a Function.");
                    return o(this, new n(t, !1, e))
                }
            }, {
                key: "once", value: function (t) {
                    var e = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1];
                    if ("function" != typeof t) throw new Error("MiniSignal#once(): First arg must be a Function.");
                    return o(this, new n(t, !0, e))
                }
            }, {
                key: "detach", value: function (t) {
                    if (!(t instanceof n)) throw new Error("MiniSignal#detach(): First arg must be a MiniSignalBinding object.");
                    return t._owner !== this ? this : (t._prev && (t._prev._next = t._next), t._next && (t._next._prev = t._prev), t === this._head ? (this._head = t._next, null === t._next && (this._tail = null)) : t === this._tail && (this._tail = t._prev, this._tail._next = null), t._owner = null, this)
                }
            }, {
                key: "detachAll", value: function () {
                    var t = this._head;
                    if (!t) return this;
                    for (this._head = this._tail = null; t;) t._owner = null, t = t._next;
                    return this
                }
            }]), t
        }();
        s.MiniSignalBinding = n, e.default = s, t.exports = e.default
    }), To = (i(bo), function (t, e) {
        e = e || {};
        for (var i = {
            key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
            q: {name: "queryKey", parser: /(?:^|&)([^&=]*)=?([^&]*)/g},
            parser: {
                strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
            }
        }, r = i.parser[e.strictMode ? "strict" : "loose"].exec(t), n = {}, o = 14; o--;) n[i.key[o]] = r[o] || "";
        return n[i.q.name] = {}, n[i.key[12]].replace(i.q.parser, function (t, e, r) {
            e && (n[i.q.name][e] = r)
        }), n
    }), Eo = r(function (t, e) {
        function i() {
        }

        function r(t) {
            return function () {
                if (null === t) throw new Error("Callback was already called.");
                var e = t;
                t = null, e.apply(this, arguments)
            }
        }

        e.__esModule = !0, e.eachSeries = function (t, e, i, r) {
            var n = 0, o = t.length;
            !function s(a) {
                a || n === o ? i && i(a) : r ? setTimeout(function () {
                    e(t[n++], s)
                }, 1) : e(t[n++], s)
            }()
        }, e.queue = function (t, e) {
            if (null == e) e = 1; else if (0 === e) throw new Error("Concurrency must not be zero");
            var n = 0, o = {
                _tasks: [],
                concurrency: e,
                saturated: i,
                unsaturated: i,
                buffer: e / 4,
                empty: i,
                drain: i,
                error: i,
                started: !1,
                paused: !1,
                push: function (t, e) {
                    s(t, !1, e)
                },
                kill: function () {
                    n = 0, o.drain = i, o.started = !1, o._tasks = []
                },
                unshift: function (t, e) {
                    s(t, !0, e)
                },
                process: function () {
                    for (; !o.paused && n < o.concurrency && o._tasks.length;) {
                        var e = o._tasks.shift();
                        0 === o._tasks.length && o.empty(), (n += 1) === o.concurrency && o.saturated(), t(e.data, r(a(e)))
                    }
                },
                length: function () {
                    return o._tasks.length
                },
                running: function () {
                    return n
                },
                idle: function () {
                    return o._tasks.length + n === 0
                },
                pause: function () {
                    !0 !== o.paused && (o.paused = !0)
                },
                resume: function () {
                    if (!1 !== o.paused) {
                        o.paused = !1;
                        for (var t = 1; t <= o.concurrency; t++) o.process()
                    }
                }
            };

            function s(t, e, r) {
                if (null != r && "function" != typeof r) throw new Error("task callback must be a function");
                if (o.started = !0, null == t && o.idle()) setTimeout(function () {
                    return o.drain()
                }, 1); else {
                    var n = {data: t, callback: "function" == typeof r ? r : i};
                    e ? o._tasks.unshift(n) : o._tasks.push(n), setTimeout(function () {
                        return o.process()
                    }, 1)
                }
            }

            function a(t) {
                return function () {
                    n -= 1, t.callback.apply(t, arguments), null != arguments[0] && o.error(arguments[0], t.data), n <= o.concurrency - o.buffer && o.unsaturated(), o.idle() && o.drain(), o.process()
                }
            }

            return o
        }
    }), wo = (i(Eo), Eo.eachSeries, Eo.queue, r(function (t, e) {
        e.__esModule = !0, e.Resource = void 0;
        var i = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var r = e[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            return function (e, i, r) {
                return i && t(e.prototype, i), r && t(e, r), e
            }
        }(), r = o(To), n = o(bo);

        function o(t) {
            return t && t.__esModule ? t : {default: t}
        }

        var s = !(!window.XDomainRequest || "withCredentials" in new XMLHttpRequest), a = null;

        function h() {
        }

        var u = e.Resource = function () {
            function t(e, i, r) {
                if (function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), "string" != typeof e || "string" != typeof i) throw new Error("Both name and url are required for constructing a resource.");
                r = r || {}, this._flags = 0, this._setFlag(t.STATUS_FLAGS.DATA_URL, 0 === i.indexOf("data:")), this.name = e, this.url = i, this.extension = this._getExtension(), this.data = null, this.crossOrigin = !0 === r.crossOrigin ? "anonymous" : r.crossOrigin, this.timeout = r.timeout || 0, this.loadType = r.loadType || this._determineLoadType(), this.xhrType = r.xhrType, this.metadata = r.metadata || {}, this.error = null, this.xhr = null, this.children = [], this.type = t.TYPE.UNKNOWN, this.progressChunk = 0, this._dequeue = h, this._onLoadBinding = null, this._elementTimer = 0, this._boundComplete = this.complete.bind(this), this._boundOnError = this._onError.bind(this), this._boundOnProgress = this._onProgress.bind(this), this._boundOnTimeout = this._onTimeout.bind(this), this._boundXhrOnError = this._xhrOnError.bind(this), this._boundXhrOnTimeout = this._xhrOnTimeout.bind(this), this._boundXhrOnAbort = this._xhrOnAbort.bind(this), this._boundXhrOnLoad = this._xhrOnLoad.bind(this), this.onStart = new n.default, this.onProgress = new n.default, this.onComplete = new n.default, this.onAfterMiddleware = new n.default
            }

            return t.setExtensionLoadType = function (e, i) {
                l(t._loadTypeMap, e, i)
            }, t.setExtensionXhrType = function (e, i) {
                l(t._xhrTypeMap, e, i)
            }, t.prototype.complete = function () {
                this._clearEvents(), this._finish()
            }, t.prototype.abort = function (e) {
                if (!this.error) {
                    if (this.error = new Error(e), this._clearEvents(), this.xhr) this.xhr.abort(); else if (this.xdr) this.xdr.abort(); else if (this.data) if (this.data.src) this.data.src = t.EMPTY_GIF; else for (; this.data.firstChild;) this.data.removeChild(this.data.firstChild);
                    this._finish()
                }
            }, t.prototype.load = function (e) {
                var i = this;
                if (!this.isLoading) if (this.isComplete) e && setTimeout(function () {
                    return e(i)
                }, 1); else switch (e && this.onComplete.once(e), this._setFlag(t.STATUS_FLAGS.LOADING, !0), this.onStart.dispatch(this), !1 !== this.crossOrigin && "string" == typeof this.crossOrigin || (this.crossOrigin = this._determineCrossOrigin(this.url)), this.loadType) {
                    case t.LOAD_TYPE.IMAGE:
                        this.type = t.TYPE.IMAGE, this._loadElement("image");
                        break;
                    case t.LOAD_TYPE.AUDIO:
                        this.type = t.TYPE.AUDIO, this._loadSourceElement("audio");
                        break;
                    case t.LOAD_TYPE.VIDEO:
                        this.type = t.TYPE.VIDEO, this._loadSourceElement("video");
                        break;
                    case t.LOAD_TYPE.XHR:
                    default:
                        s && this.crossOrigin ? this._loadXdr() : this._loadXhr()
                }
            }, t.prototype._hasFlag = function (t) {
                return 0 != (this._flags & t)
            }, t.prototype._setFlag = function (t, e) {
                this._flags = e ? this._flags | t : this._flags & ~t
            }, t.prototype._clearEvents = function () {
                clearTimeout(this._elementTimer), this.data && this.data.removeEventListener && (this.data.removeEventListener("error", this._boundOnError, !1), this.data.removeEventListener("load", this._boundComplete, !1), this.data.removeEventListener("progress", this._boundOnProgress, !1), this.data.removeEventListener("canplaythrough", this._boundComplete, !1)), this.xhr && (this.xhr.removeEventListener ? (this.xhr.removeEventListener("error", this._boundXhrOnError, !1), this.xhr.removeEventListener("timeout", this._boundXhrOnTimeout, !1), this.xhr.removeEventListener("abort", this._boundXhrOnAbort, !1), this.xhr.removeEventListener("progress", this._boundOnProgress, !1), this.xhr.removeEventListener("load", this._boundXhrOnLoad, !1)) : (this.xhr.onerror = null, this.xhr.ontimeout = null, this.xhr.onprogress = null, this.xhr.onload = null))
            }, t.prototype._finish = function () {
                if (this.isComplete) throw new Error("Complete called again for an already completed resource.");
                this._setFlag(t.STATUS_FLAGS.COMPLETE, !0), this._setFlag(t.STATUS_FLAGS.LOADING, !1), this.onComplete.dispatch(this)
            }, t.prototype._loadElement = function (t) {
                this.metadata.loadElement ? this.data = this.metadata.loadElement : "image" === t && void 0 !== window.Image ? this.data = new Image : this.data = document.createElement(t), this.crossOrigin && (this.data.crossOrigin = this.crossOrigin), this.metadata.skipSource || (this.data.src = this.url), this.data.addEventListener("error", this._boundOnError, !1), this.data.addEventListener("load", this._boundComplete, !1), this.data.addEventListener("progress", this._boundOnProgress, !1), this.timeout && (this._elementTimer = setTimeout(this._boundOnTimeout, this.timeout))
            }, t.prototype._loadSourceElement = function (t) {
                if (this.metadata.loadElement ? this.data = this.metadata.loadElement : "audio" === t && void 0 !== window.Audio ? this.data = new Audio : this.data = document.createElement(t), null !== this.data) {
                    if (this.crossOrigin && (this.data.crossOrigin = this.crossOrigin), !this.metadata.skipSource) if (navigator.isCocoonJS) this.data.src = Array.isArray(this.url) ? this.url[0] : this.url; else if (Array.isArray(this.url)) for (var e = this.metadata.mimeType, i = 0; i < this.url.length; ++i) this.data.appendChild(this._createSource(t, this.url[i], Array.isArray(e) ? e[i] : e)); else {
                        var r = this.metadata.mimeType;
                        this.data.appendChild(this._createSource(t, this.url, Array.isArray(r) ? r[0] : r))
                    }
                    this.data.addEventListener("error", this._boundOnError, !1), this.data.addEventListener("load", this._boundComplete, !1), this.data.addEventListener("progress", this._boundOnProgress, !1), this.data.addEventListener("canplaythrough", this._boundComplete, !1), this.data.load(), this.timeout && (this._elementTimer = setTimeout(this._boundOnTimeout, this.timeout))
                } else this.abort("Unsupported element: " + t)
            }, t.prototype._loadXhr = function () {
                "string" != typeof this.xhrType && (this.xhrType = this._determineXhrType());
                var e = this.xhr = new XMLHttpRequest;
                e.open("GET", this.url, !0), e.timeout = this.timeout, this.xhrType === t.XHR_RESPONSE_TYPE.JSON || this.xhrType === t.XHR_RESPONSE_TYPE.DOCUMENT ? e.responseType = t.XHR_RESPONSE_TYPE.TEXT : e.responseType = this.xhrType, e.addEventListener("error", this._boundXhrOnError, !1), e.addEventListener("timeout", this._boundXhrOnTimeout, !1), e.addEventListener("abort", this._boundXhrOnAbort, !1), e.addEventListener("progress", this._boundOnProgress, !1), e.addEventListener("load", this._boundXhrOnLoad, !1), e.send()
            }, t.prototype._loadXdr = function () {
                "string" != typeof this.xhrType && (this.xhrType = this._determineXhrType());
                var t = this.xhr = new XDomainRequest;
                t.timeout = this.timeout || 5e3, t.onerror = this._boundXhrOnError, t.ontimeout = this._boundXhrOnTimeout, t.onprogress = this._boundOnProgress, t.onload = this._boundXhrOnLoad, t.open("GET", this.url, !0), setTimeout(function () {
                    return t.send()
                }, 1)
            }, t.prototype._createSource = function (t, e, i) {
                i || (i = t + "/" + this._getExtension(e));
                var r = document.createElement("source");
                return r.src = e, r.type = i, r
            }, t.prototype._onError = function (t) {
                this.abort("Failed to load element using: " + t.target.nodeName)
            }, t.prototype._onProgress = function (t) {
                t && t.lengthComputable && this.onProgress.dispatch(this, t.loaded / t.total)
            }, t.prototype._onTimeout = function () {
                this.abort("Load timed out.")
            }, t.prototype._xhrOnError = function () {
                var t = this.xhr;
                this.abort(c(t) + " Request failed. Status: " + t.status + ', text: "' + t.statusText + '"')
            }, t.prototype._xhrOnTimeout = function () {
                var t = this.xhr;
                this.abort(c(t) + " Request timed out.")
            }, t.prototype._xhrOnAbort = function () {
                var t = this.xhr;
                this.abort(c(t) + " Request was aborted by the user.")
            }, t.prototype._xhrOnLoad = function () {
                var e = this.xhr, i = "", r = void 0 === e.status ? 200 : e.status;
                if ("" !== e.responseType && "text" !== e.responseType && void 0 !== e.responseType || (i = e.responseText), 0 === r && (i.length > 0 || e.responseType === t.XHR_RESPONSE_TYPE.BUFFER) ? r = 200 : 1223 === r && (r = 204), 2 === (r / 100 | 0)) {
                    if (this.xhrType === t.XHR_RESPONSE_TYPE.TEXT) this.data = i, this.type = t.TYPE.TEXT; else if (this.xhrType === t.XHR_RESPONSE_TYPE.JSON) try {
                        this.data = JSON.parse(i), this.type = t.TYPE.JSON
                    } catch (t) {
                        return void this.abort("Error trying to parse loaded json: " + t)
                    } else if (this.xhrType === t.XHR_RESPONSE_TYPE.DOCUMENT) try {
                        if (window.DOMParser) {
                            var n = new DOMParser;
                            this.data = n.parseFromString(i, "text/xml")
                        } else {
                            var o = document.createElement("div");
                            o.innerHTML = i, this.data = o
                        }
                        this.type = t.TYPE.XML
                    } catch (t) {
                        return void this.abort("Error trying to parse loaded xml: " + t)
                    } else this.data = e.response || i;
                    this.complete()
                } else this.abort("[" + e.status + "] " + e.statusText + ": " + e.responseURL)
            }, t.prototype._determineCrossOrigin = function (t, e) {
                if (0 === t.indexOf("data:")) return "";
                if (window.origin !== window.location.origin) return "anonymous";
                e = e || window.location, a || (a = document.createElement("a")), a.href = t;
                var i = !(t = (0, r.default)(a.href, {strictMode: !0})).port && "" === e.port || t.port === e.port,
                    n = t.protocol ? t.protocol + ":" : "";
                return t.host === e.hostname && i && n === e.protocol ? "" : "anonymous"
            }, t.prototype._determineXhrType = function () {
                return t._xhrTypeMap[this.extension] || t.XHR_RESPONSE_TYPE.TEXT
            }, t.prototype._determineLoadType = function () {
                return t._loadTypeMap[this.extension] || t.LOAD_TYPE.XHR
            }, t.prototype._getExtension = function () {
                var t = this.url, e = "";
                if (this.isDataUrl) {
                    var i = t.indexOf("/");
                    e = t.substring(i + 1, t.indexOf(";", i))
                } else {
                    var r = t.indexOf("?"), n = t.indexOf("#"),
                        o = Math.min(r > -1 ? r : t.length, n > -1 ? n : t.length);
                    e = (t = t.substring(0, o)).substring(t.lastIndexOf(".") + 1)
                }
                return e.toLowerCase()
            }, t.prototype._getMimeFromXhrType = function (e) {
                switch (e) {
                    case t.XHR_RESPONSE_TYPE.BUFFER:
                        return "application/octet-binary";
                    case t.XHR_RESPONSE_TYPE.BLOB:
                        return "application/blob";
                    case t.XHR_RESPONSE_TYPE.DOCUMENT:
                        return "application/xml";
                    case t.XHR_RESPONSE_TYPE.JSON:
                        return "application/json";
                    case t.XHR_RESPONSE_TYPE.DEFAULT:
                    case t.XHR_RESPONSE_TYPE.TEXT:
                    default:
                        return "text/plain"
                }
            }, i(t, [{
                key: "isDataUrl", get: function () {
                    return this._hasFlag(t.STATUS_FLAGS.DATA_URL)
                }
            }, {
                key: "isComplete", get: function () {
                    return this._hasFlag(t.STATUS_FLAGS.COMPLETE)
                }
            }, {
                key: "isLoading", get: function () {
                    return this._hasFlag(t.STATUS_FLAGS.LOADING)
                }
            }]), t
        }();

        function l(t, e, i) {
            e && 0 === e.indexOf(".") && (e = e.substring(1)), e && (t[e] = i)
        }

        function c(t) {
            return t.toString().replace("object ", "")
        }

        u.STATUS_FLAGS = {NONE: 0, DATA_URL: 1, COMPLETE: 2, LOADING: 4}, u.TYPE = {
            UNKNOWN: 0,
            JSON: 1,
            XML: 2,
            IMAGE: 3,
            AUDIO: 4,
            VIDEO: 5,
            TEXT: 6
        }, u.LOAD_TYPE = {XHR: 1, IMAGE: 2, AUDIO: 3, VIDEO: 4}, u.XHR_RESPONSE_TYPE = {
            DEFAULT: "text",
            BUFFER: "arraybuffer",
            BLOB: "blob",
            DOCUMENT: "document",
            JSON: "json",
            TEXT: "text"
        }, u._loadTypeMap = {
            gif: u.LOAD_TYPE.IMAGE,
            png: u.LOAD_TYPE.IMAGE,
            bmp: u.LOAD_TYPE.IMAGE,
            jpg: u.LOAD_TYPE.IMAGE,
            jpeg: u.LOAD_TYPE.IMAGE,
            tif: u.LOAD_TYPE.IMAGE,
            tiff: u.LOAD_TYPE.IMAGE,
            webp: u.LOAD_TYPE.IMAGE,
            tga: u.LOAD_TYPE.IMAGE,
            svg: u.LOAD_TYPE.IMAGE,
            "svg+xml": u.LOAD_TYPE.IMAGE,
            mp3: u.LOAD_TYPE.AUDIO,
            ogg: u.LOAD_TYPE.AUDIO,
            wav: u.LOAD_TYPE.AUDIO,
            mp4: u.LOAD_TYPE.VIDEO,
            webm: u.LOAD_TYPE.VIDEO
        }, u._xhrTypeMap = {
            xhtml: u.XHR_RESPONSE_TYPE.DOCUMENT,
            html: u.XHR_RESPONSE_TYPE.DOCUMENT,
            htm: u.XHR_RESPONSE_TYPE.DOCUMENT,
            xml: u.XHR_RESPONSE_TYPE.DOCUMENT,
            tmx: u.XHR_RESPONSE_TYPE.DOCUMENT,
            svg: u.XHR_RESPONSE_TYPE.DOCUMENT,
            tsx: u.XHR_RESPONSE_TYPE.DOCUMENT,
            gif: u.XHR_RESPONSE_TYPE.BLOB,
            png: u.XHR_RESPONSE_TYPE.BLOB,
            bmp: u.XHR_RESPONSE_TYPE.BLOB,
            jpg: u.XHR_RESPONSE_TYPE.BLOB,
            jpeg: u.XHR_RESPONSE_TYPE.BLOB,
            tif: u.XHR_RESPONSE_TYPE.BLOB,
            tiff: u.XHR_RESPONSE_TYPE.BLOB,
            webp: u.XHR_RESPONSE_TYPE.BLOB,
            tga: u.XHR_RESPONSE_TYPE.BLOB,
            json: u.XHR_RESPONSE_TYPE.JSON,
            text: u.XHR_RESPONSE_TYPE.TEXT,
            txt: u.XHR_RESPONSE_TYPE.TEXT,
            ttf: u.XHR_RESPONSE_TYPE.BUFFER,
            otf: u.XHR_RESPONSE_TYPE.BUFFER
        }, u.EMPTY_GIF = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", t.exports.default = u
    })), So = (i(wo), wo.Resource, r(function (t, e) {
        e.__esModule = !0, e.Loader = void 0;
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, r = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var r = e[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            return function (e, i, r) {
                return i && t(e.prototype, i), r && t(e, r), e
            }
        }(), n = a(bo), o = a(To), s = function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t) for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        }(Eo);

        function a(t) {
            return t && t.__esModule ? t : {default: t}
        }

        var h = /(#[\w-]+)?$/, u = e.Loader = function () {
            function t() {
                var e = this, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.baseUrl = i, this.progress = 0, this.loading = !1, this.defaultQueryString = "", this._beforeMiddleware = [], this._afterMiddleware = [], this._resourcesParsing = [], this._boundLoadResource = function (t, i) {
                    return e._loadResource(t, i)
                }, this._queue = s.queue(this._boundLoadResource, r), this._queue.pause(), this.resources = {}, this.onProgress = new n.default, this.onError = new n.default, this.onLoad = new n.default, this.onStart = new n.default, this.onComplete = new n.default;
                for (var o = 0; o < t._defaultBeforeMiddleware.length; ++o) this.pre(t._defaultBeforeMiddleware[o]);
                for (var a = 0; a < t._defaultAfterMiddleware.length; ++a) this.use(t._defaultAfterMiddleware[a])
            }

            return t.prototype.add = function (t, e, r, n) {
                if (Array.isArray(t)) {
                    for (var o = 0; o < t.length; ++o) this.add(t[o]);
                    return this
                }
                if ("object" === (void 0 === t ? "undefined" : i(t)) && (n = e || t.callback || t.onComplete, r = t, e = t.url, t = t.name || t.key || t.url), "string" != typeof e && (n = r, r = e, e = t), "string" != typeof e) throw new Error("No url passed to add resource to loader.");
                if ("function" == typeof r && (n = r, r = null), this.loading && (!r || !r.parentResource)) throw new Error("Cannot add resources while the loader is running.");
                if (this.resources[t]) throw new Error('Resource named "' + t + '" already exists.');
                if (e = this._prepareUrl(e), this.resources[t] = new wo.Resource(t, e, r), "function" == typeof n && this.resources[t].onAfterMiddleware.once(n), this.loading) {
                    for (var s = r.parentResource, a = [], h = 0; h < s.children.length; ++h) s.children[h].isComplete || a.push(s.children[h]);
                    var u = s.progressChunk * (a.length + 1) / (a.length + 2);
                    s.children.push(this.resources[t]), s.progressChunk = u;
                    for (var l = 0; l < a.length; ++l) a[l].progressChunk = u;
                    this.resources[t].progressChunk = u
                }
                return this._queue.push(this.resources[t]), this
            }, t.prototype.pre = function (t) {
                return this._beforeMiddleware.push(t), this
            }, t.prototype.use = function (t) {
                return this._afterMiddleware.push(t), this
            }, t.prototype.reset = function () {
                for (var t in this.progress = 0, this.loading = !1, this._queue.kill(), this._queue.pause(), this.resources) {
                    var e = this.resources[t];
                    e._onLoadBinding && e._onLoadBinding.detach(), e.isLoading && e.abort()
                }
                return this.resources = {}, this
            }, t.prototype.load = function (t) {
                if ("function" == typeof t && this.onComplete.once(t), this.loading) return this;
                if (this._queue.idle()) this._onStart(), this._onComplete(); else {
                    for (var e = 100 / this._queue._tasks.length, i = 0; i < this._queue._tasks.length; ++i) this._queue._tasks[i].data.progressChunk = e;
                    this._onStart(), this._queue.resume()
                }
                return this
            }, t.prototype._prepareUrl = function (t) {
                var e = (0, o.default)(t, {strictMode: !0}), i = void 0;
                if (i = e.protocol || !e.path || 0 === t.indexOf("//") ? t : this.baseUrl.length && this.baseUrl.lastIndexOf("/") !== this.baseUrl.length - 1 && "/" !== t.charAt(0) ? this.baseUrl + "/" + t : this.baseUrl + t, this.defaultQueryString) {
                    var r = h.exec(i)[0];
                    -1 !== (i = i.substr(0, i.length - r.length)).indexOf("?") ? i += "&" + this.defaultQueryString : i += "?" + this.defaultQueryString, i += r
                }
                return i
            }, t.prototype._loadResource = function (t, e) {
                var i = this;
                t._dequeue = e, s.eachSeries(this._beforeMiddleware, function (e, r) {
                    e.call(i, t, function () {
                        r(t.isComplete ? {} : null)
                    })
                }, function () {
                    t.isComplete ? i._onLoad(t) : (t._onLoadBinding = t.onComplete.once(i._onLoad, i), t.load())
                }, !0)
            }, t.prototype._onStart = function () {
                this.progress = 0, this.loading = !0, this.onStart.dispatch(this)
            }, t.prototype._onComplete = function () {
                this.progress = 100, this.loading = !1, this.onComplete.dispatch(this, this.resources)
            }, t.prototype._onLoad = function (t) {
                var e = this;
                t._onLoadBinding = null, this._resourcesParsing.push(t), t._dequeue(), s.eachSeries(this._afterMiddleware, function (i, r) {
                    i.call(e, t, r)
                }, function () {
                    t.onAfterMiddleware.dispatch(t), e.progress = Math.min(100, e.progress + t.progressChunk), e.onProgress.dispatch(e, t), t.error ? e.onError.dispatch(t.error, e, t) : e.onLoad.dispatch(e, t), e._resourcesParsing.splice(e._resourcesParsing.indexOf(t), 1), e._queue.idle() && 0 === e._resourcesParsing.length && e._onComplete()
                }, !0)
            }, r(t, [{
                key: "concurrency", get: function () {
                    return this._queue.concurrency
                }, set: function (t) {
                    this._queue.concurrency = t
                }
            }]), t
        }();
        u._defaultBeforeMiddleware = [], u._defaultAfterMiddleware = [], u.pre = function (t) {
            return u._defaultBeforeMiddleware.push(t), u
        }, u.use = function (t) {
            return u._defaultAfterMiddleware.push(t), u
        }
    })), Po = (i(So), So.Loader, r(function (t, e) {
        e.__esModule = !0, e.encodeBinary = r;
        var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

        function r(t) {
            for (var e = "", r = 0; r < t.length;) {
                for (var n = [0, 0, 0], o = [0, 0, 0, 0], s = 0; s < n.length; ++s) r < t.length ? n[s] = 255 & t.charCodeAt(r++) : n[s] = 0;
                switch (o[0] = n[0] >> 2, o[1] = (3 & n[0]) << 4 | n[1] >> 4, o[2] = (15 & n[1]) << 2 | n[2] >> 6, o[3] = 63 & n[2], r - (t.length - 1)) {
                    case 2:
                        o[3] = 64, o[2] = 64;
                        break;
                    case 1:
                        o[3] = 64
                }
                for (var a = 0; a < o.length; ++a) e += i.charAt(o[a])
            }
            return e
        }

        t.exports.default = r
    })), Io = (i(Po), Po.encodeBinary, So.Loader), Ao = wo.Resource;
    Io.Resource = Ao, Io.async = Eo, Io.encodeBinary = Po, Io.base64 = Po;
    var Oo = Io, Co = Io, Mo = Io, Do = Oo.Resource;

    function Ro(t) {
        return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
    }

    function Lo(t, e) {
        return t(e = {exports: {}}, e.exports), e.exports
    }

    Oo.Loader = Co, Oo.default = Mo;
    var Fo = function (t, e) {
        e = e || {};
        for (var i = {
            key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
            q: {name: "queryKey", parser: /(?:^|&)([^&=]*)=?([^&]*)/g},
            parser: {
                strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
            }
        }, r = i.parser[e.strictMode ? "strict" : "loose"].exec(t), n = {}, o = 14; o--;) n[i.key[o]] = r[o] || "";
        return n[i.q.name] = {}, n[i.key[12]].replace(i.q.parser, function (t, e, r) {
            e && (n[i.q.name][e] = r)
        }), n
    }, No = Lo(function (t, e) {
        Object.defineProperty(e, "__esModule", {value: !0});
        var i = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var r = e[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            return function (e, i, r) {
                return i && t(e.prototype, i), r && t(e, r), e
            }
        }();

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        var n = function () {
            function t(e, i, n) {
                void 0 === i && (i = !1), r(this, t), this._fn = e, this._once = i, this._thisArg = n, this._next = this._prev = this._owner = null
            }

            return i(t, [{
                key: "detach", value: function () {
                    return null !== this._owner && (this._owner.detach(this), !0)
                }
            }]), t
        }();

        function o(t, e) {
            return t._head ? (t._tail._next = e, e._prev = t._tail, t._tail = e) : (t._head = e, t._tail = e), e._owner = t, e
        }

        var s = function () {
            function t() {
                r(this, t), this._head = this._tail = void 0
            }

            return i(t, [{
                key: "handlers", value: function () {
                    var t = !(arguments.length <= 0 || void 0 === arguments[0]) && arguments[0], e = this._head;
                    if (t) return !!e;
                    for (var i = []; e;) i.push(e), e = e._next;
                    return i
                }
            }, {
                key: "has", value: function (t) {
                    if (!(t instanceof n)) throw new Error("MiniSignal#has(): First arg must be a MiniSignalBinding object.");
                    return t._owner === this
                }
            }, {
                key: "dispatch", value: function () {
                    var t = arguments, e = this._head;
                    if (!e) return !1;
                    for (; e;) e._once && this.detach(e), e._fn.apply(e._thisArg, t), e = e._next;
                    return !0
                }
            }, {
                key: "add", value: function (t) {
                    var e = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1];
                    if ("function" != typeof t) throw new Error("MiniSignal#add(): First arg must be a Function.");
                    return o(this, new n(t, !1, e))
                }
            }, {
                key: "once", value: function (t) {
                    var e = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1];
                    if ("function" != typeof t) throw new Error("MiniSignal#once(): First arg must be a Function.");
                    return o(this, new n(t, !0, e))
                }
            }, {
                key: "detach", value: function (t) {
                    if (!(t instanceof n)) throw new Error("MiniSignal#detach(): First arg must be a MiniSignalBinding object.");
                    return t._owner !== this ? this : (t._prev && (t._prev._next = t._next), t._next && (t._next._prev = t._prev), t === this._head ? (this._head = t._next, null === t._next && (this._tail = null)) : t === this._tail && (this._tail = t._prev, this._tail._next = null), t._owner = null, this)
                }
            }, {
                key: "detachAll", value: function () {
                    var t = this._head;
                    if (!t) return this;
                    for (this._head = this._tail = null; t;) t._owner = null, t = t._next;
                    return this
                }
            }]), t
        }();
        s.MiniSignalBinding = n, e.default = s, t.exports = e.default
    });
    Ro(No);
    var Uo = Lo(function (t, e) {
        e.__esModule = !0, e.Resource = void 0;
        var i = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var r = e[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            return function (e, i, r) {
                return i && t(e.prototype, i), r && t(e, r), e
            }
        }(), r = o(Fo), n = o(No);

        function o(t) {
            return t && t.__esModule ? t : {default: t}
        }

        var s = !(!window.XDomainRequest || "withCredentials" in new XMLHttpRequest), a = null;

        function h() {
        }

        var u = e.Resource = function () {
            function t(e, i, r) {
                if (function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), "string" != typeof e || "string" != typeof i) throw new Error("Both name and url are required for constructing a resource.");
                r = r || {}, this._flags = 0, this._setFlag(t.STATUS_FLAGS.DATA_URL, 0 === i.indexOf("data:")), this.name = e, this.url = i, this.extension = this._getExtension(), this.data = null, this.crossOrigin = !0 === r.crossOrigin ? "anonymous" : r.crossOrigin, this.timeout = r.timeout || 0, this.loadType = r.loadType || this._determineLoadType(), this.xhrType = r.xhrType, this.metadata = r.metadata || {}, this.error = null, this.xhr = null, this.children = [], this.type = t.TYPE.UNKNOWN, this.progressChunk = 0, this._dequeue = h, this._onLoadBinding = null, this._elementTimer = 0, this._boundComplete = this.complete.bind(this), this._boundOnError = this._onError.bind(this), this._boundOnProgress = this._onProgress.bind(this), this._boundOnTimeout = this._onTimeout.bind(this), this._boundXhrOnError = this._xhrOnError.bind(this), this._boundXhrOnTimeout = this._xhrOnTimeout.bind(this), this._boundXhrOnAbort = this._xhrOnAbort.bind(this), this._boundXhrOnLoad = this._xhrOnLoad.bind(this), this.onStart = new n.default, this.onProgress = new n.default, this.onComplete = new n.default, this.onAfterMiddleware = new n.default
            }

            return t.setExtensionLoadType = function (e, i) {
                l(t._loadTypeMap, e, i)
            }, t.setExtensionXhrType = function (e, i) {
                l(t._xhrTypeMap, e, i)
            }, t.prototype.complete = function () {
                this._clearEvents(), this._finish()
            }, t.prototype.abort = function (e) {
                if (!this.error) {
                    if (this.error = new Error(e), this._clearEvents(), this.xhr) this.xhr.abort(); else if (this.xdr) this.xdr.abort(); else if (this.data) if (this.data.src) this.data.src = t.EMPTY_GIF; else for (; this.data.firstChild;) this.data.removeChild(this.data.firstChild);
                    this._finish()
                }
            }, t.prototype.load = function (e) {
                var i = this;
                if (!this.isLoading) if (this.isComplete) e && setTimeout(function () {
                    return e(i)
                }, 1); else switch (e && this.onComplete.once(e), this._setFlag(t.STATUS_FLAGS.LOADING, !0), this.onStart.dispatch(this), !1 !== this.crossOrigin && "string" == typeof this.crossOrigin || (this.crossOrigin = this._determineCrossOrigin(this.url)), this.loadType) {
                    case t.LOAD_TYPE.IMAGE:
                        this.type = t.TYPE.IMAGE, this._loadElement("image");
                        break;
                    case t.LOAD_TYPE.AUDIO:
                        this.type = t.TYPE.AUDIO, this._loadSourceElement("audio");
                        break;
                    case t.LOAD_TYPE.VIDEO:
                        this.type = t.TYPE.VIDEO, this._loadSourceElement("video");
                        break;
                    case t.LOAD_TYPE.XHR:
                    default:
                        s && this.crossOrigin ? this._loadXdr() : this._loadXhr()
                }
            }, t.prototype._hasFlag = function (t) {
                return 0 != (this._flags & t)
            }, t.prototype._setFlag = function (t, e) {
                this._flags = e ? this._flags | t : this._flags & ~t
            }, t.prototype._clearEvents = function () {
                clearTimeout(this._elementTimer), this.data && this.data.removeEventListener && (this.data.removeEventListener("error", this._boundOnError, !1), this.data.removeEventListener("load", this._boundComplete, !1), this.data.removeEventListener("progress", this._boundOnProgress, !1), this.data.removeEventListener("canplaythrough", this._boundComplete, !1)), this.xhr && (this.xhr.removeEventListener ? (this.xhr.removeEventListener("error", this._boundXhrOnError, !1), this.xhr.removeEventListener("timeout", this._boundXhrOnTimeout, !1), this.xhr.removeEventListener("abort", this._boundXhrOnAbort, !1), this.xhr.removeEventListener("progress", this._boundOnProgress, !1), this.xhr.removeEventListener("load", this._boundXhrOnLoad, !1)) : (this.xhr.onerror = null, this.xhr.ontimeout = null, this.xhr.onprogress = null, this.xhr.onload = null))
            }, t.prototype._finish = function () {
                if (this.isComplete) throw new Error("Complete called again for an already completed resource.");
                this._setFlag(t.STATUS_FLAGS.COMPLETE, !0), this._setFlag(t.STATUS_FLAGS.LOADING, !1), this.onComplete.dispatch(this)
            }, t.prototype._loadElement = function (t) {
                this.metadata.loadElement ? this.data = this.metadata.loadElement : "image" === t && void 0 !== window.Image ? this.data = new Image : this.data = document.createElement(t), this.crossOrigin && (this.data.crossOrigin = this.crossOrigin), this.metadata.skipSource || (this.data.src = this.url), this.data.addEventListener("error", this._boundOnError, !1), this.data.addEventListener("load", this._boundComplete, !1), this.data.addEventListener("progress", this._boundOnProgress, !1), this.timeout && (this._elementTimer = setTimeout(this._boundOnTimeout, this.timeout))
            }, t.prototype._loadSourceElement = function (t) {
                if (this.metadata.loadElement ? this.data = this.metadata.loadElement : "audio" === t && void 0 !== window.Audio ? this.data = new Audio : this.data = document.createElement(t), null !== this.data) {
                    if (this.crossOrigin && (this.data.crossOrigin = this.crossOrigin), !this.metadata.skipSource) if (navigator.isCocoonJS) this.data.src = Array.isArray(this.url) ? this.url[0] : this.url; else if (Array.isArray(this.url)) for (var e = this.metadata.mimeType, i = 0; i < this.url.length; ++i) this.data.appendChild(this._createSource(t, this.url[i], Array.isArray(e) ? e[i] : e)); else {
                        var r = this.metadata.mimeType;
                        this.data.appendChild(this._createSource(t, this.url, Array.isArray(r) ? r[0] : r))
                    }
                    this.data.addEventListener("error", this._boundOnError, !1), this.data.addEventListener("load", this._boundComplete, !1), this.data.addEventListener("progress", this._boundOnProgress, !1), this.data.addEventListener("canplaythrough", this._boundComplete, !1), this.data.load(), this.timeout && (this._elementTimer = setTimeout(this._boundOnTimeout, this.timeout))
                } else this.abort("Unsupported element: " + t)
            }, t.prototype._loadXhr = function () {
                "string" != typeof this.xhrType && (this.xhrType = this._determineXhrType());
                var e = this.xhr = new XMLHttpRequest;
                e.open("GET", this.url, !0), e.timeout = this.timeout, this.xhrType === t.XHR_RESPONSE_TYPE.JSON || this.xhrType === t.XHR_RESPONSE_TYPE.DOCUMENT ? e.responseType = t.XHR_RESPONSE_TYPE.TEXT : e.responseType = this.xhrType, e.addEventListener("error", this._boundXhrOnError, !1), e.addEventListener("timeout", this._boundXhrOnTimeout, !1), e.addEventListener("abort", this._boundXhrOnAbort, !1), e.addEventListener("progress", this._boundOnProgress, !1), e.addEventListener("load", this._boundXhrOnLoad, !1), e.send()
            }, t.prototype._loadXdr = function () {
                "string" != typeof this.xhrType && (this.xhrType = this._determineXhrType());
                var t = this.xhr = new XDomainRequest;
                t.timeout = this.timeout || 5e3, t.onerror = this._boundXhrOnError, t.ontimeout = this._boundXhrOnTimeout, t.onprogress = this._boundOnProgress, t.onload = this._boundXhrOnLoad, t.open("GET", this.url, !0), setTimeout(function () {
                    return t.send()
                }, 1)
            }, t.prototype._createSource = function (t, e, i) {
                i || (i = t + "/" + this._getExtension(e));
                var r = document.createElement("source");
                return r.src = e, r.type = i, r
            }, t.prototype._onError = function (t) {
                this.abort("Failed to load element using: " + t.target.nodeName)
            }, t.prototype._onProgress = function (t) {
                t && t.lengthComputable && this.onProgress.dispatch(this, t.loaded / t.total)
            }, t.prototype._onTimeout = function () {
                this.abort("Load timed out.")
            }, t.prototype._xhrOnError = function () {
                var t = this.xhr;
                this.abort(c(t) + " Request failed. Status: " + t.status + ', text: "' + t.statusText + '"')
            }, t.prototype._xhrOnTimeout = function () {
                var t = this.xhr;
                this.abort(c(t) + " Request timed out.")
            }, t.prototype._xhrOnAbort = function () {
                var t = this.xhr;
                this.abort(c(t) + " Request was aborted by the user.")
            }, t.prototype._xhrOnLoad = function () {
                var e = this.xhr, i = "", r = void 0 === e.status ? 200 : e.status;
                if ("" !== e.responseType && "text" !== e.responseType && void 0 !== e.responseType || (i = e.responseText), 0 === r && (i.length > 0 || e.responseType === t.XHR_RESPONSE_TYPE.BUFFER) ? r = 200 : 1223 === r && (r = 204), 2 === (r / 100 | 0)) {
                    if (this.xhrType === t.XHR_RESPONSE_TYPE.TEXT) this.data = i, this.type = t.TYPE.TEXT; else if (this.xhrType === t.XHR_RESPONSE_TYPE.JSON) try {
                        this.data = JSON.parse(i), this.type = t.TYPE.JSON
                    } catch (t) {
                        return void this.abort("Error trying to parse loaded json: " + t)
                    } else if (this.xhrType === t.XHR_RESPONSE_TYPE.DOCUMENT) try {
                        if (window.DOMParser) {
                            var n = new DOMParser;
                            this.data = n.parseFromString(i, "text/xml")
                        } else {
                            var o = document.createElement("div");
                            o.innerHTML = i, this.data = o
                        }
                        this.type = t.TYPE.XML
                    } catch (t) {
                        return void this.abort("Error trying to parse loaded xml: " + t)
                    } else this.data = e.response || i;
                    this.complete()
                } else this.abort("[" + e.status + "] " + e.statusText + ": " + e.responseURL)
            }, t.prototype._determineCrossOrigin = function (t, e) {
                if (0 === t.indexOf("data:")) return "";
                if (window.origin !== window.location.origin) return "anonymous";
                e = e || window.location, a || (a = document.createElement("a")), a.href = t;
                var i = !(t = (0, r.default)(a.href, {strictMode: !0})).port && "" === e.port || t.port === e.port,
                    n = t.protocol ? t.protocol + ":" : "";
                return t.host === e.hostname && i && n === e.protocol ? "" : "anonymous"
            }, t.prototype._determineXhrType = function () {
                return t._xhrTypeMap[this.extension] || t.XHR_RESPONSE_TYPE.TEXT
            }, t.prototype._determineLoadType = function () {
                return t._loadTypeMap[this.extension] || t.LOAD_TYPE.XHR
            }, t.prototype._getExtension = function () {
                var t = this.url, e = "";
                if (this.isDataUrl) {
                    var i = t.indexOf("/");
                    e = t.substring(i + 1, t.indexOf(";", i))
                } else {
                    var r = t.indexOf("?"), n = t.indexOf("#"),
                        o = Math.min(r > -1 ? r : t.length, n > -1 ? n : t.length);
                    e = (t = t.substring(0, o)).substring(t.lastIndexOf(".") + 1)
                }
                return e.toLowerCase()
            }, t.prototype._getMimeFromXhrType = function (e) {
                switch (e) {
                    case t.XHR_RESPONSE_TYPE.BUFFER:
                        return "application/octet-binary";
                    case t.XHR_RESPONSE_TYPE.BLOB:
                        return "application/blob";
                    case t.XHR_RESPONSE_TYPE.DOCUMENT:
                        return "application/xml";
                    case t.XHR_RESPONSE_TYPE.JSON:
                        return "application/json";
                    case t.XHR_RESPONSE_TYPE.DEFAULT:
                    case t.XHR_RESPONSE_TYPE.TEXT:
                    default:
                        return "text/plain"
                }
            }, i(t, [{
                key: "isDataUrl", get: function () {
                    return this._hasFlag(t.STATUS_FLAGS.DATA_URL)
                }
            }, {
                key: "isComplete", get: function () {
                    return this._hasFlag(t.STATUS_FLAGS.COMPLETE)
                }
            }, {
                key: "isLoading", get: function () {
                    return this._hasFlag(t.STATUS_FLAGS.LOADING)
                }
            }]), t
        }();

        function l(t, e, i) {
            e && 0 === e.indexOf(".") && (e = e.substring(1)), e && (t[e] = i)
        }

        function c(t) {
            return t.toString().replace("object ", "")
        }

        u.STATUS_FLAGS = {NONE: 0, DATA_URL: 1, COMPLETE: 2, LOADING: 4}, u.TYPE = {
            UNKNOWN: 0,
            JSON: 1,
            XML: 2,
            IMAGE: 3,
            AUDIO: 4,
            VIDEO: 5,
            TEXT: 6
        }, u.LOAD_TYPE = {XHR: 1, IMAGE: 2, AUDIO: 3, VIDEO: 4}, u.XHR_RESPONSE_TYPE = {
            DEFAULT: "text",
            BUFFER: "arraybuffer",
            BLOB: "blob",
            DOCUMENT: "document",
            JSON: "json",
            TEXT: "text"
        }, u._loadTypeMap = {
            gif: u.LOAD_TYPE.IMAGE,
            png: u.LOAD_TYPE.IMAGE,
            bmp: u.LOAD_TYPE.IMAGE,
            jpg: u.LOAD_TYPE.IMAGE,
            jpeg: u.LOAD_TYPE.IMAGE,
            tif: u.LOAD_TYPE.IMAGE,
            tiff: u.LOAD_TYPE.IMAGE,
            webp: u.LOAD_TYPE.IMAGE,
            tga: u.LOAD_TYPE.IMAGE,
            svg: u.LOAD_TYPE.IMAGE,
            "svg+xml": u.LOAD_TYPE.IMAGE,
            mp3: u.LOAD_TYPE.AUDIO,
            ogg: u.LOAD_TYPE.AUDIO,
            wav: u.LOAD_TYPE.AUDIO,
            mp4: u.LOAD_TYPE.VIDEO,
            webm: u.LOAD_TYPE.VIDEO
        }, u._xhrTypeMap = {
            xhtml: u.XHR_RESPONSE_TYPE.DOCUMENT,
            html: u.XHR_RESPONSE_TYPE.DOCUMENT,
            htm: u.XHR_RESPONSE_TYPE.DOCUMENT,
            xml: u.XHR_RESPONSE_TYPE.DOCUMENT,
            tmx: u.XHR_RESPONSE_TYPE.DOCUMENT,
            svg: u.XHR_RESPONSE_TYPE.DOCUMENT,
            tsx: u.XHR_RESPONSE_TYPE.DOCUMENT,
            gif: u.XHR_RESPONSE_TYPE.BLOB,
            png: u.XHR_RESPONSE_TYPE.BLOB,
            bmp: u.XHR_RESPONSE_TYPE.BLOB,
            jpg: u.XHR_RESPONSE_TYPE.BLOB,
            jpeg: u.XHR_RESPONSE_TYPE.BLOB,
            tif: u.XHR_RESPONSE_TYPE.BLOB,
            tiff: u.XHR_RESPONSE_TYPE.BLOB,
            webp: u.XHR_RESPONSE_TYPE.BLOB,
            tga: u.XHR_RESPONSE_TYPE.BLOB,
            json: u.XHR_RESPONSE_TYPE.JSON,
            text: u.XHR_RESPONSE_TYPE.TEXT,
            txt: u.XHR_RESPONSE_TYPE.TEXT,
            ttf: u.XHR_RESPONSE_TYPE.BUFFER,
            otf: u.XHR_RESPONSE_TYPE.BUFFER
        }, u.EMPTY_GIF = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", t.exports.default = u
    });
    Ro(Uo);
    Uo.Resource;
    var Bo = Lo(function (t, e) {
        e.__esModule = !0, e.encodeBinary = r;
        var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

        function r(t) {
            for (var e = "", r = 0; r < t.length;) {
                for (var n = [0, 0, 0], o = [0, 0, 0, 0], s = 0; s < n.length; ++s) r < t.length ? n[s] = 255 & t.charCodeAt(r++) : n[s] = 0;
                switch (o[0] = n[0] >> 2, o[1] = (3 & n[0]) << 4 | n[1] >> 4, o[2] = (15 & n[1]) << 2 | n[2] >> 6, o[3] = 63 & n[2], r - (t.length - 1)) {
                    case 2:
                        o[3] = 64, o[2] = 64;
                        break;
                    case 1:
                        o[3] = 64
                }
                for (var a = 0; a < o.length; ++a) e += i.charAt(o[a])
            }
            return e
        }

        t.exports.default = r
    });
    Ro(Bo);
    Bo.encodeBinary;
    var ko = Lo(function (t, e) {
        e.__esModule = !0, e.blobMiddlewareFactory = function () {
            return function (t, e) {
                if (t.data) {
                    if (t.xhr && t.xhrType === Uo.Resource.XHR_RESPONSE_TYPE.BLOB) if (window.Blob && "string" != typeof t.data) {
                        if (0 === t.data.type.indexOf("image")) {
                            var r = i.createObjectURL(t.data);
                            return t.blob = t.data, t.data = new Image, t.data.src = r, t.type = Uo.Resource.TYPE.IMAGE, void (t.data.onload = function () {
                                i.revokeObjectURL(r), t.data.onload = null, e()
                            })
                        }
                    } else {
                        var n = t.xhr.getResponseHeader("content-type");
                        if (n && 0 === n.indexOf("image")) return t.data = new Image, t.data.src = "data:" + n + ";base64," + (0, Bo.encodeBinary)(t.xhr.responseText), t.type = Uo.Resource.TYPE.IMAGE, void (t.data.onload = function () {
                            t.data.onload = null, e()
                        })
                    }
                    e()
                } else e()
            }
        };
        var i = window.URL || window.webkitURL
    });
    Ro(ko);
    var Xo = ko.blobMiddlewareFactory, jo = function () {
    };
    jo.use = function (t, e) {
        t.data && t.type === Do.TYPE.IMAGE && (t.texture = _i.fromLoader(t.data, t.url, t.name)), e()
    };
    var Go = function (t) {
        function e(i, r) {
            var n = this;
            t.call(this, i, r), y.call(this);
            for (var o = 0; o < e._plugins.length; ++o) {
                var s = e._plugins[o], a = s.pre, h = s.use;
                a && this.pre(a), h && this.use(h)
            }
            this.onStart.add(function (t) {
                return n.emit("start", t)
            }), this.onProgress.add(function (t, e) {
                return n.emit("progress", t, e)
            }), this.onError.add(function (t, e, i) {
                return n.emit("error", t, e, i)
            }), this.onLoad.add(function (t, e) {
                return n.emit("load", t, e)
            }), this.onComplete.add(function (t, e) {
                return n.emit("complete", t, e)
            }), this._protected = !1
        }

        t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
        var i = {shared: {configurable: !0}};
        return e.prototype.destroy = function () {
            this._protected || (this.removeAllListeners(), this.reset())
        }, i.shared.get = function () {
            var t = e._shared;
            return t || ((t = new e)._protected = !0, e._shared = t), t
        }, Object.defineProperties(e, i), e
    }(Oo);
    Object.assign(Go.prototype, y.prototype), Go._plugins = [], Go.registerPlugin = function (t) {
        return Go._plugins.push(t), t.add && t.add(), Go
    }, Go.registerPlugin({use: Xo()}), Go.registerPlugin(jo);
    var Ho = function () {
    };
    Ho.init = function (t) {
        t = Object.assign({sharedLoader: !1}, t), this.loader = t.sharedLoader ? Go.shared : new Go
    }, Ho.destroy = function () {
        this.loader && (this.loader.destroy(), this.loader = null)
    };
    var Yo = Do, zo = function (t) {
        function e(e, i, r, n) {
            void 0 === e && (e = 1500), void 0 === r && (r = 16384), void 0 === n && (n = !1), t.call(this);
            r > 16384 && (r = 16384), r > e && (r = e), this._properties = [!1, !0, !1, !1, !1], this._maxSize = e, this._batchSize = r, this._buffers = null, this._bufferUpdateIDs = [], this._updateID = 0, this.interactiveChildren = !1, this.blendMode = _t.NORMAL, this.autoResize = n, this.roundPixels = !0, this.baseTexture = null, this.setProperties(i), this._tint = 0, this.tintRgb = new Float32Array(4), this.tint = 16777215
        }

        t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
        var i = {tint: {configurable: !0}};
        return e.prototype.setProperties = function (t) {
            t && (this._properties[0] = "vertices" in t || "scale" in t ? !!t.vertices || !!t.scale : this._properties[0], this._properties[1] = "position" in t ? !!t.position : this._properties[1], this._properties[2] = "rotation" in t ? !!t.rotation : this._properties[2], this._properties[3] = "uvs" in t ? !!t.uvs : this._properties[3], this._properties[4] = "tint" in t || "alpha" in t ? !!t.tint || !!t.alpha : this._properties[4])
        }, e.prototype.updateTransform = function () {
            this.displayObjectUpdateTransform()
        }, i.tint.get = function () {
            return this._tint
        }, i.tint.set = function (t) {
            this._tint = t, Lt(t, this.tintRgb)
        }, e.prototype.render = function (t) {
            var e = this;
            this.visible && !(this.worldAlpha <= 0) && this.children.length && this.renderable && (this.baseTexture || (this.baseTexture = this.children[0]._texture.baseTexture, this.baseTexture.valid || this.baseTexture.once("update", function () {
                return e.onChildrenChange(0)
            })), t.batch.setObjectRenderer(t.plugins.particle), t.plugins.particle.render(this))
        }, e.prototype.onChildrenChange = function (t) {
            for (var e = Math.floor(t / this._batchSize); this._bufferUpdateIDs.length < e;) this._bufferUpdateIDs.push(0);
            this._bufferUpdateIDs[e] = ++this._updateID
        }, e.prototype.dispose = function () {
            if (this._buffers) {
                for (var t = 0; t < this._buffers.length; ++t) this._buffers[t].destroy();
                this._buffers = null
            }
        }, e.prototype.destroy = function (e) {
            t.prototype.destroy.call(this, e), this.dispose(), this._properties = null, this._buffers = null, this._bufferUpdateIDs = null
        }, Object.defineProperties(e.prototype, i), e
    }(ke), Vo = function (t, e, i) {
        this.geometry = new Ci, this.indexBuffer = null, this.size = i, this.dynamicProperties = [], this.staticProperties = [];
        for (var r = 0; r < t.length; ++r) {
            var n = t[r];
            n = {
                attributeName: n.attributeName,
                size: n.size,
                uploadFunction: n.uploadFunction,
                type: n.type || Et.FLOAT,
                offset: n.offset
            }, e[r] ? this.dynamicProperties.push(n) : this.staticProperties.push(n)
        }
        this.staticStride = 0, this.staticBuffer = null, this.staticData = null, this.staticDataUint32 = null, this.dynamicStride = 0, this.dynamicBuffer = null, this.dynamicData = null, this.dynamicDataUint32 = null, this._updateID = 0, this.initBuffers()
    };
    Vo.prototype.initBuffers = function () {
        var t = this.geometry, e = 0;
        this.indexBuffer = new wi(Gt(this.size), !0, !0), t.addIndex(this.indexBuffer), this.dynamicStride = 0;
        for (var i = 0; i < this.dynamicProperties.length; ++i) {
            var r = this.dynamicProperties[i];
            r.offset = e, e += r.size, this.dynamicStride += r.size
        }
        var n = new ArrayBuffer(this.size * this.dynamicStride * 4 * 4);
        this.dynamicData = new Float32Array(n), this.dynamicDataUint32 = new Uint32Array(n), this.dynamicBuffer = new wi(this.dynamicData, !1, !1);
        var o = 0;
        this.staticStride = 0;
        for (var s = 0; s < this.staticProperties.length; ++s) {
            var a = this.staticProperties[s];
            a.offset = o, o += a.size, this.staticStride += a.size
        }
        var h = new ArrayBuffer(this.size * this.staticStride * 4 * 4);
        this.staticData = new Float32Array(h), this.staticDataUint32 = new Uint32Array(h), this.staticBuffer = new wi(this.staticData, !0, !1);
        for (var u = 0; u < this.dynamicProperties.length; ++u) {
            var l = this.dynamicProperties[u];
            t.addAttribute(l.attributeName, this.dynamicBuffer, 0, l.type === Et.UNSIGNED_BYTE, l.type, 4 * this.dynamicStride, 4 * l.offset)
        }
        for (var c = 0; c < this.staticProperties.length; ++c) {
            var d = this.staticProperties[c];
            t.addAttribute(d.attributeName, this.staticBuffer, 0, d.type === Et.UNSIGNED_BYTE, d.type, 4 * this.staticStride, 4 * d.offset)
        }
    }, Vo.prototype.uploadDynamic = function (t, e, i) {
        for (var r = 0; r < this.dynamicProperties.length; r++) {
            var n = this.dynamicProperties[r];
            n.uploadFunction(t, e, i, n.type === Et.UNSIGNED_BYTE ? this.dynamicDataUint32 : this.dynamicData, this.dynamicStride, n.offset)
        }
        this.dynamicBuffer._updateID++
    }, Vo.prototype.uploadStatic = function (t, e, i) {
        for (var r = 0; r < this.staticProperties.length; r++) {
            var n = this.staticProperties[r];
            n.uploadFunction(t, e, i, n.type === Et.UNSIGNED_BYTE ? this.staticDataUint32 : this.staticData, this.staticStride, n.offset)
        }
        this.staticBuffer._updateID++
    }, Vo.prototype.destroy = function () {
        this.indexBuffer = null, this.dynamicProperties = null, this.dynamicBuffer = null, this.dynamicData = null, this.dynamicDataUint32 = null, this.staticProperties = null, this.staticBuffer = null, this.staticData = null, this.staticDataUint32 = null, this.geometry.destroy()
    };
    var Wo = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nattribute vec2 aPositionCoord;\nattribute float aRotation;\n\nuniform mat3 translationMatrix;\nuniform vec4 uColor;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nvoid main(void){\n    float x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);\n    float y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);\n\n    vec2 v = vec2(x, y);\n    v = v + aPositionCoord;\n\n    gl_Position = vec4((translationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vColor = aColor * uColor;\n}\n",
        qo = "varying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n    vec4 color = texture2D(uSampler, vTextureCoord) * vColor;\n    gl_FragColor = color;\n}",
        Zo = function (t) {
            function e(e) {
                t.call(this, e), this.shader = null, this.properties = null, this.tempMatrix = new me, this.properties = [{
                    attributeName: "aVertexPosition",
                    size: 2,
                    uploadFunction: this.uploadVertices,
                    offset: 0
                }, {
                    attributeName: "aPositionCoord",
                    size: 2,
                    uploadFunction: this.uploadPosition,
                    offset: 0
                }, {
                    attributeName: "aRotation",
                    size: 1,
                    uploadFunction: this.uploadRotation,
                    offset: 0
                }, {
                    attributeName: "aTextureCoord",
                    size: 2,
                    uploadFunction: this.uploadUvs,
                    offset: 0
                }, {
                    attributeName: "aColor",
                    size: 1,
                    type: Et.UNSIGNED_BYTE,
                    uploadFunction: this.uploadTint,
                    offset: 0
                }], this.shader = fr.from(Wo, qo, {})
            }

            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.render = function (t) {
                var e = t.children, i = t._maxSize, r = t._batchSize, n = this.renderer, o = e.length;
                if (0 !== o) {
                    o > i && (o = i);
                    var s = t._buffers;
                    s || (s = t._buffers = this.generateBuffers(t));
                    var a = e[0]._texture.baseTexture;
                    this.renderer.state.setBlendMode(Bt(t.blendMode, a.premultiplyAlpha));
                    var h = n.gl, u = t.worldTransform.copyTo(this.tempMatrix);
                    u.prepend(n.globalUniforms.uniforms.projectionMatrix), this.shader.uniforms.translationMatrix = u.toArray(!0), this.shader.uniforms.uColor = kt(t.tintRgb, t.worldAlpha, this.shader.uniforms.uColor, a.premultiplyAlpha), this.shader.uniforms.uSampler = a, this.renderer.shader.bind(this.shader);
                    for (var l = !1, c = 0, d = 0; c < o; c += r, d += 1) {
                        var p = o - c;
                        if (p > r && (p = r), d >= s.length) {
                            if (!t.autoResize) break;
                            s.push(this._generateOneMoreBuffer(t))
                        }
                        var f = s[d];
                        f.uploadDynamic(e, c, p);
                        var v = t._bufferUpdateIDs[d] || 0;
                        (l = l || f._updateID < v) && (f._updateID = t._updateID, f.uploadStatic(e, c, p)), n.geometry.bind(f.geometry), h.drawElements(h.TRIANGLES, 6 * p, h.UNSIGNED_SHORT, 0)
                    }
                }
            }, e.prototype.generateBuffers = function (t) {
                for (var e = [], i = t._maxSize, r = t._batchSize, n = t._properties, o = 0; o < i; o += r) e.push(new Vo(this.properties, n, r));
                return e
            }, e.prototype._generateOneMoreBuffer = function (t) {
                var e = t._batchSize, i = t._properties;
                return new Vo(this.properties, i, e)
            }, e.prototype.uploadVertices = function (t, e, i, r, n, o) {
                for (var s = 0, a = 0, h = 0, u = 0, l = 0; l < i; ++l) {
                    var c = t[e + l], d = c._texture, p = c.scale.x, f = c.scale.y, v = d.trim, g = d.orig;
                    v ? (s = (a = v.x - c.anchor.x * g.width) + v.width, h = (u = v.y - c.anchor.y * g.height) + v.height) : (s = g.width * (1 - c.anchor.x), a = g.width * -c.anchor.x, h = g.height * (1 - c.anchor.y), u = g.height * -c.anchor.y), r[o] = a * p, r[o + 1] = u * f, r[o + n] = s * p, r[o + n + 1] = u * f, r[o + 2 * n] = s * p, r[o + 2 * n + 1] = h * f, r[o + 3 * n] = a * p, r[o + 3 * n + 1] = h * f, o += 4 * n
                }
            }, e.prototype.uploadPosition = function (t, e, i, r, n, o) {
                for (var s = 0; s < i; s++) {
                    var a = t[e + s].position;
                    r[o] = a.x, r[o + 1] = a.y, r[o + n] = a.x, r[o + n + 1] = a.y, r[o + 2 * n] = a.x, r[o + 2 * n + 1] = a.y, r[o + 3 * n] = a.x, r[o + 3 * n + 1] = a.y, o += 4 * n
                }
            }, e.prototype.uploadRotation = function (t, e, i, r, n, o) {
                for (var s = 0; s < i; s++) {
                    var a = t[e + s].rotation;
                    r[o] = a, r[o + n] = a, r[o + 2 * n] = a, r[o + 3 * n] = a, o += 4 * n
                }
            }, e.prototype.uploadUvs = function (t, e, i, r, n, o) {
                for (var s = 0; s < i; ++s) {
                    var a = t[e + s]._texture._uvs;
                    a ? (r[o] = a.x0, r[o + 1] = a.y0, r[o + n] = a.x1, r[o + n + 1] = a.y1, r[o + 2 * n] = a.x2, r[o + 2 * n + 1] = a.y2, r[o + 3 * n] = a.x3, r[o + 3 * n + 1] = a.y3, o += 4 * n) : (r[o] = 0, r[o + 1] = 0, r[o + n] = 0, r[o + n + 1] = 0, r[o + 2 * n] = 0, r[o + 2 * n + 1] = 0, r[o + 3 * n] = 0, r[o + 3 * n + 1] = 0, o += 4 * n)
                }
            }, e.prototype.uploadTint = function (t, e, i, r, n, o) {
                for (var s = 0; s < i; ++s) {
                    var a = t[e + s], h = a._texture.baseTexture.premultiplyAlpha, u = a.alpha,
                        l = u < 1 && h ? Xt(a._tintRGB, u) : a._tintRGB + (255 * u << 24);
                    r[o] = l, r[o + n] = l, r[o + 2 * n] = l, r[o + 3 * n] = l, o += 4 * n
                }
            }, e.prototype.destroy = function () {
                t.prototype.destroy.call(this), this.shader && (this.shader.destroy(), this.shader = null), this.tempMatrix = null
            }, e
        }(Ui), Ko = function (t, e, i) {
            void 0 === i && (i = null), this.baseTexture = t, this.textures = {}, this.animations = {}, this.data = e, this.resolution = this._updateResolution(i || (this.baseTexture.resource ? this.baseTexture.resource.url : null)), this._frames = this.data.frames, this._frameKeys = Object.keys(this._frames), this._batchIndex = 0, this._callback = null
        }, Jo = {BATCH_SIZE: {configurable: !0}};
    Jo.BATCH_SIZE.get = function () {
        return 1e3
    }, Ko.prototype._updateResolution = function (t) {
        var e = this.data.meta.scale, i = se(t, null);
        return null === i && (i = void 0 !== e ? parseFloat(e) : 1), 1 !== i && this.baseTexture.setResolution(i), i
    }, Ko.prototype.parse = function (t) {
        this._batchIndex = 0, this._callback = t, this._frameKeys.length <= Ko.BATCH_SIZE ? (this._processFrames(0), this._processAnimations(), this._parseComplete()) : this._nextBatch()
    }, Ko.prototype._processFrames = function (t) {
        for (var e = t, i = Ko.BATCH_SIZE; e - t < i && e < this._frameKeys.length;) {
            var r = this._frameKeys[e], n = this._frames[r], o = n.frame;
            if (o) {
                var s = null, a = null, h = !1 !== n.trimmed && n.sourceSize ? n.sourceSize : n.frame,
                    u = new Oe(0, 0, Math.floor(h.w) / this.resolution, Math.floor(h.h) / this.resolution);
                s = n.rotated ? new Oe(Math.floor(o.x) / this.resolution, Math.floor(o.y) / this.resolution, Math.floor(o.h) / this.resolution, Math.floor(o.w) / this.resolution) : new Oe(Math.floor(o.x) / this.resolution, Math.floor(o.y) / this.resolution, Math.floor(o.w) / this.resolution, Math.floor(o.h) / this.resolution), !1 !== n.trimmed && n.spriteSourceSize && (a = new Oe(Math.floor(n.spriteSourceSize.x) / this.resolution, Math.floor(n.spriteSourceSize.y) / this.resolution, Math.floor(o.w) / this.resolution, Math.floor(o.h) / this.resolution)), this.textures[r] = new _i(this.baseTexture, s, u, a, n.rotated ? 2 : 0, n.anchor), _i.addToCache(this.textures[r], r)
            }
            e++
        }
    }, Ko.prototype._processAnimations = function () {
        var t = this.data.animations || {};
        for (var e in t) {
            this.animations[e] = [];
            for (var i = 0; i < t[e].length; i++) {
                var r = t[e][i];
                this.animations[e].push(this.textures[r])
            }
        }
    }, Ko.prototype._parseComplete = function () {
        var t = this._callback;
        this._callback = null, this._batchIndex = 0, t.call(this, this.textures)
    }, Ko.prototype._nextBatch = function () {
        var t = this;
        this._processFrames(this._batchIndex * Ko.BATCH_SIZE), this._batchIndex++, setTimeout(function () {
            t._batchIndex * Ko.BATCH_SIZE < t._frameKeys.length ? t._nextBatch() : (t._processAnimations(), t._parseComplete())
        }, 0)
    }, Ko.prototype.destroy = function (t) {
        for (var e in void 0 === t && (t = !1), this.textures) this.textures[e].destroy();
        this._frames = null, this._frameKeys = null, this.data = null, this.textures = null, t && this.baseTexture.destroy(), this.baseTexture = null
    }, Object.defineProperties(Ko, Jo);
    var Qo = function () {
    };
    Qo.use = function (t, e) {
        var i = t.name + "_image";
        if (t.data && t.type === Yo.TYPE.JSON && t.data.frames && !this.resources[i]) {
            var r = {crossOrigin: t.crossOrigin, metadata: t.metadata.imageMetadata, parentResource: t},
                n = Qo.getResourcePath(t, this.baseUrl);
            this.add(i, n, r, function (i) {
                if (i.error) e(i.error); else {
                    var r = new Ko(i.texture.baseTexture, t.data, t.url);
                    r.parse(function () {
                        t.spritesheet = r, t.textures = r.textures, e()
                    })
                }
            })
        } else e()
    }, Qo.getResourcePath = function (t, e) {
        return t.isDataUrl ? t.data.meta.image : gt.resolve(t.url.replace(e, ""), t.data.meta.image)
    };
    var $o = new le, ts = function (t) {
            function e(e, i, r) {
                void 0 === i && (i = 100), void 0 === r && (r = 100), t.call(this, e), this.tileTransform = new Ie, this._width = i, this._height = r, this._canvasPattern = null, this.uvMatrix = e.uvMatrix || new Tr(e), this.pluginName = "tilingSprite", this.uvRespectAnchor = !1
            }

            t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
            var i = {
                clampMargin: {configurable: !0},
                tileScale: {configurable: !0},
                tilePosition: {configurable: !0},
                width: {configurable: !0},
                height: {configurable: !0}
            };
            return i.clampMargin.get = function () {
                return this.uvMatrix.clampMargin
            }, i.clampMargin.set = function (t) {
                this.uvMatrix.clampMargin = t, this.uvMatrix.update(!0)
            }, i.tileScale.get = function () {
                return this.tileTransform.scale
            }, i.tileScale.set = function (t) {
                this.tileTransform.scale.copyFrom(t)
            }, i.tilePosition.get = function () {
                return this.tileTransform.position
            }, i.tilePosition.set = function (t) {
                this.tileTransform.position.copyFrom(t)
            }, e.prototype._onTextureUpdate = function () {
                this.uvMatrix && (this.uvMatrix.texture = this._texture), this.cachedTint = 16777215
            }, e.prototype._render = function (t) {
                var e = this._texture;
                e && e.valid && (this.tileTransform.updateLocalTransform(), this.uvMatrix.update(), t.batch.setObjectRenderer(t.plugins[this.pluginName]), t.plugins[this.pluginName].render(this))
            }, e.prototype._calculateBounds = function () {
                var t = this._width * -this._anchor._x, e = this._height * -this._anchor._y,
                    i = this._width * (1 - this._anchor._x), r = this._height * (1 - this._anchor._y);
                this._bounds.addFrame(this.transform, t, e, i, r)
            }, e.prototype.getLocalBounds = function (e) {
                return 0 === this.children.length ? (this._bounds.minX = this._width * -this._anchor._x, this._bounds.minY = this._height * -this._anchor._y, this._bounds.maxX = this._width * (1 - this._anchor._x), this._bounds.maxY = this._height * (1 - this._anchor._y), e || (this._localBoundsRect || (this._localBoundsRect = new Oe), e = this._localBoundsRect), this._bounds.getRectangle(e)) : t.prototype.getLocalBounds.call(this, e)
            }, e.prototype.containsPoint = function (t) {
                this.worldTransform.applyInverse(t, $o);
                var e = this._width, i = this._height, r = -e * this.anchor._x;
                if ($o.x >= r && $o.x < r + e) {
                    var n = -i * this.anchor._y;
                    if ($o.y >= n && $o.y < n + i) return !0
                }
                return !1
            }, e.prototype.destroy = function (e) {
                t.prototype.destroy.call(this, e), this.tileTransform = null, this.uvMatrix = null
            }, e.from = function (t, i, r) {
                return new e(_i.from(t), i, r)
            }, e.fromFrame = function (t, i, r) {
                var n = Jt[t];
                if (!n) throw new Error('The frameId "' + t + '" does not exist in the texture cache ' + this);
                return new e(n, i, r)
            }, e.fromImage = function (t, i, r, n) {
                return n && "object" != typeof n && (n = {
                    scaleMode: arguments[4],
                    resourceOptions: {crossorigin: arguments[3]}
                }), new e(_i.from(t, n), i, r)
            }, i.width.get = function () {
                return this._width
            }, i.width.set = function (t) {
                this._width = t
            }, i.height.get = function () {
                return this._height
            }, i.height.set = function (t) {
                this._height = t
            }, Object.defineProperties(e.prototype, i), e
        }(Hn),
        es = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTransform;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;\n}\n",
        is = "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\nuniform mat3 uMapCoord;\nuniform vec4 uClampFrame;\nuniform vec2 uClampOffset;\n\nvoid main(void)\n{\n    vec2 coord = mod(vTextureCoord - uClampOffset, vec2(1.0, 1.0)) + uClampOffset;\n    coord = (uMapCoord * vec3(coord, 1.0)).xy;\n    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);\n\n    vec4 sample = texture2D(uSampler, coord);\n    gl_FragColor = sample * uColor;\n}\n",
        rs = "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\n\nvoid main(void)\n{\n    vec4 sample = texture2D(uSampler, vTextureCoord);\n    gl_FragColor = sample * uColor;\n}\n",
        ns = new me, os = function (t) {
            function e(e) {
                t.call(this, e);
                var i = {globals: this.renderer.globalUniforms};
                this.shader = fr.from(es, is, i), this.simpleShader = fr.from(es, rs, i), this.quad = new Di
            }

            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.render = function (t) {
                var e = this.renderer, i = this.quad, r = i.vertices;
                r[0] = r[6] = t._width * -t.anchor.x, r[1] = r[3] = t._height * -t.anchor.y, r[2] = r[4] = t._width * (1 - t.anchor.x), r[5] = r[7] = t._height * (1 - t.anchor.y), t.uvRespectAnchor && ((r = i.uvs)[0] = r[6] = -t.anchor.x, r[1] = r[3] = -t.anchor.y, r[2] = r[4] = 1 - t.anchor.x, r[5] = r[7] = 1 - t.anchor.y), i.invalidate();
                var n = t._texture, o = n.baseTexture, s = t.tileTransform.localTransform, a = t.uvMatrix,
                    h = o.isPowerOfTwo && n.frame.width === o.width && n.frame.height === o.height;
                h && (o._glTextures[e.CONTEXT_UID] ? h = o.wrapMode !== St.CLAMP : o.wrapMode === St.CLAMP && (o.wrapMode = St.REPEAT));
                var u = h ? this.simpleShader : this.shader, l = n.width, c = n.height, d = t._width, p = t._height;
                ns.set(s.a * l / d, s.b * l / p, s.c * c / d, s.d * c / p, s.tx / d, s.ty / p), ns.invert(), h ? ns.prepend(a.mapCoord) : (u.uniforms.uMapCoord = a.mapCoord.toArray(!0), u.uniforms.uClampFrame = a.uClampFrame, u.uniforms.uClampOffset = a.uClampOffset), u.uniforms.uTransform = ns.toArray(!0), u.uniforms.uColor = jt(t.tint, t.worldAlpha, u.uniforms.uColor, o.premultiplyAlpha), u.uniforms.translationMatrix = t.transform.worldTransform.toArray(!0), u.uniforms.uSampler = n, e.shader.bind(u), e.geometry.bind(i), e.state.setBlendMode(Bt(t.blendMode, o.premultiplyAlpha)), e.geometry.draw(this.renderer.gl.TRIANGLES, 6, 0)
            }, e
        }(Ui), ss = function (t) {
            function e(e, i) {
                var r = this;
                void 0 === i && (i = {}), t.call(this), this._textWidth = 0, this._textHeight = 0, this._glyphs = [], this._font = {
                    tint: void 0 !== i.tint ? i.tint : 16777215,
                    align: i.align || "left",
                    name: null,
                    size: 0
                }, this.font = i.font, this._text = e, this._maxWidth = 0, this._maxLineHeight = 0, this._letterSpacing = 0, this._anchor = new ce(function () {
                    r.dirty = !0
                }, this, 0, 0), this.dirty = !1, this.roundPixels = m.ROUND_PIXELS, this.updateText()
            }

            t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
            var i = {
                tint: {configurable: !0},
                align: {configurable: !0},
                anchor: {configurable: !0},
                font: {configurable: !0},
                text: {configurable: !0},
                maxWidth: {configurable: !0},
                maxLineHeight: {configurable: !0},
                textWidth: {configurable: !0},
                letterSpacing: {configurable: !0},
                textHeight: {configurable: !0}
            };
            return e.prototype.updateText = function () {
                for (var t = e.fonts[this._font.name], i = this._font.size / t.size, r = new le, n = [], o = [], s = this._text.replace(/(?:\r\n|\r)/g, "\n") || " ", a = s.length, h = this._maxWidth * t.size / this._font.size, u = null, l = 0, c = 0, d = 0, p = -1, f = 0, v = 0, g = 0, m = 0; m < a; m++) {
                    var y = s.charCodeAt(m), _ = s.charAt(m);
                    if (/(?:\s)/.test(_) && (p = m, f = l), "\r" !== _ && "\n" !== _) {
                        var x = t.chars[y];
                        x && (u && x.kerning[u] && (r.x += x.kerning[u]), n.push({
                            texture: x.texture,
                            line: d,
                            charCode: y,
                            position: new le(r.x + x.xOffset + this._letterSpacing / 2, r.y + x.yOffset)
                        }), r.x += x.xAdvance + this._letterSpacing, l = r.x, g = Math.max(g, x.yOffset + x.texture.height), u = y, -1 !== p && h > 0 && r.x > h && (Ht(n, 1 + p - ++v, 1 + m - p), m = p, p = -1, o.push(f), c = Math.max(c, f), d++, r.x = 0, r.y += t.lineHeight, u = null))
                    } else o.push(l), c = Math.max(c, l), ++d, ++v, r.x = 0, r.y += t.lineHeight, u = null
                }
                var b = s.charAt(s.length - 1);
                "\r" !== b && "\n" !== b && (/(?:\s)/.test(b) && (l = f), o.push(l), c = Math.max(c, l));
                for (var T = [], E = 0; E <= d; E++) {
                    var w = 0;
                    "right" === this._font.align ? w = c - o[E] : "center" === this._font.align && (w = (c - o[E]) / 2), T.push(w)
                }
                for (var S = n.length, P = this.tint, I = 0; I < S; I++) {
                    var A = this._glyphs[I];
                    A ? A.texture = n[I].texture : ((A = new Hn(n[I].texture)).roundPixels = this.roundPixels, this._glyphs.push(A)), A.position.x = (n[I].position.x + T[n[I].line]) * i, A.position.y = n[I].position.y * i, A.scale.x = A.scale.y = i, A.tint = P, A.parent || this.addChild(A)
                }
                for (var O = S; O < this._glyphs.length; ++O) this.removeChild(this._glyphs[O]);
                if (this._textWidth = c * i, this._textHeight = (r.y + t.lineHeight) * i, 0 !== this.anchor.x || 0 !== this.anchor.y) for (var C = 0; C < S; C++) this._glyphs[C].x -= this._textWidth * this.anchor.x, this._glyphs[C].y -= this._textHeight * this.anchor.y;
                this._maxLineHeight = g * i
            }, e.prototype.updateTransform = function () {
                this.validate(), this.containerUpdateTransform()
            }, e.prototype.getLocalBounds = function () {
                return this.validate(), t.prototype.getLocalBounds.call(this)
            }, e.prototype.validate = function () {
                this.dirty && (this.updateText(), this.dirty = !1)
            }, i.tint.get = function () {
                return this._font.tint
            }, i.tint.set = function (t) {
                this._font.tint = "number" == typeof t && t >= 0 ? t : 16777215, this.dirty = !0
            }, i.align.get = function () {
                return this._font.align
            }, i.align.set = function (t) {
                this._font.align = t || "left", this.dirty = !0
            }, i.anchor.get = function () {
                return this._anchor
            }, i.anchor.set = function (t) {
                "number" == typeof t ? this._anchor.set(t) : this._anchor.copyFrom(t)
            }, i.font.get = function () {
                return this._font
            }, i.font.set = function (t) {
                t && ("string" == typeof t ? (t = t.split(" "), this._font.name = 1 === t.length ? t[0] : t.slice(1).join(" "), this._font.size = t.length >= 2 ? parseInt(t[0], 10) : e.fonts[this._font.name].size) : (this._font.name = t.name, this._font.size = "number" == typeof t.size ? t.size : parseInt(t.size, 10)), this.dirty = !0)
            }, i.text.get = function () {
                return this._text
            }, i.text.set = function (t) {
                t = String(null == t ? "" : t), this._text !== t && (this._text = t, this.dirty = !0)
            }, i.maxWidth.get = function () {
                return this._maxWidth
            }, i.maxWidth.set = function (t) {
                this._maxWidth !== t && (this._maxWidth = t, this.dirty = !0)
            }, i.maxLineHeight.get = function () {
                return this.validate(), this._maxLineHeight
            }, i.textWidth.get = function () {
                return this.validate(), this._textWidth
            }, i.letterSpacing.get = function () {
                return this._letterSpacing
            }, i.letterSpacing.set = function (t) {
                this._letterSpacing !== t && (this._letterSpacing = t, this.dirty = !0)
            }, i.textHeight.get = function () {
                return this.validate(), this._textHeight
            }, e.registerFont = function (t, i) {
                var r = {}, n = t.getElementsByTagName("info")[0], o = t.getElementsByTagName("common")[0],
                    s = t.getElementsByTagName("page"), a = se(s[0].getAttribute("file"), m.RESOLUTION), h = {};
                r.font = n.getAttribute("face"), r.size = parseInt(n.getAttribute("size"), 10), r.lineHeight = parseInt(o.getAttribute("lineHeight"), 10) / a, r.chars = {}, i instanceof _i && (i = [i]);
                for (var u = 0; u < s.length; u++) {
                    var l = s[u].getAttribute("id"), c = s[u].getAttribute("file");
                    h[l] = i instanceof Array ? i[u] : i[c]
                }
                for (var d = t.getElementsByTagName("char"), p = 0; p < d.length; p++) {
                    var f = d[p], v = parseInt(f.getAttribute("id"), 10), g = f.getAttribute("page") || 0,
                        y = new Oe(parseInt(f.getAttribute("x"), 10) / a + h[g].frame.x / a, parseInt(f.getAttribute("y"), 10) / a + h[g].frame.y / a, parseInt(f.getAttribute("width"), 10) / a, parseInt(f.getAttribute("height"), 10) / a);
                    r.chars[v] = {
                        xOffset: parseInt(f.getAttribute("xoffset"), 10) / a,
                        yOffset: parseInt(f.getAttribute("yoffset"), 10) / a,
                        xAdvance: parseInt(f.getAttribute("xadvance"), 10) / a,
                        kerning: {},
                        texture: new _i(h[g].baseTexture, y),
                        page: g
                    }
                }
                for (var _ = t.getElementsByTagName("kerning"), x = 0; x < _.length; x++) {
                    var b = _[x], T = parseInt(b.getAttribute("first"), 10) / a,
                        E = parseInt(b.getAttribute("second"), 10) / a, w = parseInt(b.getAttribute("amount"), 10) / a;
                    r.chars[E] && (r.chars[E].kerning[T] = w)
                }
                return e.fonts[r.font] = r, r
            }, Object.defineProperties(e.prototype, i), e
        }(ke);
    ss.fonts = {};
    var as = function () {
    };
    as.parse = function (t, e) {
        t.bitmapFont = ss.registerFont(t.data, e)
    }, as.add = function () {
        Yo.setExtensionXhrType("fnt", Yo.XHR_RESPONSE_TYPE.DOCUMENT)
    }, as.dirname = function (t) {
        var e = t.replace(/\/$/, "").replace(/\/[^\/]*$/, "");
        return e === t ? "." : "" === e ? "/" : e
    }, as.use = function (t, e) {
        if (t.data && t.type === Yo.TYPE.XML) if (0 !== t.data.getElementsByTagName("page").length && 0 !== t.data.getElementsByTagName("info").length && null !== t.data.getElementsByTagName("info")[0].getAttribute("face")) {
            var i = t.isDataUrl ? "" : as.dirname(t.url);
            t.isDataUrl && ("." === i && (i = ""), this.baseUrl && i && "/" === this.baseUrl.charAt(this.baseUrl.length - 1) && (i += "/")), (i = i.replace(this.baseUrl, "")) && "/" !== i.charAt(i.length - 1) && (i += "/");
            for (var r = t.data.getElementsByTagName("page"), n = {}, o = function (i) {
                n[i.metadata.pageFile] = i.texture, Object.keys(n).length === r.length && (as.parse(t, n), e())
            }, s = 0; s < r.length; ++s) {
                var a = r[s].getAttribute("file"), h = i + a, u = !1;
                for (var l in this.resources) {
                    var c = this.resources[l];
                    if (c.url === h) {
                        c.metadata.pageFile = a, c.texture ? o(c) : c.onAfterMiddleware.add(o), u = !0;
                        break
                    }
                }
                if (!u) {
                    var d = {
                        crossOrigin: t.crossOrigin,
                        loadType: Yo.LOAD_TYPE.IMAGE,
                        metadata: Object.assign({pageFile: a}, t.metadata.imageMetadata),
                        parentResource: t
                    };
                    this.add(h, d, o)
                }
            }
        } else e(); else e()
    };
    var hs = "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float uAlpha;\n\nvoid main(void)\n{\n   gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;\n}\n",
        us = function (t) {
            function e(e) {
                void 0 === e && (e = 1), t.call(this, Wr, hs, {uAlpha: 1}), this.alpha = e
            }

            t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
            var i = {alpha: {configurable: !0}};
            return i.alpha.get = function () {
                return this.uniforms.uAlpha
            }, i.alpha.set = function (t) {
                this.uniforms.uAlpha = t
            }, Object.defineProperties(e.prototype, i), e
        }(yr),
        ls = "\n    attribute vec2 aVertexPosition;\n\n    uniform mat3 projectionMatrix;\n\n    uniform float strength;\n\n    varying vec2 vBlurTexCoords[%size%];\n\n    uniform vec4 inputSize;\n    uniform vec4 outputFrame;\n    \n    vec4 filterVertexPosition( void )\n    {\n        vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n    \n        return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n    }\n    \n    vec2 filterTextureCoord( void )\n    {\n        return aVertexPosition * (outputFrame.zw * inputSize.zw);\n    }\n\n    void main(void)\n    {\n        gl_Position = filterVertexPosition();\n\n        vec2 textureCoord = filterTextureCoord();\n        %blur%\n    }";
    var cs = {
            5: [.153388, .221461, .250301],
            7: [.071303, .131514, .189879, .214607],
            9: [.028532, .067234, .124009, .179044, .20236],
            11: [.0093, .028002, .065984, .121703, .175713, .198596],
            13: [.002406, .009255, .027867, .065666, .121117, .174868, .197641],
            15: [489e-6, .002403, .009246, .02784, .065602, .120999, .174697, .197448]
        },
        ds = ["varying vec2 vBlurTexCoords[%size%];", "uniform sampler2D uSampler;", "void main(void)", "{", "    gl_FragColor = vec4(0.0);", "    %blur%", "}"].join("\n");
    var ps = function (t) {
            function e(e, i, r, n, o) {
                var s = function (t, e) {
                    var i, r = Math.ceil(t / 2), n = ls, o = "";
                    i = e ? "vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * strength, 0.0);" : "vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * strength);";
                    for (var s = 0; s < t; s++) {
                        var a = i.replace("%index%", s);
                        o += a = a.replace("%sampleIndex%", s - (r - 1) + ".0"), o += "\n"
                    }
                    return n = (n = n.replace("%blur%", o)).replace("%size%", t)
                }(o = o || 5, e), a = function (t) {
                    for (var e, i = cs[t], r = i.length, n = ds, o = "", s = 0; s < t; s++) {
                        var a = "gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;".replace("%index%", s);
                        e = s, s >= r && (e = t - s - 1), o += a = a.replace("%value%", i[e]), o += "\n"
                    }
                    return n = (n = n.replace("%blur%", o)).replace("%size%", t)
                }(o);
                t.call(this, s, a), this.horizontal = e, this.resolution = n || m.RESOLUTION, this._quality = 0, this.quality = r || 4, this.blur = i || 8
            }

            t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
            var i = {blur: {configurable: !0}, quality: {configurable: !0}};
            return e.prototype.apply = function (t, e, i, r) {
                if (i ? this.horizontal ? this.uniforms.strength = 1 / i.width * (i.width / e.width) : this.uniforms.strength = 1 / i.height * (i.height / e.height) : this.horizontal ? this.uniforms.strength = 1 / t.renderer.width * (t.renderer.width / e.width) : this.uniforms.strength = 1 / t.renderer.height * (t.renderer.height / e.height), this.uniforms.strength *= this.strength, this.uniforms.strength /= this.passes, 1 === this.passes) t.applyFilter(this, e, i, r); else {
                    var n = t.getFilterTexture(), o = t.renderer, s = e, a = n;
                    this.state.blend = !1, t.applyFilter(this, s, a, !1);
                    for (var h = 1; h < this.passes - 1; h++) {
                        o.renderTexture.bind(s, s.filterFrame), this.uniforms.uSampler = a;
                        var u = a;
                        a = s, s = u, o.shader.bind(this), o.geometry.draw(5)
                    }
                    this.state.blend = !0, t.applyFilter(this, a, i, r), t.returnFilterTexture(n)
                }
            }, i.blur.get = function () {
                return this.strength
            }, i.blur.set = function (t) {
                this.padding = 1 + 2 * Math.abs(t), this.strength = t
            }, i.quality.get = function () {
                return this._quality
            }, i.quality.set = function (t) {
                this._quality = t, this.passes = t
            }, Object.defineProperties(e.prototype, i), e
        }(yr), fs = function (t) {
            function e(e, i, r, n) {
                t.call(this), this.blurXFilter = new ps(!0, e, i, r, n), this.blurYFilter = new ps(!1, e, i, r, n), this.resolution = r || m.RESOLUTION, this.quality = i || 4, this.blur = e || 8, this.repeatEdgePixels = !1
            }

            t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
            var i = {
                blur: {configurable: !0},
                quality: {configurable: !0},
                blurX: {configurable: !0},
                blurY: {configurable: !0},
                blendMode: {configurable: !0},
                repeatEdgePixels: {configurable: !0}
            };
            return e.prototype.apply = function (t, e, i, r) {
                var n = Math.abs(this.blurXFilter.strength), o = Math.abs(this.blurYFilter.strength);
                if (n && o) {
                    var s = t.getFilterTexture();
                    this.blurXFilter.apply(t, e, s, !0), this.blurYFilter.apply(t, s, i, r), t.returnFilterTexture(s)
                } else o ? this.blurYFilter.apply(t, e, i, r) : this.blurXFilter.apply(t, e, i, r)
            }, e.prototype.updatePadding = function () {
                this._repeatEdgePixels ? this.padding = 0 : this.padding = 2 * Math.max(Math.abs(this.blurXFilter.strength), Math.abs(this.blurYFilter.strength))
            }, i.blur.get = function () {
                return this.blurXFilter.blur
            }, i.blur.set = function (t) {
                this.blurXFilter.blur = this.blurYFilter.blur = t, this.updatePadding()
            }, i.quality.get = function () {
                return this.blurXFilter.quality
            }, i.quality.set = function (t) {
                this.blurXFilter.quality = this.blurYFilter.quality = t
            }, i.blurX.get = function () {
                return this.blurXFilter.blur
            }, i.blurX.set = function (t) {
                this.blurXFilter.blur = t, this.updatePadding()
            }, i.blurY.get = function () {
                return this.blurYFilter.blur
            }, i.blurY.set = function (t) {
                this.blurYFilter.blur = t, this.updatePadding()
            }, i.blendMode.get = function () {
                return this.blurYFilter.blendMode
            }, i.blendMode.set = function (t) {
                this.blurYFilter.blendMode = t
            }, i.repeatEdgePixels.get = function () {
                return this._repeatEdgePixels
            }, i.repeatEdgePixels.set = function (t) {
                this._repeatEdgePixels = t, this.updatePadding()
            }, Object.defineProperties(e.prototype, i), e
        }(yr),
        vs = "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float m[20];\nuniform float uAlpha;\n\nvoid main(void)\n{\n    vec4 c = texture2D(uSampler, vTextureCoord);\n\n    if (uAlpha == 0.0) {\n        gl_FragColor = c;\n        return;\n    }\n\n    // Un-premultiply alpha before applying the color matrix. See issue #3539.\n    if (c.a > 0.0) {\n      c.rgb /= c.a;\n    }\n\n    vec4 result;\n\n    result.r = (m[0] * c.r);\n        result.r += (m[1] * c.g);\n        result.r += (m[2] * c.b);\n        result.r += (m[3] * c.a);\n        result.r += m[4];\n\n    result.g = (m[5] * c.r);\n        result.g += (m[6] * c.g);\n        result.g += (m[7] * c.b);\n        result.g += (m[8] * c.a);\n        result.g += m[9];\n\n    result.b = (m[10] * c.r);\n       result.b += (m[11] * c.g);\n       result.b += (m[12] * c.b);\n       result.b += (m[13] * c.a);\n       result.b += m[14];\n\n    result.a = (m[15] * c.r);\n       result.a += (m[16] * c.g);\n       result.a += (m[17] * c.b);\n       result.a += (m[18] * c.a);\n       result.a += m[19];\n\n    vec3 rgb = mix(c.rgb, result.rgb, uAlpha);\n\n    // Premultiply alpha again.\n    rgb *= result.a;\n\n    gl_FragColor = vec4(rgb, result.a);\n}\n",
        gs = function (t) {
            function e() {
                var e = {m: new Float32Array([1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]), uAlpha: 1};
                t.call(this, qr, vs, e), this.alpha = 1
            }

            t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
            var i = {matrix: {configurable: !0}, alpha: {configurable: !0}};
            return e.prototype._loadMatrix = function (t, e) {
                void 0 === e && (e = !1);
                var i = t;
                e && (this._multiply(i, this.uniforms.m, t), i = this._colorMatrix(i)), this.uniforms.m = i
            }, e.prototype._multiply = function (t, e, i) {
                return t[0] = e[0] * i[0] + e[1] * i[5] + e[2] * i[10] + e[3] * i[15], t[1] = e[0] * i[1] + e[1] * i[6] + e[2] * i[11] + e[3] * i[16], t[2] = e[0] * i[2] + e[1] * i[7] + e[2] * i[12] + e[3] * i[17], t[3] = e[0] * i[3] + e[1] * i[8] + e[2] * i[13] + e[3] * i[18], t[4] = e[0] * i[4] + e[1] * i[9] + e[2] * i[14] + e[3] * i[19] + e[4], t[5] = e[5] * i[0] + e[6] * i[5] + e[7] * i[10] + e[8] * i[15], t[6] = e[5] * i[1] + e[6] * i[6] + e[7] * i[11] + e[8] * i[16], t[7] = e[5] * i[2] + e[6] * i[7] + e[7] * i[12] + e[8] * i[17], t[8] = e[5] * i[3] + e[6] * i[8] + e[7] * i[13] + e[8] * i[18], t[9] = e[5] * i[4] + e[6] * i[9] + e[7] * i[14] + e[8] * i[19] + e[9], t[10] = e[10] * i[0] + e[11] * i[5] + e[12] * i[10] + e[13] * i[15], t[11] = e[10] * i[1] + e[11] * i[6] + e[12] * i[11] + e[13] * i[16], t[12] = e[10] * i[2] + e[11] * i[7] + e[12] * i[12] + e[13] * i[17], t[13] = e[10] * i[3] + e[11] * i[8] + e[12] * i[13] + e[13] * i[18], t[14] = e[10] * i[4] + e[11] * i[9] + e[12] * i[14] + e[13] * i[19] + e[14], t[15] = e[15] * i[0] + e[16] * i[5] + e[17] * i[10] + e[18] * i[15], t[16] = e[15] * i[1] + e[16] * i[6] + e[17] * i[11] + e[18] * i[16], t[17] = e[15] * i[2] + e[16] * i[7] + e[17] * i[12] + e[18] * i[17], t[18] = e[15] * i[3] + e[16] * i[8] + e[17] * i[13] + e[18] * i[18], t[19] = e[15] * i[4] + e[16] * i[9] + e[17] * i[14] + e[18] * i[19] + e[19], t
            }, e.prototype._colorMatrix = function (t) {
                var e = new Float32Array(t);
                return e[4] /= 255, e[9] /= 255, e[14] /= 255, e[19] /= 255, e
            }, e.prototype.brightness = function (t, e) {
                var i = [t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(i, e)
            }, e.prototype.greyscale = function (t, e) {
                var i = [t, t, t, 0, 0, t, t, t, 0, 0, t, t, t, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(i, e)
            }, e.prototype.blackAndWhite = function (t) {
                this._loadMatrix([.3, .6, .1, 0, 0, .3, .6, .1, 0, 0, .3, .6, .1, 0, 0, 0, 0, 0, 1, 0], t)
            }, e.prototype.hue = function (t, e) {
                t = (t || 0) / 180 * Math.PI;
                var i = Math.cos(t), r = Math.sin(t), n = 1 / 3, o = (0, Math.sqrt)(n),
                    s = [i + (1 - i) * n, n * (1 - i) - o * r, n * (1 - i) + o * r, 0, 0, n * (1 - i) + o * r, i + n * (1 - i), n * (1 - i) - o * r, 0, 0, n * (1 - i) - o * r, n * (1 - i) + o * r, i + n * (1 - i), 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(s, e)
            }, e.prototype.contrast = function (t, e) {
                var i = (t || 0) + 1, r = -.5 * (i - 1),
                    n = [i, 0, 0, 0, r, 0, i, 0, 0, r, 0, 0, i, 0, r, 0, 0, 0, 1, 0];
                this._loadMatrix(n, e)
            }, e.prototype.saturate = function (t, e) {
                void 0 === t && (t = 0);
                var i = 2 * t / 3 + 1, r = -.5 * (i - 1),
                    n = [i, r, r, 0, 0, r, i, r, 0, 0, r, r, i, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(n, e)
            }, e.prototype.desaturate = function () {
                this.saturate(-1)
            }, e.prototype.negative = function (t) {
                this._loadMatrix([-1, 0, 0, 1, 0, 0, -1, 0, 1, 0, 0, 0, -1, 1, 0, 0, 0, 0, 1, 0], t)
            }, e.prototype.sepia = function (t) {
                this._loadMatrix([.393, .7689999, .18899999, 0, 0, .349, .6859999, .16799999, 0, 0, .272, .5339999, .13099999, 0, 0, 0, 0, 0, 1, 0], t)
            }, e.prototype.technicolor = function (t) {
                this._loadMatrix([1.9125277891456083, -.8545344976951645, -.09155508482755585, 0, 11.793603434377337, -.3087833385928097, 1.7658908555458428, -.10601743074722245, 0, -70.35205161461398, -.231103377548616, -.7501899197440212, 1.847597816108189, 0, 30.950940869491138, 0, 0, 0, 1, 0], t)
            }, e.prototype.polaroid = function (t) {
                this._loadMatrix([1.438, -.062, -.062, 0, 0, -.122, 1.378, -.122, 0, 0, -.016, -.016, 1.483, 0, 0, 0, 0, 0, 1, 0], t)
            }, e.prototype.toBGR = function (t) {
                this._loadMatrix([0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0], t)
            }, e.prototype.kodachrome = function (t) {
                this._loadMatrix([1.1285582396593525, -.3967382283601348, -.03992559172921793, 0, 63.72958762196502, -.16404339962244616, 1.0835251566291304, -.05498805115633132, 0, 24.732407896706203, -.16786010706155763, -.5603416277695248, 1.6014850761964943, 0, 35.62982807460946, 0, 0, 0, 1, 0], t)
            }, e.prototype.browni = function (t) {
                this._loadMatrix([.5997023498159715, .34553243048391263, -.2708298674538042, 0, 47.43192855600873, -.037703249837783157, .8609577587992641, .15059552388459913, 0, -36.96841498319127, .24113635128153335, -.07441037908422492, .44972182064877153, 0, -7.562075277591283, 0, 0, 0, 1, 0], t)
            }, e.prototype.vintage = function (t) {
                this._loadMatrix([.6279345635605994, .3202183420819367, -.03965408211312453, 0, 9.651285835294123, .02578397704808868, .6441188644374771, .03259127616149294, 0, 7.462829176470591, .0466055556782719, -.0851232987247891, .5241648018700465, 0, 5.159190588235296, 0, 0, 0, 1, 0], t)
            }, e.prototype.colorTone = function (t, e, i, r, n) {
                var o = ((i = i || 16770432) >> 16 & 255) / 255, s = (i >> 8 & 255) / 255, a = (255 & i) / 255,
                    h = ((r = r || 3375104) >> 16 & 255) / 255, u = (r >> 8 & 255) / 255, l = (255 & r) / 255,
                    c = [.3, .59, .11, 0, 0, o, s, a, t = t || .2, 0, h, u, l, e = e || .15, 0, o - h, s - u, a - l, 0, 0];
                this._loadMatrix(c, n)
            }, e.prototype.night = function (t, e) {
                var i = [-2 * (t = t || .1), -t, 0, 0, 0, -t, 0, t, 0, 0, 0, t, 2 * t, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(i, e)
            }, e.prototype.predator = function (t, e) {
                var i = [11.224130630493164 * t, -4.794486999511719 * t, -2.8746118545532227 * t, 0 * t, .40342438220977783 * t, -3.6330697536468506 * t, 9.193157196044922 * t, -2.951810836791992 * t, 0 * t, -1.316135048866272 * t, -3.2184197902679443 * t, -4.2375030517578125 * t, 7.476448059082031 * t, 0 * t, .8044459223747253 * t, 0, 0, 0, 1, 0];
                this._loadMatrix(i, e)
            }, e.prototype.lsd = function (t) {
                this._loadMatrix([2, -.4, .5, 0, 0, -.5, 2, -.4, 0, 0, -.4, -.5, 3, 0, 0, 0, 0, 0, 1, 0], t)
            }, e.prototype.reset = function () {
                this._loadMatrix([1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0], !1)
            }, i.matrix.get = function () {
                return this.uniforms.m
            }, i.matrix.set = function (t) {
                this.uniforms.m = t
            }, i.alpha.get = function () {
                return this.uniforms.uAlpha
            }, i.alpha.set = function (t) {
                this.uniforms.uAlpha = t
            }, Object.defineProperties(e.prototype, i), e
        }(yr);
    gs.prototype.grayscale = gs.prototype.greyscale;
    var ms = "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\nuniform mat3 filterMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vFilterCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n\tgl_Position = filterVertexPosition();\n\tvTextureCoord = filterTextureCoord();\n\tvFilterCoord = ( filterMatrix * vec3( vTextureCoord, 1.0)  ).xy;\n}\n",
        ys = "varying vec2 vFilterCoord;\nvarying vec2 vTextureCoord;\n\nuniform vec2 scale;\nuniform mat2 rotation;\nuniform sampler2D uSampler;\nuniform sampler2D mapSampler;\n\nuniform highp vec4 inputSize;\nuniform vec4 inputClamp;\n\nvoid main(void)\n{\n  vec4 map =  texture2D(mapSampler, vFilterCoord);\n\n  map -= 0.5;\n  map.xy = scale * inputSize.zw * (rotation * map.xy);\n\n  gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), inputClamp.xy, inputClamp.zw));\n}\n",
        _s = function (t) {
            function e(e, i) {
                var r = new me;
                e.renderable = !1, t.call(this, ms, ys, {
                    mapSampler: e._texture,
                    filterMatrix: r,
                    scale: {x: 1, y: 1},
                    rotation: new Float32Array([1, 0, 0, 1])
                }), this.maskSprite = e, this.maskMatrix = r, null == i && (i = 20), this.scale = new le(i, i)
            }

            t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
            var i = {map: {configurable: !0}};
            return e.prototype.apply = function (t, e, i, r) {
                this.uniforms.filterMatrix = t.calculateSpriteMatrix(this.maskMatrix, this.maskSprite), this.uniforms.scale.x = this.scale.x, this.uniforms.scale.y = this.scale.y;
                var n = this.maskSprite.transform.worldTransform, o = Math.sqrt(n.a * n.a + n.b * n.b),
                    s = Math.sqrt(n.c * n.c + n.d * n.d);
                0 !== o && 0 !== s && (this.uniforms.rotation[0] = n.a / o, this.uniforms.rotation[1] = n.b / o, this.uniforms.rotation[2] = n.c / s, this.uniforms.rotation[3] = n.d / s), t.applyFilter(this, e, i, r)
            }, i.map.get = function () {
                return this.uniforms.mapSampler
            }, i.map.set = function (t) {
                this.uniforms.mapSampler = t
            }, Object.defineProperties(e.prototype, i), e
        }(yr),
        xs = "\nattribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nvarying vec2 vFragCoord;\n\nuniform vec4 inputPixel;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvoid texcoords(vec2 fragCoord, vec2 inverseVP,\n               out vec2 v_rgbNW, out vec2 v_rgbNE,\n               out vec2 v_rgbSW, out vec2 v_rgbSE,\n               out vec2 v_rgbM) {\n    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;\n    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;\n    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;\n    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;\n    v_rgbM = vec2(fragCoord * inverseVP);\n}\n\nvoid main(void) {\n\n   gl_Position = filterVertexPosition();\n\n   vFragCoord = aVertexPosition * outputFrame.zw;\n\n   texcoords(vFragCoord, inputPixel.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n}\n",
        bs = 'varying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nvarying vec2 vFragCoord;\nuniform sampler2D uSampler;\nuniform highp vec4 inputPixel;\n\n\n/**\n Basic FXAA implementation based on the code on geeks3d.com with the\n modification that the texture2DLod stuff was removed since it\'s\n unsupported by WebGL.\n\n --\n\n From:\n https://github.com/mitsuhiko/webgl-meincraft\n\n Copyright (c) 2011 by Armin Ronacher.\n\n Some rights reserved.\n\n Redistribution and use in source and binary forms, with or without\n modification, are permitted provided that the following conditions are\n met:\n\n * Redistributions of source code must retain the above copyright\n notice, this list of conditions and the following disclaimer.\n\n * Redistributions in binary form must reproduce the above\n copyright notice, this list of conditions and the following\n disclaimer in the documentation and/or other materials provided\n with the distribution.\n\n * The names of the contributors may not be used to endorse or\n promote products derived from this software without specific\n prior written permission.\n\n THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\n LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\n A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\n OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\n SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\n LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\n DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\n THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\n OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n */\n\n#ifndef FXAA_REDUCE_MIN\n#define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#endif\n#ifndef FXAA_REDUCE_MUL\n#define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#endif\n#ifndef FXAA_SPAN_MAX\n#define FXAA_SPAN_MAX     8.0\n#endif\n\n//optimized version for mobile, where dependent\n//texture reads can be a bottleneck\nvec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 inverseVP,\n          vec2 v_rgbNW, vec2 v_rgbNE,\n          vec2 v_rgbSW, vec2 v_rgbSE,\n          vec2 v_rgbM) {\n    vec4 color;\n    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;\n    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;\n    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;\n    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;\n    vec4 texColor = texture2D(tex, v_rgbM);\n    vec3 rgbM  = texColor.xyz;\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot(rgbM,  luma);\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n\n    mediump vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n\n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n\n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n                  dir * rcpDirMin)) * inverseVP;\n\n    vec3 rgbA = 0.5 * (\n                       texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +\n                       texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (\n                                     texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +\n                                     texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);\n\n    float lumaB = dot(rgbB, luma);\n    if ((lumaB < lumaMin) || (lumaB > lumaMax))\n        color = vec4(rgbA, texColor.a);\n    else\n        color = vec4(rgbB, texColor.a);\n    return color;\n}\n\nvoid main() {\n\n      vec4 color;\n\n      color = fxaa(uSampler, vFragCoord, inputPixel.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n\n      gl_FragColor = color;\n}\n',
        Ts = function (t) {
            function e() {
                t.call(this, xs, bs)
            }

            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
        }(yr),
        Es = "precision highp float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform float uNoise;\nuniform float uSeed;\nuniform sampler2D uSampler;\n\nfloat rand(vec2 co)\n{\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main()\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n    float randomValue = rand(gl_FragCoord.xy * uSeed);\n    float diff = (randomValue - 0.5) * uNoise;\n\n    // Un-premultiply alpha before applying the color matrix. See issue #3539.\n    if (color.a > 0.0) {\n        color.rgb /= color.a;\n    }\n\n    color.r += diff;\n    color.g += diff;\n    color.b += diff;\n\n    // Premultiply alpha again.\n    color.rgb *= color.a;\n\n    gl_FragColor = color;\n}\n",
        ws = function (t) {
            function e(e, i) {
                void 0 === e && (e = .5), void 0 === i && (i = Math.random()), t.call(this, qr, Es, {
                    uNoise: 0,
                    uSeed: 0
                }), this.noise = e, this.seed = i
            }

            t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
            var i = {noise: {configurable: !0}, seed: {configurable: !0}};
            return i.noise.get = function () {
                return this.uniforms.uNoise
            }, i.noise.set = function (t) {
                this.uniforms.uNoise = t
            }, i.seed.get = function () {
                return this.uniforms.uSeed
            }, i.seed.set = function (t) {
                this.uniforms.uSeed = t
            }, Object.defineProperties(e.prototype, i), e
        }(yr), Ss = new me;
    Ue.prototype._cacheAsBitmap = !1, Ue.prototype._cacheData = !1;
    var Ps = function () {
        this.textureCacheId = null, this.originalRender = null, this.originalRenderCanvas = null, this.originalCalculateBounds = null, this.originalGetLocalBounds = null, this.originalUpdateTransform = null, this.originalHitTest = null, this.originalDestroy = null, this.originalMask = null, this.originalFilterArea = null, this.sprite = null
    };
    Object.defineProperties(Ue.prototype, {
        cacheAsBitmap: {
            get: function () {
                return this._cacheAsBitmap
            }, set: function (t) {
                var e;
                this._cacheAsBitmap !== t && (this._cacheAsBitmap = t, t ? (this._cacheData || (this._cacheData = new Ps), (e = this._cacheData).originalRender = this.render, e.originalRenderCanvas = this.renderCanvas, e.originalUpdateTransform = this.updateTransform, e.originalCalculateBounds = this.calculateBounds, e.originalGetLocalBounds = this.getLocalBounds, e.originalDestroy = this.destroy, e.originalContainsPoint = this.containsPoint, e.originalMask = this._mask, e.originalFilterArea = this.filterArea, this.render = this._renderCached, this.renderCanvas = this._renderCachedCanvas, this.destroy = this._cacheAsBitmapDestroy) : ((e = this._cacheData).sprite && this._destroyCachedDisplayObject(), this.render = e.originalRender, this.renderCanvas = e.originalRenderCanvas, this.calculateBounds = e.originalCalculateBounds, this.getLocalBounds = e.originalGetLocalBounds, this.destroy = e.originalDestroy, this.updateTransform = e.originalUpdateTransform, this.containsPoint = e.originalContainsPoint, this._mask = e.originalMask, this.filterArea = e.originalFilterArea))
            }
        }
    }), Ue.prototype._renderCached = function (t) {
        !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObject(t), this._cacheData.sprite.transform._worldID = this.transform._worldID, this._cacheData.sprite.worldAlpha = this.worldAlpha, this._cacheData.sprite._render(t))
    }, Ue.prototype._initCachedDisplayObject = function (t) {
        if (!this._cacheData || !this._cacheData.sprite) {
            var e = this.alpha;
            this.alpha = 1, t.batch.flush();
            var i = this.getLocalBounds().clone();
            if (this.filters) {
                var r = this.filters[0].padding;
                i.pad(r)
            }
            i.ceil(m.RESOLUTION);
            var n = t._activeRenderTarget, o = bi.create(i.width, i.height), s = "cacheAsBitmap_" + zt();
            this._cacheData.textureCacheId = s, oi.addToCache(o.baseTexture, s), _i.addToCache(o, s);
            var a = Ss;
            a.tx = -i.x, a.ty = -i.y, this.transform.worldTransform.identity(), this.render = this._cacheData.originalRender, t.render(this, o, !0, a, !0), t.renderTexture.bind(n), this.render = this._renderCached, this.updateTransform = this.displayObjectUpdateTransform, this.calculateBounds = this._calculateCachedBounds, this.getLocalBounds = this._getCachedLocalBounds, this._mask = null, this.filterArea = null;
            var h = new Hn(o);
            h.transform.worldTransform = this.transform.worldTransform, h.anchor.x = -i.x / i.width, h.anchor.y = -i.y / i.height, h.alpha = e, h._bounds = this._bounds, this._cacheData.sprite = h, this.transform._parentID = -1, this.parent ? this.updateTransform() : (this.parent = t._tempDisplayObjectParent, this.updateTransform(), this.parent = null), this.containsPoint = h.containsPoint.bind(h)
        }
    }, Ue.prototype._renderCachedCanvas = function (t) {
        !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObjectCanvas(t), this._cacheData.sprite.worldAlpha = this.worldAlpha, this._cacheData.sprite._renderCanvas(t))
    }, Ue.prototype._initCachedDisplayObjectCanvas = function (t) {
        if (!this._cacheData || !this._cacheData.sprite) {
            var e = this.getLocalBounds(), i = this.alpha;
            this.alpha = 1;
            var r = t.context;
            e.ceil(m.RESOLUTION);
            var n = bi.create(e.width, e.height), o = "cacheAsBitmap_" + zt();
            this._cacheData.textureCacheId = o, oi.addToCache(n.baseTexture, o), _i.addToCache(n, o);
            var s = Ss;
            this.transform.localTransform.copyTo(s), s.invert(), s.tx -= e.x, s.ty -= e.y, this.renderCanvas = this._cacheData.originalRenderCanvas, t.render(this, n, !0, s, !1), t.context = r, this.renderCanvas = this._renderCachedCanvas, this.updateTransform = this.displayObjectUpdateTransform, this.calculateBounds = this._calculateCachedBounds, this.getLocalBounds = this._getCachedLocalBounds, this._mask = null, this.filterArea = null;
            var a = new Hn(n);
            a.transform.worldTransform = this.transform.worldTransform, a.anchor.x = -e.x / e.width, a.anchor.y = -e.y / e.height, a.alpha = i, a._bounds = this._bounds, this._cacheData.sprite = a, this.transform._parentID = -1, this.parent ? this.updateTransform() : (this.parent = t._tempDisplayObjectParent, this.updateTransform(), this.parent = null), this.containsPoint = a.containsPoint.bind(a)
        }
    }, Ue.prototype._calculateCachedBounds = function () {
        this._bounds.clear(), this._cacheData.sprite.transform._worldID = this.transform._worldID, this._cacheData.sprite._calculateBounds(), this._lastBoundsID = this._boundsID
    }, Ue.prototype._getCachedLocalBounds = function () {
        return this._cacheData.sprite.getLocalBounds()
    }, Ue.prototype._destroyCachedDisplayObject = function () {
        this._cacheData.sprite._texture.destroy(!0), this._cacheData.sprite = null, oi.removeFromCache(this._cacheData.textureCacheId), _i.removeFromCache(this._cacheData.textureCacheId), this._cacheData.textureCacheId = null
    }, Ue.prototype._cacheAsBitmapDestroy = function (t) {
        this.cacheAsBitmap = !1, this.destroy(t)
    }, Ue.prototype.name = null, ke.prototype.getChildByName = function (t) {
        for (var e = 0; e < this.children.length; e++) if (this.children[e].name === t) return this.children[e];
        return null
    }, Ue.prototype.getGlobalPosition = function (t, e) {
        return void 0 === t && (t = new le), void 0 === e && (e = !1), this.parent ? this.parent.toGlobal(this.position, t, e) : (t.x = this.position.x, t.y = this.position.y), t
    };
    var Is = "5.0.0";
    var As = function (t, e) {
        this.uvBuffer = t, this.uvMatrix = e, this.data = null, this._bufferUpdateId = -1, this._textureUpdateId = -1, this._updateID = 0
    };
    As.prototype.update = function (t) {
        if (t || this._bufferUpdateId !== this.uvBuffer._updateID || this._textureUpdateId !== this.uvMatrix._updateID) {
            this._bufferUpdateId = this.uvBuffer._updateID, this._textureUpdateId = this.uvMatrix._updateID;
            var e = this.uvBuffer.data;
            this.data && this.data.length === e.length || (this.data = new Float32Array(e.length)), this.uvMatrix.multiplyUvs(e, this.data), this._updateID++
        }
    };
    var Os = new le, Cs = new Le, Ms = function (t) {
        function e(e, i, r, n) {
            void 0 === n && (n = xt.TRIANGLES), t.call(this), this.geometry = e, e.refCount++, this.shader = i, this.state = r || gr.for2d(), this.drawMode = n, this.start = 0, this.size = 0, this.uvs = null, this.indices = null, this.vertexData = new Float32Array(1), this.vertexDirty = 0, this._transformID = -1, this.tint = 16777215, this.blendMode = _t.NORMAL, this._roundPixels = m.ROUND_PIXELS, this.batchUvs = null
        }

        t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
        var i = {
            uvBuffer: {configurable: !0},
            verticesBuffer: {configurable: !0},
            material: {configurable: !0},
            blendMode: {configurable: !0},
            roundPixels: {configurable: !0},
            tint: {configurable: !0},
            texture: {configurable: !0}
        };
        return i.uvBuffer.get = function () {
            return this.geometry.buffers[1]
        }, i.verticesBuffer.get = function () {
            return this.geometry.buffers[0]
        }, i.material.set = function (t) {
            this.shader = t
        }, i.material.get = function () {
            return this.shader
        }, i.blendMode.set = function (t) {
            this.state.blendMode = t
        }, i.blendMode.get = function () {
            return this.state.blendMode
        }, i.roundPixels.set = function (t) {
            this._roundPixels !== t && (this._transformID = -1), this._roundPixels = t
        }, i.roundPixels.get = function () {
            return this._roundPixels
        }, i.tint.get = function () {
            return this.shader.tint
        }, i.tint.set = function (t) {
            this.shader.tint = t
        }, i.texture.get = function () {
            return this.shader.texture
        }, i.texture.set = function (t) {
            this.shader.texture = t
        }, e.prototype._render = function (t) {
            var i = this.geometry.buffers[0].data;
            this.shader.batchable && this.drawMode === xt.TRIANGLES && i.length < 2 * e.BATCHABLE_SIZE ? this._renderToBatch(t) : this._renderDefault(t)
        }, e.prototype._renderDefault = function (t) {
            var e = this.shader;
            e.alpha = this.worldAlpha, e.update && e.update(), t.batch.flush(), e.program.uniformData.translationMatrix && (e.uniforms.translationMatrix = this.transform.worldTransform.toArray(!0)), t.shader.bind(e), t.state.setState(this.state), t.geometry.bind(this.geometry, e), t.geometry.draw(this.drawMode, this.size, this.start, this.geometry.instanceCount)
        }, e.prototype._renderToBatch = function (t) {
            var e = this.geometry;
            this.shader.uvMatrix && (this.shader.uvMatrix.update(), this.calculateUvs()), this.calculateVertices(), this.indices = e.indexBuffer.data, this._tintRGB = this.shader._tintRGB, this._texture = this.shader.texture;
            var i = this.material.pluginName;
            t.batch.setObjectRenderer(t.plugins[i]), t.plugins[i].render(this)
        }, e.prototype.calculateVertices = function () {
            var t = this.geometry, e = t.buffers[0].data;
            if (t.vertexDirtyId !== this.vertexDirty || this._transformID !== this.transform._worldID) {
                this._transformID = this.transform._worldID, this.vertexData.length !== e.length && (this.vertexData = new Float32Array(e.length));
                for (var i = this.transform.worldTransform, r = i.a, n = i.b, o = i.c, s = i.d, a = i.tx, h = i.ty, u = this.vertexData, l = 0; l < u.length / 2; l++) {
                    var c = e[2 * l], d = e[2 * l + 1];
                    u[2 * l] = r * c + o * d + a, u[2 * l + 1] = n * c + s * d + h
                }
                if (this._roundPixels) for (var p = 0; p < u.length; p++) u[p] = Math.round(u[p]);
                this.vertexDirty = t.vertexDirtyId
            }
        }, e.prototype.calculateUvs = function () {
            var t = this.geometry.buffers[1];
            this.shader.uvMatrix.isSimple ? this.uvs = t.data : (this.batchUvs || (this.batchUvs = new As(t, this.shader.uvMatrix)), this.batchUvs.update(), this.uvs = this.batchUvs.data)
        }, e.prototype._calculateBounds = function () {
            this.calculateVertices(), this._bounds.addVertexData(this.vertexData, 0, this.vertexData.length)
        }, e.prototype.containsPoint = function (t) {
            if (!this.getBounds().contains(t.x, t.y)) return !1;
            this.worldTransform.applyInverse(t, Os);
            for (var e = this.geometry.getBuffer("aVertexPosition").data, i = Cs.points, r = this.geometry.getIndex().data, n = r.length, o = 4 === this.drawMode ? 3 : 1, s = 0; s + 2 < n; s += o) {
                var a = 2 * r[s], h = 2 * r[s + 1], u = 2 * r[s + 2];
                if (i[0] = e[a], i[1] = e[a + 1], i[2] = e[h], i[3] = e[h + 1], i[4] = e[u], i[5] = e[u + 1], Cs.contains(Os.x, Os.y)) return !0
            }
            return !1
        }, e.prototype.destroy = function (e) {
            t.prototype.destroy.call(this, e), this.geometry.refCount--, 0 === this.geometry.refCount && this.geometry.dispose(), this.geometry = null, this.shader = null, this.state = null, this.uvs = null, this.indices = null, this.vertexData = null
        }, Object.defineProperties(e.prototype, i), e
    }(ke);
    Ms.BATCHABLE_SIZE = 100;
    var Ds = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTextureMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;\n}\n",
        Rs = "varying vec2 vTextureCoord;\nuniform vec4 uColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord) * uColor;\n}\n",
        Ls = function (t) {
            function e(e, i) {
                var r = {uSampler: e, alpha: 1, uTextureMatrix: me.IDENTITY, uColor: new Float32Array([1, 1, 1, 1])};
                (i = Object.assign({
                    tint: 16777215,
                    alpha: 1,
                    pluginName: "batch"
                }, i)).uniforms && Object.assign(r, i.uniforms), t.call(this, i.program || dr.from(Ds, Rs), r), this._colorDirty = !1, this.uvMatrix = new Tr(e), this.batchable = void 0 === i.program, this.pluginName = i.pluginName, this.tint = i.tint, this.alpha = i.alpha
            }

            t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
            var i = {texture: {configurable: !0}, alpha: {configurable: !0}, tint: {configurable: !0}};
            return i.texture.get = function () {
                return this.uniforms.uSampler
            }, i.texture.set = function (t) {
                this.uniforms.uSampler !== t && (this.uniforms.uSampler = t, this.uvMatrix.texture = t)
            }, i.alpha.set = function (t) {
                t !== this._alpha && (this._alpha = t, this._colorDirty = !0)
            }, i.alpha.get = function () {
                return this._alpha
            }, i.tint.set = function (t) {
                t !== this._tint && (this._tint = t, this._tintRGB = (t >> 16) + (65280 & t) + ((255 & t) << 16), this._colorDirty = !0)
            }, i.tint.get = function () {
                return this._tint
            }, e.prototype.update = function () {
                if (this._colorDirty) {
                    this._colorDirty = !1;
                    var t = this.texture.baseTexture;
                    jt(this._tint, this._alpha, this.uniforms.uColor, t.premultiplyAlpha)
                }
                this.uvMatrix.update() && (this.uniforms.uTextureMatrix = this.uvMatrix.mapCoord)
            }, Object.defineProperties(e.prototype, i), e
        }(fr), Fs = function (t) {
            function e(e, i, r) {
                t.call(this);
                var n = new wi(e), o = new wi(i, !0), s = new wi(r, !0, !0);
                this.addAttribute("aVertexPosition", n, 2, !1, Et.FLOAT).addAttribute("aTextureCoord", o, 2, !1, Et.FLOAT).addIndex(s), this._updateId = -1
            }

            t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
            var i = {vertexDirtyId: {configurable: !0}};
            return i.vertexDirtyId.get = function () {
                return this.buffers[0]._updateID
            }, Object.defineProperties(e.prototype, i), e
        }(Ci), Ns = function (t) {
            function e(e, i, r, n) {
                void 0 === e && (e = 100), void 0 === i && (i = 100), void 0 === r && (r = 10), void 0 === n && (n = 10), t.call(this), this.segWidth = r, this.segHeight = n, this.width = e, this.height = i, this.build()
            }

            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.build = function () {
                for (var t = this.segWidth * this.segHeight, e = [], i = [], r = [], n = this.segWidth - 1, o = this.segHeight - 1, s = this.width / n, a = this.height / o, h = 0; h < t; h++) {
                    var u = h % this.segWidth, l = h / this.segWidth | 0;
                    e.push(u * s, l * a), i.push(u / n, l / o)
                }
                for (var c = n * o, d = 0; d < c; d++) {
                    var p = d % n, f = d / n | 0, v = f * this.segWidth + p, g = f * this.segWidth + p + 1,
                        m = (f + 1) * this.segWidth + p, y = (f + 1) * this.segWidth + p + 1;
                    r.push(v, g, m, g, y, m)
                }
                this.buffers[0].data = new Float32Array(e), this.buffers[1].data = new Float32Array(i), this.indexBuffer.data = new Uint16Array(r), this.buffers[0].update(), this.buffers[1].update(), this.indexBuffer.update()
            }, e
        }(Fs), Us = function (t) {
            function e(e, i) {
                void 0 === e && (e = 200), t.call(this, new Float32Array(4 * i.length), new Float32Array(4 * i.length), new Uint16Array(6 * (i.length - 1))), this.points = i, this.width = e, this.build()
            }

            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.build = function () {
                var t = this.points;
                if (t) {
                    var e = this.getBuffer("aVertexPosition"), i = this.getBuffer("aTextureCoord"), r = this.getIndex();
                    if (!(t.length < 1)) {
                        e.data.length / 4 !== t.length && (e.data = new Float32Array(4 * t.length), i.data = new Float32Array(4 * t.length), r.data = new Uint16Array(6 * (t.length - 1)));
                        var n = i.data, o = r.data;
                        n[0] = 0, n[1] = 0, n[2] = 0, n[3] = 1;
                        for (var s = t.length, a = 0; a < s; a++) {
                            var h = 4 * a, u = a / (s - 1);
                            n[h] = u, n[h + 1] = 0, n[h + 2] = u, n[h + 3] = 1
                        }
                        for (var l = 0, c = 0; c < s - 1; c++) {
                            var d = 2 * c;
                            o[l++] = d, o[l++] = d + 1, o[l++] = d + 2, o[l++] = d + 2, o[l++] = d + 1, o[l++] = d + 3
                        }
                        i.update(), r.update(), this.updateVertices()
                    }
                }
            }, e.prototype.updateVertices = function () {
                var t = this.points;
                if (!(t.length < 1)) {
                    for (var e, i = t[0], r = 0, n = 0, o = this.buffers[0].data, s = t.length, a = 0; a < s; a++) {
                        var h = t[a], u = 4 * a;
                        n = -((e = a < t.length - 1 ? t[a + 1] : h).x - i.x), r = e.y - i.y;
                        var l = Math.sqrt(r * r + n * n), c = this.width / 2;
                        r /= l, n /= l, r *= c, n *= c, o[u] = h.x + r, o[u + 1] = h.y + n, o[u + 2] = h.x - r, o[u + 3] = h.y - n, i = h
                    }
                    this.buffers[0].update()
                }
            }, e.prototype.update = function () {
                this.updateVertices()
            }, e
        }(Fs), Bs = function (t) {
            function e(e, i) {
                var r = new Us(e.height, i), n = new Ls(e);
                t.call(this, r, n), this.autoUpdate = !0
            }

            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype._render = function (e) {
                (this.autoUpdate || this.geometry.width !== this.shader.texture.height) && (this.geometry.width = this.shader.texture.height, this.geometry.update()), t.prototype._render.call(this, e)
            }, e
        }(Ms), ks = function (t) {
            function e(e, i, r) {
                var n = new Ns(e.width, e.height, i, r), o = new Ls(_i.WHITE);
                t.call(this, n, o), this.texture = e
            }

            t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
            var i = {texture: {configurable: !0}};
            return e.prototype.textureUpdated = function () {
                this._textureID = this.shader.texture._updateID, this.geometry.width = this.shader.texture.width, this.geometry.height = this.shader.texture.height, this.geometry.build()
            }, i.texture.set = function (t) {
                this.shader.texture !== t && (this.shader.texture = t, this._textureID = -1, t.baseTexture.valid ? this.textureUpdated() : t.once("update", this.textureUpdated, this))
            }, i.texture.get = function () {
                return this.shader.texture
            }, e.prototype._render = function (e) {
                this._textureID !== this.shader.texture._updateID && this.textureUpdated(), t.prototype._render.call(this, e)
            }, Object.defineProperties(e.prototype, i), e
        }(Ms), Xs = function (t) {
            function e(e, i, r, n, o) {
                void 0 === e && (e = _i.EMPTY);
                var s = new Fs(i, r, n);
                s.getBuffer("aVertexPosition").static = !1;
                var a = new Ls(e);
                t.call(this, s, a, null, o), this.autoUpdate = !0
            }

            t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
            var i = {vertices: {configurable: !0}};
            return i.vertices.get = function () {
                return this.geometry.getBuffer("aVertexPosition").data
            }, i.vertices.set = function (t) {
                this.geometry.getBuffer("aVertexPosition").data = t
            }, e.prototype._render = function (e) {
                this.autoUpdate && this.geometry.getBuffer("aVertexPosition").update(), t.prototype._render.call(this, e)
            }, Object.defineProperties(e.prototype, i), e
        }(Ms), js = 10, Gs = function (t) {
            function e(e, i, r, n, o) {
                t.call(this, _i.WHITE, 4, 4), this._origWidth = e.orig.width, this._origHeight = e.orig.height, this._width = this._origWidth, this._height = this._origHeight, this._leftWidth = void 0 !== i ? i : js, this._rightWidth = void 0 !== n ? n : js, this._topHeight = void 0 !== r ? r : js, this._bottomHeight = void 0 !== o ? o : js, this.texture = e
            }

            t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
            var i = {
                vertices: {configurable: !0},
                width: {configurable: !0},
                height: {configurable: !0},
                leftWidth: {configurable: !0},
                rightWidth: {configurable: !0},
                topHeight: {configurable: !0},
                bottomHeight: {configurable: !0}
            };
            return e.prototype.textureUpdated = function () {
                this._textureID = this.shader.texture._updateID, this._refresh()
            }, i.vertices.get = function () {
                return this.geometry.getBuffer("aVertexPosition").data
            }, i.vertices.set = function (t) {
                this.geometry.getBuffer("aVertexPosition").data = t
            }, e.prototype.updateHorizontalVertices = function () {
                var t = this.vertices, e = this._topHeight + this._bottomHeight,
                    i = this._height > e ? 1 : this._height / e;
                t[9] = t[11] = t[13] = t[15] = this._topHeight * i, t[17] = t[19] = t[21] = t[23] = this._height - this._bottomHeight * i, t[25] = t[27] = t[29] = t[31] = this._height
            }, e.prototype.updateVerticalVertices = function () {
                var t = this.vertices, e = this._leftWidth + this._rightWidth, i = this._width > e ? 1 : this._width / e;
                t[2] = t[10] = t[18] = t[26] = this._leftWidth * i, t[4] = t[12] = t[20] = t[28] = this._width - this._rightWidth * i, t[6] = t[14] = t[22] = t[30] = this._width
            }, i.width.get = function () {
                return this._width
            }, i.width.set = function (t) {
                this._width = t, this._refresh()
            }, i.height.get = function () {
                return this._height
            }, i.height.set = function (t) {
                this._height = t, this._refresh()
            }, i.leftWidth.get = function () {
                return this._leftWidth
            }, i.leftWidth.set = function (t) {
                this._leftWidth = t, this._refresh()
            }, i.rightWidth.get = function () {
                return this._rightWidth
            }, i.rightWidth.set = function (t) {
                this._rightWidth = t, this._refresh()
            }, i.topHeight.get = function () {
                return this._topHeight
            }, i.topHeight.set = function (t) {
                this._topHeight = t, this._refresh()
            }, i.bottomHeight.get = function () {
                return this._bottomHeight
            }, i.bottomHeight.set = function (t) {
                this._bottomHeight = t, this._refresh()
            }, e.prototype._refresh = function () {
                var t = this.texture, e = this.geometry.buffers[1].data;
                this._origWidth = t.orig.width, this._origHeight = t.orig.height;
                var i = 1 / this._origWidth, r = 1 / this._origHeight;
                e[0] = e[8] = e[16] = e[24] = 0, e[1] = e[3] = e[5] = e[7] = 0, e[6] = e[14] = e[22] = e[30] = 1, e[25] = e[27] = e[29] = e[31] = 1, e[2] = e[10] = e[18] = e[26] = i * this._leftWidth, e[4] = e[12] = e[20] = e[28] = 1 - i * this._rightWidth, e[9] = e[11] = e[13] = e[15] = r * this._topHeight, e[17] = e[19] = e[21] = e[23] = 1 - r * this._bottomHeight, this.updateHorizontalVertices(), this.updateVerticalVertices(), this.geometry.buffers[0].update(), this.geometry.buffers[1].update()
            }, Object.defineProperties(e.prototype, i), e
        }(ks), Hs = function (t) {
            function e(e, i) {
                t.call(this, e[0] instanceof _i ? e[0] : e[0].texture), this._textures = null, this._durations = null, this.textures = e, this._autoUpdate = !1 !== i, this.animationSpeed = 1, this.loop = !0, this.updateAnchor = !1, this.onComplete = null, this.onFrameChange = null, this.onLoop = null, this._currentTime = 0, this.playing = !1
            }

            t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
            var i = {totalFrames: {configurable: !0}, textures: {configurable: !0}, currentFrame: {configurable: !0}};
            return e.prototype.stop = function () {
                this.playing && (this.playing = !1, this._autoUpdate && We.shared.remove(this.update, this))
            }, e.prototype.play = function () {
                this.playing || (this.playing = !0, this._autoUpdate && We.shared.add(this.update, this, ze.HIGH))
            }, e.prototype.gotoAndStop = function (t) {
                this.stop();
                var e = this.currentFrame;
                this._currentTime = t, e !== this.currentFrame && this.updateTexture()
            }, e.prototype.gotoAndPlay = function (t) {
                var e = this.currentFrame;
                this._currentTime = t, e !== this.currentFrame && this.updateTexture(), this.play()
            }, e.prototype.update = function (t) {
                var e = this.animationSpeed * t, i = this.currentFrame;
                if (null !== this._durations) {
                    var r = this._currentTime % 1 * this._durations[this.currentFrame];
                    for (r += e / 60 * 1e3; r < 0;) this._currentTime--, r += this._durations[this.currentFrame];
                    var n = Math.sign(this.animationSpeed * t);
                    for (this._currentTime = Math.floor(this._currentTime); r >= this._durations[this.currentFrame];) r -= this._durations[this.currentFrame] * n, this._currentTime += n;
                    this._currentTime += r / this._durations[this.currentFrame]
                } else this._currentTime += e;
                this._currentTime < 0 && !this.loop ? (this.gotoAndStop(0), this.onComplete && this.onComplete()) : this._currentTime >= this._textures.length && !this.loop ? (this.gotoAndStop(this._textures.length - 1), this.onComplete && this.onComplete()) : i !== this.currentFrame && (this.loop && this.onLoop && (this.animationSpeed > 0 && this.currentFrame < i ? this.onLoop() : this.animationSpeed < 0 && this.currentFrame > i && this.onLoop()), this.updateTexture())
            }, e.prototype.updateTexture = function () {
                this._texture = this._textures[this.currentFrame], this._textureID = -1, this._textureTrimmedID = -1, this.cachedTint = 16777215, this.uvs = this._texture._uvs.uvsFloat32, this.updateAnchor && this._anchor.copy(this._texture.defaultAnchor), this.onFrameChange && this.onFrameChange(this.currentFrame)
            }, e.prototype.destroy = function (e) {
                this.stop(), t.prototype.destroy.call(this, e), this.onComplete = null, this.onFrameChange = null, this.onLoop = null
            }, e.fromFrames = function (t) {
                for (var i = [], r = 0; r < t.length; ++r) i.push(_i.from(t[r]));
                return new e(i)
            }, e.fromImages = function (t) {
                for (var i = [], r = 0; r < t.length; ++r) i.push(_i.from(t[r]));
                return new e(i)
            }, i.totalFrames.get = function () {
                return this._textures.length
            }, i.textures.get = function () {
                return this._textures
            }, i.textures.set = function (t) {
                if (t[0] instanceof _i) this._textures = t, this._durations = null; else {
                    this._textures = [], this._durations = [];
                    for (var e = 0; e < t.length; e++) this._textures.push(t[e].texture), this._durations.push(t[e].time)
                }
                this.gotoAndStop(0), this.updateTexture()
            }, i.currentFrame.get = function () {
                var t = Math.floor(this._currentTime) % this._textures.length;
                return t < 0 && (t += this._textures.length), t
            }, Object.defineProperties(e.prototype, i), e
        }(Hn);
    zr.registerPlugin("accessibility", je), zr.registerPlugin("extract", an), zr.registerPlugin("interaction", mn), zr.registerPlugin("particle", Zo), zr.registerPlugin("prepare", co), zr.registerPlugin("batch", on), zr.registerPlugin("tilingSprite", os), Go.registerPlugin(as), Go.registerPlugin(Qo), yo.registerPlugin(Ke), yo.registerPlugin(Ho);
    var Ys = {
        AlphaFilter: us,
        BlurFilter: fs,
        BlurFilterPass: ps,
        ColorMatrixFilter: gs,
        DisplacementFilter: _s,
        FXAAFilter: Ts,
        NoiseFilter: ws
    };
    return t.AbstractRenderer = Yr, t.AnimatedSprite = Hs, t.AppLoaderPlugin = Ho, t.Application = yo, t.Attribute = Ti, t.BLEND_MODES = _t, t.BaseRenderTexture = gi, t.BaseTexture = oi, t.BatchDrawCall = Jr, t.BatchGeometry = Kr, t.BatchRenderer = on, t.BitmapFontLoader = as, t.BitmapText = ss, t.Bounds = Ne, t.Buffer = wi, t.Circle = De, t.Container = ke, t.CubeTexture = Zr, t.DEG_TO_RAD = ve, t.DRAW_MODES = xt, t.DisplayObject = Ue, t.ENV = mt, t.Ellipse = Re, t.FORMATS = bt, t.FillStyle = xn, t.Filter = yr, t.Framebuffer = fi, t.GC_MODES = It, t.GLProgram = Cr, t.GLTexture = oi, t.GRAPHICS_CURVES = _n, t.Geometry = Ci, t.Graphics = Xn, t.GraphicsData = bn, t.GraphicsGeometry = Dn, t.GroupD8 = Pe, t.LineStyle = Rn, t.Loader = Go, t.LoaderResource = Yo, t.MIPMAP_MODES = Pt, t.Matrix = me, t.Mesh = Ms, t.MeshBatchUvs = As, t.MeshGeometry = Fs, t.MeshMaterial = Ls, t.NineSlicePlane = Gs, t.ObjectRenderer = Ui, t.ObservablePoint = ce, t.PI_2 = pe, t.PRECISION = At, t.ParticleContainer = zo, t.ParticleRenderer = Zo, t.PlaneGeometry = Ns, t.Point = le, t.Polygon = Le, t.Program = dr, t.Quad = Mi, t.QuadUv = Di, t.RAD_TO_DEG = fe, t.RENDERER_TYPE = yt, t.Rectangle = Oe, t.RenderTexture = bi, t.Renderer = zr, t.RopeGeometry = Us, t.RoundedRectangle = Fe, t.Runner = He, t.SCALE_MODES = wt, t.SHAPES = ge, t.Shader = fr, t.SimpleMesh = Xs, t.SimplePlane = ks, t.SimpleRope = Bs, t.Sprite = Hn, t.SpriteMaskFilter = wr, t.Spritesheet = Ko, t.SpritesheetLoader = Qo, t.State = gr, t.System = di, t.TARGETS = Tt, t.TEXT_GRADIENT = Yn, t.TYPES = Et, t.Text = eo, t.TextMetrics = Qn, t.TextStyle = Wn, t.Texture = _i, t.TextureLoader = jo, t.TextureMatrix = Tr, t.TextureUvs = mi, t.Ticker = We, t.TickerPlugin = Ke, t.TilingSprite = ts, t.TilingSpriteRenderer = os, t.Transform = Ie, t.UPDATE_PRIORITY = ze, t.UniformGroup = Li, t.VERSION = "5.0.1", t.WRAP_MODES = St, t.accessibility = Ge, t.autoDetectRenderer = Vr, t.checkMaxIfStatementsInShader = hr, t.defaultFilterVertex = qr,t.defaultVertex = Wr,t.extract = hn,t.filters = Ys,t.generateMultiTextureShader = nn,t.interaction = yn,t.isMobile = g,t.prepare = mo,t.resources = ci,t.settings = m,t.systems = Gr,t.useDeprecated = function () {
        var t = this;
        Object.defineProperties(t, {
            SVG_SIZE: {
                get: function () {
                    return he(Is, "PIXI.utils.SVG_SIZE property has moved to PIXI.resources.SVGResource.SVG_SIZE"), t.SVGResource.SVG_SIZE
                }
            }, TransformStatic: {
                get: function () {
                    return he(Is, "PIXI.TransformStatic class has been removed, use PIXI.Transform"), t.Transform
                }
            }, TransformBase: {
                get: function () {
                    return he(Is, "PIXI.TransformBase class has been removed, use PIXI.Transform"), t.Transform
                }
            }, TRANSFORM_MODE: {
                get: function () {
                    return he(Is, "PIXI.TRANSFORM_MODE property has been removed"), {STATIC: 0, DYNAMIC: 1}
                }
            }, WebGLRenderer: {
                get: function () {
                    return he(Is, "PIXI.WebGLRenderer class has moved to PIXI.Renderer"), t.Renderer
                }
            }, CanvasRenderTarget: {
                get: function () {
                    return he(Is, "PIXI.CanvasRenderTarget class has moved to PIXI.utils.CanvasRenderTarget"), t.utils.CanvasRenderTarget
                }
            }, loader: {
                get: function () {
                    return he(Is, "PIXI.loader instance has moved to PIXI.Loader.shared"), t.Loader.shared
                }
            }, FilterManager: {
                get: function () {
                    return he(Is, "PIXI.FilterManager class has moved to PIXI.systems.FilterSystem"), t.systems.FilterSystem
                }
            }
        }), t.extras = {}, Object.defineProperties(t.extras, {
            TilingSprite: {
                get: function () {
                    return he(Is, "PIXI.extras.TilingSprite class has moved to PIXI.TilingSprite"), t.TilingSprite
                }
            }, TilingSpriteRenderer: {
                get: function () {
                    return he(Is, "PIXI.extras.TilingSpriteRenderer class has moved to PIXI.TilingSpriteRenderer"), t.TilingSpriteRenderer
                }
            }, AnimatedSprite: {
                get: function () {
                    return he(Is, "PIXI.extras.AnimatedSprite class has moved to PIXI.AnimatedSprite"), t.AnimatedSprite
                }
            }, BitmapText: {
                get: function () {
                    return he(Is, "PIXI.extras.BitmapText class has moved to PIXI.BitmapText"), t.BitmapText
                }
            }
        }), Object.defineProperties(t.utils, {
            getSvgSize: {
                get: function () {
                    return he(Is, "PIXI.utils.getSvgSize function has moved to PIXI.resources.SVGResource.getSize"), t.SVGResource.getSize
                }
            }
        }), t.mesh = {}, Object.defineProperties(t.mesh, {
            Mesh: {
                get: function () {
                    return he(Is, "PIXI.mesh.Mesh class has moved to PIXI.SimpleMesh"), t.SimpleMesh
                }
            }, NineSlicePlane: {
                get: function () {
                    return he(Is, "PIXI.mesh.NineSlicePlane class has moved to PIXI.NineSlicePlane"), t.NineSlicePlane
                }
            }, Plane: {
                get: function () {
                    return he(Is, "PIXI.mesh.Plane class has moved to PIXI.SimplePlane"), t.SimplePlane
                }
            }, Rope: {
                get: function () {
                    return he(Is, "PIXI.mesh.Rope class has moved to PIXI.SimpleRope"), t.SimpleRope
                }
            }, RawMesh: {
                get: function () {
                    return he(Is, "PIXI.mesh.RawMesh class has moved to PIXI.Mesh"), t.Mesh
                }
            }, CanvasMeshRenderer: {
                get: function () {
                    return he(Is, "PIXI.mesh.CanvasMeshRenderer class has moved to PIXI.CanvasMeshRenderer"), t.CanvasMeshRenderer
                }
            }, MeshRenderer: {
                get: function () {
                    return he(Is, "PIXI.mesh.MeshRenderer class has moved to PIXI.MeshRenderer"), t.MeshRenderer
                }
            }
        }), t.particles = {}, Object.defineProperties(t.particles, {
            ParticleContainer: {
                get: function () {
                    return he(Is, "PIXI.particles.ParticleContainer class has moved to PIXI.ParticleContainer"), t.ParticleContainer
                }
            }, ParticleRenderer: {
                get: function () {
                    return he(Is, "PIXI.particles.ParticleRenderer class has moved to PIXI.ParticleRenderer"), t.ParticleRenderer
                }
            }
        }), t.ticker = {}, Object.defineProperties(t.ticker, {
            Ticker: {
                get: function () {
                    return he(Is, "PIXI.ticker.Ticker class has moved to PIXI.Ticker"), t.Ticker
                }
            }, shared: {
                get: function () {
                    return he(Is, "PIXI.ticker.shared instance has moved to PIXI.Ticker.shared"), t.Ticker.shared
                }
            }
        }), t.loaders = {}, Object.defineProperties(t.loaders, {
            Loader: {
                get: function () {
                    return he(Is, "PIXI.loaders.Loader class has moved to PIXI.Loader"), t.Loader
                }
            }, Resource: {
                get: function () {
                    return he(Is, "PIXI.loaders.Resource class has moved to PIXI.LoaderResource"), t.LoaderResource
                }
            }, bitmapFontParser: {
                get: function () {
                    return he(Is, "PIXI.loaders.bitmapFontParser function has moved to PIXI.BitmapFontLoader.use"), t.BitmapFontLoader.use
                }
            }, parseBitmapFontData: {
                get: function () {
                    return he(Is, "PIXI.loaders.parseBitmapFontData function has moved to PIXI.BitmapFontLoader.parse"), t.BitmapFontLoader.parse
                }
            }, spritesheetParser: {
                get: function () {
                    return he(Is, "PIXI.loaders.spritesheetParser function has moved to PIXI.SpritesheetLoader.use"), t.SpritesheetLoader.use
                }
            }, getResourcePath: {
                get: function () {
                    return he(Is, "PIXI.loaders.getResourcePath property has moved to PIXI.SpritesheetLoader.getResourcePath"), t.SpritesheetLoader.getResourcePath
                }
            }
        }), t.Loader.addPixiMiddleware = function (e) {
            return he(Is, "PIXI.loaders.Loader.addPixiMiddleware function is deprecated, use PIXI.loaders.Loader.registerPlugin"), t.loaders.Loader.registerPlugin({use: e()})
        }, Object.defineProperty(t.extract, "WebGLExtract", {
            get: function () {
                return he(Is, "PIXI.extract.WebGLExtract method has moved to PIXI.extract.Extract"), t.extract.Extract
            }
        }), Object.defineProperty(t.prepare, "WebGLPrepare", {
            get: function () {
                return he(Is, "PIXI.prepare.WebGLPrepare class has moved to PIXI.prepare.Prepare"), t.prepare.Prepare
            }
        }), t.Container.prototype._renderWebGL = function (t) {
            he(Is, "PIXI.Container._renderWebGL method has moved to PIXI.Container._render"), this._render(t)
        }, t.Container.prototype.renderWebGL = function (t) {
            he(Is, "PIXI.Container.renderWebGL method has moved to PIXI.Container.render"), this.render(t)
        }, t.DisplayObject.prototype.renderWebGL = function (t) {
            he(Is, "PIXI.DisplayObject.renderWebGL method has moved to PIXI.DisplayObject.render"), this.render(t)
        }, t.Container.prototype.renderAdvancedWebGL = function (t) {
            he(Is, "PIXI.Container.renderAdvancedWebGL method has moved to PIXI.Container.renderAdvanced"), this.renderAdvanced(t)
        }, Object.defineProperties(t.settings, {
            TRANSFORM_MODE: {
                get: function () {
                    return he(Is, "PIXI.settings.TRANSFORM_MODE property has been removed"), 0
                }, set: function () {
                    he(Is, "PIXI.settings.TRANSFORM_MODE property has been removed")
                }
            }
        });
        var e = t.BaseTexture;
        e.prototype.loadSource = function (e) {
            he(Is, "PIXI.BaseTexture.loadSource method has been deprecated");
            var i = t.resources.autoDetectResource(e);
            i.internal = !0, this.setResource(i), this.update()
        }, Object.defineProperties(e.prototype, {
            hasLoaded: {
                get: function () {
                    return he(Is, "PIXI.BaseTexture.hasLoaded property has been removed, use PIXI.BaseTexture.valid"), this.valid
                }
            }, imageUrl: {
                get: function () {
                    return he(Is, "PIXI.BaseTexture.imageUrl property has been removed, use resource.url"), this.resource && this.resource.url
                }
            }, source: {
                get: function () {
                    return he(Is, "PIXI.BaseTexture.source property has been moved, use `resource.source`"), this.resource && this.resource.source
                }, set: function (t) {
                    he(Is, "PIXI.BaseTexture.source property has been moved, use `resource.source` if you want to set HTMLCanvasElement. Otherwise, create new BaseTexture."), this.resource && (this.resource.source = t)
                }
            }
        }), e.fromImage = function (t, i, r, n) {
            he(Is, "PIXI.BaseTexture.fromImage method has been replaced with PIXI.BaseTexture.from");
            var o = {scale: n, crossorigin: i};
            return e.from(t, {scaleMode: r, resourceOptions: o})
        }, e.fromCanvas = function (t, i) {
            return he(Is, "PIXI.BaseTexture.fromCanvas method has been replaced with PIXI.BaseTexture.from"), e.from(t, {scaleMode: i})
        }, e.fromSVG = function (t, i, r, n) {
            he(Is, "PIXI.BaseTexture.fromSVG method has been replaced with PIXI.BaseTexture.from");
            var o = {scale: n, crossorigin: i};
            return e.from(t, {scaleMode: r, resourceOptions: o})
        }, t.Point.prototype.copy = function (t) {
            return he(Is, "PIXI.Point.copy method has been replaced with PIXI.Point.copyFrom"), this.copyFrom(t)
        }, t.ObservablePoint.prototype.copy = function (t) {
            return he(Is, "PIXI.ObservablePoint.copy method has been replaced with PIXI.ObservablePoint.copyFrom"), this.copyFrom(t)
        }, t.Rectangle.prototype.copy = function (t) {
            return he(Is, "PIXI.Rectangle.copy method has been replaced with PIXI.Rectangle.copyFrom"), this.copyFrom(t)
        }, t.Matrix.prototype.copy = function (t) {
            return he(Is, "PIXI.Matrix.copy method has been replaced with PIXI.Matrix.copyTo"), this.copyTo(t)
        }, Object.assign(t.systems.FilterSystem.prototype, {
            getRenderTarget: function (t, e) {
                return he(Is, "PIXI.FilterManager.getRenderTarget method has been replaced with PIXI.systems.FilterSystem#getFilterTexture"), this.getFilterTexture(e)
            }, returnRenderTarget: function (t) {
                he(Is, "PIXI.FilterManager.returnRenderTarget method has been replaced with PIXI.systems.FilterSystem.returnFilterTexture"), this.returnFilterTexture(t)
            }, calculateScreenSpaceMatrix: function (t) {
                he(Is, "PIXI.systems.FilterSystem.calculateScreenSpaceMatrix method is removed, use `(vTextureCoord * inputSize.xy) + outputFrame.xy` instead");
                var e = t.identity(), i = this.activeState, r = i.sourceFrame, n = i.destinationFrame;
                return e.translate(r.x / n.width, r.y / n.height), e.scale(n.width, n.height), e
            }, calculateNormalizedScreenSpaceMatrix: function (t) {
                he(Is, "PIXI.systems.FilterManager.calculateNormalizedScreenSpaceMatrix method is removed, use `((vTextureCoord * inputSize.xy) + outputFrame.xy) / outputFrame.zw` instead.");
                var e = this.activeState, i = e.sourceFrame, r = e.destinationFrame, n = t.identity();
                n.translate(i.x / r.width, i.y / r.height);
                var o = r.width / i.width, s = r.height / i.height;
                return n.scale(o, s), n
            }
        }), Object.defineProperties(t.RenderTexture.prototype, {
            sourceFrame: {
                get: function () {
                    return he(Is, "PIXI.RenderTexture.sourceFrame property has been removed"), this.filterFrame
                }
            }, size: {
                get: function () {
                    return he(Is, "PIXI.RenderTexture.size property has been removed"), this._frame
                }
            }
        });
        var i = function (t) {
            function e(e, i, r, n) {
                he(Is, "PIXI.filters.BlurXFilter class is deprecated, use PIXI.filters.BlurFilterPass"), t.call(this, !0, e, i, r, n)
            }

            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
        }(t.filters.BlurFilterPass), r = function (t) {
            function e(e, i, r, n) {
                he(Is, "PIXI.filters.BlurYFilter class is deprecated, use PIXI.filters.BlurFilterPass"), t.call(this, !1, e, i, r, n)
            }

            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
        }(t.filters.BlurFilterPass);
        Object.assign(t.filters, {BlurXFilter: i, BlurYFilter: r});
        var n = t.Sprite, o = t.Texture, s = t.Graphics;

        function a(t, e, i, r) {
            return he(Is, "PIXI.Sprite." + t + " method is deprecated, use PIXI.Sprite.from"), n.from(e, {
                resourceOptions: {
                    scale: r,
                    crossorigin: i
                }
            })
        }

        function h(t, e, i, r) {
            return he(Is, "PIXI.Texture." + t + " method is deprecated, use PIXI.Texture.from"), o.from(e, {
                resourceOptions: {
                    scale: r,
                    crossorigin: i
                }
            })
        }

        s.prototype.generateCanvasTexture || (s.prototype.generateCanvasTexture = function () {
            he(Is, 'PIXI.Graphics.generateCanvasTexture method is only available in "pixi.js-legacy"')
        }), n.fromImage = a.bind(null, "fromImage"), n.fromSVG = a.bind(null, "fromSVG"), n.fromCanvas = a.bind(null, "fromCanvas"), n.fromVideo = a.bind(null, "fromVideo"), n.fromFrame = a.bind(null, "fromFrame"), o.fromImage = h.bind(null, "fromImage"), o.fromSVG = h.bind(null, "fromSVG"), o.fromCanvas = h.bind(null, "fromCanvas"), o.fromVideo = h.bind(null, "fromVideo"), o.fromFrame = h.bind(null, "fromFrame"), Object.defineProperty(t.AbstractRenderer.prototype, "autoResize", {
            get: function () {
                return he(Is, "PIXI.AbstractRenderer.autoResize property is deprecated, use autoDensity"), this.autoDensity
            }, set: function (t) {
                he(Is, "PIXI.AbstractRenderer.autoResize property is deprecated, use autoDensity"), this.autoDensity = t
            }
        }), t.utils.mixins = {
            mixin: function () {
                he(Is, "PIXI.utils.mixins.mixin function is no longer available")
            }, delayMixin: function () {
                he(Is, "PIXI.utils.mixins.delayMixin function is no longer available")
            }, performMixins: function () {
                he(Is, "PIXI.utils.mixins.performMixins function is no longer available")
            }
        }
    },t.utils = ue,t
}({});
PIXI.useDeprecated();
//# sourceMappingURL=pixi.min.js.map