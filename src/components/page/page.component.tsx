import React from 'react'
import { Container } from "./page.styles"
import { CoverBlock } from '../../data/cover-block'
import { Cover } from '../cover'
import { PAGE_RATIO } from '../../data/constants'
import { CoverBorderPosition } from '../cover-border/cover-borders.component'
import { CoverMonthFill } from '../cover-month-fill'

interface PageProps {
    height: number
    width?: number
    coverBlocks: CoverBlock[]
}

export const Page: React.FC<PageProps> = ({ width, height, coverBlocks }) => {
    const actualWidth = width ?? PAGE_RATIO * height // Default A4 paper size
    const coverMinSize = actualWidth / 4
    const lastBlock = coverBlocks[coverBlocks.length - 1]
    return (
        <div style={{ position: 'relative' }}>
            <Container size={coverMinSize} style={{ height, width: actualWidth, position: 'absolute', top: 0 }}>
                {
                    Array.from(Array(24).keys()).map(index => (
                        <CoverMonthFill size={coverMinSize} date={lastBlock.dateAdded ?? new Date()} />
                    ))
                }
            </Container>
            <Container size={coverMinSize} style={{ height, width: actualWidth }}>
                {
                    coverBlocks.map(block => (
                        <Cover
                            minSize={coverMinSize}
                            scale={block.scale}
                            image={block.image}
                            borderText='NOVEMBER'
                            date={block.dateAdded}
                        />
                    ))
                }
            </Container>
        </div>
    )
}
