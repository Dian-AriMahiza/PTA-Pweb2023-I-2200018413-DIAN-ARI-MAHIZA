window.addEventListener("DOMContentLoaded", function() {
  alert("Selamat datang di halaman Biodata Diri Ku!");

  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth"
      });
    });
  });

  const clock = document.createElement("div");
  clock.classList.add("clock");
  clock.style.position = "fixed";
  clock.style.bottom = "20px";
  clock.style.right = "20px";
  clock.style.padding = "10px";
  clock.style.background = "rgba(0, 0, 0, 0.5)";
  clock.style.color = "#fff";
  clock.style.fontFamily = "Arial, sans-serif";
  clock.style.fontSize = "16px";
  clock.style.borderRadius = "5px";
  clock.style.zIndex = "9999";
  document.body.appendChild(clock);

  function updateClock() {
    const currentDate = new Date();
    const dateOptions = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    const timeOptions = { hour: "numeric", minute: "numeric", second: "numeric" };
    const dateString = currentDate.toLocaleDateString("en-US", dateOptions);
    const timeString = currentDate.toLocaleTimeString("en-US", timeOptions);
    clock.textContent = dateString + " | " + timeString;
  }

  updateClock();
  setInterval(updateClock, 1000);

  clock.addEventListener("mouseover", function() {
    this.style.opacity = 1;
  });

  clock.addEventListener("mouseout", function() {
    this.style.opacity = 0.5;
  });

  // Menambahkan scroll smooth untuk navigasi profil
  var profileLink = document.querySelector('nav a[href="#profile"]');
  var profileSection = document.getElementById('profile');

  profileLink.addEventListener('click', function(event) {
    event.preventDefault();
    profileSection.scrollIntoView({ behavior: 'smooth' });
  });

  // Penanganan tombol "Tutor Class"
  var tutorClassBtn = document.getElementById('tutorClassBtn');
  var tutorClassSection = document.getElementById('tutorClassSection');

  if (tutorClassBtn && tutorClassSection) {
    tutorClassBtn.addEventListener('click', function(event) {
      event.preventDefault();
      // Mengubah konten main ke halaman form pendaftaran tutor class
      var mainContent = document.querySelector('main');
      mainContent.innerHTML = `
        <div class="full-width-image">
          <img src="imgs/moon.png" alt="saya">
          <div class="image-caption">
            <h3>Hi! I am</h3>
            <p><span class="highlight">Dian Ari Mahiza</span></p>
            <span class="highlights"> Informatic Student | Dreamer</span>
          </div>
        </div>
        
        <header>
          <h1>Pendaftaran Tutor Class</h1>
          <nav>
            <ul>
              <li><a href="index.html">Profil</a></li>
            </ul>
          </nav>
        </header>

        <main>
          <section id="tutorClassSection">
            <h2>Form Pendaftaran Tutor Class</h2>
            <form>
              <div>
                <label for="nama">Nama:</label>
                <input type="text" id="nama" name="nama" required>
              </div>
              <div>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
              </div>
              <div>
                <label for="matpel">Mata Pelajaran:</label>
                <input type="text" id="matpel" name="matpel" required>
              </div>
              <div>
                <label for="kelas">Kelas:</label>
                <input type="text" id="kelas" name="kelas" required>
              </div>
              <div>
                <label for="pesan">Pesan:</label>
                <textarea id="pesan" name="pesan" required></textarea>
              </div>
              <div>
                <button type="submit">Daftar</button>
              </div>
            </form>
          </section>
        </main>

        <footer>
          <p>&copy; 2023 - DIAN ARI MAHIZA</p>
        </footer>
      `;
    });
  }
});
