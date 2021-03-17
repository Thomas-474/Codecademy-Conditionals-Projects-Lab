// 1
let raceNumber = Math.floor(Math.random() * 1000);

// 2
var registerEarly = false;

// 3
var age = 18;

// 4
if (age >= 18 && registerEarly){
  raceNumber += 1000;
};

// 5
if (age > 18 && registerEarly){
  console.log(`You will race at 9:30 am with your race number as ${raceNumber}.`);
}

// 6
else if (age > 18 && !registerEarly){
  console.log(`You will race at 11:00 am with your race number as ${raceNumber}.`);
}

// 7
else if (age < 18){
  console.log(`You will race at 12:30 pm with your race number as ${raceNumber}.`);
}

// 8

// Test:
// Runners who are 25 years old and registered early will run at 9:30 am.
// Runners who are 25 years old and did NOT register early will run at 11:00 am.
// Runners who are 16 years old and registered early will run at 12:30 pm.
// Runners who are 16 years old and did NOT register early will run at 12:30 pm.
// Runners who are 18 years old are instructed to go to the registration desk whether they registered early or not.


// 9
else{
  console.log('Go to the registration desk.');
};
