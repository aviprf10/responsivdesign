import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './App.css';
import './scss/styles.scss';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import 'font-awesome/css/font-awesome.min.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
function App() {
  const [swiperRef, setSwiperRef] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    if (swiperRef) {
      swiperRef.slideNext();
      setActiveIndex(swiperRef.activeIndex);
    }
  };

  const handlePrev = () => {
    if (swiperRef) {
      swiperRef.slidePrev();
      setActiveIndex(swiperRef.activeIndex);
    }
  };
  return (
    <>
    <section style={{backgroundColor: "#111111"}}>
      <div className="container">
          <nav className="navbar navbar-expand-lg">
            <div className="navbar">
                <div  classname="col-md-4">
                  <img src={process.env.PUBLIC_URL + '/images/logo.png'} />
                </div>
              <div className="col-md-6">
                <a Link="#" className="menu">Home</a>
                <a Link="#" className="menu">Attorneys</a>
                <a Link="#" className="menu">Practice Areas</a>
                <a Link="#" className="menu">About Us</a>
              </div>
              <div className="col-md-2">
                <button className='btn btn-outline-secondary'>Contact Us</button>  
              </div>
            </div>
          </nav>
        </div>
        <div className="container">
          <div className="row">
              <div className="col-md-6" style={{padding: "4%"}}>
                <h1 className="bannerheadline">
                  You don’t have to Fight them Alone.
                </h1>
                <div className="pdesc">
                Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales 
                conubia ut inceptos faucibus himenaeos tortor eget, 
                hac massa gravida arcu interdum proin curae.
                </div>
                <div className="search">
                    <i className="envelope-icon"><i className="fa fa-envelope"></i></i>
                    <input type="text" className="form-control" placeholder="Enter your eamil address"/>
                    <button className="btn btn-primary">Let's tolk</button>
                  </div>
              </div>
              <div className="col-md-6" style={{padding: "0px 13% 10%"}}>
                <div className="Rectangle3722" style={{width: "100%", height: "100%", borderRadius: "55px"}}>
                  <div className="Rectangle3722" style={{width: "100%", height: "100%", background: "#E3B748", borderRadius: "55px"}}>
                    <img className="Image" style={{width: "87%", height: "118%", marginTop: "-58px"}} src={process.env.PUBLIC_URL + '/images/user.png'} />
                  </div>
                </div>
              </div>
          </div>
        </div>
    </section>
    <section style={{backgroundColor: "#2E2E2E"}}>  
        <div className="container">
            <div className="row">
                <div className="col-md-5">
                  <div className="LetSIntroduceOurself">Let’s Introduce<br/>Ourself</div>
                </div>
                <div className="col-md-1" style={{borderRight:"1px #6A6A6A solid", height: "200px", marginTop: "53px"}}>

                </div>
                <div className="col-md-6" style={{padding:"60px"}}>
                  <div className="CriminalLawyer">Criminal Lawyer</div>
                  <div className="amidesc">Amet minim mollit non deserunt ullamco est<br/>sit aliqua dolor do amet sint. Velit officia consequatduis<br/>enim velit mollit Exercitation.</div>
                </div>
            </div>
        </div>
      </section>
      <section style={{backgroundColor: "#1D1D1D"}}>  
        <div className="container">
            <div className="WhyChooseUs">Why Choose us?</div>
            <div className="row">
                <div className="col-md-4">
                  <div className="Rectangle3646">
                    <div className="Ellipse9">
                      <img className="Image" src={process.env.PUBLIC_URL + '/images/gift.png'} />
                    </div>
                    <div className="SuccessRate">98% Success Rate</div>
                    <div className="SuccessRatedesc">Amet minim mollit non deserunt ullamco est<br/>sit aliqua dolor do amet sint. Velit officia<br/>consequatduis enim velit mollit Exer.</div>
                    <div className="Rectangle3649">
                      <div className="ReadMore">Read More</div>  
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="Rectangle364667">
                    <div className="Ellipse9">
                      <img className="Image" src={process.env.PUBLIC_URL + '/images/gift.png'} />
                    </div>
                    <div className="SuccessRate">100% Success Rate</div>
                    <div className="SuccessRatedesc">Amet minim mollit non deserunt ullamco est<br/>sit aliqua dolor do amet sint. Velit officia<br/>consequatduis enim velit mollit Exer.</div>
                    <div className="Rectangle3649">
                      <div className="ReadMore">Read More</div>  
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="Rectangle3646">
                    <div className="Ellipse9">
                      <img className="Image" src={process.env.PUBLIC_URL + '/images/gift.png'} />
                    </div>
                    <div className="SuccessRate">100% Success Rate</div>
                    <div className="SuccessRatedesc">Amet minim mollit non deserunt ullamco est<br/>sit aliqua dolor do amet sint. Velit officia<br/>consequatduis enim velit mollit Exer.</div>
                    <div className="Rectangle3649">
                      <div className="ReadMore">Read More</div>  
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </section>
      <section style={{backgroundColor: "#1D1D1D"}}>  
        <div className="container">
            <div className="WhyChooseUs">Area of Practices</div>
            <div className="row">
              <div className='col-md-8'>
                 <div className="gallery-item">
                    <img className="img-fluid" src="https://s3-alpha-sig.figma.com/img/c5e0/6b00/7c0b32a7459f3f93e948c826fb8285fa?Expires=1705276800&Signature=Z7XeZnlM4-oPOk2Xz6GRi77Fx-vWbN3aupEK1mG~Rdli-ibsYXQS3WU17im7i3lG046N4ytodbIcZarL8OL9ljo1lpbIGyVCd1w1XMvDAosCp97XHzbUGQ9W0n1LcuHvvMzindTsmjZrR3jdQkQ-YbVnA6enX~CjwYaQL55FFrn6hjxOAfcQshfspAujf-k-p3LA31PLSTE8iJQNZeKznBWFOoBPVqPozkrR-ST6Rv17fVFZrU4gJTHyCTpubI7vMtt3J2JwKHKNfrkVvyJXLPesgAZkGCAza8fR8qS6eNKwGVwWAB4NRcLFNO4JQY7o2m1wz~H87tD38AG-moYCvQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Image 1"/>
                    <div className="overlay">
                      <div className="headline">BUSINESS LAW</div>
                    </div>
                  </div>
              </div>
              <div className='col-md-4'>
                  <div className="gallery-item">
                    <img className="img-fluid" src="https://s3-alpha-sig.figma.com/img/a84e/eb93/e84ba9f312f91841a004e8392d9027e5?Expires=1705276800&Signature=AFVLrX50Nz9RiDzj30xizwWKjRayV84zRfJLgsou9ia1cYg2b-Z2svSiRwqCIjsUMZrZpyIgA28u47DZ5zMqTdWXWh12zdYsFE9a51NK-FvBEhnSCQ3QYjNcemWVHVkT2PRI-O-6DIoSEDfjSOmSPBQlJTd45~xpJafx8ZU~9h4rpOstYPb0mlmcZDURGUyJONY40sr-B27LKmusWMYCE~1Yy04SRIjMf8J~hVDNsAa2qN4Mr2yg80b2171LMKmD5ecafdaY5oQlZwJt9b0-aFZykkFI1c6BrQrCSrM~AkNAEklIYp1ZBPuR2PJKIAVCfyRqfloE~r7G0TC3OwIWLA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Image 2"/>
                    <div className="overlay">
                      <div className="headline">Partnership LAW</div>
                    </div>
                  </div>
              </div>
            </div>
            <div className="row">
              <div className='col-md-4'>
                 <div className="gallery-item">
                    <img className="img-fluid" src="https://s3-alpha-sig.figma.com/img/0134/94ae/20fe77e2ba4511c0eac9a6a8e2e442e9?Expires=1705276800&Signature=O7K9uyLcFRw0BV0mLk5dQzBUz5FXI0e9cBjBdqFqy7-xBmGV8z0w1KuigYgsnwqRJGPwebdFZ~n43cJGHv6BRdAi-pM8LActQzF0yC33727BfvQH2YAUYb55q3OE654aoN88Zl47Qzq8lCev5AYBiKSxsA0rUXkD-hVPxeuVghSgU61PPVomq3bizPoJJVaFCxklyiAtAe-sI-9Nhod62ztMUeKiT4nA9abShAoI~JlBFz-zxRqT0aPCSJ8yeGfqAXC~HE9U0jBtO5tTpH6dh~9yQ186F29A77-aafiiLS06xnIE2fzFUiEOs3TVTmD4fBb-nEeGcrbFw3AbUSUetg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Image 1"/>
                    <div className="overlay">
                      <div className="headline">REAL ESTATE LAW</div>
                    </div>
                  </div>
              </div>
              <div className='col-md-8'>
                  <div className="gallery-item">
                    <img className="img-fluid" src="https://s3-alpha-sig.figma.com/img/967e/a809/6e48ac723c88ed39751352f5c9436c2a?Expires=1705276800&Signature=RzZmtOZ74t9IfQABrfuVKmNB7E8x3hwl1f0cEfVhSG3T6gtsv3pjJOwfsqXXvYaYsyfB-6XvMugvkljdalzMJNcUD6SSTtQMUGwLJzmjJT9NqcMlo0dQgXIOi7LVfjb8yRYj2M6RPejJLFdUTUZQELKwuTMHf8mGJ4u-BOzlmq~KxWk8-MtxRJ568VMBPEnl6bHnwHTrGMzkuct8nBsv6U6AHGVIDfvTfBJPCkoSB6bPLM6FdJh8GduqIZVdZqJ~eWJcRQm3hzlhsE9BuACQ40pza7279~anSJLHOMkwcXgqDado~OwbuWmXltUhs305ZWeRb-6ImLIf2eiBd2lTPA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Image 2"/>
                    <div className="overlay">
                      <div className="headline">BUSINESS LAW</div>
                    </div>
                  </div>
              </div>
            </div>
            <div className="row">
              <div className='col-md-8'>
                 <div className="gallery-item">
                    <img className="img-fluid" src="https://s3-alpha-sig.figma.com/img/67f6/5c6c/48e8eefdf399cab04f83a10d965770f1?Expires=1705276800&Signature=FlWcc5rGILTVlTx3M5Aa7TsCOU9ggAWY-AxFXVWhegMfEsFaSIZcRiYVeGcZZdhb7p-DZUjBq1q9VF0QCd~c8OoW6Xw1B9zjGGhkpDOQyAoCFnisJjZNni7zWek9Ovn6g0tw0PD~IfqSUo6mCMJoabp1DtXM8IRZgqbqhYpKDxxebzIhsodp0Y7XtYqqGfpwFhsMq1eAr-0Ilk6L3CFGwlPRs8FFT3yGHgzTQWxxXLlgHsnAIdKsSM0de1dtycOtfcdOmHvJtT4BxppLkr2ZwfrwB1Qfoz~v77MbPQZ4V-xqFMyxXFr-WwxOLXSw2kZl44XAdIHbtFR2MUzFAPATIA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Image 1"/>
                    <div className="overlay">
                      <div className="headline">BUSINESS LAW</div>
                    </div>
                  </div>
              </div>
              <div className='col-md-4'>
                  <div className="gallery-item">
                    <img className="img-fluid" src="https://s3-alpha-sig.figma.com/img/68d0/8df3/8947e8d751a269f4d5965ea6d3152054?Expires=1705276800&Signature=Cl-L~f~gCjMmEWXj4xE1dfzVPYDP5pn3qjNHCaqRi3FGTz0-iY8bZiEVF2Qc~Gcm~zpk1owJ~A-Tgn1jjUJg-LCMpZ34tS5mI85UkhEusgvb55D0pN0CQdqn87CQ0HTYaRLz8uu-n55HAFUQ8t4fCslNoGv9P5ek6LxkxQPeHoC4HfVt57qYLpmnsdkzFiHRcESr0BKQOiCEiu8MB3fq59ZRmztxNRXiCJkgH0ZcZLo-l~gesRR3gklqyQNNIp989PNP1NMLE4aPRv8Fx0vCAF~R4j5mXv2e7wIU9~L7v1jR68TZ0Yum9EwnMfyOc2OKMI5nZJsvxEpsHJzacz5V9A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Image 2"/>
                    <div className="overlay">
                      <div className="headline">Partnership LAW</div>
                    </div>
                  </div>
              </div>
            </div>
        </div>
      </section>
      <section style={{backgroundColor: "#1D1D1D"}}>  
        <div className="container">
            <div className="row">
              <div className='col-md-8'>
                <div class="WhatSaysOurHappyClients">What says our<br/>happy Clients</div>
              </div>
                <div className='col-md-4' style={{ padding: "60px"}}>
                  <button class="Vectorleft"  onClick={handlePrev}>
                      <img src={process.env.PUBLIC_URL + '/images/prev.png'} class="prev"/>
                  </button>
                  <button class="Vectorright"  onClick={handleNext}>
                      <img src={process.env.PUBLIC_URL + '/images/right.png'} class="prev"/>
                  </button>
                <div>
                </div>
              </div>
            </div>
            <div className="row">
            <Swiper
              onSwiper={setSwiperRef}
              slidesPerView={4}
              centeredSlides={true}
              spaceBetween={30}
              pagination={{
                type: 'fraction',
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
              style={{ height: "100%" }}
            >
              <SwiperSlide>
                <div className="Rectangle3646">
                  <img  className="Ellipse10" src="https://s3-alpha-sig.figma.com/img/1994/067c/3ac3d40d2341bd81bd13e2e7f755bf0d?Expires=1705276800&Signature=CIs2x484UsBIsAldh0SSpluYnHIc~v1lrQ2Y3ZC8zhiXHgXCl72LPZFljCEFapTlCChlTcYAm2MhuolfMuWhWaLvm1ewySuARVZAkipYsUt8CuRCd6XP-slccmQ-WLT2KjFMC9bZi16YOLPZ-cM4zBngkrz6aemeJA8icbhbEFGd-XlfSIa-zT-UDj61~I0o3Ezm6UYxSxP0MVvyl16gq2UYKq8nrwpmRrpYer0SWzpzXOhbUsivYHHx57nCyk1V9Qy1b3JAK8vVrpFAjOujI416jPK9KF0ABcSDuQyJwJtdra3wsVM2wMeQjhuAmiziaMbIrnaMMHKhKbTs2ChoJQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                  <div className="SuccessRate12">Jane Cooper</div>
                  <div class="CeoOfHunt">Ceo of Hunt</div>
                  <div class="blogdewsc">Amet minim mollit non deserunt ullamco est<br/>sit aliqua dolor do amet sint. Velit officia<br/>consequatduis enim velit mollit Exer. sit<br/>aliqua dolor do amet sint. Velit officia</div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="Rectangle3646">
                  <img  className="Ellipse10" src="https://s3-alpha-sig.figma.com/img/1994/067c/3ac3d40d2341bd81bd13e2e7f755bf0d?Expires=1705276800&Signature=CIs2x484UsBIsAldh0SSpluYnHIc~v1lrQ2Y3ZC8zhiXHgXCl72LPZFljCEFapTlCChlTcYAm2MhuolfMuWhWaLvm1ewySuARVZAkipYsUt8CuRCd6XP-slccmQ-WLT2KjFMC9bZi16YOLPZ-cM4zBngkrz6aemeJA8icbhbEFGd-XlfSIa-zT-UDj61~I0o3Ezm6UYxSxP0MVvyl16gq2UYKq8nrwpmRrpYer0SWzpzXOhbUsivYHHx57nCyk1V9Qy1b3JAK8vVrpFAjOujI416jPK9KF0ABcSDuQyJwJtdra3wsVM2wMeQjhuAmiziaMbIrnaMMHKhKbTs2ChoJQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                  <div className="SuccessRate12">Jane Cooper</div>
                  <div class="CeoOfHunt">Ceo of Hunt</div>
                  <div class="blogdewsc">Amet minim mollit non deserunt ullamco est<br/>sit aliqua dolor do amet sint. Velit officia<br/>consequatduis enim velit mollit Exer. sit<br/>aliqua dolor do amet sint. Velit officia</div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="Rectangle3646">
                  <img  className="Ellipse10" src="https://s3-alpha-sig.figma.com/img/1994/067c/3ac3d40d2341bd81bd13e2e7f755bf0d?Expires=1705276800&Signature=CIs2x484UsBIsAldh0SSpluYnHIc~v1lrQ2Y3ZC8zhiXHgXCl72LPZFljCEFapTlCChlTcYAm2MhuolfMuWhWaLvm1ewySuARVZAkipYsUt8CuRCd6XP-slccmQ-WLT2KjFMC9bZi16YOLPZ-cM4zBngkrz6aemeJA8icbhbEFGd-XlfSIa-zT-UDj61~I0o3Ezm6UYxSxP0MVvyl16gq2UYKq8nrwpmRrpYer0SWzpzXOhbUsivYHHx57nCyk1V9Qy1b3JAK8vVrpFAjOujI416jPK9KF0ABcSDuQyJwJtdra3wsVM2wMeQjhuAmiziaMbIrnaMMHKhKbTs2ChoJQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                  <div className="SuccessRate12">Jane Cooper</div>
                  <div class="CeoOfHunt">Ceo of Hunt</div>
                  <div class="blogdewsc">Amet minim mollit non deserunt ullamco est<br/>sit aliqua dolor do amet sint. Velit officia<br/>consequatduis enim velit mollit Exer. sit<br/>aliqua dolor do amet sint. Velit officia</div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="Rectangle3646">
                  <img  className="Ellipse10" src="https://s3-alpha-sig.figma.com/img/1994/067c/3ac3d40d2341bd81bd13e2e7f755bf0d?Expires=1705276800&Signature=CIs2x484UsBIsAldh0SSpluYnHIc~v1lrQ2Y3ZC8zhiXHgXCl72LPZFljCEFapTlCChlTcYAm2MhuolfMuWhWaLvm1ewySuARVZAkipYsUt8CuRCd6XP-slccmQ-WLT2KjFMC9bZi16YOLPZ-cM4zBngkrz6aemeJA8icbhbEFGd-XlfSIa-zT-UDj61~I0o3Ezm6UYxSxP0MVvyl16gq2UYKq8nrwpmRrpYer0SWzpzXOhbUsivYHHx57nCyk1V9Qy1b3JAK8vVrpFAjOujI416jPK9KF0ABcSDuQyJwJtdra3wsVM2wMeQjhuAmiziaMbIrnaMMHKhKbTs2ChoJQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                  <div className="SuccessRate12">Jane Cooper</div>
                  <div class="CeoOfHunt">Ceo of Hunt</div>
                  <div class="blogdewsc">Amet minim mollit non deserunt ullamco est<br/>sit aliqua dolor do amet sint. Velit officia<br/>consequatduis enim velit mollit Exer. sit<br/>aliqua dolor do amet sint. Velit officia</div>
                </div>
              </SwiperSlide>
            </Swiper>
            </div>
        </div>
      </section>
    </>
  );
}

export default App;
