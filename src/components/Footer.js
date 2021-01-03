import React from 'react'
import { LLink, RLink, Bottom, Span, Separator } from './shared'

export default function Footer() {
    return(
        <Bottom>            
            <LLink as='a' href='https://www.sanakey.de/'>Sanakey Contract GmbH </LLink>
            <Span> © 2021</Span>                        
            
            <RLink as='a' href='https://www.sanakey.de/impressum/' target='blank'>Impressum</RLink> <Separator>|</Separator>
            <RLink as='a' href='https://www.sanakey.de/datenschutzerklaerung/' target='blank'>Nutzungsbedingungen</RLink> <Separator>|</Separator>
            <RLink as='a' href='https://www.sanakey.de/datenschutzerklaerung/' target='blank'>Datenschutzbestimmungen</RLink>
        </Bottom>
    )
}