PORTFOLIO WEBSITE — README
============================================================================

FILES
-----
index.html          Your page's text/structure. Search for "EDIT:" comments.
style.css           Colors, fonts, spacing. Edit the top ":root" block to
                     change the color palette everywhere at once.
script.js           Menu, scroll effects, and the project viewer popup.
projects-data.js    <-- THE FILE YOU'LL EDIT MOST OFTEN. Add/remove/update
                     projects here. Full instructions are in comments at
                     the top of that file.

assets/cv/          Put your real CV PDF here and update the file name in
                     index.html's "Download CV" button if you rename it.
assets/projects/     Put uploaded PDFs/JPEGs for individual projects here
                     (used for the pop-up view when someone clicks
                     "View Project" — see projects-data.js).
assets/project_preview/  Put a screenshot/thumbnail for each project here.
                     This is what shows on the card in the Projects grid —
                     see the "previewImage" field in projects-data.js.
assets/certificate/  Put your certificate images here. Each certification
                     card in the Education section flips on click to show
                     its certificate image from this folder — see the
                     "SECTION: EDUCATION" comment block in index.html.
assets/experience-certificates/  Put certificates for a specific job or
                     internship here. Each Work Experience card can have a
                     "View Certificate" button that opens its certificate
                     from this folder — see the "SECTION: EXPERIENCE"
                     comment block in index.html.
assets/images/       Optional: put a profile photo here if you want one
                     (see assets/images/PUT-YOUR-PHOTO-HERE.txt).

HOW TO ADD A PROJECT (short version)
-------------------------------------
1. Open projects-data.js
2. Copy one of the existing { ... }, project blocks
3. Paste it into the list, give it a new "id" number
4. Fill in title / category / description / tags
5. Choose type: "embed" (paste iframe code), "pdf", or "image"
   (for pdf/image, put the file in assets/projects/ and point "fileUrl" to it)
6. Save and refresh the page

A new category tab appears automatically the moment you type a new
category name on any project — you never edit the tabs directly.

HOW TO REMOVE A PROJECT
------------------------
Delete its { ... }, block from projects-data.js.

HOW TO CHANGE CONTACT DETAILS
-------------------------------
Open index.html, find the "SECTION: CONTACT" comment block, and edit the
email/phone/location/LinkedIn/GitHub placeholders.

Your Google Form no longer sits inline on the page (it looked out of place
against the dark theme). Instead there's an "Open Contact Form" button that
pops the form up over the page. The form's embed code lives in a hidden
<template id="contactFormTemplate"> just below the Contact section — to
swap in a different Google Form, replace only the <iframe ...> line inside
that template.

HOW TO VIEW THE SITE LOCALLY
-------------------------------
Just double-click index.html to open it in your browser. For the smoothest
experience (some browsers restrict local file access for iframes), you can
also run a tiny local server from this folder:
   Python:  python -m http.server 8000    then open http://localhost:8000
   Node:    npx serve

HOW TO PUBLISH IT ONLINE (free options)
-------------------------------------------
- GitHub Pages: push this whole folder to a GitHub repo, enable Pages in
  repo Settings.
- Netlify / Vercel: drag-and-drop this folder onto netlify.com/drop (no
  account needed for a quick test) or connect a GitHub repo for auto-deploys.

Whichever host you choose, upload the ENTIRE folder (index.html, style.css,
script.js, projects-data.js, and the assets folder) — not just index.html.
