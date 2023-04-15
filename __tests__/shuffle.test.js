const shuffle = require("../src/shuffle");



// shuffle should mix up the selection of 5 cards to allow for you to select different bots, it will any bots that are in your current duo and require you to redraw

const array = ['a','b','c','d']

test("shuffle should check that it returns an array of the same length as the argument sent in,", () => {
  let final = shuffle(array)
  expect(array.length).toEqual(final.length);
   
});

test("check that all the same items are in the array", () => {
  let result = shuffle(array)
  expect(array.sort()).toEqual(result.sort());
});


test("that items have been shuffled", () => {
  let result = shuffle(array);
  expect(result).not.toEqual(array);
});
