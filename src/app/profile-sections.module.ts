import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Common Components
import { SectionWrapperComponent } from './components/common/section-wrapper/section-wrapper.component';

// Section Components
import { HeroSectionComponent } from './components/sections/hero-section/hero-section.component';
import { ExperienceSectionComponent } from './components/sections/experience-section/experience-section.component';
import { EducationSectionComponent } from './components/sections/education-section/education-section.component';
import { SkillsSectionComponent } from './components/sections/skills-section/skills-section.component';
import { SkillsTreeComponent } from './components/sections/skills-section/skills-tree.component';
import { SkillDetailsComponent } from './components/sections/skills-section/skill-details.component';
import { CertificationsSectionComponent } from './components/sections/certifications-section/certifications-section.component';
import { ContactSectionComponent } from './components/sections/contact-section/contact-section.component';

@NgModule({
    declarations: [
        // Common
        SectionWrapperComponent,

        // Sections
        HeroSectionComponent,
        ExperienceSectionComponent,
        EducationSectionComponent,
        SkillsSectionComponent,
        SkillsTreeComponent,
        SkillDetailsComponent,
        CertificationsSectionComponent,
        ContactSectionComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule, // Necesario para el formulario de contacto
    ],
    exports: [
        // Export all section components for use in other modules
        SectionWrapperComponent,
        HeroSectionComponent,
        ExperienceSectionComponent,
        EducationSectionComponent,
        SkillsSectionComponent,
        CertificationsSectionComponent,
        ContactSectionComponent,
    ]
})
export class ProfileSectionsModule { }
