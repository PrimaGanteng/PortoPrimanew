const projects = [
  {
    title: 'Video Safety PT Petrokimia Gresik',
    client: 'PT Petrokimia Gresik',
    category: 'Video Safety',
    date: '2024',
    description: 'Video Safety perusahaan yang menyoroti komitmen terhadap keselamatan kerja dan inovasi di industri kimia.',
    link: 'https://drive.google.com/file/d/1ZcNDb2VXVAhoMvCpy25dFZQvAjEEQoC7/view?usp=drive_link',
    thumbnail: 'assets/ptpetrokimiagresik.jpg'
  },
  {
    title: 'Video Profile Desa Sukomulyo',
    client: 'PT Smelting Gresik',
    category: 'Video Profile',
    date: '2025',
    description: 'Video profil desa Sukomulyo yang menampilkan kehidupan masyarakat, budaya, dan potensi lokal.',
    link: 'https://drive.google.com/file/d/1REzsgbtDGfD1ZWzbb8CmsJ8pXXqiGtOu/view?usp=drive_link',
    thumbnail: 'assets/ptsmeltingsukomulyo.jpg'
  },
  {
    title: 'Profile SMK SEMEN GRESIK | Teknik Instalasi Tenaga Listrik',
    client: 'SMK SEMEN GRESIK',
    category: 'Video Profile',
    date: '2025',
    description: 'Video profil SMK SEMEN GRESIK yang menyoroti program studi Teknik Instalasi Tenaga Listrik, fasilitas, dan prestasi siswa.',
    link: 'https://drive.google.com/file/d/1hLTDP5vcvgRxKg946d6RGyTSvbHkn1KZ/view?usp=drivesdk',
    thumbnail: 'assets/smksemenprofilepraktek.jpg'
  },
  {
    title: 'SMP Muhammadiyah 1 Gresik Profile',
    client: 'SMP Muhammadiyah 1 Gresik',
    category: 'Video Profile',
    date: '2025',
    description: 'Video profil SMP Muhammadiyah 1 Gresik yang menampilkan kegiatan belajar mengajar, fasilitas sekolah, dan prestasi siswa.',
    link: 'https://drive.google.com/drive/folders/14YLgmOS354Afow372gI3qf3UGHzknZFf?usp=sharing',
    thumbnail: 'assets/smpmuhammadiyah1gresikprofile.jpg'
  },
  {
    title: 'SMK ALMAARIF HAUL',
    client: 'SMK ALMAARIF',
    category: 'Video Documentation',
    date: '2025',
    description: 'Video dokumentasi kegiatan haul di SMK ALMAARIF, menampilkan upacara dan partisipasi siswa serta masyarakat.',
    link: 'https://drive.google.com/drive/folders/157TwVI4xPV4JuuOegmTqXYy5WJrQ0rFc',
    thumbnail: 'assets/SMKALMAARIF.jpg'
  },
  {
    title: 'KKMI KEC. DUKUN',
    client: 'Madrasah Ibtidaiyah (MI) KEC. DUKUN',
    category: 'Video Documentation',
    date: '2025',
    description: 'Video dokumentasi kegiatan KKMI di KEC. DUKUN, menampilkan kegiatan penilaian dan pelatihan guru madrasah.',
    link: 'https://drive.google.com/file/d/1IX4llwGPkl-0OrGkhwNu0-b1m1gfdtJE/view',
    thumbnail: 'assets/KKMI.jpg'
  },
  {
    title: 'Carnaval Desa Tanjangawan',
    client: 'Desa Tanjangawan',
    category: 'Video Documentation',
    date: '2025',
    description: 'Video dokumentasi kegiatan karnaval di Desa Tanjangawan, menampilkan parade, pertunjukan seni, dan partisipasi warga desa.',
    link: 'https://drive.google.com/file/d/1CuWECO1De3z8fgRQe6vCF1X7eex8qNz5/view?usp=drive_link',
    thumbnail: 'assets/tanjangawan.jpg'
  },
  {
    title: 'Carnaval Desa Madumulyorejo',
    client: 'Desa Madumulyorejo',
    category: 'Video Documentation',
    date: '2025',
    description: 'Video dokumentasi kegiatan karnaval di Desa Madumulyorejo, menampilkan parade, pertunjukan seni, dan partisipasi warga desa.',
    link: 'https://drive.google.com/file/d/14RlSdpl9HWf3hOOoLzJAxW_NHM1X6L5n/view?usp=drive_link',
    thumbnail: 'assets/madumulyorejo.jpg'
  },
  {
    title: 'Family Gathering PT KIT & PT GKJA',
    client: 'PT KIT & PT GKJA',
    category: 'Video Documentation',
    date: '2025',
    description: 'Video dokumentasi kegiatan family gathering di PT KIT & PT GKJA, menampilkan kegiatan sosial dan interaksi antar karyawan.',
    link: 'https://drive.google.com/drive/folders/1I4jbO9Z1dnLRqHYkrSwtLHGNa462xJe-',
    thumbnail: 'assets/PTKITPTGKJA.jpg'
  },
  {
    title: 'Camp Pelatihan PT Freeport Indonesia',
    client: 'PT Freeport Indonesia',
    category: 'Video Documentation',
    date: '2026',
    description: 'Video dokumentasi kegiatan camp pelatihan di PT Freeport Indonesia, menampilkan sesi pelatihan, kegiatan outdoor, dan interaksi peserta.',
    link: 'https://drive.google.com/file/d/1zdVFLdfs0DqqwFVsiXWoV5Oop5OTlda6/view',
    thumbnail: 'assets/Freeport.jpg'
  },
  {
    title: 'Video Profile Desa Kedanyang',
    client: 'PT Smelting Gresik',
    category: 'Video Profile',
    date: '2026',
    description: 'Video profil desa Kedanyang yang menampilkan kehidupan masyarakat, budaya, dan potensi lokal.',
    link: 'https://drive.google.com/drive/folders/1Zu3iA0tn1nGCtg7y2Wq1LTE2MMAhaseb',
    thumbnail: 'assets/Kedanyang.jpg'
  },
  {
    title: 'Video Profile Desa Sukomulyo 2',
    client: 'PT Smelting Gresik',
    category: 'Video Profile',
    date: '2026',
    description: 'Video profil desa Sukomulyo yang menampilkan kehidupan masyarakat, budaya, dan potensi lokal.',
    link: 'https://drive.google.com/drive/folders/1iV7fjv4J5ySga01RFaNMwguatDG4gar7',
    thumbnail: 'assets/Sukomulyo2.jpg'
  }
  
];

