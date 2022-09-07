import React from 'react';
import Posts from '../components/Posts';
import Button from '../components/shared/Button';
import SideBar from '../components/SideBar';

const HomePage = () => {
    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="ass1-section__list">
                            <Posts />
                            <Button />
                        </div>
                    </div>
                    <SideBar />
                </div>
            </div>
        </main>
    );
};

export default HomePage;