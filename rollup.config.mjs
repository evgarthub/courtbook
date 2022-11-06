import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import html from "rollup-plugin-generate-html-template";
import cleaner from "rollup-plugin-cleaner";

import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import replace from "@rollup/plugin-replace";

export default [
  {
    input: "src/index.tsx",
    output: [
      {
        file: "dist/index.js",
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      external(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      replace({
        "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
      }),
      postcss(),
      html({ template: "public/index.html", target: "dist/index.html" }),
      cleaner({
        targets: ["./dist/"],
      }),
      serve({
        open: true,
        verbose: true,
        contentBase: "dist",
        host: "localhost",
        port: 3000,
      }),
      livereload("dist"),
    ],
  },
];
