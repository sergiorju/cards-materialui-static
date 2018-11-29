import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions'

const cardStyle = {
    width: "100%",
    height: 'auto'
};


class CardComponent extends Component {
    render() {
        const { card: {name, text, url, wiki}} = this.props;

        return (
            <Card style={cardStyle} className={"card_class"}>
                <CardActionArea className={"card_img"}>
                    <CardMedia
                    component={"img"}
                    alt={"img" + name}
                    className={"card_media"}
                    height={'140'}
                    image={url}
                    title={"img" + name}
                    />
                <CardContent>
                    <Typography gutterBottom variant={"h5"}>
                        {name}
                    </Typography>
                    <Typography>
                        {text}
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions className={"card_actions"} style={cardStyle}>
                    <Button className={"card_button_learn-more"} size={"small"} color={"primary"}><a href={wiki} target="_blank">
                        Learn More </a>
                    </Button>
                </CardActions>
            </Card>
        );
    }
}

export default CardComponent;
