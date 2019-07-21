import React from 'react';

const SignUp1 = React.lazy(() => import('./Views/Authentication/SignUp/SignUp1'));
const Signin1 = React.lazy(() => import('./Views/Authentication/SignIn/SignIn1'));
const ResetPassword = React.lazy(() => import('./Views/Authentication/ResetPassword/ResetPassword'));

const route = [
    { path: '/auth/signup-1', exact: true, name: 'Signup 1', component: SignUp1 },
    { path: '/auth/signin-1', exact: true, name: 'Signin 1', component: Signin1 },
    { path: '/auth/resetPassword', exact: true, name: 'Reset Password', component: ResetPassword }
];

export default route;