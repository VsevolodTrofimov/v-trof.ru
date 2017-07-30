webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = __webpack_require__(0);

var _link = __webpack_require__(64);

var _link2 = _interopRequireDefault(_link);

var _align = __webpack_require__(68);

var _align2 = _interopRequireDefault(_align);

var _story = __webpack_require__(69);

var _story2 = _interopRequireDefault(_story);

var _home = __webpack_require__(144);

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var upperTextProjectsLink = void 0;

var UpperText = function UpperText(props) {
    return (0, _preact.h)(
        'div',
        { 'class': _home2.default.textBlock },
        'This is how ',
        (0, _preact.h)(
            _link2.default,
            { url: props.project.url,
                ref: function ref(link) {
                    return upperTextProjectsLink = link;
                } },
            ' ',
            props.project.title
        ),
        ' was born. ',
        (0, _preact.h)('br', null),
        'See ',
        (0, _preact.h)(
            _link2.default,
            { url: '/projects/' },
            ' other projects '
        ),
        ' ',
        (0, _preact.h)('br', null),
        'Or ',
        (0, _preact.h)(
            _link2.default,
            { url: '/contact/' },
            ' make the next one yours '
        )
    );
};

var LowerText = function LowerText() {
    return (0, _preact.h)(
        'div',
        { 'class': _home2.default.textBlock },
        'Btw, I am ',
        (0, _preact.h)(
            _link2.default,
            { url: '/about/' },
            ' Vesevolod Trofimov '
        ),
        ' ',
        (0, _preact.h)('br', null),
        'Frontend Developer & UX designer ',
        (0, _preact.h)('br', null),
        'based in St. Petersburg, Russia.'
    );
};

var Home = function (_Component) {
    _inherits(Home, _Component);

    function Home(props) {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));
    }

    _createClass(Home, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var texts = this.texts;
            var arrowEnd = document.getElementById('story-arrow-end');

            function reAlign() {
                texts.style.transform = '';

                if (document.body.getBoundingClientRect().width < 1200) return 0;

                (0, _align2.default)(texts, arrowEnd, {
                    by: upperTextProjectsLink.base,
                    to: 'center',
                    apply: true
                });
            }

            reAlign();
            window.onresize = reAlign;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var project = {
                url: '/about/',
                title: 'Pileus'
            };

            return (0, _preact.h)(
                'div',
                { 'class': _home2.default.home },
                (0, _preact.h)(_story2.default, null),
                (0, _preact.h)(
                    'div',
                    { ref: function ref(texts) {
                            _this2.texts = texts;
                        }, 'class': _home2.default.texts },
                    (0, _preact.h)(UpperText, { project: project }),
                    (0, _preact.h)(LowerText, null)
                )
            );
        }
    }]);

    return Home;
}(_preact.Component);

exports.default = Home;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/**
 * String of the current PIXI version.
 *
 * @static
 * @constant
 * @memberof PIXI
 * @name VERSION
 * @type {string}
 */
var VERSION = exports.VERSION = '4.5.4';

/**
 * Two Pi.
 *
 * @static
 * @constant
 * @memberof PIXI
 * @type {number}
 */
var PI_2 = exports.PI_2 = Math.PI * 2;

/**
 * Conversion factor for converting radians to degrees.
 *
 * @static
 * @constant
 * @memberof PIXI
 * @type {number}
 */
var RAD_TO_DEG = exports.RAD_TO_DEG = 180 / Math.PI;

/**
 * Conversion factor for converting degrees to radians.
 *
 * @static
 * @constant
 * @memberof PIXI
 * @type {number}
 */
var DEG_TO_RAD = exports.DEG_TO_RAD = Math.PI / 180;

/**
 * Constant to identify the Renderer Type.
 *
 * @static
 * @constant
 * @memberof PIXI
 * @name RENDERER_TYPE
 * @type {object}
 * @property {number} UNKNOWN - Unknown render type.
 * @property {number} WEBGL - WebGL render type.
 * @property {number} CANVAS - Canvas render type.
 */
var RENDERER_TYPE = exports.RENDERER_TYPE = {
  UNKNOWN: 0,
  WEBGL: 1,
  CANVAS: 2
};

/**
 * Various blend modes supported by PIXI.
 *
 * IMPORTANT - The WebGL renderer only supports the NORMAL, ADD, MULTIPLY and SCREEN blend modes.
 * Anything else will silently act like NORMAL.
 *
 * @static
 * @constant
 * @memberof PIXI
 * @name BLEND_MODES
 * @type {object}
 * @property {number} NORMAL
 * @property {number} ADD
 * @property {number} MULTIPLY
 * @property {number} SCREEN
 * @property {number} OVERLAY
 * @property {number} DARKEN
 * @property {number} LIGHTEN
 * @property {number} COLOR_DODGE
 * @property {number} COLOR_BURN
 * @property {number} HARD_LIGHT
 * @property {number} SOFT_LIGHT
 * @property {number} DIFFERENCE
 * @property {number} EXCLUSION
 * @property {number} HUE
 * @property {number} SATURATION
 * @property {number} COLOR
 * @property {number} LUMINOSITY
 */
var BLEND_MODES = exports.BLEND_MODES = {
  NORMAL: 0,
  ADD: 1,
  MULTIPLY: 2,
  SCREEN: 3,
  OVERLAY: 4,
  DARKEN: 5,
  LIGHTEN: 6,
  COLOR_DODGE: 7,
  COLOR_BURN: 8,
  HARD_LIGHT: 9,
  SOFT_LIGHT: 10,
  DIFFERENCE: 11,
  EXCLUSION: 12,
  HUE: 13,
  SATURATION: 14,
  COLOR: 15,
  LUMINOSITY: 16,
  NORMAL_NPM: 17,
  ADD_NPM: 18,
  SCREEN_NPM: 19
};

/**
 * Various webgl draw modes. These can be used to specify which GL drawMode to use
 * under certain situations and renderers.
 *
 * @static
 * @constant
 * @memberof PIXI
 * @name DRAW_MODES
 * @type {object}
 * @property {number} POINTS
 * @property {number} LINES
 * @property {number} LINE_LOOP
 * @property {number} LINE_STRIP
 * @property {number} TRIANGLES
 * @property {number} TRIANGLE_STRIP
 * @property {number} TRIANGLE_FAN
 */
var DRAW_MODES = exports.DRAW_MODES = {
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  TRIANGLE_STRIP: 5,
  TRIANGLE_FAN: 6
};

/**
 * The scale modes that are supported by pixi.
 *
 * The {@link PIXI.settings.SCALE_MODE} scale mode affects the default scaling mode of future operations.
 * It can be re-assigned to either LINEAR or NEAREST, depending upon suitability.
 *
 * @static
 * @constant
 * @memberof PIXI
 * @name SCALE_MODES
 * @type {object}
 * @property {number} LINEAR Smooth scaling
 * @property {number} NEAREST Pixelating scaling
 */
var SCALE_MODES = exports.SCALE_MODES = {
  LINEAR: 0,
  NEAREST: 1
};

/**
 * The wrap modes that are supported by pixi.
 *
 * The {@link PIXI.settings.WRAP_MODE} wrap mode affects the default wraping mode of future operations.
 * It can be re-assigned to either CLAMP or REPEAT, depending upon suitability.
 * If the texture is non power of two then clamp will be used regardless as webGL can
 * only use REPEAT if the texture is po2.
 *
 * This property only affects WebGL.
 *
 * @static
 * @constant
 * @name WRAP_MODES
 * @memberof PIXI
 * @type {object}
 * @property {number} CLAMP - The textures uvs are clamped
 * @property {number} REPEAT - The texture uvs tile and repeat
 * @property {number} MIRRORED_REPEAT - The texture uvs tile and repeat with mirroring
 */
var WRAP_MODES = exports.WRAP_MODES = {
  CLAMP: 0,
  REPEAT: 1,
  MIRRORED_REPEAT: 2
};

/**
 * The gc modes that are supported by pixi.
 *
 * The {@link PIXI.settings.GC_MODE} Garbage Collection mode for PixiJS textures is AUTO
 * If set to GC_MODE, the renderer will occasionally check textures usage. If they are not
 * used for a specified period of time they will be removed from the GPU. They will of course
 * be uploaded again when they are required. This is a silent behind the scenes process that
 * should ensure that the GPU does not  get filled up.
 *
 * Handy for mobile devices!
 * This property only affects WebGL.
 *
 * @static
 * @constant
 * @name GC_MODES
 * @memberof PIXI
 * @type {object}
 * @property {number} AUTO - Garbage collection will happen periodically automatically
 * @property {number} MANUAL - Garbage collection will need to be called manually
 */
var GC_MODES = exports.GC_MODES = {
  AUTO: 0,
  MANUAL: 1
};

/**
 * Regexp for image type by extension.
 *
 * @static
 * @constant
 * @memberof PIXI
 * @type {RegExp|string}
 * @example `image.png`
 */
var URL_FILE_EXTENSION = exports.URL_FILE_EXTENSION = /\.(\w{3,4})(?:$|\?|#)/i;

/**
 * Regexp for data URI.
 * Based on: {@link https://github.com/ragingwind/data-uri-regex}
 *
 * @static
 * @constant
 * @name DATA_URI
 * @memberof PIXI
 * @type {RegExp|string}
 * @example data:image/png;base64
 */
var DATA_URI = exports.DATA_URI = /^\s*data:(?:([\w-]+)\/([\w+.-]+))?(?:;(charset=[\w-]+|base64))?,(.*)/i;

/**
 * Regexp for SVG size.
 *
 * @static
 * @constant
 * @name SVG_SIZE
 * @memberof PIXI
 * @type {RegExp|string}
 * @example &lt;svg width="100" height="100"&gt;&lt;/svg&gt;
 */
var SVG_SIZE = exports.SVG_SIZE = /<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i; // eslint-disable-line max-len

/**
 * Constants that identify shapes, mainly to prevent `instanceof` calls.
 *
 * @static
 * @constant
 * @name SHAPES
 * @memberof PIXI
 * @type {object}
 * @property {number} POLY Polygon
 * @property {number} RECT Rectangle
 * @property {number} CIRC Circle
 * @property {number} ELIP Ellipse
 * @property {number} RREC Rounded Rectangle
 */
var SHAPES = exports.SHAPES = {
  POLY: 0,
  RECT: 1,
  CIRC: 2,
  ELIP: 3,
  RREC: 4
};

/**
 * Constants that specify float precision in shaders.
 *
 * @static
 * @constant
 * @name PRECISION
 * @memberof PIXI
 * @type {object}
 * @property {string} LOW='lowp'
 * @property {string} MEDIUM='mediump'
 * @property {string} HIGH='highp'
 */
var PRECISION = exports.PRECISION = {
  LOW: 'lowp',
  MEDIUM: 'mediump',
  HIGH: 'highp'
};

/**
 * Constants that specify the transform type.
 *
 * @static
 * @constant
 * @name TRANSFORM_MODE
 * @memberof PIXI
 * @type {object}
 * @property {number} STATIC
 * @property {number} DYNAMIC
 */
var TRANSFORM_MODE = exports.TRANSFORM_MODE = {
  STATIC: 0,
  DYNAMIC: 1
};

/**
 * Constants that define the type of gradient on text.
 *
 * @static
 * @constant
 * @name TEXT_GRADIENT
 * @memberof PIXI
 * @type {object}
 * @property {number} LINEAR_VERTICAL Vertical gradient
 * @property {number} LINEAR_HORIZONTAL Linear gradient
 */
var TEXT_GRADIENT = exports.TEXT_GRADIENT = {
  LINEAR_VERTICAL: 0,
  LINEAR_HORIZONTAL: 1
};

/**
 * Represents the update priorities used by internal PIXI classes when registered with
 * the {@link PIXI.ticker.Ticker} object. Higher priority items are updated first and lower
 * priority items, such as render, should go later.
 *
 * @static
 * @constant
 * @name UPDATE_PRIORITY
 * @memberof PIXI
 * @type {object}
 * @property {number} INTERACTION=50 Highest priority, used for {@link PIXI.interaction.InteractionManager}
 * @property {number} HIGH=25 High priority updating, {@link PIXI.VideoBaseTexture} and {@link PIXI.extras.AnimatedSprite}
 * @property {number} NORMAL=0 Default priority for ticker events, see {@link PIXI.ticker.Ticker#add}.
 * @property {number} LOW=-25 Low priority used for {@link PIXI.Application} rendering.
 * @property {number} UTILITY=-50 Lowest priority used for {@link PIXI.prepare.BasePrepare} utility.
 */
var UPDATE_PRIORITY = exports.UPDATE_PRIORITY = {
  INTERACTION: 50,
  HIGH: 25,
  NORMAL: 0,
  LOW: -25,
  UTILITY: -50
};
//# sourceMappingURL=const.js.map

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.premultiplyBlendMode = exports.BaseTextureCache = exports.TextureCache = exports.mixins = exports.pluginTarget = exports.EventEmitter = exports.removeItems = exports.isMobile = undefined;
exports.uid = uid;
exports.hex2rgb = hex2rgb;
exports.hex2string = hex2string;
exports.rgb2hex = rgb2hex;
exports.getResolutionOfUrl = getResolutionOfUrl;
exports.decomposeDataUri = decomposeDataUri;
exports.getUrlFileExtension = getUrlFileExtension;
exports.getSvgSize = getSvgSize;
exports.skipHello = skipHello;
exports.sayHello = sayHello;
exports.isWebGLSupported = isWebGLSupported;
exports.sign = sign;
exports.destroyTextureCache = destroyTextureCache;
exports.clearTextureCache = clearTextureCache;
exports.correctBlendMode = correctBlendMode;
exports.premultiplyTint = premultiplyTint;
exports.premultiplyRgba = premultiplyRgba;
exports.premultiplyTintToRgba = premultiplyTintToRgba;

var _const = __webpack_require__(12);

var _settings = __webpack_require__(15);

var _settings2 = _interopRequireDefault(_settings);

var _eventemitter = __webpack_require__(18);

var _eventemitter2 = _interopRequireDefault(_eventemitter);

var _pluginTarget = __webpack_require__(90);

var _pluginTarget2 = _interopRequireDefault(_pluginTarget);

var _mixin = __webpack_require__(91);

var mixins = _interopRequireWildcard(_mixin);

var _ismobilejs = __webpack_require__(48);

var isMobile = _interopRequireWildcard(_ismobilejs);

var _removeArrayItems = __webpack_require__(92);

var _removeArrayItems2 = _interopRequireDefault(_removeArrayItems);

var _mapPremultipliedBlendModes = __webpack_require__(93);

var _mapPremultipliedBlendModes2 = _interopRequireDefault(_mapPremultipliedBlendModes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var nextUid = 0;
var saidHello = false;

/**
 * Generalized convenience utilities for PIXI.
 * @example
 * // Extend PIXI's internal Event Emitter.
 * class MyEmitter extends PIXI.utils.EventEmitter {
 *   constructor() {
 *      super();
 *      console.log("Emitter created!");
 *   }
 * }
 *
 * // Get info on current device
 * console.log(PIXI.utils.isMobile);
 *
 * // Convert hex color to string
 * console.log(PIXI.utils.hex2string(0xff00ff)); // returns: "#ff00ff"
 * @namespace PIXI.utils
 */
exports.isMobile = isMobile;
exports.removeItems = _removeArrayItems2.default;
exports.EventEmitter = _eventemitter2.default;
exports.pluginTarget = _pluginTarget2.default;
exports.mixins = mixins;

/**
 * Gets the next unique identifier
 *
 * @memberof PIXI.utils
 * @function uid
 * @return {number} The next unique identifier to use.
 */

function uid() {
    return ++nextUid;
}

/**
 * Converts a hex color number to an [R, G, B] array
 *
 * @memberof PIXI.utils
 * @function hex2rgb
 * @param {number} hex - The number to convert
 * @param  {number[]} [out=[]] If supplied, this array will be used rather than returning a new one
 * @return {number[]} An array representing the [R, G, B] of the color.
 */
function hex2rgb(hex, out) {
    out = out || [];

    out[0] = (hex >> 16 & 0xFF) / 255;
    out[1] = (hex >> 8 & 0xFF) / 255;
    out[2] = (hex & 0xFF) / 255;

    return out;
}

/**
 * Converts a hex color number to a string.
 *
 * @memberof PIXI.utils
 * @function hex2string
 * @param {number} hex - Number in hex
 * @return {string} The string color.
 */
function hex2string(hex) {
    hex = hex.toString(16);
    hex = '000000'.substr(0, 6 - hex.length) + hex;

    return '#' + hex;
}

/**
 * Converts a color as an [R, G, B] array to a hex number
 *
 * @memberof PIXI.utils
 * @function rgb2hex
 * @param {number[]} rgb - rgb array
 * @return {number} The color number
 */
function rgb2hex(rgb) {
    return (rgb[0] * 255 << 16) + (rgb[1] * 255 << 8) + (rgb[2] * 255 | 0);
}

/**
 * get the resolution / device pixel ratio of an asset by looking for the prefix
 * used by spritesheets and image urls
 *
 * @memberof PIXI.utils
 * @function getResolutionOfUrl
 * @param {string} url - the image path
 * @param {number} [defaultValue=1] - the defaultValue if no filename prefix is set.
 * @return {number} resolution / device pixel ratio of an asset
 */
function getResolutionOfUrl(url, defaultValue) {
    var resolution = _settings2.default.RETINA_PREFIX.exec(url);

    if (resolution) {
        return parseFloat(resolution[1]);
    }

    return defaultValue !== undefined ? defaultValue : 1;
}

/**
 * Typedef for decomposeDataUri return object.
 *
 * @typedef {object} DecomposedDataUri
 * @property {mediaType} Media type, eg. `image`
 * @property {subType} Sub type, eg. `png`
 * @property {encoding} Data encoding, eg. `base64`
 * @property {data} The actual data
 */

/**
 * Split a data URI into components. Returns undefined if
 * parameter `dataUri` is not a valid data URI.
 *
 * @memberof PIXI.utils
 * @function decomposeDataUri
 * @param {string} dataUri - the data URI to check
 * @return {DecomposedDataUri|undefined} The decomposed data uri or undefined
 */
function decomposeDataUri(dataUri) {
    var dataUriMatch = _const.DATA_URI.exec(dataUri);

    if (dataUriMatch) {
        return {
            mediaType: dataUriMatch[1] ? dataUriMatch[1].toLowerCase() : undefined,
            subType: dataUriMatch[2] ? dataUriMatch[2].toLowerCase() : undefined,
            encoding: dataUriMatch[3] ? dataUriMatch[3].toLowerCase() : undefined,
            data: dataUriMatch[4]
        };
    }

    return undefined;
}

/**
 * Get type of the image by regexp for extension. Returns undefined for unknown extensions.
 *
 * @memberof PIXI.utils
 * @function getUrlFileExtension
 * @param {string} url - the image path
 * @return {string|undefined} image extension
 */
function getUrlFileExtension(url) {
    var extension = _const.URL_FILE_EXTENSION.exec(url);

    if (extension) {
        return extension[1].toLowerCase();
    }

    return undefined;
}

/**
 * Typedef for Size object.
 *
 * @typedef {object} Size
 * @property {width} Width component
 * @property {height} Height component
 */

/**
 * Get size from an svg string using regexp.
 *
 * @memberof PIXI.utils
 * @function getSvgSize
 * @param {string} svgString - a serialized svg element
 * @return {Size|undefined} image extension
 */
function getSvgSize(svgString) {
    var sizeMatch = _const.SVG_SIZE.exec(svgString);
    var size = {};

    if (sizeMatch) {
        size[sizeMatch[1]] = Math.round(parseFloat(sizeMatch[3]));
        size[sizeMatch[5]] = Math.round(parseFloat(sizeMatch[7]));
    }

    return size;
}

/**
 * Skips the hello message of renderers that are created after this is run.
 *
 * @function skipHello
 * @memberof PIXI.utils
 */
function skipHello() {
    saidHello = true;
}

/**
 * Logs out the version and renderer information for this running instance of PIXI.
 * If you don't want to see this message you can run `PIXI.utils.skipHello()` before
 * creating your renderer. Keep in mind that doing that will forever makes you a jerk face.
 *
 * @static
 * @function sayHello
 * @memberof PIXI.utils
 * @param {string} type - The string renderer type to log.
 */
function sayHello(type) {
    if (saidHello) {
        return;
    }

    if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
        var args = ['\n %c %c %c PixiJS ' + _const.VERSION + ' - \u2730 ' + type + ' \u2730  %c  %c  http://www.pixijs.com/  %c %c \u2665%c\u2665%c\u2665 \n\n', 'background: #ff66a5; padding:5px 0;', 'background: #ff66a5; padding:5px 0;', 'color: #ff66a5; background: #030307; padding:5px 0;', 'background: #ff66a5; padding:5px 0;', 'background: #ffc3dc; padding:5px 0;', 'background: #ff66a5; padding:5px 0;', 'color: #ff2424; background: #fff; padding:5px 0;', 'color: #ff2424; background: #fff; padding:5px 0;', 'color: #ff2424; background: #fff; padding:5px 0;'];

        window.console.log.apply(console, args);
    } else if (window.console) {
        window.console.log('PixiJS ' + _const.VERSION + ' - ' + type + ' - http://www.pixijs.com/');
    }

    saidHello = true;
}

/**
 * Helper for checking for webgl support
 *
 * @memberof PIXI.utils
 * @function isWebGLSupported
 * @return {boolean} is webgl supported
 */
function isWebGLSupported() {
    var contextOptions = { stencil: true, failIfMajorPerformanceCaveat: true };

    try {
        if (!window.WebGLRenderingContext) {
            return false;
        }

        var canvas = document.createElement('canvas');
        var gl = canvas.getContext('webgl', contextOptions) || canvas.getContext('experimental-webgl', contextOptions);

        var success = !!(gl && gl.getContextAttributes().stencil);

        if (gl) {
            var loseContext = gl.getExtension('WEBGL_lose_context');

            if (loseContext) {
                loseContext.loseContext();
            }
        }

        gl = null;

        return success;
    } catch (e) {
        return false;
    }
}

/**
 * Returns sign of number
 *
 * @memberof PIXI.utils
 * @function sign
 * @param {number} n - the number to check the sign of
 * @returns {number} 0 if `n` is 0, -1 if `n` is negative, 1 if `n` is positive
 */
function sign(n) {
    if (n === 0) return 0;

    return n < 0 ? -1 : 1;
}

/**
 * @todo Describe property usage
 *
 * @memberof PIXI.utils
 * @private
 */
var TextureCache = exports.TextureCache = Object.create(null);

/**
 * @todo Describe property usage
 *
 * @memberof PIXI.utils
 * @private
 */
var BaseTextureCache = exports.BaseTextureCache = Object.create(null);

/**
 * Destroys all texture in the cache
 *
 * @memberof PIXI.utils
 * @function destroyTextureCache
 */
function destroyTextureCache() {
    var key = void 0;

    for (key in TextureCache) {
        TextureCache[key].destroy();
    }
    for (key in BaseTextureCache) {
        BaseTextureCache[key].destroy();
    }
}

/**
 * Removes all textures from cache, but does not destroy them
 *
 * @memberof PIXI.utils
 * @function clearTextureCache
 */
function clearTextureCache() {
    var key = void 0;

    for (key in TextureCache) {
        delete TextureCache[key];
    }
    for (key in BaseTextureCache) {
        delete BaseTextureCache[key];
    }
}

/**
 * maps premultiply flag and blendMode to adjusted blendMode
 * @memberof PIXI.utils
 * @const premultiplyBlendMode
 * @type {Array<number[]>}
 */
var premultiplyBlendMode = exports.premultiplyBlendMode = (0, _mapPremultipliedBlendModes2.default)();

/**
 * changes blendMode according to texture format
 *
 * @memberof PIXI.utils
 * @function correctBlendMode
 * @param {number} blendMode supposed blend mode
 * @param {boolean} premultiplied  whether source is premultiplied
 * @returns {number} true blend mode for this texture
 */
function correctBlendMode(blendMode, premultiplied) {
    return premultiplyBlendMode[premultiplied ? 1 : 0][blendMode];
}

/**
 * premultiplies tint
 *
 * @param {number} tint integet RGB
 * @param {number} alpha floating point alpha (0.0-1.0)
 * @returns {number} tint multiplied by alpha
 */
function premultiplyTint(tint, alpha) {
    if (alpha === 1.0) {
        return (alpha * 255 << 24) + tint;
    }
    if (alpha === 0.0) {
        return 0;
    }
    var R = tint >> 16 & 0xFF;
    var G = tint >> 8 & 0xFF;
    var B = tint & 0xFF;

    R = R * alpha + 0.5 | 0;
    G = G * alpha + 0.5 | 0;
    B = B * alpha + 0.5 | 0;

    return (alpha * 255 << 24) + (R << 16) + (G << 8) + B;
}

/**
 * combines rgb and alpha to out array
 *
 * @param {Float32Array|number[]} rgb input rgb
 * @param {number} alpha alpha param
 * @param {Float32Array} [out] output
 * @param {boolean} [premultiply=true] do premultiply it
 * @returns {Float32Array} vec4 rgba
 */
function premultiplyRgba(rgb, alpha, out, premultiply) {
    out = out || new Float32Array(4);
    if (premultiply || premultiply === undefined) {
        out[0] = rgb[0] * alpha;
        out[1] = rgb[1] * alpha;
        out[2] = rgb[2] * alpha;
    } else {
        out[0] = rgb[0];
        out[1] = rgb[1];
        out[2] = rgb[2];
    }
    out[3] = alpha;

    return out;
}

/**
 * converts integer tint and float alpha to vec4 form, premultiplies by default
 *
 * @param {number} tint input tint
 * @param {number} alpha alpha param
 * @param {Float32Array} [out] output
 * @param {boolean} [premultiply=true] do premultiply it
 * @returns {Float32Array} vec4 rgba
 */
function premultiplyTintToRgba(tint, alpha, out, premultiply) {
    out = out || new Float32Array(4);
    out[0] = (tint >> 16 & 0xFF) / 255.0;
    out[1] = (tint >> 8 & 0xFF) / 255.0;
    out[2] = (tint & 0xFF) / 255.0;
    if (premultiply || premultiply === undefined) {
        out[0] *= alpha;
        out[1] *= alpha;
        out[2] *= alpha;
    }
    out[3] = alpha;

    return out;
}
//# sourceMappingURL=index.js.map

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Point = __webpack_require__(26);

Object.defineProperty(exports, 'Point', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Point).default;
  }
});

var _ObservablePoint = __webpack_require__(77);

Object.defineProperty(exports, 'ObservablePoint', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ObservablePoint).default;
  }
});

var _Matrix = __webpack_require__(36);

Object.defineProperty(exports, 'Matrix', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Matrix).default;
  }
});

var _GroupD = __webpack_require__(37);

Object.defineProperty(exports, 'GroupD8', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_GroupD).default;
  }
});

var _Circle = __webpack_require__(78);

Object.defineProperty(exports, 'Circle', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Circle).default;
  }
});

var _Ellipse = __webpack_require__(79);

Object.defineProperty(exports, 'Ellipse', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Ellipse).default;
  }
});

var _Polygon = __webpack_require__(80);

Object.defineProperty(exports, 'Polygon', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Polygon).default;
  }
});

var _Rectangle = __webpack_require__(27);

Object.defineProperty(exports, 'Rectangle', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Rectangle).default;
  }
});

var _RoundedRectangle = __webpack_require__(81);

Object.defineProperty(exports, 'RoundedRectangle', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_RoundedRectangle).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=index.js.map

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _maxRecommendedTextures = __webpack_require__(88);

var _maxRecommendedTextures2 = _interopRequireDefault(_maxRecommendedTextures);

var _canUploadSameBuffer = __webpack_require__(89);

var _canUploadSameBuffer2 = _interopRequireDefault(_canUploadSameBuffer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * User's customizable globals for overriding the default PIXI settings, such
 * as a renderer's default resolution, framerate, float percision, etc.
 * @example
 * // Use the native window resolution as the default resolution
 * // will support high-density displays when rendering
 * PIXI.settings.RESOLUTION = window.devicePixelRatio.
 *
 * // Disable interpolation when scaling, will make texture be pixelated
 * PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
 * @namespace PIXI.settings
 */
exports.default = {

  /**
   * Target frames per millisecond.
   *
   * @static
   * @memberof PIXI.settings
   * @type {number}
   * @default 0.06
   */
  TARGET_FPMS: 0.06,

  /**
   * If set to true WebGL will attempt make textures mimpaped by default.
   * Mipmapping will only succeed if the base texture uploaded has power of two dimensions.
   *
   * @static
   * @memberof PIXI.settings
   * @type {boolean}
   * @default true
   */
  MIPMAP_TEXTURES: true,

  /**
   * Default resolution / device pixel ratio of the renderer.
   *
   * @static
   * @memberof PIXI.settings
   * @type {number}
   * @default 1
   */
  RESOLUTION: 1,

  /**
   * Default filter resolution.
   *
   * @static
   * @memberof PIXI.settings
   * @type {number}
   * @default 1
   */
  FILTER_RESOLUTION: 1,

  /**
   * The maximum textures that this device supports.
   *
   * @static
   * @memberof PIXI.settings
   * @type {number}
   * @default 32
   */
  SPRITE_MAX_TEXTURES: (0, _maxRecommendedTextures2.default)(32),

  // TODO: maybe change to SPRITE.BATCH_SIZE: 2000
  // TODO: maybe add PARTICLE.BATCH_SIZE: 15000

  /**
   * The default sprite batch size.
   *
   * The default aims to balance desktop and mobile devices.
   *
   * @static
   * @memberof PIXI.settings
   * @type {number}
   * @default 4096
   */
  SPRITE_BATCH_SIZE: 4096,

  /**
   * The prefix that denotes a URL is for a retina asset.
   *
   * @static
   * @memberof PIXI.settings
   * @type {RegExp}
   * @example `@2x`
   * @default /@([0-9\.]+)x/
   */
  RETINA_PREFIX: /@([0-9\.]+)x/,

  /**
   * The default render options if none are supplied to {@link PIXI.WebGLRenderer}
   * or {@link PIXI.CanvasRenderer}.
   *
   * @static
   * @constant
   * @memberof PIXI.settings
   * @type {object}
   * @property {HTMLCanvasElement} view=null
   * @property {number} resolution=1
   * @property {boolean} antialias=false
   * @property {boolean} forceFXAA=false
   * @property {boolean} autoResize=false
   * @property {boolean} transparent=false
   * @property {number} backgroundColor=0x000000
   * @property {boolean} clearBeforeRender=true
   * @property {boolean} preserveDrawingBuffer=false
   * @property {boolean} roundPixels=false
   * @property {number} width=800
   * @property {number} height=600
   * @property {boolean} legacy=false
   */
  RENDER_OPTIONS: {
    view: null,
    antialias: false,
    forceFXAA: false,
    autoResize: false,
    transparent: false,
    backgroundColor: 0x000000,
    clearBeforeRender: true,
    preserveDrawingBuffer: false,
    roundPixels: false,
    width: 800,
    height: 600,
    legacy: false
  },

  /**
   * Default transform type.
   *
   * @static
   * @memberof PIXI.settings
   * @type {PIXI.TRANSFORM_MODE}
   * @default PIXI.TRANSFORM_MODE.STATIC
   */
  TRANSFORM_MODE: 0,

  /**
   * Default Garbage Collection mode.
   *
   * @static
   * @memberof PIXI.settings
   * @type {PIXI.GC_MODES}
   * @default PIXI.GC_MODES.AUTO
   */
  GC_MODE: 0,

  /**
   * Default Garbage Collection max idle.
   *
   * @static
   * @memberof PIXI.settings
   * @type {number}
   * @default 3600
   */
  GC_MAX_IDLE: 60 * 60,

  /**
   * Default Garbage Collection maximum check count.
   *
   * @static
   * @memberof PIXI.settings
   * @type {number}
   * @default 600
   */
  GC_MAX_CHECK_COUNT: 60 * 10,

  /**
   * Default wrap modes that are supported by pixi.
   *
   * @static
   * @memberof PIXI.settings
   * @type {PIXI.WRAP_MODES}
   * @default PIXI.WRAP_MODES.CLAMP
   */
  WRAP_MODE: 0,

  /**
   * The scale modes that are supported by pixi.
   *
   * @static
   * @memberof PIXI.settings
   * @type {PIXI.SCALE_MODES}
   * @default PIXI.SCALE_MODES.LINEAR
   */
  SCALE_MODE: 0,

  /**
   * Default specify float precision in vertex shader.
   *
   * @static
   * @memberof PIXI.settings
   * @type {PIXI.PRECISION}
   * @default PIXI.PRECISION.HIGH
   */
  PRECISION_VERTEX: 'highp',

  /**
   * Default specify float precision in fragment shader.
   *
   * @static
   * @memberof PIXI.settings
   * @type {PIXI.PRECISION}
   * @default PIXI.PRECISION.MEDIUM
   */
  PRECISION_FRAGMENT: 'mediump',

  /**
   * Can we upload the same buffer in a single frame?
   *
   * @static
   * @constant
   * @memberof PIXI
   * @type {boolean}
   */
  CAN_UPLOAD_SAME_BUFFER: (0, _canUploadSameBuffer2.default)()

};
//# sourceMappingURL=settings.js.map

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var gl = {
    createContext:          __webpack_require__(82),
    setVertexAttribArrays:  __webpack_require__(38),
    GLBuffer:               __webpack_require__(83),
    GLFramebuffer:          __webpack_require__(84),
    GLShader:               __webpack_require__(85),
    GLTexture:              __webpack_require__(39),
    VertexArrayObject:      __webpack_require__(86),
    shader:                 __webpack_require__(87)
};

// Export for Node-compatible environments
if (typeof module !== 'undefined' && module.exports)
{
    // Export the module
    module.exports = gl;
}

// Add to the browser window pixi.gl
if (typeof window !== 'undefined')
{
    // add the window object
    window.PIXI = window.PIXI || {};
    window.PIXI.glCore = gl;
}


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.loader = exports.prepare = exports.particles = exports.mesh = exports.loaders = exports.interaction = exports.filters = exports.extras = exports.extract = exports.accessibility = undefined;

var _polyfill = __webpack_require__(71);

Object.keys(_polyfill).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _polyfill[key];
        }
    });
});

var _core = __webpack_require__(76);

Object.keys(_core).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _core[key];
        }
    });
});
/*
var _deprecation = require('./deprecation');

var _deprecation2 = _interopRequireDefault(_deprecation);

var _accessibility = require('./accessibility');

var accessibility = _interopRequireWildcard(_accessibility);

var _extract = require('./extract');

var extract = _interopRequireWildcard(_extract);

var _extras = require('./extras');

var extras = _interopRequireWildcard(_extras);

var _filters = require('./filters');

var filters = _interopRequireWildcard(_filters);

var _interaction = require('./interaction');

var interaction = _interopRequireWildcard(_interaction);

var _loaders = require('./loaders');

var loaders = _interopRequireWildcard(_loaders);

var _mesh = require('./mesh');

var mesh = _interopRequireWildcard(_mesh);

var _particles = require('./particles');

var particles = _interopRequireWildcard(_particles);

var _prepare = require('./prepare');

var prepare = _interopRequireWildcard(_prepare);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// export core
_core.utils.mixins.performMixins();

/**
 * Alias for {@link PIXI.loaders.shared}.
 * @name loader
 * @memberof PIXI
 * @type {PIXI.loader.Loader}
 */


// handle mixins now, after all code has been added, including deprecation


// export libs
// import polyfills. Done as an export to make sure polyfills are imported first
/*var loader = loaders.shared || null;

exports.accessibility = accessibility;
exports.extract = extract;
exports.extras = extras;
exports.filters = filters;
exports.interaction = interaction;
exports.loaders = loaders;
exports.mesh = mesh;
exports.particles = particles;
exports.prepare = prepare;
exports.loader = loader;

// Apply the deprecations

if (typeof _deprecation2.default === 'function') {
    (0, _deprecation2.default)(exports);
}

// Always export PixiJS globally.
global.PIXI = exports; // eslint-disable-line
//# sourceMappingURL=index.js.map*/


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @api private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {Mixed} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @api private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @api public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @api public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Boolean} exists Only check if there are listeners.
 * @returns {Array|Boolean}
 * @api public
 */
EventEmitter.prototype.listeners = function listeners(event, exists) {
  var evt = prefix ? prefix + event : event
    , available = this._events[evt];

  if (exists) return !!available;
  if (!available) return [];
  if (available.fn) return [available.fn];

  for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
    ee[i] = available[i].fn;
  }

  return ee;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @api public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn The listener function.
 * @param {Mixed} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  var listener = new EE(fn, context || this)
    , evt = prefix ? prefix + event : event;

  if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
  else if (!this._events[evt].fn) this._events[evt].push(listener);
  else this._events[evt] = [this._events[evt], listener];

  return this;
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn The listener function.
 * @param {Mixed} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  var listener = new EE(fn, context || this, true)
    , evt = prefix ? prefix + event : event;

  if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
  else if (!this._events[evt].fn) this._events[evt].push(listener);
  else this._events[evt] = [this._events[evt], listener];

  return this;
};

/**
 * Remove the listeners of a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {Mixed} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    if (--this._eventsCount === 0) this._events = new Events();
    else delete this._events[evt];
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
         listeners.fn === fn
      && (!once || listeners.once)
      && (!context || listeners.context === context)
    ) {
      if (--this._eventsCount === 0) this._events = new Events();
      else delete this._events[evt];
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
           listeners[i].fn !== fn
        || (once && !listeners[i].once)
        || (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else if (--this._eventsCount === 0) this._events = new Events();
    else delete this._events[evt];
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {String|Symbol} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) {
      if (--this._eventsCount === 0) this._events = new Events();
      else delete this._events[evt];
    }
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// This function doesn't apply anymore.
//
EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
  return this;
};

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if (true) {
  module.exports = EventEmitter;
}


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(13);

var _DisplayObject2 = __webpack_require__(47);

var _DisplayObject3 = _interopRequireDefault(_DisplayObject2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A Container represents a collection of display objects.
 * It is the base class of all display objects that act as a container for other objects.
 *
 *```js
 * let container = new PIXI.Container();
 * container.addChild(sprite);
 * ```
 *
 * @class
 * @extends PIXI.DisplayObject
 * @memberof PIXI
 */
var Container = function (_DisplayObject) {
    _inherits(Container, _DisplayObject);

    /**
     *
     */
    function Container() {
        _classCallCheck(this, Container);

        /**
         * The array of children of this container.
         *
         * @member {PIXI.DisplayObject[]}
         * @readonly
         */
        var _this = _possibleConstructorReturn(this, _DisplayObject.call(this));

        _this.children = [];
        return _this;
    }

    /**
     * Overridable method that can be used by Container subclasses whenever the children array is modified
     *
     * @private
     */


    Container.prototype.onChildrenChange = function onChildrenChange() {}
    /* empty */


    /**
     * Adds one or more children to the container.
     *
     * Multiple items can be added like so: `myContainer.addChild(thingOne, thingTwo, thingThree)`
     *
     * @param {...PIXI.DisplayObject} child - The DisplayObject(s) to add to the container
     * @return {PIXI.DisplayObject} The first child that was added.
     */
    ;

    Container.prototype.addChild = function addChild(child) {
        var argumentsLength = arguments.length;

        // if there is only one argument we can bypass looping through the them
        if (argumentsLength > 1) {
            // loop through the arguments property and add all children
            // use it the right way (.length and [i]) so that this function can still be optimised by JS runtimes
            for (var i = 0; i < argumentsLength; i++) {
                this.addChild(arguments[i]);
            }
        } else {
            // if the child has a parent then lets remove it as PixiJS objects can only exist in one place
            if (child.parent) {
                child.parent.removeChild(child);
            }

            child.parent = this;
            // ensure child transform will be recalculated
            child.transform._parentID = -1;

            this.children.push(child);

            // ensure bounds will be recalculated
            this._boundsID++;

            // TODO - lets either do all callbacks or all events.. not both!
            this.onChildrenChange(this.children.length - 1);
            child.emit('added', this);
        }

        return child;
    };

    /**
     * Adds a child to the container at a specified index. If the index is out of bounds an error will be thrown
     *
     * @param {PIXI.DisplayObject} child - The child to add
     * @param {number} index - The index to place the child in
     * @return {PIXI.DisplayObject} The child that was added.
     */


    Container.prototype.addChildAt = function addChildAt(child, index) {
        if (index < 0 || index > this.children.length) {
            throw new Error(child + 'addChildAt: The index ' + index + ' supplied is out of bounds ' + this.children.length);
        }

        if (child.parent) {
            child.parent.removeChild(child);
        }

        child.parent = this;
        // ensure child transform will be recalculated
        child.transform._parentID = -1;

        this.children.splice(index, 0, child);

        // ensure bounds will be recalculated
        this._boundsID++;

        // TODO - lets either do all callbacks or all events.. not both!
        this.onChildrenChange(index);
        child.emit('added', this);

        return child;
    };

    /**
     * Swaps the position of 2 Display Objects within this container.
     *
     * @param {PIXI.DisplayObject} child - First display object to swap
     * @param {PIXI.DisplayObject} child2 - Second display object to swap
     */


    Container.prototype.swapChildren = function swapChildren(child, child2) {
        if (child === child2) {
            return;
        }

        var index1 = this.getChildIndex(child);
        var index2 = this.getChildIndex(child2);

        this.children[index1] = child2;
        this.children[index2] = child;
        this.onChildrenChange(index1 < index2 ? index1 : index2);
    };

    /**
     * Returns the index position of a child DisplayObject instance
     *
     * @param {PIXI.DisplayObject} child - The DisplayObject instance to identify
     * @return {number} The index position of the child display object to identify
     */


    Container.prototype.getChildIndex = function getChildIndex(child) {
        var index = this.children.indexOf(child);

        if (index === -1) {
            throw new Error('The supplied DisplayObject must be a child of the caller');
        }

        return index;
    };

    /**
     * Changes the position of an existing child in the display object container
     *
     * @param {PIXI.DisplayObject} child - The child DisplayObject instance for which you want to change the index number
     * @param {number} index - The resulting index number for the child display object
     */


    Container.prototype.setChildIndex = function setChildIndex(child, index) {
        if (index < 0 || index >= this.children.length) {
            throw new Error('The supplied index is out of bounds');
        }

        var currentIndex = this.getChildIndex(child);

        (0, _utils.removeItems)(this.children, currentIndex, 1); // remove from old position
        this.children.splice(index, 0, child); // add at new position

        this.onChildrenChange(index);
    };

    /**
     * Returns the child at the specified index
     *
     * @param {number} index - The index to get the child at
     * @return {PIXI.DisplayObject} The child at the given index, if any.
     */


    Container.prototype.getChildAt = function getChildAt(index) {
        if (index < 0 || index >= this.children.length) {
            throw new Error('getChildAt: Index (' + index + ') does not exist.');
        }

        return this.children[index];
    };

    /**
     * Removes one or more children from the container.
     *
     * @param {...PIXI.DisplayObject} child - The DisplayObject(s) to remove
     * @return {PIXI.DisplayObject} The first child that was removed.
     */


    Container.prototype.removeChild = function removeChild(child) {
        var argumentsLength = arguments.length;

        // if there is only one argument we can bypass looping through the them
        if (argumentsLength > 1) {
            // loop through the arguments property and add all children
            // use it the right way (.length and [i]) so that this function can still be optimised by JS runtimes
            for (var i = 0; i < argumentsLength; i++) {
                this.removeChild(arguments[i]);
            }
        } else {
            var index = this.children.indexOf(child);

            if (index === -1) return null;

            child.parent = null;
            // ensure child transform will be recalculated
            child.transform._parentID = -1;
            (0, _utils.removeItems)(this.children, index, 1);

            // ensure bounds will be recalculated
            this._boundsID++;

            // TODO - lets either do all callbacks or all events.. not both!
            this.onChildrenChange(index);
            child.emit('removed', this);
        }

        return child;
    };

    /**
     * Removes a child from the specified index position.
     *
     * @param {number} index - The index to get the child from
     * @return {PIXI.DisplayObject} The child that was removed.
     */


    Container.prototype.removeChildAt = function removeChildAt(index) {
        var child = this.getChildAt(index);

        // ensure child transform will be recalculated..
        child.parent = null;
        child.transform._parentID = -1;
        (0, _utils.removeItems)(this.children, index, 1);

        // ensure bounds will be recalculated
        this._boundsID++;

        // TODO - lets either do all callbacks or all events.. not both!
        this.onChildrenChange(index);
        child.emit('removed', this);

        return child;
    };

    /**
     * Removes all children from this container that are within the begin and end indexes.
     *
     * @param {number} [beginIndex=0] - The beginning position.
     * @param {number} [endIndex=this.children.length] - The ending position. Default value is size of the container.
     * @returns {DisplayObject[]} List of removed children
     */


    Container.prototype.removeChildren = function removeChildren() {
        var beginIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var endIndex = arguments[1];

        var begin = beginIndex;
        var end = typeof endIndex === 'number' ? endIndex : this.children.length;
        var range = end - begin;
        var removed = void 0;

        if (range > 0 && range <= end) {
            removed = this.children.splice(begin, range);

            for (var i = 0; i < removed.length; ++i) {
                removed[i].parent = null;
                if (removed[i].transform) {
                    removed[i].transform._parentID = -1;
                }
            }

            this._boundsID++;

            this.onChildrenChange(beginIndex);

            for (var _i = 0; _i < removed.length; ++_i) {
                removed[_i].emit('removed', this);
            }

            return removed;
        } else if (range === 0 && this.children.length === 0) {
            return [];
        }

        throw new RangeError('removeChildren: numeric values are outside the acceptable range.');
    };

    /**
     * Updates the transform on all children of this container for rendering
     */


    Container.prototype.updateTransform = function updateTransform() {
        this._boundsID++;

        this.transform.updateTransform(this.parent.transform);

        // TODO: check render flags, how to process stuff here
        this.worldAlpha = this.alpha * this.parent.worldAlpha;

        for (var i = 0, j = this.children.length; i < j; ++i) {
            var child = this.children[i];

            if (child.visible) {
                child.updateTransform();
            }
        }
    };

    /**
     * Recalculates the bounds of the container.
     *
     */


    Container.prototype.calculateBounds = function calculateBounds() {
        this._bounds.clear();

        this._calculateBounds();

        for (var i = 0; i < this.children.length; i++) {
            var child = this.children[i];

            if (!child.visible || !child.renderable) {
                continue;
            }

            child.calculateBounds();

            // TODO: filter+mask, need to mask both somehow
            if (child._mask) {
                child._mask.calculateBounds();
                this._bounds.addBoundsMask(child._bounds, child._mask._bounds);
            } else if (child.filterArea) {
                this._bounds.addBoundsArea(child._bounds, child.filterArea);
            } else {
                this._bounds.addBounds(child._bounds);
            }
        }

        this._lastBoundsID = this._boundsID;
    };

    /**
     * Recalculates the bounds of the object. Override this to
     * calculate the bounds of the specific object (not including children).
     *
     */


    Container.prototype._calculateBounds = function _calculateBounds() {}
    // FILL IN//


    /**
     * Renders the object using the WebGL renderer
     *
     * @param {PIXI.WebGLRenderer} renderer - The renderer
     */
    ;

    Container.prototype.renderWebGL = function renderWebGL(renderer) {
        // if the object is not visible or the alpha is 0 then no need to render this element
        if (!this.visible || this.worldAlpha <= 0 || !this.renderable) {
            return;
        }

        // do a quick check to see if this element has a mask or a filter.
        if (this._mask || this._filters) {
            this.renderAdvancedWebGL(renderer);
        } else {
            this._renderWebGL(renderer);

            // simple render children!
            for (var i = 0, j = this.children.length; i < j; ++i) {
                this.children[i].renderWebGL(renderer);
            }
        }
    };

    /**
     * Render the object using the WebGL renderer and advanced features.
     *
     * @private
     * @param {PIXI.WebGLRenderer} renderer - The renderer
     */


    Container.prototype.renderAdvancedWebGL = function renderAdvancedWebGL(renderer) {
        renderer.flush();

        var filters = this._filters;
        var mask = this._mask;

        // push filter first as we need to ensure the stencil buffer is correct for any masking
        if (filters) {
            if (!this._enabledFilters) {
                this._enabledFilters = [];
            }

            this._enabledFilters.length = 0;

            for (var i = 0; i < filters.length; i++) {
                if (filters[i].enabled) {
                    this._enabledFilters.push(filters[i]);
                }
            }

            if (this._enabledFilters.length) {
                renderer.filterManager.pushFilter(this, this._enabledFilters);
            }
        }

        if (mask) {
            renderer.maskManager.pushMask(this, this._mask);
        }

        // add this object to the batch, only rendered if it has a texture.
        this._renderWebGL(renderer);

        // now loop through the children and make sure they get rendered
        for (var _i2 = 0, j = this.children.length; _i2 < j; _i2++) {
            this.children[_i2].renderWebGL(renderer);
        }

        renderer.flush();

        if (mask) {
            renderer.maskManager.popMask(this, this._mask);
        }

        if (filters && this._enabledFilters && this._enabledFilters.length) {
            renderer.filterManager.popFilter();
        }
    };

    /**
     * To be overridden by the subclasses.
     *
     * @private
     * @param {PIXI.WebGLRenderer} renderer - The renderer
     */


    Container.prototype._renderWebGL = function _renderWebGL(renderer) // eslint-disable-line no-unused-vars
    {}
    // this is where content itself gets rendered...


    /**
     * To be overridden by the subclass
     *
     * @private
     * @param {PIXI.CanvasRenderer} renderer - The renderer
     */
    ;

    Container.prototype._renderCanvas = function _renderCanvas(renderer) // eslint-disable-line no-unused-vars
    {}
    // this is where content itself gets rendered...


    /**
     * Renders the object using the Canvas renderer
     *
     * @param {PIXI.CanvasRenderer} renderer - The renderer
     */
    ;

    Container.prototype.renderCanvas = function renderCanvas(renderer) {
        // if not visible or the alpha is 0 then no need to render this
        if (!this.visible || this.worldAlpha <= 0 || !this.renderable) {
            return;
        }

        if (this._mask) {
            renderer.maskManager.pushMask(this._mask);
        }

        this._renderCanvas(renderer);
        for (var i = 0, j = this.children.length; i < j; ++i) {
            this.children[i].renderCanvas(renderer);
        }

        if (this._mask) {
            renderer.maskManager.popMask(renderer);
        }
    };

    /**
     * Removes all internal references and listeners as well as removes children from the display list.
     * Do not use a Container after calling `destroy`.
     *
     * @param {object|boolean} [options] - Options parameter. A boolean will act as if all options
     *  have been set to that value
     * @param {boolean} [options.children=false] - if set to true, all the children will have their destroy
     *  method called as well. 'options' will be passed on to those calls.
     * @param {boolean} [options.texture=false] - Only used for child Sprites if options.children is set to true
     *  Should it destroy the texture of the child sprite
     * @param {boolean} [options.baseTexture=false] - Only used for child Sprites if options.children is set to true
     *  Should it destroy the base texture of the child sprite
     */


    Container.prototype.destroy = function destroy(options) {
        _DisplayObject.prototype.destroy.call(this);

        var destroyChildren = typeof options === 'boolean' ? options : options && options.children;

        var oldChildren = this.removeChildren(0, this.children.length);

        if (destroyChildren) {
            for (var i = 0; i < oldChildren.length; ++i) {
                oldChildren[i].destroy(options);
            }
        }
    };

    /**
     * The width of the Container, setting this will actually modify the scale to achieve the value set
     *
     * @member {number}
     */


    _createClass(Container, [{
        key: 'width',
        get: function get() {
            return this.scale.x * this.getLocalBounds().width;
        },
        set: function set(value) // eslint-disable-line require-jsdoc
        {
            var width = this.getLocalBounds().width;

            if (width !== 0) {
                this.scale.x = value / width;
            } else {
                this.scale.x = 1;
            }

            this._width = value;
        }

        /**
         * The height of the Container, setting this will actually modify the scale to achieve the value set
         *
         * @member {number}
         */

    }, {
        key: 'height',
        get: function get() {
            return this.scale.y * this.getLocalBounds().height;
        },
        set: function set(value) // eslint-disable-line require-jsdoc
        {
            var height = this.getLocalBounds().height;

            if (height !== 0) {
                this.scale.y = value / height;
            } else {
                this.scale.y = 1;
            }

            this._height = value;
        }
    }]);

    return Container;
}(_DisplayObject3.default);

// performance increase to avoid using call.. (10x faster)


exports.default = Container;
Container.prototype.containerUpdateTransform = Container.prototype.updateTransform;
//# sourceMappingURL=Container.js.map

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class
 * @memberof PIXI
 */
var WebGLManager = function () {
  /**
   * @param {PIXI.WebGLRenderer} renderer - The renderer this manager works for.
   */
  function WebGLManager(renderer) {
    _classCallCheck(this, WebGLManager);

    /**
     * The renderer this manager works for.
     *
     * @member {PIXI.WebGLRenderer}
     */
    this.renderer = renderer;

    this.renderer.on('context', this.onContextChange, this);
  }

  /**
   * Generic method called when there is a WebGL context change.
   *
   */


  WebGLManager.prototype.onContextChange = function onContextChange() {}
  // do some codes init!


  /**
   * Generic destroy methods to be overridden by the subclass
   *
   */
  ;

  WebGLManager.prototype.destroy = function destroy() {
    this.renderer.off('context', this.onContextChange, this);

    this.renderer = null;
  };

  return WebGLManager;
}();

exports.default = WebGLManager;
//# sourceMappingURL=WebGLManager.js.map

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _utils = __webpack_require__(13);

var _settings = __webpack_require__(15);

var _settings2 = _interopRequireDefault(_settings);

var _eventemitter = __webpack_require__(18);

var _eventemitter2 = _interopRequireDefault(_eventemitter);

var _determineCrossOrigin = __webpack_require__(96);

var _determineCrossOrigin2 = _interopRequireDefault(_determineCrossOrigin);

var _bitTwiddle = __webpack_require__(52);

var _bitTwiddle2 = _interopRequireDefault(_bitTwiddle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A texture stores the information that represents an image. All textures have a base texture.
 *
 * @class
 * @extends EventEmitter
 * @memberof PIXI
 */
var BaseTexture = function (_EventEmitter) {
    _inherits(BaseTexture, _EventEmitter);

    /**
     * @param {HTMLImageElement|HTMLCanvasElement} [source] - the source object of the texture.
     * @param {number} [scaleMode=PIXI.settings.SCALE_MODE] - See {@link PIXI.SCALE_MODES} for possible values
     * @param {number} [resolution=1] - The resolution / device pixel ratio of the texture
     */
    function BaseTexture(source, scaleMode, resolution) {
        _classCallCheck(this, BaseTexture);

        var _this = _possibleConstructorReturn(this, _EventEmitter.call(this));

        _this.uid = (0, _utils.uid)();

        _this.touched = 0;

        /**
         * The resolution / device pixel ratio of the texture
         *
         * @member {number}
         * @default 1
         */
        _this.resolution = resolution || _settings2.default.RESOLUTION;

        /**
         * The width of the base texture set when the image has loaded
         *
         * @readonly
         * @member {number}
         */
        _this.width = 100;

        /**
         * The height of the base texture set when the image has loaded
         *
         * @readonly
         * @member {number}
         */
        _this.height = 100;

        // TODO docs
        // used to store the actual dimensions of the source
        /**
         * Used to store the actual width of the source of this texture
         *
         * @readonly
         * @member {number}
         */
        _this.realWidth = 100;
        /**
         * Used to store the actual height of the source of this texture
         *
         * @readonly
         * @member {number}
         */
        _this.realHeight = 100;

        /**
         * The scale mode to apply when scaling this texture
         *
         * @member {number}
         * @default PIXI.settings.SCALE_MODE
         * @see PIXI.SCALE_MODES
         */
        _this.scaleMode = scaleMode !== undefined ? scaleMode : _settings2.default.SCALE_MODE;

        /**
         * Set to true once the base texture has successfully loaded.
         *
         * This is never true if the underlying source fails to load or has no texture data.
         *
         * @readonly
         * @member {boolean}
         */
        _this.hasLoaded = false;

        /**
         * Set to true if the source is currently loading.
         *
         * If an Image source is loading the 'loaded' or 'error' event will be
         * dispatched when the operation ends. An underyling source that is
         * immediately-available bypasses loading entirely.
         *
         * @readonly
         * @member {boolean}
         */
        _this.isLoading = false;

        /**
         * The image source that is used to create the texture.
         *
         * TODO: Make this a setter that calls loadSource();
         *
         * @readonly
         * @member {HTMLImageElement|HTMLCanvasElement}
         */
        _this.source = null; // set in loadSource, if at all

        /**
         * The image source that is used to create the texture. This is used to
         * store the original Svg source when it is replaced with a canvas element.
         *
         * TODO: Currently not in use but could be used when re-scaling svg.
         *
         * @readonly
         * @member {Image}
         */
        _this.origSource = null; // set in loadSvg, if at all

        /**
         * Type of image defined in source, eg. `png` or `svg`
         *
         * @readonly
         * @member {string}
         */
        _this.imageType = null; // set in updateImageType

        /**
         * Scale for source image. Used with Svg images to scale them before rasterization.
         *
         * @readonly
         * @member {number}
         */
        _this.sourceScale = 1.0;

        /**
         * Controls if RGB channels should be pre-multiplied by Alpha  (WebGL only)
         * All blend modes, and shaders written for default value. Change it on your own risk.
         *
         * @member {boolean}
         * @default true
         */
        _this.premultipliedAlpha = true;

        /**
         * The image url of the texture
         *
         * @member {string}
         */
        _this.imageUrl = null;

        /**
         * Whether or not the texture is a power of two, try to use power of two textures as much
         * as you can
         *
         * @private
         * @member {boolean}
         */
        _this.isPowerOfTwo = false;

        // used for webGL

        /**
         *
         * Set this to true if a mipmap of this texture needs to be generated. This value needs
         * to be set before the texture is used
         * Also the texture must be a power of two size to work
         *
         * @member {boolean}
         * @see PIXI.MIPMAP_TEXTURES
         */
        _this.mipmap = _settings2.default.MIPMAP_TEXTURES;

        /**
         *
         * WebGL Texture wrap mode
         *
         * @member {number}
         * @see PIXI.WRAP_MODES
         */
        _this.wrapMode = _settings2.default.WRAP_MODE;

        /**
         * A map of renderer IDs to webgl textures
         *
         * @private
         * @member {object<number, WebGLTexture>}
         */
        _this._glTextures = {};

        _this._enabled = 0;
        _this._virtalBoundId = -1;

        /**
         * If the object has been destroyed via destroy(). If true, it should not be used.
         *
         * @member {boolean}
         * @private
         * @readonly
         */
        _this._destroyed = false;

        /**
         * The ids under which this BaseTexture has been added to the base texture cache. This is
         * automatically set as long as BaseTexture.addToCache is used, but may not be set if a
         * BaseTexture is added directly to the BaseTextureCache array.
         *
         * @member {string[]}
         */
        _this.textureCacheIds = [];

        // if no source passed don't try to load
        if (source) {
            _this.loadSource(source);
        }

        /**
         * Fired when a not-immediately-available source finishes loading.
         *
         * @protected
         * @event PIXI.BaseTexture#loaded
         * @param {PIXI.BaseTexture} baseTexture - Resource loaded.
         */

        /**
         * Fired when a not-immediately-available source fails to load.
         *
         * @protected
         * @event PIXI.BaseTexture#error
         * @param {PIXI.BaseTexture} baseTexture - Resource errored.
         */

        /**
         * Fired when BaseTexture is updated.
         *
         * @protected
         * @event PIXI.BaseTexture#update
         * @param {PIXI.BaseTexture} baseTexture - Instance of texture being updated.
         */

        /**
         * Fired when BaseTexture is destroyed.
         *
         * @protected
         * @event PIXI.BaseTexture#dispose
         * @param {PIXI.BaseTexture} baseTexture - Instance of texture being destroyed.
         */
        return _this;
    }

    /**
     * Updates the texture on all the webgl renderers, this also assumes the src has changed.
     *
     * @fires PIXI.BaseTexture#update
     */


    BaseTexture.prototype.update = function update() {
        // Svg size is handled during load
        if (this.imageType !== 'svg') {
            this.realWidth = this.source.naturalWidth || this.source.videoWidth || this.source.width;
            this.realHeight = this.source.naturalHeight || this.source.videoHeight || this.source.height;

            this._updateDimensions();
        }

        this.emit('update', this);
    };

    /**
     * Update dimensions from real values
     */


    BaseTexture.prototype._updateDimensions = function _updateDimensions() {
        this.width = this.realWidth / this.resolution;
        this.height = this.realHeight / this.resolution;

        this.isPowerOfTwo = _bitTwiddle2.default.isPow2(this.realWidth) && _bitTwiddle2.default.isPow2(this.realHeight);
    };

    /**
     * Load a source.
     *
     * If the source is not-immediately-available, such as an image that needs to be
     * downloaded, then the 'loaded' or 'error' event will be dispatched in the future
     * and `hasLoaded` will remain false after this call.
     *
     * The logic state after calling `loadSource` directly or indirectly (eg. `fromImage`, `new BaseTexture`) is:
     *
     *     if (texture.hasLoaded) {
     *        // texture ready for use
     *     } else if (texture.isLoading) {
     *        // listen to 'loaded' and/or 'error' events on texture
     *     } else {
     *        // not loading, not going to load UNLESS the source is reloaded
     *        // (it may still make sense to listen to the events)
     *     }
     *
     * @protected
     * @param {HTMLImageElement|HTMLCanvasElement} source - the source object of the texture.
     */


    BaseTexture.prototype.loadSource = function loadSource(source) {
        var wasLoading = this.isLoading;

        this.hasLoaded = false;
        this.isLoading = false;

        if (wasLoading && this.source) {
            this.source.onload = null;
            this.source.onerror = null;
        }

        var firstSourceLoaded = !this.source;

        this.source = source;

        // Apply source if loaded. Otherwise setup appropriate loading monitors.
        if ((source.src && source.complete || source.getContext) && source.width && source.height) {
            this._updateImageType();

            if (this.imageType === 'svg') {
                this._loadSvgSource();
            } else {
                this._sourceLoaded();
            }

            if (firstSourceLoaded) {
                // send loaded event if previous source was null and we have been passed a pre-loaded IMG element
                this.emit('loaded', this);
            }
        } else if (!source.getContext) {
            // Image fail / not ready
            this.isLoading = true;

            var scope = this;

            source.onload = function () {
                scope._updateImageType();
                source.onload = null;
                source.onerror = null;

                if (!scope.isLoading) {
                    return;
                }

                scope.isLoading = false;
                scope._sourceLoaded();

                if (scope.imageType === 'svg') {
                    scope._loadSvgSource();

                    return;
                }

                scope.emit('loaded', scope);
            };

            source.onerror = function () {
                source.onload = null;
                source.onerror = null;

                if (!scope.isLoading) {
                    return;
                }

                scope.isLoading = false;
                scope.emit('error', scope);
            };

            // Per http://www.w3.org/TR/html5/embedded-content-0.html#the-img-element
            //   "The value of `complete` can thus change while a script is executing."
            // So complete needs to be re-checked after the callbacks have been added..
            // NOTE: complete will be true if the image has no src so best to check if the src is set.
            if (source.complete && source.src) {
                // ..and if we're complete now, no need for callbacks
                source.onload = null;
                source.onerror = null;

                if (scope.imageType === 'svg') {
                    scope._loadSvgSource();

                    return;
                }

                this.isLoading = false;

                if (source.width && source.height) {
                    this._sourceLoaded();

                    // If any previous subscribers possible
                    if (wasLoading) {
                        this.emit('loaded', this);
                    }
                }
                // If any previous subscribers possible
                else if (wasLoading) {
                        this.emit('error', this);
                    }
            }
        }
    };

    /**
     * Updates type of the source image.
     */


    BaseTexture.prototype._updateImageType = function _updateImageType() {
        if (!this.imageUrl) {
            return;
        }

        var dataUri = (0, _utils.decomposeDataUri)(this.imageUrl);
        var imageType = void 0;

        if (dataUri && dataUri.mediaType === 'image') {
            // Check for subType validity
            var firstSubType = dataUri.subType.split('+')[0];

            imageType = (0, _utils.getUrlFileExtension)('.' + firstSubType);

            if (!imageType) {
                throw new Error('Invalid image type in data URI.');
            }
        } else {
            imageType = (0, _utils.getUrlFileExtension)(this.imageUrl);

            if (!imageType) {
                imageType = 'png';
            }
        }

        this.imageType = imageType;
    };

    /**
     * Checks if `source` is an SVG image and whether it's loaded via a URL or a data URI. Then calls
     * `_loadSvgSourceUsingDataUri` or `_loadSvgSourceUsingXhr`.
     */


    BaseTexture.prototype._loadSvgSource = function _loadSvgSource() {
        if (this.imageType !== 'svg') {
            // Do nothing if source is not svg
            return;
        }

        var dataUri = (0, _utils.decomposeDataUri)(this.imageUrl);

        if (dataUri) {
            this._loadSvgSourceUsingDataUri(dataUri);
        } else {
            // We got an URL, so we need to do an XHR to check the svg size
            this._loadSvgSourceUsingXhr();
        }
    };

    /**
     * Reads an SVG string from data URI and then calls `_loadSvgSourceUsingString`.
     *
     * @param {string} dataUri - The data uri to load from.
     */


    BaseTexture.prototype._loadSvgSourceUsingDataUri = function _loadSvgSourceUsingDataUri(dataUri) {
        var svgString = void 0;

        if (dataUri.encoding === 'base64') {
            if (!atob) {
                throw new Error('Your browser doesn\'t support base64 conversions.');
            }
            svgString = atob(dataUri.data);
        } else {
            svgString = dataUri.data;
        }

        this._loadSvgSourceUsingString(svgString);
    };

    /**
     * Loads an SVG string from `imageUrl` using XHR and then calls `_loadSvgSourceUsingString`.
     */


    BaseTexture.prototype._loadSvgSourceUsingXhr = function _loadSvgSourceUsingXhr() {
        var _this2 = this;

        var svgXhr = new XMLHttpRequest();

        // This throws error on IE, so SVG Document can't be used
        // svgXhr.responseType = 'document';

        // This is not needed since we load the svg as string (breaks IE too)
        // but overrideMimeType() can be used to force the response to be parsed as XML
        // svgXhr.overrideMimeType('image/svg+xml');

        svgXhr.onload = function () {
            if (svgXhr.readyState !== svgXhr.DONE || svgXhr.status !== 200) {
                throw new Error('Failed to load SVG using XHR.');
            }

            _this2._loadSvgSourceUsingString(svgXhr.response);
        };

        svgXhr.onerror = function () {
            return _this2.emit('error', _this2);
        };

        svgXhr.open('GET', this.imageUrl, true);
        svgXhr.send();
    };

    /**
     * Loads texture using an SVG string. The original SVG Image is stored as `origSource` and the
     * created canvas is the new `source`. The SVG is scaled using `sourceScale`. Called by
     * `_loadSvgSourceUsingXhr` or `_loadSvgSourceUsingDataUri`.
     *
     * @param  {string} svgString SVG source as string
     *
     * @fires PIXI.BaseTexture#loaded
     */


    BaseTexture.prototype._loadSvgSourceUsingString = function _loadSvgSourceUsingString(svgString) {
        var svgSize = (0, _utils.getSvgSize)(svgString);

        var svgWidth = svgSize.width;
        var svgHeight = svgSize.height;

        if (!svgWidth || !svgHeight) {
            throw new Error('The SVG image must have width and height defined (in pixels), canvas API needs them.');
        }

        // Scale realWidth and realHeight
        this.realWidth = Math.round(svgWidth * this.sourceScale);
        this.realHeight = Math.round(svgHeight * this.sourceScale);

        this._updateDimensions();

        // Create a canvas element
        var canvas = document.createElement('canvas');

        canvas.width = this.realWidth;
        canvas.height = this.realHeight;
        canvas._pixiId = 'canvas_' + (0, _utils.uid)();

        // Draw the Svg to the canvas
        canvas.getContext('2d').drawImage(this.source, 0, 0, svgWidth, svgHeight, 0, 0, this.realWidth, this.realHeight);

        // Replace the original source image with the canvas
        this.origSource = this.source;
        this.source = canvas;

        // Add also the canvas in cache (destroy clears by `imageUrl` and `source._pixiId`)
        BaseTexture.addToCache(this, canvas._pixiId);

        this.isLoading = false;
        this._sourceLoaded();
        this.emit('loaded', this);
    };

    /**
     * Used internally to update the width, height, and some other tracking vars once
     * a source has successfully loaded.
     *
     * @private
     */


    BaseTexture.prototype._sourceLoaded = function _sourceLoaded() {
        this.hasLoaded = true;
        this.update();
    };

    /**
     * Destroys this base texture
     *
     */


    BaseTexture.prototype.destroy = function destroy() {
        if (this.imageUrl) {
            delete _utils.TextureCache[this.imageUrl];

            this.imageUrl = null;

            if (!navigator.isCocoonJS) {
                this.source.src = '';
            }
        }

        this.source = null;

        this.dispose();

        BaseTexture.removeFromCache(this);
        this.textureCacheIds = null;

        this._destroyed = true;
    };

    /**
     * Frees the texture from WebGL memory without destroying this texture object.
     * This means you can still use the texture later which will upload it to GPU
     * memory again.
     *
     * @fires PIXI.BaseTexture#dispose
     */


    BaseTexture.prototype.dispose = function dispose() {
        this.emit('dispose', this);
    };

    /**
     * Changes the source image of the texture.
     * The original source must be an Image element.
     *
     * @param {string} newSrc - the path of the image
     */


    BaseTexture.prototype.updateSourceImage = function updateSourceImage(newSrc) {
        this.source.src = newSrc;

        this.loadSource(this.source);
    };

    /**
     * Helper function that creates a base texture from the given image url.
     * If the image is not in the base texture cache it will be created and loaded.
     *
     * @static
     * @param {string} imageUrl - The image url of the texture
     * @param {boolean} [crossorigin=(auto)] - Should use anonymous CORS? Defaults to true if the URL is not a data-URI.
     * @param {number} [scaleMode=PIXI.settings.SCALE_MODE] - See {@link PIXI.SCALE_MODES} for possible values
     * @param {number} [sourceScale=(auto)] - Scale for the original image, used with Svg images.
     * @return {PIXI.BaseTexture} The new base texture.
     */


    BaseTexture.fromImage = function fromImage(imageUrl, crossorigin, scaleMode, sourceScale) {
        var baseTexture = _utils.BaseTextureCache[imageUrl];

        if (!baseTexture) {
            // new Image() breaks tex loading in some versions of Chrome.
            // See https://code.google.com/p/chromium/issues/detail?id=238071
            var image = new Image(); // document.createElement('img');

            if (crossorigin === undefined && imageUrl.indexOf('data:') !== 0) {
                image.crossOrigin = (0, _determineCrossOrigin2.default)(imageUrl);
            } else if (crossorigin) {
                image.crossOrigin = typeof crossorigin === 'string' ? crossorigin : 'anonymous';
            }

            baseTexture = new BaseTexture(image, scaleMode);
            baseTexture.imageUrl = imageUrl;

            if (sourceScale) {
                baseTexture.sourceScale = sourceScale;
            }

            // if there is an @2x at the end of the url we are going to assume its a highres image
            baseTexture.resolution = (0, _utils.getResolutionOfUrl)(imageUrl);

            image.src = imageUrl; // Setting this triggers load

            BaseTexture.addToCache(baseTexture, imageUrl);
        }

        return baseTexture;
    };

    /**
     * Helper function that creates a base texture from the given canvas element.
     *
     * @static
     * @param {HTMLCanvasElement} canvas - The canvas element source of the texture
     * @param {number} scaleMode - See {@link PIXI.SCALE_MODES} for possible values
     * @param {string} [origin='canvas'] - A string origin of who created the base texture
     * @return {PIXI.BaseTexture} The new base texture.
     */


    BaseTexture.fromCanvas = function fromCanvas(canvas, scaleMode) {
        var origin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'canvas';

        if (!canvas._pixiId) {
            canvas._pixiId = origin + '_' + (0, _utils.uid)();
        }

        var baseTexture = _utils.BaseTextureCache[canvas._pixiId];

        if (!baseTexture) {
            baseTexture = new BaseTexture(canvas, scaleMode);
            BaseTexture.addToCache(baseTexture, canvas._pixiId);
        }

        return baseTexture;
    };

    /**
     * Helper function that creates a base texture based on the source you provide.
     * The source can be - image url, image element, canvas element.
     *
     * @static
     * @param {string|HTMLImageElement|HTMLCanvasElement} source - The source to create base texture from.
     * @param {number} [scaleMode=PIXI.settings.SCALE_MODE] - See {@link PIXI.SCALE_MODES} for possible values
     * @param {number} [sourceScale=(auto)] - Scale for the original image, used with Svg images.
     * @return {PIXI.BaseTexture} The new base texture.
     */


    BaseTexture.from = function from(source, scaleMode, sourceScale) {
        if (typeof source === 'string') {
            return BaseTexture.fromImage(source, undefined, scaleMode, sourceScale);
        } else if (source instanceof HTMLImageElement) {
            var imageUrl = source.src;
            var baseTexture = _utils.BaseTextureCache[imageUrl];

            if (!baseTexture) {
                baseTexture = new BaseTexture(source, scaleMode);
                baseTexture.imageUrl = imageUrl;

                if (sourceScale) {
                    baseTexture.sourceScale = sourceScale;
                }

                // if there is an @2x at the end of the url we are going to assume its a highres image
                baseTexture.resolution = (0, _utils.getResolutionOfUrl)(imageUrl);

                BaseTexture.addToCache(baseTexture, imageUrl);
            }

            return baseTexture;
        } else if (source instanceof HTMLCanvasElement) {
            return BaseTexture.fromCanvas(source, scaleMode);
        }

        // lets assume its a base texture!
        return source;
    };

    /**
     * Adds a BaseTexture to the global BaseTextureCache. This cache is shared across the whole PIXI object.
     *
     * @static
     * @param {PIXI.BaseTexture} baseTexture - The BaseTexture to add to the cache.
     * @param {string} id - The id that the BaseTexture will be stored against.
     */


    BaseTexture.addToCache = function addToCache(baseTexture, id) {
        if (id) {
            if (baseTexture.textureCacheIds.indexOf(id) === -1) {
                baseTexture.textureCacheIds.push(id);
            }

            // @if DEBUG
            /* eslint-disable no-console */
            if (_utils.BaseTextureCache[id]) {
                console.warn('BaseTexture added to the cache with an id [' + id + '] that already had an entry');
            }
            /* eslint-enable no-console */
            // @endif

            _utils.BaseTextureCache[id] = baseTexture;
        }
    };

    /**
     * Remove a BaseTexture from the global BaseTextureCache.
     *
     * @static
     * @param {string|PIXI.BaseTexture} baseTexture - id of a BaseTexture to be removed, or a BaseTexture instance itself.
     * @return {PIXI.BaseTexture|null} The BaseTexture that was removed.
     */


    BaseTexture.removeFromCache = function removeFromCache(baseTexture) {
        if (typeof baseTexture === 'string') {
            var baseTextureFromCache = _utils.BaseTextureCache[baseTexture];

            if (baseTextureFromCache) {
                var index = baseTextureFromCache.textureCacheIds.indexOf(baseTexture);

                if (index > -1) {
                    baseTextureFromCache.textureCacheIds.splice(index, 1);
                }

                delete _utils.BaseTextureCache[baseTexture];

                return baseTextureFromCache;
            }
        } else if (baseTexture && baseTexture.textureCacheIds) {
            for (var i = 0; i < baseTexture.textureCacheIds.length; ++i) {
                delete _utils.BaseTextureCache[baseTexture.textureCacheIds[i]];
            }

            baseTexture.textureCacheIds.length = 0;

            return baseTexture;
        }

        return null;
    };

    return BaseTexture;
}(_eventemitter2.default);

exports.default = BaseTexture;
//# sourceMappingURL=BaseTexture.js.map

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _SystemRenderer2 = __webpack_require__(54);

var _SystemRenderer3 = _interopRequireDefault(_SystemRenderer2);

var _CanvasMaskManager = __webpack_require__(110);

var _CanvasMaskManager2 = _interopRequireDefault(_CanvasMaskManager);

var _CanvasRenderTarget = __webpack_require__(111);

var _CanvasRenderTarget2 = _interopRequireDefault(_CanvasRenderTarget);

var _mapCanvasBlendModesToPixi = __webpack_require__(112);

var _mapCanvasBlendModesToPixi2 = _interopRequireDefault(_mapCanvasBlendModesToPixi);

var _utils = __webpack_require__(13);

var _const = __webpack_require__(12);

var _settings = __webpack_require__(15);

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The CanvasRenderer draws the scene and all its content onto a 2d canvas. This renderer should
 * be used for browsers that do not support WebGL. Don't forget to add the CanvasRenderer.view to
 * your DOM or you will not see anything :)
 *
 * @class
 * @memberof PIXI
 * @extends PIXI.SystemRenderer
 */
var CanvasRenderer = function (_SystemRenderer) {
    _inherits(CanvasRenderer, _SystemRenderer);

    // eslint-disable-next-line valid-jsdoc
    /**
     * @param {object} [options] - The optional renderer parameters
     * @param {number} [options.width=800] - the width of the screen
     * @param {number} [options.height=600] - the height of the screen
     * @param {HTMLCanvasElement} [options.view] - the canvas to use as a view, optional
     * @param {boolean} [options.transparent=false] - If the render view is transparent, default false
     * @param {boolean} [options.autoResize=false] - If the render view is automatically resized, default false
     * @param {boolean} [options.antialias=false] - sets antialias (only applicable in chrome at the moment)
     * @param {number} [options.resolution=1] - The resolution / device pixel ratio of the renderer. The
     *  resolution of the renderer retina would be 2.
     * @param {boolean} [options.preserveDrawingBuffer=false] - enables drawing buffer preservation,
     *  enable this if you need to call toDataUrl on the webgl context.
     * @param {boolean} [options.clearBeforeRender=true] - This sets if the renderer will clear the canvas or
     *      not before the new render pass.
     * @param {number} [options.backgroundColor=0x000000] - The background color of the rendered area
     *  (shown if not transparent).
     * @param {boolean} [options.roundPixels=false] - If true PixiJS will Math.floor() x/y values when rendering,
     *  stopping pixel interpolation.
     */
    function CanvasRenderer(options, arg2, arg3) {
        _classCallCheck(this, CanvasRenderer);

        var _this = _possibleConstructorReturn(this, _SystemRenderer.call(this, 'Canvas', options, arg2, arg3));

        _this.type = _const.RENDERER_TYPE.CANVAS;

        /**
         * The root canvas 2d context that everything is drawn with.
         *
         * @member {CanvasRenderingContext2D}
         */
        _this.rootContext = _this.view.getContext('2d', { alpha: _this.transparent });

        /**
         * The currently active canvas 2d context (could change with renderTextures)
         *
         * @member {CanvasRenderingContext2D}
         */
        _this.context = _this.rootContext;

        /**
         * Boolean flag controlling canvas refresh.
         *
         * @member {boolean}
         */
        _this.refresh = true;

        /**
         * Instance of a CanvasMaskManager, handles masking when using the canvas renderer.
         *
         * @member {PIXI.CanvasMaskManager}
         */
        _this.maskManager = new _CanvasMaskManager2.default(_this);

        /**
         * The canvas property used to set the canvas smoothing property.
         *
         * @member {string}
         */
        _this.smoothProperty = 'imageSmoothingEnabled';

        if (!_this.rootContext.imageSmoothingEnabled) {
            if (_this.rootContext.webkitImageSmoothingEnabled) {
                _this.smoothProperty = 'webkitImageSmoothingEnabled';
            } else if (_this.rootContext.mozImageSmoothingEnabled) {
                _this.smoothProperty = 'mozImageSmoothingEnabled';
            } else if (_this.rootContext.oImageSmoothingEnabled) {
                _this.smoothProperty = 'oImageSmoothingEnabled';
            } else if (_this.rootContext.msImageSmoothingEnabled) {
                _this.smoothProperty = 'msImageSmoothingEnabled';
            }
        }

        _this.initPlugins();

        _this.blendModes = (0, _mapCanvasBlendModesToPixi2.default)();
        _this._activeBlendMode = null;

        _this.renderingToScreen = false;

        _this.resize(_this.options.width, _this.options.height);

        /**
         * Fired after rendering finishes.
         *
         * @event PIXI.CanvasRenderer#postrender
         */

        /**
         * Fired before rendering starts.
         *
         * @event PIXI.CanvasRenderer#prerender
         */
        return _this;
    }

    /**
     * Renders the object to this canvas view
     *
     * @param {PIXI.DisplayObject} displayObject - The object to be rendered
     * @param {PIXI.RenderTexture} [renderTexture] - A render texture to be rendered to.
     *  If unset, it will render to the root context.
     * @param {boolean} [clear=false] - Whether to clear the canvas before drawing
     * @param {PIXI.Transform} [transform] - A transformation to be applied
     * @param {boolean} [skipUpdateTransform=false] - Whether to skip the update transform
     */


    CanvasRenderer.prototype.render = function render(displayObject, renderTexture, clear, transform, skipUpdateTransform) {
        if (!this.view) {
            return;
        }

        // can be handy to know!
        this.renderingToScreen = !renderTexture;

        this.emit('prerender');

        var rootResolution = this.resolution;

        if (renderTexture) {
            renderTexture = renderTexture.baseTexture || renderTexture;

            if (!renderTexture._canvasRenderTarget) {
                renderTexture._canvasRenderTarget = new _CanvasRenderTarget2.default(renderTexture.width, renderTexture.height, renderTexture.resolution);
                renderTexture.source = renderTexture._canvasRenderTarget.canvas;
                renderTexture.valid = true;
            }

            this.context = renderTexture._canvasRenderTarget.context;
            this.resolution = renderTexture._canvasRenderTarget.resolution;
        } else {
            this.context = this.rootContext;
        }

        var context = this.context;

        if (!renderTexture) {
            this._lastObjectRendered = displayObject;
        }

        if (!skipUpdateTransform) {
            // update the scene graph
            var cacheParent = displayObject.parent;
            var tempWt = this._tempDisplayObjectParent.transform.worldTransform;

            if (transform) {
                transform.copy(tempWt);

                // lets not forget to flag the parent transform as dirty...
                this._tempDisplayObjectParent.transform._worldID = -1;
            } else {
                tempWt.identity();
            }

            displayObject.parent = this._tempDisplayObjectParent;

            displayObject.updateTransform();
            displayObject.parent = cacheParent;
            // displayObject.hitArea = //TODO add a temp hit area
        }

        context.setTransform(1, 0, 0, 1, 0, 0);
        context.globalAlpha = 1;
        context.globalCompositeOperation = this.blendModes[_const.BLEND_MODES.NORMAL];

        if (navigator.isCocoonJS && this.view.screencanvas) {
            context.fillStyle = 'black';
            context.clear();
        }

        if (clear !== undefined ? clear : this.clearBeforeRender) {
            if (this.renderingToScreen) {
                if (this.transparent) {
                    context.clearRect(0, 0, this.width, this.height);
                } else {
                    context.fillStyle = this._backgroundColorString;
                    context.fillRect(0, 0, this.width, this.height);
                }
            } // else {
            // TODO: implement background for CanvasRenderTarget or RenderTexture?
            // }
        }

        // TODO RENDER TARGET STUFF HERE..
        var tempContext = this.context;

        this.context = context;
        displayObject.renderCanvas(this);
        this.context = tempContext;

        this.resolution = rootResolution;

        this.emit('postrender');
    };

    /**
     * Clear the canvas of renderer.
     *
     * @param {string} [clearColor] - Clear the canvas with this color, except the canvas is transparent.
     */


    CanvasRenderer.prototype.clear = function clear(clearColor) {
        var context = this.context;

        clearColor = clearColor || this._backgroundColorString;

        if (!this.transparent && clearColor) {
            context.fillStyle = clearColor;
            context.fillRect(0, 0, this.width, this.height);
        } else {
            context.clearRect(0, 0, this.width, this.height);
        }
    };

    /**
     * Sets the blend mode of the renderer.
     *
     * @param {number} blendMode - See {@link PIXI.BLEND_MODES} for valid values.
     */


    CanvasRenderer.prototype.setBlendMode = function setBlendMode(blendMode) {
        if (this._activeBlendMode === blendMode) {
            return;
        }

        this._activeBlendMode = blendMode;
        this.context.globalCompositeOperation = this.blendModes[blendMode];
    };

    /**
     * Removes everything from the renderer and optionally removes the Canvas DOM element.
     *
     * @param {boolean} [removeView=false] - Removes the Canvas element from the DOM.
     */


    CanvasRenderer.prototype.destroy = function destroy(removeView) {
        this.destroyPlugins();

        // call the base destroy
        _SystemRenderer.prototype.destroy.call(this, removeView);

        this.context = null;

        this.refresh = true;

        this.maskManager.destroy();
        this.maskManager = null;

        this.smoothProperty = null;
    };

    /**
     * Resizes the canvas view to the specified width and height.
     *
     * @extends PIXI.SystemRenderer#resize
     *
     * @param {number} screenWidth - the new width of the screen
     * @param {number} screenHeight - the new height of the screen
     */


    CanvasRenderer.prototype.resize = function resize(screenWidth, screenHeight) {
        _SystemRenderer.prototype.resize.call(this, screenWidth, screenHeight);

        // reset the scale mode.. oddly this seems to be reset when the canvas is resized.
        // surely a browser bug?? Let PixiJS fix that for you..
        if (this.smoothProperty) {
            this.rootContext[this.smoothProperty] = _settings2.default.SCALE_MODE === _const.SCALE_MODES.LINEAR;
        }
    };

    return CanvasRenderer;
}(_SystemRenderer3.default);

/**
 * Collection of installed plugins. These are included by default in PIXI, but can be excluded
 * by creating a custom build. Consult the README for more information about creating custom
 * builds and excluding plugins.
 * @name PIXI.CanvasRenderer#plugins
 * @type {object}
 * @readonly
 * @property {PIXI.accessibility.AccessibilityManager} accessibility Support tabbing interactive elements.
 * @property {PIXI.extract.CanvasExtract} extract Extract image data from renderer.
 * @property {PIXI.interaction.InteractionManager} interaction Handles mouse, touch and pointer events.
 * @property {PIXI.prepare.CanvasPrepare} prepare Pre-render display objects.
 */

/**
 * Adds a plugin to the renderer.
 *
 * @method PIXI.CanvasRenderer#registerPlugin
 * @param {string} pluginName - The name of the plugin.
 * @param {Function} ctor - The constructor function or class for the plugin.
 */

exports.default = CanvasRenderer;
_utils.pluginTarget.mixin(CanvasRenderer);
//# sourceMappingURL=CanvasRenderer.js.map

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _math = __webpack_require__(14);

var _const = __webpack_require__(12);

var _settings = __webpack_require__(15);

var _settings2 = _interopRequireDefault(_settings);

var _pixiGlCore = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class
 * @memberof PIXI
 */
var RenderTarget = function () {
  /**
   * @param {WebGLRenderingContext} gl - The current WebGL drawing context
   * @param {number} [width=0] - the horizontal range of the filter
   * @param {number} [height=0] - the vertical range of the filter
   * @param {number} [scaleMode=PIXI.settings.SCALE_MODE] - See {@link PIXI.SCALE_MODES} for possible values
   * @param {number} [resolution=1] - The current resolution / device pixel ratio
   * @param {boolean} [root=false] - Whether this object is the root element or not
   */
  function RenderTarget(gl, width, height, scaleMode, resolution, root) {
    _classCallCheck(this, RenderTarget);

    // TODO Resolution could go here ( eg low res blurs )

    /**
     * The current WebGL drawing context.
     *
     * @member {WebGLRenderingContext}
     */
    this.gl = gl;

    // next time to create a frame buffer and texture

    /**
     * A frame buffer
     *
     * @member {PIXI.glCore.GLFramebuffer}
     */
    this.frameBuffer = null;

    /**
     * The texture
     *
     * @member {PIXI.glCore.GLTexture}
     */
    this.texture = null;

    /**
     * The background colour of this render target, as an array of [r,g,b,a] values
     *
     * @member {number[]}
     */
    this.clearColor = [0, 0, 0, 0];

    /**
     * The size of the object as a rectangle
     *
     * @member {PIXI.Rectangle}
     */
    this.size = new _math.Rectangle(0, 0, 1, 1);

    /**
     * The current resolution / device pixel ratio
     *
     * @member {number}
     * @default 1
     */
    this.resolution = resolution || _settings2.default.RESOLUTION;

    /**
     * The projection matrix
     *
     * @member {PIXI.Matrix}
     */
    this.projectionMatrix = new _math.Matrix();

    /**
     * The object's transform
     *
     * @member {PIXI.Matrix}
     */
    this.transform = null;

    /**
     * The frame.
     *
     * @member {PIXI.Rectangle}
     */
    this.frame = null;

    /**
     * The stencil buffer stores masking data for the render target
     *
     * @member {glCore.GLBuffer}
     */
    this.defaultFrame = new _math.Rectangle();
    this.destinationFrame = null;
    this.sourceFrame = null;

    /**
     * The stencil buffer stores masking data for the render target
     *
     * @member {glCore.GLBuffer}
     */
    this.stencilBuffer = null;

    /**
     * The data structure for the stencil masks
     *
     * @member {PIXI.Graphics[]}
     */
    this.stencilMaskStack = [];

    /**
     * Stores filter data for the render target
     *
     * @member {object[]}
     */
    this.filterData = null;

    /**
     * The scale mode.
     *
     * @member {number}
     * @default PIXI.settings.SCALE_MODE
     * @see PIXI.SCALE_MODES
     */
    this.scaleMode = scaleMode !== undefined ? scaleMode : _settings2.default.SCALE_MODE;

    /**
     * Whether this object is the root element or not
     *
     * @member {boolean}
     */
    this.root = root;

    if (!this.root) {
      this.frameBuffer = _pixiGlCore.GLFramebuffer.createRGBA(gl, 100, 100);

      if (this.scaleMode === _const.SCALE_MODES.NEAREST) {
        this.frameBuffer.texture.enableNearestScaling();
      } else {
        this.frameBuffer.texture.enableLinearScaling();
      }
      /*
          A frame buffer needs a target to render to..
          create a texture and bind it attach it to the framebuffer..
       */

      // this is used by the base texture
      this.texture = this.frameBuffer.texture;
    } else {
      // make it a null framebuffer..
      this.frameBuffer = new _pixiGlCore.GLFramebuffer(gl, 100, 100);
      this.frameBuffer.framebuffer = null;
    }

    this.setFrame();

    this.resize(width, height);
  }

  /**
   * Clears the filter texture.
   *
   * @param {number[]} [clearColor=this.clearColor] - Array of [r,g,b,a] to clear the framebuffer
   */


  RenderTarget.prototype.clear = function clear(clearColor) {
    var cc = clearColor || this.clearColor;

    this.frameBuffer.clear(cc[0], cc[1], cc[2], cc[3]); // r,g,b,a);
  };

  /**
   * Binds the stencil buffer.
   *
   */


  RenderTarget.prototype.attachStencilBuffer = function attachStencilBuffer() {
    // TODO check if stencil is done?
    /**
     * The stencil buffer is used for masking in pixi
     * lets create one and then add attach it to the framebuffer..
     */
    if (!this.root) {
      this.frameBuffer.enableStencil();
    }
  };

  /**
   * Sets the frame of the render target.
   *
   * @param {Rectangle} destinationFrame - The destination frame.
   * @param {Rectangle} sourceFrame - The source frame.
   */


  RenderTarget.prototype.setFrame = function setFrame(destinationFrame, sourceFrame) {
    this.destinationFrame = destinationFrame || this.destinationFrame || this.defaultFrame;
    this.sourceFrame = sourceFrame || this.sourceFrame || this.destinationFrame;
  };

  /**
   * Binds the buffers and initialises the viewport.
   *
   */


  RenderTarget.prototype.activate = function activate() {
    // TOOD refactor usage of frame..
    var gl = this.gl;

    // make sure the texture is unbound!
    this.frameBuffer.bind();

    this.calculateProjection(this.destinationFrame, this.sourceFrame);

    if (this.transform) {
      this.projectionMatrix.append(this.transform);
    }

    // TODO add a check as them may be the same!
    if (this.destinationFrame !== this.sourceFrame) {
      gl.enable(gl.SCISSOR_TEST);
      gl.scissor(this.destinationFrame.x | 0, this.destinationFrame.y | 0, this.destinationFrame.width * this.resolution | 0, this.destinationFrame.height * this.resolution | 0);
    } else {
      gl.disable(gl.SCISSOR_TEST);
    }

    // TODO - does not need to be updated all the time??
    gl.viewport(this.destinationFrame.x | 0, this.destinationFrame.y | 0, this.destinationFrame.width * this.resolution | 0, this.destinationFrame.height * this.resolution | 0);
  };

  /**
   * Updates the projection matrix based on a projection frame (which is a rectangle)
   *
   * @param {Rectangle} destinationFrame - The destination frame.
   * @param {Rectangle} sourceFrame - The source frame.
   */


  RenderTarget.prototype.calculateProjection = function calculateProjection(destinationFrame, sourceFrame) {
    var pm = this.projectionMatrix;

    sourceFrame = sourceFrame || destinationFrame;

    pm.identity();

    // TODO: make dest scale source
    if (!this.root) {
      pm.a = 1 / destinationFrame.width * 2;
      pm.d = 1 / destinationFrame.height * 2;

      pm.tx = -1 - sourceFrame.x * pm.a;
      pm.ty = -1 - sourceFrame.y * pm.d;
    } else {
      pm.a = 1 / destinationFrame.width * 2;
      pm.d = -1 / destinationFrame.height * 2;

      pm.tx = -1 - sourceFrame.x * pm.a;
      pm.ty = 1 - sourceFrame.y * pm.d;
    }
  };

  /**
   * Resizes the texture to the specified width and height
   *
   * @param {number} width - the new width of the texture
   * @param {number} height - the new height of the texture
   */


  RenderTarget.prototype.resize = function resize(width, height) {
    width = width | 0;
    height = height | 0;

    if (this.size.width === width && this.size.height === height) {
      return;
    }

    this.size.width = width;
    this.size.height = height;

    this.defaultFrame.width = width;
    this.defaultFrame.height = height;

    this.frameBuffer.resize(width * this.resolution, height * this.resolution);

    var projectionFrame = this.frame || this.size;

    this.calculateProjection(projectionFrame);
  };

  /**
   * Destroys the render target.
   *
   */


  RenderTarget.prototype.destroy = function destroy() {
    this.frameBuffer.destroy();

    this.frameBuffer = null;
    this.texture = null;
  };

  return RenderTarget;
}();

exports.default = RenderTarget;
//# sourceMappingURL=RenderTarget.js.map

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (graphicsData, webGLData, webGLDataNativeLines) {
    if (graphicsData.nativeLines) {
        buildNativeLine(graphicsData, webGLDataNativeLines);
    } else {
        buildLine(graphicsData, webGLData);
    }
};

var _math = __webpack_require__(14);

var _utils = __webpack_require__(13);

/**
 * Builds a line to draw using the poligon method.
 *
 * Ignored from docs since it is not directly exposed.
 *
 * @ignore
 * @private
 * @param {PIXI.WebGLGraphicsData} graphicsData - The graphics object containing all the necessary properties
 * @param {object} webGLData - an object containing all the webGL-specific information to create this shape
 */
function buildLine(graphicsData, webGLData) {
    // TODO OPTIMISE!
    var points = graphicsData.points;

    if (points.length === 0) {
        return;
    }
    // if the line width is an odd number add 0.5 to align to a whole pixel
    // commenting this out fixes #711 and #1620
    // if (graphicsData.lineWidth%2)
    // {
    //     for (i = 0; i < points.length; i++)
    //     {
    //         points[i] += 0.5;
    //     }
    // }

    // get first and last point.. figure out the middle!
    var firstPoint = new _math.Point(points[0], points[1]);
    var lastPoint = new _math.Point(points[points.length - 2], points[points.length - 1]);

    // if the first point is the last point - gonna have issues :)
    if (firstPoint.x === lastPoint.x && firstPoint.y === lastPoint.y) {
        // need to clone as we are going to slightly modify the shape..
        points = points.slice();

        points.pop();
        points.pop();

        lastPoint = new _math.Point(points[points.length - 2], points[points.length - 1]);

        var midPointX = lastPoint.x + (firstPoint.x - lastPoint.x) * 0.5;
        var midPointY = lastPoint.y + (firstPoint.y - lastPoint.y) * 0.5;

        points.unshift(midPointX, midPointY);
        points.push(midPointX, midPointY);
    }

    var verts = webGLData.points;
    var indices = webGLData.indices;
    var length = points.length / 2;
    var indexCount = points.length;
    var indexStart = verts.length / 6;

    // DRAW the Line
    var width = graphicsData.lineWidth / 2;

    // sort color
    var color = (0, _utils.hex2rgb)(graphicsData.lineColor);
    var alpha = graphicsData.lineAlpha;
    var r = color[0] * alpha;
    var g = color[1] * alpha;
    var b = color[2] * alpha;

    var p1x = points[0];
    var p1y = points[1];
    var p2x = points[2];
    var p2y = points[3];
    var p3x = 0;
    var p3y = 0;

    var perpx = -(p1y - p2y);
    var perpy = p1x - p2x;
    var perp2x = 0;
    var perp2y = 0;
    var perp3x = 0;
    var perp3y = 0;

    var dist = Math.sqrt(perpx * perpx + perpy * perpy);

    perpx /= dist;
    perpy /= dist;
    perpx *= width;
    perpy *= width;

    // start
    verts.push(p1x - perpx, p1y - perpy, r, g, b, alpha);

    verts.push(p1x + perpx, p1y + perpy, r, g, b, alpha);

    for (var i = 1; i < length - 1; ++i) {
        p1x = points[(i - 1) * 2];
        p1y = points[(i - 1) * 2 + 1];

        p2x = points[i * 2];
        p2y = points[i * 2 + 1];

        p3x = points[(i + 1) * 2];
        p3y = points[(i + 1) * 2 + 1];

        perpx = -(p1y - p2y);
        perpy = p1x - p2x;

        dist = Math.sqrt(perpx * perpx + perpy * perpy);
        perpx /= dist;
        perpy /= dist;
        perpx *= width;
        perpy *= width;

        perp2x = -(p2y - p3y);
        perp2y = p2x - p3x;

        dist = Math.sqrt(perp2x * perp2x + perp2y * perp2y);
        perp2x /= dist;
        perp2y /= dist;
        perp2x *= width;
        perp2y *= width;

        var a1 = -perpy + p1y - (-perpy + p2y);
        var b1 = -perpx + p2x - (-perpx + p1x);
        var c1 = (-perpx + p1x) * (-perpy + p2y) - (-perpx + p2x) * (-perpy + p1y);
        var a2 = -perp2y + p3y - (-perp2y + p2y);
        var b2 = -perp2x + p2x - (-perp2x + p3x);
        var c2 = (-perp2x + p3x) * (-perp2y + p2y) - (-perp2x + p2x) * (-perp2y + p3y);

        var denom = a1 * b2 - a2 * b1;

        if (Math.abs(denom) < 0.1) {
            denom += 10.1;
            verts.push(p2x - perpx, p2y - perpy, r, g, b, alpha);

            verts.push(p2x + perpx, p2y + perpy, r, g, b, alpha);

            continue;
        }

        var px = (b1 * c2 - b2 * c1) / denom;
        var py = (a2 * c1 - a1 * c2) / denom;
        var pdist = (px - p2x) * (px - p2x) + (py - p2y) * (py - p2y);

        if (pdist > 196 * width * width) {
            perp3x = perpx - perp2x;
            perp3y = perpy - perp2y;

            dist = Math.sqrt(perp3x * perp3x + perp3y * perp3y);
            perp3x /= dist;
            perp3y /= dist;
            perp3x *= width;
            perp3y *= width;

            verts.push(p2x - perp3x, p2y - perp3y);
            verts.push(r, g, b, alpha);

            verts.push(p2x + perp3x, p2y + perp3y);
            verts.push(r, g, b, alpha);

            verts.push(p2x - perp3x, p2y - perp3y);
            verts.push(r, g, b, alpha);

            indexCount++;
        } else {
            verts.push(px, py);
            verts.push(r, g, b, alpha);

            verts.push(p2x - (px - p2x), p2y - (py - p2y));
            verts.push(r, g, b, alpha);
        }
    }

    p1x = points[(length - 2) * 2];
    p1y = points[(length - 2) * 2 + 1];

    p2x = points[(length - 1) * 2];
    p2y = points[(length - 1) * 2 + 1];

    perpx = -(p1y - p2y);
    perpy = p1x - p2x;

    dist = Math.sqrt(perpx * perpx + perpy * perpy);
    perpx /= dist;
    perpy /= dist;
    perpx *= width;
    perpy *= width;

    verts.push(p2x - perpx, p2y - perpy);
    verts.push(r, g, b, alpha);

    verts.push(p2x + perpx, p2y + perpy);
    verts.push(r, g, b, alpha);

    indices.push(indexStart);

    for (var _i = 0; _i < indexCount; ++_i) {
        indices.push(indexStart++);
    }

    indices.push(indexStart - 1);
}

/**
 * Builds a line to draw using the gl.drawArrays(gl.LINES) method
 *
 * Ignored from docs since it is not directly exposed.
 *
 * @ignore
 * @private
 * @param {PIXI.WebGLGraphicsData} graphicsData - The graphics object containing all the necessary properties
 * @param {object} webGLData - an object containing all the webGL-specific information to create this shape
 */


/**
 * Builds a line to draw
 *
 * Ignored from docs since it is not directly exposed.
 *
 * @ignore
 * @private
 * @param {PIXI.WebGLGraphicsData} graphicsData - The graphics object containing all the necessary properties
 * @param {object} webGLData - an object containing all the webGL-specific information to create this shape
 * @param {object} webGLDataNativeLines - an object containing all the webGL-specific information to create nativeLines
 */
function buildNativeLine(graphicsData, webGLData) {
    var i = 0;
    var points = graphicsData.points;

    if (points.length === 0) return;

    var verts = webGLData.points;
    var length = points.length / 2;

    // sort color
    var color = (0, _utils.hex2rgb)(graphicsData.lineColor);
    var alpha = graphicsData.lineAlpha;
    var r = color[0] * alpha;
    var g = color[1] * alpha;
    var b = color[2] * alpha;

    for (i = 1; i < length; i++) {
        var p1x = points[(i - 1) * 2];
        var p1y = points[(i - 1) * 2 + 1];

        var p2x = points[i * 2];
        var p2y = points[i * 2 + 1];

        verts.push(p1x, p1y);
        verts.push(r, g, b, alpha);

        verts.push(p2x, p2y);
        verts.push(r, g, b, alpha);
    }
}
//# sourceMappingURL=buildLine.js.map

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = makeHero;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var PIXI = __webpack_require__(17);

function redrawInner(inner, props) {
    inner.clear();
    inner.beginFill(props.fill);
    inner.drawCircle(0, 0, props.r);
    inner.endFill();
}

function redrawOuter(outer, props) {
    outer.clear();
    outer.lineStyle.apply(outer, _toConsumableArray(props.lineStyle));
    outer.drawCircle(0, 0, props.r);
    outer.endFill();
}

function makeHero(props) {
    var hero = new PIXI.Container();

    var inner = new PIXI.Graphics();
    redrawInner(inner, {
        fill: props.fill,
        r: props.innerR
    });

    var outer = new PIXI.Graphics();
    redrawOuter(outer, {
        lineStyle: props.lineStyle,
        r: props.outerR
    });

    hero.addChild(inner);
    hero.addChild(outer);

    hero.scaleInner = function (ratio) {
        return redrawInner(inner, {
            fill: props.fill,
            r: props.innerR * ratio
        });
    };

    hero.scaleOuter = function (ratio) {
        return redrawOuter(outer, {
            lineStyle: props.lineStyle,
            r: props.outerR * ratio
        });
    };

    return hero;
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The Point object represents a location in a two-dimensional coordinate system, where x represents
 * the horizontal axis and y represents the vertical axis.
 *
 * @class
 * @memberof PIXI
 */
var Point = function () {
  /**
   * @param {number} [x=0] - position of the point on the x axis
   * @param {number} [y=0] - position of the point on the y axis
   */
  function Point() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, Point);

    /**
     * @member {number}
     * @default 0
     */
    this.x = x;

    /**
     * @member {number}
     * @default 0
     */
    this.y = y;
  }

  /**
   * Creates a clone of this point
   *
   * @return {PIXI.Point} a copy of the point
   */


  Point.prototype.clone = function clone() {
    return new Point(this.x, this.y);
  };

  /**
   * Copies x and y from the given point
   *
   * @param {PIXI.Point} p - The point to copy.
   */


  Point.prototype.copy = function copy(p) {
    this.set(p.x, p.y);
  };

  /**
   * Returns true if the given point is equal to this point
   *
   * @param {PIXI.Point} p - The point to check
   * @returns {boolean} Whether the given point equal to this point
   */


  Point.prototype.equals = function equals(p) {
    return p.x === this.x && p.y === this.y;
  };

  /**
   * Sets the point to a new x and y position.
   * If y is omitted, both x and y will be set to x.
   *
   * @param {number} [x=0] - position of the point on the x axis
   * @param {number} [y=0] - position of the point on the y axis
   */


  Point.prototype.set = function set(x, y) {
    this.x = x || 0;
    this.y = y || (y !== 0 ? this.x : 0);
  };

  return Point;
}();

exports.default = Point;
//# sourceMappingURL=Point.js.map

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _const = __webpack_require__(12);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Rectangle object is an area defined by its position, as indicated by its top-left corner
 * point (x, y) and by its width and its height.
 *
 * @class
 * @memberof PIXI
 */
var Rectangle = function () {
    /**
     * @param {number} [x=0] - The X coordinate of the upper-left corner of the rectangle
     * @param {number} [y=0] - The Y coordinate of the upper-left corner of the rectangle
     * @param {number} [width=0] - The overall width of this rectangle
     * @param {number} [height=0] - The overall height of this rectangle
     */
    function Rectangle() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

        _classCallCheck(this, Rectangle);

        /**
         * @member {number}
         * @default 0
         */
        this.x = Number(x);

        /**
         * @member {number}
         * @default 0
         */
        this.y = Number(y);

        /**
         * @member {number}
         * @default 0
         */
        this.width = Number(width);

        /**
         * @member {number}
         * @default 0
         */
        this.height = Number(height);

        /**
         * The type of the object, mainly used to avoid `instanceof` checks
         *
         * @member {number}
         * @readOnly
         * @default PIXI.SHAPES.RECT
         * @see PIXI.SHAPES
         */
        this.type = _const.SHAPES.RECT;
    }

    /**
     * returns the left edge of the rectangle
     *
     * @member {number}
     */


    /**
     * Creates a clone of this Rectangle
     *
     * @return {PIXI.Rectangle} a copy of the rectangle
     */
    Rectangle.prototype.clone = function clone() {
        return new Rectangle(this.x, this.y, this.width, this.height);
    };

    /**
     * Copies another rectangle to this one.
     *
     * @param {PIXI.Rectangle} rectangle - The rectangle to copy.
     * @return {PIXI.Rectangle} Returns itself.
     */


    Rectangle.prototype.copy = function copy(rectangle) {
        this.x = rectangle.x;
        this.y = rectangle.y;
        this.width = rectangle.width;
        this.height = rectangle.height;

        return this;
    };

    /**
     * Checks whether the x and y coordinates given are contained within this Rectangle
     *
     * @param {number} x - The X coordinate of the point to test
     * @param {number} y - The Y coordinate of the point to test
     * @return {boolean} Whether the x/y coordinates are within this Rectangle
     */


    Rectangle.prototype.contains = function contains(x, y) {
        if (this.width <= 0 || this.height <= 0) {
            return false;
        }

        if (x >= this.x && x < this.x + this.width) {
            if (y >= this.y && y < this.y + this.height) {
                return true;
            }
        }

        return false;
    };

    /**
     * Pads the rectangle making it grow in all directions.
     *
     * @param {number} paddingX - The horizontal padding amount.
     * @param {number} paddingY - The vertical padding amount.
     */


    Rectangle.prototype.pad = function pad(paddingX, paddingY) {
        paddingX = paddingX || 0;
        paddingY = paddingY || (paddingY !== 0 ? paddingX : 0);

        this.x -= paddingX;
        this.y -= paddingY;

        this.width += paddingX * 2;
        this.height += paddingY * 2;
    };

    /**
     * Fits this rectangle around the passed one.
     *
     * @param {PIXI.Rectangle} rectangle - The rectangle to fit.
     */


    Rectangle.prototype.fit = function fit(rectangle) {
        if (this.x < rectangle.x) {
            this.width += this.x;
            if (this.width < 0) {
                this.width = 0;
            }

            this.x = rectangle.x;
        }

        if (this.y < rectangle.y) {
            this.height += this.y;
            if (this.height < 0) {
                this.height = 0;
            }
            this.y = rectangle.y;
        }

        if (this.x + this.width > rectangle.x + rectangle.width) {
            this.width = rectangle.width - this.x;
            if (this.width < 0) {
                this.width = 0;
            }
        }

        if (this.y + this.height > rectangle.y + rectangle.height) {
            this.height = rectangle.height - this.y;
            if (this.height < 0) {
                this.height = 0;
            }
        }
    };

    /**
     * Enlarges this rectangle to include the passed rectangle.
     *
     * @param {PIXI.Rectangle} rectangle - The rectangle to include.
     */


    Rectangle.prototype.enlarge = function enlarge(rectangle) {
        var x1 = Math.min(this.x, rectangle.x);
        var x2 = Math.max(this.x + this.width, rectangle.x + rectangle.width);
        var y1 = Math.min(this.y, rectangle.y);
        var y2 = Math.max(this.y + this.height, rectangle.y + rectangle.height);

        this.x = x1;
        this.width = x2 - x1;
        this.y = y1;
        this.height = y2 - y1;
    };

    _createClass(Rectangle, [{
        key: 'left',
        get: function get() {
            return this.x;
        }

        /**
         * returns the right edge of the rectangle
         *
         * @member {number}
         */

    }, {
        key: 'right',
        get: function get() {
            return this.x + this.width;
        }

        /**
         * returns the top edge of the rectangle
         *
         * @member {number}
         */

    }, {
        key: 'top',
        get: function get() {
            return this.y;
        }

        /**
         * returns the bottom edge of the rectangle
         *
         * @member {number}
         */

    }, {
        key: 'bottom',
        get: function get() {
            return this.y + this.height;
        }

        /**
         * A constant empty rectangle.
         *
         * @static
         * @constant
         */

    }], [{
        key: 'EMPTY',
        get: function get() {
            return new Rectangle(0, 0, 0, 0);
        }
    }]);

    return Rectangle;
}();

exports.default = Rectangle;
//# sourceMappingURL=Rectangle.js.map

/***/ }),
/* 28 */
/***/ (function(module, exports) {



var mapSize = function(gl, type) 
{
    if(!GL_TABLE) 
    {
        var typeNames = Object.keys(GL_TO_GLSL_TYPES);

        GL_TABLE = {};

        for(var i = 0; i < typeNames.length; ++i) 
        {
            var tn = typeNames[i];
            GL_TABLE[ gl[tn] ] = GL_TO_GLSL_TYPES[tn];
        }
    }

  return GL_TABLE[type];
};

var GL_TABLE = null;

var GL_TO_GLSL_TYPES = {
  'FLOAT':       'float',
  'FLOAT_VEC2':  'vec2',
  'FLOAT_VEC3':  'vec3',
  'FLOAT_VEC4':  'vec4',

  'INT':         'int',
  'INT_VEC2':    'ivec2',
  'INT_VEC3':    'ivec3',
  'INT_VEC4':    'ivec4',
  
  'BOOL':        'bool',
  'BOOL_VEC2':   'bvec2',
  'BOOL_VEC3':   'bvec3',
  'BOOL_VEC4':   'bvec4',
  
  'FLOAT_MAT2':  'mat2',
  'FLOAT_MAT3':  'mat3',
  'FLOAT_MAT4':  'mat4',
  
  'SAMPLER_2D':  'sampler2D'  
};

module.exports = mapSize;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _math = __webpack_require__(14);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 'Builder' pattern for bounds rectangles
 * Axis-Aligned Bounding Box
 * It is not a shape! Its mutable thing, no 'EMPTY' or that kind of problems
 *
 * @class
 * @memberof PIXI
 */
var Bounds = function () {
    /**
     *
     */
    function Bounds() {
        _classCallCheck(this, Bounds);

        /**
         * @member {number}
         * @default 0
         */
        this.minX = Infinity;

        /**
         * @member {number}
         * @default 0
         */
        this.minY = Infinity;

        /**
         * @member {number}
         * @default 0
         */
        this.maxX = -Infinity;

        /**
         * @member {number}
         * @default 0
         */
        this.maxY = -Infinity;

        this.rect = null;
    }

    /**
     * Checks if bounds are empty.
     *
     * @return {boolean} True if empty.
     */


    Bounds.prototype.isEmpty = function isEmpty() {
        return this.minX > this.maxX || this.minY > this.maxY;
    };

    /**
     * Clears the bounds and resets.
     *
     */


    Bounds.prototype.clear = function clear() {
        this.updateID++;

        this.minX = Infinity;
        this.minY = Infinity;
        this.maxX = -Infinity;
        this.maxY = -Infinity;
    };

    /**
     * Can return Rectangle.EMPTY constant, either construct new rectangle, either use your rectangle
     * It is not guaranteed that it will return tempRect
     *
     * @param {PIXI.Rectangle} rect - temporary object will be used if AABB is not empty
     * @returns {PIXI.Rectangle} A rectangle of the bounds
     */


    Bounds.prototype.getRectangle = function getRectangle(rect) {
        if (this.minX > this.maxX || this.minY > this.maxY) {
            return _math.Rectangle.EMPTY;
        }

        rect = rect || new _math.Rectangle(0, 0, 1, 1);

        rect.x = this.minX;
        rect.y = this.minY;
        rect.width = this.maxX - this.minX;
        rect.height = this.maxY - this.minY;

        return rect;
    };

    /**
     * This function should be inlined when its possible.
     *
     * @param {PIXI.Point} point - The point to add.
     */


    Bounds.prototype.addPoint = function addPoint(point) {
        this.minX = Math.min(this.minX, point.x);
        this.maxX = Math.max(this.maxX, point.x);
        this.minY = Math.min(this.minY, point.y);
        this.maxY = Math.max(this.maxY, point.y);
    };

    /**
     * Adds a quad, not transformed
     *
     * @param {Float32Array} vertices - The verts to add.
     */


    Bounds.prototype.addQuad = function addQuad(vertices) {
        var minX = this.minX;
        var minY = this.minY;
        var maxX = this.maxX;
        var maxY = this.maxY;

        var x = vertices[0];
        var y = vertices[1];

        minX = x < minX ? x : minX;
        minY = y < minY ? y : minY;
        maxX = x > maxX ? x : maxX;
        maxY = y > maxY ? y : maxY;

        x = vertices[2];
        y = vertices[3];
        minX = x < minX ? x : minX;
        minY = y < minY ? y : minY;
        maxX = x > maxX ? x : maxX;
        maxY = y > maxY ? y : maxY;

        x = vertices[4];
        y = vertices[5];
        minX = x < minX ? x : minX;
        minY = y < minY ? y : minY;
        maxX = x > maxX ? x : maxX;
        maxY = y > maxY ? y : maxY;

        x = vertices[6];
        y = vertices[7];
        minX = x < minX ? x : minX;
        minY = y < minY ? y : minY;
        maxX = x > maxX ? x : maxX;
        maxY = y > maxY ? y : maxY;

        this.minX = minX;
        this.minY = minY;
        this.maxX = maxX;
        this.maxY = maxY;
    };

    /**
     * Adds sprite frame, transformed.
     *
     * @param {PIXI.TransformBase} transform - TODO
     * @param {number} x0 - TODO
     * @param {number} y0 - TODO
     * @param {number} x1 - TODO
     * @param {number} y1 - TODO
     */


    Bounds.prototype.addFrame = function addFrame(transform, x0, y0, x1, y1) {
        var matrix = transform.worldTransform;
        var a = matrix.a;
        var b = matrix.b;
        var c = matrix.c;
        var d = matrix.d;
        var tx = matrix.tx;
        var ty = matrix.ty;

        var minX = this.minX;
        var minY = this.minY;
        var maxX = this.maxX;
        var maxY = this.maxY;

        var x = a * x0 + c * y0 + tx;
        var y = b * x0 + d * y0 + ty;

        minX = x < minX ? x : minX;
        minY = y < minY ? y : minY;
        maxX = x > maxX ? x : maxX;
        maxY = y > maxY ? y : maxY;

        x = a * x1 + c * y0 + tx;
        y = b * x1 + d * y0 + ty;
        minX = x < minX ? x : minX;
        minY = y < minY ? y : minY;
        maxX = x > maxX ? x : maxX;
        maxY = y > maxY ? y : maxY;

        x = a * x0 + c * y1 + tx;
        y = b * x0 + d * y1 + ty;
        minX = x < minX ? x : minX;
        minY = y < minY ? y : minY;
        maxX = x > maxX ? x : maxX;
        maxY = y > maxY ? y : maxY;

        x = a * x1 + c * y1 + tx;
        y = b * x1 + d * y1 + ty;
        minX = x < minX ? x : minX;
        minY = y < minY ? y : minY;
        maxX = x > maxX ? x : maxX;
        maxY = y > maxY ? y : maxY;

        this.minX = minX;
        this.minY = minY;
        this.maxX = maxX;
        this.maxY = maxY;
    };

    /**
     * Add an array of vertices
     *
     * @param {PIXI.TransformBase} transform - TODO
     * @param {Float32Array} vertices - TODO
     * @param {number} beginOffset - TODO
     * @param {number} endOffset - TODO
     */


    Bounds.prototype.addVertices = function addVertices(transform, vertices, beginOffset, endOffset) {
        var matrix = transform.worldTransform;
        var a = matrix.a;
        var b = matrix.b;
        var c = matrix.c;
        var d = matrix.d;
        var tx = matrix.tx;
        var ty = matrix.ty;

        var minX = this.minX;
        var minY = this.minY;
        var maxX = this.maxX;
        var maxY = this.maxY;

        for (var i = beginOffset; i < endOffset; i += 2) {
            var rawX = vertices[i];
            var rawY = vertices[i + 1];
            var x = a * rawX + c * rawY + tx;
            var y = d * rawY + b * rawX + ty;

            minX = x < minX ? x : minX;
            minY = y < minY ? y : minY;
            maxX = x > maxX ? x : maxX;
            maxY = y > maxY ? y : maxY;
        }

        this.minX = minX;
        this.minY = minY;
        this.maxX = maxX;
        this.maxY = maxY;
    };

    /**
     * Adds other Bounds
     *
     * @param {PIXI.Bounds} bounds - TODO
     */


    Bounds.prototype.addBounds = function addBounds(bounds) {
        var minX = this.minX;
        var minY = this.minY;
        var maxX = this.maxX;
        var maxY = this.maxY;

        this.minX = bounds.minX < minX ? bounds.minX : minX;
        this.minY = bounds.minY < minY ? bounds.minY : minY;
        this.maxX = bounds.maxX > maxX ? bounds.maxX : maxX;
        this.maxY = bounds.maxY > maxY ? bounds.maxY : maxY;
    };

    /**
     * Adds other Bounds, masked with Bounds
     *
     * @param {PIXI.Bounds} bounds - TODO
     * @param {PIXI.Bounds} mask - TODO
     */


    Bounds.prototype.addBoundsMask = function addBoundsMask(bounds, mask) {
        var _minX = bounds.minX > mask.minX ? bounds.minX : mask.minX;
        var _minY = bounds.minY > mask.minY ? bounds.minY : mask.minY;
        var _maxX = bounds.maxX < mask.maxX ? bounds.maxX : mask.maxX;
        var _maxY = bounds.maxY < mask.maxY ? bounds.maxY : mask.maxY;

        if (_minX <= _maxX && _minY <= _maxY) {
            var minX = this.minX;
            var minY = this.minY;
            var maxX = this.maxX;
            var maxY = this.maxY;

            this.minX = _minX < minX ? _minX : minX;
            this.minY = _minY < minY ? _minY : minY;
            this.maxX = _maxX > maxX ? _maxX : maxX;
            this.maxY = _maxY > maxY ? _maxY : maxY;
        }
    };

    /**
     * Adds other Bounds, masked with Rectangle
     *
     * @param {PIXI.Bounds} bounds - TODO
     * @param {PIXI.Rectangle} area - TODO
     */


    Bounds.prototype.addBoundsArea = function addBoundsArea(bounds, area) {
        var _minX = bounds.minX > area.x ? bounds.minX : area.x;
        var _minY = bounds.minY > area.y ? bounds.minY : area.y;
        var _maxX = bounds.maxX < area.x + area.width ? bounds.maxX : area.x + area.width;
        var _maxY = bounds.maxY < area.y + area.height ? bounds.maxY : area.y + area.height;

        if (_minX <= _maxX && _minY <= _maxY) {
            var minX = this.minX;
            var minY = this.minY;
            var maxX = this.maxX;
            var maxY = this.maxY;

            this.minX = _minX < minX ? _minX : minX;
            this.minY = _minY < minY ? _minY : minY;
            this.maxX = _maxX > maxX ? _maxX : maxX;
            this.maxY = _maxY > maxY ? _maxY : maxY;
        }
    };

    return Bounds;
}();

exports.default = Bounds;
//# sourceMappingURL=Bounds.js.map

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _math = __webpack_require__(14);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Generic class to deal with traditional 2D matrix transforms
 *
 * @class
 * @memberof PIXI
 */
var TransformBase = function () {
  /**
   *
   */
  function TransformBase() {
    _classCallCheck(this, TransformBase);

    /**
     * The global matrix transform. It can be swapped temporarily by some functions like getLocalBounds()
     *
     * @member {PIXI.Matrix}
     */
    this.worldTransform = new _math.Matrix();

    /**
     * The local matrix transform
     *
     * @member {PIXI.Matrix}
     */
    this.localTransform = new _math.Matrix();

    this._worldID = 0;
    this._parentID = 0;
  }

  /**
   * TransformBase does not have decomposition, so this function wont do anything
   */


  TransformBase.prototype.updateLocalTransform = function updateLocalTransform() {}
  // empty


  /**
   * Updates the values of the object and applies the parent's transform.
   *
   * @param {PIXI.TransformBase} parentTransform - The transform of the parent of this object
   */
  ;

  TransformBase.prototype.updateTransform = function updateTransform(parentTransform) {
    var pt = parentTransform.worldTransform;
    var wt = this.worldTransform;
    var lt = this.localTransform;

    // concat the parent matrix with the objects transform.
    wt.a = lt.a * pt.a + lt.b * pt.c;
    wt.b = lt.a * pt.b + lt.b * pt.d;
    wt.c = lt.c * pt.a + lt.d * pt.c;
    wt.d = lt.c * pt.b + lt.d * pt.d;
    wt.tx = lt.tx * pt.a + lt.ty * pt.c + pt.tx;
    wt.ty = lt.tx * pt.b + lt.ty * pt.d + pt.ty;

    this._worldID++;
  };

  return TransformBase;
}();

/**
 * Updates the values of the object and applies the parent's transform.
 * @param  parentTransform {PIXI.Transform} The transform of the parent of this object
 *
 */


exports.default = TransformBase;
TransformBase.prototype.updateWorldTransform = TransformBase.prototype.updateTransform;

TransformBase.IDENTITY = new TransformBase();
//# sourceMappingURL=TransformBase.js.map

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseTexture = __webpack_require__(21);

var _BaseTexture2 = _interopRequireDefault(_BaseTexture);

var _VideoBaseTexture = __webpack_require__(104);

var _VideoBaseTexture2 = _interopRequireDefault(_VideoBaseTexture);

var _TextureUvs = __webpack_require__(107);

var _TextureUvs2 = _interopRequireDefault(_TextureUvs);

var _eventemitter = __webpack_require__(18);

var _eventemitter2 = _interopRequireDefault(_eventemitter);

var _math = __webpack_require__(14);

var _utils = __webpack_require__(13);

var _settings = __webpack_require__(15);

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A texture stores the information that represents an image or part of an image. It cannot be added
 * to the display list directly. Instead use it as the texture for a Sprite. If no frame is provided
 * then the whole image is used.
 *
 * You can directly create a texture from an image and then reuse it multiple times like this :
 *
 * ```js
 * let texture = PIXI.Texture.fromImage('assets/image.png');
 * let sprite1 = new PIXI.Sprite(texture);
 * let sprite2 = new PIXI.Sprite(texture);
 * ```
 *
 * Textures made from SVGs, loaded or not, cannot be used before the file finishes processing.
 * You can check for this by checking the sprite's _textureID property.
 * ```js
 * var texture = PIXI.Texture.fromImage('assets/image.svg');
 * var sprite1 = new PIXI.Sprite(texture);
 * //sprite1._textureID should not be undefined if the texture has finished processing the SVG file
 * ```
 * You can use a ticker or rAF to ensure your sprites load the finished textures after processing. See issue #3068.
 *
 * @class
 * @extends EventEmitter
 * @memberof PIXI
 */
var Texture = function (_EventEmitter) {
    _inherits(Texture, _EventEmitter);

    /**
     * @param {PIXI.BaseTexture} baseTexture - The base texture source to create the texture from
     * @param {PIXI.Rectangle} [frame] - The rectangle frame of the texture to show
     * @param {PIXI.Rectangle} [orig] - The area of original texture
     * @param {PIXI.Rectangle} [trim] - Trimmed rectangle of original texture
     * @param {number} [rotate] - indicates how the texture was rotated by texture packer. See {@link PIXI.GroupD8}
     */
    function Texture(baseTexture, frame, orig, trim, rotate) {
        _classCallCheck(this, Texture);

        /**
         * Does this Texture have any frame data assigned to it?
         *
         * @member {boolean}
         */
        var _this = _possibleConstructorReturn(this, _EventEmitter.call(this));

        _this.noFrame = false;

        if (!frame) {
            _this.noFrame = true;
            frame = new _math.Rectangle(0, 0, 1, 1);
        }

        if (baseTexture instanceof Texture) {
            baseTexture = baseTexture.baseTexture;
        }

        /**
         * The base texture that this texture uses.
         *
         * @member {PIXI.BaseTexture}
         */
        _this.baseTexture = baseTexture;

        /**
         * This is the area of the BaseTexture image to actually copy to the Canvas / WebGL when rendering,
         * irrespective of the actual frame size or placement (which can be influenced by trimmed texture atlases)
         *
         * @member {PIXI.Rectangle}
         */
        _this._frame = frame;

        /**
         * This is the trimmed area of original texture, before it was put in atlas
         *
         * @member {PIXI.Rectangle}
         */
        _this.trim = trim;

        /**
         * This will let the renderer know if the texture is valid. If it's not then it cannot be rendered.
         *
         * @member {boolean}
         */
        _this.valid = false;

        /**
         * This will let a renderer know that a texture has been updated (used mainly for webGL uv updates)
         *
         * @member {boolean}
         */
        _this.requiresUpdate = false;

        /**
         * The WebGL UV data cache.
         *
         * @member {PIXI.TextureUvs}
         * @private
         */
        _this._uvs = null;

        /**
         * This is the area of original texture, before it was put in atlas
         *
         * @member {PIXI.Rectangle}
         */
        _this.orig = orig || frame; // new Rectangle(0, 0, 1, 1);

        _this._rotate = Number(rotate || 0);

        if (rotate === true) {
            // this is old texturepacker legacy, some games/libraries are passing "true" for rotated textures
            _this._rotate = 2;
        } else if (_this._rotate % 2 !== 0) {
            throw new Error('attempt to use diamond-shaped UVs. If you are sure, set rotation manually');
        }

        if (baseTexture.hasLoaded) {
            if (_this.noFrame) {
                frame = new _math.Rectangle(0, 0, baseTexture.width, baseTexture.height);

                // if there is no frame we should monitor for any base texture changes..
                baseTexture.on('update', _this.onBaseTextureUpdated, _this);
            }
            _this.frame = frame;
        } else {
            baseTexture.once('loaded', _this.onBaseTextureLoaded, _this);
        }

        /**
         * Fired when the texture is updated. This happens if the frame or the baseTexture is updated.
         *
         * @event PIXI.Texture#update
         * @protected
         * @param {PIXI.Texture} texture - Instance of texture being updated.
         */

        _this._updateID = 0;

        /**
         * Extra field for extra plugins. May contain clamp settings and some matrices
         * @type {Object}
         */
        _this.transform = null;

        /**
         * The ids under which this Texture has been added to the texture cache. This is
         * automatically set as long as Texture.addToCache is used, but may not be set if a
         * Texture is added directly to the TextureCache array.
         *
         * @member {string[]}
         */
        _this.textureCacheIds = [];
        return _this;
    }

    /**
     * Updates this texture on the gpu.
     *
     */


    Texture.prototype.update = function update() {
        this.baseTexture.update();
    };

    /**
     * Called when the base texture is loaded
     *
     * @private
     * @param {PIXI.BaseTexture} baseTexture - The base texture.
     */


    Texture.prototype.onBaseTextureLoaded = function onBaseTextureLoaded(baseTexture) {
        this._updateID++;

        // TODO this code looks confusing.. boo to abusing getters and setters!
        if (this.noFrame) {
            this.frame = new _math.Rectangle(0, 0, baseTexture.width, baseTexture.height);
        } else {
            this.frame = this._frame;
        }

        this.baseTexture.on('update', this.onBaseTextureUpdated, this);
        this.emit('update', this);
    };

    /**
     * Called when the base texture is updated
     *
     * @private
     * @param {PIXI.BaseTexture} baseTexture - The base texture.
     */


    Texture.prototype.onBaseTextureUpdated = function onBaseTextureUpdated(baseTexture) {
        this._updateID++;

        this._frame.width = baseTexture.width;
        this._frame.height = baseTexture.height;

        this.emit('update', this);
    };

    /**
     * Destroys this texture
     *
     * @param {boolean} [destroyBase=false] Whether to destroy the base texture as well
     */


    Texture.prototype.destroy = function destroy(destroyBase) {
        if (this.baseTexture) {
            if (destroyBase) {
                // delete the texture if it exists in the texture cache..
                // this only needs to be removed if the base texture is actually destroyed too..
                if (_utils.TextureCache[this.baseTexture.imageUrl]) {
                    Texture.removeFromCache(this.baseTexture.imageUrl);
                }

                this.baseTexture.destroy();
            }

            this.baseTexture.off('update', this.onBaseTextureUpdated, this);
            this.baseTexture.off('loaded', this.onBaseTextureLoaded, this);

            this.baseTexture = null;
        }

        this._frame = null;
        this._uvs = null;
        this.trim = null;
        this.orig = null;

        this.valid = false;

        Texture.removeFromCache(this);
        this.textureCacheIds = null;
    };

    /**
     * Creates a new texture object that acts the same as this one.
     *
     * @return {PIXI.Texture} The new texture
     */


    Texture.prototype.clone = function clone() {
        return new Texture(this.baseTexture, this.frame, this.orig, this.trim, this.rotate);
    };

    /**
     * Updates the internal WebGL UV cache.
     *
     * @protected
     */


    Texture.prototype._updateUvs = function _updateUvs() {
        if (!this._uvs) {
            this._uvs = new _TextureUvs2.default();
        }

        this._uvs.set(this._frame, this.baseTexture, this.rotate);

        this._updateID++;
    };

    /**
     * Helper function that creates a Texture object from the given image url.
     * If the image is not in the texture cache it will be  created and loaded.
     *
     * @static
     * @param {string} imageUrl - The image url of the texture
     * @param {boolean} [crossorigin] - Whether requests should be treated as crossorigin
     * @param {number} [scaleMode=PIXI.settings.SCALE_MODE] - See {@link PIXI.SCALE_MODES} for possible values
     * @param {number} [sourceScale=(auto)] - Scale for the original image, used with SVG images.
     * @return {PIXI.Texture} The newly created texture
     */


    Texture.fromImage = function fromImage(imageUrl, crossorigin, scaleMode, sourceScale) {
        var texture = _utils.TextureCache[imageUrl];

        if (!texture) {
            texture = new Texture(_BaseTexture2.default.fromImage(imageUrl, crossorigin, scaleMode, sourceScale));
            Texture.addToCache(texture, imageUrl);
        }

        return texture;
    };

    /**
     * Helper function that creates a sprite that will contain a texture from the TextureCache based on the frameId
     * The frame ids are created when a Texture packer file has been loaded
     *
     * @static
     * @param {string} frameId - The frame Id of the texture in the cache
     * @return {PIXI.Texture} The newly created texture
     */


    Texture.fromFrame = function fromFrame(frameId) {
        var texture = _utils.TextureCache[frameId];

        if (!texture) {
            throw new Error('The frameId "' + frameId + '" does not exist in the texture cache');
        }

        return texture;
    };

    /**
     * Helper function that creates a new Texture based on the given canvas element.
     *
     * @static
     * @param {HTMLCanvasElement} canvas - The canvas element source of the texture
     * @param {number} [scaleMode=PIXI.settings.SCALE_MODE] - See {@link PIXI.SCALE_MODES} for possible values
     * @param {string} [origin='canvas'] - A string origin of who created the base texture
     * @return {PIXI.Texture} The newly created texture
     */


    Texture.fromCanvas = function fromCanvas(canvas, scaleMode) {
        var origin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'canvas';

        return new Texture(_BaseTexture2.default.fromCanvas(canvas, scaleMode, origin));
    };

    /**
     * Helper function that creates a new Texture based on the given video element.
     *
     * @static
     * @param {HTMLVideoElement|string} video - The URL or actual element of the video
     * @param {number} [scaleMode=PIXI.settings.SCALE_MODE] - See {@link PIXI.SCALE_MODES} for possible values
     * @return {PIXI.Texture} The newly created texture
     */


    Texture.fromVideo = function fromVideo(video, scaleMode) {
        if (typeof video === 'string') {
            return Texture.fromVideoUrl(video, scaleMode);
        }

        return new Texture(_VideoBaseTexture2.default.fromVideo(video, scaleMode));
    };

    /**
     * Helper function that creates a new Texture based on the video url.
     *
     * @static
     * @param {string} videoUrl - URL of the video
     * @param {number} [scaleMode=PIXI.settings.SCALE_MODE] - See {@link PIXI.SCALE_MODES} for possible values
     * @return {PIXI.Texture} The newly created texture
     */


    Texture.fromVideoUrl = function fromVideoUrl(videoUrl, scaleMode) {
        return new Texture(_VideoBaseTexture2.default.fromUrl(videoUrl, scaleMode));
    };

    /**
     * Helper function that creates a new Texture based on the source you provide.
     * The source can be - frame id, image url, video url, canvas element, video element, base texture
     *
     * @static
     * @param {number|string|HTMLImageElement|HTMLCanvasElement|HTMLVideoElement|PIXI.BaseTexture}
     *        source - Source to create texture from
     * @return {PIXI.Texture} The newly created texture
     */


    Texture.from = function from(source) {
        // TODO auto detect cross origin..
        // TODO pass in scale mode?
        if (typeof source === 'string') {
            var texture = _utils.TextureCache[source];

            if (!texture) {
                // check if its a video..
                var isVideo = source.match(/\.(mp4|webm|ogg|h264|avi|mov)$/) !== null;

                if (isVideo) {
                    return Texture.fromVideoUrl(source);
                }

                return Texture.fromImage(source);
            }

            return texture;
        } else if (source instanceof HTMLImageElement) {
            return new Texture(_BaseTexture2.default.from(source));
        } else if (source instanceof HTMLCanvasElement) {
            return Texture.fromCanvas(source, _settings2.default.SCALE_MODE, 'HTMLCanvasElement');
        } else if (source instanceof HTMLVideoElement) {
            return Texture.fromVideo(source);
        } else if (source instanceof _BaseTexture2.default) {
            return new Texture(source);
        }

        // lets assume its a texture!
        return source;
    };

    /**
     * Create a texture from a source and add to the cache.
     *
     * @static
     * @param {HTMLImageElement|HTMLCanvasElement} source - The input source.
     * @param {String} imageUrl - File name of texture, for cache and resolving resolution.
     * @param {String} [name] - Human readible name for the texture cache. If no name is
     *        specified, only `imageUrl` will be used as the cache ID.
     * @return {PIXI.Texture} Output texture
     */


    Texture.fromLoader = function fromLoader(source, imageUrl, name) {
        var baseTexture = new _BaseTexture2.default(source, undefined, (0, _utils.getResolutionOfUrl)(imageUrl));
        var texture = new Texture(baseTexture);

        baseTexture.imageUrl = imageUrl;

        // No name, use imageUrl instead
        if (!name) {
            name = imageUrl;
        }

        // lets also add the frame to pixi's global cache for fromFrame and fromImage fucntions
        _BaseTexture2.default.addToCache(texture.baseTexture, name);
        Texture.addToCache(texture, name);

        // also add references by url if they are different.
        if (name !== imageUrl) {
            _BaseTexture2.default.addToCache(texture.baseTexture, imageUrl);
            Texture.addToCache(texture, imageUrl);
        }

        return texture;
    };

    /**
     * Adds a Texture to the global TextureCache. This cache is shared across the whole PIXI object.
     *
     * @static
     * @param {PIXI.Texture} texture - The Texture to add to the cache.
     * @param {string} id - The id that the Texture will be stored against.
     */


    Texture.addToCache = function addToCache(texture, id) {
        if (id) {
            if (texture.textureCacheIds.indexOf(id) === -1) {
                texture.textureCacheIds.push(id);
            }

            // @if DEBUG
            /* eslint-disable no-console */
            if (_utils.TextureCache[id]) {
                console.warn('Texture added to the cache with an id [' + id + '] that already had an entry');
            }
            /* eslint-enable no-console */
            // @endif

            _utils.TextureCache[id] = texture;
        }
    };

    /**
     * Remove a Texture from the global TextureCache.
     *
     * @static
     * @param {string|PIXI.Texture} texture - id of a Texture to be removed, or a Texture instance itself
     * @return {PIXI.Texture|null} The Texture that was removed
     */


    Texture.removeFromCache = function removeFromCache(texture) {
        if (typeof texture === 'string') {
            var textureFromCache = _utils.TextureCache[texture];

            if (textureFromCache) {
                var index = textureFromCache.textureCacheIds.indexOf(texture);

                if (index > -1) {
                    textureFromCache.textureCacheIds.splice(index, 1);
                }

                delete _utils.TextureCache[texture];

                return textureFromCache;
            }
        } else if (texture && texture.textureCacheIds) {
            for (var i = 0; i < texture.textureCacheIds.length; ++i) {
                delete _utils.TextureCache[texture.textureCacheIds[i]];
            }

            texture.textureCacheIds.length = 0;

            return texture;
        }

        return null;
    };

    /**
     * The frame specifies the region of the base texture that this texture uses.
     *
     * @member {PIXI.Rectangle}
     */


    _createClass(Texture, [{
        key: 'frame',
        get: function get() {
            return this._frame;
        },
        set: function set(frame) // eslint-disable-line require-jsdoc
        {
            this._frame = frame;

            this.noFrame = false;

            if (frame.x + frame.width > this.baseTexture.width || frame.y + frame.height > this.baseTexture.height) {
                throw new Error('Texture Error: frame does not fit inside the base Texture dimensions: ' + ('X: ' + frame.x + ' + ' + frame.width + ' = ' + (frame.x + frame.width) + ' > ' + this.baseTexture.width + ' ') + ('Y: ' + frame.y + ' + ' + frame.height + ' = ' + (frame.y + frame.height) + ' > ' + this.baseTexture.height));
            }

            // this.valid = frame && frame.width && frame.height && this.baseTexture.source && this.baseTexture.hasLoaded;
            this.valid = frame && frame.width && frame.height && this.baseTexture.hasLoaded;

            if (!this.trim && !this.rotate) {
                this.orig = frame;
            }

            if (this.valid) {
                this._updateUvs();
            }
        }

        /**
         * Indicates whether the texture is rotated inside the atlas
         * set to 2 to compensate for texture packer rotation
         * set to 6 to compensate for spine packer rotation
         * can be used to rotate or mirror sprites
         * See {@link PIXI.GroupD8} for explanation
         *
         * @member {number}
         */

    }, {
        key: 'rotate',
        get: function get() {
            return this._rotate;
        },
        set: function set(rotate) // eslint-disable-line require-jsdoc
        {
            this._rotate = rotate;
            if (this.valid) {
                this._updateUvs();
            }
        }

        /**
         * The width of the Texture in pixels.
         *
         * @member {number}
         */

    }, {
        key: 'width',
        get: function get() {
            return this.orig.width;
        }

        /**
         * The height of the Texture in pixels.
         *
         * @member {number}
         */

    }, {
        key: 'height',
        get: function get() {
            return this.orig.height;
        }
    }]);

    return Texture;
}(_eventemitter2.default);

exports.default = Texture;


function createWhiteTexture() {
    var canvas = document.createElement('canvas');

    canvas.width = 10;
    canvas.height = 10;

    var context = canvas.getContext('2d');

    context.fillStyle = 'white';
    context.fillRect(0, 0, 10, 10);

    return new Texture(new _BaseTexture2.default(canvas));
}

function removeAllHandlers(tex) {
    tex.destroy = function _emptyDestroy() {/* empty */};
    tex.on = function _emptyOn() {/* empty */};
    tex.once = function _emptyOnce() {/* empty */};
    tex.emit = function _emptyEmit() {/* empty */};
}

/**
 * An empty texture, used often to not have to create multiple empty textures.
 * Can not be destroyed.
 *
 * @static
 * @constant
 */
Texture.EMPTY = new Texture(new _BaseTexture2.default());
removeAllHandlers(Texture.EMPTY);
removeAllHandlers(Texture.EMPTY.baseTexture);

/**
 * A white texture of 10x10 size, used for graphics and other things
 * Can not be destroyed.
 *
 * @static
 * @constant
 */
Texture.WHITE = createWhiteTexture();
removeAllHandlers(Texture.WHITE);
removeAllHandlers(Texture.WHITE.baseTexture);
//# sourceMappingURL=Texture.js.map

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Ticker = exports.shared = undefined;

var _Ticker = __webpack_require__(105);

var _Ticker2 = _interopRequireDefault(_Ticker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The shared ticker instance used by {@link PIXI.extras.AnimatedSprite}.
 * and by {@link PIXI.interaction.InteractionManager}.
 * The property {@link PIXI.ticker.Ticker#autoStart} is set to `true`
 * for this instance. Please follow the examples for usage, including
 * how to opt-out of auto-starting the shared ticker.
 *
 * @example
 * let ticker = PIXI.ticker.shared;
 * // Set this to prevent starting this ticker when listeners are added.
 * // By default this is true only for the PIXI.ticker.shared instance.
 * ticker.autoStart = false;
 * // FYI, call this to ensure the ticker is stopped. It should be stopped
 * // if you have not attempted to render anything yet.
 * ticker.stop();
 * // Call this when you are ready for a running shared ticker.
 * ticker.start();
 *
 * @example
 * // You may use the shared ticker to render...
 * let renderer = PIXI.autoDetectRenderer(800, 600);
 * let stage = new PIXI.Container();
 * let interactionManager = PIXI.interaction.InteractionManager(renderer);
 * document.body.appendChild(renderer.view);
 * ticker.add(function (time) {
 *     renderer.render(stage);
 * });
 *
 * @example
 * // Or you can just update it manually.
 * ticker.autoStart = false;
 * ticker.stop();
 * function animate(time) {
 *     ticker.update(time);
 *     renderer.render(stage);
 *     requestAnimationFrame(animate);
 * }
 * animate(performance.now());
 *
 * @type {PIXI.ticker.Ticker}
 * @memberof PIXI.ticker
 */
var shared = new _Ticker2.default();

shared.autoStart = true;
shared.destroy = function () {
  // protect destroying shared ticker
  // this is used by other internal systems
  // like AnimatedSprite and InteractionManager
};

/**
 * This namespace contains an API for interacting with PIXI's internal global update loop.
 *
 * This ticker is used for rendering, {@link PIXI.extras.AnimatedSprite AnimatedSprite},
 * {@link PIXI.interaction.InteractionManager InteractionManager} and many other time-based PIXI systems.
 * @example
 * const ticker = new PIXI.ticker.Ticker();
 * ticker.stop();
 * ticker.add((deltaTime) => {
 *   // do something every frame
 * });
 * ticker.start();
 * @namespace PIXI.ticker
 */
exports.shared = shared;
exports.Ticker = _Ticker2.default;
//# sourceMappingURL=index.js.map

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _WebGLManager2 = __webpack_require__(20);

var _WebGLManager3 = _interopRequireDefault(_WebGLManager2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Base for a common object renderer that can be used as a system renderer plugin.
 *
 * @class
 * @extends PIXI.WebGLManager
 * @memberof PIXI
 */
var ObjectRenderer = function (_WebGLManager) {
  _inherits(ObjectRenderer, _WebGLManager);

  function ObjectRenderer() {
    _classCallCheck(this, ObjectRenderer);

    return _possibleConstructorReturn(this, _WebGLManager.apply(this, arguments));
  }

  /**
   * Starts the renderer and sets the shader
   *
   */
  ObjectRenderer.prototype.start = function start() {}
  // set the shader..


  /**
   * Stops the renderer
   *
   */
  ;

  ObjectRenderer.prototype.stop = function stop() {
    this.flush();
  };

  /**
   * Stub method for rendering content and emptying the current batch.
   *
   */


  ObjectRenderer.prototype.flush = function flush() {}
  // flush!


  /**
   * Renders an object
   *
   * @param {PIXI.DisplayObject} object - The object to render.
   */
  ;

  ObjectRenderer.prototype.render = function render(object) // eslint-disable-line no-unused-vars
  {
    // render the object
  };

  return ObjectRenderer;
}(_WebGLManager3.default);

exports.default = ObjectRenderer;
//# sourceMappingURL=ObjectRenderer.js.map

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _SystemRenderer2 = __webpack_require__(54);

var _SystemRenderer3 = _interopRequireDefault(_SystemRenderer2);

var _MaskManager = __webpack_require__(115);

var _MaskManager2 = _interopRequireDefault(_MaskManager);

var _StencilManager = __webpack_require__(119);

var _StencilManager2 = _interopRequireDefault(_StencilManager);

var _FilterManager = __webpack_require__(120);

var _FilterManager2 = _interopRequireDefault(_FilterManager);

var _RenderTarget = __webpack_require__(23);

var _RenderTarget2 = _interopRequireDefault(_RenderTarget);

var _ObjectRenderer = __webpack_require__(33);

var _ObjectRenderer2 = _interopRequireDefault(_ObjectRenderer);

var _TextureManager = __webpack_require__(123);

var _TextureManager2 = _interopRequireDefault(_TextureManager);

var _BaseTexture = __webpack_require__(21);

var _BaseTexture2 = _interopRequireDefault(_BaseTexture);

var _TextureGarbageCollector = __webpack_require__(124);

var _TextureGarbageCollector2 = _interopRequireDefault(_TextureGarbageCollector);

var _WebGLState = __webpack_require__(125);

var _WebGLState2 = _interopRequireDefault(_WebGLState);

var _mapWebGLDrawModesToPixi = __webpack_require__(127);

var _mapWebGLDrawModesToPixi2 = _interopRequireDefault(_mapWebGLDrawModesToPixi);

var _validateContext = __webpack_require__(128);

var _validateContext2 = _interopRequireDefault(_validateContext);

var _utils = __webpack_require__(13);

var _pixiGlCore = __webpack_require__(16);

var _pixiGlCore2 = _interopRequireDefault(_pixiGlCore);

var _const = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CONTEXT_UID = 0;

/**
 * The WebGLRenderer draws the scene and all its content onto a webGL enabled canvas. This renderer
 * should be used for browsers that support webGL. This Render works by automatically managing webGLBatchs.
 * So no need for Sprite Batches or Sprite Clouds.
 * Don't forget to add the view to your DOM or you will not see anything :)
 *
 * @class
 * @memberof PIXI
 * @extends PIXI.SystemRenderer
 */

var WebGLRenderer = function (_SystemRenderer) {
    _inherits(WebGLRenderer, _SystemRenderer);

    // eslint-disable-next-line valid-jsdoc
    /**
     *
     * @param {object} [options] - The optional renderer parameters
     * @param {number} [options.width=800] - the width of the screen
     * @param {number} [options.height=600] - the height of the screen
     * @param {HTMLCanvasElement} [options.view] - the canvas to use as a view, optional
     * @param {boolean} [options.transparent=false] - If the render view is transparent, default false
     * @param {boolean} [options.autoResize=false] - If the render view is automatically resized, default false
     * @param {boolean} [options.antialias=false] - sets antialias. If not available natively then FXAA
     *  antialiasing is used
     * @param {boolean} [options.forceFXAA=false] - forces FXAA antialiasing to be used over native.
     *  FXAA is faster, but may not always look as great
     * @param {number} [options.resolution=1] - The resolution / device pixel ratio of the renderer.
     *  The resolution of the renderer retina would be 2.
     * @param {boolean} [options.clearBeforeRender=true] - This sets if the renderer will clear
     *  the canvas or not before the new render pass. If you wish to set this to false, you *must* set
     *  preserveDrawingBuffer to `true`.
     * @param {boolean} [options.preserveDrawingBuffer=false] - enables drawing buffer preservation,
     *  enable this if you need to call toDataUrl on the webgl context.
     * @param {boolean} [options.roundPixels=false] - If true PixiJS will Math.floor() x/y values when
     *  rendering, stopping pixel interpolation.
     * @param {number} [options.backgroundColor=0x000000] - The background color of the rendered area
     *  (shown if not transparent).
     * @param {boolean} [options.legacy=false] - If true PixiJS will aim to ensure compatibility
     * with older / less advanced devices. If you experiance unexplained flickering try setting this to true.
     */
    function WebGLRenderer(options, arg2, arg3) {
        _classCallCheck(this, WebGLRenderer);

        var _this = _possibleConstructorReturn(this, _SystemRenderer.call(this, 'WebGL', options, arg2, arg3));

        _this.legacy = _this.options.legacy;

        if (_this.legacy) {
            _pixiGlCore2.default.VertexArrayObject.FORCE_NATIVE = true;
        }

        /**
         * The type of this renderer as a standardised const
         *
         * @member {number}
         * @see PIXI.RENDERER_TYPE
         */
        _this.type = _const.RENDERER_TYPE.WEBGL;

        _this.handleContextLost = _this.handleContextLost.bind(_this);
        _this.handleContextRestored = _this.handleContextRestored.bind(_this);

        _this.view.addEventListener('webglcontextlost', _this.handleContextLost, false);
        _this.view.addEventListener('webglcontextrestored', _this.handleContextRestored, false);

        /**
         * The options passed in to create a new webgl context.
         *
         * @member {object}
         * @private
         */
        _this._contextOptions = {
            alpha: _this.transparent,
            antialias: _this.options.antialias,
            premultipliedAlpha: _this.transparent && _this.transparent !== 'notMultiplied',
            stencil: true,
            preserveDrawingBuffer: _this.options.preserveDrawingBuffer
        };

        _this._backgroundColorRgba[3] = _this.transparent ? 0 : 1;

        /**
         * Manages the masks using the stencil buffer.
         *
         * @member {PIXI.MaskManager}
         */
        _this.maskManager = new _MaskManager2.default(_this);

        /**
         * Manages the stencil buffer.
         *
         * @member {PIXI.StencilManager}
         */
        _this.stencilManager = new _StencilManager2.default(_this);

        /**
         * An empty renderer.
         *
         * @member {PIXI.ObjectRenderer}
         */
        _this.emptyRenderer = new _ObjectRenderer2.default(_this);

        /**
         * The currently active ObjectRenderer.
         *
         * @member {PIXI.ObjectRenderer}
         */
        _this.currentRenderer = _this.emptyRenderer;

        _this.initPlugins();

        /**
         * The current WebGL rendering context, it is created here
         *
         * @member {WebGLRenderingContext}
         */
        // initialize the context so it is ready for the managers.
        if (_this.options.context) {
            // checks to see if a context is valid..
            (0, _validateContext2.default)(_this.options.context);
        }

        _this.gl = _this.options.context || _pixiGlCore2.default.createContext(_this.view, _this._contextOptions);

        _this.CONTEXT_UID = CONTEXT_UID++;

        /**
         * The currently active ObjectRenderer.
         *
         * @member {PIXI.WebGLState}
         */
        _this.state = new _WebGLState2.default(_this.gl);

        _this.renderingToScreen = true;

        /**
         * Holds the current state of textures bound to the GPU.
         * @type {Array}
         */
        _this.boundTextures = null;

        /**
         * Holds the current shader
         *
         * @member {PIXI.Shader}
         */
        _this._activeShader = null;

        _this._activeVao = null;

        /**
         * Holds the current render target
         *
         * @member {PIXI.RenderTarget}
         */
        _this._activeRenderTarget = null;

        _this._initContext();

        /**
         * Manages the filters.
         *
         * @member {PIXI.FilterManager}
         */
        _this.filterManager = new _FilterManager2.default(_this);
        // map some webGL blend and drawmodes..
        _this.drawModes = (0, _mapWebGLDrawModesToPixi2.default)(_this.gl);

        _this._nextTextureLocation = 0;

        _this.setBlendMode(0);

        /**
         * Fired after rendering finishes.
         *
         * @event PIXI.WebGLRenderer#postrender
         */

        /**
         * Fired before rendering starts.
         *
         * @event PIXI.WebGLRenderer#prerender
         */

        /**
         * Fired when the WebGL context is set.
         *
         * @event PIXI.WebGLRenderer#context
         * @param {WebGLRenderingContext} gl - WebGL context.
         */
        return _this;
    }

    /**
     * Creates the WebGL context
     *
     * @private
     */


    WebGLRenderer.prototype._initContext = function _initContext() {
        var gl = this.gl;

        // restore a context if it was previously lost
        if (gl.isContextLost() && gl.getExtension('WEBGL_lose_context')) {
            gl.getExtension('WEBGL_lose_context').restoreContext();
        }

        var maxTextures = gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS);

        this._activeShader = null;
        this._activeVao = null;

        this.boundTextures = new Array(maxTextures);
        this.emptyTextures = new Array(maxTextures);

        // create a texture manager...
        this.textureManager = new _TextureManager2.default(this);
        this.textureGC = new _TextureGarbageCollector2.default(this);

        this.state.resetToDefault();

        this.rootRenderTarget = new _RenderTarget2.default(gl, this.width, this.height, null, this.resolution, true);
        this.rootRenderTarget.clearColor = this._backgroundColorRgba;

        this.bindRenderTarget(this.rootRenderTarget);

        // now lets fill up the textures with empty ones!
        var emptyGLTexture = new _pixiGlCore2.default.GLTexture.fromData(gl, null, 1, 1);

        var tempObj = { _glTextures: {} };

        tempObj._glTextures[this.CONTEXT_UID] = {};

        for (var i = 0; i < maxTextures; i++) {
            var empty = new _BaseTexture2.default();

            empty._glTextures[this.CONTEXT_UID] = emptyGLTexture;

            this.boundTextures[i] = tempObj;
            this.emptyTextures[i] = empty;
            this.bindTexture(null, i);
        }

        this.emit('context', gl);

        // setup the width/height properties and gl viewport
        this.resize(this.screen.width, this.screen.height);
    };

    /**
     * Renders the object to its webGL view
     *
     * @param {PIXI.DisplayObject} displayObject - the object to be rendered
     * @param {PIXI.RenderTexture} renderTexture - The render texture to render to.
     * @param {boolean} [clear] - Should the canvas be cleared before the new render
     * @param {PIXI.Transform} [transform] - A transform to apply to the render texture before rendering.
     * @param {boolean} [skipUpdateTransform] - Should we skip the update transform pass?
     */


    WebGLRenderer.prototype.render = function render(displayObject, renderTexture, clear, transform, skipUpdateTransform) {
        // can be handy to know!
        this.renderingToScreen = !renderTexture;

        this.emit('prerender');

        // no point rendering if our context has been blown up!
        if (!this.gl || this.gl.isContextLost()) {
            return;
        }

        this._nextTextureLocation = 0;

        if (!renderTexture) {
            this._lastObjectRendered = displayObject;
        }

        if (!skipUpdateTransform) {
            // update the scene graph
            var cacheParent = displayObject.parent;

            displayObject.parent = this._tempDisplayObjectParent;
            displayObject.updateTransform();
            displayObject.parent = cacheParent;
            // displayObject.hitArea = //TODO add a temp hit area
        }

        this.bindRenderTexture(renderTexture, transform);

        this.currentRenderer.start();

        if (clear !== undefined ? clear : this.clearBeforeRender) {
            this._activeRenderTarget.clear();
        }

        displayObject.renderWebGL(this);

        // apply transform..
        this.currentRenderer.flush();

        // this.setObjectRenderer(this.emptyRenderer);

        this.textureGC.update();

        this.emit('postrender');
    };

    /**
     * Changes the current renderer to the one given in parameter
     *
     * @param {PIXI.ObjectRenderer} objectRenderer - The object renderer to use.
     */


    WebGLRenderer.prototype.setObjectRenderer = function setObjectRenderer(objectRenderer) {
        if (this.currentRenderer === objectRenderer) {
            return;
        }

        this.currentRenderer.stop();
        this.currentRenderer = objectRenderer;
        this.currentRenderer.start();
    };

    /**
     * This should be called if you wish to do some custom rendering
     * It will basically render anything that may be batched up such as sprites
     *
     */


    WebGLRenderer.prototype.flush = function flush() {
        this.setObjectRenderer(this.emptyRenderer);
    };

    /**
     * Resizes the webGL view to the specified width and height.
     *
     * @param {number} screenWidth - the new width of the screen
     * @param {number} screenHeight - the new height of the screen
     */


    WebGLRenderer.prototype.resize = function resize(screenWidth, screenHeight) {
        //  if(width * this.resolution === this.width && height * this.resolution === this.height)return;

        _SystemRenderer3.default.prototype.resize.call(this, screenWidth, screenHeight);

        this.rootRenderTarget.resize(screenWidth, screenHeight);

        if (this._activeRenderTarget === this.rootRenderTarget) {
            this.rootRenderTarget.activate();

            if (this._activeShader) {
                this._activeShader.uniforms.projectionMatrix = this.rootRenderTarget.projectionMatrix.toArray(true);
            }
        }
    };

    /**
     * Resizes the webGL view to the specified width and height.
     *
     * @param {number} blendMode - the desired blend mode
     */


    WebGLRenderer.prototype.setBlendMode = function setBlendMode(blendMode) {
        this.state.setBlendMode(blendMode);
    };

    /**
     * Erases the active render target and fills the drawing area with a colour
     *
     * @param {number} [clearColor] - The colour
     */


    WebGLRenderer.prototype.clear = function clear(clearColor) {
        this._activeRenderTarget.clear(clearColor);
    };

    /**
     * Sets the transform of the active render target to the given matrix
     *
     * @param {PIXI.Matrix} matrix - The transformation matrix
     */


    WebGLRenderer.prototype.setTransform = function setTransform(matrix) {
        this._activeRenderTarget.transform = matrix;
    };

    /**
     * Erases the render texture and fills the drawing area with a colour
     *
     * @param {PIXI.RenderTexture} renderTexture - The render texture to clear
     * @param {number} [clearColor] - The colour
     * @return {PIXI.WebGLRenderer} Returns itself.
     */


    WebGLRenderer.prototype.clearRenderTexture = function clearRenderTexture(renderTexture, clearColor) {
        var baseTexture = renderTexture.baseTexture;
        var renderTarget = baseTexture._glRenderTargets[this.CONTEXT_UID];

        if (renderTarget) {
            renderTarget.clear(clearColor);
        }

        return this;
    };

    /**
     * Binds a render texture for rendering
     *
     * @param {PIXI.RenderTexture} renderTexture - The render texture to render
     * @param {PIXI.Transform} transform - The transform to be applied to the render texture
     * @return {PIXI.WebGLRenderer} Returns itself.
     */


    WebGLRenderer.prototype.bindRenderTexture = function bindRenderTexture(renderTexture, transform) {
        var renderTarget = void 0;

        if (renderTexture) {
            var baseTexture = renderTexture.baseTexture;

            if (!baseTexture._glRenderTargets[this.CONTEXT_UID]) {
                // bind the current texture
                this.textureManager.updateTexture(baseTexture, 0);
            }

            this.unbindTexture(baseTexture);

            renderTarget = baseTexture._glRenderTargets[this.CONTEXT_UID];
            renderTarget.setFrame(renderTexture.frame);
        } else {
            renderTarget = this.rootRenderTarget;
        }

        renderTarget.transform = transform;
        this.bindRenderTarget(renderTarget);

        return this;
    };

    /**
     * Changes the current render target to the one given in parameter
     *
     * @param {PIXI.RenderTarget} renderTarget - the new render target
     * @return {PIXI.WebGLRenderer} Returns itself.
     */


    WebGLRenderer.prototype.bindRenderTarget = function bindRenderTarget(renderTarget) {
        if (renderTarget !== this._activeRenderTarget) {
            this._activeRenderTarget = renderTarget;
            renderTarget.activate();

            if (this._activeShader) {
                this._activeShader.uniforms.projectionMatrix = renderTarget.projectionMatrix.toArray(true);
            }

            this.stencilManager.setMaskStack(renderTarget.stencilMaskStack);
        }

        return this;
    };

    /**
     * Changes the current shader to the one given in parameter
     *
     * @param {PIXI.Shader} shader - the new shader
     * @param {boolean} [autoProject=true] - Whether automatically set the projection matrix
     * @return {PIXI.WebGLRenderer} Returns itself.
     */


    WebGLRenderer.prototype.bindShader = function bindShader(shader, autoProject) {
        // TODO cache
        if (this._activeShader !== shader) {
            this._activeShader = shader;
            shader.bind();

            // `autoProject` normally would be a default parameter set to true
            // but because of how Babel transpiles default parameters
            // it hinders the performance of this method.
            if (autoProject !== false) {
                // automatically set the projection matrix
                shader.uniforms.projectionMatrix = this._activeRenderTarget.projectionMatrix.toArray(true);
            }
        }

        return this;
    };

    /**
     * Binds the texture. This will return the location of the bound texture.
     * It may not be the same as the one you pass in. This is due to optimisation that prevents
     * needless binding of textures. For example if the texture is already bound it will return the
     * current location of the texture instead of the one provided. To bypass this use force location
     *
     * @param {PIXI.Texture} texture - the new texture
     * @param {number} location - the suggested texture location
     * @param {boolean} forceLocation - force the location
     * @return {number} bound texture location
     */


    WebGLRenderer.prototype.bindTexture = function bindTexture(texture, location, forceLocation) {
        texture = texture || this.emptyTextures[location];
        texture = texture.baseTexture || texture;
        texture.touched = this.textureGC.count;

        if (!forceLocation) {
            // TODO - maybe look into adding boundIds.. save us the loop?
            for (var i = 0; i < this.boundTextures.length; i++) {
                if (this.boundTextures[i] === texture) {
                    return i;
                }
            }

            if (location === undefined) {
                this._nextTextureLocation++;
                this._nextTextureLocation %= this.boundTextures.length;
                location = this.boundTextures.length - this._nextTextureLocation - 1;
            }
        } else {
            location = location || 0;
        }

        var gl = this.gl;
        var glTexture = texture._glTextures[this.CONTEXT_UID];

        if (!glTexture) {
            // this will also bind the texture..
            this.textureManager.updateTexture(texture, location);
        } else {
            // bind the current texture
            this.boundTextures[location] = texture;
            gl.activeTexture(gl.TEXTURE0 + location);
            gl.bindTexture(gl.TEXTURE_2D, glTexture.texture);
        }

        return location;
    };

    /**
    * unbinds the texture ...
    *
    * @param {PIXI.Texture} texture - the texture to unbind
    * @return {PIXI.WebGLRenderer} Returns itself.
    */


    WebGLRenderer.prototype.unbindTexture = function unbindTexture(texture) {
        var gl = this.gl;

        texture = texture.baseTexture || texture;

        for (var i = 0; i < this.boundTextures.length; i++) {
            if (this.boundTextures[i] === texture) {
                this.boundTextures[i] = this.emptyTextures[i];

                gl.activeTexture(gl.TEXTURE0 + i);
                gl.bindTexture(gl.TEXTURE_2D, this.emptyTextures[i]._glTextures[this.CONTEXT_UID].texture);
            }
        }

        return this;
    };

    /**
     * Creates a new VAO from this renderer's context and state.
     *
     * @return {VertexArrayObject} The new VAO.
     */


    WebGLRenderer.prototype.createVao = function createVao() {
        return new _pixiGlCore2.default.VertexArrayObject(this.gl, this.state.attribState);
    };

    /**
     * Changes the current Vao to the one given in parameter
     *
     * @param {PIXI.VertexArrayObject} vao - the new Vao
     * @return {PIXI.WebGLRenderer} Returns itself.
     */


    WebGLRenderer.prototype.bindVao = function bindVao(vao) {
        if (this._activeVao === vao) {
            return this;
        }

        if (vao) {
            vao.bind();
        } else if (this._activeVao) {
            // TODO this should always be true i think?
            this._activeVao.unbind();
        }

        this._activeVao = vao;

        return this;
    };

    /**
     * Resets the WebGL state so you can render things however you fancy!
     *
     * @return {PIXI.WebGLRenderer} Returns itself.
     */


    WebGLRenderer.prototype.reset = function reset() {
        this.setObjectRenderer(this.emptyRenderer);

        this._activeShader = null;
        this._activeRenderTarget = this.rootRenderTarget;

        // bind the main frame buffer (the screen);
        this.rootRenderTarget.activate();

        this.state.resetToDefault();

        return this;
    };

    /**
     * Handles a lost webgl context
     *
     * @private
     * @param {WebGLContextEvent} event - The context lost event.
     */


    WebGLRenderer.prototype.handleContextLost = function handleContextLost(event) {
        event.preventDefault();
    };

    /**
     * Handles a restored webgl context
     *
     * @private
     */


    WebGLRenderer.prototype.handleContextRestored = function handleContextRestored() {
        this.textureManager.removeAll();
        this._initContext();
    };

    /**
     * Removes everything from the renderer (event listeners, spritebatch, etc...)
     *
     * @param {boolean} [removeView=false] - Removes the Canvas element from the DOM.
     *  See: https://github.com/pixijs/pixi.js/issues/2233
     */


    WebGLRenderer.prototype.destroy = function destroy(removeView) {
        this.destroyPlugins();

        // remove listeners
        this.view.removeEventListener('webglcontextlost', this.handleContextLost);
        this.view.removeEventListener('webglcontextrestored', this.handleContextRestored);

        this.textureManager.destroy();

        // call base destroy
        _SystemRenderer.prototype.destroy.call(this, removeView);

        this.uid = 0;

        // destroy the managers
        this.maskManager.destroy();
        this.stencilManager.destroy();
        this.filterManager.destroy();

        this.maskManager = null;
        this.filterManager = null;
        this.textureManager = null;
        this.currentRenderer = null;

        this.handleContextLost = null;
        this.handleContextRestored = null;

        this._contextOptions = null;
        this.gl.useProgram(null);

        if (this.gl.getExtension('WEBGL_lose_context')) {
            this.gl.getExtension('WEBGL_lose_context').loseContext();
        }

        this.gl = null;

        // this = null;
    };

    return WebGLRenderer;
}(_SystemRenderer3.default);

/**
 * Collection of installed plugins. These are included by default in PIXI, but can be excluded
 * by creating a custom build. Consult the README for more information about creating custom
 * builds and excluding plugins.
 * @name PIXI.WebGLRenderer#plugins
 * @type {object}
 * @readonly
 * @property {PIXI.accessibility.AccessibilityManager} accessibility Support tabbing interactive elements.
 * @property {PIXI.extract.WebGLExtract} extract Extract image data from renderer.
 * @property {PIXI.interaction.InteractionManager} interaction Handles mouse, touch and pointer events.
 * @property {PIXI.prepare.WebGLPrepare} prepare Pre-render display objects.
 */

/**
 * Adds a plugin to the renderer.
 *
 * @method PIXI.WebGLRenderer#registerPlugin
 * @param {string} pluginName - The name of the plugin.
 * @param {Function} ctor - The constructor function or class for the plugin.
 */

exports.default = WebGLRenderer;
_utils.pluginTarget.mixin(WebGLRenderer);
//# sourceMappingURL=WebGLRenderer.js.map

/***/ }),
/* 35 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Point = __webpack_require__(26);

var _Point2 = _interopRequireDefault(_Point);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The PixiJS Matrix class as an object, which makes it a lot faster,
 * here is a representation of it :
 * | a | b | tx|
 * | c | d | ty|
 * | 0 | 0 | 1 |
 *
 * @class
 * @memberof PIXI
 */
var Matrix = function () {
    /**
     * @param {number} [a=1] - x scale
     * @param {number} [b=0] - y skew
     * @param {number} [c=0] - x skew
     * @param {number} [d=1] - y scale
     * @param {number} [tx=0] - x translation
     * @param {number} [ty=0] - y translation
     */
    function Matrix() {
        var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var d = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
        var tx = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
        var ty = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

        _classCallCheck(this, Matrix);

        /**
         * @member {number}
         * @default 1
         */
        this.a = a;

        /**
         * @member {number}
         * @default 0
         */
        this.b = b;

        /**
         * @member {number}
         * @default 0
         */
        this.c = c;

        /**
         * @member {number}
         * @default 1
         */
        this.d = d;

        /**
         * @member {number}
         * @default 0
         */
        this.tx = tx;

        /**
         * @member {number}
         * @default 0
         */
        this.ty = ty;

        this.array = null;
    }

    /**
     * Creates a Matrix object based on the given array. The Element to Matrix mapping order is as follows:
     *
     * a = array[0]
     * b = array[1]
     * c = array[3]
     * d = array[4]
     * tx = array[2]
     * ty = array[5]
     *
     * @param {number[]} array - The array that the matrix will be populated from.
     */


    Matrix.prototype.fromArray = function fromArray(array) {
        this.a = array[0];
        this.b = array[1];
        this.c = array[3];
        this.d = array[4];
        this.tx = array[2];
        this.ty = array[5];
    };

    /**
     * sets the matrix properties
     *
     * @param {number} a - Matrix component
     * @param {number} b - Matrix component
     * @param {number} c - Matrix component
     * @param {number} d - Matrix component
     * @param {number} tx - Matrix component
     * @param {number} ty - Matrix component
     *
     * @return {PIXI.Matrix} This matrix. Good for chaining method calls.
     */


    Matrix.prototype.set = function set(a, b, c, d, tx, ty) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.tx = tx;
        this.ty = ty;

        return this;
    };

    /**
     * Creates an array from the current Matrix object.
     *
     * @param {boolean} transpose - Whether we need to transpose the matrix or not
     * @param {Float32Array} [out=new Float32Array(9)] - If provided the array will be assigned to out
     * @return {number[]} the newly created array which contains the matrix
     */


    Matrix.prototype.toArray = function toArray(transpose, out) {
        if (!this.array) {
            this.array = new Float32Array(9);
        }

        var array = out || this.array;

        if (transpose) {
            array[0] = this.a;
            array[1] = this.b;
            array[2] = 0;
            array[3] = this.c;
            array[4] = this.d;
            array[5] = 0;
            array[6] = this.tx;
            array[7] = this.ty;
            array[8] = 1;
        } else {
            array[0] = this.a;
            array[1] = this.c;
            array[2] = this.tx;
            array[3] = this.b;
            array[4] = this.d;
            array[5] = this.ty;
            array[6] = 0;
            array[7] = 0;
            array[8] = 1;
        }

        return array;
    };

    /**
     * Get a new position with the current transformation applied.
     * Can be used to go from a child's coordinate space to the world coordinate space. (e.g. rendering)
     *
     * @param {PIXI.Point} pos - The origin
     * @param {PIXI.Point} [newPos] - The point that the new position is assigned to (allowed to be same as input)
     * @return {PIXI.Point} The new point, transformed through this matrix
     */


    Matrix.prototype.apply = function apply(pos, newPos) {
        newPos = newPos || new _Point2.default();

        var x = pos.x;
        var y = pos.y;

        newPos.x = this.a * x + this.c * y + this.tx;
        newPos.y = this.b * x + this.d * y + this.ty;

        return newPos;
    };

    /**
     * Get a new position with the inverse of the current transformation applied.
     * Can be used to go from the world coordinate space to a child's coordinate space. (e.g. input)
     *
     * @param {PIXI.Point} pos - The origin
     * @param {PIXI.Point} [newPos] - The point that the new position is assigned to (allowed to be same as input)
     * @return {PIXI.Point} The new point, inverse-transformed through this matrix
     */


    Matrix.prototype.applyInverse = function applyInverse(pos, newPos) {
        newPos = newPos || new _Point2.default();

        var id = 1 / (this.a * this.d + this.c * -this.b);

        var x = pos.x;
        var y = pos.y;

        newPos.x = this.d * id * x + -this.c * id * y + (this.ty * this.c - this.tx * this.d) * id;
        newPos.y = this.a * id * y + -this.b * id * x + (-this.ty * this.a + this.tx * this.b) * id;

        return newPos;
    };

    /**
     * Translates the matrix on the x and y.
     *
     * @param {number} x How much to translate x by
     * @param {number} y How much to translate y by
     * @return {PIXI.Matrix} This matrix. Good for chaining method calls.
     */


    Matrix.prototype.translate = function translate(x, y) {
        this.tx += x;
        this.ty += y;

        return this;
    };

    /**
     * Applies a scale transformation to the matrix.
     *
     * @param {number} x The amount to scale horizontally
     * @param {number} y The amount to scale vertically
     * @return {PIXI.Matrix} This matrix. Good for chaining method calls.
     */


    Matrix.prototype.scale = function scale(x, y) {
        this.a *= x;
        this.d *= y;
        this.c *= x;
        this.b *= y;
        this.tx *= x;
        this.ty *= y;

        return this;
    };

    /**
     * Applies a rotation transformation to the matrix.
     *
     * @param {number} angle - The angle in radians.
     * @return {PIXI.Matrix} This matrix. Good for chaining method calls.
     */


    Matrix.prototype.rotate = function rotate(angle) {
        var cos = Math.cos(angle);
        var sin = Math.sin(angle);

        var a1 = this.a;
        var c1 = this.c;
        var tx1 = this.tx;

        this.a = a1 * cos - this.b * sin;
        this.b = a1 * sin + this.b * cos;
        this.c = c1 * cos - this.d * sin;
        this.d = c1 * sin + this.d * cos;
        this.tx = tx1 * cos - this.ty * sin;
        this.ty = tx1 * sin + this.ty * cos;

        return this;
    };

    /**
     * Appends the given Matrix to this Matrix.
     *
     * @param {PIXI.Matrix} matrix - The matrix to append.
     * @return {PIXI.Matrix} This matrix. Good for chaining method calls.
     */


    Matrix.prototype.append = function append(matrix) {
        var a1 = this.a;
        var b1 = this.b;
        var c1 = this.c;
        var d1 = this.d;

        this.a = matrix.a * a1 + matrix.b * c1;
        this.b = matrix.a * b1 + matrix.b * d1;
        this.c = matrix.c * a1 + matrix.d * c1;
        this.d = matrix.c * b1 + matrix.d * d1;

        this.tx = matrix.tx * a1 + matrix.ty * c1 + this.tx;
        this.ty = matrix.tx * b1 + matrix.ty * d1 + this.ty;

        return this;
    };

    /**
     * Sets the matrix based on all the available properties
     *
     * @param {number} x - Position on the x axis
     * @param {number} y - Position on the y axis
     * @param {number} pivotX - Pivot on the x axis
     * @param {number} pivotY - Pivot on the y axis
     * @param {number} scaleX - Scale on the x axis
     * @param {number} scaleY - Scale on the y axis
     * @param {number} rotation - Rotation in radians
     * @param {number} skewX - Skew on the x axis
     * @param {number} skewY - Skew on the y axis
     * @return {PIXI.Matrix} This matrix. Good for chaining method calls.
     */


    Matrix.prototype.setTransform = function setTransform(x, y, pivotX, pivotY, scaleX, scaleY, rotation, skewX, skewY) {
        var sr = Math.sin(rotation);
        var cr = Math.cos(rotation);
        var cy = Math.cos(skewY);
        var sy = Math.sin(skewY);
        var nsx = -Math.sin(skewX);
        var cx = Math.cos(skewX);

        var a = cr * scaleX;
        var b = sr * scaleX;
        var c = -sr * scaleY;
        var d = cr * scaleY;

        this.a = cy * a + sy * c;
        this.b = cy * b + sy * d;
        this.c = nsx * a + cx * c;
        this.d = nsx * b + cx * d;

        this.tx = x + (pivotX * a + pivotY * c);
        this.ty = y + (pivotX * b + pivotY * d);

        return this;
    };

    /**
     * Prepends the given Matrix to this Matrix.
     *
     * @param {PIXI.Matrix} matrix - The matrix to prepend
     * @return {PIXI.Matrix} This matrix. Good for chaining method calls.
     */


    Matrix.prototype.prepend = function prepend(matrix) {
        var tx1 = this.tx;

        if (matrix.a !== 1 || matrix.b !== 0 || matrix.c !== 0 || matrix.d !== 1) {
            var a1 = this.a;
            var c1 = this.c;

            this.a = a1 * matrix.a + this.b * matrix.c;
            this.b = a1 * matrix.b + this.b * matrix.d;
            this.c = c1 * matrix.a + this.d * matrix.c;
            this.d = c1 * matrix.b + this.d * matrix.d;
        }

        this.tx = tx1 * matrix.a + this.ty * matrix.c + matrix.tx;
        this.ty = tx1 * matrix.b + this.ty * matrix.d + matrix.ty;

        return this;
    };

    /**
     * Decomposes the matrix (x, y, scaleX, scaleY, and rotation) and sets the properties on to a transform.
     *
     * @param {PIXI.Transform|PIXI.TransformStatic} transform - The transform to apply the properties to.
     * @return {PIXI.Transform|PIXI.TransformStatic} The transform with the newly applied properties
     */


    Matrix.prototype.decompose = function decompose(transform) {
        // sort out rotation / skew..
        var a = this.a;
        var b = this.b;
        var c = this.c;
        var d = this.d;

        var skewX = -Math.atan2(-c, d);
        var skewY = Math.atan2(b, a);

        var delta = Math.abs(skewX + skewY);

        if (delta < 0.00001) {
            transform.rotation = skewY;

            if (a < 0 && d >= 0) {
                transform.rotation += transform.rotation <= 0 ? Math.PI : -Math.PI;
            }

            transform.skew.x = transform.skew.y = 0;
        } else {
            transform.skew.x = skewX;
            transform.skew.y = skewY;
        }

        // next set scale
        transform.scale.x = Math.sqrt(a * a + b * b);
        transform.scale.y = Math.sqrt(c * c + d * d);

        // next set position
        transform.position.x = this.tx;
        transform.position.y = this.ty;

        return transform;
    };

    /**
     * Inverts this matrix
     *
     * @return {PIXI.Matrix} This matrix. Good for chaining method calls.
     */


    Matrix.prototype.invert = function invert() {
        var a1 = this.a;
        var b1 = this.b;
        var c1 = this.c;
        var d1 = this.d;
        var tx1 = this.tx;
        var n = a1 * d1 - b1 * c1;

        this.a = d1 / n;
        this.b = -b1 / n;
        this.c = -c1 / n;
        this.d = a1 / n;
        this.tx = (c1 * this.ty - d1 * tx1) / n;
        this.ty = -(a1 * this.ty - b1 * tx1) / n;

        return this;
    };

    /**
     * Resets this Matix to an identity (default) matrix.
     *
     * @return {PIXI.Matrix} This matrix. Good for chaining method calls.
     */


    Matrix.prototype.identity = function identity() {
        this.a = 1;
        this.b = 0;
        this.c = 0;
        this.d = 1;
        this.tx = 0;
        this.ty = 0;

        return this;
    };

    /**
     * Creates a new Matrix object with the same values as this one.
     *
     * @return {PIXI.Matrix} A copy of this matrix. Good for chaining method calls.
     */


    Matrix.prototype.clone = function clone() {
        var matrix = new Matrix();

        matrix.a = this.a;
        matrix.b = this.b;
        matrix.c = this.c;
        matrix.d = this.d;
        matrix.tx = this.tx;
        matrix.ty = this.ty;

        return matrix;
    };

    /**
     * Changes the values of the given matrix to be the same as the ones in this matrix
     *
     * @param {PIXI.Matrix} matrix - The matrix to copy from.
     * @return {PIXI.Matrix} The matrix given in parameter with its values updated.
     */


    Matrix.prototype.copy = function copy(matrix) {
        matrix.a = this.a;
        matrix.b = this.b;
        matrix.c = this.c;
        matrix.d = this.d;
        matrix.tx = this.tx;
        matrix.ty = this.ty;

        return matrix;
    };

    /**
     * A default (identity) matrix
     *
     * @static
     * @const
     */


    _createClass(Matrix, null, [{
        key: 'IDENTITY',
        get: function get() {
            return new Matrix();
        }

        /**
         * A temp matrix
         *
         * @static
         * @const
         */

    }, {
        key: 'TEMP_MATRIX',
        get: function get() {
            return new Matrix();
        }
    }]);

    return Matrix;
}();

exports.default = Matrix;
//# sourceMappingURL=Matrix.js.map

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Matrix = __webpack_require__(36);

var _Matrix2 = _interopRequireDefault(_Matrix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ux = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1]; // Your friendly neighbour https://en.wikipedia.org/wiki/Dihedral_group of order 16

var uy = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1];
var vx = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1];
var vy = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1];
var tempMatrices = [];

var mul = [];

function signum(x) {
    if (x < 0) {
        return -1;
    }
    if (x > 0) {
        return 1;
    }

    return 0;
}

function init() {
    for (var i = 0; i < 16; i++) {
        var row = [];

        mul.push(row);

        for (var j = 0; j < 16; j++) {
            var _ux = signum(ux[i] * ux[j] + vx[i] * uy[j]);
            var _uy = signum(uy[i] * ux[j] + vy[i] * uy[j]);
            var _vx = signum(ux[i] * vx[j] + vx[i] * vy[j]);
            var _vy = signum(uy[i] * vx[j] + vy[i] * vy[j]);

            for (var k = 0; k < 16; k++) {
                if (ux[k] === _ux && uy[k] === _uy && vx[k] === _vx && vy[k] === _vy) {
                    row.push(k);
                    break;
                }
            }
        }
    }

    for (var _i = 0; _i < 16; _i++) {
        var mat = new _Matrix2.default();

        mat.set(ux[_i], uy[_i], vx[_i], vy[_i], 0, 0);
        tempMatrices.push(mat);
    }
}

init();

/**
 * Implements Dihedral Group D_8, see [group D4]{@link http://mathworld.wolfram.com/DihedralGroupD4.html},
 * D8 is the same but with diagonals. Used for texture rotations.
 *
 * Vector xX(i), xY(i) is U-axis of sprite with rotation i
 * Vector yY(i), yY(i) is V-axis of sprite with rotation i
 * Rotations: 0 grad (0), 90 grad (2), 180 grad (4), 270 grad (6)
 * Mirrors: vertical (8), main diagonal (10), horizontal (12), reverse diagonal (14)
 * This is the small part of gameofbombs.com portal system. It works.
 *
 * @author Ivan @ivanpopelyshev
 * @class
 * @memberof PIXI
 */
var GroupD8 = {
    E: 0,
    SE: 1,
    S: 2,
    SW: 3,
    W: 4,
    NW: 5,
    N: 6,
    NE: 7,
    MIRROR_VERTICAL: 8,
    MIRROR_HORIZONTAL: 12,
    uX: function uX(ind) {
        return ux[ind];
    },
    uY: function uY(ind) {
        return uy[ind];
    },
    vX: function vX(ind) {
        return vx[ind];
    },
    vY: function vY(ind) {
        return vy[ind];
    },
    inv: function inv(rotation) {
        if (rotation & 8) {
            return rotation & 15;
        }

        return -rotation & 7;
    },
    add: function add(rotationSecond, rotationFirst) {
        return mul[rotationSecond][rotationFirst];
    },
    sub: function sub(rotationSecond, rotationFirst) {
        return mul[rotationSecond][GroupD8.inv(rotationFirst)];
    },

    /**
     * Adds 180 degrees to rotation. Commutative operation.
     *
     * @memberof PIXI.GroupD8
     * @param {number} rotation - The number to rotate.
     * @returns {number} rotated number
     */
    rotate180: function rotate180(rotation) {
        return rotation ^ 4;
    },

    /**
     * I dont know why sometimes width and heights needs to be swapped. We'll fix it later.
     *
     * @memberof PIXI.GroupD8
     * @param {number} rotation - The number to check.
     * @returns {boolean} Whether or not the width/height should be swapped.
     */
    isSwapWidthHeight: function isSwapWidthHeight(rotation) {
        return (rotation & 3) === 2;
    },

    /**
     * @memberof PIXI.GroupD8
     * @param {number} dx - TODO
     * @param {number} dy - TODO
     *
     * @return {number} TODO
     */
    byDirection: function byDirection(dx, dy) {
        if (Math.abs(dx) * 2 <= Math.abs(dy)) {
            if (dy >= 0) {
                return GroupD8.S;
            }

            return GroupD8.N;
        } else if (Math.abs(dy) * 2 <= Math.abs(dx)) {
            if (dx > 0) {
                return GroupD8.E;
            }

            return GroupD8.W;
        } else if (dy > 0) {
            if (dx > 0) {
                return GroupD8.SE;
            }

            return GroupD8.SW;
        } else if (dx > 0) {
            return GroupD8.NE;
        }

        return GroupD8.NW;
    },

    /**
     * Helps sprite to compensate texture packer rotation.
     *
     * @memberof PIXI.GroupD8
     * @param {PIXI.Matrix} matrix - sprite world matrix
     * @param {number} rotation - The rotation factor to use.
     * @param {number} tx - sprite anchoring
     * @param {number} ty - sprite anchoring
     */
    matrixAppendRotationInv: function matrixAppendRotationInv(matrix, rotation) {
        var tx = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var ty = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

        // Packer used "rotation", we use "inv(rotation)"
        var mat = tempMatrices[GroupD8.inv(rotation)];

        mat.tx = tx;
        mat.ty = ty;
        matrix.append(mat);
    }
};

exports.default = GroupD8;
//# sourceMappingURL=GroupD8.js.map

/***/ }),
/* 38 */
/***/ (function(module, exports) {

// var GL_MAP = {};

/**
 * @param gl {WebGLRenderingContext} The current WebGL context
 * @param attribs {*}
 * @param state {*}
 */
var setVertexAttribArrays = function (gl, attribs, state)
{
    var i;
    if(state)
    {
        var tempAttribState = state.tempAttribState,
            attribState = state.attribState;

        for (i = 0; i < tempAttribState.length; i++)
        {
            tempAttribState[i] = false;
        }

        // set the new attribs
        for (i = 0; i < attribs.length; i++)
        {
            tempAttribState[attribs[i].attribute.location] = true;
        }

        for (i = 0; i < attribState.length; i++)
        {
            if (attribState[i] !== tempAttribState[i])
            {
                attribState[i] = tempAttribState[i];

                if (state.attribState[i])
                {
                    gl.enableVertexAttribArray(i);
                }
                else
                {
                    gl.disableVertexAttribArray(i);
                }
            }
        }

    }
    else
    {
        for (i = 0; i < attribs.length; i++)
        {
            var attrib = attribs[i];
            gl.enableVertexAttribArray(attrib.attribute.location);
        }
    }
};

module.exports = setVertexAttribArrays;


/***/ }),
/* 39 */
/***/ (function(module, exports) {


/**
 * Helper class to create a WebGL Texture
 *
 * @class
 * @memberof PIXI.glCore
 * @param gl {WebGLRenderingContext} The current WebGL context
 * @param width {number} the width of the texture
 * @param height {number} the height of the texture
 * @param format {number} the pixel format of the texture. defaults to gl.RGBA
 * @param type {number} the gl type of the texture. defaults to gl.UNSIGNED_BYTE
 */
var Texture = function(gl, width, height, format, type)
{
	/**
	 * The current WebGL rendering context
	 *
	 * @member {WebGLRenderingContext}
	 */
	this.gl = gl;


	/**
	 * The WebGL texture
	 *
	 * @member {WebGLTexture}
	 */
	this.texture = gl.createTexture();

	/**
	 * If mipmapping was used for this texture, enable and disable with enableMipmap()
	 *
	 * @member {Boolean}
	 */
	// some settings..
	this.mipmap = false;


	/**
	 * Set to true to enable pre-multiplied alpha
	 *
	 * @member {Boolean}
	 */
	this.premultiplyAlpha = false;

	/**
	 * The width of texture
	 *
	 * @member {Number}
	 */
	this.width = width || -1;
	/**
	 * The height of texture
	 *
	 * @member {Number}
	 */
	this.height = height || -1;

	/**
	 * The pixel format of the texture. defaults to gl.RGBA
	 *
	 * @member {Number}
	 */
	this.format = format || gl.RGBA;

	/**
	 * The gl type of the texture. defaults to gl.UNSIGNED_BYTE
	 *
	 * @member {Number}
	 */
	this.type = type || gl.UNSIGNED_BYTE;


};

/**
 * Uploads this texture to the GPU
 * @param source {HTMLImageElement|ImageData|HTMLVideoElement} the source image of the texture
 */
Texture.prototype.upload = function(source)
{
	this.bind();

	var gl = this.gl;


	gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha);

	var newWidth = source.videoWidth || source.width;
	var newHeight = source.videoHeight || source.height;

	if(newHeight !== this.height || newWidth !== this.width)
	{
		gl.texImage2D(gl.TEXTURE_2D, 0, this.format, this.format, this.type, source);
	}
	else
	{
    	gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, this.format, this.type, source);
	}

	// if the source is a video, we need to use the videoWidth / videoHeight properties as width / height will be incorrect.
	this.width = newWidth;
	this.height = newHeight;

};

var FLOATING_POINT_AVAILABLE = false;

/**
 * Use a data source and uploads this texture to the GPU
 * @param data {TypedArray} the data to upload to the texture
 * @param width {number} the new width of the texture
 * @param height {number} the new height of the texture
 */
Texture.prototype.uploadData = function(data, width, height)
{
	this.bind();

	var gl = this.gl;


	if(data instanceof Float32Array)
	{
		if(!FLOATING_POINT_AVAILABLE)
		{
			var ext = gl.getExtension("OES_texture_float");

			if(ext)
			{
				FLOATING_POINT_AVAILABLE = true;
			}
			else
			{
				throw new Error('floating point textures not available');
			}
		}

		this.type = gl.FLOAT;
	}
	else
	{
		// TODO support for other types
		this.type = this.type || gl.UNSIGNED_BYTE;
	}

	// what type of data?
	gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha);


	if(width !== this.width || height !== this.height)
	{
		gl.texImage2D(gl.TEXTURE_2D, 0, this.format,  width, height, 0, this.format, this.type, data || null);
	}
	else
	{
		gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, width, height, this.format, this.type, data || null);
	}

	this.width = width;
	this.height = height;


//	texSubImage2D
};

/**
 * Binds the texture
 * @param  location
 */
Texture.prototype.bind = function(location)
{
	var gl = this.gl;

	if(location !== undefined)
	{
		gl.activeTexture(gl.TEXTURE0 + location);
	}

	gl.bindTexture(gl.TEXTURE_2D, this.texture);
};

/**
 * Unbinds the texture
 */
Texture.prototype.unbind = function()
{
	var gl = this.gl;
	gl.bindTexture(gl.TEXTURE_2D, null);
};

/**
 * @param linear {Boolean} if we want to use linear filtering or nearest neighbour interpolation
 */
Texture.prototype.minFilter = function( linear )
{
	var gl = this.gl;

	this.bind();

	if(this.mipmap)
	{
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, linear ? gl.LINEAR_MIPMAP_LINEAR : gl.NEAREST_MIPMAP_NEAREST);
	}
	else
	{
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, linear ? gl.LINEAR : gl.NEAREST);
	}
};

/**
 * @param linear {Boolean} if we want to use linear filtering or nearest neighbour interpolation
 */
Texture.prototype.magFilter = function( linear )
{
	var gl = this.gl;

	this.bind();

	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, linear ? gl.LINEAR : gl.NEAREST);
};

/**
 * Enables mipmapping
 */
Texture.prototype.enableMipmap = function()
{
	var gl = this.gl;

	this.bind();

	this.mipmap = true;

	gl.generateMipmap(gl.TEXTURE_2D);
};

/**
 * Enables linear filtering
 */
Texture.prototype.enableLinearScaling = function()
{
	this.minFilter(true);
	this.magFilter(true);
};

/**
 * Enables nearest neighbour interpolation
 */
Texture.prototype.enableNearestScaling = function()
{
	this.minFilter(false);
	this.magFilter(false);
};

/**
 * Enables clamping on the texture so WebGL will not repeat it
 */
Texture.prototype.enableWrapClamp = function()
{
	var gl = this.gl;

	this.bind();

	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
};

/**
 * Enable tiling on the texture
 */
Texture.prototype.enableWrapRepeat = function()
{
	var gl = this.gl;

	this.bind();

	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
};

Texture.prototype.enableWrapMirrorRepeat = function()
{
	var gl = this.gl;

	this.bind();

	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.MIRRORED_REPEAT);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.MIRRORED_REPEAT);
};


/**
 * Destroys this texture
 */
Texture.prototype.destroy = function()
{
	var gl = this.gl;
	//TODO
	gl.deleteTexture(this.texture);
};

/**
 * @static
 * @param gl {WebGLRenderingContext} The current WebGL context
 * @param source {HTMLImageElement|ImageData} the source image of the texture
 * @param premultiplyAlpha {Boolean} If we want to use pre-multiplied alpha
 */
Texture.fromSource = function(gl, source, premultiplyAlpha)
{
	var texture = new Texture(gl);
	texture.premultiplyAlpha = premultiplyAlpha || false;
	texture.upload(source);

	return texture;
};

/**
 * @static
 * @param gl {WebGLRenderingContext} The current WebGL context
 * @param data {TypedArray} the data to upload to the texture
 * @param width {number} the new width of the texture
 * @param height {number} the new height of the texture
 */
Texture.fromData = function(gl, data, width, height)
{
	//console.log(data, width, height);
	var texture = new Texture(gl);
	texture.uploadData(data, width, height);

	return texture;
};


module.exports = Texture;


/***/ }),
/* 40 */
/***/ (function(module, exports) {


/**
 * @class
 * @memberof PIXI.glCore.shader
 * @param gl {WebGLRenderingContext} The current WebGL context {WebGLProgram}
 * @param vertexSrc {string|string[]} The vertex shader source as an array of strings.
 * @param fragmentSrc {string|string[]} The fragment shader source as an array of strings.
 * @param attributeLocations {Object} An attribute location map that lets you manually set the attribute locations
 * @return {WebGLProgram} the shader program
 */
var compileProgram = function(gl, vertexSrc, fragmentSrc, attributeLocations)
{
    var glVertShader = compileShader(gl, gl.VERTEX_SHADER, vertexSrc);
    var glFragShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentSrc);

    var program = gl.createProgram();

    gl.attachShader(program, glVertShader);
    gl.attachShader(program, glFragShader);

    // optionally, set the attributes manually for the program rather than letting WebGL decide..
    if(attributeLocations)
    {
        for(var i in attributeLocations)
        {
            gl.bindAttribLocation(program, attributeLocations[i], i);
        }
    }


    gl.linkProgram(program);

    // if linking fails, then log and cleanup
    if (!gl.getProgramParameter(program, gl.LINK_STATUS))
    {
        console.error('Pixi.js Error: Could not initialize shader.');
        console.error('gl.VALIDATE_STATUS', gl.getProgramParameter(program, gl.VALIDATE_STATUS));
        console.error('gl.getError()', gl.getError());

        // if there is a program info log, log it
        if (gl.getProgramInfoLog(program) !== '')
        {
            console.warn('Pixi.js Warning: gl.getProgramInfoLog()', gl.getProgramInfoLog(program));
        }

        gl.deleteProgram(program);
        program = null;
    }

    // clean up some shaders
    gl.deleteShader(glVertShader);
    gl.deleteShader(glFragShader);

    return program;
};

/**
 * @private
 * @param gl {WebGLRenderingContext} The current WebGL context {WebGLProgram}
 * @param type {Number} the type, can be either VERTEX_SHADER or FRAGMENT_SHADER
 * @param vertexSrc {string|string[]} The vertex shader source as an array of strings.
 * @return {WebGLShader} the shader
 */
var compileShader = function (gl, type, src)
{
    var shader = gl.createShader(type);

    gl.shaderSource(shader, src);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS))
    {
        console.log(gl.getShaderInfoLog(shader));
        return null;
    }

    return shader;
};

module.exports = compileProgram;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {


var mapType = __webpack_require__(28);
var mapSize = __webpack_require__(42);

/**
 * Extracts the attributes
 * @class
 * @memberof PIXI.glCore.shader
 * @param gl {WebGLRenderingContext} The current WebGL rendering context
 * @param program {WebGLProgram} The shader program to get the attributes from
 * @return attributes {Object}
 */
var extractAttributes = function(gl, program)
{
    var attributes = {};

    var totalAttributes = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);

    for (var i = 0; i < totalAttributes; i++)
    {
        var attribData = gl.getActiveAttrib(program, i);
        var type = mapType(gl, attribData.type);

        attributes[attribData.name] = {
            type:type,
            size:mapSize(type),
            location:gl.getAttribLocation(program, attribData.name),
            //TODO - make an attribute object
            pointer: pointer
        };
    }

    return attributes;
};

var pointer = function(type, normalized, stride, start){
    // console.log(this.location)
    gl.vertexAttribPointer(this.location,this.size, type || gl.FLOAT, normalized || false, stride || 0, start || 0);
};

module.exports = extractAttributes;


/***/ }),
/* 42 */
/***/ (function(module, exports) {

/**
 * @class
 * @memberof PIXI.glCore.shader
 * @param type {String}
 * @return {Number}
 */
var mapSize = function(type) 
{ 
    return GLSL_TO_SIZE[type];
};


var GLSL_TO_SIZE = {
    'float':    1,
    'vec2':     2,
    'vec3':     3,
    'vec4':     4,

    'int':      1,
    'ivec2':    2,
    'ivec3':    3,
    'ivec4':    4,

    'bool':     1,
    'bvec2':    2,
    'bvec3':    3,
    'bvec4':    4,

    'mat2':     4,
    'mat3':     9,
    'mat4':     16,

    'sampler2D':  1
};

module.exports = mapSize;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var mapType = __webpack_require__(28);
var defaultValue = __webpack_require__(44);

/**
 * Extracts the uniforms
 * @class
 * @memberof PIXI.glCore.shader
 * @param gl {WebGLRenderingContext} The current WebGL rendering context
 * @param program {WebGLProgram} The shader program to get the uniforms from
 * @return uniforms {Object}
 */
var extractUniforms = function(gl, program)
{
	var uniforms = {};

    var totalUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);

    for (var i = 0; i < totalUniforms; i++)
    {
    	var uniformData = gl.getActiveUniform(program, i);
    	var name = uniformData.name.replace(/\[.*?\]/, "");
        var type = mapType(gl, uniformData.type );

    	uniforms[name] = {
    		type:type,
    		size:uniformData.size,
    		location:gl.getUniformLocation(program, name),
    		value:defaultValue(type, uniformData.size)
    	};
    }

	return uniforms;
};

module.exports = extractUniforms;


/***/ }),
/* 44 */
/***/ (function(module, exports) {

/**
 * @class
 * @memberof PIXI.glCore.shader
 * @param type {String} Type of value
 * @param size {Number}
 */
var defaultValue = function(type, size) 
{
    switch (type)
    {
        case 'float':
            return 0;

        case 'vec2': 
            return new Float32Array(2 * size);

        case 'vec3':
            return new Float32Array(3 * size);

        case 'vec4':     
            return new Float32Array(4 * size);
            
        case 'int':
        case 'sampler2D':
            return 0;

        case 'ivec2':   
            return new Int32Array(2 * size);

        case 'ivec3':
            return new Int32Array(3 * size);

        case 'ivec4': 
            return new Int32Array(4 * size);

        case 'bool':     
            return false;

        case 'bvec2':

            return booleanArray( 2 * size);

        case 'bvec3':
            return booleanArray(3 * size);

        case 'bvec4':
            return booleanArray(4 * size);

        case 'mat2':
            return new Float32Array([1, 0,
                                     0, 1]);

        case 'mat3': 
            return new Float32Array([1, 0, 0,
                                     0, 1, 0,
                                     0, 0, 1]);

        case 'mat4':
            return new Float32Array([1, 0, 0, 0,
                                     0, 1, 0, 0,
                                     0, 0, 1, 0,
                                     0, 0, 0, 1]);
    }
};

var booleanArray = function(size)
{
    var array = new Array(size);

    for (var i = 0; i < array.length; i++) 
    {
        array[i] = false;
    }

    return array;
};

module.exports = defaultValue;


/***/ }),
/* 45 */
/***/ (function(module, exports) {

/**
 * Sets the float precision on the shader. If the precision is already present this function will do nothing
 * @param {string} src       the shader source
 * @param {string} precision The float precision of the shader. Options are 'lowp', 'mediump' or 'highp'.
 *
 * @return {string} modified shader source
 */
var setPrecision = function(src, precision)
{
    if(src.substring(0, 9) !== 'precision')
    {
        return 'precision ' + precision + ' float;\n' + src;
    }

    return src;
};

module.exports = setPrecision;


/***/ }),
/* 46 */
/***/ (function(module, exports) {

/**
 * Extracts the attributes
 * @class
 * @memberof PIXI.glCore.shader
 * @param gl {WebGLRenderingContext} The current WebGL rendering context
 * @param uniforms {Array} @mat ?
 * @return attributes {Object}
 */
var generateUniformAccessObject = function(gl, uniformData)
{
    // this is the object we will be sending back.
    // an object hierachy will be created for structs
    var uniforms = {data:{}};

    uniforms.gl = gl;

    var uniformKeys= Object.keys(uniformData);

    for (var i = 0; i < uniformKeys.length; i++)
    {
        var fullName = uniformKeys[i];

        var nameTokens = fullName.split('.');
        var name = nameTokens[nameTokens.length - 1];


        var uniformGroup = getUniformGroup(nameTokens, uniforms);

        var uniform =  uniformData[fullName];
        uniformGroup.data[name] = uniform;

        uniformGroup.gl = gl;

        Object.defineProperty(uniformGroup, name, {
            get: generateGetter(name),
            set: generateSetter(name, uniform)
        });
    }

    return uniforms;
};

var generateGetter = function(name)
{
	var template = getterTemplate.replace('%%', name);
	return new Function(template); // jshint ignore:line
};

var generateSetter = function(name, uniform)
{
    var template = setterTemplate.replace(/%%/g, name);
    var setTemplate;

    if(uniform.size === 1)
    {
        setTemplate = GLSL_TO_SINGLE_SETTERS[uniform.type];
    }
    else
    {
        setTemplate = GLSL_TO_ARRAY_SETTERS[uniform.type];
    }

    if(setTemplate)
    {
        template += "\nthis.gl." + setTemplate + ";";
    }

  	return new Function('value', template); // jshint ignore:line
};

var getUniformGroup = function(nameTokens, uniform)
{
    var cur = uniform;

    for (var i = 0; i < nameTokens.length - 1; i++)
    {
        var o = cur[nameTokens[i]] || {data:{}};
        cur[nameTokens[i]] = o;
        cur = o;
    }

    return cur;
};

var getterTemplate = [
    'return this.data.%%.value;',
].join('\n');

var setterTemplate = [
    'this.data.%%.value = value;',
    'var location = this.data.%%.location;'
].join('\n');


var GLSL_TO_SINGLE_SETTERS = {

    'float':    'uniform1f(location, value)',

    'vec2':     'uniform2f(location, value[0], value[1])',
    'vec3':     'uniform3f(location, value[0], value[1], value[2])',
    'vec4':     'uniform4f(location, value[0], value[1], value[2], value[3])',

    'int':      'uniform1i(location, value)',
    'ivec2':    'uniform2i(location, value[0], value[1])',
    'ivec3':    'uniform3i(location, value[0], value[1], value[2])',
    'ivec4':    'uniform4i(location, value[0], value[1], value[2], value[3])',

    'bool':     'uniform1i(location, value)',
    'bvec2':    'uniform2i(location, value[0], value[1])',
    'bvec3':    'uniform3i(location, value[0], value[1], value[2])',
    'bvec4':    'uniform4i(location, value[0], value[1], value[2], value[3])',

    'mat2':     'uniformMatrix2fv(location, false, value)',
    'mat3':     'uniformMatrix3fv(location, false, value)',
    'mat4':     'uniformMatrix4fv(location, false, value)',

    'sampler2D':'uniform1i(location, value)'
};

var GLSL_TO_ARRAY_SETTERS = {

    'float':    'uniform1fv(location, value)',

    'vec2':     'uniform2fv(location, value)',
    'vec3':     'uniform3fv(location, value)',
    'vec4':     'uniform4fv(location, value)',

    'int':      'uniform1iv(location, value)',
    'ivec2':    'uniform2iv(location, value)',
    'ivec3':    'uniform3iv(location, value)',
    'ivec4':    'uniform4iv(location, value)',

    'bool':     'uniform1iv(location, value)',
    'bvec2':    'uniform2iv(location, value)',
    'bvec3':    'uniform3iv(location, value)',
    'bvec4':    'uniform4iv(location, value)',

    'sampler2D':'uniform1iv(location, value)'
};

module.exports = generateUniformAccessObject;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _eventemitter = __webpack_require__(18);

var _eventemitter2 = _interopRequireDefault(_eventemitter);

var _const = __webpack_require__(12);

var _settings = __webpack_require__(15);

var _settings2 = _interopRequireDefault(_settings);

var _TransformStatic = __webpack_require__(49);

var _TransformStatic2 = _interopRequireDefault(_TransformStatic);

var _Transform = __webpack_require__(50);

var _Transform2 = _interopRequireDefault(_Transform);

var _Bounds = __webpack_require__(29);

var _Bounds2 = _interopRequireDefault(_Bounds);

var _math = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// _tempDisplayObjectParent = new DisplayObject();

/**
 * The base class for all objects that are rendered on the screen.
 * This is an abstract class and should not be used on its own rather it should be extended.
 *
 * @class
 * @extends EventEmitter
 * @memberof PIXI
 */
var DisplayObject = function (_EventEmitter) {
    _inherits(DisplayObject, _EventEmitter);

    /**
     *
     */
    function DisplayObject() {
        _classCallCheck(this, DisplayObject);

        var _this = _possibleConstructorReturn(this, _EventEmitter.call(this));

        var TransformClass = _settings2.default.TRANSFORM_MODE === _const.TRANSFORM_MODE.STATIC ? _TransformStatic2.default : _Transform2.default;

        _this.tempDisplayObjectParent = null;

        // TODO: need to create Transform from factory
        /**
         * World transform and local transform of this object.
         * This will become read-only later, please do not assign anything there unless you know what are you doing
         *
         * @member {PIXI.TransformBase}
         */
        _this.transform = new TransformClass();

        /**
         * The opacity of the object.
         *
         * @member {number}
         */
        _this.alpha = 1;

        /**
         * The visibility of the object. If false the object will not be drawn, and
         * the updateTransform function will not be called.
         *
         * Only affects recursive calls from parent. You can ask for bounds or call updateTransform manually
         *
         * @member {boolean}
         */
        _this.visible = true;

        /**
         * Can this object be rendered, if false the object will not be drawn but the updateTransform
         * methods will still be called.
         *
         * Only affects recursive calls from parent. You can ask for bounds manually
         *
         * @member {boolean}
         */
        _this.renderable = true;

        /**
         * The display object container that contains this display object.
         *
         * @member {PIXI.Container}
         * @readonly
         */
        _this.parent = null;

        /**
         * The multiplied alpha of the displayObject
         *
         * @member {number}
         * @readonly
         */
        _this.worldAlpha = 1;

        /**
         * The area the filter is applied to. This is used as more of an optimisation
         * rather than figuring out the dimensions of the displayObject each frame you can set this rectangle
         *
         * Also works as an interaction mask
         *
         * @member {PIXI.Rectangle}
         */
        _this.filterArea = null;

        _this._filters = null;
        _this._enabledFilters = null;

        /**
         * The bounds object, this is used to calculate and store the bounds of the displayObject
         *
         * @member {PIXI.Rectangle}
         * @private
         */
        _this._bounds = new _Bounds2.default();
        _this._boundsID = 0;
        _this._lastBoundsID = -1;
        _this._boundsRect = null;
        _this._localBoundsRect = null;

        /**
         * The original, cached mask of the object
         *
         * @member {PIXI.Graphics|PIXI.Sprite}
         * @private
         */
        _this._mask = null;

        /**
         * If the object has been destroyed via destroy(). If true, it should not be used.
         *
         * @member {boolean}
         * @private
         * @readonly
         */
        _this._destroyed = false;

        /**
         * Fired when this DisplayObject is added to a Container.
         *
         * @event PIXI.DisplayObject#added
         * @param {PIXI.Container} container - The container added to.
         */

        /**
         * Fired when this DisplayObject is removed from a Container.
         *
         * @event PIXI.DisplayObject#removed
         * @param {PIXI.Container} container - The container removed from.
         */
        return _this;
    }

    /**
     * @private
     * @member {PIXI.DisplayObject}
     */


    /**
     * Updates the object transform for rendering
     *
     * TODO - Optimization pass!
     */
    DisplayObject.prototype.updateTransform = function updateTransform() {
        this.transform.updateTransform(this.parent.transform);
        // multiply the alphas..
        this.worldAlpha = this.alpha * this.parent.worldAlpha;

        this._bounds.updateID++;
    };

    /**
     * recursively updates transform of all objects from the root to this one
     * internal function for toLocal()
     */


    DisplayObject.prototype._recursivePostUpdateTransform = function _recursivePostUpdateTransform() {
        if (this.parent) {
            this.parent._recursivePostUpdateTransform();
            this.transform.updateTransform(this.parent.transform);
        } else {
            this.transform.updateTransform(this._tempDisplayObjectParent.transform);
        }
    };

    /**
     * Retrieves the bounds of the displayObject as a rectangle object.
     *
     * @param {boolean} skipUpdate - setting to true will stop the transforms of the scene graph from
     *  being updated. This means the calculation returned MAY be out of date BUT will give you a
     *  nice performance boost
     * @param {PIXI.Rectangle} rect - Optional rectangle to store the result of the bounds calculation
     * @return {PIXI.Rectangle} the rectangular bounding area
     */


    DisplayObject.prototype.getBounds = function getBounds(skipUpdate, rect) {
        if (!skipUpdate) {
            if (!this.parent) {
                this.parent = this._tempDisplayObjectParent;
                this.updateTransform();
                this.parent = null;
            } else {
                this._recursivePostUpdateTransform();
                this.updateTransform();
            }
        }

        if (this._boundsID !== this._lastBoundsID) {
            this.calculateBounds();
        }

        if (!rect) {
            if (!this._boundsRect) {
                this._boundsRect = new _math.Rectangle();
            }

            rect = this._boundsRect;
        }

        return this._bounds.getRectangle(rect);
    };

    /**
     * Retrieves the local bounds of the displayObject as a rectangle object
     *
     * @param {PIXI.Rectangle} [rect] - Optional rectangle to store the result of the bounds calculation
     * @return {PIXI.Rectangle} the rectangular bounding area
     */


    DisplayObject.prototype.getLocalBounds = function getLocalBounds(rect) {
        var transformRef = this.transform;
        var parentRef = this.parent;

        this.parent = null;
        this.transform = this._tempDisplayObjectParent.transform;

        if (!rect) {
            if (!this._localBoundsRect) {
                this._localBoundsRect = new _math.Rectangle();
            }

            rect = this._localBoundsRect;
        }

        var bounds = this.getBounds(false, rect);

        this.parent = parentRef;
        this.transform = transformRef;

        return bounds;
    };

    /**
     * Calculates the global position of the display object
     *
     * @param {PIXI.Point} position - The world origin to calculate from
     * @param {PIXI.Point} [point] - A Point object in which to store the value, optional
     *  (otherwise will create a new Point)
     * @param {boolean} [skipUpdate=false] - Should we skip the update transform.
     * @return {PIXI.Point} A point object representing the position of this object
     */


    DisplayObject.prototype.toGlobal = function toGlobal(position, point) {
        var skipUpdate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (!skipUpdate) {
            this._recursivePostUpdateTransform();

            // this parent check is for just in case the item is a root object.
            // If it is we need to give it a temporary parent so that displayObjectUpdateTransform works correctly
            // this is mainly to avoid a parent check in the main loop. Every little helps for performance :)
            if (!this.parent) {
                this.parent = this._tempDisplayObjectParent;
                this.displayObjectUpdateTransform();
                this.parent = null;
            } else {
                this.displayObjectUpdateTransform();
            }
        }

        // don't need to update the lot
        return this.worldTransform.apply(position, point);
    };

    /**
     * Calculates the local position of the display object relative to another point
     *
     * @param {PIXI.Point} position - The world origin to calculate from
     * @param {PIXI.DisplayObject} [from] - The DisplayObject to calculate the global position from
     * @param {PIXI.Point} [point] - A Point object in which to store the value, optional
     *  (otherwise will create a new Point)
     * @param {boolean} [skipUpdate=false] - Should we skip the update transform
     * @return {PIXI.Point} A point object representing the position of this object
     */


    DisplayObject.prototype.toLocal = function toLocal(position, from, point, skipUpdate) {
        if (from) {
            position = from.toGlobal(position, point, skipUpdate);
        }

        if (!skipUpdate) {
            this._recursivePostUpdateTransform();

            // this parent check is for just in case the item is a root object.
            // If it is we need to give it a temporary parent so that displayObjectUpdateTransform works correctly
            // this is mainly to avoid a parent check in the main loop. Every little helps for performance :)
            if (!this.parent) {
                this.parent = this._tempDisplayObjectParent;
                this.displayObjectUpdateTransform();
                this.parent = null;
            } else {
                this.displayObjectUpdateTransform();
            }
        }

        // simply apply the matrix..
        return this.worldTransform.applyInverse(position, point);
    };

    /**
     * Renders the object using the WebGL renderer
     *
     * @param {PIXI.WebGLRenderer} renderer - The renderer
     */


    DisplayObject.prototype.renderWebGL = function renderWebGL(renderer) // eslint-disable-line no-unused-vars
    {}
    // OVERWRITE;


    /**
     * Renders the object using the Canvas renderer
     *
     * @param {PIXI.CanvasRenderer} renderer - The renderer
     */
    ;

    DisplayObject.prototype.renderCanvas = function renderCanvas(renderer) // eslint-disable-line no-unused-vars
    {}
    // OVERWRITE;


    /**
     * Set the parent Container of this DisplayObject
     *
     * @param {PIXI.Container} container - The Container to add this DisplayObject to
     * @return {PIXI.Container} The Container that this DisplayObject was added to
     */
    ;

    DisplayObject.prototype.setParent = function setParent(container) {
        if (!container || !container.addChild) {
            throw new Error('setParent: Argument must be a Container');
        }

        container.addChild(this);

        return container;
    };

    /**
     * Convenience function to set the position, scale, skew and pivot at once.
     *
     * @param {number} [x=0] - The X position
     * @param {number} [y=0] - The Y position
     * @param {number} [scaleX=1] - The X scale value
     * @param {number} [scaleY=1] - The Y scale value
     * @param {number} [rotation=0] - The rotation
     * @param {number} [skewX=0] - The X skew value
     * @param {number} [skewY=0] - The Y skew value
     * @param {number} [pivotX=0] - The X pivot value
     * @param {number} [pivotY=0] - The Y pivot value
     * @return {PIXI.DisplayObject} The DisplayObject instance
     */


    DisplayObject.prototype.setTransform = function setTransform() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var scaleX = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
        var scaleY = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
        var rotation = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
        var skewX = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
        var skewY = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
        var pivotX = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
        var pivotY = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;

        this.position.x = x;
        this.position.y = y;
        this.scale.x = !scaleX ? 1 : scaleX;
        this.scale.y = !scaleY ? 1 : scaleY;
        this.rotation = rotation;
        this.skew.x = skewX;
        this.skew.y = skewY;
        this.pivot.x = pivotX;
        this.pivot.y = pivotY;

        return this;
    };

    /**
     * Base destroy method for generic display objects. This will automatically
     * remove the display object from its parent Container as well as remove
     * all current event listeners and internal references. Do not use a DisplayObject
     * after calling `destroy`.
     *
     */


    DisplayObject.prototype.destroy = function destroy() {
        this.removeAllListeners();
        if (this.parent) {
            this.parent.removeChild(this);
        }
        this.transform = null;

        this.parent = null;

        this._bounds = null;
        this._currentBounds = null;
        this._mask = null;

        this.filterArea = null;

        this.interactive = false;
        this.interactiveChildren = false;

        this._destroyed = true;
    };

    /**
     * The position of the displayObject on the x axis relative to the local coordinates of the parent.
     * An alias to position.x
     *
     * @member {number}
     */


    _createClass(DisplayObject, [{
        key: '_tempDisplayObjectParent',
        get: function get() {
            if (this.tempDisplayObjectParent === null) {
                this.tempDisplayObjectParent = new DisplayObject();
            }

            return this.tempDisplayObjectParent;
        }
    }, {
        key: 'x',
        get: function get() {
            return this.position.x;
        },
        set: function set(value) // eslint-disable-line require-jsdoc
        {
            this.transform.position.x = value;
        }

        /**
         * The position of the displayObject on the y axis relative to the local coordinates of the parent.
         * An alias to position.y
         *
         * @member {number}
         */

    }, {
        key: 'y',
        get: function get() {
            return this.position.y;
        },
        set: function set(value) // eslint-disable-line require-jsdoc
        {
            this.transform.position.y = value;
        }

        /**
         * Current transform of the object based on world (parent) factors
         *
         * @member {PIXI.Matrix}
         * @readonly
         */

    }, {
        key: 'worldTransform',
        get: function get() {
            return this.transform.worldTransform;
        }

        /**
         * Current transform of the object based on local factors: position, scale, other stuff
         *
         * @member {PIXI.Matrix}
         * @readonly
         */

    }, {
        key: 'localTransform',
        get: function get() {
            return this.transform.localTransform;
        }

        /**
         * The coordinate of the object relative to the local coordinates of the parent.
         * Assignment by value since pixi-v4.
         *
         * @member {PIXI.Point|PIXI.ObservablePoint}
         */

    }, {
        key: 'position',
        get: function get() {
            return this.transform.position;
        },
        set: function set(value) // eslint-disable-line require-jsdoc
        {
            this.transform.position.copy(value);
        }

        /**
         * The scale factor of the object.
         * Assignment by value since pixi-v4.
         *
         * @member {PIXI.Point|PIXI.ObservablePoint}
         */

    }, {
        key: 'scale',
        get: function get() {
            return this.transform.scale;
        },
        set: function set(value) // eslint-disable-line require-jsdoc
        {
            this.transform.scale.copy(value);
        }

        /**
         * The pivot point of the displayObject that it rotates around
         * Assignment by value since pixi-v4.
         *
         * @member {PIXI.Point|PIXI.ObservablePoint}
         */

    }, {
        key: 'pivot',
        get: function get() {
            return this.transform.pivot;
        },
        set: function set(value) // eslint-disable-line require-jsdoc
        {
            this.transform.pivot.copy(value);
        }

        /**
         * The skew factor for the object in radians.
         * Assignment by value since pixi-v4.
         *
         * @member {PIXI.ObservablePoint}
         */

    }, {
        key: 'skew',
        get: function get() {
            return this.transform.skew;
        },
        set: function set(value) // eslint-disable-line require-jsdoc
        {
            this.transform.skew.copy(value);
        }

        /**
         * The rotation of the object in radians.
         *
         * @member {number}
         */

    }, {
        key: 'rotation',
        get: function get() {
            return this.transform.rotation;
        },
        set: function set(value) // eslint-disable-line require-jsdoc
        {
            this.transform.rotation = value;
        }

        /**
         * Indicates if the object is globally visible.
         *
         * @member {boolean}
         * @readonly
         */

    }, {
        key: 'worldVisible',
        get: function get() {
            var item = this;

            do {
                if (!item.visible) {
                    return false;
                }

                item = item.parent;
            } while (item);

            return true;
        }

        /**
         * Sets a mask for the displayObject. A mask is an object that limits the visibility of an
         * object to the shape of the mask applied to it. In PIXI a regular mask must be a
         * PIXI.Graphics or a PIXI.Sprite object. This allows for much faster masking in canvas as it
         * utilises shape clipping. To remove a mask, set this property to null.
         *
         * @todo For the moment, PIXI.CanvasRenderer doesn't support PIXI.Sprite as mask.
         *
         * @member {PIXI.Graphics|PIXI.Sprite}
         */

    }, {
        key: 'mask',
        get: function get() {
            return this._mask;
        },
        set: function set(value) // eslint-disable-line require-jsdoc
        {
            if (this._mask) {
                this._mask.renderable = true;
            }

            this._mask = value;

            if (this._mask) {
                this._mask.renderable = false;
            }
        }

        /**
         * Sets the filters for the displayObject.
         * * IMPORTANT: This is a webGL only feature and will be ignored by the canvas renderer.
         * To remove filters simply set this property to 'null'
         *
         * @member {PIXI.Filter[]}
         */

    }, {
        key: 'filters',
        get: function get() {
            return this._filters && this._filters.slice();
        },
        set: function set(value) // eslint-disable-line require-jsdoc
        {
            this._filters = value && value.slice();
        }
    }]);

    return DisplayObject;
}(_eventemitter2.default);

// performance increase to avoid using call.. (10x faster)


exports.default = DisplayObject;
DisplayObject.prototype.displayObjectUpdateTransform = DisplayObject.prototype.updateTransform;
//# sourceMappingURL=DisplayObject.js.map

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * isMobile.js v0.4.1
 *
 * A simple library to detect Apple phones and tablets,
 * Android phones and tablets, other mobile devices (like blackberry, mini-opera and windows phone),
 * and any kind of seven inch device, via user agent sniffing.
 *
 * @author: Kai Mallea (kmallea@gmail.com)
 *
 * @license: http://creativecommons.org/publicdomain/zero/1.0/
 */
(function (global) {

    var apple_phone         = /iPhone/i,
        apple_ipod          = /iPod/i,
        apple_tablet        = /iPad/i,
        android_phone       = /(?=.*\bAndroid\b)(?=.*\bMobile\b)/i, // Match 'Android' AND 'Mobile'
        android_tablet      = /Android/i,
        amazon_phone        = /(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,
        amazon_tablet       = /(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,
        windows_phone       = /Windows Phone/i,
        windows_tablet      = /(?=.*\bWindows\b)(?=.*\bARM\b)/i, // Match 'Windows' AND 'ARM'
        other_blackberry    = /BlackBerry/i,
        other_blackberry_10 = /BB10/i,
        other_opera         = /Opera Mini/i,
        other_chrome        = /(CriOS|Chrome)(?=.*\bMobile\b)/i,
        other_firefox       = /(?=.*\bFirefox\b)(?=.*\bMobile\b)/i, // Match 'Firefox' AND 'Mobile'
        seven_inch = new RegExp(
            '(?:' +         // Non-capturing group

            'Nexus 7' +     // Nexus 7

            '|' +           // OR

            'BNTV250' +     // B&N Nook Tablet 7 inch

            '|' +           // OR

            'Kindle Fire' + // Kindle Fire

            '|' +           // OR

            'Silk' +        // Kindle Fire, Silk Accelerated

            '|' +           // OR

            'GT-P1000' +    // Galaxy Tab 7 inch

            ')',            // End non-capturing group

            'i');           // Case-insensitive matching

    var match = function(regex, userAgent) {
        return regex.test(userAgent);
    };

    var IsMobileClass = function(userAgent) {
        var ua = userAgent || navigator.userAgent;

        // Facebook mobile app's integrated browser adds a bunch of strings that
        // match everything. Strip it out if it exists.
        var tmp = ua.split('[FBAN');
        if (typeof tmp[1] !== 'undefined') {
            ua = tmp[0];
        }

        // Twitter mobile app's integrated browser on iPad adds a "Twitter for
        // iPhone" string. Same probable happens on other tablet platforms.
        // This will confuse detection so strip it out if it exists.
        tmp = ua.split('Twitter');
        if (typeof tmp[1] !== 'undefined') {
            ua = tmp[0];
        }

        this.apple = {
            phone:  match(apple_phone, ua),
            ipod:   match(apple_ipod, ua),
            tablet: !match(apple_phone, ua) && match(apple_tablet, ua),
            device: match(apple_phone, ua) || match(apple_ipod, ua) || match(apple_tablet, ua)
        };
        this.amazon = {
            phone:  match(amazon_phone, ua),
            tablet: !match(amazon_phone, ua) && match(amazon_tablet, ua),
            device: match(amazon_phone, ua) || match(amazon_tablet, ua)
        };
        this.android = {
            phone:  match(amazon_phone, ua) || match(android_phone, ua),
            tablet: !match(amazon_phone, ua) && !match(android_phone, ua) && (match(amazon_tablet, ua) || match(android_tablet, ua)),
            device: match(amazon_phone, ua) || match(amazon_tablet, ua) || match(android_phone, ua) || match(android_tablet, ua)
        };
        this.windows = {
            phone:  match(windows_phone, ua),
            tablet: match(windows_tablet, ua),
            device: match(windows_phone, ua) || match(windows_tablet, ua)
        };
        this.other = {
            blackberry:   match(other_blackberry, ua),
            blackberry10: match(other_blackberry_10, ua),
            opera:        match(other_opera, ua),
            firefox:      match(other_firefox, ua),
            chrome:       match(other_chrome, ua),
            device:       match(other_blackberry, ua) || match(other_blackberry_10, ua) || match(other_opera, ua) || match(other_firefox, ua) || match(other_chrome, ua)
        };
        this.seven_inch = match(seven_inch, ua);
        this.any = this.apple.device || this.android.device || this.windows.device || this.other.device || this.seven_inch;

        // excludes 'other' devices and ipods, targeting touchscreen phones
        this.phone = this.apple.phone || this.android.phone || this.windows.phone;

        // excludes 7 inch devices, classifying as phone or tablet is left to the user
        this.tablet = this.apple.tablet || this.android.tablet || this.windows.tablet;

        if (typeof window === 'undefined') {
            return this;
        }
    };

    var instantiate = function() {
        var IM = new IsMobileClass();
        IM.Class = IsMobileClass;
        return IM;
    };

    if (typeof module !== 'undefined' && module.exports && typeof window === 'undefined') {
        //node
        module.exports = IsMobileClass;
    } else if (typeof module !== 'undefined' && module.exports && typeof window !== 'undefined') {
        //browserify
        module.exports = instantiate();
    } else if (true) {
        //AMD
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (global.isMobile = instantiate()),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
        global.isMobile = instantiate();
    }

})(this);


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _math = __webpack_require__(14);

var _TransformBase2 = __webpack_require__(30);

var _TransformBase3 = _interopRequireDefault(_TransformBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Transform that takes care about its versions
 *
 * @class
 * @extends PIXI.TransformBase
 * @memberof PIXI
 */
var TransformStatic = function (_TransformBase) {
    _inherits(TransformStatic, _TransformBase);

    /**
     *
     */
    function TransformStatic() {
        _classCallCheck(this, TransformStatic);

        /**
        * The coordinate of the object relative to the local coordinates of the parent.
        *
        * @member {PIXI.ObservablePoint}
        */
        var _this = _possibleConstructorReturn(this, _TransformBase.call(this));

        _this.position = new _math.ObservablePoint(_this.onChange, _this, 0, 0);

        /**
         * The scale factor of the object.
         *
         * @member {PIXI.ObservablePoint}
         */
        _this.scale = new _math.ObservablePoint(_this.onChange, _this, 1, 1);

        /**
         * The pivot point of the displayObject that it rotates around
         *
         * @member {PIXI.ObservablePoint}
         */
        _this.pivot = new _math.ObservablePoint(_this.onChange, _this, 0, 0);

        /**
         * The skew amount, on the x and y axis.
         *
         * @member {PIXI.ObservablePoint}
         */
        _this.skew = new _math.ObservablePoint(_this.updateSkew, _this, 0, 0);

        _this._rotation = 0;

        _this._cx = 1; // cos rotation + skewY;
        _this._sx = 0; // sin rotation + skewY;
        _this._cy = 0; // cos rotation + Math.PI/2 - skewX;
        _this._sy = 1; // sin rotation + Math.PI/2 - skewX;

        _this._localID = 0;
        _this._currentLocalID = 0;
        return _this;
    }

    /**
     * Called when a value changes.
     *
     * @private
     */


    TransformStatic.prototype.onChange = function onChange() {
        this._localID++;
    };

    /**
     * Called when skew or rotation changes
     *
     * @private
     */


    TransformStatic.prototype.updateSkew = function updateSkew() {
        this._cx = Math.cos(this._rotation + this.skew._y);
        this._sx = Math.sin(this._rotation + this.skew._y);
        this._cy = -Math.sin(this._rotation - this.skew._x); // cos, added PI/2
        this._sy = Math.cos(this._rotation - this.skew._x); // sin, added PI/2

        this._localID++;
    };

    /**
     * Updates only local matrix
     */


    TransformStatic.prototype.updateLocalTransform = function updateLocalTransform() {
        var lt = this.localTransform;

        if (this._localID !== this._currentLocalID) {
            // get the matrix values of the displayobject based on its transform properties..
            lt.a = this._cx * this.scale._x;
            lt.b = this._sx * this.scale._x;
            lt.c = this._cy * this.scale._y;
            lt.d = this._sy * this.scale._y;

            lt.tx = this.position._x - (this.pivot._x * lt.a + this.pivot._y * lt.c);
            lt.ty = this.position._y - (this.pivot._x * lt.b + this.pivot._y * lt.d);
            this._currentLocalID = this._localID;

            // force an update..
            this._parentID = -1;
        }
    };

    /**
     * Updates the values of the object and applies the parent's transform.
     *
     * @param {PIXI.Transform} parentTransform - The transform of the parent of this object
     */


    TransformStatic.prototype.updateTransform = function updateTransform(parentTransform) {
        var lt = this.localTransform;

        if (this._localID !== this._currentLocalID) {
            // get the matrix values of the displayobject based on its transform properties..
            lt.a = this._cx * this.scale._x;
            lt.b = this._sx * this.scale._x;
            lt.c = this._cy * this.scale._y;
            lt.d = this._sy * this.scale._y;

            lt.tx = this.position._x - (this.pivot._x * lt.a + this.pivot._y * lt.c);
            lt.ty = this.position._y - (this.pivot._x * lt.b + this.pivot._y * lt.d);
            this._currentLocalID = this._localID;

            // force an update..
            this._parentID = -1;
        }

        if (this._parentID !== parentTransform._worldID) {
            // concat the parent matrix with the objects transform.
            var pt = parentTransform.worldTransform;
            var wt = this.worldTransform;

            wt.a = lt.a * pt.a + lt.b * pt.c;
            wt.b = lt.a * pt.b + lt.b * pt.d;
            wt.c = lt.c * pt.a + lt.d * pt.c;
            wt.d = lt.c * pt.b + lt.d * pt.d;
            wt.tx = lt.tx * pt.a + lt.ty * pt.c + pt.tx;
            wt.ty = lt.tx * pt.b + lt.ty * pt.d + pt.ty;

            this._parentID = parentTransform._worldID;

            // update the id of the transform..
            this._worldID++;
        }
    };

    /**
     * Decomposes a matrix and sets the transforms properties based on it.
     *
     * @param {PIXI.Matrix} matrix - The matrix to decompose
     */


    TransformStatic.prototype.setFromMatrix = function setFromMatrix(matrix) {
        matrix.decompose(this);
        this._localID++;
    };

    /**
     * The rotation of the object in radians.
     *
     * @member {number}
     */


    _createClass(TransformStatic, [{
        key: 'rotation',
        get: function get() {
            return this._rotation;
        },
        set: function set(value) // eslint-disable-line require-jsdoc
        {
            this._rotation = value;
            this.updateSkew();
        }
    }]);

    return TransformStatic;
}(_TransformBase3.default);

exports.default = TransformStatic;
//# sourceMappingURL=TransformStatic.js.map

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _math = __webpack_require__(14);

var _TransformBase2 = __webpack_require__(30);

var _TransformBase3 = _interopRequireDefault(_TransformBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Generic class to deal with traditional 2D matrix transforms
 * local transformation is calculated from position,scale,skew and rotation
 *
 * @class
 * @extends PIXI.TransformBase
 * @memberof PIXI
 */
var Transform = function (_TransformBase) {
  _inherits(Transform, _TransformBase);

  /**
   *
   */
  function Transform() {
    _classCallCheck(this, Transform);

    /**
    * The coordinate of the object relative to the local coordinates of the parent.
    *
    * @member {PIXI.Point}
    */
    var _this = _possibleConstructorReturn(this, _TransformBase.call(this));

    _this.position = new _math.Point(0, 0);

    /**
     * The scale factor of the object.
     *
     * @member {PIXI.Point}
     */
    _this.scale = new _math.Point(1, 1);

    /**
     * The skew amount, on the x and y axis.
     *
     * @member {PIXI.ObservablePoint}
     */
    _this.skew = new _math.ObservablePoint(_this.updateSkew, _this, 0, 0);

    /**
     * The pivot point of the displayObject that it rotates around
     *
     * @member {PIXI.Point}
     */
    _this.pivot = new _math.Point(0, 0);

    /**
     * The rotation value of the object, in radians
     *
     * @member {Number}
     * @private
     */
    _this._rotation = 0;

    _this._cx = 1; // cos rotation + skewY;
    _this._sx = 0; // sin rotation + skewY;
    _this._cy = 0; // cos rotation + Math.PI/2 - skewX;
    _this._sy = 1; // sin rotation + Math.PI/2 - skewX;
    return _this;
  }

  /**
   * Updates the skew values when the skew or rotation changes.
   *
   * @private
   */


  Transform.prototype.updateSkew = function updateSkew() {
    this._cx = Math.cos(this._rotation + this.skew._y);
    this._sx = Math.sin(this._rotation + this.skew._y);
    this._cy = -Math.sin(this._rotation - this.skew._x); // cos, added PI/2
    this._sy = Math.cos(this._rotation - this.skew._x); // sin, added PI/2
  };

  /**
   * Updates only local matrix
   */


  Transform.prototype.updateLocalTransform = function updateLocalTransform() {
    var lt = this.localTransform;

    lt.a = this._cx * this.scale.x;
    lt.b = this._sx * this.scale.x;
    lt.c = this._cy * this.scale.y;
    lt.d = this._sy * this.scale.y;

    lt.tx = this.position.x - (this.pivot.x * lt.a + this.pivot.y * lt.c);
    lt.ty = this.position.y - (this.pivot.x * lt.b + this.pivot.y * lt.d);
  };

  /**
   * Updates the values of the object and applies the parent's transform.
   *
   * @param {PIXI.Transform} parentTransform - The transform of the parent of this object
   */


  Transform.prototype.updateTransform = function updateTransform(parentTransform) {
    var lt = this.localTransform;

    lt.a = this._cx * this.scale.x;
    lt.b = this._sx * this.scale.x;
    lt.c = this._cy * this.scale.y;
    lt.d = this._sy * this.scale.y;

    lt.tx = this.position.x - (this.pivot.x * lt.a + this.pivot.y * lt.c);
    lt.ty = this.position.y - (this.pivot.x * lt.b + this.pivot.y * lt.d);

    // concat the parent matrix with the objects transform.
    var pt = parentTransform.worldTransform;
    var wt = this.worldTransform;

    wt.a = lt.a * pt.a + lt.b * pt.c;
    wt.b = lt.a * pt.b + lt.b * pt.d;
    wt.c = lt.c * pt.a + lt.d * pt.c;
    wt.d = lt.c * pt.b + lt.d * pt.d;
    wt.tx = lt.tx * pt.a + lt.ty * pt.c + pt.tx;
    wt.ty = lt.tx * pt.b + lt.ty * pt.d + pt.ty;

    this._worldID++;
  };

  /**
   * Decomposes a matrix and sets the transforms properties based on it.
   *
   * @param {PIXI.Matrix} matrix - The matrix to decompose
   */


  Transform.prototype.setFromMatrix = function setFromMatrix(matrix) {
    matrix.decompose(this);
  };

  /**
   * The rotation of the object in radians.
   *
   * @member {number}
   */


  _createClass(Transform, [{
    key: 'rotation',
    get: function get() {
      return this._rotation;
    },
    set: function set(value) // eslint-disable-line require-jsdoc
    {
      this._rotation = value;
      this.updateSkew();
    }
  }]);

  return Transform;
}(_TransformBase3.default);

exports.default = Transform;
//# sourceMappingURL=Transform.js.map

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _BaseRenderTexture = __webpack_require__(95);

var _BaseRenderTexture2 = _interopRequireDefault(_BaseRenderTexture);

var _Texture2 = __webpack_require__(31);

var _Texture3 = _interopRequireDefault(_Texture2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A RenderTexture is a special texture that allows any PixiJS display object to be rendered to it.
 *
 * __Hint__: All DisplayObjects (i.e. Sprites) that render to a RenderTexture should be preloaded
 * otherwise black rectangles will be drawn instead.
 *
 * A RenderTexture takes a snapshot of any Display Object given to its render method. For example:
 *
 * ```js
 * let renderer = PIXI.autoDetectRenderer(1024, 1024, { view: canvas, ratio: 1 });
 * let renderTexture = PIXI.RenderTexture.create(800, 600);
 * let sprite = PIXI.Sprite.fromImage("spinObj_01.png");
 *
 * sprite.position.x = 800/2;
 * sprite.position.y = 600/2;
 * sprite.anchor.x = 0.5;
 * sprite.anchor.y = 0.5;
 *
 * renderer.render(sprite, renderTexture);
 * ```
 *
 * The Sprite in this case will be rendered using its local transform. To render this sprite at 0,0
 * you can clear the transform
 *
 * ```js
 *
 * sprite.setTransform()
 *
 * let renderTexture = new PIXI.RenderTexture.create(100, 100);
 *
 * renderer.render(sprite, renderTexture);  // Renders to center of RenderTexture
 * ```
 *
 * @class
 * @extends PIXI.Texture
 * @memberof PIXI
 */
var RenderTexture = function (_Texture) {
    _inherits(RenderTexture, _Texture);

    /**
     * @param {PIXI.BaseRenderTexture} baseRenderTexture - The renderer used for this RenderTexture
     * @param {PIXI.Rectangle} [frame] - The rectangle frame of the texture to show
     */
    function RenderTexture(baseRenderTexture, frame) {
        _classCallCheck(this, RenderTexture);

        // support for legacy..
        var _legacyRenderer = null;

        if (!(baseRenderTexture instanceof _BaseRenderTexture2.default)) {
            /* eslint-disable prefer-rest-params, no-console */
            var width = arguments[1];
            var height = arguments[2];
            var scaleMode = arguments[3];
            var resolution = arguments[4];

            // we have an old render texture..
            console.warn('Please use RenderTexture.create(' + width + ', ' + height + ') instead of the ctor directly.');
            _legacyRenderer = arguments[0];
            /* eslint-enable prefer-rest-params, no-console */

            frame = null;
            baseRenderTexture = new _BaseRenderTexture2.default(width, height, scaleMode, resolution);
        }

        /**
         * The base texture object that this texture uses
         *
         * @member {BaseTexture}
         */

        var _this = _possibleConstructorReturn(this, _Texture.call(this, baseRenderTexture, frame));

        _this.legacyRenderer = _legacyRenderer;

        /**
         * This will let the renderer know if the texture is valid. If it's not then it cannot be rendered.
         *
         * @member {boolean}
         */
        _this.valid = true;

        _this._updateUvs();
        return _this;
    }

    /**
     * Resizes the RenderTexture.
     *
     * @param {number} width - The width to resize to.
     * @param {number} height - The height to resize to.
     * @param {boolean} doNotResizeBaseTexture - Should the baseTexture.width and height values be resized as well?
     */


    RenderTexture.prototype.resize = function resize(width, height, doNotResizeBaseTexture) {
        // TODO - could be not required..
        this.valid = width > 0 && height > 0;

        this._frame.width = this.orig.width = width;
        this._frame.height = this.orig.height = height;

        if (!doNotResizeBaseTexture) {
            this.baseTexture.resize(width, height);
        }

        this._updateUvs();
    };

    /**
     * A short hand way of creating a render texture.
     *
     * @param {number} [width=100] - The width of the render texture
     * @param {number} [height=100] - The height of the render texture
     * @param {number} [scaleMode=PIXI.settings.SCALE_MODE] - See {@link PIXI.SCALE_MODES} for possible values
     * @param {number} [resolution=1] - The resolution / device pixel ratio of the texture being generated
     * @return {PIXI.RenderTexture} The new render texture
     */


    RenderTexture.create = function create(width, height, scaleMode, resolution) {
        return new RenderTexture(new _BaseRenderTexture2.default(width, height, scaleMode, resolution));
    };

    return RenderTexture;
}(_Texture3.default);

exports.default = RenderTexture;
//# sourceMappingURL=RenderTexture.js.map

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Bit twiddling hacks for JavaScript.
 *
 * Author: Mikola Lysenko
 *
 * Ported from Stanford bit twiddling hack library:
 *    http://graphics.stanford.edu/~seander/bithacks.html
 */

 "use restrict";

//Number of bits in an integer
var INT_BITS = 32;

//Constants
exports.INT_BITS  = INT_BITS;
exports.INT_MAX   =  0x7fffffff;
exports.INT_MIN   = -1<<(INT_BITS-1);

//Returns -1, 0, +1 depending on sign of x
exports.sign = function(v) {
  return (v > 0) - (v < 0);
}

//Computes absolute value of integer
exports.abs = function(v) {
  var mask = v >> (INT_BITS-1);
  return (v ^ mask) - mask;
}

//Computes minimum of integers x and y
exports.min = function(x, y) {
  return y ^ ((x ^ y) & -(x < y));
}

//Computes maximum of integers x and y
exports.max = function(x, y) {
  return x ^ ((x ^ y) & -(x < y));
}

//Checks if a number is a power of two
exports.isPow2 = function(v) {
  return !(v & (v-1)) && (!!v);
}

//Computes log base 2 of v
exports.log2 = function(v) {
  var r, shift;
  r =     (v > 0xFFFF) << 4; v >>>= r;
  shift = (v > 0xFF  ) << 3; v >>>= shift; r |= shift;
  shift = (v > 0xF   ) << 2; v >>>= shift; r |= shift;
  shift = (v > 0x3   ) << 1; v >>>= shift; r |= shift;
  return r | (v >> 1);
}

//Computes log base 10 of v
exports.log10 = function(v) {
  return  (v >= 1000000000) ? 9 : (v >= 100000000) ? 8 : (v >= 10000000) ? 7 :
          (v >= 1000000) ? 6 : (v >= 100000) ? 5 : (v >= 10000) ? 4 :
          (v >= 1000) ? 3 : (v >= 100) ? 2 : (v >= 10) ? 1 : 0;
}

//Counts number of bits
exports.popCount = function(v) {
  v = v - ((v >>> 1) & 0x55555555);
  v = (v & 0x33333333) + ((v >>> 2) & 0x33333333);
  return ((v + (v >>> 4) & 0xF0F0F0F) * 0x1010101) >>> 24;
}

//Counts number of trailing zeros
function countTrailingZeros(v) {
  var c = 32;
  v &= -v;
  if (v) c--;
  if (v & 0x0000FFFF) c -= 16;
  if (v & 0x00FF00FF) c -= 8;
  if (v & 0x0F0F0F0F) c -= 4;
  if (v & 0x33333333) c -= 2;
  if (v & 0x55555555) c -= 1;
  return c;
}
exports.countTrailingZeros = countTrailingZeros;

//Rounds to next power of 2
exports.nextPow2 = function(v) {
  v += v === 0;
  --v;
  v |= v >>> 1;
  v |= v >>> 2;
  v |= v >>> 4;
  v |= v >>> 8;
  v |= v >>> 16;
  return v + 1;
}

//Rounds down to previous power of 2
exports.prevPow2 = function(v) {
  v |= v >>> 1;
  v |= v >>> 2;
  v |= v >>> 4;
  v |= v >>> 8;
  v |= v >>> 16;
  return v - (v>>>1);
}

//Computes parity of word
exports.parity = function(v) {
  v ^= v >>> 16;
  v ^= v >>> 8;
  v ^= v >>> 4;
  v &= 0xf;
  return (0x6996 >>> v) & 1;
}

var REVERSE_TABLE = new Array(256);

(function(tab) {
  for(var i=0; i<256; ++i) {
    var v = i, r = i, s = 7;
    for (v >>>= 1; v; v >>>= 1) {
      r <<= 1;
      r |= v & 1;
      --s;
    }
    tab[i] = (r << s) & 0xff;
  }
})(REVERSE_TABLE);

//Reverse bits in a 32 bit word
exports.reverse = function(v) {
  return  (REVERSE_TABLE[ v         & 0xff] << 24) |
          (REVERSE_TABLE[(v >>> 8)  & 0xff] << 16) |
          (REVERSE_TABLE[(v >>> 16) & 0xff] << 8)  |
           REVERSE_TABLE[(v >>> 24) & 0xff];
}

//Interleave bits of 2 coordinates with 16 bits.  Useful for fast quadtree codes
exports.interleave2 = function(x, y) {
  x &= 0xFFFF;
  x = (x | (x << 8)) & 0x00FF00FF;
  x = (x | (x << 4)) & 0x0F0F0F0F;
  x = (x | (x << 2)) & 0x33333333;
  x = (x | (x << 1)) & 0x55555555;

  y &= 0xFFFF;
  y = (y | (y << 8)) & 0x00FF00FF;
  y = (y | (y << 4)) & 0x0F0F0F0F;
  y = (y | (y << 2)) & 0x33333333;
  y = (y | (y << 1)) & 0x55555555;

  return x | (y << 1);
}

//Extracts the nth interleaved component
exports.deinterleave2 = function(v, n) {
  v = (v >>> n) & 0x55555555;
  v = (v | (v >>> 1))  & 0x33333333;
  v = (v | (v >>> 2))  & 0x0F0F0F0F;
  v = (v | (v >>> 4))  & 0x00FF00FF;
  v = (v | (v >>> 16)) & 0x000FFFF;
  return (v << 16) >> 16;
}


//Interleave bits of 3 coordinates, each with 10 bits.  Useful for fast octree codes
exports.interleave3 = function(x, y, z) {
  x &= 0x3FF;
  x  = (x | (x<<16)) & 4278190335;
  x  = (x | (x<<8))  & 251719695;
  x  = (x | (x<<4))  & 3272356035;
  x  = (x | (x<<2))  & 1227133513;

  y &= 0x3FF;
  y  = (y | (y<<16)) & 4278190335;
  y  = (y | (y<<8))  & 251719695;
  y  = (y | (y<<4))  & 3272356035;
  y  = (y | (y<<2))  & 1227133513;
  x |= (y << 1);
  
  z &= 0x3FF;
  z  = (z | (z<<16)) & 4278190335;
  z  = (z | (z<<8))  & 251719695;
  z  = (z | (z<<4))  & 3272356035;
  z  = (z | (z<<2))  & 1227133513;
  
  return x | (z << 2);
}

//Extracts nth interleaved component of a 3-tuple
exports.deinterleave3 = function(v, n) {
  v = (v >>> n)       & 1227133513;
  v = (v | (v>>>2))   & 3272356035;
  v = (v | (v>>>4))   & 251719695;
  v = (v | (v>>>8))   & 4278190335;
  v = (v | (v>>>16))  & 0x3FF;
  return (v<<22)>>22;
}

//Computes next combination in colexicographic order (this is mistakenly called nextPermutation on the bit twiddling hacks page)
exports.nextCombination = function(v) {
  var t = v | (v - 1);
  return (t + 1) | (((~t & -~t) - 1) >>> (countTrailingZeros(v) + 1));
}



/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * A GraphicsData object.
 *
 * @class
 * @memberof PIXI
 */
var GraphicsData = function () {
  /**
   *
   * @param {number} lineWidth - the width of the line to draw
   * @param {number} lineColor - the color of the line to draw
   * @param {number} lineAlpha - the alpha of the line to draw
   * @param {number} fillColor - the color of the fill
   * @param {number} fillAlpha - the alpha of the fill
   * @param {boolean} fill - whether or not the shape is filled with a colour
   * @param {boolean} nativeLines - the method for drawing lines
   * @param {PIXI.Circle|PIXI.Rectangle|PIXI.Ellipse|PIXI.Polygon} shape - The shape object to draw.
   */
  function GraphicsData(lineWidth, lineColor, lineAlpha, fillColor, fillAlpha, fill, nativeLines, shape) {
    _classCallCheck(this, GraphicsData);

    /**
     * @member {number} the width of the line to draw
     */
    this.lineWidth = lineWidth;
    /**
     * @member {boolean} if true the liens will be draw using LINES instead of TRIANGLE_STRIP
     */
    this.nativeLines = nativeLines;

    /**
     * @member {number} the color of the line to draw
     */
    this.lineColor = lineColor;

    /**
     * @member {number} the alpha of the line to draw
     */
    this.lineAlpha = lineAlpha;

    /**
     * @member {number} cached tint of the line to draw
     */
    this._lineTint = lineColor;

    /**
     * @member {number} the color of the fill
     */
    this.fillColor = fillColor;

    /**
     * @member {number} the alpha of the fill
     */
    this.fillAlpha = fillAlpha;

    /**
     * @member {number} cached tint of the fill
     */
    this._fillTint = fillColor;

    /**
     * @member {boolean} whether or not the shape is filled with a colour
     */
    this.fill = fill;

    this.holes = [];

    /**
     * @member {PIXI.Circle|PIXI.Ellipse|PIXI.Polygon|PIXI.Rectangle|PIXI.RoundedRectangle} The shape object to draw.
     */
    this.shape = shape;

    /**
     * @member {number} The type of the shape, see the Const.Shapes file for all the existing types,
     */
    this.type = shape.type;
  }

  /**
   * Creates a new GraphicsData object with the same values as this one.
   *
   * @return {PIXI.GraphicsData} Cloned GraphicsData object
   */


  GraphicsData.prototype.clone = function clone() {
    return new GraphicsData(this.lineWidth, this.lineColor, this.lineAlpha, this.fillColor, this.fillAlpha, this.fill, this.nativeLines, this.shape);
  };

  /**
   * Adds a hole to the shape.
   *
   * @param {PIXI.Rectangle|PIXI.Circle} shape - The shape of the hole.
   */


  GraphicsData.prototype.addHole = function addHole(shape) {
    this.holes.push(shape);
  };

  /**
   * Destroys the Graphics data.
   */


  GraphicsData.prototype.destroy = function destroy() {
    this.shape = null;
    this.holes = null;
  };

  return GraphicsData;
}();

exports.default = GraphicsData;
//# sourceMappingURL=GraphicsData.js.map

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(13);

var _math = __webpack_require__(14);

var _const = __webpack_require__(12);

var _settings = __webpack_require__(15);

var _settings2 = _interopRequireDefault(_settings);

var _Container = __webpack_require__(19);

var _Container2 = _interopRequireDefault(_Container);

var _RenderTexture = __webpack_require__(51);

var _RenderTexture2 = _interopRequireDefault(_RenderTexture);

var _eventemitter = __webpack_require__(18);

var _eventemitter2 = _interopRequireDefault(_eventemitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var tempMatrix = new _math.Matrix();

/**
 * The SystemRenderer is the base for a PixiJS Renderer. It is extended by the {@link PIXI.CanvasRenderer}
 * and {@link PIXI.WebGLRenderer} which can be used for rendering a PixiJS scene.
 *
 * @abstract
 * @class
 * @extends EventEmitter
 * @memberof PIXI
 */

var SystemRenderer = function (_EventEmitter) {
  _inherits(SystemRenderer, _EventEmitter);

  // eslint-disable-next-line valid-jsdoc
  /**
   * @param {string} system - The name of the system this renderer is for.
   * @param {object} [options] - The optional renderer parameters
   * @param {number} [options.width=800] - the width of the screen
   * @param {number} [options.height=600] - the height of the screen
   * @param {HTMLCanvasElement} [options.view] - the canvas to use as a view, optional
   * @param {boolean} [options.transparent=false] - If the render view is transparent, default false
   * @param {boolean} [options.autoResize=false] - If the render view is automatically resized, default false
   * @param {boolean} [options.antialias=false] - sets antialias (only applicable in chrome at the moment)
   * @param {number} [options.resolution=1] - The resolution / device pixel ratio of the renderer. The
   *  resolution of the renderer retina would be 2.
   * @param {boolean} [options.preserveDrawingBuffer=false] - enables drawing buffer preservation,
   *  enable this if you need to call toDataUrl on the webgl context.
   * @param {boolean} [options.clearBeforeRender=true] - This sets if the renderer will clear the canvas or
   *      not before the new render pass.
   * @param {number} [options.backgroundColor=0x000000] - The background color of the rendered area
   *  (shown if not transparent).
   * @param {boolean} [options.roundPixels=false] - If true PixiJS will Math.floor() x/y values when rendering,
   *  stopping pixel interpolation.
   */
  function SystemRenderer(system, options, arg2, arg3) {
    _classCallCheck(this, SystemRenderer);

    var _this = _possibleConstructorReturn(this, _EventEmitter.call(this));

    (0, _utils.sayHello)(system);

    // Support for constructor(system, screenWidth, screenHeight, options)
    if (typeof options === 'number') {
      options = Object.assign({
        width: options,
        height: arg2 || _settings2.default.RENDER_OPTIONS.height
      }, arg3);
    }

    // Add the default render options
    options = Object.assign({}, _settings2.default.RENDER_OPTIONS, options);

    /**
     * The supplied constructor options.
     *
     * @member {Object}
     * @readOnly
     */
    _this.options = options;

    /**
     * The type of the renderer.
     *
     * @member {number}
     * @default PIXI.RENDERER_TYPE.UNKNOWN
     * @see PIXI.RENDERER_TYPE
     */
    _this.type = _const.RENDERER_TYPE.UNKNOWN;

    /**
     * Measurements of the screen. (0, 0, screenWidth, screenHeight)
     *
     * Its safe to use as filterArea or hitArea for whole stage
     *
     * @member {PIXI.Rectangle}
     */
    _this.screen = new _math.Rectangle(0, 0, options.width, options.height);

    /**
     * The canvas element that everything is drawn to
     *
     * @member {HTMLCanvasElement}
     */
    _this.view = options.view || document.createElement('canvas');

    /**
     * The resolution / device pixel ratio of the renderer
     *
     * @member {number}
     * @default 1
     */
    _this.resolution = options.resolution || _settings2.default.RESOLUTION;

    /**
     * Whether the render view is transparent
     *
     * @member {boolean}
     */
    _this.transparent = options.transparent;

    /**
     * Whether css dimensions of canvas view should be resized to screen dimensions automatically
     *
     * @member {boolean}
     */
    _this.autoResize = options.autoResize || false;

    /**
     * Tracks the blend modes useful for this renderer.
     *
     * @member {object<string, mixed>}
     */
    _this.blendModes = null;

    /**
     * The value of the preserveDrawingBuffer flag affects whether or not the contents of
     * the stencil buffer is retained after rendering.
     *
     * @member {boolean}
     */
    _this.preserveDrawingBuffer = options.preserveDrawingBuffer;

    /**
     * This sets if the CanvasRenderer will clear the canvas or not before the new render pass.
     * If the scene is NOT transparent PixiJS will use a canvas sized fillRect operation every
     * frame to set the canvas background color. If the scene is transparent PixiJS will use clearRect
     * to clear the canvas every frame. Disable this by setting this to false. For example if
     * your game has a canvas filling background image you often don't need this set.
     *
     * @member {boolean}
     * @default
     */
    _this.clearBeforeRender = options.clearBeforeRender;

    /**
     * If true PixiJS will Math.floor() x/y values when rendering, stopping pixel interpolation.
     * Handy for crisp pixel art and speed on legacy devices.
     *
     * @member {boolean}
     */
    _this.roundPixels = options.roundPixels;

    /**
     * The background color as a number.
     *
     * @member {number}
     * @private
     */
    _this._backgroundColor = 0x000000;

    /**
     * The background color as an [R, G, B] array.
     *
     * @member {number[]}
     * @private
     */
    _this._backgroundColorRgba = [0, 0, 0, 0];

    /**
     * The background color as a string.
     *
     * @member {string}
     * @private
     */
    _this._backgroundColorString = '#000000';

    _this.backgroundColor = options.backgroundColor || _this._backgroundColor; // run bg color setter

    /**
     * This temporary display object used as the parent of the currently being rendered item
     *
     * @member {PIXI.DisplayObject}
     * @private
     */
    _this._tempDisplayObjectParent = new _Container2.default();

    /**
     * The last root object that the renderer tried to render.
     *
     * @member {PIXI.DisplayObject}
     * @private
     */
    _this._lastObjectRendered = _this._tempDisplayObjectParent;
    return _this;
  }

  /**
   * Same as view.width, actual number of pixels in the canvas by horizontal
   *
   * @member {number}
   * @readonly
   * @default 800
   */


  /**
   * Resizes the screen and canvas to the specified width and height
   * Canvas dimensions are multiplied by resolution
   *
   * @param {number} screenWidth - the new width of the screen
   * @param {number} screenHeight - the new height of the screen
   */
  SystemRenderer.prototype.resize = function resize(screenWidth, screenHeight) {
    this.screen.width = screenWidth;
    this.screen.height = screenHeight;

    this.view.width = screenWidth * this.resolution;
    this.view.height = screenHeight * this.resolution;

    if (this.autoResize) {
      this.view.style.width = screenWidth + 'px';
      this.view.style.height = screenHeight + 'px';
    }
  };

  /**
   * Useful function that returns a texture of the display object that can then be used to create sprites
   * This can be quite useful if your displayObject is complicated and needs to be reused multiple times.
   *
   * @param {PIXI.DisplayObject} displayObject - The displayObject the object will be generated from
   * @param {number} scaleMode - Should be one of the scaleMode consts
   * @param {number} resolution - The resolution / device pixel ratio of the texture being generated
   * @return {PIXI.Texture} a texture of the graphics object
   */


  SystemRenderer.prototype.generateTexture = function generateTexture(displayObject, scaleMode, resolution) {
    var bounds = displayObject.getLocalBounds();

    var renderTexture = _RenderTexture2.default.create(bounds.width | 0, bounds.height | 0, scaleMode, resolution);

    tempMatrix.tx = -bounds.x;
    tempMatrix.ty = -bounds.y;

    this.render(displayObject, renderTexture, false, tempMatrix, true);

    return renderTexture;
  };

  /**
   * Removes everything from the renderer and optionally removes the Canvas DOM element.
   *
   * @param {boolean} [removeView=false] - Removes the Canvas element from the DOM.
   */


  SystemRenderer.prototype.destroy = function destroy(removeView) {
    if (removeView && this.view.parentNode) {
      this.view.parentNode.removeChild(this.view);
    }

    this.type = _const.RENDERER_TYPE.UNKNOWN;

    this.view = null;

    this.screen = null;

    this.resolution = 0;

    this.transparent = false;

    this.autoResize = false;

    this.blendModes = null;

    this.options = null;

    this.preserveDrawingBuffer = false;
    this.clearBeforeRender = false;

    this.roundPixels = false;

    this._backgroundColor = 0;
    this._backgroundColorRgba = null;
    this._backgroundColorString = null;

    this._tempDisplayObjectParent = null;
    this._lastObjectRendered = null;
  };

  /**
   * The background color to fill if not transparent
   *
   * @member {number}
   */


  _createClass(SystemRenderer, [{
    key: 'width',
    get: function get() {
      return this.view.width;
    }

    /**
     * Same as view.height, actual number of pixels in the canvas by vertical
     *
     * @member {number}
     * @readonly
     * @default 600
     */

  }, {
    key: 'height',
    get: function get() {
      return this.view.height;
    }
  }, {
    key: 'backgroundColor',
    get: function get() {
      return this._backgroundColor;
    },
    set: function set(value) // eslint-disable-line require-jsdoc
    {
      this._backgroundColor = value;
      this._backgroundColorString = (0, _utils.hex2string)(value);
      (0, _utils.hex2rgb)(value, this._backgroundColorRgba);
    }
  }]);

  return SystemRenderer;
}(_eventemitter2.default);

exports.default = SystemRenderer;
//# sourceMappingURL=SystemRenderer.js.map

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Filter2 = __webpack_require__(56);

var _Filter3 = _interopRequireDefault(_Filter2);

var _math = __webpack_require__(14);

var _path = __webpack_require__(117);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The SpriteMaskFilter class
 *
 * @class
 * @extends PIXI.Filter
 * @memberof PIXI
 */
var SpriteMaskFilter = function (_Filter) {
    _inherits(SpriteMaskFilter, _Filter);

    /**
     * @param {PIXI.Sprite} sprite - the target sprite
     */
    function SpriteMaskFilter(sprite) {
        _classCallCheck(this, SpriteMaskFilter);

        var maskMatrix = new _math.Matrix();

        var _this = _possibleConstructorReturn(this, _Filter.call(this, 'attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n}\n', 'varying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float alpha;\nuniform sampler2D mask;\n\nvoid main(void)\n{\n    // check clip! this will stop the mask bleeding out from the edges\n    vec2 text = abs( vMaskCoord - 0.5 );\n    text = step(0.5, text);\n\n    float clip = 1.0 - max(text.y, text.x);\n    vec4 original = texture2D(uSampler, vTextureCoord);\n    vec4 masky = texture2D(mask, vMaskCoord);\n\n    original *= (masky.r * masky.a * alpha * clip);\n\n    gl_FragColor = original;\n}\n'));

        sprite.renderable = false;

        _this.maskSprite = sprite;
        _this.maskMatrix = maskMatrix;
        return _this;
    }

    /**
     * Applies the filter
     *
     * @param {PIXI.FilterManager} filterManager - The renderer to retrieve the filter from
     * @param {PIXI.RenderTarget} input - The input render target.
     * @param {PIXI.RenderTarget} output - The target to output to.
     */


    SpriteMaskFilter.prototype.apply = function apply(filterManager, input, output) {
        var maskSprite = this.maskSprite;

        this.uniforms.mask = maskSprite._texture;
        this.uniforms.otherMatrix = filterManager.calculateSpriteMatrix(this.maskMatrix, maskSprite);
        this.uniforms.alpha = maskSprite.worldAlpha;

        filterManager.applyFilter(this, input, output);
    };

    return SpriteMaskFilter;
}(_Filter3.default);

exports.default = SpriteMaskFilter;
//# sourceMappingURL=SpriteMaskFilter.js.map

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extractUniformsFromSrc = __webpack_require__(116);

var _extractUniformsFromSrc2 = _interopRequireDefault(_extractUniformsFromSrc);

var _utils = __webpack_require__(13);

var _const = __webpack_require__(12);

var _settings = __webpack_require__(15);

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SOURCE_KEY_MAP = {};

// let math = require('../../../math');
/**
 * @class
 * @memberof PIXI
 * @extends PIXI.Shader
 */

var Filter = function () {
  /**
   * @param {string} [vertexSrc] - The source of the vertex shader.
   * @param {string} [fragmentSrc] - The source of the fragment shader.
   * @param {object} [uniforms] - Custom uniforms to use to augment the built-in ones.
   */
  function Filter(vertexSrc, fragmentSrc, uniforms) {
    _classCallCheck(this, Filter);

    /**
     * The vertex shader.
     *
     * @member {string}
     */
    this.vertexSrc = vertexSrc || Filter.defaultVertexSrc;

    /**
     * The fragment shader.
     *
     * @member {string}
     */
    this.fragmentSrc = fragmentSrc || Filter.defaultFragmentSrc;

    this._blendMode = _const.BLEND_MODES.NORMAL;

    this.uniformData = uniforms || (0, _extractUniformsFromSrc2.default)(this.vertexSrc, this.fragmentSrc, 'projectionMatrix|uSampler');

    /**
     * An object containing the current values of custom uniforms.
     * @example <caption>Updating the value of a custom uniform</caption>
     * filter.uniforms.time = performance.now();
     *
     * @member {object}
     */
    this.uniforms = {};

    for (var i in this.uniformData) {
      this.uniforms[i] = this.uniformData[i].value;
    }

    // this is where we store shader references..
    // TODO we could cache this!
    this.glShaders = {};

    // used for cacheing.. sure there is a better way!
    if (!SOURCE_KEY_MAP[this.vertexSrc + this.fragmentSrc]) {
      SOURCE_KEY_MAP[this.vertexSrc + this.fragmentSrc] = (0, _utils.uid)();
    }

    this.glShaderKey = SOURCE_KEY_MAP[this.vertexSrc + this.fragmentSrc];

    /**
     * The padding of the filter. Some filters require extra space to breath such as a blur.
     * Increasing this will add extra width and height to the bounds of the object that the
     * filter is applied to.
     *
     * @member {number}
     */
    this.padding = 4;

    /**
     * The resolution of the filter. Setting this to be lower will lower the quality but
     * increase the performance of the filter.
     *
     * @member {number}
     */
    this.resolution = _settings2.default.RESOLUTION;

    /**
     * If enabled is true the filter is applied, if false it will not.
     *
     * @member {boolean}
     */
    this.enabled = true;

    /**
     * If enabled, PixiJS will fit the filter area into boundaries for better performance.
     * Switch it off if it does not work for specific shader.
     *
     * @member {boolean}
     */
    this.autoFit = true;
  }

  /**
   * Applies the filter
   *
   * @param {PIXI.FilterManager} filterManager - The renderer to retrieve the filter from
   * @param {PIXI.RenderTarget} input - The input render target.
   * @param {PIXI.RenderTarget} output - The target to output to.
   * @param {boolean} clear - Should the output be cleared before rendering to it
   * @param {object} [currentState] - It's current state of filter.
   *        There are some useful properties in the currentState :
   *        target, filters, sourceFrame, destinationFrame, renderTarget, resolution
   */


  Filter.prototype.apply = function apply(filterManager, input, output, clear, currentState) // eslint-disable-line no-unused-vars
  {
    // --- //
    //  this.uniforms.filterMatrix = filterManager.calculateSpriteMatrix(tempMatrix, window.panda );

    // do as you please!

    filterManager.applyFilter(this, input, output, clear);

    // or just do a regular render..
  };

  /**
   * Sets the blendmode of the filter
   *
   * @member {number}
   * @default PIXI.BLEND_MODES.NORMAL
   */


  _createClass(Filter, [{
    key: 'blendMode',
    get: function get() {
      return this._blendMode;
    },
    set: function set(value) // eslint-disable-line require-jsdoc
    {
      this._blendMode = value;
    }

    /**
     * The default vertex shader source
     *
     * @static
     * @constant
     */

  }], [{
    key: 'defaultVertexSrc',
    get: function get() {
      return ['attribute vec2 aVertexPosition;', 'attribute vec2 aTextureCoord;', 'uniform mat3 projectionMatrix;', 'uniform mat3 filterMatrix;', 'varying vec2 vTextureCoord;', 'varying vec2 vFilterCoord;', 'void main(void){', '   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);', '   vFilterCoord = ( filterMatrix * vec3( aTextureCoord, 1.0)  ).xy;', '   vTextureCoord = aTextureCoord ;', '}'].join('\n');
    }

    /**
     * The default fragment shader source
     *
     * @static
     * @constant
     */

  }, {
    key: 'defaultFragmentSrc',
    get: function get() {
      return ['varying vec2 vTextureCoord;', 'varying vec2 vFilterCoord;', 'uniform sampler2D uSampler;', 'uniform sampler2D filterSampler;', 'void main(void){', '   vec4 masky = texture2D(filterSampler, vFilterCoord);', '   vec4 sample = texture2D(uSampler, vTextureCoord);', '   vec4 color;', '   if(mod(vFilterCoord.x, 1.0) > 0.5)', '   {', '     color = vec4(1.0, 0.0, 0.0, 1.0);', '   }', '   else', '   {', '     color = vec4(0.0, 1.0, 0.0, 1.0);', '   }',
      // '   gl_FragColor = vec4(mod(vFilterCoord.x, 1.5), vFilterCoord.y,0.0,1.0);',
      '   gl_FragColor = mix(sample, masky, 0.5);', '   gl_FragColor *= sample.a;', '}'].join('\n');
    }
  }]);

  return Filter;
}();

exports.default = Filter;
//# sourceMappingURL=Filter.js.map

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _pixiGlCore = __webpack_require__(16);

var _pixiGlCore2 = _interopRequireDefault(_pixiGlCore);

var _createIndicesForQuads = __webpack_require__(121);

var _createIndicesForQuads2 = _interopRequireDefault(_createIndicesForQuads);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Helper class to create a quad
 *
 * @class
 * @memberof PIXI
 */
var Quad = function () {
  /**
   * @param {WebGLRenderingContext} gl - The gl context for this quad to use.
   * @param {object} state - TODO: Description
   */
  function Quad(gl, state) {
    _classCallCheck(this, Quad);

    /**
     * the current WebGL drawing context
     *
     * @member {WebGLRenderingContext}
     */
    this.gl = gl;

    /**
     * An array of vertices
     *
     * @member {Float32Array}
     */
    this.vertices = new Float32Array([-1, -1, 1, -1, 1, 1, -1, 1]);

    /**
     * The Uvs of the quad
     *
     * @member {Float32Array}
     */
    this.uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]);

    this.interleaved = new Float32Array(8 * 2);

    for (var i = 0; i < 4; i++) {
      this.interleaved[i * 4] = this.vertices[i * 2];
      this.interleaved[i * 4 + 1] = this.vertices[i * 2 + 1];
      this.interleaved[i * 4 + 2] = this.uvs[i * 2];
      this.interleaved[i * 4 + 3] = this.uvs[i * 2 + 1];
    }

    /**
     * An array containing the indices of the vertices
     *
     * @member {Uint16Array}
     */
    this.indices = (0, _createIndicesForQuads2.default)(1);

    /**
     * The vertex buffer
     *
     * @member {glCore.GLBuffer}
     */
    this.vertexBuffer = _pixiGlCore2.default.GLBuffer.createVertexBuffer(gl, this.interleaved, gl.STATIC_DRAW);

    /**
     * The index buffer
     *
     * @member {glCore.GLBuffer}
     */
    this.indexBuffer = _pixiGlCore2.default.GLBuffer.createIndexBuffer(gl, this.indices, gl.STATIC_DRAW);

    /**
     * The vertex array object
     *
     * @member {glCore.VertexArrayObject}
     */
    this.vao = new _pixiGlCore2.default.VertexArrayObject(gl, state);
  }

  /**
   * Initialises the vaos and uses the shader.
   *
   * @param {PIXI.Shader} shader - the shader to use
   */


  Quad.prototype.initVao = function initVao(shader) {
    this.vao.clear().addIndex(this.indexBuffer).addAttribute(this.vertexBuffer, shader.attributes.aVertexPosition, this.gl.FLOAT, false, 4 * 4, 0).addAttribute(this.vertexBuffer, shader.attributes.aTextureCoord, this.gl.FLOAT, false, 4 * 4, 2 * 4);
  };

  /**
   * Maps two Rectangle to the quad.
   *
   * @param {PIXI.Rectangle} targetTextureFrame - the first rectangle
   * @param {PIXI.Rectangle} destinationFrame - the second rectangle
   * @return {PIXI.Quad} Returns itself.
   */


  Quad.prototype.map = function map(targetTextureFrame, destinationFrame) {
    var x = 0; // destinationFrame.x / targetTextureFrame.width;
    var y = 0; // destinationFrame.y / targetTextureFrame.height;

    this.uvs[0] = x;
    this.uvs[1] = y;

    this.uvs[2] = x + destinationFrame.width / targetTextureFrame.width;
    this.uvs[3] = y;

    this.uvs[4] = x + destinationFrame.width / targetTextureFrame.width;
    this.uvs[5] = y + destinationFrame.height / targetTextureFrame.height;

    this.uvs[6] = x;
    this.uvs[7] = y + destinationFrame.height / targetTextureFrame.height;

    x = destinationFrame.x;
    y = destinationFrame.y;

    this.vertices[0] = x;
    this.vertices[1] = y;

    this.vertices[2] = x + destinationFrame.width;
    this.vertices[3] = y;

    this.vertices[4] = x + destinationFrame.width;
    this.vertices[5] = y + destinationFrame.height;

    this.vertices[6] = x;
    this.vertices[7] = y + destinationFrame.height;

    return this;
  };

  /**
   * Binds the buffer and uploads the data
   *
   * @return {PIXI.Quad} Returns itself.
   */


  Quad.prototype.upload = function upload() {
    for (var i = 0; i < 4; i++) {
      this.interleaved[i * 4] = this.vertices[i * 2];
      this.interleaved[i * 4 + 1] = this.vertices[i * 2 + 1];
      this.interleaved[i * 4 + 2] = this.uvs[i * 2];
      this.interleaved[i * 4 + 3] = this.uvs[i * 2 + 1];
    }

    this.vertexBuffer.upload(this.interleaved);

    return this;
  };

  /**
   * Removes this quad from WebGL
   */


  Quad.prototype.destroy = function destroy() {
    var gl = this.gl;

    gl.deleteBuffer(this.vertexBuffer);
    gl.deleteBuffer(this.indexBuffer);
  };

  return Quad;
}();

exports.default = Quad;
//# sourceMappingURL=Quad.js.map

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _pixiGlCore = __webpack_require__(16);

var _settings = __webpack_require__(15);

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function checkPrecision(src, def) {
    if (src instanceof Array) {
        if (src[0].substring(0, 9) !== 'precision') {
            var copy = src.slice(0);

            copy.unshift('precision ' + def + ' float;');

            return copy;
        }
    } else if (src.substring(0, 9) !== 'precision') {
        return 'precision ' + def + ' float;\n' + src;
    }

    return src;
}

/**
 * Wrapper class, webGL Shader for Pixi.
 * Adds precision string if vertexSrc or fragmentSrc have no mention of it.
 *
 * @class
 * @extends GLShader
 * @memberof PIXI
 */

var Shader = function (_GLShader) {
    _inherits(Shader, _GLShader);

    /**
     *
     * @param {WebGLRenderingContext} gl - The current WebGL rendering context
     * @param {string|string[]} vertexSrc - The vertex shader source as an array of strings.
     * @param {string|string[]} fragmentSrc - The fragment shader source as an array of strings.
     */
    function Shader(gl, vertexSrc, fragmentSrc) {
        _classCallCheck(this, Shader);

        return _possibleConstructorReturn(this, _GLShader.call(this, gl, checkPrecision(vertexSrc, _settings2.default.PRECISION_VERTEX), checkPrecision(fragmentSrc, _settings2.default.PRECISION_FRAGMENT)));
    }

    return Shader;
}(_pixiGlCore.GLShader);

exports.default = Shader;
//# sourceMappingURL=Shader.js.map

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = earcut;

function earcut(data, holeIndices, dim) {

    dim = dim || 2;

    var hasHoles = holeIndices && holeIndices.length,
        outerLen = hasHoles ? holeIndices[0] * dim : data.length,
        outerNode = linkedList(data, 0, outerLen, dim, true),
        triangles = [];

    if (!outerNode) return triangles;

    var minX, minY, maxX, maxY, x, y, size;

    if (hasHoles) outerNode = eliminateHoles(data, holeIndices, outerNode, dim);

    // if the shape is not too simple, we'll use z-order curve hash later; calculate polygon bbox
    if (data.length > 80 * dim) {
        minX = maxX = data[0];
        minY = maxY = data[1];

        for (var i = dim; i < outerLen; i += dim) {
            x = data[i];
            y = data[i + 1];
            if (x < minX) minX = x;
            if (y < minY) minY = y;
            if (x > maxX) maxX = x;
            if (y > maxY) maxY = y;
        }

        // minX, minY and size are later used to transform coords into integers for z-order calculation
        size = Math.max(maxX - minX, maxY - minY);
    }

    earcutLinked(outerNode, triangles, dim, minX, minY, size);

    return triangles;
}

// create a circular doubly linked list from polygon points in the specified winding order
function linkedList(data, start, end, dim, clockwise) {
    var i, last;

    if (clockwise === (signedArea(data, start, end, dim) > 0)) {
        for (i = start; i < end; i += dim) last = insertNode(i, data[i], data[i + 1], last);
    } else {
        for (i = end - dim; i >= start; i -= dim) last = insertNode(i, data[i], data[i + 1], last);
    }

    if (last && equals(last, last.next)) {
        removeNode(last);
        last = last.next;
    }

    return last;
}

// eliminate colinear or duplicate points
function filterPoints(start, end) {
    if (!start) return start;
    if (!end) end = start;

    var p = start,
        again;
    do {
        again = false;

        if (!p.steiner && (equals(p, p.next) || area(p.prev, p, p.next) === 0)) {
            removeNode(p);
            p = end = p.prev;
            if (p === p.next) return null;
            again = true;

        } else {
            p = p.next;
        }
    } while (again || p !== end);

    return end;
}

// main ear slicing loop which triangulates a polygon (given as a linked list)
function earcutLinked(ear, triangles, dim, minX, minY, size, pass) {
    if (!ear) return;

    // interlink polygon nodes in z-order
    if (!pass && size) indexCurve(ear, minX, minY, size);

    var stop = ear,
        prev, next;

    // iterate through ears, slicing them one by one
    while (ear.prev !== ear.next) {
        prev = ear.prev;
        next = ear.next;

        if (size ? isEarHashed(ear, minX, minY, size) : isEar(ear)) {
            // cut off the triangle
            triangles.push(prev.i / dim);
            triangles.push(ear.i / dim);
            triangles.push(next.i / dim);

            removeNode(ear);

            // skipping the next vertice leads to less sliver triangles
            ear = next.next;
            stop = next.next;

            continue;
        }

        ear = next;

        // if we looped through the whole remaining polygon and can't find any more ears
        if (ear === stop) {
            // try filtering points and slicing again
            if (!pass) {
                earcutLinked(filterPoints(ear), triangles, dim, minX, minY, size, 1);

            // if this didn't work, try curing all small self-intersections locally
            } else if (pass === 1) {
                ear = cureLocalIntersections(ear, triangles, dim);
                earcutLinked(ear, triangles, dim, minX, minY, size, 2);

            // as a last resort, try splitting the remaining polygon into two
            } else if (pass === 2) {
                splitEarcut(ear, triangles, dim, minX, minY, size);
            }

            break;
        }
    }
}

// check whether a polygon node forms a valid ear with adjacent nodes
function isEar(ear) {
    var a = ear.prev,
        b = ear,
        c = ear.next;

    if (area(a, b, c) >= 0) return false; // reflex, can't be an ear

    // now make sure we don't have other points inside the potential ear
    var p = ear.next.next;

    while (p !== ear.prev) {
        if (pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
            area(p.prev, p, p.next) >= 0) return false;
        p = p.next;
    }

    return true;
}

function isEarHashed(ear, minX, minY, size) {
    var a = ear.prev,
        b = ear,
        c = ear.next;

    if (area(a, b, c) >= 0) return false; // reflex, can't be an ear

    // triangle bbox; min & max are calculated like this for speed
    var minTX = a.x < b.x ? (a.x < c.x ? a.x : c.x) : (b.x < c.x ? b.x : c.x),
        minTY = a.y < b.y ? (a.y < c.y ? a.y : c.y) : (b.y < c.y ? b.y : c.y),
        maxTX = a.x > b.x ? (a.x > c.x ? a.x : c.x) : (b.x > c.x ? b.x : c.x),
        maxTY = a.y > b.y ? (a.y > c.y ? a.y : c.y) : (b.y > c.y ? b.y : c.y);

    // z-order range for the current triangle bbox;
    var minZ = zOrder(minTX, minTY, minX, minY, size),
        maxZ = zOrder(maxTX, maxTY, minX, minY, size);

    // first look for points inside the triangle in increasing z-order
    var p = ear.nextZ;

    while (p && p.z <= maxZ) {
        if (p !== ear.prev && p !== ear.next &&
            pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
            area(p.prev, p, p.next) >= 0) return false;
        p = p.nextZ;
    }

    // then look for points in decreasing z-order
    p = ear.prevZ;

    while (p && p.z >= minZ) {
        if (p !== ear.prev && p !== ear.next &&
            pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
            area(p.prev, p, p.next) >= 0) return false;
        p = p.prevZ;
    }

    return true;
}

// go through all polygon nodes and cure small local self-intersections
function cureLocalIntersections(start, triangles, dim) {
    var p = start;
    do {
        var a = p.prev,
            b = p.next.next;

        if (!equals(a, b) && intersects(a, p, p.next, b) && locallyInside(a, b) && locallyInside(b, a)) {

            triangles.push(a.i / dim);
            triangles.push(p.i / dim);
            triangles.push(b.i / dim);

            // remove two nodes involved
            removeNode(p);
            removeNode(p.next);

            p = start = b;
        }
        p = p.next;
    } while (p !== start);

    return p;
}

// try splitting polygon into two and triangulate them independently
function splitEarcut(start, triangles, dim, minX, minY, size) {
    // look for a valid diagonal that divides the polygon into two
    var a = start;
    do {
        var b = a.next.next;
        while (b !== a.prev) {
            if (a.i !== b.i && isValidDiagonal(a, b)) {
                // split the polygon in two by the diagonal
                var c = splitPolygon(a, b);

                // filter colinear points around the cuts
                a = filterPoints(a, a.next);
                c = filterPoints(c, c.next);

                // run earcut on each half
                earcutLinked(a, triangles, dim, minX, minY, size);
                earcutLinked(c, triangles, dim, minX, minY, size);
                return;
            }
            b = b.next;
        }
        a = a.next;
    } while (a !== start);
}

// link every hole into the outer loop, producing a single-ring polygon without holes
function eliminateHoles(data, holeIndices, outerNode, dim) {
    var queue = [],
        i, len, start, end, list;

    for (i = 0, len = holeIndices.length; i < len; i++) {
        start = holeIndices[i] * dim;
        end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
        list = linkedList(data, start, end, dim, false);
        if (list === list.next) list.steiner = true;
        queue.push(getLeftmost(list));
    }

    queue.sort(compareX);

    // process holes from left to right
    for (i = 0; i < queue.length; i++) {
        eliminateHole(queue[i], outerNode);
        outerNode = filterPoints(outerNode, outerNode.next);
    }

    return outerNode;
}

function compareX(a, b) {
    return a.x - b.x;
}

// find a bridge between vertices that connects hole with an outer ring and and link it
function eliminateHole(hole, outerNode) {
    outerNode = findHoleBridge(hole, outerNode);
    if (outerNode) {
        var b = splitPolygon(outerNode, hole);
        filterPoints(b, b.next);
    }
}

// David Eberly's algorithm for finding a bridge between hole and outer polygon
function findHoleBridge(hole, outerNode) {
    var p = outerNode,
        hx = hole.x,
        hy = hole.y,
        qx = -Infinity,
        m;

    // find a segment intersected by a ray from the hole's leftmost point to the left;
    // segment's endpoint with lesser x will be potential connection point
    do {
        if (hy <= p.y && hy >= p.next.y) {
            var x = p.x + (hy - p.y) * (p.next.x - p.x) / (p.next.y - p.y);
            if (x <= hx && x > qx) {
                qx = x;
                if (x === hx) {
                    if (hy === p.y) return p;
                    if (hy === p.next.y) return p.next;
                }
                m = p.x < p.next.x ? p : p.next;
            }
        }
        p = p.next;
    } while (p !== outerNode);

    if (!m) return null;

    if (hx === qx) return m.prev; // hole touches outer segment; pick lower endpoint

    // look for points inside the triangle of hole point, segment intersection and endpoint;
    // if there are no points found, we have a valid connection;
    // otherwise choose the point of the minimum angle with the ray as connection point

    var stop = m,
        mx = m.x,
        my = m.y,
        tanMin = Infinity,
        tan;

    p = m.next;

    while (p !== stop) {
        if (hx >= p.x && p.x >= mx &&
                pointInTriangle(hy < my ? hx : qx, hy, mx, my, hy < my ? qx : hx, hy, p.x, p.y)) {

            tan = Math.abs(hy - p.y) / (hx - p.x); // tangential

            if ((tan < tanMin || (tan === tanMin && p.x > m.x)) && locallyInside(p, hole)) {
                m = p;
                tanMin = tan;
            }
        }

        p = p.next;
    }

    return m;
}

// interlink polygon nodes in z-order
function indexCurve(start, minX, minY, size) {
    var p = start;
    do {
        if (p.z === null) p.z = zOrder(p.x, p.y, minX, minY, size);
        p.prevZ = p.prev;
        p.nextZ = p.next;
        p = p.next;
    } while (p !== start);

    p.prevZ.nextZ = null;
    p.prevZ = null;

    sortLinked(p);
}

// Simon Tatham's linked list merge sort algorithm
// http://www.chiark.greenend.org.uk/~sgtatham/algorithms/listsort.html
function sortLinked(list) {
    var i, p, q, e, tail, numMerges, pSize, qSize,
        inSize = 1;

    do {
        p = list;
        list = null;
        tail = null;
        numMerges = 0;

        while (p) {
            numMerges++;
            q = p;
            pSize = 0;
            for (i = 0; i < inSize; i++) {
                pSize++;
                q = q.nextZ;
                if (!q) break;
            }

            qSize = inSize;

            while (pSize > 0 || (qSize > 0 && q)) {

                if (pSize === 0) {
                    e = q;
                    q = q.nextZ;
                    qSize--;
                } else if (qSize === 0 || !q) {
                    e = p;
                    p = p.nextZ;
                    pSize--;
                } else if (p.z <= q.z) {
                    e = p;
                    p = p.nextZ;
                    pSize--;
                } else {
                    e = q;
                    q = q.nextZ;
                    qSize--;
                }

                if (tail) tail.nextZ = e;
                else list = e;

                e.prevZ = tail;
                tail = e;
            }

            p = q;
        }

        tail.nextZ = null;
        inSize *= 2;

    } while (numMerges > 1);

    return list;
}

// z-order of a point given coords and size of the data bounding box
function zOrder(x, y, minX, minY, size) {
    // coords are transformed into non-negative 15-bit integer range
    x = 32767 * (x - minX) / size;
    y = 32767 * (y - minY) / size;

    x = (x | (x << 8)) & 0x00FF00FF;
    x = (x | (x << 4)) & 0x0F0F0F0F;
    x = (x | (x << 2)) & 0x33333333;
    x = (x | (x << 1)) & 0x55555555;

    y = (y | (y << 8)) & 0x00FF00FF;
    y = (y | (y << 4)) & 0x0F0F0F0F;
    y = (y | (y << 2)) & 0x33333333;
    y = (y | (y << 1)) & 0x55555555;

    return x | (y << 1);
}

// find the leftmost node of a polygon ring
function getLeftmost(start) {
    var p = start,
        leftmost = start;
    do {
        if (p.x < leftmost.x) leftmost = p;
        p = p.next;
    } while (p !== start);

    return leftmost;
}

// check if a point lies within a convex triangle
function pointInTriangle(ax, ay, bx, by, cx, cy, px, py) {
    return (cx - px) * (ay - py) - (ax - px) * (cy - py) >= 0 &&
           (ax - px) * (by - py) - (bx - px) * (ay - py) >= 0 &&
           (bx - px) * (cy - py) - (cx - px) * (by - py) >= 0;
}

// check if a diagonal between two polygon nodes is valid (lies in polygon interior)
function isValidDiagonal(a, b) {
    return a.next.i !== b.i && a.prev.i !== b.i && !intersectsPolygon(a, b) &&
           locallyInside(a, b) && locallyInside(b, a) && middleInside(a, b);
}

// signed area of a triangle
function area(p, q, r) {
    return (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
}

// check if two points are equal
function equals(p1, p2) {
    return p1.x === p2.x && p1.y === p2.y;
}

// check if two segments intersect
function intersects(p1, q1, p2, q2) {
    if ((equals(p1, q1) && equals(p2, q2)) ||
        (equals(p1, q2) && equals(p2, q1))) return true;
    return area(p1, q1, p2) > 0 !== area(p1, q1, q2) > 0 &&
           area(p2, q2, p1) > 0 !== area(p2, q2, q1) > 0;
}

// check if a polygon diagonal intersects any polygon segments
function intersectsPolygon(a, b) {
    var p = a;
    do {
        if (p.i !== a.i && p.next.i !== a.i && p.i !== b.i && p.next.i !== b.i &&
                intersects(p, p.next, a, b)) return true;
        p = p.next;
    } while (p !== a);

    return false;
}

// check if a polygon diagonal is locally inside the polygon
function locallyInside(a, b) {
    return area(a.prev, a, a.next) < 0 ?
        area(a, b, a.next) >= 0 && area(a, a.prev, b) >= 0 :
        area(a, b, a.prev) < 0 || area(a, a.next, b) < 0;
}

// check if the middle point of a polygon diagonal is inside the polygon
function middleInside(a, b) {
    var p = a,
        inside = false,
        px = (a.x + b.x) / 2,
        py = (a.y + b.y) / 2;
    do {
        if (((p.y > py) !== (p.next.y > py)) && (px < (p.next.x - p.x) * (py - p.y) / (p.next.y - p.y) + p.x))
            inside = !inside;
        p = p.next;
    } while (p !== a);

    return inside;
}

// link two polygon vertices with a bridge; if the vertices belong to the same ring, it splits polygon into two;
// if one belongs to the outer ring and another to a hole, it merges it into a single ring
function splitPolygon(a, b) {
    var a2 = new Node(a.i, a.x, a.y),
        b2 = new Node(b.i, b.x, b.y),
        an = a.next,
        bp = b.prev;

    a.next = b;
    b.prev = a;

    a2.next = an;
    an.prev = a2;

    b2.next = a2;
    a2.prev = b2;

    bp.next = b2;
    b2.prev = bp;

    return b2;
}

// create a node and optionally link it with previous one (in a circular doubly linked list)
function insertNode(i, x, y, last) {
    var p = new Node(i, x, y);

    if (!last) {
        p.prev = p;
        p.next = p;

    } else {
        p.next = last.next;
        p.prev = last;
        last.next.prev = p;
        last.next = p;
    }
    return p;
}

function removeNode(p) {
    p.next.prev = p.prev;
    p.prev.next = p.next;

    if (p.prevZ) p.prevZ.nextZ = p.nextZ;
    if (p.nextZ) p.nextZ.prevZ = p.prevZ;
}

function Node(i, x, y) {
    // vertice index in coordinates array
    this.i = i;

    // vertex coordinates
    this.x = x;
    this.y = y;

    // previous and next vertice nodes in a polygon ring
    this.prev = null;
    this.next = null;

    // z-order curve value
    this.z = null;

    // previous and next nodes in z-order
    this.prevZ = null;
    this.nextZ = null;

    // indicates whether this is a steiner point
    this.steiner = false;
}

// return a percentage difference between the polygon area and its triangulation area;
// used to verify correctness of triangulation
earcut.deviation = function (data, holeIndices, dim, triangles) {
    var hasHoles = holeIndices && holeIndices.length;
    var outerLen = hasHoles ? holeIndices[0] * dim : data.length;

    var polygonArea = Math.abs(signedArea(data, 0, outerLen, dim));
    if (hasHoles) {
        for (var i = 0, len = holeIndices.length; i < len; i++) {
            var start = holeIndices[i] * dim;
            var end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
            polygonArea -= Math.abs(signedArea(data, start, end, dim));
        }
    }

    var trianglesArea = 0;
    for (i = 0; i < triangles.length; i += 3) {
        var a = triangles[i] * dim;
        var b = triangles[i + 1] * dim;
        var c = triangles[i + 2] * dim;
        trianglesArea += Math.abs(
            (data[a] - data[c]) * (data[b + 1] - data[a + 1]) -
            (data[a] - data[b]) * (data[c + 1] - data[a + 1]));
    }

    return polygonArea === 0 && trianglesArea === 0 ? 0 :
        Math.abs((trianglesArea - polygonArea) / polygonArea);
};

function signedArea(data, start, end, dim) {
    var sum = 0;
    for (var i = start, j = end - dim; i < end; i += dim) {
        sum += (data[j] - data[i]) * (data[i + 1] + data[j + 1]);
        j = i;
    }
    return sum;
}

// turn a polygon in a multi-dimensional array form (e.g. as in GeoJSON) into a form Earcut accepts
earcut.flatten = function (data) {
    var dim = data[0][0].length,
        result = {vertices: [], holes: [], dimensions: dim},
        holeIndex = 0;

    for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data[i].length; j++) {
            for (var d = 0; d < dim; d++) result.vertices.push(data[i][j][d]);
        }
        if (i > 0) {
            holeIndex += data[i - 1].length;
            result.holes.push(holeIndex);
        }
    }
    return result;
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.autoDetectRenderer = autoDetectRenderer;

var _utils = __webpack_require__(13);

var utils = _interopRequireWildcard(_utils);

var _CanvasRenderer = __webpack_require__(22);

var _CanvasRenderer2 = _interopRequireDefault(_CanvasRenderer);

var _WebGLRenderer = __webpack_require__(34);

var _WebGLRenderer2 = _interopRequireDefault(_WebGLRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// eslint-disable-next-line valid-jsdoc
/**
 * This helper function will automatically detect which renderer you should be using.
 * WebGL is the preferred renderer as it is a lot faster. If webGL is not supported by
 * the browser then this function will return a canvas renderer
 *
 * @memberof PIXI
 * @function autoDetectRenderer
 * @param {object} [options] - The optional renderer parameters
 * @param {number} [options.width=800] - the width of the renderers view
 * @param {number} [options.height=600] - the height of the renderers view
 * @param {HTMLCanvasElement} [options.view] - the canvas to use as a view, optional
 * @param {boolean} [options.transparent=false] - If the render view is transparent, default false
 * @param {boolean} [options.antialias=false] - sets antialias (only applicable in chrome at the moment)
 * @param {boolean} [options.preserveDrawingBuffer=false] - enables drawing buffer preservation, enable this if you
 *  need to call toDataUrl on the webgl context
 * @param {number} [options.backgroundColor=0x000000] - The background color of the rendered area
 *  (shown if not transparent).
 * @param {boolean} [options.clearBeforeRender=true] - This sets if the renderer will clear the canvas or
 *   not before the new render pass.
 * @param {number} [options.resolution=1] - The resolution / device pixel ratio of the renderer, retina would be 2
 * @param {boolean} [options.forceCanvas=false] - prevents selection of WebGL renderer, even if such is present
 * @param {boolean} [options.roundPixels=false] - If true PixiJS will Math.floor() x/y values when rendering,
 *  stopping pixel interpolation.
 * @param {boolean} [options.forceFXAA=false] - forces FXAA antialiasing to be used over native.
 *  FXAA is faster, but may not always look as great **webgl only**
 * @param {boolean} [options.legacy=false] - `true` to ensure compatibility with older / less advanced devices.
 *  If you experience unexplained flickering try setting this to true. **webgl only**
 * @return {PIXI.WebGLRenderer|PIXI.CanvasRenderer} Returns WebGL renderer if available, otherwise CanvasRenderer
 */
function autoDetectRenderer(options, arg1, arg2, arg3) {
    // Backward-compatible support for noWebGL option
    var forceCanvas = options && options.forceCanvas;

    if (arg3 !== undefined) {
        forceCanvas = arg3;
    }

    if (!forceCanvas && utils.isWebGLSupported()) {
        return new _WebGLRenderer2.default(options, arg1, arg2);
    }

    return new _CanvasRenderer2.default(options, arg1, arg2);
}
//# sourceMappingURL=autoDetectRenderer.js.map

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = makeParticles;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var PIXI = __webpack_require__(17);

function makeParticle(props) {
    var particle = new PIXI.Graphics();

    particle.beginFill(props.color);

    if (props.lineStyle) particle.lineStyle.apply(particle, _toConsumableArray(props.lineStyle));

    particle.drawCircle(0, 0, props.r);

    particle.x = props.x;
    particle.y = props.y;

    particle.endFill();

    return particle;
}

function randomShiftInCircle(r) {
    //they are in square inside circle of given radius
    return Math.random() * r * (Math.sqrt(2) - 0.1) + r * 0.35;
}

function makeParticles(props) {
    var particles = new PIXI.Container(props.circleR * 2, props.circleR * 2);
    particles.x = props.width / 2;
    particles.y = props.neckLength;

    var particle = undefined;

    for (var i = 0; i < props.numberOfParticles; i++) {
        particle = makeParticle({
            x: randomShiftInCircle(props.circleR),
            y: randomShiftInCircle(props.circleR),
            r: props.particleR,
            color: props.particleColor
        });

        particle.shift = {};

        particles.addChild(particle);
    }

    return particles;
}

//For debug only
function addParticleZone(particles, props) {
    var particleZone = new PIXI.Graphics();
    particleZone.beginFill(0xff0000, 0.5);
    particleZone.drawRect(props.circleR * 0.35, props.circleR * 0.35, props.circleR * (Math.sqrt(2) - 0.1), props.circleR * (Math.sqrt(2) - 0.1));

    particles.addChild(particleZone);
}

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getDistance;
var distanceX = void 0,
    distanceY = void 0;

function getDistance(objA, objB) {
    distanceX = objA.x - objB.x;
    distanceY = objA.y - objB.y;
    return Math.sqrt(distanceX * distanceX + distanceY * distanceY);
}

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.redrawBezier = redrawBezier;
exports.makeBeziers = makeBeziers;
var PIXI = __webpack_require__(17);

function redrawBezier(curve, props) {
    curve.clear();

    curve.beginFill(props.fill || curve.fill);
    curve.moveTo(curve.start.x, curve.start.y);

    curve.bezierCurveTo(props.cp1X, props.cp1Y, props.cp2X, props.cp2Y, curve.end.x, curve.end.y);

    //object assign seems to be dangerous to use
    curve.cp1X = props.cp1X;
    curve.cp1Y = props.cp1Y;

    curve.cp2X = props.cp2X;
    curve.cp2Y = props.cp2Y;

    curve.endFill();
}

function makeBeziers(quantity, props) {
    var beziers = new PIXI.Container();
    var curve = void 0;

    for (var i = 0; i < quantity; i++) {
        curve = new PIXI.Graphics();
        curve.rotation = Math.PI * 2 / quantity * i;
        curve.morphStep = {
            cp1X: 0,
            cp1Y: 0,

            cp2X: 0,
            cp2Y: 0
        };

        curve.start = {
            x: -props.heroInnerRSmall,
            y: 0
        };

        curve.end = {
            x: 0,
            y: 0
        };

        curve.fill = props.heroColor;

        redrawBezier(curve, {
            cp1X: 0,
            cp1Y: 0,

            cp2X: 0,
            cp2Y: 0
        });
        beziers.addChild(curve);
    }

    return beziers;
}

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = __webpack_require__(0);

var _arrowLeft = __webpack_require__(65);

var _arrowLeft2 = _interopRequireDefault(_arrowLeft);

var _link = __webpack_require__(66);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Link = function (_Component) {
    _inherits(Link, _Component);

    function Link(props) {
        _classCallCheck(this, Link);

        return _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).call(this, props));
    }

    _createClass(Link, [{
        key: 'render',
        value: function render() {
            return (0, _preact.h)(
                'a',
                { href: this.props.url, 'class': _link2.default.link },
                (0, _preact.h)(
                    'div',
                    { 'class': _link2.default.text },
                    ' ',
                    this.props.children,
                    ' '
                ),
                (0, _preact.h)(_arrowLeft2.default, { 'class': _link2.default.icon })
            );
        }
    }]);

    return Link;
}(_preact.Component);

exports.default = Link;

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);




/* harmony default export */ __webpack_exports__["default"] = (function (props) {
    var styles = props.styles;
    var rest = Object.assign({}, props);
    delete rest.styles;

    return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('svg', Object.assign({"viewBox":"0 0 24 24"}, rest), ["\r\n    ", Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('path', {"d":"M0 0h24v24H0z","fill":"none"}, []), "\r\n    ", Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('path', {"d":"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}, []), "\r\n"]);
});;

        

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(67);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(2)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/postcss-loader/lib/index.js??ref--2-2!../../../node_modules/sass-loader/lib/loader.js??ref--2-3!../../../node_modules/universal-alias-loader/index.js??ref--0!./link.sass", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/postcss-loader/lib/index.js??ref--2-2!../../../node_modules/sass-loader/lib/loader.js??ref--2-3!../../../node_modules/universal-alias-loader/index.js??ref--0!./link.sass");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "/* colors */\n/* Spacing */\n/* Fonts */\n/* Effects */\n._3_aq8 {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 0 0 0 0.05em;\n  border-bottom: 0.07em solid;\n  border-color: inherit;\n  text-decoration: none;\n  color: #1e1e1e;\n  -webkit-transition: 0.15s ease;\n  transition: 0.15s ease; }\n  ._3_aq8:visited {\n    color: black; }\n  ._3_aq8:active {\n    color: #4f6b80; }\n    ._3_aq8:active ._1yXo_ {\n      fill: #4f6b80; }\n  ._3_aq8:hover ._1yXo_ {\n    -webkit-transform: translateX(0.15em);\n            transform: translateX(0.15em); }\n\n._1yXo_ {\n  display: block;\n  width: 0.8em;\n  margin: 0.2em 0.05em 0 0.15em;\n  -webkit-transition: 0.15s ease;\n  transition: 0.15s ease;\n  will-change: transform; }\n", ""]);

// exports
exports.locals = {
	"link": "_3_aq8",
	"icon": "_1yXo_"
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = align;
function align(element, target) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
        by: element,
        to: 'top',
        apply: true
    };


    var byRect = options.by.getBoundingClientRect();
    var targetRect = target.getBoundingClientRect();
    var innerDiff = 0;
    var result = 0;

    if (element !== options.by) {
        innerDiff = element.getBoundingClientRect().top - byRect.top;
    }

    result = targetRect.top - byRect.top;

    switch (options.to) {
        case 'center':
            result += (targetRect.height - byRect.height) / 2;
            break;
        case 'bottom':
            result += targetRect.height - byRect.height;
            break;
    }

    result += innerDiff;

    if (options.apply) {
        element.style.transform = 'translateY(' + Math.round(result) + 'px)';
    }

    return result;
}

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = __webpack_require__(0);

var _stage = __webpack_require__(70);

var _stage2 = _interopRequireDefault(_stage);

var _story = __webpack_require__(137);

var _story2 = _interopRequireDefault(_story);

var _ = __webpack_require__(139);

var _2 = _interopRequireDefault(_);

var _3 = __webpack_require__(140);

var _4 = _interopRequireDefault(_3);

var _5 = __webpack_require__(141);

var _6 = _interopRequireDefault(_5);

var _7 = __webpack_require__(142);

var _8 = _interopRequireDefault(_7);

var _9 = __webpack_require__(143);

var _10 = _interopRequireDefault(_9);

var _11 = __webpack_require__(146);

var _12 = _interopRequireDefault(_11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PIXI = __webpack_require__(17);

var antialias = 2;

var heroSpeed = 1.2 * antialias;
var circleR = 47 * antialias;

var context = {
    props: {
        //initial setuop
        width: 300 * antialias,
        height: 300 * antialias,

        neckLength: 207 * antialias,

        padding: 30 * antialias,

        circleR: circleR,

        arrowSize: 7 * antialias,

        lineStyle: [2 * antialias, 0x1e1e1e],

        heroSpeed: heroSpeed,
        //act 0+
        act0Duration: 3500,
        numberOfParticles: 20,
        particleR: 2 * antialias,
        particleColor: 0x1e1e1e,

        //act 1+
        heroColor: 0xb96ac9,
        heroAscensionSpeed: 2,
        heroInitialAlpha: 0.5,
        heroInnerRSmall: 4 * antialias,
        heroInnerR: 8 * antialias,
        heroOuterR: 20 * antialias,
        heroLineStyle: [2 * antialias, 0xb96ac9],
        heroScaleOuterSteps: 12,
        spreadFactor: 100,

        //act 2+
        lapSteps: 2 * circleR * Math.PI / heroSpeed,
        lapsQuantity: 2,
        heroBeziers: 10,
        bezierMorphSteps: 120,

        //act 3
        bezierResetDelaySteps: 10,

        //act 4
        heroOuterRSpreadMax: 0.1,
        heroOuterRSpreadSteps: 12,

        //act5
        act5TravelSteps: 30
    },
    stage: {},
    changeText: function changeText() {},
    next: function next() {}
};

var pause = function pause() {
    return function () {
        return context.stage;
    };
};
var acts = [_2.default, _4.default, _6.default, _8.default, _10.default, _12.default, pause];

var Story = function (_Component) {
    _inherits(Story, _Component);

    function Story(props) {
        _classCallCheck(this, Story);

        var _this = _possibleConstructorReturn(this, (Story.__proto__ || Object.getPrototypeOf(Story)).call(this, props));

        _this.animate = _this.animate.bind(_this);
        _this.next = _this.next.bind(_this);
        _this.end = _this.end.bind(_this);

        //first act will be +1 from this value
        _this.currentAct = -1;
        return _this;
    }

    _createClass(Story, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.renderer = PIXI.autoDetectRenderer(context.props.width + context.props.padding * 2, context.props.height + context.props.padding * 2, {
                transparent: true,
                antialias: true
            });
            this.pixiHost.appendChild(this.renderer.view);
            context.stage = (0, _stage2.default)(context.props);

            //settign initial context
            context.next = this.next;
            context.changeText = this.changeText.bind(this);

            this.next();

            this.animate();
        }
    }, {
        key: 'changeText',
        value: function changeText(text, duration) {
            var self = this;
            duration = duration || 150;
            self.textHost.style.opacity = 0;
            self.textHost.style.transitionDuration = duration + 'ms';
            setTimeout(function () {
                self.textHost.innerHTML = text;
                self.textHost.style.opacity = 1;
            }, duration);
        }
    }, {
        key: 'next',
        value: function next() {
            this.currentAct++;
            if (acts.length <= this.currentAct) {
                this.end();
            } else {
                this.currentActRender = acts[this.currentAct](context);
            }
        }
    }, {
        key: 'animate',
        value: function animate() {
            this.renderer.render(this.currentActRender());
            this.frame = requestAnimationFrame(this.animate);
        }
    }, {
        key: 'end',
        value: function end() {
            // this.props.end()
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return (0, _preact.h)(
                'div',
                { 'class': _story2.default.PixiContainer },
                (0, _preact.h)(
                    'div',
                    { 'class': _story2.default.PixiHostWrapper },
                    (0, _preact.h)('div', { ref: function ref(host) {
                            _this2.pixiHost = host;
                        },
                        'class': _story2.default.PixiHost })
                ),
                (0, _preact.h)('div', { ref: function ref(arrowEnd) {
                        _this2.arrowEnd = arrowEnd;
                    },
                    'class': _story2.default.arrowEnd,
                    id: 'story-arrow-end' }),
                (0, _preact.h)(
                    'div',
                    { ref: function ref(host) {
                            _this2.textHost = host;
                        },
                        'class': _story2.default.PixiContainerText,
                        id: 'story-text' },
                    'Starting...'
                )
            );
        }
    }]);

    return Story;
}(_preact.Component);

exports.default = Story;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = makeStage;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var PIXI = __webpack_require__(17);

function makeCircle(props) {
    var circle = new PIXI.Graphics();

    if (props.fill) circle.beginFill(props.fill);
    if (props.lineStyle) circle.lineStyle.apply(circle, _toConsumableArray(props.lineStyle));

    if (typeof props.arcStart === 'number') {
        circle.arc(props.x, props.y, props.r, props.arcStart, props.arcEnd, props.arcAnticlockwise);
    } else {
        circle.drawCircle(props.x, props.y, props.r);
    }

    circle.endFill();

    return circle;
}

function makeLine(props) {
    var line = new PIXI.Graphics();

    line.lineStyle.apply(line, _toConsumableArray(props.lineStyle));

    line.moveTo(0, 0);
    line.lineTo(props.width || 0, props.height || 0);

    line.x = props.x;
    line.y = props.y;

    return line;
}

function makeStage(props) {
    var stage = new PIXI.Container();

    stage.x = props.padding;
    stage.y = props.padding;

    var upperCircle = makeCircle({
        x: props.width / 2 - props.circleR,
        y: props.circleR,
        lineStyle: props.lineStyle,
        r: props.circleR,
        arcStart: 0,
        arcEnd: 0.5 * Math.PI,
        arcAnticlockwise: true
    });

    var lowerCircle = makeCircle({
        x: props.width / 2 + props.circleR,
        y: props.neckLength + props.circleR,
        lineStyle: props.lineStyle,
        r: props.circleR
    });

    var neck = makeLine({
        y: props.circleR,
        x: props.width / 2,

        lineStyle: props.lineStyle,

        height: props.neckLength
    });

    var arrowWay = makeLine({
        y: props.circleR * 2,
        x: props.width / 2 - props.circleR,

        lineStyle: props.lineStyle,

        width: props.circleR * 2
    });

    var arrowTop = makeLine({
        y: props.circleR * 2 - props.arrowSize,
        x: props.width / 2 + props.circleR - props.arrowSize,

        lineStyle: props.lineStyle,

        width: props.arrowSize,
        height: props.arrowSize
    });

    var arrowBottom = makeLine({
        y: props.circleR * 2 + props.arrowSize,
        x: props.width / 2 + props.circleR - props.arrowSize,

        lineStyle: props.lineStyle,

        width: props.arrowSize,
        height: -props.arrowSize
    });

    stage.addChild(upperCircle);
    stage.addChild(lowerCircle);
    stage.addChild(neck);
    stage.addChild(arrowWay);
    stage.addChild(arrowTop);
    stage.addChild(arrowBottom);

    return stage;
}

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(72);

__webpack_require__(74);

__webpack_require__(75);

if (!window.ArrayBuffer) {
    window.ArrayBuffer = Array;
}

if (!window.Float32Array) {
    window.Float32Array = Array;
}

if (!window.Uint32Array) {
    window.Uint32Array = Array;
}

if (!window.Uint16Array) {
    window.Uint16Array = Array;
}
//# sourceMappingURL=index.js.map

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _objectAssign = __webpack_require__(73);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (!Object.assign) {
    Object.assign = _objectAssign2.default;
} // References:
// https://github.com/sindresorhus/object-assign
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
//# sourceMappingURL=Object.assign.js.map

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

// References:
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// https://gist.github.com/1579671
// http://updates.html5rocks.com/2012/05/requestAnimationFrame-API-now-with-sub-millisecond-precision
// https://gist.github.com/timhall/4078614
// https://github.com/Financial-Times/polyfill-service/tree/master/polyfills/requestAnimationFrame

// Expected to be used with Browserfiy
// Browserify automatically detects the use of `global` and passes the
// correct reference of `global`, `self`, and finally `window`

var ONE_FRAME_TIME = 16;

// Date.now
if (!(Date.now && Date.prototype.getTime)) {
    Date.now = function now() {
        return new Date().getTime();
    };
}

// performance.now
if (!(global.performance && global.performance.now)) {
    var startTime = Date.now();

    if (!global.performance) {
        global.performance = {};
    }

    global.performance.now = function () {
        return Date.now() - startTime;
    };
}

// requestAnimationFrame
var lastTime = Date.now();
var vendors = ['ms', 'moz', 'webkit', 'o'];

for (var x = 0; x < vendors.length && !global.requestAnimationFrame; ++x) {
    var p = vendors[x];

    global.requestAnimationFrame = global[p + 'RequestAnimationFrame'];
    global.cancelAnimationFrame = global[p + 'CancelAnimationFrame'] || global[p + 'CancelRequestAnimationFrame'];
}

if (!global.requestAnimationFrame) {
    global.requestAnimationFrame = function (callback) {
        if (typeof callback !== 'function') {
            throw new TypeError(callback + 'is not a function');
        }

        var currentTime = Date.now();
        var delay = ONE_FRAME_TIME + lastTime - currentTime;

        if (delay < 0) {
            delay = 0;
        }

        lastTime = currentTime;

        return setTimeout(function () {
            lastTime = Date.now();
            callback(performance.now());
        }, delay);
    };
}

if (!global.cancelAnimationFrame) {
    global.cancelAnimationFrame = function (id) {
        return clearTimeout(id);
    };
}
//# sourceMappingURL=requestAnimationFrame.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(35)))

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// References:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign

if (!Math.sign) {
    Math.sign = function mathSign(x) {
        x = Number(x);

        if (x === 0 || isNaN(x)) {
            return x;
        }

        return x > 0 ? 1 : -1;
    };
}
//# sourceMappingURL=Math.sign.js.map

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.autoDetectRenderer = exports.Application = exports.Filter = exports.SpriteMaskFilter = exports.Quad = exports.RenderTarget = exports.ObjectRenderer = exports.WebGLManager = exports.Shader = exports.CanvasRenderTarget = exports.TextureUvs = exports.VideoBaseTexture = exports.BaseRenderTexture = exports.RenderTexture = exports.BaseTexture = exports.Texture = exports.Spritesheet = exports.CanvasGraphicsRenderer = exports.GraphicsRenderer = exports.GraphicsData = exports.Graphics = exports.TextMetrics = exports.TextStyle = exports.Text = exports.SpriteRenderer = exports.CanvasTinter = exports.CanvasSpriteRenderer = exports.Sprite = exports.TransformBase = exports.TransformStatic = exports.Transform = exports.Container = exports.DisplayObject = exports.Bounds = exports.glCore = exports.WebGLRenderer = exports.CanvasRenderer = exports.ticker = exports.utils = exports.settings = undefined;

var _const = __webpack_require__(12);

Object.keys(_const).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _const[key];
    }
  });
});

var _math = __webpack_require__(14);

Object.keys(_math).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _math[key];
    }
  });
});

var _pixiGlCore = __webpack_require__(16);

Object.defineProperty(exports, 'glCore', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_pixiGlCore).default;
  }
});

var _Bounds = __webpack_require__(29);

Object.defineProperty(exports, 'Bounds', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Bounds).default;
  }
});

var _DisplayObject = __webpack_require__(47);

Object.defineProperty(exports, 'DisplayObject', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_DisplayObject).default;
  }
});

var _Container = __webpack_require__(19);

Object.defineProperty(exports, 'Container', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Container).default;
  }
});

var _Transform = __webpack_require__(50);

Object.defineProperty(exports, 'Transform', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Transform).default;
  }
});

var _TransformStatic = __webpack_require__(49);

Object.defineProperty(exports, 'TransformStatic', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TransformStatic).default;
  }
});

var _TransformBase = __webpack_require__(30);

Object.defineProperty(exports, 'TransformBase', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TransformBase).default;
  }
});
/*
var _Sprite = require('./sprites/Sprite');

Object.defineProperty(exports, 'Sprite', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Sprite).default;
  }
});

var _CanvasSpriteRenderer = require('./sprites/canvas/CanvasSpriteRenderer');

Object.defineProperty(exports, 'CanvasSpriteRenderer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_CanvasSpriteRenderer).default;
  }
});

var _CanvasTinter = require('./sprites/canvas/CanvasTinter');

Object.defineProperty(exports, 'CanvasTinter', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_CanvasTinter).default;
  }
});

var _SpriteRenderer = require('./sprites/webgl/SpriteRenderer');

Object.defineProperty(exports, 'SpriteRenderer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SpriteRenderer).default;
  }
});

var _Text = require('./text/Text');

Object.defineProperty(exports, 'Text', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Text).default;
  }
});

var _TextStyle = require('./text/TextStyle');

Object.defineProperty(exports, 'TextStyle', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TextStyle).default;
  }
});

var _TextMetrics = require('./text/TextMetrics');

Object.defineProperty(exports, 'TextMetrics', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TextMetrics).default;
  }
});
*/
var _Graphics = __webpack_require__(94);

Object.defineProperty(exports, 'Graphics', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Graphics).default;
  }
});

var _GraphicsData = __webpack_require__(53);

Object.defineProperty(exports, 'GraphicsData', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_GraphicsData).default;
  }
});

var _GraphicsRenderer = __webpack_require__(114);

Object.defineProperty(exports, 'GraphicsRenderer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_GraphicsRenderer).default;
  }
});

var _CanvasGraphicsRenderer = __webpack_require__(135);

Object.defineProperty(exports, 'CanvasGraphicsRenderer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_CanvasGraphicsRenderer).default;
  }
});
/*
var _Spritesheet = require('./textures/Spritesheet');

Object.defineProperty(exports, 'Spritesheet', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Spritesheet).default;
  }
});

var _Texture = require('./textures/Texture');

Object.defineProperty(exports, 'Texture', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Texture).default;
  }
});

var _BaseTexture = require('./textures/BaseTexture');

Object.defineProperty(exports, 'BaseTexture', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_BaseTexture).default;
  }
});

var _RenderTexture = require('./textures/RenderTexture');

Object.defineProperty(exports, 'RenderTexture', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_RenderTexture).default;
  }
});

var _BaseRenderTexture = require('./textures/BaseRenderTexture');

Object.defineProperty(exports, 'BaseRenderTexture', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_BaseRenderTexture).default;
  }
});

var _VideoBaseTexture = require('./textures/VideoBaseTexture');

Object.defineProperty(exports, 'VideoBaseTexture', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_VideoBaseTexture).default;
  }
});

var _TextureUvs = require('./textures/TextureUvs');

Object.defineProperty(exports, 'TextureUvs', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TextureUvs).default;
  }
});

var _CanvasRenderTarget = require('./renderers/canvas/utils/CanvasRenderTarget');

Object.defineProperty(exports, 'CanvasRenderTarget', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_CanvasRenderTarget).default;
  }
});

var _Shader = require('./Shader');

Object.defineProperty(exports, 'Shader', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Shader).default;
  }
});
*/
var _WebGLManager = __webpack_require__(20);

Object.defineProperty(exports, 'WebGLManager', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_WebGLManager).default;
  }
});

var _ObjectRenderer = __webpack_require__(33);

Object.defineProperty(exports, 'ObjectRenderer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ObjectRenderer).default;
  }
});

var _RenderTarget = __webpack_require__(23);

Object.defineProperty(exports, 'RenderTarget', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_RenderTarget).default;
  }
});

var _Quad = __webpack_require__(57);

Object.defineProperty(exports, 'Quad', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Quad).default;
  }
});

var _SpriteMaskFilter = __webpack_require__(55);

Object.defineProperty(exports, 'SpriteMaskFilter', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SpriteMaskFilter).default;
  }
});

var _Filter = __webpack_require__(56);

Object.defineProperty(exports, 'Filter', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Filter).default;
  }
});

var _Application = __webpack_require__(136);

Object.defineProperty(exports, 'Application', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Application).default;
  }
});

var _autoDetectRenderer = __webpack_require__(60);

Object.defineProperty(exports, 'autoDetectRenderer', {
  enumerable: true,
  get: function get() {
    return _autoDetectRenderer.autoDetectRenderer;
  }
});

var _utils = __webpack_require__(13);

var utils = _interopRequireWildcard(_utils);

var _ticker = __webpack_require__(32);

var ticker = _interopRequireWildcard(_ticker);

var _settings = __webpack_require__(15);

var _settings2 = _interopRequireDefault(_settings);

var _CanvasRenderer = __webpack_require__(22);

var _CanvasRenderer2 = _interopRequireDefault(_CanvasRenderer);

var _WebGLRenderer = __webpack_require__(34);

var _WebGLRenderer2 = _interopRequireDefault(_WebGLRenderer);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.settings = _settings2.default;
exports.utils = utils;
exports.ticker = ticker;
exports.CanvasRenderer = _CanvasRenderer2.default;
exports.WebGLRenderer = _WebGLRenderer2.default; /**
                                                  * @namespace PIXI
                                                  */
//# sourceMappingURL=index.js.map


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The Point object represents a location in a two-dimensional coordinate system, where x represents
 * the horizontal axis and y represents the vertical axis.
 * An observable point is a point that triggers a callback when the point's position is changed.
 *
 * @class
 * @memberof PIXI
 */
var ObservablePoint = function () {
    /**
     * @param {Function} cb - callback when changed
     * @param {object} scope - owner of callback
     * @param {number} [x=0] - position of the point on the x axis
     * @param {number} [y=0] - position of the point on the y axis
     */
    function ObservablePoint(cb, scope) {
        var x = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var y = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

        _classCallCheck(this, ObservablePoint);

        this._x = x;
        this._y = y;

        this.cb = cb;
        this.scope = scope;
    }

    /**
     * Sets the point to a new x and y position.
     * If y is omitted, both x and y will be set to x.
     *
     * @param {number} [x=0] - position of the point on the x axis
     * @param {number} [y=0] - position of the point on the y axis
     */


    ObservablePoint.prototype.set = function set(x, y) {
        var _x = x || 0;
        var _y = y || (y !== 0 ? _x : 0);

        if (this._x !== _x || this._y !== _y) {
            this._x = _x;
            this._y = _y;
            this.cb.call(this.scope);
        }
    };

    /**
     * Copies the data from another point
     *
     * @param {PIXI.Point|PIXI.ObservablePoint} point - point to copy from
     */


    ObservablePoint.prototype.copy = function copy(point) {
        if (this._x !== point.x || this._y !== point.y) {
            this._x = point.x;
            this._y = point.y;
            this.cb.call(this.scope);
        }
    };

    /**
     * The position of the displayObject on the x axis relative to the local coordinates of the parent.
     *
     * @member {number}
     */


    _createClass(ObservablePoint, [{
        key: "x",
        get: function get() {
            return this._x;
        },
        set: function set(value) // eslint-disable-line require-jsdoc
        {
            if (this._x !== value) {
                this._x = value;
                this.cb.call(this.scope);
            }
        }

        /**
         * The position of the displayObject on the x axis relative to the local coordinates of the parent.
         *
         * @member {number}
         */

    }, {
        key: "y",
        get: function get() {
            return this._y;
        },
        set: function set(value) // eslint-disable-line require-jsdoc
        {
            if (this._y !== value) {
                this._y = value;
                this.cb.call(this.scope);
            }
        }
    }]);

    return ObservablePoint;
}();

exports.default = ObservablePoint;
//# sourceMappingURL=ObservablePoint.js.map

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Rectangle = __webpack_require__(27);

var _Rectangle2 = _interopRequireDefault(_Rectangle);

var _const = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The Circle object can be used to specify a hit area for displayObjects
 *
 * @class
 * @memberof PIXI
 */
var Circle = function () {
  /**
   * @param {number} [x=0] - The X coordinate of the center of this circle
   * @param {number} [y=0] - The Y coordinate of the center of this circle
   * @param {number} [radius=0] - The radius of the circle
   */
  function Circle() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var radius = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    _classCallCheck(this, Circle);

    /**
     * @member {number}
     * @default 0
     */
    this.x = x;

    /**
     * @member {number}
     * @default 0
     */
    this.y = y;

    /**
     * @member {number}
     * @default 0
     */
    this.radius = radius;

    /**
     * The type of the object, mainly used to avoid `instanceof` checks
     *
     * @member {number}
     * @readOnly
     * @default PIXI.SHAPES.CIRC
     * @see PIXI.SHAPES
     */
    this.type = _const.SHAPES.CIRC;
  }

  /**
   * Creates a clone of this Circle instance
   *
   * @return {PIXI.Circle} a copy of the Circle
   */


  Circle.prototype.clone = function clone() {
    return new Circle(this.x, this.y, this.radius);
  };

  /**
   * Checks whether the x and y coordinates given are contained within this circle
   *
   * @param {number} x - The X coordinate of the point to test
   * @param {number} y - The Y coordinate of the point to test
   * @return {boolean} Whether the x/y coordinates are within this Circle
   */


  Circle.prototype.contains = function contains(x, y) {
    if (this.radius <= 0) {
      return false;
    }

    var r2 = this.radius * this.radius;
    var dx = this.x - x;
    var dy = this.y - y;

    dx *= dx;
    dy *= dy;

    return dx + dy <= r2;
  };

  /**
  * Returns the framing rectangle of the circle as a Rectangle object
  *
  * @return {PIXI.Rectangle} the framing rectangle
  */


  Circle.prototype.getBounds = function getBounds() {
    return new _Rectangle2.default(this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
  };

  return Circle;
}();

exports.default = Circle;
//# sourceMappingURL=Circle.js.map

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Rectangle = __webpack_require__(27);

var _Rectangle2 = _interopRequireDefault(_Rectangle);

var _const = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The Ellipse object can be used to specify a hit area for displayObjects
 *
 * @class
 * @memberof PIXI
 */
var Ellipse = function () {
  /**
   * @param {number} [x=0] - The X coordinate of the center of this circle
   * @param {number} [y=0] - The Y coordinate of the center of this circle
   * @param {number} [width=0] - The half width of this ellipse
   * @param {number} [height=0] - The half height of this ellipse
   */
  function Ellipse() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    _classCallCheck(this, Ellipse);

    /**
     * @member {number}
     * @default 0
     */
    this.x = x;

    /**
     * @member {number}
     * @default 0
     */
    this.y = y;

    /**
     * @member {number}
     * @default 0
     */
    this.width = width;

    /**
     * @member {number}
     * @default 0
     */
    this.height = height;

    /**
     * The type of the object, mainly used to avoid `instanceof` checks
     *
     * @member {number}
     * @readOnly
     * @default PIXI.SHAPES.ELIP
     * @see PIXI.SHAPES
     */
    this.type = _const.SHAPES.ELIP;
  }

  /**
   * Creates a clone of this Ellipse instance
   *
   * @return {PIXI.Ellipse} a copy of the ellipse
   */


  Ellipse.prototype.clone = function clone() {
    return new Ellipse(this.x, this.y, this.width, this.height);
  };

  /**
   * Checks whether the x and y coordinates given are contained within this ellipse
   *
   * @param {number} x - The X coordinate of the point to test
   * @param {number} y - The Y coordinate of the point to test
   * @return {boolean} Whether the x/y coords are within this ellipse
   */


  Ellipse.prototype.contains = function contains(x, y) {
    if (this.width <= 0 || this.height <= 0) {
      return false;
    }

    // normalize the coords to an ellipse with center 0,0
    var normx = (x - this.x) / this.width;
    var normy = (y - this.y) / this.height;

    normx *= normx;
    normy *= normy;

    return normx + normy <= 1;
  };

  /**
   * Returns the framing rectangle of the ellipse as a Rectangle object
   *
   * @return {PIXI.Rectangle} the framing rectangle
   */


  Ellipse.prototype.getBounds = function getBounds() {
    return new _Rectangle2.default(this.x - this.width, this.y - this.height, this.width, this.height);
  };

  return Ellipse;
}();

exports.default = Ellipse;
//# sourceMappingURL=Ellipse.js.map

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Point = __webpack_require__(26);

var _Point2 = _interopRequireDefault(_Point);

var _const = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class
 * @memberof PIXI
 */
var Polygon = function () {
    /**
     * @param {PIXI.Point[]|number[]} points - This can be an array of Points
     *  that form the polygon, a flat array of numbers that will be interpreted as [x,y, x,y, ...], or
     *  the arguments passed can be all the points of the polygon e.g.
     *  `new PIXI.Polygon(new PIXI.Point(), new PIXI.Point(), ...)`, or the arguments passed can be flat
     *  x,y values e.g. `new Polygon(x,y, x,y, x,y, ...)` where `x` and `y` are Numbers.
     */
    function Polygon() {
        for (var _len = arguments.length, points = Array(_len), _key = 0; _key < _len; _key++) {
            points[_key] = arguments[_key];
        }

        _classCallCheck(this, Polygon);

        if (Array.isArray(points[0])) {
            points = points[0];
        }

        // if this is an array of points, convert it to a flat array of numbers
        if (points[0] instanceof _Point2.default) {
            var p = [];

            for (var i = 0, il = points.length; i < il; i++) {
                p.push(points[i].x, points[i].y);
            }

            points = p;
        }

        this.closed = true;

        /**
         * An array of the points of this polygon
         *
         * @member {number[]}
         */
        this.points = points;

        /**
         * The type of the object, mainly used to avoid `instanceof` checks
         *
         * @member {number}
         * @readOnly
         * @default PIXI.SHAPES.POLY
         * @see PIXI.SHAPES
         */
        this.type = _const.SHAPES.POLY;
    }

    /**
     * Creates a clone of this polygon
     *
     * @return {PIXI.Polygon} a copy of the polygon
     */


    Polygon.prototype.clone = function clone() {
        return new Polygon(this.points.slice());
    };

    /**
     * Closes the polygon, adding points if necessary.
     *
     */


    Polygon.prototype.close = function close() {
        var points = this.points;

        // close the poly if the value is true!
        if (points[0] !== points[points.length - 2] || points[1] !== points[points.length - 1]) {
            points.push(points[0], points[1]);
        }
    };

    /**
     * Checks whether the x and y coordinates passed to this function are contained within this polygon
     *
     * @param {number} x - The X coordinate of the point to test
     * @param {number} y - The Y coordinate of the point to test
     * @return {boolean} Whether the x/y coordinates are within this polygon
     */


    Polygon.prototype.contains = function contains(x, y) {
        var inside = false;

        // use some raycasting to test hits
        // https://github.com/substack/point-in-polygon/blob/master/index.js
        var length = this.points.length / 2;

        for (var i = 0, j = length - 1; i < length; j = i++) {
            var xi = this.points[i * 2];
            var yi = this.points[i * 2 + 1];
            var xj = this.points[j * 2];
            var yj = this.points[j * 2 + 1];
            var intersect = yi > y !== yj > y && x < (xj - xi) * ((y - yi) / (yj - yi)) + xi;

            if (intersect) {
                inside = !inside;
            }
        }

        return inside;
    };

    return Polygon;
}();

exports.default = Polygon;
//# sourceMappingURL=Polygon.js.map

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _const = __webpack_require__(12);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The Rounded Rectangle object is an area that has nice rounded corners, as indicated by its
 * top-left corner point (x, y) and by its width and its height and its radius.
 *
 * @class
 * @memberof PIXI
 */
var RoundedRectangle = function () {
    /**
     * @param {number} [x=0] - The X coordinate of the upper-left corner of the rounded rectangle
     * @param {number} [y=0] - The Y coordinate of the upper-left corner of the rounded rectangle
     * @param {number} [width=0] - The overall width of this rounded rectangle
     * @param {number} [height=0] - The overall height of this rounded rectangle
     * @param {number} [radius=20] - Controls the radius of the rounded corners
     */
    function RoundedRectangle() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        var radius = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 20;

        _classCallCheck(this, RoundedRectangle);

        /**
         * @member {number}
         * @default 0
         */
        this.x = x;

        /**
         * @member {number}
         * @default 0
         */
        this.y = y;

        /**
         * @member {number}
         * @default 0
         */
        this.width = width;

        /**
         * @member {number}
         * @default 0
         */
        this.height = height;

        /**
         * @member {number}
         * @default 20
         */
        this.radius = radius;

        /**
         * The type of the object, mainly used to avoid `instanceof` checks
         *
         * @member {number}
         * @readonly
         * @default PIXI.SHAPES.RREC
         * @see PIXI.SHAPES
         */
        this.type = _const.SHAPES.RREC;
    }

    /**
     * Creates a clone of this Rounded Rectangle
     *
     * @return {PIXI.RoundedRectangle} a copy of the rounded rectangle
     */


    RoundedRectangle.prototype.clone = function clone() {
        return new RoundedRectangle(this.x, this.y, this.width, this.height, this.radius);
    };

    /**
     * Checks whether the x and y coordinates given are contained within this Rounded Rectangle
     *
     * @param {number} x - The X coordinate of the point to test
     * @param {number} y - The Y coordinate of the point to test
     * @return {boolean} Whether the x/y coordinates are within this Rounded Rectangle
     */


    RoundedRectangle.prototype.contains = function contains(x, y) {
        if (this.width <= 0 || this.height <= 0) {
            return false;
        }
        if (x >= this.x && x <= this.x + this.width) {
            if (y >= this.y && y <= this.y + this.height) {
                if (y >= this.y + this.radius && y <= this.y + this.height - this.radius || x >= this.x + this.radius && x <= this.x + this.width - this.radius) {
                    return true;
                }
                var dx = x - (this.x + this.radius);
                var dy = y - (this.y + this.radius);
                var radius2 = this.radius * this.radius;

                if (dx * dx + dy * dy <= radius2) {
                    return true;
                }
                dx = x - (this.x + this.width - this.radius);
                if (dx * dx + dy * dy <= radius2) {
                    return true;
                }
                dy = y - (this.y + this.height - this.radius);
                if (dx * dx + dy * dy <= radius2) {
                    return true;
                }
                dx = x - (this.x + this.radius);
                if (dx * dx + dy * dy <= radius2) {
                    return true;
                }
            }
        }

        return false;
    };

    return RoundedRectangle;
}();

exports.default = RoundedRectangle;
//# sourceMappingURL=RoundedRectangle.js.map

/***/ }),
/* 82 */
/***/ (function(module, exports) {


/**
 * Helper class to create a webGL Context
 *
 * @class
 * @memberof PIXI.glCore
 * @param canvas {HTMLCanvasElement} the canvas element that we will get the context from
 * @param options {Object} An options object that gets passed in to the canvas element containing the context attributes,
 *                         see https://developer.mozilla.org/en/docs/Web/API/HTMLCanvasElement/getContext for the options available
 * @return {WebGLRenderingContext} the WebGL context
 */
var createContext = function(canvas, options)
{
    var gl = canvas.getContext('webgl', options) || 
         canvas.getContext('experimental-webgl', options);

    if (!gl)
    {
        // fail, not able to get a context
        throw new Error('This browser does not support webGL. Try using the canvas renderer');
    }

    return gl;
};

module.exports = createContext;


/***/ }),
/* 83 */
/***/ (function(module, exports) {

var EMPTY_ARRAY_BUFFER = new ArrayBuffer(0);

/**
 * Helper class to create a webGL buffer
 *
 * @class
 * @memberof PIXI.glCore
 * @param gl {WebGLRenderingContext} The current WebGL rendering context
 * @param type {gl.ARRAY_BUFFER | gl.ELEMENT_ARRAY_BUFFER} @mat
 * @param data {ArrayBuffer| SharedArrayBuffer|ArrayBufferView} an array of data
 * @param drawType {gl.STATIC_DRAW|gl.DYNAMIC_DRAW|gl.STREAM_DRAW}
 */
var Buffer = function(gl, type, data, drawType)
{

	/**
     * The current WebGL rendering context
     *
     * @member {WebGLRenderingContext}
     */
	this.gl = gl;

	/**
     * The WebGL buffer, created upon instantiation
     *
     * @member {WebGLBuffer}
     */
	this.buffer = gl.createBuffer();

	/**
     * The type of the buffer
     *
     * @member {gl.ARRAY_BUFFER|gl.ELEMENT_ARRAY_BUFFER}
     */
	this.type = type || gl.ARRAY_BUFFER;

	/**
     * The draw type of the buffer
     *
     * @member {gl.STATIC_DRAW|gl.DYNAMIC_DRAW|gl.STREAM_DRAW}
     */
	this.drawType = drawType || gl.STATIC_DRAW;

	/**
     * The data in the buffer, as a typed array
     *
     * @member {ArrayBuffer| SharedArrayBuffer|ArrayBufferView}
     */
	this.data = EMPTY_ARRAY_BUFFER;

	if(data)
	{
		this.upload(data);
	}

	this._updateID = 0;
};

/**
 * Uploads the buffer to the GPU
 * @param data {ArrayBuffer| SharedArrayBuffer|ArrayBufferView} an array of data to upload
 * @param offset {Number} if only a subset of the data should be uploaded, this is the amount of data to subtract
 * @param dontBind {Boolean} whether to bind the buffer before uploading it
 */
Buffer.prototype.upload = function(data, offset, dontBind)
{
	// todo - needed?
	if(!dontBind) this.bind();

	var gl = this.gl;

	data = data || this.data;
	offset = offset || 0;

	if(this.data.byteLength >= data.byteLength)
	{
		gl.bufferSubData(this.type, offset, data);
	}
	else
	{
		gl.bufferData(this.type, data, this.drawType);
	}

	this.data = data;
};
/**
 * Binds the buffer
 *
 */
Buffer.prototype.bind = function()
{
	var gl = this.gl;
	gl.bindBuffer(this.type, this.buffer);
};

Buffer.createVertexBuffer = function(gl, data, drawType)
{
	return new Buffer(gl, gl.ARRAY_BUFFER, data, drawType);
};

Buffer.createIndexBuffer = function(gl, data, drawType)
{
	return new Buffer(gl, gl.ELEMENT_ARRAY_BUFFER, data, drawType);
};

Buffer.create = function(gl, type, data, drawType)
{
	return new Buffer(gl, type, data, drawType);
};

/**
 * Destroys the buffer
 *
 */
Buffer.prototype.destroy = function(){
	this.gl.deleteBuffer(this.buffer);
};

module.exports = Buffer;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {


var Texture = __webpack_require__(39);

/**
 * Helper class to create a webGL Framebuffer
 *
 * @class
 * @memberof PIXI.glCore
 * @param gl {WebGLRenderingContext} The current WebGL rendering context
 * @param width {Number} the width of the drawing area of the frame buffer
 * @param height {Number} the height of the drawing area of the frame buffer
 */
var Framebuffer = function(gl, width, height)
{
    /**
     * The current WebGL rendering context
     *
     * @member {WebGLRenderingContext}
     */
    this.gl = gl;

    /**
     * The frame buffer
     *
     * @member {WebGLFramebuffer}
     */
    this.framebuffer = gl.createFramebuffer();

    /**
     * The stencil buffer
     *
     * @member {WebGLRenderbuffer}
     */
    this.stencil = null;

    /**
     * The stencil buffer
     *
     * @member {PIXI.glCore.GLTexture}
     */
    this.texture = null;

    /**
     * The width of the drawing area of the buffer
     *
     * @member {Number}
     */
    this.width = width || 100;
    /**
     * The height of the drawing area of the buffer
     *
     * @member {Number}
     */
    this.height = height || 100;
};

/**
 * Adds a texture to the frame buffer
 * @param texture {PIXI.glCore.GLTexture}
 */
Framebuffer.prototype.enableTexture = function(texture)
{
    var gl = this.gl;

    this.texture = texture || new Texture(gl);

    this.texture.bind();

    //gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA,  this.width, this.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);

    this.bind();

    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.texture.texture, 0);
};

/**
 * Initialises the stencil buffer
 */
Framebuffer.prototype.enableStencil = function()
{
    if(this.stencil)return;

    var gl = this.gl;

    this.stencil = gl.createRenderbuffer();

    gl.bindRenderbuffer(gl.RENDERBUFFER, this.stencil);

    // TODO.. this is depth AND stencil?
    gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_STENCIL_ATTACHMENT, gl.RENDERBUFFER, this.stencil);
    gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_STENCIL,  this.width  , this.height );


};

/**
 * Erases the drawing area and fills it with a colour
 * @param  r {Number} the red value of the clearing colour
 * @param  g {Number} the green value of the clearing colour
 * @param  b {Number} the blue value of the clearing colour
 * @param  a {Number} the alpha value of the clearing colour
 */
Framebuffer.prototype.clear = function( r, g, b, a )
{
    this.bind();

    var gl = this.gl;

    gl.clearColor(r, g, b, a);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
};

/**
 * Binds the frame buffer to the WebGL context
 */
Framebuffer.prototype.bind = function()
{
    var gl = this.gl;
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.framebuffer );
};

/**
 * Unbinds the frame buffer to the WebGL context
 */
Framebuffer.prototype.unbind = function()
{
    var gl = this.gl;
    gl.bindFramebuffer(gl.FRAMEBUFFER, null );
};
/**
 * Resizes the drawing area of the buffer to the given width and height
 * @param  width  {Number} the new width
 * @param  height {Number} the new height
 */
Framebuffer.prototype.resize = function(width, height)
{
    var gl = this.gl;

    this.width = width;
    this.height = height;

    if ( this.texture )
    {
        this.texture.uploadData(null, width, height);
    }

    if ( this.stencil )
    {
        // update the stencil buffer width and height
        gl.bindRenderbuffer(gl.RENDERBUFFER, this.stencil);
        gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_STENCIL, width, height);
    }
};

/**
 * Destroys this buffer
 */
Framebuffer.prototype.destroy = function()
{
    var gl = this.gl;

    //TODO
    if(this.texture)
    {
        this.texture.destroy();
    }

    gl.deleteFramebuffer(this.framebuffer);

    this.gl = null;

    this.stencil = null;
    this.texture = null;
};

/**
 * Creates a frame buffer with a texture containing the given data
 * @static
 * @param gl {WebGLRenderingContext} The current WebGL rendering context
 * @param width {Number} the width of the drawing area of the frame buffer
 * @param height {Number} the height of the drawing area of the frame buffer
 * @param data {ArrayBuffer| SharedArrayBuffer|ArrayBufferView} an array of data
 */
Framebuffer.createRGBA = function(gl, width, height, data)
{
    var texture = Texture.fromData(gl, null, width, height);
    texture.enableNearestScaling();
    texture.enableWrapClamp();

    //now create the framebuffer object and attach the texture to it.
    var fbo = new Framebuffer(gl, width, height);
    fbo.enableTexture(texture);

    //fbo.enableStencil(); // get this back on soon!

    fbo.unbind();

    return fbo;
};

/**
 * Creates a frame buffer with a texture containing the given data
 * @static
 * @param gl {WebGLRenderingContext} The current WebGL rendering context
 * @param width {Number} the width of the drawing area of the frame buffer
 * @param height {Number} the height of the drawing area of the frame buffer
 * @param data {ArrayBuffer| SharedArrayBuffer|ArrayBufferView} an array of data
 */
Framebuffer.createFloat32 = function(gl, width, height, data)
{
    // create a new texture..
    var texture = new Texture.fromData(gl, data, width, height);
    texture.enableNearestScaling();
    texture.enableWrapClamp();

    //now create the framebuffer object and attach the texture to it.
    var fbo = new Framebuffer(gl, width, height);
    fbo.enableTexture(texture);

    fbo.unbind();

    return fbo;
};

module.exports = Framebuffer;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {


var compileProgram = __webpack_require__(40),
	extractAttributes = __webpack_require__(41),
	extractUniforms = __webpack_require__(43),
	setPrecision = __webpack_require__(45),
	generateUniformAccessObject = __webpack_require__(46);

/**
 * Helper class to create a webGL Shader
 *
 * @class
 * @memberof PIXI.glCore
 * @param gl {WebGLRenderingContext}
 * @param vertexSrc {string|string[]} The vertex shader source as an array of strings.
 * @param fragmentSrc {string|string[]} The fragment shader source as an array of strings.
 * @param precision {precision]} The float precision of the shader. Options are 'lowp', 'mediump' or 'highp'.
 * @param attributeLocations {object} A key value pair showing which location eact attribute should sit eg {position:0, uvs:1}
 */
var Shader = function(gl, vertexSrc, fragmentSrc, precision, attributeLocations)
{
	/**
	 * The current WebGL rendering context
	 *
	 * @member {WebGLRenderingContext}
	 */
	this.gl = gl;

	if(precision)
	{
		vertexSrc = setPrecision(vertexSrc, precision);
		fragmentSrc = setPrecision(fragmentSrc, precision);
	}

	/**
	 * The shader program
	 *
	 * @member {WebGLProgram}
	 */
	// First compile the program..
	this.program = compileProgram(gl, vertexSrc, fragmentSrc, attributeLocations);

	/**
	 * The attributes of the shader as an object containing the following properties
	 * {
	 * 	type,
	 * 	size,
	 * 	location,
	 * 	pointer
	 * }
	 * @member {Object}
	 */
	// next extract the attributes
	this.attributes = extractAttributes(gl, this.program);

    this.uniformData = extractUniforms(gl, this.program);

	/**
	 * The uniforms of the shader as an object containing the following properties
	 * {
	 * 	gl,
	 * 	data
	 * }
	 * @member {Object}
	 */
	this.uniforms = generateUniformAccessObject( gl, this.uniformData );

};
/**
 * Uses this shader
 */
Shader.prototype.bind = function()
{
	this.gl.useProgram(this.program);
};

/**
 * Destroys this shader
 * TODO
 */
Shader.prototype.destroy = function()
{
	this.attributes = null;
	this.uniformData = null;
	this.uniforms = null;

	var gl = this.gl;
	gl.deleteProgram(this.program);
};


module.exports = Shader;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {


// state object//
var setVertexAttribArrays = __webpack_require__( 38 );

/**
 * Helper class to work with WebGL VertexArrayObjects (vaos)
 * Only works if WebGL extensions are enabled (they usually are)
 *
 * @class
 * @memberof PIXI.glCore
 * @param gl {WebGLRenderingContext} The current WebGL rendering context
 */
function VertexArrayObject(gl, state)
{
    this.nativeVaoExtension = null;

    if(!VertexArrayObject.FORCE_NATIVE)
    {
        this.nativeVaoExtension = gl.getExtension('OES_vertex_array_object') ||
                                  gl.getExtension('MOZ_OES_vertex_array_object') ||
                                  gl.getExtension('WEBKIT_OES_vertex_array_object');
    }

    this.nativeState = state;

    if(this.nativeVaoExtension)
    {
        this.nativeVao = this.nativeVaoExtension.createVertexArrayOES();

        var maxAttribs = gl.getParameter(gl.MAX_VERTEX_ATTRIBS);

        // VAO - overwrite the state..
        this.nativeState = {
            tempAttribState: new Array(maxAttribs),
            attribState: new Array(maxAttribs)
        };
    }

    /**
     * The current WebGL rendering context
     *
     * @member {WebGLRenderingContext}
     */
    this.gl = gl;

    /**
     * An array of attributes
     *
     * @member {Array}
     */
    this.attributes = [];

    /**
     * @member {PIXI.glCore.GLBuffer}
     */
    this.indexBuffer = null;

    /**
     * A boolean flag
     *
     * @member {Boolean}
     */
    this.dirty = false;
}

VertexArrayObject.prototype.constructor = VertexArrayObject;
module.exports = VertexArrayObject;

/**
* Some devices behave a bit funny when using the newer extensions (im looking at you ipad 2!)
* If you find on older devices that things have gone a bit weird then set this to true.
*/
/**
 * Lets the VAO know if you should use the WebGL extension or the native methods.
 * Some devices behave a bit funny when using the newer extensions (im looking at you ipad 2!)
 * If you find on older devices that things have gone a bit weird then set this to true.
 * @static
 * @property {Boolean} FORCE_NATIVE
 */
VertexArrayObject.FORCE_NATIVE = false;

/**
 * Binds the buffer
 */
VertexArrayObject.prototype.bind = function()
{
    if(this.nativeVao)
    {
        this.nativeVaoExtension.bindVertexArrayOES(this.nativeVao);

        if(this.dirty)
        {
            this.dirty = false;
            this.activate();
        }
    }
    else
    {

        this.activate();
    }

    return this;
};

/**
 * Unbinds the buffer
 */
VertexArrayObject.prototype.unbind = function()
{
    if(this.nativeVao)
    {
        this.nativeVaoExtension.bindVertexArrayOES(null);
    }

    return this;
};

/**
 * Uses this vao
 */
VertexArrayObject.prototype.activate = function()
{

    var gl = this.gl;
    var lastBuffer = null;

    for (var i = 0; i < this.attributes.length; i++)
    {
        var attrib = this.attributes[i];

        if(lastBuffer !== attrib.buffer)
        {
            attrib.buffer.bind();
            lastBuffer = attrib.buffer;
        }

        gl.vertexAttribPointer(attrib.attribute.location,
                               attrib.attribute.size,
                               attrib.type || gl.FLOAT,
                               attrib.normalized || false,
                               attrib.stride || 0,
                               attrib.start || 0);
    }

    setVertexAttribArrays(gl, this.attributes, this.nativeState);

    if(this.indexBuffer)
    {
        this.indexBuffer.bind();
    }

    return this;
};

/**
 *
 * @param buffer     {PIXI.gl.GLBuffer}
 * @param attribute  {*}
 * @param type       {String}
 * @param normalized {Boolean}
 * @param stride     {Number}
 * @param start      {Number}
 */
VertexArrayObject.prototype.addAttribute = function(buffer, attribute, type, normalized, stride, start)
{
    this.attributes.push({
        buffer:     buffer,
        attribute:  attribute,

        location:   attribute.location,
        type:       type || this.gl.FLOAT,
        normalized: normalized || false,
        stride:     stride || 0,
        start:      start || 0
    });

    this.dirty = true;

    return this;
};

/**
 *
 * @param buffer   {PIXI.gl.GLBuffer}
 */
VertexArrayObject.prototype.addIndex = function(buffer/*, options*/)
{
    this.indexBuffer = buffer;

    this.dirty = true;

    return this;
};

/**
 * Unbinds this vao and disables it
 */
VertexArrayObject.prototype.clear = function()
{
    // var gl = this.gl;

    // TODO - should this function unbind after clear?
    // for now, no but lets see what happens in the real world!
    if(this.nativeVao)
    {
        this.nativeVaoExtension.bindVertexArrayOES(this.nativeVao);
    }

    this.attributes.length = 0;
    this.indexBuffer = null;

    return this;
};

/**
 * @param type  {Number}
 * @param size  {Number}
 * @param start {Number}
 */
VertexArrayObject.prototype.draw = function(type, size, start)
{
    var gl = this.gl;

    if(this.indexBuffer)
    {
        gl.drawElements(type, size || this.indexBuffer.data.length, gl.UNSIGNED_SHORT, (start || 0) * 2 );
    }
    else
    {
        // TODO need a better way to calculate size..
        gl.drawArrays(type, start, size || this.getSize());
    }

    return this;
};

/**
 * Destroy this vao
 */
VertexArrayObject.prototype.destroy = function()
{
    // lose references
    this.gl = null;
    this.indexBuffer = null;
    this.attributes = null;
    this.nativeState = null;

    if(this.nativeVao)
    {
        this.nativeVaoExtension.deleteVertexArrayOES(this.nativeVao);
    }

    this.nativeVaoExtension = null;
    this.nativeVao = null;
};

VertexArrayObject.prototype.getSize = function()
{
    var attrib = this.attributes[0];
    return attrib.buffer.data.length / (( attrib.stride/4 ) || attrib.attribute.size);
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    compileProgram: __webpack_require__(40),
    defaultValue: __webpack_require__(44),
    extractAttributes: __webpack_require__(41),
    extractUniforms: __webpack_require__(43),
    generateUniformAccessObject: __webpack_require__(46),
    setPrecision: __webpack_require__(45),
    mapSize: __webpack_require__(42),
    mapType: __webpack_require__(28)
};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = maxRecommendedTextures;

var _ismobilejs = __webpack_require__(48);

var _ismobilejs2 = _interopRequireDefault(_ismobilejs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function maxRecommendedTextures(max) {
    if (_ismobilejs2.default.tablet || _ismobilejs2.default.phone) {
        // check if the res is iphone 6 or higher..
        return 4;
    }

    // desktop should be ok
    return max;
}
//# sourceMappingURL=maxRecommendedTextures.js.map

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = canUploadSameBuffer;
function canUploadSameBuffer() {
	// Uploading the same buffer multiple times in a single frame can cause perf issues.
	// Apparent on IOS so only check for that at the moment
	// this check may become more complex if this issue pops up elsewhere.
	var ios = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);

	return !ios;
}
//# sourceMappingURL=canUploadSameBuffer.js.map

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/**
 * Mixins functionality to make an object have "plugins".
 *
 * @example
 *      function MyObject() {}
 *
 *      pluginTarget.mixin(MyObject);
 *
 * @mixin
 * @memberof PIXI.utils
 * @param {object} obj - The object to mix into.
 */
function pluginTarget(obj) {
    obj.__plugins = {};

    /**
     * Adds a plugin to an object
     *
     * @param {string} pluginName - The events that should be listed.
     * @param {Function} ctor - The constructor function for the plugin.
     */
    obj.registerPlugin = function registerPlugin(pluginName, ctor) {
        obj.__plugins[pluginName] = ctor;
    };

    /**
     * Instantiates all the plugins of this object
     *
     */
    obj.prototype.initPlugins = function initPlugins() {
        this.plugins = this.plugins || {};

        for (var o in obj.__plugins) {
            this.plugins[o] = new obj.__plugins[o](this);
        }
    };

    /**
     * Removes all the plugins of this object
     *
     */
    obj.prototype.destroyPlugins = function destroyPlugins() {
        for (var o in this.plugins) {
            this.plugins[o].destroy();
            this.plugins[o] = null;
        }

        this.plugins = null;
    };
}

exports.default = {
    /**
     * Mixes in the properties of the pluginTarget into another object
     *
     * @param {object} obj - The obj to mix into
     */
    mixin: function mixin(obj) {
        pluginTarget(obj);
    }
};
//# sourceMappingURL=pluginTarget.js.map

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.mixin = mixin;
exports.delayMixin = delayMixin;
exports.performMixins = performMixins;
/**
 * Mixes all enumerable properties and methods from a source object to a target object.
 *
 * @memberof PIXI.utils.mixins
 * @function mixin
 * @param {object} target The prototype or instance that properties and methods should be added to.
 * @param {object} source The source of properties and methods to mix in.
 */
function mixin(target, source) {
    if (!target || !source) return;
    // in ES8/ES2017, this would be really easy:
    // Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));

    // get all the enumerable property keys
    var keys = Object.keys(source);

    // loop through properties
    for (var i = 0; i < keys.length; ++i) {
        var propertyName = keys[i];

        // Set the property using the property descriptor - this works for accessors and normal value properties
        Object.defineProperty(target, propertyName, Object.getOwnPropertyDescriptor(source, propertyName));
    }
}

var mixins = [];

/**
 * Queues a mixin to be handled towards the end of the initialization of PIXI, so that deprecation
 * can take effect.
 *
 * @memberof PIXI.utils.mixins
 * @function delayMixin
 * @private
 * @param {object} target The prototype or instance that properties and methods should be added to.
 * @param {object} source The source of properties and methods to mix in.
 */
function delayMixin(target, source) {
    mixins.push(target, source);
}

/**
 * Handles all mixins queued via delayMixin().
 *
 * @memberof PIXI.utils.mixins
 * @function performMixins
 * @private
 */
function performMixins() {
    for (var i = 0; i < mixins.length; i += 2) {
        mixin(mixins[i], mixins[i + 1]);
    }
    mixins.length = 0;
}
//# sourceMappingURL=mixin.js.map

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Remove a range of items from an array
 *
 * @function removeItems
 * @param {Array<*>} arr The target array
 * @param {number} startIdx The index to begin removing from (inclusive)
 * @param {number} removeCount How many items to remove
 */
module.exports = function removeItems(arr, startIdx, removeCount)
{
  var i, length = arr.length

  if (startIdx >= length || removeCount === 0) {
    return
  }

  removeCount = (startIdx + removeCount > length ? length - startIdx : removeCount)

  var len = length - removeCount

  for (i = startIdx; i < len; ++i) {
    arr[i] = arr[i + removeCount]
  }

  arr.length = len
}


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mapPremultipliedBlendModes;

var _const = __webpack_require__(12);

/**
 * Corrects PixiJS blend, takes premultiplied alpha into account
 *
 * @memberof PIXI
 * @function mapPremultipliedBlendModes
 * @private
 * @param {Array<number[]>} [array] - The array to output into.
 * @return {Array<number[]>} Mapped modes.
 */

function mapPremultipliedBlendModes() {
    var pm = [];
    var npm = [];

    for (var i = 0; i < 32; i++) {
        pm[i] = i;
        npm[i] = i;
    }

    pm[_const.BLEND_MODES.NORMAL_NPM] = _const.BLEND_MODES.NORMAL;
    pm[_const.BLEND_MODES.ADD_NPM] = _const.BLEND_MODES.ADD;
    pm[_const.BLEND_MODES.SCREEN_NPM] = _const.BLEND_MODES.SCREEN;

    npm[_const.BLEND_MODES.NORMAL] = _const.BLEND_MODES.NORMAL_NPM;
    npm[_const.BLEND_MODES.ADD] = _const.BLEND_MODES.ADD_NPM;
    npm[_const.BLEND_MODES.SCREEN] = _const.BLEND_MODES.SCREEN_NPM;

    var array = [];

    array.push(npm);
    array.push(pm);

    return array;
}
//# sourceMappingURL=mapPremultipliedBlendModes.js.map

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Container2 = __webpack_require__(19);

var _Container3 = _interopRequireDefault(_Container2);

var _RenderTexture = __webpack_require__(51);

var _RenderTexture2 = _interopRequireDefault(_RenderTexture);

var _Texture = __webpack_require__(31);

var _Texture2 = _interopRequireDefault(_Texture);

var _GraphicsData = __webpack_require__(53);

var _GraphicsData2 = _interopRequireDefault(_GraphicsData);

var _Sprite = __webpack_require__(108);

var _Sprite2 = _interopRequireDefault(_Sprite);

var _math = __webpack_require__(14);

var _utils = __webpack_require__(13);

var _const = __webpack_require__(12);

var _Bounds = __webpack_require__(29);

var _Bounds2 = _interopRequireDefault(_Bounds);

var _bezierCurveTo2 = __webpack_require__(109);

var _bezierCurveTo3 = _interopRequireDefault(_bezierCurveTo2);

var _CanvasRenderer = __webpack_require__(22);

var _CanvasRenderer2 = _interopRequireDefault(_CanvasRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var canvasRenderer = void 0;
var tempMatrix = new _math.Matrix();
var tempPoint = new _math.Point();
var tempColor1 = new Float32Array(4);
var tempColor2 = new Float32Array(4);

/**
 * The Graphics class contains methods used to draw primitive shapes such as lines, circles and
 * rectangles to the display, and to color and fill them.
 *
 * @class
 * @extends PIXI.Container
 * @memberof PIXI
 */

var Graphics = function (_Container) {
    _inherits(Graphics, _Container);

    /**
     *
     * @param {boolean} [nativeLines=false] - If true the lines will be draw using LINES instead of TRIANGLE_STRIP
     */
    function Graphics() {
        var nativeLines = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        _classCallCheck(this, Graphics);

        /**
         * The alpha value used when filling the Graphics object.
         *
         * @member {number}
         * @default 1
         */
        var _this = _possibleConstructorReturn(this, _Container.call(this));

        _this.fillAlpha = 1;

        /**
         * The width (thickness) of any lines drawn.
         *
         * @member {number}
         * @default 0
         */
        _this.lineWidth = 0;

        /**
         * If true the lines will be draw using LINES instead of TRIANGLE_STRIP
         *
         * @member {boolean}
         */
        _this.nativeLines = nativeLines;

        /**
         * The color of any lines drawn.
         *
         * @member {string}
         * @default 0
         */
        _this.lineColor = 0;

        /**
         * Graphics data
         *
         * @member {PIXI.GraphicsData[]}
         * @private
         */
        _this.graphicsData = [];

        /**
         * The tint applied to the graphic shape. This is a hex value. Apply a value of 0xFFFFFF to
         * reset the tint.
         *
         * @member {number}
         * @default 0xFFFFFF
         */
        _this.tint = 0xFFFFFF;

        /**
         * The previous tint applied to the graphic shape. Used to compare to the current tint and
         * check if theres change.
         *
         * @member {number}
         * @private
         * @default 0xFFFFFF
         */
        _this._prevTint = 0xFFFFFF;

        /**
         * The blend mode to be applied to the graphic shape. Apply a value of
         * `PIXI.BLEND_MODES.NORMAL` to reset the blend mode.
         *
         * @member {number}
         * @default PIXI.BLEND_MODES.NORMAL;
         * @see PIXI.BLEND_MODES
         */
        _this.blendMode = _const.BLEND_MODES.NORMAL;

        /**
         * Current path
         *
         * @member {PIXI.GraphicsData}
         * @private
         */
        _this.currentPath = null;

        /**
         * Array containing some WebGL-related properties used by the WebGL renderer.
         *
         * @member {object<number, object>}
         * @private
         */
        // TODO - _webgl should use a prototype object, not a random undocumented object...
        _this._webGL = {};

        /**
         * Whether this shape is being used as a mask.
         *
         * @member {boolean}
         */
        _this.isMask = false;

        /**
         * The bounds' padding used for bounds calculation.
         *
         * @member {number}
         */
        _this.boundsPadding = 0;

        /**
         * A cache of the local bounds to prevent recalculation.
         *
         * @member {PIXI.Rectangle}
         * @private
         */
        _this._localBounds = new _Bounds2.default();

        /**
         * Used to detect if the graphics object has changed. If this is set to true then the graphics
         * object will be recalculated.
         *
         * @member {boolean}
         * @private
         */
        _this.dirty = 0;

        /**
         * Used to detect if we need to do a fast rect check using the id compare method
         * @type {Number}
         */
        _this.fastRectDirty = -1;

        /**
         * Used to detect if we clear the graphics webGL data
         * @type {Number}
         */
        _this.clearDirty = 0;

        /**
         * Used to detect if we we need to recalculate local bounds
         * @type {Number}
         */
        _this.boundsDirty = -1;

        /**
         * Used to detect if the cached sprite object needs to be updated.
         *
         * @member {boolean}
         * @private
         */
        _this.cachedSpriteDirty = false;

        _this._spriteRect = null;
        _this._fastRect = false;

        /**
         * When cacheAsBitmap is set to true the graphics object will be rendered as if it was a sprite.
         * This is useful if your graphics element does not change often, as it will speed up the rendering
         * of the object in exchange for taking up texture memory. It is also useful if you need the graphics
         * object to be anti-aliased, because it will be rendered using canvas. This is not recommended if
         * you are constantly redrawing the graphics element.
         *
         * @name cacheAsBitmap
         * @member {boolean}
         * @memberof PIXI.Graphics#
         * @default false
         */
        return _this;
    }

    /**
     * Creates a new Graphics object with the same values as this one.
     * Note that the only the properties of the object are cloned, not its transform (position,scale,etc)
     *
     * @return {PIXI.Graphics} A clone of the graphics object
     */


    Graphics.prototype.clone = function clone() {
        var clone = new Graphics();

        clone.renderable = this.renderable;
        clone.fillAlpha = this.fillAlpha;
        clone.lineWidth = this.lineWidth;
        clone.lineColor = this.lineColor;
        clone.tint = this.tint;
        clone.blendMode = this.blendMode;
        clone.isMask = this.isMask;
        clone.boundsPadding = this.boundsPadding;
        clone.dirty = 0;
        clone.cachedSpriteDirty = this.cachedSpriteDirty;

        // copy graphics data
        for (var i = 0; i < this.graphicsData.length; ++i) {
            clone.graphicsData.push(this.graphicsData[i].clone());
        }

        clone.currentPath = clone.graphicsData[clone.graphicsData.length - 1];

        clone.updateLocalBounds();

        return clone;
    };

    /**
     * Specifies the line style used for subsequent calls to Graphics methods such as the lineTo()
     * method or the drawCircle() method.
     *
     * @param {number} [lineWidth=0] - width of the line to draw, will update the objects stored style
     * @param {number} [color=0] - color of the line to draw, will update the objects stored style
     * @param {number} [alpha=1] - alpha of the line to draw, will update the objects stored style
     * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
     */


    Graphics.prototype.lineStyle = function lineStyle() {
        var lineWidth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var alpha = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

        this.lineWidth = lineWidth;
        this.lineColor = color;
        this.lineAlpha = alpha;

        if (this.currentPath) {
            if (this.currentPath.shape.points.length) {
                // halfway through a line? start a new one!
                var shape = new _math.Polygon(this.currentPath.shape.points.slice(-2));

                shape.closed = false;

                this.drawShape(shape);
            } else {
                // otherwise its empty so lets just set the line properties
                this.currentPath.lineWidth = this.lineWidth;
                this.currentPath.lineColor = this.lineColor;
                this.currentPath.lineAlpha = this.lineAlpha;
            }
        }

        return this;
    };

    /**
     * Moves the current drawing position to x, y.
     *
     * @param {number} x - the X coordinate to move to
     * @param {number} y - the Y coordinate to move to
     * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
     */


    Graphics.prototype.moveTo = function moveTo(x, y) {
        var shape = new _math.Polygon([x, y]);

        shape.closed = false;
        this.drawShape(shape);

        return this;
    };

    /**
     * Draws a line using the current line style from the current drawing position to (x, y);
     * The current drawing position is then set to (x, y).
     *
     * @param {number} x - the X coordinate to draw to
     * @param {number} y - the Y coordinate to draw to
     * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
     */


    Graphics.prototype.lineTo = function lineTo(x, y) {
        this.currentPath.shape.points.push(x, y);
        this.dirty++;

        return this;
    };

    /**
     * Calculate the points for a quadratic bezier curve and then draws it.
     * Based on: https://stackoverflow.com/questions/785097/how-do-i-implement-a-bezier-curve-in-c
     *
     * @param {number} cpX - Control point x
     * @param {number} cpY - Control point y
     * @param {number} toX - Destination point x
     * @param {number} toY - Destination point y
     * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
     */


    Graphics.prototype.quadraticCurveTo = function quadraticCurveTo(cpX, cpY, toX, toY) {
        if (this.currentPath) {
            if (this.currentPath.shape.points.length === 0) {
                this.currentPath.shape.points = [0, 0];
            }
        } else {
            this.moveTo(0, 0);
        }

        var n = 20;
        var points = this.currentPath.shape.points;
        var xa = 0;
        var ya = 0;

        if (points.length === 0) {
            this.moveTo(0, 0);
        }

        var fromX = points[points.length - 2];
        var fromY = points[points.length - 1];

        for (var i = 1; i <= n; ++i) {
            var j = i / n;

            xa = fromX + (cpX - fromX) * j;
            ya = fromY + (cpY - fromY) * j;

            points.push(xa + (cpX + (toX - cpX) * j - xa) * j, ya + (cpY + (toY - cpY) * j - ya) * j);
        }

        this.dirty++;

        return this;
    };

    /**
     * Calculate the points for a bezier curve and then draws it.
     *
     * @param {number} cpX - Control point x
     * @param {number} cpY - Control point y
     * @param {number} cpX2 - Second Control point x
     * @param {number} cpY2 - Second Control point y
     * @param {number} toX - Destination point x
     * @param {number} toY - Destination point y
     * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
     */


    Graphics.prototype.bezierCurveTo = function bezierCurveTo(cpX, cpY, cpX2, cpY2, toX, toY) {
        if (this.currentPath) {
            if (this.currentPath.shape.points.length === 0) {
                this.currentPath.shape.points = [0, 0];
            }
        } else {
            this.moveTo(0, 0);
        }

        var points = this.currentPath.shape.points;

        var fromX = points[points.length - 2];
        var fromY = points[points.length - 1];

        points.length -= 2;

        (0, _bezierCurveTo3.default)(fromX, fromY, cpX, cpY, cpX2, cpY2, toX, toY, points);

        this.dirty++;

        return this;
    };

    /**
     * The arcTo() method creates an arc/curve between two tangents on the canvas.
     *
     * "borrowed" from https://code.google.com/p/fxcanvas/ - thanks google!
     *
     * @param {number} x1 - The x-coordinate of the beginning of the arc
     * @param {number} y1 - The y-coordinate of the beginning of the arc
     * @param {number} x2 - The x-coordinate of the end of the arc
     * @param {number} y2 - The y-coordinate of the end of the arc
     * @param {number} radius - The radius of the arc
     * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
     */


    Graphics.prototype.arcTo = function arcTo(x1, y1, x2, y2, radius) {
        if (this.currentPath) {
            if (this.currentPath.shape.points.length === 0) {
                this.currentPath.shape.points.push(x1, y1);
            }
        } else {
            this.moveTo(x1, y1);
        }

        var points = this.currentPath.shape.points;
        var fromX = points[points.length - 2];
        var fromY = points[points.length - 1];
        var a1 = fromY - y1;
        var b1 = fromX - x1;
        var a2 = y2 - y1;
        var b2 = x2 - x1;
        var mm = Math.abs(a1 * b2 - b1 * a2);

        if (mm < 1.0e-8 || radius === 0) {
            if (points[points.length - 2] !== x1 || points[points.length - 1] !== y1) {
                points.push(x1, y1);
            }
        } else {
            var dd = a1 * a1 + b1 * b1;
            var cc = a2 * a2 + b2 * b2;
            var tt = a1 * a2 + b1 * b2;
            var k1 = radius * Math.sqrt(dd) / mm;
            var k2 = radius * Math.sqrt(cc) / mm;
            var j1 = k1 * tt / dd;
            var j2 = k2 * tt / cc;
            var cx = k1 * b2 + k2 * b1;
            var cy = k1 * a2 + k2 * a1;
            var px = b1 * (k2 + j1);
            var py = a1 * (k2 + j1);
            var qx = b2 * (k1 + j2);
            var qy = a2 * (k1 + j2);
            var startAngle = Math.atan2(py - cy, px - cx);
            var endAngle = Math.atan2(qy - cy, qx - cx);

            this.arc(cx + x1, cy + y1, radius, startAngle, endAngle, b1 * a2 > b2 * a1);
        }

        this.dirty++;

        return this;
    };

    /**
     * The arc method creates an arc/curve (used to create circles, or parts of circles).
     *
     * @param {number} cx - The x-coordinate of the center of the circle
     * @param {number} cy - The y-coordinate of the center of the circle
     * @param {number} radius - The radius of the circle
     * @param {number} startAngle - The starting angle, in radians (0 is at the 3 o'clock position
     *  of the arc's circle)
     * @param {number} endAngle - The ending angle, in radians
     * @param {boolean} [anticlockwise=false] - Specifies whether the drawing should be
     *  counter-clockwise or clockwise. False is default, and indicates clockwise, while true
     *  indicates counter-clockwise.
     * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
     */


    Graphics.prototype.arc = function arc(cx, cy, radius, startAngle, endAngle) {
        var anticlockwise = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

        if (startAngle === endAngle) {
            return this;
        }

        if (!anticlockwise && endAngle <= startAngle) {
            endAngle += Math.PI * 2;
        } else if (anticlockwise && startAngle <= endAngle) {
            startAngle += Math.PI * 2;
        }

        var sweep = endAngle - startAngle;
        var segs = Math.ceil(Math.abs(sweep) / (Math.PI * 2)) * 40;

        if (sweep === 0) {
            return this;
        }

        var startX = cx + Math.cos(startAngle) * radius;
        var startY = cy + Math.sin(startAngle) * radius;

        // If the currentPath exists, take its points. Otherwise call `moveTo` to start a path.
        var points = this.currentPath ? this.currentPath.shape.points : null;

        if (points) {
            if (points[points.length - 2] !== startX || points[points.length - 1] !== startY) {
                points.push(startX, startY);
            }
        } else {
            this.moveTo(startX, startY);
            points = this.currentPath.shape.points;
        }

        var theta = sweep / (segs * 2);
        var theta2 = theta * 2;

        var cTheta = Math.cos(theta);
        var sTheta = Math.sin(theta);

        var segMinus = segs - 1;

        var remainder = segMinus % 1 / segMinus;

        for (var i = 0; i <= segMinus; ++i) {
            var real = i + remainder * i;

            var angle = theta + startAngle + theta2 * real;

            var c = Math.cos(angle);
            var s = -Math.sin(angle);

            points.push((cTheta * c + sTheta * s) * radius + cx, (cTheta * -s + sTheta * c) * radius + cy);
        }

        this.dirty++;

        return this;
    };

    /**
     * Specifies a simple one-color fill that subsequent calls to other Graphics methods
     * (such as lineTo() or drawCircle()) use when drawing.
     *
     * @param {number} [color=0] - the color of the fill
     * @param {number} [alpha=1] - the alpha of the fill
     * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
     */


    Graphics.prototype.beginFill = function beginFill() {
        var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

        this.filling = true;
        this.fillColor = color;
        this.fillAlpha = alpha;

        if (this.currentPath) {
            if (this.currentPath.shape.points.length <= 2) {
                this.currentPath.fill = this.filling;
                this.currentPath.fillColor = this.fillColor;
                this.currentPath.fillAlpha = this.fillAlpha;
            }
        }

        return this;
    };

    /**
     * Applies a fill to the lines and shapes that were added since the last call to the beginFill() method.
     *
     * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
     */


    Graphics.prototype.endFill = function endFill() {
        this.filling = false;
        this.fillColor = null;
        this.fillAlpha = 1;

        return this;
    };

    /**
     *
     * @param {number} x - The X coord of the top-left of the rectangle
     * @param {number} y - The Y coord of the top-left of the rectangle
     * @param {number} width - The width of the rectangle
     * @param {number} height - The height of the rectangle
     * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
     */


    Graphics.prototype.drawRect = function drawRect(x, y, width, height) {
        this.drawShape(new _math.Rectangle(x, y, width, height));

        return this;
    };

    /**
     *
     * @param {number} x - The X coord of the top-left of the rectangle
     * @param {number} y - The Y coord of the top-left of the rectangle
     * @param {number} width - The width of the rectangle
     * @param {number} height - The height of the rectangle
     * @param {number} radius - Radius of the rectangle corners
     * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
     */


    Graphics.prototype.drawRoundedRect = function drawRoundedRect(x, y, width, height, radius) {
        this.drawShape(new _math.RoundedRectangle(x, y, width, height, radius));

        return this;
    };

    /**
     * Draws a circle.
     *
     * @param {number} x - The X coordinate of the center of the circle
     * @param {number} y - The Y coordinate of the center of the circle
     * @param {number} radius - The radius of the circle
     * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
     */


    Graphics.prototype.drawCircle = function drawCircle(x, y, radius) {
        this.drawShape(new _math.Circle(x, y, radius));

        return this;
    };

    /**
     * Draws an ellipse.
     *
     * @param {number} x - The X coordinate of the center of the ellipse
     * @param {number} y - The Y coordinate of the center of the ellipse
     * @param {number} width - The half width of the ellipse
     * @param {number} height - The half height of the ellipse
     * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
     */


    Graphics.prototype.drawEllipse = function drawEllipse(x, y, width, height) {
        this.drawShape(new _math.Ellipse(x, y, width, height));

        return this;
    };

    /**
     * Draws a polygon using the given path.
     *
     * @param {number[]|PIXI.Point[]} path - The path data used to construct the polygon.
     * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
     */


    Graphics.prototype.drawPolygon = function drawPolygon(path) {
        // prevents an argument assignment deopt
        // see section 3.1: https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#3-managing-arguments
        var points = path;

        var closed = true;

        if (points instanceof _math.Polygon) {
            closed = points.closed;
            points = points.points;
        }

        if (!Array.isArray(points)) {
            // prevents an argument leak deopt
            // see section 3.2: https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#3-managing-arguments
            points = new Array(arguments.length);

            for (var i = 0; i < points.length; ++i) {
                points[i] = arguments[i]; // eslint-disable-line prefer-rest-params
            }
        }

        var shape = new _math.Polygon(points);

        shape.closed = closed;

        this.drawShape(shape);

        return this;
    };

    /**
     * Clears the graphics that were drawn to this Graphics object, and resets fill and line style settings.
     *
     * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
     */


    Graphics.prototype.clear = function clear() {
        if (this.lineWidth || this.filling || this.graphicsData.length > 0) {
            this.lineWidth = 0;
            this.filling = false;

            this.boundsDirty = -1;
            this.dirty++;
            this.clearDirty++;
            this.graphicsData.length = 0;
        }

        this.currentPath = null;
        this._spriteRect = null;

        return this;
    };

    /**
     * True if graphics consists of one rectangle, and thus, can be drawn like a Sprite and
     * masked with gl.scissor.
     *
     * @returns {boolean} True if only 1 rect.
     */


    Graphics.prototype.isFastRect = function isFastRect() {
        return this.graphicsData.length === 1 && this.graphicsData[0].shape.type === _const.SHAPES.RECT && !this.graphicsData[0].lineWidth;
    };

    /**
     * Renders the object using the WebGL renderer
     *
     * @private
     * @param {PIXI.WebGLRenderer} renderer - The renderer
     */


    Graphics.prototype._renderWebGL = function _renderWebGL(renderer) {
        // if the sprite is not visible or the alpha is 0 then no need to render this element
        if (this.dirty !== this.fastRectDirty) {
            this.fastRectDirty = this.dirty;
            this._fastRect = this.isFastRect();
        }

        // TODO this check can be moved to dirty?
        if (this._fastRect) {
            this._renderSpriteRect(renderer);
        } else {
            renderer.setObjectRenderer(renderer.plugins.graphics);
            renderer.plugins.graphics.render(this);
        }
    };

    /**
     * Renders a sprite rectangle.
     *
     * @private
     * @param {PIXI.WebGLRenderer} renderer - The renderer
     */


    Graphics.prototype._renderSpriteRect = function _renderSpriteRect(renderer) {
        var rect = this.graphicsData[0].shape;

        if (!this._spriteRect) {
            this._spriteRect = new _Sprite2.default(new _Texture2.default(_Texture2.default.WHITE));
        }

        var sprite = this._spriteRect;

        if (this.tint === 0xffffff) {
            sprite.tint = this.graphicsData[0].fillColor;
        } else {
            var t1 = tempColor1;
            var t2 = tempColor2;

            (0, _utils.hex2rgb)(this.graphicsData[0].fillColor, t1);
            (0, _utils.hex2rgb)(this.tint, t2);

            t1[0] *= t2[0];
            t1[1] *= t2[1];
            t1[2] *= t2[2];

            sprite.tint = (0, _utils.rgb2hex)(t1);
        }
        sprite.alpha = this.graphicsData[0].fillAlpha;
        sprite.worldAlpha = this.worldAlpha * sprite.alpha;
        sprite.blendMode = this.blendMode;

        sprite._texture._frame.width = rect.width;
        sprite._texture._frame.height = rect.height;

        sprite.transform.worldTransform = this.transform.worldTransform;

        sprite.anchor.set(-rect.x / rect.width, -rect.y / rect.height);
        sprite._onAnchorUpdate();

        sprite._renderWebGL(renderer);
    };

    /**
     * Renders the object using the Canvas renderer
     *
     * @private
     * @param {PIXI.CanvasRenderer} renderer - The renderer
     */


    Graphics.prototype._renderCanvas = function _renderCanvas(renderer) {
        if (this.isMask === true) {
            return;
        }

        renderer.plugins.graphics.render(this);
    };

    /**
     * Retrieves the bounds of the graphic shape as a rectangle object
     *
     * @private
     */


    Graphics.prototype._calculateBounds = function _calculateBounds() {
        if (this.boundsDirty !== this.dirty) {
            this.boundsDirty = this.dirty;
            this.updateLocalBounds();

            this.cachedSpriteDirty = true;
        }

        var lb = this._localBounds;

        this._bounds.addFrame(this.transform, lb.minX, lb.minY, lb.maxX, lb.maxY);
    };

    /**
     * Tests if a point is inside this graphics object
     *
     * @param {PIXI.Point} point - the point to test
     * @return {boolean} the result of the test
     */


    Graphics.prototype.containsPoint = function containsPoint(point) {
        this.worldTransform.applyInverse(point, tempPoint);

        var graphicsData = this.graphicsData;

        for (var i = 0; i < graphicsData.length; ++i) {
            var data = graphicsData[i];

            if (!data.fill) {
                continue;
            }

            // only deal with fills..
            if (data.shape) {
                if (data.shape.contains(tempPoint.x, tempPoint.y)) {
                    if (data.holes) {
                        for (var _i = 0; _i < data.holes.length; _i++) {
                            var hole = data.holes[_i];

                            if (hole.contains(tempPoint.x, tempPoint.y)) {
                                return false;
                            }
                        }
                    }

                    return true;
                }
            }
        }

        return false;
    };

    /**
     * Update the bounds of the object
     *
     */


    Graphics.prototype.updateLocalBounds = function updateLocalBounds() {
        var minX = Infinity;
        var maxX = -Infinity;

        var minY = Infinity;
        var maxY = -Infinity;

        if (this.graphicsData.length) {
            var shape = 0;
            var x = 0;
            var y = 0;
            var w = 0;
            var h = 0;

            for (var i = 0; i < this.graphicsData.length; i++) {
                var data = this.graphicsData[i];
                var type = data.type;
                var lineWidth = data.lineWidth;

                shape = data.shape;

                if (type === _const.SHAPES.RECT || type === _const.SHAPES.RREC) {
                    x = shape.x - lineWidth / 2;
                    y = shape.y - lineWidth / 2;
                    w = shape.width + lineWidth;
                    h = shape.height + lineWidth;

                    minX = x < minX ? x : minX;
                    maxX = x + w > maxX ? x + w : maxX;

                    minY = y < minY ? y : minY;
                    maxY = y + h > maxY ? y + h : maxY;
                } else if (type === _const.SHAPES.CIRC) {
                    x = shape.x;
                    y = shape.y;
                    w = shape.radius + lineWidth / 2;
                    h = shape.radius + lineWidth / 2;

                    minX = x - w < minX ? x - w : minX;
                    maxX = x + w > maxX ? x + w : maxX;

                    minY = y - h < minY ? y - h : minY;
                    maxY = y + h > maxY ? y + h : maxY;
                } else if (type === _const.SHAPES.ELIP) {
                    x = shape.x;
                    y = shape.y;
                    w = shape.width + lineWidth / 2;
                    h = shape.height + lineWidth / 2;

                    minX = x - w < minX ? x - w : minX;
                    maxX = x + w > maxX ? x + w : maxX;

                    minY = y - h < minY ? y - h : minY;
                    maxY = y + h > maxY ? y + h : maxY;
                } else {
                    // POLY
                    var points = shape.points;
                    var x2 = 0;
                    var y2 = 0;
                    var dx = 0;
                    var dy = 0;
                    var rw = 0;
                    var rh = 0;
                    var cx = 0;
                    var cy = 0;

                    for (var j = 0; j + 2 < points.length; j += 2) {
                        x = points[j];
                        y = points[j + 1];
                        x2 = points[j + 2];
                        y2 = points[j + 3];
                        dx = Math.abs(x2 - x);
                        dy = Math.abs(y2 - y);
                        h = lineWidth;
                        w = Math.sqrt(dx * dx + dy * dy);

                        if (w < 1e-9) {
                            continue;
                        }

                        rw = (h / w * dy + dx) / 2;
                        rh = (h / w * dx + dy) / 2;
                        cx = (x2 + x) / 2;
                        cy = (y2 + y) / 2;

                        minX = cx - rw < minX ? cx - rw : minX;
                        maxX = cx + rw > maxX ? cx + rw : maxX;

                        minY = cy - rh < minY ? cy - rh : minY;
                        maxY = cy + rh > maxY ? cy + rh : maxY;
                    }
                }
            }
        } else {
            minX = 0;
            maxX = 0;
            minY = 0;
            maxY = 0;
        }

        var padding = this.boundsPadding;

        this._localBounds.minX = minX - padding;
        this._localBounds.maxX = maxX + padding;

        this._localBounds.minY = minY - padding;
        this._localBounds.maxY = maxY + padding;
    };

    /**
     * Draws the given shape to this Graphics object. Can be any of Circle, Rectangle, Ellipse, Line or Polygon.
     *
     * @param {PIXI.Circle|PIXI.Ellipse|PIXI.Polygon|PIXI.Rectangle|PIXI.RoundedRectangle} shape - The shape object to draw.
     * @return {PIXI.GraphicsData} The generated GraphicsData object.
     */


    Graphics.prototype.drawShape = function drawShape(shape) {
        if (this.currentPath) {
            // check current path!
            if (this.currentPath.shape.points.length <= 2) {
                this.graphicsData.pop();
            }
        }

        this.currentPath = null;

        var data = new _GraphicsData2.default(this.lineWidth, this.lineColor, this.lineAlpha, this.fillColor, this.fillAlpha, this.filling, this.nativeLines, shape);

        this.graphicsData.push(data);

        if (data.type === _const.SHAPES.POLY) {
            data.shape.closed = data.shape.closed || this.filling;
            this.currentPath = data;
        }

        this.dirty++;

        return data;
    };

    /**
     * Generates a canvas texture.
     *
     * @param {number} scaleMode - The scale mode of the texture.
     * @param {number} resolution - The resolution of the texture.
     * @return {PIXI.Texture} The new texture.
     */


    Graphics.prototype.generateCanvasTexture = function generateCanvasTexture(scaleMode) {
        var resolution = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

        var bounds = this.getLocalBounds();

        var canvasBuffer = _RenderTexture2.default.create(bounds.width, bounds.height, scaleMode, resolution);

        if (!canvasRenderer) {
            canvasRenderer = new _CanvasRenderer2.default();
        }

        this.transform.updateLocalTransform();
        this.transform.localTransform.copy(tempMatrix);

        tempMatrix.invert();

        tempMatrix.tx -= bounds.x;
        tempMatrix.ty -= bounds.y;

        canvasRenderer.render(this, canvasBuffer, true, tempMatrix);

        var texture = _Texture2.default.fromCanvas(canvasBuffer.baseTexture._canvasRenderTarget.canvas, scaleMode, 'graphics');

        texture.baseTexture.resolution = resolution;
        texture.baseTexture.update();

        return texture;
    };

    /**
     * Closes the current path.
     *
     * @return {PIXI.Graphics} Returns itself.
     */


    Graphics.prototype.closePath = function closePath() {
        // ok so close path assumes next one is a hole!
        var currentPath = this.currentPath;

        if (currentPath && currentPath.shape) {
            currentPath.shape.close();
        }

        return this;
    };

    /**
     * Adds a hole in the current path.
     *
     * @return {PIXI.Graphics} Returns itself.
     */


    Graphics.prototype.addHole = function addHole() {
        // this is a hole!
        var hole = this.graphicsData.pop();

        this.currentPath = this.graphicsData[this.graphicsData.length - 1];

        this.currentPath.addHole(hole.shape);
        this.currentPath = null;

        return this;
    };

    /**
     * Destroys the Graphics object.
     *
     * @param {object|boolean} [options] - Options parameter. A boolean will act as if all
     *  options have been set to that value
     * @param {boolean} [options.children=false] - if set to true, all the children will have
     *  their destroy method called as well. 'options' will be passed on to those calls.
     * @param {boolean} [options.texture=false] - Only used for child Sprites if options.children is set to true
     *  Should it destroy the texture of the child sprite
     * @param {boolean} [options.baseTexture=false] - Only used for child Sprites if options.children is set to true
     *  Should it destroy the base texture of the child sprite
     */


    Graphics.prototype.destroy = function destroy(options) {
        _Container.prototype.destroy.call(this, options);

        // destroy each of the GraphicsData objects
        for (var i = 0; i < this.graphicsData.length; ++i) {
            this.graphicsData[i].destroy();
        }

        // for each webgl data entry, destroy the WebGLGraphicsData
        for (var id in this._webgl) {
            for (var j = 0; j < this._webgl[id].data.length; ++j) {
                this._webgl[id].data[j].destroy();
            }
        }

        if (this._spriteRect) {
            this._spriteRect.destroy();
        }

        this.graphicsData = null;

        this.currentPath = null;
        this._webgl = null;
        this._localBounds = null;
    };

    return Graphics;
}(_Container3.default);

exports.default = Graphics;


Graphics._SPRITE_TEXTURE = null;
//# sourceMappingURL=Graphics.js.map

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _BaseTexture2 = __webpack_require__(21);

var _BaseTexture3 = _interopRequireDefault(_BaseTexture2);

var _settings = __webpack_require__(15);

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A BaseRenderTexture is a special texture that allows any PixiJS display object to be rendered to it.
 *
 * __Hint__: All DisplayObjects (i.e. Sprites) that render to a BaseRenderTexture should be preloaded
 * otherwise black rectangles will be drawn instead.
 *
 * A BaseRenderTexture takes a snapshot of any Display Object given to its render method. The position
 * and rotation of the given Display Objects is ignored. For example:
 *
 * ```js
 * let renderer = PIXI.autoDetectRenderer(1024, 1024, { view: canvas, ratio: 1 });
 * let baseRenderTexture = new PIXI.BaseRenderTexture(renderer, 800, 600);
 * let sprite = PIXI.Sprite.fromImage("spinObj_01.png");
 *
 * sprite.position.x = 800/2;
 * sprite.position.y = 600/2;
 * sprite.anchor.x = 0.5;
 * sprite.anchor.y = 0.5;
 *
 * baseRenderTexture.render(sprite);
 * ```
 *
 * The Sprite in this case will be rendered using its local transform. To render this sprite at 0,0
 * you can clear the transform
 *
 * ```js
 *
 * sprite.setTransform()
 *
 * let baseRenderTexture = new PIXI.BaseRenderTexture(100, 100);
 * let renderTexture = new PIXI.RenderTexture(baseRenderTexture);
 *
 * renderer.render(sprite, renderTexture);  // Renders to center of RenderTexture
 * ```
 *
 * @class
 * @extends PIXI.BaseTexture
 * @memberof PIXI
 */
var BaseRenderTexture = function (_BaseTexture) {
  _inherits(BaseRenderTexture, _BaseTexture);

  /**
   * @param {number} [width=100] - The width of the base render texture
   * @param {number} [height=100] - The height of the base render texture
   * @param {number} [scaleMode=PIXI.settings.SCALE_MODE] - See {@link PIXI.SCALE_MODES} for possible values
   * @param {number} [resolution=1] - The resolution / device pixel ratio of the texture being generated
   */
  function BaseRenderTexture() {
    var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
    var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
    var scaleMode = arguments[2];
    var resolution = arguments[3];

    _classCallCheck(this, BaseRenderTexture);

    var _this = _possibleConstructorReturn(this, _BaseTexture.call(this, null, scaleMode));

    _this.resolution = resolution || _settings2.default.RESOLUTION;

    _this.width = width;
    _this.height = height;

    _this.realWidth = _this.width * _this.resolution;
    _this.realHeight = _this.height * _this.resolution;

    _this.scaleMode = scaleMode !== undefined ? scaleMode : _settings2.default.SCALE_MODE;
    _this.hasLoaded = true;

    /**
     * A map of renderer IDs to webgl renderTargets
     *
     * @private
     * @member {object<number, WebGLTexture>}
     */
    _this._glRenderTargets = {};

    /**
     * A reference to the canvas render target (we only need one as this can be shared across renderers)
     *
     * @private
     * @member {object<number, WebGLTexture>}
     */
    _this._canvasRenderTarget = null;

    /**
     * This will let the renderer know if the texture is valid. If it's not then it cannot be rendered.
     *
     * @member {boolean}
     */
    _this.valid = false;
    return _this;
  }

  /**
   * Resizes the BaseRenderTexture.
   *
   * @param {number} width - The width to resize to.
   * @param {number} height - The height to resize to.
   */


  BaseRenderTexture.prototype.resize = function resize(width, height) {
    if (width === this.width && height === this.height) {
      return;
    }

    this.valid = width > 0 && height > 0;

    this.width = width;
    this.height = height;

    this.realWidth = this.width * this.resolution;
    this.realHeight = this.height * this.resolution;

    if (!this.valid) {
      return;
    }

    this.emit('update', this);
  };

  /**
   * Destroys this texture
   *
   */


  BaseRenderTexture.prototype.destroy = function destroy() {
    _BaseTexture.prototype.destroy.call(this, true);
    this.renderer = null;
  };

  return BaseRenderTexture;
}(_BaseTexture3.default);

exports.default = BaseRenderTexture;
//# sourceMappingURL=BaseRenderTexture.js.map

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = determineCrossOrigin;

var _url2 = __webpack_require__(97);

var _url3 = _interopRequireDefault(_url2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tempAnchor = void 0;

/**
 * Sets the `crossOrigin` property for this resource based on if the url
 * for this resource is cross-origin. If crossOrigin was manually set, this
 * function does nothing.
 * Nipped from the resource loader!
 *
 * @ignore
 * @param {string} url - The url to test.
 * @param {object} [loc=window.location] - The location object to test against.
 * @return {string} The crossOrigin value to use (or empty string for none).
 */
function determineCrossOrigin(url) {
    var loc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.location;

    // data: and javascript: urls are considered same-origin
    if (url.indexOf('data:') === 0) {
        return '';
    }

    // default is window.location
    loc = loc || window.location;

    if (!tempAnchor) {
        tempAnchor = document.createElement('a');
    }

    // let the browser determine the full href for the url of this resource and then
    // parse with the node url lib, we can't use the properties of the anchor element
    // because they don't work in IE9 :(
    tempAnchor.href = url;
    url = _url3.default.parse(tempAnchor.href);

    var samePort = !url.port && loc.port === '' || url.port === loc.port;

    // if cross origin
    if (url.hostname !== loc.hostname || !samePort || url.protocol !== loc.protocol) {
        return 'anonymous';
    }

    return '';
}
//# sourceMappingURL=determineCrossOrigin.js.map

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var punycode = __webpack_require__(98);
var util = __webpack_require__(100);

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;

exports.Url = Url;

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,

    // Special case for a simple path URL
    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

    // RFC 2396: characters reserved for delimiting URLs.
    // We actually just auto-escape these.
    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

    // RFC 2396: characters not allowed for various reasons.
    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = ['\''].concat(unwise),
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    unsafeProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    querystring = __webpack_require__(101);

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && util.isObject(url) && url instanceof Url) return url;

  var u = new Url;
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
  if (!util.isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }

  // Copy chrome, IE, opera backslash-handling behavior.
  // Back slashes before the query string get converted to forward slashes
  // See: https://code.google.com/p/chromium/issues/detail?id=25916
  var queryIndex = url.indexOf('?'),
      splitter =
          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
      uSplit = url.split(splitter),
      slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, '/');
  url = uSplit.join(splitter);

  var rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.path = rest;
      this.href = rest;
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
        if (parseQueryString) {
          this.query = querystring.parse(this.search.substr(1));
        } else {
          this.query = this.search.substr(1);
        }
      } else if (parseQueryString) {
        this.search = '';
        this.query = {};
      }
      return this;
    }
  }

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1)
      hostEnd = rest.length;

    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost();

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      // hostnames are always lower case.
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      // IDNA Support: Returns a punycoded representation of "domain".
      // It only converts parts of the domain name that
      // have non-ASCII characters, i.e. it doesn't matter if
      // you call it with a domain that already is ASCII-only.
      this.hostname = punycode.toASCII(this.hostname);
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host;

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  }

  // now rest is set to the post-host stuff.
  // chop off any delim chars.
  if (!unsafeProtocol[lowerProto]) {

    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1)
        continue;
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }


  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);
    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    this.search = '';
    this.query = {};
  }
  if (rest) this.pathname = rest;
  if (slashedProtocol[lowerProto] &&
      this.hostname && !this.pathname) {
    this.pathname = '/';
  }

  //to support http.request
  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  }

  // finally, reconstruct the href based on what has been validated.
  this.href = this.format();
  return this;
};

// format a parsed object into a url string
function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (util.isString(obj)) obj = urlParse(obj);
  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
  return obj.format();
}

Url.prototype.format = function() {
  var auth = this.auth || '';
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ?
        this.hostname :
        '[' + this.hostname + ']');
    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query &&
      util.isObject(this.query) &&
      Object.keys(this.query).length) {
    query = querystring.stringify(this.query);
  }

  var search = this.search || (query && ('?' + query)) || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.
  if (this.slashes ||
      (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  pathname = pathname.replace(/[?#]/g, function(match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');

  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function(relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function(relative) {
  if (util.isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  var tkeys = Object.keys(this);
  for (var tk = 0; tk < tkeys.length; tk++) {
    var tkey = tkeys[tk];
    result[tkey] = this[tkey];
  }

  // hash is always overridden, no matter what.
  // even href="" will remove it.
  result.hash = relative.hash;

  // if the relative url is empty, then there's nothing left to do here.
  if (relative.href === '') {
    result.href = result.format();
    return result;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    var rkeys = Object.keys(relative);
    for (var rk = 0; rk < rkeys.length; rk++) {
      var rkey = rkeys[rk];
      if (rkey !== 'protocol')
        result[rkey] = relative[rkey];
    }

    //urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[result.protocol] &&
        result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      var keys = Object.keys(relative);
      for (var v = 0; v < keys.length; v++) {
        var k = keys[v];
        result[k] = relative[k];
      }
      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift()));
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }
    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port;
    // to support http.request
    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
      isRelAbs = (
          relative.host ||
          relative.pathname && relative.pathname.charAt(0) === '/'
      ),
      mustEndAbs = (isRelAbs || isSourceAbs ||
                    (result.host && relative.pathname)),
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol];

  // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // result.protocol has already been set by now.
  // Later on, put the first path part into the host field.
  if (psychotic) {
    result.hostname = '';
    result.port = null;
    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;
      else srcPath.unshift(result.host);
    }
    result.host = '';
    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;
        else relPath.unshift(relative.host);
      }
      relative.host = null;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    result.host = (relative.host || relative.host === '') ?
                  relative.host : result.host;
    result.hostname = (relative.hostname || relative.hostname === '') ?
                      relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!util.isNullOrUndefined(relative.search)) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      result.hostname = result.host = srcPath.shift();
      //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ?
                       result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    result.search = relative.search;
    result.query = relative.query;
    //to support http.request
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') +
                    (result.search ? result.search : '');
    }
    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    result.pathname = null;
    //to support http.request
    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }
    result.href = result.format();
    return result;
  }

  // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (
      (result.host || relative.host || srcPath.length > 1) &&
      (last === '.' || last === '..') || last === '');

  // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last === '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' &&
      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' ||
      (srcPath[0] && srcPath[0].charAt(0) === '/');

  // put the host back
  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' :
                                    srcPath.length ? srcPath.shift() : '';
    //occationaly the auth can get stuck only in host
    //this especially happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
    var authInHost = result.host && result.host.indexOf('@') > 0 ?
                     result.host.split('@') : false;
    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  }

  //to support request.http
  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') +
                  (result.search ? result.search : '');
  }
  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function() {
  var host = this.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) this.hostname = host;
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/punycode v1.4.1 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports = typeof exports == 'object' && exports &&
		!exports.nodeType && exports;
	var freeModule = typeof module == 'object' && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw new RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.4.1',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return punycode;
		}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (freeExports && freeModule) {
		if (module.exports == freeExports) {
			// in Node.js, io.js, or RingoJS v0.8.0+
			freeModule.exports = punycode;
		} else {
			// in Narwhal or RingoJS v0.7.0-
			for (key in punycode) {
				punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
			}
		}
	} else {
		// in Rhino or a web browser
		root.punycode = punycode;
	}

}(this));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(99)(module), __webpack_require__(35)))

/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  isString: function(arg) {
    return typeof(arg) === 'string';
  },
  isObject: function(arg) {
    return typeof(arg) === 'object' && arg !== null;
  },
  isNull: function(arg) {
    return arg === null;
  },
  isNullOrUndefined: function(arg) {
    return arg == null;
  }
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(102);
exports.encode = exports.stringify = __webpack_require__(103);


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseTexture2 = __webpack_require__(21);

var _BaseTexture3 = _interopRequireDefault(_BaseTexture2);

var _utils = __webpack_require__(13);

var _ticker = __webpack_require__(32);

var _const = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A texture of a [playing] Video.
 *
 * Video base textures mimic PixiJS BaseTexture.from.... method in their creation process.
 *
 * This can be used in several ways, such as:
 *
 * ```js
 * let texture = PIXI.VideoBaseTexture.fromUrl('http://mydomain.com/video.mp4');
 *
 * let texture = PIXI.VideoBaseTexture.fromUrl({ src: 'http://mydomain.com/video.mp4', mime: 'video/mp4' });
 *
 * let texture = PIXI.VideoBaseTexture.fromUrls(['/video.webm', '/video.mp4']);
 *
 * let texture = PIXI.VideoBaseTexture.fromUrls([
 *     { src: '/video.webm', mime: 'video/webm' },
 *     { src: '/video.mp4', mime: 'video/mp4' }
 * ]);
 * ```
 *
 * See the ["deus" demo](http://www.goodboydigital.com/pixijs/examples/deus/).
 *
 * @class
 * @extends PIXI.BaseTexture
 * @memberof PIXI
 */
var VideoBaseTexture = function (_BaseTexture) {
    _inherits(VideoBaseTexture, _BaseTexture);

    /**
     * @param {HTMLVideoElement} source - Video source
     * @param {number} [scaleMode=PIXI.settings.SCALE_MODE] - See {@link PIXI.SCALE_MODES} for possible values
     */
    function VideoBaseTexture(source, scaleMode) {
        _classCallCheck(this, VideoBaseTexture);

        if (!source) {
            throw new Error('No video source element specified.');
        }

        // hook in here to check if video is already available.
        // BaseTexture looks for a source.complete boolean, plus width & height.

        if ((source.readyState === source.HAVE_ENOUGH_DATA || source.readyState === source.HAVE_FUTURE_DATA) && source.width && source.height) {
            source.complete = true;
        }

        var _this = _possibleConstructorReturn(this, _BaseTexture.call(this, source, scaleMode));

        _this.width = source.videoWidth;
        _this.height = source.videoHeight;

        _this._autoUpdate = true;
        _this._isAutoUpdating = false;

        /**
         * When set to true will automatically play videos used by this texture once
         * they are loaded. If false, it will not modify the playing state.
         *
         * @member {boolean}
         * @default true
         */
        _this.autoPlay = true;

        _this.update = _this.update.bind(_this);
        _this._onCanPlay = _this._onCanPlay.bind(_this);

        source.addEventListener('play', _this._onPlayStart.bind(_this));
        source.addEventListener('pause', _this._onPlayStop.bind(_this));
        _this.hasLoaded = false;
        _this.__loaded = false;

        if (!_this._isSourceReady()) {
            source.addEventListener('canplay', _this._onCanPlay);
            source.addEventListener('canplaythrough', _this._onCanPlay);
        } else {
            _this._onCanPlay();
        }
        return _this;
    }

    /**
     * Returns true if the underlying source is playing.
     *
     * @private
     * @return {boolean} True if playing.
     */


    VideoBaseTexture.prototype._isSourcePlaying = function _isSourcePlaying() {
        var source = this.source;

        return source.currentTime > 0 && source.paused === false && source.ended === false && source.readyState > 2;
    };

    /**
     * Returns true if the underlying source is ready for playing.
     *
     * @private
     * @return {boolean} True if ready.
     */


    VideoBaseTexture.prototype._isSourceReady = function _isSourceReady() {
        return this.source.readyState === 3 || this.source.readyState === 4;
    };

    /**
     * Runs the update loop when the video is ready to play
     *
     * @private
     */


    VideoBaseTexture.prototype._onPlayStart = function _onPlayStart() {
        // Just in case the video has not received its can play even yet..
        if (!this.hasLoaded) {
            this._onCanPlay();
        }

        if (!this._isAutoUpdating && this.autoUpdate) {
            _ticker.shared.add(this.update, this, _const.UPDATE_PRIORITY.HIGH);
            this._isAutoUpdating = true;
        }
    };

    /**
     * Fired when a pause event is triggered, stops the update loop
     *
     * @private
     */


    VideoBaseTexture.prototype._onPlayStop = function _onPlayStop() {
        if (this._isAutoUpdating) {
            _ticker.shared.remove(this.update, this);
            this._isAutoUpdating = false;
        }
    };

    /**
     * Fired when the video is loaded and ready to play
     *
     * @private
     */


    VideoBaseTexture.prototype._onCanPlay = function _onCanPlay() {
        this.hasLoaded = true;

        if (this.source) {
            this.source.removeEventListener('canplay', this._onCanPlay);
            this.source.removeEventListener('canplaythrough', this._onCanPlay);

            this.width = this.source.videoWidth;
            this.height = this.source.videoHeight;

            // prevent multiple loaded dispatches..
            if (!this.__loaded) {
                this.__loaded = true;
                this.emit('loaded', this);
            }

            if (this._isSourcePlaying()) {
                this._onPlayStart();
            } else if (this.autoPlay) {
                this.source.play();
            }
        }
    };

    /**
     * Destroys this texture
     *
     */


    VideoBaseTexture.prototype.destroy = function destroy() {
        if (this._isAutoUpdating) {
            _ticker.shared.remove(this.update, this);
        }

        if (this.source && this.source._pixiId) {
            _BaseTexture3.default.removeFromCache(this.source._pixiId);
            delete this.source._pixiId;
        }

        _BaseTexture.prototype.destroy.call(this);
    };

    /**
     * Mimic PixiJS BaseTexture.from.... method.
     *
     * @static
     * @param {HTMLVideoElement} video - Video to create texture from
     * @param {number} [scaleMode=PIXI.settings.SCALE_MODE] - See {@link PIXI.SCALE_MODES} for possible values
     * @return {PIXI.VideoBaseTexture} Newly created VideoBaseTexture
     */


    VideoBaseTexture.fromVideo = function fromVideo(video, scaleMode) {
        if (!video._pixiId) {
            video._pixiId = 'video_' + (0, _utils.uid)();
        }

        var baseTexture = _utils.BaseTextureCache[video._pixiId];

        if (!baseTexture) {
            baseTexture = new VideoBaseTexture(video, scaleMode);
            _BaseTexture3.default.addToCache(baseTexture, video._pixiId);
        }

        return baseTexture;
    };

    /**
     * Helper function that creates a new BaseTexture based on the given video element.
     * This BaseTexture can then be used to create a texture
     *
     * @static
     * @param {string|object|string[]|object[]} videoSrc - The URL(s) for the video.
     * @param {string} [videoSrc.src] - One of the source urls for the video
     * @param {string} [videoSrc.mime] - The mimetype of the video (e.g. 'video/mp4'). If not specified
     *  the url's extension will be used as the second part of the mime type.
     * @param {number} scaleMode - See {@link PIXI.SCALE_MODES} for possible values
     * @return {PIXI.VideoBaseTexture} Newly created VideoBaseTexture
     */


    VideoBaseTexture.fromUrl = function fromUrl(videoSrc, scaleMode) {
        var video = document.createElement('video');

        video.setAttribute('webkit-playsinline', '');
        video.setAttribute('playsinline', '');

        // array of objects or strings
        if (Array.isArray(videoSrc)) {
            for (var i = 0; i < videoSrc.length; ++i) {
                video.appendChild(createSource(videoSrc[i].src || videoSrc[i], videoSrc[i].mime));
            }
        }
        // single object or string
        else {
                video.appendChild(createSource(videoSrc.src || videoSrc, videoSrc.mime));
            }

        video.load();

        return VideoBaseTexture.fromVideo(video, scaleMode);
    };

    /**
     * Should the base texture automatically update itself, set to true by default
     *
     * @member {boolean}
     */


    _createClass(VideoBaseTexture, [{
        key: 'autoUpdate',
        get: function get() {
            return this._autoUpdate;
        },
        set: function set(value) // eslint-disable-line require-jsdoc
        {
            if (value !== this._autoUpdate) {
                this._autoUpdate = value;

                if (!this._autoUpdate && this._isAutoUpdating) {
                    _ticker.shared.remove(this.update, this);
                    this._isAutoUpdating = false;
                } else if (this._autoUpdate && !this._isAutoUpdating) {
                    _ticker.shared.add(this.update, this, _const.UPDATE_PRIORITY.HIGH);
                    this._isAutoUpdating = true;
                }
            }
        }
    }]);

    return VideoBaseTexture;
}(_BaseTexture3.default);

exports.default = VideoBaseTexture;


VideoBaseTexture.fromUrls = VideoBaseTexture.fromUrl;

function createSource(path, type) {
    if (!type) {
        type = 'video/' + path.substr(path.lastIndexOf('.') + 1);
    }

    var source = document.createElement('source');

    source.src = path;
    source.type = type;

    return source;
}
//# sourceMappingURL=VideoBaseTexture.js.map

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _settings = __webpack_require__(15);

var _settings2 = _interopRequireDefault(_settings);

var _const = __webpack_require__(12);

var _TickerListener = __webpack_require__(106);

var _TickerListener2 = _interopRequireDefault(_TickerListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * A Ticker class that runs an update loop that other objects listen to.
 * This class is composed around listeners
 * meant for execution on the next requested animation frame.
 * Animation frames are requested only when necessary,
 * e.g. When the ticker is started and the emitter has listeners.
 *
 * @class
 * @memberof PIXI.ticker
 */
var Ticker = function () {
    /**
     *
     */
    function Ticker() {
        var _this = this;

        _classCallCheck(this, Ticker);

        /**
         * The first listener. All new listeners added are chained on this.
         * @private
         * @type {TickerListener}
         */
        this._head = new _TickerListener2.default(null, null, Infinity);

        /**
         * Internal current frame request ID
         * @private
         */
        this._requestId = null;

        /**
         * Internal value managed by minFPS property setter and getter.
         * This is the maximum allowed milliseconds between updates.
         * @private
         */
        this._maxElapsedMS = 100;

        /**
         * Whether or not this ticker should invoke the method
         * {@link PIXI.ticker.Ticker#start} automatically
         * when a listener is added.
         *
         * @member {boolean}
         * @default false
         */
        this.autoStart = false;

        /**
         * Scalar time value from last frame to this frame.
         * This value is capped by setting {@link PIXI.ticker.Ticker#minFPS}
         * and is scaled with {@link PIXI.ticker.Ticker#speed}.
         * **Note:** The cap may be exceeded by scaling.
         *
         * @member {number}
         * @default 1
         */
        this.deltaTime = 1;

        /**
         * Time elapsed in milliseconds from last frame to this frame.
         * Opposed to what the scalar {@link PIXI.ticker.Ticker#deltaTime}
         * is based, this value is neither capped nor scaled.
         * If the platform supports DOMHighResTimeStamp,
         * this value will have a precision of 1 µs.
         * Defaults to target frame time
         *
         * @member {number}
         * @default 16.66
         */
        this.elapsedMS = 1 / _settings2.default.TARGET_FPMS;

        /**
         * The last time {@link PIXI.ticker.Ticker#update} was invoked.
         * This value is also reset internally outside of invoking
         * update, but only when a new animation frame is requested.
         * If the platform supports DOMHighResTimeStamp,
         * this value will have a precision of 1 µs.
         *
         * @member {number}
         * @default 0
         */
        this.lastTime = 0;

        /**
         * Factor of current {@link PIXI.ticker.Ticker#deltaTime}.
         * @example
         * // Scales ticker.deltaTime to what would be
         * // the equivalent of approximately 120 FPS
         * ticker.speed = 2;
         *
         * @member {number}
         * @default 1
         */
        this.speed = 1;

        /**
         * Whether or not this ticker has been started.
         * `true` if {@link PIXI.ticker.Ticker#start} has been called.
         * `false` if {@link PIXI.ticker.Ticker#stop} has been called.
         * While `false`, this value may change to `true` in the
         * event of {@link PIXI.ticker.Ticker#autoStart} being `true`
         * and a listener is added.
         *
         * @member {boolean}
         * @default false
         */
        this.started = false;

        /**
         * Internal tick method bound to ticker instance.
         * This is because in early 2015, Function.bind
         * is still 60% slower in high performance scenarios.
         * Also separating frame requests from update method
         * so listeners may be called at any time and with
         * any animation API, just invoke ticker.update(time).
         *
         * @private
         * @param {number} time - Time since last tick.
         */
        this._tick = function (time) {
            _this._requestId = null;

            if (_this.started) {
                // Invoke listeners now
                _this.update(time);
                // Listener side effects may have modified ticker state.
                if (_this.started && _this._requestId === null && _this._head.next) {
                    _this._requestId = requestAnimationFrame(_this._tick);
                }
            }
        };
    }

    /**
     * Conditionally requests a new animation frame.
     * If a frame has not already been requested, and if the internal
     * emitter has listeners, a new frame is requested.
     *
     * @private
     */


    Ticker.prototype._requestIfNeeded = function _requestIfNeeded() {
        if (this._requestId === null && this._head.next) {
            // ensure callbacks get correct delta
            this.lastTime = performance.now();
            this._requestId = requestAnimationFrame(this._tick);
        }
    };

    /**
     * Conditionally cancels a pending animation frame.
     *
     * @private
     */


    Ticker.prototype._cancelIfNeeded = function _cancelIfNeeded() {
        if (this._requestId !== null) {
            cancelAnimationFrame(this._requestId);
            this._requestId = null;
        }
    };

    /**
     * Conditionally requests a new animation frame.
     * If the ticker has been started it checks if a frame has not already
     * been requested, and if the internal emitter has listeners. If these
     * conditions are met, a new frame is requested. If the ticker has not
     * been started, but autoStart is `true`, then the ticker starts now,
     * and continues with the previous conditions to request a new frame.
     *
     * @private
     */


    Ticker.prototype._startIfPossible = function _startIfPossible() {
        if (this.started) {
            this._requestIfNeeded();
        } else if (this.autoStart) {
            this.start();
        }
    };

    /**
     * Register a handler for tick events. Calls continuously unless
     * it is removed or the ticker is stopped.
     *
     * @param {Function} fn - The listener function to be added for updates
     * @param {Function} [context] - The listener context
     * @param {number} [priority=PIXI.UPDATE_PRIORITY.NORMAL] - The priority for emitting
     * @returns {PIXI.ticker.Ticker} This instance of a ticker
     */


    Ticker.prototype.add = function add(fn, context) {
        var priority = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _const.UPDATE_PRIORITY.NORMAL;

        return this._addListener(new _TickerListener2.default(fn, context, priority));
    };

    /**
     * Add a handler for the tick event which is only execute once.
     *
     * @param {Function} fn - The listener function to be added for one update
     * @param {Function} [context] - The listener context
     * @param {number} [priority=PIXI.UPDATE_PRIORITY.NORMAL] - The priority for emitting
     * @returns {PIXI.ticker.Ticker} This instance of a ticker
     */


    Ticker.prototype.addOnce = function addOnce(fn, context) {
        var priority = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _const.UPDATE_PRIORITY.NORMAL;

        return this._addListener(new _TickerListener2.default(fn, context, priority, true));
    };

    /**
     * Internally adds the event handler so that it can be sorted by priority.
     * Priority allows certain handler (user, AnimatedSprite, Interaction) to be run
     * before the rendering.
     *
     * @private
     * @param {TickerListener} listener - Current listener being added.
     * @returns {PIXI.ticker.Ticker} This instance of a ticker
     */


    Ticker.prototype._addListener = function _addListener(listener) {
        // For attaching to head
        var current = this._head.next;
        var previous = this._head;

        // Add the first item
        if (!current) {
            listener.connect(previous);
        } else {
            // Go from highest to lowest priority
            while (current) {
                if (listener.priority > current.priority) {
                    listener.connect(previous);
                    break;
                }
                previous = current;
                current = current.next;
            }

            // Not yet connected
            if (!listener.previous) {
                listener.connect(previous);
            }
        }

        this._startIfPossible();

        return this;
    };

    /**
     * Removes any handlers matching the function and context parameters.
     * If no handlers are left after removing, then it cancels the animation frame.
     *
     * @param {Function} fn - The listener function to be removed
     * @param {Function} [context] - The listener context to be removed
     * @returns {PIXI.ticker.Ticker} This instance of a ticker
     */


    Ticker.prototype.remove = function remove(fn, context) {
        var listener = this._head.next;

        while (listener) {
            // We found a match, lets remove it
            // no break to delete all possible matches
            // incase a listener was added 2+ times
            if (listener.match(fn, context)) {
                listener = listener.destroy();
            } else {
                listener = listener.next;
            }
        }

        if (!this._head.next) {
            this._cancelIfNeeded();
        }

        return this;
    };

    /**
     * Starts the ticker. If the ticker has listeners
     * a new animation frame is requested at this point.
     */


    Ticker.prototype.start = function start() {
        if (!this.started) {
            this.started = true;
            this._requestIfNeeded();
        }
    };

    /**
     * Stops the ticker. If the ticker has requested
     * an animation frame it is canceled at this point.
     */


    Ticker.prototype.stop = function stop() {
        if (this.started) {
            this.started = false;
            this._cancelIfNeeded();
        }
    };

    /**
     * Destroy the ticker and don't use after this. Calling
     * this method removes all references to internal events.
     */


    Ticker.prototype.destroy = function destroy() {
        this.stop();

        var listener = this._head.next;

        while (listener) {
            listener = listener.destroy(true);
        }

        this._head.destroy();
        this._head = null;
    };

    /**
     * Triggers an update. An update entails setting the
     * current {@link PIXI.ticker.Ticker#elapsedMS},
     * the current {@link PIXI.ticker.Ticker#deltaTime},
     * invoking all listeners with current deltaTime,
     * and then finally setting {@link PIXI.ticker.Ticker#lastTime}
     * with the value of currentTime that was provided.
     * This method will be called automatically by animation
     * frame callbacks if the ticker instance has been started
     * and listeners are added.
     *
     * @param {number} [currentTime=performance.now()] - the current time of execution
     */


    Ticker.prototype.update = function update() {
        var currentTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : performance.now();

        var elapsedMS = void 0;

        // If the difference in time is zero or negative, we ignore most of the work done here.
        // If there is no valid difference, then should be no reason to let anyone know about it.
        // A zero delta, is exactly that, nothing should update.
        //
        // The difference in time can be negative, and no this does not mean time traveling.
        // This can be the result of a race condition between when an animation frame is requested
        // on the current JavaScript engine event loop, and when the ticker's start method is invoked
        // (which invokes the internal _requestIfNeeded method). If a frame is requested before
        // _requestIfNeeded is invoked, then the callback for the animation frame the ticker requests,
        // can receive a time argument that can be less than the lastTime value that was set within
        // _requestIfNeeded. This difference is in microseconds, but this is enough to cause problems.
        //
        // This check covers this browser engine timing issue, as well as if consumers pass an invalid
        // currentTime value. This may happen if consumers opt-out of the autoStart, and update themselves.

        if (currentTime > this.lastTime) {
            // Save uncapped elapsedMS for measurement
            elapsedMS = this.elapsedMS = currentTime - this.lastTime;

            // cap the milliseconds elapsed used for deltaTime
            if (elapsedMS > this._maxElapsedMS) {
                elapsedMS = this._maxElapsedMS;
            }

            this.deltaTime = elapsedMS * _settings2.default.TARGET_FPMS * this.speed;

            // Cache a local reference, in-case ticker is destroyed
            // during the emit, we can still check for head.next
            var head = this._head;

            // Invoke listeners added to internal emitter
            var listener = head.next;

            while (listener) {
                listener = listener.emit(this.deltaTime);
            }

            if (!head.next) {
                this._cancelIfNeeded();
            }
        } else {
            this.deltaTime = this.elapsedMS = 0;
        }

        this.lastTime = currentTime;
    };

    /**
     * The frames per second at which this ticker is running.
     * The default is approximately 60 in most modern browsers.
     * **Note:** This does not factor in the value of
     * {@link PIXI.ticker.Ticker#speed}, which is specific
     * to scaling {@link PIXI.ticker.Ticker#deltaTime}.
     *
     * @member {number}
     * @readonly
     */


    _createClass(Ticker, [{
        key: 'FPS',
        get: function get() {
            return 1000 / this.elapsedMS;
        }

        /**
         * Manages the maximum amount of milliseconds allowed to
         * elapse between invoking {@link PIXI.ticker.Ticker#update}.
         * This value is used to cap {@link PIXI.ticker.Ticker#deltaTime},
         * but does not effect the measured value of {@link PIXI.ticker.Ticker#FPS}.
         * When setting this property it is clamped to a value between
         * `0` and `PIXI.settings.TARGET_FPMS * 1000`.
         *
         * @member {number}
         * @default 10
         */

    }, {
        key: 'minFPS',
        get: function get() {
            return 1000 / this._maxElapsedMS;
        },
        set: function set(fps) // eslint-disable-line require-jsdoc
        {
            // Clamp: 0 to TARGET_FPMS
            var minFPMS = Math.min(Math.max(0, fps) / 1000, _settings2.default.TARGET_FPMS);

            this._maxElapsedMS = 1 / minFPMS;
        }
    }]);

    return Ticker;
}();

exports.default = Ticker;
//# sourceMappingURL=Ticker.js.map

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Internal class for handling the priority sorting of ticker handlers.
 *
 * @private
 * @class
 * @memberof PIXI.ticker
 */
var TickerListener = function () {
    /**
     * Constructor
     *
     * @param {Function} fn - The listener function to be added for one update
     * @param {Function} [context=null] - The listener context
     * @param {number} [priority=0] - The priority for emitting
     * @param {boolean} [once=false] - If the handler should fire once
     */
    function TickerListener(fn) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var priority = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var once = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        _classCallCheck(this, TickerListener);

        /**
         * The handler function to execute.
         * @member {Function}
         */
        this.fn = fn;

        /**
         * The calling to execute.
         * @member {Function}
         */
        this.context = context;

        /**
         * The current priority.
         * @member {number}
         */
        this.priority = priority;

        /**
         * If this should only execute once.
         * @member {boolean}
         */
        this.once = once;

        /**
         * The next item in chain.
         * @member {TickerListener}
         */
        this.next = null;

        /**
         * The previous item in chain.
         * @member {TickerListener}
         */
        this.previous = null;

        /**
         * `true` if this listener has been destroyed already.
         * @member {boolean}
         * @private
         */
        this._destroyed = false;
    }

    /**
     * Simple compare function to figure out if a function and context match.
     *
     * @param {Function} fn - The listener function to be added for one update
     * @param {Function} context - The listener context
     * @return {boolean} `true` if the listener match the arguments
     */


    TickerListener.prototype.match = function match(fn, context) {
        context = context || null;

        return this.fn === fn && this.context === context;
    };

    /**
     * Emit by calling the current function.
     * @param {number} deltaTime - time since the last emit.
     * @return {TickerListener} Next ticker
     */


    TickerListener.prototype.emit = function emit(deltaTime) {
        if (this.fn) {
            if (this.context) {
                this.fn.call(this.context, deltaTime);
            } else {
                this.fn(deltaTime);
            }
        }

        var redirect = this.next;

        if (this.once) {
            this.destroy(true);
        }

        // Soft-destroying should remove
        // the next reference
        if (this._destroyed) {
            this.next = null;
        }

        return redirect;
    };

    /**
     * Connect to the list.
     * @param {TickerListener} previous - Input node, previous listener
     */


    TickerListener.prototype.connect = function connect(previous) {
        this.previous = previous;
        if (previous.next) {
            previous.next.previous = this;
        }
        this.next = previous.next;
        previous.next = this;
    };

    /**
     * Destroy and don't use after this.
     * @param {boolean} [hard = false] `true` to remove the `next` reference, this
     *        is considered a hard destroy. Soft destroy maintains the next reference.
     * @return {TickerListener} The listener to redirect while emitting or removing.
     */


    TickerListener.prototype.destroy = function destroy() {
        var hard = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        this._destroyed = true;
        this.fn = null;
        this.context = null;

        // Disconnect, hook up next and previous
        if (this.previous) {
            this.previous.next = this.next;
        }

        if (this.next) {
            this.next.previous = this.previous;
        }

        // Redirect to the next item
        var redirect = this.previous;

        // Remove references
        this.next = hard ? null : redirect;
        this.previous = null;

        return redirect;
    };

    return TickerListener;
}();

exports.default = TickerListener;
//# sourceMappingURL=TickerListener.js.map

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _GroupD = __webpack_require__(37);

var _GroupD2 = _interopRequireDefault(_GroupD);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * A standard object to store the Uvs of a texture
 *
 * @class
 * @private
 * @memberof PIXI
 */
var TextureUvs = function () {
    /**
     *
     */
    function TextureUvs() {
        _classCallCheck(this, TextureUvs);

        this.x0 = 0;
        this.y0 = 0;

        this.x1 = 1;
        this.y1 = 0;

        this.x2 = 1;
        this.y2 = 1;

        this.x3 = 0;
        this.y3 = 1;

        this.uvsUint32 = new Uint32Array(4);
    }

    /**
     * Sets the texture Uvs based on the given frame information.
     *
     * @private
     * @param {PIXI.Rectangle} frame - The frame of the texture
     * @param {PIXI.Rectangle} baseFrame - The base frame of the texture
     * @param {number} rotate - Rotation of frame, see {@link PIXI.GroupD8}
     */


    TextureUvs.prototype.set = function set(frame, baseFrame, rotate) {
        var tw = baseFrame.width;
        var th = baseFrame.height;

        if (rotate) {
            // width and height div 2 div baseFrame size
            var w2 = frame.width / 2 / tw;
            var h2 = frame.height / 2 / th;

            // coordinates of center
            var cX = frame.x / tw + w2;
            var cY = frame.y / th + h2;

            rotate = _GroupD2.default.add(rotate, _GroupD2.default.NW); // NW is top-left corner
            this.x0 = cX + w2 * _GroupD2.default.uX(rotate);
            this.y0 = cY + h2 * _GroupD2.default.uY(rotate);

            rotate = _GroupD2.default.add(rotate, 2); // rotate 90 degrees clockwise
            this.x1 = cX + w2 * _GroupD2.default.uX(rotate);
            this.y1 = cY + h2 * _GroupD2.default.uY(rotate);

            rotate = _GroupD2.default.add(rotate, 2);
            this.x2 = cX + w2 * _GroupD2.default.uX(rotate);
            this.y2 = cY + h2 * _GroupD2.default.uY(rotate);

            rotate = _GroupD2.default.add(rotate, 2);
            this.x3 = cX + w2 * _GroupD2.default.uX(rotate);
            this.y3 = cY + h2 * _GroupD2.default.uY(rotate);
        } else {
            this.x0 = frame.x / tw;
            this.y0 = frame.y / th;

            this.x1 = (frame.x + frame.width) / tw;
            this.y1 = frame.y / th;

            this.x2 = (frame.x + frame.width) / tw;
            this.y2 = (frame.y + frame.height) / th;

            this.x3 = frame.x / tw;
            this.y3 = (frame.y + frame.height) / th;
        }

        this.uvsUint32[0] = (this.y0 * 65535 & 0xFFFF) << 16 | this.x0 * 65535 & 0xFFFF;
        this.uvsUint32[1] = (this.y1 * 65535 & 0xFFFF) << 16 | this.x1 * 65535 & 0xFFFF;
        this.uvsUint32[2] = (this.y2 * 65535 & 0xFFFF) << 16 | this.x2 * 65535 & 0xFFFF;
        this.uvsUint32[3] = (this.y3 * 65535 & 0xFFFF) << 16 | this.x3 * 65535 & 0xFFFF;
    };

    return TextureUvs;
}();

exports.default = TextureUvs;
//# sourceMappingURL=TextureUvs.js.map

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _math = __webpack_require__(14);

var _utils = __webpack_require__(13);

var _const = __webpack_require__(12);

var _Texture = __webpack_require__(31);

var _Texture2 = _interopRequireDefault(_Texture);

var _Container2 = __webpack_require__(19);

var _Container3 = _interopRequireDefault(_Container2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var tempPoint = new _math.Point();

/**
 * The Sprite object is the base for all textured objects that are rendered to the screen
 *
 * A sprite can be created directly from an image like this:
 *
 * ```js
 * let sprite = new PIXI.Sprite.fromImage('assets/image.png');
 * ```
 *
 * @class
 * @extends PIXI.Container
 * @memberof PIXI
 */

var Sprite = function (_Container) {
    _inherits(Sprite, _Container);

    /**
     * @param {PIXI.Texture} texture - The texture for this sprite
     */
    function Sprite(texture) {
        _classCallCheck(this, Sprite);

        /**
         * The anchor sets the origin point of the texture.
         * The default is 0,0 this means the texture's origin is the top left
         * Setting the anchor to 0.5,0.5 means the texture's origin is centered
         * Setting the anchor to 1,1 would mean the texture's origin point will be the bottom right corner
         *
         * @member {PIXI.ObservablePoint}
         * @private
         */
        var _this = _possibleConstructorReturn(this, _Container.call(this));

        _this._anchor = new _math.ObservablePoint(_this._onAnchorUpdate, _this);

        /**
         * The texture that the sprite is using
         *
         * @private
         * @member {PIXI.Texture}
         */
        _this._texture = null;

        /**
         * The width of the sprite (this is initially set by the texture)
         *
         * @private
         * @member {number}
         */
        _this._width = 0;

        /**
         * The height of the sprite (this is initially set by the texture)
         *
         * @private
         * @member {number}
         */
        _this._height = 0;

        /**
         * The tint applied to the sprite. This is a hex value. A value of 0xFFFFFF will remove any tint effect.
         *
         * @private
         * @member {number}
         * @default 0xFFFFFF
         */
        _this._tint = null;
        _this._tintRGB = null;
        _this.tint = 0xFFFFFF;

        /**
         * The blend mode to be applied to the sprite. Apply a value of `PIXI.BLEND_MODES.NORMAL` to reset the blend mode.
         *
         * @member {number}
         * @default PIXI.BLEND_MODES.NORMAL
         * @see PIXI.BLEND_MODES
         */
        _this.blendMode = _const.BLEND_MODES.NORMAL;

        /**
         * The shader that will be used to render the sprite. Set to null to remove a current shader.
         *
         * @member {PIXI.Filter|PIXI.Shader}
         */
        _this.shader = null;

        /**
         * An internal cached value of the tint.
         *
         * @private
         * @member {number}
         * @default 0xFFFFFF
         */
        _this.cachedTint = 0xFFFFFF;

        // call texture setter
        _this.texture = texture || _Texture2.default.EMPTY;

        /**
         * this is used to store the vertex data of the sprite (basically a quad)
         *
         * @private
         * @member {Float32Array}
         */
        _this.vertexData = new Float32Array(8);

        /**
         * This is used to calculate the bounds of the object IF it is a trimmed sprite
         *
         * @private
         * @member {Float32Array}
         */
        _this.vertexTrimmedData = null;

        _this._transformID = -1;
        _this._textureID = -1;

        _this._transformTrimmedID = -1;
        _this._textureTrimmedID = -1;

        /**
         * Plugin that is responsible for rendering this element.
         * Allows to customize the rendering process without overriding '_renderWebGL' & '_renderCanvas' methods.
         *
         * @member {string}
         * @default 'sprite'
         */
        _this.pluginName = 'sprite';
        return _this;
    }

    /**
     * When the texture is updated, this event will fire to update the scale and frame
     *
     * @private
     */


    Sprite.prototype._onTextureUpdate = function _onTextureUpdate() {
        this._textureID = -1;
        this._textureTrimmedID = -1;

        // so if _width is 0 then width was not set..
        if (this._width) {
            this.scale.x = (0, _utils.sign)(this.scale.x) * this._width / this._texture.orig.width;
        }

        if (this._height) {
            this.scale.y = (0, _utils.sign)(this.scale.y) * this._height / this._texture.orig.height;
        }
    };

    /**
     * Called when the anchor position updates.
     *
     * @private
     */


    Sprite.prototype._onAnchorUpdate = function _onAnchorUpdate() {
        this._transformID = -1;
        this._transformTrimmedID = -1;
    };

    /**
     * calculates worldTransform * vertices, store it in vertexData
     */


    Sprite.prototype.calculateVertices = function calculateVertices() {
        if (this._transformID === this.transform._worldID && this._textureID === this._texture._updateID) {
            return;
        }

        this._transformID = this.transform._worldID;
        this._textureID = this._texture._updateID;

        // set the vertex data

        var texture = this._texture;
        var wt = this.transform.worldTransform;
        var a = wt.a;
        var b = wt.b;
        var c = wt.c;
        var d = wt.d;
        var tx = wt.tx;
        var ty = wt.ty;
        var vertexData = this.vertexData;
        var trim = texture.trim;
        var orig = texture.orig;
        var anchor = this._anchor;

        var w0 = 0;
        var w1 = 0;
        var h0 = 0;
        var h1 = 0;

        if (trim) {
            // if the sprite is trimmed and is not a tilingsprite then we need to add the extra
            // space before transforming the sprite coords.
            w1 = trim.x - anchor._x * orig.width;
            w0 = w1 + trim.width;

            h1 = trim.y - anchor._y * orig.height;
            h0 = h1 + trim.height;
        } else {
            w1 = -anchor._x * orig.width;
            w0 = w1 + orig.width;

            h1 = -anchor._y * orig.height;
            h0 = h1 + orig.height;
        }

        // xy
        vertexData[0] = a * w1 + c * h1 + tx;
        vertexData[1] = d * h1 + b * w1 + ty;

        // xy
        vertexData[2] = a * w0 + c * h1 + tx;
        vertexData[3] = d * h1 + b * w0 + ty;

        // xy
        vertexData[4] = a * w0 + c * h0 + tx;
        vertexData[5] = d * h0 + b * w0 + ty;

        // xy
        vertexData[6] = a * w1 + c * h0 + tx;
        vertexData[7] = d * h0 + b * w1 + ty;
    };

    /**
     * calculates worldTransform * vertices for a non texture with a trim. store it in vertexTrimmedData
     * This is used to ensure that the true width and height of a trimmed texture is respected
     */


    Sprite.prototype.calculateTrimmedVertices = function calculateTrimmedVertices() {
        if (!this.vertexTrimmedData) {
            this.vertexTrimmedData = new Float32Array(8);
        } else if (this._transformTrimmedID === this.transform._worldID && this._textureTrimmedID === this._texture._updateID) {
            return;
        }

        this._transformTrimmedID = this.transform._worldID;
        this._textureTrimmedID = this._texture._updateID;

        // lets do some special trim code!
        var texture = this._texture;
        var vertexData = this.vertexTrimmedData;
        var orig = texture.orig;
        var anchor = this._anchor;

        // lets calculate the new untrimmed bounds..
        var wt = this.transform.worldTransform;
        var a = wt.a;
        var b = wt.b;
        var c = wt.c;
        var d = wt.d;
        var tx = wt.tx;
        var ty = wt.ty;

        var w1 = -anchor._x * orig.width;
        var w0 = w1 + orig.width;

        var h1 = -anchor._y * orig.height;
        var h0 = h1 + orig.height;

        // xy
        vertexData[0] = a * w1 + c * h1 + tx;
        vertexData[1] = d * h1 + b * w1 + ty;

        // xy
        vertexData[2] = a * w0 + c * h1 + tx;
        vertexData[3] = d * h1 + b * w0 + ty;

        // xy
        vertexData[4] = a * w0 + c * h0 + tx;
        vertexData[5] = d * h0 + b * w0 + ty;

        // xy
        vertexData[6] = a * w1 + c * h0 + tx;
        vertexData[7] = d * h0 + b * w1 + ty;
    };

    /**
    *
    * Renders the object using the WebGL renderer
    *
    * @private
    * @param {PIXI.WebGLRenderer} renderer - The webgl renderer to use.
    */


    Sprite.prototype._renderWebGL = function _renderWebGL(renderer) {
        this.calculateVertices();

        renderer.setObjectRenderer(renderer.plugins[this.pluginName]);
        renderer.plugins[this.pluginName].render(this);
    };

    /**
    * Renders the object using the Canvas renderer
    *
    * @private
    * @param {PIXI.CanvasRenderer} renderer - The renderer
    */


    Sprite.prototype._renderCanvas = function _renderCanvas(renderer) {
        renderer.plugins[this.pluginName].render(this);
    };

    /**
     * Updates the bounds of the sprite.
     *
     * @private
     */


    Sprite.prototype._calculateBounds = function _calculateBounds() {
        var trim = this._texture.trim;
        var orig = this._texture.orig;

        // First lets check to see if the current texture has a trim..
        if (!trim || trim.width === orig.width && trim.height === orig.height) {
            // no trim! lets use the usual calculations..
            this.calculateVertices();
            this._bounds.addQuad(this.vertexData);
        } else {
            // lets calculate a special trimmed bounds...
            this.calculateTrimmedVertices();
            this._bounds.addQuad(this.vertexTrimmedData);
        }
    };

    /**
     * Gets the local bounds of the sprite object.
     *
     * @param {PIXI.Rectangle} rect - The output rectangle.
     * @return {PIXI.Rectangle} The bounds.
     */


    Sprite.prototype.getLocalBounds = function getLocalBounds(rect) {
        // we can do a fast local bounds if the sprite has no children!
        if (this.children.length === 0) {
            this._bounds.minX = this._texture.orig.width * -this._anchor._x;
            this._bounds.minY = this._texture.orig.height * -this._anchor._y;
            this._bounds.maxX = this._texture.orig.width * (1 - this._anchor._x);
            this._bounds.maxY = this._texture.orig.height * (1 - this._anchor._x);

            if (!rect) {
                if (!this._localBoundsRect) {
                    this._localBoundsRect = new _math.Rectangle();
                }

                rect = this._localBoundsRect;
            }

            return this._bounds.getRectangle(rect);
        }

        return _Container.prototype.getLocalBounds.call(this, rect);
    };

    /**
     * Tests if a point is inside this sprite
     *
     * @param {PIXI.Point} point - the point to test
     * @return {boolean} the result of the test
     */


    Sprite.prototype.containsPoint = function containsPoint(point) {
        this.worldTransform.applyInverse(point, tempPoint);

        var width = this._texture.orig.width;
        var height = this._texture.orig.height;
        var x1 = -width * this.anchor.x;
        var y1 = 0;

        if (tempPoint.x >= x1 && tempPoint.x < x1 + width) {
            y1 = -height * this.anchor.y;

            if (tempPoint.y >= y1 && tempPoint.y < y1 + height) {
                return true;
            }
        }

        return false;
    };

    /**
     * Destroys this sprite and optionally its texture and children
     *
     * @param {object|boolean} [options] - Options parameter. A boolean will act as if all options
     *  have been set to that value
     * @param {boolean} [options.children=false] - if set to true, all the children will have their destroy
     *      method called as well. 'options' will be passed on to those calls.
     * @param {boolean} [options.texture=false] - Should it destroy the current texture of the sprite as well
     * @param {boolean} [options.baseTexture=false] - Should it destroy the base texture of the sprite as well
     */


    Sprite.prototype.destroy = function destroy(options) {
        _Container.prototype.destroy.call(this, options);

        this._anchor = null;

        var destroyTexture = typeof options === 'boolean' ? options : options && options.texture;

        if (destroyTexture) {
            var destroyBaseTexture = typeof options === 'boolean' ? options : options && options.baseTexture;

            this._texture.destroy(!!destroyBaseTexture);
        }

        this._texture = null;
        this.shader = null;
    };

    // some helper functions..

    /**
     * Helper function that creates a new sprite based on the source you provide.
     * The source can be - frame id, image url, video url, canvas element, video element, base texture
     *
     * @static
     * @param {number|string|PIXI.BaseTexture|HTMLCanvasElement|HTMLVideoElement} source Source to create texture from
     * @return {PIXI.Sprite} The newly created sprite
     */


    Sprite.from = function from(source) {
        return new Sprite(_Texture2.default.from(source));
    };

    /**
     * Helper function that creates a sprite that will contain a texture from the TextureCache based on the frameId
     * The frame ids are created when a Texture packer file has been loaded
     *
     * @static
     * @param {string} frameId - The frame Id of the texture in the cache
     * @return {PIXI.Sprite} A new Sprite using a texture from the texture cache matching the frameId
     */


    Sprite.fromFrame = function fromFrame(frameId) {
        var texture = _utils.TextureCache[frameId];

        if (!texture) {
            throw new Error('The frameId "' + frameId + '" does not exist in the texture cache');
        }

        return new Sprite(texture);
    };

    /**
     * Helper function that creates a sprite that will contain a texture based on an image url
     * If the image is not in the texture cache it will be loaded
     *
     * @static
     * @param {string} imageId - The image url of the texture
     * @param {boolean} [crossorigin=(auto)] - if you want to specify the cross-origin parameter
     * @param {number} [scaleMode=PIXI.settings.SCALE_MODE] - if you want to specify the scale mode,
     *  see {@link PIXI.SCALE_MODES} for possible values
     * @return {PIXI.Sprite} A new Sprite using a texture from the texture cache matching the image id
     */


    Sprite.fromImage = function fromImage(imageId, crossorigin, scaleMode) {
        return new Sprite(_Texture2.default.fromImage(imageId, crossorigin, scaleMode));
    };

    /**
     * The width of the sprite, setting this will actually modify the scale to achieve the value set
     *
     * @member {number}
     */


    _createClass(Sprite, [{
        key: 'width',
        get: function get() {
            return Math.abs(this.scale.x) * this._texture.orig.width;
        },
        set: function set(value) // eslint-disable-line require-jsdoc
        {
            var s = (0, _utils.sign)(this.scale.x) || 1;

            this.scale.x = s * value / this._texture.orig.width;
            this._width = value;
        }

        /**
         * The height of the sprite, setting this will actually modify the scale to achieve the value set
         *
         * @member {number}
         */

    }, {
        key: 'height',
        get: function get() {
            return Math.abs(this.scale.y) * this._texture.orig.height;
        },
        set: function set(value) // eslint-disable-line require-jsdoc
        {
            var s = (0, _utils.sign)(this.scale.y) || 1;

            this.scale.y = s * value / this._texture.orig.height;
            this._height = value;
        }

        /**
         * The anchor sets the origin point of the texture.
         * The default is 0,0 this means the texture's origin is the top left
         * Setting the anchor to 0.5,0.5 means the texture's origin is centered
         * Setting the anchor to 1,1 would mean the texture's origin point will be the bottom right corner
         *
         * @member {PIXI.ObservablePoint}
         */

    }, {
        key: 'anchor',
        get: function get() {
            return this._anchor;
        },
        set: function set(value) // eslint-disable-line require-jsdoc
        {
            this._anchor.copy(value);
        }

        /**
         * The tint applied to the sprite. This is a hex value.
         * A value of 0xFFFFFF will remove any tint effect.
         *
         * @member {number}
         * @default 0xFFFFFF
         */

    }, {
        key: 'tint',
        get: function get() {
            return this._tint;
        },
        set: function set(value) // eslint-disable-line require-jsdoc
        {
            this._tint = value;
            this._tintRGB = (value >> 16) + (value & 0xff00) + ((value & 0xff) << 16);
        }

        /**
         * The texture that the sprite is using
         *
         * @member {PIXI.Texture}
         */

    }, {
        key: 'texture',
        get: function get() {
            return this._texture;
        },
        set: function set(value) // eslint-disable-line require-jsdoc
        {
            if (this._texture === value) {
                return;
            }

            this._texture = value;
            this.cachedTint = 0xFFFFFF;

            this._textureID = -1;
            this._textureTrimmedID = -1;

            if (value) {
                // wait for the texture to load
                if (value.baseTexture.hasLoaded) {
                    this._onTextureUpdate();
                } else {
                    value.once('update', this._onTextureUpdate, this);
                }
            }
        }
    }]);

    return Sprite;
}(_Container3.default);

exports.default = Sprite;
//# sourceMappingURL=Sprite.js.map

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = bezierCurveTo;
/**
 * Calculate the points for a bezier curve and then draws it.
 *
 * Ignored from docs since it is not directly exposed.
 *
 * @ignore
 * @param {number} fromX - Starting point x
 * @param {number} fromY - Starting point y
 * @param {number} cpX - Control point x
 * @param {number} cpY - Control point y
 * @param {number} cpX2 - Second Control point x
 * @param {number} cpY2 - Second Control point y
 * @param {number} toX - Destination point x
 * @param {number} toY - Destination point y
 * @param {number[]} [path=[]] - Path array to push points into
 * @return {number[]} Array of points of the curve
 */
function bezierCurveTo(fromX, fromY, cpX, cpY, cpX2, cpY2, toX, toY) {
    var path = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : [];

    var n = 20;
    var dt = 0;
    var dt2 = 0;
    var dt3 = 0;
    var t2 = 0;
    var t3 = 0;

    path.push(fromX, fromY);

    for (var i = 1, j = 0; i <= n; ++i) {
        j = i / n;

        dt = 1 - j;
        dt2 = dt * dt;
        dt3 = dt2 * dt;

        t2 = j * j;
        t3 = t2 * j;

        path.push(dt3 * fromX + 3 * dt2 * j * cpX + 3 * dt * t2 * cpX2 + t3 * toX, dt3 * fromY + 3 * dt2 * j * cpY + 3 * dt * t2 * cpY2 + t3 * toY);
    }

    return path;
}
//# sourceMappingURL=bezierCurveTo.js.map

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _const = __webpack_require__(12);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * A set of functions used to handle masking.
 *
 * @class
 * @memberof PIXI
 */
var CanvasMaskManager = function () {
    /**
     * @param {PIXI.CanvasRenderer} renderer - The canvas renderer.
     */
    function CanvasMaskManager(renderer) {
        _classCallCheck(this, CanvasMaskManager);

        this.renderer = renderer;
    }

    /**
     * This method adds it to the current stack of masks.
     *
     * @param {object} maskData - the maskData that will be pushed
     */


    CanvasMaskManager.prototype.pushMask = function pushMask(maskData) {
        var renderer = this.renderer;

        renderer.context.save();

        var cacheAlpha = maskData.alpha;
        var transform = maskData.transform.worldTransform;
        var resolution = renderer.resolution;

        renderer.context.setTransform(transform.a * resolution, transform.b * resolution, transform.c * resolution, transform.d * resolution, transform.tx * resolution, transform.ty * resolution);

        // TODO suport sprite alpha masks??
        // lots of effort required. If demand is great enough..
        if (!maskData._texture) {
            this.renderGraphicsShape(maskData);
            renderer.context.clip();
        }

        maskData.worldAlpha = cacheAlpha;
    };

    /**
     * Renders a PIXI.Graphics shape.
     *
     * @param {PIXI.Graphics} graphics - The object to render.
     */


    CanvasMaskManager.prototype.renderGraphicsShape = function renderGraphicsShape(graphics) {
        var context = this.renderer.context;
        var len = graphics.graphicsData.length;

        if (len === 0) {
            return;
        }

        context.beginPath();

        for (var i = 0; i < len; i++) {
            var data = graphics.graphicsData[i];
            var shape = data.shape;

            if (data.type === _const.SHAPES.POLY) {
                var points = shape.points;

                context.moveTo(points[0], points[1]);

                for (var j = 1; j < points.length / 2; j++) {
                    context.lineTo(points[j * 2], points[j * 2 + 1]);
                }

                // if the first and last point are the same close the path - much neater :)
                if (points[0] === points[points.length - 2] && points[1] === points[points.length - 1]) {
                    context.closePath();
                }
            } else if (data.type === _const.SHAPES.RECT) {
                context.rect(shape.x, shape.y, shape.width, shape.height);
                context.closePath();
            } else if (data.type === _const.SHAPES.CIRC) {
                // TODO - need to be Undefined!
                context.arc(shape.x, shape.y, shape.radius, 0, 2 * Math.PI);
                context.closePath();
            } else if (data.type === _const.SHAPES.ELIP) {
                // ellipse code taken from: http://stackoverflow.com/questions/2172798/how-to-draw-an-oval-in-html5-canvas

                var w = shape.width * 2;
                var h = shape.height * 2;

                var x = shape.x - w / 2;
                var y = shape.y - h / 2;

                var kappa = 0.5522848;
                var ox = w / 2 * kappa; // control point offset horizontal
                var oy = h / 2 * kappa; // control point offset vertical
                var xe = x + w; // x-end
                var ye = y + h; // y-end
                var xm = x + w / 2; // x-middle
                var ym = y + h / 2; // y-middle

                context.moveTo(x, ym);
                context.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
                context.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
                context.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
                context.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
                context.closePath();
            } else if (data.type === _const.SHAPES.RREC) {
                var rx = shape.x;
                var ry = shape.y;
                var width = shape.width;
                var height = shape.height;
                var radius = shape.radius;

                var maxRadius = Math.min(width, height) / 2 | 0;

                radius = radius > maxRadius ? maxRadius : radius;

                context.moveTo(rx, ry + radius);
                context.lineTo(rx, ry + height - radius);
                context.quadraticCurveTo(rx, ry + height, rx + radius, ry + height);
                context.lineTo(rx + width - radius, ry + height);
                context.quadraticCurveTo(rx + width, ry + height, rx + width, ry + height - radius);
                context.lineTo(rx + width, ry + radius);
                context.quadraticCurveTo(rx + width, ry, rx + width - radius, ry);
                context.lineTo(rx + radius, ry);
                context.quadraticCurveTo(rx, ry, rx, ry + radius);
                context.closePath();
            }
        }
    };

    /**
     * Restores the current drawing context to the state it was before the mask was applied.
     *
     * @param {PIXI.CanvasRenderer} renderer - The renderer context to use.
     */


    CanvasMaskManager.prototype.popMask = function popMask(renderer) {
        renderer.context.restore();
    };

    /**
     * Destroys this canvas mask manager.
     *
     */


    CanvasMaskManager.prototype.destroy = function destroy() {
        /* empty */
    };

    return CanvasMaskManager;
}();

exports.default = CanvasMaskManager;
//# sourceMappingURL=CanvasMaskManager.js.map

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _settings = __webpack_require__(15);

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Creates a Canvas element of the given size.
 *
 * @class
 * @memberof PIXI
 */
var CanvasRenderTarget = function () {
  /**
   * @param {number} width - the width for the newly created canvas
   * @param {number} height - the height for the newly created canvas
   * @param {number} [resolution=1] - The resolution / device pixel ratio of the canvas
   */
  function CanvasRenderTarget(width, height, resolution) {
    _classCallCheck(this, CanvasRenderTarget);

    /**
     * The Canvas object that belongs to this CanvasRenderTarget.
     *
     * @member {HTMLCanvasElement}
     */
    this.canvas = document.createElement('canvas');

    /**
     * A CanvasRenderingContext2D object representing a two-dimensional rendering context.
     *
     * @member {CanvasRenderingContext2D}
     */
    this.context = this.canvas.getContext('2d');

    this.resolution = resolution || _settings2.default.RESOLUTION;

    this.resize(width, height);
  }

  /**
   * Clears the canvas that was created by the CanvasRenderTarget class.
   *
   * @private
   */


  CanvasRenderTarget.prototype.clear = function clear() {
    this.context.setTransform(1, 0, 0, 1, 0, 0);
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };

  /**
   * Resizes the canvas to the specified width and height.
   *
   * @param {number} width - the new width of the canvas
   * @param {number} height - the new height of the canvas
   */


  CanvasRenderTarget.prototype.resize = function resize(width, height) {
    this.canvas.width = width * this.resolution;
    this.canvas.height = height * this.resolution;
  };

  /**
   * Destroys this canvas.
   *
   */


  CanvasRenderTarget.prototype.destroy = function destroy() {
    this.context = null;
    this.canvas = null;
  };

  /**
   * The width of the canvas buffer in pixels.
   *
   * @member {number}
   */


  _createClass(CanvasRenderTarget, [{
    key: 'width',
    get: function get() {
      return this.canvas.width;
    },
    set: function set(val) // eslint-disable-line require-jsdoc
    {
      this.canvas.width = val;
    }

    /**
     * The height of the canvas buffer in pixels.
     *
     * @member {number}
     */

  }, {
    key: 'height',
    get: function get() {
      return this.canvas.height;
    },
    set: function set(val) // eslint-disable-line require-jsdoc
    {
      this.canvas.height = val;
    }
  }]);

  return CanvasRenderTarget;
}();

exports.default = CanvasRenderTarget;
//# sourceMappingURL=CanvasRenderTarget.js.map

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mapCanvasBlendModesToPixi;

var _const = __webpack_require__(12);

var _canUseNewCanvasBlendModes = __webpack_require__(113);

var _canUseNewCanvasBlendModes2 = _interopRequireDefault(_canUseNewCanvasBlendModes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Maps blend combinations to Canvas.
 *
 * @memberof PIXI
 * @function mapCanvasBlendModesToPixi
 * @private
 * @param {string[]} [array=[]] - The array to output into.
 * @return {string[]} Mapped modes.
 */
function mapCanvasBlendModesToPixi() {
    var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    if ((0, _canUseNewCanvasBlendModes2.default)()) {
        array[_const.BLEND_MODES.NORMAL] = 'source-over';
        array[_const.BLEND_MODES.ADD] = 'lighter'; // IS THIS OK???
        array[_const.BLEND_MODES.MULTIPLY] = 'multiply';
        array[_const.BLEND_MODES.SCREEN] = 'screen';
        array[_const.BLEND_MODES.OVERLAY] = 'overlay';
        array[_const.BLEND_MODES.DARKEN] = 'darken';
        array[_const.BLEND_MODES.LIGHTEN] = 'lighten';
        array[_const.BLEND_MODES.COLOR_DODGE] = 'color-dodge';
        array[_const.BLEND_MODES.COLOR_BURN] = 'color-burn';
        array[_const.BLEND_MODES.HARD_LIGHT] = 'hard-light';
        array[_const.BLEND_MODES.SOFT_LIGHT] = 'soft-light';
        array[_const.BLEND_MODES.DIFFERENCE] = 'difference';
        array[_const.BLEND_MODES.EXCLUSION] = 'exclusion';
        array[_const.BLEND_MODES.HUE] = 'hue';
        array[_const.BLEND_MODES.SATURATION] = 'saturate';
        array[_const.BLEND_MODES.COLOR] = 'color';
        array[_const.BLEND_MODES.LUMINOSITY] = 'luminosity';
    } else {
        // this means that the browser does not support the cool new blend modes in canvas 'cough' ie 'cough'
        array[_const.BLEND_MODES.NORMAL] = 'source-over';
        array[_const.BLEND_MODES.ADD] = 'lighter'; // IS THIS OK???
        array[_const.BLEND_MODES.MULTIPLY] = 'source-over';
        array[_const.BLEND_MODES.SCREEN] = 'source-over';
        array[_const.BLEND_MODES.OVERLAY] = 'source-over';
        array[_const.BLEND_MODES.DARKEN] = 'source-over';
        array[_const.BLEND_MODES.LIGHTEN] = 'source-over';
        array[_const.BLEND_MODES.COLOR_DODGE] = 'source-over';
        array[_const.BLEND_MODES.COLOR_BURN] = 'source-over';
        array[_const.BLEND_MODES.HARD_LIGHT] = 'source-over';
        array[_const.BLEND_MODES.SOFT_LIGHT] = 'source-over';
        array[_const.BLEND_MODES.DIFFERENCE] = 'source-over';
        array[_const.BLEND_MODES.EXCLUSION] = 'source-over';
        array[_const.BLEND_MODES.HUE] = 'source-over';
        array[_const.BLEND_MODES.SATURATION] = 'source-over';
        array[_const.BLEND_MODES.COLOR] = 'source-over';
        array[_const.BLEND_MODES.LUMINOSITY] = 'source-over';
    }
    // not-premultiplied, only for webgl
    array[_const.BLEND_MODES.NORMAL_NPM] = array[_const.BLEND_MODES.NORMAL];
    array[_const.BLEND_MODES.ADD_NPM] = array[_const.BLEND_MODES.ADD];
    array[_const.BLEND_MODES.SCREEN_NPM] = array[_const.BLEND_MODES.SCREEN];

    return array;
}
//# sourceMappingURL=mapCanvasBlendModesToPixi.js.map

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = canUseNewCanvasBlendModes;
/**
 * Creates a little colored canvas
 *
 * @ignore
 * @param {string} color - The color to make the canvas
 * @return {canvas} a small canvas element
 */
function createColoredCanvas(color) {
    var canvas = document.createElement('canvas');

    canvas.width = 6;
    canvas.height = 1;

    var context = canvas.getContext('2d');

    context.fillStyle = color;
    context.fillRect(0, 0, 6, 1);

    return canvas;
}

/**
 * Checks whether the Canvas BlendModes are supported by the current browser
 *
 * @return {boolean} whether they are supported
 */
function canUseNewCanvasBlendModes() {
    if (typeof document === 'undefined') {
        return false;
    }

    var magenta = createColoredCanvas('#ff00ff');
    var yellow = createColoredCanvas('#ffff00');

    var canvas = document.createElement('canvas');

    canvas.width = 6;
    canvas.height = 1;

    var context = canvas.getContext('2d');

    context.globalCompositeOperation = 'multiply';
    context.drawImage(magenta, 0, 0);
    context.drawImage(yellow, 2, 0);

    var imageData = context.getImageData(2, 0, 1, 1);

    if (!imageData) {
        return false;
    }

    var data = imageData.data;

    return data[0] === 255 && data[1] === 0 && data[2] === 0;
}
//# sourceMappingURL=canUseNewCanvasBlendModes.js.map

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _utils = __webpack_require__(13);

var _const = __webpack_require__(12);

var _ObjectRenderer2 = __webpack_require__(33);

var _ObjectRenderer3 = _interopRequireDefault(_ObjectRenderer2);

var _WebGLRenderer = __webpack_require__(34);

var _WebGLRenderer2 = _interopRequireDefault(_WebGLRenderer);

var _WebGLGraphicsData = __webpack_require__(129);

var _WebGLGraphicsData2 = _interopRequireDefault(_WebGLGraphicsData);

var _PrimitiveShader = __webpack_require__(130);

var _PrimitiveShader2 = _interopRequireDefault(_PrimitiveShader);

var _buildPoly = __webpack_require__(131);

var _buildPoly2 = _interopRequireDefault(_buildPoly);

var _buildRectangle = __webpack_require__(132);

var _buildRectangle2 = _interopRequireDefault(_buildRectangle);

var _buildRoundedRectangle = __webpack_require__(133);

var _buildRoundedRectangle2 = _interopRequireDefault(_buildRoundedRectangle);

var _buildCircle = __webpack_require__(134);

var _buildCircle2 = _interopRequireDefault(_buildCircle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Renders the graphics object.
 *
 * @class
 * @memberof PIXI
 * @extends PIXI.ObjectRenderer
 */
var GraphicsRenderer = function (_ObjectRenderer) {
    _inherits(GraphicsRenderer, _ObjectRenderer);

    /**
     * @param {PIXI.WebGLRenderer} renderer - The renderer this object renderer works for.
     */
    function GraphicsRenderer(renderer) {
        _classCallCheck(this, GraphicsRenderer);

        var _this = _possibleConstructorReturn(this, _ObjectRenderer.call(this, renderer));

        _this.graphicsDataPool = [];

        _this.primitiveShader = null;

        _this.gl = renderer.gl;

        // easy access!
        _this.CONTEXT_UID = 0;
        return _this;
    }

    /**
     * Called when there is a WebGL context change
     *
     * @private
     *
     */


    GraphicsRenderer.prototype.onContextChange = function onContextChange() {
        this.gl = this.renderer.gl;
        this.CONTEXT_UID = this.renderer.CONTEXT_UID;
        this.primitiveShader = new _PrimitiveShader2.default(this.gl);
    };

    /**
     * Destroys this renderer.
     *
     */


    GraphicsRenderer.prototype.destroy = function destroy() {
        _ObjectRenderer3.default.prototype.destroy.call(this);

        for (var i = 0; i < this.graphicsDataPool.length; ++i) {
            this.graphicsDataPool[i].destroy();
        }

        this.graphicsDataPool = null;
    };

    /**
     * Renders a graphics object.
     *
     * @param {PIXI.Graphics} graphics - The graphics object to render.
     */


    GraphicsRenderer.prototype.render = function render(graphics) {
        var renderer = this.renderer;
        var gl = renderer.gl;

        var webGLData = void 0;
        var webGL = graphics._webGL[this.CONTEXT_UID];

        if (!webGL || graphics.dirty !== webGL.dirty) {
            this.updateGraphics(graphics);

            webGL = graphics._webGL[this.CONTEXT_UID];
        }

        // This  could be speeded up for sure!
        var shader = this.primitiveShader;

        renderer.bindShader(shader);
        renderer.state.setBlendMode(graphics.blendMode);

        for (var i = 0, n = webGL.data.length; i < n; i++) {
            webGLData = webGL.data[i];
            var shaderTemp = webGLData.shader;

            renderer.bindShader(shaderTemp);
            shaderTemp.uniforms.translationMatrix = graphics.transform.worldTransform.toArray(true);
            shaderTemp.uniforms.tint = (0, _utils.hex2rgb)(graphics.tint);
            shaderTemp.uniforms.alpha = graphics.worldAlpha;

            renderer.bindVao(webGLData.vao);

            if (webGLData.nativeLines) {
                gl.drawArrays(gl.LINES, 0, webGLData.points.length / 6);
            } else {
                webGLData.vao.draw(gl.TRIANGLE_STRIP, webGLData.indices.length);
            }
        }
    };

    /**
     * Updates the graphics object
     *
     * @private
     * @param {PIXI.Graphics} graphics - The graphics object to update
     */


    GraphicsRenderer.prototype.updateGraphics = function updateGraphics(graphics) {
        var gl = this.renderer.gl;

        // get the contexts graphics object
        var webGL = graphics._webGL[this.CONTEXT_UID];

        // if the graphics object does not exist in the webGL context time to create it!
        if (!webGL) {
            webGL = graphics._webGL[this.CONTEXT_UID] = { lastIndex: 0, data: [], gl: gl, clearDirty: -1, dirty: -1 };
        }

        // flag the graphics as not dirty as we are about to update it...
        webGL.dirty = graphics.dirty;

        // if the user cleared the graphics object we will need to clear every object
        if (graphics.clearDirty !== webGL.clearDirty) {
            webGL.clearDirty = graphics.clearDirty;

            // loop through and return all the webGLDatas to the object pool so than can be reused later on
            for (var i = 0; i < webGL.data.length; i++) {
                this.graphicsDataPool.push(webGL.data[i]);
            }

            // clear the array and reset the index..
            webGL.data.length = 0;
            webGL.lastIndex = 0;
        }

        var webGLData = void 0;
        var webGLDataNativeLines = void 0;

        // loop through the graphics datas and construct each one..
        // if the object is a complex fill then the new stencil buffer technique will be used
        // other wise graphics objects will be pushed into a batch..
        for (var _i = webGL.lastIndex; _i < graphics.graphicsData.length; _i++) {
            var data = graphics.graphicsData[_i];

            // TODO - this can be simplified
            webGLData = this.getWebGLData(webGL, 0);

            if (data.nativeLines && data.lineWidth) {
                webGLDataNativeLines = this.getWebGLData(webGL, 0, true);
                webGL.lastIndex++;
            }

            if (data.type === _const.SHAPES.POLY) {
                (0, _buildPoly2.default)(data, webGLData, webGLDataNativeLines);
            }
            if (data.type === _const.SHAPES.RECT) {
                (0, _buildRectangle2.default)(data, webGLData, webGLDataNativeLines);
            } else if (data.type === _const.SHAPES.CIRC || data.type === _const.SHAPES.ELIP) {
                (0, _buildCircle2.default)(data, webGLData, webGLDataNativeLines);
            } else if (data.type === _const.SHAPES.RREC) {
                (0, _buildRoundedRectangle2.default)(data, webGLData, webGLDataNativeLines);
            }

            webGL.lastIndex++;
        }

        this.renderer.bindVao(null);

        // upload all the dirty data...
        for (var _i2 = 0; _i2 < webGL.data.length; _i2++) {
            webGLData = webGL.data[_i2];

            if (webGLData.dirty) {
                webGLData.upload();
            }
        }
    };

    /**
     *
     * @private
     * @param {WebGLRenderingContext} gl - the current WebGL drawing context
     * @param {number} type - TODO @Alvin
     * @param {number} nativeLines - indicate whether the webGLData use for nativeLines.
     * @return {*} TODO
     */


    GraphicsRenderer.prototype.getWebGLData = function getWebGLData(gl, type, nativeLines) {
        var webGLData = gl.data[gl.data.length - 1];

        if (!webGLData || webGLData.nativeLines !== nativeLines || webGLData.points.length > 320000) {
            webGLData = this.graphicsDataPool.pop() || new _WebGLGraphicsData2.default(this.renderer.gl, this.primitiveShader, this.renderer.state.attribsState);
            webGLData.nativeLines = nativeLines;
            webGLData.reset(type);
            gl.data.push(webGLData);
        }

        webGLData.dirty = true;

        return webGLData;
    };

    return GraphicsRenderer;
}(_ObjectRenderer3.default);

exports.default = GraphicsRenderer;


_WebGLRenderer2.default.registerPlugin('graphics', GraphicsRenderer);
//# sourceMappingURL=GraphicsRenderer.js.map

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _WebGLManager2 = __webpack_require__(20);

var _WebGLManager3 = _interopRequireDefault(_WebGLManager2);

var _SpriteMaskFilter = __webpack_require__(55);

var _SpriteMaskFilter2 = _interopRequireDefault(_SpriteMaskFilter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @class
 * @extends PIXI.WebGLManager
 * @memberof PIXI
 */
var MaskManager = function (_WebGLManager) {
    _inherits(MaskManager, _WebGLManager);

    /**
     * @param {PIXI.WebGLRenderer} renderer - The renderer this manager works for.
     */
    function MaskManager(renderer) {
        _classCallCheck(this, MaskManager);

        // TODO - we don't need both!
        var _this = _possibleConstructorReturn(this, _WebGLManager.call(this, renderer));

        _this.scissor = false;
        _this.scissorData = null;
        _this.scissorRenderTarget = null;

        _this.enableScissor = true;

        _this.alphaMaskPool = [];
        _this.alphaMaskIndex = 0;
        return _this;
    }

    /**
     * Applies the Mask and adds it to the current filter stack.
     *
     * @param {PIXI.DisplayObject} target - Display Object to push the mask to
     * @param {PIXI.Sprite|PIXI.Graphics} maskData - The masking data.
     */


    MaskManager.prototype.pushMask = function pushMask(target, maskData) {
        // TODO the root check means scissor rect will not
        // be used on render textures more info here:
        // https://github.com/pixijs/pixi.js/pull/3545

        if (maskData.texture) {
            this.pushSpriteMask(target, maskData);
        } else if (this.enableScissor && !this.scissor && this.renderer._activeRenderTarget.root && !this.renderer.stencilManager.stencilMaskStack.length && maskData.isFastRect()) {
            var matrix = maskData.worldTransform;

            var rot = Math.atan2(matrix.b, matrix.a);

            // use the nearest degree!
            rot = Math.round(rot * (180 / Math.PI));

            if (rot % 90) {
                this.pushStencilMask(maskData);
            } else {
                this.pushScissorMask(target, maskData);
            }
        } else {
            this.pushStencilMask(maskData);
        }
    };

    /**
     * Removes the last mask from the mask stack and doesn't return it.
     *
     * @param {PIXI.DisplayObject} target - Display Object to pop the mask from
     * @param {PIXI.Sprite|PIXI.Graphics} maskData - The masking data.
     */


    MaskManager.prototype.popMask = function popMask(target, maskData) {
        if (maskData.texture) {
            this.popSpriteMask(target, maskData);
        } else if (this.enableScissor && !this.renderer.stencilManager.stencilMaskStack.length) {
            this.popScissorMask(target, maskData);
        } else {
            this.popStencilMask(target, maskData);
        }
    };

    /**
     * Applies the Mask and adds it to the current filter stack.
     *
     * @param {PIXI.RenderTarget} target - Display Object to push the sprite mask to
     * @param {PIXI.Sprite} maskData - Sprite to be used as the mask
     */


    MaskManager.prototype.pushSpriteMask = function pushSpriteMask(target, maskData) {
        var alphaMaskFilter = this.alphaMaskPool[this.alphaMaskIndex];

        if (!alphaMaskFilter) {
            alphaMaskFilter = this.alphaMaskPool[this.alphaMaskIndex] = [new _SpriteMaskFilter2.default(maskData)];
        }

        alphaMaskFilter[0].resolution = this.renderer.resolution;
        alphaMaskFilter[0].maskSprite = maskData;

        // TODO - may cause issues!
        target.filterArea = maskData.getBounds(true);

        this.renderer.filterManager.pushFilter(target, alphaMaskFilter);

        this.alphaMaskIndex++;
    };

    /**
     * Removes the last filter from the filter stack and doesn't return it.
     *
     */


    MaskManager.prototype.popSpriteMask = function popSpriteMask() {
        this.renderer.filterManager.popFilter();
        this.alphaMaskIndex--;
    };

    /**
     * Applies the Mask and adds it to the current filter stack.
     *
     * @param {PIXI.Sprite|PIXI.Graphics} maskData - The masking data.
     */


    MaskManager.prototype.pushStencilMask = function pushStencilMask(maskData) {
        this.renderer.currentRenderer.stop();
        this.renderer.stencilManager.pushStencil(maskData);
    };

    /**
     * Removes the last filter from the filter stack and doesn't return it.
     *
     */


    MaskManager.prototype.popStencilMask = function popStencilMask() {
        this.renderer.currentRenderer.stop();
        this.renderer.stencilManager.popStencil();
    };

    /**
     *
     * @param {PIXI.DisplayObject} target - Display Object to push the mask to
     * @param {PIXI.Graphics} maskData - The masking data.
     */


    MaskManager.prototype.pushScissorMask = function pushScissorMask(target, maskData) {
        maskData.renderable = true;

        var renderTarget = this.renderer._activeRenderTarget;

        var bounds = maskData.getBounds();

        bounds.fit(renderTarget.size);
        maskData.renderable = false;

        this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST);

        var resolution = this.renderer.resolution;

        this.renderer.gl.scissor(bounds.x * resolution, (renderTarget.root ? renderTarget.size.height - bounds.y - bounds.height : bounds.y) * resolution, bounds.width * resolution, bounds.height * resolution);

        this.scissorRenderTarget = renderTarget;
        this.scissorData = maskData;
        this.scissor = true;
    };

    /**
     *
     *
     */


    MaskManager.prototype.popScissorMask = function popScissorMask() {
        this.scissorRenderTarget = null;
        this.scissorData = null;
        this.scissor = false;

        // must be scissor!
        var gl = this.renderer.gl;

        gl.disable(gl.SCISSOR_TEST);
    };

    return MaskManager;
}(_WebGLManager3.default);

exports.default = MaskManager;
//# sourceMappingURL=MaskManager.js.map

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = extractUniformsFromSrc;

var _pixiGlCore = __webpack_require__(16);

var _pixiGlCore2 = _interopRequireDefault(_pixiGlCore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultValue = _pixiGlCore2.default.shader.defaultValue;

function extractUniformsFromSrc(vertexSrc, fragmentSrc, mask) {
    var vertUniforms = extractUniformsFromString(vertexSrc, mask);
    var fragUniforms = extractUniformsFromString(fragmentSrc, mask);

    return Object.assign(vertUniforms, fragUniforms);
}

function extractUniformsFromString(string) {
    var maskRegex = new RegExp('^(projectionMatrix|uSampler|filterArea|filterClamp)$');

    var uniforms = {};
    var nameSplit = void 0;

    // clean the lines a little - remove extra spaces / tabs etc
    // then split along ';'
    var lines = string.replace(/\s+/g, ' ').split(/\s*;\s*/);

    // loop through..
    for (var i = 0; i < lines.length; i++) {
        var line = lines[i].trim();

        if (line.indexOf('uniform') > -1) {
            var splitLine = line.split(' ');
            var type = splitLine[1];

            var name = splitLine[2];
            var size = 1;

            if (name.indexOf('[') > -1) {
                // array!
                nameSplit = name.split(/\[|]/);
                name = nameSplit[0];
                size *= Number(nameSplit[1]);
            }

            if (!name.match(maskRegex)) {
                uniforms[name] = {
                    value: defaultValue(type, size),
                    name: name,
                    type: type
                };
            }
        }
    }

    return uniforms;
}
//# sourceMappingURL=extractUniformsFromSrc.js.map

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(118)))

/***/ }),
/* 118 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _WebGLManager2 = __webpack_require__(20);

var _WebGLManager3 = _interopRequireDefault(_WebGLManager2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @class
 * @extends PIXI.WebGLManager
 * @memberof PIXI
 */
var StencilManager = function (_WebGLManager) {
    _inherits(StencilManager, _WebGLManager);

    /**
     * @param {PIXI.WebGLRenderer} renderer - The renderer this manager works for.
     */
    function StencilManager(renderer) {
        _classCallCheck(this, StencilManager);

        var _this = _possibleConstructorReturn(this, _WebGLManager.call(this, renderer));

        _this.stencilMaskStack = null;
        return _this;
    }

    /**
     * Changes the mask stack that is used by this manager.
     *
     * @param {PIXI.Graphics[]} stencilMaskStack - The mask stack
     */


    StencilManager.prototype.setMaskStack = function setMaskStack(stencilMaskStack) {
        this.stencilMaskStack = stencilMaskStack;

        var gl = this.renderer.gl;

        if (stencilMaskStack.length === 0) {
            gl.disable(gl.STENCIL_TEST);
        } else {
            gl.enable(gl.STENCIL_TEST);
        }
    };

    /**
     * Applies the Mask and adds it to the current filter stack. @alvin
     *
     * @param {PIXI.Graphics} graphics - The mask
     */


    StencilManager.prototype.pushStencil = function pushStencil(graphics) {
        this.renderer.setObjectRenderer(this.renderer.plugins.graphics);

        this.renderer._activeRenderTarget.attachStencilBuffer();

        var gl = this.renderer.gl;
        var sms = this.stencilMaskStack;

        if (sms.length === 0) {
            gl.enable(gl.STENCIL_TEST);
            gl.clear(gl.STENCIL_BUFFER_BIT);
            gl.stencilFunc(gl.ALWAYS, 1, 1);
        }

        sms.push(graphics);

        gl.colorMask(false, false, false, false);
        gl.stencilFunc(gl.EQUAL, 0, sms.length);
        gl.stencilOp(gl.KEEP, gl.KEEP, gl.INCR);

        this.renderer.plugins.graphics.render(graphics);

        gl.colorMask(true, true, true, true);
        gl.stencilFunc(gl.NOTEQUAL, 0, sms.length);
        gl.stencilOp(gl.KEEP, gl.KEEP, gl.KEEP);
    };

    /**
     * TODO @alvin
     */


    StencilManager.prototype.popStencil = function popStencil() {
        this.renderer.setObjectRenderer(this.renderer.plugins.graphics);

        var gl = this.renderer.gl;
        var sms = this.stencilMaskStack;

        var graphics = sms.pop();

        if (sms.length === 0) {
            // the stack is empty!
            gl.disable(gl.STENCIL_TEST);
        } else {
            gl.colorMask(false, false, false, false);
            gl.stencilFunc(gl.EQUAL, 0, sms.length);
            gl.stencilOp(gl.KEEP, gl.KEEP, gl.DECR);

            this.renderer.plugins.graphics.render(graphics);

            gl.colorMask(true, true, true, true);
            gl.stencilFunc(gl.NOTEQUAL, 0, sms.length);
            gl.stencilOp(gl.KEEP, gl.KEEP, gl.KEEP);
        }
    };

    /**
     * Destroys the mask stack.
     *
     */


    StencilManager.prototype.destroy = function destroy() {
        _WebGLManager3.default.prototype.destroy.call(this);

        this.stencilMaskStack.stencilStack = null;
    };

    return StencilManager;
}(_WebGLManager3.default);

exports.default = StencilManager;
//# sourceMappingURL=StencilManager.js.map

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _WebGLManager2 = __webpack_require__(20);

var _WebGLManager3 = _interopRequireDefault(_WebGLManager2);

var _RenderTarget = __webpack_require__(23);

var _RenderTarget2 = _interopRequireDefault(_RenderTarget);

var _Quad = __webpack_require__(57);

var _Quad2 = _interopRequireDefault(_Quad);

var _math = __webpack_require__(14);

var _Shader = __webpack_require__(58);

var _Shader2 = _interopRequireDefault(_Shader);

var _filterTransforms = __webpack_require__(122);

var filterTransforms = _interopRequireWildcard(_filterTransforms);

var _bitTwiddle = __webpack_require__(52);

var _bitTwiddle2 = _interopRequireDefault(_bitTwiddle);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @ignore
 * @class
 */
var FilterState =
/**
 *
 */
function FilterState() {
    _classCallCheck(this, FilterState);

    this.renderTarget = null;
    this.sourceFrame = new _math.Rectangle();
    this.destinationFrame = new _math.Rectangle();
    this.filters = [];
    this.target = null;
    this.resolution = 1;
};

/**
 * @class
 * @memberof PIXI
 * @extends PIXI.WebGLManager
 */


var FilterManager = function (_WebGLManager) {
    _inherits(FilterManager, _WebGLManager);

    /**
     * @param {PIXI.WebGLRenderer} renderer - The renderer this manager works for.
     */
    function FilterManager(renderer) {
        _classCallCheck(this, FilterManager);

        var _this = _possibleConstructorReturn(this, _WebGLManager.call(this, renderer));

        _this.gl = _this.renderer.gl;
        // know about sprites!
        _this.quad = new _Quad2.default(_this.gl, renderer.state.attribState);

        _this.shaderCache = {};
        // todo add default!
        _this.pool = {};

        _this.filterData = null;
        return _this;
    }

    /**
     * Adds a new filter to the manager.
     *
     * @param {PIXI.DisplayObject} target - The target of the filter to render.
     * @param {PIXI.Filter[]} filters - The filters to apply.
     */


    FilterManager.prototype.pushFilter = function pushFilter(target, filters) {
        var renderer = this.renderer;

        var filterData = this.filterData;

        if (!filterData) {
            filterData = this.renderer._activeRenderTarget.filterStack;

            // add new stack
            var filterState = new FilterState();

            filterState.sourceFrame = filterState.destinationFrame = this.renderer._activeRenderTarget.size;
            filterState.renderTarget = renderer._activeRenderTarget;

            this.renderer._activeRenderTarget.filterData = filterData = {
                index: 0,
                stack: [filterState]
            };

            this.filterData = filterData;
        }

        // get the current filter state..
        var currentState = filterData.stack[++filterData.index];

        if (!currentState) {
            currentState = filterData.stack[filterData.index] = new FilterState();
        }

        // for now we go off the filter of the first resolution..
        var resolution = filters[0].resolution;
        var padding = filters[0].padding | 0;
        var targetBounds = target.filterArea || target.getBounds(true);
        var sourceFrame = currentState.sourceFrame;
        var destinationFrame = currentState.destinationFrame;

        sourceFrame.x = (targetBounds.x * resolution | 0) / resolution;
        sourceFrame.y = (targetBounds.y * resolution | 0) / resolution;
        sourceFrame.width = (targetBounds.width * resolution | 0) / resolution;
        sourceFrame.height = (targetBounds.height * resolution | 0) / resolution;

        if (filterData.stack[0].renderTarget.transform) {//

            // TODO we should fit the rect around the transform..
        } else if (filters[0].autoFit) {
            sourceFrame.fit(filterData.stack[0].destinationFrame);
        }

        // lets apply the padding After we fit the element to the screen.
        // this should stop the strange side effects that can occur when cropping to the edges
        sourceFrame.pad(padding);

        destinationFrame.width = sourceFrame.width;
        destinationFrame.height = sourceFrame.height;

        // lets play the padding after we fit the element to the screen.
        // this should stop the strange side effects that can occur when cropping to the edges

        var renderTarget = this.getPotRenderTarget(renderer.gl, sourceFrame.width, sourceFrame.height, resolution);

        currentState.target = target;
        currentState.filters = filters;
        currentState.resolution = resolution;
        currentState.renderTarget = renderTarget;

        // bind the render target to draw the shape in the top corner..

        renderTarget.setFrame(destinationFrame, sourceFrame);

        // bind the render target
        renderer.bindRenderTarget(renderTarget);
        renderTarget.clear();
    };

    /**
     * Pops off the filter and applies it.
     *
     */


    FilterManager.prototype.popFilter = function popFilter() {
        var filterData = this.filterData;

        var lastState = filterData.stack[filterData.index - 1];
        var currentState = filterData.stack[filterData.index];

        this.quad.map(currentState.renderTarget.size, currentState.sourceFrame).upload();

        var filters = currentState.filters;

        if (filters.length === 1) {
            filters[0].apply(this, currentState.renderTarget, lastState.renderTarget, false, currentState);
            this.freePotRenderTarget(currentState.renderTarget);
        } else {
            var flip = currentState.renderTarget;
            var flop = this.getPotRenderTarget(this.renderer.gl, currentState.sourceFrame.width, currentState.sourceFrame.height, currentState.resolution);

            flop.setFrame(currentState.destinationFrame, currentState.sourceFrame);

            // finally lets clear the render target before drawing to it..
            flop.clear();

            var i = 0;

            for (i = 0; i < filters.length - 1; ++i) {
                filters[i].apply(this, flip, flop, true, currentState);

                var t = flip;

                flip = flop;
                flop = t;
            }

            filters[i].apply(this, flip, lastState.renderTarget, false, currentState);

            this.freePotRenderTarget(flip);
            this.freePotRenderTarget(flop);
        }

        filterData.index--;

        if (filterData.index === 0) {
            this.filterData = null;
        }
    };

    /**
     * Draws a filter.
     *
     * @param {PIXI.Filter} filter - The filter to draw.
     * @param {PIXI.RenderTarget} input - The input render target.
     * @param {PIXI.RenderTarget} output - The target to output to.
     * @param {boolean} clear - Should the output be cleared before rendering to it
     */


    FilterManager.prototype.applyFilter = function applyFilter(filter, input, output, clear) {
        var renderer = this.renderer;
        var gl = renderer.gl;

        var shader = filter.glShaders[renderer.CONTEXT_UID];

        // cacheing..
        if (!shader) {
            if (filter.glShaderKey) {
                shader = this.shaderCache[filter.glShaderKey];

                if (!shader) {
                    shader = new _Shader2.default(this.gl, filter.vertexSrc, filter.fragmentSrc);

                    filter.glShaders[renderer.CONTEXT_UID] = this.shaderCache[filter.glShaderKey] = shader;
                }
            } else {
                shader = filter.glShaders[renderer.CONTEXT_UID] = new _Shader2.default(this.gl, filter.vertexSrc, filter.fragmentSrc);
            }

            // TODO - this only needs to be done once?
            renderer.bindVao(null);

            this.quad.initVao(shader);
        }

        renderer.bindVao(this.quad.vao);

        renderer.bindRenderTarget(output);

        if (clear) {
            gl.disable(gl.SCISSOR_TEST);
            renderer.clear(); // [1, 1, 1, 1]);
            gl.enable(gl.SCISSOR_TEST);
        }

        // in case the render target is being masked using a scissor rect
        if (output === renderer.maskManager.scissorRenderTarget) {
            renderer.maskManager.pushScissorMask(null, renderer.maskManager.scissorData);
        }

        renderer.bindShader(shader);

        // free unit 0 for us, doesn't matter what was there
        // don't try to restore it, because syncUniforms can upload it to another slot
        // and it'll be a problem
        var tex = this.renderer.emptyTextures[0];

        this.renderer.boundTextures[0] = tex;
        // this syncs the PixiJS filters  uniforms with glsl uniforms
        this.syncUniforms(shader, filter);

        renderer.state.setBlendMode(filter.blendMode);

        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, input.texture.texture);

        this.quad.vao.draw(this.renderer.gl.TRIANGLES, 6, 0);

        gl.bindTexture(gl.TEXTURE_2D, tex._glTextures[this.renderer.CONTEXT_UID].texture);
    };

    /**
     * Uploads the uniforms of the filter.
     *
     * @param {GLShader} shader - The underlying gl shader.
     * @param {PIXI.Filter} filter - The filter we are synchronizing.
     */


    FilterManager.prototype.syncUniforms = function syncUniforms(shader, filter) {
        var uniformData = filter.uniformData;
        var uniforms = filter.uniforms;

        // 0 is reserved for the PixiJS texture so we start at 1!
        var textureCount = 1;
        var currentState = void 0;

        // filterArea and filterClamp that are handled by FilterManager directly
        // they must not appear in uniformData

        if (shader.uniforms.filterArea) {
            currentState = this.filterData.stack[this.filterData.index];

            var filterArea = shader.uniforms.filterArea;

            filterArea[0] = currentState.renderTarget.size.width;
            filterArea[1] = currentState.renderTarget.size.height;
            filterArea[2] = currentState.sourceFrame.x;
            filterArea[3] = currentState.sourceFrame.y;

            shader.uniforms.filterArea = filterArea;
        }

        // use this to clamp displaced texture coords so they belong to filterArea
        // see displacementFilter fragment shader for an example
        if (shader.uniforms.filterClamp) {
            currentState = currentState || this.filterData.stack[this.filterData.index];

            var filterClamp = shader.uniforms.filterClamp;

            filterClamp[0] = 0;
            filterClamp[1] = 0;
            filterClamp[2] = (currentState.sourceFrame.width - 1) / currentState.renderTarget.size.width;
            filterClamp[3] = (currentState.sourceFrame.height - 1) / currentState.renderTarget.size.height;

            shader.uniforms.filterClamp = filterClamp;
        }

        // TODO Cacheing layer..
        for (var i in uniformData) {
            if (uniformData[i].type === 'sampler2D' && uniforms[i] !== 0) {
                if (uniforms[i].baseTexture) {
                    shader.uniforms[i] = this.renderer.bindTexture(uniforms[i].baseTexture, textureCount);
                } else {
                    shader.uniforms[i] = textureCount;

                    // TODO
                    // this is helpful as renderTargets can also be set.
                    // Although thinking about it, we could probably
                    // make the filter texture cache return a RenderTexture
                    // rather than a renderTarget
                    var gl = this.renderer.gl;

                    this.renderer.boundTextures[textureCount] = this.renderer.emptyTextures[textureCount];
                    gl.activeTexture(gl.TEXTURE0 + textureCount);

                    uniforms[i].texture.bind();
                }

                textureCount++;
            } else if (uniformData[i].type === 'mat3') {
                // check if its PixiJS matrix..
                if (uniforms[i].a !== undefined) {
                    shader.uniforms[i] = uniforms[i].toArray(true);
                } else {
                    shader.uniforms[i] = uniforms[i];
                }
            } else if (uniformData[i].type === 'vec2') {
                // check if its a point..
                if (uniforms[i].x !== undefined) {
                    var val = shader.uniforms[i] || new Float32Array(2);

                    val[0] = uniforms[i].x;
                    val[1] = uniforms[i].y;
                    shader.uniforms[i] = val;
                } else {
                    shader.uniforms[i] = uniforms[i];
                }
            } else if (uniformData[i].type === 'float') {
                if (shader.uniforms.data[i].value !== uniformData[i]) {
                    shader.uniforms[i] = uniforms[i];
                }
            } else {
                shader.uniforms[i] = uniforms[i];
            }
        }
    };

    /**
     * Gets a render target from the pool, or creates a new one.
     *
     * @param {boolean} clear - Should we clear the render texture when we get it?
     * @param {number} resolution - The resolution of the target.
     * @return {PIXI.RenderTarget} The new render target
     */


    FilterManager.prototype.getRenderTarget = function getRenderTarget(clear, resolution) {
        var currentState = this.filterData.stack[this.filterData.index];
        var renderTarget = this.getPotRenderTarget(this.renderer.gl, currentState.sourceFrame.width, currentState.sourceFrame.height, resolution || currentState.resolution);

        renderTarget.setFrame(currentState.destinationFrame, currentState.sourceFrame);

        return renderTarget;
    };

    /**
     * Returns a render target to the pool.
     *
     * @param {PIXI.RenderTarget} renderTarget - The render target to return.
     */


    FilterManager.prototype.returnRenderTarget = function returnRenderTarget(renderTarget) {
        this.freePotRenderTarget(renderTarget);
    };

    /**
     * Calculates the mapped matrix.
     *
     * TODO playing around here.. this is temporary - (will end up in the shader)
     * this returns a matrix that will normalise map filter cords in the filter to screen space
     *
     * @param {PIXI.Matrix} outputMatrix - the matrix to output to.
     * @return {PIXI.Matrix} The mapped matrix.
     */


    FilterManager.prototype.calculateScreenSpaceMatrix = function calculateScreenSpaceMatrix(outputMatrix) {
        var currentState = this.filterData.stack[this.filterData.index];

        return filterTransforms.calculateScreenSpaceMatrix(outputMatrix, currentState.sourceFrame, currentState.renderTarget.size);
    };

    /**
     * Multiply vTextureCoord to this matrix to achieve (0,0,1,1) for filterArea
     *
     * @param {PIXI.Matrix} outputMatrix - The matrix to output to.
     * @return {PIXI.Matrix} The mapped matrix.
     */


    FilterManager.prototype.calculateNormalizedScreenSpaceMatrix = function calculateNormalizedScreenSpaceMatrix(outputMatrix) {
        var currentState = this.filterData.stack[this.filterData.index];

        return filterTransforms.calculateNormalizedScreenSpaceMatrix(outputMatrix, currentState.sourceFrame, currentState.renderTarget.size, currentState.destinationFrame);
    };

    /**
     * This will map the filter coord so that a texture can be used based on the transform of a sprite
     *
     * @param {PIXI.Matrix} outputMatrix - The matrix to output to.
     * @param {PIXI.Sprite} sprite - The sprite to map to.
     * @return {PIXI.Matrix} The mapped matrix.
     */


    FilterManager.prototype.calculateSpriteMatrix = function calculateSpriteMatrix(outputMatrix, sprite) {
        var currentState = this.filterData.stack[this.filterData.index];

        return filterTransforms.calculateSpriteMatrix(outputMatrix, currentState.sourceFrame, currentState.renderTarget.size, sprite);
    };

    /**
     * Destroys this Filter Manager.
     *
     */


    FilterManager.prototype.destroy = function destroy() {
        this.shaderCache = {};
        this.emptyPool();
    };

    /**
     * Gets a Power-of-Two render texture.
     *
     * TODO move to a seperate class could be on renderer?
     * also - could cause issue with multiple contexts?
     *
     * @private
     * @param {WebGLRenderingContext} gl - The webgl rendering context
     * @param {number} minWidth - The minimum width of the render target.
     * @param {number} minHeight - The minimum height of the render target.
     * @param {number} resolution - The resolution of the render target.
     * @return {PIXI.RenderTarget} The new render target.
     */


    FilterManager.prototype.getPotRenderTarget = function getPotRenderTarget(gl, minWidth, minHeight, resolution) {
        // TODO you could return a bigger texture if there is not one in the pool?
        minWidth = _bitTwiddle2.default.nextPow2(minWidth * resolution);
        minHeight = _bitTwiddle2.default.nextPow2(minHeight * resolution);

        var key = (minWidth & 0xFFFF) << 16 | minHeight & 0xFFFF;

        if (!this.pool[key]) {
            this.pool[key] = [];
        }

        var renderTarget = this.pool[key].pop();

        // creating render target will cause texture to be bound!
        if (!renderTarget) {
            // temporary bypass cache..
            var tex = this.renderer.boundTextures[0];

            gl.activeTexture(gl.TEXTURE0);

            // internally - this will cause a texture to be bound..
            renderTarget = new _RenderTarget2.default(gl, minWidth, minHeight, null, 1);

            // set the current one back
            gl.bindTexture(gl.TEXTURE_2D, tex._glTextures[this.renderer.CONTEXT_UID].texture);
        }

        // manually tweak the resolution...
        // this will not modify the size of the frame buffer, just its resolution.
        renderTarget.resolution = resolution;
        renderTarget.defaultFrame.width = renderTarget.size.width = minWidth / resolution;
        renderTarget.defaultFrame.height = renderTarget.size.height = minHeight / resolution;

        return renderTarget;
    };

    /**
     * Empties the texture pool.
     *
     */


    FilterManager.prototype.emptyPool = function emptyPool() {
        for (var i in this.pool) {
            var textures = this.pool[i];

            if (textures) {
                for (var j = 0; j < textures.length; j++) {
                    textures[j].destroy(true);
                }
            }
        }

        this.pool = {};
    };

    /**
     * Frees a render target back into the pool.
     *
     * @param {PIXI.RenderTarget} renderTarget - The renderTarget to free
     */


    FilterManager.prototype.freePotRenderTarget = function freePotRenderTarget(renderTarget) {
        var minWidth = renderTarget.size.width * renderTarget.resolution;
        var minHeight = renderTarget.size.height * renderTarget.resolution;
        var key = (minWidth & 0xFFFF) << 16 | minHeight & 0xFFFF;

        this.pool[key].push(renderTarget);
    };

    return FilterManager;
}(_WebGLManager3.default);

exports.default = FilterManager;
//# sourceMappingURL=FilterManager.js.map

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = createIndicesForQuads;
/**
 * Generic Mask Stack data structure
 *
 * @memberof PIXI
 * @function createIndicesForQuads
 * @private
 * @param {number} size - Number of quads
 * @return {Uint16Array} indices
 */
function createIndicesForQuads(size) {
    // the total number of indices in our array, there are 6 points per quad.

    var totalIndices = size * 6;

    var indices = new Uint16Array(totalIndices);

    // fill the indices with the quads to draw
    for (var i = 0, j = 0; i < totalIndices; i += 6, j += 4) {
        indices[i + 0] = j + 0;
        indices[i + 1] = j + 1;
        indices[i + 2] = j + 2;
        indices[i + 3] = j + 0;
        indices[i + 4] = j + 2;
        indices[i + 5] = j + 3;
    }

    return indices;
}
//# sourceMappingURL=createIndicesForQuads.js.map

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.calculateScreenSpaceMatrix = calculateScreenSpaceMatrix;
exports.calculateNormalizedScreenSpaceMatrix = calculateNormalizedScreenSpaceMatrix;
exports.calculateSpriteMatrix = calculateSpriteMatrix;

var _math = __webpack_require__(14);

/**
 * Calculates the mapped matrix
 * @param filterArea {Rectangle} The filter area
 * @param sprite {Sprite} the target sprite
 * @param outputMatrix {Matrix} @alvin
 */
// TODO playing around here.. this is temporary - (will end up in the shader)
// this returns a matrix that will normalise map filter cords in the filter to screen space
function calculateScreenSpaceMatrix(outputMatrix, filterArea, textureSize) {
    // let worldTransform = sprite.worldTransform.copy(Matrix.TEMP_MATRIX),
    // let texture = {width:1136, height:700};//sprite._texture.baseTexture;

    // TODO unwrap?
    var mappedMatrix = outputMatrix.identity();

    mappedMatrix.translate(filterArea.x / textureSize.width, filterArea.y / textureSize.height);

    mappedMatrix.scale(textureSize.width, textureSize.height);

    return mappedMatrix;
}

function calculateNormalizedScreenSpaceMatrix(outputMatrix, filterArea, textureSize) {
    var mappedMatrix = outputMatrix.identity();

    mappedMatrix.translate(filterArea.x / textureSize.width, filterArea.y / textureSize.height);

    var translateScaleX = textureSize.width / filterArea.width;
    var translateScaleY = textureSize.height / filterArea.height;

    mappedMatrix.scale(translateScaleX, translateScaleY);

    return mappedMatrix;
}

// this will map the filter coord so that a texture can be used based on the transform of a sprite
function calculateSpriteMatrix(outputMatrix, filterArea, textureSize, sprite) {
    var worldTransform = sprite.worldTransform.copy(_math.Matrix.TEMP_MATRIX);
    var texture = sprite._texture.baseTexture;

    // TODO unwrap?
    var mappedMatrix = outputMatrix.identity();

    // scale..
    var ratio = textureSize.height / textureSize.width;

    mappedMatrix.translate(filterArea.x / textureSize.width, filterArea.y / textureSize.height);

    mappedMatrix.scale(1, ratio);

    var translateScaleX = textureSize.width / texture.width;
    var translateScaleY = textureSize.height / texture.height;

    worldTransform.tx /= texture.width * translateScaleX;

    // this...?  free beer for anyone who can explain why this makes sense!
    worldTransform.ty /= texture.width * translateScaleX;
    // worldTransform.ty /= texture.height * translateScaleY;

    worldTransform.invert();
    mappedMatrix.prepend(worldTransform);

    // apply inverse scale..
    mappedMatrix.scale(1, 1 / ratio);

    mappedMatrix.scale(translateScaleX, translateScaleY);

    mappedMatrix.translate(sprite.anchor.x, sprite.anchor.y);

    return mappedMatrix;
}
//# sourceMappingURL=filterTransforms.js.map

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _pixiGlCore = __webpack_require__(16);

var _const = __webpack_require__(12);

var _RenderTarget = __webpack_require__(23);

var _RenderTarget2 = _interopRequireDefault(_RenderTarget);

var _utils = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Helper class to create a webGL Texture
 *
 * @class
 * @memberof PIXI
 */
var TextureManager = function () {
    /**
     * @param {PIXI.WebGLRenderer} renderer - A reference to the current renderer
     */
    function TextureManager(renderer) {
        _classCallCheck(this, TextureManager);

        /**
         * A reference to the current renderer
         *
         * @member {PIXI.WebGLRenderer}
         */
        this.renderer = renderer;

        /**
         * The current WebGL rendering context
         *
         * @member {WebGLRenderingContext}
         */
        this.gl = renderer.gl;

        /**
         * Track textures in the renderer so we can no longer listen to them on destruction.
         *
         * @member {Array<*>}
         * @private
         */
        this._managedTextures = [];
    }

    /**
     * Binds a texture.
     *
     */


    TextureManager.prototype.bindTexture = function bindTexture() {}
    // empty


    /**
     * Gets a texture.
     *
     */
    ;

    TextureManager.prototype.getTexture = function getTexture() {}
    // empty


    /**
     * Updates and/or Creates a WebGL texture for the renderer's context.
     *
     * @param {PIXI.BaseTexture|PIXI.Texture} texture - the texture to update
     * @param {number} location - the location the texture will be bound to.
     * @return {GLTexture} The gl texture.
     */
    ;

    TextureManager.prototype.updateTexture = function updateTexture(texture, location) {
        // assume it good!
        // texture = texture.baseTexture || texture;

        var gl = this.gl;

        var isRenderTexture = !!texture._glRenderTargets;

        if (!texture.hasLoaded) {
            return null;
        }

        var boundTextures = this.renderer.boundTextures;

        // if the location is undefined then this may have been called by n event.
        // this being the case the texture may already be bound to a slot. As a texture can only be bound once
        // we need to find its current location if it exists.
        if (location === undefined) {
            location = 0;

            // TODO maybe we can use texture bound ids later on...
            // check if texture is already bound..
            for (var i = 0; i < boundTextures.length; ++i) {
                if (boundTextures[i] === texture) {
                    location = i;
                    break;
                }
            }
        }

        boundTextures[location] = texture;

        gl.activeTexture(gl.TEXTURE0 + location);

        var glTexture = texture._glTextures[this.renderer.CONTEXT_UID];

        if (!glTexture) {
            if (isRenderTexture) {
                var renderTarget = new _RenderTarget2.default(this.gl, texture.width, texture.height, texture.scaleMode, texture.resolution);

                renderTarget.resize(texture.width, texture.height);
                texture._glRenderTargets[this.renderer.CONTEXT_UID] = renderTarget;
                glTexture = renderTarget.texture;
            } else {
                glTexture = new _pixiGlCore.GLTexture(this.gl, null, null, null, null);
                glTexture.bind(location);
                glTexture.premultiplyAlpha = true;
                glTexture.upload(texture.source);
            }

            texture._glTextures[this.renderer.CONTEXT_UID] = glTexture;

            texture.on('update', this.updateTexture, this);
            texture.on('dispose', this.destroyTexture, this);

            this._managedTextures.push(texture);

            if (texture.isPowerOfTwo) {
                if (texture.mipmap) {
                    glTexture.enableMipmap();
                }

                if (texture.wrapMode === _const.WRAP_MODES.CLAMP) {
                    glTexture.enableWrapClamp();
                } else if (texture.wrapMode === _const.WRAP_MODES.REPEAT) {
                    glTexture.enableWrapRepeat();
                } else {
                    glTexture.enableWrapMirrorRepeat();
                }
            } else {
                glTexture.enableWrapClamp();
            }

            if (texture.scaleMode === _const.SCALE_MODES.NEAREST) {
                glTexture.enableNearestScaling();
            } else {
                glTexture.enableLinearScaling();
            }
        }
        // the texture already exists so we only need to update it..
        else if (isRenderTexture) {
                texture._glRenderTargets[this.renderer.CONTEXT_UID].resize(texture.width, texture.height);
            } else {
                glTexture.upload(texture.source);
            }

        return glTexture;
    };

    /**
     * Deletes the texture from WebGL
     *
     * @param {PIXI.BaseTexture|PIXI.Texture} texture - the texture to destroy
     * @param {boolean} [skipRemove=false] - Whether to skip removing the texture from the TextureManager.
     */


    TextureManager.prototype.destroyTexture = function destroyTexture(texture, skipRemove) {
        texture = texture.baseTexture || texture;

        if (!texture.hasLoaded) {
            return;
        }

        var uid = this.renderer.CONTEXT_UID;
        var glTextures = texture._glTextures;
        var glRenderTargets = texture._glRenderTargets;

        if (glTextures[uid]) {
            this.renderer.unbindTexture(texture);

            glTextures[uid].destroy();
            texture.off('update', this.updateTexture, this);
            texture.off('dispose', this.destroyTexture, this);

            delete glTextures[uid];

            if (!skipRemove) {
                var i = this._managedTextures.indexOf(texture);

                if (i !== -1) {
                    (0, _utils.removeItems)(this._managedTextures, i, 1);
                }
            }
        }

        if (glRenderTargets && glRenderTargets[uid]) {
            glRenderTargets[uid].destroy();
            delete glRenderTargets[uid];
        }
    };

    /**
     * Deletes all the textures from WebGL
     */


    TextureManager.prototype.removeAll = function removeAll() {
        // empty all the old gl textures as they are useless now
        for (var i = 0; i < this._managedTextures.length; ++i) {
            var texture = this._managedTextures[i];

            if (texture._glTextures[this.renderer.CONTEXT_UID]) {
                delete texture._glTextures[this.renderer.CONTEXT_UID];
            }
        }
    };

    /**
     * Destroys this manager and removes all its textures
     */


    TextureManager.prototype.destroy = function destroy() {
        // destroy managed textures
        for (var i = 0; i < this._managedTextures.length; ++i) {
            var texture = this._managedTextures[i];

            this.destroyTexture(texture, true);

            texture.off('update', this.updateTexture, this);
            texture.off('dispose', this.destroyTexture, this);
        }

        this._managedTextures = null;
    };

    return TextureManager;
}();

exports.default = TextureManager;
//# sourceMappingURL=TextureManager.js.map

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _const = __webpack_require__(12);

var _settings = __webpack_require__(15);

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * TextureGarbageCollector. This class manages the GPU and ensures that it does not get clogged
 * up with textures that are no longer being used.
 *
 * @class
 * @memberof PIXI
 */
var TextureGarbageCollector = function () {
    /**
     * @param {PIXI.WebGLRenderer} renderer - The renderer this manager works for.
     */
    function TextureGarbageCollector(renderer) {
        _classCallCheck(this, TextureGarbageCollector);

        this.renderer = renderer;

        this.count = 0;
        this.checkCount = 0;
        this.maxIdle = _settings2.default.GC_MAX_IDLE;
        this.checkCountMax = _settings2.default.GC_MAX_CHECK_COUNT;
        this.mode = _settings2.default.GC_MODE;
    }

    /**
     * Checks to see when the last time a texture was used
     * if the texture has not been used for a specified amount of time it will be removed from the GPU
     */


    TextureGarbageCollector.prototype.update = function update() {
        this.count++;

        if (this.mode === _const.GC_MODES.MANUAL) {
            return;
        }

        this.checkCount++;

        if (this.checkCount > this.checkCountMax) {
            this.checkCount = 0;

            this.run();
        }
    };

    /**
     * Checks to see when the last time a texture was used
     * if the texture has not been used for a specified amount of time it will be removed from the GPU
     */


    TextureGarbageCollector.prototype.run = function run() {
        var tm = this.renderer.textureManager;
        var managedTextures = tm._managedTextures;
        var wasRemoved = false;

        for (var i = 0; i < managedTextures.length; i++) {
            var texture = managedTextures[i];

            // only supports non generated textures at the moment!
            if (!texture._glRenderTargets && this.count - texture.touched > this.maxIdle) {
                tm.destroyTexture(texture, true);
                managedTextures[i] = null;
                wasRemoved = true;
            }
        }

        if (wasRemoved) {
            var j = 0;

            for (var _i = 0; _i < managedTextures.length; _i++) {
                if (managedTextures[_i] !== null) {
                    managedTextures[j++] = managedTextures[_i];
                }
            }

            managedTextures.length = j;
        }
    };

    /**
     * Removes all the textures within the specified displayObject and its children from the GPU
     *
     * @param {PIXI.DisplayObject} displayObject - the displayObject to remove the textures from.
     */


    TextureGarbageCollector.prototype.unload = function unload(displayObject) {
        var tm = this.renderer.textureManager;

        // only destroy non generated textures
        if (displayObject._texture && displayObject._texture._glRenderTargets) {
            tm.destroyTexture(displayObject._texture, true);
        }

        for (var i = displayObject.children.length - 1; i >= 0; i--) {
            this.unload(displayObject.children[i]);
        }
    };

    return TextureGarbageCollector;
}();

exports.default = TextureGarbageCollector;
//# sourceMappingURL=TextureGarbageCollector.js.map

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _mapWebGLBlendModesToPixi = __webpack_require__(126);

var _mapWebGLBlendModesToPixi2 = _interopRequireDefault(_mapWebGLBlendModesToPixi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BLEND = 0;
var DEPTH_TEST = 1;
var FRONT_FACE = 2;
var CULL_FACE = 3;
var BLEND_FUNC = 4;

/**
 * A WebGL state machines
 *
 * @memberof PIXI
 * @class
 */

var WebGLState = function () {
    /**
     * @param {WebGLRenderingContext} gl - The current WebGL rendering context
     */
    function WebGLState(gl) {
        _classCallCheck(this, WebGLState);

        /**
         * The current active state
         *
         * @member {Uint8Array}
         */
        this.activeState = new Uint8Array(16);

        /**
         * The default state
         *
         * @member {Uint8Array}
         */
        this.defaultState = new Uint8Array(16);

        // default blend mode..
        this.defaultState[0] = 1;

        /**
         * The current state index in the stack
         *
         * @member {number}
         * @private
         */
        this.stackIndex = 0;

        /**
         * The stack holding all the different states
         *
         * @member {Array<*>}
         * @private
         */
        this.stack = [];

        /**
         * The current WebGL rendering context
         *
         * @member {WebGLRenderingContext}
         */
        this.gl = gl;

        this.maxAttribs = gl.getParameter(gl.MAX_VERTEX_ATTRIBS);

        this.attribState = {
            tempAttribState: new Array(this.maxAttribs),
            attribState: new Array(this.maxAttribs)
        };

        this.blendModes = (0, _mapWebGLBlendModesToPixi2.default)(gl);

        // check we have vao..
        this.nativeVaoExtension = gl.getExtension('OES_vertex_array_object') || gl.getExtension('MOZ_OES_vertex_array_object') || gl.getExtension('WEBKIT_OES_vertex_array_object');
    }

    /**
     * Pushes a new active state
     */


    WebGLState.prototype.push = function push() {
        // next state..
        var state = this.stack[this.stackIndex];

        if (!state) {
            state = this.stack[this.stackIndex] = new Uint8Array(16);
        }

        ++this.stackIndex;

        // copy state..
        // set active state so we can force overrides of gl state
        for (var i = 0; i < this.activeState.length; i++) {
            state[i] = this.activeState[i];
        }
    };

    /**
     * Pops a state out
     */


    WebGLState.prototype.pop = function pop() {
        var state = this.stack[--this.stackIndex];

        this.setState(state);
    };

    /**
     * Sets the current state
     *
     * @param {*} state - The state to set.
     */


    WebGLState.prototype.setState = function setState(state) {
        this.setBlend(state[BLEND]);
        this.setDepthTest(state[DEPTH_TEST]);
        this.setFrontFace(state[FRONT_FACE]);
        this.setCullFace(state[CULL_FACE]);
        this.setBlendMode(state[BLEND_FUNC]);
    };

    /**
     * Enables or disabled blending.
     *
     * @param {boolean} value - Turn on or off webgl blending.
     */


    WebGLState.prototype.setBlend = function setBlend(value) {
        value = value ? 1 : 0;

        if (this.activeState[BLEND] === value) {
            return;
        }

        this.activeState[BLEND] = value;
        this.gl[value ? 'enable' : 'disable'](this.gl.BLEND);
    };

    /**
     * Sets the blend mode.
     *
     * @param {number} value - The blend mode to set to.
     */


    WebGLState.prototype.setBlendMode = function setBlendMode(value) {
        if (value === this.activeState[BLEND_FUNC]) {
            return;
        }

        this.activeState[BLEND_FUNC] = value;

        var mode = this.blendModes[value];

        if (mode.length === 2) {
            this.gl.blendFunc(mode[0], mode[1]);
        } else {
            this.gl.blendFuncSeparate(mode[0], mode[1], mode[2], mode[3]);
        }
    };

    /**
     * Sets whether to enable or disable depth test.
     *
     * @param {boolean} value - Turn on or off webgl depth testing.
     */


    WebGLState.prototype.setDepthTest = function setDepthTest(value) {
        value = value ? 1 : 0;

        if (this.activeState[DEPTH_TEST] === value) {
            return;
        }

        this.activeState[DEPTH_TEST] = value;
        this.gl[value ? 'enable' : 'disable'](this.gl.DEPTH_TEST);
    };

    /**
     * Sets whether to enable or disable cull face.
     *
     * @param {boolean} value - Turn on or off webgl cull face.
     */


    WebGLState.prototype.setCullFace = function setCullFace(value) {
        value = value ? 1 : 0;

        if (this.activeState[CULL_FACE] === value) {
            return;
        }

        this.activeState[CULL_FACE] = value;
        this.gl[value ? 'enable' : 'disable'](this.gl.CULL_FACE);
    };

    /**
     * Sets the gl front face.
     *
     * @param {boolean} value - true is clockwise and false is counter-clockwise
     */


    WebGLState.prototype.setFrontFace = function setFrontFace(value) {
        value = value ? 1 : 0;

        if (this.activeState[FRONT_FACE] === value) {
            return;
        }

        this.activeState[FRONT_FACE] = value;
        this.gl.frontFace(this.gl[value ? 'CW' : 'CCW']);
    };

    /**
     * Disables all the vaos in use
     *
     */


    WebGLState.prototype.resetAttributes = function resetAttributes() {
        for (var i = 0; i < this.attribState.tempAttribState.length; i++) {
            this.attribState.tempAttribState[i] = 0;
        }

        for (var _i = 0; _i < this.attribState.attribState.length; _i++) {
            this.attribState.attribState[_i] = 0;
        }

        // im going to assume one is always active for performance reasons.
        for (var _i2 = 1; _i2 < this.maxAttribs; _i2++) {
            this.gl.disableVertexAttribArray(_i2);
        }
    };

    // used
    /**
     * Resets all the logic and disables the vaos
     */


    WebGLState.prototype.resetToDefault = function resetToDefault() {
        // unbind any VAO if they exist..
        if (this.nativeVaoExtension) {
            this.nativeVaoExtension.bindVertexArrayOES(null);
        }

        // reset all attributes..
        this.resetAttributes();

        // set active state so we can force overrides of gl state
        for (var i = 0; i < this.activeState.length; ++i) {
            this.activeState[i] = 32;
        }

        this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, false);

        this.setState(this.defaultState);
    };

    return WebGLState;
}();

exports.default = WebGLState;
//# sourceMappingURL=WebGLState.js.map

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mapWebGLBlendModesToPixi;

var _const = __webpack_require__(12);

/**
 * Maps gl blend combinations to WebGL.
 *
 * @memberof PIXI
 * @function mapWebGLBlendModesToPixi
 * @private
 * @param {WebGLRenderingContext} gl - The rendering context.
 * @param {string[]} [array=[]] - The array to output into.
 * @return {string[]} Mapped modes.
 */
function mapWebGLBlendModesToPixi(gl) {
    var array = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    // TODO - premultiply alpha would be different.
    // add a boolean for that!
    array[_const.BLEND_MODES.NORMAL] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[_const.BLEND_MODES.ADD] = [gl.ONE, gl.DST_ALPHA];
    array[_const.BLEND_MODES.MULTIPLY] = [gl.DST_COLOR, gl.ONE_MINUS_SRC_ALPHA];
    array[_const.BLEND_MODES.SCREEN] = [gl.ONE, gl.ONE_MINUS_SRC_COLOR];
    array[_const.BLEND_MODES.OVERLAY] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[_const.BLEND_MODES.DARKEN] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[_const.BLEND_MODES.LIGHTEN] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[_const.BLEND_MODES.COLOR_DODGE] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[_const.BLEND_MODES.COLOR_BURN] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[_const.BLEND_MODES.HARD_LIGHT] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[_const.BLEND_MODES.SOFT_LIGHT] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[_const.BLEND_MODES.DIFFERENCE] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[_const.BLEND_MODES.EXCLUSION] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[_const.BLEND_MODES.HUE] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[_const.BLEND_MODES.SATURATION] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[_const.BLEND_MODES.COLOR] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[_const.BLEND_MODES.LUMINOSITY] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];

    // not-premultiplied blend modes
    array[_const.BLEND_MODES.NORMAL_NPM] = [gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
    array[_const.BLEND_MODES.ADD_NPM] = [gl.SRC_ALPHA, gl.DST_ALPHA, gl.ONE, gl.DST_ALPHA];
    array[_const.BLEND_MODES.SCREEN_NPM] = [gl.SRC_ALPHA, gl.ONE_MINUS_SRC_COLOR, gl.ONE, gl.ONE_MINUS_SRC_COLOR];

    return array;
}
//# sourceMappingURL=mapWebGLBlendModesToPixi.js.map

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mapWebGLDrawModesToPixi;

var _const = __webpack_require__(12);

/**
 * Generic Mask Stack data structure.
 *
 * @memberof PIXI
 * @function mapWebGLDrawModesToPixi
 * @private
 * @param {WebGLRenderingContext} gl - The current WebGL drawing context
 * @param {object} [object={}] - The object to map into
 * @return {object} The mapped draw modes.
 */
function mapWebGLDrawModesToPixi(gl) {
  var object = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  object[_const.DRAW_MODES.POINTS] = gl.POINTS;
  object[_const.DRAW_MODES.LINES] = gl.LINES;
  object[_const.DRAW_MODES.LINE_LOOP] = gl.LINE_LOOP;
  object[_const.DRAW_MODES.LINE_STRIP] = gl.LINE_STRIP;
  object[_const.DRAW_MODES.TRIANGLES] = gl.TRIANGLES;
  object[_const.DRAW_MODES.TRIANGLE_STRIP] = gl.TRIANGLE_STRIP;
  object[_const.DRAW_MODES.TRIANGLE_FAN] = gl.TRIANGLE_FAN;

  return object;
}
//# sourceMappingURL=mapWebGLDrawModesToPixi.js.map

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = validateContext;
function validateContext(gl) {
    var attributes = gl.getContextAttributes();

    // this is going to be fairly simple for now.. but at least we have room to grow!
    if (!attributes.stencil) {
        /* eslint-disable no-console */
        console.warn('Provided WebGL context does not have a stencil buffer, masks may not render correctly');
        /* eslint-enable no-console */
    }
}
//# sourceMappingURL=validateContext.js.map

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _pixiGlCore = __webpack_require__(16);

var _pixiGlCore2 = _interopRequireDefault(_pixiGlCore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * An object containing WebGL specific properties to be used by the WebGL renderer
 *
 * @class
 * @private
 * @memberof PIXI
 */
var WebGLGraphicsData = function () {
  /**
   * @param {WebGLRenderingContext} gl - The current WebGL drawing context
   * @param {PIXI.Shader} shader - The shader
   * @param {object} attribsState - The state for the VAO
   */
  function WebGLGraphicsData(gl, shader, attribsState) {
    _classCallCheck(this, WebGLGraphicsData);

    /**
     * The current WebGL drawing context
     *
     * @member {WebGLRenderingContext}
     */
    this.gl = gl;

    // TODO does this need to be split before uploading??
    /**
     * An array of color components (r,g,b)
     * @member {number[]}
     */
    this.color = [0, 0, 0]; // color split!

    /**
     * An array of points to draw
     * @member {PIXI.Point[]}
     */
    this.points = [];

    /**
     * The indices of the vertices
     * @member {number[]}
     */
    this.indices = [];
    /**
     * The main buffer
     * @member {WebGLBuffer}
     */
    this.buffer = _pixiGlCore2.default.GLBuffer.createVertexBuffer(gl);

    /**
     * The index buffer
     * @member {WebGLBuffer}
     */
    this.indexBuffer = _pixiGlCore2.default.GLBuffer.createIndexBuffer(gl);

    /**
     * Whether this graphics is dirty or not
     * @member {boolean}
     */
    this.dirty = true;

    /**
     * Whether this graphics is nativeLines or not
     * @member {boolean}
     */
    this.nativeLines = false;

    this.glPoints = null;
    this.glIndices = null;

    /**
     *
     * @member {PIXI.Shader}
     */
    this.shader = shader;

    this.vao = new _pixiGlCore2.default.VertexArrayObject(gl, attribsState).addIndex(this.indexBuffer).addAttribute(this.buffer, shader.attributes.aVertexPosition, gl.FLOAT, false, 4 * 6, 0).addAttribute(this.buffer, shader.attributes.aColor, gl.FLOAT, false, 4 * 6, 2 * 4);
  }

  /**
   * Resets the vertices and the indices
   */


  WebGLGraphicsData.prototype.reset = function reset() {
    this.points.length = 0;
    this.indices.length = 0;
  };

  /**
   * Binds the buffers and uploads the data
   */


  WebGLGraphicsData.prototype.upload = function upload() {
    this.glPoints = new Float32Array(this.points);
    this.buffer.upload(this.glPoints);

    this.glIndices = new Uint16Array(this.indices);
    this.indexBuffer.upload(this.glIndices);

    this.dirty = false;
  };

  /**
   * Empties all the data
   */


  WebGLGraphicsData.prototype.destroy = function destroy() {
    this.color = null;
    this.points = null;
    this.indices = null;

    this.vao.destroy();
    this.buffer.destroy();
    this.indexBuffer.destroy();

    this.gl = null;

    this.buffer = null;
    this.indexBuffer = null;

    this.glPoints = null;
    this.glIndices = null;
  };

  return WebGLGraphicsData;
}();

exports.default = WebGLGraphicsData;
//# sourceMappingURL=WebGLGraphicsData.js.map

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Shader2 = __webpack_require__(58);

var _Shader3 = _interopRequireDefault(_Shader2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * This shader is used to draw simple primitive shapes for {@link PIXI.Graphics}.
 *
 * @class
 * @memberof PIXI
 * @extends PIXI.Shader
 */
var PrimitiveShader = function (_Shader) {
    _inherits(PrimitiveShader, _Shader);

    /**
     * @param {WebGLRenderingContext} gl - The webgl shader manager this shader works for.
     */
    function PrimitiveShader(gl) {
        _classCallCheck(this, PrimitiveShader);

        return _possibleConstructorReturn(this, _Shader.call(this, gl,
        // vertex shader
        ['attribute vec2 aVertexPosition;', 'attribute vec4 aColor;', 'uniform mat3 translationMatrix;', 'uniform mat3 projectionMatrix;', 'uniform float alpha;', 'uniform vec3 tint;', 'varying vec4 vColor;', 'void main(void){', '   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);', '   vColor = aColor * vec4(tint * alpha, alpha);', '}'].join('\n'),
        // fragment shader
        ['varying vec4 vColor;', 'void main(void){', '   gl_FragColor = vColor;', '}'].join('\n')));
    }

    return PrimitiveShader;
}(_Shader3.default);

exports.default = PrimitiveShader;
//# sourceMappingURL=PrimitiveShader.js.map

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = buildPoly;

var _buildLine = __webpack_require__(24);

var _buildLine2 = _interopRequireDefault(_buildLine);

var _utils = __webpack_require__(13);

var _earcut = __webpack_require__(59);

var _earcut2 = _interopRequireDefault(_earcut);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Builds a polygon to draw
 *
 * Ignored from docs since it is not directly exposed.
 *
 * @ignore
 * @private
 * @param {PIXI.WebGLGraphicsData} graphicsData - The graphics object containing all the necessary properties
 * @param {object} webGLData - an object containing all the webGL-specific information to create this shape
 * @param {object} webGLDataNativeLines - an object containing all the webGL-specific information to create nativeLines
 */
function buildPoly(graphicsData, webGLData, webGLDataNativeLines) {
    graphicsData.points = graphicsData.shape.points.slice();

    var points = graphicsData.points;

    if (graphicsData.fill && points.length >= 6) {
        var holeArray = [];
        // Process holes..
        var holes = graphicsData.holes;

        for (var i = 0; i < holes.length; i++) {
            var hole = holes[i];

            holeArray.push(points.length / 2);

            points = points.concat(hole.points);
        }

        // get first and last point.. figure out the middle!
        var verts = webGLData.points;
        var indices = webGLData.indices;

        var length = points.length / 2;

        // sort color
        var color = (0, _utils.hex2rgb)(graphicsData.fillColor);
        var alpha = graphicsData.fillAlpha;
        var r = color[0] * alpha;
        var g = color[1] * alpha;
        var b = color[2] * alpha;

        var triangles = (0, _earcut2.default)(points, holeArray, 2);

        if (!triangles) {
            return;
        }

        var vertPos = verts.length / 6;

        for (var _i = 0; _i < triangles.length; _i += 3) {
            indices.push(triangles[_i] + vertPos);
            indices.push(triangles[_i] + vertPos);
            indices.push(triangles[_i + 1] + vertPos);
            indices.push(triangles[_i + 2] + vertPos);
            indices.push(triangles[_i + 2] + vertPos);
        }

        for (var _i2 = 0; _i2 < length; _i2++) {
            verts.push(points[_i2 * 2], points[_i2 * 2 + 1], r, g, b, alpha);
        }
    }

    if (graphicsData.lineWidth > 0) {
        (0, _buildLine2.default)(graphicsData, webGLData, webGLDataNativeLines);
    }
}
//# sourceMappingURL=buildPoly.js.map

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = buildRectangle;

var _buildLine = __webpack_require__(24);

var _buildLine2 = _interopRequireDefault(_buildLine);

var _utils = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Builds a rectangle to draw
 *
 * Ignored from docs since it is not directly exposed.
 *
 * @ignore
 * @private
 * @param {PIXI.WebGLGraphicsData} graphicsData - The graphics object containing all the necessary properties
 * @param {object} webGLData - an object containing all the webGL-specific information to create this shape
 * @param {object} webGLDataNativeLines - an object containing all the webGL-specific information to create nativeLines
 */
function buildRectangle(graphicsData, webGLData, webGLDataNativeLines) {
    // --- //
    // need to convert points to a nice regular data
    //
    var rectData = graphicsData.shape;
    var x = rectData.x;
    var y = rectData.y;
    var width = rectData.width;
    var height = rectData.height;

    if (graphicsData.fill) {
        var color = (0, _utils.hex2rgb)(graphicsData.fillColor);
        var alpha = graphicsData.fillAlpha;

        var r = color[0] * alpha;
        var g = color[1] * alpha;
        var b = color[2] * alpha;

        var verts = webGLData.points;
        var indices = webGLData.indices;

        var vertPos = verts.length / 6;

        // start
        verts.push(x, y);
        verts.push(r, g, b, alpha);

        verts.push(x + width, y);
        verts.push(r, g, b, alpha);

        verts.push(x, y + height);
        verts.push(r, g, b, alpha);

        verts.push(x + width, y + height);
        verts.push(r, g, b, alpha);

        // insert 2 dead triangles..
        indices.push(vertPos, vertPos, vertPos + 1, vertPos + 2, vertPos + 3, vertPos + 3);
    }

    if (graphicsData.lineWidth) {
        var tempPoints = graphicsData.points;

        graphicsData.points = [x, y, x + width, y, x + width, y + height, x, y + height, x, y];

        (0, _buildLine2.default)(graphicsData, webGLData, webGLDataNativeLines);

        graphicsData.points = tempPoints;
    }
}
//# sourceMappingURL=buildRectangle.js.map

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = buildRoundedRectangle;

var _earcut = __webpack_require__(59);

var _earcut2 = _interopRequireDefault(_earcut);

var _buildLine = __webpack_require__(24);

var _buildLine2 = _interopRequireDefault(_buildLine);

var _utils = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Builds a rounded rectangle to draw
 *
 * Ignored from docs since it is not directly exposed.
 *
 * @ignore
 * @private
 * @param {PIXI.WebGLGraphicsData} graphicsData - The graphics object containing all the necessary properties
 * @param {object} webGLData - an object containing all the webGL-specific information to create this shape
 * @param {object} webGLDataNativeLines - an object containing all the webGL-specific information to create nativeLines
 */
function buildRoundedRectangle(graphicsData, webGLData, webGLDataNativeLines) {
    var rrectData = graphicsData.shape;
    var x = rrectData.x;
    var y = rrectData.y;
    var width = rrectData.width;
    var height = rrectData.height;

    var radius = rrectData.radius;

    var recPoints = [];

    recPoints.push(x, y + radius);
    quadraticBezierCurve(x, y + height - radius, x, y + height, x + radius, y + height, recPoints);
    quadraticBezierCurve(x + width - radius, y + height, x + width, y + height, x + width, y + height - radius, recPoints);
    quadraticBezierCurve(x + width, y + radius, x + width, y, x + width - radius, y, recPoints);
    quadraticBezierCurve(x + radius, y, x, y, x, y + radius + 0.0000000001, recPoints);

    // this tiny number deals with the issue that occurs when points overlap and earcut fails to triangulate the item.
    // TODO - fix this properly, this is not very elegant.. but it works for now.

    if (graphicsData.fill) {
        var color = (0, _utils.hex2rgb)(graphicsData.fillColor);
        var alpha = graphicsData.fillAlpha;

        var r = color[0] * alpha;
        var g = color[1] * alpha;
        var b = color[2] * alpha;

        var verts = webGLData.points;
        var indices = webGLData.indices;

        var vecPos = verts.length / 6;

        var triangles = (0, _earcut2.default)(recPoints, null, 2);

        for (var i = 0, j = triangles.length; i < j; i += 3) {
            indices.push(triangles[i] + vecPos);
            indices.push(triangles[i] + vecPos);
            indices.push(triangles[i + 1] + vecPos);
            indices.push(triangles[i + 2] + vecPos);
            indices.push(triangles[i + 2] + vecPos);
        }

        for (var _i = 0, _j = recPoints.length; _i < _j; _i++) {
            verts.push(recPoints[_i], recPoints[++_i], r, g, b, alpha);
        }
    }

    if (graphicsData.lineWidth) {
        var tempPoints = graphicsData.points;

        graphicsData.points = recPoints;

        (0, _buildLine2.default)(graphicsData, webGLData, webGLDataNativeLines);

        graphicsData.points = tempPoints;
    }
}

/**
 * Calculate a single point for a quadratic bezier curve.
 * Utility function used by quadraticBezierCurve.
 * Ignored from docs since it is not directly exposed.
 *
 * @ignore
 * @private
 * @param {number} n1 - first number
 * @param {number} n2 - second number
 * @param {number} perc - percentage
 * @return {number} the result
 *
 */
function getPt(n1, n2, perc) {
    var diff = n2 - n1;

    return n1 + diff * perc;
}

/**
 * Calculate the points for a quadratic bezier curve. (helper function..)
 * Based on: https://stackoverflow.com/questions/785097/how-do-i-implement-a-bezier-curve-in-c
 *
 * Ignored from docs since it is not directly exposed.
 *
 * @ignore
 * @private
 * @param {number} fromX - Origin point x
 * @param {number} fromY - Origin point x
 * @param {number} cpX - Control point x
 * @param {number} cpY - Control point y
 * @param {number} toX - Destination point x
 * @param {number} toY - Destination point y
 * @param {number[]} [out=[]] - The output array to add points into. If not passed, a new array is created.
 * @return {number[]} an array of points
 */
function quadraticBezierCurve(fromX, fromY, cpX, cpY, toX, toY) {
    var out = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : [];

    var n = 20;
    var points = out;

    var xa = 0;
    var ya = 0;
    var xb = 0;
    var yb = 0;
    var x = 0;
    var y = 0;

    for (var i = 0, j = 0; i <= n; ++i) {
        j = i / n;

        // The Green Line
        xa = getPt(fromX, cpX, j);
        ya = getPt(fromY, cpY, j);
        xb = getPt(cpX, toX, j);
        yb = getPt(cpY, toY, j);

        // The Black Dot
        x = getPt(xa, xb, j);
        y = getPt(ya, yb, j);

        points.push(x, y);
    }

    return points;
}
//# sourceMappingURL=buildRoundedRectangle.js.map

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = buildCircle;

var _buildLine = __webpack_require__(24);

var _buildLine2 = _interopRequireDefault(_buildLine);

var _const = __webpack_require__(12);

var _utils = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Builds a circle to draw
 *
 * Ignored from docs since it is not directly exposed.
 *
 * @ignore
 * @private
 * @param {PIXI.WebGLGraphicsData} graphicsData - The graphics object to draw
 * @param {object} webGLData - an object containing all the webGL-specific information to create this shape
 * @param {object} webGLDataNativeLines - an object containing all the webGL-specific information to create nativeLines
 */
function buildCircle(graphicsData, webGLData, webGLDataNativeLines) {
    // need to convert points to a nice regular data
    var circleData = graphicsData.shape;
    var x = circleData.x;
    var y = circleData.y;
    var width = void 0;
    var height = void 0;

    // TODO - bit hacky??
    if (graphicsData.type === _const.SHAPES.CIRC) {
        width = circleData.radius;
        height = circleData.radius;
    } else {
        width = circleData.width;
        height = circleData.height;
    }

    if (width === 0 || height === 0) {
        return;
    }

    var totalSegs = Math.floor(30 * Math.sqrt(circleData.radius)) || Math.floor(15 * Math.sqrt(circleData.width + circleData.height));

    var seg = Math.PI * 2 / totalSegs;

    if (graphicsData.fill) {
        var color = (0, _utils.hex2rgb)(graphicsData.fillColor);
        var alpha = graphicsData.fillAlpha;

        var r = color[0] * alpha;
        var g = color[1] * alpha;
        var b = color[2] * alpha;

        var verts = webGLData.points;
        var indices = webGLData.indices;

        var vecPos = verts.length / 6;

        indices.push(vecPos);

        for (var i = 0; i < totalSegs + 1; i++) {
            verts.push(x, y, r, g, b, alpha);

            verts.push(x + Math.sin(seg * i) * width, y + Math.cos(seg * i) * height, r, g, b, alpha);

            indices.push(vecPos++, vecPos++);
        }

        indices.push(vecPos - 1);
    }

    if (graphicsData.lineWidth) {
        var tempPoints = graphicsData.points;

        graphicsData.points = [];

        for (var _i = 0; _i < totalSegs + 1; _i++) {
            graphicsData.points.push(x + Math.sin(seg * _i) * width, y + Math.cos(seg * _i) * height);
        }

        (0, _buildLine2.default)(graphicsData, webGLData, webGLDataNativeLines);

        graphicsData.points = tempPoints;
    }
}
//# sourceMappingURL=buildCircle.js.map

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _CanvasRenderer = __webpack_require__(22);

var _CanvasRenderer2 = _interopRequireDefault(_CanvasRenderer);

var _const = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @author Mat Groves
 *
 * Big thanks to the very clever Matt DesLauriers <mattdesl> https://github.com/mattdesl/
 * for creating the original PixiJS version!
 * Also a thanks to https://github.com/bchevalier for tweaking the tint and alpha so that they
 * now share 4 bytes on the vertex buffer
 *
 * Heavily inspired by LibGDX's CanvasGraphicsRenderer:
 * https://github.com/libgdx/libgdx/blob/1.0.0/gdx/src/com/badlogic/gdx/graphics/glutils/ShapeRenderer.java
 */

/**
 * Renderer dedicated to drawing and batching graphics objects.
 *
 * @class
 * @private
 * @memberof PIXI
 */
var CanvasGraphicsRenderer = function () {
    /**
     * @param {PIXI.CanvasRenderer} renderer - The current PIXI renderer.
     */
    function CanvasGraphicsRenderer(renderer) {
        _classCallCheck(this, CanvasGraphicsRenderer);

        this.renderer = renderer;
    }

    /**
     * Renders a Graphics object to a canvas.
     *
     * @param {PIXI.Graphics} graphics - the actual graphics object to render
     */


    CanvasGraphicsRenderer.prototype.render = function render(graphics) {
        var renderer = this.renderer;
        var context = renderer.context;
        var worldAlpha = graphics.worldAlpha;
        var transform = graphics.transform.worldTransform;
        var resolution = renderer.resolution;

        // if the tint has changed, set the graphics object to dirty.
        if (this._prevTint !== this.tint) {
            this.dirty = true;
        }

        context.setTransform(transform.a * resolution, transform.b * resolution, transform.c * resolution, transform.d * resolution, transform.tx * resolution, transform.ty * resolution);

        if (graphics.dirty) {
            this.updateGraphicsTint(graphics);
            graphics.dirty = false;
        }

        renderer.setBlendMode(graphics.blendMode);

        for (var i = 0; i < graphics.graphicsData.length; i++) {
            var data = graphics.graphicsData[i];
            var shape = data.shape;

            var fillColor = data._fillTint;
            var lineColor = data._lineTint;

            context.lineWidth = data.lineWidth;

            if (data.type === _const.SHAPES.POLY) {
                context.beginPath();

                this.renderPolygon(shape.points, shape.closed, context);

                for (var j = 0; j < data.holes.length; j++) {
                    this.renderPolygon(data.holes[j].points, true, context);
                }

                if (data.fill) {
                    context.globalAlpha = data.fillAlpha * worldAlpha;
                    context.fillStyle = '#' + ('00000' + (fillColor | 0).toString(16)).substr(-6);
                    context.fill();
                }
                if (data.lineWidth) {
                    context.globalAlpha = data.lineAlpha * worldAlpha;
                    context.strokeStyle = '#' + ('00000' + (lineColor | 0).toString(16)).substr(-6);
                    context.stroke();
                }
            } else if (data.type === _const.SHAPES.RECT) {
                if (data.fillColor || data.fillColor === 0) {
                    context.globalAlpha = data.fillAlpha * worldAlpha;
                    context.fillStyle = '#' + ('00000' + (fillColor | 0).toString(16)).substr(-6);
                    context.fillRect(shape.x, shape.y, shape.width, shape.height);
                }
                if (data.lineWidth) {
                    context.globalAlpha = data.lineAlpha * worldAlpha;
                    context.strokeStyle = '#' + ('00000' + (lineColor | 0).toString(16)).substr(-6);
                    context.strokeRect(shape.x, shape.y, shape.width, shape.height);
                }
            } else if (data.type === _const.SHAPES.CIRC) {
                // TODO - need to be Undefined!
                context.beginPath();
                context.arc(shape.x, shape.y, shape.radius, 0, 2 * Math.PI);
                context.closePath();

                if (data.fill) {
                    context.globalAlpha = data.fillAlpha * worldAlpha;
                    context.fillStyle = '#' + ('00000' + (fillColor | 0).toString(16)).substr(-6);
                    context.fill();
                }
                if (data.lineWidth) {
                    context.globalAlpha = data.lineAlpha * worldAlpha;
                    context.strokeStyle = '#' + ('00000' + (lineColor | 0).toString(16)).substr(-6);
                    context.stroke();
                }
            } else if (data.type === _const.SHAPES.ELIP) {
                // ellipse code taken from: http://stackoverflow.com/questions/2172798/how-to-draw-an-oval-in-html5-canvas

                var w = shape.width * 2;
                var h = shape.height * 2;

                var x = shape.x - w / 2;
                var y = shape.y - h / 2;

                context.beginPath();

                var kappa = 0.5522848;
                var ox = w / 2 * kappa; // control point offset horizontal
                var oy = h / 2 * kappa; // control point offset vertical
                var xe = x + w; // x-end
                var ye = y + h; // y-end
                var xm = x + w / 2; // x-middle
                var ym = y + h / 2; // y-middle

                context.moveTo(x, ym);
                context.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
                context.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
                context.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
                context.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);

                context.closePath();

                if (data.fill) {
                    context.globalAlpha = data.fillAlpha * worldAlpha;
                    context.fillStyle = '#' + ('00000' + (fillColor | 0).toString(16)).substr(-6);
                    context.fill();
                }
                if (data.lineWidth) {
                    context.globalAlpha = data.lineAlpha * worldAlpha;
                    context.strokeStyle = '#' + ('00000' + (lineColor | 0).toString(16)).substr(-6);
                    context.stroke();
                }
            } else if (data.type === _const.SHAPES.RREC) {
                var rx = shape.x;
                var ry = shape.y;
                var width = shape.width;
                var height = shape.height;
                var radius = shape.radius;

                var maxRadius = Math.min(width, height) / 2 | 0;

                radius = radius > maxRadius ? maxRadius : radius;

                context.beginPath();
                context.moveTo(rx, ry + radius);
                context.lineTo(rx, ry + height - radius);
                context.quadraticCurveTo(rx, ry + height, rx + radius, ry + height);
                context.lineTo(rx + width - radius, ry + height);
                context.quadraticCurveTo(rx + width, ry + height, rx + width, ry + height - radius);
                context.lineTo(rx + width, ry + radius);
                context.quadraticCurveTo(rx + width, ry, rx + width - radius, ry);
                context.lineTo(rx + radius, ry);
                context.quadraticCurveTo(rx, ry, rx, ry + radius);
                context.closePath();

                if (data.fillColor || data.fillColor === 0) {
                    context.globalAlpha = data.fillAlpha * worldAlpha;
                    context.fillStyle = '#' + ('00000' + (fillColor | 0).toString(16)).substr(-6);
                    context.fill();
                }

                if (data.lineWidth) {
                    context.globalAlpha = data.lineAlpha * worldAlpha;
                    context.strokeStyle = '#' + ('00000' + (lineColor | 0).toString(16)).substr(-6);
                    context.stroke();
                }
            }
        }
    };

    /**
     * Updates the tint of a graphics object
     *
     * @private
     * @param {PIXI.Graphics} graphics - the graphics that will have its tint updated
     */


    CanvasGraphicsRenderer.prototype.updateGraphicsTint = function updateGraphicsTint(graphics) {
        graphics._prevTint = graphics.tint;

        var tintR = (graphics.tint >> 16 & 0xFF) / 255;
        var tintG = (graphics.tint >> 8 & 0xFF) / 255;
        var tintB = (graphics.tint & 0xFF) / 255;

        for (var i = 0; i < graphics.graphicsData.length; ++i) {
            var data = graphics.graphicsData[i];

            var fillColor = data.fillColor | 0;
            var lineColor = data.lineColor | 0;

            // super inline cos im an optimization NAZI :)
            data._fillTint = ((fillColor >> 16 & 0xFF) / 255 * tintR * 255 << 16) + ((fillColor >> 8 & 0xFF) / 255 * tintG * 255 << 8) + (fillColor & 0xFF) / 255 * tintB * 255;

            data._lineTint = ((lineColor >> 16 & 0xFF) / 255 * tintR * 255 << 16) + ((lineColor >> 8 & 0xFF) / 255 * tintG * 255 << 8) + (lineColor & 0xFF) / 255 * tintB * 255;
        }
    };

    /**
     * Renders a polygon.
     *
     * @param {PIXI.Point[]} points - The points to render
     * @param {boolean} close - Should the polygon be closed
     * @param {CanvasRenderingContext2D} context - The rendering context to use
     */


    CanvasGraphicsRenderer.prototype.renderPolygon = function renderPolygon(points, close, context) {
        context.moveTo(points[0], points[1]);

        for (var j = 1; j < points.length / 2; ++j) {
            context.lineTo(points[j * 2], points[j * 2 + 1]);
        }

        if (close) {
            context.closePath();
        }
    };

    /**
     * destroy graphics object
     *
     */


    CanvasGraphicsRenderer.prototype.destroy = function destroy() {
        this.renderer = null;
    };

    return CanvasGraphicsRenderer;
}();

exports.default = CanvasGraphicsRenderer;


_CanvasRenderer2.default.registerPlugin('graphics', CanvasGraphicsRenderer);
//# sourceMappingURL=CanvasGraphicsRenderer.js.map

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _autoDetectRenderer = __webpack_require__(60);

var _Container = __webpack_require__(19);

var _Container2 = _interopRequireDefault(_Container);

var _ticker = __webpack_require__(32);

var _settings = __webpack_require__(15);

var _settings2 = _interopRequireDefault(_settings);

var _const = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Convenience class to create a new PIXI application.
 * This class automatically creates the renderer, ticker
 * and root container.
 *
 * @example
 * // Create the application
 * const app = new PIXI.Application();
 *
 * // Add the view to the DOM
 * document.body.appendChild(app.view);
 *
 * // ex, add display objects
 * app.stage.addChild(PIXI.Sprite.fromImage('something.png'));
 *
 * @class
 * @memberof PIXI
 */
var Application = function () {
    // eslint-disable-next-line valid-jsdoc
    /**
     * @param {object} [options] - The optional renderer parameters
     * @param {number} [options.width=800] - the width of the renderers view
     * @param {number} [options.height=600] - the height of the renderers view
     * @param {HTMLCanvasElement} [options.view] - the canvas to use as a view, optional
     * @param {boolean} [options.transparent=false] - If the render view is transparent, default false
     * @param {boolean} [options.antialias=false] - sets antialias (only applicable in chrome at the moment)
     * @param {boolean} [options.preserveDrawingBuffer=false] - enables drawing buffer preservation, enable this if you
     *  need to call toDataUrl on the webgl context
     * @param {number} [options.resolution=1] - The resolution / device pixel ratio of the renderer, retina would be 2
     * @param {boolean} [options.forceCanvas=false] - prevents selection of WebGL renderer, even if such is present
     * @param {number} [options.backgroundColor=0x000000] - The background color of the rendered area
     *  (shown if not transparent).
     * @param {boolean} [options.clearBeforeRender=true] - This sets if the renderer will clear the canvas or
     *   not before the new render pass.
     * @param {boolean} [options.roundPixels=false] - If true PixiJS will Math.floor() x/y values when rendering,
     *  stopping pixel interpolation.
     * @param {boolean} [options.forceFXAA=false] - forces FXAA antialiasing to be used over native.
     *  FXAA is faster, but may not always look as great **webgl only**
     * @param {boolean} [options.legacy=false] - `true` to ensure compatibility with older / less advanced devices.
     *  If you experience unexplained flickering try setting this to true. **webgl only**
     * @param {boolean} [options.sharedTicker=false] - `true` to use PIXI.ticker.shared, `false` to create new ticker.
     * @param {boolean} [options.sharedLoader=false] - `true` to use PIXI.loaders.shared, `false` to create new Loader.
     */
    function Application(options, arg2, arg3, arg4, arg5) {
        _classCallCheck(this, Application);

        // Support for constructor(width, height, options, noWebGL, useSharedTicker)
        if (typeof options === 'number') {
            options = Object.assign({
                width: options,
                height: arg2 || _settings2.default.RENDER_OPTIONS.height,
                forceCanvas: !!arg4,
                sharedTicker: !!arg5
            }, arg3);
        }

        /**
         * The default options, so we mixin functionality later.
         * @member {object}
         * @protected
         */
        this._options = options = Object.assign({
            sharedTicker: false,
            forceCanvas: false,
            sharedLoader: false
        }, options);

        /**
         * WebGL renderer if available, otherwise CanvasRenderer
         * @member {PIXI.WebGLRenderer|PIXI.CanvasRenderer}
         */
        this.renderer = (0, _autoDetectRenderer.autoDetectRenderer)(options);

        /**
         * The root display container that's rendered.
         * @member {PIXI.Container}
         */
        this.stage = new _Container2.default();

        /**
         * Internal reference to the ticker
         * @member {PIXI.ticker.Ticker}
         * @private
         */
        this._ticker = null;

        /**
         * Ticker for doing render updates.
         * @member {PIXI.ticker.Ticker}
         * @default PIXI.ticker.shared
         */
        this.ticker = options.sharedTicker ? _ticker.shared : new _ticker.Ticker();

        // Start the rendering
        this.start();
    }

    /**
     * Render the current stage.
     */
    Application.prototype.render = function render() {
        this.renderer.render(this.stage);
    };

    /**
     * Convenience method for stopping the render.
     */


    Application.prototype.stop = function stop() {
        this._ticker.stop();
    };

    /**
     * Convenience method for starting the render.
     */


    Application.prototype.start = function start() {
        this._ticker.start();
    };

    /**
     * Reference to the renderer's canvas element.
     * @member {HTMLCanvasElement}
     * @readonly
     */


    /**
     * Destroy and don't use after this.
     * @param {Boolean} [removeView=false] Automatically remove canvas from DOM.
     */
    Application.prototype.destroy = function destroy(removeView) {
        var oldTicker = this._ticker;

        this.ticker = null;

        oldTicker.destroy();

        this.stage.destroy();
        this.stage = null;

        this.renderer.destroy(removeView);
        this.renderer = null;

        this._options = null;
    };

    _createClass(Application, [{
        key: 'ticker',
        set: function set(ticker) // eslint-disable-line require-jsdoc
        {
            if (this._ticker) {
                this._ticker.remove(this.render, this);
            }
            this._ticker = ticker;
            if (ticker) {
                ticker.add(this.render, this, _const.UPDATE_PRIORITY.LOW);
            }
        },
        get: function get() // eslint-disable-line require-jsdoc
        {
            return this._ticker;
        }
    }, {
        key: 'view',
        get: function get() {
            return this.renderer.view;
        }

        /**
         * Reference to the renderer's screen rectangle. Its safe to use as filterArea or hitArea for whole screen
         * @member {PIXI.Rectangle}
         * @readonly
         */

    }, {
        key: 'screen',
        get: function get() {
            return this.renderer.screen;
        }
    }]);

    return Application;
}();

exports.default = Application;
//# sourceMappingURL=Application.js.map

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(138);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(2)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--2-1!../../../../node_modules/postcss-loader/lib/index.js??ref--2-2!../../../../node_modules/sass-loader/lib/loader.js??ref--2-3!../../../../node_modules/universal-alias-loader/index.js??ref--0!./story.sass", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js??ref--2-1!../../../../node_modules/postcss-loader/lib/index.js??ref--2-2!../../../../node_modules/sass-loader/lib/loader.js??ref--2-3!../../../../node_modules/universal-alias-loader/index.js??ref--0!./story.sass");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "/* colors */\n/* Spacing */\n/* Fonts */\n/* Effects */\n._2Czlt {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  height: 590px;\n  width: 590px;\n  padding: 5px;\n  padding-top: 90px;\n  background: #fafafa;\n  border-radius: 15px;\n  border: 1px solid #eee;\n  -webkit-box-shadow: 0 5px 0 0 rgba(0, 0, 0, .17);\n          box-shadow: 0 5px 0 0 rgba(0, 0, 0, .17); }\n\n._1CW9W {\n  position: absolute;\n  top: 214px;\n  right: 0; }\n\n._1nwxC {\n  width: 360px;\n  height: 360px;\n  position: relative;\n  overflow: visible; }\n\n.o9GYy {\n  position: absolute;\n  top: -180px;\n  left: -180px;\n  width: 720px;\n  height: 720px;\n  -webkit-transform: scale(0.5);\n          transform: scale(0.5);\n  max-width: 200%; }\n\n._3PbzI {\n  font-family: \"Open Sans\";\n  font-size: 29px;\n  text-align: center;\n  width: 100%;\n  -webkit-transition: 0.25s ease;\n  transition: 0.25s ease; }\n\n@media (max-width: 650px) {\n  ._2Czlt {\n    width: 100%;\n    height: auto;\n    padding-bottom: 90px; } }\n", ""]);

// exports
exports.locals = {
	"PixiContainer": "_2Czlt",
	"arrowEnd": "_1CW9W",
	"PixiHostWrapper": "_1nwxC",
	"PixiHost": "o9GYy",
	"PixiContainerText": "_3PbzI"
};

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = act0;

var _particles = __webpack_require__(61);

var _particles2 = _interopRequireDefault(_particles);

var _getDistance = __webpack_require__(62);

var _getDistance2 = _interopRequireDefault(_getDistance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//for no memory allocation lag on slow devices
var circleCenter = void 0,
    particlePrediction = { x: 0, y: 0 };
var direction = void 0,
    ratio = void 0,
    ratioPrediction = void 0;

function applyTurn(particle) {
    particle.shift.x = Math.cos(particle.direction);
    particle.shift.y = Math.sin(particle.direction);
}

function conditionalTurn(particle, circleR) {
    ratio = (0, _getDistance2.default)(particle, circleCenter) / circleR;

    if (ratio > 0.9) {
        particlePrediction.x = particle.x + particle.shift.x;
        particlePrediction.y = particle.y + particle.shift.y;
        ratioPrediction = (0, _getDistance2.default)(particlePrediction, circleCenter) / circleR;

        //moves out
        if (ratioPrediction > ratio) {
            particle.direction += Math.PI * (0.75 + Math.random() / 2);
        }
    }
}

function act0(context) {
    var numberOfParticles = context.props.numberOfParticles;
    var shouldEnd = false;
    var particle = void 0;

    circleCenter = { x: context.props.circleR, y: context.props.circleR };

    context.changeText('Many ideas wander in my mind');

    if (!context.particles) {
        context.particles = (0, _particles2.default)(context.props);
        context.stage.addChild(context.particles);
    }

    context.particles.children.forEach(function (particle) {
        direction = Math.random() * Math.PI * 2;
        particle.direction = direction;
        applyTurn(particle);
    });

    setTimeout(function () {
        shouldEnd = true;
    }, context.props.act0Duration);

    return function act0getFrame() {
        for (var i = 0; i < numberOfParticles; i++) {
            particle = context.particles.children[i];
            conditionalTurn(particle, context.props.circleR);
            particle.direction += Math.PI * (Math.random() - 0.5) / 36;
            applyTurn(particle);
            particle.x += particle.shift.x;
            particle.y += particle.shift.y;

            if (shouldEnd && Math.round(particle.x) === context.props.circleR && particle.y >= context.props.circleR) {
                context.next();
                break;
            }
        }
        return context.stage;
    };
}

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = act1;

var _particles = __webpack_require__(61);

var _particles2 = _interopRequireDefault(_particles);

var _hero = __webpack_require__(25);

var _hero2 = _interopRequireDefault(_hero);

var _getDistance = __webpack_require__(62);

var _getDistance2 = _interopRequireDefault(_getDistance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var circleCenter = void 0,
    ratio = void 0;
function conditionalHide(particle, circleR) {
    ratio = (0, _getDistance2.default)(particle, circleCenter) / circleR;

    if (ratio > 0.95) {
        particle.visible = false;
    }
}

function getAway(from, obj, spreadFactor) {
    obj.shift.x += 1 / (obj.x - from.x) * spreadFactor;
    obj.shift.y += 1 / (obj.x - from.y) * spreadFactor;
}

function act1(context) {
    var circleR = context.props.circleR;
    var minDiff = circleR;
    var minDiffParticle = -1;
    var distance = void 0,
        alphaStep = void 0;
    var heroScaleOuterDone = 1;

    circleCenter = { x: context.props.circleR, y: context.props.circleR };

    context.changeText('Then one takes over');

    if (!context.hero) {
        context.hero = (0, _hero2.default)({
            innerR: context.props.heroInnerRSmall,
            outerR: context.props.heroOuterR,
            fill: context.props.heroColor,
            lineStyle: context.props.heroLineStyle
        });
    }

    if (!context.particles) {
        context.particles = (0, _particles2.default)(context.props);
        context.stage.addChild(context.particles);
    }

    var hero = context.hero;
    context.stage.addChild(hero);

    context.particles.children.forEach(function (particle, idx) {
        if (Math.abs(particle.x - circleR) < minDiff) {
            minDiff = Math.abs(particle.x - circleR);
            minDiffParticle = particle;
        }
    });

    hero.x = circleR + context.props.width / 2;
    hero.y = minDiffParticle.y + context.props.neckLength;
    hero.children[0].alpha = context.props.heroInitialAlpha;
    hero.scaleOuter(0);

    alphaStep = context.props.heroAscensionSpeed * (1 - context.props.heroInitialAlpha) / minDiffParticle.y;

    minDiffParticle.x = circleR;
    minDiffParticle.shift.x = 0;
    minDiffParticle.shift.y = -context.props.heroAscensionSpeed;

    context.particles.children.forEach(function (particle) {
        if (particle !== minDiffParticle) getAway(minDiffParticle, particle, context.props.spreadFactor);
    });

    return function act1getFrame() {
        context.particles.children.forEach(function (particle) {
            particle.x += particle.shift.x;
            particle.y += particle.shift.y;

            conditionalHide(particle, circleR);
        });

        hero.children[0].alpha += alphaStep;
        hero.y -= context.props.heroAscensionSpeed;

        if (heroScaleOuterDone <= context.props.heroScaleOuterSteps) {
            hero.scaleOuter(heroScaleOuterDone / context.props.heroScaleOuterSteps);
            heroScaleOuterDone++;
        }

        if (hero.y <= context.props.neckLength) {
            context.particles.visible = false;
            context.next();
        }

        return context.stage;
    };
}

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = act2;

var _hero = __webpack_require__(25);

var _hero2 = _interopRequireDefault(_hero);

var _beziers = __webpack_require__(63);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var morphTarget = void 0,
    controlPoint = void 0,
    yMorph = void 0;
function setMorphSteps(beziers, morphSteps, boundary) {
    beziers.forEach(function (curve) {
        yMorph = (Math.random() * 0.75 + 0.125) * boundary;
        morphTarget = {
            cp1X: -(Math.random() * 0.75 + 0.125) * boundary,
            cp1Y: yMorph,

            cp2X: (Math.random() * 0.75 + 0.125) * boundary,
            cp2Y: yMorph
        };

        for (controlPoint in morphTarget) {
            curve.morphStep[controlPoint] = (morphTarget[controlPoint] - curve[controlPoint]) / morphSteps;
        }
    });
}

function setCurrentPos(hero, angle, circleR, circleCenter) {
    hero.x = Math.cos(angle) * circleR + circleCenter.x;
    hero.y = Math.sin(angle) * circleR + circleCenter.y;
}

function act2(context) {
    var angleStep = Math.PI * 2 / context.props.lapSteps;

    var circleCenter = {
        x: context.props.width / 2 + context.props.circleR,
        y: context.props.neckLength + context.props.circleR
    };

    var firstLapSteps = Math.floor(0.75 * context.props.lapSteps);
    var totalSteps = Math.floor((0.75 - 1 /* firstLap */ + context.props.lapsQuantity) * context.props.lapSteps);

    var scaleStep = (context.props.heroInnerR / context.props.heroInnerRSmall - 1) / firstLapSteps;

    var angle = Math.PI * 1.5; //1.5 coz y is inverted
    var completedScales = 0;
    var completedLaps = 0;
    var completedMorpthSteps = 0;
    var completedSteps = 0;

    context.changeText('It grows and mutates', 500);

    if (!context.hero) {
        context.hero = (0, _hero2.default)({
            innerR: context.props.heroInnerRSmall,
            outerR: context.props.heroOuterR,
            fill: context.props.heroColor,
            lineStyle: context.props.heroLineStyle
        });

        context.stage.addChild(context.hero);
    }

    if (!context.beziers) {
        context.beziers = (0, _beziers.makeBeziers)(context.props.heroBeziers, context.props);
        context.hero.addChild(context.beziers);
    }

    context.hero.x = circleCenter.x;
    context.hero.y = context.props.neckLength;

    return function act2getFrame() {
        angle += angleStep;

        if (completedMorpthSteps === 0) {
            setMorphSteps(context.beziers.children, context.props.bezierMorphSteps, context.props.heroOuterR * 1.5);
        }

        context.beziers.children.forEach(function (curve) {
            (0, _beziers.redrawBezier)(curve, {
                cp1X: curve.cp1X + curve.morphStep.cp1X,
                cp1Y: curve.cp1Y + curve.morphStep.cp1Y,

                cp2X: curve.cp2X + curve.morphStep.cp2X,
                cp2Y: curve.cp2Y + curve.morphStep.cp2Y
            });

            //I've put it here accidentelly, but it's better this way
            completedMorpthSteps++;
            if (completedMorpthSteps === context.props.bezierMorphSteps) {
                completedMorpthSteps = 0;
            }
        });

        completedSteps++;
        if (completedSteps === totalSteps) {
            context.next();
        }

        if (completedSteps <= firstLapSteps) {
            context.hero.scaleInner(1 + scaleStep * completedScales);
            completedScales++;
        }

        setCurrentPos(context.hero, angle, context.props.circleR, circleCenter);
        return context.stage;
    };
}

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = act3;

var _hero = __webpack_require__(25);

var _hero2 = _interopRequireDefault(_hero);

var _beziers = __webpack_require__(63);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var morphTarget = void 0,
    controlPoint = void 0;
function resetMorphTargets(beziers, morphSteps) {
    beziers.forEach(function (curve) {
        morphTarget = {
            cp1X: 0,
            cp1Y: 0,

            cp2X: 0,
            cp2Y: 0
        };

        for (controlPoint in morphTarget) {
            curve.morphStep[controlPoint] = (morphTarget[controlPoint] - curve[controlPoint]) / morphSteps;
        }
    });
}

function act3(context) {
    var stepY = -context.props.heroSpeed;
    var neckTravelSteps = Math.floor(context.props.neckLength / -stepY);

    var completedSteps = 0;
    var beziersToMorph = 1;
    var bezierResetDelayStepsCompelted = 0;
    var i = void 0,
        curve = void 0;

    context.changeText('...finally takes shape', 250);

    if (!context.hero) {
        context.hero = (0, _hero2.default)({
            innerR: context.props.heroInnerR,
            outerR: context.props.heroOuterR,
            fill: context.props.heroColor,
            lineStyle: context.props.heroLineStyle
        });

        context.stage.addChild(context.hero);
    }

    if (!context.beziers) {
        context.beziers = (0, _beziers.makeBeziers)(context.props.heroBeziers, context.props);
        context.hero.addChild(context.beziers);
    }

    context.hero.x = context.props.width / 2;
    context.hero.y = context.props.neckLength + context.props.circleR;

    resetMorphTargets(context.beziers.children, context.props.bezierMorphSteps);

    return function act3getFrame() {
        context.hero.y += stepY;

        for (i = 0; i < beziersToMorph; i++) {
            curve = context.beziers.children[i];
            (0, _beziers.redrawBezier)(curve, {
                cp1X: curve.cp1X + curve.morphStep.cp1X,
                cp1Y: curve.cp1Y + curve.morphStep.cp1Y,

                cp2X: curve.cp2X + curve.morphStep.cp2X,
                cp2Y: curve.cp2Y + curve.morphStep.cp2Y
            });
        }

        bezierResetDelayStepsCompelted++;
        if (bezierResetDelayStepsCompelted === context.props.bezierResetDelaySteps) {
            bezierResetDelayStepsCompelted = 0;
            if (beziersToMorph < context.props.heroBeziers) beziersToMorph++;
        }

        completedSteps++;
        if (completedSteps === neckTravelSteps) context.next();

        return context.stage;
    };
}

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = act4;

var _hero = __webpack_require__(25);

var _hero2 = _interopRequireDefault(_hero);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setCurrentPos(hero, angle, circleR, circleCenter) {
    hero.x = Math.cos(angle) * circleR + circleCenter.x;
    hero.y = -Math.sin(angle) * circleR + circleCenter.y;
}

var targetScale = void 0;
function getScaleStep(maxSpread, quantity, currentScale) {
    //pushing it off-norm with ^2
    targetScale = Math.pow(1 + Math.random() * 2 * maxSpread - maxSpread, 2);
    return (targetScale - currentScale) / quantity;
}

function act4(context) {
    var angleStep = Math.PI * 2 / context.props.lapSteps;

    var circleCenter = {
        x: context.props.width / 2 - context.props.circleR,
        y: context.props.circleR
    };

    var lastAdjustSteps = Math.floor(context.props.lapSteps / 2);
    var endSteps = Math.floor(context.props.lapSteps * 0.75);

    var angle = 0;
    var scaleStep = 0;
    var completedScaleSteps = context.props.heroOuterRSpreadSteps;
    var currentScale = 1;
    var maxSpread = context.props.heroOuterRSpreadMax;
    var completedSteps = 0;

    context.changeText('...gets adjusted', 250);

    if (!context.hero) {
        context.hero = (0, _hero2.default)({
            innerR: context.props.heroInnerR,
            outerR: context.props.heroOuterR,
            fill: context.props.heroColor,
            lineStyle: context.props.heroLineStyle
        });

        context.stage.addChild(context.hero);
    }

    context.hero.x = circleCenter.x + context.props.circleR;
    context.hero.y = circleCenter.y;

    return function act4getFrame() {
        angle += angleStep;

        if (completedScaleSteps === context.props.heroOuterRSpreadSteps) {
            scaleStep = getScaleStep(maxSpread, context.props.heroOuterRSpreadSteps, currentScale);

            completedScaleSteps = 0;
        }

        currentScale += scaleStep;
        context.hero.scaleOuter(currentScale);
        completedScaleSteps++;

        completedSteps++;
        if (completedSteps === lastAdjustSteps) maxSpread = 0;

        if (completedSteps === endSteps) context.next();

        setCurrentPos(context.hero, angle, context.props.circleR, circleCenter);
        return context.stage;
    };
}

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(145);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(2)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/postcss-loader/lib/index.js??ref--2-2!../../../node_modules/sass-loader/lib/loader.js??ref--2-3!../../../node_modules/universal-alias-loader/index.js??ref--0!./home.sass", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/postcss-loader/lib/index.js??ref--2-2!../../../node_modules/sass-loader/lib/loader.js??ref--2-3!../../../node_modules/universal-alias-loader/index.js??ref--0!./home.sass");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "/* colors */\n/* Spacing */\n/* Fonts */\n/* Effects */\n._2NnlA {\n  font-size: 30px;\n  margin-left: 80px; }\n\n._3f7uB {\n  margin-bottom: 70px; }\n\n._3f7uB:last-child {\n  margin-bottom: 0; }\n\n.HC8s1 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 100vh; }\n\n@media screen and (max-width: 1200px) {\n  .HC8s1 {\n    width: 100%;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    padding: 15px 15px;\n    height: auto; }\n  ._2NnlA {\n    margin-left: 0;\n    margin-top: 30px;\n    font-size: 23px; }\n  ._3f7uB {\n    margin-bottom: 30px; } }\n", ""]);

// exports
exports.locals = {
	"texts": "_2NnlA",
	"textBlock": "_3f7uB",
	"home": "HC8s1"
};

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = act5;

var _hero = __webpack_require__(25);

var _hero2 = _interopRequireDefault(_hero);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function act5(context) {
    var accelX = context.props.circleR * 2 / context.props.act5TravelSteps;
    var circleCenter = {
        x: context.props.width / 2 - context.props.circleR,
        y: context.props.circleR
    };

    var stepX = context.props.heroSpeed;

    context.changeText('And becomes public', 150);

    if (!context.hero) {
        context.hero = (0, _hero2.default)({
            innerR: context.props.heroInnerR,
            outerR: context.props.heroOuterR,
            fill: context.props.heroColor,
            lineStyle: context.props.heroLineStyle
        });

        context.stage.addChild(context.hero);
    }

    context.hero.x = circleCenter.x;
    context.hero.y = circleCenter.y + context.props.circleR;
    context.hero.scaleOuter(1);

    return function act5getFrame() {
        context.hero.x += stepX;

        if (context.hero.position.x >= circleCenter.x + context.props.circleR * 2) {
            context.hero.visible = false;
            context.next();
        }

        return context.stage;
    };
}

/***/ })
]);
//# sourceMappingURL=0.js.map