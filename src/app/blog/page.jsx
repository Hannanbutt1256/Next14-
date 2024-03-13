import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";
// ! Fetch Data with API
// const getData = async () => {
// 	const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
// 		cache: "no-store",
// ? We can also use "{next:{revalidate :3600 }}" to refresh our data accordint to our need....
// 	});
// 	if (!res.ok) {
// 		throw new Error("Something went wrong");
// 	}
// 	return res.json();
// };
const BlogPage = async () => {
	// ! Fetch Data with API
	// const posts = await getData();
	// ! Fetch Data without API
	const posts = await getPosts();

	return (
		<div className={styles.container}>
			{posts.map((post) => (
				<div className={styles.post} key={post.id}>
					<PostCard post={post} />
				</div>
			))}
		</div>
	);
};

export default BlogPage;
