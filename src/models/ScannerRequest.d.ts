export type ScannerRequest = {
    db_connection_id: string;
    table_names?: Array<string>;
    metadata?: Record<string, any>;
};
