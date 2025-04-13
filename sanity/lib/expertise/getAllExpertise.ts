import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getAllExpertises = async () => {
  const ALL_EXPERTISES_QUERY = defineQuery(`
*[
_type == "expertise"
] | order(name asc)
`);

  try {
    // Use sanityFetch to send the query
    const expertises = await sanityFetch({
      query: ALL_EXPERTISES_QUERY,
    });

    // Return the list of expertises, or an empty array if none are found
    return expertises.data || [];
  } catch (error) {
    console.error("Error fetching all expertises:", error);
    return [];
  }
};
