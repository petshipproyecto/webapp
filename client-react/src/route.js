import React from 'react';

const SignUp = React.lazy(() => import('./Views/Authentication/SignUp/SignUp'));
const Signin = React.lazy(() => import('./Views/Authentication/SignIn/SignIn'));
const ResetPassword = React.lazy(() => import('./Views/Authentication/ResetPassword/ResetPassword'));

const route = [
    { path: '/auth/signup', exact: true, name: 'Signup 1', component: SignUp },
    { path: '/auth/signin', exact: true, name: 'Signin 1', component: Signin },
    { path: '/auth/resetPassword', exact: true, name: 'Reset Password', component: ResetPassword }
];

export default route;