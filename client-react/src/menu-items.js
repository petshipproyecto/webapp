export default {
  items: [
    {
      id: "menu",
      title: "Menu",
      type: "group",
      icon: "icon-navigation",
      children: [
        {
          id: "inicio",
          title: "Inicio",
          type: "item",
          url: "/dashboard",
          icon: "feather icon-home"
        },
        {
          id: "buscarPareja",
          title: "Buscar Pareja o Amigo",
          type: "item",
          url: "/Swipe",
          icon: "feather icon-heart-on"
        },
        {
          id: "favoritos",
          title: "Favoritos",
          type: "item",
          icon: "feather icon-star-on",
          url: "/GaleriaMascotas"
        },
        {
          id: "nuevaMascota",
          title: "Agregar Mascota",
          type: "item",
          url: "/NewPet",
          classes: "nav-item",
          icon: "feather icon-plus-circle"
        },
        {
          id: "forms",
          title: "Ver Perfiles",
          type: "collapse",
          icon: "fa fa-id-card-o",
          children: [
            {
              id: "perfilUsuario",
              title: "Ver Perfil de Usuario",
              type: "item",
              icon: "feather icon-user",
              url: "/UserProfile"
            },
            {
              id: "perfilMascota",
              title: "Ver Perfil de Mascota",
              type: "item",
              icon: "feather icon-github",
              url: "/PetProfile"
            }
          ]
        },
        {
          id: "notificaciones",
          title: "Notificaciones",
          type: "item",
          icon: "feather icon-bell",
          url: "/Notificaciones"
        },
        {
          id: "administrarMascotas",
          title: "Mis Mascotas",
          type: "item",
          icon: "fa fa-paw",
          url: "/TablaMascotas"
        },
        {
          id: "configuracionBusqueda",
          title: "Preferencias de Búsqueda",
          type: "item",
          icon: "feather icon-filter",
          url: "/ConfiguracionBusqueda",
        },
        {
          id: "configuracionBusqueda",
          title: "Eleguir Mascota",
          type: "item",
          icon: "fa fa-check-circle",
          url: "/choosePet",
          badge: {
            title: "Prueba",
            type: "label-danger"
          },
        },
      ]
    }
  ]
};
