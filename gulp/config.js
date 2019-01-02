export const paths = {
  src: './src',
  dest: './assets',
  deploy: './assets/**/*',
  styles: {
    src: 'src/styles/main.scss',
    watch: 'src/styles/**/*.scss',
    modules: 'src/modules/**/*.scss',
    dest: 'assets/css',
    lint: 'src/styles/**/*.s+(a|c)ss'
  },
  scripts: {
    src: './src/scripts/app.js',
    watch: 'src/scripts/**/*.js',
    modules: 'src/modules/**/*.js',
    dest: 'assets/js',
  },
  images: {
    src: 'src/images/img/**/*',
    modules: 'src/modules/**/*.+(gif|png|jpe?g|svg)',
    dest: 'assets/img'
  },
};

export const isProd = process.env.NODE_ENV === 'production';
