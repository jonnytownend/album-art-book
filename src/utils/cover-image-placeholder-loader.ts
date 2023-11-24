export function getPlaceholderCoverImages(): string[] {
    var images: string[] = []
    for (let i=1; i<=25; i++) {
        let fn = String(i).padStart(2, '0')
        images.push(require(`../assets/images/album-cover-placeholders/${fn}.jpg`))
    }
    return images
}

export function getPlaceholderCoverImagesByCount(count: number): string[] {
    const imageSet = getPlaceholderCoverImages()
    const setSize = imageSet.length
    const allImages = []
    for (let i=0; i<count; i++) {
        let j = i % setSize
        allImages.push(imageSet[j])
    }
    return allImages
}
