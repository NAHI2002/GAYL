var matrix = []
var side = 40;
var xotArr = [];
var eatArr = [];
var erk = 100;
var bar = 50;
var xotCount = 100;
var eatCount = 65;
var gishatCount = 35;
var gishatCount2 = 30;
var gishatCount3 = 20;
var gishatArr = [];
var gishat2Arr = [];
var gishat3Arr = [];




function setup() {
    for (var i = 0; i < erk; i++) {
        matrix.push([]);
        for (var j = 0; j < bar; j++) {
            matrix[i][j] = 0;
        }
    }

    var c = 0;
    while (c < xotCount) {
        var x = Math.floor(random(0, erk));
        var y = Math.floor(random(0, bar));
        if (matrix[x][y] == 0) {
            matrix[x][y] = 1;
            c++;
        }
    }

    var c = 0;
    while (c < eatCount) {
        var x = Math.floor(random(0, erk));
        var y = Math.floor(random(0, bar));
        if (matrix[x][y] == 0) {
            matrix[x][y] = 2;
            c++;
        }
    }
    var c = 0;
    while (c < gishatCount) {
        var x = Math.floor(random(0, erk));
        var y = Math.floor(random(0, bar));
        if (matrix[x][y] == 0) {
            matrix[x][y] = 3;
            c++;
        }
    }
    var c = 0;
    while (c < gishatCount2) {
        var x = Math.floor(random(0, erk));
        var y = Math.floor(random(0, bar));
        if (matrix[x][y] == 0) {
            matrix[x][y] = 4;
            c++;
        }
    }
    var c = 0;
    while (c < gishatCount3) {
        var x = Math.floor(random(0, erk));
        var y = Math.floor(random(0, bar));
        if (matrix[x][y] == 0) {
            matrix[x][y] = 5;
            c++;
        }
    }
    noStroke()
    frameRate(3);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');



    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 2) {
                var eatgrass = new Eatgrass(j, i, 2);
                eatArr.push(eatgrass);
            } else if (matrix[i][j] == 1) {
                var grass = new Grass(j, i, 1);
                xotArr.push(grass);
            }

            else if (matrix[i][j] == 3) {
                var gishat = new Gishatich(j, i, 3);
                gishatArr.push(gishat);
            }
            else if (matrix[i][j] == 4) {
                var gishat = new Gishatich2(j, i, 4);
                gishat2Arr.push(gishat);
            }
            else if (matrix[i][j] == 5) {
                var gishat = new Gishatich3(j, i, 5);
                gishat3Arr.push(gishat);
            }
        }
    }

}

