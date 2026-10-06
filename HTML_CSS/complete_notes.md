

# Web Development — Complete Notes

# 📚 Table of Contents

**Part 1 — Web Fundamentals**
1. Introduction to Web

**Part 2 — HTML**
2. HTML Basics
3. HTML Document Structure & Anchor Tags
4. Images & Semantic Tags
5. IDs, Classes, Block vs Inline & Media
6. Iframes & Forms (Inputs)
7. Inputs-2, Forms & Tables
8. Forms (Radio, Checkbox, Textarea)

**Part 3 — CSS**
9. CSS Introduction, Syntax, Application, Colors & Typography
10. Selectors, Combinators, Units & Pseudo-Classes
11. Pseudo-Elements, Box Model, Units & Positioning
12. Positioning, Cursor & CSS Variables
13. z-index, Overflow, Display & Inheritance / Specificity / Cascading

**Part 4 — Version Control**
14. Git & GitHub


---

# PART 1 — WEB FUNDAMENTALS

---

# 1. Introduction to Web

## Agenda
- How Internet Works
- Client vs Server
- Intro to HTML

## Important Terms

| Term                                   | Meaning                                            |
| -------------------------------------- | -------------------------------------------------- |
| **Protocol**                           | Set of rules                                       |
| **HTTP** (HyperText Transfer Protocol) | Protocol for transferring data across the internet |
| **URL** (Uniform Resource Locator)     | Exact human-readable URL of a resource             |
| **IP Address**                         | Unique identifier of a server in a network         |
| **Client**                             | Who makes the request to get resources             |
| **Server**                             | Who provides the resources                         |
| **DNS Server**                         | A log book for domain with IP address              |

## Client–Server Model

```
┌──────────┐    Request     ┌──────────┐
│  client  │ ─────────────► │  Server  │
│          │ ◄───────────── │          │
└──────────┘    Response    └──────────┘

Internet : HTTP (HyperText Transfer Protocol)
```

## DNS Resolution Flow

```
┌──────────┐                    ┌──────────┐
│  client  │ ──── Request ────► │  Server  │
│          │ ◄─── Response ──── │          │
└────┬─────┘                    └──────────┘
     │
     ▼
┌──────────┐
│   ISP    │
└────┬─────┘
     │
     ▼
┌──────────────────────┐
│  DNS Server          │
│  (domain → IP)       │
│  google → 246.567... │
└──────────────────────┘
```

---

# PART 2 — HTML

---

# 2. HTML Basics

## Agenda
1. Setup for Web Development
2. HTML Basics

## Setup for Web Dev

**VSCode Download:** https://code.visualstudio.com/

### Essential Extensions
- **Auto Rename Tag** — Automatically renames matching closing tags when you rename an opening tag
- **Live Server** — Instantly previews your webpage changes in the browser

## What is HTML?

**HTML = HyperText Markup Language**
- Defines the content structure of a web page
- File extension: `.html`

## HTML Tags

### Basic Syntax
```
<tagstart>content</tagend>
```

- **TagName** — gives behavior to the tag
- **content** — the content visible to the user

### Example
```html
<p>This is a paragraph</p>
```

## Heading Tags

Headings create a hierarchical structure for content, from main titles to sub-sections.

```html
<h1>I am h1</h1>
<h2>I am h2</h2>
<h3>I am h3</h3>
<h4>I am h4</h4>
<h5>I am h5</h5>
<h6>I am h6</h6>
```

### Hierarchy Structure
```
<h1> The Hound of Baskerville
  <h2> Chapter 1
    <h3> Subchapters
      <h4> Topic
        <h5> Detail
          <h6> Specific Info
```

## Paragraph Tag

Used to group sentences and blocks of text.

```html
<p>I am a paragraph</p>
```

## Self-Closing Tags (Void Tags)

These tags do not wrap content. They perform a single action and close themselves.

### Line Break `<br/>`
Inserts a line break (new line) in text.

### Horizontal Rule `<hr/>`
Draws a horizontal line across the page.

### Code Example
```html
<p>I am p1</p>
<br/>
<br/>
<p>I am p2</p>
<hr/>
```

## Lists

Lists organize items in either ordered (numbered) or unordered (bullet point) format.

### Unordered List `<ul>`
Items displayed with bullet points. Order does not matter.

```html
<ul>
  <li>Strawberry</li>
  <li>Dragonfruit</li>
  <li>Avocado</li>
</ul>
```

### Ordered List `<ol>`
Items displayed with numbers. Order matters.

```html
<ol>
  <li>Iron Man</li>
  <li>First Avenger</li>
  <li>Thor</li>
</ol>
```

### List Items `<li>`
Represents a single item within an ordered or unordered list.

## HTML Attributes

Attributes modify the default properties of HTML tags.

### Syntax
```html
<tag key="value">content</tag>
```

### Key Points
- Attributes are placed in the **opening tag**
- Format: `key="value"`
- They modify the default behavior or properties of the tag

## Anchor Tag `<a>` (Hyperlink)

Used to create hyperlinks to other pages or locations.

### Basic Syntax
```html
<a href="URL">Clickable Text</a>
```

### Common Attributes
- `href` — The destination URL (required)
- `target` — Where to open the link
  - `_blank` — Opens in a new tab
  - `_self` — Opens in the same tab

### Code Example
```html
<!-- Opens Google in a NEW tab -->
<a href="https://www.google.com/" target="_blank">
    Click to go somewhere
</a>

<!-- Opens Google in the SAME tab -->
<a href="https://www.google.com/" target="_self">
    Click to stay here
</a>
```

## Quick Reference Table

| Tag | Type | Purpose | Example |
|-----|------|---------|---------|
| `<h1>` - `<h6>` | Heading | Create titles and section headings | `<h1>Title</h1>` |
| `<p>` | Paragraph | Group text content | `<p>Text</p>` |
| `<br/>` | Self-closing | Insert line break | `<br/>` |
| `<hr/>` | Self-closing | Draw horizontal line | `<hr/>` |
| `<ul>` | Unordered list | Create bullet list | `<ul><li>Item</li></ul>` |
| `<ol>` | Ordered list | Create numbered list | `<ol><li>Step 1</li></ol>` |
| `<li>` | List item | Single item in a list | `<li>Milk</li>` |
| `<a>` | Anchor | Create hyperlink | `<a href="url">Click</a>` |

---

# 3. HTML Document Structure & Anchor Tags

## Agenda
1. HTML Document Structure
2. Anchor Tag (Links)

## HTML Document Structure

Every HTML document follows a standard structure.

### Basic Structure
```html
<!DOCTYPE html>
<html lang="en">

<!-- Extra info about the page -->
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <!-- All visible content goes here -->
</body>

</html>
```

### Element Breakdown

| Element | Purpose |
|---------|---------|
| `<!DOCTYPE html>` | Declares this is an HTML5 document |
| `<html lang="en">` | Root element; `lang="en"` specifies English language |
| `<head>` | Contains meta-information about the page (not visible) |
| `<meta charset="UTF-8">` | Specifies character encoding (Unicode support) |
| `<meta name="viewport"...>` | Makes page responsive on mobile devices |
| `<title>` | Text shown in browser tab |
| `<body>` | Contains all visible content of the webpage |

## Anchor Tag `<a>` (Hyperlinks)

The anchor tag creates hyperlinks that allow users to navigate between pages, download files, send emails, or make phone calls.

### Basic Syntax
```html
<a href="URL">Link Text</a>
```

### Opening in a New Tab (target="_blank")
The `target="_blank"` attribute forces the link to open in a new browser tab or window.

```html
<a href="https://www.google.com/" target="_blank">Go to Google</a>
```

### Common Use Cases

#### 1. External Links (To other websites)
```html
<!-- Opens in same tab -->
<a href="https://www.google.com/">Go to Google</a>

<!-- Opens in new tab (preferred for external sites) -->
<a href="https://www.google.com/" target="_blank">Go to Google (New Tab)</a>
```

#### 2. Download Links
The `download` attribute forces the browser to download the file instead of opening it.

```html
<a href="./images.jpeg" download>Download Image</a>
<a href="./SWB L2 html_tags.pdf" download>Download PDF</a>
```

#### 3. Email Links
Opens the user's default email client with a pre-filled address.

```html
<a href="mailto:jasbir.singh@vedam.com">Send Email</a>
```

#### 4. Phone Links
Opens the dialer on mobile devices.

```html
<a href="tel:+918700345678">Call Me</a>
```

#### 5. Internal Links (To other HTML files)
```html
<!-- Opens another HTML file in the parent folder -->
<a href="../class2.html">Open Class 2</a>

<!-- Downloads another HTML file -->
<a href="../class2.html" download>Download Class 2</a>
```

### Anchor Tag Attributes Reference

