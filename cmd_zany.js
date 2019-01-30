/* Created by Nicholas J. Phillips (LagSwitchedVirginity) @ 1/25/2019 */
module.exports = function () {
	const jStore = require("electron-json-storage");
	jStore.setDataPath(process.cwd());
	const _ = require("underscore");

	function aVeryWeirdFunctionButUseful(string) {
		return string
			.split("")
			.filter(function (item, pos, self) {
				return self.indexOf(item) === pos;
			})
			.join("");
	}

	let zany_usage = `zany [key,k]             {key string}
zany-blocks (Zany Blocks)
zany [encode,encrypt,e]  {regular content}
zany [decode,decrypt,d]  {encrypted content}`;
	zany_link = `<a href="https://github.com/jnvm/zany#readme" onclick="openUrl(event,this);">https://github.com/jnvm/zany#readme</a>`;
	window.zany = {
		key: null,
		vkey: null,
		alphabets: { //make up some alphabets
			food: `🍇🍈🍉🍊🍋🍌🍍🍎🍏🍐🍑🍒🍓🍅🍠🍢🍣🍤🍥🍡🍦🍧🍨🍩🍪🎂🍰🍫🍬🍭🍮🍯`,
			faces: `😀😁😂😃😄😅😆😉😊😋😎😍😘😗😙😚🙂😐😑😶😏😣😥😮😪😫😌😛😜😝😒😓😔😕🙁😖😟😭😨😩😬😰😱😳😵😡😠😇`,
			animals: `🙈🐵🐒🐶🐕🐩🐺🐱🐈🐯🐅🐆🐴🐎🐮🐂🐃🐄🐷🐖🐗🐽🐑🐐🐫🐘🐭🐁🐀🐹🐰🐇🐿🐼🐾🐔🐤🐥🐦🐧🕊🕷`,
			whitespace: `             `,
			letters: `Ⓐⓐ⒜AaẠạÅåÄäẢảḀḁẤấẦầẨẩȂȃẪẫẬậẮắẰằẲẳẴẵẶặĀāĄąȀȁǺǻȦȧÁáǞǟǍǎÀàÃãǠǡÂâȺⱥÆæǢǣǼǽⱯꜲꜳꜸꜹꜺꜻⱭ℀⅍℁ªⒷⓑ⒝BbḂḃḄḅḆḇƁɃƀƂƃƄƅℬⒸⓒ⒞CcḈḉĆćĈĉĊċČčÇçƇƈȻȼℂ℃ƆꜾꜿℭ℅℆℄Ⓓⓓ⒟DdḊḋḌḍḎḏḐḑḒḓĎďƊƋƌƉĐđȡǱǲǳǄǅǆȸⅅⅆⒺⓔ⒠EeḔḕḖḗḘḙḚḛḜḝẸẹẺẻẾếẼẽỀềỂểỄễỆệĒēĔĕĖėĘęĚěÈèÉéÊêËëȄȅȨȩȆȇƎⱻɆɇƏǝℰⱸℯ℮ℇƐⒻⓕ⒡FfḞḟƑƒꜰℲⅎꟻℱ℻Ⓖⓖ⒢GgƓḠḡĜĝĞğĠġǤǥǦǧǴℊ⅁ǵĢģⒽⓗ⒣HhḢḣḤḥḦḧḨḩḪḫĤĥȞȟĦħⱧⱨꜦℍǶẖℏℎℋℌꜧⒾⓘ⒤IiḬḭḮḯĲĳÍíÌìÎîÏïĨĩĪīĬĭĮįǏǐıƚỺⅈⅉℹℑℐⒿⓙ⒥JjĴĵɈɉȷⱼǰⓀⓚ⒦KkḰḱḲḳḴḵĶķƘƙꝀꝁꝂꝃꝄꝅǨǩⱩⱪĸⓁⓛ⒧LlḶḷḸḹḺḻḼḽĹĺĻļĽľĿŀŁłỈỉⱠⱡȽꝉꝈⱢǇǈǉỊİịꞁ⅃⅂ȈȉȊȋℓℒⓂⓜ⒨MmḾḿṀṁṂṃꟿꟽⱮƜℳⓃⓝ⒩NnṄṅṆṇṈṉṊṋŃńŅņŇňǸǹÑñȠƞŊŋƝŉǊǋǌȵℕ№Ⓞⓞ⒪OoÖöṎṏṌṍṐṑṒṓȪȫȬȭȮȯȰȱǪǫǬǭỌọỎỏỐốỒồỔổỖỗỘộỚớỜờỞởỠỡỢợƠơŌōŎŏŐőÒòÓóÔôÕõǑǒȌȍȎȏŒœØøǾǿꝊꝎꝏ⍥⍤ℴⓅⓟ⒫℗PpṔṕṖṗƤƥⱣℙǷꟼ℘Ⓠⓠ⒬QqɊɋℚ℺ȹⓇⓡ⒭RrŔŕŖŗŘřṘṙṚṛṜṝṞṟȐȑȒȓɌɍƦꝚꝛⱤ℞ℜℛ℟ℝⓈⓢ⒮SsṠṡṢṣṤṥṦṧṨṩŚśŜŝŞşŠšȘșȿꜱƧƨϨϩẞßẛẜẝ℠Ⓣⓣ⒯TtṪṫṬṭṮṯṰṱŢţŤťŦŧȚțȾⱦƬƮƫƭẗȶ℡™Ⓤⓤ⒰UuṲṳṴṵṶṷṸṹṺṻỦủỤụỨứỪừỬửỮữỰựŨũŪūŬŭŮůŰűǙǚǗǘǛǜŲųǓǔȔȕÛûȖȗÙùÚúÜüƯưɄƲƱⓋⓥ⒱VvṼṽṾṿɅ℣ỼⱱⱴⱽⓌⓦ⒲WwẀẁẂẃẄẅẆẇẈẉŴŵⱲⱳϢϣẘⓍⓧ⒳XxẊẋẌẍℵ×Ⓨⓨ⒴yYẎẏỾỿỲỳỴỵỶỷỸỹŶŷƳƴŸÿÝýɎɏȲȳƔẙ⅄ℽⓏⓩ⒵ZzẐẑẒẓẔẕŹźŻżŽžȤȥⱫⱬƵƶɀℨℤ`,
			zwsp: `‪‭⁠⁡⁢⁣⁤⁦⁧⁨⁩⁪⁫⁬⁭⁮⁯𛲠𛲡𛲢𛲣𝅳𝅴𝅵𝅶𝅷𝅸𝅹𝅺󠀁`,
			//all unicode characters property
			unicode: false,
			//or use predefined blocks,
			futhark: _zany.block.RUNIC,
			cuneiform: _zany.block.CUNEIFORM,
			cards: _zany.block.PLAYING_CARDS,
			dominoes: _zany.block.DOMINO_TILES,
			boxes: _zany.block.BOX_DRAWING,
			braille: _zany.block.BRAILLE_PATTERNS,
			zalgo: _zany.block.ZALGO,
			//weird custom predefined blocks
			weirdo: "🍑🍆🥚",
		},
	};
	jStore.get("data-zany-key", function (error, data) {
		if (error||_.isEmpty(data)) {jStore.set("data-zany-key", "zany");window.zany.key = "zany";console.log(["zany-key", "zany"]);return}
		console.log(["zany-key", data]);
		window.zany.key = data;
	});
	jStore.get("data-zany-vkey", function (error, data) {
		if (error||_.isEmpty(data)) {jStore.set("data-zany-vkey", "zany");window.zany.vkey = "zany";console.log(["zany-vkey", "zany"]);return}
		console.log(["zany-vkey", data]);
		window.zany.vkey = data;
	});
	$ptty.register("command", {
		name: "zany-blocks",
		method: function (cmd) {
			let blocks = Object.keys(window.zany.alphabets).join(",");
			cmd.out = window.zany.alphabets.unicode !== false ? `${blocks}

<u>unicode</u> is also a block, even though it's magical and beautiful, it is laggy due to it's size. Not to mention unstable for decrypting/decoding.` : `${blocks}`;
			return cmd;
		},
	});
	$ptty.register("command", {
		name: "zany",
		method: function (cmd) {
			var input = $ptty.get_command_option("last");
			if (cmd.hasOwnProperty("key") || cmd.hasOwnProperty("k")) {
				let regex = /^zany\s+(?:key|k)\s+(.*)/;
				if (regex.test(input)) {
					let key = input.replace(regex, "$1");
					if (key.length >= 3) {
						var sKey = "", inAlphabet = false;
						if (key in window.zany.alphabets) {
							inAlphabet = true;
							if (key !== "unicode") {
								sKey = JSON.stringify(window.zany.alphabets[key]).replace(/^"(.*)"$/, "$1");
								_key = key;
								key = window.zany.alphabets[key];
							} else {
								sKey = "all unicode";
								_key = key;
							}
						} else {
							sKey = JSON.stringify(key).replace(/^"(.*)"$/, "$1");
						}
						if (inAlphabet) {
							if (window.zany.key !== "unicode") {
								cmd.out = `Zany Key = <input readonly style="text-align: center;" value="${sKey}" /> (alphabet.<b>${_key}</b>)`;
								window.zany.vkey = window.zany.key = key;
							} else {
								$ptty.echo("This may take a while...");
								cmd.out = `Zany Key = <u>all unicode</u> (alphabet.<b>${_key}</b>)`;
								window.zany.vkey = "all unicode";
								window.zany.key = (function () {
									var j, i, results;
									results = "";
									for (i = j = 1; j <= 1114111; i = ++j) {
										results += String.fromCharCode(i);
									}
									return results;
								})();
							}
						} else {
							cmd.out = `Zany Key = <input readonly style="text-align: center;" value="${sKey}" />`;
							window.zany.vkey = key;
							window.zany.key = aVeryWeirdFunctionButUseful(key);
						}
						if (key !== "unicode") {
							jStore.set("data-zany-key", window.zany.key, function (error) {if (error) throw error;});
							jStore.set("data-zany-vkey", window.zany.vkey, function (error) {if (error) throw error;});
						} else {
							$ptty.echo("Didn't save the key to your config due to the extreme length.");
						}
					} else {
						cmd.out = "The key must be 3 characters or more!";
					}
				} else {
					if (window.zany.key === null) {
						cmd.out = "You need to put a key after... Well the argument 'key'!";
					} else {
						let key = window.zany.vkey;
						let sKey = JSON.stringify(key).replace(/^"(.*)"$/, "$1");
						cmd.out = `Zany's current key: <input readonly style="text-align: center;" value="${sKey}" />`;
					}
				}
			} else if (cmd.hasOwnProperty("encrypt") || cmd.hasOwnProperty("encode") || cmd.hasOwnProperty("e")) {
				if (window.zany.key < 3 || window.zany.key == null) {
					cmd.out = "No key has been set!";
					return cmd;
				}
				let regex = /^zany\s+(?:encrypt|encode|e)\s+(.*)/;
				if (regex.test(input)) {
					// let key = window.zany.key;
//					let sKey = JSON.stringify(key);

					let {encode, decode} = _zany(window.zany.key);

					let content = input.replace(regex, "$1");
//					let sContent = JSON.stringify(content);

					let coded = encode(content);
//					let sCoded = JSON.stringify(coded);

					let d_r = shortid.generate(2);
					let d_k = d_r + "_" + shortid.generate(4),
						d_e = d_r + "_" + shortid.generate(4),
						d_d = d_r + "_" + shortid.generate(4),
						d_p = d_r + "_" + shortid.generate(4);
					cmd.out = `<label for="${d_k}">Key</label>
<input type="text" id="${d_k}" name="${d_k}">
<label for="${d_e}">Raw content</label>
<input type="text" id="${d_e}" name="${d_e}">
<label for="${d_d}">Encoded</label>
<input type="text" id="${d_d}" name="${d_d}">
<small id="${d_p}"></small>`;
					setTimeout(function () {
						document.querySelector("#" + d_k).value = window.zany.vkey;
						document.querySelector("#" + d_e).value = content;
						document.querySelector("#" + d_d).value = coded;

						clipboard.writeText(coded);


						let codedLen = coded.length, contentLen = content.length;

						function getRatio(a, b, tolerance) {
							/*where a is the first number, b is the second number,  and tolerance is a percentage
							of allowable error expressed as a decimal. 753,4466,.08 = 1:6, 753,4466,.05 = 14:83,*/
							if (a > b) {
								var bg = a;
								var sm = b;
							} else {
								var bg = b;
								var sm = a;
							}
							for (var i = 1; i < 1000000; i++) {
								var d = sm / i;
								var res = bg / d;
								var howClose = Math.abs(res - res.toFixed(0));
								if (howClose < tolerance) {
									if (a > b) {
										return res.toFixed(0) + ":" + i;
									} else {
										return i + ":" + res.toFixed(0);
									}
								}
							}
						}

						let ratio = getRatio(codedLen, contentLen, 0.1);
						document.querySelector("#" + d_p).innerText = `${codedLen}/${contentLen} (${ratio})`;
					}, 20);
				} else {
					cmd.out = "You didn't put anything to encrypt!";
				}
			} else if (cmd.hasOwnProperty("decrypt") || cmd.hasOwnProperty("decode") || cmd.hasOwnProperty("d")) {
				if (window.zany.key < 3 || window.zany.key == null) {
					cmd.out = "No key has been set!";
					return cmd;
				}
				let regex = /^zany\s+(?:decrypt|decode|d)\s+(.*)/;
				console.log(input);
				if (regex.test(input)) {
					let key = window.zany.key;
//					let sKey = JSON.stringify(key);

					let {encode, decode} = _zany(key);

					let content = input.replace(regex, "$1");
//					let sContent = JSON.stringify(content);

					let coded = decode(content);
//					let sCoded = JSON.stringify(coded);

					let d_r = shortid.generate(4);
					let d_k = d_r + "_" + shortid.generate(4), d_e = d_r + "_" + shortid.generate(4), d_d = d_r + "_" + shortid.generate(4);
					cmd.out = `<label for=""${d_k}">Key</label>
<input type="text" id="${d_k}" name="${d_k}">
<label for="${d_e}">Encoded</label>
<input type="text" id="${d_e}">
<label for="${d_d}">Decoded</label>
<input type="text" id="${d_d}">`;
					setTimeout(function () {
						document.querySelector("#" + d_k).value = key;
						document.querySelector("#" + d_e).value = content;
						document.querySelector("#" + d_d).value = coded;
						clipboard.writeText(coded);
					}, 20);
				} else {
					cmd.out = "You didn't put anything to decode!";
				}
			} else {
				cmd.out = `A command to encrypt content.
${zany_link}
${zany_usage}`;
			}
			return cmd;
		}, options: [
			"key", "k",
			"encrypt", "encode", "e",
			"decrypt", "decode", "d",
		],

		help: `A command to encrypt content.
${zany_link}
${zany_usage}`,
	});
	document.getElementsByName("zany")[0].checked = true;
	document.getElementsByName("zany")[0].disabled = true;
	window.loadedModules.zany = true;
};