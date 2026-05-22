import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className='flex justify-between bottom-sec bg-blue-900 text-white  overline-full  '>
      <div>
      <p>&copy; {currentYear} Assumption Church. All rights reserved.</p>
      </div>

      <div className='footer-box'>
        <p>Designed and Developed by Remigius Marioe. J</p>
        <p>Phone: +91 63746 32367</p>
      </div>
    </footer>
  )
}

export default Footer
