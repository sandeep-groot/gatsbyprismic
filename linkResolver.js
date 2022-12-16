exports.linkResolver = (doc) => {
  // URL for a category type
  if (doc.type === "post") {
    return `/post/${doc.uid}`;
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
