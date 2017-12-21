function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (let i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i])
  }
  return array
}

function johnLennonFacts() {
  const facts = [
    "He was the last Beatle to learn to drive",
    "He was never a vegetarian",
    "He was a choir boy and boy scout",
    "He hated the sound of his own voice"]
  var i = 0
  while (facts[i]) {
    return facts[i] + "!!!"
    //facts.splice(0, 1, facts[0] + "!!!")
    //facts.splice(i, 1, facts[i] + "!!!")
    i++;
  }
  return facts
}

function iLoveTheBeatles(n) {
  var array = []
  do {
    array.push("I love the Beatles!")
  } while (n++ && n < 15)
  return array
}
