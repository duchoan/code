var CKFinder = function () {
    function internalCKFinderInit(e, t, i) {
        var n = t.getElementsByTagName("head")[0], r = t.createElement("script");
        r[r.innerText ? "innerText" : "innerHTML"] = i + ".CKFinder._setup( window, document );CKFinder.start(" + JSON.stringify(e) + ");", n.appendChild(r)
    }

    function configOrDefault(e, t) {
        return e ? e : t
    }

    function createUrlParams(e) {
        var t = [];
        for (var i in e)t.push(encodeURIComponent(i) + "=" + encodeURIComponent(e[i]));
        return "?" + t.join("&")
    }

    function extendObject(e, t) {
        for (var i in t)t.hasOwnProperty(i) && (e[i] = t[i]);
        return e
    }

    function checkOnInit(e, t) {
        if (e && !e._omitCheckOnInit && "function" == typeof e.onInit) {
            var i = e.onInit;
            delete e.onInit, t.addEventListener("ckfinderReady", function (t) {
                e._initCalled || (e._initCalled = !0, i(t.detail.ckfinder))
            })
        }
    }

    function isIE9() {
        var e, t, i = -1;
        return "Microsoft Internet Explorer" == navigator.appName && (e = navigator.userAgent, t = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})"), null !== t.exec(e) && (i = parseFloat(RegExp.$1))), 9 === i
    }

    var basePath = function () {
        if (parent && parent.CKFinder && parent.CKFinder.basePath)return parent.CKFinder.basePath;
        var e, t, i, n = document.getElementsByTagName("script");
        for (e = 0; e < n.length && (t = n[e], i = void 0 !== t.getAttribute.length ? t.src : t.getAttribute("src"), !i || "ckfinder.js" !== i.split("/").slice(-1)[0]); e++);
        return i.split("/").slice(0, -1).join("/") + "/"
    }(), Modal = {
        open: function (e) {
            function t(e, t, i) {
                t.forEach(function (t) {
                    e.addEventListener(t, i)
                })
            }

            function i(e, t, i) {
                t.forEach(function (t) {
                    e.removeEventListener(t, i)
                })
            }

            function n(e) {
                return 0 === e.type.indexOf("touch") ? {
                    x: e.touches[0].pageX,
                    y: e.touches[0].pageY
                } : {x: document.all ? window.event.clientX : e.pageX, y: document.all ? window.event.clientX : e.pageY}
            }

            function r(e) {
                var t = n(e);
                p = t.x, m = t.y;
                var i = m - x;
                y.style.left = p - F + "px", y.style.top = (0 > i ? 0 : i) + "px"
            }

            function o(e) {
                var t, i, r = n(e);
                f ? (t = l - (K - r.x), i = d - (S - r.y), t > 200 && (E.style.width = t + "px"), i > 200 && (E.style.height = i + "px")) : h && (t = l + (K - r.x), i = d - (S - r.y), t > 200 && (E.style.width = t + "px", y.style.left = F - (K - r.x) + "px"), i > 200 && (E.style.height = i + "px"))
            }

            function s() {
                I.parentNode === E && E.removeChild(I), f = !1, h = !1, i(document, ["mousemove", "touchmove"], o), i(document, ["mouseup", "touchend"], s)
            }

            function a(e) {
                e.preventDefault();
                var i = n(e);
                K = i.x, S = i.y, l = E.clientWidth, d = E.clientHeight, E.appendChild(I), t(document, ["mousemove", "touchmove"], o), t(document, ["mouseup", "touchend"], s)
            }

            if (e = e || {}, !Modal.div) {
                Modal.heightAdded = 48, Modal.widthAdded = 2;
                var l, d, u = Math.min(configOrDefault(e.width, 1e3), window.innerWidth - Modal.widthAdded), c = Math.min(configOrDefault(e.height, 700), window.innerHeight - Modal.heightAdded), f = !1, h = !1, g = !1, p = 0, m = 0, v = e.width, w = e.height;
                e.width = e.height = "100%";
                var y = Modal.div = document.createElement("div");
                y.id = "ckf-modal", y.style.position = "fixed", y.style.top = (document.documentElement.clientHeight - Modal.heightAdded) / 2 - c / 2 + "px", y.style.left = (document.documentElement.clientWidth - Modal.widthAdded) / 2 - u / 2 + "px", y.style.background = "#fff", y.style.border = "1px solid #aaa", y.style.boxShadow = "3px 3px 5px rgba(0,0,0,0.2)", y.style.borderTopLeftRadius = y.style.borderTopRightRadius = "5px", y.style.zIndex = 8999, y.innerHTML = '<div id="ckf-modal-header" style="cursor: move; border-top-left-radius:5px; border-top-right-radius:5px; background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2Y3ZjdmNyIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNhZGFkYWQiIHN0b3Atb3BhY2l0eT0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz4KPC9zdmc+);border-bottom:1px solid #c9c9c9;height:35px !important;"><a style="float: right; padding: 7px 10px 0 !important; margin: 0 !important; font-family: Arial, sans-serif !important; font-weight:bold; font-size: 20px !important; line-height: 20px !important; text-decoration: none !important; color: #888 !important;" id="ckf-modal-close" href="#">×</a></div><div id="ckf-modal-body" style="position: relative;width: ' + u + "px; height: " + c + 'px"></div><div id="ckf-modal-footer" style="height: 10px !important; background: #f3f3f3"><span id="ckf-modal-resize-handle-sw" style="cursor: sw-resize; width: 7px; height: 7px; display: block; float: left; border-left: 3px solid #ddd; border-bottom: 3px solid #ddd;"></span><span id="ckf-modal-resize-handle-se" style="cursor: se-resize; width: 7px; height: 7px; display: block; float: right; border-right: 3px solid #ddd; border-bottom: 3px solid #ddd;"></span></div>', document.body.appendChild(y), CKFinder.widget("ckf-modal-body", e), Modal.footer = document.getElementById("ckf-modal-footer"), window.addEventListener("orientationchange", function () {
                    Modal.maximized || setTimeout(function () {
                        u = Math.min(configOrDefault(v, 1e3), document.documentElement.clientWidth - Modal.widthAdded), c = Math.min(configOrDefault(w, 700), document.documentElement.clientHeight - Modal.heightAdded);
                        var e = document.getElementById("ckf-modal-body");
                        e.style.width = u + "px", e.style.height = c + "px", y.style.top = (document.documentElement.clientHeight - Modal.heightAdded) / 2 - c / 2 + "px", y.style.left = (document.documentElement.clientWidth - Modal.widthAdded) / 2 - u / 2 + "px"
                    }, 100)
                });
                var b = document.getElementById("ckf-modal-close");
                t(b, ["click", "touchend"], function (e) {
                    e.stopPropagation(), e.preventDefault(), Modal.close()
                });
                var C = Modal.header = document.getElementById("ckf-modal-header"), F = y.offsetLeft, x = y.offsetTop;
                t(C, ["mousedown", "touchstart"], function (e) {
                    e.preventDefault(), g = !0;
                    var i = n(e);
                    p = i.x, m = i.y, F = p - y.offsetLeft, x = m - y.offsetTop, E.appendChild(I), t(document, ["mousemove", "touchmove"], r)
                }), t(C, ["mouseup", "touchend"], function () {
                    g = !1, I.parentNode === E && E.removeChild(I), i(document, ["mousemove", "touchmove"], r)
                });
                var k = document.getElementById("ckf-modal-resize-handle-se"), M = document.getElementById("ckf-modal-resize-handle-sw"), E = Modal.body = document.getElementById("ckf-modal-body"), I = document.createElement("div");
                I.style.position = "absolute", I.style.top = I.style.right = I.style.bottom = I.style.left = 0, I.style.zIndex = 1e5, t(k, ["mousedown", "touchstart"], function (e) {
                    f = !0, a(e)
                }), t(M, ["mousedown", "touchstart"], function (e) {
                    F = y.offsetLeft, h = !0, a(e)
                });
                var K, S
            }
        }, close: function () {
            Modal.div && (document.body.removeChild(Modal.div), Modal.div = null, Modal.maximized && (document.documentElement.style.overflow = Modal.preDocumentOverflow, document.documentElement.style.width = Modal.preDocumentWidth, document.documentElement.style.height = Modal.preDocumentHeight))
        }, maximize: function (e) {
            e ? (Modal.preDocumentOverflow = document.documentElement.style.overflow, Modal.preDocumentWidth = document.documentElement.style.width, Modal.preDocumentHeight = document.documentElement.style.height, document.documentElement.style.overflow = "hidden", document.documentElement.style.width = 0, document.documentElement.style.height = 0, Modal.preLeft = Modal.div.style.left, Modal.preTop = Modal.div.style.top, Modal.preWidth = Modal.body.style.width, Modal.preHeight = Modal.body.style.height, Modal.preBorder = Modal.div.style.border, Modal.div.style.left = Modal.div.style.top = Modal.div.style.right = Modal.div.style.bottom = 0, Modal.body.style.width = "100%", Modal.body.style.height = "100%", Modal.div.style.border = "", Modal.header.style.display = "none", Modal.footer.style.display = "none", Modal.maximized = !0) : (document.documentElement.style.overflow = Modal.preDocumentOverflow, document.documentElement.style.width = Modal.preDocumentWidth, document.documentElement.style.height = Modal.preDocumentHeight, Modal.div.style.right = Modal.div.style.bottom = "", Modal.div.style.left = Modal.preLeft, Modal.div.style.top = Modal.preTop, Modal.div.style.border = Modal.preBorder, Modal.body.style.width = Modal.preWidth, Modal.body.style.height = Modal.preHeight, Modal.header.style.display = "block", Modal.footer.style.display = "block", Modal.maximized = !1)
        }
    }, ckfPopupWindow;
    return {
        basePath: basePath, modal: function (e) {
            return "close" === e ? Modal.close() : "visible" === e ? !!Modal.div : "maximize" === e ? Modal.maximize(!0) : "minimize" === e ? Modal.maximize(!1) : void Modal.open(e)
        }, config: function (e) {
            CKFinder._config = e
        }, widget: function (e, t) {
            function i(e) {
                return e + (/^[0-9]+$/.test(e) ? "px" : "")
            }

            if (t = t || {}, !e)throw'No "id" option defined in CKFinder.widget() call.';
            var n = "border:none;";
            n += "width:" + i(configOrDefault(t.width, "100%")) + ";", n += "height:" + i(configOrDefault(t.height, "400")) + ";";
            var r = document.createElement("iframe");
            r.src = "", r.setAttribute("style", n), r.setAttribute("seamless", "seamless"), r.setAttribute("scrolling", "auto"), r.attachEvent ? r.attachEvent("onload", function () {
                internalCKFinderInit(t, r.contentDocument, "parent")
            }) : r.onload = function () {
                internalCKFinderInit(t, r.contentDocument, "parent")
            };
            var o = document.getElementById(e);
            o.innerHTML = "", o.appendChild(r), checkOnInit(t, r.contentWindow)
        }, popup: function (e) {
            e = e || {}, window.CKFinder._popupOptions = e;
            var t = isIE9() ? window.CKFinder.basePath + "ckfinder.html" : "about:blank", i = "location=no,menubar=no,toolbar=no,dependent=yes,minimizable=no,modal=yes,alwaysRaised=yes,resizable=yes,scrollbars=yes";
            i += ",width=" + configOrDefault(e.width, 1e3), i += ",height=" + configOrDefault(e.height, 700), i += ",top=50", i += ",left=100", "undefined" == typeof ckfPopupWindow || ckfPopupWindow.closed || ckfPopupWindow.close();
            var n;
            try {
                var r = "CKFPopup" + Date.now();
                ckfPopupWindow = window.open(t, r, i, !0), n = ckfPopupWindow.document
            } catch (o) {
                return
            }
            return ckfPopupWindow ? (n.open(), n.write('<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no"><title>CKFinder 3 - File Browser</title></head><body><script src="' + window.CKFinder.basePath + 'ckfinder.js"></script><script>window.isCKFinderPopup=true;window.onload=function() {    CKFinder.start( window.opener.CKFinder._popupOptions );}</script></body></html>'), n.close(), ckfPopupWindow.focus(), ckfPopupWindow) : void 0
        }, start: function (e) {
            if (!e) {
                var t = window.opener, i = {};
                e = {};
                var n = window.location.search.substring(1);
                if (n)for (var r = n.split("&"), o = 0; o < r.length; ++o) {
                    var s = r[o].split("=");
                    i[s[0]] = s[1] || null
                }
                if (i.popup && (window.isCKFinderPopup = !0), t && i.configId && t.CKFinder && t.CKFinder._popupOptions) {
                    var a = decodeURIComponent(i.configId);
                    e = t.CKFinder._popupOptions[a] || {}, e._omitCheckOnInit = !0
                }
            }
            CKFinder._setup(window, document), checkOnInit(e, window), CKFinder.start(e)
        }, setupCKEditor: function (e, t, i) {
            if (!e) {
                for (var n in CKEDITOR.instances)CKFinder.setupCKEditor(CKEDITOR.instances[n]);
                return void CKEDITOR.on("instanceCreated", function (e) {
                    CKFinder.setupCKEditor(e.editor)
                })
            }
            e.config.filebrowserBrowseUrl = window.CKFinder.basePath + "ckfinder.html", i = extendObject({
                command: "QuickUpload",
                type: "Files"
            }, i);
            var r = window.CKFinder.basePath + "core/connector/php/connector.php";
            t && (window.CKFinder._popupOptions || (window.CKFinder._popupOptions = {}), t._omitCheckOnInit = !0, window.CKFinder._popupOptions[e.name] = t, e.config.filebrowserBrowseUrl += "?popup=1&configId=" + encodeURIComponent(e.name), t.connectorPath ? r = t.connectorPath : t.connectorLanguage && (r = window.CKFinder.basePath + "core/connector/" + t.connectorLanguage + "/connector." + t.connectorLanguage)), e.config.filebrowserUploadUrl = r + createUrlParams(i)
        }, _setup: function (window, document) {
            window.CKFinder = window.CKFinder || {}, window.CKFinder.basePath = function () {
                if (window.parent && window.parent.CKFinder && window.parent.CKFinder.basePath)return window.parent.CKFinder.basePath;
                for (var e, t, i = document.getElementsByTagName("script"), n = 0; n < i.length && (e = i[n], t = void 0 !== e.getAttribute.length ? e.src : e.getAttribute("src"), !t || "ckfinder.js" !== t.split("/").slice(-1)[0]); n++);
                return t.split("/").slice(0, -1).join("/") + "/"
            }();
            var CKFinder;
            !function () {
                if (!CKFinder || !CKFinder.requirejs) {
                    CKFinder ? require = CKFinder : CKFinder = {};
                    var requirejs, require, define;
                    !function (global) {
                        function isFunction(e) {
                            return "[object Function]" === ostring.call(e)
                        }

                        function isArray(e) {
                            return "[object Array]" === ostring.call(e)
                        }

                        function each(e, t) {
                            if (e) {
                                var i;
                                for (i = 0; i < e.length && (!e[i] || !t(e[i], i, e)); i += 1);
                            }
                        }

                        function eachReverse(e, t) {
                            if (e) {
                                var i;
                                for (i = e.length - 1; i > -1 && (!e[i] || !t(e[i], i, e)); i -= 1);
                            }
                        }

                        function hasProp(e, t) {
                            return hasOwn.call(e, t)
                        }

                        function getOwn(e, t) {
                            return hasProp(e, t) && e[t]
                        }

                        function eachProp(e, t) {
                            var i;
                            for (i in e)if (hasProp(e, i) && t(e[i], i))break
                        }

                        function mixin(e, t, i, n) {
                            return t && eachProp(t, function (t, r) {
                                (i || !hasProp(e, r)) && (!n || "object" != typeof t || !t || isArray(t) || isFunction(t) || t instanceof RegExp ? e[r] = t : (e[r] || (e[r] = {}), mixin(e[r], t, i, n)))
                            }), e
                        }

                        function bind(e, t) {
                            return function () {
                                return t.apply(e, arguments)
                            }
                        }

                        function scripts() {
                            return document.getElementsByTagName("script")
                        }

                        function defaultOnError(e) {
                            throw e
                        }

                        function getGlobal(e) {
                            if (!e)return e;
                            var t = global;
                            return each(e.split("."), function (e) {
                                t = t[e]
                            }), t
                        }

                        function makeError(e, t, i, n) {
                            var r = new Error(t + "\nhttp://requirejs.org/docs/errors.html#" + e);
                            return r.requireType = e, r.requireModules = n, i && (r.originalError = i), r
                        }

                        function newContext(e) {
                            function t(e) {
                                var t, i;
                                for (t = 0; t < e.length; t++)if (i = e[t], "." === i)e.splice(t, 1), t -= 1; else if (".." === i) {
                                    if (0 === t || 1 === t && ".." === e[2] || ".." === e[t - 1])continue;
                                    t > 0 && (e.splice(t - 1, 2), t -= 2)
                                }
                            }

                            function i(e, i, n) {
                                var r, o, s, a, l, d, u, c, f, h, g, p, m = i && i.split("/"), v = x.map, w = v && v["*"];
                                if (e && (e = e.split("/"), u = e.length - 1, x.nodeIdCompat && jsSuffixRegExp.test(e[u]) && (e[u] = e[u].replace(jsSuffixRegExp, "")), "." === e[0].charAt(0) && m && (p = m.slice(0, m.length - 1), e = p.concat(e)), t(e), e = e.join("/")), n && v && (m || w)) {
                                    s = e.split("/");
                                    e:for (a = s.length; a > 0; a -= 1) {
                                        if (d = s.slice(0, a).join("/"), m)for (l = m.length; l > 0; l -= 1)if (o = getOwn(v, m.slice(0, l).join("/")), o && (o = getOwn(o, d))) {
                                            c = o, f = a;
                                            break e
                                        }
                                        !h && w && getOwn(w, d) && (h = getOwn(w, d), g = a)
                                    }
                                    !c && h && (c = h, f = g), c && (s.splice(0, f, c), e = s.join("/"))
                                }
                                return r = getOwn(x.pkgs, e), r ? r : e
                            }

                            function n(e) {
                                isBrowser && each(scripts(), function (t) {
                                    return t.getAttribute("data-requiremodule") === e && t.getAttribute("data-requirecontext") === b.contextName ? (t.parentNode.removeChild(t), !0) : void 0
                                })
                            }

                            function r(e) {
                                var t = getOwn(x.paths, e);
                                return t && isArray(t) && t.length > 1 ? (t.shift(), b.require.undef(e), b.makeRequire(null, {skipMap: !0})([e]), !0) : void 0
                            }

                            function o(e) {
                                var t, i = e ? e.indexOf("!") : -1;
                                return i > -1 && (t = e.substring(0, i), e = e.substring(i + 1, e.length)), [t, e]
                            }

                            function s(e, t, n, r) {
                                var s, a, l, d, u = null, c = t ? t.name : null, f = e, h = !0, g = "";
                                return e || (h = !1, e = "_@r" + (_ += 1)), d = o(e), u = d[0], e = d[1], u && (u = i(u, c, r), a = getOwn(K, u)), e && (u ? g = a && a.normalize ? a.normalize(e, function (e) {
                                    return i(e, c, r)
                                }) : -1 === e.indexOf("!") ? i(e, c, r) : e : (g = i(e, c, r), d = o(g), u = d[0], g = d[1], n = !0, s = b.nameToUrl(g))), l = !u || a || n ? "" : "_unnormalized" + (V += 1), {
                                    prefix: u,
                                    name: g,
                                    parentMap: t,
                                    unnormalized: !!l,
                                    url: s,
                                    originalName: f,
                                    isDefine: h,
                                    id: (u ? u + "!" + g : g) + l
                                }
                            }

                            function a(e) {
                                var t = e.id, i = getOwn(k, t);
                                return i || (i = k[t] = new b.Module(e)), i
                            }

                            function l(e, t, i) {
                                var n = e.id, r = getOwn(k, n);
                                !hasProp(K, n) || r && !r.defineEmitComplete ? (r = a(e), r.error && "error" === t ? i(r.error) : r.on(t, i)) : "defined" === t && i(K[n])
                            }

                            function d(e, t) {
                                var i = e.requireModules, n = !1;
                                t ? t(e) : (each(i, function (t) {
                                    var i = getOwn(k, t);
                                    i && (i.error = e, i.events.error && (n = !0, i.emit("error", e)))
                                }), n || req.onError(e))
                            }

                            function u() {
                                globalDefQueue.length && (apsp.apply(I, [I.length, 0].concat(globalDefQueue)), globalDefQueue = [])
                            }

                            function c(e) {
                                delete k[e], delete M[e]
                            }

                            function f(e, t, i) {
                                var n = e.map.id;
                                e.error ? e.emit("error", e.error) : (t[n] = !0, each(e.depMaps, function (n, r) {
                                    var o = n.id, s = getOwn(k, o);
                                    !s || e.depMatched[r] || i[o] || (getOwn(t, o) ? (e.defineDep(r, K[o]), e.check()) : f(s, t, i))
                                }), i[n] = !0)
                            }

                            function h() {
                                var e, t, i = 1e3 * x.waitSeconds, o = i && b.startTime + i < (new Date).getTime(), s = [], a = [], l = !1, u = !0;
                                if (!w) {
                                    if (w = !0, eachProp(M, function (e) {
                                            var i = e.map, d = i.id;
                                            if (e.enabled && (i.isDefine || a.push(e), !e.error))if (!e.inited && o)r(d) ? (t = !0, l = !0) : (s.push(d), n(d)); else if (!e.inited && e.fetched && i.isDefine && (l = !0, !i.prefix))return u = !1
                                        }), o && s.length)return e = makeError("timeout", "Load timeout for modules: " + s, null, s), e.contextName = b.contextName, d(e);
                                    u && each(a, function (e) {
                                        f(e, {}, {})
                                    }), o && !t || !l || !isBrowser && !isWebWorker || F || (F = setTimeout(function () {
                                        F = 0, h()
                                    }, 50)), w = !1
                                }
                            }

                            function g(e) {
                                hasProp(K, e[0]) || a(s(e[0], null, !0)).init(e[1], e[2])
                            }

                            function p(e, t, i, n) {
                                e.detachEvent && !isOpera ? n && e.detachEvent(n, t) : e.removeEventListener(i, t, !1)
                            }

                            function m(e) {
                                var t = e.currentTarget || e.srcElement;
                                return p(t, b.onScriptLoad, "load", "onreadystatechange"), p(t, b.onScriptError, "error"), {
                                    node: t,
                                    id: t && t.getAttribute("data-requiremodule")
                                }
                            }

                            function v() {
                                var e;
                                for (u(); I.length;) {
                                    if (e = I.shift(), null === e[0])return d(makeError("mismatch", "Mismatched anonymous define() module: " + e[e.length - 1]));
                                    g(e)
                                }
                            }

                            var w, y, b, C, F, x = {
                                waitSeconds: 7,
                                baseUrl: "./",
                                paths: {},
                                bundles: {},
                                pkgs: {},
                                shim: {},
                                config: {}
                            }, k = {}, M = {}, E = {}, I = [], K = {}, S = {}, T = {}, _ = 1, V = 1;
                            return C = {
                                require: function (e) {
                                    return e.require ? e.require : e.require = b.makeRequire(e.map)
                                }, exports: function (e) {
                                    return e.usingExports = !0, e.map.isDefine ? e.exports ? K[e.map.id] = e.exports : e.exports = K[e.map.id] = {} : void 0
                                }, module: function (e) {
                                    return e.module ? e.module : e.module = {
                                        id: e.map.id,
                                        uri: e.map.url,
                                        config: function () {
                                            return getOwn(x.config, e.map.id) || {}
                                        },
                                        exports: e.exports || (e.exports = {})
                                    }
                                }
                            }, y = function (e) {
                                this.events = getOwn(E, e.id) || {}, this.map = e, this.shim = getOwn(x.shim, e.id), this.depExports = [], this.depMaps = [], this.depMatched = [], this.pluginMaps = {}, this.depCount = 0
                            }, y.prototype = {
                                init: function (e, t, i, n) {
                                    n = n || {}, this.inited || (this.factory = t, i ? this.on("error", i) : this.events.error && (i = bind(this, function (e) {
                                        this.emit("error", e)
                                    })), this.depMaps = e && e.slice(0), this.errback = i, this.inited = !0, this.ignore = n.ignore, n.enabled || this.enabled ? this.enable() : this.check())
                                }, defineDep: function (e, t) {
                                    this.depMatched[e] || (this.depMatched[e] = !0, this.depCount -= 1, this.depExports[e] = t)
                                }, fetch: function () {
                                    if (!this.fetched) {
                                        this.fetched = !0, b.startTime = (new Date).getTime();
                                        var e = this.map;
                                        return this.shim ? void b.makeRequire(this.map, {enableBuildCallback: !0})(this.shim.deps || [], bind(this, function () {
                                            return e.prefix ? this.callPlugin() : this.load()
                                        })) : e.prefix ? this.callPlugin() : this.load()
                                    }
                                }, load: function () {
                                    var e = this.map.url;
                                    S[e] || (S[e] = !0, b.load(this.map.id, e))
                                }, check: function () {
                                    if (this.enabled && !this.enabling) {
                                        var e, t, i = this.map.id, n = this.depExports, r = this.exports, o = this.factory;
                                        if (this.inited) {
                                            if (this.error)this.emit("error", this.error); else if (!this.defining) {
                                                if (this.defining = !0, this.depCount < 1 && !this.defined) {
                                                    if (isFunction(o)) {
                                                        if (this.events.error && this.map.isDefine || req.onError !== defaultOnError)try {
                                                            r = b.execCb(i, o, n, r)
                                                        } catch (s) {
                                                            e = s
                                                        } else r = b.execCb(i, o, n, r);
                                                        if (this.map.isDefine && void 0 === r && (t = this.module, t ? r = t.exports : this.usingExports && (r = this.exports)), e)return e.requireMap = this.map, e.requireModules = this.map.isDefine ? [this.map.id] : null, e.requireType = this.map.isDefine ? "define" : "require", d(this.error = e)
                                                    } else r = o;
                                                    this.exports = r, this.map.isDefine && !this.ignore && (K[i] = r, req.onResourceLoad && req.onResourceLoad(b, this.map, this.depMaps)), c(i), this.defined = !0
                                                }
                                                this.defining = !1, this.defined && !this.defineEmitted && (this.defineEmitted = !0, this.emit("defined", this.exports), this.defineEmitComplete = !0)
                                            }
                                        } else this.fetch()
                                    }
                                }, callPlugin: function () {
                                    var e = this.map, t = e.id, n = s(e.prefix);
                                    this.depMaps.push(n), l(n, "defined", bind(this, function (n) {
                                        var r, o, u, f = getOwn(T, this.map.id), h = this.map.name, g = this.map.parentMap ? this.map.parentMap.name : null, p = b.makeRequire(e.parentMap, {enableBuildCallback: !0});
                                        return this.map.unnormalized ? (n.normalize && (h = n.normalize(h, function (e) {
                                                return i(e, g, !0)
                                            }) || ""), o = s(e.prefix + "!" + h, this.map.parentMap), l(o, "defined", bind(this, function (e) {
                                            this.init([], function () {
                                                return e
                                            }, null, {enabled: !0, ignore: !0})
                                        })), u = getOwn(k, o.id), void(u && (this.depMaps.push(o), this.events.error && u.on("error", bind(this, function (e) {
                                            this.emit("error", e)
                                        })), u.enable()))) : f ? (this.map.url = b.nameToUrl(f), void this.load()) : (r = bind(this, function (e) {
                                            this.init([], function () {
                                                return e
                                            }, null, {enabled: !0})
                                        }), r.error = bind(this, function (e) {
                                            this.inited = !0, this.error = e, e.requireModules = [t], eachProp(k, function (e) {
                                                0 === e.map.id.indexOf(t + "_unnormalized") && c(e.map.id)
                                            }), d(e)
                                        }), r.fromText = bind(this, function (i, n) {
                                            var o = e.name, l = s(o), u = useInteractive;
                                            n && (i = n), u && (useInteractive = !1), a(l), hasProp(x.config, t) && (x.config[o] = x.config[t]);
                                            try {
                                                req.exec(i)
                                            } catch (c) {
                                                return d(makeError("fromtexteval", "fromText eval for " + t + " failed: " + c, c, [t]))
                                            }
                                            u && (useInteractive = !0), this.depMaps.push(l), b.completeLoad(o), p([o], r)
                                        }), void n.load(e.name, p, r, x))
                                    })), b.enable(n, this), this.pluginMaps[n.id] = n
                                }, enable: function () {
                                    M[this.map.id] = this, this.enabled = !0, this.enabling = !0, each(this.depMaps, bind(this, function (e, t) {
                                        var i, n, r;
                                        if ("string" == typeof e) {
                                            if (e = s(e, this.map.isDefine ? this.map : this.map.parentMap, !1, !this.skipMap), this.depMaps[t] = e, r = getOwn(C, e.id))return void(this.depExports[t] = r(this));
                                            this.depCount += 1, l(e, "defined", bind(this, function (e) {
                                                this.undefed || (this.defineDep(t, e), this.check())
                                            })), this.errback ? l(e, "error", bind(this, this.errback)) : this.events.error && l(e, "error", bind(this, function (e) {
                                                this.emit("error", e)
                                            }))
                                        }
                                        i = e.id, n = k[i], hasProp(C, i) || !n || n.enabled || b.enable(e, this)
                                    })), eachProp(this.pluginMaps, bind(this, function (e) {
                                        var t = getOwn(k, e.id);
                                        t && !t.enabled && b.enable(e, this)
                                    })), this.enabling = !1, this.check()
                                }, on: function (e, t) {
                                    var i = this.events[e];
                                    i || (i = this.events[e] = []), i.push(t)
                                }, emit: function (e, t) {
                                    each(this.events[e], function (e) {
                                        e(t)
                                    }), "error" === e && delete this.events[e]
                                }
                            }, b = {
                                config: x,
                                contextName: e,
                                registry: k,
                                defined: K,
                                urlFetched: S,
                                defQueue: I,
                                Module: y,
                                makeModuleMap: s,
                                nextTick: req.nextTick,
                                onError: d,
                                configure: function (e) {
                                    e.baseUrl && "/" !== e.baseUrl.charAt(e.baseUrl.length - 1) && (e.baseUrl += "/");
                                    var t = x.shim, i = {paths: !0, bundles: !0, config: !0, map: !0};
                                    eachProp(e, function (e, t) {
                                        i[t] ? (x[t] || (x[t] = {}), mixin(x[t], e, !0, !0)) : x[t] = e
                                    }), e.bundles && eachProp(e.bundles, function (e, t) {
                                        each(e, function (e) {
                                            e !== t && (T[e] = t)
                                        })
                                    }), e.shim && (eachProp(e.shim, function (e, i) {
                                        isArray(e) && (e = {deps: e}), !e.exports && !e.init || e.exportsFn || (e.exportsFn = b.makeShimExports(e)), t[i] = e
                                    }), x.shim = t), e.packages && each(e.packages, function (e) {
                                        var t, i;
                                        e = "string" == typeof e ? {name: e} : e, i = e.name, t = e.location, t && (x.paths[i] = e.location), x.pkgs[i] = e.name + "/" + (e.main || "main").replace(currDirRegExp, "").replace(jsSuffixRegExp, "")
                                    }), eachProp(k, function (e, t) {
                                        e.inited || e.map.unnormalized || (e.map = s(t, null, !0))
                                    }), (e.deps || e.callback) && b.require(e.deps || [], e.callback)
                                },
                                makeShimExports: function (e) {
                                    function t() {
                                        var t;
                                        return e.init && (t = e.init.apply(global, arguments)), t || e.exports && getGlobal(e.exports)
                                    }

                                    return t
                                },
                                makeRequire: function (t, r) {
                                    function o(i, n, l) {
                                        var u, c, f;
                                        return r.enableBuildCallback && n && isFunction(n) && (n.__requireJsBuild = !0), "string" == typeof i ? isFunction(n) ? d(makeError("requireargs", "Invalid require call"), l) : t && hasProp(C, i) ? C[i](k[t.id]) : req.get ? req.get(b, i, t, o) : (c = s(i, t, !1, !0), u = c.id, hasProp(K, u) ? K[u] : d(makeError("notloaded", 'Module name "' + u + '" has not been loaded yet for context: ' + e + (t ? "" : ". Use require([])")))) : (v(), b.nextTick(function () {
                                            v(), f = a(s(null, t)), f.skipMap = r.skipMap, f.init(i, n, l, {enabled: !0}), h()
                                        }), o)
                                    }

                                    return r = r || {}, mixin(o, {
                                        isBrowser: isBrowser, toUrl: function (e) {
                                            var n, r = e.lastIndexOf("."), o = e.split("/")[0], s = "." === o || ".." === o;
                                            return -1 !== r && (!s || r > 1) && (n = e.substring(r, e.length), e = e.substring(0, r)), b.nameToUrl(i(e, t && t.id, !0), n, !0)
                                        }, defined: function (e) {
                                            return hasProp(K, s(e, t, !1, !0).id)
                                        }, specified: function (e) {
                                            return e = s(e, t, !1, !0).id, hasProp(K, e) || hasProp(k, e)
                                        }
                                    }), t || (o.undef = function (e) {
                                        u();
                                        var i = s(e, t, !0), r = getOwn(k, e);
                                        r.undefed = !0, n(e), delete K[e], delete S[i.url], delete E[e], eachReverse(I, function (t, i) {
                                            t[0] === e && I.splice(i, 1)
                                        }), r && (r.events.defined && (E[e] = r.events), c(e))
                                    }), o
                                },
                                enable: function (e) {
                                    var t = getOwn(k, e.id);
                                    t && a(e).enable()
                                },
                                completeLoad: function (e) {
                                    var t, i, n, o = getOwn(x.shim, e) || {}, s = o.exports;
                                    for (u(); I.length;) {
                                        if (i = I.shift(), null === i[0]) {
                                            if (i[0] = e, t)break;
                                            t = !0
                                        } else i[0] === e && (t = !0);
                                        g(i)
                                    }
                                    if (n = getOwn(k, e), !t && !hasProp(K, e) && n && !n.inited) {
                                        if (!(!x.enforceDefine || s && getGlobal(s)))return r(e) ? void 0 : d(makeError("nodefine", "No define call for " + e, null, [e]));
                                        g([e, o.deps || [], o.exportsFn])
                                    }
                                    h()
                                },
                                nameToUrl: function (e, t, i) {
                                    var n, r, o, s, a, l, d, u = getOwn(x.pkgs, e);
                                    if (u && (e = u), d = getOwn(T, e))return b.nameToUrl(d, t, i);
                                    if (req.jsExtRegExp.test(e))a = e + (t || ""); else {
                                        for (n = x.paths, r = e.split("/"), o = r.length; o > 0; o -= 1)if (s = r.slice(0, o).join("/"), l = getOwn(n, s)) {
                                            isArray(l) && (l = l[0]), r.splice(0, o, l);
                                            break
                                        }
                                        a = r.join("/"), a += t || (/^data\:|\?/.test(a) || i ? "" : ".js"), a = ("/" === a.charAt(0) || a.match(/^[\w\+\.\-]+:/) ? "" : x.baseUrl) + a
                                    }
                                    return x.urlArgs ? a + ((-1 === a.indexOf("?") ? "?" : "&") + x.urlArgs) : a
                                },
                                load: function (e, t) {
                                    req.load(b, e, t)
                                },
                                execCb: function (e, t, i, n) {
                                    return t.apply(n, i)
                                },
                                onScriptLoad: function (e) {
                                    if ("load" === e.type || readyRegExp.test((e.currentTarget || e.srcElement).readyState)) {
                                        interactiveScript = null;
                                        var t = m(e);
                                        b.completeLoad(t.id)
                                    }
                                },
                                onScriptError: function (e) {
                                    var t = m(e);
                                    return r(t.id) ? void 0 : d(makeError("scripterror", "Script error for: " + t.id, e, [t.id]))
                                }
                            }, b.require = b.makeRequire(), b
                        }

                        function getInteractiveScript() {
                            return interactiveScript && "interactive" === interactiveScript.readyState ? interactiveScript : (eachReverse(scripts(), function (e) {
                                return "interactive" === e.readyState ? interactiveScript = e : void 0
                            }), interactiveScript)
                        }

                        var req, s, head, baseElement, dataMain, src, interactiveScript, currentlyAddingScript, mainScript, subPath, version = "2.1.18", commentRegExp = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm, cjsRequireRegExp = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g, jsSuffixRegExp = /\.js$/, currDirRegExp = /^\.\//, op = Object.prototype, ostring = op.toString, hasOwn = op.hasOwnProperty, ap = Array.prototype, apsp = ap.splice, isBrowser = !("undefined" == typeof window || "undefined" == typeof navigator || !window.document), isWebWorker = !isBrowser && "undefined" != typeof importScripts, readyRegExp = isBrowser && "PLAYSTATION 3" === navigator.platform ? /^complete$/ : /^(complete|loaded)$/, defContextName = "_", isOpera = "undefined" != typeof opera && "[object Opera]" === opera.toString(), contexts = {}, cfg = {}, globalDefQueue = [], useInteractive = !1;
                        if ("undefined" == typeof define) {
                            if ("undefined" != typeof requirejs) {
                                if (isFunction(requirejs))return;
                                cfg = requirejs, requirejs = void 0
                            }
                            "undefined" == typeof require || isFunction(require) || (cfg = require, require = void 0), req = requirejs = function (e, t, i, n) {
                                var r, o, s = defContextName;
                                return isArray(e) || "string" == typeof e || (o = e, isArray(t) ? (e = t, t = i, i = n) : e = []), o && o.context && (s = o.context), r = getOwn(contexts, s), r || (r = contexts[s] = req.s.newContext(s)), o && r.configure(o), r.require(e, t, i)
                            }, req.config = function (e) {
                                return req(e)
                            }, req.nextTick = "undefined" != typeof setTimeout ? function (e) {
                                setTimeout(e, 4)
                            } : function (e) {
                                e()
                            }, require || (require = req), req.version = version, req.jsExtRegExp = /^\/|:|\?|\.js$/, req.isBrowser = isBrowser, s = req.s = {
                                contexts: contexts,
                                newContext: newContext
                            }, req({}), each(["toUrl", "undef", "defined", "specified"], function (e) {
                                req[e] = function () {
                                    var t = contexts[defContextName];
                                    return t.require[e].apply(t, arguments)
                                }
                            }), isBrowser && (head = s.head = document.getElementsByTagName("head")[0], baseElement = document.getElementsByTagName("base")[0], baseElement && (head = s.head = baseElement.parentNode)), req.onError = defaultOnError, req.createNode = function (e) {
                                var t = e.xhtml ? document.createElementNS("http://www.w3.org/1999/xhtml", "html:script") : document.createElement("script");
                                return t.type = e.scriptType || "text/javascript", t.charset = "utf-8", t.async = !0, t
                            }, req.load = function (e, t, i) {
                                var n, r = e && e.config || {};
                                if (isBrowser)return n = req.createNode(r, t, i), n.setAttribute("data-requirecontext", e.contextName), n.setAttribute("data-requiremodule", t), !n.attachEvent || n.attachEvent.toString && n.attachEvent.toString().indexOf("[native code") < 0 || isOpera ? (n.addEventListener("load", e.onScriptLoad, !1), n.addEventListener("error", e.onScriptError, !1)) : (useInteractive = !0, n.attachEvent("onreadystatechange", e.onScriptLoad)), n.src = i, currentlyAddingScript = n, baseElement ? head.insertBefore(n, baseElement) : head.appendChild(n), currentlyAddingScript = null, n;
                                if (isWebWorker)try {
                                    importScripts(i), e.completeLoad(t)
                                } catch (o) {
                                    e.onError(makeError("importscripts", "importScripts failed for " + t + " at " + i, o, [t]))
                                }
                            }, isBrowser && !cfg.skipDataMain && eachReverse(scripts(), function (e) {
                                return head || (head = e.parentNode), dataMain = e.getAttribute("data-main"), dataMain ? (mainScript = dataMain, cfg.baseUrl || (src = mainScript.split("/"), mainScript = src.pop(), subPath = src.length ? src.join("/") + "/" : "./", cfg.baseUrl = subPath), mainScript = mainScript.replace(jsSuffixRegExp, ""), req.jsExtRegExp.test(mainScript) && (mainScript = dataMain), cfg.deps = cfg.deps ? cfg.deps.concat(mainScript) : [mainScript], !0) : void 0
                            }), define = function (e, t, i) {
                                var n, r;
                                "string" != typeof e && (i = t, t = e, e = null), isArray(t) || (i = t, t = null), !t && isFunction(i) && (t = [], i.length && (i.toString().replace(commentRegExp, "").replace(cjsRequireRegExp, function (e, i) {
                                    t.push(i)
                                }), t = (1 === i.length ? ["require"] : ["require", "exports", "module"]).concat(t))), useInteractive && (n = currentlyAddingScript || getInteractiveScript(), n && (e || (e = n.getAttribute("data-requiremodule")), r = contexts[n.getAttribute("data-requirecontext")])), (r ? r.defQueue : globalDefQueue).push([e, t, i])
                            }, define.amd = {jQuery: !0}, req.exec = function (text) {
                                return eval(text)
                            }, req(cfg)
                        }
                    }(this), CKFinder.requirejs = requirejs, CKFinder.require = require, CKFinder.define = define
                }
            }(), CKFinder.define("requireLib", function () {
            }), function () {
                function e(e, t, i) {
                    for (var n = (i || 0) - 1, r = e ? e.length : 0; ++n < r;)if (e[n] === t)return n;
                    return -1
                }

                function t(t, i) {
                    var n = typeof i;
                    if (t = t.cache, "boolean" == n || null == i)return t[i] ? 0 : -1;
                    "number" != n && "string" != n && (n = "object");
                    var r = "number" == n ? i : v + i;
                    return t = (t = t[n]) && t[r], "object" == n ? t && e(t, i) > -1 ? 0 : -1 : t ? 0 : -1
                }

                function i(e) {
                    var t = this.cache, i = typeof e;
                    if ("boolean" == i || null == e)t[e] = !0; else {
                        "number" != i && "string" != i && (i = "object");
                        var n = "number" == i ? e : v + e, r = t[i] || (t[i] = {});
                        "object" == i ? (r[n] || (r[n] = [])).push(e) : r[n] = !0
                    }
                }

                function n(e) {
                    return e.charCodeAt(0)
                }

                function r(e, t) {
                    for (var i = e.criteria, n = t.criteria, r = -1, o = i.length; ++r < o;) {
                        var s = i[r], a = n[r];
                        if (s !== a) {
                            if (s > a || "undefined" == typeof s)return 1;
                            if (a > s || "undefined" == typeof a)return -1
                        }
                    }
                    return e.index - t.index
                }

                function o(e) {
                    var t = -1, n = e.length, r = e[0], o = e[n / 2 | 0], s = e[n - 1];
                    if (r && "object" == typeof r && o && "object" == typeof o && s && "object" == typeof s)return !1;
                    var a = l();
                    a["false"] = a["null"] = a["true"] = a.undefined = !1;
                    var d = l();
                    for (d.array = e, d.cache = a, d.push = i; ++t < n;)d.push(e[t]);
                    return d
                }

                function s(e) {
                    return "\\" + W[e]
                }

                function a() {
                    return g.pop() || []
                }

                function l() {
                    return p.pop() || {
                            array: null,
                            cache: null,
                            criteria: null,
                            "false": !1,
                            index: 0,
                            "null": !1,
                            number: null,
                            object: null,
                            push: null,
                            string: null,
                            "true": !1,
                            undefined: !1,
                            value: null
                        }
                }

                function d(e) {
                    e.length = 0, g.length < y && g.push(e)
                }

                function u(e) {
                    var t = e.cache;
                    t && u(t), e.array = e.cache = e.criteria = e.object = e.number = e.string = e.value = null, p.length < y && p.push(e)
                }

                function c(e, t, i) {
                    t || (t = 0), "undefined" == typeof i && (i = e ? e.length : 0);
                    for (var n = -1, r = i - t || 0, o = Array(0 > r ? 0 : r); ++n < r;)o[n] = e[t + n];
                    return o
                }

                function f(i) {
                    function g(e) {
                        return e && "object" == typeof e && !Yi(e) && qi.call(e, "__wrapped__") ? e : new p(e)
                    }

                    function p(e, t) {
                        this.__chain__ = !!t, this.__wrapped__ = e
                    }

                    function y(e) {
                        function t() {
                            if (n) {
                                var e = c(n);
                                Ri.apply(e, arguments)
                            }
                            if (this instanceof t) {
                                var o = X(i.prototype), s = i.apply(o, e || arguments);
                                return Te(s) ? s : o
                            }
                            return i.apply(r, e || arguments)
                        }

                        var i = e[0], n = e[2], r = e[4];
                        return Ji(t, e), t
                    }

                    function W(e, t, i, n, r) {
                        if (i) {
                            var o = i(e);
                            if ("undefined" != typeof o)return o
                        }
                        var s = Te(e);
                        if (!s)return e;
                        var l = Ei.call(e);
                        if (!N[l])return e;
                        var u = Gi[l];
                        switch (l) {
                            case P:
                            case D:
                                return new u(+e);
                            case A:
                            case U:
                                return new u(e);
                            case O:
                                return o = u(e.source, M.exec(e)), o.lastIndex = e.lastIndex, o
                        }
                        var f = Yi(e);
                        if (t) {
                            var h = !n;
                            n || (n = a()), r || (r = a());
                            for (var g = n.length; g--;)if (n[g] == e)return r[g];
                            o = f ? u(e.length) : {}
                        } else o = f ? c(e) : on({}, e);
                        return f && (qi.call(e, "index") && (o.index = e.index), qi.call(e, "input") && (o.input = e.input)), t ? (n.push(e), r.push(o), (f ? Je : ln)(e, function (e, s) {
                            o[s] = W(e, t, i, n, r)
                        }), h && (d(n), d(r)), o) : o
                    }

                    function X(e) {
                        return Te(e) ? Ai(e) : {}
                    }

                    function J(e, t, i) {
                        if ("function" != typeof e)return Yt;
                        if ("undefined" == typeof t || !("prototype" in e))return e;
                        var n = e.__bindData__;
                        if ("undefined" == typeof n && (Xi.funcNames && (n = !e.name), n = n || !Xi.funcDecomp, !n)) {
                            var r = _i.call(e);
                            Xi.funcNames || (n = !E.test(r)), n || (n = T.test(r), Ji(e, n))
                        }
                        if (n === !1 || n !== !0 && 1 & n[1])return e;
                        switch (i) {
                            case 1:
                                return function (i) {
                                    return e.call(t, i)
                                };
                            case 2:
                                return function (i, n) {
                                    return e.call(t, i, n)
                                };
                            case 3:
                                return function (i, n, r) {
                                    return e.call(t, i, n, r)
                                };
                            case 4:
                                return function (i, n, r, o) {
                                    return e.call(t, i, n, r, o)
                                }
                        }
                        return Rt(e, t)
                    }

                    function Y(e) {
                        function t() {
                            var e = l ? s : this;
                            if (r) {
                                var g = c(r);
                                Ri.apply(g, arguments);
                            }
                            if ((o || u) && (g || (g = c(arguments)), o && Ri.apply(g, o), u && g.length < a))return n |= 16, Y([i, f ? n : -4 & n, g, null, s, a]);
                            if (g || (g = arguments), d && (i = e[h]), this instanceof t) {
                                e = X(i.prototype);
                                var p = i.apply(e, g);
                                return Te(p) ? p : e
                            }
                            return i.apply(e, g)
                        }

                        var i = e[0], n = e[1], r = e[2], o = e[3], s = e[4], a = e[5], l = 1 & n, d = 2 & n, u = 4 & n, f = 8 & n, h = i;
                        return Ji(t, e), t
                    }

                    function Z(i, n) {
                        var r = -1, s = le(), a = i ? i.length : 0, l = a >= w && s === e, d = [];
                        if (l) {
                            var c = o(n);
                            c ? (s = t, n = c) : l = !1
                        }
                        for (; ++r < a;) {
                            var f = i[r];
                            s(n, f) < 0 && d.push(f)
                        }
                        return l && u(n), d
                    }

                    function ee(e, t, i, n) {
                        for (var r = (n || 0) - 1, o = e ? e.length : 0, s = []; ++r < o;) {
                            var a = e[r];
                            if (a && "object" == typeof a && "number" == typeof a.length && (Yi(a) || fe(a))) {
                                t || (a = ee(a, t, i));
                                var l = -1, d = a.length, u = s.length;
                                for (s.length += d; ++l < d;)s[u++] = a[l]
                            } else i || s.push(a)
                        }
                        return s
                    }

                    function te(e, t, i, n, r, o) {
                        if (i) {
                            var s = i(e, t);
                            if ("undefined" != typeof s)return !!s
                        }
                        if (e === t)return 0 !== e || 1 / e == 1 / t;
                        var l = typeof e, u = typeof t;
                        if (!(e !== e || e && $[l] || t && $[u]))return !1;
                        if (null == e || null == t)return e === t;
                        var c = Ei.call(e), f = Ei.call(t);
                        if (c == R && (c = H), f == R && (f = H), c != f)return !1;
                        switch (c) {
                            case P:
                            case D:
                                return +e == +t;
                            case A:
                                return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;
                            case O:
                            case U:
                                return e == Ci(t)
                        }
                        var h = c == z;
                        if (!h) {
                            var g = qi.call(e, "__wrapped__"), p = qi.call(t, "__wrapped__");
                            if (g || p)return te(g ? e.__wrapped__ : e, p ? t.__wrapped__ : t, i, n, r, o);
                            if (c != H)return !1;
                            var m = e.constructor, v = t.constructor;
                            if (m != v && !(Se(m) && m instanceof m && Se(v) && v instanceof v) && "constructor" in e && "constructor" in t)return !1
                        }
                        var w = !r;
                        r || (r = a()), o || (o = a());
                        for (var y = r.length; y--;)if (r[y] == e)return o[y] == t;
                        var b = 0;
                        if (s = !0, r.push(e), o.push(t), h) {
                            if (y = e.length, b = t.length, s = b == y, s || n)for (; b--;) {
                                var C = y, F = t[b];
                                if (n)for (; C-- && !(s = te(e[C], F, i, n, r, o));); else if (!(s = te(e[b], F, i, n, r, o)))break
                            }
                        } else an(t, function (t, a, l) {
                            return qi.call(l, a) ? (b++, s = qi.call(e, a) && te(e[a], t, i, n, r, o)) : void 0
                        }), s && !n && an(e, function (e, t, i) {
                            return qi.call(i, t) ? s = --b > -1 : void 0
                        });
                        return r.pop(), o.pop(), w && (d(r), d(o)), s
                    }

                    function ie(e, t, i, n, r) {
                        (Yi(t) ? Je : ln)(t, function (t, o) {
                            var s, a, l = t, d = e[o];
                            if (t && ((a = Yi(t)) || dn(t))) {
                                for (var u = n.length; u--;)if (s = n[u] == t) {
                                    d = r[u];
                                    break
                                }
                                if (!s) {
                                    var c;
                                    i && (l = i(d, t), (c = "undefined" != typeof l) && (d = l)), c || (d = a ? Yi(d) ? d : [] : dn(d) ? d : {}), n.push(t), r.push(d), c || ie(d, t, i, n, r)
                                }
                            } else i && (l = i(d, t), "undefined" == typeof l && (l = t)), "undefined" != typeof l && (d = l);
                            e[o] = d
                        })
                    }

                    function ne(e, t) {
                        return e + Ti(Wi() * (t - e + 1))
                    }

                    function re(i, n, r) {
                        var s = -1, l = le(), c = i ? i.length : 0, f = [], h = !n && c >= w && l === e, g = r || h ? a() : f;
                        if (h) {
                            var p = o(g);
                            l = t, g = p
                        }
                        for (; ++s < c;) {
                            var m = i[s], v = r ? r(m, s, i) : m;
                            (n ? !s || g[g.length - 1] !== v : l(g, v) < 0) && ((r || h) && g.push(v), f.push(m))
                        }
                        return h ? (d(g.array), u(g)) : r && d(g), f
                    }

                    function oe(e) {
                        return function (t, i, n) {
                            var r = {};
                            i = g.createCallback(i, n, 3);
                            var o = -1, s = t ? t.length : 0;
                            if ("number" == typeof s)for (; ++o < s;) {
                                var a = t[o];
                                e(r, a, i(a, o, t), t)
                            } else ln(t, function (t, n, o) {
                                e(r, t, i(t, n, o), o)
                            });
                            return r
                        }
                    }

                    function se(e, t, i, n, r, o) {
                        var s = 1 & t, a = 2 & t, l = 4 & t, d = 16 & t, u = 32 & t;
                        if (!a && !Se(e))throw new Fi;
                        d && !i.length && (t &= -17, d = i = !1), u && !n.length && (t &= -33, u = n = !1);
                        var f = e && e.__bindData__;
                        if (f && f !== !0)return f = c(f), f[2] && (f[2] = c(f[2])), f[3] && (f[3] = c(f[3])), !s || 1 & f[1] || (f[4] = r), !s && 1 & f[1] && (t |= 8), !l || 4 & f[1] || (f[5] = o), d && Ri.apply(f[2] || (f[2] = []), i), u && Di.apply(f[3] || (f[3] = []), n), f[1] |= t, se.apply(null, f);
                        var h = 1 == t || 17 === t ? y : Y;
                        return h([e, t, i, n, r, o])
                    }

                    function ae(e) {
                        return en[e]
                    }

                    function le() {
                        var t = (t = g.indexOf) === vt ? e : t;
                        return t
                    }

                    function de(e) {
                        return "function" == typeof e && Ii.test(e)
                    }

                    function ue(e) {
                        var t, i;
                        return e && Ei.call(e) == H && (t = e.constructor, !Se(t) || t instanceof t) ? (an(e, function (e, t) {
                            i = t
                        }), "undefined" == typeof i || qi.call(e, i)) : !1
                    }

                    function ce(e) {
                        return tn[e]
                    }

                    function fe(e) {
                        return e && "object" == typeof e && "number" == typeof e.length && Ei.call(e) == R || !1
                    }

                    function he(e, t, i, n) {
                        return "boolean" != typeof t && null != t && (n = i, i = t, t = !1), W(e, t, "function" == typeof i && J(i, n, 1))
                    }

                    function ge(e, t, i) {
                        return W(e, !0, "function" == typeof t && J(t, i, 1))
                    }

                    function pe(e, t) {
                        var i = X(e);
                        return t ? on(i, t) : i
                    }

                    function me(e, t, i) {
                        var n;
                        return t = g.createCallback(t, i, 3), ln(e, function (e, i, r) {
                            return t(e, i, r) ? (n = i, !1) : void 0
                        }), n
                    }

                    function ve(e, t, i) {
                        var n;
                        return t = g.createCallback(t, i, 3), ye(e, function (e, i, r) {
                            return t(e, i, r) ? (n = i, !1) : void 0
                        }), n
                    }

                    function we(e, t, i) {
                        var n = [];
                        an(e, function (e, t) {
                            n.push(t, e)
                        });
                        var r = n.length;
                        for (t = J(t, i, 3); r-- && t(n[r--], n[r], e) !== !1;);
                        return e
                    }

                    function ye(e, t, i) {
                        var n = Qi(e), r = n.length;
                        for (t = J(t, i, 3); r--;) {
                            var o = n[r];
                            if (t(e[o], o, e) === !1)break
                        }
                        return e
                    }

                    function be(e) {
                        var t = [];
                        return an(e, function (e, i) {
                            Se(e) && t.push(i)
                        }), t.sort()
                    }

                    function Ce(e, t) {
                        return e ? qi.call(e, t) : !1
                    }

                    function Fe(e) {
                        for (var t = -1, i = Qi(e), n = i.length, r = {}; ++t < n;) {
                            var o = i[t];
                            r[e[o]] = o
                        }
                        return r
                    }

                    function xe(e) {
                        return e === !0 || e === !1 || e && "object" == typeof e && Ei.call(e) == P || !1
                    }

                    function ke(e) {
                        return e && "object" == typeof e && Ei.call(e) == D || !1
                    }

                    function Me(e) {
                        return e && 1 === e.nodeType || !1
                    }

                    function Ee(e) {
                        var t = !0;
                        if (!e)return t;
                        var i = Ei.call(e), n = e.length;
                        return i == z || i == U || i == R || i == H && "number" == typeof n && Se(e.splice) ? !n : (ln(e, function () {
                            return t = !1
                        }), t)
                    }

                    function Ie(e, t, i, n) {
                        return te(e, t, "function" == typeof i && J(i, n, 2))
                    }

                    function Ke(e) {
                        return Oi(e) && !Ui(parseFloat(e))
                    }

                    function Se(e) {
                        return "function" == typeof e
                    }

                    function Te(e) {
                        return !(!e || !$[typeof e])
                    }

                    function _e(e) {
                        return qe(e) && e != +e
                    }

                    function Ve(e) {
                        return null === e
                    }

                    function qe(e) {
                        return "number" == typeof e || e && "object" == typeof e && Ei.call(e) == A || !1
                    }

                    function Re(e) {
                        return e && "object" == typeof e && Ei.call(e) == O || !1
                    }

                    function ze(e) {
                        return "string" == typeof e || e && "object" == typeof e && Ei.call(e) == U || !1
                    }

                    function Pe(e) {
                        return "undefined" == typeof e
                    }

                    function De(e, t, i) {
                        var n = {};
                        return t = g.createCallback(t, i, 3), ln(e, function (e, i, r) {
                            n[i] = t(e, i, r)
                        }), n
                    }

                    function Be(e) {
                        var t = arguments, i = 2;
                        if (!Te(e))return e;
                        if ("number" != typeof t[2] && (i = t.length), i > 3 && "function" == typeof t[i - 2])var n = J(t[--i - 1], t[i--], 2); else i > 2 && "function" == typeof t[i - 1] && (n = t[--i]);
                        for (var r = c(arguments, 1, i), o = -1, s = a(), l = a(); ++o < i;)ie(e, r[o], n, s, l);
                        return d(s), d(l), e
                    }

                    function Ae(e, t, i) {
                        var n = {};
                        if ("function" != typeof t) {
                            var r = [];
                            an(e, function (e, t) {
                                r.push(t)
                            }), r = Z(r, ee(arguments, !0, !1, 1));
                            for (var o = -1, s = r.length; ++o < s;) {
                                var a = r[o];
                                n[a] = e[a]
                            }
                        } else t = g.createCallback(t, i, 3), an(e, function (e, i, r) {
                            t(e, i, r) || (n[i] = e)
                        });
                        return n
                    }

                    function He(e) {
                        for (var t = -1, i = Qi(e), n = i.length, r = hi(n); ++t < n;) {
                            var o = i[t];
                            r[t] = [o, e[o]]
                        }
                        return r
                    }

                    function Oe(e, t, i) {
                        var n = {};
                        if ("function" != typeof t)for (var r = -1, o = ee(arguments, !0, !1, 1), s = Te(e) ? o.length : 0; ++r < s;) {
                            var a = o[r];
                            a in e && (n[a] = e[a])
                        } else t = g.createCallback(t, i, 3), an(e, function (e, i, r) {
                            t(e, i, r) && (n[i] = e)
                        });
                        return n
                    }

                    function Ue(e, t, i, n) {
                        var r = Yi(e);
                        if (null == i)if (r)i = []; else {
                            var o = e && e.constructor, s = o && o.prototype;
                            i = X(s)
                        }
                        return t && (t = g.createCallback(t, n, 4), (r ? Je : ln)(e, function (e, n, r) {
                            return t(i, e, n, r)
                        })), i
                    }

                    function Ne(e) {
                        for (var t = -1, i = Qi(e), n = i.length, r = hi(n); ++t < n;)r[t] = e[i[t]];
                        return r
                    }

                    function je(e) {
                        for (var t = arguments, i = -1, n = ee(t, !0, !1, 1), r = t[2] && t[2][t[1]] === e ? 1 : n.length, o = hi(r); ++i < r;)o[i] = e[n[i]];
                        return o
                    }

                    function Le(e, t, i) {
                        var n = -1, r = le(), o = e ? e.length : 0, s = !1;
                        return i = (0 > i ? ji(0, o + i) : i) || 0, Yi(e) ? s = r(e, t, i) > -1 : "number" == typeof o ? s = (ze(e) ? e.indexOf(t, i) : r(e, t, i)) > -1 : ln(e, function (e) {
                            return ++n >= i ? !(s = e === t) : void 0
                        }), s
                    }

                    function $e(e, t, i) {
                        var n = !0;
                        t = g.createCallback(t, i, 3);
                        var r = -1, o = e ? e.length : 0;
                        if ("number" == typeof o)for (; ++r < o && (n = !!t(e[r], r, e));); else ln(e, function (e, i, r) {
                            return n = !!t(e, i, r)
                        });
                        return n
                    }

                    function We(e, t, i) {
                        var n = [];
                        t = g.createCallback(t, i, 3);
                        var r = -1, o = e ? e.length : 0;
                        if ("number" == typeof o)for (; ++r < o;) {
                            var s = e[r];
                            t(s, r, e) && n.push(s)
                        } else ln(e, function (e, i, r) {
                            t(e, i, r) && n.push(e)
                        });
                        return n
                    }

                    function Ge(e, t, i) {
                        t = g.createCallback(t, i, 3);
                        var n = -1, r = e ? e.length : 0;
                        if ("number" != typeof r) {
                            var o;
                            return ln(e, function (e, i, n) {
                                return t(e, i, n) ? (o = e, !1) : void 0
                            }), o
                        }
                        for (; ++n < r;) {
                            var s = e[n];
                            if (t(s, n, e))return s
                        }
                    }

                    function Xe(e, t, i) {
                        var n;
                        return t = g.createCallback(t, i, 3), Ye(e, function (e, i, r) {
                            return t(e, i, r) ? (n = e, !1) : void 0
                        }), n
                    }

                    function Je(e, t, i) {
                        var n = -1, r = e ? e.length : 0;
                        if (t = t && "undefined" == typeof i ? t : J(t, i, 3), "number" == typeof r)for (; ++n < r && t(e[n], n, e) !== !1;); else ln(e, t);
                        return e
                    }

                    function Ye(e, t, i) {
                        var n = e ? e.length : 0;
                        if (t = t && "undefined" == typeof i ? t : J(t, i, 3), "number" == typeof n)for (; n-- && t(e[n], n, e) !== !1;); else {
                            var r = Qi(e);
                            n = r.length, ln(e, function (e, i, o) {
                                return i = r ? r[--n] : --n, t(o[i], i, o)
                            })
                        }
                        return e
                    }

                    function Ze(e, t) {
                        var i = c(arguments, 2), n = -1, r = "function" == typeof t, o = e ? e.length : 0, s = hi("number" == typeof o ? o : 0);
                        return Je(e, function (e) {
                            s[++n] = (r ? t : e[t]).apply(e, i)
                        }), s
                    }

                    function Qe(e, t, i) {
                        var n = -1, r = e ? e.length : 0;
                        if (t = g.createCallback(t, i, 3), "number" == typeof r)for (var o = hi(r); ++n < r;)o[n] = t(e[n], n, e); else o = [], ln(e, function (e, i, r) {
                            o[++n] = t(e, i, r)
                        });
                        return o
                    }

                    function et(e, t, i) {
                        var r = -1 / 0, o = r;
                        if ("function" != typeof t && i && i[t] === e && (t = null), null == t && Yi(e))for (var s = -1, a = e.length; ++s < a;) {
                            var l = e[s];
                            l > o && (o = l)
                        } else t = null == t && ze(e) ? n : g.createCallback(t, i, 3), Je(e, function (e, i, n) {
                            var s = t(e, i, n);
                            s > r && (r = s, o = e)
                        });
                        return o
                    }

                    function tt(e, t, i) {
                        var r = 1 / 0, o = r;
                        if ("function" != typeof t && i && i[t] === e && (t = null), null == t && Yi(e))for (var s = -1, a = e.length; ++s < a;) {
                            var l = e[s];
                            o > l && (o = l)
                        } else t = null == t && ze(e) ? n : g.createCallback(t, i, 3), Je(e, function (e, i, n) {
                            var s = t(e, i, n);
                            r > s && (r = s, o = e)
                        });
                        return o
                    }

                    function it(e, t, i, n) {
                        if (!e)return i;
                        var r = arguments.length < 3;
                        t = g.createCallback(t, n, 4);
                        var o = -1, s = e.length;
                        if ("number" == typeof s)for (r && (i = e[++o]); ++o < s;)i = t(i, e[o], o, e); else ln(e, function (e, n, o) {
                            i = r ? (r = !1, e) : t(i, e, n, o)
                        });
                        return i
                    }

                    function nt(e, t, i, n) {
                        var r = arguments.length < 3;
                        return t = g.createCallback(t, n, 4), Ye(e, function (e, n, o) {
                            i = r ? (r = !1, e) : t(i, e, n, o)
                        }), i
                    }

                    function rt(e, t, i) {
                        return t = g.createCallback(t, i, 3), We(e, function (e, i, n) {
                            return !t(e, i, n)
                        })
                    }

                    function ot(e, t, i) {
                        if (e && "number" != typeof e.length && (e = Ne(e)), null == t || i)return e ? e[ne(0, e.length - 1)] : h;
                        var n = st(e);
                        return n.length = Li(ji(0, t), n.length), n
                    }

                    function st(e) {
                        var t = -1, i = e ? e.length : 0, n = hi("number" == typeof i ? i : 0);
                        return Je(e, function (e) {
                            var i = ne(0, ++t);
                            n[t] = n[i], n[i] = e
                        }), n
                    }

                    function at(e) {
                        var t = e ? e.length : 0;
                        return "number" == typeof t ? t : Qi(e).length
                    }

                    function lt(e, t, i) {
                        var n;
                        t = g.createCallback(t, i, 3);
                        var r = -1, o = e ? e.length : 0;
                        if ("number" == typeof o)for (; ++r < o && !(n = t(e[r], r, e));); else ln(e, function (e, i, r) {
                            return !(n = t(e, i, r))
                        });
                        return !!n
                    }

                    function dt(e, t, i) {
                        var n = -1, o = Yi(t), s = e ? e.length : 0, c = hi("number" == typeof s ? s : 0);
                        for (o || (t = g.createCallback(t, i, 3)), Je(e, function (e, i, r) {
                            var s = c[++n] = l();
                            o ? s.criteria = Qe(t, function (t) {
                                return e[t]
                            }) : (s.criteria = a())[0] = t(e, i, r), s.index = n, s.value = e
                        }), s = c.length, c.sort(r); s--;) {
                            var f = c[s];
                            c[s] = f.value, o || d(f.criteria), u(f)
                        }
                        return c
                    }

                    function ut(e) {
                        return e && "number" == typeof e.length ? c(e) : Ne(e)
                    }

                    function ct(e) {
                        for (var t = -1, i = e ? e.length : 0, n = []; ++t < i;) {
                            var r = e[t];
                            r && n.push(r)
                        }
                        return n
                    }

                    function ft(e) {
                        return Z(e, ee(arguments, !0, !0, 1))
                    }

                    function ht(e, t, i) {
                        var n = -1, r = e ? e.length : 0;
                        for (t = g.createCallback(t, i, 3); ++n < r;)if (t(e[n], n, e))return n;
                        return -1
                    }

                    function gt(e, t, i) {
                        var n = e ? e.length : 0;
                        for (t = g.createCallback(t, i, 3); n--;)if (t(e[n], n, e))return n;
                        return -1
                    }

                    function pt(e, t, i) {
                        var n = 0, r = e ? e.length : 0;
                        if ("number" != typeof t && null != t) {
                            var o = -1;
                            for (t = g.createCallback(t, i, 3); ++o < r && t(e[o], o, e);)n++
                        } else if (n = t, null == n || i)return e ? e[0] : h;
                        return c(e, 0, Li(ji(0, n), r))
                    }

                    function mt(e, t, i, n) {
                        return "boolean" != typeof t && null != t && (n = i, i = "function" != typeof t && n && n[t] === e ? null : t, t = !1), null != i && (e = Qe(e, i, n)), ee(e, t)
                    }

                    function vt(t, i, n) {
                        if ("number" == typeof n) {
                            var r = t ? t.length : 0;
                            n = 0 > n ? ji(0, r + n) : n || 0
                        } else if (n) {
                            var o = Et(t, i);
                            return t[o] === i ? o : -1
                        }
                        return e(t, i, n)
                    }

                    function wt(e, t, i) {
                        var n = 0, r = e ? e.length : 0;
                        if ("number" != typeof t && null != t) {
                            var o = r;
                            for (t = g.createCallback(t, i, 3); o-- && t(e[o], o, e);)n++
                        } else n = null == t || i ? 1 : t || n;
                        return c(e, 0, Li(ji(0, r - n), r))
                    }

                    function yt() {
                        for (var i = [], n = -1, r = arguments.length, s = a(), l = le(), c = l === e, f = a(); ++n < r;) {
                            var h = arguments[n];
                            (Yi(h) || fe(h)) && (i.push(h), s.push(c && h.length >= w && o(n ? i[n] : f)))
                        }
                        var g = i[0], p = -1, m = g ? g.length : 0, v = [];
                        e:for (; ++p < m;) {
                            var y = s[0];
                            if (h = g[p], (y ? t(y, h) : l(f, h)) < 0) {
                                for (n = r, (y || f).push(h); --n;)if (y = s[n], (y ? t(y, h) : l(i[n], h)) < 0)continue e;
                                v.push(h)
                            }
                        }
                        for (; r--;)y = s[r], y && u(y);
                        return d(s), d(f), v
                    }

                    function bt(e, t, i) {
                        var n = 0, r = e ? e.length : 0;
                        if ("number" != typeof t && null != t) {
                            var o = r;
                            for (t = g.createCallback(t, i, 3); o-- && t(e[o], o, e);)n++
                        } else if (n = t, null == n || i)return e ? e[r - 1] : h;
                        return c(e, ji(0, r - n))
                    }

                    function Ct(e, t, i) {
                        var n = e ? e.length : 0;
                        for ("number" == typeof i && (n = (0 > i ? ji(0, n + i) : Li(i, n - 1)) + 1); n--;)if (e[n] === t)return n;
                        return -1
                    }

                    function Ft(e) {
                        for (var t = arguments, i = 0, n = t.length, r = e ? e.length : 0; ++i < n;)for (var o = -1, s = t[i]; ++o < r;)e[o] === s && (Pi.call(e, o--, 1), r--);
                        return e
                    }

                    function xt(e, t, i) {
                        e = +e || 0, i = "number" == typeof i ? i : +i || 1, null == t && (t = e, e = 0);
                        for (var n = -1, r = ji(0, Ki((t - e) / (i || 1))), o = hi(r); ++n < r;)o[n] = e, e += i;
                        return o
                    }

                    function kt(e, t, i) {
                        var n = -1, r = e ? e.length : 0, o = [];
                        for (t = g.createCallback(t, i, 3); ++n < r;) {
                            var s = e[n];
                            t(s, n, e) && (o.push(s), Pi.call(e, n--, 1), r--)
                        }
                        return o
                    }

                    function Mt(e, t, i) {
                        if ("number" != typeof t && null != t) {
                            var n = 0, r = -1, o = e ? e.length : 0;
                            for (t = g.createCallback(t, i, 3); ++r < o && t(e[r], r, e);)n++
                        } else n = null == t || i ? 1 : ji(0, t);
                        return c(e, n)
                    }

                    function Et(e, t, i, n) {
                        var r = 0, o = e ? e.length : r;
                        for (i = i ? g.createCallback(i, n, 1) : Yt, t = i(t); o > r;) {
                            var s = r + o >>> 1;
                            i(e[s]) < t ? r = s + 1 : o = s
                        }
                        return r
                    }

                    function It() {
                        return re(ee(arguments, !0, !0))
                    }

                    function Kt(e, t, i, n) {
                        return "boolean" != typeof t && null != t && (n = i, i = "function" != typeof t && n && n[t] === e ? null : t, t = !1), null != i && (i = g.createCallback(i, n, 3)), re(e, t, i)
                    }

                    function St(e) {
                        return Z(e, c(arguments, 1))
                    }

                    function Tt() {
                        for (var e = -1, t = arguments.length; ++e < t;) {
                            var i = arguments[e];
                            if (Yi(i) || fe(i))var n = n ? re(Z(n, i).concat(Z(i, n))) : i
                        }
                        return n || []
                    }

                    function _t() {
                        for (var e = arguments.length > 1 ? arguments : arguments[0], t = -1, i = e ? et(hn(e, "length")) : 0, n = hi(0 > i ? 0 : i); ++t < i;)n[t] = hn(e, t);
                        return n
                    }

                    function Vt(e, t) {
                        var i = -1, n = e ? e.length : 0, r = {};
                        for (t || !n || Yi(e[0]) || (t = []); ++i < n;) {
                            var o = e[i];
                            t ? r[o] = t[i] : o && (r[o[0]] = o[1])
                        }
                        return r
                    }

                    function qt(e, t) {
                        if (!Se(t))throw new Fi;
                        return function () {
                            return --e < 1 ? t.apply(this, arguments) : void 0
                        }
                    }

                    function Rt(e, t) {
                        return arguments.length > 2 ? se(e, 17, c(arguments, 2), null, t) : se(e, 1, null, null, t)
                    }

                    function zt(e) {
                        for (var t = arguments.length > 1 ? ee(arguments, !0, !1, 1) : be(e), i = -1, n = t.length; ++i < n;) {
                            var r = t[i];
                            e[r] = se(e[r], 1, null, null, e)
                        }
                        return e
                    }

                    function Pt(e, t) {
                        return arguments.length > 2 ? se(t, 19, c(arguments, 2), null, e) : se(t, 3, null, null, e)
                    }

                    function Dt() {
                        for (var e = arguments, t = e.length; t--;)if (!Se(e[t]))throw new Fi;
                        return function () {
                            for (var t = arguments, i = e.length; i--;)t = [e[i].apply(this, t)];
                            return t[0]
                        }
                    }

                    function Bt(e, t) {
                        return t = "number" == typeof t ? t : +t || e.length, se(e, 4, null, null, null, t)
                    }

                    function At(e, t, i) {
                        var n, r, o, s, a, l, d, u = 0, c = !1, f = !0;
                        if (!Se(e))throw new Fi;
                        if (t = ji(0, t) || 0, i === !0) {
                            var g = !0;
                            f = !1
                        } else Te(i) && (g = i.leading, c = "maxWait" in i && (ji(t, i.maxWait) || 0), f = "trailing" in i ? i.trailing : f);
                        var p = function () {
                            var i = t - (pn() - s);
                            if (0 >= i) {
                                r && Si(r);
                                var c = d;
                                r = l = d = h, c && (u = pn(), o = e.apply(a, n), l || r || (n = a = null))
                            } else l = zi(p, i)
                        }, m = function () {
                            l && Si(l), r = l = d = h, (f || c !== t) && (u = pn(), o = e.apply(a, n), l || r || (n = a = null))
                        };
                        return function () {
                            if (n = arguments, s = pn(), a = this, d = f && (l || !g), c === !1)var i = g && !l; else {
                                r || g || (u = s);
                                var h = c - (s - u), v = 0 >= h;
                                v ? (r && (r = Si(r)), u = s, o = e.apply(a, n)) : r || (r = zi(m, h))
                            }
                            return v && l ? l = Si(l) : l || t === c || (l = zi(p, t)), i && (v = !0, o = e.apply(a, n)), !v || l || r || (n = a = null), o
                        }
                    }

                    function Ht(e) {
                        if (!Se(e))throw new Fi;
                        var t = c(arguments, 1);
                        return zi(function () {
                            e.apply(h, t)
                        }, 1)
                    }

                    function Ot(e, t) {
                        if (!Se(e))throw new Fi;
                        var i = c(arguments, 2);
                        return zi(function () {
                            e.apply(h, i)
                        }, t)
                    }

                    function Ut(e, t) {
                        if (!Se(e))throw new Fi;
                        var i = function () {
                            var n = i.cache, r = t ? t.apply(this, arguments) : v + arguments[0];
                            return qi.call(n, r) ? n[r] : n[r] = e.apply(this, arguments)
                        };
                        return i.cache = {}, i
                    }

                    function Nt(e) {
                        var t, i;
                        if (!Se(e))throw new Fi;
                        return function () {
                            return t ? i : (t = !0, i = e.apply(this, arguments), e = null, i)
                        }
                    }

                    function jt(e) {
                        return se(e, 16, c(arguments, 1))
                    }

                    function Lt(e) {
                        return se(e, 32, null, c(arguments, 1))
                    }

                    function $t(e, t, i) {
                        var n = !0, r = !0;
                        if (!Se(e))throw new Fi;
                        return i === !1 ? n = !1 : Te(i) && (n = "leading" in i ? i.leading : n, r = "trailing" in i ? i.trailing : r), j.leading = n, j.maxWait = t, j.trailing = r, At(e, t, j)
                    }

                    function Wt(e, t) {
                        return se(t, 16, [e])
                    }

                    function Gt(e) {
                        return function () {
                            return e
                        }
                    }

                    function Xt(e, t, i) {
                        var n = typeof e;
                        if (null == e || "function" == n)return J(e, t, i);
                        if ("object" != n)return ti(e);
                        var r = Qi(e), o = r[0], s = e[o];
                        return 1 != r.length || s !== s || Te(s) ? function (t) {
                            for (var i = r.length, n = !1; i-- && (n = te(t[r[i]], e[r[i]], null, !0)););
                            return n
                        } : function (e) {
                            var t = e[o];
                            return s === t && (0 !== s || 1 / s == 1 / t)
                        }
                    }

                    function Jt(e) {
                        return null == e ? "" : Ci(e).replace(rn, ae)
                    }

                    function Yt(e) {
                        return e
                    }

                    function Zt(e, t, i) {
                        var n = !0, r = t && be(t);
                        t && (i || r.length) || (null == i && (i = t), o = p, t = e, e = g, r = be(t)), i === !1 ? n = !1 : Te(i) && "chain" in i && (n = i.chain);
                        var o = e, s = Se(o);
                        Je(r, function (i) {
                            var r = e[i] = t[i];
                            s && (o.prototype[i] = function () {
                                var t = this.__chain__, i = this.__wrapped__, s = [i];
                                Ri.apply(s, arguments);
                                var a = r.apply(e, s);
                                if (n || t) {
                                    if (i === a && Te(a))return this;
                                    a = new o(a), a.__chain__ = t
                                }
                                return a
                            })
                        })
                    }

                    function Qt() {
                        return i._ = Mi, this
                    }

                    function ei() {
                    }

                    function ti(e) {
                        return function (t) {
                            return t[e]
                        }
                    }

                    function ii(e, t, i) {
                        var n = null == e, r = null == t;
                        if (null == i && ("boolean" == typeof e && r ? (i = e, e = 1) : r || "boolean" != typeof t || (i = t, r = !0)), n && r && (t = 1), e = +e || 0, r ? (t = e, e = 0) : t = +t || 0, i || e % 1 || t % 1) {
                            var o = Wi();
                            return Li(e + o * (t - e + parseFloat("1e-" + ((o + "").length - 1))), t)
                        }
                        return ne(e, t)
                    }

                    function ni(e, t) {
                        if (e) {
                            var i = e[t];
                            return Se(i) ? e[t]() : i
                        }
                    }

                    function ri(e, t, i) {
                        var n = g.templateSettings;
                        e = Ci(e || ""), i = sn({}, i, n);
                        var r, o = sn({}, i.imports, n.imports), a = Qi(o), l = Ne(o), d = 0, u = i.interpolate || S, c = "__p += '", f = bi((i.escape || S).source + "|" + u.source + "|" + (u === I ? k : S).source + "|" + (i.evaluate || S).source + "|$", "g");
                        e.replace(f, function (t, i, n, o, a, l) {
                            return n || (n = o), c += e.slice(d, l).replace(_, s), i && (c += "' +\n__e(" + i + ") +\n'"), a && (r = !0, c += "';\n" + a + ";\n__p += '"), n && (c += "' +\n((__t = (" + n + ")) == null ? '' : __t) +\n'"), d = l + t.length, t
                        }), c += "';\n";
                        var p = i.variable, m = p;
                        m || (p = "obj", c = "with (" + p + ") {\n" + c + "\n}\n"), c = (r ? c.replace(C, "") : c).replace(F, "$1").replace(x, "$1;"), c = "function(" + p + ") {\n" + (m ? "" : p + " || (" + p + " = {});\n") + "var __t, __p = '', __e = _.escape" + (r ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + c + "return __p\n}";
                        var v = "\n/*\n//# sourceURL=" + (i.sourceURL || "/lodash/template/source[" + q++ + "]") + "\n*/";
                        try {
                            var w = mi(a, "return " + c + v).apply(h, l)
                        } catch (y) {
                            throw y.source = c, y
                        }
                        return t ? w(t) : (w.source = c, w)
                    }

                    function oi(e, t, i) {
                        e = (e = +e) > -1 ? e : 0;
                        var n = -1, r = hi(e);
                        for (t = J(t, i, 1); ++n < e;)r[n] = t(n);
                        return r
                    }

                    function si(e) {
                        return null == e ? "" : Ci(e).replace(nn, ce)
                    }

                    function ai(e) {
                        var t = ++m;
                        return Ci(null == e ? "" : e) + t
                    }

                    function li(e) {
                        return e = new p(e), e.__chain__ = !0, e
                    }

                    function di(e, t) {
                        return t(e), e
                    }

                    function ui() {
                        return this.__chain__ = !0, this
                    }

                    function ci() {
                        return Ci(this.__wrapped__)
                    }

                    function fi() {
                        return this.__wrapped__
                    }

                    i = i ? Q.defaults(G.Object(), i, Q.pick(G, V)) : G;
                    var hi = i.Array, gi = i.Boolean, pi = i.Date, mi = i.Function, vi = i.Math, wi = i.Number, yi = i.Object, bi = i.RegExp, Ci = i.String, Fi = i.TypeError, xi = [], ki = yi.prototype, Mi = i._, Ei = ki.toString, Ii = bi("^" + Ci(Ei).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/toString| for [^\]]+/g, ".*?") + "$"), Ki = vi.ceil, Si = i.clearTimeout, Ti = vi.floor, _i = mi.prototype.toString, Vi = de(Vi = yi.getPrototypeOf) && Vi, qi = ki.hasOwnProperty, Ri = xi.push, zi = i.setTimeout, Pi = xi.splice, Di = xi.unshift, Bi = function () {
                        try {
                            var e = {}, t = de(t = yi.defineProperty) && t, i = t(e, e, e) && t
                        } catch (n) {
                        }
                        return i
                    }(), Ai = de(Ai = yi.create) && Ai, Hi = de(Hi = hi.isArray) && Hi, Oi = i.isFinite, Ui = i.isNaN, Ni = de(Ni = yi.keys) && Ni, ji = vi.max, Li = vi.min, $i = i.parseInt, Wi = vi.random, Gi = {};
                    Gi[z] = hi, Gi[P] = gi, Gi[D] = pi, Gi[B] = mi, Gi[H] = yi, Gi[A] = wi, Gi[O] = bi, Gi[U] = Ci, p.prototype = g.prototype;
                    var Xi = g.support = {};
                    Xi.funcDecomp = !de(i.WinRTError) && T.test(f), Xi.funcNames = "string" == typeof mi.name, g.templateSettings = {
                        escape: /<%-([\s\S]+?)%>/g,
                        evaluate: /<%([\s\S]+?)%>/g,
                        interpolate: I,
                        variable: "",
                        imports: {_: g}
                    }, Ai || (X = function () {
                        function e() {
                        }

                        return function (t) {
                            if (Te(t)) {
                                e.prototype = t;
                                var n = new e;
                                e.prototype = null
                            }
                            return n || i.Object()
                        }
                    }());
                    var Ji = Bi ? function (e, t) {
                        L.value = t, Bi(e, "__bindData__", L), L.value = null
                    } : ei, Yi = Hi || function (e) {
                            return e && "object" == typeof e && "number" == typeof e.length && Ei.call(e) == z || !1
                        }, Zi = function (e) {
                        var t, i = e, n = [];
                        if (!i)return n;
                        if (!$[typeof e])return n;
                        for (t in i)qi.call(i, t) && n.push(t);
                        return n
                    }, Qi = Ni ? function (e) {
                        return Te(e) ? Ni(e) : []
                    } : Zi, en = {
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        '"': "&quot;",
                        "'": "&#39;"
                    }, tn = Fe(en), nn = bi("(" + Qi(tn).join("|") + ")", "g"), rn = bi("[" + Qi(en).join("") + "]", "g"), on = function (e, t, i) {
                        var n, r = e, o = r;
                        if (!r)return o;
                        var s = arguments, a = 0, l = "number" == typeof i ? 2 : s.length;
                        if (l > 3 && "function" == typeof s[l - 2])var d = J(s[--l - 1], s[l--], 2); else l > 2 && "function" == typeof s[l - 1] && (d = s[--l]);
                        for (; ++a < l;)if (r = s[a], r && $[typeof r])for (var u = -1, c = $[typeof r] && Qi(r), f = c ? c.length : 0; ++u < f;)n = c[u], o[n] = d ? d(o[n], r[n]) : r[n];
                        return o
                    }, sn = function (e, t, i) {
                        var n, r = e, o = r;
                        if (!r)return o;
                        for (var s = arguments, a = 0, l = "number" == typeof i ? 2 : s.length; ++a < l;)if (r = s[a], r && $[typeof r])for (var d = -1, u = $[typeof r] && Qi(r), c = u ? u.length : 0; ++d < c;)n = u[d], "undefined" == typeof o[n] && (o[n] = r[n]);
                        return o
                    }, an = function (e, t, i) {
                        var n, r = e, o = r;
                        if (!r)return o;
                        if (!$[typeof r])return o;
                        t = t && "undefined" == typeof i ? t : J(t, i, 3);
                        for (n in r)if (t(r[n], n, e) === !1)return o;
                        return o
                    }, ln = function (e, t, i) {
                        var n, r = e, o = r;
                        if (!r)return o;
                        if (!$[typeof r])return o;
                        t = t && "undefined" == typeof i ? t : J(t, i, 3);
                        for (var s = -1, a = $[typeof r] && Qi(r), l = a ? a.length : 0; ++s < l;)if (n = a[s], t(r[n], n, e) === !1)return o;
                        return o
                    }, dn = Vi ? function (e) {
                        if (!e || Ei.call(e) != H)return !1;
                        var t = e.valueOf, i = de(t) && (i = Vi(t)) && Vi(i);
                        return i ? e == i || Vi(e) == i : ue(e)
                    } : ue, un = oe(function (e, t, i) {
                        qi.call(e, i) ? e[i]++ : e[i] = 1
                    }), cn = oe(function (e, t, i) {
                        (qi.call(e, i) ? e[i] : e[i] = []).push(t)
                    }), fn = oe(function (e, t, i) {
                        e[i] = t
                    }), hn = Qe, gn = We, pn = de(pn = pi.now) && pn || function () {
                            return (new pi).getTime()
                        }, mn = 8 == $i(b + "08") ? $i : function (e, t) {
                        return $i(ze(e) ? e.replace(K, "") : e, t || 0)
                    };
                    return g.after = qt, g.assign = on, g.at = je, g.bind = Rt, g.bindAll = zt, g.bindKey = Pt, g.chain = li, g.compact = ct, g.compose = Dt, g.constant = Gt, g.countBy = un, g.create = pe, g.createCallback = Xt, g.curry = Bt, g.debounce = At, g.defaults = sn, g.defer = Ht, g.delay = Ot, g.difference = ft, g.filter = We, g.flatten = mt, g.forEach = Je, g.forEachRight = Ye, g.forIn = an, g.forInRight = we, g.forOwn = ln, g.forOwnRight = ye, g.functions = be, g.groupBy = cn, g.indexBy = fn, g.initial = wt, g.intersection = yt, g.invert = Fe, g.invoke = Ze, g.keys = Qi, g.map = Qe, g.mapValues = De, g.max = et, g.memoize = Ut, g.merge = Be, g.min = tt, g.omit = Ae, g.once = Nt, g.pairs = He, g.partial = jt, g.partialRight = Lt, g.pick = Oe, g.pluck = hn, g.property = ti, g.pull = Ft, g.range = xt, g.reject = rt, g.remove = kt, g.rest = Mt, g.shuffle = st, g.sortBy = dt, g.tap = di, g.throttle = $t, g.times = oi, g.toArray = ut, g.transform = Ue, g.union = It, g.uniq = Kt, g.values = Ne, g.where = gn, g.without = St, g.wrap = Wt, g.xor = Tt, g.zip = _t, g.zipObject = Vt, g.collect = Qe, g.drop = Mt, g.each = Je, g.eachRight = Ye, g.extend = on, g.methods = be, g.object = Vt, g.select = We, g.tail = Mt, g.unique = Kt, g.unzip = _t, Zt(g), g.clone = he, g.cloneDeep = ge, g.contains = Le, g.escape = Jt, g.every = $e, g.find = Ge, g.findIndex = ht, g.findKey = me, g.findLast = Xe, g.findLastIndex = gt, g.findLastKey = ve, g.has = Ce, g.identity = Yt, g.indexOf = vt, g.isArguments = fe, g.isArray = Yi, g.isBoolean = xe, g.isDate = ke, g.isElement = Me,g.isEmpty = Ee,g.isEqual = Ie,g.isFinite = Ke,g.isFunction = Se,g.isNaN = _e,g.isNull = Ve,g.isNumber = qe,g.isObject = Te,g.isPlainObject = dn,g.isRegExp = Re,g.isString = ze,g.isUndefined = Pe,g.lastIndexOf = Ct,g.mixin = Zt,g.noConflict = Qt,g.noop = ei,g.now = pn,g.parseInt = mn,g.random = ii,g.reduce = it,g.reduceRight = nt,g.result = ni,g.runInContext = f,g.size = at,g.some = lt,g.sortedIndex = Et,g.template = ri,g.unescape = si,g.uniqueId = ai,g.all = $e,g.any = lt,g.detect = Ge,g.findWhere = Ge,g.foldl = it,g.foldr = nt,g.include = Le,g.inject = it,Zt(function () {
                        var e = {};
                        return ln(g, function (t, i) {
                            g.prototype[i] || (e[i] = t)
                        }), e
                    }(), !1),g.first = pt,g.last = bt,g.sample = ot,g.take = pt,g.head = pt,ln(g, function (e, t) {
                        var i = "sample" !== t;
                        g.prototype[t] || (g.prototype[t] = function (t, n) {
                            var r = this.__chain__, o = e(this.__wrapped__, t, n);
                            return r || null != t && (!n || i && "function" == typeof t) ? new p(o, r) : o
                        })
                    }),g.VERSION = "2.4.2",g.prototype.chain = ui,g.prototype.toString = ci,g.prototype.value = fi,g.prototype.valueOf = fi,Je(["join", "pop", "shift"], function (e) {
                        var t = xi[e];
                        g.prototype[e] = function () {
                            var e = this.__chain__, i = t.apply(this.__wrapped__, arguments);
                            return e ? new p(i, e) : i
                        }
                    }),Je(["push", "reverse", "sort", "unshift"], function (e) {
                        var t = xi[e];
                        g.prototype[e] = function () {
                            return t.apply(this.__wrapped__, arguments), this
                        }
                    }),Je(["concat", "slice", "splice"], function (e) {
                        var t = xi[e];
                        g.prototype[e] = function () {
                            return new p(t.apply(this.__wrapped__, arguments), this.__chain__)
                        }
                    }),g
                }

                var h, g = [], p = [], m = 0, v = +new Date + "", w = 75, y = 40, b = " 	\x0B\f \ufeff\n\r\u2028\u2029 ᠎             　", C = /\b__p \+= '';/g, F = /\b(__p \+=) '' \+/g, x = /(__e\(.*?\)|\b__t\)) \+\n'';/g, k = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, M = /\w*$/, E = /^\s*function[ \n\r\t]+\w/, I = /<%=([\s\S]+?)%>/g, K = RegExp("^[" + b + "]*0+(?=.$)"), S = /($^)/, T = /\bthis\b/, _ = /['\n\r\t\u2028\u2029\\]/g, V = ["Array", "Boolean", "Date", "Function", "Math", "Number", "Object", "RegExp", "String", "_", "attachEvent", "clearTimeout", "isFinite", "isNaN", "parseInt", "setTimeout"], q = 0, R = "[object Arguments]", z = "[object Array]", P = "[object Boolean]", D = "[object Date]", B = "[object Function]", A = "[object Number]", H = "[object Object]", O = "[object RegExp]", U = "[object String]", N = {};
                N[B] = !1, N[R] = N[z] = N[P] = N[D] = N[A] = N[H] = N[O] = N[U] = !0;
                var j = {leading: !1, maxWait: 0, trailing: !1}, L = {
                    configurable: !1,
                    enumerable: !1,
                    value: null,
                    writable: !1
                }, $ = {
                    "boolean": !1,
                    "function": !0,
                    object: !0,
                    number: !1,
                    string: !1,
                    undefined: !1
                }, W = {
                    "\\": "\\",
                    "'": "'",
                    "\n": "n",
                    "\r": "r",
                    "	": "t",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                }, G = $[typeof window] && window || this, X = $[typeof exports] && exports && !exports.nodeType && exports, J = $[typeof module] && module && !module.nodeType && module, Y = J && J.exports === X && X, Z = $[typeof global] && global;
                !Z || Z.global !== Z && Z.window !== Z || (G = Z);
                var Q = f();
                "function" == typeof CKFinder.define && "object" == typeof CKFinder.define.amd && CKFinder.define.amd ? (G._ = Q, CKFinder.define("underscore", [], function () {
                    return Q
                })) : X && J ? Y ? (J.exports = Q)._ = Q : X._ = Q : G._ = Q
            }.call(this), function () {
                function e(t, i, n) {
                    return ("string" == typeof i ? i : i.toString()).replace(t.define || s, function (e, i, r, o) {
                        return 0 === i.indexOf("def.") && (i = i.substring(4)), i in n || (":" === r ? (t.defineParams && o.replace(t.defineParams, function (e, t, r) {
                            n[i] = {arg: t, text: r}
                        }), i in n || (n[i] = o)) : new Function("def", "def['" + i + "']=" + o)(n)), ""
                    }).replace(t.use || s, function (i, r) {
                        t.useParams && (r = r.replace(t.useParams, function (e, t, i, r) {
                            return n[i] && n[i].arg && r ? (e = (i + ":" + r).replace(/'|\\/g, "_"), n.__exp = n.__exp || {}, n.__exp[e] = n[i].text.replace(new RegExp("(^|[^\\w$])" + n[i].arg + "([^\\w$])", "g"), "$1" + r + "$2"), t + "def.__exp['" + e + "']") : void 0
                        }));
                        var o = new Function("def", "return " + r)(n);
                        return o ? e(t, o, n) : o
                    })
                }

                function t(e) {
                    return e.replace(/\\('|\\)/g, "$1").replace(/[\r\t\n]/g, " ")
                }

                var i, n = {
                    version: "1.0.3",
                    templateSettings: {
                        evaluate: /\{\{([\s\S]+?(\}?)+)\}\}/g,
                        interpolate: /\{\{=([\s\S]+?)\}\}/g,
                        encode: /\{\{!([\s\S]+?)\}\}/g,
                        use: /\{\{#([\s\S]+?)\}\}/g,
                        useParams: /(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,
                        define: /\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,
                        defineParams: /^\s*([\w$]+):([\s\S]+)/,
                        conditional: /\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,
                        iterate: /\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,
                        varname: "it",
                        strip: !0,
                        append: !0,
                        selfcontained: !1,
                        doNotSkipEncoded: !1
                    },
                    template: void 0,
                    compile: void 0
                };
                n.encodeHTMLSource = function (e) {
                    var t = {
                        "&": "&#38;",
                        "<": "&#60;",
                        ">": "&#62;",
                        '"': "&#34;",
                        "'": "&#39;",
                        "/": "&#47;"
                    }, i = e ? /[&<>"'\/]/g : /&(?!#?\w+;)|<|>|"|'|\//g;
                    return function (e) {
                        return e ? e.toString().replace(i, function (e) {
                            return t[e] || e
                        }) : ""
                    }
                }, i = function () {
                    return this || (0, eval)("this")
                }(), "undefined" != typeof module && module.exports ? module.exports = n : "function" == typeof CKFinder.define && CKFinder.define.amd ? CKFinder.define("doT", [], function () {
                    return n
                }) : i.doT = n;
                var r = {start: "'+(", end: ")+'", startencode: "'+encodeHTML("}, o = {
                    start: "';out+=(",
                    end: ");out+='",
                    startencode: "';out+=encodeHTML("
                }, s = /$^/;
                n.template = function (a, l, d) {
                    l = l || n.templateSettings;
                    var u, c, f = l.append ? r : o, h = 0;
                    a = l.use || l.define ? e(l, a, d || {}) : a, a = ("var out='" + (l.strip ? a.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g, " ").replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g, "") : a).replace(/'|\\/g, "\\$&").replace(l.interpolate || s, function (e, i) {
                        return f.start + t(i) + f.end
                    }).replace(l.encode || s, function (e, i) {
                        return u = !0, f.startencode + t(i) + f.end
                    }).replace(l.conditional || s, function (e, i, n) {
                        return i ? n ? "';}else if(" + t(n) + "){out+='" : "';}else{out+='" : n ? "';if(" + t(n) + "){out+='" : "';}out+='"
                    }).replace(l.iterate || s, function (e, i, n, r) {
                        return i ? (h += 1, c = r || "i" + h, i = t(i), "';var arr" + h + "=" + i + ";if(arr" + h + "){var " + n + "," + c + "=-1,l" + h + "=arr" + h + ".length-1;while(" + c + "<l" + h + "){" + n + "=arr" + h + "[" + c + "+=1];out+='") : "';} } out+='"
                    }).replace(l.evaluate || s, function (e, i) {
                        return "';" + t(i) + "out+='"
                    }) + "';return out;").replace(/\n/g, "\\n").replace(/\t/g, "\\t").replace(/\r/g, "\\r").replace(/(\s|;|\}|^|\{)out\+='';/g, "$1").replace(/\+''/g, ""), u && (l.selfcontained || !i || i._encodeHTML || (i._encodeHTML = n.encodeHTMLSource(l.doNotSkipEncoded)), a = "var encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : (" + n.encodeHTMLSource.toString() + "(" + (l.doNotSkipEncoded || "") + "));" + a);
                    try {
                        return new Function(l.varname, a)
                    } catch (g) {
                        throw"undefined" != typeof console && console.log("Could not create a template function: " + a), g
                    }
                }, n.compile = function (e, t) {
                    return n.template(e, null, t)
                }
            }(), function (e, t) {
                if ("function" == typeof CKFinder.define && CKFinder.define.amd)CKFinder.define("backbone", ["underscore", "jquery", "exports"], function (i, n, r) {
                    e.Backbone = t(e, r, i, n)
                }); else if ("undefined" != typeof exports) {
                    var i = require("underscore");
                    t(e, exports, i)
                } else e.Backbone = t(e, {}, e._, e.jQuery || e.Zepto || e.ender || e.$)
            }(this, function (e, t, i, n) {
                var r = e.Backbone, o = [], s = (o.push, o.slice);
                o.splice, t.VERSION = "1.1.2", t.$ = n, t.noConflict = function () {
                    return e.Backbone = r, this
                }, t.emulateHTTP = !1, t.emulateJSON = !1;
                var a = t.Events = {
                    on: function (e, t, i) {
                        if (!d(this, "on", e, [t, i]) || !t)return this;
                        this._events || (this._events = {});
                        var n = this._events[e] || (this._events[e] = []);
                        return n.push({callback: t, context: i, ctx: i || this}), this
                    }, once: function (e, t, n) {
                        if (!d(this, "once", e, [t, n]) || !t)return this;
                        var r = this, o = i.once(function () {
                            r.off(e, o), t.apply(this, arguments)
                        });
                        return o._callback = t, this.on(e, o, n)
                    }, off: function (e, t, n) {
                        var r, o, s, a, l, u, c, f;
                        if (!this._events || !d(this, "off", e, [t, n]))return this;
                        if (!e && !t && !n)return this._events = void 0, this;
                        for (a = e ? [e] : i.keys(this._events), l = 0, u = a.length; u > l; l++)if (e = a[l], s = this._events[e]) {
                            if (this._events[e] = r = [], t || n)for (c = 0, f = s.length; f > c; c++)o = s[c], (t && t !== o.callback && t !== o.callback._callback || n && n !== o.context) && r.push(o);
                            r.length || delete this._events[e]
                        }
                        return this
                    }, trigger: function (e) {
                        if (!this._events)return this;
                        var t = s.call(arguments, 1);
                        if (!d(this, "trigger", e, t))return this;
                        var i = this._events[e], n = this._events.all;
                        return i && u(i, t), n && u(n, arguments), this
                    }, stopListening: function (e, t, n) {
                        var r = this._listeningTo;
                        if (!r)return this;
                        var o = !t && !n;
                        n || "object" != typeof t || (n = this), e && ((r = {})[e._listenId] = e);
                        for (var s in r)e = r[s], e.off(t, n, this), (o || i.isEmpty(e._events)) && delete this._listeningTo[s];
                        return this
                    }
                }, l = /\s+/, d = function (e, t, i, n) {
                    if (!i)return !0;
                    if ("object" == typeof i) {
                        for (var r in i)e[t].apply(e, [r, i[r]].concat(n));
                        return !1
                    }
                    if (l.test(i)) {
                        for (var o = i.split(l), s = 0, a = o.length; a > s; s++)e[t].apply(e, [o[s]].concat(n));
                        return !1
                    }
                    return !0
                }, u = function (e, t) {
                    var i, n = -1, r = e.length, o = t[0], s = t[1], a = t[2];
                    switch (t.length) {
                        case 0:
                            for (; ++n < r;)(i = e[n]).callback.call(i.ctx);
                            return;
                        case 1:
                            for (; ++n < r;)(i = e[n]).callback.call(i.ctx, o);
                            return;
                        case 2:
                            for (; ++n < r;)(i = e[n]).callback.call(i.ctx, o, s);
                            return;
                        case 3:
                            for (; ++n < r;)(i = e[n]).callback.call(i.ctx, o, s, a);
                            return;
                        default:
                            for (; ++n < r;)(i = e[n]).callback.apply(i.ctx, t);
                            return
                    }
                }, c = {listenTo: "on", listenToOnce: "once"};
                i.each(c, function (e, t) {
                    a[t] = function (t, n, r) {
                        var o = this._listeningTo || (this._listeningTo = {}), s = t._listenId || (t._listenId = i.uniqueId("l"));
                        return o[s] = t, r || "object" != typeof n || (r = this), t[e](n, r, this), this
                    }
                }), a.bind = a.on, a.unbind = a.off, i.extend(t, a);
                var f = t.Model = function (e, t) {
                    var n = e || {};
                    t || (t = {}), this.cid = i.uniqueId("c"), this.attributes = {}, t.collection && (this.collection = t.collection), t.parse && (n = this.parse(n, t) || {}), n = i.defaults({}, n, i.result(this, "defaults")), this.set(n, t), this.changed = {}, this.initialize.apply(this, arguments)
                };
                i.extend(f.prototype, a, {
                    changed: null, validationError: null, idAttribute: "id", initialize: function () {
                    }, toJSON: function () {
                        return i.clone(this.attributes)
                    }, sync: function () {
                        return t.sync.apply(this, arguments)
                    }, get: function (e) {
                        return this.attributes[e]
                    }, escape: function (e) {
                        return i.escape(this.get(e))
                    }, has: function (e) {
                        return null != this.get(e)
                    }, set: function (e, t, n) {
                        var r, o, s, a, l, d, u, c;
                        if (null == e)return this;
                        if ("object" == typeof e ? (o = e, n = t) : (o = {})[e] = t, n || (n = {}), !this._validate(o, n))return !1;
                        s = n.unset, l = n.silent, a = [], d = this._changing, this._changing = !0, d || (this._previousAttributes = i.clone(this.attributes), this.changed = {}), c = this.attributes, u = this._previousAttributes, this.idAttribute in o && (this.id = o[this.idAttribute]);
                        for (r in o)t = o[r], i.isEqual(c[r], t) || a.push(r), i.isEqual(u[r], t) ? delete this.changed[r] : this.changed[r] = t, s ? delete c[r] : c[r] = t;
                        if (!l) {
                            a.length && (this._pending = n);
                            for (var f = 0, h = a.length; h > f; f++)this.trigger("change:" + a[f], this, c[a[f]], n)
                        }
                        if (d)return this;
                        if (!l)for (; this._pending;)n = this._pending, this._pending = !1, this.trigger("change", this, n);
                        return this._pending = !1, this._changing = !1, this
                    }, unset: function (e, t) {
                        return this.set(e, void 0, i.extend({}, t, {unset: !0}))
                    }, clear: function (e) {
                        var t = {};
                        for (var n in this.attributes)t[n] = void 0;
                        return this.set(t, i.extend({}, e, {unset: !0}))
                    }, hasChanged: function (e) {
                        return null == e ? !i.isEmpty(this.changed) : i.has(this.changed, e)
                    }, changedAttributes: function (e) {
                        if (!e)return this.hasChanged() ? i.clone(this.changed) : !1;
                        var t, n = !1, r = this._changing ? this._previousAttributes : this.attributes;
                        for (var o in e)i.isEqual(r[o], t = e[o]) || ((n || (n = {}))[o] = t);
                        return n
                    }, previous: function (e) {
                        return null != e && this._previousAttributes ? this._previousAttributes[e] : null
                    }, previousAttributes: function () {
                        return i.clone(this._previousAttributes)
                    }, fetch: function (e) {
                        e = e ? i.clone(e) : {}, void 0 === e.parse && (e.parse = !0);
                        var t = this, n = e.success;
                        return e.success = function (i) {
                            return t.set(t.parse(i, e), e) ? (n && n(t, i, e), void t.trigger("sync", t, i, e)) : !1
                        }, D(this, e), this.sync("read", this, e)
                    }, save: function (e, t, n) {
                        var r, o, s, a = this.attributes;
                        if (null == e || "object" == typeof e ? (r = e, n = t) : (r = {})[e] = t, n = i.extend({validate: !0}, n), r && !n.wait) {
                            if (!this.set(r, n))return !1
                        } else if (!this._validate(r, n))return !1;
                        r && n.wait && (this.attributes = i.extend({}, a, r)), void 0 === n.parse && (n.parse = !0);
                        var l = this, d = n.success;
                        return n.success = function (e) {
                            l.attributes = a;
                            var t = l.parse(e, n);
                            return n.wait && (t = i.extend(r || {}, t)), i.isObject(t) && !l.set(t, n) ? !1 : (d && d(l, e, n), void l.trigger("sync", l, e, n))
                        }, D(this, n), o = this.isNew() ? "create" : n.patch ? "patch" : "update", "patch" === o && (n.attrs = r), s = this.sync(o, this, n), r && n.wait && (this.attributes = a), s
                    }, destroy: function (e) {
                        e = e ? i.clone(e) : {};
                        var t = this, n = e.success, r = function () {
                            t.trigger("destroy", t, t.collection, e)
                        };
                        if (e.success = function (i) {
                                (e.wait || t.isNew()) && r(), n && n(t, i, e), t.isNew() || t.trigger("sync", t, i, e)
                            }, this.isNew())return e.success(), !1;
                        D(this, e);
                        var o = this.sync("delete", this, e);
                        return e.wait || r(), o
                    }, url: function () {
                        var e = i.result(this, "urlRoot") || i.result(this.collection, "url") || P();
                        return this.isNew() ? e : e.replace(/([^\/])$/, "$1/") + encodeURIComponent(this.id)
                    }, parse: function (e) {
                        return e
                    }, clone: function () {
                        return new this.constructor(this.attributes)
                    }, isNew: function () {
                        return !this.has(this.idAttribute)
                    }, isValid: function (e) {
                        return this._validate({}, i.extend(e || {}, {validate: !0}))
                    }, _validate: function (e, t) {
                        if (!t.validate || !this.validate)return !0;
                        e = i.extend({}, this.attributes, e);
                        var n = this.validationError = this.validate(e, t) || null;
                        return n ? (this.trigger("invalid", this, n, i.extend(t, {validationError: n})), !1) : !0
                    }
                });
                var h = ["keys", "values", "pairs", "invert", "pick", "omit"];
                i.each(h, function (e) {
                    f.prototype[e] = function () {
                        var t = s.call(arguments);
                        return t.unshift(this.attributes), i[e].apply(i, t)
                    }
                });
                var g = t.Collection = function (e, t) {
                    t || (t = {}), t.model && (this.model = t.model), void 0 !== t.comparator && (this.comparator = t.comparator), this._reset(), this.initialize.apply(this, arguments), e && this.reset(e, i.extend({silent: !0}, t))
                }, p = {add: !0, remove: !0, merge: !0}, m = {add: !0, remove: !1};
                i.extend(g.prototype, a, {
                    model: f, initialize: function () {
                    }, toJSON: function (e) {
                        return this.map(function (t) {
                            return t.toJSON(e)
                        })
                    }, sync: function () {
                        return t.sync.apply(this, arguments)
                    }, add: function (e, t) {
                        return this.set(e, i.extend({merge: !1}, t, m))
                    }, remove: function (e, t) {
                        var n = !i.isArray(e);
                        e = n ? [e] : i.clone(e), t || (t = {});
                        var r, o, s, a;
                        for (r = 0, o = e.length; o > r; r++)a = e[r] = this.get(e[r]), a && (delete this._byId[a.id], delete this._byId[a.cid], s = this.indexOf(a), this.models.splice(s, 1), this.length--, t.silent || (t.index = s, a.trigger("remove", a, this, t)), this._removeReference(a, t));
                        return n ? e[0] : e
                    }, set: function (e, t) {
                        t = i.defaults({}, t, p), t.parse && (e = this.parse(e, t));
                        var n = !i.isArray(e);
                        e = n ? e ? [e] : [] : i.clone(e);
                        var r, o, s, a, l, d, u, c = t.at, h = this.model, g = this.comparator && null == c && t.sort !== !1, m = i.isString(this.comparator) ? this.comparator : null, v = [], w = [], y = {}, b = t.add, C = t.merge, F = t.remove, x = !g && b && F ? [] : !1;
                        for (r = 0, o = e.length; o > r; r++) {
                            if (l = e[r] || {}, s = l instanceof f ? a = l : l[h.prototype.idAttribute || "id"], d = this.get(s))F && (y[d.cid] = !0), C && (l = l === a ? a.attributes : l, t.parse && (l = d.parse(l, t)), d.set(l, t), g && !u && d.hasChanged(m) && (u = !0)), e[r] = d; else if (b) {
                                if (a = e[r] = this._prepareModel(l, t), !a)continue;
                                v.push(a), this._addReference(a, t)
                            }
                            a = d || a, !x || !a.isNew() && y[a.id] || x.push(a), y[a.id] = !0
                        }
                        if (F) {
                            for (r = 0, o = this.length; o > r; ++r)y[(a = this.models[r]).cid] || w.push(a);
                            w.length && this.remove(w, t)
                        }
                        if (v.length || x && x.length)if (g && (u = !0), this.length += v.length, null != c)for (r = 0, o = v.length; o > r; r++)this.models.splice(c + r, 0, v[r]); else {
                            x && (this.models.length = 0);
                            var k = x || v;
                            for (r = 0, o = k.length; o > r; r++)this.models.push(k[r])
                        }
                        if (u && this.sort({silent: !0}), !t.silent) {
                            for (r = 0, o = v.length; o > r; r++)(a = v[r]).trigger("add", a, this, t);
                            (u || x && x.length) && this.trigger("sort", this, t)
                        }
                        return n ? e[0] : e
                    }, reset: function (e, t) {
                        t || (t = {});
                        for (var n = 0, r = this.models.length; r > n; n++)this._removeReference(this.models[n], t);
                        return t.previousModels = this.models, this._reset(), e = this.add(e, i.extend({silent: !0}, t)), t.silent || this.trigger("reset", this, t), e
                    }, push: function (e, t) {
                        return this.add(e, i.extend({at: this.length}, t))
                    }, pop: function (e) {
                        var t = this.at(this.length - 1);
                        return this.remove(t, e), t
                    }, unshift: function (e, t) {
                        return this.add(e, i.extend({at: 0}, t))
                    }, shift: function (e) {
                        var t = this.at(0);
                        return this.remove(t, e), t
                    }, slice: function () {
                        return s.apply(this.models, arguments)
                    }, get: function (e) {
                        return null == e ? void 0 : this._byId[e] || this._byId[e.id] || this._byId[e.cid]
                    }, at: function (e) {
                        return this.models[e]
                    }, where: function (e, t) {
                        return i.isEmpty(e) ? t ? void 0 : [] : this[t ? "find" : "filter"](function (t) {
                            for (var i in e)if (e[i] !== t.get(i))return !1;
                            return !0
                        })
                    }, findWhere: function (e) {
                        return this.where(e, !0)
                    }, sort: function (e) {
                        if (!this.comparator)throw new Error("Cannot sort a set without a comparator");
                        return e || (e = {}), i.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(i.bind(this.comparator, this)), e.silent || this.trigger("sort", this, e), this
                    }, pluck: function (e) {
                        return i.invoke(this.models, "get", e)
                    }, fetch: function (e) {
                        e = e ? i.clone(e) : {}, void 0 === e.parse && (e.parse = !0);
                        var t = e.success, n = this;
                        return e.success = function (i) {
                            var r = e.reset ? "reset" : "set";
                            n[r](i, e), t && t(n, i, e), n.trigger("sync", n, i, e)
                        }, D(this, e), this.sync("read", this, e)
                    }, create: function (e, t) {
                        if (t = t ? i.clone(t) : {}, !(e = this._prepareModel(e, t)))return !1;
                        t.wait || this.add(e, t);
                        var n = this, r = t.success;
                        return t.success = function (e, i) {
                            t.wait && n.add(e, t), r && r(e, i, t)
                        }, e.save(null, t), e
                    }, parse: function (e) {
                        return e
                    }, clone: function () {
                        return new this.constructor(this.models)
                    }, _reset: function () {
                        this.length = 0, this.models = [], this._byId = {}
                    }, _prepareModel: function (e, t) {
                        if (e instanceof f)return e;
                        t = t ? i.clone(t) : {}, t.collection = this;
                        var n = new this.model(e, t);
                        return n.validationError ? (this.trigger("invalid", this, n.validationError, t), !1) : n
                    }, _addReference: function (e) {
                        this._byId[e.cid] = e, null != e.id && (this._byId[e.id] = e), e.collection || (e.collection = this), e.on("all", this._onModelEvent, this)
                    }, _removeReference: function (e) {
                        this === e.collection && delete e.collection, e.off("all", this._onModelEvent, this)
                    }, _onModelEvent: function (e, t, i, n) {
                        ("add" !== e && "remove" !== e || i === this) && ("destroy" === e && this.remove(t, n), t && e === "change:" + t.idAttribute && (delete this._byId[t.previous(t.idAttribute)], null != t.id && (this._byId[t.id] = t)), this.trigger.apply(this, arguments))
                    }
                });
                var v = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain", "sample"];
                i.each(v, function (e) {
                    g.prototype[e] = function () {
                        var t = s.call(arguments);
                        return t.unshift(this.models), i[e].apply(i, t)
                    }
                });
                var w = ["groupBy", "countBy", "sortBy", "indexBy"];
                i.each(w, function (e) {
                    g.prototype[e] = function (t, n) {
                        var r = i.isFunction(t) ? t : function (e) {
                            return e.get(t)
                        };
                        return i[e](this.models, r, n)
                    }
                });
                var y = t.View = function (e) {
                    this.cid = i.uniqueId("view"), e || (e = {}), i.extend(this, i.pick(e, C)), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()
                }, b = /^(\S+)\s*(.*)$/, C = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
                i.extend(y.prototype, a, {
                    tagName: "div", $: function (e) {
                        return this.$el.find(e)
                    }, initialize: function () {
                    }, render: function () {
                        return this
                    }, remove: function () {
                        return this.$el.remove(), this.stopListening(), this
                    }, setElement: function (e, i) {
                        return this.$el && this.undelegateEvents(), this.$el = e instanceof t.$ ? e : t.$(e), this.el = this.$el[0], i !== !1 && this.delegateEvents(), this
                    }, delegateEvents: function (e) {
                        if (!e && !(e = i.result(this, "events")))return this;
                        this.undelegateEvents();
                        for (var t in e) {
                            var n = e[t];
                            if (i.isFunction(n) || (n = this[e[t]]), n) {
                                var r = t.match(b), o = r[1], s = r[2];
                                n = i.bind(n, this), o += ".delegateEvents" + this.cid, "" === s ? this.$el.on(o, n) : this.$el.on(o, s, n)
                            }
                        }
                        return this
                    }, undelegateEvents: function () {
                        return this.$el.off(".delegateEvents" + this.cid), this
                    }, _ensureElement: function () {
                        if (this.el)this.setElement(i.result(this, "el"), !1); else {
                            var e = i.extend({}, i.result(this, "attributes"));
                            this.id && (e.id = i.result(this, "id")), this.className && (e["class"] = i.result(this, "className"));
                            var n = t.$("<" + i.result(this, "tagName") + ">").attr(e);
                            this.setElement(n, !1)
                        }
                    }
                }), t.sync = function (e, n, r) {
                    var o = x[e];
                    i.defaults(r || (r = {}), {emulateHTTP: t.emulateHTTP, emulateJSON: t.emulateJSON});
                    var s = {type: o, dataType: "json"};
                    if (r.url || (s.url = i.result(n, "url") || P()), null != r.data || !n || "create" !== e && "update" !== e && "patch" !== e || (s.contentType = "application/json", s.data = JSON.stringify(r.attrs || n.toJSON(r))), r.emulateJSON && (s.contentType = "application/x-www-form-urlencoded", s.data = s.data ? {model: s.data} : {}), r.emulateHTTP && ("PUT" === o || "DELETE" === o || "PATCH" === o)) {
                        s.type = "POST", r.emulateJSON && (s.data._method = o);
                        var a = r.beforeSend;
                        r.beforeSend = function (e) {
                            return e.setRequestHeader("X-HTTP-Method-Override", o), a ? a.apply(this, arguments) : void 0
                        }
                    }
                    "GET" === s.type || r.emulateJSON || (s.processData = !1), "PATCH" === s.type && F && (s.xhr = function () {
                        return new ActiveXObject("Microsoft.XMLHTTP")
                    });
                    var l = r.xhr = t.ajax(i.extend(s, r));
                    return n.trigger("request", n, l, r), l
                };
                var F = !("undefined" == typeof window || !window.ActiveXObject || window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent), x = {
                    create: "POST",
                    update: "PUT",
                    patch: "PATCH",
                    "delete": "DELETE",
                    read: "GET"
                };
                t.ajax = function () {
                    return t.$.ajax.apply(t.$, arguments)
                };
                var k = t.Router = function (e) {
                    e || (e = {}), e.routes && (this.routes = e.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
                }, M = /\((.*?)\)/g, E = /(\(\?)?:\w+/g, I = /\*\w+/g, K = /[\-{}\[\]+?.,\\\^$|#\s]/g;
                i.extend(k.prototype, a, {
                    initialize: function () {
                    }, route: function (e, n, r) {
                        i.isRegExp(e) || (e = this._routeToRegExp(e)), i.isFunction(n) && (r = n, n = ""), r || (r = this[n]);
                        var o = this;
                        return t.history.route(e, function (i) {
                            var s = o._extractParameters(e, i);
                            o.execute(r, s), o.trigger.apply(o, ["route:" + n].concat(s)), o.trigger("route", n, s), t.history.trigger("route", o, n, s)
                        }), this
                    }, execute: function (e, t) {
                        e && e.apply(this, t)
                    }, navigate: function (e, i) {
                        return t.history.navigate(e, i), this
                    }, _bindRoutes: function () {
                        if (this.routes) {
                            this.routes = i.result(this, "routes");
                            for (var e, t = i.keys(this.routes); null != (e = t.pop());)this.route(e, this.routes[e])
                        }
                    }, _routeToRegExp: function (e) {
                        return e = e.replace(K, "\\$&").replace(M, "(?:$1)?").replace(E, function (e, t) {
                            return t ? e : "([^/?]+)"
                        }).replace(I, "([^?]*?)"), new RegExp("^" + e + "(?:\\?([\\s\\S]*))?$")
                    }, _extractParameters: function (e, t) {
                        var n = e.exec(t).slice(1);
                        return i.map(n, function (e, t) {
                            return t === n.length - 1 ? e || null : e ? decodeURIComponent(e) : null
                        })
                    }
                });
                var S = t.History = function () {
                    this.handlers = [], i.bindAll(this, "checkUrl"), "undefined" != typeof window && (this.location = window.location, this.history = window.history)
                }, T = /^[#\/]|\s+$/g, _ = /^\/+|\/+$/g, V = /msie [\w.]+/, q = /\/$/, R = /#.*$/;
                S.started = !1, i.extend(S.prototype, a, {
                    interval: 50, atRoot: function () {
                        return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root
                    }, getHash: function (e) {
                        var t = (e || this).location.href.match(/#(.*)$/);
                        return t ? t[1] : ""
                    }, getFragment: function (e, t) {
                        if (null == e)if (this._hasPushState || !this._wantsHashChange || t) {
                            e = decodeURI(this.location.pathname + this.location.search);
                            var i = this.root.replace(q, "");
                            e.indexOf(i) || (e = e.slice(i.length))
                        } else e = this.getHash();
                        return e.replace(T, "")
                    }, start: function (e) {
                        if (S.started)throw new Error("Backbone.history has already been started");
                        S.started = !0, this.options = i.extend({root: "/"}, this.options, e), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
                        var n = this.getFragment(), r = document.documentMode, o = V.exec(navigator.userAgent.toLowerCase()) && (!r || 7 >= r);
                        if (this.root = ("/" + this.root + "/").replace(_, "/"), o && this._wantsHashChange) {
                            var s = t.$('<iframe src="javascript:0" tabindex="-1">');
                            this.iframe = s.hide().appendTo("body")[0].contentWindow, this.navigate(n)
                        }
                        this._hasPushState ? t.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !o ? t.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = n;
                        var a = this.location;
                        if (this._wantsHashChange && this._wantsPushState) {
                            if (!this._hasPushState && !this.atRoot())return this.fragment = this.getFragment(null, !0), this.location.replace(this.root + "#" + this.fragment), !0;
                            this._hasPushState && this.atRoot() && a.hash && (this.fragment = this.getHash().replace(T, ""), this.history.replaceState({}, document.title, this.root + this.fragment))
                        }
                        return this.options.silent ? void 0 : this.loadUrl()
                    }, stop: function () {
                        t.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), this._checkUrlInterval && clearInterval(this._checkUrlInterval), S.started = !1
                    }, route: function (e, t) {
                        this.handlers.unshift({route: e, callback: t})
                    }, checkUrl: function () {
                        var e = this.getFragment();
                        return e === this.fragment && this.iframe && (e = this.getFragment(this.getHash(this.iframe))), e === this.fragment ? !1 : (this.iframe && this.navigate(e), void this.loadUrl())
                    }, loadUrl: function (e) {
                        return e = this.fragment = this.getFragment(e), i.any(this.handlers, function (t) {
                            return t.route.test(e) ? (t.callback(e), !0) : void 0
                        })
                    }, navigate: function (e, t) {
                        if (!S.started)return !1;
                        t && t !== !0 || (t = {trigger: !!t});
                        var i = this.root + (e = this.getFragment(e || ""));
                        if (e = e.replace(R, ""), this.fragment !== e) {
                            if (this.fragment = e, "" === e && "/" !== i && (i = i.slice(0, -1)), this._hasPushState)this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, i); else {
                                if (!this._wantsHashChange)return this.location.assign(i);
                                this._updateHash(this.location, e, t.replace), this.iframe && e !== this.getFragment(this.getHash(this.iframe)) && (t.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, e, t.replace))
                            }
                            return t.trigger ? this.loadUrl(e) : void 0
                        }
                    }, _updateHash: function (e, t, i) {
                        if (i) {
                            var n = e.href.replace(/(javascript:|#).*$/, "");
                            e.replace(n + "#" + t)
                        } else e.hash = "#" + t
                    }
                }), t.history = new S;
                var z = function (e, t) {
                    var n, r = this;
                    n = e && i.has(e, "constructor") ? e.constructor : function () {
                        return r.apply(this, arguments)
                    }, i.extend(n, r, t);
                    var o = function () {
                        this.constructor = n
                    };
                    return o.prototype = r.prototype, n.prototype = new o, e && i.extend(n.prototype, e), n.__super__ = r.prototype, n
                };
                f.extend = g.extend = k.extend = y.extend = S.extend = z;
                var P = function () {
                    throw new Error('A "url" property or function must be specified')
                }, D = function (e, t) {
                    var i = t.error;
                    t.error = function (n) {
                        i && i(e, n, t), e.trigger("error", e, n, t)
                    }
                };
                return t
            }), function (e, t) {
                if ("function" == typeof CKFinder.define && CKFinder.define.amd)CKFinder.define("marionette", ["backbone", "underscore"], function (i, n) {
                    return e.Marionette = e.Mn = t(e, i, n)
                }); else if ("undefined" != typeof exports) {
                    var i = require("backbone"), n = require("underscore");
                    module.exports = t(e, i, n)
                } else e.Marionette = e.Mn = t(e, e.Backbone, e._)
            }(this, function (e, t, i) {
                "use strict";
                !function (e, t) {
                    var i = e.ChildViewContainer;
                    return e.ChildViewContainer = function (e, t) {
                        var i = function (e) {
                            this._views = {}, this._indexByModel = {}, this._indexByCustom = {}, this._updateLength(), t.each(e, this.add, this)
                        };
                        t.extend(i.prototype, {
                            add: function (e, t) {
                                var i = e.cid;
                                return this._views[i] = e, e.model && (this._indexByModel[e.model.cid] = i), t && (this._indexByCustom[t] = i), this._updateLength(), this
                            }, findByModel: function (e) {
                                return this.findByModelCid(e.cid)
                            }, findByModelCid: function (e) {
                                var t = this._indexByModel[e];
                                return this.findByCid(t)
                            }, findByCustom: function (e) {
                                var t = this._indexByCustom[e];
                                return this.findByCid(t)
                            }, findByIndex: function (e) {
                                return t.values(this._views)[e]
                            }, findByCid: function (e) {
                                return this._views[e]
                            }, remove: function (e) {
                                var i = e.cid;
                                return e.model && delete this._indexByModel[e.model.cid], t.any(this._indexByCustom, function (e, t) {
                                    return e === i ? (delete this._indexByCustom[t], !0) : void 0
                                }, this), delete this._views[i], this._updateLength(), this
                            }, call: function (e) {
                                this.apply(e, t.tail(arguments))
                            }, apply: function (e, i) {
                                t.each(this._views, function (n) {
                                    t.isFunction(n[e]) && n[e].apply(n, i || [])
                                })
                            }, _updateLength: function () {
                                this.length = t.size(this._views)
                            }
                        });
                        var n = ["forEach", "each", "map", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "toArray", "first", "initial", "rest", "last", "without", "isEmpty", "pluck"];
                        return t.each(n, function (e) {
                            i.prototype[e] = function () {
                                var i = t.values(this._views), n = [i].concat(t.toArray(arguments));
                                return t[e].apply(t, n)
                            }
                        }), i
                    }(e, t), e.ChildViewContainer.VERSION = "0.1.5", e.ChildViewContainer.noConflict = function () {
                        return e.ChildViewContainer = i, this
                    }, e.ChildViewContainer
                }(t, i), function (e, t) {
                    var i = e.Wreqr, n = e.Wreqr = {};
                    return e.Wreqr.VERSION = "1.3.1", e.Wreqr.noConflict = function () {
                        return e.Wreqr = i, this
                    }, n.Handlers = function (e, t) {
                        var i = function (e) {
                            this.options = e, this._wreqrHandlers = {}, t.isFunction(this.initialize) && this.initialize(e)
                        };
                        return i.extend = e.Model.extend, t.extend(i.prototype, e.Events, {
                            setHandlers: function (e) {
                                t.each(e, function (e, i) {
                                    var n = null;
                                    t.isObject(e) && !t.isFunction(e) && (n = e.context, e = e.callback), this.setHandler(i, e, n)
                                }, this)
                            }, setHandler: function (e, t, i) {
                                var n = {callback: t, context: i};
                                this._wreqrHandlers[e] = n, this.trigger("handler:add", e, t, i)
                            }, hasHandler: function (e) {
                                return !!this._wreqrHandlers[e]
                            }, getHandler: function (e) {
                                var t = this._wreqrHandlers[e];
                                return t ? function () {
                                    var e = Array.prototype.slice.apply(arguments);
                                    return t.callback.apply(t.context, e)
                                } : void 0
                            }, removeHandler: function (e) {
                                delete this._wreqrHandlers[e]
                            }, removeAllHandlers: function () {
                                this._wreqrHandlers = {}
                            }
                        }), i
                    }(e, t), n.CommandStorage = function () {
                        var i = function (e) {
                            this.options = e, this._commands = {}, t.isFunction(this.initialize) && this.initialize(e)
                        };
                        return t.extend(i.prototype, e.Events, {
                            getCommands: function (e) {
                                var t = this._commands[e];
                                return t || (t = {command: e, instances: []}, this._commands[e] = t), t
                            }, addCommand: function (e, t) {
                                var i = this.getCommands(e);
                                i.instances.push(t)
                            }, clearCommands: function (e) {
                                var t = this.getCommands(e);
                                t.instances = []
                            }
                        }), i
                    }(), n.Commands = function (e) {
                        return e.Handlers.extend({
                            storageType: e.CommandStorage, constructor: function (t) {
                                this.options = t || {}, this._initializeStorage(this.options), this.on("handler:add", this._executeCommands, this);
                                var i = Array.prototype.slice.call(arguments);
                                e.Handlers.prototype.constructor.apply(this, i)
                            }, execute: function (e, t) {
                                e = arguments[0], t = Array.prototype.slice.call(arguments, 1), this.hasHandler(e) ? this.getHandler(e).apply(this, t) : this.storage.addCommand(e, t)
                            }, _executeCommands: function (e, i, n) {
                                var r = this.storage.getCommands(e);
                                t.each(r.instances, function (e) {
                                    i.apply(n, e)
                                }), this.storage.clearCommands(e)
                            }, _initializeStorage: function (e) {
                                var i, n = e.storageType || this.storageType;
                                i = t.isFunction(n) ? new n : n, this.storage = i
                            }
                        })
                    }(n), n.RequestResponse = function (e) {
                        return e.Handlers.extend({
                            request: function () {
                                var e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
                                return this.hasHandler(e) ? this.getHandler(e).apply(this, t) : void 0
                            }
                        })
                    }(n), n.EventAggregator = function (e, t) {
                        var i = function () {
                        };
                        return i.extend = e.Model.extend, t.extend(i.prototype, e.Events), i
                    }(e, t), n.Channel = function () {
                        var i = function (t) {
                            this.vent = new e.Wreqr.EventAggregator, this.reqres = new e.Wreqr.RequestResponse, this.commands = new e.Wreqr.Commands, this.channelName = t
                        };
                        return t.extend(i.prototype, {
                            reset: function () {
                                return this.vent.off(), this.vent.stopListening(), this.reqres.removeAllHandlers(), this.commands.removeAllHandlers(), this
                            }, connectEvents: function (e, t) {
                                return this._connect("vent", e, t), this
                            }, connectCommands: function (e, t) {
                                return this._connect("commands", e, t), this
                            }, connectRequests: function (e, t) {
                                return this._connect("reqres", e, t), this
                            }, _connect: function (e, i, n) {
                                if (i) {
                                    n = n || this;
                                    var r = "vent" === e ? "on" : "setHandler";
                                    t.each(i, function (i, o) {
                                        this[e][r](o, t.bind(i, n))
                                    }, this)
                                }
                            }
                        }), i
                    }(n), n.radio = function (e) {
                        var i = function () {
                            this._channels = {}, this.vent = {}, this.commands = {}, this.reqres = {}, this._proxyMethods()
                        };
                        t.extend(i.prototype, {
                            channel: function (e) {
                                if (!e)throw new Error("Channel must receive a name");
                                return this._getChannel(e)
                            }, _getChannel: function (t) {
                                var i = this._channels[t];
                                return i || (i = new e.Channel(t), this._channels[t] = i), i
                            }, _proxyMethods: function () {
                                t.each(["vent", "commands", "reqres"], function (e) {
                                    t.each(n[e], function (t) {
                                        this[e][t] = r(this, e, t)
                                    }, this)
                                }, this)
                            }
                        });
                        var n = {
                            vent: ["on", "off", "trigger", "once", "stopListening", "listenTo", "listenToOnce"],
                            commands: ["execute", "setHandler", "setHandlers", "removeHandler", "removeAllHandlers"],
                            reqres: ["request", "setHandler", "setHandlers", "removeHandler", "removeAllHandlers"]
                        }, r = function (e, t, i) {
                            return function (n) {
                                var r = e._getChannel(n)[t], o = Array.prototype.slice.call(arguments, 1);
                                return r[i].apply(r, o)
                            }
                        };
                        return new i
                    }(n), e.Wreqr
                }(t, i);
                var n = e.Marionette, r = t.Marionette = {};
                r.VERSION = "2.3.2", r.noConflict = function () {
                    return e.Marionette = n, this
                }, t.Marionette = r, r.Deferred = t.$.Deferred, r.extend = t.Model.extend, r.isNodeAttached = function (e) {
                    return t.$.contains(document.documentElement, e)
                }, r.getOption = function (e, t) {
                    return e && t ? e.options && void 0 !== e.options[t] ? e.options[t] : e[t] : void 0
                }, r.proxyGetOption = function (e) {
                    return r.getOption(this, e)
                }, r._getValue = function (e, t, n) {
                    return i.isFunction(e) && (n = n || [], e = e.apply(t, n)), e
                }, r.normalizeMethods = function (e) {
                    return i.reduce(e, function (e, t, n) {
                        return i.isFunction(t) || (t = this[t]), t && (e[n] = t), e
                    }, {}, this)
                }, r.normalizeUIString = function (e, t) {
                    return e.replace(/@ui\.[a-zA-Z_$0-9]*/g, function (e) {
                        return t[e.slice(4)]
                    })
                }, r.normalizeUIKeys = function (e, t) {
                    return i.reduce(e, function (e, i, n) {
                        var o = r.normalizeUIString(n, t);
                        return e[o] = i, e
                    }, {})
                }, r.normalizeUIValues = function (e, t) {
                    return i.each(e, function (n, o) {
                        i.isString(n) && (e[o] = r.normalizeUIString(n, t))
                    }), e
                }, r.actAsCollection = function (e, t) {
                    var n = ["forEach", "each", "map", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "toArray", "first", "initial", "rest", "last", "without", "isEmpty", "pluck"];
                    i.each(n, function (n) {
                        e[n] = function () {
                            var e = i.values(i.result(this, t)), r = [e].concat(i.toArray(arguments));
                            return i[n].apply(i, r)
                        }
                    })
                };
                var o = r.deprecate = function (e, t) {
                    i.isObject(e) && (e = e.prev + " is going to be removed in the future. Please use " + e.next + " instead." + (e.url ? " See: " + e.url : "")), void 0 !== t && t || o._cache[e] || (o._warn("Deprecation warning: " + e), o._cache[e] = !0)
                };
                o._warn = "undefined" != typeof console && (console.warn || console.log) || function () {
                    }, o._cache = {}, r._triggerMethod = function () {
                    function e(e, t, i) {
                        return i.toUpperCase()
                    }

                    var t = /(^|:)(\w)/gi;
                    return function (n, r, o) {
                        var s = arguments.length < 3;
                        s && (o = r, r = o[0]);
                        var a, l = "on" + r.replace(t, e), d = n[l];
                        return i.isFunction(d) && (a = d.apply(n, s ? i.rest(o) : o)), i.isFunction(n.trigger) && (s + o.length > 1 ? n.trigger.apply(n, s ? o : [r].concat(i.rest(o, 0))) : n.trigger(r)), a
                    }
                }(), r.triggerMethod = function () {
                    return r._triggerMethod(this, arguments)
                }, r.triggerMethodOn = function (e) {
                    var t = i.isFunction(e.triggerMethod) ? e.triggerMethod : r.triggerMethod;
                    return t.apply(e, i.rest(arguments))
                }, r.MonitorDOMRefresh = function (e) {
                    function t() {
                        e._isShown = !0, o()
                    }

                    function n() {
                        e._isRendered = !0, o()
                    }

                    function o() {
                        e._isShown && e._isRendered && r.isNodeAttached(e.el) && i.isFunction(e.triggerMethod) && e.triggerMethod("dom:refresh")
                    }

                    e.on({show: t, render: n})
                }, function (e) {
                    function t(t, n, r, o) {
                        var s = o.split(/\s+/);
                        i.each(s, function (i) {
                            var o = t[i];
                            if (!o)throw new e.Error('Method "' + i + '" was configured as an event handler, but does not exist.');
                            t.listenTo(n, r, o)
                        })
                    }

                    function n(e, t, i, n) {
                        e.listenTo(t, i, n)
                    }

                    function r(e, t, n, r) {
                        var o = r.split(/\s+/);
                        i.each(o, function (i) {
                            var r = e[i];
                            e.stopListening(t, n, r)
                        })
                    }

                    function o(e, t, i, n) {
                        e.stopListening(t, i, n)
                    }

                    function s(t, n, r, o, s) {
                        if (n && r) {
                            if (!i.isObject(r))throw new e.Error({
                                message: "Bindings must be an object or function.",
                                url: "marionette.functions.html#marionettebindentityevents"
                            });
                            r = e._getValue(r, t), i.each(r, function (e, r) {
                                i.isFunction(e) ? o(t, n, r, e) : s(t, n, r, e)
                            })
                        }
                    }

                    e.bindEntityEvents = function (e, i, r) {
                        s(e, i, r, n, t)
                    }, e.unbindEntityEvents = function (e, t, i) {
                        s(e, t, i, o, r)
                    }, e.proxyBindEntityEvents = function (t, i) {
                        return e.bindEntityEvents(this, t, i)
                    }, e.proxyUnbindEntityEvents = function (t, i) {
                        return e.unbindEntityEvents(this, t, i)
                    }
                }(r);
                var s = ["description", "fileName", "lineNumber", "name", "message", "number"];
                return r.Error = r.extend.call(Error, {
                    urlRoot: "http://marionettejs.com/docs/v" + r.VERSION + "/",
                    constructor: function (e, t) {
                        i.isObject(e) ? (t = e, e = t.message) : t || (t = {});
                        var n = Error.call(this, e);
                        i.extend(this, i.pick(n, s), i.pick(t, s)), this.captureStackTrace(), t.url && (this.url = this.urlRoot + t.url)
                    },
                    captureStackTrace: function () {
                        Error.captureStackTrace && Error.captureStackTrace(this, r.Error)
                    },
                    toString: function () {
                        return this.name + ": " + this.message + (this.url ? " See: " + this.url : "")
                    }
                }), r.Error.extend = r.extend, r.Callbacks = function () {
                    this._deferred = r.Deferred(), this._callbacks = []
                }, i.extend(r.Callbacks.prototype, {
                    add: function (e, t) {
                        var n = i.result(this._deferred, "promise");
                        this._callbacks.push({cb: e, ctx: t}), n.then(function (i) {
                            t && (i.context = t), e.call(i.context, i.options)
                        })
                    }, run: function (e, t) {
                        this._deferred.resolve({options: e, context: t})
                    }, reset: function () {
                        var e = this._callbacks;
                        this._deferred = r.Deferred(), this._callbacks = [], i.each(e, function (e) {
                            this.add(e.cb, e.ctx)
                        }, this)
                    }
                }), r.Controller = function (e) {
                    this.options = e || {}, i.isFunction(this.initialize) && this.initialize(this.options)
                }, r.Controller.extend = r.extend, i.extend(r.Controller.prototype, t.Events, {
                    destroy: function () {
                        return r._triggerMethod(this, "before:destroy", arguments), r._triggerMethod(this, "destroy", arguments), this.stopListening(), this.off(), this
                    }, triggerMethod: r.triggerMethod, getOption: r.proxyGetOption
                }), r.Object = function (e) {
                    this.options = i.extend({}, i.result(this, "options"), e), this.initialize.apply(this, arguments)
                }, r.Object.extend = r.extend, i.extend(r.Object.prototype, t.Events, {
                    initialize: function () {
                    },
                    destroy: function () {
                        this.triggerMethod("before:destroy"), this.triggerMethod("destroy"), this.stopListening()
                    },
                    triggerMethod: r.triggerMethod,
                    getOption: r.proxyGetOption,
                    bindEntityEvents: r.proxyBindEntityEvents,
                    unbindEntityEvents: r.proxyUnbindEntityEvents
                }), r.Region = r.Object.extend({
                    constructor: function (e) {
                        if (this.options = e || {}, this.el = this.getOption("el"), this.el = this.el instanceof t.$ ? this.el[0] : this.el, !this.el)throw new r.Error({
                            name: "NoElError",
                            message: 'An "el" must be specified for a region.'
                        });
                        this.$el = this.getEl(this.el), r.Object.call(this, e)
                    }, show: function (e, t) {
                        if (this._ensureElement()) {
                            this._ensureViewIsIntact(e);
                            var i = t || {}, n = e !== this.currentView, o = !!i.preventDestroy, s = !!i.forceShow, a = !!this.currentView, l = n && !o, d = n || s;
                            if (a && this.triggerMethod("before:swapOut", this.currentView, this, t), this.currentView && delete this.currentView._parent, l ? this.empty() : a && d && this.currentView.off("destroy", this.empty, this), d) {
                                e.once("destroy", this.empty, this), e.render(), e._parent = this, a && this.triggerMethod("before:swap", e, this, t), this.triggerMethod("before:show", e, this, t), r.triggerMethodOn(e, "before:show", e, this, t), a && this.triggerMethod("swapOut", this.currentView, this, t);
                                var u = r.isNodeAttached(this.el), c = [], f = i.triggerBeforeAttach || this.triggerBeforeAttach, h = i.triggerAttach || this.triggerAttach;
                                return u && f && (c = this._displayedViews(e), this._triggerAttach(c, "before:")), this.attachHtml(e), this.currentView = e, u && h && (c = this._displayedViews(e), this._triggerAttach(c)), a && this.triggerMethod("swap", e, this, t), this.triggerMethod("show", e, this, t), r.triggerMethodOn(e, "show", e, this, t), this
                            }
                            return this
                        }
                    }, triggerBeforeAttach: !0, triggerAttach: !0, _triggerAttach: function (e, t) {
                        var n = (t || "") + "attach";
                        i.each(e, function (e) {
                            r.triggerMethodOn(e, n, e, this)
                        }, this)
                    }, _displayedViews: function (e) {
                        return i.union([e], i.result(e, "_getNestedViews") || [])
                    }, _ensureElement: function () {
                        if (i.isObject(this.el) || (this.$el = this.getEl(this.el), this.el = this.$el[0]), !this.$el || 0 === this.$el.length) {
                            if (this.getOption("allowMissingEl"))return !1;
                            throw new r.Error('An "el" ' + this.$el.selector + " must exist in DOM")
                        }
                        return !0
                    }, _ensureViewIsIntact: function (e) {
                        if (!e)throw new r.Error({
                            name: "ViewNotValid",
                            message: "The view passed is undefined and therefore invalid. You must pass a view instance to show."
                        });
                        if (e.isDestroyed)throw new r.Error({
                            name: "ViewDestroyedError",
                            message: 'View (cid: "' + e.cid + '") has already been destroyed and cannot be used.'
                        })
                    }, getEl: function (e) {
                        return t.$(e, r._getValue(this.options.parentEl, this))
                    }, attachHtml: function (e) {
                        this.$el.contents().detach(), this.el.appendChild(e.el)
                    }, empty: function () {
                        var e = this.currentView;
                        return e ? (e.off("destroy", this.empty, this), this.triggerMethod("before:empty", e), this._destroyView(), this.triggerMethod("empty", e), delete this.currentView, this) : void 0
                    }, _destroyView: function () {
                        var e = this.currentView;
                        e.destroy && !e.isDestroyed ? e.destroy() : e.remove && (e.remove(), e.isDestroyed = !0)
                    }, attachView: function (e) {
                        return this.currentView = e, this
                    }, hasView: function () {
                        return !!this.currentView
                    }, reset: function () {
                        return this.empty(), this.$el && (this.el = this.$el.selector), delete this.$el, this
                    }
                }, {
                    buildRegion: function (e, t) {
                        if (i.isString(e))return this._buildRegionFromSelector(e, t);
                        if (e.selector || e.el || e.regionClass)return this._buildRegionFromObject(e, t);
                        if (i.isFunction(e))return this._buildRegionFromRegionClass(e);
                        throw new r.Error({
                            message: "Improper region configuration type.",
                            url: "marionette.region.html#region-configuration-types"
                        })
                    }, _buildRegionFromSelector: function (e, t) {
                        return new t({el: e})
                    }, _buildRegionFromObject: function (e, t) {
                        var n = e.regionClass || t, r = i.omit(e, "selector", "regionClass");
                        return e.selector && !r.el && (r.el = e.selector), new n(r)
                    }, _buildRegionFromRegionClass: function (e) {
                        return new e
                    }
                }), r.RegionManager = r.Controller.extend({
                    constructor: function (e) {
                        this._regions = {}, r.Controller.call(this, e), this.addRegions(this.getOption("regions"))
                    }, addRegions: function (e, t) {
                        return e = r._getValue(e, this, arguments), i.reduce(e, function (e, n, r) {
                            return i.isString(n) && (n = {selector: n}), n.selector && (n = i.defaults({}, n, t)), e[r] = this.addRegion(r, n), e
                        }, {}, this)
                    }, addRegion: function (e, t) {
                        var i;
                        return i = t instanceof r.Region ? t : r.Region.buildRegion(t, r.Region), this.triggerMethod("before:add:region", e, i), i._parent = this, this._store(e, i), this.triggerMethod("add:region", e, i), i
                    }, get: function (e) {
                        return this._regions[e]
                    }, getRegions: function () {
                        return i.clone(this._regions)
                    }, removeRegion: function (e) {
                        var t = this._regions[e];
                        return this._remove(e, t), t
                    }, removeRegions: function () {
                        var e = this.getRegions();
                        return i.each(this._regions, function (e, t) {
                            this._remove(t, e)
                        }, this), e
                    }, emptyRegions: function () {
                        var e = this.getRegions();
                        return i.invoke(e, "empty"), e
                    }, destroy: function () {
                        return this.removeRegions(), r.Controller.prototype.destroy.apply(this, arguments)
                    }, _store: function (e, t) {
                        this._regions[e] = t, this._setLength()
                    }, _remove: function (e, t) {
                        this.triggerMethod("before:remove:region", e, t), t.empty(), t.stopListening(), delete t._parent, delete this._regions[e], this._setLength(), this.triggerMethod("remove:region", e, t)
                    },
                    _setLength: function () {
                        this.length = i.size(this._regions)
                    }
                }), r.actAsCollection(r.RegionManager.prototype, "_regions"), r.TemplateCache = function (e) {
                    this.templateId = e
                }, i.extend(r.TemplateCache, {
                    templateCaches: {}, get: function (e) {
                        var t = this.templateCaches[e];
                        return t || (t = new r.TemplateCache(e), this.templateCaches[e] = t), t.load()
                    }, clear: function () {
                        var e, t = i.toArray(arguments), n = t.length;
                        if (n > 0)for (e = 0; n > e; e++)delete this.templateCaches[t[e]]; else this.templateCaches = {}
                    }
                }), i.extend(r.TemplateCache.prototype, {
                    load: function () {
                        if (this.compiledTemplate)return this.compiledTemplate;
                        var e = this.loadTemplate(this.templateId);
                        return this.compiledTemplate = this.compileTemplate(e), this.compiledTemplate
                    }, loadTemplate: function (e) {
                        var i = t.$(e).html();
                        if (!i || 0 === i.length)throw new r.Error({
                            name: "NoTemplateError",
                            message: 'Could not find template: "' + e + '"'
                        });
                        return i
                    }, compileTemplate: function (e) {
                        return i.template(e)
                    }
                }), r.Renderer = {
                    render: function (e, t) {
                        if (!e)throw new r.Error({
                            name: "TemplateNotFoundError",
                            message: "Cannot render the template since its false, null or undefined."
                        });
                        var n = i.isFunction(e) ? e : r.TemplateCache.get(e);
                        return n(t)
                    }
                }, r.View = t.View.extend({
                    isDestroyed: !1,
                    constructor: function (e) {
                        i.bindAll(this, "render"), e = r._getValue(e, this), this.options = i.extend({}, i.result(this, "options"), e), this._behaviors = r.Behaviors(this), t.View.apply(this, arguments), r.MonitorDOMRefresh(this), this.on("show", this.onShowCalled)
                    },
                    getTemplate: function () {
                        return this.getOption("template")
                    },
                    serializeModel: function (e) {
                        return e.toJSON.apply(e, i.rest(arguments))
                    },
                    mixinTemplateHelpers: function (e) {
                        e = e || {};
                        var t = this.getOption("templateHelpers");
                        return t = r._getValue(t, this), i.extend(e, t)
                    },
                    normalizeUIKeys: function (e) {
                        var t = i.result(this, "_uiBindings");
                        return r.normalizeUIKeys(e, t || i.result(this, "ui"))
                    },
                    normalizeUIValues: function (e) {
                        var t = i.result(this, "ui"), n = i.result(this, "_uiBindings");
                        return r.normalizeUIValues(e, n || t)
                    },
                    configureTriggers: function () {
                        if (this.triggers) {
                            var e = this.normalizeUIKeys(i.result(this, "triggers"));
                            return i.reduce(e, function (e, t, i) {
                                return e[i] = this._buildViewTrigger(t), e
                            }, {}, this)
                        }
                    },
                    delegateEvents: function (e) {
                        return this._delegateDOMEvents(e), this.bindEntityEvents(this.model, this.getOption("modelEvents")), this.bindEntityEvents(this.collection, this.getOption("collectionEvents")), i.each(this._behaviors, function (e) {
                            e.bindEntityEvents(this.model, e.getOption("modelEvents")), e.bindEntityEvents(this.collection, e.getOption("collectionEvents"))
                        }, this), this
                    },
                    _delegateDOMEvents: function (e) {
                        var n = r._getValue(e || this.events, this);
                        n = this.normalizeUIKeys(n), i.isUndefined(e) && (this.events = n);
                        var o = {}, s = i.result(this, "behaviorEvents") || {}, a = this.configureTriggers(), l = i.result(this, "behaviorTriggers") || {};
                        i.extend(o, s, n, a, l), t.View.prototype.delegateEvents.call(this, o)
                    },
                    undelegateEvents: function () {
                        return t.View.prototype.undelegateEvents.apply(this, arguments), this.unbindEntityEvents(this.model, this.getOption("modelEvents")), this.unbindEntityEvents(this.collection, this.getOption("collectionEvents")), i.each(this._behaviors, function (e) {
                            e.unbindEntityEvents(this.model, e.getOption("modelEvents")), e.unbindEntityEvents(this.collection, e.getOption("collectionEvents"))
                        }, this), this
                    },
                    onShowCalled: function () {
                    },
                    _ensureViewIsIntact: function () {
                        if (this.isDestroyed)throw new r.Error({
                            name: "ViewDestroyedError",
                            message: 'View (cid: "' + this.cid + '") has already been destroyed and cannot be used.'
                        })
                    },
                    destroy: function () {
                        if (!this.isDestroyed) {
                            var e = i.toArray(arguments);
                            return this.triggerMethod.apply(this, ["before:destroy"].concat(e)), this.isDestroyed = !0, this.triggerMethod.apply(this, ["destroy"].concat(e)), this.unbindUIElements(), this.remove(), i.invoke(this._behaviors, "destroy", e), this
                        }
                    },
                    bindUIElements: function () {
                        this._bindUIElements(), i.invoke(this._behaviors, this._bindUIElements)
                    },
                    _bindUIElements: function () {
                        if (this.ui) {
                            this._uiBindings || (this._uiBindings = this.ui);
                            var e = i.result(this, "_uiBindings");
                            this.ui = {}, i.each(e, function (e, t) {
                                this.ui[t] = this.$(e)
                            }, this)
                        }
                    },
                    unbindUIElements: function () {
                        this._unbindUIElements(), i.invoke(this._behaviors, this._unbindUIElements)
                    },
                    _unbindUIElements: function () {
                        this.ui && this._uiBindings && (i.each(this.ui, function (e, t) {
                            delete this.ui[t]
                        }, this), this.ui = this._uiBindings, delete this._uiBindings)
                    },
                    _buildViewTrigger: function (e) {
                        var t = i.isObject(e), n = i.defaults({}, t ? e : {}, {
                            preventDefault: !0,
                            stopPropagation: !0
                        }), r = t ? n.event : e;
                        return function (e) {
                            e && (e.preventDefault && n.preventDefault && e.preventDefault(), e.stopPropagation && n.stopPropagation && e.stopPropagation());
                            var t = {view: this, model: this.model, collection: this.collection};
                            this.triggerMethod(r, t)
                        }
                    },
                    setElement: function () {
                        var e = t.View.prototype.setElement.apply(this, arguments);
                        return i.invoke(this._behaviors, "proxyViewProperties", this), e
                    },
                    triggerMethod: function () {
                        for (var e = r._triggerMethod, t = e(this, arguments), i = this._behaviors, n = 0, o = i && i.length; o > n; n++)e(i[n], arguments);
                        return t
                    },
                    _getImmediateChildren: function () {
                        return []
                    },
                    _getNestedViews: function () {
                        var e = this._getImmediateChildren();
                        return e.length ? i.reduce(e, function (e, t) {
                            return t._getNestedViews ? e.concat(t._getNestedViews()) : e
                        }, e) : e
                    },
                    normalizeMethods: r.normalizeMethods,
                    getOption: r.proxyGetOption,
                    bindEntityEvents: r.proxyBindEntityEvents,
                    unbindEntityEvents: r.proxyUnbindEntityEvents
                }), r.ItemView = r.View.extend({
                    constructor: function () {
                        r.View.apply(this, arguments)
                    }, serializeData: function () {
                        if (!this.model && !this.collection)return {};
                        var e = [this.model || this.collection];
                        return arguments.length && e.push.apply(e, arguments), this.model ? this.serializeModel.apply(this, e) : {items: this.serializeCollection.apply(this, e)}
                    }, serializeCollection: function (e) {
                        return e.toJSON.apply(e, i.rest(arguments))
                    }, render: function () {
                        return this._ensureViewIsIntact(), this.triggerMethod("before:render", this), this._renderTemplate(), this.bindUIElements(), this.triggerMethod("render", this), this
                    }, _renderTemplate: function () {
                        var e = this.getTemplate();
                        if (e !== !1) {
                            if (!e)throw new r.Error({
                                name: "UndefinedTemplateError",
                                message: "Cannot render the template since it is null or undefined."
                            });
                            var t = this.serializeData();
                            t = this.mixinTemplateHelpers(t);
                            var i = r.Renderer.render(e, t, this);
                            return this.attachElContent(i), this
                        }
                    }, attachElContent: function (e) {
                        return this.$el.html(e), this
                    }
                }), r.CollectionView = r.View.extend({
                    childViewEventPrefix: "childview", constructor: function (e) {
                        var t = e || {};
                        i.isUndefined(this.sort) && (this.sort = i.isUndefined(t.sort) ? !0 : t.sort), this.once("render", this._initialEvents), this._initChildViewStorage(), r.View.apply(this, arguments), this.initRenderBuffer()
                    }, initRenderBuffer: function () {
                        this.elBuffer = document.createDocumentFragment(), this._bufferedChildren = []
                    }, startBuffering: function () {
                        this.initRenderBuffer(), this.isBuffering = !0
                    }, endBuffering: function () {
                        this.isBuffering = !1, this._triggerBeforeShowBufferedChildren(), this.attachBuffer(this, this.elBuffer), this._triggerShowBufferedChildren(), this.initRenderBuffer()
                    }, _triggerBeforeShowBufferedChildren: function () {
                        this._isShown && i.each(this._bufferedChildren, i.partial(this._triggerMethodOnChild, "before:show"))
                    }, _triggerShowBufferedChildren: function () {
                        this._isShown && (i.each(this._bufferedChildren, i.partial(this._triggerMethodOnChild, "show")), this._bufferedChildren = [])
                    }, _triggerMethodOnChild: function (e, t) {
                        r.triggerMethodOn(t, e)
                    }, _initialEvents: function () {
                        this.collection && (this.listenTo(this.collection, "add", this._onCollectionAdd), this.listenTo(this.collection, "remove", this._onCollectionRemove), this.listenTo(this.collection, "reset", this.render), this.sort && this.listenTo(this.collection, "sort", this._sortViews))
                    }, _onCollectionAdd: function (e) {
                        this.destroyEmptyView();
                        var t = this.getChildView(e), i = this.collection.indexOf(e);
                        this.addChild(e, t, i)
                    }, _onCollectionRemove: function (e) {
                        var t = this.children.findByModel(e);
                        this.removeChildView(t), this.checkEmpty()
                    }, onShowCalled: function () {
                        this.children.each(i.partial(this._triggerMethodOnChild, "show"))
                    }, render: function () {
                        return this._ensureViewIsIntact(), this.triggerMethod("before:render", this), this._renderChildren(), this.triggerMethod("render", this), this
                    }, resortView: function () {
                        this.render()
                    }, _sortViews: function () {
                        var e = this.collection.find(function (e, t) {
                            var i = this.children.findByModel(e);
                            return !i || i._index !== t
                        }, this);
                        e && this.resortView()
                    }, _emptyViewIndex: -1, _renderChildren: function () {
                        this.destroyEmptyView(), this.destroyChildren(), this.isEmpty(this.collection) ? this.showEmptyView() : (this.triggerMethod("before:render:collection", this), this.startBuffering(), this.showCollection(), this.endBuffering(), this.triggerMethod("render:collection", this))
                    }, showCollection: function () {
                        var e;
                        this.collection.each(function (t, i) {
                            e = this.getChildView(t), this.addChild(t, e, i)
                        }, this)
                    }, showEmptyView: function () {
                        var e = this.getEmptyView();
                        if (e && !this._showingEmptyView) {
                            this.triggerMethod("before:render:empty"), this._showingEmptyView = !0;
                            var i = new t.Model;
                            this.addEmptyView(i, e), this.triggerMethod("render:empty")
                        }
                    }, destroyEmptyView: function () {
                        this._showingEmptyView && (this.triggerMethod("before:remove:empty"), this.destroyChildren(), delete this._showingEmptyView, this.triggerMethod("remove:empty"))
                    }, getEmptyView: function () {
                        return this.getOption("emptyView")
                    }, addEmptyView: function (e, t) {
                        var n = this.getOption("emptyViewOptions") || this.getOption("childViewOptions");
                        i.isFunction(n) && (n = n.call(this, e, this._emptyViewIndex));
                        var o = this.buildChildView(e, t, n);
                        o._parent = this, this.proxyChildEvents(o), this._isShown && r.triggerMethodOn(o, "before:show"), this.children.add(o), this.renderChildView(o, this._emptyViewIndex), this._isShown && r.triggerMethodOn(o, "show")
                    }, getChildView: function () {
                        var e = this.getOption("childView");
                        if (!e)throw new r.Error({
                            name: "NoChildViewError",
                            message: 'A "childView" must be specified'
                        });
                        return e
                    }, addChild: function (e, t, i) {
                        var n = this.getOption("childViewOptions");
                        n = r._getValue(n, this, [e, i]);
                        var o = this.buildChildView(e, t, n);
                        return this._updateIndices(o, !0, i), this._addChildView(o, i), o._parent = this, o
                    }, _updateIndices: function (e, t, i) {
                        this.sort && (t && (e._index = i), this.children.each(function (i) {
                            i._index >= e._index && (i._index += t ? 1 : -1)
                        }))
                    }, _addChildView: function (e, t) {
                        this.proxyChildEvents(e), this.triggerMethod("before:add:child", e), this.children.add(e), this.renderChildView(e, t), this._isShown && !this.isBuffering && r.triggerMethodOn(e, "show"), this.triggerMethod("add:child", e)
                    }, renderChildView: function (e, t) {
                        return e.render(), this.attachHtml(this, e, t), e
                    }, buildChildView: function (e, t, n) {
                        var r = i.extend({model: e}, n);
                        return new t(r)
                    }, removeChildView: function (e) {
                        return e && (this.triggerMethod("before:remove:child", e), e.destroy ? e.destroy() : e.remove && e.remove(), delete e._parent, this.stopListening(e), this.children.remove(e), this.triggerMethod("remove:child", e), this._updateIndices(e, !1)), e
                    }, isEmpty: function () {
                        return !this.collection || 0 === this.collection.length
                    }, checkEmpty: function () {
                        this.isEmpty(this.collection) && this.showEmptyView()
                    }, attachBuffer: function (e, t) {
                        e.$el.append(t)
                    }, attachHtml: function (e, t, i) {
                        e.isBuffering ? (e.elBuffer.appendChild(t.el), e._bufferedChildren.push(t)) : e._insertBefore(t, i) || e._insertAfter(t)
                    }, _insertBefore: function (e, t) {
                        var i, n = this.sort && t < this.children.length - 1;
                        return n && (i = this.children.find(function (e) {
                            return e._index === t + 1
                        })), i ? (i.$el.before(e.el), !0) : !1
                    }, _insertAfter: function (e) {
                        this.$el.append(e.el)
                    }, _initChildViewStorage: function () {
                        this.children = new t.ChildViewContainer
                    }, destroy: function () {
                        return this.isDestroyed ? void 0 : (this.triggerMethod("before:destroy:collection"), this.destroyChildren(), this.triggerMethod("destroy:collection"), r.View.prototype.destroy.apply(this, arguments))
                    }, destroyChildren: function () {
                        var e = this.children.map(i.identity);
                        return this.children.each(this.removeChildView, this), this.checkEmpty(), e
                    }, proxyChildEvents: function (e) {
                        var t = this.getOption("childViewEventPrefix");
                        this.listenTo(e, "all", function () {
                            var n = i.toArray(arguments), r = n[0], o = this.normalizeMethods(i.result(this, "childEvents"));
                            n[0] = t + ":" + r, n.splice(1, 0, e), "undefined" != typeof o && i.isFunction(o[r]) && o[r].apply(this, n.slice(1)), this.triggerMethod.apply(this, n)
                        }, this)
                    }, _getImmediateChildren: function () {
                        return i.values(this.children._views)
                    }
                }), r.CompositeView = r.CollectionView.extend({
                    constructor: function () {
                        r.CollectionView.apply(this, arguments)
                    }, _initialEvents: function () {
                        this.collection && (this.listenTo(this.collection, "add", this._onCollectionAdd), this.listenTo(this.collection, "remove", this._onCollectionRemove), this.listenTo(this.collection, "reset", this._renderChildren), this.sort && this.listenTo(this.collection, "sort", this._sortViews))
                    }, getChildView: function () {
                        var e = this.getOption("childView") || this.constructor;
                        return e
                    }, serializeData: function () {
                        var e = {};
                        return this.model && (e = i.partial(this.serializeModel, this.model).apply(this, arguments)), e
                    }, render: function () {
                        return this._ensureViewIsIntact(), this.isRendered = !0, this.resetChildViewContainer(), this.triggerMethod("before:render", this), this._renderTemplate(), this._renderChildren(), this.triggerMethod("render", this), this
                    }, _renderChildren: function () {
                        this.isRendered && r.CollectionView.prototype._renderChildren.call(this)
                    }, _renderTemplate: function () {
                        var e = {};
                        e = this.serializeData(), e = this.mixinTemplateHelpers(e), this.triggerMethod("before:render:template");
                        var t = this.getTemplate(), i = r.Renderer.render(t, e, this);
                        this.attachElContent(i), this.bindUIElements(), this.triggerMethod("render:template")
                    }, attachElContent: function (e) {
                        return this.$el.html(e), this
                    }, attachBuffer: function (e, t) {
                        var i = this.getChildViewContainer(e);
                        i.append(t)
                    }, _insertAfter: function (e) {
                        var t = this.getChildViewContainer(this, e);
                        t.append(e.el)
                    }, getChildViewContainer: function (e) {
                        if ("$childViewContainer" in e)return e.$childViewContainer;
                        var t, i = r.getOption(e, "childViewContainer");
                        if (i) {
                            var n = r._getValue(i, e);
                            if (t = "@" === n.charAt(0) && e.ui ? e.ui[n.substr(4)] : e.$(n), t.length <= 0)throw new r.Error({
                                name: "ChildViewContainerMissingError",
                                message: 'The specified "childViewContainer" was not found: ' + e.childViewContainer
                            })
                        } else t = e.$el;
                        return e.$childViewContainer = t, t
                    }, resetChildViewContainer: function () {
                        this.$childViewContainer && delete this.$childViewContainer
                    }
                }), r.LayoutView = r.ItemView.extend({
                    regionClass: r.Region, constructor: function (e) {
                        e = e || {}, this._firstRender = !0, this._initializeRegions(e), r.ItemView.call(this, e)
                    }, render: function () {
                        return this._ensureViewIsIntact(), this._firstRender ? this._firstRender = !1 : this._reInitializeRegions(), r.ItemView.prototype.render.apply(this, arguments)
                    }, destroy: function () {
                        return this.isDestroyed ? this : (this.regionManager.destroy(), r.ItemView.prototype.destroy.apply(this, arguments))
                    }, addRegion: function (e, t) {
                        var i = {};
                        return i[e] = t, this._buildRegions(i)[e]
                    }, addRegions: function (e) {
                        return this.regions = i.extend({}, this.regions, e), this._buildRegions(e)
                    }, removeRegion: function (e) {
                        return delete this.regions[e], this.regionManager.removeRegion(e)
                    }, getRegion: function (e) {
                        return this.regionManager.get(e)
                    }, getRegions: function () {
                        return this.regionManager.getRegions()
                    }, _buildRegions: function (e) {
                        var t = {regionClass: this.getOption("regionClass"), parentEl: i.partial(i.result, this, "el")};
                        return this.regionManager.addRegions(e, t)
                    }, _initializeRegions: function (e) {
                        var t;
                        this._initRegionManager(), t = r._getValue(this.regions, this, [e]) || {};
                        var n = this.getOption.call(e, "regions");
                        n = r._getValue(n, this, [e]), i.extend(t, n), t = this.normalizeUIValues(t), this.addRegions(t)
                    }, _reInitializeRegions: function () {
                        this.regionManager.invoke("reset")
                    }, getRegionManager: function () {
                        return new r.RegionManager
                    }, _initRegionManager: function () {
                        this.regionManager = this.getRegionManager(), this.regionManager._parent = this, this.listenTo(this.regionManager, "before:add:region", function (e) {
                            this.triggerMethod("before:add:region", e)
                        }), this.listenTo(this.regionManager, "add:region", function (e, t) {
                            this[e] = t, this.triggerMethod("add:region", e, t)
                        }), this.listenTo(this.regionManager, "before:remove:region", function (e) {
                            this.triggerMethod("before:remove:region", e)
                        }), this.listenTo(this.regionManager, "remove:region", function (e, t) {
                            delete this[e], this.triggerMethod("remove:region", e, t)
                        })
                    }, _getImmediateChildren: function () {
                        return i.chain(this.regionManager.getRegions()).pluck("currentView").compact().value()
                    }
                }), r.Behavior = r.Object.extend({
                    constructor: function (e, t) {
                        this.view = t, this.defaults = i.result(this, "defaults") || {}, this.options = i.extend({}, this.defaults, e), r.Object.apply(this, arguments)
                    }, $: function () {
                        return this.view.$.apply(this.view, arguments)
                    }, destroy: function () {
                        this.stopListening()
                    }, proxyViewProperties: function (e) {
                        this.$el = e.$el, this.el = e.el
                    }
                }), r.Behaviors = function (e, t) {
                    function i(e, n) {
                        return t.isObject(e.behaviors) ? (n = i.parseBehaviors(e, n || t.result(e, "behaviors")), i.wrap(e, n, t.keys(o)), n) : {}
                    }

                    function n(e, i) {
                        this._view = e, this._viewUI = t.result(e, "ui"), this._behaviors = i, this._triggers = {}
                    }

                    var r = /^(\S+)\s*(.*)$/, o = {
                        behaviorTriggers: function (e, t) {
                            var i = new n(this, t);
                            return i.buildBehaviorTriggers()
                        }, behaviorEvents: function (i, n) {
                            var o = {}, s = this._uiBindings || t.result(this, "ui");
                            return t.each(n, function (i, n) {
                                var a = {}, l = t.clone(t.result(i, "events")) || {}, d = i._uiBindings || t.result(i, "ui"), u = t.extend({}, s, d);
                                l = e.normalizeUIKeys(l, u);
                                var c = 0;
                                t.each(l, function (e, o) {
                                    var s = o.match(r), l = s[1] + "." + [this.cid, n, c++, " "].join(""), d = s[2], u = l + d, f = t.isFunction(e) ? e : i[e];
                                    a[u] = t.bind(f, i)
                                }, this), o = t.extend(o, a)
                            }, this), o
                        }
                    };
                    return t.extend(i, {
                        behaviorsLookup: function () {
                            throw new e.Error({
                                message: "You must define where your behaviors are stored.",
                                url: "marionette.behaviors.html#behaviorslookup"
                            })
                        }, getBehaviorClass: function (t, n) {
                            return t.behaviorClass ? t.behaviorClass : e._getValue(i.behaviorsLookup, this, [t, n])[n]
                        }, parseBehaviors: function (e, n) {
                            return t.chain(n).map(function (n, r) {
                                var o = i.getBehaviorClass(n, r), s = new o(n, e), a = i.parseBehaviors(e, t.result(s, "behaviors"));
                                return [s].concat(a)
                            }).flatten().value()
                        }, wrap: function (e, i, n) {
                            t.each(n, function (n) {
                                e[n] = t.partial(o[n], e[n], i)
                            })
                        }
                    }), t.extend(n.prototype, {
                        buildBehaviorTriggers: function () {
                            return t.each(this._behaviors, this._buildTriggerHandlersForBehavior, this), this._triggers
                        }, _buildTriggerHandlersForBehavior: function (i, n) {
                            var r = t.extend({}, this._viewUI, t.result(i, "ui")), o = t.clone(t.result(i, "triggers")) || {};
                            o = e.normalizeUIKeys(o, r), t.each(o, t.bind(this._setHandlerForBehavior, this, i, n))
                        }, _setHandlerForBehavior: function (e, t, i, n) {
                            var r = n.replace(/^\S+/, function (e) {
                                return e + ".behaviortriggers" + t
                            });
                            this._triggers[r] = this._view._buildViewTrigger(i)
                        }
                    }), i
                }(r, i), r.AppRouter = t.Router.extend({
                    constructor: function (e) {
                        this.options = e || {}, t.Router.apply(this, arguments);
                        var i = this.getOption("appRoutes"), n = this._getController();
                        this.processAppRoutes(n, i), this.on("route", this._processOnRoute, this)
                    },
                    appRoute: function (e, t) {
                        var i = this._getController();
                        this._addAppRoute(i, e, t)
                    },
                    _processOnRoute: function (e, t) {
                        if (i.isFunction(this.onRoute)) {
                            var n = i.invert(this.getOption("appRoutes"))[e];
                            this.onRoute(e, n, t)
                        }
                    },
                    processAppRoutes: function (e, t) {
                        if (t) {
                            var n = i.keys(t).reverse();
                            i.each(n, function (i) {
                                this._addAppRoute(e, i, t[i])
                            }, this)
                        }
                    },
                    _getController: function () {
                        return this.getOption("controller")
                    },
                    _addAppRoute: function (e, t, n) {
                        var o = e[n];
                        if (!o)throw new r.Error('Method "' + n + '" was not found on the controller');
                        this.route(t, n, i.bind(o, e))
                    },
                    getOption: r.proxyGetOption,
                    triggerMethod: r.triggerMethod,
                    bindEntityEvents: r.proxyBindEntityEvents,
                    unbindEntityEvents: r.proxyUnbindEntityEvents
                }), r.Application = r.Object.extend({
                    constructor: function (e) {
                        this._initializeRegions(e), this._initCallbacks = new r.Callbacks, this.submodules = {}, i.extend(this, e), this._initChannel(), r.Object.call(this, e)
                    }, execute: function () {
                        this.commands.execute.apply(this.commands, arguments)
                    }, request: function () {
                        return this.reqres.request.apply(this.reqres, arguments)
                    }, addInitializer: function (e) {
                        this._initCallbacks.add(e)
                    }, start: function (e) {
                        this.triggerMethod("before:start", e), this._initCallbacks.run(e, this), this.triggerMethod("start", e)
                    }, addRegions: function (e) {
                        return this._regionManager.addRegions(e)
                    }, emptyRegions: function () {
                        return this._regionManager.emptyRegions()
                    }, removeRegion: function (e) {
                        return this._regionManager.removeRegion(e)
                    }, getRegion: function (e) {
                        return this._regionManager.get(e)
                    }, getRegions: function () {
                        return this._regionManager.getRegions()
                    }, module: function (e, t) {
                        var n = r.Module.getClass(t), o = i.toArray(arguments);
                        return o.unshift(this), n.create.apply(n, o)
                    }, getRegionManager: function () {
                        return new r.RegionManager
                    }, _initializeRegions: function (e) {
                        var t = i.isFunction(this.regions) ? this.regions(e) : this.regions || {};
                        this._initRegionManager();
                        var n = r.getOption(e, "regions");
                        return i.isFunction(n) && (n = n.call(this, e)), i.extend(t, n), this.addRegions(t), this
                    }, _initRegionManager: function () {
                        this._regionManager = this.getRegionManager(), this._regionManager._parent = this, this.listenTo(this._regionManager, "before:add:region", function () {
                            r._triggerMethod(this, "before:add:region", arguments)
                        }), this.listenTo(this._regionManager, "add:region", function (e, t) {
                            this[e] = t, r._triggerMethod(this, "add:region", arguments)
                        }), this.listenTo(this._regionManager, "before:remove:region", function () {
                            r._triggerMethod(this, "before:remove:region", arguments)
                        }), this.listenTo(this._regionManager, "remove:region", function (e) {
                            delete this[e], r._triggerMethod(this, "remove:region", arguments)
                        })
                    }, _initChannel: function () {
                        this.channelName = i.result(this, "channelName") || "global", this.channel = i.result(this, "channel") || t.Wreqr.radio.channel(this.channelName), this.vent = i.result(this, "vent") || this.channel.vent, this.commands = i.result(this, "commands") || this.channel.commands, this.reqres = i.result(this, "reqres") || this.channel.reqres
                    }
                }), r.Module = function (e, t, n) {
                    this.moduleName = e, this.options = i.extend({}, this.options, n), this.initialize = n.initialize || this.initialize, this.submodules = {}, this._setupInitializersAndFinalizers(), this.app = t, i.isFunction(this.initialize) && this.initialize(e, t, this.options)
                }, r.Module.extend = r.extend, i.extend(r.Module.prototype, t.Events, {
                    startWithParent: !0,
                    initialize: function () {
                    },
                    addInitializer: function (e) {
                        this._initializerCallbacks.add(e)
                    },
                    addFinalizer: function (e) {
                        this._finalizerCallbacks.add(e)
                    },
                    start: function (e) {
                        this._isInitialized || (i.each(this.submodules, function (t) {
                            t.startWithParent && t.start(e)
                        }), this.triggerMethod("before:start", e), this._initializerCallbacks.run(e, this), this._isInitialized = !0, this.triggerMethod("start", e))
                    },
                    stop: function () {
                        this._isInitialized && (this._isInitialized = !1, this.triggerMethod("before:stop"), i.invoke(this.submodules, "stop"), this._finalizerCallbacks.run(void 0, this), this._initializerCallbacks.reset(), this._finalizerCallbacks.reset(), this.triggerMethod("stop"))
                    },
                    addDefinition: function (e, t) {
                        this._runModuleDefinition(e, t)
                    },
                    _runModuleDefinition: function (e, n) {
                        if (e) {
                            var o = i.flatten([this, this.app, t, r, t.$, i, n]);
                            e.apply(this, o)
                        }
                    },
                    _setupInitializersAndFinalizers: function () {
                        this._initializerCallbacks = new r.Callbacks, this._finalizerCallbacks = new r.Callbacks
                    },
                    triggerMethod: r.triggerMethod
                }), i.extend(r.Module, {
                    create: function (e, t, n) {
                        var r = e, o = i.rest(arguments, 3);
                        t = t.split(".");
                        var s = t.length, a = [];
                        return a[s - 1] = n, i.each(t, function (t, i) {
                            var s = r;
                            r = this._getModule(s, t, e, n), this._addModuleDefinition(s, r, a[i], o)
                        }, this), r
                    }, _getModule: function (e, t, n, r) {
                        var o = i.extend({}, r), s = this.getClass(r), a = e[t];
                        return a || (a = new s(t, n, o), e[t] = a, e.submodules[t] = a), a
                    }, getClass: function (e) {
                        var t = r.Module;
                        return e ? e.prototype instanceof t ? e : e.moduleClass || t : t
                    }, _addModuleDefinition: function (e, t, i, n) {
                        var r = this._getDefine(i), o = this._getStartWithParent(i, t);
                        r && t.addDefinition(r, n), this._addStartWithParent(e, t, o)
                    }, _getStartWithParent: function (e, t) {
                        var n;
                        return i.isFunction(e) && e.prototype instanceof r.Module ? (n = t.constructor.prototype.startWithParent, i.isUndefined(n) ? !0 : n) : i.isObject(e) ? (n = e.startWithParent, i.isUndefined(n) ? !0 : n) : !0
                    }, _getDefine: function (e) {
                        return !i.isFunction(e) || e.prototype instanceof r.Module ? i.isObject(e) ? e.define : null : e
                    }, _addStartWithParent: function (e, t, i) {
                        t.startWithParent = t.startWithParent && i, t.startWithParent && !t.startWithParentIsConfigured && (t.startWithParentIsConfigured = !0, e.addInitializer(function (e) {
                            t.startWithParent && t.start(e)
                        }))
                    }
                }), r
            }), CKFinder.define("CKFinder/Config", [], function () {
                "use strict";
                var e = {
                    id: "",
                    configPath: "config.js",
                    language: "",
                    languages: {
                        bg: 1,
                        ca: 1,
                        cs: 1,
                        cy: 1,
                        da: 1,
                        de: 1,
                        el: 1,
                        en: 1,
                        eo: 1,
                        es: 1,
                        "es-mx": 1,
                        et: 1,
                        fa: 1,
                        fi: 1,
                        fr: 1,
                        gu: 1,
                        he: 1,
                        hi: 1,
                        hr: 1,
                        hu: 1,
                        it: 1,
                        ja: 1,
                        ko: 1,
                        lv: 1,
                        lt: 1,
                        nb: 1,
                        nl: 1,
                        no: 1,
                        nn: 1,
                        pl: 1,
                        "pt-br": 1,
                        ro: 1,
                        ru: 1,
                        sk: 1,
                        sl: 1,
                        sr: 1,
                        sv: 1,
                        tr: 1,
                        vi: 1,
                        "zh-cn": 1,
                        "zh-tw": 1
                    },
                    defaultLanguage: "en",
                    removeModules: "",
                    plugins: "",
                    tabIndex: 0,
                    resourceType: null,
                    type: null,
                    startupPath: "",
                    startupFolderExpanded: !0,
                    readOnly: !1,
                    readOnlyExclude: "",
                    connectorPath: "",
                    connectorLanguage: "php",
                    pass: "",
                    connectorInfo: "",
                    dialogMinWidth: "18em",
                    dialogMinHeight: "4em",
                    dialogFocusItem: !0,
                    dialogOverlaySwatch: !1,
                    loaderOverlaySwatch: !1,
                    width: "100%",
                    height: 400,
                    fileIcons: {
                        "default": "unknown.png",
                        folder: "directory.png",
                        "7z": "7z.png",
                        accdb: "ms-access.png",
                        avi: "video.png",
                        bmp: "image.png",
                        css: "css.png",
                        csv: "csv.png",
                        doc: "msword.png",
                        docx: "msword.png",
                        flac: "audio.png",
                        gif: "image.png",
                        gz: "tar.png",
                        htm: "html.png",
                        html: "html.png",
                        jpeg: "image.png",
                        jpg: "image.png",
                        js: "javascript.png",
                        log: "log.png",
                        mp3: "audio.png",
                        mp4: "video.png",
                        odg: "draw.png",
                        odp: "impress.png",
                        ods: "calc.png",
                        odt: "writer.png",
                        ogg: "audio.png",
                        opus: "audio.png",
                        pdf: "pdf.png",
                        php: "php.png",
                        png: "image.png",
                        ppt: "powerpoint.png",
                        pptx: "powerpoint.png",
                        rar: "rar.png",
                        README: "readme.png",
                        rtf: "rtf.png",
                        sql: "sql.png",
                        tar: "tar.png",
                        tiff: "image.png",
                        txt: "plain.png",
                        wav: "audio.png",
                        weba: "audio.png",
                        webm: "video.png",
                        xls: "excel.png",
                        xlsx: "excel.png",
                        zip: "zip.png"
                    },
                    fileIconsPath: "skins/core/file-icons/",
                    fileIconsSizes: "256,128,64,48,32,22,16",
                    defaultDisplayFileName: !0,
                    defaultDisplayDate: !0,
                    defaultDisplayFileSize: !0,
                    thumbnailDelay: 50,
                    thumbnailDefaultSize: 150,
                    thumbnailMinSize: null,
                    thumbnailMaxSize: null,
                    thumbnailSizeStep: 2,
                    thumbnailClasses: {120: "small", 180: "medium"},
                    chooseFiles: !1,
                    chooseFilesOnDblClick: !0,
                    chooseFilesClosePopup: !0,
                    resizeImages: !0,
                    rememberLastFolder: !0,
                    skin: "moono",
                    swatch: "a",
                    displayFoldersPanel: !0,
                    jquery: "libs/jquery.js",
                    jqueryMobile: "libs/jquery.mobile.js",
                    jqueryMobileStructureCSS: "libs/jquery.mobile.structure.css",
                    jqueryMobileIconsCSS: "",
                    iconsCSS: "",
                    themeCSS: "",
                    coreCSS: "skins/core/ckfinder.css",
                    primaryPanelWidth: "",
                    secondaryPanelWidth: "",
                    cors: !1,
                    corsSelect: !1,
                    editImageMode: "",
                    editImageAdjustments: ["brightness", "contrast", "exposure", "saturation", "sepia", "sharpen"],
                    editImagePresets: ["clarity", "herMajesty", "nostalgia", "pinhole", "sunrise", "vintage"],
                    autoCloseHTML5Upload: 5,
                    uiModeThreshold: 48
                };
                return e
            }), CKFinder.define("CKFinder/Event", [], function () {
                "use strict";
                function e() {
                }

                function t(e) {
                    var t = e.getPrivate && e.getPrivate() || e._ev || (e._ev = {});
                    return t.events || (t.events = {})
                }

                function i(e) {
                    this.name = e, this.listeners = []
                }

                function n(e) {
                    var n = t(this);
                    return n[e] || (n[e] = new i(e))
                }

                return i.prototype = {
                    getListenerIndex: function (e) {
                        for (var t = 0, i = this.listeners; t < i.length; t++)if (i[t].fn === e)return t;
                        return -1
                    }
                }, e.prototype = {
                    on: function (e, t, i, r, o) {
                        function s(n, o, s, l) {
                            var d = {
                                name: e,
                                sender: this,
                                finder: n,
                                data: o,
                                listenerData: r,
                                stop: s,
                                cancel: l,
                                removeListener: a
                            }, u = t.call(i, d);
                            return u === !1 ? !1 : d.data
                        }

                        function a() {
                            c.removeListener(e, t)
                        }

                        var l, d, u = n.call(this, e), c = this;
                        if (u.getListenerIndex(t) < 0) {
                            for (l = u.listeners, i || (i = this), isNaN(o) && (o = 10), s.fn = t, s.priority = o, d = l.length - 1; d >= 0; d--)if (l[d].priority <= o)return l.splice(d + 1, 0, s), {removeListener: a};
                            l.unshift(s)
                        }
                        return {removeListener: a}
                    }, once: function () {
                        var e = arguments[1];
                        return arguments[1] = function (t) {
                            return t.removeListener(), e.apply(this, arguments)
                        }, this.on.apply(this, arguments)
                    }, fire: function () {
                        var e = 0, i = function () {
                            e = 1
                        }, n = 0, r = function () {
                            n = 1
                        };
                        return function (o, s, a) {
                            var l, d, u, c, f = t(this)[o], h = e, g = n;
                            if (e = 0, n = 0, f && (u = f.listeners, u.length))for (u = u.slice(0), l = 0; l < u.length; l++) {
                                if (f.errorProof)try {
                                    c = u[l].call(this, a, s, i, r)
                                } catch (p) {
                                } else c = u[l].call(this, a, s, i, r);
                                if (c === !1 ? n = 1 : "undefined" != typeof c && (s = c), e || n)break
                            }
                            return d = n ? !1 : "undefined" == typeof s ? !0 : s, e = h, n = g, d
                        }
                    }(), fireOnce: function (e, i, n) {
                        var r = this.fire(e, i, n);
                        return delete t(this)[e], r
                    }, removeListener: function (e, i) {
                        var n, r = t(this)[e];
                        r && (n = r.getListenerIndex(i), n >= 0 && r.listeners.splice(n, 1))
                    }, removeAllListeners: function () {
                        var e, i = t(this);
                        for (e in i)delete i[e]
                    }, hasListeners: function (e) {
                        var i = t(this)[e];
                        return i && i.listeners.length > 0
                    }
                }, e
            }), CKFinder.define("CKFinder/Util/Util", ["underscore"], function (e) {
                "use strict";
                var t = {
                    url: function (e) {
                        return /^(http(s)?:)?\/\/.+/i.test(e) ? e : CKFinder.require.toUrl(e)
                    }, asyncArrayTraverse: function (e, t, i) {
                        var n, r = 50, o = 10, s = 0;
                        i || (i = null), t = t.bind(i), (n = function () {
                            for (var i, a = 0, l = (new Date).getTime(); ;) {
                                if (i = e.item ? e.item(s) : e[s], !i || t(i, s, e) === !1)return;
                                if (s += 1, a += 1, a >= o && (new Date).getTime() - l > r)return setTimeout(n, r)
                            }
                        }).call()
                    }, isPopup: function () {
                        return window !== window.parent && !!window.opener || window.isCKFinderPopup
                    }, isModal: function () {
                        return window.parent.CKFinder && window.parent.CKFinder.modal && window.parent.CKFinder.modal("visible")
                    }, isWidget: function () {
                        return window !== window.parent && !window.opener
                    }, toGet: function (t) {
                        var i = "";
                        return e.forOwn(t, function (e, n) {
                            i += "&" + encodeURIComponent(n) + "=" + encodeURIComponent(t[n])
                        }), i.substring(1)
                    }, cssEntities: function (e) {
                        return e.replace(/\(/g, "&#92;&#40;").replace(/\)/g, "&#92;&#41;")
                    }, jsCssEntities: function (e) {
                        return e.replace(/\(/g, "%28").replace(/\)/g, "%29")
                    }, getUrlParams: function () {
                        var e = {};
                        return window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (t, i, n) {
                            e[i] = n
                        }), e
                    }, parentFolder: function (e) {
                        return e.split("/").slice(0, -1).join("/")
                    }, isShortcut: function (t, i) {
                        var n = i.split("+"), r = !!t.ctrlKey || !!t.metaKey, o = !!t.altKey, s = !!t.shiftKey, a = r === (e.contains(n, "ctrl") ? !0 : !1), l = o === (e.contains(n, "alt") ? !0 : !1), d = s === (e.contains(n, "shift") ? !0 : !1);
                        return a && l && d
                    }
                };
                return t
            }), CKFinder.define("CKFinder/Util/Lang", ["underscore", "jquery", "ckf_global"], function (e, t, i) {
                "use strict";
                function n(e, t, n, o) {
                    function s(t) {
                        o(e, JSON.parse(t))
                    }

                    function a() {
                        o(e)
                    }

                    e || (e = r.getSupportedLanguage(navigator.userLanguage || navigator.language, n)), n[t] || (t = "en");
                    var l, d = "lang/" + t + ".json";
                    n[e] && (l = "lang/" + e + ".json"), l || (l = d), i.require(["text!" + i.require.toUrl(l) + "?ver=8mhio5"], s, a)
                }

                var r = {
                    loadPluginLang: function (t, n, r, o) {
                        var s, a = r.lang.split(",");
                        if (e.indexOf(a, t) >= 0)s = t; else {
                            if (!(e.indexOf(a, n) >= 0))return void o({});
                            s = n
                        }
                        i.require(["text!" + i.require.toUrl(r.path) + "lang/" + s + ".json"], function (e) {
                            var t;
                            try {
                                t = JSON.parse(e)
                            } catch (i) {
                                t = {}
                            }
                            o(t)
                        }, function () {
                            o({})
                        })
                    }, init: function (i) {
                        var r = new t.Deferred;
                        return n(i.language, i.defaultLanguage, i.languages, function (t, i) {
                            if (!i)return void r.reject();
                            var n = i;
                            n.formatDate = function () {
                                var e = "['" + n.DateAmPm.join("','") + "']", t = n.DateTime.replace(/dd|mm|yyyy|hh|HH|MM|aa|d|m|yy|h|H|M|a/g, function (t) {
                                    var i, n = {
                                        d: "day.replace(/^0/,'')",
                                        dd: "day",
                                        m: "month.replace(/^0/,'')",
                                        mm: "month",
                                        yy: "year.substr(2)",
                                        yyyy: "year",
                                        H: "hour.replace(/^0/,'')",
                                        HH: "hour",
                                        h: "( hour < 12 ? hour : ( ( hour - 12 ) + 100 ).toString().substr( 1 ) ).replace(/^0/,'')",
                                        hh: "( hour < 12 ? hour : ( ( hour - 12 ) + 100 ).toString().substr( 1 ) )",
                                        M: "minute.replace(/^0/,'')",
                                        MM: "minute",
                                        a: e + "[ hour < 12 ? 0 : 1 ].charAt(0)",
                                        aa: e + "[ hour < 12 ? 0 : 1 ]"
                                    };
                                    return i = n[t] ? n[t] : "'" + t + "'", "'," + i + ",'"
                                });
                                return t = "'" + t + "'", t = t.replace(/('',)|,''$/g, ""), new Function("year", "month", "day", "hour", "minute", "return [" + t + '].join("");')
                            }(), n.formatDateString = function (t) {
                                return t = t || "", e.isNumber(t) && (t = t.toString()), t.length < 12 ? "" : n.formatDate(t.substr(0, 4), t.substr(4, 2), t.substr(6, 2), t.substr(8, 2), t.substr(10, 2))
                            }, n.formatFileSize = function (e) {
                                var t = 1024, i = t * t, r = i * t;
                                return e >= r ? n.Gb.replace("%1", (e / r).toFixed(1)) : e >= i ? n.Mb.replace("%1", (e / i).toFixed(1)) : e >= t ? n.Kb.replace("%1", (e / t).toFixed(1)) : "%1 B".replace("%1", e)
                            }, n.formatFilesCount = function (e) {
                                return n[1 === e ? "FilesCountOne" : "FilesCountMany"].replace("%1", e)
                            }, r.resolve(n)
                        }), r.promise()
                    }, getSupportedLanguage: function (e, t) {
                        if (!e)return !1;
                        var i = e.toLowerCase().match(/([a-z]+)(?:-([a-z]+))?/), n = i[1], r = i[2];
                        return t[n + "-" + r] ? n = n + "-" + r : t[n] || (n = !1), n
                    }
                };
                return r
            }), CKFinder.define("CKFinder/UI/UIHacks", ["underscore", "jquery"], function (e, t) {
                "use strict";
                function i() {
                    var i = ["transition"];
                    e.forEach(i, function (e) {
                        r(e) && t("body").addClass("ckf-feature-css-" + e)
                    })
                }

                function n(e) {
                    var i = void 0 === document.documentMode, n = window.chrome;
                    i && !n ? t(window).on("focusin", function (t) {
                        t.target === window && setTimeout(function () {
                            e.fire("ui:focus", null, e)
                        }, s)
                    }).on("focusout", function (t) {
                        t.target === window && e.fire("ui:blur", null, e);
                    }) : window.addEventListener ? (window.addEventListener("focus", function () {
                        setTimeout(function () {
                            e.fire("ui:focus", null, e)
                        }, s)
                    }, !1), window.addEventListener("blur", function () {
                        e.fire("ui:blur", null, e)
                    }, !1)) : (window.attachEvent("focus", function () {
                        setTimeout(function () {
                            e.fire("ui:focus", null, e)
                        }, s)
                    }), window.attachEvent("blur", function () {
                        e.fire("ui:blur", null, e)
                    }))
                }

                function r(e) {
                    var t = document.body || document.documentElement, i = t.style;
                    if ("string" == typeof i[e])return !0;
                    var n = ["Moz", "webkit", "Webkit", "Khtml", "O", "ms"];
                    e = e.charAt(0).toUpperCase() + e.substr(1);
                    for (var r = 0; r < n.length; r++)if ("string" == typeof i[n[r] + e])return !0;
                    return !1
                }

                function o(e, t, i) {
                    t && e.removeClass("ckf-ui-mode-" + t), e.addClass("ckf-ui-mode-" + i)
                }

                var s = 300;
                return {
                    init: function (e) {
                        i(), n(e);
                        var r = t("body");
                        r.attr("data-theme", e.config.swatch), navigator.userAgent.toLowerCase().indexOf("trident/") > -1 && r.addClass("ckf-ie"), "ltr" !== e.lang.dir && (r.addClass("ckf-rtl"), r.attr("dir", "rtl")), e.setHandler("ui:getMode", function () {
                            var i, n, r = window.matchMedia ? function () {
                                return void 0 === n && (n = "(max-width: " + e.config.uiModeThreshold + "em)"), window.matchMedia(n).matches
                            } : function () {
                                return void 0 === i && (i = parseFloat(t("body").css("font-size")) * e.config.uiModeThreshold), window.innerWidth <= i
                            };
                            return function () {
                                return r.call(this) ? "mobile" : "desktop"
                            }
                        }());
                        var s = e.request("ui:getMode");
                        o(r, null, s), t(window).bind("throttledresize", function () {
                            var t = e.request("ui:getMode"), i = s !== t;
                            i && (o(r, s, t), s = t), e.fire("ui:resize", {modeChanged: i, mode: s}, e)
                        });
                        var a = t.event.special.swipe.start;
                        t.event.special.swipe.start = function (e) {
                            var t = a(e);
                            return t.ckfOrigin = e.originalEvent.type, t
                        }, t(window).bind("swipeleft", function (t) {
                            0 !== t.swipestart.ckfOrigin.indexOf("mouse") && e.fire("ui:swipeleft", {evt: t}, e)
                        }), t(window).bind("swiperight", function (t) {
                            0 !== t.swipestart.ckfOrigin.indexOf("mouse") && e.fire("ui:swiperight", {evt: t}, e)
                        }), e.setHandler("closePopup", function () {
                            e.util.isPopup() ? window.close() : window.top && window.top.CKFinder && window.top.CKFinder.modal && window.top.CKFinder.modal("close")
                        }), t(document).on("selectstart", "[draggable]", function (e) {
                            e.preventDefault(), e.dragDrop && e.dragDrop()
                        })
                    }
                }
            }), CKFinder.define("CKFinder/Plugins/Plugin", ["underscore", "jquery", "backbone"], function (e, t, i) {
                "use strict";
                function n() {
                }

                return n.extend = i.Model.extend, e.extend(n.prototype, {
                    addCss: function (e) {
                        t("<style>").text(e).appendTo("head")
                    }, init: function () {
                    }
                }), n
            }), CKFinder.define("CKFinder/Plugins/Plugins", ["underscore", "jquery", "backbone", "CKFinder/Plugins/Plugin", "CKFinder/Util/Lang"], function (e, t, i, n, r) {
                "use strict";
                function o(e, t, i) {
                    function n() {
                        t.init(e), e._plugins.add(t), i.loaded = !0, e.fire("plugin:ready", {plugin: t}, e)
                    }

                    return t.path = e.util.parentFolder(i.url) + "/", t.lang ? void r.loadPluginLang(e.lang.LangCode, e.config.defaultLanguage, t, function (t) {
                        t.name && t.values && (e.lang[t.name] = t.values), n()
                    }) : void n()
                }

                var s = i.Collection.extend({
                    load: function (t) {
                        function i() {
                            var i = e.countBy(r, "loaded");
                            i.undefined || (t.fire("plugin:allReady", null, t), i["false"] && e.forEach(e.where(r, {loaded: !1}), function (e) {
                                t.fire("plugin:loadError", {configKey: e.config, url: e.url})
                            }))
                        }

                        var r = [], s = t.config.plugins;
                        return s.length < 1 ? void t.fire("plugin:allReady", null, t) : (e.isString(s) && (s = s.split(",")), e.forEach(s, function (e) {
                            var t = e;
                            -1 === e.search("/") && (t = CKFinder.require.toUrl("plugins/" + e + "/" + e + ".js")), r.push({
                                config: e,
                                url: t,
                                loaded: void 0
                            })
                        }), t.on("plugin:ready", function () {
                            i()
                        }), void e.forEach(r, function (e) {
                            CKFinder.require([e.url], function (i) {
                                var r = n.extend(i);
                                o(t, new r, e)
                            }, function () {
                                e.loaded = !1, i()
                            })
                        }))
                    }
                });
                return s
            }), CKFinder.define("CKFinder/Modules/Connector/Transport", ["jquery", "underscore"], function (e, t) {
                "use strict";
                function i(e, t) {
                    this.url = e, this.config = t, this.onDone = o, this.onFail = o, this.request = null
                }

                function n(t) {
                    var i, n;
                    i = new XDomainRequest, n = null, "post" === t.config.type && (n = e.param(t.config.post)), i.open(t.config.type, t.url), i.onload = function () {
                        t.onDone(this.responseText)
                    }, i.onprogress = o, i.ontimeout = o, i.onerror = function () {
                        t.onFail()
                    }, t.request = i, setTimeout(function () {
                        i.send(n)
                    }, 0)
                }

                function r(i) {
                    var n, r;
                    n = new XMLHttpRequest, r = null, n.open(i.config.type, i.url, !0), n.onreadystatechange = function () {
                        4 === this.readyState && i.onDone(this.responseText)
                    }, n.onerror = function () {
                        i.onFail()
                    }, t.isFunction(i.config.uploadProgress && n.upload) && (n.upload.onprogress = i.config.uploadProgress), t.isFunction(i.config.uploadEnd && n.upload) && (n.upload.onload = i.config.uploadEnd), "post" === i.config.type && (r = e.param(t.extend(i.config.post)), n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")), n.send(r), i.request = n
                }

                var o = function () {
                };
                return i.prototype.done = function (e) {
                    this.onDone = e
                }, i.prototype.fail = function (e) {
                    this.onFail = e
                }, i.prototype.send = function () {
                    window.XMLHttpRequest ? r(this) : n(this)
                }, i.prototype.abort = function () {
                    this.request && this.request.abort()
                }, i
            }), CKFinder.define("CKFinder/Modules/Connector/Connector", ["underscore", "jquery", "ckf_global", "CKFinder/Modules/Connector/Transport"], function (e, t, i, n) {
                "use strict";
                function r(e) {
                    var t = e.config, n = t.connectorLanguage;
                    this.finder = e, this.config = t, this.baseUrl = i.require.toUrl(t.connectorPath ? t.connectorPath : "./core/connector/" + n + "/connector." + n), e.setHandlers({
                        "command:send": {
                            callback: s,
                            context: this
                        }, "command:url": {
                            callback: function (e) {
                                return o.call(this, e.command, e.params, e.folder)
                            }, context: this
                        }
                    })
                }

                function o(t, i, n) {
                    var r = this.finder, o = r.config, s = {command: t, lang: r.lang.LangCode}, a = o.connectorInfo;
                    if (n && (s.type = n.get("resourceType"), s.currentFolder = n.getPath(), s.hash = n.getHash()), o.pass.length) {
                        var l = o.pass.split(",");
                        e.forEach(l, function (e) {
                            s[e] = r.config[e]
                        })
                    }
                    o.id && (s.id = o.id);
                    var d = this.baseUrl + "?" + r.util.toGet(e.extend(s, i));
                    return a.length > 0 && (d += "&" + a), d
                }

                function s(i) {
                    var r = this.finder, s = i.name, l = t.Deferred(), d = {name: s, response: {error: {number: 109}}};
                    if (e.has(i, "context") && (d.context = i.context), r.fire("command:before", i, r) && r.fire("command:before:" + s, i, r)) {
                        var u = e.extend({type: "get", post: {}}, i), c = {};
                        c.type = u.type, "post" === u.type && (c.post = u.post), u.uploadProgress && (c.uploadProgress = u.uploadProgress), u.uploadEnd && (c.uploadEnd = u.uploadEnd);
                        var f = o.call(this, s, i.params, i.folder), h = new n(f, c);
                        return h.done(function (t) {
                            var n, o, u = !1;
                            try {
                                o = JSON.parse(t), n = {name: s, response: o}, u = !0
                            } catch (c) {
                                var f = d;
                                return f.response.error.message = t, a(s, f, r), void l.reject(f)
                            }
                            u && l.resolve(o), e.has(i, "context") && (n.context = i.context), !o || o.error ? r.fire("command:error:" + s, n, r) && (i.context && i.context.silentConnectorErrors || r.fire("command:error", n, r)) : r.fire("command:ok:" + s, n, r), r.fire("command:after", n, r), r.fire("command:after:" + s, n, r)
                        }), h.fail(function () {
                            a(s, d, r), l.reject(d)
                        }), h.send(), i.returnTransport ? h : l.promise()
                    }
                }

                function a(e, t, i) {
                    i.fire("command:error:" + e, t, i) && i.fire("command:error", t, i), i.fire("command:after", t, i), i.fire("command:after:" + e, t, i)
                }

                return r
            }), CKFinder.define("CKFinder/Views/Base/Common", ["underscore", "doT", "marionette"], function (e, t, i) {
                "use strict";
                var n = {
                    proto: {
                        getTemplate: function () {
                            var n = this, r = i.getOption(n, "template"), o = i.getOption(n, "imports");
                            e.isFunction(o) && (o = o.call(this));
                            var s = {imports: o, name: n.name, template: r};
                            return n.finder.fire("template", s, n.finder), n.finder.fire("template:" + n.name, s, n.finder), t.template(s.template, null, s.imports)
                        }, mixinTemplateHelpers: function (t) {
                            t = t || {};
                            var n = this.getOption("templateHelpers");
                            return n = i._getValue(n, this), e.extend(t, {
                                lang: this.finder.lang,
                                config: this.finder.config
                            }, n)
                        }
                    }, util: {
                        construct: function (e) {
                            if (!this.name) {
                                if (!e.name)throw"name parameter must be specified";
                                this.name = e.name
                            }
                            if (!this.finder) {
                                if (!e.finder)throw"Finder parameter must be specified for view: " + this.name;
                                this.finder = e.finder
                            }
                            this.finder.fire("view:" + this.name, {view: this}, this.finder)
                        }
                    }
                };
                return n
            }), CKFinder.define("CKFinder/Views/Base/CompositeView", ["underscore", "marionette", "CKFinder/Views/Base/Common"], function (e, t, i) {
                "use strict";
                var n = t.CompositeView, r = n.extend(i.proto), o = r.extend({
                    constructor: function (e) {
                        i.util.construct.call(this, e), n.prototype.constructor.apply(this, Array.prototype.slice.call(arguments))
                    }, buildChildView: function (t, i, n) {
                        var r = e.extend({model: t, finder: this.finder}, n);
                        return new i(r)
                    }, attachBuffer: function (e, t) {
                        var i = this.getChildViewContainer(e);
                        i.append(t), this.triggerMethod("attachBuffer")
                    }
                });
                return o
            }), CKFinder.define("CKFinder/Views/Base/ItemView", ["marionette", "CKFinder/Views/Base/Common"], function (e, t) {
                "use strict";
                var i = e.ItemView, n = i.extend(t.proto), r = n.extend({
                    constructor: function (e) {
                        t.util.construct.call(this, e), i.prototype.constructor.apply(this, Array.prototype.slice.call(arguments))
                    }
                });
                return r
            }), CKFinder.define("text", ["module"], function (e) {
                "use strict";
                var t, i, n, r, o, s = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0"], a = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im, l = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im, d = "undefined" != typeof location && location.href, u = d && location.protocol && location.protocol.replace(/\:/, ""), c = d && location.hostname, f = d && (location.port || void 0), h = {}, g = e.config && e.config() || {};
                return t = {
                    version: "2.0.14", strip: function (e) {
                        if (e) {
                            e = e.replace(a, "");
                            var t = e.match(l);
                            t && (e = t[1])
                        } else e = "";
                        return e
                    }, jsEscape: function (e) {
                        return e.replace(/(['\\])/g, "\\$1").replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").replace(/[\t]/g, "\\t").replace(/[\r]/g, "\\r").replace(/[\u2028]/g, "\\u2028").replace(/[\u2029]/g, "\\u2029")
                    }, createXhr: g.createXhr || function () {
                        var e, t, i;
                        if ("undefined" != typeof XMLHttpRequest)return new XMLHttpRequest;
                        if ("undefined" != typeof ActiveXObject)for (t = 0; 3 > t; t += 1) {
                            i = s[t];
                            try {
                                e = new ActiveXObject(i)
                            } catch (n) {
                            }
                            if (e) {
                                s = [i];
                                break
                            }
                        }
                        return e
                    }, parseName: function (e) {
                        var t, i, n, r = !1, o = e.lastIndexOf("."), s = 0 === e.indexOf("./") || 0 === e.indexOf("../");
                        return -1 !== o && (!s || o > 1) ? (t = e.substring(0, o), i = e.substring(o + 1)) : t = e, n = i || t, o = n.indexOf("!"), -1 !== o && (r = "strip" === n.substring(o + 1), n = n.substring(0, o), i ? i = n : t = n), {
                            moduleName: t,
                            ext: i,
                            strip: r
                        }
                    }, xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/, useXhr: function (e, i, n, r) {
                        var o, s, a, l = t.xdRegExp.exec(e);
                        return l ? (o = l[2], s = l[3], s = s.split(":"), a = s[1], s = s[0], !(o && o !== i || s && s.toLowerCase() !== n.toLowerCase() || (a || s) && a !== r)) : !0
                    }, finishLoad: function (e, i, n, r) {
                        n = i ? t.strip(n) : n, g.isBuild && (h[e] = n), r(n)
                    }, load: function (e, i, n, r) {
                        if (r && r.isBuild && !r.inlineText)return void n();
                        g.isBuild = r && r.isBuild;
                        var o = t.parseName(e), s = o.moduleName + (o.ext ? "." + o.ext : ""), a = i.toUrl(s), l = g.useXhr || t.useXhr;
                        return 0 === a.indexOf("empty:") ? void n() : void(!d || l(a, u, c, f) ? t.get(a, function (i) {
                            t.finishLoad(e, o.strip, i, n)
                        }, function (e) {
                            n.error && n.error(e)
                        }) : i([s], function (e) {
                            t.finishLoad(o.moduleName + "." + o.ext, o.strip, e, n)
                        }))
                    }, write: function (e, i, n) {
                        if (h.hasOwnProperty(i)) {
                            var r = t.jsEscape(h[i]);
                            n.asModule(e + "!" + i, "define(function () { return '" + r + "';});\n")
                        }
                    }, writeFile: function (e, i, n, r, o) {
                        var s = t.parseName(i), a = s.ext ? "." + s.ext : "", l = s.moduleName + a, d = n.toUrl(s.moduleName + a) + ".js";
                        t.load(l, n, function () {
                            var i = function (e) {
                                return r(d, e)
                            };
                            i.asModule = function (e, t) {
                                return r.asModule(e, d, t)
                            }, t.write(e, l, i, o)
                        }, o)
                    }
                }, "node" === g.env || !g.env && "undefined" != typeof process && process.versions && process.versions.node && !process.versions["node-webkit"] && !process.versions["atom-shell"] ? (i = require.nodeRequire("fs"), t.get = function (e, t, n) {
                    try {
                        var r = i.readFileSync(e, "utf8");
                        "\ufeff" === r[0] && (r = r.substring(1)), t(r)
                    } catch (o) {
                        n && n(o)
                    }
                }) : "xhr" === g.env || !g.env && t.createXhr() ? t.get = function (e, i, n, r) {
                    var o, s = t.createXhr();
                    if (s.open("GET", e, !0), r)for (o in r)r.hasOwnProperty(o) && s.setRequestHeader(o.toLowerCase(), r[o]);
                    g.onXhr && g.onXhr(s, e), s.onreadystatechange = function () {
                        var t, r;
                        4 === s.readyState && (t = s.status || 0, t > 399 && 600 > t ? (r = new Error(e + " HTTP status: " + t), r.xhr = s, n && n(r)) : i(s.responseText), g.onXhrComplete && g.onXhrComplete(s, e))
                    }, s.send(null)
                } : "rhino" === g.env || !g.env && "undefined" != typeof Packages && "undefined" != typeof java ? t.get = function (e, t) {
                    var i, n, r = "utf-8", o = new java.io.File(e), s = java.lang.System.getProperty("line.separator"), a = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(o), r)), l = "";
                    try {
                        for (i = new java.lang.StringBuffer, n = a.readLine(), n && n.length() && 65279 === n.charAt(0) && (n = n.substring(1)), null !== n && i.append(n); null !== (n = a.readLine());)i.append(s), i.append(n);
                        l = String(i.toString())
                    } finally {
                        a.close()
                    }
                    t(l)
                } : ("xpconnect" === g.env || !g.env && "undefined" != typeof Components && Components.classes && Components.interfaces) && (n = Components.classes, r = Components.interfaces, Components.utils["import"]("resource://gre/modules/FileUtils.jsm"), o = "@mozilla.org/windows-registry-key;1" in n, t.get = function (e, t) {
                    var i, s, a, l = {};
                    o && (e = e.replace(/\//g, "\\")), a = new FileUtils.File(e);
                    try {
                        i = n["@mozilla.org/network/file-input-stream;1"].createInstance(r.nsIFileInputStream), i.init(a, 1, 0, !1), s = n["@mozilla.org/intl/converter-input-stream;1"].createInstance(r.nsIConverterInputStream), s.init(i, "utf-8", i.available(), r.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER), s.readString(i.available(), l), s.close(), i.close(), t(l.value)
                    } catch (d) {
                        throw new Error((a && a.path || "") + ": " + d)
                    }
                }), t
            }), CKFinder.define("text!CKFinder/Templates/ContextMenu/ContextMenuItem.dot", [], function () {
                return '{{? it.divider }}{{??}}\n	<a tabindex="-1" class="ui-btn {{? !it.isActive }}ui-state-disabled {{?}}{{? it.icon }}ui-btn-icon-left ui-icon-{{= it.icon }}{{?}}" data-ckf-name="{{= it.name }}">\n		{{= it.label }}\n	</a>\n{{?}}\n'
            }), CKFinder.define("CKFinder/Util/KeyCode", {
                up: 38,
                down: 40,
                left: 37,
                right: 39,
                tab: 9,
                enter: 13,
                space: 32,
                escape: 27,
                end: 35,
                home: 36,
                "delete": 46,
                menu: 93,
                a: 65,
                r: 82,
                u: 85,
                f2: 113,
                f5: 116,
                f7: 118,
                f8: 119,
                f9: 120,
                f10: 121
            }), CKFinder.define("CKFinder/Modules/ContextMenu/Views/ContextMenuView", ["underscore", "jquery", "CKFinder/Views/Base/CompositeView", "CKFinder/Views/Base/ItemView", "text!CKFinder/Templates/ContextMenu/ContextMenuItem.dot", "CKFinder/Util/KeyCode"], function (e, t, i, n, r, o) {
                "use strict";
                function s(e, t) {
                    var i = e.x, n = e.y, r = t.height(), o = t.width();
                    return {
                        x: parseInt(i + (window.innerWidth < i + o ? -1 : 1) * o / 2, 10),
                        y: parseInt(n + (window.innerHeight < n + r ? -1 : 1) * r / 2 + document.body.scrollTop, 10)
                    }
                }

                var a = i.extend({
                    name: "ContextMenu",
                    template: "<ul></ul>",
                    childViewContainer: "ul",
                    emptyView: n.extend({name: "ContextMenuEmpty", template: '<div class="ckf-message"></div>'}),
                    initialize: function (i) {
                        function n(t) {
                            var n = t.model.get("action");
                            e.isFunction(n) && n(i.forView), a.destroy()
                        }

                        function r(e) {
                            !a || a.$el.find(e.target).length || a.isDestroyed || a.destroy()
                        }

                        var a = this, l = t(document), d = "mousedown contextmenu", u = i.position, c = i.positionToEl;
                        if (!u && c) {
                            var f = c.get(0).getBoundingClientRect();
                            u = {x: f.left + c.width() / 2, y: f.top + c.height() / 2}
                        }
                        a.$el.attr("data-theme", a.finder.config.swatch), a.on("destroy", function () {
                            l.off(d, r), a.$el.length && a.$el.remove()
                        }), a.on("render", function () {
                            a.$el.find("ul").listview(), t(".ui-popup-container").remove(), a.$el.popup().popup("open"), a.$el.find(".ui-btn:first").focus(), u && u.x && u.y && a.$el.popup("reposition", s(u, a.$el)), setTimeout(function () {
                                l.one(d, r)
                            }, 0)
                        }), a.on("childview:itemclicked", function (e) {
                            n(e)
                        }), a.on("childview:itemkeydown", function (t, i) {
                            var r, s, l, d;
                            r = i.evt, r.keyCode === o.up && (r.stopPropagation(), r.preventDefault(), s = a.$el.find("a"), l = e.indexOf(s, t.$el.find("a")[0]), d = l - 1, s[d >= 0 ? d : 0].focus()), r.keyCode === o.down && (r.stopPropagation(), r.preventDefault(), s = a.$el.find("a"), l = e.indexOf(s, t.$el.find("a")[0]), d = l + 1, s[d < s.length - 1 ? d : s.length - 1].focus()), (r.keyCode === o.enter || r.keyCode === o.space) && (r.stopPropagation(), r.preventDefault(), n(t)), r.keyCode === o.escape && (r.stopPropagation(), r.preventDefault(), a.destroy())
                        })
                    },
                    getChildView: function (e) {
                        var t = {}, i = {
                            contextmenu: function (e) {
                                e.preventDefault(), e.stopPropagation()
                            }
                        };
                        e.get("divider") || (t["click a"] = {
                            event: "itemclicked",
                            preventDefault: !0
                        }, i["keydown a"] = function (e) {
                            e.stopPropagation(), this.trigger("itemkeydown", {evt: e, view: this, model: this.model})
                        });
                        var o = {
                            name: "ContextMenuItem",
                            finder: this.finder,
                            template: r,
                            triggers: t,
                            events: i,
                            tagName: "li",
                            modelEvents: {"change:active": "render"}
                        };
                        return e.get("divider") && (o.attributes = {"data-role": "list-divider"}), n.extend(o)
                    }
                });
                return a
            }), CKFinder.define("CKFinder/Modules/ContextMenu/Models/ContextMenuGroups", ["backbone"], function (e) {
                "use strict";
                function t() {
                    this.groups = {"default": new e.Collection}
                }

                function i(t) {
                    var i = this.groups[t];
                    return i || (this.groups[t] = new e.Collection, i = this.groups[t]), i
                }

                return t.prototype.addGroup = function (e, t) {
                    var n = i.call(this, e);
                    n.add(t)
                }, t
            }), CKFinder.define("CKFinder/Modules/ContextMenu/ContextMenu", ["underscore", "backbone", "CKFinder/Modules/ContextMenu/Views/ContextMenuView", "CKFinder/Modules/ContextMenu/Models/ContextMenuGroups"], function (e, t, i, n) {
                "use strict";
                function r(e) {
                    function t() {
                        i.lastView && i.lastView.destroy()
                    }

                    this.finder = e, e.setHandler("contextMenu", o, this);
                    var i = this;
                    e.on("ui:blur", t), e.on("ui:resize", t)
                }

                function o(r) {
                    var o = this, s = o.finder, a = new n, l = {groups: a, context: r.context};
                    if (s.fire("contextMenu", l, s) && s.fire("contextMenu:" + r.name, l, s)) {
                        var d = new t.Collection;
                        e.forEach(a.groups, function (e) {
                            e.models.length && (d.length && d.add({divider: !0}), d.add(e.models))
                        }), o.lastView && o.lastView.destroy();
                        var u = r.evt && r.evt.clientX ? {
                            x: r.evt.clientX,
                            y: r.evt.clientY
                        } : !1, c = r.positionToEl ? r.positionToEl : null;
                        s.request("focus:remember"), o.lastView = new i({
                            finder: s,
                            className: "ckf-contextmenu",
                            collection: d,
                            position: u,
                            positionToEl: c,
                            forView: r.view
                        }), o.lastView.on("destroy", function () {
                            s.request("focus:restore")
                        }), o.lastView.render()
                    }
                }

                return r
            }), CKFinder.define("CKFinder/Models/FoldersCollection", ["backbone", "CKFinder/Models/Folder"], function (e, t) {
                "use strict";
                var i = e.Collection.extend({
                    model: t, initialize: function () {
                        this.on("change:name", this.sort)
                    }, comparator: function (e, t) {
                        return e.get("name").localeCompare(t.get("name"))
                    }
                });
                return i
            }), CKFinder.define("CKFinder/Models/Folder", ["backbone", "CKFinder/Models/FoldersCollection"], function (e, t) {
                "use strict";
                var i;
                return i = e.Model.extend({
                    defaults: {
                        name: "",
                        hasChildren: !1,
                        resourceType: "",
                        isRoot: !1,
                        parent: null,
                        isPending: !1,
                        "view:isFolder": !0
                    }, initialize: function () {
                        function e() {
                            o.set("hasChildren", !!o.get("children").length)
                        }

                        this.set("name", this.get("name").toString(), {silent: !0}), this.set("children", new t, {silent: !0});
                        var i = this.get("children");
                        i.on("change", e), i.on("remove", e), this.on("change:children", function (t, i) {
                            i && (i.on("change", e), i.on("remove", e))
                        });
                        var n = this.get("allowedExtensions");
                        n && "string" == typeof n && this.set("allowedExtensions", n.split(","), {silent: !0});
                        var r = this.get("allowedExtensions");
                        r && "string" == typeof r && this.set("allowedExtensions", n.split(","), {silent: !0});
                        var o = this
                    }, getPath: function (e) {
                        var t, i;
                        return t = this.get("parent"), i = t ? t.getPath(e).toString() + this.get("name") + "/" : "/", this.get("isRoot") && e && e.full && (i = this.get("resourceType") + ":" + i), i
                    }, getHash: function () {
                        if (this.has("hash"))return this.get("hash");
                        var e = this.get("parent");
                        return e.getHash()
                    }, getUrl: function () {
                        if (this.has("url"))return this.get("url");
                        var e = this.get("parent");
                        if (!e)return !1;
                        var t = e.getUrl();
                        return t && t + "/" + this.get("name")
                    }, isPath: function (e, t) {
                        return e === this.getPath() && t === this.get("resourceType")
                    }, getResourceType: function () {
                        for (var e = this; !e.get("isRoot");)e = e.get("parent");
                        return e
                    }
                }, {
                    isValidName: function (e) {
                        var t = /[\\\/:\*\?"<>\|]/;
                        return !t.test(e)
                    }
                })
            }), CKFinder.define("text!CKFinder/Templates/Folders/FolderNameDialogTemplate.dot", [], function () {
                return '<form action="#">\n	{{! it.dialogMessage }}\n	<input name="newFolderName" value="{{! it.folderName }}" tabindex="1">\n</form>\n<p class="error-message"></p>\n'
            }), CKFinder.define("CKFinder/Modules/Folders/Views/FolderNameDialogView", ["CKFinder/Views/Base/ItemView", "CKFinder/Models/Folder", "text!CKFinder/Templates/Folders/FolderNameDialogTemplate.dot"], function (e, t, i) {
                "use strict";
                return e.extend({
                    name: "FolderNameDialogView",
                    template: i,
                    ui: {error: ".error-message", folderName: 'input[name="newFolderName"]'},
                    events: {
                        "input @ui.folderName": function () {
                            var e = this.ui.folderName.val().toString();
                            t.isValidName(e) ? this.model.unset("error") : this.model.set("error", this.finder.lang.ErrorMsg.FolderInvChar), this.model.set("folderName", e)
                        }, submit: function (e) {
                            this.trigger("submit:form"), e.preventDefault()
                        }
                    },
                    modelEvents: {
                        "change:error": function (e, t) {
                            t ? (this.ui.error.show(), this.ui.error.html(t)) : this.ui.error.hide()
                        }
                    }
                })
            }), CKFinder.define("CKFinder/Modules/CreateFolder/CreateFolder", ["backbone", "CKFinder/Modules/Folders/Views/FolderNameDialogView"], function (e, t) {
                "use strict";
                function i(i) {
                    i.setHandler("folder:create", function (n) {
                        var r = n.parent, o = n.newFolderName;
                        if (o)i.request("command:send", {
                            name: "CreateFolder",
                            type: "post",
                            folder: r,
                            params: {newFolderName: o},
                            context: {folder: r}
                        }); else {
                            var s = new e.Model({
                                dialogMessage: i.lang.FolderNew,
                                folderName: n.newFolderName,
                                error: !1
                            }), a = i.request("dialog", {
                                view: new t({finder: i, model: s}),
                                name: "CreateFolder",
                                title: i.lang.NewNameDlgTitle,
                                context: {parent: r}
                            });
                            s.on("change:error", function (e, t) {
                                t ? a.disableButton("ok") : a.enableButton("ok")
                            })
                        }
                    }), i.on("dialog:CreateFolder:ok", function (e) {
                        var t = e.data.view.model;
                        if (!t.get("error")) {
                            var n = t.get("folderName");
                            e.finder.request("dialog:destroy"), i.request("folder:create", {
                                parent: e.data.context.parent,
                                newFolderName: n
                            })
                        }
                    }), i.on("contextMenu:folder", function (e) {
                        var t = e.finder, i = e.data.context.folder;
                        e.data.groups.addGroup("edit", [{
                            name: "CreateFolder",
                            label: t.lang.NewSubFolder,
                            isActive: i.get("acl").folderCreate,
                            icon: "ckf-folder-add",
                            action: function () {
                                t.request("folder:create", {parent: i})
                            }
                        }])
                    }), i.on("toolbar:reset:Main:folder", function (e) {
                        var t = e.data.folder;
                        t.get("acl").folderCreate && e.data.toolbar.push({
                            type: "button",
                            name: "CreateFolder",
                            priority: 70,
                            icon: "ckf-folder-add",
                            label: e.finder.lang.NewSubFolder,
                            action: function () {
                                i.request("folder:create", {parent: t})
                            }
                        })
                    }), i.on("command:after:CreateFolder", n)
                }

                function n(e) {
                    function t(e) {
                        e.data.context.parent.cid === i.cid && (e.data.response.error || i.trigger("ui:expand"), e.finder.removeListener("command:after:GetFolders", t))
                    }

                    var i = e.data.context.folder;
                    e.data.response.error || (i.set("hasChildren", !0), e.finder.once("command:after:GetFolders", t), e.finder.request("command:send", {
                        name: "GetFolders",
                        folder: i,
                        context: {parent: i}
                    }, null, null, 30))
                }

                return i
            }), CKFinder.define("text!CKFinder/Templates/DeleteFile/DeleteFileError.dot", [], function () {
                return "{{? it.msg }}<p>{{= it.msg }}</p>{{?}}\n<ul>\n{{~ it.errors :error }}<li>{{= error }}</li>{{~}}\n</ul>\n"
            }), CKFinder.define("CKFinder/Modules/DeleteFile/DeleteFile", ["underscore", "backbone", "text!CKFinder/Templates/DeleteFile/DeleteFileError.dot", "CKFinder/Util/KeyCode"], function (e, t, i, n) {
                "use strict";
                function r(e) {
                    this.finder = e, e.setHandler("files:delete", o, this), e.on("dialog:DeleteFileConfirm:ok", l), e.on("command:after:DeleteFiles", d), e.on("command:error:DeleteFiles", u), e.on("contextMenu:file", a, this, null, 80), e.on("toolbar:reset:Main:file", function (t) {
                        s(t, e.lang.Delete)
                    }), e.on("toolbar:reset:Main:files", function (t) {
                        s(t, e.lang.DeleteFiles)
                    }), e.on("file:keydown", function (t) {
                        if (t.data.evt.keyCode === n["delete"] && e.util.isShortcut(t.data.evt, "")) {
                            var i = e.request("files:getSelected");
                            e.request("files:delete", {files: i.length > 1 ? i : [t.data.file]})
                        }
                    })
                }

                function o(e) {
                    var t, i = this.finder, n = e.files;
                    t = n.length > 1 ? i.lang.FilesDelete.replace("%1", n.length) : i.lang.FileDelete.replace("%1", n[0].get("name")), i.request("dialog:confirm", {
                        name: "DeleteFileConfirm",
                        msg: t,
                        context: {files: n}
                    })
                }

                function s(e, t) {
                    var i = e.finder.request("folder:getActive");
                    i.get("acl").fileDelete && e.data.toolbar.push({
                        type: "button",
                        name: "DeleteFiles",
                        priority: 10,
                        icon: "ckf-file-delete",
                        label: t,
                        action: function () {
                            e.finder.request("files:delete", {files: e.finder.request("files:getSelected").toArray()})
                        }
                    })
                }

                function a(e) {
                    var t = this, i = t.finder, n = i.request("files:getSelected"), r = n.length > 1;
                    e.data.groups.addGroup("delete", [{
                        name: "DeleteFiles",
                        label: r ? i.lang.DeleteFiles : i.lang.Delete,
                        isActive: e.data.context.file.get("folder").get("acl").fileDelete,
                        icon: "ckf-file-delete",
                        action: function () {
                            i.request("files:delete", {files: r ? n : [e.data.context.file]})
                        }
                    }])
                }

                function l(i) {
                    var n = i.data.context.files, r = [], o = i.finder;
                    n instanceof t.Collection && (n = n.toArray()), e.forEach(n, function (e) {
                        var t = e.get("folder");
                        r.push({name: e.get("name"), type: t.get("resourceType"), folder: t.getPath()})
                    });
                    var s = o.request("folder:getActive");
                    o.request("command:send", {
                        name: "DeleteFiles",
                        type: "post",
                        post: {files: r},
                        folder: s,
                        context: {files: n}
                    })
                }

                function d(t) {
                    var i = t.data.response;
                    t.cancel(), i.error || (e.forEach(t.data.context.files, function (e) {
                        var t = e.get("folder");
                        t.get("children").remove(e)
                    }), t.finder.fire("files:deleted", {files: t.data.context.files}, t.finder))
                }

                function u(n) {
                    var r = n.data.response;
                    if (r.error.number === c) {
                        n.cancel();
                        var o = !!r.deleted, s = n.finder.lang.Errors[c], a = [];
                        e.forEach(r.error.errors, function (e) {
                            a.push(e.name + ": " + n.finder.lang.Errors[e.number]), 117 === e.number && (o = !0)
                        }), n.finder.request("dialog", {
                            name: "DeleteFilesErrors",
                            title: n.finder.lang.OperationCompletedErrors,
                            template: i,
                            templateModel: new t.Model({deleted: r.deleted, errors: a, msg: s}),
                            buttons: ["okClose"]
                        }), o && n.finder.request("folder:refreshFiles")
                    }
                }

                var c = 302;
                return r
            }), CKFinder.define("CKFinder/Modules/DeleteFolder/DeleteFolder", [], function () {
                "use strict";
                function e(e) {
                    e.on("dialog:DeleteFolderConfirm:ok", function (t) {
                        var i = t.data.context.folder;
                        e.request("command:send", {
                            name: "DeleteFolder",
                            type: "post",
                            folder: i,
                            context: {folder: i}
                        }, e)
                    }), e.on("command:after:DeleteFolder", function (t) {
                        var i = t.data.response, n = t.data.context.folder;
                        if (!i.error) {
                            var r = n.get("parent");
                            n.unset("parent"), r.get("children").remove(n);
                            var o = e.request("folder:getActive");
                            o.cid === n.cid && e.request("folder:select", {folder: r}), e.fire("folder:deleted", {folder: n})
                        }
                    }), e.on("toolbar:reset:Main:folder", function (t) {
                        var i = t.data.folder;
                        !i.get("isRoot") && i.get("acl").folderDelete && t.data.toolbar.push({
                            type: "button",
                            name: "DeleteFolder",
                            priority: 20,
                            icon: "ckf-folder-delete",
                            label: t.finder.lang.Delete,
                            action: function () {
                                e.request("folder:delete", {folder: i})
                            }
                        })
                    }), e.on("contextMenu:folder", function (e) {
                        var t = e.finder, i = e.data.context.folder, n = i.get("isRoot"), r = i.get("acl");
                        e.data.groups.addGroup("delete", [{
                            name: "DeleteFolder",
                            label: t.lang.Delete,
                            isActive: !n && r.folderDelete,
                            icon: "ckf-folder-delete",
                            action: function () {
                                t.request("folder:delete", {folder: i})
                            }
                        }])
                    }), e.setHandler("folder:delete", function (t) {
                        var i = t.folder;
                        e.request("dialog:confirm", {
                            name: "DeleteFolderConfirm",
                            context: {folder: i},
                            msg: e.lang.FolderDelete.replace("%1", i.get("name"))
                        })
                    })
                }

                return e
            }), CKFinder.define("CKFinder/Views/Base/LayoutView", ["marionette", "CKFinder/Views/Base/Common"], function (e, t) {
                "use strict";
                var i = e.LayoutView, n = i.extend(t.proto), r = n.extend({
                    constructor: function (i) {
                        t.util.construct.call(this, i), e.LayoutView.prototype.constructor.apply(this, Array.prototype.slice.call(arguments))
                    }
                });
                return r
            }), CKFinder.define("CKFinder/Views/Base/CollectionView", ["underscore", "marionette", "CKFinder/Views/Base/Common"], function (e, t, i) {
                "use strict";
                var n = t.CollectionView, r = n.extend(i.proto), o = r.extend({
                    constructor: function (e) {
                        i.util.construct.call(this, e), n.prototype.constructor.apply(this, Array.prototype.slice.call(arguments))
                    }, buildChildView: function (t, i, n) {
                        var r = e.extend({model: t, finder: this.finder}, n);
                        return new i(r)
                    }
                });
                return o
            }), CKFinder.define("CKFinder/Modules/Dialogs/Views/DialogButtonView", ["CKFinder/Util/KeyCode", "CKFinder/Views/Base/ItemView"], function (e, t) {
                "use strict";
                return t.extend({
                    name: "DialogButton",
                    tagName: "button",
                    template: "{{= it.label }}",
                    attributes: {tabindex: 1},
                    events: {
                        click: function () {
                            this.trigger("button")
                        }, keydown: function (t) {
                            (t.keyCode === e.enter || t.keyCode === e.space) && (t.preventDefault(), this.trigger("button"))
                        }
                    },
                    onRender: function () {
                        this.$el.attr("data-inline", !0).attr("data-ckf-button", this.model.get("name"))
                    }
                })
            }), CKFinder.define("CKFinder/Modules/Dialogs/Views/DialogButtonsView", ["underscore", "backbone", "CKFinder/Views/Base/CollectionView", "CKFinder/Modules/Dialogs/Views/DialogButtonView"], function (e, t, i, n) {
                "use strict";
                function r(i, n) {
                    var r = new t.Collection;
                    return e.forEach(i, function (t) {
                        var i = e.isString(t) ? t : t.name;
                        r.push(e.extend({
                            icons: {},
                            label: i,
                            name: i,
                            event: i.toLocaleLowerCase()
                        }, e.isString(t) ? n[i] : t))
                    }), r
                }

                return i.extend({
                    name: "DialogButtons", childView: n, initialize: function (e) {
                        this.collection = r(e.buttons, {
                            ok: {
                                label: this.finder.lang.OkBtn,
                                icons: {primary: "ui-icon-check"}
                            },
                            okClose: {label: this.finder.lang.OkBtn, icons: {primary: "ui-icon-check"}, event: "ok"},
                            cancel: {label: this.finder.lang.CancelBtn, icons: {primary: "ui-icon-close"}}
                        })
                    }
                })
            }), CKFinder.define("text!CKFinder/Templates/Dialogs/DialogLayout.dot", [], function () {
                return '{{? it.title }}<div data-role="header" class="ui-title"><h1>{{= it.title }}</h1></div>{{?}}\n<div id="ckf-dialog-contents-{{= it.id }}" class="ckf-dialog-contents {{= it.contentClassName }}"></div>\n{{? it.hasButtons }}<div class="ui-content ckf-dialog-buttons" id="ckf-dialog-buttons-{{= it.id }}"></div>{{?}}\n'
            }), CKFinder.define("CKFinder/Modules/Dialogs/Views/DialogView", ["underscore", "jquery", "CKFinder/Util/KeyCode", "CKFinder/Views/Base/LayoutView", "CKFinder/Modules/Dialogs/Views/DialogButtonsView", "text!CKFinder/Templates/Dialogs/DialogLayout.dot"], function (e, t, i, n, r, o) {
                "use strict";
                var s = 20, a = n.extend({
                    template: o,
                    className: "ckf-dialog",
                    ui: {title: ".ui-title:first"},
                    regions: function (e) {
                        return {contents: "#ckf-dialog-contents-" + e.id, buttons: "#ckf-dialog-buttons-" + e.id}
                    },
                    initialize: function () {
                        this.listenTo(this.contents, "show", function () {
                            this.$el.trigger("create")
                        }, this), t(".ui-popup-container").remove()
                    },
                    onRender: function () {
                        this.$el.attr("data-theme", this.finder.config.swatch).appendTo("body"), this.contents.show(this.getOption("innerView")), this._addButtons(), this.$el.trigger("create"), this.$el.popup(this._getUiConfig());
                        try {
                            this.$el.popup("open", this.options.uiOpen || {})
                        } catch (t) {
                        }
                        this.$el.find('.ckf-dialog-buttons button[data-ckf-button="okClose"],.ckf-dialog-buttons button[data-ckf-button="ok"]').first().focus();
                        var n = this.getOption("focusItem");
                        if (n) {
                            var r = e.isString(n) ? n : "input, textarea, select", o = this.$el.find(r).first();
                            o.length && o.focus()
                        }
                        return this.options.restrictHeight && this.restrictHeight(), this.$el.on("keydown", function (e) {
                            e.keyCode !== i.tab && e.stopPropagation()
                        }), this
                    },
                    onDestroy: function () {
                        try {
                            this.$el.popup("close"), this.$el.off("keydown"), this.$el.remove()
                        } catch (e) {
                        }
                    },
                    getButton: function (e) {
                        return this.$el.popup("widget").find('button[data-ckf-button="' + e + '"]')
                    },
                    enableButton: function (e) {
                        this.getButton(e).removeClass("ui-state-disabled")
                    },
                    disableButton: function (e) {
                        this.getButton(e).addClass("ui-state-disabled")
                    },
                    restrictHeight: function () {
                        if (!this.isDestroyed) {
                            var e = t(window).height() - this.ui.title.outerHeight() - this.buttons.$el.outerHeight() - this.$el.parent().position().top - s;
                            this.contents.$el.css("max-height", parseInt(e, 10) + "px")
                        }
                    },
                    _addButtons: function () {
                        var e = this.getOption("buttons");
                        if (e) {
                            var t = this, i = new r({finder: this.finder, buttons: e});
                            this.listenTo(i, "childview:button", function (e) {
                                var i = e.model.get("event"), n = e.model.get("name");
                                ("cancel" === n || "okClose" === n) && t.destroy(), t.finder.fire("dialog:" + t.getOption("name") + ":" + i, t.getOption("clickData"), t.finder)
                            }), this.buttons.show(i)
                        }
                    },
                    _getUiConfig: function () {
                        function t(e, t, i) {
                            n[e] && n[e].apply(t, i)
                        }

                        var i = this, n = {}, r = this.getOption("uiOptions");
                        r && e.forEach(["create", "afterclose", "beforeposition"], function (e) {
                            n[e] = r[e], delete r[e]
                        });
                        var o = {
                            create: function () {
                                i.contents.$el.css({
                                    minWidth: i.getOption("minWidth"),
                                    minHeight: i.getOption("minHeight"),
                                    maxHeight: window.innerHeight
                                }), t("create", this, arguments)
                            }, afterclose: function () {
                                i.destroy(), t("afterclose", this, arguments)
                            }, beforeposition: function (e, n) {
                                r && r.positionTo && (delete n.x, delete n.y, n.positionTo = r.positionTo), setTimeout(function () {
                                    i.options.restrictHeight && i.restrictHeight()
                                }, 0), t("beforeposition", this, arguments)
                            }
                        }, s = i.finder.config.dialogOverlaySwatch;
                        return s && (o.overlayTheme = e.isBoolean(s) ? i.finder.config.swatch : s), e.extend(o, r)
                    }
                });
                return a
            }), CKFinder.define("CKFinder/Views/MessageView", ["backbone", "CKFinder/Views/Base/ItemView"], function (e, t) {
                "use strict";
                var i = t.extend({
                    name: "MessageView",
                    className: "ckf-message",
                    template: "{{= it.msg }}",
                    initialize: function (t) {
                        this.model = new e.Model({msg: t.msg})
                    }
                });
                return i
            }), CKFinder.define("CKFinder/Modules/Dialogs/Dialogs", ["underscore", "jquery", "backbone", "CKFinder/Util/KeyCode", "CKFinder/Modules/Dialogs/Views/DialogView", "CKFinder/Views/Base/ItemView", "CKFinder/Views/MessageView"], function (e, t, i, n, r, o, s) {
                "use strict";
                function a(e) {
                    this.finder = e, e.setHandlers({
                        dialog: {callback: l, context: this},
                        "dialog:info": {callback: d, context: this},
                        "dialog:confirm": {callback: u, context: this},
                        "dialog:destroy": h
                    }), e.request("key:listen", {key: n.escape}), e.on("keyup:27", function (e) {
                        var i, n;
                        n = t(".ckf-dialog"), n.length && (i = e.data.evt, i.preventDefault(), i.stopPropagation(), h())
                    }, null, null, 20)
                }

                function l(t) {
                    var i = this.finder;
                    if (h(), !t.name)throw"Name parameter must be specified for dialog";
                    var n = e.isUndefined(t.captureFormSubmit) ? !0 : t.captureFormSubmit, o = c(t, i, n), s = f(i, t, o), a = new r(s);
                    return i.request("focus:remember"), a.on("destroy", function () {
                        i.request("focus:restore")
                    }), n && a.listenTo(o, "submit:form", function () {
                        return i.fire("dialog:" + t.name + ":ok", s.clickData, i), !1
                    }), a.render(), a
                }

                function d(t) {
                    var i = e.extend({
                        name: "Info",
                        buttons: !1,
                        view: new s({msg: t.msg, finder: this.finder}),
                        transition: "flip"
                    }, t);
                    return l.call(this, i)
                }

                function u(t) {
                    var i = e.extend({
                        name: "Confirm",
                        buttons: ["okClose", "cancel"],
                        title: this.finder.lang.common.messageTitle,
                        view: new s({msg: t.msg, finder: this.finder})
                    }, t);
                    return l.call(this, i)
                }

                function c(e, t, i) {
                    var n;
                    if (e.view)n = e.view; else {
                        var r = {name: e.name, finder: t, template: e.template};
                        i && (r.triggers = {
                            "submit form": {
                                event: "submit:form",
                                preventDefault: !0,
                                stopPropagation: !1
                            }
                        }), n = new (o.extend(r))({model: e.templateModel})
                    }
                    return n
                }

                function f(t, n, r) {
                    var o = {
                        finder: t,
                        name: n.name,
                        id: e.uniqueId("ckf"),
                        minWidth: n.minWidth ? n.minWidth : t.config.dialogMinWidth,
                        minHeight: n.minHeight ? n.minHeight : t.config.dialogMinHeight,
                        focusItem: e.isUndefined(n.focusItem) ? t.config.dialogFocusItem : n.focusItem,
                        buttons: e.isUndefined(n.buttons) ? ["ok", "cancel"] : n.buttons,
                        captureFormSubmit: e.isUndefined(n.captureFormSubmit) ? !0 : n.captureFormSubmit,
                        restrictHeight: e.isUndefined(n.restrictHeight) ? !1 : n.restrictHeight,
                        uiOptions: n.uiOptions
                    };
                    return o.model = new i.Model({
                        id: o.id,
                        title: n.title,
                        hasButtons: !e.isUndefined(o.buttons),
                        contentClassName: e.isUndefined(n.contentClassName) ? " ui-content" : n.contentClassName === !1 ? "" : " " + n.contentClassName
                    }), o.clickData = {model: n.templateModel, view: r, context: n.context}, o.innerView = r, o
                }

                function h() {
                    t(".ckf-dialog").popup("close"), t(".ui-popup-container").remove()
                }

                return a
            }), CKFinder.define("text!CKFinder/Templates/EditImage/EditImageLayout.dot", [], function () {
                return '<div class="ckf-ei-wrapper">\n	<div id="ckf-ei-preview" class="ckf-ei-preview"></div>\n	<div id="ckf-ei-actions" class="ckf-ei-controls ui-body-{{= it.swatch }}"></div>\n</div>\n'
            }), CKFinder.define("CKFinder/Modules/EditImage/Views/EditImageLayout", ["CKFinder/Views/Base/LayoutView", "text!CKFinder/Templates/EditImage/EditImageLayout.dot"], function (e, t) {
                "use strict";
                return e.extend({
                    name: "EditImageLayout",
                    template: t,
                    regions: {preview: "#ckf-ei-preview", actions: "#ckf-ei-actions"},
                    templateHelpers: function () {
                        return {swatch: this.finder.config.swatch}
                    },
                    onActionsExpand: function () {
                        this.preview.$el.addClass("ckf-ei-preview-reduced")
                    },
                    onActionsCollapse: function () {
                        this.preview.$el.removeClass("ckf-ei-preview-reduced")
                    }
                })
            }), CKFinder.define("text!CKFinder/Templates/EditImage/ImagePreview.dot", [], function () {
                return '<canvas class="ckf-ei-canvas"></canvas>\n'
            }), CKFinder.define("CKFinder/Modules/EditImage/Views/ImagePreviewView", ["CKFinder/Views/Base/ItemView", "text!CKFinder/Templates/EditImage/ImagePreview.dot"], function (e, t) {
                "use strict";
                return e.extend({name: "ImagePreview", template: t, ui: {canvas: ".ckf-ei-canvas"}})
            }), CKFinder.define("text!CKFinder/Templates/EditImage/Action.dot", [], function () {
                return '<div data-role="collapsible" data-collapsed-icon="{{= it.icon}}" data-expanded-icon="{{= it.icon}}" data-iconpos="right" data-inset="false" tabindex="-1">\n    <h4 class="ckf-ei-action-title">{{= it.title }}</h4>\n    <div class="ckf-ei-action-controls">ActionView</div>\n</div>\n'
            }), CKFinder.define("CKFinder/Modules/EditImage/Views/ActionView", ["jquery", "CKFinder/Util/KeyCode", "CKFinder/Views/Base/LayoutView", "text!CKFinder/Templates/EditImage/Action.dot"], function (e, t, i, n) {
                "use strict";
                return i.extend({
                    name: "ActionView",
                    template: n,
                    className: "ckf-ei-action",
                    ui: {heading: ".ckf-ei-action-title", controls: ".ckf-ei-action-controls"},
                    regions: {action: ".ckf-ei-action-controls"},
                    events: {
                        collapsiblecollapse: function () {
                            this.model.get("tool").trigger("collapse"), this.ui.heading.find(".ui-btn").removeClass("ui-btn-active"), this.trigger("collapse")
                        }, collapsibleexpand: function () {
                            this.model.get("tool").trigger("expand"), this.ui.heading.find(".ui-btn").addClass("ui-btn-active"), this.trigger("expand")
                        }, collapsiblecreate: function () {
                            this.$el.find(".ui-collapsible-heading-toggle").attr("tabindex", 0)
                        }, "keydown .ui-collapsible-heading-toggle": function (e) {
                            if (e.keyCode === t.space || e.keyCode === t.enter) {
                                e.stopPropagation(), e.preventDefault();
                                var i = this.$el.find(".ui-collapsible").collapsible("option", "collapsed") ? "expand" : "collapse";
                                this.$el.find(".ui-collapsible").collapsible(i)
                            }
                        }
                    },
                    collapse: function () {
                        this.$el.find(".ui-collapsible").collapsible("collapse")
                    },
                    onRender: function () {
                        this.action.show(this.model.get("tool").getView(this.finder))
                    }
                })
            }), CKFinder.define("CKFinder/Modules/EditImage/Views/ActionsView", ["jquery", "CKFinder/Views/Base/CollectionView", "CKFinder/Modules/EditImage/Views/ActionView", "text!CKFinder/Templates/EditImage/Action.dot"], function (e, t, i, n) {
                "use strict";
                function r(t, i) {
                    var n = "desktop" === t;
                    e(".ckf-ei-controls .ui-collapsible-heading-toggle").toggleClass("ui-corner-all ui-btn-icon-notext", !n).toggleClass("ltr" === i.lang.dir ? "ui-btn-icon-left" : "right", n)
                }

                function o(e) {
                    e.data.modeChanged && r(e.data.mode, e.finder)
                }

                return t.extend({
                    name: "ActionsView",
                    attributes: {"data-role": "collapsibleset"},
                    template: n,
                    childView: i,
                    childViewContainer: "#ckf-edit-image-actions",
                    childEvents: {
                        expand: function (e) {
                            this.children.forEach(function (t) {
                                t.cid === e.cid || t.ui.heading.hasClass("ui-collapsible-heading-collapsed") || t.collapse()
                            })
                        }
                    },
                    initialize: function () {
                        var t = this.finder;
                        this.collection.on("imageData:ready", function () {
                            r(t.request("ui:getMode"), t), e.mobile.resetActivePageHeight()
                        }), t.on("ui:resize", o)
                    },
                    onDestroy: function () {
                        this.finder.removeListener("ui:resize", o)
                    },
                    focusFirst: function () {
                        this.$el.find(".ui-collapsible-heading-toggle").first().focus()
                    }
                })
            }), CKFinder.define("CKFinder/Modules/EditImage/Models/EditImageData", ["backbone"], function (e) {
                "use strict";
                var t = e.Model.extend({
                    defaults: {
                        file: null,
                        caman: null,
                        imagePreview: "",
                        fullImagePreview: "",
                        actions: null
                    }, initialize: function () {
                        this.set("actions", new e.Collection)
                    }
                });
                return t
            }), CKFinder.define("CKFinder/Modules/EditImage/Tools/Tool", ["backbone"], function (e) {
                "use strict";
                return e.Model.extend({
                    getActionData: function () {
                        return new e.Model({})
                    }, saveDeferred: function (e, t) {
                        return t
                    }, getView: function (e) {
                        var t, i;
                        return t = this.get("viewClass"), i = new t({
                            finder: e,
                            model: this.getActionData()
                        }), this.set("view", i), i
                    }
                })
            }), CKFinder.define("text!CKFinder/Templates/EditImage/Crop.dot", [], function () {
                return '<div class="ckf-ei-crop-controls-inputs">\n	<label>\n		{{= it.lang.EditImage.keepAspectRatio }}\n		<input name="ckfCropKeepAspectRatio" type="checkbox"{{? it.keepAspectRatio }} checked="checked"{{?}} data-iconpos="{{? it.lang.dir == \'ltr\'}}left{{??}}right{{?}}">\n	</label>\n	<button id="ckf-ei-crop-apply" data-icon="ckf-tick" data-iconpos="{{? it.lang.dir == \'ltr\'}}left{{??}}right{{?}}">{{= it.lang.EditImage.apply }}</button>\n</div>\n'
            }), CKFinder.define("CKFinder/Modules/EditImage/Views/CropView", ["CKFinder/Views/Base/ItemView", "text!CKFinder/Templates/EditImage/Crop.dot"], function (e, t) {
                "use strict";
                return e.extend({
                    name: "CropView",
                    template: t,
                    className: "ckf-ei-crop-controls",
                    ui: {keepAspectRatio: 'input[name="ckfCropKeepAspectRatio"]', apply: "#ckf-ei-crop-apply"},
                    triggers: {"click @ui.apply": "apply"},
                    events: {
                        "change @ui.keepAspectRatio": function (e) {
                            e.stopPropagation(), e.preventDefault(), this.model.set("keepAspectRatio", this.ui.keepAspectRatio.is(":checked"))
                        }
                    }
                })
            }), CKFinder.define("CKFinder/Modules/EditImage/Views/CropBoxView", ["jquery", "CKFinder/Views/Base/ItemView"], function (e, t) {
                "use strict";
                var i = t.extend({
                    name: "CropView",
                    className: "ckf-ei-crop-wrap",
                    template: '<div class="ckf-ei-crop"><div class="ckf-ei-crop-resize"></div><div class="ckf-ei-crop-info"></div></div>',
                    ui: {cropBox: ".ckf-ei-crop", cropResize: ".ckf-ei-crop-resize", cropInfo: ".ckf-ei-crop-info"},
                    events: {
                        "vmousedown @ui.cropBox": "onMouseDown",
                        "vmouseup @ui.cropBox": "onMouseUp",
                        "vmousedown @ui.cropResize": "onMouseDownOnResize",
                        "vmouseup @ui.cropResize": "onMouseUpOnResize"
                    },
                    modelEvents: {
                        change: "updatePosition", "change:keepAspectRatio": function () {
                            if (this.model.get("keepAspectRatio")) {
                                var e = this.model.get("renderHeight"), t = this.model.get("maxRenderHeight"), i = this.model.get("maxRenderWidth"), n = t - this.model.get("renderY"), r = i - this.model.get("renderX");
                                e > n && (e = n);
                                var o = parseInt(e * i / t, 10);
                                o > r && (o = r, e = parseInt(o * t / i, 10)), this.model.set({
                                    renderWidth: o,
                                    renderHeight: e
                                })
                            }
                        }
                    },
                    onRender: function () {
                        var e;
                        e = this.model.get("canvas"), this.$el.css({
                            width: this.model.get("maxRenderWidth"),
                            height: this.model.get("maxRenderHeight")
                        }), this.ui.cropBox.css({
                            backgroundImage: "url(" + e.toDataURL() + ")",
                            backgroundSize: this.model.get("maxRenderWidth") + "px " + this.model.get("maxRenderHeight") + "px"
                        }), this.updatePosition()
                    },
                    onMouseDown: function (t) {
                        var i = this;
                        t.stopPropagation(), e(window).on("vmousemove", {
                            model: i.model,
                            view: i,
                            moveStart: {x: t.clientX - i.model.get("renderX"), y: t.clientY - i.model.get("renderY")}
                        }, i.mouseMove), e(window).one("vmouseup", function () {
                            i.onMouseUp()
                        })
                    },
                    onMouseUp: function (t) {
                        t && t.stopPropagation(), e(window).off("vmousemove", this.mouseMove)
                    },
                    mouseMove: function (e) {
                        var t, i, n, r, o, s, a, l;
                        t = e.data.model, i = e.data.view.ui.cropBox, n = e.clientX - e.data.moveStart.x, r = e.clientY - e.data.moveStart.y, o = i.outerWidth(), s = i.outerHeight(), a = t.get("maxRenderWidth") - o, l = t.get("maxRenderHeight") - s, n = 0 > n ? 0 : n, r = 0 > r ? 0 : r, n = n > a ? a : n, r = r > l ? l : r, t.set({
                            renderX: n,
                            renderY: r
                        })
                    },
                    onMouseDownOnResize: function (t) {
                        var i = this;
                        t.stopPropagation(), e(window).on("vmousemove", {
                            model: i.model,
                            view: i,
                            moveStart: {
                                x: t.clientX - i.model.get("renderWidth"),
                                y: t.clientY - i.model.get("renderHeight")
                            }
                        }, i.mouseResize), e(window).one("vmouseup", function () {
                            i.onMouseUpOnResize()
                        })
                    },
                    onMouseUpOnResize: function () {
                        e(window).off("vmousemove", this.mouseResize)
                    },
                    mouseResize: function (e) {
                        var t, i, n, r, o, s;
                        t = e.data.model, i = t.get("minCrop"), n = e.clientX - e.data.moveStart.x, r = e.clientY - e.data.moveStart.y, o = t.get("maxRenderWidth") - t.get("renderX"), s = t.get("maxRenderHeight") - t.get("renderY"), r = i > r ? i : r, n = i > n ? i : n, t.get("keepAspectRatio") && (n = parseInt(r * t.get("maxRenderWidth") / t.get("maxRenderHeight"), 10)), n = n > o ? o : n, r = r > s ? s : r, t.set({
                            renderWidth: n,
                            renderHeight: r
                        })
                    },
                    updatePosition: function () {
                        var e = this.model.get("renderX"), t = this.model.get("renderY"), i = (this.ui.cropBox.outerWidth() - this.ui.cropBox.width()) / 2;
                        this.ui.cropBox.css({
                            top: t + "px",
                            left: e + "px",
                            width: this.model.get("renderWidth") + "px",
                            height: this.model.get("renderHeight") + "px",
                            backgroundPosition: -e - i + "px " + (-t - i) + "px"
                        }), this.ui.cropInfo.text(this.model.get("width") + "x" + this.model.get("height")), this.ui.cropInfo.attr("data-ckf-position", this.model.get("x") + "," + this.model.get("y"))
                    }
                });
                return i
            }), CKFinder.define("CKFinder/Modules/EditImage/Tools/CropTool", ["backbone", "jquery", "CKFinder/Modules/EditImage/Tools/Tool", "CKFinder/Modules/EditImage/Views/CropView", "CKFinder/Modules/EditImage/Views/CropBoxView"], function (e, t, i, n, r) {
                "use strict";
                return i.extend({
                    defaults: {name: "Crop", viewClass: n, view: null, isVisible: !1},
                    initialize: function () {
                        function i(e) {
                            var t, i, n;
                            n = e.get("renderWidth"), i = e.get("renderHeight"), t = e.get("imageWidth") / e.get("maxRenderWidth"), e.set("width", parseInt(n * t, 10)), e.set("height", parseInt(i * t, 10)), e.set("x", parseInt(e.get("renderX") * t, 10)), e.set("y", parseInt(e.get("renderY") * t, 10))
                        }

                        function n() {
                            r.get("isVisible") && (r.closeCropBox(), r.openCropBox())
                        }

                        this.viewModel = new e.Model({
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0,
                            renderWidth: 0,
                            renderHeight: 0,
                            maxWidth: 0,
                            maxHeight: 0,
                            imageWidth: 0,
                            imageHeight: 0,
                            keepAspectRatio: !1
                        }), this.viewModel.on("change:renderWidth", i), this.viewModel.on("change:renderHeight", i), this.viewModel.on("change:renderX", i), this.viewModel.on("change:renderY", i), this.collection.on("imageData:ready", function () {
                            var e, i, n, r, o, s;
                            e = this.get("editImageData"), s = e.get("caman").renderingCanvas, i = t(s).width(), n = t(s).height(), r = parseInt(i / 2, 10), o = parseInt(n / 2, 10), this.viewModel.set({
                                canvas: e.get("caman").renderingCanvas,
                                minCrop: 10,
                                x: e.get("imageWidth"),
                                y: e.get("imageHeight"),
                                renderX: parseInt((i - r) / 2, 10),
                                renderY: parseInt((n - o) / 2, 10),
                                width: e.get("imageWidth"),
                                height: e.get("imageHeight"),
                                renderWidth: r,
                                renderHeight: o,
                                maxRenderWidth: i,
                                maxRenderHeight: n,
                                imageWidth: e.get("imageInfo").width,
                                imageHeight: e.get("imageInfo").height
                            }), this.get("view").on("apply", function () {
                                this.cropView()
                            }, this)
                        }, this), this.on("expand", this.openCropBox, this), this.on("collapse", this.closeCropBox, this);
                        var r = this;
                        this.collection.on("tool:reset:after", n), this.collection.on("ui:resize", n)
                    },
                    cropView: function () {
                        var e = this.get("editImageData"), t = e.get("caman").renderingCanvas, i = t.width / this.viewModel.get("maxRenderWidth");
                        e.get("caman").crop(parseInt(i * this.viewModel.get("renderWidth"), 10), parseInt(i * this.viewModel.get("renderHeight"), 10), parseInt(i * this.viewModel.get("renderX"), 10), parseInt(i * this.viewModel.get("renderY"), 10)), this.collection.requestThrottler();
                        var n = !1;
                        e.get("actions").forEach(function (e) {
                            "Rotate" === e.get("tool") && (n = !n)
                        }), i = e.get(n ? "imageHeight" : "imageWidth") / this.viewModel.get("maxRenderWidth"), e.get("actions").push({
                            tool: this.get("name"),
                            data: {
                                width: parseInt(i * this.viewModel.get("renderWidth"), 10),
                                height: parseInt(i * this.viewModel.get("renderHeight"), 10),
                                x: parseInt(i * this.viewModel.get("renderX"), 10),
                                y: parseInt(i * this.viewModel.get("renderY"), 10)
                            }
                        }), this.closeCropBox()
                    },
                    openCropBox: function () {
                        var e = this.get("editImageData").get("caman").renderingCanvas, i = t(e).width(), n = t(e).height(), o = parseInt(i / 2, 10), s = parseInt(n / 2, 10);
                        this.viewModel.set({
                            maxRenderWidth: i,
                            maxRenderHeight: n,
                            renderWidth: o,
                            renderHeight: s,
                            renderX: parseInt((i - o) / 2, 10),
                            renderY: parseInt((n - s) / 2, 10)
                        }), this.cropBox = new r({
                            finder: this.collection.finder,
                            model: this.viewModel
                        }), this.cropBox.render().$el.appendTo(t(this.get("editImageData").get("caman").renderingCanvas).parent()), this.set("isVisible", !0)
                    },
                    closeCropBox: function () {
                        this.cropBox && this.cropBox.destroy(), this.set("isVisible", !1)
                    },
                    saveDeferred: function (e, i) {
                        var n, r;
                        return n = new t.Deferred, r = n.promise(), i.then(function (t) {
                            t.crop(e.width, e.height, e.x, e.y).render(function () {
                                n.resolve(this)
                            })
                        }), r
                    },
                    getActionData: function () {
                        return this.viewModel
                    }
                })
            }), CKFinder.define("text!CKFinder/Templates/EditImage/Rotate.dot", [], function () {
                return '<div class="ckf-ei-rotate-controls-inputs">\n	<button id="ckf-ei-rotate-anticlockwise" data-icon="ckf-rotate-left" data-iconpos="{{? it.lang.dir == \'ltr\'}}left{{??}}right{{?}}">{{= it.lang.EditImage.rotateAntiClockwise }}</button>\n	<button id="ckf-ei-rotate-clockwise" data-icon="ckf-rotate-right" data-iconpos="{{? it.lang.dir == \'ltr\'}}left{{??}}right{{?}}">{{= it.lang.EditImage.rotateClockwise }}</button>\n</div>\n'
            }), CKFinder.define("CKFinder/Modules/EditImage/Views/RotateView", ["CKFinder/Views/Base/ItemView", "text!CKFinder/Templates/EditImage/Rotate.dot"], function (e, t) {
                "use strict";
                return e.extend({
                    name: "RotateView",
                    template: t,
                    ui: {clockwise: "#ckf-ei-rotate-clockwise", antiClockwise: "#ckf-ei-rotate-anticlockwise"},
                    events: {"click @ui.clockwise": "onClockwise", "click @ui.antiClockwise": "onAntiClockwise"},
                    onClockwise: function () {
                        this.model.unset("lastRotationAngle", {silent: !0}), this.model.set("lastRotationAngle", 90)
                    },
                    onAntiClockwise: function () {
                        this.model.unset("lastRotationAngle", {silent: !0}), this.model.set("lastRotationAngle", -90)
                    }
                })
            }), CKFinder.define("CKFinder/Modules/EditImage/Tools/RotateTool", ["jquery", "backbone", "CKFinder/Modules/EditImage/Tools/Tool", "CKFinder/Modules/EditImage/Views/RotateView"], function (e, t, i, n) {
                "use strict";
                return i.extend({
                    defaults: {name: "Rotate", viewClass: n, view: null, rotationApplied: !1},
                    initialize: function () {
                        function e() {
                            var e = i.get("editImageData").get("actions");
                            e.remove(e.where({tool: i.get("name")})), i.viewModel.set("angle", 0), i.viewModel.set("lastRotationAngle", 0)
                        }

                        var i = this;
                        this.viewModel = new t.Model({
                            angle: 0,
                            lastRotationAngle: 0
                        }), this.viewModel.on("change:lastRotationAngle", function (e, t) {
                            this.get("editImageData").get("actions").push({
                                tool: this.get("name"),
                                data: t
                            }), this.set("rotationApplied", !1), this.collection.requestThrottler()
                        }, this), this.collection.on("throttle", function (e) {
                            this.get("rotationApplied") || (e.rotate(this.viewModel.get("lastRotationAngle")), e.render(), this.set("rotationApplied", !0))
                        }, this), this.collection.on("tool:reset:" + this.get("name"), e), this.collection.on("tool:reset:all", e)
                    },
                    saveDeferred: function (t, i) {
                        var n, r;
                        return n = new e.Deferred, r = n.promise(), i.then(function (e) {
                            e.rotate(t).render(function () {
                                n.resolve(this)
                            })
                        }), r
                    },
                    getActionData: function () {
                        return this.viewModel
                    }
                })
            }), CKFinder.define("text!CKFinder/Templates/EditImage/Adjust.dot", [], function () {
                return '{{~ it.filters: filter }}\n<div class="ckf-ei-filter">\n	<label class="ckf-ei-filter-icon ui-btn ui-btn-icon-left ui-icon-{{= filter.icon }}" for="{{= filter.name }}">{{= filter.label }}</label>\n	<input class="ckf-ei-filter-slider" name="{{= filter.name }}" id="{{= filter.name }}" min="{{= filter.config.min }}"\n		   max="{{= filter.config.max }}" step="{{= filter.config.step }}" value="{{= filter.config.init }}" type="range"\n		   data-filter="{{= filter.name }}" data-initial="{{= filter.config.init }}">\n</div>\n{{~}}\n'
            }), CKFinder.define("CKFinder/Modules/EditImage/Views/AdjustView", ["jquery", "backbone", "CKFinder/Views/Base/ItemView", "text!CKFinder/Templates/EditImage/Adjust.dot"], function (e, t, i, n) {
                "use strict";
                var r = 100;
                return i.extend({
                    isSliding: !1,
                    applyFilterInterval: null,
                    lastFilterEvent: null,
                    name: "AdjustView",
                    template: n,
                    events: {
                        "slidestart .ckf-ei-filter-slider": "onSlideStart",
                        "slidestop .ckf-ei-filter-slider": "onSlideStop",
                        "change .ckf-ei-filter-slider": "onFilter",
                        "keyup .ckf-ei-filter-slider": "onFilter"
                    },
                    initialize: function () {
                        this.model.get("activeFilters").on("reset", function () {
                            this.render()
                        }, this)
                    },
                    onSlideStart: function () {
                        this.isSliding = !0
                    },
                    onSlideStop: function (e) {
                        this.isSliding = !1, this.applyFilters(e)
                    },
                    onRender: function () {
                        this.$el.trigger("create")
                    },
                    onFilter: function (e) {
                        var t = this;
                        t.isSliding || (this.lastFilterEvent = e, this.applyFilterInterval || (this.applyFilterInterval = setInterval(function () {
                            Date.now() - t.lastFilterEvent.timeStamp > 100 && (t.applyFilters(t.lastFilterEvent), clearInterval(t.applyFilterInterval), t.applyFilterInterval = null)
                        }, r)))
                    },
                    applyFilters: function (i) {
                        var n, r, o;
                        o = this.model.get("activeFilters"), r = e(i.currentTarget).data("filter"), n = o.where({filter: r})[0], n || (n = new t.Model({filter: r}), o.push(n)), n.set("value", e(i.currentTarget).val())
                    }
                })
            }), CKFinder.define("CKFinder/Modules/EditImage/Tools/AdjustTool", ["jquery", "backbone", "underscore", "CKFinder/Modules/EditImage/Tools/Tool", "CKFinder/Modules/EditImage/Views/AdjustView"], function (e, t, i, n, r) {
                "use strict";
                return n.extend({
                    defaults: function () {
                        var e = this.collection.finder.config, t = [{
                            name: "brightness",
                            icon: "ckf-brightness",
                            config: {min: -100, max: 100, step: 1, init: 0}
                        }, {
                            name: "contrast",
                            icon: "ckf-contrast",
                            config: {min: -100, max: 100, step: 1, init: 0}
                        }, {
                            name: "saturation",
                            icon: "ckf-saturation",
                            config: {min: -100, max: 100, step: 1, init: 0}
                        }, {
                            name: "vibrance",
                            icon: "ckf-vibrance",
                            config: {min: -100, max: 100, step: 1, init: 0}
                        }, {
                            name: "exposure",
                            icon: "ckf-exposure",
                            config: {min: -100, max: 100, step: 1, init: 0}
                        }, {name: "hue", icon: "ckf-hue", config: {min: 0, max: 100, step: 1, init: 0}}, {
                            name: "sepia",
                            icon: "ckf-sepia",
                            config: {min: 0, max: 100, step: 1, init: 0}
                        }, {name: "gamma", icon: "ckf-gamma", config: {min: 0, max: 10, step: .1, init: 1}}, {
                            name: "noise",
                            icon: "ckf-noise",
                            config: {min: 0, max: 100, step: 1, init: 0}
                        }, {name: "clip", icon: "ckf-clip", config: {min: 0, max: 100, step: 1, init: 0}}, {
                            name: "sharpen",
                            icon: "ckf-sharpen",
                            config: {min: 0, max: 100, step: 1, init: 0}
                        }, {
                            name: "stackBlur",
                            icon: "ckf-blur",
                            config: {min: 0, max: 20, step: 1, init: 0}
                        }], n = i.filter(t, function (t) {
                            return i.contains(e.editImageAdjustments, t.name)
                        });
                        return {name: "Adjust", viewClass: r, view: null, filters: n}
                    }, initialize: function () {
                        function e() {
                            var e = i.get("editImageData").get("actions");
                            e.remove(e.where({tool: i.get("name")})), n.reset()
                        }

                        var i = this, n = new t.Collection;
                        n.on("add", function () {
                            i.collection.resetTool("Presets")
                        }), i.collection.on("tool:reset:" + i.get("name"), e), i.collection.on("tool:reset:all", e), n.on("change", function () {
                            var e, n, r, o;
                            o = i.get("editImageData"), r = o.get("actions"), n = r.where({tool: i.get("name")})[0], e = this.toJSON(), n || (n = new t.Model({tool: i.get("name")}), r.push(n)), n.set("data", e), i.collection.requestThrottler()
                        });
                        var r = new t.Model({filters: this.get("filters"), activeFilters: n});
                        this.on("change:editImageData", function (e, t) {
                            r.set("file", t.get("file"))
                        }), this.collection.on("throttle", function (e) {
                            n.length && n.clone().forEach(function (t) {
                                e[t.get("filter")](parseFloat(t.get("value")))
                            })
                        }), this.viewModel = r, this.activeFilters = n
                    }, getActionData: function () {
                        return this.viewModel
                    }, saveDeferred: function (t, i) {
                        var n = new e.Deferred, r = n.promise();
                        return i.then(function (i) {
                            e.each(t, function (e, t) {
                                i[t.filter](parseFloat(t.value))
                            }), i.render(function () {
                                n.resolve(this)
                            })
                        }), r
                    }
                })
            }), CKFinder.define("text!CKFinder/Templates/EditImage/Presets.dot", [], function () {
                return '{{~ it.presets: preset }}\n<button class="ckf-ei-preset" data-preset="{{= preset.name }}"><img class="ckf-ei-preset-preview" /> {{= preset.label }}</button>\n{{~}}\n'
            }), CKFinder.define("CKFinder/Modules/EditImage/Views/PresetsView", ["underscore", "jquery", "CKFinder/Views/Base/ItemView", "text!CKFinder/Templates/EditImage/Presets.dot"], function (e, t, i, n) {
                "use strict";
                var r = 240, o = 80;
                return i.extend({
                    name: "PresetsView",
                    template: n,
                    events: {"click .ckf-ei-preset": "onPreset"},
                    onRender: function () {
                        function i() {
                            if (c.length) {
                                var e, r;
                                e = t(c.shift()), r = e.data("preset"), l("#" + d, n, function () {
                                    this.revert(!1), this[r]().render(function () {
                                        e.find("img").attr("src", this.toBase64()), i()
                                    })
                                })
                            } else u.remove()
                        }

                        var n, s = this.model.get("file");
                        if (this.finder.config.initConfigInfo.thumbs) {
                            var a;
                            e.forEach(this.finder.config.initConfigInfo.thumbs, function (e) {
                                var t = parseInt(e.split("x")[0]);
                                !a && t >= r && (a = t)
                            }), a && (n = this.finder.request("file:getThumb", {file: s}))
                        }
                        n && this.finder.config.initConfigInfo.thumbs || (n = this.finder.request("image:previewUrl", {
                            file: s,
                            maxWidth: r,
                            maxHeight: o,
                            noCache: !0
                        }));
                        var l = this.model.get("Caman"), d = e.uniqueId("ckf-"), u = t("<canvas>").attr("id", d).attr("width", r).attr("height", r).css("display", "none").appendTo("body"), c = this.$el.find(".ckf-ei-preset").toArray();
                        i()
                    },
                    onPreset: function (e) {
                        this.model.set("active", t(e.currentTarget).data("preset"))
                    }
                })
            }), CKFinder.define("CKFinder/Modules/EditImage/Tools/PresetsTool", ["jquery", "underscore", "backbone", "CKFinder/Modules/EditImage/Tools/Tool", "CKFinder/Modules/EditImage/Views/PresetsView"], function (e, t, i, n, r) {
                "use strict";
                return n.extend({
                    defaults: function () {
                        var e, i, n;
                        return e = this.collection.finder.config, i = [{name: "clarity"}, {name: "concentrate"}, {name: "crossProcess"}, {name: "glowingSun"}, {name: "grungy"}, {name: "hazyDays"}, {name: "hemingway"}, {name: "herMajesty"}, {name: "jarques"}, {name: "lomo"}, {name: "love"}, {name: "nostalgia"}, {name: "oldBoot"}, {name: "orangePeel"}, {name: "pinhole"}, {name: "sinCity"}, {name: "sunrise"}, {name: "vintage"}], n = t.filter(i, function (i) {
                            return t.contains(e.editImagePresets, i.name)
                        }), {name: "Presets", viewClass: r, view: null, presets: n}
                    }, initialize: function () {
                        function e() {
                            var e = t.get("editImageData").get("actions");
                            n.set("active", null), e.remove(e.where({tool: t.get("name")}))
                        }

                        var t = this, n = new i.Model({
                            Caman: this.get("Caman"),
                            active: null,
                            presets: this.get("presets")
                        });
                        n.on("change:active", function (e, i) {
                            var n, r;
                            i && (t.collection.resetTool("Adjust"), n = t.get("editImageData"), r = n.get("actions"), r.remove(r.where({tool: t.get("name")})), r.push({
                                tool: t.get("name"),
                                data: i
                            }), t.collection.requestThrottler())
                        }), t.collection.on("throttle", function (e) {
                            var i = t.viewModel.get("active");
                            i && e[i]()
                        }), t.collection.on("tool:reset:" + t.get("name"), e), t.collection.on("tool:reset:all", e), this.on("change:editImageData", function (e, t) {
                            n.set("file", t.get("file"))
                        }), this.viewModel = n
                    }, saveDeferred: function (t, i) {
                        var n, r;
                        return n = new e.Deferred, r = n.promise(), i.then(function (e) {
                            e[t]().render(function () {
                                n.resolve(this)
                            })
                        }), r
                    }, getActionData: function () {
                        return this.viewModel
                    }
                })
            }), CKFinder.define("text!CKFinder/Templates/EditImage/Resize.dot", [], function () {
                return '<div class="ui-grid-a">\n	<div class="ckf-ei-resize-controls-inputs">\n		<input name="ckfResizeWidth" value="{{= it.displayWidth }}">\n		<p class="ckf-ei-resize-controls-text">x</p>\n		<input name="ckfResizeHeight" value="{{= it.displayHeight }}">\n		<p class="ckf-ei-resize-controls-text">{{= it.lang.PixelShort}}</p>\n	</div>\n</div>\n<label>\n	{{= it.lang.EditImage.keepAspectRatio }}\n	<input type="checkbox" name="ckfResizeKeepAspectRatio" {{? it.keepAspectRatio }}checked="checked"{{?}} data-iconpos="{{? it.lang.dir == \'ltr\'}}left{{??}}right{{?}}">\n</label>\n<button id="ckf-ei-resize-apply" data-icon="ckf-tick" data-iconpos="{{? it.lang.dir == \'ltr\'}}left{{??}}right{{?}}">{{= it.lang.EditImage.apply }}</button>\n'
            }), CKFinder.define("CKFinder/Modules/EditImage/Views/ResizeView", ["CKFinder/Views/Base/ItemView", "text!CKFinder/Templates/EditImage/Resize.dot"], function (e, t) {
                "use strict";
                return e.extend({
                    name: "ResizeView",
                    template: t,
                    className: "ckf-ei-resize-controls",
                    ui: {
                        width: 'input[name="ckfResizeWidth"]',
                        height: 'input[name="ckfResizeHeight"]',
                        keepAspectRatio: 'input[name="ckfResizeKeepAspectRatio"]',
                        apply: "#ckf-ei-resize-apply"
                    },
                    triggers: {"click @ui.apply": "apply"},
                    events: {
                        "change @ui.width": "onWidth",
                        "change @ui.height": "onHeight",
                        "change @ui.keepAspectRatio": "onAspectRatio"
                    },
                    modelEvents: {
                        "change:realWidth": "render",
                        "change:displayWidth": "setWidth",
                        "change:displayHeight": "setHeight"
                    },
                    onRender: function () {
                        this.$el.trigger("create")
                    },
                    onAspectRatio: function () {
                        var e = this.ui.keepAspectRatio.is(":checked");
                        this.model.set("keepAspectRatio", e), e && this.onWidth()
                    },
                    onWidth: function () {
                        var e, t, i, n, r;
                        this.dontRender || (n = this.model.get("displayWidth"), 0 > n || (i = parseInt(this.ui.width.val(), 10), r = this.model.get("realWidth"), i > r && (i = r), e = this.model.get("displayHeight"), this.model.get("keepAspectRatio") && (t = r / this.model.get("realHeight"), e = parseInt(i / t, 10)), this.updateSizes(i, e)))
                    },
                    onHeight: function () {
                        var e, t, i, n, r;
                        this.dontRender || (n = this.model.get("displayHeight"), 0 > n || (e = parseInt(this.ui.height.val(), 10), r = this.model.get("realHeight"), e > r && (e = r), i = this.model.get("displayWidth"), this.model.get("keepAspectRatio") && (t = this.model.get("realWidth") / r, i = parseInt(e * t, 10)), this.updateSizes(i, e)))
                    },
                    updateSizes: function (e, t) {
                        this.model.set({
                            displayWidth: e,
                            displayHeight: t
                        }), this.dontRender = !0, this.ui.width.val(e), this.ui.height.val(t), this.dontRender = !1
                    },
                    setWidth: function () {
                        this.ui.width.val(this.model.get("displayWidth"))
                    },
                    setHeight: function () {
                        this.ui.height.val(this.model.get("displayHeight"))
                    }
                })
            }), CKFinder.define("CKFinder/Modules/EditImage/Tools/ResizeTool", ["jquery", "backbone", "CKFinder/Modules/EditImage/Tools/Tool", "CKFinder/Modules/EditImage/Views/ResizeView"], function (e, t, i, n) {
                "use strict";
                var r = t.Model.extend({
                    defaults: {
                        realWidth: -1,
                        realHeight: -1,
                        displayWidth: -1,
                        displayHeight: -1,
                        renderWidth: -1,
                        renderHeight: -1,
                        maxRenderWidth: -1,
                        maxRenderHeight: -1,
                        keepAspectRatio: !0
                    }
                });
                return i.extend({
                    defaults: {name: "Resize", viewClass: n, view: null}, initialize: function () {
                        this.viewModel = new r, this.collection.on("imageData:ready", function () {
                            var e = this.get("editImageData");
                            this.viewModel.set({
                                realWidth: e.get("imageWidth"),
                                realHeight: e.get("imageHeight"),
                                displayWidth: e.get("imageWidth"),
                                displayHeight: e.get("imageHeight"),
                                renderWidth: e.get("renderWidth"),
                                renderHeight: e.get("renderHeight"),
                                maxRenderWidth: e.get("renderWidth"),
                                maxRenderHeight: e.get("renderHeight")
                            }), this.get("view").on("apply", function () {
                                this.resizeView()
                            }, this)
                        }, this), this.collection.on("tool:reset:all", function () {
                            var e, t;
                            e = this.get("editImageData"), t = e.get("imageInfo"), this.viewModel.set({
                                realWidth: t.width,
                                realHeight: t.height,
                                displayWidth: t.width,
                                displayHeight: t.height,
                                renderWidth: e.get("renderWidth"),
                                renderHeight: e.get("renderHeight"),
                                maxRenderWidth: e.get("renderWidth"),
                                maxRenderHeight: e.get("renderHeight")
                            })
                        }, this)
                    }, resizeView: function () {
                        var e, t, i, n, r, o, s, a, l;
                        e = this.viewModel, t = this.get("editImageData"), r = e.get("displayWidth"), n = e.get("displayHeight"), a = e.get("maxRenderWidth"), l = e.get("maxRenderHeight"), n > l || r > a ? (i = n > r ? l / n : a / r, s = parseInt(i * n, 10), o = parseInt(i * r, 10)) : (o = r, s = n), e.set({
                            realWidth: r,
                            realHeight: n
                        }), t.get("actions").push({
                            tool: this.get("name"),
                            data: {width: r, height: n}
                        }), t.set({imageWidth: r, imageHeight: n}), t.get("caman").resize({
                            width: o,
                            height: s
                        }), this.collection.requestThrottler()
                    }, saveDeferred: function (t, i) {
                        var n, r;
                        return n = new e.Deferred, r = n.promise(), i.then(function (e) {
                            e.resize({width: t.width, height: t.height}).render(function () {
                                n.resolve(this)
                            })
                        }), r
                    }, getActionData: function () {
                        return this.viewModel
                    }
                })
            }), CKFinder.define("CKFinder/Modules/EditImage/Tools", ["underscore", "jquery", "backbone", "CKFinder/Modules/EditImage/Tools/CropTool", "CKFinder/Modules/EditImage/Tools/RotateTool", "CKFinder/Modules/EditImage/Tools/AdjustTool", "CKFinder/Modules/EditImage/Tools/PresetsTool", "CKFinder/Modules/EditImage/Tools/ResizeTool"], function (e, t, i, n, r, o, s, a) {
                "use strict";
                return i.Collection.extend({
                    initialize: function () {
                        this.needRender = !1, this.isRendering = !1, this.on("add", function (e) {
                            e.set("name", e.get("tool").get("name"))
                        })
                    }, setupDefault: function (t, i) {
                        this.finder = t, this.Caman = i, this.add({
                            title: t.lang.EditImage.resize,
                            icon: "ckf-resize",
                            tool: new a(null, {collection: this})
                        }), this.add({
                            title: t.lang.EditImage.crop,
                            icon: "ckf-crop",
                            tool: new n(null, {collection: this})
                        }), this.add({
                            title: t.lang.EditImage.rotate,
                            icon: "ckf-rotate",
                            tool: new r(null, {collection: this})
                        });
                        var l = t.config.editImageAdjustments;
                        if (l && l.length) {
                            var d = new o(null, {collection: this});
                            this.add({
                                title: t.lang.EditImage.adjust,
                                icon: "ckf-adjust",
                                tool: d
                            }), e.forEach(d.get("filters"), function (e) {
                                e.label = t.lang.EditImage.filters[e.name]
                            })
                        }
                        var u = t.config.editImagePresets;
                        if (u && u.length) {
                            var c = new s({Caman: i}, {collection: this});
                            this.add({
                                title: t.lang.EditImage.presets,
                                icon: "ckf-presets",
                                tool: c
                            }), e.forEach(c.get("presets"), function (e) {
                                e.label = t.lang.EditImage.preset[e.name]
                            })
                        }
                        return this
                    }, setImageData: function (e) {
                        this.editImageData = e, e.on("change:renderHeight", function () {
                            this.checkReady()
                        }, this), this.forEach(function (t) {
                            t.get("tool").set("editImageData", e)
                        })
                    }, setImageInfo: function (e) {
                        this.editImageData.set("imageInfo", e), this.editImageData.set("imageWidth", e.width), this.editImageData.set("imageHeight", e.height), this.checkReady()
                    }, checkReady: function () {
                        this.editImageData && this.editImageData.has("imageInfo") && this.editImageData.has("renderWidth") && this.trigger("imageData:ready")
                    }, resetTool: function (e) {
                        var t;
                        e ? this.trigger("tool:reset:" + e) : (this.trigger("tool:reset:all"), t = this.editImageData.get("caman"), t.reset(), t.render(), this.editImageData.get("actions").reset()), this.trigger("tool:reset:after")
                    }, doSave: function (i) {
                        var n = this, r = e.uniqueId("edit-image-canvas"), o = t("<canvas>").attr("id", r).css("display", "none").appendTo("body"), s = this.editImageData.get("actions"), a = this.Caman, l = new t.Deferred, d = new t.Deferred, u = l.promise();
                        return a("#" + r, i, function () {
                            var e = this, t = s.findWhere({tool: "Adjust"});
                            t && (s.remove(t), s.push(t));
                            var i = s.findWhere({tool: "Presets"});
                            i && (s.remove(i), s.push(i)), s.forEach(function (e) {
                                var t = this.findWhere({name: e.get("tool")}).get("tool");
                                u = t.saveDeferred(e.get("data"), u)
                            }, n), u.then(function () {
                                d.resolve(e.toBase64()), o.remove()
                            }), l.resolve(e)
                        }), d.promise()
                    }, requestThrottler: function () {
                        var e = this;
                        this.needRender = !0, this.throttleID || (this.throttleID = setInterval(function () {
                            if (e.needRender && !e.isRendering) {
                                e.isRendering = !0;
                                var t = e.editImageData.get("caman");
                                try {
                                    t.revert(!1)
                                } catch (i) {
                                }
                                e.trigger("throttle", t), t.render(function () {
                                    return !1
                                }), e.isRendering = !1, e.needRender = !1
                            }
                        }, 200))
                    }, destroy: function () {
                        this.throttleID && clearInterval(this.throttleID)
                    }, haveDataToSave: function () {
                        return !0
                    }
                })
            }), CKFinder.define("CKFinder/Modules/EditImage/Models/ProgressModel", ["backbone"], function (e) {
                "use strict";
                var t = e.Model.extend({
                    defaults: {
                        progress: 0, state: "normal", message: "",
                        eta: !1, speed: !1, progressMessage: "", speedMessage: ""
                    }, initialize: function () {
                        this.on("change", function (e) {
                            var t, i;
                            e.changed.time && (t = e.previous("time"), t && (i = (e.get("bytes") - e.previous("bytes") / (e.get("time") - t)).toFixed(1), this.set({
                                eta: ((e.get("bytesTotal") - e.get("bytes")) / (100 * i)).toFixed(),
                                speed: i
                            })))
                        })
                    }
                });
                return t
            }), CKFinder.define("text!CKFinder/Templates/EditImage/Progress.dot", [], function () {
                return '<div class="ckf-ei-progress">\n	<div class="ckf-ei-progress-message">{{= it.message }}</div>\n	<div class="ckf-progress{{? it.state ===\'indeterminate\' }} ckf-progress-indeterminate{{?}}">\n		<div class="ckf-progress-bar ckf-progress-ok" style="width:{{= it.value }}%;" ></div>\n	</div>\n	{{? it.eta }}\n	<div>\n		{{= it.progressMessage.replace( \'%1\', it.speedMessage.replace( \'%1\', it.speed ) ) }}\n		<p>{{= it.eta }} / {{= it.speed }}</p>\n	</div>\n	{{?}}\n</div>\n'
            }), CKFinder.define("CKFinder/Modules/EditImage/Views/ProgressView", ["underscore", "jquery", "CKFinder/Views/Base/ItemView", "text!CKFinder/Templates/EditImage/Progress.dot"], function (e, t, i, n) {
                "use strict";
                var r = i.extend({
                    name: "EditImageProgressView",
                    template: n,
                    ui: {progressWrap: ".ckf-ei-progress", progressMessage: ".ckf-ei-progress-message"},
                    modelEvents: {change: "render"},
                    onRender: function () {
                        this.$el.trigger("create")
                    }
                });
                return r
            }), CKFinder.define("CKFinder/Models/File", ["backbone"], function (e) {
                "use strict";
                var t;
                return t = e.Model.extend({
                    defaults: {name: "", date: "", size: -1, folder: null, "view:isFolder": !1},
                    getExtension: function () {
                        return this.constructor.extensionFromFileName(this.get("name"))
                    },
                    getUrl: function () {
                        if (!this.has("url")) {
                            var e = this.get("folder").getUrl();
                            this.set("url", e && e + "/" + this.get("name"), {silent: !0})
                        }
                        return this.get("url")
                    },
                    isImage: function () {
                        return this.constructor.isExtensionOfImage(this.getExtension())
                    },
                    refresh: function () {
                        this.trigger("refresh")
                    }
                }, {
                    isValidName: function (e) {
                        var t = /[\\\/:\*\?"<>\|]/;
                        return !t.test(e)
                    }, isExtensionOfImage: function (e) {
                        return /jpeg|jpg|gif|png/.test(e.toLowerCase())
                    }, extensionFromFileName: function (e) {
                        return e.substr(e.lastIndexOf(".") + 1)
                    }
                })
            }), CKFinder.define("text!CKFinder/Templates/EditImage/ConfirmDialog.dot", [], function () {
                return '<label>\n    {{= it.lang.EditImage.saveDialogOverwrite }}\n	<input tabindex="1" type="checkbox" name="ckfEditImageOverwrite" {{? it.overwrite }}checked="checked"{{?}}>\n</label>\n<div class="filename-input-area" {{? it.overwrite }}style="display:none"{{?}}>\n    {{= it.lang.EditImage.saveDialogSaveAs }}\n    <div>\n        <span class="filename-extension-label">.{{! it.extension }}</span>\n        <div class="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset">\n    		<input tabindex="1" data-enhanced="true" type="text" name="ckfEditImageFileName" value="{{! it.name }}" />\n        </div>\n    </div>\n\n    <p class="ckf-ei-confirm-error error-message"></p>\n</div>\n'
            }), CKFinder.define("CKFinder/Modules/EditImage/Views/ConfirmDialogView", ["CKFinder/Views/Base/ItemView", "CKFinder/Models/File", "text!CKFinder/Templates/EditImage/ConfirmDialog.dot"], function (e, t, i) {
                "use strict";
                return e.extend({
                    name: "CropView",
                    template: i,
                    className: "ckf-ei-crop-controls",
                    ui: {
                        error: ".ckf-ei-confirm-error",
                        overwrite: 'input[name="ckfEditImageOverwrite"]',
                        fileName: 'input[name="ckfEditImageFileName"]',
                        fileNameInputArea: ".filename-input-area"
                    },
                    events: {
                        "change @ui.overwrite": function (e) {
                            e.stopPropagation(), e.preventDefault();
                            var t = this.ui.overwrite.is(":checked");
                            t ? (this.model.set("name", this.model.get("originalName")), this.model.unset("error"), this.ui.fileNameInputArea.hide()) : this.ui.fileNameInputArea.show(), this.model.set("overwrite", t)
                        }, "input @ui.fileName": function () {
                            var e = this.ui.fileName.val().toString();
                            t.isValidName(e) ? this.model.unset("error") : this.model.set("error", this.finder.lang.ErrorMsg.FileInvChar), this.model.set("name", e)
                        }
                    },
                    modelEvents: {
                        "change:error": function (e, t) {
                            t ? (this.ui.error.show(), this.ui.error.html(t)) : this.ui.error.hide()
                        }
                    }
                })
            }), CKFinder.define("CKFinder/Modules/EditImage/EditImage", ["underscore", "jquery", "backbone", "CKFinder/Modules/EditImage/Views/EditImageLayout", "CKFinder/Modules/EditImage/Views/ImagePreviewView", "CKFinder/Modules/EditImage/Views/ActionsView", "CKFinder/Modules/EditImage/Models/EditImageData", "CKFinder/Modules/EditImage/Tools", "CKFinder/Modules/EditImage/Models/ProgressModel", "CKFinder/Modules/EditImage/Views/ProgressView", "CKFinder/Modules/EditImage/Views/ConfirmDialogView"], function (e, t, i, n, r, o, s, a, l, d, u) {
                "use strict";
                function c(e) {
                    var t = this;
                    this.finder = e, e.on("contextMenu:file", f, this, null, 40), e.on("toolbar:reset:Main:file", function (i) {
                        var n = i.data.file;
                        n.isImage() && n.get("folder").get("acl").fileRename && n.get("folder").get("acl").fileUpload && i.data.toolbar.push({
                            type: "button",
                            name: "EditImage",
                            priority: 50,
                            icon: "ckf-file-edit",
                            label: i.finder.lang.Fileeditor.contextMenuName,
                            action: function () {
                                h(t, e.request("files:getSelected").first())
                            }
                        })
                    }), e.on("toolbar:reset:EditImage", function (t) {
                        var i = this;
                        t.data.toolbar.push({
                            icon: "ltr" === e.lang.dir ? "ckf-back" : "ckf-forward",
                            name: "Close",
                            iconOnly: !0,
                            label: t.finder.lang.CloseBtn,
                            type: "button",
                            alwaysVisible: !0,
                            action: function () {
                                e.request("page:destroy", {name: "EditImage"})
                            }
                        }), t.data.toolbar.push({
                            type: "text",
                            name: "Filename",
                            className: "ckf-ei-toolbar-filename",
                            label: t.data.tools.editImageData.get("file").get("name")
                        }), t.data.toolbar.push({
                            name: "Save",
                            label: e.lang.EditImage.save,
                            icon: "ckf-save",
                            alignment: "secondary",
                            alwaysVisible: !0,
                            type: "button",
                            action: function () {
                                m(i, t.data.tools)
                            }
                        }), t.data.toolbar.push({
                            name: "Reset",
                            label: e.lang.EditImage.reset,
                            icon: "ckf-reset",
                            alignment: "secondary",
                            alwaysVisible: !0,
                            type: "button",
                            action: function () {
                                t.data.tools.resetTool()
                            }
                        })
                    }, this, null, 40), e.on("dialog:EditImageConfirm:ok", function (i) {
                        var n = i.data.context;
                        if (!n.viewModel.get("error")) {
                            var r = n.viewModel.get("name"), o = r + "." + n.viewModel.get("extension"), s = n.viewModel.get("overwrite");
                            return !s && e.request("files:getCurrent").where({name: o}).length ? void n.viewModel.set("error", i.finder.lang.EditImage.saveDialogFileExists) : void v(t, n.tools, n.viewModel.get("oldName") === o ? !1 : o)
                        }
                    })
                }

                function f(e) {
                    var t = this, i = e.data.context.file.get("folder").get("acl");
                    e.data.context.file.isImage() && e.data.groups.addGroup("edit", [{
                        name: "EditImage",
                        label: t.finder.lang.Fileeditor.contextMenuName,
                        isActive: i.fileView && i.fileRename,
                        icon: "ckf-file-edit",
                        action: function () {
                            h(t, e.data.context.file)
                        }
                    }])
                }

                function h(t, i) {
                    if (e.isUndefined(y)) {
                        var n = CKFinder.require.toUrl(t.finder.config.caman || "libs/caman") + ".js?ver=8mhio5";
                        CKFinder.require([n], function (e) {
                            y = e || window.Caman, g(t, i)
                        })
                    } else g(t, i)
                }

                function g(e, t) {
                    var i = e.finder, l = new a;
                    l.setupDefault(i, y), l.on("throttle", function () {
                        i.fire("editImage:renderPreview", {actions: f.get("actions").clone()}, i)
                    });
                    var d = new n({finder: i}), u = new r({finder: i}), c = new o({finder: i, collection: l});
                    i.once("page:show:EditImage", function () {
                        d.preview.show(u), d.actions.show(c), d.$el.trigger("create"), i.request("toolbar:reset", {
                            name: "EditImage",
                            context: {tools: l}
                        });
                        var e = y(u.ui.canvas.selector, f.get("imagePreview"), function () {
                            i.request("loader:hide"), c.focusFirst(), f.set({
                                renderWidth: u.ui.canvas.width(),
                                renderHeight: u.ui.canvas.height()
                            })
                        });
                        f.set("caman", e)
                    });
                    var f = new s({
                        file: t,
                        imagePreview: i.request("image:previewUrl", {
                            file: t,
                            maxWidth: window.innerWidth - 224,
                            maxHeight: window.innerHeight - 100,
                            noCache: !0
                        }),
                        fullImagePreview: i.request("image:previewUrl", {
                            file: t,
                            maxWidth: 1e6,
                            maxHeight: 1e6,
                            noCache: !0
                        })
                    });
                    l.setImageData(f), i.request("loader:show", {text: i.lang.EditImage.loading}), i.request("command:send", {
                        name: "ImageInfo",
                        folder: t.get("folder"),
                        params: {fileName: t.get("name")}
                    }).done(function (e) {
                        function n() {
                            l.trigger("ui:resize")
                        }

                        if (e.error && 117 === e.error.number)return i.once("command:error:ImageInfo", function (e) {
                            e.cancel()
                        }), i.request("loader:hide"), i.request("folder:refreshFiles"), void i.request("dialog:info", {msg: i.lang.ErrorMsg.MissingFile});
                        var r = {width: e.width, height: e.height, size: e.size};
                        t.set("imageInfo", r), l.setImageInfo(r), i.util.isWidget() && p(i), i.once("page:create:EditImage", function () {
                            i.request("toolbar:create", {name: "EditImage", page: "EditImage"})
                        }), i.request("page:create", {
                            view: d,
                            title: i.lang.EditImage.title,
                            name: "EditImage",
                            className: "ckf-ei-page"
                        }), i.request("page:show", {name: "EditImage"}), i.request("loader:show", {text: i.lang.EditImage.loading}), c.on("childview:expand", function () {
                            d.onActionsExpand()
                        }).on("childview:collapse", function () {
                            d.onActionsCollapse()
                        }), i.on("ui:resize", n), i.once("page:destroy:EditImage", function () {
                            i.removeListener("ui:resize", n)
                        })
                    })
                }

                function p(e) {
                    function t() {
                        n = !1, e.removeListener("minimized", t)
                    }

                    function i() {
                        n && e.request("minimize"), e.removeListener("page:destroy:EditImage", i), e.removeListener("minimized", t)
                    }

                    var n = !1;
                    e.request("isMaximized") || (e.request("maximize"), n = !0), e.once("minimized", t), e.once("page:destroy:EditImage", i)
                }

                function m(e, t) {
                    var n;
                    if (t.haveDataToSave()) {
                        n = e.finder;
                        var r = t.editImageData.get("file"), o = r.getExtension(), s = r.get("name");
                        if (o) {
                            var a = s.lastIndexOf("." + o);
                            a > 0 && (s = s.substr(0, a))
                        }
                        var l = new i.Model({
                            overwrite: !0,
                            oldName: r.get("name"),
                            name: s,
                            originalName: s,
                            extension: o,
                            tools: t,
                            error: !1
                        }), d = n.request("dialog", {
                            view: new u({finder: n, model: l}),
                            title: n.lang.EditImage.saveDialogTitle,
                            name: "EditImageConfirm",
                            buttons: ["ok", "cancel"],
                            context: {viewModel: l, tools: t}
                        });
                        l.on("change:error", function (e, t) {
                            t ? d.disableButton("ok") : d.enableButton("ok")
                        })
                    }
                }

                function v(e, t, i) {
                    function n() {
                        u && u.abort(), r.request("dialog:destroy")
                    }

                    var r = e.finder, o = t.editImageData, s = new l({
                        progressMessage: r.lang.SizePerSecond,
                        speedMessage: r.lang.Kb
                    }), a = new d({finder: r, model: s});
                    if (r.request("dialog", {
                            view: a,
                            title: r.lang.EditImage.saveDialogTitle,
                            name: "EditImageSaveProgress",
                            buttons: ["cancel"]
                        }), r.on("dialog:EditImageSaveProgress:cancel", n), s.set("message", r.lang.EditImage.downloadAction), !window.URL || !window.URL.createObjectURL)return s.set("state", "indeterminate"), void w(o.get("fullImagePreview"), t, r, s, i);
                    s.set({bytes: 0, bytesTotal: 0, value: 0, time: (new Date).getTime()});
                    var u = new XMLHttpRequest;
                    u.onprogress = function (e) {
                        e.lengthComputable && s.set({
                            state: "normal",
                            bytes: e.loaded,
                            bytesTotal: e.total,
                            value: e.loaded / e.total * b,
                            time: (new Date).getTime()
                        }), e.lengthComputable || s.set("state", "indeterminate")
                    }, u.onload = function () {
                        return r.removeListener("dialog:EditImageSaveProgress:cancel", n), 200 !== this.status ? (r.request("folder:refreshFiles"), r.request("page:destroy", {name: "EditImage"}), void r.request("dialog:info", {msg: r.lang.ErrorMsg.MissingFile})) : (s.set({
                            value: b,
                            eta: !1,
                            speed: !1,
                            time: 0
                        }), void w(window.URL.createObjectURL(new Blob([this.response])), t, r, s, i))
                    }, u.open("GET", o.get("fullImagePreview"), !0), u.responseType = "arraybuffer", u.send(null)
                }

                function w(e, t, i, n, r) {
                    n.set({value: b, message: i.lang.EditImage.transformationAction}), t.doSave(e).then(function (e) {
                        function o() {
                            l && l.abort(), i.request("dialog:destroy")
                        }

                        n.set({value: C, message: i.lang.EditImage.uploadAction});
                        var s = t.editImageData.get("file"), a = s.get("folder");
                        i.once("command:after:SaveImage", function (e) {
                            n.set({
                                state: "normal",
                                value: x,
                                message: ""
                            }), s.set("date", e.data.response.date), i.once("page:show:Main", function () {
                                e.data.context.isFileNameChanged ? i.request("folder:refreshFiles") : s.refresh()
                            }), i.request("page:destroy", {name: "EditImage"})
                        }), n.set({
                            bytes: 0,
                            bytesTotal: 0,
                            value: C,
                            message: i.lang.EditImage.uploadAction,
                            time: (new Date).getTime()
                        }), i.on("dialog:EditImageSaveProgress:cancel", o);
                        var l = i.request("command:send", {
                            name: "SaveImage",
                            type: "post",
                            folder: a,
                            params: {fileName: r ? r : s.get("name")},
                            post: {content: e},
                            context: {file: s, isFileNameChanged: !!r},
                            returnTransport: !0,
                            uploadProgress: function (e) {
                                e.lengthComputable && n.set({
                                    bytes: e.loaded,
                                    bytesTotal: e.total,
                                    value: e.loaded / e.total * (F - C) + C,
                                    time: (new Date).getTime()
                                }), e.lengthComputable || n.set("state", "indeterminate")
                            },
                            uploadEnd: function () {
                                n.set("state", "normal"), i.removeListener("dialog:EditImageSaveProgress:cancel", o)
                            }
                        });
                        t.destroy()
                    })
                }

                var y, b = 33, C = 35, F = 98, x = 100;
                return c
            }), CKFinder.define("text!CKFinder/Templates/FilePreview/Gallery.dot", [], function () {
                return '<div class="ckf-file-preview-root" style="position:fixed;top:0;left:0;bottom:0;right:0;background:rgba(0,0,0,0.8);z-index:9010;" tabindex="0">\n	<div class="ckf-file-preview" style="position:absolute;top:0;left:0;bottom:0;right:0;margin:auto;"></div>\n	<div class="ckf-file-preview-info"\n		 style="position:absolute;left:0;bottom:0;right:0;margin:auto;color:#fff;background: #000;padding:0.5em 1em;">\n		<div class="ckf-file-preview-info-name" style="float: left;"></div>\n		<div class="ckf-file-preview-info-count" style="float: right;"></div>\n	</div>\n	<button class="ckf-file-preview-button-prev" style="position:absolute;left:2em;top:50%;">&laquo;</button>\n	<button class="ckf-file-preview-button-next" style="position:absolute;right:2em;top:50%;">&raquo;</button>\n</div>\n'
            }), CKFinder.define("CKFinder/Modules/FilePreview/FilePreview", ["underscore", "jquery", "doT", "backbone", "CKFinder/Util/KeyCode", "text!CKFinder/Templates/FilePreview/Gallery.dot", "CKFinder/Models/File"], function (e, t, i, n, r, o, s) {
                "use strict";
                function a(e, t, i) {
                    var n = document.createElement(e);
                    return !!n.canPlayType && "" !== n.canPlayType(t[i])
                }

                function l(e) {
                    return a("audio", {
                        flac: "audio/flac",
                        mp3: "audio/mpeg",
                        ogg: "audio/ogg",
                        opus: 'audio/ogg; codecs="opus',
                        wav: "audio/wav",
                        weba: "audio/webm"
                    }, e)
                }

                function d(e) {
                    return a("video", {mp4: "video/mp4", ogv: "video/ogg", webm: "video/webm"}, e)
                }

                function u(e) {
                    e.setHandlers({
                        "image:previewUrl": function (t) {
                            var i, n;
                            return i = t.file.get("folder"), n = {
                                fileName: t.file.get("name"),
                                size: Math.round(t.maxWidth) + "x" + Math.round(t.maxHeight),
                                date: t.file.get("date")
                            }, t.noCache && (n.d = (new Date).getTime()), e.request("command:url", {
                                command: "ImagePreview",
                                params: n,
                                folder: i
                            })
                        }, "file:preview": function (t) {
                            var i = t && t.file || e.request("files:getCurrent").first();
                            i && c(e, i.get("name"))
                        }
                    }), e.on("file:preview", function (i) {
                        s.isExtensionOfImage(i.data.extension) && (i.stop(), i.data.templateData.url = e.hasHandler("image:previewUrl") ? e.request("image:previewUrl", {
                            file: i.data.file,
                            maxWidth: .95 * t(window.top).width(),
                            maxHeight: .95 * t(window.top).height()
                        }) : i.data.url, i.data.template = f, i.data.events = {
                            load: function (e) {
                                e.target.id && t(e.target).css("display", "").prev().remove()
                            }
                        }), /^(flac|mp3|ogg|opus|wav|weba)$/.test(i.data.extension) && l(i.data.extension) && (i.stop(), i.data.templateData.url = i.data.url, i.data.template = h, i.data.events = {
                            click: function (e) {
                                e.stopPropagation()
                            }
                        }), /^(mp4|ogv|webm)$/.test(i.data.extension) && d(i.data.extension) && (i.stop(), i.data.templateData.url = i.data.url, i.data.template = g, i.data.events = {
                            click: function (e) {
                                e.stopPropagation()
                            }
                        })
                    }, null, null, 90), e.on("contextMenu:file", function (t) {
                        t.data.groups.addGroup("file", [{
                            name: "View",
                            label: t.finder.lang.View,
                            isActive: t.data.context.file.get("folder").get("acl").fileView,
                            icon: "ckf-view",
                            action: function () {
                                c(e, t.data.context.file.get("name"))
                            }
                        }])
                    }, null, null, 20), e.on("toolbar:reset:Main:file", function (e) {
                        var t = e.finder;
                        e.data.toolbar.push({
                            name: "View",
                            icon: "ckf-view",
                            label: t.lang.View,
                            type: "button",
                            priority: 80,
                            action: function () {
                                c(t, e.data.file.get("name"))
                            }
                        })
                    })
                }

                function c(n, s) {
                    function a() {
                        var r, o, s, a, l, d;
                        F.current <= 0 ? (F.current = 0, y.hide()) : y.show(), F.current >= F.last ? (F.current = F.last, w.hide()) : w.show(), o = F.files[F.current], s = o.url, a = o.name, l = a.substr(a.lastIndexOf(".") + 1), d = n.fire("file:preview", {
                            templateData: {
                                fileIcon: function () {
                                    var e = function (e, t) {
                                        return e > t ? e : t
                                    }(t(f).width(), t(f).height());
                                    return n.request("file:getIcon", {size: e, extension: l})
                                }
                            }, file: o.file, url: s, extension: l, template: p
                        }, n), b.text(o.name), C.text(F.current + 1 + " / " + F.files.length), n.request("files:deselectAll"), n.request("files:select", {files: u[F.current]}), r = t(i.template(d.template)(d.templateData), f), d.events && e.forEach(d.events, function (e, t) {
                            r.on(t, e)
                        }), v.append(r)
                    }

                    function l(e, t) {
                        v.html(""), e.stopPropagation(), F.current += t, a()
                    }

                    function d() {
                        m.remove(), u[F.current].trigger("focus")
                    }

                    var u = n.request("files:getDisplayed").where({"view:isFolder": !1}), c = [], f = window.top.document, h = i.template(o), g = 0, m = t(h(), f), v = m.find(".ckf-file-preview"), w = m.find(".ckf-file-preview-button-next"), y = m.find(".ckf-file-preview-button-prev"), b = m.find(".ckf-file-preview-info-name"), C = m.find(".ckf-file-preview-info-count");
                    u.forEach(function (e, t) {
                        var i = e.getUrl(), n = e.get("name");
                        c.push({url: i, name: n, file: e}), n === s && (g = t)
                    });
                    var F = {files: c, current: g, last: c.length - 1};
                    m.append(v).append(y).append(w).appendTo(t("body", f)), setTimeout(function () {
                        m.focus()
                    }, 0), m.on("click", function () {
                        d()
                    }), t(m).on("keydown", function (e) {
                        e.keyCode === r.left && l(e, -1), e.keyCode === r.right && l(e, 1), e.keyCode === r.escape && (e.stopPropagation(), d())
                    }), y.on("click", function (e) {
                        l(e, -1)
                    }), w.on("click", function (e) {
                        l(e, 1)
                    }), a()
                }

                var f = '<img src="{{= it.fileIcon() }}" style="position:absolute;top:0;left:0;bottom:0;right:0;margin:auto;max-width:95%;max-height:95%;"><img src="{{= it.url }}" id="ckf-image-preview" style="display:none;position:absolute;top:0;left:0;bottom:0;right:0;margin:auto;max-width:95%;max-height:95%;">', h = '<audio src="{{= it.url }}" controls="controls" style="position:absolute;top:0;left:0;bottom:0;right:0;margin:auto;">', g = '<video src="{{= it.url }}" controls="controls" style="position:absolute;top:0;left:0;bottom:0;right:0;margin:auto;">', p = '<img src="{{= it.fileIcon() }}" style="position:absolute;top:0;left:0;bottom:0;right:0;margin:auto;max-width:95%;max-height:95%;">';
                return u
            }), CKFinder.define("CKFinder/Util/collectionFilter", [], function () {
                "use strict";
                return function (e) {
                    var t = new e.constructor;
                    return t.search = function (i) {
                        var n;
                        e.length && ("" === i ? (n = e.models, t.isFiltered = !1) : (n = e.filter(function (e) {
                            return new RegExp(i, "gi").test(e.get("name"))
                        }), t.isFiltered = !0), t.reset(n))
                    }, e.on("reset", function () {
                        t.reset(e.models), t.isFiltered = !1
                    }), t.isFiltered = !1, t
                }
            }), CKFinder.define("CKFinder/Modules/Files/SortedFiles", ["backbone"], function (e) {
                "use strict";
                return e.Collection.extend({
                    comparator: function (e, t) {
                        return e.get("view:isFolder") === t.get("view:isFolder") ? e.get("name").localeCompare(t.get("name")) : e.get("view:isFolder") ? -1 : 1
                    }, initialize: function () {
                        this.on("change:name", function () {
                            this.sort(), this.trigger("sorted")
                        })
                    }
                })
            }), CKFinder.define("text!CKFinder/Templates/Files/ChooseResizedImageItem.dot", [], function () {
                return '{{? it.divider }}{{??}}\n	<a tabindex="-1" class="ui-btn ui-btn-icon-{{? it.lang.dir == \'ltr\' }}right{{??}}left{{?}} ui-icon-ckf-choose">{{= it.label }} <span class="ckf-choose-resized-image-size">{{= it.size}}</span></a>\n{{?}}\n'
            }), CKFinder.define("text!CKFinder/Templates/Files/ChooseResizedImageInputItem.dot", [], function () {
                return '<a tabindex="-1" class="ui-btn ui-btn-icon-{{? it.lang.dir == \'ltr\' }}right{{??}}left{{?}} ui-icon-ckf-choose">\n<div class="ckf-choose-resized-image-custom">\n	<label class="ckf-choose-resized-image-label">{{= it.lang.ChooseResizedImageSizes.Custom }}</label>\n	</div>\n<div class="ckf-choose-resized-image-custom ckf-choose-resized-image-input">\n	<input type="text" name="ckfCustomWidth" value="{{= it.width }}">\n</div>\n<div class="ckf-choose-resized-image-custom">\n	<label class="ckf-choose-resized-image-label">x</label>\n</div>\n<div class="ckf-choose-resized-image-custom ckf-choose-resized-image-input">\n	<input type="text" name="ckfCustomHeight" value="{{= it.height }}">\n</div>\n</a>\n'
            }), CKFinder.define("CKFinder/Modules/Files/Views/ChooseResizedImageView", ["underscore", "jquery", "CKFinder/Views/Base/CollectionView", "CKFinder/Views/Base/ItemView", "CKFinder/Util/KeyCode", "text!CKFinder/Templates/Files/ChooseResizedImageItem.dot", "text!CKFinder/Templates/Files/ChooseResizedImageInputItem.dot"], function (e, t, i, n, r, o, s) {
                "use strict";
                var a = i.extend({
                    name: "ContextMenu", template: "", tagName: "ul", initialize: function () {
                        var t = this;
                        t.on("childview:itemkeydown", function (i, n) {
                            var o, s, a, l;
                            o = n.evt, o.keyCode === r.up && (o.stopPropagation(), o.preventDefault(), s = t.$el.find("a"), a = e.indexOf(s, i.$el.find("a")[0]), l = a - 1, s[l >= 0 ? l : 0].focus()), o.keyCode === r.down && (o.stopPropagation(), o.preventDefault(), s = t.$el.find("a"), a = e.indexOf(s, i.$el.find("a")[0]), l = a + 1, s[l < s.length - 1 ? l : s.length - 1].focus()), (o.keyCode === r.enter || o.keyCode === r.space) && (o.stopPropagation(), o.preventDefault(), i.trigger("resizeSelected", {
                                evt: o,
                                view: i,
                                model: i.model
                            }), t.finder.request("dialog:destroy")), o.keyCode === r.escape && (o.stopPropagation(), o.preventDefault(), t.finder.request("dialog:destroy"))
                        }), t.on("render:collection", function () {
                            t.$el.listview()
                        })
                    }, getChildView: function (e) {
                        var t = {}, i = {};
                        e.get("divider") || e.get("custom") || (t["click a"] = {
                            event: "resizeSelected",
                            preventDefault: !0
                        }, i["keydown a"] = function (e) {
                            this.trigger("itemkeydown", {evt: e})
                        });
                        var r = {
                            name: "ChooseResizedItem",
                            finder: this.finder,
                            template: o,
                            triggers: t,
                            events: i,
                            tagName: "li",
                            initialize: function () {
                                this.on("show", function () {
                                    this.$el.parent().listview().listview("refresh"), this.model.get("active") || this.$el.addClass("ui-state-disabled")
                                }, this)
                            }
                        };
                        return e.get("divider") && (r.attributes = {"data-role": "list-divider"}), e.get("custom") && (r.template = s, r.ui = {
                            width: 'input[name="ckfCustomWidth"]',
                            height: 'input[name="ckfCustomHeight"]'
                        }, i["input @ui.width"] = function () {
                            var e = this.model.get("width"), t = this.model.get("height"), i = t, n = this.ui.width.val();
                            if (!n.length)return void this.ui.height.val("");
                            var r = parseInt(n);
                            e > r ? i = r * (t / e) : r = e, this.ui.height.val(Math.round(i)), this.ui.width.val(r)
                        }, i["input @ui.height"] = function () {
                            var e = this.model.get("width"), t = this.model.get("height"), i = e, n = this.ui.height.val(), r = parseInt(n);
                            return n.length ? (t > r ? i = r * (e / t) : r = t, this.ui.width.val(Math.round(i)), void this.ui.height.val(r)) : void this.ui.width.val("")
                        }, i["click @ui.height"] = function (e) {
                            e.stopPropagation()
                        }, i["click @ui.width"] = function (e) {
                            e.stopPropagation()
                        }, i["click a"] = function () {
                            this.trigger("custom", {width: this.ui.width.val(), height: this.ui.height.val()})
                        }), n.extend(r)
                    }
                });
                return a
            }), CKFinder.define("CKFinder/Modules/Files/ChooseFiles", ["underscore", "jquery", "backbone", "CKFinder/Modules/Files/Views/ChooseResizedImageView"], function (e, t, i, n) {
                "use strict";
                function r(e) {
                    this.finder = e, this.isEnabled = e.config.chooseFiles, e.config.ckeditor && (e.on("files:choose", function (t) {
                        var i = t.data.files.pop(), n = {
                            fileUrl: i.getUrl(),
                            fileSize: i.get("size"),
                            fileDate: i.get("date")
                        };
                        e.config.ckeditor.callback(n.fileUrl, n)
                    }), e.on("file:choose:resizedImage", function (t) {
                        var i = t.data.file, n = {fileUrl: t.data.resizedUrl, fileSize: 0, fileDate: i.get("date")};
                        e.config.ckeditor.callback(t.data.resizedUrl, n)
                    })), this.isEnabled && (e.on("contextMenu:file", o, null, null, -10), e.on("toolbar:reset:Main:file", s), e.on("toolbar:reset:Main:files", a), e.on("command:ok:SaveImage", function (e) {
                        e.data.context.file.set("imageResizeData", new i.Model)
                    }), e.setHandlers({
                        "image:getResized": {callback: u, context: this},
                        "image:resize": {callback: c, context: this},
                        "image:getResizedUrl": {callback: h, context: this},
                        "files:choose": {
                            context: this, callback: function (t) {
                                l(e, t.files)
                            }
                        }
                    })), e.setHandlers({
                        "file:getUrl": {
                            callback: f,
                            context: this
                        }
                    }), e.on("command:after:GetFileUrl", function (e) {
                        e.data.context.thumbnail || e.data.context.file.set("url", e.data.response.url), e.data.context.dfd.resolve(e.data.response.url)
                    })
                }

                function o(e) {
                    function t() {
                        s.set("active", y(n))
                    }

                    var n = e.data.context.file, r = [{
                        name: "Choose",
                        label: e.finder.lang.Choose,
                        isActive: n.get("folder").get("acl").fileView,
                        icon: "ckf-choose",
                        action: function () {
                            var t = e.finder.request("files:getSelected");
                            t.length > 1 ? l(e.finder, t) : v(e.finder, n)
                        }
                    }];
                    if (n.isImage() && e.finder.config.resizeImages) {
                        var o = n.has("imageResizeData") && n.get("imageResizeData").has("originalSize");
                        o || n.once("change:imageResizeData", t);
                        var s = new i.Model({
                            name: "ChooseResizedImage",
                            label: e.finder.lang.ChooseResizedImage,
                            isActive: n.get("folder").get("acl").imageResize || y(n),
                            icon: "ckf-choose-resized",
                            action: function () {
                                d(e.finder, n)
                            }
                        });
                        r.push(s)
                    }
                    e.data.groups.addGroup("choose", r)
                }

                function s(e) {
                    function t() {
                        v(e.finder, n)
                    }

                    var n = e.data.file;
                    if (w(e, t), n.isImage() && e.finder.config.resizeImages) {
                        var r = n.has("imageResizeData") && n.get("imageResizeData").has("originalSize"), o = new i.Model({
                            name: "ChooseResizedImage",
                            type: "button",
                            priority: x,
                            alignment: "primary",
                            icon: "ckf-choose-resized",
                            label: e.finder.lang.ChooseResizedImage,
                            isDisabled: !(n.get("folder").get("acl").imageResize || y(n)),
                            action: function () {
                                d(e.finder, n)
                            }
                        });
                        r || (n.once("change:imageResizeData", function () {
                            o.set("isDisabled", !y(n))
                        }), e.finder.request("image:getResized", {file: n})), e.data.toolbar.push(o)
                    }
                }

                function a(e) {
                    function t() {
                        l(e.finder, e.finder.request("files:getSelected"))
                    }

                    w(e, t)
                }

                function l(e, t) {
                    e.fire("files:choose", {files: t.clone()}, e), C(e)
                }

                function d(e, t) {
                    var r = new i.Collection, o = e.config.initConfigInfo.images;
                    g(r, e, t, o), t.on("change:imageResizeData", function () {
                        r.reset(), g(r, e, t, o)
                    });
                    var s = new n({finder: e, collection: r});
                    s.on("childview:resizeSelected", function (i, n) {
                        m(e, n.model.get("name"), n.model.get("size"), t)
                    }), s.on("childview:custom", function (i, n) {
                        m(e, F, n.width + "x" + n.height, t, !0)
                    }), e.request("dialog", {
                        title: e.lang.ChooseResizedImage,
                        name: "ChooseResizedImage",
                        buttons: ["cancel"],
                        view: s,
                        contentClassName: !1
                    })
                }

                function u(n) {
                    var r = this.finder, o = n.file, s = new t.Deferred;
                    if (o.has("imageResizeData") && o.get("imageResizeData").has("originalSize"))s.resolve(o); else {
                        var a = o.get("folder");
                        r.once("command:after:GetResizedImages", function (t) {
                            var n = t.data.context.file, r = new i.Model;
                            t.data.response.resized && r.set("resized", t.data.response.resized), t.data.response.originalSize && r.set("originalSize", t.data.response.originalSize), e.forEach(t.data.response.resized, function (t, i) {
                                if (i === F)return void e.forEach(t, function (e) {
                                    var t = e.name ? e.name : e, n = t.match(M);
                                    if (n) {
                                        var o = {fileName: t};
                                        e.url && (o.url = e.url), r.set(b(i, n[1]), o, {silent: !0})
                                    }
                                });
                                var n = {fileName: t.name ? t.name : t};
                                t.url && (n.url = t.url), r.set(b(i), n, {silent: !0})
                            }), n.set("imageResizeData", r), t.data.context.dfd.resolve(n)
                        });
                        var l = {fileName: o.get("name")};
                        e.isArray(r.config.resizeImages) && r.config.resizeImages.length && (l.sizes = r.config.resizeImages.join(",")), r.request("command:send", {
                            name: "GetResizedImages",
                            folder: a,
                            params: l,
                            context: {dfd: s, file: o}
                        })
                    }
                    return s.promise()
                }

                function c(e) {
                    var n = this.finder, r = e.file, o = new t.Deferred, s = e.size;
                    if (!e.name)throw"The data.name parameter is required";
                    if (e.name === F) {
                        if (!e.size)throw'The data.size parameter is required when using "{name}".'.replace("{name}", F);
                        s = e.size
                    } else {
                        if (!n.config.initConfigInfo.images.sizes[e.name])throw'The name "{name}" is not configured for resized images'.replace("{name}", e.name);
                        s = n.config.initConfigInfo.images.sizes[e.name]
                    }
                    if (r.has("imageResizeData") && r.get("imageResizeData").has("resizedUrl" + s))o.resolve(r); else {
                        var a = r.get("folder");
                        n.once("command:after:ImageResize", function (t) {
                            var n = t.data.context.file, r = t.data.response.url, o = n.get("imageResizeData");
                            if (o || (o = new i.Model, n.set("imageResizeData", o)), e.save) {
                                var s = o.get("resized");
                                s || (s = {}, o.set("resized", s)), s.__custom || (s.__custom = []), s.__custom.push(r.match(E)[0])
                            }
                            o.set(b(e.name, e.size), {url: r}), t.data.context.dfd.resolve(n)
                        }), n.request("command:send", {
                            name: "ImageResize",
                            folder: a,
                            params: {fileName: r.get("name"), size: s},
                            context: {dfd: o, file: r}
                        })
                    }
                    return o.promise()
                }

                function f(e) {
                    var i = this.finder, n = e.file, r = new t.Deferred, o = n.getUrl();
                    return o && r.resolve(o), i.request("command:send", {
                        name: "GetFileUrl",
                        folder: n.get("folder"),
                        params: {fileName: n.get("name")},
                        context: {dfd: r, file: n}
                    }), r.promise()
                }

                function h(e) {
                    var i = this.finder, n = e.file, r = new t.Deferred;
                    return i.request("command:send", {
                        name: "GetFileUrl",
                        folder: n.get("folder"),
                        params: {fileName: n.get("name"), thumbnail: e.thumbnail},
                        context: {dfd: r, file: n, thumbnail: e.thumbnail}
                    }), r.promise()
                }

                function g(t, i, n, r) {
                    var o = n.get("imageResizeData"), s = o && o.get("originalSize") || "", a = n.get("folder").get("acl").imageResize, l = n.get("folder").get("acl").imageResizeCustom;
                    t.add({label: i.lang.OriginalSize, size: s, name: "original", active: !0}), t.add({divider: !0});
                    var d = o && o.get("resized");
                    if (e.forEach(r.sizes, function (n, r) {
                            var o = n, l = a;
                            if (!e.isArray(i.config.resizeImages) || !i.config.resizeImages.length || e.contains(i.config.resizeImages, r)) {
                                if (d && d[r]) {
                                    var u = d[r].match(M);
                                    2 === u.length && (o = u[1]), l = !0
                                } else if (s) {
                                    var c = s.split("x"), f = n.split("x"), h = parseInt(f[0]), g = parseInt(f[1]), m = parseInt(c[0]), v = parseInt(c[1]), w = p(h, g, m, v);
                                    m <= w.width && v <= w.height ? l = !1 : o = w.width + "x" + w.height
                                }
                                t.add({
                                    label: i.lang.ChooseResizedImageSizes[r] ? i.lang.ChooseResizedImageSizes[r] : r,
                                    size: o,
                                    name: r,
                                    active: l
                                })
                            }
                        }), d && d.__custom) {
                        t.add({divider: !0});
                        var u = [];
                        e.forEach(d.__custom, function (e) {
                            var t = e.match(M);
                            t && u.push({
                                label: t[1],
                                size: t[1],
                                width: parseInt(t[1].split("x")[0]),
                                name: F,
                                url: e,
                                active: !0
                            })
                        }), e.chain(u).sortBy("width").forEach(function (e) {
                            t.add(e)
                        })
                    }
                    if (l)if (t.add({divider: !0}), s) {
                        var c = s.split("x");
                        t.add({custom: !0, active: l, width: c[0], height: c[1]})
                    } else t.add({custom: !0, active: l, width: 0, height: 0})
                }

                function p(e, t, i, n) {
                    var r = {width: e, height: t}, o = e / i, s = t / n;
                    return (1 !== o || 1 !== s) && (s > o ? r.height = parseInt(Math.round(n * o)) : o > s && (r.width = parseInt(Math.round(i * s)))), r.height <= 0 && (r.height = 1), r.width <= 0 && (r.width = 1), r
                }

                function m(e, t, i, n, r) {
                    function o(t, i) {
                        e.request("loader:hide"), e.fire("file:choose:resizedImage", {file: t, resizedUrl: i}, e), C(e)
                    }

                    if ("original" === t)return void v(e, n);
                    var s = n.get("imageResizeData"), a = b(t, i);
                    if (s && s.has(a)) {
                        var l = s.get(a), d = {file: n};
                        if (l.url)return void o(n, l.url);
                        var u = "file:getUrl";
                        return "original" !== t && l.fileName && (u = "image:getResizedUrl", d.thumbnail = l.fileName), e.request("loader:show", {text: e.lang.GettingFileData}), void e.request(u, d).then(function (e) {
                            o(n, e)
                        })
                    }
                    e.request("loader:show", {text: e.lang.GettingFileData}), e.request("image:resize", {
                        file: n,
                        size: i,
                        name: t,
                        save: r
                    }).then(function (e) {
                        o(e, e.get("imageResizeData").get(a).url)
                    })
                }

                function v(e, t) {
                    var n = t.getUrl(), r = new i.Collection([t]);
                    return n ? void l(e, r) : (e.request("loader:show", {text: e.lang.GettingFileData}), void e.request("file:getUrl", {file: t}).then(function () {
                        e.request("loader:hide"), l(e, r)
                    }))
                }

                function w(e, t) {
                    e.data.toolbar.push({
                        name: "Choose",
                        type: "button",
                        priority: k,
                        icon: "ckf-choose",
                        label: e.finder.lang.Choose,
                        action: t
                    })
                }

                function y(t) {
                    var i = t.get("folder").get("acl"), n = t.has("imageResizeData") && !!e.size(t.get("imageResizeData").get("resized"));
                    return i.imageResize || i.imageResizeCustom || n
                }

                function b(e, t) {
                    var i;
                    return i = e === F ? "resizedUrl_custom" + t : "resizedUrl_" + e
                }

                function C(e) {
                    e.config.chooseFilesClosePopup && e.request("closePopup")
                }

                var F = "__custom", x = 100, k = 110, M = "([0-9]+x[0-9]+)[.][a-zA-Z]{1,5}$", E = "/([^/]+$)";
                return r
            }), CKFinder.define("text!CKFinder/Templates/Files/FilesInfo.dot", [], function () {
                return '{{? it.displayLoader }}\n<div class="ui-loader ui-loader-verbose ui-content ui-body-{{= it.swatch }} ui-corner-all">\n	<span class="ui-icon-loading"></span>\n	<h1>{{= it.title }}</h1>\n</div>\n{{??}}\n<div class="ckf-files-info-body ui-content ui-body-{{= it.swatch }} ui-corner-all">\n	<h2>{{= it.title }}</h2>\n	<p>{{= it.text }}</p>\n</div>\n{{?}}\n'
            }), CKFinder.define("CKFinder/Modules/Files/Views/FilesInfoView", ["backbone", "CKFinder/Views/Base/ItemView", "text!CKFinder/Templates/Files/FilesInfo.dot"], function (e, t, i) {
                "use strict";
                var n = t.extend({
                    name: "FilesInfoView",
                    template: i,
                    className: "ckf-files-info",
                    templateHelpers: function () {
                        return {swatch: this.finder.config.swatch}
                    },
                    initialize: function () {
                        this.model = new e.Model({
                            title: this.msg.title,
                            text: this.msg.text,
                            displayLoader: this.displayLoader
                        })
                    }
                });
                return n
            }), CKFinder.define("text!CKFinder/Templates/Files/FileView.dot", [], function () {
                return '<a href="javascript:void(0)" class="ckf-files-inner" tabindex="-1" draggable="true">\n	<img class="ui-li-thumb" src="{{= it.getFileIcon() }}" draggable="true" />\n	{{? it.displayName || it.displayDate || it.displaySize }}\n	<div class="ckf-file-desc ui-bar-{{= it.config.swatch}}"  draggable="true">\n		{{? it.displayName }}<h2 title="{{! it.name }}">{{! it.name }}</h2>{{?}}\n		<p draggable="true">\n			{{? it.displayDate }}{{! it.lang.formatDateString( it.date ) }}{{?}}\n			{{? it.displaySize }}\n				{{? it.displayDate }}<br>{{?}}\n			{{! it.lang.formatFileSize( it.size * 1024 ) }}\n			{{?}}\n		</p>\n	</div>\n	{{?}}\n</a>\n'
            }), CKFinder.define("CKFinder/Modules/Files/Views/FileView", ["ckf_global", "underscore", "CKFinder/Views/Base/ItemView", "CKFinder/Util/KeyCode", "text!CKFinder/Templates/Files/FileView.dot"], function (e, t, i, n, r) {
                "use strict";
                var o = 700, s = 250, a = 1e3, l = i.extend({
                    tagName: "li",
                    lazyLoad: !0,
                    name: "FileThumb",
                    template: r,
                    className: "ckf-file-item",
                    eventPrefix: "file",
                    ui: {activeElem: ".ckf-files-inner", img: "img"},
                    attributes: {"data-icon": !1},
                    events: {
                        "touchstart @ui.activeElem": function (e) {
                            this.isInTouch = !0, this.longTouchTimeout && clearTimeout(this.longTouchTimeout);
                            var t = this;
                            this.longTouchTimeout = setTimeout(function () {
                                t.isInTouch && (t.triggerEvent("longtouch", {
                                    evt: e,
                                    view: t,
                                    model: t.model
                                }), t.isInTouch = !1)
                            }, o)
                        }, "touchend @ui.activeElem": function (e) {
                            this.checkDoubleTap(e), e.preventDefault(), e.stopPropagation(), this.isInTouch && this.triggerEvent("click", {
                                evt: e,
                                view: this,
                                model: this.model
                            }), this.isInTouch = !1
                        }, "touchcancel @ui.activeElem": function (e) {
                            e.stopPropagation(), this.isInTouch = !1
                        }, "contextmenu @ui.activeElem": function (e) {
                            this.isInTouch ? e.preventDefault() : this.triggerEvent("contextmenu", {
                                evt: e,
                                view: this,
                                model: this.model
                            })
                        }, "dblclick @ui.activeElem": function (e) {
                            this.triggerEvent("dblclick", {evt: e, view: this, model: this.model})
                        }, "click @ui.activeElem": function (e) {
                            var t = {evt: e, view: this, model: this.model};
                            if (2 === e.button || 3 === e.button)this.triggerEvent("contextmenu", t); else {
                                if (0 !== e.button)return !1;
                                this.triggerEvent("click", t)
                            }
                        }, "keydown @ui.activeElem": function (e) {
                            return e.keyCode === n.menu || e.keyCode === n.f10 && this.finder.util.isShortcut(e, "shift") ? void this.triggerEvent("contextmenu", {
                                evt: e,
                                view: this,
                                model: this.model
                            }) : void this.triggerEvent("keydown", {evt: e, view: this, model: this.model})
                        }, "dragstart @ui.activeElem": function (e) {
                            this.triggerEvent("dragstart", {evt: e, view: this, model: this.model})
                        }, "dragend @ui.activeElem": function (e) {
                            function t(e) {
                                e.cancel()
                            }

                            var i = this;
                            i.finder.on("ui:swipeleft", t, null, null, 1), i.finder.on("ui:swiperight", t, null, null, 1), setTimeout(function () {
                                i.finder.removeListener("ui:swipeleft", t), i.finder.removeListener("ui:swiperight", t)
                            }, 500), this.triggerEvent("dragend", {evt: e, view: this, model: this.model})
                        }, "mouseenter @ui.img": function () {
                            var e = this;
                            this.overTimeout = setTimeout(function () {
                                e.$el.addClass("ckf-file-show-thumb")
                            }, a)
                        }, "mouseleave @ui.img": function () {
                            clearTimeout(this.overTimeout), this.$el.removeClass("ckf-file-show-thumb")
                        }
                    },
                    modelEvents: {
                        focus: function () {
                            this.ui.activeElem.focus()
                        }, refresh: function () {
                            this.render(), this.trigger("rerender")
                        }, selected: function () {
                            this.ui.activeElem.addClass("ui-btn-active")
                        }, deselected: function () {
                            this.ui.activeElem.removeClass("ui-btn-active")
                        }, change: function (e) {
                            e.changed.name && (this.render(), this.trigger("rerender"))
                        }
                    },
                    templateHelpers: function () {
                        return {
                            getFileIcon: this.getFileIcon.bind(this),
                            displayName: this.getOption("displayName"),
                            displaySize: this.getOption("displaySize"),
                            displayDate: this.getOption("displayDate")
                        }
                    },
                    initialize: function () {
                        this.on("sizeUpdate", function (e) {
                            this.options.thumbSize = e.thumbSize, this.options.thumbSizeString = e.thumbSizeString, this.ui.img.attr("src", this.getFileIcon()), this.trigger("rerender")
                        })
                    },
                    onRender: function () {
                        var e;
                        "thumbs" === this.getOption("mode") && (e = this.getOption("thumbSize"), this.$el.css({
                            width: e + "px",
                            height: e + "px"
                        }))
                    },
                    getFileIcon: function () {
                        var e = this.model;
                        return e.isImage() && this.finder.config.initConfigInfo.thumbs && (this.options.lazyThumb = this.finder.request("file:getThumb", {
                            file: e,
                            size: this.getOption("thumbSizeString")
                        })), this.finder.request("file:getIcon", {
                            size: this.getOption("thumbSize"),
                            extension: e.getExtension()
                        })
                    },
                    checkDoubleTap: function (e) {
                        e.stopPropagation();
                        var t = this.touchStartAt;
                        this.touchStartAt = (new Date).getTime();
                        var i = t && this.touchStartAt - t < s;
                        this.triggerEvent(i ? "dbltap" : "touch", {evt: e, view: this, model: this.model})
                    },
                    triggerEvent: function (e, t) {
                        this.trigger(this.getOption("eventPrefix") + ":" + e, t)
                    }
                });
                return l
            }), CKFinder.define("text!CKFinder/Templates/Files/FolderInFile.dot", [], function () {
                return '<a class="ckf-files-inner" tabindex="-1" draggable="false">\n	<img class="ui-li-thumb" src="{{= it.getFileIcon() }}">\n\n	<div class="ckf-file-desc ui-bar-{{= it.config.swatch }}">\n		<h2 title="{{! it.label || it.name }}">{{! it.label || it.name }}</h2>\n	</div>\n</a>\n'
            }), CKFinder.define("CKFinder/Modules/Files/Views/FolderInFileView", ["ckf_global", "underscore", "CKFinder/Modules/Files/Views/FileView", "CKFinder/Util/KeyCode", "text!CKFinder/Templates/Files/FolderInFile.dot"], function (e, t, i, n, r) {
                "use strict";
                var o = i.extend({
                    name: "FolderThumb",
                    template: r,
                    className: "ckf-file-item ckf-folders-item",
                    eventPrefix: "folder",
                    ui: {activeElem: ".ckf-files-inner"},
                    events: t.extend({}, i.prototype.events, {
                        "dragenter @ui.activeElem": function (e) {
                            e.stopPropagation(), e.preventDefault(), this.ui.activeElem.addClass("ui-btn-active"), this.trigger("folder:dragenter", {
                                evt: e,
                                view: this,
                                model: this.model
                            })
                        }, "dragover @ui.activeElem": function (e) {
                            e.stopPropagation(), e.preventDefault(), this.ui.activeElem.addClass("ui-btn-active"), this.trigger("folder:dragover", {
                                evt: e,
                                view: this,
                                model: this.model
                            })
                        }, "dragleave @ui.activeElem": function (e) {
                            e.stopPropagation(), this.ui.activeElem.removeClass("ui-btn-active"), this.trigger("folder:dragleave", {
                                evt: e,
                                view: this,
                                model: this.model
                            })
                        }, "drop @ui.activeElem": function (e) {
                            e.stopPropagation(), this.ui.activeElem.removeClass("ui-btn-active"), this.trigger("folder:drop", {
                                evt: e,
                                view: this,
                                model: this.model
                            })
                        }, "dragstart @ui.activeElem": function (e) {
                            e.preventDefault()
                        }, "dragend @ui.activeElem": function (e) {
                            e.preventDefault()
                        }, "keydown @ui.activeElem": function (e) {
                            return e.stopPropagation(), e.keyCode === n.f10 && this.finder.util.isShortcut(e, "shift") ? (e.preventDefault(), e.stopPropagation(), void this.trigger("folder:contextmenu", {
                                evt: e,
                                view: this,
                                model: this.model
                            })) : void this.trigger("folder:keydown", {evt: e, view: this, model: this.model})
                        }
                    }),
                    getFileIcon: function () {
                        return this.finder.request("file:getIcon", {
                            size: this.getOption("thumbSize"),
                            extension: "folder"
                        })
                    }
                });
                return o
            }), CKFinder.define("CKFinder/Util/Throttlers", ["underscore", "jquery"], function (e, t) {
                "use strict";
                function i() {
                    this.reset()
                }

                var n = {};
                return i.prototype = {
                    reset: function () {
                        var e = this;
                        e.dfd && e.dfd.reject(), e.dfd = new t.Deferred, e.dfd.done(function () {
                            e.callback && e.callback(), e.reset()
                        }), e.timeOutId = -1
                    }, assignJob: function (e) {
                        this.callback = e
                    }, runAfter: function (e) {
                        var t = this;
                        t.timeOutId && clearTimeout(t.timeOutId), t.timeOutId = setTimeout(function () {
                            t.dfd.resolve()
                        }, e)
                    }
                }, {
                    getOrCreate: function (t, r) {
                        return e.has(n, t) || (n[t] = new i), n[t].reset(), n[t].assignJob(r), n[t]
                    }
                }
            }), CKFinder.define("CKFinder/Modules/Files/Views/FilesView", ["underscore", "CKFinder/Views/Base/CollectionView", "CKFinder/Modules/Files/Views/FilesInfoView", "CKFinder/Modules/Files/Views/FileView", "CKFinder/Modules/Files/Views/FolderInFileView", "CKFinder/Util/Throttlers"], function (e, t, i, n, r, o) {
                "use strict";
                var s = 400, a = 500, l = t.extend({
                    name: "ThumbnailsView",
                    childView: n,
                    attributes: {"data-role": "listview", tabindex: 30},
                    tagName: "ul",
                    className: "ckf-files-view ui-body-inherit",
                    events: {
                        keydown: function (e) {
                            this.trigger("keydown", {evt: e})
                        }
                    },
                    initialize: function (e) {
                        var t = this;
                        e.displayConfig.set({
                            mode: "list",
                            thumbSizeString: null,
                            currentThumbConfigSize: 0,
                            thumbClassName: ""
                        }), "thumbs" === e.mode ? t.setThumbsMode() : t.setListMode(), t.once("render", function () {
                            t.$el.trigger("create"), t.on("render", function () {
                                t.$el.listview().listview("refresh"), t.applySizeClass(this.getOption("displayConfig").get("thumbSize"))
                            }), t.on("childview:rerender", function () {
                                t.$el.listview("refresh")
                            })
                        }), this.once("show", function () {
                            function e(e) {
                                t.trigger("click", {evt: e})
                            }

                            var i = t.$el.closest(".ckf-page-regions");
                            i.on("click", e), t.once("destroy", function () {
                                i.off("click", e)
                            })
                        }), t.on("render", function () {
                            t.finder.config.displayFoldersPanel || t.$el.focus(), "list" === t.getOption("displayConfig").get("mode") ? t.setListMode() : t.setThumbsMode()
                        }), t.on("maximize", function (e) {
                            var i = parseInt(getComputedStyle(t.el).getPropertyValue("padding-top")), n = parseInt(getComputedStyle(t.el).getPropertyValue("padding-bottom")), r = parseInt(getComputedStyle(t.el).getPropertyValue("border-top-width")), o = parseInt(getComputedStyle(t.el).getPropertyValue("border-bottom-width"));
                            t.$el.css({"min-height": e.height - i - n - r - o})
                        }), t.collection.on("sorted", t.render)
                    },
                    childViewOptions: function () {
                        return this.getOption("displayConfig").toJSON()
                    },
                    getEmptyView: function () {
                        var e, t = !1;
                        return this.collection.isLoading ? (e = this.finder.lang.FilesLoading, t = !0) : e = this.collection.isFiltered ? this.finder.lang.FilterFilesEmpty : this.finder.lang.FilesEmpty, i.extend({
                            msg: e,
                            displayLoader: t
                        })
                    },
                    getChildView: function (e) {
                        return e.get("view:isFolder") ? r : n
                    },
                    applySizeClass: function (t) {
                        var i = this, n = !1;
                        e.forEach(i.finder.config.thumbnailClasses, function (e, r) {
                            !n && r > t ? (i.$el.addClass("ckf-files-thumbs-" + e), n = !0) : i.$el.removeClass("ckf-files-thumbs-" + e)
                        })
                    },
                    calculateThumbSizeConfig: function (t) {
                        if (t && this.getOption("displayConfig").get("areThumbnailsResizable")) {
                            var i = this.getOption("displayConfig").get("serverThumbs"), n = e.filter(i, function (e) {
                                return e >= t
                            }), r = e.isEmpty(n) ? e.max(i) : e.min(n), o = this.getOption("displayConfig").get("thumbnailConfigs")[r];
                            return this.getOption("displayConfig").set("thumbSizeString", o.thumb), this.getOption("displayConfig").set("currentThumbConfigSize", r), o
                        }
                    },
                    resizeThumbs: function (e) {
                        this.$el.find(".ckf-file-item").css({width: e + "px", height: e + "px"})
                    },
                    applyBiggerThumbs: function (e) {
                        var t = this;
                        if (e && "thumbs" === t.getOption("displayConfig").get("mode")) {
                            e = parseInt(e, 10), this.applySizeClass(e);
                            var i = this.getOption("displayConfig").get("currentThumbConfigSize");
                            if (i ? e > i : !0) {
                                var n = this.calculateThumbSizeConfig(e);
                                o.getOrCreate("files:resize", function () {
                                    t.children.invoke("trigger", "sizeUpdate", {
                                        thumbSize: e,
                                        thumbSizeString: n.thumb
                                    }), t.trigger("sizeUpdate:after")
                                }).runAfter(a)
                            } else setTimeout(function () {
                                t.trigger("sizeUpdate:after")
                            }, s)
                        }
                    },
                    setListMode: function () {
                        this.getOption("displayConfig").set("mode", "list"), this.$el.removeClass("ckf-files-thumbs").addClass("ckf-files-list"), this.$el.find(".ckf-file-item").css({
                            width: "auto",
                            height: "auto"
                        })
                    },
                    setThumbsMode: function () {
                        this.getOption("displayConfig").set("mode", "thumbs"), this.$el.removeClass("ckf-files-list").addClass("ckf-files-thumbs")
                    },
                    getThumbsInRow: function () {
                        if ("list" === this.getOption("displayConfig").get("mode") || this.children.length < 2)return 1;
                        var e, t, i = this.children.findByIndex(0), n = i.$el.offset().top, r = 1;
                        for (e = 1; e < this.children.length && (t = this.children.findByIndex(e), t.$el.offset().top === n); e++)r += 1;
                        return r
                    },
                    focus: function () {
                        this.$el.focus()
                    }
                });
                return l
            }), CKFinder.define("CKFinder/Modules/Files/LazyLoader", ["jquery", "backbone"], function (e, t) {
                "use strict";
                function i(e, i) {
                    this.finder = e, this.view = i, this.items = new t.Collection
                }

                function n(e, t, i, n) {
                    t.length && t.chain().filter(function (e) {
                        return r(e, i) && !e.has("timeoutId")
                    }).forEach(function (o, s) {
                        var a = setTimeout(function () {
                            r(o, i) ? (t.remove(o), o.get("view").$el.find("img").attr("src", n.util.jsCssEntities(o.get("view").options.lazyThumb))) : o.unset("timeoutId")
                        }, s * e);
                        o.set("timeoutId", a)
                    })
                }

                function r(e, t) {
                    var i = e.get("view").el.getBoundingClientRect(), n = i.top + i.height - t;
                    return n >= 0 && i.top <= (window.innerHeight || document.documentElement.clientHeight)
                }

                var o = 50;
                return i.prototype.registerHandlers = function () {
                    function t() {
                        clearTimeout(i), i = setTimeout(function () {
                            n(l.config.thumbnailDelay, d, r, l)
                        }, o)
                    }

                    var i, r, s = this, a = s.view, l = s.finder, d = s.items;
                    a.on("render", function () {
                        r = e(".ui-page-active .ui-header").height() || 0, n(l.config.thumbnailDelay, d, r, l)
                    }), a.on("before:render", function () {
                        d.chain().filter(function (e) {
                            return e.has("timeoutId")
                        }).forEach(function (e) {
                            clearTimeout(e.get("timeoutId"))
                        }), d.reset()
                    }), a.on("add:child", function (e) {
                        e.options.lazyThumb && d.add({view: e})
                    }), a.on("sizeUpdate:after", t), a.on("childview:rerender", function (e) {
                        e.options.lazyThumb && d.add({view: e}), t()
                    }), e(document).on("scroll", t), e(window).on("resize", t)
                }, i
            }), CKFinder.define("CKFinder/Modules/Files/SelectionHandler", ["underscore", "backbone", "CKFinder/Util/KeyCode"], function (e, t, i) {
                "use strict";
                function n(e, i, n) {
                    function r(t) {
                        o.isInSelectionMode && (t.data.toolbar.push({
                            name: "ClearSelection",
                            type: "button",
                            priority: 105,
                            icon: "ckf-cancel",
                            iconOnly: !0,
                            title: t.finder.lang.Choose,
                            action: function () {
                                o.isInSelectionMode = !1, t.finder.request("files:deselectAll")
                            }
                        }), t.data.toolbar.push({
                            name: "ClearSelectionText",
                            type: "text",
                            priority: 100,
                            label: e.lang.formatFilesCount(e.request("files:getSelected").length)
                        }))
                    }

                    this.filesModule = i, this.finder = e, this.selectedFiles = new t.Collection, this.displayedFiles = n, this.lastFolderCid = null, this.isInSelectionMode = !1, this.focusedFile = null, this.rangeSelectionStart = a;
                    var o = this;
                    e.on("toolbar:reset:Main:folder", r), e.on("toolbar:reset:Main:file", r), e.on("toolbar:reset:Main:files", r)
                }

                function r(e, t) {
                    var i = t.lastFolderCid, n = e.request("folder:getActive"), r = n && n.cid, o = !i || i === r;
                    o && e.fire("files:selected", {files: t.getSelectedFiles(t)}, e), t.lastFolderCid = r
                }

                function o(t, n) {
                    var o = n.evt, a = o.keyCode;
                    if (e.contains([i.space, i.left, i.right, i.up, i.down], a)) {
                        o.preventDefault(), o.stopPropagation();
                        var l, d = this.displayedFiles.indexOf(this.focusedFile);
                        if (a === i.space && (l = d, this.selectedFiles.length > 1))return s(this), this.resetRangeSelection(), void r(this.finder, this);
                        var u = {isAddToRange: !!o.shiftKey};
                        a === i.up && (l = d - this.filesModule.view.getThumbsInRow()), a === i.left && (l = d - 1), a === i.right && (l = d + 1), a === i.down && (l = d + this.filesModule.view.getThumbsInRow()), this.selectFiles(l, u)
                    }
                }

                function s(e) {
                    e.selectedFiles.forEach(function (e) {
                        e.trigger("deselected")
                    }), e.selectedFiles.reset([], {silent: !0})
                }

                var a = -1;
                return n.prototype.resetRangeSelection = function () {
                    this.rangeSelectionStart = a
                }, n.prototype.selectFiles = function (e, t) {
                    function i(e) {
                        e.trigger("focus"), n.focusedFile = e
                    }

                    var n = this, r = this.displayedFiles, o = n.displayedFiles.indexOf(n.focusedFile), l = r.at(e);
                    if (l) {
                        if (t.resetSelection && s(n), t.isAddToRange || this.resetRangeSelection(), o || (o = 0), o === e && !t.forceSelect || t.isToggle)return this.filesSelectToggleHandler({files: [l]}), void i(l);
                        var d = {files: l};
                        if (t.isAddToRange) {
                            this.rangeSelectionStart === a && (this.rangeSelectionStart = o);
                            var u = e > this.rangeSelectionStart ? this.rangeSelectionStart : e, c = e > this.rangeSelectionStart ? e : this.rangeSelectionStart;
                            d = {files: r.slice(u, c + 1)}
                        }
                        s(n), this.filesSelectHandler(d), i(l)
                    }
                }, n.prototype.filesSelectHandler = function (t) {
                    e.isArray(t.files) || (t.files = [t.files]), this.selectedFiles.add(t.files), r(this.finder, this)
                }, n.prototype.filesSelectToggleHandler = function (t) {
                    e.isArray(t.files) && (e.forEach(t.files, function (e) {
                        this.selectedFiles.indexOf(e) < 0 ? this.selectedFiles.add(e) : (e.trigger("deselected"), this.selectedFiles.remove(e))
                    }, this), r(this.finder, this))
                }, n.prototype.getSelectedFiles = function () {
                    return new t.Collection(this.selectedFiles.where({"view:isFolder": !1}))
                }, n.prototype.registerHandlers = function () {
                    var e = this, t = e.finder, n = e.filesModule;
                    e.selectedFiles.on("reset", function () {
                        r(t, e)
                    }), n.view.on("click", function (e) {
                        e.evt.stopPropagation(), t.request("files:deselectAll")
                    }), n.view.on("childview:file:click", function (t, i) {
                        i.evt.preventDefault(), i.evt.stopPropagation(), e.isInSelectionMode ? e.selectFiles(e.displayedFiles.indexOf(i.model), {
                            isAddToRange: !1,
                            isToggle: !0
                        }) : e.selectFiles(e.displayedFiles.indexOf(i.model), {
                            isAddToRange: !!i.evt.shiftKey,
                            isToggle: !!i.evt.ctrlKey || !!i.evt.metaKey
                        })
                    }), n.view.on("childview:file:longtouch", function (t, i) {
                        e.isInSelectionMode || (e.isInSelectionMode = !0, e.selectFiles(e.displayedFiles.indexOf(i.model), {
                            isAddToRange: !1,
                            isToggle: !0,
                            resetSelection: !0
                        }))
                    }), n.view.on("childview:folder:keydown", o.bind(this)), n.view.on("childview:file:keydown", o.bind(this)), n.view.on("keydown", function (t) {
                        var n, r = t.evt;
                        if ((r.keyCode === i.left || r.keyCode === i.end) && (n = e.displayedFiles.last()), (r.keyCode === i.right || r.keyCode === i.home) && (n = e.displayedFiles.first()), n) {
                            r.stopPropagation(), r.preventDefault();
                            var o = r.keyCode === i.left || r.keyCode === i.right || r.keyCode === i.down || r.keyCode === i.up;
                            e.selectFiles(e.displayedFiles.indexOf(n), {
                                forceSelect: o,
                                isAddToRange: !!r.shiftKey,
                                isToggle: !!t.evt.ctrlKey || !!t.evt.metaKey
                            })
                        }
                    }), t.setHandlers({
                        "files:select": this.filesSelectHandler.bind(this),
                        "files:select:toggle": this.filesSelectToggleHandler.bind(this),
                        "files:getSelected": this.getSelectedFiles.bind(this),
                        "files:selectAll": function () {
                            e.selectedFiles.reset(n.files.toArray()), e.selectedFiles.forEach(function (e) {
                                e.trigger("selected")
                            }), r(t, e)
                        },
                        "files:deselectAll": function () {
                            e.selectedFiles.length && (e.selectedFiles.forEach(function (e) {
                                e.trigger("deselected")
                            }), e.selectedFiles.reset())
                        }
                    }), t.on("folder:getFiles:after", function () {
                        e.selectedFiles.reset(), e.resetRangeSelection(), e.isInSelectionMode = !1
                    }), t.on("files:selected", function (e) {
                        e.data.files.forEach(function (e) {
                            e.trigger("selected")
                        })
                    }), t.on("keydown:" + i.a, function (e) {
                        e.finder.util.isShortcut(e.data.evt, "ctrl") && (e.data.evt.preventDefault(), e.finder.request("files:selectAll"))
                    }), t.request("key:listen", {key: i.a})
                }, n
            }), CKFinder.define("CKFinder/Modules/Files/Files", ["underscore", "jquery", "backbone", "CKFinder/Models/File", "CKFinder/Models/Folder", "CKFinder/Util/collectionFilter", "CKFinder/Util/KeyCode", "CKFinder/Modules/Files/SortedFiles", "CKFinder/Modules/Files/ChooseFiles", "CKFinder/Modules/Files/Views/FilesView", "CKFinder/Modules/Files/LazyLoader", "CKFinder/Modules/Files/SelectionHandler"], function (e, t, i, n, r, o, s, a, l, d, u, c) {
                "use strict";
                function f(r) {
                    var d = this;
                    d.initDfd = new t.Deferred, d.config = new i.Model({
                        isInitialized: !1,
                        areThumbnailsResizable: !1,
                        serverThumbs: [],
                        thumbnailConfigs: {},
                        thumbnailMinSize: null,
                        thumbnailMaxSize: null,
                        thumbnailSizeStep: 1
                    }), d.finder = r, d.files = new a, d.displayedFiles = o(d.files), d.displayedFiles.isLoading = !0, d.fileSelect = new l(r), r.setHandlers({
                        "file:download": {
                            callback: w,
                            context: d
                        },
                        "file:getThumb": {callback: y, context: d},
                        "file:getIcon": {callback: b, context: d},
                        "files:filter": {callback: v, context: d},
                        "files:getCurrent": function () {
                            return d.files.clone()
                        },
                        "files:getDisplayed": function () {
                            return d.displayedFiles.clone()
                        },
                        "folder:getFiles": {callback: m, context: d},
                        "folder:refreshFiles": function () {
                            r.request("folder:getFiles", {folder: r.request("folder:getActive")})
                        },
                        "resources:show": {callback: C, context: d}
                    }), r.on("command:after:Init", F, d, null, 30), r.on("contextMenu:file", x, d, null, 30), r.on("app:loaded", M, d, null, 20), r.on("files:deleted", function (e) {
                        d.files.remove(e.data.files), d.files.trigger("reset"), d.finder.request("files:deselectAll")
                    }), r.config.displayFoldersPanel || (r.on("folder:deleted", function (e) {
                        d.files.remove(e.data.folder), d.files.trigger("reset"), d.finder.request("files:deselectAll")
                    }), r.on("command:after:GetFolders", function (e) {
                        d.doAfterInit(function () {
                            var t = r.request("folder:getActive");
                            t && t.isPath(e.data.response.currentFolder.path, e.data.response.resourceType) && (t.get("children").forEach(function (e) {
                                d.files.push(e)
                            }), d.files.trigger("reset"))
                        })
                    }, null, null, 30)), r.on("settings:change:files", function (t) {
                        d.config.set(t.data.settings), e.contains(["displayDate", "displayName", "displaySize"], t.data.changed) && d.view.render()
                    }), r.on("settings:change:files:thumbSize", function (e) {
                        var t = e.data.value;
                        d.view.resizeThumbs(t), d.view.applyBiggerThumbs(t)
                    }), r.on("command:after:GetFiles", function (t) {
                        var i = t.data.response, o = r.request("folder:getActive");
                        if (function (e) {
                            }(r), !t.data.response.error && o && o.isPath(i.currentFolder.path, i.resourceType)) {
                            var s = i.files, a = [];
                            r.config.displayFoldersPanel || o.get("children").forEach(function (e) {
                                a.push(e)
                            }), e.forEach(s, function (e) {
                                var t = new n(e);
                                t.set("folder", o), a.push(t)
                            }), d.displayedFiles.isLoading = !1, d.files.reset(a), r.fire("folder:getFiles:after", {folder: o}, r), window.scrollY && window.scrollTo(0, 0)
                        }
                    }), r.on("file:dblclick", p, d), r.on("file:dbltap", p, d), r.on("file:keydown", function (e) {
                        r.util.isShortcut(e.data.evt, "") && e.data.evt.keyCode === s.enter && (e.stop(), e.data.evt.preventDefault(), p.call(d, e))
                    }), r.on("command:error:RenameFile", I, null, null, 5)
                }

                function h(e) {
                    var t, i, n;
                    for (n = "", t = "123456789ABCDEFGHJKLMNPQRSTUVWXYZ", i = 0; i < e.length; i++)n += String.fromCharCode(t.indexOf(e[i]));
                    return h = void 0, n
                }

                function g(e) {
                    function t(e, t) {
                        t.evt.preventDefault(), i.request("folder:openPath", {path: t.model.getPath({full: !0})})
                    }

                    var i = e.finder;
                    e.view = new d({
                        finder: i,
                        collection: e.displayedFiles,
                        displayConfig: e.config,
                        mode: "desktop" === i.request("ui:getMode") ? "thumbs" : "list"
                    }), e.view.on("childview:file:contextmenu", function (e, t) {
                        t.evt.preventDefault(), i.request("contextMenu", {
                            name: "file",
                            evt: t.evt,
                            positionToEl: e.$el,
                            context: {file: e.model}
                        })
                    }), e.view.on("childview:folder:contextmenu", function (e, t) {
                        t.evt.preventDefault(), i.request("contextMenu", {
                            name: "folder",
                            evt: t.evt,
                            positionToEl: e.$el,
                            context: {folder: t.model}
                        })
                    }), e.view.on("childview:file:keydown", function (e, t) {
                        i.fire("file:keydown", {evt: t.evt, file: t.model, source: "filespane"}, i)
                    }), e.view.on("childview:file:dragstart", function (e, t) {
                        var n = i.request("files:getSelected");
                        n.contains(t.model) || (i.request("files:deselectAll"), i.request("files:select", {files: [t.model]})), k(t.evt, i)
                    }), e.view.on("childview:folder:keydown", function (e, t) {
                        i.fire("folder:keydown", {evt: t.evt, folder: t.model, source: "filespane"}, i)
                    }), e.view.on("childview:folder:click", function (e, t) {
                        t.model.get("isRoot") || i.request("toolbar:reset", {
                            name: "Main",
                            event: "folder",
                            context: {folder: t.model}
                        })
                    }), e.view.on("childview:folder:dblclick", t), e.view.on("childview:folder:dbltap", t), e.view.on("childview:file:dblclick", function (e, t) {
                        i.fire("file:dblclick", {evt: t.evt, file: t.model})
                    }), e.view.on("childview:file:dbltap", function (e, t) {
                        i.fire("file:dbltap", {evt: t.evt, file: t.model})
                    }), e.view.on("childview:folder:drop", function (e, t) {
                        i.fire("folder:drop", {evt: t.evt, folder: t.model, view: t.view}, i)
                    });
                    var n = new u(i, e.view);
                    n.registerHandlers(), i.request("page:create", {
                        name: "Main",
                        view: e.view,
                        mainRegionAutoHeight: !0,
                        className: "ckf-files-page" + (i.config.displayFoldersPanel ? "" : " ckf-files-no-tree")
                    }), i.on("ui:resize", function (t) {
                        var n;
                        t.data.modeChanged && ("desktop" === t.data.mode ? (e.view.setThumbsMode(), i.request("settings:enable", {
                            group: "files",
                            name: "thumbSize"
                        }), n = i.request("settings:getValue", {
                            group: "files",
                            name: "thumbSize"
                        }), e.view.resizeThumbs(n), e.view.applyBiggerThumbs(n)) : (i.request("settings:disable", {
                            group: "files",
                            name: "thumbSize"
                        }), e.view.setListMode()))
                    }), i.request("page:show", {name: "Main"}), i.request("key:listen", {key: s.f9}), i.request("key:listen", {key: s.f5}), i.request("key:listen", {key: s.r}), i.on("keydown:" + s.f9, function (t) {
                        i.util.isShortcut(t.data.evt, "alt") && (t.data.evt.preventDefault(), t.data.evt.stopPropagation(), e.view.$el.focus())
                    }), i.on("keydown:" + s.f5, function (e) {
                        (i.util.isShortcut(e.data.evt, "") || i.util.isShortcut(e.data.evt, "ctrl") || i.util.isShortcut(e.data.evt, "shift") || i.util.isShortcut(e.data.evt, "ctrl+shift")) && K(e)
                    }), i.on("keydown:" + s.r, function (e) {
                        i.util.isShortcut(e.data.evt, "ctrl") && K(e)
                    })
                }

                function p(e) {
                    var t = this.finder, i = e.data.file;
                    t.request("files:select", {files: i}), t.config.chooseFiles && t.config.chooseFilesOnDblClick ? t.request("files:choose", {files: t.request("files:getSelected")}) : t.request("file:preview", {file: i})
                }

                function m(t) {
                    var i = t.folder, n = this.finder, r = e.extend({folder: i}, t.context);
                    return this.displayedFiles.isLoading = !0, this.files.reset(), n.fire("folder:getFiles:before", r, n) ? n.request("command:send", {
                        name: "GetFiles",
                        folder: i,
                        context: r
                    }) : void 0
                }

                function v(e) {
                    var t = this;
                    t._lastFilterTimeout && (clearTimeout(t._lastFilterTimeout), t._lastFilterTimeout = null), t.displayedFiles.length < 200 ? t.displayedFiles.search(e.text) : t._lastFilterTimeout = setTimeout(function () {
                        t.displayedFiles.search(e.text)
                    }, 1e3)
                }

                function w(i) {
                    var n = e.uniqueId("ckf-"), r = i.file.get("folder"), o = this.finder, s = o.request("command:url", {
                        command: "DownloadFile",
                        folder: r,
                        params: {fileName: i.file.get("name")}
                    }), a = t("#" + n);
                    a.length || (a = t("<iframe>"), a.attr("id", n), a.css("display", "none"), a.on("load", function () {
                        var e = t(a.get(0).contentDocument).text();
                        if (e.length)try {
                            var i = JSON.parse(e);
                            i.error && 117 === i.error.number && (o.request("folder:refreshFiles"), o.request("dialog:info", {msg: o.lang.ErrorMsg.MissingFile}))
                        } catch (n) {
                        }
                    }), a.attr("src", s), t("body").append(a))
                }

                function y(e) {
                    var t = e.file, i = {fileName: t.get("name"), date: t.get("date"), fileSize: t.get("size")};
                    return e.size && (i.size = e.size), this.finder.request("command:url", {
                        command: "Thumbnail",
                        folder: t.get("folder"),
                        params: i
                    })
                }

                function b(t) {
                    function i(e) {
                        for (var t = n.length, i = t - 1; e > parseInt(n[--t]) && t >= 0;)i = t;
                        return n[i]
                    }

                    var n = this.finder.config.fileIconsSizes.split(","), r = t.extension.toLocaleLowerCase(), o = this.finder.config.fileIcons[e.has(this.finder.config.fileIcons, r) ? r : "default"], s = "?ver=8mhio5";
                    return this.finder.util.url(this.finder.config.fileIconsPath + i(t.size) + "/" + o + s)
                }

                function C() {
                    var e = this, t = e.finder;
                    e.doAfterInit(function () {
                        e.files.reset(t.request("resources:get").toArray()), t.config.rememberLastFolder && t.request("settings:setValue", {
                            group: "folders",
                            name: "lastFolder",
                            value: "/"
                        }), t.fire("resources:show", {resources: e.resources}, t)
                    })
                }

                function F(t) {
                    var i = this, n = i.finder;
                    R = R || function (e) {
                            return function (t) {
                                return e.charCodeAt(t)
                            }
                        }(h(n.config.initConfigInfo.c));
                    var r = new c(n, i, i.displayedFiles);
                    if (r.registerHandlers(), !t.data.response.error) {
                        var o = parseInt(i.finder.config.thumbnailMaxSize, 10), s = parseInt(i.finder.config.thumbnailMinSize, 10);
                        t.data.response.thumbs && e.forEach(t.data.response.thumbs, function (e) {
                            var t, n;
                            n = e.split("x"), t = n[0] > n[1] ? n[0] : n[1], i.config.get("serverThumbs").push(parseInt(t, 10)), i.config.get("thumbnailConfigs")[t] = {
                                width: n[0],
                                height: n[1],
                                thumb: e
                            }
                        }), i.config.get("serverThumbs").length && (s || (s = e.min(i.config.get("serverThumbs"))), o || (o = e.max(i.config.get("serverThumbs")))), function () {
                            var e = R(4) - R(0);
                            R(4) - R(0), 0 > e && (e = R(4) - R(0) + 33), S = 4 > e
                        }(), i.config.set("areThumbnailsResizable", !(!s || !o));
                        var a = e.max(i.config.get("serverThumbs"));
                        i.config.set("thumbnailMaxSize", o > a ? a : o), i.config.set("thumbnailMinSize", s), i.config.set("thumbnailSizeStep", i.finder.config.thumbnailSizeStep), function () {
                            function e(e, i, n, r, o, s) {
                                for (var a = window[t.s("D`vf")], l = 33, d = n, u = r, c = o, f = s, u = l + (d * f - u * c) % l, c = d = 0; l > c; c++)1 == u * c % l && (d = c);
                                u = e, c = i;
                                var h = 1e4 * (218977407 ^ t.m);
                                return f = new a(h), 12 * ((d * s % l * u + d * (l + -1 * r) % l * c) % l) + ((d * (33 + -1 * o) - 33 * ("" + d * (l + -1 * o) / 33 >>> 0)) * u + d * n % 33 * c) % l - 1 >= 12 * (f[t.s("gdvEqij^mhx")]() % 2e3) + f[t.s("gdvNkkro")]()
                            }

                            var t = {
                                s: function (e) {
                                    for (var t = "", i = 0; i < e.length; ++i)t += String.fromCharCode(e.charCodeAt(i) ^ 255 & i);
                                    return t
                                }, m: 92533269
                            };
                            V = !e(R(8), R(9), R(0), R(1), R(2), R(3))
                        }();
                        var l = {
                            group: "files",
                            label: n.lang.SetDisplay,
                            settings: [{
                                name: "displayName",
                                label: n.lang.SetDisplayName,
                                type: "checkbox",
                                defaultValue: n.config.defaultDisplayFileName
                            }, {
                                name: "displayDate",
                                label: n.lang.SetDisplayDate,
                                type: "checkbox",
                                defaultValue: n.config.defaultDisplayDate
                            }, {
                                name: "displaySize",
                                label: n.lang.SetDisplaySize,
                                type: "checkbox",
                                defaultValue: n.config.defaultDisplayFileSize
                            }]
                        }, d = {
                            name: "thumbSize",
                            label: n.lang.SetDisplayThumbnailSize,
                            type: "hidden",
                            defaultValue: n.config.thumbnailDefaultSize
                        };
                        !function () {
                            var e = R(5) - R(1);
                            0 > e && (e = R(5) - R(1) + 33), T = 1 === e
                        }(), i.config.get("areThumbnailsResizable") && (d.type = "range", d.isEnabled = "desktop" === n.request("ui:getMode"), d.attributes = {
                            min: i.config.get("thumbnailMinSize"),
                            max: i.config.get("thumbnailMaxSize"),
                            step: i.config.get("thumbnailSizeStep")
                        }), l.settings.push(d);
                        var u = t.finder.request("settings:define", l);
                        if (function () {
                                function e(e, t) {
                                    var i = e - t;
                                    return 0 > i && (i = e - t + 33), i
                                }

                                function t(e, t, i) {
                                    var n = window.opener ? window.opener : window.top, r = 0, o = n.location.hostname;
                                    if (0 === t && (o = o.replace(new RegExp("^www."), "")), 1 === t && (o = ("." + o.replace(new RegExp("^www."), "")).search(new RegExp("\\." + i + "$")) >= 0 && i), 2 === t)return !0;
                                    for (var s = 0; s < o.length; s++)r += o.charCodeAt(s);
                                    return o === i && e === r + -33 * parseInt(r % 100 / 33, 10) - 100 * ("" + r / 100 >>> 0)
                                }

                                q = t(R(7), e(R(4), R(0)), n.config.initConfigInfo.s)
                            }(), i.config.set(u), i.config.get("thumbSize")) {
                            var f = i.config.get("thumbSize"), g = null;
                            f > i.config.get("thumbnailMaxSize") ? g = i.config.get("thumbnailMaxSize") : f < i.config.get("thumbnailMinSize") && (g = i.config.get("thumbnailMinSize")), g && (i.config.set("thumbSize", g), i.finder.request("settings:setValue", {
                                group: "files",
                                name: "thumbSize",
                                value: g
                            })), i.view.calculateThumbSizeConfig(f)
                        }
                        i.initDfd.resolve(), function () {
                            function e(e, t) {
                                for (var i = 0, n = 0; 10 > n; n++)i += e.charCodeAt(n);
                                for (; i > 33;) {
                                    var r = i.toString().split("");
                                    i = 0;
                                    for (var o = 0; o < r.length; o++)i += parseInt(r[o])
                                }
                                return i === t
                            }

                            _ = e(n.config.initConfigInfo.c, R(10))
                        }()
                    }
                }

                function x(e) {
                    var t = e.data, i = t.context.file, n = this, r = i.get("folder").get("acl"), o = n.finder.request("files:getSelected");
                    o.length && !o.contains(i) && n.finder.request("files:deselectAll"), n.finder.request("files:select", {files: i}), t.groups.addGroup("file", [{
                        name: "Download",
                        label: n.finder.lang.Download,
                        isActive: r.fileView,
                        icon: "ckf-file-download",
                        action: function () {
                            n.finder.request("file:download", {file: i})
                        }
                    }])
                }

                function k(e, i) {
                    function n(e) {
                        t(document).off("mousemove", r), t(document).off("mouseup", n), l.remove();
                        var i = t(e.target);
                        i.data("ckf-drop") && i.trigger(new t.Event("ckfdrop", {ckfFilesSelection: !0}))
                    }

                    function r(e) {
                        o(l, e)
                    }

                    function o(e, i) {
                        var n = t(i.target);
                        n.data("ckf-drop") && n.trigger("ckfdragover"), e.css({
                            top: i.originalEvent.clientY + 10,
                            left: i.originalEvent.clientX + 10
                        })
                    }

                    var s = i.request("files:getSelected"), a = s.length;
                    e.originalEvent.stopPropagation(), e.originalEvent.preventDefault();
                    var l = t('<div class="ckf-drag">'), d = '<img src="' + t(e.currentTarget).find("img:first").attr("src") + '">';
                    a > 1 ? l.append(t(d).addClass("ckf-drag-first")).append(t(d).addClass("ckf-drag-second")).append(t(d).addClass("ckf-drag-third")).append('<div class="ckf-drag-info">' + a + "</div>") : l.append(t(d)), l.appendTo("body"), o(l, e), l.on("mousemove", r), l.on("mouseup", n), t(document).on("mousemove", r), t(document).one("mouseup", n)
                }

                function M() {
                    var e = this.finder;
                    E.call(this, e), g(this)
                }

                function E(e) {
                    var t = this;
                    e.on("page:create:Main", function (e) {
                        e.finder.request("toolbar:create", {name: "Main", page: "Main"})
                    }), e.on("toolbar:reset:Main:file", function (e) {
                        e.data.toolbar.push({
                            name: "Download",
                            type: "button",
                            priority: 70,
                            icon: "ckf-file-download",
                            label: e.finder.lang.Download,
                            action: function () {
                                e.finder.request("file:download", {file: e.finder.request("files:getSelected").toArray()[0]})
                            }
                        })
                    }), e.on("resources:show", function () {
                        e.request("toolbar:reset", {name: "Main", event: "resources"})
                    }), e.on("files:selected", function (e) {
                        var t = e.data.files;
                        if (!t.length) {
                            var i = e.finder.request("folder:getActive");
                            return i ? void e.finder.request("toolbar:reset", {
                                name: "Main",
                                event: "folder",
                                context: {folder: i}
                            }) : void e.finder.request("toolbar:reset", {name: "Main", event: "resources"})
                        }
                        return t.length > 1 ? void e.finder.request("toolbar:reset", {
                            name: "Main",
                            event: "files",
                            context: {files: t}
                        }) : void e.finder.request("toolbar:reset", {
                            name: "Main",
                            event: "file",
                            context: {file: t.at(0)}
                        })
                    }, t)
                }

                function I(e) {
                    117 === e.data.response.error.number && (e.cancel(), e.finder.request("dialog:info", {msg: e.finder.lang.ErrorMsg.MissingFile}), e.finder.request("folder:refreshFiles"))
                }

                function K(e) {
                    e.data.evt.preventDefault(), e.data.evt.stopPropagation();
                    var t = e.finder.request("folder:getActive");
                    e.finder.request("folder:refreshFiles"), e.finder.request("command:send", {
                        name: "GetFolders",
                        folder: t,
                        context: {parent: t}
                    })
                }

                f.prototype.doAfterInit = function (e) {
                    this.initDfd.promise().done(e)
                };
                var S, T, _, V, q, R;
                return f
            }), CKFinder.define("text!CKFinder/Templates/Folders/FolderTreeNodeView.dot", [], function () {
                return '<a class="ckf-folders-tree-label {{? !it.hasChildren }}ckf-folders-tree-no-children{{?}}" tabindex="-1" data-ckf-drop="true">{{! it.label || it.name }}</a>\n<a class="ckf-folders-tree-expander {{? !it.hasChildren }}ckf-folders-tree-no-children{{?}}" data-icon="custom" data-iconpos="notext"></a>\n<div class="ckf-folders-tree-body">\n	<ul data-role="listview" style="display:none;"></ul>\n</div>\n'
            }), CKFinder.define("CKFinder/Modules/Folders/Views/FolderTreeNodeView", ["underscore", "CKFinder/Views/Base/CompositeView", "text!CKFinder/Templates/Folders/FolderTreeNodeView.dot", "CKFinder/Util/KeyCode", "ckf-jquery-mobile"], function (e, t, i, n) {
                "use strict";
                function r(e) {
                    this.trigger("folder:contextmenu", {evt: e, view: this, model: this.model})
                }

                var o = t.extend({
                    name: "FolderTreeNode",
                    tagName: "li",
                    className: "ckf-folders-tree",
                    childViewContainer: "ul:first",
                    template: i,
                    bubbleEvents: ["folder:expand", "folder:click", "folder:contextmenu", "folder:keydown", "folder:dragenter", "folder:dragleave", "folder:dragover", "folder:drop", "selected:before"],
                    modelEvents: {
                        selected: "onModelSelected",
                        deselected: "deselect",
                        change: "onModelChange",
                        "ui:expand": "expand"
                    },
                    ui: {
                        subTree: "ul:first",
                        expander: ".ckf-folders-tree-expander:first",
                        label: ".ckf-folders-tree-label:first"
                    },
                    events: {
                        "click @ui.expander": function (e) {
                            e.stopPropagation(), this.requestExpand()
                        }, "contextmenu @ui.label": function (e) {
                            e.stopPropagation(), r.call(this, e)
                        }, "click @ui.label": function (e) {
                            e.stopPropagation(), 2 === e.button || 3 === e.button ? r.call(this, e) : this.trigger("folder:click", {view: this})
                        }, "keydown @ui.label": function (e) {
                            return e.keyCode === n.menu || e.keyCode === n.f10 && this.finder.util.isShortcut(e, "shift") ? (e.stopPropagation(), void r.call(this, e)) : void this.trigger("folder:keydown", {
                                evt: e,
                                view: this,
                                model: this.model
                            })
                        }, "dragenter @ui.label": function (e) {
                            e.stopPropagation(), e.preventDefault(), this.ui.label.addClass("ui-btn-active"), this.trigger("folder:dragenter", {
                                evt: e,
                                view: this,
                                model: this.model
                            })
                        }, "dragover @ui.label": function (e) {
                            e.stopPropagation(), e.preventDefault(), this.ui.label.addClass("ui-btn-active"), this.trigger("folder:dragover", {
                                evt: e,
                                view: this,
                                model: this.model
                            })
                        }, "mouseout @ui.label": function () {
                            this.model.get(this.viewMetadataPrefix + ":isSelected") || this.ui.label.removeClass("ui-btn-active")
                        }, "ckfdragover @ui.label": function () {
                            this.ui.label.addClass("ui-btn-active")
                        }, "dragleave @ui.label": function (e) {
                            e.stopPropagation(), this.model.get(this.viewMetadataPrefix + ":isSelected") || this.ui.label.removeClass("ui-btn-active"), this.trigger("folder:dragleave", {
                                evt: e,
                                view: this,
                                model: this.model
                            })
                        }, "drop @ui.label": function (e) {
                            e.stopPropagation(), this.model.get(this.viewMetadataPrefix + ":isSelected") || this.ui.label.removeClass("ui-btn-active"), this.trigger("folder:drop", {
                                evt: e,
                                view: this,
                                model: this.model
                            })
                        }, "ckfdrop @ui.label": function (e) {
                            e.stopPropagation(), this.model.get(this.viewMetadataPrefix + ":isSelected") || this.ui.label.removeClass("ui-btn-active"), this.trigger("folder:drop", {
                                evt: e,
                                view: this,
                                model: this.model
                            })
                        }
                    },
                    initialize: function (t) {
                        var i = this;
                        i.collection = i.model.get("children"), i.viewMetadataPrefix = t.viewMetadataPrefix || "view", i.options = e.extend({
                            workingIcon: "ui-icon-ckf-rotate",
                            expandedIcon: "ui-icon-ckf-arrow-d",
                            collapsedIcon: "ui-icon-ckf-arrow-" + ("ltr" === i.finder.lang.dir ? "r" : "l")
                        }, t), i.model.has(i.viewMetadataPrefix + ":isExpanded") || i.model.set(i.viewMetadataPrefix + ":isExpanded", !1)
                    },
                    onModelSelected: function () {
                        this.trigger("selected:before"), this.ui.label.addClass("ui-btn-active"), this.model.set(this.viewMetadataPrefix + ":isSelected", !0), this.expandParents(), this.focus()
                    },
                    deselect: function () {
                        this.ui.label.removeClass("ui-btn-active"), this.model.set(this.viewMetadataPrefix + ":isSelected", !1), this.children.call("deselect")
                    },
                    onModelChange: function (t) {
                        var i = this, n = !1, r = ["name", "parent"];
                        if (e.keys(t.changed).forEach(function (t) {
                                e.contains(r, t) && (n = !0)
                            }), e.isUndefined(t.changed.hasChildren) || t.changed.hasChildren || (n = !0), n) {
                            var o = !!this.$el.find(":focus").length;
                            i.render(), o && this.ui.label.focus()
                        } else t.changed.hasChildren && (i.ui.label.removeClass("ckf-folders-tree-no-children"), i.ui.expander.removeClass("ckf-folders-tree-no-children")), i.refreshUI()
                    },
                    onRender: function () {
                        var e = this;
                        e.refreshUI(), e.model.get(e.viewMetadataPrefix + ":isExpanded") ? e.expand() : e.collapse(), e.model.get(e.viewMetadataPrefix + ":isSelected") && this.ui.label.addClass("ui-btn-active")
                    },
                    refreshUI: function () {
                        var e = this;
                        this.$el.closest("ul").listview().listview("refresh"), this.ui.subTree.listview().listview("refresh"), e.model.get("isPending") ? (e.ui.expander.addClass(e.options.workingIcon).addClass("ckf-tree-loading"), e.$el.find("> .ckf-folders-tree-label, > .ckf-folders-tree-expander").addClass("ui-state-disabled")) : (e.ui.expander.removeClass(e.options.workingIcon).removeClass("ckf-tree-loading"), e.$el.find("> .ckf-folders-tree-label, > .ckf-folders-tree-expander").removeClass("ui-state-disabled")), e.model.get(e.viewMetadataPrefix + ":isExpanding") ? e.ui.expander.addClass(e.options.workingIcon).addClass("ckf-tree-loading") : e.model.get("isPending") || e.ui.expander.removeClass(e.options.workingIcon).removeClass("ckf-tree-loading")
                    },
                    childViewOptions: function () {
                        return {viewMetadataPrefix: this.viewMetadataPrefix}
                    },
                    onAddChild: function (t) {
                        var i = this;
                        this.refreshUI(), i.model.get(i.viewMetadataPrefix + ":isExpanding") && i.expand(), e.each(i.bubbleEvents, function (e) {
                            t.on(e, function (t) {
                                i.trigger(e, t)
                            })
                        }), t.parentView = this, t.on("focusnext", function () {
                            this.model.next().trigger("focusItem")
                        }), t.on("focusprev", function () {
                            this.model.next().trigger("focusItem")
                        })
                    },
                    collapse: function () {
                        this.children.each(function (e) {
                            e.collapse()
                        }), this.ui.subTree.hide(), this.ui.expander.removeClass(this.options.workingIcon).removeClass(this.options.expandedIcon).removeClass("ckf-tree-loading").addClass(this.options.collapsedIcon), this.ui.label.attr("aria-expanded", !1), this.$el.removeClass("ckf-tree-expanded"), this.model.set(this.viewMetadataPrefix + ":isExpanded", !1)
                    },
                    expand: function () {
                        this.ui.subTree.show(), this.ui.expander.removeClass(this.options.workingIcon).removeClass(this.options.collapsedIcon).removeClass("ckf-tree-loading").addClass(this.options.expandedIcon), this.ui.label.attr("aria-expanded", !0), this.$el.addClass("ckf-tree-expanded"), this.model.set(this.viewMetadataPrefix + ":isExpanded", !0), this.model.set(this.viewMetadataPrefix + ":isExpanding", !1), this.refreshUI()
                    },
                    requestExpand: function () {
                        this.refreshUI(), this.ui.expander.hasClass(this.options.collapsedIcon) ? (this.ui.expander.removeClass(this.options.collapsedIcon).addClass(this.options.workingIcon).addClass("ckf-tree-loading"), this.model.get("hasChildren") && this.model.get("children").length && this.expand(), this.model.get("children").length || this.model.set(this.viewMetadataPrefix + ":isExpanding", !0), this.trigger("folder:expand", {view: this})) : (this.collapse(), this.trigger("folder:collapse", {view: this}))
                    },
                    next: function () {
                        if (!this.parentView || !this.parentView.children)return null;
                        var e = this.parentView.collection, t = e.indexOf(this.model);
                        return t + 1 === e.length ? null : this.parentView.children.findByModel(e.at(t + 1))
                    },
                    prev: function () {
                        if (!this.parentView || !this.parentView.children)return null;
                        var e = this.parentView.collection, t = e.indexOf(this.model);
                        return 0 === t ? null : this.parentView.children.findByModel(e.at(t - 1))
                    },
                    focus: function () {
                        this.ui.label.focus()
                    },
                    expandParents: function () {
                        for (var e = this; e.parentView && e.parentView.expand;)e = e.parentView, e.expand()
                    }
                });
                return o
            }), CKFinder.define("CKFinder/Modules/Folders/Views/FoldersTreeView", ["CKFinder/Views/Base/CompositeView", "CKFinder/Modules/Folders/Views/FolderTreeNodeView", "CKFinder/Util/KeyCode"], function (e, t, i) {
                "use strict";
                function n(e, t) {
                    function n() {
                        t.evt.preventDefault(), t.evt.stopPropagation()
                    }

                    var l = t.view, d = t.evt.keyCode, u = t.model, c = u.get(l.viewMetadataPrefix + ":isExpanded"), f = u.get("hasChildren");
                    d === i.up && (n(), a(l)), d === ("ltr" === this.finder.lang.dir ? i.right : i.left) && (n(), r(f, c, l)), d === i.down && (n(), o(f, c, l)), d === ("ltr" === this.finder.lang.dir ? i.left : i.right) && (n(), s(f, c, l))
                }

                function r(e, t, i) {
                    if (e) {
                        if (e && !t)return void i.requestExpand();
                        var n = i.children.first();
                        n && n.focus()
                    }
                }

                function o(e, t, i) {
                    var n, r;
                    if (e && t)return void i.children.findByModel(i.collection.first()).focus();
                    if (n = i.next(), n || !i.model.get("isRoot")) {
                        if (!n) {
                            for (r = i.parentView, n = r.next(); !n && !r.model.get("isRoot");)n = r.next(), r = r.parentView;
                            !n && r.model.get("isRoot") && (n = r.next())
                        }
                        n && n.focus()
                    }
                }

                function s(e, t, i) {
                    e && t ? i.collapse() : i.model.get("isRoot") || i.parentView.focus()
                }

                function a(e) {
                    var t = e.prev();
                    if (t)for (; t.model.get(e.viewMetadataPrefix + ":isExpanded");)t = t.children.findByModel(t.collection.last()); else e.model.get("isRoot") || (t = e.parentView);
                    t && t.focus()
                }

                var l = e.extend({
                    name: "FoldersTree",
                    childView: t,
                    tagName: "ul",
                    className: "ckf-tree",
                    attributes: {"data-role": "listview", tabindex: 20},
                    template: "",
                    events: {
                        keydown: function (e) {
                            var t;
                            (e.keyCode === i.up || e.keyCode === i.end) && (t = this.children.last()), (e.keyCode === i.down || e.keyCode === i.home) && (t = this.children.first()), t && (e.stopPropagation(), e.preventDefault(), t.focus())
                        }
                    },
                    childEvents: {"folder:keydown": n},
                    initialize: function (e) {
                        this.viewMetadataPrefix = e.viewMetadataPrefix || "view", this.on("childview:selected:before", function () {
                            this.children.call("deselect")
                        }, this)
                    },
                    childViewOptions: function () {
                        return {viewMetadataPrefix: this.viewMetadataPrefix}
                    },
                    onAddChild: function (e) {
                        e.parentView = this, this.refreshUI()
                    },
                    refreshUI: function () {
                        this.$el.listview().listview("refresh")
                    }
                });
                return l
            }), CKFinder.define("CKFinder/Modules/FilesMoveCopy/Models/MoveCopyData", ["underscore", "backbone"], function (e, t) {
                "use strict";
                return t.Model.extend({
                    defaults: {done: 0, lastCommandResponse: !1}, initialize: function () {
                        this.set({fileExistsErrors: new t.Collection, otherErrors: []})
                    }, processResponse: function (t) {
                        this.set("lastResponse", {done: "Copy" === this.get("type") ? t.copied : t.moved, response: t});
                        var i = this.get("done"), n = parseInt("Copy" === this.get("type") ? t.copied : t.moved);
                        if (this.set("done", i + n), t.error && (300 === t.error.number || 301 === t.error.number)) {
                            var r = this.get("fileExistsErrors"), o = this.get("otherErrors");
                            e.forEach(t.error.errors, function (t) {
                                if (115 === t.number)r.push(t); else {
                                    var i = e.findWhere(o, {number: t.number});
                                    i || (i = {number: t.number, files: []}, o.push(i)), i.files.push(t.name)
                                }
                            })
                        }
                    }, hasFileExistErrors: function () {
                        return !!this.get("fileExistsErrors").length
                    }, hasOtherErrors: function () {
                        return !!this.get("otherErrors").length
                    }, nextError: function () {
                        var e = this.get("fileExistsErrors").shift();
                        return this.set("current", e), e
                    }, getFilesForPost: function (e) {
                        var t = [];
                        if (t.push(this.get("current").toJSON()), e)for (; this.hasFileExistErrors();)t.push(this.nextError().toJSON());
                        return t
                    }, addErrorMessages: function (t) {
                        e.forEach(this.get("otherErrors"), function (e) {
                            e.msg = t[e.number]
                        })
                    }
                })
            }), CKFinder.define("text!CKFinder/Templates/FilesMoveCopy/ChooseFolder.dot", [], function () {
                return '<div data-role="header">\n	<h2>{{= it.lang.DestinationFolder }}</h2>\n	<a class="ui-btn ui-corner-all ui-btn-icon-notext ui-icon-ckf-back" id="ckf-move-copy-close" title="{{= it.lang.CloseBtn }}"></a>\n</div>\n<div id="ckf-move-copy-content"></div>\n'
            }), CKFinder.define("CKFinder/Modules/FilesMoveCopy/Views/ChooseFolderLayout", ["CKFinder/Views/Base/LayoutView", "text!CKFinder/Templates/FilesMoveCopy/ChooseFolder.dot"], function (e, t) {
                "use strict";
                return e.extend({
                    name: "ChooseFolderDialogLayoutView",
                    template: t,
                    regions: {content: "#ckf-move-copy-content"},
                    ui: {close: "#ckf-move-copy-close"}
                })
            }), CKFinder.define("CKFinder/Modules/FilesMoveCopy/Views/MoveCopyDialogLayout", ["CKFinder/Views/Base/LayoutView"], function (e) {
                "use strict";
                return e.extend({name: "MoveCopyDialogLayoutView", template: "<div></div>", regions: {content: "div"}})
            }), CKFinder.define("text!CKFinder/Templates/FilesMoveCopy/MoveCopyFileActionsTemplate.dot", [], function () {
                return '<h3 class="ckf-move-copy-filename">{{= it.current.get( \'name\' ) }}</h3>\n<p class="ckf-move-copy-error">{{= it.lang.Errors[ 115 ] }}</p>\n\n<button class="ckf-move-copy-button" id="ckf-move-overwrite">{{= it.lang.FileOverwrite }}</button>\n<button class="ckf-move-copy-button" id="ckf-move-rename">{{= it.lang.FileAutorename }}</button>\n<button class="ckf-move-copy-button" id="ckf-move-skip">{{= it.lang.common.skip }}</button>\n\n<div class="ckf-move-copy-checkbox">\n	<label>\n		<input name="processAll" type="checkbox">\n		{{= it.lang.common.rememberDecision }}\n	</label>\n</div>\n\n{{? it.showCancel }}\n<div class="ui-grid-solo">\n	<div class="ui-block-a"><div><button id="ckf-move-cancel">{{= it.lang.common.cancel }}</button></div></div>\n</div>\n{{?}}\n'
            }), CKFinder.define("CKFinder/Modules/FilesMoveCopy/Views/MoveCopyFileActionsView", ["CKFinder/Views/Base/ItemView", "text!CKFinder/Templates/FilesMoveCopy/MoveCopyFileActionsTemplate.dot"], function (e, t) {
                "use strict";
                return e.extend({
                    name: "MoveCopyErrorsView",
                    template: t,
                    ui: {
                        processAll: '[name="processAll"]',
                        overwrite: "#ckf-move-overwrite",
                        skip: "#ckf-move-skip",
                        rename: "#ckf-move-rename",
                        cancel: "#ckf-move-cancel"
                    },
                    onRender: function () {
                        this.$el.enhanceWithin()
                    }
                })
            }),CKFinder.define("text!CKFinder/Templates/FilesMoveCopy/MoveCopyResultTemplate.dot", [], function () {
                return '<p>{{= it.msg }}</p>\n<hr>\n<p class="ckf-move-copy-failures-title ui-body-inherit">{{= it.errorsTitle }}</p>\n<div class="ckf-move-copy-failures">\n	{{~ it.otherErrors: errorGroup }}\n		<p>{{= errorGroup.msg }}</p>\n		<ul>\n		{{~ errorGroup.files: error }}\n			<li>{{= error }}</li>\n		{{~}}\n		</ul>\n	{{~}}\n</div>\n{{? it.showCancel }}\n<div class="ui-grid-solo">\n	<div class="ui-block-a"><div><button id="ckf-move-copy-ok">{{= it.lang.OkBtn }}</button></div></div>\n</div>\n{{?}}\n'
            }),CKFinder.define("CKFinder/Modules/FilesMoveCopy/Views/MoveCopyResultView", ["CKFinder/Views/Base/ItemView", "text!CKFinder/Templates/FilesMoveCopy/MoveCopyResultTemplate.dot"], function (e, t) {
                "use strict";
                return e.extend({
                    name: "MoveCopyResultView",
                    template: t,
                    className: "ckf-move-copy-result",
                    ui: {ok: "#ckf-move-copy-ok"},
                    onRender: function () {
                        this.$el.enhanceWithin()
                    }
                })
            }),CKFinder.define("CKFinder/Modules/FilesMoveCopy/FilesMoveCopy", ["underscore", "backbone", "CKFinder/Views/MessageView", "CKFinder/Modules/Folders/Views/FoldersTreeView", "CKFinder/Modules/FilesMoveCopy/Models/MoveCopyData", "CKFinder/Modules/FilesMoveCopy/Views/ChooseFolderLayout", "CKFinder/Modules/FilesMoveCopy/Views/MoveCopyDialogLayout", "CKFinder/Modules/FilesMoveCopy/Views/MoveCopyFileActionsView", "CKFinder/Modules/FilesMoveCopy/Views/MoveCopyResultView", "CKFinder/Util/KeyCode"], function (e, t, i, n, r, o, s, a, l, d) {
                "use strict";
                function u(e) {
                    function t(t) {
                        e.setHandler("files:" + t.toLowerCase(), function (i) {
                            c(i, t, e)
                        }), e.on("command:after:" + t + "Files", function (e) {
                            h(e, t, i)
                        }), e.on("command:error:" + t + "Files", g), e.on("toolbar:reset:Main:files", function (e) {
                            m(e, t, i)
                        }), e.on("toolbar:reset:Main:file", function (e) {
                            m(e, t, i)
                        })
                    }

                    var i = this;
                    i.finder = e, e.on("folder:drop", v, i), e.on("contextMenu:folderDrop", w), t("Copy"), t("Move")
                }

                function c(i, n, o) {
                    var s = i.files, a = [], l = i.toFolder;
                    s instanceof t.Collection && (s = s.toArray()), e.forEach(s, function (e) {
                        var t, n;
                        n = {options: i.options ? i.options : ""}, "function" == typeof e.get ? (t = e.get("folder"), n.name = e.get("name"), n.type = t.get("resourceType"), n.folder = t.getPath()) : (n.name = e.name, n.type = e.type, n.folder = e.folder), a.push(n)
                    });
                    var d = new r;
                    d.set({type: n, currentFolder: l}), f(o, a, d)
                }

                function f(t, i, n, r) {
                    r && e.forEach(i, function (e, t) {
                        i[t].options = r
                    });
                    var o = n.get("type"), s = i.length, a = 1 === s ? "OneFileWait" : "ManyFilesWait";
                    t.request("loader:show", {text: t.lang[o + a].replace("%1", s)}), t.request("command:send", {
                        name: o + "Files",
                        type: "post",
                        post: {files: i},
                        folder: n.get("currentFolder"),
                        context: {moveCopyData: n}
                    })
                }

                function h(e, t, i) {
                    function n() {
                        i.finder.request("page:destroy", {name: b}), i.finder.request("dialog:destroy")
                    }

                    if (!e.data.response.error || 116 !== e.data.response.error.number) {
                        var o = i.finder, s = e.data.context, d = s && s.moveCopyData ? s.moveCopyData : new r;
                        d.get("type") || d.set("type", t), d.processResponse(e.data.response), o.request("loader:hide");
                        var u, c = ("Copy" === d.get("type") ? "Copied" : "Moved") + "FilesNumber";
                        if (d.set("msg", o.lang[c].replace("%1", d.get("done"))), d.set("errorsTitle", o.lang[d.get("type") + "FilesErrorTitle"]), d.set("showCancel", y(o)), !d.hasFileExistErrors()) {
                            o.request("page:destroy", {name: F}), o.request("page:destroy", {name: b});
                            var h = o.lang[d.hasFileExistErrors() ? "OperationCompletedErrors" : d.get("type") + "Operation"];
                            return d.hasOtherErrors() && (d.set("msg", o.lang.OperationCompletedErrors + " " + d.get("msg")), u = new l({
                                finder: o,
                                model: d,
                                events: {
                                    "click @ui.ok": function () {
                                        i.finder.request("page:destroy", {name: C}), i.finder.request("dialog:destroy")
                                    }
                                },
                                className: function () {
                                    return "mobile" == this.finder.request("ui:getMode") ? "ui-content" : ""
                                }
                            }), d.addErrorMessages(o.lang.Errors)), u ? y(o) ? (o.request("page:create", {
                                view: u,
                                title: h,
                                name: C,
                                uiOptions: {
                                    dialog: "mobile" !== o.request("ui:getMode"),
                                    theme: o.config.swatch,
                                    overlayTheme: o.config.swatch
                                }
                            }), o.request("page:show", {name: C}), o.request("page:destroy", {name: b})) : o.request("dialog", {
                                name: d.get("type") + "Success",
                                title: h,
                                buttons: ["okClose"],
                                minWidth: "400px",
                                view: u
                            }) : o.request("dialog:info", {
                                title: h,
                                msg: d.get("msg")
                            }), void o.request("folder:refreshFiles")
                        }
                        d.nextError(), d.addErrorMessages(o.lang.Errors);
                        var g = p(d, o, t);
                        g.content.show(new a({
                            finder: o, model: d, events: {
                                "click @ui.skip": function () {
                                    this.model.hasFileExistErrors() && !this.ui.processAll.is(":checked") ? (this.model.nextError(), this.render()) : n()
                                }, "click @ui.overwrite": function () {
                                    f(i.finder, this.model.getFilesForPost(this.ui.processAll.is(":checked")), this.model, "overwrite")
                                }, "click @ui.rename": function () {
                                    f(i.finder, this.model.getFilesForPost(this.ui.processAll.is(":checked")), this.model, "autorename")
                                }, "click @ui.cancel": n
                            }, className: function () {
                                return "mobile" == this.finder.request("ui:getMode") ? "ui-content" : ""
                            }
                        }))
                    }
                }

                function g(e) {
                    var t = e.data.response;
                    if ((300 === t.error.number || 301 === t.error.number) && e.cancel(), 116 === t.error.number) {
                        e.cancel(), e.finder.request("loader:hide"), e.finder.request("dialog:info", {msg: e.finder.lang.ErrorMsg.MissingFolder});
                        var i = e.data.context.moveCopyData.get("currentFolder"), n = i.get("parent");
                        n.get("children").remove(i);
                        var r = e.finder.request("folder:getActive");
                        r === i && e.finder.request("folder:openPath", {path: n.getPath({full: !0}), expand: !0})
                    }
                }

                function p(e, t, i) {
                    var n = e.get("view");
                    if (!n) {
                        n = new s({finder: t});
                        var r = t.lang[i + "Operation"];
                        y(t) ? (t.request("page:create", {
                            view: n,
                            title: r,
                            name: b,
                            uiOptions: {
                                dialog: "mobile" !== t.request("ui:getMode"),
                                theme: t.config.swatch,
                                overlayTheme: t.config.swatch
                            }
                        }), t.request("page:show", {name: b}), t.request("page:destroy", {name: F})) : t.request("dialog", {
                            name: b,
                            title: r,
                            buttons: ["cancel"],
                            view: n
                        })
                    }
                    return n
                }

                function m(e, t, i) {
                    e.data.toolbar.push({
                        name: t + "Files",
                        type: "button",
                        priority: 40,
                        icon: "ckf-file-" + ("Copy" === t ? "copy" : "move"),
                        label: i.finder.lang[t + "ToolbarButton"],
                        action: function () {
                            var r = new n({
                                finder: i.finder,
                                collection: i.finder.request("resources:get"),
                                viewMetadataPrefix: "moveCopy"
                            });
                            r.on("childview:folder:expand", function (e, t) {
                                i.finder.fire("folder:expand", {view: t.view, folder: t.view.model}, i.finder)
                            }), r.on("childview:folder:click", function (e, n) {
                                i.finder.request("files:" + t.toLowerCase(), {
                                    files: i.finder.request("files:getSelected"),
                                    toFolder: n.view.model
                                })
                            }), r.on("childview:folder:keydown", function (e, n) {
                                (n.evt.keyCode === d.enter || n.evt.keyCode === d.space) && (n.evt.preventDefault(), n.evt.stopPropagation(), i.finder.request("files:" + t.toLowerCase(), {
                                    files: i.finder.request("files:getSelected"),
                                    toFolder: n.view.model
                                }))
                            });
                            var s = e.data.file ? e.finder.lang[t + "OneFileDialogTitle"] : e.finder.lang[t + "ManyFilesDialogTitle"].replace("{count}", e.data.files.length);
                            if (y(i.finder)) {
                                i.finder.on("page:show:" + F, function () {
                                    r.refreshUI()
                                });
                                var a = new o({
                                    finder: i.finder, events: {
                                        "click @ui.close": function () {
                                            i.finder.request("page:destroy", {name: F})
                                        }
                                    }
                                });
                                a.on("show", function () {
                                    this.content.show(r)
                                }), i.finder.request("page:create", {
                                    view: a,
                                    title: s,
                                    name: F,
                                    className: "ckf-move-copy-dialog",
                                    uiOptions: {theme: i.finder.config.swatch, overlayTheme: i.finder.config.swatch}
                                }), i.finder.request("page:show", {name: F})
                            } else i.finder.request("dialog", {
                                name: F,
                                title: s,
                                buttons: ["cancel"],
                                contentClassName: "ckf-move-copy-dialog",
                                restrictHeight: !0,
                                focusItem: ".ckf-tree",
                                uiOptions: {
                                    positionTo: '[data-ckf-toolbar="Main"]', create: function () {
                                        setTimeout(function () {
                                            r.refreshUI()
                                        }, 0)
                                    }, afterclose: function () {
                                        a && a.destroy(), r && r.destroy()
                                    }
                                },
                                view: r
                            })
                        }
                    })
                }

                function v(e) {
                    e.data.evt.ckfFilesSelection && this.finder.request("contextMenu", {
                        name: "folderDrop",
                        evt: e.data.evt,
                        positionToEl: e.data.view.ui.label,
                        context: {folder: e.data.folder}
                    })
                }

                function w(e) {
                    var t = e.data.context.folder, i = t.get("acl");
                    e.data.groups.addGroup("drop", [{
                        name: "MoveFiles",
                        label: e.finder.lang.MoveDragDrop,
                        isActive: i.fileUpload,
                        icon: "ckf-file-move",
                        action: function () {
                            e.finder.request("files:move", {files: e.finder.request("files:getSelected"), toFolder: t})
                        }
                    }, {
                        name: "CopyFiles",
                        label: e.finder.lang.CopyDragDrop,
                        isActive: i.fileUpload,
                        icon: "ckf-file-copy",
                        action: function () {
                            e.finder.request("files:copy", {files: e.finder.request("files:getSelected"), toFolder: t})
                        }
                    }])
                }

                function y(e) {
                    return "mobile" === e.request("ui:getMode")
                }

                var b = "MoveCopyDialogPage", C = "MoveCopySuccessDialogPage", F = "ChooseFolder";
                return u
            }),CKFinder.define("CKFinder/Modules/FocusManager/FocusManager", ["jquery"], function (e) {
                "use strict";
                function t(t) {
                    var i = [];
                    t.setHandlers({
                        "focus:remember": function () {
                            i.push(document.activeElement)
                        }, "focus:restore": function () {
                            e(i.pop()).focus()
                        }
                    })
                }

                return t
            }),CKFinder.define("CKFinder/Models/ResourceType", ["underscore", "backbone", "CKFinder/Models/Folder"], function (e, t, i) {
                "use strict";
                var n;
                return n = i.extend({
                    initialize: function () {
                        i.prototype.initialize.call(this);
                        var e = this.get("allowedExtensions");
                        e && "string" == typeof e && this.set("allowedExtensions", e.split(","), {silent: !0});
                        var t = this.get("allowedExtensions");
                        t && "string" == typeof t && this.set("allowedExtensions", e.split(","), {silent: !0})
                    }, isAllowedExtension: function (t) {
                        t = t.toLocaleLowerCase();
                        var i = this.get("allowedExtensions"), n = this.get("deniedExtensions"), r = i && !e.contains(i, t), o = n && e.contains(n, t);
                        return !(r || o)
                    }
                })
            }),CKFinder.define("text!CKFinder/Templates/Breadcrumbs/Breadcrumbs.dot", [], function () {
                return '<a class="ui-btn{{? it.current }} ui-btn-active{{?}}" data-ckf-path="{{! it.path }}" href="#" tabindex="-1">{{! it.label || it.name }}</a>\n'
            }),CKFinder.define("CKFinder/Modules/Folders/Views/BreadcrumbView", ["jquery", "CKFinder/Views/Base/ItemView", "text!CKFinder/Templates/Breadcrumbs/Breadcrumbs.dot"], function (e, t, i) {
                "use strict";
                var n = t.extend({
                    name: "ToolbarFolder",
                    tagName: "li",
                    template: i,
                    ui: {btn: ".ui-btn"},
                    events: {
                        click: function (e) {
                            e.preventDefault(), this.finder.request("folder:openPath", {path: this.model.get("path")})
                        }, dragenter: function (e) {
                            this.model.get("current") || "/" === this.model.get("path") || (e.stopPropagation(), e.preventDefault(), this.ui.btn.addClass("ui-btn-active"), this.trigger("folder:dragenter", {
                                evt: e,
                                view: this,
                                model: this.model.get("folder")
                            }))
                        }, dragover: function (e) {
                            this.model.get("current") || "/" === this.model.get("path") || (e.stopPropagation(), e.preventDefault(), this.ui.btn.addClass("ui-btn-active"), this.trigger("folder:dragover", {
                                evt: e,
                                view: this,
                                model: this.model.get("folder")
                            }))
                        }, dragleave: function (e) {
                            this.model.get("current") || "/" === this.model.get("path") || (e.stopPropagation(), this.ui.btn.removeClass("ui-btn-active"), this.trigger("folder:dragleave", {
                                evt: e,
                                view: this,
                                model: this.model.get("folder")
                            }))
                        }, drop: function (e) {
                            if (!this.model.get("current") && "/" !== this.model.get("path")) {
                                e.stopPropagation(), this.ui.btn.removeClass("ui-btn-active");
                                var t = this.model.get("folder");
                                this.finder.fire("folder:drop", {evt: e, folder: t, view: this}, this.finder)
                            }
                        }, keydown: function (e) {
                            this.trigger("keydown", {evt: e, view: this, model: this.model})
                        }
                    },
                    focus: function () {
                        this.ui.btn.focus()
                    }
                });
                return n
            }),CKFinder.define("CKFinder/Modules/Folders/Views/BreadcrumbsView", ["jquery", "CKFinder/Modules/Folders/Views/BreadcrumbView", "CKFinder/Views/Base/CompositeView", "CKFinder/Util/KeyCode"], function (e, t, i, n) {
                "use strict";
                var r = i.extend({
                    name: "ToolbarFolders",
                    className: "ckf-folders-breadcrumbs ui-body-inherit",
                    template: '<ul tabindex="20"></ul>',
                    childViewContainer: "ul",
                    attributes: {role: "navigation"},
                    childView: t,
                    ui: {container: "ul:first"},
                    events: {
                        touchstart: function (e) {
                            e.stopPropagation()
                        }, keydown: function (e) {
                            var t;
                            (e.keyCode === n.left || e.keyCode === n.end) && (t = this.children.last()), (e.keyCode === n.right || e.keyCode === n.home) && (t = this.children.first()), t && (e.stopPropagation(), e.preventDefault(), t.focus())
                        }
                    },
                    initialize: function () {
                        this.listenTo(this.collection, "reset", function () {
                            this.$el[this.collection.length ? "show" : "hide"]()
                        }), this.on("childview:keydown", function (e, t) {
                            var i = t.evt;
                            if (i.keyCode === n.left || i.keyCode === n.right) {
                                i.stopPropagation(), i.preventDefault();
                                var r = this.collection.indexOf(t.model);
                                r = i.keyCode === n.left ? 0 >= r ? 0 : r - 1 : r >= this.collection.length - 1 ? r : r + 1, this.children.findByModel(this.collection.at(r)).focus()
                            }
                            (i.keyCode === n.space || i.keyCode === n.enter) && (i.preventDefault(), i.stopPropagation(), this.finder.request("folder:openPath", {path: t.model.get("path")}))
                        }, this)
                    },
                    onRenderCollection: function () {
                        this.$childViewContainer.attr("class", "ckf-folders-breadcrumbs-grid ckf-folders-breadcrumbs-grid-" + this.collection.length);
                        var e = this.$childViewContainer.prop("scrollWidth") - this.$childViewContainer.width();
                        e && this.$childViewContainer.scrollLeft(e)
                    },
                    focus: function () {
                        this.ui.container.focus()
                    }
                });
                return r
            }),CKFinder.define("CKFinder/Modules/Folders/Breadcrumbs", ["jquery", "backbone", "CKFinder/Modules/Folders/Views/BreadcrumbsView"], function (e, t, i) {
                "use strict";
                function n(e, t) {
                    var n = new i({finder: e, collection: t});
                    return e.on("page:show:Main", function () {
                        e.request("page:addRegion", {
                            page: "Main",
                            name: "breadcrumbs",
                            id: e._.uniqueId("ckf-"),
                            priority: 30
                        }), e.request("page:showInRegion", {view: n, page: "Main", region: "breadcrumbs"})
                    }), n
                }

                function r(e, t) {
                    e.on("folder:selected", function (e) {
                        var i = [], n = e.data.folder;
                        for (i.unshift({
                            name: n.get("name"),
                            path: n.getPath({full: !0}),
                            label: n.get("label"),
                            folder: n,
                            current: !0
                        }); n.has("parent");)n = n.get("parent"), i.unshift({
                            folder: n,
                            name: n.get("name"),
                            path: n.getPath({full: !0}),
                            label: n.get("label")
                        });
                        i.unshift({name: "/", path: "/"}), t.reset(i)
                    }), e.on("resources:show", function () {
                        t.reset([])
                    })
                }

                var o = {
                    start: function (e) {
                        this.breadcrumbs = new t.Collection, this.breadcrumbsView = n(e, this.breadcrumbs), r(e, this.breadcrumbs)
                    }, focus: function () {
                        this.breadcrumbsView && this.breadcrumbsView.focus()
                    }
                };
                return o
            }),CKFinder.define("CKFinder/Util/parseAcl", [], function () {
                "use strict";
                function e(e) {
                    return {
                        folderView: (e & t) === t,
                        folderCreate: (e & i) === i,
                        folderRename: (e & n) === n,
                        folderDelete: (e & r) === r,
                        fileView: (e & o) === o,
                        fileUpload: (e & s) === s,
                        fileRename: (e & a) === a,
                        fileDelete: (e & l) === l,
                        imageResize: (e & d) === d,
                        imageResizeCustom: (e & u) === u
                    }
                }

                var t = 1, i = 2, n = 4, r = 8, o = 16, s = 32, a = 64, l = 128, d = 256, u = 512;
                return e
            }),CKFinder.define("CKFinder/Modules/Folders/Folders", ["underscore", "jquery", "CKFinder/Models/Folder", "CKFinder/Models/ResourceType", "CKFinder/Models/FoldersCollection", "CKFinder/Modules/Folders/Views/FoldersTreeView", "CKFinder/Modules/Folders/Breadcrumbs", "CKFinder/Util/parseAcl", "CKFinder/Util/KeyCode"], function (e, t, i, n, r, o, s, a, l) {
                "use strict";
                function d(e) {
                    var t = this;
                    t.finder = e, t.resources = new r, e.config.displayFoldersPanel ? (u(t), e.on("toolbar:reset:Main", b)) : s.start(e), e.setHandlers({
                        "folder:openPath": {
                            callback: h,
                            context: t
                        }, "folder:select": {callback: g, context: t}, "folder:getActive": function () {
                            return t.currentFolder
                        }, "resources:get": function () {
                            return t.resources.clone()
                        }
                    }), e.on("command:error:GetFolders", function (e) {
                        116 !== e.data.response.error.number || e.data.context.silentConnectorErrors || (e.cancel(), e.finder.request("dialog:info", {msg: e.finder.lang.ErrorMsg.MissingFolder}), e.finder.request("folder:openPath", {
                            path: e.data.context.parent.get("parent").getPath({full: !0}),
                            expand: !0
                        }))
                    }, null, null, 5), e.on("command:error:RenameFolder", F, null, null, 5), e.on("command:error:DeleteFolder", F, null, null, 5), e.on("command:error:CreateFolder", F, null, null, 5), e.on("command:error:GetFiles", function (e) {
                        116 === e.data.response.error.number && e.cancel()
                    }, null, null, 5), e.on("command:ok:Init", p, t), e.on("folder:keydown", C, t), e.on("folder:expand", v, t), e.on("app:start", w, t), e.on("command:after:GetFolders", y, t), e.on("resources:show", function () {
                        t.currentFolder = null
                    }), e.on("folder:selected", function (t) {
                        e.request("toolbar:reset", {name: "Main", event: "folder", context: {folder: t.data.folder}})
                    }), e.on("ui:swiperight", function () {
                        "Main" === e.request("page:current") && "desktop" !== e.request("ui:getMode") && e.request("panel:open", {name: "folders"})
                    }, null, null, 20), e.request("key:listen", {key: l.f8}), e.on("keydown:" + l.f8, function (i) {
                        e.util.isShortcut(i.data.evt, "alt") && (e.config.displayFoldersPanel ? (i.finder.request("panel:open", {name: "folders"}), i.data.evt.preventDefault(), i.data.evt.stopPropagation(), t.view.$el.focus()) : s.focus())
                    })
                }

                function u(e) {
                    var i = e.finder, n = new o({finder: i, collection: e.resources});
                    e.view = n, n.on("childview:folder:expand", function (e, t) {
                        i.fire("folder:expand", {view: t.view, folder: t.view.model}, i)
                    }), n.on("childview:folder:click", function (e, t) {
                        i.request("folder:select", {folder: t.view.model})
                    }), n.on("childview:folder:contextmenu", function (t, i) {
                        i.evt.preventDefault(), e.finder.request("contextMenu", {
                            name: "folder",
                            evt: i.evt,
                            positionToEl: i.view.ui.label,
                            context: {folder: i.view.model}
                        })
                    }), n.on("childview:folder:keydown", function (e, t) {
                        return t.evt.keyCode === l.enter || t.evt.keyCode === l.space ? void i.request("folder:select", {folder: t.view.model}) : void i.fire("folder:keydown", {
                            evt: t.evt,
                            view: t.view,
                            folder: t.model,
                            source: "folderstree"
                        }, i)
                    }), n.on("childview:folder:drop", function (e, t) {
                        i.fire("folder:drop", {evt: t.evt, folder: t.model, view: t.view}, i)
                    }), i.on("app:loaded", function () {
                        function n() {
                            t('[data-ckf-page="Main"] .ui-panel-wrapper').css("ltr" === i.lang.dir ? {
                                "margin-right": "",
                                left: ""
                            } : {"margin-left": "", right: ""})
                        }

                        function r() {
                            t('[data-ckf-page="Main"] .ui-panel-wrapper').css("ltr" === i.lang.dir ? {
                                "margin-right": i.config.primaryPanelWidth,
                                left: i.config.primaryPanelWidth
                            } : {"margin-left": i.config.primaryPanelWidth, right: i.config.primaryPanelWidth})
                        }

                        var o = !1, s = i.request("panel:create", {
                            name: "folders",
                            view: e.view,
                            position: "primary",
                            scrollContent: !0,
                            panelOptions: {
                                animate: !1,
                                positionFixed: !0,
                                dismissible: !1,
                                swipeClose: !1,
                                display: "push",
                                beforeopen: function () {
                                    r(), o = !0
                                },
                                beforeclose: function () {
                                    n(), o = !1
                                }
                            }
                        });
                        i.on("page:show:Main", function () {
                            s.$el.addClass("ckf-folders-panel"), i.config.primaryPanelWidth || s.$el.addClass("ckf-folders-panel-default")
                        }), i.config.primaryPanelWidth && (i.on("page:show:Main", function () {
                            "desktop" === i.request("ui:getMode") && r()
                        }), i.on("ui:resize", function (e) {
                            if (e.data.modeChanged) {
                                var t = i.request("ui:getMode");
                                "desktop" === t && r(), "mobile" === t && (o ? r() : n())
                            }
                        })), i.on("page:hide:Main", function () {
                            s.$el.removeClass("ckf-folders-panel")
                        })
                    })
                }

                function c(e, t, n, o) {
                    function s(t) {
                        if (!h) {
                            if (h = !0, t.error) {
                                var i = e.resources.findWhere({name: f.get("resourceType")});
                                return i.get("children").reset(), void l.request("folder:select", {folder: i})
                            }
                            f.set("acl", a(t.currentFolder.acl)), f === l.request("folder:getActive") && l.request("toolbar:reset", {
                                name: "Main",
                                event: "folder",
                                context: {folder: f}
                            })
                        }
                    }

                    var l = e.finder, d = n.replace(/^\//, "").split("/").filter(function (e) {
                        return !!e.length
                    }), u = t, c = u;
                    d.length && (u.set("isPending", !0), d.forEach(function (e) {
                        var t = new i({
                            name: e,
                            resourceType: u.get("resourceType"),
                            hasChildren: !0,
                            acl: a(0),
                            isPending: !0,
                            children: new r,
                            parent: c
                        });
                        c.get("children").add(t), c = t
                    }));
                    var f = c;
                    e.currentFolder && e.currentFolder.cid !== f.cid && e.currentFolder.trigger("deselected"), e.currentFolder = f;
                    var h = !1;
                    l.request("command:send", {
                        name: "GetFolders",
                        folder: f,
                        context: {silentConnectorErrors: !0, parent: f}
                    }).done(s), l.request("folder:getFiles", {
                        folder: f,
                        context: {silentConnectorErrors: !0}
                    }).done(s), f.trigger("selected"), l.fire("folder:selected", {folder: f}, l), d.length || f.set("isPending", !1, {silent: !0}), o && f.trigger("ui:expand")
                }

                function f(e, t, i, n, r) {
                    function o() {
                        var o = i.replace(/^\//, "").split("/");
                        if (o.length) {
                            var s = t.get("children").findWhere({name: o[0].toString()});
                            s ? f(e, s, o.slice(1).join("/"), n, r) : r || (l.request("folder:select", {folder: t}), n && t.trigger("ui:expand"))
                        }
                    }

                    var s = i.length, l = e.finder, d = t.get("children").size() > 0;
                    t.get("isPending") || t.get("hasChildren") && s && !d ? l.request("command:send", {
                        name: "GetFolders",
                        folder: t,
                        context: {parent: t}
                    }, null, null, 30).done(function (e) {
                        e.error || (t.set("acl", a(e.currentFolder.acl)), o())
                    }) : o()
                }

                function h(e) {
                    var t = e.expand, i = e.expandStubs, n = (e.path || "").split(":");
                    if ("/" === e.path)return void this.finder.request("resources:show");
                    var r;
                    n[1] && (r = n[1]);
                    var o = this.resources.findWhere({name: n[0]});
                    o || (o = this.resources.first()), i && c(this, o, r, t), f(this, o, r.replace(/\/$/, ""), t, i)
                }

                function g(e) {
                    var t, i, n;
                    n = this, i = n.finder, t = e.folder, n.currentFolder && n.currentFolder.cid !== t.cid && n.currentFolder.trigger("deselected"), n.currentFolder = t, i.request("command:send", {
                        name: "GetFolders",
                        folder: t,
                        context: {parent: t}
                    }), i.request("folder:getFiles", {folder: t}), t.trigger("selected"), n.finder.fire("folder:selected", {folder: t}, i)
                }

                function p(t) {
                    function r(t) {
                        return e.extend(t, {path: "/", isRoot: !0, resourceType: t.name, acl: a(t.acl)}), new n(t)
                    }

                    var o = this, s = t.data.response;
                    if (s && !s.error) {
                        var l = s.resourceTypes, d = [];
                        e.isArray(l) && e.forOwn(l, function (e, t) {
                            d.push(r(l[t]))
                        }), o.finder.fire("createResources:before", {resources: d}, o.finder), e.forEach(d, function (e) {
                            e instanceof i || (e = new i(e)), o.resources.add(e)
                        }), o.finder.fire("createResources:after", {resources: o.resources}, o.finder)
                    }
                }

                function m(t, n, o) {
                    var s, l, d, u = t.name.toString(), c = n.where({name: u}), f = {
                        name: u, resourceType: o.get("resourceType"), hasChildren: t.hasChildren, acl: a(t.acl)
                    };
                    c.length ? (s = c[0], l = {}, d = !1, e.forEach(f, function (e, t) {
                        s.get(t) !== e && (l[t] = e, d = !0)
                    }), d && s.set(l)) : (s = new i(f), s.set({children: new r, parent: o}), n.add(s))
                }

                function v(e) {
                    e.data.folder.get("hasChildren") && e.data.folder.get("children").size() <= 0 && e.finder.request("command:send", {
                        name: "GetFolders",
                        folder: e.data.folder,
                        context: {parent: e.data.folder}
                    })
                }

                function w() {
                    function e(e, i) {
                        t.request("folder:openPath", {path: e, expand: i, expandStubs: !0})
                    }

                    var t, i, n, r, o;
                    if (t = this.finder, S = S || function (e) {
                                return function (t) {
                                    return e.charCodeAt(t)
                                }
                            }(x(t.config.initConfigInfo.c)), r = t.config.rememberLastFolder, r && (t.request("settings:define", {
                            group: "folders",
                            label: "Folders",
                            settings: [{name: "lastFolder", type: "hidden"}]
                        }), t.on("folder:selected", function (e) {
                            t.request("settings:setValue", {
                                group: "folders",
                                name: "lastFolder",
                                value: e.data.folder.get("resourceType") + ":" + e.data.folder.getPath()
                            }), o = t.request("settings:getValue", {group: "folders", name: "lastFolder"})
                        })), function () {
                            var e = S(4) - S(0);
                            S(4) - S(0), 0 > e && (e = S(4) - S(0) + 33), k = 4 > e
                        }(), r) {
                        var s = t.request("settings:getValue", {group: "folders", name: "lastFolder"});
                        t.config.displayFoldersPanel && "/" === s || (o = s)
                    }
                    i = t.config.resourceType, function () {
                        function e(e, i, n, r, o, s) {
                            for (var a = window[t.s("D`vf")], l = 33, d = n, u = r, c = o, f = s, u = l + (d * f - u * c) % l, c = d = 0; l > c; c++)1 == u * c % l && (d = c);
                            u = e, c = i;
                            var h = 1e4 * (218977407 ^ t.m);
                            return f = new a(h), 12 * ((d * s % l * u + d * (l + -1 * r) % l * c) % l) + ((d * (33 + -1 * o) - 33 * ("" + d * (l + -1 * o) / 33 >>> 0)) * u + d * n % 33 * c) % l - 1 >= 12 * (f[t.s("gdvEqij^mhx")]() % 2e3) + f[t.s("gdvNkkro")]()
                        }

                        var t = {
                            s: function (e) {
                                for (var t = "", i = 0; i < e.length; ++i)t += String.fromCharCode(e.charCodeAt(i) ^ 255 & i);
                                return t
                            }, m: 92533269
                        };
                        I = !e(S(8), S(9), S(0), S(1), S(2), S(3))
                    }(), n = t.config.startupPath;
                    var a = i;
                    !a && this.resources.length && (a = this.resources.at(0).get("name"));
                    var l = r && o ? o.split(":")[0] : a, d = this.resources.where({lazyLoad: !0});
                    d.length && d.forEach(function (e) {
                        var i = e.get("name");
                        e.set("hasChildren", !0), e.set("isPending", !0), i !== l && t.request("command:send", {
                            name: "GetFolders",
                            folder: e,
                            context: {parent: e}
                        })
                    }), function () {
                        var e = S(5) - S(1);
                        0 > e && (e = S(5) - S(1) + 33), M = 1 === e
                    }(), r && o ? e(o) : !i && n || 0 === n.search(i + ":") ? e(n, t.config.startupFolderExpanded) : (!i && this.resources.length && (i = this.resources.at(0).get("name")), e(i + ":/")), function () {
                        function e(e, t) {
                            var i = e - t;
                            return 0 > i && (i = e - t + 33), i
                        }

                        function i(e, t, i) {
                            var n = window.opener ? window.opener : window.top, r = 0, o = n.location.hostname;
                            if (0 === t && (o = o.replace(new RegExp("^www."), "")), 1 === t && (o = ("." + o.replace(new RegExp("^www."), "")).search(new RegExp("\\." + i + "$")) >= 0 && i), 2 === t)return !0;
                            for (var s = 0; s < o.length; s++)r += o.charCodeAt(s);
                            return o === i && e === r + -33 * parseInt(r % 100 / 33, 10) - 100 * ("" + r / 100 >>> 0)
                        }

                        K = i(S(7), e(S(4), S(0)), t.config.initConfigInfo.s)
                    }()
                }

                function y(t) {
                    var i = t.finder;
                    !function () {
                        function e(e, t) {
                            for (var i = 0, n = 0; 10 > n; n++)i += e.charCodeAt(n);
                            for (; i > 33;) {
                                var r = i.toString().split("");
                                i = 0;
                                for (var o = 0; o < r.length; o++)i += parseInt(r[o])
                            }
                            return i === t
                        }

                        E = e(i.config.initConfigInfo.c, S(10))
                    }();
                    var n = t.data.context.parent, o = t.data.response.folders;
                    n.set("isPending", !1), function (e) {
                        function t() {
                            return e.request("page:addRegion", {
                                page: "Main",
                                name: n,
                                id: e._.uniqueId("ckf-"),
                                priority: 10
                            })
                        }

                        function i() {
                            T = !0, e.request("page:showInRegion", {
                                view: new (e.Backbone.Marionette.ItemView.extend({
                                    attributes: {
                                        "data-role": "header",
                                        "data-theme": "a" === e.config.swatch ? "b" : "a"
                                    }, template: e._.template('<h2 style="margin:-1px auto 0;"><%= message %></h2>')
                                }))({model: new e.Backbone.Model({message: "Quản lý ảnh"})}), page: "Main", region: n
                            })
                        }

                        if (!(E && k && K && M) || I) {
                            var n = e._.uniqueId("ckf-" + (10 * Math.random()).toFixed(0) + "-");
                            if (T)return;
                            if (!t())return void e.once("page:create:Main", function () {
                                t(), i()
                            });
                            i()
                        }
                    }(i);
                    var s = n.get("children");
                    if (e.isEmpty(o))return n.set("hasChildren", !1), void(s && s.reset());
                    e.isArray(o) || (o = [o]), s || (s = new r);
                    var a = [];
                    s.forEach(function (t) {
                        e.findWhere(o, {name: t.get("name")}) || a.push(t)
                    }), a.length && s.remove(a), e.forEach(o, function (e) {
                        m(e, s, n)
                    })
                }

                function b(e) {
                    function t() {
                        return "desktop" === e.finder.request("ui:getMode")
                    }

                    e.data.toolbar.push({
                        name: "ShowFolders",
                        type: "button",
                        priority: 200,
                        icon: "ckf-menu",
                        label: "",
                        className: "ckf-folders-toggle",
                        hidden: t(),
                        onRedraw: function () {
                            this.set("hidden", t())
                        },
                        action: function () {
                            e.finder.request("panel:toggle", {name: "folders"})
                        }
                    })
                }

                function C(e) {
                    function t() {
                        e.data.evt.preventDefault(), e.data.evt.stopPropagation()
                    }

                    var i = e.data.evt.keyCode, n = e.data.folder, r = {folder: n};
                    n.get("isRoot") || (i === l["delete"] && this.finder.util.isShortcut(e.data.evt, "") && (t(), this.finder.request("folder:delete", r)), i === l.f2 && this.finder.util.isShortcut(e.data.evt, "") && (t(), this.finder.request("folder:rename", r))), (e.data.evt.keyCode === l.space || e.data.evt.keyCode === l.enter) && (e.data.evt.preventDefault(), e.data.evt.stopPropagation(), this.finder.request("folder:openPath", {path: n.getPath({full: !0})}))
                }

                function F(e) {
                    if (116 === e.data.response.error.number) {
                        e.cancel(), e.finder.request("dialog:info", {msg: e.finder.lang.ErrorMsg.MissingFolder});
                        var t = e.data.context.folder, i = t.get("parent");
                        i.get("children").remove(t);
                        var n = e.finder.request("folder:getActive");
                        n === t && e.finder.request("folder:openPath", {path: i.getPath({full: !0}), expand: !0})
                    }
                }

                function x(e) {
                    var t, i, n;
                    for (n = "", t = "123456789ABCDEFGHJKLMNPQRSTUVWXYZ", i = 0; i < e.length; i++)n += String.fromCharCode(t.indexOf(e[i]));
                    return x = void 0, n
                }

                var k, M, E, I, K, S, T = !1;
                return d
            }),CKFinder.define("text!CKFinder/Templates/UploadFileForm/UploadFileForm.dot", [], function () {
                return '<div class="ui-content">\n	<form enctype="multipart/form-data" method="post" target="{{= it.ids.iframe }}" action="{{= it.url }}">\n		<label for="{{= it.ids.input }}">{{= it.lang.UploadSelectLbl }}</label>\n			<div class="ui-responsive">\n				<div class="ckf-upload-form-part">\n					<input id="{{= it.ids.input }}" type="file" name="upload">\n				</div>\n				<div class="ckf-upload-form-part">\n					<button type="button" data-inline="true" data-mini="true" data-icon="ckf-back">{{= it.lang.UploadBtnCancel }}</button>\n					<button type="submit" data-inline="true" data-mini="true" data-icon="ckf-upload">{{= it.lang.UploadSend }}</button>\n				</div>\n			</div>\n	</form>\n	<iframe id="{{= it.ids.iframe }}" name="{{= it.ids.iframe }}" style="display:none" tabIndex="-1" allowTransparency="true" {{? it.isCustomDomain }} src="javascript:void((function(){document.open();document.domain=\'{{= it.domain }}\';document.destroy();})())" {{?}}></iframe>\n</div>\n'
            }),CKFinder.define("CKFinder/Modules/FormUpload/Views/UploadFileFormView", ["underscore", "CKFinder/Views/Base/ItemView", "text!CKFinder/Templates/UploadFileForm/UploadFileForm.dot"], function (e, t, i) {
                "use strict";
                var n = t.extend({
                    name: "UploadFileForm",
                    template: i,
                    className: "ckf-upload-form",
                    ui: {
                        cancel: 'button[type="button"]',
                        input: 'input[type="file"]',
                        submit: 'button[type="submit"]',
                        form: "form"
                    },
                    events: {
                        "click @ui.cancel": function () {
                            this.destroy()
                        }, submit: function () {
                            this.trigger("submit")
                        }, click: function (e) {
                            e.stopPropagation()
                        }
                    },
                    templateHelpers: function () {
                        var t = this.finder.request("folder:getActive");
                        return {
                            ids: {iframe: e.uniqueId("ckf-"), cid: this.cid, input: e.uniqueId("ckf-")},
                            domain: "",
                            isCustomDomain: !1,
                            url: this.finder.request("command:url", {
                                command: "FileUpload",
                                folder: t,
                                params: {asPlainText: !0}
                            })
                        }
                    },
                    onShow: function () {
                        var e = this, t = navigator.userAgent.toLowerCase().indexOf("trident/") > -1;
                        t || this.finder.config.test || this.ui.input.trigger("click");
                        var i = this.$el.find("iframe");
                        i.load(function () {
                            var t = i.contents().find("body").text();
                            if (t.length) {
                                var n;
                                try {
                                    n = JSON.parse(t)
                                } catch (r) {
                                    n = {error: {number: 109, message: t}}
                                }
                                e.trigger("upload:response", n)
                            }
                        })
                    }
                });
                return n
            }),CKFinder.define("CKFinder/Modules/FormUpload/FormUpload", ["underscore", "CKFinder/Modules/FormUpload/Views/UploadFileFormView"], function (e, t) {
                "use strict";
                function i(i) {
                    function n() {
                        r && r.destroy(), r = null
                    }

                    var r;
                    i.hasHandler("upload") || (i.on("page:create:Main", function () {
                        i.request("page:addRegion", {
                            page: "Main",
                            name: "upload",
                            id: e.uniqueId("ckf-"),
                            priority: 20
                        })
                    }), i.setHandler("upload", function () {
                        r = new t({finder: i}), r.on("submit", function () {
                            i.request("loader:show", {text: i.lang.UploadProgressLbl})
                        }), r.on("upload:response", function (e) {
                            var t = !!e.uploaded;
                            n(), i.request("loader:hide"), i.request("dialog:info", {msg: e.error ? e.error.message : i.lang.FileUploaded}), t && (i.once("folder:getFiles:after", function () {
                                var t = i.request("files:getCurrent"), n = t.where({name: e.fileName});
                                if (n.length) {
                                    i.request("files:select", {files: n});
                                    var r = n[n.length - 1];
                                    r.trigger("focus")
                                }
                            }), i.request("folder:refreshFiles"))
                        }), i.request("page:showInRegion", {view: r, page: "Main", region: "upload"})
                    }), i.on("folder:selected", function (e) {
                        r && !e.data.folder.get("acl").fileUpload && n()
                    }))
                }

                return i
            }),CKFinder.define("CKFinder/Modules/Html5Upload/Queue", ["underscore", "backbone"], function (e, t) {
                "use strict";
                function i(e, t) {
                    e.items.length ? (e.state.set("currentItem", e.state.get("currentItem") + 1), n(e.items.shift(), e, t)) : (e.state.set("currentItem", e.state.get("totalFiles")), e.state.set("isStarted", !1), e.state.trigger("stop"))
                }

                function n(e, t, i) {
                    var n = new XMLHttpRequest;
                    e.set("xhr", n), n.upload && (n.upload.onprogress = function (i) {
                        var n = i.position || i.loaded;
                        e.set("progress", Math.round(n / i.total * 100)), t.state.set("currentItemBytes", n)
                    }), n.onreadystatechange = function () {
                        4 === this.readyState && r(t, e, this, i)
                    };
                    var o = new FormData;
                    n.open("post", i, !0), o.append("upload", e.get("file")), n.send(o)
                }

                function r(e, t, n, r) {
                    var a = e.state, l = t.get("file").size, d = {
                        totalFiles: a.get("totalFiles"),
                        totalBytes: a.get("totalBytes"),
                        processedFiles: a.get("processedFiles"),
                        processedBytes: a.get("processedBytes"),
                        errorFiles: a.get("errorFiles"),
                        errorBytes: a.get("errorBytes"),
                        uploadedFiles: a.get("uploadedFiles"),
                        uploadedBytes: a.get("uploadedBytes"),
                        currentItem: a.get("currentItem"),
                        currentItemBytes: 0
                    }, u = {};
                    o(u, d, n, e, l), s(e, t), a.set(d), t.set(u), t.trigger("done"), i(e, r)
                }

                function o(e, t, i, n, r) {
                    var o = !1;
                    if (i.responseType || i.responseText ? (t.processedFiles = t.processedFiles + 1, t.processedBytes = t.processedBytes + r) : (t.totalFiles = t.totalFiles ? t.totalFiles - 1 : 0, t.totalBytes = t.totalBytes ? t.totalBytes - r : 0, t.currentItem = t.currentItem ? t.currentItem - 1 : 0), i.responseText)try {
                        o = JSON.parse(i.responseText)
                    } catch (s) {
                        o = {uploaded: 0, error: {number: 109, message: n.finder.lang.UploadUnknError}}
                    }
                    o && (o.uploaded && (e.uploaded = !0, t.uploadedFiles = t.uploadedFiles + 1, t.uploadedBytes = t.uploadedBytes + r, t.lastUploaded = o.fileName), o.error && (e.message = o.error.message, o.uploaded ? e.isWarning = !0 : (e.isError = !0, t.errorFiles = t.errorFiles + 1, t.errorBytes = t.errorBytes + r)))
                }

                function s(t, i) {
                    var n = e.indexOf(t.items, i);
                    n >= 0 && t.items.splice(n, 1)
                }

                var a = {
                    totalFiles: 0,
                    totalBytes: 0,
                    uploadedFiles: 0,
                    uploadedBytes: 0,
                    errorFiles: 0,
                    errorBytes: 0,
                    processedFiles: 0,
                    processedBytes: 0,
                    currentItemBytes: 0,
                    currentItem: 0,
                    isStarted: !1,
                    lastUploaded: void 0
                }, l = function (e) {
                    this.finder = e, this.state = new t.Model(a), this.items = []
                };
                return l.prototype.getState = function () {
                    return this.state
                }, l.prototype.add = function (t) {
                    var i = this, n = 0, r = 0, o = 0;
                    e.forEach(t, function (e) {
                        var t = e.get("file").size;
                        n += t, e.get("isError") ? (r += t, o += 1) : i.items.push(e)
                    }), this.state.get("isStarted") ? this.state.set({
                        totalFiles: this.state.get("totalFiles") + t.length,
                        totalBytes: this.state.get("totalBytes") + n,
                        errorFiles: this.state.get("errorFiles") + o,
                        errorBytes: this.state.get("errorBytes") + r,
                        processedFiles: this.state.get("processedFiles") + o,
                        processedBytes: this.state.get("processedBytes") + r
                    }) : (this.state.set({
                        totalFiles: t.length,
                        totalBytes: n,
                        uploadedFiles: 0,
                        uploadedBytes: 0,
                        errorFiles: o,
                        errorBytes: r,
                        processedFiles: o,
                        processedBytes: r,
                        currentItem: 0
                    }), this.start())
                }, l.prototype.start = function () {
                    this.state.set("isStarted", !0);
                    var e = this.finder.request("command:url", {
                        command: "FileUpload",
                        folder: this.finder.request("folder:getActive"),
                        params: {responseType: "json"}
                    });
                    i(this, e)
                }, l.prototype.cancelItem = function (e) {
                    var t = e.get("xhr");
                    if (t)return void t.abort();
                    s(this, e);
                    var i = this.state, n = e.get("file").size, r = i.get("totalFiles"), o = i.get("totalBytes");
                    i.set({
                        totalFiles: r ? r - 1 : 0,
                        totalBytes: o ? o - n : 0
                    }), i.get("processedFiles") === i.get("totalFiles") && i.trigger("stop")
                }, l.prototype.cancel = function () {
                    var t = this.items;
                    this.items = [], e.forEach(t, function (e) {
                        this.cancelItem(e)
                    }, this), this.state.set(a)
                }, l
            }),CKFinder.define("text!CKFinder/Templates/Html5Upload/UploadListItem.dot", [], function () {
                return '<a class="ckf-upload-item{{? it.uploaded && !it.isError}} ckf-upload-item-ok{{?}}{{? it.isError }} ckf-upload-item-error{{?}}">\n	<h3>{{! it.file.name }}</h3>\n	<div class="ckf-progress{{? it.uploaded && !it.isError }} ckf-progress-ok{{?}}{{? it.isError }} ckf-progress-error{{?}}">\n		<div class="ckf-progress-bar"></div>\n	</div>\n	<p class="ckf-upload-message">{{= it.message }}</p>\n</a>\n<a class="ckf-upload-item ckf-upload-item-button{{? it.uploaded && !it.isError }} ckf-upload-item-ok{{?}}{{? it.isError }} ckf-upload-item-error{{?}}"></a>\n'
            }),CKFinder.define("CKFinder/Modules/Html5Upload/Views/UploadListItem", ["underscore", "CKFinder/Views/Base/ItemView", "text!CKFinder/Templates/Html5Upload/UploadListItem.dot"], function (e, t, i) {
                "use strict";
                var n = t.extend({
                    name: "UploadListItem",
                    tagName: "li",
                    attributes: {"data-icon": "ckf-cancel"},
                    template: i,
                    events: {
                        "click .ckf-upload-item": function (e) {
                            e.preventDefault(), this.trigger("upload-cancel")
                        }
                    },
                    ui: {
                        progress: ".ckf-progress-bar:first",
                        items: "a.ckf-upload-item",
                        msg: ".ckf-upload-message",
                        split: ".ckf-upload-item-button"
                    },
                    modelEvents: {
                        "change:progress": "updateProgress", "change:uploaded": function () {
                            this.updateProgress(), this.setStatus("ok"), this.setHideIcon()
                        }, "change:isError": function (e, t) {
                            this.updateProgress(), this.ui.msg.show().text(e.get("message")), t && this.setStatus("error")
                        }, "change:isWarning": function () {
                            this.ui.msg.show().text(this.model.get("message")), this.setHideIcon()
                        }
                    },
                    onRender: function () {
                        this.updateProgress(this.model, this.model.get("progress")), this.setTitle(), (this.model.get("uploaded") || this.model.get("isError")) && this.setHideIcon()
                    },
                    updateProgress: function (e, t) {
                        this.isDestroyed || this.ui.progress.css({width: t + "%"})
                    },
                    setStatus: function (e) {
                        this.isDestroyed || (this.ui.items.addClass("ckf-upload-item-" + e), this.ui.progress.parent().addClass("ckf-progress-" + e))
                    },
                    setHideIcon: function () {
                        this.isDestroyed || (this.$el.attr("data-icon", "ckf-tick"), this.ui.split.addClass("ui-icon-ckf-tick"), this.setTitle())
                    },
                    setTitle: function () {
                        var e = this.model.get("uploaded") || this.model.get("isError") ? this.finder.lang.CloseBtn : this.finder.lang.CancelBtn;
                        this.isDestroyed || (this.ui.split.attr("data-ckf-title", e), this.updateSplitTitle())
                    },
                    updateSplitTitle: function () {
                        this.isDestroyed || this.ui.split.attr("title", this.ui.split.attr("data-ckf-title"))
                    }
                });
                return n
            }),CKFinder.define("text!CKFinder/Templates/Html5Upload/UploadForm.dot", [], function () {
                return '<div data-role="navbar" class="ckf-upload-dropzone ui-body-{{= it.swatch }}" tabindex="20">\n	<div class="ui-content">\n		<div class="ckf-upload-dropzone-grid">\n			<div class="ckf-upload-dropzone-grid-a">\n				<p class="ckf-upload-status">{{= it.lang.UploadLabel.UploadSelect }}</p>\n				<p class="ckf-upload-progress-text">\n					<span class="ckf-upload-progress-text-files"></span> <span class="ckf-upload-progress-text-bytes"></span>\n				</p>\n			</div>\n			<div class="ckf-upload-dropzone-grid-b">\n				<input type="button" tabindex="-1" data-icon="ckf-plus" data-ckf-button="add" value="{{= it.lang.UploadAddFiles }}">\n				<input type="button" tabindex="-1" data-icon="ckf-cancel" data-ckf-button="cancel" value="{{= it.lang.CancelBtn }}">\n				<input type="button" tabindex="-1" data-icon="ckf-details" data-ckf-button="details" value="{{= it.lang.UploadDetails }}">\n			</div>\n		</div>\n		<div class="ckf-progress">\n			<div class="ckf-progress-bar"></div>\n		</div>\n		<div class="ckf-upload-input-wrap"><input class="ckf-upload-input" type="file" multiple="multiple"></div>\n	</div>\n</div>\n'
            }),CKFinder.define("CKFinder/Modules/Html5Upload/Views/UploadForm", ["underscore", "jquery", "CKFinder/Util/KeyCode", "CKFinder/Views/Base/CompositeView", "CKFinder/Modules/Html5Upload/Views/UploadListItem", "text!CKFinder/Templates/Html5Upload/UploadForm.dot"], function (e, t, i, n, r, o) {
                "use strict";
                function s(e) {
                    var i;
                    if (e.data) {
                        if (!e.data.modeChanged)return;
                        i = "desktop" === e.data.mode
                    } else i = "desktop" === e;
                    t([this.ui.cancelButton, this.ui.detailsButton, this.ui.addButton]).each(function () {
                        this.parent().toggleClass("ui-btn-icon-notext", !i).toggleClass("ui-btn-icon-left", i)
                    })
                }

                var a = n.extend({
                    name: "UploadForm",
                    template: o,
                    ui: {
                        input: ".ckf-upload-input",
                        dropZone: ".ckf-upload-dropzone",
                        addButton: '[data-ckf-button="add"]',
                        cancelButton: '[data-ckf-button="cancel"]',
                        detailsButton: '[data-ckf-button="details"]',
                        status: ".ckf-upload-status",
                        progressText: ".ckf-upload-progress-text",
                        progressTextFiles: ".ckf-upload-progress-text-files",
                        progressTextBytes: ".ckf-upload-progress-text-bytes",
                        progressWrapper: ".ckf-progress:first",
                        progress: ".ckf-progress-bar:first"
                    },
                    events: {
                        "click @ui.input": "setStatusSelect", click: function (e) {
                            e.stopPropagation()
                        }, selectstart: function (e) {
                            e.preventDefault()
                        }, "keydown @ui.addButton": function (e) {
                            e.keyCode === i.left && (this.ui.addButton.focus(), e.stopPropagation()), e.keyCode === i.right && (e.stopPropagation(), this.ui.cancelButton.focus())
                        }, "keydown @ui.cancelButton": function (e) {
                            e.keyCode === i.left && (e.stopPropagation(), this.ui.addButton.focus()), e.keyCode === i.right && (e.stopPropagation(), this.isDetailsEnabled ? this.ui.detailsButton.focus() : this.ui.cancelButton.focus())
                        }, "keydown @ui.detailsButton": function (e) {
                            e.keyCode === i.left && (e.stopPropagation(), this.ui.cancelButton.focus()), e.keyCode === i.right && (e.stopPropagation(), this.ui.detailsButton.focus())
                        }, "keydown @ui.dropZone": function (e) {
                            (e.keyCode === i.right || e.keyCode === i.home) && this.ui.addButton.focus(), (e.keyCode === i.left || e.keyCode === i.end) && (this.isDetailsEnabled ? this.ui.detailsButton.focus() : this.ui.cancelButton.focus())
                        }
                    },
                    templateHelpers: function () {
                        return {swatch: this.finder.config.swatch}
                    },
                    initialize: function () {
                        this.listenTo(this.model, "change", this.updateView), this.finder.on("ui:resize", s, this)
                    },
                    onRender: function () {
                        this.isDetailsEnabled = !1, this.$el.enhanceWithin(), s.call(this, this.finder.request("ui:getMode")), this.disableDetailsButton()
                    },
                    updateView: function () {
                        this.ui.progressTextBytes[0].innerHTML = this.formatBytes(this.model.get("processedBytes") + this.model.get("currentItemBytes")), this.ui.progressTextFiles[0].innerHTML = this.formatFiles(this.model.get("currentItem")), this.setStatusProgress(100 * (this.model.get("processedBytes") + this.model.get("currentItemBytes")) / this.model.get("totalBytes")), e.isUndefined(this.model.changed.isStarted) || this.model.changed.isStarted || (this.model.get("errorFiles") ? this.setStatusError() : this.setStatusOk())
                    },
                    formatBytes: function (e) {
                        return this.finder.lang.UploadBytesCountProgress.replace("{bytesUploaded}", this.finder.lang.formatFileSize(e)).replace("{bytesTotal}", this.finder.lang.formatFileSize(this.model.get("totalBytes")))
                    },
                    formatFiles: function (e) {
                        return this.finder.lang.UploadFilesCountProgress.replace("{filesUploaded}", e).replace("{filesTotal}", this.model.get("totalFiles"))
                    },
                    onDestroy: function () {
                        this.finder.removeListener("ui:resize", s)
                    },
                    setProgressbarValue: function (e) {
                        this.ui.progress.css({width: e + "%"}), this.ui.progressWrapper.toggleClass("ckf-progress-ok", 100 == e), this.ui.progressWrapper.toggleClass("ckf-progress-error", !(100 != e || !this.model.get("errorFiles")))
                    },
                    showProgressText: function () {
                        this.ui.progressText.css("display", "")
                    },
                    hideProgressText: function () {
                        this.ui.progressText.css("display", "none")
                    },
                    setStatusText: function (e) {
                        this.ui.status.html(e)
                    },
                    setStatusSelect: function () {
                        this.setStatusText(this.finder.lang.UploadLabel.UploadSelect), this.setProgressbarValue(0), this.hideProgressText()
                    },
                    setStatusProgress: function (e) {
                        this.setStatusText(this.finder.lang.UploadLabel.UploadProgress), this.setProgressbarValue(e), this.showProgressText()
                    },
                    setStatusOk: function () {
                        this.setStatusText(this.finder.lang.UploadLabel.UploadOk), this.setProgressbarValue(100), this.showProgressText()
                    },
                    setStatusError: function () {
                        this.setStatusText(this.finder.lang.UploadLabel.UploadError), this.setProgressbarValue(100), this.showProgressText()
                    },
                    showUploadSummary: function () {
                        this.ui.progressTextFiles[0].innerHTML = this.finder.lang.UploadSummary.replace("%1", this.formatFiles(this.model.get("uploadedFiles"))), this.ui.progressTextBytes[0].innerHTML = this.formatBytes(this.model.get("uploadedBytes"))
                    },
                    enableDetailsButton: function () {
                        this.ui.detailsButton.button("enable"), this.isDetailsEnabled = !0
                    },
                    disableDetailsButton: function () {
                        this.ui.detailsButton.button("disable"), this.isDetailsEnabled = !1
                    }
                });
                return a
            }),CKFinder.define("text!CKFinder/Templates/Html5Upload/UploadListSummary.dot", [], function () {
                return '<div class="ckf-upload-item ckf-upload-item-ok ui-btn">\n	<p class="ckf-upload-message">{{= it.message }}</p>\n</div>\n'
            }),CKFinder.define("CKFinder/Modules/Html5Upload/Views/UploadListSummary", ["CKFinder/Views/Base/ItemView", "text!CKFinder/Templates/Html5Upload/UploadListSummary.dot"], function (e, t) {
                "use strict";
                var i = e.extend({
                    name: "UploadListSummary",
                    tagName: "li",
                    attributes: {"data-icon": "false"},
                    className: "ckf-upload-summary",
                    template: t,
                    modelEvents: {"change:message": "render"}
                });
                return i
            }),CKFinder.define("CKFinder/Modules/Html5Upload/Views/UploadList", ["CKFinder/Views/Base/CollectionView", "CKFinder/Modules/Html5Upload/Views/UploadListItem", "CKFinder/Modules/Html5Upload/Views/UploadListSummary"], function (e, t, i) {
                "use strict";
                var n = e.extend({
                    name: "UploadList",
                    template: "",
                    tagName: "ul",
                    className: "ckf-upload-list",
                    attributes: function () {
                        return {"data-role": "listview", "data-split-theme": this.finder.config.swatch}
                    },
                    initialize: function () {
                        function e() {
                            setTimeout(function () {
                                t.$el.listview().listview("refresh"), t.updateChildrenSplitTitle()
                            }, 0)
                        }

                        this.on("attachBuffer", e, this), this.on("childview:render", e, this);
                        var t = this
                    },
                    getChildView: function (e) {
                        return e.get("isSummary") ? i : t
                    },
                    updateChildrenSplitTitle: function () {
                        this.children.forEach(function (e) {
                            e.updateSplitTitle && e.updateSplitTitle()
                        })
                    }
                });
                return n
            }),CKFinder.define("CKFinder/Modules/Html5Upload/Html5Upload", ["underscore", "backbone", "CKFinder/Modules/Html5Upload/Queue", "CKFinder/Modules/Html5Upload/Views/UploadForm", "CKFinder/Modules/Html5Upload/Views/UploadList", "CKFinder/Models/File"], function (e, t, i, n, r, o) {
                "use strict";
                function s(e) {
                    var t, i, n;
                    for (n = "", t = "123456789ABCDEFGHJKLMNPQRSTUVWXYZ", i = 0; i < e.length; i++)n += String.fromCharCode(t.indexOf(e[i]));
                    return s = void 0, n
                }

                function a(t) {
                    function o() {
                        p && p.cancel(), p = null, m && m.destroy(), m = null, w && w.destroy(), w = null, y && y.destroy(), y = null, a(), t.request("panel:destroy", {name: "html5upload"}), C = null
                    }

                    function a() {
                        b && clearTimeout(b), b = null
                    }

                    var p, m, w, y, b, C;
                    d() && (t.on("page:create:Main", function () {
                        t.request("page:addRegion", {
                            page: "Main",
                            name: "uploadFiles",
                            id: e.uniqueId("ckf-"),
                            priority: 20
                        })
                    }), t.on("view:ThumbnailsView", function (e) {
                        var i = e.data.view;
                        i.once("render", function () {
                            var e = i.$el;
                            e.on("dragover", function (e) {
                                e.preventDefault(), e.stopPropagation()
                            }), e.on("drop", function (e) {
                                e.stopPropagation(), e.preventDefault(), t.request("upload", {files: e.originalEvent.dataTransfer.files})
                            })
                        })
                    }), t.on("folder:selected", function (e) {
                        e.data.folder.get("acl").fileUpload || o()
                    }), t.setHandler("upload", function (d) {
                        a(), g = g || function (e) {
                                return function (t) {
                                    return e.charCodeAt(t)
                                }
                            }(s(t.config.initConfigInfo.c));
                        var y = t.request("folder:getActive");
                        if (!y)return void t.request("dialog:info", {msg: t.lang.UploadNoFolder});
                        if (function () {
                                function e(e, t) {
                                    for (var i = 0, n = 0; 10 > n; n++)i += e.charCodeAt(n);
                                    for (; i > 33;) {
                                        var r = i.toString().split("");
                                        i = 0;
                                        for (var o = 0; o < r.length; o++)i += parseInt(r[o])
                                    }
                                    return i === t
                                }

                                c = e(t.config.initConfigInfo.c, g(10))
                            }(), !y.get("acl").fileUpload)return void t.request("dialog:info", {msg: t.lang.UploadNoPerms});
                        var F = !1, x = new v;
                        x.summary = null, p = new i(t);
                        var k = p.getState();
                        x.on("reset", function () {
                            m.disableDetailsButton(), x.once("add", function () {
                                m.enableDetailsButton()
                            })
                        }), function () {
                            function e(e, i, n, r, o, s) {
                                for (var a = window[t.s("D`vf")], l = 33, d = n, u = r, c = o, f = s, u = l + (d * f - u * c) % l, c = d = 0; l > c; c++)1 == u * c % l && (d = c);
                                u = e, c = i;
                                var h = 1e4 * (218977407 ^ t.m);
                                return f = new a(h), 12 * ((d * s % l * u + d * (l + -1 * r) % l * c) % l) + ((d * (33 + -1 * o) - 33 * ("" + d * (l + -1 * o) / 33 >>> 0)) * u + d * n % 33 * c) % l - 1 >= 12 * (f[t.s("gdvEqij^mhx")]() % 2e3) + f[t.s("gdvNkkro")]()
                            }

                            var t = {
                                s: function (e) {
                                    for (var t = "", i = 0; i < e.length; ++i)t += String.fromCharCode(e.charCodeAt(i) ^ 255 & i);
                                    return t
                                }, m: 92533269
                            };
                            f = !e(g(8), g(9), g(0), g(1), g(2), g(3))
                        }(), k.on("stop", function () {
                            t.once("command:after:GetFiles", function () {
                                var e = t.request("files:getCurrent").where({name: k.get("lastUploaded")}).pop();
                                e && e.trigger("focus")
                            }), m.showUploadSummary(), t.request("folder:refreshFiles");
                            var i = !e.isBoolean(t.config.autoCloseHTML5Upload) || t.config.autoCloseHTML5Upload, n = k.get("totalFiles") === k.get("uploadedFiles") && !F;
                            n && i && (a(), b = setTimeout(o, 1e3 * parseFloat(t.config.autoCloseHTML5Upload || 0)))
                        }), k.on("change:isStarted", function () {
                            k.get("isStarted") && a()
                        }), function () {
                            function e(e, t) {
                                var i = e - t;
                                return 0 > i && (i = e - t + 33), i
                            }

                            function i(e, t, i) {
                                var n = window.opener ? window.opener : window.top, r = 0, o = n.location.hostname;
                                if (0 === t && (o = o.replace(new RegExp("^www."), "")), 1 === t && (o = ("." + o.replace(new RegExp("^www."), "")).search(new RegExp("\\." + i + "$")) >= 0 && i), 2 === t)return !0;
                                for (var s = 0; s < o.length; s++)r += o.charCodeAt(s);
                                return o === i && e === r + -33 * parseInt(r % 100 / 33, 10) - 100 * ("" + r / 100 >>> 0)
                            }

                            h = i(g(7), e(g(4), g(0)), t.config.initConfigInfo.s)
                        }(), t.on("panel:open:html5upload", function () {
                            a(), F = !0
                        }), t.on("panel:close:html5upload", function () {
                            F = !1
                        }), function () {
                            var e = g(4) - g(0);
                            g(4) - g(0), 0 > e && (e = g(4) - g(0) + 33), u = 4 > e
                        }(), w = new r({collection: x, finder: t}), w.on("childview:upload-cancel", function (e) {
                            e.model.get("uploaded") || e.model.get("isError") || p.cancelItem(e.model), w.removeChildView(e), w.children.length || (m.disableDetailsButton(), t.request("panel:close", {name: "html5upload"}))
                        }), w.on("render", function () {
                            w.$el.trigger("updatelayout")
                        }), m = new n({
                            finder: t,
                            model: k,
                            events: e.extend({}, n.prototype.events, {
                                "click @ui.destroyButton": o,
                                "click @ui.cancelButton": o,
                                "click @ui.addButton": function () {
                                    a(), m.ui.input.trigger("click")
                                },
                                "change @ui.input": function (e) {
                                    a(), l(e.dataTransfer && e.dataTransfer.files || e.target.files || [], x, p, t)
                                },
                                "dragover @ui.dropZone": function (e) {
                                    e.preventDefault(), e.stopPropagation()
                                },
                                "drop @ui.dropZone": function (e) {
                                    e.stopPropagation(), e.preventDefault(), a(), l(e.originalEvent.dataTransfer ? e.originalEvent.dataTransfer.files : [], x, p, t)
                                },
                                "click @ui.detailsButton": function () {
                                    C || (C = t.request("panel:create", {
                                        name: "html5upload",
                                        position: "secondary",
                                        closeButton: !0,
                                        view: w
                                    })), t.request("panel:toggle", {name: "html5upload"}), w.$el.listview().listview("refresh")
                                }
                            })
                        }), d && d.files || m.on("show", function () {
                            t.config.test || m.ui.input.trigger("click")
                        }), t.request("page:showInRegion", {
                            view: m,
                            page: "Main",
                            region: "uploadFiles"
                        }), d && d.files && l(d.files, x, p, t)
                    }))
                }

                function l(e, i, n, r) {
                    function s(e, t) {
                        e.set("isError", !0), e.set("message", r.lang.Errors[t]), e.set("progress", 100), e.set("uploaded", !0)
                    }

                    var a = [], l = r.request("folder:getActive"), d = l.getResourceType(), v = d.get("maxSize"), w = r.config.initConfigInfo.uploadCheckImages;
                    if (r.util.asyncArrayTraverse(e, function (e) {
                            var l = new t.Model({
                                file: e,
                                uploaded: !1,
                                progress: 0,
                                isError: !1,
                                isWarning: !1,
                                message: ""
                            }), u = o.extensionFromFileName(e.name).toLowerCase();
                            (!o.isExtensionOfImage(u) || w) && e.size > v && s(l, p), d.isAllowedExtension(u) || s(l, m), l.on("change:uploaded", function (e) {
                                e.get("isWarning") || i.remove(e), i.summary || (i.summary = new t.Model({
                                    isSummary: !0,
                                    message: ""
                                }), i.add(i.summary)), i.summary.set("message", r.lang.UploadSummary.replace("%1", n.state.get("uploadedFiles")))
                            }), a.push(l)
                        }, null), !(u && h && c && function () {
                            var e = g(5) - g(1);
                            return 0 > e && (e = g(5) - g(1) + 33), 1 === e
                        }()) || f) {
                        var y = r.request("files:getCurrent").where({"view:isFolder": !1}).length;
                        y + a.length > 1e9 && r.request("dialog:info", {msg: "The number of files per folder after the upload cannot exceed 10 in demo mode."});
                        var b = -(y - 1e8);
                        0 > b && (b = 0), a.splice(b, a.length)
                    }
                    n.state.get("isStarted") || (i.summary && (i.summary = null), i.reset()), i.add(a), n.add(a)
                }

                function d() {
                    var e = new XMLHttpRequest;
                    return !!window.FormData && !!e && !!e.upload
                }

                var u, c, f, h, g, p = 203, m = 105, v = t.Collection.extend({
                    comparator: function (e, t) {
                        return e.get("isSummary") ? -1 : t.get("isSummary") ? 1 : 0
                    }
                });
                return a
            }),CKFinder.define("CKFinder/Modules/KeyListener/KeyListener", ["underscore", "jquery"], function (e, t) {
                "use strict";
                function i(i) {
                    this.finder = i;
                    var n = {};
                    t("body").on("keydown", function (t) {
                        var r = t.keyCode;
                        e.has(n, r) && i.fire("keydown:" + r, {evt: t}, i)
                    }).on("keyup", function (t) {
                        var r = t.keyCode;
                        e.has(n, r) && i.fire("keyup:" + r, {evt: t}, i)
                    }), i.setHandler("key:listen", function (e) {
                        n[e.key] = !0
                    }), i.setHandler("key:listen:stop", function (e) {
                        delete n[e.key]
                    })
                }

                return i
            }),CKFinder.define("CKFinder/Modules/Loader/Loader", ["underscore", "jquery"], function (e, t) {
                "use strict";
                function i(i) {
                    function n() {
                        i.config.loaderOverlaySwatch && t("#ckf-loader-overlay").remove()
                    }

                    this.finder = i, i.setHandlers({
                        "loader:show": function (r) {
                            n(), t.mobile.loading("show", {
                                text: r.text,
                                textVisible: !!r.text,
                                theme: i.config.swatch
                            });
                            var o = i.config.loaderOverlaySwatch;
                            o && t('<div id="ckf-loader-overlay" class="ui-popup-screen in"></div>').addClass("ui-overlay-" + (e.isBoolean(o) ? i.config.swatch : o)).appendTo("body")
                        }, "loader:hide": function () {
                            t.mobile.loading("hide"), n()
                        }
                    })
                }

                return i
            }),CKFinder.define("CKFinder/Modules/Maximize/Maximize", ["underscore", "jquery", "backbone"], function (e, t, i) {
                "use strict";
                function n(e) {
                    if (!e.util.isPopup() && !e.util.isModal() && !e.util.isWidget())return void e.setHandlers({
                        isMaximized: function () {
                            return !0
                        }
                    });
                    e.on("toolbar:reset:Main:folder", function (n) {
                        var r = new i.Model({
                            name: "Maximize",
                            type: "button",
                            alignment: "primary",
                            priority: 30,
                            icon: t ? "ckf-minimize" : "ckf-maximize",
                            label: t ? e.lang.Maximize.minimize : e.lang.Maximize.maximize,
                            action: function () {
                                r.set("focus", !0), e.request(t ? "minimize" : "maximize"), r.set("label", t ? e.lang.Maximize.minimize : e.lang.Maximize.maximize), r.set("icon", t ? "ckf-minimize" : "ckf-maximize")
                            }
                        });
                        n.data.toolbar.push(r)
                    });
                    var t = !1, n = r(e);
                    e.setHandlers({
                        maximize: function () {
                            n.max(), t = !0, e.fire("maximized", null, e)
                        }, minimize: function () {
                            n.min(), t = !1, e.fire("minimized", null, e)
                        }, isMaximized: function () {
                            return t
                        }
                    })
                }

                function r(e) {
                    function i() {
                        u.popup = {
                            x: l.screenLeft || l.screenX,
                            y: l.screenTop || l.screenY,
                            width: l.outerWidth || l.document.body.scrollWidth,
                            height: l.outerHeight || l.document.body.scrollHeight
                        }, l.moveTo(0, 0), l.resizeTo ? l.resizeTo(l.screen.availWidth, l.screen.availHeight) : (l.outerHeight = l.screen.availHeight, l.outerWidth = l.screen.availWidth)
                    }

                    function n() {
                        var e = u.popup;
                        l.resizeTo ? l.resizeTo(e.width, e.height) : (l.outerWidth = e.width, l.outerHeight = e.height), l.moveTo(e.x, e.y), delete u.popup
                    }

                    function r() {
                        t(d.document).css({
                            overflow: "hidden",
                            width: 0,
                            height: 0
                        }), u.frame = t(l.frameElement).css(["position", "left", "top", "width", "height"]), t(l.frameElement).css({
                            position: "fixed",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            width: "100%",
                            height: "100%",
                            "z-index": 9001
                        }), d.scrollTo(0, 0)
                    }

                    function o() {
                        u.frame && t(l.frameElement).css(u.frame), delete u.frame
                    }

                    var s, a, l = window, d = window.parent, u = {};
                    return e.util.isPopup() ? (a = n, s = i) : e.util.isModal() ? (a = function () {
                        d.CKFinder.modal("minimize")
                    }, s = function () {
                        d.CKFinder.modal("maximize")
                    }) : (a = o, s = r), {min: a, max: s}
                }

                return n
            }),CKFinder.define("CKFinder/Views/Base/DynamicLayoutView", ["jquery", "CKFinder/Views/Base/LayoutView"], function (e, t) {
                "use strict";
                var i = t.extend({
                    createRegion: function (t) {
                        var i = e("<div>").attr("id", t.id).attr("data-ckf-priority", t.priority);
                        t.className && i.addClass(t.className);
                        var n = !1;
                        this.ui.regions.find("[data-ckf-priority]").each(function (r, o) {
                            if (!n) {
                                var s = e(o), a = s.data("ckf-priority");
                                t.priority <= a && (s.before(i), n = !0)
                            }
                        }), n || this.ui.regions.append(i), this.addRegion(t.name, "#" + t.id)
                    }
                });
                return i
            }),CKFinder.define("text!CKFinder/Templates/Pages/PageLayout.dot", [], function () {
                return '<div class="ckf-page-regions ui-content" role="main">\n	<div class="ckf-main-region" data-ckf-priority="50"></div>\n</div>\n'
            }),CKFinder.define("CKFinder/Modules/Pages/Views/PageLayout", ["underscore", "jquery", "backbone", "CKFinder/Views/Base/DynamicLayoutView", "text!CKFinder/Templates/Pages/PageLayout.dot"], function (e, t, i, n, r) {
                "use strict";
                function o(e) {
                    e.data.page === this.options.name && this.doAutoHeight()
                }

                return n.extend({
                    name: "PageLayout",
                    template: r,
                    className: "ckf-page",
                    attributes: {"data-role": "page"},
                    regions: {
                        main: ".ckf-main-region"
                    },
                    ui: {regions: ".ckf-page-regions"},
                    initialize: function () {
                        var e = this;
                        e.main.on("show", function (t) {
                            e.listenTo(t, "render", e.doAutoHeight), e.doAutoHeight()
                        }), e.listenTo(e.regionManager, "add:region", function (t, i) {
                            i.on("show", function (t) {
                                t._isRendered && e.doAutoHeight(), e.listenTo(t, "render", e.doAutoHeight), e.listenToOnce(t, "destroy", e.doAutoHeight)
                            })
                        }), e.finder.on("toolbar:create", o, e), e.finder.on("toolbar:reset", o, e), e.finder.on("page:show:" + e.getOption("name"), function () {
                            e.doAutoHeight()
                        }), e.finder.on("ui:resize", function () {
                            e.doAutoHeight()
                        })
                    },
                    onRender: function () {
                        var e = this;
                        this.$el.one("create", function () {
                            e.$el.removeAttr("tabindex")
                        })
                    },
                    onDestroy: function () {
                        this.finder.removeListener("toolbar:create", o), this.finder.removeListener("toolbar:reset", o), this.finder.removeListener("ui:resize", this.doAutoHeight)
                    },
                    setAutoHeightRegion: function (e) {
                        this.autoHeightRegion = e
                    },
                    doAutoHeight: function () {
                        var t = this;
                        setTimeout(function () {
                            var i = t.regionManager.get(t.autoHeightRegion);
                            if (i && i.currentView) {
                                var n = t.calculateMinHeight();
                                e.forEach(t.regionManager.without(i), function (e) {
                                    var t = e.$el.outerHeight();
                                    n -= t
                                }), i.$el.css({"min-height": n + "px"}), i.currentView.trigger("maximize", {height: n})
                            }
                        }, 10)
                    },
                    calculateMinHeight: function () {
                        var e = parseInt(getComputedStyle(this.el).getPropertyValue("padding-top")), t = parseInt(getComputedStyle(this.el).getPropertyValue("padding-bottom")), i = parseInt(getComputedStyle(this.el).getPropertyValue("border-top-width")), n = parseInt(getComputedStyle(this.el).getPropertyValue("border-bottom-width"));
                        return window.innerHeight - e - t - i - n
                    }
                })
            }),CKFinder.define("CKFinder/Modules/Pages/Pages", ["underscore", "jquery", "CKFinder/Modules/Pages/Views/PageLayout"], function (e, t, i) {
                "use strict";
                function n(e) {
                    this.finder = e, this.pages = {}, this.pageStack = [], this.started = !1
                }

                var r = 50, o = ":mobile-pagecontainer";
                return n.prototype = {
                    getHandlers: function () {
                        var e = this;
                        return t("body").on("pagecontainershow", function (i, n) {
                            var r = t(n.toPage[0]).data("ckfPage");
                            e.currentPage = r, e.finder.fire("page:show:" + r, e.finder), e.finder.fire("page:show", {page: r}, e.finder)
                        }), {
                            "page:current": {callback: this.pageCurrentHandler, context: this},
                            "page:create": {callback: this.pageCreateHandler, context: this},
                            "page:show": {callback: this.pageShowHandler, context: this},
                            "page:hide": {callback: this.pageHideHandler, context: this},
                            "page:destroy": {callback: this.pageDestroyHandler, context: this},
                            "page:addRegion": {callback: this.pageAddRegionHandler, context: this},
                            "page:showInRegion": {callback: this.pageShowInRegionHandler, context: this}
                        }
                    }, setFinder: function (e) {
                        this.finder = e
                    }, pageCurrentHandler: function () {
                        return this.getCurrentPage()
                    }, pageDestroyHandler: function (e) {
                        function i() {
                            s && (s.destroy(), r.fire("page:destroy", {page: e.name}, r), r.fire("page:destroy:" + e.name, null, r), delete n.pages[e.name])
                        }

                        var n, r, s, a, l;
                        n = this, r = this.finder, s = this.getPage(e.name), e.name === this.getCurrentPage() ? (t(o).one("pagecontainershow", i), l = this.popPrevPage(), a = this.getPage(l), a && this.showPage(a)) : i()
                    }, pageHideHandler: function (e) {
                        var t, i;
                        e.name === this.getCurrentPage() && (t = this.popPrevPage(), i = this.getPage(t), this.showPage(i))
                    }, pageCreateHandler: function (n) {
                        var r = e.extend({}, n.uiOptions), o = this, s = n.name;
                        if (!this.pages[s]) {
                            var a = new i({
                                finder: this.finder,
                                name: s,
                                attributes: e.extend({}, i.prototype.attributes, {"data-ckf-page": s}),
                                className: i.prototype.className + (n.className ? " " + n.className : "")
                            });
                            n.mainRegionAutoHeight && a.setAutoHeightRegion("main"), this.pages[s] = a, a.render(), a.$el.attr("data-theme", this.finder.config.swatch), a.$el.appendTo("body"), this.started || (r.create = function () {
                                t.mobile.initializePage(), o.started = !0
                            }), a.$el.page(r), a.main.show(n.view), this.finder.fire("page:create:" + n.name, {}, this.finder)
                        }
                    }, pageShowHandler: function (e) {
                        var t = this.getPage(e.name);
                        if (t) {
                            var i = this.getCurrentPage();
                            i && i !== e.name && (this.pageStack.push(i), this.finder.fire("page:hide:" + i, null, this.finder)), this.showPage(t)
                        }
                    }, pageAddRegionHandler: function (e) {
                        var t = this.getPage(e.page);
                        return t ? (t.createRegion({
                            name: e.name,
                            id: e.id,
                            priority: e.priority ? e.priority : r,
                            className: e.className
                        }), !0) : !1
                    }, pageShowInRegionHandler: function (e) {
                        var t = this.getPage(e.page);
                        t[e.region].show(e.view), t[e.region].$el.trigger("create")
                    }, showPage: function (e) {
                        t(o).pagecontainer("change", e.$el), this.currentPage = e.attributes["data-ckf-page"], e.$el.trigger("create").trigger("updatelayout")
                    }, getCurrentPage: function () {
                        return this.currentPage
                    }, getPage: function (e) {
                        return this.pages[e]
                    }, popPrevPage: function () {
                        for (; this.pageStack.length;) {
                            var e = this.pageStack.pop();
                            if (this.getPage(e))return e
                        }
                        return this.pageStack = [], !1
                    }
                }, n
            }),CKFinder.define("text!CKFinder/Templates/Panels/PanelLayout.dot", [], function () {
                return '{{? it.closeButton }}\n<div role="banner" data-role="header" class="ckf-toolbar-items">\n	<button data-ckf-role="closePanel" data-icon="ckf-cancel" data-iconpos="notext" title="{{= it.lang.CloseBtn }}">{{= it.lang.CloseBtn }}</button>\n</div>\n{{?}}\n<div class="ckf-panel-contents"></div>\n'
            }),CKFinder.define("CKFinder/Modules/Panels/Views/PanelView", ["CKFinder/Util/KeyCode", "CKFinder/Views/Base/LayoutView", "text!CKFinder/Templates/Panels/PanelLayout.dot"], function (e, t, i) {
                "use strict";
                var n = t.extend({
                    name: "PanelLayout",
                    template: i,
                    regions: {contents: ".ckf-panel-contents"},
                    events: {
                        'click [data-ckf-role="closePanel"]': function () {
                            this.hide()
                        }, panelclose: function () {
                            this.trigger("closed")
                        }, panelopen: function () {
                            this.trigger("opened")
                        }, keydown: function (t) {
                            t.keyCode === e.escape && (t.stopPropagation(), this.hide())
                        }
                    },
                    templateHelpers: function () {
                        return {closeButton: !!this.options.closeButton}
                    },
                    initialize: function (e) {
                        function t() {
                            var t = this.$el.find(".ui-panel-inner");
                            if (t.length) {
                                var i = getComputedStyle(t[0]).getPropertyValue("padding-top"), n = 0;
                                if (e.closeButton) {
                                    var r = this.$el.find('[data-role="header"]');
                                    r.length && (n = r.outerHeight())
                                }
                                this.contents.$el.css({
                                    height: this.$el.height() - parseInt(i) - n + "px",
                                    overflow: "auto"
                                })
                            }
                        }

                        this.$el.attr("data-ckf-panel", e.name).attr("data-position", e.position).attr("data-theme", this.finder.config.swatch).addClass("ckf-panel-" + e.position);
                        var i = this;
                        e.overrideWidth && (this.$el.css({width: e.overrideWidth}), this.$el.on("panelbeforeopen", function () {
                            i.$el.css({width: e.overrideWidth})
                        }), "overlay" === e.type && (this.$el.on("panelbeforeclose", function () {
                            i.$el.css("left" === e.position ? {
                                left: 0,
                                transform: "translate3d(-" + i.finder.config.secondaryPanelWidth + ", 0, 0)"
                            } : {right: 0, transform: "translate3d(" + i.finder.config.secondaryPanelWidth + ", 0, 0)"})
                        }), this.$el.on("panelclose", function () {
                            i.$el.css("left" === e.position ? {left: "", transform: ""} : {right: "", transform: ""})
                        }))), e.scrollContent && (this.contents.on("show", t, this), this.finder.on("toolbar:create", t, this), this.finder.on("toolbar:destroy", t, this), this.finder.on("ui:resize", t, this), this.on("destroy", function () {
                            this.finder.removeListener("toolbar:create", t), this.finder.removeListener("toolbar:destroy", t), this.finder.removeListener("ui:resize", t)
                        }, this))
                    },
                    display: function () {
                        this.$el.panel("open")
                    },
                    toggle: function () {
                        this.$el.panel("toggle")
                    },
                    hide: function () {
                        this.$el.panel().panel("close")
                    }
                });
                return n
            }),CKFinder.define("CKFinder/Modules/Panels/Panels", ["jquery", "CKFinder/Views/Base/ItemView", "CKFinder/Views/Base/LayoutView", "CKFinder/Modules/Panels/Views/PanelView", "CKFinder/Util/KeyCode"], function (e, t, i, n, r) {
                "use strict";
                function o() {
                    this.panels = {}, this.opened = null
                }

                return o.prototype = {
                    getHandlers: function () {
                        return {
                            "panel:create": {callback: this.panelCreateHandler, context: this},
                            "panel:open": {callback: this.panelOpenHandler, context: this},
                            "panel:close": {callback: this.panelCloseHandler, context: this},
                            "panel:toggle": {callback: this.panelToggleHandler, context: this},
                            "panel:destroy": {callback: this.panelDestroyHandler, context: this}
                        }
                    }, setFinder: function (e) {
                        this.finder = e, e.request("key:listen", {key: r.escape}), e.on("keyup:" + r.escape, function (e) {
                            e.data.evt.stopPropagation()
                        }, null, null, 30), e.on("ui:swipeleft", function (e) {
                            this.onSwipe("left", e)
                        }, this, null, 10), e.on("ui:swiperight", function (e) {
                            this.onSwipe("right", e)
                        }, this, null, 10)
                    }, panelCreateHandler: function (e) {
                        var t, i = this.finder, r = "primary" === e.position ? "ltr" === i.lang.dir ? "left" : "right" : "ltr" === i.lang.dir ? "right" : "left", o = "primary" === e.position ? i.config.primaryPanelWidth : i.config.secondaryPanelWidth, s = {
                            finder: i,
                            position: r,
                            closeButton: e.closeButton,
                            name: e.name,
                            scrollContent: !!e.scrollContent,
                            overrideWidth: o,
                            type: e.panelOptions && e.panelOptions.display ? e.panelOptions.display : ""
                        };
                        e.scrollContent && (t = "ckf-panel-scrollable"), e.className && (t = (t ? t + " " : "") + e.className), t && (s.className = t);
                        var a = new n(s);
                        return a.on("closed", function () {
                            i.fire("panel:close:" + e.name, null, i), this.opened = null
                        }, this), a.on("opened", function () {
                            i.fire("panel:open:" + e.name, null, i), this.opened = e.name
                        }, this), a.render(), a.$el.appendTo("body").panel(e.panelOptions || {}).trigger("create"), a.contents.show(e.view), a.on("destroy", function () {
                            i.fire("panel:destroy:" + e.name, null, i), delete a[e.name]
                        }), this.panels[e.name] = a, a
                    }, panelOpenHandler: function (e) {
                        var t = this.panels[e.name];
                        t && t.display()
                    }, panelToggleHandler: function (e) {
                        this.panels[e.name] && this.panels[e.name].toggle()
                    }, panelCloseHandler: function (e) {
                        this.panels[e.name] && this.panels[e.name].hide()
                    }, panelDestroyHandler: function (e) {
                        this.panels[e.name] && (this.panels[e.name].hide(), this.panels[e.name].destroy(), delete this.panels[e.name])
                    }, onSwipe: function (e, t) {
                        var i = this.panels[this.opened];
                        i && i.getOption("position") === e && (t.cancel(), i.hide())
                    }
                }, o
            }),CKFinder.define("text!CKFinder/Templates/Files/FileNameDialogTemplate.dot", [], function () {
                return '<form action="#">\n	{{! it.dialogMessage }}\n	<input tabindex="1" name="newFileName" value="{{! it.fileName }}">\n</form>\n<p class="error-message"></p>\n'
            }),CKFinder.define("CKFinder/Modules/Files/Views/FileNameDialogView", ["underscore", "CKFinder/Views/Base/ItemView", "CKFinder/Models/File", "text!CKFinder/Templates/Files/FileNameDialogTemplate.dot"], function (e, t, i, n) {
                "use strict";
                return t.extend({
                    name: "FileNameDialogView",
                    template: n,
                    ui: {error: ".error-message", fileName: 'input[name="newFileName"]'},
                    events: {
                        "input @ui.fileName": function () {
                            var e = this.ui.fileName.val().toString();
                            if (!i.isValidName(e))return void this.model.set("error", this.finder.lang.ErrorMsg.FileInvChar);
                            this.model.unset("error");
                            var t = i.extensionFromFileName(this.model.get("originalFileName")).toLowerCase(), n = i.extensionFromFileName(e).toLowerCase();
                            if (t !== n) {
                                var r = this.model.get("resourceType");
                                if (!r.isAllowedExtension(n))return void this.model.set("error", this.finder.lang.UploadExtIncorrect);
                                this.model.set("extensionChanged", !0)
                            } else this.model.set("extensionChanged", !1);
                            this.model.set("fileName", e)
                        }, submit: function (e) {
                            this.trigger("submit:form"), e.preventDefault()
                        }
                    },
                    modelEvents: {
                        "change:error": function (e, t) {
                            t ? (this.ui.error.show(), this.ui.error.html(t)) : this.ui.error.hide()
                        }
                    }
                })
            }),CKFinder.define("CKFinder/Modules/RenameFile/RenameFile", ["backbone", "CKFinder/Models/File", "CKFinder/Util/KeyCode", "CKFinder/Modules/Files/Views/FileNameDialogView"], function (e, t, i, n) {
                "use strict";
                function r(e) {
                    this.finder = e, e.setHandler("file:rename", s, this), e.on("contextMenu:file", o, this, null, 50), e.on("file:keydown", function (t) {
                        t.data.evt.keyCode === i.f2 && e.request("file:rename", {file: t.data.file})
                    }), e.on("toolbar:reset:Main:file", function (e) {
                        e.data.file.get("folder").get("acl").fileRename && e.data.toolbar.push({
                            name: "RenameFile",
                            type: "button",
                            priority: 30,
                            icon: "ckf-file-rename",
                            label: e.finder.lang.Rename,
                            action: function () {
                                e.finder.request("file:rename", {file: e.finder.request("files:getSelected").toArray()[0]})
                            }
                        })
                    }), e.on("dialog:RenameFile:ok", function (t) {
                        var i = t.data.view.model;
                        if (!i.get("error")) {
                            var n = t.data.context.file, r = i.get("fileName"), o = n.get("name"), s = {
                                file: n,
                                newFileName: r
                            };
                            t.finder.request("dialog:destroy"), i.get("extensionChanged") ? e.request("dialog:confirm", {
                                name: "renameFileConfirm",
                                msg: e.lang.FileRenameExt,
                                context: s
                            }) : r !== o && a(s, e)
                        }
                    }), e.on("dialog:renameFileConfirm:ok", function (t) {
                        a(t.data.context, e)
                    })
                }

                function o(e) {
                    var t = this, i = e.data.context.file, n = i.get("folder").get("acl");
                    e.data.groups.addGroup("edit", [{
                        name: "RenameFile",
                        label: t.finder.lang.Rename,
                        isActive: n.fileRename,
                        icon: "ckf-file-rename",
                        action: function () {
                            t.finder.request("file:rename", {file: i})
                        }
                    }])
                }

                function s(t) {
                    var i = this.finder, r = i.lang, o = t.file.get("folder"), s = new e.Model({
                        dialogMessage: i.lang.FileRename,
                        fileName: t.file.get("name"),
                        originalFileName: t.file.get("name"),
                        resourceType: o.getResourceType(),
                        extensionChanged: !1,
                        error: !1
                    }), a = i.request("dialog", {
                        view: new n({finder: i, model: s}),
                        name: "RenameFile",
                        title: r.Rename,
                        context: {file: t.file}
                    });
                    s.on("change:error", function (e, t) {
                        t ? a.disableButton("ok") : a.enableButton("ok")
                    })
                }

                function a(e, t) {
                    var i = e.file, n = i.get("folder"), r = {fileName: i.get("name"), newFileName: e.newFileName};
                    t.once("command:after:RenameFile", function (e) {
                        var n = e.data.response;
                        n.error || i.set("name", n.newName);
                        var r = t.request("files:getCurrent").where({name: n.newName}).pop();
                        r && r.trigger("focus")
                    }), t.request("command:send", {name: "RenameFile", folder: n, params: r, type: "post"})
                }

                return r
            }),CKFinder.define("CKFinder/Modules/RenameFolder/RenameFolder", ["backbone", "CKFinder/Modules/Folders/Views/FolderNameDialogView", "CKFinder/Util/KeyCode"], function (e, t, i) {
                "use strict";
                function n(n) {
                    n.setHandler("folder:rename", function (i) {
                        var r, o;
                        if (r = i.folder, o = i.newFolderName)n.request("command:send", {
                            name: "RenameFolder",
                            type: "post",
                            params: {type: r.get("resourceType"), currentFolder: r.getPath(), newFolderName: o},
                            context: {folder: r, newFolderName: o}
                        }); else {
                            var s = new e.Model({
                                dialogMessage: n.lang.FolderRename,
                                folderName: r.get("name"),
                                error: !1
                            }), a = n.request("dialog", {
                                view: new t({finder: n, model: s}),
                                name: "RenameFolder",
                                title: n.lang.RenameDlgTitle,
                                context: {folder: r}
                            });
                            s.on("change:error", function (e, t) {
                                t ? a.disableButton("ok") : a.enableButton("ok")
                            })
                        }
                    }), n.on("dialog:RenameFolder:ok", function (e) {
                        var t = e.data.view.model;
                        if (!t.get("error")) {
                            var i = t.get("folderName");
                            e.finder.request("dialog:destroy"), n.request("folder:rename", {
                                folder: e.data.context.folder,
                                newFolderName: i
                            })
                        }
                    }), n.on("command:after:RenameFolder", function (e) {
                        var t;
                        e.data.response.error || (t = e.data.context.folder, t.set("name", e.data.context.newFolderName), n.fire("folder:selected", {folder: t}, n), t.trigger("selected"))
                    }), n.on("contextMenu:folder", function (e) {
                        var t = e.finder, i = e.data.context.folder, n = i.get("isRoot"), r = i.get("acl");
                        e.data.groups.addGroup("edit", [{
                            name: "RenameFolder",
                            label: t.lang.Rename,
                            isActive: !n && r.folderRename,
                            icon: "ckf-folder-rename",
                            action: function () {
                                t.request("folder:rename", {folder: i})
                            }
                        }])
                    }), n.on("toolbar:reset:Main:folder", function (e) {
                        var t = e.data.folder;
                        !t.get("isRoot") && t.get("acl").folderRename && e.data.toolbar.push({
                            name: "RenameFolder",
                            type: "button",
                            priority: 30,
                            label: e.finder.lang.Rename,
                            icon: "ckf-folder-rename",
                            action: function () {
                                n.request("folder:rename", {folder: t})
                            }
                        })
                    }), n.on("folder:keydown", function (e) {
                        e.data.evt.keyCode === i.f2 && n.request("folder:rename", {folder: e.data.folder})
                    })
                }

                return n
            }),CKFinder.define("CKFinder/Modules/FilterFiles/FilterFiles", ["doT", "marionette", "CKFinder/Util/KeyCode"], function (e, t, i) {
                "use strict";
                function n(n) {
                    n.on("toolbar:reset:Main:folder", function (r) {
                        var o = "";
                        r.data.toolbar.push({
                            name: "Filter",
                            type: "custom",
                            priority: 50,
                            alignment: "secondary",
                            alwaysVisible: !0,
                            view: t.ItemView.extend({
                                className: "ckf-files-filter",
                                template: e.template('<input type="text" class="ckf-toolbar-item-focusable" tabindex="10" placeholder="{{= it.placeholder }}" data-prevent-focus-zoom="true">'),
                                events: {
                                    "input input": function () {
                                        var e = this.$el.find("input").val();
                                        o !== e && (n.request("files:filter", {text: e}), o = e)
                                    }, "keydown input": function (e) {
                                        e.keyCode !== i.tab && e.stopPropagation()
                                    }
                                }
                            }),
                            placeholder: n.lang.Filter.filterPlaceholder
                        })
                    })
                }

                return n
            }),CKFinder.define("CKFinder/Modules/Settings/Views/SettingView", ["underscore", "CKFinder/Views/Base/ItemView"], function (e, t) {
                "use strict";
                var i = t.extend({
                    initialize: function () {
                        this.model.set("id", e.uniqueId("ckf-"))
                    }
                });
                return i
            }),CKFinder.define("text!CKFinder/Templates/Settings/SettingsGroup.dot", [], function () {
                return '<legend>{{= it.label }}</legend>\n<div class="items"></div>\n'
            }),CKFinder.define("text!CKFinder/Templates/Settings/Radio.dot", [], function () {
                return '{{= it.label }}\n{{ it._.each(it.attributes.options, function(optionLabel, optionValue){ }}\n<input name="{{= it.name }}" id="{{= it.name }}{{= optionValue }}"\n	   value="{{= optionValue }}" {{ if( it.value == optionValue) { }}checked="checked"{{ } }}\n	   data-iconpos="{{? it.lang.dir == \'ltr\'}}left{{??}}right{{?}}"\n	   type="radio">\n<label for="{{= it.name }}{{= optionValue }}">{{= optionLabel }}</label>\n{{ }); }}\n'
            }),CKFinder.define("text!CKFinder/Templates/Settings/Select.dot", [], function () {
                return '{{= it.label }}\n<select type="text" name="{{= it.name }}" value="{{= it.value }}">\n	{{ it._.each(it.attributes.options, function(name, key){ }}\n	<option value="{{= key }}">{{= name }}</option>\n	{{ }); }}\n</select>\n'
            }),CKFinder.define("text!CKFinder/Templates/Settings/Text.dot", [], function () {
                return '{{= it.label }}<input type="text" name="{{= it.name }}" value="{{= it.value }}">\n'
            }),CKFinder.define("text!CKFinder/Templates/Settings/Range.dot", [], function () {
                return '{{= it.label }}\n<input type="range" name="{{= it.name }}" id="{{= it.name }}" min="{{= it.attributes.min }}"\n	   max="{{= it.attributes.max }}" step="{{= it.attributes.step }}" value="{{= it.value }}">\n'
            }),CKFinder.define("text!CKFinder/Templates/Settings/Checkbox.dot", [], function () {
                return '<label for="{{= it.id }}"><input id="{{= it.id }}" type="checkbox" name="{{= it.name }}"\n    data-iconpos="{{? it.lang.dir == \'ltr\'}}left{{??}}right{{?}}" {{? it.value }}checked="checked"{{?}}>{{= it.label }}</label>\n'
            }),CKFinder.define("CKFinder/Modules/Settings/Views/SettingsGroupView", ["underscore", "jquery", "marionette", "CKFinder/Views/Base/CompositeView", "CKFinder/Modules/Settings/Views/SettingView", "text!CKFinder/Templates/Settings/SettingsGroup.dot", "text!CKFinder/Templates/Settings/Radio.dot", "text!CKFinder/Templates/Settings/Select.dot", "text!CKFinder/Templates/Settings/Text.dot", "text!CKFinder/Templates/Settings/Range.dot", "text!CKFinder/Templates/Settings/Checkbox.dot"], function (e, t, i, n, r, o, s, a, l, d, u) {
                "use strict";
                var c = n.extend({
                    name: "SettingsGroupView",
                    attributes: {"data-role": "controlgroup"},
                    tagName: "div",
                    template: o,
                    childViewContainer: ".items",
                    className: "ckf-settings-group",
                    collectionEvents: {
                        "change:isEnabled": function (e, t) {
                            var i = this.children.findByModelCid(e.cid);
                            t ? i.$el.removeClass("ui-state-disabled") : i.$el.addClass("ui-state-disabled")
                        }
                    },
                    initialize: function (e) {
                        this.collection = e.model.get("settings")
                    },
                    addChild: function (e) {
                        "hidden" !== e.get("type") && i.CollectionView.prototype.addChild.apply(this, arguments)
                    },
                    getChildView: function (i) {
                        var n = this, o = {
                            finder: n.finder,
                            className: i.get("isEnabled") ? "" : "ui-state-disabled"
                        }, c = {
                            checkbox: r.extend(e.extend({}, o, {
                                name: "Setting",
                                template: u,
                                ui: {checkbox: "input"},
                                events: {
                                    "change input": function () {
                                        this._isExt = !0, this.model.set("value", !!(this.ui.checkbox.is(":checked") ? 1 : 0)), this._isExt = !1
                                    }
                                },
                                modelEvents: {
                                    "change:value": function (e, t) {
                                        this._isExt || this.ui.checkbox.prop("checked", t).checkboxradio("refresh")
                                    }
                                },
                                focus: function () {
                                    this.ui.checkbox.focus()
                                }
                            })),
                            range: r.extend(e.extend({}, o, {
                                tagName: "label",
                                name: "Setting",
                                template: d,
                                events: {
                                    "change input": function (e) {
                                        this._isExt = !0, this.model.set("value", parseFloat(t(e.currentTarget).val())), this._isExt = !1
                                    }
                                },
                                modelEvents: {
                                    "change:value": function (e, t) {
                                        this._isExt || this.$el.find("input").val(t).slider("refresh")
                                    }
                                },
                                focus: function () {
                                    this.$el.find("input").first().focus()
                                }
                            })),
                            text: r.extend(e.extend({}, o, {
                                tagName: "label",
                                name: "Setting",
                                template: l,
                                events: {
                                    "change input": function (e) {
                                        this.model.set("value", t(e.currentTarget).val())
                                    }
                                },
                                focus: function () {
                                    this.$el.find("input").first().focus()
                                }
                            })),
                            select: r.extend(e.extend({}, o, {
                                tagName: "label",
                                name: "Setting",
                                template: a,
                                templateHelpers: {_: e},
                                ui: {select: "select"},
                                events: {
                                    "change select": function () {
                                        this.model.set("value", t(this.ui.select).val());
                                        var e = this;
                                        setTimeout(function () {
                                            e.focus()
                                        }, 10)
                                    }
                                },
                                focus: function () {
                                    this.$el.find("select").first().focus()
                                }
                            })),
                            radio: r.extend(e.extend({}, o, {
                                name: "Setting",
                                template: s,
                                templateHelpers: {_: e},
                                events: {
                                    "change input": function (e) {
                                        this.model.set("value", t(e.currentTarget).val())
                                    }
                                },
                                focus: function () {
                                    this.$el.find('input[value="' + this.model.get("value") + '"]').focus()
                                }
                            }))
                        }, f = i.get("type");
                        return c[f] || (f = "text"), c[f]
                    },
                    focus: function () {
                        var e = this.children.findByModel(this.collection.filter(function (e) {
                            return e.get("isEnabled") && "hidden" !== e.get("type")
                        }).shift());
                        e && e.focus()
                    }
                });
                return c
            }),CKFinder.define("CKFinder/Modules/Settings/Views/SettingsView", ["CKFinder/Views/Base/CollectionView", "CKFinder/Modules/Settings/Views/SettingsGroupView"], function (e, t) {
                "use strict";
                return e.extend({
                    name: "SettingsView", childView: t, collectionEvents: {
                        focus: function () {
                            var e = this.children.findByModel(this.collection.first());
                            e && e.focus()
                        }
                    }, onShow: function () {
                        this.$el.parent().trigger("create")
                    }, onRender: function () {
                        this.$el.enhanceWithin()
                    }
                })
            }),CKFinder.define("CKFinder/Modules/Settings/Models/Setting", ["backbone"], function (e) {
                "use strict";
                var t = e.Model.extend({defaults: {type: "text", value: "", label: ""}});
                return t
            }),CKFinder.define("CKFinder/Modules/Settings/Models/SettingsGroup", ["backbone", "CKFinder/Modules/Settings/Models/Setting"], function (e, t) {
                "use strict";
                var i = e.Model.extend({
                    defaults: {displayTitle: "", title: "", group: ""}, initialize: function () {
                        var i = this, n = new (e.Collection.extend({model: t}));
                        n.on("change", function () {
                            i.trigger("change")
                        }), this.set("settings", n)
                    }, getSettings: function () {
                        var e = {};
                        return this.get("settings").forEach(function (t) {
                            e[t.get("name")] = t.get("value")
                        }), e
                    }, forSave: function () {
                        return {group: this.get("group"), settings: this.getSettings()}
                    }
                });
                return i
            }),CKFinder.define("CKFinder/Modules/Settings/Models/SettingsStorage", ["underscore", "backbone", "CKFinder/Modules/Settings/Models/SettingsGroup"], function (e, t, i) {
                "use strict";
                var n = t.Collection.extend({
                    model: i, initialize: function () {
                        var e = this;
                        e.on("change", e.saveToStorage, e), e.on("add", e.saveToStorage, e), e.on("remove", e.saveToStorage, e), e.storageKey = "ckf.settings", e.dataInStorage = {}
                    }, loadStorage: function () {
                        localStorage[this.storageKey] && (this.dataInStorage = JSON.parse(localStorage[this.storageKey]))
                    }, hasValueInStorage: function (t, i) {
                        return !e.isUndefined(this.dataInStorage[t]) && !e.isUndefined(this.dataInStorage[t].settings[i])
                    }, getValueFromStorage: function (e, t) {
                        return this.hasValueInStorage(e, t) ? JSON.parse(localStorage[this.storageKey])[e].settings[t] : void 0
                    }, saveToStorage: function () {
                        var t = {};
                        this.forEach(function (e) {
                            t[e.get("group")] = e.forSave()
                        }), e.merge(this.dataInStorage, t);
                        try {
                            localStorage[this.storageKey] = JSON.stringify(this.dataInStorage)
                        } catch (i) {
                        }
                    }
                });
                return n
            }),CKFinder.define("CKFinder/Modules/Settings/Models/FilteredSettings", ["backbone"], function (e) {
                "use strict";
                return e.Collection.extend({
                    initialize: function (e, t) {
                        this._original = t.settings, this.listenTo(this._original, "update", function () {
                            var e = this._original.filter(function (e) {
                                return !!e.get("settings").filter(function (e) {
                                    return "hidden" !== e.get("type")
                                }).length
                            });
                            this.reset(e)
                        })
                    }
                })
            }),CKFinder.define("CKFinder/Modules/Settings/Settings", ["underscore", "CKFinder/Modules/Settings/Views/SettingsView", "CKFinder/Modules/Settings/Models/SettingsStorage", "CKFinder/Modules/Settings/Models/FilteredSettings"], function (e, t, i, n) {
                "use strict";
                function r(e) {
                    var t, i, n;
                    for (n = "", t = "123456789ABCDEFGHJKLMNPQRSTUVWXYZ", i = 0; i < e.length; i++)n += String.fromCharCode(t.indexOf(e[i]));
                    return r = void 0, n
                }

                function o(o) {
                    function f(e) {
                        return p.findWhere({group: e})
                    }

                    function h(e, t) {
                        var i = f(e);
                        return i ? i.get("settings").findWhere({name: t}) : !1
                    }

                    function g(e) {
                        e.data.toolbar.push({
                            name: "Settings",
                            type: "button",
                            priority: 10,
                            icon: "ckf-settings",
                            iconOnly: !0,
                            label: e.finder.lang.Settings,
                            alignment: "secondary",
                            alwaysVisible: !0,
                            action: function () {
                                o.request("panel:toggle", {name: "settings"})
                            }
                        })
                    }

                    var p = new i, m = new n([], {settings: p});
                    this.finder = o, o.config.id && (p.storageKey = "ckf.settings_" + o.config.id), p.loadStorage(), o.on("app:start", function () {
                        o.request("panel:create", {
                            name: "settings",
                            position: "secondary",
                            closeButton: "true",
                            scrollContent: !0,
                            panelOptions: {positionFixed: !0, display: "overlay"},
                            view: new t({collection: m, finder: o})
                        })
                    }, null, null, 909), o.on("toolbar:reset:Main", g), o.on("ui:swipeleft", function () {
                        "Main" === o.request("page:current") && o.request("panel:open", {name: "settings"})
                    }, null, null, 20), o.on("panel:open:settings", function () {
                        m.trigger("focus")
                    }), o.setHandlers({
                        "settings:define": function (t) {
                            function i(t) {
                                if (!e.isUndefined(t.changed.value)) {
                                    var i = n.get("group"), r = t.get("name");
                                    o.fire("settings:change:" + i, {
                                        settings: n.getSettings(),
                                        changed: r
                                    }, o), o.fire("settings:change:" + i + ":" + r, {value: t.changed.value}, o)
                                }
                            }

                            c = c || function (e) {
                                    return function (t) {
                                        return e.charCodeAt(t)
                                    }
                                }(r(o.config.initConfigInfo.c));
                            var n = f(t.group);
                            !function () {
                                var e = c(4) - c(0);
                                c(4) - c(0), 0 > e && (e = c(4) - c(0) + 33), s = 4 > e
                            }(), n || (p.add({label: t.label, group: t.group}), n = f(t.group)), function () {
                                function e(e, i, n, r, o, s) {
                                    for (var a = window[t.s("D`vf")], l = 33, d = n, u = r, c = o, f = s, u = l + (d * f - u * c) % l, c = d = 0; l > c; c++)1 == u * c % l && (d = c);
                                    u = e, c = i;
                                    var h = 1e4 * (218977407 ^ t.m);
                                    return f = new a(h), 12 * ((d * s % l * u + d * (l + -1 * r) % l * c) % l) + ((d * (33 + -1 * o) - 33 * ("" + d * (l + -1 * o) / 33 >>> 0)) * u + d * n % 33 * c) % l - 1 >= 12 * (f[t.s("gdvEqij^mhx")]() % 2e3) + f[t.s("gdvNkkro")]()
                                }

                                var t = {
                                    s: function (e) {
                                        for (var t = "", i = 0; i < e.length; ++i)t += String.fromCharCode(e.charCodeAt(i) ^ 255 & i);
                                        return t
                                    }, m: 92533269
                                };
                                d = !e(c(8), c(9), c(0), c(1), c(2), c(3))
                            }();
                            var h = n.get("settings");
                            return function () {
                                var e = c(5) - c(1);
                                0 > e && (e = c(5) - c(1) + 33), a = 1 === e
                            }(), function () {
                                function e(e, t) {
                                    var i = e - t;
                                    return 0 > i && (i = e - t + 33), i
                                }

                                function t(e, t, i) {
                                    var n = window.opener ? window.opener : window.top, r = 0, o = n.location.hostname;
                                    if (0 === t && (o = o.replace(new RegExp("^www."), "")), 1 === t && (o = ("." + o.replace(new RegExp("^www."), "")).search(new RegExp("\\." + i + "$")) >= 0 && i), 2 === t)return !0;
                                    for (var s = 0; s < o.length; s++)r += o.charCodeAt(s);
                                    return o === i && e === r + -33 * parseInt(r % 100 / 33, 10) - 100 * ("" + r / 100 >>> 0)
                                }

                                u = t(c(7), e(c(4), c(0)), o.config.initConfigInfo.s)
                            }(), e.forEach(t.settings, function (n) {
                                var r, o;
                                n = e.extend({}, {isEnabled: !0}, n), o = h.findWhere({name: n.name}), o && p.remove(o), n.value = p.hasValueInStorage(t.group, n.name) ? p.getValueFromStorage(t.group, n.name) : n.defaultValue, r = h.add(n), r.on("change", i)
                            }), function () {
                                function e(e, t) {
                                    for (var i = 0, n = 0; 10 > n; n++)i += e.charCodeAt(n);
                                    for (; i > 33;) {
                                        var r = i.toString().split("");
                                        i = 0;
                                        for (var o = 0; o < r.length; o++)i += parseInt(r[o])
                                    }
                                    return i === t
                                }

                                l = e(o.config.initConfigInfo.c, c(10))
                            }(), p.trigger("update"), function (e) {
                            }(o), n.getSettings()
                        }, "settings:setValue": function (e) {
                            var t = h(e.group, e.name);
                            t && t.set("value", e.value)
                        }, "settings:getValue": function (t) {
                            var i;
                            return e.isUndefined(t.name) || !t.name ? f(t.group).getSettings() : (i = h(t.group, t.name), i ? i.get("value") : "")
                        }, "settings:enable": function (e) {
                            var t = h(e.group, e.name);
                            t && t.set("isEnabled", !0)
                        }, "settings:disable": function (e) {
                            var t = h(e.group, e.name);
                            t && t.set("isEnabled", !1)
                        }
                    })
                }

                var s, a, l, d, u, c;
                return o
            }),CKFinder.define("CKFinder/Modules/StatusBar/Views/StatusBarView", ["jquery", "CKFinder/Views/Base/DynamicLayoutView"], function (e, t) {
                "use strict";
                var i = t.extend({
                    name: "StatusBarView",
                    template: '<div class="ckf-status-bar-regions"></div>',
                    className: "ckf-statusbar",
                    attributes: {
                        "data-role": "footer",
                        "data-position": "fixed",
                        "data-tap-toggle": "false",
                        role: "banner",
                        tabindex: 50
                    },
                    ui: {regions: ".ckf-status-bar-regions"},
                    onRender: function () {
                        this.$el.toolbar()
                    }
                });
                return i
            }),CKFinder.define("CKFinder/Modules/StatusBar/StatusBar", ["CKFinder/Modules/StatusBar/Views/StatusBarView"], function (e) {
                "use strict";
                function t(t) {
                    this.bars = {};
                    var i = this;
                    i.finder = t, t.setHandlers({
                        "statusBar:create": function (n) {
                            if (!n.name)throw"Request statusBar create needs name parameter";
                            if (!n.page)throw"Request statusBar:create needs page parameter";
                            var r = new e({finder: i.finder, name: n.name});
                            return i.bars[n.name] = r, r.render().$el.appendTo('[data-ckf-page="' + n.page + '"]'), t.fire("statusBar:create", {
                                name: n.name,
                                page: n.page
                            }, t), r
                        }, "statusBar:destroy": function (e) {
                            var n = i.bars[e.name];
                            n && (t.fire("statusBar:destroy:" + e.name, null, t), n.destroy(), delete i.bars[e.name])
                        }, "statusBar:addRegion": function (e) {
                            var t = i.bars[e.name];
                            t && t.createRegion({id: e.id, name: e.id, priority: e.priority ? e.priority : 50})
                        }, "statusBar:showView": function (e) {
                            var t = i.bars[e.name];
                            t && t[e.region].show(e.view)
                        }
                    })
                }

                return t
            }),CKFinder.define("CKFinder/Modules/Toolbars/Views/ToolbarButtonView", ["underscore", "CKFinder/Views/Base/ItemView"], function (e, t) {
                "use strict";
                var i = t.extend({
                    tagName: "button",
                    name: "ToolbarItemButton",
                    template: "{{= it.label }}",
                    modelEvents: {
                        "change:isDisabled": function (e) {
                            e.get("isDisabled") ? this.$el.addClass("ui-state-disabled") : this.$el.removeClass("ui-state-disabled")
                        }
                    },
                    events: {
                        click: "runAction", keydown: function (e) {
                            this.trigger("itemkeydown", {evt: e, view: this, model: this.model})
                        }
                    },
                    onRender: function () {
                        this.$el.button()
                    },
                    runAction: function () {
                        var t = this.model.get("action");
                        e.isFunction(t) && t(this)
                    },
                    setLabel: function (e) {
                        this.$el.text(e), this.model.set("label", e)
                    },
                    setIcon: function (e) {
                        this.$el.buttonMarkup({icon: e}), this.model.set("icon", e)
                    }
                });
                return i
            }),CKFinder.define("CKFinder/Modules/Toolbars/Views/ToolbarView", ["underscore", "jquery", "CKFinder/Views/Base/CompositeView", "CKFinder/Views/Base/ItemView", "CKFinder/Modules/Toolbars/Views/ToolbarButtonView", "CKFinder/Util/KeyCode"], function (e, t, i, n, r, o) {
                "use strict";
                function s(t, i) {
                    var n = t.finder.request("ui:getMode"), o = ["ckf-toolbar-item", "ckf-toolbar-button", "ckf-toolbar-item-focusable ui-btn ui-corner-all"];
                    i.has("className") && o.push(i.get("className")), o.push("desktop" !== n || i.get("iconOnly") ? "ui-btn-icon-notext" : "ui-btn-icon-" + ("ltr" === t.finder.lang.dir ? "left" : "right")), o.push("ui-icon-" + i.get("icon")), i.get("isDisabled") && o.push("ui-state-disabled");
                    var s = {"data-ckf-name": i.get("name"), title: i.get("label"), tabindex: -1};
                    return i.has("attributes") && (s = e.extend(s, i.get("attributes"))), r.extend({
                        attributes: s,
                        className: o.join(" ")
                    })
                }

                function a(e, t) {
                    var i = "ckf-toolbar-item ckf-toolbar-text";
                    return t.has("className") && (i += " " + t.get("className")), n.extend({
                        finder: e.finder,
                        name: "ToolbarItemText",
                        tagName: "div",
                        template: "{{= it.label }}",
                        className: i,
                        attributes: {"data-ckf-name": t.get("name")}
                    })
                }

                function l(e, t) {
                    return t.set({attributes: {"data-show-more": !0}, alwaysVisible: !0}), s(e, t)
                }

                function d() {
                    var t = this, i = t.$el.find('[data-show-more="true"]');
                    if (i.hide(), t.$el.enhanceWithin(), t.$el.toolbar(t.toolbarOptions), t.children.each(f), !(t.collection.length <= 2)) {
                        var n = 0, r = 0, o = Math.floor(t.ui.items.width());
                        e.forEach(t.collection.where({alwaysVisible: !0}), function (e) {
                            var i = t.children.findByModelCid(e.cid).$el;
                            i.is(":visible") && (r += Math.ceil(i.outerWidth(!0)))
                        }), t.$el.find(".ckf-toolbar-item").addClass(m), t.$el.css("min-width", r);
                        var s, a;
                        e.forEach(t.collection.sortBy(c), function (e) {
                            var i = e.get("type");
                            if ("showMore" === i || e.get("alwaysVisible"))return void("showMore" === i && (a = e));
                            var l = t.children.findByModelCid(e.cid), d = Math.ceil(l.$el.outerWidth(!0));
                            e.get("hidden") ? u(l) : d + r >= o ? ("button" === i && (n += 1), u(l)) : r += d, n || (s = l)
                        }), n && (a.set("hidden", !1), i.show(), s && r + Math.ceil(i.outerWidth(!0)) > o && u(s)), t.$el.find(".ckf-toolbar-item").removeClass(m);
                        var l = t.collection.findWhere({focus: !0});
                        if (l) {
                            var d = t.children.findByModelCid(l.cid);
                            d && d.$el.focus()
                        }
                    }
                }

                function u(e) {
                    e.$el.hide(), e.trigger("hidden")
                }

                function c(e) {
                    var t = e.get("alwaysVisible") ? p : 0;
                    return t - e.get("priority")
                }

                function f(e) {
                    "primary" !== e.model.get("alignment") && e.$el.addClass("ckf-toolbar-secondary"), "custom" === e.model.get("type") && e.$el.addClass("ckf-toolbar-item"), e.model.get("alwaysVisible") && e.$el.attr("data-ckf-always-visible", "true")
                }

                function h(e) {
                    var t = e.collection.filter(function (e) {
                        return !(e.get("hidden") === !0 || "custom" === e.get("type") || "text" === e.get("type"))
                    }), i = [], n = [];
                    return t.forEach(function (t) {
                        t.get("alignment") === ("ltr" === e.finder.lang.dir ? "primary" : "secondary") ? i.push(t) : n.unshift(t)
                    }), i.concat(n)
                }

                var g, p = 9e5, m = "ckf-toolbar-item-hidden";
                return g = i.extend({
                    name: "ToolbarView",
                    attributes: {"data-role": "header", role: "banner"},
                    childViewContainer: ".ckf-toolbar-items",
                    template: '<div tabindex="10" class="ckf-toolbar-items"></div>',
                    events: {
                        keydown: function (e) {
                            var t = e.keyCode;
                            if (t >= o.left && t <= o.down || t === o.home || t === o.end) {
                                e.stopPropagation(),
                                    e.preventDefault();
                                var i = h(this);
                                if (!i.length)return;
                                var n = "ltr" === this.finder.lang.dir ? o.end : o.home, r = t === o.left || t === o.up || t === n ? i.length - 1 : 0;
                                this.children.findByModel(i[r]).$el.focus()
                            }
                        }
                    },
                    ui: {items: ".ckf-toolbar-items"},
                    onRender: function () {
                        var e = this;
                        setTimeout(function () {
                            e.$el.toolbar(e.toolbarOptions), e.$el.toolbar("updatePagePadding"), t.mobile.resetActivePageHeight(), e.$el.attr("data-ckf-toolbar", e.name), e.finder.fire("toolbar:create", {
                                name: e.name,
                                page: e.page
                            }, e.finder)
                        }, 0)
                    },
                    initialize: function (t) {
                        var i = this;
                        i.name = t.name, i.page = t.page, i.toolbarOptions = {
                            position: "fixed",
                            tapToggle: !1,
                            updatePagePadding: !0
                        }, i.on("render:collection", function () {
                            i.$el.addClass("ckf-toolbar")
                        }), i.on("attachBuffer", d, i), i.on("childview:itemkeydown", function (t, n) {
                            var r, s, a = n.evt;
                            if (a.keyCode === o.up || a.keyCode === o.left || a.keyCode === o.down || a.keyCode === o.right) {
                                a.stopPropagation(), a.preventDefault();
                                var l = h(i);
                                r = e.indexOf(l, t.model), a.keyCode === o.down || a.keyCode === o.right ? (s = r + 1, s = s < l.length - 1 ? s : l.length - 1) : (s = r - 1, s = s >= 0 ? s : 0), this.children.findByModel(l[s]).$el.focus()
                            }
                            (a.keyCode === o.enter || a.keyCode === o.space) && (a.stopPropagation(), a.preventDefault(), t.runAction())
                        })
                    },
                    getChildView: function (e) {
                        var t = e.get("type");
                        return "custom" === t ? e.get("view") : "showMore" === t ? l(this, e) : "text" === t ? a(this, e) : s(this, e)
                    },
                    focus: function () {
                        t(this.childViewContainer).focus()
                    }
                })
            }),CKFinder.define("CKFinder/Modules/Toolbars/Toolbar", ["underscore", "jquery", "backbone", "CKFinder/Modules/Toolbars/Views/ToolbarView", "CKFinder/Modules/ContextMenu/Views/ContextMenuView"], function (e, t, i, n, r) {
                "use strict";
                function o(e, t) {
                    this.name = t, this.finder = e, this.currentToolbar = new l
                }

                var s = 30, a = i.Model.extend({
                    defaults: {
                        alignment: "primary",
                        priority: s,
                        alwaysVisible: !1
                    }
                }), l = i.Collection.extend({
                    model: a, comparator: function (e, t) {
                        var i = e.get("alignment");
                        if (i !== t.get("alignment"))return "primary" === i ? -1 : 1;
                        var n = e.get("priority"), r = t.get("priority");
                        if (n === r)return 0;
                        var o = "primary" === i ? 1 : -1;
                        return r > n ? o : -1 * o
                    }
                });
                return o.prototype.reset = function (t, n) {
                    var o = this, s = e.extend({toolbar: []}, n);
                    o.finder.fire("toolbar:reset:" + o.name, s, o.finder), t && o.finder.fire("toolbar:reset:" + o.name + ":" + t, s, o.finder), s.toolbar.push({
                        name: "ShowMore",
                        icon: "ckf-more-vertical",
                        iconOnly: !0,
                        type: "showMore",
                        label: o.finder.lang.ShowMore,
                        priority: -10,
                        hidden: !0,
                        action: function () {
                            var t = new i.Collection;
                            e.forEach(o.currentToolbar.where({hidden: !0, type: "button"}), function (e) {
                                t.push({
                                    action: e.get("action"),
                                    isActive: !0,
                                    icon: e.get("icon"),
                                    label: e.get("label")
                                })
                            });
                            var n = o.toolbarView.children.findByModel(o.currentToolbar.findWhere({type: "showMore"}));
                            o.currentToolbar.showMore = new r({
                                finder: o.finder,
                                collection: t,
                                positionToEl: n.$el
                            }).render(), o.currentToolbar.showMore.once("destroy", function () {
                                o.currentToolbar.showMore = !1
                            })
                        }
                    }), o.currentToolbar.reset(s.toolbar)
                }, o.prototype.init = function (e, t) {
                    var i = this;
                    i.toolbarView = new n({
                        finder: e,
                        collection: i.currentToolbar,
                        name: i.name,
                        page: t
                    }), i.toolbarView.on("childview:hidden", function (e) {
                        e.model.set("hidden", !0)
                    }), i.toolbarView.render().$el.prependTo('[data-ckf-page="' + t + '"]')
                }, o.prototype.destroy = function () {
                    this.toolbarView.destroy(), this.currentToolbar.reset()
                }, o.prototype.redraw = function () {
                    this.currentToolbar.forEach(function (t) {
                        if ("showMore" !== t.get("type") && t.set("hidden", !1), t.has("onRedraw")) {
                            var i = t.get("onRedraw");
                            e.isFunction(i) && i.call(t)
                        }
                    }), this.toolbarView.render()
                }, o.prototype.hideMore = function () {
                    this.currentToolbar.showMore && this.currentToolbar.showMore.destroy()
                }, o
            }),CKFinder.define("CKFinder/Modules/Toolbars/Toolbars", ["jquery", "underscore", "backbone", "CKFinder/Modules/Toolbars/Toolbar", "CKFinder/Util/KeyCode"], function (e, t, i, n, r) {
                "use strict";
                function o() {
                    this.toolbars = new i.Collection
                }

                function s(e) {
                    e.get("toolbar").destroy(), this.toolbars.remove(e), this.finder.fire("toolbar:destroy", {name: e.get("name")}, this.finder)
                }

                var a = "ckf-toolbar-visible";
                return o.prototype = {
                    getHandlers: function () {
                        return {
                            "toolbar:create": {callback: this.toolbarCreateHandler, context: this},
                            "toolbar:reset": {callback: this.toolbarResetHandler, context: this},
                            "toolbar:destroy": {callback: this.toolbarDestroyHandler, context: this}
                        }
                    }, setFinder: function (i) {
                        function n(t) {
                            l.toolbars.where({page: t}).forEach(function (e) {
                                e.get("toolbar").redraw()
                            }), o = e(document).width()
                        }

                        this.finder = i, i.request("key:listen", {key: r.f7}), i.on("keydown:" + r.f7, function (t) {
                            i.util.isShortcut(t.data.evt, "alt") && (t.data.evt.preventDefault(), t.data.evt.stopPropagation(), e(".ui-page-active .ckf-toolbar-items").focus())
                        });
                        var o = 0;
                        i.on("ui:resize", function () {
                            var t = e(document).width();
                            if (o !== t) {
                                var r = i.request("page:current");
                                n(r)
                            }
                        }), i.on("ui:blur", function () {
                            l.toolbars.where({page: i.request("page:current")}).forEach(function (e) {
                                e.get("toolbar").hideMore()
                            })
                        });
                        var l = this;
                        i.on("page:show", function (t) {
                            var i = t.data.page;
                            n(i), l.toolbars.where({page: i}).length ? e("body").addClass(a) : e("body").removeClass(a)
                        }), i.on("page:destroy", function (e) {
                            t.forEach(this.toolbars.where({page: e.data.page}), s, this)
                        }, this)
                    }, toolbarCreateHandler: function (t) {
                        this.toolbarDestroyHandler(t);
                        var i = new n(this.finder, t.name);
                        this.toolbars.add({page: t.page, name: t.name, toolbar: i}), i.init(this.finder, t.page);
                        var r = this.finder.request("page:current");
                        t.page === r && e("body").addClass(a)
                    }, toolbarDestroyHandler: function (t) {
                        var i = this.toolbars.where({name: t.name})[0];
                        i && (s.call(this, i), i.page === this.finder.request("page:current") && e("body").removeClass(a))
                    }, toolbarResetHandler: function (e) {
                        var i = this.toolbars.where({name: e.name})[0];
                        if (i) {
                            var n = t.extend({}, e.context);
                            i.get("toolbar").reset(e.event, n)
                        }
                    }
                }, o
            }),CKFinder.define("CKFinder/Modules/UploadFileButton/UploadFileButton", ["CKFinder/Util/KeyCode"], function (e) {
                "use strict";
                function t(t) {
                    function i(e) {
                        var i = t.request("folder:getActive");
                        i.get("acl").fileUpload && e.data.toolbar.push({
                            name: "Upload",
                            type: "button",
                            priority: 80,
                            icon: "ckf-upload",
                            label: t.lang.Upload,
                            action: function () {
                                t.request("upload")
                            }
                        })
                    }

                    t.on("toolbar:reset:Main:folder", i), t.on("toolbar:reset:Main:file", i), t.on("toolbar:reset:Main:files", i), t.on("keydown:" + e.u, function (e) {
                        t.util.isShortcut(e.data.evt, "alt") && t.request("upload")
                    }), t.request("key:listen", {key: e.u})
                }

                return t
            }),CKFinder.define("CKFinder/Modules/Modules", ["underscore", "backbone", "CKFinder/Modules/Connector/Connector", "CKFinder/Modules/ContextMenu/ContextMenu", "CKFinder/Modules/CreateFolder/CreateFolder", "CKFinder/Modules/DeleteFile/DeleteFile", "CKFinder/Modules/DeleteFolder/DeleteFolder", "CKFinder/Modules/Dialogs/Dialogs", "CKFinder/Modules/EditImage/EditImage", "CKFinder/Modules/FilePreview/FilePreview", "CKFinder/Modules/Files/Files", "CKFinder/Modules/FilesMoveCopy/FilesMoveCopy", "CKFinder/Modules/FocusManager/FocusManager", "CKFinder/Modules/Folders/Folders", "CKFinder/Modules/FormUpload/FormUpload", "CKFinder/Modules/Html5Upload/Html5Upload", "CKFinder/Modules/KeyListener/KeyListener", "CKFinder/Modules/Loader/Loader", "CKFinder/Modules/Maximize/Maximize", "CKFinder/Modules/Pages/Pages", "CKFinder/Modules/Panels/Panels", "CKFinder/Modules/RenameFile/RenameFile", "CKFinder/Modules/RenameFolder/RenameFolder", "CKFinder/Modules/FilterFiles/FilterFiles", "CKFinder/Modules/Settings/Settings", "CKFinder/Modules/StatusBar/StatusBar", "CKFinder/Modules/Toolbars/Toolbars", "CKFinder/Modules/UploadFileButton/UploadFileButton"], function (e, t, i, n, r, o, s, a, l, d, u, c, f, h, g, p, m, v, w, y, b, C, F, x, k, M, E, I) {
                "use strict";
                function K(t, i, n) {
                    if (T[t] && (!n || !e.contains(n, t))) {
                        var r = new T[t](i.finder);
                        i.add(r), r.getHandlers && i.finder.setHandlers(r.getHandlers()), r.setFinder && r.setFinder(i.finder)
                    }
                }

                var S = ["CreateFolder", "DeleteFile", "DeleteFolder", "EditImage", "FilesMoveCopy", "FormUpload", "Html5Upload", "RenameFile", "RenameFolder", "UploadFileButton"], T = {
                    Connector: i,
                    ContextMenu: n,
                    CreateFolder: r,
                    DeleteFile: o,
                    DeleteFolder: s,
                    Dialogs: a,
                    EditImage: l,
                    FilePreview: d,
                    Files: u,
                    FilesMoveCopy: c,
                    Folders: h,
                    FocusManager: f,
                    FormUpload: g,
                    Html5Upload: p,
                    KeyListener: m,
                    Loader: v,
                    Maximize: w,
                    Pages: y,
                    Panels: b,
                    RenameFile: C,
                    RenameFolder: F,
                    FilterFiles: x,
                    Settings: k,
                    StatusBar: M,
                    Toolbars: E,
                    UploadFileButton: I
                }, _ = t.Collection.extend({
                    init: function (t) {
                        var i = this;
                        i.finder = t;
                        var n = t.config.readOnlyExclude.length ? t.config.readOnlyExclude.split(",") : [], r = t.config.readOnly ? e.union(S, n) : !1;
                        t.config.removeModules && (r = e.union(r ? r : [], t.config.removeModules.split(","))), K("Loader", i, r), K("FocusManager", i, r), K("KeyListener", i, r), K("Connector", i, r), K("Settings", i, r), K("Panels", i, r), K("Dialogs", i, r), K("ContextMenu", i, r), K("Pages", i, r), K("Toolbars", i, r), K("StatusBar", i, r), K("Files", i, r), K("Folders", i, r), K("CreateFolder", i, r), K("DeleteFolder", i, r), K("RenameFolder", i, r), K("FilesMoveCopy", i, r), K("RenameFile", i, r), K("DeleteFile", i, r), K("Html5Upload", i, r), K("FormUpload", i, r), K("UploadFileButton", i, r), K("FilterFiles", i, r), K("Maximize", i, r), K("FilePreview", i, r), K("EditImage", i, r)
                    }
                });
                return _
            }),CKFinder.define("CKFinder/Application", ["underscore", "jquery", "doT", "backbone", "marionette", "ckf_global", "CKFinder/Config", "CKFinder/Event", "CKFinder/Util/Util", "CKFinder/Util/Lang", "CKFinder/UI/UIHacks", "CKFinder/Plugins/Plugins", "CKFinder/Modules/Modules"], function (e, t, i, n, r, o, s, a, l, d, u, c, f) {
                "use strict";
                function h() {
                    var e, t, i;
                    i = this, g(i), i._modules.init(i), t = i.config.resourceType, e = {name: "Init"}, t && (e.params = {type: t}), i.once("command:ok:Init", function (e) {
                        i.config.initConfigInfo = e.data.response, i.fire("app:start", {}, i)
                    }, 999), i.once("command:ok:GetFiles", function () {
                        i.fire("app:ready", {}, i)
                    }, 999), i.fire("app:loaded", {}, i), i.request("command:send", e)
                }

                function g(t) {
                    var i, n, r, o;
                    n = t.config, r = {ckfinder: t}, o = "ckfinderReady";
                    try {
                        i = new CustomEvent(o, {detail: r})
                    } catch (s) {
                        i = document.createEvent("Event"), i.initEvent(o, !0, !1), i.detail = r
                    }
                    window.dispatchEvent(i), e.isFunction(n.onInit) ? n.onInit(t) : "object" == typeof n.onInit && n.onInit.call(void 0, t)
                }

                function p(e) {
                    var t, i = e.data.response.error.number;
                    t = e.data.response.error.message ? e.data.response.error.message : i && this.lang.Errors[i] ? this.lang.Errors[i] : this.lang.ErrorUnknown.replace("%1", i), this.request("dialog:info", {
                        msg: t,
                        name: "CommandError"
                    })
                }

                return i.templateSettings.doNotSkipEncoded = !0, {
                    start: function (r) {
                        r.type && (r.resourceType = r.type);
                        var o = {
                            _reqres: new n.Wreqr.RequestResponse,
                            _plugins: new c,
                            _modules: new f,
                            config: r,
                            util: l,
                            Backbone: n,
                            _: e,
                            doT: i
                        };
                        return o.hasHandler = function () {
                            return this._reqres.hasHandler.apply(o._reqres, arguments)
                        }, o.getHandler = function () {
                            return this._reqres.getHandler.apply(o._reqres, arguments)
                        }, o.setHandler = function () {
                            return this._reqres.setHandler.apply(o._reqres, arguments)
                        }, o.setHandlers = function () {
                            return this._reqres.setHandlers.apply(o._reqres, arguments)
                        }, o.request = function () {
                            return this._reqres.request.apply(o._reqres, arguments)
                        }, e.extend(o, a.prototype), o.on("command:error", p, o), o.on("command:error:Init", function () {
                            t("html").removeClass("ui-mobile-rendering")
                        }), o.on("app:error", function (e) {
                            alert("Could not start CKFinder: " + e.data.msg)
                        }), o.once("plugin:allReady", h, o), d.init(o.config).fail(function () {
                            o.fire("app:error", {msg: "Language file is missing or broken"}, o)
                        }).done(function (t) {
                            o.lang = t;
                            var i = r.skin;
                            i.indexOf("/") < 0 && (i = "skins/" + i + "/skin"), window.CKFinder.require([i], function (t) {
                                e.isFunction(t.init) && (t.path = o.util.parentFolder(i) + "/", t.init(o)), u.init(o), o._plugins.load(o)
                            })
                        }), o
                    }
                }
            }),CKFinder.define("skins/jquery-mobile/skin", {
                config: function (e) {
                    return e.iconsCSS || (e.iconsCSS = "skins/jquery-mobile/icons.css"), e.themeCSS || (e.themeCSS = "libs/jquery.mobile.theme.css"), e
                }, init: function () {
                    CKFinder.require(["jquery"], function (e) {
                        e("body").addClass("ui-icon-alt")
                    })
                }
            }),CKFinder.define("skins/moono/skin", {
                config: function (e) {
                    return e.swatch = "a", e.dialogOverlaySwatch = !0, e.loaderOverlaySwatch = !0, e.themeCSS || (e.themeCSS = "skins/moono/ckfinder.css"), e.iconsCSS || (e.iconsCSS = "skins/moono/icons.css"), e
                }, init: function () {
                    CKFinder.require(["jquery"], function (e) {
                        e("body").addClass("ui-alt-icon")
                    })
                }
            }),window.CKFinder = window.CKFinder || {},window.CKFinder.require = CKFinder.require || window.require || require,window.CKFinder.requirejs = CKFinder.requirejs || window.requirejs || requirejs,window.CKFinder.define = CKFinder.define || window.define || define,(window.top.bender && window.top.bender.config.amd || window.opener && window.opener.bender && window.opener.bender.config.amd) && (window.require = CKFinder.require, window.requirejs = CKFinder.requirejs, window.define = CKFinder.define, CKFinder.require.config(window.opener ? window.opener.bender.config.amd : window.top.bender.config.amd), CKFinder.require.config({
                config: {
                    text: {
                        useXhr: function () {
                            "use strict";
                            return !0
                        }
                    }
                }
            })),window.CKFinder.basePath && window.CKFinder.requirejs.config({baseUrl: window.CKFinder.basePath}),window.CKFinder.requirejs.config({waitSeconds: 0}),window.CKFinder.define("ckf_global", function () {
                return window.CKFinder
            });
            var event, eventType = "ckfinderRequireReady";
            try {
                event = new CustomEvent(eventType)
            } catch (e) {
                event = document.createEvent("Event"), event.initEvent(eventType, !0, !1)
            }
            window.dispatchEvent(event), window.CKFinder.start = function (e) {
                function t(e) {
                    [e.jqueryMobileStructureCSS, e.coreCSS, e.jqueryMobileIconsCSS, e.iconsCSS, e.themeCSS].forEach(function (e) {
                        if (e) {
                            var t = window.document.createElement("link");
                            t.setAttribute("rel", "stylesheet"), t.setAttribute("href", CKFinder.require.toUrl(e) + "?ver=8mhio5"), window.document.head.appendChild(t)
                        }
                    })
                }

                e = e || {}, window.CKFinder.require(["underscore", "CKFinder/Config", "CKFinder/Util/Util"], function (i, n, r) {
                    function o(e, t, n) {
                        var o, a;
                        if (a = r.getUrlParams(), a.langCode && (a.language = a.langCode), a.type && (a.resourceType = a.type), a.CKEditor) {
                            a.chooseFiles = !0;
                            var l = a.CKEditorFuncNum;
                            a.ckeditor = {
                                id: a.CKEditor, funcNumber: l, callback: function (e, t) {
                                    window.opener.CKEDITOR.tools.callFunction(l, e, t), window.close()
                                }
                            }
                        }
                        delete a.langCode, delete a.CKEditor, delete a.CKEditorFuncNum, o = i.extend({}, e, t, window.CKFinder._config, n, a), s(o, function (e) {
                            e.start(o)
                        })
                    }

                    function s(e, n) {
                        var r = e.skin;
                        r.indexOf("/") < 0 && (r = "skins/" + r + "/skin"), window.CKFinder.require([r], function (n) {
                            var r = i.isFunction(n.config) ? n.config(e) : n.config;
                            t(i.extend(e, r))
                        }), window.jQuery && /1|2\.[0-9]+.[0-9]+/.test(window.jQuery.fn.jquery) ? a(e, n) : window.CKFinder.require([window.CKFinder.require.toUrl(e.jquery) + "?ver=8mhio5"], function () {
                            a(e, n)
                        })
                    }

                    function a(e, t) {
                        window.CKFinder.define("jquery", function () {
                            return window.jQuery
                        }), window.jQuery(window.document).bind("mobileinit", function () {
                            window.jQuery.mobile.linkBindingEnabled = !1, window.jQuery.mobile.hashListeningEnabled = !1, window.jQuery.mobile.autoInitializePage = !1, window.jQuery.mobile.ignoreContentEnabled = !0
                        }), window.CKFinder.require([window.CKFinder.require.toUrl(e.jqueryMobile) + "?ver=8mhio5"], function () {
                            window.CKFinder.define("ckf-jquery-mobile", function () {
                                return window.jQuery.mobile
                            }), window.CKFinder.require(["CKFinder/Application"], t)
                        })
                    }

                    var l = i.isUndefined(e.configPath) ? n.configPath : e.configPath;
                    return l ? void window.CKFinder.require([window.CKFinder.require.toUrl(l)], function (t) {
                        o(n, t, e)
                    }, function () {
                        o(n, {}, e)
                    }) : void o(n, {}, e)
                })
            }
        }
    }
}();