const removeDiacritics = require('diacritics').remove;
function slugify(input, options = {}) {
    if (typeof input !== 'string') return '';
    const separator = options.separator || '-';
    return removeDiacritics(input)
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, separator)
        .replace(new RegExp(`^${separator}|${separator}$`, 'g'), '');
}
module.exports = slugify;