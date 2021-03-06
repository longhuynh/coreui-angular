/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ RemoveClasses = function (NewClassNames) {
    var /** @type {?} */ MatchClasses = NewClassNames.map(function (Class) { return document.querySelector('body').classList.contains(Class); });
    return MatchClasses.indexOf(true) !== -1;
};
var ɵ0 = RemoveClasses;
export var /** @type {?} */ ToggleClasses = function (Toggle, ClassNames) {
    var /** @type {?} */ Level = ClassNames.indexOf(Toggle);
    var /** @type {?} */ NewClassNames = ClassNames.slice(0, Level + 1);
    if (RemoveClasses(NewClassNames)) {
        NewClassNames.map(function (Class) { return document.querySelector('body').classList.remove(Class); });
    }
    else {
        document.querySelector('body').classList.add(Toggle);
    }
};
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLWNsYXNzZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY29yZXVpL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL3RvZ2dsZS1jbGFzc2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxxQkFBTSxhQUFhLEdBQUcsVUFBQyxhQUFhO0lBQ2xDLHFCQUFNLFlBQVksR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFDLFVBQUMsS0FBSyxJQUFLLE9BQUEsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUF4RCxDQUF3RCxDQUFDLENBQUM7SUFDNUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Q0FDMUMsQ0FBQzs7QUFFRixNQUFNLENBQUMscUJBQU0sYUFBYSxHQUFHLFVBQUMsTUFBTSxFQUFFLFVBQVU7SUFDOUMscUJBQU0sS0FBSyxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMscUJBQU0sYUFBYSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztJQUVyRCxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLGFBQWEsQ0FBQyxHQUFHLENBQUMsVUFBQyxLQUFLLElBQUssT0FBQSxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQXRELENBQXNELENBQUMsQ0FBQztLQUN0RjtJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ04sUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ3REO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFJlbW92ZUNsYXNzZXMgPSAoTmV3Q2xhc3NOYW1lcykgPT4ge1xuICBjb25zdCBNYXRjaENsYXNzZXMgPSBOZXdDbGFzc05hbWVzLm1hcCgoQ2xhc3MpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QuY29udGFpbnMoQ2xhc3MpKTtcbiAgcmV0dXJuIE1hdGNoQ2xhc3Nlcy5pbmRleE9mKHRydWUpICE9PSAtMTtcbn07XG5cbmV4cG9ydCBjb25zdCBUb2dnbGVDbGFzc2VzID0gKFRvZ2dsZSwgQ2xhc3NOYW1lcykgPT4ge1xuICBjb25zdCBMZXZlbCA9IENsYXNzTmFtZXMuaW5kZXhPZihUb2dnbGUpO1xuICBjb25zdCBOZXdDbGFzc05hbWVzID0gQ2xhc3NOYW1lcy5zbGljZSgwLCBMZXZlbCArIDEpO1xuXG4gIGlmIChSZW1vdmVDbGFzc2VzKE5ld0NsYXNzTmFtZXMpKSB7XG4gICAgTmV3Q2xhc3NOYW1lcy5tYXAoKENsYXNzKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LnJlbW92ZShDbGFzcykpO1xuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QuYWRkKFRvZ2dsZSk7XG4gIH1cbn07XG4iXX0=