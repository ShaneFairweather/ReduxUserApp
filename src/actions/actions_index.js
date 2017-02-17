import axios from 'axios';

export function addPost(post) {
    return {
        type: 'ADD_POST',
        payload: post
    }
}