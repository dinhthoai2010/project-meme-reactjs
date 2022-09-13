import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getToken } from "../../helpers";
import { asyLogin } from "../../store/author/action";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const token = getToken();
  useEffect(() => {
    if (token !== null) {
      history.push('/');
    }
  }, []);
  
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    dispatch(asyLogin(data)).then(user => {
      if (user.ok === 200) {
        history.push('/');
      }
    })
  };

  return (
    <main>
      <div className="ass1-login">
        <div className="ass1-login__logo">
          <a href="/" className="ass1-logo">TCL Meme</a>
        </div>
        <div className="ass1-login__content">
          <p>Đăng nhập</p>
          <div className="ass1-login__form">
            <form className="form-login" onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("email", { minLength: 2, required: "Email Address is required" })}
                type="text"
                className="form-control"
                placeholder="Email"
              />
              {errors.email && <span className="error-class">Không  được rỗng và lớn hơn 2</span>}
              <input
                {...register("password", { minLength: 6, required: true })}
                type="password"
                className="form-control"
                placeholder="Mật khẩu"
              />
              {errors.password && <span className="error-class">Độ dài tối thiểu là 6</span>}
              <div className="showMessage" >
                <>load</>
              </div>

              <div className="ass1-login__send">
                <Link to="/auth/register">Đăng ký một tài khoản</Link>
                <button type="submit" className="ass1-btn">
                  Đăng nhập
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
