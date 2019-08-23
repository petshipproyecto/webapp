import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const DashboardDefault = React.lazy(() => import('./Views/Dashboard/Default'));

const UIBasicButton = React.lazy(() => import('./Views/UIElements/Basic/Button'));
const UIBasicBadges = React.lazy(() => import('./Views/UIElements/Basic/Badges'));
const UIBasicBreadcrumbPagination = React.lazy(() => import('./Views/UIElements/Basic/BreadcrumbPagination'));

const UIBasicCollapse = React.lazy(() => import('./Views/UIElements/Basic/Collapse'));
const UIBasicTabsPills = React.lazy(() => import('./Views/UIElements/Basic/TabsPills'));
const UIBasicBasicTypography = React.lazy(() => import('./Views/UIElements/Basic/Typography'));

const FormUserProfile = React.lazy(() => import('./Views/Usuario/FormUserProfile'));
const TablaMascotas = React.lazy(() => import('./Views/Usuario/TablaMascotas/TablaMascotas'));
const FormPetProfile = React.lazy(() => import('./Views/Mascota/FormPetProfile'));
const FormNewPet = React.lazy(() => import('./Views/Mascota/FormNewPet'));
const GaleriaMascotas = React.lazy(() => import('./Views/Mascota/GaleriaMascotas'));

const BootstrapTable = React.lazy(() => import('./Views/Tables/BootstrapTable'));

const Nvd3Chart = React.lazy(() => import('./Views/Charts/Nvd3Chart/index'));

const GoogleMap = React.lazy(() => import('./Views/Maps/GoogleMap/index'));

const OtherSamplePage = React.lazy(() => import('./Views/Other/SamplePage'));
const OtherDocs = React.lazy(() => import('./Views/Other/Docs'));

const routes = [
   //Rutas del template
    { path: '/basic/button', exact: true, name: 'Basic Button', component: UIBasicButton },
    { path: '/basic/badges', exact: true, name: 'Basic Badges', component: UIBasicBadges },
    { path: '/basic/breadcrumb-paging', exact: true, name: 'Basic Breadcrumb Pagination', component: UIBasicBreadcrumbPagination },
    { path: '/basic/collapse', exact: true, name: 'Basic Collapse', component: UIBasicCollapse },
    { path: '/basic/tabs-pills', exact: true, name: 'Basic Tabs & Pills', component: UIBasicTabsPills },
    { path: '/basic/typography', exact: true, name: 'Basic Typography', component: UIBasicBasicTypography },
    { path: '/tables/bootstrap', exact: true, name: 'Bootstrap Table', component: BootstrapTable },
    { path: '/charts/nvd3', exact: true, name: 'Nvd3 Chart', component: Nvd3Chart },
    { path: '/maps/google-map', exact: true, name: 'Google Map', component: GoogleMap },
    { path: '/sample-page', exact: true, name: 'Sample Page', component: OtherSamplePage },
    { path: '/docs', exact: true, name: 'Documentation', component: OtherDocs },
    //Rutas utilizadas
    { path: '/dashboard', exact: true, name: 'Default', component: DashboardDefault },
    { path: '/UserProfile', exact: true, name: 'Forms Elements', component: FormUserProfile },
    { path: '/PetProfile', exact: true, name: 'Forms Elements', component: FormPetProfile },
    { path: '/NewPet', exact: true, name: 'Forms Elements', component: FormNewPet },
    { path: '/TablaMascotas', exact: true, name: 'Forms Elements', component: TablaMascotas },
    { path: '/GaleriaMascotas', exact: true, name: 'Forms Elements', component: GaleriaMascotas },
];

export default routes;