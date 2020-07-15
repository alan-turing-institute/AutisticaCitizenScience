References - https://www.w3.org/TR/using-aria

# Screen reader pairings

'Webaim' reccomend the folowing pairings for screen reader software.

- Firefox with NVDA
- Chrome or Internet Explorer with JAWS
- Safari with VoiceOver
- Edge with Narrator

https://webaim.org/techniques/screenreader/

# ARIA ground rules

1. Always use native HTML elements where possible
2. Do not use `role=""` to overwrite native sematics such as `<h2>` is a header, don't change this to be something else
3. All controls must be useable with keyboard controls
4. Do not use role="presentation" or aria-hidden="true" on a focusable element.
5. All interactive elements must have an accessible name. Acheiveable with `aria-label="Username"`

# Images

Use `alt` on images to provide a descriptive alternative to the image, conveying the same message.

# Blocks

 