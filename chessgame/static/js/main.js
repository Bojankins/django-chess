$( document ).ready(function() {
    
    generateBoard();

    function generateBoard() {
        for(i = 1; i <= 8; i ++){
            $('#board').append('<tr id='+i+'></tr>');

            for(j = 1; j <= 8; j ++){
                $('#'+i).append('<td class='+j+'></td>')
            }
        };

      };

});
