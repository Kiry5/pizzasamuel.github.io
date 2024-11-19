const ctx = document.getElementById('graficoPizza').getContext('2d');
const graficoPizza = new Chart(ctx, {
    type: 'pie', // Tipo do gráfico
    data: {
        labels: ['Pikachu', 'Bulbasaur', 'Charmander', 'Squirtle'], // Labels representando Pokémon
        datasets: [{
            label: 'Distribuição de Capturas de Pokémon',
            data: [40, 25, 20, 15], // Dados fictícios de capturas
            backgroundColor: [
                'rgba(255, 204, 0, 0.5)', // Amarelo (Pikachu)
                'rgba(34, 139, 34, 0.5)', // Verde (Bulbasaur)
                'rgba(255, 69, 0, 0.5)', // Laranja (Charmander)
                'rgba(30, 144, 255, 0.5)' // Azul (Squirtle)
            ],
            borderColor: [
                'rgba(255, 204, 0, 1)', // Amarelo (Pikachu)
                'rgba(34, 139, 34, 1)', // Verde (Bulbasaur)
                'rgba(255, 69, 0, 1)', // Laranja (Charmander)
                'rgba(30, 144, 255, 1)' // Azul (Squirtle)
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true, // Tornar o gráfico responsivo
        plugins: {
            legend: {
                position: 'top', // Posição da legenda
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw + '%'; // Exibir rótulo e valor
                    }
                }
            }
        }
    }
});
