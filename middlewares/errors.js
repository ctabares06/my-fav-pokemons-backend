const sendErrorResponse = (err, req, res) => {
  return res.status(err.status || 500).send(err.message);
}

module.exports = {
  sendErrorResponse,
}