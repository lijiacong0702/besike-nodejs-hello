var greet = require("greet");
describe('greet', function() {
	it("should greet a person by name", function() {
		expect(greet('lijiacong')).to.eql("Hello, lijiacong");
	});
	it("should greet a person flirtatiously if drunk", function() {
		expect(greet('lijiacong', 'a')).to.eql("Hello lijiacong, you look sexy today");
	});
});