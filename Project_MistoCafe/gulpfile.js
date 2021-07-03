const { src, dest, watch, parallel, series } = require('gulp');
const scss         = require('gulp-sass');
const pug          = require('gulp-pug');
const concat       = require('gulp-concat');
const browserSync  = require('browser-sync').create();
const uglify       = require('gulp-uglify-es').default;
const autoprefixer = require('gulp-autoprefixer');
const imagemin     = require('gulp-imagemin');
const del          = require('del');

function browsersync() {
    browserSync.init({
        server : {
            baseDir: 'app/'
        }
    });
}

function index() {
    return src('app/pug/**/*.pug')
      .pipe(
        pug({
          pretty: true
        })
      )
      .pipe(dest('app/'));
}

// function indexRu() {
//     return src('app/pug/ru/*.pug')
//       .pipe(
//         pug({
//           pretty: true
//         })
//       )
//       .pipe(dest('app/ru/'));
// }

function indexPizza() {
    return src('app/pug/pizza/*.pug')
      .pipe(
        pug({
          pretty: true
        })
      )
      .pipe(dest('app/pizza/'));
}

// function indexPizzaRu() {
//     return src('app/pug/ru/pizza/*.pug')
//       .pipe(
//         pug({
//           pretty: true
//         })
//       )
//       .pipe(dest('app/ru/pizza/'));
// }

function indexBeer() {
  return src('app/pug/beer/*.pug')
    .pipe(
      pug({
        pretty: true
      })
    )
    .pipe(dest('app/beer/'));
}

// function indexBeerRu() {
//   return src('app/pug/ru/beer/*.pug')
//     .pipe(
//       pug({
//         pretty: true
//       })
//     )
//     .pipe(dest('app/ru/beer/'));
// }

function indexBurgers() {
  return src('app/pug/burgers/*.pug')
    .pipe(
      pug({
        pretty: true
      })
    )
    .pipe(dest('app/burgers/'));
}

// function indexBurgersRu() {
//   return src('app/pug/ru/burgers/*.pug')
//     .pipe(
//       pug({
//         pretty: true
//       })
//     )
//     .pipe(dest('app/ru/burgers/'));
// }

function indexChldren() {
  return src('app/pug/chldren/*.pug')
    .pipe(
      pug({
        pretty: true
      })
    )
    .pipe(dest('app/chldren/'));
}

// function indexChldrenRu() {
//   return src('app/pug/ru/chldren/*.pug')
//     .pipe(
//       pug({
//         pretty: true
//       })
//     )
//     .pipe(dest('app/ru/chldren/'));
// }

function indexPans() {
  return src('app/pug/pans/*.pug')
    .pipe(
      pug({
        pretty: true
      })
    )
    .pipe(dest('app/pans/'));
}

// function indexPansRu() {
//   return src('app/pug/ru/pans/*.pug')
//     .pipe(
//       pug({
//         pretty: true
//       })
//     )
//     .pipe(dest('app/ru/pans/'));
// }

function indexPasta() {
  return src('app/pug/pasta/*.pug')
    .pipe(
      pug({
        pretty: true
      })
    )
    .pipe(dest('app/pasta/'));
}

// function indexPastaRu() {
//   return src('app/pug/ru/pasta/*.pug')
//     .pipe(
//       pug({
//         pretty: true
//       })
//     )
//     .pipe(dest('app/ru/pasta/'));
// }

function indexDelivery() {
  return src('app/pug/delivery/*.pug')
    .pipe(
      pug({
        pretty: true
      })
    )
    .pipe(dest('app/delivery/'));
}

// function indexDeliveryRu() {
//   return src('app/pug/ru/delivery/*.pug')
//     .pipe(
//       pug({
//         pretty: true
//       })
//     )
//     .pipe(dest('app/ru/delivery/'));
// }

function indexFirst_meals() {
  return src('app/pug/first_meals/*.pug')
    .pipe(
      pug({
        pretty: true
      })
    )
    .pipe(dest('app/first_meals/'));
}

// function indexFirst_mealsRu() {
//   return src('app/pug/ru/first_meals/*.pug')
//     .pipe(
//       pug({
//         pretty: true
//       })
//     )
//     .pipe(dest('app/ru/first_meals/'));
// }

function indexHot_meals() {
  return src('app/pug/hot_meals/*.pug')
    .pipe(
      pug({
        pretty: true
      })
    )
    .pipe(dest('app/hot_meals/'));
}

// function indexHot_mealsRu() {
//   return src('app/pug/ru/hot_meals/*.pug')
//     .pipe(
//       pug({
//         pretty: true
//       })
//     )
//     .pipe(dest('app/ru/hot_meals/'));
// }

