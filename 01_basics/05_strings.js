// const sName ="jeevan-kumar"
// const rollnum = 90

//string interpolation

// console.log(`student name is ${sName} and student roll number is ${rollnum}`);

//  let newUser = "Mr.jeevan-katiyar";

// console.log(newUser.length);
//console.log(newUser.toUpperCase());
// console.log(newUser.charAt(3));
// console.log(newUser.indexOf('k'));

//substring
// const newString = newUser.substring(0,13);
// // the last index value is not included
// //cannot give negatice value
// console.log(newString);

//The slice() method of String values extracts a section of this string and returns it as a new string, without modifying the original string.

// styntax
// slice(indexStart)
// slice(indexStart, indexEnd)

// const newString2 = newUser.slice(-8,4)
// negative values can be given 
// console.log(newString2);

//trim : removes the extra spaces from the start and the end 
//The trim() method of String values removes whitespace from both ends of this string and returns a new string, without modifying the original string.

// let newUser3 = "    nirdosh    "
// console.log(newUser3);
// console.log(newUser3.trim());//removes the spaces 
// console.log(newUser3.trimEnd());

// let example = newUser3.trimStart();
// console.log(example);
// console.log(example.trimEnd());

//replace
//syntax: replace(pattern, replacement)

// const exampleReplace = "jeevan is now preparing for CAPF interview"
// console.log(exampleReplace.replace('CAPF','job'));

//replaceAll :The replaceAll() method of String values returns a new string with all matches of a pattern replaced by a replacement

// const paragraph = " world is a beautiful place , world is filled with talented people, world is subcontinent"

// console.log(paragraph.replaceAll('world','india'));c