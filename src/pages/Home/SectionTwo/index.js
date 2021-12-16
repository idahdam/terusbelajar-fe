import React from "react";
import { RowImageText } from "../../../components";
import homeOne from "../../../assets/images/home1.png";
import homeTwo from "../../../assets/images/home2.png";

const SectionTwo = () => {
  return (
    <div>
      <RowImageText
        image={homeOne}
        left={true}
        title="Dapatkan Cerita Mengenai Kehidupan Mahasiswa di Kampus Impianmu yang Penuh dengan Keseruan"
        description="Kehidupan mahasiswa selalu tidak bisa dibatasi oleh ruang ruang kelas dan tugas di atas kertas. Lebih dari itu, masa perkuliahan selalu bisa kamu isi dengan berbagai macam kegiatan organisasi, magang, perlombaan, hingga kegiatan lainnya yang penuh dengan keseruan. Yuk, cari tahu seluk beluk kehidupan mahasiswa di kampus impianmu bersama program Eksplorasi Kampus Terusbelajar!"
      />
      <RowImageText
        image={homeTwo}
        left={false}
        title="Siapkan Dirimu Untuk Berkuliah di Luar Negeri dengan Penuh Kemudahan"
        description="Di Terusbelajar, kamu juga bisa mengikuti rangkaian lokakarya pertama di Indonesia yang bisa menghubungkan kamu dengan kehidupan kuliah di luar negeri dalam waktu yang singkat. Mulai dari pemilihan beasiswa dan universitas, pencarian tempat tinggal dan akomodasi, hingga pengenalan lingkungan dan kehidupan mahasiswa di luar negeri, semuanya bisa kamu dapatkan di program Study Abroad Terusbelajar!"
      />
      <RowImageText
        image={homeOne}
        left={true}
        title="Menguji Kesiapan Dirimu Mengikuti Ujian, Kini Bisa Kamu Lakukan Tanpa Mengeluarkan Uang"
        description="Untuk memudahkanmu mengejar mimpi untuk bisa masuk ke kampus impian, Terusbelajar juga menyediakan paket Try Out gratis yang bisa kamu ambil setiap minggunya. Yuk, cari tahu paket paket Try Out yang bisa membantumu menyiapkan diri mengikuti ujian masuk universitas bersama Terusbelajar!"
      />
    </div>
  );
};

export default SectionTwo;
