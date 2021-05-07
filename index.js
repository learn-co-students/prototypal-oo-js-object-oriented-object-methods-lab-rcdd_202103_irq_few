function  BoardMember(name, homeState,training) {
  this.name = name;
  this.homeState = homeState;
  this.training = training;
}

BoardMember.prototype.veto = function(){
  return "No, I must disagree";
}
let  polishedBoardMember = new  BoardMember("Mr. Polished", "New York", "law")

polishedBoardMember.veto();

BoardMember.prototype.approve = function(){

  return "You can do that!";
}
polishedBoardMember.approve();

BoardMember.prototype.doCharity = function(){
  return `I like to help people.`}
polishedBoardMember.doCharity();

BoardMember.prototype.releasePressStatement = function(){
  return `You will see great things from Scuber.`;
 }
polishedBoardMember.releasePressStatement();

BoardMember.prototype.sayHi = function(){

  return "Hi, my name is " + this.name + ". I am from " + this.homeState + ", and I was trained in " + this.training +".";
  }
polishedBoardMember.sayHi();
