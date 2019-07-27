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
                    url: '/forms/NewPet',
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
                            title: 'Perfil de Usuario',
                            type: 'item',
                            url: '/forms/UserProfile',
                         
                        },
                        {
                            id: 'perfilMascota',
                            title: 'Perfil de Mascota',
                            type: 'item',
                            url: '/forms/PetProfile',
                       
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
                    title: 'Authentication',
                    type: 'collapse',
                    icon: 'feather icon-lock',
                    badge: {
                        title: 'New',
                        type: 'label-danger'
                    },
                    children: [
                        {
                            id: 'signup',
                            title: 'Sign up',
                            type: 'item',
                            url: '/auth/signup',
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'signin',
                            title: 'Sign in',
                            type: 'item',
                            url: '/auth/signin',
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'resetPassword',
                            title: 'Reset Password',
                            type: 'item',
                            url: '/auth/resetPassword',
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'choosePet',
                            title: 'Elegir Mascota',
                            type: 'item',
                            url: '/auth/choosePet',
                            target: true,
                            breadcrumbs: false
                        }
                    ]
                },

                

              
                
            ]
        },        
    ]
}