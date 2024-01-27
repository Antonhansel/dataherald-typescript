import type { PromptRequest } from './PromptRequest';
export type PromptSQLGenerationRequest = {
    finetuning_id?: string;
    evaluate?: boolean;
    sql?: string;
    metadata?: Record<string, any>;
    prompt: PromptRequest;
};
