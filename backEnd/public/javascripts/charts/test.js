(function ($) {
 "use strict";
 
	 /*----------------------------------------*/
	/*  1.  Basic Line Chart
	Los registros no son equdistantes en el tiempo
	Producto:{Nombre: Carne de Cerdo,
			  Registros:[[timestamp1, precio, cantidadComprada],[timestamp2, precio2, cantidadComprada], ...]
			  2019,2020:
				[[1551428640000,1.85],[1551774240000,1.68],[1552379040000,1.7],[1552551840000,1.81],
				[1583137440000,1.82],[1583569440000,1.70],[1583915040000,1.75],[1584001440000,1.9],[1584260640000,1.67]]
			 Fecha:timestamp,
			 precio:cents}




			var registros = [{
			    x: 10,
			    y: 20
			}, {
			    x: 15,
			    y: 10
			}]






	/*----------------------------------------*/

	/*var registros = [{
			    x: 1551428640000,
			    y: 1.85
			}, {
			    x: 1551774240000,
			    y: 1.68
			}];*/

	var registros = [{
			    x: 10,
			    y: 15
			}, {
			    x: 11,
			    y: 12
			}, {
				x: 14,
			    y: 13
			}, {
				x: 16,
			    y: 13
			}];



	var ctx = document.getElementById("basiclinechart");
	var linechartinterpolation = new Chart(ctx, {
		type: 'line',
		data: {
			datasets: [{
				label: "Cubic interpolation",
				fill: false,
                backgroundColor: '#00c292',
				borderColor: '#00c292',
				data: registros,
				cubicInterpolationMode: 'monotone'
            }]
		},
		options: {
			responsive: true,
			title:{
				display:true,
				text:'Line Chart interpolation'
			},
			tooltips: {
				mode: 'index'
			},
			scales: {
				xAxes: [{
					display: true,
					scaleLabel: {
						display: true
					}
				}],
				yAxes: [{
					display: true,
					scaleLabel: {
						display: true,
						labelString: 'Value'
					}
				}]
			}
		}
	});
	
	
	
		
})(jQuery); 