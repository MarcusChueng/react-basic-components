/*
 * @Description: 
 * @version: 
 * @Author: MarcusCheung
 * @Date: 2022-04-19 00:02:47
 * @LastEditors: MarcusCheung
 * @LastEditTime: 2022-06-03 23:04:50
 */
import { addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
 
addDecorator(
  withInfo({
    header: false,
    inline: true
  })
)