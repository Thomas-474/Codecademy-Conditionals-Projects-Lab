// 1
var userName = 'Jane';

// 2
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

// 3
var userQuestion = 'Will I become a werewolf tonight?';

// 4
userName ? console.log(`${userName} asked: ${userQuestion}`) : console.log(`The user asked: ${userQuestion}`);

// 5
var randomNumber = Math.floor(Math.random() * 8);

// 6
var eightBall = randomNumber

// 7
switch (eightBall){
  case 0:
  console.log('It is certain');
  break;

  case 1:
  console.log('It is decidedly so');
  break;

  case 2:
  console.log('Reply hazy try again');
  break;

  case 3:
  console.log('Cannot predict now');
  break;

  case 4:
  console.log('Do not count on it');
  break;

  case 5:
  console.log('My sources say no');
  break;

  case 6:
  console.log('Outlook not so good');
  break;

  case 7:
  console.log('Signs point to yes');
  break;

  default:
  console.log('Error!');
  break;
}

// 8
console.log(eightBall);
