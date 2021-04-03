const expect = require("chai").expect;
const caesar = require("../src/caesar");

describe("caesar", () => {
    it("should return an encrypted string", () => {
        const firstTest = caesar("Hello World!", 3);
        const secondTest = caesar("This is a test.", 5);
        const thirdTest = caesar("Be sure to drink your ovaltine.", 4);

        expect(firstTest).to.equal("khoor zruog!");
        expect(secondTest).to.equal("ymnx nx f yjxy.");
        expect(thirdTest).to.equal("fi wyvi xs hvmro csyv szepxmri.");
    });
    it("should return a decrypted string", () => {
        const firstTest = caesar("khoor zruog!",3,false);
        const secondTest = caesar("ymnx nx f yjxy.",5,false);
        const thirdTest = caesar("fi wyvi xs hvmro csyv szepxmri.",4,false);

        expect(firstTest).to.equal("hello world!");
        expect(secondTest).to.equal("this is a test.");
        expect(thirdTest).to.equal("be sure to drink your ovaltine.");
    })
})