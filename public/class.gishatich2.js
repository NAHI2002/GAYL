class Gishatich2 extends mayrakan {
//red
    move() {
        var emptyCord = this.getDirections(0);
        var cord = random(emptyCord);

        if (cord) {
            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 4
                ;

            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

        }
    }

    mul() {
        var emptyCord = this.getDirections(0);

        var cord = random(emptyCord);
        if (cord) {
            var x = cord[0];
            var y = cord[1];

            this.multiply++;

            var norgishatich2 = new Gishatich2(x, y, this.index);
            gishat2Arr.push(norgishatich2);

            matrix[y][x] = 1;
            this.multiply = 0;
        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in gishat2Arr) {
            if (this.x == gishat2Arr[i].x && this.y == gishat2Arr[i].y) {
                gishat2Arr.splice(i, 1);
            }
        }
    }

}