var launchnavigator = {};
launchnavigator.navigate = function(destination, start, successCallback, errorCallback) {
    var dType, sType = "none";
    if(typeof(destination) == "object"){
        dType = "pos";
    }else{
        dType = "name";
    }

    if(start){
        if(typeof(start) == "object"){
            sType = "pos";
        }else{
            sType = "name";
        }
    }

    return cordova.exec(
        successCallback,
        errorCallback,
        'LaunchNavigator',
        'navigate',
        [dType, destination, sType, start]);

};

launchnavigator.navigateByLatLon = function(lat, lon, successCallback, errorCallback) {
    if(typeof(console) != "undefined") console.warn("launchnavigator.navigateByLatLon() has been deprecated and will be removed in a future version of this plugin. Please use launchnavigator.navigate()");
    return cordova.exec(successCallback,
        errorCallback,
        'LaunchNavigator',
        'navigateByLatLon',
        [lat, lon]);
};

launchnavigator.navigateByPlaceName = function(name, successCallback, errorCallback) {
    if(typeof(console) != "undefined") console.warn("launchnavigator.navigateByPlaceName() has been deprecated and will be removed in a future version of this plugin. Please use launchnavigator.navigate()");
    return cordova.exec(successCallback,
        errorCallback,
        'LaunchNavigator',
        'navigateByPlaceName',
        [name]);
};
module.exports = launchnavigator;