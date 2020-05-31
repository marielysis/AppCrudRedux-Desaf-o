import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types';

// importar cliente axios
import clienteAxios from '../config/axios';

// Crear nuevos productos
export function crearNuevoProductoAction(producto) {
    return async (dispatch) => {
        dispatch( agregarProducto() );

        try {
            // insertar productos a la api a traves del cliente axios
            await clienteAxios.post('/producto', producto);
            // si todo esta ok actualizar el state
            dispatch( agregarProductoExito(producto) );
        } catch (error) {
            // si hay un error cambiar el state
            dispatch( agregarProductoError(true) );
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
