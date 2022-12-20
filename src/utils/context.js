import React from "react";

export const StoreContext = React.createContext(null);

export default ({ children }) => {
  const [seo, setSeo] = React.useState({});
  const [blogs, setBlogs] = React.useState([]);
  const [blog, setBlog] = React.useState("");

  const store = {
    blogs: [blogs, setBlogs],
    blog: [blog, setBlog],
  };
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
