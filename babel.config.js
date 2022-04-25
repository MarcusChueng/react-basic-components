/*
 * @Description: 
 * @version: 
 * @Author: MarcusCheung
 * @Date: 2022-04-22 02:29:34
 * @LastEditors: MarcusCheung
 * @LastEditTime: 2022-04-25 01:13:52
 */
module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                targets: {
                    node: "current"
                }
            }
        ],
        "@babel/preset-typescript",
        "@babel/preset-react"
    ]
}