const projectGrid = document.getElementById('project-grid');

if (projectGrid) {
  projectGrid.innerHTML = projects
    .map(
      (project) => `
        <article class="project-card" role="button" tabindex="0" data-link="${project.link}">
          <div class="project-card-media">
            <img src="${project.thumbnail}" alt="Thumbnail ${project.title}" />
          </div>
          <div class="project-card-body">
            <p class="project-category">${project.category}</p>
            <h4>${project.title}</h4>
            <p class="project-description">${project.description}</p>
            <div class="project-card-meta">
              <span class="project-date">${project.date}</span>
              <span class="meta">${project.client}</span>
            </div>
          </div>
          <div class="project-link">View Project</div>
        </article>
      `
    )
    .join('');

  projectGrid.querySelectorAll('.project-card').forEach((card) => {
    const openProject = () => window.open(card.dataset.link, '_blank', 'noopener,noreferrer');

    card.addEventListener('click', openProject);
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openProject();
      }
    });
  });
}

const revealItems = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.02, rootMargin: '0px 0px -120px 0px' }
);

revealItems.forEach((item) => revealObserver.observe(item));

window.addEventListener('load', () => {
  revealItems.forEach((item) => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      item.classList.add('is-visible');
      revealObserver.unobserve(item);
    }
  });
});

if (!window.IntersectionObserver) {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}
