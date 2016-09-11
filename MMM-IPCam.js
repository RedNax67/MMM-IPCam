Module.register("MMM-IPCam",{
	
	// Default module config.
	defaults: {
		updateInterval : 10000, // 10 seconds
		invertColors : false
		
	},

	getStyles : function () {
		return ["IPCam.css"];
	},
	
	start: function() {
		Log.info(this.config);
		Log.info("Starting module: " + this.name);
		
		this.Cam = "";
		this.CamNum = "";
		this.CamTitle = "";
		
		this.getCam();
	},
	
	// Define required scripts.
	getScripts: function() {
		return ["moment.js"];
	},
	
	getCam: function() {
		Log.info("IPcam: Getting image.");
		
		this.sendSocketNotification("GET_CAM", {config: this.config});
	},
	
	socketNotificationReceived: function(notification, payload) {
		
		if(notification === "CAM"){
				Log.info(payload);
                var b64encoded = btoa(payload.img);
                this.Cam = "data:image/jpg;base64," + b64encoded;
                this.CamTitle = payload.all.alias;
				this.scheduleUpdate();
		}
		
	},
	
	// Override dom generator.
	getDom: function() {
		var wrapper = document.createElement("div");
		
		var title = document.createElement("div");
		title.className = "bright small light";
		title.innerHTML = this.CamTitle;
		
		var ipcam = document.createElement("img");
		ipcam.src = this.Cam;
		if(this.config.invertColors){
			ipcam.setAttribute("style", "-webkit-filter: invert(100%); max-width: 100%; max-height: 100%; height: 280px; ")
		} else {
			ipcam.setAttribute("style", "max-width: 100%; max-height: 100%; height: 280px; opacity:0.7; -moz-opacity:0.7; filter:alpha(opacity=70);")
        }
		
		wrapper.className = "img";
		
		wrapper.appendChild(title);
		wrapper.appendChild(ipcam);
		return wrapper;
	},
	    
    scheduleUpdate: function (delay) {
        var self = this;
        var nextLoad = this.config.updateInterval;

		self.updateDom(2000);

        if (typeof delay !== "undefined" && delay >= 0) {
            nextLoad = delay;
        }

        var self = this;
        clearTimeout(this.updateTimer);
        this.updateTimer = setTimeout(function () {
            self.getCam();
        }, nextLoad);
    }
        
	
});
