
/**
 * Gets the current node environment
 * @returns {string} 'production' or 'development'
 */
export const getNodeEnv = () => {
    return process.env.NODE_ENV === 'development' ? 'development' : 'production';
}

/**
 * Gets the branch this is building to.
 * Is configured in the .env file.
 * Will assume master if not specified, hiding drafts where it can.
 */
export const getBranch = () => {
    return import.meta.env.BRANCH === "develop" ? "develop" : "master";
}