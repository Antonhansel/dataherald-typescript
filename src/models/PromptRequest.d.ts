export type PromptRequest = {
    text: string;
    db_connection_id: string;
    metadata?: Record<string, any>;
};
