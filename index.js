// Write your code in this file!
function scuberGreetingForFeet (someValue) {
  if (someValue <= 400) {
    return 'This one is on me!'
  }
  else if (someValue >= 2000) {
    if (someValue > 2500) {
      return 'No can do.'
    }
    else {
    return 'I will gladly take your thirty bucks.'
    }
  }
}

let message;
function ternaryCheckCity(city) {
  city === 'NYC' ?  message = 'Ok, sounds good.' :  message = 'No go.'
  return message
}
const trait = 'generous'

let response;
function switchOnCharmFromTip(trait) {
  switch (trait) {
    case 'generous':
    response = 'Thank you so much.';
    break;
    case 'not as generous':
    response = 'Thank you.';
    break;
    default:
    response = 'Bye.';
  }
  return response
}
