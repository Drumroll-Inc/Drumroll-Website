import { createClient } from "contentful";

const space = import.meta.env.VITE_CONTENTFULSPACE_ID || "";
const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESSTOKEN || "";

// Validate environment variables
if (!space || !accessToken) {
    console.warn("Contentful space ID or access token is missing.");
}

const contentfulClient = createClient({
    space,
    accessToken,
});

export default contentfulClient;

