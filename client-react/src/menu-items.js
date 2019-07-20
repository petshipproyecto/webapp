export default {
    items: [
        {
            id: 'navigation',
            title: 'Menu',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'dashboard',
                    title: 'Inicio',
                    type: 'item',
                    url: '/dashboard/default',
                    icon: 'feather icon-home',
                },
                {
                    id: 'form-basic',
                    title: 'Buscar Pareja',
                    type: 'item',
                    url: '/forms/form-basic',
                    icon: 'feather icon-heart-on'
                },
                {
                    id: 'maps',
                    title: 'Buscar Amigos',
                    type: 'item',
                    icon: 'feather icon-star-on',
                    url: '/maps/google-map'
                },
                {
                    id: 'sample-page',
                    title: 'Matchs',
                    type: 'item',
                    url: '/sample-page',
                    classes: 'nav-item',
                    icon: 'feather icon-users'
                },
                {
                    id: 'auth',
                    title: 'Perfiles',
                    type: 'collapse',
                    icon: 'feather icon-user',
                    children: [
                        {
                            id: 'signup-1',
                            title: 'Perfil de Usuario',
                            type: 'item',
                            url: '/auth/signup-1',
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'signin-1',
                            title: 'Perfil de Mascota',
                            type: 'item',
                            url: '/auth/signin-1',
                            target: true,
                            breadcrumbs: false
                        }
                    ]
                },
                {
                    id: 'bootstrap',
                    title: 'Configuración',
                    type: 'item',
                    icon: 'feather icon-settings',
                    url: '/tables/bootstrap'
                }

              
                
            ]
        },        
    ]
}