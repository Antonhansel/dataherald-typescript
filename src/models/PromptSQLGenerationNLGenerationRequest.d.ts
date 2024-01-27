import type { PromptSQLGenerationRequest } from './PromptSQLGenerationRequest';
export type PromptSQLGenerationNLGenerationRequest = {
    max_rows?: number;
    metadata?: Record<string, any>;
    sql_generation: PromptSQLGenerationRequest;
};
