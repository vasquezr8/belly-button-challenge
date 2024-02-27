# Belly Button Biodiversity Dashboard

## Deployment

https://vasquezr8.github.io/belly-button-challenge/

## Background

For this assignment, I built an interactive dashboard to explore the Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels. The dataset revealed that a small handful of microbial species, also known as operational taxonomic units (OTUs), were present in more than 70% of people, while the rest were relatively rare.

To complete the assignment, I followed these steps:

1. I used the D3 library to read in the `samples.json` file from the provided URL.
2. I created a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in each individual:
   - I used `sample_values` as the values for the bar chart.
   - I used `otu_ids` as the labels for the bar chart.
   - I used `otu_labels` as the hovertext for the chart.

3. I created a bubble chart to display each sample:
   - I used `otu_ids` for the x values.
   - I used `sample_values` for the y values.
   - I used `sample_values` for the marker size.
   - I used `otu_ids` for the marker colors.
   - I used `otu_labels` for the text values.

4. I displayed the sample metadata, including demographic information.
5. I displayed each key-value pair from the metadata JSON object on the page.
6. All the plots update when a new sample is selected.
7. Finally, I deployed my app to GitHub Pages.

## Code Citations

Adding text to each text value in a Javascript array:
(Found in line 36 of app.js file)

https://stackoverflow.com/questions/64903921/how-do-i-add-text-to-each-text-value-in-a-javascript-array

Loop through key value pairs of a Javascript object:
(Found in lines 98-99 of app.js file)

https://stackoverflow.com/questions/67223912/how-to-render-the-value-of-each-key-within-the-table

Customizing marker features in a Plotly bubble chart:
(Found in lines 63-67 of app.js file)

https://plotly.com/javascript/bubble-charts/

Adding hover text to a Plotly chart:
(Found in lines 41 & 61 of app.js file)

https://plotly.com/javascript/hover-text-and-formatting/
