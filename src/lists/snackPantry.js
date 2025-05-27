const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/snacks`;

const index = async () => {
  try {
    const res = await fetch(BASE_URL);
    return res.json();
  } catch (err) {
    console.log(err);
  }
};
const create = async (formData) => {
  const token = localStorage.getItem('token') 
  try {
      const res = await fetch(BASE_URL, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(formData),
          });
          return res.json();
  } catch (err) {
    console.log(err);
  }
};

const emojis ={
  chips: "🥠",
  candy: "🍬",
  chocolate: "🍫",
  pastry: "🍩",
};

console.log(emojis)

const update = async (formData, snackId) => {
  try {
    const token = localStorage.getItem('token');

    const res = await fetch(`${BASE_URL}/${snackId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(formData),
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

const deleteSnack = async (snackId) => {
  try {
    const res = await fetch(`${BASE_URL}/${snackId}`, {
      method: 'DELETE',
      headers: {
        Authorization:`Bearer ${localStorage.getItem('token')}`,
      },
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

  export {
    index, create, update, deleteSnack
  };
