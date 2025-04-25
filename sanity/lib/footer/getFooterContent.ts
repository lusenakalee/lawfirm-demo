import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getFooterContent = async () => {
  const FOOTER_CONTENT_QUERY = defineQuery(`
*[ 
_type == "footerContent" 
] | order(name asc)
`);

  try {
    // Use sanityFetch to send the query
    const footerContent = await sanityFetch({
      query: FOOTER_CONTENT_QUERY,
    });

    // Return the list of footer content, or an empty array if none are found
    return footerContent.data || [];
  } catch (error) {
    console.error("Error fetching all footer content:", error);
    return [];
  }
};