| Attribute | Purpose | Example |
|-----------|---------|---------|
| `href` | Specifies the destination URL (required) | `href="https://google.com"` |
| `target="_blank"` | Opens link in new tab | `target="_blank"` |
| `target="_self"` | Opens link in same tab (default) | `target="_self"` |
| `download` | Forces file download instead of opening | `download` |

## Quick Reference Table

| Element | Purpose | Example |
|---------|---------|---------|
| `<!DOCTYPE html>` | HTML5 declaration | `<!DOCTYPE html>` |
| `<html>` | Root element | `<html lang="en">` |
| `<head>` | Meta information | `<head>...</head>` |
| `<meta>` | Metadata (encoding, viewport) | `<meta charset="UTF-8">` |
| `<title>` | Browser tab title | `<title>My Page</title>` |
| `<body>` | Visible content | `<body>...</body>` |
| `<a>` | Hyperlink | `<a href="url">Text</a>` |
| `href` | Link destination | `href="https://google.com"` |
| `target="_blank"` | Open link in new tab | `target="_blank"` |
| `download` | Download file | `download` |

---

# 4. Images & Semantic Tags

## Agenda
1. Images in HTML
2. Semantic HTML

## Images in HTML

### Image Tag Basics

The `<img>` tag is a **self-closing (void) tag** – it only has an opening tag and does not wrap content.

```html
<img src="image_path.jpg">
```

### Key Characteristics
- Takes required space equal to the default height and width of the image
- You can specify custom height and width
- Uses paths to locate the image file

### Image Tag Attributes

| Attribute | Purpose | Example |
|-----------|---------|---------|
| `src` | Source path of the image (required) | `src="./photo.jpg"` |
| `alt` | Alternative text for accessibility | `alt="A beautiful sunset"` |
| `height` | Height in pixels | `height="200px"` |
| `width` | Width in pixels | `width="200px"` |

### Code Example
```html
<h2>Image Tag</h2>

<!-- Local Image -->
<h3>Local Image</h3>
<img src="./images.jpeg" height="200px" width="200px">

<!-- URL Image -->
<h3>URL Image</h3>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:...">

<!-- Image Not Loaded (shows alt text) -->
<h4>Image Not Loaded</h4>
<img src="../class_2/images3.jpeg" alt="feather">
```

### Clickable Images

You can wrap an image inside an anchor tag to make it clickable.

```html
<a href="https://www.youtube.com/" target="_blank">
    <img src="./google.png" height="500px">
</a>
```

### Image Types and Use Cases

| Format | Use Case | Characteristics |
|--------|----------|-----------------|
| **JPEG** (.jpg, .jpeg) | Normal images with backgrounds | Pixelates on larger screens, good for photographs |
| **PNG** (.png) | Images requiring transparency | Supports transparent backgrounds, pixelates on larger screens |
| **SVG** (.svg) | Logos, icons, illustrations | Scales automatically to any screen size, heavier computationally |

### Code Example
```html
<!-- JPEG - Standard images -->
<img src="./photo.jpg" alt="Photo">

<!-- PNG - Transparent background -->
<img src="./logo.png" alt="Logo with transparent background">

<!-- SVG - Scalable images -->
<img src="./mario.svg" alt="Mario" height="100px">
```

## Semantic HTML

### What is Semantic HTML?

Semantic HTML uses meaningful tags that describe the purpose of the content they contain. Instead of using generic `<div>` tags, semantic tags tell both browsers and developers what type of content they hold.

### Use Cases of Semantic HTML

| Benefit | Description |
|---------|-------------|
| **Accessibility** | Screen readers can navigate and interpret content better |
| **SEO** (Search Engine Optimization) | Search engines understand page structure and rank content appropriately |
| **Maintenance** | Developers can easily read and understand code structure |

### Common Semantic Tags

| Tag | Purpose | Notes |
|-----|---------|-------|
| `<header>` | Contains introductory content, logos, navigation | Will be unique |
| `<nav>` | Contains navigation links | Can be multiple |
| `<main>` | Main content of the page | Will be unique |
| `<footer>` | Contains footer content (contact, copyright) | Will be unique |
| `<aside>` | Usually used in sidebar to show content related to the main page | |
| `<section>` | Thematic grouping of content | |

### Semantic HTML Example: Travel Website

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Travel Website</title>
</head>
<body>
    <!-- Header Section -->
    <header>
        <h1>Travel Website</h1>
        <nav>
            <a href="">Manali</a>
            <a href="">Kasol</a>
            <a href="">Goa</a>
        </nav>
    </header>

    <!-- Main Content -->
    <main>
        <h2>Destinations</h2>
        <h3>Manali</h3>
        <img src="images.jpeg" alt="Manali" height="200px">
        <h3>Kasol</h3>
        <img src="images.jpeg" alt="Kasol" height="200px">
    </main>

    <!-- Footer Section -->
    <footer>
        <h2>Contact Us</h2>
        <ul>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Phone Number</li>
        </ul>
    </footer>
</body>
</html>
```

### Page Structure Visualization
```
+------------------------------------------+
| <header>                                  |
|   <h1> Travel Website </h1>              |
|   <nav> Manali | Kasol | Goa </nav>      |
+------------------------------------------+
| <main>                                    |
|   <h2> Destinations </h2>                |
|   <h3> Manali </h3>                      |
|   <img>                                   |
|   <h3> Kasol </h3>                       |
|   <img>                                   |
+------------------------------------------+
| <footer>                                  |
|   <h2> Contact Us </h2>                  |
|   Instagram | Facebook | Phone           |
+------------------------------------------+
```

---

# 5. IDs, Classes, Block vs Inline & Media

## Agenda
1. Semantic Tags (Revision)
2. ID and Linkage
3. Smooth Scroll (CSS)
4. Classes and IDs
5. Block vs Inline Elements
6. Media: Audio and Video

## Semantic Tags (Revision)

| Tag | Purpose |
|-----|---------|
| `<header>` | Introductory content, logo, navigation |
| `<nav>` | Navigation links |
| `<main>` | Main content of the page |
| `<section>` | Thematic grouping of content |
| `<footer>` | Footer content (contact, copyright) |

## ID and Linkage

An `id` is a **unique identifier** for an HTML element. It is used to:
- Link to a specific part of the page
- Target the element with CSS or JavaScript

### How to Link to an ID
```html
<!-- Link -->
<a href="#section1">Go to Section 1</a>

<!-- Target element -->
<section id="section1">
    <h2>Section 1</h2>
</section>
```

## Smooth Scroll (CSS)

By default, clicking an anchor link jumps **instantly**. To make it scroll smoothly, we need CSS.

### Where to Put CSS
CSS is written inside a `<style>` tag in the `<head>`.

```html
<head>
    <style>
        /* CSS rules go here */
    </style>
</head>
```

### CSS Rule Structure
```css
selector {
    property: value;
}
```

### Common Selectors

| Selector | Syntax | Example |
|----------|--------|---------|
| Tag | `tagname` | `p { color: blue; }` |
| Class | `.classname` | `.bg-green { background: green; }` |
| ID | `#idname` | `#event-title { background: red; }` |

### Applying Smooth Scroll
```css
html {
    scroll-behavior: smooth;
}
```

## Classes and IDs

### `id` vs `class`

| Feature | `id` | `class` |
|---------|------|---------|
| Uniqueness | Must be unique per page | Can be reused |
| CSS selector | `#idname` | `.classname` |
| Anchor link | `href="#idname"` | Not used for anchors |

### Example Usage
```html
<h2 id="event-title">Event Name</h2>
<h2 class="bg-green">Schedule</h2>
<h2 class="bg-green">About us</h2>
```
```css
#event-title {
    background-color: red;
}
.bg-green {
    background-color: green;
}
```

## Block vs Inline Elements

### Block-Level
- Take **full width** of the page
- Start on a **new line**
- Examples: `<h1>`–`<h6>`, `<p>`, `<li>`, `<section>`

### Inline
- Take only the **required space**
- Do **not** start on a new line
- Examples: `<a>`, `<span>`, `<img>`

### Snippet
```html
<!-- Block -->
<h1>Heading 1</h1>
<h1>Heading 2</h1>
<p>Sentence 1</p>
<p>Sentence 2</p>

<!-- Inline -->
<a href="">Link 1</a>
<a href="">Link 2</a>
<span>Span 1</span>
<span>Span 2</span>

<!-- Styling a span with id -->
<p>Hello this is an <span id="imp">important</span> quote</p>
```
```css
#imp {
    color: red;
}
```

## Media: Audio and Video

### Video Tag
```html
<video src="./video.mp4" height="300" controls muted poster="./images.jpeg">
</video>
```

| Attribute | Purpose |
|-----------|---------|
| `src` | Path to video file |
| `controls` | Show play/pause/volume controls |
| `muted` | Start muted |
| `poster` | Image shown before video plays |
| `height` / `width` | Dimensions |
| `autoplay` | Play automatically (often requires `muted`) |

