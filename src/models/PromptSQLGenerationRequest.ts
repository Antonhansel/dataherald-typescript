/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PromptRequest } from './PromptRequest';
export type PromptSQLGenerationRequest = {
    finetuning_id?: string;
    evaluate?: boolean;
    sql?: string;
    metadata?: Record<string, any>;
    prompt: PromptRequest;
};

