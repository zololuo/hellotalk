export function countFormat(count) {
	if (count < 10&&count > 0) {
		return '0'+count;
	}else{
		return count;
	}
}