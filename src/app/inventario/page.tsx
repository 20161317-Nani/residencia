import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { TopProducts } from "@/components/Tables/top-products";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inventario",
};

const InventarioPage = () => {
  return (
    <>
      <Breadcrumb pageName="Inventario" />

      <div className="space-y-10">
        <TopProducts />
      </div>
    </>
  );
};

export default InventarioPage;