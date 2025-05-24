const levelOne = function() {
  return {
    level: 1,
    degreeSequence: [1, 2, 1],
    nodes: [
      { id: 0, colour: "#8679F3", label: "1", requiredDegree: 1, remainingDegree: 1, degree: 0, x: 200, y: 170, wellConnected: false },
      { id: 1, colour: "#E579F3", label: "2", requiredDegree: 2, remainingDegree: 2, degree: 0, x: 250, y: 170, wellConnected: false },
      { id: 2, colour: "#79F3C1", label: "1", requiredDegree: 1, remainingDegree: 1, degree: 0, x: 300, y: 170, wellConnected: false }
    ]
  };
};

const levelTwo = function() {
  return {
    level: 2,
    degreeSequence: [2, 2, 2, 2],
    nodes: [
      { id: 0, colour: "#8679F3", label: "2", requiredDegree: 2, remainingDegree: 2, degree: 0, x: 200, y: 150, wellConnected: false },
      { id: 1, colour: "#E579F3", label: "2", requiredDegree: 2, remainingDegree: 2, degree: 0, x: 250, y: 100, wellConnected: false },
      { id: 2, colour: "#79F3C1", label: "2", requiredDegree: 2, remainingDegree: 2, degree: 0, x: 300, y: 150, wellConnected: false },
      { id: 3, colour: "#F3E679", label: "2", requiredDegree: 2, remainingDegree: 2, degree: 0, x: 250, y: 200, wellConnected: false }
    ]
  };
};

const levelThree = function() {
  return {
    level: 3,
    degreeSequence: [3, 2, 2, 1, 2],
    nodes: [
      { id: 0, colour: "#8679F3", label: "3", requiredDegree: 3, remainingDegree: 3, degree: 0, x: 150, y: 150, wellConnected: false },
      { id: 1, colour: "#E579F3", label: "2", requiredDegree: 2, remainingDegree: 2, degree: 0, x: 200, y: 100, wellConnected: false },
      { id: 2, colour: "#79F3C1", label: "2", requiredDegree: 2, remainingDegree: 2, degree: 0, x: 250, y: 150, wellConnected: false },
      { id: 3, colour: "#F3E679", label: "1", requiredDegree: 1, remainingDegree: 1, degree: 0, x: 300, y: 100, wellConnected: false },
      { id: 4, colour: "#79B3F3", label: "2", requiredDegree: 2, remainingDegree: 2, degree: 0, x: 275, y: 200, wellConnected: false }
    ]
  };
};

const levelFour = function() {
  return {
    level: 4,
    degreeSequence: [3, 3, 2, 1, 2, 2],
    nodes: [
      { id: 0, colour: "#8679F3", label: "3", requiredDegree: 3, remainingDegree: 3, degree: 0, x: 150, y: 150, wellConnected: false },
      { id: 1, colour: "#E579F3", label: "3", requiredDegree: 3, remainingDegree: 3, degree: 0, x: 200, y: 90, wellConnected: false },
      { id: 2, colour: "#79F3C1", label: "2", requiredDegree: 2, remainingDegree: 2, degree: 0, x: 250, y: 150, wellConnected: false },
      { id: 3, colour: "#F3E679", label: "1", requiredDegree: 1, remainingDegree: 1, degree: 0, x: 300, y: 90, wellConnected: false },
      { id: 4, colour: "#79B3F3", label: "2", requiredDegree: 2, remainingDegree: 2, degree: 0, x: 275, y: 200, wellConnected: false },
      { id: 5, colour: "#F37979", label: "2", requiredDegree: 2, remainingDegree: 2, degree: 0, x: 225, y: 210, wellConnected: false }
    ]
  };
};

