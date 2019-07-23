var data = [
    { "CountryName": "China", "Pop1990": 1141 },
    { "CountryName": "India", "Pop1990": 849 },
    { "CountryName": "United States", "Pop1990": 250 },
    { "CountryName": "Indonesia", "Pop1990": 178 },
    { "CountryName": "Brazil", "Pop1990": 150 }
];

$(".room-total-graph").igDoughnutChart({
    width: "100px",
    height: "100px",
    series:
    [{
        name: "Pop1990",
        labelMemberPath: "CountryName",
        valueMemberPath: "Pop1990",
        dataSource: data,
        labelsPosition: "bestFit",
        formatLabel: function (context) {
            return context.itemLabel + " (" + context.item.Pop1990 + ")";
        }
    }]
});