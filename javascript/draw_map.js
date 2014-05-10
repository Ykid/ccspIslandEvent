var centered, 
    width = 810, 
    height = 600, blocks;
        
var map = d3.select("div#map").append("svg")
                .attr("width", width)
                .attr("height", height)
            
map.append("rect")
    .attr("class", "mapBackground")
    .attr("width", width)
    .attr("height", height)
    .on("click", zoom)
            
var taiwan = map.append("g");

//console.log(data);

d3.json("./data/twCounty2010.topo.json", function (data) {
    // load data with topojson.js
    //console.log(data.objects);
    topo = topojson.feature(data, data.objects["twCounty2010.geo"]);
                
    // prepare a Mercator projection for Taiwan
    prj = d3.geo.mercator().center([120.979531, 23.978567]).scale(50000);
    path = d3.geo.path().projection(prj);
    //console.log(topo.features);
                
    // render them on a svg element with id "map"
    taiwan.append("g")
            .attr("id", "taiwan")
        .selectAll("path")
            .data(topo.features).enter().append("path")
                .attr("id", "county")
                .attr("d", path)
                .on("click", zoom);
});

function zoom(d) {
    var x, y, k;
    
    if (d && centered != d) {
        var centroid = path.centroid(d);
        x = centroid[0];
        y = centroid[1];
        k = 8;
        centered = d;
    }
    else {
        x = width / 2;
        y = height / 2;
        k = 1;
        centered = null;        
    }

    d3.selectAll("path")
        .classed("active", centered && function(d) { return d === centered; });

    //console.log(d === centered);
    taiwan.transition()
            .duration(750)
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
            .style("stroke-width", 1.5 / k + "px");
}