import type { PromptRequest } from '../models/PromptRequest';
import type { PromptResponse } from '../models/PromptResponse';
import type { UpdateMetadataRequest } from '../models/UpdateMetadataRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class PromptsService {
    /**
     * Get Prompts
     * @param dbConnectionId
     * @returns PromptResponse Successful Response
     * @throws ApiError
     */
    static getPrompts(dbConnectionId?: string): CancelablePromise<Array<PromptResponse>>;
    /**
     * Create Prompt
     * @param requestBody
     * @returns PromptResponse Successful Response
     * @throws ApiError
     */
    static createPrompt(requestBody: PromptRequest): CancelablePromise<PromptResponse>;
    /**
     * Get Prompt
     * @param promptId
     * @returns PromptResponse Successful Response
     * @throws ApiError
     */
    static getPrompt(promptId: string): CancelablePromise<PromptResponse>;
    /**
     * Update Prompt
     * @param promptId
     * @param requestBody
     * @returns PromptResponse Successful Response
     * @throws ApiError
     */
    static updatePrompt(promptId: string, requestBody: UpdateMetadataRequest): CancelablePromise<PromptResponse>;
}
