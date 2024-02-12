// Bagian if, else, nested if
function perbandingan() {
    let x = parseFloat(document.getElementById("ifElseX").value);
    let y = parseFloat(document.getElementById("ifElseY").value);
    let result = "";
  
    if (!isNaN(x) && !isNaN(y)) {
        if (x > y) {
            result = "x lebih besar dari y.";
        } else if (x < y) {
            result = "x lebih kecil dari y.";
        } else {
            result = "x sama dengan y.";
        }
    } else {
        result = "Masukkan nilai yang valid untuk X dan Y.";
    }
  
    document.getElementById("ifElseResult").textContent = result;
  }
  
 // Bagian switch case
function ceknilai() {
    let nilai = parseFloat(document.getElementById("switchInput").value);
    let pesan = "";

    if (!isNaN(nilai) && nilai >= 0 && nilai <= 100) {
        switch (true) {
            case nilai >= 90 && nilai <= 100:
                pesan = "Nilai Anda adalah A.";
                break;
            case nilai >= 80 && nilai < 90:
                pesan = "Nilai Anda adalah B.";
                break;
            case nilai >= 60 && nilai < 80:
                pesan = "Nilai Acaa adalah C Udah gausah Minta yang aneh".";
                break;
            case nilai >= 40 && nilai < 60:
                pesan = "Nilai Anda adalah D.";
                break;
            default:
                pesan = "Nilai Anda adalah E (Error Segera Perbaiki!!!).";
        }
    } else {
        pesan = "Masukkan nilai antara 0 dan 100.";
    }

    document.getElementById("switchResult").textContent = pesan;
}

 // Bagian for statement
function bintang() {
    let limit = parseInt(document.getElementById("forLimit").value);
    let hasilFor = "Bintang: ";

    if (!isNaN(limit)) {
        for (let i = 0; i < limit; i++) {
            hasilFor += "* ";
        }
    } else {
        hasilFor = "Masukkan jumlah bintang yang valid.";
    }

    document.getElementById("forResult").textContent = hasilFor;
}

  // Bagian while loop
  function kecilbesar() {
    let limit = parseInt(document.getElementById("whileLimit").value);
    let hasilWhile = "Looping dengan while: ";
    let j = 0;
  
    if (!isNaN(limit)) {
        while (j < limit) {
            hasilWhile += j + " ";
            j++;
        }
    } else {
        hasilWhile = "Masukkan batas loop yang valid.";
    }
  
    document.getElementById("whileResult").textContent = hasilWhile;
  }
  
  // Bagian do while loop
  function besarkecil() {
    let limit = parseInt(document.getElementById("doWhileLimit").value);
    let hasilDoWhile = "Looping dengan do while: ";
    if (!isNaN(limit)) {
        let k = limit; // Menginisialisasi k dengan nilai limit
        do {
            hasilDoWhile += k + " ";
            k--;
        } while (k >= 0);
    } else {
        hasilDoWhile = "Masukkan batas loop yang valid.";
    }
    document.getElementById("doWhileResult").textContent = hasilDoWhile;
}

  
  // Bagian function
  function tambah() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let hasilTambah = "";
  
    if (!isNaN(num1) && !isNaN(num2)) {
        hasilTambah = num1 + num2;
    } else {
        hasilTambah = "Masukkan angka yang valid untuk kedua input.";
    }
  
    document.getElementById("functionResult").textContent = `Hasil penjumlahan: ${hasilTambah}`;
  }
  
