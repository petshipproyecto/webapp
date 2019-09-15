import React from 'react';

const SignUp = React.lazy(() => import('./Views/Usuario/SignUp'));
const Signin = React.lazy(() => import('./Views/Autenticacion/SignIn/SignIn'));
const ResetPassword = React.lazy(() => import('./Views/Autenticacion/ResetPassword/ResetPassword'));
const ComingSoon = React.lazy(() => import('./Views/Mantenimiento/ComingSoon'));
const ChoosePet = React.lazy(() => import('./Views/Mascota/ChoosePet'));

const route = [
    { path: '/signUp', exact: true, name: 'Signup', component: SignUp },
    { path: '/signIn', exact: true, name: 'Signin', component: Signin },
    { path: '/ChoosePet', exact: true, name: 'Signin', component: ChoosePet },
    { path: '/resetPassword', exact: true, name: 'Reset Password', component: ResetPassword },
    { path: '/comingSoon', exact: true, name: 'Choose Pet', component: ComingSoon }
];

export default route;