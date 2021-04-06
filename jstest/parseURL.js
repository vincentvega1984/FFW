function parseUrl(url){
	
	var obj = document.createElement('a');
	obj.href = url;

	return obj;
}

let obj = parseUrl('http://ffwagency.com/do/any.php?a=1#foo')

console.log(obj.hash);
console.log(obj.hostname);
console.log(obj.pathname);