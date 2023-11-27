import React, { useMemo } from "react"
import { Container } from "./page-view.styles"
import { Page } from "../page/page.component"
import { CoverBlock } from "../../data/cover-block"
import { PAGE_RATIO } from "../../data/constants"

interface PageViewProps {
    height: number
    coverBlocks: CoverBlock[]
}

const pageCoverLimit = 24

export const PageViewer: React.FC<PageViewProps> = ({ height, coverBlocks }) => {
    const pageWidth = PAGE_RATIO * height
    const dividerWidth = 20
    const pages: CoverBlock[][] = useMemo(() => {
        var pages: CoverBlock[][] = []
        var page = 0
        var blockCount = 0
        coverBlocks.forEach((block, index) => {
            if (pages[page] == undefined) {
                pages.push([block])
            } else {
                pages[page].push(block)
            }

            if (blockCount > pageCoverLimit) {
                page++
                blockCount = 0
            }

            blockCount += block.scale * block.scale;
        })
        return pages
    }, [coverBlocks])
    return (
        <Container style={{ width: (2 * pageWidth) + dividerWidth }}>
            {pages.map((page, index) => (
                <>
                    <Page height={height} coverBlocks={page} />
                    {index < pages.length && index % 2 == 0 ? <div style={{ width: dividerWidth }} /> : null}
                    {index < pages.length && index % 2 == 1 ? <div style={{ width: 2 * pageWidth, height: dividerWidth }} /> : null}
                </>
            ))}
        </Container>
    )
}
