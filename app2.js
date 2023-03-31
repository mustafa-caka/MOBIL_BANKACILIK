
// localStorage.setItem("sifre", 1234) //* Şifre Oluşturduk ve Local'a Gönderdik.

// localStorage.setItem("bakiye", 1000)//* Bakiye Oluşturduk ve Local'a Gönderdik.
localStorage.setItem("kredi", 100000)

// //!Bakiye Çektim
let bakiye = localStorage.getItem("bakiye"); //* Local'den Veriyi çektik
document.querySelector(".bakiye").innerHTML = (`Toplam Bakiyeniz ${bakiye} ₺ dir.`);



function girisYap() {
    let sifre = localStorage.getItem("sifre"); //* Local'den Veriyi çektik
    let girilenSifre = document.querySelector(".sifre").value;

    if (sifre == girilenSifre) {
        document.querySelector(".loading").style.display = "inline-block";
        document.querySelector(".yonlendirme").innerHTML = "Sayfaya yönlendirilyorsunuz. Bekleyiniz..."

        setTimeout(() => {

            window.location.href = "anasayfa.html"
        }, 2000)



    }
    else {
        document.querySelector(".alert").style.display = "block";

    }
}

function islemYap() {
    let islemler = document.querySelector(".islemler").value;
    let girilenMiktar = Number(document.querySelector(".girilenMiktar").value);




    if (islemler == "Para Çek" && girilenMiktar > 0 && girilenMiktar <= bakiye) {
        bakiye = Number(bakiye);
        bakiye = bakiye - girilenMiktar;
        document.querySelector(".bakiye").innerHTML = `Kalan Bakiyeniz:${bakiye} ₺'dir.`;
        localStorage.setItem("bakiye", bakiye);//* Güncel Bakiyeyi veri tabanına yüklemek için yapıldı.

    }
    else if (islemler = "Para Yatır" && girilenMiktar > 0) {
        bakiye = Number(bakiye);
        girilenMiktar = Number(document.querySelector(".girilenMiktar").value);
        bakiye = bakiye + girilenMiktar;
        document.querySelector(".bakiye").innerHTML = `Toplam Bakiyeniz: ${bakiye} ₺'dir.`;
        localStorage.setItem("bakiye", bakiye);//* Güncel Bakiyeyi veri tabanına yüklemek için yapıldı.

    }


    else {
        document.querySelector(".alert").style.display = "block";
    }




}


function krediHesaplama() {



    let cekilecekTutar;
    let vadeSayisi;
    let aylikTaksit;
    let odenecekTutar;
    let kalankredi;

    cekilecekTutar = document.getElementById("cekilecekTutar").value;
    let vadeler = document.getElementById("vadeler");
    vadeSayisi = vadeler.options[vadeler.selectedIndex].value;
    if (vadeSayisi == 12) {
        odenecekTutar = cekilecekTutar * 1.1;
    }
    else if (vadeSayisi == 24) {
        odenecekTutar = cekilecekTutar * 1.2;
    }
    else if (vadeSayisi == 36) {
        odenecekTutar = cekilecekTutar * 1.3;
    }
    else if (vadeSayisi == 48) {
        odenecekTutar = cekilecekTutar * 1.4;

    }
    else {
        alert("Hatali")
    }


    let topKredi = 100000;


    let kredi = localStorage.getItem("kredi"); //* Local'den Veriyi çektim
    kalankredi = kredi - cekilecekTutar;




    // kalankredi = document.getElementById("kredi").value;


    if (cekilecekTutar <= kredi && cekilecekTutar >= 0) {
        cekilecekTutar = document.getElementById("cekilecekTutar").value;

        document.querySelector("#kredi").innerHTML = "Toplam Kredi Hakkınız:" + topKredi.toFixed(2) + " ₺" + "<br>" + "<hr>" +
            "Kalan Kredi Hakkınız:" + kalankredi.toFixed(2) + " ₺";
        //AYLIK TAKSİT HESABI
        aylikTaksit = odenecekTutar / vadeSayisi;
        document.querySelector("#sonucKredi").innerHTML = "Geri Ödeme Toplami:" + odenecekTutar.toFixed(2) + " ₺'dir" + "<br>" + "<hr>" +
            "Aylik Ödeme Tutari:" + aylikTaksit.toFixed(2) + " ₺'dir"; //toFixed virgülden sonra kaç bsamak gözükeceini belirtmeliyiz.


        kredi = localStorage.getItem("kredi"); //* Local'den Veriyi çektim
        localStorage.setItem("kredi", kalankredi);

        alert("Kredi Çekme İşlemi Başarılıdır.")

    }
    else if (cekilecekTutar > kredi && cekilecekTutar > kalankredi) {


        alert(" KREDİ KALMADI")

    }
    else {
        alert("Hatalı İşlem Yaptınız!")
    }


}











