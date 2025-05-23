const RADIUS = 25;

const graph = d3.select("#graph");

var nodes = [];
let nextId = 0; 

graph.on("click", 
  (event) => {
    if (drawingMode === 'draw') {
      addNode(event);
    } else if (drawingMode === 'delete') {
      deleteNode(event);
    }
  });

function deleteNode(event) {
  // https://stackoverflow.com/questions/16792841/detect-if-user-clicks-inside-a-circle
  const [x,y] = d3.pointer(event);
  const radius = RADIUS;
  const index = nodes.findIndex((node) => {
    return Math.sqrt((node.x - x) * (node.x - x)  + (node.y - y) * (node.y - y)) <= radius;
  });

  if (index >= 0) {
    nodes.splice(index, 1);
    updateGraph();
  }
}

// https://d3js.org/d3-drag#drag-events
const drag = d3.drag().on('drag', function(event, d) {
  // update the event's x and y in the array
  d.x = event.x;
  d.y = event.y;

  // change the position of the node
  d3.select(this)
    .attr('cx', event.x)
    .attr('cy', event.y);

  updateGraph();
  });

function addNode(event) {
  // Getting the properties
  const [x, y] = d3.pointer(event); // relative to the SVG graph coordinates
  const id = nextId++
  let randomColour = getNextColour();
  let textLabel = id;

  nodes.push({
    id: id,
    colour: randomColour,
    label: textLabel,
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
        .attr('r', RADIUS)
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

  graph.selectAll('text.node-label')
    .data(nodes, d => d.id)
    .join( 
      enter => enter.append('text')
        .attr('class', 'node-label')
        .attr("text-anchor", "middle")
        .attr("fill", "black")
        .attr('dy', '0.3em')
        .attr('x', d => d.x)
        .attr('y', d => d.y)
        .text(d => d.label)
        .call(drag),

      update => update.text(d => d.label)
        .attr('x' , d => d.x)
        .attr('y', d => d.y),

      exit => exit.remove()
    );
}


