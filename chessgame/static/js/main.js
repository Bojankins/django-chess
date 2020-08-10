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
                    }
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
    pawnWhite = `<img src=/static/images/pawn-white.png id='pawnwhite'></img>`;
    rookWhite = `<img src=/static/images/rook-white.png id='rookwhite'></img>`;
    knightWhiteR = `<img src=/static/images/knight-whiteR.png id='knightwhiteR'></img>`;
    knightWhiteL = `<img src=/static/images/knight-whiteL.png id='knightwhiteL'></img>`;
    bishopWhite = `<img src=/static/images/bishop-white.png id='bishopwhite'></img>`;
    queenWhite = `<img src=/static/images/queen-white.png id='queenwhite'></img>`;
    kingWhite = `<img src=/static/images/king-white.png id='kingwhite'></img>`;
    //black pieces
    pawnBlack = `<img src=/static/images/pawn-black.png id='pawnblack'></img>`;
    rookBlack = `<img src=/static/images/rook-black.png id='rookblack'></img>`;
    knightBlackR = `<img src=/static/images/knight-blackR.png id='knightblackR'></img>`;
    knightBlackL = `<img src=/static/images/knight-blackL.png id='knightblackL'></img>`;
    bishopBlack = `<img src=/static/images/bishop-black.png id='bishopblack'></img>`;
    queenBlack = `<img src=/static/images/queen-black.png id='queenblack'></img>`;
    kingBlack = `<img src=/static/images/king-black.png id='kingblack'></img>`;
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
        
    });

    //clicks a black piece
    $('#board').on('click', '.black', function () { 
        $('td').removeClass('attackPiece')
        $('td').removeClass('capturePiece');
        if(turn == 'black'){
            $('td').removeClass('selected');
            $(this).addClass('selected');
        }
        
    });

    //move a piece //changeturns and //flips board
    $('#board').on('click', 'td', function(){
        if($('td').hasClass('selected')){

            ///pawn
            if($('.selected').hasClass('pawn')){ 

                pieceType = 'pawn'
                var enemyColor = determineEnemyColor(turn, enemyColor)
                piece = `${pieceType}${turn}`
                pieceName = `${pieceType}-${turn}`

                if($(this).hasClass(enemyColor)){

                    turn = checkMove(this, turn, enemyColor, pieceType, piece, pieceName);
                    return turn;
                }
                else if($(this).hasClass('empty')){
                    turn = checkMove(this, turn, enemyColor, pieceType, piece);
                    return turn;
                }
            }
            ///rook
            else if($('.selected').hasClass('rook')){

                pieceType = 'rook'
                var enemyColor = determineEnemyColor(turn, enemyColor)
                piece = `${pieceType}${turn}`
                pieceName = `${pieceType}-${turn}`

                if($(this).hasClass(enemyColor)){

                    turn = checkMove(this, turn, enemyColor, pieceType, piece, pieceName);
                    return turn;
                }
                else if($(this).hasClass('empty')){
                    turn = checkMove(this, turn, enemyColor, pieceType, piece, pieceName);
                    return turn;
                }
            }

            else if($('.selected').hasClass('knight')){

                pieceType = 'knight'

                if($('.selected').attr('name') == `${pieceType}-${turn}R`){
                    pieceLocation = 'R'
                }else{
                    pieceLocation = 'L'
                }

                var enemyColor = determineEnemyColor(turn, enemyColor)
                piece = `${pieceType}${turn}${pieceLocation}`

                if($(this).hasClass('empty')){
                    
                    turn = checkMove(this, turn, enemyColor, pieceType, piece, pieceLocation);
                    return turn;     
                }
                else if($(this).hasClass(enemyColor)){

                    turn = checkMove(this, turn, enemyColor, pieceType, piece, pieceLocation);
                    return turn;
                }
            }

            else if($('.selected').hasClass('bishop')){
                
                pieceType = 'bishop'
                var enemyColor = determineEnemyColor(turn, enemyColor)
                piece = `${pieceType}${turn}`
                pieceName = `${pieceType}-${turn}`

                if($(this).hasClass(enemyColor)){

                    turn = checkMove(this, turn, enemyColor, pieceType, piece, pieceName);
                    return turn;
                }
                else if($(this).hasClass('empty')){
                    turn = checkMove(this, turn, enemyColor, pieceType, piece, pieceName);
                    return turn;
                }
            }

            else if($('.selected').hasClass('queen')){
                pieceType = 'queen'
                var enemyColor = determineEnemyColor(turn, enemyColor)
                piece = `${pieceType}${turn}`
                pieceName = `${pieceType}-${turn}`

                if($(this).hasClass(enemyColor)){

                    turn = checkMove(this, turn, enemyColor, pieceType, piece, pieceName);
                    return turn;
                }
                else if($(this).hasClass('empty')){
                    turn = checkMove(this, turn, enemyColor, pieceType, piece, pieceName);
                    return turn;
                }          
            }

            else if($('.selected').hasClass('king')){
                pieceType = 'king'
                var enemyColor = determineEnemyColor(turn, enemyColor)
                piece = `${pieceType}${turn}`
                pieceName = `${pieceType}-${turn}`

                if($(this).hasClass(enemyColor)){

                    turn = checkMove(this, turn, enemyColor, pieceType, piece, pieceName);
                    return turn;
                }
                else if($(this).hasClass('empty')){
                    turn = checkMove(this, turn, enemyColor, pieceType, piece, pieceName);
                    return turn;
                }   
            }
        }
    });

    ////helper functions   

    function checkMove(spot, turn, enemyColor, pieceType, piece, pieceLocation){

        pieceRow = $('.selected').parent().index();
        validSpot = $(spot).parent().index();
        validSpotIndex = spot.cellIndex;
        pieceIndex = $('.selected')[0].cellIndex;

        spotRow = validSpot.toString()
        spotCol = validSpotIndex.toString()

        piecesBlockingMove = 0;
        move = false;

        
        check = false; 



        if(1 == 1){
            //checking for pawn moves
            if(piece == `pawn${turn}`){
                move = checkPawnMove(spot, pieceRow, pieceIndex, validSpot, validSpotIndex, enemyColor, move)
            }
            //checking for rook moves
            if(piece == `rook${turn}`){
                move = checkRookMove(spot, pieceRow, pieceIndex, validSpot, validSpotIndex, spotRow, spotCol, piecesBlockingMove, enemyColor, move);
            }

            //checking for bishop moves
            if(piece == `bishop${turn}`){
                move = checkBishopMove(spot, pieceRow, pieceIndex, validSpot, validSpotIndex, spotRow, spotCol, piecesBlockingMove, enemyColor, move);
            }

            //checking for knight moves
            if(piece == `knight${turn}${pieceLocation}`){
                move = checkKnightMove(spot, pieceRow, pieceIndex, validSpot, validSpotIndex, enemyColor, move);
            }

            //cheking for queen moves
            if(piece == `queen${turn}`){

                move = checkBishopMove(spot, pieceRow, pieceIndex, validSpot, validSpotIndex, spotRow, spotCol, piecesBlockingMove, enemyColor, move);

                if(move == false){
                    move = checkRookMove(spot, pieceRow, pieceIndex, validSpot, validSpotIndex, spotRow, spotCol, piecesBlockingMove, enemyColor, move);
                }
            }
        }

        //checking for king moves
            if(piece == `king${turn}`){
               move = checkKingMove(pieceRow, pieceIndex, validSpot, validSpotIndex, move)
            }

        //if(check == false){
        if(($('td').hasClass('selected')) && (move == true)){
            turn = movePiece(spot, turn, enemyColor, piece, pieceType, pieceLocation, piecesBlockingMove, check);

        }
        //}
        $('td').removeClass('selected')
        $(spot).removeClass('checked')
        return turn;
    }

    function movePiece(spot, turn, enemyColor, piece, pieceType, pieceLocation, piecesBlockingMove, check){
        


        // enemyPiece = spotPiece(spot);
        // console.log(enemyPiece)
        
        

        // required because knight has two images
        if($('.selected').attr('name') == `knight-${turn}${pieceLocation}`){
            pieceName = `knight-${turn}${pieceLocation}`
        }

        //if pawn achieves rank 7
        if($(spot).parent().is('#7') || $(spot).parent().is('#0')){ 

            if($('.selected').hasClass('pawn')){
                console.log('rank 7')
                pieceName = `queen-${turn}`;//change hardcode quuen to choose piece feature
                piece = `queen${turn}`
                pieceType = 'queen'
                pieceToAppend = $('.selected').find(piece)
            }
        }

        
        $(spot).removeClass('empty');
        $(spot).addClass(`${pieceType} ${turn}`);

        //
        $('.selected').empty();
        $('.selected').removeClass(`${pieceType} ${turn} first checked`);
        $('.selected').addClass('empty');

        
        
        $(spot).removeClass(`pawn bishop knight rook queen first ${enemyColor}`); 
        $(spot).empty();
        $(spot).append(`<img src=/static/images/${pieceName}.png id='${piece}'></img>`); //change hardcode
        $(spot).attr('name' , pieceName);
        $(spot).addClass(pieceType)

        kingPiece = $(`td.king.${turn}`)
        $(kingPiece).removeClass('checked');
        check = kingInCheck(kingPiece, enemyColor, piecesBlockingMove, check, turn);

        if(check == true){
            
            reverseMove(spot, turn, enemyColor, piece, pieceType, pieceLocation, piecesBlockingMove, check)
            $(kingPiece).addClass('checked');
        }
        //may need to switch this king piece to other color
        //$(kingPiece).removeClass('checked');

        
        
        // }else{
        // $(spot).removeClass(`${turn}`); 
        // $('.selected').append(`<img src=/static/images/${pieceName}.png id='${piece}'></img>`);
        // $('.selected').addClass(`${pieceType} ${turn}`);
        // $('.selected').removeClass('empty');
        // }


        if((kingPiece).hasClass('checked')){
            console.log('still in check');
        }else{

            turn = changeTurn(turn);
            flipBoard(turn);

            enemyColor = determineEnemyColor(turn, enemyColor)
            kingPiece = $(`td.king.${turn}`)

            check = kingInCheck(kingPiece, enemyColor, piecesBlockingMove, check, turn);
            $(kingPiece).removeClass('checked');
            if(check == true){
                $(kingPiece).addClass('checked');
            }

        }
        
        $('td').removeClass('selected');
        console.log(kingPiece)
        console.log(`${turn} - ${check}`)
        return turn;
    }

    function changeTurn(turn){
        
        $('td').removeClass('activated');

        if(turn == 'white'){
            turn = 'black';
        }else{
            turn = 'white';
        }

        $(`.${turn}`).addClass('activated');
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

    function determineEnemyColor(turn ,enemyColor){
        if(turn == 'white'){
            enemyColor = 'black'
        }else{
            enemyColor = 'white'
        }
        return enemyColor;
    }

    function kingInCheck(kingPiece, enemyColor, piecesBlockingMove, check, turn){

        kingRow = $(kingPiece).parent().index();
        kingIndex = $(kingPiece)[0].cellIndex;

        //kingRow.toString()
        
        piecesBlockingMove = 0
        //king to forward end of board for rook moves
        for(i = 1; kingRow > (i - 1) ; i++ ){
            


            if(($('tr').eq(kingRow - i).children().eq(kingIndex).hasClass(enemyColor)) && (piecesBlockingMove == 0)){
                checkPiece = $('tr').eq(kingRow - i).children().eq(kingIndex)
                if($(checkPiece).hasClass('queen')){
                    check = true
                }else if($(checkPiece).hasClass('rook')){
                    check = true
                }
            }
            if($('tr').eq(kingRow - i).children().eq(kingIndex).hasClass(turn) || ($('tr').eq(kingRow - i).children().eq(kingIndex).hasClass(enemyColor))) {
                piecesBlockingMove++
            }
            if($('tr').eq(kingRow - i).children().eq(kingIndex).hasClass('empty')){
                piecesBlockingMove += 0
            }

        }
           
        //king to back of board for rook moves
        if(check == false){
            piecesBlockingMove = 0;
            i = kingRow

            while(i < 7 ){
                

                if(($('tr').eq(i + 1).children().eq(kingIndex).hasClass(enemyColor)) && (piecesBlockingMove == 0 )){
                    checkPiece = $('tr').eq(i + 1).children().eq(kingIndex)
                    if($(checkPiece).hasClass('queen')){
                        check = true
                    }else if($(checkPiece).hasClass('rook')){
                        check = true
                    }
                }
                if($('tr').eq(i + 1).children().eq(kingIndex).hasClass(turn) || ($('tr').eq(i + 1).children().eq(kingIndex).hasClass(enemyColor))){
                    piecesBlockingMove++
                }
                if($('tr').eq(i + 1).children().eq(kingIndex).hasClass('empty')){
                    piecesBlockingMove += 0
                }

                i++
                
            }
        }
        
        //king to right side of board for rook moves
        if(check == false){

            piecesBlockingMove = 0;
            i = kingIndex

            while(i < 7 ){
                

                if(($('tr').eq(kingRow).children().eq(i + 1).hasClass(enemyColor)) && (piecesBlockingMove == 0 )){
                    checkPiece = $('tr').eq(kingRow).children().eq(i + 1)
                    if($(checkPiece).hasClass('queen')){
                        check = true
                    }else if($(checkPiece).hasClass('rook')){
                        check = true
                    }
                }
                if($('tr').eq(kingRow).children().eq(i + 1).hasClass(turn) || ($('tr').eq(kingRow).children().eq(i + 1).hasClass(enemyColor))){
                    piecesBlockingMove++
                }

                console.log(i + 1)
                console.log(piecesBlockingMove)

                i++
                
            }
        }

        //king to rleft side of board for rook moves
        if(check == false){

            piecesBlockingMove = 0;
            i = kingIndex

            while(i > 0 ){
                

                if(($('tr').eq(kingRow).children().eq(i - 1).hasClass(enemyColor)) && (piecesBlockingMove == 0 )){
                    checkPiece = $('tr').eq(kingRow).children().eq(i - 1)
                    if($(checkPiece).hasClass('queen')){
                        check = true
                    }else if($(checkPiece).hasClass('rook')){
                        check = true
                    }
                }
                if($('tr').eq(kingRow).children().eq(i - 1).hasClass(turn) || ($('tr').eq(kingRow).children().eq(i - 1).hasClass(enemyColor))){
                    piecesBlockingMove++
                }
                // if($('tr').eq(kingRow).children().eq(kingIndex + i).hasClass('empty')){
                //     piecesBlockingMove += 0
                // }
                console.log(i - 1)
                console.log(piecesBlockingMove)

                i--
                
            }
        }
        return check;
    }

    //move checks for pieces
    function checkPawnMove(spot, pieceRow, pieceIndex, validSpot, validSpotIndex, enemyColor, move){
        if((pieceIndex == validSpotIndex) && (pieceRow - validSpot) == 1){
            move = true;
        }else if( (pieceIndex == validSpotIndex) && (( (pieceRow - validSpot) > 0 && (pieceRow - validSpot) < 3)) && ($('.selected').hasClass('first')) && ($(spot).hasClass('empty'))){
            move = true;
        }else if(((Math.abs(pieceIndex - validSpotIndex) == 1) && ((pieceRow - validSpot) == 1)) && $(spot).hasClass(enemyColor)){
            move = true;
        }
        console.log()
        return move;
    }

    function checkRookMove(spot, pieceRow, pieceIndex, validSpot, validSpotIndex, spotRow, spotCol, piecesBlockingMove, enemyColor, move){

        // choses condition to check.
        if(validSpot == pieceRow){
            rookCondition = validSpotIndex - pieceIndex
        }else{
            rookCondition = validSpot - pieceRow
        }

        for(i = 1; i < (Math.abs(rookCondition) + 1); i++){
            
            if((pieceIndex == validSpotIndex) && (pieceRow > validSpot)){
                spotRow = ((pieceRow) - i).toString();
                spotCol = (validSpotIndex);
            }else if((pieceIndex == validSpotIndex) && (pieceRow < validSpot)){
                spotRow = ((pieceRow) + i).toString();
                spotCol = (validSpotIndex);
            }else if((pieceIndex < validSpotIndex) && (pieceRow == validSpot)){
                spotRow = (validSpot).toString();
                spotCol = ((pieceIndex) + i);
            }else if((pieceIndex > validSpotIndex) && (pieceRow == validSpot)){
                spotRow = (validSpot).toString();
                spotCol = ((pieceIndex) - i);
            }


            if($('tr').eq(spotRow).children().eq(spotCol).hasClass('empty')){
                piecesBlockingMove += 0
            }else{
                piecesBlockingMove++
            }   
        }
        
        if((validSpotIndex == pieceIndex) && (piecesBlockingMove == 0)){
            move = true;
        }else if((validSpot == pieceRow) && (piecesBlockingMove == 0)){
            move = true;
        }else if(((validSpotIndex == pieceIndex) && (piecesBlockingMove == 1)) && $(spot).hasClass(enemyColor)){
            move = true;
        }else if(((validSpot == pieceRow) && (piecesBlockingMove == 1)) && $(spot).hasClass(enemyColor)){
            move = true;
        }

        console.log(piecesBlockingMove)
        return move;
    }

    function checkBishopMove(spot, pieceRow, pieceIndex, validSpot, validSpotIndex, spotRow, spotCol, piecesBlockingMove, enemyColor, move){

        for(i = 1; i < (Math.abs(validSpotIndex - pieceIndex) + 1); i++){

            if((pieceIndex > validSpotIndex) && (pieceRow > validSpot)){
                spotRow = ((pieceRow) - i).toString();
                spotCol = ((pieceIndex) - i);
            }else if((pieceIndex > validSpotIndex) && (pieceRow < validSpot)){
                spotRow = ((pieceRow) + i).toString();
                spotCol = ((pieceIndex) - i);
            }else if((pieceIndex < validSpotIndex) && (pieceRow > validSpot)){
                spotRow = ((pieceRow) - i).toString();
                spotCol = ((pieceIndex) + i);
            }else if((pieceIndex < validSpotIndex) && (pieceRow < validSpot)){
                spotRow = ((pieceRow) + i).toString();
                spotCol = ((pieceIndex) + i);
            }
               
            if($('tr').eq(spotRow).children().eq(spotCol).hasClass('empty')){
                piecesBlockingMove += 0
            }else{
                piecesBlockingMove++
            }     
            
        }

            if(Math.abs(validSpotIndex - pieceIndex) == Math.abs(validSpot - pieceRow) && (piecesBlockingMove == 0)){
                move = true;
            }
            else if(Math.abs(validSpotIndex - pieceIndex) == Math.abs(validSpot - pieceRow) && (piecesBlockingMove == 1 && $(spot).hasClass(enemyColor))){
                move = true;
            }
        return move;
    }

    function checkKnightMove(spot, pieceRow, pieceIndex, validSpot, validSpotIndex, enemyColor, move){

        //top two squares knight
        if((Math.abs(validSpotIndex - pieceIndex) == 1) && (validSpot == (pieceRow - 2)) && ($(spot).is(`.empty , .${enemyColor}`))){
            move = true;
        }
        else if((Math.abs(validSpotIndex - pieceIndex) == 1) && (validSpot == (pieceRow + 2)) && ($(spot).is(`.empty , .${enemyColor}`))){
            move = true;
        }
        else if((Math.abs(validSpot - pieceRow) == 1) && (validSpotIndex == (pieceIndex - 2)) && ($(spot).is(`.empty , .${enemyColor}`))){
            move = true;
        }
        else if((Math.abs(validSpot - pieceRow) == 1) && (validSpotIndex == (pieceIndex + 2)) && ($(spot).is(`.empty , .${enemyColor}`))){
            move = true;
        }
        
        return move;
    }

    function checkKingMove(pieceRow, pieceIndex, validSpot, validSpotIndex, move){

        if((pieceIndex == validSpotIndex) && (Math.abs(pieceRow - validSpot) == 1 )){
            move = true;
        }else if((Math.abs(pieceIndex - validSpotIndex) == 1) && (pieceRow == validSpot)){
            move = true;
        }else if((Math.abs(pieceIndex - validSpotIndex) == 1 ) && (Math.abs(pieceRow - validSpot) == 1)){
            move = true;
        } 

        return move;
    }
    

    function reverseMove(spot, turn, enemyColor, piece, pieceType, pieceLocation, piecesBlockingMove, check){
        

        // required because knight has two images
        if($('.selected').attr('name') == `knight-${turn}${pieceLocation}`){
            pieceName = `knight-${turn}${pieceLocation}`
        }

        //if pawn achieves rank 7
        if($(spot).parent().is('#7') || $(spot).parent().is('#0')){ 

            if($('.selected').hasClass('pawn')){
                console.log('rank 7')
                pieceName = `queen-${turn}`;//change hardcode quuen to choose piece feature todo
                piece = `queen${turn}`
                pieceType = 'queen'
                pieceToAppend = $('.selected').find(piece)
            }
        }

        //need to account for first move pawn being replaced with first class
        $('.selected').addClass(`${pieceType} ${turn}`);
        $('.selected').removeClass('empty');
        $('.selected').append(`<img src=/static/images/${pieceName}.png id='${piece}'></img>`);

        
        //need function for enemy piece to put back on to spot
        //$(spot).addClass(`pawn bishop knight rook queen first ${enemyColor}`); 
        $(spot).empty();
        //need to figure put piece to put back if its a capture.
        //$(spot).append(`<img src=/static/images/${pieceName}.png id='${piece}'></img>`); //change hardcode
        //$(spot).attr('name' , pieceName);
        $(spot).removeClass(`${pieceType} ${turn}`);
        $(spot).addClass('empty');
        

        $('td').removeClass('selected');
        $('td').removeClass('checked');
        console.log(kingPiece)
        console.log(`${turn} - ${check}`)
        return turn;
    }
  
    

    

   
    
});
