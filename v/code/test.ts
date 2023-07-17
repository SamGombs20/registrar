
import * as server from '../../../schema/v/code/server.js';
//
//declaring global variables
var option_sect:HTMLDivElement;
export function test(){
    option_sect = document.getElementById('radio')as HTMLDivElement;
}
const query:string = await server.exec(
    "path",
    ["/registration_1/v/data/test.sql", true],
    'get_file_contents',
    []
);
const businesses =  await server.exec(
    "database",
    ["mutall_users", false],
    "get_sql_data",
    [query]
)
console.log(query);
businesses.forEach(business => {
    let input = document.createElement('input');
    input.type='radio';
    input.required = true;
    input.name = 'business';
    console.log(typeof(business.id));
    option_sect.appendChild(input);
});
