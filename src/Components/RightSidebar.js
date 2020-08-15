import React from 'react'
import {Link} from 'react-router-dom'
import {Menu, Button, Input, Select, DatePicker } from 'antd'
const {Option} = Select
const {RangePicker} = DatePicker
function SideBar() {
  const [openDatePicker, setOpenDatePicker] = React.useState(false)
  const [date, setDate] = React.useState(false)
  const handleDatePicker = () => {
    setOpenDatePicker(value => !value)
  };
  function onChange(date) {
    setDate(date)
   setTimeout(() =>  handleJustCloseDatePicker() , 500)

  }
  const handleJustOpenDatePicker = () => {
    setOpenDatePicker(true)

  };
  const handleJustCloseDatePicker = () => {
    setOpenDatePicker(false)

  };
  return(
    <div style={{padding: '0 10px '}}> 
      <p className="headingStyle">Content Filters</p>
      <Input placeholder="Keywords" className="filter_inputs"/>
      <Select placeholder="Content Type" className="filter_inputs">
        <Option value="pc">Paid Content</Option>
        <Option value="fc">Free Content</Option>
        <Option value="ac" >All Content</Option>
      </Select>
      <Button 
        onClick={handleDatePicker} 
        style={{textAlign: 'left', display: date ? 'none' : 'inline'}} className="filter_inputs">Dates</Button>
      <div onClick={handleJustOpenDatePicker} style={{display: (openDatePicker || date) ? 'inline' : 'none'}}>
          <RangePicker
            onChange={onChange}
            open={openDatePicker}
          />
        </div>
    </div>
  )
}

export default SideBar