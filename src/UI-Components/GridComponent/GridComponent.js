import React from 'react';
import { defaultCellRangeRenderer, Grid } from 'react-virtualized'

// Grid data as an array of arrays
const list = [
  ['Brian Vaughn', 'Software Engineer', 'San Jose', 'CA', 95125],
  ['Brian Vaughn', 'Software Engineer', 'San Jose', 'CA', 95125],
  ['Brian Vaughn', 'Software Engineer', 'San Jose', 'CA', 95125],
  ['Brian Vaughn', 'Software Engineer', 'San Jose', 'CA', 95125],
  ['Brian Vaughn', 'Software Engineer', 'San Jose', 'CA', 95125],
];

function cellRenderer ({ columnIndex, key, rowIndex, style }) {
  return (
    <div
      key={key}
      style={style}
    >
      {list[rowIndex][columnIndex]}
    </div>
  )  
}

const CustomizedGrid = (props) => {
  return (
    <Grid
      cellRenderer={cellRenderer}
      columnCount={list[0].length}
      columnWidth={200}
      height={300}
      rowCount={list.length}
      rowHeight={30}
      width={1000}
    />
  )
}

export default CustomizedGrid;
