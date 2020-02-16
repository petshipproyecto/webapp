export default {
  items: [
    {
      id: "menu",
      title: "Menu",
      type: "group",
      icon: "icon-navigation",
      children: [
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
              id: "verPerfilUsuario",
              title: "Ver  Usuario",
              type: "item",
              icon: "feather icon-user",
              url: "/VerUserProfile"
            }
          ]
        },
        /*{
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
  
          ,
          {
            id: "notificaciones",
            title: "Notificaciones",
            type: "item",
            icon: "feather icon-bell",
            url: "/Notificaciones"
          }
          */
         /*
        {
          id: "administrarMascotas",
          title: "Mis Mascotas",
          type: "item",
          icon: "fa fa-paw",
          url: "/TablaMascotas"
        },*/
        /*{
          id: "configuracionBusqueda",
          title: "Preferencias de Búsqueda",
          type: "item",
          icon: "feather icon-filter",
          url: "/ConfiguracionBusqueda"
        }, */
        // {
        //   id: "choosePet",
        //   title: "Eleguir Mascota",
        //   type: "item",
        //   icon: "fa fa-check-circle",
        //   url: "/choosePet",
        //   badge: {
        //     title: "Prueba",
        //     type: "label-danger"
        //   },
        // },
        {
          id: "adminUsers",
          title: "Administrar Usuarios",
          type: "item",
          icon: "fa fa-group",
          url: "/AdministrarUsuarios"
        },
        {
          id: "adminTipoMascotas",
          title: "Administrar Tipos de Mascotas",
          type: "item",
          icon: "fa fa-paw",
          url: "/AdministrarTiposDeMascotas"
        }
        // {
        //   id: "inputDate",
        //   title: "Cargar Datos",
        //   type: "item",
        //   icon: "fa fa-check-circle",
        //   url: "/choosePet",
        //   badge: {
        //     title: "Admin",
        //     type: "label-danger"
        //   },
        // },
      ]
    }
  ]
};
