import { User } from './User'; // Import your User model

export async function authenticateUser(email: string, password: string): Promise<User | null> {
  // Replace this with your actual authentication logic
  console.log('Authenticating user:', email);
  console.log('Password:', password)
  if (email === 'mayankpadshala3012@example.com' && password === 'password123') {
    return {
      id: '1',
      email: 'mayankpadshala3012@example.com',
      sessionToken: 'abc123', // Generate a real session token
    };
  }
  return null;
}