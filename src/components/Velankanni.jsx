import React from 'react'
import velankanni1 from '../assets/velankanni.jpeg'
import {motion} from 'framer-motion'

const Velankanni = () => {
  return (
    <section className=' flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-20 gap-12 bg-gray-100 md:mt-20'>
         {/* Image */}
         <div className='overflow-hidden rounded-3xl shadow-2xl group'>
   
           <img
             src={velankanni1}
             alt="Our Lady of Good Health"
             className='w-[300px] md:w-[450px] h-[250px] object-cover object-top transition duration-500 group-hover:scale-105'
           />
   
         </div>
   
         {/* Text Content */}
         <motion.div 
          initial={{opacity:0, x:100}}
         whileInView={{opacity:1, x:0}}
         transition={{duration:0.5, ease:"easeInOut"}}
         viewport={{amount:0.3}}
         className='sec-cont max-w-3xl bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl/30 border border-gray-200'>
   
           <h1 className='text-4xl md:text-5xl font-bold mb-6 text-blue-900 text-center'>
             Our Lady of Good Health
           </h1>
           <br />
           <p className='text-lg leading-7 text-gray-700'>
             The Grotto of Our Lady of Good Health, Velankanni, in our parish stands as a beautiful symbol of faith, devotion, and gratitude to Mother Mary. This sacred grotto was established during the celebration of the 125 Years Jubilee of our parish, commemorated between the years 1987 and 1993, marking a historic and blessed milestone in the journey of our church community.
           </p>
           <br />
           <p className='inline-block text-lg leading-7 text-gray-700 mt-5 px-2' >
             Inspired by the holy shrine of Our Lady of Good Health at Velankanni, this grotto was lovingly built as a place where the faithful could gather in prayer and seek the loving intercession of Mother Mary. Since its establishment, it has become a spiritual center of devotion for parishioners and pilgrims who come with faith, hope, and thanksgiving.
              
               <br />
               <br />
   
           </p>
   
         </motion.div>
   
        
   
       </section>
  )
}

export default Velankanni
