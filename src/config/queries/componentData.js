export const source = 'Vehicle Complaints';
export const queryConfig = {
    tz: 'UTC',
    filters: [],
    groups: [
        {
            name: 'component',
            limit: 50,
            sort: {
                dir: 'desc',
                name: 'count'
            }
        }
    ],
    metrics: [
        {
            name: 'crashed',
            func: 'sum'
        },
        {
            name: 'injured',
            func: 'sum'
        },
        {
            name: 'fire',
            func: 'sum'
        },
        {
            name: 'speed',
            func: 'avg'
        }
    ]
};