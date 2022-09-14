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

  const [load, setLoad] = useState(false);
  const [error, setError] = useState('')
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    setLoad(true)
    setError('')
    dispatch(asyLogin(data)).then(user => {
      setTimeout(() => {
        if (user.ok === 200) {
          history.push('/');
        }
        else {
          setError(user.error)
        }
        setLoad(false)
      }, 500);

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
              {error && <div className="show-error">{error}</div>}
              <input
                {...register("email", { 
                  required: "Email khong duoc rong",
                   
                    pattern: {
                      value : /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "email ko dung dinh dang"
                    } })}
                type="text"
                className="form-control"
                placeholder="Email"
              />
               {errors.email && <span className="error-class">{errors.email.message}</span>}
              {/* {errors.email && <span className="error-class">Không  được rỗng và lớn hơn 2</span>} */}
              <input
                {...register("password", { minLength: 6, required: true })}
                type="password"
                className="form-control"
                placeholder="Mật khẩu"
              />
              {errors.password && <span className="error-class">Độ dài tối thiểu là 6</span>}
              <div className="showMessage" >
                {load && <>Dang loadd</>}
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
