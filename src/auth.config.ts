import CredentialProvider from 'next-auth/providers/credentials';
import { CredentialsSignin, type NextAuthConfig } from 'next-auth';
import axios from 'axios';
import { baseUrl } from './action/baseUrl';

class InvalidLoginError extends CredentialsSignin {
  message = 'Invalid Information or password';
}
class UserNotFoundError extends CredentialsSignin {
  message = 'Your account does not exist';
}

export default {
  providers: [
    CredentialProvider({
      credentials: {
        email: { label: 'email' },
        password: { label: 'Password', type: 'password' },
      },

      async authorize(credentials) {
        const { email, password } = credentials;
        if (!email || !password) {
          throw new InvalidLoginError();
        }

        const { data } = await axios.post(`${baseUrl}/auth/login`, {
          email,
          password,
        });

        const user = data;

        console.log('user', user);

        if (user.status === 'error') {
          throw new UserNotFoundError();
        }

        if (user.status === 'error') {
          throw new InvalidLoginError();
        }

        console.log('user', user);

        return {
          name: user.userName,
          email: user.email,
        };
      },
    }),
  ],
} satisfies NextAuthConfig;
