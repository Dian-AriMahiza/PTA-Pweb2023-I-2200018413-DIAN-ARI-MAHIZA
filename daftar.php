<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $nama = $_POST['nama'];
  $email = $_POST['email'];
  $telepon = $_POST['telepon'];
  $mataPelajaran = $_POST['mata-pelajaran'];
  $pengalaman = $_POST['pengalaman'];

  // Simpan data ke file teks
  $file = 'daftar.txt'; // Nama file teks yang ingin Anda buat atau gunakan

  $data = "Nama: " . $nama . "\n";
  $data .= "Email: " . $email . "\n";
  $data .= "Nomor Telepon: " . $telepon . "\n";
  $data .= "Mata Pelajaran: " . $mataPelajaran . "\n";
  $data .= "Pengalaman Mengajar: " . $pengalaman . "\n";

  // Menulis data ke file
  if (file_put_contents($file, $data, FILE_APPEND | LOCK_EX) === false) {
    echo "Gagal menyimpan data ke file teks.";
  } else {
    echo "Data telah disimpan ke file teks.";
  }

  // Tampilkan pesan terkirim
  echo '<script>alert("Permintaan terkirim");</script>';
}
?>
