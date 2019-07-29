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

$(".kit-form-field[data-index='2']").dropdown({
    specClass: "guests",
    placeholder: "Сколько гостей",
    TPlaceholderSpelling: function(value) {
        if (value == 1)
            return "гость";
        else if (value > 1 && value < 5)
            return "гостя";
        else
            return "гостей";
    },
    dataSize: "long",
    options: [
        {
            title: "Взрослые"
        },
        {
            title: "Дети"
        },
        {
            title: "Младенцы"
        }
    ],
    clearBtn: true,
    applyBtn: true
});