import React, { useState } from "react";
import "./signup.css";
import { AiFillFacebook } from "react-icons/ai";
import { SiTwitter } from "react-icons/si";
import { BiSolidUser } from "react-icons/bi";
import { GrMail } from "react-icons/gr";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiSolidSchool } from "react-icons/bi";
import { BiSolidLockAlt } from "react-icons/bi";

export default function Signup() {
  
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [userError, setUserError] = useState({
    fullNameErr: "",
    emailErr: "",
    phoneNumberErr: "",
    passwordErr: "",
    repeatPasswordErr: "",
  });

  const emailReg = /^[a-zA-Z0-9]{4,15}(@)(gmail|yahoo)(.com)$/;
  const passwordReg = /^[a-z]+[A-Z]+[*&%$#@]+[0-9]+$/;

  const formHandel = (eve) => {
    switch (eve.target.name) {
      case "fullName":
        setUser({ ...user, fullName: eve.target.value });
        setUserError({
          ...userError,
          fullNameErr:
            eve.target.value.length == 0
              ? "Full Name Required"
              : eve.target.value.includes(" ")
              ? "Full Name not contains spaces"
              : "",
        });
        break;
      case "email":
        setUser({ ...user, email: eve.target.value });
        setUserError({
          ...userError,
          emailErr:
            eve.target.value.length == 0
              ? "Email is Required"
              : emailReg.test(eve.target.value) == false
              ? "Email must contains @ "
              : "",
        });
        break;
      case "password":
        setUser({ ...user, password: eve.target.value });
        setUserError({
          ...userError,
          passwordErr:
            eve.target.value.length == 0
              ? "password Required"
              : passwordReg.test(eve.target.value) == false ||
                eve.target.value.length <= 6
              ? "Password not less than 7 character and must have one of [*&%$#]"
              : "",
        });
        break;
      case "repeatPassword":
        setUser({ ...user, repeatPassword: eve.target.value });
        setUserError({
          ...userError,
          repeatPasswordErr:
            user.password == user.repeatPassword
              ? "repeatPassword Not matches !"
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
      <div className="container20">
        <div className="card">
          <div className="card-body mx-auto" style={{ maxWidth: "400px" }}>
            <h4 className="card-title mt-3 text-center  fonn">
              Create Account
            </h4>
            <p className="text-center  fonn">
              Get started with your free account
            </p>
            <p>
              <button href="" className="btn btn-block btn-twitter">
                {" "}
                <SiTwitter /> Login via Twitter
              </button>
              <button href="" className="btn btn-block btn-facebook">
                {" "}
                <AiFillFacebook /> Login via facebook
              </button>
            </p>
            <p className="divider-text">
              <span className="bg-light orr">OR</span>
            </p>
            <form
              onSubmit={(eve) => {
                submitHandel(eve);
              }}
            >
              {/* <!-- form-group// --> */}
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    {" "}
                    <BiSolidUser />{" "}
                  </span>
                </div>
                <input
                  name="fullName"
                  value={user.fullName}
                  className={`form-control  ${
                    userError.fullNameErr && "border-danger shadow-none"
                  }`}
                  placeholder="Full name"
                  type="text"
                  onChange={(eve) => {
                    formHandel(eve);
                  }}
                />
              </div>
              <p style={{ color: "red" }}>{userError.fullNameErr}</p>
              {/* <!-- form-group// --> */}
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    {" "}
                    <GrMail />
                  </span>
                </div>
                <input
                  placeholder="Email address"
                  type="email"
                  name="email"
                  className={`form-control  ${
                    userError.emailErr && "border-danger shadow-none"
                  }`}
                  value={user.email}
                  onChange={(eve) => {
                    formHandel(eve);
                  }}
                />
              </div>
              <p style={{ color: "red" }}>{userError.emailErr}</p>
              {/* <!-- form-group// --> */}
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <BsFillTelephoneFill />
                  </span>
                </div>
                <select className="custom-select" style={{ maxWidth: "120px" }}>
                  <option selected="">+971</option>
                  <option value="1">+972</option>
                  <option value="2">+198</option>
                  <option value="3">+02</option>
                </select>
                <input
                  name=""
                  className="form-control"
                  placeholder="Phone number"
                  type="text"
                />
              </div>
              {/* <!-- form-group// --> */}
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    {" "}
                    <BiSolidSchool />{" "}
                  </span>
                </div>
                <select className="form-control">
                  <option selected=""> Select job type</option>
                  <option>Developer</option>
                  <option>Manager</option>
                  <option>Accaunting</option>
                </select>
              </div>
              {/* <!-- form-group end.// --> */}
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    {" "}
                    <BiSolidLockAlt />{" "}
                  </span>
                </div>
                <input
                  placeholder="Create password"
                  type="password"
                  name="password"
                  className={`form-control  ${
                    userError.passwordErr && "border-danger shadow-none"
                  }`}
                  value={user.password}
                  onChange={(eve) => {
                    formHandel(eve);
                  }}
                />
              </div>
              <p style={{ color: "red" }}>{userError.passwordErr}</p>
              {/* <!-- form-group// --> */}
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    {" "}
                    <BiSolidLockAlt />{" "}
                  </span>
                </div>
                <input
                  name="repeatPassword"
                  placeholder="Repeat password"
                  type="password"
                  className={`form-control  ${
                    userError.repeatPasswordErr && "border-danger shadow-none"
                  }`}
                  value={user.repeatPassword}
                  onChange={(eve) => {
                    formHandel(eve);
                  }}
                />
              </div>
              <p style={{ color: "red" }}>{userError.repeatPasswordErr}</p>
              {/* <!-- form-group// -->*/}
              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-danger btn-block btttn "
                >
                  {" "}
                  Create Account{" "}
                </button>
              </div>
              {/* <!-- form-group// -->       */}
              <p className="text-center  fonn">
                Have an account? <a href="">Log In</a>{" "}
              </p>
            </form>
          </div>
        </div>
        {/* <!-- card.// --> */}
      </div>
    </>
  );
}
