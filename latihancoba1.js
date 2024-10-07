class Kapal {
    constructor(nama, jenis, kapasitas, panjang, lebar) {
      this.nama = nama;
      this.jenis = jenis;
      this.kapasitas = kapasitas;
      this.panjang = panjang;
      this.lebar = lebar;
    }
  
    infoKapal() {
      return `Kapal ini bernama ${this.nama}, berjenis ${this.jenis}, dengan kapasitas ${this.kapasitas} orang. Memiliki dimensi panjang ${this.panjang} meter dan lebar ${this.lebar} meter.`;
    }
  
    // Polymorphism method
    deskripsiTambahan() {
      return "Tidak ada informasi tambahan.";
    }
  
    infoLengkap() {
      return `${this.infoKapal()} ${this.deskripsiTambahan()}`;
    }
  }
  
  // Kelas untuk informasi penumpang VIP
  class PenumpangVIP extends Kapal {
    constructor(nama, jenis, kapasitas, panjang, lebar, namaVIP, layananEksklusif) {
      super(nama, jenis, kapasitas, panjang, lebar);
      this.namaVIP = namaVIP;
      this.layananEksklusif = layananEksklusif;
    }
  
    deskripsiTambahan() {
      return `Penumpang VIP: ${this.namaVIP}. Layanan eksklusif: ${this.layananEksklusif}.`;
    }
  }
  
  // Kelas untuk informasi kargo kapal
  class KargoKapal extends Kapal {
    constructor(nama, jenis, kapasitas, panjang, lebar, muatan, beratMuatan) {
      super(nama, jenis, kapasitas, panjang, lebar);
      this.muatan = muatan;
      this.beratMuatan = beratMuatan;
    }
  
    deskripsiTambahan() {
      return `Kapal ini membawa muatan berupa ${this.muatan} dengan berat total ${this.beratMuatan} ton.`;
    }
  }
  
  // Kelas untuk fasilitas kapal
  class FasilitasKapal extends Kapal {
    constructor(nama, jenis, kapasitas, panjang, lebar, fasilitas) {
      super(nama, jenis, kapasitas, panjang, lebar);
      this.fasilitas = fasilitas;
    }
  
    deskripsiTambahan() {
      return `Fasilitas di kapal: ${this.fasilitas.join(', ')}.`;
    }
  }
  
  // Kelas untuk kondisi cuaca saat keberangkatan
  class CuacaKeberangkatan extends Kapal {
    constructor(nama, jenis, kapasitas, panjang, lebar, cuaca, suhu) {
      super(nama, jenis, kapasitas, panjang, lebar);
      this.cuaca = cuaca;
      this.suhu = suhu;
    }
  
    deskripsiTambahan() {
      return `Kondisi cuaca saat keberangkatan: ${this.cuaca}, dengan suhu sekitar ${this.suhu}°C.`;
    }
  }
  
  // Contoh implementasi
  
  let penumpangVIP = new PenumpangVIP(
    "Alyzhuwsky", // nama kapal
    "Ferry",      // jenis kapal
    500,          // kapasitas
    200,          // panjang kapal
    100,          // lebar kapal
    "Mr. Luxury", // nama VIP
    "Makan gratis, kabin privat" // layanan eksklusif
  );
  
  let kargoKapal = new KargoKapal(
    "Alyzhuwsky", // nama kapal
    "Ferry",      // jenis kapal
    500,          // kapasitas
    200,          // panjang kapal
    100,          // lebar kapal
    "Mobil dan barang elektronik", // muatan
    200 // berat muatan dalam ton
  );
  
  let fasilitasKapal = new FasilitasKapal(
    "Alyzhuwsky", // nama kapal
    "Ferry",      // jenis kapal
    500,          // kapasitas
    200,          // panjang kapal
    100,          // lebar kapal
    ["Restoran", "Kolam Renang", "Bioskop"] // fasilitas
  );
  
  let cuacaKeberangkatan = new CuacaKeberangkatan(
    "Alyzhuwsky", // nama kapal
    "Ferry",      // jenis kapal
    500,          // kapasitas
    200,          // panjang kapal
    100,          // lebar kapal
    "Cerah",      // cuaca
    28            // suhu
  );
  
  // Output info lengkap dari objek-objek tersebut
  console.log(penumpangVIP.infoLengkap());
  console.log(kargoKapal.infoLengkap());
  console.log(fasilitasKapal.infoLengkap());
  console.log(cuacaKeberangkatan.infoLengkap());

  
  // Kelas induk dan kelas turunan sebelumnya (tetap sama)

