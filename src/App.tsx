import { Routes, Route } from "react-router-dom"
import { CategoryLayout } from "./cases/categories/components/category-layout"
import { CategoryForm } from "./cases/categories/components/category-form"
import { ProductLayout } from "./cases/products/components/product-layout";
import { BrandLayout } from "./cases/brands/components/brand-layout";

function App() {

  return (
    <div className="wrapper">
      
      <main>
        <Routes>
          <Route path="/categories" element={<CategoryLayout />}>
            <Route path="new" element={<CategoryForm />} />
            <Route path=":id" element={<CategoryForm />} />
          </Route>

          <Route path="/brands" element={<BrandLayout />}>
          </Route>

          <Route path="/products" element={<ProductLayout />}>
          </Route>
        </Routes>
      </main>

    </div>
  );
}

export default App
