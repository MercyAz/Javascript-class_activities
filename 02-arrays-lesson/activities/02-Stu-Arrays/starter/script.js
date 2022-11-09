// WRITE YOUR CODE HERE
var studentNames = ['Martin','lucy' ,'Jordan','Faith','Grace', 'Sam', 'Carol', 'Ellie'];
var totalStudents = [studentNames.length];
var WelcomeQuote = ['Welcome to the class'];
var NewStudent = studentNames[0];
console.log('This class has ' + totalStudents + ' students');

//for (let i = 1; i < studentNames.length; i++) {
// console.log( 'Welcome to the class ' + studentNames[i] );
//  }

console.log(WelcomeQuote + ' ' + studentNames[0])
console.log(WelcomeQuote + ' ' + studentNames[1])
console.log(WelcomeQuote + ' ' + studentNames[2])
console.log(WelcomeQuote + ' ' + studentNames[3])
console.log(WelcomeQuote + ' ' + studentNames[4])
console.log(WelcomeQuote + ' ' + studentNames[5])
console.log(WelcomeQuote + ' ' + studentNames[6])
console.log(`${WelcomeQuote} ${studentNames[7]}`)

if (NewStudent != studentNames[0])
console.log('We have a new student');
else { console.log('We are updated')}