export type InstructionRequest = {
    db_connection_id: string;
    instruction?: string;
    metadata?: Record<string, any>;
};
