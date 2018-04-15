export class weather {

    public temp: number;
    public temp_min: number;
    public temp_max: number;
    public description: string;
    public loadDate:string;

    constructor(currentTemp: number,
        lowTemp: number,
        highTemp: number,
        cond: string,
        loadDate: string) {
        this.description = cond;
        this.temp = currentTemp;
        this.temp_min = lowTemp;
        this.temp_max = highTemp;
        this.loadDate = loadDate;
    }

    // kelvinToFar (in : number) {
    //     return (in * 9/5 - 459.67);
    // }
}