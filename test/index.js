var Bog = function (_Component) {
    _inherits(Bog, _Component);

    function Bog() {
        _classCallCheck(this, Bog);

        return _possibleConstructorReturn(this, (Bog.__proto__ || Object.getPrototypeOf(Bog)).apply(this, arguments));
    }

    _createClass(Bog, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            window.scrollTo(0, 0);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_Nav2.default, { parentUrl: '/', parentName: '首页', nowName: '个人博客' }),
                _react2.default.createElement(
                    'div',
                    { style: style.layout },
                    _react2.default.createElement(
                        _List.List,
                        null,
                        _react2.default.createElement(
                            _Subheader2.default,
                            null,
                            'H5'
                        ),
                        _react2.default.createElement(_List.ListItem, {
                            leftAvatar: _react2.default.createElement(
                                _Avatar2.default,
                                {
                                    color: _colors.pinkA200, backgroundColor: _colors.transparent,
                                    style: { left: 8 }
                                },
                                'A'
                            ),
                            rightIconButton: _react2.default.createElement(
                                'a',
                                { style: style.a, href: 'http://www.cnblogs.com/sylvenas/p/6386638.html' },
                                _react2.default.createElement(_link2.default, { style: style.iconLink, color: _colors.lightBlue500 })
                            ),
                            primaryText: '\u670D\u52A1\u5668\u7AEF\u63A8\u9001\u6280\u672F\u603B\u7ED3',
                            secondaryText: _react2.default.createElement(
                                'p',
                                null,
                                '\u6700\u8FD1\u5728\u505A\u524D\u7AEF\u9875\u9762\u6E32\u67D3\u7684\u65F6\u5019\uFF0C\u6709\u7684\u7EC4\u4EF6\u9700\u8981\u8DDF\u968F\u540E\u53F0\u6570\u636E\u7684\u53D8\u5316\u800C...'
                            ),
                            secondaryTextLines: 2
                        }),
                        _react2.default.createElement(_Divider2.default, { inset: true }),
                        _react2.default.createElement(_List.ListItem, {
                            leftAvatar: _react2.default.createElement(
                                _Avatar2.default,
                                {
                                    color: _colors.pinkA200, backgroundColor: _colors.transparent,
                                    style: { left: 8 }
                                },
                                'B'
                            ),
                            rightIconButton: _react2.default.createElement(
                                'a',
                                { style: style.a, href: 'http://www.cnblogs.com/sylvenas/p/6413616.html' },
                                _react2.default.createElement(_link2.default, { style: style.iconLink, color: _colors.lightBlue500 })
                            ),
                            primaryText: '\u4E00\u673A\u53CC\u5C4F\u548C\u53CC\u5C4F\u901A\u4FE1\u65B9\u6848\u603B\u7ED3',
                            secondaryText: _react2.default.createElement(
                                'p',
                                null,
                                '\u9879\u76EE\u4E2D\u9700\u8981\u7528\u5230web\u4E00\u673A\u53CC\u5C4F\uFF0C\u4E5F\u5C31\u662F\u4E00\u53F0\u7535\u8111\uFF0C\u4E24\u4E2A\u5C4F\u5E55\uFF0C\u6BCF\u4E2A\u5C4F\u5E55\u5206\u522B\u5C55\u793A\u4E00\u90E8\u5206\u7684\u5185\u5BB9...'
                            ),
                            secondaryTextLines: 2
                        }),
                        _react2.default.createElement(
                            _Subheader2.default,
                            null,
                            'React'
                        ),
                        _react2.default.createElement(_List.ListItem, {
                            leftAvatar: _react2.default.createElement(
                                _Avatar2.default,
                                {
                                    color: _colors.pinkA200, backgroundColor: _colors.transparent,
                                    style: { left: 8 }
                                },
                                'C'
                            ),
                            rightIconButton: _react2.default.createElement(
                                'a',
                                { style: style.a, href: 'http://www.cnblogs.com/sylvenas/p/6410116.html' },
                                _react2.default.createElement(_link2.default, { style: style.iconLink, color: _colors.lightBlue500 })
                            ),
                            primaryText: 'react-router3.x hashHistory render\u4E24\u6B21\u7684bug,\u53CA\u89E3\u51B3\u65B9\u6848',
                            secondaryText: _react2.default.createElement(
                                'p',
                                null,
                                '\u5148\u5199\u4E00\u4E2A\u7B80\u5355App\u9875\u9762\uFF0C\u5176\u5B9E\u5C31\u662F\u7B80\u5355\u4FEE\u6539\u4E86react-router\u7684\u5B98\u65B9\u4F8B\u5B50\u4E2D\u7684animations\u4F8B\u5B50'
                            ),
                            secondaryTextLines: 2
                        }),
                        _react2.default.createElement(
                            _Subheader2.default,
                            null,
                            'React-Native'
                        ),
                        _react2.default.createElement(_List.ListItem, {
                            leftAvatar: _react2.default.createElement(
                                _Avatar2.default,
                                {
                                    color: _colors.pinkA200, backgroundColor: _colors.transparent,
                                    style: { left: 8 }
                                },
                                'D'
                            ),
                            rightIconButton: _react2.default.createElement(
                                'a',
                                { style: style.a, href: 'http://www.cnblogs.com/sylvenas/p/6376300.html' },
                                _react2.default.createElement(_link2.default, { style: style.iconLink, color: _colors.lightBlue500 })
                            ),
                            primaryText: '\u5728windows\u642D\u5EFAreact-native android \u5F00\u53D1\u73AF\u5883\u603B\u7ED3',
                            secondaryText: _react2.default.createElement(
                                'p',
                                null,
                                '\u5EFA\u8BAE\u7B2C\u4E00\u6B21\u542F\u52A8\u9879\u76EE\u7684\u65F6\u5019\uFF0C\u4F7F\u75285.0\u4EE5\u4E0A\u7248\u672C\u7684android\u865A\u62DF\u673A...'
                            ),
                            secondaryTextLines: 2
                        }),
                        _react2.default.createElement(
                            _Subheader2.default,
                            null,
                            'webpack'
                        ),
                        _react2.default.createElement(_List.ListItem, {
                            leftAvatar: _react2.default.createElement(
                                _Avatar2.default,
                                {
                                    color: _colors.pinkA200, backgroundColor: _colors.transparent,
                                    style: { left: 8 }
                                },
                                'E'
                            ),
                            rightIconButton: _react2.default.createElement(
                                'a',
                                { style: style.a, href: 'http://www.cnblogs.com/sylvenas/p/6406981.html' },
                                _react2.default.createElement(_link2.default, { style: style.iconLink, color: _colors.lightBlue500 })
                            ),
                            primaryText: 'webpack1\u5347\u7EA7\u5230webpack2\u6587\u6863\u7FFB\u8BD1',
                            secondaryText: _react2.default.createElement(
                                'p',
                                null,
                                '\u8FD1\u65E5\u9879\u76EE\u8981\u5347\u7EA7\u5230webpack2.2,\u539F\u6765\u4F7F\u7528\u7684webpack\u7248\u672C\u662F1.12...'
                            ),
                            secondaryTextLines: 2
                        }),
                        _react2.default.createElement(
                            _Subheader2.default,
                            null,
                            'node.js'
                        ),
                        _react2.default.createElement(_List.ListItem, {
                            leftAvatar: _react2.default.createElement(
                                _Avatar2.default,
                                {
                                    color: _colors.pinkA200, backgroundColor: _colors.transparent,
                                    style: { left: 8 }
                                },
                                'F'
                            ),
                            rightIconButton: _react2.default.createElement(
                                'a',
                                { style: style.a, href: 'http://www.cnblogs.com/sylvenas/p/6378298.html' },
                                _react2.default.createElement(_link2.default, { style: style.iconLink, color: _colors.lightBlue500 })
                            ),
                            primaryText: 'node.js\u722C\u866B\u676D\u5DDE\u623F\u4EA7\u9500\u552E\u53CA\u6570\u636E\u53EF\u89C6\u5316',
                            secondaryText: _react2.default.createElement(
                                'p',
                                null,
                                '\u6458\u8981: \u73B0\u5728\u5E74\u8F7B\u4EBA\u523025\u5C81+,\u603B\u7684\u8981\u8003\u8651\u4E70\u623F\u7ED3\u5A5A\u7684\u95EE\u9898,2016\u5E74\u7684\u4E00\u6CE2\u623F\u4EF7...'
                            ),
                            secondaryTextLines: 2
                        }),
                        _react2.default.createElement(
                            _Subheader2.default,
                            null,
                            'leaflet'
                        ),
                        _react2.default.createElement(_List.ListItem, {
                            leftAvatar: _react2.default.createElement(
                                _Avatar2.default,
                                {
                                    color: _colors.pinkA200, backgroundColor: _colors.transparent,
                                    style: { left: 8 }
                                },
                                'G'
                            ),
                            rightIconButton: _react2.default.createElement(
                                'a',
                                { style: style.a, href: 'http://www.cnblogs.com/sylvenas/p/6376323.html' },
                                _react2.default.createElement(_link2.default, { style: style.iconLink, color: _colors.lightBlue500 })
                            ),
                            primaryText: 'esri-leaflet\u90E8\u5206\u74E6\u7247\u7F3A\u5931\u95EE\u9898\u53CA\u89E3\u51B3\u529E\u6CD5',
                            secondaryText: _react2.default.createElement(
                                'p',
                                null,
                                'esri-leaflet\u52A0\u8F7DTileLayer\u7684\u65F6\u5019\uFF0C\u6709\u65F6\u5019\u7531\u4E8E\u6570\u636E\u7684\u539F\u56E0\uFF0C\u9020\u6210...'
                            ),
                            secondaryTextLines: 2
                        })
                    )
                )
            );
        }
    }]);

    return Bog;
}(_react.Component);