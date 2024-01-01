import './App.css';
import './scss/styles.scss';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import 'font-awesome/css/font-awesome.min.css';

function App() {
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
                <div class="search">
                    <i class="envelope-icon"><i className="fa fa-envelope"></i></i>
                    <input type="text" class="form-control" placeholder="Enter your eamil address"/>
                    <button class="btn btn-primary">Let's tolk</button>
                  </div>
              </div>
              <div className="col-md-6" style={{padding: "0px 13% 10%"}}>
                <div class="Rectangle3722" style={{width: "100%", height: "100%", borderRadius: "55px"}}>
                  <div class="Rectangle3722" style={{width: "100%", height: "100%", background: "#E3B748", borderRadius: "55px"}}>
                    <img class="Image" style={{width: "87%", height: "118%", marginTop: "-58px"}} src={process.env.PUBLIC_URL + '/images/user.png'} />
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
                  <div class="CriminalLawyer">Criminal Lawyer</div>
                  <div class="amidesc">Amet minim mollit non deserunt ullamco est<br/>sit aliqua dolor do amet sint. Velit officia consequatduis<br/>enim velit mollit Exercitation.</div>
                </div>
            </div>
        </div>
      </section>
      <section style={{backgroundColor: "#1D1D1D"}}>  
        <div className="container">
            <div class="WhyChooseUs">Why Choose us?</div>
            <div className="row">
                <div className="col-md-4">
                  <div class="Rectangle3646">
                    <div class="Ellipse9">
                      <img className="Image" src={process.env.PUBLIC_URL + '/images/gift.png'} />
                    </div>
                    <div class="SuccessRate">98% Success Rate</div>
                    <div class="SuccessRatedesc">Amet minim mollit non deserunt ullamco est<br/>sit aliqua dolor do amet sint. Velit officia<br/>consequatduis enim velit mollit Exer.</div>
                    <div class="Rectangle3649">
                      <div class="ReadMore">Read More</div>  
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div class="Rectangle364667">
                    <div class="Ellipse9">
                      <img className="Image" src={process.env.PUBLIC_URL + '/images/gift.png'} />
                    </div>
                    <div class="SuccessRate">100% Success Rate</div>
                    <div class="SuccessRatedesc">Amet minim mollit non deserunt ullamco est<br/>sit aliqua dolor do amet sint. Velit officia<br/>consequatduis enim velit mollit Exer.</div>
                    <div class="Rectangle3649">
                      <div class="ReadMore">Read More</div>  
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div class="Rectangle3646">
                    <div class="Ellipse9">
                      <img className="Image" src={process.env.PUBLIC_URL + '/images/gift.png'} />
                    </div>
                    <div class="SuccessRate">100% Success Rate</div>
                    <div class="SuccessRatedesc">Amet minim mollit non deserunt ullamco est<br/>sit aliqua dolor do amet sint. Velit officia<br/>consequatduis enim velit mollit Exer.</div>
                    <div class="Rectangle3649">
                      <div class="ReadMore">Read More</div>  
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </section>
      <section style={{backgroundColor: "#1D1D1D"}}>  
        <div className="container">
            <div class="WhyChooseUs">Area of Practices</div>
            <div className="row">
                <div className="col-md-4">
                  <div class="Rectangle3646">
                    <div class="Ellipse9">
                      <img className="Image" src={process.env.PUBLIC_URL + '/images/gift.png'} />
                    </div>
                    <div class="SuccessRate">98% Success Rate</div>
                    <div class="SuccessRatedesc">Amet minim mollit non deserunt ullamco est<br/>sit aliqua dolor do amet sint. Velit officia<br/>consequatduis enim velit mollit Exer.</div>
                    <div class="Rectangle3649">
                      <div class="ReadMore">Read More</div>  
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div class="Rectangle364667">
                    <div class="Ellipse9">
                      <img className="Image" src={process.env.PUBLIC_URL + '/images/gift.png'} />
                    </div>
                    <div class="SuccessRate">100% Success Rate</div>
                    <div class="SuccessRatedesc">Amet minim mollit non deserunt ullamco est<br/>sit aliqua dolor do amet sint. Velit officia<br/>consequatduis enim velit mollit Exer.</div>
                    <div class="Rectangle3649">
                      <div class="ReadMore">Read More</div>  
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div class="Rectangle3646">
                    <div class="Ellipse9">
                      <img className="Image" src={process.env.PUBLIC_URL + '/images/gift.png'} />
                    </div>
                    <div class="SuccessRate">100% Success Rate</div>
                    <div class="SuccessRatedesc">Amet minim mollit non deserunt ullamco est<br/>sit aliqua dolor do amet sint. Velit officia<br/>consequatduis enim velit mollit Exer.</div>
                    <div class="Rectangle3649">
                      <div class="ReadMore">Read More</div>  
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </section>
    </>
  );
}

export default App;
