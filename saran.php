<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $telepon = $_POST['telepon'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];

  // Simpan data ke file teks
  $file = 'saran.txt'; // Nama file teks yang ingin Anda buat atau gunakan

  $data = "Nama: " . $name . "\n";
  $data .= "Email: " . $email . "\n";
  $data .= "Nomor Telepon: " . $telepon . "\n";
  $data .= "Kesan: " . $subject . "\n";
  $data .= "Pesan: " . $message . "\n\n";

  // Menulis data ke file
  file_put_contents($file, $data, FILE_APPEND | LOCK_EX);

  // Tampilkan pesan terkirim
  echo '<h3>Permintaan terkirim</h3>';
  echo '<p>Terima kasih, pesan Anda telah terkirim.</p>';
  echo '<p>Kami akan segera menghubungi Anda melalui email yang telah Anda berikan.</p>';
}
?>
