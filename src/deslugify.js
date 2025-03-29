function deslugify(slug, separator = '-') {
    if (typeof slug !== 'string') return '';
    return slug.split(separator).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
module.exports = deslugify;