const levelFive = function() {
  return {
    level: 5,
    degreeSequence: [4, 3, 2, 1, 2, 2, 3],
    nodes: [
      { id: 0, colour: "#8679F3", label: "4", requiredDegree: 4, remainingDegree: 4, degree: 0, x: 150, y: 150, wellConnected: false },
      { id: 1, colour: "#E579F3", label: "3", requiredDegree: 3, remainingDegree: 3, degree: 0, x: 200, y: 90, wellConnected: false },
      { id: 2, colour: "#79F3C1", label: "2", requiredDegree: 2, remainingDegree: 2, degree: 0, x: 250, y: 150, wellConnected: false },
      { id: 3, colour: "#F3E679", label: "1", requiredDegree: 1, remainingDegree: 1, degree: 0, x: 300, y: 90, wellConnected: false },
      { id: 4, colour: "#79B3F3", label: "2", requiredDegree: 2, remainingDegree: 2, degree: 0, x: 275, y: 200, wellConnected: false },
      { id: 5, colour: "#F37979", label: "2", requiredDegree: 2, remainingDegree: 2, degree: 0, x: 225, y: 210, wellConnected: false },
      { id: 6, colour: "#9FF379", label: "3", requiredDegree: 3, remainingDegree: 3, degree: 0, x: 180, y: 200, wellConnected: false }
    ]
  };
};

const levelSix = function() {
  return {
    level: 6,
    degreeSequence: [3, 3, 3, 3, 2, 2, 2],
    nodes: [
      { id: 0, colour: "#8679F3", label: "3", requiredDegree: 3, remainingDegree: 3, degree: 0, x: 150, y: 140, wellConnected: false },
      { id: 1, colour: "#E579F3", label: "3", requiredDegree: 3, remainingDegree: 3, degree: 0, x: 200, y: 100, wellConnected: false },
      { id: 2, colour: "#79F3C1", label: "3", requiredDegree: 3, remainingDegree: 3, degree: 0, x: 250, y: 140, wellConnected: false },
      { id: 3, colour: "#F3E679", label: "3", requiredDegree: 3, remainingDegree: 3, degree: 0, x: 300, y: 100, wellConnected: false },
      { id: 4, colour: "#79B3F3", label: "2", requiredDegree: 2, remainingDegree: 2, degree: 0, x: 270, y: 190, wellConnected: false },
      { id: 5, colour: "#F37979", label: "2", requiredDegree: 2, remainingDegree: 2, degree: 0, x: 220, y: 190, wellConnected: false },
      { id: 6, colour: "#9FF379", label: "2", requiredDegree: 2, remainingDegree: 2, degree: 0, x: 180, y: 180, wellConnected: false }
    ]
  };
};

const levelSeven = function() {
  return {
    level: 7,
    degreeSequence: [4, 3, 3, 3, 3, 2, 2, 2],
    nodes: [
      { id: 0, colour: "#8679F3", label: "4", requiredDegree: 4, remainingDegree: 4, degree: 0, x: 140, y: 140, wellConnected: false },
      { id: 1, colour: "#E579F3", label: "3", requiredDegree: 3, remainingDegree: 3, degree: 0, x: 190, y: 100, wellConnected: false },
      { id: 2, colour: "#79F3C1", label: "3", requiredDegree: 3, remainingDegree: 3, degree: 0, x: 240, y: 140, wellConnected: false },
      { id: 3, colour: "#F3E679", label: "3", requiredDegree: 3, remainingDegree: 3, degree: 0, x: 290, y: 100, wellConnected: false },
      { id: 4, colour: "#79B3F3", label: "3", requiredDegree: 3, remainingDegree: 3, degree: 0, x: 320, y: 180, wellConnected: false },
      { id: 5, colour: "#F37979", label: "2", requiredDegree: 2, remainingDegree: 2, degree: 0, x: 210, y: 190, wellConnected: false },
      { id: 6, colour: "#9FF379", label: "2", requiredDegree: 2, remainingDegree: 2, degree: 0, x: 170, y: 180, wellConnected: false },
      { id: 7, colour: "#F3A679", label: "2", requiredDegree: 2, remainingDegree: 2, degree: 0, x: 270, y: 210, wellConnected: false }
    ]
  };
};

