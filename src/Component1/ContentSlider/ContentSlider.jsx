import './content-slider.css';
import contentShape from '/images/star.png';

const ContentSlider = () => {
  return (
    <div
      className='content-slider-section'
      data-aos='fade-right'
      data-aos-duration='1000'
    >
      <div className='content-slider'>
        <div className='content-slider-content'>
          <img
            src={contentShape}
            draggable='false'
            className='animate-rotational'
          />
        </div>
        <div className='content-slider-content'>
          <h1>Cosmetology</h1>
        </div>
        <div className='content-slider-content'>
          <img
            src={contentShape}
            draggable='false'
            className='animate-rotational'
          />
        </div>
        <div className='content-slider-content'>
          <h1>Dental </h1>
        </div>
        <div className='content-slider-content'>
          <img
            src={contentShape}
            draggable='false'
            className='animate-rotational'
          />
        </div>
        {/* <div className='content-slider-content'>
          <h1></h1>
        </div> */}
        <div className='content-slider-content'>
          <img
            src={contentShape}
            draggable='false'
            className='animate-rotational'
          />
        </div>
        <div className='content-slider-content'>
          <h1>Cosmetology</h1>
        </div>
        <div className='content-slider-content'>
          <img
            src={contentShape}
            draggable='false'
            className='animate-rotational'
          />
        </div>
        <div className='content-slider-content'>
          <h1>Dental</h1>
        </div>
        <div className='content-slider-content'>
          <img
            src={contentShape}
            draggable='false'
            className='animate-rotational'
          />
        </div>
        {/* <div className='content-slider-content'>
          <h1>NUEROLOGIST</h1>
        </div> */}
      </div>
      <div className='content-slider'>
        <div className='content-slider-content'>
          <img
            src={contentShape}
            draggable='false'
            className='animate-rotational'
          />
        </div>
        <div className='content-slider-content'>
          <h1>Cosmetology</h1>
        </div>
        <div className='content-slider-content'>
          <img
            src={contentShape}
            draggable='false'
            className='animate-rotational'
          />
        </div>
        <div className='content-slider-content'>
          <h1> Dental Surgery</h1>
        </div>
        <div className='content-slider-content'>
          <img
            src={contentShape}
            draggable='false'
            className='animate-rotational'
          />
        </div>
        {/* <div className='content-slider-content'>
          <h1>NUEROLOGIST</h1>
        </div> */}
        <div className='content-slider-content'>
          <img
            src={contentShape}
            draggable='false'
            className='animate-rotational'
          />
        </div>
        <div className='content-slider-content'>
          <h1>Cosmetology</h1>
        </div>
        <div className='content-slider-content'>
          <img
            src={contentShape}
            draggable='false'
            className='animate-rotational'
          />
        </div>
        <div className='content-slider-content'>
          <h1> Dental Surgery</h1>
        </div>
        <div className='content-slider-content'>
          <img
            src={contentShape}
            draggable='false'
            className='animate-rotational'
          />
        </div>
        {/* <div className='content-slider-content'>
          <h1>NUEROLOGIST</h1>
        </div> */}
      </div>
    </div>
  );
};

export default ContentSlider;
