import { defineConfig } from 'rollup'
import { babel } from '@rollup/plugin-babel'
import { visualizer } from 'rollup-plugin-visualizer'
import size from 'rollup-plugin-sizes'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import peerDepsExternalPlugin from 'rollup-plugin-peer-deps-external'
import alias from '@rollup/plugin-alias'
import copy from 'rollup-plugin-copy'

// Will use this later on
// import { terser } from 'rollup-plugin-terser'

const extensions = ['.js', '.jsx']

const config = defineConfig({
  input: {
    index: 'src/index.js',
    hooks: 'src/hooks/index.js',
    utils: 'src/utils/index.js',
    animations: 'src/animations/index.js',
    svg: 'src/svg/index.js',
  },
  output: [
    {
      dir: 'dist',
      format: 'esm',
      preserveModules: true,
      preserveModulesRoot: 'src',
      entryFileNames: 'index.js',
      sourcemap: true,
    },
    {
      dir: 'dist',
      format: 'cjs',
      entryFileNames: '[name].cjs.js',
      sourcemap: true,
    },
  ],
  external: [/@babel\/runtime/, /dayjs/],
  plugins: [
    peerDepsExternalPlugin(),
    babel({
      babelHelpers: 'runtime',
      plugins: ['@babel/plugin-transform-runtime'],
      extensions,
    }),
    commonjs(),
    alias({
      entries: {
        '@/*': './src/*',
      },
    }),
    copy({
      targets: [
        { src: 'src/assets', dest: ['dist/cjs', 'dist/esm'] },
        { src: 'src/reset.css', dest: ['dist/cjs', 'dist/esm'] },
      ],
    }),
    nodeResolve({
      extensions,
    }),
    visualizer({
      gzipSize: true,
      brotliSize: true,
    }),
    size(),
  ],
})

export default config
