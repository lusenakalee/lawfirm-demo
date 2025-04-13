import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getPostsByCategory = async (categorySlug: string) => {
  const POSTS_BY_CATEGORY_QUERY = defineQuery(`
*[
_type == "post"
&& references(*[_type == "category" && slug.current == $categorySlug]._id)
] | order(name asc)
`);

  try {
    // Use sanityFetch to send the query and pass the category slug
    const posts = await sanityFetch({
      query: POSTS_BY_CATEGORY_QUERY,
      params: {
        categorySlug,
      },
    });

    // Return the list of products, or an empty array if none are found
    return posts.data || [];
  } catch (error) {
    console.error("Error fetching products by category:", error);
    return [];
  }
};
