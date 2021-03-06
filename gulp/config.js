export const base = {
  root: './',
  src: './src',
  dest: './www',
  host: 'localhost',
  port: 9000,
  fonticon: {
    name: 'Frontlab_Icons',
    copyright: 'Frontlab BR',
    fontId: 'workflow-project'
  }
}

export const path = {
  styles: {
    src: `${base.src}/styles/main.scss`,
    watch: `${base.src}/styles/**/*.scss`,
    modules: `${base.src}/modules/**/*.scss`,
    dest: `${base.dest}/assets/css`,
    lint: `${base.src}/styles/**/*.s+(a|c)ss`
  },
  scripts: {
    src: `${base.src}/scripts/app.js`,
    watch: `${base.src}/scripts/**/*.js`,
    modules: `${base.src}/modules/**/*.js`,
    dest: `${base.dest}/assets/js/`,
  },
  images: {
    src: `${base.src}/images/figures/**/*`,
    modules: `${base.src}/modules/**/*.+(gif|png|jpe?g|svg)`,
    icons: {
      svg: `${base.src}/images/icons/*.svg`,
      scss: `${base.src}/styles/tools`
    },
    dest: `${base.dest}/assets/img/`
  },
  fonts: {
    src: `${base.src}/fonts/`,
    dest: `${base.dest}/assets/font/`
  }
}

export const isProd = process.env.NODE_ENV === `production`;
