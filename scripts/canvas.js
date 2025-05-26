
// --- CONSTANTS ---
const RADIUS = 15;
const GRAPH = d3.select("#graph");
const HEIGHT = 800;
const WIDTH = 600;
// ---

// --- DATA STRCUTURES ---
// A node is {id: int, colour: colour, degree: int, label: String, x: double, y: double}
// Nodes hold a list of nodes
var nodes = [];
// Edges hold {source: node, target: node}
var edges = [];
// ---

// --- VARIABLES ---
let sourceNode = null;

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

    updateGraph();
  });
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

  if (!clickedNode) {
    sourceNode = null;
    return;
  }

  if (sourceNode === null) {
    sourceNode = clickedNode;
  } else if (sourceNode.id !== clickedNode.id) {
    edges.push({
      source: sourceNode,
      target: clickedNode
    });

    sourceNode.degree++;
    sourceNode.label = sourceNode.degree;
    clickedNode.degree++;
    clickedNode.label = clickedNode.degree;

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
    // updates the degree in O(n) time--performance fix maybe? 
    edges.forEach((edge, index) => {
      if (edge.source.id === nodeToBeDeleted.id) {
        edge.target.degree--;
        edge.target.label = edge.target.degree;
      } else if (edge.target.id === nodeToBeDeleted.id) {
        edge.source.degree--;
        edge.source.label = edge.source.degree;
      }
    });
    
    nodes.splice(index, 1);

    // Find out which edges are connected to the node that is being deleted using an arbitary function 
    edges = edges.filter(edge => {
      return edge.source.id !== nodeToBeDeleted.id && edge.target.id !== nodeToBeDeleted.id;
    });

    updateGraph();
  }
}

function addNode(event) {
  // Getting the properties
  const [x, y] = d3.pointer(event); // relative to the SVG graph coordinates
  const id = nextId++
let degree = 0;
  let colour = getNextColour();
  let textLabel = degree;


  nodes.push({
    id: id,
    colour: colour,
    label: textLabel,
    degree: degree,
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
        .attr('cy', d => d.y)
        .call(drag),

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
      .attr('stroke-width', 2)
      .attr('stroke-opacity', 0.7)
      .attr('x1', d => {
          const dx = d.target.x - d.source.x;
          const dy = d.target.y - d.source.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          return d.source.x + (dx * RADIUS) / dist;
        })
      .attr('y1', d => {
        const dx = d.target.x - d.source.x;
        const dy = d.target.y - d.source.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        return d.source.y + (dy * RADIUS) / dist;
      })
      .attr('x2', d => {
        const dx = d.source.x - d.target.x;
        const dy = d.source.y - d.target.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        return d.target.x + (dx * RADIUS) / dist
      })
      .attr('y2', d => {
        const dx = d.source.x - d.target.x;
        const dy = d.source.y - d.target.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        return d.target.y + (dy * RADIUS) / dist
      }),

    update => update
      .attr('x1', d => {
          const dx = d.target.x - d.source.x;
          const dy = d.target.y - d.source.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          return d.source.x + (dx * RADIUS) / dist;
        })
      .attr('y1', d => {
        const dx = d.target.x - d.source.x;
        const dy = d.target.y - d.source.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        return d.source.y + (dy * RADIUS) / dist;
      })
      .attr('x2', d => {
        const dx = d.source.x - d.target.x;
        const dy = d.source.y - d.target.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        return d.target.x + (dx * RADIUS) / dist
      })
      .attr('y2', d => {
        const dx = d.source.x - d.target.x;
        const dy = d.source.y - d.target.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        return d.target.y + (dy * RADIUS) / dist
      }),

    exit => exit.remove()
  );
}