// Write your tests here!
const expect = require("chai").expect;
const substitution = require("../src/substitution.js");

describe("substitution", () => {
    it("should return an encrypted string", () => {
        const firstResult = substitution("thinkful", "$wae&zrdxtfcygvuhbijnokmpl");
        const secondResult = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
        const thirdResult = substitution("you are an excellent spy", "$wae&zrdxtfcygvuhbijnokmpl");
        
        expect(firstResult).to.equal("jdxgfznc");
        expect(secondResult).to.equal("y&ii$r&");
        expect(thirdResult).to.equal("pvn $b& $g &ma&cc&gj iup");
    });

    it("should return a decoded string", () =>{
        const firstResult = substitution("jdxgfznc", "$wae&zrdxtfcygvuhbijnokmpl", false)
        const secondResult = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
        const thirdResult = substitution("pvn $b& $g &ma&cc&gj iup", "$wae&zrdxtfcygvuhbijnokmpl", false);

        expect(firstResult).to.equal("thinkful")
        expect(secondResult).to.equal("message");
        expect(thirdResult).to.equal("you are an excellent spy");
    })
});