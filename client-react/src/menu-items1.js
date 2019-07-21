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
                    id: 'forms',
                    title: 'Perfiles',
                    type: 'collapse',
                    icon: 'feather icon-user',
                    children: [
                        {
                            id: 'perfilUsuario',
                            title: 'Perfil de Usuario',
                            type: 'item',
                            url: '/forms/form-basic',
                         
                        },
                        {
                            id: 'perfilMascota',
                            title: 'Perfil de Mascota',
                            type: 'item',
                            url: '/forms/form-basic',
                       
                        }
                    ]
                },
                {
                    id: 'configuracion',
                    title: 'Configuración',
                    type: 'item',
                    icon: 'feather icon-settings',
                    url: '/tables/bootstrap'
                }

              
                
            ]
        },        
    ]
}