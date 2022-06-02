import { DateTime } from 'https://cdn.jsdelivr.net/npm/luxon@2.4.0/build/es6/luxon.js';

function getDateDiff(dateFrom, dateTo) {
    const dateFromObj = DateTime.fromISO(dateFrom);
    const dateToObj = DateTime.fromISO(dateTo);
    return dateFromObj.diff(dateToObj, ['years', 'months', 'days']).toObject()
}
export default getDateDiff