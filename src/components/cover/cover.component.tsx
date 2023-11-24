import React from "react"
import { Container } from "./cover.styles"
import { CoverBorders } from "../cover-border"
import { DATE_BORDER_WIDTH} from "../../data/constants"
import { CoverBorderPosition } from "../cover-border/cover-borders.component"

interface CoverProps {
    image: string
    size: number
    borders?: CoverBorderPosition[]
    borderText?: string
}


export const Cover: React.FC<CoverProps> = ({ image, size, borders, borderText }) => {
    return (
        <Container size={size} image={image}>
            {!!borders && (
                <CoverBorders
                    coverSize={size}
                    width={DATE_BORDER_WIDTH}
                    borders={borders}
                    text={borderText}
                />
            )}
        </Container>
    )
}
