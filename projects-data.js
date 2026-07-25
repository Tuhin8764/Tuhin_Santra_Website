/* ============================================================================
   PROJECTS-DATA.JS
   ----------------------------------------------------------------------------
   THIS IS THE ONLY FILE YOU NEED TO EDIT TO ADD, REMOVE, OR UPDATE A PROJECT.
   The page reads this file automatically and builds the category tabs and
   project cards for you — you never need to touch index.html or style.css
   for project changes.

   HOW TO ADD A NEW PROJECT
   ----------------------------------------------------------------------------
   1. Copy one of the objects below (from the opening { to the closing },)
   2. Paste it inside the projectsData array (anywhere between the [ and ]).
   3. Give it a unique "id" number (just count upward, e.g. 9, 10, 11...).
   4. Fill in title / category / description / tags.
   5. Add a preview image — put a screenshot/thumbnail of the project inside
      assets/project_preview/ and set "previewImage" to its path. This image
      is what shows on the card in the Projects grid, no matter what "type"
      the project is below (embed / pdf / image) — it's just the thumbnail.
   6. Set "type" to one of: "embed"  |  "pdf"  |  "image"
        - "embed" -> paste your embed <iframe> code into "embedCode"
        - "pdf"   -> put your PDF file inside assets/projects/ and set
                     "fileUrl" to "assets/projects/your-file.pdf"
        - "image" -> put your JPEG/PNG inside assets/projects/ and set
                     "fileUrl" to "assets/projects/your-file.jpg"
      (This "type" + fileUrl/embedCode is only used for the full pop-up view
      when someone clicks "View Project" — the card thumbnail always uses
      "previewImage" instead, regardless of type.)
   7. Save the file and refresh the page in your browser. Done!

   HOW TO REMOVE A PROJECT
   ----------------------------------------------------------------------------
   Delete its whole { ... }, block below. That's it.

   HOW TO ADD / REMOVE A CATEGORY (e.g. "Tableau Projects")
   ----------------------------------------------------------------------------
   Categories are created AUTOMATICALLY from whatever text you put in the
   "category" field of each project. There is nothing else to edit — just
   type a new category name on a project and a new tab will appear. If no
   project uses a category anymore, its tab disappears automatically.
   ============================================================================ */

