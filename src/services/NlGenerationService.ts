/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NLGenerationRequest } from '../models/NLGenerationRequest';
import type { NLGenerationResponse } from '../models/NLGenerationResponse';
import type { NLGenerationsSQLGenerationRequest } from '../models/NLGenerationsSQLGenerationRequest';
import type { PromptSQLGenerationNLGenerationRequest } from '../models/PromptSQLGenerationNLGenerationRequest';
import type { UpdateMetadataRequest } from '../models/UpdateMetadataRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class NlGenerationService {
    /**
     * Create Nl Generation
     * @param sqlGenerationId
     * @param requestBody
     * @returns NLGenerationResponse Successful Response
     * @throws ApiError
     */
    public static createNlGeneration(
        sqlGenerationId: string,
        requestBody: NLGenerationRequest,
    ): CancelablePromise<NLGenerationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/sql-generations/{sql_generation_id}/nl-generations',
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
     * Create Sql And Nl Generation
     * @param promptId
     * @param requestBody
     * @returns NLGenerationResponse Successful Response
     * @throws ApiError
     */
    public static createSqlAndNlGeneration(
        promptId: string,
        requestBody: NLGenerationsSQLGenerationRequest,
    ): CancelablePromise<NLGenerationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/prompts/{prompt_id}/sql-generations/nl-generations',
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
     * Create Prompt Sql And Nl Generation
     * @param requestBody
     * @returns NLGenerationResponse Successful Response
     * @throws ApiError
     */
    public static createPromptSqlAndNlGeneration(
        requestBody: PromptSQLGenerationNLGenerationRequest,
    ): CancelablePromise<NLGenerationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/prompts/sql-generations/nl-generations',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Nl Generations
     * @param sqlGenerationId
     * @returns NLGenerationResponse Successful Response
     * @throws ApiError
     */
    public static getNlGenerations(
        sqlGenerationId?: string,
    ): CancelablePromise<Array<NLGenerationResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/nl-generations',
            query: {
                'sql_generation_id': sqlGenerationId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Nl Generation
     * @param nlGenerationId
     * @returns NLGenerationResponse Successful Response
     * @throws ApiError
     */
    public static getNlGeneration(
        nlGenerationId: string,
    ): CancelablePromise<NLGenerationResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/nl-generations/{nl_generation_id}',
            path: {
                'nl_generation_id': nlGenerationId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Nl Generation
     * @param nlGenerationId
     * @param requestBody
     * @returns NLGenerationResponse Successful Response
     * @throws ApiError
     */
    public static updateNlGeneration(
        nlGenerationId: string,
        requestBody: UpdateMetadataRequest,
    ): CancelablePromise<NLGenerationResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/nl-generations/{nl_generation_id}',
            path: {
                'nl_generation_id': nlGenerationId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
