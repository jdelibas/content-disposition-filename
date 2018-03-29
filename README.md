# content-disposition-filename
> Read filename from content disposition header

## Installation

```console
  yarn add content-disposition-filename
```
## Usage

```javascript
  const cdf = require('content-disposition-filename')

  // Valid
  cdf('inline; filename=hi.jpg') // 'hi.jpg'
  cdf('attachment; filename=hi.jpg') // 'hi.jpg'

  // Invalid
  cdf('some random string') //null
  cdf({}) // null
  cdf(12345) //null
```
