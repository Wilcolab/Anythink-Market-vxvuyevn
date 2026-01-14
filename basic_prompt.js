function toCamelCase(word1, word2) {
    return word1.toLowerCase() + word2.charAt(0).toUpperCase() + word2.slice(1).toLowerCase();
}

// Example usage:
console.log(toCamelCase("cup", "board"));  // Output: "cupboard"
console.log(toCamelCase("hello", "world")); // Output: "helloWorld"