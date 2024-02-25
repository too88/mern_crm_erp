function checkAndCorrectURL(url) {
  // detech if it has http or https:
  const hasHTTPS = url.startsWith("https://");

  // remove "http://" or "https://"
  url = url.replace(/^https?:\/\//i, "");

  // remove trailing slashes
  url = url.replace(/\/+$/, "");

  const HTTPType = hasHTTPS ? "https://" : "http://";
  return HTTPType + url;
}

module.exports = checkAndCorrectURL;
