
function person()
{
    let name;
    this.setName=function(name)
    {
        this.name=name
    };
    this.sayHi=function()
    {
        console.log('Hi,'+this.name);
    };
}
module.exports=person;