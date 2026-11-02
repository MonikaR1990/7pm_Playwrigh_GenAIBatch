module.exports = {
    default: {
        requireModule: ['ts-node/register'],

        require: [
            'steps/**/*.ts',
            // 'steps/loginPage.spec.ts',
            'hooks/**/*.ts'
        ],

        paths: [
            'features/**/*.feature'
            // 'features/login.feature'
            // 'features/register.feature'
        ],

        format: [
            'progress',
            'html:reports/cucumber-report.html', 
        ],

        formatOptions: {
            snippetInterface: 'async-await'
        }
    }
};