// Legacy Browser Support - Additional compatibility code

(function() {
    'use strict';
    
    console.log('Legacy: Loading legacy browser support...');
    
    // IE11 detection and fixes
    var isIE = typeof document.documentMode !== 'undefined' || !!navigator.userAgent.match(/Trident\/7\./);
    
    if (isIE) {
        console.log('Legacy: IE detected, applying fixes...');
        
        // IE11-specific fixes
        document.documentElement.classList.add('ie11');
    }
    
    // Old browser detection
    var isOldBrowser = false;
    
    if (typeof Array.from === 'undefined') isOldBrowser = true;
    if (typeof Symbol === 'undefined') isOldBrowser = true;
    if (typeof Object.assign === 'undefined') isOldBrowser = true;
    
    if (isOldBrowser) {
        console.log('Legacy: Old browser detected');
        
        // Object.assign polyfill
        if (typeof Object.assign !== 'function') {
            Object.assign = function(target) {
                'use strict';
                if (target === null || target === undefined) {
                    throw new TypeError('Cannot convert undefined or null to object');
                }
                var to = Object(target);
                for (var index = 1; index < arguments.length; index++) {
                    var nextSource = arguments[index];
                    if (nextSource !== null && nextSource !== undefined) {
                        for (var nextKey in nextSource) {
                            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                                to[nextKey] = nextSource[nextKey];
                            }
                        }
                    }
                }
                return to;
            };
        }
    }
    
    // Mobile detection
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
        document.documentElement.classList.add('mobile');
    }
    
    // Touch device detection
    var isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (isTouch) {
        document.documentElement.classList.add('touch');
    }
    
    // Viewport fix for old iOS
    var ua = navigator.userAgent;
    if (ua.indexOf('iPhone') > -1 || ua.indexOf('iPad') > -1) {
        document.addEventListener('gesturestart', function(e) {
            e.preventDefault();
        }, { passive: false });
    }
    
    // SVG support detection
    if (!document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#BasicStructure', '1.1')) {
        document.documentElement.classList.add('no-svg');
    }
    
    // LocalStorage availability check
    var localStorageAvailable = false;
    try {
        localStorage.setItem('test', 'test');
        localStorage.removeItem('test');
        localStorageAvailable = true;
    } catch (e) {
        console.log('Legacy: LocalStorage not available');
    }
    
    // SessionStorage availability check
    var sessionStorageAvailable = false;
    try {
        sessionStorage.setItem('test', 'test');
        sessionStorage.removeItem('test');
        sessionStorageAvailable = true;
    } catch (e) {
        console.log('Legacy: SessionStorage not available');
    }
    
    // Cookie availability
    var cookiesEnabled = navigator.cookieEnabled;
    
    if (!cookiesEnabled) {
        console.log('Legacy: Cookies not enabled');
    }
    
    // WebGL support
    var webglSupported = false;
    try {
        var canvas = document.createElement('canvas');
        webglSupported = !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
    } catch (e) {
        webglSupported = false;
    }
    
    if (!webglSupported) {
        document.documentElement.classList.add('no-webgl');
    }
    
    // JSON support
    if (typeof JSON === 'undefined') {
        console.log('Legacy: JSON not supported');
    }
    
    // Console fallback
    if (typeof console === 'undefined') {
        console = {
            log: function() {},
            error: function() {},
            warn: function() {},
            info: function() {}
        };
    }
    
    // RequestAnimationFrame fallback
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function(callback) {
            return setTimeout(callback, 1000 / 60);
        };
    }
    
    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
    }
    
    // Additional event listeners
    if (window.addEventListener) {
        window.addEventListener('load', function() {
            console.log('Legacy: Legacy support loaded');
        });
    } else if (window.attachEvent) {
        window.attachEvent('onload', function() {
            console.log('Legacy: Legacy support loaded (IE8)');
        });
    }
    
    console.log('Legacy: Legacy browser support initialized');
    
})();

