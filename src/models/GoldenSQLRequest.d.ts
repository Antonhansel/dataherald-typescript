export type GoldenSQLRequest = {
    db_connection_id: string;
    prompt_text?: string;
    sql?: string;
    metadata?: Record<string, any>;
};
