const slugify = require('./slugify');
function customSlugify(input, customMap = {}) {
    if (typeof input !== 'string') return '';
    let output = input.toLowerCase();
    for (const [key, value] of Object.entries(customMap)) {
        output = output.split(key).join(value);
    }
    return slugify(output);
}
module.exports = customSlugify;