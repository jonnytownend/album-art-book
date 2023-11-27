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
        <Container size={coverMinSize} style={{ height, width: actualWidth }}>
            {
                coverBlocks.map(block => (
                    <Cover
                        minSize={coverMinSize}
                        scale={block.scale}
                        image={block.image}
                        borderText='NOVEMBER'
                    />
                ))
            }
        </Container>
    )
}
