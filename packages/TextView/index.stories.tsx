/*
 * @Description: 
 * @version: 
 * @Author: MarcusCheung
 * @Date: 2022-04-25 00:37:19
 * @LastEditors: MarcusCheung
 * @LastEditTime: 2022-06-03 20:55:27
 */
import React from "react";
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import { boolean, number, select, text } from '@storybook/addon-knobs';
import TextView from "./index";

export default {
    title: "TextView"
}

export const WithTextView = () => (
    <TextView>
        This is my test component
    </TextView>
)

export const TestAddonActions = () => (
    <Button onClick={action('clicked')}>
        <span role="img" aria-label="so cool">
            😀 😎 👍 💯
        </span>
    </Button>
)

export const TestAddonKnobs = () => (
    <TextView children={text('children', 'children_value')}></TextView>
)

export const TestAddonKnobsMore = () => (
    <input 
        onClick={action('onClick')}
        onFocus={action("onFocus")}
        placeholder={text('placeholder', "placeholder_value")}
        type={select('type', {password: "password", number: "number", text: "text"}, "number")}
        disabled={boolean('disabled', false)}
        size={number('size', 24)}
    ></input>
)