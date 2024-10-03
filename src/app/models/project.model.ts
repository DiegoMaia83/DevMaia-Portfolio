export class Project {
    id: string
    title: string
    description: string
    links: Array<ProjectLink>
    categories: Array<string>
    filters: Array<string>
    images: number
}

export class ProjectLink {
    type: string
    url: string

    constructor(type: string, url: string) {
        this.type = type
        this.url = url
    }
}

export class ProjectCategory {
    type: string
    color: string
}