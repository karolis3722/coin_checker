import * as React from "react";
import axios from 'axios';
import Rows from './Rows';
import TableComponent  from "./TableComponent";
import { Table, Label, Grid } from 'semantic-ui-react'
import Dropdown from "./Dropdown";

interface Props {
}

interface State {
  data: {
    data: Array<any>;
  },
  isOpen: boolean;
  myCoins: Array<any>;
  dataForTable: Array<any>;
}

export default class UserComponent extends React.Component<Props, State> {
constructor (props: Props){
  super(props);
  this.state = {
      data: {
        data: []
      },
      isOpen: true,
      myCoins: [],
      dataForTable: []
  }
}

async componentDidMount() {
    await axios.get('http://localhost:9000/getmarketvalue')
        .then(res => {
            this.setState({data: res.data})
        }
    )
    if (localStorage.getItem('isSet') == 'true') {
        this.setState({isOpen: false})
        this.setState({myCoins: JSON.parse(localStorage.getItem('Coins'))})
        let arr = [];
        for (let i = 0; i < this.state.myCoins.length; i++) {
          let myCoin = this.state.myCoins[i];
          let coinAmount = parseFloat(myCoin.sum) / parseFloat(myCoin.price);
          let result = this.state.data.data.find( ({ id }) => id === this.state.myCoins[i].id );
          result.quote.EUR.price = coinAmount * result.quote.EUR.price;
          arr.push(result)
        }
        this.setState({ dataForTable: arr });
    }
}
render() {
  let data = this.state.data.data;
  for (let i = 0; i < data.length; i++) {
      data[i].text = data[i].symbol;
      data[i].value = data[i].symbol;
  }
  return (
    <div className="main_component">
        <Dropdown isOpen={this.state.isOpen} coinList={data}/>
        <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column>
                <TableComponent data={data} label ='Coin Checker' />
              </Grid.Column>
              <Grid.Column>
                <TableComponent data={this.state.dataForTable} label ='Your Coins'/>
              </Grid.Column>
            </Grid.Row>
        </Grid>
    </div>
    );
  }
}