function toCamelCase(str) {
  // Split by spaces, underscores, or hyphens
  const words = str.split(/[\s_-]+/);
  
  // Convert to camelCase
  return words
    .map((word, index) => {
      // Convert word to lowercase first
      const lowerWord = word.toLowerCase();
      
      // Keep first word lowercase, capitalize subsequent words
      if (index === 0) {
        return lowerWord;
      }
      
      // Capitalize first letter of subsequent words
      return lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1);
    })
    .join('');
}

// Test cases
console.log(toCamelCase('first name'));        // firstName
console.log(toCamelCase('user_id'));           // userId
console.log(toCamelCase('SCREEN_NAME'));       // screenName
console.log(toCamelCase('mobile-number'));     // mobileNumber

function toDotCase(str) {
  // Split by spaces, underscores, or hyphens
  const words = str.split(/[\s_-]+/);
  
  // Convert to dot.case (all lowercase, joined by dots)
  return words
    .map(word => word.toLowerCase())
    .filter(word => word.length > 0)
    .join('.');
}

// Test cases
console.log('\n--- dot.case examples ---');
console.log(toDotCase('first name'));        // first.name
console.log(toDotCase('user_id'));           // user.id
console.log(toDotCase('SCREEN_NAME'));       // screen.name
console.log(toDotCase('mobile-number'));     // mobile.number
console.log(toDotCase('hello world'));       // hello.world

/**
 * Converts a string to kebab-case format.
 * 
 * @param {string} input - The string to convert
 * @returns {string} The kebab-case formatted string
 * @throws {Error} If input is invalid
 */
function toKebabCase(input) {
  // Step 3: Validate that input is a string
  if (typeof input !== 'string') {
    throw new Error('Invalid input: Input must be a string');
  }
  
  // Step 2: Trim leading and trailing whitespace
  const trimmedInput = input.trim();
  
  // Step 3: Check if input is empty
  if (trimmedInput.length === 0) {
    throw new Error('Invalid input: Input cannot be empty or contain only spaces');
  }
  
  // Step 3: Validate that input contains only alphabetic characters and spaces
  const validPattern = /^[a-zA-Z\s]+$/;
  if (!validPattern.test(trimmedInput)) {
    throw new Error('Invalid input: Input must contain only alphabetic characters and spaces');
  }
  
  // Step 1 & 2: Convert to lowercase, split by spaces, and join with hyphens
  // Split by one or more spaces to handle multiple spaces correctly
  return trimmedInput
    .toLowerCase()              // Convert all letters to lowercase
    .split(/\s+/)              // Split by one or more spaces
    .filter(word => word.length > 0)  // Remove empty strings
    .join('-');                // Join words with hyphens
}

// Step 4: Example usages and expected outputs
console.log('\n--- kebab-case examples ---');

// Valid inputs
console.log(toKebabCase('hello world'));           // hello-world
console.log(toKebabCase('Hello World'));           // hello-world
console.log(toKebabCase('  cup board  '));        // cup-board
console.log(toKebabCase('first   name'));         // first-name
console.log(toKebabCase('SCREEN NAME'));          // screen-name

// Invalid inputs - will throw errors
console.log('\n--- Error handling examples ---');
try {
  console.log(toKebabCase('hello-world'));
} catch (e) {
  console.log('Error:', e.message);  // Contains special character (hyphen)
}

try {
  console.log(toKebabCase('user123'));
} catch (e) {
  console.log('Error:', e.message);  // Contains numbers
}

try {
  console.log(toKebabCase(''));
} catch (e) {
  console.log('Error:', e.message);  // Empty string
}

try {
  console.log(toKebabCase(123));
} catch (e) {
  console.log('Error:', e.message);  // Not a string
}
