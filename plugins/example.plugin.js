function ExamplePlugin(rpp) {
    console.log("Got Arg", rpp);
}

module.exports = {
    init: ExamplePlugin
};