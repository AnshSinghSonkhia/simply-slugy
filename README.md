# simply-slugy 🏷️

A simple and powerful slug generation library supporting **44 languages** for transliteration!

It helps creating and managing slugs. It provides utilities to convert strings into URL-friendly slugs, reverse slugs back into readable text, validate slugs, and customize slug generation with mappings and locale support. Perfect for SEO optimization and clean URL generation in your projects.

[![npm](https://img.shields.io/npm/v/simply-slugy.svg)](https://www.npmjs.com/package/simply-slugy)  [![License](https://img.shields.io/npm/l/simply-slugy.svg)](LICENSE) 

### 📌 Features

✅ Convert text to URL-friendly slugs (slugify)

✅ Convert slugs back to readable text (deslugify)

✅ Validate if a string is a valid slug

✅ Custom slug mappings for special characters

✅ Supports 44 languages for transliteration

# 📦 Installation

Install via npm

```sh
npm i simply-slugy
```

Install via yarn

```sh
yarn add simply-slugy
```


# 🚀 Usage

```js
const simp = require('simply-slugy');

// Slugify Example
console.log(simp.slugify("Hello World!"));  
        // Output: "hello-world"

// Deslugify Example
console.log(simp.deslugify("hello-world"));  
        // Output: "Hello World"

// isValidSlug Example
console.log(simp.isValidSlug("hello-world"));  
        // Output: true
console.log(simp.isValidSlug("Hello World!"));  
        // Output: false

// Custom Slugify Example
const customMap = { "&": "and", "@": "at" };
console.log(simp.customSlugify("Rock & Roll @ 2025", customMap));  
        // Output: "rock-and-roll-at-2025"

// Slugify with Locale Example  (refer the supported languages list below)
console.log(simp.slugifyWithLocale("München ist schön", "de"));   // de : German
        // Output: "muenchen-ist-schoen"

// transliterations Example 
console.log(simp.transliterations['de']); // Output: { 'ä': 'ae', 'ö': 'oe', 'ü': 'ue', 'ß': 'ss' }

console.log(simp.transliterations['fr']); // Output: { 'é': 'e', 'è': 'e', 'à': 'a', 'ç': 'c', 'ô': 'o', 'û': 'u' }

console.log(Object.keys(simp.transliterations)); // Lists all supported languages
```

# 📜 API Reference

| Function              | Description                                                                 |
|-----------------------|-----------------------------------------------------------------------------|
| `slugify(input)`      | Converts text into a slug ("Hello World" → "hello-world").                 |
| `deslugify(slug)`     | Converts a slug back to readable text ("hello-world" → "Hello World").     |
| `isValidSlug(slug)`   | Checks if a string is a valid slug. Returns `true` or `false`.             |
| `customSlugify(input, customMap)` | Custom character mapping for slug conversion.                  |
| `slugifyWithLocale(input, locale)` | Generates slugs with language-based transliteration.          |
| `transliterations[locale]` | Provides transliteration mappings for a specific language (e.g., `transliterations['de']` for German). |


# 🌍 Supported Languages for Transliteration:

| Keyword       | Language          |
|---------------|-------------------|
| ar            | Arabic            |
| bg            | Bulgarian         |
| bn            | Bengali           |
| bs            | Bosnian           |
| cs            | Czech             |
| da            | Danish            |
| de            | German            |
| el            | Greek             |
| en            | English           |
| es            | Spanish           |
| et            | Estonian          |
| fa            | Persian           |
| fi            | Finnish           |
| fr            | French            |
| hi            | Hindi             |
| hr            | Croatian          |
| hu            | Hungarian         |
| hy            | Armenian          |
| is            | Icelandic         |
| it            | Italian           |
| ja            | Japanese          |
| ko            | Korean            |
| lt            | Lithuanian        |
| lv            | Latvian           |
| mk            | Macedonian        |
| nl            | Dutch             |
| no            | Norwegian         |
| pa            | Punjabi           |
| pl            | Polish            |
| pt            | Portuguese        |
| ro            | Romanian          |
| ru            | Russian           |
| sk            | Slovak            |
| sl            | Slovenian         |
| sq            | Albanian          |
| sr            | Serbian           |
| sv            | Swedish           |
| sw            | Swahili           |
| th            | Thai              |
| tl            | Tagalog           |
| tr            | Turkish           |
| uk            | Ukrainian         |
| vi            | Vietnamese        |
| zh            | Chinese           |