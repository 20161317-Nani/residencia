import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { TopProducts } from "@/components/Tables/top-products";
import { TopProductsSkeleton } from "@/components/Tables/top-products/skeleton";

import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Productos",
};

const ProductosPage = () => {
  return (
    <>
      <Breadcrumb pageName="Productos" />

      <div className="space-y-10">
        <Suspense fallback={<TopProductsSkeleton />}>
          <TopProducts />
        </Suspense>
      </div>
    </>
  );
};

export default ProductosPage;