import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { TopProducts } from "@/components/Productos/top-products";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Productos",
};

const ProductosPage = () => {
  return (
    <>
      <Breadcrumb pageName="Productos" />

      <div className="space-y-10">
        <TopProducts />
      </div>
    </>
  );
};

export default ProductosPage;