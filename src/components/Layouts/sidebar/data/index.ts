import * as Icons from "../icons";

export const NAV_DATA = [
  {
    label: "MAIN MENU",
    items: [
      {
        title: "Dashboard",
        icon: Icons.HomeIcon,
        items: [
          {
            title: "eCommerce",
            url: "/",
          },
        ],
      },
      {
        title: "Profile",
        url: "/profile",
        icon: Icons.User,
        items: [],
      },
      {
        title: "Productos",
        url: "/productos",
        icon: Icons.Alphabet,
        items: [],
      },
      {
        title: "Inventario",
        url: "/inventario",
        icon: Icons.Alphabet,
        items: [],
      },
      {
        title: "Pedidos",
        url: "/pedidos",
        icon: Icons.Alphabet,
        items: [],
      },
      {
        title: "Usuarios",
        url: "/usuarios",
        icon: Icons.User,
        items: [],
      },
      {
        title: "Tienda",
        url: "/tienda",
        icon: Icons.HomeIcon,
        items: [],
      },
      {
        title: "Reportes",
        url: "/reportes",
        icon: Icons.PieChart,
        items: [],
      },
    ],
  },
];