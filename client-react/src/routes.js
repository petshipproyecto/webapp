import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const DashboardDefault = React.lazy(() => import('./Views/Dashboard/Default'));
const FormUserProfile = React.lazy(() => import('./Views/Usuario/FormUserProfile'));
const VerUserProfile = React.lazy(() => import('./Views/Usuario/VerUserProfile'));
const TablaMascotas = React.lazy(() => import('./Views/Mascota/TablaMascotas'));
const AdministrarUsuarios = React.lazy(() => import('./Views/Administrador/AdministrarUsuarios'));
const AdministrarRazas = React.lazy(() => import('./Views/Administrador/AdministrarRazas'));
const AdministrarTipoMascota = React.lazy(() => import('./Views/Administrador/AdminTipoMascota'));
const AdministrarMascotas = React.lazy(() => import('./Views/Administrador/AdministrarMascotas'));
const AgregarUsuario = React.lazy(() => import('./Views/Administrador/AdminAgregarUsuario'));
const FormPetProfile = React.lazy(() => import('./Views/Mascota/FormPetProfile'));
const FormNewPet = React.lazy(() => import('./Views/Mascota/FormNewPet'));
const GaleriaMascotas = React.lazy(() => import('./Views/Mascota/GaleriaMascotas'));
const ChoosePet = React.lazy(() => import('./Views/Mascota/ChoosePet'));
const Swipe = React.lazy(() => import('./Views/Swipe/Swipe'));
const Notificaciones = React.lazy(() => import('./Views/Notificaciones/Notificaciones'));
const Busqueda = React.lazy(() => import('./Views/Busqueda/Busqueda'));

const routes = [
    { path: '/dashboard', exact: true, name: 'Default', component: DashboardDefault },
    { path: '/UserProfile', exact: true, name: 'Forms Elements', component: FormUserProfile },
    { path: '/VerUserProfile', exact: true, name: 'Forms Elements', component: VerUserProfile },
    { path: '/PetProfile', exact: true, name: 'Forms Elements', component: FormPetProfile },
    { path: '/NewPet', exact: true, name: 'Forms Elements', component: FormNewPet },
    { path: '/TablaMascotas', exact: true, name: 'Forms Elements', component: TablaMascotas },
    { path: '/AdministrarUsuarios', exact: true, name: 'Forms Elements', component: AdministrarUsuarios },
    { path: '/AdministrarRazas', exact: true, name: 'Forms Elements', component: AdministrarRazas },
    { path: '/AgregarUsuario', exact: true, name: 'Forms Elements', component: AgregarUsuario },
    { path: '/AdministrarTiposDeMascotas', exact: true, name: 'Forms Elements', component: AdministrarTipoMascota },
    { path: '/AdministrarMascotas', exact: true, name: 'Forms Elements', component: AdministrarMascotas },   
    { path: '/GaleriaMascotas', exact: true, name: 'Forms Elements', component: GaleriaMascotas },
    { path: '/Swipe', exact: true, name: 'Forms Elements', component: Swipe },
    { path: '/Notificaciones', exact: true, name: 'Forms Elements', component: Notificaciones },
    { path: '/ConfiguracionBusqueda', exact: true, name: 'Forms Elements', component: Busqueda },
];

export default routes;