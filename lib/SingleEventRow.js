'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _EventRowMixin = require('./EventRowMixin');

var _EventRowMixin2 = _interopRequireDefault(_EventRowMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SingleEventRow = _react2.default.createClass({

  displayName: 'SingleEventRow',

  propTypes: {
    segments: _react2.default.PropTypes.array
  },

  mixins: [_EventRowMixin2.default],

  renderRow: function renderRow(segmentData) {
    var _this = this;

    var row = [];
    var lastEnd = 1;
    for (var i in segmentData) {
      var _segmentData$i = segmentData[i];
      var events = _segmentData$i.events;
      var left = _segmentData$i.left;
      var right = _segmentData$i.right;
      var span = _segmentData$i.span;

      var key = '_lvl_' + left;
      var gap = left - lastEnd;

      var content = events.map(function (e, idx) {
        return _this.renderEvent(e, idx);
      });

      if (gap) row.push(this.renderSpan(gap, key + '_gap'));

      row.push(this.renderSpan(span, key, content));

      lastEnd = right + 1;
    }
    return row;
  },
  pushToData: function pushToData(data, event, left, right, span) {
    data[left] = data[left] || { events: [], left: left, right: right, span: span };
    data[left].events.push(event);
  },
  render: function render() {
    var _this2 = this;

    var segments = this.props.segments;


    var segmentData = segments.reduce(function (data, _ref) {
      var event = _ref.event;
      var left = _ref.left;
      var right = _ref.right;
      var span = _ref.span;

      if (span > 1) {
        var curLeft = left;
        var endLeft = curLeft + span;
        while (curLeft < endLeft) {
          _this2.pushToData(data, event, curLeft, curLeft, 1);
          curLeft++;
        }
      } else {
        _this2.pushToData(data, event, left, right, span);
      }

      return data;
    }, {});

    return _react2.default.createElement(
      'div',
      { className: 'rbc-row' },
      this.renderRow(segmentData)
    );
  }
});

exports.default = SingleEventRow;
module.exports = exports['default'];