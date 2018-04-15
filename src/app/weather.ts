export class weather {

    public temp: number;
    public temp_min: number;
    public temp_max: number;
    public description: string;

    constructor(currentTemp: number,
        lowTemp: number,
        highTemp: number,
        cond: string) {
        this.description = cond;
        this.temp = currentTemp;
        this.temp_min = lowTemp;
        this.temp_max = highTemp;
    }

    // kelvinToFar (in : number) {
    //     return (in * 9/5 - 459.67);
    // }
}