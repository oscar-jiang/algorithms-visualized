
// --- CONSTANTS ---
const RADIUS = 15;
const GRAPH = d3.select("#graph");
const HEIGHT = 800;
const WIDTH = 600;
// ---

// --- DATA STRCUTURES ---
// A node is {
//     "id": int,
//     "colour": "#8679F3" -- hex colour,
//     "label": int,
//     "requiredDegree": int;
//     "remainingDegree": int;
//     "degree": int,
//     "x": 57.5,
//     "y": 51.125,
//     "wellConnected": boolean
// }
// Nodes hold a list of nodes
var nodes = [];
// Edges hold {source: node, target: node}
var edges = [];
// ---

// --- VARIABLES ---
let sourceNode = null;
var isLevelComplete = false;
var currentLevel = 1;
var drawingMode = 'link';

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

// init
loadGraph(levelFive());

GRAPH.on("click", 
  (event) => {
    if (drawingMode === 'link') {
      createEdge(event); 
    }
  });
// --


// FUNCTIONS
function loadGraph(level) {
  nodes = level.nodes;
  currentLevel = level.level;
  isLevelComplete = false;
  updateGraph(); 
}

function createEdge(event) {
  const [x,y] = d3.pointer(event);
  const clickedNode = nodes.find((node) => {
    return Math.sqrt((node.x - x) * (node.x - x)  + (node.y - y) * (node.y - y)) <= RADIUS;
  });

  if (!clickedNode) {
    sourceNode = null;
    return;
  }

  if (clickedNode.remainingDegree === 0) {
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
    sourceNode.remainingDegree--;
    sourceNode.label = sourceNode.remainingDegree;
    clickedNode.degree++;
    clickedNode.remainingDegree--;
    clickedNode.label = clickedNode.remainingDegree;

    if (sourceNode.degree === sourceNode.requiredDegree) {
      sourceNode.wellConnected = true;
    }
    if (clickedNode.degree === clickedNode.requiredDegree) {
      clickedNode.wellConnected = true;
    }

    updateGraph();
    isLevelComplete = isAllWellConnected();

    if (isLevelComplete) {
      alert("Level complete!");
      isLevelComplete = false;
    }

    sourceNode = null;
  } else {
    sourceNode = null;
  }
}

function isAllWellConnected() {
  return nodes.every(node => node.wellConnected);
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
  // uses trig to determine that the edge starts and ends at the edge of the circle
  GRAPH.selectAll('line.node-edge')
  .data(edges)
  .join(
    enter => enter.append("line")
      .attr('class', 'node-edge')
      .attr('stroke', '#000000')
      .attr('stroke-width', 3)
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