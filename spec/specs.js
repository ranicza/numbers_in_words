describe('getWord', function() {
    it(" for the number 5 the result will be 'five'", function(){
        getWord(5).should.equal("five");
    });
    it(" for the number 16 the result will be 'sixteen'", function(){
        getWord(16).should.equal("sixteen");
    });
    it(" for the number 80 the result will be 'eighty'", function(){
        getWord(80).should.equal("eighty");
    });
    it(" for the number 23 the result will be 'twenty-three'", function(){
        getWord(23).should.equal("twenty-three");
    });
    it(" for the number 237 the result will be 'two hundred and thirty-seven'", function(){
        getWord(237).should.equal("two hundred and thirty-seven");
    });
    it(" for the number 200 the result will be 'two hundred'", function(){
        getWord(200).should.equal("two hundred");
    });
    it(" for the number 100 the result will be 'one hundred'", function(){
        getWord(100).should.equal("one hundred");
    });
    it(" for the number 996 the result will be 'nine hundred and ninety-six'", function(){
        getWord(996).should.equal("nine hundred and ninety-six");
    });
    it(" for the number 50307 the result will be 'five thousand three hundred and three'", function(){
        getWord(50307).should.equal("fifty thousand three hundred and seven");
    });
    it(" for the number 90011 the result will be 'ninety thousand eleven'", function(){
        getWord(90011).should.equal("ninety thousand eleven");
});
    it(" for the number 57123 the result will be 'fifty seven thousand one hundred and twenty-three'", function(){
        getWord(57123).should.equal("fifty-seven thousand one hundred and twenty-three");
    });
    it(" for the number 1000000 the result will be 'one million'", function(){
        getWord(1000000).should.equal("one million");
    });
    it(" for the number 21836785 the result will be 'twenty-one million eight hundred and thirty-six thousand seven hundred and eighty-five'", function(){
        getWord(21836785).should.equal("twenty-one million eight hundred and thirty-six thousand seven hundred and eighty-five");
    });
    it(" for the number 7231000 the result will be 'seven million two hundred and thirty-one thousand'", function(){
        getWord(7231000).should.equal("seven million two hundred and thirty-one thousand");
    });
    it(" for the number 525200000 the result will be 'five hundred and twenty-five million two hundred thousand'", function(){
        getWord(525200000).should.equal("five hundred and twenty-five million two hundred thousand");
    });
    it(" for the number 525207120 the result will be 'five hundred and twenty-five million two hundred and seven thousand one hundred and twenty'", function(){
        getWord(525207120).should.equal("five hundred and twenty-five million two hundred and seven thousand one hundred and twenty");
    });
    it(" for the number 1000000000 the result will be 'one milliard'", function(){
        getWord(1000000000).should.equal("one milliard");
    });
    it(" for the number 126000000012 the result will be 'one hundred and twenty six milliard tvelwe'", function(){
        getWord(126000000012).should.equal("one hundred and twenty-six milliard twelve");
    });
    it(" for the number 47128905512 the result will be 'forty-seven milliard one hundred and twenty-eight million nine hundred and five thousand five hundred and twelve'", function(){
        getWord(47128905512).should.equal("forty-seven milliard one hundred and twenty-eight million nine hundred and five thousand five hundred and twelve");
    });
    it(" for the number 1000000000000 the result will be 'one trillion'", function(){
        getWord(1000000000000).should.equal("one trillion");
    });
    it(" for the number 5000012000000 the result will be 'five trillion twelve million'", function(){
        getWord(5000012000000).should.equal("five trillion twelve million");
    });
    it(" for the number 5339712237106 the result will be 'five trillion three hundred and thirty-nine milliard seven hundred and twelve million two hundred and thirty-seven thousand one hundred and six'", function(){
        getWord(5339712237106).should.equal("five trillion three hundred and thirty-nine milliard seven hundred and twelve million two hundred and thirty-seven thousand one hundred and six");
    });

});