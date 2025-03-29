const removeDiacritics = require('diacritics').remove;
const transliterations = require('./transliterations');
const slugify = require('./slugify');
function slugifyWithLocale(input, locale = 'en') {
    if (typeof input !== 'string') return '';
    let output = removeDiacritics(input.toLowerCase());
    if (transliterations[locale]) {
        for (const [key, value] of Object.entries(transliterations[locale])) {
            output = output.split(key).join(value);
        }
    }
    return slugify(output);
}
module.exports = slugifyWithLocale;