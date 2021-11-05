module.exports={
	entry: './reactApps/index.js',
	output:{
		path: __dirname + '/public',
		filename: 'layout.js'
	},
	module:{
		rules:[
			{
				use:"babel-loader",
				test:/\.js$/,
				exclude: /node_modules/
			}

		]
	}
}