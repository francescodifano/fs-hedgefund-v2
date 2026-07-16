// Resolve a public asset URL that works under the GitHub Pages base path.
export const asset = (name: string): string => `${import.meta.env.BASE_URL}assets/${name}`
