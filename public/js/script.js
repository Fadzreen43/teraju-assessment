// PIE CHART GENDER
fetch("sample-user.json").then(
  res => {
    res.json().then(
      data => {
        console.log(data);
        if (data.length > 0) {
          const charts = document.querySelectorAll(".chartPie1");

          let maleValue = 0
          let femaleValue = 0

          for(const dataUser of data){
            console.log(dataUser.gender)
            if(dataUser.gender == "M"){
              maleValue =  maleValue + 1
            }else{
              femaleValue = femaleValue + 1
            }
          }
              charts.forEach(function (chart) {
                var ctx = chart.getContext("2d");
                var myChart = new Chart(ctx, {
                  type: "pie",
                  data: {
                    labels: ["Male", "Female",],
                    datasets: [
                      {
                        // label: ["# of Male","# of Female"],
                        data: [maleValue, femaleValue],
                        backgroundColor: [
                          "rgba(255, 99, 132, 0.2)",
                          "rgba(54, 162, 235, 0.2)",
                          "rgba(255, 206, 86, 0.2)",
                          "rgba(75, 192, 192, 0.2)",
                          "rgba(153, 102, 255, 0.2)",
                          "rgba(255, 159, 64, 0.2)",
                        ],
                        borderColor: [
                          "rgba(255, 99, 132, 1)",
                          "rgba(54, 162, 235, 1)",
                          "rgba(255, 206, 86, 1)",
                          "rgba(75, 192, 192, 1)",
                          "rgba(153, 102, 255, 1)",
                          "rgba(255, 159, 64, 1)",
                        ],
                        borderWidth: 1,
                      },
                    ],
                  },
                  options: {
                    scales: {
                      y: {
                        beginAtZero: true,
                      },
                    },
                  },
                });
              });


        }
      }
    )
  }
)

// PIE CHART RACE
fetch("sample-user.json").then(
  res => {
    res.json().then(
      data => {
        console.log(data);
        if (data.length > 0) {
          const charts = document.querySelectorAll(".chartPie2");

          let malayValue = 0
          let chineseValue = 0
          let indianValue = 0

          for(const dataUser of data){
            console.log(dataUser.race)
            if(dataUser.race == "Melayu"){
              malayValue =  malayValue + 1
            }else if(dataUser.race == "Chinese"){
              chineseValue = chineseValue + 1
            }else{
              indianValue = indianValue + 1
            }
          }
              charts.forEach(function (chart) {
                var ctx = chart.getContext("2d");
                var myChart = new Chart(ctx, {
                  type: "pie",
                  data: {
                    labels: ["Malay", "Chinese","Indian"],
                    datasets: [
                      {
                        // label: ["# of Male","# of Female"],
                        data: [malayValue, chineseValue,indianValue],
                        backgroundColor: [
                          "rgba(255, 99, 132, 0.2)",
                          "rgba(54, 162, 235, 0.2)",
                          "rgba(255, 206, 86, 0.2)",
                          "rgba(75, 192, 192, 0.2)",
                          "rgba(153, 102, 255, 0.2)",
                          "rgba(255, 159, 64, 0.2)",
                        ],
                        borderColor: [
                          "rgba(255, 99, 132, 1)",
                          "rgba(54, 162, 235, 1)",
                          "rgba(255, 206, 86, 1)",
                          "rgba(75, 192, 192, 1)",
                          "rgba(153, 102, 255, 1)",
                          "rgba(255, 159, 64, 1)",
                        ],
                        borderWidth: 1,
                      },
                    ],
                  },
                  options: {
                    scales: {
                      y: {
                        beginAtZero: true,
                      },
                    },
                  },
                });
              });
        }
      }
    )
  }
)


