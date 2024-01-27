/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseLLM } from './BaseLLM';
export type Finetuning = {
    id?: string;
    alias?: string;
    db_connection_id?: string;
    status?: string;
    error?: string;
    base_llm?: BaseLLM;
    finetuning_file_id?: string;
    finetuning_job_id?: string;
    model_id?: string;
    created_at?: string;
    golden_sqls?: Array<string>;
    metadata?: Record<string, any>;
};

