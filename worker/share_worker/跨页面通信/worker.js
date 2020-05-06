onconnect = function(e) {
  var port = e.ports[0];
  console.log(1111111)
  port.onmessage = function(e) {
    var workerResult = 'Result: ' + (e.data);
    port.postMessage(workerResult);
  }

}
