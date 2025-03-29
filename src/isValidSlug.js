function isValidSlug(slug, separator = '-') {
    if (typeof slug !== 'string') return false;
    return new RegExp(`^[a-z0-9]+(${separator}[a-z0-9]+)*$`).test(slug);
}
module.exports = isValidSlug;