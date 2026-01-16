import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SkillNode } from '../../../models';

@Component({
    selector: 'app-skills-tree',
    templateUrl: './skills-tree.component.html',
    styleUrls: ['./skills-section.component.css']
})
export class SkillsTreeComponent {
    @Input() node!: SkillNode;
    @Input() selectedId: string = '';
    @Input() level: number = 0;
    @Output() nodeSelected = new EventEmitter<SkillNode>();

    isOpen = true;

    get isSelected(): boolean {
        return this.node.id === this.selectedId;
    }

    get hasChildren(): boolean {
        return !!(this.node.children && this.node.children.length > 0);
    }

    get paddingLeft(): string {
        return `${this.level * 16 + 4}px`;
    }

    onNodeClick(event: Event): void {
        event.stopPropagation();
        this.nodeSelected.emit(this.node);
    }

    onToggle(event: Event): void {
        event.stopPropagation();
        if (this.hasChildren) {
            this.isOpen = !this.isOpen;
        }
        this.nodeSelected.emit(this.node);
    }

    onChildSelected(node: SkillNode): void {
        this.nodeSelected.emit(node);
    }

    trackById(index: number, item: SkillNode): string {
        return item.id;
    }
}
