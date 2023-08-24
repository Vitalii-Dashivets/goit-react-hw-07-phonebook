const BASE_URL = 'https://64e5f5f709e64530d17f5447.mockapi.io';

export const fetchGetContacts = endpoint => {
  try {
    fetch(`${BASE_URL}${endpoint}`, {
      method: 'GET',
      headers: { contacts: 'application/json' },
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      // handle error
    });
  } catch (e) {}

  //   .then(tasks => {
  //     // Do something with the list of tasks
  //   })
  //   .catch(error => {
  //     // handle error
  //   });
};

export const fetchAddContact = data => {
  fetch(`${BASE_URL}/contacts`, {
    method: 'POST',
    headers: { contacts: 'application/json' },
    body: JSON.stringify(data),
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    // handle error
  });
  //   .then(tasks => {
  //     // Do something with the list of tasks
  //   })
  //   .catch(error => {
  //     // handle error
  //   });
};

export const fetchDeleteContact = id => {
  fetch(`${BASE_URL}/contacts/${id}`, {
    method: 'DELETE',
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    // handle error
  });
  //   .then(tasks => {
  //     // Do something with the list of tasks
  //   })
  //   .catch(error => {
  //     // handle error
  //   });
};
