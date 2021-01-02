import styled from 'styled-components'

export const Grid = styled.div`
    position: absolute;
    left: 1rem;
    bottom: 4.5rem;
    top: 5.5rem;
    
    height: calc(100% - 11rem);
    overflow-y: auto;    
    overflow-x: hidden;    
`
export const Container = styled.div`
    background-color: #fff;
    border: 1px solid #a4b7c1;
    padding: 2rem;
    border-radius: 0.5rem;
`
export const GridContainer = styled.div`
    display: grid;
    display: -ms-grid;
    grid-template-rows: auto auto auto auto;
    -ms-grid-rows: auto auto auto auto;
    grid-template-columns: auto;
    -ms-grid-columns: auto;
    grid-column-gap: 1rem;
    -moz-column-gap: 1rem;
    column-gap: 1rem;
    grid-row-gap: 1rem;
    row-gap: 1rem;
`

export const GridHeader = styled.div`
    grid-row: 1 / span 1;
    -ms-grid-row: 1;
    -ms-grid-row-span: 1;
    grid-column: 1 / span 1;
    -ms-grid-column: 1;
    -ms-grid-column-span: 1;
`

export const H4 = styled.div`
    margin-top: 0;
    font-size: 1.3125rem;
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
    color: #678898;
`

export const Link = styled.a`
    display: inline-block;
    text-decoration: none;
    color: #20a8d8;
    &:hover{
        text-decoration: underline;
    }
`;

export const RLink = styled(Link)`
    float: right;
`
export const LLink = styled(Link)`
    float: left;
    @media screen and (max-width: 700px) {
    display: none;
    }
`

export const TopHeader = styled.header`
    width: 100%;
    height: 4.5rem;
    border-bottom: 1px solid #a4b7c1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;    
`;

export const Logo = styled.img`
    border: none;
    width: 10rem;
    padding: .5rem 1rem;
    background-position: center center;
    background-size: 100%;
`
export const Bottom = styled.footer`
    font-size: .9rem;    
    height: 1.15rem;
    position: fixed;
    right: 0;
    bottom: 0;
    padding: .85rem;
    border-top: 1px solid #a4b7c1;
    left: 0;
`

export const Span = styled.span`
    color: #c2cfd6;
    @media screen and (max-width: 700px) {
    display: none;
    }
`

export const Separator = styled.span`
    padding:0 5px 5px 5px;
    float: right;
`
export const Button = styled.button`
    width: 5rem;
    height: 2.5rem;
    border-radius: .5rem;
    color: #fff;
    background-color: #20a8d8;
    border: 1px solid #20a8d8;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    &:hover:enabled{
        cursor: pointer;        
    }
    &:hover:not(:disabled){
        color: #fff;
        background-color: #1b8eb7;
        border-color: #1985ac;
        cursor: pointer;
    }
    &:disabled{
        cursor: not-allowed;
    }    
`