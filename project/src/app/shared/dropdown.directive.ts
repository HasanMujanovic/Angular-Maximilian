import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  //   @Input() status: boolean = true;
  //   constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  //   ngOnInit(): void {}
  //   ngOnChanges() {
  //     if (this.status) {
  //       this.renderer.addClass(this.elRef.nativeElement, 'open');
  //     } else this.renderer.removeClass(this.elRef.nativeElement, 'open');
  //   }
  @HostBinding('class.open') isOpen = false;
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
