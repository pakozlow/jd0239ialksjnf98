export interface TestCaseState {
    readonly testCases: TestCase[];
}

export interface TestCase {
    id: number;
    name: string;
    status: TestCaseStatus;
}

export enum TestCaseStatus {
    UNDEFINED = 'UNDEFINED',
    FAILED = 'FAILED',
    PASSED = 'PASSED'
};
