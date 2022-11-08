import React, { Component } from 'react';
import Header from '../components/header';
import CanvasEditor from '../components/canvasEditor';

class LayoutEditor extends Component {
	render() {
		return (
			<>
				<Header />
				<div className="container-fluid canvas-container">
					<div class="row">
						<div class="col-3 d-flex flex-column">
							<button className="btn btn-primary mb-1" onClick={""}>Subir Imagen</button>
							<button className="btn btn-primary mb-1" onClick={""}>Agregar Mesa</button>

							<button className="btn btn-primary mb-1" onClick={""}>Seleccionar Posición</button>
							<div class="input-group input-group-sm mb-3">
								<span class="input-group-text" id="inputGroup-sizing-sm">Largo</span>
								<input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
							</div>
							<div class="input-group input-group-sm mb-3">
								<span class="input-group-text" id="inputGroup-sizing-sm">Ancho</span>
								<input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
							</div>
							<div class="input-group input-group-sm mb-3">
								<span class="input-group-text" id="inputGroup-sizing-sm">Ángulo</span>
								<input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
							</div>
							<button className="btn btn-primary mb-1" onClick={""}>Guardar</button>
						</div>
						<div class="col-9">
							<CanvasEditor />
						</div>
					</div>
				</div>
			</>
		)
	}
}


export default LayoutEditor;