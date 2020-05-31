import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR
} from '../types';

// importar cliente axios
import clienteAxios from '../config/axios';

import Swal from 'sweetalert2';
import Productos from '../components/Productos';

// Crear nuevos productos
export function crearNuevoProductoAction(producto) {
    return async (dispatch) => {
        dispatch( agregarProducto() );

        try {
            // insertar productos a la api a traves del cliente axios
            await clienteAxios.post('/product', producto);
            // si todo esta ok actualizar el state
            dispatch( agregarProductoExito(producto) );

            // alerta
            Swal.fire(
                'Correcto', 
                'El producto se agregó correctamente',
                'success'
            )
        } catch (error) {
            // si hay un error cambiar el state
            dispatch( agregarProductoError(true) );
            // alerta de error 
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Hubo un error, intenta de nuevo'
            })
        }
    }
}

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO
});

// si el producto se guarda en la base de datos 
const agregarProductoExito = producto => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
});

// si hubo un error
const agregarProductoError = estado => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
});

// Funcion que lista los registros que se encuentran en la api
export function obtenerProductosAction() {
    return async (dispatch) => {
        dispatch( descargarProductos() );
        
        try {
             // listar productos de la api a traves del cliente axios
            const respuesta = await clienteAxios.get('/productos');
            dispatch( descargaProductosExitosa(respuesta.data));
            
        } catch (error) {
            
        }
    }
}

const descargarProductos = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true
})

const descargaProductosExitosa = productos => ({
    type: DESCARGA_PRODUCTOS_EXITO,
    payload: productos
})