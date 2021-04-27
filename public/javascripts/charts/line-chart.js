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
				x: 1,
			    y: 3
			}, {
				x: 16,
			    y: 13
			}, {
				x: 16,
			    y: 13
			}];



	var ctx = document.getElementById("basiclinechart");
	var basiclinechart = new Chart(ctx, {
		type: 'line',
		data:  
		{
			labels: ["January", "February", "March","April","May","June"],
			datasets: [{
				label: "Registro 2020",
				fill: false,
				lineTension: 0,
                backgroundColor: '#00c292',
				borderColor: '#00c292',
				data: registros
            }
            
		]
		},
		
		options: {
			responsive: true,
			title:{
				display:true,
				text:'Carne Cerdo'
			},
			tooltips: {
				mode: 'index',
				intersect: false,
			},
			hover: {
				mode: 'nearest',
				intersect: true
			},
			scales: {
				yAxes: [{
					display: true,
					scaleLabel: {
						display: true,
						labelString: 'Precio (Dólares)'
					}
				}]
			}
		}
	});
	
	/*----------------------------------------*/
	/*  2.  Line Chart Interpolation
	/*----------------------------------------*/
	
	var ctx = document.getElementById("linechartinterpolation");
	var linechartinterpolation = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ["0", "1", "2"],
			datasets: [{
				label: "Registro 2020",
				fill: false,
                backgroundColor: '#00c292',
				borderColor: '#00c292',
				data: [0, 15, 17, 200, 0, 12, -200, 5, 200, 8, 200, 12, 200],
				cubicInterpolationMode: 'monotone'
            }, {
                label: "Registro 2019",
				fill: false,
                backgroundColor: '#fb9678',
				borderColor: '#fb9678',
				data: [-100, 200, 12, -200, 12, 200, 8, -200, 9, 200, -200, -12, -200]
				
		}]
		},
		options: {
			responsive: true,
			title:{
				display:true,
				text:'Carne de res'
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
					},
					ticks: {
						suggestedMin: -10,
						suggestedMax: 200,
					}
				}]
			}
		}
	});
	
	
	/*----------------------------------------*/
	/*  3.  Line Chart styles
	/*----------------------------------------*/
	
	var ctx = document.getElementById("linechartstyles");
	var linechartstyles = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ["January", "February", "March"],
			datasets: [{
				label: "Unfilled",
				fill: false,
                backgroundColor: '#01c0c8',
				borderColor: '#01c0c8',
				data: [0, 15, 17, 200, 0, 12]
            }, {
                label: "Dashed",
				fill: false,
                backgroundColor: '#fb9678',
				borderColor: '#fb9678',
				borderDash: [5, 5],
				data: [-100, 200, 12, -200, 12]
				
		}]
		},
		options: {
			responsive: true,
			title:{
				display:true,
				text:'Pollo'
			},
			tooltips: {
				mode: 'index',
				intersect: false,
			},
			hover: {
				mode: 'nearest',
				intersect: true
			},
			scales: {
				xAxes: [{
					display: true,
					scaleLabel: {
						display: true,
						labelString: 'Month'
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
	/*----------------------------------------*/
	/*  4.  Line Chart point circle
	/*----------------------------------------*/
	
	var ctx = document.getElementById("linechartpointcircle");
	var linechartpointcircle = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ["May", "June", "July"],
			datasets: [{
				label: "My First dataset",
				backgroundColor: '#00c292',
				borderColor: '#00c292',
				data: [0, 10, 20, 30, 40, 50, 60],
				fill: false,
				pointRadius: 4,
				pointHoverRadius: 10,
				showLine: false 
			}]
		},
		options: {
			responsive: true,
			title:{
				display:true,
				text:'Line Chart Point Circle'
			},
			legend: {
				display: false
			},
			elements: {
				point: {
					pointStyle: 'circle',
				}
			}
		}
	});
	
	
		
})(jQuery); 