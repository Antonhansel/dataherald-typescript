export type InstructionResponse = {
    id: string;
    metadata?: Record<string, any>;
    created_at?: string;
    instruction: string;
    db_connection_id: string;
};
