import React, { Component } from 'react'

class Main extends Component {

    render() {
        return (
            <div id="content" className="mt-3">
                <table className="table table-borderless text-muted text-center">
                    <thread>
                        <tr>
                            <td scope="col">Staking Balance</td>
                            <td scope="col">Reward Balance</td>
                        </tr>
                    </thread>
                    <tbody>
                        <tr>
                            <td>{window.web3.utils.fromWei(this.props.stakingBalance, "Ether")} mDai</td>
                            <td>{window.web3.utils.fromWei(this.props.dappTokenBalance, "Ether")} DAPP</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Main;