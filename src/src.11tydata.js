export default {
    // https://www.11ty.dev/docs/data-computed/
    eleventyComputed: {
        permalink: (data) => `/${data.page.fileSlug}/`,
        title: (data) => {
            if (data.title) return data.title;
            const slug = data.page.fileSlug.split("-").join(" ");
            return slug[0].toUpperCase() + slug.slice(1);
        }
    }
}