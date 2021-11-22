import * as React from "react";
import { Table, Label } from 'semantic-ui-react'


interface RowData{
    name: string,
    symbol: string,
    value: number,
    percent_change_24h: number
}

export default class UserComponent extends React.Component<RowData> {
constructor (props: RowData){
  super(props);
}

render() {
  return (  
    <>
        <Table.Row>
            <Table.Cell>
                <Label>{this.props.name}</Label>
            </Table.Cell>
            <Table.Cell>
                <Label>{this.props.value}</Label>
            </Table.Cell>
            <Table.Cell>
                <Label>{this.props.percent_change_24h}</Label>
            </Table.Cell>
        </Table.Row>
    </>
    );
  }
}