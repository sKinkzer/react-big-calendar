# Fork from original react-big-calendar

## Changelog by Taikala

### Sep 2, 2016 (0.10.7)
* New prop for month view: singleRow = true, which will show events on one row instead of 
one row per event
* Selecting a slot adds rbc-selected class to the rbc-date-cell.

### Aug 25, 2016 (0.10.6)
* Added past days class to week view

### Aug 17, 2016 (0.10.5)
* Added past days class to month view

### Aug 12, 2016 (0.10.4)
* Display week number in calendar view if props.showWeekNumbers = true

### Aug 11, 2016

* Changed popover functionality so that you can pass shouldCloseOverlay function in props to calendar. If this prop is passed, the popover does not automatically close
but instead calls the function with a click event. If the function returns true value, the popover closes, otherwise it remains open.

react-big-calendar
========================

An events calendar component built for React and made for modern browsers (read: IE10+) and uses flexbox over the classic tables-ception approach.

[__DEMO and Docs__](http://intljusticemission.github.io/react-big-calendar/examples/index.html)

Inspired by [Full Calendar](http://fullcalendar.io/).

## Use and Setup

`npm install react-big-calendar --save`

Include `react-big-calendar/lib/css/react-big-calendar.css` for styles.

## Run examples locally

* Clone this repository
* Retrieve dependencies: `npm install`
* Start: `npm run examples [port]` (default port is 3000)
* Open [localhost:3000/examples/index.html](http://localhost:3000/examples/index.html).

### Localization and Date Formatting

`react-big-calendar` includes two options for handling the date formatting and culture localization, depending
on your preference of DateTime libraries. You can use either the [Moment.js](http://momentjs.com/) or [Globalize.js](https://github.com/jquery/globalize) localizers.

Regardless of your choice, you __must__ choose a localizer to use this library:

#### Moment.js

```js
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);
```

#### Globalize.js v0.1.1

```js
import BigCalendar from 'react-big-calendar';
import globalize from 'globalize';

BigCalendar.setLocalizer(
  BigCalendar.globalizeLocalizer(globalize)
);
```
