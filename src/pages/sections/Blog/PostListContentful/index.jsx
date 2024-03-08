import { useEffect, useState } from 'react';
import { createClient } from 'contentful';
import { conicGradient } from '../../../../components/conicGradients';
import { PostDialog } from '../PostDialog';
import { LoadingAnimation } from '../../../../components';

const PostImage = ({ picture, alt, title }) => {
	return (
		<div className="flex relative w-full h-60 sm:h-72 overflow-hidden rounded-3xl items-center">
			{picture !== null
				? <img src={'https:' + picture} alt={alt} className="min-w-full min-h-full rounded-3xl hover:scale-125" />
				: <div className={`${conicGradient} w-full h-60 sm:h-72 rounded-lg hover:scale-125`} />
			}
			<div className={`${conicGradient} absolute bottom-4 w-full h-fit `}>
				<h3 className="text-base font-light leading-tight py-2 z-10 uppercase w-full h-fit text-white">
					{title.length <= 70 ? title : `${title.slice(0, 70)}...`}
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

	// Open and close single post
	const handleShowPost = (e, index) => {
		e?.preventDefault();
		setCurrentPost(posts[index]);
		setOpenPost(!openPost);
	};
	const handleClosePost = () => {
		setOpenPost(false);
	};

	// Extracting content from array
	const content = (contentArray) => {
		let content = '';
		contentArray?.forEach((item) => {
			item.content?.forEach((item_) => {
				content += item_.value;
			});
		});
		return content
	};

	// Get all Contentful posts
	const fetchPosts = async (client) => {
		if (!client) return;
		let filteredPosts = [];
		try {
			const response = await client?.getEntries();
			if (response?.items) {
				const entries = response.items;
				// ALERT! YOU HAVE TO UPDATE THE DATA EXTRACTION CONSIDERING
				// YOUR CUSTOM FIELDS ON CONTENTFUL 
				entries?.map(entry => {
					const title = entry?.fields?.title ?? '';
					const text = content(entry?.fields?.postcontent?.content ?? '');
					const picture = entry?.fields?.media?.fields?.file?.contentType === 'image/jpeg' ? (entry.fields.media.fields.file.url) : '';
					const alt = entry?.fields?.media?.fields?.description ?? '';
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

	// Connect with Contentful to fetch data
	useEffect(() => {
		const space = process.env.REACT_APP_YOUR_SPACE_ID;
		const accessToken = process.env.REACT_APP_YOUR_ACCESS_TOKEN;
		if (space && accessToken) {
			const client = createClient({ space, accessToken });
			fetchPosts(client);
		}
	}, []);

	return (
		<div className={`flex left-0 w-screen h-[80vh] overflow-y-hidden justify-center py-6 bg-white`}>
			<div className="overflow-y-scroll w-full">
				<div className="grid w-full sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 lg:gap-10 px-6 sm:px-12 md:px-24">
					{posts?.length > 0 ? posts.map((post, index) => (
						<div key={post.title + index + 3}>
							<button
								onClick={(e) => { handleShowPost(e, index) }}
								key={post.title + index}
							>
								<PostImage picture={post?.picture ?? ''} alt={post?.alt ?? ''} title={post?.title ?? ''} />
								<h3 className="bg-gradient-to-tr from-sky-500 via-purple-600 to-pink-500 bg-clip-text text-transparent z-[2] w-full text-base font-mont font-bold leading-tight py-2">{post.title}</h3>
								<p className="z-[2] text-sm w-full font-quicksand leading-tight px-2">{`${post?.text?.slice(0, 70) ?? ''}...`}</p>
							</button>
						</div>
					)) : (
						<div className={`flex flex-col w-full h-full justify-center`}>
							<p className="text-sm pt-2 text-center text-white">
								Loading Posts from Contentful...
							</p>
							<LoadingAnimation />
						</div>
					)}
				</div>
				{/* Dialog for single post */}
				<PostDialog close={handleClosePost} open={openPost} post={currentPost} />
			</div>
		</div>
	);
};
