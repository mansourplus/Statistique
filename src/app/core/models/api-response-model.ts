export class ApiResponseModel{
    error:string;
    statusCode:number;
    message:string;
    data:DataModel;
}

export class DataModel{
    lastChecked:Date;
    covid19Stats:Covid19StatsModel[];
}

export class Covid19StatsModel
{
    city:string;
    province:string;
    country:string;
    lastUpdate:Date;
    keyId:string;
    confirmed:number;
    deaths:number;
    recovered:number;
}

