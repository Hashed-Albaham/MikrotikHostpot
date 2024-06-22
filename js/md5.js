function safe_add(d,c){var a=(d&65535)+(c&65535);return(d>>16)+(c>>16)+(a>>16)<<16|a&65535}function rol(d,c){return d<<c|d>>>32-c}function cmn(d,c,a,b,e,f){return safe_add(rol(safe_add(safe_add(c,d),safe_add(b,f)),e),a)}function ff(d,c,a,b,e,f,g){return cmn(c&a|~c&b,d,c,e,f,g)}function gg(d,c,a,b,e,f,g){return cmn(c&b|a&~b,d,c,e,f,g)}function hh(d,c,a,b,e,f,g){return cmn(c^a^b,d,c,e,f,g)}function ii(d,c,a,b,e,f,g){return cmn(a^(c|~b),d,c,e,f,g)}
function coreMD5(d){var c=1732584193,a=-271733879,b=-1732584194,e=271733878;for(i=0;i<d.length;i+=16){var f=c,g=a,h=b,k=e;c=ff(c,a,b,e,d[i+0],7,-680876936);e=ff(e,c,a,b,d[i+1],12,-389564586);b=ff(b,e,c,a,d[i+2],17,606105819);a=ff(a,b,e,c,d[i+3],22,-1044525330);c=ff(c,a,b,e,d[i+4],7,-176418897);e=ff(e,c,a,b,d[i+5],12,1200080426);b=ff(b,e,c,a,d[i+6],17,-1473231341);a=ff(a,b,e,c,d[i+7],22,-45705983);c=ff(c,a,b,e,d[i+8],7,1770035416);e=ff(e,c,a,b,d[i+9],12,-1958414417);b=ff(b,e,c,a,d[i+10],17,-42063);
  a=ff(a,b,e,c,d[i+11],22,-1990404162);c=ff(c,a,b,e,d[i+12],7,1804603682);e=ff(e,c,a,b,d[i+13],12,-40341101);b=ff(b,e,c,a,d[i+14],17,-1502002290);a=ff(a,b,e,c,d[i+15],22,1236535329);c=gg(c,a,b,e,d[i+1],5,-165796510);e=gg(e,c,a,b,d[i+6],9,-1069501632);b=gg(b,e,c,a,d[i+11],14,643717713);a=gg(a,b,e,c,d[i+0],20,-373897302);c=gg(c,a,b,e,d[i+5],5,-701558691);e=gg(e,c,a,b,d[i+10],9,38016083);b=gg(b,e,c,a,d[i+15],14,-660478335);a=gg(a,b,e,c,d[i+4],20,-405537848);c=gg(c,a,b,e,d[i+9],5,568446438);e=gg(e,c,a,
      b,d[i+14],9,-1019803690);b=gg(b,e,c,a,d[i+3],14,-187363961);a=gg(a,b,e,c,d[i+8],20,1163531501);c=gg(c,a,b,e,d[i+13],5,-1444681467);e=gg(e,c,a,b,d[i+2],9,-51403784);b=gg(b,e,c,a,d[i+7],14,1735328473);a=gg(a,b,e,c,d[i+12],20,-1926607734);c=hh(c,a,b,e,d[i+5],4,-378558);e=hh(e,c,a,b,d[i+8],11,-2022574463);b=hh(b,e,c,a,d[i+11],16,1839030562);a=hh(a,b,e,c,d[i+14],23,-35309556);c=hh(c,a,b,e,d[i+1],4,-1530992060);e=hh(e,c,a,b,d[i+4],11,1272893353);b=hh(b,e,c,a,d[i+7],16,-155497632);a=hh(a,b,e,c,d[i+10],23,
      -1094730640);c=hh(c,a,b,e,d[i+13],4,681279174);e=hh(e,c,a,b,d[i+0],11,-358537222);b=hh(b,e,c,a,d[i+3],16,-722521979);a=hh(a,b,e,c,d[i+6],23,76029189);c=hh(c,a,b,e,d[i+9],4,-640364487);e=hh(e,c,a,b,d[i+12],11,-421815835);b=hh(b,e,c,a,d[i+15],16,530742520);a=hh(a,b,e,c,d[i+2],23,-995338651);c=ii(c,a,b,e,d[i+0],6,-198630844);e=ii(e,c,a,b,d[i+7],10,1126891415);b=ii(b,e,c,a,d[i+14],15,-1416354905);a=ii(a,b,e,c,d[i+5],21,-57434055);c=ii(c,a,b,e,d[i+12],6,1700485571);e=ii(e,c,a,b,d[i+3],10,-1894986606);
  b=ii(b,e,c,a,d[i+10],15,-1051523);a=ii(a,b,e,c,d[i+1],21,-2054922799);c=ii(c,a,b,e,d[i+8],6,1873313359);e=ii(e,c,a,b,d[i+15],10,-30611744);b=ii(b,e,c,a,d[i+6],15,-1560198380);a=ii(a,b,e,c,d[i+13],21,1309151649);c=ii(c,a,b,e,d[i+4],6,-145523070);e=ii(e,c,a,b,d[i+11],10,-1120210379);b=ii(b,e,c,a,d[i+2],15,718787259);a=ii(a,b,e,c,d[i+9],21,-343485551);c=safe_add(c,f);a=safe_add(a,g);b=safe_add(b,h);e=safe_add(e,k)}return[c,a,b,e]}
function binl2hex(d){for(var c="",a=0;a<4*d.length;a++)c+="0123456789abcdef".charAt(d[a>>2]>>a%4*8+4&15)+"0123456789abcdef".charAt(d[a>>2]>>a%4*8&15);return c}function binl2b64(d){for(var c="",a=0;a<32*d.length;a+=6)c+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(d[a>>5]<<a%32&63|d[a>>6]>>32-a%32&63);return c}
function str2binl(d){for(var c=(d.length+8>>6)+1,a=Array(16*c),b=0;b<16*c;b++)a[b]=0;for(b=0;b<d.length;b++)a[b>>2]|=(d.charCodeAt(b)&255)<<b%4*8;a[b>>2]|=128<<b%4*8;a[16*c-2]=8*d.length;return a}function strw2binl(d){for(var c=(d.length+4>>5)+1,a=Array(16*c),b=0;b<16*c;b++)a[b]=0;for(b=0;b<d.length;b++)a[b>>1]|=d.charCodeAt(b)<<b%2*16;a[b>>1]|=128<<b%2*16;a[16*c-2]=16*d.length;return a}function hexMD5(d){return binl2hex(coreMD5(str2binl(d)))}
function hexMD5w(d){return binl2hex(coreMD5(strw2binl(d)))}function b64MD5(d){return binl2b64(coreMD5(str2binl(d)))}function b64MD5w(d){return binl2b64(coreMD5(strw2binl(d)))}function calcMD5(d){return binl2hex(coreMD5(str2binl(d)))};
