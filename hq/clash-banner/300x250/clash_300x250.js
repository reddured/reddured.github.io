(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.background = function() {
	this.spriteSheet = ss["clash_300x250_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.book1 = function() {
	this.spriteSheet = ss["clash_300x250_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.book2 = function() {
	this.spriteSheet = ss["clash_300x250_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.spriteSheet = ss["clash_300x250_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.nouvelle_serie = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ANMBWQgMgFgJgLQgJgKgFgMQgFgNAAgOQAAgOAFgLQAFgNAJgLQAJgKAMgGQAMgFAPAAQAQAAAOAHIAAAgQgFgHgIgDQgIgEgJAAQgJAAgHAEQgIAEgFAGQgFAHgDAHQgDAIAAAJQAAAIADAIQADAIAFAHQAFAHAIADQAHAFAJAAQAIAAAIgFQAIgEAGgGIAAAgQgIAEgHABQgIACgIAAQgNABgNgGgAK/BWQgNgGgJgJQgJgKgEgNQgFgNAAgPQAAgPAFgLQAFgNAIgKQAJgJANgGQAMgGAPABQAPgBAMAGQANAGAJAJQAJAKAFANQAEALAAAPQAAAPgEANQgFANgJAKQgJAJgMAGQgNAGgPgBQgPABgMgGgALKgTQgIADgFAGQgFAGgDAHQgDAHAAAJQAAAIADAIQACAIAEAIQAFAGAIAEQAIAEAKABQALgBAHgEQAIgEAFgGQAFgIACgIQACgIAAgIQAAgJgDgHQgCgHgGgGQgFgGgHgDQgIgEgJAAQgJAAgHAEgAHaBWQgMgFgKgLQgJgKgFgMQgEgNAAgOQAAgOAEgLQAFgNAJgLQAJgKAMgGQANgFAOAAQAQAAAPAHIAAAgQgGgHgIgDQgIgEgIAAQgJAAgIAEQgHAEgGAGQgFAHgCAHQgDAIAAAJQAAAIADAIQACAIAGAHQAFAHAHADQAIAFAJAAQAIAAAIgFQAIgEAGgGIAAAgQgIAEgIABQgHACgIAAQgOABgMgGgAgOBVQgKgIgIgMIASgQQACAHAHAGQAFAGAIAAQAIAAAFgGQAEgGAAgHQAAgFgBgDIgFgHIgHgDIgIgEIgCgBIgLgFIgJgIQgEgEgCgGQgCgEAAgIQAAgIADgIQADgHAFgFQAFgGAIgDQAFgDAIAAQAKgBALAFQAKAEAGAHIgMASQgEgFgFgDQgFgDgGAAQgHAAgFAFQgEAEAAAHQAAAFAEAEQAFACAKAFIANAFQAFADAFAEQAFAFADAHQADAHAAAJQAAAVgMANQgMAMgVAAQgLAAgLgGgAnaBbIg0iIIAcAAIAhBYIAAAAIAehYIAdAAIg1CIgApeBYQgKgFgGgIQgGgHgDgLQgDgLAAgNIAAhOIAbAAIAABJIAAAPIADAMQADAGAFAEQAFADAIABQAIgBAEgDQAFgEADgGQACgGABgGIABgPIAAhJIAaAAIAABOQAAANgDALQgDAKgGAJQgGAHgJAFQgKADgNAAQgOAAgJgDgArlBWQgNgGgIgJQgJgKgFgNQgEgNAAgPQAAgPAEgLQAFgNAJgKQAJgJAMgGQANgGAPABQAPgBAMAGQAMAGAJAJQAJAKAFANQAFALAAAPQAAAPgFANQgFANgIAKQgJAJgNAGQgMAGgPgBQgPABgNgGgAragTQgHADgGAGQgFAGgCAHQgDAHAAAJQAAAIACAIQACAIAFAIQAFAGAHAEQAIAEALABQAKgBAIgEQAIgEAEgGQAFgIACgIQACgIAAgIQAAgJgCgHQgDgHgFgGQgFgGgIgDQgHgEgJAAQgJAAgIAEgAssBaIhIhcIAAAAIAABaIgaAAIAAiJIATAAIBHBcIAAhYIAbAAIAACHgAQ/BYIAAiFIBGAAIAAAXIgsAAIAAAbIArAAIAAAXIgrAAIAAAlIAsAAIAAAXgAPLBYIAAiFIAlAAQAPgBAMAGQAMAEAJAJQAIAKAFANQAFAKAAAPQAAAOgFAMQgFAMgJAKQgIAJgNAFQgMAFgOAAgAPlBBIAEAAQAYAAALgMQAKgLAAgWQAAgqgtAAIgEAAgAJvBYIAAg9IgxAAIAAA9IgaAAIAAiFIAaAAIAAAzIAxAAIAAgzIAbAAIAACFgAEsBYIAAiFIBGAAIAAAXIgsAAIAAAbIArAAIAAAXIgrAAIAAAlIAsAAIAAAXgAD/BYIAAiFIAaAAIAACFgADWBYIghg3IgBAAIAAA3IgaAAIAAiFIAkAAQAVgBAMAKQAMAKAAAVQAAAMgHALQgIALgNACIAnA5gAC0APIAEAAQAMAAAGgFQAHgEAAgKQAAgMgHgEQgGgEgMAAIgEAAgABCBYIAAiFIBGAAIAAAXIgsAAIAAAbIArAAIAAAXIgrAAIAAAlIAsAAIAAAXgAimBYIAAiFIBGAAIAAAXIgsAAIAAAbIArAAIAAAXIgrAAIAAAlIAsAAIAAAXgAjuBYIAAiFIAaAAIAABuIAlAAIAAAXgAk3BYIAAiFIAaAAIAABuIAmAAIAAAXgAmPBYIAAiFIBGAAIAAAXIgsAAIAAAbIArAAIAAAXIgrAAIAAAlIAsAAIAAAXgAvnBYIgKgcIgvAAIgLAcIhZAAIAAiFIAaAAIAABuIAlAAIAAAQIAziCIAUAAIA0CJgAv4AlIgRgvIgBAAIgPAvIAhAAgABWg8IAVgfIATAMIgcAbg");
	this.shape.setTransform(115.8,9.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,231.6,18.4);


(lib.jay_crownover = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ED2256").s().p("AJEBXIg/ipIAiAAIAoBuIABAAIAlhuIAiAAIhACpgAGQBQQgPgHgLgMQgLgMgGgQQgFgPAAgSQAAgRAGgQQAFgQALgMQALgMAPgGQAQgHASAAQASAAAPAHQAPAGALAMQALAMAGAQQAGAQAAARQAAASgGAPQgGAQgKAMQgLAMgPAHQgQAHgSAAQgTAAgPgHgAGegxQgKAEgGAIQgGAIgEAJQgDAKAAAKQAAAIADAKQACAKAGAIQAGAJAKAFQAJAFANAAQANAAAJgFQAJgFAGgJQAGgIADgKQACgKAAgIQAAgKgDgKQgDgJgHgIQgGgIgJgEQgJgFgLAAQgLAAgJAFgAiYBQQgPgHgLgMQgLgMgGgQQgFgPAAgSQAAgRAGgQQAFgQALgMQALgMAPgGQAQgHASAAQASAAAPAHQAPAGALAMQALAMAGAQQAGAQAAARQAAASgGAPQgGAQgKAMQgLAMgPAHQgQAHgSAAQgTAAgPgHgAiKgxQgKAEgGAIQgGAIgEAJQgDAKAAAKQAAAIADAKQACAKAGAIQAGAJAKAFQAJAFANAAQANAAAJgFQAJgFAGgJQAGgIADgKQACgKAAgIQAAgKgDgKQgDgJgHgIQgGgIgJgEQgJgFgLAAQgLAAgJAFgAmWBQQgPgHgLgMQgLgMgGgQQgGgPAAgRQAAgQAGgQQAGgQALgMQALgMAPgIQAPgHASAAQATAAASAKIAAAnQgHgJgKgFQgKgEgKAAQgLAAgJAFQgKAEgGAJQgGAHgEALQgDAKAAAJQAAALAEAKQADAKAGAIQAHAIAJAEQAJAFALAAQAKAAAKgFQAJgFAIgHIAAAmQgKAFgKACQgJADgJAAQgRAAgPgHgAtrBSQgJgEgHgHIAVgXQABAEAEADQAEADAEABQAEAAADgEQADgDABgEIACgMIAAgPIAAhnIAhAAIAABsQAAAPgCAJQgCAJgGAJQgGAKgKAEQgKAFgLAAQgJAAgIgFgAE5BWIhYhyIAABuIggAAIAAioIAXAAIBXByIABAAIAAhuIAgAAIAACogABoBWIghhqIgBAAIgfBqIgYAAIgyioIAhAAIAgBwIAAAAIAhhxIAUAAIAiBxIAAAAIAhhwIAiAAIg4CogANVBSIgphDIAABDIggAAIAAikIArAAQAaABAPAMQAPAMAAAaQAAARgJANQgJALgQADIAvBFgAMsgFIAEAAQAPAAAIgFQAHgHAAgNQAAgPgHgFQgIgFgPAAIgEAAgAKgBSIAAikIBWAAIAAAdIg1AAIAAAkIAzAAIAAAaIgzAAIAAAtIA1AAIAAAcgAjyBSIgphDIAABDIggAAIAAikIArAAQAaABAPAMQAPAMAAAaQAAARgJANQgJALgQADIAvBFgAkbgFIAEAAQAPAAAIgFQAHgHAAgNQAAgPgHgFQgIgFgPAAIgEAAgApcBSIAAhMIgzhYIAlAAIAdA6IAgg6IAmAAIg1BYIAABMgAqsBSIgNgiIg5AAIgOAiIgiAAIBAioIAaAAIA+CogArCAVIgVg6IgSA6IAnAAg");
	this.shape.setTransform(89.2,8.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,178.5,17.5);


(lib.discover_bold = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJBYQgRgQAAgbIAAhjIAgAAIAABeQAAASAHAIQAHAJARAAQAQAAAIgJQAHgIAAgSIAAheIAhAAIAABjQAAASgHANQgIANgPAHQgPAHgUAAQgeAAgPgPgAi7BSQgTgVAAgnQAAglATgVQATgUAlAAQAkgBATAWQATAUAAAmQAAAmgTAVQgUAVgkAAQgkAAgTgVgAihgQQgLAOAAAZQAAAZAKAOQAKANAUAAQAoAAAAg0QAAg0gnAAQgUAAgKANgAlIBSQgSgVAAgmQAAgXAIgSQAJgTARgJQARgKAWAAQAXgBAXAMIgLAbQgIgFgJgCQgJgDgJAAQgTAAgKANQgKAOAAAYQAAA0AnAAQARABAXgJIAAAcQgTAIgYAAQgiAAgSgVgAJOBlIgmg8IgSAAIAAA8IghAAIAAibIAuAAQAgAAAPALQAQANAAAXQAAAMgIALQgIAKgOAHIAuBEgAIWAOIALAAQAQgBAHgEQAIgGAAgJQAAgMgIgEQgHgFgRAAIgKAAgAGsBlIAAibIAhAAIAACbgAF0BlIgmg8IgSAAIAAA8IghAAIAAibIAuAAQAgAAAPALQAQANAAAXQAAAMgIALQgIAKgOAHIAuBEgAE8AOIALAAQAQgBAHgEQAIgGAAgJQAAgMgIgEQgHgFgRAAIgKAAgACuBlIg2ibIAiAAIAdBbIAGATIADAQQABgKAHgZIAehbIAhAAIg1CbgAnOBlIAAibIBaAAIAAAbIg5AAIAAAhIA1AAIAAAbIg1AAIAAAoIA5AAIAAAcgApxBlIAAibIAxAAQAmAAAWAUQAVAVAAAiQAAAngWAUQgWAVgqAAgApQBJIAOAAQAwABAAg0QAAgxgsAAIgSAAgAm1hDIAAgDQATgVAHgLIAkAAIAAADIgTAQIgVAQg");
	this.shape.setTransform(62.7,10.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,125.4,20.7);


(lib.clash_top = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ED2256").s().p("AgLALIgFgJQAIgCADgBIAFgJIARABIgCAEQgEAFgCAHIgGAAIgIADIgEABg");
	this.shape.setTransform(251.2,22.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ED2256").s().p("AgOASQgCgCgEgFIADgCQAHgFABgDIACgKIAAgLIABgCQAMACAPgCIgWAtIgNgFg");
	this.shape_1.setTransform(255.9,23.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ED2256").s().p("AAAAOIgJgDQgBgFgCgDQgEgEAGgHIAEgFIAFAAQAIgEAHAKQAAAHgHALQgBAEgEAAIgCgBg");
	this.shape_2.setTransform(146,52.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#ED2256").s().p("AAAAbQAAgCAAgFIAAgHIgEgCQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBAAgBgBIgHgDIAAgEIAJgWQADgCAEACQADACACAAIAEAIQAFAGgDAHIABACQAEADAAAHIABAMIgKAGIgDABIgEgBg");
	this.shape_3.setTransform(142,58.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#ED2256").s().p("AiCCtIAAg8QACgFAAgNIABkLIACgDIAKgKIAPgBIDEAAQAOABAEACIAHAAIAJAKIAABuQABAKgDADIAAAJIAADBQgBAHgHAAIgIAAIgHABQgDAAgDABQgCABgGAAIgKAAQgHAAgDADIgIAAQgNAAgDACIgLABQgKAAgEABIgKABIgHAAQgFAAgBACIgHABQgNAAgEACIgJABQgJAAgEABIgGABQgPABgFACIgHAAIgQACIgLABQgMAAgDACIgDAAQgEgEgBgJg");
	this.shape_4.setTransform(367.1,21.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#ED2256").s().p("AhzDQIgGgPQgHgTACgSQACgDAAgIQABgHABgFIAAgGIACgFQADgDABgEIABgHIAAgIIgIgHQgFgFADgFQAFgKgEgMQgCgKAAgPIAAiNQgBgLgCgDIgBgFIAAhFQAIgFgCgHQAHgGAKAAIA8AAIAJAAQAGABAEACQAEACADgDQAEgCAHAAIARAAQAHABAEgCIAFgBIBfAAIAMAMIABAQIAAFuQgCAFgEAAIgRADQgKACgGgBIgDAAQgCACgNAAIgRACIgEABIgFgBIgOADIgLABIgOACQAAABgHAAQgLAAgGABIgKABQgJAAgDACIgKAAIgNADQgBABgHAAIgSABIgMABQgJAAgDADQgEgBgBgFg");
	this.shape_5.setTransform(314.3,24.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#ED2256").s().p("AiIFYIAAgLIAAgVQAAgEABgHQACgIAAgDIABgLIACgKQACgDABgHQABgHACgDIAIgBQAIAAADgBQACgCAGABQAJAAACgBQgBgLgJgEIgKgFQAAgRgLgHIgJABQgGgIABgIIABgEQADgDgBgEIgDgGQgHgSAEgKIABgFQAAgJAFgKQgEgEABgHQAAgOgCgFIAAgJIAAidQAAgJgCgFIgBgKIAAifIAAgJQAAgFgDgDIAAgEIAAg6IAMgNIAfAAIAEABQADACAMAAIAqAAQANAAADADIAKAAQAGAAADgBQACgCAGAAIAuAAQAIAAADgCIAHgBIAyAAQAHABAEAEQAEAEABAHIAAEJQAAAMgCAFIgBAHIAADRQAAAHACADIABAKIAABTQAAAJACACIgDAFQACASgDAIIgBAIIgBALQgUAFgLgBIgDAAQgFACgQAAIgEAAQgEADgGAAIgLAAQgHAAgDACQgBABgIAAIgRACIgNAAIgIACIgKABIgIAAQgFABgDACIgHAAQgNAAgFACIgMABQgIAAgDABQgCABgHAAIgIABQgFAAgEACIgKAAIgHABQgEAAgDABIgHABQgCgEAAgHg");
	this.shape_6.setTransform(84.8,36.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#ED2256").s().p("AjREHIgBgDQAAgDgDgCQgIgEgFgKQgKgVgGgTIgBgJQgBgKgBgDQgBgBAAgNQAAgIADgDQgFgJgBgJIgCgKIAAgLIgBgEQgCgCAAgEIAAgHIAAgXQAAgKACgDIABgIIAAgKQAAgGACgEIAAgHIABgHQACgCAAgHQAAgJACgCIABAAIACgUQAAgGADgFQADgDAAgIQgBgJAGgEQAHgFABgKQAEgLABgGQABgIAKgOQAJgOAEgCIADgCQAKgFAAgKIAHgMIAZgYQALgLANgCQAFgBABgEQACgGAJgFIAQgKIAQgIIAGgBQADAAAKgEIAEgCQADAAAGgBQAFgCADAAQAFABAEgDQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQAGAEAEgGQAEgEAIAAQAJABAFgEQACgBAFACIANAEQAKgOACgFIAMAFQAIAEADAFQAFgDADgEIAEgGQAFgFAGADIAMAFIgBAGIACABQAIgGALAIQAFAEAFAAIADAAIAFACQADABADgBIAKgEIALAKIALABIAYACIAFABQAJAEAGgFQAFgEAGACIALADQABAAAAABQABAAAAABQABAAAAABQAAAAAAABIAAAGIAAAbQAAAMgCAEIAAAJIAABTIgBAMIAGAHIAAA9QAAAIACADQABABAAAEIAAAdIgJAKIgOAAIgCgDQgBgBAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAIgDACIgBAAIgxgSQgHABgSgGIgOgEQAAgIgJgEIgKgHIgBgDQgDABgDALIgJABQgCAIgDACIgNAOIgHAGQgKAEACAKIgBAEQgPALgMgBQAAADACACIADADQADAEAAACQgBAFAGALIACACQAEAHgHADIgIAFIgDAGQADADAGABQAHACACABIABAMQASAVAFAFIAcAcQALALAFADIAHAGIAGAHIgBACQgHgBgMACQgNACgHgBIgDAAQgDADgQAAIgJACQgBABgFAAIgKABQgGgBgFACIgKAAIgNACIgKABIgHAAQgDABgDACIgDABIgFAAQgMAAgFABIgKABQgKAAgEACIgIAAIgKABQgGAAgEACIgLABQgIAAgEABQgCABgJAAQgLAAgDACIgGABQgNAAgEACIgEABIgFAAIgPACIgMAAIgMACQgBABgEAAIgDAAgAhUCQQgCAFgIAHQgCADACACIAHgGQAEgEAEgBIAAgFIgDgCIgCABgAgqCOIAAACIABABIADgCIgBgCIgDABgAABCAIADAIIAHACQgCgCABgGQABgEgDgBgAhyAYQAAAAAAABQgBAAAAABQAAAAABABQAAABAAAAIAEACIACgDIADgHIgDAAQgDAAgDAEgAhdgwIAAALIgBAMQgBADgHAFIgDACQADAFADACIANAFIAYgwQgPACgPgBgAiJgqQgDADgIADIAFAJIACAAIAEgBIAKgEIAGAAQACgIAEgFIACgFIgSgBg");
	this.shape_7.setTransform(264.4,26.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#ED2256").s().p("AkIGIIgKgBQgGgIgEgQIgCgGQgBgEAAgDIgCgDIgDgQIgDgLIgBgFQAAgDgCgCIAAgHIgCgMIAAgIIAAgLQgBgGgCgEIAAgFQAAgKgDgDIgBgFIgCgPIAAh7IABgJIABgKIAAgGQABgEACgCIABgCIABgMIABgLQAEgMgBgGQAGgLAAgNIABgDQAFgMACgOIAFgOIADgJQAAgGACgDIAFgPQACgJAEgFQACgCABgGQADgQALgRIACgGIAPgYIACgEIAMgTQAJgKADgHQAEgDAGgIIAKgMQAFgGABgCQAAgBAAAAQAAAAABgBQAAAAAAgBQABAAABAAIAIgKIAEgGIAGgFQADgDABgEIADgDQAIgIADgGQAEgFAEgCIALgJQAHgIAEgBQAEgCAIgHIAOgKQAJgGAGgCQADgEAJgEQAIgEAEgDIAQgIQAJgFAHgCIACgBQAJgFAXgIIATgGIAegIIAOgCQAFAAAEgCQABgBAFAAIANAAIAFAAQAFgDAIAAIAOAAIACABQAFADAGAAIAMgBIALAAIAEABQAEACAIAAIAMAAQAIAAADACQAEABAHAAQAKAAAEACQACABAHAAQAJAAADACIAEAAQAFgBAJACIAQACIABAIIAAAIQAAAFABADIABAIIAAAuQAAAQACAFIAAAIIAAA1QAAAIADADIABAGQABAqgBArIgBAEQgDADAAAKQAAANgCAGIAAAPQAAAIgGACIgEACIgIADQgCAAgGgDIgVgIIgNgDQgIgCgFgDQgDABgGgCIgJgCIgSgEIgIgBIgHAAQgDgBgDgCIgXAAIgCABQgDAEgJAAIgFAAQgFgBgHACIgMADQgGABgLAGIgQAJIgLAJIgPANQgJAHgGAGIgRATIgNASIgIASIgGAOIgEAMIgIASIgGAOQgBALgBADQAAAFgBAKQgCAKABAFQAAAJgDADIgBAJQAAAFACAEIACADQgBAHADAOIACAMQABAIACAEIADAMQABAKAEAHQABABAAAFQABAEABACQADANAIAZQADAHADAGIAgAgIAHAFIAIAGQgHAFgDAAIgOAAQgHAAgDACIgJABIgHAAQgEAAgEACIgKABQgKAAgEABIgMABQgJAAgDACQgCABgJAAIgHAAQgEAAgDACQgCABgHAAIgIAAQgFAAgDACIgLAAQgKAAgDACIgKABQgLAAgEACIgEABIgEAAIgRACIgKAAQgMABgCACIgIAAIgIAAQgGABgDACIgGAAQgMAAgHACIgGABIgEAAg");
	this.shape_8.setTransform(31.1,40);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#ED2256").s().p("AlTEyIgBgBQAIgQACgIQADgMgEgHQgDgDADgDQAFgFAGgSIAMgnQADgJADgLQABgEACgBQADgDACgFIAFgIQABgBAAgFQAAgLACgDQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgIADgHIAIgaIAMgkQAFgKAAgGQACgDABgGIAEgKIAJgaQAEgSAEgIQAGgWAFgJIABgKIAJgZIAEgQIAGgUIAFgNQADgIAAgGIABgDQAGgPADgTIADgIIAFgSQADgFACgKIAEgQQAEgGgBgFQAAgCABgEIACgGQAAgFADgEQABgEABgGQAAgGAHAAIEwAAQAHAAABABQABABADAGIAIAZIAGASIAZBJIAGASIAMAlIAEAOQABAIAEAHQAFALAHAZIAMAlIAIAYIAIAXIAGAPQACAJADAFQAAAHAFALIANAqIANAlIAMAkQACAEABAKQAGANADAPIADAFQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgEAAQgNAAgDACIgHABIgJAAQgGAAgDACIgMAAIgLACQgBABgIAAIgIABQgFAAgEACQgCABgDgBIgFAAQgKAAgEACIgMABQgJAAgDACIgHAAIgJABQgHAAgDACIgEABIgEgBIgIABQgFAAgDABIgLABQgKAAgEACIgDABIgGAAIgHAAQgFAAgDACIgHABQgOAAgEABIgIABIgIAAQAAgEgDgGIgEgJIgDgKIgFgJQgFgMgBgHIgHgSIgPgmQgEABAAAFIgGASQgCAJgCAKIgKAeIgDAOIgJAcIgCAFQgDAEgEAAQgKgBgJADIgJABQgKAAgDACIgEABIgFgBIgIAAQgFABgDACIgHAAIgSACIgNABQgGAAgFACIgJABQgMAAgFACIgDABIgGgBIgOACIgNABIgMACQgBABgIAAIgMACQgCABgFAAIgTACIgNAAQgHAAgEACIgHABIgLAAQgGAAgEADg");
	this.shape_9.setTransform(180.4,32.6);

	this.addChild(this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,380.2,79.2);


(lib.clash_text = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ATaA/QgFgFABgHQgBgFAFgFQAFgFAFABQAHgBAFAFQAEAFAAAFQAAAHgEAFQgFAEgHAAQgFAAgFgEgAR+A/QgIgEgHgIQgFgHgDgKQgCgKgBgMIAAhLIAaAAIAABGIAAAOIADALQACAGAFADQAEAEAIAAQAHAAAFgEQAFgDACgGQACgFABgGIABgOIAAhGIAZAAIAABLQAAAMgDAKQgDAKgGAHQgFAIgJAEQgJAEgNAAQgMAAgKgEgAQAA+QgNgFgHgKQgJgJgFgNQgEgLAAgOQAAgNAEgMQAFgMAJgKQAIgJAMgFQAMgFAOAAQAOAAAMAFQALAFAJAJQAIAJAEANQAFAMAAANQAAAOgFALQgEANgIAJQgJAKgLAFQgMAFgOAAQgPAAgLgFgAQKgmQgHAEgFAFQgFAHgCAHQgDAIAAAHQAAAGACAIQACAIAFAGQAEAHAIAEQAGADALAAQAKAAAHgDQAHgEAEgHQAFgGACgIQACgIAAgGQAAgHgCgIQgDgHgFgHQgFgFgHgEQgHgEgIABQgJgBgHAEgAKrA/QgJgEgGgIQgGgHgDgKQgCgKAAgMIAAhLIAZAAIAABGIAAAOIADALQADAGAEADQAFAEAHAAQAIAAAFgEQAEgDADgGQACgFABgGIAAgOIAAhGIAZAAIAABLQAAAMgDAKQgDAKgFAHQgFAIgJAEQgKAEgNAAQgMAAgJgEgAIsA+QgMgFgIgKQgIgJgFgNQgFgLABgOQgBgNAFgMQAFgMAIgKQAJgJALgFQAMgFAOAAQAOAAAMAFQAMAFAIAJQAJAJAEANQAEAMABANQgBAOgEALQgEANgJAJQgIAKgMAFQgMAFgOAAQgPAAgLgFgAI2gmQgGAEgFAFQgFAHgDAHQgCAIAAAHQAAAGACAIQACAIAEAGQAEAHAIAEQAHADAKAAQAKAAAHgDQAHgEAFgHQAFgGACgIQABgIABgGQgBgHgCgIQgDgHgEgHQgFgFgHgEQgIgEgIABQgIgBgIAEgACvA/QgFgFAAgHQAAgFAFgFQAEgFAGABQAHgBAEAFQAFAFgBAFQABAHgFAFQgEAEgHAAQgGAAgEgEgAg7A+QgMgFgIgKQgIgJgFgNQgEgLgBgOQABgNAEgMQAFgMAIgKQAIgJAMgFQAMgFAOAAQAOAAAMAFQAKAFAIAJQAJAJAEANQAFAMgBANQABAOgFALQgEANgJAJQgIAKgKAFQgLAFgPAAQgOAAgMgFgAgwgmQgHAEgGAFQgEAHgDAHQgCAIgBAHQAAAGACAIQACAIAFAGQAEAHAIAEQAHADAKAAQAKAAAHgDQAHgEAFgHQAEgGAAgIQACgIAAgGQAAgHgCgIQgBgHgFgHQgEgFgIgEQgHgEgIABQgJgBgGAEgAioA8QgKgGgHgMIAQgQQADAIAGAFQAHAGAHAAQAHAAAFgGQAFgFAAgHQAAgFgCgDIgEgGIgHgDIgIgEIgCgBIgLgFQgFgCgEgDQgEgFgCgFQgCgFAAgIQAAgHACgHQADgIAFgFQAFgFAHgDQAIgDAHAAQAJAAAKAEQALAEAGAGIgMASQgEgGgFgCQgEgDgGAAQgHAAgFAEQgEAFAAAFQAAAGAEAEIAPAIIAMAFIAJAHQAFACADAGQACAHAAAJQABATgMANQgLAMgTAAQgOAAgJgHgAn1A/QgFgFABgHQgBgFAFgFQAEgFAGABQAHgBAFAFQAEAFAAAFQAAAHgEAFQgFAEgHAAQgGAAgEgEgAqTA9QgLgEgJgKQgJgJgFgNQgEgLAAgNQAAgMAEgMQAFgNAJgKQAIgJAMgFQAMgGAOAAQAPAAANAIIAAAdQgGgGgHgEQgIgDgHAAQgJAAgHADQgHAEgFAGQgFAHgCAIQgDAHAAAHQAAAIADAIQACAHAFAHQAFAGAHADQAHAEAJAAQAHAAAIgEQAHgEAGgFIAAAdIgPAGQgHACgIAAQgNAAgLgGgAwxA+QgMgFgIgKQgJgJgEgNQgFgLABgOQgBgNAFgMQAEgMAJgKQAJgJALgFQAMgFAOAAQAOAAAMAFQAMAFAIAJQAIAJAFANQAFAMAAANQAAAOgFALQgFANgIAJQgIAKgMAFQgMAFgOAAQgPAAgLgFgAwmgmQgIAEgEAFQgGAHgCAHQgDAIAAAHQABAGACAIQACAIAEAGQAFAHAHAEQAHADAKAAQAKAAAHgDQAIgEAEgHQAEgGADgIQACgIAAgGQgBgHgCgIQgCgHgFgHQgGgFgHgEQgGgEgJABQgJgBgGAEgAzCBDIgxiCIAbAAIAfBUIAAAAIAdhUIAbAAIgzCCgACFBCIhDhYIgBAAIAABWIgYAAIAAiCIASAAIBDBXIAAAAIAAhUIAaAAIAACBgArXBCIhDhYIgBAAIAABWIgZAAIAAiCIASAAIBDBXIABAAIAAhUIAZAAIAACBgAG4BBIgchPIAAAAIgLBOIgZAAIAViCIARAAIAhBSIAdhSIASAAIAUCCIgaAAIgKhOIAAAAIgdBPgAOSBAIAAh/IBAAAIAAAWIgoAAIAAAdIAlAAIAAATIglAAIAAA5gAM6BAIgfg0IgBAAIAAA0IgYAAIAAh/IAhAAQAVAAALAKQALAJAAAUQABANgIAKQgGAJgNACIAkA2gAMagEIAEAAQALAAAHgEQAFgEAAgLQAAgMgFgEQgHgDgLAAIgEAAgAFdBAIgKgbIgtAAIgKAbIgbAAIAyiCIATAAIAxCCgAFMAQIgRgtIAAAAIgOAtIAfAAgAjfBAIAAh/IAZAAIAAB/gAkFBAIggg0IAAAAIAAA0IgZAAIAAh/IAiAAQAUAAAMAKQALAJAAAUQAAANgHAKQgHAJgNACIAlA2gAklgEIAEAAQALAAAGgEQAGgEAAgLQAAgMgGgEQgGgDgLAAIgEAAgAmYBAIAAh/IAiAAQAVAAAMAKQALAJAAAVQAAAUgKAIQgLAKgTAAIgNAAIAAAxgAl/gDIAGAAQAMAAAFgEQAFgEAAgMQAAgMgFgDQgHgEgLAAIgFAAgApNBAIAAh/IBDAAIAAAWIgqAAIAAAdIAoAAIAAATIgoAAIAAAjIAqAAIAAAWgAuHBAIAAh/IBDAAIAAAWIgqAAIAAAdIAoAAIAAATIgoAAIAAAjIAqAAIAAAWgAvLBAIAAh/IAZAAIAABpIAjAAIAAAWgAx8BAIAAh/IAZAAIAAB/g");
	this.shape.setTransform(131.1,12.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(4.2,5.9,253.7,13.5);


(lib.clash_bottom = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ED2256").s().p("AAAACIAAgDIAAAAIABADg");
	this.shape.setTransform(36.2,53.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ED2256").s().p("AgBAAIADgCQABACgBADg");
	this.shape_1.setTransform(43.3,60);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ED2256").s().p("AgBAAIABAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAIABABIgCACg");
	this.shape_2.setTransform(53.6,59.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#ED2256").s().p("AAAgBIABACQAAAAAAAAQAAAAgBAAQAAABAAAAQAAAAAAAAg");
	this.shape_3.setTransform(43.7,59.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#ED2256").s().p("AAAACQAAAAAAAAQAAAAAAAAQAAgBAAAAQgBAAAAgBIABgBIACABQAAAAAAABQAAAAAAABQgBAAAAAAQAAAAAAAAIgBAAg");
	this.shape_4.setTransform(37.4,62);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#ED2256").s().p("AgBAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAgBAAAAQAAAAAAAAQAAAAAAABIADABIgDABQAAAAAAAAQAAgBAAAAQAAAAAAAAQgBgBAAAAg");
	this.shape_5.setTransform(34.6,57.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#ED2256").s().p("AAAAAQAAgDgCgCIACgBQAGAGgFAGIgBABQAAgCAAgFg");
	this.shape_6.setTransform(37.6,48.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#ED2256").s().p("AgDgCQADgDAEAFIgDAEg");
	this.shape_7.setTransform(47.5,60.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#ED2256").s().p("AgEADQACgDACgCQAEgCABAEIgFADIAAAAIgEAAg");
	this.shape_8.setTransform(49.3,59.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#ED2256").s().p("AgEADIAAgBIAAgBIAFgFIADABIABABIgBACIgEAEIgBABIgDgCg");
	this.shape_9.setTransform(36.1,51.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#ED2256").s().p("AgCACIgFgBQACgBAFgBQADgCACgDIADAHIgGAGg");
	this.shape_10.setTransform(39.5,64.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#ED2256").s().p("AgKAIQgCgDABgFIALgCQAFgCACgCQACgCADABIAAAAIgKAPQgGgDgGADg");
	this.shape_11.setTransform(37.9,55.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#ED2256").s().p("AgJAAQgBAAABgDQABgDACgCQABAAAAAAQAAAAABAAQAAAAABAAQAAAAAAAAIANAHIgLAKg");
	this.shape_12.setTransform(53.5,48.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#ED2256").s().p("AAHAcIgBgDIgCgOIAAgHIgBgIIgHgFQgDgBgCgEQgEgGAFgEIAGgFQACACAAAEQgBAKAGACIADALIADAKQABACgBAFIgCAEIAAADIACAHIgEgDg");
	this.shape_13.setTransform(50.1,52.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#ED2256").s().p("AgbAVQAFgJgDgHQgCgCgGABQgGAAgDgEQACgEAFgBQABgBAAABQABAAABAAQAAAAABAAQAAABABAAIADADIATgCIAEgMIAFAKIAFAAQAGABADgHIAGgHIAIgBIAIgCIAGABQgFACgFAFIgKAHQgFADADADQAEAGgEAEIgFAEQgDACgDgCQgCgCgFAAQgDAAgBgCQgBgBAAAAQAAAAAAAAQgBAAAAAAQAAAAAAABQgDACgEAAIgIAAIgDAIQAAABAAAAQgBABAAAAQgBAAAAAAQAAAAgBAAIgDgBg");
	this.shape_14.setTransform(48.2,63.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#ED2256").s().p("AgdAxIABgCQAEgEAAgEIABgHIgJgNIgGgEIADgHIAUgFIAEgJIgHgNIgOgFIgCAGIgBgGQAAgFgCgCIAFgLIAGgJQACgEAEAAQAEAAABAFIgKALIAIALQACABALADIgCALIALAHQAJADAHgHIARAIQADADgFAGIgVAMQgBgIgGgEQgCgCgJgEIgNAGIABAHIAGALQACAFgCACIgMAVIgEADg");
	this.shape_15.setTransform(42.7,56.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#ED2256").s().p("AAAAOQgEAAgDgEQgEgFgBgDIAAgIIAAgHIAQAAIAJAJIAAARIgKABIgDAAg");
	this.shape_16.setTransform(234.7,31.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#ED2256").s().p("AgIANQgDgBgCgDQAAAAAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBIADgGQABgFACgDIADgHIAIACQAEABADAGQAEAFgBADQgBALgIAHQgIgEgFgBg");
	this.shape_17.setTransform(141.4,78.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#ED2256").s().p("ADiC4IgXAAQgKAAgCgCIgHgBIgYAAQgNAAgEgCIgHgBIgfAAQgHAAgDgBIgCgBIgKAAQgGgBgDgCQgGAAgIgCIgMgEIg7gTQgHgEgMgEIgUgHQgXgKgRgJQgUgLgMgKQgOgKgDgCIgFgEIgEgFIgGgEIgEgDIgagaQgCgFgLgKQgFgGAAgCIgCgCQgIgIgPgVIgUgdIgCgEIgGgMQgFgFgFgNIgJgPIgGgMQAAgEgFgIQgGgLgBgGQgGgHAAgFQAFgEALAAQAMAAAFgDQACgBAIABQALAAACgCIAHgBIAQgCIANAAIAKgCIAJgBIAIgBQAGAAACgCIAHAAQAOAAAFgCIAMgBQALAAAEgCQACgBAGAAQANAAAEgCIAKAAIAHgBIAHgBIAMgBIAGAAIAGgCQABgBAGAAIAJAAQAGAAAEgCQADgCAIABQAIAAACgBIAPgBQAIgBAGADQANAFAJAMIAEAIIAGgFIAnARQAKAFAFgBIAIACIAQAFQAEAAAFACIAJADIgDAaQgCABgFAAIgIABIgHAMQACAGADACQADAGgDAGQgDAEgBAGQAAAAAAAAQAAABAAAAQAAAAABABQAAAAABABQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABgBIAGgFIADgFQADgCADgBIADgCQAFgFAHgGIAPgKIAGgCIAGgLQACgEADgBIAJgEQAFgDAEgBQADAAAEgEQgHgCgCgJIgDgIIATgUQAJgCAHAFIANgNIAMACQAFAAACAFQAGARgGASQgEAFAEAFQAFAKgFANIgDAEQgCACgEgBQgFgBgCADQADABAFAFQAEAEAEABQAAAAAAAAQABABAAAAQABABAAAAQAAABAAABIABAKQAAAGgEAEIADAGIAAAIIAAAWQgBABgFAAQgEABgBACIgEAAQgDgDgBAEQgDAEADADIAHAGIgGAIQABAHAIAEIAMAFQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAIADAGQADAHAAAIIAAAaQAAAJACACIABAGIAAARQAAAKACAEIABAGIAAAWQAAAGgGACIgVALIgNAFQgGADgGAAQgEADgGAAIgLAAgACcBJQACAHgFAJQAEADADgEIADgIIAHAAQAFAAACgCQABAAAAgBQAAAAAAAAQABAAAAAAQAAABAAAAQACACAFAAQAFAAACACQADACADgCIAFgEQAEgEgEgGQgDgFAFgDIAJgHQAGgFAEgCIgFgBIgIACIgIABIgGAHQgDAHgGgBIgFAAIgHgKIgEAMIgUABQgDgEgEABQgFABgCAGQADAEAGAAIACAAQAEAAACABgABeBLQgFACgCACIAFABIAGAFIAGgGIgDgJQgCADgFACgABsgTIAHANIgEAJIgTAFIgEAHIAGAEIAJANIgBAHQAAAEgEAEIgBACIAFAHIADgDIAMgVQADgCgDgFIgGgLIgBgHIANgGQALAEACACQAGAEABAIIAWgMQAEgGgCgDIgSgIQgHAHgJgDIgMgHIABgLQgLgDgBgBIgIgLIAKgLQgCgFgEAAQgEAAgCAEIgGAJIgFALQACACABAFIAAAGIADgGgABIA1QAAAAABABQAAAAAAAAQABABAAAAQAAAAABAAQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBAAgBIgDgDgACrAgIAGAIIADgFQgDgEgDAAIgDABgACDAfIAFAEQACgEgCgDgADrAbIgBACIACACIADgCIgBgDIgBAAIgCABgADCAUQgEADgCAEIAFABIAFgEQAAgBAAgBQAAgBgBAAQAAgBgBAAQAAAAgBAAIgBAAgACIAcQABAAABgBQAAAAABAAQAAAAAAAAQABAAAAgBIgBgDgAArAKQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABQADADAEgCIgEgDIgBgBIgCABgABTgBIAJgRIAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBABQgCACgFACIgMADQgCAGACADIAGgCQAEAAAFACgADBhBQgGAFAEAFQACAFADABIAJAEIABALIAAAHIADAOIAAADIAEACIgCgGIABgEIABgDQABgFgBgCIgDgLIgDgMQgIgCABgKQABgFgDgCIgFAFgAA9gdIACAAIgBgFIgBAAgAA+g5IgGAGIAAACIAAABQABAAAAABQABAAAAAAQABAAAAAAQAAAAAAAAIAHgGIABgCIgBgCIgDAAIgBAAgABIhTQADACAAAFQgBAFACABIACgBQAFgHgIgGgADlhaQgDACgBADQgBADABACIAIAJIAOgMIgQgHIgBAAIgBAAg");
	this.shape_18.setTransform(29.9,56.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#ED2256").s().p("AB4DdQgFgDgOAAImDAAQgNAAgHgJIgEgEIAAhtQAAgJACgFIABgJIAAiqIgBgLIACgKQADgGgDgGQgDgHADgGQADgHgCgFIgCgOQAAgFgCgCQgCgDABgKIADAAIAKgBQAGgBADgBIAKAAIAHgBQAEAAACgCIAFgBQAMAAAGgCIAPAAQAHAAAEgCQADgCAHABQAMAAADgCIAIgBIAJAAIAJgCIAKAAIAOgCIAJgBIAIAAQAEAAAEgDQACgBAIABQAKAAAEgCQACgBAHAAQAMAAAEgBIAJgBIAIAAQAFAAADgCIAFAAIAABEQAAAIACADIABAHIAAAUQADAFAPAKQAGAEAHAAIAdgBQAHAAADgBQACgBAIAAICXAAQALAAAEgCIAHAAIBQAAQADAAADADIABAEQAIAHgGAKIgDAHQgEAGADADQADAEgCACQgDAFgCANIgGALIgIAMIAAAHIgCAPQgCAJgEAHQgCAFgDAPIgCAJQgEAHABAGQAAAGgDALIgEAKQgCAIgIATIgBACQgIAIAGAGIgBAMIgEANIgDANIgEAOQgCAGgFAEQgKAIgOAHQgLAGgLAAg");
	this.shape_19.setTransform(98.6,53.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#ED2256").s().p("Ag+FCQgGAAgBgBQgDgCgKAAIibAAQgQAAgHgKIgDgDIAAivQAAgJADgEQABgBAAgIIAAhNQAAgGAFgCIAFgEQAMgHAKAAIAOAAIAOACIAIABQAFAAADACIAGAAIAMACQABABAGAAIAZAAQAPABAUgJQASgGAEgKIADgEIAEgIIADgMQABgIgBgFIAAgCQABgIgGgXQgDgJgGgGQgKgPgHgFQgFgFgCgGQgCgHgGgFIgpgpIgngoIgEgDQgEADgRAAQgFABgBgFQgCgFgEgFIgJgJIAAgBQgBgGACgGIADgMIACgGQgBgDACgFIACgIIAHgBQAWgDAIAAQAFgCAQAAIAFgBQAEgCAKAAQALAAAEgCIAGgBQAOAAAFgCQAEgCAKABQAJAAADgBQACgBAGAAIAJAAIAJgCIAMgBQAIAAADgCIAIgBIAJAAQAGAAADgCQACgBAHAAQAKAAADgCIADAAIADAAQAMAAAEgCIAMgBIALgCIAJgBIARgCIANAAIAKgCQAJgCAHACQAFAAAHAHIA1A1IAIAKQAGAIABACIAEAFQAEADAAADQADACAEAHQACAHAEACQACAIAHANIAIATQAEAHAAAGQABAGAEAKIAEAUIACAGIABACQgBAFACAIQACAIAAAEQgBAHACAGQABABAAAHIAAAeQAAAHACADQAEAFgEAHIgFAQQgCAHAAAJQAAAHgCACIgBABQABAHgEAMIgGAZIgNAmIgFANQgFAPgDAFQgDAEgCAIQgHAOgNATQgKARgRAQIgXAXIgIAGIgEAEQgIAHgQAKQgbASgVAGIgPAEQgLACgNAJQgJAFgCADIgIAEQgGACgFAAg");
	this.shape_20.setTransform(262.7,43.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#ED2256").s().p("AlUE6IgJgIQgFgFADgGQAGgLAFgFQgHgJAAgIQAAgEgDgCQgDgDgEACQgHADgVAAQgJgBgMAFQgJAEgIgEQgGgDgFACQgFADgKgEQgFgCgGAAIgdAAIgEgGIgDgDQgGgFADgGQACgDABgIIAEgLIADgOQABgJACgEIADgJIACgJIADgPIADgHIAFgSIAEgKIACgKQABgHADgEIAFgNQAHgPABgIIACgHIAAgEQADgGAAgIQACgDAAgHQABgHACgDQgBgCACgEIACgFIALgkIAKggIAJgcIABgEQADgDgCgIQgLgBgDgKIgCgCIgDgGQAAgBAEgEIAHgIQAGgHAIAEIAGABQAFgFACgLIADgMIACgEQABgDgCgCQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAgBAAgBIgBgFQgDgEAEgEQALgLAGgQIgCgEQgDgLAKgDIAIgDQAFgBADAAQAKACAHgEIAIAAQAMAAAEgCIAMgBQAJAAADgCIAHgBQAMAAADgCIAHAAIAJAAIAJgCIANgBIAPgCIAIgBIAIAAQAFAAADgCQADgCAIABQAJAAAFgBQADgCAJABQAJAAADgCIAHgBIAJAAQAGAAAEgCIAIgBIAIAAIAIgCIAMAAQAIAAAEgCIAIgBQABAGgCAFIgNAoIgCAJQgJAZgCAJQgCACAAAEIgCAFIgBAGIAFABIBMAAIAFgBQAMgEAPAEIAMAEQAIAFAKgFIADgCIAAgPQAAgNACgFQACgHgEgJQgIgRgBgJQgEgFgDgJQgDgLgDgEQgCgDgBgGIgCgKQACgBAHAAQAJAAAFgCQACgBAKAAQAJAAADgCIAIgBQAOAAAEgCIAIAAIAQgCIAOgBIAHAAQADAAADgCIAGgBIAKAAIAKgCIALAAQAIAAAEgCQADgCAHABQAMAAADgCIAIgBIARgCIANAAIAKgCIAKgBIAMgCQAEgCAIABQAFAAACAGIAKAjIACAJIgCAIQAIAIABAJIAAABQAGAIAGAUIABAFQAAAGAGAPQACADAAADIACANQACAHgBAGQAGAFAAABIAHAVIAGAVQAEAGADAOIAIAZIAJAeIAEAKIAFATIAGAOIACAJIADAIQADAFACAMIAIAcIABADQADAGAAADIgEAJIAGAGQAHAHAHASIAIAXIADAMIAFALQABADABAIIAKAfIAHAXIgFAGIgFAHIgHABQgFAAgDACIh+AAIgEgFIgCABQgFAFgIgBIg9AAQgGAAgEgCIgJgBIgxAAQgDgHgBgDIgFgRIgFgRIgNgoIgEgLIgDgJQgEgHgIgDIgcgIQgHgBgDABQgEACgKAAIgPAAQgGAAgDACIgIABIgiAAIgHAAQgFADgNAAIiGAAQgLAAgEABQgBABgGAAIgTAAQgMAWgGATIgBADQgDAEgCAJIgFANIgHARQgFAKgBAGIgEAIQgCAEgEAAIgMACQgIACgHgCIgMgCIgGgBQgKgEgHAFQgDACgFAAQgFABgCABQgBgBgFAAQgEAAgCgCIgHgDQgDABgCAEIgDAGIgHAIQgCACgGABQAAAAAAABQAAAAAAABQABAAAAABQABAAABAAIAJAFQAHAEAAAFQAAAAAAABQAAABAAAAQAAABAAAAQABAAAAAAQADAEgEAGQgHAKgMAAIgHgBg");
	this.shape_21.setTransform(178.5,49.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#ED2256").s().p("Al7F6IgCgCIgLgLIAAgNIAAmkQAAgMACgEIABiuQAAgKABgCIAFgBQAKgBgEgKIgEgIIACgCQACAAAHgBIAJgCQALABAHgDIALgBQAIAAADgCIAHAAIAMAAQAHAAAFgCIAJgBQAKAAADgCQADgBAGAAQANAAAEgCIAJAAIAIAAQAEgBADgBIAGgBQANgBACgCIALAAQALAAADgCQACgBAHAAQAMAAAEgCIACAAQAGgBACADQABACgBAGIAAACIAEABIDsAAQAMAAAEADIAHAAQABgEAAgSIAAgUIAGgEIALgCQAHgCAEAAQALABAEgCIAIgBIAJAAQAFAAAEgCIAKgBQAIAAAGgCQADgBAJAAQAJAAACgCIAIAAIAJAAQAGAAADgCIALgBIAIAAIAIgCIALgBIAOgCQACgBAIAAQAKAAAFgBQACgCAFABQANAAAEgCIAIgBIAIAAIABBVQAAAIABAEQABACAAAIIAABfQABANADADIAAAGIAABgQAAAGgCADQgBAAAAABQAAAAAAABQAAAAAAABQgBABAAAAIAAGSQABAGgFADIgIAFQgEADgFgCIgIAAIhGAAQgKAAgEABIgGABIh/AAIgBgBIgLgLIAAgPIAAgbQAAgJACgEIAAgKIAAlGQgCgCgHAAIhBAAQgMAAgEgCIgGgBIilAAIgHABIAAAFIAAAaQAAAIgCAEIgBAFIAAAXQACAFABAHIAAAOIAABKQgBAIACACIABAIIAABoIgBAFQgBAEAAAOIAAAgIgBAJQAAAFACAEIABACIgBAdIgHADIgGAGIgIABQgFAAgCACIgIABg");
	this.shape_22.setTransform(337.5,37.9);

	this.addChild(this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,376.9,81.5);


(lib.books = function() {
	this.initialize();

	// Calque 1
	this.instance = new lib.book1();
	this.instance.setTransform(66.3,8.8,0.664,0.664);

	this.instance_1 = new lib.book2();
	this.instance_1.setTransform(0,0,0.664,0.664);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,150,149.7);


(lib.slogan = function() {
	this.initialize();

	// Calque 1
	this.instance = new lib.jay_crownover();
	this.instance.setTransform(115.5,36.6,1,1,0,0,0,89.2,8.8);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,10);

	this.instance_1 = new lib.nouvelle_serie();
	this.instance_1.setTransform(115.8,9.2,1,1,0,0,0,115.8,9.2);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,8);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4,-4,243,59.8);


(lib.btn = function() {
	this.initialize();

	// Calque 2
	this.instance = new lib.discover_bold();
	this.instance.setTransform(55.7,9.4,0.56,0.562,0,0,0,62.6,10.3);

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#51A5B6").s().rr(-68.2,-10.55,136.4,21.1,2);
	this.shape.setTransform(55.4,10.5,0.812,1);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,110.8,21.1);


// stage content:
(lib.clash_300x250 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{loop_btn:174});

	// timeline functions:
	this.frame_196 = function() {
		this.gotoAndPlay('loop_btn');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(196).call(this.frame_196).wait(1));

	// btn
	this.instance = new lib.btn();
	this.instance.setTransform(149.9,262.4,1,1,0,0,0,55.4,10.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(150).to({_off:false},0).to({y:229.6},14,cjs.Ease.get(1)).wait(10).to({scaleX:0.9,scaleY:0.9},11).to({scaleX:1,scaleY:1},11).wait(1));

	// books
	this.instance_1 = new lib.books();
	this.instance_1.setTransform(150,98.9,0.303,0.303,0,0,0,75,74.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60).to({_off:false},0).wait(1).to({regY:74.8,scaleX:0.31,scaleY:0.31,alpha:0.002},0).wait(1).to({scaleX:0.31,scaleY:0.31,y:98.8,alpha:0.008},0).wait(1).to({scaleX:0.32,scaleY:0.32,y:98.7,alpha:0.019},0).wait(1).to({scaleX:0.33,scaleY:0.33,alpha:0.034},0).wait(1).to({scaleX:0.34,scaleY:0.34,y:98.5,alpha:0.053},0).wait(1).to({scaleX:0.36,scaleY:0.36,y:98.3,alpha:0.077},0).wait(1).to({scaleX:0.38,scaleY:0.38,y:98.2,alpha:0.105},0).wait(1).to({scaleX:0.4,scaleY:0.4,y:97.9,alpha:0.137},0).wait(1).to({scaleX:0.43,scaleY:0.43,y:97.7,alpha:0.174},0).wait(1).to({scaleX:0.45,scaleY:0.45,y:97.4,alpha:0.215},0).wait(1).to({scaleX:0.48,scaleY:0.48,y:97.1,alpha:0.26},0).wait(1).to({scaleX:0.52,scaleY:0.52,y:96.7,alpha:0.308},0).wait(1).to({scaleX:0.55,scaleY:0.55,y:96.4,alpha:0.359},0).wait(1).to({scaleX:0.59,scaleY:0.59,y:96,alpha:0.413},0).wait(1).to({scaleX:0.63,scaleY:0.63,y:95.6,alpha:0.469},0).wait(1).to({scaleX:0.67,scaleY:0.67,y:95.2,alpha:0.528},0).wait(1).to({scaleX:0.71,scaleY:0.71,y:94.8,alpha:0.588},0).wait(1).to({scaleX:0.76,scaleY:0.76,y:94.4,alpha:0.649},0).wait(1).to({scaleX:0.8,scaleY:0.8,y:93.9,alpha:0.712},0).wait(1).to({scaleX:0.84,scaleY:0.84,y:93.5,alpha:0.775},0).wait(1).to({scaleX:0.89,scaleY:0.89,y:93.1,alpha:0.838},0).wait(1).to({scaleX:0.93,scaleY:0.93,y:92.7,alpha:0.895},0).wait(1).to({scaleX:0.96,scaleY:0.96,y:92.4,alpha:0.937},0).wait(1).to({scaleX:0.98,scaleY:0.98,y:92.2,alpha:0.967},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:92.1,alpha:0.986},0).wait(1).to({scaleX:1,scaleY:1,y:92,alpha:0.997},0).wait(1).to({scaleX:1,scaleY:1,x:150.1,y:91.9,alpha:1},0).to({scaleX:1.03,scaleY:1.03,x:149.6,y:91.4},52).wait(1).to({scaleX:1.02,scaleY:1.02,y:92.4},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:93.8},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:95.4},0).wait(1).to({scaleX:0.97,scaleY:0.97,y:97.1},0).wait(1).to({scaleX:0.95,scaleY:0.94,y:99.1},0).wait(1).to({scaleX:0.92,scaleY:0.92,y:101.3},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:149.7,y:103.7},0).wait(1).to({scaleX:0.86,scaleY:0.86,y:106.3},0).wait(1).to({scaleX:0.83,scaleY:0.83,y:108.9},0).wait(1).to({scaleX:0.8,scaleY:0.8,y:111.6},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:149.8,y:114.3},0).wait(1).to({scaleX:0.74,scaleY:0.74,y:117.1},0).wait(1).to({scaleX:0.71,scaleY:0.71,y:119.9},0).wait(1).to({scaleX:0.69,scaleY:0.69,y:121.8},0).wait(1).to({scaleX:0.68,scaleY:0.68,y:122.6},0).wait(1).to({regX:74.9,scaleX:0.67,scaleY:0.67,x:149.9,y:122.9},0).wait(42));

	// books text
	this.instance_2 = new lib.slogan();
	this.instance_2.setTransform(148.6,202.5,0.773,0.773,0,0,0,115.8,22.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(79).to({_off:false},0).to({scaleX:1,scaleY:1,x:148.7,alpha:1},38,cjs.Ease.get(0.5)).to({regY:22.6,scaleX:1.06,scaleY:1.06,x:148.6,y:202.4},22,cjs.Ease.get(-0.5)).wait(1).to({regY:23.3,scaleX:1.05,scaleY:1.05,y:202.8},0).wait(1).to({scaleX:1.03,scaleY:1.03,y:202.5},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:148.7,y:202.1},0).wait(1).to({scaleX:1,scaleY:1,y:201.6},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:148.8,y:201.1},0).wait(1).to({scaleX:0.96,scaleY:0.96,y:200.5},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:148.9,y:200},0).wait(1).to({scaleX:0.91,scaleY:0.91,y:199.3},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:149,y:198.6},0).wait(1).to({scaleX:0.85,scaleY:0.85,y:198},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:149.1,y:197.2},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:149.2,y:196.5},0).wait(1).to({scaleX:0.76,scaleY:0.76,y:195.8},0).wait(1).to({scaleX:0.74,scaleY:0.73,x:149.3,y:195.1},0).wait(1).to({scaleX:0.72,scaleY:0.72,y:194.8},0).wait(1).to({regY:22.7,scaleX:0.72,scaleY:0.72,x:149.4,y:194.3},0).wait(42));

	// clash_top
	this.instance_3 = new lib.clash_top();
	this.instance_3.setTransform(95.6,99.2,0.505,0.505,0,0,0,190.1,39.6);
	this.instance_3.alpha = 0;
	this.instance_3.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:149.6,y:94.2,alpha:1},17,cjs.Ease.get(-0.5)).to({regX:190,scaleX:0.5,scaleY:0.5,x:144.3,y:93.2},42).to({regX:190.1,scaleX:0.51,scaleY:0.51,x:125.6,y:74.2,alpha:0},14,cjs.Ease.get(1)).to({_off:true},1).wait(65).to({_off:false,scaleX:0.34,scaleY:0.34,x:148.7,y:20.5},0).to({alpha:1},25,cjs.Ease.get(-0.5)).wait(33));

	// clash_bottom
	this.instance_4 = new lib.clash_bottom();
	this.instance_4.setTransform(185.4,141,0.505,0.505,0,0,0,188.5,40.5);
	this.instance_4.alpha = 0;
	this.instance_4.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:155.4,y:116,alpha:1},17,cjs.Ease.get(-0.5)).to({regY:40.6,scaleX:0.5,scaleY:0.5,x:159.9,y:114},42).to({regY:40.5,scaleX:0.51,scaleY:0.51,x:175.4,y:136,alpha:0},14,cjs.Ease.get(1)).to({_off:true},1).wait(65).to({_off:false,scaleX:0.34,scaleY:0.34,x:152.6,y:35.4},0).to({alpha:1},25,cjs.Ease.get(-0.5)).wait(33));

	// clash text
	this.instance_5 = new lib.clash_text();
	this.instance_5.setTransform(150.7,161.1,0.911,0.911,0,0,0,131.7,12.8);
	this.instance_5.alpha = 0;
	this.instance_5.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},44,cjs.Ease.get(1)).to({_off:true},1).wait(79).to({_off:false,scaleX:0.82,scaleY:0.82,x:152.6,y:59.1,alpha:0},0).to({alpha:1},25).wait(33));

	// logo
	this.instance_6 = new lib.logo();
	this.instance_6.setTransform(260.1,211.1,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(197));

	// bg
	this.instance_7 = new lib.background();

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(197));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(141.7,125,308.4,250);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;