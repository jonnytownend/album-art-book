import { CoverBlock } from '../data/cover-block';
import { getPlaceholderCoverImagesByCount } from './cover-image-placeholder-loader'

export function getPlaceholderData(count: number, firstScaleVariation: number = 0, secondScaleVariation: number = 0): CoverBlock[] {
    return getPlaceholderCoverImagesByCount(count).map((image, index) => {
        var scale = 1
        if (firstScaleVariation > 0) {
            scale = index % firstScaleVariation == 0 ? 2 : scale
        }
        if (secondScaleVariation > 0) {
            scale = index % secondScaleVariation == 0 ? 4 : scale
        }
        return {
            image,
            scale,
        }
    })
}
