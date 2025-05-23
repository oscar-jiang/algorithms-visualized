
// --- CONSTANTS ---
const RADIUS = 25;
const GRAPH = d3.select("#graph");
// ---

// --- DATA STRCUTURES ---
// A node is {id: int, colour: colour, label: String, x: double, y: double}
// Nodes hold a list of nodes
var nodes = [];

// Edges hold {source: node, destination: node}
var edges = []; 
// ---

// --- VARIABLES ---
let sourceNode = null;

let nextId = 0;
// --

// FUNCTIONS
GRAPH.on("click", 
  (event) => {
    if (drawingMode === 'draw') {
      addNode(event);
    } else if (drawingMode === 'delete') {
      deleteNode(event);
    } else if (drawingMode === 'link') {
      createEdge(event); 
    }
  });

function createEdge(event) {
  const [x,y] = d3.pointer(event);
  const clickedNode = nodes.find((node) => {
    return Math.sqrt((node.x - x) * (node.x - x)  + (node.y - y) * (node.y - y)) <= RADIUS;
  });

  if (sourceNode === null) {
    sourceNode = clickedNode;
  } else if (sourceNode.id !== clickedNode.id) {
    edges.push({
      source: sourceNode,
      destination: clickedNode
    });
    updateGraph();

    sourceNode = null;
  } else {
    sourceNode = null;
  }
}

function deleteNode(event) {
  // https://stackoverflow.com/questions/16792841/detect-if-user-clicks-inside-a-circle
  const [x,y] = d3.pointer(event);
  const index = nodes.findIndex((node) => {
    return Math.sqrt((node.x - x) * (node.x - x)  + (node.y - y) * (node.y - y)) <= RADIUS;
  });
  const nodeToBeDeleted = nodes[index];

  if (index >= 0) {
    nodes.splice(index, 1);

    edges = edges.filter(edge => {
      return edge.source.id !== nodeToBeDeleted.id && edge.destination.id !== nodeToBeDeleted.id;
    });

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
  let colour = getNextColour();
  let textLabel = id;

  nodes.push({
    id: id,
    colour: colour,
    label: textLabel,
    x: x,
    y: y
  });

  updateGraph(); 
}

// https://d3js.org/d3-selection/joining#selection_data
function updateGraph() {
  updateNodes();
  updateEdges();
  updateNodeLabels();
}


function updateNodes() {
  GRAPH.selectAll('circle.node')
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
}

function updateNodeLabels() {
  GRAPH.selectAll('text.node-label')
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

function updateEdges() {
  GRAPH.selectAll('line.node-edge')
  .data(edges)
  .join(
    enter => enter.append("line")
      .attr('class', 'node-edge')
      .attr('stroke', '#000000')
      .attr('stroke-width', 3)
      .attr('x1', d => {
          const dx = d.destination.x - d.source.x;
          const dy = d.destination.y - d.source.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          return d.source.x + (dx * RADIUS) / dist;
        })
      .attr('y1', d => {
        const dx = d.destination.x - d.source.x;
        const dy = d.destination.y - d.source.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        return d.source.y + (dy * RADIUS) / dist;
      })
      .attr('x2', d => {
        const dx = d.source.x - d.destination.x;
        const dy = d.source.y - d.destination.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        return d.destination.x + (dx * RADIUS) / dist
      })
      .attr('y2', d => {
        const dx = d.source.x - d.destination.x;
        const dy = d.source.y - d.destination.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        return d.destination.y + (dy * RADIUS) / dist
      }),

    update => update
      .attr('x1', d => {
          const dx = d.destination.x - d.source.x;
          const dy = d.destination.y - d.source.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          return d.source.x + (dx * RADIUS) / dist;
        })
      .attr('y1', d => {
        const dx = d.destination.x - d.source.x;
        const dy = d.destination.y - d.source.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        return d.source.y + (dy * RADIUS) / dist;
      })
      .attr('x2', d => {
        const dx = d.source.x - d.destination.x;
        const dy = d.source.y - d.destination.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        return d.destination.x + (dx * RADIUS) / dist
      })
      .attr('y2', d => {
        const dx = d.source.x - d.destination.x;
        const dy = d.source.y - d.destination.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        return d.destination.y + (dy * RADIUS) / dist
      }),

    exit => exit.remove()
  );
}