// import React from 'react'
import { SignedIn, SignedOut, SignInButton, UserButton, useAuth } from '@clerk/clerk-react';

// import React from 'react'

const Login = () => {
  const { getToken } = useAuth();

  const callBackend = async () => {
    const token = await getToken();
    await fetch('http://localhost:8000/users/me', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
    });
  };
  return (
    <header className="border-2 bg-gray-900">
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
};

export default Login;
