export type QueryHistory = {
    id?: string;
    db_connection_id: string;
    table_name: string;
    query: string;
    user: string;
    occurrences?: number;
};
