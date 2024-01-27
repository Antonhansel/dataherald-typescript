import type { CancelFineTuningRequest } from '../models/CancelFineTuningRequest';
import type { Finetuning } from '../models/Finetuning';
import type { FineTuningRequest } from '../models/FineTuningRequest';
import type { UpdateMetadataRequest } from '../models/UpdateMetadataRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class FinetuningsService {
    /**
     * Get Fintunings
     * Gets fine tuning jobs
     * @param dbConnectionId
     * @returns Finetuning Successful Response
     * @throws ApiError
     */
    static getFintunings(dbConnectionId?: string): CancelablePromise<Array<Finetuning>>;
    /**
     * Create Finetuning Job
     * Creates a fine tuning job
     * @param requestBody
     * @returns Finetuning Successful Response
     * @throws ApiError
     */
    static createFinetuningJob(requestBody: FineTuningRequest): CancelablePromise<Finetuning>;
    /**
     * Get Finetuning Job
     * Gets fine tuning jobs
     * @param finetuningId
     * @returns Finetuning Successful Response
     * @throws ApiError
     */
    static getFinetuningJob(finetuningId: string): CancelablePromise<Finetuning>;
    /**
     * Update Finetuning Job
     * Gets fine tuning jobs
     * @param finetuningId
     * @param requestBody
     * @returns Finetuning Successful Response
     * @throws ApiError
     */
    static updateFinetuningJob(finetuningId: string, requestBody: UpdateMetadataRequest): CancelablePromise<Finetuning>;
    /**
     * Delete Finetuning Job
     * Deletes a fine tuning job
     * @param finetuningId
     * @returns any Successful Response
     * @throws ApiError
     */
    static deleteFinetuningJob(finetuningId: string): CancelablePromise<Record<string, any>>;
    /**
     * Cancel Finetuning Job
     * Cancels a fine tuning job
     * @param requestBody
     * @returns Finetuning Successful Response
     * @throws ApiError
     */
    static cancelFinetuningJob(requestBody: CancelFineTuningRequest): CancelablePromise<Finetuning>;
}
