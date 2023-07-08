'use client';

import {Provider} from 'react-redux';
import {store} from './store';
import {Component} from "react";

export class Providers extends Component<{ children: any }> {
    render() {
        let {children} = this.props;
        return (
            <Provider store={store}>
                {children}
            </Provider>
        )
    }
}