'use strict';
let userName = prompt ('Hi there, whats your name ?');
alert ('Nice to meet you '+ userName + ' my name is Tamara');
alert (' lets see how much can you guess about me ^_^ , please answer only with a (y) or (n) ');


// first question //
let numOfFriends = prompt ('lets start with the first question , do i have more than one best friend ? y/n ');
numOfFriends = numOfFriends.toLowerCase();
if (numOfFriends === 'y'){
  //console.log('1st q answer is correct');
  alert ('Yes , that is correct , thier names are Roaya and Misaa' + ' good job '+ userName );
} else {
  //console.log('1st q answer is incorrect');
  alert ('I am sorry , it is the wrong answer , it is 2021 you can have more than one best friend XD , I have 2');
}

// second question //
let animeFan = prompt ('so '+userName+' do you think I like to watch anime ? y/n');
animeFan = animeFan.toLowerCase();
if (animeFan === 'y'){
  //console.log('2nd q answer is correct');
  alert ('Yes good job , i do love anime , i watch it all the time , you should try watching it too '+ userName);
} else {
  //console.log('2nd q answer is incorrect');
  alert ('Noooo , i love anime T-T');
}

// third question //
let gameFan = prompt ('now since we are talking about geeky stuff , do you think i like video games? y/n');
gameFan = gameFan.toLowerCase();
if (gameFan === 'y'){
  //console.log('3rd q answer is correct');
  alert ('Yeees I am a gamer ');
} else {
  //console.log('3rd q answer is incorrect');
  alert ('no ,that was an easy one , most anime fans are also gamers T-T');
}

// fourth question //
let artFan = prompt ('How about drawing , do I like to draw ? y/n');
artFan = artFan.toLowerCase();
if (artFan === 'y'){
  //console.log('4th q answer is correct');
  alert ('yeah , I draw a little digitally , I am not very good at it though XD');
} else {
  //console.log('4th q answer is incorrect');
  alert ('incorrect , I actually draw a little in my free time, sorry '+ userName);
}

// fifth question //
let birthDate = prompt ('here is a tricky question , there is an anime character named Tama the cat ,we share the same initials but `not` the same birth date ? y/n');
birthDate= birthDate.toLowerCase();
if (birthDate === 'y'){
  //console.log('5th q answer is incorrect');
  alert ('sorry '+ userName+ ' we do share the same initials and birth date which is 28th of june');
} else {
  //console.log('5th q answer is correct');
  alert ('yup , and that is why i call myself Tama , there is a picture for this cat in the website ^_^ ');
}

alert (' Thank you for playing along '+ userName +' This was fun ^_^');

