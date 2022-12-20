import React from "react";
import { graphql } from "gatsby";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";
import "./blog-post.css";
import Layout from "../layouts";

const BlogPost = (props) => {
  const { data } = props;
  return (
    <Layout {...props}>
      <div className={`blog_wrapper`}>
        {ReactHtmlParser(
          data?.allPrismicPost?.edges[0]?.node?.data?.title?.html
        )}
        {ReactHtmlParser(
          data?.allPrismicPost?.edges[0]?.node?.data?.content?.html
        )}
        {ReactHtmlParser(data?.allPrismicPost?.edges[0]?.node?.data?.date)}
      </div>
    </Layout>
  );
};

export default BlogPost;

export const query = graphql`
  query($slug: String!) {
    allPrismicPost(filter: { uid: { eq: $slug } }) {
      edges {
        node {
          data {
            title {
              html
            }
            date
            content {
              html
            }
          }
        }
      }
    }
  }
`;
