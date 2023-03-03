var fs = require( 'vinyl-fs' );
var ftp = require( 'vinyl-ftp' );
var reader=require('properties-reader');
var config=reader('config/config.properties');

const host=config.get('hosting.host');
const user=config.get('hosting.user');
const pass=config.get('hosting.password');

var conn = new ftp( {
    host: host,
    user: user,
    password: pass,
    parallel: 10,
    secure: true,
    secureOptions: {rejectUnauthorized: false}
});
 
fs.src( [ './src/**' ], { buffer: false } )
    .pipe( conn.dest( '/htdocs' ) );
