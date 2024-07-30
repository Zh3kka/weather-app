export type Weather = {
    temperature: number;
    description: string;
    icon: string;
};

export type WeatherData = {
    [key: string]: Weather;
};
