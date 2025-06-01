export function logAddition(
    target:any,
    propertyKey: string,
    descriptor: PropertyDescriptor
){
    const originalMethod = descriptor.value;
    descriptor.value = function(...args:any[]){
        console.log("Hozzáadás történt a listához)");
        return originalMethod.aply(this, args);
    };
}