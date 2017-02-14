export function addPost(post) {
    console.log(post.content)
    return {
        type: 'ADD_POST',
        payload: post
    }
}