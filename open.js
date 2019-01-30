/* Created by Nicholas J. Phillips (LagSwitchedVirginity) @ 1/25/2019 */
module.exports={
	openUrl: function(event,element){
		let shell = require('electron').shell;
		shell.openExternal(element.href);
		event.preventDefault();
	},
	openItem: function(event,element){
		let shell = require('electron').shell;
		shell.openItem(element.href);
		event.preventDefault();
	}
};