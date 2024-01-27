/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ColumnDetail } from './ColumnDetail';
export type TableDescriptionResponse = {
    id: string;
    db_connection_id: string;
    table_name: string;
    description?: string;
    table_schema?: string;
    columns?: Array<ColumnDetail>;
    examples?: Array<any>;
    last_schema_sync?: string;
    status?: string;
    error_message?: string;
    metadata?: Record<string, any>;
    created_at?: string;
};

