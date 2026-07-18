const ctx = document.getElementById('miGrafico');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Enero', 'Febrero', 'Marzo'],
        datasets: [{
            label: 'Ventas',
            data: [12, 19, 3],
            borderRadius: 8
        }, 
        {
            label: 'Pedidos',
            data: [20, 40, 57],
            borderRadius: 8
        }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Ventas y Pedidos Mensuales'
            }
        }
    }
});

