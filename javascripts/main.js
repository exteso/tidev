"use strict";

var SiteUtils = SiteUtils || {};

(function () {
    SiteUtils.switchLanguage = function(baseCtx, newCtx) {
        var currentAddress = window.location.pathname;
        var actualAddress = currentAddress;
        if(currentAddress.substring(0, baseCtx.length) == baseCtx) {
            actualAddress = currentAddress.substring(baseCtx.length);
        }
        window.location.pathname=newCtx + actualAddress;
        return false;
    }
})();
