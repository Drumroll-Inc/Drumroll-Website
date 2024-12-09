import { createClient } from "contentful";

const contentfulClient = createClient({
    space: import.meta.env.CONTENTFUL_SPACE_ID || "",
    accessToken: import.meta.env.CONTENTFUL_ACCESSTOKEN || "",
});

export default contentfulClient;
