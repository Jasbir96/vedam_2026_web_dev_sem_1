# Web Development: Question Bank

---
###  Q1.  How the Internet Works

**Question:** Explain the client–server model. Define client, server, protocol, HTTP, URL and IP address in one line each, and draw a labelled diagram of a request and response.

**Answer:**

- **Client–server model:** the client requests resources and the server provides them. They communicate over the internet using HTTP.
- **Client:** the one who makes the request.
- **Server:** the one who provides the resources.
- **Protocol:** a set of rules.
- **HTTP:** the protocol that transfers data across the internet.
- **URL:** the exact human-readable address of a resource.
- **IP address:** the unique identifier of a server in a network.

```
┌──────────┐    Request     ┌──────────┐
│  Client  │ ─────────────► │  Server  │
│          │ ◄───────────── │          │
└──────────┘    Response    └──────────┘
        Internet : HTTP
```

###  Q2.  DNS

**Question:** A user types a domain name in the browser. Explain the role of the ISP and the DNS server in reaching the website, and why a DNS server is called a "log book" of domains and IP addresses. Draw the flow.

**Answer:**

- The **ISP** connects the user to the internet and passes the domain name to the DNS server.
- The **DNS server** is a log book that maps a domain name to the IP address of the server (for example google → 246.567...). Humans remember names, but networks need IP addresses.
- It is called a log book because it just looks up the domain and returns the matching IP.

```
Client ──► ISP ──► DNS Server (domain → IP)
   │                    │
   │◄──── IP address ───┘
   └────── Request ────► Server ──► Response ──► Client
```

###  Q3.  Units: Absolute and Root-Relative

**Question:** Differentiate between `px`, `rem` and `em`. If `html { font-size: 10px; }`, what is `1rem`? If a parent has `font-size: 20px`, what are `2em` and `1em` padding inside it?

**Answer:**

- `px` is absolute and fixed.
- `rem` is relative to the root (`<html>`) font size. The default is 16px.
- `em` is relative to the parent's font size. It suits padding and margins inside a component.
- With `html { font-size: 10px; }`, **1rem = 10px**.
- With a parent of `font-size: 20px`, **2em = 40px** and **1em padding = 20px**.

###  Q4. Units: Relative to the Screen and Parent

**Question:** Explain `%`, `vh` and `vw`. A grandparent is `10rem × 10rem`. Its child has `70%` height and width, and a grandchild inside that has `50%`. What is the grandchild's size if `1rem = 16px`?

**Answer:**

- `%` is relative to the **parent** element.
- `vh` is 1% of the viewport height. `vw` is 1% of the viewport width.
- Working: grandparent = 10rem = 10 × 16 = 160px. Child = 70% of 160 = 112px. Grandchild = 50% of 112 = **56px**.
- **Answer: 56px × 56px.**

###  Q5.  Box Model

**Question:** Draw and label the CSS box model showing content, padding, border and margin. Explain each layer with an everyday analogy, and give the formula for total width.

**Answer:**

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

