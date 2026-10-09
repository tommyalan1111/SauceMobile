export const testData = {
    //Valid account: priotize get from CI
    VALID_USER: {
        username: process.env.TEST_USERNAME || 'bob@example.com',
        password: process.env.TEST_PASSWORD || '10203040'
    },

    INVALID_USER: {
        username: 'bob@example.com',
        password: 'invalidPassword'
    },

    LOCKED_USER: {
        username: 'alice@example.com',
        password: '10203040'
    },
    
 }


