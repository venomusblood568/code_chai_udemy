# BOM in JavaScript: `screen`, `navigator`, and `location`

The **Browser Object Model (BOM)** allows JavaScript to interact with the browser environment outside of the webpage's content. 
Here, we discuss three key BOM objects: `screen`, `navigator`, and `location`.

---

## 1. `screen` Object
The `screen` object provides information about the user's screen properties.

### Properties:
| Property            | Description                        | Example              |
|----------------------|------------------------------------|----------------------|
| `screen.width`       | Total width of the screen in pixels. | `screen.width` → 1920 |
| `screen.height`      | Total height of the screen in pixels.| `screen.height` → 1080 |
| `screen.availWidth`  | Available width excluding system UI.| `screen.availWidth` |
| `screen.availHeight` | Available height excluding system UI.| `screen.availHeight` |
| `screen.colorDepth`  | Bit depth of color palette.       | `screen.colorDepth` → 24 |

### Example:
```javascript
console.log(`Screen Resolution: ${screen.width}x${screen.height}`);
console.log(`Available Size: ${screen.availWidth}x${screen.availHeight}`);
console.log(`Color Depth: ${screen.colorDepth}`);
```

---

## 2. `navigator` Object
The `navigator` object contains information about the browser and user's environment.

### Key Properties:
| Property               | Description                               | Example                     |
|-------------------------|-------------------------------------------|-----------------------------|
| `navigator.userAgent`   | User agent string of the browser.         | `navigator.userAgent`       |
| `navigator.language`    | Language of the browser.                 | `navigator.language` → "en-US" |
| `navigator.platform`    | Operating system of the client.           | `navigator.platform`        |
| `navigator.onLine`      | Whether the browser is online.           | `navigator.onLine` → true   |
| `navigator.geolocation` | Provides access to geolocation API.      | `navigator.geolocation`     |

### Example:
```javascript
console.log(`Browser Info: ${navigator.userAgent}`);
console.log(`Language: ${navigator.language}`);
console.log(`Online Status: ${navigator.onLine}`);
```

---

## 3. `location` Object
The `location` object contains information about the URL of the current webpage.

### Properties:
| Property               | Description                                 | Example                  |
|-------------------------|---------------------------------------------|--------------------------|
| `location.href`         | Full URL of the current page.              | `location.href`          |
| `location.hostname`     | Domain name of the web server.             | `location.hostname`      |
| `location.pathname`     | Path of the current page.                  | `location.pathname`      |
| `location.protocol`     | Protocol of the page (e.g., `http:`).      | `location.protocol`      |
| `location.port`         | Port number (if specified).                | `location.port`          |

### Methods:
- `location.reload()` → Reloads the current page.
- `location.assign(url)` → Navigates to a new URL.

### Example:
```javascript
console.log(`Current URL: ${location.href}`);
console.log(`Hostname: ${location.hostname}`);
console.log(`Protocol: ${location.protocol}`);

// Reload the page
location.reload();
```

---

## Summary Table

| Object     | Purpose                          | Example Usage                   |
|------------|----------------------------------|---------------------------------|
| `screen`   | Provides screen dimensions.      | `screen.width`, `screen.height` |
| `navigator`| Gives browser/environment info.  | `navigator.userAgent`, `onLine` |
| `location` | Access or manipulate URL.        | `location.href`, `reload()`     |

---

With these objects, you can interact with the browser environment effectively using JavaScript.
