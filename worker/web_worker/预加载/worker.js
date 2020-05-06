let req = new XMLHttpRequest();
req.open('GET', 'https://cs7n.yeba.im/user/avatar/16284_1588237137401.jpg', true);
req.responseType = "blob";
req.onreadystatechange = () => {
  if (req.readyState == 4) {
	postMessage(URL.createObjectURL(req.response))
  }
}
req.send(null)