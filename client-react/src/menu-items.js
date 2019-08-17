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
                     title: 'Buscar Pareja',
                     type: 'item',
                     url: '/sample-page',
                     icon: 'feather icon-heart-on'
                 },
                 {
                     id: 'buscarAmigo',
                     title: 'Buscar Amigos',
                     type: 'item',
                     icon: 'feather icon-star-on',
                     url: '/sample-page'
                 },
                 {
                     id: 'match',
                     title: 'Matchs',
                     type: 'item',
                     url: '/sample-page',
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
                     id: 'swipe',
                     title: 'Swipe',
                     type: 'item',
                     url: '/Swipe',
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
                     id: 'configuracion',
                     title: 'Configuración',
                     type: 'item',
                     icon: 'feather icon-settings',
                     url: '/tables/bootstrap'
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
