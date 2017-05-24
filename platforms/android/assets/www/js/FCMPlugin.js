var exec = require('cordova/exec');

function FCMPlugin() { 
	console.log("FCMPlugin.js: is created");
}

// SUBSCRIBE TO TOPIC //
FCMPlugin.prototype.subscribeToTopic = function( topic, success, error ){
    console.log("FCMPlugin.js: subscribeToTopic");
    exec(success, error, "FCMPlugin", 'subscribeToTopic', [topic]);
}
// UNSUBSCRIBE FROM TOPIC //
FCMPlugin.prototype.unsubscribeFromTopic = function( topic, success, error ){
    console.log("FCMPlugin.js: unsubscribeToTopic");
	exec(success, error, "FCMPlugin", 'unsubscribeFromTopic', [topic]);
}
// NOTIFICATION CALLBACK //
FCMPlugin.prototype.onNotification = function( callback, success, error ){
    console.log("FCMPlugin.js: onNotification");
	FCMPlugin.prototype.onNotificationReceived = callback;
	exec(success, error, "FCMPlugin", 'registerNotification',[]);
}
// TOKEN REFRESH CALLBACK //
FCMPlugin.prototype.onTokenRefresh = function( callback ){
    console.log("FCMPlugin.js: onTokenRefresh");
    console.log("got fcm tokenRefreshs");
    FCMPlugin.prototype.onTokenRefreshReceived = callback;
}
// GET TOKEN //
FCMPlugin.prototype.getToken = function( success, error ){
    console.log("FCMPlugin.js: getToken");
    console.log("got fcm token");
	exec(success, error, "FCMPlugin", 'getToken', []);
}
// DEFAULT NOTIFICATION CALLBACK //
FCMPlugin.prototype.onNotificationReceived = function(payload){
    console.log("FCMPlugin.js: onNotification Received");
	console.log("Received push notification")
	console.log(payload)
}
// DEFAULT TOKEN REFRESH CALLBACK //
FCMPlugin.prototype.onTokenRefreshReceived = function(token){
    console.log("FCMPlugin.js: onTokenRefreshReceived");
	console.log("Received token refresh")
	console.log(token)
}
// FIRE READY //
exec(function(result){ console.log("FCMPlugin Ready OK") }, function(result){ console.log("FCMPlugin Ready ERROR") }, "FCMPlugin",'ready',[]);

console.log("FCMPlugin.js: came here");



var fcmPlugin = new FCMPlugin();
module.exports = fcmPlugin;
