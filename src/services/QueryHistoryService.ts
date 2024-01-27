/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { QueryHistory } from '../models/QueryHistory';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class QueryHistoryService {
    /**
     * Get Query History
     * Get description
     * @param dbConnectionId
     * @returns QueryHistory Successful Response
     * @throws ApiError
     */
    public static getQueryHistory(
        dbConnectionId: string,
    ): CancelablePromise<Array<QueryHistory>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/query-history',
            query: {
                'db_connection_id': dbConnectionId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
