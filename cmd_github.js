/* Created by Nicholas J. Phillips (LagSwitchedVirginity) @ 1/30/2019 */
/* Created by Nicholas J. Phillips (LagSwitchedVirginity) @ 1/29/2019 */
module.exports = function () {
	const jStore = require("electron-json-storage");jStore.setDataPath(process.cwd());
	const buildUrl = require("build-url");
	const OAuthOptions = {
		"github": "GitHub, likely your most visited website!",
	};
	$ptty.register("command", {
		name: "gist-get",
		method: function (cmd) {
			var input = $ptty.get_command_option("last");
			let regex = /^gist-get\s+(.*)/i;
			const sid = shortid.generate(4);
			if (regex.test(input)) {
				let code = input.replace(regex, "$1");
				if (code.trim() !== "") {
					let scEmbed = code.replace(/^http(?:s|):\/\/gist.github.com\/(.*)\/(.*)(?:\/|)$/i, "https://gist.github.com/$1/$2.json");
//					let scEmbed=code.replace(/^http(?:s|):\/\/gist.github.com\/(.*)\/(.*)(?:\/|)$/i,"https://gist.github.com/NavyCo/e3f480349b7158c4d1edbce903e1482b.js");
					code = code.replace(/^http(?:s|):\/\/gist.github.com\/(?:.*)\/(.*)(?:\/|)$/i, "$1");
					setTimeout(function () {
						var settings = {
							"async": true,
							"crossDomain": true,
							"url": scEmbed,
							"method": "GET",
							"headers": {},
						};
						$.ajax(settings).done(function (resp) {
							if (resp.message === "Not Found" || resp.error === "Not Found") {
								document.getElementById(`gist-${sid}`).innerHTML = "<code>Couldn't get the content!</code>";
							} else {
								var settings = {
									"async": true,
									"crossDomain": true,
									"url": resp.stylesheet,
									"method": "GET",
									"headers": {},
								};
								$.ajax(settings).done(function (resp2) {
									let iFrame = document.getElementById(`gist-${sid}`);
									iFrame.contentWindow.document.write(resp.div + `<link rel="stylesheet" href="${resp.stylesheet}" type="text/css" />`);
									setTimeout(function () {
										iFrame.height = iFrame.contentWindow.document.body.scrollHeight;
									}, 1e3);
								});
							}
						});
					}, 20);
					cmd.out = `<iframe id="gist-${sid}" style="width: 100%;"></iframe>`;
					return cmd;
				} else {
					cmd.out = "Please provide a gist id! <pre><code>gist-get &lt;gist-code&gt;</code></pre>";
					return cmd;
				}
			} else {
				cmd.out = "Please provide a gist id! <pre><code>gist-get &lt;gist-code&gt;</code></pre>";
				return cmd;
			}
		}, options: [],
		help: `Fetch Gist`,
	});
	document.getElementsByName("github")[0].checked = true;
	document.getElementsByName("github")[0].disabled = true;
	window.loadedModules.github = true;
};