var assert = require('assert');
import TennisGame2 from '../TennisGame2'
describe('TennisGame', function () {
    let game;
    beforeEach(function () {
        game = new TennisGame2("player1", "player2");
    });
    it('it should return "Love-All" if no one scored', function () {
        assert.equal(game.calculateCurrentGameScore(), "Love-All");
    });
    it('It should return "Fifteen-Love" if player1 scored', function () {
        game.changeP1PointsToAnSpecificValue(1);
        assert.equal(game.calculateCurrentGameScore(), "Fifteen-Love");
    });
    it('It should return "Thirty-Love" if player1 scored twice', function () {
        game.changeP1PointsToAnSpecificValue(2);
        assert.equal(game.calculateCurrentGameScore(), "Thirty-Love");
    });
    it('It should return "Forty-Love" if player1 scored three times', function () {
        game.changeP1PointsToAnSpecificValue(3);
        assert.equal(game.calculateCurrentGameScore(), "Forty-Love");
    });
    it('It should return "Win for player1" if player1 scored four times', function () {
        game.changeP1PointsToAnSpecificValue(4);
        assert.equal(game.calculateCurrentGameScore(), "Win for player1");
    });

    it('It should return "Love-Fifteen" if player2 scored', function () {
        game.changeP2PointsToAnSpecificValue(1);
        assert.equal(game.calculateCurrentGameScore(), "Love-Fifteen");
    });
    it('It should return "Love-Thirty" if player2 scored twice', function () {
        game.changeP2PointsToAnSpecificValue(2);
        assert.equal(game.calculateCurrentGameScore(), "Love-Thirty");
    });
    it('It should return "Love-Forty" if player2 scored thrice', function () {
        game.changeP2PointsToAnSpecificValue(3);
        assert.equal(game.calculateCurrentGameScore(), "Love-Forty");
    });
    it('It should return "Win for player2" if player2 scored four times', function () {
        game.changeP2PointsToAnSpecificValue(4);
        assert.equal(game.calculateCurrentGameScore(), "Win for player2");
    });

    it('It should return "Fifteen-All" if both player1 and player2 scored once', function () {
        game.changeP1PointsToAnSpecificValue(1);
        game.changeP2PointsToAnSpecificValue(1);
        assert.equal(game.calculateCurrentGameScore(), "Fifteen-All");
    });
    it('It should return "Thirty-All" if both player1 and player2 scored twice', function () {
        game.changeP1PointsToAnSpecificValue(2);
        game.changeP2PointsToAnSpecificValue(2);
        assert.equal(game.calculateCurrentGameScore(), "Thirty-All");
    });
    it('It should return "Deuce" if both player1 and player2 scored three times', function () {
        game.changeP1PointsToAnSpecificValue(3);
        game.changeP2PointsToAnSpecificValue(3);
        assert.equal(game.calculateCurrentGameScore(), "Deuce");
    });

    it('It should return "Advantage player1" if player2 current points are "3" or more and player1 just scored to surpass player2 score', function () {
        game.changeP1PointsToAnSpecificValue(4);
        game.changeP2PointsToAnSpecificValue(3);
        assert.equal(game.calculateCurrentGameScore(), "Advantage player1");
    });
    it('It should return "Advantage player2" if player1 current points are "4" or more and player2 just scored to surpass player2 score', function () {
        game.changeP1PointsToAnSpecificValue(3);
        game.changeP2PointsToAnSpecificValue(4);
        assert.equal(game.calculateCurrentGameScore(), "Advantage player2");
    });

    it('It should return "Advantage player2" if player1 current points are "4" or more and player2 just scored to surpass player2 score', function () {
        game.changeP1PointsToAnSpecificValue(3);
        game.changeP2PointsToAnSpecificValue(4);
        assert.equal(game.calculateCurrentGameScore(), "Advantage player2");
    });

    it('It should return "Fifteen-Thirty" if player2 scored twice and player1 scored once', function () {
        game.changeP2PointsToAnSpecificValue(2);
        game.changeP1PointsToAnSpecificValue(1);
        assert.equal(game.calculateCurrentGameScore(), "Fifteen-Thirty");
    });

    it('It should return "Fifteen-Forty" if player2 scored thrice and player1 scored once', function () {
        game.changeP2PointsToAnSpecificValue(3);
        game.changeP1PointsToAnSpecificValue(1);
        assert.equal(game.calculateCurrentGameScore(), "Fifteen-Forty");
    });

    it('It should return "Thirty-Forty" if player2 scored thrice and player1 scored twice', function () {
        game.changeP2PointsToAnSpecificValue(3);
        game.changeP1PointsToAnSpecificValue(2);
        assert.equal(game.calculateCurrentGameScore(), "Thirty-Forty");
    });


    it('It should return "Thirty-Fifteen" if player1 scored twice and player2 scored once', function () {
        game.changeP2PointsToAnSpecificValue(1);
        game.changeP1PointsToAnSpecificValue(2);
        assert.equal(game.calculateCurrentGameScore(), "Thirty-Fifteen");
    });

    it('It should return "Forty-Fifteen" if player1 scored thrice and player2 scored once', function () {
        game.changeP2PointsToAnSpecificValue(1);
        game.changeP1PointsToAnSpecificValue(3);
        assert.equal(game.calculateCurrentGameScore(), "Forty-Fifteen");
    });

    it('It should return "Forty-Thirty" if player1 scored thrice and player2 scored twice', function () {
        game.changeP2PointsToAnSpecificValue(2);
        game.changeP1PointsToAnSpecificValue(3);
        assert.equal(game.calculateCurrentGameScore(), "Forty-Thirty");
    });
});