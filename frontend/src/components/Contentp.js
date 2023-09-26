import React from "react";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'



function Contentp() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const navigate = useNavigate()

  const calculateBMI = () => {
    setBmi((weight * 10000) / (height * height));
  };
  return (
    <>
      <div>
        <section className="container">
        <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="Images/t-4.jpg" height={600} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>yoga brings flexibility</h5>
        <p>Yoga throws all the negative energies out of the body...</p>
        <button type="button" className="btn btn-success mx-1"><a className="nav-link " href="#gymPlans"><b>basic plan</b><span className="sr-only"></span></a></button>
        <button type="button" className="btn btn-danger mx-1"><a className="nav-link " href="#gymPlans"><b>Silver plan</b><span className="sr-only"></span></a></button>
        <button type="button" className="btn btn-warning mx-1"><a className="nav-link " href="#gymPlans"><b>Gold plans</b><span className="sr-only"></span></a></button>        
      </div>
    </div>
    <div className="carousel-item">
      <img src="Images/t-1.jpg" height={600} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>bodybuilding is not a joke</h5>
        <p>weight lifting is advanced level of bodybuilding that need power...</p>
        <button type="button" className="btn btn-success mx-1"><a className="nav-link " href="#gymPlans"><b>basic plan</b><span className="sr-only"></span></a></button>
        <button type="button" className="btn btn-danger mx-1"><a className="nav-link " href="#gymPlans"><b>Silver plan</b><span className="sr-only"></span></a></button>
        <button type="button" className="btn btn-warning mx-1"><a className="nav-link " href="#gymPlans"><b>Gold plans</b><span className="sr-only"></span></a></button>
      </div>
    </div>
    <div className="carousel-item">
      <img src="Images/t.jpg" height={600} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>weight lifting result bodybuilding</h5>
        <p>Body is made only with the right techniques and tricks...</p>
        <button type="button" className="btn btn-success mx-1"><a className="nav-link " href="#gymPlans"><b>basic plan</b><span className="sr-only"></span></a></button>
        <button type="button" className="btn btn-danger mx-1"><a className="nav-link " href="#gymPlans"><b>Silver plan</b><span className="sr-only"></span></a></button>
        <button type="button" className="btn btn-warning mx-1"><a className="nav-link " href="#gymPlans"><b>Gold plans</b><span className="sr-only"></span></a></button>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </section>
        <section className="bg-light mt-5" id="Facility">
          <div className="container">
            <div className="row text-center">
              <div className="col-sm-12 col-md-12 mb-4">
                <h3 className="text-center mt-4 text-secondary">Facility</h3>
              </div>
              <div className="col-md-4">
                <div className="testimonial mb-5">
                  <div className="avatar mx-auto">
                    <img
                      src="Images/equip.jpg" 
                      width={270}
                      className="rounded-circle z-depth-1 img-fluid"
                      
                    />
                  </div>
                  <h4 className="font-weight-bold dark-grey-text mt-4">
                    Weight training
                  </h4>
                  </div>
              </div>

              <div className="col-md-4">
                <div className="testimonial mb-5">
                  <div className="avatar mx-auto">
                    <img
                      src="Images/peanut.jpg" 
                      width={270}
                      className="rounded-circle z-depth-1 img-fluid"
                    />
                  </div>
                  <h4 className="font-weight-bold dark-grey-text mt-4">
                    Diet plan and nutritions
                  </h4>
                  </div>
              </div>
              <div className="col-md-4">
                <div className="testimonial mb-5">
                  <div className="avatar mx-auto">
                    <img
                      src="Images/equipm1.jpg"
                      width={270}
                      className="rounded-circle z-depth-1 img-fluid"
                    />
                  </div>
                  <h4 className="font-weight-bold dark-grey-text mt-4">
                    Cardio
                  </h4>
                </div>
              </div>
              <div className="col-md-4">
                <div className="testimonial mb-5">
                  <div className="avatar mx-auto">
                    <img
                      src="Images/yoga.jpg" 
                      width={270}
                      className="rounded-circle z-depth-1 img-fluid"
                    />
                  </div>
                  <h4 className="font-weight-bold dark-grey-text mt-4">
                    Yoga training
                  </h4>
                  </div>
              </div>

              <div className="col-md-4">
                <div className="testimonial mb-5">
                  <div className="avatar mx-auto">
                    <img
                      src="Images/zumba.jpg" 
                      width={270}
                      className="rounded-circle z-depth-1 img-fluid"
                    />
                  </div>
                  <h4 className="font-weight-bold dark-grey-text mt-4">
                    zumba
                  </h4>
                  </div>
              </div>
              <div className="col-md-4">
                <div className="testimonial mb-5">
                  <div className="avatar mx-auto">
                    <img
                      src="Images/steam.jpg"
                      width={270}
                      className="rounded-circle z-depth-1 img-fluid"
                    />
                  </div>
                  <h4 className="font-weight-bold dark-grey-text mt-4">
                    Steam shower
                  </h4>
                </div>
              </div>
            </div>
          </div>
          </section>
        <section className="" id="gymPlans">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12">
                <h3 className="text-center mt-4 text-secondary">Plans</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4 mb-5">
                <div className="card mt-4">
                  <img className="card-img-top" src="Images/t-1.jpg" alt="" />
                  <div className="card-body">
                    <h4 className="card-title text-secondary">Gold <em className="text-danger">(15000₹/ 1year)</em></h4>
                    <p className="card-text text-secondary">
                      this plan is limited for 1 year and services included following:
                      <ul>
                      <li>cardio ✔️</li>
                      <li>yoga ✔️</li>
                      <li>weight training ✔️</li>
                      <li>diet plan ✔️</li>
                      <li>Zumba ✔️</li>
                      <li>steam shower ✔️</li>
                      </ul>
                    </p>
                  </div>
                  <div className="card-footer">
                    <button onClick={()=>navigate("/create-subscription", {state:{price:15000,limit: '1 Year',Package:'Gold'}})} className="btn btn-primary">
                      Buy
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 mb-5">
                <div className="card mt-4">
                  <img className="card-img-top" src="Images/t-1.jpg" alt="" />
                  <div className="card-body">
                    <h4 className="card-title text-secondary">Silver <em className="text-danger">(8000₹/ 6m)</em></h4>
                    <p className="card-text text-secondary">
                    this plan is limited for 6 month and services included following:
                      <ul>
                      <li>cardio ✔️</li>
                      <li>yoga ❌</li>
                      <li>weight training ✔️</li>
                      <li>diet plan ✔️</li>
                      <li>Zumba ❌</li>
                      <li>steam shower ❌</li>
                      </ul>
                    </p>
                  </div>
                  <div className="card-footer">
                  <button onClick={()=>navigate("/paymentcart",{state:{price:8000,limit:"6 Months",Package:'Silver'}})} className="btn btn-primary">
                      Buy
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 mb-5">
                <div className="card mt-4">
                  <img className="card-img-top" src="Images/t-1.jpg" alt="" />
                  <div className="card-body">
                    <h4 className="card-title text-secondary">basic <em className="text-danger">(1500₹/ 1m)</em></h4>
                    <p className="card-text text-secondary">
                    this plan is limited for 1 month and services included following:
                      <ul>
                      <li>cardio ✔️</li>
                      <li>yoga ❌</li>
                      <li>weight training ✔️ </li>
                      <li>diet plan ❌</li>
                      <li>Zumba ❌</li>
                      <li>steam shower ❌</li>
                      </ul>
                    </p>
                  </div>
                  <div className="card-footer">
                  <button onClick={()=>navigate("/paymentcart", {state:{price:1500,limit:"1 Month",Package:'Basic'}})} className="btn btn-primary">
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
        <h3 className="text-center mt-4 text-secondary" id="aboutGymno">About Gymno</h3>
          <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        What is Gymno? #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Gymno is National level fitness center.</strong> It is built in 2023, We observe the fitness market and examine that most of fitness centers are offline they have no existence online . thats why we build this application and through we provide fitness training to our customer.International level training is our brand that builds us world class fitness center
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        What is Goal of Gymno? #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Goal of gymno is to spread awarness of fitness in india.</strong> our fitness center brings 5000 happy fitness freak to gymno in just one month and our goal is to increase this number and bring every unhealthy person to gymno center and motivate them to become a fit and slim so our india make fit
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Why Gymno? #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Gymno is first class personal training fitness center.</strong>Our fitness trainer have great experience in fitness training and our diet plan is 99.99% aprooved by many nutritions and doctors.our diet plan and trining can anyone follow even pregnet lady, elder, younger, children also. with 100% study on your body we provide you training and diet
      </div>
    </div>
  </div>
</div>
</section>
<section>
        <div>
        <h3 className="text-center mt-4 text-secondary " id="BMI">BMI Calculator</h3>
        <div className="row d-flex justify-content-center">
          <div className="col-sm-5 mb-5">
                <div className="card d-flex justify-content-center mt-4">
                  <img className="card-img-top" src="Images/bmi.jpg" alt="" />
                  </div>
                  </div>
          <div className="col-sm-5 mb-5">
                <div className="card mt-4">
                  <img className="card-img-top" src="Images/bmi2.jpg" height={294} alt="" />
                  </div>
                  </div>
                  </div>
      <input className="form-control my-3" id="exampleFormControlInput1" type="text" placeholder="Weight (in kg)" onChange={e => setWeight(e.target.value)} />
      </div><div>
      <input className="form-control my-3" id="exampleFormControlInput1" type="text" placeholder="Height (in centimer)" onChange={e => setHeight(e.target.value)} />
      <div> 
        <div className="text-center my-1">
      <button className="btn btn-primary" onClick={calculateBMI}>Calculate BMI</button></div>
      </div>
      <div className="text-center">
      <div className="container my-2">BMI: <strong>{bmi}</strong></div></div>
    </div>    
        </section>
        <section className="bg-light mt-5" id="trainers">
          <div className="container">
            <div className="row text-center">
              <div className="col-sm-12 col-md-12 mb-4">
                <h3 className="text-center mt-4 text-secondary">Our Trainers</h3>
              </div>
              <div className="col-md-4">
                <div className="testimonial mb-5">
                  <div className="avatar mx-auto">
                    <img
                      src="Images/gym4.jpg" 
                      width={340}
                      className="rounded-circle z-depth-1 img-fluid"
                    />
                  </div>
                  <h4 className="font-weight-bold dark-grey-text mt-4">
                    Anna Deynah
                  </h4>
                  <h6 className="font-weight-bold blue-text my-3">
                    diet & meal expert
                  </h6>
                  <p className="font-weight-normal dark-grey-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod eos id officiis hic tenetur quae quaerat ad velit ab
                    hic tenetur.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="testimonial mb-5">
                  <div className="avatar mx-auto">
                    <img
                      src="Images/gym2.jpg" 
                      width={340}
                      className="rounded-circle z-depth-1 img-fluid"
                    />
                  </div>
                  <h4 className="font-weight-bold dark-grey-text mt-4">
                    John Doe
                  </h4>
                  <h6 className="font-weight-bold blue-text my-3">
                    weight gain & weight loss expert
                  </h6>
                  <p className="font-weight-normal dark-grey-text">
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    corporis suscipit laboriosam, nisi ut aliquid commodi.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="testimonial mb-5">
                  <div className="avatar mx-auto">
                    <img
                      src="Images/gym.jpg"
                      width={340}
                      className="rounded-circle z-depth-1 img-fluid"
                    />
                  </div>
                  <h4 className="font-weight-bold dark-grey-text mt-4">
                    Maria Kate
                  </h4>
                  <h6 className="font-weight-bold blue-text my-3">
                    yoga & zumba expert
                  </h6>
                  <p className="font-weight-normal dark-grey-text">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti.
                  </p>
                </div>
              </div>
            </div>
          </div>
          </section>
      </div>
      
    </>
  );
}

export default Contentp;
