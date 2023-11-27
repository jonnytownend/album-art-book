import { ReactNode } from 'react'
import styled from 'styled-components'

export const Container = styled.div<{ size: number, gridSpan: number, image: string }>`
    position: relative;
    grid-column-end: span ${p => p.gridSpan};
    grid-row-end: span ${p => p.gridSpan};
    width: ${p => p.size}px;
    height: ${p => p.size}px;
    background-image: url(${p => p.image});
    background-size: cover;
`

export type DateBorderOrientation = 'horizontal' | 'vertical'

export const DateBorder = styled.div<{ orientation: DateBorderOrientation, width: number }>`
    position: absolute;
    height: ${p => p.orientation == 'horizontal' ? p.width + 'px' : '100%'};
    width: ${p => p.orientation == 'vertical' ? p.width + 'px' : '100%'};
    background-color: black;
    left: 0;
    z-index: 1000;
`
