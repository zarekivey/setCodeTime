import React from 'react';
import TimeList from './TimeList';
import TimeListFilters from './TimeListFilters';
import TimeSummary from './TimeSummary';
import Timer from './Timer';

const TimeDashboardPage = () => (
    <div>
        <TimeSummary />
        <TimeListFilters />
        <TimeList />
        <Timer />
    </div>
);






export default TimeDashboardPage;
