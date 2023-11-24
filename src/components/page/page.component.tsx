import React from 'react'
import { Container } from "./page.styles"
import { CoverBlock } from '../../data/cover-block'
import { Cover } from '../cover'
import { PAGE_RATIO } from '../../data/constants'

interface PageProps {
    height: number
    width?: number
    coverBlocks: CoverBlock[]
}

export const Page: React.FC<PageProps> = ({ width, height, coverBlocks }) => {
    const actualWidth = width ?? PAGE_RATIO * height // Default A4 paper size
    const coverMinSize = actualWidth / 4
    return (
        <Container style={{ height, width: actualWidth }}>
            {
                coverBlocks.map(block => (
                    <Cover size={coverMinSize * block.scale} image={block.image} />
                ))
            }
        </Container>
    )
}
