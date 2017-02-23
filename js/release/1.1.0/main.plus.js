define('angular', [], function () {
    (function (M, Y, t) {
        'use strict';
        function T(b) {
            return function () {
                var a = arguments[0], c;
                c = '[' + (b ? b + ':' : '') + a + '] http://errors.angularjs.org/1.3.11/' + (b ? b + '/' : '') + a;
                for (a = 1; a < arguments.length; a++) {
                    c = c + (1 == a ? '?' : '&') + 'p' + (a - 1) + '=';
                    var d = encodeURIComponent, e;
                    e = arguments[a];
                    e = 'function' == typeof e ? e.toString().replace(/ \{[\s\S]*$/, '') : 'undefined' == typeof e ? 'undefined' : 'string' != typeof e ? JSON.stringify(e) : e;
                    c += d(e);
                }
                return Error(c);
            };
        }
        function Ta(b) {
            if (null == b || Ua(b))
                return !1;
            var a = b.length;
            return b.nodeType === oa && a ? !0 : F(b) || D(b) || 0 === a || 'number' === typeof a && 0 < a && a - 1 in b;
        }
        function s(b, a, c) {
            var d, e;
            if (b)
                if (G(b))
                    for (d in b)
                        'prototype' == d || 'length' == d || 'name' == d || b.hasOwnProperty && !b.hasOwnProperty(d) || a.call(c, b[d], d, b);
                else if (D(b) || Ta(b)) {
                    var f = 'object' !== typeof b;
                    d = 0;
                    for (e = b.length; d < e; d++)
                        (f || d in b) && a.call(c, b[d], d, b);
                } else if (b.forEach && b.forEach !== s)
                    b.forEach(a, c, b);
                else
                    for (d in b)
                        b.hasOwnProperty(d) && a.call(c, b[d], d, b);
            return b;
        }
        function Ed(b, a, c) {
            for (var d = Object.keys(b).sort(), e = 0; e < d.length; e++)
                a.call(c, b[d[e]], d[e]);
            return d;
        }
        function kc(b) {
            return function (a, c) {
                b(c, a);
            };
        }
        function Fd() {
            return ++nb;
        }
        function lc(b, a) {
            a ? b.$$hashKey = a : delete b.$$hashKey;
        }
        function z(b) {
            for (var a = b.$$hashKey, c = 1, d = arguments.length; c < d; c++) {
                var e = arguments[c];
                if (e)
                    for (var f = Object.keys(e), g = 0, h = f.length; g < h; g++) {
                        var l = f[g];
                        b[l] = e[l];
                    }
            }
            lc(b, a);
            return b;
        }
        function ba(b) {
            return parseInt(b, 10);
        }
        function H() {
        }
        function pa(b) {
            return b;
        }
        function da(b) {
            return function () {
                return b;
            };
        }
        function A(b) {
            return 'undefined' === typeof b;
        }
        function y(b) {
            return 'undefined' !== typeof b;
        }
        function I(b) {
            return null !== b && 'object' === typeof b;
        }
        function F(b) {
            return 'string' === typeof b;
        }
        function V(b) {
            return 'number' === typeof b;
        }
        function qa(b) {
            return '[object Date]' === Da.call(b);
        }
        function G(b) {
            return 'function' === typeof b;
        }
        function ob(b) {
            return '[object RegExp]' === Da.call(b);
        }
        function Ua(b) {
            return b && b.window === b;
        }
        function Va(b) {
            return b && b.$evalAsync && b.$watch;
        }
        function Wa(b) {
            return 'boolean' === typeof b;
        }
        function mc(b) {
            return !(!b || !(b.nodeName || b.prop && b.attr && b.find));
        }
        function Gd(b) {
            var a = {};
            b = b.split(',');
            var c;
            for (c = 0; c < b.length; c++)
                a[b[c]] = !0;
            return a;
        }
        function ua(b) {
            return Q(b.nodeName || b[0] && b[0].nodeName);
        }
        function Xa(b, a) {
            var c = b.indexOf(a);
            0 <= c && b.splice(c, 1);
            return a;
        }
        function Ea(b, a, c, d) {
            if (Ua(b) || Va(b))
                throw Ka('cpws');
            if (a) {
                if (b === a)
                    throw Ka('cpi');
                c = c || [];
                d = d || [];
                if (I(b)) {
                    var e = c.indexOf(b);
                    if (-1 !== e)
                        return d[e];
                    c.push(b);
                    d.push(a);
                }
                if (D(b))
                    for (var f = a.length = 0; f < b.length; f++)
                        e = Ea(b[f], null, c, d), I(b[f]) && (c.push(b[f]), d.push(e)), a.push(e);
                else {
                    var g = a.$$hashKey;
                    D(a) ? a.length = 0 : s(a, function (b, c) {
                        delete a[c];
                    });
                    for (f in b)
                        b.hasOwnProperty(f) && (e = Ea(b[f], null, c, d), I(b[f]) && (c.push(b[f]), d.push(e)), a[f] = e);
                    lc(a, g);
                }
            } else if (a = b)
                D(b) ? a = Ea(b, [], c, d) : qa(b) ? a = new Date(b.getTime()) : ob(b) ? (a = new RegExp(b.source, b.toString().match(/[^\/]*$/)[0]), a.lastIndex = b.lastIndex) : I(b) && (e = Object.create(Object.getPrototypeOf(b)), a = Ea(b, e, c, d));
            return a;
        }
        function ra(b, a) {
            if (D(b)) {
                a = a || [];
                for (var c = 0, d = b.length; c < d; c++)
                    a[c] = b[c];
            } else if (I(b))
                for (c in a = a || {}, b)
                    if ('$' !== c.charAt(0) || '$' !== c.charAt(1))
                        a[c] = b[c];
            return a || b;
        }
        function fa(b, a) {
            if (b === a)
                return !0;
            if (null === b || null === a)
                return !1;
            if (b !== b && a !== a)
                return !0;
            var c = typeof b, d;
            if (c == typeof a && 'object' == c)
                if (D(b)) {
                    if (!D(a))
                        return !1;
                    if ((c = b.length) == a.length) {
                        for (d = 0; d < c; d++)
                            if (!fa(b[d], a[d]))
                                return !1;
                        return !0;
                    }
                } else {
                    if (qa(b))
                        return qa(a) ? fa(b.getTime(), a.getTime()) : !1;
                    if (ob(b) && ob(a))
                        return b.toString() == a.toString();
                    if (Va(b) || Va(a) || Ua(b) || Ua(a) || D(a))
                        return !1;
                    c = {};
                    for (d in b)
                        if ('$' !== d.charAt(0) && !G(b[d])) {
                            if (!fa(b[d], a[d]))
                                return !1;
                            c[d] = !0;
                        }
                    for (d in a)
                        if (!c.hasOwnProperty(d) && '$' !== d.charAt(0) && a[d] !== t && !G(a[d]))
                            return !1;
                    return !0;
                }
            return !1;
        }
        function Ya(b, a, c) {
            return b.concat(Za.call(a, c));
        }
        function nc(b, a) {
            var c = 2 < arguments.length ? Za.call(arguments, 2) : [];
            return !G(a) || a instanceof RegExp ? a : c.length ? function () {
                return arguments.length ? a.apply(b, Ya(c, arguments, 0)) : a.apply(b, c);
            } : function () {
                return arguments.length ? a.apply(b, arguments) : a.call(b);
            };
        }
        function Hd(b, a) {
            var c = a;
            'string' === typeof b && '$' === b.charAt(0) && '$' === b.charAt(1) ? c = t : Ua(a) ? c = '$WINDOW' : a && Y === a ? c = '$DOCUMENT' : Va(a) && (c = '$SCOPE');
            return c;
        }
        function $a(b, a) {
            if ('undefined' === typeof b)
                return t;
            V(a) || (a = a ? 2 : null);
            return JSON.stringify(b, Hd, a);
        }
        function oc(b) {
            return F(b) ? JSON.parse(b) : b;
        }
        function va(b) {
            b = B(b).clone();
            try {
                b.empty();
            } catch (a) {
            }
            var c = B('<div>').append(b).html();
            try {
                return b[0].nodeType === pb ? Q(c) : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (a, b) {
                    return '<' + Q(b);
                });
            } catch (d) {
                return Q(c);
            }
        }
        function pc(b) {
            try {
                return decodeURIComponent(b);
            } catch (a) {
            }
        }
        function qc(b) {
            var a = {}, c, d;
            s((b || '').split('&'), function (b) {
                b && (c = b.replace(/\+/g, '%20').split('='), d = pc(c[0]), y(d) && (b = y(c[1]) ? pc(c[1]) : !0, rc.call(a, d) ? D(a[d]) ? a[d].push(b) : a[d] = [
                    a[d],
                    b
                ] : a[d] = b));
            });
            return a;
        }
        function Nb(b) {
            var a = [];
            s(b, function (b, d) {
                D(b) ? s(b, function (b) {
                    a.push(Fa(d, !0) + (!0 === b ? '' : '=' + Fa(b, !0)));
                }) : a.push(Fa(d, !0) + (!0 === b ? '' : '=' + Fa(b, !0)));
            });
            return a.length ? a.join('&') : '';
        }
        function qb(b) {
            return Fa(b, !0).replace(/%26/gi, '&').replace(/%3D/gi, '=').replace(/%2B/gi, '+');
        }
        function Fa(b, a) {
            return encodeURIComponent(b).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%3B/gi, ';').replace(/%20/g, a ? '%20' : '+');
        }
        function Id(b, a) {
            var c, d, e = rb.length;
            b = B(b);
            for (d = 0; d < e; ++d)
                if (c = rb[d] + a, F(c = b.attr(c)))
                    return c;
            return null;
        }
        function Jd(b, a) {
            var c, d, e = {};
            s(rb, function (a) {
                a += 'app';
                !c && b.hasAttribute && b.hasAttribute(a) && (c = b, d = b.getAttribute(a));
            });
            s(rb, function (a) {
                a += 'app';
                var e;
                !c && (e = b.querySelector('[' + a.replace(':', '\\:') + ']')) && (c = e, d = e.getAttribute(a));
            });
            c && (e.strictDi = null !== Id(c, 'strict-di'), a(c, d ? [d] : [], e));
        }
        function sc(b, a, c) {
            I(c) || (c = {});
            c = z({ strictDi: !1 }, c);
            var d = function () {
                    b = B(b);
                    if (b.injector()) {
                        var d = b[0] === Y ? 'document' : va(b);
                        throw Ka('btstrpd', d.replace(/</, '&lt;').replace(/>/, '&gt;'));
                    }
                    a = a || [];
                    a.unshift([
                        '$provide',
                        function (a) {
                            a.value('$rootElement', b);
                        }
                    ]);
                    c.debugInfoEnabled && a.push([
                        '$compileProvider',
                        function (a) {
                            a.debugInfoEnabled(!0);
                        }
                    ]);
                    a.unshift('ng');
                    d = Ob(a, c.strictDi);
                    d.invoke([
                        '$rootScope',
                        '$rootElement',
                        '$compile',
                        '$injector',
                        function (a, b, c, d) {
                            a.$apply(function () {
                                b.data('$injector', d);
                                c(b)(a);
                            });
                        }
                    ]);
                    return d;
                }, e = /^NG_ENABLE_DEBUG_INFO!/, f = /^NG_DEFER_BOOTSTRAP!/;
            M && e.test(M.name) && (c.debugInfoEnabled = !0, M.name = M.name.replace(e, ''));
            if (M && !f.test(M.name))
                return d();
            M.name = M.name.replace(f, '');
            ga.resumeBootstrap = function (b) {
                s(b, function (b) {
                    a.push(b);
                });
                d();
            };
        }
        function Kd() {
            M.name = 'NG_ENABLE_DEBUG_INFO!' + M.name;
            M.location.reload();
        }
        function Ld(b) {
            b = ga.element(b).injector();
            if (!b)
                throw Ka('test');
            return b.get('$$testability');
        }
        function tc(b, a) {
            a = a || '_';
            return b.replace(Md, function (b, d) {
                return (d ? a : '') + b.toLowerCase();
            });
        }
        function Nd() {
            var b;
            uc || ((sa = M.jQuery) && sa.fn.on ? (B = sa, z(sa.fn, {
                scope: La.scope,
                isolateScope: La.isolateScope,
                controller: La.controller,
                injector: La.injector,
                inheritedData: La.inheritedData
            }), b = sa.cleanData, sa.cleanData = function (a) {
                var c;
                if (Pb)
                    Pb = !1;
                else
                    for (var d = 0, e; null != (e = a[d]); d++)
                        (c = sa._data(e, 'events')) && c.$destroy && sa(e).triggerHandler('$destroy');
                b(a);
            }) : B = R, ga.element = B, uc = !0);
        }
        function Qb(b, a, c) {
            if (!b)
                throw Ka('areq', a || '?', c || 'required');
            return b;
        }
        function sb(b, a, c) {
            c && D(b) && (b = b[b.length - 1]);
            Qb(G(b), a, 'not a function, got ' + (b && 'object' === typeof b ? b.constructor.name || 'Object' : typeof b));
            return b;
        }
        function Ma(b, a) {
            if ('hasOwnProperty' === b)
                throw Ka('badname', a);
        }
        function vc(b, a, c) {
            if (!a)
                return b;
            a = a.split('.');
            for (var d, e = b, f = a.length, g = 0; g < f; g++)
                d = a[g], b && (b = (e = b)[d]);
            return !c && G(b) ? nc(e, b) : b;
        }
        function tb(b) {
            var a = b[0];
            b = b[b.length - 1];
            var c = [a];
            do {
                a = a.nextSibling;
                if (!a)
                    break;
                c.push(a);
            } while (a !== b);
            return B(c);
        }
        function ha() {
            return Object.create(null);
        }
        function Od(b) {
            function a(a, b, c) {
                return a[b] || (a[b] = c());
            }
            var c = T('$injector'), d = T('ng');
            b = a(b, 'angular', Object);
            b.$$minErr = b.$$minErr || T;
            return a(b, 'module', function () {
                var b = {};
                return function (f, g, h) {
                    if ('hasOwnProperty' === f)
                        throw d('badname', 'module');
                    g && b.hasOwnProperty(f) && (b[f] = null);
                    return a(b, f, function () {
                        function a(c, d, e, f) {
                            f || (f = b);
                            return function () {
                                f[e || 'push']([
                                    c,
                                    d,
                                    arguments
                                ]);
                                return u;
                            };
                        }
                        if (!g)
                            throw c('nomod', f);
                        var b = [], d = [], e = [], q = a('$injector', 'invoke', 'push', d), u = {
                                _invokeQueue: b,
                                _configBlocks: d,
                                _runBlocks: e,
                                requires: g,
                                name: f,
                                provider: a('$provide', 'provider'),
                                factory: a('$provide', 'factory'),
                                service: a('$provide', 'service'),
                                value: a('$provide', 'value'),
                                constant: a('$provide', 'constant', 'unshift'),
                                animation: a('$animateProvider', 'register'),
                                filter: a('$filterProvider', 'register'),
                                controller: a('$controllerProvider', 'register'),
                                directive: a('$compileProvider', 'directive'),
                                config: q,
                                run: function (a) {
                                    e.push(a);
                                    return this;
                                }
                            };
                        h && q(h);
                        return u;
                    });
                };
            });
        }
        function Pd(b) {
            z(b, {
                bootstrap: sc,
                copy: Ea,
                extend: z,
                equals: fa,
                element: B,
                forEach: s,
                injector: Ob,
                noop: H,
                bind: nc,
                toJson: $a,
                fromJson: oc,
                identity: pa,
                isUndefined: A,
                isDefined: y,
                isString: F,
                isFunction: G,
                isObject: I,
                isNumber: V,
                isElement: mc,
                isArray: D,
                version: Qd,
                isDate: qa,
                lowercase: Q,
                uppercase: ub,
                callbacks: { counter: 0 },
                getTestability: Ld,
                $$minErr: T,
                $$csp: ab,
                reloadWithDebugInfo: Kd
            });
            bb = Od(M);
            try {
                bb('ngLocale');
            } catch (a) {
                bb('ngLocale', []).provider('$locale', Rd);
            }
            bb('ng', ['ngLocale'], [
                '$provide',
                function (a) {
                    a.provider({ $$sanitizeUri: Sd });
                    a.provider('$compile', wc).directive({
                        a: Td,
                        input: xc,
                        textarea: xc,
                        form: Ud,
                        script: Vd,
                        select: Wd,
                        style: Xd,
                        option: Yd,
                        ngBind: Zd,
                        ngBindHtml: $d,
                        ngBindTemplate: ae,
                        ngClass: be,
                        ngClassEven: ce,
                        ngClassOdd: de,
                        ngCloak: ee,
                        ngController: fe,
                        ngForm: ge,
                        ngHide: he,
                        ngIf: ie,
                        ngInclude: je,
                        ngInit: ke,
                        ngNonBindable: le,
                        ngPluralize: me,
                        ngRepeat: ne,
                        ngShow: oe,
                        ngStyle: pe,
                        ngSwitch: qe,
                        ngSwitchWhen: re,
                        ngSwitchDefault: se,
                        ngOptions: te,
                        ngTransclude: ue,
                        ngModel: ve,
                        ngList: we,
                        ngChange: xe,
                        pattern: yc,
                        ngPattern: yc,
                        required: zc,
                        ngRequired: zc,
                        minlength: Ac,
                        ngMinlength: Ac,
                        maxlength: Bc,
                        ngMaxlength: Bc,
                        ngValue: ye,
                        ngModelOptions: ze
                    }).directive({ ngInclude: Ae }).directive(vb).directive(Cc);
                    a.provider({
                        $anchorScroll: Be,
                        $animate: Ce,
                        $browser: De,
                        $cacheFactory: Ee,
                        $controller: Fe,
                        $document: Ge,
                        $exceptionHandler: He,
                        $filter: Dc,
                        $interpolate: Ie,
                        $interval: Je,
                        $http: Ke,
                        $httpBackend: Le,
                        $location: Me,
                        $log: Ne,
                        $parse: Oe,
                        $rootScope: Pe,
                        $q: Qe,
                        $$q: Re,
                        $sce: Se,
                        $sceDelegate: Te,
                        $sniffer: Ue,
                        $templateCache: Ve,
                        $templateRequest: We,
                        $$testability: Xe,
                        $timeout: Ye,
                        $window: Ze,
                        $$rAF: $e,
                        $$asyncCallback: af,
                        $$jqLite: bf
                    });
                }
            ]);
        }
        function cb(b) {
            return b.replace(cf, function (a, b, d, e) {
                return e ? d.toUpperCase() : d;
            }).replace(df, 'Moz$1');
        }
        function Ec(b) {
            b = b.nodeType;
            return b === oa || !b || 9 === b;
        }
        function Fc(b, a) {
            var c, d, e = a.createDocumentFragment(), f = [];
            if (Rb.test(b)) {
                c = c || e.appendChild(a.createElement('div'));
                d = (ef.exec(b) || [
                    '',
                    ''
                ])[1].toLowerCase();
                d = ia[d] || ia._default;
                c.innerHTML = d[1] + b.replace(ff, '<$1></$2>') + d[2];
                for (d = d[0]; d--;)
                    c = c.lastChild;
                f = Ya(f, c.childNodes);
                c = e.firstChild;
                c.textContent = '';
            } else
                f.push(a.createTextNode(b));
            e.textContent = '';
            e.innerHTML = '';
            s(f, function (a) {
                e.appendChild(a);
            });
            return e;
        }
        function R(b) {
            if (b instanceof R)
                return b;
            var a;
            F(b) && (b = U(b), a = !0);
            if (!(this instanceof R)) {
                if (a && '<' != b.charAt(0))
                    throw Sb('nosel');
                return new R(b);
            }
            if (a) {
                a = Y;
                var c;
                b = (c = gf.exec(b)) ? [a.createElement(c[1])] : (c = Fc(b, a)) ? c.childNodes : [];
            }
            Gc(this, b);
        }
        function Tb(b) {
            return b.cloneNode(!0);
        }
        function wb(b, a) {
            a || xb(b);
            if (b.querySelectorAll)
                for (var c = b.querySelectorAll('*'), d = 0, e = c.length; d < e; d++)
                    xb(c[d]);
        }
        function Hc(b, a, c, d) {
            if (y(d))
                throw Sb('offargs');
            var e = (d = yb(b)) && d.events, f = d && d.handle;
            if (f)
                if (a)
                    s(a.split(' '), function (a) {
                        if (y(c)) {
                            var d = e[a];
                            Xa(d || [], c);
                            if (d && 0 < d.length)
                                return;
                        }
                        b.removeEventListener(a, f, !1);
                        delete e[a];
                    });
                else
                    for (a in e)
                        '$destroy' !== a && b.removeEventListener(a, f, !1), delete e[a];
        }
        function xb(b, a) {
            var c = b.ng339, d = c && zb[c];
            d && (a ? delete d.data[a] : (d.handle && (d.events.$destroy && d.handle({}, '$destroy'), Hc(b)), delete zb[c], b.ng339 = t));
        }
        function yb(b, a) {
            var c = b.ng339, c = c && zb[c];
            a && !c && (b.ng339 = c = ++hf, c = zb[c] = {
                events: {},
                data: {},
                handle: t
            });
            return c;
        }
        function Ub(b, a, c) {
            if (Ec(b)) {
                var d = y(c), e = !d && a && !I(a), f = !a;
                b = (b = yb(b, !e)) && b.data;
                if (d)
                    b[a] = c;
                else {
                    if (f)
                        return b;
                    if (e)
                        return b && b[a];
                    z(b, a);
                }
            }
        }
        function Ab(b, a) {
            return b.getAttribute ? -1 < (' ' + (b.getAttribute('class') || '') + ' ').replace(/[\n\t]/g, ' ').indexOf(' ' + a + ' ') : !1;
        }
        function Bb(b, a) {
            a && b.setAttribute && s(a.split(' '), function (a) {
                b.setAttribute('class', U((' ' + (b.getAttribute('class') || '') + ' ').replace(/[\n\t]/g, ' ').replace(' ' + U(a) + ' ', ' ')));
            });
        }
        function Cb(b, a) {
            if (a && b.setAttribute) {
                var c = (' ' + (b.getAttribute('class') || '') + ' ').replace(/[\n\t]/g, ' ');
                s(a.split(' '), function (a) {
                    a = U(a);
                    -1 === c.indexOf(' ' + a + ' ') && (c += a + ' ');
                });
                b.setAttribute('class', U(c));
            }
        }
        function Gc(b, a) {
            if (a)
                if (a.nodeType)
                    b[b.length++] = a;
                else {
                    var c = a.length;
                    if ('number' === typeof c && a.window !== a) {
                        if (c)
                            for (var d = 0; d < c; d++)
                                b[b.length++] = a[d];
                    } else
                        b[b.length++] = a;
                }
        }
        function Ic(b, a) {
            return Db(b, '$' + (a || 'ngController') + 'Controller');
        }
        function Db(b, a, c) {
            9 == b.nodeType && (b = b.documentElement);
            for (a = D(a) ? a : [a]; b;) {
                for (var d = 0, e = a.length; d < e; d++)
                    if ((c = B.data(b, a[d])) !== t)
                        return c;
                b = b.parentNode || 11 === b.nodeType && b.host;
            }
        }
        function Jc(b) {
            for (wb(b, !0); b.firstChild;)
                b.removeChild(b.firstChild);
        }
        function Kc(b, a) {
            a || wb(b);
            var c = b.parentNode;
            c && c.removeChild(b);
        }
        function jf(b, a) {
            a = a || M;
            if ('complete' === a.document.readyState)
                a.setTimeout(b);
            else
                B(a).on('load', b);
        }
        function Lc(b, a) {
            var c = Eb[a.toLowerCase()];
            return c && Mc[ua(b)] && c;
        }
        function kf(b, a) {
            var c = b.nodeName;
            return ('INPUT' === c || 'TEXTAREA' === c) && Nc[a];
        }
        function lf(b, a) {
            var c = function (c, e) {
                c.isDefaultPrevented = function () {
                    return c.defaultPrevented;
                };
                var f = a[e || c.type], g = f ? f.length : 0;
                if (g) {
                    if (A(c.immediatePropagationStopped)) {
                        var h = c.stopImmediatePropagation;
                        c.stopImmediatePropagation = function () {
                            c.immediatePropagationStopped = !0;
                            c.stopPropagation && c.stopPropagation();
                            h && h.call(c);
                        };
                    }
                    c.isImmediatePropagationStopped = function () {
                        return !0 === c.immediatePropagationStopped;
                    };
                    1 < g && (f = ra(f));
                    for (var l = 0; l < g; l++)
                        c.isImmediatePropagationStopped() || f[l].call(b, c);
                }
            };
            c.elem = b;
            return c;
        }
        function bf() {
            this.$get = function () {
                return z(R, {
                    hasClass: function (b, a) {
                        b.attr && (b = b[0]);
                        return Ab(b, a);
                    },
                    addClass: function (b, a) {
                        b.attr && (b = b[0]);
                        return Cb(b, a);
                    },
                    removeClass: function (b, a) {
                        b.attr && (b = b[0]);
                        return Bb(b, a);
                    }
                });
            };
        }
        function Na(b, a) {
            var c = b && b.$$hashKey;
            if (c)
                return 'function' === typeof c && (c = b.$$hashKey()), c;
            c = typeof b;
            return c = 'function' == c || 'object' == c && null !== b ? b.$$hashKey = c + ':' + (a || Fd)() : c + ':' + b;
        }
        function db(b, a) {
            if (a) {
                var c = 0;
                this.nextUid = function () {
                    return ++c;
                };
            }
            s(b, this.put, this);
        }
        function mf(b) {
            return (b = b.toString().replace(Oc, '').match(Pc)) ? 'function(' + (b[1] || '').replace(/[\s\r\n]+/, ' ') + ')' : 'fn';
        }
        function Vb(b, a, c) {
            var d;
            if ('function' === typeof b) {
                if (!(d = b.$inject)) {
                    d = [];
                    if (b.length) {
                        if (a)
                            throw F(c) && c || (c = b.name || mf(b)), Ga('strictdi', c);
                        a = b.toString().replace(Oc, '');
                        a = a.match(Pc);
                        s(a[1].split(nf), function (a) {
                            a.replace(of, function (a, b, c) {
                                d.push(c);
                            });
                        });
                    }
                    b.$inject = d;
                }
            } else
                D(b) ? (a = b.length - 1, sb(b[a], 'fn'), d = b.slice(0, a)) : sb(b, 'fn', !0);
            return d;
        }
        function Ob(b, a) {
            function c(a) {
                return function (b, c) {
                    if (I(b))
                        s(b, kc(a));
                    else
                        return a(b, c);
                };
            }
            function d(a, b) {
                Ma(a, 'service');
                if (G(b) || D(b))
                    b = q.instantiate(b);
                if (!b.$get)
                    throw Ga('pget', a);
                return n[a + 'Provider'] = b;
            }
            function e(a, b) {
                return function () {
                    var c = r.invoke(b, this);
                    if (A(c))
                        throw Ga('undef', a);
                    return c;
                };
            }
            function f(a, b, c) {
                return d(a, { $get: !1 !== c ? e(a, b) : b });
            }
            function g(a) {
                var b = [], c;
                s(a, function (a) {
                    function d(a) {
                        var b, c;
                        b = 0;
                        for (c = a.length; b < c; b++) {
                            var e = a[b], f = q.get(e[0]);
                            f[e[1]].apply(f, e[2]);
                        }
                    }
                    if (!m.get(a)) {
                        m.put(a, !0);
                        try {
                            F(a) ? (c = bb(a), b = b.concat(g(c.requires)).concat(c._runBlocks), d(c._invokeQueue), d(c._configBlocks)) : G(a) ? b.push(q.invoke(a)) : D(a) ? b.push(q.invoke(a)) : sb(a, 'module');
                        } catch (e) {
                            throw D(a) && (a = a[a.length - 1]), e.message && e.stack && -1 == e.stack.indexOf(e.message) && (e = e.message + '\n' + e.stack), Ga('modulerr', a, e.stack || e.message || e);
                        }
                    }
                });
                return b;
            }
            function h(b, c) {
                function d(a, e) {
                    if (b.hasOwnProperty(a)) {
                        if (b[a] === l)
                            throw Ga('cdep', a + ' <- ' + k.join(' <- '));
                        return b[a];
                    }
                    try {
                        return k.unshift(a), b[a] = l, b[a] = c(a, e);
                    } catch (f) {
                        throw b[a] === l && delete b[a], f;
                    } finally {
                        k.shift();
                    }
                }
                function e(b, c, f, g) {
                    'string' === typeof f && (g = f, f = null);
                    var h = [], k = Vb(b, a, g), l, q, n;
                    q = 0;
                    for (l = k.length; q < l; q++) {
                        n = k[q];
                        if ('string' !== typeof n)
                            throw Ga('itkn', n);
                        h.push(f && f.hasOwnProperty(n) ? f[n] : d(n, g));
                    }
                    D(b) && (b = b[l]);
                    return b.apply(c, h);
                }
                return {
                    invoke: e,
                    instantiate: function (a, b, c) {
                        var d = Object.create((D(a) ? a[a.length - 1] : a).prototype || null);
                        a = e(a, d, b, c);
                        return I(a) || G(a) ? a : d;
                    },
                    get: d,
                    annotate: Vb,
                    has: function (a) {
                        return n.hasOwnProperty(a + 'Provider') || b.hasOwnProperty(a);
                    }
                };
            }
            a = !0 === a;
            var l = {}, k = [], m = new db([], !0), n = {
                    $provide: {
                        provider: c(d),
                        factory: c(f),
                        service: c(function (a, b) {
                            return f(a, [
                                '$injector',
                                function (a) {
                                    return a.instantiate(b);
                                }
                            ]);
                        }),
                        value: c(function (a, b) {
                            return f(a, da(b), !1);
                        }),
                        constant: c(function (a, b) {
                            Ma(a, 'constant');
                            n[a] = b;
                            u[a] = b;
                        }),
                        decorator: function (a, b) {
                            var c = q.get(a + 'Provider'), d = c.$get;
                            c.$get = function () {
                                var a = r.invoke(d, c);
                                return r.invoke(b, null, { $delegate: a });
                            };
                        }
                    }
                }, q = n.$injector = h(n, function (a, b) {
                    ga.isString(b) && k.push(b);
                    throw Ga('unpr', k.join(' <- '));
                }), u = {}, r = u.$injector = h(u, function (a, b) {
                    var c = q.get(a + 'Provider', b);
                    return r.invoke(c.$get, c, t, a);
                });
            s(g(b), function (a) {
                r.invoke(a || H);
            });
            return r;
        }
        function Be() {
            var b = !0;
            this.disableAutoScrolling = function () {
                b = !1;
            };
            this.$get = [
                '$window',
                '$location',
                '$rootScope',
                function (a, c, d) {
                    function e(a) {
                        var b = null;
                        Array.prototype.some.call(a, function (a) {
                            if ('a' === ua(a))
                                return b = a, !0;
                        });
                        return b;
                    }
                    function f(b) {
                        if (b) {
                            b.scrollIntoView();
                            var c;
                            c = g.yOffset;
                            G(c) ? c = c() : mc(c) ? (c = c[0], c = 'fixed' !== a.getComputedStyle(c).position ? 0 : c.getBoundingClientRect().bottom) : V(c) || (c = 0);
                            c && (b = b.getBoundingClientRect().top, a.scrollBy(0, b - c));
                        } else
                            a.scrollTo(0, 0);
                    }
                    function g() {
                        var a = c.hash(), b;
                        a ? (b = h.getElementById(a)) ? f(b) : (b = e(h.getElementsByName(a))) ? f(b) : 'top' === a && f(null) : f(null);
                    }
                    var h = a.document;
                    b && d.$watch(function () {
                        return c.hash();
                    }, function (a, b) {
                        a === b && '' === a || jf(function () {
                            d.$evalAsync(g);
                        });
                    });
                    return g;
                }
            ];
        }
        function af() {
            this.$get = [
                '$$rAF',
                '$timeout',
                function (b, a) {
                    return b.supported ? function (a) {
                        return b(a);
                    } : function (b) {
                        return a(b, 0, !1);
                    };
                }
            ];
        }
        function pf(b, a, c, d) {
            function e(a) {
                try {
                    a.apply(null, Za.call(arguments, 1));
                } finally {
                    if (v--, 0 === v)
                        for (; w.length;)
                            try {
                                w.pop()();
                            } catch (b) {
                                c.error(b);
                            }
                }
            }
            function f(a, b) {
                (function N() {
                    s(L, function (a) {
                        a();
                    });
                    C = b(N, a);
                }());
            }
            function g() {
                h();
                l();
            }
            function h() {
                x = b.history.state;
                x = A(x) ? null : x;
                fa(x, J) && (x = J);
                J = x;
            }
            function l() {
                if (E !== m.url() || P !== x)
                    E = m.url(), P = x, s(W, function (a) {
                        a(m.url(), x);
                    });
            }
            function k(a) {
                try {
                    return decodeURIComponent(a);
                } catch (b) {
                    return a;
                }
            }
            var m = this, n = a[0], q = b.location, u = b.history, r = b.setTimeout, O = b.clearTimeout, p = {};
            m.isMock = !1;
            var v = 0, w = [];
            m.$$completeOutstandingRequest = e;
            m.$$incOutstandingRequestCount = function () {
                v++;
            };
            m.notifyWhenNoOutstandingRequests = function (a) {
                s(L, function (a) {
                    a();
                });
                0 === v ? a() : w.push(a);
            };
            var L = [], C;
            m.addPollFn = function (a) {
                A(C) && f(100, r);
                L.push(a);
                return a;
            };
            var x, P, E = q.href, S = a.find('base'), X = null;
            h();
            P = x;
            m.url = function (a, c, e) {
                A(e) && (e = null);
                q !== b.location && (q = b.location);
                u !== b.history && (u = b.history);
                if (a) {
                    var f = P === e;
                    if (E === a && (!d.history || f))
                        return m;
                    var g = E && Ha(E) === Ha(a);
                    E = a;
                    P = e;
                    !d.history || g && f ? (g || (X = a), c ? q.replace(a) : g ? (c = q, e = a.indexOf('#'), a = -1 === e ? '' : a.substr(e + 1), c.hash = a) : q.href = a) : (u[c ? 'replaceState' : 'pushState'](e, '', a), h(), P = x);
                    return m;
                }
                return X || q.href.replace(/%27/g, '\'');
            };
            m.state = function () {
                return x;
            };
            var W = [], wa = !1, J = null;
            m.onUrlChange = function (a) {
                if (!wa) {
                    if (d.history)
                        B(b).on('popstate', g);
                    B(b).on('hashchange', g);
                    wa = !0;
                }
                W.push(a);
                return a;
            };
            m.$$checkUrlChange = l;
            m.baseHref = function () {
                var a = S.attr('href');
                return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, '') : '';
            };
            var ea = {}, y = '', ca = m.baseHref();
            m.cookies = function (a, b) {
                var d, e, f, g;
                if (a)
                    b === t ? n.cookie = encodeURIComponent(a) + '=;path=' + ca + ';expires=Thu, 01 Jan 1970 00:00:00 GMT' : F(b) && (d = (n.cookie = encodeURIComponent(a) + '=' + encodeURIComponent(b) + ';path=' + ca).length + 1, 4096 < d && c.warn('Cookie \'' + a + '\' possibly not set or overflowed because it was too large (' + d + ' > 4096 bytes)!'));
                else {
                    if (n.cookie !== y)
                        for (y = n.cookie, d = y.split('; '), ea = {}, f = 0; f < d.length; f++)
                            e = d[f], g = e.indexOf('='), 0 < g && (a = k(e.substring(0, g)), ea[a] === t && (ea[a] = k(e.substring(g + 1))));
                    return ea;
                }
            };
            m.defer = function (a, b) {
                var c;
                v++;
                c = r(function () {
                    delete p[c];
                    e(a);
                }, b || 0);
                p[c] = !0;
                return c;
            };
            m.defer.cancel = function (a) {
                return p[a] ? (delete p[a], O(a), e(H), !0) : !1;
            };
        }
        function De() {
            this.$get = [
                '$window',
                '$log',
                '$sniffer',
                '$document',
                function (b, a, c, d) {
                    return new pf(b, d, a, c);
                }
            ];
        }
        function Ee() {
            this.$get = function () {
                function b(b, d) {
                    function e(a) {
                        a != n && (q ? q == a && (q = a.n) : q = a, f(a.n, a.p), f(a, n), n = a, n.n = null);
                    }
                    function f(a, b) {
                        a != b && (a && (a.p = b), b && (b.n = a));
                    }
                    if (b in a)
                        throw T('$cacheFactory')('iid', b);
                    var g = 0, h = z({}, d, { id: b }), l = {}, k = d && d.capacity || Number.MAX_VALUE, m = {}, n = null, q = null;
                    return a[b] = {
                        put: function (a, b) {
                            if (k < Number.MAX_VALUE) {
                                var c = m[a] || (m[a] = { key: a });
                                e(c);
                            }
                            if (!A(b))
                                return a in l || g++, l[a] = b, g > k && this.remove(q.key), b;
                        },
                        get: function (a) {
                            if (k < Number.MAX_VALUE) {
                                var b = m[a];
                                if (!b)
                                    return;
                                e(b);
                            }
                            return l[a];
                        },
                        remove: function (a) {
                            if (k < Number.MAX_VALUE) {
                                var b = m[a];
                                if (!b)
                                    return;
                                b == n && (n = b.p);
                                b == q && (q = b.n);
                                f(b.n, b.p);
                                delete m[a];
                            }
                            delete l[a];
                            g--;
                        },
                        removeAll: function () {
                            l = {};
                            g = 0;
                            m = {};
                            n = q = null;
                        },
                        destroy: function () {
                            m = h = l = null;
                            delete a[b];
                        },
                        info: function () {
                            return z({}, h, { size: g });
                        }
                    };
                }
                var a = {};
                b.info = function () {
                    var b = {};
                    s(a, function (a, e) {
                        b[e] = a.info();
                    });
                    return b;
                };
                b.get = function (b) {
                    return a[b];
                };
                return b;
            };
        }
        function Ve() {
            this.$get = [
                '$cacheFactory',
                function (b) {
                    return b('templates');
                }
            ];
        }
        function wc(b, a) {
            function c(a, b) {
                var c = /^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/, d = {};
                s(a, function (a, e) {
                    var f = a.match(c);
                    if (!f)
                        throw ja('iscp', b, e, a);
                    d[e] = {
                        mode: f[1][0],
                        collection: '*' === f[2],
                        optional: '?' === f[3],
                        attrName: f[4] || e
                    };
                });
                return d;
            }
            var d = {}, e = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/, f = /(([\w\-]+)(?:\:([^;]+))?;?)/, g = Gd('ngSrc,ngSrcset,src,srcset'), h = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/, l = /^(on[a-z]+|formaction)$/;
            this.directive = function n(a, e) {
                Ma(a, 'directive');
                F(a) ? (Qb(e, 'directiveFactory'), d.hasOwnProperty(a) || (d[a] = [], b.factory(a + 'Directive', [
                    '$injector',
                    '$exceptionHandler',
                    function (b, e) {
                        var f = [];
                        s(d[a], function (d, g) {
                            try {
                                var h = b.invoke(d);
                                G(h) ? h = { compile: da(h) } : !h.compile && h.link && (h.compile = da(h.link));
                                h.priority = h.priority || 0;
                                h.index = g;
                                h.name = h.name || a;
                                h.require = h.require || h.controller && h.name;
                                h.restrict = h.restrict || 'EA';
                                I(h.scope) && (h.$$isolateBindings = c(h.scope, h.name));
                                f.push(h);
                            } catch (l) {
                                e(l);
                            }
                        });
                        return f;
                    }
                ])), d[a].push(e)) : s(a, kc(n));
                return this;
            };
            this.aHrefSanitizationWhitelist = function (b) {
                return y(b) ? (a.aHrefSanitizationWhitelist(b), this) : a.aHrefSanitizationWhitelist();
            };
            this.imgSrcSanitizationWhitelist = function (b) {
                return y(b) ? (a.imgSrcSanitizationWhitelist(b), this) : a.imgSrcSanitizationWhitelist();
            };
            var k = !0;
            this.debugInfoEnabled = function (a) {
                return y(a) ? (k = a, this) : k;
            };
            this.$get = [
                '$injector',
                '$interpolate',
                '$exceptionHandler',
                '$templateRequest',
                '$parse',
                '$controller',
                '$rootScope',
                '$document',
                '$sce',
                '$animate',
                '$$sanitizeUri',
                function (a, b, c, r, O, p, v, w, L, C, x) {
                    function P(a, b) {
                        try {
                            a.addClass(b);
                        } catch (c) {
                        }
                    }
                    function E(a, b, c, d, e) {
                        a instanceof B || (a = B(a));
                        s(a, function (b, c) {
                            b.nodeType == pb && b.nodeValue.match(/\S+/) && (a[c] = B(b).wrap('<span></span>').parent()[0]);
                        });
                        var f = S(a, b, a, c, d, e);
                        E.$$addScopeClass(a);
                        var g = null;
                        return function (b, c, d) {
                            Qb(b, 'scope');
                            d = d || {};
                            var e = d.parentBoundTranscludeFn, h = d.transcludeControllers;
                            d = d.futureParentElement;
                            e && e.$$boundTransclude && (e = e.$$boundTransclude);
                            g || (g = (d = d && d[0]) ? 'foreignobject' !== ua(d) && d.toString().match(/SVG/) ? 'svg' : 'html' : 'html');
                            d = 'html' !== g ? B(Wb(g, B('<div>').append(a).html())) : c ? La.clone.call(a) : a;
                            if (h)
                                for (var l in h)
                                    d.data('$' + l + 'Controller', h[l].instance);
                            E.$$addScopeInfo(d, b);
                            c && c(d, b);
                            f && f(b, d, d, e);
                            return d;
                        };
                    }
                    function S(a, b, c, d, e, f) {
                        function g(a, c, d, e) {
                            var f, l, k, q, n, p, w;
                            if (r)
                                for (w = Array(c.length), q = 0; q < h.length; q += 3)
                                    f = h[q], w[f] = c[f];
                            else
                                w = c;
                            q = 0;
                            for (n = h.length; q < n;)
                                l = w[h[q++]], c = h[q++], f = h[q++], c ? (c.scope ? (k = a.$new(), E.$$addScopeInfo(B(l), k)) : k = a, p = c.transcludeOnThisElement ? X(a, c.transclude, e, c.elementTranscludeOnThisElement) : !c.templateOnThisElement && e ? e : !e && b ? X(a, b) : null, c(f, k, l, d, p)) : f && f(a, l.childNodes, t, e);
                        }
                        for (var h = [], l, k, q, n, r, p = 0; p < a.length; p++) {
                            l = new Xb();
                            k = W(a[p], [], l, 0 === p ? d : t, e);
                            (f = k.length ? ea(k, a[p], l, b, c, null, [], [], f) : null) && f.scope && E.$$addScopeClass(l.$$element);
                            l = f && f.terminal || !(q = a[p].childNodes) || !q.length ? null : S(q, f ? (f.transcludeOnThisElement || !f.templateOnThisElement) && f.transclude : b);
                            if (f || l)
                                h.push(p, f, l), n = !0, r = r || f;
                            f = null;
                        }
                        return n ? g : null;
                    }
                    function X(a, b, c, d) {
                        return function (d, e, f, g, h) {
                            d || (d = a.$new(!1, h), d.$$transcluded = !0);
                            return b(d, e, {
                                parentBoundTranscludeFn: c,
                                transcludeControllers: f,
                                futureParentElement: g
                            });
                        };
                    }
                    function W(a, b, c, d, g) {
                        var h = c.$attr, l;
                        switch (a.nodeType) {
                        case oa:
                            ca(b, ya(ua(a)), 'E', d, g);
                            for (var k, q, n, r = a.attributes, p = 0, w = r && r.length; p < w; p++) {
                                var O = !1, L = !1;
                                k = r[p];
                                l = k.name;
                                q = U(k.value);
                                k = ya(l);
                                if (n = fb.test(k))
                                    l = l.replace(Rc, '').substr(8).replace(/_(.)/g, function (a, b) {
                                        return b.toUpperCase();
                                    });
                                var u = k.replace(/(Start|End)$/, '');
                                A(u) && k === u + 'Start' && (O = l, L = l.substr(0, l.length - 5) + 'end', l = l.substr(0, l.length - 6));
                                k = ya(l.toLowerCase());
                                h[k] = l;
                                if (n || !c.hasOwnProperty(k))
                                    c[k] = q, Lc(a, k) && (c[k] = !0);
                                Pa(a, b, q, k, n);
                                ca(b, k, 'A', d, g, O, L);
                            }
                            a = a.className;
                            I(a) && (a = a.animVal);
                            if (F(a) && '' !== a)
                                for (; l = f.exec(a);)
                                    k = ya(l[2]), ca(b, k, 'C', d, g) && (c[k] = U(l[3])), a = a.substr(l.index + l[0].length);
                            break;
                        case pb:
                            M(b, a.nodeValue);
                            break;
                        case 8:
                            try {
                                if (l = e.exec(a.nodeValue))
                                    k = ya(l[1]), ca(b, k, 'M', d, g) && (c[k] = U(l[2]));
                            } catch (v) {
                            }
                        }
                        b.sort(N);
                        return b;
                    }
                    function wa(a, b, c) {
                        var d = [], e = 0;
                        if (b && a.hasAttribute && a.hasAttribute(b)) {
                            do {
                                if (!a)
                                    throw ja('uterdir', b, c);
                                a.nodeType == oa && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--);
                                d.push(a);
                                a = a.nextSibling;
                            } while (0 < e);
                        } else
                            d.push(a);
                        return B(d);
                    }
                    function J(a, b, c) {
                        return function (d, e, f, g, h) {
                            e = wa(e[0], b, c);
                            return a(d, e, f, g, h);
                        };
                    }
                    function ea(a, d, e, f, g, l, k, n, r) {
                        function w(a, b, c, d) {
                            if (a) {
                                c && (a = J(a, c, d));
                                a.require = K.require;
                                a.directiveName = z;
                                if (S === K || K.$$isolateScope)
                                    a = Z(a, { isolateScope: !0 });
                                k.push(a);
                            }
                            if (b) {
                                c && (b = J(b, c, d));
                                b.require = K.require;
                                b.directiveName = z;
                                if (S === K || K.$$isolateScope)
                                    b = Z(b, { isolateScope: !0 });
                                n.push(b);
                            }
                        }
                        function L(a, b, c, d) {
                            var e, f = 'data', g = !1, l = c, k;
                            if (F(b)) {
                                k = b.match(h);
                                b = b.substring(k[0].length);
                                k[3] && (k[1] ? k[3] = null : k[1] = k[3]);
                                '^' === k[1] ? f = 'inheritedData' : '^^' === k[1] && (f = 'inheritedData', l = c.parent());
                                '?' === k[2] && (g = !0);
                                e = null;
                                d && 'data' === f && (e = d[b]) && (e = e.instance);
                                e = e || l[f]('$' + b + 'Controller');
                                if (!e && !g)
                                    throw ja('ctreq', b, a);
                                return e || null;
                            }
                            D(b) && (e = [], s(b, function (b) {
                                e.push(L(a, b, c, d));
                            }));
                            return e;
                        }
                        function v(a, c, f, g, h) {
                            function l(a, b, c) {
                                var d;
                                Va(a) || (c = b, b = a, a = t);
                                H && (d = P);
                                c || (c = H ? W.parent() : W);
                                return h(a, b, d, c, wa);
                            }
                            var r, w, u, x, P, eb, W, J;
                            d === f ? (J = e, W = e.$$element) : (W = B(f), J = new Xb(W, e));
                            S && (x = c.$new(!0));
                            h && (eb = l, eb.$$boundTransclude = h);
                            C && (X = {}, P = {}, s(C, function (a) {
                                var b = {
                                    $scope: a === S || a.$$isolateScope ? x : c,
                                    $element: W,
                                    $attrs: J,
                                    $transclude: eb
                                };
                                u = a.controller;
                                '@' == u && (u = J[a.name]);
                                b = p(u, b, !0, a.controllerAs);
                                P[a.name] = b;
                                H || W.data('$' + a.name + 'Controller', b.instance);
                                X[a.name] = b;
                            }));
                            if (S) {
                                E.$$addScopeInfo(W, x, !0, !(ka && (ka === S || ka === S.$$originalDirective)));
                                E.$$addScopeClass(W, !0);
                                g = X && X[S.name];
                                var xa = x;
                                g && g.identifier && !0 === S.bindToController && (xa = g.instance);
                                s(x.$$isolateBindings = S.$$isolateBindings, function (a, d) {
                                    var e = a.attrName, f = a.optional, g, h, l, k;
                                    switch (a.mode) {
                                    case '@':
                                        J.$observe(e, function (a) {
                                            xa[d] = a;
                                        });
                                        J.$$observers[e].$$scope = c;
                                        J[e] && (xa[d] = b(J[e])(c));
                                        break;
                                    case '=':
                                        if (f && !J[e])
                                            break;
                                        h = O(J[e]);
                                        k = h.literal ? fa : function (a, b) {
                                            return a === b || a !== a && b !== b;
                                        };
                                        l = h.assign || function () {
                                            g = xa[d] = h(c);
                                            throw ja('nonassign', J[e], S.name);
                                        };
                                        g = xa[d] = h(c);
                                        f = function (a) {
                                            k(a, xa[d]) || (k(a, g) ? l(c, a = xa[d]) : xa[d] = a);
                                            return g = a;
                                        };
                                        f.$stateful = !0;
                                        f = a.collection ? c.$watchCollection(J[e], f) : c.$watch(O(J[e], f), null, h.literal);
                                        x.$on('$destroy', f);
                                        break;
                                    case '&':
                                        h = O(J[e]), xa[d] = function (a) {
                                            return h(c, a);
                                        };
                                    }
                                });
                            }
                            X && (s(X, function (a) {
                                a();
                            }), X = null);
                            g = 0;
                            for (r = k.length; g < r; g++)
                                w = k[g], $(w, w.isolateScope ? x : c, W, J, w.require && L(w.directiveName, w.require, W, P), eb);
                            var wa = c;
                            S && (S.template || null === S.templateUrl) && (wa = x);
                            a && a(wa, f.childNodes, t, h);
                            for (g = n.length - 1; 0 <= g; g--)
                                w = n[g], $(w, w.isolateScope ? x : c, W, J, w.require && L(w.directiveName, w.require, W, P), eb);
                        }
                        r = r || {};
                        for (var x = -Number.MAX_VALUE, P, C = r.controllerDirectives, X, S = r.newIsolateScopeDirective, ka = r.templateDirective, ea = r.nonTlbTranscludeDirective, ca = !1, A = !1, H = r.hasElementTranscludeDirective, aa = e.$$element = B(d), K, z, N, Aa = f, Q, M = 0, R = a.length; M < R; M++) {
                            K = a[M];
                            var Pa = K.$$start, fb = K.$$end;
                            Pa && (aa = wa(d, Pa, fb));
                            N = t;
                            if (x > K.priority)
                                break;
                            if (N = K.scope)
                                K.templateUrl || (I(N) ? (Oa('new/isolated scope', S || P, K, aa), S = K) : Oa('new/isolated scope', S, K, aa)), P = P || K;
                            z = K.name;
                            !K.templateUrl && K.controller && (N = K.controller, C = C || {}, Oa('\'' + z + '\' controller', C[z], K, aa), C[z] = K);
                            if (N = K.transclude)
                                ca = !0, K.$$tlb || (Oa('transclusion', ea, K, aa), ea = K), 'element' == N ? (H = !0, x = K.priority, N = aa, aa = e.$$element = B(Y.createComment(' ' + z + ': ' + e[z] + ' ')), d = aa[0], V(g, Za.call(N, 0), d), Aa = E(N, f, x, l && l.name, { nonTlbTranscludeDirective: ea })) : (N = B(Tb(d)).contents(), aa.empty(), Aa = E(N, f));
                            if (K.template)
                                if (A = !0, Oa('template', ka, K, aa), ka = K, N = G(K.template) ? K.template(aa, e) : K.template, N = Sc(N), K.replace) {
                                    l = K;
                                    N = Rb.test(N) ? Tc(Wb(K.templateNamespace, U(N))) : [];
                                    d = N[0];
                                    if (1 != N.length || d.nodeType !== oa)
                                        throw ja('tplrt', z, '');
                                    V(g, aa, d);
                                    R = { $attr: {} };
                                    N = W(d, [], R);
                                    var ba = a.splice(M + 1, a.length - (M + 1));
                                    S && y(N);
                                    a = a.concat(N).concat(ba);
                                    Qc(e, R);
                                    R = a.length;
                                } else
                                    aa.html(N);
                            if (K.templateUrl)
                                A = !0, Oa('template', ka, K, aa), ka = K, K.replace && (l = K), v = T(a.splice(M, a.length - M), aa, e, g, ca && Aa, k, n, {
                                    controllerDirectives: C,
                                    newIsolateScopeDirective: S,
                                    templateDirective: ka,
                                    nonTlbTranscludeDirective: ea
                                }), R = a.length;
                            else if (K.compile)
                                try {
                                    Q = K.compile(aa, e, Aa), G(Q) ? w(null, Q, Pa, fb) : Q && w(Q.pre, Q.post, Pa, fb);
                                } catch (qf) {
                                    c(qf, va(aa));
                                }
                            K.terminal && (v.terminal = !0, x = Math.max(x, K.priority));
                        }
                        v.scope = P && !0 === P.scope;
                        v.transcludeOnThisElement = ca;
                        v.elementTranscludeOnThisElement = H;
                        v.templateOnThisElement = A;
                        v.transclude = Aa;
                        r.hasElementTranscludeDirective = H;
                        return v;
                    }
                    function y(a) {
                        for (var b = 0, c = a.length; b < c; b++) {
                            var d = b, e;
                            e = z(Object.create(a[b]), { $$isolateScope: !0 });
                            a[d] = e;
                        }
                    }
                    function ca(b, e, f, g, h, l, k) {
                        if (e === h)
                            return null;
                        h = null;
                        if (d.hasOwnProperty(e)) {
                            var q;
                            e = a.get(e + 'Directive');
                            for (var r = 0, p = e.length; r < p; r++)
                                try {
                                    if (q = e[r], (g === t || g > q.priority) && -1 != q.restrict.indexOf(f)) {
                                        if (l) {
                                            var w = {
                                                $$start: l,
                                                $$end: k
                                            };
                                            q = z(Object.create(q), w);
                                        }
                                        b.push(q);
                                        h = q;
                                    }
                                } catch (O) {
                                    c(O);
                                }
                        }
                        return h;
                    }
                    function A(b) {
                        if (d.hasOwnProperty(b))
                            for (var c = a.get(b + 'Directive'), e = 0, f = c.length; e < f; e++)
                                if (b = c[e], b.multiElement)
                                    return !0;
                        return !1;
                    }
                    function Qc(a, b) {
                        var c = b.$attr, d = a.$attr, e = a.$$element;
                        s(a, function (d, e) {
                            '$' != e.charAt(0) && (b[e] && b[e] !== d && (d += ('style' === e ? ';' : ' ') + b[e]), a.$set(e, d, !0, c[e]));
                        });
                        s(b, function (b, f) {
                            'class' == f ? (P(e, b), a['class'] = (a['class'] ? a['class'] + ' ' : '') + b) : 'style' == f ? (e.attr('style', e.attr('style') + ';' + b), a.style = (a.style ? a.style + ';' : '') + b) : '$' == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, d[f] = c[f]);
                        });
                    }
                    function T(a, b, c, d, e, f, g, h) {
                        var l = [], k, q, n = b[0], p = a.shift(), w = z({}, p, {
                                templateUrl: null,
                                transclude: null,
                                replace: null,
                                $$originalDirective: p
                            }), O = G(p.templateUrl) ? p.templateUrl(b, c) : p.templateUrl, u = p.templateNamespace;
                        b.empty();
                        r(L.getTrustedResourceUrl(O)).then(function (r) {
                            var L, v;
                            r = Sc(r);
                            if (p.replace) {
                                r = Rb.test(r) ? Tc(Wb(u, U(r))) : [];
                                L = r[0];
                                if (1 != r.length || L.nodeType !== oa)
                                    throw ja('tplrt', p.name, O);
                                r = { $attr: {} };
                                V(d, b, L);
                                var x = W(L, [], r);
                                I(p.scope) && y(x);
                                a = x.concat(a);
                                Qc(c, r);
                            } else
                                L = n, b.html(r);
                            a.unshift(w);
                            k = ea(a, L, c, e, b, p, f, g, h);
                            s(d, function (a, c) {
                                a == L && (d[c] = b[0]);
                            });
                            for (q = S(b[0].childNodes, e); l.length;) {
                                r = l.shift();
                                v = l.shift();
                                var C = l.shift(), E = l.shift(), x = b[0];
                                if (!r.$$destroyed) {
                                    if (v !== n) {
                                        var J = v.className;
                                        h.hasElementTranscludeDirective && p.replace || (x = Tb(L));
                                        V(C, B(v), x);
                                        P(B(x), J);
                                    }
                                    v = k.transcludeOnThisElement ? X(r, k.transclude, E) : E;
                                    k(q, r, x, d, v);
                                }
                            }
                            l = null;
                        });
                        return function (a, b, c, d, e) {
                            a = e;
                            b.$$destroyed || (l ? l.push(b, c, d, a) : (k.transcludeOnThisElement && (a = X(b, k.transclude, e)), k(q, b, c, d, a)));
                        };
                    }
                    function N(a, b) {
                        var c = b.priority - a.priority;
                        return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index;
                    }
                    function Oa(a, b, c, d) {
                        if (b)
                            throw ja('multidir', b.name, c.name, a, va(d));
                    }
                    function M(a, c) {
                        var d = b(c, !0);
                        d && a.push({
                            priority: 0,
                            compile: function (a) {
                                a = a.parent();
                                var b = !!a.length;
                                b && E.$$addBindingClass(a);
                                return function (a, c) {
                                    var e = c.parent();
                                    b || E.$$addBindingClass(e);
                                    E.$$addBindingInfo(e, d.expressions);
                                    a.$watch(d, function (a) {
                                        c[0].nodeValue = a;
                                    });
                                };
                            }
                        });
                    }
                    function Wb(a, b) {
                        a = Q(a || 'html');
                        switch (a) {
                        case 'svg':
                        case 'math':
                            var c = Y.createElement('div');
                            c.innerHTML = '<' + a + '>' + b + '</' + a + '>';
                            return c.childNodes[0].childNodes;
                        default:
                            return b;
                        }
                    }
                    function R(a, b) {
                        if ('srcdoc' == b)
                            return L.HTML;
                        var c = ua(a);
                        if ('xlinkHref' == b || 'form' == c && 'action' == b || 'img' != c && ('src' == b || 'ngSrc' == b))
                            return L.RESOURCE_URL;
                    }
                    function Pa(a, c, d, e, f) {
                        var h = R(a, e);
                        f = g[e] || f;
                        var k = b(d, !0, h, f);
                        if (k) {
                            if ('multiple' === e && 'select' === ua(a))
                                throw ja('selmulti', va(a));
                            c.push({
                                priority: 100,
                                compile: function () {
                                    return {
                                        pre: function (a, c, g) {
                                            c = g.$$observers || (g.$$observers = {});
                                            if (l.test(e))
                                                throw ja('nodomevents');
                                            var n = g[e];
                                            n !== d && (k = n && b(n, !0, h, f), d = n);
                                            k && (g[e] = k(a), (c[e] || (c[e] = [])).$$inter = !0, (g.$$observers && g.$$observers[e].$$scope || a).$watch(k, function (a, b) {
                                                'class' === e && a != b ? g.$updateClass(a, b) : g.$set(e, a);
                                            }));
                                        }
                                    };
                                }
                            });
                        }
                    }
                    function V(a, b, c) {
                        var d = b[0], e = b.length, f = d.parentNode, g, h;
                        if (a)
                            for (g = 0, h = a.length; g < h; g++)
                                if (a[g] == d) {
                                    a[g++] = c;
                                    h = g + e - 1;
                                    for (var l = a.length; g < l; g++, h++)
                                        h < l ? a[g] = a[h] : delete a[g];
                                    a.length -= e - 1;
                                    a.context === d && (a.context = c);
                                    break;
                                }
                        f && f.replaceChild(c, d);
                        a = Y.createDocumentFragment();
                        a.appendChild(d);
                        B(c).data(B(d).data());
                        sa ? (Pb = !0, sa.cleanData([d])) : delete B.cache[d[B.expando]];
                        d = 1;
                        for (e = b.length; d < e; d++)
                            f = b[d], B(f).remove(), a.appendChild(f), delete b[d];
                        b[0] = c;
                        b.length = 1;
                    }
                    function Z(a, b) {
                        return z(function () {
                            return a.apply(null, arguments);
                        }, a, b);
                    }
                    function $(a, b, d, e, f, g) {
                        try {
                            a(b, d, e, f, g);
                        } catch (h) {
                            c(h, va(d));
                        }
                    }
                    var Xb = function (a, b) {
                        if (b) {
                            var c = Object.keys(b), d, e, f;
                            d = 0;
                            for (e = c.length; d < e; d++)
                                f = c[d], this[f] = b[f];
                        } else
                            this.$attr = {};
                        this.$$element = a;
                    };
                    Xb.prototype = {
                        $normalize: ya,
                        $addClass: function (a) {
                            a && 0 < a.length && C.addClass(this.$$element, a);
                        },
                        $removeClass: function (a) {
                            a && 0 < a.length && C.removeClass(this.$$element, a);
                        },
                        $updateClass: function (a, b) {
                            var c = Uc(a, b);
                            c && c.length && C.addClass(this.$$element, c);
                            (c = Uc(b, a)) && c.length && C.removeClass(this.$$element, c);
                        },
                        $set: function (a, b, d, e) {
                            var f = this.$$element[0], g = Lc(f, a), h = kf(f, a), f = a;
                            g ? (this.$$element.prop(a, b), e = g) : h && (this[h] = b, f = h);
                            this[a] = b;
                            e ? this.$attr[a] = e : (e = this.$attr[a]) || (this.$attr[a] = e = tc(a, '-'));
                            g = ua(this.$$element);
                            if ('a' === g && 'href' === a || 'img' === g && 'src' === a)
                                this[a] = b = x(b, 'src' === a);
                            else if ('img' === g && 'srcset' === a) {
                                for (var g = '', h = U(b), l = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, l = /\s/.test(h) ? l : /(,)/, h = h.split(l), l = Math.floor(h.length / 2), k = 0; k < l; k++)
                                    var q = 2 * k, g = g + x(U(h[q]), !0), g = g + (' ' + U(h[q + 1]));
                                h = U(h[2 * k]).split(/\s/);
                                g += x(U(h[0]), !0);
                                2 === h.length && (g += ' ' + U(h[1]));
                                this[a] = b = g;
                            }
                            !1 !== d && (null === b || b === t ? this.$$element.removeAttr(e) : this.$$element.attr(e, b));
                            (a = this.$$observers) && s(a[f], function (a) {
                                try {
                                    a(b);
                                } catch (d) {
                                    c(d);
                                }
                            });
                        },
                        $observe: function (a, b) {
                            var c = this, d = c.$$observers || (c.$$observers = ha()), e = d[a] || (d[a] = []);
                            e.push(b);
                            v.$evalAsync(function () {
                                !e.$$inter && c.hasOwnProperty(a) && b(c[a]);
                            });
                            return function () {
                                Xa(e, b);
                            };
                        }
                    };
                    var Aa = b.startSymbol(), ka = b.endSymbol(), Sc = '{{' == Aa || '}}' == ka ? pa : function (a) {
                            return a.replace(/\{\{/g, Aa).replace(/}}/g, ka);
                        }, fb = /^ngAttr[A-Z]/;
                    E.$$addBindingInfo = k ? function (a, b) {
                        var c = a.data('$binding') || [];
                        D(b) ? c = c.concat(b) : c.push(b);
                        a.data('$binding', c);
                    } : H;
                    E.$$addBindingClass = k ? function (a) {
                        P(a, 'ng-binding');
                    } : H;
                    E.$$addScopeInfo = k ? function (a, b, c, d) {
                        a.data(c ? d ? '$isolateScopeNoTemplate' : '$isolateScope' : '$scope', b);
                    } : H;
                    E.$$addScopeClass = k ? function (a, b) {
                        P(a, b ? 'ng-isolate-scope' : 'ng-scope');
                    } : H;
                    return E;
                }
            ];
        }
        function ya(b) {
            return cb(b.replace(Rc, ''));
        }
        function Uc(b, a) {
            var c = '', d = b.split(/\s+/), e = a.split(/\s+/), f = 0;
            a:
                for (; f < d.length; f++) {
                    for (var g = d[f], h = 0; h < e.length; h++)
                        if (g == e[h])
                            continue a;
                    c += (0 < c.length ? ' ' : '') + g;
                }
            return c;
        }
        function Tc(b) {
            b = B(b);
            var a = b.length;
            if (1 >= a)
                return b;
            for (; a--;)
                8 === b[a].nodeType && rf.call(b, a, 1);
            return b;
        }
        function Fe() {
            var b = {}, a = !1, c = /^(\S+)(\s+as\s+(\w+))?$/;
            this.register = function (a, c) {
                Ma(a, 'controller');
                I(a) ? z(b, a) : b[a] = c;
            };
            this.allowGlobals = function () {
                a = !0;
            };
            this.$get = [
                '$injector',
                '$window',
                function (d, e) {
                    function f(a, b, c, d) {
                        if (!a || !I(a.$scope))
                            throw T('$controller')('noscp', d, b);
                        a.$scope[b] = c;
                    }
                    return function (g, h, l, k) {
                        var m, n, q;
                        l = !0 === l;
                        k && F(k) && (q = k);
                        F(g) && (k = g.match(c), n = k[1], q = q || k[3], g = b.hasOwnProperty(n) ? b[n] : vc(h.$scope, n, !0) || (a ? vc(e, n, !0) : t), sb(g, n, !0));
                        if (l)
                            return l = (D(g) ? g[g.length - 1] : g).prototype, m = Object.create(l || null), q && f(h, q, m, n || g.name), z(function () {
                                d.invoke(g, m, h, n);
                                return m;
                            }, {
                                instance: m,
                                identifier: q
                            });
                        m = d.instantiate(g, h, n);
                        q && f(h, q, m, n || g.name);
                        return m;
                    };
                }
            ];
        }
        function Ge() {
            this.$get = [
                '$window',
                function (b) {
                    return B(b.document);
                }
            ];
        }
        function He() {
            this.$get = [
                '$log',
                function (b) {
                    return function (a, c) {
                        b.error.apply(b, arguments);
                    };
                }
            ];
        }
        function Yb(b, a) {
            if (F(b)) {
                var c = b.replace(sf, '').trim();
                if (c) {
                    var d = a('Content-Type');
                    (d = d && 0 === d.indexOf(Vc)) || (d = (d = c.match(tf)) && uf[d[0]].test(c));
                    d && (b = oc(c));
                }
            }
            return b;
        }
        function Wc(b) {
            var a = ha(), c, d, e;
            if (!b)
                return a;
            s(b.split('\n'), function (b) {
                e = b.indexOf(':');
                c = Q(U(b.substr(0, e)));
                d = U(b.substr(e + 1));
                c && (a[c] = a[c] ? a[c] + ', ' + d : d);
            });
            return a;
        }
        function Xc(b) {
            var a = I(b) ? b : t;
            return function (c) {
                a || (a = Wc(b));
                return c ? (c = a[Q(c)], void 0 === c && (c = null), c) : a;
            };
        }
        function Yc(b, a, c, d) {
            if (G(d))
                return d(b, a, c);
            s(d, function (d) {
                b = d(b, a, c);
            });
            return b;
        }
        function Ke() {
            var b = this.defaults = {
                    transformResponse: [Yb],
                    transformRequest: [function (a) {
                            return I(a) && '[object File]' !== Da.call(a) && '[object Blob]' !== Da.call(a) && '[object FormData]' !== Da.call(a) ? $a(a) : a;
                        }],
                    headers: {
                        common: { Accept: 'application/json, text/plain, */*' },
                        post: ra(Zb),
                        put: ra(Zb),
                        patch: ra(Zb)
                    },
                    xsrfCookieName: 'XSRF-TOKEN',
                    xsrfHeaderName: 'X-XSRF-TOKEN'
                }, a = !1;
            this.useApplyAsync = function (b) {
                return y(b) ? (a = !!b, this) : a;
            };
            var c = this.interceptors = [];
            this.$get = [
                '$httpBackend',
                '$browser',
                '$cacheFactory',
                '$rootScope',
                '$q',
                '$injector',
                function (d, e, f, g, h, l) {
                    function k(a) {
                        function c(a) {
                            var b = z({}, a);
                            b.data = a.data ? Yc(a.data, a.headers, a.status, e.transformResponse) : a.data;
                            a = a.status;
                            return 200 <= a && 300 > a ? b : h.reject(b);
                        }
                        function d(a) {
                            var b, c = {};
                            s(a, function (a, d) {
                                G(a) ? (b = a(), null != b && (c[d] = b)) : c[d] = a;
                            });
                            return c;
                        }
                        if (!ga.isObject(a))
                            throw T('$http')('badreq', a);
                        var e = z({
                            method: 'get',
                            transformRequest: b.transformRequest,
                            transformResponse: b.transformResponse
                        }, a);
                        e.headers = function (a) {
                            var c = b.headers, e = z({}, a.headers), f, g, c = z({}, c.common, c[Q(a.method)]);
                            a:
                                for (f in c) {
                                    a = Q(f);
                                    for (g in e)
                                        if (Q(g) === a)
                                            continue a;
                                    e[f] = c[f];
                                }
                            return d(e);
                        }(a);
                        e.method = ub(e.method);
                        var f = [
                                function (a) {
                                    var d = a.headers, e = Yc(a.data, Xc(d), t, a.transformRequest);
                                    A(e) && s(d, function (a, b) {
                                        'content-type' === Q(b) && delete d[b];
                                    });
                                    A(a.withCredentials) && !A(b.withCredentials) && (a.withCredentials = b.withCredentials);
                                    return m(a, e).then(c, c);
                                },
                                t
                            ], g = h.when(e);
                        for (s(u, function (a) {
                                (a.request || a.requestError) && f.unshift(a.request, a.requestError);
                                (a.response || a.responseError) && f.push(a.response, a.responseError);
                            }); f.length;) {
                            a = f.shift();
                            var l = f.shift(), g = g.then(a, l);
                        }
                        g.success = function (a) {
                            g.then(function (b) {
                                a(b.data, b.status, b.headers, e);
                            });
                            return g;
                        };
                        g.error = function (a) {
                            g.then(null, function (b) {
                                a(b.data, b.status, b.headers, e);
                            });
                            return g;
                        };
                        return g;
                    }
                    function m(c, f) {
                        function l(b, c, d, e) {
                            function f() {
                                m(c, b, d, e);
                            }
                            P && (200 <= b && 300 > b ? P.put(X, [
                                b,
                                c,
                                Wc(d),
                                e
                            ]) : P.remove(X));
                            a ? g.$applyAsync(f) : (f(), g.$$phase || g.$apply());
                        }
                        function m(a, b, d, e) {
                            b = Math.max(b, 0);
                            (200 <= b && 300 > b ? C.resolve : C.reject)({
                                data: a,
                                status: b,
                                headers: Xc(d),
                                config: c,
                                statusText: e
                            });
                        }
                        function w(a) {
                            m(a.data, a.status, ra(a.headers()), a.statusText);
                        }
                        function u() {
                            var a = k.pendingRequests.indexOf(c);
                            -1 !== a && k.pendingRequests.splice(a, 1);
                        }
                        var C = h.defer(), x = C.promise, P, E, s = c.headers, X = n(c.url, c.params);
                        k.pendingRequests.push(c);
                        x.then(u, u);
                        !c.cache && !b.cache || !1 === c.cache || 'GET' !== c.method && 'JSONP' !== c.method || (P = I(c.cache) ? c.cache : I(b.cache) ? b.cache : q);
                        P && (E = P.get(X), y(E) ? E && G(E.then) ? E.then(w, w) : D(E) ? m(E[1], E[0], ra(E[2]), E[3]) : m(E, 200, {}, 'OK') : P.put(X, x));
                        A(E) && ((E = Zc(c.url) ? e.cookies()[c.xsrfCookieName || b.xsrfCookieName] : t) && (s[c.xsrfHeaderName || b.xsrfHeaderName] = E), d(c.method, X, f, l, s, c.timeout, c.withCredentials, c.responseType));
                        return x;
                    }
                    function n(a, b) {
                        if (!b)
                            return a;
                        var c = [];
                        Ed(b, function (a, b) {
                            null === a || A(a) || (D(a) || (a = [a]), s(a, function (a) {
                                I(a) && (a = qa(a) ? a.toISOString() : $a(a));
                                c.push(Fa(b) + '=' + Fa(a));
                            }));
                        });
                        0 < c.length && (a += (-1 == a.indexOf('?') ? '?' : '&') + c.join('&'));
                        return a;
                    }
                    var q = f('$http'), u = [];
                    s(c, function (a) {
                        u.unshift(F(a) ? l.get(a) : l.invoke(a));
                    });
                    k.pendingRequests = [];
                    (function (a) {
                        s(arguments, function (a) {
                            k[a] = function (b, c) {
                                return k(z(c || {}, {
                                    method: a,
                                    url: b
                                }));
                            };
                        });
                    }('get', 'delete', 'head', 'jsonp'));
                    (function (a) {
                        s(arguments, function (a) {
                            k[a] = function (b, c, d) {
                                return k(z(d || {}, {
                                    method: a,
                                    url: b,
                                    data: c
                                }));
                            };
                        });
                    }('post', 'put', 'patch'));
                    k.defaults = b;
                    return k;
                }
            ];
        }
        function vf() {
            return new M.XMLHttpRequest();
        }
        function Le() {
            this.$get = [
                '$browser',
                '$window',
                '$document',
                function (b, a, c) {
                    return wf(b, vf, b.defer, a.angular.callbacks, c[0]);
                }
            ];
        }
        function wf(b, a, c, d, e) {
            function f(a, b, c) {
                var f = e.createElement('script'), m = null;
                f.type = 'text/javascript';
                f.src = a;
                f.async = !0;
                m = function (a) {
                    f.removeEventListener('load', m, !1);
                    f.removeEventListener('error', m, !1);
                    e.body.removeChild(f);
                    f = null;
                    var g = -1, u = 'unknown';
                    a && ('load' !== a.type || d[b].called || (a = { type: 'error' }), u = a.type, g = 'error' === a.type ? 404 : 200);
                    c && c(g, u);
                };
                f.addEventListener('load', m, !1);
                f.addEventListener('error', m, !1);
                e.body.appendChild(f);
                return m;
            }
            return function (e, h, l, k, m, n, q, u) {
                function r() {
                    v && v();
                    w && w.abort();
                }
                function O(a, d, e, f, g) {
                    C !== t && c.cancel(C);
                    v = w = null;
                    a(d, e, f, g);
                    b.$$completeOutstandingRequest(H);
                }
                b.$$incOutstandingRequestCount();
                h = h || b.url();
                if ('jsonp' == Q(e)) {
                    var p = '_' + (d.counter++).toString(36);
                    d[p] = function (a) {
                        d[p].data = a;
                        d[p].called = !0;
                    };
                    var v = f(h.replace('JSON_CALLBACK', 'angular.callbacks.' + p), p, function (a, b) {
                        O(k, a, d[p].data, '', b);
                        d[p] = H;
                    });
                } else {
                    var w = a();
                    w.open(e, h, !0);
                    s(m, function (a, b) {
                        y(a) && w.setRequestHeader(b, a);
                    });
                    w.onload = function () {
                        var a = w.statusText || '', b = 'response' in w ? w.response : w.responseText, c = 1223 === w.status ? 204 : w.status;
                        0 === c && (c = b ? 200 : 'file' == Ba(h).protocol ? 404 : 0);
                        O(k, c, b, w.getAllResponseHeaders(), a);
                    };
                    e = function () {
                        O(k, -1, null, null, '');
                    };
                    w.onerror = e;
                    w.onabort = e;
                    q && (w.withCredentials = !0);
                    if (u)
                        try {
                            w.responseType = u;
                        } catch (L) {
                            if ('json' !== u)
                                throw L;
                        }
                    w.send(l || null);
                }
                if (0 < n)
                    var C = c(r, n);
                else
                    n && G(n.then) && n.then(r);
            };
        }
        function Ie() {
            var b = '{{', a = '}}';
            this.startSymbol = function (a) {
                return a ? (b = a, this) : b;
            };
            this.endSymbol = function (b) {
                return b ? (a = b, this) : a;
            };
            this.$get = [
                '$parse',
                '$exceptionHandler',
                '$sce',
                function (c, d, e) {
                    function f(a) {
                        return '\\\\\\' + a;
                    }
                    function g(f, g, u, r) {
                        function O(c) {
                            return c.replace(k, b).replace(m, a);
                        }
                        function p(a) {
                            try {
                                var b = a;
                                a = u ? e.getTrusted(u, b) : e.valueOf(b);
                                var c;
                                if (r && !y(a))
                                    c = a;
                                else if (null == a)
                                    c = '';
                                else {
                                    switch (typeof a) {
                                    case 'string':
                                        break;
                                    case 'number':
                                        a = '' + a;
                                        break;
                                    default:
                                        a = $a(a);
                                    }
                                    c = a;
                                }
                                return c;
                            } catch (g) {
                                c = $b('interr', f, g.toString()), d(c);
                            }
                        }
                        r = !!r;
                        for (var v, w, L = 0, C = [], x = [], P = f.length, E = [], s = []; L < P;)
                            if (-1 != (v = f.indexOf(b, L)) && -1 != (w = f.indexOf(a, v + h)))
                                L !== v && E.push(O(f.substring(L, v))), L = f.substring(v + h, w), C.push(L), x.push(c(L, p)), L = w + l, s.push(E.length), E.push('');
                            else {
                                L !== P && E.push(O(f.substring(L)));
                                break;
                            }
                        if (u && 1 < E.length)
                            throw $b('noconcat', f);
                        if (!g || C.length) {
                            var X = function (a) {
                                for (var b = 0, c = C.length; b < c; b++) {
                                    if (r && A(a[b]))
                                        return;
                                    E[s[b]] = a[b];
                                }
                                return E.join('');
                            };
                            return z(function (a) {
                                var b = 0, c = C.length, e = Array(c);
                                try {
                                    for (; b < c; b++)
                                        e[b] = x[b](a);
                                    return X(e);
                                } catch (g) {
                                    a = $b('interr', f, g.toString()), d(a);
                                }
                            }, {
                                exp: f,
                                expressions: C,
                                $$watchDelegate: function (a, b, c) {
                                    var d;
                                    return a.$watchGroup(x, function (c, e) {
                                        var f = X(c);
                                        G(b) && b.call(this, f, c !== e ? d : f, a);
                                        d = f;
                                    }, c);
                                }
                            });
                        }
                    }
                    var h = b.length, l = a.length, k = new RegExp(b.replace(/./g, f), 'g'), m = new RegExp(a.replace(/./g, f), 'g');
                    g.startSymbol = function () {
                        return b;
                    };
                    g.endSymbol = function () {
                        return a;
                    };
                    return g;
                }
            ];
        }
        function Je() {
            this.$get = [
                '$rootScope',
                '$window',
                '$q',
                '$$q',
                function (b, a, c, d) {
                    function e(e, h, l, k) {
                        var m = a.setInterval, n = a.clearInterval, q = 0, u = y(k) && !k, r = (u ? d : c).defer(), O = r.promise;
                        l = y(l) ? l : 0;
                        O.then(null, null, e);
                        O.$$intervalId = m(function () {
                            r.notify(q++);
                            0 < l && q >= l && (r.resolve(q), n(O.$$intervalId), delete f[O.$$intervalId]);
                            u || b.$apply();
                        }, h);
                        f[O.$$intervalId] = r;
                        return O;
                    }
                    var f = {};
                    e.cancel = function (b) {
                        return b && b.$$intervalId in f ? (f[b.$$intervalId].reject('canceled'), a.clearInterval(b.$$intervalId), delete f[b.$$intervalId], !0) : !1;
                    };
                    return e;
                }
            ];
        }
        function Rd() {
            this.$get = function () {
                return {
                    id: 'en-us',
                    NUMBER_FORMATS: {
                        DECIMAL_SEP: '.',
                        GROUP_SEP: ',',
                        PATTERNS: [
                            {
                                minInt: 1,
                                minFrac: 0,
                                maxFrac: 3,
                                posPre: '',
                                posSuf: '',
                                negPre: '-',
                                negSuf: '',
                                gSize: 3,
                                lgSize: 3
                            },
                            {
                                minInt: 1,
                                minFrac: 2,
                                maxFrac: 2,
                                posPre: '\xA4',
                                posSuf: '',
                                negPre: '(\xA4',
                                negSuf: ')',
                                gSize: 3,
                                lgSize: 3
                            }
                        ],
                        CURRENCY_SYM: '$'
                    },
                    DATETIME_FORMATS: {
                        MONTH: 'January February March April May June July August September October November December'.split(' '),
                        SHORTMONTH: 'Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec'.split(' '),
                        DAY: 'Sunday Monday Tuesday Wednesday Thursday Friday Saturday'.split(' '),
                        SHORTDAY: 'Sun Mon Tue Wed Thu Fri Sat'.split(' '),
                        AMPMS: [
                            'AM',
                            'PM'
                        ],
                        medium: 'MMM d, y h:mm:ss a',
                        'short': 'M/d/yy h:mm a',
                        fullDate: 'EEEE, MMMM d, y',
                        longDate: 'MMMM d, y',
                        mediumDate: 'MMM d, y',
                        shortDate: 'M/d/yy',
                        mediumTime: 'h:mm:ss a',
                        shortTime: 'h:mm a'
                    },
                    pluralCat: function (b) {
                        return 1 === b ? 'one' : 'other';
                    }
                };
            };
        }
        function ac(b) {
            b = b.split('/');
            for (var a = b.length; a--;)
                b[a] = qb(b[a]);
            return b.join('/');
        }
        function $c(b, a) {
            var c = Ba(b);
            a.$$protocol = c.protocol;
            a.$$host = c.hostname;
            a.$$port = ba(c.port) || xf[c.protocol] || null;
        }
        function ad(b, a) {
            var c = '/' !== b.charAt(0);
            c && (b = '/' + b);
            var d = Ba(b);
            a.$$path = decodeURIComponent(c && '/' === d.pathname.charAt(0) ? d.pathname.substring(1) : d.pathname);
            a.$$search = qc(d.search);
            a.$$hash = decodeURIComponent(d.hash);
            a.$$path && '/' != a.$$path.charAt(0) && (a.$$path = '/' + a.$$path);
        }
        function za(b, a) {
            if (0 === a.indexOf(b))
                return a.substr(b.length);
        }
        function Ha(b) {
            var a = b.indexOf('#');
            return -1 == a ? b : b.substr(0, a);
        }
        function bd(b) {
            return b.replace(/(#.+)|#$/, '$1');
        }
        function bc(b) {
            return b.substr(0, Ha(b).lastIndexOf('/') + 1);
        }
        function cc(b, a) {
            this.$$html5 = !0;
            a = a || '';
            var c = bc(b);
            $c(b, this);
            this.$$parse = function (a) {
                var b = za(c, a);
                if (!F(b))
                    throw Fb('ipthprfx', a, c);
                ad(b, this);
                this.$$path || (this.$$path = '/');
                this.$$compose();
            };
            this.$$compose = function () {
                var a = Nb(this.$$search), b = this.$$hash ? '#' + qb(this.$$hash) : '';
                this.$$url = ac(this.$$path) + (a ? '?' + a : '') + b;
                this.$$absUrl = c + this.$$url.substr(1);
            };
            this.$$parseLinkUrl = function (d, e) {
                if (e && '#' === e[0])
                    return this.hash(e.slice(1)), !0;
                var f, g;
                (f = za(b, d)) !== t ? (g = f, g = (f = za(a, f)) !== t ? c + (za('/', f) || f) : b + g) : (f = za(c, d)) !== t ? g = c + f : c == d + '/' && (g = c);
                g && this.$$parse(g);
                return !!g;
            };
        }
        function dc(b, a) {
            var c = bc(b);
            $c(b, this);
            this.$$parse = function (d) {
                d = za(b, d) || za(c, d);
                var e;
                '#' === d.charAt(0) ? (e = za(a, d), A(e) && (e = d)) : e = this.$$html5 ? d : '';
                ad(e, this);
                d = this.$$path;
                var f = /^\/[A-Z]:(\/.*)/;
                0 === e.indexOf(b) && (e = e.replace(b, ''));
                f.exec(e) || (d = (e = f.exec(d)) ? e[1] : d);
                this.$$path = d;
                this.$$compose();
            };
            this.$$compose = function () {
                var c = Nb(this.$$search), e = this.$$hash ? '#' + qb(this.$$hash) : '';
                this.$$url = ac(this.$$path) + (c ? '?' + c : '') + e;
                this.$$absUrl = b + (this.$$url ? a + this.$$url : '');
            };
            this.$$parseLinkUrl = function (a, c) {
                return Ha(b) == Ha(a) ? (this.$$parse(a), !0) : !1;
            };
        }
        function cd(b, a) {
            this.$$html5 = !0;
            dc.apply(this, arguments);
            var c = bc(b);
            this.$$parseLinkUrl = function (d, e) {
                if (e && '#' === e[0])
                    return this.hash(e.slice(1)), !0;
                var f, g;
                b == Ha(d) ? f = d : (g = za(c, d)) ? f = b + a + g : c === d + '/' && (f = c);
                f && this.$$parse(f);
                return !!f;
            };
            this.$$compose = function () {
                var c = Nb(this.$$search), e = this.$$hash ? '#' + qb(this.$$hash) : '';
                this.$$url = ac(this.$$path) + (c ? '?' + c : '') + e;
                this.$$absUrl = b + a + this.$$url;
            };
        }
        function Gb(b) {
            return function () {
                return this[b];
            };
        }
        function dd(b, a) {
            return function (c) {
                if (A(c))
                    return this[b];
                this[b] = a(c);
                this.$$compose();
                return this;
            };
        }
        function Me() {
            var b = '', a = {
                    enabled: !1,
                    requireBase: !0,
                    rewriteLinks: !0
                };
            this.hashPrefix = function (a) {
                return y(a) ? (b = a, this) : b;
            };
            this.html5Mode = function (b) {
                return Wa(b) ? (a.enabled = b, this) : I(b) ? (Wa(b.enabled) && (a.enabled = b.enabled), Wa(b.requireBase) && (a.requireBase = b.requireBase), Wa(b.rewriteLinks) && (a.rewriteLinks = b.rewriteLinks), this) : a;
            };
            this.$get = [
                '$rootScope',
                '$browser',
                '$sniffer',
                '$rootElement',
                '$window',
                function (c, d, e, f, g) {
                    function h(a, b, c) {
                        var e = k.url(), f = k.$$state;
                        try {
                            d.url(a, b, c), k.$$state = d.state();
                        } catch (g) {
                            throw k.url(e), k.$$state = f, g;
                        }
                    }
                    function l(a, b) {
                        c.$broadcast('$locationChangeSuccess', k.absUrl(), a, k.$$state, b);
                    }
                    var k, m;
                    m = d.baseHref();
                    var n = d.url(), q;
                    if (a.enabled) {
                        if (!m && a.requireBase)
                            throw Fb('nobase');
                        q = n.substring(0, n.indexOf('/', n.indexOf('//') + 2)) + (m || '/');
                        m = e.history ? cc : cd;
                    } else
                        q = Ha(n), m = dc;
                    k = new m(q, '#' + b);
                    k.$$parseLinkUrl(n, n);
                    k.$$state = d.state();
                    var u = /^\s*(javascript|mailto):/i;
                    f.on('click', function (b) {
                        if (a.rewriteLinks && !b.ctrlKey && !b.metaKey && !b.shiftKey && 2 != b.which && 2 != b.button) {
                            for (var e = B(b.target); 'a' !== ua(e[0]);)
                                if (e[0] === f[0] || !(e = e.parent())[0])
                                    return;
                            var h = e.prop('href'), l = e.attr('href') || e.attr('xlink:href');
                            I(h) && '[object SVGAnimatedString]' === h.toString() && (h = Ba(h.animVal).href);
                            u.test(h) || !h || e.attr('target') || b.isDefaultPrevented() || !k.$$parseLinkUrl(h, l) || (b.preventDefault(), k.absUrl() != d.url() && (c.$apply(), g.angular['ff-684208-preventDefault'] = !0));
                        }
                    });
                    k.absUrl() != n && d.url(k.absUrl(), !0);
                    var r = !0;
                    d.onUrlChange(function (a, b) {
                        c.$evalAsync(function () {
                            var d = k.absUrl(), e = k.$$state, f;
                            k.$$parse(a);
                            k.$$state = b;
                            f = c.$broadcast('$locationChangeStart', a, d, b, e).defaultPrevented;
                            k.absUrl() === a && (f ? (k.$$parse(d), k.$$state = e, h(d, !1, e)) : (r = !1, l(d, e)));
                        });
                        c.$$phase || c.$digest();
                    });
                    c.$watch(function () {
                        var a = bd(d.url()), b = bd(k.absUrl()), f = d.state(), g = k.$$replace, q = a !== b || k.$$html5 && e.history && f !== k.$$state;
                        if (r || q)
                            r = !1, c.$evalAsync(function () {
                                var b = k.absUrl(), d = c.$broadcast('$locationChangeStart', b, a, k.$$state, f).defaultPrevented;
                                k.absUrl() === b && (d ? (k.$$parse(a), k.$$state = f) : (q && h(b, g, f === k.$$state ? null : k.$$state), l(a, f)));
                            });
                        k.$$replace = !1;
                    });
                    return k;
                }
            ];
        }
        function Ne() {
            var b = !0, a = this;
            this.debugEnabled = function (a) {
                return y(a) ? (b = a, this) : b;
            };
            this.$get = [
                '$window',
                function (c) {
                    function d(a) {
                        a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? 'Error: ' + a.message + '\n' + a.stack : a.stack : a.sourceURL && (a = a.message + '\n' + a.sourceURL + ':' + a.line));
                        return a;
                    }
                    function e(a) {
                        var b = c.console || {}, e = b[a] || b.log || H;
                        a = !1;
                        try {
                            a = !!e.apply;
                        } catch (l) {
                        }
                        return a ? function () {
                            var a = [];
                            s(arguments, function (b) {
                                a.push(d(b));
                            });
                            return e.apply(b, a);
                        } : function (a, b) {
                            e(a, null == b ? '' : b);
                        };
                    }
                    return {
                        log: e('log'),
                        info: e('info'),
                        warn: e('warn'),
                        error: e('error'),
                        debug: function () {
                            var c = e('debug');
                            return function () {
                                b && c.apply(a, arguments);
                            };
                        }()
                    };
                }
            ];
        }
        function ta(b, a) {
            if ('__defineGetter__' === b || '__defineSetter__' === b || '__lookupGetter__' === b || '__lookupSetter__' === b || '__proto__' === b)
                throw la('isecfld', a);
            return b;
        }
        function ma(b, a) {
            if (b) {
                if (b.constructor === b)
                    throw la('isecfn', a);
                if (b.window === b)
                    throw la('isecwindow', a);
                if (b.children && (b.nodeName || b.prop && b.attr && b.find))
                    throw la('isecdom', a);
                if (b === Object)
                    throw la('isecobj', a);
            }
            return b;
        }
        function ec(b) {
            return b.constant;
        }
        function gb(b, a, c, d, e) {
            ma(b, e);
            ma(a, e);
            c = c.split('.');
            for (var f, g = 0; 1 < c.length; g++) {
                f = ta(c.shift(), e);
                var h = 0 === g && a && a[f] || b[f];
                h || (h = {}, b[f] = h);
                b = ma(h, e);
            }
            f = ta(c.shift(), e);
            ma(b[f], e);
            return b[f] = d;
        }
        function Qa(b) {
            return 'constructor' == b;
        }
        function ed(b, a, c, d, e, f, g) {
            ta(b, f);
            ta(a, f);
            ta(c, f);
            ta(d, f);
            ta(e, f);
            var h = function (a) {
                    return ma(a, f);
                }, l = g || Qa(b) ? h : pa, k = g || Qa(a) ? h : pa, m = g || Qa(c) ? h : pa, n = g || Qa(d) ? h : pa, q = g || Qa(e) ? h : pa;
            return function (f, g) {
                var h = g && g.hasOwnProperty(b) ? g : f;
                if (null == h)
                    return h;
                h = l(h[b]);
                if (!a)
                    return h;
                if (null == h)
                    return t;
                h = k(h[a]);
                if (!c)
                    return h;
                if (null == h)
                    return t;
                h = m(h[c]);
                if (!d)
                    return h;
                if (null == h)
                    return t;
                h = n(h[d]);
                return e ? null == h ? t : h = q(h[e]) : h;
            };
        }
        function yf(b, a) {
            return function (c, d) {
                return b(c, d, ma, a);
            };
        }
        function zf(b, a, c) {
            var d = a.expensiveChecks, e = d ? Af : Bf, f = e[b];
            if (f)
                return f;
            var g = b.split('.'), h = g.length;
            if (a.csp)
                f = 6 > h ? ed(g[0], g[1], g[2], g[3], g[4], c, d) : function (a, b) {
                    var e = 0, f;
                    do
                        f = ed(g[e++], g[e++], g[e++], g[e++], g[e++], c, d)(a, b), b = t, a = f;
                    while (e < h);
                    return f;
                };
            else {
                var l = '';
                d && (l += 's = eso(s, fe);\nl = eso(l, fe);\n');
                var k = d;
                s(g, function (a, b) {
                    ta(a, c);
                    var e = (b ? 's' : '((l&&l.hasOwnProperty("' + a + '"))?l:s)') + '.' + a;
                    if (d || Qa(a))
                        e = 'eso(' + e + ', fe)', k = !0;
                    l += 'if(s == null) return undefined;\ns=' + e + ';\n';
                });
                l += 'return s;';
                a = new Function('s', 'l', 'eso', 'fe', l);
                a.toString = da(l);
                k && (a = yf(a, c));
                f = a;
            }
            f.sharedGetter = !0;
            f.assign = function (a, c, d) {
                return gb(a, d, b, c, b);
            };
            return e[b] = f;
        }
        function fc(b) {
            return G(b.valueOf) ? b.valueOf() : Cf.call(b);
        }
        function Oe() {
            var b = ha(), a = ha();
            this.$get = [
                '$filter',
                '$sniffer',
                function (c, d) {
                    function e(a) {
                        var b = a;
                        a.sharedGetter && (b = function (b, c) {
                            return a(b, c);
                        }, b.literal = a.literal, b.constant = a.constant, b.assign = a.assign);
                        return b;
                    }
                    function f(a, b) {
                        for (var c = 0, d = a.length; c < d; c++) {
                            var e = a[c];
                            e.constant || (e.inputs ? f(e.inputs, b) : -1 === b.indexOf(e) && b.push(e));
                        }
                        return b;
                    }
                    function g(a, b) {
                        return null == a || null == b ? a === b : 'object' === typeof a && (a = fc(a), 'object' === typeof a) ? !1 : a === b || a !== a && b !== b;
                    }
                    function h(a, b, c, d) {
                        var e = d.$$inputs || (d.$$inputs = f(d.inputs, [])), h;
                        if (1 === e.length) {
                            var l = g, e = e[0];
                            return a.$watch(function (a) {
                                var b = e(a);
                                g(b, l) || (h = d(a), l = b && fc(b));
                                return h;
                            }, b, c);
                        }
                        for (var k = [], q = 0, n = e.length; q < n; q++)
                            k[q] = g;
                        return a.$watch(function (a) {
                            for (var b = !1, c = 0, f = e.length; c < f; c++) {
                                var l = e[c](a);
                                if (b || (b = !g(l, k[c])))
                                    k[c] = l && fc(l);
                            }
                            b && (h = d(a));
                            return h;
                        }, b, c);
                    }
                    function l(a, b, c, d) {
                        var e, f;
                        return e = a.$watch(function (a) {
                            return d(a);
                        }, function (a, c, d) {
                            f = a;
                            G(b) && b.apply(this, arguments);
                            y(a) && d.$$postDigest(function () {
                                y(f) && e();
                            });
                        }, c);
                    }
                    function k(a, b, c, d) {
                        function e(a) {
                            var b = !0;
                            s(a, function (a) {
                                y(a) || (b = !1);
                            });
                            return b;
                        }
                        var f, g;
                        return f = a.$watch(function (a) {
                            return d(a);
                        }, function (a, c, d) {
                            g = a;
                            G(b) && b.call(this, a, c, d);
                            e(a) && d.$$postDigest(function () {
                                e(g) && f();
                            });
                        }, c);
                    }
                    function m(a, b, c, d) {
                        var e;
                        return e = a.$watch(function (a) {
                            return d(a);
                        }, function (a, c, d) {
                            G(b) && b.apply(this, arguments);
                            e();
                        }, c);
                    }
                    function n(a, b) {
                        if (!b)
                            return a;
                        var c = a.$$watchDelegate, c = c !== k && c !== l ? function (c, d) {
                                var e = a(c, d);
                                return b(e, c, d);
                            } : function (c, d) {
                                var e = a(c, d), f = b(e, c, d);
                                return y(e) ? f : e;
                            };
                        a.$$watchDelegate && a.$$watchDelegate !== h ? c.$$watchDelegate = a.$$watchDelegate : b.$stateful || (c.$$watchDelegate = h, c.inputs = [a]);
                        return c;
                    }
                    var q = {
                            csp: d.csp,
                            expensiveChecks: !1
                        }, u = {
                            csp: d.csp,
                            expensiveChecks: !0
                        };
                    return function (d, f, g) {
                        var v, w, L;
                        switch (typeof d) {
                        case 'string':
                            L = d = d.trim();
                            var C = g ? a : b;
                            v = C[L];
                            v || (':' === d.charAt(0) && ':' === d.charAt(1) && (w = !0, d = d.substring(2)), g = g ? u : q, v = new gc(g), v = new hb(v, c, g).parse(d), v.constant ? v.$$watchDelegate = m : w ? (v = e(v), v.$$watchDelegate = v.literal ? k : l) : v.inputs && (v.$$watchDelegate = h), C[L] = v);
                            return n(v, f);
                        case 'function':
                            return n(d, f);
                        default:
                            return n(H, f);
                        }
                    };
                }
            ];
        }
        function Qe() {
            this.$get = [
                '$rootScope',
                '$exceptionHandler',
                function (b, a) {
                    return fd(function (a) {
                        b.$evalAsync(a);
                    }, a);
                }
            ];
        }
        function Re() {
            this.$get = [
                '$browser',
                '$exceptionHandler',
                function (b, a) {
                    return fd(function (a) {
                        b.defer(a);
                    }, a);
                }
            ];
        }
        function fd(b, a) {
            function c(a, b, c) {
                function d(b) {
                    return function (c) {
                        e || (e = !0, b.call(a, c));
                    };
                }
                var e = !1;
                return [
                    d(b),
                    d(c)
                ];
            }
            function d() {
                this.$$state = { status: 0 };
            }
            function e(a, b) {
                return function (c) {
                    b.call(a, c);
                };
            }
            function f(c) {
                !c.processScheduled && c.pending && (c.processScheduled = !0, b(function () {
                    var b, d, e;
                    e = c.pending;
                    c.processScheduled = !1;
                    c.pending = t;
                    for (var f = 0, g = e.length; f < g; ++f) {
                        d = e[f][0];
                        b = e[f][c.status];
                        try {
                            G(b) ? d.resolve(b(c.value)) : 1 === c.status ? d.resolve(c.value) : d.reject(c.value);
                        } catch (h) {
                            d.reject(h), a(h);
                        }
                    }
                }));
            }
            function g() {
                this.promise = new d();
                this.resolve = e(this, this.resolve);
                this.reject = e(this, this.reject);
                this.notify = e(this, this.notify);
            }
            var h = T('$q', TypeError);
            d.prototype = {
                then: function (a, b, c) {
                    var d = new g();
                    this.$$state.pending = this.$$state.pending || [];
                    this.$$state.pending.push([
                        d,
                        a,
                        b,
                        c
                    ]);
                    0 < this.$$state.status && f(this.$$state);
                    return d.promise;
                },
                'catch': function (a) {
                    return this.then(null, a);
                },
                'finally': function (a, b) {
                    return this.then(function (b) {
                        return k(b, !0, a);
                    }, function (b) {
                        return k(b, !1, a);
                    }, b);
                }
            };
            g.prototype = {
                resolve: function (a) {
                    this.promise.$$state.status || (a === this.promise ? this.$$reject(h('qcycle', a)) : this.$$resolve(a));
                },
                $$resolve: function (b) {
                    var d, e;
                    e = c(this, this.$$resolve, this.$$reject);
                    try {
                        if (I(b) || G(b))
                            d = b && b.then;
                        G(d) ? (this.promise.$$state.status = -1, d.call(b, e[0], e[1], this.notify)) : (this.promise.$$state.value = b, this.promise.$$state.status = 1, f(this.promise.$$state));
                    } catch (g) {
                        e[1](g), a(g);
                    }
                },
                reject: function (a) {
                    this.promise.$$state.status || this.$$reject(a);
                },
                $$reject: function (a) {
                    this.promise.$$state.value = a;
                    this.promise.$$state.status = 2;
                    f(this.promise.$$state);
                },
                notify: function (c) {
                    var d = this.promise.$$state.pending;
                    0 >= this.promise.$$state.status && d && d.length && b(function () {
                        for (var b, e, f = 0, g = d.length; f < g; f++) {
                            e = d[f][0];
                            b = d[f][3];
                            try {
                                e.notify(G(b) ? b(c) : c);
                            } catch (h) {
                                a(h);
                            }
                        }
                    });
                }
            };
            var l = function (a, b) {
                    var c = new g();
                    b ? c.resolve(a) : c.reject(a);
                    return c.promise;
                }, k = function (a, b, c) {
                    var d = null;
                    try {
                        G(c) && (d = c());
                    } catch (e) {
                        return l(e, !1);
                    }
                    return d && G(d.then) ? d.then(function () {
                        return l(a, b);
                    }, function (a) {
                        return l(a, !1);
                    }) : l(a, b);
                }, m = function (a, b, c, d) {
                    var e = new g();
                    e.resolve(a);
                    return e.promise.then(b, c, d);
                }, n = function u(a) {
                    if (!G(a))
                        throw h('norslvr', a);
                    if (!(this instanceof u))
                        return new u(a);
                    var b = new g();
                    a(function (a) {
                        b.resolve(a);
                    }, function (a) {
                        b.reject(a);
                    });
                    return b.promise;
                };
            n.defer = function () {
                return new g();
            };
            n.reject = function (a) {
                var b = new g();
                b.reject(a);
                return b.promise;
            };
            n.when = m;
            n.all = function (a) {
                var b = new g(), c = 0, d = D(a) ? [] : {};
                s(a, function (a, e) {
                    c++;
                    m(a).then(function (a) {
                        d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d));
                    }, function (a) {
                        d.hasOwnProperty(e) || b.reject(a);
                    });
                });
                0 === c && b.resolve(d);
                return b.promise;
            };
            return n;
        }
        function $e() {
            this.$get = [
                '$window',
                '$timeout',
                function (b, a) {
                    var c = b.requestAnimationFrame || b.webkitRequestAnimationFrame, d = b.cancelAnimationFrame || b.webkitCancelAnimationFrame || b.webkitCancelRequestAnimationFrame, e = !!c, f = e ? function (a) {
                            var b = c(a);
                            return function () {
                                d(b);
                            };
                        } : function (b) {
                            var c = a(b, 16.66, !1);
                            return function () {
                                a.cancel(c);
                            };
                        };
                    f.supported = e;
                    return f;
                }
            ];
        }
        function Pe() {
            var b = 10, a = T('$rootScope'), c = null, d = null;
            this.digestTtl = function (a) {
                arguments.length && (b = a);
                return b;
            };
            this.$get = [
                '$injector',
                '$exceptionHandler',
                '$parse',
                '$browser',
                function (e, f, g, h) {
                    function l() {
                        this.$id = ++nb;
                        this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
                        this.$root = this;
                        this.$$destroyed = !1;
                        this.$$listeners = {};
                        this.$$listenerCount = {};
                        this.$$isolateBindings = null;
                    }
                    function k(b) {
                        if (r.$$phase)
                            throw a('inprog', r.$$phase);
                        r.$$phase = b;
                    }
                    function m(a, b, c) {
                        do
                            a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c];
                        while (a = a.$parent);
                    }
                    function n() {
                    }
                    function q() {
                        for (; v.length;)
                            try {
                                v.shift()();
                            } catch (a) {
                                f(a);
                            }
                        d = null;
                    }
                    function u() {
                        null === d && (d = h.defer(function () {
                            r.$apply(q);
                        }));
                    }
                    l.prototype = {
                        constructor: l,
                        $new: function (a, b) {
                            function c() {
                                d.$$destroyed = !0;
                            }
                            var d;
                            b = b || this;
                            a ? (d = new l(), d.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = function () {
                                this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null;
                                this.$$listeners = {};
                                this.$$listenerCount = {};
                                this.$id = ++nb;
                                this.$$ChildScope = null;
                            }, this.$$ChildScope.prototype = this), d = new this.$$ChildScope());
                            d.$parent = b;
                            d.$$prevSibling = b.$$childTail;
                            b.$$childHead ? (b.$$childTail.$$nextSibling = d, b.$$childTail = d) : b.$$childHead = b.$$childTail = d;
                            (a || b != this) && d.$on('$destroy', c);
                            return d;
                        },
                        $watch: function (a, b, d) {
                            var e = g(a);
                            if (e.$$watchDelegate)
                                return e.$$watchDelegate(this, b, d, e);
                            var f = this.$$watchers, h = {
                                    fn: b,
                                    last: n,
                                    get: e,
                                    exp: a,
                                    eq: !!d
                                };
                            c = null;
                            G(b) || (h.fn = H);
                            f || (f = this.$$watchers = []);
                            f.unshift(h);
                            return function () {
                                Xa(f, h);
                                c = null;
                            };
                        },
                        $watchGroup: function (a, b) {
                            function c() {
                                h = !1;
                                l ? (l = !1, b(e, e, g)) : b(e, d, g);
                            }
                            var d = Array(a.length), e = Array(a.length), f = [], g = this, h = !1, l = !0;
                            if (!a.length) {
                                var k = !0;
                                g.$evalAsync(function () {
                                    k && b(e, e, g);
                                });
                                return function () {
                                    k = !1;
                                };
                            }
                            if (1 === a.length)
                                return this.$watch(a[0], function (a, c, f) {
                                    e[0] = a;
                                    d[0] = c;
                                    b(e, a === c ? e : d, f);
                                });
                            s(a, function (a, b) {
                                var l = g.$watch(a, function (a, f) {
                                    e[b] = a;
                                    d[b] = f;
                                    h || (h = !0, g.$evalAsync(c));
                                });
                                f.push(l);
                            });
                            return function () {
                                for (; f.length;)
                                    f.shift()();
                            };
                        },
                        $watchCollection: function (a, b) {
                            function c(a) {
                                e = a;
                                var b, d, g, h;
                                if (!A(e)) {
                                    if (I(e))
                                        if (Ta(e))
                                            for (f !== q && (f = q, u = f.length = 0, k++), a = e.length, u !== a && (k++, f.length = u = a), b = 0; b < a; b++)
                                                h = f[b], g = e[b], d = h !== h && g !== g, d || h === g || (k++, f[b] = g);
                                        else {
                                            f !== m && (f = m = {}, u = 0, k++);
                                            a = 0;
                                            for (b in e)
                                                e.hasOwnProperty(b) && (a++, g = e[b], h = f[b], b in f ? (d = h !== h && g !== g, d || h === g || (k++, f[b] = g)) : (u++, f[b] = g, k++));
                                            if (u > a)
                                                for (b in k++, f)
                                                    e.hasOwnProperty(b) || (u--, delete f[b]);
                                        }
                                    else
                                        f !== e && (f = e, k++);
                                    return k;
                                }
                            }
                            c.$stateful = !0;
                            var d = this, e, f, h, l = 1 < b.length, k = 0, n = g(a, c), q = [], m = {}, p = !0, u = 0;
                            return this.$watch(n, function () {
                                p ? (p = !1, b(e, e, d)) : b(e, h, d);
                                if (l)
                                    if (I(e))
                                        if (Ta(e)) {
                                            h = Array(e.length);
                                            for (var a = 0; a < e.length; a++)
                                                h[a] = e[a];
                                        } else
                                            for (a in h = {}, e)
                                                rc.call(e, a) && (h[a] = e[a]);
                                    else
                                        h = e;
                            });
                        },
                        $digest: function () {
                            var e, g, l, m, u, v, s = b, t, W = [], y, J;
                            k('$digest');
                            h.$$checkUrlChange();
                            this === r && null !== d && (h.defer.cancel(d), q());
                            c = null;
                            do {
                                v = !1;
                                for (t = this; O.length;) {
                                    try {
                                        J = O.shift(), J.scope.$eval(J.expression, J.locals);
                                    } catch (B) {
                                        f(B);
                                    }
                                    c = null;
                                }
                                a:
                                    do {
                                        if (m = t.$$watchers)
                                            for (u = m.length; u--;)
                                                try {
                                                    if (e = m[u])
                                                        if ((g = e.get(t)) !== (l = e.last) && !(e.eq ? fa(g, l) : 'number' === typeof g && 'number' === typeof l && isNaN(g) && isNaN(l)))
                                                            v = !0, c = e, e.last = e.eq ? Ea(g, null) : g, e.fn(g, l === n ? g : l, t), 5 > s && (y = 4 - s, W[y] || (W[y] = []), W[y].push({
                                                                msg: G(e.exp) ? 'fn: ' + (e.exp.name || e.exp.toString()) : e.exp,
                                                                newVal: g,
                                                                oldVal: l
                                                            }));
                                                        else if (e === c) {
                                                            v = !1;
                                                            break a;
                                                        }
                                                } catch (A) {
                                                    f(A);
                                                }
                                        if (!(m = t.$$childHead || t !== this && t.$$nextSibling))
                                            for (; t !== this && !(m = t.$$nextSibling);)
                                                t = t.$parent;
                                    } while (t = m);
                                if ((v || O.length) && !s--)
                                    throw r.$$phase = null, a('infdig', b, W);
                            } while (v || O.length);
                            for (r.$$phase = null; p.length;)
                                try {
                                    p.shift()();
                                } catch (ca) {
                                    f(ca);
                                }
                        },
                        $destroy: function () {
                            if (!this.$$destroyed) {
                                var a = this.$parent;
                                this.$broadcast('$destroy');
                                this.$$destroyed = !0;
                                if (this !== r) {
                                    for (var b in this.$$listenerCount)
                                        m(this, this.$$listenerCount[b], b);
                                    a.$$childHead == this && (a.$$childHead = this.$$nextSibling);
                                    a.$$childTail == this && (a.$$childTail = this.$$prevSibling);
                                    this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling);
                                    this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling);
                                    this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = H;
                                    this.$on = this.$watch = this.$watchGroup = function () {
                                        return H;
                                    };
                                    this.$$listeners = {};
                                    this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = this.$$watchers = null;
                                }
                            }
                        },
                        $eval: function (a, b) {
                            return g(a)(this, b);
                        },
                        $evalAsync: function (a, b) {
                            r.$$phase || O.length || h.defer(function () {
                                O.length && r.$digest();
                            });
                            O.push({
                                scope: this,
                                expression: a,
                                locals: b
                            });
                        },
                        $$postDigest: function (a) {
                            p.push(a);
                        },
                        $apply: function (a) {
                            try {
                                return k('$apply'), this.$eval(a);
                            } catch (b) {
                                f(b);
                            } finally {
                                r.$$phase = null;
                                try {
                                    r.$digest();
                                } catch (c) {
                                    throw f(c), c;
                                }
                            }
                        },
                        $applyAsync: function (a) {
                            function b() {
                                c.$eval(a);
                            }
                            var c = this;
                            a && v.push(b);
                            u();
                        },
                        $on: function (a, b) {
                            var c = this.$$listeners[a];
                            c || (this.$$listeners[a] = c = []);
                            c.push(b);
                            var d = this;
                            do
                                d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++;
                            while (d = d.$parent);
                            var e = this;
                            return function () {
                                var d = c.indexOf(b);
                                -1 !== d && (c[d] = null, m(e, 1, a));
                            };
                        },
                        $emit: function (a, b) {
                            var c = [], d, e = this, g = !1, h = {
                                    name: a,
                                    targetScope: e,
                                    stopPropagation: function () {
                                        g = !0;
                                    },
                                    preventDefault: function () {
                                        h.defaultPrevented = !0;
                                    },
                                    defaultPrevented: !1
                                }, l = Ya([h], arguments, 1), k, m;
                            do {
                                d = e.$$listeners[a] || c;
                                h.currentScope = e;
                                k = 0;
                                for (m = d.length; k < m; k++)
                                    if (d[k])
                                        try {
                                            d[k].apply(null, l);
                                        } catch (n) {
                                            f(n);
                                        }
                                    else
                                        d.splice(k, 1), k--, m--;
                                if (g)
                                    return h.currentScope = null, h;
                                e = e.$parent;
                            } while (e);
                            h.currentScope = null;
                            return h;
                        },
                        $broadcast: function (a, b) {
                            var c = this, d = this, e = {
                                    name: a,
                                    targetScope: this,
                                    preventDefault: function () {
                                        e.defaultPrevented = !0;
                                    },
                                    defaultPrevented: !1
                                };
                            if (!this.$$listenerCount[a])
                                return e;
                            for (var g = Ya([e], arguments, 1), h, l; c = d;) {
                                e.currentScope = c;
                                d = c.$$listeners[a] || [];
                                h = 0;
                                for (l = d.length; h < l; h++)
                                    if (d[h])
                                        try {
                                            d[h].apply(null, g);
                                        } catch (k) {
                                            f(k);
                                        }
                                    else
                                        d.splice(h, 1), h--, l--;
                                if (!(d = c.$$listenerCount[a] && c.$$childHead || c !== this && c.$$nextSibling))
                                    for (; c !== this && !(d = c.$$nextSibling);)
                                        c = c.$parent;
                            }
                            e.currentScope = null;
                            return e;
                        }
                    };
                    var r = new l(), O = r.$$asyncQueue = [], p = r.$$postDigestQueue = [], v = r.$$applyAsyncQueue = [];
                    return r;
                }
            ];
        }
        function Sd() {
            var b = /^\s*(https?|ftp|mailto|tel|file):/, a = /^\s*((https?|ftp|file|blob):|data:image\/)/;
            this.aHrefSanitizationWhitelist = function (a) {
                return y(a) ? (b = a, this) : b;
            };
            this.imgSrcSanitizationWhitelist = function (b) {
                return y(b) ? (a = b, this) : a;
            };
            this.$get = function () {
                return function (c, d) {
                    var e = d ? a : b, f;
                    f = Ba(c).href;
                    return '' === f || f.match(e) ? c : 'unsafe:' + f;
                };
            };
        }
        function Df(b) {
            if ('self' === b)
                return b;
            if (F(b)) {
                if (-1 < b.indexOf('***'))
                    throw Ca('iwcard', b);
                b = gd(b).replace('\\*\\*', '.*').replace('\\*', '[^:/.?&;]*');
                return new RegExp('^' + b + '$');
            }
            if (ob(b))
                return new RegExp('^' + b.source + '$');
            throw Ca('imatcher');
        }
        function hd(b) {
            var a = [];
            y(b) && s(b, function (b) {
                a.push(Df(b));
            });
            return a;
        }
        function Te() {
            this.SCE_CONTEXTS = na;
            var b = ['self'], a = [];
            this.resourceUrlWhitelist = function (a) {
                arguments.length && (b = hd(a));
                return b;
            };
            this.resourceUrlBlacklist = function (b) {
                arguments.length && (a = hd(b));
                return a;
            };
            this.$get = [
                '$injector',
                function (c) {
                    function d(a, b) {
                        return 'self' === a ? Zc(b) : !!a.exec(b.href);
                    }
                    function e(a) {
                        var b = function (a) {
                            this.$$unwrapTrustedValue = function () {
                                return a;
                            };
                        };
                        a && (b.prototype = new a());
                        b.prototype.valueOf = function () {
                            return this.$$unwrapTrustedValue();
                        };
                        b.prototype.toString = function () {
                            return this.$$unwrapTrustedValue().toString();
                        };
                        return b;
                    }
                    var f = function (a) {
                        throw Ca('unsafe');
                    };
                    c.has('$sanitize') && (f = c.get('$sanitize'));
                    var g = e(), h = {};
                    h[na.HTML] = e(g);
                    h[na.CSS] = e(g);
                    h[na.URL] = e(g);
                    h[na.JS] = e(g);
                    h[na.RESOURCE_URL] = e(h[na.URL]);
                    return {
                        trustAs: function (a, b) {
                            var c = h.hasOwnProperty(a) ? h[a] : null;
                            if (!c)
                                throw Ca('icontext', a, b);
                            if (null === b || b === t || '' === b)
                                return b;
                            if ('string' !== typeof b)
                                throw Ca('itype', a);
                            return new c(b);
                        },
                        getTrusted: function (c, e) {
                            if (null === e || e === t || '' === e)
                                return e;
                            var g = h.hasOwnProperty(c) ? h[c] : null;
                            if (g && e instanceof g)
                                return e.$$unwrapTrustedValue();
                            if (c === na.RESOURCE_URL) {
                                var g = Ba(e.toString()), n, q, u = !1;
                                n = 0;
                                for (q = b.length; n < q; n++)
                                    if (d(b[n], g)) {
                                        u = !0;
                                        break;
                                    }
                                if (u)
                                    for (n = 0, q = a.length; n < q; n++)
                                        if (d(a[n], g)) {
                                            u = !1;
                                            break;
                                        }
                                if (u)
                                    return e;
                                throw Ca('insecurl', e.toString());
                            }
                            if (c === na.HTML)
                                return f(e);
                            throw Ca('unsafe');
                        },
                        valueOf: function (a) {
                            return a instanceof g ? a.$$unwrapTrustedValue() : a;
                        }
                    };
                }
            ];
        }
        function Se() {
            var b = !0;
            this.enabled = function (a) {
                arguments.length && (b = !!a);
                return b;
            };
            this.$get = [
                '$parse',
                '$sceDelegate',
                function (a, c) {
                    if (b && 8 > Ra)
                        throw Ca('iequirks');
                    var d = ra(na);
                    d.isEnabled = function () {
                        return b;
                    };
                    d.trustAs = c.trustAs;
                    d.getTrusted = c.getTrusted;
                    d.valueOf = c.valueOf;
                    b || (d.trustAs = d.getTrusted = function (a, b) {
                        return b;
                    }, d.valueOf = pa);
                    d.parseAs = function (b, c) {
                        var e = a(c);
                        return e.literal && e.constant ? e : a(c, function (a) {
                            return d.getTrusted(b, a);
                        });
                    };
                    var e = d.parseAs, f = d.getTrusted, g = d.trustAs;
                    s(na, function (a, b) {
                        var c = Q(b);
                        d[cb('parse_as_' + c)] = function (b) {
                            return e(a, b);
                        };
                        d[cb('get_trusted_' + c)] = function (b) {
                            return f(a, b);
                        };
                        d[cb('trust_as_' + c)] = function (b) {
                            return g(a, b);
                        };
                    });
                    return d;
                }
            ];
        }
        function Ue() {
            this.$get = [
                '$window',
                '$document',
                function (b, a) {
                    var c = {}, d = ba((/android (\d+)/.exec(Q((b.navigator || {}).userAgent)) || [])[1]), e = /Boxee/i.test((b.navigator || {}).userAgent), f = a[0] || {}, g, h = /^(Moz|webkit|ms)(?=[A-Z])/, l = f.body && f.body.style, k = !1, m = !1;
                    if (l) {
                        for (var n in l)
                            if (k = h.exec(n)) {
                                g = k[0];
                                g = g.substr(0, 1).toUpperCase() + g.substr(1);
                                break;
                            }
                        g || (g = 'WebkitOpacity' in l && 'webkit');
                        k = !!('transition' in l || g + 'Transition' in l);
                        m = !!('animation' in l || g + 'Animation' in l);
                        !d || k && m || (k = F(f.body.style.webkitTransition), m = F(f.body.style.webkitAnimation));
                    }
                    return {
                        history: !(!b.history || !b.history.pushState || 4 > d || e),
                        hasEvent: function (a) {
                            if ('input' === a && 11 >= Ra)
                                return !1;
                            if (A(c[a])) {
                                var b = f.createElement('div');
                                c[a] = 'on' + a in b;
                            }
                            return c[a];
                        },
                        csp: ab(),
                        vendorPrefix: g,
                        transitions: k,
                        animations: m,
                        android: d
                    };
                }
            ];
        }
        function We() {
            this.$get = [
                '$templateCache',
                '$http',
                '$q',
                function (b, a, c) {
                    function d(e, f) {
                        d.totalPendingRequests++;
                        var g = a.defaults && a.defaults.transformResponse;
                        D(g) ? g = g.filter(function (a) {
                            return a !== Yb;
                        }) : g === Yb && (g = null);
                        return a.get(e, {
                            cache: b,
                            transformResponse: g
                        }).finally(function () {
                            d.totalPendingRequests--;
                        }).then(function (a) {
                            return a.data;
                        }, function (a) {
                            if (!f)
                                throw ja('tpload', e);
                            return c.reject(a);
                        });
                    }
                    d.totalPendingRequests = 0;
                    return d;
                }
            ];
        }
        function Xe() {
            this.$get = [
                '$rootScope',
                '$browser',
                '$location',
                function (b, a, c) {
                    return {
                        findBindings: function (a, b, c) {
                            a = a.getElementsByClassName('ng-binding');
                            var g = [];
                            s(a, function (a) {
                                var d = ga.element(a).data('$binding');
                                d && s(d, function (d) {
                                    c ? new RegExp('(^|\\s)' + gd(b) + '(\\s|\\||$)').test(d) && g.push(a) : -1 != d.indexOf(b) && g.push(a);
                                });
                            });
                            return g;
                        },
                        findModels: function (a, b, c) {
                            for (var g = [
                                        'ng-',
                                        'data-ng-',
                                        'ng\\:'
                                    ], h = 0; h < g.length; ++h) {
                                var l = a.querySelectorAll('[' + g[h] + 'model' + (c ? '=' : '*=') + '"' + b + '"]');
                                if (l.length)
                                    return l;
                            }
                        },
                        getLocation: function () {
                            return c.url();
                        },
                        setLocation: function (a) {
                            a !== c.url() && (c.url(a), b.$digest());
                        },
                        whenStable: function (b) {
                            a.notifyWhenNoOutstandingRequests(b);
                        }
                    };
                }
            ];
        }
        function Ye() {
            this.$get = [
                '$rootScope',
                '$browser',
                '$q',
                '$$q',
                '$exceptionHandler',
                function (b, a, c, d, e) {
                    function f(f, l, k) {
                        var m = y(k) && !k, n = (m ? d : c).defer(), q = n.promise;
                        l = a.defer(function () {
                            try {
                                n.resolve(f());
                            } catch (a) {
                                n.reject(a), e(a);
                            } finally {
                                delete g[q.$$timeoutId];
                            }
                            m || b.$apply();
                        }, l);
                        q.$$timeoutId = l;
                        g[l] = n;
                        return q;
                    }
                    var g = {};
                    f.cancel = function (b) {
                        return b && b.$$timeoutId in g ? (g[b.$$timeoutId].reject('canceled'), delete g[b.$$timeoutId], a.defer.cancel(b.$$timeoutId)) : !1;
                    };
                    return f;
                }
            ];
        }
        function Ba(b) {
            Ra && (Z.setAttribute('href', b), b = Z.href);
            Z.setAttribute('href', b);
            return {
                href: Z.href,
                protocol: Z.protocol ? Z.protocol.replace(/:$/, '') : '',
                host: Z.host,
                search: Z.search ? Z.search.replace(/^\?/, '') : '',
                hash: Z.hash ? Z.hash.replace(/^#/, '') : '',
                hostname: Z.hostname,
                port: Z.port,
                pathname: '/' === Z.pathname.charAt(0) ? Z.pathname : '/' + Z.pathname
            };
        }
        function Zc(b) {
            b = F(b) ? Ba(b) : b;
            return b.protocol === id.protocol && b.host === id.host;
        }
        function Ze() {
            this.$get = da(M);
        }
        function Dc(b) {
            function a(c, d) {
                if (I(c)) {
                    var e = {};
                    s(c, function (b, c) {
                        e[c] = a(c, b);
                    });
                    return e;
                }
                return b.factory(c + 'Filter', d);
            }
            this.register = a;
            this.$get = [
                '$injector',
                function (a) {
                    return function (b) {
                        return a.get(b + 'Filter');
                    };
                }
            ];
            a('currency', jd);
            a('date', kd);
            a('filter', Ef);
            a('json', Ff);
            a('limitTo', Gf);
            a('lowercase', Hf);
            a('number', ld);
            a('orderBy', md);
            a('uppercase', If);
        }
        function Ef() {
            return function (b, a, c) {
                if (!D(b))
                    return b;
                var d;
                switch (typeof a) {
                case 'function':
                    break;
                case 'boolean':
                case 'number':
                case 'string':
                    d = !0;
                case 'object':
                    a = Jf(a, c, d);
                    break;
                default:
                    return b;
                }
                return b.filter(a);
            };
        }
        function Jf(b, a, c) {
            var d = I(b) && '$' in b;
            !0 === a ? a = fa : G(a) || (a = function (a, b) {
                if (I(a) || I(b))
                    return !1;
                a = Q('' + a);
                b = Q('' + b);
                return -1 !== a.indexOf(b);
            });
            return function (e) {
                return d && !I(e) ? Ia(e, b.$, a, !1) : Ia(e, b, a, c);
            };
        }
        function Ia(b, a, c, d, e) {
            var f = typeof b, g = typeof a;
            if ('string' === g && '!' === a.charAt(0))
                return !Ia(b, a.substring(1), c, d);
            if (D(b))
                return b.some(function (b) {
                    return Ia(b, a, c, d);
                });
            switch (f) {
            case 'object':
                var h;
                if (d) {
                    for (h in b)
                        if ('$' !== h.charAt(0) && Ia(b[h], a, c, !0))
                            return !0;
                    return e ? !1 : Ia(b, a, c, !1);
                }
                if ('object' === g) {
                    for (h in a)
                        if (e = a[h], !G(e) && (f = '$' === h, !Ia(f ? b : b[h], e, c, f, f)))
                            return !1;
                    return !0;
                }
                return c(b, a);
            case 'function':
                return !1;
            default:
                return c(b, a);
            }
        }
        function jd(b) {
            var a = b.NUMBER_FORMATS;
            return function (b, d, e) {
                A(d) && (d = a.CURRENCY_SYM);
                A(e) && (e = a.PATTERNS[1].maxFrac);
                return null == b ? b : nd(b, a.PATTERNS[1], a.GROUP_SEP, a.DECIMAL_SEP, e).replace(/\u00A4/g, d);
            };
        }
        function ld(b) {
            var a = b.NUMBER_FORMATS;
            return function (b, d) {
                return null == b ? b : nd(b, a.PATTERNS[0], a.GROUP_SEP, a.DECIMAL_SEP, d);
            };
        }
        function nd(b, a, c, d, e) {
            if (!isFinite(b) || I(b))
                return '';
            var f = 0 > b;
            b = Math.abs(b);
            var g = b + '', h = '', l = [], k = !1;
            if (-1 !== g.indexOf('e')) {
                var m = g.match(/([\d\.]+)e(-?)(\d+)/);
                m && '-' == m[2] && m[3] > e + 1 ? b = 0 : (h = g, k = !0);
            }
            if (k)
                0 < e && 1 > b && (h = b.toFixed(e), b = parseFloat(h));
            else {
                g = (g.split(od)[1] || '').length;
                A(e) && (e = Math.min(Math.max(a.minFrac, g), a.maxFrac));
                b = +(Math.round(+(b.toString() + 'e' + e)).toString() + 'e' + -e);
                var g = ('' + b).split(od), k = g[0], g = g[1] || '', n = 0, q = a.lgSize, u = a.gSize;
                if (k.length >= q + u)
                    for (n = k.length - q, m = 0; m < n; m++)
                        0 === (n - m) % u && 0 !== m && (h += c), h += k.charAt(m);
                for (m = n; m < k.length; m++)
                    0 === (k.length - m) % q && 0 !== m && (h += c), h += k.charAt(m);
                for (; g.length < e;)
                    g += '0';
                e && '0' !== e && (h += d + g.substr(0, e));
            }
            0 === b && (f = !1);
            l.push(f ? a.negPre : a.posPre, h, f ? a.negSuf : a.posSuf);
            return l.join('');
        }
        function Hb(b, a, c) {
            var d = '';
            0 > b && (d = '-', b = -b);
            for (b = '' + b; b.length < a;)
                b = '0' + b;
            c && (b = b.substr(b.length - a));
            return d + b;
        }
        function $(b, a, c, d) {
            c = c || 0;
            return function (e) {
                e = e['get' + b]();
                if (0 < c || e > -c)
                    e += c;
                0 === e && -12 == c && (e = 12);
                return Hb(e, a, d);
            };
        }
        function Ib(b, a) {
            return function (c, d) {
                var e = c['get' + b](), f = ub(a ? 'SHORT' + b : b);
                return d[f][e];
            };
        }
        function pd(b) {
            var a = new Date(b, 0, 1).getDay();
            return new Date(b, 0, (4 >= a ? 5 : 12) - a);
        }
        function qd(b) {
            return function (a) {
                var c = pd(a.getFullYear());
                a = +new Date(a.getFullYear(), a.getMonth(), a.getDate() + (4 - a.getDay())) - +c;
                a = 1 + Math.round(a / 604800000);
                return Hb(a, b);
            };
        }
        function kd(b) {
            function a(a) {
                var b;
                if (b = a.match(c)) {
                    a = new Date(0);
                    var f = 0, g = 0, h = b[8] ? a.setUTCFullYear : a.setFullYear, l = b[8] ? a.setUTCHours : a.setHours;
                    b[9] && (f = ba(b[9] + b[10]), g = ba(b[9] + b[11]));
                    h.call(a, ba(b[1]), ba(b[2]) - 1, ba(b[3]));
                    f = ba(b[4] || 0) - f;
                    g = ba(b[5] || 0) - g;
                    h = ba(b[6] || 0);
                    b = Math.round(1000 * parseFloat('0.' + (b[7] || 0)));
                    l.call(a, f, g, h, b);
                }
                return a;
            }
            var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
            return function (c, e, f) {
                var g = '', h = [], l, k;
                e = e || 'mediumDate';
                e = b.DATETIME_FORMATS[e] || e;
                F(c) && (c = Kf.test(c) ? ba(c) : a(c));
                V(c) && (c = new Date(c));
                if (!qa(c))
                    return c;
                for (; e;)
                    (k = Lf.exec(e)) ? (h = Ya(h, k, 1), e = h.pop()) : (h.push(e), e = null);
                f && 'UTC' === f && (c = new Date(c.getTime()), c.setMinutes(c.getMinutes() + c.getTimezoneOffset()));
                s(h, function (a) {
                    l = Mf[a];
                    g += l ? l(c, b.DATETIME_FORMATS) : a.replace(/(^'|'$)/g, '').replace(/''/g, '\'');
                });
                return g;
            };
        }
        function Ff() {
            return function (b, a) {
                A(a) && (a = 2);
                return $a(b, a);
            };
        }
        function Gf() {
            return function (b, a) {
                V(b) && (b = b.toString());
                return D(b) || F(b) ? (a = Infinity === Math.abs(Number(a)) ? Number(a) : ba(a)) ? 0 < a ? b.slice(0, a) : b.slice(a) : F(b) ? '' : [] : b;
            };
        }
        function md(b) {
            return function (a, c, d) {
                function e(a, b) {
                    return b ? function (b, c) {
                        return a(c, b);
                    } : a;
                }
                function f(a) {
                    switch (typeof a) {
                    case 'number':
                    case 'boolean':
                    case 'string':
                        return !0;
                    default:
                        return !1;
                    }
                }
                function g(a) {
                    return null === a ? 'null' : 'function' === typeof a.valueOf && (a = a.valueOf(), f(a)) || 'function' === typeof a.toString && (a = a.toString(), f(a)) ? a : '';
                }
                function h(a, b) {
                    var c = typeof a, d = typeof b;
                    c === d && 'object' === c && (a = g(a), b = g(b));
                    return c === d ? ('string' === c && (a = a.toLowerCase(), b = b.toLowerCase()), a === b ? 0 : a < b ? -1 : 1) : c < d ? -1 : 1;
                }
                if (!Ta(a))
                    return a;
                c = D(c) ? c : [c];
                0 === c.length && (c = ['+']);
                c = c.map(function (a) {
                    var c = !1, d = a || pa;
                    if (F(a)) {
                        if ('+' == a.charAt(0) || '-' == a.charAt(0))
                            c = '-' == a.charAt(0), a = a.substring(1);
                        if ('' === a)
                            return e(h, c);
                        d = b(a);
                        if (d.constant) {
                            var f = d();
                            return e(function (a, b) {
                                return h(a[f], b[f]);
                            }, c);
                        }
                    }
                    return e(function (a, b) {
                        return h(d(a), d(b));
                    }, c);
                });
                return Za.call(a).sort(e(function (a, b) {
                    for (var d = 0; d < c.length; d++) {
                        var e = c[d](a, b);
                        if (0 !== e)
                            return e;
                    }
                    return 0;
                }, d));
            };
        }
        function Ja(b) {
            G(b) && (b = { link: b });
            b.restrict = b.restrict || 'AC';
            return da(b);
        }
        function rd(b, a, c, d, e) {
            var f = this, g = [], h = f.$$parentForm = b.parent().controller('form') || Jb;
            f.$error = {};
            f.$$success = {};
            f.$pending = t;
            f.$name = e(a.name || a.ngForm || '')(c);
            f.$dirty = !1;
            f.$pristine = !0;
            f.$valid = !0;
            f.$invalid = !1;
            f.$submitted = !1;
            h.$addControl(f);
            f.$rollbackViewValue = function () {
                s(g, function (a) {
                    a.$rollbackViewValue();
                });
            };
            f.$commitViewValue = function () {
                s(g, function (a) {
                    a.$commitViewValue();
                });
            };
            f.$addControl = function (a) {
                Ma(a.$name, 'input');
                g.push(a);
                a.$name && (f[a.$name] = a);
            };
            f.$$renameControl = function (a, b) {
                var c = a.$name;
                f[c] === a && delete f[c];
                f[b] = a;
                a.$name = b;
            };
            f.$removeControl = function (a) {
                a.$name && f[a.$name] === a && delete f[a.$name];
                s(f.$pending, function (b, c) {
                    f.$setValidity(c, null, a);
                });
                s(f.$error, function (b, c) {
                    f.$setValidity(c, null, a);
                });
                s(f.$$success, function (b, c) {
                    f.$setValidity(c, null, a);
                });
                Xa(g, a);
            };
            sd({
                ctrl: this,
                $element: b,
                set: function (a, b, c) {
                    var d = a[b];
                    d ? -1 === d.indexOf(c) && d.push(c) : a[b] = [c];
                },
                unset: function (a, b, c) {
                    var d = a[b];
                    d && (Xa(d, c), 0 === d.length && delete a[b]);
                },
                parentForm: h,
                $animate: d
            });
            f.$setDirty = function () {
                d.removeClass(b, Sa);
                d.addClass(b, Kb);
                f.$dirty = !0;
                f.$pristine = !1;
                h.$setDirty();
            };
            f.$setPristine = function () {
                d.setClass(b, Sa, Kb + ' ng-submitted');
                f.$dirty = !1;
                f.$pristine = !0;
                f.$submitted = !1;
                s(g, function (a) {
                    a.$setPristine();
                });
            };
            f.$setUntouched = function () {
                s(g, function (a) {
                    a.$setUntouched();
                });
            };
            f.$setSubmitted = function () {
                d.addClass(b, 'ng-submitted');
                f.$submitted = !0;
                h.$setSubmitted();
            };
        }
        function hc(b) {
            b.$formatters.push(function (a) {
                return b.$isEmpty(a) ? a : a.toString();
            });
        }
        function ib(b, a, c, d, e, f) {
            var g = Q(a[0].type);
            if (!e.android) {
                var h = !1;
                a.on('compositionstart', function (a) {
                    h = !0;
                });
                a.on('compositionend', function () {
                    h = !1;
                    l();
                });
            }
            var l = function (b) {
                k && (f.defer.cancel(k), k = null);
                if (!h) {
                    var e = a.val();
                    b = b && b.type;
                    'password' === g || c.ngTrim && 'false' === c.ngTrim || (e = U(e));
                    (d.$viewValue !== e || '' === e && d.$$hasNativeValidators) && d.$setViewValue(e, b);
                }
            };
            if (e.hasEvent('input'))
                a.on('input', l);
            else {
                var k, m = function (a, b, c) {
                        k || (k = f.defer(function () {
                            k = null;
                            b && b.value === c || l(a);
                        }));
                    };
                a.on('keydown', function (a) {
                    var b = a.keyCode;
                    91 === b || 15 < b && 19 > b || 37 <= b && 40 >= b || m(a, this, this.value);
                });
                if (e.hasEvent('paste'))
                    a.on('paste cut', m);
            }
            a.on('change', l);
            d.$render = function () {
                a.val(d.$isEmpty(d.$viewValue) ? '' : d.$viewValue);
            };
        }
        function Lb(b, a) {
            return function (c, d) {
                var e, f;
                if (qa(c))
                    return c;
                if (F(c)) {
                    '"' == c.charAt(0) && '"' == c.charAt(c.length - 1) && (c = c.substring(1, c.length - 1));
                    if (Nf.test(c))
                        return new Date(c);
                    b.lastIndex = 0;
                    if (e = b.exec(c))
                        return e.shift(), f = d ? {
                            yyyy: d.getFullYear(),
                            MM: d.getMonth() + 1,
                            dd: d.getDate(),
                            HH: d.getHours(),
                            mm: d.getMinutes(),
                            ss: d.getSeconds(),
                            sss: d.getMilliseconds() / 1000
                        } : {
                            yyyy: 1970,
                            MM: 1,
                            dd: 1,
                            HH: 0,
                            mm: 0,
                            ss: 0,
                            sss: 0
                        }, s(e, function (b, c) {
                            c < a.length && (f[a[c]] = +b);
                        }), new Date(f.yyyy, f.MM - 1, f.dd, f.HH, f.mm, f.ss || 0, 1000 * f.sss || 0);
                }
                return NaN;
            };
        }
        function jb(b, a, c, d) {
            return function (e, f, g, h, l, k, m) {
                function n(a) {
                    return a && !(a.getTime && a.getTime() !== a.getTime());
                }
                function q(a) {
                    return y(a) ? qa(a) ? a : c(a) : t;
                }
                td(e, f, g, h);
                ib(e, f, g, h, l, k);
                var u = h && h.$options && h.$options.timezone, r;
                h.$$parserName = b;
                h.$parsers.push(function (b) {
                    return h.$isEmpty(b) ? null : a.test(b) ? (b = c(b, r), 'UTC' === u && b.setMinutes(b.getMinutes() - b.getTimezoneOffset()), b) : t;
                });
                h.$formatters.push(function (a) {
                    if (a && !qa(a))
                        throw Mb('datefmt', a);
                    if (n(a)) {
                        if ((r = a) && 'UTC' === u) {
                            var b = 60000 * r.getTimezoneOffset();
                            r = new Date(r.getTime() + b);
                        }
                        return m('date')(a, d, u);
                    }
                    r = null;
                    return '';
                });
                if (y(g.min) || g.ngMin) {
                    var s;
                    h.$validators.min = function (a) {
                        return !n(a) || A(s) || c(a) >= s;
                    };
                    g.$observe('min', function (a) {
                        s = q(a);
                        h.$validate();
                    });
                }
                if (y(g.max) || g.ngMax) {
                    var p;
                    h.$validators.max = function (a) {
                        return !n(a) || A(p) || c(a) <= p;
                    };
                    g.$observe('max', function (a) {
                        p = q(a);
                        h.$validate();
                    });
                }
            };
        }
        function td(b, a, c, d) {
            (d.$$hasNativeValidators = I(a[0].validity)) && d.$parsers.push(function (b) {
                var c = a.prop('validity') || {};
                return c.badInput && !c.typeMismatch ? t : b;
            });
        }
        function ud(b, a, c, d, e) {
            if (y(d)) {
                b = b(d);
                if (!b.constant)
                    throw T('ngModel')('constexpr', c, d);
                return b(a);
            }
            return e;
        }
        function ic(b, a) {
            b = 'ngClass' + b;
            return [
                '$animate',
                function (c) {
                    function d(a, b) {
                        var c = [], d = 0;
                        a:
                            for (; d < a.length; d++) {
                                for (var e = a[d], m = 0; m < b.length; m++)
                                    if (e == b[m])
                                        continue a;
                                c.push(e);
                            }
                        return c;
                    }
                    function e(a) {
                        if (!D(a)) {
                            if (F(a))
                                return a.split(' ');
                            if (I(a)) {
                                var b = [];
                                s(a, function (a, c) {
                                    a && (b = b.concat(c.split(' ')));
                                });
                                return b;
                            }
                        }
                        return a;
                    }
                    return {
                        restrict: 'AC',
                        link: function (f, g, h) {
                            function l(a, b) {
                                var c = g.data('$classCounts') || {}, d = [];
                                s(a, function (a) {
                                    if (0 < b || c[a])
                                        c[a] = (c[a] || 0) + b, c[a] === +(0 < b) && d.push(a);
                                });
                                g.data('$classCounts', c);
                                return d.join(' ');
                            }
                            function k(b) {
                                if (!0 === a || f.$index % 2 === a) {
                                    var k = e(b || []);
                                    if (!m) {
                                        var u = l(k, 1);
                                        h.$addClass(u);
                                    } else if (!fa(b, m)) {
                                        var r = e(m), u = d(k, r), k = d(r, k), u = l(u, 1), k = l(k, -1);
                                        u && u.length && c.addClass(g, u);
                                        k && k.length && c.removeClass(g, k);
                                    }
                                }
                                m = ra(b);
                            }
                            var m;
                            f.$watch(h[b], k, !0);
                            h.$observe('class', function (a) {
                                k(f.$eval(h[b]));
                            });
                            'ngClass' !== b && f.$watch('$index', function (c, d) {
                                var g = c & 1;
                                if (g !== (d & 1)) {
                                    var k = e(f.$eval(h[b]));
                                    g === a ? (g = l(k, 1), h.$addClass(g)) : (g = l(k, -1), h.$removeClass(g));
                                }
                            });
                        }
                    };
                }
            ];
        }
        function sd(b) {
            function a(a, b) {
                b && !f[a] ? (k.addClass(e, a), f[a] = !0) : !b && f[a] && (k.removeClass(e, a), f[a] = !1);
            }
            function c(b, c) {
                b = b ? '-' + tc(b, '-') : '';
                a(kb + b, !0 === c);
                a(vd + b, !1 === c);
            }
            var d = b.ctrl, e = b.$element, f = {}, g = b.set, h = b.unset, l = b.parentForm, k = b.$animate;
            f[vd] = !(f[kb] = e.hasClass(kb));
            d.$setValidity = function (b, e, f) {
                e === t ? (d.$pending || (d.$pending = {}), g(d.$pending, b, f)) : (d.$pending && h(d.$pending, b, f), wd(d.$pending) && (d.$pending = t));
                Wa(e) ? e ? (h(d.$error, b, f), g(d.$$success, b, f)) : (g(d.$error, b, f), h(d.$$success, b, f)) : (h(d.$error, b, f), h(d.$$success, b, f));
                d.$pending ? (a(xd, !0), d.$valid = d.$invalid = t, c('', null)) : (a(xd, !1), d.$valid = wd(d.$error), d.$invalid = !d.$valid, c('', d.$valid));
                e = d.$pending && d.$pending[b] ? t : d.$error[b] ? !1 : d.$$success[b] ? !0 : null;
                c(b, e);
                l.$setValidity(b, e, d);
            };
        }
        function wd(b) {
            if (b)
                for (var a in b)
                    return !1;
            return !0;
        }
        var Of = /^\/(.+)\/([a-z]*)$/, Q = function (b) {
                return F(b) ? b.toLowerCase() : b;
            }, rc = Object.prototype.hasOwnProperty, ub = function (b) {
                return F(b) ? b.toUpperCase() : b;
            }, Ra, B, sa, Za = [].slice, rf = [].splice, Pf = [].push, Da = Object.prototype.toString, Ka = T('ng'), ga = M.angular || (M.angular = {}), bb, nb = 0;
        Ra = Y.documentMode;
        H.$inject = [];
        pa.$inject = [];
        var D = Array.isArray, U = function (b) {
                return F(b) ? b.trim() : b;
            }, gd = function (b) {
                return b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, '\\$1').replace(/\x08/g, '\\x08');
            }, ab = function () {
                if (y(ab.isActive_))
                    return ab.isActive_;
                var b = !(!Y.querySelector('[ng-csp]') && !Y.querySelector('[data-ng-csp]'));
                if (!b)
                    try {
                        new Function('');
                    } catch (a) {
                        b = !0;
                    }
                return ab.isActive_ = b;
            }, rb = [
                'ng-',
                'data-ng-',
                'ng:',
                'x-ng-'
            ], Md = /[A-Z]/g, uc = !1, Pb, oa = 1, pb = 3, Qd = {
                full: '1.3.11',
                major: 1,
                minor: 3,
                dot: 11,
                codeName: 'spiffy-manatee'
            };
        R.expando = 'ng339';
        var zb = R.cache = {}, hf = 1;
        R._data = function (b) {
            return this.cache[b[this.expando]] || {};
        };
        var cf = /([\:\-\_]+(.))/g, df = /^moz([A-Z])/, Qf = {
                mouseleave: 'mouseout',
                mouseenter: 'mouseover'
            }, Sb = T('jqLite'), gf = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, Rb = /<|&#?\w+;/, ef = /<([\w:]+)/, ff = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, ia = {
                option: [
                    1,
                    '<select multiple="multiple">',
                    '</select>'
                ],
                thead: [
                    1,
                    '<table>',
                    '</table>'
                ],
                col: [
                    2,
                    '<table><colgroup>',
                    '</colgroup></table>'
                ],
                tr: [
                    2,
                    '<table><tbody>',
                    '</tbody></table>'
                ],
                td: [
                    3,
                    '<table><tbody><tr>',
                    '</tr></tbody></table>'
                ],
                _default: [
                    0,
                    '',
                    ''
                ]
            };
        ia.optgroup = ia.option;
        ia.tbody = ia.tfoot = ia.colgroup = ia.caption = ia.thead;
        ia.th = ia.td;
        var La = R.prototype = {
                ready: function (b) {
                    function a() {
                        c || (c = !0, b());
                    }
                    var c = !1;
                    'complete' === Y.readyState ? setTimeout(a) : (this.on('DOMContentLoaded', a), R(M).on('load', a));
                },
                toString: function () {
                    var b = [];
                    s(this, function (a) {
                        b.push('' + a);
                    });
                    return '[' + b.join(', ') + ']';
                },
                eq: function (b) {
                    return 0 <= b ? B(this[b]) : B(this[this.length + b]);
                },
                length: 0,
                push: Pf,
                sort: [].sort,
                splice: [].splice
            }, Eb = {};
        s('multiple selected checked disabled readOnly required open'.split(' '), function (b) {
            Eb[Q(b)] = b;
        });
        var Mc = {};
        s('input select option textarea button form details'.split(' '), function (b) {
            Mc[b] = !0;
        });
        var Nc = {
            ngMinlength: 'minlength',
            ngMaxlength: 'maxlength',
            ngMin: 'min',
            ngMax: 'max',
            ngPattern: 'pattern'
        };
        s({
            data: Ub,
            removeData: xb
        }, function (b, a) {
            R[a] = b;
        });
        s({
            data: Ub,
            inheritedData: Db,
            scope: function (b) {
                return B.data(b, '$scope') || Db(b.parentNode || b, [
                    '$isolateScope',
                    '$scope'
                ]);
            },
            isolateScope: function (b) {
                return B.data(b, '$isolateScope') || B.data(b, '$isolateScopeNoTemplate');
            },
            controller: Ic,
            injector: function (b) {
                return Db(b, '$injector');
            },
            removeAttr: function (b, a) {
                b.removeAttribute(a);
            },
            hasClass: Ab,
            css: function (b, a, c) {
                a = cb(a);
                if (y(c))
                    b.style[a] = c;
                else
                    return b.style[a];
            },
            attr: function (b, a, c) {
                var d = Q(a);
                if (Eb[d])
                    if (y(c))
                        c ? (b[a] = !0, b.setAttribute(a, d)) : (b[a] = !1, b.removeAttribute(d));
                    else
                        return b[a] || (b.attributes.getNamedItem(a) || H).specified ? d : t;
                else if (y(c))
                    b.setAttribute(a, c);
                else if (b.getAttribute)
                    return b = b.getAttribute(a, 2), null === b ? t : b;
            },
            prop: function (b, a, c) {
                if (y(c))
                    b[a] = c;
                else
                    return b[a];
            },
            text: function () {
                function b(a, b) {
                    if (A(b)) {
                        var d = a.nodeType;
                        return d === oa || d === pb ? a.textContent : '';
                    }
                    a.textContent = b;
                }
                b.$dv = '';
                return b;
            }(),
            val: function (b, a) {
                if (A(a)) {
                    if (b.multiple && 'select' === ua(b)) {
                        var c = [];
                        s(b.options, function (a) {
                            a.selected && c.push(a.value || a.text);
                        });
                        return 0 === c.length ? null : c;
                    }
                    return b.value;
                }
                b.value = a;
            },
            html: function (b, a) {
                if (A(a))
                    return b.innerHTML;
                wb(b, !0);
                b.innerHTML = a;
            },
            empty: Jc
        }, function (b, a) {
            R.prototype[a] = function (a, d) {
                var e, f, g = this.length;
                if (b !== Jc && (2 == b.length && b !== Ab && b !== Ic ? a : d) === t) {
                    if (I(a)) {
                        for (e = 0; e < g; e++)
                            if (b === Ub)
                                b(this[e], a);
                            else
                                for (f in a)
                                    b(this[e], f, a[f]);
                        return this;
                    }
                    e = b.$dv;
                    g = e === t ? Math.min(g, 1) : g;
                    for (f = 0; f < g; f++) {
                        var h = b(this[f], a, d);
                        e = e ? e + h : h;
                    }
                    return e;
                }
                for (e = 0; e < g; e++)
                    b(this[e], a, d);
                return this;
            };
        });
        s({
            removeData: xb,
            on: function a(c, d, e, f) {
                if (y(f))
                    throw Sb('onargs');
                if (Ec(c)) {
                    var g = yb(c, !0);
                    f = g.events;
                    var h = g.handle;
                    h || (h = g.handle = lf(c, f));
                    for (var g = 0 <= d.indexOf(' ') ? d.split(' ') : [d], l = g.length; l--;) {
                        d = g[l];
                        var k = f[d];
                        k || (f[d] = [], 'mouseenter' === d || 'mouseleave' === d ? a(c, Qf[d], function (a) {
                            var c = a.relatedTarget;
                            c && (c === this || this.contains(c)) || h(a, d);
                        }) : '$destroy' !== d && c.addEventListener(d, h, !1), k = f[d]);
                        k.push(e);
                    }
                }
            },
            off: Hc,
            one: function (a, c, d) {
                a = B(a);
                a.on(c, function f() {
                    a.off(c, d);
                    a.off(c, f);
                });
                a.on(c, d);
            },
            replaceWith: function (a, c) {
                var d, e = a.parentNode;
                wb(a);
                s(new R(c), function (c) {
                    d ? e.insertBefore(c, d.nextSibling) : e.replaceChild(c, a);
                    d = c;
                });
            },
            children: function (a) {
                var c = [];
                s(a.childNodes, function (a) {
                    a.nodeType === oa && c.push(a);
                });
                return c;
            },
            contents: function (a) {
                return a.contentDocument || a.childNodes || [];
            },
            append: function (a, c) {
                var d = a.nodeType;
                if (d === oa || 11 === d) {
                    c = new R(c);
                    for (var d = 0, e = c.length; d < e; d++)
                        a.appendChild(c[d]);
                }
            },
            prepend: function (a, c) {
                if (a.nodeType === oa) {
                    var d = a.firstChild;
                    s(new R(c), function (c) {
                        a.insertBefore(c, d);
                    });
                }
            },
            wrap: function (a, c) {
                c = B(c).eq(0).clone()[0];
                var d = a.parentNode;
                d && d.replaceChild(c, a);
                c.appendChild(a);
            },
            remove: Kc,
            detach: function (a) {
                Kc(a, !0);
            },
            after: function (a, c) {
                var d = a, e = a.parentNode;
                c = new R(c);
                for (var f = 0, g = c.length; f < g; f++) {
                    var h = c[f];
                    e.insertBefore(h, d.nextSibling);
                    d = h;
                }
            },
            addClass: Cb,
            removeClass: Bb,
            toggleClass: function (a, c, d) {
                c && s(c.split(' '), function (c) {
                    var f = d;
                    A(f) && (f = !Ab(a, c));
                    (f ? Cb : Bb)(a, c);
                });
            },
            parent: function (a) {
                return (a = a.parentNode) && 11 !== a.nodeType ? a : null;
            },
            next: function (a) {
                return a.nextElementSibling;
            },
            find: function (a, c) {
                return a.getElementsByTagName ? a.getElementsByTagName(c) : [];
            },
            clone: Tb,
            triggerHandler: function (a, c, d) {
                var e, f, g = c.type || c, h = yb(a);
                if (h = (h = h && h.events) && h[g])
                    e = {
                        preventDefault: function () {
                            this.defaultPrevented = !0;
                        },
                        isDefaultPrevented: function () {
                            return !0 === this.defaultPrevented;
                        },
                        stopImmediatePropagation: function () {
                            this.immediatePropagationStopped = !0;
                        },
                        isImmediatePropagationStopped: function () {
                            return !0 === this.immediatePropagationStopped;
                        },
                        stopPropagation: H,
                        type: g,
                        target: a
                    }, c.type && (e = z(e, c)), c = ra(h), f = d ? [e].concat(d) : [e], s(c, function (c) {
                        e.isImmediatePropagationStopped() || c.apply(a, f);
                    });
            }
        }, function (a, c) {
            R.prototype[c] = function (c, e, f) {
                for (var g, h = 0, l = this.length; h < l; h++)
                    A(g) ? (g = a(this[h], c, e, f), y(g) && (g = B(g))) : Gc(g, a(this[h], c, e, f));
                return y(g) ? g : this;
            };
            R.prototype.bind = R.prototype.on;
            R.prototype.unbind = R.prototype.off;
        });
        db.prototype = {
            put: function (a, c) {
                this[Na(a, this.nextUid)] = c;
            },
            get: function (a) {
                return this[Na(a, this.nextUid)];
            },
            remove: function (a) {
                var c = this[a = Na(a, this.nextUid)];
                delete this[a];
                return c;
            }
        };
        var Pc = /^function\s*[^\(]*\(\s*([^\)]*)\)/m, nf = /,/, of = /^\s*(_?)(\S+?)\1\s*$/, Oc = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, Ga = T('$injector');
        Ob.$$annotate = Vb;
        var Rf = T('$animate'), Ce = [
                '$provide',
                function (a) {
                    this.$$selectors = {};
                    this.register = function (c, d) {
                        var e = c + '-animation';
                        if (c && '.' != c.charAt(0))
                            throw Rf('notcsel', c);
                        this.$$selectors[c.substr(1)] = e;
                        a.factory(e, d);
                    };
                    this.classNameFilter = function (a) {
                        1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null);
                        return this.$$classNameFilter;
                    };
                    this.$get = [
                        '$$q',
                        '$$asyncCallback',
                        '$rootScope',
                        function (a, d, e) {
                            function f(d) {
                                var f, g = a.defer();
                                g.promise.$$cancelFn = function () {
                                    f && f();
                                };
                                e.$$postDigest(function () {
                                    f = d(function () {
                                        g.resolve();
                                    });
                                });
                                return g.promise;
                            }
                            function g(a, c) {
                                var d = [], e = [], f = ha();
                                s((a.attr('class') || '').split(/\s+/), function (a) {
                                    f[a] = !0;
                                });
                                s(c, function (a, c) {
                                    var g = f[c];
                                    !1 === a && g ? e.push(c) : !0 !== a || g || d.push(c);
                                });
                                return 0 < d.length + e.length && [
                                    d.length ? d : null,
                                    e.length ? e : null
                                ];
                            }
                            function h(a, c, d) {
                                for (var e = 0, f = c.length; e < f; ++e)
                                    a[c[e]] = d;
                            }
                            function l() {
                                m || (m = a.defer(), d(function () {
                                    m.resolve();
                                    m = null;
                                }));
                                return m.promise;
                            }
                            function k(a, c) {
                                if (ga.isObject(c)) {
                                    var d = z(c.from || {}, c.to || {});
                                    a.css(d);
                                }
                            }
                            var m;
                            return {
                                animate: function (a, c, d) {
                                    k(a, {
                                        from: c,
                                        to: d
                                    });
                                    return l();
                                },
                                enter: function (a, c, d, e) {
                                    k(a, e);
                                    d ? d.after(a) : c.prepend(a);
                                    return l();
                                },
                                leave: function (a, c) {
                                    a.remove();
                                    return l();
                                },
                                move: function (a, c, d, e) {
                                    return this.enter(a, c, d, e);
                                },
                                addClass: function (a, c, d) {
                                    return this.setClass(a, c, [], d);
                                },
                                $$addClassImmediately: function (a, c, d) {
                                    a = B(a);
                                    c = F(c) ? c : D(c) ? c.join(' ') : '';
                                    s(a, function (a) {
                                        Cb(a, c);
                                    });
                                    k(a, d);
                                    return l();
                                },
                                removeClass: function (a, c, d) {
                                    return this.setClass(a, [], c, d);
                                },
                                $$removeClassImmediately: function (a, c, d) {
                                    a = B(a);
                                    c = F(c) ? c : D(c) ? c.join(' ') : '';
                                    s(a, function (a) {
                                        Bb(a, c);
                                    });
                                    k(a, d);
                                    return l();
                                },
                                setClass: function (a, c, d, e) {
                                    var k = this, l = !1;
                                    a = B(a);
                                    var m = a.data('$$animateClasses');
                                    m ? e && m.options && (m.options = ga.extend(m.options || {}, e)) : (m = {
                                        classes: {},
                                        options: e
                                    }, l = !0);
                                    e = m.classes;
                                    c = D(c) ? c : c.split(' ');
                                    d = D(d) ? d : d.split(' ');
                                    h(e, c, !0);
                                    h(e, d, !1);
                                    l && (m.promise = f(function (c) {
                                        var d = a.data('$$animateClasses');
                                        a.removeData('$$animateClasses');
                                        if (d) {
                                            var e = g(a, d.classes);
                                            e && k.$$setClassImmediately(a, e[0], e[1], d.options);
                                        }
                                        c();
                                    }), a.data('$$animateClasses', m));
                                    return m.promise;
                                },
                                $$setClassImmediately: function (a, c, d, e) {
                                    c && this.$$addClassImmediately(a, c);
                                    d && this.$$removeClassImmediately(a, d);
                                    k(a, e);
                                    return l();
                                },
                                enabled: H,
                                cancel: H
                            };
                        }
                    ];
                }
            ], ja = T('$compile');
        wc.$inject = [
            '$provide',
            '$$sanitizeUriProvider'
        ];
        var Rc = /^((?:x|data)[\:\-_])/i, Vc = 'application/json', Zb = { 'Content-Type': Vc + ';charset=utf-8' }, tf = /^\[|^\{(?!\{)/, uf = {
                '[': /]$/,
                '{': /}$/
            }, sf = /^\)\]\}',?\n/, $b = T('$interpolate'), Sf = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/, xf = {
                http: 80,
                https: 443,
                ftp: 21
            }, Fb = T('$location'), Tf = {
                $$html5: !1,
                $$replace: !1,
                absUrl: Gb('$$absUrl'),
                url: function (a) {
                    if (A(a))
                        return this.$$url;
                    var c = Sf.exec(a);
                    (c[1] || '' === a) && this.path(decodeURIComponent(c[1]));
                    (c[2] || c[1] || '' === a) && this.search(c[3] || '');
                    this.hash(c[5] || '');
                    return this;
                },
                protocol: Gb('$$protocol'),
                host: Gb('$$host'),
                port: Gb('$$port'),
                path: dd('$$path', function (a) {
                    a = null !== a ? a.toString() : '';
                    return '/' == a.charAt(0) ? a : '/' + a;
                }),
                search: function (a, c) {
                    switch (arguments.length) {
                    case 0:
                        return this.$$search;
                    case 1:
                        if (F(a) || V(a))
                            a = a.toString(), this.$$search = qc(a);
                        else if (I(a))
                            a = Ea(a, {}), s(a, function (c, e) {
                                null == c && delete a[e];
                            }), this.$$search = a;
                        else
                            throw Fb('isrcharg');
                        break;
                    default:
                        A(c) || null === c ? delete this.$$search[a] : this.$$search[a] = c;
                    }
                    this.$$compose();
                    return this;
                },
                hash: dd('$$hash', function (a) {
                    return null !== a ? a.toString() : '';
                }),
                replace: function () {
                    this.$$replace = !0;
                    return this;
                }
            };
        s([
            cd,
            dc,
            cc
        ], function (a) {
            a.prototype = Object.create(Tf);
            a.prototype.state = function (c) {
                if (!arguments.length)
                    return this.$$state;
                if (a !== cc || !this.$$html5)
                    throw Fb('nostate');
                this.$$state = A(c) ? null : c;
                return this;
            };
        });
        var la = T('$parse'), Uf = Function.prototype.call, Vf = Function.prototype.apply, Wf = Function.prototype.bind, lb = ha();
        s({
            'null': function () {
                return null;
            },
            'true': function () {
                return !0;
            },
            'false': function () {
                return !1;
            },
            undefined: function () {
            }
        }, function (a, c) {
            a.constant = a.literal = a.sharedGetter = !0;
            lb[c] = a;
        });
        lb['this'] = function (a) {
            return a;
        };
        lb['this'].sharedGetter = !0;
        var mb = z(ha(), {
                '+': function (a, c, d, e) {
                    d = d(a, c);
                    e = e(a, c);
                    return y(d) ? y(e) ? d + e : d : y(e) ? e : t;
                },
                '-': function (a, c, d, e) {
                    d = d(a, c);
                    e = e(a, c);
                    return (y(d) ? d : 0) - (y(e) ? e : 0);
                },
                '*': function (a, c, d, e) {
                    return d(a, c) * e(a, c);
                },
                '/': function (a, c, d, e) {
                    return d(a, c) / e(a, c);
                },
                '%': function (a, c, d, e) {
                    return d(a, c) % e(a, c);
                },
                '===': function (a, c, d, e) {
                    return d(a, c) === e(a, c);
                },
                '!==': function (a, c, d, e) {
                    return d(a, c) !== e(a, c);
                },
                '==': function (a, c, d, e) {
                    return d(a, c) == e(a, c);
                },
                '!=': function (a, c, d, e) {
                    return d(a, c) != e(a, c);
                },
                '<': function (a, c, d, e) {
                    return d(a, c) < e(a, c);
                },
                '>': function (a, c, d, e) {
                    return d(a, c) > e(a, c);
                },
                '<=': function (a, c, d, e) {
                    return d(a, c) <= e(a, c);
                },
                '>=': function (a, c, d, e) {
                    return d(a, c) >= e(a, c);
                },
                '&&': function (a, c, d, e) {
                    return d(a, c) && e(a, c);
                },
                '||': function (a, c, d, e) {
                    return d(a, c) || e(a, c);
                },
                '!': function (a, c, d) {
                    return !d(a, c);
                },
                '=': !0,
                '|': !0
            }), Xf = {
                n: '\n',
                f: '\f',
                r: '\r',
                t: '\t',
                v: '\x0B',
                '\'': '\'',
                '"': '"'
            }, gc = function (a) {
                this.options = a;
            };
        gc.prototype = {
            constructor: gc,
            lex: function (a) {
                this.text = a;
                this.index = 0;
                for (this.tokens = []; this.index < this.text.length;)
                    if (a = this.text.charAt(this.index), '"' === a || '\'' === a)
                        this.readString(a);
                    else if (this.isNumber(a) || '.' === a && this.isNumber(this.peek()))
                        this.readNumber();
                    else if (this.isIdent(a))
                        this.readIdent();
                    else if (this.is(a, '(){}[].,;:?'))
                        this.tokens.push({
                            index: this.index,
                            text: a
                        }), this.index++;
                    else if (this.isWhitespace(a))
                        this.index++;
                    else {
                        var c = a + this.peek(), d = c + this.peek(2), e = mb[c], f = mb[d];
                        mb[a] || e || f ? (a = f ? d : e ? c : a, this.tokens.push({
                            index: this.index,
                            text: a,
                            operator: !0
                        }), this.index += a.length) : this.throwError('Unexpected next character ', this.index, this.index + 1);
                    }
                return this.tokens;
            },
            is: function (a, c) {
                return -1 !== c.indexOf(a);
            },
            peek: function (a) {
                a = a || 1;
                return this.index + a < this.text.length ? this.text.charAt(this.index + a) : !1;
            },
            isNumber: function (a) {
                return '0' <= a && '9' >= a && 'string' === typeof a;
            },
            isWhitespace: function (a) {
                return ' ' === a || '\r' === a || '\t' === a || '\n' === a || '\x0B' === a || '\xA0' === a;
            },
            isIdent: function (a) {
                return 'a' <= a && 'z' >= a || 'A' <= a && 'Z' >= a || '_' === a || '$' === a;
            },
            isExpOperator: function (a) {
                return '-' === a || '+' === a || this.isNumber(a);
            },
            throwError: function (a, c, d) {
                d = d || this.index;
                c = y(c) ? 's ' + c + '-' + this.index + ' [' + this.text.substring(c, d) + ']' : ' ' + d;
                throw la('lexerr', a, c, this.text);
            },
            readNumber: function () {
                for (var a = '', c = this.index; this.index < this.text.length;) {
                    var d = Q(this.text.charAt(this.index));
                    if ('.' == d || this.isNumber(d))
                        a += d;
                    else {
                        var e = this.peek();
                        if ('e' == d && this.isExpOperator(e))
                            a += d;
                        else if (this.isExpOperator(d) && e && this.isNumber(e) && 'e' == a.charAt(a.length - 1))
                            a += d;
                        else if (!this.isExpOperator(d) || e && this.isNumber(e) || 'e' != a.charAt(a.length - 1))
                            break;
                        else
                            this.throwError('Invalid exponent');
                    }
                    this.index++;
                }
                this.tokens.push({
                    index: c,
                    text: a,
                    constant: !0,
                    value: Number(a)
                });
            },
            readIdent: function () {
                for (var a = this.index; this.index < this.text.length;) {
                    var c = this.text.charAt(this.index);
                    if (!this.isIdent(c) && !this.isNumber(c))
                        break;
                    this.index++;
                }
                this.tokens.push({
                    index: a,
                    text: this.text.slice(a, this.index),
                    identifier: !0
                });
            },
            readString: function (a) {
                var c = this.index;
                this.index++;
                for (var d = '', e = a, f = !1; this.index < this.text.length;) {
                    var g = this.text.charAt(this.index), e = e + g;
                    if (f)
                        'u' === g ? (f = this.text.substring(this.index + 1, this.index + 5), f.match(/[\da-f]{4}/i) || this.throwError('Invalid unicode escape [\\u' + f + ']'), this.index += 4, d += String.fromCharCode(parseInt(f, 16))) : d += Xf[g] || g, f = !1;
                    else if ('\\' === g)
                        f = !0;
                    else {
                        if (g === a) {
                            this.index++;
                            this.tokens.push({
                                index: c,
                                text: e,
                                constant: !0,
                                value: d
                            });
                            return;
                        }
                        d += g;
                    }
                    this.index++;
                }
                this.throwError('Unterminated quote', c);
            }
        };
        var hb = function (a, c, d) {
            this.lexer = a;
            this.$filter = c;
            this.options = d;
        };
        hb.ZERO = z(function () {
            return 0;
        }, {
            sharedGetter: !0,
            constant: !0
        });
        hb.prototype = {
            constructor: hb,
            parse: function (a) {
                this.text = a;
                this.tokens = this.lexer.lex(a);
                a = this.statements();
                0 !== this.tokens.length && this.throwError('is an unexpected token', this.tokens[0]);
                a.literal = !!a.literal;
                a.constant = !!a.constant;
                return a;
            },
            primary: function () {
                var a;
                this.expect('(') ? (a = this.filterChain(), this.consume(')')) : this.expect('[') ? a = this.arrayDeclaration() : this.expect('{') ? a = this.object() : this.peek().identifier && this.peek().text in lb ? a = lb[this.consume().text] : this.peek().identifier ? a = this.identifier() : this.peek().constant ? a = this.constant() : this.throwError('not a primary expression', this.peek());
                for (var c, d; c = this.expect('(', '[', '.');)
                    '(' === c.text ? (a = this.functionCall(a, d), d = null) : '[' === c.text ? (d = a, a = this.objectIndex(a)) : '.' === c.text ? (d = a, a = this.fieldAccess(a)) : this.throwError('IMPOSSIBLE');
                return a;
            },
            throwError: function (a, c) {
                throw la('syntax', c.text, a, c.index + 1, this.text, this.text.substring(c.index));
            },
            peekToken: function () {
                if (0 === this.tokens.length)
                    throw la('ueoe', this.text);
                return this.tokens[0];
            },
            peek: function (a, c, d, e) {
                return this.peekAhead(0, a, c, d, e);
            },
            peekAhead: function (a, c, d, e, f) {
                if (this.tokens.length > a) {
                    a = this.tokens[a];
                    var g = a.text;
                    if (g === c || g === d || g === e || g === f || !(c || d || e || f))
                        return a;
                }
                return !1;
            },
            expect: function (a, c, d, e) {
                return (a = this.peek(a, c, d, e)) ? (this.tokens.shift(), a) : !1;
            },
            consume: function (a) {
                if (0 === this.tokens.length)
                    throw la('ueoe', this.text);
                var c = this.expect(a);
                c || this.throwError('is unexpected, expecting [' + a + ']', this.peek());
                return c;
            },
            unaryFn: function (a, c) {
                var d = mb[a];
                return z(function (a, f) {
                    return d(a, f, c);
                }, {
                    constant: c.constant,
                    inputs: [c]
                });
            },
            binaryFn: function (a, c, d, e) {
                var f = mb[c];
                return z(function (c, e) {
                    return f(c, e, a, d);
                }, {
                    constant: a.constant && d.constant,
                    inputs: !e && [
                        a,
                        d
                    ]
                });
            },
            identifier: function () {
                for (var a = this.consume().text; this.peek('.') && this.peekAhead(1).identifier && !this.peekAhead(2, '(');)
                    a += this.consume().text + this.consume().text;
                return zf(a, this.options, this.text);
            },
            constant: function () {
                var a = this.consume().value;
                return z(function () {
                    return a;
                }, {
                    constant: !0,
                    literal: !0
                });
            },
            statements: function () {
                for (var a = [];;)
                    if (0 < this.tokens.length && !this.peek('}', ')', ';', ']') && a.push(this.filterChain()), !this.expect(';'))
                        return 1 === a.length ? a[0] : function (c, d) {
                            for (var e, f = 0, g = a.length; f < g; f++)
                                e = a[f](c, d);
                            return e;
                        };
            },
            filterChain: function () {
                for (var a = this.expression(); this.expect('|');)
                    a = this.filter(a);
                return a;
            },
            filter: function (a) {
                var c = this.$filter(this.consume().text), d, e;
                if (this.peek(':'))
                    for (d = [], e = []; this.expect(':');)
                        d.push(this.expression());
                var f = [a].concat(d || []);
                return z(function (f, h) {
                    var l = a(f, h);
                    if (e) {
                        e[0] = l;
                        for (l = d.length; l--;)
                            e[l + 1] = d[l](f, h);
                        return c.apply(t, e);
                    }
                    return c(l);
                }, {
                    constant: !c.$stateful && f.every(ec),
                    inputs: !c.$stateful && f
                });
            },
            expression: function () {
                return this.assignment();
            },
            assignment: function () {
                var a = this.ternary(), c, d;
                return (d = this.expect('=')) ? (a.assign || this.throwError('implies assignment but [' + this.text.substring(0, d.index) + '] can not be assigned to', d), c = this.ternary(), z(function (d, f) {
                    return a.assign(d, c(d, f), f);
                }, {
                    inputs: [
                        a,
                        c
                    ]
                })) : a;
            },
            ternary: function () {
                var a = this.logicalOR(), c;
                if (this.expect('?') && (c = this.assignment(), this.consume(':'))) {
                    var d = this.assignment();
                    return z(function (e, f) {
                        return a(e, f) ? c(e, f) : d(e, f);
                    }, { constant: a.constant && c.constant && d.constant });
                }
                return a;
            },
            logicalOR: function () {
                for (var a = this.logicalAND(), c; c = this.expect('||');)
                    a = this.binaryFn(a, c.text, this.logicalAND(), !0);
                return a;
            },
            logicalAND: function () {
                for (var a = this.equality(), c; c = this.expect('&&');)
                    a = this.binaryFn(a, c.text, this.equality(), !0);
                return a;
            },
            equality: function () {
                for (var a = this.relational(), c; c = this.expect('==', '!=', '===', '!==');)
                    a = this.binaryFn(a, c.text, this.relational());
                return a;
            },
            relational: function () {
                for (var a = this.additive(), c; c = this.expect('<', '>', '<=', '>=');)
                    a = this.binaryFn(a, c.text, this.additive());
                return a;
            },
            additive: function () {
                for (var a = this.multiplicative(), c; c = this.expect('+', '-');)
                    a = this.binaryFn(a, c.text, this.multiplicative());
                return a;
            },
            multiplicative: function () {
                for (var a = this.unary(), c; c = this.expect('*', '/', '%');)
                    a = this.binaryFn(a, c.text, this.unary());
                return a;
            },
            unary: function () {
                var a;
                return this.expect('+') ? this.primary() : (a = this.expect('-')) ? this.binaryFn(hb.ZERO, a.text, this.unary()) : (a = this.expect('!')) ? this.unaryFn(a.text, this.unary()) : this.primary();
            },
            fieldAccess: function (a) {
                var c = this.identifier();
                return z(function (d, e, f) {
                    d = f || a(d, e);
                    return null == d ? t : c(d);
                }, {
                    assign: function (d, e, f) {
                        var g = a(d, f);
                        g || a.assign(d, g = {}, f);
                        return c.assign(g, e);
                    }
                });
            },
            objectIndex: function (a) {
                var c = this.text, d = this.expression();
                this.consume(']');
                return z(function (e, f) {
                    var g = a(e, f), h = d(e, f);
                    ta(h, c);
                    return g ? ma(g[h], c) : t;
                }, {
                    assign: function (e, f, g) {
                        var h = ta(d(e, g), c), l = ma(a(e, g), c);
                        l || a.assign(e, l = {}, g);
                        return l[h] = f;
                    }
                });
            },
            functionCall: function (a, c) {
                var d = [];
                if (')' !== this.peekToken().text) {
                    do
                        d.push(this.expression());
                    while (this.expect(','));
                }
                this.consume(')');
                var e = this.text, f = d.length ? [] : null;
                return function (g, h) {
                    var l = c ? c(g, h) : y(c) ? t : g, k = a(g, h, l) || H;
                    if (f)
                        for (var m = d.length; m--;)
                            f[m] = ma(d[m](g, h), e);
                    ma(l, e);
                    if (k) {
                        if (k.constructor === k)
                            throw la('isecfn', e);
                        if (k === Uf || k === Vf || k === Wf)
                            throw la('isecff', e);
                    }
                    l = k.apply ? k.apply(l, f) : k(f[0], f[1], f[2], f[3], f[4]);
                    return ma(l, e);
                };
            },
            arrayDeclaration: function () {
                var a = [];
                if (']' !== this.peekToken().text) {
                    do {
                        if (this.peek(']'))
                            break;
                        a.push(this.expression());
                    } while (this.expect(','));
                }
                this.consume(']');
                return z(function (c, d) {
                    for (var e = [], f = 0, g = a.length; f < g; f++)
                        e.push(a[f](c, d));
                    return e;
                }, {
                    literal: !0,
                    constant: a.every(ec),
                    inputs: a
                });
            },
            object: function () {
                var a = [], c = [];
                if ('}' !== this.peekToken().text) {
                    do {
                        if (this.peek('}'))
                            break;
                        var d = this.consume();
                        d.constant ? a.push(d.value) : d.identifier ? a.push(d.text) : this.throwError('invalid key', d);
                        this.consume(':');
                        c.push(this.expression());
                    } while (this.expect(','));
                }
                this.consume('}');
                return z(function (d, f) {
                    for (var g = {}, h = 0, l = c.length; h < l; h++)
                        g[a[h]] = c[h](d, f);
                    return g;
                }, {
                    literal: !0,
                    constant: c.every(ec),
                    inputs: c
                });
            }
        };
        var Bf = ha(), Af = ha(), Cf = Object.prototype.valueOf, Ca = T('$sce'), na = {
                HTML: 'html',
                CSS: 'css',
                URL: 'url',
                RESOURCE_URL: 'resourceUrl',
                JS: 'js'
            }, ja = T('$compile'), Z = Y.createElement('a'), id = Ba(M.location.href);
        Dc.$inject = ['$provide'];
        jd.$inject = ['$locale'];
        ld.$inject = ['$locale'];
        var od = '.', Mf = {
                yyyy: $('FullYear', 4),
                yy: $('FullYear', 2, 0, !0),
                y: $('FullYear', 1),
                MMMM: Ib('Month'),
                MMM: Ib('Month', !0),
                MM: $('Month', 2, 1),
                M: $('Month', 1, 1),
                dd: $('Date', 2),
                d: $('Date', 1),
                HH: $('Hours', 2),
                H: $('Hours', 1),
                hh: $('Hours', 2, -12),
                h: $('Hours', 1, -12),
                mm: $('Minutes', 2),
                m: $('Minutes', 1),
                ss: $('Seconds', 2),
                s: $('Seconds', 1),
                sss: $('Milliseconds', 3),
                EEEE: Ib('Day'),
                EEE: Ib('Day', !0),
                a: function (a, c) {
                    return 12 > a.getHours() ? c.AMPMS[0] : c.AMPMS[1];
                },
                Z: function (a) {
                    a = -1 * a.getTimezoneOffset();
                    return a = (0 <= a ? '+' : '') + (Hb(Math[0 < a ? 'floor' : 'ceil'](a / 60), 2) + Hb(Math.abs(a % 60), 2));
                },
                ww: qd(2),
                w: qd(1)
            }, Lf = /((?:[^yMdHhmsaZEw']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|w+))(.*)/, Kf = /^\-?\d+$/;
        kd.$inject = ['$locale'];
        var Hf = da(Q), If = da(ub);
        md.$inject = ['$parse'];
        var Td = da({
                restrict: 'E',
                compile: function (a, c) {
                    if (!c.href && !c.xlinkHref && !c.name)
                        return function (a, c) {
                            if ('a' === c[0].nodeName.toLowerCase()) {
                                var f = '[object SVGAnimatedString]' === Da.call(c.prop('href')) ? 'xlink:href' : 'href';
                                c.on('click', function (a) {
                                    c.attr(f) || a.preventDefault();
                                });
                            }
                        };
                }
            }), vb = {};
        s(Eb, function (a, c) {
            if ('multiple' != a) {
                var d = ya('ng-' + c);
                vb[d] = function () {
                    return {
                        restrict: 'A',
                        priority: 100,
                        link: function (a, f, g) {
                            a.$watch(g[d], function (a) {
                                g.$set(c, !!a);
                            });
                        }
                    };
                };
            }
        });
        s(Nc, function (a, c) {
            vb[c] = function () {
                return {
                    priority: 100,
                    link: function (a, e, f) {
                        if ('ngPattern' === c && '/' == f.ngPattern.charAt(0) && (e = f.ngPattern.match(Of))) {
                            f.$set('ngPattern', new RegExp(e[1], e[2]));
                            return;
                        }
                        a.$watch(f[c], function (a) {
                            f.$set(c, a);
                        });
                    }
                };
            };
        });
        s([
            'src',
            'srcset',
            'href'
        ], function (a) {
            var c = ya('ng-' + a);
            vb[c] = function () {
                return {
                    priority: 99,
                    link: function (d, e, f) {
                        var g = a, h = a;
                        'href' === a && '[object SVGAnimatedString]' === Da.call(e.prop('href')) && (h = 'xlinkHref', f.$attr[h] = 'xlink:href', g = null);
                        f.$observe(c, function (c) {
                            c ? (f.$set(h, c), Ra && g && e.prop(g, f[h])) : 'href' === a && f.$set(h, null);
                        });
                    }
                };
            };
        });
        var Jb = {
            $addControl: H,
            $$renameControl: function (a, c) {
                a.$name = c;
            },
            $removeControl: H,
            $setValidity: H,
            $setDirty: H,
            $setPristine: H,
            $setSubmitted: H
        };
        rd.$inject = [
            '$element',
            '$attrs',
            '$scope',
            '$animate',
            '$interpolate'
        ];
        var yd = function (a) {
                return [
                    '$timeout',
                    function (c) {
                        return {
                            name: 'form',
                            restrict: a ? 'EAC' : 'E',
                            controller: rd,
                            compile: function (a) {
                                a.addClass(Sa).addClass(kb);
                                return {
                                    pre: function (a, d, g, h) {
                                        if (!('action' in g)) {
                                            var l = function (c) {
                                                a.$apply(function () {
                                                    h.$commitViewValue();
                                                    h.$setSubmitted();
                                                });
                                                c.preventDefault();
                                            };
                                            d[0].addEventListener('submit', l, !1);
                                            d.on('$destroy', function () {
                                                c(function () {
                                                    d[0].removeEventListener('submit', l, !1);
                                                }, 0, !1);
                                            });
                                        }
                                        var k = h.$$parentForm, m = h.$name;
                                        m && (gb(a, null, m, h, m), g.$observe(g.name ? 'name' : 'ngForm', function (c) {
                                            m !== c && (gb(a, null, m, t, m), m = c, gb(a, null, m, h, m), k.$$renameControl(h, m));
                                        }));
                                        d.on('$destroy', function () {
                                            k.$removeControl(h);
                                            m && gb(a, null, m, t, m);
                                            z(h, Jb);
                                        });
                                    }
                                };
                            }
                        };
                    }
                ];
            }, Ud = yd(), ge = yd(!0), Nf = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/, Yf = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/, Zf = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i, $f = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/, zd = /^(\d{4})-(\d{2})-(\d{2})$/, Ad = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, jc = /^(\d{4})-W(\d\d)$/, Bd = /^(\d{4})-(\d\d)$/, Cd = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, Dd = {
                text: function (a, c, d, e, f, g) {
                    ib(a, c, d, e, f, g);
                    hc(e);
                },
                date: jb('date', zd, Lb(zd, [
                    'yyyy',
                    'MM',
                    'dd'
                ]), 'yyyy-MM-dd'),
                'datetime-local': jb('datetimelocal', Ad, Lb(Ad, 'yyyy MM dd HH mm ss sss'.split(' ')), 'yyyy-MM-ddTHH:mm:ss.sss'),
                time: jb('time', Cd, Lb(Cd, [
                    'HH',
                    'mm',
                    'ss',
                    'sss'
                ]), 'HH:mm:ss.sss'),
                week: jb('week', jc, function (a, c) {
                    if (qa(a))
                        return a;
                    if (F(a)) {
                        jc.lastIndex = 0;
                        var d = jc.exec(a);
                        if (d) {
                            var e = +d[1], f = +d[2], g = d = 0, h = 0, l = 0, k = pd(e), f = 7 * (f - 1);
                            c && (d = c.getHours(), g = c.getMinutes(), h = c.getSeconds(), l = c.getMilliseconds());
                            return new Date(e, 0, k.getDate() + f, d, g, h, l);
                        }
                    }
                    return NaN;
                }, 'yyyy-Www'),
                month: jb('month', Bd, Lb(Bd, [
                    'yyyy',
                    'MM'
                ]), 'yyyy-MM'),
                number: function (a, c, d, e, f, g) {
                    td(a, c, d, e);
                    ib(a, c, d, e, f, g);
                    e.$$parserName = 'number';
                    e.$parsers.push(function (a) {
                        return e.$isEmpty(a) ? null : $f.test(a) ? parseFloat(a) : t;
                    });
                    e.$formatters.push(function (a) {
                        if (!e.$isEmpty(a)) {
                            if (!V(a))
                                throw Mb('numfmt', a);
                            a = a.toString();
                        }
                        return a;
                    });
                    if (d.min || d.ngMin) {
                        var h;
                        e.$validators.min = function (a) {
                            return e.$isEmpty(a) || A(h) || a >= h;
                        };
                        d.$observe('min', function (a) {
                            y(a) && !V(a) && (a = parseFloat(a, 10));
                            h = V(a) && !isNaN(a) ? a : t;
                            e.$validate();
                        });
                    }
                    if (d.max || d.ngMax) {
                        var l;
                        e.$validators.max = function (a) {
                            return e.$isEmpty(a) || A(l) || a <= l;
                        };
                        d.$observe('max', function (a) {
                            y(a) && !V(a) && (a = parseFloat(a, 10));
                            l = V(a) && !isNaN(a) ? a : t;
                            e.$validate();
                        });
                    }
                },
                url: function (a, c, d, e, f, g) {
                    ib(a, c, d, e, f, g);
                    hc(e);
                    e.$$parserName = 'url';
                    e.$validators.url = function (a, c) {
                        var d = a || c;
                        return e.$isEmpty(d) || Yf.test(d);
                    };
                },
                email: function (a, c, d, e, f, g) {
                    ib(a, c, d, e, f, g);
                    hc(e);
                    e.$$parserName = 'email';
                    e.$validators.email = function (a, c) {
                        var d = a || c;
                        return e.$isEmpty(d) || Zf.test(d);
                    };
                },
                radio: function (a, c, d, e) {
                    A(d.name) && c.attr('name', ++nb);
                    c.on('click', function (a) {
                        c[0].checked && e.$setViewValue(d.value, a && a.type);
                    });
                    e.$render = function () {
                        c[0].checked = d.value == e.$viewValue;
                    };
                    d.$observe('value', e.$render);
                },
                checkbox: function (a, c, d, e, f, g, h, l) {
                    var k = ud(l, a, 'ngTrueValue', d.ngTrueValue, !0), m = ud(l, a, 'ngFalseValue', d.ngFalseValue, !1);
                    c.on('click', function (a) {
                        e.$setViewValue(c[0].checked, a && a.type);
                    });
                    e.$render = function () {
                        c[0].checked = e.$viewValue;
                    };
                    e.$isEmpty = function (a) {
                        return !1 === a;
                    };
                    e.$formatters.push(function (a) {
                        return fa(a, k);
                    });
                    e.$parsers.push(function (a) {
                        return a ? k : m;
                    });
                },
                hidden: H,
                button: H,
                submit: H,
                reset: H,
                file: H
            }, xc = [
                '$browser',
                '$sniffer',
                '$filter',
                '$parse',
                function (a, c, d, e) {
                    return {
                        restrict: 'E',
                        require: ['?ngModel'],
                        link: {
                            pre: function (f, g, h, l) {
                                l[0] && (Dd[Q(h.type)] || Dd.text)(f, g, h, l[0], c, a, d, e);
                            }
                        }
                    };
                }
            ], ag = /^(true|false|\d+)$/, ye = function () {
                return {
                    restrict: 'A',
                    priority: 100,
                    compile: function (a, c) {
                        return ag.test(c.ngValue) ? function (a, c, f) {
                            f.$set('value', a.$eval(f.ngValue));
                        } : function (a, c, f) {
                            a.$watch(f.ngValue, function (a) {
                                f.$set('value', a);
                            });
                        };
                    }
                };
            }, Zd = [
                '$compile',
                function (a) {
                    return {
                        restrict: 'AC',
                        compile: function (c) {
                            a.$$addBindingClass(c);
                            return function (c, e, f) {
                                a.$$addBindingInfo(e, f.ngBind);
                                e = e[0];
                                c.$watch(f.ngBind, function (a) {
                                    e.textContent = a === t ? '' : a;
                                });
                            };
                        }
                    };
                }
            ], ae = [
                '$interpolate',
                '$compile',
                function (a, c) {
                    return {
                        compile: function (d) {
                            c.$$addBindingClass(d);
                            return function (d, f, g) {
                                d = a(f.attr(g.$attr.ngBindTemplate));
                                c.$$addBindingInfo(f, d.expressions);
                                f = f[0];
                                g.$observe('ngBindTemplate', function (a) {
                                    f.textContent = a === t ? '' : a;
                                });
                            };
                        }
                    };
                }
            ], $d = [
                '$sce',
                '$parse',
                '$compile',
                function (a, c, d) {
                    return {
                        restrict: 'A',
                        compile: function (e, f) {
                            var g = c(f.ngBindHtml), h = c(f.ngBindHtml, function (a) {
                                    return (a || '').toString();
                                });
                            d.$$addBindingClass(e);
                            return function (c, e, f) {
                                d.$$addBindingInfo(e, f.ngBindHtml);
                                c.$watch(h, function () {
                                    e.html(a.getTrustedHtml(g(c)) || '');
                                });
                            };
                        }
                    };
                }
            ], xe = da({
                restrict: 'A',
                require: 'ngModel',
                link: function (a, c, d, e) {
                    e.$viewChangeListeners.push(function () {
                        a.$eval(d.ngChange);
                    });
                }
            }), be = ic('', !0), de = ic('Odd', 0), ce = ic('Even', 1), ee = Ja({
                compile: function (a, c) {
                    c.$set('ngCloak', t);
                    a.removeClass('ng-cloak');
                }
            }), fe = [function () {
                    return {
                        restrict: 'A',
                        scope: !0,
                        controller: '@',
                        priority: 500
                    };
                }], Cc = {}, bg = {
                blur: !0,
                focus: !0
            };
        s('click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste'.split(' '), function (a) {
            var c = ya('ng-' + a);
            Cc[c] = [
                '$parse',
                '$rootScope',
                function (d, e) {
                    return {
                        restrict: 'A',
                        compile: function (f, g) {
                            var h = d(g[c], null, !0);
                            return function (c, d) {
                                d.on(a, function (d) {
                                    var f = function () {
                                        h(c, { $event: d });
                                    };
                                    bg[a] && e.$$phase ? c.$evalAsync(f) : c.$apply(f);
                                });
                            };
                        }
                    };
                }
            ];
        });
        var ie = [
                '$animate',
                function (a) {
                    return {
                        multiElement: !0,
                        transclude: 'element',
                        priority: 600,
                        terminal: !0,
                        restrict: 'A',
                        $$tlb: !0,
                        link: function (c, d, e, f, g) {
                            var h, l, k;
                            c.$watch(e.ngIf, function (c) {
                                c ? l || g(function (c, f) {
                                    l = f;
                                    c[c.length++] = Y.createComment(' end ngIf: ' + e.ngIf + ' ');
                                    h = { clone: c };
                                    a.enter(c, d.parent(), d);
                                }) : (k && (k.remove(), k = null), l && (l.$destroy(), l = null), h && (k = tb(h.clone), a.leave(k).then(function () {
                                    k = null;
                                }), h = null));
                            });
                        }
                    };
                }
            ], je = [
                '$templateRequest',
                '$anchorScroll',
                '$animate',
                '$sce',
                function (a, c, d, e) {
                    return {
                        restrict: 'ECA',
                        priority: 400,
                        terminal: !0,
                        transclude: 'element',
                        controller: ga.noop,
                        compile: function (f, g) {
                            var h = g.ngInclude || g.src, l = g.onload || '', k = g.autoscroll;
                            return function (f, g, q, s, r) {
                                var t = 0, p, v, w, L = function () {
                                        v && (v.remove(), v = null);
                                        p && (p.$destroy(), p = null);
                                        w && (d.leave(w).then(function () {
                                            v = null;
                                        }), v = w, w = null);
                                    };
                                f.$watch(e.parseAsResourceUrl(h), function (e) {
                                    var h = function () {
                                            !y(k) || k && !f.$eval(k) || c();
                                        }, q = ++t;
                                    e ? (a(e, !0).then(function (a) {
                                        if (q === t) {
                                            var c = f.$new();
                                            s.template = a;
                                            a = r(c, function (a) {
                                                L();
                                                d.enter(a, null, g).then(h);
                                            });
                                            p = c;
                                            w = a;
                                            p.$emit('$includeContentLoaded', e);
                                            f.$eval(l);
                                        }
                                    }, function () {
                                        q === t && (L(), f.$emit('$includeContentError', e));
                                    }), f.$emit('$includeContentRequested', e)) : (L(), s.template = null);
                                });
                            };
                        }
                    };
                }
            ], Ae = [
                '$compile',
                function (a) {
                    return {
                        restrict: 'ECA',
                        priority: -400,
                        require: 'ngInclude',
                        link: function (c, d, e, f) {
                            /SVG/.test(d[0].toString()) ? (d.empty(), a(Fc(f.template, Y).childNodes)(c, function (a) {
                                d.append(a);
                            }, { futureParentElement: d })) : (d.html(f.template), a(d.contents())(c));
                        }
                    };
                }
            ], ke = Ja({
                priority: 450,
                compile: function () {
                    return {
                        pre: function (a, c, d) {
                            a.$eval(d.ngInit);
                        }
                    };
                }
            }), we = function () {
                return {
                    restrict: 'A',
                    priority: 100,
                    require: 'ngModel',
                    link: function (a, c, d, e) {
                        var f = c.attr(d.$attr.ngList) || ', ', g = 'false' !== d.ngTrim, h = g ? U(f) : f;
                        e.$parsers.push(function (a) {
                            if (!A(a)) {
                                var c = [];
                                a && s(a.split(h), function (a) {
                                    a && c.push(g ? U(a) : a);
                                });
                                return c;
                            }
                        });
                        e.$formatters.push(function (a) {
                            return D(a) ? a.join(f) : t;
                        });
                        e.$isEmpty = function (a) {
                            return !a || !a.length;
                        };
                    }
                };
            }, kb = 'ng-valid', vd = 'ng-invalid', Sa = 'ng-pristine', Kb = 'ng-dirty', xd = 'ng-pending', Mb = new T('ngModel'), cg = [
                '$scope',
                '$exceptionHandler',
                '$attrs',
                '$element',
                '$parse',
                '$animate',
                '$timeout',
                '$rootScope',
                '$q',
                '$interpolate',
                function (a, c, d, e, f, g, h, l, k, m) {
                    this.$modelValue = this.$viewValue = Number.NaN;
                    this.$$rawModelValue = t;
                    this.$validators = {};
                    this.$asyncValidators = {};
                    this.$parsers = [];
                    this.$formatters = [];
                    this.$viewChangeListeners = [];
                    this.$untouched = !0;
                    this.$touched = !1;
                    this.$pristine = !0;
                    this.$dirty = !1;
                    this.$valid = !0;
                    this.$invalid = !1;
                    this.$error = {};
                    this.$$success = {};
                    this.$pending = t;
                    this.$name = m(d.name || '', !1)(a);
                    var n = f(d.ngModel), q = n.assign, u = n, r = q, O = null, p = this;
                    this.$$setOptions = function (a) {
                        if ((p.$options = a) && a.getterSetter) {
                            var c = f(d.ngModel + '()'), g = f(d.ngModel + '($$$p)');
                            u = function (a) {
                                var d = n(a);
                                G(d) && (d = c(a));
                                return d;
                            };
                            r = function (a, c) {
                                G(n(a)) ? g(a, { $$$p: p.$modelValue }) : q(a, p.$modelValue);
                            };
                        } else if (!n.assign)
                            throw Mb('nonassign', d.ngModel, va(e));
                    };
                    this.$render = H;
                    this.$isEmpty = function (a) {
                        return A(a) || '' === a || null === a || a !== a;
                    };
                    var v = e.inheritedData('$formController') || Jb, w = 0;
                    sd({
                        ctrl: this,
                        $element: e,
                        set: function (a, c) {
                            a[c] = !0;
                        },
                        unset: function (a, c) {
                            delete a[c];
                        },
                        parentForm: v,
                        $animate: g
                    });
                    this.$setPristine = function () {
                        p.$dirty = !1;
                        p.$pristine = !0;
                        g.removeClass(e, Kb);
                        g.addClass(e, Sa);
                    };
                    this.$setDirty = function () {
                        p.$dirty = !0;
                        p.$pristine = !1;
                        g.removeClass(e, Sa);
                        g.addClass(e, Kb);
                        v.$setDirty();
                    };
                    this.$setUntouched = function () {
                        p.$touched = !1;
                        p.$untouched = !0;
                        g.setClass(e, 'ng-untouched', 'ng-touched');
                    };
                    this.$setTouched = function () {
                        p.$touched = !0;
                        p.$untouched = !1;
                        g.setClass(e, 'ng-touched', 'ng-untouched');
                    };
                    this.$rollbackViewValue = function () {
                        h.cancel(O);
                        p.$viewValue = p.$$lastCommittedViewValue;
                        p.$render();
                    };
                    this.$validate = function () {
                        if (!V(p.$modelValue) || !isNaN(p.$modelValue)) {
                            var a = p.$$rawModelValue, c = p.$valid, d = p.$modelValue, e = p.$options && p.$options.allowInvalid;
                            p.$$runValidators(p.$error[p.$$parserName || 'parse'] ? !1 : t, a, p.$$lastCommittedViewValue, function (f) {
                                e || c === f || (p.$modelValue = f ? a : t, p.$modelValue !== d && p.$$writeModelToScope());
                            });
                        }
                    };
                    this.$$runValidators = function (a, c, d, e) {
                        function f() {
                            var a = !0;
                            s(p.$validators, function (e, f) {
                                var g = e(c, d);
                                a = a && g;
                                h(f, g);
                            });
                            return a ? !0 : (s(p.$asyncValidators, function (a, c) {
                                h(c, null);
                            }), !1);
                        }
                        function g() {
                            var a = [], e = !0;
                            s(p.$asyncValidators, function (f, g) {
                                var l = f(c, d);
                                if (!l || !G(l.then))
                                    throw Mb('$asyncValidators', l);
                                h(g, t);
                                a.push(l.then(function () {
                                    h(g, !0);
                                }, function (a) {
                                    e = !1;
                                    h(g, !1);
                                }));
                            });
                            a.length ? k.all(a).then(function () {
                                l(e);
                            }, H) : l(!0);
                        }
                        function h(a, c) {
                            m === w && p.$setValidity(a, c);
                        }
                        function l(a) {
                            m === w && e(a);
                        }
                        w++;
                        var m = w;
                        (function (a) {
                            var c = p.$$parserName || 'parse';
                            if (a === t)
                                h(c, null);
                            else if (h(c, a), !a)
                                return s(p.$validators, function (a, c) {
                                    h(c, null);
                                }), s(p.$asyncValidators, function (a, c) {
                                    h(c, null);
                                }), !1;
                            return !0;
                        }(a) ? f() ? g() : l(!1) : l(!1));
                    };
                    this.$commitViewValue = function () {
                        var a = p.$viewValue;
                        h.cancel(O);
                        if (p.$$lastCommittedViewValue !== a || '' === a && p.$$hasNativeValidators)
                            p.$$lastCommittedViewValue = a, p.$pristine && this.$setDirty(), this.$$parseAndValidate();
                    };
                    this.$$parseAndValidate = function () {
                        var c = p.$$lastCommittedViewValue, d = A(c) ? t : !0;
                        if (d)
                            for (var e = 0; e < p.$parsers.length; e++)
                                if (c = p.$parsers[e](c), A(c)) {
                                    d = !1;
                                    break;
                                }
                        V(p.$modelValue) && isNaN(p.$modelValue) && (p.$modelValue = u(a));
                        var f = p.$modelValue, g = p.$options && p.$options.allowInvalid;
                        p.$$rawModelValue = c;
                        g && (p.$modelValue = c, p.$modelValue !== f && p.$$writeModelToScope());
                        p.$$runValidators(d, c, p.$$lastCommittedViewValue, function (a) {
                            g || (p.$modelValue = a ? c : t, p.$modelValue !== f && p.$$writeModelToScope());
                        });
                    };
                    this.$$writeModelToScope = function () {
                        r(a, p.$modelValue);
                        s(p.$viewChangeListeners, function (a) {
                            try {
                                a();
                            } catch (d) {
                                c(d);
                            }
                        });
                    };
                    this.$setViewValue = function (a, c) {
                        p.$viewValue = a;
                        p.$options && !p.$options.updateOnDefault || p.$$debounceViewValueCommit(c);
                    };
                    this.$$debounceViewValueCommit = function (c) {
                        var d = 0, e = p.$options;
                        e && y(e.debounce) && (e = e.debounce, V(e) ? d = e : V(e[c]) ? d = e[c] : V(e['default']) && (d = e['default']));
                        h.cancel(O);
                        d ? O = h(function () {
                            p.$commitViewValue();
                        }, d) : l.$$phase ? p.$commitViewValue() : a.$apply(function () {
                            p.$commitViewValue();
                        });
                    };
                    a.$watch(function () {
                        var c = u(a);
                        if (c !== p.$modelValue) {
                            p.$modelValue = p.$$rawModelValue = c;
                            for (var d = p.$formatters, e = d.length, f = c; e--;)
                                f = d[e](f);
                            p.$viewValue !== f && (p.$viewValue = p.$$lastCommittedViewValue = f, p.$render(), p.$$runValidators(t, c, f, H));
                        }
                        return c;
                    });
                }
            ], ve = [
                '$rootScope',
                function (a) {
                    return {
                        restrict: 'A',
                        require: [
                            'ngModel',
                            '^?form',
                            '^?ngModelOptions'
                        ],
                        controller: cg,
                        priority: 1,
                        compile: function (c) {
                            c.addClass(Sa).addClass('ng-untouched').addClass(kb);
                            return {
                                pre: function (a, c, f, g) {
                                    var h = g[0], l = g[1] || Jb;
                                    h.$$setOptions(g[2] && g[2].$options);
                                    l.$addControl(h);
                                    f.$observe('name', function (a) {
                                        h.$name !== a && l.$$renameControl(h, a);
                                    });
                                    a.$on('$destroy', function () {
                                        l.$removeControl(h);
                                    });
                                },
                                post: function (c, e, f, g) {
                                    var h = g[0];
                                    if (h.$options && h.$options.updateOn)
                                        e.on(h.$options.updateOn, function (a) {
                                            h.$$debounceViewValueCommit(a && a.type);
                                        });
                                    e.on('blur', function (e) {
                                        h.$touched || (a.$$phase ? c.$evalAsync(h.$setTouched) : c.$apply(h.$setTouched));
                                    });
                                }
                            };
                        }
                    };
                }
            ], dg = /(\s+|^)default(\s+|$)/, ze = function () {
                return {
                    restrict: 'A',
                    controller: [
                        '$scope',
                        '$attrs',
                        function (a, c) {
                            var d = this;
                            this.$options = a.$eval(c.ngModelOptions);
                            this.$options.updateOn !== t ? (this.$options.updateOnDefault = !1, this.$options.updateOn = U(this.$options.updateOn.replace(dg, function () {
                                d.$options.updateOnDefault = !0;
                                return ' ';
                            }))) : this.$options.updateOnDefault = !0;
                        }
                    ]
                };
            }, le = Ja({
                terminal: !0,
                priority: 1000
            }), me = [
                '$locale',
                '$interpolate',
                function (a, c) {
                    var d = /{}/g, e = /^when(Minus)?(.+)$/;
                    return {
                        restrict: 'EA',
                        link: function (f, g, h) {
                            function l(a) {
                                g.text(a || '');
                            }
                            var k = h.count, m = h.$attr.when && g.attr(h.$attr.when), n = h.offset || 0, q = f.$eval(m) || {}, u = {}, m = c.startSymbol(), r = c.endSymbol(), t = m + k + '-' + n + r, p = ga.noop, v;
                            s(h, function (a, c) {
                                var d = e.exec(c);
                                d && (d = (d[1] ? '-' : '') + Q(d[2]), q[d] = g.attr(h.$attr[c]));
                            });
                            s(q, function (a, e) {
                                u[e] = c(a.replace(d, t));
                            });
                            f.$watch(k, function (c) {
                                c = parseFloat(c);
                                var d = isNaN(c);
                                d || c in q || (c = a.pluralCat(c - n));
                                c === v || d && isNaN(v) || (p(), p = f.$watch(u[c], l), v = c);
                            });
                        }
                    };
                }
            ], ne = [
                '$parse',
                '$animate',
                function (a, c) {
                    var d = T('ngRepeat'), e = function (a, c, d, e, k, m, n) {
                            a[d] = e;
                            k && (a[k] = m);
                            a.$index = c;
                            a.$first = 0 === c;
                            a.$last = c === n - 1;
                            a.$middle = !(a.$first || a.$last);
                            a.$odd = !(a.$even = 0 === (c & 1));
                        };
                    return {
                        restrict: 'A',
                        multiElement: !0,
                        transclude: 'element',
                        priority: 1000,
                        terminal: !0,
                        $$tlb: !0,
                        compile: function (f, g) {
                            var h = g.ngRepeat, l = Y.createComment(' end ngRepeat: ' + h + ' '), k = h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                            if (!k)
                                throw d('iexp', h);
                            var m = k[1], n = k[2], q = k[3], u = k[4], k = m.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);
                            if (!k)
                                throw d('iidexp', m);
                            var r = k[3] || k[1], y = k[2];
                            if (q && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(q) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(q)))
                                throw d('badident', q);
                            var p, v, w, A, z = { $id: Na };
                            u ? p = a(u) : (w = function (a, c) {
                                return Na(c);
                            }, A = function (a) {
                                return a;
                            });
                            return function (a, f, g, k, m) {
                                p && (v = function (c, d, e) {
                                    y && (z[y] = c);
                                    z[r] = d;
                                    z.$index = e;
                                    return p(a, z);
                                });
                                var u = ha();
                                a.$watchCollection(n, function (g) {
                                    var k, p, n = f[0], E, z = ha(), H, S, N, D, G, C, I;
                                    q && (a[q] = g);
                                    if (Ta(g))
                                        G = g, p = v || w;
                                    else {
                                        p = v || A;
                                        G = [];
                                        for (I in g)
                                            g.hasOwnProperty(I) && '$' != I.charAt(0) && G.push(I);
                                        G.sort();
                                    }
                                    H = G.length;
                                    I = Array(H);
                                    for (k = 0; k < H; k++)
                                        if (S = g === G ? k : G[k], N = g[S], D = p(S, N, k), u[D])
                                            C = u[D], delete u[D], z[D] = C, I[k] = C;
                                        else {
                                            if (z[D])
                                                throw s(I, function (a) {
                                                    a && a.scope && (u[a.id] = a);
                                                }), d('dupes', h, D, N);
                                            I[k] = {
                                                id: D,
                                                scope: t,
                                                clone: t
                                            };
                                            z[D] = !0;
                                        }
                                    for (E in u) {
                                        C = u[E];
                                        D = tb(C.clone);
                                        c.leave(D);
                                        if (D[0].parentNode)
                                            for (k = 0, p = D.length; k < p; k++)
                                                D[k].$$NG_REMOVED = !0;
                                        C.scope.$destroy();
                                    }
                                    for (k = 0; k < H; k++)
                                        if (S = g === G ? k : G[k], N = g[S], C = I[k], C.scope) {
                                            E = n;
                                            do
                                                E = E.nextSibling;
                                            while (E && E.$$NG_REMOVED);
                                            C.clone[0] != E && c.move(tb(C.clone), null, B(n));
                                            n = C.clone[C.clone.length - 1];
                                            e(C.scope, k, r, N, y, S, H);
                                        } else
                                            m(function (a, d) {
                                                C.scope = d;
                                                var f = l.cloneNode(!1);
                                                a[a.length++] = f;
                                                c.enter(a, null, B(n));
                                                n = f;
                                                C.clone = a;
                                                z[C.id] = C;
                                                e(C.scope, k, r, N, y, S, H);
                                            });
                                    u = z;
                                });
                            };
                        }
                    };
                }
            ], oe = [
                '$animate',
                function (a) {
                    return {
                        restrict: 'A',
                        multiElement: !0,
                        link: function (c, d, e) {
                            c.$watch(e.ngShow, function (c) {
                                a[c ? 'removeClass' : 'addClass'](d, 'ng-hide', { tempClasses: 'ng-hide-animate' });
                            });
                        }
                    };
                }
            ], he = [
                '$animate',
                function (a) {
                    return {
                        restrict: 'A',
                        multiElement: !0,
                        link: function (c, d, e) {
                            c.$watch(e.ngHide, function (c) {
                                a[c ? 'addClass' : 'removeClass'](d, 'ng-hide', { tempClasses: 'ng-hide-animate' });
                            });
                        }
                    };
                }
            ], pe = Ja(function (a, c, d) {
                a.$watchCollection(d.ngStyle, function (a, d) {
                    d && a !== d && s(d, function (a, d) {
                        c.css(d, '');
                    });
                    a && c.css(a);
                });
            }), qe = [
                '$animate',
                function (a) {
                    return {
                        restrict: 'EA',
                        require: 'ngSwitch',
                        controller: [
                            '$scope',
                            function () {
                                this.cases = {};
                            }
                        ],
                        link: function (c, d, e, f) {
                            var g = [], h = [], l = [], k = [], m = function (a, c) {
                                    return function () {
                                        a.splice(c, 1);
                                    };
                                };
                            c.$watch(e.ngSwitch || e.on, function (c) {
                                var d, e;
                                d = 0;
                                for (e = l.length; d < e; ++d)
                                    a.cancel(l[d]);
                                d = l.length = 0;
                                for (e = k.length; d < e; ++d) {
                                    var r = tb(h[d].clone);
                                    k[d].$destroy();
                                    (l[d] = a.leave(r)).then(m(l, d));
                                }
                                h.length = 0;
                                k.length = 0;
                                (g = f.cases['!' + c] || f.cases['?']) && s(g, function (c) {
                                    c.transclude(function (d, e) {
                                        k.push(e);
                                        var f = c.element;
                                        d[d.length++] = Y.createComment(' end ngSwitchWhen: ');
                                        h.push({ clone: d });
                                        a.enter(d, f.parent(), f);
                                    });
                                });
                            });
                        }
                    };
                }
            ], re = Ja({
                transclude: 'element',
                priority: 1200,
                require: '^ngSwitch',
                multiElement: !0,
                link: function (a, c, d, e, f) {
                    e.cases['!' + d.ngSwitchWhen] = e.cases['!' + d.ngSwitchWhen] || [];
                    e.cases['!' + d.ngSwitchWhen].push({
                        transclude: f,
                        element: c
                    });
                }
            }), se = Ja({
                transclude: 'element',
                priority: 1200,
                require: '^ngSwitch',
                multiElement: !0,
                link: function (a, c, d, e, f) {
                    e.cases['?'] = e.cases['?'] || [];
                    e.cases['?'].push({
                        transclude: f,
                        element: c
                    });
                }
            }), ue = Ja({
                restrict: 'EAC',
                link: function (a, c, d, e, f) {
                    if (!f)
                        throw T('ngTransclude')('orphan', va(c));
                    f(function (a) {
                        c.empty();
                        c.append(a);
                    });
                }
            }), Vd = [
                '$templateCache',
                function (a) {
                    return {
                        restrict: 'E',
                        terminal: !0,
                        compile: function (c, d) {
                            'text/ng-template' == d.type && a.put(d.id, c[0].text);
                        }
                    };
                }
            ], eg = T('ngOptions'), te = da({
                restrict: 'A',
                terminal: !0
            }), Wd = [
                '$compile',
                '$parse',
                function (a, c) {
                    var d = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/, e = { $setViewValue: H };
                    return {
                        restrict: 'E',
                        require: [
                            'select',
                            '?ngModel'
                        ],
                        controller: [
                            '$element',
                            '$scope',
                            '$attrs',
                            function (a, c, d) {
                                var l = this, k = {}, m = e, n;
                                l.databound = d.ngModel;
                                l.init = function (a, c, d) {
                                    m = a;
                                    n = d;
                                };
                                l.addOption = function (c, d) {
                                    Ma(c, '"option value"');
                                    k[c] = !0;
                                    m.$viewValue == c && (a.val(c), n.parent() && n.remove());
                                    d && d[0].hasAttribute('selected') && (d[0].selected = !0);
                                };
                                l.removeOption = function (a) {
                                    this.hasOption(a) && (delete k[a], m.$viewValue === a && this.renderUnknownOption(a));
                                };
                                l.renderUnknownOption = function (c) {
                                    c = '? ' + Na(c) + ' ?';
                                    n.val(c);
                                    a.prepend(n);
                                    a.val(c);
                                    n.prop('selected', !0);
                                };
                                l.hasOption = function (a) {
                                    return k.hasOwnProperty(a);
                                };
                                c.$on('$destroy', function () {
                                    l.renderUnknownOption = H;
                                });
                            }
                        ],
                        link: function (e, g, h, l) {
                            function k(a, c, d, e) {
                                d.$render = function () {
                                    var a = d.$viewValue;
                                    e.hasOption(a) ? (C.parent() && C.remove(), c.val(a), '' === a && p.prop('selected', !0)) : A(a) && p ? c.val('') : e.renderUnknownOption(a);
                                };
                                c.on('change', function () {
                                    a.$apply(function () {
                                        C.parent() && C.remove();
                                        d.$setViewValue(c.val());
                                    });
                                });
                            }
                            function m(a, c, d) {
                                var e;
                                d.$render = function () {
                                    var a = new db(d.$viewValue);
                                    s(c.find('option'), function (c) {
                                        c.selected = y(a.get(c.value));
                                    });
                                };
                                a.$watch(function () {
                                    fa(e, d.$viewValue) || (e = ra(d.$viewValue), d.$render());
                                });
                                c.on('change', function () {
                                    a.$apply(function () {
                                        var a = [];
                                        s(c.find('option'), function (c) {
                                            c.selected && a.push(c.value);
                                        });
                                        d.$setViewValue(a);
                                    });
                                });
                            }
                            function n(e, f, g) {
                                function h(a, c, d) {
                                    T[x] = d;
                                    G && (T[G] = c);
                                    return a(e, T);
                                }
                                function k(a) {
                                    var c;
                                    if (u)
                                        if (M && D(a)) {
                                            c = new db([]);
                                            for (var d = 0; d < a.length; d++)
                                                c.put(h(M, null, a[d]), !0);
                                        } else
                                            c = new db(a);
                                    else
                                        M && (a = h(M, null, a));
                                    return function (d, e) {
                                        var f;
                                        f = M ? M : B ? B : F;
                                        return u ? y(c.remove(h(f, d, e))) : a === h(f, d, e);
                                    };
                                }
                                function l() {
                                    v || (e.$$postDigest(p), v = !0);
                                }
                                function m(a, c, d) {
                                    a[c] = a[c] || 0;
                                    a[c] += d ? 1 : -1;
                                }
                                function p() {
                                    v = !1;
                                    var a = { '': [] }, c = [''], d, l, n, r, t;
                                    n = g.$viewValue;
                                    r = P(e) || [];
                                    var B = G ? Object.keys(r).sort() : r, x, A, D, F, N = {};
                                    t = k(n);
                                    var J = !1, U, V;
                                    Q = {};
                                    for (F = 0; D = B.length, F < D; F++) {
                                        x = F;
                                        if (G && (x = B[F], '$' === x.charAt(0)))
                                            continue;
                                        A = r[x];
                                        d = h(I, x, A) || '';
                                        (l = a[d]) || (l = a[d] = [], c.push(d));
                                        d = t(x, A);
                                        J = J || d;
                                        A = h(C, x, A);
                                        A = y(A) ? A : '';
                                        V = M ? M(e, T) : G ? B[F] : F;
                                        M && (Q[V] = x);
                                        l.push({
                                            id: V,
                                            label: A,
                                            selected: d
                                        });
                                    }
                                    u || (z || null === n ? a[''].unshift({
                                        id: '',
                                        label: '',
                                        selected: !J
                                    }) : J || a[''].unshift({
                                        id: '?',
                                        label: '',
                                        selected: !0
                                    }));
                                    x = 0;
                                    for (B = c.length; x < B; x++) {
                                        d = c[x];
                                        l = a[d];
                                        R.length <= x ? (n = {
                                            element: H.clone().attr('label', d),
                                            label: l.label
                                        }, r = [n], R.push(r), f.append(n.element)) : (r = R[x], n = r[0], n.label != d && n.element.attr('label', n.label = d));
                                        J = null;
                                        F = 0;
                                        for (D = l.length; F < D; F++)
                                            d = l[F], (t = r[F + 1]) ? (J = t.element, t.label !== d.label && (m(N, t.label, !1), m(N, d.label, !0), J.text(t.label = d.label), J.prop('label', t.label)), t.id !== d.id && J.val(t.id = d.id), J[0].selected !== d.selected && (J.prop('selected', t.selected = d.selected), Ra && J.prop('selected', t.selected))) : ('' === d.id && z ? U = z : (U = w.clone()).val(d.id).prop('selected', d.selected).attr('selected', d.selected).prop('label', d.label).text(d.label), r.push(t = {
                                                element: U,
                                                label: d.label,
                                                id: d.id,
                                                selected: d.selected
                                            }), m(N, d.label, !0), J ? J.after(U) : n.element.append(U), J = U);
                                        for (F++; r.length > F;)
                                            d = r.pop(), m(N, d.label, !1), d.element.remove();
                                    }
                                    for (; R.length > x;) {
                                        l = R.pop();
                                        for (F = 1; F < l.length; ++F)
                                            m(N, l[F].label, !1);
                                        l[0].element.remove();
                                    }
                                    s(N, function (a, c) {
                                        0 < a ? q.addOption(c) : 0 > a && q.removeOption(c);
                                    });
                                }
                                var n;
                                if (!(n = r.match(d)))
                                    throw eg('iexp', r, va(f));
                                var C = c(n[2] || n[1]), x = n[4] || n[6], A = / as /.test(n[0]) && n[1], B = A ? c(A) : null, G = n[5], I = c(n[3] || ''), F = c(n[2] ? n[1] : x), P = c(n[7]), M = n[8] ? c(n[8]) : null, Q = {}, R = [[{
                                                element: f,
                                                label: ''
                                            }]], T = {};
                                z && (a(z)(e), z.removeClass('ng-scope'), z.remove());
                                f.empty();
                                f.on('change', function () {
                                    e.$apply(function () {
                                        var a = P(e) || [], c;
                                        if (u)
                                            c = [], s(f.val(), function (d) {
                                                d = M ? Q[d] : d;
                                                c.push('?' === d ? t : '' === d ? null : h(B ? B : F, d, a[d]));
                                            });
                                        else {
                                            var d = M ? Q[f.val()] : f.val();
                                            c = '?' === d ? t : '' === d ? null : h(B ? B : F, d, a[d]);
                                        }
                                        g.$setViewValue(c);
                                        p();
                                    });
                                });
                                g.$render = p;
                                e.$watchCollection(P, l);
                                e.$watchCollection(function () {
                                    var a = P(e), c;
                                    if (a && D(a)) {
                                        c = Array(a.length);
                                        for (var d = 0, f = a.length; d < f; d++)
                                            c[d] = h(C, d, a[d]);
                                    } else if (a)
                                        for (d in c = {}, a)
                                            a.hasOwnProperty(d) && (c[d] = h(C, d, a[d]));
                                    return c;
                                }, l);
                                u && e.$watchCollection(function () {
                                    return g.$modelValue;
                                }, l);
                            }
                            if (l[1]) {
                                var q = l[0];
                                l = l[1];
                                var u = h.multiple, r = h.ngOptions, z = !1, p, v = !1, w = B(Y.createElement('option')), H = B(Y.createElement('optgroup')), C = w.clone();
                                h = 0;
                                for (var x = g.children(), G = x.length; h < G; h++)
                                    if ('' === x[h].value) {
                                        p = z = x.eq(h);
                                        break;
                                    }
                                q.init(l, z, C);
                                u && (l.$isEmpty = function (a) {
                                    return !a || 0 === a.length;
                                });
                                r ? n(e, g, l) : u ? m(e, g, l) : k(e, g, l, q);
                            }
                        }
                    };
                }
            ], Yd = [
                '$interpolate',
                function (a) {
                    var c = {
                        addOption: H,
                        removeOption: H
                    };
                    return {
                        restrict: 'E',
                        priority: 100,
                        compile: function (d, e) {
                            if (A(e.value)) {
                                var f = a(d.text(), !0);
                                f || e.$set('value', d.text());
                            }
                            return function (a, d, e) {
                                var k = d.parent(), m = k.data('$selectController') || k.parent().data('$selectController');
                                m && m.databound || (m = c);
                                f ? a.$watch(f, function (a, c) {
                                    e.$set('value', a);
                                    c !== a && m.removeOption(c);
                                    m.addOption(a, d);
                                }) : m.addOption(e.value, d);
                                d.on('$destroy', function () {
                                    m.removeOption(e.value);
                                });
                            };
                        }
                    };
                }
            ], Xd = da({
                restrict: 'E',
                terminal: !1
            }), zc = function () {
                return {
                    restrict: 'A',
                    require: '?ngModel',
                    link: function (a, c, d, e) {
                        e && (d.required = !0, e.$validators.required = function (a, c) {
                            return !d.required || !e.$isEmpty(c);
                        }, d.$observe('required', function () {
                            e.$validate();
                        }));
                    }
                };
            }, yc = function () {
                return {
                    restrict: 'A',
                    require: '?ngModel',
                    link: function (a, c, d, e) {
                        if (e) {
                            var f, g = d.ngPattern || d.pattern;
                            d.$observe('pattern', function (a) {
                                F(a) && 0 < a.length && (a = new RegExp('^' + a + '$'));
                                if (a && !a.test)
                                    throw T('ngPattern')('noregexp', g, a, va(c));
                                f = a || t;
                                e.$validate();
                            });
                            e.$validators.pattern = function (a) {
                                return e.$isEmpty(a) || A(f) || f.test(a);
                            };
                        }
                    }
                };
            }, Bc = function () {
                return {
                    restrict: 'A',
                    require: '?ngModel',
                    link: function (a, c, d, e) {
                        if (e) {
                            var f = -1;
                            d.$observe('maxlength', function (a) {
                                a = ba(a);
                                f = isNaN(a) ? -1 : a;
                                e.$validate();
                            });
                            e.$validators.maxlength = function (a, c) {
                                return 0 > f || e.$isEmpty(a) || c.length <= f;
                            };
                        }
                    }
                };
            }, Ac = function () {
                return {
                    restrict: 'A',
                    require: '?ngModel',
                    link: function (a, c, d, e) {
                        if (e) {
                            var f = 0;
                            d.$observe('minlength', function (a) {
                                f = ba(a) || 0;
                                e.$validate();
                            });
                            e.$validators.minlength = function (a, c) {
                                return e.$isEmpty(c) || c.length >= f;
                            };
                        }
                    }
                };
            };
        M.angular.bootstrap ? console.log('WARNING: Tried to load angular more than once.') : (Nd(), Pd(ga), B(Y).ready(function () {
            Jd(Y, sc);
        }));
    }(window, document));
    !window.angular.$$csp() && window.angular.element(document).find('head').prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>');
    return angular;
});
define('router', ['angular'], function () {
    if (typeof module !== 'undefined' && typeof exports !== 'undefined' && module.exports === exports) {
        module.exports = 'ui.router';
    }
    (function (window, angular, undefined) {
        'use strict';
        var isDefined = angular.isDefined, isFunction = angular.isFunction, isString = angular.isString, isObject = angular.isObject, isArray = angular.isArray, forEach = angular.forEach, extend = angular.extend, copy = angular.copy;
        function inherit(parent, extra) {
            return extend(new (extend(function () {
            }, { prototype: parent }))(), extra);
        }
        function merge(dst) {
            forEach(arguments, function (obj) {
                if (obj !== dst) {
                    forEach(obj, function (value, key) {
                        if (!dst.hasOwnProperty(key))
                            dst[key] = value;
                    });
                }
            });
            return dst;
        }
        function ancestors(first, second) {
            var path = [];
            for (var n in first.path) {
                if (first.path[n] !== second.path[n])
                    break;
                path.push(first.path[n]);
            }
            return path;
        }
        function objectKeys(object) {
            if (Object.keys) {
                return Object.keys(object);
            }
            var result = [];
            angular.forEach(object, function (val, key) {
                result.push(key);
            });
            return result;
        }
        function indexOf(array, value) {
            if (Array.prototype.indexOf) {
                return array.indexOf(value, Number(arguments[2]) || 0);
            }
            var len = array.length >>> 0, from = Number(arguments[2]) || 0;
            from = from < 0 ? Math.ceil(from) : Math.floor(from);
            if (from < 0)
                from += len;
            for (; from < len; from++) {
                if (from in array && array[from] === value)
                    return from;
            }
            return -1;
        }
        function inheritParams(currentParams, newParams, $current, $to) {
            var parents = ancestors($current, $to), parentParams, inherited = {}, inheritList = [];
            for (var i in parents) {
                if (!parents[i].params)
                    continue;
                parentParams = objectKeys(parents[i].params);
                if (!parentParams.length)
                    continue;
                for (var j in parentParams) {
                    if (indexOf(inheritList, parentParams[j]) >= 0)
                        continue;
                    inheritList.push(parentParams[j]);
                    inherited[parentParams[j]] = currentParams[parentParams[j]];
                }
            }
            return extend({}, inherited, newParams);
        }
        function equalForKeys(a, b, keys) {
            if (!keys) {
                keys = [];
                for (var n in a)
                    keys.push(n);
            }
            for (var i = 0; i < keys.length; i++) {
                var k = keys[i];
                if (a[k] != b[k])
                    return false;
            }
            return true;
        }
        function filterByKeys(keys, values) {
            var filtered = {};
            forEach(keys, function (name) {
                filtered[name] = values[name];
            });
            return filtered;
        }
        function indexBy(array, propName) {
            var result = {};
            forEach(array, function (item) {
                result[item[propName]] = item;
            });
            return result;
        }
        function pick(obj) {
            var copy = {};
            var keys = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
            forEach(keys, function (key) {
                if (key in obj)
                    copy[key] = obj[key];
            });
            return copy;
        }
        function omit(obj) {
            var copy = {};
            var keys = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
            for (var key in obj) {
                if (indexOf(keys, key) == -1)
                    copy[key] = obj[key];
            }
            return copy;
        }
        function pluck(collection, key) {
            var result = isArray(collection) ? [] : {};
            forEach(collection, function (val, i) {
                result[i] = isFunction(key) ? key(val) : val[key];
            });
            return result;
        }
        function filter(collection, callback) {
            var array = isArray(collection);
            var result = array ? [] : {};
            forEach(collection, function (val, i) {
                if (callback(val, i)) {
                    result[array ? result.length : i] = val;
                }
            });
            return result;
        }
        function map(collection, callback) {
            var result = isArray(collection) ? [] : {};
            forEach(collection, function (val, i) {
                result[i] = callback(val, i);
            });
            return result;
        }
        angular.module('ui.router.util', ['ng']);
        angular.module('ui.router.router', ['ui.router.util']);
        angular.module('ui.router.state', [
            'ui.router.router',
            'ui.router.util'
        ]);
        angular.module('ui.router', ['ui.router.state']);
        angular.module('ui.router.compat', ['ui.router']);
        $Resolve.$inject = [
            '$q',
            '$injector'
        ];
        function $Resolve($q, $injector) {
            var VISIT_IN_PROGRESS = 1, VISIT_DONE = 2, NOTHING = {}, NO_DEPENDENCIES = [], NO_LOCALS = NOTHING, NO_PARENT = extend($q.when(NOTHING), {
                    $$promises: NOTHING,
                    $$values: NOTHING
                });
            this.study = function (invocables) {
                if (!isObject(invocables))
                    throw new Error('\'invocables\' must be an object');
                var invocableKeys = objectKeys(invocables || {});
                var plan = [], cycle = [], visited = {};
                function visit(value, key) {
                    if (visited[key] === VISIT_DONE)
                        return;
                    cycle.push(key);
                    if (visited[key] === VISIT_IN_PROGRESS) {
                        cycle.splice(0, indexOf(cycle, key));
                        throw new Error('Cyclic dependency: ' + cycle.join(' -> '));
                    }
                    visited[key] = VISIT_IN_PROGRESS;
                    if (isString(value)) {
                        plan.push(key, [function () {
                                return $injector.get(value);
                            }], NO_DEPENDENCIES);
                    } else {
                        var params = $injector.annotate(value);
                        forEach(params, function (param) {
                            if (param !== key && invocables.hasOwnProperty(param))
                                visit(invocables[param], param);
                        });
                        plan.push(key, value, params);
                    }
                    cycle.pop();
                    visited[key] = VISIT_DONE;
                }
                forEach(invocables, visit);
                invocables = cycle = visited = null;
                function isResolve(value) {
                    return isObject(value) && value.then && value.$$promises;
                }
                return function (locals, parent, self) {
                    if (isResolve(locals) && self === undefined) {
                        self = parent;
                        parent = locals;
                        locals = null;
                    }
                    if (!locals)
                        locals = NO_LOCALS;
                    else if (!isObject(locals)) {
                        throw new Error('\'locals\' must be an object');
                    }
                    if (!parent)
                        parent = NO_PARENT;
                    else if (!isResolve(parent)) {
                        throw new Error('\'parent\' must be a promise returned by $resolve.resolve()');
                    }
                    var resolution = $q.defer(), result = resolution.promise, promises = result.$$promises = {}, values = extend({}, locals), wait = 1 + plan.length / 3, merged = false;
                    function done() {
                        if (!--wait) {
                            if (!merged)
                                merge(values, parent.$$values);
                            result.$$values = values;
                            result.$$promises = result.$$promises || true;
                            delete result.$$inheritedValues;
                            resolution.resolve(values);
                        }
                    }
                    function fail(reason) {
                        result.$$failure = reason;
                        resolution.reject(reason);
                    }
                    if (isDefined(parent.$$failure)) {
                        fail(parent.$$failure);
                        return result;
                    }
                    if (parent.$$inheritedValues) {
                        merge(values, omit(parent.$$inheritedValues, invocableKeys));
                    }
                    extend(promises, parent.$$promises);
                    if (parent.$$values) {
                        merged = merge(values, omit(parent.$$values, invocableKeys));
                        result.$$inheritedValues = omit(parent.$$values, invocableKeys);
                        done();
                    } else {
                        if (parent.$$inheritedValues) {
                            result.$$inheritedValues = omit(parent.$$inheritedValues, invocableKeys);
                        }
                        parent.then(done, fail);
                    }
                    for (var i = 0, ii = plan.length; i < ii; i += 3) {
                        if (locals.hasOwnProperty(plan[i]))
                            done();
                        else
                            invoke(plan[i], plan[i + 1], plan[i + 2]);
                    }
                    function invoke(key, invocable, params) {
                        var invocation = $q.defer(), waitParams = 0;
                        function onfailure(reason) {
                            invocation.reject(reason);
                            fail(reason);
                        }
                        forEach(params, function (dep) {
                            if (promises.hasOwnProperty(dep) && !locals.hasOwnProperty(dep)) {
                                waitParams++;
                                promises[dep].then(function (result) {
                                    values[dep] = result;
                                    if (!--waitParams)
                                        proceed();
                                }, onfailure);
                            }
                        });
                        if (!waitParams)
                            proceed();
                        function proceed() {
                            if (isDefined(result.$$failure))
                                return;
                            try {
                                invocation.resolve($injector.invoke(invocable, self, values));
                                invocation.promise.then(function (result) {
                                    values[key] = result;
                                    done();
                                }, onfailure);
                            } catch (e) {
                                onfailure(e);
                            }
                        }
                        promises[key] = invocation.promise;
                    }
                    return result;
                };
            };
            this.resolve = function (invocables, locals, parent, self) {
                return this.study(invocables)(locals, parent, self);
            };
        }
        angular.module('ui.router.util').service('$resolve', $Resolve);
        $TemplateFactory.$inject = [
            '$http',
            '$templateCache',
            '$injector'
        ];
        function $TemplateFactory($http, $templateCache, $injector) {
            this.fromConfig = function (config, params, locals) {
                return isDefined(config.template) ? this.fromString(config.template, params) : isDefined(config.templateUrl) ? this.fromUrl(config.templateUrl, params) : isDefined(config.templateProvider) ? this.fromProvider(config.templateProvider, params, locals) : null;
            };
            this.fromString = function (template, params) {
                return isFunction(template) ? template(params) : template;
            };
            this.fromUrl = function (url, params) {
                if (isFunction(url))
                    url = url(params);
                if (url == null)
                    return null;
                else
                    return $http.get(url, {
                        cache: $templateCache,
                        headers: { Accept: 'text/html' }
                    }).then(function (response) {
                        return response.data;
                    });
            };
            this.fromProvider = function (provider, params, locals) {
                return $injector.invoke(provider, null, locals || { params: params });
            };
        }
        angular.module('ui.router.util').service('$templateFactory', $TemplateFactory);
        var $$UMFP;
        function UrlMatcher(pattern, config, parentMatcher) {
            config = extend({ params: {} }, isObject(config) ? config : {});
            var placeholder = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g, searchPlaceholder = /([:]?)([\w\[\]-]+)|\{([\w\[\]-]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g, compiled = '^', last = 0, m, segments = this.segments = [], parentParams = parentMatcher ? parentMatcher.params : {}, params = this.params = parentMatcher ? parentMatcher.params.$$new() : new $$UMFP.ParamSet(), paramNames = [];
            function addParameter(id, type, config, location) {
                paramNames.push(id);
                if (parentParams[id])
                    return parentParams[id];
                if (!/^\w+(-+\w+)*(?:\[\])?$/.test(id))
                    throw new Error('Invalid parameter name \'' + id + '\' in pattern \'' + pattern + '\'');
                if (params[id])
                    throw new Error('Duplicate parameter name \'' + id + '\' in pattern \'' + pattern + '\'');
                params[id] = new $$UMFP.Param(id, type, config, location);
                return params[id];
            }
            function quoteRegExp(string, pattern, squash) {
                var surroundPattern = [
                        '',
                        ''
                    ], result = string.replace(/[\\\[\]\^$*+?.()|{}]/g, '\\$&');
                if (!pattern)
                    return result;
                switch (squash) {
                case false:
                    surroundPattern = [
                        '(',
                        ')'
                    ];
                    break;
                case true:
                    surroundPattern = [
                        '?(',
                        ')?'
                    ];
                    break;
                default:
                    surroundPattern = [
                        '(' + squash + '|',
                        ')?'
                    ];
                    break;
                }
                return result + surroundPattern[0] + pattern + surroundPattern[1];
            }
            this.source = pattern;
            function matchDetails(m, isSearch) {
                var id, regexp, segment, type, cfg, arrayMode;
                id = m[2] || m[3];
                cfg = config.params[id];
                segment = pattern.substring(last, m.index);
                regexp = isSearch ? m[4] : m[4] || (m[1] == '*' ? '.*' : null);
                type = $$UMFP.type(regexp || 'string') || inherit($$UMFP.type('string'), { pattern: new RegExp(regexp) });
                return {
                    id: id,
                    regexp: regexp,
                    segment: segment,
                    type: type,
                    cfg: cfg
                };
            }
            var p, param, segment;
            while (m = placeholder.exec(pattern)) {
                p = matchDetails(m, false);
                if (p.segment.indexOf('?') >= 0)
                    break;
                param = addParameter(p.id, p.type, p.cfg, 'path');
                compiled += quoteRegExp(p.segment, param.type.pattern.source, param.squash);
                segments.push(p.segment);
                last = placeholder.lastIndex;
            }
            segment = pattern.substring(last);
            var i = segment.indexOf('?');
            if (i >= 0) {
                var search = this.sourceSearch = segment.substring(i);
                segment = segment.substring(0, i);
                this.sourcePath = pattern.substring(0, last + i);
                if (search.length > 0) {
                    last = 0;
                    while (m = searchPlaceholder.exec(search)) {
                        p = matchDetails(m, true);
                        param = addParameter(p.id, p.type, p.cfg, 'search');
                        last = placeholder.lastIndex;
                    }
                }
            } else {
                this.sourcePath = pattern;
                this.sourceSearch = '';
            }
            compiled += quoteRegExp(segment) + (config.strict === false ? '/?' : '') + '$';
            segments.push(segment);
            this.regexp = new RegExp(compiled, config.caseInsensitive ? 'i' : undefined);
            this.prefix = segments[0];
            this.$$paramNames = paramNames;
        }
        UrlMatcher.prototype.concat = function (pattern, config) {
            var defaultConfig = {
                caseInsensitive: $$UMFP.caseInsensitive(),
                strict: $$UMFP.strictMode(),
                squash: $$UMFP.defaultSquashPolicy()
            };
            return new UrlMatcher(this.sourcePath + pattern + this.sourceSearch, extend(defaultConfig, config), this);
        };
        UrlMatcher.prototype.toString = function () {
            return this.source;
        };
        UrlMatcher.prototype.exec = function (path, searchParams) {
            var m = this.regexp.exec(path);
            if (!m)
                return null;
            searchParams = searchParams || {};
            var paramNames = this.parameters(), nTotal = paramNames.length, nPath = this.segments.length - 1, values = {}, i, j, cfg, paramName;
            if (nPath !== m.length - 1)
                throw new Error('Unbalanced capture group in route \'' + this.source + '\'');
            function decodePathArray(string) {
                function reverseString(str) {
                    return str.split('').reverse().join('');
                }
                function unquoteDashes(str) {
                    return str.replace(/\\-/, '-');
                }
                var split = reverseString(string).split(/-(?!\\)/);
                var allReversed = map(split, reverseString);
                return map(allReversed, unquoteDashes).reverse();
            }
            for (i = 0; i < nPath; i++) {
                paramName = paramNames[i];
                var param = this.params[paramName];
                var paramVal = m[i + 1];
                for (j = 0; j < param.replace; j++) {
                    if (param.replace[j].from === paramVal)
                        paramVal = param.replace[j].to;
                }
                if (paramVal && param.array === true)
                    paramVal = decodePathArray(paramVal);
                values[paramName] = param.value(paramVal);
            }
            for (; i < nTotal; i++) {
                paramName = paramNames[i];
                values[paramName] = this.params[paramName].value(searchParams[paramName]);
            }
            return values;
        };
        UrlMatcher.prototype.parameters = function (param) {
            if (!isDefined(param))
                return this.$$paramNames;
            return this.params[param] || null;
        };
        UrlMatcher.prototype.validates = function (params) {
            return this.params.$$validates(params);
        };
        UrlMatcher.prototype.format = function (values) {
            values = values || {};
            var segments = this.segments, params = this.parameters(), paramset = this.params;
            if (!this.validates(values))
                return null;
            var i, search = false, nPath = segments.length - 1, nTotal = params.length, result = segments[0];
            function encodeDashes(str) {
                return encodeURIComponent(str).replace(/-/g, function (c) {
                    return '%5C%' + c.charCodeAt(0).toString(16).toUpperCase();
                });
            }
            for (i = 0; i < nTotal; i++) {
                var isPathParam = i < nPath;
                var name = params[i], param = paramset[name], value = param.value(values[name]);
                var isDefaultValue = param.isOptional && param.type.equals(param.value(), value);
                var squash = isDefaultValue ? param.squash : false;
                var encoded = param.type.encode(value);
                if (isPathParam) {
                    var nextSegment = segments[i + 1];
                    if (squash === false) {
                        if (encoded != null) {
                            if (isArray(encoded)) {
                                result += map(encoded, encodeDashes).join('-');
                            } else {
                                result += encodeURIComponent(encoded);
                            }
                        }
                        result += nextSegment;
                    } else if (squash === true) {
                        var capture = result.match(/\/$/) ? /\/?(.*)/ : /(.*)/;
                        result += nextSegment.match(capture)[1];
                    } else if (isString(squash)) {
                        result += squash + nextSegment;
                    }
                } else {
                    if (encoded == null || isDefaultValue && squash !== false)
                        continue;
                    if (!isArray(encoded))
                        encoded = [encoded];
                    encoded = map(encoded, encodeURIComponent).join('&' + name + '=');
                    result += (search ? '&' : '?') + (name + '=' + encoded);
                    search = true;
                }
            }
            return result;
        };
        function Type(config) {
            extend(this, config);
        }
        Type.prototype.is = function (val, key) {
            return true;
        };
        Type.prototype.encode = function (val, key) {
            return val;
        };
        Type.prototype.decode = function (val, key) {
            return val;
        };
        Type.prototype.equals = function (a, b) {
            return a == b;
        };
        Type.prototype.$subPattern = function () {
            var sub = this.pattern.toString();
            return sub.substr(1, sub.length - 2);
        };
        Type.prototype.pattern = /.*/;
        Type.prototype.toString = function () {
            return '{Type:' + this.name + '}';
        };
        Type.prototype.$asArray = function (mode, isSearch) {
            if (!mode)
                return this;
            if (mode === 'auto' && !isSearch)
                throw new Error('\'auto\' array mode is for query parameters only');
            return new ArrayType(this, mode);
            function ArrayType(type, mode) {
                function bindTo(type, callbackName) {
                    return function () {
                        return type[callbackName].apply(type, arguments);
                    };
                }
                function arrayWrap(val) {
                    return isArray(val) ? val : isDefined(val) ? [val] : [];
                }
                function arrayUnwrap(val) {
                    switch (val.length) {
                    case 0:
                        return undefined;
                    case 1:
                        return mode === 'auto' ? val[0] : val;
                    default:
                        return val;
                    }
                }
                function falsey(val) {
                    return !val;
                }
                function arrayHandler(callback, allTruthyMode) {
                    return function handleArray(val) {
                        val = arrayWrap(val);
                        var result = map(val, callback);
                        if (allTruthyMode === true)
                            return filter(result, falsey).length === 0;
                        return arrayUnwrap(result);
                    };
                }
                function arrayEqualsHandler(callback) {
                    return function handleArray(val1, val2) {
                        var left = arrayWrap(val1), right = arrayWrap(val2);
                        if (left.length !== right.length)
                            return false;
                        for (var i = 0; i < left.length; i++) {
                            if (!callback(left[i], right[i]))
                                return false;
                        }
                        return true;
                    };
                }
                this.encode = arrayHandler(bindTo(type, 'encode'));
                this.decode = arrayHandler(bindTo(type, 'decode'));
                this.is = arrayHandler(bindTo(type, 'is'), true);
                this.equals = arrayEqualsHandler(bindTo(type, 'equals'));
                this.pattern = type.pattern;
                this.$arrayMode = mode;
            }
        };
        function $UrlMatcherFactory() {
            $$UMFP = this;
            var isCaseInsensitive = false, isStrictMode = true, defaultSquashPolicy = false;
            function valToString(val) {
                return val != null ? val.toString().replace(/\//g, '%2F') : val;
            }
            function valFromString(val) {
                return val != null ? val.toString().replace(/%2F/g, '/') : val;
            }
            function regexpMatches(val) {
                return this.pattern.test(val);
            }
            var $types = {}, enqueue = true, typeQueue = [], injector, defaultTypes = {
                    string: {
                        encode: valToString,
                        decode: valFromString,
                        is: regexpMatches,
                        pattern: /[^\/]*/
                    },
                    int: {
                        encode: valToString,
                        decode: function (val) {
                            return parseInt(val, 10);
                        },
                        is: function (val) {
                            return isDefined(val) && this.decode(val.toString()) === val;
                        },
                        pattern: /\d+/
                    },
                    bool: {
                        encode: function (val) {
                            return val ? 1 : 0;
                        },
                        decode: function (val) {
                            return parseInt(val, 10) !== 0;
                        },
                        is: function (val) {
                            return val === true || val === false;
                        },
                        pattern: /0|1/
                    },
                    date: {
                        encode: function (val) {
                            if (!this.is(val))
                                return undefined;
                            return [
                                val.getFullYear(),
                                ('0' + (val.getMonth() + 1)).slice(-2),
                                ('0' + val.getDate()).slice(-2)
                            ].join('-');
                        },
                        decode: function (val) {
                            if (this.is(val))
                                return val;
                            var match = this.capture.exec(val);
                            return match ? new Date(match[1], match[2] - 1, match[3]) : undefined;
                        },
                        is: function (val) {
                            return val instanceof Date && !isNaN(val.valueOf());
                        },
                        equals: function (a, b) {
                            return this.is(a) && this.is(b) && a.toISOString() === b.toISOString();
                        },
                        pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,
                        capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/
                    },
                    json: {
                        encode: angular.toJson,
                        decode: angular.fromJson,
                        is: angular.isObject,
                        equals: angular.equals,
                        pattern: /[^\/]*/
                    },
                    any: {
                        encode: angular.identity,
                        decode: angular.identity,
                        is: angular.identity,
                        equals: angular.equals,
                        pattern: /.*/
                    }
                };
            function getDefaultConfig() {
                return {
                    strict: isStrictMode,
                    caseInsensitive: isCaseInsensitive
                };
            }
            function isInjectable(value) {
                return isFunction(value) || isArray(value) && isFunction(value[value.length - 1]);
            }
            $UrlMatcherFactory.$$getDefaultValue = function (config) {
                if (!isInjectable(config.value))
                    return config.value;
                if (!injector)
                    throw new Error('Injectable functions cannot be called at configuration time');
                return injector.invoke(config.value);
            };
            this.caseInsensitive = function (value) {
                if (isDefined(value))
                    isCaseInsensitive = value;
                return isCaseInsensitive;
            };
            this.strictMode = function (value) {
                if (isDefined(value))
                    isStrictMode = value;
                return isStrictMode;
            };
            this.defaultSquashPolicy = function (value) {
                if (!isDefined(value))
                    return defaultSquashPolicy;
                if (value !== true && value !== false && !isString(value))
                    throw new Error('Invalid squash policy: ' + value + '. Valid policies: false, true, arbitrary-string');
                defaultSquashPolicy = value;
                return value;
            };
            this.compile = function (pattern, config) {
                return new UrlMatcher(pattern, extend(getDefaultConfig(), config));
            };
            this.isMatcher = function (o) {
                if (!isObject(o))
                    return false;
                var result = true;
                forEach(UrlMatcher.prototype, function (val, name) {
                    if (isFunction(val)) {
                        result = result && (isDefined(o[name]) && isFunction(o[name]));
                    }
                });
                return result;
            };
            this.type = function (name, definition, definitionFn) {
                if (!isDefined(definition))
                    return $types[name];
                if ($types.hasOwnProperty(name))
                    throw new Error('A type named \'' + name + '\' has already been defined.');
                $types[name] = new Type(extend({ name: name }, definition));
                if (definitionFn) {
                    typeQueue.push({
                        name: name,
                        def: definitionFn
                    });
                    if (!enqueue)
                        flushTypeQueue();
                }
                return this;
            };
            function flushTypeQueue() {
                while (typeQueue.length) {
                    var type = typeQueue.shift();
                    if (type.pattern)
                        throw new Error('You cannot override a type\'s .pattern at runtime.');
                    angular.extend($types[type.name], injector.invoke(type.def));
                }
            }
            forEach(defaultTypes, function (type, name) {
                $types[name] = new Type(extend({ name: name }, type));
            });
            $types = inherit($types, {});
            this.$get = [
                '$injector',
                function ($injector) {
                    injector = $injector;
                    enqueue = false;
                    flushTypeQueue();
                    forEach(defaultTypes, function (type, name) {
                        if (!$types[name])
                            $types[name] = new Type(type);
                    });
                    return this;
                }
            ];
            this.Param = function Param(id, type, config, location) {
                var self = this;
                config = unwrapShorthand(config);
                type = getType(config, type, location);
                var arrayMode = getArrayMode();
                type = arrayMode ? type.$asArray(arrayMode, location === 'search') : type;
                if (type.name === 'string' && !arrayMode && location === 'path' && config.value === undefined)
                    config.value = '';
                var isOptional = config.value !== undefined;
                var squash = getSquashPolicy(config, isOptional);
                var replace = getReplace(config, arrayMode, isOptional, squash);
                function unwrapShorthand(config) {
                    var keys = isObject(config) ? objectKeys(config) : [];
                    var isShorthand = indexOf(keys, 'value') === -1 && indexOf(keys, 'type') === -1 && indexOf(keys, 'squash') === -1 && indexOf(keys, 'array') === -1;
                    if (isShorthand)
                        config = { value: config };
                    config.$$fn = isInjectable(config.value) ? config.value : function () {
                        return config.value;
                    };
                    return config;
                }
                function getType(config, urlType, location) {
                    if (config.type && urlType)
                        throw new Error('Param \'' + id + '\' has two type configurations.');
                    if (urlType)
                        return urlType;
                    if (!config.type)
                        return location === 'config' ? $types.any : $types.string;
                    return config.type instanceof Type ? config.type : new Type(config.type);
                }
                function getArrayMode() {
                    var arrayDefaults = { array: location === 'search' ? 'auto' : false };
                    var arrayParamNomenclature = id.match(/\[\]$/) ? { array: true } : {};
                    return extend(arrayDefaults, arrayParamNomenclature, config).array;
                }
                function getSquashPolicy(config, isOptional) {
                    var squash = config.squash;
                    if (!isOptional || squash === false)
                        return false;
                    if (!isDefined(squash) || squash == null)
                        return defaultSquashPolicy;
                    if (squash === true || isString(squash))
                        return squash;
                    throw new Error('Invalid squash policy: \'' + squash + '\'. Valid policies: false, true, or arbitrary string');
                }
                function getReplace(config, arrayMode, isOptional, squash) {
                    var replace, configuredKeys, defaultPolicy = [
                            {
                                from: '',
                                to: isOptional || arrayMode ? undefined : ''
                            },
                            {
                                from: null,
                                to: isOptional || arrayMode ? undefined : ''
                            }
                        ];
                    replace = isArray(config.replace) ? config.replace : [];
                    if (isString(squash))
                        replace.push({
                            from: squash,
                            to: undefined
                        });
                    configuredKeys = map(replace, function (item) {
                        return item.from;
                    });
                    return filter(defaultPolicy, function (item) {
                        return indexOf(configuredKeys, item.from) === -1;
                    }).concat(replace);
                }
                function $$getDefaultValue() {
                    if (!injector)
                        throw new Error('Injectable functions cannot be called at configuration time');
                    return injector.invoke(config.$$fn);
                }
                function $value(value) {
                    function hasReplaceVal(val) {
                        return function (obj) {
                            return obj.from === val;
                        };
                    }
                    function $replace(value) {
                        var replacement = map(filter(self.replace, hasReplaceVal(value)), function (obj) {
                            return obj.to;
                        });
                        return replacement.length ? replacement[0] : value;
                    }
                    value = $replace(value);
                    return isDefined(value) ? self.type.decode(value) : $$getDefaultValue();
                }
                function toString() {
                    return '{Param:' + id + ' ' + type + ' squash: \'' + squash + '\' optional: ' + isOptional + '}';
                }
                extend(this, {
                    id: id,
                    type: type,
                    location: location,
                    array: arrayMode,
                    squash: squash,
                    replace: replace,
                    isOptional: isOptional,
                    value: $value,
                    dynamic: undefined,
                    config: config,
                    toString: toString
                });
            };
            function ParamSet(params) {
                extend(this, params || {});
            }
            ParamSet.prototype = {
                $$new: function () {
                    return inherit(this, extend(new ParamSet(), { $$parent: this }));
                },
                $$keys: function () {
                    var keys = [], chain = [], parent = this, ignore = objectKeys(ParamSet.prototype);
                    while (parent) {
                        chain.push(parent);
                        parent = parent.$$parent;
                    }
                    chain.reverse();
                    forEach(chain, function (paramset) {
                        forEach(objectKeys(paramset), function (key) {
                            if (indexOf(keys, key) === -1 && indexOf(ignore, key) === -1)
                                keys.push(key);
                        });
                    });
                    return keys;
                },
                $$values: function (paramValues) {
                    var values = {}, self = this;
                    forEach(self.$$keys(), function (key) {
                        values[key] = self[key].value(paramValues && paramValues[key]);
                    });
                    return values;
                },
                $$equals: function (paramValues1, paramValues2) {
                    var equal = true, self = this;
                    forEach(self.$$keys(), function (key) {
                        var left = paramValues1 && paramValues1[key], right = paramValues2 && paramValues2[key];
                        if (!self[key].type.equals(left, right))
                            equal = false;
                    });
                    return equal;
                },
                $$validates: function $$validate(paramValues) {
                    var result = true, isOptional, val, param, self = this;
                    forEach(this.$$keys(), function (key) {
                        param = self[key];
                        val = paramValues[key];
                        isOptional = !val && param.isOptional;
                        result = result && (isOptional || !!param.type.is(val));
                    });
                    return result;
                },
                $$parent: undefined
            };
            this.ParamSet = ParamSet;
        }
        angular.module('ui.router.util').provider('$urlMatcherFactory', $UrlMatcherFactory);
        angular.module('ui.router.util').run([
            '$urlMatcherFactory',
            function ($urlMatcherFactory) {
            }
        ]);
        $UrlRouterProvider.$inject = [
            '$locationProvider',
            '$urlMatcherFactoryProvider'
        ];
        function $UrlRouterProvider($locationProvider, $urlMatcherFactory) {
            var rules = [], otherwise = null, interceptDeferred = false, listener;
            function regExpPrefix(re) {
                var prefix = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(re.source);
                return prefix != null ? prefix[1].replace(/\\(.)/g, '$1') : '';
            }
            function interpolate(pattern, match) {
                return pattern.replace(/\$(\$|\d{1,2})/, function (m, what) {
                    return match[what === '$' ? 0 : Number(what)];
                });
            }
            this.rule = function (rule) {
                if (!isFunction(rule))
                    throw new Error('\'rule\' must be a function');
                rules.push(rule);
                return this;
            };
            this.otherwise = function (rule) {
                if (isString(rule)) {
                    var redirect = rule;
                    rule = function () {
                        return redirect;
                    };
                } else if (!isFunction(rule))
                    throw new Error('\'rule\' must be a function');
                otherwise = rule;
                return this;
            };
            function handleIfMatch($injector, handler, match) {
                if (!match)
                    return false;
                var result = $injector.invoke(handler, handler, { $match: match });
                return isDefined(result) ? result : true;
            }
            this.when = function (what, handler) {
                var redirect, handlerIsString = isString(handler);
                if (isString(what))
                    what = $urlMatcherFactory.compile(what);
                if (!handlerIsString && !isFunction(handler) && !isArray(handler))
                    throw new Error('invalid \'handler\' in when()');
                var strategies = {
                    matcher: function (what, handler) {
                        if (handlerIsString) {
                            redirect = $urlMatcherFactory.compile(handler);
                            handler = [
                                '$match',
                                function ($match) {
                                    return redirect.format($match);
                                }
                            ];
                        }
                        return extend(function ($injector, $location) {
                            return handleIfMatch($injector, handler, what.exec($location.path(), $location.search()));
                        }, { prefix: isString(what.prefix) ? what.prefix : '' });
                    },
                    regex: function (what, handler) {
                        if (what.global || what.sticky)
                            throw new Error('when() RegExp must not be global or sticky');
                        if (handlerIsString) {
                            redirect = handler;
                            handler = [
                                '$match',
                                function ($match) {
                                    return interpolate(redirect, $match);
                                }
                            ];
                        }
                        return extend(function ($injector, $location) {
                            return handleIfMatch($injector, handler, what.exec($location.path()));
                        }, { prefix: regExpPrefix(what) });
                    }
                };
                var check = {
                    matcher: $urlMatcherFactory.isMatcher(what),
                    regex: what instanceof RegExp
                };
                for (var n in check) {
                    if (check[n])
                        return this.rule(strategies[n](what, handler));
                }
                throw new Error('invalid \'what\' in when()');
            };
            this.deferIntercept = function (defer) {
                if (defer === undefined)
                    defer = true;
                interceptDeferred = defer;
            };
            this.$get = $get;
            $get.$inject = [
                '$location',
                '$rootScope',
                '$injector',
                '$browser'
            ];
            function $get($location, $rootScope, $injector, $browser) {
                var baseHref = $browser.baseHref(), location = $location.url(), lastPushedUrl;
                function appendBasePath(url, isHtml5, absolute) {
                    if (baseHref === '/')
                        return url;
                    if (isHtml5)
                        return baseHref.slice(0, -1) + url;
                    if (absolute)
                        return baseHref.slice(1) + url;
                    return url;
                }
                function update(evt) {
                    if (evt && evt.defaultPrevented)
                        return;
                    var ignoreUpdate = lastPushedUrl && $location.url() === lastPushedUrl;
                    lastPushedUrl = undefined;
                    if (ignoreUpdate)
                        return true;
                    function check(rule) {
                        var handled = rule($injector, $location);
                        if (!handled)
                            return false;
                        if (isString(handled))
                            $location.replace().url(handled);
                        return true;
                    }
                    var n = rules.length, i;
                    for (i = 0; i < n; i++) {
                        if (check(rules[i]))
                            return;
                    }
                    if (otherwise)
                        check(otherwise);
                }
                function listen() {
                    listener = listener || $rootScope.$on('$locationChangeSuccess', update);
                    return listener;
                }
                if (!interceptDeferred)
                    listen();
                return {
                    sync: function () {
                        update();
                    },
                    listen: function () {
                        return listen();
                    },
                    update: function (read) {
                        if (read) {
                            location = $location.url();
                            return;
                        }
                        if ($location.url() === location)
                            return;
                        $location.url(location);
                        $location.replace();
                    },
                    push: function (urlMatcher, params, options) {
                        $location.url(urlMatcher.format(params || {}));
                        lastPushedUrl = options && options.$$avoidResync ? $location.url() : undefined;
                        if (options && options.replace)
                            $location.replace();
                    },
                    href: function (urlMatcher, params, options) {
                        if (!urlMatcher.validates(params))
                            return null;
                        var isHtml5 = $locationProvider.html5Mode();
                        if (angular.isObject(isHtml5)) {
                            isHtml5 = isHtml5.enabled;
                        }
                        var url = urlMatcher.format(params);
                        options = options || {};
                        if (!isHtml5 && url !== null) {
                            url = '#' + $locationProvider.hashPrefix() + url;
                        }
                        url = appendBasePath(url, isHtml5, options.absolute);
                        if (!options.absolute || !url) {
                            return url;
                        }
                        var slash = !isHtml5 && url ? '/' : '', port = $location.port();
                        port = port === 80 || port === 443 ? '' : ':' + port;
                        return [
                            $location.protocol(),
                            '://',
                            $location.host(),
                            port,
                            slash,
                            url
                        ].join('');
                    }
                };
            }
        }
        angular.module('ui.router.router').provider('$urlRouter', $UrlRouterProvider);
        $StateProvider.$inject = [
            '$urlRouterProvider',
            '$urlMatcherFactoryProvider'
        ];
        function $StateProvider($urlRouterProvider, $urlMatcherFactory) {
            var root, states = {}, $state, queue = {}, abstractKey = 'abstract';
            var stateBuilder = {
                parent: function (state) {
                    if (isDefined(state.parent) && state.parent)
                        return findState(state.parent);
                    var compositeName = /^(.+)\.[^.]+$/.exec(state.name);
                    return compositeName ? findState(compositeName[1]) : root;
                },
                data: function (state) {
                    if (state.parent && state.parent.data) {
                        state.data = state.self.data = extend({}, state.parent.data, state.data);
                    }
                    return state.data;
                },
                url: function (state) {
                    var url = state.url, config = { params: state.params || {} };
                    if (isString(url)) {
                        if (url.charAt(0) == '^')
                            return $urlMatcherFactory.compile(url.substring(1), config);
                        return (state.parent.navigable || root).url.concat(url, config);
                    }
                    if (!url || $urlMatcherFactory.isMatcher(url))
                        return url;
                    throw new Error('Invalid url \'' + url + '\' in state \'' + state + '\'');
                },
                navigable: function (state) {
                    return state.url ? state : state.parent ? state.parent.navigable : null;
                },
                ownParams: function (state) {
                    var params = state.url && state.url.params || new $$UMFP.ParamSet();
                    forEach(state.params || {}, function (config, id) {
                        if (!params[id])
                            params[id] = new $$UMFP.Param(id, null, config, 'config');
                    });
                    return params;
                },
                params: function (state) {
                    return state.parent && state.parent.params ? extend(state.parent.params.$$new(), state.ownParams) : new $$UMFP.ParamSet();
                },
                views: function (state) {
                    var views = {};
                    forEach(isDefined(state.views) ? state.views : { '': state }, function (view, name) {
                        if (name.indexOf('@') < 0)
                            name += '@' + state.parent.name;
                        views[name] = view;
                    });
                    return views;
                },
                path: function (state) {
                    return state.parent ? state.parent.path.concat(state) : [];
                },
                includes: function (state) {
                    var includes = state.parent ? extend({}, state.parent.includes) : {};
                    includes[state.name] = true;
                    return includes;
                },
                $delegates: {}
            };
            function isRelative(stateName) {
                return stateName.indexOf('.') === 0 || stateName.indexOf('^') === 0;
            }
            function findState(stateOrName, base) {
                if (!stateOrName)
                    return undefined;
                var isStr = isString(stateOrName), name = isStr ? stateOrName : stateOrName.name, path = isRelative(name);
                if (path) {
                    if (!base)
                        throw new Error('No reference point given for path \'' + name + '\'');
                    base = findState(base);
                    var rel = name.split('.'), i = 0, pathLength = rel.length, current = base;
                    for (; i < pathLength; i++) {
                        if (rel[i] === '' && i === 0) {
                            current = base;
                            continue;
                        }
                        if (rel[i] === '^') {
                            if (!current.parent)
                                throw new Error('Path \'' + name + '\' not valid for state \'' + base.name + '\'');
                            current = current.parent;
                            continue;
                        }
                        break;
                    }
                    rel = rel.slice(i).join('.');
                    name = current.name + (current.name && rel ? '.' : '') + rel;
                }
                var state = states[name];
                if (state && (isStr || !isStr && (state === stateOrName || state.self === stateOrName))) {
                    return state;
                }
                return undefined;
            }
            function queueState(parentName, state) {
                if (!queue[parentName]) {
                    queue[parentName] = [];
                }
                queue[parentName].push(state);
            }
            function flushQueuedChildren(parentName) {
                var queued = queue[parentName] || [];
                while (queued.length) {
                    registerState(queued.shift());
                }
            }
            function registerState(state) {
                state = inherit(state, {
                    self: state,
                    resolve: state.resolve || {},
                    toString: function () {
                        return this.name;
                    }
                });
                var name = state.name;
                if (!isString(name) || name.indexOf('@') >= 0)
                    throw new Error('State must have a valid name');
                if (states.hasOwnProperty(name))
                    throw new Error('State \'' + name + '\'\' is already defined');
                var parentName = name.indexOf('.') !== -1 ? name.substring(0, name.lastIndexOf('.')) : isString(state.parent) ? state.parent : isObject(state.parent) && isString(state.parent.name) ? state.parent.name : '';
                if (parentName && !states[parentName]) {
                    return queueState(parentName, state.self);
                }
                for (var key in stateBuilder) {
                    if (isFunction(stateBuilder[key]))
                        state[key] = stateBuilder[key](state, stateBuilder.$delegates[key]);
                }
                states[name] = state;
                if (!state[abstractKey] && state.url) {
                    $urlRouterProvider.when(state.url, [
                        '$match',
                        '$stateParams',
                        function ($match, $stateParams) {
                            if ($state.$current.navigable != state || !equalForKeys($match, $stateParams)) {
                                $state.transitionTo(state, $match, {
                                    inherit: true,
                                    location: false
                                });
                            }
                        }
                    ]);
                }
                flushQueuedChildren(name);
                return state;
            }
            function isGlob(text) {
                return text.indexOf('*') > -1;
            }
            function doesStateMatchGlob(glob) {
                var globSegments = glob.split('.'), segments = $state.$current.name.split('.');
                if (globSegments[0] === '**') {
                    segments = segments.slice(indexOf(segments, globSegments[1]));
                    segments.unshift('**');
                }
                if (globSegments[globSegments.length - 1] === '**') {
                    segments.splice(indexOf(segments, globSegments[globSegments.length - 2]) + 1, Number.MAX_VALUE);
                    segments.push('**');
                }
                if (globSegments.length != segments.length) {
                    return false;
                }
                for (var i = 0, l = globSegments.length; i < l; i++) {
                    if (globSegments[i] === '*') {
                        segments[i] = '*';
                    }
                }
                return segments.join('') === globSegments.join('');
            }
            root = registerState({
                name: '',
                url: '^',
                views: null,
                'abstract': true
            });
            root.navigable = null;
            this.decorator = decorator;
            function decorator(name, func) {
                if (isString(name) && !isDefined(func)) {
                    return stateBuilder[name];
                }
                if (!isFunction(func) || !isString(name)) {
                    return this;
                }
                if (stateBuilder[name] && !stateBuilder.$delegates[name]) {
                    stateBuilder.$delegates[name] = stateBuilder[name];
                }
                stateBuilder[name] = func;
                return this;
            }
            this.state = state;
            function state(name, definition) {
                if (isObject(name))
                    definition = name;
                else
                    definition.name = name;
                registerState(definition);
                return this;
            }
            this.$get = $get;
            $get.$inject = [
                '$rootScope',
                '$q',
                '$view',
                '$injector',
                '$resolve',
                '$stateParams',
                '$urlRouter',
                '$location',
                '$urlMatcherFactory'
            ];
            function $get($rootScope, $q, $view, $injector, $resolve, $stateParams, $urlRouter, $location, $urlMatcherFactory) {
                var TransitionSuperseded = $q.reject(new Error('transition superseded'));
                var TransitionPrevented = $q.reject(new Error('transition prevented'));
                var TransitionAborted = $q.reject(new Error('transition aborted'));
                var TransitionFailed = $q.reject(new Error('transition failed'));
                function handleRedirect(redirect, state, params, options) {
                    var evt = $rootScope.$broadcast('$stateNotFound', redirect, state, params);
                    if (evt.defaultPrevented) {
                        $urlRouter.update();
                        return TransitionAborted;
                    }
                    if (!evt.retry) {
                        return null;
                    }
                    if (options.$retry) {
                        $urlRouter.update();
                        return TransitionFailed;
                    }
                    var retryTransition = $state.transition = $q.when(evt.retry);
                    retryTransition.then(function () {
                        if (retryTransition !== $state.transition)
                            return TransitionSuperseded;
                        redirect.options.$retry = true;
                        return $state.transitionTo(redirect.to, redirect.toParams, redirect.options);
                    }, function () {
                        return TransitionAborted;
                    });
                    $urlRouter.update();
                    return retryTransition;
                }
                root.locals = {
                    resolve: null,
                    globals: { $stateParams: {} }
                };
                $state = {
                    params: {},
                    current: root.self,
                    $current: root,
                    transition: null
                };
                $state.reload = function reload() {
                    return $state.transitionTo($state.current, $stateParams, {
                        reload: true,
                        inherit: false,
                        notify: true
                    });
                };
                $state.go = function go(to, params, options) {
                    return $state.transitionTo(to, params, extend({
                        inherit: true,
                        relative: $state.$current
                    }, options));
                };
                $state.transitionTo = function transitionTo(to, toParams, options) {
                    toParams = toParams || {};
                    options = extend({
                        location: true,
                        inherit: false,
                        relative: null,
                        notify: true,
                        reload: false,
                        $retry: false
                    }, options || {});
                    var from = $state.$current, fromParams = $state.params, fromPath = from.path;
                    var evt, toState = findState(to, options.relative);
                    if (!isDefined(toState)) {
                        var redirect = {
                            to: to,
                            toParams: toParams,
                            options: options
                        };
                        var redirectResult = handleRedirect(redirect, from.self, fromParams, options);
                        if (redirectResult) {
                            return redirectResult;
                        }
                        to = redirect.to;
                        toParams = redirect.toParams;
                        options = redirect.options;
                        toState = findState(to, options.relative);
                        if (!isDefined(toState)) {
                            if (!options.relative)
                                throw new Error('No such state \'' + to + '\'');
                            throw new Error('Could not resolve \'' + to + '\' from state \'' + options.relative + '\'');
                        }
                    }
                    if (toState[abstractKey])
                        throw new Error('Cannot transition to abstract state \'' + to + '\'');
                    if (options.inherit)
                        toParams = inheritParams($stateParams, toParams || {}, $state.$current, toState);
                    if (!toState.params.$$validates(toParams))
                        return TransitionFailed;
                    toParams = toState.params.$$values(toParams);
                    to = toState;
                    var toPath = to.path;
                    var keep = 0, state = toPath[keep], locals = root.locals, toLocals = [];
                    if (!options.reload) {
                        while (state && state === fromPath[keep] && state.ownParams.$$equals(toParams, fromParams)) {
                            locals = toLocals[keep] = state.locals;
                            keep++;
                            state = toPath[keep];
                        }
                    }
                    if (shouldTriggerReload(to, from, locals, options)) {
                        if (to.self.reloadOnSearch !== false)
                            $urlRouter.update();
                        $state.transition = null;
                        return $q.when($state.current);
                    }
                    toParams = filterByKeys(to.params.$$keys(), toParams || {});
                    if (options.notify) {
                        if ($rootScope.$broadcast('$stateChangeStart', to.self, toParams, from.self, fromParams).defaultPrevented) {
                            $urlRouter.update();
                            return TransitionPrevented;
                        }
                    }
                    var resolved = $q.when(locals);
                    for (var l = keep; l < toPath.length; l++, state = toPath[l]) {
                        locals = toLocals[l] = inherit(locals);
                        resolved = resolveState(state, toParams, state === to, resolved, locals, options);
                    }
                    var transition = $state.transition = resolved.then(function () {
                        var l, entering, exiting;
                        if ($state.transition !== transition)
                            return TransitionSuperseded;
                        for (l = fromPath.length - 1; l >= keep; l--) {
                            exiting = fromPath[l];
                            if (exiting.self.onExit) {
                                $injector.invoke(exiting.self.onExit, exiting.self, exiting.locals.globals);
                            }
                            exiting.locals = null;
                        }
                        for (l = keep; l < toPath.length; l++) {
                            entering = toPath[l];
                            entering.locals = toLocals[l];
                            if (entering.self.onEnter) {
                                $injector.invoke(entering.self.onEnter, entering.self, entering.locals.globals);
                            }
                        }
                        if ($state.transition !== transition)
                            return TransitionSuperseded;
                        $state.$current = to;
                        $state.current = to.self;
                        $state.params = toParams;
                        copy($state.params, $stateParams);
                        $state.transition = null;
                        if (options.location && to.navigable) {
                            $urlRouter.push(to.navigable.url, to.navigable.locals.globals.$stateParams, {
                                $$avoidResync: true,
                                replace: options.location === 'replace'
                            });
                        }
                        if (options.notify) {
                            $rootScope.$broadcast('$stateChangeSuccess', to.self, toParams, from.self, fromParams);
                        }
                        $urlRouter.update(true);
                        return $state.current;
                    }, function (error) {
                        if ($state.transition !== transition)
                            return TransitionSuperseded;
                        $state.transition = null;
                        evt = $rootScope.$broadcast('$stateChangeError', to.self, toParams, from.self, fromParams, error);
                        if (!evt.defaultPrevented) {
                            $urlRouter.update();
                        }
                        return $q.reject(error);
                    });
                    return transition;
                };
                $state.is = function is(stateOrName, params, options) {
                    options = extend({ relative: $state.$current }, options || {});
                    var state = findState(stateOrName, options.relative);
                    if (!isDefined(state)) {
                        return undefined;
                    }
                    if ($state.$current !== state) {
                        return false;
                    }
                    return params ? equalForKeys(state.params.$$values(params), $stateParams) : true;
                };
                $state.includes = function includes(stateOrName, params, options) {
                    options = extend({ relative: $state.$current }, options || {});
                    if (isString(stateOrName) && isGlob(stateOrName)) {
                        if (!doesStateMatchGlob(stateOrName)) {
                            return false;
                        }
                        stateOrName = $state.$current.name;
                    }
                    var state = findState(stateOrName, options.relative);
                    if (!isDefined(state)) {
                        return undefined;
                    }
                    if (!isDefined($state.$current.includes[state.name])) {
                        return false;
                    }
                    return params ? equalForKeys(state.params.$$values(params), $stateParams, objectKeys(params)) : true;
                };
                $state.href = function href(stateOrName, params, options) {
                    options = extend({
                        lossy: true,
                        inherit: true,
                        absolute: false,
                        relative: $state.$current
                    }, options || {});
                    var state = findState(stateOrName, options.relative);
                    if (!isDefined(state))
                        return null;
                    if (options.inherit)
                        params = inheritParams($stateParams, params || {}, $state.$current, state);
                    var nav = state && options.lossy ? state.navigable : state;
                    if (!nav || nav.url === undefined || nav.url === null) {
                        return null;
                    }
                    return $urlRouter.href(nav.url, filterByKeys(state.params.$$keys(), params || {}), { absolute: options.absolute });
                };
                $state.get = function (stateOrName, context) {
                    if (arguments.length === 0)
                        return map(objectKeys(states), function (name) {
                            return states[name].self;
                        });
                    var state = findState(stateOrName, context || $state.$current);
                    return state && state.self ? state.self : null;
                };
                function resolveState(state, params, paramsAreFiltered, inherited, dst, options) {
                    var $stateParams = paramsAreFiltered ? params : filterByKeys(state.params.$$keys(), params);
                    var locals = { $stateParams: $stateParams };
                    dst.resolve = $resolve.resolve(state.resolve, locals, dst.resolve, state);
                    var promises = [dst.resolve.then(function (globals) {
                            dst.globals = globals;
                        })];
                    if (inherited)
                        promises.push(inherited);
                    forEach(state.views, function (view, name) {
                        var injectables = view.resolve && view.resolve !== state.resolve ? view.resolve : {};
                        injectables.$template = [function () {
                                return $view.load(name, {
                                    view: view,
                                    locals: locals,
                                    params: $stateParams,
                                    notify: options.notify
                                }) || '';
                            }];
                        promises.push($resolve.resolve(injectables, locals, dst.resolve, state).then(function (result) {
                            if (isFunction(view.controllerProvider) || isArray(view.controllerProvider)) {
                                var injectLocals = angular.extend({}, injectables, locals);
                                result.$$controller = $injector.invoke(view.controllerProvider, null, injectLocals);
                            } else {
                                result.$$controller = view.controller;
                            }
                            result.$$state = state;
                            result.$$controllerAs = view.controllerAs;
                            dst[name] = result;
                        }));
                    });
                    return $q.all(promises).then(function (values) {
                        return dst;
                    });
                }
                return $state;
            }
            function shouldTriggerReload(to, from, locals, options) {
                if (to === from && (locals === from.locals && !options.reload || to.self.reloadOnSearch === false)) {
                    return true;
                }
            }
        }
        angular.module('ui.router.state').value('$stateParams', {}).provider('$state', $StateProvider);
        $ViewProvider.$inject = [];
        function $ViewProvider() {
            this.$get = $get;
            $get.$inject = [
                '$rootScope',
                '$templateFactory'
            ];
            function $get($rootScope, $templateFactory) {
                return {
                    load: function load(name, options) {
                        var result, defaults = {
                                template: null,
                                controller: null,
                                view: null,
                                locals: null,
                                notify: true,
                                async: true,
                                params: {}
                            };
                        options = extend(defaults, options);
                        if (options.view) {
                            result = $templateFactory.fromConfig(options.view, options.params, options.locals);
                        }
                        if (result && options.notify) {
                            $rootScope.$broadcast('$viewContentLoading', options);
                        }
                        return result;
                    }
                };
            }
        }
        angular.module('ui.router.state').provider('$view', $ViewProvider);
        function $ViewScrollProvider() {
            var useAnchorScroll = false;
            this.useAnchorScroll = function () {
                useAnchorScroll = true;
            };
            this.$get = [
                '$anchorScroll',
                '$timeout',
                function ($anchorScroll, $timeout) {
                    if (useAnchorScroll) {
                        return $anchorScroll;
                    }
                    return function ($element) {
                        $timeout(function () {
                            $element[0].scrollIntoView();
                        }, 0, false);
                    };
                }
            ];
        }
        angular.module('ui.router.state').provider('$uiViewScroll', $ViewScrollProvider);
        $ViewDirective.$inject = [
            '$state',
            '$injector',
            '$uiViewScroll',
            '$interpolate'
        ];
        function $ViewDirective($state, $injector, $uiViewScroll, $interpolate) {
            function getService() {
                return $injector.has ? function (service) {
                    return $injector.has(service) ? $injector.get(service) : null;
                } : function (service) {
                    try {
                        return $injector.get(service);
                    } catch (e) {
                        return null;
                    }
                };
            }
            var service = getService(), $animator = service('$animator'), $animate = service('$animate');
            function getRenderer(attrs, scope) {
                var statics = function () {
                    return {
                        enter: function (element, target, cb) {
                            target.after(element);
                            cb();
                        },
                        leave: function (element, cb) {
                            element.remove();
                            cb();
                        }
                    };
                };
                if ($animate) {
                    return {
                        enter: function (element, target, cb) {
                            var promise = $animate.enter(element, null, target, cb);
                            if (promise && promise.then)
                                promise.then(cb);
                        },
                        leave: function (element, cb) {
                            var promise = $animate.leave(element, cb);
                            if (promise && promise.then)
                                promise.then(cb);
                        }
                    };
                }
                if ($animator) {
                    var animate = $animator && $animator(scope, attrs);
                    return {
                        enter: function (element, target, cb) {
                            animate.enter(element, null, target);
                            cb();
                        },
                        leave: function (element, cb) {
                            animate.leave(element);
                            cb();
                        }
                    };
                }
                return statics();
            }
            var directive = {
                restrict: 'ECA',
                terminal: true,
                priority: 400,
                transclude: 'element',
                compile: function (tElement, tAttrs, $transclude) {
                    return function (scope, $element, attrs) {
                        var previousEl, currentEl, currentScope, latestLocals, onloadExp = attrs.onload || '', autoScrollExp = attrs.autoscroll, renderer = getRenderer(attrs, scope);
                        scope.$on('$stateChangeSuccess', function () {
                            updateView(false);
                        });
                        scope.$on('$viewContentLoading', function () {
                            updateView(false);
                        });
                        updateView(true);
                        function cleanupLastView() {
                            if (previousEl) {
                                previousEl.remove();
                                previousEl = null;
                            }
                            if (currentScope) {
                                currentScope.$destroy();
                                currentScope = null;
                            }
                            if (currentEl) {
                                renderer.leave(currentEl, function () {
                                    previousEl = null;
                                });
                                previousEl = currentEl;
                                currentEl = null;
                            }
                        }
                        function updateView(firstTime) {
                            var newScope, name = getUiViewName(scope, attrs, $element, $interpolate), previousLocals = name && $state.$current && $state.$current.locals[name];
                            if (!firstTime && previousLocals === latestLocals)
                                return;
                            newScope = scope.$new();
                            latestLocals = $state.$current.locals[name];
                            var clone = $transclude(newScope, function (clone) {
                                renderer.enter(clone, $element, function onUiViewEnter() {
                                    if (currentScope) {
                                        currentScope.$emit('$viewContentAnimationEnded');
                                    }
                                    if (angular.isDefined(autoScrollExp) && !autoScrollExp || scope.$eval(autoScrollExp)) {
                                        $uiViewScroll(clone);
                                    }
                                });
                                cleanupLastView();
                            });
                            currentEl = clone;
                            currentScope = newScope;
                            currentScope.$emit('$viewContentLoaded');
                            currentScope.$eval(onloadExp);
                        }
                    };
                }
            };
            return directive;
        }
        $ViewDirectiveFill.$inject = [
            '$compile',
            '$controller',
            '$state',
            '$interpolate'
        ];
        function $ViewDirectiveFill($compile, $controller, $state, $interpolate) {
            return {
                restrict: 'ECA',
                priority: -400,
                compile: function (tElement) {
                    var initial = tElement.html();
                    return function (scope, $element, attrs) {
                        var current = $state.$current, name = getUiViewName(scope, attrs, $element, $interpolate), locals = current && current.locals[name];
                        if (!locals) {
                            return;
                        }
                        $element.data('$uiView', {
                            name: name,
                            state: locals.$$state
                        });
                        $element.html(locals.$template ? locals.$template : initial);
                        var link = $compile($element.contents());
                        if (locals.$$controller) {
                            locals.$scope = scope;
                            var controller = $controller(locals.$$controller, locals);
                            if (locals.$$controllerAs) {
                                scope[locals.$$controllerAs] = controller;
                            }
                            $element.data('$ngControllerController', controller);
                            $element.children().data('$ngControllerController', controller);
                        }
                        link(scope);
                    };
                }
            };
        }
        function getUiViewName(scope, attrs, element, $interpolate) {
            var name = $interpolate(attrs.uiView || attrs.name || '')(scope);
            var inherited = element.inheritedData('$uiView');
            return name.indexOf('@') >= 0 ? name : name + '@' + (inherited ? inherited.state.name : '');
        }
        angular.module('ui.router.state').directive('uiView', $ViewDirective);
        angular.module('ui.router.state').directive('uiView', $ViewDirectiveFill);
        function parseStateRef(ref, current) {
            var preparsed = ref.match(/^\s*({[^}]*})\s*$/), parsed;
            if (preparsed)
                ref = current + '(' + preparsed[1] + ')';
            parsed = ref.replace(/\n/g, ' ').match(/^([^(]+?)\s*(\((.*)\))?$/);
            if (!parsed || parsed.length !== 4)
                throw new Error('Invalid state ref \'' + ref + '\'');
            return {
                state: parsed[1],
                paramExpr: parsed[3] || null
            };
        }
        function stateContext(el) {
            var stateData = el.parent().inheritedData('$uiView');
            if (stateData && stateData.state && stateData.state.name) {
                return stateData.state;
            }
        }
        $StateRefDirective.$inject = [
            '$state',
            '$timeout'
        ];
        function $StateRefDirective($state, $timeout) {
            var allowedOptions = [
                'location',
                'inherit',
                'reload'
            ];
            return {
                restrict: 'A',
                require: [
                    '?^uiSrefActive',
                    '?^uiSrefActiveEq'
                ],
                link: function (scope, element, attrs, uiSrefActive) {
                    var ref = parseStateRef(attrs.uiSref, $state.current.name);
                    var params = null, url = null, base = stateContext(element) || $state.$current;
                    var newHref = null, isAnchor = element.prop('tagName') === 'A';
                    var isForm = element[0].nodeName === 'FORM';
                    var attr = isForm ? 'action' : 'href', nav = true;
                    var options = {
                        relative: base,
                        inherit: true
                    };
                    var optionsOverride = scope.$eval(attrs.uiSrefOpts) || {};
                    angular.forEach(allowedOptions, function (option) {
                        if (option in optionsOverride) {
                            options[option] = optionsOverride[option];
                        }
                    });
                    var update = function (newVal) {
                        if (newVal)
                            params = angular.copy(newVal);
                        if (!nav)
                            return;
                        newHref = $state.href(ref.state, params, options);
                        var activeDirective = uiSrefActive[1] || uiSrefActive[0];
                        if (activeDirective) {
                            activeDirective.$$setStateInfo(ref.state, params);
                        }
                        if (newHref === null) {
                            nav = false;
                            return false;
                        }
                        attrs.$set(attr, newHref);
                    };
                    if (ref.paramExpr) {
                        scope.$watch(ref.paramExpr, function (newVal, oldVal) {
                            if (newVal !== params)
                                update(newVal);
                        }, true);
                        params = angular.copy(scope.$eval(ref.paramExpr));
                    }
                    update();
                    if (isForm)
                        return;
                    element.bind('click', function (e) {
                        var button = e.which || e.button;
                        if (!(button > 1 || e.ctrlKey || e.metaKey || e.shiftKey || element.attr('target'))) {
                            var transition = $timeout(function () {
                                $state.go(ref.state, params, options);
                            });
                            e.preventDefault();
                            var ignorePreventDefaultCount = isAnchor && !newHref ? 1 : 0;
                            e.preventDefault = function () {
                                if (ignorePreventDefaultCount-- <= 0)
                                    $timeout.cancel(transition);
                            };
                        }
                    });
                }
            };
        }
        $StateRefActiveDirective.$inject = [
            '$state',
            '$stateParams',
            '$interpolate'
        ];
        function $StateRefActiveDirective($state, $stateParams, $interpolate) {
            return {
                restrict: 'A',
                controller: [
                    '$scope',
                    '$element',
                    '$attrs',
                    function ($scope, $element, $attrs) {
                        var state, params, activeClass;
                        activeClass = $interpolate($attrs.uiSrefActiveEq || $attrs.uiSrefActive || '', false)($scope);
                        this.$$setStateInfo = function (newState, newParams) {
                            state = $state.get(newState, stateContext($element));
                            params = newParams;
                            update();
                        };
                        $scope.$on('$stateChangeSuccess', update);
                        function update() {
                            if (isMatch()) {
                                $element.addClass(activeClass);
                            } else {
                                $element.removeClass(activeClass);
                            }
                        }
                        function isMatch() {
                            if (typeof $attrs.uiSrefActiveEq !== 'undefined') {
                                return state && $state.is(state.name, params);
                            } else {
                                return state && $state.includes(state.name, params);
                            }
                        }
                    }
                ]
            };
        }
        angular.module('ui.router.state').directive('uiSref', $StateRefDirective).directive('uiSrefActive', $StateRefActiveDirective).directive('uiSrefActiveEq', $StateRefActiveDirective);
        $IsStateFilter.$inject = ['$state'];
        function $IsStateFilter($state) {
            var isFilter = function (state) {
                return $state.is(state);
            };
            isFilter.$stateful = true;
            return isFilter;
        }
        $IncludedByStateFilter.$inject = ['$state'];
        function $IncludedByStateFilter($state) {
            var includesFilter = function (state) {
                return $state.includes(state);
            };
            includesFilter.$stateful = true;
            return includesFilter;
        }
        angular.module('ui.router.state').filter('isState', $IsStateFilter).filter('includedByState', $IncludedByStateFilter);
    }(window, window.angular));
    return;
});
(function (a, b) {
    function cy(a) {
        return f.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1;
    }
    function cv(a) {
        if (!ck[a]) {
            var b = c.body, d = f('<' + a + '>').appendTo(b), e = d.css('display');
            d.remove();
            if (e === 'none' || e === '') {
                cl || (cl = c.createElement('iframe'), cl.frameBorder = cl.width = cl.height = 0), b.appendChild(cl);
                if (!cm || !cl.createElement)
                    cm = (cl.contentWindow || cl.contentDocument).document, cm.write((c.compatMode === 'CSS1Compat' ? '<!doctype html>' : '') + '<html><body>'), cm.close();
                d = cm.createElement(a), cm.body.appendChild(d), e = f.css(d, 'display'), b.removeChild(cl);
            }
            ck[a] = e;
        }
        return ck[a];
    }
    function cu(a, b) {
        var c = {};
        f.each(cq.concat.apply([], cq.slice(0, b)), function () {
            c[this] = a;
        });
        return c;
    }
    function ct() {
        cr = b;
    }
    function cs() {
        setTimeout(ct, 0);
        return cr = f.now();
    }
    function cj() {
        try {
            return new a.ActiveXObject('Microsoft.XMLHTTP');
        } catch (b) {
        }
    }
    function ci() {
        try {
            return new a.XMLHttpRequest();
        } catch (b) {
        }
    }
    function cc(a, c) {
        a.dataFilter && (c = a.dataFilter(c, a.dataType));
        var d = a.dataTypes, e = {}, g, h, i = d.length, j, k = d[0], l, m, n, o, p;
        for (g = 1; g < i; g++) {
            if (g === 1)
                for (h in a.converters)
                    typeof h == 'string' && (e[h.toLowerCase()] = a.converters[h]);
            l = k, k = d[g];
            if (k === '*')
                k = l;
            else if (l !== '*' && l !== k) {
                m = l + ' ' + k, n = e[m] || e['* ' + k];
                if (!n) {
                    p = b;
                    for (o in e) {
                        j = o.split(' ');
                        if (j[0] === l || j[0] === '*') {
                            p = e[j[1] + ' ' + k];
                            if (p) {
                                o = e[o], o === !0 ? n = p : p === !0 && (n = o);
                                break;
                            }
                        }
                    }
                }
                !n && !p && f.error('No conversion from ' + m.replace(' ', ' to ')), n !== !0 && (c = n ? n(c) : p(o(c)));
            }
        }
        return c;
    }
    function cb(a, c, d) {
        var e = a.contents, f = a.dataTypes, g = a.responseFields, h, i, j, k;
        for (i in g)
            i in d && (c[g[i]] = d[i]);
        while (f[0] === '*')
            f.shift(), h === b && (h = a.mimeType || c.getResponseHeader('content-type'));
        if (h)
            for (i in e)
                if (e[i] && e[i].test(h)) {
                    f.unshift(i);
                    break;
                }
        if (f[0] in d)
            j = f[0];
        else {
            for (i in d) {
                if (!f[0] || a.converters[i + ' ' + f[0]]) {
                    j = i;
                    break;
                }
                k || (k = i);
            }
            j = j || k;
        }
        if (j) {
            j !== f[0] && f.unshift(j);
            return d[j];
        }
    }
    function ca(a, b, c, d) {
        if (f.isArray(b))
            f.each(b, function (b, e) {
                c || bE.test(a) ? d(a, e) : ca(a + '[' + (typeof e == 'object' || f.isArray(e) ? b : '') + ']', e, c, d);
            });
        else if (!c && b != null && typeof b == 'object')
            for (var e in b)
                ca(a + '[' + e + ']', b[e], c, d);
        else
            d(a, b);
    }
    function b_(a, c) {
        var d, e, g = f.ajaxSettings.flatOptions || {};
        for (d in c)
            c[d] !== b && ((g[d] ? a : e || (e = {}))[d] = c[d]);
        e && f.extend(!0, a, e);
    }
    function b$(a, c, d, e, f, g) {
        f = f || c.dataTypes[0], g = g || {}, g[f] = !0;
        var h = a[f], i = 0, j = h ? h.length : 0, k = a === bT, l;
        for (; i < j && (k || !l); i++)
            l = h[i](c, d, e), typeof l == 'string' && (!k || g[l] ? l = b : (c.dataTypes.unshift(l), l = b$(a, c, d, e, l, g)));
        (k || !l) && !g['*'] && (l = b$(a, c, d, e, '*', g));
        return l;
    }
    function bZ(a) {
        return function (b, c) {
            typeof b != 'string' && (c = b, b = '*');
            if (f.isFunction(c)) {
                var d = b.toLowerCase().split(bP), e = 0, g = d.length, h, i, j;
                for (; e < g; e++)
                    h = d[e], j = /^\+/.test(h), j && (h = h.substr(1) || '*'), i = a[h] = a[h] || [], i[j ? 'unshift' : 'push'](c);
            }
        };
    }
    function bC(a, b, c) {
        var d = b === 'width' ? a.offsetWidth : a.offsetHeight, e = b === 'width' ? bx : by, g = 0, h = e.length;
        if (d > 0) {
            if (c !== 'border')
                for (; g < h; g++)
                    c || (d -= parseFloat(f.css(a, 'padding' + e[g])) || 0), c === 'margin' ? d += parseFloat(f.css(a, c + e[g])) || 0 : d -= parseFloat(f.css(a, 'border' + e[g] + 'Width')) || 0;
            return d + 'px';
        }
        d = bz(a, b, b);
        if (d < 0 || d == null)
            d = a.style[b] || 0;
        d = parseFloat(d) || 0;
        if (c)
            for (; g < h; g++)
                d += parseFloat(f.css(a, 'padding' + e[g])) || 0, c !== 'padding' && (d += parseFloat(f.css(a, 'border' + e[g] + 'Width')) || 0), c === 'margin' && (d += parseFloat(f.css(a, c + e[g])) || 0);
        return d + 'px';
    }
    function bp(a, b) {
        b.src ? f.ajax({
            url: b.src,
            async: !1,
            dataType: 'script'
        }) : f.globalEval((b.text || b.textContent || b.innerHTML || '').replace(bf, '/*$0*/')), b.parentNode && b.parentNode.removeChild(b);
    }
    function bo(a) {
        var b = c.createElement('div');
        bh.appendChild(b), b.innerHTML = a.outerHTML;
        return b.firstChild;
    }
    function bn(a) {
        var b = (a.nodeName || '').toLowerCase();
        b === 'input' ? bm(a) : b !== 'script' && typeof a.getElementsByTagName != 'undefined' && f.grep(a.getElementsByTagName('input'), bm);
    }
    function bm(a) {
        if (a.type === 'checkbox' || a.type === 'radio')
            a.defaultChecked = a.checked;
    }
    function bl(a) {
        return typeof a.getElementsByTagName != 'undefined' ? a.getElementsByTagName('*') : typeof a.querySelectorAll != 'undefined' ? a.querySelectorAll('*') : [];
    }
    function bk(a, b) {
        var c;
        if (b.nodeType === 1) {
            b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase();
            if (c === 'object')
                b.outerHTML = a.outerHTML;
            else if (c !== 'input' || a.type !== 'checkbox' && a.type !== 'radio') {
                if (c === 'option')
                    b.selected = a.defaultSelected;
                else if (c === 'input' || c === 'textarea')
                    b.defaultValue = a.defaultValue;
            } else
                a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value);
            b.removeAttribute(f.expando);
        }
    }
    function bj(a, b) {
        if (b.nodeType === 1 && !!f.hasData(a)) {
            var c, d, e, g = f._data(a), h = f._data(b, g), i = g.events;
            if (i) {
                delete h.handle, h.events = {};
                for (c in i)
                    for (d = 0, e = i[c].length; d < e; d++)
                        f.event.add(b, c + (i[c][d].namespace ? '.' : '') + i[c][d].namespace, i[c][d], i[c][d].data);
            }
            h.data && (h.data = f.extend({}, h.data));
        }
    }
    function bi(a, b) {
        return f.nodeName(a, 'table') ? a.getElementsByTagName('tbody')[0] || a.appendChild(a.ownerDocument.createElement('tbody')) : a;
    }
    function U(a) {
        var b = V.split('|'), c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length)
                c.createElement(b.pop());
        return c;
    }
    function T(a, b, c) {
        b = b || 0;
        if (f.isFunction(b))
            return f.grep(a, function (a, d) {
                var e = !!b.call(a, d, a);
                return e === c;
            });
        if (b.nodeType)
            return f.grep(a, function (a, d) {
                return a === b === c;
            });
        if (typeof b == 'string') {
            var d = f.grep(a, function (a) {
                return a.nodeType === 1;
            });
            if (O.test(b))
                return f.filter(b, d, !c);
            b = f.filter(b, d);
        }
        return f.grep(a, function (a, d) {
            return f.inArray(a, b) >= 0 === c;
        });
    }
    function S(a) {
        return !a || !a.parentNode || a.parentNode.nodeType === 11;
    }
    function K() {
        return !0;
    }
    function J() {
        return !1;
    }
    function n(a, b, c) {
        var d = b + 'defer', e = b + 'queue', g = b + 'mark', h = f._data(a, d);
        h && (c === 'queue' || !f._data(a, e)) && (c === 'mark' || !f._data(a, g)) && setTimeout(function () {
            !f._data(a, e) && !f._data(a, g) && (f.removeData(a, d, !0), h.fire());
        }, 0);
    }
    function m(a) {
        for (var b in a) {
            if (b === 'data' && f.isEmptyObject(a[b]))
                continue;
            if (b !== 'toJSON')
                return !1;
        }
        return !0;
    }
    function l(a, c, d) {
        if (d === b && a.nodeType === 1) {
            var e = 'data-' + c.replace(k, '-$1').toLowerCase();
            d = a.getAttribute(e);
            if (typeof d == 'string') {
                try {
                    d = d === 'true' ? !0 : d === 'false' ? !1 : d === 'null' ? null : f.isNumeric(d) ? parseFloat(d) : j.test(d) ? f.parseJSON(d) : d;
                } catch (g) {
                }
                f.data(a, c, d);
            } else
                d = b;
        }
        return d;
    }
    function h(a) {
        var b = g[a] = {}, c, d;
        a = a.split(/\s+/);
        for (c = 0, d = a.length; c < d; c++)
            b[a[c]] = !0;
        return b;
    }
    var c = a.document, d = a.navigator, e = a.location, f = function () {
            function J() {
                if (!e.isReady) {
                    try {
                        c.documentElement.doScroll('left');
                    } catch (a) {
                        setTimeout(J, 1);
                        return;
                    }
                    e.ready();
                }
            }
            var e = function (a, b) {
                    return new e.fn.init(a, b, h);
                }, f = a.jQuery, g = a.$, h, i = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, j = /\S/, k = /^\s+/, l = /\s+$/, m = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, n = /^[\],:{}\s]*$/, o = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, p = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, q = /(?:^|:|,)(?:\s*\[)+/g, r = /(webkit)[ \/]([\w.]+)/, s = /(opera)(?:.*version)?[ \/]([\w.]+)/, t = /(msie) ([\w.]+)/, u = /(mozilla)(?:.*? rv:([\w.]+))?/, v = /-([a-z]|[0-9])/gi, w = /^-ms-/, x = function (a, b) {
                    return (b + '').toUpperCase();
                }, y = d.userAgent, z, A, B, C = Object.prototype.toString, D = Object.prototype.hasOwnProperty, E = Array.prototype.push, F = Array.prototype.slice, G = String.prototype.trim, H = Array.prototype.indexOf, I = {};
            e.fn = e.prototype = {
                constructor: e,
                init: function (a, d, f) {
                    var g, h, j, k;
                    if (!a)
                        return this;
                    if (a.nodeType) {
                        this.context = this[0] = a, this.length = 1;
                        return this;
                    }
                    if (a === 'body' && !d && c.body) {
                        this.context = c, this[0] = c.body, this.selector = a, this.length = 1;
                        return this;
                    }
                    if (typeof a == 'string') {
                        a.charAt(0) !== '<' || a.charAt(a.length - 1) !== '>' || a.length < 3 ? g = i.exec(a) : g = [
                            null,
                            a,
                            null
                        ];
                        if (g && (g[1] || !d)) {
                            if (g[1]) {
                                d = d instanceof e ? d[0] : d, k = d ? d.ownerDocument || d : c, j = m.exec(a), j ? e.isPlainObject(d) ? (a = [c.createElement(j[1])], e.fn.attr.call(a, d, !0)) : a = [k.createElement(j[1])] : (j = e.buildFragment([g[1]], [k]), a = (j.cacheable ? e.clone(j.fragment) : j.fragment).childNodes);
                                return e.merge(this, a);
                            }
                            h = c.getElementById(g[2]);
                            if (h && h.parentNode) {
                                if (h.id !== g[2])
                                    return f.find(a);
                                this.length = 1, this[0] = h;
                            }
                            this.context = c, this.selector = a;
                            return this;
                        }
                        return !d || d.jquery ? (d || f).find(a) : this.constructor(d).find(a);
                    }
                    if (e.isFunction(a))
                        return f.ready(a);
                    a.selector !== b && (this.selector = a.selector, this.context = a.context);
                    return e.makeArray(a, this);
                },
                selector: '',
                jquery: '1.7.1',
                length: 0,
                size: function () {
                    return this.length;
                },
                toArray: function () {
                    return F.call(this, 0);
                },
                get: function (a) {
                    return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a];
                },
                pushStack: function (a, b, c) {
                    var d = this.constructor();
                    e.isArray(a) ? E.apply(d, a) : e.merge(d, a), d.prevObject = this, d.context = this.context, b === 'find' ? d.selector = this.selector + (this.selector ? ' ' : '') + c : b && (d.selector = this.selector + '.' + b + '(' + c + ')');
                    return d;
                },
                each: function (a, b) {
                    return e.each(this, a, b);
                },
                ready: function (a) {
                    e.bindReady(), A.add(a);
                    return this;
                },
                eq: function (a) {
                    a = +a;
                    return a === -1 ? this.slice(a) : this.slice(a, a + 1);
                },
                first: function () {
                    return this.eq(0);
                },
                last: function () {
                    return this.eq(-1);
                },
                slice: function () {
                    return this.pushStack(F.apply(this, arguments), 'slice', F.call(arguments).join(','));
                },
                map: function (a) {
                    return this.pushStack(e.map(this, function (b, c) {
                        return a.call(b, c, b);
                    }));
                },
                end: function () {
                    return this.prevObject || this.constructor(null);
                },
                push: E,
                sort: [].sort,
                splice: [].splice
            }, e.fn.init.prototype = e.fn, e.extend = e.fn.extend = function () {
                var a, c, d, f, g, h, i = arguments[0] || {}, j = 1, k = arguments.length, l = !1;
                typeof i == 'boolean' && (l = i, i = arguments[1] || {}, j = 2), typeof i != 'object' && !e.isFunction(i) && (i = {}), k === j && (i = this, --j);
                for (; j < k; j++)
                    if ((a = arguments[j]) != null)
                        for (c in a) {
                            d = i[c], f = a[c];
                            if (i === f)
                                continue;
                            l && f && (e.isPlainObject(f) || (g = e.isArray(f))) ? (g ? (g = !1, h = d && e.isArray(d) ? d : []) : h = d && e.isPlainObject(d) ? d : {}, i[c] = e.extend(l, h, f)) : f !== b && (i[c] = f);
                        }
                return i;
            }, e.extend({
                noConflict: function (b) {
                    a.$ === e && (a.$ = g), b && a.jQuery === e && (a.jQuery = f);
                    return e;
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function (a) {
                    a ? e.readyWait++ : e.ready(!0);
                },
                ready: function (a) {
                    if (a === !0 && !--e.readyWait || a !== !0 && !e.isReady) {
                        if (!c.body)
                            return setTimeout(e.ready, 1);
                        e.isReady = !0;
                        if (a !== !0 && --e.readyWait > 0)
                            return;
                        A.fireWith(c, [e]), e.fn.trigger && e(c).trigger('ready').off('ready');
                    }
                },
                bindReady: function () {
                    if (!A) {
                        A = e.Callbacks('once memory');
                        if (c.readyState === 'complete')
                            return setTimeout(e.ready, 1);
                        if (c.addEventListener)
                            c.addEventListener('DOMContentLoaded', B, !1), a.addEventListener('load', e.ready, !1);
                        else if (c.attachEvent) {
                            c.attachEvent('onreadystatechange', B), a.attachEvent('onload', e.ready);
                            var b = !1;
                            try {
                                b = a.frameElement == null;
                            } catch (d) {
                            }
                            c.documentElement.doScroll && b && J();
                        }
                    }
                },
                isFunction: function (a) {
                    return e.type(a) === 'function';
                },
                isArray: Array.isArray || function (a) {
                    return e.type(a) === 'array';
                },
                isWindow: function (a) {
                    return a && typeof a == 'object' && 'setInterval' in a;
                },
                isNumeric: function (a) {
                    return !isNaN(parseFloat(a)) && isFinite(a);
                },
                type: function (a) {
                    return a == null ? String(a) : I[C.call(a)] || 'object';
                },
                isPlainObject: function (a) {
                    if (!a || e.type(a) !== 'object' || a.nodeType || e.isWindow(a))
                        return !1;
                    try {
                        if (a.constructor && !D.call(a, 'constructor') && !D.call(a.constructor.prototype, 'isPrototypeOf'))
                            return !1;
                    } catch (c) {
                        return !1;
                    }
                    var d;
                    for (d in a);
                    return d === b || D.call(a, d);
                },
                isEmptyObject: function (a) {
                    for (var b in a)
                        return !1;
                    return !0;
                },
                error: function (a) {
                    throw new Error(a);
                },
                parseJSON: function (b) {
                    if (typeof b != 'string' || !b)
                        return null;
                    b = e.trim(b);
                    if (a.JSON && a.JSON.parse)
                        return a.JSON.parse(b);
                    if (n.test(b.replace(o, '@').replace(p, ']').replace(q, '')))
                        return new Function('return ' + b)();
                    e.error('Invalid JSON: ' + b);
                },
                parseXML: function (c) {
                    var d, f;
                    try {
                        a.DOMParser ? (f = new DOMParser(), d = f.parseFromString(c, 'text/xml')) : (d = new ActiveXObject('Microsoft.XMLDOM'), d.async = 'false', d.loadXML(c));
                    } catch (g) {
                        d = b;
                    }
                    (!d || !d.documentElement || d.getElementsByTagName('parsererror').length) && e.error('Invalid XML: ' + c);
                    return d;
                },
                noop: function () {
                },
                globalEval: function (b) {
                    b && j.test(b) && (a.execScript || function (b) {
                        a.eval.call(a, b);
                    })(b);
                },
                camelCase: function (a) {
                    return a.replace(w, 'ms-').replace(v, x);
                },
                nodeName: function (a, b) {
                    return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase();
                },
                each: function (a, c, d) {
                    var f, g = 0, h = a.length, i = h === b || e.isFunction(a);
                    if (d) {
                        if (i) {
                            for (f in a)
                                if (c.apply(a[f], d) === !1)
                                    break;
                        } else
                            for (; g < h;)
                                if (c.apply(a[g++], d) === !1)
                                    break;
                    } else if (i) {
                        for (f in a)
                            if (c.call(a[f], f, a[f]) === !1)
                                break;
                    } else
                        for (; g < h;)
                            if (c.call(a[g], g, a[g++]) === !1)
                                break;
                    return a;
                },
                trim: G ? function (a) {
                    return a == null ? '' : G.call(a);
                } : function (a) {
                    return a == null ? '' : (a + '').replace(k, '').replace(l, '');
                },
                makeArray: function (a, b) {
                    var c = b || [];
                    if (a != null) {
                        var d = e.type(a);
                        a.length == null || d === 'string' || d === 'function' || d === 'regexp' || e.isWindow(a) ? E.call(c, a) : e.merge(c, a);
                    }
                    return c;
                },
                inArray: function (a, b, c) {
                    var d;
                    if (b) {
                        if (H)
                            return H.call(b, a, c);
                        d = b.length, c = c ? c < 0 ? Math.max(0, d + c) : c : 0;
                        for (; c < d; c++)
                            if (c in b && b[c] === a)
                                return c;
                    }
                    return -1;
                },
                merge: function (a, c) {
                    var d = a.length, e = 0;
                    if (typeof c.length == 'number')
                        for (var f = c.length; e < f; e++)
                            a[d++] = c[e];
                    else
                        while (c[e] !== b)
                            a[d++] = c[e++];
                    a.length = d;
                    return a;
                },
                grep: function (a, b, c) {
                    var d = [], e;
                    c = !!c;
                    for (var f = 0, g = a.length; f < g; f++)
                        e = !!b(a[f], f), c !== e && d.push(a[f]);
                    return d;
                },
                map: function (a, c, d) {
                    var f, g, h = [], i = 0, j = a.length, k = a instanceof e || j !== b && typeof j == 'number' && (j > 0 && a[0] && a[j - 1] || j === 0 || e.isArray(a));
                    if (k)
                        for (; i < j; i++)
                            f = c(a[i], i, d), f != null && (h[h.length] = f);
                    else
                        for (g in a)
                            f = c(a[g], g, d), f != null && (h[h.length] = f);
                    return h.concat.apply([], h);
                },
                guid: 1,
                proxy: function (a, c) {
                    if (typeof c == 'string') {
                        var d = a[c];
                        c = a, a = d;
                    }
                    if (!e.isFunction(a))
                        return b;
                    var f = F.call(arguments, 2), g = function () {
                            return a.apply(c, f.concat(F.call(arguments)));
                        };
                    g.guid = a.guid = a.guid || g.guid || e.guid++;
                    return g;
                },
                access: function (a, c, d, f, g, h) {
                    var i = a.length;
                    if (typeof c == 'object') {
                        for (var j in c)
                            e.access(a, j, c[j], f, g, d);
                        return a;
                    }
                    if (d !== b) {
                        f = !h && f && e.isFunction(d);
                        for (var k = 0; k < i; k++)
                            g(a[k], c, f ? d.call(a[k], k, g(a[k], c)) : d, h);
                        return a;
                    }
                    return i ? g(a[0], c) : b;
                },
                now: function () {
                    return new Date().getTime();
                },
                uaMatch: function (a) {
                    a = a.toLowerCase();
                    var b = r.exec(a) || s.exec(a) || t.exec(a) || a.indexOf('compatible') < 0 && u.exec(a) || [];
                    return {
                        browser: b[1] || '',
                        version: b[2] || '0'
                    };
                },
                sub: function () {
                    function a(b, c) {
                        return new a.fn.init(b, c);
                    }
                    e.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.sub = this.sub, a.fn.init = function (d, f) {
                        f && f instanceof e && !(f instanceof a) && (f = a(f));
                        return e.fn.init.call(this, d, f, b);
                    }, a.fn.init.prototype = a.fn;
                    var b = a(c);
                    return a;
                },
                browser: {}
            }), e.each('Boolean Number String Function Array Date RegExp Object'.split(' '), function (a, b) {
                I['[object ' + b + ']'] = b.toLowerCase();
            }), z = e.uaMatch(y), z.browser && (e.browser[z.browser] = !0, e.browser.version = z.version), e.browser.webkit && (e.browser.safari = !0), j.test('\xA0') && (k = /^[\s\xA0]+/, l = /[\s\xA0]+$/), h = e(c), c.addEventListener ? B = function () {
                c.removeEventListener('DOMContentLoaded', B, !1), e.ready();
            } : c.attachEvent && (B = function () {
                c.readyState === 'complete' && (c.detachEvent('onreadystatechange', B), e.ready());
            });
            return e;
        }(), g = {};
    f.Callbacks = function (a) {
        a = a ? g[a] || h(a) : {};
        var c = [], d = [], e, i, j, k, l, m = function (b) {
                var d, e, g, h, i;
                for (d = 0, e = b.length; d < e; d++)
                    g = b[d], h = f.type(g), h === 'array' ? m(g) : h === 'function' && (!a.unique || !o.has(g)) && c.push(g);
            }, n = function (b, f) {
                f = f || [], e = !a.memory || [
                    b,
                    f
                ], i = !0, l = j || 0, j = 0, k = c.length;
                for (; c && l < k; l++)
                    if (c[l].apply(b, f) === !1 && a.stopOnFalse) {
                        e = !0;
                        break;
                    }
                i = !1, c && (a.once ? e === !0 ? o.disable() : c = [] : d && d.length && (e = d.shift(), o.fireWith(e[0], e[1])));
            }, o = {
                add: function () {
                    if (c) {
                        var a = c.length;
                        m(arguments), i ? k = c.length : e && e !== !0 && (j = a, n(e[0], e[1]));
                    }
                    return this;
                },
                remove: function () {
                    if (c) {
                        var b = arguments, d = 0, e = b.length;
                        for (; d < e; d++)
                            for (var f = 0; f < c.length; f++)
                                if (b[d] === c[f]) {
                                    i && f <= k && (k--, f <= l && l--), c.splice(f--, 1);
                                    if (a.unique)
                                        break;
                                }
                    }
                    return this;
                },
                has: function (a) {
                    if (c) {
                        var b = 0, d = c.length;
                        for (; b < d; b++)
                            if (a === c[b])
                                return !0;
                    }
                    return !1;
                },
                empty: function () {
                    c = [];
                    return this;
                },
                disable: function () {
                    c = d = e = b;
                    return this;
                },
                disabled: function () {
                    return !c;
                },
                lock: function () {
                    d = b, (!e || e === !0) && o.disable();
                    return this;
                },
                locked: function () {
                    return !d;
                },
                fireWith: function (b, c) {
                    d && (i ? a.once || d.push([
                        b,
                        c
                    ]) : (!a.once || !e) && n(b, c));
                    return this;
                },
                fire: function () {
                    o.fireWith(this, arguments);
                    return this;
                },
                fired: function () {
                    return !!e;
                }
            };
        return o;
    };
    var i = [].slice;
    f.extend({
        Deferred: function (a) {
            var b = f.Callbacks('once memory'), c = f.Callbacks('once memory'), d = f.Callbacks('memory'), e = 'pending', g = {
                    resolve: b,
                    reject: c,
                    notify: d
                }, h = {
                    done: b.add,
                    fail: c.add,
                    progress: d.add,
                    state: function () {
                        return e;
                    },
                    isResolved: b.fired,
                    isRejected: c.fired,
                    then: function (a, b, c) {
                        i.done(a).fail(b).progress(c);
                        return this;
                    },
                    always: function () {
                        i.done.apply(i, arguments).fail.apply(i, arguments);
                        return this;
                    },
                    pipe: function (a, b, c) {
                        return f.Deferred(function (d) {
                            f.each({
                                done: [
                                    a,
                                    'resolve'
                                ],
                                fail: [
                                    b,
                                    'reject'
                                ],
                                progress: [
                                    c,
                                    'notify'
                                ]
                            }, function (a, b) {
                                var c = b[0], e = b[1], g;
                                f.isFunction(c) ? i[a](function () {
                                    g = c.apply(this, arguments), g && f.isFunction(g.promise) ? g.promise().then(d.resolve, d.reject, d.notify) : d[e + 'With'](this === i ? d : this, [g]);
                                }) : i[a](d[e]);
                            });
                        }).promise();
                    },
                    promise: function (a) {
                        if (a == null)
                            a = h;
                        else
                            for (var b in h)
                                a[b] = h[b];
                        return a;
                    }
                }, i = h.promise({}), j;
            for (j in g)
                i[j] = g[j].fire, i[j + 'With'] = g[j].fireWith;
            i.done(function () {
                e = 'resolved';
            }, c.disable, d.lock).fail(function () {
                e = 'rejected';
            }, b.disable, d.lock), a && a.call(i, i);
            return i;
        },
        when: function (a) {
            function m(a) {
                return function (b) {
                    e[a] = arguments.length > 1 ? i.call(arguments, 0) : b, j.notifyWith(k, e);
                };
            }
            function l(a) {
                return function (c) {
                    b[a] = arguments.length > 1 ? i.call(arguments, 0) : c, --g || j.resolveWith(j, b);
                };
            }
            var b = i.call(arguments, 0), c = 0, d = b.length, e = Array(d), g = d, h = d, j = d <= 1 && a && f.isFunction(a.promise) ? a : f.Deferred(), k = j.promise();
            if (d > 1) {
                for (; c < d; c++)
                    b[c] && b[c].promise && f.isFunction(b[c].promise) ? b[c].promise().then(l(c), j.reject, m(c)) : --g;
                g || j.resolveWith(j, b);
            } else
                j !== a && j.resolveWith(j, d ? [a] : []);
            return k;
        }
    }), f.support = function () {
        var b, d, e, g, h, i, j, k, l, m, n, o, p, q = c.createElement('div'), r = c.documentElement;
        q.setAttribute('className', 't'), q.innerHTML = '   <link/><table></table><a href=\'/a\' style=\'top:1px;float:left;opacity:.55;\'>a</a><input type=\'checkbox\'/>', d = q.getElementsByTagName('*'), e = q.getElementsByTagName('a')[0];
        if (!d || !d.length || !e)
            return {};
        g = c.createElement('select'), h = g.appendChild(c.createElement('option')), i = q.getElementsByTagName('input')[0], b = {
            leadingWhitespace: q.firstChild.nodeType === 3,
            tbody: !q.getElementsByTagName('tbody').length,
            htmlSerialize: !!q.getElementsByTagName('link').length,
            style: /top/.test(e.getAttribute('style')),
            hrefNormalized: e.getAttribute('href') === '/a',
            opacity: /^0.55/.test(e.style.opacity),
            cssFloat: !!e.style.cssFloat,
            checkOn: i.value === 'on',
            optSelected: h.selected,
            getSetAttribute: q.className !== 't',
            enctype: !!c.createElement('form').enctype,
            html5Clone: c.createElement('nav').cloneNode(!0).outerHTML !== '<:nav></:nav>',
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0
        }, i.checked = !0, b.noCloneChecked = i.cloneNode(!0).checked, g.disabled = !0, b.optDisabled = !h.disabled;
        try {
            delete q.test;
        } catch (s) {
            b.deleteExpando = !1;
        }
        !q.addEventListener && q.attachEvent && q.fireEvent && (q.attachEvent('onclick', function () {
            b.noCloneEvent = !1;
        }), q.cloneNode(!0).fireEvent('onclick')), i = c.createElement('input'), i.value = 't', i.setAttribute('type', 'radio'), b.radioValue = i.value === 't', i.setAttribute('checked', 'checked'), q.appendChild(i), k = c.createDocumentFragment(), k.appendChild(q.lastChild), b.checkClone = k.cloneNode(!0).cloneNode(!0).lastChild.checked, b.appendChecked = i.checked, k.removeChild(i), k.appendChild(q), q.innerHTML = '', a.getComputedStyle && (j = c.createElement('div'), j.style.width = '0', j.style.marginRight = '0', q.style.width = '2px', q.appendChild(j), b.reliableMarginRight = (parseInt((a.getComputedStyle(j, null) || { marginRight: 0 }).marginRight, 10) || 0) === 0);
        if (q.attachEvent)
            for (o in {
                    submit: 1,
                    change: 1,
                    focusin: 1
                })
                n = 'on' + o, p = n in q, p || (q.setAttribute(n, 'return;'), p = typeof q[n] == 'function'), b[o + 'Bubbles'] = p;
        k.removeChild(q), k = g = h = j = q = i = null, f(function () {
            var a, d, e, g, h, i, j, k, m, n, o, r = c.getElementsByTagName('body')[0];
            !r || (j = 1, k = 'position:absolute;top:0;left:0;width:1px;height:1px;margin:0;', m = 'visibility:hidden;border:0;', n = 'style=\'' + k + 'border:5px solid #000;padding:0;\'', o = '<div ' + n + '><div></div></div>' + '<table ' + n + ' cellpadding=\'0\' cellspacing=\'0\'>' + '<tr><td></td></tr></table>', a = c.createElement('div'), a.style.cssText = m + 'width:0;height:0;position:static;top:0;margin-top:' + j + 'px', r.insertBefore(a, r.firstChild), q = c.createElement('div'), a.appendChild(q), q.innerHTML = '<table><tr><td style=\'padding:0;border:0;display:none\'></td><td>t</td></tr></table>', l = q.getElementsByTagName('td'), p = l[0].offsetHeight === 0, l[0].style.display = '', l[1].style.display = 'none', b.reliableHiddenOffsets = p && l[0].offsetHeight === 0, q.innerHTML = '', q.style.width = q.style.paddingLeft = '1px', f.boxModel = b.boxModel = q.offsetWidth === 2, typeof q.style.zoom != 'undefined' && (q.style.display = 'inline', q.style.zoom = 1, b.inlineBlockNeedsLayout = q.offsetWidth === 2, q.style.display = '', q.innerHTML = '<div style=\'width:4px;\'></div>', b.shrinkWrapBlocks = q.offsetWidth !== 2), q.style.cssText = k + m, q.innerHTML = o, d = q.firstChild, e = d.firstChild, h = d.nextSibling.firstChild.firstChild, i = {
                doesNotAddBorder: e.offsetTop !== 5,
                doesAddBorderForTableAndCells: h.offsetTop === 5
            }, e.style.position = 'fixed', e.style.top = '20px', i.fixedPosition = e.offsetTop === 20 || e.offsetTop === 15, e.style.position = e.style.top = '', d.style.overflow = 'hidden', d.style.position = 'relative', i.subtractsBorderForOverflowNotVisible = e.offsetTop === -5, i.doesNotIncludeMarginInBodyOffset = r.offsetTop !== j, r.removeChild(a), q = a = null, f.extend(b, i));
        });
        return b;
    }();
    var j = /^(?:\{.*\}|\[.*\])$/, k = /([A-Z])/g;
    f.extend({
        cache: {},
        uuid: 0,
        expando: 'jQuery' + (f.fn.jquery + Math.random()).replace(/\D/g, ''),
        noData: {
            embed: !0,
            object: 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000',
            applet: !0
        },
        hasData: function (a) {
            a = a.nodeType ? f.cache[a[f.expando]] : a[f.expando];
            return !!a && !m(a);
        },
        data: function (a, c, d, e) {
            if (!!f.acceptData(a)) {
                var g, h, i, j = f.expando, k = typeof c == 'string', l = a.nodeType, m = l ? f.cache : a, n = l ? a[j] : a[j] && j, o = c === 'events';
                if ((!n || !m[n] || !o && !e && !m[n].data) && k && d === b)
                    return;
                n || (l ? a[j] = n = ++f.uuid : n = j), m[n] || (m[n] = {}, l || (m[n].toJSON = f.noop));
                if (typeof c == 'object' || typeof c == 'function')
                    e ? m[n] = f.extend(m[n], c) : m[n].data = f.extend(m[n].data, c);
                g = h = m[n], e || (h.data || (h.data = {}), h = h.data), d !== b && (h[f.camelCase(c)] = d);
                if (o && !h[c])
                    return g.events;
                k ? (i = h[c], i == null && (i = h[f.camelCase(c)])) : i = h;
                return i;
            }
        },
        removeData: function (a, b, c) {
            if (!!f.acceptData(a)) {
                var d, e, g, h = f.expando, i = a.nodeType, j = i ? f.cache : a, k = i ? a[h] : h;
                if (!j[k])
                    return;
                if (b) {
                    d = c ? j[k] : j[k].data;
                    if (d) {
                        f.isArray(b) || (b in d ? b = [b] : (b = f.camelCase(b), b in d ? b = [b] : b = b.split(' ')));
                        for (e = 0, g = b.length; e < g; e++)
                            delete d[b[e]];
                        if (!(c ? m : f.isEmptyObject)(d))
                            return;
                    }
                }
                if (!c) {
                    delete j[k].data;
                    if (!m(j[k]))
                        return;
                }
                f.support.deleteExpando || !j.setInterval ? delete j[k] : j[k] = null, i && (f.support.deleteExpando ? delete a[h] : a.removeAttribute ? a.removeAttribute(h) : a[h] = null);
            }
        },
        _data: function (a, b, c) {
            return f.data(a, b, c, !0);
        },
        acceptData: function (a) {
            if (a.nodeName) {
                var b = f.noData[a.nodeName.toLowerCase()];
                if (b)
                    return b !== !0 && a.getAttribute('classid') === b;
            }
            return !0;
        }
    }), f.fn.extend({
        data: function (a, c) {
            var d, e, g, h = null;
            if (typeof a == 'undefined') {
                if (this.length) {
                    h = f.data(this[0]);
                    if (this[0].nodeType === 1 && !f._data(this[0], 'parsedAttrs')) {
                        e = this[0].attributes;
                        for (var i = 0, j = e.length; i < j; i++)
                            g = e[i].name, g.indexOf('data-') === 0 && (g = f.camelCase(g.substring(5)), l(this[0], g, h[g]));
                        f._data(this[0], 'parsedAttrs', !0);
                    }
                }
                return h;
            }
            if (typeof a == 'object')
                return this.each(function () {
                    f.data(this, a);
                });
            d = a.split('.'), d[1] = d[1] ? '.' + d[1] : '';
            if (c === b) {
                h = this.triggerHandler('getData' + d[1] + '!', [d[0]]), h === b && this.length && (h = f.data(this[0], a), h = l(this[0], a, h));
                return h === b && d[1] ? this.data(d[0]) : h;
            }
            return this.each(function () {
                var b = f(this), e = [
                        d[0],
                        c
                    ];
                b.triggerHandler('setData' + d[1] + '!', e), f.data(this, a, c), b.triggerHandler('changeData' + d[1] + '!', e);
            });
        },
        removeData: function (a) {
            return this.each(function () {
                f.removeData(this, a);
            });
        }
    }), f.extend({
        _mark: function (a, b) {
            a && (b = (b || 'fx') + 'mark', f._data(a, b, (f._data(a, b) || 0) + 1));
        },
        _unmark: function (a, b, c) {
            a !== !0 && (c = b, b = a, a = !1);
            if (b) {
                c = c || 'fx';
                var d = c + 'mark', e = a ? 0 : (f._data(b, d) || 1) - 1;
                e ? f._data(b, d, e) : (f.removeData(b, d, !0), n(b, c, 'mark'));
            }
        },
        queue: function (a, b, c) {
            var d;
            if (a) {
                b = (b || 'fx') + 'queue', d = f._data(a, b), c && (!d || f.isArray(c) ? d = f._data(a, b, f.makeArray(c)) : d.push(c));
                return d || [];
            }
        },
        dequeue: function (a, b) {
            b = b || 'fx';
            var c = f.queue(a, b), d = c.shift(), e = {};
            d === 'inprogress' && (d = c.shift()), d && (b === 'fx' && c.unshift('inprogress'), f._data(a, b + '.run', e), d.call(a, function () {
                f.dequeue(a, b);
            }, e)), c.length || (f.removeData(a, b + 'queue ' + b + '.run', !0), n(a, b, 'queue'));
        }
    }), f.fn.extend({
        queue: function (a, c) {
            typeof a != 'string' && (c = a, a = 'fx');
            if (c === b)
                return f.queue(this[0], a);
            return this.each(function () {
                var b = f.queue(this, a, c);
                a === 'fx' && b[0] !== 'inprogress' && f.dequeue(this, a);
            });
        },
        dequeue: function (a) {
            return this.each(function () {
                f.dequeue(this, a);
            });
        },
        delay: function (a, b) {
            a = f.fx ? f.fx.speeds[a] || a : a, b = b || 'fx';
            return this.queue(b, function (b, c) {
                var d = setTimeout(b, a);
                c.stop = function () {
                    clearTimeout(d);
                };
            });
        },
        clearQueue: function (a) {
            return this.queue(a || 'fx', []);
        },
        promise: function (a, c) {
            function m() {
                --h || d.resolveWith(e, [e]);
            }
            typeof a != 'string' && (c = a, a = b), a = a || 'fx';
            var d = f.Deferred(), e = this, g = e.length, h = 1, i = a + 'defer', j = a + 'queue', k = a + 'mark', l;
            while (g--)
                if (l = f.data(e[g], i, b, !0) || (f.data(e[g], j, b, !0) || f.data(e[g], k, b, !0)) && f.data(e[g], i, f.Callbacks('once memory'), !0))
                    h++, l.add(m);
            m();
            return d.promise();
        }
    });
    var o = /[\n\t\r]/g, p = /\s+/, q = /\r/g, r = /^(?:button|input)$/i, s = /^(?:button|input|object|select|textarea)$/i, t = /^a(?:rea)?$/i, u = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, v = f.support.getSetAttribute, w, x, y;
    f.fn.extend({
        attr: function (a, b) {
            return f.access(this, a, b, !0, f.attr);
        },
        removeAttr: function (a) {
            return this.each(function () {
                f.removeAttr(this, a);
            });
        },
        prop: function (a, b) {
            return f.access(this, a, b, !0, f.prop);
        },
        removeProp: function (a) {
            a = f.propFix[a] || a;
            return this.each(function () {
                try {
                    this[a] = b, delete this[a];
                } catch (c) {
                }
            });
        },
        addClass: function (a) {
            var b, c, d, e, g, h, i;
            if (f.isFunction(a))
                return this.each(function (b) {
                    f(this).addClass(a.call(this, b, this.className));
                });
            if (a && typeof a == 'string') {
                b = a.split(p);
                for (c = 0, d = this.length; c < d; c++) {
                    e = this[c];
                    if (e.nodeType === 1)
                        if (!e.className && b.length === 1)
                            e.className = a;
                        else {
                            g = ' ' + e.className + ' ';
                            for (h = 0, i = b.length; h < i; h++)
                                ~g.indexOf(' ' + b[h] + ' ') || (g += b[h] + ' ');
                            e.className = f.trim(g);
                        }
                }
            }
            return this;
        },
        removeClass: function (a) {
            var c, d, e, g, h, i, j;
            if (f.isFunction(a))
                return this.each(function (b) {
                    f(this).removeClass(a.call(this, b, this.className));
                });
            if (a && typeof a == 'string' || a === b) {
                c = (a || '').split(p);
                for (d = 0, e = this.length; d < e; d++) {
                    g = this[d];
                    if (g.nodeType === 1 && g.className)
                        if (a) {
                            h = (' ' + g.className + ' ').replace(o, ' ');
                            for (i = 0, j = c.length; i < j; i++)
                                h = h.replace(' ' + c[i] + ' ', ' ');
                            g.className = f.trim(h);
                        } else
                            g.className = '';
                }
            }
            return this;
        },
        toggleClass: function (a, b) {
            var c = typeof a, d = typeof b == 'boolean';
            if (f.isFunction(a))
                return this.each(function (c) {
                    f(this).toggleClass(a.call(this, c, this.className, b), b);
                });
            return this.each(function () {
                if (c === 'string') {
                    var e, g = 0, h = f(this), i = b, j = a.split(p);
                    while (e = j[g++])
                        i = d ? i : !h.hasClass(e), h[i ? 'addClass' : 'removeClass'](e);
                } else if (c === 'undefined' || c === 'boolean')
                    this.className && f._data(this, '__className__', this.className), this.className = this.className || a === !1 ? '' : f._data(this, '__className__') || '';
            });
        },
        hasClass: function (a) {
            var b = ' ' + a + ' ', c = 0, d = this.length;
            for (; c < d; c++)
                if (this[c].nodeType === 1 && (' ' + this[c].className + ' ').replace(o, ' ').indexOf(b) > -1)
                    return !0;
            return !1;
        },
        val: function (a) {
            var c, d, e, g = this[0];
            {
                if (!!arguments.length) {
                    e = f.isFunction(a);
                    return this.each(function (d) {
                        var g = f(this), h;
                        if (this.nodeType === 1) {
                            e ? h = a.call(this, d, g.val()) : h = a, h == null ? h = '' : typeof h == 'number' ? h += '' : f.isArray(h) && (h = f.map(h, function (a) {
                                return a == null ? '' : a + '';
                            })), c = f.valHooks[this.nodeName.toLowerCase()] || f.valHooks[this.type];
                            if (!c || !('set' in c) || c.set(this, h, 'value') === b)
                                this.value = h;
                        }
                    });
                }
                if (g) {
                    c = f.valHooks[g.nodeName.toLowerCase()] || f.valHooks[g.type];
                    if (c && 'get' in c && (d = c.get(g, 'value')) !== b)
                        return d;
                    d = g.value;
                    return typeof d == 'string' ? d.replace(q, '') : d == null ? '' : d;
                }
            }
        }
    }), f.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text;
                }
            },
            select: {
                get: function (a) {
                    var b, c, d, e, g = a.selectedIndex, h = [], i = a.options, j = a.type === 'select-one';
                    if (g < 0)
                        return null;
                    c = j ? g : 0, d = j ? g + 1 : i.length;
                    for (; c < d; c++) {
                        e = i[c];
                        if (e.selected && (f.support.optDisabled ? !e.disabled : e.getAttribute('disabled') === null) && (!e.parentNode.disabled || !f.nodeName(e.parentNode, 'optgroup'))) {
                            b = f(e).val();
                            if (j)
                                return b;
                            h.push(b);
                        }
                    }
                    if (j && !h.length && i.length)
                        return f(i[g]).val();
                    return h;
                },
                set: function (a, b) {
                    var c = f.makeArray(b);
                    f(a).find('option').each(function () {
                        this.selected = f.inArray(f(this).val(), c) >= 0;
                    }), c.length || (a.selectedIndex = -1);
                    return c;
                }
            }
        },
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attr: function (a, c, d, e) {
            var g, h, i, j = a.nodeType;
            if (!!a && j !== 3 && j !== 8 && j !== 2) {
                if (e && c in f.attrFn)
                    return f(a)[c](d);
                if (typeof a.getAttribute == 'undefined')
                    return f.prop(a, c, d);
                i = j !== 1 || !f.isXMLDoc(a), i && (c = c.toLowerCase(), h = f.attrHooks[c] || (u.test(c) ? x : w));
                if (d !== b) {
                    if (d === null) {
                        f.removeAttr(a, c);
                        return;
                    }
                    if (h && 'set' in h && i && (g = h.set(a, d, c)) !== b)
                        return g;
                    a.setAttribute(c, '' + d);
                    return d;
                }
                if (h && 'get' in h && i && (g = h.get(a, c)) !== null)
                    return g;
                g = a.getAttribute(c);
                return g === null ? b : g;
            }
        },
        removeAttr: function (a, b) {
            var c, d, e, g, h = 0;
            if (b && a.nodeType === 1) {
                d = b.toLowerCase().split(p), g = d.length;
                for (; h < g; h++)
                    e = d[h], e && (c = f.propFix[e] || e, f.attr(a, e, ''), a.removeAttribute(v ? e : c), u.test(e) && c in a && (a[c] = !1));
            }
        },
        attrHooks: {
            type: {
                set: function (a, b) {
                    if (r.test(a.nodeName) && a.parentNode)
                        f.error('type property can\'t be changed');
                    else if (!f.support.radioValue && b === 'radio' && f.nodeName(a, 'input')) {
                        var c = a.value;
                        a.setAttribute('type', b), c && (a.value = c);
                        return b;
                    }
                }
            },
            value: {
                get: function (a, b) {
                    if (w && f.nodeName(a, 'button'))
                        return w.get(a, b);
                    return b in a ? a.value : null;
                },
                set: function (a, b, c) {
                    if (w && f.nodeName(a, 'button'))
                        return w.set(a, b, c);
                    a.value = b;
                }
            }
        },
        propFix: {
            tabindex: 'tabIndex',
            readonly: 'readOnly',
            'for': 'htmlFor',
            'class': 'className',
            maxlength: 'maxLength',
            cellspacing: 'cellSpacing',
            cellpadding: 'cellPadding',
            rowspan: 'rowSpan',
            colspan: 'colSpan',
            usemap: 'useMap',
            frameborder: 'frameBorder',
            contenteditable: 'contentEditable'
        },
        prop: function (a, c, d) {
            var e, g, h, i = a.nodeType;
            if (!!a && i !== 3 && i !== 8 && i !== 2) {
                h = i !== 1 || !f.isXMLDoc(a), h && (c = f.propFix[c] || c, g = f.propHooks[c]);
                return d !== b ? g && 'set' in g && (e = g.set(a, d, c)) !== b ? e : a[c] = d : g && 'get' in g && (e = g.get(a, c)) !== null ? e : a[c];
            }
        },
        propHooks: {
            tabIndex: {
                get: function (a) {
                    var c = a.getAttributeNode('tabindex');
                    return c && c.specified ? parseInt(c.value, 10) : s.test(a.nodeName) || t.test(a.nodeName) && a.href ? 0 : b;
                }
            }
        }
    }), f.attrHooks.tabindex = f.propHooks.tabIndex, x = {
        get: function (a, c) {
            var d, e = f.prop(a, c);
            return e === !0 || typeof e != 'boolean' && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b;
        },
        set: function (a, b, c) {
            var d;
            b === !1 ? f.removeAttr(a, c) : (d = f.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase()));
            return c;
        }
    }, v || (y = {
        name: !0,
        id: !0
    }, w = f.valHooks.button = {
        get: function (a, c) {
            var d;
            d = a.getAttributeNode(c);
            return d && (y[c] ? d.nodeValue !== '' : d.specified) ? d.nodeValue : b;
        },
        set: function (a, b, d) {
            var e = a.getAttributeNode(d);
            e || (e = c.createAttribute(d), a.setAttributeNode(e));
            return e.nodeValue = b + '';
        }
    }, f.attrHooks.tabindex.set = w.set, f.each([
        'width',
        'height'
    ], function (a, b) {
        f.attrHooks[b] = f.extend(f.attrHooks[b], {
            set: function (a, c) {
                if (c === '') {
                    a.setAttribute(b, 'auto');
                    return c;
                }
            }
        });
    }), f.attrHooks.contenteditable = {
        get: w.get,
        set: function (a, b, c) {
            b === '' && (b = 'false'), w.set(a, b, c);
        }
    }), f.support.hrefNormalized || f.each([
        'href',
        'src',
        'width',
        'height'
    ], function (a, c) {
        f.attrHooks[c] = f.extend(f.attrHooks[c], {
            get: function (a) {
                var d = a.getAttribute(c, 2);
                return d === null ? b : d;
            }
        });
    }), f.support.style || (f.attrHooks.style = {
        get: function (a) {
            return a.style.cssText.toLowerCase() || b;
        },
        set: function (a, b) {
            return a.style.cssText = '' + b;
        }
    }), f.support.optSelected || (f.propHooks.selected = f.extend(f.propHooks.selected, {
        get: function (a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
            return null;
        }
    })), f.support.enctype || (f.propFix.enctype = 'encoding'), f.support.checkOn || f.each([
        'radio',
        'checkbox'
    ], function () {
        f.valHooks[this] = {
            get: function (a) {
                return a.getAttribute('value') === null ? 'on' : a.value;
            }
        };
    }), f.each([
        'radio',
        'checkbox'
    ], function () {
        f.valHooks[this] = f.extend(f.valHooks[this], {
            set: function (a, b) {
                if (f.isArray(b))
                    return a.checked = f.inArray(f(a).val(), b) >= 0;
            }
        });
    });
    var z = /^(?:textarea|input|select)$/i, A = /^([^\.]*)?(?:\.(.+))?$/, B = /\bhover(\.\S+)?\b/, C = /^key/, D = /^(?:mouse|contextmenu)|click/, E = /^(?:focusinfocus|focusoutblur)$/, F = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/, G = function (a) {
            var b = F.exec(a);
            b && (b[1] = (b[1] || '').toLowerCase(), b[3] = b[3] && new RegExp('(?:^|\\s)' + b[3] + '(?:\\s|$)'));
            return b;
        }, H = function (a, b) {
            var c = a.attributes || {};
            return (!b[1] || a.nodeName.toLowerCase() === b[1]) && (!b[2] || (c.id || {}).value === b[2]) && (!b[3] || b[3].test((c['class'] || {}).value));
        }, I = function (a) {
            return f.event.special.hover ? a : a.replace(B, 'mouseenter$1 mouseleave$1');
        };
    f.event = {
        add: function (a, c, d, e, g) {
            var h, i, j, k, l, m, n, o, p, q, r, s;
            if (!(a.nodeType === 3 || a.nodeType === 8 || !c || !d || !(h = f._data(a)))) {
                d.handler && (p = d, d = p.handler), d.guid || (d.guid = f.guid++), j = h.events, j || (h.events = j = {}), i = h.handle, i || (h.handle = i = function (a) {
                    return typeof f != 'undefined' && (!a || f.event.triggered !== a.type) ? f.event.dispatch.apply(i.elem, arguments) : b;
                }, i.elem = a), c = f.trim(I(c)).split(' ');
                for (k = 0; k < c.length; k++) {
                    l = A.exec(c[k]) || [], m = l[1], n = (l[2] || '').split('.').sort(), s = f.event.special[m] || {}, m = (g ? s.delegateType : s.bindType) || m, s = f.event.special[m] || {}, o = f.extend({
                        type: m,
                        origType: l[1],
                        data: e,
                        handler: d,
                        guid: d.guid,
                        selector: g,
                        quick: G(g),
                        namespace: n.join('.')
                    }, p), r = j[m];
                    if (!r) {
                        r = j[m] = [], r.delegateCount = 0;
                        if (!s.setup || s.setup.call(a, e, n, i) === !1)
                            a.addEventListener ? a.addEventListener(m, i, !1) : a.attachEvent && a.attachEvent('on' + m, i);
                    }
                    s.add && (s.add.call(a, o), o.handler.guid || (o.handler.guid = d.guid)), g ? r.splice(r.delegateCount++, 0, o) : r.push(o), f.event.global[m] = !0;
                }
                a = null;
            }
        },
        global: {},
        remove: function (a, b, c, d, e) {
            var g = f.hasData(a) && f._data(a), h, i, j, k, l, m, n, o, p, q, r, s;
            if (!!g && !!(o = g.events)) {
                b = f.trim(I(b || '')).split(' ');
                for (h = 0; h < b.length; h++) {
                    i = A.exec(b[h]) || [], j = k = i[1], l = i[2];
                    if (!j) {
                        for (j in o)
                            f.event.remove(a, j + b[h], c, d, !0);
                        continue;
                    }
                    p = f.event.special[j] || {}, j = (d ? p.delegateType : p.bindType) || j, r = o[j] || [], m = r.length, l = l ? new RegExp('(^|\\.)' + l.split('.').sort().join('\\.(?:.*\\.)?') + '(\\.|$)') : null;
                    for (n = 0; n < r.length; n++)
                        s = r[n], (e || k === s.origType) && (!c || c.guid === s.guid) && (!l || l.test(s.namespace)) && (!d || d === s.selector || d === '**' && s.selector) && (r.splice(n--, 1), s.selector && r.delegateCount--, p.remove && p.remove.call(a, s));
                    r.length === 0 && m !== r.length && ((!p.teardown || p.teardown.call(a, l) === !1) && f.removeEvent(a, j, g.handle), delete o[j]);
                }
                f.isEmptyObject(o) && (q = g.handle, q && (q.elem = null), f.removeData(a, [
                    'events',
                    'handle'
                ], !0));
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function (c, d, e, g) {
            if (!e || e.nodeType !== 3 && e.nodeType !== 8) {
                var h = c.type || c, i = [], j, k, l, m, n, o, p, q, r, s;
                if (E.test(h + f.event.triggered))
                    return;
                h.indexOf('!') >= 0 && (h = h.slice(0, -1), k = !0), h.indexOf('.') >= 0 && (i = h.split('.'), h = i.shift(), i.sort());
                if ((!e || f.event.customEvent[h]) && !f.event.global[h])
                    return;
                c = typeof c == 'object' ? c[f.expando] ? c : new f.Event(h, c) : new f.Event(h), c.type = h, c.isTrigger = !0, c.exclusive = k, c.namespace = i.join('.'), c.namespace_re = c.namespace ? new RegExp('(^|\\.)' + i.join('\\.(?:.*\\.)?') + '(\\.|$)') : null, o = h.indexOf(':') < 0 ? 'on' + h : '';
                if (!e) {
                    j = f.cache;
                    for (l in j)
                        j[l].events && j[l].events[h] && f.event.trigger(c, d, j[l].handle.elem, !0);
                    return;
                }
                c.result = b, c.target || (c.target = e), d = d != null ? f.makeArray(d) : [], d.unshift(c), p = f.event.special[h] || {};
                if (p.trigger && p.trigger.apply(e, d) === !1)
                    return;
                r = [[
                        e,
                        p.bindType || h
                    ]];
                if (!g && !p.noBubble && !f.isWindow(e)) {
                    s = p.delegateType || h, m = E.test(s + h) ? e : e.parentNode, n = null;
                    for (; m; m = m.parentNode)
                        r.push([
                            m,
                            s
                        ]), n = m;
                    n && n === e.ownerDocument && r.push([
                        n.defaultView || n.parentWindow || a,
                        s
                    ]);
                }
                for (l = 0; l < r.length && !c.isPropagationStopped(); l++)
                    m = r[l][0], c.type = r[l][1], q = (f._data(m, 'events') || {})[c.type] && f._data(m, 'handle'), q && q.apply(m, d), q = o && m[o], q && f.acceptData(m) && q.apply(m, d) === !1 && c.preventDefault();
                c.type = h, !g && !c.isDefaultPrevented() && (!p._default || p._default.apply(e.ownerDocument, d) === !1) && (h !== 'click' || !f.nodeName(e, 'a')) && f.acceptData(e) && o && e[h] && (h !== 'focus' && h !== 'blur' || c.target.offsetWidth !== 0) && !f.isWindow(e) && (n = e[o], n && (e[o] = null), f.event.triggered = h, e[h](), f.event.triggered = b, n && (e[o] = n));
                return c.result;
            }
        },
        dispatch: function (c) {
            c = f.event.fix(c || a.event);
            var d = (f._data(this, 'events') || {})[c.type] || [], e = d.delegateCount, g = [].slice.call(arguments, 0), h = !c.exclusive && !c.namespace, i = [], j, k, l, m, n, o, p, q, r, s, t;
            g[0] = c, c.delegateTarget = this;
            if (e && !c.target.disabled && (!c.button || c.type !== 'click')) {
                m = f(this), m.context = this.ownerDocument || this;
                for (l = c.target; l != this; l = l.parentNode || this) {
                    o = {}, q = [], m[0] = l;
                    for (j = 0; j < e; j++)
                        r = d[j], s = r.selector, o[s] === b && (o[s] = r.quick ? H(l, r.quick) : m.is(s)), o[s] && q.push(r);
                    q.length && i.push({
                        elem: l,
                        matches: q
                    });
                }
            }
            d.length > e && i.push({
                elem: this,
                matches: d.slice(e)
            });
            for (j = 0; j < i.length && !c.isPropagationStopped(); j++) {
                p = i[j], c.currentTarget = p.elem;
                for (k = 0; k < p.matches.length && !c.isImmediatePropagationStopped(); k++) {
                    r = p.matches[k];
                    if (h || !c.namespace && !r.namespace || c.namespace_re && c.namespace_re.test(r.namespace))
                        c.data = r.data, c.handleObj = r, n = ((f.event.special[r.origType] || {}).handle || r.handler).apply(p.elem, g), n !== b && (c.result = n, n === !1 && (c.preventDefault(), c.stopPropagation()));
                }
            }
            return c.result;
        },
        props: 'attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(' '),
        fixHooks: {},
        keyHooks: {
            props: 'char charCode key keyCode'.split(' '),
            filter: function (a, b) {
                a.which == null && (a.which = b.charCode != null ? b.charCode : b.keyCode);
                return a;
            }
        },
        mouseHooks: {
            props: 'button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement'.split(' '),
            filter: function (a, d) {
                var e, f, g, h = d.button, i = d.fromElement;
                a.pageX == null && d.clientX != null && (e = a.target.ownerDocument || c, f = e.documentElement, g = e.body, a.pageX = d.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0) - (f && f.clientLeft || g && g.clientLeft || 0), a.pageY = d.clientY + (f && f.scrollTop || g && g.scrollTop || 0) - (f && f.clientTop || g && g.clientTop || 0)), !a.relatedTarget && i && (a.relatedTarget = i === a.target ? d.toElement : i), !a.which && h !== b && (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0);
                return a;
            }
        },
        fix: function (a) {
            if (a[f.expando])
                return a;
            var d, e, g = a, h = f.event.fixHooks[a.type] || {}, i = h.props ? this.props.concat(h.props) : this.props;
            a = f.Event(g);
            for (d = i.length; d;)
                e = i[--d], a[e] = g[e];
            a.target || (a.target = g.srcElement || c), a.target.nodeType === 3 && (a.target = a.target.parentNode), a.metaKey === b && (a.metaKey = a.ctrlKey);
            return h.filter ? h.filter(a, g) : a;
        },
        special: {
            ready: { setup: f.bindReady },
            load: { noBubble: !0 },
            focus: { delegateType: 'focusin' },
            blur: { delegateType: 'focusout' },
            beforeunload: {
                setup: function (a, b, c) {
                    f.isWindow(this) && (this.onbeforeunload = c);
                },
                teardown: function (a, b) {
                    this.onbeforeunload === b && (this.onbeforeunload = null);
                }
            }
        },
        simulate: function (a, b, c, d) {
            var e = f.extend(new f.Event(), c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? f.event.trigger(e, null, b) : f.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
        }
    }, f.event.handle = f.event.dispatch, f.removeEvent = c.removeEventListener ? function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1);
    } : function (a, b, c) {
        a.detachEvent && a.detachEvent('on' + b, c);
    }, f.Event = function (a, b) {
        if (!(this instanceof f.Event))
            return new f.Event(a, b);
        a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? K : J) : this.type = a, b && f.extend(this, b), this.timeStamp = a && a.timeStamp || f.now(), this[f.expando] = !0;
    }, f.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = K;
            var a = this.originalEvent;
            !a || (a.preventDefault ? a.preventDefault() : a.returnValue = !1);
        },
        stopPropagation: function () {
            this.isPropagationStopped = K;
            var a = this.originalEvent;
            !a || (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0);
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = K, this.stopPropagation();
        },
        isDefaultPrevented: J,
        isPropagationStopped: J,
        isImmediatePropagationStopped: J
    }, f.each({
        mouseenter: 'mouseover',
        mouseleave: 'mouseout'
    }, function (a, b) {
        f.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function (a) {
                var c = this, d = a.relatedTarget, e = a.handleObj, g = e.selector, h;
                if (!d || d !== c && !f.contains(c, d))
                    a.type = e.origType, h = e.handler.apply(this, arguments), a.type = b;
                return h;
            }
        };
    }), f.support.submitBubbles || (f.event.special.submit = {
        setup: function () {
            if (f.nodeName(this, 'form'))
                return !1;
            f.event.add(this, 'click._submit keypress._submit', function (a) {
                var c = a.target, d = f.nodeName(c, 'input') || f.nodeName(c, 'button') ? c.form : b;
                d && !d._submit_attached && (f.event.add(d, 'submit._submit', function (a) {
                    this.parentNode && !a.isTrigger && f.event.simulate('submit', this.parentNode, a, !0);
                }), d._submit_attached = !0);
            });
        },
        teardown: function () {
            if (f.nodeName(this, 'form'))
                return !1;
            f.event.remove(this, '._submit');
        }
    }), f.support.changeBubbles || (f.event.special.change = {
        setup: function () {
            if (z.test(this.nodeName)) {
                if (this.type === 'checkbox' || this.type === 'radio')
                    f.event.add(this, 'propertychange._change', function (a) {
                        a.originalEvent.propertyName === 'checked' && (this._just_changed = !0);
                    }), f.event.add(this, 'click._change', function (a) {
                        this._just_changed && !a.isTrigger && (this._just_changed = !1, f.event.simulate('change', this, a, !0));
                    });
                return !1;
            }
            f.event.add(this, 'beforeactivate._change', function (a) {
                var b = a.target;
                z.test(b.nodeName) && !b._change_attached && (f.event.add(b, 'change._change', function (a) {
                    this.parentNode && !a.isSimulated && !a.isTrigger && f.event.simulate('change', this.parentNode, a, !0);
                }), b._change_attached = !0);
            });
        },
        handle: function (a) {
            var b = a.target;
            if (this !== b || a.isSimulated || a.isTrigger || b.type !== 'radio' && b.type !== 'checkbox')
                return a.handleObj.handler.apply(this, arguments);
        },
        teardown: function () {
            f.event.remove(this, '._change');
            return z.test(this.nodeName);
        }
    }), f.support.focusinBubbles || f.each({
        focus: 'focusin',
        blur: 'focusout'
    }, function (a, b) {
        var d = 0, e = function (a) {
                f.event.simulate(b, a.target, f.event.fix(a), !0);
            };
        f.event.special[b] = {
            setup: function () {
                d++ === 0 && c.addEventListener(a, e, !0);
            },
            teardown: function () {
                --d === 0 && c.removeEventListener(a, e, !0);
            }
        };
    }), f.fn.extend({
        on: function (a, c, d, e, g) {
            var h, i;
            if (typeof a == 'object') {
                typeof c != 'string' && (d = c, c = b);
                for (i in a)
                    this.on(i, c, d, a[i], g);
                return this;
            }
            d == null && e == null ? (e = c, d = c = b) : e == null && (typeof c == 'string' ? (e = d, d = b) : (e = d, d = c, c = b));
            if (e === !1)
                e = J;
            else if (!e)
                return this;
            g === 1 && (h = e, e = function (a) {
                f().off(a);
                return h.apply(this, arguments);
            }, e.guid = h.guid || (h.guid = f.guid++));
            return this.each(function () {
                f.event.add(this, a, e, d, c);
            });
        },
        one: function (a, b, c, d) {
            return this.on.call(this, a, b, c, d, 1);
        },
        off: function (a, c, d) {
            if (a && a.preventDefault && a.handleObj) {
                var e = a.handleObj;
                f(a.delegateTarget).off(e.namespace ? e.type + '.' + e.namespace : e.type, e.selector, e.handler);
                return this;
            }
            if (typeof a == 'object') {
                for (var g in a)
                    this.off(g, c, a[g]);
                return this;
            }
            if (c === !1 || typeof c == 'function')
                d = c, c = b;
            d === !1 && (d = J);
            return this.each(function () {
                f.event.remove(this, a, d, c);
            });
        },
        bind: function (a, b, c) {
            return this.on(a, null, b, c);
        },
        unbind: function (a, b) {
            return this.off(a, null, b);
        },
        live: function (a, b, c) {
            f(this.context).on(a, this.selector, b, c);
            return this;
        },
        die: function (a, b) {
            f(this.context).off(a, this.selector || '**', b);
            return this;
        },
        delegate: function (a, b, c, d) {
            return this.on(b, a, c, d);
        },
        undelegate: function (a, b, c) {
            return arguments.length == 1 ? this.off(a, '**') : this.off(b, a, c);
        },
        trigger: function (a, b) {
            return this.each(function () {
                f.event.trigger(a, b, this);
            });
        },
        triggerHandler: function (a, b) {
            if (this[0])
                return f.event.trigger(a, b, this[0], !0);
        },
        toggle: function (a) {
            var b = arguments, c = a.guid || f.guid++, d = 0, e = function (c) {
                    var e = (f._data(this, 'lastToggle' + a.guid) || 0) % d;
                    f._data(this, 'lastToggle' + a.guid, e + 1), c.preventDefault();
                    return b[e].apply(this, arguments) || !1;
                };
            e.guid = c;
            while (d < b.length)
                b[d++].guid = c;
            return this.click(e);
        },
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a);
        }
    }), f.each('blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(' '), function (a, b) {
        f.fn[b] = function (a, c) {
            c == null && (c = a, a = null);
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
        }, f.attrFn && (f.attrFn[b] = !0), C.test(b) && (f.event.fixHooks[b] = f.event.keyHooks), D.test(b) && (f.event.fixHooks[b] = f.event.mouseHooks);
    }), function () {
        function x(a, b, c, e, f, g) {
            for (var h = 0, i = e.length; h < i; h++) {
                var j = e[h];
                if (j) {
                    var k = !1;
                    j = j[a];
                    while (j) {
                        if (j[d] === c) {
                            k = e[j.sizset];
                            break;
                        }
                        if (j.nodeType === 1) {
                            g || (j[d] = c, j.sizset = h);
                            if (typeof b != 'string') {
                                if (j === b) {
                                    k = !0;
                                    break;
                                }
                            } else if (m.filter(b, [j]).length > 0) {
                                k = j;
                                break;
                            }
                        }
                        j = j[a];
                    }
                    e[h] = k;
                }
            }
        }
        function w(a, b, c, e, f, g) {
            for (var h = 0, i = e.length; h < i; h++) {
                var j = e[h];
                if (j) {
                    var k = !1;
                    j = j[a];
                    while (j) {
                        if (j[d] === c) {
                            k = e[j.sizset];
                            break;
                        }
                        j.nodeType === 1 && !g && (j[d] = c, j.sizset = h);
                        if (j.nodeName.toLowerCase() === b) {
                            k = j;
                            break;
                        }
                        j = j[a];
                    }
                    e[h] = k;
                }
            }
        }
        var a = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g, d = 'sizcache' + (Math.random() + '').replace('.', ''), e = 0, g = Object.prototype.toString, h = !1, i = !0, j = /\\/g, k = /\r\n/g, l = /\W/;
        [
            0,
            0
        ].sort(function () {
            i = !1;
            return 0;
        });
        var m = function (b, d, e, f) {
            e = e || [], d = d || c;
            var h = d;
            if (d.nodeType !== 1 && d.nodeType !== 9)
                return [];
            if (!b || typeof b != 'string')
                return e;
            var i, j, k, l, n, q, r, t, u = !0, v = m.isXML(d), w = [], x = b;
            do {
                a.exec(''), i = a.exec(x);
                if (i) {
                    x = i[3], w.push(i[1]);
                    if (i[2]) {
                        l = i[3];
                        break;
                    }
                }
            } while (i);
            if (w.length > 1 && p.exec(b))
                if (w.length === 2 && o.relative[w[0]])
                    j = y(w[0] + w[1], d, f);
                else {
                    j = o.relative[w[0]] ? [d] : m(w.shift(), d);
                    while (w.length)
                        b = w.shift(), o.relative[b] && (b += w.shift()), j = y(b, j, f);
                }
            else {
                !f && w.length > 1 && d.nodeType === 9 && !v && o.match.ID.test(w[0]) && !o.match.ID.test(w[w.length - 1]) && (n = m.find(w.shift(), d, v), d = n.expr ? m.filter(n.expr, n.set)[0] : n.set[0]);
                if (d) {
                    n = f ? {
                        expr: w.pop(),
                        set: s(f)
                    } : m.find(w.pop(), w.length === 1 && (w[0] === '~' || w[0] === '+') && d.parentNode ? d.parentNode : d, v), j = n.expr ? m.filter(n.expr, n.set) : n.set, w.length > 0 ? k = s(j) : u = !1;
                    while (w.length)
                        q = w.pop(), r = q, o.relative[q] ? r = w.pop() : q = '', r == null && (r = d), o.relative[q](k, r, v);
                } else
                    k = w = [];
            }
            k || (k = j), k || m.error(q || b);
            if (g.call(k) === '[object Array]')
                if (!u)
                    e.push.apply(e, k);
                else if (d && d.nodeType === 1)
                    for (t = 0; k[t] != null; t++)
                        k[t] && (k[t] === !0 || k[t].nodeType === 1 && m.contains(d, k[t])) && e.push(j[t]);
                else
                    for (t = 0; k[t] != null; t++)
                        k[t] && k[t].nodeType === 1 && e.push(j[t]);
            else
                s(k, e);
            l && (m(l, h, e, f), m.uniqueSort(e));
            return e;
        };
        m.uniqueSort = function (a) {
            if (u) {
                h = i, a.sort(u);
                if (h)
                    for (var b = 1; b < a.length; b++)
                        a[b] === a[b - 1] && a.splice(b--, 1);
            }
            return a;
        }, m.matches = function (a, b) {
            return m(a, null, null, b);
        }, m.matchesSelector = function (a, b) {
            return m(b, null, null, [a]).length > 0;
        }, m.find = function (a, b, c) {
            var d, e, f, g, h, i;
            if (!a)
                return [];
            for (e = 0, f = o.order.length; e < f; e++) {
                h = o.order[e];
                if (g = o.leftMatch[h].exec(a)) {
                    i = g[1], g.splice(1, 1);
                    if (i.substr(i.length - 1) !== '\\') {
                        g[1] = (g[1] || '').replace(j, ''), d = o.find[h](g, b, c);
                        if (d != null) {
                            a = a.replace(o.match[h], '');
                            break;
                        }
                    }
                }
            }
            d || (d = typeof b.getElementsByTagName != 'undefined' ? b.getElementsByTagName('*') : []);
            return {
                set: d,
                expr: a
            };
        }, m.filter = function (a, c, d, e) {
            var f, g, h, i, j, k, l, n, p, q = a, r = [], s = c, t = c && c[0] && m.isXML(c[0]);
            while (a && c.length) {
                for (h in o.filter)
                    if ((f = o.leftMatch[h].exec(a)) != null && f[2]) {
                        k = o.filter[h], l = f[1], g = !1, f.splice(1, 1);
                        if (l.substr(l.length - 1) === '\\')
                            continue;
                        s === r && (r = []);
                        if (o.preFilter[h]) {
                            f = o.preFilter[h](f, s, d, r, e, t);
                            if (!f)
                                g = i = !0;
                            else if (f === !0)
                                continue;
                        }
                        if (f)
                            for (n = 0; (j = s[n]) != null; n++)
                                j && (i = k(j, f, n, s), p = e ^ i, d && i != null ? p ? g = !0 : s[n] = !1 : p && (r.push(j), g = !0));
                        if (i !== b) {
                            d || (s = r), a = a.replace(o.match[h], '');
                            if (!g)
                                return [];
                            break;
                        }
                    }
                if (a === q)
                    if (g == null)
                        m.error(a);
                    else
                        break;
                q = a;
            }
            return s;
        }, m.error = function (a) {
            throw new Error('Syntax error, unrecognized expression: ' + a);
        };
        var n = m.getText = function (a) {
                var b, c, d = a.nodeType, e = '';
                if (d) {
                    if (d === 1 || d === 9) {
                        if (typeof a.textContent == 'string')
                            return a.textContent;
                        if (typeof a.innerText == 'string')
                            return a.innerText.replace(k, '');
                        for (a = a.firstChild; a; a = a.nextSibling)
                            e += n(a);
                    } else if (d === 3 || d === 4)
                        return a.nodeValue;
                } else
                    for (b = 0; c = a[b]; b++)
                        c.nodeType !== 8 && (e += n(c));
                return e;
            }, o = m.selectors = {
                order: [
                    'ID',
                    'NAME',
                    'TAG'
                ],
                match: {
                    ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                    CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                    NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                    ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                    TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                    CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                    POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                    PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
                },
                leftMatch: {},
                attrMap: {
                    'class': 'className',
                    'for': 'htmlFor'
                },
                attrHandle: {
                    href: function (a) {
                        return a.getAttribute('href');
                    },
                    type: function (a) {
                        return a.getAttribute('type');
                    }
                },
                relative: {
                    '+': function (a, b) {
                        var c = typeof b == 'string', d = c && !l.test(b), e = c && !d;
                        d && (b = b.toLowerCase());
                        for (var f = 0, g = a.length, h; f < g; f++)
                            if (h = a[f]) {
                                while ((h = h.previousSibling) && h.nodeType !== 1);
                                a[f] = e || h && h.nodeName.toLowerCase() === b ? h || !1 : h === b;
                            }
                        e && m.filter(b, a, !0);
                    },
                    '>': function (a, b) {
                        var c, d = typeof b == 'string', e = 0, f = a.length;
                        if (d && !l.test(b)) {
                            b = b.toLowerCase();
                            for (; e < f; e++) {
                                c = a[e];
                                if (c) {
                                    var g = c.parentNode;
                                    a[e] = g.nodeName.toLowerCase() === b ? g : !1;
                                }
                            }
                        } else {
                            for (; e < f; e++)
                                c = a[e], c && (a[e] = d ? c.parentNode : c.parentNode === b);
                            d && m.filter(b, a, !0);
                        }
                    },
                    '': function (a, b, c) {
                        var d, f = e++, g = x;
                        typeof b == 'string' && !l.test(b) && (b = b.toLowerCase(), d = b, g = w), g('parentNode', b, f, a, d, c);
                    },
                    '~': function (a, b, c) {
                        var d, f = e++, g = x;
                        typeof b == 'string' && !l.test(b) && (b = b.toLowerCase(), d = b, g = w), g('previousSibling', b, f, a, d, c);
                    }
                },
                find: {
                    ID: function (a, b, c) {
                        if (typeof b.getElementById != 'undefined' && !c) {
                            var d = b.getElementById(a[1]);
                            return d && d.parentNode ? [d] : [];
                        }
                    },
                    NAME: function (a, b) {
                        if (typeof b.getElementsByName != 'undefined') {
                            var c = [], d = b.getElementsByName(a[1]);
                            for (var e = 0, f = d.length; e < f; e++)
                                d[e].getAttribute('name') === a[1] && c.push(d[e]);
                            return c.length === 0 ? null : c;
                        }
                    },
                    TAG: function (a, b) {
                        if (typeof b.getElementsByTagName != 'undefined')
                            return b.getElementsByTagName(a[1]);
                    }
                },
                preFilter: {
                    CLASS: function (a, b, c, d, e, f) {
                        a = ' ' + a[1].replace(j, '') + ' ';
                        if (f)
                            return a;
                        for (var g = 0, h; (h = b[g]) != null; g++)
                            h && (e ^ (h.className && (' ' + h.className + ' ').replace(/[\t\n\r]/g, ' ').indexOf(a) >= 0) ? c || d.push(h) : c && (b[g] = !1));
                        return !1;
                    },
                    ID: function (a) {
                        return a[1].replace(j, '');
                    },
                    TAG: function (a, b) {
                        return a[1].replace(j, '').toLowerCase();
                    },
                    CHILD: function (a) {
                        if (a[1] === 'nth') {
                            a[2] || m.error(a[0]), a[2] = a[2].replace(/^\+|\s*/g, '');
                            var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2] === 'even' && '2n' || a[2] === 'odd' && '2n+1' || !/\D/.test(a[2]) && '0n+' + a[2] || a[2]);
                            a[2] = b[1] + (b[2] || 1) - 0, a[3] = b[3] - 0;
                        } else
                            a[2] && m.error(a[0]);
                        a[0] = e++;
                        return a;
                    },
                    ATTR: function (a, b, c, d, e, f) {
                        var g = a[1] = a[1].replace(j, '');
                        !f && o.attrMap[g] && (a[1] = o.attrMap[g]), a[4] = (a[4] || a[5] || '').replace(j, ''), a[2] === '~=' && (a[4] = ' ' + a[4] + ' ');
                        return a;
                    },
                    PSEUDO: function (b, c, d, e, f) {
                        if (b[1] === 'not')
                            if ((a.exec(b[3]) || '').length > 1 || /^\w/.test(b[3]))
                                b[3] = m(b[3], null, null, c);
                            else {
                                var g = m.filter(b[3], c, d, !0 ^ f);
                                d || e.push.apply(e, g);
                                return !1;
                            }
                        else if (o.match.POS.test(b[0]) || o.match.CHILD.test(b[0]))
                            return !0;
                        return b;
                    },
                    POS: function (a) {
                        a.unshift(!0);
                        return a;
                    }
                },
                filters: {
                    enabled: function (a) {
                        return a.disabled === !1 && a.type !== 'hidden';
                    },
                    disabled: function (a) {
                        return a.disabled === !0;
                    },
                    checked: function (a) {
                        return a.checked === !0;
                    },
                    selected: function (a) {
                        a.parentNode && a.parentNode.selectedIndex;
                        return a.selected === !0;
                    },
                    parent: function (a) {
                        return !!a.firstChild;
                    },
                    empty: function (a) {
                        return !a.firstChild;
                    },
                    has: function (a, b, c) {
                        return !!m(c[3], a).length;
                    },
                    header: function (a) {
                        return /h\d/i.test(a.nodeName);
                    },
                    text: function (a) {
                        var b = a.getAttribute('type'), c = a.type;
                        return a.nodeName.toLowerCase() === 'input' && 'text' === c && (b === c || b === null);
                    },
                    radio: function (a) {
                        return a.nodeName.toLowerCase() === 'input' && 'radio' === a.type;
                    },
                    checkbox: function (a) {
                        return a.nodeName.toLowerCase() === 'input' && 'checkbox' === a.type;
                    },
                    file: function (a) {
                        return a.nodeName.toLowerCase() === 'input' && 'file' === a.type;
                    },
                    password: function (a) {
                        return a.nodeName.toLowerCase() === 'input' && 'password' === a.type;
                    },
                    submit: function (a) {
                        var b = a.nodeName.toLowerCase();
                        return (b === 'input' || b === 'button') && 'submit' === a.type;
                    },
                    image: function (a) {
                        return a.nodeName.toLowerCase() === 'input' && 'image' === a.type;
                    },
                    reset: function (a) {
                        var b = a.nodeName.toLowerCase();
                        return (b === 'input' || b === 'button') && 'reset' === a.type;
                    },
                    button: function (a) {
                        var b = a.nodeName.toLowerCase();
                        return b === 'input' && 'button' === a.type || b === 'button';
                    },
                    input: function (a) {
                        return /input|select|textarea|button/i.test(a.nodeName);
                    },
                    focus: function (a) {
                        return a === a.ownerDocument.activeElement;
                    }
                },
                setFilters: {
                    first: function (a, b) {
                        return b === 0;
                    },
                    last: function (a, b, c, d) {
                        return b === d.length - 1;
                    },
                    even: function (a, b) {
                        return b % 2 === 0;
                    },
                    odd: function (a, b) {
                        return b % 2 === 1;
                    },
                    lt: function (a, b, c) {
                        return b < c[3] - 0;
                    },
                    gt: function (a, b, c) {
                        return b > c[3] - 0;
                    },
                    nth: function (a, b, c) {
                        return c[3] - 0 === b;
                    },
                    eq: function (a, b, c) {
                        return c[3] - 0 === b;
                    }
                },
                filter: {
                    PSEUDO: function (a, b, c, d) {
                        var e = b[1], f = o.filters[e];
                        if (f)
                            return f(a, c, b, d);
                        if (e === 'contains')
                            return (a.textContent || a.innerText || n([a]) || '').indexOf(b[3]) >= 0;
                        if (e === 'not') {
                            var g = b[3];
                            for (var h = 0, i = g.length; h < i; h++)
                                if (g[h] === a)
                                    return !1;
                            return !0;
                        }
                        m.error(e);
                    },
                    CHILD: function (a, b) {
                        var c, e, f, g, h, i, j, k = b[1], l = a;
                        switch (k) {
                        case 'only':
                        case 'first':
                            while (l = l.previousSibling)
                                if (l.nodeType === 1)
                                    return !1;
                            if (k === 'first')
                                return !0;
                            l = a;
                        case 'last':
                            while (l = l.nextSibling)
                                if (l.nodeType === 1)
                                    return !1;
                            return !0;
                        case 'nth':
                            c = b[2], e = b[3];
                            if (c === 1 && e === 0)
                                return !0;
                            f = b[0], g = a.parentNode;
                            if (g && (g[d] !== f || !a.nodeIndex)) {
                                i = 0;
                                for (l = g.firstChild; l; l = l.nextSibling)
                                    l.nodeType === 1 && (l.nodeIndex = ++i);
                                g[d] = f;
                            }
                            j = a.nodeIndex - e;
                            return c === 0 ? j === 0 : j % c === 0 && j / c >= 0;
                        }
                    },
                    ID: function (a, b) {
                        return a.nodeType === 1 && a.getAttribute('id') === b;
                    },
                    TAG: function (a, b) {
                        return b === '*' && a.nodeType === 1 || !!a.nodeName && a.nodeName.toLowerCase() === b;
                    },
                    CLASS: function (a, b) {
                        return (' ' + (a.className || a.getAttribute('class')) + ' ').indexOf(b) > -1;
                    },
                    ATTR: function (a, b) {
                        var c = b[1], d = m.attr ? m.attr(a, c) : o.attrHandle[c] ? o.attrHandle[c](a) : a[c] != null ? a[c] : a.getAttribute(c), e = d + '', f = b[2], g = b[4];
                        return d == null ? f === '!=' : !f && m.attr ? d != null : f === '=' ? e === g : f === '*=' ? e.indexOf(g) >= 0 : f === '~=' ? (' ' + e + ' ').indexOf(g) >= 0 : g ? f === '!=' ? e !== g : f === '^=' ? e.indexOf(g) === 0 : f === '$=' ? e.substr(e.length - g.length) === g : f === '|=' ? e === g || e.substr(0, g.length + 1) === g + '-' : !1 : e && d !== !1;
                    },
                    POS: function (a, b, c, d) {
                        var e = b[2], f = o.setFilters[e];
                        if (f)
                            return f(a, c, b, d);
                    }
                }
            }, p = o.match.POS, q = function (a, b) {
                return '\\' + (b - 0 + 1);
            };
        for (var r in o.match)
            o.match[r] = new RegExp(o.match[r].source + /(?![^\[]*\])(?![^\(]*\))/.source), o.leftMatch[r] = new RegExp(/(^(?:.|\r|\n)*?)/.source + o.match[r].source.replace(/\\(\d+)/g, q));
        var s = function (a, b) {
            a = Array.prototype.slice.call(a, 0);
            if (b) {
                b.push.apply(b, a);
                return b;
            }
            return a;
        };
        try {
            Array.prototype.slice.call(c.documentElement.childNodes, 0)[0].nodeType;
        } catch (t) {
            s = function (a, b) {
                var c = 0, d = b || [];
                if (g.call(a) === '[object Array]')
                    Array.prototype.push.apply(d, a);
                else if (typeof a.length == 'number')
                    for (var e = a.length; c < e; c++)
                        d.push(a[c]);
                else
                    for (; a[c]; c++)
                        d.push(a[c]);
                return d;
            };
        }
        var u, v;
        c.documentElement.compareDocumentPosition ? u = function (a, b) {
            if (a === b) {
                h = !0;
                return 0;
            }
            if (!a.compareDocumentPosition || !b.compareDocumentPosition)
                return a.compareDocumentPosition ? -1 : 1;
            return a.compareDocumentPosition(b) & 4 ? -1 : 1;
        } : (u = function (a, b) {
            if (a === b) {
                h = !0;
                return 0;
            }
            if (a.sourceIndex && b.sourceIndex)
                return a.sourceIndex - b.sourceIndex;
            var c, d, e = [], f = [], g = a.parentNode, i = b.parentNode, j = g;
            if (g === i)
                return v(a, b);
            if (!g)
                return -1;
            if (!i)
                return 1;
            while (j)
                e.unshift(j), j = j.parentNode;
            j = i;
            while (j)
                f.unshift(j), j = j.parentNode;
            c = e.length, d = f.length;
            for (var k = 0; k < c && k < d; k++)
                if (e[k] !== f[k])
                    return v(e[k], f[k]);
            return k === c ? v(a, f[k], -1) : v(e[k], b, 1);
        }, v = function (a, b, c) {
            if (a === b)
                return c;
            var d = a.nextSibling;
            while (d) {
                if (d === b)
                    return -1;
                d = d.nextSibling;
            }
            return 1;
        }), function () {
            var a = c.createElement('div'), d = 'script' + new Date().getTime(), e = c.documentElement;
            a.innerHTML = '<a name=\'' + d + '\'/>', e.insertBefore(a, e.firstChild), c.getElementById(d) && (o.find.ID = function (a, c, d) {
                if (typeof c.getElementById != 'undefined' && !d) {
                    var e = c.getElementById(a[1]);
                    return e ? e.id === a[1] || typeof e.getAttributeNode != 'undefined' && e.getAttributeNode('id').nodeValue === a[1] ? [e] : b : [];
                }
            }, o.filter.ID = function (a, b) {
                var c = typeof a.getAttributeNode != 'undefined' && a.getAttributeNode('id');
                return a.nodeType === 1 && c && c.nodeValue === b;
            }), e.removeChild(a), e = a = null;
        }(), function () {
            var a = c.createElement('div');
            a.appendChild(c.createComment('')), a.getElementsByTagName('*').length > 0 && (o.find.TAG = function (a, b) {
                var c = b.getElementsByTagName(a[1]);
                if (a[1] === '*') {
                    var d = [];
                    for (var e = 0; c[e]; e++)
                        c[e].nodeType === 1 && d.push(c[e]);
                    c = d;
                }
                return c;
            }), a.innerHTML = '<a href=\'#\'></a>', a.firstChild && typeof a.firstChild.getAttribute != 'undefined' && a.firstChild.getAttribute('href') !== '#' && (o.attrHandle.href = function (a) {
                return a.getAttribute('href', 2);
            }), a = null;
        }(), c.querySelectorAll && function () {
            var a = m, b = c.createElement('div'), d = '__sizzle__';
            b.innerHTML = '<p class=\'TEST\'></p>';
            if (!b.querySelectorAll || b.querySelectorAll('.TEST').length !== 0) {
                m = function (b, e, f, g) {
                    e = e || c;
                    if (!g && !m.isXML(e)) {
                        var h = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                        if (h && (e.nodeType === 1 || e.nodeType === 9)) {
                            if (h[1])
                                return s(e.getElementsByTagName(b), f);
                            if (h[2] && o.find.CLASS && e.getElementsByClassName)
                                return s(e.getElementsByClassName(h[2]), f);
                        }
                        if (e.nodeType === 9) {
                            if (b === 'body' && e.body)
                                return s([e.body], f);
                            if (h && h[3]) {
                                var i = e.getElementById(h[3]);
                                if (!i || !i.parentNode)
                                    return s([], f);
                                if (i.id === h[3])
                                    return s([i], f);
                            }
                            try {
                                return s(e.querySelectorAll(b), f);
                            } catch (j) {
                            }
                        } else if (e.nodeType === 1 && e.nodeName.toLowerCase() !== 'object') {
                            var k = e, l = e.getAttribute('id'), n = l || d, p = e.parentNode, q = /^\s*[+~]/.test(b);
                            l ? n = n.replace(/'/g, '\\$&') : e.setAttribute('id', n), q && p && (e = e.parentNode);
                            try {
                                if (!q || p)
                                    return s(e.querySelectorAll('[id=\'' + n + '\'] ' + b), f);
                            } catch (r) {
                            } finally {
                                l || k.removeAttribute('id');
                            }
                        }
                    }
                    return a(b, e, f, g);
                };
                for (var e in a)
                    m[e] = a[e];
                b = null;
            }
        }(), function () {
            var a = c.documentElement, b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
            if (b) {
                var d = !b.call(c.createElement('div'), 'div'), e = !1;
                try {
                    b.call(c.documentElement, '[test!=\'\']:sizzle');
                } catch (f) {
                    e = !0;
                }
                m.matchesSelector = function (a, c) {
                    c = c.replace(/\=\s*([^'"\]]*)\s*\]/g, '=\'$1\']');
                    if (!m.isXML(a))
                        try {
                            if (e || !o.match.PSEUDO.test(c) && !/!=/.test(c)) {
                                var f = b.call(a, c);
                                if (f || !d || a.document && a.document.nodeType !== 11)
                                    return f;
                            }
                        } catch (g) {
                        }
                    return m(c, null, null, [a]).length > 0;
                };
            }
        }(), function () {
            var a = c.createElement('div');
            a.innerHTML = '<div class=\'test e\'></div><div class=\'test\'></div>';
            if (!!a.getElementsByClassName && a.getElementsByClassName('e').length !== 0) {
                a.lastChild.className = 'e';
                if (a.getElementsByClassName('e').length === 1)
                    return;
                o.order.splice(1, 0, 'CLASS'), o.find.CLASS = function (a, b, c) {
                    if (typeof b.getElementsByClassName != 'undefined' && !c)
                        return b.getElementsByClassName(a[1]);
                }, a = null;
            }
        }(), c.documentElement.contains ? m.contains = function (a, b) {
            return a !== b && (a.contains ? a.contains(b) : !0);
        } : c.documentElement.compareDocumentPosition ? m.contains = function (a, b) {
            return !!(a.compareDocumentPosition(b) & 16);
        } : m.contains = function () {
            return !1;
        }, m.isXML = function (a) {
            var b = (a ? a.ownerDocument || a : 0).documentElement;
            return b ? b.nodeName !== 'HTML' : !1;
        };
        var y = function (a, b, c) {
            var d, e = [], f = '', g = b.nodeType ? [b] : b;
            while (d = o.match.PSEUDO.exec(a))
                f += d[0], a = a.replace(o.match.PSEUDO, '');
            a = o.relative[a] ? a + '*' : a;
            for (var h = 0, i = g.length; h < i; h++)
                m(a, g[h], e, c);
            return m.filter(f, e);
        };
        m.attr = f.attr, m.selectors.attrMap = {}, f.find = m, f.expr = m.selectors, f.expr[':'] = f.expr.filters, f.unique = m.uniqueSort, f.text = m.getText, f.isXMLDoc = m.isXML, f.contains = m.contains;
    }();
    var L = /Until$/, M = /^(?:parents|prevUntil|prevAll)/, N = /,/, O = /^.[^:#\[\.,]*$/, P = Array.prototype.slice, Q = f.expr.match.POS, R = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    f.fn.extend({
        find: function (a) {
            var b = this, c, d;
            if (typeof a != 'string')
                return f(a).filter(function () {
                    for (c = 0, d = b.length; c < d; c++)
                        if (f.contains(b[c], this))
                            return !0;
                });
            var e = this.pushStack('', 'find', a), g, h, i;
            for (c = 0, d = this.length; c < d; c++) {
                g = e.length, f.find(a, this[c], e);
                if (c > 0)
                    for (h = g; h < e.length; h++)
                        for (i = 0; i < g; i++)
                            if (e[i] === e[h]) {
                                e.splice(h--, 1);
                                break;
                            }
            }
            return e;
        },
        has: function (a) {
            var b = f(a);
            return this.filter(function () {
                for (var a = 0, c = b.length; a < c; a++)
                    if (f.contains(this, b[a]))
                        return !0;
            });
        },
        not: function (a) {
            return this.pushStack(T(this, a, !1), 'not', a);
        },
        filter: function (a) {
            return this.pushStack(T(this, a, !0), 'filter', a);
        },
        is: function (a) {
            return !!a && (typeof a == 'string' ? Q.test(a) ? f(a, this.context).index(this[0]) >= 0 : f.filter(a, this).length > 0 : this.filter(a).length > 0);
        },
        closest: function (a, b) {
            var c = [], d, e, g = this[0];
            if (f.isArray(a)) {
                var h = 1;
                while (g && g.ownerDocument && g !== b) {
                    for (d = 0; d < a.length; d++)
                        f(g).is(a[d]) && c.push({
                            selector: a[d],
                            elem: g,
                            level: h
                        });
                    g = g.parentNode, h++;
                }
                return c;
            }
            var i = Q.test(a) || typeof a != 'string' ? f(a, b || this.context) : 0;
            for (d = 0, e = this.length; d < e; d++) {
                g = this[d];
                while (g) {
                    if (i ? i.index(g) > -1 : f.find.matchesSelector(g, a)) {
                        c.push(g);
                        break;
                    }
                    g = g.parentNode;
                    if (!g || !g.ownerDocument || g === b || g.nodeType === 11)
                        break;
                }
            }
            c = c.length > 1 ? f.unique(c) : c;
            return this.pushStack(c, 'closest', a);
        },
        index: function (a) {
            if (!a)
                return this[0] && this[0].parentNode ? this.prevAll().length : -1;
            if (typeof a == 'string')
                return f.inArray(this[0], f(a));
            return f.inArray(a.jquery ? a[0] : a, this);
        },
        add: function (a, b) {
            var c = typeof a == 'string' ? f(a, b) : f.makeArray(a && a.nodeType ? [a] : a), d = f.merge(this.get(), c);
            return this.pushStack(S(c[0]) || S(d[0]) ? d : f.unique(d));
        },
        andSelf: function () {
            return this.add(this.prevObject);
        }
    }), f.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && b.nodeType !== 11 ? b : null;
        },
        parents: function (a) {
            return f.dir(a, 'parentNode');
        },
        parentsUntil: function (a, b, c) {
            return f.dir(a, 'parentNode', c);
        },
        next: function (a) {
            return f.nth(a, 2, 'nextSibling');
        },
        prev: function (a) {
            return f.nth(a, 2, 'previousSibling');
        },
        nextAll: function (a) {
            return f.dir(a, 'nextSibling');
        },
        prevAll: function (a) {
            return f.dir(a, 'previousSibling');
        },
        nextUntil: function (a, b, c) {
            return f.dir(a, 'nextSibling', c);
        },
        prevUntil: function (a, b, c) {
            return f.dir(a, 'previousSibling', c);
        },
        siblings: function (a) {
            return f.sibling(a.parentNode.firstChild, a);
        },
        children: function (a) {
            return f.sibling(a.firstChild);
        },
        contents: function (a) {
            return f.nodeName(a, 'iframe') ? a.contentDocument || a.contentWindow.document : f.makeArray(a.childNodes);
        }
    }, function (a, b) {
        f.fn[a] = function (c, d) {
            var e = f.map(this, b, c);
            L.test(a) || (d = c), d && typeof d == 'string' && (e = f.filter(d, e)), e = this.length > 1 && !R[a] ? f.unique(e) : e, (this.length > 1 || N.test(d)) && M.test(a) && (e = e.reverse());
            return this.pushStack(e, a, P.call(arguments).join(','));
        };
    }), f.extend({
        filter: function (a, b, c) {
            c && (a = ':not(' + a + ')');
            return b.length === 1 ? f.find.matchesSelector(b[0], a) ? [b[0]] : [] : f.find.matches(a, b);
        },
        dir: function (a, c, d) {
            var e = [], g = a[c];
            while (g && g.nodeType !== 9 && (d === b || g.nodeType !== 1 || !f(g).is(d)))
                g.nodeType === 1 && e.push(g), g = g[c];
            return e;
        },
        nth: function (a, b, c, d) {
            b = b || 1;
            var e = 0;
            for (; a; a = a[c])
                if (a.nodeType === 1 && ++e === b)
                    break;
            return a;
        },
        sibling: function (a, b) {
            var c = [];
            for (; a; a = a.nextSibling)
                a.nodeType === 1 && a !== b && c.push(a);
            return c;
        }
    });
    var V = 'abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video', W = / jQuery\d+="(?:\d+|null)"/g, X = /^\s+/, Y = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Z = /<([\w:]+)/, $ = /<tbody/i, _ = /<|&#?\w+;/, ba = /<(?:script|style)/i, bb = /<(?:script|object|embed|option|style)/i, bc = new RegExp('<(?:' + V + ')', 'i'), bd = /checked\s*(?:[^=]|=\s*.checked.)/i, be = /\/(java|ecma)script/i, bf = /^\s*<!(?:\[CDATA\[|\-\-)/, bg = {
            option: [
                1,
                '<select multiple=\'multiple\'>',
                '</select>'
            ],
            legend: [
                1,
                '<fieldset>',
                '</fieldset>'
            ],
            thead: [
                1,
                '<table>',
                '</table>'
            ],
            tr: [
                2,
                '<table><tbody>',
                '</tbody></table>'
            ],
            td: [
                3,
                '<table><tbody><tr>',
                '</tr></tbody></table>'
            ],
            col: [
                2,
                '<table><tbody></tbody><colgroup>',
                '</colgroup></table>'
            ],
            area: [
                1,
                '<map>',
                '</map>'
            ],
            _default: [
                0,
                '',
                ''
            ]
        }, bh = U(c);
    bg.optgroup = bg.option, bg.tbody = bg.tfoot = bg.colgroup = bg.caption = bg.thead, bg.th = bg.td, f.support.htmlSerialize || (bg._default = [
        1,
        'div<div>',
        '</div>'
    ]), f.fn.extend({
        text: function (a) {
            if (f.isFunction(a))
                return this.each(function (b) {
                    var c = f(this);
                    c.text(a.call(this, b, c.text()));
                });
            if (typeof a != 'object' && a !== b)
                return this.empty().append((this[0] && this[0].ownerDocument || c).createTextNode(a));
            return f.text(this);
        },
        wrapAll: function (a) {
            if (f.isFunction(a))
                return this.each(function (b) {
                    f(this).wrapAll(a.call(this, b));
                });
            if (this[0]) {
                var b = f(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                    var a = this;
                    while (a.firstChild && a.firstChild.nodeType === 1)
                        a = a.firstChild;
                    return a;
                }).append(this);
            }
            return this;
        },
        wrapInner: function (a) {
            if (f.isFunction(a))
                return this.each(function (b) {
                    f(this).wrapInner(a.call(this, b));
                });
            return this.each(function () {
                var b = f(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a);
            });
        },
        wrap: function (a) {
            var b = f.isFunction(a);
            return this.each(function (c) {
                f(this).wrapAll(b ? a.call(this, c) : a);
            });
        },
        unwrap: function () {
            return this.parent().each(function () {
                f.nodeName(this, 'body') || f(this).replaceWith(this.childNodes);
            }).end();
        },
        append: function () {
            return this.domManip(arguments, !0, function (a) {
                this.nodeType === 1 && this.appendChild(a);
            });
        },
        prepend: function () {
            return this.domManip(arguments, !0, function (a) {
                this.nodeType === 1 && this.insertBefore(a, this.firstChild);
            });
        },
        before: function () {
            if (this[0] && this[0].parentNode)
                return this.domManip(arguments, !1, function (a) {
                    this.parentNode.insertBefore(a, this);
                });
            if (arguments.length) {
                var a = f.clean(arguments);
                a.push.apply(a, this.toArray());
                return this.pushStack(a, 'before', arguments);
            }
        },
        after: function () {
            if (this[0] && this[0].parentNode)
                return this.domManip(arguments, !1, function (a) {
                    this.parentNode.insertBefore(a, this.nextSibling);
                });
            if (arguments.length) {
                var a = this.pushStack(this, 'after', arguments);
                a.push.apply(a, f.clean(arguments));
                return a;
            }
        },
        remove: function (a, b) {
            for (var c = 0, d; (d = this[c]) != null; c++)
                if (!a || f.filter(a, [d]).length)
                    !b && d.nodeType === 1 && (f.cleanData(d.getElementsByTagName('*')), f.cleanData([d])), d.parentNode && d.parentNode.removeChild(d);
            return this;
        },
        empty: function () {
            for (var a = 0, b; (b = this[a]) != null; a++) {
                b.nodeType === 1 && f.cleanData(b.getElementsByTagName('*'));
                while (b.firstChild)
                    b.removeChild(b.firstChild);
            }
            return this;
        },
        clone: function (a, b) {
            a = a == null ? !1 : a, b = b == null ? a : b;
            return this.map(function () {
                return f.clone(this, a, b);
            });
        },
        html: function (a) {
            if (a === b)
                return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(W, '') : null;
            if (typeof a == 'string' && !ba.test(a) && (f.support.leadingWhitespace || !X.test(a)) && !bg[(Z.exec(a) || [
                    '',
                    ''
                ])[1].toLowerCase()]) {
                a = a.replace(Y, '<$1></$2>');
                try {
                    for (var c = 0, d = this.length; c < d; c++)
                        this[c].nodeType === 1 && (f.cleanData(this[c].getElementsByTagName('*')), this[c].innerHTML = a);
                } catch (e) {
                    this.empty().append(a);
                }
            } else
                f.isFunction(a) ? this.each(function (b) {
                    var c = f(this);
                    c.html(a.call(this, b, c.html()));
                }) : this.empty().append(a);
            return this;
        },
        replaceWith: function (a) {
            if (this[0] && this[0].parentNode) {
                if (f.isFunction(a))
                    return this.each(function (b) {
                        var c = f(this), d = c.html();
                        c.replaceWith(a.call(this, b, d));
                    });
                typeof a != 'string' && (a = f(a).detach());
                return this.each(function () {
                    var b = this.nextSibling, c = this.parentNode;
                    f(this).remove(), b ? f(b).before(a) : f(c).append(a);
                });
            }
            return this.length ? this.pushStack(f(f.isFunction(a) ? a() : a), 'replaceWith', a) : this;
        },
        detach: function (a) {
            return this.remove(a, !0);
        },
        domManip: function (a, c, d) {
            var e, g, h, i, j = a[0], k = [];
            if (!f.support.checkClone && arguments.length === 3 && typeof j == 'string' && bd.test(j))
                return this.each(function () {
                    f(this).domManip(a, c, d, !0);
                });
            if (f.isFunction(j))
                return this.each(function (e) {
                    var g = f(this);
                    a[0] = j.call(this, e, c ? g.html() : b), g.domManip(a, c, d);
                });
            if (this[0]) {
                i = j && j.parentNode, f.support.parentNode && i && i.nodeType === 11 && i.childNodes.length === this.length ? e = { fragment: i } : e = f.buildFragment(a, this, k), h = e.fragment, h.childNodes.length === 1 ? g = h = h.firstChild : g = h.firstChild;
                if (g) {
                    c = c && f.nodeName(g, 'tr');
                    for (var l = 0, m = this.length, n = m - 1; l < m; l++)
                        d.call(c ? bi(this[l], g) : this[l], e.cacheable || m > 1 && l < n ? f.clone(h, !0, !0) : h);
                }
                k.length && f.each(k, bp);
            }
            return this;
        }
    }), f.buildFragment = function (a, b, d) {
        var e, g, h, i, j = a[0];
        b && b[0] && (i = b[0].ownerDocument || b[0]), i.createDocumentFragment || (i = c), a.length === 1 && typeof j == 'string' && j.length < 512 && i === c && j.charAt(0) === '<' && !bb.test(j) && (f.support.checkClone || !bd.test(j)) && (f.support.html5Clone || !bc.test(j)) && (g = !0, h = f.fragments[j], h && h !== 1 && (e = h)), e || (e = i.createDocumentFragment(), f.clean(a, i, e, d)), g && (f.fragments[j] = h ? e : 1);
        return {
            fragment: e,
            cacheable: g
        };
    }, f.fragments = {}, f.each({
        appendTo: 'append',
        prependTo: 'prepend',
        insertBefore: 'before',
        insertAfter: 'after',
        replaceAll: 'replaceWith'
    }, function (a, b) {
        f.fn[a] = function (c) {
            var d = [], e = f(c), g = this.length === 1 && this[0].parentNode;
            if (g && g.nodeType === 11 && g.childNodes.length === 1 && e.length === 1) {
                e[b](this[0]);
                return this;
            }
            for (var h = 0, i = e.length; h < i; h++) {
                var j = (h > 0 ? this.clone(!0) : this).get();
                f(e[h])[b](j), d = d.concat(j);
            }
            return this.pushStack(d, a, e.selector);
        };
    }), f.extend({
        clone: function (a, b, c) {
            var d, e, g, h = f.support.html5Clone || !bc.test('<' + a.nodeName) ? a.cloneNode(!0) : bo(a);
            if ((!f.support.noCloneEvent || !f.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !f.isXMLDoc(a)) {
                bk(a, h), d = bl(a), e = bl(h);
                for (g = 0; d[g]; ++g)
                    e[g] && bk(d[g], e[g]);
            }
            if (b) {
                bj(a, h);
                if (c) {
                    d = bl(a), e = bl(h);
                    for (g = 0; d[g]; ++g)
                        bj(d[g], e[g]);
                }
            }
            d = e = null;
            return h;
        },
        clean: function (a, b, d, e) {
            var g;
            b = b || c, typeof b.createElement == 'undefined' && (b = b.ownerDocument || b[0] && b[0].ownerDocument || c);
            var h = [], i;
            for (var j = 0, k; (k = a[j]) != null; j++) {
                typeof k == 'number' && (k += '');
                if (!k)
                    continue;
                if (typeof k == 'string')
                    if (!_.test(k))
                        k = b.createTextNode(k);
                    else {
                        k = k.replace(Y, '<$1></$2>');
                        var l = (Z.exec(k) || [
                                '',
                                ''
                            ])[1].toLowerCase(), m = bg[l] || bg._default, n = m[0], o = b.createElement('div');
                        b === c ? bh.appendChild(o) : U(b).appendChild(o), o.innerHTML = m[1] + k + m[2];
                        while (n--)
                            o = o.lastChild;
                        if (!f.support.tbody) {
                            var p = $.test(k), q = l === 'table' && !p ? o.firstChild && o.firstChild.childNodes : m[1] === '<table>' && !p ? o.childNodes : [];
                            for (i = q.length - 1; i >= 0; --i)
                                f.nodeName(q[i], 'tbody') && !q[i].childNodes.length && q[i].parentNode.removeChild(q[i]);
                        }
                        !f.support.leadingWhitespace && X.test(k) && o.insertBefore(b.createTextNode(X.exec(k)[0]), o.firstChild), k = o.childNodes;
                    }
                var r;
                if (!f.support.appendChecked)
                    if (k[0] && typeof (r = k.length) == 'number')
                        for (i = 0; i < r; i++)
                            bn(k[i]);
                    else
                        bn(k);
                k.nodeType ? h.push(k) : h = f.merge(h, k);
            }
            if (d) {
                g = function (a) {
                    return !a.type || be.test(a.type);
                };
                for (j = 0; h[j]; j++)
                    if (e && f.nodeName(h[j], 'script') && (!h[j].type || h[j].type.toLowerCase() === 'text/javascript'))
                        e.push(h[j].parentNode ? h[j].parentNode.removeChild(h[j]) : h[j]);
                    else {
                        if (h[j].nodeType === 1) {
                            var s = f.grep(h[j].getElementsByTagName('script'), g);
                            h.splice.apply(h, [
                                j + 1,
                                0
                            ].concat(s));
                        }
                        d.appendChild(h[j]);
                    }
            }
            return h;
        },
        cleanData: function (a) {
            var b, c, d = f.cache, e = f.event.special, g = f.support.deleteExpando;
            for (var h = 0, i; (i = a[h]) != null; h++) {
                if (i.nodeName && f.noData[i.nodeName.toLowerCase()])
                    continue;
                c = i[f.expando];
                if (c) {
                    b = d[c];
                    if (b && b.events) {
                        for (var j in b.events)
                            e[j] ? f.event.remove(i, j) : f.removeEvent(i, j, b.handle);
                        b.handle && (b.handle.elem = null);
                    }
                    g ? delete i[f.expando] : i.removeAttribute && i.removeAttribute(f.expando), delete d[c];
                }
            }
        }
    });
    var bq = /alpha\([^)]*\)/i, br = /opacity=([^)]*)/, bs = /([A-Z]|^ms)/g, bt = /^-?\d+(?:px)?$/i, bu = /^-?\d/, bv = /^([\-+])=([\-+.\de]+)/, bw = {
            position: 'absolute',
            visibility: 'hidden',
            display: 'block'
        }, bx = [
            'Left',
            'Right'
        ], by = [
            'Top',
            'Bottom'
        ], bz, bA, bB;
    f.fn.css = function (a, c) {
        if (arguments.length === 2 && c === b)
            return this;
        return f.access(this, a, c, !0, function (a, c, d) {
            return d !== b ? f.style(a, c, d) : f.css(a, c);
        });
    }, f.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = bz(a, 'opacity', 'opacity');
                        return c === '' ? '1' : c;
                    }
                    return a.style.opacity;
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: { 'float': f.support.cssFloat ? 'cssFloat' : 'styleFloat' },
        style: function (a, c, d, e) {
            if (!!a && a.nodeType !== 3 && a.nodeType !== 8 && !!a.style) {
                var g, h, i = f.camelCase(c), j = a.style, k = f.cssHooks[i];
                c = f.cssProps[i] || i;
                if (d === b) {
                    if (k && 'get' in k && (g = k.get(a, !1, e)) !== b)
                        return g;
                    return j[c];
                }
                h = typeof d, h === 'string' && (g = bv.exec(d)) && (d = +(g[1] + 1) * +g[2] + parseFloat(f.css(a, c)), h = 'number');
                if (d == null || h === 'number' && isNaN(d))
                    return;
                h === 'number' && !f.cssNumber[i] && (d += 'px');
                if (!k || !('set' in k) || (d = k.set(a, d)) !== b)
                    try {
                        j[c] = d;
                    } catch (l) {
                    }
            }
        },
        css: function (a, c, d) {
            var e, g;
            c = f.camelCase(c), g = f.cssHooks[c], c = f.cssProps[c] || c, c === 'cssFloat' && (c = 'float');
            if (g && 'get' in g && (e = g.get(a, !0, d)) !== b)
                return e;
            if (bz)
                return bz(a, c);
        },
        swap: function (a, b, c) {
            var d = {};
            for (var e in b)
                d[e] = a.style[e], a.style[e] = b[e];
            c.call(a);
            for (e in b)
                a.style[e] = d[e];
        }
    }), f.curCSS = f.css, f.each([
        'height',
        'width'
    ], function (a, b) {
        f.cssHooks[b] = {
            get: function (a, c, d) {
                var e;
                if (c) {
                    if (a.offsetWidth !== 0)
                        return bC(a, b, d);
                    f.swap(a, bw, function () {
                        e = bC(a, b, d);
                    });
                    return e;
                }
            },
            set: function (a, b) {
                if (!bt.test(b))
                    return b;
                b = parseFloat(b);
                if (b >= 0)
                    return b + 'px';
            }
        };
    }), f.support.opacity || (f.cssHooks.opacity = {
        get: function (a, b) {
            return br.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || '') ? parseFloat(RegExp.$1) / 100 + '' : b ? '1' : '';
        },
        set: function (a, b) {
            var c = a.style, d = a.currentStyle, e = f.isNumeric(b) ? 'alpha(opacity=' + b * 100 + ')' : '', g = d && d.filter || c.filter || '';
            c.zoom = 1;
            if (b >= 1 && f.trim(g.replace(bq, '')) === '') {
                c.removeAttribute('filter');
                if (d && !d.filter)
                    return;
            }
            c.filter = bq.test(g) ? g.replace(bq, e) : g + ' ' + e;
        }
    }), f(function () {
        f.support.reliableMarginRight || (f.cssHooks.marginRight = {
            get: function (a, b) {
                var c;
                f.swap(a, { display: 'inline-block' }, function () {
                    b ? c = bz(a, 'margin-right', 'marginRight') : c = a.style.marginRight;
                });
                return c;
            }
        });
    }), c.defaultView && c.defaultView.getComputedStyle && (bA = function (a, b) {
        var c, d, e;
        b = b.replace(bs, '-$1').toLowerCase(), (d = a.ownerDocument.defaultView) && (e = d.getComputedStyle(a, null)) && (c = e.getPropertyValue(b), c === '' && !f.contains(a.ownerDocument.documentElement, a) && (c = f.style(a, b)));
        return c;
    }), c.documentElement.currentStyle && (bB = function (a, b) {
        var c, d, e, f = a.currentStyle && a.currentStyle[b], g = a.style;
        f === null && g && (e = g[b]) && (f = e), !bt.test(f) && bu.test(f) && (c = g.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), g.left = b === 'fontSize' ? '1em' : f || 0, f = g.pixelLeft + 'px', g.left = c, d && (a.runtimeStyle.left = d));
        return f === '' ? 'auto' : f;
    }), bz = bA || bB, f.expr && f.expr.filters && (f.expr.filters.hidden = function (a) {
        var b = a.offsetWidth, c = a.offsetHeight;
        return b === 0 && c === 0 || !f.support.reliableHiddenOffsets && (a.style && a.style.display || f.css(a, 'display')) === 'none';
    }, f.expr.filters.visible = function (a) {
        return !f.expr.filters.hidden(a);
    });
    var bD = /%20/g, bE = /\[\]$/, bF = /\r?\n/g, bG = /#.*$/, bH = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, bI = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, bJ = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, bK = /^(?:GET|HEAD)$/, bL = /^\/\//, bM = /\?/, bN = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, bO = /^(?:select|textarea)/i, bP = /\s+/, bQ = /([?&])_=[^&]*/, bR = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/, bS = f.fn.load, bT = {}, bU = {}, bV, bW, bX = ['*/'] + ['*'];
    try {
        bV = e.href;
    } catch (bY) {
        bV = c.createElement('a'), bV.href = '', bV = bV.href;
    }
    bW = bR.exec(bV.toLowerCase()) || [], f.fn.extend({
        load: function (a, c, d) {
            if (typeof a != 'string' && bS)
                return bS.apply(this, arguments);
            if (!this.length)
                return this;
            var e = a.indexOf(' ');
            if (e >= 0) {
                var g = a.slice(e, a.length);
                a = a.slice(0, e);
            }
            var h = 'GET';
            c && (f.isFunction(c) ? (d = c, c = b) : typeof c == 'object' && (c = f.param(c, f.ajaxSettings.traditional), h = 'POST'));
            var i = this;
            f.ajax({
                url: a,
                type: h,
                dataType: 'html',
                data: c,
                complete: function (a, b, c) {
                    c = a.responseText, a.isResolved() && (a.done(function (a) {
                        c = a;
                    }), i.html(g ? f('<div>').append(c.replace(bN, '')).find(g) : c)), d && i.each(d, [
                        c,
                        b,
                        a
                    ]);
                }
            });
            return this;
        },
        serialize: function () {
            return f.param(this.serializeArray());
        },
        serializeArray: function () {
            return this.map(function () {
                return this.elements ? f.makeArray(this.elements) : this;
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || bO.test(this.nodeName) || bI.test(this.type));
            }).map(function (a, b) {
                var c = f(this).val();
                return c == null ? null : f.isArray(c) ? f.map(c, function (a, c) {
                    return {
                        name: b.name,
                        value: a.replace(bF, '\r\n')
                    };
                }) : {
                    name: b.name,
                    value: c.replace(bF, '\r\n')
                };
            }).get();
        }
    }), f.each('ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend'.split(' '), function (a, b) {
        f.fn[b] = function (a) {
            return this.on(b, a);
        };
    }), f.each([
        'get',
        'post'
    ], function (a, c) {
        f[c] = function (a, d, e, g) {
            f.isFunction(d) && (g = g || e, e = d, d = b);
            return f.ajax({
                type: c,
                url: a,
                data: d,
                success: e,
                dataType: g
            });
        };
    }), f.extend({
        getScript: function (a, c) {
            return f.get(a, b, c, 'script');
        },
        getJSON: function (a, b, c) {
            return f.get(a, b, c, 'json');
        },
        ajaxSetup: function (a, b) {
            b ? b_(a, f.ajaxSettings) : (b = a, a = f.ajaxSettings), b_(a, b);
            return a;
        },
        ajaxSettings: {
            url: bV,
            isLocal: bJ.test(bW[1]),
            global: !0,
            type: 'GET',
            contentType: 'application/x-www-form-urlencoded',
            processData: !0,
            async: !0,
            accepts: {
                xml: 'application/xml, text/xml',
                html: 'text/html',
                text: 'text/plain',
                json: 'application/json, text/javascript',
                '*': bX
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: 'responseXML',
                text: 'responseText'
            },
            converters: {
                '* text': a.String,
                'text html': !0,
                'text json': f.parseJSON,
                'text xml': f.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: bZ(bT),
        ajaxTransport: bZ(bU),
        ajax: function (a, c) {
            function w(a, c, l, m) {
                if (s !== 2) {
                    s = 2, q && clearTimeout(q), p = b, n = m || '', v.readyState = a > 0 ? 4 : 0;
                    var o, r, u, w = c, x = l ? cb(d, v, l) : b, y, z;
                    if (a >= 200 && a < 300 || a === 304) {
                        if (d.ifModified) {
                            if (y = v.getResponseHeader('Last-Modified'))
                                f.lastModified[k] = y;
                            if (z = v.getResponseHeader('Etag'))
                                f.etag[k] = z;
                        }
                        if (a === 304)
                            w = 'notmodified', o = !0;
                        else
                            try {
                                r = cc(d, x), w = 'success', o = !0;
                            } catch (A) {
                                w = 'parsererror', u = A;
                            }
                    } else {
                        u = w;
                        if (!w || a)
                            w = 'error', a < 0 && (a = 0);
                    }
                    v.status = a, v.statusText = '' + (c || w), o ? h.resolveWith(e, [
                        r,
                        w,
                        v
                    ]) : h.rejectWith(e, [
                        v,
                        w,
                        u
                    ]), v.statusCode(j), j = b, t && g.trigger('ajax' + (o ? 'Success' : 'Error'), [
                        v,
                        d,
                        o ? r : u
                    ]), i.fireWith(e, [
                        v,
                        w
                    ]), t && (g.trigger('ajaxComplete', [
                        v,
                        d
                    ]), --f.active || f.event.trigger('ajaxStop'));
                }
            }
            typeof a == 'object' && (c = a, a = b), c = c || {};
            var d = f.ajaxSetup({}, c), e = d.context || d, g = e !== d && (e.nodeType || e instanceof f) ? f(e) : f.event, h = f.Deferred(), i = f.Callbacks('once memory'), j = d.statusCode || {}, k, l = {}, m = {}, n, o, p, q, r, s = 0, t, u, v = {
                    readyState: 0,
                    setRequestHeader: function (a, b) {
                        if (!s) {
                            var c = a.toLowerCase();
                            a = m[c] = m[c] || a, l[a] = b;
                        }
                        return this;
                    },
                    getAllResponseHeaders: function () {
                        return s === 2 ? n : null;
                    },
                    getResponseHeader: function (a) {
                        var c;
                        if (s === 2) {
                            if (!o) {
                                o = {};
                                while (c = bH.exec(n))
                                    o[c[1].toLowerCase()] = c[2];
                            }
                            c = o[a.toLowerCase()];
                        }
                        return c === b ? null : c;
                    },
                    overrideMimeType: function (a) {
                        s || (d.mimeType = a);
                        return this;
                    },
                    abort: function (a) {
                        a = a || 'abort', p && p.abort(a), w(0, a);
                        return this;
                    }
                };
            h.promise(v), v.success = v.done, v.error = v.fail, v.complete = i.add, v.statusCode = function (a) {
                if (a) {
                    var b;
                    if (s < 2)
                        for (b in a)
                            j[b] = [
                                j[b],
                                a[b]
                            ];
                    else
                        b = a[v.status], v.then(b, b);
                }
                return this;
            }, d.url = ((a || d.url) + '').replace(bG, '').replace(bL, bW[1] + '//'), d.dataTypes = f.trim(d.dataType || '*').toLowerCase().split(bP), d.crossDomain == null && (r = bR.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] == bW[1] && r[2] == bW[2] && (r[3] || (r[1] === 'http:' ? 80 : 443)) == (bW[3] || (bW[1] === 'http:' ? 80 : 443)))), d.data && d.processData && typeof d.data != 'string' && (d.data = f.param(d.data, d.traditional)), b$(bT, d, c, v);
            if (s === 2)
                return !1;
            t = d.global, d.type = d.type.toUpperCase(), d.hasContent = !bK.test(d.type), t && f.active++ === 0 && f.event.trigger('ajaxStart');
            if (!d.hasContent) {
                d.data && (d.url += (bM.test(d.url) ? '&' : '?') + d.data, delete d.data), k = d.url;
                if (d.cache === !1) {
                    var x = f.now(), y = d.url.replace(bQ, '$1_=' + x);
                    d.url = y + (y === d.url ? (bM.test(d.url) ? '&' : '?') + '_=' + x : '');
                }
            }
            (d.data && d.hasContent && d.contentType !== !1 || c.contentType) && v.setRequestHeader('Content-Type', d.contentType), d.ifModified && (k = k || d.url, f.lastModified[k] && v.setRequestHeader('If-Modified-Since', f.lastModified[k]), f.etag[k] && v.setRequestHeader('If-None-Match', f.etag[k])), v.setRequestHeader('Accept', d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + (d.dataTypes[0] !== '*' ? ', ' + bX + '; q=0.01' : '') : d.accepts['*']);
            for (u in d.headers)
                v.setRequestHeader(u, d.headers[u]);
            if (d.beforeSend && (d.beforeSend.call(e, v, d) === !1 || s === 2)) {
                v.abort();
                return !1;
            }
            for (u in {
                    success: 1,
                    error: 1,
                    complete: 1
                })
                v[u](d[u]);
            p = b$(bU, d, c, v);
            if (!p)
                w(-1, 'No Transport');
            else {
                v.readyState = 1, t && g.trigger('ajaxSend', [
                    v,
                    d
                ]), d.async && d.timeout > 0 && (q = setTimeout(function () {
                    v.abort('timeout');
                }, d.timeout));
                try {
                    s = 1, p.send(l, w);
                } catch (z) {
                    if (s < 2)
                        w(-1, z);
                    else
                        throw z;
                }
            }
            return v;
        },
        param: function (a, c) {
            var d = [], e = function (a, b) {
                    b = f.isFunction(b) ? b() : b, d[d.length] = encodeURIComponent(a) + '=' + encodeURIComponent(b);
                };
            c === b && (c = f.ajaxSettings.traditional);
            if (f.isArray(a) || a.jquery && !f.isPlainObject(a))
                f.each(a, function () {
                    e(this.name, this.value);
                });
            else
                for (var g in a)
                    ca(g, a[g], c, e);
            return d.join('&').replace(bD, '+');
        }
    }), f.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    var cd = f.now(), ce = /(\=)\?(&|$)|\?\?/i;
    f.ajaxSetup({
        jsonp: 'callback',
        jsonpCallback: function () {
            return f.expando + '_' + cd++;
        }
    }), f.ajaxPrefilter('json jsonp', function (b, c, d) {
        var e = b.contentType === 'application/x-www-form-urlencoded' && typeof b.data == 'string';
        if (b.dataTypes[0] === 'jsonp' || b.jsonp !== !1 && (ce.test(b.url) || e && ce.test(b.data))) {
            var g, h = b.jsonpCallback = f.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, i = a[h], j = b.url, k = b.data, l = '$1' + h + '$2';
            b.jsonp !== !1 && (j = j.replace(ce, l), b.url === j && (e && (k = k.replace(ce, l)), b.data === k && (j += (/\?/.test(j) ? '&' : '?') + b.jsonp + '=' + h))), b.url = j, b.data = k, a[h] = function (a) {
                g = [a];
            }, d.always(function () {
                a[h] = i, g && f.isFunction(i) && a[h](g[0]);
            }), b.converters['script json'] = function () {
                g || f.error(h + ' was not called');
                return g[0];
            }, b.dataTypes[0] = 'json';
            return 'script';
        }
    }), f.ajaxSetup({
        accepts: { script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript' },
        contents: { script: /javascript|ecmascript/ },
        converters: {
            'text script': function (a) {
                f.globalEval(a);
                return a;
            }
        }
    }), f.ajaxPrefilter('script', function (a) {
        a.cache === b && (a.cache = !1), a.crossDomain && (a.type = 'GET', a.global = !1);
    }), f.ajaxTransport('script', function (a) {
        if (a.crossDomain) {
            var d, e = c.head || c.getElementsByTagName('head')[0] || c.documentElement;
            return {
                send: function (f, g) {
                    d = c.createElement('script'), d.async = 'async', a.scriptCharset && (d.charset = a.scriptCharset), d.src = a.url, d.onload = d.onreadystatechange = function (a, c) {
                        if (c || !d.readyState || /loaded|complete/.test(d.readyState))
                            d.onload = d.onreadystatechange = null, e && d.parentNode && e.removeChild(d), d = b, c || g(200, 'success');
                    }, e.insertBefore(d, e.firstChild);
                },
                abort: function () {
                    d && d.onload(0, 1);
                }
            };
        }
    });
    var cf = a.ActiveXObject ? function () {
            for (var a in ch)
                ch[a](0, 1);
        } : !1, cg = 0, ch;
    f.ajaxSettings.xhr = a.ActiveXObject ? function () {
        return !this.isLocal && ci() || cj();
    } : ci, function (a) {
        f.extend(f.support, {
            ajax: !!a,
            cors: !!a && 'withCredentials' in a
        });
    }(f.ajaxSettings.xhr()), f.support.ajax && f.ajaxTransport(function (c) {
        if (!c.crossDomain || f.support.cors) {
            var d;
            return {
                send: function (e, g) {
                    var h = c.xhr(), i, j;
                    c.username ? h.open(c.type, c.url, c.async, c.username, c.password) : h.open(c.type, c.url, c.async);
                    if (c.xhrFields)
                        for (j in c.xhrFields)
                            h[j] = c.xhrFields[j];
                    c.mimeType && h.overrideMimeType && h.overrideMimeType(c.mimeType), !c.crossDomain && !e['X-Requested-With'] && (e['X-Requested-With'] = 'XMLHttpRequest');
                    try {
                        for (j in e)
                            h.setRequestHeader(j, e[j]);
                    } catch (k) {
                    }
                    h.send(c.hasContent && c.data || null), d = function (a, e) {
                        var j, k, l, m, n;
                        try {
                            if (d && (e || h.readyState === 4)) {
                                d = b, i && (h.onreadystatechange = f.noop, cf && delete ch[i]);
                                if (e)
                                    h.readyState !== 4 && h.abort();
                                else {
                                    j = h.status, l = h.getAllResponseHeaders(), m = {}, n = h.responseXML, n && n.documentElement && (m.xml = n), m.text = h.responseText;
                                    try {
                                        k = h.statusText;
                                    } catch (o) {
                                        k = '';
                                    }
                                    !j && c.isLocal && !c.crossDomain ? j = m.text ? 200 : 404 : j === 1223 && (j = 204);
                                }
                            }
                        } catch (p) {
                            e || g(-1, p);
                        }
                        m && g(j, k, m, l);
                    }, !c.async || h.readyState === 4 ? d() : (i = ++cg, cf && (ch || (ch = {}, f(a).unload(cf)), ch[i] = d), h.onreadystatechange = d);
                },
                abort: function () {
                    d && d(0, 1);
                }
            };
        }
    });
    var ck = {}, cl, cm, cn = /^(?:toggle|show|hide)$/, co = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i, cp, cq = [
            [
                'height',
                'marginTop',
                'marginBottom',
                'paddingTop',
                'paddingBottom'
            ],
            [
                'width',
                'marginLeft',
                'marginRight',
                'paddingLeft',
                'paddingRight'
            ],
            ['opacity']
        ], cr;
    f.fn.extend({
        show: function (a, b, c) {
            var d, e;
            if (a || a === 0)
                return this.animate(cu('show', 3), a, b, c);
            for (var g = 0, h = this.length; g < h; g++)
                d = this[g], d.style && (e = d.style.display, !f._data(d, 'olddisplay') && e === 'none' && (e = d.style.display = ''), e === '' && f.css(d, 'display') === 'none' && f._data(d, 'olddisplay', cv(d.nodeName)));
            for (g = 0; g < h; g++) {
                d = this[g];
                if (d.style) {
                    e = d.style.display;
                    if (e === '' || e === 'none')
                        d.style.display = f._data(d, 'olddisplay') || '';
                }
            }
            return this;
        },
        hide: function (a, b, c) {
            if (a || a === 0)
                return this.animate(cu('hide', 3), a, b, c);
            var d, e, g = 0, h = this.length;
            for (; g < h; g++)
                d = this[g], d.style && (e = f.css(d, 'display'), e !== 'none' && !f._data(d, 'olddisplay') && f._data(d, 'olddisplay', e));
            for (g = 0; g < h; g++)
                this[g].style && (this[g].style.display = 'none');
            return this;
        },
        _toggle: f.fn.toggle,
        toggle: function (a, b, c) {
            var d = typeof a == 'boolean';
            f.isFunction(a) && f.isFunction(b) ? this._toggle.apply(this, arguments) : a == null || d ? this.each(function () {
                var b = d ? a : f(this).is(':hidden');
                f(this)[b ? 'show' : 'hide']();
            }) : this.animate(cu('toggle', 3), a, b, c);
            return this;
        },
        fadeTo: function (a, b, c, d) {
            return this.filter(':hidden').css('opacity', 0).show().end().animate({ opacity: b }, a, c, d);
        },
        animate: function (a, b, c, d) {
            function g() {
                e.queue === !1 && f._mark(this);
                var b = f.extend({}, e), c = this.nodeType === 1, d = c && f(this).is(':hidden'), g, h, i, j, k, l, m, n, o;
                b.animatedProperties = {};
                for (i in a) {
                    g = f.camelCase(i), i !== g && (a[g] = a[i], delete a[i]), h = a[g], f.isArray(h) ? (b.animatedProperties[g] = h[1], h = a[g] = h[0]) : b.animatedProperties[g] = b.specialEasing && b.specialEasing[g] || b.easing || 'swing';
                    if (h === 'hide' && d || h === 'show' && !d)
                        return b.complete.call(this);
                    c && (g === 'height' || g === 'width') && (b.overflow = [
                        this.style.overflow,
                        this.style.overflowX,
                        this.style.overflowY
                    ], f.css(this, 'display') === 'inline' && f.css(this, 'float') === 'none' && (!f.support.inlineBlockNeedsLayout || cv(this.nodeName) === 'inline' ? this.style.display = 'inline-block' : this.style.zoom = 1));
                }
                b.overflow != null && (this.style.overflow = 'hidden');
                for (i in a)
                    j = new f.fx(this, b, i), h = a[i], cn.test(h) ? (o = f._data(this, 'toggle' + i) || (h === 'toggle' ? d ? 'show' : 'hide' : 0), o ? (f._data(this, 'toggle' + i, o === 'show' ? 'hide' : 'show'), j[o]()) : j[h]()) : (k = co.exec(h), l = j.cur(), k ? (m = parseFloat(k[2]), n = k[3] || (f.cssNumber[i] ? '' : 'px'), n !== 'px' && (f.style(this, i, (m || 1) + n), l = (m || 1) / j.cur() * l, f.style(this, i, l + n)), k[1] && (m = (k[1] === '-=' ? -1 : 1) * m + l), j.custom(l, m, n)) : j.custom(l, h, ''));
                return !0;
            }
            var e = f.speed(b, c, d);
            if (f.isEmptyObject(a))
                return this.each(e.complete, [!1]);
            a = f.extend({}, a);
            return e.queue === !1 ? this.each(g) : this.queue(e.queue, g);
        },
        stop: function (a, c, d) {
            typeof a != 'string' && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || 'fx', []);
            return this.each(function () {
                function h(a, b, c) {
                    var e = b[c];
                    f.removeData(a, c, !0), e.stop(d);
                }
                var b, c = !1, e = f.timers, g = f._data(this);
                d || f._unmark(!0, this);
                if (a == null)
                    for (b in g)
                        g[b] && g[b].stop && b.indexOf('.run') === b.length - 4 && h(this, g, b);
                else
                    g[b = a + '.run'] && g[b].stop && h(this, g, b);
                for (b = e.length; b--;)
                    e[b].elem === this && (a == null || e[b].queue === a) && (d ? e[b](!0) : e[b].saveState(), c = !0, e.splice(b, 1));
                (!d || !c) && f.dequeue(this, a);
            });
        }
    }), f.each({
        slideDown: cu('show', 1),
        slideUp: cu('hide', 1),
        slideToggle: cu('toggle', 1),
        fadeIn: { opacity: 'show' },
        fadeOut: { opacity: 'hide' },
        fadeToggle: { opacity: 'toggle' }
    }, function (a, b) {
        f.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d);
        };
    }), f.extend({
        speed: function (a, b, c) {
            var d = a && typeof a == 'object' ? f.extend({}, a) : {
                complete: c || !c && b || f.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !f.isFunction(b) && b
            };
            d.duration = f.fx.off ? 0 : typeof d.duration == 'number' ? d.duration : d.duration in f.fx.speeds ? f.fx.speeds[d.duration] : f.fx.speeds._default;
            if (d.queue == null || d.queue === !0)
                d.queue = 'fx';
            d.old = d.complete, d.complete = function (a) {
                f.isFunction(d.old) && d.old.call(this), d.queue ? f.dequeue(this, d.queue) : a !== !1 && f._unmark(this);
            };
            return d;
        },
        easing: {
            linear: function (a, b, c, d) {
                return c + d * a;
            },
            swing: function (a, b, c, d) {
                return (-Math.cos(a * Math.PI) / 2 + 0.5) * d + c;
            }
        },
        timers: [],
        fx: function (a, b, c) {
            this.options = b, this.elem = a, this.prop = c, b.orig = b.orig || {};
        }
    }), f.fx.prototype = {
        update: function () {
            this.options.step && this.options.step.call(this.elem, this.now, this), (f.fx.step[this.prop] || f.fx.step._default)(this);
        },
        cur: function () {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null))
                return this.elem[this.prop];
            var a, b = f.css(this.elem, this.prop);
            return isNaN(a = parseFloat(b)) ? !b || b === 'auto' ? 0 : b : a;
        },
        custom: function (a, c, d) {
            function h(a) {
                return e.step(a);
            }
            var e = this, g = f.fx;
            this.startTime = cr || cs(), this.end = c, this.now = this.start = a, this.pos = this.state = 0, this.unit = d || this.unit || (f.cssNumber[this.prop] ? '' : 'px'), h.queue = this.options.queue, h.elem = this.elem, h.saveState = function () {
                e.options.hide && f._data(e.elem, 'fxshow' + e.prop) === b && f._data(e.elem, 'fxshow' + e.prop, e.start);
            }, h() && f.timers.push(h) && !cp && (cp = setInterval(g.tick, g.interval));
        },
        show: function () {
            var a = f._data(this.elem, 'fxshow' + this.prop);
            this.options.orig[this.prop] = a || f.style(this.elem, this.prop), this.options.show = !0, a !== b ? this.custom(this.cur(), a) : this.custom(this.prop === 'width' || this.prop === 'height' ? 1 : 0, this.cur()), f(this.elem).show();
        },
        hide: function () {
            this.options.orig[this.prop] = f._data(this.elem, 'fxshow' + this.prop) || f.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0);
        },
        step: function (a) {
            var b, c, d, e = cr || cs(), g = !0, h = this.elem, i = this.options;
            if (a || e >= i.duration + this.startTime) {
                this.now = this.end, this.pos = this.state = 1, this.update(), i.animatedProperties[this.prop] = !0;
                for (b in i.animatedProperties)
                    i.animatedProperties[b] !== !0 && (g = !1);
                if (g) {
                    i.overflow != null && !f.support.shrinkWrapBlocks && f.each([
                        '',
                        'X',
                        'Y'
                    ], function (a, b) {
                        h.style['overflow' + b] = i.overflow[a];
                    }), i.hide && f(h).hide();
                    if (i.hide || i.show)
                        for (b in i.animatedProperties)
                            f.style(h, b, i.orig[b]), f.removeData(h, 'fxshow' + b, !0), f.removeData(h, 'toggle' + b, !0);
                    d = i.complete, d && (i.complete = !1, d.call(h));
                }
                return !1;
            }
            i.duration == Infinity ? this.now = e : (c = e - this.startTime, this.state = c / i.duration, this.pos = f.easing[i.animatedProperties[this.prop]](this.state, c, 0, 1, i.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update();
            return !0;
        }
    }, f.extend(f.fx, {
        tick: function () {
            var a, b = f.timers, c = 0;
            for (; c < b.length; c++)
                a = b[c], !a() && b[c] === a && b.splice(c--, 1);
            b.length || f.fx.stop();
        },
        interval: 13,
        stop: function () {
            clearInterval(cp), cp = null;
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function (a) {
                f.style(a.elem, 'opacity', a.now);
            },
            _default: function (a) {
                a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = a.now + a.unit : a.elem[a.prop] = a.now;
            }
        }
    }), f.each([
        'width',
        'height'
    ], function (a, b) {
        f.fx.step[b] = function (a) {
            f.style(a.elem, b, Math.max(0, a.now) + a.unit);
        };
    }), f.expr && f.expr.filters && (f.expr.filters.animated = function (a) {
        return f.grep(f.timers, function (b) {
            return a === b.elem;
        }).length;
    });
    var cw = /^t(?:able|d|h)$/i, cx = /^(?:body|html)$/i;
    'getBoundingClientRect' in c.documentElement ? f.fn.offset = function (a) {
        var b = this[0], c;
        if (a)
            return this.each(function (b) {
                f.offset.setOffset(this, a, b);
            });
        if (!b || !b.ownerDocument)
            return null;
        if (b === b.ownerDocument.body)
            return f.offset.bodyOffset(b);
        try {
            c = b.getBoundingClientRect();
        } catch (d) {
        }
        var e = b.ownerDocument, g = e.documentElement;
        if (!c || !f.contains(g, b))
            return c ? {
                top: c.top,
                left: c.left
            } : {
                top: 0,
                left: 0
            };
        var h = e.body, i = cy(e), j = g.clientTop || h.clientTop || 0, k = g.clientLeft || h.clientLeft || 0, l = i.pageYOffset || f.support.boxModel && g.scrollTop || h.scrollTop, m = i.pageXOffset || f.support.boxModel && g.scrollLeft || h.scrollLeft, n = c.top + l - j, o = c.left + m - k;
        return {
            top: n,
            left: o
        };
    } : f.fn.offset = function (a) {
        var b = this[0];
        if (a)
            return this.each(function (b) {
                f.offset.setOffset(this, a, b);
            });
        if (!b || !b.ownerDocument)
            return null;
        if (b === b.ownerDocument.body)
            return f.offset.bodyOffset(b);
        var c, d = b.offsetParent, e = b, g = b.ownerDocument, h = g.documentElement, i = g.body, j = g.defaultView, k = j ? j.getComputedStyle(b, null) : b.currentStyle, l = b.offsetTop, m = b.offsetLeft;
        while ((b = b.parentNode) && b !== i && b !== h) {
            if (f.support.fixedPosition && k.position === 'fixed')
                break;
            c = j ? j.getComputedStyle(b, null) : b.currentStyle, l -= b.scrollTop, m -= b.scrollLeft, b === d && (l += b.offsetTop, m += b.offsetLeft, f.support.doesNotAddBorder && (!f.support.doesAddBorderForTableAndCells || !cw.test(b.nodeName)) && (l += parseFloat(c.borderTopWidth) || 0, m += parseFloat(c.borderLeftWidth) || 0), e = d, d = b.offsetParent), f.support.subtractsBorderForOverflowNotVisible && c.overflow !== 'visible' && (l += parseFloat(c.borderTopWidth) || 0, m += parseFloat(c.borderLeftWidth) || 0), k = c;
        }
        if (k.position === 'relative' || k.position === 'static')
            l += i.offsetTop, m += i.offsetLeft;
        f.support.fixedPosition && k.position === 'fixed' && (l += Math.max(h.scrollTop, i.scrollTop), m += Math.max(h.scrollLeft, i.scrollLeft));
        return {
            top: l,
            left: m
        };
    }, f.offset = {
        bodyOffset: function (a) {
            var b = a.offsetTop, c = a.offsetLeft;
            f.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(f.css(a, 'marginTop')) || 0, c += parseFloat(f.css(a, 'marginLeft')) || 0);
            return {
                top: b,
                left: c
            };
        },
        setOffset: function (a, b, c) {
            var d = f.css(a, 'position');
            d === 'static' && (a.style.position = 'relative');
            var e = f(a), g = e.offset(), h = f.css(a, 'top'), i = f.css(a, 'left'), j = (d === 'absolute' || d === 'fixed') && f.inArray('auto', [
                    h,
                    i
                ]) > -1, k = {}, l = {}, m, n;
            j ? (l = e.position(), m = l.top, n = l.left) : (m = parseFloat(h) || 0, n = parseFloat(i) || 0), f.isFunction(b) && (b = b.call(a, c, g)), b.top != null && (k.top = b.top - g.top + m), b.left != null && (k.left = b.left - g.left + n), 'using' in b ? b.using.call(a, k) : e.css(k);
        }
    }, f.fn.extend({
        position: function () {
            if (!this[0])
                return null;
            var a = this[0], b = this.offsetParent(), c = this.offset(), d = cx.test(b[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : b.offset();
            c.top -= parseFloat(f.css(a, 'marginTop')) || 0, c.left -= parseFloat(f.css(a, 'marginLeft')) || 0, d.top += parseFloat(f.css(b[0], 'borderTopWidth')) || 0, d.left += parseFloat(f.css(b[0], 'borderLeftWidth')) || 0;
            return {
                top: c.top - d.top,
                left: c.left - d.left
            };
        },
        offsetParent: function () {
            return this.map(function () {
                var a = this.offsetParent || c.body;
                while (a && !cx.test(a.nodeName) && f.css(a, 'position') === 'static')
                    a = a.offsetParent;
                return a;
            });
        }
    }), f.each([
        'Left',
        'Top'
    ], function (a, c) {
        var d = 'scroll' + c;
        f.fn[d] = function (c) {
            var e, g;
            if (c === b) {
                e = this[0];
                if (!e)
                    return null;
                g = cy(e);
                return g ? 'pageXOffset' in g ? g[a ? 'pageYOffset' : 'pageXOffset'] : f.support.boxModel && g.document.documentElement[d] || g.document.body[d] : e[d];
            }
            return this.each(function () {
                g = cy(this), g ? g.scrollTo(a ? f(g).scrollLeft() : c, a ? c : f(g).scrollTop()) : this[d] = c;
            });
        };
    }), f.each([
        'Height',
        'Width'
    ], function (a, c) {
        var d = c.toLowerCase();
        f.fn['inner' + c] = function () {
            var a = this[0];
            return a ? a.style ? parseFloat(f.css(a, d, 'padding')) : this[d]() : null;
        }, f.fn['outer' + c] = function (a) {
            var b = this[0];
            return b ? b.style ? parseFloat(f.css(b, d, a ? 'margin' : 'border')) : this[d]() : null;
        }, f.fn[d] = function (a) {
            var e = this[0];
            if (!e)
                return a == null ? null : this;
            if (f.isFunction(a))
                return this.each(function (b) {
                    var c = f(this);
                    c[d](a.call(this, b, c[d]()));
                });
            if (f.isWindow(e)) {
                var g = e.document.documentElement['client' + c], h = e.document.body;
                return e.document.compatMode === 'CSS1Compat' && g || h && h['client' + c] || g;
            }
            if (e.nodeType === 9)
                return Math.max(e.documentElement['client' + c], e.body['scroll' + c], e.documentElement['scroll' + c], e.body['offset' + c], e.documentElement['offset' + c]);
            if (a === b) {
                var i = f.css(e, d), j = parseFloat(i);
                return f.isNumeric(j) ? j : i;
            }
            return this.css(d, typeof a == 'string' ? a : a + 'px');
        };
    }), a.jQuery = a.$ = f, typeof define == 'function' && define.amd && define.amd.jQuery && define('jquery', [], function () {
        return f;
    });
}(window));
define('utils/resolveControll', [], function () {
    var setCtrl = function (dir) {
        var todo = [
            '$q',
            function ($q) {
                var deferred = $q.defer();
                require([dir], function () {
                    deferred.resolve();
                });
                return deferred.promise;
            }
        ];
        return todo;
    };
    return { setCtrl: setCtrl };
});
define('app', [
    'angular',
    'router',
    'jquery',
    'utils/resolveControll'
], function (angular, router, jquery, getResolve) {
    var app = angular.module('myApp', ['ui.router']);
    app.run([
        '$rootScope',
        function ($rootScope) {
            $rootScope.title = 'angularjs test';
        }
    ]);
    app.config(function ($controllerProvider, $compileProvider, $filterProvider, $provide) {
        app.register = {
            controller: $controllerProvider.register,
            directive: $compileProvider.directive,
            filter: $filterProvider.register,
            service: $provide.service,
            factory: $provide.factory
        };
    });
    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when('/', '/menu/index').otherwise('/menu/index');
        $stateProvider.state('home', {
            url: '/',
            views: {
                header: {
                    templateUrl: 'templates/lib/header.html',
                    controller: 'headerCtrl',
                    resolve: {
                        loadCtrl: [
                            '$q',
                            function ($q) {
                                var deferred = $q.defer();
                                require(['controller/lib/headerCtrl'], function () {
                                    deferred.resolve();
                                });
                                return deferred.promise;
                            }
                        ]
                    }
                },
                content: { templateUrl: 'templates/lib/content.html' },
                footer: {
                    templateUrl: 'templates/lib/footer.html',
                    controller: 'footerCtrl',
                    resolve: { loadCtrl: getResolve.setCtrl('controller/lib/footerCtrl') }
                }
            }
        }).state('home.menu', {
            url: 'menu',
            views: {
                menu: {
                    templateUrl: 'templates/lib/menu.html',
                    controller: 'menuCtrl',
                    resolve: { loadCtrl: getResolve.setCtrl('controller/lib/menuCtrl') }
                }
            }
        }).state('home.menu.index', {
            url: '/index',
            views: {
                'content@home': {
                    templateUrl: 'templates/page/index.html',
                    controller: 'indexCtrl',
                    resolve: { loadCtrl: getResolve.setCtrl('controller/page/indexCtrl') }
                }
            }
        }).state('home.menu.inject', {
            url: '/inject',
            views: {
                'content@home': {
                    templateUrl: 'templates/page/inject.html',
                    controller: 'injectCtrl',
                    resolve: { loadCtrl: getResolve.setCtrl('controller/page/injectCtrl') }
                }
            }
        }).state('home.menu.service', {
            url: '/service',
            views: {
                'content@home': {
                    templateUrl: 'templates/page/service.html',
                    controller: 'serviceCtrl',
                    resolve: { loadCtrl: getResolve.setCtrl('controller/page/serviceCtrl') }
                }
            }
        }).state('home.menu.directive', {
            url: '/directive',
            views: {
                'content@home': {
                    templateUrl: 'templates/page/directive.html',
                    controller: 'directiveCtrl',
                    resolve: { loadCtrl: getResolve.setCtrl('controller/page/directiveCtrl') }
                }
            }
        });
    });
    return app;
});
require(['app'], function () {
    angular.bootstrap(document, ['myApp']);
});
define('main', ['app'], function () {
    return;
});