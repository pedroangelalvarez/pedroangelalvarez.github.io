import { Component } from '@angular/core';
import { Experience } from '../../../models';

@Component({
    selector: 'app-experience-section',
    templateUrl: './experience-section.component.html',
    styleUrls: ['./experience-section.component.css']
})
export class ExperienceSectionComponent {
    experiences: Experience[] = [
        {
            id: 1,
            title: 'QA Engineer II',
            company: 'Encora.',
            dates: 'Agosto 2023 - Presente',
            description: 'Lideré el desarrollo de frameworks de automatización para pruebas web y de API. Implementé pipelines de CI/CD para procesos de pruebas automatizadas.',
            image: 'assets/images/ibkteam.jpeg',
            dataAiHint: 'oficina moderna',
            tags: ['Automatización Web', 'Pruebas de API', 'CI/CD', 'Selenium', 'RestAssured']
        },
        {
            id: 2,
            title: 'QA Automation',
            company: 'NTT DATA.',
            dates: 'Jun 2017 - Dic 2019',
            description: 'Desarrollé y mantuve scripts de pruebas automatizadas para aplicaciones móviles. Realicé pruebas de rendimiento y carga.',
            image: 'assets/images/bcpteam.jpeg',
            dataAiHint: 'desarrollo de aplicaciones móviles',
            tags: ['Pruebas Móviles', 'Appium', 'Pruebas de Rendimiento', 'JMeter']
        },
        {
            id: 3,
            title: 'Tester QA',
            company: 'Delaware',
            dates: 'Marzo 2021 - Febrero 2022',
            description: 'Realicé pruebas manuales y exploratorias para aplicaciones web. Adquirí experiencia inicial en automatización de pruebas.',
            image: 'assets/images/movteams.jpeg',
            dataAiHint: 'entorno de startup',
            tags: ['Pruebas Manuales', 'Pruebas Exploratorias', 'JavaScript']
        },
    ];

    trackById(index: number, item: Experience): number {
        return item.id;
    }

    trackByIndex(index: number): number {
        return index;
    }
}
