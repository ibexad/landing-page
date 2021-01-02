import React from 'react'
import { LLink, RLink, Bottom, Span, Separator } from './shared'

export default function Footer() {
    return(
        <Bottom>            
            <LLink as='a' href='https://www.sanakey.de/'>Sanakey Contract Ltd.</LLink>
            <Span> © 2021</Span>                        
            
            <RLink as='a' href='https://www.sanakey.de/impressum/' target='blank'>Imprint</RLink> <Separator>|</Separator>
            <RLink as='a' href='https://www.sanakey.de/datenschutzerklaerung/' target='blank'>Terms</RLink> <Separator>|</Separator>
            <RLink as='a' href='https://www.sanakey.de/datenschutzerklaerung/' target='blank'>Privacy policy</RLink>
        </Bottom>
    )
}