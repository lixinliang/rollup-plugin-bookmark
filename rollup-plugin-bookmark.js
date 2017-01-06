'use strict';

module.exports = function bookmark () {
    return {
        name : 'bookmark',
        transformBundle : function ( code ) {
            return {
                code : 'javascript:' + code,
            };
        },
    };
};
