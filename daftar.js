window.addEventListener("DOMContentLoaded", function() {
    const tutorForm = document.getElementById('tutor-form');
    if (tutorForm) {
      tutorForm.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm()) {
          submitForm();
        }
      });
    }
  });
  
  function validateForm() {
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const telepon = document.getElementById('telepon').value;
    const mataPelajaran = document.getElementById('mata-pelajaran').value;
    const pengalaman = document.getElementById('pengalaman').value;
  
    if (nama.trim() === '') {
      alert('Nama Lengkap harus diisi');
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
  
    if (mataPelajaran.trim() === '') {
      alert('Mata Pelajaran harus diisi');
      return false;
    }
  
    if (pengalaman.trim() === '') {
      alert('Pengalaman Mengajar harus diisi');
      return false;
    }
  
    return true;
  }
  
  function submitForm() {
    const tutorForm = document.getElementById('tutor-form');
    tutorForm.reset();
    alert('Permintaan terkirim');
  }
  