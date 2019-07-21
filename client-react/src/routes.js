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

const FormUserProfile = React.lazy(() => import('./Views/Forms/FormUserProfile'));
const FormPetProfile = React.lazy(() => import('./Views/Forms/FormPetProfile'));

const BootstrapTable = React.lazy(() => import('./Views/Tables/BootstrapTable'));

const Nvd3Chart = React.lazy(() => import('./Views/Charts/Nvd3Chart/index'));

const GoogleMap = React.lazy(() => import('./Views/Maps/GoogleMap/index'));

const OtherSamplePage = React.lazy(() => import('./Views/Other/SamplePage'));
const OtherDocs = React.lazy(() => import('./Views/Other/Docs'));

const routes = [
    { path: '/dashboard/default', exact: true, name: 'Default', component: DashboardDefault },
    { path: '/basic/button', exact: true, name: 'Basic Button', component: UIBasicButton },
    { path: '/basic/badges', exact: true, name: 'Basic Badges', component: UIBasicBadges },
    { path: '/basic/breadcrumb-paging', exact: true, name: 'Basic Breadcrumb Pagination', component: UIBasicBreadcrumbPagination },
    { path: '/basic/collapse', exact: true, name: 'Basic Collapse', component: UIBasicCollapse },
    { path: '/basic/tabs-pills', exact: true, name: 'Basic Tabs & Pills', component: UIBasicTabsPills },
    { path: '/basic/typography', exact: true, name: 'Basic Typography', component: UIBasicBasicTypography },
    { path: '/forms/formUserProfile', exact: true, name: 'Forms Elements', component: FormUserProfile },
    { path: '/forms/formPetProfile', exact: true, name: 'Forms Elements', component: FormPetProfile },
    { path: '/tables/bootstrap', exact: true, name: 'Bootstrap Table', component: BootstrapTable },
    { path: '/charts/nvd3', exact: true, name: 'Nvd3 Chart', component: Nvd3Chart },
    { path: '/maps/google-map', exact: true, name: 'Google Map', component: GoogleMap },
    { path: '/sample-page', exact: true, name: 'Sample Page', component: OtherSamplePage },
    { path: '/docs', exact: true, name: 'Documentation', component: OtherDocs },
];

export default routes;