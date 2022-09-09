import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const ChangePass = () => {

    const handleSubmitForm = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <Header />
            <main>
                <div className="ass1-login">
                    <div className="ass1-login__content">
                        <p>Đổi mật khẩu</p>
                        <div className="ass1-login__form">
                            <form action="#" onClick={handleSubmitForm}>
                                <input type="password" className="form-control" placeholder="Mật khẩu cũ" required />
                                <input type="password" className="form-control" placeholder="Mật khẩu mới" required />
                                <input type="password" className="form-control" placeholder="Xác nhận mật khẩu mới" required />
                                <div className="ass1-login__send justify-content-center">
                                    <button type="submit" className="ass1-btn">Gửi</button>
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

export default ChangePass;
