//գիշատիչ 3
class Gishatich3 extends mayrakan {
    //purple
    move() {
        var emptyCord = this.getDirections(0);
        var cord = random(emptyCord);

        if (cord) {
            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 5;

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

            var norgishatich3 = new Gishatich3(x, y, this.index);
            gishat3Arr.push(norgishatich3);

            matrix[y][x] = 3;
            this.multiply = 0;
        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in gishat3Arr) {
            if (this.x == gishat3Arr[i].x && this.y == gishat3Arr[i].y) {
                gishat3Arr.splice(i, 1);
            }
        }
    }

}     
