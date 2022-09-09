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
        des : user.description,
        avatar : user.profilepicture,
        permission: user.permission,
        yourViewed: user.yourviewed,
        profileViews: user.profileviews,
    }
}

