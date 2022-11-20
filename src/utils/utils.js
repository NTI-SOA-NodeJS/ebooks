exports.foundedOrNot = (res, body) => {
  if (body) {
    res.json(body);
  } else {
    //   res.status(404).json({
    //     status: 404,
    //     message: "Not found",
    //   });
    this.ResponseTemp(res, 404, "Not found");
  }
};
exports.ResponseTemp = (res, status, message) => {
  var msg = message == null ? statusMessages(status) : message;

  res.status(status ?? 200).json({
    status: status,
    message: msg,
  });
};

statusMessages = (status) => {
  switch (status) {
    case 200:
      return "Ok";
    case 400:
      return "Bad request";
    case 404:
      return "Not found";
    case 500:
      return "Server error";

    default:
      return "completed successfully";
  }
};

exports.listResponse = (results, page, len) => ({
  page: page,
  len: len,
  total: results.length,
  data: results,
});

exports.generalHandler = async (res, fun) => {
  try {
    await fun();
  } catch (err) {
    console.error(err);
    this.ResponseTemp(res, 400, err);
  }
};
