export type NLGenerationResponse = {
    id: string;
    metadata?: Record<string, any>;
    created_at?: string;
    sql_generation_id: string;
    text?: string;
};
