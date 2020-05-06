if (!!window.SharedWorker) {
	var worker = new SharedWorker('worker.js')
	worker.port.postMessage('页面一初始化完成');
	worker.onmessage = function (event) {
	   console.log('页面一 event', event)
	};
}