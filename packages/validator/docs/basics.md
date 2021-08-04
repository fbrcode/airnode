# Basics

## Terminology

In the whole documentation unified terminology will be used, here is the definition of some important keywords:

- **specification** - json structure, that will be checked for compliance with well-defined format
- **template** - json structure, which defines format of valid specification
- **parameter** - combination of key and value assigned to it, located somewhere in the json structure
- **parameter path** - string of keys separated with `.`, contains all keys needed to access a parameter in the json structure from the most outer one to key of the parameter itself
- **root** - refers to the most outer json structure, parameter path of root is empty
- other json related keywords like **json structure**, **key**, **object**, **array**, etc... Will stick to the standard [JSON terminology](https://www.json.org/json-en.html)

---

Most basic validator template can simply include keys of all required parameters with `{}` as value, which will result in validator accepting any specification that has exactly these keys with any primitive values. As validator does not take order of the parameters into consideration, parameters in the specification can be in any order, and it won't change output of the validator.

### Template

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=../test/fixtures/basic/valid-template.json) -->
<!-- The below code snippet is automatically added from ../test/fixtures/basic/valid-template.json -->
```json
{
  "server": {
    "url": {}
  },
  "component": {
    "securityScheme": {
      "in": {},
      "name": {},
      "type": {}
    }
  }
}
```
<!-- AUTO-GENERATED-CONTENT:END -->

---
### Valid specification

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=../test/fixtures/basic/valid-specs.json) -->
<!-- The below code snippet is automatically added from ../test/fixtures/basic/valid-specs.json -->
```json
{
  "component": {
    "securityScheme": {
      "in": "query",
      "name": "example",
      "type": {}
    }
  },
  "server": {
    "url": "https://just.example.com"
  }
}
```
<!-- AUTO-GENERATED-CONTENT:END -->

### Expected output

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=../test/fixtures/basic/valid-out.json) -->
<!-- The below code snippet is automatically added from ../test/fixtures/basic/valid-out.json -->
```json
{
  "valid": true,
  "messages": []
}
```
<!-- AUTO-GENERATED-CONTENT:END -->

---
### Invalid specification

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=../test/fixtures/basic/invalid-specs.json) -->
<!-- The below code snippet is automatically added from ../test/fixtures/basic/invalid-specs.json -->
```json
{
  "server": {
    "extra": {}
  },
  "component": {}
}
```
<!-- AUTO-GENERATED-CONTENT:END -->

### Expected output

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=../test/fixtures/basic/invalid-out.json) -->
<!-- The below code snippet is automatically added from ../test/fixtures/basic/invalid-out.json -->
```json
{
  "valid": false,
  "messages": [
    {
      "level": "error",
      "message": "Missing parameter server.url"
    },
    {
      "level": "error",
      "message": "Missing parameter component.securityScheme"
    },
    {
      "level": "warning",
      "message": "Extra field: server.extra"
    }
  ]
}
```
<!-- AUTO-GENERATED-CONTENT:END -->

After closer examination of error messages it might seem that there is no error message about missing parameters `component.securityScheme.in`, `component.securityScheme.name` and `component.securityScheme.type`. This is caused by missing `component.securityScheme`, which contains these parameters. If parameter is not present in specification, children of this parameter will not be checked and no error message will be returned for them.

---

# Object item

In some instances specification might contain key that is not predefined, to allow any string as a key `__objectItem` in template is used. In place of `__objectItem` specification can contain any key, but structure inside it will be still checked with template.

### Template

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=../test/fixtures/basic/obj-template.json) -->
<!-- The below code snippet is automatically added from ../test/fixtures/basic/obj-template.json -->
```json
{
  "__objectItem": {
    "name": {}
  }
}
```
<!-- AUTO-GENERATED-CONTENT:END -->

---
### Valid specification

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=../test/fixtures/basic/obj-valid-specs.json) -->
<!-- The below code snippet is automatically added from ../test/fixtures/basic/obj-valid-specs.json -->
```json
{
  "any": {
    "name": "val"
  },
  "key": {
    "name": "val"
  }
}
```
<!-- AUTO-GENERATED-CONTENT:END -->

---
### Invalid specification

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=../test/fixtures/basic/obj-invalid-specs.json) -->
<!-- The below code snippet is automatically added from ../test/fixtures/basic/obj-invalid-specs.json -->
```json
{
  "invalid": {
    "value": "val"
  },
  "specification": {}
}
```
<!-- AUTO-GENERATED-CONTENT:END -->

### Expected output

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=../test/fixtures/basic/obj-invalid-out.json) -->
<!-- The below code snippet is automatically added from ../test/fixtures/basic/obj-invalid-out.json -->
```json
{
  "valid": false,
  "messages": [
    {
      "level": "error",
      "message": "Missing parameter invalid.name"
    },
    {
      "level": "error",
      "message": "Missing parameter specification.name"
    },
    {
      "level": "warning",
      "message": "Extra field: invalid.value"
    }
  ]
}
```
<!-- AUTO-GENERATED-CONTENT:END -->

# Array item

Contents of `__arrayItem` define structure of items that are inside the array, which implies parameter containing `__arrayItem` must be an array in specification.

`__maxSize` is an array specific token, which can be used to set maximal count of elements in the array.

### Template

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=../test/fixtures/basic/array-template.json) -->
<!-- The below code snippet is automatically added from ../test/fixtures/basic/array-template.json -->
```json
{
  "arrayParameter": {
    "__maxSize": 2,
    "__arrayItem": {
      "outer": {
        "inner": {}
      }
    }
  },
  "moreArrays": {
    "__objectItem": {
      "__arrayItem": {
        "value": {}
      }
    }
  }
}
```
<!-- AUTO-GENERATED-CONTENT:END -->

---

### Valid specification

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=../test/fixtures/basic/array-valid-specs.json) -->
<!-- The below code snippet is automatically added from ../test/fixtures/basic/array-valid-specs.json -->
```json
{
  "arrayParameter": [
    {
      "outer": {
        "inner": "value1"
      }
    },
    {
      "outer": {
        "inner": "value2"
      }
    }
  ],
  "moreArrays": {
    "array1": [
      {
        "value": "value"
      }
    ],
    "array2": []
  }
}
```
<!-- AUTO-GENERATED-CONTENT:END -->

---

### Invalid specification

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=../test/fixtures/basic/array-invalid-specs.json) -->
<!-- The below code snippet is automatically added from ../test/fixtures/basic/array-invalid-specs.json -->
```json
{
  "arrayParameter": [
    {
      "outer": {
        "inner": "value1"
      }
    },
    {
      "outer": {
        "inner": "value2"
      }
    },
    {
      "outer": {}
    }
  ],
  "moreArrays": {
    "array1": [
      {
        "invalid": "value"
      }
    ]
  }
}
```
<!-- AUTO-GENERATED-CONTENT:END -->

### Expected output

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=../test/fixtures/basic/array-invalid-out.json) -->
<!-- The below code snippet is automatically added from ../test/fixtures/basic/array-invalid-out.json -->
```json
{
  "valid": false,
  "messages": [
    {
      "level": "error",
      "message": "arrayParameter must contain 2 or less items"
    },
    {
      "level": "error",
      "message": "Missing parameter arrayParameter[2].outer.inner"
    },
    {
      "level": "error",
      "message": "Missing parameter moreArrays.array1[0].value"
    },
    {
      "level": "warning",
      "message": "Extra field: moreArrays.array1[0].invalid"
    }
  ]
}
```
<!-- AUTO-GENERATED-CONTENT:END -->

---
