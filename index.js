function scuberGreetingForFeet(feet){
  // Write your code here!
      let result
  if (feet <= 400){
      result  = 'This one is on me!'
      return result
  } 
  else if (feet>2500){
    return 'No can do.'
  }
  else if(feet > 2000){
    result='I will gladly take your thirty bucks.'
    return result
  }
}

// input as a parameter
// check if input is gt 400
// return result
console.log(scuberGreetingForFeet(2501));


function ternaryCheckCity(city){
  // Write your code here!
      let result
     return city === 'NYC'?'Ok, sounds good.' :'No go.'


// input as parameter
// check if input is NYC
// return result 

}

function switchOnCharmFromTip(tip){
  // Write your code here!

  switch(tip){
      case 'generous':
        return 'Thank you so much.'
      case 'not as generous':
        return 'Thank you.'      
      default :
        return 'Bye.'
}




  //input as parameter
  //check if tip is generous or not
  //return appropriate result
}