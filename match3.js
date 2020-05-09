var board = {
	canvas: {
		domElement: null,
		ctx: null,
		width: 0,
		height: 0,
		clear: function() {
			this.ctx.clearRect(0, 0, this.width, this.height);
		},
		getMousePos: function(e) {
			// e = MouseEvent
			var rect = e.currentTarget.getBoundingClientRect();
			return {
				x: e.clientX - rect.left, //x position within the element.
				y: e.clientY - rect.top  //y position within the element
			}
		},
		setup: function(canvasElement) {
			this.domElement = canvasElement;
			this.ctx = this.domElement.getContext("2d");
			this.width = this.domElement.width;
			this.height = this.domElement.height;
		}
	},
	tiles: {
		spacing: 1,
		numberX: 10,
		numberY: 10,
		width: 0,
		height: 0,
		colors: ['red', 'orange', 'green', 'blue'],
		tileArray: [],
		
		fillArray: function() {
			for (var i = 0; i < this.numberY; i++) {
				this.tileArray[i] = [];
				for (var j = 0; j < this.numberX; j++) {
					this.tileArray[i][j] = {
						width: this.width,
						height: this.height,
						xOffset: (this.width + this.spacing) * j,
						yOffset: (this.height + this.spacing) * i,
						color: this.colors[Math.floor(Math.random() * this.colors.length)]
					}
				}
			}
		},
		
		getTileAt: function(x, y) {
			var rowHeight = this.height + this.spacing;
			var columnWidth = this.width + this.spacing;
			if (y % rowHeight > this.height || x % columnWidth > this.width) {
				return null;
			} else {
				var row = Math.floor(y / rowHeight);
				var column = Math.floor(x / columnWidth);
				return this.tileArray[row][column];
			}
		},
		
		setup: function() {
			this.width = Math.floor((canvas.width - (this.spacing * (this.numberX - 1))) / this.numberX);
			this.height = Math.floor((canvas.height - (this.spacing * (this.numberY - 1))) / this.numberY);
			this.fillArray();
		}
	},
	draw: function() {
		this.canvas.clear();
		for (var i = 0; i < this.tiles.numberY; i++) { 
			for (var j = 0; j < this.tiles.numberX; j++) {
				var tile = this.tiles.tileArray[i][j];
				this.canvas.ctx.fillStyle = tile.color;
				this.canvas.ctx.fillRect(tile.xOffset, tile.yOffset, tile.width, tile.height); 
			}
		}
	},
	mouseEventHandler: function(e) {
		var mPos = board.canvas.getMousePos(e);
		var tile = board.tiles.getTileAt(mPos.x, mPos.y);
		if (tile != null) {
			tile.color = "white";
			board.draw();
		}
	},
	setup: function() {
		this.canvas.setup(document.getElementById("canvas"));
		this.tiles.setup();
		this.draw();
		this.canvas.domElement.addEventListener("click", this.mouseEventHandler);
	}
}

// ease-in-out animation function
// -0.5 * Math.cos(Math.PI * x) + 0.5
// When x is between 0 and 1, so is cosine