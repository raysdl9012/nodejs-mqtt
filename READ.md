comment this line in validator.js (\node_modules\jsonschema\lib\validator.js:111):

if((typeof schema !== 'boolean' && typeof schema !== 'object') || schema === null){
     throw new SchemaError('Expected `schema` to be an object or boolean');
}