# MMM-IpCam
Display ipcam (foscam and compatible) feed on your MagicMirror

Makes use of: https://github.com/fvdm/nodejs-foscam

# Installing the module
Clone this repository in your `~/MagicMirror/modules/` folder `( $ cd ~MagicMirror/modules/ )`:
````javascript
git clone https://github.com/RedNax67/MMM-IPCam.git
````

## Using the module

To use this module, add it to the modules array in the `config/config.js` file:
````javascript
modules: [
            {
            module: 'MMM-IPCam',
            position: 'top_left',
            config: {
                invertColors: false,
                updateInterval : 10000,
                host: '192.168.1.47',
                port: 80,
                user: 'admin',
                pass: 'yourpassword' 
            }};
]
````

## Configuration options

The following properties can be configured:


<table width="100%">
	<!-- why, markdown... -->
	<thead>
		<tr>
			<th>Option</th>
			<th width="100%">Description</th>
		</tr>
	<thead>
	<tbody>
		<tr>
			<td><code>invertColors</code></td>
			<td>Set to true to invert the colors of the image for a darker feel.<br>
				<br><b>Example:</b> <code>invertColors: false</code><br>
                                <br> This value is <b>Optional</b>
			</td>
		</tr>
		<tr>
			<td><code>host</code></td>
			<td>The ip adress/hostname of your ip camera.<br>
				<br> This value is <b>REQUIRED</b>
			</td>
		</tr>
		<tr>
			<td><code>port</code></td>
			<td>The port your camera is serving content from.<br>
				<br><b>Default value:</b> <code>80</code>
			</td>
		</tr>
		<tr>
			<td><code>user</code></td>
			<td>The username with which to log on to the camera.<br>
				<br>This value is required. 
			</td>
		</tr>
		<tr>
			<td><code>pass</code></td>
			<td>The password to use.<br>
        <br>This value is required.			</td>
		</tr>
		<tr>
		<tr>
			<td><code>updateInterval</code></td>
			<td>How often does the content needs to be fetched? (Milliseconds)
				<br><b>Possible values:</b> <code>1000</code> - <code>86400000</code>
				<br><b>Default value:</b> <code>10000</code> (10 seconds)
			</td>
		</tr>
		<tr>
			<td><code>animationSpeed</code></td>
			<td>Speed of the update animation. (Milliseconds)<br>
				<br><b>Possible values:</b><code>0</code> - <code>5000</code>
				<br><b>Default value:</b> <code>2000</code> (2 seconds)
			</td>
		</tr>
	</tbody>
</table>



