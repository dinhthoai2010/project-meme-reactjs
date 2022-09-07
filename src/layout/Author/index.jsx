import React from 'react';
import Footer from './Footer';

const index = () => {
    return (
        <>
            <header>
            </header>
            <main>
                <div className="ass1-login">
                    <div className="ass1-login__logo">
                        <a href="index.html" className="ass1-logo">TCL Meme</a>
                    </div>
                    <div className="ass1-login__content">
                        <p>Đăng nhập</p>
                        <div className="ass1-login__form">
                            <form action="#">
                                <input type="text" className="form-control" placeholder="Email" required />
                                <div className="ass1-input-copy">
                                    <input type="password" className="form-control" placeholder="Mật khẩu" required />
                                    <a href="#">Copy</a>
                                </div>
                                <div className="ass1-login__send">
                                    <a href="dang-ky.html">Đăng ký một tài khoản</a>
                                    <button type="submit" className="ass1-btn">Đăng nhập</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default index;