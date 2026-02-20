import filters from "./_utils/filters.js";
import transformExternalLinks from "./_utils/links.js";

export default async function (config) {
	// Add global data variable to signal build modality
	const isProduction = process.env.NODE_ENV === "production";
	config.addGlobalData("isProduction", isProduction);

	// Copy public assets to output folder
	config.addPassthroughCopy({
		"./public": "/",
	});

	// Add global default layout
	config.addGlobalData("layout", "html.njk");

	// Register filter functions
	Object.keys(filters).forEach((filter) => {
		config.addFilter(filter, filters[filter]);
	});

	// Register imported links function as a transform
	config.addTransform("externalLinks", transformExternalLinks);

	return {
		markdownTemplateEngine: "njk",
		dir: {
			input: ".",
			includes: "_includes",
			data: "_data",
			output: "_site",
		}
	};
}