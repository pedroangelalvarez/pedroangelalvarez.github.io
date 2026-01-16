import { Component, OnInit, OnDestroy } from '@angular/core';
import { Certification } from '../../../models';

@Component({
    selector: 'app-certifications-section',
    templateUrl: './certifications-section.component.html',
    styleUrls: ['./certifications-section.component.css']
})
export class CertificationsSectionComponent implements OnInit, OnDestroy {
    activeCert: Certification | null = null;
    currentIndex = 0;
    isAutoPlaying = true;
    private autoPlayInterval: any;

    certifications: Certification[] = [
        { id: 1, name: 'Accredited Test Analyst Certification', issuer: 'AICS® - Asociación Internacional de Calidad de Software', date: 'Ene. 2024', credentialId: '93563115' },
        { id: 2, name: 'ISTQB Certified Tester Foundation Level Agile Tester (CTFL-AT)', issuer: 'GASQ', date: 'Sept. 2023', credentialId: '927387' },
        { id: 3, name: 'Certified Tester Foundation Level (CTFL)', issuer: 'ISTQB® - International Software Testing Qualifications Board', date: 'Abr. 2023', credentialId: '99425' },
        { id: 4, name: 'Big Data Foundations - Level 1', issuer: 'IBM', date: 'Ene. 2023', credentialId: '2ca40418-443d-4b28-92be-cea69200b2b5' },
        { id: 5, name: 'Hadoop Foundations - Level 1', issuer: 'IBM', date: 'Ene. 2023', credentialId: '8f0a0df1-3d17-4ba1-b4f0-745735495f4b' },
        { id: 6, name: 'Certified Kubernetes Administrator Basics Guide 2022', issuer: 'Udemy', date: 'Sept. 2022', credentialId: 'UC-bf547964-5329-4e31-a894-18e840231fc9' },
        { id: 7, name: 'Mastering .NET Windows Applications using C# and WinForms', issuer: 'Udemy', date: 'Jul. 2022', credentialId: 'UC-7b0f7569-0a9b-4a7c-8363-ffb19d304fd8' },
        { id: 8, name: 'Selenium in C# - Setup Simple Test Automation Framework', issuer: 'Udemy', date: 'Jul. 2022', credentialId: 'UC-10701bac-d42f-4891-9587-7a900d48cfab' },
        { id: 9, name: 'Appium Mobile Testing Complete Guide', issuer: 'Udemy', date: 'Jun. 2022', credentialId: 'UC-fc175ba5-a5a8-446d-861d-bc69104a9a31' },
        { id: 10, name: 'Selenium in Java - Setup Simple Test Automation Framework', issuer: 'Udemy', date: 'Abr. 2022', credentialId: 'UC-aa823924-f4f4-475a-9b09-2045261aaa9f' },
        { id: 11, name: 'The Complete Go: Golang Bootcamp', issuer: 'Udemy', date: 'Mar. 2022', credentialId: 'UC-8bb90499-61dd-4659-9492-4e0318512b1f' },
        { id: 12, name: 'Scrum Fundamentals Certified', issuer: 'VMEdu Inc.', date: 'Feb. 2021', credentialId: '828332' },
        { id: 13, name: 'Scrum Foundations Professional Certificate', issuer: 'CertiProf', date: 'Feb. 2021 (Venc. Feb. 2023)', credentialId: '57635490' },
        { id: 14, name: 'Taller SAP Business One 10', issuer: 'NEXTECH Education Center', date: 'Ene. 2021', credentialId: '7733-16269-2453' },
        { id: 15, name: 'Taller SAP ERP y SAP S/4 HANA', issuer: 'NEXTECH Education Center', date: 'Ene. 2021', credentialId: '7729-16198-2453' },
        { id: 16, name: 'Cloud Computing', issuer: 'Google Actívate', date: 'Abr. 2020', credentialId: 'J3D ENQ LBB' },
        { id: 17, name: 'Programación Orientada a Objetos con C++', issuer: 'TECSUP', date: 'Sept. 2019', credentialId: 'L_MOOC/19/179' },
    ];

