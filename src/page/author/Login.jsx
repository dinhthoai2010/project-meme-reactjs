import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Footer from "../../components/Footer";
import { asyLogin } from "../../store/author/action";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState({
    email: "admin@gmail.com",
    password: "123456"
  })


  const handleLogin = (e) => {
    e.preventDefault();
    setUser({
      email: "test01@gmail.com",
      password: '123456'
    })
    dispatch(asyLogin(user)).then(user => {
      if(user.ok===200){
        history.push('/');
      }
      
    })
  }
  return (
    <div>
      <header>
      </header>
      <main>
        <div className="ass1-login">
          <div className="ass1-login__logo">
            <a href="index.html" className="ass1-logo">
              TCL Meme
            </a>
          </div>
          <div className="ass1-login__content">
            <p>Đăng nhập</p>
            <div className="ass1-login__form">
              <form action="#" onClick={handleLogin}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  required
                />
                <div className="ass1-input-copy">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Mật khẩu"
                    required
                  />
                  <a href="/">Copy</a>
                </div>
                <div className="ass1-login__send">
                  <Link to="/author/register">Đăng ký một tài khoản</Link>
                  <button type="submit" className="ass1-btn">
                    Đăng nhập
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Login;
