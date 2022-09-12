import { useState } from 'react';
import { useSelector } from 'react-redux';
const Profile = () => {
    const user = useSelector(state => state.User.user)
    const [users, setUsers] = useState({});
   
    if (user.id === undefined) return null;
    if(users.id===undefined){
        setUsers({
            id: user.id,
            name: user.des
        })
        console.log("user:",user)
        console.log("users",users)
    }

    return (
        <main>
            <div className="ass1-login">
                <div className="ass1-login__content">
                    <p>Profile</p>
                    <div className="ass1-login__form">
                        <div className="avatar">
                            <img src={user.avatar} alt="" />
                        </div>
                        <form action="#">
                            <input type="text" className="form-control" defaultValue={user.name} placeholder="Tên ..." required />
                            <select className="form-control" value={user.gender} onChange={ e => setUsers(e.target.value)}>
                                <option value>Giới tính</option>
                                <option value="nam">Nam</option>
                                <option value="nu">Nữ</option>
                            </select>
                            <input type="file" name="avatar"  placeholder="Ảnh đại diện" className="form-control" />
                            <textarea className="form-control" cols={30} rows={5} placeholder="Mô tả ngắn ..." defaultValue={user.des} />
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