import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Waypoint } from 'react-waypoint';
import Posts from '../../components/Posts';
import { aysGetPostByCategory } from '../../store/post/actions';

const ListPost = () => {

    const posts = useSelector(state => state.Post.listPost)
    const dispatch = useDispatch();
    const params = useParams()

    const pagesize = 6
    const [currPage, setCurrPage] = useState(0);
    const checkFirst = useRef(true);
    const [loading, setLoading] = useState(false);
    const [isLoadMore, setLoad] = useState(true);
    const param = {
        pagesize: pagesize,
        currPage: currPage,
        tagIndex: params.id,
    }
    useEffect(() => {
        if (checkFirst.current) {
            checkFirst.current = false;
            return
        }
        setLoading(true);

        dispatch(aysGetPostByCategory(param)).then((value) => {
            if (checkFirst && value.length !== pagesize) {
                setLoad(false);
            }
            setLoading(false);
        })
    }, [currPage,params.id]);



    function handleWaypointEnter() {
        setCurrPage(prev => prev + 1);
    }


    return (
        <main>
            <div className="container">
                <div className="ass1-section__wrap  ass1-section__isotope-init ass1-section__isotope-init1">
                    {posts.length > 0 && posts.map(post => <Posts post={post} key={post.id} />)}
                </div>
                <div className="row">


                    <div className="col-lg-8">
                        <div className="ass1-section__list">
                            {isLoadMore
                                ?
                                <div style={{ height: 100 }}>
                                    {
                                        !loading ? <Waypoint
                                            onEnter={handleWaypointEnter} /> : 'Loadding'
                                    }
                                </div> : <div style={{ height: 100 }}> Hết bài viết</div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </main >
    );
};

export default ListPost;