export function createSlug(name: string): string {
    const lowerCaseName = name?.toLocaleLowerCase()
    const slug = lowerCaseName?.replace(/\s+/g, "-")
    const finalSlug = slug?.replace(/[^a-z0-9]/g,"")
    return finalSlug
}

export const slugToCarName = (slug:string):string => {
    const words = slug?.split("-")
    const name = words?.map((word) => word.charAt(0)?.toUpperCase() + word.slice(1))?.join(" ")
    return name
}