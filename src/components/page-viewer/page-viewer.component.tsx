import React, { useMemo } from "react"
import { Container } from "./page-view.styles"
import { Page } from "../page/page.component"
import { CoverBlock } from "../../data/cover-block"
import { PAGE_RATIO } from "../../data/constants"

interface PageViewProps {
    height: number
    coverBlocks: CoverBlock[]
}

const PAGE_COVER_LIMIT = 24

export const PageViewer: React.FC<PageViewProps> = ({ height, coverBlocks }) => {
    const pageWidth = PAGE_RATIO * height
    const dividerWidth = 20
    const pages: CoverBlock[][] = useMemo(() => {
        var pages: CoverBlock[][] = []
        var page = 0
        var blockCount = 0
        coverBlocks.forEach((block, index) => {
            let blockSize = block.scale * block.scale
            if (blockCount + blockSize > PAGE_COVER_LIMIT) {
                page++
                blockCount = 0
            }

            if (pages[page] == undefined) {
                pages[page] = [block]
            } else {
                pages[page].push(block)
            }

            blockCount += blockSize
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
