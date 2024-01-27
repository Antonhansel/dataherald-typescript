import type { PromptSQLGenerationRequest } from '../models/PromptSQLGenerationRequest';
import type { SQLGenerationRequest } from '../models/SQLGenerationRequest';
import type { SQLGenerationResponse } from '../models/SQLGenerationResponse';
import type { UpdateMetadataRequest } from '../models/UpdateMetadataRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class SqlGenerationService {
    /**
     * Create Sql Generation
     * @param promptId
     * @param requestBody
     * @returns SQLGenerationResponse Successful Response
     * @throws ApiError
     */
    static createSqlGeneration(promptId: string, requestBody: SQLGenerationRequest): CancelablePromise<SQLGenerationResponse>;
    /**
     * Create Prompt And Sql Generation
     * @param requestBody
     * @returns SQLGenerationResponse Successful Response
     * @throws ApiError
     */
    static createPromptAndSqlGeneration(requestBody: PromptSQLGenerationRequest): CancelablePromise<SQLGenerationResponse>;
    /**
     * Get Sql Generations
     * @param promptId
     * @returns SQLGenerationResponse Successful Response
     * @throws ApiError
     */
    static getSqlGenerations(promptId?: string): CancelablePromise<Array<SQLGenerationResponse>>;
    /**
     * Get Sql Generation
     * @param sqlGenerationId
     * @returns SQLGenerationResponse Successful Response
     * @throws ApiError
     */
    static getSqlGeneration(sqlGenerationId: string): CancelablePromise<SQLGenerationResponse>;
    /**
     * Update Sql Generation
     * @param sqlGenerationId
     * @param requestBody
     * @returns SQLGenerationResponse Successful Response
     * @throws ApiError
     */
    static updateSqlGeneration(sqlGenerationId: string, requestBody: UpdateMetadataRequest): CancelablePromise<SQLGenerationResponse>;
    /**
     * Execute Sql Query
     * Executes a query on the given db_connection_id
     * @param sqlGenerationId
     * @param maxRows
     * @returns any Successful Response
     * @throws ApiError
     */
    static executeSqlQuery(sqlGenerationId: string, maxRows?: number): CancelablePromise<Array<any>>;
    /**
     * Export Csv File
     * Exports a CSV file for the given sql_generation_id
     * @param sqlGenerationId
     * @returns any Successful Response
     * @throws ApiError
     */
    static exportCsvFile(sqlGenerationId: string): CancelablePromise<any>;
}
