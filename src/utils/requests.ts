import { Integration } from "../../types/payload-types"

export const cmsFetch = (url: string): Promise<Response> => {
    return fetch(url, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `integrations API-Key ${import.meta.env.PAYLOAD_API_KEY}`,
        },
    }).catch((err) => {
        console.error(err)
        throw new Error("Error fetching from Payload CMS")
    }).then(async (res) => {
        console.log("Status of CMS request: ", res.status)
        return res
    })
}