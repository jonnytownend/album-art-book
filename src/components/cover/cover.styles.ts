import { ReactNode } from 'react'
import styled from 'styled-components'

const NOTE_ALPHA = 0.8

export const Container = styled.div<{ size: number, gridSpan: number, image: string }>`
    position: relative;
    grid-column-end: span ${p => p.gridSpan};
    grid-row-end: span ${p => p.gridSpan};
    width: ${p => p.size}px;
    height: ${p => p.size}px;
    background-image: url(${p => p.image});
    background-size: cover;
    transition: transform 0.2s;
    // &:hover {
    //     transform: scale(1.1);
    //     z-index: 500;
    // }
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

export const TitleText = styled.p< { scale: number } >`
    position: absolute;
    color: white; // This colour will need to be calculated to match the background images
    background-color: rgba(10, 10, 10, ${NOTE_ALPHA});
    font-size: 1em;
    bottom: 8px;
    padding: 4px 12px;
    margin: 0;
    transform-origin: left bottom;
    transform: scale(${p => p.scale > 1 ? 1 : 0.5});
`

export const  NotesContainer = styled.div< { scale: number } >`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    bottom: 8px;
    right: 0;
    padding: 0;
    transform-origin: left bottom;
    transform: scale(${p => p.scale > 1 ? 1 : 0.5});
`

export const TextNote = styled.p< { scale: number } >`
    color: white;
    font-size: 1em;
    background-color: rgba(10, 10, 10, ${NOTE_ALPHA});
    padding: 8px 32px;
    margin: 8px 0px;
`
