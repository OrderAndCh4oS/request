module.exports = (api) => {
    const env = api.env();
    const caller = api.caller((inst) => (inst && inst.name) || 'any');
    const isBundler = caller === 'rollup-plugin-babel';
    const isCli = caller === '@babel/node';
    const isTest = (/\b(test)\b/).exec(env);
    const modules = (isTest && !isBundler) || isCli ? 'commonjs' : false;

    return {
        sourceMaps: true,
        plugins: [
            [
                '@babel/proposal-class-properties',
                {
                    loose: true,
                },
            ],
            [
                '@babel/proposal-object-rest-spread',
                {
                    useBuiltIns: true,
                    loose: true,
                },
            ],
        ].filter(Boolean),
        presets: [
            [
                '@babel/env',
                {
                    useBuiltIns: 'usage',
                    corejs: 3,
                    loose: true,
                    modules,
                },
            ]
        ],
    };
};
