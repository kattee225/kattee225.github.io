"use strict";
function _createForOfIteratorHelper(a, b) {
    var c = "undefined" != typeof Symbol && a[Symbol.iterator] || a["@@iterator"];
    if (!c) {
        if (Array.isArray(a) || (c = _unsupportedIterableToArray(a)) || b && a && "number" == typeof a.length) {
            c && (a = c);
            var d = 0
              , e = function() {};
            return {
                s: e,
                n: function n() {
                    return d >= a.length ? {
                        done: !0
                    } : {
                        done: !1,
                        value: a[d++]
                    }
                },
                e: function e(a) {
                    throw a
                },
                f: e
            }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    var f, g = !0, h = !1;
    return {
        s: function s() {
            c = c.call(a)
        },
        n: function n() {
            var a = c.next();
            return g = a.done,
            a
        },
        e: function e(a) {
            h = !0,
            f = a
        },
        f: function f() {
            try {
                g || null == c["return"] || c["return"]()
            } finally {
                if (h)
                    throw f
            }
        }
    }
}
function _slicedToArray(a, b) {
    return _arrayWithHoles(a) || _iterableToArrayLimit(a, b) || _unsupportedIterableToArray(a, b) || _nonIterableRest()
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}
function _unsupportedIterableToArray(a, b) {
    if (a) {
        if ("string" == typeof a)
            return _arrayLikeToArray(a, b);
        var c = Object.prototype.toString.call(a).slice(8, -1);
        return "Object" === c && a.constructor && (c = a.constructor.name),
        "Map" === c || "Set" === c ? Array.from(a) : "Arguments" === c || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c) ? _arrayLikeToArray(a, b) : void 0
    }
}
function _arrayLikeToArray(a, b) {
    (null == b || b > a.length) && (b = a.length);
    for (var c = 0, d = Array(b); c < b; c++)
        d[c] = a[c];
    return d
}
function _iterableToArrayLimit(a, b) {
    var c = null == a ? null : "undefined" != typeof Symbol && a[Symbol.iterator] || a["@@iterator"];
    if (null != c) {
        var d, e, f = [], g = !0, h = !1;
        try {
            for (c = c.call(a); !(g = (d = c.next()).done) && (f.push(d.value),
            !(b && f.length === b)); g = !0)
                ;
        } catch (a) {
            h = !0,
            e = a
        } finally {
            try {
                g || null == c["return"] || c["return"]()
            } finally {
                if (h)
                    throw e
            }
        }
        return f
    }
}
function _arrayWithHoles(a) {
    if (Array.isArray(a))
        return a
}
function ownKeys(a, b) {
    var c = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
        var d = Object.getOwnPropertySymbols(a);
        b && (d = d.filter(function(b) {
            return Object.getOwnPropertyDescriptor(a, b).enumerable
        })),
        c.push.apply(c, d)
    }
    return c
}
function _objectSpread(a) {
    for (var b, c = 1; c < arguments.length; c++)
        b = null == arguments[c] ? {} : arguments[c],
        c % 2 ? ownKeys(Object(b), !0).forEach(function(c) {
            _defineProperty(a, c, b[c])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(b)) : ownKeys(Object(b)).forEach(function(c) {
            Object.defineProperty(a, c, Object.getOwnPropertyDescriptor(b, c))
        });
    return a
}
function _defineProperty(a, b, c) {
    return b in a ? Object.defineProperty(a, b, {
        value: c,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[b] = c,
    a
}
function _classCallCheck(a, b) {
    if (!(a instanceof b))
        throw new TypeError("Cannot call a class as a function")
}
function _defineProperties(a, b) {
    for (var c, d = 0; d < b.length; d++)
        c = b[d],
        c.enumerable = c.enumerable || !1,
        c.configurable = !0,
        "value"in c && (c.writable = !0),
        Object.defineProperty(a, c.key, c)
}
function _createClass(a, b, c) {
    return b && _defineProperties(a.prototype, b),
    c && _defineProperties(a, c),
    a
}
var MarTech = function() {
    function a(b, c, d) {
        var e = this;
        _classCallCheck(this, a),
        this.DEFAULT_GTM_ID = "GTM-MX5G3BX",
        this.DEFAULT_GTM_DATA_LAYER = "martechJsDataLayer",
        this.DEFAULT_TRACKING_URL_PARAMS = ["gclid", "msclkid", "fbclid"],
        this.DEFAULT_EVENT_NAME = "Generic Track Event",
        this.PAGE_LOAD_EVENT_NAME = "Page Load - DL",
        this.gtmID = b || this.DEFAULT_GTM_ID,
        this.gtmAdded = !1,
        this.dataLayer = c || this.DEFAULT_GTM_DATA_LAYER,
        this.urlParamsToTrack = d || this.DEFAULT_TRACKING_URL_PARAMS,
        window[this.dataLayer] = window[this.dataLayer] || [];
        var f = _objectSpread({
            referrer: document.referrer,
            avt: this._getCookie("_savt"),
            country_code: this._getCountryCode(),
            env: this._validateHostnameRegex(window.location.hostname, "production") ? "prod" : "qa"
        }, this._getUrlParamsToTrack(this.urlParamsToTrack));
        this.getVisitorToken().then(function(a) {
            e.visitorToken = a,
            e.track(_objectSpread(_objectSpread({
                event: e.PAGE_LOAD_EVENT_NAME
            }, f), {}, {
                user_token: a
            }))
        })["catch"](function(a) {
            "/tracking.json" === e._trackingUrl() ? console.warn("Trying to using tracking.json call locally but no local tracking.json file setup: ".concat(a)) : console.error("Error trying to get tracking.json data: ".concat(a))
        })["finally"](function() {
            return e.addGTM()
        })
    }
    return _createClass(a, [{
        key: "_validateHostnameRegex",
        value: function _validateHostnameRegex(a) {
            var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "production";
            if ("production" === b) {
                return /^([a-zA-Z0-9-_]+.)?squareup.com?$/.test(a)
            }
            return /^([a-zA-Z0-9-_]+.)?squareupstaging.com?$/.test(a)
        }
    }, {
        key: "_trackingUrl",
        value: function _trackingUrl() {
            var a = "";
            return this._validateHostnameRegex(window.location.hostname, "production") ? a = "https://squareup.com" : this._validateHostnameRegex(window.location.hostname, "staging") && (a = "https://squareupstaging.com"),
            "".concat(a, "/tracking.json")
        }
    }, {
        key: "_getCountryCode",
        value: function _getCountryCode() {
            var a = this._getCookie("squareGeo");
            if (a) {
                var b = a.split("-")
                  , c = _slicedToArray(b, 1)
                  , d = c[0];
                return d.toLowerCase()
            }
            return null
        }
    }, {
        key: "_getUrlParamsToTrack",
        value: function _getUrlParamsToTrack(a) {
            var b = window.location.search
              , c = new URLSearchParams(b);
            return a.reduce(function(a, b) {
                return c.get(b) ? _objectSpread(_objectSpread({}, a), {}, _defineProperty({}, b, c.get(b))) : a
            }, {})
        }
    }, {
        key: "_getCookie",
        value: function _getCookie(a) {
            var b, c = "".concat(a, "="), d = decodeURIComponent(document.cookie), e = d.split("; "), f = _createForOfIteratorHelper(e);
            try {
                for (f.s(); !(b = f.n()).done; ) {
                    var g = b.value;
                    if (0 === g.indexOf(c))
                        return g.slice(c.length, g.length)
                }
            } catch (a) {
                f.e(a)
            } finally {
                f.f()
            }
            return ""
        }
    }, {
        key: "_getUserTokenFromCookie",
        value: function _getUserTokenFromCookie() {
            var a = this._getCookie("dajs_user_id");
            if (a) {
                var b = a.replace(/["']+/g, "")
                  , c = 13 === b.length && /[\dA-Z]{13}/.test(b);
                return c ? b : null
            }
            return null
        }
    }, {
        key: "_generate_uuid",
        value: function _generate_uuid() {
            for (var a = Math.trunc, b, c = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"], d = Array(36), e = 0, f = 0; 36 > f; f++)
                8 == f || 13 === f || 18 === f || 23 === f ? d[f] = "-" : 14 === f ? d[f] = "4" : (2 >= e && (e = a(33554432 + 16777216 * Math.random())),
                b = 15 & e,
                e >>= 4,
                d[f] = c[19 === f ? 8 | 3 & b : b]);
            return d.join("")
        }
    }, {
        key: "_getDynamicTrackVals",
        value: function _getDynamicTrackVals() {
            return {
                uuid: this._generate_uuid(),
                page_url: window.location.href
            }
        }
    }, {
        key: "getVisitorToken",
        value: function getVisitorToken() {
            var a = this._getUserTokenFromCookie();
            return a ? new Promise(function(b) {
                return b(a)
            }
            ) : fetch(this._trackingUrl()).then(function(a) {
                return a.json()
            }).then(function(a) {
                return a.visitor_token
            })
        }
    }, {
        key: "addGTM",
        value: function addGTM() {
            var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this.gtmID;
            if (!a)
                throw new Error("GTM ID must be specified");
            if (this.gtmOnPage()) {
                var b = this.getGTMContainerIDs();
                if (b.includes(this.gtmID))
                    return console.warn("Martech JS GTM container ".concat(this.gtmID, " is already on page.")),
                    !1
            }
            return this.gtmID = a,
            this._loadGTM(window, document, "script", this.dataLayer, a),
            this._loadGTMNoScript(),
            this.gtmAdded = !0,
            !0
        }
    }, {
        key: "_loadGTM",
        value: function _loadGTM(a, b, c, d, e) {
            a[d] = a[d] || [],
            a[d].push({
                "gtm.start": new Date().getTime(),
                event: "gtm.js"
            });
            var g = b.getElementsByTagName(c)[0]
              , f = b.createElement(c)
              , h = "dataLayer" === d ? "" : "&l=".concat(d);
            f.async = !0,
            f.src = "https://www.googletagmanager.com/gtm.js?id=".concat(e).concat(h),
            g.parentNode.insertBefore(f, g)
        }
    }, {
        key: "_loadGTMNoScript",
        value: function _loadGTMNoScript() {
            var a = document.getElementsByTagName("body")[0]
              , b = document.createElement("noscript")
              , c = document.createElement("iframe");
            c.src = "https://www.googletagmanager.com/ns.html?id=".concat(this.gtmID),
            c.height = 0,
            c.width = 0,
            c.style = "display:none;visibility:hidden",
            b.prepend(c),
            a.prepend(b)
        }
    }, {
        key: "gtmOnPage",
        value: function gtmOnPage() {
            return !!window.google_tag_manager
        }
    }, {
        key: "getGTMContainerIDs",
        value: function getGTMContainerIDs() {
            if (!this.gtmOnPage())
                throw new Error("GTM is not on the page");
            var a = Object.keys(window.google_tag_manager)
              , b = a.filter(function(a) {
                return a.includes("GTM")
            });
            return b
        }
    }, {
        key: "addDataLayerContext",
        value: function addDataLayerContext() {
            var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            window[this.dataLayer] && window[this.dataLayer].push(a)
        }
    }, {
        key: "track",
        value: function track() {
            var a = this
              , b = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            return new Promise(function(c) {
                if (window[a.dataLayer]) {
                    var d = b.event || a.DEFAULT_EVENT_NAME
                      , e = a._getDynamicTrackVals();
                    window[a.dataLayer].push(_objectSpread(_objectSpread(_objectSpread({}, e), b), {}, {
                        event: d,
                        eventCallback: function eventCallback(a) {
                            a ? c(!0) : (console.warn({
                                message: "GTM timeout",
                                extra: b
                            }),
                            c(!1))
                        }
                    }))
                } else
                    throw new Error("GTM dataLayer not set, cannot push properties onto dataLayer")
            }
            )
        }
    }]),
    a
}();
window.martech = new MarTech;
