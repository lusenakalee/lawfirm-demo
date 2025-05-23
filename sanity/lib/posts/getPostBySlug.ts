import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getPostBySlug = async (slug: string) => {
  const POST_BY_ID_QUERY = defineQuery(`

*[_type == "post" && slug.current == $slug][0]{
      title,
      _createdAt,
      mainImage,
      body,
      "authors": authors[]->{
        name,
        position,
        image
      },
      "categories": categories[]->{
        title
      },
      "expertises": expertises[]->{
        title
      }
    }
  
  `);

  try {
    // Use sanityFetch to send the query with the slug as a paramete
    const post = await sanityFetch({
      query: POST_BY_ID_QUERY,
      params: {
        slug, 
      },
    });

    // Return the post data or null if not found
    return post.data || null;
  } catch (error) {
    console.error("Error fetching post by ID:", error);
    return null;
  }
};
