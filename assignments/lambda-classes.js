// CODE here for your Lambda Classes
// ## `lambda-classes` - We need a roster of Lambda School personnel. Build it!

// * We have a school to build here! This project will get you used to thinking about classes in JavaScript and building them from a brand new data set.
// * Lambda personnel can be broken down into three different types of `people`.
//   * **Instructors** - extensions of Person
// *Team Leads** - extensions of Instructors
//   * **Students** - extensions of Person

// * **IMPORTANT** - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes. For example:

// ```js
// const fred = new Instructor({
//   name: 'Fred',
//   location: 'Bedrock',
//   age: 37,
//   favLanguage: 'JavaScript',
//   specialty: 'Front-end',
//   catchPhrase: `Don't forget the homies`
// });
// ```

// #### Person

// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props

// #### Instructor

// * Now that we have a Person as our base class, we'll build our Instructor class.
// * Instructor uses the same attributes that have been set up by Person
// * Instructor has the following unique props:
//   * `specialty` what the Instructor is good at i.e. 'redux'
//   * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
//   * `catchPhrase` i.e. `Don't forget the homies`
// * Instructor has the following methods:
//   * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
//   * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'

// #### Student

// * Now we need some students!
// * Student uses the same attributes that have been set up by Person
// * Student has the following unique props:
//   * `previousBackground` i.e. what the Student used to do before Lambda School
//   * `className` i.e. CS132
//   * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// * Student has the following methods:
//   * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
//   * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
//   * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`

// #### TeamLeads

// * Now that we have instructors and students, we'd be nowhere without our PM's
// * TeamLeads are extensions of Instructors
// * TeamLeads have the following unique props:
//   * `gradClassName`: i.e. CS1
//   * `favInstructor`: i.e. Sean
// * TeamLeads have the following Methods:
//   * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
//   * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`

// #### Stretch Problem

// * Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
// * Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
// * Add a graduate method to a student.
//   * This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
//   * If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.


//***********Code Here**********//
// Person
class Person {
    constructor(atr) {
        this.name = atr.name;
        this.age = atr.age;
        this.location = atr.location;
    }
    speak() {
        return `Hello, my name is ${this.name}, I am from ${this.location}!`
    }
}
// Instructor
class Instructor extends Person {
    constructor(teach) {
        super(teach);
        this.specialty = teach.specialty;
        this.favLanguage = teach.favLanguage;
        this.phrase = teach.phrase;
    }
    demo(subject) {
        console.log(`${this.name}: Today we are learning about ${subject}`);
    }
    grade(student, subject) {
            console.log(`${this.name}: ${student}'s ${subject} code received a perfect score!`);
        }
        // scoreGrade() {

    // }
}
// Students
class Students extends Person {
    constructor(student) {
        super(student);
        this.previousBackground = student.previousBackground;
        this.className = student.className;
        this.favSubjects = student.favSubjects;
        this.currentSubject = student.currentSubject;
        this.grade = student.grade;
    }
    listSubjects() {
        return JSON.stringify(this.favSubjects);
    }
    PRAssingment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun the sprint challenge for ${subject}`);
    }
    graduate() {
        if (this.grade >= 70) {
            return `${this.name} is graduating!`
        } else {
            return `${this.name} failed and WILL NOT graduate!`
        }
    }
}
//TeamLeads
class TeamLeads extends Instructor {
    constructor(tl) {
        super(tl);
        this.gradClassName = tl.gradClassName;
        this.favInstructor = tl.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, "@channel its stand-up time!"`);
    }
    debugCode(student, subject) {
        console.log(`${this.name} debugs ${student}'s code on ${subject}`);
    }
}
//Objects
///Instuctors
const Dumbledore = new Instructor({
    name: 'Albus Dumbledore',
    location: 'Hogwarts',
    age: 97,
    favLanguage: 'Python',
    specialty: 'Machine Learning',
    phrase: "Dunbledore's catch phrase is 'Happiness can be found, even in the darkest times, if one only remembers to turn on the light.'"
});
const Gandalf = new Instructor({
    name: 'Gandalf the White',
    location: 'Middle Earth',
    age: 124,
    favLanguage: 'Ruby on Rails',
    specialty: 'Front End',
    catchPhrase: "Gandalf's catch phrase is 'For even the very wise cannot see all ends.'"
});
///Students
const Link = new Students({
    name: 'Link',
    location: 'Baltimore',
    previousBackground: 'Singin and dancin on the Corny Collins Show after school!',
    className: 'DSFT12',
    favSubjects: {
        sub1: 'C++',
        sub2: 'SQL',
        sub3: 'Java',
    },
    currentSubject: 'Perl',
    grade: 85,
});

const Audrey = new Students({
    name: 'Audrey',
    location: 'Skid Row',
    previousBackground: 'Florist',
    className: 'UXFT12',
    favSubjects: {
        sub1: 'InDesign',
        sub2: 'DreamWeaver',
        sub3: 'CSS3',
    },
    currentSubject: 'Ruby',
    grade: 92,
});

const Berger = new Students({
    name: 'Berger',
    location: 'Manchester, England-England',
    previousBackground: "Everyone has a past man, what's it to you?",
    className: 'WEBPT23',
    favSubjects: {
        sub1: 'LESS',
        sub2: 'JavaScript',
        sub3: 'Ruby',
    },
    currentSubject: 'PHP',
    grade: 45,
});
////TL's
const Doby = new TeamLeads({
    name: 'Doby',
    location: 'most inconvenient place possible',
    age: 35,
    favLanguage: 'SQL',
    specialty: 'Data Mining',
    catchPhrase: "Doby's catch phrase is 'Remember, Doby is your friend.'",
    gradClassName: 'DS05',
    favInstructor: 'Albus Dumbledore',
});
const Sam = new TeamLeads({
    name: 'Samwise Gamgee',
    location: 'The Shire',
    age: 25,
    favLanguage: 'JavaScript',
    specialty: 'Web Design',
    catchPhrase: "Samwise's catch phrase is 'I'll be with you, until the end.'",
    gradClassName: 'CS15',
    favInstructor: 'Gandalf the White',
});

console.log(Dumbledore.phrase);
console.log(Gandalf.demo("Java"));
console.log(Link.listSubjects());
console.log(Doby.grade("Harry Potter", "Python"));
console.log(Berger.speak());
console.log(Link.speak());
console.log(Audrey.PRAssingment("SQL"));
console.log(Link.sprintChallenge("Node.js"));
console.log(Sam.standUp("WEBFT14"));
console.log(Sam.debugCode("Gollum", "Perl"));
console.log(Audrey.graduate());
console.log(Berger.graduate());