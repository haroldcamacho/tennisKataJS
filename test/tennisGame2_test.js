var assert = require('assert');
import TennisGame2 from '../TennisGame2'
describe('TennisGame', function () {
    let game;   
    beforeEach(function(){
        game=new TennisGame2("player1","player2");
    });
    it('it should return "Love-All" if no one scored', function () {
        assert.equal(game.getScore(),"Love-All");
    });
    it('It should return "Fifteen-Love" if player1 scored', function () {
            game.SetP1Score(1);
            assert.equal(game.getScore(),"Fifteen-Love");
    });
    it('It should return "Thirty-Love" if player1 scored twice', function () {
        game.SetP1Score(2);
        assert.equal(game.getScore(),"Thirty-Love");
    });
    it('It should return "Forty-Love" if player1 scored three times', function () {
        game.SetP1Score(3);
        assert.equal(game.getScore(),"Forty-Love");
    });
    it('It should return "Win for player1" if player1 scored four times', function () {
        game.SetP1Score(4);
        assert.equal(game.getScore(),"Win for player1");
    });

    it('It should return "Love-Fifteen" if player2 scored', function () {
        game.SetP2Score(1);
        assert.equal(game.getScore(),"Love-Fifteen");
    });
    it('It should return "Love-Thirty" if player2 scored twice', function () {
        game.SetP2Score(2);
        assert.equal(game.getScore(),"Love-Thirty");
    });
    it('It should return "Love-Forty" if player2 scored three times', function () {
        game.SetP2Score(3);
        assert.equal(game.getScore(),"Love-Forty");
    });
    it('It should return "Win for player2" if player2 scored four times', function () {
        game.SetP2Score(4);
        assert.equal(game.getScore(),"Win for player2");
    });
    
});