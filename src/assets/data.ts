import type {AppData, Skills, Admin, General, Menu, ProjectInfo} from '@/assets/types.ts';
import rawData from '@/assets/data.json';

export const appData: AppData = rawData;

export const skills: Skills = appData.skills;
export const admin: Admin = appData.admin;
export const workProjects: ProjectInfo[] = appData.projects.work;
export const personalProjects: ProjectInfo[] = appData.projects.personal;
export const general: General = appData.general;
export const menu: Menu = appData.menu;
export const terminal: string = '~$>';