import React, { Component, PropTypes } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import style from './grid.css';
import { Link } from 'react-router';

const styles = {
    root: {
        position: 'relative',
        top: 3,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: '100%',
        //height: 450,
        overflowY: 'auto',
    },
};

const tilesData = [
    {
        img: 'http://r.photo.store.qq.com/psb?/V14M6vLS010qBs/LJwi2pNI9vyeT0kMh1O4vEq6Rw.z.rTqTq2hg52aROk!/r/dN8AAAAAAAAA',
        title: '个人简介',
        route: '/info',
    },
    {
        img: 'http://r.photo.store.qq.com/psb?/V14M6vLS010qBs/KA.Yzz2pY3Fv.3fPfqbYlqTBAAK96AU7cVgoJ1WxHd8!/r/dAoBAAAAAAAA',
        title: '工作经历',
        route: '/work',
    },
    {
        img: 'http://r.photo.store.qq.com/psb?/V14M6vLS010qBs/M74ryuvZU8uKUM1RqZrhAjH4wwSNgunTNFkYO6n32q4!/r/dN8AAAAAAAAA',
        title: '开源作品',
        route: '/project',
    },
    {
        img: 'http://r.photo.store.qq.com/psb?/V14M6vLS010qBs/GN*cI3.A.zwfvUzScRQ9ByrIFsZcbe8hzkvrvX0szKU!/r/dAkBAAAAAAAA',
        title: '技术文章',
        route: '/bog',
    },
    {
        img: 'http://r.photo.store.qq.com/psb?/V14M6vLS010qBs/KuggpgGLsMdOI7cF9dHJ9bjY3gQo5Tlesrruxq4UQvQ!/r/dN4AAAAAAAAA',
        title: '技能清单',
        route: '/skill',
    },
    {
        img: 'http://r.photo.store.qq.com/psb?/V14M6vLS010qBs/cbJ2OT4ajeNU5RFrtCEGP6AHJ3kUyicmdkMiA7Yyluw!/r/dAsBAAAAAAAA',
        title: '自评与致谢',
        route: '/tks',
    },
];

class Grid extends Component {
    render() {
        return (
            <div style={styles.root}>
                <GridList
                    cellHeight={200}
                    padding={1}
                    style={styles.gridList}
                >
                    {tilesData.map((tile) => (
                        <Link to={tile.route} key={tile.route}>
                            <GridTile
                                title={tile.title}
                                titlePosition="bottom"
                                titleBackground="linear-gradient(to bottom, rgba(0,0,0,1) 0%,rgba(0,0,0,0.5) 70%,rgba(0,0,0,0) 100%)"
                                actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                                actionPosition="left"
                                titlePosition="top"
                            >
                                <img src={tile.img} className={style.imgs} />
                            </GridTile>
                        </Link>
                    ))}
                </GridList>
            </div>
        );
    }
}

Grid.propTypes = {

};

export default Grid;