- **Content** (house): the actual text or image.
- **Padding** (garden): space inside the border.
- **Border** (fence): surrounds the padding.
- **Margin** (neighbour's yard): space outside the border.
- **Total width = width + padding-left + padding-right + border-left + border-right.**

### Q6.  Box Sizing

**Question:** A box has `width: 100px; padding: 30px; border: 5px solid red;`. Calculate the total rendered width under `content-box` and under `border-box`. Why do developers write `* { box-sizing: border-box; }`?

**Answer:**

- `content-box`: 100 + (30 + 30) + (5 + 5) = **170px**.
- `border-box`: **100px**. The width includes padding and border, so the content area shrinks to 100 − 60 − 10 = 30px.
- `* { box-sizing: border-box; }` removes the need to add padding and border by hand, so boxes stay the size you set and layouts do not overflow.

###  Q7.  Positioning: relative and absolute

**Question:** Differentiate between `position: relative` and `position: absolute`. State whether each stays in normal flow, whether it keeps its original space, and what it is positioned against. What happens to `absolute` if no ancestor is positioned?

**Answer:**

||`relative`|`absolute`|
|---|---|---|
|In normal flow|Yes|No, the next element moves up|
|Original space kept|Yes|No|
|Positioned against|Its own original position|Nearest positioned ancestor|

If no ancestor is positioned, `absolute` positions against the **page origin**.

###  Q8.  Display: block, inline and inline-block

**Question:** Compare `block`, `inline` and `inline-block` in a table covering: starts on a new line, accepts `height` and `width`, accepts vertical `margin`, and two example tags each.

**Answer:**

||`block`|`inline`|`inline-block`|
|---|---|---|---|
|Starts on a new line|Yes|No|No|
|`height` and `width`|Yes|No|Yes|
|Vertical margin|Yes|No (horizontal only)|Yes|
|Examples|`div`, `p`|`a`, `span`|`button`, `img` styled with `display: inline-block`|

###  Q9.  Semantic Layout

**Question:** Write the `<body>` content for a travel website home page using semantic tags only (no `<div>`): a `header` with an `h1` and a `nav` (Manali, Kasol, Goa), a `main` with `h2` Destinations and two `h3` headings (Manali, Kasol) each followed by an image, and a `footer` with an `h2` Contact Us and a `ul` of Instagram, Facebook and Phone. Each image needs `alt` text and a height of `200px`.

**Answer:**

```html
<header>
    <h1>Travel Website</h1>
    <nav>
        <a href="">Manali</a>
        <a href="">Kasol</a>
        <a href="">Goa</a>
    </nav>
</header>

<main>
    <h2>Destinations</h2>
    <h3>Manali</h3>
    <img src="images.jpeg" alt="Manali" height="200px">
    <h3>Kasol</h3>
    <img src="images.jpeg" alt="Kasol" height="200px">
</main>

<footer>
    <h2>Contact Us</h2>
    <ul>
        <li>Instagram</li>
        <li>Facebook</li>
        <li>Phone Number</li>
    </ul>
</footer>
```

###  Q10.  Registration Form

**Question:** Code a registration form with: First Name, Email, Password, Age (min 0, step 2), DOB, Year (1st, 2nd, 3rd radio buttons), Hobbies (Reading, Music checkboxes), Comment (textarea 4 × 30), and Register and Reset buttons. Every input needs a `<label for="">` matched to its `id`. Email and password must be `required`, and the password needs `minlength="6"`. The radio buttons must be grouped so only one can be selected. State in one line why `<input type="submit">Register</input>` is wrong.

**Answer:**

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
        <input type="number" id="age" min="0" step="2">
    </div>
    <div>
        <label for="DOB">DOB: </label>
        <input type="date" id="DOB">
    </div>
    <div>
        <span>Year: </span>
        <input type="radio" id="y1" name="year"><label for="y1">1st</label>
        <input type="radio" id="y2" name="year"><label for="y2">2nd</label>
        <input type="radio" id="y3" name="year"><label for="y3">3rd</label>
    </div>
    <div>
        <span>Hobbies: </span>
        <input type="checkbox" id="reading" name="hobbies"><label for="reading">Reading</label>
        <input type="checkbox" id="music" name="hobbies"><label for="music">Music</label>
    </div>
    <div>
        <label for="comment">Comment</label>
        <textarea name="comment" id="comment" rows="4" cols="30"></textarea>
    </div>
    <button type="submit">Register</button>
    <button type="reset">Reset</button>
</form>
```

**Why `<input type="submit">Register</input>` is wrong:** `<input>` is a self-closing tag and cannot wrap text. Use `<button>` instead.

### Q11. Timetable Table

**Question:** Draw the table structure and write the HTML for a weekly timetable with a header row (Day, 9-10, 10-11, 11-12) and two body rows (Monday: HTML, CSS, JS; Tuesday: FOP, Math, Web). Use `table`, `thead`, `tbody`, `tr`, `th` and `td` correctly. Then explain in two lines why tables are still used in HTML emails.

**Answer:**

```
<table>
 ├─ <thead>
 │    └─ <tr> <th>Day</th> <th>9-10</th> <th>10-11</th> <th>11-12</th> </tr>
 └─ <tbody>
      ├─ <tr> <td>Monday</td> <td>HTML</td> <td>CSS</td> <td>JS</td> </tr>
      └─ <tr> <td>Tuesday</td> <td>FOP</td> <td>Math</td> <td>Web</td> </tr>
```

```html
<table>
    <thead>
        <tr>
            <th>Day</th>
            <th>9-10</th>
            <th>10-11</th>
            <th>11-12</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Monday</td>
            <td>HTML</td>
            <td>CSS</td>
            <td>JS</td>
        </tr>
        <tr>
            <td>Tuesday</td>
            <td>FOP</td>
            <td>Math</td>
            <td>Web</td>
        </tr>
    </tbody>
</table>
```

**Tables in emails:** email clients like Gmail and Outlook have inconsistent CSS support, and Flexbox and Grid are not reliably supported, so tables give a dependable layout.

###  Q12. Links and In-Page Navigation

**Question:** Write the `<body>` content (plus the one CSS rule asked for) for a page with a navigation bar containing: (a) a link that opens Google in a new tab, (b) a download link for `./images.jpeg`, (c) an email link and a phone link, (d) a link to `../class2.html`, (e) three in-page links to sections with `id` values `home`, `about` and `contact`, with smooth scrolling added using CSS. Explain what `./` and `../` mean in one line each.

**Answer:**

```html
<style>
    html { scroll-behavior: smooth; }
</style>

<nav>
    <a href="https://www.google.com/" target="_blank">Google</a>
    <a href="./images.jpeg" download>Download Image</a>
    <a href="mailto:jasbir.singh@vedam.com">Send Email</a>
    <a href="tel:+918700345678">Call Me</a>
    <a href="../class2.html">Class 2</a>
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
</nav>

<section id="home"><h2>Home</h2></section>
<section id="about"><h2>About</h2></section>
<section id="contact"><h2>Contact</h2></section>
```

- `./` means the **current folder**.
- `../` means the **parent folder** (one level up).

###  Q13.  CSS Variables and Hover

**Question:** Write HTML and CSS for a button and a card that share a theme: (a) declare `--primary`, `--primary-dark`, `--spacing` and `--radius` in `:root`, (b) style the `button` with `background-color`, `padding`, `border-radius` and `cursor` using the variables, (c) make the button darken on hover with `button:hover`, (d) style `.card` with a `2px` border using `--primary`, (e) give a fallback value for a variable that may be missing, (f) state one real use case of CSS variables.

**Answer:**

```html
<style>
    :root {
        --primary: #3498db;
        --primary-dark: #2980b9;
        --spacing: 10px;
        --radius: 8px;
    }
    button {
        background-color: var(--primary);
        color: white;
        padding: var(--spacing);
        border: none;
        border-radius: var(--radius);
        cursor: pointer;
    }
    button:hover {
        background-color: var(--primary-dark);
    }
    .card {
        border: 2px solid var(--primary);
        border-radius: var(--radius);
        padding: var(--spacing);
    }
    p {
        color: var(--text-color, black);   /* fallback if --text-color is missing */
    }
</style>

<button>Click Me</button>
<div class="card">I am a card</div>
```

**Use case:** theme switching. Redefine a few variables for dark mode and the whole page updates.

### Q14.  Positioning Layout

**Question:** Code a page with a navbar fixed to the top (full width, black) that stays visible while scrolling, a card with `position: relative` and a "NEW" badge in its top-right corner using `absolute`, and one `sticky` section heading with `top: 10px`. Explain in one line why the card needs `position: relative`.

**Answer:** _Navbar fixed to the top, a relative card with an absolute "NEW" badge in its top-right corner, and a sticky heading._

```html
<style>
    nav { position: fixed; top: 0; left: 0; width: 100%; background-color: black; color: white; }
    .card { position: relative; height: 150px; width: 300px; margin-top: 4rem; border: 2px solid gray; }
    .badge { position: absolute; top: 0; right: 0; background-color: red; color: white; }
    h2 { position: sticky; top: 10px; }
</style>

<nav>NAVBAR</nav>
<h2>Section Heading</h2>
<div class="card">CARD <span class="badge">NEW</span></div>
```

**Why the card needs `position: relative`:** an `absolute` element is positioned against its nearest positioned ancestor. Without it, the badge would use the page origin.

### Q15.  Specificity

**Question:** Given `* {font-size:35px}`, `div {font-size:10px}`, `.child {font-size:15px}`, `div.child {font-size:12px}` and `#unique {font-size:18px}`, and the element `<div class="child" id="unique" style="font-size: 10px;">Text</div>`, what is the final font size? Justify using specificity scores.

**Answer:** Specificity scores: inline = 1000, `#id` = 100, `.class` = 10, element = 1, `*` = 0. The inline style has the highest score, so the final size is **10px**.

### Q16.  z-index Stacking

**Question:** Three boxes: `.box-1 {position: relative; z-index: 1;}`, `.box-2 {position: relative; top: -20rem; z-index: 2;}` and `.box-3 {position: relative; top: -10rem;}` (no z-index). Give the stacking order from bottom to top and justify it.

**Answer:** Order from bottom to top: **`.box-3` → `.box-1` → `.box-2`**.

- All three are positioned, so the later box wins by default, but `.box-3` has no `z-index`.
- Rule 3: if only some have `z-index`, those with `z-index` win, so `.box-3` is lowest.
- Rule 4: higher `z-index` is higher, so `.box-2` (2) is above `.box-1` (1).
- `z-index` has no effect on `static` elements.

### Q17.  overflow

**Question:** Explain the four values of the `overflow` property with a use case for each.

**Answer:**

- `visible` (default): content spills out of the box.
- `hidden`: extra content is clipped (crop images).
- `scroll`: scrollbars always appear in every direction.
- `auto`: scrollbars appear only when needed (scrollable cards, chat windows).

### Q18.  Selectors and Combinators

**Question:** Explain the difference between `.m1.m2`, `.c1 .c2` and `.c1 > p`. Give an example of an attribute selector and the universal selector.

**Answer:**

- `.m1.m2` (no space) matches an element that has **both** classes.
- `.c1 .c2` matches `.c2` **anywhere inside** `.c1`.
- `.c1 > p` matches only `p` elements that are **direct children** of `.c1`.
- `input[value="Select me"]` is an attribute selector. `*` is the universal selector.

### Q19.  Pseudo-classes and Pseudo-elements

**Question:** Write the four anchor pseudo-classes in the correct order and explain why order matters. What does `::after` do, and what happens if `content` is missing?

**Answer:**

```css
a:link    { color: yellow; }
a:visited { color: red; }
a:hover   { background-color: lightgreen; }
a:active  { background-color: black; }
p::after  { content: " Read more"; }
```

- The correct order is **LVHA** (link, visited, hover, active), otherwise later rules override the earlier ones.
- `::before` and `::after` do nothing without the `content` property.

### Q20.  Applying CSS: Three Ways

**Question:** Explain inline, internal and external CSS with an example of each. Which is preferred and why? State the priority order.

**Answer:**

- **Inline:** `<p style="color: green;">` affects one element only.
- **Internal:** `<style>` in `<head>` affects one file.
- **External:** a `.css` file linked with `<link rel="stylesheet" href="./external.css">`, reusable across many pages. **Preferred** for real projects.
- Priority: inline > internal / external > browser default. Internal and external have the same priority, and the later one wins.

### Q21.  Image Formats

**Question:** Compare JPEG, PNG and SVG in a table (use, characteristics).

**Answer:**

|Format|Use|Notes|
|---|---|---|
|JPEG|Photographs, normal images|Pixelates on larger screens|
|PNG|Images needing a transparent background|Pixelates on larger screens|
|SVG|Logos, icons, illustrations|Scales to any screen, heavier computationally|

### Q22.  id vs class

**Question:** Differentiate between `id` and `class` on uniqueness, CSS selector and anchor linking.

**Answer:**

||`id`|`class`|
|---|---|---|
|Uniqueness|Unique per page|Reusable|
|CSS selector|`#idname`|`.classname`|
|Anchor linking|Yes (`href="#idname"`)|No|

### Q23.  Semantic HTML: Benefits

**Question:** What is semantic HTML? Explain its three benefits. Which semantic tags should appear only once on a page?

**Answer:**

- **Accessibility:** screen readers can navigate the page structure.
- **SEO:** search engines understand the page and rank it accordingly.
- **Maintenance:** developers can read the code structure easily.
- `header`, `main` and `footer` should be unique on a page. `nav` can appear multiple times.

### Q24.  iframes

**Question:** Explain the `<iframe>` tag with syntax, who decides if a page can be embedded, what can be embedded, 

**Answer:**

- An `<iframe>` embeds another HTML document inside the page.
- Syntax: `<iframe src="url" title="..." height="..." width="..."></iframe>`.
- **Who decides:** the owner of the embedded site. If embedding is blocked, the frame shows blank or an error.
- **Can embed:** your own local files, and external pages only if allowed (YouTube embed, Google Maps, Google Docs).

### Q25.  Video and Audio Tags

**Question:** Write a `video` tag and an `audio` tag using common attributes and explain each attribute.

**Answer:**

```html
<video src="./video.mp4" height="300" controls muted poster="./images.jpeg"></video>
<audio src="./song.mp3" controls loop></audio>
```

- `controls` shows play, pause and volume. `muted` starts silent. `poster` shows an image before play.
- `loop` repeats the audio. `autoplay` often requires `muted` for video.

### Q26.  Radio vs Checkbox

**Question:** Differentiate between radio buttons and checkboxes. What is the role of the `name` attribute in each?

**Answer:**

- **Radio:** user picks **exactly one** option. All radios in a group must share the same `name`.
- **Checkbox:** user can pick **one, many or none**. Sharing a `name` makes the backend receive an array of values.
- Both should be paired with `<label for>` matching the input's `id`.

