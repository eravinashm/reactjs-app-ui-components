import React from 'react';
import PropTypes from 'prop-types';
import { Column, Table, SortDirection, SortIndicator } from 'react-virtualized';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
//import Immutable from 'immutable';
import _ from 'underscore';
import Immutable from 'immutable';
import 'react-virtualized/styles.css';
import { callLogsData } from '../../Data/callLogsData';
import './TableComponent.css';

const datalist  = callLogsData;
const list = datalist; 
class TableComponent extends React.Component {
  constructor(){
    super();
     this.state = {
       sortBy: 'callId',
       sortDirection: SortDirection.DESC,
       sortedList: list
     }
     this.sortTable = this.sortTable.bind(this);
   }
  
   sortTable({ sortBy, sortDirection }) {
    console.log('sortBy='+sortBy+', sortDirection='+sortDirection);
    const tempList = _.sortBy(list, item => item[sortBy]);
    const sortedList = sortDirection === SortDirection.DESC ? tempList.reverse() : tempList
    // debugger;
    this.setState({ sortBy, sortDirection, sortedList });
  }

  headerRenderer = ({dataKey, label}) => {
    return(
      <div className="TableHeaderLabel">
          <label className="headerlabel">{label}</label>
          {/*<span className="arrowUpDesc oneAboveOne"></span>
          <span className="arrowDownAsc oneAboveOne"></span>*/}
      </div>
  )
  }
    render() {
      return (
        <AutoSizer disableHeight>
          {({ width }) => (
            <Table
              headerHeight={20}
              height={740}
              rowCount={datalist.length}
              rowGetter={({ index }) => this.state.sortedList[index]}
              rowHeight={60}
              width={width}
              sort={this.sortTable}
              sortBy={this.state.sortBy}
              sortDirection={this.state.sortDirection}
            >
              <Column
                dataKey='callId'
                width={200}
                flexGrow={1}
                label='CALL ID'
                headerRenderer={this.headerRenderer}
              />
              <Column
                dataKey='callTime'
                width={200}
                flexGrow={1}
                label='CALL TIME'
                headerRenderer={this.headerRenderer}
              />
              <Column
                dataKey='answerDelay'
                width={200}
                flexGrow={1}
                label='ANSWER DELAY'
                headerRenderer={this.headerRenderer}
              />
            </Table>
          )}
        </AutoSizer>
      );
    }
  }
  
  export default TableComponent;