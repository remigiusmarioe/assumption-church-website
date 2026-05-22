import React from 'react'
import Paper from '@mui/material/Paper';
import {motion} from 'framer-motion'


const Hero = () => {
  return (
    <div>
      <section className='hero-section '>
       {/* <div className='hero-paper'>
       </div> */}
         <motion.h1 
         initial={{opacity:0, x:-100}}
         whileInView={{opacity:1, x:0}}
         transition={{duration:1.2, ease:"easeInOut"}}
         viewport={{amount:0.3}}
         className='hero-heading '>Welcome to Assumption Church <br /> Pallapalayam </motion.h1>
         
          <motion.p 
          initial={{opacity:0, y:100}}
         whileInView={{opacity:1, y:0}}
         transition={{duration:1.2, ease:"easeInOut"}}
         viewport={{amount:0.3}} className='hero-subheading '>Welcome to Assumption Church, a sacred place of worship dedicated to faith, love, and service. The church welcomes everyone to experience spiritual growth, prayerful celebrations, and a strong sense of community We are united in our pursuit and worship of Christ. Above all else, we seek to glorify God. We firmly believe that God works through our church, dedicated to St. Mary of Assumption , making it a vital part of the Christian life. Join us as we come together and allow the Gospel to transform us. We invite you to explore our website to learn more about our church and the services we offer.
</motion.p>
      </section>
    </div>
  )
}

export default Hero
