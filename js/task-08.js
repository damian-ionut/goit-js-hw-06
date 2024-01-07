const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const email = this.elements.email.value.trim();
  const password = this.elements.password.value.trim();

  if (email === '' || password === '') {
    alert('Toate câmpurile trebuie completate!');
  } else {
    const formData = {
      email: email,
      password: password
    };

    console.log('Datele introduse:', formData);
    this.reset(); 
  }
});