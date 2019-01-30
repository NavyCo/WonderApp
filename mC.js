/* Created by Nicholas J. Phillips (LagSwitchedVirginity) @ 1/30/2019 */
function mC(element) {
	if (element.checked) {
		element.disabled = true;
	}
	require("./"+element.dataset.r)();
}