import React from "react"
import { Container, NotesContainer, TextNote, TitleText } from "./cover.styles"
import { CoverBorders } from "../cover-border"
import { DATE_BORDER_WIDTH} from "../../data/constants"
import { CoverBorderPosition } from "../cover-border/cover-borders.component"

interface CoverProps {
    image: string
    minSize: number
    scale: number
    borders?: CoverBorderPosition[]
    borderText?: string
    date?: Date
}


export const Cover: React.FC<CoverProps> = ({ image, minSize, scale, borders, borderText, date }) => {
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
            <TitleText scale={scale}>ALBUM TITLE</TitleText>
            {scale > 3 && (<NotesContainer scale={scale}>
                <TextNote scale={scale}>FIRST PLAY: {date?.toLocaleDateString()}</TextNote>
                <TextNote scale={scale}># PLAYS: 126</TextNote>
            </NotesContainer>)}
        </Container>
    )
}
