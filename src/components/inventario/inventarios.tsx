import React from "react";

export async function Inventarios() {
  // Aquí podrías hacer un fetch si tienes datos
  const data = [
    { id: 1, name: "Producto A", price: 100 },
    { id: 2, name: "Producto B", price: 200 },
  ];

  return (
    <table className="w-full border border-gray-200">
      <thead>
        <tr>
          <th className="border p-2">ID</th>
          <th className="border p-2">Nombre</th>
          <th className="border p-2">Precio</th>
        </tr>
      </thead>
      <tbody>
        {data.map((product) => (
          <tr key={product.id}>
            <td className="border p-2">{product.id}</td>
            <td className="border p-2">{product.name}</td>
            <td className="border p-2">{product.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}