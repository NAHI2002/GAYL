class Gishatich2 extends mayrakan {

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



    eat() {

        var emptyCord = this.getDirections(3);

        var cord = random(emptyCord);

        if (cord) {
            this.multiply++;
            this.energy++;

            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;


            for (var i in gishat2Arr) {
                if (x == gishat2Arr[i].x && y == gishat2Arr[i].y) {
                    gishat2Arr.splice(i, 1);
                }
            }
            if (this.multiply == 10) {
                this.mul();
                this.multiply = 0;
            }

        } else {
            this.move();
            this.energy--;
            if (this.energy < 50) {
                this.die();
                //this.energy = 10;
            }
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

            matrix[y][x] = 3;
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