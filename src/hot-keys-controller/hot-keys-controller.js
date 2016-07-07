import _ from "lodash";

import HotKey from "hot-key";

const KEY_CODE_TO_HOT_KEY_MAP = _.zipObject(_.map(HotKey.values, "key"), HotKey.values);

export default class HotKeysController {
	static get hotKeysList() {
		return HotKey.values;
	}

	constructor(indexPage) {
		document.addEventListener("keydown", onKeyDown.bind(this, indexPage));
	}
}

function onKeyDown(indexPage, event) {
	let hotKey = getHotKey(event);
	if (hotKey && hotKey.isActivated(event)) {
		hotKey.handle(indexPage);
		event.preventDefault();
		event.stopPropagation();
	}
}

function getHotKey(event) {
	return event.key && KEY_CODE_TO_HOT_KEY_MAP[event.key.toUpperCase()];
}
