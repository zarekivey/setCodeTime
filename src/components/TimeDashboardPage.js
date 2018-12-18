import React from 'react';
import TimeList from './TimeList';
import TimeListFilters from './TimeListFilters';
import TimeSummary from './TimeSummary';

const TimeDashboardPage = () => (
    <div>
        <TimeSummary />
        <TimeListFilters />
        <TimeList />
    </div>
);

export default TimeDashboardPage;
