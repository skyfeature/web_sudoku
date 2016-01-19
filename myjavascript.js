var c = 0;
var t;
var timer_is_on = 0;

function timedCount() {
    document.getElementById("tim").value = c;
    c = c + 1;
    t = setTimeout(function(){ timedCount() }, 1000);
}

function startCount() {
    if (!timer_is_on) {
        timer_is_on = 1;
        timedCount();
    }
}

function stopCount() {
    clearTimeout(t);
    timer_is_on = 0;
}
//easy goes here:
var qsudoku_list = [[[5,3,0,0,7,0,0,0,0],[6,0,0,1,9,5,0,0,0],[0,9,8,0,0,0,0,6,0],
[8,0,0,0,6,0,0,0,3],[4,0,0,8,0,3,0,0,1],[7,0,0,0,2,0,0,0,6],
[0,6,0,0,0,0,2,8,0],[0,0,0,4,1,9,0,0,5],[0,0,0,0,8,0,0,7,9]],[[0,1,0,0,2,0,0,5,7],[0,2,9,0,8,0,0,6,0],[5,0,8,0,0,0,0,0,4],[1,0,5,0,9,0,0,0,3],[0,0,0,6,0,1,0,0,0],[4,0,0,0,3,0,9,0,8],[3,0,0,0,0,0,1,0,2],[0,9,0,0,5,0,4,7,0],[2,4,0,0,6,0,0,3,0]],[[3,0,0,7,6,4,2,0,1],[0,0,1,9,0,0,0,6,0],[0,0,7,0,3,0,0,0,5]
,[0,3,0,4,2,0,0,0,0],[9,0,0,6,5,7,0,0,2],[0,0,0,0,9,8,0,1,0]
,[7,0,0,0,1,0,5,0,0],[0,6,0,0,0,9,3,0,0],[5,0,8,2,4,3,0,0,6]]];
var ans_sudoku_list = [[[5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],
[8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],
[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]],[[6,1,4,3,2,9,8,5,7],[7,2,9,4,8,5,3,6,1],[5,3,8,7,1,6,2,9,4]
,[1,7,5,8,9,2,6,4,3],[9,8,3,6,4,1,7,2,5],[4,6,2,5,3,7,9,1,8]
,[3,5,6,9,7,4,1,8,2],[8,9,1,2,5,3,4,7,6],[2,4,7,1,6,8,5,3,9]],[[3,5,9,7,6,4,2,8,1],[4,2,1,9,8,5,7,6,3],[6,8,7,1,3,2,4,9,5]
,[8,3,6,4,2,1,9,5,7],[9,1,4,6,5,7,8,3,2],[2,7,5,3,9,8,6,1,4]
,[7,4,3,8,1,6,5,2,9],[1,6,2,5,7,9,3,4,8],[5,9,8,2,4,3,1,7,6]]];

var sudoku_no = Math.floor(Math.random()) * 3;
var qsudoku = qsudoku_list[sudoku_no];
var ans_sudoku = ans_sudoku_list[sudoku_no];

function initializeSudoku() {
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            document.getElementById("d"+i+j).value = "";
            document.getElementById("d"+i+j).readOnly=false;
            document.getElementById("d"+i+j).style.color="#000000";
        }
    }
}


function makeSudoku() {
	for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            //alert("hi");
            if (qsudoku[i][j] != 0) {
            document.getElementById("d"+i+j).value = qsudoku[i][j];
            document.getElementById("d"+i+j).readOnly=true;
            }
            else {
                document.getElementById("d"+i+j).style.color="blue";
            }
        }
	}
}

function showSudoku() {

    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            if (document.getElementById("d"+i+j).value != ans_sudoku[i][j]) {
                document.getElementById("d"+i+j).value = ans_sudoku[i][j];
                document.getElementById("d"+i+j).readOnly=true;
                document.getElementById("d"+i+j).style.color="red";
            }
        }
    }
}

function checkSudoku() {
    var yes = 1;
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            var x = document.getElementById("d"+i+j).value;
            if (x != ans_sudoku[i][j]) {
                yes = 0;
                break;
            }
        }
    }
    return Boolean(yes);
}

function mySubmission() {
    if (Boolean(checkSudoku())) alert("Congrats!");
    else alert("You failed!");
}

