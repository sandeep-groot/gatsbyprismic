/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
// import { StoreContext } from "../utils/context";

const Layout = (props) => {
  const { children, data } = props;
  // const store = useContext(StoreContext);
  // const [blogs, setBlogs] = store?.blogs;
  // console.log("data layout :>> ", data);

  return (
    <div>
      <header>header</header>
      <main>{children}</main>
      <footer>footer</footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
