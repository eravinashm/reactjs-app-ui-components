import React, { Component } from 'react';
import { defaultCellRangeRenderer, Grid } from 'react-virtualized'
import {CallAnalysisData} from '../../Data/CallAnalysisData';

// Grid data as an array of arrays
const list = [
  ['Brian Vaughn', 'Software Engineer', 'San Jose', 'CA', 95125],
  ['Brian Vaughn', 'Software Engineer', 'San Jose', 'CA', 95125],
  ['Brian Vaughn', 'Software Engineer', 'San Jose', 'CA', 95125],
  ['Brian Vaughn', 'Software Engineer', 'San Jose', 'CA', 95125],
  ['Brian Vaughn', 'Software Engineer', 'San Jose', 'CA', 95125],
];


class CustomizedGrid extends Component{
 constructor(props){
  super(props);
  this.gridRef = React.createRef();
 }
  state = {
    positiveWordsData: [], 
    negativeWordsData: [],
    activeTab:'positiveWordsTab'
  }
 
  componentDidMount(){
  let positiveWordsData = [];
  let negativeWordsData = [];
  CallAnalysisData.payload.map(singleObject => {
    let singleData = [];
    if(singleObject.sentiment === 'negative'){
      singleData[0] = singleObject.sentimentWord;
      singleData[1] = singleObject.weight;
      positiveWordsData.push(singleData);
    }else {
      singleData[0] = singleObject.sentimentWord;
      singleData[1] = singleObject.weight;
      negativeWordsData.push(singleData);
    }
  })

  if(positiveWordsData.length !== 0)
    this.setState({positiveWordsData: positiveWordsData});
  if(negativeWordsData.length !== 0)
    this.setState({negativeWordsData: negativeWordsData});
 }

  cellRendererPositiveWordsData = ({ columnIndex, key, rowIndex, style }) => {
    //console.log(activeTab)
    return (
      <div
        key={key}
        style={style}
      >
        {this.state.positiveWordsData[rowIndex][columnIndex]}
      </div>
    )  
  }

  cellRendererNegativeWordsData = ({ columnIndex, key, rowIndex, style }) => {
    //console.log(activeTab)
    return (
      <div
        key={key}
        style={style}
      >
        {this.state.negativeWordsData[rowIndex][columnIndex]}
      </div>
    )  
  }

  clickHandler = (id) => {
    console.log(id)
    this.setState({activeTab: id});
  }

  createGrid = () => {
    let { positiveWordsData, negativeWordsData, activeTab } = this.state;
    return (
      <React.Fragment>
        {
          activeTab === 'positiveWordsTab'  ? 
          <React.Fragment>
          {
            positiveWordsData.length !== 0 ?
            <Grid
              cellRenderer={this.cellRendererPositiveWordsData}
              columnCount={positiveWordsData[0].length}
              columnWidth={100}
              height={300}
              rowCount={positiveWordsData.length}
              rowHeight={30}
              width={250} 
              />: null
          }
          </React.Fragment>:
          <React.Fragment>
          {
            negativeWordsData.length !== 0 ? 
            <Grid
              cellRenderer={this.cellRendererNegativeWordsData}
              columnCount={negativeWordsData[0].length}
              columnWidth={100}
              height={300}
              rowCount={negativeWordsData.length}
              rowHeight={30}
              width={250} 
              />: null
          }
          </React.Fragment>
        }
          </React.Fragment>
    )
  }

  render(){
    return(
      <React.Fragment>
        <div className="cardPaper">
          <div className="containerPaper">
          <div className="flexBox">
            <span onClick={() => this.clickHandler('positiveWordsTab')}>Positive</span>
            <span onClick={() => this.clickHandler('negativeWordsTab')}>Negative</span>
          </div>
          {this.createGrid()}
          </div>
        </div>
      </React.Fragment>
    )}
}

export default CustomizedGrid;
