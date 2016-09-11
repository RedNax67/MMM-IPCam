var request = require('request');
var NodeHelper = require("node_helper");
var cam = require ('./foscam.js');

module.exports = NodeHelper.create({
	
	start: function() {
		console.log("Starting node helper: " + this.name);
		
	},
	
	socketNotificationReceived: function(notification, payload) {
		var self = this;
		console.log("Notification: " + notification + " Payload: " + payload);
		
		if(notification === "GET_CAM"){
			
			var img;
            
            cam.setup ({
                host: payload.config.host,
                port: payload.config.port,
                user: payload.config.user,
                pass: payload.config.pass
            });
 

            cam.snapshot( function(img) { 
                self.sendSocketNotification("CAM", img);
            });
             
            
			
		}
		
	},
});
