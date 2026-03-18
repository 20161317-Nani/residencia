import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { getTopProducts } from "../fetch";

export async function TopProducts() {
  const data = await getTopProducts();

  return (
    <div className="rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
      <div className="px-6 py-4 sm:px-7 sm:py-5 xl:px-8.5">
        <h2 className="text-2xl font-bold text-dark dark:text-white">
          Productos
        </h2>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Producto</TableHead>
            <TableHead>Categoría</TableHead>
            <TableHead>Precio</TableHead>
            <TableHead>Stock</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((product) => (
            <TableRow key={product.name}>
              <TableCell className="flex items-center gap-3">
                <Image
                  src={product.image}
                  width={40}
                  height={40}
                  alt={product.name}
                />
                {product.name}
              </TableCell>

              <TableCell>{product.category}</TableCell>
              <TableCell>${product.price}</TableCell>
              <TableCell>{product.sold}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}