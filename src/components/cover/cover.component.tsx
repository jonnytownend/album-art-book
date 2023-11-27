import React from "react"
import { Container } from "./cover.styles"
import { CoverBorders } from "../cover-border"
import { DATE_BORDER_WIDTH} from "../../data/constants"
import { CoverBorderPosition } from "../cover-border/cover-borders.component"

interface CoverProps {
    image: string
    minSize: number
    scale: number
    borders?: CoverBorderPosition[]
    borderText?: string
}


export const Cover: React.FC<CoverProps> = ({ image, minSize, scale, borders, borderText }) => {
    return (
        <Container size={minSize * scale} gridSpan={scale} image={image}>
            {!!borders && (
                <CoverBorders
                    coverSize={minSize * scale}
                    width={DATE_BORDER_WIDTH}
                    borders={borders}
                    text={borderText}
                />
            )}
        </Container>
    )
}
