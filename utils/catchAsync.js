// eslint-disable-next-line arrow-body-style,prettier/prettier
module.exports = fn => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
