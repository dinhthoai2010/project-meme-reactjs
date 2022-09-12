import { ACCESS_TOKEN } from "../constants";

export function hasListPost(posts) {
    const listPost = [];
    posts.forEach(post => {
        listPost.push({
            id: post.PID,
            content: post.post_content,
            count: post.count,
            time: post.time_added,
            image: post.url_image,
            author: {
                id: post.USERID,
                name: post.fullname,
                avatar: post.profilepicture
            }
        })
    })
    return listPost;
}

export function mappingUser(user) {
    return {
        id: user.USERID,
        email: user.email,
        name: user.fullname,
        gender: user.gender,
        des: user.description,
        avatar: user.profilepicture,
        permission: user.permission,
        yourViewed: user.yourviewed,
        profileViews: user.profileviews,
    }
}

export const getToken = () => {
    return localStorage.getItem(ACCESS_TOKEN);
}

export const getQueryStr = name => {
    return new URLSearchParams(window.location.search).get(name)
}

export const mappingComment = comments => {
    const cm = [];
    comments.forEach(comment => {
        cm.push({
            id: comment.PID,
            user: {
                id: comment.USERID,
                name: comment.fullname,
                avatar: comment.profilepicture
            },
            comment: comment.comment,
            date: comment.time_added,
        })
    })
    return cm;
}