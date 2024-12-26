export const demoDataLineChart = {

    labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ],
    datasets: [
        {
            label: "Relief Items Distributed",
            data: [120, 150, 200, 180, 220, 300, 250, 400, 350, 500, 600, 700],
            fill: false,
            backgroundColor: "rgba(75, 192, 192, 1)",
            borderColor: "rgba(75, 192, 192, 1)",
            tension: 0.1,
        },
        {
            label: "People Assisted",
            data: [100, 130, 170, 160, 210, 290, 240, 380, 330, 480, 580, 680],
            fill: false,
            backgroundColor: "rgba(255, 99, 132, 1)",
            borderColor: "rgba(255, 99, 132, 1)",
            tension: 0.1,
        },
        {
            label: "Funds Raised (in USD)",
            data: [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000],
            fill: false,
            backgroundColor: "rgba(54, 162, 235, 1)",
            borderColor: "rgba(54, 162, 235, 1)",
            tension: 0.1,
        },
    ],
};