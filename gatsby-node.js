/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path');

const docData = require('./docgen-output.json');

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const referencePageComponent = path.resolve(`src/generated_pages/reference.js`);
  Object.keys(docData).forEach((key) => {
    const componentName = key.replace('src/', '').replace('.js', '');

    const title = componentName;
    const data = docData[key];

    const path = `/reference/components/${componentName}`;
    createPage({
      path,
      component: referencePageComponent,
      // If you have a layout component at src/layouts/blog-layout.js
      // layout: `blog-layout`,
      // In your blog post template's graphql query, you can use path
      // as a GraphQL variable to query for data from the markdown file.
      context: {
        path,
        title,
        data,
      },
    });
  });
};
