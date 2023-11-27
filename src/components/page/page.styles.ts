import styled from 'styled-components'

export const Container = styled.div<{ size: number }>`
    display: grid;
    grid-template-columns: repeat(4, ${p => p.size}px);
    grid-template-rows: repeat(6, ${p => p.size}px);
    grid-auto-flow: dense;
    height: calc(width)
    box-shadow: 0px 0px 1em grey;
    background-color: white;
    // overflow: hidden;
`
