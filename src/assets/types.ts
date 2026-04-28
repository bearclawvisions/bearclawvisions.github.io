export interface Skills {
    frontend: string[]
    backend: string[]
    tools: string[]
    softSkills: string[]
}

export interface ProjectInfo {
    name: string
    url: string
    description: string
}

export interface Projects {
    work: ProjectInfo[]
    personal: ProjectInfo[]
}

export interface General {
    app: string
    system: string
    status: string
    kernel: string
}

export interface Admin {
    name: string
    role: string
    location: string
    github: string
    summary: string
    speech: string[]
    hobbies: string[]
    certificates: string[]
}

export interface Menu {
    home: string
    admin: string
    projects: string
}

export interface AppData {
    menu: Menu
    general: General
    projects: Projects
    skills: Skills
    admin: Admin
}