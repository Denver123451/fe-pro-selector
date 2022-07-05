const selector = (obj, keys) => {
        keys.forEach(key => {
        if(obj[key]) obj = obj[key];
        else obj = '';
    })
    return obj;

};

module.exports = selector;