const projectsData = [

  // -------------------------- POWER BI PROJECTS ----------------------------
  {
    id: 1,
    title: "All-India MBBS Seats & Fee Structure Dashboard",
    category: "Power BI Projects",
    description:
      "Analyzed year-over-year growth of MBBS college seats and fee structures across India (2023-2024) and built a dynamic dashboard highlighting regional disparities in growth.",
    tags: ["Power BI", "Excel", "Data Visualization"],
    previewImage: "assets/project_preview/MBBS-powerbi-dashboard.jpg", // card thumbnail — replace with your own screenshot
    date: "April 2024",
    youtubeUrl: "", // EDIT: paste a YouTube video URL here to show a play-button icon on the project card; leave empty ("") to hide the icon
    type: "pdf", // this project opens as an uploaded PDF when clicked
    embedCode: "",
    fileUrl: "assets/projects/MBBS_College_Dashboard.pdf", // replace with your own file
  },

  // ---------------------------- EXCEL PROJECTS ------------------------------
  {
    id: 2,
    title: "Body Fitness Tracker — Excel Workbook",
    category: "Excel Projects",
    description:
      "Built an Excel-based Body Fitness Tracker that automatically generates personalized health reports from user-entered data using advanced formulas.",
    tags: ["Excel", "XLOOKUP", "Macros", "Choose"],
    previewImage: "assets/project_preview/Fitness_Dashboard.jpg", // card thumbnail — replace with your own screenshot
    date: "March 2026",
    youtubeUrl: "", // EDIT: paste a YouTube video URL here to show a play-button icon on the project card; leave empty ("") to hide the icon
    type: "pdf", // this project opens as an uploaded PDF when clicked
    embedCode: "",
    fileUrl: "assets/projects/Body Fitness Tracker.pdf", // replace with your own file
  },

  {
    id: 21,
    title: "Interactive Salary Insights Dashboard",
    category: "Excel Projects",
    description:
      "Built an interactive Excel dashboard to explore median salaries across job roles, locations, and employment types using dynamic formulas, charts and slicers.",
    tags: ["Excel", "XLOOKUP()", "FILTER()", "Chart and graph", "Slicers"],
    previewImage: "assets/project_preview/Salary_Excel_Dashboard.jpg", // card thumbnail — replace with your own screenshot
    date: "March 2026",
    youtubeUrl: "", // EDIT: paste a YouTube video URL here to show a play-button icon on the project card; leave empty ("") to hide the icon
    type: "pdf", // this project opens as an uploaded PDF when clicked
    embedCode: "",
    fileUrl: "assets/projects/Salary_Excel_Dashboard.pdf", // replace with your own file
  },

  /* ----------------------------- SQL PROJECTS -------------------------------
  {
    id: 3,
    title: "Sample SQL Query Report",
    category: "SQL Projects",
    description:
      "Example placeholder project — replace with a real SQL project. Upload a PDF export of your query + results, a screenshot, or paste an embed from your BI tool.",
    tags: ["SQL", "Joins", "Aggregation"],
    previewImage: "assets/project_preview/sql-report.jpg", // card thumbnail — replace with your own screenshot
    date: "February 2024",
    youtubeUrl: "", // EDIT: paste a YouTube video URL here to show a play-button icon on the project card; leave empty ("") to hide the icon
    type: "image",
    embedCode: "",
    fileUrl: "assets/projects/sample-image-placeholder.jpg", // replace with your own screenshot
  },
  

  // ------------------------- MACHINE LEARNING PROJECTS ----------------------
  {
    id: 4,
    title: "ML Fundamentals Practice (IIT Kanpur Course Work)",
    category: "Machine Learning Projects",
    description:
      "Practice notebooks covering foundational machine learning concepts in Python, completed as part of the IIT Kanpur Machine Learning with Python certification.",
    tags: ["Python", "scikit-learn", "Jupyter"],
    previewImage: "assets/project_preview/ml-practice.jpg", // card thumbnail — replace with your own screenshot
    date: "March 2024",
    youtubeUrl: "", // EDIT: paste a YouTube video URL here to show a play-button icon on the project card; leave empty ("") to hide the icon
    type: "image",
    embedCode: "",
    fileUrl: "assets/projects/sample-image-placeholder.jpg", // replace with your own screenshot
  },
--------------------------------------*/
  // ----------------------------- PYTHON PROJECTS ----------------------------
  {
    id: 5,
    title: "Data Cleaning & Modeling Studio",
    category: "Python Projects",
    description:
      "A Streamlit web app for cleaning, transforming, and visualizing messy tabular datasets without writing code — handles missing values, duplicate detection, outlier removal (IQR), text normalization, and interactive Plotly charts, with confirm-before-delete safety and one-click undo.",
    tags: ["Python", "Streamlit", "Pandas", "Data Cleaning", "Plotly", "EDA"],
    previewImage: "assets/project_preview/Data_Cleaning_and_Modeling_Studios.jpg", // card thumbnail — replace with your own screenshot
    date: "April 2024",
    youtubeUrl: "", // EDIT: paste a YouTube video URL here to show a play-button icon on the project card; leave empty ("") to hide the icon
    type: "embed",
    embedCode:`<iframe width="600" height="450" src="https://datacleaningandmodelingstudios.streamlit.app/?embedded=true" frameborder="0" style="border:0" allowfullscreen></iframe>`,
    fileUrl: "",
  },

  // ----------------------------- FINANCIAL PROJECTS ----------------------------
  {
    id: 9,
    title: "Company Fundamental Analysis Algorithmic",
    category: "Financial Projects",
    description:
      "A two-stage equity screening pipeline that first scores companies on 10 financial health criteria (Gatekeeping), then confirms trend strength across 6 sections (Deep Trend Analysis), to shortlist the strongest investment candidates.",
    tags: ["Python", "Streamlit", "Pandas","Numpy", "Openpyxl","xlsxwriter"],
    previewImage: "assets/project_preview/finscorepipeline.jpg", // card thumbnail — replace with your own screenshot
    date: "March 2024",
    youtubeUrl: "", // EDIT: paste a YouTube video URL here to show a play-button icon on the project card; leave empty ("") to hide the icon
    type: "embed",
    // NOTE: Streamlit Cloud apps only embed reliably with a single
    // "?embedded=true" query parameter. Adding other params alongside it
    // (like the embed_options list that was here before) is a known
    // Streamlit bug that causes an infinite "redirected you too many
    // times" loop. If you want toolbar/theme options back, test them one
    // at a time on share.streamlit.io's own embed docs first.
    embedCode: `<iframe width="600" height="450" src="https://finscorepipeline.streamlit.app/?embedded=true" frameborder="0" style="border:0" allowfullscreen></iframe>`,
    fileUrl: "",
  },
  /*
  {
    id: 6,
    title: "Business Strategy KPI Tracker",
    category: "Financial Projects",
    description:
      "A lightweight KPI tracking template built during my Business Strategy Analyst internship to monitor market/competitor trends and support ROI evaluation.",
    tags: ["Excel", "KPI Tracking", "Reporting"],
    previewImage: "assets/project_preview/kpi-tracker.jpg", // card thumbnail — replace with your own screenshot
    date: "April 2024",
    youtubeUrl: "", // EDIT: paste a YouTube video URL here to show a play-button icon on the project card; leave empty ("") to hide the icon
    type: "pdf",
    embedCode: "",
    fileUrl: "assets/projects/sample-excel-report.pdf", // replace with your own file
  },
*/
  // ------------------------ GOOGLE DATA STUDIO PROJECTS ---------------------
  {
    id: 7,
    // EDIT: give this a real, descriptive title for your dashboard
    title: "Google Looker Studio Dashboard",
    category: "Data Studio Projects",
    // EDIT: swap this for a real description of what the report analyzes
    description:
      "An interactive report built in Google Looker Studio (formerly Data Studio), embedded directly from its live share link.",
    tags: ["Google Looker Studio", "Data Visualization"],
    previewImage: "assets/project_preview/looker-studio.jpg", // card thumbnail — replace with your own screenshot
    date: "March 2024",
    youtubeUrl: "", // EDIT: paste a YouTube video URL here to show a play-button icon on the project card; leave empty ("") to hide the icon
    type: "embed",
    embedCode: `<iframe width="600" height="450" src="https://datastudio.google.com/embed/reporting/759c5295-5cc6-4512-a7e8-6bca7827c762/page/NbXOF" frameborder="0" style="border:0" allowfullscreen sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"></iframe>`,
    fileUrl: "",
  },

  // --------------------------- STREAMLIT PROJECTS --------------------------
  {
    id: 8,
    title: "Call Statement Analysis",
    category: "Streamlit Projects",
    description:
      "A Streamlit web app that allows users to upload call statement data, perform analysis, and visualize key metrics such as call duration, frequency, and sentiment.",
    tags: ["Python", "Streamlit", "Pandas"],
    previewImage: "assets/project_preview/Call_Statement_Analysis.jpg", // card thumbnail — replace with your own screenshot
    date: "February 2024",
    youtubeUrl: "", // EDIT: paste a YouTube video URL here to show a play-button icon on the project card; leave empty ("") to hide the icon
    type: "embed",
    // NOTE: Streamlit Cloud apps only embed reliably with a single
    // "?embedded=true" query parameter. Adding other params alongside it
    // (like the embed_options list that was here before) is a known
    // Streamlit bug that causes an infinite "redirected you too many
    // times" loop. If you want toolbar/theme options back, test them one
    // at a time on share.streamlit.io's own embed docs first.
    embedCode: `<iframe width="600" height="450" src="https://callstatementanalysis.streamlit.app/?embedded=true" frameborder="0" style="border:0" allowfullscreen></iframe>`,
    fileUrl: "",
  },

  /* ---------------------------------------------------------------------
     ADD YOUR NEXT PROJECT BELOW THIS LINE — copy the template below,
     paste it above this comment (or anywhere in the array), fill it in.
     ---------------------------------------------------------------------

  {
    id: 8,
    title: "Project Title Goes Here",
    category: "Category Name Goes Here",   // new category name = new tab, automatically
    description: "One or two sentence summary of the problem, tool, and outcome.",
    tags: ["Tag1", "Tag2"],
    previewImage: "assets/project_preview/your-preview.jpg", // card thumbnail image
    type: "embed",              // "embed" | "pdf" | "image"
    embedCode: `<iframe ...></iframe>`,   // used only when type is "embed"
    fileUrl: "assets/projects/your-file.pdf", // used only when type is "pdf" or "image"
  },

  --------------------------------------------------------------------- */
];
