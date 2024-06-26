# belly-button-challenge

## Overview

This project involves creating a dashboard that utilizes the D3 library to visualize data from a provided JSON file (`samples.json`). The dashboard will include a horizontal bar chart, a bubble chart, and display metadata based on user selection from a dropdown menu.

## Requirements

- **D3 Library**: Use D3.js (Data-Driven Documents) for data manipulation and visualization.
- **JSON Data**: Fetch data from `samples.json` using D3's data loading methods.
- **Horizontal Bar Chart**:
  - Display the top 10 Operational Taxonomic Units (OTUs) found in an individual.
  
- **Bubble Chart**:
  - Display each sample.

- **Metadata Display**:
  - Display demographic information (metadata) for each sample in a panel (`#sample-metadata`).
  - Update the panel dynamically based on user selection.

- **Dropdown Menu**:
  - Provide a dropdown menu to select different samples.
  - Update all visualizations and metadata panel based on the selected sample.

## Usage

1. **Clone Repository**:
   - Clone this repository to your local machine using:
     ```
     git clone https://github.com/your-username/your-repository.git
     ```

2. **Fetch Data**:
   - Fetch data from `samples.json`.
   - Use a local server or host your files on a static page service to test.

3. **Open `index.html`**:
   - Open `index.html` in a web browser to view the dashboard.
   - Select a sample from the dropdown menu to see visualizations and metadata update accordingly.

4. **Interact with Visualizations**:
   - Explore the horizontal bar chart and bubble chart to understand the distribution of OTUs in different samples.
   - Note: Ensure JavaScript and CSS files are correctly linked for proper functionality.

## Deployment

- **GitHub Pages Deployment**:
  - Deploy your application to GitHub Pages or any other free static page hosting service.
  - Update the `index.html` file with the correct URL paths if necessary.

- **Submission**:
  - Provide the following links:
    - Link to your deployed dashboard (GitHub Pages URL).
    - Link to your GitHub repository containing the project code.