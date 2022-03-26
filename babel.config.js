const presets = [
    [
        "@babel/env",
        {
            "exclude": ["transform-async-to-generator", "transform-regenerator"]
        }
    ]
];

module.exports = {
    presets,
    "sourceType": "unambiguous"
};