/*
Display Requirements
Bar Chart
Display a list of single values, horizontally as a bar chart

Numerical values should also be displayed inside of the bar
The position of values should be customizable too:
Top, centre or bottom of the bar.
Bar sizes should be dependent on the data that gets passed in

Bar width should be dependent on the total amount of values passed.
Bar height should be dependent on the values of the data.
Bar properties that should be customizable:

Bar Colour
Label Colour
Bar spacing (space between bars)
Bar Chart axes
X-axis should show labels for each data value

Think about how you would need to structure your data to associate a label to each value
Y-axis should show ticks at certain values

Think about where you would configure these values. Should they be part of the data or the options to the bar chart function.
The title of the bar chart should be able to be set and shown dynamically

The title of the bar chart should also be customizable:

Font Size
Font Colour
Multiple Value (Stacked) bar charts
Allow the user to pass multiple values for each bar.

Think about how you would need to structure this data compared to a single bar chart.
This should also support all the features of the single bar chart, including

Customizable bar colours, per value
Customizable label colours
*/

//Always check to see if the document is ready

// event listeners aways need an own function wrapping the
// other processes
function changeText(selector){
  let tempstore = $(selector).text()
  setTimeout(() => {
    $(selector).text(tempstore)}
    , 2000)
  $(selector).text("I've changed the text, dw it'll return in 2")

}
// Dom manipulation.


// Constants
const barChartDiv =  "#mainbar"
const allBars = '#bars'
const singlebar = [1,2,3,4,5]

// Do on event, submit? Probably wanna make a function first.

$(document).ready(() => {
  $("#btn1").click(() => {
    //changeText('.maxbar')
    removeBars(allBars)
    setTimeout(() => {
      addBars(barChartDiv)
    }, 1000)
  })
  /*$("#btn1").click(function(){
    $('.maxbar').text("I've changed the text")
    //setTimeout($('.maxbar').text("Why so quick"), 5000)
  })*/
  //new fn
});



//Horizontally

  // jQuery methods go here...
// function removebars removes all elements
// from the input section
const removeBars = (section) => {
  $(section).remove();
}

// function addBars adds an emptyunordered list to section
// with id = 'bars'
const addBars = (section) => {
  $(section).append(`
  <ul id = 'bars'> This is the main graph section </ul>
  `)
}


const genlistelems = (data) => {
  let maxvalue = Math.max(data)
  let currvalue = 0

  //Set maxbar value, take it out, then set all other bars' value relative to max

  for (let elem of data){


  }
  let percofmax = 0;
  let deflistelem = `#array-elem-${currlistelem} {\n
    width: ${percofmax}%;
  }`
  percofmax = value / maxvalue
}

// Default
const drawBarChart = (data,  options = {},  element = section) => {
  if (options) {
    for (let elem of options){
      bars.options = options[elem]
    }

  }
};


