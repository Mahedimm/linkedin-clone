import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { handlePostState, useSSRPostsState } from '../atoms/postAtom';
import Input from './Input';
import Post from './Post';




const Feed = ({posts}) => {
    const [realtimePosts,setRealtimePosts] = React.useState([]);
    const [handlePost, setHandlePost] = useRecoilState(handlePostState);
    const [useSSRPosts, setUseSSRPosts] = useRecoilState(useSSRPostsState);

    //using SWR to fetch data from the server
    // const fetcher = async () => {
    //     const response = await fetch('/api/posts/',{
    //         method: 'GET',
    //         headers: {"content-type": "application/json"}
    //     });
    //     const data = await response.json()
    //     setRealtimePost(data)
    //     return data
    //   }

    // const { data, error } = useSWR('/api/posts/', fetcher)

    // console.log(realtimePost);
    // if (error) return 'An error has occurred.'
    // if (!data) return 'Loading...'

    useEffect(()=>{
        const fetcher = async () => {
            const response = await fetch('/api/posts/',{
                method: 'GET',
                headers: {"content-type": "application/json"}
            });
            const data = await response.json();
            setRealtimePosts(data)
            setHandlePost(false);
            setUseSSRPosts(false);
          }
            fetcher();
        },[handlePost])
    

    return (
        <div className="space-y-6 pb-24 max-w-xl">

        {/* create post */}
           <Input />

           {/* POSts */}
           {!useSSRPosts
            ? realtimePosts.map((post) => <Post key={post._id} post={post} />)
            : posts.map((post) => <Post key={post._id} post={post} />)}
        </div>
    );
};

export default Feed;