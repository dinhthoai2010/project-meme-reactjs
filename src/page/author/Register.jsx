import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';



const Register = () => {
    const [user, setUser] = useState({
        fullName : '',
        email : '',
        pass : '',
    });

    const [repass, setPass] = useState('');

    const handleCheckPassword = (eve) => {
        const pass = eve.target.value();

        console.log(user)
        setPass(pass)
    }

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
                                <input type="text" onChange={(eve) => setUser(eve.target.value)} className="form-control" value={user.fullName} placeholder="Tên hiển thị" required />
                                <input type="email" onChange={(eve) => setUser(eve.target.value)} value={user.email} className="form-control" placeholder="Email" required />
                                <input type="password" onChange={(eve) => setUser(eve.target.value)} value={user.pass} className="form-control" placeholder="Mật khẩu" required />
                                <input type="password" value={repass} onChange={handleCheckPassword} className="form-control" placeholder="Nhập lại mật khẩu" required />
                                <div className="ass1-login__send">
                                    <Link to="/auth/login">Đăng nhập</Link>
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