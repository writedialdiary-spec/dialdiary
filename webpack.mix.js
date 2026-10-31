const mix = require('laravel-mix');

/*
|--------------------------------------------------------------------------
| Mix Asset Management
|--------------------------------------------------------------------------
|
| Mix provides a clean, fluent API for defining some Webpack build steps
| for your Laravel applications. By default, we are compiling the CSS
| file for the application as well as bundling up all the JS files.
|
*/

mix.js('resources/js/app.js', 'public/js')
  .postCss('resources/css/app.css', 'public/css', [
    //
  ]);
  

mix.scripts([
    'public/assets/front/js/vendors/jquery.min.js',
    'public/assets/front/js/vendors/popper.min.js',
    'public/assets/front/js/vendors/bootstrap.min.js',
    'public/assets/front/js/vendors/bootstrap-datepicker.min.js',
    'public/assets/front/js/vendors/datatables.min.js',
    'public/assets/front/js/vendors/jquery.nice-select.min.js',
    'public/assets/front/js/vendors/select2.min.js',
    'public/assets/front/js/vendors/jquery.magnific-popup.min.js',
    'public/assets/front/js/vendors/jquery.counterup.min.js',
    'public/assets/front/js/vendors/jquery.waypoints.js',
    'public/assets/front/js/vendors/swiper-bundle.min.js',
    'public/assets/front/js/vendors/lazysizes.min.js',
    'public/assets/front/js/vendors/nouislider.min.js',
    'public/assets/front/js/vendors/aos.min.js',
    'public/assets/front/js/vendors/mouse-hover-move.js',
    'public/assets/front/js/vendors/svg-loader.min.js',
    'public/assets/front/js/vendors/leaflet.js',
    'public/assets/front/js/vendors/leaflet.fullscreen.min.js',
    'public/assets/front/js/vendors/leaflet.markercluster.js',
    'public/assets/front/js/script.js',
    'public/assets/front/js/main.js',
], 'public/assets/front/js/app.js')
.minify('public/assets/front/js/app.js');

mix.disableNotifications();

