var util = require('../util');
var objectIdRe = /^[0-9a-fA-F]{24}$/;

function mongo_id() {
    return function(value) {
        if ( util.isNoValue(value) ) return
        if (!util.isPrimitiveValue(value)) return 'FORMAT_ERROR';

        if (!(value+'').match(objectIdRe) ) return 'NOT_ID';

        return;
    }
}

module.exports = mongo_id;