### Audio Tag
```html
<audio src="./Lukrembo - Jay.mp3" controls loop>
</audio>
```

| Attribute | Purpose |
|-----------|---------|
| `src` | Path to audio file |
| `controls` | Show audio controls |
| `loop` | Repeat when finished |
| `autoplay` | Play automatically |

---

# 6. Iframes & Forms (Inputs)

## Agenda
1. Div Tag
2. Iframes
3. Forms
   - Inputs: text, password, email, number
   - Attributes: `readonly`, `for`, `id`, `placeholder`, `min`, `max`, `value`

## Div Tag

The `<div>` tag is a generic **block-level container** used to group related content.

```html
<div>
    <h2>Videos</h2>
    <video src="../assets/video.mp4" height="300" muted controls poster="./images.jpeg"></video>
    <video src="../assets/video2.mp4" height="300" muted controls poster="./images.jpeg"></video>
</div>

<div>
    <h2>Audios</h2>
    <audio src="./Lukrembo - Jay.mp3" controls muted autoplay loop></audio>
</div>
```

**Key Points:**
- Groups related elements
- Block-level: takes full width and starts on a new line
- Commonly used with `class` or `id` for styling

## Iframes

The `<iframe>` tag embeds another HTML document inside the current page.

### Basic Syntax
```html
<iframe src="url of that html document" title="Page title"></iframe>
```

### Rules of Iframe

#### a) Who Decides Access
- The owner of the embedded site decides whether their page can be embedded
- If a site blocks embedding, the iframe shows a blank or error message

#### b) What Can Be Embedded
- Local HTML files from your own project
- External pages only if they permit it (YouTube embed, Google Maps, Google Docs)

#### c) How It Will Be Visible
- Displays content inside a rectangular box
- Size controlled by `height` and `width`
- Border controlled by `frameborder` (0 = no border)
- `allow` attribute decides features (camera, autoplay, fullscreen)
- `loading="lazy"` delays loading

### Use Cases

#### a) Embed a Local HTML Page
```html
<iframe src="./1_divs.html" height="700px" title="div example page"></iframe>
```

#### b) Embed an External Page (YouTube)
```html
<iframe width="560" height="315"
    src="https://www.youtube.com/embed/jNQXAC9IVRw"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
</iframe>
```

#### c) Embed a Google Doc
```html
<iframe height="300px" width="300px"
    src="https://docs.google.com/document/d/e/2PACX-.../pub?embedded=true">
</iframe>
```

#### d) Embed Google Maps
```html
<iframe
    src="https://www.google.com/maps/embed?pb=!1m18!..."
    width="600" height="450" style="border:0;"
    allowfullscreen="" loading="lazy">
</iframe>
```

### Common Iframe Attributes

| Attribute | Purpose |
|-----------|---------|
| `src` | URL of the page to embed |
| `title` | Describes the iframe content (for accessibility) |
| `height` / `width` | Dimensions of the iframe |
| `frameborder` | Border around the iframe (0 = no border) |
| `allow` | Permissions granted to the iframe |
| `allowfullscreen` | Allows fullscreen mode |
| `loading="lazy"` | Loads iframe only when needed |

## Forms

Forms collect user input. Each input field is paired with a `<label>`.

### Basic Structure
```html
<label for="input-id">Label Text</label>
<input type="input-type" id="input-id" placeholder="hint">
```

### Why Use `<label>` with `for`?
- The `for` attribute matches the `id` of the input
- Clicking the label focuses the input field
- Improves accessibility

### Input Types

#### 1. Text Input
```html
<label for="first-name">First Name: </label>
<input type="text" id="first-name" placeholder="your first name">
```

#### 2. Email Input
```html
<label for="email">Email: </label>
<input type="email" placeholder="you@email">
```

#### 3. Password Input
```html
<label for="password">Password: </label>
<input type="password" placeholder="******">
```

#### 4. Number Input (with min/max)
```html
<label for="mobile">Mobile</label>
<input type="number" id="mobile" placeholder="10-digit number" min="100000000" max="999999999">
```

#### 5. Readonly Input
```html
<label for="Campus">Campus: </label>
<input type="text" readonly value="Sushant University">
```

#### 6. Select Dropdown
```html
<label for="gender">Gender</label>
<select id="gender">
    <option value="male">M</option>
    <option value="female">F</option>
    <option value="other">O</option>
</select>
```

### Input Attributes Reference

| Attribute | Purpose | Example |
|-----------|---------|---------|
| `type` | Defines input type | `type="text"` |
| `id` | Unique identifier for label linkage | `id="email"` |
| `for` | Links label to input by id | `for="email"` |
| `placeholder` | Hint text shown inside input | `placeholder="you@email"` |
| `value` | Pre-filled value | `value="Sushant University"` |
| `readonly` | Makes input non-editable | `readonly` |
| `min` / `max` | Range for number inputs | `min="100000000"` |

---

# 7. Inputs-2, Forms & Tables

## Agenda
1. Inputs – Part 2 (number, date, file)
2. Form Submission & Validation
3. Tables (with real-world use case)

## Inputs – Part 2

### Number Input (`type="number"`)
```html
<div>
    <label for="age">Age </label>
    <input type="number" id="age" placeholder="enter your age" min="0" required>
</div>
```

| Attribute | Purpose |
|-----------|---------|
| `min` | Minimum allowed value |
| `max` | Maximum allowed value |
| `step` | Interval between legal numbers |
| `required` | Field must be filled before submit |

### Date Input (`type="date"`)
```html
<div>
    <label for="DOB">DOB </label>
    <input type="date" id="DOB" required>
</div>
```

### File Input (`type="file"`)
```html
<div>
    <label for="Profile_pic">Profile Pic </label>
    <input type="file" id="Profile_pic" required>
</div>
```

## Form Submission & Validation

```html
<form>
    <!-- inputs here -->
    <button type="submit">Register</button>
</form>
```

### Common Validation Attributes

| Attribute | Purpose |
|-----------|---------|
| `required` | Field must be filled |
| `minlength` | Minimum characters |
| `maxlength` | Maximum characters |
| `min` / `max` | Range for numeric/date inputs |
| `type="email"` | Must match email format |

### Complete Form Example
```html
<form>
    <div>
        <label for="first-name">First Name: </label>
        <input type="text" id="first-name" placeholder="your first name">
    </div>
    <div>
        <label for="email">Email: </label>
        <input type="email" id="email" placeholder="you@email" required>
    </div>
    <div>
        <label for="password">Password: </label>
        <input type="password" id="password" placeholder="******" required minlength="6">
    </div>
    <div>
        <label for="age">Age: </label>
        <input type="number" id="age" min="0" required>
    </div>
    <div>
        <label for="DOB">DOB: </label>
        <input type="date" id="DOB" required>
    </div>
    <div>
        <label for="Profile_pic">Profile Pic: </label>
        <input type="file" id="Profile_pic" required>
    </div>
    <div>
        <button type="submit">Register</button>
    </div>
</form>
```

## Tables

### What is a Table?
A structured way to display data in **rows and columns**.

### Table Structure Diagram
```
+---------------------------------------------------+
|   +------+---------+---------+---------+          |
|   | Day  | Class-1 | Class-2 | Class-3 |  <-- Row 1 (Header Row)
|   +------+---------+---------+---------+          |
|   | Mon  |   Web   |  Math   |   FOP   |  <-- Row 2
|   +------+---------+---------+---------+          |
|   | Tue  |   Web   |  Math   |   FOP   |  <-- Row 3
|   +------+---------+---------+---------+          |
|      ^        ^         ^         ^               |
|   Column 1  Column 2  Column 3  Column 4          |
+---------------------------------------------------+
```

### Table Structure Diagram (With Tags)
```
+---------------------------------------------------+
|                    <table>                        |
|  +---------------------------------------------+  |
|  |                 <thead>                     |  |
|  |  +------+---------+---------+---------+     |  |
|  |  | <th> |  <th>   |  <th>   |  <th>   |     |  |
|  |  | Day  | Class-1 | Class-2 | Class-3 |     |  |
|  |  +------+---------+---------+---------+     |  |
|  +---------------------------------------------+  |
|  |                 <tbody>                     |  |
|  |  +------+---------+---------+---------+     |  |
|  |  | <td> |  <td>   |  <td>   |  <td>   |     |  |
|  |  | Mon  |   Web   |  Math   |   FOP   |     |  |
|  |  +------+---------+---------+---------+     |  |
|  +---------------------------------------------+  |
+---------------------------------------------------+
```

### Table Tags Reference

