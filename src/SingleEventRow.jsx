import React from 'react';
import EventRowMixin from './EventRowMixin';


let SingleEventRow = React.createClass({

  displayName: 'SingleEventRow',

  propTypes: {
    segments: React.PropTypes.array
  },

  mixins: [EventRowMixin],

  renderRow(segmentData) {
    let row = [];
    let lastEnd = 1;
    for (let i in segmentData) {
      let { events, left, right, span } = segmentData[i];
      let key = '_lvl_' + left;
      let gap = left - lastEnd;
      
      let content = events.map((e, idx) => {
        return this.renderEvent(e, idx)
      })          

      if (gap)
        row.push(this.renderSpan(gap, key + '_gap'))

      row.push(
        this.renderSpan(span, key, content)
      )

      lastEnd = (right + 1);
    } 
    return row;       
  },
  
  pushToData(data, event, left, right, span) {
    data[left] = data[left] || { events: [], left: left, right: right, span: span };
    data[left].events.push(event);
  },
  
  render() {
    let { segments } = this.props;
    
    let segmentData = segments.reduce((data, { event, left, right, span }) => {
      if (span > 1) {
        let curLeft = left;
        let endLeft = curLeft + span;
        while(curLeft < endLeft) {
          this.pushToData(data, event, curLeft, curLeft, 1)
          curLeft ++;
        }
      } else {
        this.pushToData(data, event, left, right, span)
      }
      
      return data;
    }, {});
    
    return (
      <div className='rbc-row'>
      {
        this.renderRow(segmentData)
      }
      </div>
    )
  }
});

export default SingleEventRow
