import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const DashboardDefault = React.lazy(() => import('./Views/Dashboard/Default'));
const FormUserProfile = React.lazy(() => import('./Views/Usuario/FormUserProfile'));
const TablaMascotas = React.lazy(() => import('./Views/Mascota/TablaMascotas'));
const FormPetProfile = React.lazy(() => import('./Views/Mascota/FormPetProfile'));
const FormNewPet = React.lazy(() => import('./Views/Mascota/FormNewPet'));
const GaleriaMascotas = React.lazy(() => import('./Views/Mascota/GaleriaMascotas'));
const ChoosePet = React.lazy(() => import('./Views/Mascota/ChoosePet'));

const routes = [
    { path: '/dashboard', exact: true, name: 'Default', component: DashboardDefault },
    { path: '/UserProfile', exact: true, name: 'Forms Elements', component: FormUserProfile },
    { path: '/PetProfile', exact: true, name: 'Forms Elements', component: FormPetProfile },
    { path: '/choosePet', exact: true, name: 'Choose Pet', component: ChoosePet },
    { path: '/NewPet', exact: true, name: 'Forms Elements', component: FormNewPet },
    { path: '/TablaMascotas', exact: true, name: 'Forms Elements', component: TablaMascotas },
    { path: '/GaleriaMascotas', exact: true, name: 'Forms Elements', component: GaleriaMascotas },
];

export default routes;