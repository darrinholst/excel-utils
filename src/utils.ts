export function getSharedFormulaOffsets(
  targetCell: string,
  sharedToRange: string
) {
  const rangeStart = sharedToRange.split(':')[0];
  const {column: rangeStartCol, row: rangeStartRow} = splitCell(rangeStart);
  const {column: cellCol, row: cellRow} = splitCell(targetCell);
  const rowOffset = cellRow - rangeStartRow;
  const colOffset = encodeColumn(cellCol) - encodeColumn(rangeStartCol);
  return [colOffset, rowOffset];

}

export function adjustDynamicCellReferences(
  formula: string,
  cell: string,
  range: string
) {
  let rangeStart = range.split(':')[0];
  let [colOffset, rowOffset] = getSharedFormulaOffsets(cell, rangeStart);

  return formula.replace(/(\$?[A-Z]+)(\$?\d+)/g, function(match, col, row) {
    return `${shiftCol(col, colOffset)}${shiftRow(row, rowOffset)}`;
  });
}

const A = 'A'.charCodeAt(0);

export function encodeColumn(column: string) {
  column = column.toUpperCase();
  let encoded = column.charCodeAt(column.length - 1) - A + 1;

  for (let i = column.length - 2; i >= 0; i--) {
    encoded =
      encoded +
      (column.charCodeAt(i) - A + 1) * Math.pow(26, column.length - i - 1);
  }

  return encoded;
}

export function decodeColumn(column: number) {
  let codes = [];

  while (column > 26) {
    codes.unshift(A + ((column - 1) % 26));
    column = Math.ceil(column / 26) - 1;
  }

  codes.unshift(A + column - 1);
  return String.fromCharCode(...codes);
}

function shiftCol(col: string, offset: number) {
  return col.startsWith('$') ? col : decodeColumn(encodeColumn(col) + offset);
}

function shiftRow(row: string, offset: number) {
  return row.startsWith('$') ? row : +row + offset;
}

function splitCell(cellName: string) {
  let match = cellName.match(/([A-Z]+)([0-9]+)/);
  return {column: match[1], row: +match[2]};
}
