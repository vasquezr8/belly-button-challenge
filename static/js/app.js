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