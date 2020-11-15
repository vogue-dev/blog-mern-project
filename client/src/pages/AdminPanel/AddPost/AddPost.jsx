import React, { useState, useRef } from 'react';
import axios from 'axios';

const AddPost = () => {
    let [state, setState] = useState({});
    let [selectType, setSelectType] = useState('posts');
    const select = useRef();
    const title = useRef();
    const titleStatus = useRef();
    const price = useRef();
    const description = useRef();
    const date = useRef();
    const readingTime = useRef();
    const image = useRef();

    const addValues = ({ target }) => {
        setState({ ...state, [target.name]: target.value });
    };

    const addNewPost = (e) => {
        e.preventDefault();

        console.log('selectType', selectType);
        console.log('state', state);
        axios.post(`/${selectType}`, state);
    };

    const onClickSetSelectType = ({ target }) => {
        setSelectType(target.value);
    };

    return (
        <div>
            <select ref={select} value={selectType} onChange={onClickSetSelectType}>
                <option value="posts">Europe Post</option>
                <option value="ukraine">Ukraine Post</option>
            </select>
            <form className="fd-c" onSubmit={addNewPost} onChange={addValues}>
                <input ref={title} name="title" placeholder="title"></input>
                <input ref={titleStatus} name="titleStatus" placeholder="titleStatus"></input>
                <input ref={price} name="price" placeholder="price"></input>
                <input ref={description} name="description" placeholder="description"></input>
                <input ref={date} name="date" placeholder="date"></input>
                <input
                    ref={readingTime}
                    type="number"
                    name="readingTime"
                    placeholder="readingTime"></input>
                <input
                    ref={image}
                    name="image"
                    placeholder="ссылка на картинку 16:9 (jpg/png)"></input>

                <button>Подтвердить</button>
            </form>
        </div>
    );
};

export default AddPost;
