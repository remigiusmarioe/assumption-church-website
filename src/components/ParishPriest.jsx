import React from 'react'
import Priest1 from '../assets/priest2.jpg'
import {motion} from 'framer-motion'
const ParishPriest = () => {
  return (
    <section className='flex justify-center'>
        <motion.div
         initial={{opacity:0, x:-100}}
         whileInView={{opacity:1, x:0}}
         transition={{duration:0.5, ease:"easeInOut"}}
         viewport={{amount:0.3}}
        className='flex flex-col md:flex-row items-center  sec-cont max-w-3xl bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl/30 border border-gray-200'>
            <div className='py-8'>
                <br /> <br /><br />
                <p>Loving Greetings in the name of our Lord Jesus Christ.</p>
                <br />
                <p>Welcome to our parish community! As Parish Priest of Assumption Church, Pallapalayam, I ask Almighty God to give me the wisdom and strength to lead my parishioners.</p>
                <br />
                <p>Let us continue to grow together in prayer, unity, and service under the loving protection of Mother Mary. May God bless you and your family abundantly.</p>
                <br />
            </div>
            <div className='py-8'>
                <h3 className='flex justify-center mb-1 font-bold text-2xl text-amber-900 font-[head-font] '>PARISH PRIEST</h3> <br />
                <img src={Priest1} alt="Parish Priest"  className='w-[220px] md:w-[460px] h-auto rounded-2xl object-cover object-top transition duration-500 group-hover:scale-105' />
                <p className=' flex justify-center text-amber-900 font-medium' >Rev.Fr. Kanagaraj</p>
            </div>
        </motion.div>
    </section>
  )
}

export default ParishPriest
