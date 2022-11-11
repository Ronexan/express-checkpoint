function requestTime(req, res, next) {
    let date = new Date();
    let websiteOpen = date.getHours() >= 9 && date.getHours() < 17 ? true : false;
    req.webOpen = websiteOpen;
    next();
}

module.exports = requestTime;
