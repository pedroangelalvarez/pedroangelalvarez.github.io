import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-scroll-panels',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scrollpanels.component.html',
  styleUrl: './scrollpanels.component.sass'
})

export class ScrollPanelsComponent implements OnInit {
  @ViewChild('container', { static: true }) containerRef!: ElementRef;
  panels: any[] = [];
  translateY = 0;
  step = 100;
  hold = false;

  @HostListener('wheel', ['$event'])
  onScroll(event: WheelEvent) {
    if (this.hold) return;
    this.hold = true;
    const direction = event.deltaY > 0 ? 'up' : 'down';
    this.updateScroll(direction);
    setTimeout(() => (this.hold = false), 1000);
  }

  ngOnInit() {
    //this.updateTransform();
    this.panels = Array(10).fill(0).map((x, i) => i + 1);
  }

  updateScroll(direction: string) {
    const maxTranslate = -(this.panels.length - 1) * this.step;
    if (direction === 'up' && this.translateY > maxTranslate) {
      this.translateY -= this.step;
    } else if (direction === 'down' && this.translateY < 0) {
      this.translateY += this.step;
    }
    this.updateTransform();
  }

  updateTransform() {
    this.containerRef.nativeElement.style.transform = `translateY(${this.translateY}vh)`;
  }
}