    // Group certifications by category for better display
    categories = [
        { name: 'Testing & QA', icon: '🧪', color: '#00bcd4' },
        { name: 'Cloud & DevOps', icon: '☁️', color: '#9c27b0' },
        { name: 'Programming', icon: '💻', color: '#4caf50' },
        { name: 'Agile', icon: '🔄', color: '#ff9800' },
        { name: 'Data', icon: '📊', color: '#2196f3' },
    ];

    ngOnInit(): void {
        this.startAutoPlay();
    }

    ngOnDestroy(): void {
        this.stopAutoPlay();
    }

    get totalCards(): number {
        return this.certifications.length;
    }

    get rotationAngle(): number {
        return 360 / this.totalCards;
    }

    getCardTransform(index: number): string {
        const angle = this.rotationAngle * index;
        const translateZ = this.getTranslateZ();
        return `rotateY(${angle}deg) translateZ(${translateZ}px)`;
    }

    getCarouselTransform(): string {
        const angle = -this.rotationAngle * this.currentIndex;
        return `translateZ(-${this.getTranslateZ()}px) rotateY(${angle}deg)`;
    }

    private getTranslateZ(): number {
        // Calculate radius based on number of cards
        const cardWidth = 280;
        return Math.round(cardWidth / (2 * Math.tan(Math.PI / this.totalCards)));
    }

    navigate(direction: 'prev' | 'next'): void {
        this.stopAutoPlay();
        if (direction === 'next') {
            this.currentIndex = (this.currentIndex + 1) % this.totalCards;
        } else {
            this.currentIndex = (this.currentIndex - 1 + this.totalCards) % this.totalCards;
        }
        // Restart autoplay after 5 seconds of inactivity
        setTimeout(() => this.startAutoPlay(), 5000);
    }

    goToCard(index: number): void {
        this.stopAutoPlay();
        this.currentIndex = index;
        setTimeout(() => this.startAutoPlay(), 5000);
    }

    startAutoPlay(): void {
        if (this.isAutoPlaying && !this.autoPlayInterval) {
            this.autoPlayInterval = setInterval(() => {
                this.currentIndex = (this.currentIndex + 1) % this.totalCards;
            }, 3000);
        }
    }

    stopAutoPlay(): void {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }

    toggleAutoPlay(): void {
        this.isAutoPlaying = !this.isAutoPlaying;
        if (this.isAutoPlaying) {
            this.startAutoPlay();
        } else {
            this.stopAutoPlay();
        }
    }

    openCertDetail(cert: Certification, event: Event): void {
        event.stopPropagation();
        this.activeCert = cert;
        this.stopAutoPlay();
    }

    closeModal(): void {
        this.activeCert = null;
        this.startAutoPlay();
    }

    stopPropagation(event: Event): void {
        event.stopPropagation();
    }

    getCategoryForCert(cert: Certification): { name: string; icon: string; color: string } {
        const name = cert.name.toLowerCase();
        const issuer = cert.issuer.toLowerCase();

        if (name.includes('test') || name.includes('selenium') || name.includes('appium') || name.includes('istqb') || name.includes('ctfl')) {
            return this.categories[0]; // Testing & QA
        } else if (name.includes('cloud') || name.includes('kubernetes') || name.includes('sap')) {
            return this.categories[1]; // Cloud & DevOps
        } else if (name.includes('go:') || name.includes('golang') || name.includes('c#') || name.includes('c++') || name.includes('.net') || name.includes('java') || name.includes('programación')) {
            return this.categories[2]; // Programming
        } else if (name.includes('scrum') || name.includes('agile')) {
            return this.categories[3]; // Agile
        } else if (name.includes('data') || name.includes('hadoop') || name.includes('big data')) {
            return this.categories[4]; // Data
        }
        return this.categories[0]; // Default
    }
}
