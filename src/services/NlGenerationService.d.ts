import type { NLGenerationRequest } from '../models/NLGenerationRequest';
import type { NLGenerationResponse } from '../models/NLGenerationResponse';
import type { NLGenerationsSQLGenerationRequest } from '../models/NLGenerationsSQLGenerationRequest';
import type { PromptSQLGenerationNLGenerationRequest } from '../models/PromptSQLGenerationNLGenerationRequest';
import type { UpdateMetadataRequest } from '../models/UpdateMetadataRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class NlGenerationService {
    /**
     * Create Nl Generation
     * @param sqlGenerationId
     * @param requestBody
     * @returns NLGenerationResponse Successful Response
     * @throws ApiError
     */
    static createNlGeneration(sqlGenerationId: string, requestBody: NLGenerationRequest): CancelablePromise<NLGenerationResponse>;
    /**
     * Create Sql And Nl Generation
     * @param promptId
     * @param requestBody
     * @returns NLGenerationResponse Successful Response
     * @throws ApiError
     */
    static createSqlAndNlGeneration(promptId: string, requestBody: NLGenerationsSQLGenerationRequest): CancelablePromise<NLGenerationResponse>;
    /**
     * Create Prompt Sql And Nl Generation
     * @param requestBody
     * @returns NLGenerationResponse Successful Response
     * @throws ApiError
     */
    static createPromptSqlAndNlGeneration(requestBody: PromptSQLGenerationNLGenerationRequest): CancelablePromise<NLGenerationResponse>;
    /**
     * Get Nl Generations
     * @param sqlGenerationId
     * @returns NLGenerationResponse Successful Response
     * @throws ApiError
     */
    static getNlGenerations(sqlGenerationId?: string): CancelablePromise<Array<NLGenerationResponse>>;
    /**
     * Get Nl Generation
     * @param nlGenerationId
     * @returns NLGenerationResponse Successful Response
     * @throws ApiError
     */
    static getNlGeneration(nlGenerationId: string): CancelablePromise<NLGenerationResponse>;
    /**
     * Update Nl Generation
     * @param nlGenerationId
     * @param requestBody
     * @returns NLGenerationResponse Successful Response
     * @throws ApiError
     */
    static updateNlGeneration(nlGenerationId: string, requestBody: UpdateMetadataRequest): CancelablePromise<NLGenerationResponse>;
}
