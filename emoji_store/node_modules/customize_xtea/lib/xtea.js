// var TextEncoder = require('text-encoding').TextEncoder;
function encodeUTF8(s){
  var i,r=[],c,x;
  for(i=0;i<s.length;i++)
    if((c=s.charCodeAt(i))<0x80)r.push(c);
    else if(c<0x800)r.push(0xC0+(c>>6&0x1F),0x80+(c&0x3F));
    else {
      if((x=c^0xD800)>>10==0) //对四字节UTF-16转换为Unicode
        c=(x<<10)+(s.charCodeAt(++i)^0xDC00)+0x10000,
        r.push(0xF0+(c>>18&0x7),0x80+(c>>12&0x3F));
      else r.push(0xE0+(c>>12&0xF));
      r.push(0x80+(c>>6&0x3F),0x80+(c&0x3F));
    };
  return r;
}

function TextDecoder(arr) {
    if (typeof arr === 'string') {
        return arr;
    }
    var UTF = '', _arr = arr;
    for (var i = 0; i < _arr.length; i++) {
        var one = _arr[i].toString(2),
                v = one.match(/^1+?(?=0)/);
        if (v && one.length == 8) {
            var bytesLength = v[0].length;
            var store = _arr[i].toString(2).slice(7 - bytesLength);
            for (var st = 1; st < bytesLength; st++) {
                store += _arr[st + i].toString(2).slice(2)
            }
            UTF += String.fromCharCode(parseInt(store, 2));
            i += bytesLength - 1
        } else {
            UTF += String.fromCharCode(_arr[i])
        }
    }
    return UTF
}

const TEA_DELTA		=	0x9E3779B9
const TEA_SUM		=	0xE3779B90

function long2chars(v){
	var vl = v.length;
	var chars 	=	[];
	var e=0;
	for (var i = 0; i < vl; i++) {
        chars[e++]	=	v[i] & 0xff;
        chars[e++]	=	v[i] >>> 8 & 0xff;
        chars[e++]	=	v[i] >>> 16& 0xff;
        chars[e++]	=	v[i] >>> 24& 0xff;
    }
	return chars
}


// [0,1,2,3,4,6,8,9,]
// '000000001000000'
function long2str(v, w) {
    var vl = v.length;
    var n = (vl - 1) << 2;
    if (w) {
        var m = v[vl - 1];
        if ((m < n - 3) || (m > n)) return null;
        n = m;
    }
    for (var i = 0; i < vl; i++) {
        v[i] = String.fromCharCode(v[i] & 0xff,
                                   v[i] >>> 8 & 0xff,
                                   v[i] >>> 16 & 0xff,
                                   v[i] >>> 24 & 0xff);
    }
    if (w) {
        return v.join('').substring(0, n);
    }
    else {
        return v.join('');
    }
}

var checkMM =function (g,f,a){
var  ss = 55296 == (g & 64512) && f + 1 < a.length && 56320 == (a.charCodeAt(f + 1) & 64512)
return ss;
}

function spilit2char(a){
	for (var c = 0, d = [], e = 0, f = 0; f < a.length; f++) {
		var g = a.charCodeAt(f);
		128 > g ? d[e++] = g : (2048 > g ? d[e++] = g >> 6 | 192 : (checkMM(g,f,a) ? (g = 65536 + ((g & 1023) << 10) + (a.charCodeAt(++f) & 1023),
		d[e++] = g >> 18 | 240,
		d[e++] = g >> 12 & 63 | 128) : d[e++] = g >> 12 | 224,
		d[e++] = g >> 6 & 63 | 128),
		d[e++] = g & 63 | 128)
	}

	return d
}


function char2long(chars){
	var v = [];
    for (var i = 0; i < chars.length; i += 4) {
        v[i >> 2] = chars[i]
                  | chars[i+1] << 8
                  | chars[i + 2] << 16
                  | chars[i + 3] << 24;
    }
	return v
}

function char2str(v){
    var vl = v.length;
	for (var i = 0; i < vl; i++) {
        v[i] = String.fromCharCode(v[i] & 0xff);
    }
	return v.join('');
}

function str2long(s, w) {
    var len = s.length;
    var v = [];

	if(w){
		// console.log(stringToHex(s))
	}

	var chars 	=	spilit2char(s)
	// console.log('chars===',s.length,stringToHex(s))
	// console.log('chars===',chars.length,chars)
    for (var i = 0; i < chars.length; i += 4) {
        v[i >> 2] = (chars[i]
                  | chars[i+1] << 8
                  | chars[i + 2] << 16
                  | chars[i + 3] << 24);
		// console.log(i,'chars',chars[i]
                  // , chars[i+1] << 8
                  // , chars[i + 2] << 16
                  // , chars[i + 3] << 24)
		if (w) {
			// console.log(i ,v[i >> 2],s.charCodeAt(i),s.charCodeAt(i + 1),s.charCodeAt(i + 2),s.charCodeAt(i+3))
		}
    }
    if (w) {

    }
    return v;
}

