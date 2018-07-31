;(function(){
	var correct_copy = document.getElementById('correct-copy'),
		original_copy = document.getElementById('original-copy'),
		review  = document.getElementById('review'),
		original_area = document.getElementById('original-area'),
		correct_area = document.getElementById('correct-area'),
		left_copy_tip = document.getElementById('left-copy-tip'),
		right_copy_tip = document.getElementById('right-copy-tip'),
		clear = document.getElementById('clear');
	
	review.onclick = function() {
		alert(2);
	}
	original_copy.onclick = function() {
		clipbord(this,original_area.innerText,left_copy_tip);
	}
	correct_copy.onclick = function() {
		clipbord(this,correct_area.innerText,right_copy_tip);
	}
	clear.onclick = function() {
		original_area.innerHTML = '';
		correct_area.innerHTML = '';
		original_area.focus();
	}
	function clipbord(ele,value,tip) {
		var input = document.createElement('input');
		document.body.appendChild(input);
	 	input.setAttribute('value', value);
	 	console.log(value);
		input.select();
		if (document.execCommand('copy')) {
			document.execCommand('copy');
			ele.style.display = 'none';
			tip.style.opacity = 1;
		}
	    document.body.removeChild(input);
	}
})();
