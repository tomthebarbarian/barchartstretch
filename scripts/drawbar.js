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


// Constants
const barChartDiv =  "#mainbar"
const allBars = '#bars'
const singlebar = [1,2,3,4,5]

const longArray = [88,55,11, 4,6,3,8,7,34,49]

const optionsExample = {
  colour: 'red',
  // Bar label
  labcolour: 'blue',
  // barlab pos
  labPos: 'center',// this should be the llabel position
  // Barchart margins

  spacing: '3%',
  // main title
  title: 'This is the graph main title',
  titleVis: true, // toggles if there's a main title at all
  // shoudl affect mainbar and yaxis pos top

  //Xlabel
  xlab: 'this is x',
  //y label
  ylab: 'this is y',




}


// event listeners aways need an own function wrapping the
// other processes
function changeText(selector){
  let tempstore = $(selector).text()
  setTimeout(() => {
    $(selector).text(tempstore)}
    , 2000)
  //$(selector).text("I've changed the text, dw it'll return in 2")
  $(selector).text("We're now gonna create the barchart")
  drawBarChart(longArray, optionsExample,  '#mainbar')

  // Testing for height changer
  /*
  let maxheight = parseInt($('li').css('max-height').substring(0,2))
  let height = (7 / 25) * (maxheight)
  $(selector).text(`height: ${height}%`)
  */
}
// Dom manipulation.




// Do on event, submit? Probably wanna make a function first.

$(document).ready(() => {
  $("#btn1").click(() => {
    changeText('#tbltitle')
    //removeBars(allBars)

//    setTimeout(() => {
//      addBars(barChartDiv)
//    }, 1000)
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
  $(section + " #bars").remove();
}

// function addBars adds an emptyunordered list to section
// with id = 'bars'
const addBars = (section) => {
  $(section).append(`
  <ul id = 'bars'></ul>
  <li id = barplacehold></li>
  `)
}

//${$('#mainbar').css("top")}

//Set maxbar value, take it out, then set all other bars' value relative to max
const maxBarValue = () => {
  let percofmax = 0;
  let deflistelem = `#array-elem-${currlistelem} {\n
    width: ${percofmax}%;
  }`
  percofmax = value / maxvalue
}

// function addBarElem adds a list item to a list section
// also at that time, adds a variable height value
// based on the value relative to max val
const addBarElem = (section, dataArray, width, arrayMax) => {

  for (let i = 0; i < dataArray.length; i++){
    $(section).append(`
    <li id = 'currbar${i}'>${dataArray[i]}</li>
    `)

    // Set this bar's height relative to max
    let maxheight = parseInt($('li').css('max-height').substring(0,2))
    let height = (dataArray[i] / arrayMax) * (maxheight)
    //console.log(`#currbar${i}`)
    //console.log(`${height}%`)
    $(`#currbar${i}`).css(`height`, `${height}%`)
    // set width in list
  }
  // set all bar widths of list items
  $(section+' li').css(`width`, `${width}%`)
}

// Get max of elem list
const getArrayMax = (data) => {
  let maxvalue
  for (let elem of data) {
    if (maxvalue === undefined){
      maxvalue = elem
    } else if (elem > maxvalue){
      maxvalue = elem
    }
  }
  return maxvalue
}
// mergeSort function takes an unsorted numeric array and sorts it
// order of smallest to largest
const mergeSort = (workarry) => {
  if (workarry.length <= 1){
    return workarry
  } else {
    //console.log('inpivot')
    let pivotinx = Math.floor(workarry.length / 2)

    let pivotval = workarry[pivotinx]
    //console.log(pivotval)

    let leftarr = workarry.slice(0, pivotinx)

    //console.log('leftarr')
    //console.log(leftarr)
    let rightarr = workarry.slice(pivotinx+1,workarry.length)
    //console.log('rightarr')
    //console.log(rightarr)

    let leftans = []
    let rightans = []

    for (let elem of leftarr){
      if (elem < pivotval){
        leftans.push(elem)
      } else {
        rightans.push(elem)
      }
    }
    for (let elem of rightarr){
      if (elem < pivotval){
        leftans.push(elem)
      } else {
        rightans.push(elem)
      }
    }

    let ans = mergeSort(leftans).concat([pivotval]).concat(mergeSort(rightans))
    return ans
  }
}

// function yTicks takes the array of values and adds line
// represented by borders of list elems
// Lines should be evenly spaced according to bar heights
const yTicks = (values) => {

}

// drawBarChart takes an array of numbers(data), a options object(options)
// and a selector str(element) and adds a bar graph
// showing the values of data into element

// arrayOf num, options obj, str -> none
// modifies a js element
const drawBarChart = (data,  options,  element) => {

  // This is the ordered array, but it's not necessary
  let ordDat
  let max

  //ordDat = mergeSort(data)

  if (ordDat){
    max = ordDat[ordDat.length-1]
  } else {
  // just n find max
  //could just go through array for elems
    max = getArrayMax(data)
  }



  // height calculator
  let listlen = data.length

  // This is about how high the bars should be
  removeBars(element)
  addBars(element)
  let barWidth = (100 +($("li").css("margin") * listlen + 1)) / listlen

  if (ordDat) {
  // id bars is set by addbars
  // wait for removeBars?
  /*
  setTimeout(() => {
    addBarElem('#bars', ordDat, barWidth, max)
    }
    , 2000)
*/
  //don't wait
  addBarElem('#bars', ordDat, barWidth, max)
  } else {
    addBarElem('#bars', data, barWidth, max)
  }
  if (Object.keys(options).length> 0) {
    const listItem = '#bars li'

    // bar colour
    $(listItem).css('background-color', options.colour)
    //$(listitem).css('background-color', options.labcolour)

    // label colour
    $(listItem).css('color', options.labcolour)

    // Bar margin
    $(listItem).css("margin", options.spacing)
    // also sets the max height
    $(listItem).css("max-height", (100 - options.spacing*2).toString(10)+'%')

  }
}
