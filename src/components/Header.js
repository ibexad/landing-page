import React from 'react'
import { TopHeader, Logo } from './shared'

export default function Header() {
    return(
        <TopHeader>
           <Logo as='img' src='logo.png'></Logo>             
        </TopHeader>
    )
}