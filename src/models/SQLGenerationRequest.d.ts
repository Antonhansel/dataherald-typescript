export type SQLGenerationRequest = {
    finetuning_id?: string;
    evaluate?: boolean;
    sql?: string;
    metadata?: Record<string, any>;
};
