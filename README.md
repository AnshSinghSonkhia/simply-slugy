

# Usage

```js
const simp = require('simply-slugy');

// 1️⃣ Slugify Example
console.log(simp.slugify("Hello World!"));  
// Output: "hello-world"

// 2️⃣ Deslugify Example
console.log(simp.deslugify("hello-world"));  
// Output: "Hello World"

// 3️⃣ isValidSlug Example
console.log(simp.isValidSlug("hello-world"));  
// Output: true
console.log(simp.isValidSlug("Hello World!"));  
// Output: false

// 4️⃣ Custom Slugify Example
const customMap = { "&": "and", "@": "at" };
console.log(simp.customSlugify("Rock & Roll @ 2025", customMap));  
// Output: "rock-and-roll-at-2025"

// 5️⃣ Slugify with Locale Example
console.log(simp.slugifyWithLocale("München ist schön", "de"));  
// Output: "muenchen-ist-schoen"
```