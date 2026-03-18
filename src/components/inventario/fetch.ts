import * as logos from "@/assets/logos";

export async function getTopProducts() {
  return [
    {
      image: "/images/mezcal/espadin.jpg",
      name: "Mezcal Espadín",
      category: "Mezcal",
      price: 450,
      stock: 20,
    },
    {
      image: "/images/mezcal/reposado.jpg",
      name: "Mezcal Reposado",
      category: "Mezcal",
      price: 650,
      stock: 8,
    },
    {
      image: "/images/mezcal/anejo.jpg",
      name: "Mezcal Añejo",
      category: "Mezcal",
      price: 900,
      stock: 0,
    },
  ];
}