| Tag | Purpose |
|-----|---------|
| `<table>` | Container for the table |
| `<thead>` | Groups the header rows |
| `<tbody>` | Groups the body rows |
| `<tr>` | Table row |
| `<th>` | Table heading cell (bold, centered by default) |
| `<td>` | Table data cell |

### Code Example
```html
<table>
    <thead>
        <tr>
            <th>Day</th>
            <th>9:00-10:00</th>
            <th>10:00-11:00</th>
            <th>11:00-12:00</th>
            <th>12:00-1:00</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Monday</td>
            <td>HTML</td>
            <td>CSS</td>
            <td>JavaScript</td>
            <td>Lunch</td>
        </tr>
        <tr>
            <td>Tuesday</td>
            <td>FOP</td>
            <td>Math</td>
            <td>Web</td>
            <td>Lunch</td>
        </tr>
    </tbody>
</table>
```

### Real-World Use Case: Tables in Emails
Tables are still widely used in **HTML emails** because:
- Email clients (Gmail, Outlook) have inconsistent CSS support
- Flexbox and Grid are not reliably supported in many email clients
- Tables provide a **reliable layout structure**

### Opening DevTools to Inspect Tables
1. **Right-click** on any element → **"Inspect"** (or `F12` / `Ctrl+Shift+I`)
2. The **Elements** panel opens showing the HTML structure

**Why this matters:**
- Debug layout issues
- Understand how email templates are structured
- Inspect any website to learn how tables are built

---

# 8. Forms (Radio, Checkbox, Textarea)

## Agenda
1. Radio buttons
2. Checkboxes
3. Textarea
4. Reset Button

## Radio Buttons (MCQ style)

**When to use:** When the user must pick **exactly one** option from a group.

```html
<span>Year of study: </span>

<input type="radio" id="1st-year" name="year">
<label for="1st-year">1st year</label>

<input type="radio" id="2nd-year" name="year">
<label for="2nd-year">2nd year</label>

<input type="radio" id="3rd-year" name="year">
<label for="3rd-year">3rd year</label>

<input type="radio" id="year-4" name="year">
<label for="year-4">4th year</label>
```

> **🔑 Key rule:** All radios in the **same group** must share the **same `name` attribute**. This is what makes only **one** selectable at a time.

## Checkboxes (Multiple selection)

**When to use:** When the user can pick **one, many, or none**.

```html
<p>Select Hobbies:</p>

<input type="checkbox" id="hobby-reading" name="hobbies">
<label for="hobby-reading">Reading</label>

<input type="checkbox" id="hobby-sports" name="hobbies">
<label for="hobby-sports">Sports</label>

<input type="checkbox" id="hobby-music" name="hobbies">
<label for="hobby-music">Music</label>

<input type="checkbox" id="hobby-coding" name="hobbies">
<label for="hobby-coding">Coding</label>
```

> **🔑 Key rule:** Same `name` groups them so the backend receives them as an **array of values**. Each checkbox still toggles independently.

## Textarea (Comment box)

**When to use:** Multi-line text input (address, feedback, comment).

```html
<label for="comment">Comment</label>
<textarea name="comment" id="comment" rows="4" cols="30"></textarea>
```

**Attributes:**
- `rows` → visible height (lines)
- `cols` → visible width (characters)
- `placeholder` → hint text

## Buttons: Submit vs Reset

```html
<button type="submit">Register</button>
<button type="reset">Reset</button>
```

| Button | Behaviour |
|--------|-----------|
| `type="submit"` | Sends the form (triggers HTML5 validation) |
| `type="reset"` | Clears all fields back to their default values |

> ⚠️ Avoid `<input type="submit">Register</input>` — `<input>` is **self-closing**. Use `<button>` instead.

## Other Inputs in the Form

```html
<div>
    <label for="age">Age </label>
    <input type="number" id="age" placeholder="enter your age" min="0" required step="2">
</div>

<div>
    <label for="DOB">DOB </label>
    <input type="date" id="DOB" required>
</div>

<div>
    <label for="Profile_pic">Profile Pic </label>
    <input type="file" id="Profile_pic" required>
</div>
```

| Attribute | Meaning |
|-----------|---------|
| `type="number"` | Numeric input with up/down arrows |
| `min` / `max` | Allowed range |
| `step` | Increment value (e.g., step="2" → 0, 2, 4...) |
| `type="date"` | Browser date picker |
| `type="file"` | File upload chooser |
| `required` | Field must be filled before submit |

---
---

# PART 3 — CSS

---

# 9. CSS Introduction, Syntax, Application, Colors & Typography

## Agenda
1. Introduction to CSS & CSS Syntax
2. Applying CSS: Inline / Internal / External
3. Selectors
4. Colors
5. Backgrounds
6. Typography & Text Properties

## Introduction to CSS

