var VerticalBars = document.getElementById('vertical-bars');

Chart.defaults.global.defaultFontColor = '#263238';
Chart.defaults.global.defaultFontFamily = "'IBM Plex Sans', sans-serif";
Chart.defaults.global.defaultFontSize = 16;

var VerticalBarsChart = new Chart(VerticalBars, {
  type: 'bar',
  data: {
    labels: ['UNITED STATES', 'RUSSIA', 'UKRANE', 'INDIA'],
    datasets: [{
      label: '2010',
      backgroundColor: '#CFBEF0',
      data: [0, 10, 5, 2]
    }, {
      label: '2020',
      backgroundColor: '#9F7DE1',
      data: [2, 20, 30, 45]
    }]
  },

  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    legend: {
      align: 'start',
      position: 'bottom'
    }
  }
});