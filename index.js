// code your solution here

function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  console.log(saturdayFun());
  
  function mondayWork(work="go to the office") {
    return `This Monday, I will ${work}.`;
  }
  console.log(mondayWork());
  
  function wrapAdjective(symbol="*") {
    return ((adjective="special") => `You are ${symbol}${adjective}${symbol}!`);
  }
  console.log(wrapAdjective("99")("superduper"));
  