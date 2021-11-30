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
  let changeIn:number = this.props.percent_change_24h;
  return (
    <>
        <Table.Row>
            <Table.Cell>
                <Label>{this.props.name}</Label>
            </Table.Cell>
            <Table.Cell>
                <Label>{this.props.value.toFixed(7)}</Label>
            </Table.Cell>
            <Table.Cell>
                <Label className={changeIn > 0 ? 'positive' : 'negative'}>{changeIn.toFixed(3)}</Label>
            </Table.Cell>
        </Table.Row>
    </>
    );
  }
}