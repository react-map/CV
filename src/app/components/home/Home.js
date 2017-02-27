import React, { Component } from 'react';
import Slider from 'react-slick';
import Grid from './Grid';
import styles from './home.css';

const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
};

class Home extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 200,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true
        };
        return (
            <div>
                <Slider {...settings}>
                    <div className={styles.con}>
                        <img className={styles.sliderImg} src="http://r.photo.store.qq.com/psb?/V14M6vLS010qBs/6ausYgJyP.DvzTr363wTAEQ.RNt588vu7nFdt2F8K80!/r/dN8AAAAAAAAA" />
                        <p className={styles.memory}>2013<br /><br />路漫漫其修道远，吾将上下而求索。</p>
                    </div>
                    <div className={styles.con}>
                        <img className={styles.sliderImg} src="http://r.photo.store.qq.com/psb?/V14M6vLS010qBs/qGTtmkox3biggQ6T00eUjbyeAf7tGQZn8wSRMMiQxbA!/r/dAsBAAAAAAAA" />
                        <p className={styles.memory}>2014<br /><br />但使龙城飞将在，不教胡马度阴山。</p>
                    </div>
                    <div className={styles.con}>
                        <img className={styles.sliderImg} src="http://r.photo.store.qq.com/psb?/V14M6vLS010qBs/6lReLJsF7abF1YAmefwYndVwx9GM0b9iyUw4t7Iij*8!/r/dHgBAAAAAAAA" />
                        <p className={styles.memory}>2015<br /><br />舟行碧波上,人在画中游</p>
                    </div>
                    <div className={styles.con}>
                        <img className={styles.sliderImg} src="./img/2016.png" />
                        <p className={styles.memory}>2016<br /><br />For life to be a fairytale<br /> Perhaps all you need is to believe.</p>
                    </div>
                    <div className={styles.con}>
                        <img className={styles.sliderImg} src="http://r.photo.store.qq.com/psb?/V14M6vLS010qBs/YUkQ5tXqbT4cZW*aC7yqgT9lSPBDtqN2QiHOo*3be0o!/r/dN4AAAAAAAAA" />
                        <p className={styles.memory}>2017<br /><br />Why do we fall?<br />So that we can learn to pick ourselves up.</p>
                    </div>
                </Slider>
                <Grid></Grid>
            </div>
        );
    }
}

export default Home;