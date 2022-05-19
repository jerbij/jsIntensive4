
const concatStrings = function concatStrings(param, separator) {

    if(concatStrings._strings === undefined) {
        concatStrings._strings = [];
    }
    if(concatStrings._separator === undefined) {
        concatStrings._separator = '';
    }

    if(separator !== undefined && separator !== null) {
        concatStrings._separator = separator;
    }

    if(param) {
        if(typeof param === 'string') {
            concatStrings._strings.push(param);
            return concatStrings;
        } else {
            return concatStrings._strings.join(concatStrings._separator);
        }

    } else {
        return concatStrings._strings.join(concatStrings._separator);
    }
}
