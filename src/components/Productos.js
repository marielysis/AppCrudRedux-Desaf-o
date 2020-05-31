import React, { Fragment, useEffect } from 'react';

// --Redux-- Para poder usar funcion desde productosActions 
import { useDispatch, useSelector } from 'react-redux';
import { obtenerProductosAction } from '../actions/productoActions';

const Productos = () => {

    const dispatch = useDispatch();

    useEffect( () => {
        // consultando la api
        const cargarProductos = () => dispatch( obtenerProductosAction() );
        cargarProductos();

    }, []);
    return (
        <Fragment>
            <h2>Listado de Productos</h2>
            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th  scope="col">Nombre</th>
                        <th  scope="col">Precio</th>
                        <th  scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        </Fragment>
    );
}

export default Productos;