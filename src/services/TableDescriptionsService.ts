/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ScannerRequest } from '../models/ScannerRequest';
import type { TableDescriptionRequest } from '../models/TableDescriptionRequest';
import type { TableDescriptionResponse } from '../models/TableDescriptionResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TableDescriptionsService {
    /**
     * Scan Db
     * @param requestBody
     * @returns TableDescriptionResponse Successful Response
     * @throws ApiError
     */
    public static scanDb(
        requestBody: ScannerRequest,
    ): CancelablePromise<Array<TableDescriptionResponse>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/table-descriptions/sync-schemas',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Table Description
     * Get description
     * @param tableDescriptionId
     * @returns TableDescriptionResponse Successful Response
     * @throws ApiError
     */
    public static getTableDescription(
        tableDescriptionId: string,
    ): CancelablePromise<TableDescriptionResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/table-descriptions/{table_description_id}',
            path: {
                'table_description_id': tableDescriptionId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Table Description
     * Add descriptions for tables and columns
     * @param tableDescriptionId
     * @param requestBody
     * @returns TableDescriptionResponse Successful Response
     * @throws ApiError
     */
    public static updateTableDescription(
        tableDescriptionId: string,
        requestBody: TableDescriptionRequest,
    ): CancelablePromise<TableDescriptionResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/table-descriptions/{table_description_id}',
            path: {
                'table_description_id': tableDescriptionId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Table Descriptions
     * List table descriptions
     * @param dbConnectionId
     * @param tableName
     * @returns TableDescriptionResponse Successful Response
     * @throws ApiError
     */
    public static listTableDescriptions(
        dbConnectionId: string,
        tableName?: string,
    ): CancelablePromise<Array<TableDescriptionResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/table-descriptions',
            query: {
                'db_connection_id': dbConnectionId,
                'table_name': tableName,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
