import HOT_KEYS_LIST from "./hot-keys-list";

const KEY_CODE_TO_HOT_KEY_MAP = _.zipObject(_.map(HOT_KEYS_LIST, "keyCode"), HOT_KEYS_LIST);

$(function () {
	$(document).on("keydown", event => {
		let hotKey = getHotKey(event);
		if (hotKey && hotKey.isActivated(event)) {
			hotKey.handle(event);
			event.preventDefault();
			event.stopPropagation();
		}
	});
});

function getHotKey(event) {
	return KEY_CODE_TO_HOT_KEY_MAP[event.which];
}
