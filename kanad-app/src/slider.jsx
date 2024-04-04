import SliderImg from './assets/images/slider/Slider1.jpeg';
// import SliderJS from  "./assets/JS/slider.js";
import "./assets/CSS/slider.css";

function Slider() {

    const sliderCss = {
        width: '100%',
        height: '90vh',
        position: 'relative',
        border: '1px solid rgba(255, 255, 255',
    }

    // const prevBtn = document.getElementById('prev');
    // const nextBtn = document.getElementById('next');

    // prevBtn.addEventListener('click', prevSlideHandler);
    // nextBtn.addEventListener('click', nextSlideHandler);

    const slidePhotos = ['Slider1.jpeg', 'Slider2.jpeg', 'Slider3.jpeg', 'Slider4.jpeg', 'Slider5.jpeg'];

    let currentSlide = 0;

    function nextSlideHandler(evt) {
        evt.preventDefault();
        currentSlide++;
        if (currentSlide === slidePhotos.length) {
            currentSlide = 0;
        }
        document.querySelector('.slider-body').src = slidePhotos[currentSlide];
    }

    function prevSlideHandler(evt) {
        evt.preventDefault();
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = slidePhotos.length - 1;
        }
        document.querySelector('.slider-body').src = slidePhotos[currentSlide];
    }


    return (

        <div className="slider_wrapper" style={sliderCss}>
            <div className="slider">
                <img src={SliderImg} alt="slider image" className="slider-body" />
            </div>

            <div className="slider_btn">
                <div className="slider_btn_span">
                <div>
                    <button id='prev' onClick={prevSlideHandler}>P</button>
                    <span className='prev_tooltip'>Previous</span>
                </div>
                <div>
                    <button id='next' onClick={nextSlideHandler}>N</button>
                    <span className='next_tooltip'>Next</span>
                </div>
                </div>
            </div>
        </div>

    );
};


export default Slider