//const uint32_t * plain, const uint32_t * key, uint32_t *crypt, unsigned int power
function tinyEncrypt ( plain, key,power)
{
    var y,z,a,b,c,d;
    var sum = 0;
    var i;
    var rounds = 1<<power;

    y = plain[0];
    z = plain[1];
    a = key[0];
    b = key[1];
    c = key[2];
    d = key[3];

    for (i = 0; i < rounds; i++) {
        sum += TEA_DELTA;
        sum = sum>>>0;


        // y += ((z << 4) + a) ^ (z + sum) ^ ((z >>> 5) + b);
  		var y1 	=	((( z<<4>>>0) + a) & 0xffffffff )>>>0
  		var y2 	=	((z + sum)		 & 0xffffffff  )>>>0
  		var y3 	=	(((z >>> 5) + b)	 & 0xffffffff  )>>>0
  		var yp 	=	(y1 ^ y2 ^ y3  )>>>0

        y += yp;
  		y= y>>>0


        // z += ((y << 4) + c) ^ (y + sum) ^ ((y >>> 5) + d);

  		var z1 	=	((( y<<4>>>0) + c) & 0xffffffff )>>>0
  		var z2 	=	((y + sum) & 0xffffffff  )>>>0
  		var z3 	=	(((y >>> 5) + d) & 0xffffffff  )>>>0

  		var zp 	=	(z1 ^ z2 ^ z3  )>>>0


        z += zp;
		      z= z>>>0

    }
	var crypt	=	[];
    crypt[0] = y;
    crypt[1] = z;

	return crypt
}


//const unsigned int * crypt, const unsigned int * key, unsigned int *plain, unsigned int power
function tinyDecrypt (  crypt,  key, power)
{
    var y,z,a,b,c,d;
    var rounds = 1<<power;
    var sum = (TEA_DELTA<<power)>>>0;
    var i;

    y = crypt[0]>>>0;
    z = crypt[1]>>>0;
    a = key[0];
    b = key[1];
    c = key[2];
    d = key[3];


    for (i = 0; i < rounds; i++) {

    		var z1 	=	((( y<<4>>>0) + c) & 0xffffffff )>>>0
    		var z2 	=	((y + sum)		 & 0xffffffff  )>>>0
    		var z3 	=	(((y >>> 5) + d)	 & 0xffffffff  )>>>0

    		var zp 	=	(z1 ^ z2 ^ z3  )>>>0


            z -= zp;
    		z= z>>>0

    		var y1 	=	((( z<<4>>>0) + a) & 0xffffffff )>>>0
    		var y2 	=	((z + sum)		 & 0xffffffff  )>>>0
    		var y3 	=	(((z >>> 5) + b)	 & 0xffffffff  )>>>0

    		var yp 	=	(y1 ^ y2 ^ y3  )>>>0


        y -= yp;
        sum -= TEA_DELTA;

    		z= z>>>0
    		y= y>>>0
    		sum= sum>>>0

    }
	var plain	=	[];
    plain[0] = y;
    plain[1] = z;

	return plain
}

 function xTEADecryptWithKey(crypt,key)
{
	if(!crypt  || !key  ){
		// console.log(crypt,key,crypt.length)
		return false;
	}
  if(key.length>16){
    key   = key.substr(0,16)
  }

	var tkey 	= 	str2long(key);
	var tcrypt 	=	new Uint32Array(crypt);

	var crypt_len 	=	 crypt.length || crypt.byteLength;

	if( crypt_len<1 || crypt_len%8 ){
		return false;
	}

	var alloLen =	crypt_len/4+16;
	var tplain	= []


	var length 			= crypt_len;
	var pre_plain  		= [0,0];
	var p_buf  			= [0,0];
	var c_buf 			= [0,0];

	var padLength 		= 0;
	var i 				   = 0;
	p_buf	=	tinyDecrypt(tcrypt, tkey,  4);


	pre_plain[0]	=	p_buf[0]
	pre_plain[1]	=	p_buf[1]

	tplain[0]		=	p_buf[0]
	tplain[1]		=	p_buf[1]

	for (i = 2; i <  length/4; i+=2) {

			c_buf[0] =  ( (tcrypt[i]) ^ pre_plain[0] ) >>>0;
			c_buf[1] =  ( (tcrypt[i+1]) ^ pre_plain[1] ) >>>0;

		p_buf	=	tinyDecrypt(c_buf, tkey, 4);

		pre_plain[0]	=	p_buf[0]
		pre_plain[1]	=	p_buf[1]

		tplain[i]	=	 ( p_buf[0] ^ (tcrypt[i-2]) ) >>>0;
		tplain[i+1]	=	 ( p_buf[1] ^ (tcrypt[i-1]) )>>>0;
	}

	if ( tplain[length/4-1] || (tplain[length/4-2]&0xffffff00)  )
	{
		console.error('bad tplain',tplain[length/4-1],tplain[length/4-2],',po=',(tplain[length/4-2]&0xffffff00))
		return false;
	}

	padLength =  (tplain[0] & 0xff) & 0x07;

	length = (length / 4 + 1)*4 - (padLength+3);  //add by zyf


	var plainchasrs 	=	long2chars(tplain)


	for(var i =0 ;i<length;i++){
		plainchasrs[i]	=	plainchasrs[padLength+3+i] || 0
	}
	var plain_len = crypt_len - (padLength+3) -7;/*(pad 7 unsigned chars 0x00 at the end)*/
  plainchasrs = plainchasrs.slice(0, plain_len);
  // var enc = new TextDecoder();
  var enc = {
  	decode: TextDecoder
  };
  var arr = new Uint8Array(plainchasrs);

	var plainText =	 enc.decode(arr)

	return plainText;

}

