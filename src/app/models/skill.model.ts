export interface SkillNode {
    id: string;
    name: string;
    icon?: string;
    description?: string;
    tools?: string[];
    children?: SkillNode[];
}
