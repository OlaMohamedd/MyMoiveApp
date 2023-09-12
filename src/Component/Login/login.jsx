import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
export default function login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [userError, setUserError] = useState({
    emailErr: "",
    passwordErr: "",
  });

  const emailReg = /^[a-zA-Z0-9]{4,15}(@)(gmail|yahoo)(.com)$/;
  const passwordReg = /^[a-z]+[A-Z]+[*&%$#@]+[0-9]+$/;
  const login = (e) => {
    switch (e.target.name) {
      case "email":
        setUser({ ...user, email: e.target.value });
        setUserError({
          ...userError,
          emailErr:
            e.target.value.length == 0
              ? "Email is Required"
              : emailReg.test(e.target.value) == false
              ? "Email must contains @ "
              : "",
        });
        break;
        case "password":
          setUser({ ...user, password: e.target.value });
          setUserError({
            ...userError,
            passwordErr:
              e.target.value.length == 0
                ? "password Required"
                : passwordReg.test(e.target.value) == false ||
                  e.target.value.length <= 6
                ? "Password not less than 7 character and must have one of [*&%$#]"
                : "",
          });
          break;
      default:
        return;
    }
  };

  const submitHandel = (eve) => {
    eve.preventDefault();
  };

  return (
    <>
      <section className="login-block bigDiv">
        <div className="con">
          <div className="row">
            <div className="col-md-4 login-sec">
              <h2 className="text-center">Login Now</h2>
              <form  onSubmit={(eve) => {
                submitHandel(eve);
              }} className="login-form">
                <div className="form-group">
                  <label
                    for="exampleInputEmail1"
                    className="text-center  fontyy"
                  >
                
                  </label>
                  <input
                    type="text"
                    name="email"
                    className={`form-control  ${userError.emailErr && "border-danger shadow-none"
                      }`}
                    value={user.email}
                    onChange={(e) => {
                      login(e);
                    }}
                    placeholder="Email"
                  />
                </div>
                <p style={{ color: "red" }}>{userError.emailErr}</p>
                <div className="form-group">
                  <label
                    for="exampleInputPassword1"
                    className="text-center  fontyy"
                  >
           
                  </label>
                  <input
                    type="password"
                    name="password"Link
                    className={`form-control  ${userError.passwordErr && "border-danger shadow-none"
                      }`}
                    value={user.password}
                    onChange={(e) => {
                      login(e);
                    }}
                    placeholder="Password"
                  />
                </div>
                <p style={{ color: "red" }}>{userError.passwordErr}</p>
                <div className="form-check">
                  <label className="form-check-label">
                    <input type="checkbox" className="form-check-input" />
                    <small className="fontyy">Remember Me</small>
                  </label>
                  <button type="submit" className="btn btn-login float-right subb"> Submit </button>
                  <button className="btn btn-none text-primary"><Link to="/" style={{ textDecoration: "none"}}>Go to Home Page</Link></button>
                </div>
              </form>
              <div className="copy-text fontyy">
                Created by <a href="http://endimension.com">Ola Geme3</a>
              </div>
            </div>
            <div className="col-md-8 banner-sec">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    className="active"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="2"
                  ></li>
                </ol>
                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active">
                    <img
                      className="d-block img-fluid"
                      src="https://help.nflxext.com/0af6ce3e-b27a-4722-a5f0-e32af4df3045_what_is_netflix_5_en.png"
                      alt="First slide"
                      height="100%"
                      width="100%"
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <div className="banner-text">
                        <h2>Welcome to Netflix</h2>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                   
                    <div className="carousel-caption d-none d-md-block">
                      <div className="banner-text">
                        <h2>Please Login</h2>
                        <p>
                          Please enter your Email and Password to Login{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
