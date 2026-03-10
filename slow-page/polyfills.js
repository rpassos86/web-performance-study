// Polyfills - Simulated legacy browser support

(function() {
    'use strict';
    
    console.log('Polyfills: Loading browser polyfills...');
    
    // Array.prototype.includes polyfill
    if (!Array.prototype.includes) {
        Array.prototype.includes = function(searchElement, fromIndex) {
            'use strict';
            var O = Object(this);
            var len = parseInt(O.length) || 0;
            if (len === 0) return false;
            var n = parseInt(fromIndex) || 0;
            var k;
            if (n >= 0) {
                k = n;
            } else {
                k = len + n;
                if (k < 0) k = 0;
            }
            var currentElement;
            while (k < len) {
                currentElement = O[k];
                if (searchElement === currentElement) return true;
                k++;
            }
            return false;
        };
    }
    
    // Object.entries polyfill
    if (!Object.entries) {
        Object.entries = function(obj) {
            var ownProps = Object.keys(obj),
                i = ownProps.length,
                resArray = new Array(i);
            while (i--) resArray[i] = [ownProps[i], obj[ownProps[i]]];
            return resArray;
        };
    }
    
    // Object.values polyfill
    if (!Object.values) {
        Object.values = function(obj) {
            return Object.keys(obj).map(function(key) {
                return obj[key];
            });
        };
    }
    
    // Array.prototype.find polyfill
    if (!Array.prototype.find) {
        Array.prototype.find = function(predicate) {
            'use strict';
            var O = Object(this);
            var len = parseInt(O.length) || 0;
            if (typeof predicate !== 'function') throw new TypeError('predicate must be a function');
            var thisArg = arguments[1];
            var k = 0;
            while (k < len) {
                var kValue = O[k];
                if (predicate.call(thisArg, kValue, k, O)) return kValue;
                k++;
            }
            return undefined;
        };
    }
    
    // Array.prototype.findIndex polyfill
    if (!Array.prototype.findIndex) {
        Array.prototype.findIndex = function(predicate) {
            'use strict';
            var O = Object(this);
            var len = parseInt(O.length) || 0;
            if (typeof predicate !== 'function') throw new TypeError('predicate must be a function');
            var thisArg = arguments[1];
            var k = 0;
            while (k < len) {
                var kValue = O[k];
                if (predicate.call(thisArg, kValue, k, O)) return k;
                k++;
            }
            return -1;
        };
    }
    
    // String.prototype.includes polyfill
    if (!String.prototype.includes) {
        String.prototype.includes = function(search, start) {
            'use strict';
            if (typeof start !== 'number') start = 0;
            if (start + search.length > this.length) return false;
            return this.indexOf(search, start) !== -1;
        };
    }
    
    // String.prototype.trim polyfill (for very old browsers)
    if (!String.prototype.trim) {
        String.prototype.trim = function() {
            return this.replace(/^\s+|\s+$/g, '');
        };
    }
    
    // Promise polyfill (simplified)
    if (typeof Promise === 'undefined') {
        console.log('Polyfills: Promise not supported, using fallback');
    }
    
    // fetch polyfill check
    if (typeof fetch === 'undefined') {
        console.log('Polyfills: fetch not supported');
    }
    
    // CustomEvent polyfill
    if (typeof CustomEvent === 'undefined') {
        function CustomEvent(event, params) {
            params = params || { bubbles: false, cancelable: false, detail: null };
            var evt = document.createEvent('CustomEvent');
            evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
            return evt;
        }
        CustomEvent.prototype = window.Event.prototype;
        window.CustomEvent = CustomEvent;
    }
    
    // NodeList.forEach polyfill
    if (typeof NodeList !== 'undefined' && !NodeList.prototype.forEach) {
        NodeList.prototype.forEach = function(callback, thisArg) {
            var i;
            for (i = 0; i < this.length; i++) {
                callback.call(thisArg, this[i], i, this);
            }
        };
    }
    
    // DOMTokenList.contains polyfill
    if (typeof DOMTokenList !== 'undefined') {
        var _contains = DOMTokenList.prototype.contains;
        DOMTokenList.prototype.contains = function(token) {
            if (typeof token !== 'string' || token.indexOf(' ') !== -1) {
                throw new Error('Failed to execute "contains" on "DOMTokenList": The token provided must not be empty or contain whitespace.');
            }
            return _contains.call(this, token);
        };
    }
    
    // Additional legacy support
    console.log('Polyfills: Legacy browser support loaded');
    
})();

