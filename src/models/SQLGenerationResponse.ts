/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SQLGenerationResponse = {
    id: string;
    metadata?: Record<string, any>;
    created_at?: string;
    prompt_id: string;
    finetuning_id?: string;
    status: string;
    completed_at?: string;
    sql?: string;
    tokens_used?: number;
    confidence_score?: number;
    error?: string;
};

