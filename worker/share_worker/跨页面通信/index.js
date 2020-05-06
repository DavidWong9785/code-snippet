var clickBtn = document.querySelector('#clickBtn')

if (!!window.SharedWorker) {
  var myWorker = new SharedWorker("worker.js");

  clickBtn.onclick = function() {
    myWorker.port.postMessage('页面一 click');
  }
  
  myWorker.port.onmessage = function(e) {
    console.log('页面一 接收到更改', e.data)
  }
}
