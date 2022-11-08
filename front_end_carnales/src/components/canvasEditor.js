import React, { Component, useState } from 'react';
import Mesa from './mesa';
import conf from '../conf';

let urlBack =  conf.urlBack;

let planoSize = {height: "932px", width:"623px"}

let mesas = [
    {nombre: "Ventana", height:"30px", width:"205px", left:"39px", top:"0px", giro:"360deg", mesaType:"ventana", id:"ventana"},
    {nombre: "Mesa 1", height:"51px", width:"120px", left:"292px", top:"93px", giro:"0turn", mesaType:"mesa", id:"mesa1"},
    {nombre: "Mesa 2", height:"51px", width:"120px", left:"500px", top:"93px", giro:"0turn", mesaType:"mesa", id:"mesa2"},
    {nombre: "Mesa 3", height:"51px", width:"120px", left:"292px", top:"263px", giro:"0turn", mesaType:"mesa", id:"mesa3"},
    {nombre: "Mesa 4", height:"51px", width:"120px", left:"500px", top:"342px", giro:"0turn", mesaType:"mesa", id:"mesa4"},
    {nombre: "Mesa 5", height:"51px", width:"120px", left:"476px", top:"629px", giro:"0turn", mesaType:"mesa", id:"mesa5"},
    {nombre: "Mesa 6", height:"51px", width:"120px", left:"476px", top:"810px", giro:"0turn", mesaType:"mesa", id:"mesa6"},
    {nombre: "Mesa 7", height:"120px", width:"60px", left:"261px", top:"647px", giro:"0turn", mesaType:"mesa", id:"mesa7"},
]

function CanvasEditor(props) {
  return (
    <div id="plano">
      {mesas.map(mesa => (
        <Mesa modalID='modal' value={mesa.nombre} mesaType={mesa.mesaType} id={mesa.id} mesaInfo={mesa}/>
      ))
      }
    </div>
  )
}

export default CanvasEditor;