// PIE CHART AGE
fetch("sample-user.json").then(
  res => {
    res.json().then(
      data => {
        console.log(data);
        if (data.length > 0) {
          const charts = document.querySelectorAll(".chartPie3");

          let child = 0
          let young = 0
          let middle = 0
          let old = 0

          for(const dataUser of data){
            console.log(dataUser.race)
            if(dataUser.age >= 0 && 16 >= dataUser.age){
              child =  child + 1
            }else if(dataUser.age >= 17 && 30 >= dataUser.age){
              young = young + 1
            }else if(dataUser.age >= 31 && 45 >= dataUser.age){
              middle = middle + 1
            }else{
              old = old + 1
            }
          }
              charts.forEach(function (chart) {
                var ctx = chart.getContext("2d");
                var myChart = new Chart(ctx, {
                  type: "pie",
                  data: {
                    labels: ["Child", "Young Adult","Middle-aged Adult","Old-aged Adults"],
                    datasets: [
                      {
                        // label: ["# of Male","# of Female"],
                        data: [child, young,middle,old],
                        backgroundColor: [
                          "rgba(255, 99, 132, 0.2)",
                          "rgba(54, 162, 235, 0.2)",
                          "rgba(255, 206, 86, 0.2)",
                          "rgba(75, 192, 192, 0.2)",
                          "rgba(153, 102, 255, 0.2)",
                          "rgba(255, 159, 64, 0.2)",
                        ],
                        borderColor: [
                          "rgba(255, 99, 132, 1)",
                          "rgba(54, 162, 235, 1)",
                          "rgba(255, 206, 86, 1)",
                          "rgba(75, 192, 192, 1)",
                          "rgba(153, 102, 255, 1)",
                          "rgba(255, 159, 64, 1)",
                        ],
                        borderWidth: 1,
                      },
                    ],
                  },
                  options: {
                    scales: {
                      y: {
                        beginAtZero: true,
                      },
                    },
                  },
                });
              });
        }
      }
    )
  }
)

// -------------------- CHART BAR --------------------

// CHART RACE
fetch("sample-user.json").then(
  res => {
    res.json().then(
      data => {
        console.log(data);
        if (data.length > 0) {
          const charts = document.querySelectorAll(".chartBar2");

          let malayValue = 0
          let chineseValue = 0
          let indianValue = 0

          for(const dataUser of data){
            console.log(dataUser.race)
            if(dataUser.race == "Melayu"){
              malayValue =  malayValue + 1
            }else if(dataUser.race == "Chinese"){
              chineseValue = chineseValue + 1
            }else{
              indianValue = indianValue + 1
            }
          }

              charts.forEach(function (chart) {
                var ctx = chart.getContext("2d");
                var myChart = new Chart(ctx, {
                  type: "bar",
                  data: {
                    labels: ["# of User Race Bar Chart"],
                    datasets: [
                      {
                        label: ["Melayu"],
                        data: [malayValue],
                        backgroundColor: [
                          "rgba(255, 99, 132, 0.2)",
                        ],
                        borderColor: [
                          "rgba(255, 99, 132, 1)",
                        ],
                        borderWidth: 1,
                      },
                      {
                        label: ["Chinese"],
                        data: [chineseValue],
                        backgroundColor: [
                          "rgba(54, 162, 235, 0.2)",
                        ],
                        borderColor: [
                          "rgba(54, 162, 235, 1)",
                        ],
                        borderWidth: 1,
                      },
                      {
                        label: ["Indian"],
                        data: [indianValue],
                        backgroundColor: [
                          "rgba(255, 206, 86, 0.2)",
                        ],
                        borderColor: [
                          "rgba(255, 206, 86, 1)",
                        ],
                        borderWidth: 1,
                      },
                    ],
                  },
                  options: {
                    scales: {
                      y: {
                        beginAtZero: true,
                      },
                    },
                  },
                });
              });


        }
      }
    )
  }
)

// BAR CHART GENDER
fetch("sample-user.json").then(
  res => {
    res.json().then(
      data => {
        console.log(data);
        if (data.length > 0) {
          const charts = document.querySelectorAll(".chartBar1");

          let maleValue = 0
          let femaleValue = 0

          for(const dataUser of data){
            console.log(dataUser.gender)
            if(dataUser.gender == "M"){
              maleValue =  maleValue + 1
            }else{
              femaleValue = femaleValue + 1
            }
          }
              charts.forEach(function (chart) {
                var ctx = chart.getContext("2d");
                var myChart = new Chart(ctx, {
                  type: "bar",
                  data: {
                    labels: ["# of User Gender Bar Chart"],
                    datasets: [
                      {
                        label: ["Male"],
                        data: [maleValue],
                        backgroundColor: [
                          "rgba(255, 99, 132, 0.2)",
                        ],
                        borderColor: [
                          "rgba(255, 99, 132, 1)",
                        ],
                        borderWidth: 1,
                      },
                      {
                        label: ["Female"],
                        data: [femaleValue],
                        backgroundColor: [
                          "rgba(54, 162, 235, 0.2)",
                        ],
                        borderColor: [
                          "rgba(54, 162, 235, 1)",
                        ],
                        borderWidth: 1,
                      }
                    ],
                  },
                  options: {
                    scales: {
                      y: {
                        beginAtZero: true,
                      },
                    },
                  },
                });
              });


        }
      }
    )
  }
)

