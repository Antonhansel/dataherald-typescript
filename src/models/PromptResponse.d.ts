export type PromptResponse = {
    id: string;
    metadata?: Record<string, any>;
    created_at?: string;
    text: string;
    db_connection_id: string;
};
