import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { handleUploadImage } from '../../store/post/actions';


const UploadImg = () => {
    const dispatch = useDispatch()
    const [dataUpload, setDataUpload] = useState(
        {
            url_image: '',
            post_content: "",
            category: [],
            obj_image: null
        }
    );

    const handleSubmit = () => {
        const formData = new FormData();
        const data = { ...dataUpload };
        data.category = data.category.join(',');
        for (const key in data) {
            formData.append(key, data[key]);
        }

        dispatch(handleUploadImage(formData)).then(res => {
            console.log(res)
            if(res.status === 200) {
                alert("Thanh cong");
                
                setDataUpload({
                    url_image: '',
                    post_content: "",
                    category: [],
                    obj_image: null
                });

            }
            else if (res.status===400) {
                alert(res.error )
            }   
            else {
                alert(res.error )
            }
        })

    }


    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="ass1-section ass1-section__edit-post">
                            <FormUploadImage formData={{
                                dataUpload, setDataUpload
                            }} />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <aside className="ass1-aside ass1-aside__edit-post">
                            <div>
                                <button onClick={handleSubmit} className="ass1-btn">Đăng bài</button>
                            </div>
                            <ListCategorySideBar formData={{
                                dataUpload, setDataUpload
                            }} />
                            <ShareIcon />
                        </aside>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default UploadImg;

const ShareIcon = () => {
    return (
        <>
            <div className="ass1-aside__get-code">
                <p>Share Link</p>
            </div>
            <div className="ass1-aside__social">
                <Link to="/" className="ass1-btn-social__facebook ass1-btn-social"><i className="fa fa-facebook" aria-hidden="true" /></Link>
                <Link to="/" className="ass1-btn-social__twitter ass1-btn-social"><i className="fa fa-twitter" aria-hidden="true" /></Link>
                <Link to="/" className="ass1-btn-social__google ass1-btn-social"><i className="fa fa-google-plus" aria-hidden="true" /></Link>
            </div>
        </>
    )
}

const ListCategorySideBar = ({ formData }) => {
    const category = useSelector(state => state.Post.listCategory);
    const { dataUpload, setDataUpload } = formData;

    if (category.length === 0) return null;

    const handleCheck = (item) => {
        setDataUpload(prev => {
            return dataUpload.category.includes(item.id)
                ? { ...prev, category: prev.category.filter(value => value !== item.id) }
                : { ...prev, category: [...prev.category, item.id] }
        });
    }

    const checkCheck = (item) => {
        return dataUpload.category.includes(item.id);
    }

    return (
        <>
            <div className="ass1-aside__edit-post-head">
                <span style={{ display: 'block', width: '100%', marginBottom: '10px' }}>Chọn danh mục</span>
                {
                    category && category.map(item =>
                        <label key={item.id} className="ass1-checkbox">
                            <input type="checkbox" name={`category${item.id}`} onChange={() => handleCheck(item)} checked={checkCheck(item)} />
                            <span />
                            <p>{item.text}</p>
                        </label>
                    )
                }
            </div>
        </>
    )
}

const FormUploadImage = ({ formData }) => {
    const { dataUpload, setDataUpload } = formData;

    const uploadIma = useRef()

    const handlerSetImage = (ele) => {
        setDataUpload(prev => ({ ...prev, url_image: ele.target.value }))
    }

    const handlerSetDes = (ele) => {
        setDataUpload(prev => ({ ...prev, post_content: ele.target.value }))
    }

    const handleSelectImag = (event) => {
        setDataUpload(prev => ({
            ...prev, url_image: URL.createObjectURL(event.target.files[0]),
            obj_image: event.target.files[0]
        }))
    }

    const handleClickImg = () => {
       document.querySelector('.uploadImg').click();
    }

    return (
        <div className="ass1-section__content">
            <form action="#">
                <div className="form-group">
                    <input type="text" className="form-control ttg-border-none" value={dataUpload.url_image} onChange={handlerSetImage} placeholder="https://" />
                </div>
                <div className="form-group">
                    <textarea type="text" onChange={handlerSetDes} className="form-control ttg-border-none" value={dataUpload.post_content} placeholder="Mô tả ..."  />
                </div>
            </form>
            <div className="ass1-section__image">
                <a href="/">
                    <img src={dataUpload.url_image?dataUpload.url_image:"https://phutungnhapkhauchinhhang.com/wp-content/uploads/2020/06/default-thumbnail.jpg"}  alt="default" />
                </a>
            </div>
            <a href="https://memeful.com/" target="_blank" className="ass1-btn ass1-btn-meme" rel="noreferrer">Chế ảnh từ
                meme</a>
            <button onClick={handleClickImg} className="ass1-btn ass1-btn-meme">Đăng ảnh từ máy tính
            </button>
            <input ref={uploadIma} type="file" onChange={handleSelectImag} name="uploadImg"  className='uploadImg'/>
            
        </div>
    )
}