const Map = () => {
  return (
    <section className='bg-BodyBg-0 pb-[120px]'>
      <div className='Container'>
        <div
          className='relative'
          data-aos='fade-up'
          data-aos-duration='1000'
        >
          <iframe 
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230.67931012903065!2d73.14122166484594!3d22.320795018722944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8f39d55e6f1%3A0x92f9597851304268!2sGotri%20-%20Samta%20Rd%2C%20Sumant%20Park%2C%20Laxmipura%2C%20Vadodara%2C%20Gujarat%20390023!5e0!3m2!1sen!2sin!4v1737969396114!5m2!1sen!2sin'
            width='100%'
            height='500'
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            className='rounded-3xl w-full border-2 border-white'></iframe>
           
          
        </div>
      </div>
    </section>
  );
};

export default Map;
