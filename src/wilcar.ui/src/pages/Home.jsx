import React from 'react';
import car1 from "../assets/img/Niva-3.jpeg";
import car2 from "../assets/img/niva-4.webp";
import { motion } from 'framer-motion';
function Home() {
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
          }
        }
      }
    
      const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      }
  return (
    <div className='container'>
        <motion.div variants={container} initial="hidden" animate="visible" className="col-12 mt-4">
            <motion.h2 variants={item}  className='text-white'>
            Niva və onun tarixi haqqında
            </motion.h2>
        </motion.div>
        <motion.div variants={container} initial="hidden" animate="visible" className="col-12 d-flex justify-content-between mt-5 rounded" style={{height:"400px"}}>
            <motion.img variants={item} className='rounded border border-danger border-2' style={{width:"48%", height:"100%" , objectFit:"cover"}} src={car1} alt="Niva" />
            <motion.img variants={item} className='rounded border border-danger border-2' style={{width:"48%", height:"100%" , objectFit:"cover"}} src={car2} alt="Niva" />
        </motion.div>
        <motion.div variants={container} initial="hidden" animate="visible" className="col-12">
            <motion.div variants={item} className="row">
            <motion.div variants={item} className="col-12 text-white mt-4">
            Niva (VAZ-2121 və LADA 4x4 adları ilə də məşhur) — Sovet və Rus avtomobil istehsalçı firması AvtoVAZ tərəfindən istehsal olunan kələ-kötür ərazi üçün nəzərdə tutulmuş nəqliyyat vasitəsi. Xüsusilə keçmiş SSRİ ölkələrində hal-hazırda xüsusi modifikasiyalar altında məşhurlaşmışdır.
             Kanadada (1998-ci ildən sonra satışı ləğv edildi), Cənubi Amerikada, İslandiyada da məşhurlaşmış və torpaq şərtlərinin çətin olduğu yerdə istifadəsi əlverişli olmuş, geniş istifadə olunmuşdur. Avstraliya kimi bölgələrdə isə isti iqlim şəraiti üçün kondisionerinin uyğun olmaması səbəbindən populyarlığı məhdud olaraq qaldı. 
             Avtomobil modeli İslandiyada Lada Sport və Avstriyada Lada Taiga adı ilə tanınmışdır. Dünyada off-road nəqliyyat vasitələrinin kütləvi istehsal olunduğu model olan Niva, monokok quruluşu və müstəqil ön asma və qıvrım asma bacarıqlarına görə bugünkü yolsuzluq avtomobillərinin pioneridir.
            </motion.div>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Home