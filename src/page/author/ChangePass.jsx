import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { asyChangePassword } from "../../store/author/action";
const ChangePass = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const newPassword = useRef({});
    newPassword.current = watch("newPassword", "");

    const onSubmit = data => {
        dispatch(asyChangePassword(data)).then(data => {
            console.log(data)
            if (data.status === 200 && data.error!=='') {
                history.push('/');
            }
            else alert(data.error)
        })
    };

    return (
        <main>
            <div className="ass1-login">
                <div className="ass1-login__content">
                    <p>Đổi mật khẩu</p>
                    <div className="ass1-login__form">
                        <form action="#" className="form-register" onSubmit={handleSubmit(onSubmit)}>
                            <input type="password"
                                className="form-control"
                                placeholder="Mật khẩu cũ"
                                {...register("password", {
                                    required: "Pass khong duoc rong",
                                    minLength: {
                                        value: 6,
                                        message: "Độ dài tối thiểu là 6"
                                    }
                                })}
                            />
                            {errors.password && <span className="error-class">{errors.password.message}</span>}

                            <input type="password"
                                className="form-control"
                                placeholder="Mật khẩu mới"
                                {...register("newPassword", {
                                    required: "Pass khong duoc rong",
                                    minLength: {
                                        value: 6,
                                        message: "Độ dài tối thiểu là 6"
                                    }
                                })} />
                            {errors.newPassword && <span className="error-class">{errors.newPassword.message}</span>}

                            <input type="password"
                                className="form-control"
                                placeholder="Xác nhận mật khẩu mới"
                                {...register("reNewPassword", { validate: value =>
                                        value === newPassword.current || "pass không giống nhau"})} />
                            {errors.reNewPassword && <span className="error-class">{errors.reNewPassword.message}</span>}

                            <div className="ass1-login__send justify-content-center">
                                <button type="submit" className="ass1-btn">Gửi</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ChangePass;
