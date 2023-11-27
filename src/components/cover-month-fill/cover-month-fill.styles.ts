import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const MonthLine = styled.p<{ size: number }>`
    color: white;
    font-size: ${p => p.size / 150}em;
    margin: 0;
    width: 25%;
    word-wrap:break-word;
    text-align: center;
`

export const YearLine = styled(MonthLine)`
    font-size: ${p => p.size / 210}em;
`
