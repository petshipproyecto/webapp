export default {
    items: [
        {
            id: 'menu',
            title: 'Menu',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'inicio',
                    title: 'Inicio',
                    type: 'item',
                    url: '/dashboard/default',
                    icon: 'feather icon-home',
                },
                 {
                     id: 'buscarPareja',
                     title: 'Buscar Pareja/Amigo',
                     type: 'item',
                     url: '/Swipe',
                     icon: 'feather icon-heart-on'
                 },
                 {
                     id: 'favoritos',
                     title: 'Favoritos',
                     type: 'item',
                     icon: 'feather icon-star-on',
                     url: '/GaleriaMascotas'
                 },
                 {
                     id: 'match',
                     title: 'Matchs',
                     type: 'item',
                     url: '/ComingSoon',
                     classes: 'nav-item',
                     icon: 'feather icon-users'
                 },
                {
                    id: 'nuevaMascota',
                    title: 'Agregar Mascota',
                    type: 'item',
                    url: '/NewPet',
                    classes: 'nav-item',
                    icon: 'feather icon-plus-circle'
                },
                {
                    id: 'nuevoUsuario',
                    title: 'Agregar Usuario',
                    type: 'item',
                    url: '/SignUp',
                    classes: 'nav-item',
                    icon: 'feather icon-plus-circle'
                },
                {
                    id: 'forms',
                    title: 'Perfiles',
                    type: 'collapse',
                    icon: 'feather icon-user',
                    children: [
                        {
                            id: 'perfilUsuario',
                            title: 'Ver Perfil de Usuario',
                            type: 'item',
                            url: '/UserProfile',
                         
                        },
                        {
                            id: 'perfilMascota',
                            title: 'Ver Perfil de Mascota',
                            type: 'item',
                            url: '/PetProfile',
                       
                        }
                    ]
                },
                 {
                     id: 'administrarMascotas',
                     title: 'Administrar Mascotas',
                     type: 'item',
                     icon: 'feather icon-settings',
                     url: '/TablaMascotas'
                 },
                 {
                     id: 'auth',
                     title: 'Autenticación',
                     type: 'collapse',
                     icon: 'feather icon-lock',
                     badge: {
                         title: 'New',
                         type: 'label-danger'
                     },
                     children: [
                         {
                             id: 'signup',
                             title: 'Registrar Usuario',
                             type: 'item',
                             url: '/signUp',
                             target: true,
                             breadcrumbs: false
                         },
                         {
                             id: 'signin',
                             title: 'Sign in',
                             type: 'item',
                             url: '/signIn',
                             target: true,
                             breadcrumbs: false
                        },
                        {
                             id: 'resetPassword',
                             title: 'Reset Password',
                             type: 'item',
                             url: '/resetPassword',
                             target: true,
                             breadcrumbs: false
                         },
                         {
                             id: 'choosePet',
                             title: 'Elegir Mascota',
                             type: 'item',
                             url: '/choosePet',
                             target: true,
                             breadcrumbs: false
                         }
                     ]
                 },

                

              
                
            ]
        },        
    ]
}
