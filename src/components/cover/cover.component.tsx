import React from "react"
import { Container } from "./cover.styles"

interface CoverProps {
    image: string
    size: number
}

export const Cover: React.FC<CoverProps> = ({ image, size }) => (
    <Container size={size} image={image} />
)
