import React, { useEffect, useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { getToken } from '../../helpers';
import { asyRegister } from '../../store/author/action';
import { useDispatch } from "react-redux";
import { useForm } from 'react-hook-form';



const Register = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const password = useRef({});
    password.current = watch("password", "");

    const history = useHistory();

    const [load, setLoad] = useState(false);
    const [error, setError] = useState('')


    const token = getToken();
    const dispatch = useDispatch();
    useEffect(() => {
        if (token !== null) {
            history.push('/');
        }
    }, []);

    const onSubmit = data => {
        setLoad(true)
        setError('')
        dispatch(asyRegister(data)).then(user => {
            setTimeout(() => {
                if (user.status === 200) {
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
                    <p>Đăng ký một tài khoản</p>
                    <div className="ass1-login__form">
                        <form onSubmit={handleSubmit(onSubmit)} className="form-register">
                            {error && <div className="show-error">{error}</div>}
                            <input type="text"
                                className="form-control"
                                placeholder="Tên hiển thị"
                                name='fullname'
                                {...register("fullname", { required: true })}
                            />
                            {errors.fullname && <span className="error-class">Không  được rỗng </span>}

                            <input type="email"
                                className="form-control"
                                placeholder="Email"
                                name='email'
                                {...register("email", { minLength: 2, required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
                            />
                            {errors.email && <span className="error-class">Email không đúng định dạng</span>}


                            <input type="password"
                                {...register("password", {
                                    required: "Pass khong duoc rong",
                                    minLength: {
                                        value: 6,
                                        message: "Độ dài tối thiểu là 6"
                                    }
                                })}
                                className="form-control"
                                placeholder="Mật khẩu" />
                            {errors.password && <span className="error-class">{errors.password.message}</span>}
                            <input
                                type="Password"
                                {...register("repassword", {
                                    validate: value =>
                                        value === password.current || "pass không giống nhau"
                                })}
                                className="form-control"
                                placeholder="Nhập lại mật khẩu" />
                            {errors.repassword && <span className="error-class">{errors.repassword.message}</span>}

                            {load && <>Dang loadd</>}
                            <div className="ass1-login__send">

                                <Link to="/auth/login">Đăng nhập</Link>
                                <button type="submit" className="ass1-btn">Đăng ký</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Register;