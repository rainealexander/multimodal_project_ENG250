module.exports = {
    "presets": [
        [
            "@babel/preset-react",
            {
                development: process.env.PROJECTMODE === "development"
            },
        ],
        "@babel/preset-env"
    ]
};
