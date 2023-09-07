import { getImage } from "astro:assets"

import type { Media } from "../../types/payload-types"

enum MediaType {
    thumbnail,
    sixteenByNineMedium,
    sixteenByNineLarge,
}

type MediaTypes = keyof typeof MediaType // "thumbnail" | "sixteenByNineMedium" | "sixteenByNineLarge"

interface Props {
    media: Media, 
    scaleWidth?: number, 
    scaleHeight?: number, 
    mediaType: MediaTypes,
    alt: string,
}

export default async ({media, mediaType, alt}: Props) => {

    const sizes: Media["sizes"] = media?.sizes

    if (!sizes) return null

    const sizeVariant = sizes[mediaType] || sizes?.thumbnail

    const optimised = await getImage({
        src: sizeVariant?.url as string,
        width: sizeVariant?.width,
        height: sizeVariant?.height,
        alt: alt,
    })

    const { src, attributes} = optimised

    const {width, height} = attributes

    return `<img onload="this.style.opacity=1" class="easeload w-full rounded-xl" src="${src}" width="${width}" height="${height}" alt="${alt}" />`
}