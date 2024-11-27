const monthlyExpenses = JSON.parse('{{ monthly_expenses | tojson }}');

const labels = monthlyExpenses.map(item => `Month ${item[0]}`);
const data = monthlyExpenses.map(item => item[1]);

const ctx = document.getElementById('monthlyChart').getContext('2d');
const monthlyChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: 'Monthly Expenses',
            data: data,
            backgroundColor: 'rgba(5,64,19,0.2)',
            borderColor: 'rgb(66,191,4)',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