function indexSalats() {
  return src('app/pug/salats/*.pug')
    .pipe(
      pug({
        pretty: true
      })
    )
    .pipe(dest('app/salats/'));
}

// function indexSalatsRu() {
//   return src('app/pug/ru/salats/*.pug')
//     .pipe(
//       pug({
//         pretty: true
//       })
//     )
//     .pipe(dest('app/ru/salats/'));
// }

function indexStocks() {
  return src('app/pug/stocks/*.pug')
    .pipe(
      pug({
        pretty: true
      })
    )
    .pipe(dest('app/stocks/'));
}

// function indexStocksRu() {
//   return src('app/pug/ru/stocks/*.pug')
//     .pipe(
//       pug({
//         pretty: true
//       })
//     )
//     .pipe(dest('app/ru/stocks/'));
// }

function indexSweets() {
  return src('app/pug/sweets/*.pug')
    .pipe(
      pug({
        pretty: true
      })
    )
    .pipe(dest('app/sweets/'));
}

// function indexSweetsRu() {
//   return src('app/pug/ru/sweets/*.pug')
//     .pipe(
//       pug({
//         pretty: true
//       })
//     )
//     .pipe(dest('app/ru/sweets/'));
// }

function styles() {
    return src('app/scss/style.scss')
        .pipe(scss({outputStyle: 'compressed'}))
        .pipe(concat('style.min.css'))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 10 version'],
            grid: true
        }))
        .pipe(dest('app/css'))
        .pipe(browserSync.stream())
}

function scripts() {
    return src([
        'app/js/main.js'
    ])
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(dest('app/js'))
        .pipe(browserSync.stream())
}

function images() {
    return src('app/img/**/*')
        .pipe(imagemin(
            [
                imagemin.gifsicle({interlaced: true}),
                imagemin.mozjpeg({quality: 75, progressive: true}),
                imagemin.optipng({optimizationLevel: 5}),
                imagemin.svgo({
                    plugins: [
                        {removeViewBox: true},
                        {cleanupIDs: false}
                    ]
                })
            ]
        ))
        .pipe(dest('dist/img'))
}

function watching() {
    watch(['app/scss/**/*.scss'], styles);
    watch(['app/pug/**/*.pug'], index,  indexPizza,  indexBeer, indexBurgers, indexChldren, indexPans, indexDelivery, indexFirst_meals, indexHot_meals, indexSalats, indexStocks, indexSweets);         
                                // indexRu,  indexPizzaRu,  indexBeerRu, indexBurgersRu, indexChldrenRu, indexPansRu, indexDeliveryRu, indexFirst_mealsRu, indexHot_mealsRu, indexSalatsRu, indexStocksRu, indexSweetsRu);
    watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts);
    watch(['app/**/*.html']).on('change', browserSync.reload);
}

function build() {
    return src([
        'app/css/style.min.css',
        'app/fonts/**/*',
        'app/js/main.min.js',
        'app/*.html',
        'app/burgers/*.html',
        'app/beer/*.html',
        'app/children/*.html',
        'app/delivery/*.html',
        'app/first_meals/*.html',
        'app/hot_meals/*.html',
        'app/pans/*.html',
        'app/pasta/*.html',
        'app/pizza/*.html',
        // 'app/ru/*.html',
        'app/salats/*.html',
        'app/stocks/*.html',
        'app/sweets/*.html'
    ], {base: 'app'})
    .pipe(dest('dist'))
}

function cleanDist() {
    return del('dist')
}

exports.styles = styles;
exports.views =   

                index,  indexPizza,  indexBeer, indexBurgers, indexChldren, indexPans, indexPasta, indexDelivery, indexFirst_meals, indexHot_meals, indexSalats, indexStocks, indexSweets;
                
                // indexRu,  indexPizzaRu,  indexBeerRu, indexBurgersRu, indexChldrenRu, indexPansRu, indexDeliveryRu, indexFirst_mealsRu, indexHot_mealsRu, indexSalatsRu, indexStocksRu, indexSweetsRu;

exports.watching = watching;
exports.browsersync = browsersync;
exports.scripts = scripts;
exports.images = images;
exports.cleanDist = cleanDist;

exports.build = series(cleanDist, images, build);
exports.default = parallel(

  styles,  scripts, browsersync, watching,

  index,  indexPizza,  indexBeer, indexBurgers, indexChldren, indexPans, indexPasta, indexDelivery, indexFirst_meals, indexHot_meals, indexSalats, indexStocks, indexSweets);

  // indexRu,  indexPizzaRu,  indexBeerRu, indexBurgersRu, indexChldrenRu, indexPansRu, indexDeliveryRu, indexFirst_mealsRu, indexHot_mealsRu, indexSalatsRu, indexStocksRu, indexSweetsRu);