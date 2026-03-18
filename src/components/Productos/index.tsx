import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { standardFormat } from "@/lib/format-number";
import { cn } from "@/lib/utils";
import Image from "next/image";

async function getProductos() {
  return [
    {
      nombre: "Mezcal Espadín",
      imagen: "/images/product1.jpg",
      precio: 450,
      stock: 20,
      categoria: "Bebidas",
    },
    {
      nombre: "Mezcal Reposado",
      imagen: "/images/product2.jpg",
      precio: 650,
      stock: 15,
      categoria: "Bebidas",
    },
  ];
}

export async function ProductosTable({ className }: { className?: string }) {
  const data = await getProductos();

  return (
    <div
      className={cn(
        "grid rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card",
        className,
      )}
    >
      <h2 className="mb-4 text-body-2xlg font-bold text-dark dark:text-white">
        Productos
      </h2>

      <Table>
        <TableHeader>
          <TableRow className="border-none uppercase [&>th]:text-center">
            <TableHead className="!text-left">Producto</TableHead>
            <TableHead>Categoría</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead className="!text-right">Precio</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((producto, i) => (
            <TableRow
              key={producto.nombre + i}
              className="text-center text-base font-medium text-dark dark:text-white"
            >
              <TableCell className="flex items-center gap-3">
                <Image
                  src={producto.imagen}
                  width={40}
                  height={40}
                  alt={producto.nombre}
                  className="size-10 rounded object-cover"
                />
                <span>{producto.nombre}</span>
              </TableCell>

              <TableCell>{producto.categoria}</TableCell>

              <TableCell>{producto.stock}</TableCell>

              <TableCell className="!text-right text-green-500">
                ${standardFormat(producto.precio)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}