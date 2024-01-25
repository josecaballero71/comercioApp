import { useContext } from "react"
import { ComprasContext } from "../context/ComprasContext"

export const FacturasPage = () => {
  
  const {listaCompras} = useContext(ComprasContext)
  const calcularValor = (precio, cantidad)=>{
    return (precio*cantidad).toFixed(2)
  }
  const calcularTotal = ()=>{
    return listaCompras.reduce((total, item) => total+item.price*item.cantidad, 0).toFixed(2)
  }
  const handleImpresion = ()=>{ print() }
  return (
    <>
      <h2>FACTURA:</h2>
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Valor</th>
          </tr>
        </thead>
        <tbody>
          { listaCompras.map(item => (
          <tr key={item.id}>
            <th>{item.title}</th>
            <td>{item.price}</td>
            <td>{item.cantidad}</td>
            <td>{calcularValor(item.price, item.cantidad)}</td>
          </tr>))
          }
          <tr>
            <th><b>TOTAL:</b></th>
            <td></td>
            <td></td>
            <td>${calcularTotal()}</td>
          </tr>
        </tbody>
      </table>
      <div className="d-grid gap-2">
        <button className="btn btn-primary"
        onClick={handleImpresion}
        disabled= {listaCompras<1}>COMPRAR</button>
      </div>
    </>
  )
}
