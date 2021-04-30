import React from "react"
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles"
// @material-ui/icons
import TimelineIcon from "@material-ui/icons/Timeline"
// core components
import GridItem from "Components/Grid/GridItem"
import GridContainer from "Components/Grid/GridContainer"
import Card from "Components/Card/Card"
import CardIcon from "Components/Card/CardIcon"
import CardHeader from "Components/Card/CardHeader"
import CardBody from "Components/Card/CardBody"

import styles from "assets/dashboardStyle"
const useStyles = makeStyles(styles)




export default function Dashboard() {
    const classes = useStyles()

    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <Card >
                        <CardHeader icon>
                            <CardIcon color="info">
                                <TimelineIcon />
                            </CardIcon>
                            <h4 className={classes.cardCategory}>Weekly chart</h4>
                        </CardHeader>
                        <CardBody>

                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    )
}
