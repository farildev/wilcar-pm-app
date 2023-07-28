import React from 'react';
import Niva from "../assets/img/Niva.jpeg";
import photo from "../assets/img/niva-2.webp";
function Home() {
  return (
    <div className='container'>
        <div className="col-12 mt-2">
            <h2 className='text-white'>
            Niva və onun tarixi haqqında
            </h2>
        </div>
        <div className="col-12 d-flex justify-content-between mt-5 rounded" style={{height:"400px"}}>
            <img className='rounded' style={{width:"48%", height:"100%" , objectFit:"cover"}} src={Niva} alt="Niva" />
            <img className='rounded' style={{width:"48%", height:"100%" , objectFit:"cover"}} src={photo} alt="Niva" />
        </div>
        <div className="col-12">
            <div className="row">
            <div className="col-12 text-white mt-4">
            Niva (VAZ-2121 və LADA 4x4 adları ilə də məşhur) — Sovet və Rus avtomobil istehsalçı firması AvtoVAZ tərəfindən istehsal olunan kələ-kötür ərazi üçün nəzərdə tutulmuş nəqliyyat vasitəsi. Xüsusilə keçmiş SSRİ ölkələrində hal-hazırda xüsusi modifikasiyalar altında məşhurlaşmışdır.
             Kanadada (1998-ci ildən sonra satışı ləğv edildi), Cənubi Amerikada, İslandiyada da məşhurlaşmış və torpaq şərtlərinin çətin olduğu yerdə istifadəsi əlverişli olmuş, geniş istifadə olunmuşdur. Avstraliya kimi bölgələrdə isə isti iqlim şəraiti üçün kondisionerinin uyğun olmaması səbəbindən populyarlığı məhdud olaraq qaldı. 
             Avtomobil modeli İslandiyada Lada Sport və Avstriyada Lada Taiga adı ilə tanınmışdır. Dünyada off-road nəqliyyat vasitələrinin kütləvi istehsal olunduğu model olan Niva, monokok quruluşu və müstəqil ön asma və qıvrım asma bacarıqlarına görə bugünkü yolsuzluq avtomobillərinin pioneridir.
            </div>
            </div>
        </div>
    </div>
  )
}

export default Home