import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScrollPanelsComponent } from './scrollpanels.component';
import { ElementRef } from '@angular/core';

describe('ScrollPanelsComponent', () => {
  let component: ScrollPanelsComponent;
  let fixture: ComponentFixture<ScrollPanelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScrollPanelsComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollPanelsComponent);
    component = fixture.componentInstance;
    component.containerRef = new ElementRef(document.createElement('div'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with correct number of panels', () => {
    expect(component.panels.length).toBe(6);
  });

  it('should update transform on scroll up', () => {
    component.translateY = 0;
    component.updateScroll('up');
    expect(component.translateY).toBe(-100);
  });

  it('should update transform on scroll down', () => {
    component.translateY = -100;
    component.updateScroll('down');
    expect(component.translateY).toBe(0);
  });

  it('should not scroll up beyond limit', () => {
    component.translateY = -(component.panels.length - 1) * component.step;
    component.updateScroll('up');
    expect(component.translateY).toBe(-(component.panels.length - 1) * component.step);
  });

  it('should not scroll down beyond limit', () => {
    component.translateY = 0;
    component.updateScroll('down');
    expect(component.translateY).toBe(0);
  });
});
