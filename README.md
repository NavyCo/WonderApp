# WonderApp
An ElectronJS application that started out as an idea for a portable USB application to include all of the things I use at home!

## Modules
- **[Zany](https://github.com/jnvm/zany)**
- **(IP)** External IP Grabber
- **(OAuth)** OAuth code grabber for future modules
- **(GitHub)** Currently only to grab __gist__.github stuff.

## When building...
You will want to comment out the fs.readFileSync and replace the string version with the JSON Encoded version of welcome.html
```js
var $ptty = $("#terminal").Ptty({
		theme: "ptty-fallout",
		i18n: {
			welcome: fs.readFileSync("welcome.html"),
//			welcome: "",
		},
	});
	```