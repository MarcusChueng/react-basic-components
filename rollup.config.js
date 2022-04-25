/*
 * @Description: 
 * @version: 
 * @Author: MarcusCheung
 * @Date: 2022-04-25 18:45:14
 * @LastEditors: MarcusCheung
 * @LastEditTime: 2022-04-25 19:02:03
 */
import peerDepsExternal from "rollup-plugin-peer-deps-external"
import resolve from "rollup-plugin-node-resolve"
import commonjs from "rollup-plugin-commonjs"
import typescript from "rollup-plugin-typescript2"
import postcss from "rollup-plugin-postcss"
import json from "@rollup/plugin-json"

const { babel } = require("rollup-plugin-babel")
const packageJson = require("./package.json")
const less = require("less")
const isProd = process.env.NODE_ENV === "production"