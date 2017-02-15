define([
    "dojo/_base/declare",
    "dojo/_base/lang", "esri/geometry/Point", "esri/geometry/ScreenPoint"
], function (declare, lang, Point, ScreenPoint) {
    return declare("EchartsLayer", null, {
        name: "EchartsLayer",
        _map: null,
        _ec: null,
        _geoCoord: [],
        _option: null,
        _mapOffset: [0, 0],
        constructor: function (map, ec) {
            this._map = map;
            var div = this._echartsContainer = document.createElement('div');
            div.style.position = 'absolute';
            div.style.height = map.height + 'px';
            div.style.width = map.width + 'px';
            div.style.top = 0;
            div.style.left = 0;
            map.__container.appendChild(div);
            this._init(map, ec);
        },
        _init: function (map, ec) {
            var self = this;
            self._map = map;
            self.getEchartsContainer = function () {
                return self._echartsContainer;
            };
            self.getMap = function () {
                return self._map;
            };
            self.geoCoord2Pixel = function (geoCoord) {
                var point = new Point(geoCoord[0], geoCoord[1]);
                var pos = self._map.toScreen(point);
                return [pos.x, pos.y];
            };
            self.pixel2GeoCoord = function (pixel) {
                var point = self._map.toMap(new ScreenPoint(pixel[0], pixel[1]));
                return [point.lng, point.lat];
            };
            self.initECharts = function () {
                self._ec = ec.init.apply(self, arguments);
                self._bindEvent();
                self._addMarkWrap();
                return self._ec;
            };
            self._addMarkWrap = function () {
                function _addMark(seriesIdx, markData, markType) {
                    var data;
                    if (markType == 'markPoint') {
                        var data = markData.data;
                        if (data && data.length) {
                            for (var k = 0, len = data.length; k < len; k++) {
                                if (!(data[k].name && this._geoCoord.hasOwnProperty(data[k].name))) {
                                    data[k].name = k + 'markp';
                                    self._geoCoord[data[k].name] = data[k].geoCoord;
                                }
                                self._AddPos(data[k]);
                            }
                        }
                    } else {
                        data = markData.data;
                        if (data && data.length) {
                            for (var k = 0, len = data.length; k < len; k++) {
                                if (!(data[k][0].name && this._geoCoord.hasOwnProperty(data[k][0].name))) {
                                    data[k][0].name = k + 'startp';
                                    self._geoCoord[data[k][0].name] = data[k][0].geoCoord;
                                }
                                if (!(data[k][1].name && this._geoCoord.hasOwnProperty(data[k][1].name))) {
                                    data[k][1].name = k + 'endp';
                                    self._geoCoord[data[k][1].name] = data[k][1].geoCoord;
                                }
                                self._AddPos(data[k][0]);
                                self._AddPos(data[k][1]);
                            }
                        }
                    }
                    self._ec._addMarkOri(seriesIdx, markData, markType);
                }

                self._ec._addMarkOri = self._ec._addMark;
                self._ec._addMark = _addMark;
            };
            self.getECharts = function () {
                return self._ec;
            };
            self.getMapOffset = function () {
                return self._mapOffset;
            };
            self.setOption = function (option, notMerge) {
                self._option = option;
                var series = option.series || {};
                for (var i = 0, item; item = series[i++];) {
                    var geoCoord = item.geoCoord;
                    if (geoCoord) {
                        for (var k in geoCoord) {
                            self._geoCoord[k] = geoCoord[k];
                        }
                    }
                }
                for (var i = 0, item; item = series[i++];) {
                    var markPoint = item.markPoint || {};
                    var markLine = item.markLine || {};

                    var data = markPoint.data;
                    if (data && data.length) {
                        for (var k = 0, len = data.length; k < len; k++) {
                            if (!(data[k].name && this._geoCoord.hasOwnProperty(data[k].name))) {
                                data[k].name = k + 'markp';
                                self._geoCoord[data[k].name] = data[k].geoCoord;
                            }
                            self._AddPos(data[k]);
                        }
                    }

                    data = markLine.data;
                    if (data && data.length) {
                        for (var k = 0, len = data.length; k < len; k++) {
                            if (!(data[k][0].name && this._geoCoord.hasOwnProperty(data[k][0].name))) {
                                data[k][0].name = k + 'startp';
                                self._geoCoord[data[k][0].name] = data[k][0].geoCoord;
                            }
                            if (!(data[k][1].name && this._geoCoord.hasOwnProperty(data[k][1].name))) {
                                data[k][1].name = k + 'endp';
                                self._geoCoord[data[k][1].name] = data[k][1].geoCoord;
                            }
                            self._AddPos(data[k][0]);
                            self._AddPos(data[k][1]);
                        }
                    }
                }

                self._ec.setOption(option, notMerge);
            };
            self._AddPos = function (obj) {

                var coord = self._geoCoord[obj.name];
                var pos = self.geoCoord2Pixel(coord);
                obj.x = pos[0]; //- self._mapOffset[0];
                obj.y = pos[1]; //- self._mapOffset[1];
            };
            self._bindEvent = function () {
                self._map.on('zoom-end', function (e) {
                    self.setOption(self._option);
                });
                self._map.on('zoom-start', function (e) {
                    self._ec.clear();
                });
                self._map.on('pan', function (e) {
                    self._ec.clear();
                });
                self._map.on('pan-end', function (e) {
                    self.setOption(self._option);
                });

                self._ec.getZrender().on('dragstart', function (e) {
                    self._map.disablePan();
                    //self._ec.clear();
                });
                self._ec.getZrender().on('dragend', function (e) {
                    self._map.enablePan();
                    //self.setOption(self._option);
                });
                self._ec.getZrender().on('mousewheel', function (e) {
                    self._ec.clear();
                    self._map.emit('mouse-wheel', e.event)
                });
            };

        }

    });
});