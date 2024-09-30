(function (window) {
    let initialized = false;

    /**
     * Retool Plus Plus
     *
     * @param {(...args: any[]) => void} L pretty alias for console.log
     * @param {(...args: any[]) => void} E pretty alias for console.error
     * @returns
     */
    function RetoolPlusPlus(L, E) {
        const init = () => {
            L("Initializing Core Plugin");
            initialized = true;
        };

        if (!initialized) init();
        return {
            demo: () => console.log("Demooo")
        }
    };

    RetoolPlusPlus.initialized = initialized;

    window["RetoolPlusPlus"] = RetoolPlusPlus;
})(window);