/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelFineTuningRequest } from '../models/CancelFineTuningRequest';
import type { Finetuning } from '../models/Finetuning';
import type { FineTuningRequest } from '../models/FineTuningRequest';
import type { UpdateMetadataRequest } from '../models/UpdateMetadataRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class FinetuningsService {
    /**
     * Get Fintunings
     * Gets fine tuning jobs
     * @param dbConnectionId
     * @returns Finetuning Successful Response
     * @throws ApiError
     */
    public static getFintunings(
        dbConnectionId?: string,
    ): CancelablePromise<Array<Finetuning>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/finetunings',
            query: {
                'db_connection_id': dbConnectionId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Finetuning Job
     * Creates a fine tuning job
     * @param requestBody
     * @returns Finetuning Successful Response
     * @throws ApiError
     */
    public static createFinetuningJob(
        requestBody: FineTuningRequest,
    ): CancelablePromise<Finetuning> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/finetunings',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Finetuning Job
     * Gets fine tuning jobs
     * @param finetuningId
     * @returns Finetuning Successful Response
     * @throws ApiError
     */
    public static getFinetuningJob(
        finetuningId: string,
    ): CancelablePromise<Finetuning> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/finetunings/{finetuning_id}',
            path: {
                'finetuning_id': finetuningId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Finetuning Job
     * Gets fine tuning jobs
     * @param finetuningId
     * @param requestBody
     * @returns Finetuning Successful Response
     * @throws ApiError
     */
    public static updateFinetuningJob(
        finetuningId: string,
        requestBody: UpdateMetadataRequest,
    ): CancelablePromise<Finetuning> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/finetunings/{finetuning_id}',
            path: {
                'finetuning_id': finetuningId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Finetuning Job
     * Deletes a fine tuning job
     * @param finetuningId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteFinetuningJob(
        finetuningId: string,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/finetunings/{finetuning_id}',
            path: {
                'finetuning_id': finetuningId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Cancel Finetuning Job
     * Cancels a fine tuning job
     * @param requestBody
     * @returns Finetuning Successful Response
     * @throws ApiError
     */
    public static cancelFinetuningJob(
        requestBody: CancelFineTuningRequest,
    ): CancelablePromise<Finetuning> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/finetunings/{finetuning_id}/cancel',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
