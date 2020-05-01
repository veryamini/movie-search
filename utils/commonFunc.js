/**
 * CommonFunc contains commonly used functions across the project
 */
class CommonFunc {

	isUndefined = (val) => {
		if (val === undefined) {
			return true;
		}
		return false;
	}
}

export default new CommonFunc;