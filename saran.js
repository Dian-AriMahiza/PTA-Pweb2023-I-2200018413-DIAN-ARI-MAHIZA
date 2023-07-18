window.addEventListener("DOMContentLoaded", function() {
    const saranForm = document.getElementById('saran-form');
    if (saranForm) {
      saranForm.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm()) {
          submitForm();
        }
      });
    }
  });
  
  function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const telepon = document.getElementById('telepon').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
  
    if (name.trim() === '') {
      alert('Nama harus diisi');
      return false;
    }
  
    if (email.trim() === '') {
      alert('Email harus diisi');
      return false;
    }
  
    if (telepon.trim() === '') {
      alert('Nomor Telepon harus diisi');
      return false;
    }
  
    if (subject.trim() === '') {
      alert('Kesan harus diisi');
      return false;
    }
  
    if (message.trim() === '') {
      alert('Pesan harus diisi');
      return false;
    }
  
    return true;
  }
  
  function submitForm() {
    const saranForm = document.getElementById('saran-form');
    saranForm.reset();
    alert('Permintaan Dikirim');
  }
  