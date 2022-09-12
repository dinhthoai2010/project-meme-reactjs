import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FullLayout from '../layout/FullLayout';
import IsFooter from '../layout/IsFooter';
import IsHeader from '../layout/IsHeader';
import ChangePass from '../page/author/ChangePass';
import Login from '../page/author/Login';
import PostHistory from '../page/author/PostHistory';
import Profile from '../page/author/Profile';
import Register from '../page/author/Register';
import HomePage from '../page/HomePage';
import ListPost from '../page/post/ListPost';
import PostDes from '../page/post/PostDes';
import UploadImg from '../page/post/UploadImg';


const Routers = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/auth">
                    <IsFooter>
                        <Switch>
                            <Route path='/auth/login' component={Login} />
                            <Route path='/auth/register' component={Register} />
                        </Switch>
                    </IsFooter>
                </Route>

                <Route path="/profile/:path?">
                    <FullLayout>
                        <Switch>
                            <Route path='/profile/chang-pass' component={ChangePass} />
                            <Route path='/profile/post' component={ListPost} />
                            <Route path='/profile/upload' component={UploadImg} />
                            <Route path='/profile/history' component={PostHistory} />
                            <Route path='/profile' component={Profile} />
                        </Switch>
                    </FullLayout>
                </Route>

                <Route path="/search">
                    <FullLayout>
                        <ListPost />
                    </FullLayout>
                </Route>

                <Route path="/post/:id">
                    <FullLayout>
                        <PostDes />
                    </FullLayout>
                </Route>


                <Route path='/'>
                    <IsHeader>
                        <Switch>
                            <Route path='/category/:id' ><ListPost /></Route>
                            <HomePage />
                        </Switch>
                    </IsHeader>
                </Route>

            </Switch>
        </BrowserRouter>
    )
};

export default Routers;