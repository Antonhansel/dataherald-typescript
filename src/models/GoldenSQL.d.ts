export type GoldenSQL = {
    id?: string;
    prompt_text: string;
    sql: string;
    db_connection_id: string;
    created_at?: string;
    metadata?: Record<string, any>;
};
