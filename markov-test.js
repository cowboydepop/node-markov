const { MarkovMachine } = require('./markov');

describe("MarkovMachine class", function () {

    test('makeChains', function () {
        const mm = new MarkovMachine('the cat in the hat');
        expect(mm.chains).toEqual({
            "the": ["cat", "hat"],
            "cat": ["in"],
            "in": ["the"],
            "hat": [null]
        });
    });


    test('makeText', function () {
        const mm = new MarkovMachine('the cat in the hat');

        let count = 0;
        while (count < 10) {
            const text = mm.makeText(50);
            const words = text.split(" ");

            
            expect(words.length).toBeLessThanOrEqual(50);
            
            if (words.length < 50){
                
                expect(words[words.length - 1]).toEqual('hat');
            }

            count ++;
        }
    });

});