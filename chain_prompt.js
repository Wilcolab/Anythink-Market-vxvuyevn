/**
 * Converts a string to kebab-case format
 * @param {string} input - The string to convert
 * @returns {string} - The kebab-case formatted string
 * @throws {Error} - If input is invalid
 */
function toKebabCase(input) {
    // Validate input is a string
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }

    // Trim leading and trailing whitespace
    const trimmed = input.trim();

    // Check if input is empty
    if (trimmed.length === 0) {
        throw new Error('Input cannot be empty');
    }

    // Check for invalid characters (only allow letters and spaces)
    if (!/^[a-zA-Z\s]+$/.test(trimmed)) {
        throw new Error('Input can only contain alphabetic characters and spaces');
    }

    // Convert to lowercase, replace multiple spaces with single space, then replace spaces with hyphens
    return trimmed
        .toLowerCase()
        .replace(/\s+/g, '-');
}

// Example usages and expected outputs
console.log(toKebabCase('Hello World'));           // 'hello-world'
console.log(toKebabCase('JavaScript is Great'));   // 'javascript-is-great'
console.log(toKebabCase('  multiple   spaces  ')); // 'multiple-spaces'
console.log(toKebabCase('single'));                // 'single'

// Error handling examples
try {
    toKebabCase('Hello123');                         // Throws error: contains numbers
} catch (e) {
    console.error(e.message);
}

try {
    toKebabCase('Hello@World');                      // Throws error: contains special character
} catch (e) {
    console.error(e.message);
}

try {
    toKebabCase('');                                 // Throws error: empty string
} catch (e) {
    console.error(e.message);
}

try {
    toKebabCase(123);                                // Throws error: not a string
} catch (e) {
    console.error(e.message);
}