import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { asyUpdateUser } from '../../store/author/action';

const Profile = () => {
    const user = useSelector(state => state.User.user)
    const [users, setUsers] = useState(null);
    const dispatch = useDispatch()

    const img = useRef();

    if (!user) return null;

    if (!users) {
        setUsers({
            id: user?.id,
            fullname: user.name,
            description: user.des,
            gender: user.gender,
            avatar: user.avatar
        })

    }
    if (!users) return null;

    const handleSubmitForm = (eve) => {
        eve.preventDefault();
        console.log(users)
        const formData = new FormData();
        const data = { ...users };
        for (const key in data) {
            formData.append(key, data[key]);
        }

        dispatch(asyUpdateUser(formData)).then(res => {
            console.log(res)
            if (res.status === 200) {
                
                alert("Thanh cong");
            }
            else if (res.status === 400) {
                alert(res.error)
            }
            else {
                alert(res.error)
            }
        })

    }

    const handleOnSelectImg = (event) => {
        setUsers(prev => ({
            ...prev, avatar: URL.createObjectURL(event.target.files[0]),
            obj_image: event.target.files[0]
        }))
    }

    return (
        <main>
            <div className="ass1-login">
                <div className="ass1-login__content">
                    <p>Profile</p>
                    <div className="ass1-login__form">
                        <div className="avatar">
                            <img src={users.avatar} alt="" />
                        </div>
                        <form action="#" onSubmit={handleSubmitForm}>
                            <input type="text" className="form-control" defaultValue={users.fullname} placeholder="Tên ..." required />
                            <select className="form-control" value={users.gender} onChange={e => setUsers({ ...users, gender: e.target.value })}>
                                <option value>Giới tính</option>
                                <option value="nam">Nam</option>
                                <option value="nu">Nữ</option>
                            </select>
                            <input type="file" name="avatar" onChange={handleOnSelectImg} placeholder="Ảnh đại diện" className="form-control" />
                            <textarea className="form-control" cols={30} rows={5} onChange={e => setUsers({ ...users, description: e.target.value })} placeholder="Mô tả ngắn ..." defaultValue={users.description} />
                            <div className="ass1-login__send justify-content-center">
                                <button type="submit" className="ass1-btn">Cập nhật</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Profile;