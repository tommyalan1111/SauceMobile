export const auth_data = {
    VALID_USER: {
        username: 'bob@example.com',
        password: '10203040'
    },

    INVALID_PASSWORD_USER: {
        username: 'bob@example.com',
        password: 'invalidPassword'
    },

    LOCKED_USERNAME_USER: {
        username: 'alice@example.com',
        password: '10203040'
    },

    MISSING_USER: {
        username: '',
        password: ''
    },

    MISSING_PASSWORD: {
        username: 'bob@example.com',
        password: ''
    },
};