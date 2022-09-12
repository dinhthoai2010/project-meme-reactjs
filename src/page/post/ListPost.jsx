import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyReducerGetListPost } from '../../store/post/actions';

const ListPost = () => {

    const posts = useSelector(state => state.Post.listPost)
    const dispatch = useDispatch();
    const param = {
        pagesize : 4
    }
    useEffect(() => {
        dispatch(asyReducerGetListPost(param)).then((value) => {
            console.log(value)
        })
    }, []);

    console.log(posts)
    return (
        <main>
            <h3>Danh sach bai viuet</h3>
        </main>
    );
};

export default ListPost;