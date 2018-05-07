// import moment from 'moment-timezone';
// import cloneDeep from 'lodash/cloneDeep';
// import maxBy from 'lodash/maxBy';

// import { generateTimeCells } from 'containers/Scheduler/utils';
// import chartColors from './chartColors';
// import { capitalize } from '../../utils';

// export function prepareForecastDataStructure(dataObject, resultObject) {
//   const {
//     dataArray,
//     dateFieldName,
//     ordersFieldName,
//     dateCondition,
//     startTime,
//     endTime,
//   } = dataObject;
//   const {
//     charts,
//     tableValues,
//     weekDates,
//     timeIndexHelper,
//     colors,
//   } = resultObject;
//   let { biggestOrdersNumber } = resultObject;
//   dataArray.forEach((el) => {
//     const date = moment.utc(el[dateFieldName]).local();
//     const formattedDate = date.format('YYYY-MM-DD');
//     const formattedTime = date.format('HH:mm:ss');
//     const dayOfWeek = (date.day() || 7).toString();
//     // pattern WXX-YY
//     const weekOfYearString = `W${date.isoWeek()}-${date.format('YY')}`;
//     let tableDataLast = tableValues[tableValues.length - 1];

//     if (dateCondition(date)) {
//       return;
//     }

//     if (formattedTime < startTime || formattedTime > endTime) {
//       return;
//     }

//     if (!tableDataLast || tableDataLast.week !== weekOfYearString) {
//       tableValues.push({ week: weekOfYearString });
//       tableDataLast = tableValues[tableValues.length - 1];
//     }

//     if (!tableDataLast[dayOfWeek]) {
//       tableDataLast[dayOfWeek] = 0;
//     }

//     tableDataLast[dayOfWeek] += el[ordersFieldName];
//     if (tableDataLast[dayOfWeek] > biggestOrdersNumber) {
//       biggestOrdersNumber = tableDataLast[dayOfWeek];
//     }

//     if (!charts[dayOfWeek]) {
//       charts[dayOfWeek] = {
//         data: [{ formattedTime }],
//         dates: {},
//       };
//       timeIndexHelper[dayOfWeek] = {
//         [formattedTime]: 0,
//       };
//     }

//     if (!colors[weekOfYearString]) {
//       colors[weekOfYearString] = chartColors[tableValues.length - 1];
//     }

//     if (timeIndexHelper[dayOfWeek][formattedTime] === undefined) {
//       charts[dayOfWeek].data.push({ formattedTime });
//       timeIndexHelper[dayOfWeek][formattedTime] =
//         charts[dayOfWeek].data.length - 1;
//     }

//     const index = timeIndexHelper[dayOfWeek][formattedTime];
//     charts[dayOfWeek].data[index][formattedDate] = el[ordersFieldName];
//     charts[dayOfWeek].dates[formattedDate] = {
//       formattedDate,
//       lineColor: chartColors[tableValues.length - 1],
//     };

//     if (weekDates[weekOfYearString] === undefined) {
//       weekDates[weekOfYearString] = [];
//     }

//     if (weekDates[weekOfYearString].indexOf(formattedDate) === -1) {
//       weekDates[weekOfYearString].push(formattedDate);
//     }
//   });

//   Object.keys(charts).forEach((day) => {
//     charts[day].data = charts[day].data.sort(
//       (a, b) => (a.formattedTime < b.formattedTime ? -1 : 1),
//     );
//   });

//   return {
//     charts,
//     tableValues,
//     weekDates,
//     timeIndexHelper,
//     biggestOrdersNumber,
//     colors,
//   };
// }

// export function calculateChange(value, prevValue, index) {
//   // change way of storing data, create an object with needed information
//   const result = {
//     value,
//   };
//   // if there are no data provided at all it is hard to calculate
//   if (value !== undefined && prevValue !== undefined) {
//     // for first week we have no data to compare
//     if (index) {
//       result.change = Math.round((value - prevValue) / prevValue * 100);
//       // in the case if prevValue is 0, we assume change is 100% or 0%, depends on current value
//       if (!prevValue) {
//         result.change = value ? 100 : 0;
//       }
//     }
//   }

//   return result;
// }

// /**
//  * Function for calculation of percent change in orders comparing to the same day in previous week
//  * Also sums orders per week for total column
//  * @param data Array of data, where every element is a week
//  * @param days Array od days numbers
//  * @returns Array, the clone of data with additional information for every day
//  */
// export function calculateOrders(data, days) {
//   // Never mutate original data
//   const clonedData = cloneDeep(data);
//   // iterate through every week
//   clonedData.forEach((weekData, index) => {
//     // object with whole week data, in which changes are made
//     const weekObj = weekData;
//     // iterate through days
//     days.forEach((day, i) => {
//       // order value is stored in data[index][day]
//       const orders = weekData[day];
//       weekObj[day] = calculateChange(
//         orders,
//         index ? clonedData[index - 1][day].value : undefined,
//         index,
//       );

