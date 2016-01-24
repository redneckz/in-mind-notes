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
	created() {
		this[UNOBSERVE_METHOD] = publicKeyStorage.observe(() => {
			this.entries = publicKeyStorage.entries;
			this.publicKey = publicKeyStorage.getPublicKey(this.publicKeyName);
		});
	},
	data() {
		return {
			entries: publicKeyStorage.entries
		};
	},
	watch: {
		publicKeyName(publicKeyName) {
			this.publicKey = publicKeyStorage.getPublicKey(publicKeyName);
		}
	},
	computed: {
		entriesDownloadHref() {
			if (this.entries && this.entries.length) {
				let content = JSON.stringify(this.entries);
				return `data:text/json;charset=utf-8,${encodeURIComponent(content)}`;
			} else {
				return "";
			}
		}
	},
	methods: {
		openFileChooserForImport() {
			getFileInputForImport.call(this).click();
		},
		importPublicKeys() {
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
		exportPublicKeys() {
			if (publicKeyStorage.isNotEmpty) {
				this.$el.querySelector("a[download]").click();
			} else {
				swal("No public keys to export");
			}
		}
	},
	destroyed() {
		this[UNOBSERVE_METHOD]();
	}
});

function getFileInputForImport() {
	return this.$el.querySelector("input[type=file]");
}
