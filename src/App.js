import './App.css';
import './scss/styles.scss';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <div className="navbar">
              <div  classname="col-md-4">
              <img src={process.env.PUBLIC_URL + '/images/logo.png'}/>
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
            <div className="col-md-6">
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
            <div className="col-md-6">

            </div>
        </div>
      </div>
    </>
  );
}

export default App;
