import React, { useState, useEffect } from 'react';

const API = 'https://jsonplaceholder.typicode.com/posts';

type PostElement = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

function PostList() {
    const [postList, setPostList] = useState<PostElement[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch(API)
            .then(response => response.json())
            .then((response: PostElement[]) => {
                setTimeout(() => {
                    setPostList(response);
                    setIsLoading(false);
                }, 2000);
            }).catch((e) => {
                setIsError(true);
                setIsLoading(false);
        });
    }, []);

    const renderPostsList = (): React.ReactNode => postList.map((postElement: PostElement) => {
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

export default PostList;