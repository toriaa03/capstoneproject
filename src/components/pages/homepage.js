import React from 'react';
import Work from "../images/work.jpg";
import Rain from "../images/rain.gif";

export default function() {
    return (
        <div className="homepage-content-wrapper">
            <div className="left-column">

              <div className="top-squares-wrapper">
                      <div className="top-square-text-wrapper">
                          <div className="title"> 
                              <h1>Victoria Faletui</h1>
                              <h2>I might put a logo here instead</h2>
                          </div>
                      </div>

                      <div className="top-square-image-wrapper">
                          <div className="image">
                              <img src={Work} alt="work" />
                          </div>
                      </div>
              </div>

                  <div className="bottom-squares-wrapper">
                          <div className="bottom-square-image-wrapper">
                              <div className="image">
                                  <img src={Rain} alt="raingif" />
                              </div>
                          </div>

                          <div className="bottom-square-text-wrapper">
                              <div className="caption">
                                  <h2>Welcome to my homepage</h2>
                                  <p>Here is my homepage. Here is where homepage content needs to go.
                                  Maybe a small summary about myself..or not.
                                  I'll probably put a small summary about this blog site.</p>
                              </div>
                          </div>
                  </div>
              </div>


            <div className="right-column">
              <div className="input-form">
                <input
                type="username, email"
                name="username, email"
                placeholder="Username or email"
                />
                </div>

              <div className="input-form">
                <input
                type="password"
                name="password"
                placeholder="Password"
                />
              </div>
              
              <div className="btn">
                  <button>Log In</button>
                  <button>Create an account</button>
              </div>

            </div>

        </div>
    )
}
// import Slider from '@farbenmeer/react-spring-slider';
// import PropTypes from 'prop-types';
// import Slider from 'react-animated-slider';
// import 'react-animated-slider/build/horizontal.css';


// const Slider = () => {
//     return <div>content</div>
// }

// const SliderCSS = css`
//     position: relative;
//     height: 100vh;
//     width: 100vw;
//     margin: 0 auto;
//     overflow: hidden;
// `

// export default Slider;


// 				<div className="homepage-content-wrapper">
//               <div className="left-column">

//                 <div className="top-squares-wrapper">
//                         <div className="top-square-text-wrapper">
//                             <div className="title"> 
//                                 <h1>Victoria Faletui</h1>
//                                 <h2>I might put a logo here instead</h2>
//                             </div>
//                         </div>

//                         <div className="top-square-image-wrapper">
//                             <div className="image">
//                                 <img src={Work} alt="work" />
//                             </div>
//                         </div>
//                 </div>

//                     <div className="bottom-squares-wrapper">
//                             <div className="bottom-square-image-wrapper">
//                                 <div className="image">
//                                     <img src={Rain} alt="raingif" />
//                                 </div>
//                             </div>

//                             <div className="bottom-square-text-wrapper">
//                                 <div className="caption">
//                                     <h2>Welcome to my homepage</h2>
//                                     <p>Here is my homepage. Here is where homepage content needs to go.
//                                     Maybe a small summary about myself..or not.
//                                     I'll probably put a small summary about this blog site.</p>
//                                 </div>
//                             </div>
//                     </div>
//                 </div>


//               <div className="right-column">
//                 <div className="input-form">
//                   <input
//                   type="username, email"
//                   name="username, email"
//                   placeholder="Username or email"
//                   />
//                   </div>

//                 <div className="input-form">
//                   <input
//                   type="password"
//                   name="password"
//                   placeholder="Password"
//                   />
//                 </div>
                
//                 <div className="btn">
//                     <button>Log In</button>
//                     <button>Create an account</button>
//                 </div>

//               </div>

//           </div>
// 		</Slider>
// 	)
// }



      