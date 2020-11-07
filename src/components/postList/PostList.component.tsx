import React, { useReducer, useEffect } from 'react';
import { postListReducer, postListActionType, initialState, PostElement } from "./PostList.reducer";

const API = 'https://jsonplaceholder.typicode.com/posts';

function PostListComponent() {
    const[{items, isLoading, isError}, dispatch] = useReducer(postListReducer, initialState);

    useEffect(() => {
        dispatch({ type: postListActionType.SET_LOADING });
        fetch(API)
            .then(response => response.json())
            .then((response: PostElement[]) => {
                setTimeout(() => {
                    dispatch({ type: postListActionType.SET_DATA, payload: response });
                }, 2000);
            }).catch((e) => {
                dispatch({ type: postListActionType.SET_ERROR });
        });
    }, []);

    const renderPostsList = (): React.ReactNode => items.map((postElement: PostElement) => {
        return (
        <div key={postElement.id}>{postElement.title}</div>
    )});

    return (
        <div>
            <h2>Lista postów</h2>
            {!isLoading && !isError && renderPostsList()}
            {isLoading && <div>Loader...</div>}
            {isError && <div>Error</div>}
        </div>
    )
}

export default PostListComponent;