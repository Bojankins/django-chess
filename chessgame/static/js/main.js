$( document ).ready(function() {
    
    generateBoard();

    function generateBoard() {
        for(i = 1; i <= 8; i ++){
            $('#board').append('<tr id='+i+'></tr>');

            if(i == 1){
                $('#'+i).append(`<td class="${i} 1 odd black rook">r</td>`);
                $('#'+i).append(`<td class="${i} 2 even black knight">kn</td>`);
                $('#'+i).append(`<td class="${i} 3 odd black bishop">b</td>`);
                $('#'+i).append(`<td class="${i} 4 even black king">k</td>`);
                $('#'+i).append(`<td class="${i} 5 odd black queen">q</td>`);
                $('#'+i).append(`<td class="${i} 6 even black bishop">b</td>`);
                $('#'+i).append(`<td class="${i} 7 odd black knight">kn</td>`);
                $('#'+i).append(`<td class="${i} 8 even black rook">r</td>`);
            }

            if( i == 2){
                $('#'+i).append(`<td class="${i} 1 even black pawn">p</td>`);
                $('#'+i).append(`<td class="${i} 2 odd black pawn">p</td>`);
                $('#'+i).append(`<td class="${i} 3 even black pawn">p</td>`);
                $('#'+i).append(`<td class="${i} 4 odd black pawn">p</td>`);
                $('#'+i).append(`<td class="${i} 5 even black pawn">p</td>`);
                $('#'+i).append(`<td class="${i} 6 odd black pawn">p</td>`);
                $('#'+i).append(`<td class="${i} 7 even black pawn">p</td>`);
                $('#'+i).append(`<td class="${i} 8 odd black pawn">p</td>`);
            }


            if(i >2 && i < 7){
                if(i%2 == 1 ){

                    for(j = 1; j <= 8; j ++){
                        
                        if(j%2 == 1){
                            $('#'+i).append(`<td class="${i} ${j} odd"></td>`);
                        }else{
                            $('#'+i).append(`<td class="${i} ${j} even"></td>`);
                        }
                    };
                }else{
                    for(j = 1; j <= 8; j ++){
                        if(j%2 == 1){
                            $('#'+i).append(`<td class="${i} ${j} even"></td>`);
                        }else{
                            $('#'+i).append(`<td class="${i} ${j} odd"></td>`);
                        };
                    };
                };  
            } 

            if(i == 7){
                $('#'+i).append(`<td class="${i} 1 odd black pawn">p</td>`);
                $('#'+i).append(`<td class="${i} 2 even black pawn">p</td>`);
                $('#'+i).append(`<td class="${i} 3 odd black pawn">p</td>`);
                $('#'+i).append(`<td class="${i} 4 even black pawn">p</td>`);
                $('#'+i).append(`<td class="${i} 5 odd black pawn">p</td>`);
                $('#'+i).append(`<td class="${i} 6 even black pawn">p</td>`);
                $('#'+i).append(`<td class="${i} 7 odd black pawn">p</td>`);
                $('#'+i).append(`<td class="${i} 8 even black pawn">p</td>`);
            }
            if(i == 8){
                $('#'+i).append(`<td class="${i} 1 even white rook">r</td>`);
                $('#'+i).append(`<td class="${i} 2 odd white knight">kn</td>`);
                $('#'+i).append(`<td class="${i} 3 even white bishop">b</td>`);
                $('#'+i).append(`<td class="${i} 4 odd white queen">q</td>`);
                $('#'+i).append(`<td class="${i} 5 even white king">k</td>`);
                $('#'+i).append(`<td class="${i} 6 odd white bishop">b</td>`);
                $('#'+i).append(`<td class="${i} 7 even white knight">kn</td>`);
                $('#'+i).append(`<td class="${i} 8 odd white rook">r</td>`);
            }
        };  
    };
    



    var number = Math.random();
    var turn;
    console.log(number)
    if(number <= .5){
        turn = 'black'
    }else{
        turn = 'white'
    }

    
      

    
});
