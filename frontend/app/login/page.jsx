import dynamic from 'next/dynamic';
import React from "react";

const LoginPage = dynamic(() => import('../../components/login'), {
  ssr: false,
});

const Login = () => {
  return <LoginPage />;
};

export default Login;
