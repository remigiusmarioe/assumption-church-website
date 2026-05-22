import React from 'react'
import HolyCross1 from '../assets/HolyCross1.jpg'
import {motion} from 'framer-motion'

const HolyCross = () => {
  return (
    <section className='flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-20 gap-12 bg-gray-100 md:mt-20'>
         {/* Image */}
         <div className='overflow-hidden rounded-3xl shadow-2xl group'>
   
           <img
             src={HolyCross1}
             alt="Our Lady of Good Health"
             className='w-[300px] md:w-[350px] h-[400px] object-cover object-top transition duration-500 group-hover:scale-105'
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
             Relic of the Holy Cross
           </h1>
           <br />
           <p className='text-lg leading-7 text-gray-700'>
             The Relic of the Holy Cross preserved in our parish is a sacred treasure of immense spiritual significance for the faithful. This holy relic reminds us of the suffering, sacrifice, and boundless love of Jesus Christ, who gave His life on the Cross for the salvation of humanity.
           </p>
           <br />
           <p className='inline-block text-lg leading-7 text-gray-700 mt-5 px-2' >
            The Cross is the greatest symbol of Christian faith, representing hope, redemption, forgiveness, and victory over sin and death. The presence of this sacred relic in our church is a source of deep devotion and blessing, inspiring believers to strengthen their faith and walk in the path of Christ with humility and love.
              
               <br />
               <br />
   
           </p>
   
         </motion.div>
   
        
   
       </section>
  )
}

export default HolyCross
