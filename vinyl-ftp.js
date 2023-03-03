var fs = require( 'vinyl-fs' );
var ftp = require( 'vinyl-ftp' );
 
var conn = new ftp( {
    host: 'ftpupload.net',
    user: 'valaki',
    password: 'titok',
    parallel: 10,
    secure: true,
    secureOptions: {rejectUnauthorized: false}
});
 
fs.src( [ './src/**' ], { buffer: false } )
    .pipe( conn.dest( '/htdocs' ) );