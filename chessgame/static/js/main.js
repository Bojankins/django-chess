$( document ).ready(function() {

    //check flipboard on selected >> empty with piece on row
    var board = $('#board');

    generateBoard(board);

    function generateBoard(board) {
        for(i = 0; i <= 7; i ++){
            board.append('<tr id='+i+'></tr>');

            if(i == 0){
                $('#'+i).append(`<td name="rook-black" class="${i} 0 odd black rook"></td>`);
                $('#'+i).append(`<td name="knight-blackL" class="${i} 1 even black knight"></td>`);
                $('#'+i).append(`<td name="bishop-black" class="${i} 2 odd black bishop"></td>`);
                $('#'+i).append(`<td name="king-black" class="${i} 3 even black king"></td>`);
                $('#'+i).append(`<td name="queen-black" class="${i} 4 odd black queen"></td>`);
                $('#'+i).append(`<td name="bishop-black" class="${i} 5 even black bishop"></td>`);
                $('#'+i).append(`<td name="knight-blackR" class="${i} 6 odd black knight"></td>`);
                $('#'+i).append(`<td name="rook-black" class="${i} 7 even black rook"></td>`);
            }

            if( i == 1){
                $('#'+i).append(`<td name="pawn-black" class="${i} 0 even black pawn first"></td>`);
                $('#'+i).append(`<td name="pawn-black" class="${i} 1 odd black pawn first"></td>`);
                $('#'+i).append(`<td name="pawn-black" class="${i} 2 even black pawn first"></td>`);
                $('#'+i).append(`<td name="pawn-black" class="${i} 3 odd black pawn first"></td>`);
                $('#'+i).append(`<td name="pawn-black" class="${i} 4 even black pawn first"></td>`);
                $('#'+i).append(`<td name="pawn-black" class="${i} 5 odd black pawn first"></td>`);
                $('#'+i).append(`<td name="pawn-black" class="${i} 6 even black pawn first"></td>`);
                $('#'+i).append(`<td name="pawn-black" class="${i} 7 odd black pawn first"></td>`);
            }


            if(i >1 && i < 6){
                if(i%2 == 1 ){

                    for(j = 0; j <= 7; j ++){
                        
                        if(j%2 == 1){
                            $('#'+i).append(`<td class="${i} ${j} odd empty"></td>`);
                        }else{
                            $('#'+i).append(`<td class="${i} ${j} even empty"></td>`);
                        }
                    };
                }else{
                    for(j = 0; j <= 7; j ++){
                        if(j%2 == 1){
                            $('#'+i).append(`<td class="${i} ${j} even empty"></td>`);
                        }else{
                            $('#'+i).append(`<td class="${i} ${j} odd empty"></td>`);
                        }
                    }
                }
            } 

            if(i == 6){
                $('#'+i).append(`<td name="pawn-white" class="${i} 0 odd white pawn first"></td>`);
                $('#'+i).append(`<td name="pawn-white" class="${i} 1 even white pawn first"></td>`);
                $('#'+i).append(`<td name="pawn-white" class="${i} 2 odd white pawn first"></td>`);
                $('#'+i).append(`<td name="pawn-white" class="${i} 3 even white pawn first"></td>`);
                $('#'+i).append(`<td name="pawn-white" class="${i} 4 odd white pawn first"></td>`);
                $('#'+i).append(`<td name="pawn-white" class="${i} 5 even white pawn first"></td>`);
                $('#'+i).append(`<td name="pawn-white" class="${i} 6 odd white pawn first"></td>`);
                $('#'+i).append(`<td name="pawn-white" class="${i} 7 even white pawn first"></td>`);
            }
            if(i == 7){
                $('#'+i).append(`<td name="rook-white" class="${i} 0 even white rook"></td>`);
                $('#'+i).append(`<td name="knight-whiteL" class="${i} 1 odd white knight"></td>`);
                $('#'+i).append(`<td name="bishop-white" class="${i} 2 even white bishop"></td>`);
                $('#'+i).append(`<td name="queen-white" class="${i} 3 odd white queen"></td>`);
                $('#'+i).append(`<td name="king-white" class="${i} 4 even white king"></td>`);
                $('#'+i).append(`<td name="bishop-white" class="${i} 5 odd white bishop"></td>`);
                $('#'+i).append(`<td name="knight-whiteR" class="${i} 6 even white knight"></td>`);
                $('#'+i).append(`<td name="rook-white" class="${i} 7 odd white rook"></td>`);
            }
        }
    }
    
    //add pictures of pieces to board.
    pawnWhite = `<img src=/static/images/pawn-white.png id='pawnWhite'></img>`;
    rookWhite = `<img src=/static/images/rook-white.png id='rookWhite'></img>`;
    knightWhiteR = `<img src=/static/images/knight-white.png id='knightWhiteR'></img>`;
    knightWhiteL = `<img src=/static/images/knight-whiteL.png id='knightWhiteL'></img>`;
    bishopWhite = `<img src=/static/images/bishop-white.png id='bishopWhite'></img>`;
    queenWhite = `<img src=/static/images/queen-white.png id='queenWhite'></img>`;
    kingWhite = `<img src=/static/images/king-white.png id='kingWhite'></img>`;
    //black pieces
    pawnBlack = `<img src=/static/images/pawn-black.png id='pawnBlack'></img>`;
    rookBlack = `<img src=/static/images/rook-black.png id='rookBlack'></img>`;
    knightBlackR = `<img src=/static/images/knight-blackR.png id='kinghtBlackR'></img>`;
    knightBlackL = `<img src=/static/images/knight-blackL.png id='knightBlackL'></img>`;
    bishopBlack = `<img src=/static/images/bishop-black.png id='bishopBlack'></img>`;
    queenBlack = `<img src=/static/images/queen-black.png id='queenBlack'></img>`;
    kingBlack = `<img src=/static/images/king-black.png id='kingBlack'></img>`;
    //white
    $("td[name='pawn-white']").append(pawnWhite);
    $("td[name='rook-white']").append(rookWhite);
    $("td[name='knight-whiteL']").append(knightWhiteL);
    $("td[name='knight-whiteR']").append(knightWhiteR);
    $("td[name='bishop-white']").append(bishopWhite);
    $("td[name='queen-white']").append(queenWhite);
    $("td[name='king-white']").append(kingWhite);
    //black
    $("td[name='pawn-black']").append(pawnBlack);
    $('td[name="rook-black"').append(rookBlack);
    $("td[name='knight-blackL']").append(knightBlackL);
    $("td[name='knight-blackR']").append(knightBlackR);
    $("td[name='bishop-black']").append(bishopBlack);
    $("td[name='queen-black']").append(queenBlack);
    $("td[name='king-black']").append(kingBlack);

    // randomly choose if white or black starts first.
    var number = 0.6; //Math.random();
    var turn;
    console.log(number);
    if(number <= 0.5){
        turn = 'black';
    }else{
        turn = 'white';
    }


    startTurn(turn);

    //acitvates the pieces for the current turn
    function startTurn(turn){
        
        if(turn == "white"){
            $('.black').removeClass(`activated`);
            $('.white').addClass(`activated`);
        }
        if(turn == "black"){
            $('.white').removeClass(`activated`);
            $('.black').addClass(`activated`);
        }
    }
    
    //clicks a white piece
    $('#board').on('click', '.white', function () { 
        $('td').removeClass('attackPiece')
        $('td').removeClass('capturePiece');
        if(turn == 'white'){
            $('td').removeClass('selected');
            $(this).addClass('selected');
        }
        if((turn == 'black') && ($('td').hasClass('selected'))){
            $('.selected').addClass('attackPiece')
            $('td').removeClass('selected');
            $(this).addClass('capturePiece');
            turn = capturePiecePawn(this, turn);
            return turn;
        }
    });

    //clicks a black piece
    $('#board').on('click', '.black', function () { 
        $('td').removeClass('attackPiece')
        $('td').removeClass('capturePiece');
        if(turn == 'black'){
            $('td').removeClass('selected');
            $(this).addClass('selected');
        }
        
        //white capture black
        if((turn == 'white') && ($('td').hasClass('selected'))){
            
            $('.selected').addClass('attackPiece')
            $('td').removeClass('selected');
            $(this).addClass('capturePiece');
            turn = capturePiecePawn(this, turn);
            return turn;
        }
    });

    //move a piece //changeturns and //flips board
    $('#board').on('click', '.empty', function(){
        if($('td').hasClass('selected')){

            if($('.selected').hasClass('pawn')){
                turn = movePawn(this, turn);
                return turn;
            }

            else if($('.selected').hasClass('rook')){
                turn = moveRook(this, turn );
                return turn;
            }

            else if($('.selected').hasClass('knight')){

            }

            else if($('.selected').hasClass('bishop')){
                turn = moveBishop(this, turn);
                return turn;
            }

            else if($('.selected').hasClass('queen')){

            }

            else if($('.selected').hasClass('king')){

            }
        }
    });

    function movePawn(spot, turn){
        // First move for pawn
        if($('.selected').hasClass('first')){

            //one spot pawn move
            if(($(spot).parent().next().children().hasClass('selected')) || ($(spot).parent().next().next().children().hasClass('selected') )){
                piece = $('.selected');

                pieceLocation = $('.selected').parent().index();
                validSpot = $(spot).parent().index();
                
                pieceIndex = $('.selected')[0].cellIndex;
                validSpotIndex = spot.cellIndex;

                pieceType = 'pawn';

                
                if((pieceLocation == (validSpot + 1) || pieceLocation  == (validSpot +2)) && pieceIndex == validSpotIndex){
                    movePiece(piece, pieceType, spot, turn);
                    turn = changeTurn(turn);
                    flipBoard(turn);
                    return turn;
                }
                
            }

        }
        else if($('.selected').hasClass('pawn')){

            //one spot pawn move
            if(($(spot).parent().next().children().hasClass('selected'))){
                piece = $('.selected');

                pieceLocation = $('.selected').parent().index();
                validSpot = $(spot).parent().index();
                
                pieceIndex = $('.selected')[0].cellIndex;
                validSpotIndex = spot.cellIndex;

                pieceType = 'pawn'; //hardcode?

                
                if((pieceLocation == (validSpot + 1)) && pieceIndex == validSpotIndex){
                    movePiece(piece, pieceType, spot, turn);
                    turn = changeTurn(turn);
                    flipBoard(turn);
                    return turn;
                }
                
            }

        }

        $('td').removeClass('selected');
        return turn;
    }





    ////helper functions
    

    function movePiece(piece, pieceType, spot, turn){
        piece.removeClass(`${turn} selected activated pawn first`);
        piece.empty();
        piece.addClass('empty');

        $(spot).removeClass('empty');
        $(spot).addClass(`${pieceType} ${turn}`);
        if(turn == 'white'){
            $(spot).append(pawnWhite);
        }else{
            $(spot).append(pawnBlack);
        }
        
    }

    function moveBishop(spot, turn){
        //move bishop
        
        piece = $('.selected');

        pieceLocation = $('.selected').parent().index();
        validSpot = $(spot).parent().index();
        validSpotIndex = spot.cellIndex;
        pieceIndex = $('.selected')[0].cellIndex;

        pieceType = 'bishop';

        spotRow = validSpot.toString()
        spotCol = validSpotIndex.toString()


        console.log('------')
        console.log(turn)
        piecesBlockingMove = 0;

        
        


        for(i = 1; i < (Math.abs(validSpotIndex - pieceIndex) + 1); i++){

            if((pieceIndex > validSpotIndex) && (pieceLocation > validSpot)){
                spotRow = ((pieceLocation) - i).toString();
                spotCol = ((pieceIndex) - i);
            }else if((pieceIndex > validSpotIndex) && (pieceLocation < validSpot)){
                spotRow = ((pieceLocation) + i).toString();
                spotCol = ((pieceIndex) - i);
            }else if((pieceIndex < validSpotIndex) && (pieceLocation > validSpot)){
                spotRow = ((pieceLocation) - i).toString();
                spotCol = ((pieceIndex) + i);
            }else if((pieceIndex < validSpotIndex) && (pieceLocation < validSpot)){
                spotRow = ((pieceLocation) + i).toString();
                spotCol = ((pieceIndex) + i);
            }
            
            console.log(`${spotRow} ${spotCol}`);

                console.log(validSpot)
                console.log(validSpotIndex)
                console.log(pieceLocation)
                console.log(pieceIndex)
                console.log($('td').eq(spotRow).children().eq(spotCol))


            if($('tr').eq(spotRow).children().eq(spotCol).hasClass('empty')){

                console.log($('td').eq(spotRow).children().eq(spotCol))
                console.log('empty')

                

            }else{
                piecesBlockingMove++
                console.log('not empty')
                console.log(piecesBlockingMove)
            }
                  
        }
        
        if(Math.abs((validSpotIndex - pieceIndex)) == Math.abs((validSpot - pieceLocation)) && piecesBlockingMove == 0){
                
            if(turn == 'white'){
                $(piece).removeClass('white bishop');
                $(piece).empty();
                $(piece).addClass('empty');
                $(spot).removeClass('empty');
                $(spot).append(bishopWhite); //change hardcode
                $(spot).addClass('white bishop');
                turn = changeTurn(turn);
                flipBoard(turn);
                $('td').removeClass('selected');
                return turn;
            }else if(turn == 'black'){
                $(piece).removeClass('black bishop');
                $(piece).empty();
                $(piece).addClass('empty');
                $(spot).append(bishopBlack);
                $(spot).removeClass('empty');
                $(spot).addClass('black bishop');
                turn = changeTurn(turn);
                flipBoard(turn);
                $('td').removeClass('selected');
                return turn;
            }
            
        }else{
            console.log('cant move here')
            $('td').removeClass('selected');
            return turn;
        }
            

    }

    function changeTurn(turn){
        
        $('td').removeClass('activated');

        if(turn == 'white'){
            turn = 'black';
        }else{
            turn = 'white';
        }

        $(`.${turn}`).addClass('activated');
        console.log(turn);
        return turn;
    }

    function flipBoard(turn){

        var reversedBoard = [];

    
        $('#board tr').each(function(){ 
            reversedBoard.push(this);
        });
    
        reversedBoard = reversedBoard.reverse();
        
        reversedBoard.forEach(function(){
            $('#board').append(reversedBoard);
        });
        return turn;
    }

    function capturePiecePawn(capturePiece, turn){


        if(($(capturePiece).parent().next().children().hasClass('attackPiece'))){
            
            piece = $('.attackPiece');
            pieceLocation = $('.attackPiece').parent().index();
            validSpot = $(capturePiece).parent().index();
                
            pieceIndex = $('.attackPiece')[0].cellIndex;
            validSpotIndex = capturePiece.cellIndex;

            pieceType = $(capturePiece).attr("name");//change hardcode
            console.log(capturePiece)
            console.log(pieceIndex);
            console.log(validSpotIndex);    
            if((Math.abs(pieceIndex - validSpotIndex) == 1)){
                
                piece.removeClass(`${turn} attackPiece pawn first`);
                piece.empty();
                piece.addClass('empty');
                pieceOnBoard = 'pawn' //change harcode

                $(capturePiece).removeClass('pawn bishop rook knight queen king capturePiece'); //change to all pieces for capturee .find()?
                $(capturePiece).empty()
                $(capturePiece).addClass(`${pieceOnBoard} ${turn}`);
                $(capturePiece).attr('name', pieceType) //change hardcode

                if(turn == 'white'){
                    $(capturePiece).removeClass('black')
                    $(capturePiece).append(pawnWhite); //change hardcode
                    turn = changeTurn(turn);
                    flipBoard(turn);
                    return turn;
                }else if(turn == 'black'){
                    $(capturePiece).removeClass('white');
                    $(capturePiece).append(pawnBlack);
                    turn = changeTurn(turn);
                    flipBoard(turn);
                    return turn;
                }
            }
        }
        $('td').removeClass('capturePiece attackPiece');
        return turn;
    }
});
