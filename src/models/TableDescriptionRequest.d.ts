import type { ColumnDescriptionRequest } from './ColumnDescriptionRequest';
export type TableDescriptionRequest = {
    description?: string;
    columns?: Array<ColumnDescriptionRequest>;
    metadata?: Record<string, any>;
};
