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
  },
  output: [
    {
      dir: 'dist/esm',
      format: 'esm',
      preserveModules: true,
      preserveModulesRoot: 'src',
      sourcemap: true,
    },
    {
      dir: 'dist/cjs',
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
  ],
})

export default config
