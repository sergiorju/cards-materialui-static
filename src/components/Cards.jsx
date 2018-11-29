import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './CardComponent';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

class Cards extends Component {
    render() {
        const {cards } = this.props;
        return (
            <div>
                <Grid direction={'row'} justify={"space-evenly"} container alignItems={"baseline"} spacing={24}>
                {cards.map(card => (
                <Grid item xs={12} sm={6} md={4}>
                        <Card
                            key = {card.id}
                            card ={card} />
                </Grid>
                ))}
                </Grid>
            </div>
                );
    }
}

Cards.propTypes = {};

export default Cards;
