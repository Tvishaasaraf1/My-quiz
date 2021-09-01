class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    question.hide()
    background("turquoise")
    textSize(30)
    text("Results",340,50)
    Contestant.getPlayerInfo()
    if(allContestants!==undefined){
      var y = 230
      for(var i in allContestants){
var answer = "2"

    if(answer===allContestants[i].answer){
      fill("green")
} else{
  fill("red")
}
y = y+30
text(allContestants[i].name+":"+allContestants[i].answer,250,y)
      }
      
    }
    
  }

}
