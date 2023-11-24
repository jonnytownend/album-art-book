import React from 'react'
import { Container } from "./page.styles"
import { CoverBlock } from '../../data/cover-block'
import { Cover } from '../cover'
import { PAGE_RATIO } from '../../data/constants'
import { CoverBorderPosition } from '../cover-border/cover-borders.component'

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
                coverBlocks.map((block, index) => (
                    <Cover
                        size={coverMinSize * block.scale}
                        image={block.image}
                        borders={index == 9 ? [CoverBorderPosition.TOP, CoverBorderPosition.LEFT, CoverBorderPosition.RIGHT] : undefined}
                        borderText='NOVEMBER'
                    />
                ))
            }
        </Container>
    )
}
