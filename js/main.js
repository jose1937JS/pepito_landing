;(function () {

	'use strict';

	// iPad and iPod detection
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") != -1) ||
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};

	// Parallax
	var parallax = function() {
		$(window).stellar();
	};



	// Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){

			event.preventDefault();

			if ( $('#navbar').is(':visible') ) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');
			}
		});

	};


	var goToTop = function() {

		$('.js-gotop').on('click', function(event){

			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500);

			return false;
		});

	};


	// Page Nav
	var clickMenu = function() {

		$('#navbar a:not([class="external"])').click(function(event){
			var section = $(this).data('nav-section'),
				navbar = $('#navbar');

				if ( $('[data-section="' + section + '"]').length ) {
			    	$('html, body').animate({
			        	scrollTop: $('[data-section="' + section + '"]').offset().top
			    	}, 500);
			   }

		    if ( navbar.is(':visible')) {
		    	navbar.removeClass('in');
		    	navbar.attr('aria-expanded', 'false');
		    	$('.js-fh5co-nav-toggle').removeClass('active');
		    }

		    event.preventDefault();
		    return false;
		});


	};

	// Reflect scrolling in navigation
	var navActive = function(section) {

		var $el = $('#navbar > ul');
		$el.find('li').removeClass('active');
		$el.each(function(){
			$(this).find('a[data-nav-section="'+section+'"]').closest('li').addClass('active');
		});

	};

	var navigationSection = function() {

		var $section = $('section[data-section]');

		$section.waypoint(function(direction) {

		  	if (direction === 'down') {
		    	navActive($(this.element).data('section'));
		  	}
		}, {
	  		offset: '150px'
		});

		$section.waypoint(function(direction) {
		  	if (direction === 'up') {
		    	navActive($(this.element).data('section'));
		  	}
		}, {
		  	offset: function() { return -$(this.element).height() + 155; }
		});

	};



	// Window Scroll
	var windowScroll = function() {
		var lastScrollTop = 0;

		$(window).scroll(function(event){

		   	var header = $('#fh5co-header'),
				scrlTop = $(this).scrollTop();

			if ( scrlTop > 500 && scrlTop <= 2000 ) {
				header.addClass('navbar-fixed-top fh5co-animated slideInDown');
			} else if ( scrlTop <= 500) {
				if ( header.hasClass('navbar-fixed-top') ) {
					header.addClass('navbar-fixed-top fh5co-animated slideOutUp');
					setTimeout(function(){
						header.removeClass('navbar-fixed-top fh5co-animated slideInDown slideOutUp');
					}, 100 );
				}
			}

		});
	};


	// Animations
	// Home

	var homeAnimate = function() {
		if ( $('#fh5co-home').length > 0 ) {

			$('#fh5co-home').waypoint( function( direction ) {

				if( direction === 'down' && !$(this.element).hasClass('animated') ) {


					setTimeout(function() {
						$('#fh5co-home .to-animate').each(function( k ) {
							var el = $(this);

							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );

						});
					}, 200);

					$(this.element).addClass('animated');

				}
			} , { offset: '80%' } );

		}
	};


	var introAnimate = function() {
		if ( $('#fh5co-intro').length > 0 ) {

			$('#fh5co-intro').waypoint( function( direction ) {

				if( direction === 'down' && !$(this.element).hasClass('animated') ) {


					setTimeout(function() {
						$('#fh5co-intro .to-animate').each(function( k ) {
							var el = $(this);

							setTimeout ( function () {
								el.addClass('fadeInRight animated');
							},  k * 200, 'easeInOutExpo' );

						});
					}, 1000);


					$(this.element).addClass('animated');

				}
			} , { offset: '80%' } );

		}
	};

	var workAnimate = function() {
		if ( $('#fh5co-work').length > 0 ) {

			$('#fh5co-work').waypoint( function( direction ) {

				if( direction === 'down' && !$(this.element).hasClass('animated') ) {

					setTimeout(function() {
						$('#fh5co-work .to-animate').each(function( k ) {
							var el = $(this);

							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );

						});
					}, 200);

					$(this.element).addClass('animated');

				}
			} , { offset: '80%' } );

		}
	};


	var testimonialAnimate = function() {
		var testimonial = $('#fh5co-testimonials');
		if ( testimonial.length > 0 ) {

			testimonial.waypoint( function( direction ) {

				if( direction === 'down' && !$(this.element).hasClass('animated') ) {

					var sec = testimonial.find('.to-animate').length,
						sec = parseInt((sec * 200) - 400);

					setTimeout(function() {
						testimonial.find('.to-animate').each(function( k ) {
							var el = $(this);

							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );

						});
					}, 200);

					setTimeout(function() {
						testimonial.find('.to-animate-2').each(function( k ) {
							var el = $(this);

							setTimeout ( function () {
								el.addClass('fadeInDown animated');
							},  k * 200, 'easeInOutExpo' );

						});
					}, sec);

					$(this.element).addClass('animated');

				}
			} , { offset: '80%' } );

		}
	};

	var servicesAnimate = function() {
		var services = $('#fh5co-services');
		if ( services.length > 0 ) {

			services.waypoint( function( direction ) {

				if( direction === 'down' && !$(this.element).hasClass('animated') ) {

					var sec = services.find('.to-animate').length,
						sec = parseInt((sec * 200) + 400);

					setTimeout(function() {
						services.find('.to-animate').each(function( k ) {
							var el = $(this);

							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );

						});
					}, 200);

					setTimeout(function() {
						services.find('.to-animate-2').each(function( k ) {
							var el = $(this);

							setTimeout ( function () {
								el.addClass('bounceIn animated');
							},  k * 200, 'easeInOutExpo' );

						});
					}, sec);

					$(this.element).addClass('animated');

				}
			} , { offset: '80%' } );

		}
	};

	var aboutAnimate = function() {
		var about = $('#fh5co-about');
		if ( about.length > 0 ) {

			about.waypoint( function( direction ) {

				if( direction === 'down' && !$(this.element).hasClass('animated') ) {

					setTimeout(function() {
						about.find('.to-animate').each(function( k ) {
							var el = $(this);

							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );

						});
					}, 200);

					$(this.element).addClass('animated');

				}
			} , { offset: '80%' } );

		}
	};

	var countersAnimate = function() {
		var counters = $('#fh5co-counters');
		if ( counters.length > 0 ) {

			counters.waypoint( function( direction ) {

				if( direction === 'down' && !$(this.element).hasClass('animated') ) {

					var sec = counters.find('.to-animate').length,
						sec = parseInt((sec * 200) + 400);

					setTimeout(function() {
						counters.find('.to-animate').each(function( k ) {
							var el = $(this);

							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );

						});
					}, 200);

					setTimeout(function() {
						counters.find('.js-counter').countTo({
						 	formatter: function (value, options) {
				      		return value.toFixed(options.decimals);
				   		},
						});
					}, 400);

					setTimeout(function() {
						counters.find('.to-animate-2').each(function( k ) {
							var el = $(this);

							setTimeout ( function () {
								el.addClass('bounceIn animated');
							},  k * 200, 'easeInOutExpo' );

						});
					}, sec);


					$(this.element).addClass('animated');

				}
			} , { offset: '80%' } );

		}
	};


	var contactAnimate = function() {
		var contact = $('#fh5co-contact');
		if ( contact.length > 0 ) {

			contact.waypoint( function( direction ) {

				if( direction === 'down' && !$(this.element).hasClass('animated') ) {

					setTimeout(function() {
						contact.find('.to-animate').each(function( k ) {
							var el = $(this);

							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );

						});
					}, 200);

					$(this.element).addClass('animated');

				}
			} , { offset: '80%' } );

		}
	};


	let galeria_de_imagenes = () => {
		let imagenes = [
			{
				name: 'Software Educativo',
				description: 'Herramienta creada para el profesor de una materia y sus estudiantes, con el objetivo de subir información relevante de las clases presenciales a la plataforma para que los esudiantes puedan visualizarla, hacer pruebas, tener acceso a herramientas usadas por el profesor, interactuar con el docente y los demás estudiantes en un chat grupal, responder asignaciones que el profesor les envie, entre otras funciones.',
				tools: ['PHP', 'Codeigniter', 'Javascript', 'jQuery', 'Material Design Bootstrap', 'HTML5 y CSS3', 'ckeditor', 'DOMPDF', 'MySQL'],
				src: ['Software_Educativo-Login.png', 'Software_Educativo_Inicio_profesor.png', 'Software_Educativo_Contenido_Profesor.png', 'Software_Educativo_Profesor_Crear_Evaluaciones.png', 'Software_Educativo_Profesor_Evaluaciones.png', 'Software_Educativo_Docente_Asignaciones.png', 'Software_Educativo_Docente_Chat.png']
			},
			{
				name: 'Aula Virtual.',
				description: 'Software desarrolado para que los estudiantes y profesores de una materia estén en contacto mediante publicaciones al estilo de edmodo las cuales se pueden filtrar por el tema de la misma y subir archivos para los estudiantes. El profesor tiene la posibilidad de manejar las notas de sus estudiantes, descargar un reporte de dichas notas y publicar exámenes usando la herramienta Google Form. En cuanto al estudiante a parte de las publicaciones, el puede ver el progreso de sus notas y descargar un certificado de aprobación en PDF que el docente habilita.',
				tools: ['PHP', 'Laravel', 'Javascript', 'jQuery', 'Material Design Bootstrap', 'HTML5 y CSS3', 'DOMPDF', 'MySQL'],
				src: ['Aula_Virtual_Login.png', 'Aula_Virtual_Inicio.png', 'Aula_Virtual_Notas.png']
			},
			{
				name: 'Sistema de Gestión',
				description: 'Sencilla herramienta diseñada para la administración de las transferencias, comunicados y comentarios de los beneficiados por las bolsas del CLAP y administradores de un sector en particular.',
				tools: ['PHP', 'Javascript', 'jQuery', 'Materialize', 'HTML5 y CSS3', 'MySQL'],
				src: ['CLAP_Login.png', 'CLAP_Inicio.png', 'CLAP_transferencias.png']
			},
			{
				name: 'Sistema Administrativo y E-Commerce Simple',
				description: 'Sistema de administracion de ventas y productos para la floristeria Rosas de América.',
				tools: ['PHP', 'Laravel', 'Laravel Shopping Cart', 'DOMPDF', 'Javascript', 'jQuery', 'Material Design Bootstrap', 'HTML5 y CSS3', 'MySQL'],
				src: ['Rosas_De_America_Inicio.jpg', 'Rosas_De_America_Productos.png', 'Rosas_De_America_Carrito_de_Compra.png']
			},
			{
				name: 'Sistema de Administracion y API',
				description: 'Herramienta administrativa que controla la información enviada a una aplicación movil informativa. La información es provista mediante respuestas en formato JSON que se hacen a endpoints de la API desde la app movil.',
				tools: ['PHP', 'Laravel', 'Material Design Bootstrap', 'Javascript', 'jQuery', 'HTML5 y CSS3', 'MySQL'],
				src: ['Fundapi_doctors.png', 'Fundapi_services.png', 'Fundapi_specialties.png', 'Fundapi_json.png']
			},
			{
				name: 'Software Educativo II',
				description: 'Software Educativo sencillo donde el docente sube información de su materia para que el estudiate lo vea, pudiendo éste hacer evaluaciones de los temas correspondientes.',
				tools: ['PHP', 'Laravel', 'Material Design Bootstrap', 'Javascript', 'jQuery', 'HTML5 y CSS3', 'MySQL', 'DOMPDF'],
				src: ['SoftwareEducativo_2_Inicio.png']
			},
		];


		$('a[href="#image_modal"]').click(function(){
			let pos = $(this).data('pos');

			$('#imagenes').html('');
			$('#indicadores').html('');
			$('#tools').html('');

			$('#project_name').text(imagenes[pos].name);
			$('#description').text(imagenes[pos].description);

			for (let tool of imagenes[pos].tools) {
				$('#tools').append(`<li>${tool}</li>`);
			}


			let key = 0;
			for (let img of imagenes[pos].src) {
				console.log(key)

				if (key == 0) {

					$('#indicadores').append(`<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>`);

					$('#imagenes').append(`
						<div class="carousel-item active">
							<img src="images/${img}" class="d-block w-100" alt="404">
						</div>
					`);
				}
				else {
					$('#indicadores').append(`<li data-target="#carouselExampleIndicators" data-slide-to="${key}"></li>`);

					$('#imagenes').append(`
						<div class="carousel-item">
							<img src="images/${img}" class="d-block w-100" alt="404">
						</div>
					`);
				}

				key += 1;
			}

		});
	}




	// Document on load.
	$(function(){

		parallax();

		burgerMenu();

		clickMenu();

		windowScroll();

		navigationSection();

		goToTop();


		// Animations
		homeAnimate();
		introAnimate();
		workAnimate();
		testimonialAnimate();
		servicesAnimate();
		aboutAnimate();
		countersAnimate();
		contactAnimate();

		// my custom funciotn
		galeria_de_imagenes()


	});


}());