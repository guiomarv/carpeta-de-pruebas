



(function() {


var modal = $("#ventana");
var btn=  $("#open-modal");

var contentModal =$(".modal-content")

  btn.click(function() {

    modal.fadeIn();

	//conseguir ancho y alto 
	var anchototal = $("html").width();
	var altototal = $("html").height();

	//pasar ancho y alto 
	contentModal.css("width", anchototal+"px");
	contentModal.css("height", altototal+"px");

	//var numeroDiapo =  $(".diapo.activa" ).attr('data-num');
	//console.log(numeroDiapo);

	//cerrar 
	var cerrar = $("#cerrar-modal");
	  cerrar.click(function() {
	  	  modal.fadeOut();
	  });


    //avanzar cada diapo
	var avanzar=  $(".flecha-dcha");		
	  	avanzar.click(function(e) {


	  		//console.log($(".diapo").length);
	  		//console.log(e);

	  		$("#marco-encuesta .contenedor-diapos .diapo").removeClass("activa");
		    $("#marco-encuesta .contenedor-diapos .diapo").animate({
				    left: "-=800",
				  }, 800, function() {
				  	console.log("entra");
				  
			});

			$("#marco-encuesta .contenedor-diapos .diapo:visible").addClass( "activa" );
				
		  });


	});
})();






