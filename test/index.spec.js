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
    /*
      beforeEach(function(done) {
        browser.visit(server, done);
      });
    */
      it('box variables and functions should exist', function(done){
        should.exist(position);
        should.exist(points);
        should.exist(speed);
        should.exist(handleBoxClick());
        should.exist(update);
               
      });
    
      it('box variables should have the correct values', function(){
        expect(position).to.equal(0);
        expect(points).to.equal(0);
        expect(speed).to.equal(10);

        
      });
    
      it('box should increase in speed once clicked', function(){
        expect(handleBoxClick).to.be.a('function');
        //save speed to a temp variable
        //save points to a temp variable
        //speed = startspeed + 3
        handleBoxClick();
        //test for temp variable to equal speed + 3
        expect(speed).to.equal(speed + 3);
        expect(position).to.equal(0);
        expect(points).to.equal(points + 1);
      });

      it('box should bounce from each side of browser screen', function(){
        expect(update).to.be.a('function');
        update();
        expect(position).to.equal(position + (speed * direction));
        update();
        expect(position).to.be.either(1).or(-1);    
      });
      
      it('the box should increase speed when clicked',function(){
        expect(handleBoxClick).to.be.a('function');
        handleBoxClick();
        should.exist(speed);
        expect(speed).to.equal(speed + 3);
        should.exist(position);
        expect(position).to.equal(0);
        should.exist(points);
        expect(points).to.equal(points + 1);
      });

    });
    