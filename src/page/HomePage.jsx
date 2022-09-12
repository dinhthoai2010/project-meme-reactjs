import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Waypoint } from 'react-waypoint';
import Posts from '../components/Posts';
import SideBar from '../components/SideBar';
import { asyReducerGetListPost } from '../store/post/actions';

const HomePage = () => {
    const dispatch = useDispatch();

    const posts = useSelector(state => state.Post.listPost)
    const pagesize = 5
    const [currPage, setCurrPage] = useState(0);
    const checkFirst = useRef(true);
    const [loading, setLoading] = useState(false);
    const [isLoadMore, setLoad] = useState(true);
    const param = {
        pagesize: pagesize,
        currPage: currPage
    }
    useEffect(() => {
        if (checkFirst.current) {
            checkFirst.current = false;
            return
        }
        setLoading(true);

        dispatch(asyReducerGetListPost(param)).then((value) => {
            if (checkFirst && value.length !== pagesize) {
                setLoad(false);
            }
            setLoading(false);
        })
    }, [currPage]);

    function handleWaypointEnter() {
        setCurrPage(prev => prev + 1);
    }

    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="ass1-section__list">
                            {posts.length > 0 && posts.map(post => <Posts post={post} key={post.id} />)}
                            {isLoadMore
                                ?
                                <div style={{ height: 100 }}>
                                    {
                                        !loading ? <Waypoint
                                            onEnter={handleWaypointEnter} /> : 'Loadding'
                                    }
                                </div> : <div style={{ height: 100 }}> không còn bài</div>
                            }
                        </div>
                    </div>
                    <SideBar />
                </div>
            </div>
        </main>
    );
};

export default HomePage;