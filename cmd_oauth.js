/* Created by Nicholas J. Phillips (LagSwitchedVirginity) @ 1/29/2019 */
module.exports = function () {
	if (window.hasServer === undefined) {
		require("./server.js")();
	}
	const jStore = require("electron-json-storage");jStore.setDataPath(process.cwd());
	const buildUrl = require("build-url");
	const OAuthOptions = {
		"github": "GitHub, likely your most visited website!",
	};
	$ptty.register("command", {
		name: "oauth-list",
		method: function (cmd) {
			cmd.out = "<dl>";
			for (const title in OAuthOptions) {
				let description = OAuthOptions[title];
				cmd.out += `<dt><a href="javascript:void(0);" onclick="$ptty.run_command('help oauth-${title}')">oauth-${title}</a></dt>`;
				cmd.out += `<dd>${description}</dd>`;
			}
			cmd.out += "</dl>";
			return cmd;
		}, options: [],
		help: `OAuth options`,
	});
	$ptty.register("command", {
		name: "oauth-github",
		method: function (cmd) {
			var input = $ptty.get_command_option("last");
			let regex = /^oauth-github\s+(.*)/i;

			function popup() {
				window.open(buildUrl("https://github.com/login/oauth/authorize", {
					queryParams: {
						client_id: "61257fca97435c635f9f",
						redirect_uri: `https://anon.to/?http://localhost:${window.serverPort}/github?`,
					},
				}), Date.now(), "width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0");
			}

			if (regex.test(input)) {
				let code = input.replace(regex, "$1");
				if (code.trim() !== "") {
					if (code === "get") {
						let sid = shortid.generate(4);
						cmd.out = `<span id="oauth-github-${sid}">Fetching the code...</span>`;
						setTimeout(function () {
							if (error) console.log(error);
							else document.getElementById("oauth-github-" + sid).innerHTML = `The code is <input value="${response}">.`;
						}, 20);
					} else {
						jStore.set("data-oauth-github", code, function (error) {if (error) throw error;});
						cmd.out = `The code <input value="${code}"> you've provided has been set and stored!`;
					}
					return cmd;
				} else {
					popup();
					cmd.out = "Come back when you have the information! <pre><code>oauth-github &lt;code&gt;</code></pre>";
					return cmd;
				}
			} else {
				popup();
				cmd.out = "Come back when you have the information! <pre><code>oauth-github &lt;code&gt;</code></pre>";
				return cmd;
			}
		}, options: [],
		help: `Get/Set OAuth data for GitHub`,
	});
	document.getElementsByName("oauth")[0].checked = true;
	document.getElementsByName("oauth")[0].disabled = true;
	window.loadedModules.oauth = true;
};