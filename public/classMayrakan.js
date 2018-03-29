class mayrakan {
    constructor(x, y, ind) {
        this.index = ind;
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.energy = 10;

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


    eat() {
        if (this.index == 2) {
            var emptyCord = this.getDirections(1);
        } else if (this.index == 3) {
            var emptyCord = this.getDirections(2)
        } else if (this.index == 5) {
            var emptyCord = this.getDirections(3)
        }else if (this.index == 4) {
            var emptyCord = this.getDirections(3)
        }



        var cord = random(emptyCord);

        if (cord) {
            this.multiply++;
            this.energy++;

            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = this.index;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;
        }

        if (this.index == 2) {
            for (var i in xotArr) {
                if (x == xotArr[i].x && y == xotArr[i].y) {
                    xotArr.splice(i, 1);
                }
            }
        } else if (this.index == 3) {
            for (var i in eatArr) {
                if (x == eatArr[i].x && y == eatArr[i].y) {
                    eatArr.splice(i, 1);
                }
            }
        } else if (this.index == 4) {
            for (var i in gishat3Arr) {
                if (x == gishat2Arr[i] && y == gishat3Arr[i].y) {
                    gishat3Arr.splice(i, 1);
                }
            }
        }
        if (this.multiply == 10) {
            this.mul()
            this.multiply = 0;
        }

        else {
            this.move();
            this.energy--;
            if (this.energy < 3) {
                this.die();
            }
            //this.energy = 10;





        }
    }

}

