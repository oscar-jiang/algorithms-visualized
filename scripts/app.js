const graph = d3.select("#graph");
const nodes = [];
let nextId = 0; 

// https://d3js.org/d3-drag#drag-events
const drag = d3.drag().on('drag', function(event, d) {
  // update the event's x and y in the array
  d.x = event.x;
  d.y = event.y;

  // change the position of the node
  d3.select(this)
    .attr('cx', event.x)
    .attr('cy', event.y);
  });

graph.on("click", 
  (event) => {
    addNode(event);
  });


function addNode(event) {
  // Getting the properties
  const [x, y] = d3.pointer(event); // relative to the SVG graph coordinates
  let randomColour = getNextColour();

  nodes.push({
    id: nextId++,
    colour: randomColour,
    x: x,
    y: y
  });

  updateGraph(); 
}

// https://d3js.org/d3-selection/joining#selection_data
function updateGraph() {
  graph.selectAll('circle.node')
    .data(nodes, d => d.id)
    .join(
      enter => enter.append('circle')
        .attr('class', 'node')
        .attr('r', 25)
        .attr('fill', '#FFFFFF')
        .attr('fill-opacity', 0.7)
        .attr('stroke', d => d.colour)
        .attr('stroke-width', 2)
        .attr('cx', d => d.x)
        .attr('cy', d => d.y)
        .call(drag),

      update => update
        .attr('cx', d => d.x)
        .attr('cy', d => d.y),

      exit => exit.remove()
    );
}