const levelEight = function() {
  return {
    level: 8,
    degreeSequence: [4, 4, 3, 3, 3, 3, 2, 2, 2],
    nodes: [
      { id: 0, colour: "#8679F3", label: "4", requiredDegree: 4, remainingDegree: 4, degree: 0, x: 130, y: 140, wellConnected: false },
      { id: 1, colour: "#E579F3", label: "4", requiredDegree: 4, remainingDegree: 4, degree: 0, x: 180, y: 100, wellConnected: false },
      { id: 2, colour: "#79F3C1", label: "3", requiredDegree: 3, remainingDegree: 3, degree: 0, x: 230, y: 140, wellConnected: false },
      { id: 3, colour: "#F3E679", label: "3", requiredDegree: 3, remainingDegree: 3, degree: 0, x: 280, y: 100, wellConnected: false },
      { id: 4, colour: "#79B3F3", label: "3", requiredDegree: 3, remainingDegree: 3, degree: 0, x: 330, y: 140, wellConnected: false },
      { id: 5, colour: "#F37979", label: "3", requiredDegree: 3, remainingDegree: 3, degree: 0, x: 280, y: 190, wellConnected: false },
      { id: 6, colour: "#9FF379", label: "2", requiredDegree: 2, remainingDegree: 2, degree: 0, x: 180, y: 190, wellConnected: false },
      { id: 7, colour: "#F3A679", label: "2", requiredDegree: 2, remainingDegree: 2, degree: 0, x: 220, y: 230, wellConnected: false },
      { id: 8, colour: "#79F3B3", label: "2", requiredDegree: 2, remainingDegree: 2, degree: 0, x: 310, y: 230, wellConnected: false }
    ]
  };
};

const levelNine = function() {
  return {
    level: 9,
    degreeSequence: [5, 4, 4, 3, 3, 3, 3, 2, 2, 2],
    nodes: [
      { id: 0, colour: "#8679F3", label: "5", requiredDegree: 5, remainingDegree: 5, degree: 0, x: 130, y: 130, wellConnected: false },
      { id: 1, colour: "#E579F3", label: "4", requiredDegree: 4, remainingDegree: 4, degree: 0, x: 180, y: 90, wellConnected: false },
      { id: 2, colour: "#79F3C1", label: "4", requiredDegree: 4, remainingDegree: 4, degree: 0, x: 230, y: 130, wellConnected: false },
      { id: 3, colour: "#F3E679", label: "3", requiredDegree: 3, remainingDegree: 3, degree: 0, x: 280, y: 90, wellConnected: false },
      { id: 4, colour: "#79B3F3", label: "3", requiredDegree: 3, remainingDegree: 3, degree: 0, x: 330, y: 130, wellConnected: false },
      { id: 5, colour: "#F37979", label: "3", requiredDegree: 3, remainingDegree: 3, degree: 0, x: 280, y: 180, wellConnected: false },
      { id: 6, colour: "#9FF379", label: "3", requiredDegree: 3, remainingDegree: 3, degree: 0, x: 180, y: 180, wellConnected: false },
      { id: 7, colour: "#F3A679", label: "2", requiredDegree: 2, remainingDegree: 2, degree: 0, x: 220, y: 230, wellConnected: false },
      { id: 8, colour: "#79F3B3", label: "2", requiredDegree: 2, remainingDegree: 2, degree: 0, x: 310, y: 230, wellConnected: false },
      { id: 9, colour: "#B379F3", label: "2", requiredDegree: 2, remainingDegree: 2, degree: 0, x: 350, y: 190, wellConnected: false }
    ]
  };
};

const levelTen = function() {
  return {
    level: 10,
    // Impossible degree sequence: sum is odd (15), can't be realized by edges
    degreeSequence: [5, 5, 3, 2],
    nodes: [
      { id: 0, colour: "#8679F3", label: "5", requiredDegree: 5, remainingDegree: 5, degree: 0, x: 150, y: 150, wellConnected: false },
      { id: 1, colour: "#E579F3", label: "5", requiredDegree: 5, remainingDegree: 5, degree: 0, x: 200, y: 100, wellConnected: false },
      { id: 2, colour: "#79F3C1", label: "3", requiredDegree: 3, remainingDegree: 3, degree: 0, x: 250, y: 150, wellConnected: false },
      { id: 3, colour: "#F3E679", label: "2", requiredDegree: 2, remainingDegree: 2, degree: 0, x: 300, y: 100, wellConnected: false }
    ]
  };
};
