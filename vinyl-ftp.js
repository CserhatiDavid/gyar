var fs = require( 'vinyl-fs' );
var ftp = require( 'vinyl-ftp' );
 
var conn = new ftp( {
    host: 'valahol.tld',
    user: 'valaki',
    password: 'titok',
    parallel: 10,
    secure: true,
    secureOptions: {rejectUnauthorized: true}
});
 
fs.src( [ './src/**' ], { buffer: false } )
    .pipe( conn.dest( '/public' ) );