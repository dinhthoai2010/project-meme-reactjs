import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';

const Register = () => {
    return (
        <div>
            <main>
                <div className="ass1-login">
                    <div className="ass1-login__logo">
                        <a href="index.html" className="ass1-logo">TCL Meme</a>
                    </div>
                    <div className="ass1-login__content">
                        <p>Đăng ký một tài khoản</p>
                        <div className="ass1-login__form">
                            <form action="#">
                                <input type="text" className="form-control" placeholder="Tên hiển thị" required />
                                <input type="email" className="form-control" placeholder="Email" required />
                                <input type="password" className="form-control" placeholder="Mật khẩu" required />
                                <input type="password" className="form-control" placeholder="Nhập lại mật khẩu" required />
                                <div className="ass1-login__send">
                                    <Link to="/author/login">Đăng nhập</Link>
                                    <button type="submit" className="ass1-btn">Đăng ký</button>
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

export default Register;