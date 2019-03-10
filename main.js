var peligro = document.getElementById('peligro');
var data_peligro = [4.8, 4.9, 5.1];
var data_cuidado = [5.5,5.8,5.8];
var data_exito = [6.4,6.6,7.8];
var cuidado = document.getElementById('cuidado');
var exito = document.getElementById('exito');
var ctx = document.getElementById('myChart').getContext('2d');
var card_bar_client = document.getElementById('card_bar_client');
var client_number = document.getElementById('client_number');
var client_number_small = document.getElementById('client_number_small');


var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["Enero", "Febrero", "Marzo"],
        datasets: [{
            label: "Benchmark",
            fill: false,
            backgroundColor: '#2d4059',
            borderColor: '#2d4059',
            data: [6.4, 6.9, 6.3],
            pointBackgroundColor: '#2d4059',
        },
        {
            label: "Client",
            fill: true,
            backgroundColor: 'rgba(122, 199, 196, 0.8)',
            borderColor: '#7ac7c4',
            pointBackgroundColor: '#7ac7c4',
            pointHoverBackgroundColor: '#ffffff',
        }]
    },

    // Configuration options go here
    options: {
      legend: {
        labels: {
          fontSize: 15,
          fontColor: '#ffffff',
        }
      },
      scales: {
        yAxes: [{
          gridLines: {
              display: false,
              drawBorder: false,
          },
          ticks: {
            min: 4,
            max: 10,
            fontColor: '#ffffff',
          }
        }],
        xAxes: [{
          gridLines: {
              display: false,
              drawBorder: false,
          },
          ticks: {
            fontColor: '#ffffff',
          },
        }]
      }
    }
});




peligro.addEventListener("mouseover", fPeligro);
cuidado.addEventListener("mouseover", fCuidado);
exito.addEventListener("mouseover", fExito);

function fPeligro() {
  var card = document.getElementById('card');
  var card_bar = document.getElementById('card_bar');

  card.classList.remove("bg-success");
  card.classList.remove("bg-warning");
  card.classList.add("bg-danger");

  card_bar.classList.remove("border-success");
  card_bar.classList.remove("border-warning");
  card_bar.classList.add("border-danger");

  client_number_small.classList.remove("text-success");
  client_number_small.classList.remove("text-dark");
  client_number_small.classList.add("text-danger");

  card_bar_client.style.width = data_peligro[2]*10 + "%";
  client_number.innerHTML = data_peligro[2];
  client_number_small.innerHTML = "- 0.2%";

  window.chart.data.datasets[1].data = data_peligro;
  window.chart.update();
}

function fCuidado(chart) {
  var card = document.getElementById('card');
  var card_bar = document.getElementById('card_bar');

  card.classList.remove("bg-success");
  card.classList.remove("bg-danger");
  card.classList.add("bg-warning");

  card_bar.classList.remove("border-success");
  card_bar.classList.remove("border-danger");
  card_bar.classList.add("border-warning");

  client_number_small.classList.remove("text-success");
  client_number_small.classList.remove("text-danger");
  client_number_small.classList.add("text-dark");

  card_bar_client.style.width = data_cuidado[2]*10 + "%";
  client_number.innerHTML = data_cuidado[2];
  client_number_small.innerHTML = "= 0%";

  window.chart.data.datasets[1].data = data_cuidado;
  window.chart.update();
}

function fExito() {
  var card = document.getElementById('card');
  var card_bar = document.getElementById('card_bar');

  card.classList.remove("bg-danger");
  card.classList.remove("bg-warning");
  card.classList.add("bg-success");

  card_bar.classList.remove("border-danger");
  card_bar.classList.remove("border-warning");
  card_bar.classList.add("border-success");

  client_number_small.classList.remove("text-danger");
  client_number_small.classList.remove("text-dark");
  client_number_small.classList.add("text-success");

  card_bar_client.style.width = data_exito[2]*10 + "%";
  client_number.innerHTML = data_exito[2];
  client_number_small.innerHTML = "= 1.2%";

  window.chart.data.datasets[1].data = data_exito;
  window.chart.update();
}

fPeligro();
