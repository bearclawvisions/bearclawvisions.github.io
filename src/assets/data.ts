import type {AppData, Skills, Admin, Projects, General, Menu} from '@/assets/types.ts';
import rawData from '@/assets/data.json';

export const appData: AppData = rawData;

export const skills: Skills = appData.skills;
export const admin: Admin = appData.admin;
export const projects: Projects = appData.projects;
export const general: General = appData.general;
export const menu: Menu = appData.menu;
export const terminal: string = '~$>';