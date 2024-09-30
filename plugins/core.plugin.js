(function (factory) {
    "function" == typeof define && define.amd ? define(["jquery"], factory) : "object" == typeof module && module.exports ? module.exports = function (e, o) { return void 0 === o && (o = "undefined" != typeof window ? require("jquery") : require("jquery")(e)), factory(o), o; } : factory(jQuery);
}(function ($) {
    $.fn.retoolPlusPlus = function () {
        console.log("I AM ALIVE")
        return {
            demo: () => console.log("Demooo")
        }
     };
}));