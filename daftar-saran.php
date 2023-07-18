<?php
$saran = array(
  array(
    'nama' => 'John Doe',
    'email' => 'johndoe@example.com',
    'kesan' => 'Pelayanan sangat baik',
    'pesan' => 'Terima kasih atas pelayanan yang diberikan. Saya puas dengan layanan yang diberikan.'
  ),
  array(
    'nama' => 'Jane Smith',
    'email' => 'janesmith@example.com',
    'kesan' => 'Proses cepat',
    'pesan' => 'Proses pelayanan sangat cepat. Sangat memuaskan.'
  ),
  array(
    'nama' => 'Michael Johnson',
    'email' => 'michaeljohnson@example.com',
    'kesan' => 'Staff yang ramah',
    'pesan' => 'Staff sangat ramah dan membantu. Terima kasih atas bantuan yang diberikan.'
  )
);

// Simpan daftar saran ke dalam file teks
$file = 'daftar_saran.txt';
$data = '';

foreach ($saran as $key => $value) {
  $data .= "Saran " . ($key + 1) . ":\n";
  $data .= "Nama: " . $value['nama'] . "\n";
  $data .= "Email: " . $value['email'] . "\n";
  $data .= "Kesan: " . $value['kesan'] . "\n";
  $data .= "Pesan: " . $value['pesan'] . "\n\n";
}

file_put_contents($file, $data);

echo "Daftar saran telah disimpan ke dalam file teks.";
?>
