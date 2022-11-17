// Assign the specification to a local variable vlSpec.
var vlSpec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "lab 8",
    "data": {
      "url": "https://raw.githubusercontent.com/bcviscourse/datasets/master/lab9-covidtracking.csv"
    },
    "vconcat":[
      {
        "width": 850,
        "height": 200,
      "mark": {"type": "point"},
      "encoding": {
        "x": {
          "field": "positive",
          "type": "quantitative",
          "scale": {"zero": false}
        },
        "y": {
          "field": "death",
          "type": "quantitative",
          "scale": {"zero": false}
        },
        "color": {
          "field": "dataQualityGrade",
          "type": "nominal"
        },
        "tooltip": 
          {"field": "state", "type": "nominal"}
      },
      "params": [{
      "name":"brush",
      "select": {"type": "interval"}
  }],
    },
    {
      "repeat": ["hospitalizedCumulative", "recovered"],
      "spec": {
        "width": 850,
        "height": 100,
        "mark": "bar",
        "encoding": {
          "x": {"field": "state", "type": "nominal", "axis": {"labelAngle": 0}},
          "y": {"type": "quantitative", "field": {"repeat": "repeat"}}
        }
      },
      "transform": [{
    "filter":{"param":"brush"}
  }]
    }
    ],
    "config": {
      "concat": {
        "columns":1}
      }
  };

  // Embed the visualization in the container with id `vis`
  vegaEmbed('#vis', vlSpec);