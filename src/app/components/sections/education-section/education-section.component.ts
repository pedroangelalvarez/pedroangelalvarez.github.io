import { Component, OnInit } from '@angular/core';
import { Education } from '../../../models';

@Component({
    selector: 'app-education-section',
    templateUrl: './education-section.component.html',
    styleUrls: ['./education-section.component.css']
})
export class EducationSectionComponent implements OnInit {
    educationData: Education[] = [
        {
            degree: 'Maestría en Ingeniería de Sistemas mención Administración de TI',
            institution: 'Universidad Nacional de Trujillo',
            year: '2020',
            details: ['ITIL', 'Gestión de TI']
        },
        {
            degree: 'Bachiller en Ciencias de la Computación',
            institution: 'Universidad Nacional de Trujillo',
            year: '2013',
            details: ['Inteligencia Artificial', 'Bases de Datos']
        },
    ];

    private lineCounter = 578;

    ngOnInit(): void {
        this.resetCounter();
    }

    getLineNumber(): string {
        const num = this.lineCounter;
        this.lineCounter += 1;
        return num.toString().padStart(6, '0');
    }

    resetCounter(): void {
        this.lineCounter = 578;
    }

    trackByIndex(index: number): number {
        return index;
    }

    isNotLastItem(index: number): boolean {
        return index < this.educationData.length - 1;
    }
}
