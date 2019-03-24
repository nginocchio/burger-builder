import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false,
    }

    handleCloseSideDrawer = () => {
        this.setState({showSideDrawer: false})
    }

    handleOpenSideDrawer = () => {
        this.setState({showSideDrawer: true})
    }

    render () {
        return (
        <Aux>
            <Toolbar clicked={this.handleOpenSideDrawer} />
            <SideDrawer open={this.state.showSideDrawer} closed={this.handleCloseSideDrawer} />
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Aux>

        );
    }
}

export default Layout;