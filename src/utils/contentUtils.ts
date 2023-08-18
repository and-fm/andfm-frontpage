import type { Post } from "../../types/payload-types"
import { getBranch, getNodeEnv } from "./envUtils"

/**
 * Is a post in question allowed to be built? Depends on environment.
 * If the post is published, show it everywhere. If it is a draft, 
 * only show it in preview environments.
 * @param post The post to check the status of
 */
export const isPostVisible = (post: Post) => {
    
    // Condition: if we are building to the preview branch, show everything
    // if not, only show published posts
    const branch = getBranch()
    if (branch === "develop") return true

    // Condition: if we are in development mode, show everything
    // this is because in development mode we want to see draft posts,
    // and the front-end should cater to that by showing a "draft" warning
    // on the page.
    const buildEnv = getNodeEnv()
    if (buildEnv === "development") return true

    // Condition: if the post is public, show it to everybody
    if (post.status === "published") return true

    return false
}
