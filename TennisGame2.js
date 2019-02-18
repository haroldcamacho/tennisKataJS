var TennisGame2 = function(player1Name, player2Name) {
    this.Player1CurrentPoints = 0;
    this.Player2CurrentPoints = 0;

    this.Player1Result = "";
    this.Player2Result = "";

    this.player1Name = player1Name;
    this.player2Name = player2Name;
};


TennisGame2.prototype.checkIfScoresAreTied=function(){
    if (this.Player2CurrentPoints===this.Player1CurrentPoints)
        return true;
    return false; 
};

TennisGame2.prototype.calculateResultIfThereIsATie=function(){
    let result;
    switch (this.Player1CurrentPoints) {
        case 1:
            result="Fifteen-All";
            break;
        case 2:
            result="Thirty-All";
            break;
        case 3:
            result="Deuce";
            break;
        default:
            result="Love-All";
            break;
    }
    return result;
};

TennisGame2.prototype.calculateResultFromTheScore=function(score){
    let result;
    switch (score) {
        case 1:
            result="Fifteen";
            break;
        case 2:
            result="Thirty";
            break;
        case 3:
            result="Forty";
            break;
        default:
            result="Love";
            break;
    }
    return result;
};

TennisGame2.prototype.calculateResultIfScoresAreNotTied = function(){
    let result1=this.calculateResultFromTheScore(this.Player1CurrentPoints);
    let result2=this.calculateResultFromTheScore(this.Player2CurrentPoints);
    return result1+"-"+result2;
}

TennisGame2.prototype.getScore = function() {
    let score = "";

    if(this.checkIfScoresAreTied()){
        score=this.calculateResultIfThereIsATie();
    }
    else{
        score=this.calculateResultIfScoresAreNotTied();
    }
    if (this.Player1CurrentPoints > this.Player2CurrentPoints && this.Player2CurrentPoints >= 3) {
        score = "Advantage player1";
    }

    if (this.Player2CurrentPoints > this.Player1CurrentPoints && this.Player1CurrentPoints >= 3) {
        score = "Advantage player2";
    }

    if (this.Player1CurrentPoints >= 4 && this.Player2CurrentPoints >= 0 && (this.Player1CurrentPoints - this.Player2CurrentPoints) >= 2) {
        score = "Win for player1";
    }
    if (this.Player2CurrentPoints >= 4 && this.Player1CurrentPoints >= 0 && (this.Player2CurrentPoints - this.Player1CurrentPoints) >= 2) {
        score = "Win for player2";
    }
    return score;
};

TennisGame2.prototype.SetP1Score = function(number) {
    var i;
    for (i = 0; i < number; i++) {
        this.P1Score();
    }
};

TennisGame2.prototype.SetP2Score = function(number) {
    var i;
    for (i = 0; i < number; i++) {
        this.P2Score();
    }
};

TennisGame2.prototype.P1Score = function() {
    this.Player1CurrentPoints++;
};

TennisGame2.prototype.P2Score = function() {
    this.Player2CurrentPoints++;
};

TennisGame2.prototype.wonPoint = function(player) {
    if (player === "player1")
        this.P1Score();
    else
        this.P2Score();
};

if (typeof window === "undefined") {
    module.exports = TennisGame2;
}