import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import PeerDepsExternal from "rollup-plugin-peer-deps-external";
import {terser} from 'rollup-plugin-terser';

export default {
    input: 'src/index.ts',
    output: {
        file: 'dist/index.js',
        format: 'cjs',
        sourcemap: true
    },
    plugins: [
        PeerDepsExternal(),
        resolve(),
        typescript(),
        babel({
            extensions: ['.ts', '.tsx'],
            exclude: 'node_modules/**'
        }),
        terser()
    ]
};