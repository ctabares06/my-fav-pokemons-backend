const sendErrorResponse = (err, req, res) => {
  return res.status(500).send(err);
}

module.exports = {
  sendErrorResponse,
}