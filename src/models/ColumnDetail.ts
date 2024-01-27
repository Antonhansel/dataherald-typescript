/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { dataherald__db_scanner__models__types__ForeignKeyDetail } from './dataherald__db_scanner__models__types__ForeignKeyDetail';
export type ColumnDetail = {
    name: string;
    is_primary_key?: boolean;
    data_type?: string;
    description?: string;
    low_cardinality?: boolean;
    categories?: Array<any>;
    foreign_key?: dataherald__db_scanner__models__types__ForeignKeyDetail;
};

