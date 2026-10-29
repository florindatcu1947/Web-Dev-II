# Web Refresher: PageTurners Book Club Tracker

## Reflection

The implementation of the PageTurners reading list has given me a clear refresher on structural HTML and responsive page layouts. Marking up the book catalogue by using semantic elements such as `<article>` and `<select>` as very smooth and it has allowed to keep the document accessible and well-defined without extra wrapper elements. Flexbox has made positioning the navigation and filter controls fast and clean.

The main challenge was configuring the responsive CSS Grid so the cards scaled properly across screens by shifting from one column on mobile to two and four columns across tablets and desktops. In JavaScript, it is critical to make sure that the DOM filter dynamically adjusted the displayed counter text alongside element visibility and this needs careful string interpolation and condition checks.

For Web Development II, I want to improve my data-rendering techniques so that catalogue items can be generated dynamically from JSON objects rather than hardcoded in the markup.