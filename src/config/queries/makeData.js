export const source = 'Vehicle Complaints';
export const queryConfig = {
    tz: 'UTC',
    filters: [],
    groups: [
        {
            name: 'make',
            limit: 50,
            sort: {
                dir: 'desc',
                name: 'count'
            }
        }
    ],
    metrics: []
};