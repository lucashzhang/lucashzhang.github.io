import React from 'react';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import theme from '../../utilities/theme';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Grid, Fab, Tooltip } from '@material-ui/core';
import WebpageSnap from './WebpageSnap';
import { FaGithub, FaLink } from 'react-icons/fa';
import { getDevIcon } from './TimelineUtil';

const useStyles = makeStyles((theme) => ({
    buttons: {
        fontSize: '1.5rem',
        boxShadow: 'None',
        color: '#FFFFFF'
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    timelineContent: {
        height: 'calc(100% - 2rem)',
        marginBottom: '1rem',
        [theme.breakpoints.down('sm')]: {
            height: 'calc(100% - 3rem)',
        },
    },
    timelineBody: {
        [theme.breakpoints.down('sm')]: {
            marginBottom: '1rem'
        },
    }
}))

const Timeline = props => {

    const classes = useStyles()

    return (
        <ThemeProvider theme={theme}>
            <VerticalTimeline layout={'1-column'}>
                {props.repoList.map(repo => {

                    let isWebsite = false;
                    if (repo.homepage != null && repo.homepage.length > 0 && !repo.homepage.includes('githubusercontent.com')) {
                        isWebsite = true;
                    }

                    const LangIcon = getDevIcon(repo.language, repo.description);

                    return <VerticalTimelineElement
                        contentStyle={{ background: '#fffff', color: '#757575' }}
                        date={`Created: ${repo.created}`}
                        key={repo.id}
                        icon={<LangIcon/>}
                        iconStyle={{ background: `${props.langColors[repo.language] != null ? props.langColors[repo.language] : 'hsl(0, 0%, 50%)'}`, color: '#efefef' }}
                    >
                        <Grid container spacing={3} className={classes.timelineBody}>
                            <Grid item md={6}>
                                <WebpageSnap url={repo.homepage}></WebpageSnap>
                            </Grid>
                            <Grid item md={6} >
                                <div className={classes.timelineContent}>
                                    <h3>{repo.name}</h3>
                                    <h4>Primary Language: {repo.language}</h4>
                                    <p>{repo.description}</p>
                                </div>
                                <Grid container>
                                    <Grid item xs={isWebsite ? 6 : 12} className={classes.buttonContainer}>
                                        <Tooltip title="Github Repository"><Fab className={classes.buttons} color="secondary" href={repo.url} target={repo.url} size='medium'><FaGithub /></Fab></Tooltip>
                                    </Grid>
                                    {isWebsite ? <Grid item xs={6} className={classes.buttonContainer}>
                                        <Tooltip title="Project Site"><Fab className={classes.buttons} color="secondary" href={repo.homepage} target={repo.homepage}  size='medium'><FaLink /></Fab></Tooltip>
                                    </Grid> : null}
                                </Grid>
                            </Grid>
                        </Grid>
                    </VerticalTimelineElement>
                })}
            </VerticalTimeline>
        </ThemeProvider>
    )
}

export default Timeline;