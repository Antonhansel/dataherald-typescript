/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PromptRequest } from '../models/PromptRequest';
import type { PromptResponse } from '../models/PromptResponse';
import type { UpdateMetadataRequest } from '../models/UpdateMetadataRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PromptsService {
    /**
     * Get Prompts
     * @param dbConnectionId
     * @returns PromptResponse Successful Response
     * @throws ApiError
     */
    public static getPrompts(
        dbConnectionId?: string,
    ): CancelablePromise<Array<PromptResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/prompts',
            query: {
                'db_connection_id': dbConnectionId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Prompt
     * @param requestBody
     * @returns PromptResponse Successful Response
     * @throws ApiError
     */
    public static createPrompt(
        requestBody: PromptRequest,
    ): CancelablePromise<PromptResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/prompts',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Prompt
     * @param promptId
     * @returns PromptResponse Successful Response
     * @throws ApiError
     */
    public static getPrompt(
        promptId: string,
    ): CancelablePromise<PromptResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/prompts/{prompt_id}',
            path: {
                'prompt_id': promptId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Prompt
     * @param promptId
     * @param requestBody
     * @returns PromptResponse Successful Response
     * @throws ApiError
     */
    public static updatePrompt(
        promptId: string,
        requestBody: UpdateMetadataRequest,
    ): CancelablePromise<PromptResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/prompts/{prompt_id}',
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
}
