import { defineConfig } from 'rollup'
import { babel } from '@rollup/plugin-babel'
import { visualizer } from 'rollup-plugin-visualizer'
import size from 'rollup-plugin-sizes'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import peerDepsExternalPlugin from 'rollup-plugin-peer-deps-external'

// Will use this later on
// import { terser } from 'rollup-plugin-terser';

const extensions = ['.js', '.jsx']

const config = defineConfig({
  input: 'src/index.js',
  output: [
    {
      dir: 'dist/esm',
      format: 'esm',
      preserveModules: true,
      sourcemap: true,
    },
    {
      file: 'dist/cjs/index.js',
      format: 'cjs',
      sourcemap: true,
    },
  ],
  external: [/@babel\/runtime/],
  plugins: [
    peerDepsExternalPlugin(),
    babel({
      babelHelpers: 'runtime',
      plugins: ['@babel/plugin-transform-runtime'],
      extensions,
    }),
    nodeResolve({
      extensions,
    }),
    commonjs(),
    visualizer({
      gzipSize: true,
      brotliSize: true,
    }),
    size(),
  ],
})

export default config
