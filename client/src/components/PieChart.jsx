import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function PieChartStats() {
    return (
        <PieChart
            className='-mt-6'
            series={[
                {
                    data: [
                        { id: 0, value: 10, label: 'series A' },
                        { id: 1, value: 15, label: 'series B' },
                        { id: 2, value: 20, label: 'series C' },
                    ],
                    paddingAngle: 5,
                    cornerRadius: 5,
                    innerRadius: 15,
                    outerRadius: 70,
                },
            ]}

        />
    );
}