function draw() {


    background('#acacac');
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 1) {
                fill("green");
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 2) {
                fill("orange");
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 0) {
                fill('#acacac');
                rect(j * side, i * side, side, side);
            }

            else if (matrix[i][j] == 3) {
                fill("yellow");
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 4) {
                fill("red");
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 5) {
                fill("purple");
                rect(j * side, i * side, side, side);
            }
        }
    }



    for (var i in xotArr) {
        xotArr[i].mul();
    }

    for (var i in eatArr) {
        eatArr[i].eat();
    }

    for (var i in gishatArr) {
        gishatArr[i].eat();
    }

    for (var i in gishat2Arr) {
        gishat2Arr[i].eat();
    }
    for (var i in gishat3Arr) {
        gishat3Arr[i].eat();
    }
    function weather() {
        if (frameCount % 55 >= 0 && frameCount % 55 < 15) {
            console.log("spring")

            for (var i = 0; i < matrix.length; i++) {
                for (var j = 0; j < matrix[i].length; j++) {
                    if (matrix[i][j] == 1) {
                        fill("spring");
                        rect(j * side, i * side, side, side);
                    } else if (matrix[i][j] == 2) {
                        fill("orange");
                        rect(j * side, i * side, side, side);
                    }
                    else if (matrix[i][j] == 3) {
                        fill("red");
                        rect(j * side, i * side, side, side);
                    }
                    else if (matrix[i][j] == 4) {
                        fill("DIMGRAY");
                        rect(j * side, i * side, side, side);
                    }
                    else if (matrix[i][j] == 5) {
                        fill("DARKSLATEGRAY");
                        rect(j * side, i * side, side, side);
                    }
                    else if (matrix[i][j] == 6) {
                        fill("#690505");
                        rect(j * side, i * side, side, side);
                    }
                    else if (matrix[i][j] == 0) {
                        fill('#acacac');
                        rect(j * side, i * side, side, side);
                    }
                }
            }
        }
        else if (frameCount % 55 >= 15 && frameCount % 55 < 25) {
            console.log("summer")
            for (var i = 0; i < matrix.length; i++) {
                for (var j = 0; j < matrix[i].length; j++) {
                    if (matrix[i][j] == 1) {
                        fill("Chartreuse");
                        rect(j * side, i * side, side, side);
                    } else if (matrix[i][j] == 2) {
                        fill("orange");
                        rect(j * side, i * side, side, side);
                    }
                    else if (matrix[i][j] == 3) {
                        fill("red");
                        rect(j * side, i * side, side, side);
                    }
                    else if (matrix[i][j] == 4) {
                        fill("DIMGRAY");
                        rect(j * side, i * side, side, side);
                    }
                    else if (matrix[i][j] == 5) {
                        fill("DARKSLATEGRAY");
                        rect(j * side, i * side, side, side);
                    }
                    else if (matrix[i][j] == 6) {
                        fill("#690505");
                        rect(j * side, i * side, side, side);
                    }
                    else if (matrix[i][j] == 0) {
                        fill('#acacac');
                        rect(j * side, i * side, side, side);
                    }
                }
            }
        }
        else if (frameCount % 55 >= 25 && frameCount % 55 < 35) {
            console.log("autumn")

            for (var i = 0; i < matrix.length; i++) {
                for (var j = 0; j < matrix[i].length; j++) {
                    if (matrix[i][j] == 1) {
                        fill("DarkGoldenRod");
                        rect(j * side, i * side, side, side);
                    } else if (matrix[i][j] == 2) {
                        fill("orange");
                        rect(j * side, i * side, side, side);
                    }
                    else if (matrix[i][j] == 3) {
                        fill("red");
                        rect(j * side, i * side, side, side);
                    }
                    else if (matrix[i][j] == 4) {
                        fill("DIMGRAY");
                        rect(j * side, i * side, side, side);
                    }
                    else if (matrix[i][j] == 5) {
                        fill("DARKSLATEGRAY");
                        rect(j * side, i * side, side, side);
                    }
                    else if (matrix[i][j] == 6) {
                        fill("#690505");
                        rect(j * side, i * side, side, side);
                    }
                    else if (matrix[i][j] == 0) {
                        fill('#acacac');
                        rect(j * side, i * side, side, side);
                    }
                }
            }
        }
        else if (frameCount % 55 >= 35 && frameCount % 55 < 45) {
            console.log("winter")
             for (var i = 0; i < matrix.length; i++) {
                for (var j = 0; j < matrix[i].length; j++) {
                    if (matrix[i][j] == 1) {
                        fill("white");
                        rect(j * side, i * side, side, side);
                    } else if (matrix[i][j] == 2) {
                        fill("orange");
                        rect(j * side, i * side, side, side);
                    }
                    else if (matrix[i][j] == 3) {
                        fill("red");
                        rect(j * side, i * side, side, side);
                    }
                    else if (matrix[i][j] == 4) {
                        fill("DIMGRAY");
                        rect(j * side, i * side, side, side);
                    }
                    else if (matrix[i][j] == 5) {
                        fill("DARKSLATEGRAY");
                        rect(j * side, i * side, side, side);
                    }
                    else if (matrix[i][j] == 6) {
                        fill("#690505");
                        rect(j * side, i * side, side, side);
                    }
                    else if (matrix[i][j] == 0) {
                        fill('#acacac');
                        rect(j * side, i * side, side, side);
                    }
                }
            }
        }
    }


}