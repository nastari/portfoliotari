const popup = document.getElementById("popup");
const content = document.getElementById("popup-content");

function openWindow(folder){

    popup.style.display = "flex";

document.getElementById("windowPath").innerText =
`C:\\Bhetari\\Portfolio\\${folder}`;

    if(folder === "Profile"){

    content.innerHTML = `

    <div class="profile-container">

        <img src="assets/bhetari.jpeg"
        class="profile-img"
        onclick="showCertificate('assets/bhetari.jpeg')">

        <div class="profile-text">

            <h3>Hello! I'm</h3>

            <h1>Bhetari Aura Voula</h1>

            <p class="id-student">
                NIM: 26050974080
            </p>

            <p>
                Saya mahasiswa baru Program Studi Pendidikan Teknologi Informasi
                yang tertarik pada desain aplikasi, pengembangan web, dan teknologi AI.
                Ketertarikan saya pada dunia teknologi tumbuh sejak SMK, saat saya 
                mengambil jurusan Teknik Komputer dan Jaringan.
            </p>

            <div class="profile-info">

                <p>📍 Nganjuk, Jawa Timur</p>

                <p>🎨 Hobi: Membaca, Menonton Film dan Drama</p>

            </div>

            <div class="education">

                <p>🎓 Universitas Negeri Surabaya</p>
                <span>Agustus 2026 - Sekarang</span>

                <p>🏫 SMK Negeri 1 Bagor Nganjuk</p>
                <span>Juli 2022 - Mei 2025</span>

            </div>

        </div>

    </div>

    `;
}

    if(folder === "Achievements"){

    content.innerHTML = `

    <div class="achievement-container">

        <div class="certificate-card">

            <img src="assets/paskab 2023.jpg"
            alt="Sertifikat 1"
            class="certificate-img"
            onclick="showCertificate('assets/paskab 2023.jpg')">

            <h3>PASKIBRA KAB. NGANJUK</h3>

            <p>
                Diselenggarakan oleh Pemerintah Kab. Nganjuk
                pada tahun 2023.
            </p>

        </div>

        <div class="certificate-card">

            <img src="assets/workshop canva.jpeg"
            alt="Sertifikat 2"
            class="certificate-img"
            onclick="showCertificate('assets/workshop canva.jpeg')">

            <h3>Peserta Workshop Canva</h3>

            <p>
                Diselenggarakan oleh FORMADIKSI UNESA
                pada 18 Oktober 2026.
            </p>

        </div>

    </div>

    `;
}

    if(folder === "Contact"){

    content.innerHTML = `

    <h2 class="skill-title soft-skill">Contact Me</h2>

    <div class="contact-group">

        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=26050974080@mhs.unesa.ac.id"
           target="_blank"
           class="tool">

            <img src="assets/icon email.jpeg">

            <p>Email</p>

        </a>

        <a href="https://www.linkedin.com/in/bhetari-aura-voula-a47baa443"
           target="_blank"
           class="tool">

            <img src="assets/icon linkedin.jpeg">

            <p>LinkedIn</p>

        </a>

        <a href="https://github.com/nastari"
           target="_blank"
           class="tool">

            <img src="assets/icon github.jpeg">

            <p>GitHub</p>

        </a>

        <a href="assets/cv tari.pdf"
           target="_blank"
           class="tool">

            <img src="assets/cv me.jpeg">

            <p>Curriculum Vitae</p>

        </a>

    </div>

    `;
}

    if(folder === "What Can I Do"){

        content.innerHTML = `

        <h2 class="skill-title hard-title">Hard Skills</h2>

        <div class="hard-skills">

    <div class="tools-grid">

        <div class="tool">
            <img src="assets/word.jpeg">
            <p>Word</p>
        </div>

        <div class="tool">
            <img src="assets/vscode.jpeg">
            <p>VS Code</p>
        </div>

        <div class="tool">
            <img src="assets/sql.jpeg">
            <p>MySQL</p>
        </div>

        <div class="tool">
            <img src="assets/canva.jpeg">
            <p>Canva</p>
        </div>

        <div class="tool">
            <img src="assets/ppt.jpeg">
            <p>Power Point</p>
        </div>

    </div>

    </div>

        <h2 class="skill-title soft-title"> Soft Skills<h2>

        <div class="soft-skills">

    <div class="tools-grid">

        <div class="tool">
            <img src="assets/teamwork.jpeg">
            <p>Teamwork</p>
        </div>

        <div class="tool">
            <img src="assets/publicspeaking.jpeg">
            <p>Public Speaking</p>
        </div>

        <div class="tool">
            <img src="assets/problemsolving.jpeg">
            <p>Problem Solving</p>
        </div>

        <div class="tool">
            <img src="assets/leadership.jpeg">
            <p>Leadership</p>
        </div>

    </div>

        `;
    }
}

function closeWindow(){
    popup.style.display = "none";
}

function showCertificate(imageSrc){

    document.getElementById("certificatePreview").style.display = "flex";

    document.getElementById("certificatePreviewImg").src = imageSrc;
}

function closeCertificate(){

    document.getElementById("certificatePreview").style.display = "none";
}