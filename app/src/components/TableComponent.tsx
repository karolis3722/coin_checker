import * as React from "react";
import Rows from './Rows';
import { Table, Label, Header } from 'semantic-ui-react'

interface Props {
    data: Array<any>;
    label: string;
}

export default class TableComponent extends React.Component<Props> {
    constructor (props: Props){
      super(props);
    }

    render() {
      return (  
        <div className="table_component">
            <Header>{this.props.label}</Header>
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
                  this.props.data.map(row => (
                    <Rows name={row.name} symbol={row.symbol} value={row.quote.EUR.price} percent_change_24h={row.quote.EUR.percent_change_24h}/>
                  ))
                }
              </Table.Body>
            </Table>
        </div>
        );
      }
    }