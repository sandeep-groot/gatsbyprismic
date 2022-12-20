exports.linkResolver = (doc) => {
  console.log("link resolver doc :>> ", doc);
  // URL for a category type
  if (doc.type === "post") {
    return `/post/${doc.uid}`;
  }

  if (doc.type === "articles") {
    return `/articles/${doc.uid}`;
  }

  // // URL for a product type
  // if (doc.type === 'product') {
  //   return `/product/${doc.uid}`
  // }

  // // URL for a page type
  // if (doc.type === 'page') {
  //   return `/${doc.uid}`
  // }

  // Backup for all other types
  return "/";
};
