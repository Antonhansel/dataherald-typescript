/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GoldenSQL } from '../models/GoldenSQL';
import type { GoldenSQLRequest } from '../models/GoldenSQLRequest';
import type { GoldenSQLResponse } from '../models/GoldenSQLResponse';
import type { UpdateMetadataRequest } from '../models/UpdateMetadataRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class GoldenSqLsService {
    /**
     * Update Golden Sql
     * Gets golden sqls
     * @param goldenSqlId
     * @param requestBody
     * @returns GoldenSQL Successful Response
     * @throws ApiError
     */
    public static updateGoldenSql(
        goldenSqlId: string,
        requestBody: UpdateMetadataRequest,
    ): CancelablePromise<GoldenSQL> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/golden-sqls/{golden_sql_id}',
            path: {
                'golden_sql_id': goldenSqlId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Golden Sql
     * Deletes a golden record
     * @param goldenSqlId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteGoldenSql(
        goldenSqlId: string,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/golden-sqls/{golden_sql_id}',
            path: {
                'golden_sql_id': goldenSqlId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Golden Sqls
     * Gets golden sqls
     * @param dbConnectionId
     * @param page
     * @param limit
     * @returns GoldenSQL Successful Response
     * @throws ApiError
     */
    public static getGoldenSqls(
        dbConnectionId?: string,
        page: number = 1,
        limit: number = 10,
    ): CancelablePromise<Array<GoldenSQL>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/golden-sqls',
            query: {
                'db_connection_id': dbConnectionId,
                'page': page,
                'limit': limit,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Add Golden Sqls
     * @param requestBody
     * @returns GoldenSQLResponse Successful Response
     * @throws ApiError
     */
    public static addGoldenSqls(
        requestBody: Array<GoldenSQLRequest>,
    ): CancelablePromise<Array<GoldenSQLResponse>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/golden-sqls',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
