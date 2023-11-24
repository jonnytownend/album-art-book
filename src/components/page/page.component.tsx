import React from 'react'
import { Container } from "./page.styles"

interface PageProps {
    width: number
}

export const Page: React.FC<PageProps & React.PropsWithChildren> = ({ width, children }) => (
    <Container style={{ width }}>{children}</Container>
)
