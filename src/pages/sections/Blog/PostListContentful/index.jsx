import { useEffect, useRef, useState } from 'react';
import { createClient } from 'contentful';
import { conicGradient, conicGradientPink } from '../../../../components/styles';
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/24/outline';
import { PostDialog } from '../PostDialog';
import { LoadingAnimation } from '../../../../components';
import { handleScrollPostList } from '../../../../utils';

const Image = ({ post }) => {
    return (
        <div className="relative w-60 max-h-56 overflow-hidden rounded-md flex items-center">
            {post.pic !== null
                ? <img src={'https:' + post.picture} alt={post.alt} className="w-full h-auto rounded-lg hover:scale-110" />
                : <div className="w-full h-56 bg-rainbow rounded-lg hover:scale-110" />
            }
            <div className={`${conicGradient} flex absolute bottom-4 w-full h-fit items-end`}>
                <h3 className="text-base font-quicksand font-bold leading-tight py-2 z-10 uppercase w-full h-fit text-white">
                    {post.title.length <= 70 ? post.title : `${post.title.slice(0, 70)}...`}
                </h3>
            </div>
        </div>
    )
};

export const PostList = () => {
    const defaultBasicPost = {
        title: '',
        text: '',
        picture: '',
        alt: '',
        contentNode: null,
    };

    const [posts, setPosts] = useState([]);
    const [openPost, setOpenPost] = useState(false);
    const [currentPost, setCurrentPost] = useState(defaultBasicPost);
    const ref = useRef();

    const handleShowPost = (e, index) => {
        e?.preventDefault();
        setCurrentPost(posts[index]);
        setOpenPost(!openPost);
    };
    const handleClosePost = () => {
        setOpenPost(false);
    };

    const content = (contentArray) => {
        let content = '';
        contentArray?.forEach((item) => {
            item.content?.forEach((item_) => {
                content += item_.value;
            });
        });
        return content
    };

    const fetchPosts = async (client) => {
        if (!client) return;
        let filteredPosts = [];

        try {
            const response = await client?.getEntries();
            if (response?.items) {
                const entries = response.items;
                entries?.map(entry => {
                    const title = entry?.fields?.title ?? '';
                    const text = content(entry?.fields?.postcontent?.content ?? '');
                    const picture = entry?.fields?.media?.fields?.file?.contentType === 'image/jpeg' ? (entry.fields.media.fields.file.url) : '';
                    const alt = entry?.fields?.media?.fields?.file?.fileName ?? '';
                    const contentNode = entry?.fields?.postcontent ?? {};
                    filteredPosts.push({ title, text, picture, alt, contentNode });
                    return filteredPosts;
                });
                setPosts(filteredPosts ?? []);
            }
        } catch (error) {
            console.error('Error fetching data from Contentful:', error);
            return
        }
    };

    const scrollListNext = () => {
        handleScrollPostList(ref, true);
    };

    const scrollListPrev = () => {
        handleScrollPostList(ref, false);
    };

    useEffect(() => {
        const space = process.env.REACT_APP_YOUR_SPACE_ID;
        const accessToken = process.env.REACT_APP_YOUR_ACCESS_TOKEN;
        if (space && accessToken) {
            const client = createClient({ space, accessToken });
            fetchPosts(client);
        }
    }, []);


    return (
        <div className={`flex left-0 w-screen overflow-x-scroll justify-center py-6 ${conicGradientPink}`}>
            <div className="flex flex-col w-fit h-fit items-center">
                <h2 className="text-white text-base font-quicksand" >Latest Posts</h2>
                <button onClick={scrollListNext}>
                    <ChevronDoubleRightIcon className="text-white w-10 h-10 sm:w-20 sm:h-20 hover:scale-90" />
                </button>
                <button onClick={scrollListPrev}>
                    <ChevronDoubleLeftIcon className="text-white w-10 h-10 sm:w-20 sm:h-20 hover:scale-90" />
                </button>

            </div>
            <div ref={ref} className="flex w-[80%] overflow-x-scroll pr-10">
                <div className="inline-flex gap-10 h-fit p-2 sm:p-4 border-r-8 border-transparent">
                    {posts?.length > 0 ? posts.map((post, index) => (
                        <button
                            onClick={(e) => { handleShowPost(e, index) }}
                            key={post.title + index}
                            className="flex flex-col p-3 rounded-lg w-60 max-h-full bg-white">
                            <Image post={post} />
                            <h3 className="bg-gradient-to-tr from-sky-500 via-purple-600 to-pink-500 bg-clip-text text-transparent z-[2] w-full text-base font-mont font-bold leading-tight py-2">{post.title}</h3>
                            <p className="z-[2] text-sm w-full font-quicksand leading-tight">{`${post?.text?.slice(0, 70) ?? ''}...`}</p>
                        </button>
                    )) : (
                        <div className={`flex flex-col w-full h-full justify-center`}>
                            <p className="text-sm pt-2 text-center text-white">
                                Loading Posts from Contentful...
                            </p>
                            <LoadingAnimation />
                        </div>
                    )}
                </div>
            </div>
            <PostDialog close={handleClosePost} open={openPost} post={currentPost} />
        </div>
    );
};
