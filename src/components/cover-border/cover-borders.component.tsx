import { Border, Text } from "./cover-borders.styles"

export enum CoverBorderPosition {
    TOP, BOTTOM, LEFT, RIGHT
}

interface CoverBorderProps {
    coverSize: number
    width: number
    borders: CoverBorderPosition[]
    text?: string
}

export const CoverBorders = ({ coverSize, width, borders, text }: CoverBorderProps) => (
    <>
        {borders.includes(CoverBorderPosition.TOP) && (
            <Border
                width={width}
                orientation="vertical"
                style={{ top: -width/2 }}
            >
                {!!text && <Text>{text.toUpperCase()}</Text>}
            </Border>
        )}
        {borders.includes(CoverBorderPosition.BOTTOM) && (
            <Border
                width={width}
                orientation="vertical"
                style={{ bottom: -width/2 }}
            >
                {!!text && <Text>{text.toUpperCase()}</Text>}
            </Border>
        )}
        {borders.includes(CoverBorderPosition.LEFT) && (
            <Border
                width={width}
                orientation="horizontal"
                style={{ left: -width/2 }}
            >
                {!!text && <Text style={{ transform: 'rotate(-90deg)' }}>{text.toUpperCase()}</Text>}
            </Border>
        )}
        {borders.includes(CoverBorderPosition.RIGHT) && (
            <Border
                width={width}
                orientation="horizontal"
                style={{ left: coverSize-width/2 }}
            >
                {!!text && <Text style={{ transform: 'rotate(90deg)' }}>{text.toUpperCase()}</Text>}
            </Border>
        )}
    </>
)
