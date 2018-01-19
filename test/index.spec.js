"use strict"

mocha.setup('bdd');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new jsdom(``, {
  
});
const assert = window.assert = chai.assert;
const expect = window.expect = chai.expect;
const should = window.should = chai.should();


describe('Bouncing Box', function(){

      it('box variables and functions should exist', function(done){
        should.exist(position);
        should.exist(points);
        should.exist(speed);
        should.exist(handleBoxClick);
        should.exist(update);
      });
    
      it('box variables should have the correct values', function(){
        expect(position).to.eql(0);
        expect(points).to.eql(0);
        expect(speed).to.eql(10);    
      });

      it('should update position of box', function(){
        var 
          acceleration = speed * direction,
          movement = position + acceleration;
        expect(update).to.be.a('function');
        update();
        expect(position).to.eql(movement);
      });

      it('should bounce from left to right on the screen', function(){
        update();
        expect(position).to.satisfy(function(position){
            if((position === 1)||(position === -1)){
              return true;
            } else {
              return false;
            }
        });
      });

      it('box should increase in speed once clicked', function(){
        expect(handleBoxClick).to.be.a('function');
        //save speed to a temp variable
        var 
          tempSpeed = speed + 3,
          newPoints = points + 1;
        handleBoxClick();
        expect(speed).to.eql(tempSpeed);
        expect(position).to.eql(0);
        expect(points).to.eql(newPoints);
      });
});
    