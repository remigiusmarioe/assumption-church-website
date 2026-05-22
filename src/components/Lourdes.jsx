import React from 'react'
import Lourdes1 from '../assets/lourdes.jpeg'
import {motion} from 'framer-motion'

const Lourdes = () => {
  return (
    <section className=' flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-20 gap-12 bg-gray-100'>

      {/* Text Content */}
      <motion.div 
         initial={{opacity:0, x:-100}}
         whileInView={{opacity:1, x:0}}
         transition={{duration:0.5, ease:"easeInOut"}}
         viewport={{amount:0.3}}
      className='sec-cont max-w-3xl bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl/30 border border-gray-200'>

        <h1 className='text-4xl md:text-5xl font-bold mb-6 text-blue-900 text-center'>
          Our Lady of Lourdes
        </h1>
        <br />
        <p className='text-lg leading-7 text-gray-700'>
          The Grotto of Our Lady of Lourdes in our church stands as a sacred
          place of prayer, peace, and devotion for all the faithful. This holy
          grotto was established in honor of Mother Mary, recalling the
          miraculous apparitions of Our Lady of Lourdes to Saint Bernadette, a
          humble 14-year-old peasant girl, at the Massabielle Grotto in
          Lourdes, France, in the year 1858.
        </p>
        <br />
        <p className='inline-block text-lg leading-7 text-gray-700 mt-5 px-2' >
          The statue placed in this grotto holds a unique spiritual and historical significance. It was beautifully sculptured in France, the very land where Mother Mary appeared to Bernadette and revealed her loving presence to the world. According to tradition, only three such statues were brought from France to India and Sri Lanka, and our church is blessed to possess one among them.
           
            <br />
            <br />
            </p>



      </motion.div>

      {/* Image */}
      <div className='overflow-hidden rounded-3xl shadow-2xl group'>

        <img
          src={Lourdes1}
          alt="Our Lady of Lourdes"
          className='w-[300px] md:w-[350px] h-[450px] object-cover object-top transition duration-500 group-hover:scale-105'
        />

      </div>

    </section>
  )
}

export default Lourdes
