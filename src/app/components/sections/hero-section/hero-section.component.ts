import { Component } from '@angular/core';
import { Photo } from '../../../models';

@Component({
    selector: 'app-hero-section',
    templateUrl: './hero-section.component.html',
    styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent {
    photos: Photo[] = [
        { src: 'assets/images/Profile3.jpg', alt: 'Foto profesional de Pedro Alvarez 1', dataAiHint: 'retrato profesional' },
        { src: 'assets/images/Profile1.jpg', alt: 'Foto de Pedro Alvarez trabajando 2', dataAiHint: 'desarrollador trabajando' },
        { src: 'assets/images/Profile2.jpg', alt: 'Pedro Alvarez en un evento de tecnología 3', dataAiHint: 'conferencia de tecnología' },
    ];

    // Información personal - puedes modificar estos valores
    name = 'Pedro Alvarez';
    title = 'Ingeniero de Automatización de QA Full Stack';
    description = 'Especializado en Automatización Web, APIs, Pruebas Móviles y Pruebas de Rendimiento. Apasionado por construir software robusto y confiable.';

    scrollToSection(sectionId: string): void {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    getPhotoClass(index: number): string {
        const baseClass = 'photo-card rounded-lg overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-105';
        if (index === 0) {
            return `${baseClass} col-span-2 row-span-1 md:col-span-1 md:row-span-2`;
        }
        if (index === 1) {
            return `${baseClass} md:col-start-2`;
        }
        if (index === 2) {
            return `${baseClass} md:col-start-2 md:row-start-2`;
        }
        return baseClass;
    }

    trackByIndex(index: number): number {
        return index;
    }
}
