export class CountriesStat {
        country_name: string;
        country_flag: string;
        cases: number;
        deaths: number;
        region: string;
        total_recovered: number;
        new_deaths: number;
        new_cases: number;
        serious_critical: number;
        active_cases: number;
        total_cases_per_1m_population: number;
    }

    export class CaseByCountry {
        countries_stat: CountriesStat[];
        statistic_taken_at: Date;
    }