function myQuit() {
    if (confirm("Show the Solution?") == true){
        showSudoku(); stopCount();
    }
}


function swapRow1() {
    var randomRow1 = ans_sudoku[0];
    ans_sudoku[0] = ans_sudoku[2];
    ans_sudoku[2] = randomRow1;
    var randomRow11 = qsudoku[0];
    qsudoku[0] = qsudoku[2];
    qsudoku[2] = randomRow11;
}

function swapRow2() {
    var randomRow2 = ans_sudoku[3];
    ans_sudoku[3] = ans_sudoku[4];
    ans_sudoku[4] = randomRow2;
    var randomRow22 = qsudoku[3];
    qsudoku[3] = qsudoku[4];
    qsudoku[4] = randomRow22;
}
function swapRow3() {
    var randomRow3 = ans_sudoku[7];
    ans_sudoku[7] = ans_sudoku[8];
    ans_sudoku[8] = randomRow3;
    var randomRow33 = qsudoku[7];
    qsudoku[7] = qsudoku[8];
    qsudoku[8] = randomRow33;
}
function swapCol1() {
    for (var i = 0; i < 9; i++) {
        var randomCol1 = ans_sudoku[i][0];
        ans_sudoku[i][0] = ans_sudoku[i][2];
        ans_sudoku[i][2] = randomCol1;
        var randomCol11 = qsudoku[i][0];
        qsudoku[i][0] = qsudoku[i][2];
        qsudoku[i][2] = randomCol11;
    }
}
function swapCol2() {
    for (var i = 0; i < 9; i++) {
        var randomCol2 = ans_sudoku[i][4];
        ans_sudoku[i][4] = ans_sudoku[i][5];
        ans_sudoku[i][5] = randomCol2;
        var randomCol22 = qsudoku[i][4];
        qsudoku[i][4] = qsudoku[i][5];
        qsudoku[i][5] = randomCol22;
    }
}
function swapCol3() {
    for (var i = 0; i < 9; i++) {
        var randomCol3 = ans_sudoku[i][6];
        ans_sudoku[i][6] = ans_sudoku[i][8];
        ans_sudoku[i][8] = randomCol3;
        var randomCol33 = qsudoku[i][6];
        qsudoku[i][6] = qsudoku[i][8];
        qsudoku[i][8] = randomCol33;
    }
}

