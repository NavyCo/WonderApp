/* Created by Nicholas J. Phillips (LagSwitchedVirginity) @ 1/25/2019 */
module.exports = function () {
	function aVeryWeirdFunctionButUseful(string) {
		return string
			.split("")
			.filter(function (item, pos, self) {
				return self.indexOf(item) === pos;
			})
			.join("");
	}

	$ptty.register("command", {
		name: "ip",
		method: function (cmd) {
			id = "ip_" + shortid.generate(4);
//			let loading = `<div class=\"ldBar label-center\" id="${id}_loading" data-value="0" data-preset="rainbow" ></div>`;
			let loading = `<progress id="${id}_loading" max="100" value="0"></progress>`;
			cmd.out = `<span id="${id}">Fetching IP... ${loading}</span>`;

			var request = require("request"), requestProgress = require("request-progress");
			setTimeout(function () {
				console.log("attempt to start");
				requestProgress(request({method: "GET", url: "https://api.ipify.org/"}, function (error, response, body) {
					if (error) throw new Error(error);
					document.querySelector("#" + id).innerHTML = `Your IP is <b>${body}</b>`;
				})).on("progress", function (state) {
					let percent = state.percent * 100;
					console.log(state);
					$(`#${id}_loading`).val(percent);
				}).on("error", function (err) {
					console.log(err);
				});
			}, 20);
			return cmd;
		}, options: [],

		help: `A command to get your external IP via ipify.org`,
	});
	document.getElementsByName("ip")[0].checked = true;
	document.getElementsByName("ip")[0].disabled = true;
	window.loadedModules.ip = true;
};