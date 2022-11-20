# use-true-element-size

> A simple and versatile use hook to track for the DOM-element sizes (width and height)

[![NPM](https://img.shields.io/npm/v/use-true-element-size.svg)](https://www.npmjs.com/package/use-true-element-size) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

A hook that returns the current width and height of the DOM element. The main benefit that hook doesn't use window resize event and can be useful in cases of element resizing without window resizing.

## Quick start

JavaScript:

```jsx
import { useRef } from 'react';
import { useTrueElementSize } from 'use-true-element-size';

const Example = () => {
  const divRef = useRef(null);
  const { elementWidth, elementHeight } = useTrueElementSize(divRef);

  return (
    <div ref={divRef}>
      width: ${elementWidth}
      height: ${elementHeight}
    </div>
  );
};
```

TypeScript:

```tsx
import { useRef } from 'react';
import { useTrueElementSize } from 'use-true-element-size';

const Example = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const { elementWidth, elementHeight } = useTrueElementSize(divRef);

  return (
    <div ref={divRef}>
      width: ${elementWidth}
      height: ${elementHeight}
    </div>
  );
};
```

## Install

npm:

```bash
npm install use-true-element-size
```

yarn:

```bash
yarn add use-true-element-size
```

## API

### Options

|            |           Type           |                                               Description |
| ---------- | :----------------------: | --------------------------------------------------------: |
| elementRef | `RefObject<HTMLElement>` | Ref object assigned to the HTML element to track its size |

### Returns {elementWidth: number, elementHeight: number}

|               |    Type    |           Description |
| ------------- | :--------: | --------------------: |
| elementWidth  |  `number`  |  Width of the element |
| elementHeight | `centered` | Height of the element |

## License

```
MIT © [https://github.com/onceup](https://github.com/https://github.com/onceup)
```
