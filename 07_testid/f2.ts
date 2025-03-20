export function keskmineKiirus(km1: number, km2: number):number{
    const time1=1/km1;
    const time2=1/km2;
    const totalTime = time1+time2;
    const averageSpeed=2/totalTime;
    return averageSpeed;
}