'use client';

import { useActionState } from 'react';
import { loginAction } from '@/app/actions/login';

const INITIAL_STATE = {
    message: '',
};

function LoginPage() {

    const [state, formAction, pending] = useActionState(loginAction, INITIAL_STATE);

    // const user = await auth.getUser();
    // if (user) redirect("/");
    return (
        <div>
            <form action={formAction} id="login-form">
                <h3>Login</h3>
                <p>Enter your information to create an account</p>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email..."
                        defaultValue="mayankpadshala3012@email.com"
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password..."
                        defaultValue="password123"
                    />
                </div>
                {state?.message && <p>{state.message}</p>}
                <button type="submit" disabled={pending}>
                    {pending ? 'Logging in...' : 'Log in'}
                </button>
            </form>
        </div>
    );
}

export default LoginPage;
