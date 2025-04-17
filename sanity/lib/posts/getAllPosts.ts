import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getAllPosts = async () => {
  const ALL_POSTS_QUERY = defineQuery(`
*[

_type == "post"
] | order(name asc)
`);

  try {
    // Use sanityFetch to send the query
    const posts = await sanityFetch({
      query: ALL_POSTS_QUERY,
    });

    // Return the list of posts, or an empty array if none are found
    return posts.data || [];
  } catch (error) {
    console.error("Error fetching all posts:", error);
    return [];
  }
};
