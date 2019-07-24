var data = [
    { "Оценка": "Хорошо", "Количество": 65 },
    { "Оценка": "Великолепно", "Количество": 130 },
    { "Оценка": "Удовлетворительно", "Количество": 65 }
];

$(".room-total-chart").igDoughnutChart({
    innerExtent: 90,
    series:
    [{
        name: "Количество",
        labelMemberPath: "Оценка",
        valueMemberPath: "Количество",
        dataSource: data
    }]
});