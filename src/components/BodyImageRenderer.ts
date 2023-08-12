import { getImage } from "astro:assets"

import type { Media } from "../../types/payload-types"

enum MediaType {
    Thumbnail = "thumbnail",
    Medium = "sixteenByNineMedium",
    Large = "sixteenByNineLarge",
}

export default async (props: {scaleWidth: number, scaleHeight: number, value: Media, mediaType:  MediaType }) => {

    const {value, scaleWidth, scaleHeight, mediaType} = props;
    const sizes: Media["sizes"] = value.sizes

    if (!sizes) return null

    const sizeVariant = sizes[mediaType] || sizes?.thumbnail

    const optimised = await getImage({
        src: sizeVariant?.url as string,
        width: sizeVariant?.width,
        height: sizeVariant?.height,
        alt: "thingy",
    })

    const { src, attributes} = optimised

    const {width, height, alt} = attributes

    return `<img onload="this.style.opacity=1" class="easeload w-full rounded-xl" src="${src}" width="${width}" height="${height}" alt="${alt}" />`
}