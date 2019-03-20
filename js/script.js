$(document).ready(function(){
$("#draggable").draggable();
$( "#draggable1" ).draggable({ scroll: true });
$( "#draggable2" ).draggable({ scroll: true, scrollSensitivity: 100 });
$( "#draggable3" ).draggable({ scroll: true, scrollSpeed: 100 });

// dropable
$( "#drag" ).draggable();
$( "#drop" ).droppable({
drop: function( event, ui ) {
$( this )
.addClass( "ui-state-highlight" )
.find( "p" )
.html( "Dropped!" );
}
});
// dropable

});
// jquery function end