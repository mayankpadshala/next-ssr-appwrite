'use server';

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { authenticateUser } from './auth'; // Import your actual authentication service

type LoginState = {
  message: string;
};

export async function loginAction(prevState: LoginState, formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  try {
    const user = await authenticateUser(email, password); // Use actual authentication logic

    if (user) {
      // Set a session cookie
      const cookieStore = await cookies();
      cookieStore.set('session', user.sessionToken, { httpOnly: true, secure: true, sameSite: 'strict' });
      redirect('/');
    } else {
      return { message: 'Invalid credentials' };
    }
  } catch (error) {
    console.error('Login error:', error);
    return { message: 'An error occurred during login' };
  }
}