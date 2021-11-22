import * as React from "react";
import axios from 'axios';
import Rows from './Rows';
import { Table, Label } from 'semantic-ui-react'

interface Props {
}

interface State {
  data: {
    data: Array<any>;
  }
}

export default class UserComponent extends React.Component<Props, State> {
constructor (props: Props){
  super(props);
  this.state = {
      data: {
        data: []
      }
  }
}

async componentDidMount() {
    await axios.get('http://localhost:9000/getmarketvalue')
        .then(res => {
            this.setState({data: res.data})
        })
}
render() {
  let data = this.state.data.data;
  return (  
    <div className="main_component">
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Coin</Table.HeaderCell>
              <Table.HeaderCell>Value</Table.HeaderCell>
              <Table.HeaderCell>Change in 24h (%)</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {
              data.map(row => (
                <Rows name={row.name} symbol={row.symbol} value={row.quote.USD.price} percent_change_24h={row.quote.USD.percent_change_24h}/>
              ))
            }
          </Table.Body>
        </Table>
    </div>
    );
  }
}