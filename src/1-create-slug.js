// Return a URL-friendly "slug": lowercase with hyphens instead of spaces.
// Return null if the title contains banned characters: "!", "#", "?"
const createSlug = (title) => {
title.toLowercase
  for(let i = 0; i < title.length;i++){
  if (title[i] === " ") {
    return '-'
   } 

  } 
};
console.log(createSlug("hello there"))
//module.exports = {
 // createSlug,
//};

