import { ReactNode } from 'react'
import styled from 'styled-components'

export const Container = styled.div<{ size: number, image: string }>`
    width: ${p => p.size}px;
    height: ${p => p.size}px;
    background-image: url(${p => p.image});
    background-size: cover;
`
