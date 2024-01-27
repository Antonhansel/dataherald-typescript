import type { InstructionRequest } from '../models/InstructionRequest';
import type { InstructionResponse } from '../models/InstructionResponse';
import type { UpdateInstruction } from '../models/UpdateInstruction';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class InstructionsService {
    /**
     * Get Instructions
     * Gets instructions
     * @param dbConnectionId
     * @param page
     * @param limit
     * @returns InstructionResponse Successful Response
     * @throws ApiError
     */
    static getInstructions(dbConnectionId?: string, page?: number, limit?: number): CancelablePromise<Array<InstructionResponse>>;
    /**
     * Add Instruction
     * Adds an instruction
     * @param requestBody
     * @returns InstructionResponse Successful Response
     * @throws ApiError
     */
    static addInstruction(requestBody: InstructionRequest): CancelablePromise<InstructionResponse>;
    /**
     * Update Instruction
     * Updates an instruction
     * @param instructionId
     * @param requestBody
     * @returns InstructionResponse Successful Response
     * @throws ApiError
     */
    static updateInstruction(instructionId: string, requestBody: UpdateInstruction): CancelablePromise<InstructionResponse>;
    /**
     * Delete Instruction
     * Deletes an instruction
     * @param instructionId
     * @returns any Successful Response
     * @throws ApiError
     */
    static deleteInstruction(instructionId: string): CancelablePromise<Record<string, any>>;
}
