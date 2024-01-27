/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PromptSQLGenerationRequest } from '../models/PromptSQLGenerationRequest';
import type { SQLGenerationRequest } from '../models/SQLGenerationRequest';
import type { SQLGenerationResponse } from '../models/SQLGenerationResponse';
import type { UpdateMetadataRequest } from '../models/UpdateMetadataRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SqlGenerationService {
    /**
     * Create Sql Generation
     * @param promptId
     * @param requestBody
     * @returns SQLGenerationResponse Successful Response
     * @throws ApiError
     */
    public static createSqlGeneration(
        promptId: string,
        requestBody: SQLGenerationRequest,
    ): CancelablePromise<SQLGenerationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/prompts/{prompt_id}/sql-generations',
            path: {
                'prompt_id': promptId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Prompt And Sql Generation
     * @param requestBody
     * @returns SQLGenerationResponse Successful Response
     * @throws ApiError
     */
    public static createPromptAndSqlGeneration(
        requestBody: PromptSQLGenerationRequest,
    ): CancelablePromise<SQLGenerationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/prompts/sql-generations',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Sql Generations
     * @param promptId
     * @returns SQLGenerationResponse Successful Response
     * @throws ApiError
     */
    public static getSqlGenerations(
        promptId?: string,
    ): CancelablePromise<Array<SQLGenerationResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/sql-generations',
            query: {
                'prompt_id': promptId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Sql Generation
     * @param sqlGenerationId
     * @returns SQLGenerationResponse Successful Response
     * @throws ApiError
     */
    public static getSqlGeneration(
        sqlGenerationId: string,
    ): CancelablePromise<SQLGenerationResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/sql-generations/{sql_generation_id}',
            path: {
                'sql_generation_id': sqlGenerationId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Sql Generation
     * @param sqlGenerationId
     * @param requestBody
     * @returns SQLGenerationResponse Successful Response
     * @throws ApiError
     */
    public static updateSqlGeneration(
        sqlGenerationId: string,
        requestBody: UpdateMetadataRequest,
    ): CancelablePromise<SQLGenerationResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/sql-generations/{sql_generation_id}',
            path: {
                'sql_generation_id': sqlGenerationId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Execute Sql Query
     * Executes a query on the given db_connection_id
     * @param sqlGenerationId
     * @param maxRows
     * @returns any Successful Response
     * @throws ApiError
     */
    public static executeSqlQuery(
        sqlGenerationId: string,
        maxRows: number = 100,
    ): CancelablePromise<Array<any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/sql-generations/{sql_generation_id}/execute',
            path: {
                'sql_generation_id': sqlGenerationId,
            },
            query: {
                'max_rows': maxRows,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Export Csv File
     * Exports a CSV file for the given sql_generation_id
     * @param sqlGenerationId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static exportCsvFile(
        sqlGenerationId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/sql-generations/{sql_generation_id}/csv-file',
            path: {
                'sql_generation_id': sqlGenerationId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
