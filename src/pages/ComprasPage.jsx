import { useContext } from 'react'
import { ProductosContext } from '../context/ProductosContext'
import { ComprasContext } from '../context/ComprasContext'
import { Card } from '../components/Card'

export const ComprasPage = () => {

    const { productos } = useContext(ProductosContext)
    const {listaCompras, agregarCompra, eliminarCompra, aumentarCantidad, disminuirCantidad } = useContext(ComprasContext)
    
    const handlerAdded = (id) => {
        const foundItem = listaCompras.find(item => item.id === id)
        return foundItem ? foundItem.added : false
    }
    const handlerCantidad = (id) => {
        const foundItem = listaCompras.find(item => item.id === id)
        return foundItem ? foundItem.cantidad : 0
    }
    const handlerAgregar = (compra)=>{
        agregarCompra(compra)
    }
    const handlerQuitar = (id) =>{
        eliminarCompra(id)
    }
    const handlerAumentar = (id) =>{
        aumentarCantidad(id)
    }
    const handlerDisminuir = (id) =>{
        disminuirCantidad(id)
    }
    
    return(
        <>
            <h2>ESTA COMPRA:</h2>
            <hr />
            {productos.map (producto =>(
                <Card
                    key={producto.id}
                    imagen={producto.image}
                    title={producto.title}
                    description={producto.description}
                    price={producto.price}
                    added={handlerAdded(producto.id)} 
                    cantidad={handlerCantidad(producto.id)}
                    handlerAgregar={() => handlerAgregar(producto)}
                    handlerQuitar={() => handlerQuitar(producto.id)}
                    handlerAumentar={()=> handlerAumentar(producto.id)}
                    handlerDisminuir={()=> handlerDisminuir(producto.id)}
                >
                </Card>
            ))}
        </>
    )
}