function swapBlockR1() {
    var row1 = ans_sudoku[0];
    var row2 = ans_sudoku[1];
    var row3 = ans_sudoku[2];
    ans_sudoku[0] = ans_sudoku[6];
    ans_sudoku[1] = ans_sudoku[7];
    ans_sudoku[2] = ans_sudoku[8];
    ans_sudoku[6] = row3;
    ans_sudoku[7] = row2;
    ans_sudoku[8] = row1;
    var row11 = qsudoku[0];
    var row22 = qsudoku[1];
    var row33 = qsudoku[2];
    qsudoku[0] = qsudoku[6];
    qsudoku[1] = qsudoku[7];
    qsudoku[2] = qsudoku[8];
    qsudoku[6] = row33;
    qsudoku[7] = row22;
    qsudoku[8] = row11;
}
function swapBlockR2() {
    var row14 = ans_sudoku[3];
    var row24 = ans_sudoku[4];
    var row34 = ans_sudoku[5];
    ans_sudoku[3] = ans_sudoku[6];
    ans_sudoku[4] = ans_sudoku[7];
    ans_sudoku[5] = ans_sudoku[8];
    ans_sudoku[6] = row34;
    ans_sudoku[7] = row24;
    ans_sudoku[8] = row14;
    var row114 = qsudoku[3];
    var row224 = qsudoku[4];
    var row334 = qsudoku[5];
    qsudoku[3] = qsudoku[6];
    qsudoku[4] = qsudoku[7];
    qsudoku[5] = qsudoku[8];
    qsudoku[6] = row334;
    qsudoku[7] = row224;
    qsudoku[8] = row114;
}
function swapBlockC1() {
    for (var i = 0; i < 9; i++) {
        var cont1 = ans_sudoku[i][0];
        ans_sudoku[i][0] = ans_sudoku[i][7];
        ans_sudoku[i][7] = cont1;
    }
    for (var i = 0; i < 9; i++) {
        var cont2 = ans_sudoku[i][1];
        ans_sudoku[i][1] = ans_sudoku[i][8];
        ans_sudoku[i][8] = cont2;
    }
    for (var i = 0; i < 9; i++) {
        var cont3 = ans_sudoku[i][2];
        ans_sudoku[i][2] = ans_sudoku[i][6];
        ans_sudoku[i][6] = cont3;
    }
    for (var i = 0; i < 9; i++) {
        var cont11 = qsudoku[i][0];
        qsudoku[i][0] = qsudoku[i][7];
        qsudoku[i][7] = cont11;
    }
    for (var i = 0; i < 9; i++) {
        var cont22 = qsudoku[i][1];
        qsudoku[i][1] = qsudoku[i][8];
        qsudoku[i][8] = cont22;
    }
    for (var i = 0; i < 9; i++) {
        var cont33 = qsudoku[i][2];
        qsudoku[i][2] = qsudoku[i][6];
        qsudoku[i][6] = cont33;
    }
}
function swapBlockC2() {
    for (var i = 0; i < 9; i++) {
        var cont14 = ans_sudoku[i][3];
        ans_sudoku[i][3] = ans_sudoku[i][1];
        ans_sudoku[i][1] = cont14;
    }
    for (var i = 0; i < 9; i++) {
        var cont24 = ans_sudoku[i][4];
        ans_sudoku[i][4] = ans_sudoku[i][0];
        ans_sudoku[i][0] = cont24;
    }
    for (var i = 0; i < 9; i++) {
        var cont34 = ans_sudoku[i][5];
        ans_sudoku[i][5] = ans_sudoku[i][2];
        ans_sudoku[i][2] = cont34;
    }
    for (var i = 0; i < 9; i++) {
        var cont114 = qsudoku[i][3];
        qsudoku[i][3] = qsudoku[i][1];
        qsudoku[i][1] = cont114;
    }
    for (var i = 0; i < 9; i++) {
        var cont224 = qsudoku[i][4];
        qsudoku[i][4] = qsudoku[i][0];
        qsudoku[i][0] = cont224;
    }
    for (var i = 0; i < 9; i++) {
        var cont334 = qsudoku[i][5];
        qsudoku[i][5] = qsudoku[i][2];
        qsudoku[i][2] = cont334;
    }
}

function changeValue(){
    var p = Math.floor(Math.random() * 9) + 1;
    var q = Math.floor(Math.random() * 9) + 1;
    while (q == p) {
        q = Math.floor(Math.random() * 9) + 1;
    }
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            if (ans_sudoku[i][j] == p) {
                ans_sudoku[i][j] = q;
            }
            else if (ans_sudoku[i][j] == q) {
                ans_sudoku[i][j] = p;
            } 
        }

    }
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            if (qsudoku[i][j] == p) {
                qsudoku[i][j] = q;
            }
            else if (qsudoku[i][j] == q) {
                qsudoku[i][j] = p;
            } 
        }

    }
}

function swapDiag() {
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            var ans_temp = ans_sudoku[i][j];
            ans_sudoku[i][j] = ans_sudoku[j][i];
            ans_sudoku[j][i] = ans_temp;
            var qtemp = qsudoku[i][j];
            qsudoku[i][j] = qsudoku[j][i];
            qsudoku[j][i] = qtemp;
        }
    }
}
/*
var swapRowFunction = [swapRow1(), swapCol2(), swapBlockR1()];
var swapColFunction = [swapBlockC1(), swapRow2(), swapCol3()];
var swapBlockRFunction = [swapRow3(), swapBlockC2(), swapDiag()];
var swapBlockCFunction = [swapCol1(), swapBlockR2(), changeValue()];

function randomMachado() {
    swapRowFunction[Math.floor(Math.random() * 3)];
    swapColFunction[Math.floor(Math.random() * 3)];
    swapBlockRFunction[Math.floor(Math.random() * 3)];
    swapBlockCFunction[Math.floor(Math.random() * 3)];
    changeValue();
    swapDiag();
    changeValue();
    changeValue();
    swapDiag();
    changeValue();
    changeValue();
} */
function randomMachado() {
    for (var k = 0; k < (Math.floor(Math.random()) * 50) + 1; k++) {
        swapRow1(); swapCol2(); swapBlockR1();
        swapBlockC1(); swapRow2(); swapCol3();
        swapCol1(); swapBlockR2(); changeValue();
    }
}