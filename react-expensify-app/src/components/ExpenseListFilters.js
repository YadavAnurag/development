import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';

class ExpenseListFilters extends React.Component{

  state = {
    calanderFocused: null
  }
  
  onDatesChange = ({ startDate, endDate })=>{
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };
  onFocusChange = (calanderFocused)=>{
    this.setState(()=>({ calanderFocused }));
  };
  onOutsideClick(e) {
    const { onOutsideClick } = this.props;
    const { childNode } = this;
    const isDescendantOfRoot = childNode && childNode.contains(e.target);
    if (!isDescendantOfRoot) {
      onOutsideClick(e);
    }
  }
  render(){
    return (
      <div>
        <input type="text" value={this.props.filters.text} onChange={(e)=>{
          this.props.dispatch(setTextFilter(e.target.value));
        }}/>
        <select 
          value={this.props.filters.sortBy}
          onChange={(e)=>{
            if(e.target.value === 'date'){
              this.props.dispatch(sortByDate());
            }else if(e.target.value === 'amount'){
              this.props.dispatch(sortByAmount()); 
            }
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker 
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calanderFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          showClearDates={true}
          isOutsideRange={()=> false}
        />
      </div>
    );
  };
}

const mapStateToProps = (state)=>{
  return {
    filters: state.filters
  };
};
export default connect(mapStateToProps)(ExpenseListFilters);