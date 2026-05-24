import React, {useState, useEffect} from 'react'
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";


import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import img6 from '../assets/img6.jpg'
import img7 from '../assets/img7.jpg'
import img8 from '../assets/img8.jpg'
import img9 from '../assets/img9.jpg'
import img10 from '../assets/img10.jpg'
import img11 from '../assets/img11.jpg'
import img12 from '../assets/img12.jpg'
import img13 from '../assets/img13.jpg'
import img14 from '../assets/img14.jpg'
import img15 from '../assets/img15.jpg'
import img16 from '../assets/img16.jpg'
import img17 from '../assets/img17.jpg'
import img18 from '../assets/img18.jpg'
import img19 from '../assets/img19.jpg'
import img20 from '../assets/img20.jpg'
import img21 from '../assets/img21.jpg'
import img22 from '../assets/img22.jpg'
import img23 from '../assets/img23.jpg'
import img24 from '../assets/img24.jpg'
import img25 from '../assets/img25.jpg'
import img27 from '../assets/img27.jpg'


const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
 img13, img14, img15, img16, img17, img18, img19, img20,
  img21, img22, img23, img24, img25,  img27,
]

const GalleryList = () => {


  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(()=> {
    window.scrollTo(0,0)
  }, [])

  
  return (
    <div>

      <div>
        <h1 className='Gallery-list-heading text-4xl font-bold text-center my-10 text-blue-900 '>Gallery</h1>
      </div>

      <div>
        <div className='Gallery-list-heading grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full px-6'>
          {images.map((img, i) => (
            <div key={i} className='overflow-hidden rounded-2xl shadow-lg'onClick={() => {
                setOpen(true);
                setIndex(i);
              }}>
              <img src={img} alt="" className='w-full h-[250px] object-cover   transition duration-500 hover:scale-105 hover:cursor-pointer' />
            </div>
          ))}

        </div>

      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images.map((img) => ({ src: img }))}
        index={index}
      />

    </div>
  )
}

export default GalleryList
