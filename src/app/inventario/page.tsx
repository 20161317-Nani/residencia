import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Inventarios } from "@/components/inventario/inventarios"

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inventario",
};

const InventarioPage = () => {
  return (
    <>
      <Breadcrumb pageName="Inventario" />

      <div className="space-y-10">
        <Inventarios />
      </div>
    </>
  );
};

export default InventarioPage;