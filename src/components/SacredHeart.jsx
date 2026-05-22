import React from 'react'
import SacredHeart1 from '../assets/sacredheart.png'
import {motion} from 'framer-motion'

const SacredHeart = () => {
  return (
    <section className='  flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-20 gap-12 bg-gray-100'>

      {/* Text Content */}
      <motion.div 
         initial={{opacity:0, x:-100}}
         whileInView={{opacity:1, x:0}}
         transition={{duration:0.5, ease:"easeInOut"}}
         viewport={{amount:0.3}}
      className='sec-cont max-w-3xl bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl/30 border border-gray-200'>

        <h1 className='text-4xl md:text-5xl font-bold mb-6 text-blue-900 text-center'>
          Sacred Heart of Jesus
        </h1>
        <br />
        <p className='text-lg leading-7 text-gray-700'>
         The Grotto of the Sacred Heart of Jesus in our parish is a sacred place of prayer, devotion, and reflection, reminding the faithful of the infinite love and mercy of Christ toward humanity. Dedicated to the Sacred Heart of Jesus, this holy grotto stands as a symbol of compassion, sacrifice, forgiveness, and divine grace.
        </p>
        <br />
        <p className='inline-block text-lg leading-7 text-gray-700 mt-5 px-2' >
          The Sacred Heart of Jesus represents the boundless love of our Lord, who gave His life for the salvation of the world. With His heart burning in love for all people, Jesus continues to call us to live in faith, humility, peace, and charity. This grotto invites every believer to draw closer to Him in prayer and trust, especially during moments of struggle, sorrow, and uncertainty.
           
            <br />
            <br />


        </p>

      </motion.div>

      {/* Image */}
      <div className='overflow-hidden rounded-3xl shadow-2xl group'>

        <img
          src={SacredHeart1}
          alt="Sacred Heart of Jesus"
          className='w-[300px] md:w-[450px] h-[350px] object-cover object-top transition duration-500 group-hover:scale-105'
        />

      </div>

    </section>
  )
}

export default SacredHeart
