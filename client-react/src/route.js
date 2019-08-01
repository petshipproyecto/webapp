import React from 'react';

const SignUp = React.lazy(() => import('./Views/Authentication/SignUp/SignUp'));
const Signin = React.lazy(() => import('./Views/Authentication/SignIn/SignIn'));
const ResetPassword = React.lazy(() => import('./Views/Authentication/ResetPassword/ResetPassword'));
const ChoosePet = React.lazy(() => import('./Views/Authentication/ChoosePet/ChoosePet'));

const route = [
    { path: '/signUp', exact: true, name: 'Signup', component: SignUp },
    { path: '/signIn', exact: true, name: 'Signin', component: Signin },
    { path: '/resetPassword', exact: true, name: 'Reset Password', component: ResetPassword },
    { path: '/choosePet', exact: true, name: 'Choose Pet', component: ChoosePet }

];

export default route;