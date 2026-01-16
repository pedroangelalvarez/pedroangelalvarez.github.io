import { Component } from '@angular/core';
import { SkillNode } from '../../../models';

@Component({
    selector: 'app-skills-section',
    templateUrl: './skills-section.component.html',
    styleUrls: ['./skills-section.component.css']
})
export class SkillsSectionComponent {
    selectedId = 'web';

    skillsData: SkillNode[] = [
        {
            id: 'web',
            name: 'Web Automation Controller',
            icon: 'globe',
            description: 'Experiencia en la automatización de aplicaciones web utilizando Selenium, Cypress y Playwright. Manejo de elementos dinámicos e integración CI/CD.',
            tools: ['Selenium WebDriver', 'Cypress', 'Playwright', 'Screenplay', 'Page Object Model', 'BDD (Cucumber)'],
        },
        {
            id: 'api',
            name: 'API Testing Sampler',
            icon: 'server',
            description: 'Pruebas de APIs RESTful y SOAP. Validación de contratos, seguridad y códigos de estado.',
            tools: ['RestAssured', 'Postman', 'Karate DSL', 'HTTP Client', 'OAuth 2.0', 'Swagger'],
        },
        {
            id: 'mobile',
            name: 'Mobile App Group',
            icon: 'smartphone',
            description: 'Automatización nativa e híbrida (iOS/Android) con Appium. Gestión de dispositivos en la nube.',
            tools: ['Appium', 'BrowserStack'],
        },
        {
            id: 'performance',
            name: 'Performance Logic',
            icon: 'bar-chart',
            description: 'Pruebas de carga, estrés y escalabilidad. Análisis de métricas y optimización de recursos.',
            tools: ['Apache JMeter', 'LoadRunner'],
        },
        {
            id: 'devops',
            name: 'CI/CD Listener',
            icon: 'git-merge',
            description: 'Integración continua y despliegue. Pipelines automatizados y contenerización.',
            tools: ['Jenkins', 'GitHub Actions', 'Docker', 'Kubernetes', 'Azure DevOps'],
        },
        {
            id: 'code',
            name: 'Scripting Processor',
            icon: 'code',
            description: 'Desarrollo de frameworks de prueba y scripts utilitarios en múltiples lenguajes.',
            tools: ['Java', 'Python', 'TypeScript', 'JavaScript', 'Go', 'Bash'],
        },
    ];

    get treeData(): SkillNode {
        return {
            id: 'root',
            name: 'Test Plan',
            children: this.skillsData
        };
    }

    get selectedSkill(): SkillNode | null {
        return this.findNodeById(this.treeData, this.selectedId) || this.skillsData[0];
    }

    onSelectNode(node: SkillNode): void {
        this.selectedId = node.id;
    }

    private findNodeById(node: SkillNode, id: string): SkillNode | null {
        if (node.id === id) return node;
        if (node.children) {
            for (const child of node.children) {
                const found = this.findNodeById(child, id);
                if (found) return found;
            }
        }
        return null;
    }

    trackByIndex(index: number): number {
        return index;
    }

    trackById(index: number, item: SkillNode): string {
        return item.id;
    }
}
