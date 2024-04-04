const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  // map iterates thro' the sentences / items of the array to return individual sentences
  return tutorials.map(tutorial => {
    // run .split to break sentence where there's space into individual words
    return tutorial.split(" ").map(word => {
      // run .charAt to capitalize 1st letter
      return word.charAt(0).toUpperCase() + word.substring(1);
    // run join to merge sentences leaving a space between words
  }).join(" ");
  });
  return tutorials
  
}

// ref: https://www.freecodecamp.org/news/how-to-capitalize-words-in-javascript/