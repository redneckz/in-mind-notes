import publicKeyStorage from "public-key-storage";

const UNOBSERVE_METHOD = Symbol();

export default Vue.extend({
	template: "#public-key-reader-field-template",
	props: {
		publicKey: {
			type: String,
			required: true
		},
		publicKeyName: {
			type: String,
			required: true
		},
		tabIndex: {
			type: String,
			default: "-1"
		}
	},
	created: function () {
		this[UNOBSERVE_METHOD] = publicKeyStorage.observe(() => {
			this.entries = publicKeyStorage.entries;
			this.publicKey = publicKeyStorage.getPublicKey(this.publicKeyName);
		});
	},
	data: function () {
		return {
			entries: publicKeyStorage.entries
		};
	},
	watch: {
		publicKeyName: function (publicKeyName) {
			this.publicKey = publicKeyStorage.getPublicKey(publicKeyName);
		}
	},
	computed: {
		entriesDownloadHref: function () {
			if (this.entries && this.entries.length) {
				let content = JSON.stringify(this.entries);
				return `data:text/json;charset=utf-8,${encodeURIComponent(content)}`;
			} else {
				return "";
			}
		}
	},
	methods: {
		openFileChooserForImport: function () {
			getFileInputForImport.call(this).click();
		},
		importPublicKeys: function () {
			let fileInput = getFileInputForImport.call(this);
			if (!fileInput.files || !fileInput.files.length) {
				return;
			}
			let fileReader = new FileReader();
			fileReader.onload = () => {
				try {
					publicKeyStorage.entries = JSON.parse(fileReader.result);
				} catch (ex) {
					console.warn(ex);
				}

			};
			fileReader.readAsText(fileInput.files[0]);
		},
		exportPublicKeys: function () {
			this.$el.querySelector("a[download]").click();
		}
	},
	destroyed: function () {
		this[UNOBSERVE_METHOD]();
	}
});

function getFileInputForImport() {
	return this.$el.querySelector("input[type=file]");
}
