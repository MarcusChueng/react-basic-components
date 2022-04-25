/*
 * @Description: 
 * @version: 
 * @Author: MarcusCheung
 * @Date: 2022-04-25 00:19:52
 * @LastEditors: MarcusCheung
 * @LastEditTime: 2022-04-25 18:41:30
 */
import React from "react"
import "./index.less"

export interface TextViewProps {
    children?: React.ReactNode
}

const TextView = ({ children }: TextViewProps) => {
    return (
        <div className="text-view">
            {children}
        </div>
    )
}

export default TextView