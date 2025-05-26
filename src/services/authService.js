
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/auth`;

const signUp = async (formData) => {
  try {
    const res = await fetch(`${BASE_URL}/sign-up`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    console.log('Sign-up response:', data)

    if (!res.ok || !data.token) {
      throw new Error(data.err || 'Sign-up failed');
    }

      localStorage.setItem('token', data.token);
      return JSON.parse(atob(data.token.split('.')[1]));

  } catch (err) {
    console.log(err);
    throw new Error(err.message || 'Unknown sign-up error');
  }
};

const signIn = async (formData) => {
        try {
          const res = await fetch(`${BASE_URL}/sign-in`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
          });

          if (!res.ok) {
            const errorData = await res.text();
            throw new Error(errorData || 'Sign-in failed')
          }

          const data = await res.json();

          if (data.token) {
            localStorage.setItem('token', data.token);
            return JSON.parse(atob(data.token.split('.')[1])).payload;
          }

          throw new Error('Invalid response from server');
        } catch (err) {
          console.log(err);
          throw new Error(err.message || 'Unknown sign-in error');
        }
      };



export {signUp, signIn}
