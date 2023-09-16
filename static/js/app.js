let url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json';


function init() {

    d3.json(url).then(function(data) {

        console.log(data);
        // Fill the dropdown menu with all the IDs

        let dropdownMenu = d3.select("#selDataset");

        console.log(data.names);

        let ids = data.names;

        for (let i=0; i<ids.length; i++) {

            dropdownMenu.append("option").text(ids[i]);
            
        }


        // Display the charts and panel with the first ID

    });

}

init()