//       if (!weekObj.total) {
//         weekObj.total = 0;
//       }
//       weekObj.total += orders || 0;

//       // if all days in the week were calculated
//       if (i === days.length - 1) {
//         weekObj.total = calculateChange(
//           weekObj.total,
//           index ? clonedData[index - 1].total.value : undefined,
//           index,
//         );
//       }
//     });
//     clonedData[index] = weekObj;
//   });
//   return clonedData;
// }

// export function createForecastDataStructure(dataObject, filters) {
//   let results = {
//     charts: {},
//     tableValues: [],
//     weekDates: {},
//     timeIndexHelper: {},
//     biggestOrdersNumber: 0,
//     biggestTotalValue: 0,
//     colors: {},
//   };

//   if (!dataObject.forecasts || !dataObject.actuals) {
//     delete results.timeIndexHelper;
//     return results;
//   }
//   const forecasts = dataObject.forecasts.sort(
//     (a, b) => (a.forecast_for < b.forecast_for ? -1 : 1),
//   );
//   const actuals = dataObject.actuals.sort(
//     (a, b) => (a.ordered_at < b.ordered_at ? -1 : 1),
//   );
//   const borderDate = actuals[actuals.length - 1].ordered_at;
//   const { startTime, endTime } = filters;

//   {
//     const actualsDateCondition = (date) =>
//       date.isAfter(moment.parseZone(borderDate), 'day');
//     results = prepareForecastDataStructure(
//       {
//         dataArray: actuals,
//         dateFieldName: 'ordered_at',
//         ordersFieldName: 'orders',
//         dateCondition: actualsDateCondition,
//         startTime,
//         endTime,
//       },
//       results,
//     );
//   }

//   {
//     const forecastsDateCondition = (date) =>
//       date.isSameOrBefore(moment.parseZone(borderDate), 'day');
//     results = prepareForecastDataStructure(
//       {
//         dataArray: forecasts,
//         dateFieldName: 'forecast_for',
//         ordersFieldName: 'adjusted_orders',
//         dateCondition: forecastsDateCondition,
//         startTime,
//         endTime,
//       },
//       results,
//     );
//   }

//   results.tableValues = calculateOrders(
//     results.tableValues,
//     Object.keys(results.charts),
//   ).reverse();
//   results.biggestTotalValue = maxBy(
//     results.tableValues,
//     (week) => week.total.value,
//   ).total.value;

//   delete results.timeIndexHelper;
//   return results;
// }

// export function formatZoneList(zones) {
//   return zones.map((zone) => {
//     const value = zone.id.replace('zone:', '');
//     return {
//       value,
//       label: capitalize(zone.fields.name),
//     };
//   });
// }

// export function updateSelectedDays(tableData, selectedDays) {
//   const updatedSelectedDays = cloneDeep(selectedDays);
//   tableData.forEach((weekData) => {
//     selectedDays.forEach((dayData, index) => {
//       if (weekData.week === dayData.dataObj.week) {
//         updatedSelectedDays[index].dataObj.value =
//           weekData[dayData.dataObj.day].value;
//       }
//     });
//   });

//   return updatedSelectedDays;
// }

// export function createTimeOptions(optionsObj = {}) {
//   const labels = generateTimeCells({
//     startHour: 0,
//     endHour: 23,
//     startSeconds: 0,
//     startMinutes: 0,
//     endMinutes: 59,
//     endSeconds: 59,
//     interval: 30,
//     format: 'HH:mm',
//     ...optionsObj,
//   });
//   const options = labels.map((label) => ({ label, value: `${label}:00` }));
//   options.push({ label: '23:59', value: '23:59:59' });
//   return options;
// }

// export function createAdjustmentDataObject(dataObj) {
//   const { adjustment, filters } = dataObj;
//   return {
//     zone_ids: filters.zoneIds,
//     forecast_dates: adjustment.selectedDays.map((date) =>
//       date.date.format('YYYY-MM-DD'),
//     ),
//     start_time: filters.startTime,
//     end_time: filters.endTime,
//     adjust_by: adjustment.adjustment,
//     applies_to: adjustment.appliesTo.map(
//       (option) => (option.value ? option.value : option),
//     ),
//     fixed: adjustment.fixAdjustment,
//     reason: adjustment.reason,
//     comment: adjustment.reasonDetail,
//   };
// }

// export function updateHistory(history, adjustment) {
//   const newHistory = cloneDeep(history);
//   history.some((row, index) => {
//     if (row.id === adjustment.id) {
//       newHistory[index] = adjustment;
//       return true;
//     }
//     return false;
//   });
//   return newHistory;
// }
