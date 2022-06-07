import React from 'react';
import { Container} from '@mui/material';
import Location from '../location/Location';
import Slideshow from '../slideshow/Slideshow';
import TabletSlideshow from '../home/tabletSlideshow/TabletSlideshow';
import { useWindowWidth } from '@react-hook/window-size';

import styles from './Main.module.css';

const Main = () => {
    const onlyWidth = useWindowWidth();

    return (
        <Container maxWidth="lg">
            <p className={styles.title}>
            Amplify Your Content With Cityvibe
            </p>
            <p className={styles.subTitle}>cities are packed with gifts, only local people know, our platform is the only platform that is
                being updated by locals on a daily basis.</p>
            {onlyWidth > 1024 ? <Slideshow /> : <TabletSlideshow />}
        </Container>
    )
}

export default Main;