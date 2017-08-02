'use strict';
import { Directive, HostListener, ElementRef } from '@angular/core';
import { Clipboard } from '../../../services/clipboard.service';
var SelectOnClick = (function () {
    function SelectOnClick(element) {
        this.element = element;
    }
    SelectOnClick.prototype.onClick = function () {
        Clipboard.selectElement(this.element.nativeElement);
    };
    return SelectOnClick;
}());
export { SelectOnClick };
SelectOnClick.decorators = [
    { type: Directive, args: [{
                selector: '[select-on-click]'
            },] },
];
/** @nocollapse */
SelectOnClick.ctorParameters = function () { return [
    { type: ElementRef, },
]; };
SelectOnClick.propDecorators = {
    'onClick': [{ type: HostListener, args: ['click',] },],
};
//# sourceMappingURL=select-on-click.directive.js.map