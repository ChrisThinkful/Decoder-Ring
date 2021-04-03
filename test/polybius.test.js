// Write your tests here!
const expect = require("chai").expect;
const polybius = require("../src/polybius.js");

describe("polybius", () => {
    it("should return an encrypted string", () => {
        const firstResult = polybius("thinkful");
        const secondResult = polybius("this is difficult");
        const thirdResult = polybius("testing");
        
        expect(firstResult).to.equal("4432423352125413");
        expect(secondResult).to.equal("44324234 4234 414212124231541344");
        expect(thirdResult).to.equal("44513444423322");
    });

    it("should return a decoded string", () =>{
        
        const secondResult = polybius("44324234 4234 414212124231541344", false);
        const thirdResult = polybius("4432423352125413", false);

        
        expect(secondResult).to.equal("thi/js i/js di/jffi/jcult");
        expect(thirdResult).to.equal("thi/jnkful");
    })
});