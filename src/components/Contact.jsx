
import React from 'react'


const Contact = () => {
  return (
  <section className=" bottom-sec bg-blue-700 text-white py-14 px-6 md:px-16" id='contact'>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

    {/* LEFT SIDE */}
    <div className="space-y-5">

      <h1 className="text-4xl font-bold underline">
        Contact Us
      </h1>

      <div className="space-y-3 text-lg leading-8">

        <p className="font-semibold text-2xl">
          Rev. Fr. Kanagaraj
        </p>

        <p>Parish Priest</p>

        <p>
          Phone: +91 63810 66272
        </p>

        <p>
          Address: Assumption Church,
          Pallapalayam,
          Tamil Nadu, 641663
        </p>
        <h3 className="text-2xl font-bold underline">Committee</h3>
        <p className='text-xl font-bold'>Mr. John Kennedy. A</p>
        <p>Phone: +91 9994885380</p>

      </div>
    </div>

    {/* RIGHT SIDE */}
    <div className="space-y-5">

      <h1 className="text-3xl font-bold leading-tight underline  ">
        திருப்பலி வழிபாட்டு நிகழ்வுகள்
      </h1>
      <br />

      <div className="space-y-4 text-lg leading-9">

        <div>
          <p className="font-bold text-2xl mb-2 ">
            திங்கள் முதல் வெள்ளி வரை
          </p>

          <p>
            மாலை 6:00 மணிக்கு திருப்பலி
          </p>
        </div>

        <div>
          <p className="font-bold text-2xl mb-2">
            சனி
          </p>

          <p>
            மாலை 6.00 ஆரோக்கிய மாதா  கெபியில் திருப்பலி
          </p>
        </div>

        <div>
          <p className="font-bold text-2xl mb-2">
            ஞாயிறு
          </p>

          <p>
            காலை 8.00 மணிக்கு திருப்பலி
          </p>
        </div>

      </div>
    </div>

  </div>
</section>
  )
}

export default Contact
