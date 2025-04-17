import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getAllAuthors = async () => {
  const ALL_AUTHORS_QUERY = defineQuery(`
*[
_type == "author"
] | order(name asc)
`);

  try {
    // Use sanityFetch to send the query
    const authors = await sanityFetch({
      query: ALL_AUTHORS_QUERY,
    });

    // Return the list of authors, or an empty array if none are found
    return authors.data || [];
  } catch (error) {
    console.error("Error fetching all authors:", error);
    return [];
  }
};