// Subclass dari PenumpangVIP
class PenumpangVVIP extends PenumpangVIP {
    constructor(nama, jenis, kapasitas, panjang, lebar, namaVIP, layananEksklusif, asistenPribadi) {
      super(nama, jenis, kapasitas, panjang, lebar, namaVIP, layananEksklusif);
      this.asistenPribadi = asistenPribadi;
    }
  
    deskripsiTambahan() {
      return `Penumpang VVIP: ${this.namaVIP}. Layanan eksklusif: ${this.layananEksklusif}, dilengkapi dengan asisten pribadi: ${this.asistenPribadi}.`;
    }
  }
  
  // Subclass dari KargoKapal
  class KargoBerbahaya extends KargoKapal {
    constructor(nama, jenis, kapasitas, panjang, lebar, muatan, beratMuatan, bahanKimiaBerbahaya) {
      super(nama, jenis, kapasitas, panjang, lebar, muatan, beratMuatan);
      this.bahanKimiaBerbahaya = bahanKimiaBerbahaya;
    }
  
    deskripsiTambahan() {
      return `Kapal ini membawa muatan berupa ${this.muatan} dengan berat total ${this.beratMuatan} ton. Peringatan: Kapal ini juga mengangkut bahan kimia berbahaya: ${this.bahanKimiaBerbahaya}.`;
    }
  }
  
  // Subclass dari FasilitasKapal
  class FasilitasPremium extends FasilitasKapal {
    constructor(nama, jenis, kapasitas, panjang, lebar, fasilitas, aksesVIP) {
      super(nama, jenis, kapasitas, panjang, lebar, fasilitas);
      this.aksesVIP = aksesVIP;
    }
  
    deskripsiTambahan() {
      return `Fasilitas di kapal: ${this.fasilitas.join(', ')}. Fasilitas premium dengan akses VIP: ${this.aksesVIP}.`;
    }
  }
  
  // Contoh implementasi subclass
  
  let penumpangVVIP = new PenumpangVVIP(
    "Alyzhuwsky", // nama kapal
    "Ferry",      // jenis kapal
    500,          // kapasitas
    200,          // panjang kapal
    100,          // lebar kapal
    "Mrs. SuperLuxury", // nama VVIP
    "Suite Pribadi, Menu Kelas Dunia", // layanan eksklusif
    "John Smith" // asisten pribadi
  );
  
  let kargoBerbahaya = new KargoBerbahaya(
    "Alyzhuwsky",              // nama kapal
    "Ferry",                   // jenis kapal
    500,                       // kapasitas
    200,                       // panjang kapal
    100,                       // lebar kapal
    "Gas Alam dan Elektronik",  // muatan
    300,                       // berat muatan dalam ton
    "Amoniak"                  // bahan kimia berbahaya
  );
  
  let fasilitasPremium = new FasilitasPremium(
    "Alyzhuwsky", // nama kapal
    "Ferry",      // jenis kapal
    500,          // kapasitas
    200,          // panjang kapal
    100,          // lebar kapal
    ["Restoran Bintang Lima", "Spa", "Kolam Renang Pribadi"], // fasilitas
    "Akses Lounge VIP dan Suite Eksklusif" // akses VIP
  );
  
  // Output info lengkap dari subclass
  console.log(penumpangVVIP.infoLengkap());
  console.log(kargoBerbahaya.infoLengkap());
  console.log(fasilitasPremium.infoLengkap());
  