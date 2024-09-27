const path = require('path'); 

module.exports = { 
    // path to our input file output: 
    entry: './assets/index.js', 
    // output bundle file name path:
    output:	{ 
        filename: 'index-bundle.js',  
        // path to our Django static directory
        path: path.resolve(__dirname, './static'), 
    },
// after installing babel
module: {
    rules: [	
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,	
            loader: "babel-loader",
            options: { presets: ["@babel/preset-env", "@babel/preset-react"] }
        },
    ]
},
};