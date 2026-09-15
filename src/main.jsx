import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import './index.css'
import App from './App'
import ProductsPage from './pages/ProductsPage'
import ContatoPage from './pages/ContatoPage'
import PageNotFound from './pages/PageNotFound'
import ProductDetailPage from './pages/ProductDetailPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <PageNotFound/>,
  },
  {path: "produtos", element: <ProductsPage/>},
  {path: "produtos/:idProduto", element: <ProductDetailPage/>},
  {path: "contato", element: <ContatoPage />}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
