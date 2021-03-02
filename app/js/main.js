// wow.js
new WOW().init();

// Chart.js
Chart.defaults.global.defaultFontColor = '#263238';
Chart.defaults.global.defaultFontFamily = "'IBM Plex Sans', sans-serif";
Chart.defaults.global.legend.labels.usePointStyle = true;



let verticalBarsInfographics = document.getElementById('vertical-bars');
let verticalBarsChart = new Chart(verticalBarsInfographics, {
  type: 'bar',
  data: {
    labels: ['USA', 'RUSSIA', 'UKRANE', 'INDIA'],
    datasets: [{
      label: '2010',
      backgroundColor: '#CFBEF0',
      data: [20, 15, 10, 30]
    }, {
      label: '2020',
      backgroundColor: '#9F7DE1',
      data: [30, 13, 11, 45]
    }]
  },
  options: {
    scales: {
      xAxes: [{
        stacked: true,
        display: true,
        gridLines: {
          color: "white",
          zeroLineColor: "white",
        }
      }],
      yAxes: [{
        stacked: true,
        display: false
      }]
    },
    legend: {
      align: 'end',
      position: 'top',
      onHover: function (e) {
        e.target.style.cursor = 'pointer';
      }
    },
    hover: {
      onHover: function (e) {
        var point = this.getElementAtEvent(e);
        if (point.length) e.target.style.cursor = 'pointer';
        else e.target.style.cursor = 'default';
      }
    }
  }
});



let horizontalBarsInfographics = document.getElementById('horizontal-bars');
let horizontalBarsChart = new Chart(horizontalBarsInfographics, {
  type: 'horizontalBar',
  data: {
    labels: ['Apple', 'Samsung', 'Xiaomi', 'OPPO', 'Huawei', 'Others'],
    datasets: [{
      label: '2020 Q4 Market Share',
      backgroundColor: ['#CFBEF0', '#9F7DE1', '#5F27CD', '#341F97', '#2A1979', '#1F135B'],
      data: [23.4, 19.1, 11.2, 8.8, 8.4, 29.1]
    }]
  },
  options: {
    scales: {
      xAxes: [{
        stacked: true,
        scaleLabel: {
          display: true,
          labelString: "2020 Q4 Market Share, %"
        }
      }],
      yAxes: [{
        stacked: true
      }]
    },
    legend: {
      display: false
    },
    hover: {
      onHover: function (e) {
        var point = this.getElementAtEvent(e);
        if (point.length) e.target.style.cursor = 'pointer';
        else e.target.style.cursor = 'default';
      }
    }
  }
});



let lineChartInfographics = document.getElementById('line-chart');
let lineChart = new Chart(lineChartInfographics, {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [{
      backgroundColor: '#f8e3fc',
      borderColor: '#855CF8',
      borderWidth: 2,
      pointBackgroundColor: '#855CF8',
      pointBorderColor: '#855CF8',
      pointBorderWidth: 9,
      pointHoverBorderWidth: 9,
      data: [80, 100, 80, 60, 80, 50, 40, 80, 20, 20, 40, 15]
    }]
  },
  options: {
    scales: {
      xAxes: [{
        display: false
      }],
      yAxes: [{
        display: false,
        ticks: {
          max: 110
        }
      }]
    },
    legend: {
      display: false
    },
    hover: {
      onHover: function (e) {
        var point = this.getElementAtEvent(e);
        if (point.length) e.target.style.cursor = 'pointer';
        else e.target.style.cursor = 'default';
      }
    }
  }
});



let doughnutInfographics = document.getElementById('doughnut-chart');
let doughnutChart = new Chart(doughnutInfographics, {
  type: 'doughnut',
  data: {
    labels: ['Downloaded', 'Other'],
    datasets: [{
      backgroundColor: ['#263238', '#CFD8DC'],
      borderWidth: 0,
      data: [12.5, 87.5]
    }]
  },
  options: {
    cutoutPercentage: 80,
    legend: {
      align: 'end',
      position: 'top',
      labels: {
        padding: 25
      },
      onHover: function (e) {
        e.target.style.cursor = 'pointer';
      }
    },
    hover: {
      onHover: function (e) {
        var point = this.getElementAtEvent(e);
        if (point.length) e.target.style.cursor = 'pointer';
        else e.target.style.cursor = 'default';
      }
    }
  }
});



let pieInfographics = document.getElementById('pie-chart');
let pieChart = new Chart(pieInfographics, {
  type: 'pie',
  data: {
    labels: ['Figma', 'Sketch', 'Adobe XD', 'Adobe Illustrator', 'Adobe Photoshop'],
    datasets: [{
      backgroundColor: ['#855CF8', '#ACB9FF', '#E289F2', '#2A1979'],
      borderWidth: 0,
      data: [40, 30, 10, 10, 10]
    }]
  },
  options: {
    legend: {
      align: 'start',
      position: 'bottom',
      labels: {
        padding: 25
      },
      onHover: function (e) {
        e.target.style.cursor = 'pointer';
      }
    },
    hover: {
      onHover: function (e) {
        var point = this.getElementAtEvent(e);
        if (point.length) e.target.style.cursor = 'pointer';
        else e.target.style.cursor = 'default';
      }
    }
  }
});



let radarInfographics = document.getElementById('radar-chart');
let radarChart = new Chart(radarInfographics, {
  type: 'radar',
  data: {
    labels: ['Code review', 'Issues', 'Pull requests', 'Commits'],
    datasets: [{
      label: 'Activity',
      fill: true,
      backgroundColor: "rgba(179,181,198,0.2)",
      borderColor: "#855CF8",
      pointBorderColor: "#855CF8",
      pointBackgroundColor: "#855CF8",
      data: [25.4, 7.6, 14.4, 52.6]
    }]
  },
  options: {
    legend: {
      display: false
    },
    hover: {
      onHover: function (e) {
        var point = this.getElementAtEvent(e);
        if (point.length) e.target.style.cursor = 'pointer';
        else e.target.style.cursor = 'default';
      }
    }
  }
});