**CSS = Cascading Style Sheets**
- HTML → **structure** (what's on the page)
- CSS → **style** (how it looks)
- CSS is **not** a programming language — it's a *style sheet language*

File extension: `.css`

## CSS Syntax

```css
selector {
    property: value;
}
```

| Part | Meaning |
|------|---------|
| **Selector** | Where you want to apply the style |
| **Rule** | The whole styling block |
| **Property** | What aspect to change |
| **Value** | How to change it |

### Selector Types

| Selector | Syntax | Example |
|----------|--------|---------|
| ID selector | `#idname` | `#hero { }` |
| Class selector | `.classname` | `.card { }` |
| Element selector | `tagname` | `h1`, `ul`, `p { }` |

### Rules to Remember
- Every declaration ends with `;`
- Property and value separated by `:`
- Block wrapped in `{ }`
- Comments: `/* like this */`

## Applying CSS — Three Ways

### External CSS
```css
/* external.css — it can be applied on multiple files */
p {
    background-color: lightblue;
}
```
```html
<head>
    <link rel="stylesheet" href="./external.css">
</head>
```

✅ **Preferred for real projects** — reusable across many pages.

### Internal CSS
```html
<head>
    <style>
        p {
            color: red;
        }
    </style>
</head>
```
Applies to **one file only**.

### Inline CSS
```html
<p style="color: green;">Lorem ipsum dolor sit amet.</p>
```
Applies to **that element only**.

### Priority Order
```
Inline  >  Internal / External  >  Browser default
```

> Internal and External have the **same** priority — whichever comes **later** in the document wins.

## Colors

### Color Formats
```css
.first       { color: wheat; }                    /* named */
.hexa        { color: #2776F5; }                  /* hex */
.rgb         { color: rgb(231, 245, 39); }        /* rgb */
.rgb-opacity { color: rgba(231, 245, 39, 0.5); }  /* rgba with opacity */
```

| Format | Example | Notes |
|--------|---------|-------|
| Named | `red`, `wheat` | 140+ names |
| Hex | `#2776F5` | `#RRGGBB` |
| RGB | `rgb(231, 245, 39)` | 0–255 per channel |
| RGBA | `rgba(231, 245, 39, 0.5)` | + alpha (0–1) |

## Backgrounds

### Background Color
```css
p {
    background-color: lightblue;
}
```

### Background Image
```css
header {
    height: 300px;
    width: 500px;
    background-image: url("./header.png");
    background-size: 500px 300px;   /* width height */
}
```

### Common Background Properties

| Property | Purpose | Example |
|----------|---------|---------|
| `background-color` | Solid fill | `background-color: #f5f5f5;` |
| `background-image` | Image behind content | `background-image: url("bg.png");` |
| `background-size` | Image dimensions | `background-size: cover;` |
| `background-repeat` | Tiling | `background-repeat: no-repeat;` |
| `background-position` | Placement | `background-position: center;` |

### Shorthand
```css
div {
    background: lightblue url("./bg.png") no-repeat center / cover;
}
```

## Typography & Text Properties

### Font Properties
```css
p {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 20px;        /* px | rem | em | % */
    font-weight: 100;       /* normal | bold | 100–900 */
    font-style: italic;     /* normal | italic */
}
```

**Font Family Fallback:** The browser tries each font left-to-right. Always end with a generic family (`serif`, `sans-serif`, `monospace`).

**Font Weight:**
- `400` → normal (body text)
- `700` → bold (headings)
- `100–900` → varies by font availability

### Text Properties
```css
p {
    text-decoration: underline;      /* underline | line-through | none */
    text-transform: lowercase;       /* uppercase | lowercase | capitalize */
    text-align: right;               /* left | right | center | justify */
    line-height: 1.5;
    letter-spacing: 2px;
    word-spacing: 4px;
    text-shadow: 2px 2px 4px gray;
}
```

### Text Align
```css
h1 { text-align: center; }
p  { text-align: left; }    /* default */
p  { text-align: justify; } /* stretch both edges */
```

### Text Transform
```css
h1 { text-transform: uppercase; }
p  { text-transform: lowercase; }
h2 { text-transform: capitalize; }
```

> Keep HTML text real — use CSS to change display case. Better for SEO and screen readers.

### Real Example: Bistro Hero Section
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Tiesto</title>
    <style>
        header {
            height: 300px;
            width: 500px;
            background-image: url("./header.png");
            background-size: 500px 300px;
        }
        h1 {
            font-family: sans-serif;
            color: white;
            text-transform: uppercase;
            font-size: 32px;
        }
    </style>
</head>
<body>
    <h1>Bistro Project</h1>
    <header>
        <div>
            <h1>Delivered at your doorstep</h1>
            <p>Enjoy delicious snacks, meals, and drinks delivered, prepared in a hygienic environment nearby.</p>
            <a>Get the App</a>
        </div>
    </header>
</body>
</html>
```

### Quick Reference Table

| Property | Purpose | Example |
|----------|---------|---------|
| `color` | Text color | `color: #333;` |
| `background-color` | Background fill | `background-color: lightblue;` |
| `background-image` | Background image | `background-image: url("bg.png");` |
| `background-size` | Image dimensions | `background-size: cover;` |
| `font-family` | Typeface | `font-family: Arial, sans-serif;` |
| `font-size` | Text size | `font-size: 20px;` |
| `font-weight` | Boldness | `font-weight: 700;` |
| `font-style` | Italic | `font-style: italic;` |
| `text-align` | Horizontal align | `text-align: center;` |
| `text-decoration` | Underline etc. | `text-decoration: none;` |
| `text-transform` | Case change | `text-transform: uppercase;` |

---

# 10. Selectors, Combinators, Units & Pseudo-Classes

## Agenda
1. CSS Selectors — how to select
2. Combinators — Descendant & Child
3. CSS Units — how to measure
4. Pseudo-Classes — `:link`, `:visited`, `:hover`, `:active`

## CSS Selectors — How to Select

### Element Selector
```css
p { color: red; }
```

### Class Selector `.classname`
```css
.bggreen { background-color: lightgreen; }
```

### ID Selector `#idname`
```css
#special { text-decoration: underline; }
```

### Universal Selector `*`
```css
* { font-family: sans-serif; }
```

### Multiple Classes on the Same Element `.a.b`
```css
.m1.m2 { color: blue; }
```
```html
<div class="m1 m2">Select me</div>     <!-- ✅ blue -->
<div class="m1">Not me</div>            <!-- ❌ -->
<div class="m2">Not me either</div>     <!-- ❌ -->
```
> No space between `.m1` and `.m2` — means *"element has both classes."*

### Attribute Selector `[attr="value"]`
```css
input[value="Select me"] { background-color: blue; }
```

### Selectors Quick Reference

| Selector | Syntax | Meaning |
|----------|--------|---------|
| Element | `p` | All `<p>` |
| Class | `.bggreen` | All `class="bggreen"` |
| ID | `#special` | Element with `id="special"` |
| Universal | `*` | Everything |
| Chained classes | `.m1.m2` | Has both `m1` AND `m2` |
| Attribute | `[value="x"]` | Elements with that attribute value |

## Combinators

### Ancestor / Descendant Combinator (space)
```css
.c1 .c2 { color: blue; }
```
Targets elements **anywhere inside** another element (at any depth).

### Parent / Child Combinator `>`
```css
.c1 > p { color: blue; }
```
Targets **direct children only** (one level down).

### Combining Both (Deep Chain)
```css
.c1 > div > div > span > .c2 { background-color: lightgreen; }
```

### Combinators Quick Reference

| Combinator | Syntax | Meaning |
|------------|--------|---------|
| Descendant / ancestor | `a b` (space) | `<b>` inside `<a>` at any depth |
| Child / parent | `a > b` | `<b>` that is a **direct child** of `<a>` |

> **Remember:** space = *anywhere inside*; `>` = *immediate child only*.

## CSS Units

### Pixels `px` — Absolute
```css
.px { font-size: 50px; }
```

### `rem` — Relative to Root
`1rem` = font size of `<html>` (default `16px`).
```css
html { font-size: 10px; }   /* now 1rem = 10px */
.rem { font-size: 1rem; }   /* = 10px */
```

### Viewport Units `vh` / `vw`
```css
.vh-vw {
    height: 80vh;   /* 80% of visible window height */
    width: 40vw;    /* 40% of visible window width */
}
```

### Percentage `%`
Relative to the **parent** element.
```css
.gp { height: 10rem; width: 10rem; background-color: lightblue; }
.parent { height: 50%; width: 50%; background-color: lightcoral; }
.child { height: 50%; width: 50%; background-color: blue; }
```

### Units Quick Reference

| Unit | Type | Relative to | Example |
|------|------|-------------|---------|
| `px` | Absolute | — | `font-size: 50px;` |
| `rem` | Relative | Root `<html>` font-size | `font-size: 1rem;` |
| `vh` | Relative | Viewport height | `height: 80vh;` |
| `vw` | Relative | Viewport width | `width: 40vw;` |
| `%` | Relative | Parent element | `width: 50%;` |

## Pseudo-Classes

### Anchor States
```css
a:link    { color: yellow; }              /* never visited */
a:visited { color: red; }                 /* already clicked */
a:hover   { background-color: lightgreen; } /* mouse over */
a:active  { background-color: black; }     /* while clicking */
```

**Order matters!** Write them LVHA:
```
:link  →  :visited  →  :hover  →  :active
```

### Hover on Any Element
```css
button {
    background-color: lightgreen;
    font-size: 1.5rem;
}
button:hover {
    font-size: 2rem;
}
```

### Pseudo-Class Quick Reference

| Pseudo-class | When it applies |
|--------------|-----------------|
| `:link` | Anchor that hasn't been visited |
| `:visited` | Anchor already clicked |
| `:hover` | Mouse is over the element |
| `:active` | Element is being clicked |

---

# 11. Pseudo-Elements, Box Model, Units & Positioning

## Agenda
1. Combinators *(done)*
2. Pseudo-elements & CSS Debugging
3. Google Fonts
4. Box Model & Box Sizing
5. Units: `px`, `rem`, `%`, `vh` / `vw`, `em`
6. Positioning

## Pseudo-Elements

Pseudo-elements let you **add content or style parts of an element** using CSS — without touching the HTML.

**Syntax:** two colons `::` before the pseudo-element name.

```css
selector::pseudo-element {
    /* styles */
}
```

> ⚠️ You must use the `content` property for `::before` and `::after` — otherwise they won't show.

### `::after` — Add Content After an Element
```css
p::after {
    content: " Read more";
    color: blue;
    text-decoration: underline;
}
```

### `::before` — Add Content Before an Element
```css
h2::before {
    content: "New ";
    font-size: 1rem;
    color: green;
}
```

### `::first-letter` — Style the First Letter
```css
p::first-letter {
    text-decoration: underline double;
}
```

### Pseudo-Elements Quick Reference

| Pseudo-element | Purpose | Example |
|----------------|---------|---------|
| `::before` | Insert content before element | `h2::before { content: "New "; }` |
| `::after` | Insert content after element | `p::after { content: " Read more"; }` |
| `::first-letter` | Style first letter | `p::first-letter { font-size: 3rem; }` |
| `::first-line` | Style first line | `p::first-line { font-weight: bold; }` |

## CSS Debugging

### Using Browser DevTools
1. **Right-click** any element → **Inspect** (or `F12` / `Ctrl+Shift+I`)
2. The **Elements** panel shows the HTML tree
3. The **Styles** panel shows applied CSS rules
4. **Crossed-out** properties → overridden by higher specificity
5. Edit values live to test before saving

### Common Debugging Checks

| Symptom | Likely Cause |
|---------|--------------|
| Style not applying | Wrong selector / typo |
| Style being ignored | Overridden by higher specificity |
| `::before` / `::after` not showing | Missing `content` property |
| Box bigger than expected | Default `box-sizing: content-box` |
| Element not moving | Not set to `position: relative/absolute` |

## Google Fonts

```html
<head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet">
</head>
```
```css
body {
    font-family: 'Poppins', sans-serif;
}
```

**Why use it?** Consistent typography across all devices, no font files to host.

## Box Model

Every element on a page is a **rectangular box** with four layers:

```
+-----------------------------------+
|            MARGIN                 |
|  +-----------------------------+  |
|  |          BORDER             |  |
|  |  +-----------------------+  |  |
|  |  |       PADDING         |  |  |
|  |  |  +-----------------+  |  |  |
|  |  |  |     CONTENT     |  |  |  |
|  |  |  +-----------------+  |  |  |
|  |  +-----------------------+  |  |
|  +-----------------------------+  |
+-----------------------------------+
```

### The Four Layers

| Layer | What it is | Analogy |
|-------|-----------|---------|
| **Content** | The actual text/image | House |
| **Padding** | Space *inside* the border | Garden |
| **Border** | The fence around the padding | Fence |
| **Margin** | Space *outside* the border | Neighbor's yard |

### Box Model in CSS
```css
.box1 {
    /* Content */
    width: 300px;
    height: 200px;

    /* Border */
    border-top: 3px solid red;
    border-bottom: 3px solid red;
    border-left: 10px solid green;
    border-right: 10px solid green;

    /* Margin */
    margin-left: 50px;

    /* Padding */
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 30px;
    padding-right: 30px;
}
```

### Shorthand
```css
/* padding: top right bottom left */
padding: 30px 30px 30px 30px;
padding: 30px;              /* all sides */
padding: 30px 20px;         /* top/bottom  left/right */
```

### How Size is Calculated
```
Total width  = width + padding-left + padding-right + border-left + border-right
Total height = height + padding-top + padding-bottom + border-top + border-bottom
```

## Box Sizing

### `content-box` (Default)
`width` / `height` apply **only to the content**.
```css
.content_box {
    box-sizing: content-box;    /* default */
    width: 100px;
    padding: 30px;
    border: 5px solid red;
}
/* Total width = 100 + 60 + 10 = 170px */
```

### `border-box`
`width` / `height` include **content + padding + border**.
```css
.border_box {
    box-sizing: border-box;
    width: 100px;
    padding: 30px;
    border: 5px solid red;
}
/* Total width = 100px (content shrinks to fit) */
```

### Universal Reset
```css
* {
    box-sizing: border-box;
}
```

### Comparison

| | `content-box` | `border-box` |
|--|---------------|--------------|
| `width` refers to | Content only | Content + padding + border |
| Padding/border | Added on top | Included in width |
| Developer math | Needed | Not needed |
| Default | ✅ | ❌ |

## Units

### `px` — Absolute
```css
.px { height: 100px; }
```

### `rem` — Relative to Root
```css
html { font-size: 30px; }   /* now 1rem = 30px */
.rem { font-size: 1rem; }   /* = 30px */
```

### `em` — Relative to Parent ⭐
```css
.parent_em {
    font-size: 20px;
    margin-bottom: 2em;    /* = 2 × 20px = 40px */
}
.em {
    height: 2em;           /* = 2 × 20px = 40px */
    padding: 1em;          /* = 1 × 20px = 20px */
}
```

| Unit | Relative to | Best For |
|------|-------------|----------|
| `rem` | Root (`<html>`) font size | Font sizes |
| `em` | Parent font size | Padding, margins inside a component |

### `vh` / `vw` — Viewport Units
```css
.vh-vw {
    height: 50vh;    /* 50% of the visible window height */
    width: 50vw;     /* 50% of the visible window width */
}
```

### `%` — Percentage
Relative to the **parent element**.
```css
.gp { height: 10rem; width: 10rem; background-color: lightblue; }
.parent { height: 70%; width: 70%; background-color: lightgreen; }
.child { height: 50%; width: 50%; background-color: lightcoral; }
```

### Units Quick Reference

| Unit | Type | Relative to | Use case |
|------|------|-------------|----------|
| `px` | Absolute | — | Fixed sizes |
| `rem` | Relative | Root font size | Font sizes across UI |
| `em` | Relative | Parent font size | Padding inside components |
| `vh` | Relative | Viewport height | Full-screen sections |
| `vw` | Relative | Viewport width | Full-width elements |
| `%` | Relative | Parent element | Fluid layouts |

## Positioning

### Normal Flow
- Block elements → stack top to bottom
- Inline elements → flow left to right
- Everything follows the order in the HTML file

### `position: static` (Default)
Element stays in normal flow. `top`, `left`, etc. have no effect.

### `position: relative`
```css
.box {
    position: relative;
    top: 20px;
    left: 30px;
}
```
- Space is **still reserved** at its original location
- Other elements don't shift to fill the gap

### `position: absolute`
```css
.parent { position: relative; }
.child {
    position: absolute;
    top: 10px;
    right: 10px;
}
```
- Takes the element **out of normal flow**
- By default, `top`/`left` measured from **page origin**
- If an ancestor has `position: relative`, it measures from that ancestor

### `position: fixed`
```css
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
}
```
Stays **fixed to the viewport**, even when scrolling.

### `position: sticky`
```css
.sticky-header {
    position: sticky;
    top: 0;
}
```
Acts like `relative` until it hits a threshold, then behaves like `fixed`.

### Positioning Quick Reference

| Value | In flow? | Moves relative to |
|-------|----------|-------------------|
| `static` | ✅ | — |
| `relative` | ✅ | Its own original position |
| `absolute` | ❌ | Nearest positioned ancestor (or page) |
| `fixed` | ❌ | Viewport |
| `sticky` | ✅ then ❌ | Scroll threshold |

---

# 12. Positioning, Cursor & CSS Variables

## Agenda
1. Position Property — Normal, relative, absolute, fixed, sticky
2. Cursor Property
3. CSS Variables

## Position Property

### Normal Flow (Default)
> Elements render from **left to right** and **top to bottom**, in the order they appear in the HTML file.

### `position: relative`
> Moves the element **from its original position**. Reference point is the **top-left corner of that box**.

```css
.box-2 {
    position: relative;
    left: 10rem;
    top: 10rem;
}
```

**Key concepts:**
- The element **still occupies its original space**
- `top`/`left`/`right`/`bottom` move it **visually**
- Think: *"move me from my own spot, but keep my spot reserved"*

### `position: absolute`
> Takes the element **out of normal flow** — the next element moves up.

```css
.parent { position: relative; }
.box-2 {
    position: absolute;
    left: 0;
    top: 0;
}
```

| Rule | Explanation |
|------|-------------|
| **Leaves normal flow** | Next sibling takes its original spot |
| **Reference point** | Nearest **positioned ancestor** |
| **Fallback** | If none, positions relative to the **page origin** |

### `position: fixed`
> Pins the element to the **viewport**. Stays in place **even when scrolling**.

```css
nav {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    background-color: black;
}
```

### `position: sticky`
> Acts like `relative` until scroll reaches a **threshold**, then behaves like `fixed`.

```css
.box-2 {
    position: sticky;
    top: 10px;
}
```

### Positioning Quick Reference

| Value | In Flow? | Space Reserved? | Reference Point |
|-------|----------|-----------------|-----------------|
| `static` | ✅ | ✅ | — |
| `relative` | ✅ | ✅ | Its own original position |
| `absolute` | ❌ | ❌ | Nearest positioned ancestor (or page) |
| `fixed` | ❌ | ❌ | Viewport |
| `sticky` | ✅ → ❌ | ✅ | Scroll threshold, then viewport |

## Cursor Property

> Changes the **mouse pointer icon** when hovering over an element.

```css
button {
    cursor: grab;
}
```

### Common Values

| Value | Icon | Use Case |
|-------|------|----------|
| `default` | Arrow | Default |
| `pointer` | Hand | Links, buttons |
| `grab` | Open hand | Draggable items |
| `grabbing` | Closed hand | While dragging |
| `text` | I-beam | Text inputs |
| `move` | Four arrows | Movable elements |
| `not-allowed` | 🚫 | Disabled buttons |
| `wait` | Spinner | Loading |
| `crosshair` | Cross | Selection tools |

### Example
```css
button {
    background-color: var(--primary);
    cursor: grab;
}
button:hover {
    cursor: grabbing;
}
button:disabled {
    cursor: not-allowed;
}
```

> **Tip:** Always use `cursor: pointer` on clickable elements.

## CSS Variables (Custom Properties)

> Store a value once, reuse it everywhere.

### Declaring a Variable
```css
:root {
    --primary: #3498db;
    --primary-dark: #2980b9;
    --text: red;
    --spacing: 10px;
    --radius: 8px;
    --fonts: sans-serif;
}
```

### Using a Variable
```css
body {
    font-family: var(--fonts);
    color: var(--text);
    padding: var(--spacing);
}
button {
    background-color: var(--primary);
    color: white;
    padding: var(--spacing);
    border: none;
    border-radius: var(--radius);
    cursor: grab;
}
button:hover {
    background-color: var(--primary-dark);
}
.card {
    border: 2px solid var(--primary);
    border-radius: var(--radius);
    padding: var(--spacing);
    margin-top: var(--spacing);
}
```

### Fallback Values
```css
p {
    color: var(--text-color, black);   /* black if --text-color missing */
}
```

### Use Cases

| Use Case | Why Variables Help |
|----------|-------------------|
| **Theme switching** (light/dark mode) | Change a few variables → whole theme updates |
| **Brand colors** | One `--primary` used across buttons, links, borders |
| **Consistent spacing** | `--spacing-sm`, `--spacing-md`, `--spacing-lg` |
| **Responsive typography** | Redefine `--font-size` inside a media query |
| **Component reuse** | Card styles adapt per context with scoped variables |

---

# 13. z-index, Overflow, Display & Inheritance / Specificity / Cascading

## Agenda
1. `z-index` — Stacking Order
2. `height`, `width` & `overflow`
3. `display` — `block`, `inline`, `inline-block`
4. Inheritance, Specificity & Cascading

> 📂 **Reference code:** [github.com/Jasbir96/vedam_2026_web_dev_sem_1/tree/main/HTML_CSS](https://github.com/Jasbir96/vedam_2026_web_dev_sem_1/tree/main/HTML_CSS)

## `z-index` — Stacking Order

### The Four Rules

| # | Rule |
|---|------|
| 1 | A **positioned** element always sits **above** statically placed elements |
| 2 | If **both** elements are positioned, the one **later in HTML** appears on top |
| 3 | If both are positioned and only one has `z-index`, the one **with `z-index` wins** |
| 4 | **Higher `z-index` = higher stacking** |

> ⚠️ **`z-index` only works on positioned elements** — `relative`, `absolute`, `fixed`, or `sticky`. No effect on `static`.

### Example
```css
.box-1 { position: relative; z-index: 1; }
.box-2 { position: relative; top: -20rem; z-index: 2; }
.box-3 { position: relative; top: -10rem; /* no z-index */ }
```

**Result (bottom → top):** `.box-3` → `.box-1` → `.box-2`

## `height`, `width` & `overflow`

### Default Behavior

| Property | Default |
|----------|---------|
| `height` | Height of the content |
| `width` | Total available width |

### `overflow` Values

| Value | Behavior |
|-------|----------|
| `visible` (default) | Content spills out of the box |
| `hidden` | Extra content is clipped |
| `scroll` | Scrollbars appear **in every direction** |
| `auto` | Scrollbars appear **only when needed** |

```css
.box {
    height: 100px;
    width: 100px;
    border: 5px solid red;
    overflow: auto;
}
```

### Use Cases
- `overflow: hidden` → crop images, clear floats
- `overflow: auto` → scrollable cards, chat windows
- `overflow: scroll` → force scrollbars

## `display` — `block`, `inline`, `inline-block`

### Comparison Table

| Behavior | `block` | `inline` | `inline-block` |
|----------|---------|----------|----------------|
| Next element | New line | Same line | Same line |
| `padding` (all directions) | ✅ | ✅ | ✅ |
| User-defined `height` | ✅ | ❌ | ✅ |
| User-defined `width` | ✅ | ❌ | ✅ |
| `margin` (all directions) | ✅ | Horizontal only | ✅ |
| `border` (all directions) | ✅ | ✅ | ✅ |

### `display: block`
```css
.block {
    display: block;
    height: 100px;
    width: 100px;
    padding: 10px;
    margin: 10px;
    border: 1px solid red;
}
```
- Takes the **full width** available
- Starts on a **new line**
- Default for `<div>`, `<p>`, `<h1>`–`<h6>`

### `display: inline`
```css
.inline {
    display: inline;
    height: 100px;      /* ❌ ignored */
    width: 100px;       /* ❌ ignored */
    padding: 30px;      /* ✅ but overlaps vertically */
    margin-top: 10px;   /* ❌ ignored */
    margin-left: 10px;  /* ✅ works horizontally */
}
```
- Sits **next to** the previous element
- `height` and `width` are **ignored**
- Default for `<a>`, `<span>`, `<strong>`, `<em>`

### `display: inline-block`
```css
.inline_block {
    display: inline-block;
    height: 100px;
    width: 100px;
    padding: 10px;
    margin: 10px;
}
```
- Sits on the **same line** like `inline`
- Accepts `height`, `width`, `margin`, `padding` like `block`

### Summary
```
block:         new line, full width, all box properties work
inline:        same line, only content-sized, no height/width
inline-block:  same line + full box control
```

## Inheritance, Specificity & Cascading

### Inheritance

Some properties **pass down** from parent to child automatically.

```css
.gp     { color: red; }
.parent { color: blue; }
.child  { color: green; }
```

**Result:** Text is **green** — the `.child` rule applies directly.

#### What inherits?

| Inherits ✅ | Does not inherit ❌ |
|-------------|---------------------|
| `color` | `margin` |
| `font-family` | `padding` |
| `font-size` | `border` |
| `line-height` | `background` |
| `text-align` | `width` / `height` |

> **Key rule:** *Direct styling > inherited styling*

### Specificity

When multiple rules target the **same** element, the more **specific** one wins.

### Specificity Order (highest → lowest)
```
!important  >  inline style  >  #id  >  .class  >  element  >  universal  >  inherited
```

### Example
```css
*          { font-size: 35px; }   /* universal */
div        { font-size: 10px; }   /* element   */
.child     { font-size: 15px; }   /* class     */
div.child  { font-size: 12px; }   /* element + class */
#unique    { font-size: 18px; }   /* id        */
```

```html
<div class="child" id="unique" style="font-size: 10px;">Text</div>
```

**Winner:** `18px` — the `#unique` ID rule.

### Specificity Score (rough guide)

| Selector | Points |
|----------|--------|
| Inline style | 1000 |
| `#id` | 100 |
| `.class` | 10 |
| `element` | 1 |
| `*` (universal) | 0 |

### Cascading

If two rules have the **same specificity**, the one that appears **later in the CSS file** wins.

```css
p { color: red; }
p { color: blue; }   /* wins — comes later */
```

### The Full Priority Ladder
```
!important
   ↓
Inline styles
   ↓
#id selectors
   ↓
.class selectors
   ↓
element selectors
   ↓
universal selector (*)
   ↓
user-agent defaults
   ↓
inherited values
```

### Quick Reference Table

| Topic | Key Points |
|-------|-----------|
| **`z-index`** | Only works on positioned elements; higher value = on top |
| **Stacking order** | Later in HTML > positioned > static |
| **`overflow`** | `visible` / `hidden` / `scroll` / `auto` |
| **`display: block`** | New line, full width, all properties work |
| **`display: inline`** | Same line, ignores height/width/vertical margin |
| **`display: inline-block`** | Same line + full box control |
| **Inheritance** | Color, font, line-height inherit; margin, padding, border don't |
| **Specificity** | `!important` > inline > `#id` > `.class` > element > `*` |
| **Cascading** | Same specificity → later rule wins |

---
---

# PART 4 — VERSION CONTROL

---

# 14. Git & GitHub

## The Problem Statement

Imagine a project developed over 3 weeks:

| Week | Files |
|------|-------|
| Week 1 | `index.html`, `index.css`, `index.js` |
| Week 2 | `index1.html`, `index1.css`, `index1.js` |
| Week 3 | `index2.html`, `index2.css`, `index2.js` |

### 😩 Problems with this approach
- **Manual duplication** — you keep copying files
- **Hard to track what changed** and why
- **Multiple people editing** → conflicts, no clean way to merge
- **No safe rollback** if something breaks

## What is Git?

- **Git** is a **Version Control System (VCS)**
- Created in **2005** by **Linus Torvalds** (who also created **Linux** in 1991)
- Tracks every change made to your project over time

### 📦 Repository (Repo)
> A **repository** = your **current code** + **all previous versions** of that code.

### Benefits
- ✅ Roll back to any previous version
- ✅ See who changed what and when
- ✅ Work in parallel (branches)
- ✅ Collaborate with multiple people safely

## Git Workflow

### Step 0 — Configure your identity (One-Time)
```bash
git config --global user.name "Jasbir"
git config --global user.email "your.email@example.com"
```

### The Workflow Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                    GIT WORKFLOW (LOCAL)                         │
└─────────────────────────────────────────────────────────────────┘

   ①  git init                 ②  Edit files             ③  git add .
  ┌──────────┐               ┌──────────────┐          ┌──────────────┐
  │  WORKING │  ──────────►  │   WORKING    │ ───────► │   STAGING    │
  │ DIRECTORY│   create/edit │  DIRECTORY   │   stage  │    AREA      │
  │ (empty)  │    files      │  (modified)  │          │ (ready to    │
  └──────────┘               └──────────────┘          │  commit)     │
                                                        └──────┬───────┘
                                                               │
                                                    ④  git commit -m "msg"
                                                               │
                                                               ▼
                                                        ┌──────────────┐
                                                        │    LOCAL     │
                                                        │  REPOSITORY  │
                                                        │  (.git dir)  │
                                                        └──────┬───────┘
                                                               │
                                                    ⑤  git push
                                                               │
                                                               ▼
                                                        ┌──────────────┐
                                                        │    GITHUB    │
                                                        │  (REMOTE)    │
                                                        └──────────────┘
```

### 🔁 The cycle repeats
```
Edit  →  Add  →  Commit  →  Push  →  Edit  →  Add  →  Commit  →  Push
```

### Workflow in Plain English

| # | Action | What it means |
|---|--------|---------------|
| 0 | **Setup identity** (once) | Tell Git who you are |
| 1 | **Initialize repo** | Turn your folder into a Git repo |
| 2 | **Make changes** | Edit files in VS Code |
| 3 | **Stage files** | Mark which changes you want to save |
| 4 | **Commit** | Create a version with a message |
| 5 | **Repeat** | Edit → Stage → Commit as you keep working |
| 6 | **Push** | Upload your versions to GitHub |

## Hosting on GitHub (Visual Way via VS Code)

### Prerequisites
1. Git installed → `git --version`
2. VS Code open with your project folder
3. A GitHub account
4. VS Code signed in to GitHub

### Publishing Flow

```
Step 1                Step 2                 Step 3
┌────────────┐       ┌──────────────┐       ┌──────────────────┐
│ git init   │       │  git add .   │       │  git commit -m   │
│ (or open   │ ────► │  (stage in   │ ────► │  "initial commit"│
│  existing  │       │   Source     │       │                  │
│  folder)   │       │   Control)   │       │                  │
└────────────┘       └──────────────┘       └────────┬─────────┘
                                                     │
                                                     ▼
                                        ┌────────────────────────┐
                                        │  Source Control Panel  │
                                        │  [ Publish Branch ]    │  ◄── click
                                        └────────────┬───────────┘
                                                     │
                                                     ▼
                                        ┌────────────────────────┐
                                        │  Sign in to GitHub     │
                                        │  (browser → Authorize) │
                                        └────────────┬───────────┘
                                                     │
                                                     ▼
                                        ┌────────────────────────┐
                                        │  Choose repo type:     │
                                        │   ◉ Public             │
                                        │   ○ Private            │
                                        └────────────┬───────────┘
                                                     │
                                                     ▼
                                        ┌────────────────────────┐
                                        │   ✅ Published!        │
                                        │   github.com/u/repo    │
                                        └────────────────────────┘
```

### Public vs Private

| Option | Who can see it? | When to use |
|--------|-----------------|-------------|
| **Public** | Anyone on the internet | Open-source, portfolio, learning |
| **Private** | Only you + invited collaborators | Personal work, client projects, secrets |

> 🔒 **Beginner tip:** Start **Private** until you're comfortable.

### After Publishing — The Everyday Loop
```
Edit file  →  Source Control shows "M" next to file
           →  Click + to stage
           →  Type message → click ✓ Commit
           →  Click "Sync Changes"
```

## Working in VS Code

### Why VS Code?
- Built-in **Source Control panel** (`Ctrl + Shift + G`)
- Integrated terminal — run Git commands without leaving the editor
- Visual diffs before committing

### VS Code GUI Shortcuts

| Action | Where |
|--------|-------|
| Open Source Control | `Ctrl + Shift + G` |
| Open integrated terminal | `` Ctrl + ` `` |
| Stage a file | Click **+** next to file |
| Commit | Type message → click **✓** |
| Push | Click **Sync Changes** |
| See current branch | Blue status bar (bottom-left) |

### Install GitLens (Recommended)

**GitLens** is a free VS Code extension that visualises Git history inside the editor.

**What GitLens gives you:**
- 🔍 **Inline blame** — who last changed each line
- 📜 **File history** — hover any line to see its commit
- 🔀 **Compare branches/commits** visually
- 👤 **Author info** next to every line

## Summary Cheat Sheet (Visual Workflow)

```
1. Install Git + VS Code + GitLens
2. Configure name & email (integrated terminal)
3. Open project folder in VS Code
4. Edit files (HTML form with radios, checkboxes, textarea, reset)
5. Source Control → stage (+) → commit (✓)
6. Publish Branch → sign in → choose Public/Private → name → Publish
7. Future changes: Edit → Stage → Commit → Sync Changes
8. Add .gitignore to exclude junk/secrets
```

## Git Commands Cheat Sheet

### One-Time Setup
```bash
git config --global user.name "Your Name"
git config --global user.email "you@email.com"
git config --list                # verify
```

### Per Project
```bash
git init                         # start tracking this folder
git add .                        # stage all changes
git add index.html               # stage one file
git commit -m "initial commit"   # save a version
git status                       # see what's changed / staged
```

### Linking & Pushing to GitHub (Terminal Way)
```bash
git remote add origin https://github.com/username/repo.git
git branch -M main
git push -u origin main          # -u links local main → remote main
```
After the first push:
```bash
git push
```

### Repeating Cycle
```bash
git add .
git commit -m "what changed"
git push
```

## Terminal vs GUI Comparison

| Task | Terminal | VS Code GUI |
|------|----------|-------------|
| Init repo | `git init` | Open folder → **Initialize Repository** |
| First push | `git remote add origin ...` + `git push -u origin main` | **Publish Branch** button |
| Choose public/private | Set on GitHub website | Dropdown in VS Code |
| Stage | `git add .` | Click **+** next to files |
| Commit | `git commit -m "msg"` | Type message → **✓** |
| Push | `git push` | **Sync Changes** button |
| See history | `git log` | GitLens panel |

## What VS Code Does Behind the Scenes

When you click **Publish Branch**, VS Code runs:
```bash
git remote add origin <auto-generated-url>
git push -u origin main
```

After that, **Sync Changes** runs:
```bash
git pull        # fetch remote updates
git push        # send your commits
```

## Additional Git Commands Worth Knowing

| Command | Purpose |
|---------|---------|
| `git log --oneline` | Compact commit history |
| `git diff` | See unstaged changes |
| `git diff --staged` | See staged changes |
| `git restore <file>` | Discard changes in working dir |
| `git reset HEAD <file>` | Unstage a file |
| `git branch` | List local branches |
| `git checkout -b new-branch` | Create + switch to a branch |
| `git pull` | Fetch + merge remote changes |
| `git clone <url>` | Copy a remote repo locally |
| `git rm --cached <file>` | Stop tracking a file (keep on disk) |

## Troubleshooting

| Problem | Fix |
|---------|-----|
| **"Publish Branch" not showing** | You haven't committed yet |
| **Signed in with wrong GitHub account** | `Ctrl+Shift+P` → *"GitHub: Sign Out"* |
| **Repo created but empty** | You forgot to commit before publishing |
| **Push rejected** | Run `git pull` first |
| **Rename repo** | GitHub → Settings → rename → `git remote set-url origin <new-url>` |
| **Accidentally committed a secret** | Rotate the key immediately; use `git filter-repo` to scrub history |

## `.gitignore` — Explained

A **`.gitignore`** file tells Git **which files/folders to ignore** — Git won't track, stage, or commit them.

### Why do we need it?

| Type | Examples | Why ignore |
|------|----------|------------|
| **Dependencies** | `node_modules/`, `venv/` | Huge, re-installable |
| **Secrets** | `.env`, keys | Security risk |
| **Build output** | `dist/`, `build/` | Generated, not source |
| **OS files** | `.DS_Store`, `Thumbs.db` | Irrelevant to project |
| **Editor folders** | `.vscode/`, `.idea/` | Personal preferences |
| **Logs / temp** | `*.log`, `tmp/` | Junk |

### Basic `.gitignore` Example
```gitignore
# Dependencies
node_modules/
venv/

# Secrets
.env
*.key

# Build output
dist/
build/

# OS files
.DS_Store
Thumbs.db

# Editor folders
.vscode/
.idea/

# Logs
*.log
```

### Rules & Patterns

| Pattern | Matches |
|---------|---------|
| `file.txt` | Exact file anywhere |
| `*.log` | Any file ending in `.log` |
| `folder/` | Entire folder |
| `/file.txt` | Only at repo root |
| `!important.log` | Exception — **don't** ignore |
| `# comment` | Comments start with `#` |

### ⚠️ Important Notes
1. **`.gitignore` only affects untracked files.** Already-committed files stay tracked. To remove one: `git rm --cached filename`
2. **Create it before your first commit** for best results
3. Generate one automatically at [gitignore.io](https://www.toptal.com/developers/gitignore)

## Recommended External Resources

| Resource | Link |
|----------|------|
| Pro Git (free book) | [git-scm.com/book](https://git-scm.com/book/en/v2) |
| GitHub Docs | [docs.github.com](https://docs.github.com) |
| GitLens docs | [gitkraken.com/gitlens](https://www.gitkraken.com/gitlens) |
| Learn Git Branching (interactive) | [learngitbranching.js.org](https://learngitbranching.js.org) |
| gitignore generator | [gitignore.io](https://www.toptal.com/developers/gitignore) |

### Key Concepts
- **Repository** = current code + full history
- **Staging** = files ready to be committed
- **Commit** = a saved version with a message
- **Remote (GitHub)** = online copy of your repo
- **`.gitignore`** = files Git should never track
- **GitLens** = VS Code extension to visualise Git history

---