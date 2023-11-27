import { Container, MonthLine, YearLine } from "./cover-month-fill.styles"

interface CoverMonthFillProps {
    size: number
    date: Date
}

export const CoverMonthFill = ({ size, date }: CoverMonthFillProps) => (
    <Container style={{ backgroundColor: 'black', width: size, height: size }}>
        <YearLine size={size}>{date.getFullYear()}</YearLine>
        <MonthLine size={size}>{date.toLocaleString('default', { month: 'long' }).toUpperCase()}</MonthLine>
    </Container>
)
