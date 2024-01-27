import type { SQLGenerationRequest } from './SQLGenerationRequest';
export type NLGenerationsSQLGenerationRequest = {
    max_rows?: number;
    metadata?: Record<string, any>;
    sql_generation: SQLGenerationRequest;
};
