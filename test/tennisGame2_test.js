var assert = require('assert');
import TennisGame2 from '../TennisGame2'
describe('TennisGame', function () {
    let game;   
    beforeEach(function(){
        game=new TennisGame2("jugador1","jugador2");
    });
    it('debería devolver love all si nadie anoto ', function () {
        assert.equal(game.getScore(),"Love-All");
    });
});