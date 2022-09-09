import React from 'react';
import Profile from '../../components/author/Profile';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Posts from '../../components/Posts';

const PostHistory = () => {
    return (
        <div>
            <Header />
            <main>
                <div className="container">
                    <Profile/>
                    <div className="ass1-section__wrap row ass1-section__isotope-init">
                        <div className="ass1-section__item col-lg-6">
                            <Posts />
                        </div>
                        <div className="ass1-section__item col-lg-6">
                            <Posts />
                        </div>
                        <div className="ass1-section__item col-lg-6">
                            <Posts />
                        </div>
                        <div className="ass1-section__item col-lg-6">
                            <Posts />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PostHistory;