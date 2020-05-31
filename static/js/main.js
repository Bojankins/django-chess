$( document ).ready(function() {
    pawn = `<img src=/static/images/pawn.png id='pawn'></img>`


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
                $('#'+i).append(`<td class="${i} 1 even black pawn first">p</td>`);
                $('#'+i).append(`<td class="${i} 2 odd black pawn first">p</td>`);
                $('#'+i).append(`<td class="${i} 3 even black pawn first">p</td>`);
                $('#'+i).append(`<td class="${i} 4 odd black pawn first">p</td>`);
                $('#'+i).append(`<td class="${i} 5 even black pawn first">p</td>`);
                $('#'+i).append(`<td class="${i} 6 odd black pawn first">p</td>`);
                $('#'+i).append(`<td class="${i} 7 even black pawn first">p</td>`);
                $('#'+i).append(`<td class="${i} 8 odd black pawn first">p</td>`);
            }


            if(i >2 && i < 7){
                if(i%2 == 1 ){

                    for(j = 1; j <= 8; j ++){
                        
                        if(j%2 == 1){
                            $('#'+i).append(`<td class="${i} ${j} odd empty"></td>`);
                        }else{
                            $('#'+i).append(`<td class="${i} ${j} even empty"></td>`);
                        }
                    };
                }else{
                    for(j = 1; j <= 8; j ++){
                        if(j%2 == 1){
                            $('#'+i).append(`<td class="${i} ${j} even empty"></td>`);
                        }else{
                            $('#'+i).append(`<td class="${i} ${j} odd empty"></td>`);
                        };
                    };
                };  
            } 

            if(i == 7){
                $('#'+i).append(`<td class="${i} 1 odd white pawn first">p</td>`);
                $('#'+i).append(`<td class="${i} 2 even white pawn first">p</td>`);
                $('#'+i).append(`<td class="${i} 3 odd white pawn first">p</td>`);
                $('#'+i).append(`<td class="${i} 4 even white pawn first">p</td>`);
                $('#'+i).append(`<td class="${i} 5 odd white pawn first">p</td>`);
                $('#'+i).append(`<td class="${i} 6 even white pawn first">p</td>`);
                $('#'+i).append(`<td class="${i} 7 odd white pawn first">p</td>`);
                $('#'+i).append(`<td class="${i} 8 even white pawn first">p</td>`);
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
    
    $('.pawn').append(pawn);

    // randomly choose if white or black starts first.
    var number = .6 //Math.random();
    var turn;
    console.log(number)
    if(number <= .5){
        turn = 'black'
    }else{
        turn = 'white'
    }


    startTurn(turn);

    //acitvates the pieces for the current turn
    function startTurn(turn){
        
        if(turn == "white"){
            $('.black').removeClass(`activated`)
            $('.white').addClass(`activated`)
        }
        if(turn == "black"){
            $('.white').removeClass(`activated`)
            $('.black').addClass(`activated`)
        }
    }
    
    //clicks a white piece
    $('.white').click(function () { 
        if(turn == 'white'){
        $('td').removeClass('selected');
        $(this).addClass('selected');
        }
        
    });

    //clicks a black piece
    $('.black').click(function () { 
        if(turn == 'black'){
        $('td').removeClass('selected');
        $(this).addClass('selected');
        }
        
    });

    //move a piece
    $('.empty').click(function(){
        if($('td').hasClass('selected')){

            if($('.selected').hasClass('pawn')){
                movePawn(this, turn)
                if($(this).hasClass(turn)){
                    turn = changeTurn(turn)
                    return turn
                }
                
            }

            else if($('.selected').hasClass('rook')){

            }

            else if($('.selected').hasClass('knight')){

            }

            else if($('.selected').hasClass('bishop')){

            }

            else if($('.selected').hasClass('queen')){

            }

            else if($('.selected').hasClass('king')){

            }
        }
    });

    function movePawn(spot, turn){
        // First move for pawn
        if($('.pawn').hasClass('first')){

            //one spot pawn move
            if(($(spot).parent().next().children().hasClass('selected')) || ($(spot).parent().next().next().children().hasClass('selected') )){
                piece = $('.selected')

                pieceLocation = $('.selected').parent().index()
                validSpot = $(spot).parent().index()
                
                pieceIndex = $('.selected')[0].cellIndex
                validSpotIndex = spot.cellIndex

                pieceType = '.pawn'

                console.log(pieceIndex)
                console.log(validSpotIndex)
                console.log(validSpot +1)
                console.log(pieceLocation)
                console.log($(spot).parent().next().next())
                if((pieceLocation == (validSpot + 1) || pieceLocation  == (validSpot +2)) && pieceIndex == validSpotIndex){
                    movePiece(piece, spot, turn);
                }
                
            }

            // if($(spot).parent().next().next().children().has('selected')){
            //     piece = $('.selected')
            //     pieceLocation = $('.selected')[0].cellIndex
            //     validSpot = spot.cellIndex

            //     pieceType = '.pawn'
            //     console.log(pieceLocation)
            //     console.log(validSpot)
            //     if(pieceLocation == validSpot){
            //         movePiece(piece, spot, turn);
            //     }
            //     else if(pieceLocation == validSpot + 1){
            //         movePiece(piece,spot,turn);
            //     }
            // }

        }
    }





    ////helper functions
    

    function movePiece(piece, spot, turn){
        piece.removeClass('white selected activated pawn');
        piece.empty();
        piece.addClass('empty')

        $(spot).removeClass('empty')
        $(spot).addClass(`pawn ${turn}`)
        $(spot).append(pawn);
    }

    function changeTurn(turn){
        console.log(turn)
        $(`td.${turn}`).removeClass('activated')

        if(turn == 'white'){
            turn = 'black'
        }else{
            turn = 'white'
        }

        $(`.${turn}`).addClass('activated')
        console.log(turn)
        return turn;
    }
});
