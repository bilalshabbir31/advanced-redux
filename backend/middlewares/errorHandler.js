const notFound = (req, res, next) => {
  // no route matches
  res.status(404).send("Page Not Found!");
};

export default notFound;
