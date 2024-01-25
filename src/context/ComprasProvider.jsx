import { ComprasContext } from './ComprasContext' 
import { useReducer } from 'react'

const initialState = []
const comprasReducer = (state=initialState, action={}) =>{
    switch (action.type) {
        case '[COMPRA] Agregar compra':
            return [...state, action.payload]
        case '[COMPRA] Eliminar compra':
            return state.filter(compra => compra.id !== action.payload)
        case '[COMPRA] Aumentar cantidad':
            return state.map(item => {
                const cant = item.cantidad+1
                if (item.id === action.payload) return {...item, cantidad:cant}
                return item})
        case '[COMPRA] Disminuir cantidad':
            return state.map(item => {
                const cant = item.cantidad-1
                if (item.id === action.payload && item.cantidad>1) return {...item, cantidad:cant}
                return item})                     
        default:
            return state
    }
}
export const ComprasProvider = ({children}) => {

    const [listaCompras, dispatch] = useReducer(comprasReducer, initialState) 

    const agregarCompra = (compra) => {
        compra.added= true
        compra.cantidad = 1
        const action ={
            type: '[COMPRA] Agregar compra',
            payload:compra,
        }
        dispatch(action)
    }
    const eliminarCompra = (id) => {
        const action ={
            type: '[COMPRA] Eliminar compra',
            payload:id 
        }
        dispatch(action)
    }
    const aumentarCantidad = (id) => {
        const action ={
            type: '[COMPRA] Aumentar cantidad',
            payload:id 
        }
        dispatch(action)
    }
    const disminuirCantidad = (id) => {
        const action ={
            type: '[COMPRA] Disminuir cantidad',
            payload:id 
        }
        dispatch(action)
    }
        
    return (
        <ComprasContext.Provider value={{listaCompras, agregarCompra, eliminarCompra, aumentarCantidad, disminuirCantidad}} >
            {children}
        </ComprasContext.Provider>
    )    

}