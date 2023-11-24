import styled from 'styled-components'

export type DateBorderOrientation = 'horizontal' | 'vertical'

export const Border = styled.div<{ orientation: DateBorderOrientation, width: number }>`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${p => p.orientation == 'vertical' ? p.width + 'px' : '100%'};
    width: ${p => p.orientation == 'horizontal' ? p.width + 'px' : '100%'};
    background-color: black;
    left: 0;
    z-index: 1000;
`

export const Text = styled.p`
    color: white;
`