import type {AppData, Skills, User, Projects, General, Menu} from '@/assets/types.ts'
import rawData from '@/assets/data.json'

export const appData: AppData = rawData

export const skills: Skills = appData.skills
export const user: User = appData.user
export const projects: Projects = appData.projects
export const general: General = appData.general
export const menu: Menu = appData.menu