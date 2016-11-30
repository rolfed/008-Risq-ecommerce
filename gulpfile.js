const elixir = require('laravel-elixir');
var ElixirGroup = require('laravel-elixir-group');

require('laravel-elixir-vue-2');
require('laravel-elixir-wiredep');
require('laravel-elixir-ngtemplatecache');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

var depOptions = {
    fileTypes: {
        php: {
            block: /(([ \t]*)<!--\s*bower:*(\S*)\s*-->)(\n|\r|.)*?(<!--\s*endbower\s*-->)/gi,
            detect: {
                js: /<script.*src=['"]([^'"]+)/gi,
                css: /<link.*href=['"]([^'"]+)/gi
            },
            replace: {
                js: '<script src="{{ asset(\'{{filePath}}\') }}"></script>',
                css: '<link rel="stylesheet" href="{{ asset(\'{{filePath}}\') }}" />'
            }
        }
    }
};

ElixirGroup.register('vendor', function(){
	elixir(function(mix){
		mix.wiredep('php', {
			src: 'index.blade.php'
		}, depOptions);

        mix.copy(
            'public/bower_components/bootstrap-sass/assets/stylesheets',
            'resources/assets/sass/vendor/bootstrap'
        );


	});
});

elixir(function(mix){

    mix
        

        .sass('app.scss', 'public/assets/css/app.css')

        .scripts ([
            '**/*.js',
        ], 'public/assets/js/app.js')

        .version([
            'public/assets/css/app.css',
            'public/assets/js/app.js'
        ])

        .copy('resources/views/**/*.html', 'public/assets/views')

        .browserSync({
            proxy: 'localhost',
            port: '8000',
            files: [
                'resources/**/*'
            ]
        });
});

ElixirGroup.start();