



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

	$('.barra-progreso').width('0px');





	//cerrar 
	var cerrar = $("#cerrar-modal");
	  cerrar.click(function() {
	  	  modal.fadeOut();
	 });

    //avanzar cada diapo
	var avanzar=  $(".flecha-dcha");		
	  	avanzar.click(function(e) {
		    $(".marco-diapos").animate({
				    left: "-=800",
				  }, 800, function() {
				  			  
			});

		// $(".diapo").each(function(){
	 //        valorDiapo = this.getAttribute('data-num');

	 //        valorFlecha = $('.pase').data('diapo');

		// 	$('.pase').data('diapo',valorDiapo); 
		// 	console.log(valorFlecha);

		// 	e.preventDefault();
		// 	return(valorFlecha);

	 //   		 })	    


	

      $('.barra-progreso').animate( {'width': '33%'}, 2000);




	});


	(function(valorFlecha){

	 	 if(valorFlecha ==1 ) {
			 console.log("entra el 1");
		 }	


	 	 if(valorFlecha ==2 ) {
			 console.log("entra el dos");
		 }	

		 if(valorFlecha ==3 ) {
			 console.log("entra el 3");
		 }	  
      		

		});      	



    



	});



})();






