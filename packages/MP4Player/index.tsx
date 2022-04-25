/*
 * @Description: 
 * @version: 
 * @Author: MarcusCheung
 * @Date: 2022-04-25 01:19:16
 * @LastEditors: MarcusCheung
 * @LastEditTime: 2022-04-25 17:35:05
 */
import React from "react"

export interface Mp4PlayerProps extends React.MediaHTMLAttributes<HTMLVideoElement> {
    url: string
}

const Mp4Player = ({ url, ...props }: Mp4PlayerProps ) => {
    return (
        <video src={url} autoPlay controls {...props}>
            <source src={url} type="video/mp4"></source>
            <track src={url} kind="captions" label="english_captions"></track>
        </video>
    )
}

export default Mp4Player