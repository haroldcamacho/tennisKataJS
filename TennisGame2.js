var TennisGame2 = function (player1Name, player2Name) {
    this.Player1CurrentPoints = 0;
    this.Player2CurrentPoints = 0;

    this.Player1Result = "";
    this.Player2Result = "";

    this.player1Name = player1Name;
    this.player2Name = player2Name;
};

TennisGame2.prototype.calculateCurrentGameScore = function () {
    let score = "";
    if (this.checkIfAnyPlayerHasWon()) {
        score = this.calculateWhichPlayerWon();
    } else {
        if (this.checkIfPlayerPointsAreTied()) {
            score = this.calculateScoreForTiedPoints();
        } else if (this.checkIfAnyPlayerHasTheAdvantage()) {
            score = this.calculateResultForWhichPlayerHasTheAdvantage();
        } else {
            score = this.calculateScoreIfPointsAreNotTied();
        }
    }
    return score;
};


TennisGame2.prototype.calculateScoreForTiedPoints = function () {
    let result;
    switch (this.Player1CurrentPoints) {
        case 1:
            result = "Fifteen-All";
            break;
        case 2:
            result = "Thirty-All";
            break;
        case 3:
            result = "Deuce";
            break;
        default:
            result = "Love-All";
            break;
    }
    return result;
};

TennisGame2.prototype.calculateResultFromTheScore = function (score) {
    let result;
    switch (score) {
        case 1:
            result = "Fifteen";
            break;
        case 2:
            result = "Thirty";
            break;
        case 3:
            result = "Forty";
            break;
        default:
            result = "Love";
            break;
    }
    return result;
};


TennisGame2.prototype.checkIfAnyPlayerHasWon = function () {
    let winner = false;
    if (this.Player1CurrentPoints >= 4 && this.checkIfTheDifferenceBetweenPointsIsGreaterOrEqualToTwo()) {
        winner = true;
    }
    if (this.Player2CurrentPoints >= 4 && this.checkIfTheDifferenceBetweenPointsIsGreaterOrEqualToTwo()) {
        winner = true;
    }
    return winner;
};

TennisGame2.prototype.calculateWhichPlayerWon = function () {
    let result;
    if (this.Player1CurrentPoints >= 4) {
        result = "Win for player1";
    } else {
        result = "Win for player2";
    }
    return result;
};

TennisGame2.prototype.checkIfTheDifferenceBetweenPointsIsGreaterOrEqualToTwo = function () {
    if (Math.abs(this.Player1CurrentPoints - this.Player2CurrentPoints) >= 2)
        return true;
    else
        return false;
};

TennisGame2.prototype.checkIfPlayerPointsAreTied = function () {
    if (this.Player2CurrentPoints === this.Player1CurrentPoints)
        return true;
    return false;
};



TennisGame2.prototype.calculateScoreIfPointsAreNotTied = function () {
    let result1 = this.calculateResultFromTheScore(this.Player1CurrentPoints);
    let result2 = this.calculateResultFromTheScore(this.Player2CurrentPoints);
    return result1 + "-" + result2;
};

TennisGame2.prototype.checkIfPlayer1IsWinning = function () {
    if (this.Player1CurrentPoints > this.Player2CurrentPoints)
        return true;
    return false;
};

TennisGame2.prototype.checkIfPlayer2IsWinning = function () {
    if (this.Player2CurrentPoints > this.Player1CurrentPoints)
        return true;
    return false;
};

TennisGame2.prototype.checkIfAnyPlayerHasTheAdvantage = function () {
    let result = false;
    if (this.checkIfPlayer1IsWinning() && this.Player2CurrentPoints >= 3) {
        result = true;
    }
    if (this.checkIfPlayer2IsWinning() && this.Player1CurrentPoints >= 3) {
        result = true;
    }
    return result;
};

TennisGame2.prototype.calculateResultForWhichPlayerHasTheAdvantage = function () {
    let advantage;
    if (this.checkIfPlayer1IsWinning()) {
        advantage = "Advantage player1";
    }
    if (this.checkIfPlayer2IsWinning()) {
        advantage = "Advantage player2";
    }
    return advantage;
};

TennisGame2.prototype.changeP1PointsToAnSpecificValue = function (number) {
    this.Player1CurrentPoints += number;
};

TennisGame2.prototype.changeP2PointsToAnSpecificValue = function (number) {
    this.Player2CurrentPoints += number;
};


if (typeof window === "undefined") {
    module.exports = TennisGame2;
}