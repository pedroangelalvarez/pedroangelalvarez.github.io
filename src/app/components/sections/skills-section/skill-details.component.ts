import { Component, Input } from '@angular/core';
import { SkillNode } from '../../../models';

@Component({
    selector: 'app-skill-details',
    templateUrl: './skill-details.component.html',
    styleUrls: ['./skills-section.component.css']
})
export class SkillDetailsComponent {
    @Input() skill: SkillNode | null = null;

    trackByIndex(index: number): number {
        return index;
    }

    getIconEmoji(icon: string | undefined): string {
        const iconMap: { [key: string]: string } = {
            'globe': '🌐',
            'server': '🖥️',
            'smartphone': '📱',
            'bar-chart': '📊',
            'git-merge': '🔀',
            'code': '💻'
        };
        return iconMap[icon || ''] || '🧪';
    }
}
