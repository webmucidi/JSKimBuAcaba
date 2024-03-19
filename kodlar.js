//veri havuzu oluştur
const ogrenciler = [
    { ad: "Enes", ipucu: "Hiperaktif" },
    { ad: "Bilal", ipucu: "Kumarbaz"  },
    { ad: "Umut", ipucu: "Çalgıcı"  },
    { ad: "Tuğba", ipucu: "Sincap"  },
    { ad: "Erayinho", ipucu: "Okulu bıraktı"  }
];
//nesneleri değişkene al
const kapsayici = document.getElementById("container");
const ipucuAlani = document.getElementById("hint");
const tahminGirisi= document.getElementById("guessInput");
const tahminButonu = document.getElementById("guessButton");
const kalanHakAlani = document.getElementById("attempts");
const sonucAlani = document.getElementById("result");

//sayaçlar ve rastgele seçilen kelimeler için değiken oluştur
let sayac=0;
let rastgeleOgrenci={};
let kart=null;
let harfler=[];

//Oyunu yükleme fonksiyonunu çağır
oyunuBaslat();


//Oyun yükleme fonksiyonu tanımla
function oyunuBaslat(){
    rastgeleOgrenci=ogrenciler[Math.floor(Math.random() * ogrenciler.length)];
    
    //ipucuAlani.textContent=`Acaba kim bu?: ${rastgeleOgrenci.ipucu}`;
    ipucuAlani.innerHTML="Acaba kim bu?"+rastgeleOgrenci.ipucu;
    kartlariOlustur();
    //harfleriDagit();
    sonucAlani.textContent="";
}


//Kartları oluşturma fonksiyonunu tanımla
function kartlariOlustur(){
    sayac=0;
    kapsayici.innerHTML="";
    
    //Önce kelimeyi parçala ve harfleri diziye at
    harfler=rastgeleOgrenci.ad.toUpperCase().split("");
    console.log(harfler);


    harfler.forEach((harf,index)=>{
        kart=document.createElement("div");
        kart.innerHTML="?";
        kart.className="card";
        kart.dataset.value=harf;
        kart.dataset.index=index;
        kapsayici.appendChild(kart);
        kart.addEventListener("click",kartAc);
    })
}



//Kartları açmak için fonksiyonu tanımla
function kartAc(){
    sayac++;
    let kalanHak=3-sayac;
    if(sayac<=3){
        this.innerHTML=harfler[this.dataset.index];
        this.classList.add("revealed");
        kalanHakAlani.innerHTML=(3-sayac)+" tahmin hakkınız kaldı!";
    }
    if (sayac==3){
        tahminButonu.disabled=false;
        kalanHakAlani.innerHTML="Tahminizi yazın!";
        
    }
    

}

//Tahmin kontrol ve sonuç gösterme fonksiyonu tanımla
function sonucKontrol(){

}