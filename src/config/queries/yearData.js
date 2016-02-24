export const source = 'Vehicle Complaints';
export const queryConfig = {
    tz: 'UTC',
    filters: [],
    groups: [
        {
            name: 'year_string',
            limit: 50,
            sort: {
                dir: 'asc',
                name: 'year_string'
            }
        }
    ],
    metrics: []
};