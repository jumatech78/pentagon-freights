// import React,{useContext} from "react";
// import {useNavigate} from 'react-router-dom'
// import { GlobalContext } from "../../GlobalContext/GlobalContext";
// function Login() {
//   const navigate = useNavigate()
//   const {loginWithGoogle} = useContext(GlobalContext)
//   return (
//     <div class="w-[600px]  bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
//       <form class="space-y-6" >
//         <h5 class="text-xl font-medium text-gray-900 dark:text-white">
//           Sign in to our platform
//         </h5>
//         <div>
//           <label
//             for="email"
//             class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//           >
//             Your email
//           </label>
//           <input
//             type="email"
//             name="email"
//             id="email"
//             class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
//             placeholder="name@company.com"
//             required
//           />
//         </div>
//         <div>
//           <label
//             for="password"
//             class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//           >
//             Your password
//           </label>
//           <input
//             type="password"
//             name="password"
//             id="password"
//             placeholder="••••••••"
//             class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
//             required
//           />
//         </div>
//         <div class="flex items-start">
//           <div class="flex items-start">
//             <div class="flex items-center h-5">
//               <input
//                 id="remember"
//                 type="checkbox"
//                 value=""
//                 class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
//                 required
//               />
//             </div>
//             <label
//               for="remember"
//               class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//             >
//               Remember me
//             </label>
//           </div>
//           {/* // eslint-disable-next-line jsx-a11y/anchor-is-valid */}
//           <a
//             href="#"
//             class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
//           >
//             Lost Password?
//           </a>
//         </div>
//         <button
//         onClick={()=>{
//           // navigate('/dashboard')
//           loginWithGoogle()
//         }}

// class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//         >
//           Login to your account
//         </button>
//         <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
//           Not registered?{" "}
//           <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">
//             Create account
//           </a>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Login;

import { useState, useContext } from 'react'
import './styles.css'
// import {useNavigate} from 'react-router-dom'
import { GlobalContext } from "../../GlobalContext/GlobalContext";
const Form = () => {
  const { loginWithGoogle } = useContext(GlobalContext)
  const [inputs, setinputs] = useState({
    email: "",
    password: ""
  });

  const [warnemail, setwarnemail] = useState(false);
  const [warnpass, setwarnpass] = useState(false);
  const [danger, setdanger] = useState(true);

  const [eye, seteye] = useState(true);
  const [pass, setpass] = useState("password");


  const inputEvent = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if (name == "email") {
      if (value.length > 0) {
        setdanger(true);
      }
    }
    setinputs((lastValue) => {
      return {
        ...lastValue,
        [name]: value
      }
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    setwarnemail(false);
    setwarnpass(false);
    if (inputs.email.length < 1) { setdanger(false); } if (inputs.email == "") { setwarnemail(true); } else if (inputs.password == "") { setwarnpass(true); } else { alert("Logged in Successfully"); }
  }; const Eye = () => {
    if (pass == "password") {
      setpass("text");
      seteye(false);
    } else {
      setpass("password");
      seteye(true);
    }
  };

  return (
    <div className='flex justify-center'>
      <div className="container">
        <div className="card">
          <div className="form">
            <div className="left-side">
              <img src="https://www.adhidarmacargo.com/uploads/cargo.jpg" />
            </div>

            <div className="right-side">


              <div className="hello">
                <h2>Hello Again!</h2>
              </div>

              <form onSubmit={submitForm}>

                <div className="input_text">
                  <input className={` ${warnemail ? "warning" : ""}`} type="text" placeholder="Enter Email" name="email" value={inputs.email} onChange={inputEvent} />
                  <p className={` ${danger ? "danger" : ""}`}><i className="fa fa-warning"></i>Please enter a valid email address.</p>
                </div>
                <div className="input_text">
                  <input className={` ${warnpass ? "warning" : ""}`} type={pass} placeholder="Enter Password" name="password" value={inputs.password} onChange={inputEvent} />
                  <i onClick={Eye} className={`fa ${eye ? "fa-eye-slash" : "fa-eye"}`}></i>
                </div>
                <div className="recovery">
                  <p>Recovery Password</p>
                </div>
                <div className="btn">
                  <button type="submit">Sign in</button>
                </div>

              </form>

              <hr />
              <div className="or">
                <p>or signin with</p>
              </div>
              <div className="boxes">
                <span onClick={() => {
                  loginWithGoogle()
                }} ><img src="https://imgur.com/XnY9cKl.png" /></span>
                <span><img src="https://imgur.com/ODlSChL.png" /></span>
                <span><img src="https://imgur.com/mPBRdQt.png" /></span>
              </div>
            </div>
          </div>
        </div>
      </div>



    </div>
  );
}
export default Form;