let url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json';


function displayCharts(id) {

    console.log(id)

    // Read in data up here
    d3.json(url).then(function(data) {

        samples = data.samples;

        console.log(samples);

        // Filter the data to get the sample values, otu_ids and otu_labels for the selected ID

        let selectedSample = samples.filter(sample => sample.id == id);

        console.log(selectedSample);

        otuIds = selectedSample[0].otu_ids;
        otuLabels = selectedSample[0].otu_labels;
        sampleValues = selectedSample[0].sample_values;

        console.log(otuIds);

        // Bar chart
        slicedIds = otuIds.slice(0, 10);
        slicedLabels = otuLabels.slice(0, 10);
        slicedValues = sampleValues.slice(0, 10);

        reversedIds = slicedIds.reverse();
        reversedLabels = slicedLabels.reverse();
        reversedValues = slicedValues.reverse();

        let names = reversedIds.map(row => 'OTU ' + row);

        let trace1 = {
            x: reversedValues,
            y: names,
            text: slicedLabels,
            type: "bar",
            orientation: "h"
          };
        
        // Data trace array
        let data2 = [trace1];
        
        // Apply the group barmode to the layout
        let layout = {
          title: "Top 10 Bacteria Cultures Found"
        };
        
        // Render the plot to the div tag with id "bar"
        Plotly.newPlot("bar", data2, layout);

        // Bubble chart
        let trace2 = {
            x: otuIds,
            y: sampleValues,
            text: otuLabels,
            mode: 'markers',
            marker: {
                size: sampleValues,
                color: otuIds
            }
          };
        
        // Data trace array
        let data3 = [trace2];
        
        // Apply the group barmode to the layout
        let layout2 = {
          title: "Bacteria Cultures Per Sample"
        };
        
        // Render the plot to the div tag with id "bubble"
        Plotly.newPlot("bubble", data3, layout2);

        // Demographic info panel
        metadata = data.metadata;
        let selectedMeta = metadata.filter(m => m.id == id);

        let panel = d3.select(".panel panel-primary");

        panel.attr("class", "table table-striped");

        let metaKeys = Object.keys(selectedMeta[0]);

        console.log(metaKeys);

        let metaValues = Object.values(selectedMeta[0]);

        console.log(metaValues);

        for (const [key, value] of Object.entries(selectedMeta[0])) {
            console.log(`${key}: ${value}`);
        }

        // Use D3 to select the panel body
        let pbody = d3.select("#sample-metadata");

        // Append one table row `tr` to the table body - LOOKS GOOD
        let prow = pbody.append("tr");

        // Append one cell for the student name - NEEDS WORK
        prow.append("td").text(`${key}: ${value}`);

        for (const [key, value] of Object.entries(selectedMeta[0])) {
            prow.append("td").text(`${key}: ${value}`);
        }

        // Append one cell for the student grade - NEEDS WORK
        prow.append("td").text(metaValues);

    });

}

function optionChanged(selectedId) {

    displayCharts(selectedId);

}

function init() {

    d3.json(url).then(function(data) {

        console.log(data);
        // Fill the dropdown menu with all the IDs

        let dropdownMenu = d3.select("#selDataset");

        console.log(data.names);

        let ids = data.names;

        for (let i=0; i<ids.length; i++) {

            dropdownMenu.append("option").text(ids[i]).property("value", ids[i]);

        }

        first = ids[0];

        // Display the charts and panel with the first ID

        displayCharts(first);

    });

}

init()