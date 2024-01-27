/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { dataherald__types__ForeignKeyDetail } from './dataherald__types__ForeignKeyDetail';
export type ColumnDescriptionRequest = {
    name: string;
    description?: string;
    is_primary_key?: boolean;
    data_type?: string;
    low_cardinality?: boolean;
    categories?: Array<string>;
    foreign_key?: dataherald__types__ForeignKeyDetail;
};

