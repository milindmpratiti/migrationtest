'user strict'
var crypto = require('crypto')
var fs = require('fs')
 
//console.log( crypto.getHashes()); // [ 'dsa', 'dsa-sha', ..., 'md5', ... ]


function chsum ( data)
{
	
 var chsum = crypto.createHash('sha256').update(data, 'utf8').digest('hex');
 
 console.log( chsum);
}


const fname = 'full_robot-1.0.9.28777-dev.ota';
let version1 = fname.match(/-[0-9.]*-/i);
version1 = version1[0].slice(1, -1);

console.log (version1);


let lidx = fname.lastIndexOf( '.');

//lidx = lidx *-1.0;
console.log( fname.length - lidx);
const fnamenew = fname.slice( 0,   lidx);
console.log( fnamenew);

const filename = 'wifi_2_0_28694-bhidev.zip';

let version = filename.match(/_[0-9_]*-/i);
version = version[0].slice(1, -1);
version = version.replace( /_/g,'.');
console.log (version);



const fwname = "full_robot-1.0.9.28777-dev.ota".slice( 11, -4);
console.log( 'this one is from dev branch '+fwname);


/*
 
 
 fs.readFile('d:/scratchpad/full_robot-1.0.9.28777-dev.ota', function(err, data) {
	 console.log( err);
  chsum(data) // e53815e8c095e270c6560be1bb76a65d
  
  
	const fe3 = data.toString().split( '\n');
   
	const componentList = [];
	const component = {};
	for( let k =0; k < fe3.length;k++)
	{
		
		if( fe3[k].startsWith("'target"))
		{
			const idx1 = fe3[k].indexOf('=');
			const idx2 = fe3[k].indexOf(':');
			const idx3 = fe3[k].indexOf('.');
			
			if( idx1 > 0 && idx2 >0){
				const componentName = fe3[k].substring( idx1+1,idx2);
				component.componentName = componentName;
				 
			}
			else if( idx2 == -1)
			{
				const componentName = fe3[k].substring(idx3+1);
				component.componentName = componentName;
				 		
			}
			
			
		}
		if( fe3[k].startsWith("'version"))
		{
			const idx1 = fe3[k].indexOf('=');
			const idx2 = fe3[k].indexOf('-');
			 
			if( idx1 > 0 && idx2 >0){
				const version = fe3[k].substring( idx1+1,idx2);
				component.componentVersion = version;
			}
			let cloned = Object.assign({}, component);
			componentList.push(cloned);
		}
		
		
	}
	console.log( componentList);
}) */