# Proses CI-CD

Proses CI/CD (Continuous Integration/Continuous Deployment) yang dalam workflow ini dimulai ketika terdapat push atau pull request ke branch main dari repository GitHub. Pertama, workflow ini menjalankan beberapa job pada runner ubuntu-latest. Tahapan awal mencakup checkout kode dari repository menggunakan actions/checkout@v3, kemudian mengatur Node.js versi 16 menggunakan actions/setup-node@v3. Setelah itu, dependensi proyek diinstal dengan menjalankan perintah npm install.

Setelah dependensi terinstal, proses build proyek dijalankan dengan perintah npm run build, yang menggunakan Vite untuk membangun proyek React. Hasil build kemudian disiapkan untuk deployment dengan menyalin output dari direktori dist ke direktori out.

Langkah terakhir adalah mendistribusikan konten yang telah dibangun ke GitHub Pages menggunakan peaceiris/actions-gh-pages@v3. Workflow ini mengatur token otentikasi (GITHUB_TOKEN) yang memiliki izin penulisan untuk memastikan proses deployment berhasil. Setelah semua langkah selesai, konten terbaru dari branch main akan secara otomatis tersedia di GitHub Pages, memberikan proses deployment yang mulus dan otomatis dari kode sumber hingga ke aplikasi yang siap digunakan pengguna.
