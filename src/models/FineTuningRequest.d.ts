import type { BaseLLM } from './BaseLLM';
export type FineTuningRequest = {
    db_connection_id: string;
    alias?: string;
    base_llm?: BaseLLM;
    golden_sqls?: Array<string>;
    metadata?: Record<string, any>;
};
