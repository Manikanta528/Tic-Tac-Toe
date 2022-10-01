let count = 0;


function startGame(){
    let start = document.getElementById("main");
    start.classList.add("hideBoard");
    let board = document.getElementById("board");
    board.classList.add("visibleBoard");
}

function backGame(){
    let start = document.getElementById("main");
    start.classList.remove("hideBoard");
    let board = document.getElementById("board");
    board.classList.remove("visibleBoard");
    location.reload();
}


function placeImg(node){
    if(count%2 == 0 && count < 10){
        if(node.innerHTML == ""){
            node.innerHTML = "X";
            node.classList.add('x');
            count++;
            check();
        } 
    }else if(count%2 != 0 && count < 10){
        if(node.innerHTML == ""){
            node.innerHTML = "O";
            node.classList.add('o');
            count++;
            check();
        }
        
    }
    if(count == 9){
        const draw = document.getElementById("Draw");
        draw.classList.add("visibleBoard");
        document.getElementById('board').classList.remove('visibleBoard');
        document.getElementById('board').classList.add('hideBoard');
    }
    console.log(count);    
}

function check(){
    const it1 = document.getElementById("item1");
    const it2 = document.getElementById("item2");
    const it3 = document.getElementById("item3");
    const it4 = document.getElementById("item4");
    const it5 = document.getElementById("item5");
    const it6 = document.getElementById("item6");
    const it7 = document.getElementById("item7");
    const it8 = document.getElementById("item8");
    const it9 = document.getElementById("item9");
    const xwon = document.getElementById("xWon");
    const owon = document.getElementById("oWon");

    if(it1.innerHTML != "" && it2.innerHTML != "" && it3.innerHTML != ""){
        if(it1.innerHTML == "X" && it2.innerHTML == "X" && it3.innerHTML == "X"){
            xwon.classList.add("visibleBoard");
            document.getElementById('board').classList.remove('visibleBoard');
            document.getElementById('board').classList.add('hideBoard');
        }
        if(it1.innerHTML == "O" && it2.innerHTML == "O" && it3.innerHTML == "O"){
            owon.classList.add("visibleBoard");
            document.getElementById('board').classList.remove('visibleBoard');
            document.getElementById('board').classList.add('hideBoard');
        }
    }
    if(it4.innerHTML != "" && it5.innerHTML != "" && it6.innerHTML != ""){
        if(it4.innerHTML == "X" && it5.innerHTML == "X" && it6.innerHTML == "X"){
            xwon.classList.add("visibleBoard");
            document.getElementById('board').classList.remove('visibleBoard');
            document.getElementById('board').classList.add('hideBoard');
        }
        if(it4.innerHTML == "O" && it5.innerHTML == "O" && it6.innerHTML == "O"){
            owon.classList.add("visibleBoard");
            document.getElementById('board').classList.remove('visibleBoard');
            document.getElementById('board').classList.add('hideBoard');
        }
    }
    if(it7.innerHTML != "" && it8.innerHTML != "" && it9.innerHTML != ""){
        if(it7.innerHTML == "X" && it8.innerHTML == "X" && it9.innerHTML == "X"){
            xwon.classList.add("visibleBoard");
            document.getElementById('board').classList.remove('visibleBoard');
            document.getElementById('board').classList.add('hideBoard');
        }
        if(it7.innerHTML == "O" && it8.innerHTML == "O" && it9.innerHTML == "O"){
            owon.classList.add("visibleBoard");
            document.getElementById('board').classList.remove('visibleBoard');
            document.getElementById('board').classList.add('hideBoard');
        }
    }
    if(it1.innerHTML != "" && it4.innerHTML != "" && it7.innerHTML != ""){
        if(it1.innerHTML == "X" && it4.innerHTML == "X" && it7.innerHTML == "X"){
            xwon.classList.add("visibleBoard");
            document.getElementById('board').classList.remove('visibleBoard');
            document.getElementById('board').classList.add('hideBoard');
        }
        if(it1.innerHTML == "O" && it4.innerHTML == "O" && it7.innerHTML == "O"){
            owon.classList.add("visibleBoard");
            document.getElementById('board').classList.remove('visibleBoard');
            document.getElementById('board').classList.add('hideBoard');
        }
    }
    if(it5.innerHTML != "" && it2.innerHTML != "" && it8.innerHTML != ""){
        if(it5.innerHTML == "X" && it2.innerHTML == "X" && it8.innerHTML == "X"){
            xwon.classList.add("visibleBoard");
            document.getElementById('board').classList.remove('visibleBoard');
            document.getElementById('board').classList.add('hideBoard');
        }
        if(it5.innerHTML == "O" && it2.innerHTML == "O" && it8.innerHTML == "O"){
            owon.classList.add("visibleBoard");
            document.getElementById('board').classList.remove('visibleBoard');
            document.getElementById('board').classList.add('hideBoard');
        }
    }
    if(it6.innerHTML != "" && it3.innerHTML != "" && it9.innerHTML != ""){
        if(it6.innerHTML == "X" && it3.innerHTML == "X" && it9.innerHTML == "X"){
            xwon.classList.add("visibleBoard");
            document.getElementById('board').classList.remove('visibleBoard');
            document.getElementById('board').classList.add('hideBoard');
        }
        if(it6.innerHTML == "O" && it3.innerHTML == "O" && it9.innerHTML == "O"){
            owon.classList.add("visibleBoard");
            document.getElementById('board').classList.remove('visibleBoard');
            document.getElementById('board').classList.add('hideBoard');
        }
    }
    if(it5.innerHTML != "" && it1.innerHTML != "" && it9.innerHTML != ""){
        if(it5.innerHTML == "X" && it1.innerHTML == "X" && it9.innerHTML == "X"){
            xwon.classList.add("visibleBoard");
            document.getElementById('board').classList.remove('visibleBoard');
            document.getElementById('board').classList.add('hideBoard');
        }
        if(it5.innerHTML == "O" && it1.innerHTML == "O" && it9.innerHTML == "O"){
            owon.classList.add("visibleBoard");
            document.getElementById('board').classList.remove('visibleBoard');
            document.getElementById('board').classList.add('hideBoard');
        }
    }
    if(it5.innerHTML != "" && it3.innerHTML != "" && it7.innerHTML != ""){
        if(it5.innerHTML == "X" && it3.innerHTML == "X" && it7.innerHTML == "X"){
            xwon.classList.add("visibleBoard");
            document.getElementById('board').classList.remove('visibleBoard');
            document.getElementById('board').classList.add('hideBoard');
        }
        if(it5.innerHTML == "O" && it3.innerHTML == "O" && it7.innerHTML == "O"){
            owon.classList.add("visibleBoard");
            document.getElementById('board').classList.remove('visibleBoard');
            document.getElementById('board').classList.add('hideBoard');
        }
    }

}