// BAR CHART RACE
fetch("sample-user.json").then(
  res => {
    res.json().then(
      data => {
        console.log(data);
        if (data.length > 0) {
          const charts = document.querySelectorAll(".chartBar3");

          let child = 0
          let young = 0
          let middle = 0
          let old = 0

          for(const dataUser of data){
            console.log(dataUser.race)
            if(dataUser.age >= 0 && 16 >= dataUser.age){
              child =  child + 1
            }else if(dataUser.age >= 17 && 30 >= dataUser.age){
              young = young + 1
            }else if(dataUser.age >= 31 && 45 >= dataUser.age){
              middle = middle + 1
            }else{
              old = old + 1
            }
          }
              charts.forEach(function (chart) {
                var ctx = chart.getContext("2d");
                var myChart = new Chart(ctx, {
                  type: "bar",
                  data: {
                    labels: ["# of User Group Aged Bar Chart"],
                    datasets: [
                      {
                        label: ["Child"],
                        data: [child],
                        backgroundColor: [
                          "rgba(255, 99, 132, 0.2)",
                        ],
                        borderColor: [
                          "rgba(255, 99, 132, 1)",
                        ],
                        borderWidth: 1,
                      },
                      {
                        label: ["Young Adult"],
                        data: [young],
                        backgroundColor: [
                          "rgba(54, 162, 235, 0.2)",
                        ],
                        borderColor: [
                          "rgba(54, 162, 235, 1)",
                        ],
                        borderWidth: 1,
                      },
                      {
                        label: ["Middle-aged Adult"],
                        data: [middle],
                        backgroundColor: [
                          
                          "rgba(255, 206, 86, 0.2)",
                          
                        ],
                        borderColor: [
                          "rgba(255, 206, 86, 0.2)",
                        ],
                        borderWidth: 1,
                      },
                      {
                        label: ["Old-Aged Adult"],
                        data: [old],
                        backgroundColor: [
                          
                          "rgba(75, 192, 192, 0.2)",
                        ],
                        borderColor: [
                          "rgba(75, 192, 192, 0.2)",
                        ],
                        borderWidth: 1,
                      }
                    ],
                  },
                  options: {
                    scales: {
                      y: {
                        beginAtZero: true,
                      },
                    },
                  },
                });
              });


        }
      }
    )
  }
)


$(function () {
  $('.chartPie2').hide();
  $('.chartPie3').hide();

  $('#select-pie').on("change",function () {
    const v = $(this).val()
  
    switch(v) {
      case "0":
        $('.chartPie2').hide();
        $('.chartPie3').hide();
        $('.chartPie1').show();
        break;
      case "1":
        $('.chartPie1').hide();
        $('.chartPie3').hide();
        $('.chartPie2').show();
        break;
      case "2":
        $('.chartPie1').hide();
        $('.chartPie2').hide();
        $('.chartPie3').show();
        break;
      }

  }).val("0");
});

$(function () {
  $('.chartBar2').hide();
  $('.chartBar3').hide();

  $('#select-bar').on("change",function () {
    const v = $(this).val()
  
    switch(v) {
      case "0":
        $('.chartBar2').hide();
        $('.chartBar3').hide();
        $('.chartBar1').show();
        break;
      case "1":
        $('.chartBar1').hide();
        $('.chartBar3').hide();
        $('.chartBar2').show();
        break;
      case "2":
        $('.chartBar1').hide();
        $('.chartBar2').hide();
        $('.chartBar3').show();
        break;
      }

  }).val("0");
});

$(document).ready(function () {
  $(".data-table").each(function (_, table) {
    $(table).DataTable();
  });
});
