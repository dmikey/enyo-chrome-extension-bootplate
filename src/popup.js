enyo.ready(function() {
	var foo = enyo.kind({
		name: 'foo',
		content: 'hello world'
	});

	new foo().renderInto(document.body);
});