import { ProductosProvider } from "./context/ProductosProvider"
import { ComprasProvider } from "./context/ComprasProvider"
import { Navigate } from "react-router-dom"
import { Routes, Route } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { OptimusPage } from "./pages/OptimusPage"
import { ComprasPage } from "./pages/ComprasPage"
import { FacturasPage } from "./pages/FacturasPage"
import { NosotrosPage } from "./pages/NosotrosPage"


export const AppComercio = () => {
  return (
    <ProductosProvider>
      <ComprasProvider>
        <NavBar></NavBar>  
        <div className="container">
          <Routes>
            <Route path="/" element={<OptimusPage></OptimusPage>}></Route>
            <Route path="/compras" element={<ComprasPage></ComprasPage>}></Route>
            <Route path="/facturas" element={<FacturasPage></FacturasPage>}></Route>
            <Route path="/nosotros" element={<NosotrosPage></NosotrosPage>}></Route>
            <Route path="/*" element={<Navigate to="/"/>}></Route>
          </Routes>
        </div>
      </ComprasProvider>  
    </ProductosProvider>
  )
}


