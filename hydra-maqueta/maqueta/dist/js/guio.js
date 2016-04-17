

(function() {


var modal = $("#ventana");
var btn=  $("#open-modal");

var contentModal =$(".modal-content")

var NumeroDiapos =$(".diapo").length;
var NumeroClicks = NumeroDiapos -1;

  btn.click(function() {

    modal.fadeIn();

	//conseguir ancho y alto 
	var anchototal = $("html").width();
	var altototal = $("html").height();

	//pasar ancho y alto 
	contentModal.css("width", anchototal+"px");
	contentModal.css("height", altototal+"px");

	//cerrar 
	var cerrar = $("#cerrar-modal");
	  cerrar.click(function() {
	  	  modal.fadeOut();
	 });

	//calcular ancho de la barra 
	var NumeroDiapos = $(".diapo").length;
	var incremento= 100/NumeroDiapos;

	var AnchoBarra = incremento;
	$(".barra-progreso").css("width", AnchoBarra+"%");

	$(".numero-diapos").text(NumeroDiapos);
	var localizacionDiapo = 1;
	$(".diapo-estado .localizacion").text(localizacionDiapo);

    //avanzar cada diapo, añadir tamaño a la barra 
    var pulsar=1;
	var avanzar=  $(".flecha-dcha");		
	  	avanzar.click(function() {
	  		
		    $(".marco-diapos").animate({
				    left: "-=800",
				  }, 800, function() {				  			  
			});
		pulsar++;
		var AnchoBarra = incremento * pulsar;
		$(".barra-progreso").css("width", AnchoBarra+"%");
		var localizacionDiapo =pulsar;
		$(".diapo-estado .localizacion").text(localizacionDiapo);

		if (pulsar==NumeroDiapos) {
			$(".flecha-dcha").hide();
			$(".enviar").click(function(){
			   modal.fadeOut();			  
			});  
		}
		});			
	});

    	var retroceder=  $(".flecha-izda");
  		retroceder.click(function() { 
  			var pulsarAtras=1;
  			pulsarAtras++;
			var pulsar=1;
				//calcular ancho de la barra 
	var NumeroDiapos = $(".diapo").length;
	var incremento= 100/NumeroDiapos;

			var AnchoBarra = incremento *(pulsar -pulsarAtras);
			$(".marco-diapos").animate({
					    left: "+=800",
					  }, 800, function() {

			

			});
		});

})();









