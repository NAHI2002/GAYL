 //գիշատիչ 3
 class Gishatich3{
    constructor(x, y, ind) {
        this.index = ind;
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.energy = 4;

    }

    newDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }


    getDirections(t) {
        this.newDirections();
        var found = [];

        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == t) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }




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



    eat() {

        var emptyCord = this.getDirections(4);

        var cord = random(emptyCord);

        if (cord) {
            this.multiply++;
            this.energy++;

            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;


            for (var i in gishat3Arr) {
                if (x ==gishat2Arr[i].x && y == gishat3Arr[i].y) {
                    gishat3Arr.splice(i, 1);
                }
            }
            if (this.multiply == 10) {
                this.mul();
                this.multiply = 0;
            }

        } else {
            this.move();
            this.energy--;
            if (this.energy< 50) {
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
