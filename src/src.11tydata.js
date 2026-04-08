const isProduction = process.env.NODE_ENV === "production";

const data = {
    layout: "page.njk",

    eleventyComputed: {
        permalink: (data) => (isProduction && data.draft) ? false : data.permalink,

        eleventyExcludeFromCollections: (data) => (isProduction && data.draft) ? true : data.eleventyExcludeFromCollections,
    }
};

export default data;