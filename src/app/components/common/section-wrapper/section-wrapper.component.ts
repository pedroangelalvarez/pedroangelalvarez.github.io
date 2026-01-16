import {
    Component,
    Input,
    ElementRef,
    AfterViewInit,
    OnDestroy,
    ViewChild
} from '@angular/core';

@Component({
    selector: 'app-section-wrapper',
    templateUrl: './section-wrapper.component.html',
    styleUrls: ['./section-wrapper.component.css']
})
export class SectionWrapperComponent implements AfterViewInit, OnDestroy {
    @Input() sectionId!: string;
    @Input() className: string = '';
    @Input() containerClassName: string = '';

    @ViewChild('sectionElement') sectionRef!: ElementRef<HTMLElement>;

    isVisible = false;
    private observer!: IntersectionObserver;

    ngAfterViewInit(): void {
        this.observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        this.isVisible = true;
                        this.observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (this.sectionRef?.nativeElement) {
            this.observer.observe(this.sectionRef.nativeElement);
        }
    }

    ngOnDestroy(): void {
        this.observer?.disconnect();
    }

    getSectionClasses(): string {
        const baseClasses = 'section-wrapper min-h-screen w-full py-16 md:py-24 flex flex-col justify-center';
        const animationClasses = this.isVisible
            ? 'section-visible'
            : 'section-hidden';
        return `${baseClasses} ${animationClasses} ${this.className}`.trim();
    }

    getContainerClasses(): string {
        return `container mx-auto px-4 md:px-6 ${this.containerClassName}`.trim();
    }
}
