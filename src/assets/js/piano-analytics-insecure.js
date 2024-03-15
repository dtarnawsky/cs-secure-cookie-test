var pianoAnalytics = (function (exports) {
    'use strict';

    var Config = {
      'site': '',
      'collectDomain': '',
      'path': 'event',
      'visitorStorageMode': 'fixed',
      'storageLifetimeVisitor': 395,
      'storageLifetimeUser': 395,
      'storageLifetimePrivacy': 395,
      'privacyDefaultMode': 'optin',
      'sendEventWhenOptout': true,
      'isVisitorClientSide': true,
      'enableCallbacks': true,
      'cookieDomain': '',
      'cookieSecure': true,
      'cookiePath': '/',
      'cookieSameSite': 'lax',
      'encodeStorageBase64': false,
      'addEventURL': 'withoutQS',
      'clickAutoManagement': true,
      'enableUTMTracking': true,
      'campaignPrefix': ['at_'],
      'storageVisitor': 'pa_vid',
      'storageUser': 'pa_user',
      'version': '6.13.1',
      'minHeartbeat': 5,
      'minBufferingHeartbeat': 1,
      'queueVarName': '_paq',
      'globalVarName': 'pa',
      'enableAutomaticPageRefresh': true,
      'allowHighEntropyClientHints': true,
      'sendEmptyProperties': true,
      'enableExtendedOptout': false,
      'privacy': {
        'storageKey': 'pa_privacy',
        'legacyKeys': {
          'pa_vid': true,
          'pa_privacy': true,
          'atuserid': true
        },
        'storageKeys': {
          'pa_user': true
        },
        'modes': {
          'optin': {
            'name': 'optin',
            'properties': {
              'include': {
                'visitor_privacy_consent': true,
                'visitor_privacy_mode': 'optin'
              },
              'allowed': {
                '*': {
                  '*': true
                }
              },
              'forbidden': {
                '*': {}
              }
            },
            'storage': {
              'allowed': {
                '*': true
              },
              'forbidden': {}
            },
            'events': {
              'allowed': {
                '*': true
              },
              'forbidden': {}
            }
          },
          'optout': {
            'name': 'optout',
            'visitorId': 'OPT-OUT',
            'properties': {
              'include': {
                'visitor_privacy_consent': false,
                'visitor_privacy_mode': 'optout'
              },
              'allowed': {
                '*': {}
              },
              'forbidden': {
                '*': {}
              }
            },
            'storage': {
              'allowed': {
                'pa_vid': true,
                'pa_privacy': true
              },
              'forbidden': {}
            },
            'events': {
              'allowed': {
                '*': true
              },
              'forbidden': {}
            }
          },
          'no-consent': {
            'name': 'no-consent',
            'visitorId': 'no-consent',
            'properties': {
              'include': {
                'visitor_privacy_consent': false,
                'visitor_privacy_mode': 'no-consent'
              },
              'allowed': {
                '*': {}
              },
              'forbidden': {
                '*': {}
              }
            },
            'storage': {
              'allowed': {},
              'forbidden': {
                '*': true
              }
            },
            'events': {
              'allowed': {
                '*': true
              },
              'forbidden': {}
            }
          },
          'no-storage': {
            'name': 'no-storage',
            'visitorId': 'no-storage',
            'properties': {
              'include': {
                'visitor_privacy_consent': false,
                'visitor_privacy_mode': 'no-storage'
              },
              'allowed': {
                '*': {
                  '*': true
                }
              },
              'forbidden': {
                '*': {}
              }
            },
            'storage': {
              'allowed': {},
              'forbidden': {
                '*': true
              }
            },
            'events': {
              'allowed': {
                '*': true
              },
              'forbidden': {}
            }
          },
          'exempt': {
            'name': 'exempt',
            'properties': {
              'include': {
                'visitor_privacy_consent': false,
                'visitor_privacy_mode': 'exempt'
              },
              'allowed': {
                '*': {
                  'app_crash': true,
                  'app_crash_class': true,
                  'app_crash_screen': true,
                  'app_version': true,
                  'browser': true,
                  'browser_cookie_acceptance': true,
                  'browser_group': true,
                  'browser_version': true,
                  'click': true,
                  'click_chapter1': true,
                  'click_chapter2': true,
                  'click_chapter3': true,
                  'click_full_name': true,
                  'connection_monitor': true,
                  'connection_organisation': true,
                  'cookie_creation_date': true,
                  'date': true,
                  'date_day': true,
                  'date_daynumber': true,
                  'date_month': true,
                  'date_monthnumber': true,
                  'date_week': true,
                  'date_year': true,
                  'date_yearofweek': true,
                  'device_brand': true,
                  'device_display_height': true,
                  'device_display_width': true,
                  'device_name': true,
                  'device_name_tech': true,
                  'device_screen_diagonal': true,
                  'device_screen_height': true,
                  'device_screen_width': true,
                  'device_type': true,
                  'event_collection_platform': true,
                  'event_collection_version': true,
                  'event_hour': true,
                  'event_id': true,
                  'event_minute': true,
                  'event_position': true,
                  'event_second': true,
                  'event_time': true,
                  'event_time_utc': true,
                  'event_url': true,
                  'event_url_domain': true,
                  'event_url_full': true,
                  'exclusion_cause': true,
                  'exclusion_type': true,
                  'geo_city': true,
                  'geo_continent': true,
                  'geo_country': true,
                  'geo_metro': true,
                  'geo_region': true,
                  'goal_type': true,
                  'hit_time_utc': true,
                  'os': true,
                  'os_group': true,
                  'os_version': true,
                  'os_version_name': true,
                  'page': true,
                  'page_chapter1': true,
                  'page_chapter2': true,
                  'page_chapter3': true,
                  'page_duration': true,
                  'page_full_name': true,
                  'page_position': true,
                  'page_title_html': true,
                  'page_url': true,
                  'pageview_id': true,
                  'previous_url': true,
                  'privacy_status': true,
                  'site': true,
                  'site_env': true,
                  'site_id': true,
                  'site_platform': true,
                  'src': true,
                  'src_detail': true,
                  'src_direct_access': true,
                  'src_organic': true,
                  'src_organic_detail': true,
                  'src_portal_domain': true,
                  'src_portal_site': true,
                  'src_portal_site_id': true,
                  'src_portal_url': true,
                  'src_referrer_site_domain': true,
                  'src_referrer_site_url': true,
                  'src_referrer_url': true,
                  'src_se': true,
                  'src_se_category': true,
                  'src_se_country': true,
                  'src_type': true,
                  'src_url': true,
                  'src_url_domain': true,
                  'src_webmail': true
                }
              },
              'forbidden': {
                '*': {}
              }
            },
            'storage': {
              'allowed': {
                'pa_vid': true,
                'pa_privacy': true,
                'atuserid': true
              },
              'forbidden': {}
            },
            'events': {
              'allowed': {
                'click.exit': true,
                'click.navigation': true,
                'click.download': true,
                'click.action': true,
                'page.display': true
              },
              'forbidden': {}
            }
          },
          '*': {
            'properties': {
              'allowed': {
                '*': {
                  'connection_type': true,
                  'device_timestamp_utc': true,
                  'visitor_privacy_consent': true,
                  'visitor_privacy_mode': true,
                  'ch_ua*': true
                }
              },
              'forbidden': {
                '*': {}
              }
            },
            'storage': {
              'allowed': {},
              'forbidden': {}
            },
            'events': {
              'allowed': {},
              'forbidden': {}
            }
          }
        }
      }
    };

    function _typeof(o) {
      "@babel/helpers - typeof";

      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
        return typeof o;
      } : function (o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, _typeof(o);
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if (typeof o === "string") return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor) n = o.constructor.name;
      if (n === "Map" || n === "Set") return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length) len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
      return arr2;
    }
    function _createForOfIteratorHelper(o, allowArrayLike) {
      var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
      if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
          if (it) o = it;
          var i = 0;
          var F = function () {};
          return {
            s: F,
            n: function () {
              if (i >= o.length) return {
                done: true
              };
              return {
                done: false,
                value: o[i++]
              };
            },
            e: function (e) {
              throw e;
            },
            f: F
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var normalCompletion = true,
        didErr = false,
        err;
      return {
        s: function () {
          it = it.call(o);
        },
        n: function () {
          var step = it.next();
          normalCompletion = step.done;
          return step;
        },
        e: function (e) {
          didErr = true;
          err = e;
        },
        f: function () {
          try {
            if (!normalCompletion && it.return != null) it.return();
          } finally {
            if (didErr) throw err;
          }
        }
      };
    }

    var cloneObject = function cloneObject(original, delUndefined) {
      if (_typeof(original) !== 'object' || original === null || original instanceof Date) {
        return original;
      }
      var copy = new original.constructor();
      for (var i in original) {
        if (Object.prototype.hasOwnProperty.call(original, i)) {
          if (i !== undefined && (!delUndefined || original[i] !== undefined)) {
            copy[i] = cloneObject(original[i]);
          }
        }
      }
      return copy;
    };

    function post(url, data) {
      var queued = false;
      if (window.navigator && typeof window.navigator.sendBeacon === 'function') {
        queued = window.navigator.sendBeacon(url, data);
      }
      if (!queued && window.fetch) {
        window.fetch(url, {
          method: 'POST',
          body: data,
          headers: {
            'Content-Type': 'text/plain;charset=UTF-8'
          }
        });
      }
    }
    var http = {
      post: post
    };

    // from http://www.webtoolkit.info/javascript_base64.html
    var _keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    var encoding = {
      encodeURIComponent: window.encodeURIComponent ,
      utf8: {
        encode: function encode(string) {
          string = string.replace(/\r\n/g, '\n');
          var utftext = '';
          for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
              utftext += String.fromCharCode(c);
            } else if (c > 127 && c < 2048) {
              utftext += String.fromCharCode(c >> 6 | 192);
              utftext += String.fromCharCode(c & 63 | 128);
            } else {
              utftext += String.fromCharCode(c >> 12 | 224);
              utftext += String.fromCharCode(c >> 6 & 63 | 128);
              utftext += String.fromCharCode(c & 63 | 128);
            }
          }
          return utftext;
        },
        decode: function decode(utftext) {
          var string = '';
          var i = 0;
          var c, c2, c3;
          c = c2 = c3 = 0;
          while (i < utftext.length) {
            c = utftext.charCodeAt(i);
            if (c < 128) {
              string += String.fromCharCode(c);
              i++;
            } else if (c > 191 && c < 224) {
              c2 = utftext.charCodeAt(i + 1);
              string += String.fromCharCode((c & 31) << 6 | c2 & 63);
              i += 2;
            } else {
              c2 = utftext.charCodeAt(i + 1);
              c3 = utftext.charCodeAt(i + 2);
              string += String.fromCharCode((c & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
              i += 3;
            }
          }
          return string;
        }
      }
    };
    encoding.base64 = {
      encode: function encode(input) {
        var output = '';
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;
        input = encoding.utf8.encode(input);
        while (i < input.length) {
          chr1 = input.charCodeAt(i++);
          chr2 = input.charCodeAt(i++);
          chr3 = input.charCodeAt(i++);
          enc1 = chr1 >> 2;
          enc2 = (chr1 & 3) << 4 | chr2 >> 4;
          enc3 = (chr2 & 15) << 2 | chr3 >> 6;
          enc4 = chr3 & 63;
          if (isNaN(chr2)) {
            enc3 = enc4 = 64;
          } else if (isNaN(chr3)) {
            enc4 = 64;
          }
          output = output + _keyStr.charAt(enc1) + _keyStr.charAt(enc2) + _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
        }
        return output;
      },
      decode: function decode(input) {
        var output = '';
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;
        // eslint-disable-next-line no-useless-escape
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');
        while (i < input.length) {
          enc1 = _keyStr.indexOf(input.charAt(i++));
          enc2 = _keyStr.indexOf(input.charAt(i++));
          enc3 = _keyStr.indexOf(input.charAt(i++));
          enc4 = _keyStr.indexOf(input.charAt(i++));
          chr1 = enc1 << 2 | enc2 >> 4;
          chr2 = (enc2 & 15) << 4 | enc3 >> 2;
          chr3 = (enc3 & 3) << 6 | enc4;
          output = output + String.fromCharCode(chr1);
          if (enc3 != 64) {
            output = output + String.fromCharCode(chr2);
          }
          if (enc4 != 64) {
            output = output + String.fromCharCode(chr3);
          }
        }
        output = encoding.utf8.decode(output);
        return output;
      }
    };

    var uuid = function uuid() {
      var _cryptoObj = window.crypto || window.msCrypto ; // IE11
      function _v4() {
        try {
          if (_cryptoObj !== null && _typeof(_cryptoObj) === 'object') {
            return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
              return (c ^ _cryptoObj.getRandomValues(new Uint32Array(1))[0] & 15 >> c / 4).toString(16);
            });
          }
        } catch (e) {
          console.error(e);
        }
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
          var r = Math.random() * 16 | 0,
            v = c === 'x' ? r : r & 0x3 | 0x8;
          return v.toString(16);
        });
      }
      return {
        v4: _v4
      };
    }();

    function Configuration(data) {
      var _configuration = data;
      function setConfiguration(key, value) {
        if (value === null || value === '' || value === undefined) {
          return;
        }
        _configuration[key] = value;
      }
      function setConfigurations(customConfigurations) {
        for (var key in customConfigurations) {
          if (Object.prototype.hasOwnProperty.call(customConfigurations, key)) {
            setConfiguration(key, customConfigurations[key]);
          }
        }
      }
      function getConfiguration(key) {
        if (typeof _configuration[key] !== 'undefined') {
          return cloneObject(_configuration[key]);
        }
        return null;
      }
      function cloneData() {
        return cloneObject(_configuration);
      }
      function deleteProperty(property) {
        delete _configuration[property];
      }
      return {
        setConfiguration: setConfiguration,
        setConfigurations: setConfigurations,
        getConfiguration: getConfiguration,
        cloneData: cloneData,
        deleteProperty: deleteProperty
      };
    }

    function PianoAnalyticsQueue(pa) {
      var _queue = [];
      var push = function push(eventCall) {
        _queue.push(eventCall);
        if (_queue.length === 1) {
          pa[eventCall[0]].apply(pa, eventCall.slice(1));
        }
      };
      var next = function next() {
        _queue.shift();
        if (_queue.length > 0) {
          var nextCall = _queue[0];
          pa[nextCall[0]].apply(pa, nextCall.slice(1));
        }
      };
      return {
        push: push,
        next: next
      };
    }

    function Model(pa, data, config) {
      this.properties = cloneObject(pa._properties);
      this.setProperty = function (name, value, options) {
        if (pa._privacy.call('isPropAllowed', name)) {
          this.properties[name] = {
            value: value,
            options: options || {}
          };
        }
      };
      this.hasProperty = function (name) {
        return Object.prototype.hasOwnProperty.call(this.properties, name);
      };
      this.getConfiguration = config.getConfiguration;
      this.setConfiguration = config.setConfiguration;
      this.options = data.options || {};
      this.visitorId = null;
      this.build = {
        url: '',
        data: {}
      };
      this.events = data.events || [];
    }

    function nextStep(pa, model, nextSteps, forceBreak) {
      if (forceBreak !== false && nextSteps.length > 0 && typeof nextSteps[0] === 'function') {
        nextSteps[0](pa, model, nextSteps.slice(1));
      } else {
        pa._queue.next();
      }
    }

    function buildStep(pa, model, nextSteps) {
      var collectDomain = model.getConfiguration('collectDomain');
      var defaultProtocol = collectDomain.startsWith('https://') || collectDomain.startsWith('http://') ? '' : 'https://';
      var baseUrl = "".concat(defaultProtocol).concat(collectDomain, "/").concat(model.getConfiguration('path'));
      var queryString = "?s=".concat(model.getConfiguration('site')).concat(model.visitorId ? '&idclient=' + model.visitorId : '');
      model.build.url = baseUrl + queryString;
      model.build.data = {
        events: model.events
      };
      nextStep(pa, model, nextSteps);
    }

    function _getQueryStringParameters(prefix, str, destPrefix) {
      var campaign = {};
      var regex = new RegExp('[&#?]{1}([^&=#?]*)=([^&#]*)?', 'g');
      var match = regex.exec(str);
      while (match !== null) {
        if (match[1].indexOf(prefix) === 0) {
          campaign[destPrefix + match[1].substring(prefix.length)] = window.decodeURIComponent(match[2]);
        }
        match = regex.exec(str);
      }
      return campaign;
    }
    function _addCampaignParams(pa, model, href, prefix, destPrefix) {
      var campaignParams = _getQueryStringParameters(prefix, href, destPrefix);
      var found = false;
      for (var param in campaignParams) {
        if (Object.prototype.hasOwnProperty.call(campaignParams, param) && !model.properties[param]) {
          model.setProperty(param, campaignParams[param], {
            persistent: true
          });
        }
        found = true;
      }
      return found;
    }
    function campaignsStep(pa, model, nextSteps) {
      {
        var href = document.location.href;
        var prefixes = model.getConfiguration('campaignPrefix');
        var _iterator = _createForOfIteratorHelper(prefixes),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var prefix = _step.value;
            var found = _addCampaignParams(pa, model, href, prefix, 'src_');
            if (found) {
              break;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        if (model.getConfiguration('enableUTMTracking')) {
          _addCampaignParams(pa, model, href, 'utm_', 'utm_');
        }
      }
      nextStep(pa, model, nextSteps);
    }

    var randomStr = function randomStr() {
      var date = new Date().getTime().toString(36);
      var prefix = Math.round(Math.random() * 2147483647).toString(36);
      return date + prefix;
    };
    var byteCount = function byteCount(str) {
      return encodeURI(str).split(/%(?:u[\dA-F]{2})?[\dA-F]{2}|./).length - 1;
    };
    var expiresToDate = function expiresToDate(expires) {
      var date = new Date();
      var increaseDays = function increaseDays(days2) {
        if (days2) {
          date.setDate(date.getDate() + days2);
        }
      };
      if (expires instanceof Date) {
        date = expires;
      } else if (typeof expires === "number") {
        increaseDays(expires);
      } else {
        var _a = expires,
          days = _a.days,
          minutes = _a.minutes;
        increaseDays(days);
        if (minutes) {
          date.setMinutes(date.getMinutes() + minutes);
        }
      }
      return date;
    };
    var decode = function decode(s) {
      var res = s.replace(/\+/g, " ").replace(/^\s+|\s+$/g, "");
      try {
        return decodeURIComponent(res);
      } catch (e) {
        return res;
      }
    };
    var decodeValue = function decodeValue(s) {
      if (s.indexOf('"') === 0) {
        s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\");
      }
      return decode(s);
    };
    var cookie = function () {
      var _generateCookieString = function _generateCookieString(name, value, _a) {
        var _b = _a === void 0 ? {} : _a,
          path = _b.path,
          domain = _b.domain,
          expires = _b.expires,
          secure = _b.secure,
          samesite = _b.samesite,
          raw = _b.raw,
          priority = _b.priority;
        return (raw ? name : encodeURIComponent(name)) + "=" + (raw ? value : encodeURIComponent(value)) + (expires ? "; expires=".concat(expiresToDate(expires).toUTCString()) : "") + (path ? "; path=".concat(path) : "") + (domain ? "; domain=".concat(domain) : "") + (secure ? "; secure" : "") + (samesite ? typeof samesite === "boolean" ? "; sameSite" : "; sameSite=".concat(samesite) : "") + (priority ? "; priority=".concat(priority) : "");
      };
      var setCookie = function setCookie(name, value, cookieOptions, limitValue) {
        if (value === void 0 || limitValue !== void 0 && byteCount(value) > limitValue) {
          return;
        }
        document.cookie = _generateCookieString(name, value, cookieOptions).replace('; secure; sameSite=lax', '');
      };
      var parseCookie = function parseCookie(cb) {
        var allCookies = document.cookie.split(";");
        for (var i = 0; i < allCookies.length; i++) {
          var _cookie = allCookies[i].split("=");
          var cookieName = decode(_cookie[0]);
          var cookieValue = _cookie[1] || "";
          if (cb(cookieName, cookieValue)) {
            return void 0;
          }
        }
      };
      function getCookie(name) {
        var result = null;
        var cookies = {};
        parseCookie(function (cookieName, cookieValue) {
          if (name) {
            if (cookieName === name) {
              result = decodeValue(cookieValue);
              return true;
            }
          } else {
            cookies[cookieName] = decodeValue(cookieValue);
          }
        });
        if (name) {
          return result;
        }
        return cookies;
      }
      var getNames = function getNames() {
        var result = [];
        parseCookie(function (cookieName) {
          result.push(cookieName);
        });
        return result;
      };
      var removeCookie = function removeCookie(name, cookieOptions) {
        setCookie(name, "", Object.assign({}, cookieOptions, {
          expires: -1
        }));
      };
      var getTopLevelDomain = function () {
        var testName = "_cookie_test";
        var secure = document.location.protocol === "https:";
        return function (domainExceptions) {
          if (domainExceptions === void 0) {
            domainExceptions = [];
          }
          var domainParts = window.location.hostname.split(".");
          var testValue = randomStr();
          var expires = new Date();
          expires.setSeconds(expires.getSeconds() + 30);
          for (var i = 0; i < domainParts.length; i++) {
            try {
              var candidate = domainParts.slice(-(i + 1)).join(".");
              if (!domainExceptions.includes(candidate)) {
                setCookie(testName, testValue, {
                  expires: expires,
                  path: "/",
                  domain: candidate,
                  secure: secure
                });
                var allowed = getCookie(testName) === testValue;
                removeCookie(testName, {
                  path: "/",
                  domain: candidate
                });
                if (allowed) {
                  return candidate;
                }
              }
            } catch (e) {}
          }
        };
      }();
      return {
        set: setCookie,
        get: getCookie,
        getNames: getNames,
        remove: removeCookie,
        getTopLevelDomain: getTopLevelDomain,
        __private__: {
          _generateCookieString: _generateCookieString
        }
      };
    }();
    var localStorage = function () {
      var TTL_NAME_ITEMS = "_ls_ttl";
      var _checkTTl = function _checkTTl(ttl) {
        return ttl ? ttl > Date.now() : true;
      };
      var _parseTTLValues = function _parseTTLValues() {
        try {
          var value = window.localStorage.getItem(TTL_NAME_ITEMS);
          if (value) {
            var obj = JSON.parse(value);
            return obj;
          }
          return null;
        } catch (e) {
          return null;
        }
      };
      var _setTTLValues = function _setTTLValues(ttlValues) {
        try {
          if (Object.keys(ttlValues).length) {
            window.localStorage.setItem(TTL_NAME_ITEMS, JSON.stringify(ttlValues));
          } else {
            window.localStorage.removeItem(TTL_NAME_ITEMS);
          }
        } catch (e) {}
      };
      var _saveTTLValues = function _saveTTLValues(name, expires) {
        var ttlValues = _parseTTLValues();
        if (expires === void 0) {
          if (ttlValues === null || ttlValues === void 0 ? void 0 : ttlValues[name]) {
            delete ttlValues[name];
            _setTTLValues(ttlValues);
          }
          return true;
        }
        var expiresTime = expiresToDate(expires).getTime();
        if (expiresTime > Date.now()) {
          ttlValues = ttlValues || {};
          ttlValues[name] = expiresTime.toString(36);
          _setTTLValues(ttlValues);
          return true;
        }
        return false;
      };
      var _checkTTLValues = function _checkTTLValues() {
        var names = _getNames();
        var ttls = _parseTTLValues();
        var ttlsUpdated = {};
        if (!ttls) {
          return;
        }
        Object.keys(ttls).forEach(function (key) {
          if (names.includes(key)) {
            var expire = ttls[key] ? parseInt(ttls[key], 36) : null;
            if (!_checkTTl(expire)) {
              try {
                window.localStorage.removeItem(key);
              } catch (e) {}
            } else {
              ttlsUpdated[key] = ttls[key];
            }
          }
        });
        if (JSON.stringify(ttls) !== JSON.stringify(ttlsUpdated)) {
          _setTTLValues(ttlsUpdated);
        }
      };
      var _get = function _get(key) {
        var _a;
        _checkTTLValues();
        try {
          return (_a = window.localStorage.getItem(key)) !== null && _a !== void 0 ? _a : null;
        } catch (e) {
          return null;
        }
      };
      var _getNames = function _getNames() {
        try {
          return Object.keys(window.localStorage);
        } catch (e) {
          return [];
        }
      };
      var _set = function _set(key, value, options) {
        if (options === void 0) {
          options = {};
        }
        if (_saveTTLValues(key, options.expires)) {
          try {
            window.localStorage.setItem(key, value);
          } catch (e) {}
        }
      };
      var _remove = function _remove(key) {
        try {
          window.localStorage.removeItem(key);
        } catch (e) {}
        _checkTTLValues();
      };
      _checkTTLValues();
      return {
        get: _get,
        set: _set,
        getNames: _getNames,
        remove: _remove,
        expires: _checkTTLValues,
        __protected__: {
          get ttlName() {
            return TTL_NAME_ITEMS;
          }
        }
      };
    }();
    var sessionStorage = function () {
      var _get = function _get(key) {
        try {
          return window.sessionStorage.getItem(key);
        } catch (e) {
          return null;
        }
      };
      var _set = function _set(key, value) {
        try {
          window.sessionStorage.setItem(key, value);
        } catch (e) {}
      };
      var _remove = function _remove(key) {
        try {
          window.sessionStorage.removeItem(key);
        } catch (e) {}
      };
      var _getNames = function _getNames() {
        try {
          return Object.keys(window.sessionStorage);
        } catch (e) {
          return [];
        }
      };
      return {
        get: _get,
        set: _set,
        getNames: _getNames,
        remove: _remove
      };
    }();

    /******************************************************************************
     Copyright (c) Microsoft Corporation.

     Permission to use, copy, modify, and/or distribute this software for any
     purpose with or without fee is hereby granted.

     THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
     REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
     AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
     INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
     LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
     OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
     PERFORMANCE OF THIS SOFTWARE.
     ***************************************************************************** */

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
      return _assign.apply(this, arguments);
    };
    var createBaseParam = function createBaseParam(defaultValue, cookieName) {
      if (cookieName === void 0) {
        cookieName = '_pctx';
      }
      return {
        cookieName: cookieName,
        readonly: false,
        init: function init(valueFromCookie) {
          var _a;
          return (_a = valueFromCookie !== null && valueFromCookie !== void 0 ? valueFromCookie : defaultValue) !== null && _a !== void 0 ? _a : null;
        },
        refresh: function refresh(prevValue) {
          return prevValue;
        },
        update: function update(prevValue) {
          return prevValue;
        },
        set: function set(newValue) {
          return newValue;
        },
        get: function get(value) {
          return value;
        }
      };
    };
    var createStaticParam = function createStaticParam(defaultValue) {
      return _assign(_assign({}, createBaseParam(defaultValue)), {
        cookieName: null
      });
    };
    var userState = createBaseParam('anon');
    var keys = function keys(v) {
      return v ? Object.keys(v) : [];
    };
    var isArray = function isArray(v) {
      return Array.isArray(v);
    };
    var isEmpty = function isEmpty(val) {
      return val === null || val === undefined;
    };
    var isNotEmpty = function isNotEmpty(val) {
      return !isEmpty(val);
    };
    var isObject = function isObject(val) {
      return _typeof(val) === 'object';
    };
    var isString = function isString(val) {
      return typeof val === 'string';
    };
    var isNumber = function isNumber(val) {
      return typeof val === 'number';
    };

    /**
     * cx.js backwards compatible function.
     * @returns {string} - random string compatible with cx.js library.
     */
    var randomStringCxCompatible = function randomStringCxCompatible() {
      var randomString = new Date().getTime().toString(36);
      while (randomString.length < 16) {
        randomString += Math.round(Math.random() * 2147483647).toString(36);
      }
      return randomString.substr(0, 16);
    };
    var filterObjectValues = function filterObjectValues(obj, filter) {
      if (!obj) {
        return obj;
      }
      // Else add to the map
      return keys(obj).filter(function (k) {
        return filter(obj[k]);
      }).reduce(function (a, k) {
        var _a;
        return _assign(_assign({}, a), (_a = {}, _a[k] = obj[k], _a));
      }, {});
    };
    var combineCookieConfig = function combineCookieConfig(params, cookieWrappers) {
      return {
        fields: keys(params).reduce(function (res, paramName) {
          var cookieName = params[paramName].cookieName;
          if (cookieName !== null) {
            res[paramName] = cookieName;
          }
          return res;
        }, {}),
        cookieByName: cookieWrappers
      };
    };
    var stringSet = function stringSet() {
      var data = {};
      return {
        add: function add(value) {
          data[value] = true;
        },
        values: function values() {
          return keys(data);
        }
      };
    };
    var validateObj = function validateObj(obj, mapFilter) {
      if (!isObject(obj)) {
        return obj;
      }
      return keys(obj).reduce(function (r, k) {
        var val = obj[k];
        var validate = mapFilter[k];
        var value = validate && validate(val);
        if (value !== undefined) {
          r[k] = value;
        }
        return r;
      }, {});
    };
    var toBoolean = function toBoolean(val) {
      return val === 'true' || val === true;
    };
    var memo = function memo(fn, checkDeps) {
      var prevDeps = NaN;
      var prevValue = NaN;
      var prevRes;
      return function (a) {
        var curDeps = checkDeps === null || checkDeps === void 0 ? void 0 : checkDeps();
        if (a !== prevValue || prevDeps !== curDeps) {
          prevDeps = curDeps;
          prevValue = a;
          prevRes = fn(a);
        }
        return prevRes;
      };
    };
    var onMemo = function onMemo(fn) {
      var prevRes;
      return function (onChange) {
        var res = fn();
        if (res !== prevRes) {
          prevRes = res;
          onChange(res);
        }
      };
    };
    var tryFn = function tryFn(resolve, reject) {
      try {
        return resolve();
      } catch (e) {
        return reject ? tryFn(reject) : null;
      }
    };
    var parseJSON = function parseJSON(data, useBase64) {
      if (useBase64 === void 0) {
        useBase64 = false;
      }
      return tryFn(function () {
        return JSON.parse(data);
      }, function () {
        return useBase64 ? JSON.parse(window.atob(data)) : null;
      }) || null;
    };
    var toJSON = function toJSON(data, useBase64) {
      if (useBase64 === void 0) {
        useBase64 = false;
      }
      var str = JSON.stringify(data);
      return tryFn(function () {
        return useBase64 ? window.btoa(str) : str;
      }) || str;
    };
    var shallowEqual = function shallowEqual(obj, obj2) {
      if (obj === obj2) {
        return true;
      }
      if (!obj || !obj2) {
        return null;
      }
      var keys1 = keys(obj);
      var keys2 = keys(obj2);
      if (keys1.length !== keys2.length) {
        return false;
      }
      return !keys1.some(function (key) {
        var val1 = obj[key];
        var val2 = obj2[key];
        return val1 !== val2;
      });
    };
    var removeCxUsers = function removeCxUsers(allUsers) {
      return filterObjectValues(allUsers, function (val) {
        return (val === null || val === void 0 ? void 0 : val.type) !== 'CX';
      });
    };
    var users = _assign(_assign({}, createBaseParam(null)), {
      init: function init(valueFromCookie) {
        return removeCxUsers(valueFromCookie || null);
      },
      refresh: removeCxUsers,
      set: function set(value, prev) {
        // if new value is a null then rewrite this parameter
        if (value === null) {
          return null;
        }
        // Else add to the map
        return filterObjectValues(_assign(_assign({}, prev), value), function (val) {
          return val !== null;
        });
      }
    });
    var GLOBAL_CONFIG_NAME = 'pdl';
    // @ts-ignore
    var getGlobalConfig$1 = function getGlobalConfig$1() {
      return window[GLOBAL_CONFIG_NAME] || {};
    };
    var generateInitProtectedValue = function generateInitProtectedValue(_prev, changeConfig) {
      changeConfig({
        protect: true // protect rewriting after init (page loading)
      });
      return getGlobalConfig$1().pageViewId || randomStringCxCompatible();
    };
    var generateAnewProtectedValue = function generateAnewProtectedValue(_prev, changeConfig) {
      changeConfig({
        protect: true // protect rewriting after init (page loading)
      });
      return randomStringCxCompatible();
    };
    var pageViewId = _assign(_assign({}, createStaticParam()), {
      init: generateInitProtectedValue,
      refresh: generateAnewProtectedValue,
      update: generateAnewProtectedValue,
      set: function set(value, _prevValue, changeConfig) {
        changeConfig({
          protect: true // protect rewriting after change
        });
        return value;
      }
    });
    var browserId = _assign(_assign({}, createBaseParam(null, '_pcid')), {
      init: function init(_cookieInitValue, changeConfig) {
        changeConfig({
          protect: true
        });
        // Get the value from cookie. If there is no data, then generate a new random string
        return _cookieInitValue || randomStringCxCompatible();
      },
      // Need to update value - generate a new value
      update: function update(_prev, changeConfig) {
        changeConfig({
          protect: true
        });
        return randomStringCxCompatible();
      },
      // Need to set a specific value
      set: function set(value, _prev, changeConfig) {
        changeConfig({
          protect: true
        });
        return value;
      }
    });
    var RESERVED_PRODUCT = 'DL';
    var PRODUCTS_LIST = ['PA', 'DMP', 'COMPOSER', 'ID', 'VX', 'ESP', 'SOCIAL_FLOW', RESERVED_PRODUCT];
    var PRODUCTS = PRODUCTS_LIST.map(function (name, id) {
      return {
        name: name,
        id: id
      };
    });
    var PRODUCTS_MAP = PRODUCTS.reduce(function (res, _a, index) {
      var _b;
      var name = _a.name;
      return _assign(_assign({}, res), (_b = {}, _b[name] = index, _b[name.toLowerCase()] = index, _b));
    }, {});
    // support legacy value
    PRODUCTS_MAP['social flow'] = PRODUCTS_MAP.SOCIAL_FLOW;
    PRODUCTS_MAP['Social Flow'] = PRODUCTS_MAP.SOCIAL_FLOW;
    var onChangeConfigProducts = onMemo(function () {
      var _a;
      return (_a = validateConsentMemo(getGlobalConfig$1().consent)) === null || _a === void 0 ? void 0 : _a.products;
    });
    var getProducts = function () {
      var result = PRODUCTS;
      return function () {
        onChangeConfigProducts(function (config) {
          if (config) {
            result = PRODUCTS.filter(function (product) {
              return config.includes(product.name) || product.name === RESERVED_PRODUCT;
            });
          } else {
            result = PRODUCTS;
          }
        });
        return result;
      };
    }();
    var filterByProduct = function filterByProduct(value, prevValue, updateConfig) {
      var newData = getProducts().reduce(function (res, product) {
        var pid = product.id;
        res[pid] = updateConfig(value === null || value === void 0 ? void 0 : value[pid], prevValue === null || prevValue === void 0 ? void 0 : prevValue[pid], pid);
        return res;
      }, {});
      if (shallowEqual(newData, prevValue)) {
        return prevValue;
      }
      return newData;
    };
    var getPid = function getPid(key) {
      var pid = Number(key);
      if (Number.isNaN(pid)) {
        var product = PRODUCTS_MAP[key.toLowerCase()];
        return product !== null && product !== void 0 ? product : null;
      }
      return pid < PRODUCTS.length ? pid : null;
    };
    var fillProductNameReduce = function fillProductNameReduce(dataObj, reduce) {
      return keys(dataObj).reduce(function (res, productId) {
        var productName = PRODUCTS[Number(productId)].name;
        var value = dataObj[productId];
        res[productName] = reduce ? reduce(value, productName) : value;
        return res;
      }, {});
    };
    var OPT_IN_MODE = 'opt-in';
    var ESSENTIAL_MODE = 'essential';
    var OPT_OUT_MODE = 'opt-out';
    var CUSTOM_MODE = 'custom';
    var modeListBase = [OPT_IN_MODE, ESSENTIAL_MODE, OPT_OUT_MODE];
    var modesList = modeListBase.concat(CUSTOM_MODE);
    var modeIdMap = modesList.reduce(function (res, mode, index) {
      var _a;
      return _assign(_assign({}, res), (_a = {}, _a[index] = mode, _a));
    }, {});
    var priorityList = [OPT_IN_MODE, CUSTOM_MODE, ESSENTIAL_MODE, OPT_OUT_MODE];
    var getStrictMode = function getStrictMode(mode1, mode2) {
      var index1 = priorityList.indexOf(mode1);
      var index2 = priorityList.indexOf(mode2);
      return priorityList[Math.max(index1, index2)];
    };
    var isConsentMode = function isConsentMode(mode) {
      return modesList.includes(mode);
    };
    var isConsentBaseMode = function isConsentBaseMode(mode) {
      return modeListBase.includes(mode);
    };
    var purposeByProduct = {
      AD: ['DMP', 'SOCIAL_FLOW'],
      CP: ['COMPOSER'],
      AM: ['PA'],
      PR: ['ESP', 'VX', 'ID'],
      DL: ['DL']
    };
    var initialPurposeMap = keys(purposeByProduct).reduce(function (res, purpose) {
      purposeByProduct[purpose].forEach(function (product) {
        var productId = PRODUCTS_MAP[product];
        res[productId] = purpose;
      });
      return res;
    }, {});
    var onChangeConfigPurpose = onMemo(function () {
      var _a;
      return (_a = validateConsentMemo(getGlobalConfig$1().consent)) === null || _a === void 0 ? void 0 : _a.defaultPurposes;
    });
    var getDefaultPurposes = function () {
      var result = _assign({}, initialPurposeMap);
      return function () {
        onChangeConfigPurpose(function (defaultPurpose) {
          result = _assign({}, initialPurposeMap);
          if (defaultPurpose) {
            keys(defaultPurpose).forEach(function (productName) {
              var _a;
              var productId = PRODUCTS_MAP[productName];
              result[productId] = (_a = defaultPurpose[productName]) === null || _a === void 0 ? void 0 : _a.substring(0, 32);
            });
          }
        });
        return result;
      };
    }();
    var filterByProductPurposes = function filterByProductPurposes(value, prevValue) {
      return filterByProduct(value, prevValue, function (config, prevConfig, pid) {
        return config || prevConfig || getDefaultPurposes()[pid];
      });
    };
    var convertToPurposes = function convertToPurposes(val) {
      return keys(val).reduce(function (res, key) {
        var pid = getPid(key);
        var purpose = toPurpose(val[key]);
        if (pid === null) {
          return res;
        }
        if (purpose === RESERVED_PURPOSE || pid === PRODUCTS_MAP[RESERVED_PRODUCT]) {
          return res;
        }
        if (purpose) {
          res[pid] = purpose;
        }
        return res;
      }, {});
    };
    var purposes = _assign(_assign({}, createBaseParam(null, '_pprv')), {
      init: function init(valueFromCookie) {
        return isRequireConsentV2() ? filterByProductPurposes(valueFromCookie || null, null) : null;
      },
      set: function set(val, prevVal) {
        if (!isRequireConsentV2()) {
          return null;
        }
        if (val === null || val === undefined) {
          return prevVal;
        }
        return filterByProductPurposes(convertToPurposes(val), prevVal);
      }
    });
    var getGlobalConfigModifiers = function getGlobalConfigModifiers() {
      return getGlobalConfig$1().consent_modifiers || null;
    };
    var getRequireConsent = function getRequireConsent() {
      return !!getGlobalConfig$1().requireConsent;
    };
    var isRequireConsentV2 = function isRequireConsentV2() {
      return getGlobalConfig$1().requireConsent === 'v2';
    };
    var isInvalidCustomMode = function isInvalidCustomMode(mode, product) {
      var _a;
      return mode === CUSTOM_MODE && !((_a = getGlobalConfigModifiers()) === null || _a === void 0 ? void 0 : _a[product]);
    };
    var RESERVED_PURPOSE = 'DL';
    var purposesMap = ['AD', 'AM', 'CP', 'PR', RESERVED_PURPOSE].reduce(function (res, i) {
      var _a;
      return _assign(_assign({}, res), (_a = {}, _a[i] = i, _a[i.toLowerCase()] = i, _a));
    }, {});
    var toBasePurpose = function toBasePurpose(purpose) {
      return purposesMap[(purpose === null || purpose === void 0 ? void 0 : purpose.toLowerCase()) || ''] || null;
    };
    var toPurpose = function toPurpose(purpose) {
      return toBasePurpose(purpose) || (purpose === null || purpose === void 0 ? void 0 : purpose.substring(0, 32));
    };
    var productsString = function productsString(products, single, plural) {
      return "".concat(products.join(', '), " ").concat(products.length > 1 ? plural : single);
    };
    var consentV2IsDisabled = 'Consent v2 is disabled';
    var errorDlReserved = 'the "DL" purpose is reserved';
    var errorDlProductReserved = function errorDlProductReserved(purpose) {
      return "\"".concat(purpose, "\" can not be applied for the dl product");
    };
    var modeIsUnknown = function modeIsUnknown(mode) {
      return "".concat(mode, " is unknown consent mode");
    };
    var productsDoesntHaveModifier = function productsDoesntHaveModifier(products) {
      return productsString(products, 'does', 'do') + "n't have modifier in the pdl. Custom mode can't be applied";
    };
    var unknownPurpose = "Unknown purpose. Provide a product or define within pdl config";
    var unknownProducts = function unknownProducts(products) {
      return 'Custom purpose: ' + productsString(products, 'is', 'are') + ' unknown';
    };
    function setExtendedConsent(purposes, consent, modeOrType, mode, products) {
      var error = function error(msg) {
        return {
          error: msg
        };
      };
      var getConsentsByProducts = function getConsentsByProducts(modeLocal, purposeLocal, productsLocal) {
        var invalidProducts = [];
        if (!isConsentMode(modeLocal)) {
          return error(modeIsUnknown(modeLocal));
        }
        var newConsent = getProducts().reduce(function (res, _a) {
          var id = _a.id,
            name = _a.name;
          if (!purposeLocal || (purposes === null || purposes === void 0 ? void 0 : purposes[id]) === purposeLocal || (productsLocal === null || productsLocal === void 0 ? void 0 : productsLocal.includes(id))) {
            if (isInvalidCustomMode(modeLocal, name)) {
              invalidProducts.push(name);
            } else {
              res[id] = {
                mode: modeLocal
              };
            }
          }
          return res;
        }, {});
        if (invalidProducts.length) {
          return error(productsDoesntHaveModifier(invalidProducts));
        }
        if (!Object.keys(newConsent).length) {
          return null;
        }
        return {
          consent: newConsent
        };
      };
      var setAllModes = function setAllModes(modeLocal) {
        return getConsentsByProducts(modeLocal);
      };
      var setByPurpose = function setByPurpose(modeLocal, purposeRaw) {
        var purpose = toPurpose(purposeRaw);
        if (!purposesMap[purpose] && !Object.values(purposes || {}).includes(purpose)) {
          return error(unknownPurpose);
        }
        return getConsentsByProducts(modeLocal, purpose);
      };
      var setByPurposeAndProduct = function setByPurposeAndProduct(modelLocal, purposeRaw, productsRaw) {
        var purpose = toPurpose(purposeRaw);
        var productArrayRaw = isArray(productsRaw) ? productsRaw : [productsRaw];
        var pids = productArrayRaw.map(getPid).filter(isNotEmpty);
        if (!pids.length) {
          if (!toBasePurpose(purposeRaw)) {
            return error(unknownProducts(productArrayRaw));
          }
          return setByPurpose(modelLocal, purposeRaw);
        }
        if (purpose !== RESERVED_PURPOSE && pids.includes(PRODUCTS_MAP.DL)) {
          return {
            error: errorDlProductReserved(purpose)
          };
        }
        if (purpose === RESERVED_PURPOSE && pids.some(function (product) {
          return product !== PRODUCTS_MAP.DL;
        })) {
          return error(errorDlReserved);
        }
        var consentResult = getConsentsByProducts(modelLocal, purpose, pids);
        if (consentResult === null || consentResult === void 0 ? void 0 : consentResult.error) {
          return consentResult;
        }
        var newPurposes = pids.reduce(function (res, productId) {
          res[productId] = purpose;
          return res;
        }, {});
        return {
          consent: (consentResult === null || consentResult === void 0 ? void 0 : consentResult.consent) || null,
          purposes: newPurposes
        };
      };
      if (!isRequireConsentV2()) {
        return error(consentV2IsDisabled);
      }
      if (products) {
        return setByPurposeAndProduct(mode, modeOrType, products);
      } else if (mode) {
        return setByPurpose(mode, modeOrType);
      } else {
        return setAllModes(modeOrType);
      }
    }
    var getExtendedConsent = function getExtendedConsent(consent, purposes) {
      if (!consent) {
        return null;
      }
      var purposesLocal = purposes || initialPurposeMap;
      var purposesNames = fillProductNameReduce(purposesLocal);
      return getProducts().reduce(function (res, _a) {
        var _b;
        var productName = _a.name;
        var purpose = purposesNames[productName];
        var productMode = ((_b = consent[productName]) === null || _b === void 0 ? void 0 : _b.mode) || OPT_IN_MODE;
        if (!res[purpose]) {
          res[purpose] = {
            mode: productMode,
            products: [productName]
          };
        } else {
          res[purpose].mode = getStrictMode(res[purpose].mode, productMode);
          res[purpose].products.push(productName);
        }
        return res;
      }, {});
    };
    var getNotAcquiredConsent = function getNotAcquiredConsent() {
      return isRequireConsentV2() ? keys(purposeByProduct).reduce(function (res, purpose) {
        res[purpose] = {
          mode: 'not-acquired',
          products: purposeByProduct[purpose]
        };
        return res;
      }, {}) : null;
    };
    var actions = ['include', 'exclude', 'obfuscate'];
    var oneOf = function oneOf(name, value) {
      return "\"".concat(name, "\" should be one of ").concat(value.join(', '));
    };
    // tslint:disable-next-line no-empty
    var emptyFn = function emptyFn() {};
    var addPrefix = function addPrefix(prefix, log) {
      return function (val) {
        return log(prefix + val);
      };
    };
    var toProduct = function toProduct(product, log) {
      if (log === void 0) {
        log = emptyFn;
      }
      var index = PRODUCTS_MAP[product.toLowerCase()];
      if (index !== undefined) {
        return PRODUCTS[index].name;
      }
      log("\"".concat(product, "\" is not found"));
      return null;
    };
    var toMode = function toMode(mode) {
      return isConsentBaseMode(mode) ? mode : null;
    };
    var validateModifier = function validateModifier(modifier, log) {
      if (log === void 0) {
        log = emptyFn;
      }
      var source = modifier.source;
      var newPatches = modifier.patches || [];
      if (!toMode(source)) {
        log(oneOf('source', modeListBase));
        source = OPT_IN_MODE;
      }
      if (!isArray(newPatches)) {
        log('"patches" should be an array');
        newPatches = [];
      }
      newPatches = newPatches.reduce(function (res, patch, i) {
        if (!isObject(patch) || isArray(patch)) {
          log("patch[".concat(i, "]: should be type of {action, item, with?}"));
          return res;
        }
        var action = patch.action,
          item = patch.item;
        if (!actions.includes(action)) {
          log("patch[".concat(i, "]: ") + oneOf('action', actions));
          return res;
        }
        if (!item || !isObject(item) || !item.key || !item.type) {
          log("patch[".concat(i, "]: \"item\" should be type of {key, type}"));
          return res;
        }
        res.push(patch);
        return res;
      }, []);
      return {
        source: source,
        patches: newPatches
      };
    };
    var validateConsent$1 = function validateConsent$1(consent, log) {
      if (log === void 0) {
        log = emptyFn;
      }
      if (!consent) {
        return null;
      }
      var result = {};
      if (consent.products) {
        if (!isArray(consent.products)) {
          log('consent.products: should be an array');
        } else {
          result.products = consent.products.reduce(function (res, product) {
            var validProduct = toProduct(product, addPrefix('consent.products: ', log));
            if (validProduct) {
              res.push(validProduct);
            }
            return res;
          }, []);
        }
      }
      if (consent.defaultPreset) {
        result.defaultPreset = keys(consent.defaultPreset).reduce(function (res, productKey) {
          var product = toProduct(productKey, addPrefix('consent.defaultPreset: ', log));
          var mode = toMode(consent.defaultPreset[productKey]);
          if (!mode) {
            log('consent.defaultPreset: ' + oneOf(productKey, modeListBase));
          }
          if (product && mode) {
            res[product] = mode;
          }
          return res;
        }, {});
      }
      var purposes = consent.defaultPurposes;
      if (purposes) {
        result.defaultPurposes = keys(purposes).reduce(function (res, productKey) {
          var purposeLog = addPrefix('consent.defaultPurposes: ', log);
          var product = toProduct(productKey, purposeLog);
          var rawPurpose = purposes[productKey];
          var purpose = toPurpose(rawPurpose);
          if (purpose === RESERVED_PURPOSE || product === RESERVED_PRODUCT) {
            purposeLog("\"".concat(productKey, ": ").concat(rawPurpose, "\" - invalid config"));
          } else if (product && purpose) {
            res[product] = purpose;
          }
          return res;
        }, {});
      }
      return result;
    };
    var validateConsentMemo = memo(validateConsent$1);
    var validateMigration = function validateMigration(migration, log) {
      if (log === void 0) {
        log = emptyFn;
      }
      return keys(migration || {}).reduce(function (res, propName) {
        var data = migration === null || migration === void 0 ? void 0 : migration[propName];
        var product = toProduct((data === null || data === void 0 ? void 0 : data.source) || '', log);
        res[propName] = _assign(_assign({}, data), {
          source: product
        });
        return res;
      }, {});
    };

    // opt-in - 0
    // essential - 1
    // opt-out - 2
    // custom - 3
    /*!
    | \#  | name/product                                                              | PA        | DMP     | COMPOSER  | ID        | VX        | ESP     | Social Flow |
    | --- | -------------------------------------------------------------------------- | --------- | ------- | --------- | --------- | --------- | ------- | ----------- |
    | 0   | Default (not consent selected)                                             | opt-in    | opt-in  | opt-in    | opt-in    | opt-in    | opt-in  | opt-in      |
    | 1   | Audience measurement                                                       | opt-in    | opt-in  | opt-out   | opt-out   | opt-out   | opt-out | opt-out     |
    | 2   | Audience measurement (Exempted)                                            | essential | opt-out | opt-out   | opt-out   | opt-out   | opt-out | opt-out     |
    | 3   | Content performance measurement                                            | opt-in    | opt-out | opt-in    | opt-out   | opt-out   | opt-out | opt-in      |
    | 4   | Content performance measurement (Exempted)                                 | essential | opt-out | opt-out   | opt-out   | opt-out   | opt-out | essential   |
    | 5   | Personalized content profile creation                                      | opt-out   | opt-in  | opt-in    | opt-out   | opt-out   | opt-out | opt-out     |
    | 6   | Personalized ads profile creation                                          | opt-out   | opt-in  | opt-out   | opt-out   | opt-out   | opt-out | opt-out     |
    | 7   | Ads performance measurement                                                | opt-out   | opt-out | opt-out   | opt-out   | opt-out   | opt-out | opt-in      |
    | 8   | User experience personalization (registration, subscription, newsletter)   | opt-out   | opt-out | opt-in    | opt-in    | opt-in    | opt-in  | opt-out     |
    | 9   | Subscription (Exempted)                                                    | opt-out   | opt-out | essential | opt-out   | essential | opt-out | opt-out     |
    | 10  | Registration (Exempted)                                                    | opt-out   | opt-out | essential | essential | opt-out   | opt-out | opt-out     |
    */
    var PRESETS_TABLE = [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 2, 2, 2, 2, 2, 0], [1, 2, 2, 2, 2, 2, 2, 1], [0, 2, 0, 2, 2, 2, 0, 0], [1, 2, 2, 2, 2, 2, 1, 1], [2, 0, 0, 2, 2, 2, 2, 0], [2, 0, 2, 2, 2, 2, 2, 0], [2, 2, 2, 2, 2, 2, 0, 2], [2, 2, 0, 0, 0, 0, 2, 0], [2, 2, 1, 2, 1, 2, 2, 1], [2, 2, 1, 1, 2, 2, 2, 1] // 10
    ];
    var convertIndexModes = function convertIndexModes(modes) {
      return modes.reduce(function (res, modeIndex, productId) {
        var _a;
        return _assign(_assign({}, res), (_a = {}, _a[productId] = {
          mode: modeIdMap[modeIndex]
        }, _a));
      }, {});
    };
    var PRESETS = PRESETS_TABLE.map(function (modes, id) {
      return {
        id: id,
        preset: convertIndexModes(modes)
      };
    });
    var onChangeConfigPresets = onMemo(function () {
      var _a;
      return (_a = validateConsentMemo(getGlobalConfig$1().consent)) === null || _a === void 0 ? void 0 : _a.defaultPreset;
    });
    var getPresets = function () {
      var result = PRESETS;
      return function () {
        onChangeConfigPresets(function (defaultPreset) {
          result = PRESETS.slice();
          if (defaultPreset) {
            result[0] = {
              id: 0,
              preset: _assign({}, result[0].preset)
            };
            keys(defaultPreset).forEach(function (name) {
              var mode = defaultPreset[name];
              var productId = PRODUCTS_MAP[name];
              result[0].preset[productId] = {
                mode: mode
              };
            });
          }
        });
        return result;
      };
    }();
    var getDefaultPreset = function getDefaultPreset() {
      return getPresets()[0].preset;
    };
    var getCalculatedPreset = function getCalculatedPreset(presetIndexes) {
      var currentPreset = null;
      presetIndexes.forEach(function (presetIndex) {
        var preset = PRESETS_TABLE[presetIndex];
        if (!currentPreset && preset) {
          currentPreset = preset;
          return;
        }
        if (!currentPreset || !preset) {
          return;
        }
        currentPreset = currentPreset.map(function (indexMode, productIndex) {
          return Math.min(indexMode, preset[productIndex]);
        });
      });
      return currentPreset && convertIndexModes(currentPreset);
    };

    // @ts-ignore
    var convertToConsent = function convertToConsent(val) {
      return keys(val).reduce(function (res, key) {
        var config = val[key];
        var pid = getPid(key);
        if (pid === null) {
          return res;
        }
        var mode = isConsentMode(config.mode) ? config.mode : null;
        if (mode) {
          if (!res) {
            res = {};
          }
          res[pid] = {
            mode: mode
          };
        }
        return res;
      }, null);
    };
    var filterByProductConsent = function filterByProductConsent(value, prevValue) {
      return filterByProduct(value, prevValue, function (config, prevConfig, pid) {
        var mode = (config === null || config === void 0 ? void 0 : config.mode) || (prevConfig === null || prevConfig === void 0 ? void 0 : prevConfig.mode) || getDefaultPreset()[pid].mode;
        if (mode !== (prevConfig === null || prevConfig === void 0 ? void 0 : prevConfig.mode)) {
          return {
            mode: mode
          };
        }
        return prevConfig;
      });
    };
    var consent$1 = _assign(_assign({}, createBaseParam(null, '_pprv')), {
      init: function init(valueFromCookie) {
        return getRequireConsent() && valueFromCookie ? filterByProductConsent(valueFromCookie, null) : null;
      },
      set: function set(val, prevVal) {
        var _a;
        if (!getRequireConsent()) {
          return null;
        }
        if (val === null || val === undefined) {
          return prevVal;
        }
        var newConsent;
        if (isNumber(val)) {
          // deprecated value
          newConsent = ((_a = getPresets()[val]) === null || _a === void 0 ? void 0 : _a.preset) || null;
        } else if (isArray(val)) {
          // deprecated value
          newConsent = getCalculatedPreset(val);
        } else {
          newConsent = convertToConsent(val);
        }
        return newConsent ? filterByProductConsent(newConsent, prevVal) : prevVal;
      },
      get: memo(function (value) {
        return value && fillProductNameReduce(value, function (config, productName) {
          var _a;
          var newConfig = _assign({}, config);
          if (newConfig.mode === CUSTOM_MODE) {
            newConfig.modifier = ((_a = getGlobalConfigModifiers()) === null || _a === void 0 ? void 0 : _a[productName]) || null;
          }
          return newConfig;
        });
      }, function () {
        return getGlobalConfigModifiers();
      })
    });
    var consentPresets = _assign(_assign({}, createStaticParam()), {
      init: getPresets,
      set: getPresets
    });
    var products = _assign(_assign({}, createStaticParam()), {
      init: getProducts,
      set: getProducts
    });
    var consentModifiers = _assign(_assign({}, createStaticParam(null)), {
      readonly: true,
      set: function set() {
        return null;
      },
      // @ts-ignore
      get: getGlobalConfigModifiers
    });
    var toDate = function toDate(val) {
      var timeStamp = Number(val);
      if (!Number.isNaN(timeStamp)) {
        return timeStamp;
      }
      return String(val);
    };
    var toArrayString = function toArrayString(val) {
      return isArray(val) ? val : val.split(',').map(function (s) {
        return s.trim().replace(/^['"](.+)['"]$/, '$1');
      });
    };
    var asIs = function asIs(val) {
      return val;
    };
    var Validators = {
      id: asIs,
      type: asIs,
      zone: asIs,
      createdAt: toDate,
      modifiedAt: toDate,
      authors: toArrayString,
      section: asIs,
      tags: toArrayString,
      keywords: toArrayString,
      title: asIs,
      description: asIs,
      isNative: toBoolean
    };
    var isAll = function isAll(take) {
      return take === 'all';
    };
    var isFirst = function isFirst(take) {
      return take === 'first';
    };
    var isLast = function isLast(take) {
      return take === 'last';
    };
    function query(selector, take) {
      if (selector === void 0) {
        selector = 'meta';
      }
      if (isFirst(take)) {
        return document.querySelector(selector);
      }
      var els = document.querySelectorAll(selector);
      return isLast(take) ? els[els.length - 1] : Array.from(els);
    }
    var queryMetasMemo = function () {
      var res = null;
      var refresh = function refresh() {
        res = query() || null;
        if (res) {
          setTimeout(function () {
            res = null;
          }, 0);
        }
      };
      return {
        refresh: refresh,
        find: function find(attrs, hasContent) {
          if (hasContent === void 0) {
            hasContent = false;
          }
          return res ? res.reduce(function (obj, el) {
            for (var _i = 0, attrs_1 = attrs; _i < attrs_1.length; _i++) {
              var attr = attrs_1[_i];
              var name_1 = ((attr === 'name' ? el.name : el.getAttribute(attr)) || '').trim().toLowerCase();
              var content = el.content;
              if (!name_1 || hasContent && !content) {
                continue;
              }
              if (!obj[name_1]) {
                obj[name_1] = [];
              }
              obj[name_1].push(el);
              break;
            }
            return obj;
          }, {}) : null;
        }
      };
    }();
    var readMetaValue = function readMetaValue(config) {
      var metaContent = function metaContent(meta) {
        return meta.content;
      };
      var getContent = config.getContent || metaContent;
      var readSpecificSelector = function readSpecificSelector() {
        var el = query(config.selector, config.take || 'first');
        return el && getContent(el) || null;
      };
      var readFromMeta = function readFromMeta() {
        var metas = queryMetasMemo.find(config.attr || ['name'], config.hasContent);
        var names = config.names || [];
        var single = !isAll(config.take);
        var last = isLast(config.take);
        if (!metas) {
          return null;
        }
        var _loop_1 = function _loop_1(name_2) {
          var result = [];
          var elements = metas[name_2];
          if (elements) {
            if (single) {
              var index = last ? elements.length - 1 : 0;
              var meta = elements[index];
              return {
                value: getContent(meta) || ''
              };
            }
            elements.forEach(function (el) {
              result = result.concat(getContent(el) || '');
            });
          }
          if (result.length) {
            return {
              value: result
            };
          }
        };
        for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
          var name_2 = names_1[_i];
          var state_1 = _loop_1(name_2);
          if (_typeof(state_1) === "object") return state_1.value;
        }
        return null;
      };
      return config.selector ? readSpecificSelector() : readFromMeta();
    };
    var readMetaValues = function readMetaValues(configs) {
      for (var _i = 0, configs_1 = configs; _i < configs_1.length; _i++) {
        var conf = configs_1[_i];
        var val = readMetaValue(conf);
        if (val) {
          return val;
        }
      }
    };
    var append = function append(data, name, config) {
      var validate = Validators[name];
      var exist = Boolean(data[name]);
      var readValue = typeof config === 'function' ? config : function () {
        return isArray(config) ? readMetaValues(config) : readMetaValue(config);
      };
      if (!exist && validate) {
        var value = readValue();
        var validatedValue = value && validate(value);
        if (validatedValue) {
          data[name] = validatedValue;
        }
      }
    };

    // <meta property="" content="">
    var property = function property(val) {
      return {
        attr: ['property'],
        names: [val]
      };
    };
    var name = function name(val) {
      return {
        names: [val]
      };
    };
    var appendLegacyComposer = function appendLegacyComposer(prevValue) {
      // og:description & og:title will be parsed from crawler
      // 'keywords' & 'news_keywords' will be parsed from crawler
      append(prevValue, 'type', property('og:type'));
      append(prevValue, 'section', name('section'));
      append(prevValue, 'id', name('id'));
      append(prevValue, 'authors', name('author'));
    };
    var monthNames = {
      januar: '01',
      january: '01',
      jan: '01',
      februar: '02',
      february: '02',
      feb: '02',
      mars: '03',
      march: '03',
      mar: '03',
      april: '04',
      apr: '04',
      mai: '05',
      may: '05',
      juni: '06',
      june: '06',
      jun: '06',
      juli: '07',
      july: '07',
      jul: '07',
      august: '08',
      aug: '08',
      september: '09',
      sept: '09',
      sep: '09',
      oktober: '10',
      october: '10',
      okt: '10',
      oct: '10',
      november: '11',
      nov: '11',
      desember: '12',
      december: '12',
      dec: '12',
      des: '12'
    };
    var dateFormatRegex = function dateFormatRegex(input) {
      var format = input.replace(/DAY/g, '(0?[1-9]|[12][0-9]|3[01])').replace(/MONTHLONG/g, '(' + keys(monthNames).join('|') + ')').replace(/MONTH/g, '(0?[1-9]|1[012])').replace(/YEAR2/g, '([0-9][0-9])').replace(/YEAR/g, '(197[1-9]|19[8-9][0-9]|20[0-9][0-9])').replace(/TIME/g, '([0-9][0-9]):([0-9][0-9]):([0-9][0-9])(?:\\.[0-9][0-9][0-9])?([zZ]|[+-][0-9][0-9](?::?[0-9][0-9])?)?');
      var order = input.replace(/.*?([YMD])(EAR|ONTH|AY).*?/g, '$1').substring(0, 3); // "YMD", "DMY" or "MDY".
      return [new RegExp(format), order];
    };
    var dateFormats = function () {
      return ['\\bDAY\\.MONTH\\.YEAR\\b', '\\bDAY\\.?\\s{0,3}MONTHLONG\\.?\\s{1,3}YEAR\\b', '\\bYEAR-MONTH-DAY(?:[tT]|\\b)', '\\bMONTHLONG\\.?\\s{0,3}DAY(?:st|nd|rd|th)?,?\\s{1,3}YEAR\\b', '\\bDAY(?:st|nd|rd|th|\\.)?\\s{0,3}MONTHLONG\\.?,?\\s{1,3}YEAR\\b', '\\bYEAR[/年]MONTH[/月]DAY(?=\\b|日)', '\\bDAY\\.MONTH\\.YEAR2\\b', '\\bDAY/MONTH/YEAR\\b'].map(dateFormatRegex);
    }();
    var dateTimeRegex = dateFormatRegex('YEAR-MONTH-DAY[tT]TIME')[0];
    var _int = function _int(val) {
      return val && parseInt(val, 10) || 0;
    };
    function dateToISO(year, month, day, hour, minute, second, zone) {
      var then = new Date(Date.UTC(_int(year), _int(month) - 1, _int(day), _int(hour), _int(minute), _int(second)));
      var zoneMatch = (zone || '').match(/^([+-][0-9][0-9])(?::?([0-9][0-9])?)$/);
      if (zoneMatch) {
        then = new Date(then.getTime() - Number(zoneMatch[1]) * 3600000 - (Number(zoneMatch[2]) || 0) * 60000);
      }
      var msPerDay = 1000 * 24 * 60 * 60;
      var diff = Date.now() - then.getTime();
      return diff > 0 || -diff < 2 * msPerDay ? then.toISOString() : null;
    }
    function anyDateToISODate(date) {
      date = date.toLowerCase();
      var fullMatch = date.match(dateTimeRegex);
      if (fullMatch) {
        return dateToISO(fullMatch[1], fullMatch[2], fullMatch[3], fullMatch[4], fullMatch[5], fullMatch[6], fullMatch[7]);
      }
      for (var _i = 0, dateFormats_1 = dateFormats; _i < dateFormats_1.length; _i++) {
        var format = dateFormats_1[_i];
        var match = date.match(format[0]);
        if (match) {
          match = format[1] === 'DMY' ? ['', match[3], match[2], match[1]] : format[1] === 'MDY' ? ['', match[3], match[1], match[2]] : match;
          var year = match[1].length === 2 ? (_int(match[1]) < 60 ? '20' : '19') + match[1] : match[1];
          var month = match[2].length <= 2 ? match[2] : monthNames[match[2]];
          return dateToISO(year, month, match[3]);
        }
      }
    }
    var clearContent = function clearContent(str) {
      return str.replace(/<\/?[^>?]*\/?>/g, ' ').replace(/\s+/g, ' ').trim();
    };
    function authorNormalization(author) {
      if (author === void 0) {
        author = '';
      }
      return clearContent(author.replace(/,(?=\s*(jr|sr)(\.?)\b)/g, ' '));
    }
    function splitAuthors(authors) {
      if (authors === void 0) {
        authors = '';
      }
      var parsedAuthors = authors.replace(/\n+/, ';').replace(/(\<|&lt;)br(\>|&gt;)/, ';').replace(/\b(and|und|og)\b/g, ';');
      return authorNormalization(parsedAuthors).split(/[,;]/);
    }
    var getContentAuthors = function getContentAuthors(el) {
      var separator = el.getAttribute('data-separator');
      var content = el.content;
      return separator ? authorNormalization(content).split(separator) : splitAuthors(content);
    };
    var takeLast = function takeLast(config) {
      return _assign(_assign({}, config), {
        take: 'last'
      });
    };
    var hasContentAndLast = function hasContentAndLast(config) {
      return _assign(_assign({}, config), {
        take: 'last',
        hasContent: true,
        getContent: function getContent(el) {
          return clearContent(el.content || '');
        }
      });
    };
    // cxenseinternal-publishtime
    var publishTimeConfig = [takeLast({
      attr: ['name', 'property', 'itemprop'],
      names: ['cxenseparse:publishtime', 'cxenseparse:recs:publishtime', 'article:published_time', 'date', 'dc.date', 'dc.date.created', 'dc.terms.issued', 'pub_date', 'article.published', 'datepublished', 'og:article:published_time']
    }), takeLast({
      selector: 'time.published[datetime],time[pubdate][datetime]',
      getContent: function getContent(el) {
        return el.getAttribute('datetime');
      }
    }), takeLast({
      selector: 'time[datetime]',
      getContent: function getContent(el) {
        return el.getAttribute('datetime');
      }
    })];
    // cxenseinternal-modifiedtime
    var modifiedTimeConfig = {
      selector: 'meta[property="article:modified_time"]' // take first
    };
    // cxenseinternal-author
    var authorConfig = [{
      attr: ['property', 'name'],
      names: [
      // combine the data from all attributes
      'cxenseparse:author', 'og:article:author', 'article:author', 'og:book:author', 'book:author', 'author', 'dc.creator', 'article.author'],
      take: 'all',
      getContent: getContentAuthors
    }];
    // cxenseinternal-keywords
    var keywordsConfig = [hasContentAndLast({
      names: ['cxenseparse:keywords']
    }), hasContentAndLast({
      attr: ['property', 'name'],
      names: ['news_keywords']
    }), hasContentAndLast({
      names: ['keywords']
    })];
    // cxenseinternal-description
    var descriptionConfig = [hasContentAndLast({
      names: ['cxenseparse:description']
    }), hasContentAndLast({
      attr: ['property'],
      names: ['og:description']
    }), hasContentAndLast({
      names: ['description']
    })];
    // cxenseinternal-title
    var internalTitle = [{
      names: ['cxenseparse:title']
    }, takeLast({
      attr: ['property', 'name'],
      names: ['og:title']
    })];
    var appendLegacyCrawler = function appendLegacyCrawler(data) {
      append(data, 'createdAt', function () {
        var publishTime = readMetaValues(publishTimeConfig);
        return publishTime ? anyDateToISODate(publishTime.toLowerCase()) : null;
      });
      append(data, 'modifiedAt', modifiedTimeConfig);
      append(data, 'authors', authorConfig);
      append(data, 'keywords', function () {
        var keywords = readMetaValues(keywordsConfig); // check length 1024
        return keywords && keywords.length <= 1024 ? keywords : null;
      });
      append(data, 'title', internalTitle);
      append(data, 'description', descriptionConfig);
    };

    // read <meta property="content:*" content="*">
    var readMetaElements = function readMetaElements() {
      var data = Array.from(document.querySelectorAll('meta[property^=content]')).reduce(function (res, meta) {
        var _a;
        var type = (_a = meta === null || meta === void 0 ? void 0 : meta.getAttribute('property')) === null || _a === void 0 ? void 0 : _a.split(':').pop();
        var validate = Validators[type];
        if (validate && meta) {
          res[type] = validate((meta === null || meta === void 0 ? void 0 : meta.getAttribute('content')) || '');
        }
        return res;
      }, {});
      queryMetasMemo.refresh();
      appendLegacyComposer(data);
      appendLegacyCrawler(data);
      return data;
    };
    var content = _assign(_assign({}, createStaticParam(null)), {
      init: function init() {
        return readMetaElements();
      },
      refresh: function refresh(prevValue) {
        var newValue = readMetaElements();
        if (prevValue === null || prevValue === void 0 ? void 0 : prevValue._fixed_) {
          prevValue === null || prevValue === void 0 ? void 0 : prevValue._fixed_.forEach(function (fieldName) {
            delete newValue[fieldName];
          });
        }
        return _assign(_assign({}, prevValue), newValue);
      },
      set: function set(value, prevValue) {
        if (value === null) {
          return {};
        }
        var fixedSet = new Set(prevValue && prevValue._fixed_);
        var proceedValue = function proceedValue(filter, forEachCb) {
          keys(filterObjectValues(value, filter)).forEach(forEachCb);
        };
        proceedValue(isNotEmpty, function (val) {
          fixedSet.add(val);
        });
        proceedValue(isEmpty, function (val) {
          fixedSet["delete"](val);
        });
        return filterObjectValues(_assign(_assign(_assign({}, prevValue), value), {
          _fixed_: Array.from(fixedSet.values())
        }), isNotEmpty);
      },
      get: memo(function (value) {
        var getValue = _assign({}, value);
        delete getValue._fixed_;
        return value && getValue;
      })
    });
    var userSegments = _assign(_assign({}, createBaseParam(null, '_pcus')), {
      init: function init(valueFromCookie) {
        if (valueFromCookie === void 0) {
          valueFromCookie = null;
        }
        return valueFromCookie && filterObjectValues(valueFromCookie, function (val) {
          return isObject(val) && Array.isArray(val.segments);
        });
      }
    });
    var PropertiesMap = {
      pageViewId: pageViewId,
      browserId: browserId,
      users: users,
      userStatus: userState,
      siteId: createBaseParam(),
      consent: consent$1,
      consentPresets: consentPresets,
      products: products,
      consentModifiers: consentModifiers,
      purposes: purposes,
      content: content,
      userSegments: userSegments
    };
    var domainExceptions = ['pantheon.io', 'go-vip.net', 'go-vip.co'];
    var DEFAULT_COOKIE_OPTIONS = {
      path: '/',
      expires: 395,
      samesite: 'lax',
      secure: window.location.protocol === 'https:',
      domain: cookie.getTopLevelDomain(domainExceptions)
    };
    var createDateByExpires = function createDateByExpires(expires) {
      var date = new Date();
      if (expires instanceof Date) {
        date = expires;
      } else if (typeof expires === 'number') {
        date.setDate(date.getDate() + expires);
      } else {
        return null;
      }
      return date;
    };
    var dateToString = function dateToString(date) {
      return date.getTime().toString(36);
    };
    var stringToDate = function stringToDate(date) {
      return date ? tryFn(function () {
        return new Date(parseInt(date, 36));
      }) : null;
    };
    var expirationName = '_t';
    var initFixedUtils = function initFixedUtils(rawData, _a) {
      var encode = _a.encode,
        decode = _a.decode;
      var fixedMode = false;
      var fixedExpirationDate = null;
      var fixedCreationDate = null;
      var _onChangeCb = null;
      (function () {
        var _a;
        var expiration = (_a = decode(rawData || '')) === null || _a === void 0 ? void 0 : _a[expirationName];
        if (expiration) {
          var splitData = expiration.split('|');
          // for backward compatibility, the first value is expiration
          fixedExpirationDate = stringToDate(splitData[0]);
          fixedCreationDate = stringToDate(splitData[1]);
          fixedMode = !!fixedExpirationDate;
        }
      })();
      var getFixedExpiration = function getFixedExpiration(options) {
        fixedExpirationDate = fixedExpirationDate || createDateByExpires(options.expires);
        return fixedExpirationDate;
      };
      var getFixedCreation = function getFixedCreation() {
        fixedCreationDate = fixedCreationDate || new Date();
        return fixedCreationDate;
      };
      var encodeData = function encodeData(data, options) {
        if (fixedMode) {
          fixedExpirationDate = getFixedExpiration(options);
          if (fixedExpirationDate) {
            data[expirationName] = dateToString(fixedExpirationDate) + '|' + dateToString(getFixedCreation());
          }
        } else {
          delete data[expirationName];
        }
        return encode(data);
      };
      var decodeData = function decodeData(data) {
        var result = decode(data);
        if (result === null || result === void 0 ? void 0 : result[expirationName]) {
          delete result[expirationName];
        }
        return result;
      };
      var bindOptions = function bindOptions(options) {
        if (fixedMode) {
          fixedExpirationDate = getFixedExpiration(options);
          if (fixedExpirationDate) {
            return _assign(_assign({}, options), {
              expires: fixedExpirationDate
            });
          }
        }
        return options;
      };
      return {
        get fixedAt() {
          return fixedMode ? [fixedCreationDate, fixedExpirationDate] : null;
        },
        onChange: function onChange(cb) {
          _onChangeCb = cb;
        },
        setMode: function setMode(val) {
          var prevFixedMode = fixedMode;
          fixedMode = val;
          if (fixedMode !== prevFixedMode) {
            fixedExpirationDate = null;
            fixedCreationDate = null;
            _onChangeCb === null || _onChangeCb === void 0 ? void 0 : _onChangeCb(fixedMode);
          }
        },
        bindOptions: bindOptions,
        decode: decodeData,
        encode: encodeData
      };
    };
    var ESSENTIAL_CONFIG = 'essential';
    var OPTIONAL_CONFIG = 'optional';
    var MANDATORY_CONFIG = 'mandatory';
    var createCookieEncoder = function createCookieEncoder(cookieName, consent, useBase64) {
      if (consent === void 0) {
        consent = OPTIONAL_CONFIG;
      }
      if (useBase64 === void 0) {
        useBase64 = false;
      }
      return {
        cookieName: cookieName,
        consent: consent,
        encode: function encode(data) {
          return toJSON(data, useBase64);
        },
        decode: function decode(data) {
          return parseJSON(data, true);
        }
      };
    };
    var createCookieWrapper = function createCookieWrapper(encoder) {
      var cookieName = encoder.cookieName,
        consent = encoder.consent;
      var cookieInitialData = cookie.get(cookieName);
      var cookieEnabled = !!cookieInitialData;
      var cookieCreated = cookieEnabled;
      var fixedUtils = initFixedUtils(cookieInitialData, encoder);
      var expirationIsUpdated = !!fixedUtils.fixedAt;
      var lazy = cookieEnabled;
      var obfuscatedValue = null;
      var boundedCookieOptions = _assign({}, DEFAULT_COOKIE_OPTIONS);
      var cachedData = null;
      var isEnabled = function isEnabled() {
        return cookieEnabled && lazy;
      };
      var setCookie = function setCookie(options) {
        var newOptions = getOptions(options);
        var cookieString = obfuscatedValue || (cachedData ? fixedUtils.encode(cachedData, newOptions) : '');
        // recheck cookie if no value
        // rare case
        if (!cookieString) {
          var raw = cookie.get(cookieName);
          var decodedData = fixedUtils.decode(raw || '');
          cookieString = decodedData ? fixedUtils.encode(decodedData, newOptions) : '';
        }
        if (cookieString) {
          expirationIsUpdated = true;
          cookie.set(cookieName, cookieString, fixedUtils.bindOptions(newOptions));
          cookieCreated = true;
        }
      };
      var getOptions = function getOptions(options) {
        return _assign(_assign({}, boundedCookieOptions), filterObjectValues(options || {}, isNotEmpty));
      };
      var get = function get() {
        return fixedUtils.decode(cookie.get(cookieName) || '');
      };
      var set = function set(value, options) {
        cachedData = value;
        if (!isEnabled()) {
          return;
        }
        setCookie(options);
      };
      var remove = function remove(options) {
        if (!isEnabled()) {
          return;
        }
        if (cookieCreated) {
          cookie.remove(cookieName, getOptions(options));
        }
        cookieCreated = false;
      };
      var checkAndCreateCookie = function checkAndCreateCookie(enable, lazyActive) {
        var nowEnabled = enable && lazyActive;
        // turn on
        if (!isEnabled() && nowEnabled) {
          setCookie();
        }
        // turn off
        if (isEnabled() && !nowEnabled) {
          remove();
        }
        // just update expiration
        if (isEnabled() && nowEnabled && !expirationIsUpdated) {
          setCookie();
        }
        // save
        cookieEnabled = enable;
        lazy = lazyActive;
      };
      var lazyAction = function lazyAction() {
        checkAndCreateCookie(cookieEnabled, true);
      };
      var setCookieOptions = function setCookieOptions(options) {
        boundedCookieOptions = getOptions(options);
        if (isEnabled()) {
          setCookie();
        }
      };
      var setCookieEnabled = function setCookieEnabled(enabled, _obfuscatedValue) {
        if (_obfuscatedValue === void 0) {
          _obfuscatedValue = null;
        }
        obfuscatedValue = enabled ? _obfuscatedValue : null;
        checkAndCreateCookie(enabled, lazy);
      };
      var setFixedMode = function setFixedMode(val) {
        fixedUtils.setMode(val);
      };
      fixedUtils.onChange(function () {
        if (isEnabled()) {
          expirationIsUpdated = false;
          setCookie();
        }
      });
      return {
        get cookieName() {
          return cookieName;
        },
        get cookieEnabled() {
          return isEnabled();
        },
        get fixedAt() {
          return fixedUtils.fixedAt;
        },
        get consent() {
          return consent;
        },
        set: set,
        get: get,
        remove: remove,
        setCookieOptions: setCookieOptions,
        setCookieEnabled: setCookieEnabled,
        lazyActive: lazyAction,
        setFixedMode: setFixedMode
      };
    };
    var createCookieWrappers = function createCookieWrappers(cookieEncoders) {
      return keys(cookieEncoders).reduce(function (res, cookieName) {
        res[cookieName] = createCookieWrapper(cookieEncoders[cookieName]);
        return res;
      }, {});
    };

    // Copyright (c) 2013 Pieroxy <pieroxy@pieroxy.net>
    // This work is free. You can redistribute it and/or modify it
    // under the terms of the WTFPL, Version 2
    // For more information see LICENSE.txt or http://www.wtfpl.net/
    //
    // For more information, the home page:
    // http://pieroxy.net/blog/pages/lz-string/testing.html
    //
    // LZ-based compression algorithm, version 1.4.4
    // private property
    /* tslint:disable */
    var f = String.fromCharCode;
    var keyStrUriSafe = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$';
    var baseReverseDic = {};
    function _compress(uncompressed, bitsPerChar, getCharFromInt) {
      if (uncompressed == null) return '';
      var i,
        value,
        context_dictionary = {},
        context_dictionaryToCreate = {},
        context_c = '',
        context_wc = '',
        context_w = '',
        context_enlargeIn = 2,
        // Compensate for the first entry which should not count
        context_dictSize = 3,
        context_numBits = 2,
        context_data = [],
        context_data_val = 0,
        context_data_position = 0,
        ii;
      for (ii = 0; ii < uncompressed.length; ii += 1) {
        context_c = uncompressed.charAt(ii);
        if (!Object.prototype.hasOwnProperty.call(context_dictionary, context_c)) {
          context_dictionary[context_c] = context_dictSize++;
          context_dictionaryToCreate[context_c] = true;
        }
        context_wc = context_w + context_c;
        if (Object.prototype.hasOwnProperty.call(context_dictionary, context_wc)) {
          context_w = context_wc;
        } else {
          if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate, context_w)) {
            if (context_w.charCodeAt(0) < 256) {
              for (i = 0; i < context_numBits; i++) {
                context_data_val = context_data_val << 1;
                if (context_data_position == bitsPerChar - 1) {
                  context_data_position = 0;
                  context_data.push(getCharFromInt(context_data_val));
                  context_data_val = 0;
                } else {
                  context_data_position++;
                }
              }
              value = context_w.charCodeAt(0);
              for (i = 0; i < 8; i++) {
                context_data_val = context_data_val << 1 | value & 1;
                if (context_data_position == bitsPerChar - 1) {
                  context_data_position = 0;
                  context_data.push(getCharFromInt(context_data_val));
                  context_data_val = 0;
                } else {
                  context_data_position++;
                }
                value = value >> 1;
              }
            } else {
              value = 1;
              for (i = 0; i < context_numBits; i++) {
                context_data_val = context_data_val << 1 | value;
                if (context_data_position == bitsPerChar - 1) {
                  context_data_position = 0;
                  context_data.push(getCharFromInt(context_data_val));
                  context_data_val = 0;
                } else {
                  context_data_position++;
                }
                value = 0;
              }
              value = context_w.charCodeAt(0);
              for (i = 0; i < 16; i++) {
                context_data_val = context_data_val << 1 | value & 1;
                if (context_data_position == bitsPerChar - 1) {
                  context_data_position = 0;
                  context_data.push(getCharFromInt(context_data_val));
                  context_data_val = 0;
                } else {
                  context_data_position++;
                }
                value = value >> 1;
              }
            }
            context_enlargeIn--;
            if (context_enlargeIn == 0) {
              context_enlargeIn = Math.pow(2, context_numBits);
              context_numBits++;
            }
            delete context_dictionaryToCreate[context_w];
          } else {
            value = context_dictionary[context_w];
            for (i = 0; i < context_numBits; i++) {
              context_data_val = context_data_val << 1 | value & 1;
              if (context_data_position == bitsPerChar - 1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
              value = value >> 1;
            }
          }
          context_enlargeIn--;
          if (context_enlargeIn == 0) {
            context_enlargeIn = Math.pow(2, context_numBits);
            context_numBits++;
          }
          // Add wc to the dictionary.
          context_dictionary[context_wc] = context_dictSize++;
          context_w = String(context_c);
        }
      }

      // Output the code for w.
      if (context_w !== '') {
        if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate, context_w)) {
          if (context_w.charCodeAt(0) < 256) {
            for (i = 0; i < context_numBits; i++) {
              context_data_val = context_data_val << 1;
              if (context_data_position == bitsPerChar - 1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
            }
            value = context_w.charCodeAt(0);
            for (i = 0; i < 8; i++) {
              context_data_val = context_data_val << 1 | value & 1;
              if (context_data_position == bitsPerChar - 1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
              value = value >> 1;
            }
          } else {
            value = 1;
            for (i = 0; i < context_numBits; i++) {
              context_data_val = context_data_val << 1 | value;
              if (context_data_position == bitsPerChar - 1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
              value = 0;
            }
            value = context_w.charCodeAt(0);
            for (i = 0; i < 16; i++) {
              context_data_val = context_data_val << 1 | value & 1;
              if (context_data_position == bitsPerChar - 1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
              value = value >> 1;
            }
          }
          context_enlargeIn--;
          if (context_enlargeIn == 0) {
            context_enlargeIn = Math.pow(2, context_numBits);
            context_numBits++;
          }
          delete context_dictionaryToCreate[context_w];
        } else {
          value = context_dictionary[context_w];
          for (i = 0; i < context_numBits; i++) {
            context_data_val = context_data_val << 1 | value & 1;
            if (context_data_position == bitsPerChar - 1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value = value >> 1;
          }
        }
        context_enlargeIn--;
        if (context_enlargeIn == 0) {
          context_enlargeIn = Math.pow(2, context_numBits);
          context_numBits++;
        }
      }

      // Mark the end of the stream
      value = 2;
      for (i = 0; i < context_numBits; i++) {
        context_data_val = context_data_val << 1 | value & 1;
        if (context_data_position == bitsPerChar - 1) {
          context_data_position = 0;
          context_data.push(getCharFromInt(context_data_val));
          context_data_val = 0;
        } else {
          context_data_position++;
        }
        value = value >> 1;
      }

      // Flush the last char
      while (true) {
        context_data_val = context_data_val << 1;
        if (context_data_position == bitsPerChar - 1) {
          context_data.push(getCharFromInt(context_data_val));
          break;
        } else context_data_position++;
      }
      return context_data.join('');
    }
    function _decompress(length, resetValue, getNextValue) {
      var dictionary = [],
        enlargeIn = 4,
        dictSize = 4,
        numBits = 3,
        entry = '',
        result = [],
        i,
        w,
        bits,
        resb,
        maxpower,
        power,
        c,
        data = {
          val: getNextValue(0),
          position: resetValue,
          index: 1
        };
      for (i = 0; i < 3; i += 1) {
        dictionary[i] = i;
      }
      bits = 0;
      maxpower = Math.pow(2, 2);
      power = 1;
      while (power != maxpower) {
        resb = data.val & data.position;
        data.position >>= 1;
        if (data.position == 0) {
          data.position = resetValue;
          data.val = getNextValue(data.index++);
        }
        bits |= (resb > 0 ? 1 : 0) * power;
        power <<= 1;
      }
      switch (bits) {
        case 0:
          bits = 0;
          maxpower = Math.pow(2, 8);
          power = 1;
          while (power != maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            bits |= (resb > 0 ? 1 : 0) * power;
            power <<= 1;
          }
          c = f(bits);
          break;
        case 1:
          bits = 0;
          maxpower = Math.pow(2, 16);
          power = 1;
          while (power != maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            bits |= (resb > 0 ? 1 : 0) * power;
            power <<= 1;
          }
          c = f(bits);
          break;
        case 2:
          return '';
      }
      dictionary[3] = c;
      w = c;
      result.push(c);
      while (true) {
        if (data.index > length) {
          return '';
        }
        bits = 0;
        maxpower = Math.pow(2, numBits);
        power = 1;
        while (power != maxpower) {
          resb = data.val & data.position;
          data.position >>= 1;
          if (data.position == 0) {
            data.position = resetValue;
            data.val = getNextValue(data.index++);
          }
          bits |= (resb > 0 ? 1 : 0) * power;
          power <<= 1;
        }
        switch (c = bits) {
          case 0:
            bits = 0;
            maxpower = Math.pow(2, 8);
            power = 1;
            while (power != maxpower) {
              resb = data.val & data.position;
              data.position >>= 1;
              if (data.position == 0) {
                data.position = resetValue;
                data.val = getNextValue(data.index++);
              }
              bits |= (resb > 0 ? 1 : 0) * power;
              power <<= 1;
            }
            dictionary[dictSize++] = f(bits);
            c = dictSize - 1;
            enlargeIn--;
            break;
          case 1:
            bits = 0;
            maxpower = Math.pow(2, 16);
            power = 1;
            while (power != maxpower) {
              resb = data.val & data.position;
              data.position >>= 1;
              if (data.position == 0) {
                data.position = resetValue;
                data.val = getNextValue(data.index++);
              }
              bits |= (resb > 0 ? 1 : 0) * power;
              power <<= 1;
            }
            dictionary[dictSize++] = f(bits);
            c = dictSize - 1;
            enlargeIn--;
            break;
          case 2:
            return result.join('');
        }
        if (enlargeIn == 0) {
          enlargeIn = Math.pow(2, numBits);
          numBits++;
        }
        if (dictionary[c]) {
          entry = dictionary[c];
        } else {
          if (c === dictSize) {
            entry = w + w.charAt(0);
          } else {
            return null;
          }
        }
        result.push(entry);

        // Add w+entry[0] to the dictionary.
        dictionary[dictSize++] = w + entry.charAt(0);
        enlargeIn--;
        w = entry;
        if (enlargeIn == 0) {
          enlargeIn = Math.pow(2, numBits);
          numBits++;
        }
      }
    }
    function getBaseValue(alphabet, character) {
      if (!baseReverseDic[alphabet]) {
        baseReverseDic[alphabet] = {};
        for (var i = 0; i < alphabet.length; i++) {
          baseReverseDic[alphabet][alphabet.charAt(i)] = i;
        }
      }
      return baseReverseDic[alphabet][character];
    }

    //compress into a string that is already URI encoded
    function compressToEncodedURIComponent(input) {
      if (input == null) return '';
      return _compress(input, 6, function (a) {
        return keyStrUriSafe.charAt(a);
      });
    }

    //decompress from an output of compressToEncodedURIComponent
    function decompressFromEncodedURIComponent(input) {
      if (input == null) return '';
      if (input == '') return null;
      input = input.replace(/ /g, '+');
      return _decompress(input.length, 32, function (index) {
        return getBaseValue(keyStrUriSafe, input.charAt(index));
      });
    }
    var ECompressType;
    (function (ECompressType) {
      ECompressType["URI"] = "URI";
    })(ECompressType || (ECompressType = {}));
    var CompressFuncByType = {
      URI: {
        prefix: '{u}',
        compress: compressToEncodedURIComponent,
        decompress: decompressFromEncodedURIComponent
      }
    };
    var CompressFuncByPrefix = keys(CompressFuncByType).reduce(function (res, key) {
      res[CompressFuncByType[key].prefix] = CompressFuncByType[key];
      return res;
    }, {});
    var compress = function compress(data, type) {
      if (type === void 0) {
        type = ECompressType.URI;
      }
      var inputString = JSON.stringify(data);
      var compressString = CompressFuncByType[type].compress(inputString);
      return CompressFuncByType[type].prefix + compressString;
    };
    var decompress = function decompress(data) {
      var prefix = data.slice(0, 3);
      var decompressString = data.slice(3);
      if (!CompressFuncByPrefix[prefix]) {
        return null;
      }
      var decompressedString = CompressFuncByPrefix[prefix].decompress(decompressString);
      if (!decompressedString) {
        return null;
      }
      try {
        return JSON.parse(decompressedString);
      } catch (e) {
        return null;
      }
    };

    // closed encoded cookie
    var _pctx = {
      cookieName: '_pctx',
      consent: MANDATORY_CONFIG,
      encode: compress,
      decode: function decode(dataString) {
        var data = decompress(dataString || '');
        if (!isObject(data)) {
          return null;
        }
        return data;
      }
    };
    var useJSONPprv = function useJSONPprv() {
      var _a, _b;
      return !!((_b = (_a = getGlobalConfig$1().cookies) === null || _a === void 0 ? void 0 : _a._pprv) === null || _b === void 0 ? void 0 : _b.jsonOnly);
    };
    var createCookieEncoders = function createCookieEncoders() {
      return {
        _pprv: createCookieEncoder('_pprv', MANDATORY_CONFIG, !useJSONPprv()),
        _pcid: createCookieEncoder('_pcid', ESSENTIAL_CONFIG),
        _pcus: createCookieEncoder('_pcus', OPTIONAL_CONFIG, true),
        _pctx: _pctx
      };
    };
    var cookieEncoders = createCookieEncoders();
    var cookieWrappers = createCookieWrappers(cookieEncoders);
    var createCookieAssociation = function createCookieAssociation() {
      var fields = null;
      var cookieByName = null;
      var registerConfig = function registerConfig(config) {
        fields = _assign(_assign({}, config.fields), fields);
        cookieByName = _assign(_assign({}, config.cookieByName), cookieByName);
        return cookieByName;
      };
      var get = function get() {
        var result = {};
        if (cookieByName) {
          keys(cookieByName).forEach(function (key) {
            result = _assign(_assign({}, result), cookieByName[key].get());
          });
        }
        return result;
      };
      var set = function set(data, prevData) {
        if (prevData === void 0) {
          prevData = null;
        }
        var groupedData = {};
        // separate data by cookie name
        keys(data).forEach(function (fieldName) {
          var fieldValue = data[fieldName];
          var cookieWrapperName = fields === null || fields === void 0 ? void 0 : fields[fieldName];
          if (cookieWrapperName) {
            if (!groupedData[cookieWrapperName]) {
              groupedData[cookieWrapperName] = {
                wrapper: cookieByName === null || cookieByName === void 0 ? void 0 : cookieByName[cookieWrapperName],
                data: {},
                update: false,
                remove: true
              };
            }
            groupedData[cookieWrapperName].data[fieldName] = fieldValue;
            groupedData[cookieWrapperName].remove = groupedData[cookieWrapperName].remove && fieldValue === null;
            if (!prevData || !groupedData[cookieWrapperName].update && fieldValue !== prevData[fieldName]) {
              groupedData[cookieWrapperName].update = true;
            }
          }
        });
        keys(groupedData).forEach(function (key) {
          var _a = groupedData[key],
            wrapper = _a.wrapper,
            update = _a.update,
            remove = _a.remove;
          if (remove) {
            wrapper.remove();
          }
          if (update && !remove) {
            wrapper.set(groupedData[key].data);
          }
        });
      };
      return {
        register: registerConfig,
        get wrappers() {
          return cookieByName;
        },
        get: get,
        set: set
      };
    };

    // define global object in window to communicate
    var CONNECTION_NAME_OBJ = '__pctx_connection__';
    var KEY = 'uvm42pas28m';
    var emptyObjectData = {};
    var getConnection = function getConnection() {
      var cookieAssociation = createCookieAssociation();
      var initCookieData = {};
      var cachedData = null;
      var connections = new Map();
      var protectedKeys = new Map();
      var updateListeners = [];
      var addListener = function addListener(key, cb) {
        updateListeners.push([key, cb]);
      };
      var removeListener = function removeListener(key) {
        updateListeners = updateListeners.filter(function (item) {
          return item[0] !== key;
        });
      };
      var _updateData = function updateData(_, data) {
        var rejectedData = {};
        var newData = {};
        keys(data).forEach(function (key) {
          if (protectedKeys.has(key)) {
            rejectedData[key] = (cachedData === null || cachedData === void 0 ? void 0 : cachedData[key]) || null;
          } else {
            newData[key] = data[key];
          }
        });
        var oldCachedData = cachedData || initCookieData;
        var newCachedData = _assign(_assign({}, cachedData), newData);
        if (!shallowEqual(newCachedData, oldCachedData)) {
          cookieAssociation.set(newCachedData, oldCachedData);
          cachedData = newCachedData;
          updateListeners.forEach(function (_a) {
            var cb = _a[1];
            return cb(newData);
          });
        }
        return keys(rejectedData).length > 0 ? rejectedData : null;
      };
      var setProtection = function setProtection(connectKey, data, force) {
        if (force === void 0) {
          force = false;
        }
        var rejectKeys = [];
        keys(data).forEach(function (key) {
          var value = data[key];
          var actionIsPermitted = !protectedKeys.has(key) || protectedKeys.get(key) === connectKey || force;
          if (value && actionIsPermitted) {
            protectedKeys.set(key, connectKey);
          } else if (!value && actionIsPermitted) {
            protectedKeys["delete"](key);
          } else {
            rejectKeys.push(key);
          }
        });
        return rejectKeys.length > 0 ? rejectKeys : null;
      };
      return function (name, currentCookieConfig) {
        var connectionKey = randomStringCxCompatible();
        connections.set(connectionKey, name);
        if (currentCookieConfig) {
          cookieAssociation.register(currentCookieConfig);
        }
        initCookieData = _assign(_assign({}, cookieAssociation.get()), initCookieData);
        return {
          getInitCookieData: function getInitCookieData() {
            return initCookieData;
          },
          getCachedData: function getCachedData() {
            return cachedData || emptyObjectData;
          },
          setProtectionData: function setProtectionData(value) {
            return setProtection(connectionKey, value);
          },
          setProtectionDataUnsafe: function setProtectionDataUnsafe(value) {
            return setProtection(connectionKey, value, true);
          },
          updateData: function updateData(data) {
            return _updateData(connectionKey, data);
          },
          onUpdateData: function onUpdateData(cb) {
            addListener(connectionKey, cb);
          },
          terminate: function terminate() {
            removeListener(connectionKey);
            connections["delete"](connectionKey);
          },
          // TODO to support legacy version
          setCookieOptions: function setCookieOptions() {
            return null;
          },
          // TODO to support legacy version
          setCookieEnabled: function setCookieEnabled() {
            return null;
          },
          get registeredCookiesWrapper() {
            return cookieAssociation.wrappers;
          }
        };
      };
    };
    // define global object in window to communicate
    var GENERATE_NEW_CONNECTION = 'mrlqf5trgho';
    var createConnectFn = function createConnectFn(configurable) {
      if (configurable === void 0) {
        configurable = false;
      }
      return function (name, cookiesMap) {
        var connection = getConnection();
        // @ts-ignore
        try {
          // Protect from redefine and reading func
          Object.defineProperty(window, CONNECTION_NAME_OBJ, {
            configurable: configurable,
            set: function set(cb) {
              var key = cb();
              if (key === KEY) {
                cb(connection);
                // TODO Warning! Use this key only for testing and debug
              } else if (key === GENERATE_NEW_CONNECTION) {
                connection = getConnection();
              }
            }
          });
          // tslint:disable-next-line no-empty
        } catch (e) {}
        // Get common connect function
        // @ts-ignore
        window[CONNECTION_NAME_OBJ] = function (val) {
          if (val) {
            connection = val;
          }
          return KEY;
        };
        return connection(name, cookiesMap);
      };
    };
    var connect = createConnectFn();
    var isMask = function isMask(str) {
      return str.includes('*');
    };
    var createMask = function createMask(name, value) {
      return [new RegExp('^' + name.replace(/\*/g, '.*') + '$'), value];
    };
    var itemsToMask = function itemsToMask(items) {
      return keys(items).filter(isMask).map(function (i) {
        return createMask(i, items[i]);
      });
    };
    var getByMask = function getByMask(name, masks) {
      for (var _i = 0, masks_1 = masks; _i < masks_1.length; _i++) {
        var mask = masks_1[_i];
        if (mask[0].test(name)) {
          return mask[1];
        }
      }
      return null;
    };
    var getConsentModifier = function getConsentModifier(itemType, modifierNoStrict, log) {
      var modifier = modifierNoStrict && validateModifier(modifierNoStrict, log);
      if (!modifier) {
        return null;
      }
      var masks = [];
      var keys = {};
      for (var _i = 0, _a = modifier.patches; _i < _a.length; _i++) {
        var patch = _a[_i];
        var action = patch.action,
          _b = patch["with"],
          data = _b === void 0 ? null : _b,
          item = patch.item;
        if (item.type === itemType) {
          var modifierResult = {
            action: action,
            data: data
          };
          keys[item.key] = modifierResult;
          if (isMask(item.key)) {
            masks.push(createMask(item.key, modifierResult));
          }
        }
      }
      var _getModifier = function _getModifier(name) {
        return keys[name] || getByMask(name, masks);
      };
      return {
        source: modifier.source,
        getModifier: _getModifier
      };
    };
    var checkMode = function checkMode(mode, config) {
      switch (mode) {
        case OPT_IN_MODE:
          return true;
        case ESSENTIAL_MODE:
          return config === ESSENTIAL_CONFIG || config === MANDATORY_CONFIG;
        case OPT_OUT_MODE:
          return config === MANDATORY_CONFIG;
        default:
          // TODO util debug console
          return true;
      }
    };
    var checkAction = function checkAction(action) {
      switch (action) {
        case 'include':
          return true;
        case 'exclude':
          return false;
        case 'obfuscate':
          return true;
      }
    };
    var getData = function getData(action, data) {
      return action === 'obfuscate' ? data : null;
    };
    var createCheckConsentWrapper$1 = function createCheckConsentWrapper(config) {
      var items = Object.assign({}, config.items);
      var masks = itemsToMask(items);
      var getConfigByName = function getConfigByName(name) {
        return items[name] || getByMask(name, masks) || OPTIONAL_CONFIG;
      };
      function checkConsent(name, consentValue) {
        var requireConsent = getGlobalConfig$1().requireConsent;
        var isSingle = !isArray(name);
        var names = isSingle ? [name] : name;
        var result = function () {
          var getDefaultResult = function getDefaultResult() {
            return names.map(function (cName) {
              return {
                name: cName,
                allowed: !requireConsent
              };
            });
          };
          var consent = consentValue || config.getConsent();
          if (!consent) {
            return getDefaultResult();
          }
          if (consent.mode === CUSTOM_MODE) {
            var consentModifier_1 = getConsentModifier(config.type, consent.modifier, config.log);
            if (!consentModifier_1) {
              return getDefaultResult();
            }
            var source_1 = consentModifier_1.source;
            return names.map(function (itemName) {
              var modifier = consentModifier_1.getModifier(itemName);
              var data = getData(modifier === null || modifier === void 0 ? void 0 : modifier.action, modifier === null || modifier === void 0 ? void 0 : modifier.data);
              var item = {
                name: itemName,
                allowed: (modifier === null || modifier === void 0 ? void 0 : modifier.action) ? checkAction(modifier.action) : checkMode(source_1, getConfigByName(itemName))
              };
              if (data !== null) {
                item.data = data;
              }
              return item;
            });
          }
          return names.map(function (i) {
            return {
              name: i,
              allowed: checkMode(consent.mode, getConfigByName(i))
            };
          });
        }();
        return isSingle ? result[0] : result;
      }
      return checkConsent;
    };
    var checkConsent$1 = /*#__PURE__*/Object.freeze({
      __proto__: null,
      createCheckConsentWrapper: createCheckConsentWrapper$1,
      createMask: createMask,
      getByMask: getByMask,
      isMask: isMask,
      itemsToMask: itemsToMask
    });

    // simple local storage reader
    // Full version: @sdk-piano/storage
    var localStorageGet = function localStorageGet(name) {
      var getItem = function getItem(key) {
        return tryFn(function () {
          return window.localStorage.getItem(key);
        });
      };
      var value = getItem(name);
      var ttl = tryFn(function () {
        return parseInt(parseJSON(getItem('_ls_ttl'))[name], 36);
      });
      return ttl && ttl <= Date.now() ? null : value;
    };
    var validateBrowserId = function validateBrowserId(val) {
      var length = val && val.length;
      return length === 16 || length === 36 ? val : null;
    };
    var getMigrationValue = function () {
      var cookies = {
        pa_vid: function pa_vid(data) {
          return validateBrowserId(parseJSON(data || '', true) || data);
        },
        atuserid: function atuserid(data) {
          var _a;
          return validateBrowserId(((_a = parseJSON(data || '', true)) === null || _a === void 0 ? void 0 : _a.val) || '');
        }
      };
      return function (names) {
        var _loop_1 = function _loop_1(name_1) {
          try {
            var data = function () {
              if (name_1.ls) {
                return localStorageGet(name_1.ls) || null;
              }
              var raw = cookie.get(name_1);
              return cookies[name_1] && raw ? cookies[name_1](raw) : raw;
            }();
            if (data) {
              return {
                value: data
              };
            }
            // tslint:disable-next-line no-empty
          } catch (e) {}
        };
        for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
          var name_1 = names_1[_i];
          var state_1 = _loop_1(name_1);
          if (_typeof(state_1) === "object") return state_1.value;
        }
        return null;
      };
    }();
    var defaultMigration = [{
      ls: '_cX_P'
    }, 'cX_P'];
    var migrationMaps = {
      PA: {
        browserId: ['pa_vid', 'atuserid'].concat(defaultMigration)
      },
      DMP: {
        browserId: defaultMigration
      }
    };
    var DEFAULT_MIGRATION = {
      browserId: {
        source: 'DMP'
      }
    };
    var migrate = function migrate(_private) {
      var _a;
      var migrationData = _assign(_assign({}, DEFAULT_MIGRATION), validateMigration((_a = getGlobalConfig$1()) === null || _a === void 0 ? void 0 : _a.migration));
      keys(migrationData).forEach(function (propName) {
        var _a, _b;
        var param = _private.params.get(propName);
        var isDefault = migrationData[propName] === DEFAULT_MIGRATION[propName];
        var product = (_a = migrationData[propName]) === null || _a === void 0 ? void 0 : _a.source;
        var configs = product && ((_b = migrationMaps[product]) === null || _b === void 0 ? void 0 : _b[propName]) || [];
        if (param && configs.length) {
          var migrationValue = getMigrationValue(configs);
          if (migrationValue) {
            param.readonly = false;
            _private.updateValues(propName, migrationValue, true); // force update from migrated value
            param.readonly = !isDefault; // prohibit overwriting value
          }
        }
      });
    };
    var PREFIX = '@@Data-layer/';
    var UPDATE_VALUE = PREFIX + 'update_value';
    var REFRESH_VALUE = PREFIX + 'refresh_value';
    var REFRESH_LOCKED_KEY = PREFIX + 'refresh_locked_key';
    var getGlobalConfig = function getGlobalConfig() {
      // @ts-ignore
      var config = _assign({}, window[GLOBAL_CONFIG_NAME]);
      var validateCookieOption = function validateCookieOption(cookieOptions) {
        return validateObj(cookieOptions, {
          path: String,
          domain: String,
          secure: toBoolean,
          expires: function expires(val) {
            return val instanceof Date ? val : Number(val);
          },
          samesite: function samesite(val) {
            if (isString(val)) {
              return val;
            }
            return toBoolean(val);
          }
        });
      };
      if (config === null || config === void 0 ? void 0 : config.cookies) {
        config.cookies = keys(config.cookies).reduce(function (res, cookieName) {
          res[cookieName] = validateCookieOption(config.cookies[cookieName]);
          return res;
        }, {});
      }
      if (config === null || config === void 0 ? void 0 : config.cookieDefault) {
        config.cookieDefault = validateCookieOption(config.cookieDefault);
      }
      return config;
    };
    var DataLayer = function DataLayer(paramsArgs, cookiesArgs, onInit) {
      var cookieConfig = combineCookieConfig(paramsArgs, cookiesArgs);
      var syncConnection = connect('data-layer', cookieConfig);
      // Local cached values. They always sync with cookies and other Storages
      var cachedValue;
      var ready = false;
      var listenersByNames = new Map();
      var listenersCommon = new Set();
      var params = new Map();
      var getConnection = function getConnection() {
        if (!syncConnection) {
          throw new Error("DataLayer can't be connected");
        }
        return syncConnection;
      };
      var getCookieWrappers = function getCookieWrappers(cb) {
        var cookieWrappers = getConnection().registeredCookiesWrapper;
        if (cookieWrappers) {
          cb(cookieWrappers);
        }
      };
      var setCookieEnabled = function setCookieEnabled(cookiesEnabled) {
        getCookieWrappers(function (cookieWrappers) {
          var cookieNames = keys(cookiesEnabled);
          if (cookieNames.length) {
            cookieNames.forEach(function (cookieName) {
              var wrapper = cookieWrappers[cookieName];
              if (wrapper) {
                wrapper.setCookieEnabled(cookiesEnabled[cookieName]);
              }
            });
          } else {
            keys(cookieWrappers).forEach(function (key) {
              cookieWrappers[key].setCookieEnabled(cookiesEnabled);
            });
          }
        });
      };
      var resolveCookieLazyAction = function resolveCookieLazyAction(cookieNames) {
        getCookieWrappers(function (cookieWrappers) {
          cookieNames.forEach(function (cookieName) {
            var wrapper = cookieWrappers[cookieName];
            if (wrapper) {
              wrapper.lazyActive();
            }
          });
        });
      };
      var getCookieConfig = function getCookieConfig() {
        var result = null;
        getCookieWrappers(function (cookieWrappers) {
          result = keys(cookieWrappers).reduce(function (res, key) {
            var enabled = cookieWrappers[key].cookieEnabled;
            var fixedAt = cookieWrappers[key].fixedAt || null;
            var cookieName = cookieWrappers[key].cookieName;
            res[cookieName] = enabled ? {
              enabled: enabled,
              fixedAt: fixedAt
            } : null;
            return res;
          }, {});
        });
        return result;
      };
      // Init global options
      var initConfig = function initConfig(config) {
        var globalConfig = _assign(_assign({}, config), getGlobalConfig());
        var cookieOptions = globalConfig.cookieDefault;
        // set cookie options on each cookie wrapper
        getCookieWrappers(function (cookieWrappers) {
          keys(cookieWrappers).forEach(function (key) {
            var _a, _b, _c, _d;
            var cookieName = cookieWrappers[key].cookieName;
            var options = (_a = globalConfig.cookies) === null || _a === void 0 ? void 0 : _a[cookieName];
            var fixedMode = ((_b = globalConfig.cookies) === null || _b === void 0 ? void 0 : _b.storageMode) === 'fixed';
            (_d = (_c = cookieWrappers[key]).setFixedMode) === null || _d === void 0 ? void 0 : _d.call(_c, fixedMode); // backwards compatibility with DL2.5.1
            if (cookieOptions || options) {
              cookieWrappers[key].setCookieOptions(_assign(_assign({}, cookieOptions), options));
            }
          });
        });
      };
      var createConfigParameters = function createConfigParameters() {
        var configs = {};
        var getValuesByPropName = function getValuesByPropName(propName) {
          return keys(configs).reduce(function (res, key) {
            var config = configs[key];
            if (config[propName] !== undefined) {
              res[key] = config[propName];
            }
            return res;
          }, {});
        };
        var updateProtection = function updateProtection() {
          var values = getValuesByPropName('protect');
          if (keys(values).length > 0) {
            getConnection().setProtectionData(values);
          }
        };
        var updateProtectionUnsafe = function updateProtectionUnsafe() {
          var values = getValuesByPropName('protectUnsafe');
          if (keys(values).length > 0) {
            getConnection().setProtectionDataUnsafe(values);
          }
        };
        return {
          add: function add(key, config) {
            configs[key] = config;
          },
          call: function call() {
            updateProtection();
            updateProtectionUnsafe();
          }
        };
      };
      var normalizeCachedValue = function normalizeCachedValue(cachedValues, cb) {
        return keys(cachedValues).reduce(function (result, paramName) {
          var param = params.get(paramName);
          var value = cachedValues[paramName];
          if (param) {
            result[paramName] = cb ? cb(param, value) : param.get(value);
          }
          return result;
        }, {});
      };
      var _getPrivateContext = function _getPrivateContext() {
        return {
          params: params,
          getConnection: getConnection,
          addChangeListener: addChangeListener,
          get: get,
          updateValues: updateValues
        };
      };
      var init = function init(options) {
        if (options === void 0) {
          options = {};
        }
        if (ready) {
          return;
        }
        if (!syncConnection) {
          syncConnection = connect('data-layer', cookieConfig);
        }
        initConfig(options);
        ready = true;
        keys(paramsArgs).forEach(function (key) {
          var param = paramsArgs[key];
          listenersByNames.set(key, new Set());
          params.set(key, param);
        });
        var needToUpdateCookie = false;
        var initCookieData = getConnection().getInitCookieData();
        var cachedData = getConnection().getCachedData();
        var configToChange = createConfigParameters();
        var initData = keys(paramsArgs).reduce(function (res, key) {
          var _key = key;
          var param = paramsArgs[key];
          res[key] = (cachedData === null || cachedData === void 0 ? void 0 : cachedData[_key]) || param.init(initCookieData === null || initCookieData === void 0 ? void 0 : initCookieData[_key], function (config) {
            configToChange.add(_key, config);
          });
          if (!(cachedData === null || cachedData === void 0 ? void 0 : cachedData[_key])) {
            needToUpdateCookie = true;
          }
          return res;
        }, {});
        cachedValue = initData;
        // In the case of different versions, syncConnection may not have some data, so we must initialize them and save
        if (needToUpdateCookie) {
          getConnection().updateData(initData);
        }
        configToChange.call();
        getConnection().onUpdateData(function (data) {
          return onUpdateData(data);
        });
        onInit === null || onInit === void 0 ? void 0 : onInit(_getPrivateContext());
      };
      var onUpdateData = function onUpdateData(data) {
        var cachedValueWasUpdated = false;
        keys(data).forEach(function (key) {
          var _a;
          var _key = key;
          var param = params.get(_key);
          if (param) {
            var value_1 = data[_key];
            var prevValue = cachedValue[_key];
            if (prevValue !== value_1) {
              cachedValue[_key] = value_1;
              cachedValueWasUpdated = true;
              // todo set logs in debug mode
              (_a = listenersByNames.get(_key)) === null || _a === void 0 ? void 0 : _a.forEach(function (cb) {
                return cb(param.get(value_1));
              });
            }
          }
        });
        if (cachedValueWasUpdated) {
          listenersCommon.forEach(function (cb) {
            return cb(normalizeCachedValue(cachedValue));
          });
        }
      };
      var updateValues = function updateValues(arg1, arg2, force) {
        var _a;
        if (force === void 0) {
          force = false;
        }
        var data = arg1;
        var cookiesActions = stringSet();
        if (isString(arg1)) {
          data = (_a = {}, _a[arg1] = arg2, _a);
        }
        var configsToResetProtection = createConfigParameters();
        var configsToChange = createConfigParameters();
        data = keys(data).reduce(function (res, key) {
          var value = data[key];
          var param = params.get(key);
          var keyString = key;
          if (param === null || param === void 0 ? void 0 : param.readonly) {
            return res;
          }
          if (param && param.cookieName) {
            cookiesActions.add(param.cookieName);
          }
          if (!param || value === cachedValue[key]) {
            return res;
          }
          if (value === REFRESH_VALUE) {
            res[key] = param.refresh(cachedValue[key], function (config) {
              // change parameter config after updating
              configsToChange.add(keyString, config);
            });
            // If value was updated
            if (res[key] !== cachedValue[key]) {
              // So we need to reset protection for parameter
              configsToResetProtection.add(keyString, {
                protectUnsafe: false
              });
            }
            return res;
          }
          if (value === UPDATE_VALUE) {
            res[key] = param.update(cachedValue[key], function (config) {
              configsToChange.add(keyString, config);
            });
            return res;
          }
          res[key] = param.set(value, cachedValue[key], function (config) {
            configsToChange.add(keyString, config);
          });
          return res;
        }, {});
        resolveCookieLazyAction(cookiesActions.values());
        // reset protection
        configsToResetProtection.call();
        var rejectedData = getConnection().updateData(data);
        if (rejectedData && force) {
          // reset protection for rejected data
          var unprotectKeys = keys(rejectedData).reduce(function (res, key) {
            var _a;
            return _assign(_assign({}, res), (_a = {}, _a[key] = false, _a));
          }, {});
          getConnection().setProtectionDataUnsafe(unprotectKeys);
          getConnection().updateData(data);
        }
        // Update configs of params
        configsToChange.call();
        return rejectedData && normalizeCachedValue(rejectedData);
      };
      function get(arg1) {
        var _a;
        var cookiesActions = stringSet();
        var isSingleValue = isString(arg1);
        var result;
        // all data
        if (arg1 === undefined) {
          result = cachedValue;
        } else if (isSingleValue) {
          result = (_a = {}, _a[arg1] = cachedValue[arg1], _a);
        } else {
          // specific values
          result = arg1.reduce(function (res, key) {
            if (params.has(key)) {
              res[key] = cachedValue[key];
            }
            return res;
          }, {});
        }
        result = normalizeCachedValue(result, function (param, value) {
          if (param.cookieName) {
            cookiesActions.add(param.cookieName);
          }
          return param.get(value);
        });
        resolveCookieLazyAction(cookiesActions.values());
        return isSingleValue ? result[arg1] : result;
      }
      function set(arg1, arg2) {
        return updateValues(arg1, arg2, false);
      }
      function setUnsafe(arg1, arg2) {
        updateValues(arg1, arg2, true);
      }
      var updateSafeUnsafe = function updateSafeUnsafe(arg1, unsafe) {
        if (unsafe === void 0) {
          unsafe = false;
        }
        var names = arg1;
        if (!isArray(arg1)) {
          names = [arg1];
        }
        return updateValues(names.reduce(function (res, name) {
          res[name] = UPDATE_VALUE;
          return res;
        }, {}), undefined, unsafe);
      };
      var update = function update(arg1) {
        return updateSafeUnsafe(arg1);
      };
      var updateUnsafe = function updateUnsafe(arg1) {
        return updateSafeUnsafe(arg1, true);
      };
      var protectPrivate = function protectPrivate(arg1, arg2, force) {
        var _a;
        if (force === void 0) {
          force = false;
        }
        var protectMethod = force ? getConnection().setProtectionDataUnsafe : getConnection().setProtectionData;
        var values = arg1;
        if (isString(arg1)) {
          values = (_a = {}, _a[arg1] = arg2, _a);
        }
        // @ts-ignore
        return protectMethod(values);
      };
      function protect(arg1, arg2) {
        return protectPrivate(arg1, arg2);
      }
      function protectUnsafe(arg1, arg2) {
        return protectPrivate(arg1, arg2, true);
      }
      function addChangeListener(arg1, arg2) {
        var _a;
        if (isString(arg1)) {
          (_a = listenersByNames.get(arg1)) === null || _a === void 0 ? void 0 : _a.add(arg2);
          return;
        }
        listenersCommon.add(arg1);
      }
      var removeChangeListener = function removeChangeListener(cb) {
        listenersCommon["delete"](cb);
        listenersByNames.forEach(function (listeners) {
          return listeners["delete"](cb);
        });
      };
      var refresh = function refresh() {
        var _a;
        if (getConnection().setProtectionData((_a = {}, _a[REFRESH_LOCKED_KEY] = true, _a))) {
          return false;
        }
        var paramKeys = [];
        params.forEach(function (_v, key) {
          return paramKeys.push(key);
        });
        var refreshData = paramKeys.reduce(function (res, key) {
          res[key] = REFRESH_VALUE;
          return res;
        }, {});
        updateValues(refreshData);
        return true;
      };
      var terminate = function terminate() {
        syncConnection === null || syncConnection === void 0 ? void 0 : syncConnection.terminate();
        listenersByNames.clear();
        listenersCommon.clear();
        syncConnection = null;
        ready = false;
        cachedValue = {};
      };
      var updateMigration = function updateMigration() {
        if (ready) {
          // @ts-ignore
          migrate(_getPrivateContext());
        }
      };
      function setConsent(arg1, arg2, arg3) {
        // @ts-ignore
        var consent = get('consent');
        // @ts-ignore
        var purposes = get('purposes');
        var result = setExtendedConsent(purposes, consent, arg1, arg2, arg3);
        if (!result) {
          return null;
        }
        if (result.error) {
          return result.error;
        }
        set({
          // @ts-ignore
          consent: result.consent,
          purposes: result.purposes
        });
        return null;
      }
      var getConsent = function getConsent() {
        // @ts-ignore
        var _a = get(['consent', 'purposes']),
          consent = _a.consent,
          purposes = _a.purposes;
        return getExtendedConsent(consent, purposes);
      };
      return {
        init: init,
        set: set,
        get: get,
        update: update,
        refresh: refresh,
        protect: protect,
        addChangeListener: addChangeListener,
        removeChangeListener: removeChangeListener,
        terminate: terminate,
        updateMigration: updateMigration,
        get isReady() {
          return ready;
        },
        utils: {
          validateModifier: validateModifier,
          validateConsent: validateConsent$1,
          checkConsent: checkConsent$1,
          setConsent: setConsent,
          getConsent: getConsent,
          notAcquiredConsent: getNotAcquiredConsent()
        },
        get cookies() {
          return getCookieConfig();
        },
        // deprecated methods
        get cookieEnabled() {
          return getCookieConfig();
        },
        setUnsafe: setUnsafe,
        protectUnsafe: protectUnsafe,
        updateUnsafe: updateUnsafe,
        setCookieEnabled: setCookieEnabled
      };
    };
    var isPAConsentOnly = function isPAConsentOnly(con) {
      var _a, _b;
      var conf = getGlobalConfig$1();
      var products = ((_a = conf.consent) === null || _a === void 0 ? void 0 : _a.products) || [];
      var paOnly = products.length === 1 && products[0] === 'PA';
      var isOptOut = ((_b = con === null || con === void 0 ? void 0 : con.PA) === null || _b === void 0 ? void 0 : _b.mode) === 'opt-out';
      return !!conf.requireConsent && paOnly && isOptOut;
    };
    var getCookieProhibition = function getCookieProhibition(con) {
      var prohibitForPaProducts = isPAConsentOnly(con);
      return {
        _pprv: !getGlobalConfig$1().requireConsent,
        _pctx: prohibitForPaProducts,
        _pcid: prohibitForPaProducts,
        _pcus: prohibitForPaProducts
      };
    };
    var checkConsent = function checkConsent(_private) {
      var _a;
      var items = keys(cookieEncoders).reduce(function (res, cookieName) {
        res[cookieName] = cookieEncoders[cookieName].consent;
        return res;
      }, {});
      var getConsent = function getConsent(data) {
        var _a;
        return data || ((_a = _private.get('consent')) === null || _a === void 0 ? void 0 : _a.DL) || null;
      };
      var check = createCheckConsentWrapper$1({
        items: items,
        type: 'cookie',
        getConsent: getConsent
      });
      var prevValueDlConsent = getConsent();
      var prevValuePAConsent = ((_a = _private.get('consent')) === null || _a === void 0 ? void 0 : _a.PA) || null;
      var checkCookieWrappers = function checkCookieWrappers(con, allConsents) {
        var _a;
        var prohibition = getCookieProhibition(allConsents);
        var cookieWrapperMap = (_a = _private.getConnection()) === null || _a === void 0 ? void 0 : _a.registeredCookiesWrapper;
        if (cookieWrapperMap) {
          var names = keys(cookieWrapperMap).map(function (key) {
            return cookieWrapperMap[key].cookieName;
          });
          check(names, con).forEach(function (_a) {
            var name = _a.name,
              allowed = _a.allowed,
              data = _a.data;
            var cookieName = name;
            var cookieAllowed = allowed && !prohibition[cookieName];
            cookieWrapperMap[cookieName].setCookieEnabled(cookieAllowed, data || null);
          });
        }
      };
      _private.addChangeListener('consent', function (data) {
        var newDLValue = (data === null || data === void 0 ? void 0 : data.DL) || null;
        var newPAValue = (data === null || data === void 0 ? void 0 : data.PA) || null;
        if ((prevValueDlConsent === null || prevValueDlConsent === void 0 ? void 0 : prevValueDlConsent.mode) !== (newDLValue === null || newDLValue === void 0 ? void 0 : newDLValue.mode) || (prevValuePAConsent === null || prevValuePAConsent === void 0 ? void 0 : prevValuePAConsent.mode) !== (newPAValue === null || newPAValue === void 0 ? void 0 : newPAValue.mode)) {
          prevValueDlConsent = newDLValue;
          prevValuePAConsent = newPAValue;
          checkCookieWrappers(newDLValue, data);
        }
      });
      checkCookieWrappers(prevValueDlConsent, _private.get('consent'));
    };
    var log = function log(product, mode, type) {
      var prefix = type === 1 ? 'can not be' : 'was';
      // tslint:disable-next-line
      console.warn("[DL]: Consent v2: the \"".concat(product, "\" has a conflicted consent mode, ") + "mode ".concat(prefix, " changed to \"").concat(mode, "\""));
    };
    var validateConsent = function validateConsent(_private) {
      var timer = null;
      var customInvalidProducts = {};
      var validate = function validate(consent) {
        var currentConsent = getExtendedConsent(consent, _private.get('purposes'));
        if (currentConsent && consent) {
          var needUpdate_1 = false;
          var newConsent = keys(currentConsent).reduce(function (res, key) {
            var newMode = currentConsent[key].mode;
            currentConsent[key].products.forEach(function (productName) {
              var _a;
              if (newMode !== ((_a = consent[productName]) === null || _a === void 0 ? void 0 : _a.mode)) {
                if (isInvalidCustomMode(newMode, productName)) {
                  if (!customInvalidProducts[productName]) {
                    customInvalidProducts[productName] = true;
                    log(productName, newMode, 1);
                  }
                } else {
                  res[productName] = {
                    mode: newMode
                  };
                  needUpdate_1 = true;
                  log(productName, newMode, 2);
                }
              }
            });
            return res;
          }, {});
          if (needUpdate_1) {
            _private.updateValues({
              consent: newConsent
            });
          }
        }
      };
      _private.addChangeListener('consent', function (consent) {
        if (isRequireConsentV2()) {
          if (timer) {
            clearTimeout(timer);
            timer = null;
          }
          timer = setTimeout(function () {
            validate(consent);
            timer = null;
          }, 200);
        }
      });
      if (isRequireConsentV2()) {
        validate(_private.get('consent'));
      }
    };
    var onDataLayerInit = function onDataLayerInit(_private) {
      checkConsent(_private);
      migrate(_private);
      validateConsent(_private);
    };
    var dataLayer = DataLayer(PropertiesMap, cookieWrappers, onDataLayerInit);

    function _parseLanguage(language, separators) {
      var _iterator = _createForOfIteratorHelper(separators),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var separator = _step.value;
          if (language.indexOf(separator) > -1) {
            var splitted = language.split(separator);
            return [splitted[0], splitted.slice(1).join(separator)];
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return ['', ''];
    }
    function _camelToSnake(string) {
      return string.replace(/[\w]([A-Z])/g, function (m) {
        return m[0] + '_' + m[1];
      }).toLowerCase();
    }
    function metadataStep(pa, model, nextSteps) {
      model.setProperty('event_collection_platform', 'js' );
      model.setProperty('event_collection_version', model.getConfiguration('version'));
      var date = new Date();
      model.setProperty('device_timestamp_utc', date.getTime());
      model.setProperty('device_local_hour', date.getTime());
      model.setProperty('device_hour', date.getHours());
      {
        var manualConfig = 'isManualPageRefresh',
          pageviewidProp = 'pageview_id',
          notFirstPageConfig = '_isNotFirstPageView';
        var _iterator2 = _createForOfIteratorHelper(model.events),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _event2 = _step2.value;
            if (_event2.name === 'page.display') {
              if (pa.getConfiguration(manualConfig) === null && pa.getConfiguration(notFirstPageConfig)) {
                pa.setConfiguration(manualConfig, false);
              }
              if (pa.getConfiguration('enableAutomaticPageRefresh') && pa.getConfiguration(manualConfig) === false && pa.getConfiguration(notFirstPageConfig)) {
                dataLayer.refresh();
              }
              if (!pa.getConfiguration(notFirstPageConfig)) {
                pa.setConfiguration(notFirstPageConfig, true);
              }
            }
            if (_isPropertiesAbsentForEvent(pageviewidProp, model, _event2)) {
              if (pa._privacy.call('isPropAllowed', pageviewidProp)) {
                _event2.data[pageviewidProp] = dataLayer.get('pageViewId');
              }
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        try {
          var cookieCreationDate = new Date(new Date(dataLayer.cookies._pcid.fixedAt[0]).setUTCHours(0, 0, 0, 0)).toISOString();
          var _iterator3 = _createForOfIteratorHelper(model.events),
            _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var event = _step3.value;
              if (_isPropertiesAbsentForEvent('cookie_creation_date', model, event)) {
                model.setProperty('cookie_creation_date', cookieCreationDate);
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        } catch (e) {/* empty */
        }
        var content = dataLayer.get('content');
        for (var propContent in content) {
          if (Object.prototype.hasOwnProperty.call(content, propContent)) {
            var MAP_PA_DL = {
              'createdAt': 'content_publication_date',
              'tags': 'tags_array'
            };
            var propFinalName = propContent === 'createdAt' || propContent === 'tags' ? MAP_PA_DL[propContent] : _camelToSnake("content_".concat(propContent));
            var _iterator4 = _createForOfIteratorHelper(model.events),
              _step4;
            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var _event = _step4.value;
                if (_isPropertiesAbsentForEvent(propFinalName, model, _event)) {
                  if (pa._privacy.call('isPropAllowed', propFinalName)) {
                    _event.data[propFinalName] = content[propContent];
                  }
                }
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          }
        }
        model.setProperty('has_access', dataLayer.get('userStatus'));
        model.setProperty('device_screen_width', window.screen.width);
        model.setProperty('device_screen_height', window.screen.height);
        model.setProperty('device_display_width', window.innerWidth || document.documentElement && document.documentElement.clientWidth ? document.documentElement.clientWidth : '');
        model.setProperty('device_display_height', window.innerHeight || document.documentElement && document.documentElement.clientHeight ? document.documentElement.clientHeight : '');
        var language = window.navigator ? window.navigator.language || window.navigator.userLanguage : '';
        var languageSplitted = _parseLanguage(language, ['-', '_']);
        model.setProperty('browser_language', languageSplitted[0]);
        model.setProperty('browser_language_local', languageSplitted[1]);
        model.setProperty('previous_url', document.referrer || '');
        if (document.title) {
          model.setProperty('page_title_html', document.title);
        }
        var eventUrlWithQueryString = model.getConfiguration('addEventURL').toString() === 'true';
        if (eventUrlWithQueryString || model.getConfiguration('addEventURL') === 'withoutQS') {
          model.setProperty('event_url_full', eventUrlWithQueryString ? window.location.href.split('#')[0] : "".concat(window.location.protocol, "//").concat(window.location.host).concat(window.location.pathname));
        }
        try {
          if (pa.getConfiguration('allowHighEntropyClientHints')) {
            window.navigator.userAgentData.getHighEntropyValues(['architecture', 'bitness', 'brands', 'mobile', 'model', 'platform', 'platformVersion', 'uaFullVersion', 'fullVersionList']).then(function (userAgentData) {
              _addUserAgentMetadata(model, userAgentData);
            })["finally"](function () {
              nextStep(pa, model, nextSteps);
            });
          } else {
            var ua = {
              'brands': window.navigator.userAgentData.brands,
              'platform': window.navigator.userAgentData.platform,
              'mobile': window.navigator.userAgentData.mobile
            };
            _addUserAgentMetadata(model, ua);
            nextStep(pa, model, nextSteps);
          }
        } catch (e) {
          nextStep(pa, model, nextSteps);
        }
      }
    }
    function _isPropertiesAbsentForEvent(name, model, event) {
      if (model.hasProperty(name) && model.properties[name].options.events) {
        var propertyEventsOption = model.properties[name].options.events;
        if (propertyEventsOption.indexOf(event.name) > -1) {
          return false;
        }
        var _iterator5 = _createForOfIteratorHelper(propertyEventsOption),
          _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var eventAllowed = _step5.value;
            if (eventAllowed.charAt(eventAllowed.length - 1) === '*' && event.name.indexOf(eventAllowed.substring(0, eventAllowed.length - 1)) === 0) {
              return false;
            }
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      }
      return typeof event.data[name] === 'undefined';
    }
    function _isDefined(variable) {
      return typeof variable !== 'undefined';
    }
    function _addUserAgentMetadata(model, ua) {
      var properties = [{
        metric: 'brands',
        property: 'ch_ua'
      }, {
        metric: 'architecture',
        property: 'ch_ua_arch'
      }, {
        metric: 'bitness',
        property: 'ch_ua_bitness'
      }, {
        metric: 'fullVersionList',
        property: 'ch_ua_full_version_list'
      }, {
        metric: 'mobile',
        property: 'ch_ua_mobile'
      }, {
        metric: 'model',
        property: 'ch_ua_model'
      }, {
        metric: 'platform',
        property: 'ch_ua_platform'
      }, {
        metric: 'platformVersion',
        property: 'ch_ua_platform_version'
      }, {
        metric: 'uaFullVersion',
        property: 'ch_ua_full_version'
      }];
      if (_isDefined(ua)) {
        for (var i = 0; i < properties.length; i++) {
          if (_isDefined(ua[properties[i].metric])) {
            model.setProperty(properties[i].property, ua[properties[i].metric]);
          }
        }
      }
    }

    function onBeforeBuildStep(pa, model, nextSteps) {
      function next(forceBreak) {
        nextStep(pa, model, nextSteps, forceBreak);
      }
      if (model.options && model.options.onBeforeBuild) {
        model.options.onBeforeBuild(pa, model, next);
      } else {
        next();
      }
    }

    function onBeforeSendStep(pa, model, nextSteps) {
      function next(forceBreak) {
        nextStep(pa, model, nextSteps, forceBreak);
      }
      if (model.options && model.options.onBeforeSend) {
        model.options.onBeforeSend(pa, model, next);
      } else {
        next();
      }
    }

    function privacyStep(pa, model, nextSteps) {
      pa._privacy.call('filterEvents', model.events);
      pa._privacy.call('filterProps', model.properties);
      var _events = model.events;
      for (var i = 0; i < _events.length; i++) {
        pa._privacy.call('filterProps', _events[i].data, _events[i].name);
        var metadata = pa._privacy.call('getModeMetadata') || {};
        for (var property in metadata) {
          if (Object.prototype.hasOwnProperty.call(metadata, property)) {
            model.setProperty(property, metadata[property]);
          }
        }
      }
      nextStep(pa, model, nextSteps);
    }

    function propertiesStep(pa, model, nextSteps) {
      var propsToDelete = [];
      for (var property in model.properties) {
        if (Object.prototype.hasOwnProperty.call(model.properties, property)) {
          var isAdded = false;
          var _iterator = _createForOfIteratorHelper(model.events),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var event = _step.value;
              var isEventOptionOk = false;
              var propertyEventsOption = model.properties[property].options.events;
              if (propertyEventsOption) {
                if (propertyEventsOption.indexOf(event.name) > -1) {
                  isEventOptionOk = true;
                } else {
                  var _iterator2 = _createForOfIteratorHelper(propertyEventsOption),
                    _step2;
                  try {
                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                      var eventAllowed = _step2.value;
                      if (eventAllowed.charAt(eventAllowed.length - 1) === '*' && event.name.indexOf(eventAllowed.substring(0, eventAllowed.length - 1)) === 0) {
                        isEventOptionOk = true;
                        break;
                      }
                    }
                  } catch (err) {
                    _iterator2.e(err);
                  } finally {
                    _iterator2.f();
                  }
                }
              } else if (!propertyEventsOption) {
                isEventOptionOk = true;
              }
              if (isEventOptionOk) {
                event.data[property] = model.properties[property].value;
                isAdded = true;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          if (isAdded && !model.properties[property].options.persistent) {
            propsToDelete.push(property);
          }
        }
      }
      for (var _i = 0, _propsToDelete = propsToDelete; _i < _propsToDelete.length; _i++) {
        var _property = _propsToDelete[_i];
        delete pa._properties[_property];
      }
      if (!model.getConfiguration('sendEmptyProperties')) {
        var _iterator3 = _createForOfIteratorHelper(model.events),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _event = _step3.value;
            for (var prop in _event.data) {
              if (Object.prototype.hasOwnProperty.call(_event.data, prop) && (_event.data[prop] === '' || _event.data[prop] === undefined)) {
                delete _event.data[prop];
              }
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
      nextStep(pa, model, nextSteps);
    }

    function sendStep(pa, model, nextSteps) {
      if ((pa._privacy.call('getMode') !== pa._privacy.modeEnum.OPTOUT || pa._privacy.call('getMode') === pa._privacy.modeEnum.OPTOUT && model.getConfiguration('sendEventWhenOptout')) && model.build.data.events.length > 0) {
        http.post(model.build.url, JSON.stringify(model.build.data));
      }
      nextStep(pa, model, nextSteps);
    }

    function userStep(pa, model, nextSteps) {
      if (typeof model.properties['user_id'] !== 'undefined') {
        nextStep(pa, model, nextSteps);
      } else {
        pa.getUser(function (userStored) {
          if (userStored !== null) {
            var opts = {
              persistent: true
            };
            model.setProperty('user_id', userStored.id, opts);
            model.setProperty('user_category', userStored.category, opts);
            model.setProperty('user_recognition', true, opts);
          }
          nextStep(pa, model, nextSteps);
        });
      }
    }

    function visitorStep(pa, model, nextSteps) {
      pa._storage.getItem(model.getConfiguration('storageVisitor'), function (storedValue) {
        if (model.getConfiguration('isVisitorClientSide')) {
          model.visitorId = model.getConfiguration('visitorId') || (dataLayer.get('browserId') );
          {
            if (!model.getConfiguration('isLegacyPrivacy') && pa.consent.getMode() === 'opt-out') {
              model.visitorId = 'OPT-OUT';
            }
          }
          var isNotForcedValue = model.visitorId !== 'OPT-OUT' && model.visitorId !== 'no-consent' && model.visitorId !== 'no-storage' && model.visitorId !== model.getConfiguration('visitorId');
          {
            if (model.visitorId !== dataLayer.get('browserId') && isNotForcedValue) {
              model.visitorId = model.visitorId + '-NO';
            }
            nextStep(pa, model, nextSteps);
          }
        } else {
          nextStep(pa, model, nextSteps);
        }
      });
    }

    function Cookies(pa) {
      this.setItem = function (name, data, expiration, callback) {
        var cookie = "".concat(name, "=").concat(pa.getConfiguration('encodeStorageBase64') ? encoding.base64.encode(JSON.stringify(data)) : encodeURIComponent(JSON.stringify(data)));
        cookie += ";path=".concat(pa.getConfiguration('cookiePath'));
        cookie += ";domain=".concat(pa.getConfiguration('cookieDomain'));
        cookie += pa.getConfiguration('cookieSecure') ? ';secure' : '';
        cookie += ";samesite=".concat(pa.getConfiguration('cookieSameSite'));
        cookie += expiration ? ";expires=".concat(expiration.toUTCString()) : '';
        document.cookie = cookie;
        callback && callback();
      };
      this.getItem = function (name, callback) {
        var storedData = null;
        var regExp = new RegExp("(?:^| )".concat(name, "=([^;]+)"));
        var cookieData = regExp.exec(document.cookie) || null;
        if (cookieData) {
          try {
            storedData = JSON.parse(decodeURIComponent(cookieData[1]));
          } catch (e) {
            storedData = JSON.parse(encoding.base64.decode(cookieData[1]));
          }
        }
        callback && callback(storedData);
      };
      this.deleteItem = function (name, callback) {
        var date = new Date();
        date.setTime(date.getTime() - 1000);
        this.setItem(name, '', date, callback);
      };
    }

    var Storage = Cookies ;

    var createConsentWrapper = function createConsentWrapper(config) {
      return function () {
        var consent2 = config.dataLayer.get("consent");
        return consent2 && consent2[config.productName] || null;
      };
    };
    var onDlChangeConsent = function onDlChangeConsent(config, cb) {
      var prevValue = null;
      var _onChangeHandler = function _onChangeHandler(data) {
        var consent2 = (data === null || data === void 0 ? void 0 : data[config.productName]) || null;
        if (consent2 !== prevValue) {
          prevValue = consent2;
          cb(consent2);
        }
      };
      config.dataLayer.addChangeListener("consent", _onChangeHandler);
      return function () {
        config.dataLayer.removeChangeListener(_onChangeHandler);
      };
    };
    var createCheckConsentWrapper = function createCheckConsentWrapper(dataLayer, config) {
      return dataLayer.utils.checkConsent.createCheckConsentWrapper(config);
    };
    var itemsToNames = function itemsToNames(dataLayer, items, getNames) {
      var utils = dataLayer.utils.checkConsent;
      var masks = utils.itemsToMask(items);
      var keys = Object.keys(items).filter(function (key) {
        return !utils.isMask(key);
      });
      return getNames().filter(function (name) {
        return keys.includes(name) || utils.getByMask(name, masks);
      });
    };
    var createBaseConsentStorage = function createBaseConsentStorage(storage2, itemType, config) {
      var getConsent = createConsentWrapper(config);
      var checkProperty = createCheckConsentWrapper(config.dataLayer, {
        items: config.items,
        type: itemType,
        getConsent: getConsent
      });
      var _init = function _init() {
        var removeOnInit = config.checkConsentOnInit === void 0 ? config.enableAutoRemove : false;
        if (config.enableAutoRemove) {
          onDlChangeConsent(config, onChangeConsentMode);
        }
        if (removeOnInit) {
          onChangeConsentMode(getConsent());
        }
      };
      var onChangeConsentMode = function onChangeConsentMode(consent2) {
        var _a;
        (_a = checkProperty(itemsToNames(config.dataLayer, config.items, storage2.getNames), consent2)) === null || _a === void 0 ? void 0 : _a.forEach(function (item) {
          if (!item.allowed) {
            storage2.remove(item.name);
          } else if (item.data) {
            storage2.set(item.name, item.data);
          }
        });
      };
      var set = function set(name, value, options) {
        var _a;
        var consent2 = checkProperty(name);
        if (consent2 === null || consent2 === void 0 ? void 0 : consent2.allowed) {
          var newValue = (_a = consent2.data) !== null && _a !== void 0 ? _a : value;
          var args = options ? [name, newValue, options] : [name, newValue];
          storage2.set.apply(null, args);
        }
      };
      _init();
      return Object.assign({}, storage2, {
        set: set,
        check: checkProperty
      });
    };
    var createTTLChecker = function createTTLChecker(dataLayer) {
      var name = localStorage.__protected__.ttlName;
      var config = {
        dataLayer: dataLayer,
        productName: "DL"
      };
      var check = function () {
        var _a;
        var checker = createCheckConsentWrapper(config.dataLayer, {
          items: (_a = {}, _a[name] = "mandatory", _a),
          type: "localStorage",
          getConsent: createConsentWrapper(config)
        });
        return function () {
          var result = checker(name);
          return result.allowed && !result.data;
        };
      }();
      var allowed = true;
      var updateMemoValue = function updateMemoValue() {
        allowed = check();
        if (!allowed) {
          localStorage.remove(name);
        }
      };
      onDlChangeConsent(config, updateMemoValue);
      updateMemoValue();
      return function () {
        return allowed;
      };
    };
    var createLocalStorage = function createLocalStorage(config) {
      var checkTTL = createTTLChecker(config.dataLayer);
      var lsConsent = createBaseConsentStorage(localStorage, "localStorage", config);
      var set = function set(name, value, options) {
        var newOptions = options;
        if ((options === null || options === void 0 ? void 0 : options.expires) && !checkTTL()) {
          newOptions = Object.assign({}, options);
          delete newOptions.expires;
        }
        return lsConsent.set(name, value, newOptions);
      };
      return Object.assign({}, lsConsent, {
        set: set
      });
    };
    var ITEM_TYPE = "cookie";
    var createCookie = function createCookie(config) {
      var consentUtils = config.dataLayer.utils.checkConsent;
      var getConsent = createConsentWrapper(config);
      var cookieOptionsByCookie = {};
      var cookieOptionsByMasks = [];
      var items = {};
      var cookieOptions = {};
      (function () {
        Object.keys(config.items).forEach(function (itemName) {
          var option = config.items[itemName];
          if (option.type) {
            var _a = option,
              type = _a.type,
              domain = _a.domain,
              path = _a.path;
            var options = {};
            items[itemName] = type;
            if (domain) {
              options.domain = domain;
            }
            if (path) {
              options.path = path;
            }
            if (consentUtils.isMask(itemName)) {
              cookieOptionsByMasks.push(consentUtils.createMask(itemName, options));
            } else {
              cookieOptionsByCookie[itemName] = options;
            }
          } else {
            items[itemName] = option;
          }
        });
      })();
      var checkProperty = createCheckConsentWrapper(config.dataLayer, {
        items: items,
        type: ITEM_TYPE,
        getConsent: getConsent
      });
      var _init = function _init() {
        var removeOnInit = !!(config.checkConsentOnInit === void 0 ? config.enableAutoRemove : false);
        if (config.enableAutoRemove) {
          cookieOptions = config.enableAutoRemove;
          onDlChangeConsent(config, onChangeConsentMode);
        }
        if (removeOnInit) {
          onChangeConsentMode(getConsent());
        }
      };
      var onChangeConsentMode = function onChangeConsentMode(consent2) {
        var _a;
        (_a = checkProperty(itemsToNames(config.dataLayer, items, cookie.getNames), consent2)) === null || _a === void 0 ? void 0 : _a.forEach(function (item) {
          var getOptions = function getOptions() {
            return cookieOptionsByCookie[item.name] || consentUtils.getByMask(item.name, cookieOptionsByMasks) || cookieOptions;
          };
          if (!item.allowed) {
            cookie.remove(item.name, getOptions());
          } else if (item.data) {
            cookie.set(item.name, item.data, getOptions());
          }
        });
      };
      _init();
      var set = function set(name, value, options, limitValue) {
        var _a;
        var consent2 = checkProperty(name);
        if (consent2 === null || consent2 === void 0 ? void 0 : consent2.allowed) {
          cookie.set(name, (_a = consent2.data) !== null && _a !== void 0 ? _a : value, options, limitValue);
        }
      };
      return Object.assign({}, cookie, {
        check: checkProperty,
        set: set
      });
    };
    var createSessionStorage = function createSessionStorage(config) {
      return createBaseConsentStorage(sessionStorage, "sessionStorage", config);
    };
    var createBasePropertyWrapper = function createBasePropertyWrapper(itemType, config) {
      return {
        check: createCheckConsentWrapper(config.dataLayer, {
          items: config.items,
          type: itemType,
          getConsent: createConsentWrapper(config)
        })
      };
    };
    var createProperty = function createProperty(config) {
      return createBasePropertyWrapper("property", config);
    };
    var createEvent = function createEvent(config) {
      return createBasePropertyWrapper("event", config);
    };
    var consent = {
      createLocalStorage: createLocalStorage,
      createProperty: createProperty,
      createCookie: createCookie,
      createSessionStorage: createSessionStorage,
      createEvent: createEvent
    };

    var baseConfig = {
      cookieItems: {
        '*': 'optional',
        'pa_vid': 'mandatory',
        'pa_privacy': 'mandatory',
        'atuserid': 'essential'
      },
      eventItems: {
        'click.exit': 'mandatory',
        'click.navigation': 'mandatory',
        'click.download': 'mandatory',
        'click.action': 'mandatory',
        'page.display': 'mandatory'
      },
      propertyItems: {
        '*': 'optional',
        'connection_type': 'mandatory',
        'device_timestamp_utc': 'mandatory',
        'visitor_privacy_consent': 'mandatory',
        'visitor_privacy_mode': 'mandatory',
        'ch_ua': 'mandatory',
        'ch_ua_arch': 'mandatory',
        'ch_ua_bitness': 'mandatory',
        'ch_ua_full_version': 'mandatory',
        'ch_ua_full_version_list': 'mandatory',
        'ch_ua_mobile': 'mandatory',
        'ch_ua_model': 'mandatory',
        'ch_ua_platform': 'mandatory',
        'ch_ua_platform_version': 'mandatory',
        'app_crash': 'essential',
        'app_crash_class': 'essential',
        'app_crash_screen': 'essential',
        'app_version': 'essential',
        'browser': 'essential',
        'browser_cookie_acceptance': 'essential',
        'browser_group': 'essential',
        'browser_version': 'essential',
        'click': 'essential',
        'click_chapter1': 'essential',
        'click_chapter2': 'essential',
        'click_chapter3': 'essential',
        'click_full_name': 'essential',
        'connection_monitor': 'essential',
        'connection_organisation': 'essential',
        'cookie_creation_date': 'essential',
        'date': 'essential',
        'date_day': 'essential',
        'date_daynumber': 'essential',
        'date_month': 'essential',
        'date_monthnumber': 'essential',
        'date_week': 'essential',
        'date_year': 'essential',
        'date_yearofweek': 'essential',
        'device_brand': 'essential',
        'device_display_height': 'essential',
        'device_display_width': 'essential',
        'device_name': 'essential',
        'device_name_tech': 'essential',
        'device_screen_diagonal': 'essential',
        'device_screen_height': 'essential',
        'device_screen_width': 'essential',
        'device_type': 'essential',
        'event_collection_platform': 'essential',
        'event_collection_version': 'essential',
        'event_hour': 'essential',
        'event_id': 'essential',
        'event_minute': 'essential',
        'event_position': 'essential',
        'event_second': 'essential',
        'event_time': 'essential',
        'event_time_utc': 'essential',
        'event_url': 'essential',
        'event_url_domain': 'essential',
        'event_url_full': 'essential',
        'exclusion_cause': 'essential',
        'exclusion_type': 'essential',
        'geo_city': 'essential',
        'geo_continent': 'essential',
        'geo_country': 'essential',
        'geo_metro': 'essential',
        'geo_region': 'essential',
        'goal_type': 'essential',
        'hit_time_utc': 'essential',
        'os': 'essential',
        'os_group': 'essential',
        'os_version': 'essential',
        'os_version_name': 'essential',
        'page': 'essential',
        'page_chapter1': 'essential',
        'page_chapter2': 'essential',
        'page_chapter3': 'essential',
        'page_duration': 'essential',
        'page_full_name': 'essential',
        'page_position': 'essential',
        'page_title_html': 'essential',
        'page_url': 'essential',
        'pageview_id': 'essential',
        'previous_url': 'essential',
        'privacy_status': 'essential',
        'site': 'essential',
        'site_env': 'essential',
        'site_id': 'essential',
        'site_platform': 'essential',
        'src': 'essential',
        'src_detail': 'essential',
        'src_direct_access': 'essential',
        'src_organic': 'essential',
        'src_organic_detail': 'essential',
        'src_portal_domain': 'essential',
        'src_portal_site': 'essential',
        'src_portal_site_id': 'essential',
        'src_portal_url': 'essential',
        'src_referrer_site_domain': 'essential',
        'src_referrer_site_url': 'essential',
        'src_referrer_url': 'essential',
        'src_se': 'essential',
        'src_se_category': 'essential',
        'src_se_country': 'essential',
        'src_type': 'essential',
        'src_url': 'essential',
        'src_url_domain': 'essential',
        'src_webmail': 'essential'
      }
    };
    function _checkConsentItemsPA(type) {
      return window.pdl && window.pdl.consent_items && window.pdl.consent_items.PA && window.pdl.consent_items.PA[type];
    }
    function _getItems(config, itemType) {
      var consentItems = config;
      if (_checkConsentItemsPA(itemType)) {
        Object.assign(consentItems, window.pdl.consent_items.PA[itemType]);
      }
      return consentItems;
    }
    function getConsentItems() {
      return {
        propertyItems: _getItems(baseConfig.propertyItems, 'properties'),
        eventItems: _getItems(baseConfig.eventItems, 'events'),
        cookieItems: _getItems(baseConfig.cookieItems, 'storages')
      };
    }

    function DlPrivacy(pa) {
      var DEFAULT_MODE = 'opt-in';
      this.storageKeys = ['pa_vid', 'pa_user', 'pa_privacy', 'atuserid'];
      this.propertyConsent = {};
      this.eventConsent = {};
      this.storageConsent = {};
      this.consentItems = {
        propertyItems: {},
        eventItems: {},
        cookieItems: {}
      };
      this.modeMetadata = {
        'opt-in': {
          'visitor_privacy_consent': true,
          'visitor_privacy_mode': 'optin'
        },
        'opt-out': {
          'visitor_privacy_consent': false,
          'visitor_privacy_mode': pa.getConfiguration('enableExtendedOptout') === true ? 'extended-optout' : 'optout'
        },
        'essential': {
          'visitor_privacy_consent': false,
          'visitor_privacy_mode': 'exempt'
        },
        'custom': {
          'visitor_privacy_consent': false,
          'visitor_privacy_mode': 'custom'
        }
      };
      this.init = function () {
        this.consentItems = getConsentItems();
        this.propertyConsent = consent.createProperty({
          dataLayer: dataLayer,
          productName: 'PA',
          items: this.consentItems.propertyItems
        });
        this.eventConsent = consent.createEvent({
          dataLayer: dataLayer,
          productName: 'PA',
          items: this.consentItems.eventItems
        });
        this.storageConsent = consent.createCookie({
          dataLayer: dataLayer,
          productName: 'PA',
          items: this.consentItems.cookieItems
        });
        if (!pa.getConfiguration('isLegacyPrivacy')) {
          this.initMode();
          this.filterKeys();
        }
      };
      this.initMode = function () {
        if (dataLayer.get('consent') === null) {
          if (window.pdl.consent && window.pdl.consent.defaultPreset) {
            dataLayer.set('consent', 0);
          } else {
            this.setMode(DEFAULT_MODE);
          }
        }
      };
      /* public */
      this.setMode = function (mode) {
        dataLayer.set('consent', {
          PA: {
            mode: mode
          }
        });
        this.filterKeys();
      };
      this.setPresets = function (presets) {
        dataLayer.set('consent', presets);
        this.filterKeys();
      };
      this.getMode = function () {
        var consent = DEFAULT_MODE;
        var dlConsent = dataLayer.get('consent');
        if (dlConsent && dlConsent['PA'] && dlConsent['PA'].mode) {
          consent = dataLayer.get('consent')['PA'].mode;
        }
        return consent;
      };
      this.setCustomModeMetadata = function (consentValue, modeName) {
        this.modeMetadata['custom'].visitor_privacy_mode = modeName || 'custom';
        this.modeMetadata['custom'].visitor_privacy_consent = consentValue;
      };

      /* internal use */
      this.getModeMetadata = function () {
        return this.modeMetadata[this.getMode()] || {};
      };
      this.getConsentItems = function () {
        return this.consentItems;
      };
      this.isPropAllowed = function (propertyName) {
        if (pa.getConfiguration('enableExtendedOptout') === true && this.getMode() === 'opt-out') {
          return true;
        }
        return this.propertyConsent.check(propertyName).allowed;
      }.bind(this);
      this.isEventAllowed = function (eventName) {
        if (pa.getConfiguration('enableExtendedOptout') === true && this.getMode() === 'opt-out') {
          return true;
        }
        return this.eventConsent.check(eventName).allowed;
      }.bind(this);
      this.isKeyAllowed = function (storageKey) {
        return this.storageConsent.check(storageKey).allowed;
      }.bind(this);
      this.filterProps = function (properties) {
        for (var prop in properties) {
          if (Object.prototype.hasOwnProperty.call(properties, prop) && !this.isPropAllowed(prop)) {
            delete properties[prop];
          }
        }
      };
      this.filterEvents = function (events) {
        for (var i = events.length - 1; i >= 0; i--) {
          if (!this.isEventAllowed(events[i].name)) {
            events.splice(i, 1);
          }
        }
      };
      this.filterKeys = function () {
        var _iterator = _createForOfIteratorHelper(this.storageKeys),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var key = _step.value;
            if (!this.isKeyAllowed(key)) {
              pa._storage.deleteItem(key);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      };
      this.setItem = function (key, value, expiration, callback) {
        if (this.isKeyAllowed(key)) {
          pa._storage.setItem(key, value, expiration, callback);
        } else {
          callback && callback();
        }
      };
      this.dl = dataLayer;
      this.init();
    }

    function _functionCallFromString(root, target, params, context) {
      var _targetFunction = root[target[0]];
      if (typeof _targetFunction === 'undefined') {
        return true;
      } else if (target.length === 1) {
        _targetFunction.apply(context ? context : root, params);
        return false;
      } else {
        return _functionCallFromString(_targetFunction, target.slice(1), params, context);
      }
    }
    function preloadTagging(root, srcArray, isAsync, asyncArrayName) {
      var context = isAsync ? null : root;
      var _queue = srcArray || [];
      var _paTaggingActive = false;
      var _unknownTaggingActive = false;
      var _conflictDetected = false;
      if (_queue.length > 0) {
        for (var i = 0; i < _queue.length; i++) {
          _callFromStringWrapper(_queue[i], context);
        }
        _checkConflict();
      }
      if (isAsync) {
        var _push = window[asyncArrayName].push.bind(window[asyncArrayName]);
        window[asyncArrayName].push = function (params) {
          _callFromStringWrapper(params);
          _checkConflict();
          _push(params);
        };
      }
      function _callFromStringWrapper(_paramsArray, _context) {
        try {
          var tagType = _functionCallFromString(root, _paramsArray[0].split('.'), _paramsArray.slice(1), _context);
          if (tagType) {
            _unknownTaggingActive = true;
          } else {
            _paTaggingActive = true;
          }
        } catch (e) {
          _unknownTaggingActive = true;
        }
      }
      function _checkConflict() {
        if (_unknownTaggingActive && _paTaggingActive && !_conflictDetected) {
          console.error("Piano Analytics SDK - window.".concat(asyncArrayName, " is used for Piano Analytics integration and somewhere else. Please check \"queueVarName\" configuration if needed."));
          _conflictDetected = true;
        }
      }
    }

    function AtPrivacy(pa) {
      var config = pa.getConfiguration('privacy');
      this.currentMode = '';
      this.modes = config.modes;
      this._storageKeys = Object.assign(config.legacyKeys, config.storageKeys);
      this.init = function () {
        if (pa.getConfiguration('isLegacyPrivacy')) {
          {
            window._pac = window._pac || {
              privacy: []
            };
            preloadTagging(this, window._pac.privacy);
          }
          pa._storage.getItem(config.storageKey, function (storedMode) {
            this.setMode(storedMode && this.modes[storedMode] ? storedMode : pa.getConfiguration('privacyDefaultMode'));
          }.bind(this));
        }
      };
      this.setMode = function (mode) {
        if (mode === this.currentMode || !this.modes[mode]) {
          return;
        }
        this.currentMode = mode;
        pa._storage.getItem(config.storageKey, function (storedMode) {
          if (mode === 'optout' || mode === 'no-consent' || mode === 'no-storage') {
            pa.setConfiguration('visitorId', this.modes[mode].visitorId);
          } else if (pa.getConfiguration('visitorId') === 'OPT-OUT' || pa.getConfiguration('visitorId') === 'no-consent' || pa.getConfiguration('visitorId') === 'no-storage') {
            pa.cfg.deleteProperty('visitorId');
          }
          this.filterProps(pa._properties);
          this.filterKeys();
          if (storedMode !== mode) {
            var expirationDate = new Date();
            expirationDate.setTime(expirationDate.getTime() + pa.getConfiguration('storageLifetimePrivacy') * 24 * 60 * 60 * 1000);
            this.setItem(config.storageKey, mode, expirationDate);
          }
        }.bind(this));
      };
      this.createMode = function (modeName, consentValue) {
        if (!this.modes[modeName]) {
          var newMode = cloneObject(this.modes['exempt']);
          newMode.name = modeName;
          newMode.properties.include['visitor_privacy_mode'] = modeName;
          newMode.properties.include['visitor_privacy_consent'] = consentValue;
          this.modes[modeName] = newMode;
        }
      };
      this.getMode = function () {
        return this.currentMode;
      };
      var _addElements = function (properties, modes, events, isBlacklisting, isForStorage, isForEvent) {
        var _modes = ['*'];
        var _events = ['*'];
        var propertyType = 'properties';
        var listType = isBlacklisting ? 'forbidden' : 'allowed';
        if (modes) {
          _modes = typeof modes === 'string' ? [modes] : modes;
        }
        if (events) {
          _events = typeof events === 'string' ? [events] : events;
        }
        if (isForStorage) {
          propertyType = 'storage';
        }
        if (isForEvent) {
          propertyType = 'events';
        }
        for (var i = 0; i < _modes.length; i++) {
          if (typeof this.modes[_modes[i]] === 'undefined') {
            continue;
          }
          var _mode = this.modes[_modes[i]];
          for (var j = 0; j < _events.length; j++) {
            var itemList = _mode[propertyType][listType];
            if (typeof itemList[_events[j]] === 'undefined' && !isForStorage && !isForEvent) {
              itemList[_events[j]] = {};
            }
            for (var k = 0; k < properties.length; k++) {
              if (isForStorage || isForEvent) {
                itemList[properties[k]] = true;
              } else {
                itemList[_events[j]][properties[k]] = true;
              }
            }
          }
        }
      }.bind(this);
      this.include = {
        properties: function properties(propsArray, modes, events) {
          _addElements(propsArray, modes, events);
        },
        property: function property(prop, modes, events) {
          _addElements([prop], modes, events);
        },
        storageKeys: function storageKeys(keysArray, modes) {
          _addElements(keysArray, modes, null, false, true);
        },
        storageKey: function storageKey(key, modes) {
          _addElements([key], modes, null, false, true);
        },
        events: function events(eventsNames, modes) {
          _addElements(eventsNames, modes, null, false, false, true);
        },
        event: function event(eventName, modes) {
          _addElements([eventName], modes, null, false, false, true);
        }
      };
      this.exclude = {
        properties: function properties(propsArray, modes, events) {
          _addElements(propsArray, modes, events, true);
        },
        property: function property(prop, modes, events) {
          _addElements([prop], modes, events, true);
        },
        storageKeys: function storageKeys(keysArray, modes) {
          _addElements(keysArray, modes, null, true, true);
        },
        storageKey: function storageKey(key, modes) {
          _addElements([key], modes, null, true, true);
        },
        events: function events(eventNames, modes) {
          _addElements(eventNames, modes, null, true, false, true);
        },
        event: function event(eventName, modes) {
          _addElements([eventName], modes, null, true, false, true);
        }
      };

      /* Events Authorizations methods */
      var _modeHasEvent = function _modeHasEvent(modeEvents, event) {
        if (modeEvents[event]) {
          return true;
        } else {
          for (var evt in modeEvents) {
            if (Object.prototype.hasOwnProperty.call(modeEvents, evt)) {
              if (evt.charAt(evt.length - 1) === '*' && event.indexOf(evt.substring(0, evt.length - 1)) === 0) {
                return true;
              }
            }
          }
        }
        return false;
      };
      var _checkModesForEvent = function _checkModesForEvent(typeList, modes, currentMode, event) {
        var isKeyInCurrentMode = _modeHasEvent(modes[currentMode].events[typeList], event);
        var isKeyInWildcardMode = _modeHasEvent(modes['*'].events[typeList], event);
        return isKeyInCurrentMode || isKeyInWildcardMode;
      };
      this.isEventAllowed = function (event) {
        var isEventBlacklisted = _checkModesForEvent('forbidden', this.modes, this.currentMode, event);
        var isEventWhitelisted = _checkModesForEvent('allowed', this.modes, this.currentMode, event);
        return isEventBlacklisted ? false : isEventWhitelisted;
      };

      /* Properties Authorizations methods */
      var _checkPropertyWithEvent = function _checkPropertyWithEvent(mode, typeList, property, event) {
        var modeEventList = mode[typeList];
        if (modeEventList[event] && modeEventList[event][property] || modeEventList['*'][property]) {
          return true;
        }
        for (var evt in modeEventList) {
          if (Object.prototype.hasOwnProperty.call(modeEventList, evt) && evt.charAt(evt.length - 1) === '*' && event.indexOf(evt.substring(0, evt.length - 1)) === 0 || evt === event) {
            for (var prop in modeEventList[evt]) {
              if (Object.prototype.hasOwnProperty.call(modeEventList[evt], prop)) {
                if (prop.charAt(prop.length - 1) === '*' && property.indexOf(prop.substring(0, prop.length - 1)) === 0 || property === prop) {
                  return true;
                }
              }
            }
          }
        }
        return false;
      };
      var _checkPropertyWithoutEvent = function _checkPropertyWithoutEvent(mode, typeList, property) {
        if (typeList === 'forbidden') {
          if (mode[typeList]['*'][property]) {
            return true;
          }
        }
        for (var evt in mode[typeList]) {
          if (Object.prototype.hasOwnProperty.call(mode[typeList], evt)) {
            if (mode[typeList][evt][property]) {
              return true;
            } else {
              for (var prop in mode[typeList][evt]) {
                if (prop.charAt(prop.length - 1) === '*' && property.indexOf(prop.substring(0, prop.length - 1)) === 0) {
                  return true;
                }
              }
            }
          }
        }
        return false;
      };
      var _checkModesListForProperty = function _checkModesListForProperty(typeList, modes, currentMode, property, event) {
        var isPropertyInCurrentMode;
        var isPropertyInWildcardMode;
        if (event) {
          isPropertyInCurrentMode = _checkPropertyWithEvent(modes[currentMode].properties, typeList, property, event);
          isPropertyInWildcardMode = _checkPropertyWithEvent(modes['*'].properties, typeList, property, event);
        } else {
          isPropertyInCurrentMode = _checkPropertyWithoutEvent(modes[currentMode].properties, typeList, property);
          isPropertyInWildcardMode = _checkPropertyWithoutEvent(modes['*'].properties, typeList, property);
        }
        return isPropertyInCurrentMode || isPropertyInWildcardMode;
      };
      this.isPropAllowed = function (propertyName, event) {
        var isPropertyBlacklisted = _checkModesListForProperty('forbidden', this.modes, this.currentMode, propertyName, event);
        var isPropertyWhitelisted = _checkModesListForProperty('allowed', this.modes, this.currentMode, propertyName, event);
        return isPropertyBlacklisted ? false : isPropertyWhitelisted;
      };

      /* Storage keys Authorizations methods */
      var _modeListHasKey = function _modeListHasKey(mode, typeList, key) {
        var modeListProperties = mode[typeList];
        if (modeListProperties[key]) {
          return true;
        }
        for (var prop in modeListProperties) {
          if (Object.prototype.hasOwnProperty.call(modeListProperties, prop)) {
            if (prop.charAt(prop.length - 1) === '*' && key.indexOf(prop.substring(0, prop.length - 1)) === 0) {
              return true;
            }
          }
        }
        return false;
      };
      var _checkModesListForKey = function _checkModesListForKey(typeList, modes, currentMode, key) {
        var isKeyInCurrentMode = _modeListHasKey(modes[currentMode].storage, typeList, key);
        var isKeyInWildcardMode = _modeListHasKey(modes['*'].storage, typeList, key);
        return isKeyInCurrentMode || isKeyInWildcardMode;
      };
      this.isKeyAllowed = function (key) {
        var isKeyBlacklisted = _checkModesListForKey('forbidden', this.modes, this.currentMode, key);
        var isKeyWhitelisted = _checkModesListForKey('allowed', this.modes, this.currentMode, key);
        return isKeyBlacklisted ? false : isKeyWhitelisted;
      };

      /* storage global method to use */
      this.setItem = function (key, value, expiration, callback) {
        if (this.isKeyAllowed(key)) {
          pa._storage.setItem(key, value, expiration, callback);
        } else {
          callback && callback();
        }
      };

      /* filters */
      this.filterProps = function (properties, event) {
        for (var prop in properties) {
          if (Object.prototype.hasOwnProperty.call(properties, prop) && !this.isPropAllowed(prop, event ? event : undefined)) {
            delete properties[prop];
          }
        }
      };
      this.filterKeys = function () {
        for (var key in this._storageKeys) {
          if (Object.prototype.hasOwnProperty.call(this._storageKeys, key) && !this.isKeyAllowed(key)) {
            pa._storage.deleteItem(key);
          }
        }
      };
      this.filterEvents = function (events) {
        for (var i = events.length - 1; i >= 0; i--) {
          if (!this.isEventAllowed(events[i].name)) {
            events.splice(i, 1);
          }
        }
      };
      this.getModeMetadata = function () {
        return this.modes[this.getMode()].properties.include;
      };
      this.init();
    }

    function Privacy(pa) {
      this.modeEnum = {
        OPTOUT: function () {
          return pa.getConfiguration('isLegacyPrivacy') ? 'optout' : 'opt-out';
        }()
      };
      this.call = function (method) {
        var privacy = pa.getConfiguration('isLegacyPrivacy') ? 'privacy' : 'consent';
        for (var _len = arguments.length, paramsArray = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          paramsArray[_key - 1] = arguments[_key];
        }
        return pa[privacy][method].apply(pa[privacy], paramsArray);
      };
    }

    function User(pa) {
      var storageUser = pa.getConfiguration('storageUser');
      this.setUser = function (id, category, enableStorage) {
        var _user = {
          id: id,
          category: category
        };
        pa.setProperties({
          'user_id': id,
          'user_category': category,
          'user_recognition': false
        }, {
          persistent: true
        });
        if (enableStorage !== false) {
          var expirationDate = new Date();
          expirationDate.setTime(expirationDate.getTime() + pa.getConfiguration('storageLifetimeUser') * 24 * 60 * 60 * 1000);
          pa._privacy.call('setItem', storageUser, _user, expirationDate);
        }
      };
      this.getUser = function (callback) {
        pa._storage.getItem(storageUser, function (data) {
          var userData = data;
          if (!data && pa._properties['user_id']) {
            userData = {
              id: pa._properties['user_id'].value,
              category: pa._properties['user_category'].value
            };
          }
          callback && callback(userData);
        });
      };
      this.deleteUser = function (callback) {
        pa.deleteProperty('user_id');
        pa.deleteProperty('user_category');
        pa.deleteProperty('user_recognition');
        pa._storage.deleteItem(storageUser, function () {
          callback && callback();
        });
      };
    }

    var AVInsights = function AVInsights(pa) {
      var _config = {
        minHeartbeat: pa.getConfiguration('minHeartbeat'),
        minBufferingHeartbeat: pa.getConfiguration('minBufferingHeartbeat')
      };
      var ATVALUE = '_ATVALUE';
      var ATPREFIX = '_ATPREFIX';
      var Utility = function Utility() {
        var _thisUtil = this;
        _thisUtil.debugError = {
          trigger: 'AvInsights:Media:setContentValues:Error',
          level: 'ERROR',
          messageObject: 'Not an object'
        };
        _thisUtil.processHeartbeatValue = function (val, min) {
          var _val = parseInt(val, 10);
          if (_val) {
            return Math.max(_val, min);
          }
          return 0;
        };
        _thisUtil.value2Number = function (val) {
          var validNumber = 0;
          if (!isNaN(Number(val))) {
            validNumber = Number(val);
          }
          return Math.max(validNumber, 0);
        };
      };
      function splitProtocolAndKey(key, toLower) {
        var _prefix, _key;
        if (key.length < 2 || key[1] !== ':') {
          _prefix = '';
          _key = key;
        } else if (key.length < 4 || key[3] !== ':') {
          _prefix = key.substring(0, 1);
          _key = key.substring(2, key.length);
        } else {
          _prefix = key.substring(0, 3);
          _key = key.substring(4, key.length);
        }
        if (toLower) {
          _prefix = _prefix.toLowerCase();
          _key = _key.toLowerCase();
        }
        return {
          'prefix': _prefix,
          'key': _key
        };
      }
      function isObject(contextualObject) {
        return contextualObject !== null && _typeof(contextualObject) === 'object' && !(contextualObject instanceof Array);
      }
      function object2Flatten(source, parentPath, destination, parentPrefix, toLower) {
        var splittedObject = {};
        var prefix = '';
        var path = '';
        var levels = [];
        var newPath = '';
        var i = 0;
        for (var sourceKey in source) {
          if (Object.prototype.hasOwnProperty.call(source, sourceKey)) {
            splittedObject = splitProtocolAndKey(sourceKey, toLower);
            prefix = splittedObject.prefix || parentPrefix || '';
            path = (parentPath ? parentPath + '_' : '') + splittedObject.key;
            if (isObject(source[sourceKey])) {
              object2Flatten(source[sourceKey], path, destination, prefix, toLower);
            } else {
              levels = path.split('_');
              newPath = '';
              for (i = 0; i < levels.length; i++) {
                splittedObject = splitProtocolAndKey(levels[i], toLower);
                prefix = splittedObject.prefix || prefix;
                newPath += splittedObject.key + (i < levels.length - 1 ? '_' : '');
              }
              path = newPath || path;
              destination[path] = destination[path] || {};
              destination[path][ATVALUE] = source[sourceKey];
              destination[path][ATPREFIX] = prefix;
            }
          }
        }
      }
      function addEvtListener(obj, event, callback) {
        if (obj['addEventListener']) {
          obj['addEventListener'](event, callback, false);
        } else if (obj['attachEvent']) {
          obj['attachEvent']('on' + event, callback);
        }
      }
      var Media = function Media(heartbeatValue, bufferHeartbeatValue, sessionId) {
        var _thisMedia = this;
        var _utility = new Utility();
        var _context = null;
        var _timers = null;
        var _properties = null;
        var _initContext = function _initContext() {
          _context = {
            previousCursorPosition: 0,
            // Position of the cursor of the previous event
            currentCursorPosition: 0,
            // Position of the cursor of the current event
            eventDuration: 0,
            // Event duration
            playbackSpeed: 1,
            // Playback speed
            previousEvent: '',
            isPlaybackActivated: false,
            isPlaying: false,
            sessionId: '',
            delayConfiguration: [],
            // Delay structure
            delayConfigurationBackup: [],
            // Delay structure backup
            delayBufferingConfiguration: [],
            // Delay buffering structure
            delayBufferingConfigurationBackup: [] // Delay buffering structure backup
          };
        };
        var _initSessionID = function _initSessionID() {
          _context.sessionId = sessionId || uuid.v4();
        };
        var _resetSession = function _resetSession() {
          _context.previousCursorPosition = 0;
          _context.currentCursorPosition = 0;
          _context.eventDuration = 0;
          _context.previousEvent = '';
          _context.sessionId = uuid.v4();
        };
        var _restoreDelayConfiguration = function _restoreDelayConfiguration(buffering) {
          if (buffering) {
            _context.delayBufferingConfiguration = cloneObject(_context.delayBufferingConfigurationBackup);
          } else {
            _context.delayConfiguration = cloneObject(_context.delayConfigurationBackup);
          }
        };
        var _saveDelayConfiguration = function _saveDelayConfiguration(buffering) {
          if (buffering) {
            _context.delayBufferingConfigurationBackup = cloneObject(_context.delayBufferingConfiguration);
          } else {
            _context.delayConfigurationBackup = cloneObject(_context.delayConfiguration);
          }
        };
        var _resetDelayConfiguration = function _resetDelayConfiguration(buffering) {
          if (buffering) {
            _context.delayBufferingConfiguration = [];
            _context.delayBufferingConfigurationBackup = [];
          } else {
            _context.delayConfiguration = [];
            _context.delayConfigurationBackup = [];
          }
        };
        var _sortDelayConfiguration = function _sortDelayConfiguration(buffering) {
          var delayConfig = buffering ? _context.delayBufferingConfiguration : _context.delayConfiguration;
          delayConfig.sort(function (a, b) {
            if (a.delay < b.delay) {
              return -1;
            }
            if (a.delay > b.delay) {
              return 1;
            }
            return 0;
          });
        };
        var _updateDelayConfiguration = function _updateDelayConfiguration(buffering) {
          var nextDelay;
          var delayConfig = buffering ? _context.delayBufferingConfiguration : _context.delayConfiguration;
          if (typeof delayConfig[1] !== 'undefined') {
            nextDelay = delayConfig[1].delay;
          }
          if (typeof nextDelay === 'undefined') {
            delayConfig[0].number = 1;
          } else if (delayConfig[0].number > 0) {
            delayConfig[0].number--;
          } else if (typeof nextDelay === 'number') {
            delayConfig[0].number = Math.floor((nextDelay - delayConfig[0].delay) * 60 / delayConfig[0].refresh) - 1;
          }
        };
        var _initHeartbeat = function _initHeartbeat(buffering, heartbeat) {
          if (heartbeat) {
            _resetDelayConfiguration(buffering);
            var _heartbeatObject = {};
            if (isObject(heartbeat)) {
              _heartbeatObject = heartbeat;
            } else if (!isNaN(heartbeat)) {
              _heartbeatObject[0] = heartbeat;
            } else {
              _heartbeatObject = JSON.parse(heartbeat);
            }
            for (var key in _heartbeatObject) {
              if (Object.prototype.hasOwnProperty.call(_heartbeatObject, key)) {
                if (buffering) {
                  _context.delayBufferingConfiguration.push({
                    delay: _utility.processHeartbeatValue(key, 0),
                    number: 0,
                    timeout: -1,
                    refresh: _utility.processHeartbeatValue(_heartbeatObject[key], _config.minBufferingHeartbeat)
                  });
                } else {
                  _context.delayConfiguration.push({
                    delay: _utility.processHeartbeatValue(key, 0),
                    number: 0,
                    timeout: -1,
                    refresh: _utility.processHeartbeatValue(_heartbeatObject[key], _config.minHeartbeat)
                  });
                }
              }
            }
            _sortDelayConfiguration(buffering);
            _saveDelayConfiguration(buffering);
          }
        };
        var _initHeartbeats = function _initHeartbeats() {
          _initHeartbeat(false, heartbeatValue);
          _initHeartbeat(true, bufferHeartbeatValue);
        };
        var _initProperties = function _initProperties() {
          _properties = {};
        };
        var _addOptionalProperties = function _addOptionalProperties(object2Send) {
          object2Send.av_previous_position = {};
          object2Send.av_previous_position[ATVALUE] = _context.previousCursorPosition;
          object2Send.av_previous_position[ATPREFIX] = '';
          object2Send.av_position = {};
          object2Send.av_position[ATVALUE] = _context.currentCursorPosition;
          object2Send.av_position[ATPREFIX] = '';
          object2Send.av_duration = {};
          object2Send.av_duration[ATVALUE] = _context.eventDuration;
          object2Send.av_duration[ATPREFIX] = '';
          object2Send.av_previous_event = {};
          object2Send.av_previous_event[ATVALUE] = _context.previousEvent;
          object2Send.av_previous_event[ATPREFIX] = '';
        };
        var _getFinalObject = function _getFinalObject(object2Send) {
          var content = {};
          var newKey;
          for (var key in object2Send) {
            if (Object.prototype.hasOwnProperty.call(object2Send, key)) {
              if (!Object.prototype.hasOwnProperty.call(object2Send[key], ATVALUE)) {
                content[key] = object2Send[key];
              } else {
                newKey = object2Send[key][ATPREFIX] ? "".concat(object2Send[key][ATPREFIX], ":").concat(key) : key;
                content[newKey] = object2Send[key][ATVALUE];
              }
            }
          }
          return content;
        };
        var _sendEvent = function _sendEvent(action, withOptions, eventOptions, extraProps) {
          // Process media properties
          var object2Send = cloneObject(_properties);

          // Adding session ID
          object2Send.av_session_id = {};
          object2Send.av_session_id[ATVALUE] = _context.sessionId;
          object2Send.av_session_id[ATPREFIX] = '';

          // Adding optional properties
          if (withOptions) {
            _addOptionalProperties(object2Send);
            // Update this contextual value only for events with options
            _context.previousEvent = action;
          }

          // Adding extra properties
          if (isObject(extraProps)) {
            object2Flatten(extraProps, null, object2Send, null, true);
          }

          // Getting final object
          var finalObject = _getFinalObject(object2Send);

          // Sending hit
          pa.sendEvent(action, finalObject, eventOptions);
        };
        var Timers = function Timers() {
          var _thisTimers = this;
          var _baseTime = 0; // Base time UTC
          var _totalEventDuration = 0; // Cumulative duration of events

          _thisTimers.getEventDuration = function () {
            var eventDuration = new Date().getTime() - _baseTime - _totalEventDuration;
            _totalEventDuration += eventDuration;
            return eventDuration;
          };
          _thisTimers.initBaseTime = function () {
            if (_baseTime === 0) {
              _baseTime = new Date().getTime();
            }
          };
          _thisTimers.resetProperties = function () {
            _baseTime = 0;
            _totalEventDuration = 0;
          };
          _thisTimers.initHeartbeatTimer = function (callback, buffering) {
            var delayConfig = buffering ? _context.delayBufferingConfiguration : _context.delayConfiguration;
            if (delayConfig.length > 0) {
              _updateDelayConfiguration(buffering);
              clearTimeout(delayConfig[0].timeout);
              delayConfig[0].timeout = setTimeout(function () {
                if (delayConfig[0].number === 0) {
                  delayConfig.splice(0, 1);
                }
                callback && callback();
              }, delayConfig[0].refresh * 1e3);
            }
          };
          _thisTimers.stopHeartbeatTimer = function (buffering) {
            var delayConfig = buffering ? _context.delayBufferingConfiguration : _context.delayConfiguration;
            for (var i = 0; i < delayConfig.length; i++) {
              clearTimeout(delayConfig[i].timeout);
              delayConfig[i].timeout = -1;
            }
          };
        };
        var _initTimers = function _initTimers() {
          _timers = new Timers();
          {
            addEvtListener(window, 'pagehide', function () {
              _timers.stopHeartbeatTimer(false);
              _timers.stopHeartbeatTimer(true);
            });
          }
        };
        _thisMedia.set = function (propKey, propValue) {
          var splittedObject = splitProtocolAndKey(propKey, true);
          _properties[splittedObject.key] = _properties[splittedObject.key] || {};
          _properties[splittedObject.key][ATVALUE] = propValue;
          _properties[splittedObject.key][ATPREFIX] = splittedObject.prefix;
        };
        _thisMedia.get = function (propKey) {
          var property = null;
          var splittedObject = splitProtocolAndKey(propKey, true);
          if (typeof _properties[splittedObject.key] !== 'undefined') {
            property = _properties[splittedObject.key][ATVALUE];
          }
          return property;
        };
        _thisMedia.del = function (propKey) {
          var splittedObject = splitProtocolAndKey(propKey, true);
          if (typeof _properties[splittedObject.key] !== 'undefined') {
            delete _properties[splittedObject.key];
          }
        };
        _thisMedia.setProps = function (properties) {
          if (isObject(properties)) {
            object2Flatten(properties, null, _properties, null, true);
          }
        };
        _thisMedia.getProps = function () {
          var properties = null;
          for (var key in _properties) {
            if (Object.prototype.hasOwnProperty.call(_properties, key)) {
              properties = properties || {};
              properties[key] = _properties[key][ATVALUE];
            }
          }
          return properties;
        };
        _thisMedia.delProps = function () {
          _properties = {};
        };
        var _heartbeat = function _heartbeat(autoPosition, autoTimer, cursorPosition, eventOptions, extraProps) {
          _timers.initBaseTime();
          _context.eventDuration = _timers.getEventDuration(); // duration since the last event (usually heartbeat)
          _context.previousCursorPosition = _context.currentCursorPosition; // event-1 Cursor Position  (usually HB)
          // event Cursor Position
          _context.currentCursorPosition = autoPosition ? _context.previousCursorPosition + Math.floor(_context.playbackSpeed * _context.eventDuration) : cursorPosition;
          autoTimer && _timers.initHeartbeatTimer(function () {
            _heartbeat(true, true);
          }, false);
          _sendEvent('av.heartbeat', true, eventOptions, extraProps);
        };
        var _bufferHeartbeat = function _bufferHeartbeat(autoTimer, eventOptions, extraProps) {
          _timers.initBaseTime();
          _context.eventDuration = _timers.getEventDuration(); // duration since the last event

          autoTimer && _timers.initHeartbeatTimer(function () {
            _bufferHeartbeat(true);
          }, true);
          _sendEvent('av.buffer.heartbeat', true, eventOptions, extraProps);
        };
        var _rebufferHeartbeat = function _rebufferHeartbeat(autoTimer, eventOptions, extraProps) {
          _timers.initBaseTime();
          _context.eventDuration = _timers.getEventDuration(); // duration since Rebuffer start or since the last rebuffer heartbeat
          _context.previousCursorPosition = _context.currentCursorPosition; // event-1 Cursor Position (rebuffer start or rebuffer HB)

          autoTimer && _timers.initHeartbeatTimer(function () {
            _rebufferHeartbeat(true);
          }, true);
          _sendEvent('av.rebuffer.heartbeat', true, eventOptions, extraProps);
        };
        _thisMedia.setPlaybackSpeed = function (playbackSpeed) {
          var pbSpeed = _utility.value2Number(playbackSpeed) || _context.playbackSpeed;
          if (pbSpeed !== _context.playbackSpeed) {
            _timers.stopHeartbeatTimer(false);
            if (_context.isPlaying) {
              _heartbeat(true, false);
              _timers.initHeartbeatTimer(function () {
                _heartbeat(true, true);
              }, false);
            }
            _context.playbackSpeed = pbSpeed;
          }
        };
        _thisMedia.getSessionID = function () {
          return _context.sessionId;
        };
        _thisMedia.track = function (action, options, eventOptions, extraProps) {
          var opt = options || {};
          switch (action) {
            case 'av.heartbeat':
              _thisMedia.heartbeat(opt.av_position, eventOptions, extraProps);
              break;
            case 'av.buffer.heartbeat':
              _thisMedia.bufferHeartbeat(eventOptions, extraProps);
              break;
            case 'av.rebuffer.heartbeat':
              _thisMedia.rebufferHeartbeat(eventOptions, extraProps);
              break;
            case 'av.play':
              _thisMedia.play(opt.av_position, eventOptions, extraProps);
              break;
            case 'av.buffer.start':
              _thisMedia.bufferStart(opt.av_position, eventOptions, extraProps);
              break;
            case 'av.start':
              _thisMedia.playbackStart(opt.av_position, eventOptions, extraProps);
              break;
            case 'av.resume':
              _thisMedia.playbackResumed(opt.av_position, eventOptions, extraProps);
              break;
            case 'av.pause':
              _thisMedia.playbackPaused(opt.av_position, eventOptions, extraProps);
              break;
            case 'av.stop':
              _thisMedia.playbackStopped(opt.av_position, eventOptions, extraProps);
              break;
            case 'av.backward':
              _thisMedia.seekBackward(opt.av_previous_position, opt.av_position, eventOptions, extraProps);
              break;
            case 'av.forward':
              _thisMedia.seekForward(opt.av_previous_position, opt.av_position, eventOptions, extraProps);
              break;
            case 'av.seek.start':
              _thisMedia.seekStart(opt.av_previous_position, eventOptions, extraProps);
              break;
            case 'av.error':
              _thisMedia.error(opt.av_player_error, eventOptions, extraProps);
              break;
            default:
              _sendEvent(action, false, eventOptions, extraProps);
          }
        };
        _thisMedia.heartbeat = function (cursorPosition, eventOptions, extraProps) {
          var autoPosition = true;
          var position;
          if (typeof cursorPosition !== 'undefined' && cursorPosition !== null && cursorPosition >= 0) {
            autoPosition = false;
            position = _utility.value2Number(cursorPosition);
          }
          _heartbeat(autoPosition, false, position, eventOptions, extraProps);
        };
        _thisMedia.bufferHeartbeat = function (eventOptions, extraProps) {
          _bufferHeartbeat(false, eventOptions, extraProps);
        };
        _thisMedia.rebufferHeartbeat = function (eventOptions, extraProps) {
          _rebufferHeartbeat(false, eventOptions, extraProps);
        };
        _thisMedia.play = function (cursorPosition, eventOptions, extraProps) {
          _timers.initBaseTime();
          var processedPosition = _utility.value2Number(cursorPosition);
          _context.eventDuration = 0; // always 0
          _context.previousCursorPosition = processedPosition; // event Cursor Position
          _context.currentCursorPosition = processedPosition; // event Cursor Position
          _context.isPlaying = false;
          _context.isPlaybackActivated = false;
          _timers.stopHeartbeatTimer(false);
          _timers.stopHeartbeatTimer(true);
          _sendEvent('av.play', true, eventOptions, extraProps);
        };
        _thisMedia.bufferStart = function (cursorPosition, eventOptions, extraProps) {
          _timers.initBaseTime();
          var processedPosition = _utility.value2Number(cursorPosition);
          _context.eventDuration = _timers.getEventDuration(); // duration since play
          _context.previousCursorPosition = _context.currentCursorPosition; // event -1 Cursor Position (usually HB)
          _context.currentCursorPosition = processedPosition; // event Cursor Position

          _timers.stopHeartbeatTimer(false);
          _timers.stopHeartbeatTimer(true);
          if (_context.isPlaybackActivated) {
            _timers.initHeartbeatTimer(function () {
              _rebufferHeartbeat(true);
            }, true);
            _sendEvent('av.rebuffer.start', true, eventOptions, extraProps);
          } else {
            _timers.initHeartbeatTimer(function () {
              _bufferHeartbeat(true);
            }, true);
            _sendEvent('av.buffer.start', true, eventOptions, extraProps);
          }
        };
        _thisMedia.playbackStart = function (cursorPosition, eventOptions, extraProps) {
          _timers.initBaseTime();
          var processedPosition = _utility.value2Number(cursorPosition);
          _context.eventDuration = _timers.getEventDuration(); // duration since play
          _context.previousCursorPosition = processedPosition; // event Cursor Position
          _context.currentCursorPosition = processedPosition; // event Cursor Position
          _context.isPlaying = true;
          _context.isPlaybackActivated = true;
          _timers.stopHeartbeatTimer(false);
          _timers.stopHeartbeatTimer(true);
          _timers.initHeartbeatTimer(function () {
            _heartbeat(true, true);
          }, false);
          _sendEvent('av.start', true, eventOptions, extraProps);
        };
        _thisMedia.playbackResumed = function (cursorPosition, eventOptions, extraProps) {
          _timers.initBaseTime();
          var processedPosition = _utility.value2Number(cursorPosition);
          _context.eventDuration = _timers.getEventDuration(); // duration since play
          _context.previousCursorPosition = _context.currentCursorPosition; // event-1 Cursor Position  (usually HB)
          _context.currentCursorPosition = processedPosition; // event Cursor Position
          _context.isPlaying = true;
          _context.isPlaybackActivated = true;
          _timers.stopHeartbeatTimer(false);
          _timers.stopHeartbeatTimer(true);
          _timers.initHeartbeatTimer(function () {
            _heartbeat(true, true);
          }, false);
          _sendEvent('av.resume', true, eventOptions, extraProps);
        };
        _thisMedia.playbackPaused = function (cursorPosition, eventOptions, extraProps) {
          _timers.initBaseTime();
          var processedPosition = _utility.value2Number(cursorPosition);
          _context.eventDuration = _timers.getEventDuration(); // duration since the last event (usually heartbeat)
          _context.previousCursorPosition = _context.currentCursorPosition; // event-1 Cursor Position  (usually HB)
          _context.currentCursorPosition = processedPosition; // event Cursor Position
          _context.isPlaying = false;
          _context.isPlaybackActivated = true;
          _timers.stopHeartbeatTimer(false);
          _timers.stopHeartbeatTimer(true);
          _sendEvent('av.pause', true, eventOptions, extraProps);
        };
        _thisMedia.playbackStopped = function (cursorPosition, eventOptions, extraProps) {
          _timers.initBaseTime();
          var processedPosition = _utility.value2Number(cursorPosition);
          _context.eventDuration = _timers.getEventDuration(); // duration since the last event (usually heartbeat)
          _context.previousCursorPosition = _context.currentCursorPosition; // event-1 Cursor Position  (usually HB)
          _context.currentCursorPosition = processedPosition; // event Cursor Position
          _context.isPlaying = false;
          _context.isPlaybackActivated = false;
          _timers.stopHeartbeatTimer(false);
          _timers.stopHeartbeatTimer(true);
          _timers.resetProperties();
          _restoreDelayConfiguration(false);
          _restoreDelayConfiguration(true);
          _sendEvent('av.stop', true, eventOptions, extraProps);
          _resetSession();
        };
        _thisMedia.seek = function (oldCursorPosition, newCursorPosition, eventOptions, extraProps) {
          var processedOldPosition = _utility.value2Number(oldCursorPosition);
          var processedNewPosition = _utility.value2Number(newCursorPosition);
          if (processedOldPosition > processedNewPosition) {
            _thisMedia.seekBackward(processedOldPosition, processedNewPosition, eventOptions, extraProps);
          } else {
            _thisMedia.seekForward(processedOldPosition, processedNewPosition, eventOptions, extraProps);
          }
        };
        _thisMedia.seekBackward = function (oldCursorPosition, newCursorPosition, eventOptions, extraProps) {
          _thisMedia.seekStart(oldCursorPosition, null, extraProps);
          _context.eventDuration = 0;
          _context.previousCursorPosition = _utility.value2Number(oldCursorPosition); // Cursor position at the beginning of the seek
          _context.currentCursorPosition = _utility.value2Number(newCursorPosition); // Cursor position at the end of the seek

          _sendEvent('av.backward', true, eventOptions, extraProps);
        };
        _thisMedia.seekForward = function (oldCursorPosition, newCursorPosition, eventOptions, extraProps) {
          _thisMedia.seekStart(oldCursorPosition, null, extraProps);
          _context.eventDuration = 0;
          _context.previousCursorPosition = _utility.value2Number(oldCursorPosition); // Cursor position at the beginning of the seek
          _context.currentCursorPosition = _utility.value2Number(newCursorPosition); // Cursor position at the end of the seek

          _sendEvent('av.forward', true, eventOptions, extraProps);
        };
        _thisMedia.seekStart = function (oldCursorPosition, eventOptions, extraProps) {
          var processedOldPosition = _utility.value2Number(oldCursorPosition);
          _context.previousCursorPosition = _context.currentCursorPosition;
          _context.currentCursorPosition = processedOldPosition;
          if (_context.isPlaying) {
            _context.eventDuration = _timers.getEventDuration(); // duration since the last event (usually heartbeat)
          } else {
            _context.eventDuration = 0;
          }
          _sendEvent('av.seek.start', true, eventOptions, extraProps);
        };
        _thisMedia.adClick = function (eventOptions, extraProps) {
          _sendEvent('av.ad.click', false, eventOptions, extraProps);
        };
        _thisMedia.adSkip = function (eventOptions, extraProps) {
          _sendEvent('av.ad.skip', false, eventOptions, extraProps);
        };
        _thisMedia.error = function (message, eventOptions, extraProps) {
          var newProps = {};
          if (isObject(extraProps)) {
            newProps = extraProps;
          }
          newProps.av_player_error = String(message);
          _sendEvent('av.error', false, eventOptions, newProps);
        };
        _thisMedia.display = function (eventOptions, extraProps) {
          _sendEvent('av.display', false, eventOptions, extraProps);
        };
        _thisMedia.close = function (eventOptions, extraProps) {
          _sendEvent('av.close', false, eventOptions, extraProps);
        };
        _thisMedia.volume = function (eventOptions, extraProps) {
          _sendEvent('av.volume', false, eventOptions, extraProps);
        };
        _thisMedia.subtitleOn = function (eventOptions, extraProps) {
          _sendEvent('av.subtitle.on', false, eventOptions, extraProps);
        };
        _thisMedia.subtitleOff = function (eventOptions, extraProps) {
          _sendEvent('av.subtitle.off', false, eventOptions, extraProps);
        };
        _thisMedia.fullscreenOn = function (eventOptions, extraProps) {
          _sendEvent('av.fullscreen.on', false, eventOptions, extraProps);
        };
        _thisMedia.fullscreenOff = function (eventOptions, extraProps) {
          _sendEvent('av.fullscreen.off', false, eventOptions, extraProps);
        };
        _thisMedia.quality = function (eventOptions, extraProps) {
          _sendEvent('av.quality', false, eventOptions, extraProps);
        };
        _thisMedia.speed = function (eventOptions, extraProps) {
          _sendEvent('av.speed', false, eventOptions, extraProps);
        };
        _thisMedia.share = function (eventOptions, extraProps) {
          _sendEvent('av.share', false, eventOptions, extraProps);
        };
        _initContext();
        _initHeartbeats();
        _initSessionID();
        _initTimers();
        _initProperties();
      };
      pa.avInsights = {};
      pa.avInsights.Media = Media;
    };

    function PianoAnalytics(configuration) {
      _initConfig(this, configuration);
      this._storage = new Storage(this);
      this._queue = new PianoAnalyticsQueue(this);
      this._properties = {};
      this._sendEvent = _sendEvent;
      _initPrivacy(this);
      this.user = new User(this);
      AVInsights(this);
      {
        _runAsyncTagging(this);
      }
    }
    function _initConfig(pa, configuration) {
      pa.cfg = new Configuration(cloneObject(configuration) || Config);
      pa.setConfiguration = pa.cfg.setConfiguration;
      pa.setConfigurations = pa.cfg.setConfigurations;
      pa.getConfiguration = pa.cfg.getConfiguration;
      {
        // overriding configurations tagging
        window._pac = window._pac || {
          privacy: []
        };
        for (var config in window._pac) {
          if (Object.prototype.hasOwnProperty.call(window._pac, config) && config !== 'privacy') {
            pa.setConfiguration(config, window._pac[config]);
          }
        }
      }
    }
    function _initPrivacy(pa) {
      pa.setConfiguration('isLegacyPrivacy', true);
      {
        if (typeof window.pdl === 'undefined') {
          window.pdl = {
            migration: {
              browserId: {
                source: 'PA'
              }
            },
            cookies: {
              storageMode: 'fixed'
            }
          };
        } else {
          if (window.pdl.requireConsent) {
            pa.setConfiguration('isLegacyPrivacy', false);
          }
          if (typeof window.pdl.cookies === 'undefined') {
            window.pdl.cookies = {
              storageMode: 'fixed'
            };
          } else if (window.pdl.cookies && typeof window.pdl.cookies.storageMode === 'undefined') {
            window.pdl.cookies.storageMode = 'fixed';
          }
        }
        dataLayer.init({
          cookieDefault: {
            domain: pa.getConfiguration('cookieDomain'),
            secure: pa.getConfiguration('cookieSecure'),
            path: pa.getConfiguration('cookiePath'),
            samesite: pa.getConfiguration('cookieSameSite')
          },
          cookies: {
            _pcid: {
              expires: pa.getConfiguration('storageLifetimeVisitor')
            }
          }
        });
      }
      // public privacy api (deprecated for browser tagging)
      pa.privacy = new AtPrivacy(pa);
      {
        // public consent api (new browser tagging for privacy)
        pa.consent = new DlPrivacy(pa);
      }
      // apis wrapper for internal use
      pa._privacy = new Privacy(pa);
    }
    function _runAsyncTagging(pa) {
      var asyncName = pa.getConfiguration('queueVarName');
      window[asyncName] = window[asyncName] || [];
      preloadTagging(pa, window[asyncName], true, asyncName);
    }
    function _sendEvent(events, options) {
      var steps = [privacyStep, visitorStep, userStep, campaignsStep, metadataStep, propertiesStep, onBeforeBuildStep, buildStep, onBeforeSendStep, sendStep];
      for (var i = 0; i < events.length; i++) {
        var eventFormatted = {
          name: '',
          data: {}
        };
        if (typeof events[i] === 'string') {
          eventFormatted.name = events[i];
        } else if (typeof events[i].data === 'undefined') {
          eventFormatted.name = events[i].name;
        } else {
          continue;
        }
        events[i] = eventFormatted;
      }
      var data = {
        events: events,
        options: options
      };
      if (steps.length > 0 && typeof steps[0] === 'function') {
        var clonedConfig = new Configuration(this.cfg.cloneData());
        steps[0](this, new Model(this, data, clonedConfig), steps.slice(1));
      }
    }
    function _processCallbackIfPresent(value, cb) {
      if (cb) {
        cb(value);
      }
      return value;
    }
    PianoAnalytics.prototype.setProperty = function (property, value, options) {
      if (this._privacy.call('isPropAllowed', property)) {
        this._properties[property] = {
          value: value,
          options: options || {}
        };
      }
    };
    PianoAnalytics.prototype.setProperties = function (properties, options) {
      for (var prop in properties) {
        if (Object.prototype.hasOwnProperty.call(properties, prop)) {
          this.setProperty(prop, properties[prop], options);
        }
      }
    };
    PianoAnalytics.prototype.deleteProperty = function (propertyName) {
      delete this._properties[propertyName];
    };
    PianoAnalytics.prototype.sendEvent = function (eventName, eventData, options) {
      this._queue.push(['_sendEvent', [{
        name: eventName,
        data: eventData
      }], options]);
    };
    PianoAnalytics.prototype.sendEvents = function (events, options) {
      this._queue.push(['_sendEvent', events, options]);
    };
    PianoAnalytics.prototype.getVisitorId = function (callback) {
      var forcedValue = this.getConfiguration('visitorId') || null;
      var result = null;
      {
        result = _processCallbackIfPresent(forcedValue || dataLayer.get('browserId'), callback);
      }
      if (typeof callback === 'undefined') {
        return result;
      }
    };
    PianoAnalytics.prototype.setVisitorId = function (value) {
      this.setConfiguration('visitorId', value);
      var expirationDate = new Date();
      expirationDate.setTime(expirationDate.getTime() + this.getConfiguration('storageLifetimeVisitor') * 24 * 60 * 60 * 1000);
      this._privacy.call('setItem', this.getConfiguration('storageVisitor'), value, expirationDate, function () {
        {
          dataLayer.updateMigration();
        }
      });
    };
    PianoAnalytics.prototype.setUser = function (id, category, enableStorage) {
      this.user.setUser(id, category, enableStorage);
    };
    PianoAnalytics.prototype.getUser = function (callback) {
      this.user.getUser(callback);
    };
    PianoAnalytics.prototype.deleteUser = function () {
      this.user.deleteUser();
    };
    PianoAnalytics.prototype.PA = PianoAnalytics;
    {
      PianoAnalytics.prototype.refresh = function () {
        if (this.getConfiguration('isManualPageRefresh') === null) {
          this.setConfiguration('isManualPageRefresh', true);
        }
        if (this.getConfiguration('isManualPageRefresh')) {
          dataLayer.refresh();
        }
      };
      PianoAnalytics.prototype.setContentProperty = function (name, value) {
        var MAP_PA_DL = {
          'content_publication_date': 'createdAt',
          'tags_array': 'tags'
        };
        var temp = {};
        if (name === 'content_publication_date' || name === 'tags_array') {
          temp[MAP_PA_DL[name]] = value;
        } else {
          temp[name] = value;
        }
        dataLayer.set('content', temp);
      };
      PianoAnalytics.prototype.setContentProperties = function (content) {
        for (var prop in content) {
          if (Object.prototype.hasOwnProperty.call(content, prop)) {
            this.setContentProperty(prop, content[prop]);
          }
        }
      };
    }

    var pianoAnalytics = function () {
      var _instance = new PianoAnalytics(Config);
      {
        if (window && !window[_instance.getConfiguration('globalVarName')]) {
          window[_instance.getConfiguration('globalVarName')] = _instance;
        }
      }
      return _instance;
    }();

    exports.pianoAnalytics = pianoAnalytics;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({});
