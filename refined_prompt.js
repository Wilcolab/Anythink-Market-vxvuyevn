/**
 * Converts a string containing multiple words into camelCase format.
 * Only accepts alphabetic characters and spaces as valid input.
 * 
 * @param {string} input - The string to convert to camelCase
 * @returns {string} The camelCase formatted string
 * @throws {Error} If input is invalid (non-string, empty, contains numbers/special chars)
 */
function toCamelCase(input) {
  // Validate that input is a string
  if (typeof input !== 'string') {
    throw new Error('Invalid input: Input must be a string');
  }
  
  // Trim the input to remove leading/trailing spaces
  const trimmedInput = input.trim();
  
  // Check if input is empty or contains only spaces
  if (trimmedInput.length === 0) {
    throw new Error('Invalid input: Input cannot be empty or contain only spaces');
  }
  
  // Validate that input contains only alphabetic characters and spaces
  const validPattern = /^[a-zA-Z\s]+$/;
  if (!validPattern.test(trimmedInput)) {
    throw new Error('Invalid input: Input must contain only alphabetic characters and spaces');
  }
  
  // Split by one or more spaces and filter out empty strings
  const words = trimmedInput.split(/\s+/).filter(word => word.length > 0);
  
  // Convert to camelCase
  return words
    .map((word, index) => {
      // Convert entire word to lowercase
      const lowerWord = word.toLowerCase();
      
      // Keep first word lowercase
      if (index === 0) {
        return lowerWord;
      }
      
      // Capitalize first letter of subsequent words
      return lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1);
    })
    .join('');
}

// Test cases - Valid inputs
console.log('Valid inputs:');
console.log(toCamelCase("hello world"));           // "helloWorld"
console.log(toCamelCase(" cup board "));           // "cupBoard"
console.log(toCamelCase("first   name"));          // "firstName"
console.log(toCamelCase("HELLO WORLD"));           // "helloWorld"

// Test cases - Invalid inputs
console.log('\nInvalid inputs (should throw errors):');
try {
  console.log(toCamelCase("6 and tea"));
} catch (e) {
  console.log('Error:', e.message);
}

try {
  console.log(toCamelCase("hello-world"));
} catch (e) {
  console.log('Error:', e.message);
}

try {
  console.log(toCamelCase(""));
} catch (e) {
  console.log('Error:', e.message);
}

try {
  console.log(toCamelCase("   "));
} catch (e) {
  console.log('Error:', e.message);
}

try {
  console.log(toCamelCase(123));
} catch (e) {
  console.log('Error:', e.message);
}

try {
  console.log(toCamelCase("user_id"));
} catch (e) {
  console.log('Error:', e.message);
}
