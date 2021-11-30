import * as React from "react";
import Rows from './Rows';
import axios from 'axios';
import { Button, Modal, Dropdown, ModalContent, Input, Table } from 'semantic-ui-react'

interface Props {
    isOpen : boolean;
    coinList: Array<any>;
}

interface State {
  data: {
      id: number,
      sum: string,
      price: string,
  }
  numDropdowns: number;
  coinsArray: Array<any>;
}

export default class DropdownComponent extends React.Component<Props, State> {
    constructor (props: Props){
        super(props);
        this.state = {
            data: {
                id: -1,
                sum: '',
                price: ''
            },
            coinsArray: [],
            numDropdowns: 1
        }
    }

    giveModal = () => {
        this.setState({
            numDropdowns: this.state.numDropdowns + 1,
            data: {id: -1, sum: '', price: ''}
        });
    }

    handleChange(value:string, type:string) {
        let temp = this.state.data;
        switch (type) {
            case 'COIN':
                temp.id = parseInt(value);
                break;
            case 'SUM':
                temp.sum = value;
                break;
            case 'PRICE':
                temp.price = value;
                break;
        }
        this.state.coinsArray[this.state.numDropdowns-1] = temp;
    }

    sendCoins = () => {
        localStorage.setItem('isSet', 'true')
        localStorage.setItem('Coins', JSON.stringify(this.state.coinsArray));
        
    }

    render() {
        const dropdowns = []
        for (let i = 0; i < this.state.numDropdowns; i++) {
            dropdowns.push(<>
            <Table.Row>
                <Table.Cell>
                    <Dropdown
                        key={i}
                        id={`${i}Coin`}
                        placeholder='Select Coin'
                        fluid
                        search
                        selection
                        options={this.props.coinList}
                        onChange={(e) => {this.handleChange((e.target as Element).id, 'COIN')}}
                        />
                </Table.Cell>
                <Table.Cell>
                    <Input key={i} id={`${i}Sum`} placeholder='Euros invested' onChange={(e) => {this.handleChange(e.target.value , 'SUM')}} />
                </Table.Cell>
                <Table.Cell>
                    <Input key={i} id={`${i}Price`} placeholder='Coin Price' onChange={(e) => {this.handleChange(e.target.value , 'PRICE')}}/>
                </Table.Cell>
            </Table.Row>
            </>
            )
        }
    return (
            <>
                <Modal
                    dimmer='blurring'
                    open={this.props.isOpen}
                >
                    <Modal.Header>Pick your coins</Modal.Header>
                    <Modal.Content>
                        Pick your coins and enter the money you've invested in each and at what price point. (Data is saved in your local storage, so if you remove cookies, data will have to be entered manually again)
                    </Modal.Content>
                    <ModalContent>
                        <Table>
                            {dropdowns}
                        </Table>
                    </ModalContent>
                    <Modal.Actions>
                    <Button positive onClick={this.sendCoins}>
                        Submit coins
                    </Button>
                    <Button primary floated='left' onClick={this.giveModal}>
                        Add coin
                    </Button>
                    </Modal.Actions>
                </Modal>
            </>
        );
    }
}