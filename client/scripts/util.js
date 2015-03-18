/*! jQuery v1.11.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */ ! function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = [],
        d = c.slice,
        e = c.concat,
        f = c.push,
        g = c.indexOf,
        h = {}, i = h.toString,
        j = h.hasOwnProperty,
        k = "".trim,
        l = {}, m = "1.11.0",
        n = function(a, b) {
            return new n.fn.init(a, b)
        }, o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        p = /^-ms-/,
        q = /-([\da-z])/gi,
        r = function(a, b) {
            return b.toUpperCase()
        };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return d.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        },
        pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a, b) {
            return n.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(n.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(d.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: f,
        sort: c.sort,
        splice: c.splice
    }, n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (e = arguments[h]))
                for (d in e) a = g[d], c = e[d], g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1, f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {}, g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === n.type(a)
        },
        isArray: Array.isArray || function(a) {
            return "array" === n.type(a)
        },
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            return a - parseFloat(a) >= 0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;
            try {
                if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            if (l.ownLast)
                for (b in a) return j.call(a, b);
            for (b in a);
            return void 0 === b || j.call(a, b)
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        },
        globalEval: function(b) {
            b && n.trim(b) && (a.execScript || function(b) {
                a.eval.call(a, b)
            })(b)
        },
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, c) {
            var d, e = 0,
                f = a.length,
                g = s(a);
            if (c) {
                if (g) {
                    for (; f > e; e++)
                        if (d = b.apply(a[e], c), d === !1) break
                } else
                    for (e in a)
                        if (d = b.apply(a[e], c), d === !1) break
            } else if (g) {
                for (; f > e; e++)
                    if (d = b.call(a[e], e, a[e]), d === !1) break
            } else
                for (e in a)
                    if (d = b.call(a[e], e, a[e]), d === !1) break; return a
        },
        trim: k && !k.call("\ufeff\xa0") ? function(a) {
            return null == a ? "" : k.call(a)
        } : function(a) {
            return null == a ? "" : (a + "").replace(o, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (g) return g.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                    if (c in b && b[c] === a) return c
            }
            return -1
        },
        merge: function(a, b) {
            var c = +b.length,
                d = 0,
                e = a.length;
            while (c > d) a[e++] = b[d++];
            if (c !== c)
                while (void 0 !== b[d]) a[e++] = b[d++];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, f = 0,
                g = a.length,
                h = s(a),
                i = [];
            if (h)
                for (; g > f; f++) d = b(a[f], f, c), null != d && i.push(d);
            else
                for (f in a) d = b(a[f], f, c), null != d && i.push(d);
            return e.apply([], i)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, e, f;
            return "string" == typeof b && (f = a[b], b = a, a = f), n.isFunction(a) ? (c = d.call(arguments, 2), e = function() {
                return a.apply(b || this, c.concat(d.call(arguments)))
            }, e.guid = a.guid = a.guid || n.guid++, e) : void 0
        },
        now: function() {
            return +new Date
        },
        support: l
    }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });

    function s(a) {
        var b = a.length,
            c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var t = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s = "sizzle" + -new Date,
            t = a.document,
            u = 0,
            v = 0,
            w = eb(),
            x = eb(),
            y = eb(),
            z = function(a, b) {
                return a === b && (j = !0), 0
            }, A = "undefined",
            B = 1 << 31,
            C = {}.hasOwnProperty,
            D = [],
            E = D.pop,
            F = D.push,
            G = D.push,
            H = D.slice,
            I = D.indexOf || function(a) {
                for (var b = 0, c = this.length; c > b; b++)
                    if (this[b] === a) return b;
                return -1
            }, J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            K = "[\\x20\\t\\r\\n\\f]",
            L = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            M = L.replace("w", "w#"),
            N = "\\[" + K + "*(" + L + ")" + K + "*(?:([*^$|!~]?=)" + K + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + M + ")|)|)" + K + "*\\]",
            O = ":(" + L + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + N.replace(3, 8) + ")*)|.*)\\)|)",
            P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
            Q = new RegExp("^" + K + "*," + K + "*"),
            R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
            S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
            T = new RegExp(O),
            U = new RegExp("^" + M + "$"),
            V = {
                ID: new RegExp("^#(" + L + ")"),
                CLASS: new RegExp("^\\.(" + L + ")"),
                TAG: new RegExp("^(" + L.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + N),
                PSEUDO: new RegExp("^" + O),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + J + ")$", "i"),
                needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i")
            }, W = /^(?:input|select|textarea|button)$/i,
            X = /^h\d$/i,
            Y = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            $ = /[+~]/,
            _ = /'|\\/g,
            ab = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
            bb = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            };
        try {
            G.apply(D = H.call(t.childNodes), t.childNodes), D[t.childNodes.length].nodeType
        } catch (cb) {
            G = {
                apply: D.length ? function(a, b) {
                    F.apply(a, H.call(b))
                } : function(a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }

        function db(a, b, d, e) {
            var f, g, h, i, j, m, p, q, u, v;
            if ((b ? b.ownerDocument || b : t) !== l && k(b), b = b || l, d = d || [], !a || "string" != typeof a) return d;
            if (1 !== (i = b.nodeType) && 9 !== i) return [];
            if (n && !e) {
                if (f = Z.exec(a))
                    if (h = f[1]) {
                        if (9 === i) {
                            if (g = b.getElementById(h), !g || !g.parentNode) return d;
                            if (g.id === h) return d.push(g), d
                        } else if (b.ownerDocument && (g = b.ownerDocument.getElementById(h)) && r(b, g) && g.id === h) return d.push(g), d
                    } else {
                        if (f[2]) return G.apply(d, b.getElementsByTagName(a)), d;
                        if ((h = f[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(h)), d
                    }
                if (c.qsa && (!o || !o.test(a))) {
                    if (q = p = s, u = b, v = 9 === i && a, 1 === i && "object" !== b.nodeName.toLowerCase()) {
                        m = ob(a), (p = b.getAttribute("id")) ? q = p.replace(_, "\\$&") : b.setAttribute("id", q), q = "[id='" + q + "'] ", j = m.length;
                        while (j--) m[j] = q + pb(m[j]);
                        u = $.test(a) && mb(b.parentNode) || b, v = m.join(",")
                    }
                    if (v) try {
                        return G.apply(d, u.querySelectorAll(v)), d
                    } catch (w) {} finally {
                        p || b.removeAttribute("id")
                    }
                }
            }
            return xb(a.replace(P, "$1"), b, d, e)
        }

        function eb() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }

        function fb(a) {
            return a[s] = !0, a
        }

        function gb(a) {
            var b = l.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function hb(a, b) {
            var c = a.split("|"),
                e = a.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function ib(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || B) - (~a.sourceIndex || B);
            if (d) return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function jb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function kb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function lb(a) {
            return fb(function(b) {
                return b = +b, fb(function(c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function mb(a) {
            return a && typeof a.getElementsByTagName !== A && a
        }
        c = db.support = {}, f = db.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, k = db.setDocument = function(a) {
            var b, e = a ? a.ownerDocument || a : t,
                g = e.defaultView;
            return e !== l && 9 === e.nodeType && e.documentElement ? (l = e, m = e.documentElement, n = !f(e), g && g !== g.top && (g.addEventListener ? g.addEventListener("unload", function() {
                k()
            }, !1) : g.attachEvent && g.attachEvent("onunload", function() {
                k()
            })), c.attributes = gb(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = gb(function(a) {
                return a.appendChild(e.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = Y.test(e.getElementsByClassName) && gb(function(a) {
                return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
            }), c.getById = gb(function(a) {
                return m.appendChild(a).id = s, !e.getElementsByName || !e.getElementsByName(s).length
            }), c.getById ? (d.find.ID = function(a, b) {
                if (typeof b.getElementById !== A && n) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(ab, bb);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(ab, bb);
                return function(a) {
                    var c = typeof a.getAttributeNode !== A && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return typeof b.getElementsByTagName !== A ? b.getElementsByTagName(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return typeof b.getElementsByClassName !== A && n ? b.getElementsByClassName(a) : void 0
            }, p = [], o = [], (c.qsa = Y.test(e.querySelectorAll)) && (gb(function(a) {
                a.innerHTML = "<select t=''><option selected=''></option></select>", a.querySelectorAll("[t^='']").length && o.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || o.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll(":checked").length || o.push(":checked")
            }), gb(function(a) {
                var b = e.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && o.push("name" + K + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || o.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), o.push(",.*:")
            })), (c.matchesSelector = Y.test(q = m.webkitMatchesSelector || m.mozMatchesSelector || m.oMatchesSelector || m.msMatchesSelector)) && gb(function(a) {
                c.disconnectedMatch = q.call(a, "div"), q.call(a, "[s!='']:x"), p.push("!=", O)
            }), o = o.length && new RegExp(o.join("|")), p = p.length && new RegExp(p.join("|")), b = Y.test(m.compareDocumentPosition), r = b || Y.test(m.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1
            }, z = b ? function(a, b) {
                if (a === b) return j = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === t && r(t, a) ? -1 : b === e || b.ownerDocument === t && r(t, b) ? 1 : i ? I.call(i, a) - I.call(i, b) : 0 : 4 & d ? -1 : 1)
            } : function(a, b) {
                if (a === b) return j = !0, 0;
                var c, d = 0,
                    f = a.parentNode,
                    g = b.parentNode,
                    h = [a],
                    k = [b];
                if (!f || !g) return a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : i ? I.call(i, a) - I.call(i, b) : 0;
                if (f === g) return ib(a, b);
                c = a;
                while (c = c.parentNode) h.unshift(c);
                c = b;
                while (c = c.parentNode) k.unshift(c);
                while (h[d] === k[d]) d++;
                return d ? ib(h[d], k[d]) : h[d] === t ? -1 : k[d] === t ? 1 : 0
            }, e) : l
        }, db.matches = function(a, b) {
            return db(a, null, null, b)
        }, db.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== l && k(a), b = b.replace(S, "='$1']"), !(!c.matchesSelector || !n || p && p.test(b) || o && o.test(b))) try {
                var d = q.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return db(b, l, null, [a]).length > 0
        }, db.contains = function(a, b) {
            return (a.ownerDocument || a) !== l && k(a), r(a, b)
        }, db.attr = function(a, b) {
            (a.ownerDocument || a) !== l && k(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !n) : void 0;
            return void 0 !== f ? f : c.attributes || !n ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, db.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, db.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (j = !c.detectDuplicates, i = !c.sortStable && a.slice(0), a.sort(z), j) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return i = null, a
        }, e = db.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else
                while (b = a[d++]) c += e(b);
            return c
        }, d = db.selectors = {
            cacheLength: 50,
            createPseudo: fb,
            match: V,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(ab, bb), a[3] = (a[4] || a[5] || "").replace(ab, bb), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || db.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && db.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[5] && a[2];
                    return V.CHILD.test(a[0]) ? null : (a[3] && void 0 !== a[4] ? a[2] = a[4] : c && T.test(c) && (b = ob(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ab, bb).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = w[a + " "];
                    return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && w(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== A && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = db.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            t = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p])
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && t) {
                                k = q[s] || (q[s] = {}), j = k[a] || [], n = j[0] === u && j[1], m = j[0] === u && j[2], l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [u, n, m];
                                        break
                                    }
                            } else if (t && (j = (b[s] || (b[s] = {}))[a]) && j[0] === u) m = j[1];
                            else
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (t && ((l[s] || (l[s] = {}))[a] = [u, m]), l === b)) break; return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || db.error("unsupported pseudo: " + a);
                    return e[s] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? fb(function(a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) d = I.call(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: fb(function(a) {
                    var b = [],
                        c = [],
                        d = g(a.replace(P, "$1"));
                    return d[s] ? fb(function(a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), !c.pop()
                    }
                }),
                has: fb(function(a) {
                    return function(b) {
                        return db(a, b).length > 0
                    }
                }),
                contains: fb(function(a) {
                    return function(b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                    }
                }),
                lang: fb(function(a) {
                    return U.test(a || "") || db.error("unsupported lang: " + a), a = a.replace(ab, bb).toLowerCase(),
                    function(b) {
                        var c;
                        do
                            if (c = n ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === m
                },
                focus: function(a) {
                    return a === l.activeElement && (!l.hasFocus || l.hasFocus()) && !! (a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !! a.checked || "option" === b && !! a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return X.test(a.nodeName)
                },
                input: function(a) {
                    return W.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: lb(function() {
                    return [0]
                }),
                last: lb(function(a, b) {
                    return [b - 1]
                }),
                eq: lb(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: lb(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: lb(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: lb(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: lb(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) d.pseudos[b] = jb(b);
        for (b in {
            submit: !0,
            reset: !0
        }) d.pseudos[b] = kb(b);

        function nb() {}
        nb.prototype = d.filters = d.pseudos, d.setFilters = new nb;

        function ob(a, b) {
            var c, e, f, g, h, i, j, k = x[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = Q.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(P, " ")
                }), h = h.slice(c.length));
                for (g in d.filter)!(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? db.error(a) : x(a, i).slice(0)
        }

        function pb(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function qb(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = v++;
            return b.first ? function(b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j = [u, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (i = b[s] || (b[s] = {}), (h = i[d]) && h[0] === u && h[1] === f) return j[2] = h[2];
                            if (i[d] = j, j[2] = a(b, c, g)) return !0
                        }
            }
        }

        function rb(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function sb(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function tb(a, b, c, d, e, f) {
            return d && !d[s] && (d = tb(d)), e && !e[s] && (e = tb(e, f)), fb(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || wb(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : sb(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = sb(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? I.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = sb(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r)
            })
        }

        function ub(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], i = g || d.relative[" "], j = g ? 1 : 0, k = qb(function(a) {
                    return a === b
                }, i, !0), l = qb(function(a) {
                    return I.call(b, a) > -1
                }, i, !0), m = [

                    function(a, c, d) {
                        return !g && (d || c !== h) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d))
                    }
                ]; f > j; j++)
                if (c = d.relative[a[j].type]) m = [qb(rb(m), c)];
                else {
                    if (c = d.filter[a[j].type].apply(null, a[j].matches), c[s]) {
                        for (e = ++j; f > e; e++)
                            if (d.relative[a[e].type]) break;
                        return tb(j > 1 && rb(m), j > 1 && pb(a.slice(0, j - 1).concat({
                            value: " " === a[j - 2].type ? "*" : ""
                        })).replace(P, "$1"), c, e > j && ub(a.slice(j, e)), f > e && ub(a = a.slice(e)), f > e && pb(a))
                    }
                    m.push(c)
                }
            return rb(m)
        }

        function vb(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, i, j, k) {
                    var m, n, o, p = 0,
                        q = "0",
                        r = f && [],
                        s = [],
                        t = h,
                        v = f || e && d.find.TAG("*", k),
                        w = u += null == t ? 1 : Math.random() || .1,
                        x = v.length;
                    for (k && (h = g !== l && g); q !== x && null != (m = v[q]); q++) {
                        if (e && m) {
                            n = 0;
                            while (o = a[n++])
                                if (o(m, g, i)) {
                                    j.push(m);
                                    break
                                }
                            k && (u = w)
                        }
                        c && ((m = !o && m) && p--, f && r.push(m))
                    }
                    if (p += q, c && q !== p) {
                        n = 0;
                        while (o = b[n++]) o(r, s, g, i);
                        if (f) {
                            if (p > 0)
                                while (q--) r[q] || s[q] || (s[q] = E.call(j));
                            s = sb(s)
                        }
                        G.apply(j, s), k && !f && s.length > 0 && p + b.length > 1 && db.uniqueSort(j)
                    }
                    return k && (u = w, h = t), r
                };
            return c ? fb(f) : f
        }
        g = db.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = y[a + " "];
            if (!f) {
                b || (b = ob(a)), c = b.length;
                while (c--) f = ub(b[c]), f[s] ? d.push(f) : e.push(f);
                f = y(a, vb(e, d))
            }
            return f
        };

        function wb(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) db(a, b[d], c);
            return c
        }

        function xb(a, b, e, f) {
            var h, i, j, k, l, m = ob(a);
            if (!f && 1 === m.length) {
                if (i = m[0] = m[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && c.getById && 9 === b.nodeType && n && d.relative[i[1].type]) {
                    if (b = (d.find.ID(j.matches[0].replace(ab, bb), b) || [])[0], !b) return e;
                    a = a.slice(i.shift().value.length)
                }
                h = V.needsContext.test(a) ? 0 : i.length;
                while (h--) {
                    if (j = i[h], d.relative[k = j.type]) break;
                    if ((l = d.find[k]) && (f = l(j.matches[0].replace(ab, bb), $.test(i[0].type) && mb(b.parentNode) || b))) {
                        if (i.splice(h, 1), a = f.length && pb(i), !a) return G.apply(e, f), e;
                        break
                    }
                }
            }
            return g(a, m)(f, b, !n, e, $.test(a) && mb(b.parentNode) || b), e
        }
        return c.sortStable = s.split("").sort(z).join("") === s, c.detectDuplicates = !! j, k(), c.sortDetached = gb(function(a) {
            return 1 & a.compareDocumentPosition(l.createElement("div"))
        }), gb(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || hb("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && gb(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || hb("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), gb(function(a) {
            return null == a.getAttribute("disabled")
        }) || hb(J, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), db
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = n.expr.match.needsContext,
        v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        w = /^.[^:#\[\.,]*$/;

    function x(a, b, c) {
        if (n.isFunction(b)) return n.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return n.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (w.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function(a) {
            return n.inArray(a, b) >= 0 !== c
        })
    }
    n.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, n.fn.extend({
        find: function(a) {
            var b, c = [],
                d = this,
                e = d.length;
            if ("string" != typeof a) return this.pushStack(n(a).filter(function() {
                for (b = 0; e > b; b++)
                    if (n.contains(d[b], this)) return !0
            }));
            for (b = 0; e > b; b++) n.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? n.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        },
        filter: function(a) {
            return this.pushStack(x(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(x(this, a || [], !0))
        },
        is: function(a) {
            return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length
        }
    });
    var y, z = a.document,
        A = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        B = n.fn.init = function(a, b) {
            var c, d;
            if (!a) return this;
            if ("string" == typeof a) {
                if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : A.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
                if (c[1]) {
                    if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : z, !0)), v.test(c[1]) && n.isPlainObject(b))
                        for (c in b) n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                    return this
                }
                if (d = z.getElementById(c[2]), d && d.parentNode) {
                    if (d.id !== c[2]) return y.find(a);
                    this.length = 1, this[0] = d
                }
                return this.context = z, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
        };
    B.prototype = n.fn, y = n(z);
    var C = /^(?:parents|prev(?:Until|All))/,
        D = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    n.extend({
        dir: function(a, b, c) {
            var d = [],
                e = a[b];
            while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !n(e).is(c))) 1 === e.nodeType && d.push(e), e = e[b];
            return d
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), n.fn.extend({
        has: function(a) {
            var b, c = n(a, this),
                d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++)
                    if (n.contains(this, c[b])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? n.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(n.unique(n.merge(this.get(), n(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function E(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a
    }
    n.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return n.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return n.dir(a, "parentNode", c)
        },
        next: function(a) {
            return E(a, "nextSibling")
        },
        prev: function(a) {
            return E(a, "previousSibling")
        },
        nextAll: function(a) {
            return n.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return n.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return n.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return n.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return n.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return n.sibling(a.firstChild)
        },
        contents: function(a) {
            return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes)
        }
    }, function(a, b) {
        n.fn[a] = function(c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (D[a] || (e = n.unique(e)), C.test(a) && (e = e.reverse())), this.pushStack(e)
        }
    });
    var F = /\S+/g,
        G = {};

    function H(a) {
        var b = G[a] = {};
        return n.each(a.match(F) || [], function(a, c) {
            b[c] = !0
        }), b
    }
    n.Callbacks = function(a) {
        a = "string" == typeof a ? G[a] || H(a) : n.extend({}, a);
        var b, c, d, e, f, g, h = [],
            i = !a.once && [],
            j = function(l) {
                for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++)
                    if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                        c = !1;
                        break
                    }
                b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable())
            }, k = {
                add: function() {
                    if (h) {
                        var d = h.length;
                        ! function f(b) {
                            n.each(b, function(b, c) {
                                var d = n.type(c);
                                "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c)
                            })
                        }(arguments), b ? e = h.length : c && (g = d, j(c))
                    }
                    return this
                },
                remove: function() {
                    return h && n.each(arguments, function(a, c) {
                        var d;
                        while ((d = n.inArray(c, h, d)) > -1) h.splice(d, 1), b && (e >= d && e--, f >= d && f--)
                    }), this
                },
                has: function(a) {
                    return a ? n.inArray(a, h) > -1 : !(!h || !h.length)
                },
                empty: function() {
                    return h = [], e = 0, this
                },
                disable: function() {
                    return h = i = c = void 0, this
                },
                disabled: function() {
                    return !h
                },
                lock: function() {
                    return i = void 0, c || k.disable(), this
                },
                locked: function() {
                    return !i
                },
                fireWith: function(a, c) {
                    return !h || d && !i || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? i.push(c) : j(c)), this
                },
                fire: function() {
                    return k.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!d
                }
            };
        return k
    }, n.extend({
        Deferred: function(a) {
            var b = [
                ["resolve", "done", n.Callbacks("once memory"), "resolved"],
                ["reject", "fail", n.Callbacks("once memory"), "rejected"],
                ["notify", "progress", n.Callbacks("memory")]
            ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return n.Deferred(function(c) {
                            n.each(b, function(b, f) {
                                var g = n.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? n.extend(a, d) : d
                    }
                }, e = {};
            return d.pipe = d.then, n.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b = 0,
                c = d.call(arguments),
                e = c.length,
                f = 1 !== e || a && n.isFunction(a.promise) ? e : 0,
                g = 1 === f ? a : n.Deferred(),
                h = function(a, b, c) {
                    return function(e) {
                        b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                }, i, j, k;
            if (e > 1)
                for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var I;
    n.fn.ready = function(a) {
        return n.ready.promise().done(a), this
    }, n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? n.readyWait++ : n.ready(!0)
        },
        ready: function(a) {
            if (a === !0 ? !--n.readyWait : !n.isReady) {
                if (!z.body) return setTimeout(n.ready);
                n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(z, [n]), n.fn.trigger && n(z).trigger("ready").off("ready"))
            }
        }
    });

    function J() {
        z.addEventListener ? (z.removeEventListener("DOMContentLoaded", K, !1), a.removeEventListener("load", K, !1)) : (z.detachEvent("onreadystatechange", K), a.detachEvent("onload", K))
    }

    function K() {
        (z.addEventListener || "load" === event.type || "complete" === z.readyState) && (J(), n.ready())
    }
    n.ready.promise = function(b) {
        if (!I)
            if (I = n.Deferred(), "complete" === z.readyState) setTimeout(n.ready);
            else
        if (z.addEventListener) z.addEventListener("DOMContentLoaded", K, !1), a.addEventListener("load", K, !1);
        else {
            z.attachEvent("onreadystatechange", K), a.attachEvent("onload", K);
            var c = !1;
            try {
                c = null == a.frameElement && z.documentElement
            } catch (d) {}
            c && c.doScroll && ! function e() {
                if (!n.isReady) {
                    try {
                        c.doScroll("left")
                    } catch (a) {
                        return setTimeout(e, 50)
                    }
                    J(), n.ready()
                }
            }()
        }
        return I.promise(b)
    };
    var L = "undefined",
        M;
    for (M in n(l)) break;
    l.ownLast = "0" !== M, l.inlineBlockNeedsLayout = !1, n(function() {
        var a, b, c = z.getElementsByTagName("body")[0];
        c && (a = z.createElement("div"), a.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", b = z.createElement("div"), c.appendChild(a).appendChild(b), typeof b.style.zoom !== L && (b.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1", (l.inlineBlockNeedsLayout = 3 === b.offsetWidth) && (c.style.zoom = 1)), c.removeChild(a), a = b = null)
    }),
    function() {
        var a = z.createElement("div");
        if (null == l.deleteExpando) {
            l.deleteExpando = !0;
            try {
                delete a.test
            } catch (b) {
                l.deleteExpando = !1
            }
        }
        a = null
    }(), n.acceptData = function(a) {
        var b = n.noData[(a.nodeName + " ").toLowerCase()],
            c = +a.nodeType || 1;
        return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
    };
    var N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        O = /([A-Z])/g;

    function P(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(O, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
                } catch (e) {}
                n.data(a, b, c)
            } else c = void 0
        }
        return c
    }

    function Q(a) {
        var b;
        for (b in a)
            if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0
    }

    function R(a, b, d, e) {
        if (n.acceptData(a)) {
            var f, g, h = n.expando,
                i = a.nodeType,
                j = i ? n.cache : a,
                k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || n.guid++ : h), j[k] || (j[k] = i ? {} : {
                toJSON: n.noop
            }), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = n.extend(j[k], b) : j[k].data = n.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[n.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[n.camelCase(b)])) : f = g, f
        }
    }

    function S(a, b, c) {
        if (n.acceptData(a)) {
            var d, e, f = a.nodeType,
                g = f ? n.cache : a,
                h = f ? a[n.expando] : n.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in d ? b = [b] : (b = n.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                    while (e--) delete d[b[e]];
                    if (c ? !Q(d) : !n.isEmptyObject(d)) return
                }(c || (delete g[h].data, Q(g[h]))) && (f ? n.cleanData([a], !0) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
            }
        }
    }
    n.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(a) {
            return a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando], !! a && !Q(a)
        },
        data: function(a, b, c) {
            return R(a, b, c)
        },
        removeData: function(a, b) {
            return S(a, b)
        },
        _data: function(a, b, c) {
            return R(a, b, c, !0)
        },
        _removeData: function(a, b) {
            return S(a, b, !0)
        }
    }), n.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = n.data(f), 1 === f.nodeType && !n._data(f, "parsedAttrs"))) {
                    c = g.length;
                    while (c--) d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d]));
                    n._data(f, "parsedAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                n.data(this, a)
            }) : arguments.length > 1 ? this.each(function() {
                n.data(this, a, b)
            }) : f ? P(f, a, n.data(f, a)) : void 0
        },
        removeData: function(a) {
            return this.each(function() {
                n.removeData(this, a)
            })
        }
    }), n.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = n._data(a, b), c && (!d || n.isArray(c) ? d = n._data(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = n.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = n._queueHooks(a, b),
                g = function() {
                    n.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return n._data(a, c) || n._data(a, c, {
                empty: n.Callbacks("once memory").add(function() {
                    n._removeData(a, b + "queue"), n._removeData(a, c)
                })
            })
        }
    }), n.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                n.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
                e = n.Deferred(),
                f = this,
                g = this.length,
                h = function() {
                    --d || e.resolveWith(f, [f])
                };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = n._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        U = ["Top", "Right", "Bottom", "Left"],
        V = function(a, b) {
            return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
        }, W = n.access = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === n.type(c)) {
                e = !0;
                for (h in c) n.access(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                return j.call(n(a), c)
            })), b))
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        }, X = /^(?:checkbox|radio)$/i;
    ! function() {
        var a = z.createDocumentFragment(),
            b = z.createElement("div"),
            c = z.createElement("input");
        if (b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a>", l.leadingWhitespace = 3 === b.firstChild.nodeType, l.tbody = !b.getElementsByTagName("tbody").length, l.htmlSerialize = !! b.getElementsByTagName("link").length, l.html5Clone = "<:nav></:nav>" !== z.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, a.appendChild(c), l.appendChecked = c.checked, b.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !! b.cloneNode(!0).lastChild.defaultValue, a.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, l.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function() {
            l.noCloneEvent = !1
        }), b.cloneNode(!0).click()), null == l.deleteExpando) {
            l.deleteExpando = !0;
            try {
                delete b.test
            } catch (d) {
                l.deleteExpando = !1
            }
        }
        a = b = c = null
    }(),
    function() {
        var b, c, d = z.createElement("div");
        for (b in {
            submit: !0,
            change: !0,
            focusin: !0
        }) c = "on" + b, (l[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), l[b + "Bubbles"] = d.attributes[c].expando === !1);
        d = null
    }();
    var Y = /^(?:input|select|textarea)$/i,
        Z = /^key/,
        $ = /^(?:mouse|contextmenu)|click/,
        _ = /^(?:focusinfocus|focusoutblur)$/,
        ab = /^([^.]*)(?:\.(.+)|)$/;

    function bb() {
        return !0
    }

    function cb() {
        return !1
    }

    function db() {
        try {
            return z.activeElement
        } catch (a) {}
    }
    n.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n._data(a);
            if (r) {
                c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = n.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function(a) {
                    return typeof n === L || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments)
                }, k.elem = a), b = (b || "").match(F) || [""], h = b.length;
                while (h--) f = ab.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = n.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = n.event.special[o] || {}, l = n.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && n.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, i), (m = g[o]) || (m = g[o] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), n.event.global[o] = !0);
                a = null
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n.hasData(a) && n._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(F) || [""], j = b.length;
                while (j--)
                    if (h = ab.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length;
                        while (f--) g = m[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                        i && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete k[o])
                    } else
                        for (o in k) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, k, l, m, o = [d || z],
                p = j.call(b, "type") ? b.type : b,
                q = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = l = d = d || z, 3 !== d.nodeType && 8 !== d.nodeType && !_.test(p + n.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[n.expando] ? b : new n.Event(p, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), k = n.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
                if (!e && !k.noBubble && !n.isWindow(d)) {
                    for (i = k.delegateType || p, _.test(i + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), l = h;
                    l === (d.ownerDocument || z) && o.push(l.defaultView || l.parentWindow || a)
                }
                m = 0;
                while ((h = o[m++]) && !b.isPropagationStopped()) b.type = m > 1 ? i : k.bindType || p, f = (n._data(h, "events") || {})[b.type] && n._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && n.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
                if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && n.acceptData(d) && g && d[p] && !n.isWindow(d)) {
                    l = d[g], l && (d[g] = null), n.event.triggered = p;
                    try {
                        d[p]()
                    } catch (r) {}
                    n.event.triggered = void 0, l && (d[g] = l)
                }
                return b.result
            }
        },
        dispatch: function(a) {
            a = n.event.fix(a);
            var b, c, e, f, g, h = [],
                i = d.call(arguments),
                j = (n._data(this, "events") || {})[a.type] || [],
                k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, g = 0;
                    while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped())(!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, c = ((n.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (e = [], f = 0; h > f; f++) d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? n(c, this).index(i) >= 0 : n.find(c, this, null, [i]).length), e[c] && e.push(d);
                        e.length && g.push({
                            elem: i,
                            handlers: e
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        fix: function(a) {
            if (a[n.expando]) return a;
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = $.test(e) ? this.mouseHooks : Z.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;
            while (b--) c = d[b], a[c] = f[c];
            return a.target || (a.target = f.srcElement || z), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !! a.metaKey, g.filter ? g.filter(a, f) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button,
                    g = b.fromElement;
                return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || z, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== db() && this.focus) try {
                        return this.focus(), !1
                    } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === db() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return n.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return n.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = n.extend(new n.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, n.removeEvent = z.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === L && (a[d] = null), a.detachEvent(d, c))
    }, n.Event = function(a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && (a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault()) ? bb : cb) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
    }, n.Event.prototype = {
        isDefaultPrevented: cb,
        isPropagationStopped: cb,
        isImmediatePropagationStopped: cb,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = bb, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = bb, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = bb, this.stopPropagation()
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), l.submitBubbles || (n.event.special.submit = {
        setup: function() {
            return n.nodeName(this, "form") ? !1 : void n.event.add(this, "click._submit keypress._submit", function(a) {
                var b = a.target,
                    c = n.nodeName(b, "input") || n.nodeName(b, "button") ? b.form : void 0;
                c && !n._data(c, "submitBubbles") && (n.event.add(c, "submit._submit", function(a) {
                    a._submit_bubble = !0
                }), n._data(c, "submitBubbles", !0))
            })
        },
        postDispatch: function(a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function() {
            return n.nodeName(this, "form") ? !1 : void n.event.remove(this, "._submit")
        }
    }), l.changeBubbles || (n.event.special.change = {
        setup: function() {
            return Y.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (n.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
            }), n.event.add(this, "click._change", function(a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1), n.event.simulate("change", this, a, !0)
            })), !1) : void n.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                Y.test(b.nodeName) && !n._data(b, "changeBubbles") && (n.event.add(b, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a, !0)
                }), n._data(b, "changeBubbles", !0))
            })
        },
        handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return n.event.remove(this, "._change"), !Y.test(this.nodeName)
        }
    }), l.focusinBubbles || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            n.event.simulate(b, a.target, n.event.fix(a), !0)
        };
        n.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = n._data(d, b);
                e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = n._data(d, b) - 1;
                e ? n._data(d, b, e) : (d.removeEventListener(a, c, !0), n._removeData(d, b))
            }
        }
    }), n.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (f in a) this.on(f, b, c, a[f], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = cb;
            else if (!d) return this;
            return 1 === e && (g = d, d = function(a) {
                return n().off(a), g.apply(this, arguments)
            }, d.guid = g.guid || (g.guid = n.guid++)), this.each(function() {
                n.event.add(this, a, d, c, b)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = cb), this.each(function() {
                n.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                n.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    });

    function eb(a) {
        var b = fb.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length) c.createElement(b.pop());
        return c
    }
    var fb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        gb = / jQuery\d+="(?:null|\d+)"/g,
        hb = new RegExp("<(?:" + fb + ")[\\s/>]", "i"),
        ib = /^\s+/,
        jb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        kb = /<([\w:]+)/,
        lb = /<tbody/i,
        mb = /<|&#?\w+;/,
        nb = /<(?:script|style|link)/i,
        ob = /checked\s*(?:[^=]|=\s*.checked.)/i,
        pb = /^$|\/(?:java|ecma)script/i,
        qb = /^true\/(.*)/,
        rb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        sb = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        }, tb = eb(z),
        ub = tb.appendChild(z.createElement("div"));
    sb.optgroup = sb.option, sb.tbody = sb.tfoot = sb.colgroup = sb.caption = sb.thead, sb.th = sb.td;

    function vb(a, b) {
        var c, d, e = 0,
            f = typeof a.getElementsByTagName !== L ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== L ? a.querySelectorAll(b || "*") : void 0;
        if (!f)
            for (f = [], c = a.childNodes || a; null != (d = c[e]); e++)!b || n.nodeName(d, b) ? f.push(d) : n.merge(f, vb(d, b));
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f
    }

    function wb(a) {
        X.test(a.type) && (a.defaultChecked = a.checked)
    }

    function xb(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function yb(a) {
        return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type, a
    }

    function zb(a) {
        var b = qb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function Ab(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) n._data(c, "globalEval", !b || n._data(b[d], "globalEval"))
    }

    function Bb(a, b) {
        if (1 === b.nodeType && n.hasData(a)) {
            var c, d, e, f = n._data(a),
                g = n._data(b, f),
                h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h)
                    for (d = 0, e = h[c].length; e > d; d++) n.event.add(b, c, h[c][d])
            }
            g.data && (g.data = n.extend({}, g.data))
        }
    }

    function Cb(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !l.noCloneEvent && b[n.expando]) {
                e = n._data(b);
                for (d in e.events) n.removeEvent(b, d, e.handle);
                b.removeAttribute(n.expando)
            }
            "script" === c && b.text !== a.text ? (yb(b).text = a.text, zb(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), l.html5Clone && a.innerHTML && !n.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && X.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }
    }
    n.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h, i = n.contains(a.ownerDocument, a);
            if (l.html5Clone || n.isXMLDoc(a) || !hb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (ub.innerHTML = a.outerHTML, ub.removeChild(f = ub.firstChild)), !(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                for (d = vb(f), h = vb(a), g = 0; null != (e = h[g]); ++g) d[g] && Cb(e, d[g]);
            if (b)
                if (c)
                    for (h = h || vb(a), d = d || vb(f), g = 0; null != (e = h[g]); g++) Bb(e, d[g]);
                else Bb(a, f);
            return d = vb(f, "script"), d.length > 0 && Ab(d, !i && vb(a, "script")), d = h = e = null, f
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k, m = a.length, o = eb(b), p = [], q = 0; m > q; q++)
                if (f = a[q], f || 0 === f)
                    if ("object" === n.type(f)) n.merge(p, f.nodeType ? [f] : f);
                    else
            if (mb.test(f)) {
                h = h || o.appendChild(b.createElement("div")), i = (kb.exec(f) || ["", ""])[1].toLowerCase(), k = sb[i] || sb._default, h.innerHTML = k[1] + f.replace(jb, "<$1></$2>") + k[2], e = k[0];
                while (e--) h = h.lastChild;
                if (!l.leadingWhitespace && ib.test(f) && p.push(b.createTextNode(ib.exec(f)[0])), !l.tbody) {
                    f = "table" !== i || lb.test(f) ? "<table>" !== k[1] || lb.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length;
                    while (e--) n.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j)
                }
                n.merge(p, h.childNodes), h.textContent = "";
                while (h.firstChild) h.removeChild(h.firstChild);
                h = o.lastChild
            } else p.push(b.createTextNode(f));
            h && o.removeChild(h), l.appendChecked || n.grep(vb(p, "input"), wb), q = 0;
            while (f = p[q++])
                if ((!d || -1 === n.inArray(f, d)) && (g = n.contains(f.ownerDocument, f), h = vb(o.appendChild(f), "script"), g && Ab(h), c)) {
                    e = 0;
                    while (f = h[e++]) pb.test(f.type || "") && c.push(f)
                }
            return h = null, o
        },
        cleanData: function(a, b) {
            for (var d, e, f, g, h = 0, i = n.expando, j = n.cache, k = l.deleteExpando, m = n.event.special; null != (d = a[h]); h++)
                if ((b || n.acceptData(d)) && (f = d[i], g = f && j[f])) {
                    if (g.events)
                        for (e in g.events) m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
                    j[f] && (delete j[f], k ? delete d[i] : typeof d.removeAttribute !== L ? d.removeAttribute(i) : d[i] = null, c.push(f))
                }
        }
    }), n.fn.extend({
        text: function(a) {
            return W(this, function(a) {
                return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || z).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = xb(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = xb(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || n.cleanData(vb(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && Ab(vb(c, "script")), c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && n.cleanData(vb(a, !1));
                while (a.firstChild) a.removeChild(a.firstChild);
                a.options && n.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return n.clone(this, a, b)
            })
        },
        html: function(a) {
            return W(this, function(a) {
                var b = this[0] || {}, c = 0,
                    d = this.length;
                if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(gb, "") : void 0;
                if (!("string" != typeof a || nb.test(a) || !l.htmlSerialize && hb.test(a) || !l.leadingWhitespace && ib.test(a) || sb[(kb.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(jb, "<$1></$2>");
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(vb(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode, n.cleanData(vb(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0,
                k = this.length,
                m = this,
                o = k - 1,
                p = a[0],
                q = n.isFunction(p);
            if (q || k > 1 && "string" == typeof p && !l.checkClone && ob.test(p)) return this.each(function(c) {
                var d = m.eq(c);
                q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
            });
            if (k && (i = n.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 === i.childNodes.length && (i = c), c)) {
                for (g = n.map(vb(i, "script"), yb), f = g.length; k > j; j++) d = i, j !== o && (d = n.clone(d, !0, !0), f && n.merge(g, vb(d, "script"))), b.call(this[j], d, j);
                if (f)
                    for (h = g[g.length - 1].ownerDocument, n.map(g, zb), j = 0; f > j; j++) d = g[j], pb.test(d.type || "") && !n._data(d, "globalEval") && n.contains(h, d) && (d.src ? n._evalUrl && n._evalUrl(d.src) : n.globalEval((d.text || d.textContent || d.innerHTML || "").replace(rb, "")));
                i = c = null
            }
            return this
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        n.fn[a] = function(a) {
            for (var c, d = 0, e = [], g = n(a), h = g.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), n(g[d])[b](c), f.apply(e, c.get());
            return this.pushStack(e)
        }
    });
    var Db, Eb = {};

    function Fb(b, c) {
        var d = n(c.createElement(b)).appendTo(c.body),
            e = a.getDefaultComputedStyle ? a.getDefaultComputedStyle(d[0]).display : n.css(d[0], "display");
        return d.detach(), e
    }

    function Gb(a) {
        var b = z,
            c = Eb[a];
        return c || (c = Fb(a, b), "none" !== c && c || (Db = (Db || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Db[0].contentWindow || Db[0].contentDocument).document, b.write(), b.close(), c = Fb(a, b), Db.detach()), Eb[a] = c), c
    }! function() {
        var a, b, c = z.createElement("div"),
            d = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], a.style.cssText = "float:left;opacity:.5", l.opacity = /^0.5/.test(a.style.opacity), l.cssFloat = !! a.style.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === c.style.backgroundClip, a = c = null, l.shrinkWrapBlocks = function() {
            var a, c, e, f;
            if (null == b) {
                if (a = z.getElementsByTagName("body")[0], !a) return;
                f = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", c = z.createElement("div"), e = z.createElement("div"), a.appendChild(c).appendChild(e), b = !1, typeof e.style.zoom !== L && (e.style.cssText = d + ";width:1px;padding:1px;zoom:1", e.innerHTML = "<div></div>", e.firstChild.style.width = "5px", b = 3 !== e.offsetWidth), a.removeChild(c), a = c = e = null
            }
            return b
        }
    }();
    var Hb = /^margin/,
        Ib = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"),
        Jb, Kb, Lb = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Jb = function(a) {
        return a.ownerDocument.defaultView.getComputedStyle(a, null)
    }, Kb = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Jb(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), Ib.test(g) && Hb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + ""
    }) : z.documentElement.currentStyle && (Jb = function(a) {
        return a.currentStyle
    }, Kb = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Jb(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Ib.test(g) && !Lb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
    });

    function Mb(a, b) {
        return {
            get: function() {
                var c = a();
                if (null != c) return c ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }! function() {
        var b, c, d, e, f, g, h = z.createElement("div"),
            i = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
            j = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        h.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", b = h.getElementsByTagName("a")[0], b.style.cssText = "float:left;opacity:.5", l.opacity = /^0.5/.test(b.style.opacity), l.cssFloat = !! b.style.cssFloat, h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === h.style.backgroundClip, b = h = null, n.extend(l, {
            reliableHiddenOffsets: function() {
                if (null != c) return c;
                var a, b, d, e = z.createElement("div"),
                    f = z.getElementsByTagName("body")[0];
                if (f) return e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = z.createElement("div"), a.style.cssText = i, f.appendChild(a).appendChild(e), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", b = e.getElementsByTagName("td"), b[0].style.cssText = "padding:0;margin:0;border:0;display:none", d = 0 === b[0].offsetHeight, b[0].style.display = "", b[1].style.display = "none", c = d && 0 === b[0].offsetHeight, f.removeChild(a), e = f = null, c
            },
            boxSizing: function() {
                return null == d && k(), d
            },
            boxSizingReliable: function() {
                return null == e && k(), e
            },
            pixelPosition: function() {
                return null == f && k(), f
            },
            reliableMarginRight: function() {
                var b, c, d, e;
                if (null == g && a.getComputedStyle) {
                    if (b = z.getElementsByTagName("body")[0], !b) return;
                    c = z.createElement("div"), d = z.createElement("div"), c.style.cssText = i, b.appendChild(c).appendChild(d), e = d.appendChild(z.createElement("div")), e.style.cssText = d.style.cssText = j, e.style.marginRight = e.style.width = "0", d.style.width = "1px", g = !parseFloat((a.getComputedStyle(e, null) || {}).marginRight), b.removeChild(c)
                }
                return g
            }
        });

        function k() {
            var b, c, h = z.getElementsByTagName("body")[0];
            h && (b = z.createElement("div"), c = z.createElement("div"), b.style.cssText = i, h.appendChild(b).appendChild(c), c.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%", n.swap(h, null != h.style.zoom ? {
                zoom: 1
            } : {}, function() {
                d = 4 === c.offsetWidth
            }), e = !0, f = !1, g = !0, a.getComputedStyle && (f = "1%" !== (a.getComputedStyle(c, null) || {}).top, e = "4px" === (a.getComputedStyle(c, null) || {
                width: "4px"
            }).width), h.removeChild(b), c = h = null)
        }
    }(), n.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e
    };
    var Nb = /alpha\([^)]*\)/i,
        Ob = /opacity\s*=\s*([^)]*)/,
        Pb = /^(none|table(?!-c[ea]).+)/,
        Qb = new RegExp("^(" + T + ")(.*)$", "i"),
        Rb = new RegExp("^([+-])=(" + T + ")", "i"),
        Sb = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, Tb = {
            letterSpacing: 0,
            fontWeight: 400
        }, Ub = ["Webkit", "O", "Moz", "ms"];

    function Vb(a, b) {
        if (b in a) return b;
        var c = b.charAt(0).toUpperCase() + b.slice(1),
            d = b,
            e = Ub.length;
        while (e--)
            if (b = Ub[e] + c, b in a) return b;
        return d
    }

    function Wb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = n._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && V(d) && (f[g] = n._data(d, "olddisplay", Gb(d.nodeName)))) : f[g] || (e = V(d), (c && "none" !== c || !e) && n._data(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function Xb(a, b, c) {
        var d = Qb.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function Yb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + U[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e))) : (g += n.css(a, "padding" + U[f], !0, e), "padding" !== c && (g += n.css(a, "border" + U[f] + "Width", !0, e)));
        return g
    }

    function Zb(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Jb(a),
            g = l.boxSizing() && "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Kb(a, b, f), (0 > e || null == e) && (e = a.style[b]), Ib.test(e)) return e;
            d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Yb(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Kb(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": l.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b),
                    i = a.style;
                if (b = n.cssProps[h] || (n.cssProps[h] = Vb(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c, "string" === f && (e = Rb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
                    i[b] = "", i[b] = c
                } catch (j) {}
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = Vb(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Kb(a, b, d)), "normal" === f && b in Tb && (f = Tb[b]), "" === c || c ? (e = parseFloat(f), c === !0 || n.isNumeric(e) ? e || 0 : f) : f
        }
    }), n.each(["height", "width"], function(a, b) {
        n.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? 0 === a.offsetWidth && Pb.test(n.css(a, "display")) ? n.swap(a, Sb, function() {
                    return Zb(a, b, d)
                }) : Zb(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && Jb(a);
                return Xb(a, c, d ? Yb(a, b, d, l.boxSizing() && "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), l.opacity || (n.cssHooks.opacity = {
        get: function(a, b) {
            return Ob.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === n.trim(f.replace(Nb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Nb.test(f) ? f.replace(Nb, e) : f + " " + e)
        }
    }), n.cssHooks.marginRight = Mb(l.reliableMarginRight, function(a, b) {
        return b ? n.swap(a, {
            display: "inline-block"
        }, Kb, [a, "marginRight"]) : void 0
    }), n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        n.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + U[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Hb.test(a) || (n.cssHooks[a + b].set = Xb)
    }), n.fn.extend({
        css: function(a, b) {
            return W(this, function(a, b, c) {
                var d, e, f = {}, g = 0;
                if (n.isArray(b)) {
                    for (d = Jb(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return Wb(this, !0)
        },
        hide: function() {
            return Wb(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                V(this) ? n(this).show() : n(this).hide()
            })
        }
    });

    function $b(a, b, c, d, e) {
        return new $b.prototype.init(a, b, c, d, e)
    }
    n.Tween = $b, $b.prototype = {
        constructor: $b,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = $b.propHooks[this.prop];
            return a && a.get ? a.get(this) : $b.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = $b.propHooks[this.prop];
            return this.pos = b = this.options.duration ? n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : $b.propHooks._default.set(this), this
        }
    }, $b.prototype.init.prototype = $b.prototype, $b.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, $b.propHooks.scrollTop = $b.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, n.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, n.fx = $b.prototype.init, n.fx.step = {};
    var _b, ac, bc = /^(?:toggle|show|hide)$/,
        cc = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"),
        dc = /queueHooks$/,
        ec = [jc],
        fc = {
            "*": [

                function(a, b) {
                    var c = this.createTween(a, b),
                        d = c.cur(),
                        e = cc.exec(b),
                        f = e && e[3] || (n.cssNumber[a] ? "" : "px"),
                        g = (n.cssNumber[a] || "px" !== f && +d) && cc.exec(n.css(c.elem, a)),
                        h = 1,
                        i = 20;
                    if (g && g[3] !== f) {
                        f = f || g[3], e = e || [], g = +d || 1;
                        do h = h || ".5", g /= h, n.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                    }
                    return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
                }
            ]
        };

    function gc() {
        return setTimeout(function() {
            _b = void 0
        }), _b = n.now()
    }

    function hc(a, b) {
        var c, d = {
                height: a
            }, e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = U[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function ic(a, b, c) {
        for (var d, e = (fc[b] || []).concat(fc["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function jc(a, b, c) {
        var d, e, f, g, h, i, j, k, m = this,
            o = {}, p = a.style,
            q = a.nodeType && V(a),
            r = n._data(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, m.always(function() {
            m.always(function() {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = n.css(a, "display"), k = Gb(a.nodeName), "none" === j && (j = k), "inline" === j && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== k ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", l.shrinkWrapBlocks() || m.always(function() {
            p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], bc.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                    if ("show" !== e || !r || void 0 === r[d]) continue;
                    q = !0
                }
                o[d] = r && r[d] || n.style(a, d)
            }
        if (!n.isEmptyObject(o)) {
            r ? "hidden" in r && (q = r.hidden) : r = n._data(a, "fxshow", {}), f && (r.hidden = !q), q ? n(a).show() : m.done(function() {
                n(a).hide()
            }), m.done(function() {
                var b;
                n._removeData(a, "fxshow");
                for (b in o) n.style(a, b, o[b])
            });
            for (d in o) g = ic(q ? r[d] : 0, d, m), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function kc(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function lc(a, b, c) {
        var d, e, f = 0,
            g = ec.length,
            h = n.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = _b || gc(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            }, j = h.promise({
                elem: a,
                props: n.extend({}, b),
                opts: n.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: _b || gc(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (kc(k, j.opts.specialEasing); g > f; f++)
            if (d = ec[f].call(j, a, k, j.opts)) return d;
        return n.map(k, ic, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    n.Animation = n.extend(lc, {
        tweener: function(a, b) {
            n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++) c = a[d], fc[c] = fc[c] || [], fc[c].unshift(b)
        },
        prefilter: function(a, b) {
            b ? ec.unshift(a) : ec.push(a)
        }
    }), n.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? n.extend({}, a) : {
            complete: c || !c && b || n.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !n.isFunction(b) && b
        };
        return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
        }, d
    }, n.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(V).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = n.isEmptyObject(a),
                f = n.speed(b, c, d),
                g = function() {
                    var b = lc(this, n.extend({}, a), f);
                    (e || n._data(this, "finish")) && b.stop(!0)
                };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop, b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                var b = !0,
                    e = null != a && a + "queueHooks",
                    f = n.timers,
                    g = n._data(this);
                if (e) g[e] && g[e].stop && d(g[e]);
                else
                    for (e in g) g[e] && g[e].stop && dc.test(e) && d(g[e]);
                for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                (b || !c) && n.dequeue(this, a)
            })
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"), this.each(function() {
                var b, c = n._data(this),
                    d = c[a + "queue"],
                    e = c[a + "queueHooks"],
                    f = n.timers,
                    g = d ? d.length : 0;
                for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }), n.each(["toggle", "show", "hide"], function(a, b) {
        var c = n.fn[b];
        n.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(hc(b, !0), a, d, e)
        }
    }), n.each({
        slideDown: hc("show"),
        slideUp: hc("hide"),
        slideToggle: hc("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        n.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), n.timers = [], n.fx.tick = function() {
        var a, b = n.timers,
            c = 0;
        for (_b = n.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
        b.length || n.fx.stop(), _b = void 0
    }, n.fx.timer = function(a) {
        n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
    }, n.fx.interval = 13, n.fx.start = function() {
        ac || (ac = setInterval(n.fx.tick, n.fx.interval))
    }, n.fx.stop = function() {
        clearInterval(ac), ac = null
    }, n.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, n.fn.delay = function(a, b) {
        return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
            var d = setTimeout(b, a);
            c.stop = function() {
                clearTimeout(d)
            }
        })
    },
    function() {
        var a, b, c, d, e = z.createElement("div");
        e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = e.getElementsByTagName("a")[0], c = z.createElement("select"), d = c.appendChild(z.createElement("option")), b = e.getElementsByTagName("input")[0], a.style.cssText = "top:1px", l.getSetAttribute = "t" !== e.className, l.style = /top/.test(a.getAttribute("style")), l.hrefNormalized = "/a" === a.getAttribute("href"), l.checkOn = !! b.value, l.optSelected = d.selected, l.enctype = !! z.createElement("form").enctype, c.disabled = !0, l.optDisabled = !d.disabled, b = z.createElement("input"), b.setAttribute("value", ""), l.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), l.radioValue = "t" === b.value, a = b = c = d = e = null
    }();
    var mc = /\r/g;
    n.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = n.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(mc, "") : null == c ? "" : c)
            }
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.text(a)
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (l.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
                            if (b = n(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options,
                        f = n.makeArray(b),
                        g = e.length;
                    while (g--)
                        if (d = e[g], n.inArray(n.valHooks.option.get(d), f) >= 0) try {
                            d.selected = c = !0
                        } catch (h) {
                            d.scrollHeight
                        } else d.selected = !1;
                    return c || (a.selectedIndex = -1), e
                }
            }
        }
    }), n.each(["radio", "checkbox"], function() {
        n.valHooks[this] = {
            set: function(a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0
            }
        }, l.checkOn || (n.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var nc, oc, pc = n.expr.attrHandle,
        qc = /^(?:checked|selected)$/i,
        rc = l.getSetAttribute,
        sc = l.input;
    n.fn.extend({
        attr: function(a, b) {
            return W(this, n.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                n.removeAttr(this, a)
            })
        }
    }), n.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === L ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? oc : nc)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b))
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(F);
            if (f && 1 === a.nodeType)
                while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) ? sc && rc || !qc.test(c) ? a[d] = !1 : a[n.camelCase("default-" + c)] = a[d] = !1 : n.attr(a, c, ""), a.removeAttribute(rc ? c : d)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), oc = {
        set: function(a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : sc && rc || !qc.test(c) ? a.setAttribute(!rc && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c] = !0, c
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = pc[b] || n.find.attr;
        pc[b] = sc && rc || !qc.test(b) ? function(a, b, d) {
            var e, f;
            return d || (f = pc[b], pc[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, pc[b] = f), e
        } : function(a, b, c) {
            return c ? void 0 : a[n.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }), sc && rc || (n.attrHooks.value = {
        set: function(a, b, c) {
            return n.nodeName(a, "input") ? void(a.defaultValue = b) : nc && nc.set(a, b, c)
        }
    }), rc || (nc = {
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    }, pc.id = pc.name = pc.coords = function(a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }, n.valHooks.button = {
        get: function(a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0
        },
        set: nc.set
    }, n.attrHooks.contenteditable = {
        set: function(a, b, c) {
            nc.set(a, "" === b ? !1 : b, c)
        }
    }, n.each(["width", "height"], function(a, b) {
        n.attrHooks[b] = {
            set: function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        }
    })), l.style || (n.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || void 0
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    });
    var tc = /^(?:input|select|textarea|button|object)$/i,
        uc = /^(?:a|area)$/i;
    n.fn.extend({
        prop: function(a, b) {
            return W(this, n.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = n.propFix[a] || a, this.each(function() {
                try {
                    this[a] = void 0, delete this[a]
                } catch (b) {}
            })
        }
    }), n.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = n.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : tc.test(a.nodeName) || uc.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }
    }), l.hrefNormalized || n.each(["href", "src"], function(a, b) {
        n.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4)
            }
        }
    }), l.optSelected || (n.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        n.propFix[this.toLowerCase()] = this
    }), l.enctype || (n.propFix.enctype = "encoding");
    var vc = /[\t\r\n\f]/g;
    n.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = 0,
                i = this.length,
                j = "string" == typeof a && a;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).addClass(a.call(this, b, this.className))
            });
            if (j)
                for (b = (a || "").match(F) || []; i > h; h++)
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(vc, " ") : " ")) {
                        f = 0;
                        while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = n.trim(d), c.className !== g && (c.className = g)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0,
                i = this.length,
                j = 0 === arguments.length || "string" == typeof a && a;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).removeClass(a.call(this, b, this.className))
            });
            if (j)
                for (b = (a || "").match(F) || []; i > h; h++)
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(vc, " ") : "")) {
                        f = 0;
                        while (e = b[f++])
                            while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " ");
                        g = a ? n.trim(d) : "", c.className !== g && (c.className = g)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function(c) {
                n(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function() {
                if ("string" === c) {
                    var b, d = 0,
                        e = n(this),
                        f = a.match(F) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else(c === L || "boolean" === c) && (this.className && n._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : n._data(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(vc, " ").indexOf(b) >= 0) return !0;
            return !1
        }
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        n.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), n.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var wc = n.now(),
        xc = /\?/,
        yc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    n.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
        var c, d = null,
            e = n.trim(b + "");
        return e && !n.trim(e.replace(yc, function(a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
        })) ? Function("return " + e)() : n.error("Invalid JSON: " + b)
    }, n.parseXML = function(b) {
        var c, d;
        if (!b || "string" != typeof b) return null;
        try {
            a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c
    };
    var zc, Ac, Bc = /#.*$/,
        Cc = /([?&])_=[^&]*/,
        Dc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Ec = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Fc = /^(?:GET|HEAD)$/,
        Gc = /^\/\//,
        Hc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Ic = {}, Jc = {}, Kc = "*/".concat("*");
    try {
        Ac = location.href
    } catch (Lc) {
        Ac = z.createElement("a"), Ac.href = "", Ac = Ac.href
    }
    zc = Hc.exec(Ac.toLowerCase()) || [];

    function Mc(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(F) || [];
            if (n.isFunction(c))
                while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Nc(a, b, c, d) {
        var e = {}, f = a === Jc;

        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Oc(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && n.extend(!0, a, c), a
    }

    function Pc(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break
                }
        if (i[0] in c) f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function Qc(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else
        if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ac,
            type: "GET",
            isLocal: Ec.test(zc[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Kc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Oc(Oc(a, n.ajaxSettings), b) : Oc(n.ajaxSettings, a)
        },
        ajaxPrefilter: Mc(Ic),
        ajaxTransport: Mc(Jc),
        ajax: function(a, b) {
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b),
                l = k.context || k,
                m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event,
                o = n.Deferred(),
                p = n.Callbacks("once memory"),
                q = k.statusCode || {}, r = {}, s = {}, t = 0,
                u = "canceled",
                v = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === t) {
                            if (!j) {
                                j = {};
                                while (b = Dc.exec(f)) j[b[1].toLowerCase()] = b[2]
                            }
                            b = j[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === t ? f : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return t || (k.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > t)
                                for (b in a) q[b] = [q[b], a[b]];
                            else v.always(a[v.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || u;
                        return i && i.abort(b), x(0, b), this
                    }
                };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || Ac) + "").replace(Bc, "").replace(Gc, zc[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(F) || [""], null == k.crossDomain && (c = Hc.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === zc[1] && c[2] === zc[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (zc[3] || ("http:" === zc[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), Nc(Ic, k, b, v), 2 === t) return v;
            h = k.global, h && 0 === n.active++ && n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !Fc.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (xc.test(e) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = Cc.test(e) ? e.replace(Cc, "$1_=" + wc++) : e + (xc.test(e) ? "&" : "?") + "_=" + wc++)), k.ifModified && (n.lastModified[e] && v.setRequestHeader("If-Modified-Since", n.lastModified[e]), n.etag[e] && v.setRequestHeader("If-None-Match", n.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Kc + "; q=0.01" : "") : k.accepts["*"]);
            for (d in k.headers) v.setRequestHeader(d, k.headers[d]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (d in {
                success: 1,
                error: 1,
                complete: 1
            }) v[d](k[d]);
            if (i = Nc(Jc, k, b, v)) {
                v.readyState = 1, h && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function() {
                    v.abort("timeout")
                }, k.timeout));
                try {
                    t = 1, i.send(r, x)
                } catch (w) {
                    if (!(2 > t)) throw w;
                    x(-1, w)
                }
            } else x(-1, "No Transport");

            function x(a, b, c, d) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = Pc(k, v, c)), u = Qc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[e] = w), w = v.getResponseHeader("etag"), w && (n.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, h && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), h && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop")))
            }
            return v
        },
        getJSON: function(a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return n.get(a, void 0, b, "script")
        }
    }), n.each(["get", "post"], function(a, b) {
        n[b] = function(a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        n.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), n._evalUrl = function(a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, n.fn.extend({
        wrapAll: function(a) {
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    var a = this;
                    while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return this.each(n.isFunction(a) ? function(b) {
                n(this).wrapInner(a.call(this, b))
            } : function() {
                var b = n(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = n.isFunction(a);
            return this.each(function(c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    }), n.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !l.reliableHiddenOffsets() && "none" === (a.style && a.style.display || n.css(a, "display"))
    }, n.expr.filters.visible = function(a) {
        return !n.expr.filters.hidden(a)
    };
    var Rc = /%20/g,
        Sc = /\[\]$/,
        Tc = /\r?\n/g,
        Uc = /^(?:submit|button|image|reset|file)$/i,
        Vc = /^(?:input|select|textarea|keygen)/i;

    function Wc(a, b, c, d) {
        var e;
        if (n.isArray(b)) n.each(b, function(b, e) {
            c || Sc.test(a) ? d(a, e) : Wc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== n.type(b)) d(a, b);
        else
            for (e in b) Wc(a + "[" + e + "]", b[e], c, d)
    }
    n.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) Wc(c, a[c], b, e);
        return d.join("&").replace(Rc, "+")
    }, n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && Vc.test(this.nodeName) && !Uc.test(a) && (this.checked || !X.test(a))
            }).map(function(a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Tc, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Tc, "\r\n")
                }
            }).get()
        }
    }), n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && $c() || _c()
    } : $c;
    var Xc = 0,
        Yc = {}, Zc = n.ajaxSettings.xhr();
    a.ActiveXObject && n(a).on("unload", function() {
        for (var a in Yc) Yc[a](void 0, !0)
    }), l.cors = !! Zc && "withCredentials" in Zc, Zc = l.ajax = !! Zc, Zc && n.ajaxTransport(function(a) {
        if (!a.crossDomain || l.cors) {
            var b;
            return {
                send: function(c, d) {
                    var e, f = a.xhr(),
                        g = ++Xc;
                    if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                        for (e in a.xhrFields) f[e] = a.xhrFields[e];
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
                    f.send(a.hasContent && a.data || null), b = function(c, e) {
                        var h, i, j;
                        if (b && (e || 4 === f.readyState))
                            if (delete Yc[g], b = void 0, f.onreadystatechange = n.noop, e) 4 !== f.readyState && f.abort();
                            else {
                                j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
                                try {
                                    i = f.statusText
                                } catch (k) {
                                    i = ""
                                }
                                h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
                            }
                        j && d(h, i, j, f.getAllResponseHeaders())
                    }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Yc[g] = b : b()
                },
                abort: function() {
                    b && b(void 0, !0)
                }
            }
        }
    });

    function $c() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }

    function _c() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }
    n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return n.globalEval(a), a
            }
        }
    }), n.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), n.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = z.head || n("head")[0] || z.documentElement;
            return {
                send: function(d, e) {
                    b = z.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
                    }, c.insertBefore(b, c.firstChild)
                },
                abort: function() {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var ad = [],
        bd = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = ad.pop() || n.expando + "_" + wc++;
            return this[a] = !0, a
        }
    }), n.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (bd.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && bd.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(bd, "$1" + e) : b.jsonp !== !1 && (b.url += (xc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || n.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, ad.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || z;
        var d = v.exec(a),
            e = !c && [];
        return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes))
    };
    var cd = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && cd) return cd.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h >= 0 && (d = a.slice(h, a.length), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: b
        }).done(function(a) {
            e = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
            g.each(c, e || [a.responseText, b, a])
        }), this
    }, n.expr.filters.animated = function(a) {
        return n.grep(n.timers, function(b) {
            return a === b.elem
        }).length
    };
    var dd = a.document.documentElement;

    function ed(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    n.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"),
                l = n(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, n.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                n.offset.setOffset(this, a, b)
            });
            var b, c, d = {
                    top: 0,
                    left: 0
                }, e = this[0],
                f = e && e.ownerDocument;
            if (f) return b = f.documentElement, n.contains(b, e) ? (typeof e.getBoundingClientRect !== L && (d = e.getBoundingClientRect()), c = ed(f), {
                top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
            }) : d
        },
        position: function() {
            if (this[0]) {
                var a, b, c = {
                        top: 0,
                        left: 0
                    }, d = this[0];
                return "fixed" === n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (c = a.offset()), c.top += n.css(a[0], "borderTopWidth", !0), c.left += n.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - n.css(d, "marginTop", !0),
                    left: b.left - c.left - n.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent || dd;
                while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent;
                return a || dd
            })
        }
    }), n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = /Y/.test(b);
        n.fn[a] = function(d) {
            return W(this, function(a, d, e) {
                var f = ed(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e : n(f).scrollTop()) : a[d] = e)
            }, a, d, arguments.length, null)
        }
    }), n.each(["top", "left"], function(a, b) {
        n.cssHooks[b] = Mb(l.pixelPosition, function(a, c) {
            return c ? (c = Kb(a, b), Ib.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }), n.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return W(this, function(b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), n.fn.size = function() {
        return this.length
    }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return n
    });
    var fd = a.jQuery,
        gd = a.$;
    return n.noConflict = function(b) {
        return a.$ === n && (a.$ = gd), b && a.jQuery === n && (a.jQuery = fd), n
    }, typeof b === L && (a.jQuery = a.$ = n), n
});

(window._gsQueue || (window._gsQueue = [])).push(function() {
    window._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(q, v, h) {
        var m = [].slice,
            b = function(c, d, f) {
                h.call(this, c, d, f);
                this._cycle = 0;
                this._yoyo = !0 === this.vars.yoyo;
                this._repeat = this.vars.repeat || 0;
                this._repeatDelay = this.vars.repeatDelay || 0;
                this._dirty = !0;
                this.render = b.prototype.render
            }, B = h._internals.isSelector,
            z = h._internals.isArray,
            A = b.prototype = h.to({}, 0.1, {}),
            n = [];
        b.version = "1.11.6";
        A.constructor = b;
        A.kill()._gc = !1;
        b.killTweensOf = b.killDelayedCallsTo = h.killTweensOf;
        b.getTweensOf = h.getTweensOf;
        b.ticker = h.ticker;
        A.invalidate = function() {
            return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), h.prototype.invalidate.call(this)
        };
        A.updateTo = function(c, d) {
            var f, a = this.ratio;
            d && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime -
                this._delay));
            for (f in c) this.vars[f] = c[f];
            if (this._initted)
                if (d) this._initted = !1;
                else
            if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && h._onPluginEvent("_onDisable", this), 0.998 < this._time / this._duration) f = this._time, this.render(0, !0, !1), this._initted = !1, this.render(f, !0, !1);
            else if (0 < this._time) {
                this._initted = !1;
                this._init();
                for (var a = 1 / (1 - a), e = this._firstPT; e;) f = e.s + e.c, e.c *= a, e.s = f - e.c, e = e._next
            }
            return this
        };
        A.render = function(c, d, f) {
            this._initted || 0 === this._duration &&
                this.vars.repeat && this.invalidate();
            var a, e, g, p, b, s, z, h = this._dirty ? this.totalDuration() : this._totalDuration,
                C = this._time,
                A = this._totalTime,
                q = this._cycle,
                y = this._duration;
            if (c >= h ? (this._totalTime = h, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = y, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (a = !0, e = "onComplete"), 0 === y && (z = this._rawPrevTime, this._startTime === this._timeline._duration &&
                (c = 0), (0 === c || 0 > z || 1E-10 === z) && z !== c && (f = !0, 1E-10 < z && (e = "onReverseComplete")), this._rawPrevTime = z = !d || c || this._rawPrevTime === c ? c : 1E-10)) : 1E-7 > c ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== A || 0 === y && 0 < this._rawPrevTime && 1E-10 !== this._rawPrevTime) && (e = "onReverseComplete", a = this._reversed), 0 > c ? (this._active = !1, 0 === y && (0 <= this._rawPrevTime && (f = !0), this._rawPrevTime = z = !d || c || this._rawPrevTime === c ? c : 1E-10)) : this._initted || (f = !0)) : (this._totalTime =
                this._time = c, 0 !== this._repeat && (g = y + this._repeatDelay, this._cycle = this._totalTime / g >> 0, 0 !== this._cycle && this._cycle === this._totalTime / g && this._cycle--, this._time = this._totalTime - this._cycle * g, this._yoyo && 0 !== (1 & this._cycle) && (this._time = y - this._time), this._time > y ? this._time = y : 0 > this._time && (this._time = 0)), this._easeType ? (p = this._time / y, b = this._easeType, s = this._easePower, (1 === b || 3 === b && 0.5 <= p) && (p = 1 - p), 3 === b && (p *= 2), 1 === s ? p *= p : 2 === s ? p *= p * p : 3 === s ? p *= p * p * p : 4 === s && (p *= p * p * p * p), this.ratio = 1 === b ? 1 - p : 2 ===
                    b ? p : 0.5 > this._time / y ? p / 2 : 1 - p / 2) : this.ratio = this._ease.getRatio(this._time / y)), C === this._time && !f && q === this._cycle) return A !== this._totalTime && this._onUpdate && (d || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || n)), void 0;
            if (!this._initted) {
                if (this._init(), !this._initted || this._gc) return;
                this._time && !a ? this.ratio = this._ease.getRatio(this._time / y) : a && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
            }
            this._active || !this._paused && this._time !== C && 0 <=
                c && (this._active = !0);
            0 !== A || (this._startAt && (0 <= c ? this._startAt.render(c, d, f) : e || (e = "_dummyGS")), !this.vars.onStart || 0 === this._totalTime && 0 !== y || !d && this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || n));
            for (g = this._firstPT; g;) g.f ? g.t[g.p](g.c * this.ratio + g.s) : g.t[g.p] = g.c * this.ratio + g.s, g = g._next;
            this._onUpdate && (0 > c && this._startAt && this._startTime && this._startAt.render(c, d, f), d || (this._totalTime !== A || a) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams ||
                n));
            this._cycle !== q && (d || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || n));
            e && (this._gc || (0 > c && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(c, d, f), a && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !d && this.vars[e] && this.vars[e].apply(this.vars[e + "Scope"] || this, this.vars[e + "Params"] || n), 0 === y && 1E-10 === this._rawPrevTime && 1E-10 !== z && (this._rawPrevTime = 0)))
        };
        b.to = function(c, d, f) {
            return new b(c,
                d, f)
        };
        b.from = function(c, d, f) {
            return f.runBackwards = !0, f.immediateRender = 0 != f.immediateRender, new b(c, d, f)
        };
        b.fromTo = function(c, d, f, a) {
            return a.startAt = f, a.immediateRender = 0 != a.immediateRender && 0 != f.immediateRender, new b(c, d, a)
        };
        b.staggerTo = b.allTo = function(c, d, f, a, e, g, p) {
            a = a || 0;
            var s, P, A, q, C = f.delay || 0,
                O = [],
                v = function() {
                    f.onComplete && f.onComplete.apply(f.onCompleteScope || this, arguments);
                    e.apply(p || this, g || n)
                };
            z(c) || ("string" == typeof c && (c = h.selector(c) || c), B(c) && (c = m.call(c, 0)));
            s = c.length;
            for (A =
                0; s > A; A++) {
                P = {};
                for (q in f) P[q] = f[q];
                P.delay = C;
                A === s - 1 && e && (P.onComplete = v);
                O[A] = new b(c[A], d, P);
                C += a
            }
            return O
        };
        b.staggerFrom = b.allFrom = function(c, d, f, a, e, g, p) {
            return f.runBackwards = !0, f.immediateRender = 0 != f.immediateRender, b.staggerTo(c, d, f, a, e, g, p)
        };
        b.staggerFromTo = b.allFromTo = function(c, d, f, a, e, g, p, s) {
            return a.startAt = f, a.immediateRender = 0 != a.immediateRender && 0 != f.immediateRender, b.staggerTo(c, d, a, e, g, p, s)
        };
        b.delayedCall = function(c, d, f, a, e) {
            return new b(d, 0, {
                delay: c,
                onComplete: d,
                onCompleteParams: f,
                onCompleteScope: a,
                onReverseComplete: d,
                onReverseCompleteParams: f,
                onReverseCompleteScope: a,
                immediateRender: !1,
                useFrames: e,
                overwrite: 0
            })
        };
        b.set = function(c, d) {
            return new b(c, 0, d)
        };
        b.isTweening = function(c) {
            return 0 < h.getTweensOf(c, !0).length
        };
        var J = function(c, d) {
            for (var f = [], a = 0, e = c._first; e;) e instanceof h ? f[a++] = e : (d && (f[a++] = e), f = f.concat(J(e, d)), a = f.length), e = e._next;
            return f
        }, s = b.getAllTweens = function(c) {
                return J(q._rootTimeline, c).concat(J(q._rootFramesTimeline, c))
            };
        b.killAll = function(c, d, f, a) {
            null ==
                d && (d = !0);
            null == f && (f = !0);
            var e, g, p = s(0 != a),
                b = p.length,
                z = d && f && a;
            for (g = 0; b > g; g++) a = p[g], (z || a instanceof v || (e = a.target === a.vars.onComplete) && f || d && !e) && (c ? a.totalTime(a.totalDuration()) : a._enabled(!1, !1))
        };
        b.killChildTweensOf = function(c, d) {
            if (null != c) {
                var g, a, e, l = h._tweenLookup;
                if ("string" == typeof c && (c = h.selector(c) || c), B(c) && (c = m.call(c, 0)), z(c))
                    for (a = c.length; - 1 < --a;) b.killChildTweensOf(c[a], d);
                else {
                    g = [];
                    for (e in l)
                        for (a = l[e].target.parentNode; a;) a === c && (g = g.concat(l[e].tweens)), a = a.parentNode;
                    e = g.length;
                    for (a = 0; e > a; a++) d && g[a].totalTime(g[a].totalDuration()), g[a]._enabled(!1, !1)
                }
            }
        };
        var g = function(c, d, g, a) {
            d = !1 !== d;
            g = !1 !== g;
            a = !1 !== a;
            for (var e, l = s(a), p = d && g && a, b = l.length; - 1 < --b;) a = l[b], (p || a instanceof v || (e = a.target === a.vars.onComplete) && g || d && !e) && a.paused(c)
        };
        return b.pauseAll = function(c, d, f) {
            g(!0, c, d, f)
        }, b.resumeAll = function(c, d, f) {
            g(!1, c, d, f)
        }, b.globalTimeScale = function(c) {
            var d = q._rootTimeline,
                g = h.ticker.time;
            return arguments.length ? (c = c || 1E-10, d._startTime = g - (g - d._startTime) * d._timeScale /
                c, d = q._rootFramesTimeline, g = h.ticker.frame, d._startTime = g - (g - d._startTime) * d._timeScale / c, d._timeScale = q._rootTimeline._timeScale = c, c) : d._timeScale
        }, A.progress = function(c) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - c : c) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
        }, A.totalProgress = function(c) {
            return arguments.length ? this.totalTime(this.totalDuration() * c, !1) : this._totalTime / this.totalDuration()
        }, A.time = function(c, d) {
            return arguments.length ?
                (this._dirty && this.totalDuration(), c > this._duration && (c = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? c = this._duration - c + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (c += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(c, d)) : this._time
        }, A.duration = function(c) {
            return arguments.length ? q.prototype.duration.call(this, c) : this._duration
        }, A.totalDuration = function(c) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((c - this._repeat * this._repeatDelay) / (this._repeat +
                1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
        }, A.repeat = function(c) {
            return arguments.length ? (this._repeat = c, this._uncache(!0)) : this._repeat
        }, A.repeatDelay = function(c) {
            return arguments.length ? (this._repeatDelay = c, this._uncache(!0)) : this._repeatDelay
        }, A.yoyo = function(c) {
            return arguments.length ? (this._yoyo = c, this) : this._yoyo
        }, b
    }, !0);
    window._gsDefine("TimelineLite", ["core.Animation",
        "core.SimpleTimeline", "TweenLite"
    ], function(q, v, h) {
        var m = function(g) {
            v.call(this, g);
            this._labels = {};
            this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren;
            this.smoothChildTiming = !0 === this.vars.smoothChildTiming;
            this._sortChildren = !0;
            this._onUpdate = this.vars.onUpdate;
            var c, d = this.vars;
            for (c in d) g = d[c], B(g) && -1 !== g.join("").indexOf("{self}") && (d[c] = this._swapSelfInParams(g));
            B(d.tweens) && this.add(d.tweens, 0, d.align, d.stagger)
        }, b = h._internals.isSelector,
            B = h._internals.isArray,
            z = [],
            A = function(g) {
                var c,
                    d = {};
                for (c in g) d[c] = g[c];
                return d
            }, n = function(g, c, d, f) {
                g._timeline.pause(g._startTime);
                c && c.apply(f || g._timeline, d || z)
            }, J = z.slice,
            s = m.prototype = new v;
        return m.version = "1.11.6", s.constructor = m, s.kill()._gc = !1, s.to = function(g, c, d, f) {
            return c ? this.add(new h(g, c, d), f) : this.set(g, d, f)
        }, s.from = function(g, c, d, f) {
            return this.add(h.from(g, c, d), f)
        }, s.fromTo = function(g, c, d, f, a) {
            return c ? this.add(h.fromTo(g, c, d, f), a) : this.set(g, f, a)
        }, s.staggerTo = function(g, c, d, f, a, e, l, p) {
            l = new m({
                onComplete: e,
                onCompleteParams: l,
                onCompleteScope: p,
                smoothChildTiming: this.smoothChildTiming
            });
            "string" == typeof g && (g = h.selector(g) || g);
            b(g) && (g = J.call(g, 0));
            f = f || 0;
            for (e = 0; g.length > e; e++) d.startAt && (d.startAt = A(d.startAt)), l.to(g[e], c, A(d), e * f);
            return this.add(l, a)
        }, s.staggerFrom = function(g, c, d, f, a, e, l, p) {
            return d.immediateRender = 0 != d.immediateRender, d.runBackwards = !0, this.staggerTo(g, c, d, f, a, e, l, p)
        }, s.staggerFromTo = function(g, c, d, f, a, e, l, p, b) {
            return f.startAt = d, f.immediateRender = 0 != f.immediateRender && 0 != d.immediateRender, this.staggerTo(g,
                c, f, a, e, l, p, b)
        }, s.call = function(g, c, d, f) {
            return this.add(h.delayedCall(0, g, c, d), f)
        }, s.set = function(g, c, d) {
            return d = this._parseTimeOrLabel(d, 0, !0), null == c.immediateRender && (c.immediateRender = d === this._time && !this._paused), this.add(new h(g, 0, c), d)
        }, m.exportRoot = function(g, c) {
            g = g || {};
            null == g.smoothChildTiming && (g.smoothChildTiming = !0);
            var d, f, a = new m(g),
                e = a._timeline;
            null == c && (c = !0);
            e._remove(a, !0);
            a._startTime = 0;
            a._rawPrevTime = a._time = a._totalTime = e._time;
            for (d = e._first; d;) f = d._next, c && d instanceof
            h && d.target === d.vars.onComplete || a.add(d, d._startTime - d._delay), d = f;
            return e.add(a, 0), a
        }, s.add = function(g, c, d, f) {
            var a, e, l;
            if ("number" != typeof c && (c = this._parseTimeOrLabel(c, 0, !0, g)), !(g instanceof q)) {
                if (g instanceof Array || g && g.push && B(g)) {
                    d = d || "normal";
                    f = f || 0;
                    a = g.length;
                    for (e = 0; a > e; e++) B(l = g[e]) && (l = new m({
                        tweens: l
                    })), this.add(l, c), "string" != typeof l && "function" != typeof l && ("sequence" === d ? c = l._startTime + l.totalDuration() / l._timeScale : "start" === d && (l._startTime -= l.delay())), c += f;
                    return this._uncache(!0)
                }
                if ("string" ==
                    typeof g) return this.addLabel(g, c);
                if ("function" != typeof g) throw "Cannot add " + g + " into the timeline; it is not a tween, timeline, function, or string.";
                g = h.delayedCall(0, g)
            }
            if (v.prototype.add.call(this, g, c), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                for (d = this, g = d.rawTime() > g._startTime; d._timeline;) g && d._timeline.smoothChildTiming ? d.totalTime(d._totalTime, !0) : d._gc && d._enabled(!0, !1), d = d._timeline;
            return this
        }, s.remove = function(g) {
            if (g instanceof q) return this._remove(g, !1);
            if (g instanceof Array || g && g.push && B(g)) {
                for (var c = g.length; - 1 < --c;) this.remove(g[c]);
                return this
            }
            return "string" == typeof g ? this.removeLabel(g) : this.kill(null, g)
        }, s._remove = function(g, c) {
            v.prototype._remove.call(this, g, c);
            var d = this._last;
            return d ? this._time > d._startTime + d._totalDuration / d._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
        }, s.append = function(g, c) {
            return this.add(g, this._parseTimeOrLabel(null,
                c, !0, g))
        }, s.insert = s.insertMultiple = function(g, c, d, f) {
            return this.add(g, c || 0, d, f)
        }, s.appendMultiple = function(g, c, d, f) {
            return this.add(g, this._parseTimeOrLabel(null, c, !0, g), d, f)
        }, s.addLabel = function(g, c) {
            return this._labels[g] = this._parseTimeOrLabel(c), this
        }, s.addPause = function(g, c, d, f) {
            return this.call(n, ["{self}", c, d, f], this, g)
        }, s.removeLabel = function(g) {
            return delete this._labels[g], this
        }, s.getLabelTime = function(g) {
            return null != this._labels[g] ? this._labels[g] : -1
        }, s._parseTimeOrLabel = function(g,
            c, d, f) {
            var a;
            if (f instanceof q && f.timeline === this) this.remove(f);
            else if (f && (f instanceof Array || f.push && B(f)))
                for (a = f.length; - 1 < --a;) f[a] instanceof q && f[a].timeline === this && this.remove(f[a]);
            if ("string" == typeof c) return this._parseTimeOrLabel(c, d && "number" == typeof g && null == this._labels[c] ? g - this.duration() : 0, d);
            if (c = c || 0, "string" != typeof g || !isNaN(g) && null == this._labels[g]) null == g && (g = this.duration());
            else {
                if (a = g.indexOf("="), -1 === a) return null == this._labels[g] ? d ? this._labels[g] = this.duration() +
                    c : c : this._labels[g] + c;
                c = parseInt(g.charAt(a - 1) + "1", 10) * Number(g.substr(a + 1));
                g = 1 < a ? this._parseTimeOrLabel(g.substr(0, a - 1), 0, d) : this.duration()
            }
            return Number(g) + c
        }, s.seek = function(g, c) {
            return this.totalTime("number" == typeof g ? g : this._parseTimeOrLabel(g), !1 !== c)
        }, s.stop = function() {
            return this.paused(!0)
        }, s.gotoAndPlay = function(g, c) {
            return this.play(g, c)
        }, s.gotoAndStop = function(g, c) {
            return this.pause(g, c)
        }, s.render = function(g, c, d) {
            this._gc && this._enabled(!0, !1);
            var f, a, e, l, p = this._dirty ? this.totalDuration() :
                    this._totalDuration,
                b = this._time,
                s = this._startTime,
                h = this._timeScale,
                n = this._paused;
            if (g >= p ? (this._totalTime = this._time = p, this._reversed || this._hasPausedChild() || (a = !0, l = "onComplete", 0 === this._duration && (0 === g || 0 > this._rawPrevTime || 1E-10 === this._rawPrevTime) && this._rawPrevTime !== g && this._first && (f = !0, 1E-10 < this._rawPrevTime && (l = "onReverseComplete"))), this._rawPrevTime = this._duration || !c || g || this._rawPrevTime === g ? g : 1E-10, g = p + 1E-4) : 1E-7 > g ? (this._totalTime = this._time = 0, (0 !== b || 0 === this._duration && 1E-10 !==
                this._rawPrevTime && (0 < this._rawPrevTime || 0 > g && 0 <= this._rawPrevTime)) && (l = "onReverseComplete", a = this._reversed), 0 > g ? (this._active = !1, 0 === this._duration && 0 <= this._rawPrevTime && this._first && (f = !0), this._rawPrevTime = g) : (this._rawPrevTime = this._duration || !c || g || this._rawPrevTime === g ? g : 1E-10, g = 0, this._initted || (f = !0))) : this._totalTime = this._time = this._rawPrevTime = g, this._time !== b && this._first || d || f) {
                if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== b && 0 < g && (this._active = !0),
                    0 === b && this.vars.onStart && 0 !== this._time && (c || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || z)), this._time >= b)
                    for (f = this._first; f && (e = f._next, !this._paused || n);)(f._active || f._startTime <= this._time && !f._paused && !f._gc) && (f._reversed ? f.render((f._dirty ? f.totalDuration() : f._totalDuration) - (g - f._startTime) * f._timeScale, c, d) : f.render((g - f._startTime) * f._timeScale, c, d)), f = e;
                else
                    for (f = this._last; f && (e = f._prev, !this._paused || n);)(f._active || b >= f._startTime && !f._paused && !f._gc) &&
                        (f._reversed ? f.render((f._dirty ? f.totalDuration() : f._totalDuration) - (g - f._startTime) * f._timeScale, c, d) : f.render((g - f._startTime) * f._timeScale, c, d)), f = e;
                this._onUpdate && (c || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || z));
                l && (this._gc || (s === this._startTime || h !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (a && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !c && this.vars[l] && this.vars[l].apply(this.vars[l + "Scope"] || this, this.vars[l +
                    "Params"] || z)))
            }
        }, s._hasPausedChild = function() {
            for (var g = this._first; g;) {
                if (g._paused || g instanceof m && g._hasPausedChild()) return !0;
                g = g._next
            }
            return !1
        }, s.getChildren = function(g, c, d, f) {
            f = f || -9999999999;
            for (var a = [], e = this._first, l = 0; e;) f > e._startTime || (e instanceof h ? !1 !== c && (a[l++] = e) : (!1 !== d && (a[l++] = e), !1 !== g && (a = a.concat(e.getChildren(!0, c, d)), l = a.length))), e = e._next;
            return a
        }, s.getTweensOf = function(g, c) {
            for (var d = h.getTweensOf(g), f = d.length, a = [], e = 0; - 1 < --f;)(d[f].timeline === this || c && this._contains(d[f])) &&
                (a[e++] = d[f]);
            return a
        }, s._contains = function(g) {
            for (g = g.timeline; g;) {
                if (g === this) return !0;
                g = g.timeline
            }
            return !1
        }, s.shiftChildren = function(g, c, d) {
            d = d || 0;
            for (var f, a = this._first, e = this._labels; a;) a._startTime >= d && (a._startTime += g), a = a._next;
            if (c)
                for (f in e) e[f] >= d && (e[f] += g);
            return this._uncache(!0)
        }, s._kill = function(g, c) {
            if (!g && !c) return this._enabled(!1, !1);
            for (var d = c ? this.getTweensOf(c) : this.getChildren(!0, !0, !1), f = d.length, a = !1; - 1 < --f;) d[f]._kill(g, c) && (a = !0);
            return a
        }, s.clear = function(g) {
            var c =
                this.getChildren(!1, !0, !0),
                d = c.length;
            for (this._time = this._totalTime = 0; - 1 < --d;) c[d]._enabled(!1, !1);
            return !1 !== g && (this._labels = {}), this._uncache(!0)
        }, s.invalidate = function() {
            for (var g = this._first; g;) g.invalidate(), g = g._next;
            return this
        }, s._enabled = function(g, c) {
            if (g === this._gc)
                for (var d = this._first; d;) d._enabled(g, !0), d = d._next;
            return v.prototype._enabled.call(this, g, c)
        }, s.duration = function(g) {
            return arguments.length ? (0 !== this.duration() && 0 !== g && this.timeScale(this._duration / g), this) : (this._dirty &&
                this.totalDuration(), this._duration)
        }, s.totalDuration = function(g) {
            if (!arguments.length) {
                if (this._dirty) {
                    var c, d, f = 0;
                    d = this._last;
                    for (var a = 999999999999; d;) c = d._prev, d._dirty && d.totalDuration(), d._startTime > a && this._sortChildren && !d._paused ? this.add(d, d._startTime - d._delay) : a = d._startTime, 0 > d._startTime && !d._paused && (f -= d._startTime, this._timeline.smoothChildTiming && (this._startTime += d._startTime / this._timeScale), this.shiftChildren(-d._startTime, !1, -9999999999), a = 0), d = d._startTime + d._totalDuration /
                        d._timeScale, d > f && (f = d), d = c;
                    this._duration = this._totalDuration = f;
                    this._dirty = !1
                }
                return this._totalDuration
            }
            return 0 !== this.totalDuration() && 0 !== g && this.timeScale(this._totalDuration / g), this
        }, s.usesFrames = function() {
            for (var g = this._timeline; g._timeline;) g = g._timeline;
            return g === q._rootFramesTimeline
        }, s.rawTime = function() {
            return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
        }, m
    }, !0);
    window._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(q,
        v, h) {
        var m = function(b) {
            q.call(this, b);
            this._repeat = this.vars.repeat || 0;
            this._repeatDelay = this.vars.repeatDelay || 0;
            this._cycle = 0;
            this._yoyo = !0 === this.vars.yoyo;
            this._dirty = !0
        }, b = [],
            B = new h(null, null, 1, 0);
        h = m.prototype = new q;
        return h.constructor = m, h.kill()._gc = !1, m.version = "1.11.6", h.invalidate = function() {
            return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), q.prototype.invalidate.call(this)
        }, h.addCallback = function(b, h, n,
            q) {
            return this.add(v.delayedCall(0, b, n, q), h)
        }, h.removeCallback = function(b, h) {
            if (b)
                if (null == h) this._kill(null, b);
                else
                    for (var n = this.getTweensOf(b, !1), q = n.length, s = this._parseTimeOrLabel(h); - 1 < --q;) n[q]._startTime === s && n[q]._enabled(!1, !1);
            return this
        }, h.tweenTo = function(z, h) {
            h = h || {};
            var n, q, s, g = {
                    ease: B,
                    overwrite: 2,
                    useFrames: this.usesFrames(),
                    immediateRender: !1
                };
            for (q in h) g[q] = h[q];
            return g.time = this._parseTimeOrLabel(z), n = Math.abs(Number(g.time) - this._time) / this._timeScale || 0.001, s = new v(this, n,
                g), g.onStart = function() {
                s.target.paused(!0);
                s.vars.time !== s.target.time() && n === s.duration() && s.duration(Math.abs(s.vars.time - s.target.time()) / s.target._timeScale);
                h.onStart && h.onStart.apply(h.onStartScope || s, h.onStartParams || b)
            }, s
        }, h.tweenFromTo = function(b, h, n) {
            n = n || {};
            b = this._parseTimeOrLabel(b);
            n.startAt = {
                onComplete: this.seek,
                onCompleteParams: [b],
                onCompleteScope: this
            };
            n.immediateRender = !1 !== n.immediateRender;
            h = this.tweenTo(h, n);
            return h.duration(Math.abs(h.vars.time - b) / this._timeScale || 0.001)
        },
        h.render = function(h, q, n) {
            this._gc && this._enabled(!0, !1);
            var m, s, g, c, d, f = this._dirty ? this.totalDuration() : this._totalDuration,
                a = this._duration,
                e = this._time,
                l = this._totalTime,
                p = this._startTime,
                M = this._timeScale,
                P = this._rawPrevTime,
                v = this._paused,
                V = this._cycle;
            if (h >= f ? (this._locked || (this._totalTime = f, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (s = !0, c = "onComplete", 0 === this._duration && (0 === h || 0 > P || 1E-10 === P) && P !== h && this._first && (m = !0, 1E-10 < P && (c = "onReverseComplete"))), this._rawPrevTime =
                this._duration || !q || h || this._rawPrevTime === h ? h : 1E-10, this._yoyo && 0 !== (1 & this._cycle) ? this._time = h = 0 : (this._time = a, h = a + 1E-4)) : 1E-7 > h ? (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== e || 0 === a && 1E-10 !== P && (0 < P || 0 > h && 0 <= P) && !this._locked) && (c = "onReverseComplete", s = this._reversed), 0 > h ? (this._active = !1, 0 === a && 0 <= P && this._first && (m = !0), this._rawPrevTime = h) : (this._rawPrevTime = a || !q || h || this._rawPrevTime === h ? h : 1E-10, h = 0, this._initted || (m = !0))) : (0 === a && 0 > P && (m = !0), this._time = this._rawPrevTime =
                h, this._locked || (this._totalTime = h, 0 !== this._repeat && (d = a + this._repeatDelay, this._cycle = this._totalTime / d >> 0, 0 !== this._cycle && this._cycle === this._totalTime / d && this._cycle--, this._time = this._totalTime - this._cycle * d, this._yoyo && 0 !== (1 & this._cycle) && (this._time = a - this._time), this._time > a ? (this._time = a, h = a + 1E-4) : 0 > this._time ? this._time = h = 0 : h = this._time))), this._cycle !== V && !this._locked) {
                d = this._yoyo && 0 !== (1 & V);
                var C = d === (this._yoyo && 0 !== (1 & this._cycle)),
                    O = this._totalTime,
                    H = this._cycle,
                    y = this._rawPrevTime,
                    I = this._time;
                if (this._totalTime = V * a, V > this._cycle ? d = !d : this._totalTime += a, this._time = e, this._rawPrevTime = 0 === a ? P - 1E-4 : P, this._cycle = V, this._locked = !0, e = d ? 0 : a, this.render(e, q, 0 === a), q || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || b), C && (e = d ? a + 1E-4 : -1E-4, this.render(e, !0, !1)), this._locked = !1, this._paused && !v) return;
                this._time = I;
                this._totalTime = O;
                this._cycle = H;
                this._rawPrevTime = y
            }
            if (!(this._time !== e && this._first || n || m)) return l !== this._totalTime &&
                this._onUpdate && (q || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || b)), void 0;
            if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== l && 0 < h && (this._active = !0), 0 === l && this.vars.onStart && 0 !== this._totalTime && (q || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || b)), this._time >= e)
                for (m = this._first; m && (g = m._next, !this._paused || v);)(m._active || m._startTime <= this._time && !m._paused && !m._gc) && (m._reversed ? m.render((m._dirty ?
                    m.totalDuration() : m._totalDuration) - (h - m._startTime) * m._timeScale, q, n) : m.render((h - m._startTime) * m._timeScale, q, n)), m = g;
            else
                for (m = this._last; m && (g = m._prev, !this._paused || v);)(m._active || e >= m._startTime && !m._paused && !m._gc) && (m._reversed ? m.render((m._dirty ? m.totalDuration() : m._totalDuration) - (h - m._startTime) * m._timeScale, q, n) : m.render((h - m._startTime) * m._timeScale, q, n)), m = g;
            this._onUpdate && (q || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || b));
            c && (this._locked || this._gc ||
                (p === this._startTime || M !== this._timeScale) && (0 === this._time || f >= this.totalDuration()) && (s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !q && this.vars[c] && this.vars[c].apply(this.vars[c + "Scope"] || this, this.vars[c + "Params"] || b)))
        }, h.getActive = function(b, h, n) {
            null == b && (b = !0);
            null == h && (h = !0);
            null == n && (n = !1);
            var m = [];
            n = this.getChildren(b, h, n);
            var s = 0,
                g = n.length;
            for (b = 0; g > b; b++) h = n[b], h.isActive() && (m[s++] = h);
            return m
        }, h.getLabelAfter = function(b) {
            b || 0 !== b && (b = this._time);
            var h,
                n = this.getLabelsArray(),
                m = n.length;
            for (h = 0; m > h; h++)
                if (n[h].time > b) return n[h].name;
            return null
        }, h.getLabelBefore = function(b) {
            null == b && (b = this._time);
            for (var h = this.getLabelsArray(), n = h.length; - 1 < --n;)
                if (b > h[n].time) return h[n].name;
            return null
        }, h.getLabelsArray = function() {
            var b, h = [],
                n = 0;
            for (b in this._labels) h[n++] = {
                time: this._labels[b],
                name: b
            };
            return h.sort(function(b, h) {
                return b.time - h.time
            }), h
        }, h.progress = function(b) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ?
                1 - b : b) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
        }, h.totalProgress = function(b) {
            return arguments.length ? this.totalTime(this.totalDuration() * b, !1) : this._totalTime / this.totalDuration()
        }, h.totalDuration = function(b) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((b - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (q.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay *
                this._repeat), this._totalDuration)
        }, h.time = function(b, h) {
            return arguments.length ? (this._dirty && this.totalDuration(), b > this._duration && (b = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? b = this._duration - b + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (b += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(b, h)) : this._time
        }, h.repeat = function(b) {
            return arguments.length ? (this._repeat = b, this._uncache(!0)) : this._repeat
        }, h.repeatDelay = function(b) {
            return arguments.length ? (this._repeatDelay =
                b, this._uncache(!0)) : this._repeatDelay
        }, h.yoyo = function(b) {
            return arguments.length ? (this._yoyo = b, this) : this._yoyo
        }, h.currentLabel = function(b) {
            return arguments.length ? this.seek(b, !0) : this.getLabelBefore(this._time + 1E-8)
        }, m
    }, !0);
    (function() {
        var q = 180 / Math.PI,
            v = [],
            h = [],
            m = [],
            b = {}, B = function(b, g, c, d) {
                this.a = b;
                this.b = g;
                this.c = c;
                this.d = d;
                this.da = d - b;
                this.ca = c - b;
                this.ba = g - b
            }, z = function(b, g, c, d) {
                var f = {
                    a: b
                }, a = {}, e = {}, l = {
                        c: d
                    }, p = (b + g) / 2,
                    h = (g + c) / 2;
                c = (c + d) / 2;
                g = (p + h) / 2;
                var h = (h + c) / 2,
                    n = (h - g) / 8;
                return f.b = p + (b - p) /
                    4, a.b = g + n, f.c = a.a = (f.b + a.b) / 2, a.c = e.a = (g + h) / 2, e.b = h - n, l.b = c + (d - c) / 4, e.c = l.a = (e.b + l.b) / 2, [f, a, e, l]
            }, A = function(s, g, c, d, f, a) {
                var e, l, p, n, q = {}, ma = [],
                    V = a || s[0];
                f = "string" == typeof f ? "," + f + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,";
                null == g && (g = 1);
                for (l in s[0]) ma.push(l);
                if (1 < s.length) {
                    p = s[s.length - 1];
                    n = !0;
                    for (e = ma.length; - 1 < --e;)
                        if (l = ma[e], 0.05 < Math.abs(V[l] - p[l])) {
                            n = !1;
                            break
                        }
                    n &&
                        (s = s.concat(), a && s.unshift(a), s.push(s[1]), a = s[s.length - 3])
                }
                v.length = h.length = m.length = 0;
                for (e = ma.length; - 1 < --e;) {
                    l = ma[e];
                    b[l] = -1 !== f.indexOf("," + l + ",");
                    p = q;
                    var V = l,
                        C;
                    C = s;
                    var O = l,
                        H = b[l],
                        y = a,
                        I = void 0,
                        w = void 0,
                        A = void 0,
                        L = void 0,
                        D = void 0,
                        A = void 0,
                        G = [];
                    if (y)
                        for (C = [y].concat(C), w = C.length; - 1 < --w;) "string" == typeof(A = C[w][O]) && "=" === A.charAt(1) && (C[w][O] = y[O] + Number(A.charAt(0) + A.substr(2)));
                    if (I = C.length - 2, 0 > I) C = (G[0] = new B(C[0][O], 0, 0, C[-1 > I ? 0 : 1][O]), G);
                    else {
                        for (w = 0; I > w; w++) A = C[w][O], L = C[w + 1][O], G[w] =
                            new B(A, 0, 0, L), H && (D = C[w + 2][O], v[w] = (v[w] || 0) + (L - A) * (L - A), h[w] = (h[w] || 0) + (D - L) * (D - L));
                        C = (G[w] = new B(C[w][O], 0, 0, C[w + 1][O]), G)
                    }
                    p[V] = C
                }
                for (e = v.length; - 1 < --e;) v[e] = Math.sqrt(v[e]), h[e] = Math.sqrt(h[e]);
                if (!d) {
                    for (e = ma.length; - 1 < --e;)
                        if (b[l])
                            for (s = q[ma[e]], p = s.length - 1, f = 0; p > f; f++) a = s[f + 1].da / h[f] + s[f].da / v[f], m[f] = (m[f] || 0) + a * a;
                    for (e = m.length; - 1 < --e;) m[e] = Math.sqrt(m[e])
                }
                e = ma.length;
                for (f = c ? 4 : 1; - 1 < --e;) {
                    l = ma[e];
                    a = s = q[l];
                    p = g;
                    V = c;
                    C = d;
                    l = b[l];
                    for (var Q = y = H = O = void 0, J = L = A = Q = G = D = w = I = void 0, X = void 0, da = a.length -
                            1, Y = 0, R = a[0].a, O = 0; da > O; O++) I = a[Y], H = I.a, y = I.d, Q = a[Y + 1].d, l ? (L = v[O], J = h[O], X = 0.25 * (J + L) * p / (C ? 0.5 : m[O] || 0.5), w = y - (y - H) * (C ? 0.5 * p : 0 !== L ? X / L : 0), D = y + (Q - y) * (C ? 0.5 * p : 0 !== J ? X / J : 0), G = y - (w + ((D - w) * (3 * L / (L + J) + 0.5) / 4 || 0))) : (w = y - 0.5 * (y - H) * p, D = y + 0.5 * (Q - y) * p, G = y - (w + D) / 2), w += G, D += G, I.c = Q = w, I.b = 0 !== O ? R : R = I.a + 0.6 * (I.c - I.a), I.da = y - H, I.ca = Q - H, I.ba = R - H, V ? (A = z(H, R, Q, y), a.splice(Y, 1, A[0], A[1], A[2], A[3]), Y += 4) : Y++, R = D;
                    I = a[Y];
                    I.b = R;
                    I.c = R + 0.4 * (I.d - R);
                    I.da = I.d - I.a;
                    I.ca = I.c - I.a;
                    I.ba = R - I.a;
                    V && (A = z(I.a, R, I.c, I.d), a.splice(Y, 1,
                        A[0], A[1], A[2], A[3]));
                    n && (s.splice(0, f), s.splice(s.length - f, f))
                }
                return q
            }, n = window._gsDefine.plugin({
                propName: "bezier",
                priority: -1,
                version: "1.3.1",
                API: 2,
                global: !0,
                init: function(b, g, c) {
                    this._target = b;
                    g instanceof Array && (g = {
                        values: g
                    });
                    this._func = {};
                    this._round = {};
                    this._props = [];
                    this._timeRes = null == g.timeResolution ? 6 : parseInt(g.timeResolution, 10);
                    var d, f, a, e, l, h = g.values || [],
                        n = {};
                    a = h[0];
                    this._autoRotate = (f = g.autoRotate || c.vars.orientToBezier) ? f instanceof Array ? f : [
                        ["x", "y", "rotation", !0 === f ? 0 : Number(f) ||
                            0
                        ]
                    ] : null;
                    for (d in a) this._props.push(d);
                    for (a = this._props.length; - 1 < --a;) d = this._props[a], this._overwriteProps.push(d), f = this._func[d] = "function" == typeof b[d], n[d] = f ? b[d.indexOf("set") || "function" != typeof b["get" + d.substr(3)] ? d : "get" + d.substr(3)]() : parseFloat(b[d]), l || n[d] !== h[0][d] && (l = n);
                    if ("cubic" !== g.type && "quadratic" !== g.type && "soft" !== g.type) n = A(h, isNaN(g.curviness) ? 1 : g.curviness, !1, "thruBasic" === g.type, g.correlate, l);
                    else {
                        a = h;
                        var h = (h = g.type) || "soft",
                            m, q, z, C, v, H, y;
                        g = {};
                        l = "cubic" === h ? 3 : 2;
                        var I =
                            "soft" === h,
                            w = [];
                        if (I && n && (a = [n].concat(a)), null == a || l + 1 > a.length) throw "invalid Bezier data";
                        for (m in a[0]) w.push(m);
                        for (C = w.length; - 1 < --C;) {
                            m = w[C];
                            g[m] = f = [];
                            y = 0;
                            H = a.length;
                            for (v = 0; H > v; v++) h = null == n ? a[v][m] : "string" == typeof(q = a[v][m]) && "=" === q.charAt(1) ? n[m] + Number(q.charAt(0) + q.substr(2)) : Number(q), I && 1 < v && H - 1 > v && (f[y++] = (h + f[y - 2]) / 2), f[y++] = h;
                            H = y - l + 1;
                            for (v = y = 0; H > v; v += l) h = f[v], m = f[v + 1], q = f[v + 2], z = 2 === l ? 0 : f[v + 3], f[y++] = q = 3 === l ? new B(h, m, q, z) : new B(h, (2 * m + h) / 3, (2 * m + q) / 3, q);
                            f.length = y
                        }
                        n = g
                    } if (this._beziers =
                        n, this._segCount = this._beziers[d].length, this._timeRes) {
                        f = this._beziers;
                        d = this._timeRes;
                        d = d >> 0 || 6;
                        n = [];
                        m = [];
                        a = q = 0;
                        g = d - 1;
                        l = [];
                        h = [];
                        for (e in f) {
                            C = f[e];
                            v = n;
                            H = d;
                            var J = void 0,
                                L = void 0,
                                D = I = y = L = void 0,
                                G = J = void 0,
                                Q = void 0,
                                Q = D = void 0,
                                w = 1 / H;
                            for (z = C.length; - 1 < --z;)
                                for (D = C[z], L = D.a, y = D.d - L, I = D.c - L, D = D.b - L, L = 0, G = 1; H >= G; G++) J = w * G, Q = 1 - J, J = L - (L = (J * J * y + 3 * Q * (J * I + Q * D)) * J), Q = z * H + G - 1, v[Q] = (v[Q] || 0) + J * J
                        }
                        f = n.length;
                        for (e = 0; f > e; e++) q += Math.sqrt(n[e]), C = e % d, h[C] = q, C === g && (a += q, C = e / d >> 0, l[C] = h, m[C] = a, q = 0, h = []);
                        this._length =
                            a;
                        this._lengths = m;
                        this._segments = l;
                        this._l1 = this._li = this._s1 = this._si = 0;
                        this._l2 = this._lengths[0];
                        this._curSeg = this._segments[0];
                        this._s2 = this._curSeg[0];
                        this._prec = 1 / this._curSeg.length
                    }
                    if (f = this._autoRotate)
                        for (this._initialRotations = [], f[0] instanceof Array || (this._autoRotate = f = [f]), a = f.length; - 1 < --a;) {
                            for (e = 0; 3 > e; e++) d = f[a][e], this._func[d] = "function" == typeof b[d] ? b[d.indexOf("set") || "function" != typeof b["get" + d.substr(3)] ? d : "get" + d.substr(3)] : !1;
                            d = f[a][2];
                            this._initialRotations[a] = this._func[d] ?
                                this._func[d].call(this._target) : this._target[d]
                        }
                    return this._startRatio = c.vars.runBackwards ? 1 : 0, !0
                },
                set: function(b) {
                    var g, c, d, f, a, e;
                    a = this._segCount;
                    var h = this._func,
                        p = this._target,
                        n = b !== this._startRatio;
                    if (this._timeRes) {
                        if (g = this._lengths, f = this._curSeg, b *= this._length, d = this._li, b > this._l2 && a - 1 > d) {
                            for (a -= 1; a > d && b >= (this._l2 = g[++d]););
                            this._l1 = g[d - 1];
                            this._li = d;
                            this._curSeg = f = this._segments[d];
                            this._s2 = f[this._s1 = this._si = 0]
                        } else if (this._l1 > b && 0 < d) {
                            for (; 0 < d && (this._l1 = g[--d]) >= b;);
                            0 === d && this._l1 >
                                b ? this._l1 = 0 : d++;
                            this._l2 = g[d];
                            this._li = d;
                            this._curSeg = f = this._segments[d];
                            this._s1 = f[(this._si = f.length - 1) - 1] || 0;
                            this._s2 = f[this._si]
                        }
                        if (g = d, b -= this._l1, d = this._si, b > this._s2 && f.length - 1 > d) {
                            for (a = f.length - 1; a > d && b >= (this._s2 = f[++d]););
                            this._s1 = f[d - 1];
                            this._si = d
                        } else if (this._s1 > b && 0 < d) {
                            for (; 0 < d && (this._s1 = f[--d]) >= b;);
                            0 === d && this._s1 > b ? this._s1 = 0 : d++;
                            this._s2 = f[d];
                            this._si = d
                        }
                        a = (d + (b - this._s1) / (this._s2 - this._s1)) * this._prec
                    } else g = 0 > b ? 0 : 1 <= b ? a - 1 : a * b >> 0, a *= b - 1 / a * g;
                    c = 1 - a;
                    for (d = this._props.length; - 1 <
                        --d;) b = this._props[d], f = this._beziers[b][g], e = (a * a * f.da + 3 * c * (a * f.ca + c * f.ba)) * a + f.a, this._round[b] && (e = e + (0 < e ? 0.5 : -0.5) >> 0), h[b] ? p[b](e) : p[b] = e;
                    if (this._autoRotate) {
                        var m, v, z, C, A, H, y = this._autoRotate;
                        for (d = y.length; - 1 < --d;) b = y[d][2], A = y[d][3] || 0, H = !0 === y[d][4] ? 1 : q, f = this._beziers[y[d][0]], c = this._beziers[y[d][1]], f && c && (f = f[g], c = c[g], m = f.a + (f.b - f.a) * a, z = f.b + (f.c - f.b) * a, m += (z - m) * a, z += (f.c + (f.d - f.c) * a - z) * a, v = c.a + (c.b - c.a) * a, C = c.b + (c.c - c.b) * a, v += (C - v) * a, C += (c.c + (c.d - c.c) * a - C) * a, e = n ? Math.atan2(C - v, z - m) *
                            H + A : this._initialRotations[d], h[b] ? p[b](e) : p[b] = e)
                    }
                }
            }),
            J = n.prototype;
        n.bezierThrough = A;
        n.cubicToQuadratic = z;
        n._autoCSS = !0;
        n.quadraticToCubic = function(b, g, c) {
            return new B(b, (2 * g + b) / 3, (2 * g + c) / 3, c)
        };
        n._cssRegister = function() {
            var b = window._gsDefine.globals.CSSPlugin;
            if (b) {
                var b = b._internals,
                    g = b._parseToProxy,
                    c = b._setPluginRatio,
                    d = b.CSSPropTween;
                b._registerComplexSpecialProp("bezier", {
                    parser: function(b, a, e, h, p, m) {
                        a instanceof Array && (a = {
                            values: a
                        });
                        m = new n;
                        var q, s, v = a.values,
                            C = v.length - 1,
                            z = [],
                            A = {};
                        if (0 >
                            C) return p;
                        for (e = 0; C >= e; e++) s = g(b, v[e], h, p, m, C !== e), z[e] = s.end;
                        for (q in a) A[q] = a[q];
                        return A.values = z, p = new d(b, "bezier", 0, 0, s.pt, 2), p.data = s, p.plugin = m, p.setRatio = c, 0 === A.autoRotate && (A.autoRotate = !0), !A.autoRotate || A.autoRotate instanceof Array || (e = !0 === A.autoRotate ? 0 : Number(A.autoRotate), A.autoRotate = null != s.end.left ? [
                            ["left", "top", "rotation", e, !1]
                        ] : null != s.end.x ? [
                            ["x", "y", "rotation", e, !1]
                        ] : !1), A.autoRotate && (h._transform || h._enableTransforms(!1), s.autoRotate = h._target._gsTransform), m._onInitTween(s.proxy,
                            A, h._tween), p
                    }
                })
            }
        };
        J._roundProps = function(b, g) {
            for (var c = this._overwriteProps, d = c.length; - 1 < --d;)(b[c[d]] || b.bezier || b.bezierThrough) && (this._round[c[d]] = g)
        };
        J._kill = function(b) {
            var g, c, d = this._props;
            for (g in this._beziers)
                if (g in b)
                    for (delete this._beziers[g], delete this._func[g], c = d.length; - 1 < --c;) d[c] === g && d.splice(c, 1);
            return this._super._kill.call(this, b)
        }
    })();
    window._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(q, v) {
        var h, m, b, B, z = function() {
                q.call(this, "css");
                this._overwriteProps.length =
                    0;
                this.setRatio = z.prototype.setRatio
            }, A = {}, n = z.prototype = new q("css");
        n.constructor = z;
        z.version = "1.11.6";
        z.API = 2;
        z.defaultTransformPerspective = 0;
        z.defaultSkewType = "compensated";
        n = "px";
        z.suffixMap = {
            top: n,
            right: n,
            bottom: n,
            left: n,
            width: n,
            height: n,
            fontSize: n,
            padding: n,
            margin: n,
            perspective: n,
            lineHeight: ""
        };
        var J, s, g, c, d, f, a = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
            e = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
            l = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
            p = /[^\d\-\.]/g,
            M = /(?:\d|\-|\+|=|#|\.)*/g,
            P =
                /opacity *= *([^)]*)/,
            ma = /opacity:([^;]*)/,
            V = /alpha\(opacity *=.+?\)/i,
            C = /^(rgb|hsl)/,
            O = /([A-Z])/g,
            H = /-([a-z])/gi,
            y = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
            I = function(a, k) {
                return k.toUpperCase()
            }, w = /(?:Left|Right|Width)/i,
            Aa = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
            L = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
            D = /,(?=[^\)]*(?:\(|$))/gi,
            G = Math.PI / 180,
            Q = 180 / Math.PI,
            ha = {}, X = document,
            da = X.createElement("div"),
            Y = X.createElement("img"),
            R = z._internals = {
                _specialProps: A
            }, aa = navigator.userAgent,
            ia = function() {
                var a,
                    k = aa.indexOf("Android"),
                    e = X.createElement("div");
                return g = -1 !== aa.indexOf("Safari") && -1 === aa.indexOf("Chrome") && (-1 === k || 3 < Number(aa.substr(k + 8, 1))), d = g && 6 > Number(aa.substr(aa.indexOf("Version/") + 8, 1)), c = -1 !== aa.indexOf("Firefox"), /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(aa) && (f = parseFloat(RegExp.$1)), e.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>", a = e.getElementsByTagName("a")[0], a ? /^0.55/.test(a.style.opacity) : !1
            }(),
            k = function(a) {
                return P.test("string" == typeof a ? a : (a.currentStyle ? a.currentStyle.filter :
                    a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
            }, u = "",
            x = "",
            E = function(a, k) {
                k = k || da;
                var e, b, K = k.style;
                if (void 0 !== K[a]) return a;
                a = a.charAt(0).toUpperCase() + a.substr(1);
                e = ["O", "Moz", "ms", "Ms", "Webkit"];
                for (b = 5; - 1 < --b && void 0 === K[e[b] + a];);
                return 0 <= b ? (x = 3 === b ? "ms" : e[b], u = "-" + x.toLowerCase() + "-", x + a) : null
            }, W = X.defaultView ? X.defaultView.getComputedStyle : function() {}, S = z.getStyle = function(a, e, b, c, K) {
                var d;
                return ia || "opacity" !== e ? (!c && a.style[e] ? d = a.style[e] : (b = b || W(a, null)) ? (a = b.getPropertyValue(e.replace(O,
                    "-$1").toLowerCase()), d = a || b.length ? a : b[e]) : a.currentStyle && (d = a.currentStyle[e]), null == K || d && "none" !== d && "auto" !== d && "auto auto" !== d ? d : K) : k(a)
            }, ja = R.convertToPixels = function(a, k, e, b, K) {
                if ("px" === b || !b) return e;
                if ("auto" === b || !e) return 0;
                var d, c = w.test(k),
                    g = a,
                    t = da.style,
                    f = 0 > e;
                return f && (e = -e), "%" === b && -1 !== k.indexOf("border") ? d = e / 100 * (c ? a.clientWidth : a.clientHeight) : (t.cssText = "border:0 solid red;position:" + S(a, "position") + ";line-height:0;", "%" !== b && g.appendChild ? t[c ? "borderLeftWidth" : "borderTopWidth"] =
                    e + b : (g = a.parentNode || X.body, t[c ? "width" : "height"] = e + b), g.appendChild(da), d = parseFloat(da[c ? "offsetWidth" : "offsetHeight"]), g.removeChild(da), 0 !== d || K || (d = ja(a, k, e, b, !0))), f ? -d : d
            }, Z = R.calculateOffset = function(a, k, e) {
                if ("absolute" !== S(a, "position", e)) return 0;
                var b = "left" === k ? "Left" : "Top";
                e = S(a, "margin" + b, e);
                return a["offset" + b] - (ja(a, k, parseFloat(e), e.replace(M, "")) || 0)
            }, oa = function(a, e) {
                var b, d, K = {};
                if (e = e || W(a, null))
                    if (b = e.length)
                        for (; - 1 < --b;) K[e[b].replace(H, I)] = e.getPropertyValue(e[b]);
                    else
                        for (b in e) K[b] =
                            e[b];
                    else
                if (e = a.currentStyle || a.style)
                    for (b in e) "string" == typeof b && void 0 === K[b] && (K[b.replace(H, I)] = e[b]);
                return ia || (K.opacity = k(a)), d = Ha(a, e, !1), K.rotation = d.rotation, K.skewX = d.skewX, K.scaleX = d.scaleX, K.scaleY = d.scaleY, K.x = d.x, K.y = d.y, ua && (K.z = d.z, K.rotationX = d.rotationX, K.rotationY = d.rotationY, K.scaleZ = d.scaleZ), K.filters && delete K.filters, K
            }, wa = function(a, k, e, b, K) {
                var d, c, g, t = {}, f = a.style;
                for (c in e) "cssText" !== c && "length" !== c && isNaN(c) && (k[c] !== (d = e[c]) || K && K[c]) && -1 === c.indexOf("Origin") &&
                    ("number" == typeof d || "string" == typeof d) && (t[c] = "auto" !== d || "left" !== c && "top" !== c ? "" !== d && "auto" !== d && "none" !== d || "string" != typeof k[c] || "" === k[c].replace(p, "") ? d : 0 : Z(a, c), void 0 !== f[c] && (g = new ka(f, c, f[c], g)));
                if (b)
                    for (c in b) "className" !== c && (t[c] = b[c]);
                return {
                    difs: t,
                    firstMPT: g
                }
            }, qa = {
                width: ["Left", "Right"],
                height: ["Top", "Bottom"]
            }, xa = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
            Ea = function(a, k) {
                null != a && "" !== a && "auto" !== a && "auto auto" !== a || (a = "0 0");
                var e = a.split(" "),
                    b = -1 !== a.indexOf("left") ?
                        "0%" : -1 !== a.indexOf("right") ? "100%" : e[0],
                    K = -1 !== a.indexOf("top") ? "0%" : -1 !== a.indexOf("bottom") ? "100%" : e[1];
                return null == K ? K = "0" : "center" === K && (K = "50%"), ("center" === b || isNaN(parseFloat(b)) && -1 === (b + "").indexOf("=")) && (b = "50%"), k && (k.oxp = -1 !== b.indexOf("%"), k.oyp = -1 !== K.indexOf("%"), k.oxr = "=" === b.charAt(1), k.oyr = "=" === K.charAt(1), k.ox = parseFloat(b.replace(p, "")), k.oy = parseFloat(K.replace(p, ""))), b + " " + K + (2 < e.length ? " " + e[2] : "")
            }, Fa = function(a, k) {
                return "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) +
                    "1", 10) * parseFloat(a.substr(2)) : parseFloat(a) - parseFloat(k)
            }, ea = function(a, k) {
                return null == a ? k : "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * Number(a.substr(2)) + k : parseFloat(a)
            }, ca = function(a, k, e, b) {
                var K, d, c;
                return null == a ? c = k : "number" == typeof a ? c = a : (K = a.split("_"), d = Number(K[0].replace(p, "")) * (-1 === a.indexOf("rad") ? 1 : Q) - ("=" === a.charAt(1) ? 0 : k), K.length && (b && (b[e] = k + d), -1 !== a.indexOf("short") && (d %= 360, d !== d % 180 && (d = 0 > d ? d + 360 : d - 360)), -1 !== a.indexOf("_cw") && 0 > d ? d = (d + 3599999999640) %
                    360 - 360 * (0 | d / 360) : -1 !== a.indexOf("ccw") && 0 < d && (d = (d - 3599999999640) % 360 - 360 * (0 | d / 360))), c = k + d), 1E-6 > c && -1E-6 < c && (c = 0), c
            }, la = {
                aqua: [0, 255, 255],
                lime: [0, 255, 0],
                silver: [192, 192, 192],
                black: [0, 0, 0],
                maroon: [128, 0, 0],
                teal: [0, 128, 128],
                blue: [0, 0, 255],
                navy: [0, 0, 128],
                white: [255, 255, 255],
                fuchsia: [255, 0, 255],
                olive: [128, 128, 0],
                yellow: [255, 255, 0],
                orange: [255, 165, 0],
                gray: [128, 128, 128],
                purple: [128, 0, 128],
                green: [0, 128, 0],
                red: [255, 0, 0],
                pink: [255, 192, 203],
                cyan: [0, 255, 255],
                transparent: [255, 255, 255, 0]
            }, Ga = function(a, k, e) {
                return a =
                    0 > a ? a + 1 : 1 < a ? a - 1 : a, 0 | 255 * (1 > 6 * a ? k + 6 * (e - k) * a : 0.5 > a ? e : 2 > 3 * a ? k + 6 * (e - k) * (2 / 3 - a) : k) + 0.5
            }, Ba = function(k) {
                var e, b, d, K, c, g;
                return k && "" !== k ? "number" == typeof k ? [k >> 16, 255 & k >> 8, 255 & k] : ("," === k.charAt(k.length - 1) && (k = k.substr(0, k.length - 1)), la[k] ? la[k] : "#" === k.charAt(0) ? (4 === k.length && (e = k.charAt(1), b = k.charAt(2), d = k.charAt(3), k = "#" + e + e + b + b + d + d), k = parseInt(k.substr(1), 16), [k >> 16, 255 & k >> 8, 255 & k]) : "hsl" === k.substr(0, 3) ? (k = k.match(a), K = Number(k[0]) % 360 / 360, c = Number(k[1]) / 100, g = Number(k[2]) / 100, b = 0.5 >= g ? g * (c + 1) :
                    g + c - g * c, e = 2 * g - b, 3 < k.length && (k[3] = Number(k[3])), k[0] = Ga(K + 1 / 3, e, b), k[1] = Ga(K, e, b), k[2] = Ga(K - 1 / 3, e, b), k) : (k = k.match(a) || la.transparent, k[0] = Number(k[0]), k[1] = Number(k[1]), k[2] = Number(k[2]), 3 < k.length && (k[3] = Number(k[3])), k)) : la.black
            }, ra = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
        for (n in la) ra += "|" + n + "\\b";
        var ra = RegExp(ra + ")", "gi"),
            za = function(k, e, b, d) {
                if (null == k) return function(a) {
                    return a
                };
                var c, g = e ? (k.match(ra) || [""])[0] : "",
                    t = k.split(g).join("").match(l) || [],
                    f = k.substr(0, k.indexOf(t[0])),
                    h = ")" === k.charAt(k.length - 1) ? ")" : "",
                    x = -1 !== k.indexOf(" ") ? " " : ",",
                    u = t.length,
                    p = 0 < u ? t[0].replace(a, "") : "";
                return u ? c = e ? function(a) {
                    var k, e, ga;
                    if ("number" == typeof a) a += p;
                    else if (d && D.test(a)) {
                        a = a.replace(D, "|").split("|");
                        for (ga = 0; a.length > ga; ga++) a[ga] = c(a[ga]);
                        return a.join(",")
                    }
                    if (k = (a.match(ra) || [g])[0], e = a.split(k).join("").match(l) || [], ga = e.length, u > ga--)
                        for (; u > ++ga;) e[ga] = b ? e[0 | (ga - 1) / 2] : t[ga];
                    return f + e.join(x) + x + k + h + (-1 !== a.indexOf("inset") ? " inset" : "")
                } : function(a) {
                    var k, e;
                    if ("number" == typeof a) a +=
                        p;
                    else if (d && D.test(a)) {
                        a = a.replace(D, "|").split("|");
                        for (e = 0; a.length > e; e++) a[e] = c(a[e]);
                        return a.join(",")
                    }
                    if (k = a.match(l) || [], e = k.length, u > e--)
                        for (; u > ++e;) k[e] = b ? k[0 | (e - 1) / 2] : t[e];
                    return f + k.join(x) + h
                } : function(a) {
                    return a
                }
            }, Ia = function(a) {
                return a = a.split(","),
                function(k, e, b, d, c, g, t) {
                    b = (e + "").split(" ");
                    t = {};
                    for (e = 0; 4 > e; e++) t[a[e]] = b[e] = b[e] || b[(e - 1) / 2 >> 0];
                    return d.parse(k, t, c, g)
                }
            }, ka = (R._setPluginRatio = function(a) {
                this.plugin.setRatio(a);
                for (var k, e, b = this.data, d = b.proxy, c = b.firstMPT; c;) k = d[c.v],
                c.r ? k = 0 < k ? 0 | k + 0.5 : 0 | k - 0.5 : 1E-6 > k && -1E-6 < k && (k = 0), c.t[c.p] = k, c = c._next;
                if (b.autoRotate && (b.autoRotate.rotation = d.rotation), 1 === a)
                    for (c = b.firstMPT; c;) {
                        if (e = c.t, e.type) {
                            if (1 === e.type) {
                                k = e.xs0 + e.s + e.xs1;
                                for (a = 1; e.l > a; a++) k += e["xn" + a] + e["xs" + (a + 1)];
                                e.e = k
                            }
                        } else e.e = e.s + e.xs0;
                        c = c._next
                    }
            }, function(a, k, e, b, d) {
                this.t = a;
                this.p = k;
                this.v = e;
                this.r = d;
                b && (b._prev = this, this._next = b)
            }),
            U = (R._parseToProxy = function(a, k, e, b, d, c) {
                var g, t, f, h = b,
                    x = {}, u = {};
                t = e._transform;
                var l = ha;
                e._transform = null;
                ha = k;
                b = a = e.parse(a, k, b,
                    d);
                ha = l;
                for (c && (e._transform = t, h && (h._prev = null, h._prev && (h._prev._next = null))); b && b !== h;) {
                    if (1 >= b.type && (g = b.p, u[g] = b.s + b.c, x[g] = b.s, c || (f = new ka(b, "s", g, f, b.r), b.c = 0), 1 === b.type))
                        for (e = b.l; 0 < --e;) t = "xn" + e, g = b.p + "_" + t, u[g] = b.data[t], x[g] = b[t], c || (f = new ka(b, t, g, f, b.rxp[t]));
                    b = b._next
                }
                return {
                    proxy: x,
                    end: u,
                    firstMPT: f,
                    pt: a
                }
            }, R.CSSPropTween = function(a, k, e, b, d, c, g, t, f, x, u) {
                this.t = a;
                this.p = k;
                this.s = e;
                this.c = b;
                this.n = g || k;
                a instanceof U || B.push(this.n);
                this.r = t;
                this.type = c || 0;
                f && (this.pr = f, h = !0);
                this.b =
                    void 0 === x ? e : x;
                this.e = void 0 === u ? e + b : u;
                d && (this._next = d, d._prev = this)
            }),
            pa = z.parseComplex = function(k, b, d, c, g, t, f, h, x, u) {
                d = d || t || "";
                f = new U(k, b, 0, 0, f, u ? 2 : 1, null, !1, h, d, c);
                c += "";
                var l, p, E, N, F;
                k = d.split(", ").join(",").split(" ");
                b = c.split(", ").join(",").split(" ");
                h = k.length;
                var r = !1 !== J;
                (-1 !== c.indexOf(",") || -1 !== d.indexOf(",")) && (k = k.join(" ").replace(D, ", ").split(" "), b = b.join(" ").replace(D, ", ").split(" "), h = k.length);
                h !== b.length && (k = (t || "").split(" "), h = k.length);
                f.plugin = x;
                f.setRatio = u;
                for (d =
                    0; h > d; d++)
                    if (l = k[d], x = b[d], E = parseFloat(l), E || 0 === E) f.appendXtra("", E, Fa(x, E), x.replace(e, ""), r && -1 !== x.indexOf("px"), !0);
                    else
                if (g && ("#" === l.charAt(0) || la[l] || C.test(l))) u = "," === x.charAt(x.length - 1) ? ")," : ")", l = Ba(l), x = Ba(x), (t = 6 < l.length + x.length) && !ia && 0 === x[3] ? (f["xs" + f.l] += f.l ? " transparent" : "transparent", f.e = f.e.split(b[d]).join("transparent")) : (ia || (t = !1), f.appendXtra(t ? "rgba(" : "rgb(", l[0], x[0] - l[0], ",", !0, !0).appendXtra("", l[1], x[1] - l[1], ",", !0).appendXtra("", l[2], x[2] - l[2], t ? "," : u, !0), t &&
                    (l = 4 > l.length ? 1 : l[3], f.appendXtra("", l, (4 > x.length ? 1 : x[3]) - l, u, !1)));
                else if (t = l.match(a)) {
                    if (p = x.match(e), !p || p.length !== t.length) return f;
                    for (x = u = 0; t.length > x; x++) F = t[x], N = l.indexOf(F, u), f.appendXtra(l.substr(u, N - u), Number(F), Fa(p[x], F), "", r && "px" === l.substr(N + F.length, 2), 0 === x), u = N + F.length;
                    f["xs" + f.l] += l.substr(u)
                } else f["xs" + f.l] += f.l ? " " + l : l; if (-1 !== c.indexOf("=") && f.data) {
                    u = f.xs0 + f.data.s;
                    for (d = 1; f.l > d; d++) u += f["xs" + d] + f.data["xn" + d];
                    f.e = u + f["xs" + d]
                }
                return f.l || (f.type = -1, f.xs0 = f.e), f.xfirst ||
                    f
            }, t = 9,
            n = U.prototype;
        for (n.l = n.pr = 0; 0 < --t;) n["xn" + t] = 0, n["xs" + t] = "";
        n.xs0 = "";
        n._next = n._prev = n.xfirst = n.data = n.plugin = n.setRatio = n.rxp = null;
        n.appendXtra = function(a, k, e, b, d, c) {
            var g = this.l;
            return this["xs" + g] += c && g ? " " + a : a || "", e || 0 === g || this.plugin ? (this.l++, this.type = this.setRatio ? 2 : 1, this["xs" + this.l] = b || "", 0 < g ? (this.data["xn" + g] = k + e, this.rxp["xn" + g] = d, this["xn" + g] = k, this.plugin || (this.xfirst = new U(this, "xn" + g, k, e, this.xfirst || this, 0, this.n, d, this.pr), this.xfirst.xs0 = 0), this) : (this.data = {
                    s: k + e
                },
                this.rxp = {}, this.s = k, this.c = e, this.r = d, this)) : (this["xs" + g] += k + (b || ""), this)
        };
        var N = function(a, k) {
            k = k || {};
            this.p = k.prefix ? E(a) || a : a;
            A[a] = A[this.p] = this;
            this.format = k.formatter || za(k.defaultValue, k.color, k.collapsible, k.multi);
            k.parser && (this.parse = k.parser);
            this.clrs = k.color;
            this.multi = k.multi;
            this.keyword = k.keyword;
            this.dflt = k.defaultValue;
            this.pr = k.priority || 0
        }, F = R._registerComplexSpecialProp = function(a, k, e) {
                "object" != typeof k && (k = {
                    parser: e
                });
                var b = a.split(","),
                    d = k.defaultValue;
                e = e || [d];
                for (a = 0; b.length >
                    a; a++) k.prefix = 0 === a && k.prefix, k.defaultValue = e[a] || d, new N(b[a], k)
            }, T = function(a) {
                if (!A[a]) {
                    var k = a.charAt(0).toUpperCase() + a.substr(1) + "Plugin";
                    F(a, {
                        parser: function(a, e, b, d, c, g, f) {
                            var t = (window.GreenSockGlobals || window).com.greensock.plugins[k];
                            t ? a = (t._cssRegister(), A[b].parse(a, e, b, d, c, g, f)) : (window.console && console.log("Error: " + k + " js file not loaded."), a = c);
                            return a
                        }
                    })
                }
            }, n = N.prototype;
        n.parseComplex = function(a, k, e, b, d, c) {
            var g, f, t, h, x, l, u = this.keyword;
            if (this.multi && (D.test(e) || D.test(k) ? (f =
                k.replace(D, "|").split("|"), t = e.replace(D, "|").split("|")) : u && (f = [k], t = [e])), t) {
                h = t.length > f.length ? t.length : f.length;
                for (g = 0; h > g; g++) k = f[g] = f[g] || this.dflt, e = t[g] = t[g] || this.dflt, u && (x = k.indexOf(u), l = e.indexOf(u), x !== l && (e = -1 === l ? t : f, e[g] += " " + u));
                k = f.join(", ");
                e = t.join(", ")
            }
            return pa(a, this.p, k, e, this.clrs, this.dflt, b, this.pr, d, c)
        };
        n.parse = function(a, k, e, d, c, g) {
            return this.parseComplex(a.style, this.format(S(a, this.p, b, !1, this.dflt)), this.format(k), c, g)
        };
        z.registerSpecialProp = function(a, k, e) {
            F(a, {
                parser: function(a, b, d, c, g, f) {
                    g = new U(a, d, 0, 0, g, 2, d, !1, e);
                    return g.plugin = f, g.setRatio = k(a, b, c._tween, d), g
                },
                priority: e
            })
        };
        var Ra = "scaleX scaleY scaleZ x y z skewX rotation rotationX rotationY perspective".split(" "),
            sa = E("transform"),
            Xa = u + "transform",
            Na = E("transformOrigin"),
            ua = null !== E("perspective"),
            Sa = R.Transform = function() {
                this.skewY = 0
            }, Ha = R.getTransform = function(a, k, e, b) {
                if (a._gsTransform && e && !b) return a._gsTransform;
                var d, c, g, f, t, h, x, l, u, p, E, r = e ? a._gsTransform || new Sa : new Sa,
                    N = 0 > r.scaleX;
                t = 179.99 *
                    G;
                var F = ua ? parseFloat(S(a, Na, k, !1, "0 0 0").split(" ")[2]) || r.zOrigin || 0 : 0;
                sa ? d = S(a, Xa, k, !0) : a.currentStyle && (d = a.currentStyle.filter.match(Aa), d = d && 4 === d.length ? [d[0].substr(4), Number(d[2].substr(4)), Number(d[1].substr(4)), d[3].substr(4), r.x || 0, r.y || 0].join() : "");
                c = (d || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [];
                for (d = c.length; - 1 < --d;) g = Number(c[d]), c[d] = (f = g - (g |= 0)) ? (0 | 1E5 * f + (0 > f ? -0.5 : 0.5)) / 1E5 + g : g;
                if (16 === c.length) {
                    N = c[8];
                    k = c[9];
                    f = c[10];
                    g = c[12];
                    var n = c[13],
                        m = c[14];
                    if (r.zOrigin && (m = -r.zOrigin, g = N * m -
                        c[12], n = k * m - c[13], m = f * m + r.zOrigin - c[14]), !e || b || null == r.rotationX) {
                        var q;
                        b = c[0];
                        var W = c[1],
                            T = c[2],
                            s = c[3],
                            v = c[4],
                            y = c[5],
                            C = c[6],
                            Z = c[7];
                        c = c[11];
                        var w = Math.atan2(C, f),
                            A = -t > w || w > t;
                        r.rotationX = w * Q;
                        w && (u = Math.cos(-w), p = Math.sin(-w), h = v * u + N * p, x = y * u + k * p, l = C * u + f * p, N = v * -p + N * u, k = y * -p + k * u, f = C * -p + f * u, c = Z * -p + c * u, v = h, y = x, C = l);
                        w = Math.atan2(N, b);
                        r.rotationY = w * Q;
                        w && (E = -t > w || w > t, u = Math.cos(-w), p = Math.sin(-w), h = b * u - N * p, x = W * u - k * p, l = T * u - f * p, k = W * p + k * u, f = T * p + f * u, c = s * p + c * u, b = h, W = x, T = l);
                        w = Math.atan2(W, y);
                        r.rotation = w * Q;
                        w &&
                            (q = -t > w || w > t, u = Math.cos(-w), p = Math.sin(-w), b = b * u + v * p, x = W * u + y * p, y = W * -p + y * u, C = T * -p + C * u, W = x);
                        q && A ? r.rotation = r.rotationX = 0 : q && E ? r.rotation = r.rotationY = 0 : E && A && (r.rotationY = r.rotationX = 0);
                        r.scaleX = (0 | 1E5 * Math.sqrt(b * b + W * W) + 0.5) / 1E5;
                        r.scaleY = (0 | 1E5 * Math.sqrt(y * y + k * k) + 0.5) / 1E5;
                        r.scaleZ = (0 | 1E5 * Math.sqrt(C * C + f * f) + 0.5) / 1E5;
                        r.skewX = 0;
                        r.perspective = c ? 1 / (0 > c ? -c : c) : 0;
                        r.x = g;
                        r.y = n;
                        r.z = m
                    }
                } else ua && !b && c.length && r.x === c[4] && r.y === c[5] && (r.rotationX || r.rotationY) || void 0 !== r.x && "none" === S(a, "display", k) || (h = (t = 6 <=
                    c.length) ? c[0] : 1, l = c[1] || 0, x = c[2] || 0, u = t ? c[3] : 1, r.x = c[4] || 0, r.y = c[5] || 0, c = Math.sqrt(h * h + l * l), t = Math.sqrt(u * u + x * x), h = h || l ? Math.atan2(l, h) * Q : r.rotation || 0, x = x || u ? Math.atan2(x, u) * Q + h : r.skewX || 0, l = c - Math.abs(r.scaleX || 0), u = t - Math.abs(r.scaleY || 0), 90 < Math.abs(x) && 270 > Math.abs(x) && (N ? (c *= -1, x += 0 >= h ? 180 : -180, h += 0 >= h ? 180 : -180) : (t *= -1, x += 0 >= x ? 180 : -180)), p = (h - r.rotation) % 180, E = (x - r.skewX) % 180, (void 0 === r.skewX || 2E-5 < l || -2E-5 > l || 2E-5 < u || -2E-5 > u || -179.99 < p && 179.99 > p && 0 | 1E5 * p || -179.99 < E && 179.99 > E && 0 | 1E5 * E) && (r.scaleX =
                    c, r.scaleY = t, r.rotation = h, r.skewX = x), ua && (r.rotationX = r.rotationY = r.z = 0, r.perspective = parseFloat(z.defaultTransformPerspective) || 0, r.scaleZ = 1));
                r.zOrigin = F;
                for (d in r) 2E-5 > r[d] && -2E-5 < r[d] && (r[d] = 0);
                return e && (a._gsTransform = r), r
            }, Ya = function(a) {
                var k, e, b = this.data,
                    c = -b.rotation * G,
                    d = c + b.skewX * G,
                    g = (0 | Math.cos(c) * b.scaleX * 1E5) / 1E5,
                    h = (0 | Math.sin(c) * b.scaleX * 1E5) / 1E5,
                    u = (0 | Math.sin(d) * -b.scaleY * 1E5) / 1E5,
                    x = (0 | Math.cos(d) * b.scaleY * 1E5) / 1E5,
                    d = this.t.style;
                if (c = this.t.currentStyle) {
                    e = h;
                    h = -u;
                    u = -e;
                    k = c.filter;
                    d.filter = "";
                    var l, p;
                    e = this.t.offsetWidth;
                    var E = this.t.offsetHeight,
                        N = "absolute" !== c.position,
                        F = "progid:DXImageTransform.Microsoft.Matrix(M11=" + g + ", M12=" + h + ", M21=" + u + ", M22=" + x,
                        r = b.x,
                        m = b.y;
                    if (null != b.ox && (l = (b.oxp ? 0.01 * e * b.ox : b.ox) - e / 2, p = (b.oyp ? 0.01 * E * b.oy : b.oy) - E / 2, r += l - (l * g + p * h), m += p - (l * u + p * x)), N ? (l = e / 2, p = E / 2, F += ", Dx=" + (l - (l * g + p * h) + r) + ", Dy=" + (p - (l * u + p * x) + m) + ")") : F += ", sizingMethod='auto expand')", d.filter = -1 !== k.indexOf("DXImageTransform.Microsoft.Matrix(") ? k.replace(L, F) : F + " " + k, (0 === a || 1 ===
                        a) && 1 === g && 0 === h && 0 === u && 1 === x && (N && -1 === F.indexOf("Dx=0, Dy=0") || P.test(k) && 100 !== parseFloat(RegExp.$1) || -1 === k.indexOf(k.indexOf("Alpha")) && d.removeAttribute("filter")), !N)
                        for (a = 8 > f ? 1 : -1, l = b.ieOffsetX || 0, p = b.ieOffsetY || 0, b.ieOffsetX = Math.round((e - ((0 > g ? -g : g) * e + (0 > h ? -h : h) * E)) / 2 + r), b.ieOffsetY = Math.round((E - ((0 > x ? -x : x) * E + (0 > u ? -u : u) * e)) / 2 + m), t = 0; 4 > t; t++) g = xa[t], h = c[g], e = -1 !== h.indexOf("px") ? parseFloat(h) : ja(this.t, g, parseFloat(h), h.replace(M, "")) || 0, h = e !== b[g] ? 2 > t ? -b.ieOffsetX : -b.ieOffsetY : 2 > t ? l - b.ieOffsetX :
                            p - b.ieOffsetY, d[g] = (b[g] = Math.round(e - h * (0 === t || 2 === t ? 1 : a))) + "px"
                }
            }, Pa = R.set3DTransformRatio = function() {
                var a, k, e, b, d, g, f, t, h, u, x, l, p, E, N, r, F, m, n, S, q, W, T = this.data,
                    s = this.t.style,
                    v = T.rotation * G,
                    w = T.scaleX,
                    y = T.scaleY,
                    C = T.scaleZ,
                    Z = T.perspective;
                c && (1E-4 > w && -1E-4 < w && (w = C = 2E-5), 1E-4 > y && -1E-4 < y && (y = C = 2E-5), !Z || T.z || T.rotationX || T.rotationY || (Z = 0));
                if (v || T.skewX) F = Math.cos(v), m = Math.sin(v), a = F, d = m, T.skewX && (v -= T.skewX * G, F = Math.cos(v), m = Math.sin(v), "simple" === T.skewType && (n = Math.tan(T.skewX * G), n = Math.sqrt(1 +
                    n * n), F *= n, m *= n)), k = -m, g = F;
                else {
                    if (!(T.rotationY || T.rotationX || 1 !== C || Z)) return s[sa] = "translate3d(" + T.x + "px," + T.y + "px," + T.z + "px)" + (1 !== w || 1 !== y ? " scale(" + w + "," + y + ")" : ""), void 0;
                    a = g = 1;
                    k = d = 0
                }
                x = 1;
                e = b = f = t = h = u = l = p = E = 0;
                N = Z ? -1 / Z : 0;
                r = T.zOrigin;
                (v = T.rotationY * G) && (F = Math.cos(v), m = Math.sin(v), h = x * -m, p = N * -m, e = a * m, f = d * m, x *= F, N *= F, a *= F, d *= F);
                (v = T.rotationX * G) && (F = Math.cos(v), m = Math.sin(v), n = k * F + e * m, S = g * F + f * m, q = u * F + x * m, W = E * F + N * m, e = k * -m + e * F, f = g * -m + f * F, x = u * -m + x * F, N = E * -m + N * F, k = n, g = S, u = q, E = W);
                1 !== C && (e *= C, f *= C, x *=
                    C, N *= C);
                1 !== y && (k *= y, g *= y, u *= y, E *= y);
                1 !== w && (a *= w, d *= w, h *= w, p *= w);
                r && (l -= r, b = e * l, t = f * l, l = x * l + r);
                b = (n = (b += T.x) - (b |= 0)) ? (0 | 1E5 * n + (0 > n ? -0.5 : 0.5)) / 1E5 + b : b;
                t = (n = (t += T.y) - (t |= 0)) ? (0 | 1E5 * n + (0 > n ? -0.5 : 0.5)) / 1E5 + t : t;
                l = (n = (l += T.z) - (l |= 0)) ? (0 | 1E5 * n + (0 > n ? -0.5 : 0.5)) / 1E5 + l : l;
                s[sa] = "matrix3d(" + [(0 | 1E5 * a) / 1E5, (0 | 1E5 * d) / 1E5, (0 | 1E5 * h) / 1E5, (0 | 1E5 * p) / 1E5, (0 | 1E5 * k) / 1E5, (0 | 1E5 * g) / 1E5, (0 | 1E5 * u) / 1E5, (0 | 1E5 * E) / 1E5, (0 | 1E5 * e) / 1E5, (0 | 1E5 * f) / 1E5, (0 | 1E5 * x) / 1E5, (0 | 1E5 * N) / 1E5, b, t, l, Z ? 1 + -l / Z : 1].join() + ")"
            }, Za = R.set2DTransformRatio =
                function(a) {
                    var k, e, b, d, c = this.data,
                        g = this.t.style;
                    return c.rotationX || c.rotationY || c.z || c.force3D ? (this.setRatio = Pa, Pa.call(this, a), void 0) : (c.rotation || c.skewX ? (k = c.rotation * G, e = k - c.skewX * G, b = 1E5 * c.scaleX, d = 1E5 * c.scaleY, g[sa] = "matrix(" + (0 | Math.cos(k) * b) / 1E5 + "," + (0 | Math.sin(k) * b) / 1E5 + "," + (0 | Math.sin(e) * -d) / 1E5 + "," + (0 | Math.cos(e) * d) / 1E5 + "," + c.x + "," + c.y + ")") : g[sa] = "matrix(" + c.scaleX + ",0,0," + c.scaleY + "," + c.x + "," + c.y + ")", void 0)
            };
        F("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType", {
            parser: function(a, k, e, c, d, g, f) {
                if (c._transform) return d;
                var t, h, x, u, l, p;
                k = c._transform = Ha(a, b, !0, f.parseTransform);
                var E = a.style,
                    F = Ra.length,
                    r = {};
                if ("string" == typeof f.transform && sa) x = E.cssText, E[sa] = f.transform, E.display = "block", t = Ha(a, null, !1), E.cssText = x;
                else if ("object" == typeof f) {
                    if (t = {
                        scaleX: ea(null != f.scaleX ? f.scaleX : f.scale, k.scaleX),
                        scaleY: ea(null != f.scaleY ? f.scaleY : f.scale, k.scaleY),
                        scaleZ: ea(f.scaleZ, k.scaleZ),
                        x: ea(f.x, k.x),
                        y: ea(f.y, k.y),
                        z: ea(f.z, k.z),
                        perspective: ea(f.transformPerspective,
                            k.perspective)
                    }, p = f.directionalRotation, null != p)
                        if ("object" == typeof p)
                            for (x in p) f[x] = p[x];
                        else f.rotation = p;
                    t.rotation = ca("rotation" in f ? f.rotation : "shortRotation" in f ? f.shortRotation + "_short" : "rotationZ" in f ? f.rotationZ : k.rotation, k.rotation, "rotation", r);
                    ua && (t.rotationX = ca("rotationX" in f ? f.rotationX : "shortRotationX" in f ? f.shortRotationX + "_short" : k.rotationX || 0, k.rotationX, "rotationX", r), t.rotationY = ca("rotationY" in f ? f.rotationY : "shortRotationY" in f ? f.shortRotationY + "_short" : k.rotationY || 0, k.rotationY,
                        "rotationY", r));
                    t.skewX = null == f.skewX ? k.skewX : ca(f.skewX, k.skewX);
                    t.skewY = null == f.skewY ? k.skewY : ca(f.skewY, k.skewY);
                    (h = t.skewY - k.skewY) && (t.skewX += h, t.rotation += h)
                }
                ua && null != f.force3D && (k.force3D = f.force3D, l = !0);
                k.skewType = f.skewType || k.skewType || z.defaultSkewType;
                for ((h = k.force3D || k.z || k.rotationX || k.rotationY || t.z || t.rotationX || t.rotationY || t.perspective) || null == f.scale || (t.scaleZ = 1); - 1 < --F;) e = Ra[F], u = t[e] - k[e], (1E-6 < u || -1E-6 > u || null != ha[e]) && (l = !0, d = new U(k, e, k[e], u, d), e in r && (d.e = r[e]), d.xs0 =
                    0, d.plugin = g, c._overwriteProps.push(d.n));
                return u = f.transformOrigin, (u || ua && h && k.zOrigin) && (sa ? (l = !0, e = Na, u = (u || S(a, e, b, !1, "50% 50%")) + "", d = new U(E, e, 0, 0, d, -1, "transformOrigin"), d.b = E[e], d.plugin = g, ua ? (x = k.zOrigin, u = u.split(" "), k.zOrigin = (2 < u.length && (0 === x || "0px" !== u[2]) ? parseFloat(u[2]) : x) || 0, d.xs0 = d.e = E[e] = u[0] + " " + (u[1] || "50%") + " 0px", d = new U(k, "zOrigin", 0, 0, d, -1, d.n), d.b = x, d.xs0 = d.e = k.zOrigin) : d.xs0 = d.e = E[e] = u) : Ea(u + "", k)), l && (c._transformType = h || 3 === this._transformType ? 3 : 2), d
            },
            prefix: !0
        });
        F("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
        });
        F("borderRadius", {
            defaultValue: "0px",
            parser: function(a, k, e, d, c) {
                k = this.format(k);
                var g, f, t, h, u, x, l, p, F, N, r, n, q, T, W = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                    v = a.style;
                d = parseFloat(a.offsetWidth);
                p = parseFloat(a.offsetHeight);
                k = k.split(" ");
                for (g = 0; W.length > g; g++) this.p.indexOf("border") && (W[g] = E(W[g])), h = t = S(a, W[g], b, !1, "0px"), -1 !== h.indexOf(" ") &&
                    (t = h.split(" "), h = t[0], t = t[1]), u = f = k[g], x = parseFloat(h), N = h.substr((x + "").length), (r = "=" === u.charAt(1)) ? (l = parseInt(u.charAt(0) + "1", 10), u = u.substr(2), l *= parseFloat(u), F = u.substr((l + "").length - (0 > l ? 1 : 0)) || "") : (l = parseFloat(u), F = u.substr((l + "").length)), "" === F && (F = m[e] || N), F !== N && (n = ja(a, "borderLeft", x, N), q = ja(a, "borderTop", x, N), "%" === F ? (h = n / d * 100 + "%", t = q / p * 100 + "%") : "em" === F ? (T = ja(a, "borderLeft", 1, "em"), h = n / T + "em", t = q / T + "em") : (h = n + "px", t = q + "px"), r && (u = parseFloat(h) + l + F, f = parseFloat(t) + l + F)), c = pa(v,
                    W[g], h + " " + t, u + " " + f, !1, "0px", c);
                return c
            },
            prefix: !0,
            formatter: za("0px 0px 0px 0px", !1, !0)
        });
        F("backgroundPosition", {
            defaultValue: "0 0",
            parser: function(a, k, e, d, c, g) {
                var t, h, u;
                e = b || W(a, null);
                e = this.format((e ? f ? e.getPropertyValue("background-position-x") + " " + e.getPropertyValue("background-position-y") : e.getPropertyValue("background-position") : a.currentStyle.backgroundPositionX + " " + a.currentStyle.backgroundPositionY) || "0 0");
                var x = this.format(k);
                if (-1 !== e.indexOf("%") != (-1 !== x.indexOf("%")) && (t = S(a,
                    "backgroundImage").replace(y, ""), t && "none" !== t)) {
                    k = e.split(" ");
                    d = x.split(" ");
                    Y.setAttribute("src", t);
                    for (t = 2; - 1 < --t;) e = k[t], h = -1 !== e.indexOf("%"), h !== (-1 !== d[t].indexOf("%")) && (u = 0 === t ? a.offsetWidth - Y.width : a.offsetHeight - Y.height, k[t] = h ? parseFloat(e) / 100 * u + "px" : 100 * (parseFloat(e) / u) + "%");
                    e = k.join(" ")
                }
                return this.parseComplex(a.style, e, x, c, g)
            },
            formatter: Ea
        });
        F("backgroundSize", {
            defaultValue: "0 0",
            formatter: Ea
        });
        F("perspective", {
            defaultValue: "0px",
            prefix: !0
        });
        F("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
        });
        F("transformStyle", {
            prefix: !0
        });
        F("backfaceVisibility", {
            prefix: !0
        });
        F("userSelect", {
            prefix: !0
        });
        F("margin", {
            parser: Ia("marginTop,marginRight,marginBottom,marginLeft")
        });
        F("padding", {
            parser: Ia("paddingTop,paddingRight,paddingBottom,paddingLeft")
        });
        F("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function(a, k, e, d, c, g) {
                var t, h, u;
                return 9 > f ? (h = a.currentStyle, u = 8 > f ? " " : ",", t = "rect(" + h.clipTop + u + h.clipRight + u + h.clipBottom + u + h.clipLeft + ")", k = this.format(k).split(",").join(u)) : (t = this.format(S(a,
                    this.p, b, !1, this.dflt)), k = this.format(k)), this.parseComplex(a.style, t, k, c, g)
            }
        });
        F("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
        });
        F("autoRound,strictUnits", {
            parser: function(a, k, e, b, d) {
                return d
            }
        });
        F("border", {
            defaultValue: "0px solid #000",
            parser: function(a, k, e, d, c, g) {
                return this.parseComplex(a.style, this.format(S(a, "borderTopWidth", b, !1, "0px") + " " + S(a, "borderTopStyle", b, !1, "solid") + " " + S(a, "borderTopColor", b, !1, "#000")), this.format(k), c, g)
            },
            color: !0,
            formatter: function(a) {
                var k = a.split(" ");
                return k[0] + " " + (k[1] || "solid") + " " + (a.match(ra) || ["#000"])[0]
            }
        });
        F("borderWidth", {
            parser: Ia("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
        });
        F("float,cssFloat,styleFloat", {
            parser: function(a, k, e, b, d) {
                a = a.style;
                b = "cssFloat" in a ? "cssFloat" : "styleFloat";
                return new U(a, b, 0, 0, d, -1, e, !1, 0, a[b], k)
            }
        });
        var $a = function(a) {
            var k, e = this.t,
                b = e.filter || S(this.data, "filter");
            a = 0 | this.s + this.c * a;
            100 === a && (-1 === b.indexOf("atrix(") && -1 === b.indexOf("radient(") && -1 === b.indexOf("oader(") ? (e.removeAttribute("filter"),
                k = !S(this.data, "filter")) : (e.filter = b.replace(V, ""), k = !0));
            k || (this.xn1 && (e.filter = b = b || "alpha(opacity=" + a + ")"), -1 === b.indexOf("opacity") ? 0 === a && this.xn1 || (e.filter = b + " alpha(opacity=" + a + ")") : e.filter = b.replace(P, "opacity=" + a))
        };
        F("opacity,alpha,autoAlpha", {
            defaultValue: "1",
            parser: function(a, k, e, d, c, g) {
                var f = parseFloat(S(a, "opacity", b, !1, "1")),
                    t = a.style,
                    h = "autoAlpha" === e;
                return "string" == typeof k && "=" === k.charAt(1) && (k = ("-" === k.charAt(0) ? -1 : 1) * parseFloat(k.substr(2)) + f), h && 1 === f && "hidden" === S(a, "visibility",
                    b) && 0 !== k && (f = 0), ia ? c = new U(t, "opacity", f, k - f, c) : (c = new U(t, "opacity", 100 * f, 100 * (k - f), c), c.xn1 = h ? 1 : 0, t.zoom = 1, c.type = 2, c.b = "alpha(opacity=" + c.s + ")", c.e = "alpha(opacity=" + (c.s + c.c) + ")", c.data = a, c.plugin = g, c.setRatio = $a), h && (c = new U(t, "visibility", 0, 0, c, -1, null, !1, 0, 0 !== f ? "inherit" : "hidden", 0 === k ? "hidden" : "inherit"), c.xs0 = "inherit", d._overwriteProps.push(c.n), d._overwriteProps.push(e)), c
            }
        });
        var Qa = function(a, k) {
            k && (a.removeProperty ? a.removeProperty(k.replace(O, "-$1").toLowerCase()) : a.removeAttribute(k))
        },
            ab = function(a) {
                if (this.t._gsClassPT = this, 1 === a || 0 === a) {
                    this.t.className = 0 === a ? this.b : this.e;
                    for (var k = this.data, e = this.t.style; k;) k.v ? e[k.p] = k.v : Qa(e, k.p), k = k._next;
                    1 === a && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                } else this.t.className !== this.e && (this.t.className = this.e)
            };
        F("className", {
            parser: function(a, k, e, c, d, g, f) {
                var t, u, x, l, p = a.className,
                    E = a.style.cssText;
                if (d = c._classNamePT = new U(a, e, 0, 0, d, 2), d.setRatio = ab, d.pr = -11, h = !0, d.b = p, e = oa(a, b), u = a._gsClassPT) {
                    x = {};
                    for (l = u.data; l;) x[l.p] = 1,
                    l = l._next;
                    u.setRatio(1)
                }
                return a._gsClassPT = d, d.e = "=" !== k.charAt(1) ? k : p.replace(RegExp("\\s*\\b" + k.substr(2) + "\\b"), "") + ("+" === k.charAt(0) ? " " + k.substr(2) : ""), c._tween._duration && (a.className = d.e, t = wa(a, e, oa(a), f, x), a.className = p, d.data = t.firstMPT, a.style.cssText = E, d = d.xfirst = c.parse(a, t.difs, d, g)), d
            }
        });
        var bb = function(a) {
            if ((1 === a || 0 === a) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var k, e, b, d = this.t.style,
                    c = A.transform.parse;
                if ("all" === this.e) d.cssText = "", b = !0;
                else
                    for (a = this.e.split(","), e = a.length; - 1 < --e;) k = a[e], A[k] && (A[k].parse === c ? b = !0 : k = "transformOrigin" === k ? Na : A[k].p), Qa(d, k);
                b && (Qa(d, sa), this.t._gsTransform && delete this.t._gsTransform)
            }
        };
        F("clearProps", {
            parser: function(a, k, e, b, d) {
                return d = new U(a, e, 0, 0, d, 2), d.setRatio = bb, d.e = k, d.pr = -10, d.data = b._tween, h = !0, d
            }
        });
        n = ["bezier", "throwProps", "physicsProps", "physics2D"];
        for (t = n.length; t--;) T(n[t]);
        n = z.prototype;
        n._firstPT = null;
        n._onInitTween = function(a, k, e) {
            if (!a.nodeType) return !1;
            this._target = a;
            this._tween =
                e;
            this._vars = k;
            J = k.autoRound;
            h = !1;
            m = k.suffixMap || z.suffixMap;
            b = W(a, "");
            B = this._overwriteProps;
            var c, f, t, u, x = a.style;
            if (s && "" === x.zIndex && (c = S(a, "zIndex", b), ("auto" === c || "" === c) && (x.zIndex = 0)), "string" == typeof k && (t = x.cssText, c = oa(a, b), x.cssText = t + ";" + k, c = wa(a, c, oa(a)).difs, !ia && ma.test(k) && (c.opacity = parseFloat(RegExp.$1)), k = c, x.cssText = t), this._firstPT = e = this.parse(a, k, null), this._transformType) {
                k = 3 === this._transformType;
                sa ? g && (s = !0, "" === x.zIndex && (f = S(a, "zIndex", b), ("auto" === f || "" === f) && (x.zIndex =
                    0)), d && (x.WebkitBackfaceVisibility = this._vars.WebkitBackfaceVisibility || (k ? "visible" : "hidden"))) : x.zoom = 1;
                for (f = e; f && f._next;) f = f._next;
                c = new U(a, "transform", 0, 0, null, 2);
                this._linkCSSP(c, null, f);
                c.setRatio = k && ua ? Pa : sa ? Za : Ya;
                c.data = this._transform || Ha(a, b, !0);
                B.pop()
            }
            if (h) {
                for (; e;) {
                    a = e._next;
                    for (f = t; f && f.pr > e.pr;) f = f._next;
                    (e._prev = f ? f._prev : u) ? e._prev._next = e : t = e;
                    (e._next = f) ? f._prev = e : u = e;
                    e = a
                }
                this._firstPT = t
            }
            return !0
        };
        n.parse = function(a, k, e, d) {
            var c, f, g, t, u, h, x, l, p, E = a.style;
            for (c in k) {
                u = k[c];
                if (f =
                    A[c]) e = f.parse(a, u, c, this, e, d, k);
                else if (f = S(a, c, b) + "", l = "string" == typeof u, "color" === c || "fill" === c || "stroke" === c || -1 !== c.indexOf("Color") || l && C.test(u)) l || (u = Ba(u), u = (3 < u.length ? "rgba(" : "rgb(") + u.join(",") + ")"), e = pa(E, c, f, u, !0, "transparent", e, 0, d);
                else if (!l || -1 === u.indexOf(" ") && -1 === u.indexOf(",")) {
                    h = (g = parseFloat(f)) || 0 === g ? f.substr((g + "").length) : "";
                    if ("" === f || "auto" === f)
                        if ("width" === c || "height" === c) {
                            g = a;
                            var F = c;
                            h = b;
                            p = parseFloat("width" === F ? g.offsetWidth : g.offsetHeight);
                            var F = qa[F],
                                N = F.length;
                            for (h = h || W(g, null); - 1 < --N;) p -= parseFloat(S(g, "padding" + F[N], h, !0)) || 0, p -= parseFloat(S(g, "border" + F[N] + "Width", h, !0)) || 0;
                            g = p;
                            h = "px"
                        } else "left" === c || "top" === c ? (g = Z(a, c, b), h = "px") : (g = "opacity" !== c ? 0 : 1, h = "");
                        (p = l && "=" === u.charAt(1)) ? (t = parseInt(u.charAt(0) + "1", 10), u = u.substr(2), t *= parseFloat(u), x = u.replace(M, "")) : (t = parseFloat(u), x = l ? u.substr((t + "").length) || "" : "");
                        "" === x && (x = c in m ? m[c] : h);
                    u = t || 0 === t ? (p ? t + g : t) + x : k[c];
                    h === x || "" === x || !t && 0 !== t || !g && 0 !== g || (g = ja(a, c, g, h), "%" === x ? (g /= ja(a, c, 100, "%") / 100, !0 !== k.strictUnits && (f = g + "%")) : "em" === x ? g /= ja(a, c, 1, "em") : (t = ja(a, c, t, x), x = "px"), !p || !t && 0 !== t || (u = t + g + x));
                    p && (t += g);
                    !g && 0 !== g || !t && 0 !== t ? void 0 !== E[c] && (u || "NaN" != u + "" && null != u) ? (e = new U(E, c, t || g || 0, 0, e, -1, c, !1, 0, f, u), e.xs0 = "none" !== u || "display" !== c && -1 === c.indexOf("Style") ? u : f) : window.console && console.log("invalid " + c + " tween value: " + k[c]) : (e = new U(E, c, g, t - g, e, 0, c, !1 !== J && ("px" === x || "zIndex" === c), 0, f, u), e.xs0 = x)
                } else e = pa(E, c, f, u, !0, null, e, 0, d);
                d && e && !e.plugin && (e.plugin = d)
            }
            return e
        };
        n.setRatio =
            function(a) {
                var k, e, c, b = this._firstPT;
                if (1 !== a || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                    if (a || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1E-6 === this._tween._rawPrevTime)
                        for (; b;) {
                            if (k = b.c * a + b.s, b.r ? k = 0 < k ? 0 | k + 0.5 : 0 | k - 0.5 : 1E-6 > k && -1E-6 < k && (k = 0), b.type)
                                if (1 === b.type)
                                    if (c = b.l, 2 === c) b.t[b.p] = b.xs0 + k + b.xs1 + b.xn1 + b.xs2;
                                    else
                            if (3 === c) b.t[b.p] = b.xs0 + k + b.xs1 + b.xn1 + b.xs2 + b.xn2 + b.xs3;
                            else if (4 === c) b.t[b.p] = b.xs0 + k + b.xs1 + b.xn1 + b.xs2 + b.xn2 + b.xs3 + b.xn3 + b.xs4;
                            else if (5 ===
                                c) b.t[b.p] = b.xs0 + k + b.xs1 + b.xn1 + b.xs2 + b.xn2 + b.xs3 + b.xn3 + b.xs4 + b.xn4 + b.xs5;
                            else {
                                e = b.xs0 + k + b.xs1;
                                for (c = 1; b.l > c; c++) e += b["xn" + c] + b["xs" + (c + 1)];
                                b.t[b.p] = e
                            } else -1 === b.type ? b.t[b.p] = b.xs0 : b.setRatio && b.setRatio(a);
                            else b.t[b.p] = k + b.xs0;
                            b = b._next
                        } else
                            for (; b;) 2 !== b.type ? b.t[b.p] = b.b : b.setRatio(a), b = b._next;
                    else
                        for (; b;) 2 !== b.type ? b.t[b.p] = b.e : b.setRatio(a), b = b._next
        };
        n._enableTransforms = function(a) {
            this._transformType = a || 3 === this._transformType ? 3 : 2;
            this._transform = this._transform || Ha(this._target, b, !0)
        };
        n._linkCSSP = function(a, k, e, b) {
            return a && (k && (k._prev = a), a._next && (a._next._prev = a._prev), a._prev ? a._prev._next = a._next : this._firstPT === a && (this._firstPT = a._next, b = !0), e ? e._next = a : b || null !== this._firstPT || (this._firstPT = a), a._next = k, a._prev = e), a
        };
        n._kill = function(a) {
            var k, e, b, c = a;
            if (a.autoAlpha || a.alpha) {
                c = {};
                for (e in a) c[e] = a[e];
                c.opacity = 1;
                c.autoAlpha && (c.visibility = 1)
            }
            return a.className && (k = this._classNamePT) && (b = k.xfirst, b && b._prev ? this._linkCSSP(b._prev, k._next, b._prev._prev) : b === this._firstPT &&
                (this._firstPT = k._next), k._next && this._linkCSSP(k._next, k._next._next, b._prev), this._classNamePT = null), q.prototype._kill.call(this, c)
        };
        var Ma = function(a, k, b) {
            var e, c, d;
            if (a.slice)
                for (e = a.length; - 1 < --e;) Ma(a[e], k, b);
            else
                for (a = a.childNodes, e = a.length; - 1 < --e;) c = a[e], d = c.type, c.style && (k.push(oa(c)), b && b.push(c)), 1 !== d && 9 !== d && 11 !== d || !c.childNodes.length || Ma(c, k, b)
        };
        return z.cascadeTo = function(a, k, e) {
            var b, c, d = v.to(a, k, e),
                g = [d],
                f = [],
                t = [],
                u = [],
                h = v._internals.reservedProps;
            a = d._targets || d.target;
            Ma(a,
                f, u);
            d.render(k, !0);
            Ma(a, t);
            d.render(0, !0);
            d._enabled(!0);
            for (a = u.length; - 1 < --a;)
                if (b = wa(u[a], f[a], t[a]), b.firstMPT) {
                    b = b.difs;
                    for (c in e) h[c] && (b[c] = e[c]);
                    g.push(v.to(u[a], k, b))
                }
            return g
        }, q.activate([z]), z
    }, !0);
    (function() {
        var q = window._gsDefine.plugin({
            propName: "roundProps",
            priority: -1,
            API: 2,
            init: function(q, h, m) {
                return this._tween = m, !0
            }
        }).prototype;
        q._onInitAllProps = function() {
            for (var q, h, m, b = this._tween, B = b.vars.roundProps instanceof Array ? b.vars.roundProps : b.vars.roundProps.split(","), z = B.length,
                    A = {}, n = b._propLookup.roundProps; - 1 < --z;) A[B[z]] = 1;
            for (z = B.length; - 1 < --z;)
                for (q = B[z], h = b._firstPT; h;) m = h._next, h.pg ? h.t._roundProps(A, !0) : h.n === q && (this._add(h.t, q, h.s, h.c), m && (m._prev = h._prev), h._prev ? h._prev._next = m : b._firstPT === h && (b._firstPT = m), h._next = h._prev = null, b._propLookup[q] = n), h = m;
            return !1
        };
        q._add = function(q, h, m, b) {
            this._addTween(q, h, m, m + b, h, !0);
            this._overwriteProps.push(h)
        }
    })();
    window._gsDefine.plugin({
        propName: "attr",
        API: 2,
        version: "0.2.0",
        init: function(q, v) {
            var h;
            if ("function" != typeof q.setAttribute) return !1;
            this._target = q;
            this._proxy = {};
            for (h in v) this._addTween(this._proxy, h, parseFloat(q.getAttribute(h)), v[h], h) && this._overwriteProps.push(h);
            return !0
        },
        set: function(q) {
            this._super.setRatio.call(this, q);
            for (var v = this._overwriteProps, h = v.length; - 1 < --h;) q = v[h], this._target.setAttribute(q, this._proxy[q] + "")
        }
    });
    window._gsDefine.plugin({
        propName: "directionalRotation",
        API: 2,
        version: "0.2.0",
        init: function(q, v) {
            "object" != typeof v && (v = {
                rotation: v
            });
            this.finals = {};
            var h, m, b, B, z, A, n = !0 === v.useRadians ? 2 * Math.PI : 360;
            for (h in v) "useRadians" !== h && (A = (v[h] + "").split("_"), m = A[0], b = parseFloat("function" != typeof q[h] ? q[h] : q[h.indexOf("set") || "function" != typeof q["get" + h.substr(3)] ? h : "get" + h.substr(3)]()), B = this.finals[h] = "string" == typeof m && "=" === m.charAt(1) ? b + parseInt(m.charAt(0) + "1", 10) * Number(m.substr(2)) : Number(m) || 0, z = B - b, A.length && (m = A.join("_"), -1 !== m.indexOf("short") && (z %= n, z !== z % (n / 2) && (z = 0 > z ? z + n : z - n)), -1 !== m.indexOf("_cw") && 0 > z ? z = (z + 9999999999 * n) % n - (0 | z / n) * n : -1 !== m.indexOf("ccw") && 0 < z && (z = (z - 9999999999 * n) %
                n - (0 | z / n) * n)), (1E-6 < z || -1E-6 > z) && (this._addTween(q, h, b, b + z, h), this._overwriteProps.push(h)));
            return !0
        },
        set: function(q) {
            if (1 !== q) this._super.setRatio.call(this, q);
            else
                for (q = this._firstPT; q;) q.f ? q.t[q.p](this.finals[q.p]) : q.t[q.p] = this.finals[q.p], q = q._next
        }
    })._autoCSS = !0;
    window._gsDefine("easing.Back", ["easing.Ease"], function(q) {
        var v, h, m, b = window.GreenSockGlobals || window,
            B = 2 * Math.PI,
            z = Math.PI / 2,
            A = b.com.greensock._class,
            n = function(a, b) {
                var c = A("easing." + a, function() {}, !0),
                    d = c.prototype = new q;
                return d.constructor =
                    c, d.getRatio = b, c
            }, J = q.register || function() {}, s = function(a, b, c, d) {
                b = A("easing." + a, {
                    easeOut: new b,
                    easeIn: new c,
                    easeInOut: new d
                }, !0);
                return J(b, a), b
            }, g = function(a, b, c) {
                this.t = a;
                this.v = b;
                c && (this.next = c, c.prev = this, this.c = c.v - b, this.gap = c.t - a)
            }, c = function(a, b) {
                var c = A("easing." + a, function(a) {
                    this._p1 = a || 0 === a ? a : 1.70158;
                    this._p2 = 1.525 * this._p1
                }, !0),
                    d = c.prototype = new q;
                return d.constructor = c, d.getRatio = b, d.config = function(a) {
                    return new c(a)
                }, c
            }, c = s("Back", c("BackOut", function(a) {
                return (a -= 1) * a * ((this._p1 +
                    1) * a + this._p1) + 1
            }), c("BackIn", function(a) {
                return a * a * ((this._p1 + 1) * a - this._p1)
            }), c("BackInOut", function(a) {
                return 1 > (a *= 2) ? 0.5 * a * a * ((this._p2 + 1) * a - this._p2) : 0.5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) + 2)
            })),
            d = A("easing.SlowMo", function(a, b, c) {
                null == a ? a = 0.7 : 1 < a && (a = 1);
                this._p = 1 !== a ? b || 0 === b ? b : 0.7 : 0;
                this._p1 = (1 - a) / 2;
                this._p2 = a;
                this._p3 = this._p1 + this._p2;
                this._calcEnd = !0 === c
            }, !0),
            f = d.prototype = new q;
        return f.constructor = d, f.getRatio = function(a) {
            var b = a + (0.5 - a) * this._p;
            return this._p1 > a ? this._calcEnd ? 1 - (a =
                1 - a / this._p1) * a : b - (a = 1 - a / this._p1) * a * a * a * b : a > this._p3 ? this._calcEnd ? 1 - (a = (a - this._p3) / this._p1) * a : b + (a - b) * (a = (a - this._p3) / this._p1) * a * a * a : this._calcEnd ? 1 : b
        }, d.ease = new d(0.7, 0.7), f.config = d.config = function(a, b, c) {
            return new d(a, b, c)
        }, v = A("easing.SteppedEase", function(a) {
            a = a || 1;
            this._p1 = 1 / a;
            this._p2 = a + 1
        }, !0), f = v.prototype = new q, f.constructor = v, f.getRatio = function(a) {
            return 0 > a ? a = 0 : 1 <= a && (a = 0.999999999), (this._p2 * a >> 0) * this._p1
        }, f.config = v.config = function(a) {
            return new v(a)
        }, h = A("easing.RoughEase",
            function(a) {
                a = a || {};
                for (var b, c, d, f, h = a.taper || "none", m = [], n = 0, v = f = 0 | (a.points || 20), s = !1 !== a.randomize, z = !0 === a.clamp, y = a.template instanceof q ? a.template : null, A = "number" == typeof a.strength ? 0.4 * a.strength : 0.4; - 1 < --v;) a = s ? Math.random() : 1 / f * v, b = y ? y.getRatio(a) : a, "none" === h ? c = A : "out" === h ? (d = 1 - a, c = d * d * A) : "in" === h ? c = a * a * A : 0.5 > a ? (d = 2 * a, c = 0.5 * d * d * A) : (d = 2 * (1 - a), c = 0.5 * d * d * A), s ? b += Math.random() * c - 0.5 * c : v % 2 ? b += 0.5 * c : b -= 0.5 * c, z && (1 < b ? b = 1 : 0 > b && (b = 0)), m[n++] = {
                    x: a,
                    y: b
                };
                m.sort(function(a, b) {
                    return a.x - b.x
                });
                c = new g(1,
                    1, null);
                for (v = f; - 1 < --v;) f = m[v], c = new g(f.x, f.y, c);
                this._prev = new g(0, 0, 0 !== c.t ? c : c.next)
            }, !0), f = h.prototype = new q, f.constructor = h, f.getRatio = function(a) {
            var b = this._prev;
            if (a > b.t) {
                for (; b.next && a >= b.t;) b = b.next;
                b = b.prev
            } else
                for (; b.prev && b.t >= a;) b = b.prev;
            return this._prev = b, b.v + (a - b.t) / b.gap * b.c
        }, f.config = function(a) {
            return new h(a)
        }, h.ease = new h, s("Bounce", n("BounceOut", function(a) {
            return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a -=
                2.625 / 2.75) * a + 0.984375
        }), n("BounceIn", function(a) {
            return 1 / 2.75 > (a = 1 - a) ? 1 - 7.5625 * a * a : 2 / 2.75 > a ? 1 - (7.5625 * (a -= 1.5 / 2.75) * a + 0.75) : 2.5 / 2.75 > a ? 1 - (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375) : 1 - (7.5625 * (a -= 2.625 / 2.75) * a + 0.984375)
        }), n("BounceInOut", function(a) {
            var b = 0.5 > a;
            return a = b ? 1 - 2 * a : 2 * a - 1, a = 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375, b ? 0.5 * (1 - a) : 0.5 * a + 0.5
        })), s("Circ", n("CircOut", function(a) {
            return Math.sqrt(1 - (a -= 1) * a)
        }), n("CircIn",
            function(a) {
                return -(Math.sqrt(1 - a * a) - 1)
            }), n("CircInOut", function(a) {
            return 1 > (a *= 2) ? -0.5 * (Math.sqrt(1 - a * a) - 1) : 0.5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
        })), m = function(a, b, c) {
            var d = A("easing." + a, function(a, b) {
                this._p1 = a || 1;
                this._p2 = b || c;
                this._p3 = this._p2 / B * (Math.asin(1 / this._p1) || 0)
            }, !0);
            a = d.prototype = new q;
            return a.constructor = d, a.getRatio = b, a.config = function(a, b) {
                return new d(a, b)
            }, d
        }, s("Elastic", m("ElasticOut", function(a) {
            return this._p1 * Math.pow(2, -10 * a) * Math.sin((a - this._p3) * B / this._p2) + 1
        }, 0.3), m("ElasticIn",
            function(a) {
                return -(this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * B / this._p2))
            }, 0.3), m("ElasticInOut", function(a) {
            return 1 > (a *= 2) ? -0.5 * this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * B / this._p2) : 0.5 * this._p1 * Math.pow(2, -10 * (a -= 1)) * Math.sin((a - this._p3) * B / this._p2) + 1
        }, 0.45)), s("Expo", n("ExpoOut", function(a) {
            return 1 - Math.pow(2, -10 * a)
        }), n("ExpoIn", function(a) {
            return Math.pow(2, 10 * (a - 1)) - 0.001
        }), n("ExpoInOut", function(a) {
            return 1 > (a *= 2) ? 0.5 * Math.pow(2, 10 * (a - 1)) : 0.5 * (2 - Math.pow(2, -10 * (a - 1)))
        })),
        s("Sine", n("SineOut", function(a) {
            return Math.sin(a * z)
        }), n("SineIn", function(a) {
            return -Math.cos(a * z) + 1
        }), n("SineInOut", function(a) {
            return -0.5 * (Math.cos(Math.PI * a) - 1)
        })), A("easing.EaseLookup", {
            find: function(a) {
                return q.map[a]
            }
        }, !0), J(b.SlowMo, "SlowMo", "ease,"), J(h, "RoughEase", "ease,"), J(v, "SteppedEase", "ease,"), c
    }, !0)
});
(function(q) {
    var v = q.GreenSockGlobals || q;
    if (!v.TweenLite) {
        var h, m, b, B, z, A = function(a) {
                var b = a.split("."),
                    c = v;
                for (a = 0; b.length > a; a++) c[b[a]] = c = c[b[a]] || {};
                return c
            }, n = A("com.greensock"),
            J = [].slice,
            s = function() {}, g = function() {
                var a = Object.prototype.toString,
                    b = a.call([]);
                return function(c) {
                    return null != c && (c instanceof Array || "object" == typeof c && !! c.push && a.call(c) === b)
                }
            }(),
            c = {}, d = function(a, b, e, g) {
                this.sc = c[a] ? c[a].sc : [];
                c[a] = this;
                this.gsClass = null;
                this.func = e;
                var f = [];
                this.check = function(h) {
                    for (var l,
                            p, m = b.length, n = m; - 1 < --m;)(l = c[b[m]] || new d(b[m], [])).gsClass ? (f[m] = l.gsClass, n--) : h && l.sc.push(this);
                    if (0 === n && e)
                        for (h = ("com.greensock." + a).split("."), l = h.pop(), p = A(h.join("."))[l] = this.gsClass = e.apply(e, f), g && (v[l] = p, "function" == typeof define && define.amd ? define((q.GreenSockAMDPath ? q.GreenSockAMDPath + "/" : "") + a.split(".").join("/"), [], function() {
                            return p
                        }) : "undefined" != typeof module && module.exports && (module.exports = p)), m = 0; this.sc.length > m; m++) this.sc[m].check()
                };
                this.check(!0)
            }, f = q._gsDefine = function(a,
                b, c, e) {
                return new d(a, b, c, e)
            }, a = n._class = function(a, b, c) {
                return b = b || function() {}, f(a, [], function() {
                    return b
                }, c), b
            };
        f.globals = v;
        var e = [0, 0, 1, 1],
            l = [],
            p = a("easing.Ease", function(a, b, c, d) {
                this._func = a;
                this._type = c || 0;
                this._power = d || 0;
                this._params = b ? e.concat(b) : e
            }, !0),
            M = p.map = {}, P = p.register = function(k, b, c, e) {
                var d, g, f;
                b = b.split(",");
                for (var h = b.length, l = (c || "easeIn,easeOut,easeInOut").split(","); - 1 < --h;)
                    for (d = b[h], c = e ? a("easing." + d, null, !0) : n.easing[d] || {}, g = l.length; - 1 < --g;) f = l[g], M[d + "." + f] = M[f + d] =
                        c[f] = k.getRatio ? k : k[f] || new k
            };
        b = p.prototype;
        b._calcEnd = !1;
        b.getRatio = function(a) {
            if (this._func) return this._params[0] = a, this._func.apply(null, this._params);
            var b = this._type,
                c = this._power,
                e = 1 === b ? 1 - a : 2 === b ? a : 0.5 > a ? 2 * a : 2 * (1 - a);
            return 1 === c ? e *= e : 2 === c ? e *= e * e : 3 === c ? e *= e * e * e : 4 === c && (e *= e * e * e * e), 1 === b ? 1 - e : 2 === b ? e : 0.5 > a ? e / 2 : 1 - e / 2
        };
        h = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"];
        for (m = h.length; - 1 < --m;) b = h[m] + ",Power" + m, P(new p(null, null, 1, m), b, "easeOut", !0), P(new p(null, null, 2, m), b, "easeIn" + (0 === m ? ",easeNone" :
            "")), P(new p(null, null, 3, m), b, "easeInOut");
        M.linear = n.easing.Linear.easeIn;
        M.swing = n.easing.Quad.easeInOut;
        var ma = a("events.EventDispatcher", function(a) {
            this._listeners = {};
            this._eventTarget = a || this
        });
        b = ma.prototype;
        b.addEventListener = function(a, b, c, e, d) {
            d = d || 0;
            var f, g = this._listeners[a],
                h = 0;
            null == g && (this._listeners[a] = g = []);
            for (f = g.length; - 1 < --f;) a = g[f], a.c === b && a.s === c ? g.splice(f, 1) : 0 === h && d > a.pr && (h = f + 1);
            g.splice(h, 0, {
                c: b,
                s: c,
                up: e,
                pr: d
            });
            this !== B || z || B.wake()
        };
        b.removeEventListener = function(a,
            b) {
            var c, e = this._listeners[a];
            if (e)
                for (c = e.length; - 1 < --c;)
                    if (e[c].c === b) return e.splice(c, 1), void 0
        };
        b.dispatchEvent = function(a) {
            var b, c, e, d = this._listeners[a];
            if (d)
                for (b = d.length, c = this._eventTarget; - 1 < --b;) e = d[b], e.up ? e.c.call(e.s || c, {
                    type: a,
                    target: c
                }) : e.c.call(e.s || c)
        };
        var V = q.requestAnimationFrame,
            C = q.cancelAnimationFrame,
            O = Date.now || function() {
                return (new Date).getTime()
            }, H = O();
        h = ["ms", "moz", "webkit", "o"];
        for (m = h.length; - 1 < --m && !V;) V = q[h[m] + "RequestAnimationFrame"], C = q[h[m] + "CancelAnimationFrame"] ||
            q[h[m] + "CancelRequestAnimationFrame"];
        a("Ticker", function(a, b) {
            var c, e, d, g, f, h = this,
                l = O(),
                p = !1 !== b && V,
                m = function(a) {
                    H = O();
                    h.time = (H - l) / 1E3;
                    var b, k = h.time - f;
                    (!c || 0 < k || !0 === a) && (h.frame++, f += k + (k >= g ? 0.004 : g - k), b = !0);
                    !0 !== a && (d = e(m));
                    b && h.dispatchEvent("tick")
                };
            ma.call(h);
            h.time = h.frame = 0;
            h.tick = function() {
                m(!0)
            };
            h.sleep = function() {
                null != d && (p && C ? C(d) : clearTimeout(d), e = s, d = null, h === B && (z = !1))
            };
            h.wake = function() {
                null !== d && h.sleep();
                e = 0 === c ? s : p && V ? V : function(a) {
                    return setTimeout(a, 0 | 1E3 * (f - h.time) + 1)
                };
                h === B && (z = !0);
                m(2)
            };
            h.fps = function(a) {
                return arguments.length ? (c = a, g = 1 / (c || 60), f = this.time + g, h.wake(), void 0) : c
            };
            h.useRAF = function(a) {
                return arguments.length ? (h.sleep(), p = a, h.fps(c), void 0) : p
            };
            h.fps(a);
            setTimeout(function() {
                p && (!d || 5 > h.frame) && h.useRAF(!1)
            }, 1500)
        });
        b = n.Ticker.prototype = new n.events.EventDispatcher;
        b.constructor = n.Ticker;
        var y = a("core.Animation", function(a, b) {
            if (this.vars = b = b || {}, this._duration = this._totalDuration = a || 0, this._delay = Number(b.delay) || 0, this._timeScale = 1, this._active = !0 === b.immediateRender, this.data = b.data, this._reversed = !0 === b.reversed, da) {
                z || B.wake();
                var c = this.vars.useFrames ? X : da;
                c.add(this, c._time);
                this.vars.paused && this.paused(!0)
            }
        });
        B = y.ticker = new n.Ticker;
        b = y.prototype;
        b._dirty = b._gc = b._initted = b._paused = !1;
        b._totalTime = b._time = 0;
        b._rawPrevTime = -1;
        b._next = b._last = b._onUpdate = b._timeline = b.timeline = null;
        b._paused = !1;
        var I = function() {
            z && 2E3 < O() - H && B.wake();
            setTimeout(I, 2E3)
        };
        I();
        b.play = function(a, b) {
            return null != a && this.seek(a, b), this.reversed(!1).paused(!1)
        };
        b.pause = function(a, b) {
            return null != a && this.seek(a, b), this.paused(!0)
        };
        b.resume = function(a, b) {
            return null != a && this.seek(a, b), this.paused(!1)
        };
        b.seek = function(a, b) {
            return this.totalTime(Number(a), !1 !== b)
        };
        b.restart = function(a, b) {
            return this.reversed(!1).paused(!1).totalTime(a ? -this._delay : 0, !1 !== b, !0)
        };
        b.reverse = function(a, b) {
            return null != a && this.seek(a || this.totalDuration(), b), this.reversed(!0).paused(!1)
        };
        b.render = function() {};
        b.invalidate = function() {
            return this
        };
        b.isActive = function() {
            var a, b = this._timeline,
                c = this._startTime;
            return !b || !this._gc && !this._paused && b.isActive() && (a = b.rawTime()) >= c && c + this.totalDuration() / this._timeScale > a
        };
        b._enabled = function(a, b) {
            return z || B.wake(), this._gc = !a, this._active = this.isActive(), !0 !== b && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0)), !1
        };
        b._kill = function() {
            return this._enabled(!1, !1)
        };
        b.kill = function(a, b) {
            return this._kill(a, b), this
        };
        b._uncache = function(a) {
            for (a = a ? this : this.timeline; a;) a._dirty = !0, a = a.timeline;
            return this
        };
        b._swapSelfInParams = function(a) {
            for (var b = a.length, c = a.concat(); - 1 < --b;) "{self}" === a[b] && (c[b] = this);
            return c
        };
        b.eventCallback = function(a, b, c, e) {
            if ("on" === (a || "").substr(0, 2)) {
                var d = this.vars;
                if (1 === arguments.length) return d[a];
                null == b ? delete d[a] : (d[a] = b, d[a + "Params"] = g(c) && -1 !== c.join("").indexOf("{self}") ? this._swapSelfInParams(c) : c, d[a + "Scope"] = e);
                "onUpdate" === a && (this._onUpdate = b)
            }
            return this
        };
        b.delay = function(a) {
            return arguments.length ? (this._timeline.smoothChildTiming &&
                this.startTime(this._startTime + a - this._delay), this._delay = a, this) : this._delay
        };
        b.duration = function(a) {
            return arguments.length ? (this._duration = this._totalDuration = a, this._uncache(!0), this._timeline.smoothChildTiming && 0 < this._time && this._time < this._duration && 0 !== a && this.totalTime(a / this._duration * this._totalTime, !0), this) : (this._dirty = !1, this._duration)
        };
        b.totalDuration = function(a) {
            return this._dirty = !1, arguments.length ? this.duration(a) : this._totalDuration
        };
        b.time = function(a, b) {
            return arguments.length ?
                (this._dirty && this.totalDuration(), this.totalTime(a > this._duration ? this._duration : a, b)) : this._time
        };
        b.totalTime = function(a, b, c) {
            if (z || B.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
                if (0 > a && !c && (a += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var e = this._totalDuration,
                        d = this._timeline;
                    if (a > e && !c && (a = e), this._startTime = (this._paused ? this._pauseTime : d._time) - (this._reversed ? e - a : a) / this._timeScale, d._dirty || this._uncache(!1), d._timeline)
                        for (; d._timeline;) d._timeline._time !==
                            (d._startTime + d._totalTime) / d._timeScale && d.totalTime(d._totalTime, !0), d = d._timeline
                }
                this._gc && this._enabled(!0, !1);
                this._totalTime === a && 0 !== this._duration || this.render(a, b, !1)
            }
            return this
        };
        b.progress = b.totalProgress = function(a, b) {
            return arguments.length ? this.totalTime(this.duration() * a, b) : this._time / this.duration()
        };
        b.startTime = function(a) {
            return arguments.length ? (a !== this._startTime && (this._startTime = a, this.timeline && this.timeline._sortChildren && this.timeline.add(this, a - this._delay)), this) : this._startTime
        };
        b.timeScale = function(a) {
            if (!arguments.length) return this._timeScale;
            if (a = a || 1E-10, this._timeline && this._timeline.smoothChildTiming) {
                var b = this._pauseTime,
                    b = b || 0 === b ? b : this._timeline.totalTime();
                this._startTime = b - (b - this._startTime) * this._timeScale / a
            }
            return this._timeScale = a, this._uncache(!1)
        };
        b.reversed = function(a) {
            return arguments.length ? (a != this._reversed && (this._reversed = a, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)),
                this) : this._reversed
        };
        b.paused = function(a) {
            if (!arguments.length) return this._paused;
            if (a != this._paused && this._timeline) {
                z || a || B.wake();
                var b = this._timeline,
                    c = b.rawTime(),
                    e = c - this._pauseTime;
                !a && b.smoothChildTiming && (this._startTime += e, this._uncache(!1));
                this._pauseTime = a ? c : null;
                this._paused = a;
                this._active = this.isActive();
                !a && 0 !== e && this._initted && this.duration() && this.render(b.smoothChildTiming ? this._totalTime : (c - this._startTime) / this._timeScale, !0, !0)
            }
            return this._gc && !a && this._enabled(!0, !1), this
        };
        h = a("core.SimpleTimeline", function(a) {
            y.call(this, 0, a);
            this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        b = h.prototype = new y;
        b.constructor = h;
        b.kill()._gc = !1;
        b._first = b._last = null;
        b._sortChildren = !1;
        b.add = b.insert = function(a, b) {
            var c, e;
            if (a._startTime = Number(b || 0) + a._delay, a._paused && this !== a._timeline && (a._pauseTime = a._startTime + (this.rawTime() - a._startTime) / a._timeScale), a.timeline && a.timeline._remove(a, !0), a.timeline = a._timeline = this, a._gc && a._enabled(!0, !0), c = this._last, this._sortChildren)
                for (e =
                    a._startTime; c && c._startTime > e;) c = c._prev;
            return c ? (a._next = c._next, c._next = a) : (a._next = this._first, this._first = a), a._next ? a._next._prev = a : this._last = a, a._prev = c, this._timeline && this._uncache(!0), this
        };
        b._remove = function(a, b) {
            return a.timeline === this && (b || a._enabled(!1, !0), a.timeline = null, a._prev ? a._prev._next = a._next : this._first === a && (this._first = a._next), a._next ? a._next._prev = a._prev : this._last === a && (this._last = a._prev), this._timeline && this._uncache(!0)), this
        };
        b.render = function(a, b, c) {
            var e, d = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = a; d;) e = d._next, (d._active || a >= d._startTime && !d._paused) && (d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = e
        };
        b.rawTime = function() {
            return z || B.wake(), this._totalTime
        };
        var w = a("TweenLite", function(a, b, c) {
            if (y.call(this, b, c), this.render = w.prototype.render, null == a) throw "Cannot tween a null target.";
            this.target = a = "string" != typeof a ? a : w.selector(a) || a;
            var e,
                d;
            e = a.jquery || a.length && a !== q && a[0] && (a[0] === q || a[0].nodeType && a[0].style && !a.nodeType);
            c = this.vars.overwrite;
            if (this._overwrite = c = null == c ? ha[w.defaultOverwrite] : "number" == typeof c ? c >> 0 : ha[c], (e || a instanceof Array || a.push && g(a)) && "number" != typeof a[0])
                for (this._targets = d = J.call(a, 0), this._propLookup = [], this._siblings = [], a = 0; d.length > a; a++)(e = d[a]) ? "string" != typeof e ? e.length && e !== q && e[0] && (e[0] === q || e[0].nodeType && e[0].style && !e.nodeType) ? (d.splice(a--, 1), this._targets = d = d.concat(J.call(e, 0))) : (this._siblings[a] =
                    Y(e, this, !1), 1 === c && 1 < this._siblings[a].length && R(e, this, null, 1, this._siblings[a])) : (e = d[a--] = w.selector(e), "string" == typeof e && d.splice(a + 1, 1)) : d.splice(a--, 1);
            else this._propLookup = {}, this._siblings = Y(a, this, !1), 1 === c && 1 < this._siblings.length && R(a, this, null, 1, this._siblings);
            (this.vars.immediateRender || 0 === b && 0 === this._delay && !1 !== this.vars.immediateRender) && this.render(-this._delay, !1, !0)
        }, !0),
            Aa = function(a) {
                return a.length && a !== q && a[0] && (a[0] === q || a[0].nodeType && a[0].style && !a.nodeType)
            };
        b = w.prototype =
            new y;
        b.constructor = w;
        b.kill()._gc = !1;
        b.ratio = 0;
        b._firstPT = b._targets = b._overwrittenProps = b._startAt = null;
        b._notifyPluginsOfEnabled = !1;
        w.version = "1.11.6";
        w.defaultEase = b._ease = new p(null, null, 1, 1);
        w.defaultOverwrite = "auto";
        w.ticker = B;
        w.autoSleep = !0;
        w.selector = q.$ || q.jQuery || function(a) {
            return q.$ ? (w.selector = q.$, q.$(a)) : q.document ? q.document.getElementById("#" === a.charAt(0) ? a.substr(1) : a) : a
        };
        m = w._internals = {
            isArray: g,
            isSelector: Aa
        };
        var L = w._plugins = {}, D = w._tweenLookup = {}, G = 0,
            Q = m.reservedProps = {
                ease: 1,
                delay: 1,
                overwrite: 1,
                onComplete: 1,
                onCompleteParams: 1,
                onCompleteScope: 1,
                useFrames: 1,
                runBackwards: 1,
                startAt: 1,
                onUpdate: 1,
                onUpdateParams: 1,
                onUpdateScope: 1,
                onStart: 1,
                onStartParams: 1,
                onStartScope: 1,
                onReverseComplete: 1,
                onReverseCompleteParams: 1,
                onReverseCompleteScope: 1,
                onRepeat: 1,
                onRepeatParams: 1,
                onRepeatScope: 1,
                easeParams: 1,
                yoyo: 1,
                immediateRender: 1,
                repeat: 1,
                repeatDelay: 1,
                data: 1,
                paused: 1,
                reversed: 1,
                autoCSS: 1
            }, ha = {
                none: 0,
                all: 1,
                auto: 2,
                concurrent: 3,
                allOnStart: 4,
                preexisting: 5,
                "true": 1,
                "false": 0
            }, X = y._rootFramesTimeline =
                new h,
            da = y._rootTimeline = new h;
        da._startTime = B.time;
        X._startTime = B.frame;
        da._active = X._active = !0;
        y._updateRoot = function() {
            if (da.render((B.time - da._startTime) * da._timeScale, !1, !1), X.render((B.frame - X._startTime) * X._timeScale, !1, !1), !(B.frame % 120)) {
                var a, b, c;
                for (c in D) {
                    b = D[c].tweens;
                    for (a = b.length; - 1 < --a;) b[a]._gc && b.splice(a, 1);
                    0 === b.length && delete D[c]
                }
                if (c = da._first, (!c || c._paused) && w.autoSleep && !X._first && 1 === B._listeners.tick.length) {
                    for (; c && c._paused;) c = c._next;
                    c || B.sleep()
                }
            }
        };
        B.addEventListener("tick",
            y._updateRoot);
        var Y = function(a, b, c) {
            var e, d, f = a._gsTweenID;
            if (D[f || (a._gsTweenID = f = "t" + G++)] || (D[f] = {
                target: a,
                tweens: []
            }), b && (e = D[f].tweens, e[d = e.length] = b, c))
                for (; - 1 < --d;) e[d] === b && e.splice(d, 1);
            return D[f].tweens
        }, R = function(a, b, c, e, d) {
                var f, g, h;
                if (1 === e || 4 <= e) {
                    a = d.length;
                    for (f = 0; a > f; f++)
                        if ((h = d[f]) !== b) h._gc || h._enabled(!1, !1) && (g = !0);
                        else
                    if (5 === e) break;
                    return g
                }
                var l, p = b._startTime + 1E-10,
                    m = [],
                    n = 0,
                    q = 0 === b._duration;
                for (f = d.length; - 1 < --f;)(h = d[f]) === b || h._gc || h._paused || (h._timeline !== b._timeline ?
                    (l = l || aa(b, 0, q), 0 === aa(h, l, q) && (m[n++] = h)) : p >= h._startTime && h._startTime + h.totalDuration() / h._timeScale > p && ((q || !h._initted) && 2E-10 >= p - h._startTime || (m[n++] = h)));
                for (f = n; - 1 < --f;) h = m[f], 2 === e && h._kill(c, a) && (g = !0), (2 !== e || !h._firstPT && h._initted) && h._enabled(!1, !1) && (g = !0);
                return g
            }, aa = function(a, b, c) {
                for (var e = a._timeline, d = e._timeScale, f = a._startTime; e._timeline;) {
                    if (f += e._startTime, d *= e._timeScale, e._paused) return -100;
                    e = e._timeline
                }
                return f /= d, f > b ? f - b : c && f === b || !a._initted && 2E-10 > f - b ? 1E-10 : (f +=
                    a.totalDuration() / a._timeScale / d) > b + 1E-10 ? 0 : f - b - 1E-10
            };
        b._init = function() {
            var a, b, c, e = this.vars,
                d = this._overwrittenProps;
            c = this._duration;
            var f = e.immediateRender,
                g = e.ease;
            if (e.startAt) {
                if (this._startAt && this._startAt.render(-1, !0), e.startAt.overwrite = 0, e.startAt.immediateRender = !0, this._startAt = w.to(this.target, 0, e.startAt), f)
                    if (0 < this._time) this._startAt = null;
                    else
                if (0 !== c) return
            } else if (e.runBackwards && 0 !== c)
                if (this._startAt) this._startAt.render(-1, !0), this._startAt = null;
                else {
                    c = {};
                    for (a in e) Q[a] &&
                        "autoCSS" !== a || (c[a] = e[a]);
                    if (c.overwrite = 0, c.data = "isFromStart", this._startAt = w.to(this.target, 0, c), e.immediateRender) {
                        if (0 === this._time) return
                    } else this._startAt.render(-1, !0)
                }
            if (this._ease = g ? g instanceof p ? e.easeParams instanceof Array ? g.config.apply(g, e.easeParams) : g : "function" == typeof g ? new p(g, e.easeParams) : M[g] || w.defaultEase : w.defaultEase, this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                for (a = this._targets.length; - 1 < --a;) this._initProps(this._targets[a],
                    this._propLookup[a] = {}, this._siblings[a], d ? d[a] : null) && (b = !0);
            else b = this._initProps(this.target, this._propLookup, this._siblings, d); if (b && w._onPluginEvent("_onInitAllProps", this), d && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), e.runBackwards)
                for (c = this._firstPT; c;) c.s += c.c, c.c = -c.c, c = c._next;
            this._onUpdate = e.onUpdate;
            this._initted = !0
        };
        b._initProps = function(a, b, c, e) {
            var d, f, h, l, p;
            if (null == a) return !1;
            if (!this.vars.css && a.style && a !== q && a.nodeType && L.css && !1 !== this.vars.autoCSS) {
                f =
                    this.vars;
                var m, n = {};
                for (m in f) Q[m] || m in a && "x" !== m && "y" !== m && "width" !== m && "height" !== m && "className" !== m && "border" !== m || !(!L[m] || L[m] && L[m]._autoCSS) || (n[m] = f[m], delete f[m]);
                f.css = n
            }
            for (d in this.vars) {
                if (f = this.vars[d], Q[d]) f && (f instanceof Array || f.push && g(f)) && -1 !== f.join("").indexOf("{self}") && (this.vars[d] = this._swapSelfInParams(f, this));
                else if (L[d] && (l = new L[d])._onInitTween(a, this.vars[d], this)) {
                    this._firstPT = p = {
                        _next: this._firstPT,
                        t: l,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: !0,
                        n: d,
                        pg: !0,
                        pr: l._priority
                    };
                    for (f = l._overwriteProps.length; - 1 < --f;) b[l._overwriteProps[f]] = this._firstPT;
                    (l._priority || l._onInitAllProps) && (h = !0);
                    (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0)
                } else this._firstPT = b[d] = p = {
                    _next: this._firstPT,
                    t: a,
                    p: d,
                    f: "function" == typeof a[d],
                    n: d,
                    pg: !1,
                    pr: 0
                }, p.s = p.f ? a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)]() : parseFloat(a[d]), p.c = "string" == typeof f && "=" === f.charAt(1) ? parseInt(f.charAt(0) + "1", 10) * Number(f.substr(2)) : Number(f) - p.s || 0;
                p && p._next &&
                    (p._next._prev = p)
            }
            return e && this._kill(e, a) ? this._initProps(a, b, c, e) : 1 < this._overwrite && this._firstPT && 1 < c.length && R(a, this, b, this._overwrite, c) ? (this._kill(b, a), this._initProps(a, b, c, e)) : h
        };
        b.render = function(a, b, c) {
            var e, d, f, g, h = this._time,
                p = this._duration;
            if (a >= p) this._totalTime = this._time = p, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (e = !0, d = "onComplete"), 0 === p && (g = this._rawPrevTime, this._startTime === this._timeline._duration && (a = 0), (0 === a || 0 > g || 1E-10 === g) && g !== a && (c = !0, 1E-10 < g && (d = "onReverseComplete")), this._rawPrevTime = g = !b || a || this._rawPrevTime === a ? a : 1E-10);
            else if (1E-7 > a) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== h || 0 === p && 0 < this._rawPrevTime && 1E-10 !== this._rawPrevTime) && (d = "onReverseComplete", e = this._reversed), 0 > a ? (this._active = !1, 0 === p && (0 <= this._rawPrevTime && (c = !0), this._rawPrevTime = g = !b || a || this._rawPrevTime === a ? a : 1E-10)) : this._initted || (c = !0);
            else if (this._totalTime = this._time = a, this._easeType) {
                f = a / p;
                var m =
                    this._easeType,
                    n = this._easePower;
                (1 === m || 3 === m && 0.5 <= f) && (f = 1 - f);
                3 === m && (f *= 2);
                1 === n ? f *= f : 2 === n ? f *= f * f : 3 === n ? f *= f * f * f : 4 === n && (f *= f * f * f * f);
                this.ratio = 1 === m ? 1 - f : 2 === m ? f : 0.5 > a / p ? f / 2 : 1 - f / 2
            } else this.ratio = this._ease.getRatio(a / p); if (this._time !== h || c) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc) return;
                    this._time && !e ? this.ratio = this._ease.getRatio(this._time / p) : e && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                this._active || !this._paused && this._time !== h && 0 <= a &&
                    (this._active = !0);
                0 !== h || (this._startAt && (0 <= a ? this._startAt.render(a, b, c) : d || (d = "_dummyGS")), !this.vars.onStart || 0 === this._time && 0 !== p || !b && this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || l));
                for (f = this._firstPT; f;) f.f ? f.t[f.p](f.c * this.ratio + f.s) : f.t[f.p] = f.c * this.ratio + f.s, f = f._next;
                this._onUpdate && (0 > a && this._startAt && this._startTime && this._startAt.render(a, b, c), b || (this._time !== h || e) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || l));
                d && (this._gc || (0 > a && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(a, b, c), e && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[d] && this.vars[d].apply(this.vars[d + "Scope"] || this, this.vars[d + "Params"] || l), 0 === p && 1E-10 === this._rawPrevTime && 1E-10 !== g && (this._rawPrevTime = 0)))
            }
        };
        b._kill = function(a, b) {
            if ("all" === a && (a = null), null == a && (null == b || b === this.target)) return this._enabled(!1, !1);
            b = "string" != typeof b ? b || this._targets || this.target : w.selector(b) ||
                b;
            var c, e, d, f, h, l, p;
            if ((g(b) || Aa(b)) && "number" != typeof b[0])
                for (c = b.length; - 1 < --c;) this._kill(a, b[c]) && (l = !0);
            else {
                if (this._targets)
                    for (c = this._targets.length; - 1 < --c;) {
                        if (b === this._targets[c]) {
                            h = this._propLookup[c] || {};
                            this._overwrittenProps = this._overwrittenProps || [];
                            e = this._overwrittenProps[c] = a ? this._overwrittenProps[c] || {} : "all";
                            break
                        }
                    } else {
                        if (b !== this.target) return !1;
                        h = this._propLookup;
                        e = this._overwrittenProps = a ? this._overwrittenProps || {} : "all"
                    } if (h) {
                        c = a || h;
                        p = a !== e && "all" !== e && a !== h && ("object" !=
                            typeof a || !a._tempKill);
                        for (d in c)(f = h[d]) && (f.pg && f.t._kill(c) && (l = !0), f.pg && 0 !== f.t._overwriteProps.length || (f._prev ? f._prev._next = f._next : f === this._firstPT && (this._firstPT = f._next), f._next && (f._next._prev = f._prev), f._next = f._prev = null), delete h[d]), p && (e[d] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
            }
            return l
        };
        b.invalidate = function() {
            return this._notifyPluginsOfEnabled && w._onPluginEvent("_onDisable", this), this._firstPT = null, this._overwrittenProps = null, this._onUpdate = null, this._startAt =
                null, this._initted = this._active = this._notifyPluginsOfEnabled = !1, this._propLookup = this._targets ? {} : [], this
        };
        b._enabled = function(a, b) {
            if (z || B.wake(), a && this._gc) {
                var c, e = this._targets;
                if (e)
                    for (c = e.length; - 1 < --c;) this._siblings[c] = Y(e[c], this, !0);
                else this._siblings = Y(this.target, this, !0)
            }
            return y.prototype._enabled.call(this, a, b), this._notifyPluginsOfEnabled && this._firstPT ? w._onPluginEvent(a ? "_onEnable" : "_onDisable", this) : !1
        };
        w.to = function(a, b, c) {
            return new w(a, b, c)
        };
        w.from = function(a, b, c) {
            return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new w(a, b, c)
        };
        w.fromTo = function(a, b, c, e) {
            return e.startAt = c, e.immediateRender = 0 != e.immediateRender && 0 != c.immediateRender, new w(a, b, e)
        };
        w.delayedCall = function(a, b, c, e, d) {
            return new w(b, 0, {
                delay: a,
                onComplete: b,
                onCompleteParams: c,
                onCompleteScope: e,
                onReverseComplete: b,
                onReverseCompleteParams: c,
                onReverseCompleteScope: e,
                immediateRender: !1,
                useFrames: d,
                overwrite: 0
            })
        };
        w.set = function(a, b) {
            return new w(a, 0, b)
        };
        w.getTweensOf = function(a, b) {
            if (null == a) return [];
            a = "string" !=
                typeof a ? a : w.selector(a) || a;
            var c, e, d, f;
            if ((g(a) || Aa(a)) && "number" != typeof a[0]) {
                c = a.length;
                for (e = []; - 1 < --c;) e = e.concat(w.getTweensOf(a[c], b));
                for (c = e.length; - 1 < --c;)
                    for (f = e[c], d = c; - 1 < --d;) f === e[d] && e.splice(c, 1)
            } else
                for (e = Y(a).concat(), c = e.length; - 1 < --c;)(e[c]._gc || b && !e[c].isActive()) && e.splice(c, 1);
            return e
        };
        w.killTweensOf = w.killDelayedCallsTo = function(a, b, c) {
            "object" == typeof b && (c = b, b = !1);
            b = w.getTweensOf(a, b);
            for (var e = b.length; - 1 < --e;) b[e]._kill(c, a)
        };
        var ia = a("plugins.TweenPlugin", function(a,
            b) {
            this._overwriteProps = (a || "").split(",");
            this._propName = this._overwriteProps[0];
            this._priority = b || 0;
            this._super = ia.prototype
        }, !0);
        if (b = ia.prototype, ia.version = "1.10.1", ia.API = 2, b._firstPT = null, b._addTween = function(a, b, c, e, d, f) {
            var g, h;
            return null != e && (g = "number" == typeof e || "=" !== e.charAt(1) ? Number(e) - c : parseInt(e.charAt(0) + "1", 10) * Number(e.substr(2))) ? (this._firstPT = h = {
                _next: this._firstPT,
                t: a,
                p: b,
                s: c,
                c: g,
                f: "function" == typeof a[b],
                n: d || b,
                r: f
            }, h._next && (h._next._prev = h), h) : void 0
        }, b.setRatio = function(a) {
            for (var b,
                    c = this._firstPT; c;) b = c.c * a + c.s, c.r ? b = 0 | b + (0 < b ? 0.5 : -0.5) : 1E-6 > b && -1E-6 < b && (b = 0), c.f ? c.t[c.p](b) : c.t[c.p] = b, c = c._next
        }, b._kill = function(a) {
            var b, c = this._overwriteProps,
                e = this._firstPT;
            if (null != a[this._propName]) this._overwriteProps = [];
            else
                for (b = c.length; - 1 < --b;) null != a[c[b]] && c.splice(b, 1);
            for (; e;) null != a[e.n] && (e._next && (e._next._prev = e._prev), e._prev ? (e._prev._next = e._next, e._prev = null) : this._firstPT === e && (this._firstPT = e._next)), e = e._next;
            return !1
        }, b._roundProps = function(a, b) {
            for (var c = this._firstPT; c;)(a[this._propName] ||
                null != c.n && a[c.n.split(this._propName + "_").join("")]) && (c.r = b), c = c._next
        }, w._onPluginEvent = function(a, b) {
            var c, e, d, f, g, h = b._firstPT;
            if ("_onInitAllProps" === a) {
                for (; h;) {
                    g = h._next;
                    for (e = d; e && e.pr > h.pr;) e = e._next;
                    (h._prev = e ? e._prev : f) ? h._prev._next = h : d = h;
                    (h._next = e) ? e._prev = h : f = h;
                    h = g
                }
                h = b._firstPT = d
            }
            for (; h;) h.pg && "function" == typeof h.t[a] && h.t[a]() && (c = !0), h = h._next;
            return c
        }, ia.activate = function(a) {
            for (var b = a.length; - 1 < --b;) a[b].API === ia.API && (L[(new a[b])._propName] = a[b]);
            return !0
        }, f.plugin = function(b) {
            if (!(b &&
                b.propName && b.init && b.API)) throw "illegal plugin definition.";
            var c, e = b.propName,
                d = b.priority || 0,
                f = b.overwriteProps,
                g = {
                    init: "_onInitTween",
                    set: "setRatio",
                    kill: "_kill",
                    round: "_roundProps",
                    initAll: "_onInitAllProps"
                }, h = a("plugins." + e.charAt(0).toUpperCase() + e.substr(1) + "Plugin", function() {
                    ia.call(this, e, d);
                    this._overwriteProps = f || []
                }, !0 === b.global),
                l = h.prototype = new ia(e);
            l.constructor = h;
            h.API = b.API;
            for (c in g) "function" == typeof b[c] && (l[g[c]] = b[c]);
            return h.version = b.version, ia.activate([h]), h
        }, h = q._gsQueue) {
            for (m =
                0; h.length > m; m++) h[m]();
            for (b in c) c[b].func || q.console.log("GSAP encountered missing dependency: com.greensock." + b)
        }
        z = !1
    }
})(window);
(window._gsQueue || (window._gsQueue = [])).push(function() {
    window._gsDefine("utils.Draggable", ["events.EventDispatcher", "TweenLite"], function(q, v) {
        var h, m, b, B, z, A = {
                css: {}
            }, n = {
                css: {}
            }, J = {
                css: {}
            }, s = {
                css: {}
            }, g = {}, c = document,
            d = c.documentElement || {}, f = [],
            a = function() {
                return !1
            }, e = 180 / Math.PI,
            l = Date.now || function() {
                return (new Date).getTime()
            }, p = c.all && !c.addEventListener,
            M = [],
            P = {}, ma = 0,
            V = /^(?:a|input|textarea|button|select)$/i,
            C = 0,
            O = 0,
            H = function() {
                for (var a = M.length; - 1 < --a;) M[a]()
            }, y = function(a) {
                M.push(a);
                1 === M.length && v.ticker.addEventListener("tick", H, this, !1, 1)
            }, I = function(a) {
                for (var b = M.length; - 1 < --b;) M[b] === a && M.splice(b, 1);
                v.to(w, 0, {
                    overwrite: "all",
                    delay: 15,
                    onComplete: w
                })
            }, w = function() {
                M.length || v.ticker.removeEventListener("tick", H)
            }, Aa = function(a, b) {
                for (var c in b) void 0 === a[c] && (a[c] = b[c]);
                return a
            }, L = function(a, b) {
                return a = a || window.event, g.pageX = a.clientX + c.body.scrollLeft + d.scrollLeft, g.pageY = a.clientY + c.body.scrollTop + d.scrollTop, b && (a.returnValue = !1), g
            }, D = function(a) {
                return a ? ("string" ==
                    typeof a && (a = v.selector(a)), a.length && a !== window && a[0] && a[0].style && !a.nodeType && (a = a[0]), a === window || a.nodeType && a.style ? a : null) : a
            }, G = function(a, b) {
                var c, e, d, f = a.style;
                if (void 0 === f[b]) {
                    d = ["O", "Moz", "ms", "Ms", "Webkit"];
                    e = 5;
                    for (c = b.charAt(0).toUpperCase() + b.substr(1); - 1 < --e && void 0 === f[d[e] + c];);
                    if (0 > e) return "";
                    h = 3 === e ? "ms" : d[e];
                    b = h + c
                }
                return b
            }, Q = function(a, b, c) {
                var e = a.style;
                void 0 === e[b] && (b = G(a, b));
                null == c ? e.removeProperty ? e.removeProperty(b.replace(/([A-Z])/g, "-$1").toLowerCase()) : e.removeAttribute(b) :
                    void 0 !== e[b] && (e[b] = c)
            }, ha = c.defaultView ? c.defaultView.getComputedStyle : a,
            X = /(?:Left|Right|Width)/i,
            da = /(?:\d|\-|\+|=|#|\.)*/g,
            Y = function(a, b, e, d, f) {
                if ("px" === d || !d) return e;
                if ("auto" === d || !e) return 0;
                var g, h = X.test(b),
                    l = a,
                    p = k.style,
                    m = 0 > e;
                return m && (e = -e), "%" === d && -1 !== b.indexOf("border") ? g = e / 100 * (h ? a.clientWidth : a.clientHeight) : (p.cssText = "border:0 solid red;position:" + R(a, "position", !0) + ";line-height:0;", "%" !== d && l.appendChild ? p[h ? "borderLeftWidth" : "borderTopWidth"] = e + d : (l = a.parentNode || c.body,
                    p[h ? "width" : "height"] = e + d), l.appendChild(k), g = parseFloat(k[h ? "offsetWidth" : "offsetHeight"]), l.removeChild(k), 0 !== g || f || (g = Y(a, b, e, d, !0))), m ? -g : g
            }, R = function(a, b, c) {
                var e, d = (a._gsTransform || {})[b];
                d || 0 === d ? c = d : (a.style[b] ? d = a.style[b] : (e = ha(a)) ? (d = e.getPropertyValue(b.replace(/([A-Z])/g, "-$1").toLowerCase()), d = d || e.length ? d : e[b]) : a.currentStyle && (d = a.currentStyle[b]), "auto" !== d || "top" !== b && "left" !== b || ("absolute" !== R(a, "position", !0) ? a = 0 : (e = "left" === b ? "Left" : "Top", d = R(a, "margin" + e, !0), a = a["offset" +
                    e] - (Y(a, b, parseFloat(d), d.replace(da, "")) || 0)), d = a), c = c ? d : parseFloat(d) || 0);
                return c
            }, aa = function(a, b, c) {
                var e = a.vars,
                    d = e[c],
                    f = a._listeners[b];
                "function" == typeof d && d.apply(e[c + "Scope"] || a, e[c + "Params"] || [a.pointerEvent]);
                f && a.dispatchEvent(b)
            }, ia = function(a, b) {
                var e, f, g, h = D(a);
                if (h) var k, l, p, m, n, q, u, v, s, w, y, h = (h === window ? (m = null != h.pageYOffset ? h.pageYOffset : null != c.scrollTop ? c.scrollTop : d.scrollTop || c.body.scrollTop || 0, l = null != h.pageXOffset ? h.pageXOffset : null != c.scrollLeft ? c.scrollLeft : d.scrollLeft ||
                        c.body.scrollLeft || 0, p = l + (d.clientWidth || h.innerWidth || c.body.clientWidth || 0), n = m + (h.innerHeight - 20 < d.clientHeight ? d.clientHeight : h.innerHeight || c.body.clientHeight || 0)) : (k = Z(h), l = -k.x, p = l + h.offsetWidth, m = -k.y, n = m + h.offsetHeight), h === b ? {
                        left: l,
                        top: m,
                        width: p - l,
                        height: n - m
                    } : (q = wa(h), u = wa(b, !0), v = qa({
                        x: l,
                        y: m
                    }, q, u), s = qa({
                        x: p,
                        y: m
                    }, q, u), w = qa({
                        x: p,
                        y: n
                    }, q, u), y = qa({
                        x: l,
                        y: n
                    }, q, u), l = Math.min(v.x, s.x, w.x, y.x), m = Math.min(v.y, s.y, w.y, y.y), {
                        left: l,
                        top: m,
                        width: Math.max(v.x, s.x, w.x, y.x) - l,
                        height: Math.max(v.y, s.y, w.y,
                            y.y) - m
                    }));
                else h = void 0 !== a.left ? (g = Z(b), {
                    left: a.left - g.x,
                    top: a.top - g.y,
                    width: a.width,
                    height: a.height
                }) : (f = a.min || a.minX || a.minRotation || 0, e = a.min || a.minY || 0, {
                    left: f,
                    top: e,
                    width: (a.max || a.maxX || a.maxRotation || 0) - f,
                    height: (a.max || a.maxY || 0) - e
                });
                return h
            }, k = c.createElement("div"),
            u = "" !== G(k, "perspective"),
            x = G(k, "transformOrigin").replace(/^ms/g, "Ms").replace(/([A-Z])/g, "-$1").toLowerCase(),
            E = G(k, "transform"),
            W = E.replace(/^ms/g, "Ms").replace(/([A-Z])/g, "-$1").toLowerCase(),
            S = {}, ja = {}, Z = function(a, b) {
                if (b =
                    b || {}, !a || a === d || !a.parentNode) return {
                    x: 0,
                    y: 0
                };
                var c = ha(a),
                    e = x && c ? c.getPropertyValue(x) : "50% 50%",
                    f = e.split(" "),
                    c = -1 !== e.indexOf("left") ? "0%" : -1 !== e.indexOf("right") ? "100%" : f[0],
                    e = -1 !== e.indexOf("top") ? "0%" : -1 !== e.indexOf("bottom") ? "100%" : f[1];
                return ("center" === e || null == e) && (e = "50%"), ("center" === c || isNaN(parseFloat(c))) && (c = "50%"), b.x = -1 !== c.indexOf("%") ? a.offsetWidth * parseFloat(c) / 100 : parseFloat(c), b.y = -1 !== e.indexOf("%") ? a.offsetHeight * parseFloat(e) / 100 : parseFloat(e), b
            }, oa = function(a, b, e) {
                var d;
                if (a !== window && a && a.parentNode) {
                    d = (d = ha(a)) ? d.getPropertyValue(W) : a.currentStyle ? a.currentStyle[E] : "1,0,0,1,0,0";
                    d = (d + "").match(/(?:\-|\b)[\d\-\.e]+\b/g) || [1, 0, 0, 1, 0, 0];
                    6 < d.length && (d = [d[0], d[1], d[4], d[5], d[12], d[13]]);
                    if (b) {
                        d[4] = Number(d[4]) + b.x + a.offsetLeft - e.x;
                        d[5] = Number(d[5]) + b.y + a.offsetTop - e.y;
                        if (void 0 === B && c.body && E) {
                            var f, g;
                            b = c.createElement("div");
                            e = c.createElement("div");
                            B = (e.style.position = "absolute", c.body.appendChild(b), b.appendChild(e), f = e.offsetParent, b.style[E] = "rotate(1deg)", g =
                                e.offsetParent === f, c.body.removeChild(b), g)
                        }!a.parentNode || a.parentNode.offsetParent !== a.offsetParent || B && "100100" !== oa(a.parentNode).join("") || (d[4] -= a.parentNode.offsetLeft, d[5] -= a.parentNode.offsetTop)
                    }
                    a = d
                } else a = [1, 0, 0, 1, 0, 0];
                return a
            }, wa = function(a, b) {
                var c, e, f, g, h, k, l, p;
                l = Z(a, S);
                for (var m = Z(a.parentNode, ja), n = oa(a, l, m);
                    (a = a.parentNode) && a.parentNode && a !== d;) l = m, m = Z(a.parentNode, l === S ? ja : S), l = oa(a, l, m), c = n[0], e = n[1], f = n[2], g = n[3], h = n[4], k = n[5], n[0] = c * l[0] + e * l[2], n[1] = c * l[1] + e * l[3], n[2] = f * l[0] +
                    g * l[2], n[3] = f * l[1] + g * l[3], n[4] = h * l[0] + k * l[2] + l[4], n[5] = h * l[1] + k * l[3] + l[5];
                return b && (c = n[0], e = n[1], f = n[2], g = n[3], h = n[4], k = n[5], p = c * g - e * f, n[0] = g / p, n[1] = -e / p, n[2] = -f / p, n[3] = c / p, n[4] = (f * k - g * h) / p, n[5] = -(c * k - e * h) / p), n
            }, qa = function(a, b, c) {
                var e = a.x * b[0] + a.y * b[2] + b[4];
                b = a.x * b[1] + a.y * b[3] + b[5];
                return a.x = e * c[0] + b * c[2] + c[4], a.y = e * c[1] + b * c[3] + c[5], a
            }, xa = function(a) {
                return a.length && a[0] && (a[0].nodeType && a[0].style && !a.nodeType || a[0].length && a[0][0]) ? !0 : !1
            }, Ea = "ontouchstart" in d && "orientation" in window,
            Fa = function(a) {
                var b =
                    a.split(",");
                a = (void 0 !== k.onpointerdown ? "pointerdown,pointermove,pointerup,pointercancel" : void 0 !== k.onmspointerdown ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : a).split(",");
                for (var c = {}, e = 7; - 1 < --e;) c[b[e]] = a[e], c[a[e]] = b[e];
                return c
            }("touchstart,touchmove,touchend,touchcancel"),
            ea = function(a, b, c) {
                a.addEventListener ? a.addEventListener(Fa[b] || b, c, !1) : a.attachEvent && a.attachEvent("on" + b, c)
            }, ca = function(a, b, c) {
                a.removeEventListener ? a.removeEventListener(Fa[b] || b, c) : a.detachEvent && a.detachEvent("on" +
                    b, c)
            }, la = function(a) {
                m = a.touches && a.touches.length > C;
                ca(a.target, "touchend", la)
            }, Ga = function(a) {
                m = a.touches && a.touches.length > C;
                ea(a.target, "touchend", la)
            }, Ba = function(a, b, c, e, d, f) {
                var g, h, k, l = {};
                if (b)
                    if (1 !== d && b instanceof Array)
                        for (l.end = g = [], k = b.length, h = 0; k > h; h++) g[h] = b[h] * d;
                    else l.end = "function" == typeof b ? function(c) {
                        return b.call(a, c) * d
                    } : b;
                return (c || 0 === c) && (l.max = c), (e || 0 === e) && (l.min = e), f && (l.velocity = 0), l
            }, ra = function(a) {
                var b;
                return a && a.getAttribute && "BODY" !== a.nodeName ? "true" === (b = a.getAttribute("data-clickable")) ||
                    "false" !== b && (a.onclick || V.test(a.nodeName + "")) ? !0 : ra(a.parentNode) : !1
            }, za = function() {
                var a, b = c.createElement("div"),
                    e = c.createElement("div"),
                    d = e.style,
                    f = c.body || k;
                return d.display = "inline-block", d.position = "relative", b.style.cssText = e.innerHTML = "width:90px; height:40px; padding:10px; overflow:auto; visibility: hidden", b.appendChild(e), f.appendChild(b), z = e.offsetHeight + 18 > b.scrollHeight, d.width = "100%", E || (d.paddingRight = "500px", a = b.scrollLeft = b.scrollWidth - b.clientWidth, d.left = "-90px", a = a !== b.scrollLeft),
                f.removeChild(b), a
            }(),
            Ia = function(a, b) {
                a = D(a);
                b = b || {};
                var e, d, f, g, h, k, l = c.createElement("div"),
                    m = l.style,
                    n = a.firstChild,
                    q = 0,
                    s = 0,
                    w = a.scrollTop,
                    y = a.scrollLeft,
                    x = a.scrollWidth,
                    C = a.scrollHeight,
                    A = 0,
                    P = 0,
                    B = 0;
                u && !1 !== b.force3D ? (h = "translate3d(", k = "px,0px)") : E && (h = "translate(", k = "px)");
                this.scrollTop = function(a, b) {
                    return arguments.length ? (this.top(-a, b), void 0) : -this.top()
                };
                this.scrollLeft = function(a, b) {
                    return arguments.length ? (this.left(-a, b), void 0) : -this.left()
                };
                this.left = function(c, e) {
                    if (!arguments.length) return -(a.scrollLeft +
                        s);
                    var d = a.scrollLeft - y,
                        f = s;
                    return (2 < d || -2 > d) && !e ? (y = a.scrollLeft, v.killTweensOf(this, !0, {
                        left: 1,
                        scrollLeft: 1
                    }), this.left(-y), b.onKill && b.onKill(), void 0) : (c = -c, 0 > c ? (s = 0 | c - 0.5, c = 0) : c > P ? (s = 0 | c - P, c = P) : s = 0, (s || f) && (h ? this._suspendTransforms || (m[E] = h + -s + "px," + -q + k) : m.left = -s + "px", za && 0 <= s + A && (m.paddingRight = s + A + "px")), a.scrollLeft = 0 | c, y = a.scrollLeft, void 0)
                };
                this.top = function(c, e) {
                    if (!arguments.length) return -(a.scrollTop + q);
                    var d = a.scrollTop - w,
                        f = q;
                    return (2 < d || -2 > d) && !e ? (w = a.scrollTop, v.killTweensOf(this, !0, {
                        top: 1,
                        scrollTop: 1
                    }), this.top(-w), b.onKill && b.onKill(), void 0) : (c = -c, 0 > c ? (q = 0 | c - 0.5, c = 0) : c > B ? (q = 0 | c - B, c = B) : q = 0, (q || f) && (h ? this._suspendTransforms || (m[E] = h + -s + "px," + -q + k) : m.top = -q + "px"), a.scrollTop = 0 | c, w = a.scrollTop, void 0)
                };
                this.maxScrollTop = function() {
                    return B
                };
                this.maxScrollLeft = function() {
                    return P
                };
                this.disable = function() {
                    for (n = l.firstChild; n;) g = n.nextSibling, a.appendChild(n), n = g;
                    a === l.parentNode && a.removeChild(l)
                };
                this.enable = function() {
                    if (n = a.firstChild, n !== l) {
                        for (; n;) g = n.nextSibling, l.appendChild(n),
                        n = g;
                        a.appendChild(l);
                        this.calibrate()
                    }
                };
                this.calibrate = function(b) {
                    var c, g, h = a.clientWidth === e;
                    w = a.scrollTop;
                    y = a.scrollLeft;
                    h && a.clientHeight === d && l.offsetHeight === f && x === a.scrollWidth && C === a.scrollHeight && !b || ((q || s) && (c = this.left(), g = this.top(), this.left(-a.scrollLeft), this.top(-a.scrollTop)), (!h || b) && (m.display = "block", m.width = "auto", m.paddingRight = "0px", A = Math.max(0, a.scrollWidth - a.clientWidth), A && (A += R(a, "paddingLeft") + (z ? R(a, "paddingRight") : 0))), m.display = "inline-block", m.position = "relative",
                        m.overflow = "visible", m.width = "100%", m.paddingRight = A + "px", z && (m.paddingBottom = R(a, "paddingBottom", !0)), p && (m.zoom = "1"), e = a.clientWidth, d = a.clientHeight, x = a.scrollWidth, C = a.scrollHeight, P = a.scrollWidth - e, B = a.scrollHeight - d, f = l.offsetHeight, !c && !g || (this.left(c), this.top(g)))
                };
                this.content = l;
                this.element = a;
                this._suspendTransforms = !1;
                this.enable()
            }, ka = function(d, g) {
                q.call(this, d);
                d = D(d);
                b || (b = (window.GreenSockGlobals || window).com.greensock.plugins.ThrowPropsPlugin);
                this.vars = g = g || {};
                this.target = d;
                this.x =
                    this.y = this.rotation = 0;
                this.dragResistance = parseFloat(g.dragResistance) || 0;
                this.edgeResistance = isNaN(g.edgeResistance) ? 1 : parseFloat(g.edgeResistance) || 0;
                this.lockAxis = g.lockAxis;
                var h, k, u, w, x, z, B, E, M, H, G, V, S, W, U, Y, X, da, ga, Z, ja, K, ha, ba, oa, ta = (g.type || (p ? "top,left" : "x,y")).toLowerCase(),
                    la = -1 !== ta.indexOf("x") || -1 !== ta.indexOf("y"),
                    $ = -1 !== ta.indexOf("rotation"),
                    pa = la ? "x" : "left",
                    qa = la ? "y" : "top",
                    va = -1 !== ta.indexOf("x") || -1 !== ta.indexOf("left") || "scroll" === ta,
                    ya = -1 !== ta.indexOf("y") || -1 !== ta.indexOf("top") ||
                        "scroll" === ta,
                    r = this,
                    fa = D(g.trigger || g.handle || d),
                    Ja = {}, xa = 0,
                    Ka = function(a) {
                        if (X) {
                            var b = r.x,
                                c = r.y;
                            1E-6 > b && -1E-6 < b && (b = 0);
                            1E-6 > c && -1E-6 < c && (c = 0);
                            $ ? (S.rotation = r.rotation = r.x, v.set(d, V)) : h ? (ya && h.top(c), va && h.left(b)) : la ? (ya && (S.y = c), va && (S.x = b), v.set(d, V)) : (ya && (d.style.top = c + "px"), va && (d.style.left = b + "px"));
                            B && !a && aa(r, "drag", "onDrag")
                        }
                        X = !1
                    }, Ca = function(a, b) {
                        var c;
                        la ? (d._gsTransform || v.set(d, {
                            x: "+=0"
                        }), r.y = d._gsTransform.y, r.x = d._gsTransform.x) : $ ? (d._gsTransform || v.set(d, {
                                x: "+=0"
                            }), r.x = r.rotation =
                            d._gsTransform.rotation) : h ? (r.y = h.top(), r.x = h.left()) : (r.y = parseInt(d.style.top, 10) || 0, r.x = parseInt(d.style.left, 10) || 0);
                        !ga && !Z || b || (ga && (c = ga(r.x), c !== r.x && (r.x = c, $ && (r.rotation = c), X = !0)), Z && (c = Z(r.y), c !== r.y && (r.y = c, X = !0)), X && Ka(!0));
                        g.onThrowUpdate && !a && g.onThrowUpdate.apply(g.onThrowUpdateScope || r, g.onThrowUpdateParams || f)
                    }, za = function() {
                        var a, b, c, e;
                        z = !1;
                        h ? (h.calibrate(), r.minX = M = -h.maxScrollLeft(), r.minY = G = -h.maxScrollTop(), r.maxX = E = r.maxY = H = 0, z = !0) : g.bounds && (a = ia(g.bounds, d.parentNode), $ ?
                            (r.minX = M = a.left, r.maxX = E = a.left + a.width, r.minY = G = r.maxY = H = 0) : void 0 !== g.bounds.maxX || void 0 !== g.bounds.maxY ? (a = g.bounds, r.minX = M = a.minX, r.minY = G = a.minY, r.maxX = E = a.maxX, r.maxY = H = a.maxY) : (b = ia(d, d.parentNode), r.minX = M = R(d, pa) + a.left - b.left, r.minY = G = R(d, qa) + a.top - b.top, r.maxX = E = M + (a.width - b.width), r.maxY = H = G + (a.height - b.height)), M > E && (r.minX = E, r.maxX = E = M, M = r.minX), G > H && (r.minY = H, r.maxY = H = G, G = r.minY), $ && (r.minRotation = M, r.maxRotation = E), z = !0);
                        g.liveSnap && (c = !0 === g.liveSnap ? g.snap || {} : g.liveSnap, e = c instanceof Array || "function" == typeof c, $ ? (ga = Oa(e ? c : c.rotation, M, E, 1), Z = null) : (ga = Oa(e ? c : c.x || c.left || c.scrollLeft, M, E, h ? -1 : 1), Z = Oa(e ? c : c.y || c.top || c.scrollTop, G, H, h ? -1 : 1)))
                    }, Ta = function(a, c) {
                        var e, f, k;
                        a && b ? (!0 === a && (e = g.snap || {}, f = e instanceof Array || "function" == typeof e, a = {
                            resistance: (g.throwResistance || g.resistance || 1E3) / ($ ? 10 : 1)
                        }, $ ? a.rotation = Ba(r, f ? e : e.rotation, E, M, 1, c) : (va && (a[pa] = Ba(r, f ? e : e.x || e.left || e.scrollLeft, E, M, h ? -1 : 1, c || r.lockAxis && "x" === ha)), ya && (a[qa] = Ba(r, f ? e : e.y || e.top || e.scrollTop, H, G, h ? -1 : 1, c || r.lockAxis && "y" === ha)))), r.tween = k = b.to(h || d, {
                            throwProps: a,
                            ease: g.ease || Power3.easeOut,
                            onComplete: g.onThrowComplete,
                            onCompleteParams: g.onThrowCompleteParams,
                            onCompleteScope: g.onThrowCompleteScope || r,
                            onUpdate: g.fastMode ? g.onThrowUpdate : Ca,
                            onUpdateParams: g.onThrowUpdateParams,
                            onUpdateScope: g.onThrowUpdateScope || r
                        }, isNaN(g.maxDuration) ? 2 : g.maxDuration, isNaN(g.minDuration) ? 0.5 : g.minDuration, isNaN(g.overshootTolerance) ? 1 - r.edgeResistance + 0.2 : g.overshootTolerance), g.fastMode || (h && (h._suspendTransforms = !0), k.seek(k.duration()), Ca(!0, !0), r.endX = r.x, r.endY = r.y, $ && (r.endRotation = r.x), k.play(0), Ca(!0, !0), h && (h._suspendTransforms = !1))) : z && r.applyBounds()
                    }, Ua = function() {
                        ba = wa(d.parentNode, !0);
                        ba[1] || ba[2] || 1 != ba[0] || 1 != ba[3] || 0 != ba[4] || 0 != ba[5] || (ba = null)
                    }, Va = function() {
                        var a = 1 - r.edgeResistance;
                        Ua();
                        if (h) za(), x = h.top(), w = h.left();
                        else if (r.tween && r.tween.isActive() ? (Ca(!0, !0), za()) : r.applyBounds(), $) {
                            var b = {
                                x: 0,
                                y: 0
                            }, c = void 0,
                                f = wa(d),
                                g = b.x,
                                l = b.y;
                            Y = (c = !0 === c ? b : c || {}, c.x = g * f[0] + l * f[2] + f[4], c.y = g * f[1] + l *
                                f[3] + f[5], c);
                            Ca(!0, !0);
                            w = r.x;
                            x = r.y = Math.atan2(Y.y - u, k - Y.x) * e
                        } else x = R(d, qa), w = R(d, pa);
                        z && a && (w > E ? w = E + (w - E) / a : M > w && (w = M - (M - w) / a), $ || (x > H ? x = H + (x - H) / a : G > x && (x = G - (G - x) / a)))
                    }, Oa = function(a, b, c, e) {
                        return "function" == typeof a ? function(d) {
                            var f = r.isPressed ? 1 - r.edgeResistance : 1;
                            return a.call(r, d > c ? c + (d - c) * f : b > d ? b + (d - b) * f : d) * e
                        } : a instanceof Array ? function(e) {
                            for (var d, f, g = a.length, h = 0, k = 999999999999999; - 1 < --g;) d = a[g], f = d - e, 0 > f && (f = -f), k > f && d >= b && c >= d && (h = g, k = f);
                            return a[h]
                        } : isNaN(a) ? function(a) {
                            return a
                        } : function() {
                            return a *
                                e
                        }
                    }, La = function(a) {
                        var b;
                        if (!r.isPressed && a) {
                            if (oa = r.tween && r.tween.isActive(), r.pointerEvent = a, Fa[a.type] ? (K = -1 !== a.type.indexOf("touch") ? fa : c, ea(K, "touchend", na), ea(K, "touchmove", Da), ea(K, "touchcancel", na), ea(c, "touchstart", Ga)) : (K = null, ea(c, "mousemove", Da), ea(c, "mouseup", na)), ja = ra(a.target) && !g.dragClickables) return ea(a.target, "change", na), void 0;
                            p ? a = L(a, !0) : a.touches && a.touches.length > C + 1 || (a.preventDefault(), a.preventManipulation && a.preventManipulation());
                            a.changedTouches ? (a = W = a.changedTouches[0],
                                U = a.identifier) : a.pointerId ? U = a.pointerId : W = null;
                            C++;
                            y(Ka);
                            r.tween && r.tween.kill();
                            v.killTweensOf(h || d, !0, Ja);
                            u = r.pointerY = a.pageY;
                            k = r.pointerX = a.pageX;
                            Va();
                            ba && (b = k * ba[0] + u * ba[2] + ba[4], u = k * ba[1] + u * ba[3] + ba[5], k = b);
                            r.tween = ha = null;
                            $ || h || !1 === g.zIndexBoost || (d.style.zIndex = ka.zIndex++);
                            r.isPressed = !0;
                            B = !(!g.onDrag && !r._listeners.drag);
                            $ || Q(fa, "cursor", g.cursor || "move");
                            aa(r, "press", "onPress")
                        }
                    }, Da = function(a) {
                        if (!m && r.isPressed) {
                            p ? a = L(a, !0) : (a.preventDefault(), a.preventManipulation && a.preventManipulation());
                            r.pointerEvent = a;
                            var b, c, d, f, g, h, l, n;
                            l = a.changedTouches;
                            var t = 1 - r.dragResistance,
                                q = 1 - r.edgeResistance;
                            if (l) {
                                if (a = l[0], a !== W && a.identifier !== U) {
                                    for (g = l.length; - 1 < --g && (a = l[g]).identifier !== U;);
                                    if (0 > g) return
                                }
                            } else if (a.pointerId && U && a.pointerId !== U) return;
                            g = r.pointerX = a.pageX;
                            l = r.pointerY = a.pageY;
                            $ ? (f = Math.atan2(Y.y - a.pageY, a.pageX - Y.x) * e, h = r.y - f, r.y = f, 180 < h ? x -= 360 : -180 > h && (x += 360), d = w + (x - f) * t) : (ba && (n = g * ba[0] + l * ba[2] + ba[4], l = g * ba[1] + l * ba[3] + ba[5], g = n), c = l - u, b = g - k, 2 > c && -2 < c && (c = 0), 2 > b && -2 < b && (b = 0),
                                r.lockAxis && (b || c) && ("y" === ha || !ha && Math.abs(b) > Math.abs(c) && va ? (c = 0, ha = "y") : ya && (b = 0, ha = "x")), d = w + b * t, f = x + c * t);
                            ga || Z ? (ga && (d = ga(d)), Z && (f = Z(f))) : z && (d > E ? d = E + (d - E) * q : M > d && (d = M + (d - M) * q), $ || (f > H ? f = H + (f - H) * q : G > f && (f = G + (f - G) * q)));
                            (r.x !== d || r.y !== f && !$) && (r.x = r.endX = d, $ ? r.endRotation = d : r.y = r.endY = f, X = !0, r.isDragging || (r.isDragging = !0, aa(r, "dragstart", "onDragStart")))
                        }
                    }, na = function(a, b) {
                        if (!a || !U || b || !a.pointerId || a.pointerId === U) {
                            r.isPressed = !1;
                            var e, d, f = a,
                                h = r.isDragging;
                            if (K ? (ca(K, "touchend", na), ca(K,
                                "touchmove", Da), ca(K, "touchcancel", na), ca(c, "touchstart", Ga)) : (ca(c, "mouseup", na), ca(c, "mousemove", Da)), X = !1, ja) return a && ca(a.target, "change", na), aa(r, "release", "onRelease"), aa(r, "click", "onClick"), ja = !1, void 0;
                            if (I(Ka), $ || Q(fa, "cursor", g.cursor || "move"), h && (xa = O = l(), r.isDragging = !1), C--, a) {
                                if (p && (a = L(a, !1)), e = a.changedTouches, e && (a = e[0], a !== W && a.identifier !== U)) {
                                    for (d = e.length; - 1 < --d && (a = e[d]).identifier !== U;);
                                    if (0 > d) return
                                }
                                r.pointerEvent = f;
                                r.pointerX = a.pageX;
                                r.pointerY = a.pageY
                            }
                            return f && !h ? (oa &&
                                g.snap && Ta(g.throwProps), aa(r, "release", "onRelease"), aa(r, "click", "onClick")) : (Ta(g.throwProps), p || !f || !g.dragClickables && ra(f.target) || (f.preventDefault(), f.preventManipulation && f.preventManipulation()), aa(r, "release", "onRelease")), h && aa(r, "dragend", "onDragEnd"), !0
                        }
                    }, Wa = function(a) {
                        (r.isPressed || 20 > l() - xa) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1, a.preventManipulation && a.preventManipulation())
                    };
                (da = ka.get(this.target)) && da.kill();
                this.startDrag = function(a) {
                    La(a);
                    r.isDragging || (r.isDragging = !0, aa(r, "dragstart", "onDragStart"))
                };
                this.drag = Da;
                this.endDrag = function(a) {
                    na(a, !0)
                };
                this.timeSinceDrag = function() {
                    return r.isDragging ? 0 : (l() - xa) / 1E3
                };
                this.hitTest = function(a, b) {
                    return ka.hitTest(r.target, a, b)
                };
                this.applyBounds = function(a) {
                    var b, c;
                    return a && g.bounds !== a ? (g.bounds = a, r.update(!0)) : (Ca(!0), za(), z && (b = r.x, c = r.y, z && (b > E ? b = E : M > b && (b = M), c > H ? c = H : G > c && (c = G)), (r.x !== b || r.y !== c) && (r.x = r.endX = b, $ ? r.endRotation = b : r.y = r.endY = c, X = !0, Ka())), r)
                };
                this.update = function(a) {
                    var b = r.x,
                        c = r.y;
                    return Ua(),
                    a ? r.applyBounds() : Ca(!0), r.isPressed && (b !== r.x || c !== r.y && !$) && Va(), r
                };
                this.enable = function() {
                    var c;
                    return ea(fa, "mousedown", La), ea(fa, "touchstart", La), ea(fa, "click", Wa), $ || Q(fa, "cursor", g.cursor || "move"), fa.ondragstart = fa.onselectstart = a, Q(fa, "userSelect", "none"), Q(fa, "touchCallout", "none"), Q(fa, "touchAction", "none"), b && b.track(h || d, la ? "x,y" : $ ? "rotation" : "top,left"), h && h.enable(), d._gsDragID = c = "d" + ma++, P[c] = this, h && (h.element._gsDragID = c), v.set(d, {
                        x: "+=0"
                    }), this.update(), r
                };
                this.disable = function() {
                    var a =
                        this.isDragging;
                    return $ || Q(fa, "cursor", null), v.killTweensOf(h || d, !0, Ja), fa.ondragstart = fa.onselectstart = null, Q(fa, "userSelect", "text"), Q(fa, "touchCallout", "default"), Q(fa, "MSTouchAction", "auto"), ca(fa, "mousedown", La), ca(fa, "touchstart", La), ca(fa, "click", Wa), K && (ca(K, "touchcancel", na), ca(K, "touchend", na), ca(K, "touchmove", Da)), ca(c, "mouseup", na), ca(c, "mousemove", Da), b && b.untrack(h || d, la ? "x,y" : $ ? "rotation" : "top,left"), h && h.disable(), I(Ka), this.isDragging = this.isPressed = ja = !1, a && aa(this, "dragend", "onDragEnd"),
                    r
                };
                this.kill = function() {
                    return r.disable(), delete P[d._gsDragID], r
                }; - 1 !== ta.indexOf("scroll") && (h = this.scrollProxy = new Ia(d, Aa({
                    onKill: function() {
                        r.isPressed && na(null)
                    }
                }, g)), d.style.overflowY = ya && !Ea ? "auto" : "hidden", d.style.overflowX = va && !Ea ? "auto" : "hidden", d = h.content);
                !1 !== g.force3D && v.set(d, {
                    force3D: !0
                });
                $ ? Ja.rotation = 1 : (va && (Ja[pa] = 1), ya && (Ja[qa] = 1));
                $ ? (V = s, S = V.css, V.overwrite = !1) : la && (V = va && ya ? A : va ? n : J, S = V.css, V.overwrite = !1);
                this.enable()
            }, U = ka.prototype = new q;
        U.constructor = ka;
        U.pointerX = U.pointerY =
            0;
        U.isDragging = U.isPressed = !1;
        ka.version = "0.10.2";
        ka.zIndex = 1E3;
        ea(c, "touchcancel", function() {});
        ea(c, "contextmenu", function() {
            for (var a in P) P[a].isPressed && P[a].endDrag()
        });
        ka.create = function(a, b) {
            "string" == typeof a && (a = v.selector(a));
            var c;
            if (xa(a)) {
                c = a;
                var e, d, f, g = [],
                    h = c.length;
                for (e = 0; h > e; e++)
                    if (d = c[e], xa(d))
                        for (f = 0; d.length > f; f++) g.push(d[f]);
                    else g.push(d);
                c = g
            } else c = [a];
            for (e = c.length; - 1 < --e;) c[e] = new ka(c[e], b);
            return c
        };
        ka.get = function(a) {
            return P[(D(a) || {})._gsDragID]
        };
        ka.timeSinceDrag =
            function() {
                return (l() - O) / 1E3
        };
        var pa = function(a, b) {
            var c = a.pageX !== b ? {
                left: a.pageX,
                top: a.pageY,
                right: a.pageX + 1,
                bottom: a.pageY + 1
            } : a.nodeType || a.left === b || a.top === b ? D(a).getBoundingClientRect() : a;
            return c.right === b && c.width !== b ? (c.right = c.left + c.width, c.bottom = c.top + c.height) : c.width || (c.width = c.right - c.left, c.height = c.bottom - c.top), c
        };
        return ka.hitTest = function(a, b, c) {
            if (a === b) return !1;
            var e, d, f;
            a = pa(a);
            b = pa(b);
            var g = b.left > a.right || b.right < a.left || b.top > a.bottom || b.bottom < a.top;
            return g || !c ? !g : (f = -1 !== (c + "").indexOf("%"), c = parseFloat(c) || 0, e = {
                left: Math.max(a.left, b.left),
                top: Math.max(a.top, b.top)
            }, e.width = Math.min(a.right, b.right) - e.left, e.height = Math.min(a.bottom, b.bottom) - e.top, 0 > e.width || 0 > e.height ? !1 : f ? (c *= 0.01, d = e.width * e.height, d >= a.width * a.height * c || d >= b.width * b.height * c) : e.width > c && e.height > c)
        }, ka
    }, !0)
});
window._gsDefine && window._gsQueue.pop()();
(window._gsQueue || (window._gsQueue = [])).push(function() {
    window._gsDefine("plugins.ThrowPropsPlugin", ["plugins.TweenPlugin", "TweenLite", "easing.Ease", "utils.VelocityTracker"], function(q, v, h, m) {
        var b = function(a, b) {
            q.call(this, "throwProps");
            this._overwriteProps.length = 0
        }, B = {
                x: 1,
                y: 1,
                z: 2,
                scale: 1,
                scaleX: 1,
                scaleY: 1,
                rotation: 1,
                rotationZ: 1,
                rotationX: 2,
                rotationY: 2,
                skewX: 1,
                skewY: 1
            }, z = function(a, b, c, d) {
                if ("auto" === a.end) return a;
                c = isNaN(c) ? 999999999999999 : c;
                d = isNaN(d) ? -999999999999999 : d;
                if ("function" === typeof a.end) b =
                    a.end(b);
                else if (a.end instanceof Array) {
                    for (var f = a.end, g = f.length, h = 0, m = 999999999999999, n, q; - 1 < --g;) n = f[g], q = n - b, 0 > q && (q = -q), q < m && n >= d && n <= c && (h = g, m = q);
                    b = f[h]
                } else b = Number(a.end);
                b > c ? b = c : b < d && (b = d);
                return {
                    max: b,
                    min: b,
                    unitFactor: a.unitFactor
                }
            }, A = b.calculateChange = function(a, b, c, d) {
                null == d && (d = 0.05);
                b = b instanceof h ? b : b ? new h(b) : v.defaultEase;
                return c * d * a / b.getRatio(d)
            }, n = b.calculateDuration = function(a, b, c, d, f) {
                f = f || 0.05;
                d = d instanceof h ? d : d ? new h(d) : v.defaultEase;
                return Math.abs((b - a) * d.getRatio(f) /
                    c / f)
            }, J = b.calculateTweenDuration = function(a, c, d, f, g) {
                "string" === typeof a && (a = v.selector(a));
                if (!a) return 0;
                null == d && (d = 10);
                null == f && (f = 0.2);
                null == g && (g = 1);
                a.length && (a = a[0] || a);
                var q = 0,
                    s = 9999999999,
                    B = c.throwProps || c;
                c = c.ease instanceof h ? c.ease : c.ease ? new h(c.ease) : v.defaultEase;
                var C = isNaN(B.checkpoint) ? 0.05 : Number(B.checkpoint),
                    O = isNaN(B.resistance) ? b.defaultResistance : Number(B.resistance),
                    H, y, I, w, J, L, D, G;
                for (H in B) "resistance" !== H && "checkpoint" !== H && "preventOvershoot" !== H && (y = B[H], "object" !==
                    typeof y && ((G = G || m.getByTarget(a)) && G.isTrackingProp(H) ? y = "number" === typeof y ? {
                        velocity: y
                    } : {
                        velocity: G.getVelocity(H)
                    } : (w = Number(y) || 0, I = 0 < w * O ? w / O : w / -O)), "object" === typeof y && (w = void 0 !== y.velocity && "number" === typeof y.velocity ? Number(y.velocity) || 0 : (G = G || m.getByTarget(a)) && G.isTrackingProp(H) ? G.getVelocity(H) : 0, I = isNaN(y.resistance) ? O : Number(y.resistance), I = 0 < w * I ? w / I : w / -I, J = "function" === typeof a[H] ? a[H.indexOf("set") || "function" !== typeof a["get" + H.substr(3)] ? H : "get" + H.substr(3)]() : a[H] || 0, L = J + A(w,
                        c, I, C), void 0 !== y.end && (y = z(y, L, y.max, y.min)), void 0 !== y.max && L > Number(y.max) + 1E-10 ? (D = y.unitFactor || b.defaultUnitFactors[H] || 1, D = J > y.max && y.min !== y.max || -15 < w * D && 45 > w * D ? f + 0.1 * (d - f) : n(J, y.max, w, c, C), D + g < s && (s = D + g)) : void 0 !== y.min && L < Number(y.min) - 1E-10 && (D = y.unitFactor || b.defaultUnitFactors[H] || 1, D = J < y.min && y.min !== y.max || -45 < w * D && 15 > w * D ? f + 0.1 * (d - f) : n(J, y.min, w, c, C), D + g < s && (s = D + g)), D > q && (q = D)), I > q && (q = I));
                q > s && (q = s);
                return q > d ? d : q < f ? f : q
            }, s = b.prototype = new q("throwProps"),
            g, c, d, f;
        s.constructor = b;
        b.version =
            "0.9.3";
        b.API = 2;
        b._autoCSS = !0;
        b.defaultResistance = 100;
        b.defaultUnitFactors = {
            time: 1E3,
            totalTime: 1E3
        };
        b.track = function(a, b, c) {
            return m.track(a, b, c)
        };
        b.untrack = function(a, b) {
            m.untrack(a, b)
        };
        b.isTracking = function(a, b) {
            return m.isTracking(a, b)
        };
        b.getVelocity = function(a, b) {
            var c = m.getByTarget(a);
            return c ? c.getVelocity(b) : NaN
        };
        b._cssRegister = function() {
            var a = (window.GreenSockGlobals || window).com.greensock.plugins.CSSPlugin;
            if (a) {
                var a = a._internals,
                    d = a._parseToProxy,
                    f = a._setPluginRatio,
                    h = a.CSSPropTween;
                a._registerComplexSpecialProp("throwProps", {
                    parser: function(a, n, q, s, v, z) {
                        z = new b;
                        q = {};
                        var A = {}, y = {}, I = {}, w = {}, J = {}, L, D, G;
                        c = {};
                        for (D in n) "resistance" !== D && "preventOvershoot" !== D && (L = n[D], "object" === typeof L ? (void 0 !== L.velocity && "number" === typeof L.velocity ? q[D] = Number(L.velocity) || 0 : (G = G || m.getByTarget(a), q[D] = G && G.isTrackingProp(D) ? G.getVelocity(D) : 0), void 0 !== L.end && (I[D] = L.end), void 0 !== L.min && (A[D] = L.min), void 0 !== L.max && (y[D] = L.max), L.preventOvershoot && (J[D] = !0), void 0 !== L.resistance && (w[D] = L.resistance)) : "number" === typeof L ? q[D] = L :
                            (G = G || m.getByTarget(a)) && G.isTrackingProp(D) ? q[D] = G.getVelocity(D) : q[D] = L || 0, B[D] && s._enableTransforms(2 === B[D]));
                        G = d(a, q, s, v, z);
                        g = G.proxy;
                        q = G.end;
                        for (D in g) c[D] = {
                            velocity: q[D],
                            min: A[D],
                            max: y[D],
                            end: I[D],
                            resistance: w[D],
                            preventOvershoot: J[D]
                        };
                        null != n.resistance && (c.resistance = n.resistance);
                        n.preventOvershoot && (c.preventOvershoot = !0);
                        v = new h(a, "throwProps", 0, 0, G.pt, 2);
                        v.plugin = z;
                        v.setRatio = f;
                        v.data = G;
                        z._onInitTween(g, c, s._tween);
                        return v
                    }
                })
            }
        };
        b.to = function(a, b, h, p, m) {
            b.throwProps || (b = {
                throwProps: b
            });
            0 === m && (b.throwProps.preventOvershoot = !0);
            var n = new v(a, 1, b);
            n.render(0, !0, !0);
            if (n.vars.css) return n.duration(J(g, {
                throwProps: c,
                ease: b.ease
            }, h, p, m)), n._delay && !n.vars.immediateRender ? n.invalidate() : d._onInitTween(g, f, n), n;
            n.kill();
            return new v(a, J(a, b, h, p, m), b)
        };
        s._onInitTween = function(a, b, c) {
            this.target = a;
            this._props = [];
            d = this;
            f = b;
            var g = c._ease,
                h = isNaN(b.checkpoint) ? 0.05 : Number(b.checkpoint);
            c = c._duration;
            var n = b.preventOvershoot,
                q = 0,
                s, v, B, H, y, I, w, J;
            for (s in b)
                if ("resistance" !== s && "checkpoint" !==
                    s && "preventOvershoot" !== s) {
                    v = b[s];
                    if ("number" === typeof v) B = Number(v) || 0;
                    else if ("object" !== typeof v || isNaN(v.velocity))
                        if ((J = J || m.getByTarget(a)) && J.isTrackingProp(s)) B = J.getVelocity(s);
                        else throw "ERROR: No velocity was defined in the throwProps tween of " + a + " property: " + s;
                        else B = Number(v.velocity);
                    y = A(B, g, c, h);
                    w = 0;
                    B = (H = "function" === typeof a[s]) ? a[s.indexOf("set") || "function" !== typeof a["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : a[s];
                    "object" === typeof v && (I = B + y, void 0 !== v.end && (v = z(v, I, v.max, v.min)),
                        void 0 !== v.max && Number(v.max) < I ? n || v.preventOvershoot ? y = v.max - B : w = v.max - B - y : void 0 !== v.min && Number(v.min) > I && (n || v.preventOvershoot ? y = v.min - B : w = v.min - B - y));
                    this._props[q++] = {
                        p: s,
                        s: B,
                        c1: y,
                        c2: w,
                        f: H,
                        r: !1
                    };
                    this._overwriteProps[q] = s
                }
            return !0
        };
        s._kill = function(a) {
            for (var b = this._props.length; - 1 < --b;) null != a[this._props[b].p] && this._props.splice(b, 1);
            return q.prototype._kill.call(this, a)
        };
        s._roundProps = function(a, b) {
            for (var c = this._props, d = c.length; - 1 < --d;)
                if (a[c[d]] || a.throwProps) c[d].r = b
        };
        s.setRatio = function(a) {
            for (var b =
                this._props.length, c, d; - 1 < --b;)
                if (c = this._props[b], d = c.s + c.c1 * a + c.c2 * a * a, c.r && (d = d + (0 < d ? 0.5 : -0.5) | 0), c.f) this.target[c.p](d);
                else this.target[c.p] = d
        };
        q.activate([b]);
        return b
    }, !0);
    window._gsDefine("utils.VelocityTracker", ["TweenLite"], function(q) {
        var v, h, m, b = /([A-Z])/g,
            B = {}, z = {
                x: 1,
                y: 1,
                z: 2,
                scale: 1,
                scaleX: 1,
                scaleY: 1,
                rotation: 1,
                rotationZ: 1,
                rotationX: 2,
                rotationY: 2,
                skewX: 1,
                skewY: 1
            }, A = document.defaultView ? document.defaultView.getComputedStyle : function() {}, n = function(a, c, d) {
                var f = (a._gsTransform || B)[c];
                if (f || 0 === f) return f;
                a.style[c] ? f = a.style[c] : (d = d || A(a, null)) ? f = (a = d.getPropertyValue(c.replace(b, "-$1").toLowerCase())) || d.length ? a : d[c] : a.currentStyle && (d = a.currentStyle, f = d[c]);
                return parseFloat(f) || 0
            }, J = q.ticker,
            s = function(a, b, c) {
                this.p = a;
                this.f = b;
                this.v1 = this.v2 = 0;
                this.t1 = this.t2 = J.time;
                this.css = !1;
                this.type = "";
                this._prev = null;
                c && (this._next = c, c._prev = this)
            }, g = function() {
                var a = v,
                    b = J.time,
                    c, d;
                if (0.03 <= b - m)
                    for (m = b; a;) {
                        for (d = a._firstVP; d;) {
                            c = d.css ? n(a.target, d.p) : d.f ? a.target[d.p]() : a.target[d.p];
                            if (c !== d.v1 || 0.15 < b - d.t1) d.v2 = d.v1, d.v1 = c, d.t2 = d.t1, d.t1 = b;
                            d = d._next
                        }
                        a = a._next
                    }
            }, c = function(a) {
                this._lookup = {};
                this.target = a;
                this.elem = a.style && a.nodeType ? !0 : !1;
                h || (J.addEventListener("tick", g, null, !1, -100), m = J.time, h = !0);
                v && (this._next = v, v._prev = this);
                v = this
            }, d = c.getByTarget = function(a) {
                for (var b = v; b;) {
                    if (b.target === a) return b;
                    b = b._next
                }
            }, f = c.prototype;
        f.addProp = function(a, b) {
            if (!this._lookup[a]) {
                var c = this.target,
                    d = "function" === typeof c[a],
                    f = d ? this._altProp(a) : a,
                    g = this._firstVP;
                this._firstVP = this._lookup[a] =
                    this._lookup[f] = g = new s(f !== a && 0 === a.indexOf("set") ? f : a, d, g);
                g.css = this.elem && (void 0 !== this.target.style[g.p] || z[g.p]);
                g.css && z[g.p] && !c._gsTransform && q.set(c, {
                    x: "+=0"
                });
                g.type = b || g.css && 0 === a.indexOf("rotation") ? "deg" : "";
                g.v1 = g.v2 = g.css ? n(c, g.p) : d ? c[g.p]() : c[g.p]
            }
        };
        f.removeProp = function(a) {
            var b = this._lookup[a];
            b && (b._prev ? b._prev._next = b._next : b === this._firstVP && (this._firstVP = b._next), b._next && (b._next._prev = b._prev), this._lookup[a] = 0, b.f && (this._lookup[this._altProp(a)] = 0))
        };
        f.isTrackingProp =
            function(a) {
                return this._lookup[a] instanceof s
        };
        f.getVelocity = function(a) {
            var b = this._lookup[a],
                c = this.target;
            if (!b) throw "The velocity of " + a + " is not being tracked.";
            a = (b.css ? n(c, b.p) : b.f ? c[b.p]() : c[b.p]) - b.v2;
            if ("rad" === b.type || "deg" === b.type) c = "rad" === b.type ? 2 * Math.PI : 360, a %= c, a !== a % (c / 2) && (a = 0 > a ? a + c : a - c);
            return a / (J.time - b.t2)
        };
        f._altProp = function(a) {
            var b = a.substr(0, 3),
                b = ("get" === b ? "set" : "set" === b ? "get" : b) + a.substr(3);
            return "function" === typeof this.target[b] ? b : a
        };
        c.getByTarget = function(a) {
            var b =
                v;
            "string" === typeof a && (a = q.selector(a));
            for (a.length && a !== window && a[0] && a[0].style && !a.nodeType && (a = a[0]); b;) {
                if (b.target === a) return b;
                b = b._next
            }
        };
        c.track = function(a, b, f) {
            var g = d(a);
            b = b.split(",");
            var h = b.length;
            f = (f || "").split(",");
            for (g || (g = new c(a)); - 1 < --h;) g.addProp(b[h], f[h] || f[0]);
            return g
        };
        c.untrack = function(a, b) {
            var c = d(a),
                f = (b || "").split(","),
                g = f.length;
            if (c) {
                for (; - 1 < --g;) c.removeProp(f[g]);
                c._firstVP && b || (c._prev ? c._prev._next = c._next : c === v && (v = c._next), c._next && (c._next._prev = c._prev))
            }
        };
        c.isTracking = function(a, b) {
            var c = d(a);
            return c ? !b && c._firstVP ? !0 : c.isTrackingProp(b) : !1
        };
        return c
    }, !0)
});
window._gsDefine && window._gsQueue.pop()();


/*! PxTouch | http://github.com/thinkpixellab/pxtouch | 2013-03-28 */

// single global namespace
if (typeof(PxTouch) === 'undefined') {
    PxTouch = {};
}

(function($) {

    PxTouch.registerSpecialEvents = function(dataKey, eventTypes, ManagerFactory) {

        $.each(eventTypes, function(i, eventType) {
            $.event.special[eventType] = {
                setup: function(data, namespaces, eventHandle) {
                    var $el = $(this),
                        manager = $el.data(dataKey);

                    // create the special event manager object if necessary
                    if (!manager) {
                        manager = new ManagerFactory($el);
                        manager.activeEventTypes = 0;
                        manager.start();
                        $el.data(dataKey, manager);
                    }

                    manager.activeEventTypes++;
                },
                teardown: function(namespaces) {
                    var manager = $(this).data(dataKey);
                    if (manager) {
                        manager.activeEventTypes--;
                        if (manager.activeEventTypes === 0) {
                            manager.stop();
                        }
                    }
                }
            };
        });
    };

})(PxTouch.jQuery || jQuery);




(function($) {

    // Per element helper that listens to mouse, touch, and MSPointer
    // events and triggers normalized jQuery pointer* events
    function Pointers($element) {

        this.$el = $element;

        // holds current set of active pointers
        this.activePointers = [];

        // we'll disable mouse events if a touch is detected
        this.mouseEventsEnabled = false;

        // serializes multiple pointers into individual events
        var normalizeEvent = function(handler, context) {
            return function(event) {
                var pointers = extractPointers(event),
                    i, len;
                for (i = 0, len = pointers.length; i < len; i++) {
                    handler.call(context, pointers[i], event);
                }
            };
        };

        // set of native events we listen to categorized by input type
        this.listeners = {
            msPointer: {
                'MSPointerDown': normalizeEvent(onPointerStart, this),
                'MSPointerMove': normalizeEvent(onPointerMove, this),
                'MSPointerUp': normalizeEvent(onPointerEnd, this),
                'MSPointerCancel': normalizeEvent(onPointerCancel, this)
            },
            touch: {
                'touchstart': normalizeEvent(onTouchStart, this),
                'touchmove': normalizeEvent(onPointerMove, this),
                'touchend': normalizeEvent(onPointerEnd, this),
                'touchcancel': normalizeEvent(onPointerCancel, this)
            },
            mouse: {
                'mousedown': normalizeEvent(onPointerStart, this),
                'mousemove': normalizeEvent(onPointerMove, this),
                'mouseup': normalizeEvent(onPointerEnd, this)
            }
        };

        // up events don't fire for mouse outside target, so listen to doc
        this.docListeners = {
            msPointer: {
                'MSPointerUp': normalizeEvent(onPointerEnd, this)
            },
            mouse: {
                'mouseup': normalizeEvent(onPointerEnd, this)
            }
        };
    }

    Pointers.prototype.start = function() {
        if (window.navigator.msPointerEnabled) {
            this.$el.on(this.listeners.msPointer);
            $(document).on(this.docListeners.msPointer);
        } else {
            // add touch events if supported
            if ('ontouchstart' in window) {
                this.$el.on(this.listeners.touch);
            }

            // also add mouse events (mice should still work with touchscreens)
            this.$el.on(this.listeners.mouse);
            $(document).on(this.docListeners.mouse);
            this.mouseEventsEnabled = true;
        }
    };

    Pointers.prototype.stop = function() {
        this.$el.off(this.listeners.msPointer)
            .off(this.listeners.touch)
            .off(this.listeners.mouse);
        $(document).off(this.docListeners.msPointer)
            .off(this.docListeners.mouse);
        this.mouseEventsEnabled = false;
        this.activePointers = [];
    };

    function onTouchStart(pointer, event) {
        // remove mouse events once we recieve a touch
        if (this.mouseEventsEnabled) {
            this.$el.off(this.listeners.mouse);
            $(document).off(this.docListeners.mouse);
            this.mouseEventsEnabled = false;
        }
        return onPointerStart.call(this, pointer, event);
    }

    function onPointerStart(pointer, event) {
        // add new pointers to the active list and notify listener
        this.activePointers.push(pointer);
        this.triggerEvent('pointerstart', pointer, event);
    }

    function onPointerMove(pointer, event) {

        // see if we the pointer was started (might just be the mouse moving while up)
        var activeIndex = pointer.indexIn(this.activePointers);
        if (activeIndex >= 0) {

            // TODO: check to see if we've left the element

            // replace the pointer and call listener
            this.activePointers.splice(activeIndex, 1, pointer);
            this.triggerEvent('pointermove', pointer, event);
        }
    }

    function onPointerCancel(pointer, event) {
        return onPointerEnd.call(this, pointer, event, true);
    }

    function onPointerEnd(pointer, event, cancelled) {
        var activeIndex = pointer.indexIn(this.activePointers);
        if (activeIndex >= 0) {

            // remove active pointer and notify listener
            this.activePointers.splice(activeIndex, 1);
            this.triggerEvent('pointerend', pointer, event, cancelled);
        }
    }

    function extractPointers(event) {

        // prevent touches from panning the screen
        if (event.preventManipulation) {
            event.preventManipulation();
        }

        // convert to normalized Pointer objects
        var pointers = [],
            pointerType = getPointerType(event),
            oe = event.originalEvent,
            eventPointers = oe.changedTouches || oe.targetTouches || oe.touches || [oe],
            i, len, ep, x, y, id;

        for (i = 0, len = eventPointers.length; i < len; i++) {
            ep = eventPointers[i];

            // get the mouse coordinate relative to the page
            // http://www.quirksmode.org/js/events_properties.html
            x = y = 0;
            if (ep.pageX || ep.pageY) {
                x = ep.pageX;
                y = ep.pageY;
            } else if (ep.clientX || ep.clientY) {
                var docEl = document.documentElement;
                x = ep.clientX + document.body.scrollLeft + docEl.scrollLeft;
                y = ep.clientY + document.body.scrollTop + docEl.scrollTop;
            }

            // pointer id is either explicit or implied using index
            id = ep.pointerId || ep.identifier || i;

            pointers.push(new Pointer(x, y, id, pointerType));
        }

        return pointers;
    }

    Pointers.prototype.triggerEvent = function(eventType, pointer, originalEvent, cancelled) {
        this.$el.trigger(new $.Event(eventType, {
            pointer: pointer,
            cancelled: (cancelled === true),
            activePointers: this.activePointers,
            originalEvent: originalEvent
        }));
    };

    // Enumeration of supported input types
    var PointerType = {
        MOUSE: 'mouse',
        TOUCH: 'touch',
        PEN: 'pen'
    };

    // map the MS PointerType to our PointerType
    function getPointerType(event) {

        // check for touch or mouse events
        if (event.type.indexOf('touch') === 0) {
            return PointerType.TOUCH;
        } else if (event.type.indexOf('mouse') === 0) {
            return PointerType.MOUSE;
        }

        // check MSPointer type
        var oe = event.originalEvent;
        switch (oe.pointerType) {
            case oe.MSPOINTER_TYPE_MOUSE:
                return PointerType.MOUSE;
            case oe.MSPOINTER_TYPE_TOUCH:
                return PointerType.TOUCH;
            case oe.MSPOINTER_TYPE_PEN:
                return PointerType.PEN;
        }

        // fallback to mouse
        return PointerType.MOUSE;
    }

    function Pointer(x, y, id, type) {
        this.x = x;
        this.y = y;
        this.id = id;
        this.type = type;
    }

    Pointer.prototype.getDistance = function(other) {
        var x = this.x - other.x,
            y = this.y - other.y;
        return Math.sqrt((x * x) + (y * y));
    };

    Pointer.prototype.indexIn = function(collection) {
        for (var i = 0, len = collection.length; i < len; i++) {
            if (collection[i].id === this.id) {
                return i;
            }
        }
        return -1;
    };

    PxTouch.registerSpecialEvents(
        'pxtouch.pointers', ['pointerstart', 'pointermove', 'pointerend'],
        Pointers);

})(PxTouch.jQuery || jQuery);




(function($) {

    function Gestures($element) {
        this.$el = $element;

        // keep track of current pointer paths
        this.paths = [];

        var onPointerHandler = $.proxy(onPointerEvent, this);
        this.listeners = {
            'pointerstart': onPointerHandler,
            'pointermove': onPointerHandler,
            'pointerend': onPointerHandler
        };
    }

    Gestures.prototype.start = function() {
        this.$el.on(this.listeners);
    };

    Gestures.prototype.stop = function() {
        this.$el.off(this.listeners);
        this.paths = [];
    };

    function onPointerEvent(event) {

        var pointer = event.pointer,
            prevPaths = this.paths.length,
            activeCount = 0,
            path, currentPath, gestureType, i, currentIndex;

        // find the existing path and count active paths
        for (i = 0; i < prevPaths; i++) {
            path = this.paths[i];
            if (path.isActive) {
                activeCount++;
            }
            if (path.id === pointer.id) {
                currentIndex = i;
                currentPath = path;
            }
        }

        if (event.cancelled) {
            // remove the path if the pointer was cancellled
            if (currentPath) {
                this.paths.splice(currentIndex, 1);
                activeCount -= currentPath.isActive ? 1 : 0;
            }
        } else {
            // update or create the path
            if (currentPath) {
                currentPath.movePointer = pointer;
                currentPath.moveTime = new Date().getTime();
            } else {
                currentPath = new Path(pointer);
                this.paths.push(currentPath);
                activeCount++;
            }

            // mark the path as inactive if pointer ended
            if (event.type === 'pointerend' && currentPath.isActive) {
                activeCount--;
                currentPath.isActive = false;
            }
        }

        // determine the gesture state
        if (activeCount <= 0) {
            gestureType = 'gestureend';
        } else if (prevPaths === 0) {
            gestureType = 'gesturestart';
        } else {
            gestureType = 'gesturemove';
        }

        this.$el.trigger(new $.Event(gestureType, {
            paths: this.paths,
            cancelled: (this.paths.length === 0),
            originalEvent: event.originalEvent
        }));

        // clear the paths if the gesture ended
        if (activeCount <= 0) {
            this.paths = [];
        }
    }

    function Path(startPointer) {
        this.id = startPointer.id;
        this.startPointer = startPointer;
        this.startTime = new Date().getTime();
        this.movePointer = startPointer;
        this.moveTime = this.startTime;
        this.isActive = true;
    }

    Path.prototype.getLength = function() {
        return Math.abs(this.movePointer.getDistance(this.startPointer));
    };

    Path.prototype.getElapsed = function() {
        return this.moveTime - this.startTime;
    };

    Path.prototype.getAngle = function() {
        var theta = Math.atan2(
            this.movePointer.y - this.startPointer.y,
            this.startPointer.x - this.movePointer.x);
        return theta / Math.PI * 180 + 180;
    };

    Path.prototype.getDirection = function() {
        var angle = this.getAngle();
        if (angle >= 45 && angle < 135) {
            return 'up';
        }
        if (angle >= 135 && angle < 225) {
            return 'left';
        }
        if (angle >= 225 && angle < 315) {
            return 'down';
        }
        return 'right';
    };

    Path.prototype.angleBetween = function(other) {
        var angle = Math.abs(this.getAngle() - other.getAngle());
        angle = Math.min(angle, 360 - angle);
        return angle;
    };

    PxTouch.registerSpecialEvents(
        'pxtouch.gestures', ['gesturestart', 'gesturemove', 'gestureend'],
        Gestures);

})(PxTouch.jQuery || jQuery);




(function($) {

    var MAX_DISTANCE = 10, // disregard tap if finger moves too much
        MIN_HOLD_TIME = 500; // threshold between tap and hold

    var TapState = {
        NONE: 0, // gesture has not started
        INVALID: 1, // gesture in progress but not a tap or hold
        TAP: 2,
        HOLD: 3
    };

    function Taps($element) {
        this.$el = $element;

        // keep track of how many event *types* are being used
        this.activeEventTypes = 0;

        this.state = TapState.NONE;
        this.holdTimer = null;

        var onGestureHandler = $.proxy(onGestureEvent, this);
        this.listeners = {
            'gesturestart': onGestureHandler,
            'gesturemove': onGestureHandler,
            'gestureend': onGestureHandler
        };
    }

    Taps.prototype.start = function() {
        this.$el.on(this.listeners);
    };

    Taps.prototype.stop = function() {
        this.$el.off(this.listeners);
        this.state = TapState.NONE;
    };

    function onGestureEvent(event) {

        var paths = event.paths,
            prevState = this.state,
            isGestureEnd = (event.type === 'gestureend'),
            isRightClick = false,
            newState, distance;

        // don't consider right clicks as taps
        if (event.originalEvent.which) {
            isRightClick = (event.originalEvent.which === 3);
        } else if (event.originalEvent.button) {
            isRightClick = (event.originalEvent.button === 2);
        }

        if (prevState === TapState.INVALID || paths.length !== 1 ||
            isRightClick || event.cancelled) {
            // too many fingers or already invalid
            newState = TapState.INVALID;
        } else {

            // verify the pointer hasn't moved too much
            distance = paths[0].getLength();
            if (distance > MAX_DISTANCE) {
                newState = TapState.INVALID;
            } else if (prevState === TapState.HOLD) {
                // remain in same state once in hold
                newState = TapState.HOLD;
            } else {
                newState = TapState.TAP;
            }
        }

        // do we need to either start or clear the hold timer?
        if (!this.holdTimer && newState === TapState.TAP) {
            this.holdTimer = setTimeout(
                createHoldStartTrigger(event, this),
                MIN_HOLD_TIME);
        } else if (this.holdTimer && (newState === TapState.INVALID || isGestureEnd)) {
            clearTimeout(this.holdTimer);
            this.holdTimer = null;
        }

        // did a hold just end?
        if ((newState === TapState.HOLD && isGestureEnd) ||
            (prevState === TapState.HOLD && newState !== prevState)) {
            this.triggerEvent('holdend', event, newState === TapState.INVALID);
        }
        // or should we trigger a tap 
        else if (isGestureEnd && newState === TapState.TAP) {
            this.triggerEvent('tap', event);
        }

        // reset if its the end of a gesture
        this.state = isGestureEnd ? TapState.NONE : newState;
    }

    function createHoldStartTrigger(event, context) {
        return $.proxy(function() {
            this.state = TapState.HOLD;
            this.triggerEvent('holdstart', event);
            this.holdTimer = null;
        }, context);
    }

    Taps.prototype.triggerEvent = function(eventType, event, cancelled) {
        var pointer = event.paths.length > 0 ? event.paths[0].movePointer : null;
        this.$el.trigger(new $.Event(eventType, {
            x: pointer ? pointer.x : 0,
            y: pointer ? pointer.y : 0,
            pointerType: pointer ? pointer.type : null,
            cancelled: (cancelled === true),
            originalEvent: event.originalEvent
        }));
    };

    PxTouch.registerSpecialEvents(
        'pxtouch.taps', ['tap', 'holdstart', 'holdend'],
        Taps);

})(PxTouch.jQuery || jQuery);




(function($) {

    // minimum length of at least one side before its considered a pinch
    var MIN_LENGTH = 10,

        // min length of both sides before angle check is required
        ANGLE_CHECK_MIN_LENGTH = 15,

        // min angle between lines (parallel lines are not a pinch)
        MIN_ANGLE_DEGREES = 30;


    var PinchState = {
        NONE: 0,
        PINCH: 1,
        INVALID: 2
    };

    function Pinch($element) {
        this.$el = $element;

        this.state = PinchState.NONE;

        var onGestureHandler = $.proxy(onGestureEvent, this);
        this.listeners = {
            'gesturestart': onGestureHandler,
            'gesturemove': onGestureHandler,
            'gestureend': onGestureHandler
        };
    }

    Pinch.prototype.start = function() {
        this.$el.on(this.listeners);
    };

    Pinch.prototype.stop = function() {
        this.$el.off(this.listeners);
        this.state = PinchState.NONE;
    };

    function onGestureEvent(event) {

        var paths = event.paths,
            prevState = this.state,
            isGestureEnd = (event.type === 'gestureend'),
            pathA, pathB, aLen, bLen, moveDistance, startDistance, scale;

        if (prevState !== PinchState.INVALID) {

            // we only support 2 finger pinch
            if (paths.length > 2 || event.cancelled) {
                this.state = PinchState.INVALID;
            } else if (paths.length === 2) {

                // get the length of each path 
                pathA = paths[0];
                pathB = paths[1];
                aLen = pathA.getLength();
                bLen = pathB.getLength();

                // make sure at least one side is bigger than the minimum
                if (aLen > MIN_LENGTH || bLen > MIN_LENGTH) {

                    // do we need to check the angle betwen the lines?
                    if (aLen > ANGLE_CHECK_MIN_LENGTH && bLen > ANGLE_CHECK_MIN_LENGTH) {
                        //console.log('angle between: ' + pathA.angleBetween(pathB).toFixed(2));
                        if (pathA.angleBetween(pathB) >= MIN_ANGLE_DEGREES) {
                            this.state = PinchState.PINCH;
                        } else {
                            this.state = PinchState.INVALID;
                        }
                    } else {
                        this.state = PinchState.PINCH;
                    }
                }

                if (this.state === PinchState.PINCH) {
                    moveDistance = pathA.movePointer.getDistance(pathB.movePointer);
                    startDistance = pathA.startPointer.getDistance(pathB.startPointer);

                    // calc the origin and scale and trigger the event
                    var eventData = {
                        originX: (pathA.movePointer.x + pathB.movePointer.x) / 2,
                        originY: (pathA.movePointer.y + pathB.movePointer.y) / 2,
                        scale: moveDistance / startDistance,
                        paths: paths,
                        cancelled: false,
                        originalEvent: event.originalEvent
                    };

                    if (prevState === PinchState.NONE) {
                        this.$el.trigger($.Event('pinchstart', eventData));
                    } else if (!isGestureEnd) {
                        this.$el.trigger($.Event('pinchmove', eventData));
                    }

                    if (isGestureEnd) {
                        this.$el.trigger($.Event('pinchend', eventData));
                    }
                }
            }

            if (this.state === PinchState.INVALID && prevState === PinchState.PINCH) {
                this.$el.trigger($.Event('pinchend', {
                    originX: 0,
                    originY: 0,
                    scale: 0,
                    paths: [],
                    cancelled: true,
                    originalEvent: event.originalEvent
                }));
            }
        }

        if (isGestureEnd) {
            // reset validity if the gesture is done
            this.state = PinchState.NONE;
        }
    }

    PxTouch.registerSpecialEvents(
        'pxtouch.pinch', ['pinchstart', 'pinchmove', 'pinchend'],
        Pinch);

})(PxTouch.jQuery || jQuery);




(function($) {

    // minimum length of a path before its considered a drag
    var MIN_LENGTH = 10,

        // max distance between two paths
        MAX_SEPARATION = 200;

    var DragState = {
        NONE: 0,
        DRAG: 1,
        INVALID: 2
    };

    function Drag($element) {
        this.$el = $element;

        this.state = DragState.NONE;

        var onGestureHandler = $.proxy(onGestureEvent, this);
        this.listeners = {
            'gesturestart': onGestureHandler,
            'gesturemove': onGestureHandler,
            'gestureend': onGestureHandler
        };
    }

    Drag.prototype.start = function() {
        this.$el.on(this.listeners);
    };

    Drag.prototype.stop = function() {
        this.$el.off(this.listeners);
        this.state = DragState.NONE;
    };

    // helper to verify that the path endpoints are close to eachother
    function arePathsClose(paths) {
        var numPaths = paths.length,
            i, j, path, isClose, separation;

        if (numPaths > 1) {
            for (i = 0; i < numPaths; i++) {

                // only measure separation for active paths
                path = paths[i];
                if (path.isActive) {

                    isClose = false;
                    for (j = 0; j < numPaths; j++) {
                        // don't check distance for same point
                        if (i === j) {
                            continue;
                        }

                        // see if the endpoint is close to the other path's endpoint
                        separation = path.movePointer.getDistance(paths[j].movePointer);
                        if (separation <= MAX_SEPARATION) {
                            isClose = true;
                            break;
                        }
                    }

                    // fail if even a single point is too far away
                    if (!isClose) {
                        return false;
                    }
                }
            }
        }
        return true;
    }

    function onGestureEvent(event) {

        var paths = event.paths,
            prevState = this.state,
            isGestureEnd = (event.type === 'gestureend'),
            path, length;

        if (prevState !== DragState.INVALID) {

            // we'll validate that all points are relatively close but then
            // we just use the first path for all remaining checks
            length = (paths.length > 0) ? paths[0].getLength() : 0;

            var eventData = {
                paths: paths,
                length: length,
                cancelled: event.cancelled,
                originalEvent: event.originalEvent
            };

            if (event.cancelled || !arePathsClose(event.paths)) {
                this.state = DragState.INVALID;
                eventData.cancelled = true;
            } else {

                if (this.state === DragState.NONE) {

                    // start the drag gesture
                    if (length > MIN_LENGTH) {
                        this.state = DragState.DRAG;
                        this.$el.trigger($.Event('dragstart', eventData));
                    }
                } else if (!isGestureEnd) {
                    this.$el.trigger($.Event('dragmove', eventData));
                }
            }

            if ((prevState === DragState.DRAG && this.state === DragState.INVALID) ||
                (this.state === DragState.DRAG && isGestureEnd)) {
                this.$el.trigger($.Event('dragend', eventData));
            }
        }

        // reset validity if the gesture is done
        if (isGestureEnd) {
            this.state = DragState.NONE;
        }
    }

    PxTouch.registerSpecialEvents(
        'pxtouch.drag', ['dragstart', 'dragmove', 'dragend'],
        Drag);

})(PxTouch.jQuery || jQuery);




(function($) {

    // swipe should not travel backwards very much
    var MAX_LENGTH_VARIATION = 20,

        // swipe shouldn't be too curved
        MAX_ANGLE_VARIATION = 20;

    var SwipeState = {
        NONE: 0,
        SWIPE: 1,
        INVALID: 2
    };

    function Swipe($element) {
        this.$el = $element;

        this.state = SwipeState.NONE;

        // track the maximum length
        this.maxLength = 0;
        this.angle = 0;

        var onDragHandler = $.proxy(onDragEvent, this);
        this.listeners = {
            'dragstart': onDragHandler,
            'dragmove': onDragHandler,
            'dragend': onDragHandler
        };
    }

    Swipe.prototype.start = function() {
        this.$el.on(this.listeners);
    };

    Swipe.prototype.stop = function() {
        this.$el.off(this.listeners);
        this.state = SwipeState.NONE;
        this.maxLength = 0;
        this.angle = 0;
    };

    function onDragEvent(event) {

        var paths = event.paths,
            prevState = this.state,
            isDragEnd = (event.type === 'dragend'),
            length = event.length,
            angle, angleDiff;

        if (this.state !== SwipeState.INVALID) {

            angle = (paths.length > 0) ? paths[0].getAngle() : 0;

            var eventData = {
                length: length,
                angle: angle,
                paths: paths,
                cancelled: event.cancelled,
                originalEvent: event.originalEvent
            };

            if (event.cancelled) {
                this.state = SwipeState.INVALID;
            } else if (this.state === SwipeState.NONE) {
                // start the swipe gesture
                this.state = SwipeState.SWIPE;
                this.maxLength = length;
                this.angle = angle;
                this.$el.trigger($.Event('swipestart', eventData));
            } else {

                // verify that the length and angle don't vary too much
                if (length >= this.maxLength) {
                    this.maxLength = length;
                } else if (this.maxLength - length > MAX_LENGTH_VARIATION) {
                    this.state = SwipeState.INVALID;
                }

                angleDiff = Math.abs(this.angle - angle);
                if (Math.min(angleDiff, 360 - angleDiff) > MAX_ANGLE_VARIATION) {
                    this.state = SwipeState.INVALID;
                }

                if (this.state !== SwipeState.INVALID && !isDragEnd) {
                    this.$el.trigger($.Event('swipemove', eventData));
                }
            }

            if ((prevState === SwipeState.SWIPE && this.state === SwipeState.INVALID) ||
                (this.state === SwipeState.SWIPE && isDragEnd)) {
                eventData.cancelled = (this.state === SwipeState.INVALID);
                this.$el.trigger($.Event('swipeend', eventData));
            }
        }

        // reset validity if the gesture is done
        if (isDragEnd) {
            this.state = SwipeState.NONE;
            this.maxLength = 0;
            this.angle = 0;
        }
    }

    PxTouch.registerSpecialEvents(
        'pxtouch.swipe', ['swipestart', 'swipemove', 'swipeend'],
        Swipe);

})(PxTouch.jQuery || jQuery);

/*!
 * VERSION: 1.7.3
 * DATE: 2014-01-14
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
(window._gsQueue || (window._gsQueue = [])).push(function() {
    "use strict";
    var t = document.documentElement,
        e = window,
        i = function(i, r) {
            var s = "x" === r ? "Width" : "Height",
                n = "scroll" + s,
                a = "client" + s,
                o = document.body;
            return i === e || i === t || i === o ? Math.max(t[n], o[n]) - (e["inner" + s] || Math.max(t[a], o[a])) : i[n] - i["offset" + s]
        }, r = window._gsDefine.plugin({
            propName: "scrollTo",
            API: 2,
            version: "1.7.3",
            init: function(t, r, s) {
                return this._wdw = t === e, this._target = t, this._tween = s, "object" != typeof r && (r = {
                    y: r
                }), this._autoKill = r.autoKill !== !1, this.x = this.xPrev = this.getX(), this.y = this.yPrev = this.getY(), null != r.x ? (this._addTween(this, "x", this.x, "max" === r.x ? i(t, "x") : r.x, "scrollTo_x", !0), this._overwriteProps.push("scrollTo_x")) : this.skipX = !0, null != r.y ? (this._addTween(this, "y", this.y, "max" === r.y ? i(t, "y") : r.y, "scrollTo_y", !0), this._overwriteProps.push("scrollTo_y")) : this.skipY = !0, !0
            },
            set: function(t) {
                this._super.setRatio.call(this, t);
                var r = this._wdw || !this.skipX ? this.getX() : this.xPrev,
                    s = this._wdw || !this.skipY ? this.getY() : this.yPrev,
                    n = s - this.yPrev,
                    a = r - this.xPrev;
                this._autoKill && (!this.skipX && (a > 7 || -7 > a) && i(this._target, "x") > r && (this.skipX = !0), !this.skipY && (n > 7 || -7 > n) && i(this._target, "y") > s && (this.skipY = !0), this.skipX && this.skipY && this._tween.kill()), this._wdw ? e.scrollTo(this.skipX ? r : this.x, this.skipY ? s : this.y) : (this.skipY || (this._target.scrollTop = this.y), this.skipX || (this._target.scrollLeft = this.x)), this.xPrev = this.x, this.yPrev = this.y
            }
        }),
        s = r.prototype;
    r.max = i, s.getX = function() {
        return this._wdw ? null != e.pageXOffset ? e.pageXOffset : null != t.scrollLeft ? t.scrollLeft : document.body.scrollLeft : this._target.scrollLeft
    }, s.getY = function() {
        return this._wdw ? null != e.pageYOffset ? e.pageYOffset : null != t.scrollTop ? t.scrollTop : document.body.scrollTop : this._target.scrollTop
    }, s._kill = function(t) {
        return t.scrollTo_x && (this.skipX = !0), t.scrollTo_y && (this.skipY = !0), this._super._kill.call(this, t)
    }
}), window._gsDefine && window._gsQueue.pop()();

/*!
 * D3 http://d3js.org/
 **/
! function() {
    function n(n, t) {
        return t > n ? -1 : n > t ? 1 : n >= t ? 0 : 0 / 0
    }

    function t(n) {
        return null != n && !isNaN(n)
    }

    function e(n) {
        return {
            left: function(t, e, r, u) {
                for (arguments.length < 3 && (r = 0), arguments.length < 4 && (u = t.length); u > r;) {
                    var i = r + u >>> 1;
                    n(t[i], e) < 0 ? r = i + 1 : u = i
                }
                return r
            },
            right: function(t, e, r, u) {
                for (arguments.length < 3 && (r = 0), arguments.length < 4 && (u = t.length); u > r;) {
                    var i = r + u >>> 1;
                    n(t[i], e) > 0 ? u = i : r = i + 1
                }
                return r
            }
        }
    }

    function r(n) {
        return n.length
    }

    function u(n) {
        for (var t = 1; n * t % 1;) t *= 10;
        return t
    }

    function i(n, t) {
        try {
            for (var e in t) Object.defineProperty(n.prototype, e, {
                value: t[e],
                enumerable: !1
            })
        } catch (r) {
            n.prototype = t
        }
    }

    function o() {}

    function a(n) {
        return ha + n in this
    }

    function c(n) {
        return n = ha + n, n in this && delete this[n]
    }

    function s() {
        var n = [];
        return this.forEach(function(t) {
            n.push(t)
        }), n
    }

    function l() {
        var n = 0;
        for (var t in this) t.charCodeAt(0) === ga && ++n;
        return n
    }

    function f() {
        for (var n in this)
            if (n.charCodeAt(0) === ga) return !1;
        return !0
    }

    function h() {}

    function g(n, t, e) {
        return function() {
            var r = e.apply(t, arguments);
            return r === t ? n : r
        }
    }

    function p(n, t) {
        if (t in n) return t;
        t = t.charAt(0).toUpperCase() + t.substring(1);
        for (var e = 0, r = pa.length; r > e; ++e) {
            var u = pa[e] + t;
            if (u in n) return u
        }
    }

    function v() {}

    function d() {}

    function m(n) {
        function t() {
            for (var t, r = e, u = -1, i = r.length; ++u < i;)(t = r[u].on) && t.apply(this, arguments);
            return n
        }
        var e = [],
            r = new o;
        return t.on = function(t, u) {
            var i, o = r.get(t);
            return arguments.length < 2 ? o && o.on : (o && (o.on = null, e = e.slice(0, i = e.indexOf(o)).concat(e.slice(i + 1)), r.remove(t)), u && e.push(r.set(t, {
                on: u
            })), n)
        }, t
    }

    function y() {
        Go.event.preventDefault()
    }

    function x() {
        for (var n, t = Go.event; n = t.sourceEvent;) t = n;
        return t
    }

    function M(n) {
        for (var t = new d, e = 0, r = arguments.length; ++e < r;) t[arguments[e]] = m(t);
        return t.of = function(e, r) {
            return function(u) {
                try {
                    var i = u.sourceEvent = Go.event;
                    u.target = n, Go.event = u, t[u.type].apply(e, r)
                } finally {
                    Go.event = i
                }
            }
        }, t
    }

    function _(n) {
        return da(n, _a), n
    }

    function b(n) {
        return "function" == typeof n ? n : function() {
            return ma(n, this)
        }
    }

    function w(n) {
        return "function" == typeof n ? n : function() {
            return ya(n, this)
        }
    }

    function S(n, t) {
        function e() {
            this.removeAttribute(n)
        }

        function r() {
            this.removeAttributeNS(n.space, n.local)
        }

        function u() {
            this.setAttribute(n, t)
        }

        function i() {
            this.setAttributeNS(n.space, n.local, t)
        }

        function o() {
            var e = t.apply(this, arguments);
            null == e ? this.removeAttribute(n) : this.setAttribute(n, e)
        }

        function a() {
            var e = t.apply(this, arguments);
            null == e ? this.removeAttributeNS(n.space, n.local) : this.setAttributeNS(n.space, n.local, e)
        }
        return n = Go.ns.qualify(n), null == t ? n.local ? r : e : "function" == typeof t ? n.local ? a : o : n.local ? i : u
    }

    function k(n) {
        return n.trim().replace(/\s+/g, " ")
    }

    function E(n) {
        return new RegExp("(?:^|\\s+)" + Go.requote(n) + "(?:\\s+|$)", "g")
    }

    function A(n) {
        return n.trim().split(/^|\s+/)
    }

    function C(n, t) {
        function e() {
            for (var e = -1; ++e < u;) n[e](this, t)
        }

        function r() {
            for (var e = -1, r = t.apply(this, arguments); ++e < u;) n[e](this, r)
        }
        n = A(n).map(N);
        var u = n.length;
        return "function" == typeof t ? r : e
    }

    function N(n) {
        var t = E(n);
        return function(e, r) {
            if (u = e.classList) return r ? u.add(n) : u.remove(n);
            var u = e.getAttribute("class") || "";
            r ? (t.lastIndex = 0, t.test(u) || e.setAttribute("class", k(u + " " + n))) : e.setAttribute("class", k(u.replace(t, " ")))
        }
    }

    function L(n, t, e) {
        function r() {
            this.style.removeProperty(n)
        }

        function u() {
            this.style.setProperty(n, t, e)
        }

        function i() {
            var r = t.apply(this, arguments);
            null == r ? this.style.removeProperty(n) : this.style.setProperty(n, r, e)
        }
        return null == t ? r : "function" == typeof t ? i : u
    }

    function T(n, t) {
        function e() {
            delete this[n]
        }

        function r() {
            this[n] = t
        }

        function u() {
            var e = t.apply(this, arguments);
            null == e ? delete this[n] : this[n] = e
        }
        return null == t ? e : "function" == typeof t ? u : r
    }

    function q(n) {
        return "function" == typeof n ? n : (n = Go.ns.qualify(n)).local ? function() {
            return this.ownerDocument.createElementNS(n.space, n.local)
        } : function() {
            return this.ownerDocument.createElementNS(this.namespaceURI, n)
        }
    }

    function z(n) {
        return {
            __data__: n
        }
    }

    function R(n) {
        return function() {
            return Ma(this, n)
        }
    }

    function D(t) {
        return arguments.length || (t = n),
        function(n, e) {
            return n && e ? t(n.__data__, e.__data__) : !n - !e
        }
    }

    function P(n, t) {
        for (var e = 0, r = n.length; r > e; e++)
            for (var u, i = n[e], o = 0, a = i.length; a > o; o++)(u = i[o]) && t(u, o, e);
        return n
    }

    function U(n) {
        return da(n, wa), n
    }

    function j(n) {
        var t, e;
        return function(r, u, i) {
            var o, a = n[i].update,
                c = a.length;
            for (i != e && (e = i, t = 0), u >= t && (t = u + 1); !(o = a[t]) && ++t < c;);
            return o
        }
    }

    function H() {
        var n = this.__transition__;
        n && ++n.active
    }

    function F(n, t, e) {
        function r() {
            var t = this[o];
            t && (this.removeEventListener(n, t, t.$), delete this[o])
        }

        function u() {
            var u = c(t, Qo(arguments));
            r.call(this), this.addEventListener(n, this[o] = u, u.$ = e), u._ = t
        }

        function i() {
            var t, e = new RegExp("^__on([^.]+)" + Go.requote(n) + "$");
            for (var r in this)
                if (t = r.match(e)) {
                    var u = this[r];
                    this.removeEventListener(t[1], u, u.$), delete this[r]
                }
        }
        var o = "__on" + n,
            a = n.indexOf("."),
            c = O;
        a > 0 && (n = n.substring(0, a));
        var s = ka.get(n);
        return s && (n = s, c = I), a ? t ? u : r : t ? v : i
    }

    function O(n, t) {
        return function(e) {
            var r = Go.event;
            Go.event = e, t[0] = this.__data__;
            try {
                n.apply(this, t)
            } finally {
                Go.event = r
            }
        }
    }

    function I(n, t) {
        var e = O(n, t);
        return function(n) {
            var t = this,
                r = n.relatedTarget;
            r && (r === t || 8 & r.compareDocumentPosition(t)) || e.call(t, n)
        }
    }

    function Y() {
        var n = ".dragsuppress-" + ++Aa,
            t = "click" + n,
            e = Go.select(ea).on("touchmove" + n, y).on("dragstart" + n, y).on("selectstart" + n, y);
        if (Ea) {
            var r = ta.style,
                u = r[Ea];
            r[Ea] = "none"
        }
        return function(i) {
            function o() {
                e.on(t, null)
            }
            e.on(n, null), Ea && (r[Ea] = u), i && (e.on(t, function() {
                y(), o()
            }, !0), setTimeout(o, 0))
        }
    }

    function Z(n, t) {
        t.changedTouches && (t = t.changedTouches[0]);
        var e = n.ownerSVGElement || n;
        if (e.createSVGPoint) {
            var r = e.createSVGPoint();
            return r.x = t.clientX, r.y = t.clientY, r = r.matrixTransform(n.getScreenCTM().inverse()), [r.x, r.y]
        }
        var u = n.getBoundingClientRect();
        return [t.clientX - u.left - n.clientLeft, t.clientY - u.top - n.clientTop]
    }

    function V() {
        return Go.event.changedTouches[0].identifier
    }

    function $() {
        return Go.event.target
    }

    function X() {
        return ea
    }

    function B(n) {
        return n > 0 ? 1 : 0 > n ? -1 : 0
    }

    function J(n, t, e) {
        return (t[0] - n[0]) * (e[1] - n[1]) - (t[1] - n[1]) * (e[0] - n[0])
    }

    function W(n) {
        return n > 1 ? 0 : -1 > n ? Ca : Math.acos(n)
    }

    function G(n) {
        return n > 1 ? La : -1 > n ? -La : Math.asin(n)
    }

    function K(n) {
        return ((n = Math.exp(n)) - 1 / n) / 2
    }

    function Q(n) {
        return ((n = Math.exp(n)) + 1 / n) / 2
    }

    function nt(n) {
        return ((n = Math.exp(2 * n)) - 1) / (n + 1)
    }

    function tt(n) {
        return (n = Math.sin(n / 2)) * n
    }

    function et() {}

    function rt(n, t, e) {
        return new ut(n, t, e)
    }

    function ut(n, t, e) {
        this.h = n, this.s = t, this.l = e
    }

    function it(n, t, e) {
        function r(n) {
            return n > 360 ? n -= 360 : 0 > n && (n += 360), 60 > n ? i + (o - i) * n / 60 : 180 > n ? o : 240 > n ? i + (o - i) * (240 - n) / 60 : i
        }

        function u(n) {
            return Math.round(255 * r(n))
        }
        var i, o;
        return n = isNaN(n) ? 0 : (n %= 360) < 0 ? n + 360 : n, t = isNaN(t) ? 0 : 0 > t ? 0 : t > 1 ? 1 : t, e = 0 > e ? 0 : e > 1 ? 1 : e, o = .5 >= e ? e * (1 + t) : e + t - e * t, i = 2 * e - o, yt(u(n + 120), u(n), u(n - 120))
    }

    function ot(n, t, e) {
        return new at(n, t, e)
    }

    function at(n, t, e) {
        this.h = n, this.c = t, this.l = e
    }

    function ct(n, t, e) {
        return isNaN(n) && (n = 0), isNaN(t) && (t = 0), st(e, Math.cos(n *= za) * t, Math.sin(n) * t)
    }

    function st(n, t, e) {
        return new lt(n, t, e)
    }

    function lt(n, t, e) {
        this.l = n, this.a = t, this.b = e
    }

    function ft(n, t, e) {
        var r = (n + 16) / 116,
            u = r + t / 500,
            i = r - e / 200;
        return u = gt(u) * Za, r = gt(r) * Va, i = gt(i) * $a, yt(vt(3.2404542 * u - 1.5371385 * r - .4985314 * i), vt(-.969266 * u + 1.8760108 * r + .041556 * i), vt(.0556434 * u - .2040259 * r + 1.0572252 * i))
    }

    function ht(n, t, e) {
        return n > 0 ? ot(Math.atan2(e, t) * Ra, Math.sqrt(t * t + e * e), n) : ot(0 / 0, 0 / 0, n)
    }

    function gt(n) {
        return n > .206893034 ? n * n * n : (n - 4 / 29) / 7.787037
    }

    function pt(n) {
        return n > .008856 ? Math.pow(n, 1 / 3) : 7.787037 * n + 4 / 29
    }

    function vt(n) {
        return Math.round(255 * (.00304 >= n ? 12.92 * n : 1.055 * Math.pow(n, 1 / 2.4) - .055))
    }

    function dt(n) {
        return yt(n >> 16, 255 & n >> 8, 255 & n)
    }

    function mt(n) {
        return dt(n) + ""
    }

    function yt(n, t, e) {
        return new xt(n, t, e)
    }

    function xt(n, t, e) {
        this.r = n, this.g = t, this.b = e
    }

    function Mt(n) {
        return 16 > n ? "0" + Math.max(0, n).toString(16) : Math.min(255, n).toString(16)
    }

    function _t(n, t, e) {
        var r, u, i, o = 0,
            a = 0,
            c = 0;
        if (r = /([a-z]+)\((.*)\)/i.exec(n)) switch (u = r[2].split(","), r[1]) {
            case "hsl":
                return e(parseFloat(u[0]), parseFloat(u[1]) / 100, parseFloat(u[2]) / 100);
            case "rgb":
                return t(kt(u[0]), kt(u[1]), kt(u[2]))
        }
        return (i = Ja.get(n)) ? t(i.r, i.g, i.b) : (null == n || "#" !== n.charAt(0) || isNaN(i = parseInt(n.substring(1), 16)) || (4 === n.length ? (o = (3840 & i) >> 4, o = o >> 4 | o, a = 240 & i, a = a >> 4 | a, c = 15 & i, c = c << 4 | c) : 7 === n.length && (o = (16711680 & i) >> 16, a = (65280 & i) >> 8, c = 255 & i)), t(o, a, c))
    }

    function bt(n, t, e) {
        var r, u, i = Math.min(n /= 255, t /= 255, e /= 255),
            o = Math.max(n, t, e),
            a = o - i,
            c = (o + i) / 2;
        return a ? (u = .5 > c ? a / (o + i) : a / (2 - o - i), r = n == o ? (t - e) / a + (e > t ? 6 : 0) : t == o ? (e - n) / a + 2 : (n - t) / a + 4, r *= 60) : (r = 0 / 0, u = c > 0 && 1 > c ? 0 : r), rt(r, u, c)
    }

    function wt(n, t, e) {
        n = St(n), t = St(t), e = St(e);
        var r = pt((.4124564 * n + .3575761 * t + .1804375 * e) / Za),
            u = pt((.2126729 * n + .7151522 * t + .072175 * e) / Va),
            i = pt((.0193339 * n + .119192 * t + .9503041 * e) / $a);
        return st(116 * u - 16, 500 * (r - u), 200 * (u - i))
    }

    function St(n) {
        return (n /= 255) <= .04045 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4)
    }

    function kt(n) {
        var t = parseFloat(n);
        return "%" === n.charAt(n.length - 1) ? Math.round(2.55 * t) : t
    }

    function Et(n) {
        return "function" == typeof n ? n : function() {
            return n
        }
    }

    function At(n) {
        return n
    }

    function Ct(n) {
        return function(t, e, r) {
            return 2 === arguments.length && "function" == typeof e && (r = e, e = null), Nt(t, e, n, r)
        }
    }

    function Nt(n, t, e, r) {
        function u() {
            var n, t = c.status;
            if (!t && c.responseText || t >= 200 && 300 > t || 304 === t) {
                try {
                    n = e.call(i, c)
                } catch (r) {
                    return o.error.call(i, r), void 0
                }
                o.load.call(i, n)
            } else o.error.call(i, c)
        }
        var i = {}, o = Go.dispatch("beforesend", "progress", "load", "error"),
            a = {}, c = new XMLHttpRequest,
            s = null;
        return !ea.XDomainRequest || "withCredentials" in c || !/^(http(s)?:)?\/\//.test(n) || (c = new XDomainRequest), "onload" in c ? c.onload = c.onerror = u : c.onreadystatechange = function() {
            c.readyState > 3 && u()
        }, c.onprogress = function(n) {
            var t = Go.event;
            Go.event = n;
            try {
                o.progress.call(i, c)
            } finally {
                Go.event = t
            }
        }, i.header = function(n, t) {
            return n = (n + "").toLowerCase(), arguments.length < 2 ? a[n] : (null == t ? delete a[n] : a[n] = t + "", i)
        }, i.mimeType = function(n) {
            return arguments.length ? (t = null == n ? null : n + "", i) : t
        }, i.responseType = function(n) {
            return arguments.length ? (s = n, i) : s
        }, i.response = function(n) {
            return e = n, i
        }, ["get", "post"].forEach(function(n) {
            i[n] = function() {
                return i.send.apply(i, [n].concat(Qo(arguments)))
            }
        }), i.send = function(e, r, u) {
            if (2 === arguments.length && "function" == typeof r && (u = r, r = null), c.open(e, n, !0), null == t || "accept" in a || (a.accept = t + ",*/*"), c.setRequestHeader)
                for (var l in a) c.setRequestHeader(l, a[l]);
            return null != t && c.overrideMimeType && c.overrideMimeType(t), null != s && (c.responseType = s), null != u && i.on("error", u).on("load", function(n) {
                u(null, n)
            }), o.beforesend.call(i, c), c.send(null == r ? null : r), i
        }, i.abort = function() {
            return c.abort(), i
        }, Go.rebind(i, o, "on"), null == r ? i : i.get(Lt(r))
    }

    function Lt(n) {
        return 1 === n.length ? function(t, e) {
            n(null == t ? e : null)
        } : n
    }

    function Tt() {
        var n = qt(),
            t = zt() - n;
        t > 24 ? (isFinite(t) && (clearTimeout(Qa), Qa = setTimeout(Tt, t)), Ka = 0) : (Ka = 1, tc(Tt))
    }

    function qt() {
        var n = Date.now();
        for (nc = Wa; nc;) n >= nc.t && (nc.f = nc.c(n - nc.t)), nc = nc.n;
        return n
    }

    function zt() {
        for (var n, t = Wa, e = 1 / 0; t;) t.f ? t = n ? n.n = t.n : Wa = t.n : (t.t < e && (e = t.t), t = (n = t).n);
        return Ga = n, e
    }

    function Rt(n, t) {
        return t - (n ? Math.ceil(Math.log(n) / Math.LN10) : 1)
    }

    function Dt(n, t) {
        var e = Math.pow(10, 3 * fa(8 - t));
        return {
            scale: t > 8 ? function(n) {
                return n / e
            } : function(n) {
                return n * e
            },
            symbol: n
        }
    }

    function Pt(n) {
        var t = n.decimal,
            e = n.thousands,
            r = n.grouping,
            u = n.currency,
            i = r ? function(n) {
                for (var t = n.length, u = [], i = 0, o = r[0]; t > 0 && o > 0;) u.push(n.substring(t -= o, t + o)), o = r[i = (i + 1) % r.length];
                return u.reverse().join(e)
            } : At;
        return function(n) {
            var e = rc.exec(n),
                r = e[1] || " ",
                o = e[2] || ">",
                a = e[3] || "",
                c = e[4] || "",
                s = e[5],
                l = +e[6],
                f = e[7],
                h = e[8],
                g = e[9],
                p = 1,
                v = "",
                d = "",
                m = !1;
            switch (h && (h = +h.substring(1)), (s || "0" === r && "=" === o) && (s = r = "0", o = "=", f && (l -= Math.floor((l - 1) / 4))), g) {
                case "n":
                    f = !0, g = "g";
                    break;
                case "%":
                    p = 100, d = "%", g = "f";
                    break;
                case "p":
                    p = 100, d = "%", g = "r";
                    break;
                case "b":
                case "o":
                case "x":
                case "X":
                    "#" === c && (v = "0" + g.toLowerCase());
                case "c":
                case "d":
                    m = !0, h = 0;
                    break;
                case "s":
                    p = -1, g = "r"
            }
            "$" === c && (v = u[0], d = u[1]), "r" != g || h || (g = "g"), null != h && ("g" == g ? h = Math.max(1, Math.min(21, h)) : ("e" == g || "f" == g) && (h = Math.max(0, Math.min(20, h)))), g = uc.get(g) || Ut;
            var y = s && f;
            return function(n) {
                var e = d;
                if (m && n % 1) return "";
                var u = 0 > n || 0 === n && 0 > 1 / n ? (n = -n, "-") : a;
                if (0 > p) {
                    var c = Go.formatPrefix(n, h);
                    n = c.scale(n), e = c.symbol + d
                } else n *= p;
                n = g(n, h);
                var x = n.lastIndexOf("."),
                    M = 0 > x ? n : n.substring(0, x),
                    _ = 0 > x ? "" : t + n.substring(x + 1);
                !s && f && (M = i(M));
                var b = v.length + M.length + _.length + (y ? 0 : u.length),
                    w = l > b ? new Array(b = l - b + 1).join(r) : "";
                return y && (M = i(w + M)), u += v, n = M + _, ("<" === o ? u + n + w : ">" === o ? w + u + n : "^" === o ? w.substring(0, b >>= 1) + u + n + w.substring(b) : u + (y ? n : w + n)) + e
            }
        }
    }

    function Ut(n) {
        return n + ""
    }

    function jt() {
        this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0])
    }

    function Ht(n, t, e) {
        function r(t) {
            var e = n(t),
                r = i(e, 1);
            return r - t > t - e ? e : r
        }

        function u(e) {
            return t(e = n(new oc(e - 1)), 1), e
        }

        function i(n, e) {
            return t(n = new oc(+n), e), n
        }

        function o(n, r, i) {
            var o = u(n),
                a = [];
            if (i > 1)
                for (; r > o;) e(o) % i || a.push(new Date(+o)), t(o, 1);
            else
                for (; r > o;) a.push(new Date(+o)), t(o, 1);
            return a
        }

        function a(n, t, e) {
            try {
                oc = jt;
                var r = new jt;
                return r._ = n, o(r, t, e)
            } finally {
                oc = Date
            }
        }
        n.floor = n, n.round = r, n.ceil = u, n.offset = i, n.range = o;
        var c = n.utc = Ft(n);
        return c.floor = c, c.round = Ft(r), c.ceil = Ft(u), c.offset = Ft(i), c.range = a, n
    }

    function Ft(n) {
        return function(t, e) {
            try {
                oc = jt;
                var r = new jt;
                return r._ = t, n(r, e)._
            } finally {
                oc = Date
            }
        }
    }

    function Ot(n) {
        function t(n) {
            function t(t) {
                for (var e, u, i, o = [], a = -1, c = 0; ++a < r;) 37 === n.charCodeAt(a) && (o.push(n.substring(c, a)), null != (u = cc[e = n.charAt(++a)]) && (e = n.charAt(++a)), (i = C[e]) && (e = i(t, null == u ? "e" === e ? " " : "0" : u)), o.push(e), c = a + 1);
                return o.push(n.substring(c, a)), o.join("")
            }
            var r = n.length;
            return t.parse = function(t) {
                var r = {
                    y: 1900,
                    m: 0,
                    d: 1,
                    H: 0,
                    M: 0,
                    S: 0,
                    L: 0,
                    Z: null
                }, u = e(r, n, t, 0);
                if (u != t.length) return null;
                "p" in r && (r.H = r.H % 12 + 12 * r.p);
                var i = null != r.Z && oc !== jt,
                    o = new(i ? jt : oc);
                return "j" in r ? o.setFullYear(r.y, 0, r.j) : "w" in r && ("W" in r || "U" in r) ? (o.setFullYear(r.y, 0, 1), o.setFullYear(r.y, 0, "W" in r ? (r.w + 6) % 7 + 7 * r.W - (o.getDay() + 5) % 7 : r.w + 7 * r.U - (o.getDay() + 6) % 7)) : o.setFullYear(r.y, r.m, r.d), o.setHours(r.H + Math.floor(r.Z / 100), r.M + r.Z % 100, r.S, r.L), i ? o._ : o
            }, t.toString = function() {
                return n
            }, t
        }

        function e(n, t, e, r) {
            for (var u, i, o, a = 0, c = t.length, s = e.length; c > a;) {
                if (r >= s) return -1;
                if (u = t.charCodeAt(a++), 37 === u) {
                    if (o = t.charAt(a++), i = N[o in cc ? t.charAt(a++) : o], !i || (r = i(n, e, r)) < 0) return -1
                } else if (u != e.charCodeAt(r++)) return -1
            }
            return r
        }

        function r(n, t, e) {
            b.lastIndex = 0;
            var r = b.exec(t.substring(e));
            return r ? (n.w = w.get(r[0].toLowerCase()), e + r[0].length) : -1
        }

        function u(n, t, e) {
            M.lastIndex = 0;
            var r = M.exec(t.substring(e));
            return r ? (n.w = _.get(r[0].toLowerCase()), e + r[0].length) : -1
        }

        function i(n, t, e) {
            E.lastIndex = 0;
            var r = E.exec(t.substring(e));
            return r ? (n.m = A.get(r[0].toLowerCase()), e + r[0].length) : -1
        }

        function o(n, t, e) {
            S.lastIndex = 0;
            var r = S.exec(t.substring(e));
            return r ? (n.m = k.get(r[0].toLowerCase()), e + r[0].length) : -1
        }

        function a(n, t, r) {
            return e(n, C.c.toString(), t, r)
        }

        function c(n, t, r) {
            return e(n, C.x.toString(), t, r)
        }

        function s(n, t, r) {
            return e(n, C.X.toString(), t, r)
        }

        function l(n, t, e) {
            var r = x.get(t.substring(e, e += 2).toLowerCase());
            return null == r ? -1 : (n.p = r, e)
        }
        var f = n.dateTime,
            h = n.date,
            g = n.time,
            p = n.periods,
            v = n.days,
            d = n.shortDays,
            m = n.months,
            y = n.shortMonths;
        t.utc = function(n) {
            function e(n) {
                try {
                    oc = jt;
                    var t = new oc;
                    return t._ = n, r(t)
                } finally {
                    oc = Date
                }
            }
            var r = t(n);
            return e.parse = function(n) {
                try {
                    oc = jt;
                    var t = r.parse(n);
                    return t && t._
                } finally {
                    oc = Date
                }
            }, e.toString = r.toString, e
        }, t.multi = t.utc.multi = ae;
        var x = Go.map(),
            M = Yt(v),
            _ = Zt(v),
            b = Yt(d),
            w = Zt(d),
            S = Yt(m),
            k = Zt(m),
            E = Yt(y),
            A = Zt(y);
        p.forEach(function(n, t) {
            x.set(n.toLowerCase(), t)
        });
        var C = {
            a: function(n) {
                return d[n.getDay()]
            },
            A: function(n) {
                return v[n.getDay()]
            },
            b: function(n) {
                return y[n.getMonth()]
            },
            B: function(n) {
                return m[n.getMonth()]
            },
            c: t(f),
            d: function(n, t) {
                return It(n.getDate(), t, 2)
            },
            e: function(n, t) {
                return It(n.getDate(), t, 2)
            },
            H: function(n, t) {
                return It(n.getHours(), t, 2)
            },
            I: function(n, t) {
                return It(n.getHours() % 12 || 12, t, 2)
            },
            j: function(n, t) {
                return It(1 + ic.dayOfYear(n), t, 3)
            },
            L: function(n, t) {
                return It(n.getMilliseconds(), t, 3)
            },
            m: function(n, t) {
                return It(n.getMonth() + 1, t, 2)
            },
            M: function(n, t) {
                return It(n.getMinutes(), t, 2)
            },
            p: function(n) {
                return p[+(n.getHours() >= 12)]
            },
            S: function(n, t) {
                return It(n.getSeconds(), t, 2)
            },
            U: function(n, t) {
                return It(ic.sundayOfYear(n), t, 2)
            },
            w: function(n) {
                return n.getDay()
            },
            W: function(n, t) {
                return It(ic.mondayOfYear(n), t, 2)
            },
            x: t(h),
            X: t(g),
            y: function(n, t) {
                return It(n.getFullYear() % 100, t, 2)
            },
            Y: function(n, t) {
                return It(n.getFullYear() % 1e4, t, 4)
            },
            Z: ie,
            "%": function() {
                return "%"
            }
        }, N = {
                a: r,
                A: u,
                b: i,
                B: o,
                c: a,
                d: Qt,
                e: Qt,
                H: te,
                I: te,
                j: ne,
                L: ue,
                m: Kt,
                M: ee,
                p: l,
                S: re,
                U: $t,
                w: Vt,
                W: Xt,
                x: c,
                X: s,
                y: Jt,
                Y: Bt,
                Z: Wt,
                "%": oe
            };
        return t
    }

    function It(n, t, e) {
        var r = 0 > n ? "-" : "",
            u = (r ? -n : n) + "",
            i = u.length;
        return r + (e > i ? new Array(e - i + 1).join(t) + u : u)
    }

    function Yt(n) {
        return new RegExp("^(?:" + n.map(Go.requote).join("|") + ")", "i")
    }

    function Zt(n) {
        for (var t = new o, e = -1, r = n.length; ++e < r;) t.set(n[e].toLowerCase(), e);
        return t
    }

    function Vt(n, t, e) {
        sc.lastIndex = 0;
        var r = sc.exec(t.substring(e, e + 1));
        return r ? (n.w = +r[0], e + r[0].length) : -1
    }

    function $t(n, t, e) {
        sc.lastIndex = 0;
        var r = sc.exec(t.substring(e));
        return r ? (n.U = +r[0], e + r[0].length) : -1
    }

    function Xt(n, t, e) {
        sc.lastIndex = 0;
        var r = sc.exec(t.substring(e));
        return r ? (n.W = +r[0], e + r[0].length) : -1
    }

    function Bt(n, t, e) {
        sc.lastIndex = 0;
        var r = sc.exec(t.substring(e, e + 4));
        return r ? (n.y = +r[0], e + r[0].length) : -1
    }

    function Jt(n, t, e) {
        sc.lastIndex = 0;
        var r = sc.exec(t.substring(e, e + 2));
        return r ? (n.y = Gt(+r[0]), e + r[0].length) : -1
    }

    function Wt(n, t, e) {
        return /^[+-]\d{4}$/.test(t = t.substring(e, e + 5)) ? (n.Z = -t, e + 5) : -1
    }

    function Gt(n) {
        return n + (n > 68 ? 1900 : 2e3)
    }

    function Kt(n, t, e) {
        sc.lastIndex = 0;
        var r = sc.exec(t.substring(e, e + 2));
        return r ? (n.m = r[0] - 1, e + r[0].length) : -1
    }

    function Qt(n, t, e) {
        sc.lastIndex = 0;
        var r = sc.exec(t.substring(e, e + 2));
        return r ? (n.d = +r[0], e + r[0].length) : -1
    }

    function ne(n, t, e) {
        sc.lastIndex = 0;
        var r = sc.exec(t.substring(e, e + 3));
        return r ? (n.j = +r[0], e + r[0].length) : -1
    }

    function te(n, t, e) {
        sc.lastIndex = 0;
        var r = sc.exec(t.substring(e, e + 2));
        return r ? (n.H = +r[0], e + r[0].length) : -1
    }

    function ee(n, t, e) {
        sc.lastIndex = 0;
        var r = sc.exec(t.substring(e, e + 2));
        return r ? (n.M = +r[0], e + r[0].length) : -1
    }

    function re(n, t, e) {
        sc.lastIndex = 0;
        var r = sc.exec(t.substring(e, e + 2));
        return r ? (n.S = +r[0], e + r[0].length) : -1
    }

    function ue(n, t, e) {
        sc.lastIndex = 0;
        var r = sc.exec(t.substring(e, e + 3));
        return r ? (n.L = +r[0], e + r[0].length) : -1
    }

    function ie(n) {
        var t = n.getTimezoneOffset(),
            e = t > 0 ? "-" : "+",
            r = ~~ (fa(t) / 60),
            u = fa(t) % 60;
        return e + It(r, "0", 2) + It(u, "0", 2)
    }

    function oe(n, t, e) {
        lc.lastIndex = 0;
        var r = lc.exec(t.substring(e, e + 1));
        return r ? e + r[0].length : -1
    }

    function ae(n) {
        for (var t = n.length, e = -1; ++e < t;) n[e][0] = this(n[e][0]);
        return function(t) {
            for (var e = 0, r = n[e]; !r[1](t);) r = n[++e];
            return r[0](t)
        }
    }

    function ce() {}

    function se(n, t, e) {
        var r = e.s = n + t,
            u = r - n,
            i = r - u;
        e.t = n - i + (t - u)
    }

    function le(n, t) {
        n && pc.hasOwnProperty(n.type) && pc[n.type](n, t)
    }

    function fe(n, t, e) {
        var r, u = -1,
            i = n.length - e;
        for (t.lineStart(); ++u < i;) r = n[u], t.point(r[0], r[1], r[2]);
        t.lineEnd()
    }

    function he(n, t) {
        var e = -1,
            r = n.length;
        for (t.polygonStart(); ++e < r;) fe(n[e], t, 1);
        t.polygonEnd()
    }

    function ge() {
        function n(n, t) {
            n *= za, t = t * za / 2 + Ca / 4;
            var e = n - r,
                o = e >= 0 ? 1 : -1,
                a = o * e,
                c = Math.cos(t),
                s = Math.sin(t),
                l = i * s,
                f = u * c + l * Math.cos(a),
                h = l * o * Math.sin(a);
            dc.add(Math.atan2(h, f)), r = n, u = c, i = s
        }
        var t, e, r, u, i;
        mc.point = function(o, a) {
            mc.point = n, r = (t = o) * za, u = Math.cos(a = (e = a) * za / 2 + Ca / 4), i = Math.sin(a)
        }, mc.lineEnd = function() {
            n(t, e)
        }
    }

    function pe(n) {
        var t = n[0],
            e = n[1],
            r = Math.cos(e);
        return [r * Math.cos(t), r * Math.sin(t), Math.sin(e)]
    }

    function ve(n, t) {
        return n[0] * t[0] + n[1] * t[1] + n[2] * t[2]
    }

    function de(n, t) {
        return [n[1] * t[2] - n[2] * t[1], n[2] * t[0] - n[0] * t[2], n[0] * t[1] - n[1] * t[0]]
    }

    function me(n, t) {
        n[0] += t[0], n[1] += t[1], n[2] += t[2]
    }

    function ye(n, t) {
        return [n[0] * t, n[1] * t, n[2] * t]
    }

    function xe(n) {
        var t = Math.sqrt(n[0] * n[0] + n[1] * n[1] + n[2] * n[2]);
        n[0] /= t, n[1] /= t, n[2] /= t
    }

    function Me(n) {
        return [Math.atan2(n[1], n[0]), G(n[2])]
    }

    function _e(n, t) {
        return fa(n[0] - t[0]) < Ta && fa(n[1] - t[1]) < Ta
    }

    function be(n, t) {
        n *= za;
        var e = Math.cos(t *= za);
        we(e * Math.cos(n), e * Math.sin(n), Math.sin(t))
    }

    function we(n, t, e) {
        ++yc, Mc += (n - Mc) / yc, _c += (t - _c) / yc, bc += (e - bc) / yc
    }

    function Se() {
        function n(n, u) {
            n *= za;
            var i = Math.cos(u *= za),
                o = i * Math.cos(n),
                a = i * Math.sin(n),
                c = Math.sin(u),
                s = Math.atan2(Math.sqrt((s = e * c - r * a) * s + (s = r * o - t * c) * s + (s = t * a - e * o) * s), t * o + e * a + r * c);
            xc += s, wc += s * (t + (t = o)), Sc += s * (e + (e = a)), kc += s * (r + (r = c)), we(t, e, r)
        }
        var t, e, r;
        Nc.point = function(u, i) {
            u *= za;
            var o = Math.cos(i *= za);
            t = o * Math.cos(u), e = o * Math.sin(u), r = Math.sin(i), Nc.point = n, we(t, e, r)
        }
    }

    function ke() {
        Nc.point = be
    }

    function Ee() {
        function n(n, t) {
            n *= za;
            var e = Math.cos(t *= za),
                o = e * Math.cos(n),
                a = e * Math.sin(n),
                c = Math.sin(t),
                s = u * c - i * a,
                l = i * o - r * c,
                f = r * a - u * o,
                h = Math.sqrt(s * s + l * l + f * f),
                g = r * o + u * a + i * c,
                p = h && -W(g) / h,
                v = Math.atan2(h, g);
            Ec += p * s, Ac += p * l, Cc += p * f, xc += v, wc += v * (r + (r = o)), Sc += v * (u + (u = a)), kc += v * (i + (i = c)), we(r, u, i)
        }
        var t, e, r, u, i;
        Nc.point = function(o, a) {
            t = o, e = a, Nc.point = n, o *= za;
            var c = Math.cos(a *= za);
            r = c * Math.cos(o), u = c * Math.sin(o), i = Math.sin(a), we(r, u, i)
        }, Nc.lineEnd = function() {
            n(t, e), Nc.lineEnd = ke, Nc.point = be
        }
    }

    function Ae() {
        return !0
    }

    function Ce(n, t, e, r, u) {
        var i = [],
            o = [];
        if (n.forEach(function(n) {
            if (!((t = n.length - 1) <= 0)) {
                var t, e = n[0],
                    r = n[t];
                if (_e(e, r)) {
                    u.lineStart();
                    for (var a = 0; t > a; ++a) u.point((e = n[a])[0], e[1]);
                    return u.lineEnd(), void 0
                }
                var c = new Le(e, n, null, !0),
                    s = new Le(e, null, c, !1);
                c.o = s, i.push(c), o.push(s), c = new Le(r, n, null, !1), s = new Le(r, null, c, !0), c.o = s, i.push(c), o.push(s)
            }
        }), o.sort(t), Ne(i), Ne(o), i.length) {
            for (var a = 0, c = e, s = o.length; s > a; ++a) o[a].e = c = !c;
            for (var l, f, h = i[0];;) {
                for (var g = h, p = !0; g.v;)
                    if ((g = g.n) === h) return;
                l = g.z, u.lineStart();
                do {
                    if (g.v = g.o.v = !0, g.e) {
                        if (p)
                            for (var a = 0, s = l.length; s > a; ++a) u.point((f = l[a])[0], f[1]);
                        else r(g.x, g.n.x, 1, u);
                        g = g.n
                    } else {
                        if (p) {
                            l = g.p.z;
                            for (var a = l.length - 1; a >= 0; --a) u.point((f = l[a])[0], f[1])
                        } else r(g.x, g.p.x, -1, u);
                        g = g.p
                    }
                    g = g.o, l = g.z, p = !p
                } while (!g.v);
                u.lineEnd()
            }
        }
    }

    function Ne(n) {
        if (t = n.length) {
            for (var t, e, r = 0, u = n[0]; ++r < t;) u.n = e = n[r], e.p = u, u = e;
            u.n = e = n[0], e.p = u
        }
    }

    function Le(n, t, e, r) {
        this.x = n, this.z = t, this.o = e, this.e = r, this.v = !1, this.n = this.p = null
    }

    function Te(n, t, e, r) {
        return function(u, i) {
            function o(t, e) {
                var r = u(t, e);
                n(t = r[0], e = r[1]) && i.point(t, e)
            }

            function a(n, t) {
                var e = u(n, t);
                d.point(e[0], e[1])
            }

            function c() {
                y.point = a, d.lineStart()
            }

            function s() {
                y.point = o, d.lineEnd()
            }

            function l(n, t) {
                v.push([n, t]);
                var e = u(n, t);
                M.point(e[0], e[1])
            }

            function f() {
                M.lineStart(), v = []
            }

            function h() {
                l(v[0][0], v[0][1]), M.lineEnd();
                var n, t = M.clean(),
                    e = x.buffer(),
                    r = e.length;
                if (v.pop(), p.push(v), v = null, r)
                    if (1 & t) {
                        n = e[0];
                        var u, r = n.length - 1,
                            o = -1;
                        if (r > 0) {
                            for (_ || (i.polygonStart(), _ = !0), i.lineStart(); ++o < r;) i.point((u = n[o])[0], u[1]);
                            i.lineEnd()
                        }
                    } else r > 1 && 2 & t && e.push(e.pop().concat(e.shift())), g.push(e.filter(qe))
            }
            var g, p, v, d = t(i),
                m = u.invert(r[0], r[1]),
                y = {
                    point: o,
                    lineStart: c,
                    lineEnd: s,
                    polygonStart: function() {
                        y.point = l, y.lineStart = f, y.lineEnd = h, g = [], p = []
                    },
                    polygonEnd: function() {
                        y.point = o, y.lineStart = c, y.lineEnd = s, g = Go.merge(g);
                        var n = De(m, p);
                        g.length ? (_ || (i.polygonStart(), _ = !0), Ce(g, Re, n, e, i)) : n && (_ || (i.polygonStart(), _ = !0), i.lineStart(), e(null, null, 1, i), i.lineEnd()), _ && (i.polygonEnd(), _ = !1), g = p = null
                    },
                    sphere: function() {
                        i.polygonStart(), i.lineStart(), e(null, null, 1, i), i.lineEnd(), i.polygonEnd()
                    }
                }, x = ze(),
                M = t(x),
                _ = !1;
            return y
        }
    }

    function qe(n) {
        return n.length > 1
    }

    function ze() {
        var n, t = [];
        return {
            lineStart: function() {
                t.push(n = [])
            },
            point: function(t, e) {
                n.push([t, e])
            },
            lineEnd: v,
            buffer: function() {
                var e = t;
                return t = [], n = null, e
            },
            rejoin: function() {
                t.length > 1 && t.push(t.pop().concat(t.shift()))
            }
        }
    }

    function Re(n, t) {
        return ((n = n.x)[0] < 0 ? n[1] - La - Ta : La - n[1]) - ((t = t.x)[0] < 0 ? t[1] - La - Ta : La - t[1])
    }

    function De(n, t) {
        var e = n[0],
            r = n[1],
            u = [Math.sin(e), -Math.cos(e), 0],
            i = 0,
            o = 0;
        dc.reset();
        for (var a = 0, c = t.length; c > a; ++a) {
            var s = t[a],
                l = s.length;
            if (l)
                for (var f = s[0], h = f[0], g = f[1] / 2 + Ca / 4, p = Math.sin(g), v = Math.cos(g), d = 1;;) {
                    d === l && (d = 0), n = s[d];
                    var m = n[0],
                        y = n[1] / 2 + Ca / 4,
                        x = Math.sin(y),
                        M = Math.cos(y),
                        _ = m - h,
                        b = _ >= 0 ? 1 : -1,
                        w = b * _,
                        S = w > Ca,
                        k = p * x;
                    if (dc.add(Math.atan2(k * b * Math.sin(w), v * M + k * Math.cos(w))), i += S ? _ + b * Na : _, S ^ h >= e ^ m >= e) {
                        var E = de(pe(f), pe(n));
                        xe(E);
                        var A = de(u, E);
                        xe(A);
                        var C = (S ^ _ >= 0 ? -1 : 1) * G(A[2]);
                        (r > C || r === C && (E[0] || E[1])) && (o += S ^ _ >= 0 ? 1 : -1)
                    }
                    if (!d++) break;
                    h = m, p = x, v = M, f = n
                }
        }
        return (-Ta > i || Ta > i && 0 > dc) ^ 1 & o
    }

    function Pe(n) {
        var t, e = 0 / 0,
            r = 0 / 0,
            u = 0 / 0;
        return {
            lineStart: function() {
                n.lineStart(), t = 1
            },
            point: function(i, o) {
                var a = i > 0 ? Ca : -Ca,
                    c = fa(i - e);
                fa(c - Ca) < Ta ? (n.point(e, r = (r + o) / 2 > 0 ? La : -La), n.point(u, r), n.lineEnd(), n.lineStart(), n.point(a, r), n.point(i, r), t = 0) : u !== a && c >= Ca && (fa(e - u) < Ta && (e -= u * Ta), fa(i - a) < Ta && (i -= a * Ta), r = Ue(e, r, i, o), n.point(u, r), n.lineEnd(), n.lineStart(), n.point(a, r), t = 0), n.point(e = i, r = o), u = a
            },
            lineEnd: function() {
                n.lineEnd(), e = r = 0 / 0
            },
            clean: function() {
                return 2 - t
            }
        }
    }

    function Ue(n, t, e, r) {
        var u, i, o = Math.sin(n - e);
        return fa(o) > Ta ? Math.atan((Math.sin(t) * (i = Math.cos(r)) * Math.sin(e) - Math.sin(r) * (u = Math.cos(t)) * Math.sin(n)) / (u * i * o)) : (t + r) / 2
    }

    function je(n, t, e, r) {
        var u;
        if (null == n) u = e * La, r.point(-Ca, u), r.point(0, u), r.point(Ca, u), r.point(Ca, 0), r.point(Ca, -u), r.point(0, -u), r.point(-Ca, -u), r.point(-Ca, 0), r.point(-Ca, u);
        else if (fa(n[0] - t[0]) > Ta) {
            var i = n[0] < t[0] ? Ca : -Ca;
            u = e * i / 2, r.point(-i, u), r.point(0, u), r.point(i, u)
        } else r.point(t[0], t[1])
    }

    function He(n) {
        function t(n, t) {
            return Math.cos(n) * Math.cos(t) > i
        }

        function e(n) {
            var e, i, c, s, l;
            return {
                lineStart: function() {
                    s = c = !1, l = 1
                },
                point: function(f, h) {
                    var g, p = [f, h],
                        v = t(f, h),
                        d = o ? v ? 0 : u(f, h) : v ? u(f + (0 > f ? Ca : -Ca), h) : 0;
                    if (!e && (s = c = v) && n.lineStart(), v !== c && (g = r(e, p), (_e(e, g) || _e(p, g)) && (p[0] += Ta, p[1] += Ta, v = t(p[0], p[1]))), v !== c) l = 0, v ? (n.lineStart(), g = r(p, e), n.point(g[0], g[1])) : (g = r(e, p), n.point(g[0], g[1]), n.lineEnd()), e = g;
                    else if (a && e && o ^ v) {
                        var m;
                        d & i || !(m = r(p, e, !0)) || (l = 0, o ? (n.lineStart(), n.point(m[0][0], m[0][1]), n.point(m[1][0], m[1][1]), n.lineEnd()) : (n.point(m[1][0], m[1][1]), n.lineEnd(), n.lineStart(), n.point(m[0][0], m[0][1])))
                    }!v || e && _e(e, p) || n.point(p[0], p[1]), e = p, c = v, i = d
                },
                lineEnd: function() {
                    c && n.lineEnd(), e = null
                },
                clean: function() {
                    return l | (s && c) << 1
                }
            }
        }

        function r(n, t, e) {
            var r = pe(n),
                u = pe(t),
                o = [1, 0, 0],
                a = de(r, u),
                c = ve(a, a),
                s = a[0],
                l = c - s * s;
            if (!l) return !e && n;
            var f = i * c / l,
                h = -i * s / l,
                g = de(o, a),
                p = ye(o, f),
                v = ye(a, h);
            me(p, v);
            var d = g,
                m = ve(p, d),
                y = ve(d, d),
                x = m * m - y * (ve(p, p) - 1);
            if (!(0 > x)) {
                var M = Math.sqrt(x),
                    _ = ye(d, (-m - M) / y);
                if (me(_, p), _ = Me(_), !e) return _;
                var b, w = n[0],
                    S = t[0],
                    k = n[1],
                    E = t[1];
                w > S && (b = w, w = S, S = b);
                var A = S - w,
                    C = fa(A - Ca) < Ta,
                    N = C || Ta > A;
                if (!C && k > E && (b = k, k = E, E = b), N ? C ? k + E > 0 ^ _[1] < (fa(_[0] - w) < Ta ? k : E) : k <= _[1] && _[1] <= E : A > Ca ^ (w <= _[0] && _[0] <= S)) {
                    var L = ye(d, (-m + M) / y);
                    return me(L, p), [_, Me(L)]
                }
            }
        }

        function u(t, e) {
            var r = o ? n : Ca - n,
                u = 0;
            return -r > t ? u |= 1 : t > r && (u |= 2), -r > e ? u |= 4 : e > r && (u |= 8), u
        }
        var i = Math.cos(n),
            o = i > 0,
            a = fa(i) > Ta,
            c = gr(n, 6 * za);
        return Te(t, e, c, o ? [0, -n] : [-Ca, n - Ca])
    }

    function Fe(n, t, e, r) {
        return function(u) {
            var i, o = u.a,
                a = u.b,
                c = o.x,
                s = o.y,
                l = a.x,
                f = a.y,
                h = 0,
                g = 1,
                p = l - c,
                v = f - s;
            if (i = n - c, p || !(i > 0)) {
                if (i /= p, 0 > p) {
                    if (h > i) return;
                    g > i && (g = i)
                } else if (p > 0) {
                    if (i > g) return;
                    i > h && (h = i)
                }
                if (i = e - c, p || !(0 > i)) {
                    if (i /= p, 0 > p) {
                        if (i > g) return;
                        i > h && (h = i)
                    } else if (p > 0) {
                        if (h > i) return;
                        g > i && (g = i)
                    }
                    if (i = t - s, v || !(i > 0)) {
                        if (i /= v, 0 > v) {
                            if (h > i) return;
                            g > i && (g = i)
                        } else if (v > 0) {
                            if (i > g) return;
                            i > h && (h = i)
                        }
                        if (i = r - s, v || !(0 > i)) {
                            if (i /= v, 0 > v) {
                                if (i > g) return;
                                i > h && (h = i)
                            } else if (v > 0) {
                                if (h > i) return;
                                g > i && (g = i)
                            }
                            return h > 0 && (u.a = {
                                x: c + h * p,
                                y: s + h * v
                            }), 1 > g && (u.b = {
                                x: c + g * p,
                                y: s + g * v
                            }), u
                        }
                    }
                }
            }
        }
    }

    function Oe(n, t, e, r) {
        function u(r, u) {
            return fa(r[0] - n) < Ta ? u > 0 ? 0 : 3 : fa(r[0] - e) < Ta ? u > 0 ? 2 : 1 : fa(r[1] - t) < Ta ? u > 0 ? 1 : 0 : u > 0 ? 3 : 2
        }

        function i(n, t) {
            return o(n.x, t.x)
        }

        function o(n, t) {
            var e = u(n, 1),
                r = u(t, 1);
            return e !== r ? e - r : 0 === e ? t[1] - n[1] : 1 === e ? n[0] - t[0] : 2 === e ? n[1] - t[1] : t[0] - n[0]
        }
        return function(a) {
            function c(n) {
                for (var t = 0, e = d.length, r = n[1], u = 0; e > u; ++u)
                    for (var i, o = 1, a = d[u], c = a.length, s = a[0]; c > o; ++o) i = a[o], s[1] <= r ? i[1] > r && J(s, i, n) > 0 && ++t : i[1] <= r && J(s, i, n) < 0 && --t, s = i;
                return 0 !== t
            }

            function s(i, a, c, s) {
                var l = 0,
                    f = 0;
                if (null == i || (l = u(i, c)) !== (f = u(a, c)) || o(i, a) < 0 ^ c > 0) {
                    do s.point(0 === l || 3 === l ? n : e, l > 1 ? r : t); while ((l = (l + c + 4) % 4) !== f)
                } else s.point(a[0], a[1])
            }

            function l(u, i) {
                return u >= n && e >= u && i >= t && r >= i
            }

            function f(n, t) {
                l(n, t) && a.point(n, t)
            }

            function h() {
                N.point = p, d && d.push(m = []), S = !0, w = !1, _ = b = 0 / 0
            }

            function g() {
                v && (p(y, x), M && w && A.rejoin(), v.push(A.buffer())), N.point = f, w && a.lineEnd()
            }

            function p(n, t) {
                n = Math.max(-Tc, Math.min(Tc, n)), t = Math.max(-Tc, Math.min(Tc, t));
                var e = l(n, t);
                if (d && m.push([n, t]), S) y = n, x = t, M = e, S = !1, e && (a.lineStart(), a.point(n, t));
                else if (e && w) a.point(n, t);
                else {
                    var r = {
                        a: {
                            x: _,
                            y: b
                        },
                        b: {
                            x: n,
                            y: t
                        }
                    };
                    C(r) ? (w || (a.lineStart(), a.point(r.a.x, r.a.y)), a.point(r.b.x, r.b.y), e || a.lineEnd(), k = !1) : e && (a.lineStart(), a.point(n, t), k = !1)
                }
                _ = n, b = t, w = e
            }
            var v, d, m, y, x, M, _, b, w, S, k, E = a,
                A = ze(),
                C = Fe(n, t, e, r),
                N = {
                    point: f,
                    lineStart: h,
                    lineEnd: g,
                    polygonStart: function() {
                        a = A, v = [], d = [], k = !0
                    },
                    polygonEnd: function() {
                        a = E, v = Go.merge(v);
                        var t = c([n, r]),
                            e = k && t,
                            u = v.length;
                        (e || u) && (a.polygonStart(), e && (a.lineStart(), s(null, null, 1, a), a.lineEnd()), u && Ce(v, i, t, s, a), a.polygonEnd()), v = d = m = null
                    }
                };
            return N
        }
    }

    function Ie(n, t) {
        function e(e, r) {
            return e = n(e, r), t(e[0], e[1])
        }
        return n.invert && t.invert && (e.invert = function(e, r) {
            return e = t.invert(e, r), e && n.invert(e[0], e[1])
        }), e
    }

    function Ye(n) {
        var t = 0,
            e = Ca / 3,
            r = ir(n),
            u = r(t, e);
        return u.parallels = function(n) {
            return arguments.length ? r(t = n[0] * Ca / 180, e = n[1] * Ca / 180) : [180 * (t / Ca), 180 * (e / Ca)]
        }, u
    }

    function Ze(n, t) {
        function e(n, t) {
            var e = Math.sqrt(i - 2 * u * Math.sin(t)) / u;
            return [e * Math.sin(n *= u), o - e * Math.cos(n)]
        }
        var r = Math.sin(n),
            u = (r + Math.sin(t)) / 2,
            i = 1 + r * (2 * u - r),
            o = Math.sqrt(i) / u;
        return e.invert = function(n, t) {
            var e = o - t;
            return [Math.atan2(n, e) / u, G((i - (n * n + e * e) * u * u) / (2 * u))]
        }, e
    }

    function Ve() {
        function n(n, t) {
            zc += u * n - r * t, r = n, u = t
        }
        var t, e, r, u;
        jc.point = function(i, o) {
            jc.point = n, t = r = i, e = u = o
        }, jc.lineEnd = function() {
            n(t, e)
        }
    }

    function $e(n, t) {
        Rc > n && (Rc = n), n > Pc && (Pc = n), Dc > t && (Dc = t), t > Uc && (Uc = t)
    }

    function Xe() {
        function n(n, t) {
            o.push("M", n, ",", t, i)
        }

        function t(n, t) {
            o.push("M", n, ",", t), a.point = e
        }

        function e(n, t) {
            o.push("L", n, ",", t)
        }

        function r() {
            a.point = n
        }

        function u() {
            o.push("Z")
        }
        var i = Be(4.5),
            o = [],
            a = {
                point: n,
                lineStart: function() {
                    a.point = t
                },
                lineEnd: r,
                polygonStart: function() {
                    a.lineEnd = u
                },
                polygonEnd: function() {
                    a.lineEnd = r, a.point = n
                },
                pointRadius: function(n) {
                    return i = Be(n), a
                },
                result: function() {
                    if (o.length) {
                        var n = o.join("");
                        return o = [], n
                    }
                }
            };
        return a
    }

    function Be(n) {
        return "m0," + n + "a" + n + "," + n + " 0 1,1 0," + -2 * n + "a" + n + "," + n + " 0 1,1 0," + 2 * n + "z"
    }

    function Je(n, t) {
        Mc += n, _c += t, ++bc
    }

    function We() {
        function n(n, r) {
            var u = n - t,
                i = r - e,
                o = Math.sqrt(u * u + i * i);
            wc += o * (t + n) / 2, Sc += o * (e + r) / 2, kc += o, Je(t = n, e = r)
        }
        var t, e;
        Fc.point = function(r, u) {
            Fc.point = n, Je(t = r, e = u)
        }
    }

    function Ge() {
        Fc.point = Je
    }

    function Ke() {
        function n(n, t) {
            var e = n - r,
                i = t - u,
                o = Math.sqrt(e * e + i * i);
            wc += o * (r + n) / 2, Sc += o * (u + t) / 2, kc += o, o = u * n - r * t, Ec += o * (r + n), Ac += o * (u + t), Cc += 3 * o, Je(r = n, u = t)
        }
        var t, e, r, u;
        Fc.point = function(i, o) {
            Fc.point = n, Je(t = r = i, e = u = o)
        }, Fc.lineEnd = function() {
            n(t, e)
        }
    }

    function Qe(n) {
        function t(t, e) {
            n.moveTo(t, e), n.arc(t, e, o, 0, Na)
        }

        function e(t, e) {
            n.moveTo(t, e), a.point = r
        }

        function r(t, e) {
            n.lineTo(t, e)
        }

        function u() {
            a.point = t
        }

        function i() {
            n.closePath()
        }
        var o = 4.5,
            a = {
                point: t,
                lineStart: function() {
                    a.point = e
                },
                lineEnd: u,
                polygonStart: function() {
                    a.lineEnd = i
                },
                polygonEnd: function() {
                    a.lineEnd = u, a.point = t
                },
                pointRadius: function(n) {
                    return o = n, a
                },
                result: v
            };
        return a
    }

    function nr(n) {
        function t(n) {
            return (a ? r : e)(n)
        }

        function e(t) {
            return rr(t, function(e, r) {
                e = n(e, r), t.point(e[0], e[1])
            })
        }

        function r(t) {
            function e(e, r) {
                e = n(e, r), t.point(e[0], e[1])
            }

            function r() {
                x = 0 / 0, S.point = i, t.lineStart()
            }

            function i(e, r) {
                var i = pe([e, r]),
                    o = n(e, r);
                u(x, M, y, _, b, w, x = o[0], M = o[1], y = e, _ = i[0], b = i[1], w = i[2], a, t), t.point(x, M)
            }

            function o() {
                S.point = e, t.lineEnd()
            }

            function c() {
                r(), S.point = s, S.lineEnd = l
            }

            function s(n, t) {
                i(f = n, h = t), g = x, p = M, v = _, d = b, m = w, S.point = i
            }

            function l() {
                u(x, M, y, _, b, w, g, p, f, v, d, m, a, t), S.lineEnd = o, o()
            }
            var f, h, g, p, v, d, m, y, x, M, _, b, w, S = {
                    point: e,
                    lineStart: r,
                    lineEnd: o,
                    polygonStart: function() {
                        t.polygonStart(), S.lineStart = c
                    },
                    polygonEnd: function() {
                        t.polygonEnd(), S.lineStart = r
                    }
                };
            return S
        }

        function u(t, e, r, a, c, s, l, f, h, g, p, v, d, m) {
            var y = l - t,
                x = f - e,
                M = y * y + x * x;
            if (M > 4 * i && d--) {
                var _ = a + g,
                    b = c + p,
                    w = s + v,
                    S = Math.sqrt(_ * _ + b * b + w * w),
                    k = Math.asin(w /= S),
                    E = fa(fa(w) - 1) < Ta || fa(r - h) < Ta ? (r + h) / 2 : Math.atan2(b, _),
                    A = n(E, k),
                    C = A[0],
                    N = A[1],
                    L = C - t,
                    T = N - e,
                    q = x * L - y * T;
                (q * q / M > i || fa((y * L + x * T) / M - .5) > .3 || o > a * g + c * p + s * v) && (u(t, e, r, a, c, s, C, N, E, _ /= S, b /= S, w, d, m), m.point(C, N), u(C, N, E, _, b, w, l, f, h, g, p, v, d, m))
            }
        }
        var i = .5,
            o = Math.cos(30 * za),
            a = 16;
        return t.precision = function(n) {
            return arguments.length ? (a = (i = n * n) > 0 && 16, t) : Math.sqrt(i)
        }, t
    }

    function tr(n) {
        var t = nr(function(t, e) {
            return n([t * Ra, e * Ra])
        });
        return function(n) {
            return or(t(n))
        }
    }

    function er(n) {
        this.stream = n
    }

    function rr(n, t) {
        return {
            point: t,
            sphere: function() {
                n.sphere()
            },
            lineStart: function() {
                n.lineStart()
            },
            lineEnd: function() {
                n.lineEnd()
            },
            polygonStart: function() {
                n.polygonStart()
            },
            polygonEnd: function() {
                n.polygonEnd()
            }
        }
    }

    function ur(n) {
        return ir(function() {
            return n
        })()
    }

    function ir(n) {
        function t(n) {
            return n = a(n[0] * za, n[1] * za), [n[0] * h + c, s - n[1] * h]
        }

        function e(n) {
            return n = a.invert((n[0] - c) / h, (s - n[1]) / h), n && [n[0] * Ra, n[1] * Ra]
        }

        function r() {
            a = Ie(o = sr(m, y, x), i);
            var n = i(v, d);
            return c = g - n[0] * h, s = p + n[1] * h, u()
        }

        function u() {
            return l && (l.valid = !1, l = null), t
        }
        var i, o, a, c, s, l, f = nr(function(n, t) {
                return n = i(n, t), [n[0] * h + c, s - n[1] * h]
            }),
            h = 150,
            g = 480,
            p = 250,
            v = 0,
            d = 0,
            m = 0,
            y = 0,
            x = 0,
            M = Lc,
            _ = At,
            b = null,
            w = null;
        return t.stream = function(n) {
            return l && (l.valid = !1), l = or(M(o, f(_(n)))), l.valid = !0, l
        }, t.clipAngle = function(n) {
            return arguments.length ? (M = null == n ? (b = n, Lc) : He((b = +n) * za), u()) : b
        }, t.clipExtent = function(n) {
            return arguments.length ? (w = n, _ = n ? Oe(n[0][0], n[0][1], n[1][0], n[1][1]) : At, u()) : w
        }, t.scale = function(n) {
            return arguments.length ? (h = +n, r()) : h
        }, t.translate = function(n) {
            return arguments.length ? (g = +n[0], p = +n[1], r()) : [g, p]
        }, t.center = function(n) {
            return arguments.length ? (v = n[0] % 360 * za, d = n[1] % 360 * za, r()) : [v * Ra, d * Ra]
        }, t.rotate = function(n) {
            return arguments.length ? (m = n[0] % 360 * za, y = n[1] % 360 * za, x = n.length > 2 ? n[2] % 360 * za : 0, r()) : [m * Ra, y * Ra, x * Ra]
        }, Go.rebind(t, f, "precision"),
        function() {
            return i = n.apply(this, arguments), t.invert = i.invert && e, r()
        }
    }

    function or(n) {
        return rr(n, function(t, e) {
            n.point(t * za, e * za)
        })
    }

    function ar(n, t) {
        return [n, t]
    }

    function cr(n, t) {
        return [n > Ca ? n - Na : -Ca > n ? n + Na : n, t]
    }

    function sr(n, t, e) {
        return n ? t || e ? Ie(fr(n), hr(t, e)) : fr(n) : t || e ? hr(t, e) : cr
    }

    function lr(n) {
        return function(t, e) {
            return t += n, [t > Ca ? t - Na : -Ca > t ? t + Na : t, e]
        }
    }

    function fr(n) {
        var t = lr(n);
        return t.invert = lr(-n), t
    }

    function hr(n, t) {
        function e(n, t) {
            var e = Math.cos(t),
                a = Math.cos(n) * e,
                c = Math.sin(n) * e,
                s = Math.sin(t),
                l = s * r + a * u;
            return [Math.atan2(c * i - l * o, a * r - s * u), G(l * i + c * o)]
        }
        var r = Math.cos(n),
            u = Math.sin(n),
            i = Math.cos(t),
            o = Math.sin(t);
        return e.invert = function(n, t) {
            var e = Math.cos(t),
                a = Math.cos(n) * e,
                c = Math.sin(n) * e,
                s = Math.sin(t),
                l = s * i - c * o;
            return [Math.atan2(c * i + s * o, a * r + l * u), G(l * r - a * u)]
        }, e
    }

    function gr(n, t) {
        var e = Math.cos(n),
            r = Math.sin(n);
        return function(u, i, o, a) {
            var c = o * t;
            null != u ? (u = pr(e, u), i = pr(e, i), (o > 0 ? i > u : u > i) && (u += o * Na)) : (u = n + o * Na, i = n - .5 * c);
            for (var s, l = u; o > 0 ? l > i : i > l; l -= c) a.point((s = Me([e, -r * Math.cos(l), -r * Math.sin(l)]))[0], s[1])
        }
    }

    function pr(n, t) {
        var e = pe(t);
        e[0] -= n, xe(e);
        var r = W(-e[1]);
        return ((-e[2] < 0 ? -r : r) + 2 * Math.PI - Ta) % (2 * Math.PI)
    }

    function vr(n, t, e) {
        var r = Go.range(n, t - Ta, e).concat(t);
        return function(n) {
            return r.map(function(t) {
                return [n, t]
            })
        }
    }

    function dr(n, t, e) {
        var r = Go.range(n, t - Ta, e).concat(t);
        return function(n) {
            return r.map(function(t) {
                return [t, n]
            })
        }
    }

    function mr(n) {
        return n.source
    }

    function yr(n) {
        return n.target
    }

    function xr(n, t, e, r) {
        var u = Math.cos(t),
            i = Math.sin(t),
            o = Math.cos(r),
            a = Math.sin(r),
            c = u * Math.cos(n),
            s = u * Math.sin(n),
            l = o * Math.cos(e),
            f = o * Math.sin(e),
            h = 2 * Math.asin(Math.sqrt(tt(r - t) + u * o * tt(e - n))),
            g = 1 / Math.sin(h),
            p = h ? function(n) {
                var t = Math.sin(n *= h) * g,
                    e = Math.sin(h - n) * g,
                    r = e * c + t * l,
                    u = e * s + t * f,
                    o = e * i + t * a;
                return [Math.atan2(u, r) * Ra, Math.atan2(o, Math.sqrt(r * r + u * u)) * Ra]
            } : function() {
                return [n * Ra, t * Ra]
            };
        return p.distance = h, p
    }

    function Mr() {
        function n(n, u) {
            var i = Math.sin(u *= za),
                o = Math.cos(u),
                a = fa((n *= za) - t),
                c = Math.cos(a);
            Oc += Math.atan2(Math.sqrt((a = o * Math.sin(a)) * a + (a = r * i - e * o * c) * a), e * i + r * o * c), t = n, e = i, r = o
        }
        var t, e, r;
        Ic.point = function(u, i) {
            t = u * za, e = Math.sin(i *= za), r = Math.cos(i), Ic.point = n
        }, Ic.lineEnd = function() {
            Ic.point = Ic.lineEnd = v
        }
    }

    function _r(n, t) {
        function e(t, e) {
            var r = Math.cos(t),
                u = Math.cos(e),
                i = n(r * u);
            return [i * u * Math.sin(t), i * Math.sin(e)]
        }
        return e.invert = function(n, e) {
            var r = Math.sqrt(n * n + e * e),
                u = t(r),
                i = Math.sin(u),
                o = Math.cos(u);
            return [Math.atan2(n * i, r * o), Math.asin(r && e * i / r)]
        }, e
    }

    function br(n, t) {
        function e(n, t) {
            o > 0 ? -La + Ta > t && (t = -La + Ta) : t > La - Ta && (t = La - Ta);
            var e = o / Math.pow(u(t), i);
            return [e * Math.sin(i * n), o - e * Math.cos(i * n)]
        }
        var r = Math.cos(n),
            u = function(n) {
                return Math.tan(Ca / 4 + n / 2)
            }, i = n === t ? Math.sin(n) : Math.log(r / Math.cos(t)) / Math.log(u(t) / u(n)),
            o = r * Math.pow(u(n), i) / i;
        return i ? (e.invert = function(n, t) {
            var e = o - t,
                r = B(i) * Math.sqrt(n * n + e * e);
            return [Math.atan2(n, e) / i, 2 * Math.atan(Math.pow(o / r, 1 / i)) - La]
        }, e) : Sr
    }

    function wr(n, t) {
        function e(n, t) {
            var e = i - t;
            return [e * Math.sin(u * n), i - e * Math.cos(u * n)]
        }
        var r = Math.cos(n),
            u = n === t ? Math.sin(n) : (r - Math.cos(t)) / (t - n),
            i = r / u + n;
        return fa(u) < Ta ? ar : (e.invert = function(n, t) {
            var e = i - t;
            return [Math.atan2(n, e) / u, i - B(u) * Math.sqrt(n * n + e * e)]
        }, e)
    }

    function Sr(n, t) {
        return [n, Math.log(Math.tan(Ca / 4 + t / 2))]
    }

    function kr(n) {
        var t, e = ur(n),
            r = e.scale,
            u = e.translate,
            i = e.clipExtent;
        return e.scale = function() {
            var n = r.apply(e, arguments);
            return n === e ? t ? e.clipExtent(null) : e : n
        }, e.translate = function() {
            var n = u.apply(e, arguments);
            return n === e ? t ? e.clipExtent(null) : e : n
        }, e.clipExtent = function(n) {
            var o = i.apply(e, arguments);
            if (o === e) {
                if (t = null == n) {
                    var a = Ca * r(),
                        c = u();
                    i([
                        [c[0] - a, c[1] - a],
                        [c[0] + a, c[1] + a]
                    ])
                }
            } else t && (o = null);
            return o
        }, e.clipExtent(null)
    }

    function Er(n, t) {
        return [Math.log(Math.tan(Ca / 4 + t / 2)), -n]
    }

    function Ar(n) {
        return n[0]
    }

    function Cr(n) {
        return n[1]
    }

    function Nr(n) {
        for (var t = n.length, e = [0, 1], r = 2, u = 2; t > u; u++) {
            for (; r > 1 && J(n[e[r - 2]], n[e[r - 1]], n[u]) <= 0;)--r;
            e[r++] = u
        }
        return e.slice(0, r)
    }

    function Lr(n, t) {
        return n[0] - t[0] || n[1] - t[1]
    }

    function Tr(n, t, e) {
        return (e[0] - t[0]) * (n[1] - t[1]) < (e[1] - t[1]) * (n[0] - t[0])
    }

    function qr(n, t, e, r) {
        var u = n[0],
            i = e[0],
            o = t[0] - u,
            a = r[0] - i,
            c = n[1],
            s = e[1],
            l = t[1] - c,
            f = r[1] - s,
            h = (a * (c - s) - f * (u - i)) / (f * o - a * l);
        return [u + h * o, c + h * l]
    }

    function zr(n) {
        var t = n[0],
            e = n[n.length - 1];
        return !(t[0] - e[0] || t[1] - e[1])
    }

    function Rr() {
        tu(this), this.edge = this.site = this.circle = null
    }

    function Dr(n) {
        var t = ns.pop() || new Rr;
        return t.site = n, t
    }

    function Pr(n) {
        $r(n), Gc.remove(n), ns.push(n), tu(n)
    }

    function Ur(n) {
        var t = n.circle,
            e = t.x,
            r = t.cy,
            u = {
                x: e,
                y: r
            }, i = n.P,
            o = n.N,
            a = [n];
        Pr(n);
        for (var c = i; c.circle && fa(e - c.circle.x) < Ta && fa(r - c.circle.cy) < Ta;) i = c.P, a.unshift(c), Pr(c), c = i;
        a.unshift(c), $r(c);
        for (var s = o; s.circle && fa(e - s.circle.x) < Ta && fa(r - s.circle.cy) < Ta;) o = s.N, a.push(s), Pr(s), s = o;
        a.push(s), $r(s);
        var l, f = a.length;
        for (l = 1; f > l; ++l) s = a[l], c = a[l - 1], Kr(s.edge, c.site, s.site, u);
        c = a[0], s = a[f - 1], s.edge = Wr(c.site, s.site, null, u), Vr(c), Vr(s)
    }

    function jr(n) {
        for (var t, e, r, u, i = n.x, o = n.y, a = Gc._; a;)
            if (r = Hr(a, o) - i, r > Ta) a = a.L;
            else {
                if (u = i - Fr(a, o), !(u > Ta)) {
                    r > -Ta ? (t = a.P, e = a) : u > -Ta ? (t = a, e = a.N) : t = e = a;
                    break
                }
                if (!a.R) {
                    t = a;
                    break
                }
                a = a.R
            }
        var c = Dr(n);
        if (Gc.insert(t, c), t || e) {
            if (t === e) return $r(t), e = Dr(t.site), Gc.insert(c, e), c.edge = e.edge = Wr(t.site, c.site), Vr(t), Vr(e), void 0;
            if (!e) return c.edge = Wr(t.site, c.site), void 0;
            $r(t), $r(e);
            var s = t.site,
                l = s.x,
                f = s.y,
                h = n.x - l,
                g = n.y - f,
                p = e.site,
                v = p.x - l,
                d = p.y - f,
                m = 2 * (h * d - g * v),
                y = h * h + g * g,
                x = v * v + d * d,
                M = {
                    x: (d * y - g * x) / m + l,
                    y: (h * x - v * y) / m + f
                };
            Kr(e.edge, s, p, M), c.edge = Wr(s, n, null, M), e.edge = Wr(n, p, null, M), Vr(t), Vr(e)
        }
    }

    function Hr(n, t) {
        var e = n.site,
            r = e.x,
            u = e.y,
            i = u - t;
        if (!i) return r;
        var o = n.P;
        if (!o) return -1 / 0;
        e = o.site;
        var a = e.x,
            c = e.y,
            s = c - t;
        if (!s) return a;
        var l = a - r,
            f = 1 / i - 1 / s,
            h = l / s;
        return f ? (-h + Math.sqrt(h * h - 2 * f * (l * l / (-2 * s) - c + s / 2 + u - i / 2))) / f + r : (r + a) / 2
    }

    function Fr(n, t) {
        var e = n.N;
        if (e) return Hr(e, t);
        var r = n.site;
        return r.y === t ? r.x : 1 / 0
    }

    function Or(n) {
        this.site = n, this.edges = []
    }

    function Ir(n) {
        for (var t, e, r, u, i, o, a, c, s, l, f = n[0][0], h = n[1][0], g = n[0][1], p = n[1][1], v = Wc, d = v.length; d--;)
            if (i = v[d], i && i.prepare())
                for (a = i.edges, c = a.length, o = 0; c > o;) l = a[o].end(), r = l.x, u = l.y, s = a[++o % c].start(), t = s.x, e = s.y, (fa(r - t) > Ta || fa(u - e) > Ta) && (a.splice(o, 0, new Qr(Gr(i.site, l, fa(r - f) < Ta && p - u > Ta ? {
                    x: f,
                    y: fa(t - f) < Ta ? e : p
                } : fa(u - p) < Ta && h - r > Ta ? {
                    x: fa(e - p) < Ta ? t : h,
                    y: p
                } : fa(r - h) < Ta && u - g > Ta ? {
                    x: h,
                    y: fa(t - h) < Ta ? e : g
                } : fa(u - g) < Ta && r - f > Ta ? {
                    x: fa(e - g) < Ta ? t : f,
                    y: g
                } : null), i.site, null)), ++c)
    }

    function Yr(n, t) {
        return t.angle - n.angle
    }

    function Zr() {
        tu(this), this.x = this.y = this.arc = this.site = this.cy = null
    }

    function Vr(n) {
        var t = n.P,
            e = n.N;
        if (t && e) {
            var r = t.site,
                u = n.site,
                i = e.site;
            if (r !== i) {
                var o = u.x,
                    a = u.y,
                    c = r.x - o,
                    s = r.y - a,
                    l = i.x - o,
                    f = i.y - a,
                    h = 2 * (c * f - s * l);
                if (!(h >= -qa)) {
                    var g = c * c + s * s,
                        p = l * l + f * f,
                        v = (f * g - s * p) / h,
                        d = (c * p - l * g) / h,
                        f = d + a,
                        m = ts.pop() || new Zr;
                    m.arc = n, m.site = u, m.x = v + o, m.y = f + Math.sqrt(v * v + d * d), m.cy = f, n.circle = m;
                    for (var y = null, x = Qc._; x;)
                        if (m.y < x.y || m.y === x.y && m.x <= x.x) {
                            if (!x.L) {
                                y = x.P;
                                break
                            }
                            x = x.L
                        } else {
                            if (!x.R) {
                                y = x;
                                break
                            }
                            x = x.R
                        }
                    Qc.insert(y, m), y || (Kc = m)
                }
            }
        }
    }

    function $r(n) {
        var t = n.circle;
        t && (t.P || (Kc = t.N), Qc.remove(t), ts.push(t), tu(t), n.circle = null)
    }

    function Xr(n) {
        for (var t, e = Jc, r = Fe(n[0][0], n[0][1], n[1][0], n[1][1]), u = e.length; u--;) t = e[u], (!Br(t, n) || !r(t) || fa(t.a.x - t.b.x) < Ta && fa(t.a.y - t.b.y) < Ta) && (t.a = t.b = null, e.splice(u, 1))
    }

    function Br(n, t) {
        var e = n.b;
        if (e) return !0;
        var r, u, i = n.a,
            o = t[0][0],
            a = t[1][0],
            c = t[0][1],
            s = t[1][1],
            l = n.l,
            f = n.r,
            h = l.x,
            g = l.y,
            p = f.x,
            v = f.y,
            d = (h + p) / 2,
            m = (g + v) / 2;
        if (v === g) {
            if (o > d || d >= a) return;
            if (h > p) {
                if (i) {
                    if (i.y >= s) return
                } else i = {
                    x: d,
                    y: c
                };
                e = {
                    x: d,
                    y: s
                }
            } else {
                if (i) {
                    if (i.y < c) return
                } else i = {
                    x: d,
                    y: s
                };
                e = {
                    x: d,
                    y: c
                }
            }
        } else if (r = (h - p) / (v - g), u = m - r * d, -1 > r || r > 1)
            if (h > p) {
                if (i) {
                    if (i.y >= s) return
                } else i = {
                    x: (c - u) / r,
                    y: c
                };
                e = {
                    x: (s - u) / r,
                    y: s
                }
            } else {
                if (i) {
                    if (i.y < c) return
                } else i = {
                    x: (s - u) / r,
                    y: s
                };
                e = {
                    x: (c - u) / r,
                    y: c
                }
            } else
        if (v > g) {
            if (i) {
                if (i.x >= a) return
            } else i = {
                x: o,
                y: r * o + u
            };
            e = {
                x: a,
                y: r * a + u
            }
        } else {
            if (i) {
                if (i.x < o) return
            } else i = {
                x: a,
                y: r * a + u
            };
            e = {
                x: o,
                y: r * o + u
            }
        }
        return n.a = i, n.b = e, !0
    }

    function Jr(n, t) {
        this.l = n, this.r = t, this.a = this.b = null
    }

    function Wr(n, t, e, r) {
        var u = new Jr(n, t);
        return Jc.push(u), e && Kr(u, n, t, e), r && Kr(u, t, n, r), Wc[n.i].edges.push(new Qr(u, n, t)), Wc[t.i].edges.push(new Qr(u, t, n)), u
    }

    function Gr(n, t, e) {
        var r = new Jr(n, null);
        return r.a = t, r.b = e, Jc.push(r), r
    }

    function Kr(n, t, e, r) {
        n.a || n.b ? n.l === e ? n.b = r : n.a = r : (n.a = r, n.l = t, n.r = e)
    }

    function Qr(n, t, e) {
        var r = n.a,
            u = n.b;
        this.edge = n, this.site = t, this.angle = e ? Math.atan2(e.y - t.y, e.x - t.x) : n.l === t ? Math.atan2(u.x - r.x, r.y - u.y) : Math.atan2(r.x - u.x, u.y - r.y)
    }

    function nu() {
        this._ = null
    }

    function tu(n) {
        n.U = n.C = n.L = n.R = n.P = n.N = null
    }

    function eu(n, t) {
        var e = t,
            r = t.R,
            u = e.U;
        u ? u.L === e ? u.L = r : u.R = r : n._ = r, r.U = u, e.U = r, e.R = r.L, e.R && (e.R.U = e), r.L = e
    }

    function ru(n, t) {
        var e = t,
            r = t.L,
            u = e.U;
        u ? u.L === e ? u.L = r : u.R = r : n._ = r, r.U = u, e.U = r, e.L = r.R, e.L && (e.L.U = e), r.R = e
    }

    function uu(n) {
        for (; n.L;) n = n.L;
        return n
    }

    function iu(n, t) {
        var e, r, u, i = n.sort(ou).pop();
        for (Jc = [], Wc = new Array(n.length), Gc = new nu, Qc = new nu;;)
            if (u = Kc, i && (!u || i.y < u.y || i.y === u.y && i.x < u.x))(i.x !== e || i.y !== r) && (Wc[i.i] = new Or(i), jr(i), e = i.x, r = i.y), i = n.pop();
            else {
                if (!u) break;
                Ur(u.arc)
            }
        t && (Xr(t), Ir(t));
        var o = {
            cells: Wc,
            edges: Jc
        };
        return Gc = Qc = Jc = Wc = null, o
    }

    function ou(n, t) {
        return t.y - n.y || t.x - n.x
    }

    function au(n, t, e) {
        return (n.x - e.x) * (t.y - n.y) - (n.x - t.x) * (e.y - n.y)
    }

    function cu(n) {
        return n.x
    }

    function su(n) {
        return n.y
    }

    function lu() {
        return {
            leaf: !0,
            nodes: [],
            point: null,
            x: null,
            y: null
        }
    }

    function fu(n, t, e, r, u, i) {
        if (!n(t, e, r, u, i)) {
            var o = .5 * (e + u),
                a = .5 * (r + i),
                c = t.nodes;
            c[0] && fu(n, c[0], e, r, o, a), c[1] && fu(n, c[1], o, r, u, a), c[2] && fu(n, c[2], e, a, o, i), c[3] && fu(n, c[3], o, a, u, i)
        }
    }

    function hu(n, t) {
        n = Go.rgb(n), t = Go.rgb(t);
        var e = n.r,
            r = n.g,
            u = n.b,
            i = t.r - e,
            o = t.g - r,
            a = t.b - u;
        return function(n) {
            return "#" + Mt(Math.round(e + i * n)) + Mt(Math.round(r + o * n)) + Mt(Math.round(u + a * n))
        }
    }

    function gu(n, t) {
        var e, r = {}, u = {};
        for (e in n) e in t ? r[e] = du(n[e], t[e]) : u[e] = n[e];
        for (e in t) e in n || (u[e] = t[e]);
        return function(n) {
            for (e in r) u[e] = r[e](n);
            return u
        }
    }

    function pu(n, t) {
        return t -= n = +n,
        function(e) {
            return n + t * e
        }
    }

    function vu(n, t) {
        var e, r, u, i = rs.lastIndex = us.lastIndex = 0,
            o = -1,
            a = [],
            c = [];
        for (n += "", t += "";
            (e = rs.exec(n)) && (r = us.exec(t));)(u = r.index) > i && (u = t.substring(i, u), a[o] ? a[o] += u : a[++o] = u), (e = e[0]) === (r = r[0]) ? a[o] ? a[o] += r : a[++o] = r : (a[++o] = null, c.push({
            i: o,
            x: pu(e, r)
        })), i = us.lastIndex;
        return i < t.length && (u = t.substring(i), a[o] ? a[o] += u : a[++o] = u), a.length < 2 ? c[0] ? (t = c[0].x, function(n) {
            return t(n) + ""
        }) : function() {
            return t
        } : (t = c.length, function(n) {
            for (var e, r = 0; t > r; ++r) a[(e = c[r]).i] = e.x(n);
            return a.join("")
        })
    }

    function du(n, t) {
        for (var e, r = Go.interpolators.length; --r >= 0 && !(e = Go.interpolators[r](n, t)););
        return e
    }

    function mu(n, t) {
        var e, r = [],
            u = [],
            i = n.length,
            o = t.length,
            a = Math.min(n.length, t.length);
        for (e = 0; a > e; ++e) r.push(du(n[e], t[e]));
        for (; i > e; ++e) u[e] = n[e];
        for (; o > e; ++e) u[e] = t[e];
        return function(n) {
            for (e = 0; a > e; ++e) u[e] = r[e](n);
            return u
        }
    }

    function yu(n) {
        return function(t) {
            return 0 >= t ? 0 : t >= 1 ? 1 : n(t)
        }
    }

    function xu(n) {
        return function(t) {
            return 1 - n(1 - t)
        }
    }

    function Mu(n) {
        return function(t) {
            return .5 * (.5 > t ? n(2 * t) : 2 - n(2 - 2 * t))
        }
    }

    function _u(n) {
        return n * n
    }

    function bu(n) {
        return n * n * n
    }

    function wu(n) {
        if (0 >= n) return 0;
        if (n >= 1) return 1;
        var t = n * n,
            e = t * n;
        return 4 * (.5 > n ? e : 3 * (n - t) + e - .75)
    }

    function Su(n) {
        return function(t) {
            return Math.pow(t, n)
        }
    }

    function ku(n) {
        return 1 - Math.cos(n * La)
    }

    function Eu(n) {
        return Math.pow(2, 10 * (n - 1))
    }

    function Au(n) {
        return 1 - Math.sqrt(1 - n * n)
    }

    function Cu(n, t) {
        var e;
        return arguments.length < 2 && (t = .45), arguments.length ? e = t / Na * Math.asin(1 / n) : (n = 1, e = t / 4),
        function(r) {
            return 1 + n * Math.pow(2, -10 * r) * Math.sin((r - e) * Na / t)
        }
    }

    function Nu(n) {
        return n || (n = 1.70158),
        function(t) {
            return t * t * ((n + 1) * t - n)
        }
    }

    function Lu(n) {
        return 1 / 2.75 > n ? 7.5625 * n * n : 2 / 2.75 > n ? 7.5625 * (n -= 1.5 / 2.75) * n + .75 : 2.5 / 2.75 > n ? 7.5625 * (n -= 2.25 / 2.75) * n + .9375 : 7.5625 * (n -= 2.625 / 2.75) * n + .984375
    }

    function Tu(n, t) {
        n = Go.hcl(n), t = Go.hcl(t);
        var e = n.h,
            r = n.c,
            u = n.l,
            i = t.h - e,
            o = t.c - r,
            a = t.l - u;
        return isNaN(o) && (o = 0, r = isNaN(r) ? t.c : r), isNaN(i) ? (i = 0, e = isNaN(e) ? t.h : e) : i > 180 ? i -= 360 : -180 > i && (i += 360),
        function(n) {
            return ct(e + i * n, r + o * n, u + a * n) + ""
        }
    }

    function qu(n, t) {
        n = Go.hsl(n), t = Go.hsl(t);
        var e = n.h,
            r = n.s,
            u = n.l,
            i = t.h - e,
            o = t.s - r,
            a = t.l - u;
        return isNaN(o) && (o = 0, r = isNaN(r) ? t.s : r), isNaN(i) ? (i = 0, e = isNaN(e) ? t.h : e) : i > 180 ? i -= 360 : -180 > i && (i += 360),
        function(n) {
            return it(e + i * n, r + o * n, u + a * n) + ""
        }
    }

    function zu(n, t) {
        n = Go.lab(n), t = Go.lab(t);
        var e = n.l,
            r = n.a,
            u = n.b,
            i = t.l - e,
            o = t.a - r,
            a = t.b - u;
        return function(n) {
            return ft(e + i * n, r + o * n, u + a * n) + ""
        }
    }

    function Ru(n, t) {
        return t -= n,
        function(e) {
            return Math.round(n + t * e)
        }
    }

    function Du(n) {
        var t = [n.a, n.b],
            e = [n.c, n.d],
            r = Uu(t),
            u = Pu(t, e),
            i = Uu(ju(e, t, -u)) || 0;
        t[0] * e[1] < e[0] * t[1] && (t[0] *= -1, t[1] *= -1, r *= -1, u *= -1), this.rotate = (r ? Math.atan2(t[1], t[0]) : Math.atan2(-e[0], e[1])) * Ra, this.translate = [n.e, n.f], this.scale = [r, i], this.skew = i ? Math.atan2(u, i) * Ra : 0
    }

    function Pu(n, t) {
        return n[0] * t[0] + n[1] * t[1]
    }

    function Uu(n) {
        var t = Math.sqrt(Pu(n, n));
        return t && (n[0] /= t, n[1] /= t), t
    }

    function ju(n, t, e) {
        return n[0] += e * t[0], n[1] += e * t[1], n
    }

    function Hu(n, t) {
        var e, r = [],
            u = [],
            i = Go.transform(n),
            o = Go.transform(t),
            a = i.translate,
            c = o.translate,
            s = i.rotate,
            l = o.rotate,
            f = i.skew,
            h = o.skew,
            g = i.scale,
            p = o.scale;
        return a[0] != c[0] || a[1] != c[1] ? (r.push("translate(", null, ",", null, ")"), u.push({
            i: 1,
            x: pu(a[0], c[0])
        }, {
            i: 3,
            x: pu(a[1], c[1])
        })) : c[0] || c[1] ? r.push("translate(" + c + ")") : r.push(""), s != l ? (s - l > 180 ? l += 360 : l - s > 180 && (s += 360), u.push({
            i: r.push(r.pop() + "rotate(", null, ")") - 2,
            x: pu(s, l)
        })) : l && r.push(r.pop() + "rotate(" + l + ")"), f != h ? u.push({
            i: r.push(r.pop() + "skewX(", null, ")") - 2,
            x: pu(f, h)
        }) : h && r.push(r.pop() + "skewX(" + h + ")"), g[0] != p[0] || g[1] != p[1] ? (e = r.push(r.pop() + "scale(", null, ",", null, ")"), u.push({
            i: e - 4,
            x: pu(g[0], p[0])
        }, {
            i: e - 2,
            x: pu(g[1], p[1])
        })) : (1 != p[0] || 1 != p[1]) && r.push(r.pop() + "scale(" + p + ")"), e = u.length,
        function(n) {
            for (var t, i = -1; ++i < e;) r[(t = u[i]).i] = t.x(n);
            return r.join("")
        }
    }

    function Fu(n, t) {
        return t = t - (n = +n) ? 1 / (t - n) : 0,
        function(e) {
            return (e - n) * t
        }
    }

    function Ou(n, t) {
        return t = t - (n = +n) ? 1 / (t - n) : 0,
        function(e) {
            return Math.max(0, Math.min(1, (e - n) * t))
        }
    }

    function Iu(n) {
        for (var t = n.source, e = n.target, r = Zu(t, e), u = [t]; t !== r;) t = t.parent, u.push(t);
        for (var i = u.length; e !== r;) u.splice(i, 0, e), e = e.parent;
        return u
    }

    function Yu(n) {
        for (var t = [], e = n.parent; null != e;) t.push(n), n = e, e = e.parent;
        return t.push(n), t
    }

    function Zu(n, t) {
        if (n === t) return n;
        for (var e = Yu(n), r = Yu(t), u = e.pop(), i = r.pop(), o = null; u === i;) o = u, u = e.pop(), i = r.pop();
        return o
    }

    function Vu(n) {
        n.fixed |= 2
    }

    function $u(n) {
        n.fixed &= -7
    }

    function Xu(n) {
        n.fixed |= 4, n.px = n.x, n.py = n.y
    }

    function Bu(n) {
        n.fixed &= -5
    }

    function Ju(n, t, e) {
        var r = 0,
            u = 0;
        if (n.charge = 0, !n.leaf)
            for (var i, o = n.nodes, a = o.length, c = -1; ++c < a;) i = o[c], null != i && (Ju(i, t, e), n.charge += i.charge, r += i.charge * i.cx, u += i.charge * i.cy);
        if (n.point) {
            n.leaf || (n.point.x += Math.random() - .5, n.point.y += Math.random() - .5);
            var s = t * e[n.point.index];
            n.charge += n.pointCharge = s, r += s * n.point.x, u += s * n.point.y
        }
        n.cx = r / n.charge, n.cy = u / n.charge
    }

    function Wu(n, t) {
        return Go.rebind(n, t, "sort", "children", "value"), n.nodes = n, n.links = ni, n
    }

    function Gu(n) {
        return n.children
    }

    function Ku(n) {
        return n.value
    }

    function Qu(n, t) {
        return t.value - n.value
    }

    function ni(n) {
        return Go.merge(n.map(function(n) {
            return (n.children || []).map(function(t) {
                return {
                    source: n,
                    target: t
                }
            })
        }))
    }

    function ti(n) {
        return n.x
    }

    function ei(n) {
        return n.y
    }

    function ri(n, t, e) {
        n.y0 = t, n.y = e
    }

    function ui(n) {
        return Go.range(n.length)
    }

    function ii(n) {
        for (var t = -1, e = n[0].length, r = []; ++t < e;) r[t] = 0;
        return r
    }

    function oi(n) {
        for (var t, e = 1, r = 0, u = n[0][1], i = n.length; i > e; ++e)(t = n[e][1]) > u && (r = e, u = t);
        return r
    }

    function ai(n) {
        return n.reduce(ci, 0)
    }

    function ci(n, t) {
        return n + t[1]
    }

    function si(n, t) {
        return li(n, Math.ceil(Math.log(t.length) / Math.LN2 + 1))
    }

    function li(n, t) {
        for (var e = -1, r = +n[0], u = (n[1] - r) / t, i = []; ++e <= t;) i[e] = u * e + r;
        return i
    }

    function fi(n) {
        return [Go.min(n), Go.max(n)]
    }

    function hi(n, t) {
        return n.parent == t.parent ? 1 : 2
    }

    function gi(n) {
        var t = n.children;
        return t && t.length ? t[0] : n._tree.thread
    }

    function pi(n) {
        var t, e = n.children;
        return e && (t = e.length) ? e[t - 1] : n._tree.thread
    }

    function vi(n, t) {
        var e = n.children;
        if (e && (u = e.length))
            for (var r, u, i = -1; ++i < u;) t(r = vi(e[i], t), n) > 0 && (n = r);
        return n
    }

    function di(n, t) {
        return n.x - t.x
    }

    function mi(n, t) {
        return t.x - n.x
    }

    function yi(n, t) {
        return n.depth - t.depth
    }

    function xi(n, t) {
        function e(n, r) {
            var u = n.children;
            if (u && (o = u.length))
                for (var i, o, a = null, c = -1; ++c < o;) i = u[c], e(i, a), a = i;
            t(n, r)
        }
        e(n, null)
    }

    function Mi(n) {
        for (var t, e = 0, r = 0, u = n.children, i = u.length; --i >= 0;) t = u[i]._tree, t.prelim += e, t.mod += e, e += t.shift + (r += t.change)
    }

    function _i(n, t, e) {
        n = n._tree, t = t._tree;
        var r = e / (t.number - n.number);
        n.change += r, t.change -= r, t.shift += e, t.prelim += e, t.mod += e
    }

    function bi(n, t, e) {
        return n._tree.ancestor.parent == t.parent ? n._tree.ancestor : e
    }

    function wi(n, t) {
        return n.value - t.value
    }

    function Si(n, t) {
        var e = n._pack_next;
        n._pack_next = t, t._pack_prev = n, t._pack_next = e, e._pack_prev = t
    }

    function ki(n, t) {
        n._pack_next = t, t._pack_prev = n
    }

    function Ei(n, t) {
        var e = t.x - n.x,
            r = t.y - n.y,
            u = n.r + t.r;
        return .999 * u * u > e * e + r * r
    }

    function Ai(n) {
        function t(n) {
            l = Math.min(n.x - n.r, l), f = Math.max(n.x + n.r, f), h = Math.min(n.y - n.r, h), g = Math.max(n.y + n.r, g)
        }
        if ((e = n.children) && (s = e.length)) {
            var e, r, u, i, o, a, c, s, l = 1 / 0,
                f = -1 / 0,
                h = 1 / 0,
                g = -1 / 0;
            if (e.forEach(Ci), r = e[0], r.x = -r.r, r.y = 0, t(r), s > 1 && (u = e[1], u.x = u.r, u.y = 0, t(u), s > 2))
                for (i = e[2], Ti(r, u, i), t(i), Si(r, i), r._pack_prev = i, Si(i, u), u = r._pack_next, o = 3; s > o; o++) {
                    Ti(r, u, i = e[o]);
                    var p = 0,
                        v = 1,
                        d = 1;
                    for (a = u._pack_next; a !== u; a = a._pack_next, v++)
                        if (Ei(a, i)) {
                            p = 1;
                            break
                        }
                    if (1 == p)
                        for (c = r._pack_prev; c !== a._pack_prev && !Ei(c, i); c = c._pack_prev, d++);
                    p ? (d > v || v == d && u.r < r.r ? ki(r, u = a) : ki(r = c, u), o--) : (Si(r, i), u = i, t(i))
                }
            var m = (l + f) / 2,
                y = (h + g) / 2,
                x = 0;
            for (o = 0; s > o; o++) i = e[o], i.x -= m, i.y -= y, x = Math.max(x, i.r + Math.sqrt(i.x * i.x + i.y * i.y));
            n.r = x, e.forEach(Ni)
        }
    }

    function Ci(n) {
        n._pack_next = n._pack_prev = n
    }

    function Ni(n) {
        delete n._pack_next, delete n._pack_prev
    }

    function Li(n, t, e, r) {
        var u = n.children;
        if (n.x = t += r * n.x, n.y = e += r * n.y, n.r *= r, u)
            for (var i = -1, o = u.length; ++i < o;) Li(u[i], t, e, r)
    }

    function Ti(n, t, e) {
        var r = n.r + e.r,
            u = t.x - n.x,
            i = t.y - n.y;
        if (r && (u || i)) {
            var o = t.r + e.r,
                a = u * u + i * i;
            o *= o, r *= r;
            var c = .5 + (r - o) / (2 * a),
                s = Math.sqrt(Math.max(0, 2 * o * (r + a) - (r -= a) * r - o * o)) / (2 * a);
            e.x = n.x + c * u + s * i, e.y = n.y + c * i - s * u
        } else e.x = n.x + r, e.y = n.y
    }

    function qi(n) {
        return 1 + Go.max(n, function(n) {
            return n.y
        })
    }

    function zi(n) {
        return n.reduce(function(n, t) {
            return n + t.x
        }, 0) / n.length
    }

    function Ri(n) {
        var t = n.children;
        return t && t.length ? Ri(t[0]) : n
    }

    function Di(n) {
        var t, e = n.children;
        return e && (t = e.length) ? Di(e[t - 1]) : n
    }

    function Pi(n) {
        return {
            x: n.x,
            y: n.y,
            dx: n.dx,
            dy: n.dy
        }
    }

    function Ui(n, t) {
        var e = n.x + t[3],
            r = n.y + t[0],
            u = n.dx - t[1] - t[3],
            i = n.dy - t[0] - t[2];
        return 0 > u && (e += u / 2, u = 0), 0 > i && (r += i / 2, i = 0), {
            x: e,
            y: r,
            dx: u,
            dy: i
        }
    }

    function ji(n) {
        var t = n[0],
            e = n[n.length - 1];
        return e > t ? [t, e] : [e, t]
    }

    function Hi(n) {
        return n.rangeExtent ? n.rangeExtent() : ji(n.range())
    }

    function Fi(n, t, e, r) {
        var u = e(n[0], n[1]),
            i = r(t[0], t[1]);
        return function(n) {
            return i(u(n))
        }
    }

    function Oi(n, t) {
        var e, r = 0,
            u = n.length - 1,
            i = n[r],
            o = n[u];
        return i > o && (e = r, r = u, u = e, e = i, i = o, o = e), n[r] = t.floor(i), n[u] = t.ceil(o), n
    }

    function Ii(n) {
        return n ? {
            floor: function(t) {
                return Math.floor(t / n) * n
            },
            ceil: function(t) {
                return Math.ceil(t / n) * n
            }
        } : vs
    }

    function Yi(n, t, e, r) {
        var u = [],
            i = [],
            o = 0,
            a = Math.min(n.length, t.length) - 1;
        for (n[a] < n[0] && (n = n.slice().reverse(), t = t.slice().reverse()); ++o <= a;) u.push(e(n[o - 1], n[o])), i.push(r(t[o - 1], t[o]));
        return function(t) {
            var e = Go.bisect(n, t, 1, a) - 1;
            return i[e](u[e](t))
        }
    }

    function Zi(n, t, e, r) {
        function u() {
            var u = Math.min(n.length, t.length) > 2 ? Yi : Fi,
                c = r ? Ou : Fu;
            return o = u(n, t, c, e), a = u(t, n, c, du), i
        }

        function i(n) {
            return o(n)
        }
        var o, a;
        return i.invert = function(n) {
            return a(n)
        }, i.domain = function(t) {
            return arguments.length ? (n = t.map(Number), u()) : n
        }, i.range = function(n) {
            return arguments.length ? (t = n, u()) : t
        }, i.rangeRound = function(n) {
            return i.range(n).interpolate(Ru)
        }, i.clamp = function(n) {
            return arguments.length ? (r = n, u()) : r
        }, i.interpolate = function(n) {
            return arguments.length ? (e = n, u()) : e
        }, i.ticks = function(t) {
            return Bi(n, t)
        }, i.tickFormat = function(t, e) {
            return Ji(n, t, e)
        }, i.nice = function(t) {
            return $i(n, t), u()
        }, i.copy = function() {
            return Zi(n, t, e, r)
        }, u()
    }

    function Vi(n, t) {
        return Go.rebind(n, t, "range", "rangeRound", "interpolate", "clamp")
    }

    function $i(n, t) {
        return Oi(n, Ii(Xi(n, t)[2]))
    }

    function Xi(n, t) {
        null == t && (t = 10);
        var e = ji(n),
            r = e[1] - e[0],
            u = Math.pow(10, Math.floor(Math.log(r / t) / Math.LN10)),
            i = t / r * u;
        return .15 >= i ? u *= 10 : .35 >= i ? u *= 5 : .75 >= i && (u *= 2), e[0] = Math.ceil(e[0] / u) * u, e[1] = Math.floor(e[1] / u) * u + .5 * u, e[2] = u, e
    }

    function Bi(n, t) {
        return Go.range.apply(Go, Xi(n, t))
    }

    function Ji(n, t, e) {
        var r = Xi(n, t);
        if (e) {
            var u = rc.exec(e);
            if (u.shift(), "s" === u[8]) {
                var i = Go.formatPrefix(Math.max(fa(r[0]), fa(r[1])));
                return u[7] || (u[7] = "." + Wi(i.scale(r[2]))), u[8] = "f", e = Go.format(u.join("")),
                function(n) {
                    return e(i.scale(n)) + i.symbol
                }
            }
            u[7] || (u[7] = "." + Gi(u[8], r)), e = u.join("")
        } else e = ",." + Wi(r[2]) + "f";
        return Go.format(e)
    }

    function Wi(n) {
        return -Math.floor(Math.log(n) / Math.LN10 + .01)
    }

    function Gi(n, t) {
        var e = Wi(t[2]);
        return n in ds ? Math.abs(e - Wi(Math.max(fa(t[0]), fa(t[1])))) + +("e" !== n) : e - 2 * ("%" === n)
    }

    function Ki(n, t, e, r) {
        function u(n) {
            return (e ? Math.log(0 > n ? 0 : n) : -Math.log(n > 0 ? 0 : -n)) / Math.log(t)
        }

        function i(n) {
            return e ? Math.pow(t, n) : -Math.pow(t, -n)
        }

        function o(t) {
            return n(u(t))
        }
        return o.invert = function(t) {
            return i(n.invert(t))
        }, o.domain = function(t) {
            return arguments.length ? (e = t[0] >= 0, n.domain((r = t.map(Number)).map(u)), o) : r
        }, o.base = function(e) {
            return arguments.length ? (t = +e, n.domain(r.map(u)), o) : t
        }, o.nice = function() {
            var t = Oi(r.map(u), e ? Math : ys);
            return n.domain(t), r = t.map(i), o
        }, o.ticks = function() {
            var n = ji(r),
                o = [],
                a = n[0],
                c = n[1],
                s = Math.floor(u(a)),
                l = Math.ceil(u(c)),
                f = t % 1 ? 2 : t;
            if (isFinite(l - s)) {
                if (e) {
                    for (; l > s; s++)
                        for (var h = 1; f > h; h++) o.push(i(s) * h);
                    o.push(i(s))
                } else
                    for (o.push(i(s)); s++ < l;)
                        for (var h = f - 1; h > 0; h--) o.push(i(s) * h);
                for (s = 0; o[s] < a; s++);
                for (l = o.length; o[l - 1] > c; l--);
                o = o.slice(s, l)
            }
            return o
        }, o.tickFormat = function(n, t) {
            if (!arguments.length) return ms;
            arguments.length < 2 ? t = ms : "function" != typeof t && (t = Go.format(t));
            var r, a = Math.max(.1, n / o.ticks().length),
                c = e ? (r = 1e-12, Math.ceil) : (r = -1e-12, Math.floor);
            return function(n) {
                return n / i(c(u(n) + r)) <= a ? t(n) : ""
            }
        }, o.copy = function() {
            return Ki(n.copy(), t, e, r)
        }, Vi(o, n)
    }

    function Qi(n, t, e) {
        function r(t) {
            return n(u(t))
        }
        var u = no(t),
            i = no(1 / t);
        return r.invert = function(t) {
            return i(n.invert(t))
        }, r.domain = function(t) {
            return arguments.length ? (n.domain((e = t.map(Number)).map(u)), r) : e
        }, r.ticks = function(n) {
            return Bi(e, n)
        }, r.tickFormat = function(n, t) {
            return Ji(e, n, t)
        }, r.nice = function(n) {
            return r.domain($i(e, n))
        }, r.exponent = function(o) {
            return arguments.length ? (u = no(t = o), i = no(1 / t), n.domain(e.map(u)), r) : t
        }, r.copy = function() {
            return Qi(n.copy(), t, e)
        }, Vi(r, n)
    }

    function no(n) {
        return function(t) {
            return 0 > t ? -Math.pow(-t, n) : Math.pow(t, n)
        }
    }

    function to(n, t) {
        function e(e) {
            return i[((u.get(e) || ("range" === t.t ? u.set(e, n.push(e)) : 0 / 0)) - 1) % i.length]
        }

        function r(t, e) {
            return Go.range(n.length).map(function(n) {
                return t + e * n
            })
        }
        var u, i, a;
        return e.domain = function(r) {
            if (!arguments.length) return n;
            n = [], u = new o;
            for (var i, a = -1, c = r.length; ++a < c;) u.has(i = r[a]) || u.set(i, n.push(i));
            return e[t.t].apply(e, t.a)
        }, e.range = function(n) {
            return arguments.length ? (i = n, a = 0, t = {
                t: "range",
                a: arguments
            }, e) : i
        }, e.rangePoints = function(u, o) {
            arguments.length < 2 && (o = 0);
            var c = u[0],
                s = u[1],
                l = (s - c) / (Math.max(1, n.length - 1) + o);
            return i = r(n.length < 2 ? (c + s) / 2 : c + l * o / 2, l), a = 0, t = {
                t: "rangePoints",
                a: arguments
            }, e
        }, e.rangeBands = function(u, o, c) {
            arguments.length < 2 && (o = 0), arguments.length < 3 && (c = o);
            var s = u[1] < u[0],
                l = u[s - 0],
                f = u[1 - s],
                h = (f - l) / (n.length - o + 2 * c);
            return i = r(l + h * c, h), s && i.reverse(), a = h * (1 - o), t = {
                t: "rangeBands",
                a: arguments
            }, e
        }, e.rangeRoundBands = function(u, o, c) {
            arguments.length < 2 && (o = 0), arguments.length < 3 && (c = o);
            var s = u[1] < u[0],
                l = u[s - 0],
                f = u[1 - s],
                h = Math.floor((f - l) / (n.length - o + 2 * c)),
                g = f - l - (n.length - o) * h;
            return i = r(l + Math.round(g / 2), h), s && i.reverse(), a = Math.round(h * (1 - o)), t = {
                t: "rangeRoundBands",
                a: arguments
            }, e
        }, e.rangeBand = function() {
            return a
        }, e.rangeExtent = function() {
            return ji(t.a[0])
        }, e.copy = function() {
            return to(n, t)
        }, e.domain(n)
    }

    function eo(e, r) {
        function u() {
            var n = 0,
                t = r.length;
            for (o = []; ++n < t;) o[n - 1] = Go.quantile(e, n / t);
            return i
        }

        function i(n) {
            return isNaN(n = +n) ? void 0 : r[Go.bisect(o, n)]
        }
        var o;
        return i.domain = function(r) {
            return arguments.length ? (e = r.filter(t).sort(n), u()) : e
        }, i.range = function(n) {
            return arguments.length ? (r = n, u()) : r
        }, i.quantiles = function() {
            return o
        }, i.invertExtent = function(n) {
            return n = r.indexOf(n), 0 > n ? [0 / 0, 0 / 0] : [n > 0 ? o[n - 1] : e[0], n < o.length ? o[n] : e[e.length - 1]]
        }, i.copy = function() {
            return eo(e, r)
        }, u()
    }

    function ro(n, t, e) {
        function r(t) {
            return e[Math.max(0, Math.min(o, Math.floor(i * (t - n))))]
        }

        function u() {
            return i = e.length / (t - n), o = e.length - 1, r
        }
        var i, o;
        return r.domain = function(e) {
            return arguments.length ? (n = +e[0], t = +e[e.length - 1], u()) : [n, t]
        }, r.range = function(n) {
            return arguments.length ? (e = n, u()) : e
        }, r.invertExtent = function(t) {
            return t = e.indexOf(t), t = 0 > t ? 0 / 0 : t / i + n, [t, t + 1 / i]
        }, r.copy = function() {
            return ro(n, t, e)
        }, u()
    }

    function uo(n, t) {
        function e(e) {
            return e >= e ? t[Go.bisect(n, e)] : void 0
        }
        return e.domain = function(t) {
            return arguments.length ? (n = t, e) : n
        }, e.range = function(n) {
            return arguments.length ? (t = n, e) : t
        }, e.invertExtent = function(e) {
            return e = t.indexOf(e), [n[e - 1], n[e]]
        }, e.copy = function() {
            return uo(n, t)
        }, e
    }

    function io(n) {
        function t(n) {
            return +n
        }
        return t.invert = t, t.domain = t.range = function(e) {
            return arguments.length ? (n = e.map(t), t) : n
        }, t.ticks = function(t) {
            return Bi(n, t)
        }, t.tickFormat = function(t, e) {
            return Ji(n, t, e)
        }, t.copy = function() {
            return io(n)
        }, t
    }

    function oo(n) {
        return n.innerRadius
    }

    function ao(n) {
        return n.outerRadius
    }

    function co(n) {
        return n.startAngle
    }

    function so(n) {
        return n.endAngle
    }

    function lo(n) {
        function t(t) {
            function o() {
                s.push("M", i(n(l), a))
            }
            for (var c, s = [], l = [], f = -1, h = t.length, g = Et(e), p = Et(r); ++f < h;) u.call(this, c = t[f], f) ? l.push([+g.call(this, c, f), +p.call(this, c, f)]) : l.length && (o(), l = []);
            return l.length && o(), s.length ? s.join("") : null
        }
        var e = Ar,
            r = Cr,
            u = Ae,
            i = fo,
            o = i.key,
            a = .7;
        return t.x = function(n) {
            return arguments.length ? (e = n, t) : e
        }, t.y = function(n) {
            return arguments.length ? (r = n, t) : r
        }, t.defined = function(n) {
            return arguments.length ? (u = n, t) : u
        }, t.interpolate = function(n) {
            return arguments.length ? (o = "function" == typeof n ? i = n : (i = ks.get(n) || fo).key, t) : o
        }, t.tension = function(n) {
            return arguments.length ? (a = n, t) : a
        }, t
    }

    function fo(n) {
        return n.join("L")
    }

    function ho(n) {
        return fo(n) + "Z"
    }

    function go(n) {
        for (var t = 0, e = n.length, r = n[0], u = [r[0], ",", r[1]]; ++t < e;) u.push("H", (r[0] + (r = n[t])[0]) / 2, "V", r[1]);
        return e > 1 && u.push("H", r[0]), u.join("")
    }

    function po(n) {
        for (var t = 0, e = n.length, r = n[0], u = [r[0], ",", r[1]]; ++t < e;) u.push("V", (r = n[t])[1], "H", r[0]);
        return u.join("")
    }

    function vo(n) {
        for (var t = 0, e = n.length, r = n[0], u = [r[0], ",", r[1]]; ++t < e;) u.push("H", (r = n[t])[0], "V", r[1]);
        return u.join("")
    }

    function mo(n, t) {
        return n.length < 4 ? fo(n) : n[1] + Mo(n.slice(1, n.length - 1), _o(n, t))
    }

    function yo(n, t) {
        return n.length < 3 ? fo(n) : n[0] + Mo((n.push(n[0]), n), _o([n[n.length - 2]].concat(n, [n[1]]), t))
    }

    function xo(n, t) {
        return n.length < 3 ? fo(n) : n[0] + Mo(n, _o(n, t))
    }

    function Mo(n, t) {
        if (t.length < 1 || n.length != t.length && n.length != t.length + 2) return fo(n);
        var e = n.length != t.length,
            r = "",
            u = n[0],
            i = n[1],
            o = t[0],
            a = o,
            c = 1;
        if (e && (r += "Q" + (i[0] - 2 * o[0] / 3) + "," + (i[1] - 2 * o[1] / 3) + "," + i[0] + "," + i[1], u = n[1], c = 2), t.length > 1) {
            a = t[1], i = n[c], c++, r += "C" + (u[0] + o[0]) + "," + (u[1] + o[1]) + "," + (i[0] - a[0]) + "," + (i[1] - a[1]) + "," + i[0] + "," + i[1];
            for (var s = 2; s < t.length; s++, c++) i = n[c], a = t[s], r += "S" + (i[0] - a[0]) + "," + (i[1] - a[1]) + "," + i[0] + "," + i[1]
        }
        if (e) {
            var l = n[c];
            r += "Q" + (i[0] + 2 * a[0] / 3) + "," + (i[1] + 2 * a[1] / 3) + "," + l[0] + "," + l[1]
        }
        return r
    }

    function _o(n, t) {
        for (var e, r = [], u = (1 - t) / 2, i = n[0], o = n[1], a = 1, c = n.length; ++a < c;) e = i, i = o, o = n[a], r.push([u * (o[0] - e[0]), u * (o[1] - e[1])]);
        return r
    }

    function bo(n) {
        if (n.length < 3) return fo(n);
        var t = 1,
            e = n.length,
            r = n[0],
            u = r[0],
            i = r[1],
            o = [u, u, u, (r = n[1])[0]],
            a = [i, i, i, r[1]],
            c = [u, ",", i, "L", Eo(Cs, o), ",", Eo(Cs, a)];
        for (n.push(n[e - 1]); ++t <= e;) r = n[t], o.shift(), o.push(r[0]), a.shift(), a.push(r[1]), Ao(c, o, a);
        return n.pop(), c.push("L", r), c.join("")
    }

    function wo(n) {
        if (n.length < 4) return fo(n);
        for (var t, e = [], r = -1, u = n.length, i = [0], o = [0]; ++r < 3;) t = n[r], i.push(t[0]), o.push(t[1]);
        for (e.push(Eo(Cs, i) + "," + Eo(Cs, o)), --r; ++r < u;) t = n[r], i.shift(), i.push(t[0]), o.shift(), o.push(t[1]), Ao(e, i, o);
        return e.join("")
    }

    function So(n) {
        for (var t, e, r = -1, u = n.length, i = u + 4, o = [], a = []; ++r < 4;) e = n[r % u], o.push(e[0]), a.push(e[1]);
        for (t = [Eo(Cs, o), ",", Eo(Cs, a)], --r; ++r < i;) e = n[r % u], o.shift(), o.push(e[0]), a.shift(), a.push(e[1]), Ao(t, o, a);
        return t.join("")
    }

    function ko(n, t) {
        var e = n.length - 1;
        if (e)
            for (var r, u, i = n[0][0], o = n[0][1], a = n[e][0] - i, c = n[e][1] - o, s = -1; ++s <= e;) r = n[s], u = s / e, r[0] = t * r[0] + (1 - t) * (i + u * a), r[1] = t * r[1] + (1 - t) * (o + u * c);
        return bo(n)
    }

    function Eo(n, t) {
        return n[0] * t[0] + n[1] * t[1] + n[2] * t[2] + n[3] * t[3]
    }

    function Ao(n, t, e) {
        n.push("C", Eo(Es, t), ",", Eo(Es, e), ",", Eo(As, t), ",", Eo(As, e), ",", Eo(Cs, t), ",", Eo(Cs, e))
    }

    function Co(n, t) {
        return (t[1] - n[1]) / (t[0] - n[0])
    }

    function No(n) {
        for (var t = 0, e = n.length - 1, r = [], u = n[0], i = n[1], o = r[0] = Co(u, i); ++t < e;) r[t] = (o + (o = Co(u = i, i = n[t + 1]))) / 2;
        return r[t] = o, r
    }

    function Lo(n) {
        for (var t, e, r, u, i = [], o = No(n), a = -1, c = n.length - 1; ++a < c;) t = Co(n[a], n[a + 1]), fa(t) < Ta ? o[a] = o[a + 1] = 0 : (e = o[a] / t, r = o[a + 1] / t, u = e * e + r * r, u > 9 && (u = 3 * t / Math.sqrt(u), o[a] = u * e, o[a + 1] = u * r));
        for (a = -1; ++a <= c;) u = (n[Math.min(c, a + 1)][0] - n[Math.max(0, a - 1)][0]) / (6 * (1 + o[a] * o[a])), i.push([u || 0, o[a] * u || 0]);
        return i
    }

    function To(n) {
        return n.length < 3 ? fo(n) : n[0] + Mo(n, Lo(n))
    }

    function qo(n) {
        for (var t, e, r, u = -1, i = n.length; ++u < i;) t = n[u], e = t[0], r = t[1] + ws, t[0] = e * Math.cos(r), t[1] = e * Math.sin(r);
        return n
    }

    function zo(n) {
        function t(t) {
            function c() {
                v.push("M", a(n(m), f), l, s(n(d.reverse()), f), "Z")
            }
            for (var h, g, p, v = [], d = [], m = [], y = -1, x = t.length, M = Et(e), _ = Et(u), b = e === r ? function() {
                    return g
                } : Et(r), w = u === i ? function() {
                    return p
                } : Et(i); ++y < x;) o.call(this, h = t[y], y) ? (d.push([g = +M.call(this, h, y), p = +_.call(this, h, y)]), m.push([+b.call(this, h, y), +w.call(this, h, y)])) : d.length && (c(), d = [], m = []);
            return d.length && c(), v.length ? v.join("") : null
        }
        var e = Ar,
            r = Ar,
            u = 0,
            i = Cr,
            o = Ae,
            a = fo,
            c = a.key,
            s = a,
            l = "L",
            f = .7;
        return t.x = function(n) {
            return arguments.length ? (e = r = n, t) : r
        }, t.x0 = function(n) {
            return arguments.length ? (e = n, t) : e
        }, t.x1 = function(n) {
            return arguments.length ? (r = n, t) : r
        }, t.y = function(n) {
            return arguments.length ? (u = i = n, t) : i
        }, t.y0 = function(n) {
            return arguments.length ? (u = n, t) : u
        }, t.y1 = function(n) {
            return arguments.length ? (i = n, t) : i
        }, t.defined = function(n) {
            return arguments.length ? (o = n, t) : o
        }, t.interpolate = function(n) {
            return arguments.length ? (c = "function" == typeof n ? a = n : (a = ks.get(n) || fo).key, s = a.reverse || a, l = a.closed ? "M" : "L", t) : c
        }, t.tension = function(n) {
            return arguments.length ? (f = n, t) : f
        }, t
    }

    function Ro(n) {
        return n.radius
    }

    function Do(n) {
        return [n.x, n.y]
    }

    function Po(n) {
        return function() {
            var t = n.apply(this, arguments),
                e = t[0],
                r = t[1] + ws;
            return [e * Math.cos(r), e * Math.sin(r)]
        }
    }

    function Uo() {
        return 64
    }

    function jo() {
        return "circle"
    }

    function Ho(n) {
        var t = Math.sqrt(n / Ca);
        return "M0," + t + "A" + t + "," + t + " 0 1,1 0," + -t + "A" + t + "," + t + " 0 1,1 0," + t + "Z"
    }

    function Fo(n, t) {
        return da(n, Rs), n.id = t, n
    }

    function Oo(n, t, e, r) {
        var u = n.id;
        return P(n, "function" == typeof e ? function(n, i, o) {
            n.__transition__[u].tween.set(t, r(e.call(n, n.__data__, i, o)))
        } : (e = r(e), function(n) {
            n.__transition__[u].tween.set(t, e)
        }))
    }

    function Io(n) {
        return null == n && (n = ""),
        function() {
            this.textContent = n
        }
    }

    function Yo(n, t, e, r) {
        var u = n.__transition__ || (n.__transition__ = {
            active: 0,
            count: 0
        }),
            i = u[e];
        if (!i) {
            var a = r.time;
            i = u[e] = {
                tween: new o,
                time: a,
                ease: r.ease,
                delay: r.delay,
                duration: r.duration
            }, ++u.count, Go.timer(function(r) {
                function o(r) {
                    return u.active > e ? s() : (u.active = e, i.event && i.event.start.call(n, l, t), i.tween.forEach(function(e, r) {
                        (r = r.call(n, l, t)) && v.push(r)
                    }), Go.timer(function() {
                        return p.c = c(r || 1) ? Ae : c, 1
                    }, 0, a), void 0)
                }

                function c(r) {
                    if (u.active !== e) return s();
                    for (var o = r / g, a = f(o), c = v.length; c > 0;) v[--c].call(n, a);
                    return o >= 1 ? (i.event && i.event.end.call(n, l, t), s()) : void 0
                }

                function s() {
                    return --u.count ? delete u[e] : delete n.__transition__, 1
                }
                var l = n.__data__,
                    f = i.ease,
                    h = i.delay,
                    g = i.duration,
                    p = nc,
                    v = [];
                return p.t = h + a, r >= h ? o(r - h) : (p.c = o, void 0)
            }, 0, a)
        }
    }

    function Zo(n, t) {
        n.attr("transform", function(n) {
            return "translate(" + t(n) + ",0)"
        })
    }

    function Vo(n, t) {
        n.attr("transform", function(n) {
            return "translate(0," + t(n) + ")"
        })
    }

    function $o(n) {
        return n.toISOString()
    }

    function Xo(n, t, e) {
        function r(t) {
            return n(t)
        }

        function u(n, e) {
            var r = n[1] - n[0],
                u = r / e,
                i = Go.bisect(Ys, u);
            return i == Ys.length ? [t.year, Xi(n.map(function(n) {
                return n / 31536e6
            }), e)[2]] : i ? t[u / Ys[i - 1] < Ys[i] / u ? i - 1 : i] : [$s, Xi(n, e)[2]]
        }
        return r.invert = function(t) {
            return Bo(n.invert(t))
        }, r.domain = function(t) {
            return arguments.length ? (n.domain(t), r) : n.domain().map(Bo)
        }, r.nice = function(n, t) {
            function e(e) {
                return !isNaN(e) && !n.range(e, Bo(+e + 1), t).length
            }
            var i = r.domain(),
                o = ji(i),
                a = null == n ? u(o, 10) : "number" == typeof n && u(o, n);
            return a && (n = a[0], t = a[1]), r.domain(Oi(i, t > 1 ? {
                floor: function(t) {
                    for (; e(t = n.floor(t));) t = Bo(t - 1);
                    return t
                },
                ceil: function(t) {
                    for (; e(t = n.ceil(t));) t = Bo(+t + 1);
                    return t
                }
            } : n))
        }, r.ticks = function(n, t) {
            var e = ji(r.domain()),
                i = null == n ? u(e, 10) : "number" == typeof n ? u(e, n) : !n.range && [{
                        range: n
                    },
                    t
                ];
            return i && (n = i[0], t = i[1]), n.range(e[0], Bo(+e[1] + 1), 1 > t ? 1 : t)
        }, r.tickFormat = function() {
            return e
        }, r.copy = function() {
            return Xo(n.copy(), t, e)
        }, Vi(r, n)
    }

    function Bo(n) {
        return new Date(n)
    }

    function Jo(n) {
        return JSON.parse(n.responseText)
    }

    function Wo(n) {
        var t = na.createRange();
        return t.selectNode(na.body), t.createContextualFragment(n.responseText)
    }
    var Go = {
        version: "3.4.6"
    };
    Date.now || (Date.now = function() {
        return +new Date
    });
    var Ko = [].slice,
        Qo = function(n) {
            return Ko.call(n)
        }, na = document,
        ta = na.documentElement,
        ea = window;
    try {
        Qo(ta.childNodes)[0].nodeType
    } catch (ra) {
        Qo = function(n) {
            for (var t = n.length, e = new Array(t); t--;) e[t] = n[t];
            return e
        }
    }
    try {
        na.createElement("div").style.setProperty("opacity", 0, "")
    } catch (ua) {
        var ia = ea.Element.prototype,
            oa = ia.setAttribute,
            aa = ia.setAttributeNS,
            ca = ea.CSSStyleDeclaration.prototype,
            sa = ca.setProperty;
        ia.setAttribute = function(n, t) {
            oa.call(this, n, t + "")
        }, ia.setAttributeNS = function(n, t, e) {
            aa.call(this, n, t, e + "")
        }, ca.setProperty = function(n, t, e) {
            sa.call(this, n, t + "", e)
        }
    }
    Go.ascending = n, Go.descending = function(n, t) {
        return n > t ? -1 : t > n ? 1 : t >= n ? 0 : 0 / 0
    }, Go.min = function(n, t) {
        var e, r, u = -1,
            i = n.length;
        if (1 === arguments.length) {
            for (; ++u < i && !(null != (e = n[u]) && e >= e);) e = void 0;
            for (; ++u < i;) null != (r = n[u]) && e > r && (e = r)
        } else {
            for (; ++u < i && !(null != (e = t.call(n, n[u], u)) && e >= e);) e = void 0;
            for (; ++u < i;) null != (r = t.call(n, n[u], u)) && e > r && (e = r)
        }
        return e
    }, Go.max = function(n, t) {
        var e, r, u = -1,
            i = n.length;
        if (1 === arguments.length) {
            for (; ++u < i && !(null != (e = n[u]) && e >= e);) e = void 0;
            for (; ++u < i;) null != (r = n[u]) && r > e && (e = r)
        } else {
            for (; ++u < i && !(null != (e = t.call(n, n[u], u)) && e >= e);) e = void 0;
            for (; ++u < i;) null != (r = t.call(n, n[u], u)) && r > e && (e = r)
        }
        return e
    }, Go.extent = function(n, t) {
        var e, r, u, i = -1,
            o = n.length;
        if (1 === arguments.length) {
            for (; ++i < o && !(null != (e = u = n[i]) && e >= e);) e = u = void 0;
            for (; ++i < o;) null != (r = n[i]) && (e > r && (e = r), r > u && (u = r))
        } else {
            for (; ++i < o && !(null != (e = u = t.call(n, n[i], i)) && e >= e);) e = void 0;
            for (; ++i < o;) null != (r = t.call(n, n[i], i)) && (e > r && (e = r), r > u && (u = r))
        }
        return [e, u]
    }, Go.sum = function(n, t) {
        var e, r = 0,
            u = n.length,
            i = -1;
        if (1 === arguments.length)
            for (; ++i < u;) isNaN(e = +n[i]) || (r += e);
        else
            for (; ++i < u;) isNaN(e = +t.call(n, n[i], i)) || (r += e);
        return r
    }, Go.mean = function(n, e) {
        var r, u = 0,
            i = n.length,
            o = -1,
            a = i;
        if (1 === arguments.length)
            for (; ++o < i;) t(r = n[o]) ? u += r : --a;
        else
            for (; ++o < i;) t(r = e.call(n, n[o], o)) ? u += r : --a;
        return a ? u / a : void 0
    }, Go.quantile = function(n, t) {
        var e = (n.length - 1) * t + 1,
            r = Math.floor(e),
            u = +n[r - 1],
            i = e - r;
        return i ? u + i * (n[r] - u) : u
    }, Go.median = function(e, r) {
        return arguments.length > 1 && (e = e.map(r)), e = e.filter(t), e.length ? Go.quantile(e.sort(n), .5) : void 0
    };
    var la = e(n);
    Go.bisectLeft = la.left, Go.bisect = Go.bisectRight = la.right, Go.bisector = function(t) {
        return e(1 === t.length ? function(e, r) {
            return n(t(e), r)
        } : t)
    }, Go.shuffle = function(n) {
        for (var t, e, r = n.length; r;) e = 0 | Math.random() * r--, t = n[r], n[r] = n[e], n[e] = t;
        return n
    }, Go.permute = function(n, t) {
        for (var e = t.length, r = new Array(e); e--;) r[e] = n[t[e]];
        return r
    }, Go.pairs = function(n) {
        for (var t, e = 0, r = n.length - 1, u = n[0], i = new Array(0 > r ? 0 : r); r > e;) i[e] = [t = u, u = n[++e]];
        return i
    }, Go.zip = function() {
        if (!(u = arguments.length)) return [];
        for (var n = -1, t = Go.min(arguments, r), e = new Array(t); ++n < t;)
            for (var u, i = -1, o = e[n] = new Array(u); ++i < u;) o[i] = arguments[i][n];
        return e
    }, Go.transpose = function(n) {
        return Go.zip.apply(Go, n)
    }, Go.keys = function(n) {
        var t = [];
        for (var e in n) t.push(e);
        return t
    }, Go.values = function(n) {
        var t = [];
        for (var e in n) t.push(n[e]);
        return t
    }, Go.entries = function(n) {
        var t = [];
        for (var e in n) t.push({
            key: e,
            value: n[e]
        });
        return t
    }, Go.merge = function(n) {
        for (var t, e, r, u = n.length, i = -1, o = 0; ++i < u;) o += n[i].length;
        for (e = new Array(o); --u >= 0;)
            for (r = n[u], t = r.length; --t >= 0;) e[--o] = r[t];
        return e
    };
    var fa = Math.abs;
    Go.range = function(n, t, e) {
        if (arguments.length < 3 && (e = 1, arguments.length < 2 && (t = n, n = 0)), 1 / 0 === (t - n) / e) throw new Error("infinite range");
        var r, i = [],
            o = u(fa(e)),
            a = -1;
        if (n *= o, t *= o, e *= o, 0 > e)
            for (;
                (r = n + e * ++a) > t;) i.push(r / o);
        else
            for (;
                (r = n + e * ++a) < t;) i.push(r / o);
        return i
    }, Go.map = function(n) {
        var t = new o;
        if (n instanceof o) n.forEach(function(n, e) {
            t.set(n, e)
        });
        else
            for (var e in n) t.set(e, n[e]);
        return t
    }, i(o, {
        has: a,
        get: function(n) {
            return this[ha + n]
        },
        set: function(n, t) {
            return this[ha + n] = t
        },
        remove: c,
        keys: s,
        values: function() {
            var n = [];
            return this.forEach(function(t, e) {
                n.push(e)
            }), n
        },
        entries: function() {
            var n = [];
            return this.forEach(function(t, e) {
                n.push({
                    key: t,
                    value: e
                })
            }), n
        },
        size: l,
        empty: f,
        forEach: function(n) {
            for (var t in this) t.charCodeAt(0) === ga && n.call(this, t.substring(1), this[t])
        }
    });
    var ha = "\x00",
        ga = ha.charCodeAt(0);
    Go.nest = function() {
        function n(t, a, c) {
            if (c >= i.length) return r ? r.call(u, a) : e ? a.sort(e) : a;
            for (var s, l, f, h, g = -1, p = a.length, v = i[c++], d = new o; ++g < p;)(h = d.get(s = v(l = a[g]))) ? h.push(l) : d.set(s, [l]);
            return t ? (l = t(), f = function(e, r) {
                l.set(e, n(t, r, c))
            }) : (l = {}, f = function(e, r) {
                l[e] = n(t, r, c)
            }), d.forEach(f), l
        }

        function t(n, e) {
            if (e >= i.length) return n;
            var r = [],
                u = a[e++];
            return n.forEach(function(n, u) {
                r.push({
                    key: n,
                    values: t(u, e)
                })
            }), u ? r.sort(function(n, t) {
                return u(n.key, t.key)
            }) : r
        }
        var e, r, u = {}, i = [],
            a = [];
        return u.map = function(t, e) {
            return n(e, t, 0)
        }, u.entries = function(e) {
            return t(n(Go.map, e, 0), 0)
        }, u.key = function(n) {
            return i.push(n), u
        }, u.sortKeys = function(n) {
            return a[i.length - 1] = n, u
        }, u.sortValues = function(n) {
            return e = n, u
        }, u.rollup = function(n) {
            return r = n, u
        }, u
    }, Go.set = function(n) {
        var t = new h;
        if (n)
            for (var e = 0, r = n.length; r > e; ++e) t.add(n[e]);
        return t
    }, i(h, {
        has: a,
        add: function(n) {
            return this[ha + n] = !0, n
        },
        remove: function(n) {
            return n = ha + n, n in this && delete this[n]
        },
        values: s,
        size: l,
        empty: f,
        forEach: function(n) {
            for (var t in this) t.charCodeAt(0) === ga && n.call(this, t.substring(1))
        }
    }), Go.behavior = {}, Go.rebind = function(n, t) {
        for (var e, r = 1, u = arguments.length; ++r < u;) n[e = arguments[r]] = g(n, t, t[e]);
        return n
    };
    var pa = ["webkit", "ms", "moz", "Moz", "o", "O"];
    Go.dispatch = function() {
        for (var n = new d, t = -1, e = arguments.length; ++t < e;) n[arguments[t]] = m(n);
        return n
    }, d.prototype.on = function(n, t) {
        var e = n.indexOf("."),
            r = "";
        if (e >= 0 && (r = n.substring(e + 1), n = n.substring(0, e)), n) return arguments.length < 2 ? this[n].on(r) : this[n].on(r, t);
        if (2 === arguments.length) {
            if (null == t)
                for (n in this) this.hasOwnProperty(n) && this[n].on(r, null);
            return this
        }
    }, Go.event = null, Go.requote = function(n) {
        return n.replace(va, "\\$&")
    };
    var va = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,
        da = {}.__proto__ ? function(n, t) {
            n.__proto__ = t
        } : function(n, t) {
            for (var e in t) n[e] = t[e]
        }, ma = function(n, t) {
            return t.querySelector(n)
        }, ya = function(n, t) {
            return t.querySelectorAll(n)
        }, xa = ta[p(ta, "matchesSelector")],
        Ma = function(n, t) {
            return xa.call(n, t)
        };
    "function" == typeof Sizzle && (ma = function(n, t) {
        return Sizzle(n, t)[0] || null
    }, ya = Sizzle, Ma = Sizzle.matchesSelector), Go.selection = function() {
        return Sa
    };
    var _a = Go.selection.prototype = [];
    _a.select = function(n) {
        var t, e, r, u, i = [];
        n = b(n);
        for (var o = -1, a = this.length; ++o < a;) {
            i.push(t = []), t.parentNode = (r = this[o]).parentNode;
            for (var c = -1, s = r.length; ++c < s;)(u = r[c]) ? (t.push(e = n.call(u, u.__data__, c, o)), e && "__data__" in u && (e.__data__ = u.__data__)) : t.push(null)
        }
        return _(i)
    }, _a.selectAll = function(n) {
        var t, e, r = [];
        n = w(n);
        for (var u = -1, i = this.length; ++u < i;)
            for (var o = this[u], a = -1, c = o.length; ++a < c;)(e = o[a]) && (r.push(t = Qo(n.call(e, e.__data__, a, u))), t.parentNode = e);
        return _(r)
    };
    var ba = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: "http://www.w3.org/1999/xhtml",
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/"
    };
    Go.ns = {
        prefix: ba,
        qualify: function(n) {
            var t = n.indexOf(":"),
                e = n;
            return t >= 0 && (e = n.substring(0, t), n = n.substring(t + 1)), ba.hasOwnProperty(e) ? {
                space: ba[e],
                local: n
            } : n
        }
    }, _a.attr = function(n, t) {
        if (arguments.length < 2) {
            if ("string" == typeof n) {
                var e = this.node();
                return n = Go.ns.qualify(n), n.local ? e.getAttributeNS(n.space, n.local) : e.getAttribute(n)
            }
            for (t in n) this.each(S(t, n[t]));
            return this
        }
        return this.each(S(n, t))
    }, _a.classed = function(n, t) {
        if (arguments.length < 2) {
            if ("string" == typeof n) {
                var e = this.node(),
                    r = (n = A(n)).length,
                    u = -1;
                if (t = e.classList) {
                    for (; ++u < r;)
                        if (!t.contains(n[u])) return !1
                } else
                    for (t = e.getAttribute("class"); ++u < r;)
                        if (!E(n[u]).test(t)) return !1; return !0
            }
            for (t in n) this.each(C(t, n[t]));
            return this
        }
        return this.each(C(n, t))
    }, _a.style = function(n, t, e) {
        var r = arguments.length;
        if (3 > r) {
            if ("string" != typeof n) {
                2 > r && (t = "");
                for (e in n) this.each(L(e, n[e], t));
                return this
            }
            if (2 > r) return ea.getComputedStyle(this.node(), null).getPropertyValue(n);
            e = ""
        }
        return this.each(L(n, t, e))
    }, _a.property = function(n, t) {
        if (arguments.length < 2) {
            if ("string" == typeof n) return this.node()[n];
            for (t in n) this.each(T(t, n[t]));
            return this
        }
        return this.each(T(n, t))
    }, _a.text = function(n) {
        return arguments.length ? this.each("function" == typeof n ? function() {
            var t = n.apply(this, arguments);
            this.textContent = null == t ? "" : t
        } : null == n ? function() {
            this.textContent = ""
        } : function() {
            this.textContent = n
        }) : this.node().textContent
    }, _a.html = function(n) {
        return arguments.length ? this.each("function" == typeof n ? function() {
            var t = n.apply(this, arguments);
            this.innerHTML = null == t ? "" : t
        } : null == n ? function() {
            this.innerHTML = ""
        } : function() {
            this.innerHTML = n
        }) : this.node().innerHTML
    }, _a.append = function(n) {
        return n = q(n), this.select(function() {
            return this.appendChild(n.apply(this, arguments))
        })
    }, _a.insert = function(n, t) {
        return n = q(n), t = b(t), this.select(function() {
            return this.insertBefore(n.apply(this, arguments), t.apply(this, arguments) || null)
        })
    }, _a.remove = function() {
        return this.each(function() {
            var n = this.parentNode;
            n && n.removeChild(this)
        })
    }, _a.data = function(n, t) {
        function e(n, e) {
            var r, u, i, a = n.length,
                f = e.length,
                h = Math.min(a, f),
                g = new Array(f),
                p = new Array(f),
                v = new Array(a);
            if (t) {
                var d, m = new o,
                    y = new o,
                    x = [];
                for (r = -1; ++r < a;) d = t.call(u = n[r], u.__data__, r), m.has(d) ? v[r] = u : m.set(d, u), x.push(d);
                for (r = -1; ++r < f;) d = t.call(e, i = e[r], r), (u = m.get(d)) ? (g[r] = u, u.__data__ = i) : y.has(d) || (p[r] = z(i)), y.set(d, i), m.remove(d);
                for (r = -1; ++r < a;) m.has(x[r]) && (v[r] = n[r])
            } else {
                for (r = -1; ++r < h;) u = n[r], i = e[r], u ? (u.__data__ = i, g[r] = u) : p[r] = z(i);
                for (; f > r; ++r) p[r] = z(e[r]);
                for (; a > r; ++r) v[r] = n[r]
            }
            p.update = g, p.parentNode = g.parentNode = v.parentNode = n.parentNode, c.push(p), s.push(g), l.push(v)
        }
        var r, u, i = -1,
            a = this.length;
        if (!arguments.length) {
            for (n = new Array(a = (r = this[0]).length); ++i < a;)(u = r[i]) && (n[i] = u.__data__);
            return n
        }
        var c = U([]),
            s = _([]),
            l = _([]);
        if ("function" == typeof n)
            for (; ++i < a;) e(r = this[i], n.call(r, r.parentNode.__data__, i));
        else
            for (; ++i < a;) e(r = this[i], n);
        return s.enter = function() {
            return c
        }, s.exit = function() {
            return l
        }, s
    }, _a.datum = function(n) {
        return arguments.length ? this.property("__data__", n) : this.property("__data__")
    }, _a.filter = function(n) {
        var t, e, r, u = [];
        "function" != typeof n && (n = R(n));
        for (var i = 0, o = this.length; o > i; i++) {
            u.push(t = []), t.parentNode = (e = this[i]).parentNode;
            for (var a = 0, c = e.length; c > a; a++)(r = e[a]) && n.call(r, r.__data__, a, i) && t.push(r)
        }
        return _(u)
    }, _a.order = function() {
        for (var n = -1, t = this.length; ++n < t;)
            for (var e, r = this[n], u = r.length - 1, i = r[u]; --u >= 0;)(e = r[u]) && (i && i !== e.nextSibling && i.parentNode.insertBefore(e, i), i = e);
        return this
    }, _a.sort = function(n) {
        n = D.apply(this, arguments);
        for (var t = -1, e = this.length; ++t < e;) this[t].sort(n);
        return this.order()
    }, _a.each = function(n) {
        return P(this, function(t, e, r) {
            n.call(t, t.__data__, e, r)
        })
    }, _a.call = function(n) {
        var t = Qo(arguments);
        return n.apply(t[0] = this, t), this
    }, _a.empty = function() {
        return !this.node()
    }, _a.node = function() {
        for (var n = 0, t = this.length; t > n; n++)
            for (var e = this[n], r = 0, u = e.length; u > r; r++) {
                var i = e[r];
                if (i) return i
            }
        return null
    }, _a.size = function() {
        var n = 0;
        return this.each(function() {
            ++n
        }), n
    };
    var wa = [];
    Go.selection.enter = U, Go.selection.enter.prototype = wa, wa.append = _a.append, wa.empty = _a.empty, wa.node = _a.node, wa.call = _a.call, wa.size = _a.size, wa.select = function(n) {
        for (var t, e, r, u, i, o = [], a = -1, c = this.length; ++a < c;) {
            r = (u = this[a]).update, o.push(t = []), t.parentNode = u.parentNode;
            for (var s = -1, l = u.length; ++s < l;)(i = u[s]) ? (t.push(r[s] = e = n.call(u.parentNode, i.__data__, s, a)), e.__data__ = i.__data__) : t.push(null)
        }
        return _(o)
    }, wa.insert = function(n, t) {
        return arguments.length < 2 && (t = j(this)), _a.insert.call(this, n, t)
    }, _a.transition = function() {
        for (var n, t, e = Ls || ++Ds, r = [], u = Ts || {
                time: Date.now(),
                ease: wu,
                delay: 0,
                duration: 250
            }, i = -1, o = this.length; ++i < o;) {
            r.push(n = []);
            for (var a = this[i], c = -1, s = a.length; ++c < s;)(t = a[c]) && Yo(t, c, e, u), n.push(t)
        }
        return Fo(r, e)
    }, _a.interrupt = function() {
        return this.each(H)
    }, Go.select = function(n) {
        var t = ["string" == typeof n ? ma(n, na) : n];
        return t.parentNode = ta, _([t])
    }, Go.selectAll = function(n) {
        var t = Qo("string" == typeof n ? ya(n, na) : n);
        return t.parentNode = ta, _([t])
    };
    var Sa = Go.select(ta);
    _a.on = function(n, t, e) {
        var r = arguments.length;
        if (3 > r) {
            if ("string" != typeof n) {
                2 > r && (t = !1);
                for (e in n) this.each(F(e, n[e], t));
                return this
            }
            if (2 > r) return (r = this.node()["__on" + n]) && r._;
            e = !1
        }
        return this.each(F(n, t, e))
    };
    var ka = Go.map({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    });
    ka.forEach(function(n) {
        "on" + n in na && ka.remove(n)
    });
    var Ea = "onselectstart" in na ? null : p(ta.style, "userSelect"),
        Aa = 0;
    Go.mouse = function(n) {
        return Z(n, x())
    }, Go.touches = function(n, t) {
        return arguments.length < 2 && (t = x().touches), t ? Qo(t).map(function(t) {
            var e = Z(n, t);
            return e.identifier = t.identifier, e
        }) : []
    }, Go.behavior.drag = function() {
        function n() {
            this.on("mousedown.drag", u).on("touchstart.drag", i)
        }

        function t(n, t, u, i, o) {
            return function() {
                function a() {
                    var n, e, r = t(h, v);
                    r && (n = r[0] - x[0], e = r[1] - x[1], p |= n | e, x = r, g({
                        type: "drag",
                        x: r[0] + s[0],
                        y: r[1] + s[1],
                        dx: n,
                        dy: e
                    }))
                }

                function c() {
                    t(h, v) && (m.on(i + d, null).on(o + d, null), y(p && Go.event.target === f), g({
                        type: "dragend"
                    }))
                }
                var s, l = this,
                    f = Go.event.target,
                    h = l.parentNode,
                    g = e.of(l, arguments),
                    p = 0,
                    v = n(),
                    d = ".drag" + (null == v ? "" : "-" + v),
                    m = Go.select(u()).on(i + d, a).on(o + d, c),
                    y = Y(),
                    x = t(h, v);
                r ? (s = r.apply(l, arguments), s = [s.x - x[0], s.y - x[1]]) : s = [0, 0], g({
                    type: "dragstart"
                })
            }
        }
        var e = M(n, "drag", "dragstart", "dragend"),
            r = null,
            u = t(v, Go.mouse, X, "mousemove", "mouseup"),
            i = t(V, Go.touch, $, "touchmove", "touchend");
        return n.origin = function(t) {
            return arguments.length ? (r = t, n) : r
        }, Go.rebind(n, e, "on")
    };
    var Ca = Math.PI,
        Na = 2 * Ca,
        La = Ca / 2,
        Ta = 1e-6,
        qa = Ta * Ta,
        za = Ca / 180,
        Ra = 180 / Ca,
        Da = Math.SQRT2,
        Pa = 2,
        Ua = 4;
    Go.interpolateZoom = function(n, t) {
        function e(n) {
            var t = n * y;
            if (m) {
                var e = Q(v),
                    o = i / (Pa * h) * (e * nt(Da * t + v) - K(v));
                return [r + o * s, u + o * l, i * e / Q(Da * t + v)]
            }
            return [r + n * s, u + n * l, i * Math.exp(Da * t)]
        }
        var r = n[0],
            u = n[1],
            i = n[2],
            o = t[0],
            a = t[1],
            c = t[2],
            s = o - r,
            l = a - u,
            f = s * s + l * l,
            h = Math.sqrt(f),
            g = (c * c - i * i + Ua * f) / (2 * i * Pa * h),
            p = (c * c - i * i - Ua * f) / (2 * c * Pa * h),
            v = Math.log(Math.sqrt(g * g + 1) - g),
            d = Math.log(Math.sqrt(p * p + 1) - p),
            m = d - v,
            y = (m || Math.log(c / i)) / Da;
        return e.duration = 1e3 * y, e
    }, Go.behavior.zoom = function() {
        function n(n) {
            n.on(A, s).on(Fa + ".zoom", f).on(C, h).on("dblclick.zoom", g).on(L, l)
        }

        function t(n) {
            return [(n[0] - S.x) / S.k, (n[1] - S.y) / S.k]
        }

        function e(n) {
            return [n[0] * S.k + S.x, n[1] * S.k + S.y]
        }

        function r(n) {
            S.k = Math.max(E[0], Math.min(E[1], n))
        }

        function u(n, t) {
            t = e(t), S.x += n[0] - t[0], S.y += n[1] - t[1]
        }

        function i() {
            _ && _.domain(x.range().map(function(n) {
                return (n - S.x) / S.k
            }).map(x.invert)), w && w.domain(b.range().map(function(n) {
                return (n - S.y) / S.k
            }).map(b.invert))
        }

        function o(n) {
            n({
                type: "zoomstart"
            })
        }

        function a(n) {
            i(), n({
                type: "zoom",
                scale: S.k,
                translate: [S.x, S.y]
            })
        }

        function c(n) {
            n({
                type: "zoomend"
            })
        }

        function s() {
            function n() {
                l = 1, u(Go.mouse(r), g), a(s)
            }

            function e() {
                f.on(C, ea === r ? h : null).on(N, null), p(l && Go.event.target === i), c(s)
            }
            var r = this,
                i = Go.event.target,
                s = T.of(r, arguments),
                l = 0,
                f = Go.select(ea).on(C, n).on(N, e),
                g = t(Go.mouse(r)),
                p = Y();
            H.call(r), o(s)
        }

        function l() {
            function n() {
                var n = Go.touches(g);
                return h = S.k, n.forEach(function(n) {
                    n.identifier in v && (v[n.identifier] = t(n))
                }), n
            }

            function e() {
                for (var t = Go.event.changedTouches, e = 0, i = t.length; i > e; ++e) v[t[e].identifier] = null;
                var o = n(),
                    c = Date.now();
                if (1 === o.length) {
                    if (500 > c - m) {
                        var s = o[0],
                            l = v[s.identifier];
                        r(2 * S.k), u(s, l), y(), a(p)
                    }
                    m = c
                } else if (o.length > 1) {
                    var s = o[0],
                        f = o[1],
                        h = s[0] - f[0],
                        g = s[1] - f[1];
                    d = h * h + g * g
                }
            }

            function i() {
                for (var n, t, e, i, o = Go.touches(g), c = 0, s = o.length; s > c; ++c, i = null)
                    if (e = o[c], i = v[e.identifier]) {
                        if (t) break;
                        n = e, t = i
                    }
                if (i) {
                    var l = (l = e[0] - n[0]) * l + (l = e[1] - n[1]) * l,
                        f = d && Math.sqrt(l / d);
                    n = [(n[0] + e[0]) / 2, (n[1] + e[1]) / 2], t = [(t[0] + i[0]) / 2, (t[1] + i[1]) / 2], r(f * h)
                }
                m = null, u(n, t), a(p)
            }

            function f() {
                if (Go.event.touches.length) {
                    for (var t = Go.event.changedTouches, e = 0, r = t.length; r > e; ++e) delete v[t[e].identifier];
                    for (var u in v) return void n()
                }
                b.on(x, null), w.on(A, s).on(L, l), k(), c(p)
            }
            var h, g = this,
                p = T.of(g, arguments),
                v = {}, d = 0,
                x = ".zoom-" + Go.event.changedTouches[0].identifier,
                M = "touchmove" + x,
                _ = "touchend" + x,
                b = Go.select(Go.event.target).on(M, i).on(_, f),
                w = Go.select(g).on(A, null).on(L, e),
                k = Y();
            H.call(g), e(), o(p)
        }

        function f() {
            var n = T.of(this, arguments);
            d ? clearTimeout(d) : (H.call(this), o(n)), d = setTimeout(function() {
                d = null, c(n)
            }, 50), y();
            var e = v || Go.mouse(this);
            p || (p = t(e)), r(Math.pow(2, .002 * ja()) * S.k), u(e, p), a(n)
        }

        function h() {
            p = null
        }

        function g() {
            var n = T.of(this, arguments),
                e = Go.mouse(this),
                i = t(e),
                s = Math.log(S.k) / Math.LN2;
            o(n), r(Math.pow(2, Go.event.shiftKey ? Math.ceil(s) - 1 : Math.floor(s) + 1)), u(e, i), a(n), c(n)
        }
        var p, v, d, m, x, _, b, w, S = {
                x: 0,
                y: 0,
                k: 1
            }, k = [960, 500],
            E = Ha,
            A = "mousedown.zoom",
            C = "mousemove.zoom",
            N = "mouseup.zoom",
            L = "touchstart.zoom",
            T = M(n, "zoomstart", "zoom", "zoomend");
        return n.event = function(n) {
            n.each(function() {
                var n = T.of(this, arguments),
                    t = S;
                Ls ? Go.select(this).transition().each("start.zoom", function() {
                    S = this.__chart__ || {
                        x: 0,
                        y: 0,
                        k: 1
                    }, o(n)
                }).tween("zoom:zoom", function() {
                    var e = k[0],
                        r = k[1],
                        u = e / 2,
                        i = r / 2,
                        o = Go.interpolateZoom([(u - S.x) / S.k, (i - S.y) / S.k, e / S.k], [(u - t.x) / t.k, (i - t.y) / t.k, e / t.k]);
                    return function(t) {
                        var r = o(t),
                            c = e / r[2];
                        this.__chart__ = S = {
                            x: u - r[0] * c,
                            y: i - r[1] * c,
                            k: c
                        }, a(n)
                    }
                }).each("end.zoom", function() {
                    c(n)
                }) : (this.__chart__ = S, o(n), a(n), c(n))
            })
        }, n.translate = function(t) {
            return arguments.length ? (S = {
                x: +t[0],
                y: +t[1],
                k: S.k
            }, i(), n) : [S.x, S.y]
        }, n.scale = function(t) {
            return arguments.length ? (S = {
                x: S.x,
                y: S.y,
                k: +t
            }, i(), n) : S.k
        }, n.scaleExtent = function(t) {
            return arguments.length ? (E = null == t ? Ha : [+t[0], +t[1]], n) : E
        }, n.center = function(t) {
            return arguments.length ? (v = t && [+t[0], +t[1]], n) : v
        }, n.size = function(t) {
            return arguments.length ? (k = t && [+t[0], +t[1]], n) : k
        }, n.x = function(t) {
            return arguments.length ? (_ = t, x = t.copy(), S = {
                x: 0,
                y: 0,
                k: 1
            }, n) : _
        }, n.y = function(t) {
            return arguments.length ? (w = t, b = t.copy(), S = {
                x: 0,
                y: 0,
                k: 1
            }, n) : w
        }, Go.rebind(n, T, "on")
    };
    var ja, Ha = [0, 1 / 0],
        Fa = "onwheel" in na ? (ja = function() {
            return -Go.event.deltaY * (Go.event.deltaMode ? 120 : 1)
        }, "wheel") : "onmousewheel" in na ? (ja = function() {
            return Go.event.wheelDelta
        }, "mousewheel") : (ja = function() {
            return -Go.event.detail
        }, "MozMousePixelScroll");
    et.prototype.toString = function() {
        return this.rgb() + ""
    }, Go.hsl = function(n, t, e) {
        return 1 === arguments.length ? n instanceof ut ? rt(n.h, n.s, n.l) : _t("" + n, bt, rt) : rt(+n, +t, +e)
    };
    var Oa = ut.prototype = new et;
    Oa.brighter = function(n) {
        return n = Math.pow(.7, arguments.length ? n : 1), rt(this.h, this.s, this.l / n)
    }, Oa.darker = function(n) {
        return n = Math.pow(.7, arguments.length ? n : 1), rt(this.h, this.s, n * this.l)
    }, Oa.rgb = function() {
        return it(this.h, this.s, this.l)
    }, Go.hcl = function(n, t, e) {
        return 1 === arguments.length ? n instanceof at ? ot(n.h, n.c, n.l) : n instanceof lt ? ht(n.l, n.a, n.b) : ht((n = wt((n = Go.rgb(n)).r, n.g, n.b)).l, n.a, n.b) : ot(+n, +t, +e)
    };
    var Ia = at.prototype = new et;
    Ia.brighter = function(n) {
        return ot(this.h, this.c, Math.min(100, this.l + Ya * (arguments.length ? n : 1)))
    }, Ia.darker = function(n) {
        return ot(this.h, this.c, Math.max(0, this.l - Ya * (arguments.length ? n : 1)))
    }, Ia.rgb = function() {
        return ct(this.h, this.c, this.l).rgb()
    }, Go.lab = function(n, t, e) {
        return 1 === arguments.length ? n instanceof lt ? st(n.l, n.a, n.b) : n instanceof at ? ct(n.l, n.c, n.h) : wt((n = Go.rgb(n)).r, n.g, n.b) : st(+n, +t, +e)
    };
    var Ya = 18,
        Za = .95047,
        Va = 1,
        $a = 1.08883,
        Xa = lt.prototype = new et;
    Xa.brighter = function(n) {
        return st(Math.min(100, this.l + Ya * (arguments.length ? n : 1)), this.a, this.b)
    }, Xa.darker = function(n) {
        return st(Math.max(0, this.l - Ya * (arguments.length ? n : 1)), this.a, this.b)
    }, Xa.rgb = function() {
        return ft(this.l, this.a, this.b)
    }, Go.rgb = function(n, t, e) {
        return 1 === arguments.length ? n instanceof xt ? yt(n.r, n.g, n.b) : _t("" + n, yt, it) : yt(~~n, ~~t, ~~e)
    };
    var Ba = xt.prototype = new et;
    Ba.brighter = function(n) {
        n = Math.pow(.7, arguments.length ? n : 1);
        var t = this.r,
            e = this.g,
            r = this.b,
            u = 30;
        return t || e || r ? (t && u > t && (t = u), e && u > e && (e = u), r && u > r && (r = u), yt(Math.min(255, ~~ (t / n)), Math.min(255, ~~ (e / n)), Math.min(255, ~~ (r / n)))) : yt(u, u, u)
    }, Ba.darker = function(n) {
        return n = Math.pow(.7, arguments.length ? n : 1), yt(~~(n * this.r), ~~ (n * this.g), ~~ (n * this.b))
    }, Ba.hsl = function() {
        return bt(this.r, this.g, this.b)
    }, Ba.toString = function() {
        return "#" + Mt(this.r) + Mt(this.g) + Mt(this.b)
    };
    var Ja = Go.map({
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    });
    Ja.forEach(function(n, t) {
        Ja.set(n, dt(t))
    }), Go.functor = Et, Go.xhr = Ct(At), Go.dsv = function(n, t) {
        function e(n, e, i) {
            arguments.length < 3 && (i = e, e = null);
            var o = Nt(n, t, null == e ? r : u(e), i);
            return o.row = function(n) {
                return arguments.length ? o.response(null == (e = n) ? r : u(n)) : e
            }, o
        }

        function r(n) {
            return e.parse(n.responseText)
        }

        function u(n) {
            return function(t) {
                return e.parse(t.responseText, n)
            }
        }

        function i(t) {
            return t.map(o).join(n)
        }

        function o(n) {
            return a.test(n) ? '"' + n.replace(/\"/g, '""') + '"' : n
        }
        var a = new RegExp('["' + n + "\n]"),
            c = n.charCodeAt(0);
        return e.parse = function(n, t) {
            var r;
            return e.parseRows(n, function(n, e) {
                if (r) return r(n, e - 1);
                var u = new Function("d", "return {" + n.map(function(n, t) {
                    return JSON.stringify(n) + ": d[" + t + "]"
                }).join(",") + "}");
                r = t ? function(n, e) {
                    return t(u(n), e)
                } : u
            })
        }, e.parseRows = function(n, t) {
            function e() {
                if (l >= s) return o;
                if (u) return u = !1, i;
                var t = l;
                if (34 === n.charCodeAt(t)) {
                    for (var e = t; e++ < s;)
                        if (34 === n.charCodeAt(e)) {
                            if (34 !== n.charCodeAt(e + 1)) break;
                            ++e
                        }
                    l = e + 2;
                    var r = n.charCodeAt(e + 1);
                    return 13 === r ? (u = !0, 10 === n.charCodeAt(e + 2) && ++l) : 10 === r && (u = !0), n.substring(t + 1, e).replace(/""/g, '"')
                }
                for (; s > l;) {
                    var r = n.charCodeAt(l++),
                        a = 1;
                    if (10 === r) u = !0;
                    else if (13 === r) u = !0, 10 === n.charCodeAt(l) && (++l, ++a);
                    else if (r !== c) continue;
                    return n.substring(t, l - a)
                }
                return n.substring(t)
            }
            for (var r, u, i = {}, o = {}, a = [], s = n.length, l = 0, f = 0;
                (r = e()) !== o;) {
                for (var h = []; r !== i && r !== o;) h.push(r), r = e();
                (!t || (h = t(h, f++))) && a.push(h)
            }
            return a
        }, e.format = function(t) {
            if (Array.isArray(t[0])) return e.formatRows(t);
            var r = new h,
                u = [];
            return t.forEach(function(n) {
                for (var t in n) r.has(t) || u.push(r.add(t))
            }), [u.map(o).join(n)].concat(t.map(function(t) {
                return u.map(function(n) {
                    return o(t[n])
                }).join(n)
            })).join("\n")
        }, e.formatRows = function(n) {
            return n.map(i).join("\n")
        }, e
    }, Go.csv = Go.dsv(",", "text/csv"), Go.tsv = Go.dsv("    ", "text/tab-separated-values"), Go.touch = function(n, t, e) {
        if (arguments.length < 3 && (e = t, t = x().changedTouches), t)
            for (var r, u = 0, i = t.length; i > u; ++u)
                if ((r = t[u]).identifier === e) return Z(n, r)
    };
    var Wa, Ga, Ka, Qa, nc, tc = ea[p(ea, "requestAnimationFrame")] || function(n) {
            setTimeout(n, 17)
        };
    Go.timer = function(n, t, e) {
        var r = arguments.length;
        2 > r && (t = 0), 3 > r && (e = Date.now());
        var u = e + t,
            i = {
                c: n,
                t: u,
                f: !1,
                n: null
            };
        Ga ? Ga.n = i : Wa = i, Ga = i, Ka || (Qa = clearTimeout(Qa), Ka = 1, tc(Tt))
    }, Go.timer.flush = function() {
        qt(), zt()
    }, Go.round = function(n, t) {
        return t ? Math.round(n * (t = Math.pow(10, t))) / t : Math.round(n)
    };
    var ec = ["y", "z", "a", "f", "p", "n", "\xb5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(Dt);
    Go.formatPrefix = function(n, t) {
        var e = 0;
        return n && (0 > n && (n *= -1), t && (n = Go.round(n, Rt(n, t))), e = 1 + Math.floor(1e-12 + Math.log(n) / Math.LN10), e = Math.max(-24, Math.min(24, 3 * Math.floor((e - 1) / 3)))), ec[8 + e / 3]
    };
    var rc = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,
        uc = Go.map({
            b: function(n) {
                return n.toString(2)
            },
            c: function(n) {
                return String.fromCharCode(n)
            },
            o: function(n) {
                return n.toString(8)
            },
            x: function(n) {
                return n.toString(16)
            },
            X: function(n) {
                return n.toString(16).toUpperCase()
            },
            g: function(n, t) {
                return n.toPrecision(t)
            },
            e: function(n, t) {
                return n.toExponential(t)
            },
            f: function(n, t) {
                return n.toFixed(t)
            },
            r: function(n, t) {
                return (n = Go.round(n, Rt(n, t))).toFixed(Math.max(0, Math.min(20, Rt(n * (1 + 1e-15), t))))
            }
        }),
        ic = Go.time = {}, oc = Date;
    jt.prototype = {
        getDate: function() {
            return this._.getUTCDate()
        },
        getDay: function() {
            return this._.getUTCDay()
        },
        getFullYear: function() {
            return this._.getUTCFullYear()
        },
        getHours: function() {
            return this._.getUTCHours()
        },
        getMilliseconds: function() {
            return this._.getUTCMilliseconds()
        },
        getMinutes: function() {
            return this._.getUTCMinutes()
        },
        getMonth: function() {
            return this._.getUTCMonth()
        },
        getSeconds: function() {
            return this._.getUTCSeconds()
        },
        getTime: function() {
            return this._.getTime()
        },
        getTimezoneOffset: function() {
            return 0
        },
        valueOf: function() {
            return this._.valueOf()
        },
        setDate: function() {
            ac.setUTCDate.apply(this._, arguments)
        },
        setDay: function() {
            ac.setUTCDay.apply(this._, arguments)
        },
        setFullYear: function() {
            ac.setUTCFullYear.apply(this._, arguments)
        },
        setHours: function() {
            ac.setUTCHours.apply(this._, arguments)
        },
        setMilliseconds: function() {
            ac.setUTCMilliseconds.apply(this._, arguments)
        },
        setMinutes: function() {
            ac.setUTCMinutes.apply(this._, arguments)
        },
        setMonth: function() {
            ac.setUTCMonth.apply(this._, arguments)
        },
        setSeconds: function() {
            ac.setUTCSeconds.apply(this._, arguments)
        },
        setTime: function() {
            ac.setTime.apply(this._, arguments)
        }
    };
    var ac = Date.prototype;
    ic.year = Ht(function(n) {
        return n = ic.day(n), n.setMonth(0, 1), n
    }, function(n, t) {
        n.setFullYear(n.getFullYear() + t)
    }, function(n) {
        return n.getFullYear()
    }), ic.years = ic.year.range, ic.years.utc = ic.year.utc.range, ic.day = Ht(function(n) {
        var t = new oc(2e3, 0);
        return t.setFullYear(n.getFullYear(), n.getMonth(), n.getDate()), t
    }, function(n, t) {
        n.setDate(n.getDate() + t)
    }, function(n) {
        return n.getDate() - 1
    }), ic.days = ic.day.range, ic.days.utc = ic.day.utc.range, ic.dayOfYear = function(n) {
        var t = ic.year(n);
        return Math.floor((n - t - 6e4 * (n.getTimezoneOffset() - t.getTimezoneOffset())) / 864e5)
    }, ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].forEach(function(n, t) {
        t = 7 - t;
        var e = ic[n] = Ht(function(n) {
            return (n = ic.day(n)).setDate(n.getDate() - (n.getDay() + t) % 7), n
        }, function(n, t) {
            n.setDate(n.getDate() + 7 * Math.floor(t))
        }, function(n) {
            var e = ic.year(n).getDay();
            return Math.floor((ic.dayOfYear(n) + (e + t) % 7) / 7) - (e !== t)
        });
        ic[n + "s"] = e.range, ic[n + "s"].utc = e.utc.range, ic[n + "OfYear"] = function(n) {
            var e = ic.year(n).getDay();
            return Math.floor((ic.dayOfYear(n) + (e + t) % 7) / 7)
        }
    }), ic.week = ic.sunday, ic.weeks = ic.sunday.range, ic.weeks.utc = ic.sunday.utc.range, ic.weekOfYear = ic.sundayOfYear;
    var cc = {
        "-": "",
        _: " ",
        0: "0"
    }, sc = /^\s*\d+/,
        lc = /^%/;
    Go.locale = function(n) {
        return {
            numberFormat: Pt(n),
            timeFormat: Ot(n)
        }
    };
    var fc = Go.locale({
        decimal: ".",
        thousands: ",",
        grouping: [3],
        currency: ["$", ""],
        dateTime: "%a %b %e %X %Y",
        date: "%m/%d/%Y",
        time: "%H:%M:%S",
        periods: ["AM", "PM"],
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    });
    Go.format = fc.numberFormat, Go.geo = {}, ce.prototype = {
        s: 0,
        t: 0,
        add: function(n) {
            se(n, this.t, hc), se(hc.s, this.s, this), this.s ? this.t += hc.t : this.s = hc.t
        },
        reset: function() {
            this.s = this.t = 0
        },
        valueOf: function() {
            return this.s
        }
    };
    var hc = new ce;
    Go.geo.stream = function(n, t) {
        n && gc.hasOwnProperty(n.type) ? gc[n.type](n, t) : le(n, t)
    };
    var gc = {
        Feature: function(n, t) {
            le(n.geometry, t)
        },
        FeatureCollection: function(n, t) {
            for (var e = n.features, r = -1, u = e.length; ++r < u;) le(e[r].geometry, t)
        }
    }, pc = {
            Sphere: function(n, t) {
                t.sphere()
            },
            Point: function(n, t) {
                n = n.coordinates, t.point(n[0], n[1], n[2])
            },
            MultiPoint: function(n, t) {
                for (var e = n.coordinates, r = -1, u = e.length; ++r < u;) n = e[r], t.point(n[0], n[1], n[2])
            },
            LineString: function(n, t) {
                fe(n.coordinates, t, 0)
            },
            MultiLineString: function(n, t) {
                for (var e = n.coordinates, r = -1, u = e.length; ++r < u;) fe(e[r], t, 0)
            },
            Polygon: function(n, t) {
                he(n.coordinates, t)
            },
            MultiPolygon: function(n, t) {
                for (var e = n.coordinates, r = -1, u = e.length; ++r < u;) he(e[r], t)
            },
            GeometryCollection: function(n, t) {
                for (var e = n.geometries, r = -1, u = e.length; ++r < u;) le(e[r], t)
            }
        };
    Go.geo.area = function(n) {
        return vc = 0, Go.geo.stream(n, mc), vc
    };
    var vc, dc = new ce,
        mc = {
            sphere: function() {
                vc += 4 * Ca
            },
            point: v,
            lineStart: v,
            lineEnd: v,
            polygonStart: function() {
                dc.reset(), mc.lineStart = ge
            },
            polygonEnd: function() {
                var n = 2 * dc;
                vc += 0 > n ? 4 * Ca + n : n, mc.lineStart = mc.lineEnd = mc.point = v
            }
        };
    Go.geo.bounds = function() {
        function n(n, t) {
            x.push(M = [l = n, h = n]), f > t && (f = t), t > g && (g = t)
        }

        function t(t, e) {
            var r = pe([t * za, e * za]);
            if (m) {
                var u = de(m, r),
                    i = [u[1], -u[0], 0],
                    o = de(i, u);
                xe(o), o = Me(o);
                var c = t - p,
                    s = c > 0 ? 1 : -1,
                    v = o[0] * Ra * s,
                    d = fa(c) > 180;
                if (d ^ (v > s * p && s * t > v)) {
                    var y = o[1] * Ra;
                    y > g && (g = y)
                } else if (v = (v + 360) % 360 - 180, d ^ (v > s * p && s * t > v)) {
                    var y = -o[1] * Ra;
                    f > y && (f = y)
                } else f > e && (f = e), e > g && (g = e);
                d ? p > t ? a(l, t) > a(l, h) && (h = t) : a(t, h) > a(l, h) && (l = t) : h >= l ? (l > t && (l = t), t > h && (h = t)) : t > p ? a(l, t) > a(l, h) && (h = t) : a(t, h) > a(l, h) && (l = t)
            } else n(t, e);
            m = r, p = t
        }

        function e() {
            _.point = t
        }

        function r() {
            M[0] = l, M[1] = h, _.point = n, m = null
        }

        function u(n, e) {
            if (m) {
                var r = n - p;
                y += fa(r) > 180 ? r + (r > 0 ? 360 : -360) : r
            } else v = n, d = e;
            mc.point(n, e), t(n, e)
        }

        function i() {
            mc.lineStart()
        }

        function o() {
            u(v, d), mc.lineEnd(), fa(y) > Ta && (l = -(h = 180)), M[0] = l, M[1] = h, m = null
        }

        function a(n, t) {
            return (t -= n) < 0 ? t + 360 : t
        }

        function c(n, t) {
            return n[0] - t[0]
        }

        function s(n, t) {
            return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n
        }
        var l, f, h, g, p, v, d, m, y, x, M, _ = {
                point: n,
                lineStart: e,
                lineEnd: r,
                polygonStart: function() {
                    _.point = u, _.lineStart = i, _.lineEnd = o, y = 0, mc.polygonStart()
                },
                polygonEnd: function() {
                    mc.polygonEnd(), _.point = n, _.lineStart = e, _.lineEnd = r, 0 > dc ? (l = -(h = 180), f = -(g = 90)) : y > Ta ? g = 90 : -Ta > y && (f = -90), M[0] = l, M[1] = h
                }
            };
        return function(n) {
            g = h = -(l = f = 1 / 0), x = [], Go.geo.stream(n, _);
            var t = x.length;
            if (t) {
                x.sort(c);
                for (var e, r = 1, u = x[0], i = [u]; t > r; ++r) e = x[r], s(e[0], u) || s(e[1], u) ? (a(u[0], e[1]) > a(u[0], u[1]) && (u[1] = e[1]), a(e[0], u[1]) > a(u[0], u[1]) && (u[0] = e[0])) : i.push(u = e);
                for (var o, e, p = -1 / 0, t = i.length - 1, r = 0, u = i[t]; t >= r; u = e, ++r) e = i[r], (o = a(u[1], e[0])) > p && (p = o, l = e[0], h = u[1])
            }
            return x = M = null, 1 / 0 === l || 1 / 0 === f ? [
                [0 / 0, 0 / 0],
                [0 / 0, 0 / 0]
            ] : [
                [l, f],
                [h, g]
            ]
        }
    }(), Go.geo.centroid = function(n) {
        yc = xc = Mc = _c = bc = wc = Sc = kc = Ec = Ac = Cc = 0, Go.geo.stream(n, Nc);
        var t = Ec,
            e = Ac,
            r = Cc,
            u = t * t + e * e + r * r;
        return qa > u && (t = wc, e = Sc, r = kc, Ta > xc && (t = Mc, e = _c, r = bc), u = t * t + e * e + r * r, qa > u) ? [0 / 0, 0 / 0] : [Math.atan2(e, t) * Ra, G(r / Math.sqrt(u)) * Ra]
    };
    var yc, xc, Mc, _c, bc, wc, Sc, kc, Ec, Ac, Cc, Nc = {
            sphere: v,
            point: be,
            lineStart: Se,
            lineEnd: ke,
            polygonStart: function() {
                Nc.lineStart = Ee
            },
            polygonEnd: function() {
                Nc.lineStart = Se
            }
        }, Lc = Te(Ae, Pe, je, [-Ca, -Ca / 2]),
        Tc = 1e9;
    Go.geo.clipExtent = function() {
        var n, t, e, r, u, i, o = {
                stream: function(n) {
                    return u && (u.valid = !1), u = i(n), u.valid = !0, u
                },
                extent: function(a) {
                    return arguments.length ? (i = Oe(n = +a[0][0], t = +a[0][1], e = +a[1][0], r = +a[1][1]), u && (u.valid = !1, u = null), o) : [
                        [n, t],
                        [e, r]
                    ]
                }
            };
        return o.extent([
            [0, 0],
            [960, 500]
        ])
    }, (Go.geo.conicEqualArea = function() {
        return Ye(Ze)
    }).raw = Ze, Go.geo.albers = function() {
        return Go.geo.conicEqualArea().rotate([96, 0]).center([-.6, 38.7]).parallels([29.5, 45.5]).scale(1070)
    }, Go.geo.albersUsa = function() {
        function n(n) {
            var i = n[0],
                o = n[1];
            return t = null, e(i, o), t || (r(i, o), t) || u(i, o), t
        }
        var t, e, r, u, i = Go.geo.albers(),
            o = Go.geo.conicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
            a = Go.geo.conicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
            c = {
                point: function(n, e) {
                    t = [n, e]
                }
            };
        return n.invert = function(n) {
            var t = i.scale(),
                e = i.translate(),
                r = (n[0] - e[0]) / t,
                u = (n[1] - e[1]) / t;
            return (u >= .12 && .234 > u && r >= -.425 && -.214 > r ? o : u >= .166 && .234 > u && r >= -.214 && -.115 > r ? a : i).invert(n)
        }, n.stream = function(n) {
            var t = i.stream(n),
                e = o.stream(n),
                r = a.stream(n);
            return {
                point: function(n, u) {
                    t.point(n, u), e.point(n, u), r.point(n, u)
                },
                sphere: function() {
                    t.sphere(), e.sphere(), r.sphere()
                },
                lineStart: function() {
                    t.lineStart(), e.lineStart(), r.lineStart()
                },
                lineEnd: function() {
                    t.lineEnd(), e.lineEnd(), r.lineEnd()
                },
                polygonStart: function() {
                    t.polygonStart(), e.polygonStart(), r.polygonStart()
                },
                polygonEnd: function() {
                    t.polygonEnd(), e.polygonEnd(), r.polygonEnd()
                }
            }
        }, n.precision = function(t) {
            return arguments.length ? (i.precision(t), o.precision(t), a.precision(t), n) : i.precision()
        }, n.scale = function(t) {
            return arguments.length ? (i.scale(t), o.scale(.35 * t), a.scale(t), n.translate(i.translate())) : i.scale()
        }, n.translate = function(t) {
            if (!arguments.length) return i.translate();
            var s = i.scale(),
                l = +t[0],
                f = +t[1];
            return e = i.translate(t).clipExtent([
                [l - .455 * s, f - .238 * s],
                [l + .455 * s, f + .238 * s]
            ]).stream(c).point, r = o.translate([l - .307 * s, f + .201 * s]).clipExtent([
                [l - .425 * s + Ta, f + .12 * s + Ta],
                [l - .214 * s - Ta, f + .234 * s - Ta]
            ]).stream(c).point, u = a.translate([l - .205 * s, f + .212 * s]).clipExtent([
                [l - .214 * s + Ta, f + .166 * s + Ta],
                [l - .115 * s - Ta, f + .234 * s - Ta]
            ]).stream(c).point, n
        }, n.scale(1070)
    };
    var qc, zc, Rc, Dc, Pc, Uc, jc = {
            point: v,
            lineStart: v,
            lineEnd: v,
            polygonStart: function() {
                zc = 0, jc.lineStart = Ve
            },
            polygonEnd: function() {
                jc.lineStart = jc.lineEnd = jc.point = v, qc += fa(zc / 2)
            }
        }, Hc = {
            point: $e,
            lineStart: v,
            lineEnd: v,
            polygonStart: v,
            polygonEnd: v
        }, Fc = {
            point: Je,
            lineStart: We,
            lineEnd: Ge,
            polygonStart: function() {
                Fc.lineStart = Ke
            },
            polygonEnd: function() {
                Fc.point = Je, Fc.lineStart = We, Fc.lineEnd = Ge
            }
        };
    Go.geo.path = function() {
        function n(n) {
            return n && ("function" == typeof a && i.pointRadius(+a.apply(this, arguments)), o && o.valid || (o = u(i)), Go.geo.stream(n, o)), i.result()
        }

        function t() {
            return o = null, n
        }
        var e, r, u, i, o, a = 4.5;
        return n.area = function(n) {
            return qc = 0, Go.geo.stream(n, u(jc)), qc
        }, n.centroid = function(n) {
            return Mc = _c = bc = wc = Sc = kc = Ec = Ac = Cc = 0, Go.geo.stream(n, u(Fc)), Cc ? [Ec / Cc, Ac / Cc] : kc ? [wc / kc, Sc / kc] : bc ? [Mc / bc, _c / bc] : [0 / 0, 0 / 0]
        }, n.bounds = function(n) {
            return Pc = Uc = -(Rc = Dc = 1 / 0), Go.geo.stream(n, u(Hc)), [
                [Rc, Dc],
                [Pc, Uc]
            ]
        }, n.projection = function(n) {
            return arguments.length ? (u = (e = n) ? n.stream || tr(n) : At, t()) : e
        }, n.context = function(n) {
            return arguments.length ? (i = null == (r = n) ? new Xe : new Qe(n), "function" != typeof a && i.pointRadius(a), t()) : r
        }, n.pointRadius = function(t) {
            return arguments.length ? (a = "function" == typeof t ? t : (i.pointRadius(+t), +t), n) : a
        }, n.projection(Go.geo.albersUsa()).context(null)
    }, Go.geo.transform = function(n) {
        return {
            stream: function(t) {
                var e = new er(t);
                for (var r in n) e[r] = n[r];
                return e
            }
        }
    }, er.prototype = {
        point: function(n, t) {
            this.stream.point(n, t)
        },
        sphere: function() {
            this.stream.sphere()
        },
        lineStart: function() {
            this.stream.lineStart()
        },
        lineEnd: function() {
            this.stream.lineEnd()
        },
        polygonStart: function() {
            this.stream.polygonStart()
        },
        polygonEnd: function() {
            this.stream.polygonEnd()
        }
    }, Go.geo.projection = ur, Go.geo.projectionMutator = ir, (Go.geo.equirectangular = function() {
        return ur(ar)
    }).raw = ar.invert = ar, Go.geo.rotation = function(n) {
        function t(t) {
            return t = n(t[0] * za, t[1] * za), t[0] *= Ra, t[1] *= Ra, t
        }
        return n = sr(n[0] % 360 * za, n[1] * za, n.length > 2 ? n[2] * za : 0), t.invert = function(t) {
            return t = n.invert(t[0] * za, t[1] * za), t[0] *= Ra, t[1] *= Ra, t
        }, t
    }, cr.invert = ar, Go.geo.circle = function() {
        function n() {
            var n = "function" == typeof r ? r.apply(this, arguments) : r,
                t = sr(-n[0] * za, -n[1] * za, 0).invert,
                u = [];
            return e(null, null, 1, {
                point: function(n, e) {
                    u.push(n = t(n, e)), n[0] *= Ra, n[1] *= Ra
                }
            }), {
                type: "Polygon",
                coordinates: [u]
            }
        }
        var t, e, r = [0, 0],
            u = 6;
        return n.origin = function(t) {
            return arguments.length ? (r = t, n) : r
        }, n.angle = function(r) {
            return arguments.length ? (e = gr((t = +r) * za, u * za), n) : t
        }, n.precision = function(r) {
            return arguments.length ? (e = gr(t * za, (u = +r) * za), n) : u
        }, n.angle(90)
    }, Go.geo.distance = function(n, t) {
        var e, r = (t[0] - n[0]) * za,
            u = n[1] * za,
            i = t[1] * za,
            o = Math.sin(r),
            a = Math.cos(r),
            c = Math.sin(u),
            s = Math.cos(u),
            l = Math.sin(i),
            f = Math.cos(i);
        return Math.atan2(Math.sqrt((e = f * o) * e + (e = s * l - c * f * a) * e), c * l + s * f * a)
    }, Go.geo.graticule = function() {
        function n() {
            return {
                type: "MultiLineString",
                coordinates: t()
            }
        }

        function t() {
            return Go.range(Math.ceil(i / d) * d, u, d).map(h).concat(Go.range(Math.ceil(s / m) * m, c, m).map(g)).concat(Go.range(Math.ceil(r / p) * p, e, p).filter(function(n) {
                return fa(n % d) > Ta
            }).map(l)).concat(Go.range(Math.ceil(a / v) * v, o, v).filter(function(n) {
                return fa(n % m) > Ta
            }).map(f))
        }
        var e, r, u, i, o, a, c, s, l, f, h, g, p = 10,
            v = p,
            d = 90,
            m = 360,
            y = 2.5;
        return n.lines = function() {
            return t().map(function(n) {
                return {
                    type: "LineString",
                    coordinates: n
                }
            })
        }, n.outline = function() {
            return {
                type: "Polygon",
                coordinates: [h(i).concat(g(c).slice(1), h(u).reverse().slice(1), g(s).reverse().slice(1))]
            }
        }, n.extent = function(t) {
            return arguments.length ? n.majorExtent(t).minorExtent(t) : n.minorExtent()
        }, n.majorExtent = function(t) {
            return arguments.length ? (i = +t[0][0], u = +t[1][0], s = +t[0][1], c = +t[1][1], i > u && (t = i, i = u, u = t), s > c && (t = s, s = c, c = t), n.precision(y)) : [
                [i, s],
                [u, c]
            ]
        }, n.minorExtent = function(t) {
            return arguments.length ? (r = +t[0][0], e = +t[1][0], a = +t[0][1], o = +t[1][1], r > e && (t = r, r = e, e = t), a > o && (t = a, a = o, o = t), n.precision(y)) : [
                [r, a],
                [e, o]
            ]
        }, n.step = function(t) {
            return arguments.length ? n.majorStep(t).minorStep(t) : n.minorStep()
        }, n.majorStep = function(t) {
            return arguments.length ? (d = +t[0], m = +t[1], n) : [d, m]
        }, n.minorStep = function(t) {
            return arguments.length ? (p = +t[0], v = +t[1], n) : [p, v]
        }, n.precision = function(t) {
            return arguments.length ? (y = +t, l = vr(a, o, 90), f = dr(r, e, y), h = vr(s, c, 90), g = dr(i, u, y), n) : y
        }, n.majorExtent([
            [-180, -90 + Ta],
            [180, 90 - Ta]
        ]).minorExtent([
            [-180, -80 - Ta],
            [180, 80 + Ta]
        ])
    }, Go.geo.greatArc = function() {
        function n() {
            return {
                type: "LineString",
                coordinates: [t || r.apply(this, arguments), e || u.apply(this, arguments)]
            }
        }
        var t, e, r = mr,
            u = yr;
        return n.distance = function() {
            return Go.geo.distance(t || r.apply(this, arguments), e || u.apply(this, arguments))
        }, n.source = function(e) {
            return arguments.length ? (r = e, t = "function" == typeof e ? null : e, n) : r
        }, n.target = function(t) {
            return arguments.length ? (u = t, e = "function" == typeof t ? null : t, n) : u
        }, n.precision = function() {
            return arguments.length ? n : 0
        }, n
    }, Go.geo.interpolate = function(n, t) {
        return xr(n[0] * za, n[1] * za, t[0] * za, t[1] * za)
    }, Go.geo.length = function(n) {
        return Oc = 0, Go.geo.stream(n, Ic), Oc
    };
    var Oc, Ic = {
            sphere: v,
            point: v,
            lineStart: Mr,
            lineEnd: v,
            polygonStart: v,
            polygonEnd: v
        }, Yc = _r(function(n) {
            return Math.sqrt(2 / (1 + n))
        }, function(n) {
            return 2 * Math.asin(n / 2)
        });
    (Go.geo.azimuthalEqualArea = function() {
        return ur(Yc)
    }).raw = Yc;
    var Zc = _r(function(n) {
        var t = Math.acos(n);
        return t && t / Math.sin(t)
    }, At);
    (Go.geo.azimuthalEquidistant = function() {
        return ur(Zc)
    }).raw = Zc, (Go.geo.conicConformal = function() {
        return Ye(br)
    }).raw = br, (Go.geo.conicEquidistant = function() {
        return Ye(wr)
    }).raw = wr;
    var Vc = _r(function(n) {
        return 1 / n
    }, Math.atan);
    (Go.geo.gnomonic = function() {
        return ur(Vc)
    }).raw = Vc, Sr.invert = function(n, t) {
        return [n, 2 * Math.atan(Math.exp(t)) - La]
    }, (Go.geo.mercator = function() {
        return kr(Sr)
    }).raw = Sr;
    var $c = _r(function() {
        return 1
    }, Math.asin);
    (Go.geo.orthographic = function() {
        return ur($c)
    }).raw = $c;
    var Xc = _r(function(n) {
        return 1 / (1 + n)
    }, function(n) {
        return 2 * Math.atan(n)
    });
    (Go.geo.stereographic = function() {
        return ur(Xc)
    }).raw = Xc, Er.invert = function(n, t) {
        return [-t, 2 * Math.atan(Math.exp(n)) - La]
    }, (Go.geo.transverseMercator = function() {
        var n = kr(Er),
            t = n.center,
            e = n.rotate;
        return n.center = function(n) {
            return n ? t([-n[1], n[0]]) : (n = t(), [-n[1], n[0]])
        }, n.rotate = function(n) {
            return n ? e([n[0], n[1], n.length > 2 ? n[2] + 90 : 90]) : (n = e(), [n[0], n[1], n[2] - 90])
        }, n.rotate([0, 0])
    }).raw = Er, Go.geom = {}, Go.geom.hull = function(n) {
        function t(n) {
            if (n.length < 3) return [];
            var t, u = Et(e),
                i = Et(r),
                o = n.length,
                a = [],
                c = [];
            for (t = 0; o > t; t++) a.push([+u.call(this, n[t], t), +i.call(this, n[t], t), t]);
            for (a.sort(Lr), t = 0; o > t; t++) c.push([a[t][0], -a[t][1]]);
            var s = Nr(a),
                l = Nr(c),
                f = l[0] === s[0],
                h = l[l.length - 1] === s[s.length - 1],
                g = [];
            for (t = s.length - 1; t >= 0; --t) g.push(n[a[s[t]][2]]);
            for (t = +f; t < l.length - h; ++t) g.push(n[a[l[t]][2]]);
            return g
        }
        var e = Ar,
            r = Cr;
        return arguments.length ? t(n) : (t.x = function(n) {
            return arguments.length ? (e = n, t) : e
        }, t.y = function(n) {
            return arguments.length ? (r = n, t) : r
        }, t)
    }, Go.geom.polygon = function(n) {
        return da(n, Bc), n
    };
    var Bc = Go.geom.polygon.prototype = [];
    Bc.area = function() {
        for (var n, t = -1, e = this.length, r = this[e - 1], u = 0; ++t < e;) n = r, r = this[t], u += n[1] * r[0] - n[0] * r[1];
        return .5 * u
    }, Bc.centroid = function(n) {
        var t, e, r = -1,
            u = this.length,
            i = 0,
            o = 0,
            a = this[u - 1];
        for (arguments.length || (n = -1 / (6 * this.area())); ++r < u;) t = a, a = this[r], e = t[0] * a[1] - a[0] * t[1], i += (t[0] + a[0]) * e, o += (t[1] + a[1]) * e;
        return [i * n, o * n]
    }, Bc.clip = function(n) {
        for (var t, e, r, u, i, o, a = zr(n), c = -1, s = this.length - zr(this), l = this[s - 1]; ++c < s;) {
            for (t = n.slice(), n.length = 0, u = this[c], i = t[(r = t.length - a) - 1], e = -1; ++e < r;) o = t[e], Tr(o, l, u) ? (Tr(i, l, u) || n.push(qr(i, o, l, u)), n.push(o)) : Tr(i, l, u) && n.push(qr(i, o, l, u)), i = o;
            a && n.push(n[0]), l = u
        }
        return n
    };
    var Jc, Wc, Gc, Kc, Qc, ns = [],
        ts = [];
    Or.prototype.prepare = function() {
        for (var n, t = this.edges, e = t.length; e--;) n = t[e].edge, n.b && n.a || t.splice(e, 1);
        return t.sort(Yr), t.length
    }, Qr.prototype = {
        start: function() {
            return this.edge.l === this.site ? this.edge.a : this.edge.b
        },
        end: function() {
            return this.edge.l === this.site ? this.edge.b : this.edge.a
        }
    }, nu.prototype = {
        insert: function(n, t) {
            var e, r, u;
            if (n) {
                if (t.P = n, t.N = n.N, n.N && (n.N.P = t), n.N = t, n.R) {
                    for (n = n.R; n.L;) n = n.L;
                    n.L = t
                } else n.R = t;
                e = n
            } else this._ ? (n = uu(this._), t.P = null, t.N = n, n.P = n.L = t, e = n) : (t.P = t.N = null, this._ = t, e = null);
            for (t.L = t.R = null, t.U = e, t.C = !0, n = t; e && e.C;) r = e.U, e === r.L ? (u = r.R, u && u.C ? (e.C = u.C = !1, r.C = !0, n = r) : (n === e.R && (eu(this, e), n = e, e = n.U), e.C = !1, r.C = !0, ru(this, r))) : (u = r.L, u && u.C ? (e.C = u.C = !1, r.C = !0, n = r) : (n === e.L && (ru(this, e), n = e, e = n.U), e.C = !1, r.C = !0, eu(this, r))), e = n.U;
            this._.C = !1
        },
        remove: function(n) {
            n.N && (n.N.P = n.P), n.P && (n.P.N = n.N), n.N = n.P = null;
            var t, e, r, u = n.U,
                i = n.L,
                o = n.R;
            if (e = i ? o ? uu(o) : i : o, u ? u.L === n ? u.L = e : u.R = e : this._ = e, i && o ? (r = e.C, e.C = n.C, e.L = i, i.U = e, e !== o ? (u = e.U, e.U = n.U, n = e.R, u.L = n, e.R = o, o.U = e) : (e.U = u, u = e, n = e.R)) : (r = n.C, n = e), n && (n.U = u), !r) {
                if (n && n.C) return n.C = !1, void 0;
                do {
                    if (n === this._) break;
                    if (n === u.L) {
                        if (t = u.R, t.C && (t.C = !1, u.C = !0, eu(this, u), t = u.R), t.L && t.L.C || t.R && t.R.C) {
                            t.R && t.R.C || (t.L.C = !1, t.C = !0, ru(this, t), t = u.R), t.C = u.C, u.C = t.R.C = !1, eu(this, u), n = this._;
                            break
                        }
                    } else if (t = u.L, t.C && (t.C = !1, u.C = !0, ru(this, u), t = u.L), t.L && t.L.C || t.R && t.R.C) {
                        t.L && t.L.C || (t.R.C = !1, t.C = !0, eu(this, t), t = u.L), t.C = u.C, u.C = t.L.C = !1, ru(this, u), n = this._;
                        break
                    }
                    t.C = !0, n = u, u = u.U
                } while (!n.C);
                n && (n.C = !1)
            }
        }
    }, Go.geom.voronoi = function(n) {
        function t(n) {
            var t = new Array(n.length),
                r = a[0][0],
                u = a[0][1],
                i = a[1][0],
                o = a[1][1];
            return iu(e(n), a).cells.forEach(function(e, a) {
                var c = e.edges,
                    s = e.site,
                    l = t[a] = c.length ? c.map(function(n) {
                        var t = n.start();
                        return [t.x, t.y]
                    }) : s.x >= r && s.x <= i && s.y >= u && s.y <= o ? [
                        [r, o],
                        [i, o],
                        [i, u],
                        [r, u]
                    ] : [];
                l.point = n[a]
            }), t
        }

        function e(n) {
            return n.map(function(n, t) {
                return {
                    x: Math.round(i(n, t) / Ta) * Ta,
                    y: Math.round(o(n, t) / Ta) * Ta,
                    i: t
                }
            })
        }
        var r = Ar,
            u = Cr,
            i = r,
            o = u,
            a = es;
        return n ? t(n) : (t.links = function(n) {
            return iu(e(n)).edges.filter(function(n) {
                return n.l && n.r
            }).map(function(t) {
                return {
                    source: n[t.l.i],
                    target: n[t.r.i]
                }
            })
        }, t.triangles = function(n) {
            var t = [];
            return iu(e(n)).cells.forEach(function(e, r) {
                for (var u, i, o = e.site, a = e.edges.sort(Yr), c = -1, s = a.length, l = a[s - 1].edge, f = l.l === o ? l.r : l.l; ++c < s;) u = l, i = f, l = a[c].edge, f = l.l === o ? l.r : l.l, r < i.i && r < f.i && au(o, i, f) < 0 && t.push([n[r], n[i.i], n[f.i]])
            }), t
        }, t.x = function(n) {
            return arguments.length ? (i = Et(r = n), t) : r
        }, t.y = function(n) {
            return arguments.length ? (o = Et(u = n), t) : u
        }, t.clipExtent = function(n) {
            return arguments.length ? (a = null == n ? es : n, t) : a === es ? null : a
        }, t.size = function(n) {
            return arguments.length ? t.clipExtent(n && [
                [0, 0], n
            ]) : a === es ? null : a && a[1]
        }, t)
    };
    var es = [
        [-1e6, -1e6],
        [1e6, 1e6]
    ];
    Go.geom.delaunay = function(n) {
        return Go.geom.voronoi().triangles(n)
    }, Go.geom.quadtree = function(n, t, e, r, u) {
        function i(n) {
            function i(n, t, e, r, u, i, o, a) {
                if (!isNaN(e) && !isNaN(r))
                    if (n.leaf) {
                        var c = n.x,
                            l = n.y;
                        if (null != c)
                            if (fa(c - e) + fa(l - r) < .01) s(n, t, e, r, u, i, o, a);
                            else {
                                var f = n.point;
                                n.x = n.y = n.point = null, s(n, f, c, l, u, i, o, a), s(n, t, e, r, u, i, o, a)
                            } else n.x = e, n.y = r, n.point = t
                    } else s(n, t, e, r, u, i, o, a)
            }

            function s(n, t, e, r, u, o, a, c) {
                var s = .5 * (u + a),
                    l = .5 * (o + c),
                    f = e >= s,
                    h = r >= l,
                    g = (h << 1) + f;
                n.leaf = !1, n = n.nodes[g] || (n.nodes[g] = lu()), f ? u = s : a = s, h ? o = l : c = l, i(n, t, e, r, u, o, a, c)
            }
            var l, f, h, g, p, v, d, m, y, x = Et(a),
                M = Et(c);
            if (null != t) v = t, d = e, m = r, y = u;
            else if (m = y = -(v = d = 1 / 0), f = [], h = [], p = n.length, o)
                for (g = 0; p > g; ++g) l = n[g], l.x < v && (v = l.x), l.y < d && (d = l.y), l.x > m && (m = l.x), l.y > y && (y = l.y), f.push(l.x), h.push(l.y);
            else
                for (g = 0; p > g; ++g) {
                    var _ = +x(l = n[g], g),
                        b = +M(l, g);
                    v > _ && (v = _), d > b && (d = b), _ > m && (m = _), b > y && (y = b), f.push(_), h.push(b)
                }
            var w = m - v,
                S = y - d;
            w > S ? y = d + w : m = v + S;
            var k = lu();
            if (k.add = function(n) {
                i(k, n, +x(n, ++g), +M(n, g), v, d, m, y)
            }, k.visit = function(n) {
                fu(n, k, v, d, m, y)
            }, g = -1, null == t) {
                for (; ++g < p;) i(k, n[g], f[g], h[g], v, d, m, y);
                --g
            } else n.forEach(k.add);
            return f = h = n = l = null, k
        }
        var o, a = Ar,
            c = Cr;
        return (o = arguments.length) ? (a = cu, c = su, 3 === o && (u = e, r = t, e = t = 0), i(n)) : (i.x = function(n) {
            return arguments.length ? (a = n, i) : a
        }, i.y = function(n) {
            return arguments.length ? (c = n, i) : c
        }, i.extent = function(n) {
            return arguments.length ? (null == n ? t = e = r = u = null : (t = +n[0][0], e = +n[0][1], r = +n[1][0], u = +n[1][1]), i) : null == t ? null : [
                [t, e],
                [r, u]
            ]
        }, i.size = function(n) {
            return arguments.length ? (null == n ? t = e = r = u = null : (t = e = 0, r = +n[0], u = +n[1]), i) : null == t ? null : [r - t, u - e]
        }, i)
    }, Go.interpolateRgb = hu, Go.interpolateObject = gu, Go.interpolateNumber = pu, Go.interpolateString = vu;
    var rs = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        us = new RegExp(rs.source, "g");
    Go.interpolate = du, Go.interpolators = [

        function(n, t) {
            var e = typeof t;
            return ("string" === e ? Ja.has(t) || /^(#|rgb\(|hsl\()/.test(t) ? hu : vu : t instanceof et ? hu : Array.isArray(t) ? mu : "object" === e && isNaN(t) ? gu : pu)(n, t)
        }
    ], Go.interpolateArray = mu;
    var is = function() {
        return At
    }, os = Go.map({
            linear: is,
            poly: Su,
            quad: function() {
                return _u
            },
            cubic: function() {
                return bu
            },
            sin: function() {
                return ku
            },
            exp: function() {
                return Eu
            },
            circle: function() {
                return Au
            },
            elastic: Cu,
            back: Nu,
            bounce: function() {
                return Lu
            }
        }),
        as = Go.map({
            "in": At,
            out: xu,
            "in-out": Mu,
            "out-in": function(n) {
                return Mu(xu(n))
            }
        });
    Go.ease = function(n) {
        var t = n.indexOf("-"),
            e = t >= 0 ? n.substring(0, t) : n,
            r = t >= 0 ? n.substring(t + 1) : "in";
        return e = os.get(e) || is, r = as.get(r) || At, yu(r(e.apply(null, Ko.call(arguments, 1))))
    }, Go.interpolateHcl = Tu, Go.interpolateHsl = qu, Go.interpolateLab = zu, Go.interpolateRound = Ru, Go.transform = function(n) {
        var t = na.createElementNS(Go.ns.prefix.svg, "g");
        return (Go.transform = function(n) {
            if (null != n) {
                t.setAttribute("transform", n);
                var e = t.transform.baseVal.consolidate()
            }
            return new Du(e ? e.matrix : cs)
        })(n)
    }, Du.prototype.toString = function() {
        return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")"
    };
    var cs = {
        a: 1,
        b: 0,
        c: 0,
        d: 1,
        e: 0,
        f: 0
    };
    Go.interpolateTransform = Hu, Go.layout = {}, Go.layout.bundle = function() {
        return function(n) {
            for (var t = [], e = -1, r = n.length; ++e < r;) t.push(Iu(n[e]));
            return t
        }
    }, Go.layout.chord = function() {
        function n() {
            var n, s, f, h, g, p = {}, v = [],
                d = Go.range(i),
                m = [];
            for (e = [], r = [], n = 0, h = -1; ++h < i;) {
                for (s = 0, g = -1; ++g < i;) s += u[h][g];
                v.push(s), m.push(Go.range(i)), n += s
            }
            for (o && d.sort(function(n, t) {
                return o(v[n], v[t])
            }), a && m.forEach(function(n, t) {
                n.sort(function(n, e) {
                    return a(u[t][n], u[t][e])
                })
            }), n = (Na - l * i) / n, s = 0, h = -1; ++h < i;) {
                for (f = s, g = -1; ++g < i;) {
                    var y = d[h],
                        x = m[y][g],
                        M = u[y][x],
                        _ = s,
                        b = s += M * n;
                    p[y + "-" + x] = {
                        index: y,
                        subindex: x,
                        startAngle: _,
                        endAngle: b,
                        value: M
                    }
                }
                r[y] = {
                    index: y,
                    startAngle: f,
                    endAngle: s,
                    value: (s - f) / n
                }, s += l
            }
            for (h = -1; ++h < i;)
                for (g = h - 1; ++g < i;) {
                    var w = p[h + "-" + g],
                        S = p[g + "-" + h];
                    (w.value || S.value) && e.push(w.value < S.value ? {
                            source: S,
                            target: w
                        } : {
                            source: w,
                            target: S
                        })
                }
            c && t()
        }

        function t() {
            e.sort(function(n, t) {
                return c((n.source.value + n.target.value) / 2, (t.source.value + t.target.value) / 2)
            })
        }
        var e, r, u, i, o, a, c, s = {}, l = 0;
        return s.matrix = function(n) {
            return arguments.length ? (i = (u = n) && u.length, e = r = null, s) : u
        }, s.padding = function(n) {
            return arguments.length ? (l = n, e = r = null, s) : l
        }, s.sortGroups = function(n) {
            return arguments.length ? (o = n, e = r = null, s) : o
        }, s.sortSubgroups = function(n) {
            return arguments.length ? (a = n, e = null, s) : a
        }, s.sortChords = function(n) {
            return arguments.length ? (c = n, e && t(), s) : c
        }, s.chords = function() {
            return e || n(), e
        }, s.groups = function() {
            return r || n(), r
        }, s
    }, Go.layout.force = function() {
        function n(n) {
            return function(t, e, r, u) {
                if (t.point !== n) {
                    var i = t.cx - n.x,
                        o = t.cy - n.y,
                        a = u - e,
                        c = i * i + o * o;
                    if (c > a * a / d) {
                        if (p > c) {
                            var s = t.charge / c;
                            n.px -= i * s, n.py -= o * s
                        }
                        return !0
                    }
                    if (t.point && c && p > c) {
                        var s = t.pointCharge / c;
                        n.px -= i * s, n.py -= o * s
                    }
                }
                return !t.charge
            }
        }

        function t(n) {
            n.px = Go.event.x, n.py = Go.event.y, a.resume()
        }
        var e, r, u, i, o, a = {}, c = Go.dispatch("start", "tick", "end"),
            s = [1, 1],
            l = .9,
            f = ss,
            h = ls,
            g = -30,
            p = fs,
            v = .1,
            d = .64,
            m = [],
            y = [];
        return a.tick = function() {
            if ((r *= .99) < .005) return c.end({
                type: "end",
                alpha: r = 0
            }), !0;
            var t, e, a, f, h, p, d, x, M, _ = m.length,
                b = y.length;
            for (e = 0; b > e; ++e) a = y[e], f = a.source, h = a.target, x = h.x - f.x, M = h.y - f.y, (p = x * x + M * M) && (p = r * i[e] * ((p = Math.sqrt(p)) - u[e]) / p, x *= p, M *= p, h.x -= x * (d = f.weight / (h.weight + f.weight)), h.y -= M * d, f.x += x * (d = 1 - d), f.y += M * d);
            if ((d = r * v) && (x = s[0] / 2, M = s[1] / 2, e = -1, d))
                for (; ++e < _;) a = m[e], a.x += (x - a.x) * d, a.y += (M - a.y) * d;
            if (g)
                for (Ju(t = Go.geom.quadtree(m), r, o), e = -1; ++e < _;)(a = m[e]).fixed || t.visit(n(a));
            for (e = -1; ++e < _;) a = m[e], a.fixed ? (a.x = a.px, a.y = a.py) : (a.x -= (a.px - (a.px = a.x)) * l, a.y -= (a.py - (a.py = a.y)) * l);
            c.tick({
                type: "tick",
                alpha: r
            })
        }, a.nodes = function(n) {
            return arguments.length ? (m = n, a) : m
        }, a.links = function(n) {
            return arguments.length ? (y = n, a) : y
        }, a.size = function(n) {
            return arguments.length ? (s = n, a) : s
        }, a.linkDistance = function(n) {
            return arguments.length ? (f = "function" == typeof n ? n : +n, a) : f
        }, a.distance = a.linkDistance, a.linkStrength = function(n) {
            return arguments.length ? (h = "function" == typeof n ? n : +n, a) : h
        }, a.friction = function(n) {
            return arguments.length ? (l = +n, a) : l
        }, a.charge = function(n) {
            return arguments.length ? (g = "function" == typeof n ? n : +n, a) : g
        }, a.chargeDistance = function(n) {
            return arguments.length ? (p = n * n, a) : Math.sqrt(p)
        }, a.gravity = function(n) {
            return arguments.length ? (v = +n, a) : v
        }, a.theta = function(n) {
            return arguments.length ? (d = n * n, a) : Math.sqrt(d)
        }, a.alpha = function(n) {
            return arguments.length ? (n = +n, r ? r = n > 0 ? n : 0 : n > 0 && (c.start({
                type: "start",
                alpha: r = n
            }), Go.timer(a.tick)), a) : r
        }, a.start = function() {
            function n(n, r) {
                if (!e) {
                    for (e = new Array(c), a = 0; c > a; ++a) e[a] = [];
                    for (a = 0; s > a; ++a) {
                        var u = y[a];
                        e[u.source.index].push(u.target), e[u.target.index].push(u.source)
                    }
                }
                for (var i, o = e[t], a = -1, s = o.length; ++a < s;)
                    if (!isNaN(i = o[a][n])) return i;
                return Math.random() * r
            }
            var t, e, r, c = m.length,
                l = y.length,
                p = s[0],
                v = s[1];
            for (t = 0; c > t; ++t)(r = m[t]).index = t, r.weight = 0;
            for (t = 0; l > t; ++t) r = y[t], "number" == typeof r.source && (r.source = m[r.source]), "number" == typeof r.target && (r.target = m[r.target]), ++r.source.weight, ++r.target.weight;
            for (t = 0; c > t; ++t) r = m[t], isNaN(r.x) && (r.x = n("x", p)), isNaN(r.y) && (r.y = n("y", v)), isNaN(r.px) && (r.px = r.x), isNaN(r.py) && (r.py = r.y);
            if (u = [], "function" == typeof f)
                for (t = 0; l > t; ++t) u[t] = +f.call(this, y[t], t);
            else
                for (t = 0; l > t; ++t) u[t] = f; if (i = [], "function" == typeof h)
                for (t = 0; l > t; ++t) i[t] = +h.call(this, y[t], t);
            else
                for (t = 0; l > t; ++t) i[t] = h; if (o = [], "function" == typeof g)
                for (t = 0; c > t; ++t) o[t] = +g.call(this, m[t], t);
            else
                for (t = 0; c > t; ++t) o[t] = g;
            return a.resume()
        }, a.resume = function() {
            return a.alpha(.1)
        }, a.stop = function() {
            return a.alpha(0)
        }, a.drag = function() {
            return e || (e = Go.behavior.drag().origin(At).on("dragstart.force", Vu).on("drag.force", t).on("dragend.force", $u)), arguments.length ? (this.on("mouseover.force", Xu).on("mouseout.force", Bu).call(e), void 0) : e
        }, Go.rebind(a, c, "on")
    };
    var ss = 20,
        ls = 1,
        fs = 1 / 0;
    Go.layout.hierarchy = function() {
        function n(t, o, a) {
            var c = u.call(e, t, o);
            if (t.depth = o, a.push(t), c && (s = c.length)) {
                for (var s, l, f = -1, h = t.children = new Array(s), g = 0, p = o + 1; ++f < s;) l = h[f] = n(c[f], p, a), l.parent = t, g += l.value;
                r && h.sort(r), i && (t.value = g)
            } else delete t.children, i && (t.value = +i.call(e, t, o) || 0);
            return t
        }

        function t(n, r) {
            var u = n.children,
                o = 0;
            if (u && (a = u.length))
                for (var a, c = -1, s = r + 1; ++c < a;) o += t(u[c], s);
            else i && (o = +i.call(e, n, r) || 0);
            return i && (n.value = o), o
        }

        function e(t) {
            var e = [];
            return n(t, 0, e), e
        }
        var r = Qu,
            u = Gu,
            i = Ku;
        return e.sort = function(n) {
            return arguments.length ? (r = n, e) : r
        }, e.children = function(n) {
            return arguments.length ? (u = n, e) : u
        }, e.value = function(n) {
            return arguments.length ? (i = n, e) : i
        }, e.revalue = function(n) {
            return t(n, 0), n
        }, e
    }, Go.layout.partition = function() {
        function n(t, e, r, u) {
            var i = t.children;
            if (t.x = e, t.y = t.depth * u, t.dx = r, t.dy = u, i && (o = i.length)) {
                var o, a, c, s = -1;
                for (r = t.value ? r / t.value : 0; ++s < o;) n(a = i[s], e, c = a.value * r, u), e += c
            }
        }

        function t(n) {
            var e = n.children,
                r = 0;
            if (e && (u = e.length))
                for (var u, i = -1; ++i < u;) r = Math.max(r, t(e[i]));
            return 1 + r
        }

        function e(e, i) {
            var o = r.call(this, e, i);
            return n(o[0], 0, u[0], u[1] / t(o[0])), o
        }
        var r = Go.layout.hierarchy(),
            u = [1, 1];
        return e.size = function(n) {
            return arguments.length ? (u = n, e) : u
        }, Wu(e, r)
    }, Go.layout.pie = function() {
        function n(i) {
            var o = i.map(function(e, r) {
                return +t.call(n, e, r)
            }),
                a = +("function" == typeof r ? r.apply(this, arguments) : r),
                c = (("function" == typeof u ? u.apply(this, arguments) : u) - a) / Go.sum(o),
                s = Go.range(i.length);
            null != e && s.sort(e === hs ? function(n, t) {
                return o[t] - o[n]
            } : function(n, t) {
                return e(i[n], i[t])
            });
            var l = [];
            return s.forEach(function(n) {
                var t;
                l[n] = {
                    data: i[n],
                    value: t = o[n],
                    startAngle: a,
                    endAngle: a += t * c
                }
            }), l
        }
        var t = Number,
            e = hs,
            r = 0,
            u = Na;
        return n.value = function(e) {
            return arguments.length ? (t = e, n) : t
        }, n.sort = function(t) {
            return arguments.length ? (e = t, n) : e
        }, n.startAngle = function(t) {
            return arguments.length ? (r = t, n) : r
        }, n.endAngle = function(t) {
            return arguments.length ? (u = t, n) : u
        }, n
    };
    var hs = {};
    Go.layout.stack = function() {
        function n(a, c) {
            var s = a.map(function(e, r) {
                return t.call(n, e, r)
            }),
                l = s.map(function(t) {
                    return t.map(function(t, e) {
                        return [i.call(n, t, e), o.call(n, t, e)]
                    })
                }),
                f = e.call(n, l, c);
            s = Go.permute(s, f), l = Go.permute(l, f);
            var h, g, p, v = r.call(n, l, c),
                d = s.length,
                m = s[0].length;
            for (g = 0; m > g; ++g)
                for (u.call(n, s[0][g], p = v[g], l[0][g][1]), h = 1; d > h; ++h) u.call(n, s[h][g], p += l[h - 1][g][1], l[h][g][1]);
            return a
        }
        var t = At,
            e = ui,
            r = ii,
            u = ri,
            i = ti,
            o = ei;
        return n.values = function(e) {
            return arguments.length ? (t = e, n) : t
        }, n.order = function(t) {
            return arguments.length ? (e = "function" == typeof t ? t : gs.get(t) || ui, n) : e
        }, n.offset = function(t) {
            return arguments.length ? (r = "function" == typeof t ? t : ps.get(t) || ii, n) : r
        }, n.x = function(t) {
            return arguments.length ? (i = t, n) : i
        }, n.y = function(t) {
            return arguments.length ? (o = t, n) : o
        }, n.out = function(t) {
            return arguments.length ? (u = t, n) : u
        }, n
    };
    var gs = Go.map({
        "inside-out": function(n) {
            var t, e, r = n.length,
                u = n.map(oi),
                i = n.map(ai),
                o = Go.range(r).sort(function(n, t) {
                    return u[n] - u[t]
                }),
                a = 0,
                c = 0,
                s = [],
                l = [];
            for (t = 0; r > t; ++t) e = o[t], c > a ? (a += i[e], s.push(e)) : (c += i[e], l.push(e));
            return l.reverse().concat(s)
        },
        reverse: function(n) {
            return Go.range(n.length).reverse()
        },
        "default": ui
    }),
        ps = Go.map({
            silhouette: function(n) {
                var t, e, r, u = n.length,
                    i = n[0].length,
                    o = [],
                    a = 0,
                    c = [];
                for (e = 0; i > e; ++e) {
                    for (t = 0, r = 0; u > t; t++) r += n[t][e][1];
                    r > a && (a = r), o.push(r)
                }
                for (e = 0; i > e; ++e) c[e] = (a - o[e]) / 2;
                return c
            },
            wiggle: function(n) {
                var t, e, r, u, i, o, a, c, s, l = n.length,
                    f = n[0],
                    h = f.length,
                    g = [];
                for (g[0] = c = s = 0, e = 1; h > e; ++e) {
                    for (t = 0, u = 0; l > t; ++t) u += n[t][e][1];
                    for (t = 0, i = 0, a = f[e][0] - f[e - 1][0]; l > t; ++t) {
                        for (r = 0, o = (n[t][e][1] - n[t][e - 1][1]) / (2 * a); t > r; ++r) o += (n[r][e][1] - n[r][e - 1][1]) / a;
                        i += o * n[t][e][1]
                    }
                    g[e] = c -= u ? i / u * a : 0, s > c && (s = c)
                }
                for (e = 0; h > e; ++e) g[e] -= s;
                return g
            },
            expand: function(n) {
                var t, e, r, u = n.length,
                    i = n[0].length,
                    o = 1 / u,
                    a = [];
                for (e = 0; i > e; ++e) {
                    for (t = 0, r = 0; u > t; t++) r += n[t][e][1];
                    if (r)
                        for (t = 0; u > t; t++) n[t][e][1] /= r;
                    else
                        for (t = 0; u > t; t++) n[t][e][1] = o
                }
                for (e = 0; i > e; ++e) a[e] = 0;
                return a
            },
            zero: ii
        });
    Go.layout.histogram = function() {
        function n(n, i) {
            for (var o, a, c = [], s = n.map(e, this), l = r.call(this, s, i), f = u.call(this, l, s, i), i = -1, h = s.length, g = f.length - 1, p = t ? 1 : 1 / h; ++i < g;) o = c[i] = [], o.dx = f[i + 1] - (o.x = f[i]), o.y = 0;
            if (g > 0)
                for (i = -1; ++i < h;) a = s[i], a >= l[0] && a <= l[1] && (o = c[Go.bisect(f, a, 1, g) - 1], o.y += p, o.push(n[i]));
            return c
        }
        var t = !0,
            e = Number,
            r = fi,
            u = si;
        return n.value = function(t) {
            return arguments.length ? (e = t, n) : e
        }, n.range = function(t) {
            return arguments.length ? (r = Et(t), n) : r
        }, n.bins = function(t) {
            return arguments.length ? (u = "number" == typeof t ? function(n) {
                return li(n, t)
            } : Et(t), n) : u
        }, n.frequency = function(e) {
            return arguments.length ? (t = !! e, n) : t
        }, n
    }, Go.layout.tree = function() {
        function n(n, i) {
            function o(n, t) {
                var r = n.children,
                    u = n._tree;
                if (r && (i = r.length)) {
                    for (var i, a, s, l = r[0], f = l, h = -1; ++h < i;) s = r[h], o(s, a), f = c(s, a, f), a = s;
                    Mi(n);
                    var g = .5 * (l._tree.prelim + s._tree.prelim);
                    t ? (u.prelim = t._tree.prelim + e(n, t), u.mod = u.prelim - g) : u.prelim = g
                } else t && (u.prelim = t._tree.prelim + e(n, t))
            }

            function a(n, t) {
                n.x = n._tree.prelim + t;
                var e = n.children;
                if (e && (r = e.length)) {
                    var r, u = -1;
                    for (t += n._tree.mod; ++u < r;) a(e[u], t)
                }
            }

            function c(n, t, r) {
                if (t) {
                    for (var u, i = n, o = n, a = t, c = n.parent.children[0], s = i._tree.mod, l = o._tree.mod, f = a._tree.mod, h = c._tree.mod; a = pi(a), i = gi(i), a && i;) c = gi(c), o = pi(o), o._tree.ancestor = n, u = a._tree.prelim + f - i._tree.prelim - s + e(a, i), u > 0 && (_i(bi(a, n, r), n, u), s += u, l += u), f += a._tree.mod, s += i._tree.mod, h += c._tree.mod, l += o._tree.mod;
                    a && !pi(o) && (o._tree.thread = a, o._tree.mod += f - l), i && !gi(c) && (c._tree.thread = i, c._tree.mod += s - h, r = n)
                }
                return r
            }
            var s = t.call(this, n, i),
                l = s[0];
            xi(l, function(n, t) {
                n._tree = {
                    ancestor: n,
                    prelim: 0,
                    mod: 0,
                    change: 0,
                    shift: 0,
                    number: t ? t._tree.number + 1 : 0
                }
            }), o(l), a(l, -l._tree.prelim);
            var f = vi(l, mi),
                h = vi(l, di),
                g = vi(l, yi),
                p = f.x - e(f, h) / 2,
                v = h.x + e(h, f) / 2,
                d = g.depth || 1;
            return xi(l, u ? function(n) {
                n.x *= r[0], n.y = n.depth * r[1], delete n._tree
            } : function(n) {
                n.x = (n.x - p) / (v - p) * r[0], n.y = n.depth / d * r[1], delete n._tree
            }), s
        }
        var t = Go.layout.hierarchy().sort(null).value(null),
            e = hi,
            r = [1, 1],
            u = !1;
        return n.separation = function(t) {
            return arguments.length ? (e = t, n) : e
        }, n.size = function(t) {
            return arguments.length ? (u = null == (r = t), n) : u ? null : r
        }, n.nodeSize = function(t) {
            return arguments.length ? (u = null != (r = t), n) : u ? r : null
        }, Wu(n, t)
    }, Go.layout.pack = function() {
        function n(n, i) {
            var o = e.call(this, n, i),
                a = o[0],
                c = u[0],
                s = u[1],
                l = null == t ? Math.sqrt : "function" == typeof t ? t : function() {
                    return t
                };
            if (a.x = a.y = 0, xi(a, function(n) {
                n.r = +l(n.value)
            }), xi(a, Ai), r) {
                var f = r * (t ? 1 : Math.max(2 * a.r / c, 2 * a.r / s)) / 2;
                xi(a, function(n) {
                    n.r += f
                }), xi(a, Ai), xi(a, function(n) {
                    n.r -= f
                })
            }
            return Li(a, c / 2, s / 2, t ? 1 : 1 / Math.max(2 * a.r / c, 2 * a.r / s)), o
        }
        var t, e = Go.layout.hierarchy().sort(wi),
            r = 0,
            u = [1, 1];
        return n.size = function(t) {
            return arguments.length ? (u = t, n) : u
        }, n.radius = function(e) {
            return arguments.length ? (t = null == e || "function" == typeof e ? e : +e, n) : t
        }, n.padding = function(t) {
            return arguments.length ? (r = +t, n) : r
        }, Wu(n, e)
    }, Go.layout.cluster = function() {
        function n(n, i) {
            var o, a = t.call(this, n, i),
                c = a[0],
                s = 0;
            xi(c, function(n) {
                var t = n.children;
                t && t.length ? (n.x = zi(t), n.y = qi(t)) : (n.x = o ? s += e(n, o) : 0, n.y = 0, o = n)
            });
            var l = Ri(c),
                f = Di(c),
                h = l.x - e(l, f) / 2,
                g = f.x + e(f, l) / 2;
            return xi(c, u ? function(n) {
                n.x = (n.x - c.x) * r[0], n.y = (c.y - n.y) * r[1]
            } : function(n) {
                n.x = (n.x - h) / (g - h) * r[0], n.y = (1 - (c.y ? n.y / c.y : 1)) * r[1]
            }), a
        }
        var t = Go.layout.hierarchy().sort(null).value(null),
            e = hi,
            r = [1, 1],
            u = !1;
        return n.separation = function(t) {
            return arguments.length ? (e = t, n) : e
        }, n.size = function(t) {
            return arguments.length ? (u = null == (r = t), n) : u ? null : r
        }, n.nodeSize = function(t) {
            return arguments.length ? (u = null != (r = t), n) : u ? r : null
        }, Wu(n, t)
    }, Go.layout.treemap = function() {
        function n(n, t) {
            for (var e, r, u = -1, i = n.length; ++u < i;) r = (e = n[u]).value * (0 > t ? 0 : t), e.area = isNaN(r) || 0 >= r ? 0 : r
        }

        function t(e) {
            var i = e.children;
            if (i && i.length) {
                var o, a, c, s = f(e),
                    l = [],
                    h = i.slice(),
                    p = 1 / 0,
                    v = "slice" === g ? s.dx : "dice" === g ? s.dy : "slice-dice" === g ? 1 & e.depth ? s.dy : s.dx : Math.min(s.dx, s.dy);
                for (n(h, s.dx * s.dy / e.value), l.area = 0;
                    (c = h.length) > 0;) l.push(o = h[c - 1]), l.area += o.area, "squarify" !== g || (a = r(l, v)) <= p ? (h.pop(), p = a) : (l.area -= l.pop().area, u(l, v, s, !1), v = Math.min(s.dx, s.dy), l.length = l.area = 0, p = 1 / 0);
                l.length && (u(l, v, s, !0), l.length = l.area = 0), i.forEach(t)
            }
        }

        function e(t) {
            var r = t.children;
            if (r && r.length) {
                var i, o = f(t),
                    a = r.slice(),
                    c = [];
                for (n(a, o.dx * o.dy / t.value), c.area = 0; i = a.pop();) c.push(i), c.area += i.area, null != i.z && (u(c, i.z ? o.dx : o.dy, o, !a.length), c.length = c.area = 0);
                r.forEach(e)
            }
        }

        function r(n, t) {
            for (var e, r = n.area, u = 0, i = 1 / 0, o = -1, a = n.length; ++o < a;)(e = n[o].area) && (i > e && (i = e), e > u && (u = e));
            return r *= r, t *= t, r ? Math.max(t * u * p / r, r / (t * i * p)) : 1 / 0
        }

        function u(n, t, e, r) {
            var u, i = -1,
                o = n.length,
                a = e.x,
                s = e.y,
                l = t ? c(n.area / t) : 0;
            if (t == e.dx) {
                for ((r || l > e.dy) && (l = e.dy); ++i < o;) u = n[i], u.x = a, u.y = s, u.dy = l, a += u.dx = Math.min(e.x + e.dx - a, l ? c(u.area / l) : 0);
                u.z = !0, u.dx += e.x + e.dx - a, e.y += l, e.dy -= l
            } else {
                for ((r || l > e.dx) && (l = e.dx); ++i < o;) u = n[i], u.x = a, u.y = s, u.dx = l, s += u.dy = Math.min(e.y + e.dy - s, l ? c(u.area / l) : 0);
                u.z = !1, u.dy += e.y + e.dy - s, e.x += l, e.dx -= l
            }
        }

        function i(r) {
            var u = o || a(r),
                i = u[0];
            return i.x = 0, i.y = 0, i.dx = s[0], i.dy = s[1], o && a.revalue(i), n([i], i.dx * i.dy / i.value), (o ? e : t)(i), h && (o = u), u
        }
        var o, a = Go.layout.hierarchy(),
            c = Math.round,
            s = [1, 1],
            l = null,
            f = Pi,
            h = !1,
            g = "squarify",
            p = .5 * (1 + Math.sqrt(5));
        return i.size = function(n) {
            return arguments.length ? (s = n, i) : s
        }, i.padding = function(n) {
            function t(t) {
                var e = n.call(i, t, t.depth);
                return null == e ? Pi(t) : Ui(t, "number" == typeof e ? [e, e, e, e] : e)
            }

            function e(t) {
                return Ui(t, n)
            }
            if (!arguments.length) return l;
            var r;
            return f = null == (l = n) ? Pi : "function" == (r = typeof n) ? t : "number" === r ? (n = [n, n, n, n], e) : e, i
        }, i.round = function(n) {
            return arguments.length ? (c = n ? Math.round : Number, i) : c != Number
        }, i.sticky = function(n) {
            return arguments.length ? (h = n, o = null, i) : h
        }, i.ratio = function(n) {
            return arguments.length ? (p = n, i) : p
        }, i.mode = function(n) {
            return arguments.length ? (g = n + "", i) : g
        }, Wu(i, a)
    }, Go.random = {
        normal: function(n, t) {
            var e = arguments.length;
            return 2 > e && (t = 1), 1 > e && (n = 0),
            function() {
                var e, r, u;
                do e = 2 * Math.random() - 1, r = 2 * Math.random() - 1, u = e * e + r * r; while (!u || u > 1);
                return n + t * e * Math.sqrt(-2 * Math.log(u) / u)
            }
        },
        logNormal: function() {
            var n = Go.random.normal.apply(Go, arguments);
            return function() {
                return Math.exp(n())
            }
        },
        bates: function(n) {
            var t = Go.random.irwinHall(n);
            return function() {
                return t() / n
            }
        },
        irwinHall: function(n) {
            return function() {
                for (var t = 0, e = 0; n > e; e++) t += Math.random();
                return t
            }
        }
    }, Go.scale = {};
    var vs = {
        floor: At,
        ceil: At
    };
    Go.scale.linear = function() {
        return Zi([0, 1], [0, 1], du, !1)
    };
    var ds = {
        s: 1,
        g: 1,
        p: 1,
        r: 1,
        e: 1
    };
    Go.scale.log = function() {
        return Ki(Go.scale.linear().domain([0, 1]), 10, !0, [1, 10])
    };
    var ms = Go.format(".0e"),
        ys = {
            floor: function(n) {
                return -Math.ceil(-n)
            },
            ceil: function(n) {
                return -Math.floor(-n)
            }
        };
    Go.scale.pow = function() {
        return Qi(Go.scale.linear(), 1, [0, 1])
    }, Go.scale.sqrt = function() {
        return Go.scale.pow().exponent(.5)
    }, Go.scale.ordinal = function() {
        return to([], {
            t: "range",
            a: [
                []
            ]
        })
    }, Go.scale.category10 = function() {
        return Go.scale.ordinal().range(xs)
    }, Go.scale.category20 = function() {
        return Go.scale.ordinal().range(Ms)
    }, Go.scale.category20b = function() {
        return Go.scale.ordinal().range(_s)
    }, Go.scale.category20c = function() {
        return Go.scale.ordinal().range(bs)
    };
    var xs = [2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175].map(mt),
        Ms = [2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725].map(mt),
        _s = [3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654].map(mt),
        bs = [3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081].map(mt);
    Go.scale.quantile = function() {
        return eo([], [])
    }, Go.scale.quantize = function() {
        return ro(0, 1, [0, 1])
    }, Go.scale.threshold = function() {
        return uo([.5], [0, 1])
    }, Go.scale.identity = function() {
        return io([0, 1])
    }, Go.svg = {}, Go.svg.arc = function() {
        function n() {
            var n = t.apply(this, arguments),
                i = e.apply(this, arguments),
                o = r.apply(this, arguments) + ws,
                a = u.apply(this, arguments) + ws,
                c = (o > a && (c = o, o = a, a = c), a - o),
                s = Ca > c ? "0" : "1",
                l = Math.cos(o),
                f = Math.sin(o),
                h = Math.cos(a),
                g = Math.sin(a);
            return c >= Ss ? n ? "M0," + i + "A" + i + "," + i + " 0 1,1 0," + -i + "A" + i + "," + i + " 0 1,1 0," + i + "M0," + n + "A" + n + "," + n + " 0 1,0 0," + -n + "A" + n + "," + n + " 0 1,0 0," + n + "Z" : "M0," + i + "A" + i + "," + i + " 0 1,1 0," + -i + "A" + i + "," + i + " 0 1,1 0," + i + "Z" : n ? "M" + i * l + "," + i * f + "A" + i + "," + i + " 0 " + s + ",1 " + i * h + "," + i * g + "L" + n * h + "," + n * g + "A" + n + "," + n + " 0 " + s + ",0 " + n * l + "," + n * f + "Z" : "M" + i * l + "," + i * f + "A" + i + "," + i + " 0 " + s + ",1 " + i * h + "," + i * g + "L0,0" + "Z"
        }
        var t = oo,
            e = ao,
            r = co,
            u = so;
        return n.innerRadius = function(e) {
            return arguments.length ? (t = Et(e), n) : t
        }, n.outerRadius = function(t) {
            return arguments.length ? (e = Et(t), n) : e
        }, n.startAngle = function(t) {
            return arguments.length ? (r = Et(t), n) : r
        }, n.endAngle = function(t) {
            return arguments.length ? (u = Et(t), n) : u
        }, n.centroid = function() {
            var n = (t.apply(this, arguments) + e.apply(this, arguments)) / 2,
                i = (r.apply(this, arguments) + u.apply(this, arguments)) / 2 + ws;
            return [Math.cos(i) * n, Math.sin(i) * n]
        }, n
    };
    var ws = -La,
        Ss = Na - Ta;
    Go.svg.line = function() {
        return lo(At)
    };
    var ks = Go.map({
        linear: fo,
        "linear-closed": ho,
        step: go,
        "step-before": po,
        "step-after": vo,
        basis: bo,
        "basis-open": wo,
        "basis-closed": So,
        bundle: ko,
        cardinal: xo,
        "cardinal-open": mo,
        "cardinal-closed": yo,
        monotone: To
    });
    ks.forEach(function(n, t) {
        t.key = n, t.closed = /-closed$/.test(n)
    });
    var Es = [0, 2 / 3, 1 / 3, 0],
        As = [0, 1 / 3, 2 / 3, 0],
        Cs = [0, 1 / 6, 2 / 3, 1 / 6];
    Go.svg.line.radial = function() {
        var n = lo(qo);
        return n.radius = n.x, delete n.x, n.angle = n.y, delete n.y, n
    }, po.reverse = vo, vo.reverse = po, Go.svg.area = function() {
        return zo(At)
    }, Go.svg.area.radial = function() {
        var n = zo(qo);
        return n.radius = n.x, delete n.x, n.innerRadius = n.x0, delete n.x0, n.outerRadius = n.x1, delete n.x1, n.angle = n.y, delete n.y, n.startAngle = n.y0, delete n.y0, n.endAngle = n.y1, delete n.y1, n
    }, Go.svg.chord = function() {
        function n(n, a) {
            var c = t(this, i, n, a),
                s = t(this, o, n, a);
            return "M" + c.p0 + r(c.r, c.p1, c.a1 - c.a0) + (e(c, s) ? u(c.r, c.p1, c.r, c.p0) : u(c.r, c.p1, s.r, s.p0) + r(s.r, s.p1, s.a1 - s.a0) + u(s.r, s.p1, c.r, c.p0)) + "Z"
        }

        function t(n, t, e, r) {
            var u = t.call(n, e, r),
                i = a.call(n, u, r),
                o = c.call(n, u, r) + ws,
                l = s.call(n, u, r) + ws;
            return {
                r: i,
                a0: o,
                a1: l,
                p0: [i * Math.cos(o), i * Math.sin(o)],
                p1: [i * Math.cos(l), i * Math.sin(l)]
            }
        }

        function e(n, t) {
            return n.a0 == t.a0 && n.a1 == t.a1
        }

        function r(n, t, e) {
            return "A" + n + "," + n + " 0 " + +(e > Ca) + ",1 " + t
        }

        function u(n, t, e, r) {
            return "Q 0,0 " + r
        }
        var i = mr,
            o = yr,
            a = Ro,
            c = co,
            s = so;
        return n.radius = function(t) {
            return arguments.length ? (a = Et(t), n) : a
        }, n.source = function(t) {
            return arguments.length ? (i = Et(t), n) : i
        }, n.target = function(t) {
            return arguments.length ? (o = Et(t), n) : o
        }, n.startAngle = function(t) {
            return arguments.length ? (c = Et(t), n) : c
        }, n.endAngle = function(t) {
            return arguments.length ? (s = Et(t), n) : s
        }, n
    }, Go.svg.diagonal = function() {
        function n(n, u) {
            var i = t.call(this, n, u),
                o = e.call(this, n, u),
                a = (i.y + o.y) / 2,
                c = [i, {
                        x: i.x,
                        y: a
                    }, {
                        x: o.x,
                        y: a
                    },
                    o
                ];
            return c = c.map(r), "M" + c[0] + "C" + c[1] + " " + c[2] + " " + c[3]
        }
        var t = mr,
            e = yr,
            r = Do;
        return n.source = function(e) {
            return arguments.length ? (t = Et(e), n) : t
        }, n.target = function(t) {
            return arguments.length ? (e = Et(t), n) : e
        }, n.projection = function(t) {
            return arguments.length ? (r = t, n) : r
        }, n
    }, Go.svg.diagonal.radial = function() {
        var n = Go.svg.diagonal(),
            t = Do,
            e = n.projection;
        return n.projection = function(n) {
            return arguments.length ? e(Po(t = n)) : t
        }, n
    }, Go.svg.symbol = function() {
        function n(n, r) {
            return (Ns.get(t.call(this, n, r)) || Ho)(e.call(this, n, r))
        }
        var t = jo,
            e = Uo;
        return n.type = function(e) {
            return arguments.length ? (t = Et(e), n) : t
        }, n.size = function(t) {
            return arguments.length ? (e = Et(t), n) : e
        }, n
    };
    var Ns = Go.map({
        circle: Ho,
        cross: function(n) {
            var t = Math.sqrt(n / 5) / 2;
            return "M" + -3 * t + "," + -t + "H" + -t + "V" + -3 * t + "H" + t + "V" + -t + "H" + 3 * t + "V" + t + "H" + t + "V" + 3 * t + "H" + -t + "V" + t + "H" + -3 * t + "Z"
        },
        diamond: function(n) {
            var t = Math.sqrt(n / (2 * zs)),
                e = t * zs;
            return "M0," + -t + "L" + e + ",0" + " 0," + t + " " + -e + ",0" + "Z"
        },
        square: function(n) {
            var t = Math.sqrt(n) / 2;
            return "M" + -t + "," + -t + "L" + t + "," + -t + " " + t + "," + t + " " + -t + "," + t + "Z"
        },
        "triangle-down": function(n) {
            var t = Math.sqrt(n / qs),
                e = t * qs / 2;
            return "M0," + e + "L" + t + "," + -e + " " + -t + "," + -e + "Z"
        },
        "triangle-up": function(n) {
            var t = Math.sqrt(n / qs),
                e = t * qs / 2;
            return "M0," + -e + "L" + t + "," + e + " " + -t + "," + e + "Z"
        }
    });
    Go.svg.symbolTypes = Ns.keys();
    var Ls, Ts, qs = Math.sqrt(3),
        zs = Math.tan(30 * za),
        Rs = [],
        Ds = 0;
    Rs.call = _a.call, Rs.empty = _a.empty, Rs.node = _a.node, Rs.size = _a.size, Go.transition = function(n) {
        return arguments.length ? Ls ? n.transition() : n : Sa.transition()
    }, Go.transition.prototype = Rs, Rs.select = function(n) {
        var t, e, r, u = this.id,
            i = [];
        n = b(n);
        for (var o = -1, a = this.length; ++o < a;) {
            i.push(t = []);
            for (var c = this[o], s = -1, l = c.length; ++s < l;)(r = c[s]) && (e = n.call(r, r.__data__, s, o)) ? ("__data__" in r && (e.__data__ = r.__data__), Yo(e, s, u, r.__transition__[u]), t.push(e)) : t.push(null)
        }
        return Fo(i, u)
    }, Rs.selectAll = function(n) {
        var t, e, r, u, i, o = this.id,
            a = [];
        n = w(n);
        for (var c = -1, s = this.length; ++c < s;)
            for (var l = this[c], f = -1, h = l.length; ++f < h;)
                if (r = l[f]) {
                    i = r.__transition__[o], e = n.call(r, r.__data__, f, c), a.push(t = []);
                    for (var g = -1, p = e.length; ++g < p;)(u = e[g]) && Yo(u, g, o, i), t.push(u)
                }
        return Fo(a, o)
    }, Rs.filter = function(n) {
        var t, e, r, u = [];
        "function" != typeof n && (n = R(n));
        for (var i = 0, o = this.length; o > i; i++) {
            u.push(t = []);
            for (var e = this[i], a = 0, c = e.length; c > a; a++)(r = e[a]) && n.call(r, r.__data__, a, i) && t.push(r)
        }
        return Fo(u, this.id)
    }, Rs.tween = function(n, t) {
        var e = this.id;
        return arguments.length < 2 ? this.node().__transition__[e].tween.get(n) : P(this, null == t ? function(t) {
            t.__transition__[e].tween.remove(n)
        } : function(r) {
            r.__transition__[e].tween.set(n, t)
        })
    }, Rs.attr = function(n, t) {
        function e() {
            this.removeAttribute(a)
        }

        function r() {
            this.removeAttributeNS(a.space, a.local)
        }

        function u(n) {
            return null == n ? e : (n += "", function() {
                var t, e = this.getAttribute(a);
                return e !== n && (t = o(e, n), function(n) {
                    this.setAttribute(a, t(n))
                })
            })
        }

        function i(n) {
            return null == n ? r : (n += "", function() {
                var t, e = this.getAttributeNS(a.space, a.local);
                return e !== n && (t = o(e, n), function(n) {
                    this.setAttributeNS(a.space, a.local, t(n))
                })
            })
        }
        if (arguments.length < 2) {
            for (t in n) this.attr(t, n[t]);
            return this
        }
        var o = "transform" == n ? Hu : du,
            a = Go.ns.qualify(n);
        return Oo(this, "attr." + n, t, a.local ? i : u)
    }, Rs.attrTween = function(n, t) {
        function e(n, e) {
            var r = t.call(this, n, e, this.getAttribute(u));
            return r && function(n) {
                this.setAttribute(u, r(n))
            }
        }

        function r(n, e) {
            var r = t.call(this, n, e, this.getAttributeNS(u.space, u.local));
            return r && function(n) {
                this.setAttributeNS(u.space, u.local, r(n))
            }
        }
        var u = Go.ns.qualify(n);
        return this.tween("attr." + n, u.local ? r : e)
    }, Rs.style = function(n, t, e) {
        function r() {
            this.style.removeProperty(n)
        }

        function u(t) {
            return null == t ? r : (t += "", function() {
                var r, u = ea.getComputedStyle(this, null).getPropertyValue(n);
                return u !== t && (r = du(u, t), function(t) {
                    this.style.setProperty(n, r(t), e)
                })
            })
        }
        var i = arguments.length;
        if (3 > i) {
            if ("string" != typeof n) {
                2 > i && (t = "");
                for (e in n) this.style(e, n[e], t);
                return this
            }
            e = ""
        }
        return Oo(this, "style." + n, t, u)
    }, Rs.styleTween = function(n, t, e) {
        function r(r, u) {
            var i = t.call(this, r, u, ea.getComputedStyle(this, null).getPropertyValue(n));
            return i && function(t) {
                this.style.setProperty(n, i(t), e)
            }
        }
        return arguments.length < 3 && (e = ""), this.tween("style." + n, r)
    }, Rs.text = function(n) {
        return Oo(this, "text", n, Io)
    }, Rs.remove = function() {
        return this.each("end.transition", function() {
            var n;
            this.__transition__.count < 2 && (n = this.parentNode) && n.removeChild(this)
        })
    }, Rs.ease = function(n) {
        var t = this.id;
        return arguments.length < 1 ? this.node().__transition__[t].ease : ("function" != typeof n && (n = Go.ease.apply(Go, arguments)), P(this, function(e) {
            e.__transition__[t].ease = n
        }))
    }, Rs.delay = function(n) {
        var t = this.id;
        return arguments.length < 1 ? this.node().__transition__[t].delay : P(this, "function" == typeof n ? function(e, r, u) {
            e.__transition__[t].delay = +n.call(e, e.__data__, r, u)
        } : (n = +n, function(e) {
            e.__transition__[t].delay = n
        }))
    }, Rs.duration = function(n) {
        var t = this.id;
        return arguments.length < 1 ? this.node().__transition__[t].duration : P(this, "function" == typeof n ? function(e, r, u) {
            e.__transition__[t].duration = Math.max(1, n.call(e, e.__data__, r, u))
        } : (n = Math.max(1, n), function(e) {
            e.__transition__[t].duration = n
        }))
    }, Rs.each = function(n, t) {
        var e = this.id;
        if (arguments.length < 2) {
            var r = Ts,
                u = Ls;
            Ls = e, P(this, function(t, r, u) {
                Ts = t.__transition__[e], n.call(t, t.__data__, r, u)
            }), Ts = r, Ls = u
        } else P(this, function(r) {
            var u = r.__transition__[e];
            (u.event || (u.event = Go.dispatch("start", "end"))).on(n, t)
        });
        return this
    }, Rs.transition = function() {
        for (var n, t, e, r, u = this.id, i = ++Ds, o = [], a = 0, c = this.length; c > a; a++) {
            o.push(n = []);
            for (var t = this[a], s = 0, l = t.length; l > s; s++)(e = t[s]) && (r = Object.create(e.__transition__[u]), r.delay += r.duration, Yo(e, s, i, r)), n.push(e)
        }
        return Fo(o, i)
    }, Go.svg.axis = function() {
        function n(n) {
            n.each(function() {
                var n, s = Go.select(this),
                    l = this.__chart__ || e,
                    f = this.__chart__ = e.copy(),
                    h = null == c ? f.ticks ? f.ticks.apply(f, a) : f.domain() : c,
                    g = null == t ? f.tickFormat ? f.tickFormat.apply(f, a) : At : t,
                    p = s.selectAll(".tick").data(h, f),
                    v = p.enter().insert("g", ".domain").attr("class", "tick").style("opacity", Ta),
                    d = Go.transition(p.exit()).style("opacity", Ta).remove(),
                    m = Go.transition(p.order()).style("opacity", 1),
                    y = Hi(f),
                    x = s.selectAll(".domain").data([0]),
                    M = (x.enter().append("path").attr("class", "domain"), Go.transition(x));
                v.append("line"), v.append("text");
                var _ = v.select("line"),
                    b = m.select("line"),
                    w = p.select("text").text(g),
                    S = v.select("text"),
                    k = m.select("text");
                switch (r) {
                    case "bottom":
                        n = Zo, _.attr("y2", u), S.attr("y", Math.max(u, 0) + o), b.attr("x2", 0).attr("y2", u), k.attr("x", 0).attr("y", Math.max(u, 0) + o), w.attr("dy", ".71em").style("text-anchor", "middle"), M.attr("d", "M" + y[0] + "," + i + "V0H" + y[1] + "V" + i);
                        break;
                    case "top":
                        n = Zo, _.attr("y2", -u), S.attr("y", -(Math.max(u, 0) + o)), b.attr("x2", 0).attr("y2", -u), k.attr("x", 0).attr("y", -(Math.max(u, 0) + o)), w.attr("dy", "0em").style("text-anchor", "middle"), M.attr("d", "M" + y[0] + "," + -i + "V0H" + y[1] + "V" + -i);
                        break;
                    case "left":
                        n = Vo, _.attr("x2", -u), S.attr("x", -(Math.max(u, 0) + o)), b.attr("x2", -u).attr("y2", 0), k.attr("x", -(Math.max(u, 0) + o)).attr("y", 0), w.attr("dy", ".32em").style("text-anchor", "end"), M.attr("d", "M" + -i + "," + y[0] + "H0V" + y[1] + "H" + -i);
                        break;
                    case "right":
                        n = Vo, _.attr("x2", u), S.attr("x", Math.max(u, 0) + o), b.attr("x2", u).attr("y2", 0), k.attr("x", Math.max(u, 0) + o).attr("y", 0), w.attr("dy", ".32em").style("text-anchor", "start"), M.attr("d", "M" + i + "," + y[0] + "H0V" + y[1] + "H" + i)
                }
                if (f.rangeBand) {
                    var E = f,
                        A = E.rangeBand() / 2;
                    l = f = function(n) {
                        return E(n) + A
                    }
                } else l.rangeBand ? l = f : d.call(n, f);
                v.call(n, l), m.call(n, f)
            })
        }
        var t, e = Go.scale.linear(),
            r = Ps,
            u = 6,
            i = 6,
            o = 3,
            a = [10],
            c = null;
        return n.scale = function(t) {
            return arguments.length ? (e = t, n) : e
        }, n.orient = function(t) {
            return arguments.length ? (r = t in Us ? t + "" : Ps, n) : r
        }, n.ticks = function() {
            return arguments.length ? (a = arguments, n) : a
        }, n.tickValues = function(t) {
            return arguments.length ? (c = t, n) : c
        }, n.tickFormat = function(e) {
            return arguments.length ? (t = e, n) : t
        }, n.tickSize = function(t) {
            var e = arguments.length;
            return e ? (u = +t, i = +arguments[e - 1], n) : u
        }, n.innerTickSize = function(t) {
            return arguments.length ? (u = +t, n) : u
        }, n.outerTickSize = function(t) {
            return arguments.length ? (i = +t, n) : i
        }, n.tickPadding = function(t) {
            return arguments.length ? (o = +t, n) : o
        }, n.tickSubdivide = function() {
            return arguments.length && n
        }, n
    };
    var Ps = "bottom",
        Us = {
            top: 1,
            right: 1,
            bottom: 1,
            left: 1
        };
    Go.svg.brush = function() {
        function n(i) {
            i.each(function() {
                var i = Go.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", u).on("touchstart.brush", u),
                    o = i.selectAll(".background").data([0]);
                o.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair"), i.selectAll(".extent").data([0]).enter().append("rect").attr("class", "extent").style("cursor", "move");
                var a = i.selectAll(".resize").data(p, At);
                a.exit().remove(), a.enter().append("g").attr("class", function(n) {
                    return "resize " + n
                }).style("cursor", function(n) {
                    return js[n]
                }).append("rect").attr("x", function(n) {
                    return /[ew]$/.test(n) ? -3 : null
                }).attr("y", function(n) {
                    return /^[ns]/.test(n) ? -3 : null
                }).attr("width", 6).attr("height", 6).style("visibility", "hidden"), a.style("display", n.empty() ? "none" : null);
                var l, f = Go.transition(i),
                    h = Go.transition(o);
                c && (l = Hi(c), h.attr("x", l[0]).attr("width", l[1] - l[0]), e(f)), s && (l = Hi(s), h.attr("y", l[0]).attr("height", l[1] - l[0]), r(f)), t(f)
            })
        }

        function t(n) {
            n.selectAll(".resize").attr("transform", function(n) {
                return "translate(" + l[+/e$/.test(n)] + "," + f[+/^s/.test(n)] + ")"
            })
        }

        function e(n) {
            n.select(".extent").attr("x", l[0]), n.selectAll(".extent,.n>rect,.s>rect").attr("width", l[1] - l[0])
        }

        function r(n) {
            n.select(".extent").attr("y", f[0]), n.selectAll(".extent,.e>rect,.w>rect").attr("height", f[1] - f[0])
        }

        function u() {
            function u() {
                32 == Go.event.keyCode && (C || (x = null, L[0] -= l[1], L[1] -= f[1], C = 2), y())
            }

            function p() {
                32 == Go.event.keyCode && 2 == C && (L[0] += l[1], L[1] += f[1], C = 0, y())
            }

            function v() {
                var n = Go.mouse(_),
                    u = !1;
                M && (n[0] += M[0], n[1] += M[1]), C || (Go.event.altKey ? (x || (x = [(l[0] + l[1]) / 2, (f[0] + f[1]) / 2]), L[0] = l[+(n[0] < x[0])], L[1] = f[+(n[1] < x[1])]) : x = null), E && d(n, c, 0) && (e(S), u = !0), A && d(n, s, 1) && (r(S), u = !0), u && (t(S), w({
                    type: "brush",
                    mode: C ? "move" : "resize"
                }))
            }

            function d(n, t, e) {
                var r, u, a = Hi(t),
                    c = a[0],
                    s = a[1],
                    p = L[e],
                    v = e ? f : l,
                    d = v[1] - v[0];
                return C && (c -= p, s -= d + p), r = (e ? g : h) ? Math.max(c, Math.min(s, n[e])) : n[e], C ? u = (r += p) + d : (x && (p = Math.max(c, Math.min(s, 2 * x[e] - r))), r > p ? (u = r, r = p) : u = p), v[0] != r || v[1] != u ? (e ? o = null : i = null, v[0] = r, v[1] = u, !0) : void 0
            }

            function m() {
                v(), S.style("pointer-events", "all").selectAll(".resize").style("display", n.empty() ? "none" : null), Go.select("body").style("cursor", null), T.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null), N(), w({
                    type: "brushend"
                })
            }
            var x, M, _ = this,
                b = Go.select(Go.event.target),
                w = a.of(_, arguments),
                S = Go.select(_),
                k = b.datum(),
                E = !/^(n|s)$/.test(k) && c,
                A = !/^(e|w)$/.test(k) && s,
                C = b.classed("extent"),
                N = Y(),
                L = Go.mouse(_),
                T = Go.select(ea).on("keydown.brush", u).on("keyup.brush", p);
            if (Go.event.changedTouches ? T.on("touchmove.brush", v).on("touchend.brush", m) : T.on("mousemove.brush", v).on("mouseup.brush", m), S.interrupt().selectAll("*").interrupt(), C) L[0] = l[0] - L[0], L[1] = f[0] - L[1];
            else if (k) {
                var q = +/w$/.test(k),
                    z = +/^n/.test(k);
                M = [l[1 - q] - L[0], f[1 - z] - L[1]], L[0] = l[q], L[1] = f[z]
            } else Go.event.altKey && (x = L.slice());
            S.style("pointer-events", "none").selectAll(".resize").style("display", null), Go.select("body").style("cursor", b.style("cursor")), w({
                type: "brushstart"
            }), v()
        }
        var i, o, a = M(n, "brushstart", "brush", "brushend"),
            c = null,
            s = null,
            l = [0, 0],
            f = [0, 0],
            h = !0,
            g = !0,
            p = Hs[0];
        return n.event = function(n) {
            n.each(function() {
                var n = a.of(this, arguments),
                    t = {
                        x: l,
                        y: f,
                        i: i,
                        j: o
                    }, e = this.__chart__ || t;
                this.__chart__ = t, Ls ? Go.select(this).transition().each("start.brush", function() {
                    i = e.i, o = e.j, l = e.x, f = e.y, n({
                        type: "brushstart"
                    })
                }).tween("brush:brush", function() {
                    var e = mu(l, t.x),
                        r = mu(f, t.y);
                    return i = o = null,
                    function(u) {
                        l = t.x = e(u), f = t.y = r(u), n({
                            type: "brush",
                            mode: "resize"
                        })
                    }
                }).each("end.brush", function() {
                    i = t.i, o = t.j, n({
                        type: "brush",
                        mode: "resize"
                    }), n({
                        type: "brushend"
                    })
                }) : (n({
                    type: "brushstart"
                }), n({
                    type: "brush",
                    mode: "resize"
                }), n({
                    type: "brushend"
                }))
            })
        }, n.x = function(t) {
            return arguments.length ? (c = t, p = Hs[!c << 1 | !s], n) : c
        }, n.y = function(t) {
            return arguments.length ? (s = t, p = Hs[!c << 1 | !s], n) : s
        }, n.clamp = function(t) {
            return arguments.length ? (c && s ? (h = !! t[0], g = !! t[1]) : c ? h = !! t : s && (g = !! t), n) : c && s ? [h, g] : c ? h : s ? g : null
        }, n.extent = function(t) {
            var e, r, u, a, h;
            return arguments.length ? (c && (e = t[0], r = t[1], s && (e = e[0], r = r[0]), i = [e, r], c.invert && (e = c(e), r = c(r)), e > r && (h = e, e = r, r = h), (e != l[0] || r != l[1]) && (l = [e, r])), s && (u = t[0], a = t[1], c && (u = u[1], a = a[1]), o = [u, a], s.invert && (u = s(u), a = s(a)), u > a && (h = u, u = a, a = h), (u != f[0] || a != f[1]) && (f = [u, a])), n) : (c && (i ? (e = i[0], r = i[1]) : (e = l[0], r = l[1], c.invert && (e = c.invert(e), r = c.invert(r)), e > r && (h = e, e = r, r = h))), s && (o ? (u = o[0], a = o[1]) : (u = f[0], a = f[1], s.invert && (u = s.invert(u), a = s.invert(a)), u > a && (h = u, u = a, a = h))), c && s ? [
                [e, u],
                [r, a]
            ] : c ? [e, r] : s && [u, a])
        }, n.clear = function() {
            return n.empty() || (l = [0, 0], f = [0, 0], i = o = null), n
        }, n.empty = function() {
            return !!c && l[0] == l[1] || !! s && f[0] == f[1]
        }, Go.rebind(n, a, "on")
    };
    var js = {
        n: "ns-resize",
        e: "ew-resize",
        s: "ns-resize",
        w: "ew-resize",
        nw: "nwse-resize",
        ne: "nesw-resize",
        se: "nwse-resize",
        sw: "nesw-resize"
    }, Hs = [
            ["n", "e", "s", "w", "nw", "ne", "se", "sw"],
            ["e", "w"],
            ["n", "s"],
            []
        ],
        Fs = ic.format = fc.timeFormat,
        Os = Fs.utc,
        Is = Os("%Y-%m-%dT%H:%M:%S.%LZ");
    Fs.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? $o : Is, $o.parse = function(n) {
        var t = new Date(n);
        return isNaN(t) ? null : t
    }, $o.toString = Is.toString, ic.second = Ht(function(n) {
        return new oc(1e3 * Math.floor(n / 1e3))
    }, function(n, t) {
        n.setTime(n.getTime() + 1e3 * Math.floor(t))
    }, function(n) {
        return n.getSeconds()
    }), ic.seconds = ic.second.range, ic.seconds.utc = ic.second.utc.range, ic.minute = Ht(function(n) {
        return new oc(6e4 * Math.floor(n / 6e4))
    }, function(n, t) {
        n.setTime(n.getTime() + 6e4 * Math.floor(t))
    }, function(n) {
        return n.getMinutes()
    }), ic.minutes = ic.minute.range, ic.minutes.utc = ic.minute.utc.range, ic.hour = Ht(function(n) {
        var t = n.getTimezoneOffset() / 60;
        return new oc(36e5 * (Math.floor(n / 36e5 - t) + t))
    }, function(n, t) {
        n.setTime(n.getTime() + 36e5 * Math.floor(t))
    }, function(n) {
        return n.getHours()
    }), ic.hours = ic.hour.range, ic.hours.utc = ic.hour.utc.range, ic.month = Ht(function(n) {
        return n = ic.day(n), n.setDate(1), n
    }, function(n, t) {
        n.setMonth(n.getMonth() + t)
    }, function(n) {
        return n.getMonth()
    }), ic.months = ic.month.range, ic.months.utc = ic.month.utc.range;
    var Ys = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6],
        Zs = [
            [ic.second, 1],
            [ic.second, 5],
            [ic.second, 15],
            [ic.second, 30],
            [ic.minute, 1],
            [ic.minute, 5],
            [ic.minute, 15],
            [ic.minute, 30],
            [ic.hour, 1],
            [ic.hour, 3],
            [ic.hour, 6],
            [ic.hour, 12],
            [ic.day, 1],
            [ic.day, 2],
            [ic.week, 1],
            [ic.month, 1],
            [ic.month, 3],
            [ic.year, 1]
        ],
        Vs = Fs.multi([
            [".%L",
                function(n) {
                    return n.getMilliseconds()
                }
            ],
            [":%S",
                function(n) {
                    return n.getSeconds()
                }
            ],
            ["%I:%M",
                function(n) {
                    return n.getMinutes()
                }
            ],
            ["%I %p",
                function(n) {
                    return n.getHours()
                }
            ],
            ["%a %d",
                function(n) {
                    return n.getDay() && 1 != n.getDate()
                }
            ],
            ["%b %d",
                function(n) {
                    return 1 != n.getDate()
                }
            ],
            ["%B",
                function(n) {
                    return n.getMonth()
                }
            ],
            ["%Y", Ae]
        ]),
        $s = {
            range: function(n, t, e) {
                return Go.range(Math.ceil(n / e) * e, +t, e).map(Bo)
            },
            floor: At,
            ceil: At
        };
    Zs.year = ic.year, ic.scale = function() {
        return Xo(Go.scale.linear(), Zs, Vs)
    };
    var Xs = Zs.map(function(n) {
        return [n[0].utc, n[1]]
    }),
        Bs = Os.multi([
            [".%L",
                function(n) {
                    return n.getUTCMilliseconds()
                }
            ],
            [":%S",
                function(n) {
                    return n.getUTCSeconds()
                }
            ],
            ["%I:%M",
                function(n) {
                    return n.getUTCMinutes()
                }
            ],
            ["%I %p",
                function(n) {
                    return n.getUTCHours()
                }
            ],
            ["%a %d",
                function(n) {
                    return n.getUTCDay() && 1 != n.getUTCDate()
                }
            ],
            ["%b %d",
                function(n) {
                    return 1 != n.getUTCDate()
                }
            ],
            ["%B",
                function(n) {
                    return n.getUTCMonth()
                }
            ],
            ["%Y", Ae]
        ]);
    Xs.year = ic.year.utc, ic.scale.utc = function() {
        return Xo(Go.scale.linear(), Xs, Bs)
    }, Go.text = Ct(function(n) {
        return n.responseText
    }), Go.json = function(n, t) {
        return Nt(n, "application/json", Jo, t)
    }, Go.html = function(n, t) {
        return Nt(n, "text/html", Wo, t)
    }, Go.xml = Ct(function(n) {
        return n.responseXML
    }), "function" == typeof define && define.amd ? define(Go) : "object" == typeof module && module.exports ? module.exports = Go : this.d3 = Go
}();