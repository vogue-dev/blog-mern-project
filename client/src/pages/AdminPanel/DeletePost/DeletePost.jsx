import React, { useState, useRef } from 'react';
import axios from 'axios';

const AddPost = () => {
    const userIdValue = useRef();

    let [state, setState] = useState({
        userId: null,
        title: '',
    });

    const addValues = ({ target }) => {
        let changedState = state;
        changedState[target.name] = target.value;
        setState(changedState);
    };

    const addNewPost = (e) => {
        e.preventDefault();
        posting();
    };

    const posting = () => {
        axios.delete('/posts', state);
    };

    return (
        <div>
            Delete Post
            <form onSubmit={addNewPost} onChange={addValues}>
                <input ref={userIdValue} name="postID" placeholder="Удалить пост с ID:"></input>
                <button>Подтвердить</button>
            </form>
        </div>
    );
};

export default AddPost;
