const DEFAULT_ALPHABET_REGEXP = /[0-9a-zA-Z_]/;
const DEFAULT_SECRET_LENGTH_VARIANT = {secretLength: 16, label: "Medium"};

const ALPHABET_REGEXP_LIST = [
	/[0-9a-zA-Z~!@#$%^&*_=]/,
	DEFAULT_ALPHABET_REGEXP,
	/[0-9a-z_]/, /[0-9]/
];

const SECRET_LENGTH_VARIANT_LIST = [
	{secretLength: 8, label: "Short"},
	DEFAULT_SECRET_LENGTH_VARIANT,
	{secretLength: 32, label: "Long"}
];

export {DEFAULT_ALPHABET_REGEXP, DEFAULT_SECRET_LENGTH_VARIANT,
		ALPHABET_REGEXP_LIST, SECRET_LENGTH_VARIANT_LIST};
