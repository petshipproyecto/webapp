import React from 'react';

const SignUp = React.lazy(() => import('./Views/Usuario/SignUp/SignUp'));
const Signin = React.lazy(() => import('./Views/Autenticacion/SignIn/SignIn'));
const ResetPassword = React.lazy(() => import('./Views/Autenticacion/ResetPassword/ResetPassword'));
const ChoosePet = React.lazy(() => import('./Views/Mascota/ChoosePet/ChoosePet'));
const ComingSoon = React.lazy(() => import('./Views/Mantenimiento/ComingSoon'));

const route = [
    { path: '/signUp', exact: true, name: 'Signup', component: SignUp },
    { path: '/signIn', exact: true, name: 'Signin', component: Signin },
    { path: '/resetPassword', exact: true, name: 'Reset Password', component: ResetPassword },
    { path: '/choosePet', exact: true, name: 'Choose Pet', component: ChoosePet },
    { path: '/comingSoon', exact: true, name: 'Choose Pet', component: ComingSoon }

];

export default route;