// plain 是以 string 出现的
//  返回的是 arraybuffer数据
function xTEAEncryptWithKey(plain, key )
{
	if(!plain   || !key    || plain.length==0)
		return null;

  if(key.length>16){
      key   = key.substr(0,16)
  }


 var uint8   = encodeUTF8(plain)
	var newbuff = new Uint8Array(uint8.length+(4-uint8.length%4))
 newbuff.fill(0)
	uint8.forEach((v,k)=>{
		newbuff[k]=v
	})



	var pad  = [0xad,0xad,0xad,0xad,0xad,0xad,0xad,0xad,0xad];

	var tkey 		= 	str2long(key);
	var tplain 	= 	new Uint32Array(newbuff.buffer);
	//var tplain 	=	str2long(plain);


	var pre_plain  	= 	[0,0];
	var pre_crypt  	= 	[0,0];
	var p_buf  		= 	[0,0];
	var c_buf  		= 	[0,0];

	var padLength 	= 	0;
	var i 			= 	0;

	var plain_chars	=	uint8
	var plain_len 	=	plain_chars.length

	// console.log('tplain',tplain.length,plain_len)

	// padding data
	padLength = (plain_len+10)%8;//at least pad 2 unsigned chars
	padLength = padLength ? 8 - padLength : 0;//total pad length -2

	var length = padLength+3+plain_len+7;

	var alloLen 	=	length/4+16;
  var handl 	=	new ArrayBuffer(length)
	var tcrypt 		= 	new Uint32Array(handl)  	//int
	var tcrypt_copy = 	new Uint8Array(handl) 		//char

	/*
		int *tcrypt =(int*)plain;
		memset(tcrypt,0,sizeof(int)*alloLen);
	*/

	tcrypt_copy[0] = 0xa8 | padLength;//first pad unsigned char: total padding unsigned chars - 2 or 0xa8


	for(var k=0;k<padLength+2;k++){
		tcrypt_copy[1+k]	=pad[k]
	}

	for(var k=0;k<plain_len;k++){
		tcrypt_copy[padLength+3+k]	= plain_chars[k]
	}

	for(var k=0;k<7;k++){
		tcrypt_copy[padLength+3+plain_len+k]	= 0
	}

	// console.log('tcrypt_copy',alloLen,tcrypt_copy)
	// tcrypt	=		char2long(tcrypt_copy)
	// console.log('tcrypt',tcrypt.length,tcrypt)


	//Interlace algorithm(��֯�㷨)
	for (i = 0; i < length/4; i+=2) {

		p_buf[0] = (tcrypt[i]) ^ pre_crypt[0];
		p_buf[1] = (tcrypt[i+1]) ^ pre_crypt[1];

		// console.log('tcrypt:',tcrypt[i],tcrypt[i+1]);
		// console.log('p_buf:',p_buf[0],p_buf[1]);

		c_buf = tinyEncrypt( p_buf, tkey, 4);
		tcrypt[i] = c_buf[0] ^ pre_plain[0];
		tcrypt[i+1] = c_buf[1] ^ pre_plain[1];

		pre_crypt[0]	=	 tcrypt[i]
		pre_crypt[1]	=	 tcrypt[i+1]

		pre_plain[0]	=	 p_buf[0]
		pre_plain[1]	=	 p_buf[1]

	}

	return handl

}
function stringToUint8(str){
　　　　var val=[];
		var  buffer 	=	new ArrayBuffer(str.length)
		var typedArray = new Uint8Array( buffer );
　　　　for(var i = 0; i < str.length; i++){
　　　　　　typedArray[i]	=	(str.charCodeAt(i))
　　　　}
　　　　return buffer;
}

function stringToHex(str){
　　　　var val="";
　　　　for(var i = 0; i < str.length; i++){
　　　　　　if(val == "")
　　　　　　　　val = "0x"+str.charCodeAt(i).toString(16);
　　　　　　else
　　　　　　　　val += ",0x" + str.charCodeAt(i).toString(16);
　　　　}
　　　　return val;
}

module.exports = {
  xTEAEncryptWithKey,
  xTEADecryptWithKey
}
// export default {
//   xTEAEncryptWithKey,
//   xTEADecryptWithKey
// }
