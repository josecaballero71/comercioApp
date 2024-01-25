import '../styles/card.css'

export const Card = ({ imagen, title, description, price, added, cantidad, handlerAgregar, handlerQuitar, handlerAumentar, handlerDisminuir }) => {
    
    const clickAgregar = () => {
        handlerAgregar()
    }
    const clickQuitar = () => {
        handlerQuitar()
    }
    const clickAumentar = () => {
        handlerAumentar()
    }
    const clickDisminuir = () => {
        handlerDisminuir()
    }

    return(
        <div className='tarjeta'>
            <img src={imagen} alt={title} className='tarjeta-imagen' />
            <div className='tarjeta-contenido'>
                <h3 className='tarjeta-titulo'>{title}</h3>
                <p className='tarjeta-descripcion'>{description}</p>
                <p className='tarjeta-precio'>{price}</p>
                {added
                    ?<div className='container-fluid'>
                        <button type='button' 
                        className='boton-quitar'
                        onClick={clickQuitar}>Quitar Producto</button>
                        <button type='button'
                        className='btn btn-outline-primary'
                        onClick={clickAumentar}>Aumentar  +</button>
                        <button type='button'
                        className='btn btn-primary'>{cantidad}</button>
                        <button type='button'
                        className='btn btn-outline-primary'
                        onClick={clickDisminuir}>Disminuir  -</button>
                    </div>
                    :<div className='container-fluid'>
                        <button type='button' 
                        className='boton-agregar'
                        onClick={clickAgregar}>Agregar Producto</button>
                        <button type='button' disabled
                        className='btn btn-outline-primary'>Aumentar  +</button>
                        <button type='button' disabled
                        className='btn btn-outline-primary'>{cantidad}</button>
                        <button type='button' disabled
                        className='btn btn-outline-primary'>Disminuir  -</button>
                    </div>
                }
            </div>
        </div>
    )
}